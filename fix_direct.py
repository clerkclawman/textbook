#!/usr/bin/env python3

with open('index.html', 'r') as f:
    content = f.read()

# Find the start and end of the problematic block
start_marker = "window.speechSynthesis.speak(utterance); };"
end_marker = "function listVoices()"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    # The block to remove is from after "}; " to before "function listVoices()"
    block_start = start_idx + len(start_marker)
    block_end = end_idx
    
    # Find the exact text to remove (including any whitespace)
    text_to_remove = content[block_start:block_end]
    
    print(f"Found block to remove (length: {len(text_to_remove)}):")
    print(repr(text_to_remove[:100]))
    
    # Remove it
    new_content = content[:block_start] + end_marker + content[end_idx + len(end_marker):]
    
    with open('index.html', 'w') as f:
        f.write(new_content)
    
    print("Removed!")
else:
    print(f"Could not find markers. start_idx={start_idx}, end_idx={end_idx}")
