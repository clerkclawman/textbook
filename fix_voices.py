#!/usr/bin/env python3

with open('index.html', 'r') as f:
    content = f.read()

# Find and remove the duplicate voices block
# The block is: "const voices = window.speechSynthesis.getVoices(); if (voices.length === 0) { ... speakWithVoice(); } } function listVoices()"
# We want to replace it with just: "function listVoices()"

old_block = "const voices = window.speechSynthesis.getVoices(); if (voices.length === 0) { console.log('Waiting for voices to load...'); window.speechSynthesis.onvoiceschanged = speakWithVoice; { speakWithVoice(); } } function listVoices()"
new_block = "function listVoices()"

if old_block in content:
    content = content.replace(old_block, new_block)
    print("Removed duplicate voices block!")
else:
    print("Could not find the exact block. Trying to find partial...")
    # Try to find the start and end
    start = content.find("const voices = window.speechSynthesis.getVoices(); if (voices.length === 0)")
    end = content.find("function listVoices()", start)
    if start != -1 and end != -1:
        # Remove from start to end of the previous line (before "function listVoices")
        # Find the closing brace before "function listVoices"
        before_func = content.rfind("}", 0, end)
        if before_func != -1:
            # Remove from start to before_func (inclusive)
            content = content[:start] + content[before_func+1:]
            print(f"Removed block from line ~{content[:start].count(chr(10))} to ~{content[:before_func+1].count(chr(10))}")
        else:
            print("Could not find closing brace.")
    else:
        print("Could not find start or end.")

with open('index.html', 'w') as f:
    f.write(content)

print("Done!")
