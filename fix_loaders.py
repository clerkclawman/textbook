#!/usr/bin/env python3
import re

with open('index.html', 'r') as f:
    content = f.read()

# Find the inline script block that contains init()
# Pattern: </script> followed by some code, then <script src='...'>, then init()
# We need to move the loader scripts to be BEFORE the inline script block

# First, find where the inline script with init() starts
# Look for the pattern: </script>\n<script>\n...window.addEventListener...init()
pattern = r'(</script>\n)(<script>\n)(\s*//.*?INITIALIZATION.*?\n)(\s*window\.addEventListener)'

# The loaders are currently at the end, after init()
# We need to move them to be right after the </script> before the <script> block

# Find the loaders at the end
loader_pattern = r"(<script src='news-loader\.js'></script>\n<script src='fun-questions-loader\.js'></script>\n<script src='tony-jay-loader\.js'></script>\n<script src='quiz-loader\.js'></script>\n)"

# Check if loaders are at the end
if re.search(loader_pattern, content):
    # Remove loaders from end
    content = re.sub(loader_pattern, '', content)
    
    # Find the position right before the inline script block that has init()
    # Look for: </script>\n<script>\n followed by initialization comments
    insert_pos_pattern = r'(</script>\n)(<script>\n)(\s*//.*?INITIALIZATION)'
    
    def replace_func(m):
        return m.group(1) + "<script src='news-loader.js'></script>\n<script src='fun-questions-loader.js'></script>\n<script src='tony-jay-loader.js'></script>\n<script src='quiz-loader.js'></script>\n" + m.group(2) + m.group(3)
    
    content = re.sub(insert_pos_pattern, replace_func, content, flags=re.DOTALL)
    
    with open('index.html', 'w') as f:
        f.write(content)
    print("Fixed!")
else:
    print("Loaders not found at expected location")
