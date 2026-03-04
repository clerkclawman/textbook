# Textbook News System - Moneypenny Guide

## Overview
The News (Daily) class in the textbook displays daily news articles for adult/older students. Articles automatically expire after 48 hours.

## Current Status (March 4, 2026)

✅ **Fully operational** - Dynamic news loading system with auto-deletion

## How It Works

1. **Daily news files** are stored as JavaScript files: `news-YYYY-MM-DD.js`
2. The loader automatically finds news files from today and yesterday
3. News older than 48 hours is automatically hidden
4. Combined news is displayed in the "News (Daily)" class selection

## Location
```
/home/tony/.openclaw/workspace/textbook/
```

## Moneypenny's Tasks

### Daily News Creation

**Step 1: Create the news file**
```bash
cd /home/tony/.openclaw/workspace/textbook
./make-daily-news.sh
```

This creates `news-YYYY-MM-DD.js` with a template.

**Step 2: Add news articles**
The file format:
```javascript
var news20260304 = [
    {
        title: "March 4, 2026: World News & Current Events",
        content: `1. English question here
Japanese translation here

2. Another question
Another translation here`
    }
];
```

**Step 3: Save the file**

That's it! The news loader automatically picks it up when the site loads.

---

## File Structure

### Current Files
- `news-loader.js` - Dynamic news loading system (auto-deletion logic)
- `news-2026-03-04.js` - Today's news (50 bilingual questions)
- `make-daily-news.sh` - Helper script to create new news files
- `index.html` - Main textbook (updated to use dynamic loader)

### Creating New News Files

**Option A: Use the helper script (easiest)**
```bash
cd /home/tony/.openclaw/workspace/textbook
./make-daily-news.sh
# Creates news-YYYY-MM-DD.js with template
```

**Option B: Create manually**
1. Copy `news-2026-03-04.js`
2. Rename to `news-YYYY-MM-DD.js`
3. Update filename and variable: `news20260405 = [...]`
4. Replace news content

---

## Content Guidelines

### Target Audience
- Adult students
- Older teenagers (High School class)
- Students interested in current events

### Recommended Topics
- World news (politics, science, technology)
- Japanese news (cultural events, society)
- Discussion questions (opinions, debates)
- Light topics (food, travel, lifestyle)

### Bilingual Format
Each news article should be bilingual:
```
1. 📰 English question or statement
日本語の翻訳

2. 🤖 Second item
日本語の翻訳
```

---

## Auto-Deletion Logic

The `news-loader.js` file handles 48-hour auto-deletion:

```javascript
const NEWS_MAX_AGE_HOURS = 48;
```

How it works:
1. Checks today's date
2. Checks yesterday's date
3. Loads news files that exist and are within 48 hours
4. Hides old news automatically (no file deletion needed)
5. Displays "No Recent News" message if no current news

**No manual cleaning required!** Old news files don't hurt anything.

---

## What Moneypenny CAN Do

✅ Create new `news-YYYY-MM-DD.js` files
✅ Add/edit news content
✅ Review and format news articles
✅ Test news files work correctly

## What Moneypenny CANNOT Do (design limits)

❌ git push to GitHub (needs Actor)
❌ Delete old news files (not needed — auto-managed)
❌ Modify `index.html` (unless urgent)

---

## Typical Daily Workflow

1. **Morning**: `./make-daily-news.sh`
2. **Research**: Find today's news stories (BBC, NHK, CNN, etc.)
3. **Write content**: Add 10-20 bilingual questions based on news
4. **Save**: File is automatically picked up by the textbook
5. **Test**: Open textbook locally, select "News (Daily)" class
6. **Done!** News auto-expires in 48 hours

---

## Git Workflow

**To push updates to GitHub:**
```bash
cd /home/tony/.openclaw/workspace/textbook
git add news-YYYY-MM-DD.js
git commit -m "Add daily news: YYYY-MM-DD"
# Tell Tony to ask Actor to push
```

Moneypenny can create and commit files locally. Actor handles the `git push`.

---

## Testing Changes

1. Open textbook: `file:///home/tony/.openclaw/workspace/textbook/index.html`
2. Select "News (Daily)" from class selector
3. Verify today's news appears
4. Check browser console for errors (F12)

---

## Troubleshooting

**News not showing:**
- Check browser console for errors
- Verify `news-YYYY-MM-DD.js` exists in the textbook folder
- Verify JavaScript syntax: run `node news-YYYY-MM-DD.js` (should not error)
- Check date format: must be `news-YYYY-MM-DD.js`

**Old news still showing:**
- Check system date is correct
- Wait for browser refresh
- Hard refresh: Ctrl+Shift+R (Chrome) / Cmd+Shift+R (Mac)

**JavaScript error:**
- Check the variable name matches filename: `news20260304` for `news-2026-03-04.js`
- Check array syntax: `var news20260304 = [...]`
- Use online JavaScript linter if needed

---

## Files to Remember

- ✏️ **Daily work**: `news-YYYY-MM-DD.js` - Today's news
- 🤖 **System**: `news-loader.js` - Auto-deletion logic (don't edit unless necessary)
- 🛠️ **Helper**: `make-daily-news.sh` - Create new news file template

---

## Questions?

If Moneypenny is unsure:
- Check today's `news-2026-03-04.js` for reference format
- Ask Tony to review the content before committing
- For git push issues: escalate to Actor

---

**Last updated:** March 4, 2026
**Status:** Fully operational, auto-deletion working ✅
