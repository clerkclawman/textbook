# Daily News Creation Workflow

## File Format
Each daily news file MUST follow this exact format:

```javascript
var newsYYYYMMDD = [
  {
    title: "March 4, 2026: World News & Daily Life",
    content: `1. 💥 Headline here with emoji. Discussion question?
    日本語訳ですか？

    2. 🎤 Next headline with emoji. Question?
    日本語訳ですか？

    ... (continue to 50 items)
    50. 🔮 Final reflection question.
    最終の質問？`
  }
];
```

### Format Rules:
- **Variable name**: `var newsYYYYMMDD = [` where YYYYMMDD is the date
- **Exactly ONE object** per day (not 50 separate objects)
- **Template literals**: Use backticks \`...\` for content
- **Each item**: Numbered 1-50, with pattern:
  - `[Number]. [Emoji] [English headline]. [Discussion question]?`
  - Empty line
  - `[Japanese translation]`
  - Empty line (unless it's the last item)

### File Naming:
- Name: `news-YYYY-MM-DD.js` (hyphens, underscore is WRONG)
- Example: `news-2026-03-10.js`

## How to Create Daily News (50 items):

1. **Gather headlines** from real sources (BBC, NHK, CNN, Yahoo News, Daily Mail)
2. **For each headline:**
   - Add emoji that illustrates the topic
   - Write 1-2 sentence summary in simple English
   - Add a fun discussion question (opinion-based, not comprehension)
   - Add Japanese translation
3. **Format:** Number each item (1-50), separate with blank lines
4. **Save as:** `news-YYYY-MM-DD.js` (e.g., `news-2026-03-10.js`)
5. **Push to git** so it's live on the website

## Examples to Follow:
- ✅ `news-2026-03-04.js` - Original format (KEEP)
- ✅ `news-2026-03-10.js` - Current working format (KEEP)

## Files to Delete:
- ❌ Any `news-YYYY-MM-DD-*.js` files with suffixes (wrong format)
- ❌ Old review docs that are outdated