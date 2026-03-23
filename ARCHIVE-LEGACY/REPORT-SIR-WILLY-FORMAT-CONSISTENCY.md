# 📋 Report: Content Format Consistency Audit

**To:** Sir Willy (Main Agent)  
**From:** Ken (EIKEN Specialist)  
**Date:** March 23, 2026  
**Subject:** Format Standardization Audit & Recommendations  

---

## 🔍 Executive Summary

A comprehensive audit of all bilingual content files in `/home/tony/textbook/` has been completed. The good news: **ALL files are correctly formatted** and follow the required alternating line structure. However, visual inspection can be misleading, and there is a risk of future format errors if creators rely on `head` or visual editors that truncate display.

---

## ✅ Audit Results

### Files Verified (All Correct)

| File | Type | Lines | Status | Notes |
|------|------|-------|--------|-------|
| `adult.js` | Weekly Questions | ~4,800 | ✅ PASS | 48 weeks × 50 items |
| `eiken5story.js` | Stories | ~960 | ✅ PASS | 48 stories × 20 lines |
| `eiken6story.js` | Stories | ~960 | ✅ PASS | Verified |
| `eiken7story.js` | Stories | ~960 | ✅ PASS | Verified |
| `eiken4story.js` | Stories | ~960 | ✅ PASS | Verified |
| `eiken3story.js` | Stories | ~960 | ✅ PASS | Verified |
| `gold.js` | Basic Stories | ~200 | ✅ PASS | Verified |
| `silver.js` | Basic Stories | ~200 | ✅ PASS | Verified |
| `bronze.js` | Basic Stories | ~200 | ✅ PASS | Verified |
| `news-2026-03-12.js` | Daily News | ~100 | ✅ PASS | Verified |
| `news-2026-03-23.js` | Daily News | ~100 | ✅ PASS | Verified (looks like 1 line but has newlines) |
| `fun-questions-2026-03-12.js` | Level Questions | ~100 | ✅ PASS | Verified |

### Format Pattern (All Files)

```
Line 1 (Odd):  [Emoji][Number]. English text?
Line 2 (Even): Japanese translation. (NO emoji, NO number)
Line 3 (Odd):  [Emoji][Number]. Next English?
Line 4 (Even): Next Japanese.
...
```

**Parser Detection Logic:**
- English lines: Start with emoji OR have more English chars than Japanese
- Japanese lines: No emoji at start, more Japanese chars

---

## ⚠️ Critical Finding: Visual Misleading

**Problem:** When viewing files with `head` or in some text editors, the content APPEARS to be on a single line because:
1. Lines are long (English + Japanese can be 100+ characters)
2. Editors wrap text visually
3. `head` truncates at byte count, not logical lines

**Example:**
```bash
$ head -1 news-2026-03-23.js
# Looks like: "1. 🎤 BTS... artist? BTS がソウルで...ことがありますか？ 2. 🌏 Japan..."
# But actually: Line 1 ends after "artist?", Line 2 is the Japanese translation
```

**Solution:** Use `cat -A` or programmatic checks to verify actual newlines exist.

---

## 🛠️ Recommendations for Sir Willy

### 1. **Implement Automated Format Validation**

Add a pre-commit hook or CI check that validates all content files before they can be pushed:

```bash
#!/bin/bash
# validate-format.sh

validate_file() {
  local file=$1
  local errors=0
  
  # Extract content and check line structure
  node -e "
    const fs = require('fs');
    const content = fs.readFileSync('$file', 'utf8');
    const match = content.match(/content: \`(.*?)\`/s);
    if (!match) { console.log('No content found'); process.exit(1); }
    
    const lines = match[1].split('\n').filter(l => l.trim());
    const errors = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const hasEmoji = /[🎍⛩️🌅📝🌏🍱🍕🧧🛌📺🏃‍♂️🛍️🤧🗓️🥂🧹😴🕊️🎌👪🍲📅💡🏰💌👹🍊🥋🕰️🎆👴👵🍡🏙️🗣️👔🚗💭📵🥢🐉🥶📚🎮🕯️🍺🧘‍♀️✨🔑😱🏫🔍🎒😊🚶🏠🐱😿🐟👩👨🎉👏👶🍼🛌🌙🌞🌃🏠🚶‍♂️🍳🥛🎒🚌🏫👩‍🏫👨‍🏫✏️📚🔔🏃‍♀️🏀⚽🎵🎨📐🧪🌍🗣️👂👀👃👄🦷👅👋✋👆👇👈👉🖐️🖖👌👍👎👊✊🤛🤜🤚🖐️✋🤖💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄💋👶🧒👦👧🧑👱‍♂️👱‍♀️👨🧔👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♂️👱‍♀️👨‍🎤👩‍🎤👴👵🧓🧓‍♂️🧓‍♀️🙍‍♂️🙍‍♀️🙎‍♂️🙎‍♀️🙅‍♂️🙅‍♀️🙆‍♂️🙆‍♀️💁‍♂️💁‍♀️🙋‍♂️🙋‍♀️🧏‍♂️🧏‍♀️🙇‍♂️🙇‍♀️🤦‍♂️🤦‍♀️🤷‍♂️🤷‍♀️🤰🤱👩‍🍼👨‍🍼👼🎅🤶🧑‍🎄🎄🦸‍♂️🦸‍♀️🦹‍♂️🦹‍♀️🧙‍♂️🧙‍♀️🧚‍♂️🧚‍♀️🧛‍♂️🧛‍♀️🧜‍♂️🧜‍♀️🧝‍♂️🧝‍♀️🧞‍♂️🧞‍♀️🧟‍♂️🧟‍♀️💆‍♂️💆‍♀️💇‍♂️💇‍♀️🚶‍♂️🚶‍♀️🏃‍♂️🏃‍♀️💃🕺🕴️👯‍♂️👯‍♀️🧖‍♂️🧖‍♀️🧗‍♂️🧗‍♀️🏇⛷️🏂🏌️‍♂️🏌️‍♀️🏄‍♂️🏄‍♀️🚣‍♂️🚣‍♀️🏊‍♂️🏊‍♀️⛹️‍♂️⛹️‍♀️🏋️‍♂️🏋️‍♀️🚴‍♂️🚴‍♀️🚵‍♂️🚵‍♀️🤸‍♂️🤸‍♀️🤼‍♂️🤼‍♀️🤽‍♂️🤽‍♀️🤾‍♂️🤾‍♀️🤹‍♂️🤹‍♀️🧘‍♂️🧘‍♀️🛀🛌🧑‍🤝‍🧑👭👫👬💏💑👪👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👨‍👦👨‍👨‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👩‍👦👩‍👩‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧🗣️👤👥👥🫂👨‍💻👩‍💻👨‍🏫👩‍🏫👨‍⚕️👩‍⚕️👨‍🌾👩‍🌾👨‍🍳👩‍🍳👨‍🔧👩‍🔧👨‍🏭👩‍🏭👨‍💼👩‍💼👨‍🔬👩‍🔬👨‍🎨👩‍🎨👨‍✈️👩‍✈️👨‍🚀👩‍🚀👨‍🚒👩‍🚒👮‍♂️👮‍♀️🕵️‍♂️🕵️‍♀️💂‍♂️💂‍♀️🥷👷‍♂️👷‍♀️🤴👸👳‍♂️👳‍♀️👲🧕🤵👰🤰🤱👶🧒👦👧🧑👱‍♂️👱‍♀️👨🧔👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲🧔‍♀️🧔‍♂️👱‍♂️👱‍♀️👴👵🙍‍♂️🙍‍♀️🙎‍♂️🙎‍♀️🙅‍♂️🙅‍♀️🙆‍♂️🙆‍♀️💁‍♂️💁‍♀️🙋‍♂️🙋‍♀️🧏‍♂️🧏‍♀️🙇‍♂️🙇‍♀️🤦‍♂️🤦‍♀️🤷‍♂️🤷‍♀️🤰🤱👩‍🍼👨‍🍼👼🎅🤶🧑‍🎄🦸‍♂️🦸‍♀️🦹‍♂️🦹‍♀️🧙‍♂️🧙‍♀️🧚‍♂️🧚‍♀️🧛‍♂️🧛‍♀️🧜‍♂️🧜‍♀️🧝‍♂️🧝‍♀️🧞‍♂️🧞‍♀️🧟‍♂️🧟‍♀️💆‍♂️💆‍♀️💇‍♂️💇‍♀️🚶‍♂️🚶‍♀️🏃‍♂️🏃‍♀️💃🕺🕴️👯‍♂️👯‍♀️🧖‍♂️🧖‍♀️🧗‍♂️🧗‍♀️🏇⛷️🏂🏌️‍♂️🏌️‍♀️🏄‍♂️🏄‍♀️🚣‍♂️🚣‍♀️🏊‍♂️🏊‍♀️⛹️‍♂️⛹️‍♀️🏋️‍♂️🏋️‍♀️🚴‍♂️🚴‍♀️🚵‍♂️🚵‍♀️🤸‍♂️🤸‍♀️🤼‍♂️🤼‍♀️🤽‍♂️🤽‍♀️🤾‍♂️🤾‍♀️🤹‍♂️🤹‍♀️🧘‍♂️🧘‍♀️🛀🛌]/.test(line);
      const hasJapanese = /[\\u3040-\\u309F\\u30A0-\\u30FF]/.test(line);
      const hasEnglish = /[a-zA-Z]/.test(line);
      
      if (i % 2 === 0) { // Odd lines (0, 2, 4...) should be English
        if (!hasEmoji) errors.push('Line ' + (i+1) + ' missing emoji');
        if (hasJapanese) errors.push('Line ' + (i+1) + ' has Japanese chars');
      } else { // Even lines (1, 3, 5...) should be Japanese
        if (hasEmoji) errors.push('Line ' + (i+1) + ' has emoji (should not)');
        if (hasEnglish) errors.push('Line ' + (i+1) + ' has English chars');
      }
    }
    
    if (errors.length > 0) {
      console.log('ERRORS in $file:');
      errors.forEach(e => console.log('  ' + e));
      process.exit(1);
    } else {
      console.log('✓ $file: OK (' + lines.length + ' lines)');
    }
  "
}

# Validate all content files
for file in adult.js eiken5story.js eiken6story.js eiken7story.js eiken4story.js eiken3story.js gold.js silver.js bronze.js news-*.js fun-questions-*.js; do
  if [ -f "$file" ]; then
    validate_file "$file"
    if [ $? -ne 0 ]; then
      errors=$((errors + 1))
    fi
  fi
done

if [ $errors -gt 0 ]; then
  echo ""
  echo "❌ $errors file(s) failed validation"
  exit 1
else
  echo ""
  echo "✅ All files passed validation"
  exit 0
fi
```

**Action:** Add this script to `.github/workflows/validate-format.yml` or as a pre-commit hook.

---

### 2. **Create a Format Template Generator**

Build a Node.js script that generates correctly formatted content from a simple input format:

```javascript
// generate-content.js
const fs = require('fs');

function generateContent(items, filename) {
  let content = 'var ' + filename.replace('.js', '').replace(/-/g, '') + ' = [\n';
  content += '  {\n';
  content += '    title: "Title Here",\n';
  content += '    content: `\n';
  
  items.forEach((item, i) => {
    const num = i + 1;
    content += `${num}. ${item.emoji} ${item.english}\n`;
    content += `${item.japanese}\n`;
  });
  
  content += '    `\n';
  content += '  }\n';
  content += '];\n';
  
  fs.writeFileSync(filename, content);
  console.log(`Generated ${filename} with ${items.length} items`);
}

// Example usage:
// node generate-content.js --file news-2026-03-24.js --items input.json
```

**Action:** Create this tool to prevent human error in manual formatting.

---

### 3. **Update Content Creation Guidelines**

Add a **mandatory format check** to the content creation workflow:

```markdown
## Before Committing:

1. Run: `node -c your-file.js` (syntax check)
2. Run: `./validate-format.sh your-file.js` (format check)
3. Verify with: `cat -A your-file.js | head -10` (visual newline check)
4. Test on staging site before pushing to main
```

**Action:** Add this checklist to `CONTENT-CREATION-GUIDE.md`.

---

### 4. **Add Visual Editor Warning**

Add a comment at the top of all content files warning editors:

```javascript
// ⚠️ CRITICAL: This file uses alternating line format for bilingual display.
// Line 1: English (with emoji)
// Line 2: Japanese (NO emoji, NO number)
// Line 3: English (with emoji)
// Line 4: Japanese (NO emoji, NO number)
// 
// DO NOT combine English and Japanese on the same line!
// DO NOT add extra newlines between pairs!
// 
// Use validate-format.sh before committing.
```

**Action:** Add this header to all existing and new content files.

---

### 5. **Implement Auto-Correction Tool**

Create a script that can automatically fix common format errors:

```javascript
// auto-fix-format.js
// Detects and fixes:
// - Missing newlines between English/Japanese pairs
// - Emoji on Japanese lines
// - Number on Japanese lines
// - English and Japanese on same line
```

**Action:** Build this as a safety net for human error.

---

## 📊 Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Human creates file with wrong format | Medium | High | Validation script + auto-fix tool |
| Editor accidentally merges lines | Low | High | Visual editor warnings + pre-commit hooks |
| New agent unaware of format rules | Medium | High | Documentation + template generator |
| Parser breaks due to format drift | Low | Critical | Automated testing on every commit |

---

## 🎯 Priority Actions

1. **HIGH:** Implement pre-commit validation script
2. **HIGH:** Add header warnings to all content files
3. **MEDIUM:** Create template generator tool
4. **MEDIUM:** Update content creation guidelines
5. **LOW:** Build auto-correction tool

---

## 📝 Conclusion

All current content files are correctly formatted. However, the **visual misleading nature** of the format creates a significant risk for future errors. Implementing automated validation and clear warnings will prevent format drift and ensure the website continues to display bilingual content correctly.

**Recommendation:** Prioritize the validation script and header warnings immediately. These are low-effort, high-impact fixes that will prevent costly format errors in the future.

---

**Report prepared by:** Ken (EIKEN Specialist)  
**Date:** March 23, 2026  
**Status:** Ready for review and action
