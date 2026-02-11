# News.html Fix TEST - 2026-02-11

## What Changed (Test #1)

**Changed:** Removed Japan Today RSS feed configuration

### Removed:
1. Japan Today feed definition (lines 733-749 in original)
   - Complex multi-proxy configuration
   - 5 different proxy URLs (all unreliable)
   - Direct Atom feed fallback

2. Japan Today as default source:
   - Removed time-based switching (9am-8pm JST → Japan Today)
   - Now always defaults to BBC TOP

3. Comments added:
   - All Japan Today references now commented with "Removed Japan Today..."
   - Preserved code for reference/diagnostics

### Why:

Japan Today feed was the biggest source of failure due to:
- Multiple proxy failures
- CORS issues
- Complex error handling cascade
- 5+ proxy attempts slowing down the app

### Backup:

**Original file saved as:** `news.html.backup-20260211-235344`

### How to Revert if Fails:

```bash
cd ~/.openclaw/workspace-main/textbook-main

# Restore backup
cp news.html.backup-20260211-235344 news.html

# Or revert this commit (if committed)
git checkout HEAD~1 -- news.html

# Or restore from git
git checkout 9cf926f -- news.html
```

## Testing Procedure:

1. Open news.html in browser
2. Verify BBC TOP loads correctly
3. Test switching to BBC WORLD, BBC SPORTS
4. Verify ticker works
5. Check for any console errors
6. Verify translation tries to load

## Expected Result:

- ✅ BBC feeds work (always worked before)
- ✅ Site loads faster (no slow Japan Today attempts)
- ✅ Fewer error messages in console
- ✅ Translation may still fail (separate issue to fix)

## If This Doesn't Fix Everything:

Next steps (in order of priority):

1. **Simplify RSS feeds further** - Keep BBC only, remove others
2. **Add translation error handling** - Better user feedback when MyMemory fails
3. **Add offline mode** - Cache headlines in localStorage
4. **Consider NewsAPI** - Replace RSS with reliable JSON API

## Modified Files:

- `news.html` - Removed Japan Today config

## Status:

**TEST #1:** ✅ Applied - Awaiting testing

**Date:** 2026-02-11 23:55 GMT+9
