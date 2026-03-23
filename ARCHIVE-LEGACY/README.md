# 📦 Legacy Files Archive

**Created:** March 23, 2026  
**Purpose:** Store obsolete files that have been superseded by the new universal standard.

---

## ⚠️ DO NOT USE THESE FILES

These files contain outdated instructions, broken generators, or conflicting format rules. **They are archived for historical reference only.**

---

## 📚 Current Source of Truth

For all content creation, use these **active** documents:

1. **`/home/tony/textbook/CONTENT-FORMAT-STANDARD.md`**  
   → **The universal format guide** for ALL content types (news, fun questions, stories, adult).  
   → Defines file structure, alternating line format, and parser requirements.

2. **`/home/tony/textbook/EIKEN-LEVEL-MASTER-GUIDE.md`**  
   → Grammar and vocabulary constraints for each EIKEN level.

3. **`/home/tony/textbook/CONTENT-CREATION-GUIDE.md`**  
   → Content quality rules (sentence length, no assumptions, etc.).

---

## 🗂️ Archived Files

### 1. `REPORT-SIR-WILLY-FORMAT-CONSISTENCY.md`
- **Status:** Obsolete
- **Reason:** This was an audit report identifying format inconsistencies. The problem is now solved by `CONTENT-FORMAT-STANDARD.md`.

### 2. `UNIVERSAL-FORMAT-SOLUTION.md`
- **Status:** Obsolete
- **Reason:** This was a temporary solution overview. The actual standard is now in `CONTENT-FORMAT-STANDARD.md`.

### 3. `generate-news.js`
- **Status:** Broken / Replaced
- **Reason:** This generator produced files with English words mixed into Japanese lines. The cron job now points to the standard document instead of using this script.

### 4. `generate-news-fixed.js`
- **Status:** Broken / Replaced
- **Reason:** Attempted to fix the translation issue but still had problems. Superseded by direct generation following the standard.

### 5. `generate-bilingual-content.js`
- **Status:** Unnecessary
- **Reason:** We realized we don't need a separate generator script. I (the AI) can generate content directly following the standard. This script is too complex and unnecessary.

### 6. `generate-fun-questions.js`
- **Status:** Replaced
- **Reason:** The cron job now uses the standard document instructions instead of this script.

---

## 🔄 Migration Path

If you find a reference to any of these files:

1. **Stop using it immediately.**
2. **Read `CONTENT-FORMAT-STANDARD.md`** for the correct format.
3. **Update any scripts or instructions** to reference the standard instead.

---

## 📝 Notes

- Files in this archive are **read-only**. Do not modify them.
- If you need to recover a file for historical reasons, copy it out of the archive, but **do not use it for new content**.
- The archive will be cleaned up periodically if files are no longer needed for reference.

---

**Last Updated:** March 23, 2026  
**Maintained by:** Ken (EIKEN Specialist)
