#!/usr/bin/env python3
"""
Convert news questions to TPRS-style sentence pairs
Simple approach
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

# Split into numbered questions
questions = re.split(r'\n\s*(?=\d+\.\s)', news_content)
questions = [q.strip() for q in questions if q.strip() and re.match(r'^\d+\.\s', q)]

stories = []

for i, question in enumerate(questions, 1):
    # Remove the leading "X. " number
    question = re.sub(r'^\d+\.\s*', '', question)

    # Find where Japanese text starts (first Japanese character)
    # Japanese ranges: Hiragana (3040-309F), Katakana (30A0-30FF), Kanji (4E00-9FFF)
    match_japanese = re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', question)

    if not match_japanese:
        print(f"Warning: Question {i} has no Japanese text")
        continue

    japanese_start = match_japanese.start()
    english_part = question[:japanese_start].strip()
    japanese_part = question[japanese_start:].strip()

    # Split English into statement and question parts
    # Look for the main "Should..." or "Do you think..." question
    english_split = re.split(r'\?([^.!。！？]*)\s', english_part)
    if len(english_split) >= 2:
        # First part is statement
        statement_en = english_split[0].strip()
        if not statement_en.endswith('?'):
            statement_en = statement_en + '?'

        # Join the rest to form the question part
        question_en = '?' + '?'.join(english_split[1:]).strip()
        # Clean up - multiple question marks
        question_en = re.sub(r'\?+', '?', question_en)
    else:
        statement_en = english_part
        question_en = ''

    # Split Japanese similarly
    japanese_split = re.split(r'[。！？](\s*)(?=[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])', japanese_part)
    if len(japanese_split) >= 2:
        statement_ja = japanese_split[0].strip()
        question_ja = ''.join(japanese_split[1:]).strip()
    else:
        statement_ja = japanese_part
        question_ja = ''

    # Create the story content in TPRS format
    # Format:
    # English statement
    # Japanese statement
    #
    # English question
    # Japanese question

    story_content = f"{statement_en}\n{statement_ja}\n"
    if question_en and question_ja:
        story_content += f"\n{question_en}\n{question_ja}"

    # Generate title from first few words of statement
    title_parts = statement_en.split()
    if len(title_parts) > 5:
        title = f'{" ".join(title_parts[:5])}...'
    else:
        title = statement_en

    stories.append({
        "title": f"News {i}: {title}",
        "content": story_content
    })

# Write output
output_js = f"""var news20260310 = """

output_js += json.dumps(stories, ensure_ascii=False, indent=8)

output_js += """
;
"""

output_file = '/home/tony/textbook/news-2026-03-10-tprs.js'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f"Successfully converted {len(stories)} news items")
print(f"Output written to: {output_file}")
