# Chatterbox House: Eikaiwa Content System

A bilingual (English/Japanese) teaching content platform for English conversation schools in Japan. Built with vanilla JavaScript and hosted on GitHub Pages.

**Live Site:** https://clerkclawman.github.io/textbook

## Overview

Chatterbox House provides structured lesson content for Eiken (英検) English proficiency exam preparation and conversational English classes. All content is bilingual by design — English questions/prompts with Japanese translations for learner comprehension.

## Content Structure

### Class Levels

| Level | File | Purpose |
|-------|------|---------|
| **Bronze** | `bronze.js` | Beginner/Phonics — A-Z letter recognition with words (Apple, Ant, Alligator) |
| **Silver** | `silver.js` | Elementary — Simple present, daily routines |
| **Gold** | `gold.js` | Pre-intermediate — Past tense, descriptions |
| **C Class** | `c.js` | Intermediate conversations |
| **X Class** | `x.js` | Advanced/Additional topics |

### Eiken Exam Preparation (Grade 5 → Pre-1)

| Grade | Stories | Vocabulary |
|-------|---------|------------|
| **Eiken 5** | `eiken5story.js` | `eiken5vocab.html` (681 words, categorized) |
| **Eiken 4** | `eiken4.js` | — |
| **Eiken 3** | `eiken3.js` | `eiken3questions.js` |
| **Eiken Pre-2** | `eikenpre2.js` | — |
| **Eiken Pre-2 Plus** | `eikenpre2plus.js` | Enhanced difficulty |
| **Eiken 2** | `eiken2.js` | — |
| **Eiken Pre-1** | `eikenpre1.js` | — |
| **Eiken 1** | `eiken1.js` | — |

### Adult & High School Content

| Content | File | Description |
|---------|------|-------------|
| **Adult 2026** | `adult2026.js` | Current adult conversation set |
| **Adult Archive** | `adult.js` | Previous years' content |
| **Easy Questions** | `easyquestions.js` | Icebreakers (What makes your mornings enjoyable?) |
| **Getting to Know** | `gettingtoknow.js` | Personal questions |
| **Would You Rather** | `wouldyourather.js` | Preference games |
| **QA5** | `QA5.js` | Five-question activities |
| **Vocab Lists** | `vocab.js`, `vocabulary.js` | Extended vocabulary |

### Special Features

| Feature | File | Description |
|---------|------|-------------|
| **Vocab TV** | `eiken5vocab.html` | Flashcard system with TTS, categories, matching game |
| **News Reader** | `news.html` | Japanese news headlines for discussion |

## Content Format

All lesson content follows a standard JavaScript object structure:

```javascript
var contentName = [
  {
    title: "Story Title (Grammar Focus)",
    content: `🏠 English sentence here.
日本語の翻訳です。
👨 Another English sentence.
もう一つの日本語訳です。`
  }
];
```

### Pattern Rules:
- **Emoji** at start of English lines (visual cues for kids)
- **English** line with question or statement
- **Japanese** translation on following line
- **Blank line** between pairs for readability
- **Follow-up questions** at end of each story (for discussion)

## How to Add Content

### Method 1: Direct Edit (Simple)

1. Open the relevant `.js` file
2. Add new object to the array:
   ```javascript
   {
     title: "My New Story (Present Simple)",
     content: `🎒 I walk to school every day.
毎日歩いて学校に行きます。
🚶 I see my friend on the way.
途中で友達に会います。`
   }
   ```
3. Commit and push — site updates automatically

### Method 2: Batch Generation (Advanced)

For creating multiple stories/questions at once:
1. Create content in plain text following the emoji/EN/JA pattern
2. Use a text processor to wrap in JavaScript format
3. Validate JSON syntax before committing

## Publishing Changes

This site uses **GitHub Pages**:
- Edit files in the repository
- Commit changes
- Site updates within 1-2 minutes
- No build process required

## Technical Details

- **Platform:** GitHub Pages (static hosting)
- **Languages:** HTML5, CSS3, vanilla JavaScript
- **CDN:** Google Fonts (Poppins)
- **Features:** Text-to-speech (Web Speech API), localStorage for preferences
- **No backend:** All content baked into JS files

## Browser Compatibility

- Chrome/Edge (recommended for TTS)
- Firefox
- Safari
- Mobile browsers supported

## Content Guidelines

When adding new material:

1. **Keep it bilingual** — Every English line needs Japanese
2. **Use emojis** — Visual anchors help young learners
3. **Follow Eiken scope** — Match grammar/vocabulary to grade level
4. **Include follow-ups** — End stories with 2-3 discussion questions
5. **Stay practical** — Daily life, school, family, hobbies

## Fork and Customize

This is a fork of `chatterbox-house/class`. To create your own version:

1. Fork this repository
2. Enable GitHub Pages in Settings
3. Edit content to match your curriculum
4. Customize styling in `index.html` CSS variables

## Credits

- Original content: DeepSeek AI generation (free tier)
- Refinement: Tony / Chatterbox House
- Platform: GitHub Pages

## License

Content created for educational use. Modify freely for your own eikaiwa school.