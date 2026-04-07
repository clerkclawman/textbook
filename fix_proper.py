#!/usr/bin/env python3
import re

with open('index.html', 'r') as f:
    content = f.read()

# 1. Replace tony-jay-loader.js with stories-tony-jay-2026-04-02.js
content = content.replace(
    "<script src='tony-jay-loader.js'></script>",
    "<script src='stories-tony-jay-2026-04-02.js'></script>"
)

# 2. Remove adult.js script tag
content = content.replace(
    "<script src='adult.js'></script>\n",
    ""
)
content = content.replace(
    "<script src='adult.js'></script>",
    ""
)

# 3. Replace the TonyJayStories handling block
# Pattern to match the entire if/else block (handles both minified and formatted versions)
pattern = r"// Handle TonyJayStories \(object with levels\) vs others \(array\)\s*if \(cls === 'TonyJayStories'\) \{[^}]*\} else \{[^}]*\}"

replacement = """// Handle all classes as arrays
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

# Try regex replacement
new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

if new_content != content:
    print("Successfully replaced TonyJayStories block with regex!")
    content = new_content
else:
    print("Regex didn't match. Trying manual string replacement...")
    # Try to find and replace manually
    if "Handle TonyJayStories" in content:
        print("Found the comment. Attempting manual replacement...")
        # Find the start and end of the block
        start_idx = content.find("// Handle TonyJayStories")
        if start_idx != -1:
            # Find the end of the block (look for the closing brace before "console.log('Added'")
            end_marker = "console.log('Added', optionIndex"
            end_idx = content.find(end_marker, start_idx)
            if end_idx != -1:
                # Find the closing brace before this marker
                # Look backwards for the matching brace
                brace_count = 0
                i = end_idx - 1
                while i >= start_idx:
                    if content[i] == '}':
                        brace_count += 1
                    elif content[i] == '{':
                        brace_count -= 1
                        if brace_count == 0:
                            end_idx = i + 1
                            break
                    i -= 1
                
                if i >= start_idx:
                    # Replace the block
                    before = content[:start_idx]
                    after = content[end_idx:]
                    content = before + replacement + after
                    print("Manual replacement successful!")
                else:
                    print("Could not find matching closing brace.")
            else:
                print("Could not find end marker.")
        else:
            print("Could not find start marker.")
    else:
        print("TonyJayStories block not found.")

with open('index.html', 'w') as f:
    f.write(content)

print("Done!")
