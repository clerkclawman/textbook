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
import os

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

# Topics to avoid (too sensitive or inappropriate for Eiken students)
AVOID_TOPICS = [
    'war', 'conflict', 'death', 'kill', 'murder', 'terror', 'attack',
    'crash', 'disaster', 'emergency', 'crisis', 'scandal', 'corruption',
    'assassination', 'violence', 'political', 'trump', 'biden', 'election',
    'protest', 'riot', 'shooting', 'bomb', 'explosion', 'hostage', 'funeral',
    'massacre', 'genocide', 'torture', 'rape', 'sexual', 'abuse', 'body',
    'corpse', 'mutilation', 'beheading', 'execution', 'suicide', 'drug cartel',
    'cartel', 'gang', 'murderer', 'killer', 'victim', 'blood', 'gore'
]

# Fragment/incomplete headline patterns to filter out
FRAGMENT_PATTERNS = [
    r'^["\']',  # Starts with quote
    r'^POLL OF THE DAY$',
    r'^Latest news bulletin',
    r'^EXCLUSIVE$',
    r'^BREAKING$',
    r'^UPDATE$',
    r'^\s*$',  # Empty or whitespace only
    r'^[A-Z]{2,}$',  # All caps (likely labels)
    r'^\d+\s+\w+\s+\d+$',  # Date patterns
    r'^Breathtaking',  # Travel copy
    r'^Blinded by',
    r'^\w+\s+\d+$',  # Single word + number
    r'\s+the\s*$',  # Ends with "the" (incomplete)
    r'\s+that\s+opens\s+to\s+the\s*$',  # Ends with "that opens to the" (incomplete)
    r'^\w+\s+\w+$',  # Two words only (likely names)
    r'^\w+\s+\w+\s+\w+$',  # Three words only (likely names)
    r'^\w+,\s*\w+,\s*\w+',  # Comma-separated list (section headers)
    r'^\w+\s+\w+\s+\w+\s+\w+\s*$',  # Four words, likely section header
    r'that\s+opens\s+to\s+the\s*$',  # Contains "that opens to the" (incomplete)
    r'^Photos$',  # Section header
    r'^Explained$',  # Section header
    r'^Analysis$',  # Section header
    r'^Opinion$',  # Section header
    r'^Comment$',  # Section header
    r'^Review$',  # Section header
    r'^Interview$',  # Section header
    r'^Profile$',  # Section header
    r'^Feature$',  # Section header
    r'^\w+$',  # Single word only
    r'^\w+\s+\w+$',  # Two words only
    r'^\w+\s+\w+\s+\w+$',  # Three words only
    r'^\w+\s+\w+\s+\w+\s+\w+$',  # Four words only
    r'\s+to\s+the\s*$',  # Ends with "to the" (incomplete)
    r'\s+in\s+the\s*$',  # Ends with "in the" (incomplete)
    r'\s+on\s+the\s*$',  # Ends with "on the" (incomplete)
    r'\s+at\s+the\s*$',  # Ends with "at the" (incomplete)
    r'\s+from\s+the\s*$',  # Ends with "from the" (incomplete)
    r'\s+with\s+the\s*$',  # Ends with "with the" (incomplete)
    r'\s+by\s+the\s*$',  # Ends with "by the" (incomplete)
    r'\s+of\s+the\s*$',  # Ends with "of the" (incomplete)
    r'\s+for\s+the\s*$',  # Ends with "for the" (incomplete)
    r'\s+about\s+the\s*$',  # Ends with "about the" (incomplete)
    r'\s+over\s+the\s*$',  # Ends with "over the" (incomplete)
    r'\s+under\s+the\s*$',  # Ends with "under the" (incomplete)
    r'\s+against\s+the\s*$',  # Ends with "against the" (incomplete)
    r'\s+between\s+the\s*$',  # Ends with "between the" (incomplete)
    r'\s+among\s+the\s*$',  # Ends with "among the" (incomplete)
    r'\s+within\s+the\s*$',  # Ends with "within the" (incomplete)
    r'\s+without\s+the\s*$',  # Ends with "without the" (incomplete)
    r'\s+beyond\s+the\s*$',  # Ends with "beyond the" (incomplete)
    r'\s+behind\s+the\s*$',  # Ends with "behind the" (incomplete)
    r'\s+below\s+the\s*$',  # Ends with "below the" (incomplete)
    r'\s+above\s+the\s*$',  # Ends with "above the" (incomplete)
    r'\s+near\s+the\s*$',  # Ends with "near the" (incomplete)
    r'\s+around\s+the\s*$',  # Ends with "around the" (incomplete)
    r'\s+through\s+the\s*$',  # Ends with "through the" (incomplete)
    r'\s+across\s+the\s*$',  # Ends with "across the" (incomplete)
    r'\s+along\s+the\s*$',  # Ends with "along the" (incomplete)
    r'\s+past\s+the\s*$',  # Ends with "past the" (incomplete)
    r'\s+towards\s+the\s*$',  # Ends with "towards the" (incomplete)
    r'\s+into\s+the\s*$',  # Ends with "into the" (incomplete)
    r'\s+onto\s+the\s*$',  # Ends with "onto the" (incomplete)
    r'\s+upon\s+the\s*$',  # Ends with "upon the" (incomplete)
]

# Minimum headline length (too short = fragment)
MIN_HEADLINE_LENGTH = 20
# Maximum headline length (too long = complex)
MAX_HEADLINE_LENGTH = 100

# NVIDIA NIM free tier API for translation and question generation
LLM_SERVER = 'https://integrate.api.nvidia.com/v1'
LLM_MODEL = 'deepseek-ai/deepseek-v4-flash'

# Load API key from ~/.hermes/.env
def load_api_key():
    try:
        with open(os.path.expanduser('~/.hermes/.env'), 'r') as f:
            for line in f:
                if line.startswith('NVIDIA_API_KEY='):
                    return line.strip().split('=', 1)[1]
    except:
        pass
    return 'nvapi-'

LLM_API_KEY = load_api_key()

def is_english(text):
    """Check if text is primarily English"""
    # Simple check: if it contains mostly ASCII characters
    ascii_chars = sum(1 for c in text if ord(c) < 128)
    return ascii_chars / len(text) > 0.7 if text else False

def is_appropriate(headline):
    """Check if headline is appropriate for classroom discussion"""
    headline_lower = headline.lower()
    
    # Check against avoid topics
    for topic in AVOID_TOPICS:
        if topic in headline_lower:
            return False
    
    # Check against fragment patterns
    for pattern in FRAGMENT_PATTERNS:
        if re.search(pattern, headline, re.IGNORECASE):
            return False
    
    # Check length
    if len(headline) < MIN_HEADLINE_LENGTH or len(headline) > MAX_HEADLINE_LENGTH:
        return False
    
    # Check if it's just a quote fragment (starts and ends with quotes)
    if headline.startswith('"') and headline.endswith('"') and len(headline) < 50:
        return False
    
    # Check if it's just a name or single word
    words = headline.split()
    if len(words) < 4:
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
    """Generate a discussion question that relates to the specific headline using templates"""
    headline_lower = headline.lower()
    headline_words = headline_lower.split()
    
    # Oil/Energy related - use word boundaries to avoid matching verbs like "fuels"
    if re.search(r'\boil\b|\bprice\b|\bfuel\b|\benergy\b|\bgas\b|\bpetrol\b', headline_lower):
        # Additional check: make sure it's actually about energy, not just "fuels" as a verb
        # Skip if "fuels" is followed by words like "row", "debate", "controversy" (verb usage)
        if re.search(r'fuels\s+(row|debate|controversy|dispute|conflict|tension)', headline_lower):
            pass  # Skip oil category, fall through to other categories
        elif 'rise' in headline_lower or 'increase' in headline_lower or 'soar' in headline_lower:
            return "How will higher prices affect you?"
        elif 'fall' in headline_lower or 'drop' in headline_lower:
            return "Is this good news for consumers?"
        else:
            return "Should we rely less on oil?"
    
    # Politics/Leadership (more specific - check for actual political context)
    elif any(word in headline_lower for word in ['pm', 'president', 'minister', 'government', 'election', 'vote', 'parliament', 'congress', 'senate']):
        if any(word in headline_lower for word in ['resign', 'quit', 'step down']):
            return "Why do leaders resign?"
        elif any(word in headline_lower for word in ['win', 'victory', 'elected']):
            return "What makes a good leader?"
        else:
            return "How does this affect the country?"
    
    # Conflict/War (more specific - check for actual conflict context, not just "military")
    elif any(word in headline_words for word in ['war', 'battlefield', 'frontline', 'attack', 'strike', 'bombing']):
        return "How can we prevent conflicts?"
    
    # Environment/Climate
    elif any(word in headline_lower for word in ['climate', 'environment', 'forest', 'pollution', 'carbon', 'green']):
        if any(word in headline_lower for word in ['loss', 'destroy', 'damage']):
            return "What can we do to help?"
        else:
            return "Is this enough to protect the environment?"
    
    # Technology/AI
    elif any(word in headline_lower for word in ['ai', 'artificial intelligence', 'robot', 'tech', 'digital', 'app', 'software']):
        if any(word in headline_lower for word in ['job', 'work', 'employment']):
            return "Will AI take your job?"
        else:
            return "How will this change our lives?"
    
    # Business/Economy
    elif any(word in headline_lower for word in ['company', 'business', 'market', 'economy', 'stock', 'billion', 'million', 'profit', 'revenue']):
        if any(word in headline_lower for word in ['fund', 'investment', 'pay', 'cost']):
            return "Is this money well spent?"
        else:
            return "How does this affect the economy?"
    
    # Health/Medical
    elif any(word in headline_lower for word in ['health', 'medical', 'doctor', 'hospital', 'virus', 'vaccine', 'cancer', 'disease', 'treatment']):
        return "What should people know about this?"
    
    # Sports (more specific - check for actual sports context, use word boundaries)
    elif any(word in headline_words for word in ['football', 'soccer', 'basketball', 'tennis', 'golf', 'cricket', 'rugby', 'olympic', 'world cup', 'premier league', 'nba', 'nfl']):
        if any(word in headline_lower for word in ['win', 'victory', 'champion', 'trophy']):
            return "What makes a team successful?"
        else:
            return "Do you follow this sport?"
    
    # Entertainment/Movies (more specific)
    elif any(word in headline_lower for word in ['movie', 'film', 'actor', 'actress', 'director', 'cinema', 'hollywood', 'oscar', 'netflix', 'disney']):
        return "Would you watch this?"
    
    # Music (separate from entertainment)
    elif any(word in headline_lower for word in ['song', 'album', 'band', 'singer', 'concert', 'music', 'spotify', 'apple music']):
        return "Would you listen to this?"
    
    # Crime/Legal
    elif any(word in headline_lower for word in ['court', 'judge', 'prison', 'jail', 'arrest', 'police', 'law', 'trial', 'verdict']):
        if any(word in headline_lower for word in ['sentence', 'prison', 'jail']):
            return "Is this punishment fair?"
        else:
            return "What should happen next?"
    
    # International/Relations
    elif any(word in headline_lower for word in ['international', 'diplomatic', 'embassy', 'ambassador', 'treaty', 'summit', 'meeting between']):
        return "How does this affect international relations?"
    
    # Science/Space
    elif any(word in headline_lower for word in ['space', 'nasa', 'rocket', 'planet', 'moon', 'satellite', 'scientist', 'research', 'discovery']):
        return "Why is this important?"
    
    # Default generic questions that still relate
    else:
        default_questions = [
            "What's your opinion on this?",
            "How does this affect you?",
            "Is this good or bad news?",
            "What should be done about this?",
            "Do you agree with this decision?",
            "How will this change things?",
            "What's the most important part?",
            "Who does this affect most?",
            "What are the consequences?",
            "Is this surprising?"
        ]
        return random.choice(default_questions)

def translate_to_japanese_batch(texts):
    """Translate multiple texts to Japanese using NVIDIA NIM API in batches"""
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
            
            # Use NVIDIA NIM API for batch translation
            url = f"{LLM_SERVER}/chat/completions"
            
            data = {
                "model": LLM_MODEL,
                "messages": [
                    {"role": "user", "content": batch_prompt}
                ],
                "max_tokens": 800,
                "temperature": 0.1
            }
            
            req = urllib.request.Request(
                url,
                data=json.dumps(data).encode('utf-8'),
                headers={
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {LLM_API_KEY}'
                }
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
            headers={
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {LLM_API_KEY}'
            }
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
    seen_headlines = set()  # Track seen headlines to avoid duplicates
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
                
                # Skip duplicates (check both original and simplified)
                simplified_headline = simplify_english(headline)
                if simplified_headline in seen_headlines:
                    print(f"  Skipping duplicate: {simplified_headline[:50]}...")
                    continue
                seen_headlines.add(simplified_headline)
                
                # Check if simplified headline is too short (fragment after simplification)
                if len(simplified_headline) < MIN_HEADLINE_LENGTH:
                    print(f"  Skipping fragment after simplification: {simplified_headline[:50]}...")
                    continue
                
                # Limit tech items
                if is_tech_source(source_name):
                    if tech_count >= max_tech_items:
                        continue
                    tech_count += 1
                    print(f"  Tech item {tech_count}/{max_tech_items}")
                
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
    """Generate news.js content with English headlines, questions, and Japanese translations"""
    # Select top items
    selected_items = news_items[:target_count]
    
    # Track question usage to avoid repetition
    question_counts = {}
    
    # Collect all texts for translation (headlines + questions)
    texts_to_translate = []
    for item in selected_items:
        texts_to_translate.append(item['headline'])
        texts_to_translate.append(item['question'])
    
    print(f"Translating {len(texts_to_translate)} texts (headlines + questions)...")
    translations = translate_to_japanese_batch(texts_to_translate)
    
    # Generate content with translations
    content_lines = []
    for i, item in enumerate(selected_items):
        print(f"Processing item {i+1}/{len(selected_items)}: {item['headline'][:50]}...")
        
        headline = item['headline']
        question = item['question']
        
        # Track question usage
        question_counts[question] = question_counts.get(question, 0) + 1
        
        # Get translations
        headline_jp = translations.get(headline, headline)
        question_jp = translations.get(question, question)
        
        # Output with both English and Japanese
        content_lines.append(f"📰 \"{headline}\" — {question}")
        content_lines.append(f"「{headline_jp}」— {question_jp}")
    
    content = '\n'.join(content_lines)
    
    # Create JavaScript structure
    today = datetime.now().strftime("%B %d, %Y")
    js_content = f"""// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {{
    stories: [
        {{
            title: "Daily News Headlines - {today}",
            content: `{content}`
        }}
    ]
}};
"""
    
    # Print question usage statistics
    print("\nQuestion usage statistics:")
    for question, count in sorted(question_counts.items(), key=lambda x: x[1], reverse=True):
        if count > 1:
            print(f"  '{question}': {count} times")
    
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