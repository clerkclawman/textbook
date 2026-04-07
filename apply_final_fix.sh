#!/bin/bash
# Apply final Tony & Jay Stories fix (loadTextContent update)
cd /home/tony/textbook
python3 /home/tony/.openclaw/workspace-ken/fix_load_text_content.py

echo "✅ Final fix applied! Now commit and push:"
echo "git add index.html && git commit -m 'Fix Tony & Jay Stories: Load by level' && git push"
