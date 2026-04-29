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
import random

# RSS Sources - Diverse international mix with tech limited to max 5 items
# Sports removed - not relevant for discussion
RSS_SOURCES = [
    # UK News
    ("BBC World", "https://feeds.bbci.co.uk/news/world/rss.xml"),
    ("Daily Mail", "https://www.dailymail.co.uk/news/index.rss"),
    
    # US News
    ("NPR World", "https://feeds.npr.org/1004/rss.xml"),
    ("Al Jazeera", "https://www.aljazeera.com/xml/rss/all.xml"),
    
    # Japan News
    ("NHK News", "https://www3.nhk.or.jp/rss/news/cat0.xml"),
    ("NHK International", "https://www3.nhk.or.jp/rss/news/cat6.xml"),
    
    # Europe News
    ("Euronews World", "https://www.euronews.com/rss"),
    
    # China News
    ("China Daily World", "http://www.chinadaily.com.cn/rss/world_rss.xml"),
    
    # Entertainment & Culture (Popular with students)
    ("BBC Entertainment", "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"),
    
    # Business & Economy (Relevant to adults)
    ("BBC Business", "https://feeds.bbci.co.uk/news/business/rss.xml"),
    
    # Health & Lifestyle (Practical topics)
    ("BBC Health", "https://feeds.bbci.co.uk/news/health/rss.xml"),
    
    # Science & Environment (Interesting stories from multiple sources)
    ("BBC Science", "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"),
    ("Daily Mail Science", "https://www.dailymail.co.uk/sciencetech/index.rss"),
    
    # Technology (Limited - max 5 items total)
    ("BBC Technology", "https://feeds.bbci.co.uk/news/technology/rss.xml"),
]

# Topics to avoid (too sensitive or inappropriate)
AVOID_TOPICS = [
    'war', 'conflict', 'death', 'kill', 'murder', 'terror', 'attack',
    'crash', 'disaster', 'emergency', 'crisis', 'scandal', 'corruption',
    'assassination', 'violence', 'political', 'trump', 'biden', 'election',
    'protest', 'riot', 'shooting', 'bomb', 'explosion', 'hostage', 'funeral'
]

# Local LLM server for translation - DISABLED
# Translation is now handled by the cron job agent directly
# LLM_SERVER = 'http://localhost:18801'
# LLM_MODEL = 'Qwen3.5-4B-HauhauCS.Q4_K_M.gguf'

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
    """Generate a varied and sometimes humorous discussion question based on the headline"""
    headline_lower = headline.lower()
    
    # AI and Technology questions
    if any(word in headline_lower for word in ['ai', 'artificial', 'intelligence', 'robot', 'chatgpt', 'openai']):
        ai_questions = [
            "Would you trust an AI to make decisions for you?",
            "What's the scariest thing about AI?",
            "Do you think AI will take your job?",
            "If AI could do one thing for you, what would it be?",
            "Are you excited or scared about AI?",
            "What's the most useful AI you've used?",
            "Do you think AI has feelings?",
            "Would you be friends with an AI?",
            "What's the weirdest thing AI has done?",
            "Do you think AI will rule the world?"
        ]
        return random.choice(ai_questions)
    
    # Gaming questions
    elif any(word in headline_lower for word in ['gaming', 'game', 'player', 'video', 'controller', 'steam', 'playstation', 'xbox']):
        gaming_questions = [
            "What's your favorite video game?",
            "How many hours do you spend gaming?",
            "Do you think gaming is addictive?",
            "What's the most expensive game you've bought?",
            "Would you rather play alone or with friends?",
            "What's the worst game you've ever played?",
            "Do you think gaming makes you smarter?",
            "What's your gaming setup like?",
            "Have you ever stayed up all night gaming?",
            "Do you think esports should be in the Olympics?"
        ]
        return random.choice(gaming_questions)
    
    # Music questions
    elif any(word in headline_lower for word in ['spotify', 'music', 'song', 'band', 'concert', 'album', 'artist', 'billie', 'stallion']):
        music_questions = [
            "What's the most embarrassing song in your playlist?",
            "Do you still listen to music from 10 years ago?",
            "What's the best concert you've ever been to?",
            "Would you pay for music or use free streaming?",
            "What's your go-to karaoke song?",
            "Do you think modern music is getting worse?",
            "What's the most overrated song ever?",
            "Have you ever met a famous musician?",
            "What's the first album you ever bought?",
            "Do you listen to music while working?"
        ]
        return random.choice(music_questions)
    
    # Social Media questions
    elif any(word in headline_lower for word in ['social media', 'facebook', 'twitter', 'instagram', 'tiktok', 'online', 'viral']):
        social_questions = [
            "How much time do you spend on social media?",
            "What's the most annoying thing about social media?",
            "Do you think social media makes people lonely?",
            "What's the last thing you posted online?",
            "Would you survive without social media for a week?",
            "What's the weirdest trend you've seen online?",
            "Do you think social media is good or bad?",
            "What's your favorite social media platform?",
            "Have you ever gone viral online?",
            "Do you think people are too addicted to phones?"
        ]
        return random.choice(social_questions)
    
    # Cars and EV questions
    elif any(word in headline_lower for word in ['car', 'vehicle', 'auto', 'drive', 'ev', 'electric', 'oil', 'petrol', 'fuel']):
        car_questions = [
            "Do you think electric cars are the future?",
            "What's your dream car?",
            "Would you rather drive or be driven?",
            "What's the worst car you've ever been in?",
            "Do you think self-driving cars are safe?",
            "What's the most expensive car you've seen?",
            "Would you give up your car for public transport?",
            "What's your favorite road trip memory?",
            "Do you think cars will disappear in the future?",
            "What's the most annoying thing about driving?"
        ]
        return random.choice(car_questions)
    
    # Sports questions
    elif any(word in headline_lower for word in ['sport', 'team', 'player', 'win', 'olympic', 'football', 'soccer', 'golf']):
        sport_questions = [
            "What's your favorite sport to watch?",
            "Do you think athletes are paid too much?",
            "What's the most exciting sports moment you've seen?",
            "Would you rather watch or play sports?",
            "What's the worst sports injury you've had?",
            "Do you think the Olympics are worth the cost?",
            "What's your favorite sports team?",
            "Have you ever met a famous athlete?",
            "Do you think video games should be considered sports?",
            "What's the most boring sport to watch?"
        ]
        return random.choice(sport_questions)
    
    # Technology questions
    elif any(word in headline_lower for word in ['technology', 'tech', 'digital', 'app', 'software', 'internet', 'cyber', 'password', 'passkey']):
        tech_questions = [
            "What's the most annoying thing about modern technology?",
            "Do you think technology makes life better or worse?",
            "What's your most used app?",
            "Would you survive without your phone for a day?",
            "What's the best tech invention ever?",
            "Do you think people are too addicted to screens?",
            "What's the worst tech problem you've had?",
            "Do you think privacy is dead in the digital age?",
            "What's your favorite piece of technology?",
            "Do you think technology will solve all our problems?"
        ]
        return random.choice(tech_questions)
    
    # Business and Money questions
    elif any(word in headline_lower for word in ['company', 'business', 'market', 'economy', 'stock', 'money', 'billion', 'million', 'price', 'cost']):
        business_questions = [
            "If you had a million dollars, what would you do?",
            "Do you think rich people are happy?",
            "What's the most expensive thing you've ever bought?",
            "Would you rather be rich or famous?",
            "Do you think money can buy happiness?",
            "What's the worst business decision you've made?",
            "Do you think big companies are good or bad?",
            "What's your dream job?",
            "Do you think the economy is getting better or worse?",
            "What's the most ridiculous thing you've seen someone spend money on?"
        ]
        return random.choice(business_questions)
    
    # Environment questions
    elif any(word in headline_lower for word in ['environment', 'climate', 'green', 'energy', 'carbon', 'pollution', 'fossil', 'chemical', 'eagle', 'butterfly', 'octopus']):
        env_questions = [
            "Do you actually recycle, or just say you do?",
            "What's the weirdest thing you've done to be eco-friendly?",
            "Do you think climate change is real?",
            "What's your favorite animal?",
            "Would you give up meat to help the environment?",
            "What's the most beautiful place in nature you've seen?",
            "Do you think humans are destroying the planet?",
            "What's the most annoying environmental rule?",
            "Have you ever seen an amazing animal in the wild?",
            "Do you think we can save the planet, or is it too late?"
        ]
        return random.choice(env_questions)
    
    # Health questions
    elif any(word in headline_lower for word in ['health', 'medical', 'doctor', 'hospital', 'virus', 'vaccine', 'cancer', 'smoking', 'fever', 'pint', 'alcohol']):
        health_questions = [
            "What's your guilty pleasure when it comes to food?",
            "Do you actually follow health advice, or just ignore it?",
            "What's the weirdest health tip you've ever heard?",
            "Do you think people are too obsessed with being healthy?",
            "What's your favorite unhealthy food?",
            "Have you ever had a strange medical experience?",
            "Do you think doctors know what they're doing?",
            "What's the most annoying health rule?",
            "Would you rather be healthy or happy?",
            "What's the worst illness you've ever had?"
        ]
        return random.choice(health_questions)
    
    # Entertainment and Movies questions
    elif any(word in headline_lower for word in ['movie', 'film', 'actor', 'actress', 'cinema', 'hollywood', 'nostalgia', 'show', 'moulin', 'rouge']):
        movie_questions = [
            "What's the worst movie you've ever seen?",
            "Do you think movies are getting better or worse?",
            "What's your favorite movie of all time?",
            "Would you rather watch a movie at home or in the cinema?",
            "What's the most overrated movie ever?",
            "Have you ever met a famous actor?",
            "Do you think movie stars are paid too much?",
            "What's the most embarrassing movie you like?",
            "Do you prefer old movies or new ones?",
            "What's the last movie that made you cry?"
        ]
        return random.choice(movie_questions)
    
    # Space questions
    elif any(word in headline_lower for word in ['space', 'nasa', 'rocket', 'planet', 'moon', 'artemis', 'mars']):
        space_questions = [
            "Do you think aliens exist?",
            "Would you go to space if you could?",
            "What's the most interesting thing about space?",
            "Do you think we should spend money on space exploration?",
            "What's your favorite planet?",
            "Would you live on Mars?",
            "Do you think space tourism will ever be normal?",
            "What's the coolest space fact you know?",
            "Do you think we'll find life on other planets?",
            "Would you rather explore space or the ocean?"
        ]
        return random.choice(space_questions)
    
    # Default questions for other topics
    else:
        default_questions = [
            "What's your opinion on this?",
            "Do you think this is good or bad?",
            "How does this affect your life?",
            "What's the most interesting part of this story?",
            "Do you think this will change anything?",
            "What's your reaction to this news?",
            "Would you tell your friends about this?",
            "Do you think this is surprising?",
            "What questions do you have about this?",
            "How does this make you feel?"
        ]
        return random.choice(default_questions)

def translate_to_japanese_batch(texts):
    """Translate multiple texts to Japanese using local LLM server in batches"""
    translations = {}
    
    # Process in larger batches for efficiency
    batch_size = 10
    total_batches = (len(texts) + batch_size - 1) // batch_size
    
    for i in range(0, len(texts), batch_size):
        batch_num = (i // batch_size) + 1
        batch = texts[i:i + batch_size]
        
        print(f"  Translating batch {batch_num}/{total_batches} ({len(batch)} texts)...")
        
        try:
            # Create batch prompt
            batch_prompt = "Translate these texts to natural Japanese suitable for Eiken students. Return only the translations, one per line:\n"
            for j, text in enumerate(batch):
                batch_prompt += f"{j+1}. {text}\n"
            
            # Use local LLM server for batch translation
            url = f"{LLM_SERVER}/v1/chat/completions"
            
            data = {
                "model": LLM_MODEL,
                "messages": [
                    {"role": "user", "content": batch_prompt}
                ],
                "max_tokens": 800,  # Increased for larger batches
                "temperature": 0.1
            }
            
            req = urllib.request.Request(
                url,
                data=json.dumps(data).encode('utf-8'),
                headers={'Content-Type': 'application/json'}
            )
            
            with urllib.request.urlopen(req, timeout=90) as response:
                result = response.read().decode('utf-8')
                    
            # Parse JSON response
            response_data = json.loads(result)
            
            # Extract translations from response
            if 'choices' in response_data and len(response_data['choices']) > 0:
                translation_text = response_data['choices'][0]['message']['content']
                
                # Parse the batch response - each line should be a translation
                lines = translation_text.strip().split('\n')
                for j, line in enumerate(lines):
                    if j < len(batch):
                        # Extract the translation (remove numbering like "1. " or "1) ")
                        translation = line.strip()
                        # Remove any numbering
                        translation = re.sub(r'^\d+[\.\)]\s*', '', translation)
                        # Remove any remaining numbering at the end
                        translation = re.sub(r'\s*\d+[\.\)]?\s*$', '', translation)
                        translations[batch[j]] = translation
                        print(f"    {j+1}. {batch[j][:30]}... -> {translation[:30]}...")
            else:
                # Fallback: use original text
                print(f"    Warning: No valid response, using original text")
                for text in batch:
                    translations[text] = text
                    
        except Exception as e:
            print(f"    Batch translation error: {e}")
            # Fallback: use original text for this batch
            for text in batch:
                translations[text] = text
    
    return translations

def translate_to_japanese(text):
    """Translate text to Japanese using local LLM server"""
    try:
        url = f"{LLM_SERVER}/v1/chat/completions"
        
        data = {
            "model": LLM_MODEL,
            "messages": [
                {"role": "user", "content": f"Translate this to natural Japanese suitable for Eiken students: {text}"}
            ],
            "max_tokens": 200,
            "temperature": 0.1
        }
        
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req, timeout=30) as response:
            result = response.read().decode('utf-8')
            
        response_data = json.loads(result)
        
        if 'choices' in response_data and len(response_data['choices']) > 0:
            translation = response_data['choices'][0]['message']['content'].strip()
            return translation
        else:
            return text
            
    except Exception as e:
        print(f"Translation error for '{text}': {e}")
        return text

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
        
        return items[:15]  # Return top 15 to reach target of 50 items
    
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []

def is_tech_source(source_name):
    """Check if source is tech-related (limited to max 5 items)"""
    tech_sources = ['BBC Technology', 'BBC Science', 'Daily Mail Science']
    return source_name in tech_sources

def fetch_news_from_sources():
    """Fetch news from all RSS sources with tech limited to max 5 items"""
    all_news = []
    tech_count = 0
    max_tech_items = 5
    
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
                
                # Limit tech items
                if is_tech_source(source_name):
                    if tech_count >= max_tech_items:
                        continue
                    tech_count += 1
                    print(f"  Tech item {tech_count}/{max_tech_items}")
                
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
    
    print(f"Total items fetched: {len(all_news)} (Tech: {tech_count}/{max_tech_items})")
    return all_news

def generate_news_js(news_items, target_count=50):
    """Generate news.js content - English only, translation handled by cron job agent"""
    # Select top items
    selected_items = news_items[:target_count]
    
    # Generate content - English only
    content_lines = []
    for i, item in enumerate(selected_items):
        print(f"Processing item {i+1}/{len(selected_items)}: {item['headline'][:50]}...")
        
        # Output English only - translation will be handled by cron job agent
        content_lines.append(f"📰 \"{item['headline']}\" — {item['question']}")
    
    content = '\n'.join(content_lines)
    
    # Create JavaScript structure
    today = datetime.now().strftime("%B %d, %Y")
    js_content = f"""// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations will be added by cron job agent

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