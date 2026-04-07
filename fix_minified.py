#!/usr/bin/env python3

with open('index.html', 'r') as f:
    content = f.read()

# The problematic section (all on one line in minified file)
old_section = "// lessonsData[cls] is now directly an array of story objects console.log('Processing', classData.length, 'stories'); { classData.forEach((story, index) => { if (story && story.title) { const option = document.createElement(\"option\"); option.value = optionIndex; option.textContent = story.title; storySelector.appendChild(option); optionIndex++; { console.warn('Invalid story at index', index, ':', story); } }); } console.log('Added', optionIndex, 'options to story selector');"

new_section = """// lessonsData[cls] is now directly an array of story objects
    console.log('Processing', classData.length, 'stories');
    classData.forEach((story, index) => {
        if (story && story.title) {
            const option = document.createElement("option");
            option.value = optionIndex;
            option.textContent = story.title;
            storySelector.appendChild(option);
            optionIndex++;
        } else {
            console.warn('Invalid story at index', index, ':', story);
        }
    });
    console.log('Added', optionIndex, 'options to story selector');"""

if old_section in content:
    content = content.replace(old_section, new_section)
    print("Successfully replaced the minified section!")
else:
    print("Could not find the exact section. Trying to find partial match...")
    # Try to find and replace piece by piece
    if "console.log('Processing', classData.length, 'stories'); { classData.forEach" in content:
        print("Found the start. Replacing step by step...")
        # Step 1: Remove the stray {
        content = content.replace("console.log('Processing', classData.length, 'stories'); { classData.forEach", "console.log('Processing', classData.length, 'stories');\n    classData.forEach")
        # Step 2: Fix the else block
        content = content.replace("optionIndex++; { console.warn", "optionIndex++;\n        } else {\n            console.warn")
        # Step 3: Fix the closing
        content = content.replace("}); } console.log", "});\n    console.log")
        print("Step-by-step replacement done.")
    else:
        print("Could not find the section at all!")

with open('index.html', 'w') as f:
    f.write(content)

print("Done!")
