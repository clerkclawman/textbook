#!/usr/bin/env python3
"""
Patch tony-jay-loader.js and quiz-loader.js to:
1. Increase retry count from 30 to 100
2. Add fallback to check for loadAllQA function
3. Wait longer if loadAllQA is available
"""

import re

def patch_loader(filename, loader_name):
    with open(filename, 'r') as f:
        content = f.read()
    
    # Pattern to find the retry logic block
    # Matches: let initRetries = 0; const initMaxRetries = 30; ... if (typeof window.lessonsData === 'undefined') { console.error(...) }
    old_pattern = r"let initRetries = 0;\s*const initMaxRetries = 30;\s*while \(typeof window\.lessonsData === 'undefined' && initRetries < initMaxRetries\) \{\s*await new Promise\(resolve => setTimeout\(resolve, 100\)\);\s*initRetries\+\+;\s*\}\s*if \(typeof window\.lessonsData === 'undefined'\) \{\s*console\.error\('([^']+)'"
    
    # Check if pattern exists
    if not re.search(old_pattern, content):
        print(f"❌ Could not find retry pattern in {filename}")
        return False
    
    # Replace initMaxRetries = 30 with 100
    content = re.sub(r"const initMaxRetries = 30;", "const initMaxRetries = 100; // Increased from 30 to 100 (10 seconds)", content)
    
    # Add fallback logic after the first check
    fallback_code = """
    if (typeof window.lessonsData === 'undefined') {
      // Fallback: Check if loadAllQA is available (signals data is loaded)
      if (typeof window.loadAllQA === 'function') {
        console.log('""" + loader_name + """ Loader: loadAllQA available, waiting for lessonsData...');
        // Wait a bit more for lessonsData to populate
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      if (typeof window.lessonsData === 'undefined') {
        console.error('""" + loader_name + """ Loader: lessonsData never became available');
        return;
      }
    }"""
    
    # Replace the original error block with the new fallback block
    # Original: if (typeof window.lessonsData === 'undefined') { console.error('...'); return; }
    old_error_block = r"if \(typeof window\.lessonsData === 'undefined'\) \{\s*console\.error\('([^']+)'[^}]*\}\s*return;\s*\}"
    
    # More specific replacement: find the exact block and replace
    # Look for: if (typeof window.lessonsData === 'undefined') { console.error('X Loader: lessonsData never became available'); return; }
    old_block = "if (typeof window.lessonsData === 'undefined') { console.error('" + loader_name + " Loader: lessonsData never became available'); return; }"
    
    # Try to find and replace with proper whitespace handling
    # First, try exact match
    if old_block in content:
        content = content.replace(old_block, fallback_code.strip())
        print(f"✅ Patched {filename} (exact match)")
    else:
        # Try with flexible whitespace
        pattern = r"if \(typeof window\.lessonsData === 'undefined'\) \{\s*console\.error\('" + re.escape(loader_name) + r" Loader: lessonsData never became available'\);\s*return;\s*\}"
        if re.search(pattern, content):
            content = re.sub(pattern, fallback_code.strip(), content)
            print(f"✅ Patched {filename} (regex match)")
        else:
            print(f"❌ Could not find error block in {filename}")
            return False
    
    with open(filename, 'w') as f:
        f.write(content)
    
    print(f"✅ Successfully patched {filename}")
    return True

# Patch both loaders
patch_loader('tony-jay-loader.js', 'Tony & Jay')
patch_loader('quiz-loader.js', 'Quiz')

print("\n✅ All patches applied!")
print("Now run: git add tony-jay-loader.js quiz-loader.js && git commit -m 'Fix: Increase retry count and add fallback for lessonsData' && git push")
