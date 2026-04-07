#!/bin/bash
# Apply Tony & Jay Stories fix to index.html
cd /home/tony/textbook
python3 /home/tony/.openclaw/workspace-ken/fix_tony_jay.py

echo "✅ Fix applied! Now commit and push:"
echo "git add index.html && git commit -m 'Add Tony & Jay Stories level-based selection' && git push"
