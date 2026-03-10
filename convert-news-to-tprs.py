#!/usr/bin/env python3
"""
Convert news questions to TPRS-style sentence pairs
"""

import re
import json

# Read the current news file
with open('/home/tony/textbook/news-2026-03-10.js', 'r') as f:
    content = f.read()

# Extract the content string
content_match = re.search(r'content:\s*`([\s\S]*?)`', content)
if not content_match:
    print("Error: Couldn't find content")
    exit(1)

news_content = content_match.group(1)

# Split into individual questions
questions = re.split(r'(?=\d+\.\s)', news_content)
questions = [q.strip() for q in questions if q.strip()]

# Process each question into story format
stories = []
for i, question in enumerate(questions, 1):
    # Extract emoji, English text, and Japanese
    # Pattern: number emoji English... Japanese...

    # First, remove the leading "X. " prefix
    question = re.sub(r'^\d+\.\s*', '', question)

    # Split on question mark and space before first Japanese character
    # Find where Japanese starts (first Hiragana/Katakata/Kanji after question)
    parts = re.split(r'\?([^\w\s]|$)', question, maxsplit=1)
    if len(parts) < 2:
        print(f"Warning: Question {i} doesn't have proper structure")
        continue

    statement = parts[0] + '?'

    # The rest is the Japanese translation of statement + English question + Japanese question
    remainder = ''
    if len(parts) > 1:
        remainder = parts[1]
        for part in parts[2:]:
            remainder += '?' + part

    # Now split remainder into:
    # Japanese statement translation + English question + Japanese question

    # Find where English starts again after Japanese
    # Japanese usually ends with a period or question mark, then space, then English
    # Pattern: Japanese text. English text? Japanese text?

    # Split by looking for pattern: Japanese punctuation followed by space followed by English capital letter
    ja_en_split = re.split(r'([？！。])\s+([A-Z])', remainder, maxsplit=1)

    if len(ja_en_split) >= 4:
        # Found the split
        ja_statement = ja_en_split[0] + ja_en_split[1]
        en_question = ja_en_split[2]
        ja_question = ja_en_split[3]

        # Add back the rest
        if len(ja_en_split) > 4:
            ja_question += ''.join(ja_en_split[4:])

        # Create story content
        en_statement_parts = statement.split('?', 1)
        if len(en_statement_parts) == 2:
            en_statement = en_statement_parts[0] + '?'
        else:
            en_statement = statement

        # Remove duplicate question marks if any
        en_question = en_question.strip()

        story_content = f"{en_statement}\n{ja_statement}\n\n{en_question}\n{ja_question}"
        stories.append({
            "title": f"News {i}: {' '.join(en_statement.split('.')[:1])}...",
            "content": story_content
        })

    else:
        print(f"Warning: Question {i} structure not recognized")
        # Try to create something anyway
        story_content = question
        stories.append({
            "title": f"News {i}",
            "content": story_content
        })

# Write the new file
output = f"""var news20260310 = """

output += json.dumps(stories, ensure_ascii=False, indent=8)

output += """
;
module.exports = news20260310;
"""

with open('/home/tony/textbook/news-2026-03-10-tprs.js', 'w') as f:
    f.write(output)

print(f"Converted {len(stories)} news items to TPRS format")
print("Output: news-2026-03-10-tprs.js")
