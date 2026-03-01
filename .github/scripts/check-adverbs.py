#!/usr/bin/env python3

import re
import sys
from pathlib import Path

# Common forced adverbs that AI tends to overuse
FORCED_ADVERBS = [
    'brightly',
    'happily',
    'heavily',
    'carefully',
    'loudly',
    'quickly',
    'slowly',
    'beautifully',
    'surprisingly',
    'interestingly',
    'amazingly',
    'reportedly',
]

# Patterns to check
PATTERNS = {
    'forced_adverb': r'\b(' + '|'.join(FORCED_ADVERBS) + r')\b',
    'repeated_adverb': r'(\b\w+ly\b).*?(\1)',
    'three_adverbs_in_row': r'(?:\b\w+ly\b\s+){2,}\b\w+ly\b',
}

def check_file(file_path):
    """Check a single file for forced adverbs."""
    errors = []
    content = file_path.read_text(encoding='utf-8')
    
    # Extract English text (skip Japanese)
    # This is a simple heuristic - look between quotes that seem like English
    english_matches = re.findall(r'"english"\s*:\s*"([^"]+)"', content, re.IGNORECASE)
    
    for text in english_matches:
        # Check for forced adverbs
        for adverb in FORCED_ADVERBS:
            if re.search(r'\b' + adverb + r'\b', text, re.IGNORECASE):
                errors.append(f"Forced adverb '{adverb}' found in: {text[:50]}...")
        
        # Check for repeated adverbs
        if re.search(PATTERNS['repeated_adverb'], text, re.IGNORECASE):
            errors.append(f"Repeated adverb pattern in: {text[:50]}...")
        
        # Check for three or more adverbs in a row
        if re.search(PATTERNS['three_adverbs_in_row'], text, re.IGNORECASE):
            errors.append(f"Multiple adverbs sequence in: {text[:50]}...")
    
    return errors

def main():
    """Main validation."""
    total_errors = 0
    
    # Check all JS files except in node_modules and .github
    js_files = Path('.').glob('**/*.js')
    js_files = [f for f in js_files if not any(
        part in f.parts for part in ['node_modules', '.github', 'vite']
    )]
    
    print("Checking for forced adverbs in story content...")
    print("=" * 60)
    
    for file_path in sorted(js_files):
        errors = check_file(file_path)
        
        if errors:
            print(f"\n{file_path}:")
            for error in errors:
                print(f"  ⚠️  {error}")
            total_errors += len(errors)
        else:
            print(f"✅ {file_path.name}: Clean")
    
    print("=" * 60)
    
    if total_errors > 0:
        print(f"\n❌ Found {total_errors} potential adverb issues")
        print("\n⚠️  These may need review for natural language.")
        print("Not all are errors - some may be appropriate in context.")
        sys.exit(1)
    else:
        print(f"\n✅ No forced adverb patterns found")
        sys.exit(0)

if __name__ == '__main__':
    main()
