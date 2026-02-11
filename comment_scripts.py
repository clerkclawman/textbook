#!/usr/bin/env python3
import sys

with open('index.html', 'r') as f:
    lines = f.readlines()

# Find and comment out script tags 1310-1333
for i in range(1309, 1333):
    if not lines[i].strip().startswith('<!--'):
        lines[i] = '    <!-- TEMPORARILY DISABLED: ' + lines[i]

with open('index.html', 'w') as f:
    f.writelines(lines)

print("Commented out external scripts")
