#!/usr/bin/env python3

with open('index.html', 'r') as f:
    lines = f.readlines()

# Line 2169 is index 2168 (0-based)
# The problematic line is: "translationResult.textContent = translatedText; { throw new Error('No translation data received'); } })"
# It should be: "translationResult.textContent = translatedText;\n            if (!translationResult) {\n                throw new Error('No translation data received');\n            }\n        })"

# Find the exact line
for i, line in enumerate(lines):
    if i >= 2165 and i <= 2172 and "translationResult.textContent = translatedText; { throw" in line:
        print(f"Found problematic line at {i+1}: {line.strip()}")
        
        # Replace the line with the correct structure
        # The structure should be:
        # translationResult.textContent = translatedText;
        # if (!translationResult) {
        #     throw new Error('No translation data received');
        # }
        # })
        
        new_lines = [
            "            translationResult.textContent = translatedText;\n",
            "            if (!translationResult) {\n",
            "                throw new Error('No translation data received');\n",
            "            }\n",
            "        })\n"
        ]
        
        # Replace the current line and the next few lines (up to the closing "})")
        # Find where the current block ends
        j = i
        while j < len(lines) and "})" not in lines[j]:
            j += 1
        
        if j < len(lines):
            # Replace lines i to j (inclusive) with new_lines
            lines = lines[:i] + new_lines + lines[j+1:]
            print(f"Replaced lines {i+1} to {j+1} with correct structure.")
        else:
            print("Could not find closing '})'")
        break

with open('index.html', 'w') as f:
    f.writelines(lines)

print("Done!")
