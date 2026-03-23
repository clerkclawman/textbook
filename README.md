# 📚 Chatterbox House Textbook

**EIKEN English Proficiency Test Preparation Platform**  
*For students from Grade 3 (Eiken 7) to Advanced Scholars (Eiken 1)*

---

## 🚀 Quick Start: Creating New Content

If you are creating **any new content** (stories, questions, news), **READ THESE FILES IN ORDER**:

### 1. **The Master Guide** (Start Here!)
👉 [`EIKEN-LEVEL-MASTER-GUIDE.md`](./EIKEN-LEVEL-MASTER-GUIDE.md)  
*The single source of truth for all EIKEN levels, CEFR alignment, and progression rules.*

### 2. **The Specific Level Profile**
👉 [`profiles/`](./profiles/)  
*Choose the profile for your target level:*
- `EIKEN7-PROFILE.md` (Beginner, Grade 3-4)
- `EIKEN6-PROFILE.md` (Elementary, Grade 5-6)
- `EIKEN5-PROFILE.md` (Present Simple/Continuous)
- `EIKEN4-PROFILE.md` (Past Simple, Will)
- `EIKEN3-PROFILE.md` (A2 Early, Perfect Tenses)
- `EIKENPRE2-PROFILE.md` (A2 Standard)
- `EIKENPRE2PLUS-PROFILE.md` (A2 Advanced)
- `EIKEN2-PROFILE.md` (B1, Complex Clauses)
- `EIKENPRE1-PROFILE.md` (B2, Academic)
- `EIKEN1-PROFILE.md` (C1, Sophisticated)

### 3. **The Format Standard** (Technical Rules)
👉 [`CONTENT-FORMAT-STANDARD.md`](./CONTENT-FORMAT-STANDARD.md)  
*How to structure your file so the website can read it (alternating lines, backticks, etc.).*

### 4. **The Content Creation Guide** (Quality Rules)
👉 [`CONTENT-CREATION-GUIDE.md`](./CONTENT-CREATION-GUIDE.md)  
*Sentence lengths, grammar constraints, and how to write universal questions (no assumptions).*

---

## 📂 Folder Structure

```
textbook/
├── README.md                     # This file
├── EIKEN-LEVEL-MASTER-GUIDE.md   # Master guide for all levels
├── CONTENT-FORMAT-STANDARD.md    # File structure & format rules
├── CONTENT-CREATION-GUIDE.md     # Quality & grammar rules
├── profiles/                     # Detailed specs for each level
│   ├── EIKEN7-PROFILE.md
│   ├── EIKEN6-PROFILE.md
│   ├── EIKEN5-PROFILE.md
│   ├── EIKEN4-PROFILE.md
│   ├── EIKEN3-PROFILE.md
│   ├── EIKENPRE2-PROFILE.md
│   ├── EIKENPRE2PLUS-PROFILE.md
│   ├── EIKEN2-PROFILE.md
│   ├── EIKENPRE1-PROFILE.md
│   └── EIKEN1-PROFILE.md
├── adult.js                      # Weekly adult discussion questions (48 weeks)
├── eiken5story.js                # Eiken 5 stories (48 stories)
├── eiken6story.js                # Eiken 6 stories
├── ... (other story files)
├── news-YYYY-MM-DD.js            # Daily news discussion questions
├── fun-questions-YYYY-MM-DD.js   # Daily fun questions by level
└── ARCHIVE-LEGACY/               # Old, broken, or obsolete files (DO NOT USE)
```

---

## 🎯 Content Types & Files

| Content Type | Filename Pattern | Description |
| :--- | :--- | :--- |
| **Adult Weekly** | `adult.js` | 48 weeks of 50 discussion questions for adults. |
| **EIKEN Stories** | `eiken[LEVEL]story.js` | Narrative stories + personal questions (10+10 lines). |
| **Daily News** | `news-YYYY-MM-DD.js` | 50 news-based discussion questions (B1 level). |
| **Fun Questions** | `fun-questions-YYYY-MM-DD.js` | 50 playful questions across 5 levels (N7-N3). |
| **Phonics (Bronze)** | `bronze.js` | Letter-by-letter phonics stories. |
| **Basic (Silver/Gold)** | `silver.js`, `gold.js` | Simple pattern stories ("I like...", "He is..."). |

---

## ⚙️ Automated Daily Content (Cron Jobs)

The following content is generated automatically every day:

1. **News Questions** (`news-YYYY-MM-DD.js`)
   - **Time:** 6:05 AM JST
   - **Source:** BBC, NHK, CNN headlines
   - **Job:** `news-generate`

2. **Fun Questions** (`fun-questions-YYYY-MM-DD.js`)
   - **Time:** 2:00 AM JST
   - **Levels:** N7, N6, N5, N4, N3 (10 each)
   - **Job:** `fun-questions-daily`

*See OpenClaw cron configuration for details.*

---

## 🛠️ Verification & Testing

Before committing any new content file:

1. **Syntax Check:**
   ```bash
   node -c your-file.js
   ```
2. **Format Check:**
   - Ensure alternating lines (English → Japanese).
   - Ensure NO English on Japanese lines.
   - Ensure NO emoji on Japanese lines.
3. **Content Check:**
   - Sentence length matches the level profile.
   - Questions are universal (no assumptions).

---

## 📜 Legacy Files

Old, broken, or obsolete files are stored in [`ARCHIVE-LEGACY/`](./ARCHIVE-LEGACY/). **Do not use these files.**

---

**Maintained by:** Ken (EIKEN Specialist)  
**Last Updated:** March 23, 2026
