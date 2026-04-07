#!/usr/bin/env python3

with open('index.html', 'r') as f:
    content = f.read()

# 1. Replace tony-jay-loader.js with stories-tony-jay-2026-04-02.js
content = content.replace(
    "<script src='tony-jay-loader.js'></script>",
    "<script src='stories-tony-jay-2026-04-02.js'></script>"
)

# 2. Remove adult.js script tag
content = content.replace(
    "<script src='adult.js'></script>",
    ""
)

# 3. Replace the TonyJayStories special handling with simple array logic
old_block = """// Handle TonyJayStories (object with levels) vs others (array)
    if (cls === 'TonyJayStories') {
        console.log('Processing levels:', Object.keys(classData));
        Object.keys(classData).forEach((level, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = 'Level: ' + level;
            storySelector.appendChild(option);
        });
    } else {
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
    }"""

new_block = """// Handle all classes as arrays
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
    });"""

# Try to replace (if the block exists with newlines)
if old_block in content:
    content = content.replace(old_block, new_block)
else:
    # Try minified version (all on one line)
    old_block_min = " // Handle TonyJayStories (object with levels) vs others (array) if (cls === 'TonyJayStories') { console.log('Processing levels:', Object.keys(classData)); Object.keys(classData).forEach((level, index) => { const option = document.createElement(\"option\"); option.value = index; option.textContent = 'Level: ' + level; storySelector.appendChild(option); }); } else { classData.forEach((story, index) => { if (story && story.title) { const option = document.createElement(\"option\"); option.value = optionIndex; option.textContent = story.title; storySelector.appendChild(option); optionIndex++; } else { console.warn('Invalid story at index', index, ':', story); } }); } "
    new_block_min = " // Handle all classes as arrays classData.forEach((story, index) => { if (story && story.title) { const option = document.createElement(\"option\"); option.value = optionIndex; option.textContent = story.title; storySelector.appendChild(option); optionIndex++; } else { console.warn('Invalid story at index', index, ':', story); } }); "
    if old_block_min in content:
        content = content.replace(old_block_min, new_block_min)
    else:
        print("WARNING: Could not find the TonyJayStories block to replace!")
        print("Searching for partial matches...")
        if "Handle TonyJayStories" in content:
            print("Found 'Handle TonyJayStories' but format doesn't match.")

with open('index.html', 'w') as f:
    f.write(content)

print("Done! Check for warnings above.")
