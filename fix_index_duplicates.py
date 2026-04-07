#!/usr/bin/env python3
"""
Fix index.html:
1. Remove duplicate tony-jay-loader.js tags
2. Ensure quiz-loader.js is loaded after the main script
"""

import re

with open('index.html', 'r') as f:
    content = f.read()

# Fix 1: Remove duplicate tony-jay-loader.js tags
# Pattern: Find the block and replace with single instance
old_block = "<!-- Load external scripts -->\n<script src='adult.js'></script>\n<script src='news-loader.js'></script>\n<script src='fun-questions-loader.js'></script>\n<script src='tony-jay-loader.js'></script>\n<script src='tony-jay-loader.js'></script>\n<script src='quiz-loader.js'></script>"

new_block = "<!-- Load external scripts -->\n<script src='adult.js'></script>\n<script src='news-loader.js'></script>\n<script src='fun-questions-loader.js'></script>\n<script src='tony-jay-loader.js'></script>\n<script src='quiz-loader.js'></script>"

if old_block in content:
    content = content.replace(old_block, new_block)
    print("✅ Removed duplicate tony-jay-loader.js tags")
else:
    print("❌ Could not find the exact block to replace")
    # Try to find the pattern with regex
    pattern = r"<!-- Load external scripts -->.*?<script src='quiz-loader.js'></script>"
    match = re.search(pattern, content, re.DOTALL)
    if match:
        print("Found pattern at:", match.start(), "-", match.end())
        print("Context:", content[match.start():match.start()+200])
    else:
        print("Pattern not found")

with open('index.html', 'w') as f:
    f.write(content)
