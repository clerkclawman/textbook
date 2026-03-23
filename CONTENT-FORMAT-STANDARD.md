# 📚 Universal Content Format Standard for Chatterbox House

**Last Updated:** March 23, 2026  
**Purpose:** This document defines the **exact syntax and structure** required for ALL bilingual content files to be read and displayed correctly by the website.

---

## ⚠️ CRITICAL: Two-Part Requirement

For a file to work on the site, it must satisfy **BOTH** conditions:
1. **File Structure:** Correct JavaScript array/object syntax (the "wrapper").
2. **Content Format:** Correct alternating line structure inside the `content` string.

---

## 1️⃣ File Structure (The Wrapper)

Every content file **MUST** be a valid JavaScript file that exports a **single variable** containing an **array of objects**.

### ✅ Universal Template
```javascript
var [variableName] = [
  {
    title: "[Display Title for the Dropdown]",
    content: `
[Line 1: English with Emoji]
[Line 2: Japanese Translation]
[Line 3: English with Emoji]
[Line 4: Japanese Translation]
... (continue for all items)
`
  }
];
```

### 🔑 Key Syntax Rules
| Element | Requirement | Example |
| :--- | :--- | :--- |
| **Variable Name** | Must match filename convention (e.g., `adult.js` → `var adult`) | `var adult = [...]` |
| **Array** | Must be a single `[...]` block | `[ { ... }, { ... } ]` |
| **Object** | Each item in the array is an object `{ ... }` | `{ title: "...", content: "..." }` |
| **`title`** | String for the UI dropdown menu | `title: "Week 1: New Year"` |
| **`content`** | **Template literal** using backticks (`` ` ``) | `content: \`...\`` |
| **Backticks** | **MUST** use backticks, not quotes. Allows multi-line strings. | `` `Line 1\nLine 2` `` |

### ❌ Common File Structure Errors
- **Wrong Variable Name:** `var newsData = [...]` in `news-2026-03-24.js` (Should be `var news20260324`)
- **Wrong Quotes:** Using `'` or `"` for `content` instead of backticks `` ` ``.
- **Missing Comma:** Forgetting commas between array items or object properties.
- **Multiple Objects:** The site expects **one object per file** (usually). If multiple weeks are in one file, they must be separate objects in the array.

---

## 2️⃣ Content Format (The Alternating Lines)

Inside the `content` backticks, the text **MUST** follow this strict alternating pattern:

### ✅ The Golden Rule
> **Line A (Odd):** `[Number]. [Emoji] [English Text]`  
> **Line B (Even):** `[Japanese Translation]` (NO number, NO emoji, NO English letters)

### 📝 Visual Example (Correct)
```text
1. 🎍 Happy New Year! How did you spend the first day?
明けましておめでとうございます！初日はどのように過ごしましたか？
2. ⛩️ Did you go to Hatsumode this year?
今年は初詣に行きましたか？
```

### 🚫 Visual Example (Incorrect)
```text
1. 🎍 Happy New Year! How did you spend the first day? 明けましておめでとうございます！初日はどのように過ごしましたか？
❌ WRONG: English and Japanese on the SAME line.

1. 🎍 Happy New Year! How did you spend the first day?
🎍 明けましておめでとうございます！
❌ WRONG: Emoji on the Japanese line.

1. 🎍 Happy New Year! How did you spend the first day?
1. 明けましておめでとうございます！
❌ WRONG: Number on the Japanese line.

1. 🎍 Happy New Year! How did you spend the first day?
1. Did you go to Hatsumode?
❌ WRONG: English on the Japanese line.
```

---

## 3️⃣ How the Site Parser Works (Technical Details)

The `index.html` file contains a function `parseStoryFile(text)` that processes your content. Understanding this helps avoid errors:

1. **Split by Newline:** `content.split('\n')`
   - The parser treats every **newline** as a separator between English and Japanese.
   - **No newline = No separation.** If you put English and Japanese on one line, the parser sees it as ONE long line and fails.

2. **Detect Language:**
   - **English Line:** Must start with an **Emoji** OR have more English characters than Japanese.
   - **Japanese Line:** Must **NOT** start with an emoji and must have more Japanese characters.

3. **Pairing:**
   - Line 1 → English
   - Line 2 → Japanese (paired with Line 1)
   - Line 3 → English
   - Line 4 → Japanese (paired with Line 3)
   - ...and so on.

**Consequence:** If you have an odd number of lines, the last English line will have no Japanese partner, and the display will break.

---

## 4️⃣ Content Type Variations

While the **structure** and **line format** are universal, the **prefix** on the English line varies by content type:

| Content Type | Filename | Variable Name | English Line Prefix | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Adult Weekly** | `adult.js` | `adult` | `1. `, `2. ` | `1. 🎍 Happy New Year!` |
| **Daily News** | `news-YYYY-MM-DD.js` | `newsYYYYMMDD` | `1. `, `2. ` | `1. 🚨 Iran-US tensions rise.` |
| **Fun Questions** | `fun-questions-YYYY-MM-DD.js` | `funQuestionsYYYYMMDD` | `N7. `, `N6. ` | `N7. 🍎 What is your favorite color?` |
| **EIKEN Stories** | `eiken5story.js` | `eiken5story` | **NO Number** | `🔑 Ken wants to go home.` |
| **Phonics (Bronze)** | `bronze.js` | `bronzeStories` | **NO Number** | `🍎 Apple.` |

**Note:** Even without numbers (Stories/Phonics), the **Emoji is still required** on the English line for the parser to detect it.

---

## 5️⃣ Verification Checklist

Before committing any file, run this mental check:

- [ ] **File Extension:** `.js`
- [ ] **Variable Name:** Matches filename (e.g., `adult.js` → `var adult`)
- [ ] **Structure:** `var name = [ { title: "...", content: `...` } ];`
- [ ] **Backticks:** `content` uses `` ` `` not `'` or `"`
- [ ] **Newlines:** Every English line is followed by a newline, then Japanese.
- [ ] **No Mixing:** No English letters on Japanese lines.
- [ ] **No Emoji on Japanese:** Japanese lines start with text, not emoji.
- [ ] **Even Lines:** Total number of lines in `content` is even (English + Japanese pairs).
- [ ] **Syntax Check:** `node -c filename.js` passes without errors.

---

## 6️⃣ Examples by Type

### A. Adult Weekly (Numbered)
```javascript
var adult = [
  {
    title: "Week 1: New Year",
    content: `
1. 🎍 Happy New Year! How did you spend the first day?
明けましておめでとうございます！初日はどのように過ごしましたか？
2. ⛩️ Did you go to Hatsumode?
今年は初詣に行きましたか？
`
  }
];
```

### B. Fun Questions (Level-Prefixed)
```javascript
var funQuestions20260324 = [
  {
    title: "Fun Questions - March 24",
    content: `
N7. 🍎 What is your favorite color?
好きな色は何ですか？
N6. 🌧️ What do you do when it rains?
雨が降ったら何をするのが好きですか？
`
  }
];
```

### C. EIKEN Story (No Number)
```javascript
var eiken5story = [
  {
    title: "The Missing Key",
    content: `
🔑 Ken wants to go home.
ケンは家に帰りたいです。
😱 But he loses his key!
でも鍵をなくしました！
`
  }
];
```

---

## 🎯 Summary

To create content that works:
1. **Wrap** it in the correct JS array/object structure.
2. **Use backticks** for the `content` string.
3. **Split** English and Japanese onto **separate lines**.
4. **Start** English lines with an **Emoji**.
5. **Ensure** Japanese lines have **NO Emoji** and **NO English**.

**If you follow this template, your content will display correctly on the site.**
