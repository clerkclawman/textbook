#!/usr/bin/env python3
import re

with open('index.html', 'r') as f:
    content = f.read()

# Pattern to match the duplicate block (handles whitespace variations)
pattern = r"const voices = window\.speechSynthesis\.getVoices\(\); if \(voices\.length === 0\) \{[^}]*\}[^}]*\}[^}]*\}[^}]*\}[^}]*\}[^}]*\}"

# Actually, let's just find the specific block between the first "const voices" after speakWithVoice and "function listVoices"
# Find the index of the problematic "const voices" (around line 2011)
lines = content.split('\n')
for i, line in enumerate(lines):
    if i > 2000 and i < 2020 and "const voices = window.speechSynthesis.getVoices()" in line:
        print(f"Found duplicate at line {i+1}: {line.strip()}")
        # Check if this is the one to remove (not inside a function)
        # Look backwards for "function" or "{" to see if it's in a block
        in_function = False
        for j in range(i-1, max(0, i-50), -1):
            if "function " in lines[j] or "=>" in lines[j]:
                in_function = True
                break
        if not in_function:
            print(f"  -> This is a GLOBAL duplicate. Marking for removal.")
            # Find the end of this block (look for "function listVoices")
            for k in range(i, min(len(lines), i+20)):
                if "function listVoices()" in lines[k]:
                    print(f"  -> Block ends before line {k+1}")
                    # Remove lines from i to k-1
                    del lines[i:k]
                    print(f"  -> Removed {k-i} lines")
                    break
            break

with open('index.html', 'w') as f:
    f.write('\n'.join(lines))

print("Done!")
