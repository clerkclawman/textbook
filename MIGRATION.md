# Content Migration Guide

## Standard Format

All content files should follow this structure:

```javascript
var gradeNameStories = [
  {
    title: "Story Title (Grammar Focus)",
    content: `🍎 English sentence.
日本語の翻訳。
🐶 Another sentence.
別の翻訳。`
  }
];
```

## Naming Convention

| Original | Standardized | Variable |
|----------|--------------|----------|
| bronze.js | bronzeStories.js | bronzeStories |
| silver.js | silverStories.js | silverStories |
| gold.js | goldStories.js | goldStories |
| eiken5story.js | eiken5Stories.js | eiken5Stories |
| eiken4.js | eiken4Stories.js | eiken4Stories |
| eiken3.js | eiken3Stories.js | eiken3Stories |
| eikenpre2.js | eikenPre2Stories.js | eikenPre2Stories |
| eikenpre2plus.js | eikenPre2PlusStories.js | eikenPre2PlusStories |
| eiken2.js | eiken2Stories.js | eiken2Stories |
| eikenpre1.js | eikenPre1Stories.js | eikenPre1Stories |
| eiken1.js | eiken1Stories.js | eiken1Stories |
| eiken7story.js | eiken7Stories.js | eiken7Stories |
| eiken6story.js | eiken6Stories.js | eiken6Stories |
| adult.js | adultStories.js | adultStories |
| adult2026.js | adult2026Stories.js | adult2026Stories |
| c.js | cClassStories.js | cClassStories |
| x.js | xClassStories.js | xClassStories |
| easyquestions.js | easyQuestions.js | easyQuestions |
| gettingtoknow.js | gettingToKnowQuestions.js | gettingToKnowQuestions |
| wouldyourather.js | wouldYouRatherQuestions.js | wouldYouRatherQuestions |
| QA5.js | qa5Questions.js | qa5Questions |
| eiken3questions.js | eiken3Questions.js | eiken3Questions |

## Migration Steps

1. Backup original files
2. Create new standardized files in ./migrated/
3. Update index.html loader to use new variable names
4. Test each class displays correctly
5. Replace original files with migrated versions

## Content Rules

1. **Variable naming**: gradeNameStories (camelCase, Stories suffix)
2. **Structure**: Array of {title, content} objects
3. **Content format**: 
   - Line 1: Emoji + English
   - Line 2: Japanese translation (no emoji)
   - Repeat
4. **No blank lines** between pairs
5. **No numbered prefixes** on sentences
