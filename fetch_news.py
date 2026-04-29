#!/usr/bin/env python3
"""
News Headlines Generator
Fetches news from multiple RSS sources and generates news.js for Chatterbox textbook
"""

import xml.etree.ElementTree as ET
import urllib.request
import json
from datetime import datetime
import re
import html
import urllib.parse

# RSS Sources - Focus on English sources
RSS_SOURCES = [
    # International Sources (English)
    ("BBC Technology", "http://feeds.bbci.co.uk/news/technology/rss.xml"),
    ("BBC Science", "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml"),
    ("BBC Business", "http://feeds.bbci.co.uk/news/business/rss.xml"),
    ("BBC Entertainment", "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"),
    ("BBC Health", "http://feeds.bbci.co.uk/news/health/rss.xml"),
    
    # Japanese Sources (for variety, will filter for English content)
    ("NHK News", "https://www3.nhk.or.jp/rss/news/cat0.xml"),
    ("NHK International", "https://www3.nhk.or.jp/rss/news/cat6.xml"),
    ("NHK Science", "https://www3.nhk.or.jp/rss/news/cat3.xml"),
    ("NHK Sports", "https://www3.nhk.or.jp/rss/news/cat7.xml"),
]

# Topics to avoid (too sensitive or inappropriate)
AVOID_TOPICS = [
    'war', 'conflict', 'death', 'kill', 'murder', 'terror', 'attack',
    'crash', 'disaster', 'emergency', 'crisis', 'scandal', 'corruption',
    'assassination', 'violence', 'political', 'trump', 'biden', 'election',
    'protest', 'riot', 'shooting', 'bomb', 'explosion', 'hostage', 'funeral'
]

def is_english(text):
    """Check if text is primarily English"""
    # Simple check: if it contains mostly ASCII characters
    ascii_chars = sum(1 for c in text if ord(c) < 128)
    return ascii_chars / len(text) > 0.7 if text else False

def is_appropriate(headline):
    """Check if headline is appropriate for classroom discussion"""
    headline_lower = headline.lower()
    for topic in AVOID_TOPICS:
        if topic in headline_lower:
            return False
    return True

def simplify_english(text, max_length=12):
    """Simplify English text to Eiken Pre-2 level"""
    # Remove complex words and phrases
    text = re.sub(r'\b(?:announces|announced|declares|declared)\b', 'says', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:approximately|approximately|roughly)\b', 'about', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:demonstrates|demonstrated)\b', 'shows', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:indicates|indicated)\b', 'shows', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:acquisition|acquires|acquired)\b', 'buys', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:restrictions|restriction)\b', 'rules', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:billionaire|billionaires)\b', 'rich people', text, flags=re.IGNORECASE)
    
    # Remove colons and other punctuation that makes it complex
    text = re.sub(r':.*$', '', text)  # Remove everything after colon
    text = re.sub(r'\?.*$', '', text)  # Remove everything after question mark
    
    # Limit length
    words = text.split()
    if len(words) > max_length:
        text = ' '.join(words[:max_length])
    
    return text.strip()

def generate_question(headline):
    """Generate a discussion question based on the headline"""
    headline_lower = headline.lower()
    
    # More specific question templates based on common topics
    # Order matters - more specific matches first
    if any(word in headline_lower for word in ['gaming', 'game', 'player', 'video', 'controller', 'steam', 'playstation', 'xbox']):
        return "Do you like video games?"
    elif any(word in headline_lower for word in ['spotify', 'music', 'song', 'band', 'concert', 'album', 'artist']):
        return "What kind of music do you like?"
    elif any(word in headline_lower for word in ['social media', 'facebook', 'twitter', 'instagram', 'tiktok', 'online']):
        return "How has social media changed your life?"
    elif any(word in headline_lower for word in ['ai', 'artificial', 'intelligence', 'robot', 'chatgpt']):
        return "What do you think about AI?"
    elif any(word in headline_lower for word in ['car', 'vehicle', 'auto', 'drive', 'ev', 'electric']):
        return "Do you think electric cars are the future?"
    elif any(word in headline_lower for word in ['sport', 'team', 'player', 'win', 'olympic', 'football', 'soccer']):
        return "Do you like watching sports?"
    elif any(word in headline_lower for word in ['technology', 'tech', 'digital', 'app', 'software', 'internet']):
        return "How has technology changed your life?"
    elif any(word in headline_lower for word in ['award', 'prize', 'honor', 'recognize', 'winner']):
        return "What achievement deserves recognition?"
    elif any(word in headline_lower for word in ['company', 'business', 'market', 'economy', 'stock', 'money']):
        return "What makes a good company?"
    elif any(word in headline_lower for word in ['environment', 'climate', 'green', 'energy', 'carbon']):
        return "What can we do to help the environment?"
    elif any(word in headline_lower for word in ['health', 'medical', 'doctor', 'hospital', 'virus']):
        return "How do you stay healthy?"
    elif any(word in headline_lower for word in ['education', 'school', 'university', 'student', 'teacher']):
        return "What's important in education?"
    elif any(word in headline_lower for word in ['food', 'restaurant', 'cooking', 'eat', 'chef']):
        return "What's your favorite food?"
    elif any(word in headline_lower for word in ['travel', 'trip', 'vacation', 'visit', 'tourist']):
        return "Where would you like to travel?"
    elif any(word in headline_lower for word in ['movie', 'film', 'actor', 'actress', 'cinema', 'hollywood']):
        return "What's your favorite movie?"
    elif any(word in headline_lower for word in ['space', 'nasa', 'rocket', 'planet', 'moon']):
        return "Are you interested in space exploration?"
    elif any(word in headline_lower for word in ['animal', 'wildlife', 'species', 'nature']):
        return "Do you like animals?"
    else:
        return "What do you think about this news?"

def translate_to_japanese(text):
    """Translate text to Japanese - placeholder for AI translation"""
    # This function will be called by the cron job agent
    # The agent will handle the actual translation
    return f"[TRANSLATE: {text}]"

def fetch_rss_feed(url):
    """Fetch and parse RSS feed"""
    try:
        with urllib.request.urlopen(url, timeout=10) as response:
            xml_content = response.read()
        
        # Parse XML
        root = ET.fromstring(xml_content)
        
        # Find all items
        items = []
        for item in root.findall('.//item'):
            title_elem = item.find('title')
            if title_elem is not None and title_elem.text:
                # Unescape HTML entities
                title = html.unescape(title_elem.text)
                items.append(title)
        
        return items[:10]  # Return top 10
    
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []

def fetch_news_from_sources():
    """Fetch news from all RSS sources"""
    all_news = []
    
    for source_name, rss_url in RSS_SOURCES:
        try:
            print(f"Fetching from {source_name}...")
            headlines = fetch_rss_feed(rss_url)
            
            for headline in headlines:
                # Skip if not English
                if not is_english(headline):
                    continue
                
                # Skip if not appropriate
                if not is_appropriate(headline):
                    continue
                
                # Simplify the headline
                simplified_headline = simplify_english(headline)
                
                # Generate question
                question = generate_question(simplified_headline)
                
                all_news.append({
                    'source': source_name,
                    'headline': simplified_headline,
                    'question': question,
                    'original': headline
                })
                
        except Exception as e:
            print(f"Error processing {source_name}: {e}")
            continue
    
    return all_news

def generate_news_js(news_items, target_count=50):
    """Generate news.js content"""
    # Select top items
    selected_items = news_items[:target_count]
    
    # Generate content
    content_lines = []
    for i, item in enumerate(selected_items):
        print(f"Processing item {i+1}/{len(selected_items)}: {item['headline'][:50]}...")
        
        # Format: 📰 "headline" — question?
        # Japanese translation placeholder
        headline_jp = translate_to_japanese(item['headline'])
        question_jp = translate_to_japanese(item['question'])
        
        content_lines.append(f"📰 \"{item['headline']}\" — {item['question']}")
        content_lines.append(f"「{headline_jp}」— {question_jp}")
    
    content = '\n'.join(content_lines)
    
    # Create JavaScript structure
    today = datetime.now().strftime("%B %d, %Y")
    js_content = f"""// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility

var news = {{
    stories: [
        {{
            title: "Daily News Headlines - {today}",
            content: `{content}`
        }}
    ]
}};
"""
    
    return js_content

def main():
    """Main function"""
    print("Starting news headlines generation...")
    
    # Fetch news
    news_items = fetch_news_from_sources()
    print(f"Fetched {len(news_items)} news items")
    
    if len(news_items) < 50:
        print(f"Warning: Only {len(news_items)} items fetched, need 50")
    
    # Generate news.js
    js_content = generate_news_js(news_items)
    
    # Write to file
    output_file = "/home/tony/textbook/news.js"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Generated {output_file} with {len(news_items)} news items")
    
    # Show sample
    print("\nSample headlines:")
    for i, item in enumerate(news_items[:5], 1):
        print(f"{i}. {item['headline']} -> {item['question']} ({item['source']})")

if __name__ == "__main__":
    main()