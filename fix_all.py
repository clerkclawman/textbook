#!/usr/bin/env python3

with open('index.html', 'r') as f:
    lines = f.readlines()

# 1. Add adult.js after the loader scripts (around line 1262)
# Find the line with "quiz-loader.js" and add adult.js after it
for i, line in enumerate(lines):
    if "quiz-loader.js" in line and i > 1250:
        lines.insert(i+1, "<script src='adult.js'></script>\n")
        break

# 2. Fix populateStorySelector to handle TonyJayStories object
# Find the line: if (!Array.isArray(classData)) {
for i, line in enumerate(lines):
    if "if (!Array.isArray(classData)) {" in line:
        lines[i] = line.replace(
            "if (!Array.isArray(classData)) {",
            "if (cls !== 'TonyJayStories' && !Array.isArray(classData)) {"
        )
        break

# 3. Add special handling for TonyJayStories in the loop
# Find the line: console.log('Processing', classData.length, 'stories');
for i, line in enumerate(lines):
    if "console.log('Processing', classData.length, 'stories');" in line:
        # Insert the TonyJayStories handling before this line
        indent = "    "
        new_code = f"""    // Handle TonyJayStories (object with levels) vs others (array)
    if (cls === 'TonyJayStories') {{
        console.log('Processing levels:', Object.keys(classData));
        Object.keys(classData).forEach((level, index) => {{
            const option = document.createElement("option");
            option.value = index;
            option.textContent = 'Level: ' + level;
            storySelector.appendChild(option);
        }});
    }} else {{
"""
        lines[i] = new_code + "        console.log('Processing', classData.length, 'stories');\n"
        # Now we need to add a closing brace for the else block after the forEach loop
        # Find the line: console.log('Added', optionIndex, 'options to story selector');
        for j in range(i+10, min(i+50, len(lines))):
            if "console.log('Added', optionIndex, 'options to story selector');" in lines[j]:
                lines[j] = lines[j].rstrip() + "\n    }}\n"
                break
        break

with open('index.html', 'w') as f:
    f.writelines(lines)

print("Fixed!")
