#!/usr/bin/env python3

with open('index.html', 'r') as f:
    lines = f.readlines()

# Find the line with "lessonsData[cls]" and fix the next few lines
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    if "lessonsData[cls] is now directly an array of story objects" in line:
        # Found the start. Replace the next several lines with the correct code
        new_lines.append("// lessonsData[cls] is now directly an array of story objects\n")
        new_lines.append("    console.log('Processing', classData.length, 'stories');\n")
        new_lines.append("    classData.forEach((story, index) => {\n")
        new_lines.append("        if (story && story.title) {\n")
        new_lines.append("            const option = document.createElement(\"option\");\n")
        new_lines.append("            option.value = optionIndex;\n")
        new_lines.append("            option.textContent = story.title;\n")
        new_lines.append("            storySelector.appendChild(option);\n")
        new_lines.append("            optionIndex++;\n")
        new_lines.append("        } else {\n")
        new_lines.append("            console.warn('Invalid story at index', index, ':', story);\n")
        new_lines.append("        }\n")
        new_lines.append("    });\n")
        new_lines.append("    console.log('Added', optionIndex, 'options to story selector');\n")
        
        # Skip the old lines until we find "console.log('Added'"
        i += 1
        while i < len(lines) and "console.log('Added'" not in lines[i]:
            i += 1
        # Skip the line with "console.log('Added'" since we already added it
        if i < len(lines):
            i += 1
        # Now add the rest of the lines
        while i < len(lines):
            new_lines.append(lines[i])
            i += 1
        break
    else:
        new_lines.append(line)
        i += 1

with open('index.html', 'w') as f:
    f.writelines(new_lines)

print("Fixed!")
