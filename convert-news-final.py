#!/usr/bin/env python3
"""
Convert news questions to TPRS-style stories like adult stories
Each news item becomes a separate story with English/Japanese pairs
"""

import re
import json

# Read the news content
with open('/home/tony/textbook/news-2026-03-10.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the content string
content_match = re.search(r'content:\s*`([\s\S]*?)`', content)
if not content_match:
    print("Error: Couldn't find content")
    exit(1)

news_content = content_match.group(1)

# Split into numbered questions (1. 2. 3. etc.)
questions = re.split(r'\n(?=\d+\.\s)', news_content)
questions = [q.strip() for q in questions if q.strip() and re.match(r'^\d+\.\s', q)]

stories = []

for i, question in enumerate(questions, 1):
    # Remove the leading "X. " number
    question = re.sub(r'^\d+\.\s*', '', question)
    
    # Find where Japanese text starts
    match_japanese = re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', question)
    if not match_japanese:
        print(f"Warning: Question {i} has no Japanese text")
        continue
    
    japanese_start = match_japanese.start()
    english_part = question[:japanese_start].strip()
    japanese_part = question[japanese_start:].strip()
    
    # Find the question part in English (starts with Should/Do/Does/Is/Are/Will/Would/How/What/etc.)
    # Pattern: statement. Question?
    english_split = re.search(r'(.+?\?)\s+([A-Z][^.]*\?)', english_part)
    if english_split:
        statement_en = english_split.group(1).strip()
        question_en = english_split.group(2).strip()
    else:
        # Fallback: split on first question mark
        parts = english_part.split('?')
        if len(parts) >= 2:
            statement_en = parts[0] + '?'
            question_en = '?'.join(parts[1:]) + '?'
        else:
            statement_en = english_part
            question_en = ''
    
    # Find the question part in Japanese
    # Japanese question usually starts with the same pattern or after a period
    japanese_split = re.search(r'(.+?[。！？])\s*([^\s。！？]+.*?[。！？]?)', japanese_part)
    if japanese_split:
        statement_ja = japanese_split.group(1).strip()
        question_ja = japanese_split.group(2).strip()
    else:
        # Fallback
        statement_ja = japanese_part
        question_ja = ''
    
    # Create content in TPRS format: English/Japanese pairs separated by newlines
    content_lines = []
    content_lines.append(statement_en)
    content_lines.append(statement_ja)
    
    if question_en and question_ja:
        content_lines.append('')  # blank line separator
        content_lines.append(question_en)
        content_lines.append(question_ja)
    
    story_content = '\n'.join(content_lines)
    
    # Generate title
    title_words = statement_en.split()[:6]
    title = f"News {i}: {' '.join(title_words)}"
    
    stories.append({
        "title": title,
        "content": story_content
    })

# Write output as JavaScript
output_lines = ['var news20260310 = [']
story_strs = []
for story in stories:
    story_json = json.dumps(story, ensure_ascii=False)
    story_strs.append(f'  {story_json}')
output_lines.append(',\n'.join(story_strs))
output_lines.append('];')
output_lines.append('module.exports = news20260310;')

output_file = '/home/tony/textbook/news-2026-03-10-stories.js'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f"Successfully converted {len(stories)} news items to TPRS story format")
print(f"Output: {output_file}")
print("\nFirst story preview:")
if stories:
    print(f"Title: {stories[0]['title']}")
    print(f"Content:\n{stories[0]['content']}")
