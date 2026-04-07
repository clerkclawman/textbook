#!/usr/bin/env python3
import re

with open('index.html', 'r') as f:
    content = f.read()

# The problematic block (all on one line or with minimal newlines)
# We want to remove: "const voices = window.speechSynthesis.getVoices(); if (voices.length === 0) { ... } } } function listVoices()"
# But keep: "function listVoices()"

# Pattern to match the duplicate block
# It starts with "const voices = window.speechSynthesis.getVoices();" and ends before "function listVoices()"
pattern = r"const voices = window\.speechSynthesis\.getVoices\(\); if \(voices\.length === 0\) \{[^}]*\}[^}]*\}[^}]*\}\s*function listVoices\(\)"

replacement = "function listVoices()"

new_content = re.sub(pattern, replacement, content)

if new_content != content:
    print("Successfully removed the duplicate block!")
    content = new_content
else:
    print("Pattern didn't match. Trying a simpler approach...")
    # Just remove the specific line(s) with the duplicate
    # Find the line that has "const voices" and is NOT inside a function
    # We'll look for the pattern: "}; const voices = ..."
    pattern2 = r"\};\s*const voices = window\.speechSynthesis\.getVoices\(\); if \(voices\.length === 0\) \{[^}]*\}[^}]*\}[^}]*\}\s*"
    new_content = re.sub(pattern2, "}; ", content)
    if new_content != content:
        print("Removed with simpler pattern!")
        content = new_content
    else:
        print("Still didn't match. Manual intervention needed.")

with open('index.html', 'w') as f:
    f.write(content)

print("Done!")
