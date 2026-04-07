#!/usr/bin/env python3

with open('index.html', 'r') as f:
    content = f.read()

# Find the exact string to replace
old_text = "const voices = window.speechSynthesis.getVoices(); if (voices.length === 0) { console.log('Waiting for voices to load...'); window.speechSynthesis.onvoiceschanged = speakWithVoice; { speakWithVoice(); } } function listVoices()"
new_text = "function listVoices()"

if old_text in content:
    content = content.replace(old_text, new_text)
    print("Replaced successfully!")
else:
    print("Exact match not found. Trying with flexible whitespace...")
    # Try to find and replace with flexible whitespace
    import re
    pattern = r"const voices = window\.speechSynthesis\.getVoices\(\); if \(voices\.length === 0\) \{.*?speakWithVoice\(\); \} \} function listVoices\(\)"
    new_content = re.sub(pattern, "function listVoices()", content, flags=re.DOTALL)
    if new_content != content:
        print("Replaced with regex!")
        content = new_content
    else:
        print("Still not found. Printing context...")
        # Find the line with "const voices" around line 2011
        lines = content.split('};')
        for i, line in enumerate(lines):
            if "const voices = window.speechSynthesis.getVoices()" in line and "if (voices.length === 0)" in line:
                print(f"Found at split index {i}")
                print(f"Line: {line[:200]}...")
                # This is the problematic part. Remove it.
                # The structure is: ...}; [PROBLEM] function listVoices()...
                # We want: ...}; function listVoices()...
                lines[i] = line.replace("const voices = window.speechSynthesis.getVoices(); if (voices.length === 0) { console.log('Waiting for voices to load...'); window.speechSynthesis.onvoiceschanged = speakWithVoice; { speakWithVoice(); } } ", "")
                content = '};'.join(lines)
                print("Removed manually!")
                break

with open('index.html', 'w') as f:
    f.write(content)

print("Done!")
