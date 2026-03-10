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