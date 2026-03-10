#!/usr/bin/env python3
import json
import subprocess

# Get the JSON from git
result = subprocess.run(['git', 'show', 'bb5f7b9:eiken5-48-complete.json'], capture_output=True, text=True)
content = result.stdout

# The issue is literal newlines in the JSON strings
# We need to escape them properly
# Let's manually parse and fix

# First, let's split by the content fields
parts = content.split('"content": "')
if len(parts) < 2:
    print("Could not find content fields")
    exit(1)

# Fix each content field by escaping newlines
fixed_parts = [parts[0]]
for i, part in enumerate(parts[1:]):
    # Find the closing quote (careful with escaped quotes)
    # For now, let's use a simple approach - replace newlines with \n
    fixed_part = part.replace('\n', '\\n')
    fixed_parts.append(fixed_part)

fixed_content = '"content": "'.join(fixed_parts)

# Try to parse
try:
    data = json.loads(fixed_content)
    print(f'✓ Loaded {len(data)} stories')
    
    # Write to JS file
    js = '''// EIKEN 5 - Complete Set (48 Stories Corrected)
// All 480 questions are unique and context-relevant
// Stories 1-32: Rewritten unique questions
// Stories 33-40: Rewritten unique questions (replaced generic blocks)  
// Stories 41-43: REPLACED with 3 new unique stories
// Stories 44-48: Rewritten unique questions

var eiken5story = [
'''
    stories = []
    for story in data:
        title = story['title'].replace('"', '\\"')
        story_content = story['content'].replace('`', '\\`')
        stories.append(f'{{ "title": "{title}", "content": `{story_content}` }}')
    
    js += ',\n'.join(stories)
    js += '\n];\n'
    
    with open('eiken5story.js', 'w', encoding='utf-8') as f:
        f.write(js)
    
    print('✓ Created eiken5story.js')
    
except json.JSONDecodeError as e:
    print(f'Error: {e}')
    # Save the fixed content for debugging
    with open('temp-fixed.json', 'w') as f:
        f.write(fixed_content)
    print('Saved fixed content to temp-fixed.json')
