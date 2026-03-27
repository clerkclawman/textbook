#!/usr/bin/env python3
import re

with open('/home/tony/textbook/index.html', 'r') as f:
    content = f.read()

# Find the pattern: eiken1sentences) followed by newline and };
# Replace with: eiken1sentences) followed by newline and });
pattern = r"(eiken1sentences\))\s*\n\s*\};"
replacement = r"\1\n });"

new_content = re.sub(pattern, replacement, content)

if new_content != content:
    with open('/home/tony/textbook/index.html', 'w') as f:
        f.write(new_content)
    print("Fixed the syntax error!")
else:
    print("Pattern not found!")
