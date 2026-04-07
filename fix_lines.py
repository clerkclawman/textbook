#!/usr/bin/env python3

with open('index.html', 'r') as f:
    lines = f.readlines()

# Remove lines 2011-2019 (indices 2010-2018 in 0-based)
# Keep line 2020 (index 2019) which is "function listVoices()"
print(f"Total lines: {len(lines)}")
print(f"Removing lines 2011-2019 (indices 2010-2018)")

# Check what we're removing
for i in range(2010, min(2020, len(lines))):
    print(f"  {i+1}: {lines[i].strip()[:50]}")

# Remove the lines
new_lines = lines[:2010] + lines[2019:]

with open('index.html', 'w') as f:
    f.writelines(new_lines)

print("Done! Removed lines 2011-2019.")
