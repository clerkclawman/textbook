#!/usr/bin/env python3
import json
import re

# Read current file
with open('eiken6story.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract array
match = re.search(r'var eiken6story = (\[.+\]);', content, re.DOTALL)
stories = json.loads(match.group(1))

print(f"Total stories: {len(stories)}")

# Fix stories 5-8 (indices 4-7) - change third person to first person with correct grammar
# Fix stories 9-12 (indices 8-11) - add emojis

# Story 5: "My Favorite Sport" - fix third person references
if len(stories) > 4 and "Ken plays" in stories[4]['content']:
    s = stories[4]['content']
    # Fix third person to first person with correct grammar
    replacements = [
        ('Ken plays', 'I play'),
        ('Ken loves', 'I love'),
        ('Ken runs', 'I run'),
        ('Ken tries', 'I try'),
        ('Ken scores', 'I score'),
        ('Tom tries', 'I try'),
        ('Yuki watches', 'My sister watches'),
        ('I plays', 'I play'),
        ('I runs', 'I run'),
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    stories[4]['content'] = s
    print("Fixed story 5")

# Story 6: "My Weekend Hobby" - fix third person
if len(stories) > 5 and "Yuki draws" in stories[5]['content']:
    s = stories[5]['content']
    replacements = [
        ('Yuki draws', 'I draw'),
        ('Yuki likes', 'I like'),
        ('Yuki uses', 'I use'),
        ('Yuki shows', 'I show'),
        ('I draws', 'I draw'),
        ('I uses', 'I use'),
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    stories[5]['content'] = s
    print("Fixed story 6")

# Story 7: "Playing with Friends" - fix third person
if len(stories) > 6 and "Tom plays" in stories[6]['content']:
    s = stories[6]['content']
    replacements = [
        ('Tom plays', 'I play'),
        ('Tom throws', 'I throw'),
        ('Aiko runs', 'I run'),
        ('Lisa joins', 'My friend joins'),
        ('I plays', 'I play'),
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    stories[6]['content'] = s
    print("Fixed story 7")

# Story 8: "After School Activities" - fix third person
if len(stories) > 7 and "Aiko has" in stories[7]['content']:
    s = stories[7]['content']
    replacements = [
        ('Aiko has', 'I have'),
        ('Aiko enjoys', 'I enjoy'),
        ('Aiko practices', 'I practice'),
        ('Aiko loves', 'I love'),
        ('She enjoys', 'I enjoy'),
        ('She practises', 'I practice'),
        ('I has', 'I have'),
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    stories[7]['content'] = s
    print("Fixed story 8")

# Stories 9-12: Add emojis (they're missing)
for i in range(8, min(12, len(stories))):
    s = stories[i]['content']
    # Add emojis to story lines (not questions)
    lines = s.split('\n')
    fixed_lines = []
    emoji_index = 0
    story_emojis = ['😊', '🏠', '👨', '👩', '👶', '💝', '🍽️', '📺', '❤️', '🌟']
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Check if it's a question (has question mark)
        if '？' in line or '?' in line:
            # It's a question - don't add emoji, just keep text
            fixed_lines.append(line)
        else:
            # It's a story line - add emoji
            emoji = story_emojis[emoji_index % len(story_emojis)]
            fixed_lines.append(f"{emoji} {line}")
            emoji_index += 1
    
    stories[i]['content'] = '\n'.join(fixed_lines)
    print(f"Added emojis to story {i+1}")

# Write fixed file
fixed_js = 'var eiken6story = ' + json.dumps(stories, ensure_ascii=False, indent=2) + ';'
with open('eiken6story-fixed.js', 'w', encoding='utf-8') as f:
    f.write(fixed_js)

print("✅ Fixed stories 5-12")
print("Output: eiken6story-fixed.js")
