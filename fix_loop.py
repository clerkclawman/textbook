with open('index.html', 'r') as f:
    lines = f.readlines()

# Find the line with "classData.forEach((item, index) => {"
start_idx = None
for i, line in enumerate(lines):
    if "classData.forEach((item, index) => {" in line:
        start_idx = i
        break

if start_idx is None:
    print("Could not find forEach loop start")
    exit(1)

# Find the end of the loop (matching closing brace)
brace_count = 0
end_idx = None
for i in range(start_idx, len(lines)):
    brace_count += lines[i].count('{') - lines[i].count('}')
    if brace_count == 0 and '{' in ''.join(lines[start_idx:i+1]):
        end_idx = i
        break

if end_idx is None:
    print("Could not find loop end")
    exit(1)

# Replace the loop body
new_loop = [
    "      let optionText = '';\n",
    "      // Handle ClozeQuiz items (have 'level' and 'sentence' but no 'title')\n",
    "      if (cls === 'ClozeQuiz' && item.level && item.sentence) {\n",
    "        optionText = `${item.level}: ${item.sentence}`;\n",
    "      } else if (item && item.title) {\n",
    "        // Standard story items\n",
    "        optionText = item.title;\n",
    "      } else {\n",
    "        console.warn('Invalid item at index', index, ':', item);\n",
    "        return; // Skip invalid items\n",
    "      }\n",
    "      \n",
    "      // Create option for both ClozeQuiz and standard stories\n",
    "      const option = document.createElement(\"option\");\n",
    "      option.value = optionIndex;\n",
    "      option.textContent = optionText;\n",
    "      storySelector.appendChild(option);\n",
    "      optionIndex++;\n",
    "    });\n"
]

# Reconstruct the file
new_lines = lines[:start_idx] + new_loop + lines[end_idx+1:]

with open('index.html', 'w') as f:
    f.writelines(new_lines)

print(f"Fixed loop from line {start_idx+1} to {end_idx+1}")
