#!/usr/bin/env python3

with open('index.html', 'r') as f:
    lines = f.readlines()

# Find the line with just " {" (stray brace)
for i, line in enumerate(lines):
    if line.strip() == "{" and i > 2160 and i < 2170:
        print(f"Found stray brace at line {i+1}: {repr(line)}")
        
        # Check the previous line
        if i > 0:
            prev_line = lines[i-1]
            print(f"Previous line {i}: {repr(prev_line[:80])}")
            
            # The previous line should be "translationResult.textContent = translatedText;"
            # We need to replace the stray "{" with "if (!translationResult) {"
            if "translationResult.textContent = translatedText;" in prev_line:
                # Replace the stray "{" with "if (!translationResult) {"
                lines[i] = "            if (!translationResult) {\n"
                print(f"Replaced stray brace with 'if (!translationResult) {{'")
            else:
                print("Previous line doesn't match expected content.")
        break

with open('index.html', 'w') as f:
    f.writelines(lines)

print("Done!")
