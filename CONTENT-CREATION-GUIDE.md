# 📚 Content Creation Guide for EIKEN Stories
**Last Updated:** March 24, 2026
**Purpose:** A strict, step-by-step guide to creating EIKEN-level stories, questions, and quizzes that are funny, pedagogically sound, and technically correct.

## ⚠️ SCOPE & LIMITATIONS
**This guide applies ONLY to EIKEN Story files** (e.g., `eiken7-new-12.js`, `eiken5story.js`).
- **DO NOT** use this 3-section structure (Story + Questions + Cloze) for:
  - **News Files:** (`news-YYYY-MM-DD.js`) → Use existing headline/question format.
  - **Pure Question Files:** (`fun-questions-*.js`, `easyquestions.js`) → Use existing level-prefixed question format.
  - **Adult/C/X Classes:** → Use existing formats specific to those classes.
- **Why?** The 3-section structure is designed for **narrative-based learning** (TPRS). News and pure question files serve different pedagogical purposes and have different existing parsers.

---

## 1️⃣ Universal Format Rules (Non-Negotiable)
**Every file** (EIKEN 5, 7, Pre-2, etc.) must follow this exact structure:

### A. File Structure
- **Variable Name:** Must match filename (e.g., `eiken7new12.js` → `var eiken7new12`).
- **Content Block:** Use **backticks** (`` ` ``) for multi-line strings.
- **Array:** Single object in an array: `[ { title: "...", content: `...` } ]`.

### B. The "Separate Line" Rule (Critical)
- **Line N (Odd):** `Number. Emoji English Text`
- **Line N+1 (Even):** `Japanese Translation` (NO number, NO emoji, NO English letters).
- **Why?** This allows the site's `JP/EN/BOTH` toggle to work correctly.
- **Example:**
  ```text
  1. 🍵 Tony wants tea.
  トニーはお茶が欲しい。
  2. 🧂 He sees a shaker.
  彼は振る器を見る。
  ```

### C. Numbering & Emojis
- **Story:** Numbered 1–10.
- **Questions:** Numbered 1–10 (reset from story).
- **Cloze:** Numbered 1–10 (reset from questions).
- **Emoji:** **Unique emoji** for every single line (no repeats within a section).

---

## 2️⃣ Level-Specific Constraints (The "Golden Specs")
**Before writing, load the specific Level Profile** (e.g., `EIKEN7-PROFILE.md`).
**Key Constraints for EIKEN 7 (Example):**
- **Vocabulary:** Concrete only (Family, Food, Animals, Colors, Body). **NO** abstract concepts (e.g., "important," "mistakes," "habits").
- **Grammar:** **ONLY** Present Simple (Be-Verb + Action). **NO** Past/Future/Perfect.
- **Sentence Length:** **3–5 words** maximum for story sentences.
- **Structure:** Strict **SVO** (Subject-Verb-Object). **NO** dropped pronouns.
- **Distractors:** For Cloze, use **distinct parts of speech** (Noun vs. Verb vs. Adj).

---

## 3️⃣ Section 1: The Story (TPRS Style)
**Goal:** A funny, relatable, 10-sentence narrative with a clear problem and resolution.
**Critical Rule:** **Every story must be unique.** No repetitive plots (e.g., "Tony mixes up salt/sugar" cannot be used twice). If characters are used, vary their scenarios (e.g., Tony cooking, Jay hiking, a student playing a prank). **Characters are optional:** Stories can feature generic "He/She/They" if it makes the plot more unique.

### A. Character Guidelines (Optional but Recommended for Humor)
- **Tony:** From England, lives in Neyagawa, wife Minako, 4 kids. Loves potatoes/milk. **Quirk:** Often mixes things up (salt/sugar, tea/coffee) or gets confused by Japanese.
- **Jay:** From England, lives in Osaka, wife Emiko. Loves beer/hiking/big food. **Quirk:** Talks too loudly (like an earthquake), often startles people/animals.
- **Usage:** Use characters to add flavor, but **do not force them** into every story. If a better funny plot exists without them, use the plot.
- **Avoid:** Repetitive "Tony mixes up X and Y" plots. Vary the scenarios (e.g., Tony lost in a store, Jay scares a bird, a student pranks a teacher).

### B. Structure (The TPRS Arc)
1.  **Lines 1–3:** Introduction (Who? What? Where?).
2.  **Lines 4–7:** Problem/Complication (The funny mistake, twist, or surprise).
3.  **Lines 8–10:** Resolution (Reaction, laughter, lesson, or happy ending).

### C. Writing Rules
- **Keep it Simple:** Use only words allowed in the Level Profile.
- **Be Funny:** Use unexpected twists, exaggerations, or relatable mistakes.
- **No Random Elements:** Every sentence must advance the plot. (e.g., No "The dog is small" if the dog wasn't introduced).
- **Uniqueness Check:** Before writing, ask: "Has this exact plot been used before?" If yes, **change the scenario**.
- **Example (EIKEN 7 - Unique Plot):**
  ```text
  1. 🍵 Tony wants tea.
  2. 🧂 He sees a shaker.
  3. 🤔 He puts salt in.
  4. ☕ He drinks the tea.
  5. 😱 Oh no! It is salty!
  6. 🤢 He spits it out.
  7. 👩 Minako sees him.
  8. 😂 She laughs loudly.
  9. 👉 "That is salt!" she says.
  10. 😅 Tony is red.
  ```

---

## 4️⃣ Section 2: Personal Questions (Universal & Concrete)
**Goal:** 10 standalone questions about the student's life that **anyone** can answer, regardless of their specific situation.

### A. The "No Assumption" Rule (Critical)
- **NEVER** assume a specific object, location, or current action unless it is universal (e.g., "sun," "air," "time").
  - ❌ **WRONG:** "Are you eating eggs?" (Assumes they are eating eggs *right now*).
  - ❌ **WRONG:** "Is the stove hot?" (Assumes they have a stove).
  - ❌ **WRONG:** "Do you run fast?" (Assumes they run).
- **ALWAYS** ask about **general habits**, **preferences**, or **universal states**.
  - ✅ **CORRECT:** "Do you eat eggs?" (General habit).
  - ✅ **CORRECT:** "Is it hot today?" (Universal weather).
  - ✅ **CORRECT:** "Do you run in the park?" (General habit, optional location).
- **Strategy:** If a question requires a specific object from the story (e.g., "shaker," "salt"), **replace it** with a generic equivalent (e.g., "food," "drink") or a different universal topic.

### B. Grammar & Topics
- **Grammar:** Match the Level Profile (e.g., EIKEN 7 = Present Simple; EIKEN 6 = Mix of Simple/Continuous).
- **Topics:** Food, Family, Pets, Hobbies, Weather, Daily Routines, Feelings.
- **Example (EIKEN 6 - Corrected):**
  ```text
  1. 🍳 Do you like cooking? (General preference)
  2. 🥚 Do you eat eggs? (General habit)
  3. 🥛 Do you drink milk? (General habit)
  4. 🥣 Do you mix things? (General action)
  5. 🔥 Is it hot today? (Universal weather)
  6. 🏃 Do you run in the park? (General habit)
  7. 💨 Is the wind blowing? (Universal weather)
  8. 🚨 Do you hear loud noises? (General experience)
  9. 👩 Do you call your friends? (General habit)
  10. 😅 Are you tired today? (General state)
  ```

---

## 5️⃣ Section 3: Cloze Test (Fun Grammar Review)
**Goal:** Review **grammar mechanics** (Articles, Prepositions, Pronouns, Verb Endings) in a fun, obvious way.
**Critical Rule:** **Cloze items are INDEPENDENT of the story.** Do **NOT** try to force the story's vocabulary into the quiz. Create **fresh, simple sentences** that target the specific grammar point for the level.

### A. Strategy (The "Independent Sentence" Method)
1.  **Identify the Target Grammar:** (e.g., Present Continuous `-ing`, Plurals `-s`, Articles `a/an`).
2.  **Create 10 Simple Sentences:** Use **generic subjects** (I, He, She, It, They) and **common verbs/nouns**.
    - *Do not reuse story characters or plot points unless it's a natural fit.*
    - *Example Target (Present Continuous):* "She is ___ a book." (reading), "They are ___ soccer." (playing).
3.  **Select the Correct Word:** The grammar word that fits the slot.
4.  **Create 3 Distractors:** Choose words that are **completely different parts of speech** or **nonsense** in that context.
    - **Distractor 1:** A Noun (if correct is a verb/preposition).
    - **Distractor 2:** A Verb (if correct is a noun/preposition).
    - **Distractor 3:** An Adjective (if correct is a noun/verb).
    - *Goal:* The student sees the sentence structure and picks the word that fits the **slot**, not the meaning.

### B. Example (EIKEN 6 - Present Continuous Focus)
*Target: `-ing` verbs and `is/are`.*
```text
1. 🍳 1. She is ___ a book. • reading • cat • run • blue • (Verb vs Noun/Verb/Adj)
2. 🏃 2. They are ___ soccer. • playing • dog • eat • big • (Verb vs Noun/Verb/Adj)
3. ☀️ 3. It is ___ sunny. • very • apple • sleep • red • (Adverb vs Noun/Verb/Adj)
4. 🐕 4. He is ___ fast. • running • car • jump • loud • (Verb vs Noun/Verb/Adj)
5. 📚 5. We are ___ homework. • doing • book • table • green • (Verb vs Noun/Noun/Adj)
6. 🎵 6. She is ___ music. • listening • dog • is • red • (Verb vs Noun/Verb/Adj)
7. 🍎 7. They are ___ apples. • eating • cat • run • blue • (Verb vs Noun/Verb/Adj)
8. 🌧️ 8. It is ___ rain. • raining • book • sleep • happy • (Verb vs Noun/Verb/Adj)
9. 🏠 9. He is ___ home. • at • car • big • table • (Preposition vs Noun/Adj/Noun)
10. 😴 10. They are ___ now. • sleeping • dog • jump • loud • (Verb vs Noun/Verb/Adj)
```
*Note: The sentences are simple, generic, and focus purely on the grammar structure, not the story plot.*

---

## 6️⃣ Validation Checklist (Run Before Saving)
- [ ] **Format:** English and Japanese on **separate lines**?
- [ ] **Emojis:** Unique emoji on every English line?
- [ ] **Story:** 10 sentences, 3–5 words each, TPRS arc (Problem → Resolution)?
- [ ] **Questions:** 10 universal, concrete questions (no assumptions)?
- [ ] **Cloze:** 10 items, targeting grammar words, with 4 distinct distractors?
- [ ] **Level:** All vocabulary and grammar match the Level Profile?
- [ ] **Syntax:** `node -c filename.js` passes?

---

## 7️⃣ Example: Full Week 12 (EIKEN 7)
*(See `eiken7-new-12.js` for the complete, validated file.)*

**Story:** Tony puts salt in his tea.
**Questions:** Do you like tea? Do you have a sister?
**Cloze:** "Tony wants **a** tea" (a/cat/run/blue).

---

**Remember:** If it's not in the Level Profile, **don't use it**. If it's not funny or clear, **rewrite it**.
