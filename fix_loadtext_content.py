#!/usr/bin/env python3
"""Add date-handling to loadTextContent function in index.html"""

filepath = '/home/tony/textbook/index.html'
with open(filepath, 'r') as f:
    content = f.read()

# Find the section after "} else {" that does parseInt(currentStory)
# and replace it with date-handling logic

old_code = '''} else {
 const selectorIndex = parseInt(currentStory);
 if (isNaN(selectorIndex)) {
 console.error('Invalid story index:', currentStory);
 alert('Invalid story selection');
 exitReadingMode();
 return;
 }'''

new_code = '''} else {
 // Check if this is date-keyed data (TonyJayStories, ClozeQuiz)
 const classData = window.lessonsData[cls];
 if (classData && typeof classData === 'object' && !Array.isArray(classData) && currentStory && currentStory.includes('-')) {
 // Date-keyed: currentStory is a date string like "2026-03-31"
 if (!classData[currentStory]) {
 console.error('Date not found:', currentStory, 'for class:', cls);
 alert('Story not found for selected date');
 exitReadingMode();
 return;
 }
 const dateData = classData[currentStory];
 if (Array.isArray(dateData) && dateData.length > 0) {
 // For TonyJayStories: get content from first story
 content = dateData[0].content;
 } else {
 console.error('Invalid date data format');
 alert('Invalid story data');
 exitReadingMode();
 return;
 }
 } else {
 // Array-indexed data (standard stories)
 const selectorIndex = parseInt(currentStory);
 if (isNaN(selectorIndex)) {
 console.error('Invalid story index:', currentStory);
 alert('Invalid story selection');
 exitReadingMode();
 return;
 }'''

if old_code in content:
    content = content.replace(old_code, new_code)
    
    # Also need to close the else block - find the content assignment and add closing brace
    old_content_line = 'content = window.lessonsData[cls][storyIndex].content;\n }'
    new_content_line = 'content = window.lessonsData[cls][storyIndex].content;\n }\n }'
    content = content.replace(old_content_line, new_content_line)
    
    with open(filepath, 'w') as f:
        f.write(content)
    print("✅ Fixed loadTextContent to handle date-keyed data")
else:
    print("❌ Pattern not found - checking what's there...")
    import re
    match = re.search(r'} else \{.{0,200}selectorIndex', content, re.DOTALL)
    if match:
        print("Found similar pattern:")
        print(repr(match.group()[:200]))
