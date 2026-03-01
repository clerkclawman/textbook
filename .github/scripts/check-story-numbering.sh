#!/bin/bash

# Check that story numbering follows format: 0 (questions), then 1, 2, 3, 4...

echo "Validating story numbering in JS files..."

# Get list of JS files
js_files=$(find . -name "*.js" -type f ! -path "./node_modules/*" ! -path "./.github/*")

errors=0

for file in $js_files; do
  echo "Checking: $file"
  
  # Extract story numbers (looking for patterns like "story": 1, "story": 2, etc.)
  if grep -P '"story":\s*\d+' "$file" > /dev/null 2>&1; then
    # Extract all story numbers in order
    story_numbers=$(grep -oP '"story":\s*\K\d+' "$file" | sort -n | uniq)
    
    # Check that we start with 0 (questions)
    first_story=$(echo "$story_numbers" | head -n 1)
    if [ "$first_story" != "0" ]; then
      echo "❌ ERROR: First story should be 0 (questions), got $first_story"
      errors=$((errors + 1))
    fi
    
    # Check that numbers are sequential
    prev_num=""
    for num in $story_numbers; do
      if [ -n "$prev_num" ]; then
        expected=$((prev_num + 1))
        if [ "$num" != "$expected" ]; then
          echo "⚠️  WARNING: Story numbers not sequential at $prev_num → $num (expected $expected)"
          errors=$((errors + 1))
        fi
      fi
      prev_num=$num
    done
  fi
done

if [ $errors -gt 0 ]; then
  echo "❌ Found $errors story numbering issues"
  exit 1
else
  echo "✅ All story numbering is correct"
  exit 0
fi
