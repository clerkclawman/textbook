# 📚 Content Creation Guide for EIKEN Stories
**Last Updated:** March 24, 2026
**Purpose:** A strict, step-by-step guide to creating EIKEN-level stories, questions, and quizzes that are funny, pedagogically sound, and technically correct.

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

### A. Structure (The TPRS Arc)
1.  **Lines 1–3:** Introduction (Who? What? Where?).
2.  **Lines 4–7:** Problem/Complication (The funny mistake or twist).
3.  **Lines 8–10:** Resolution (Reaction, laughter, lesson).

### B. Writing Rules
- **Keep it Simple:** Use only words allowed in the Level Profile.
- **Be Funny:** Use character quirks (Tony mixes things up, Jay is loud).
- **No Random Elements:** Every sentence must advance the plot. (e.g., No "The dog is small" if the dog wasn't introduced).
- **Example (EIKEN 7):**
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
**Goal:** 10 standalone questions about the student's life that **anyone** can answer.

### A. Rules
- **NO Story Assumptions:** Do not ask "Do you have a fridge?" if the student might not. Ask "Do you like milk?" instead.
- **NO Abstract Concepts:** Avoid "Is breakfast important?" or "Do you laugh at mistakes?"
- **Concrete Topics:** Food, Family, Pets, Colors, Simple Habits.
- **Grammar:** Match the Level Profile (e.g., EIKEN 7 = Present Simple).
- **Example (EIKEN 7):**
  ```text
  1. 🍵 Do you like tea?
  2. ☕ Do you drink coffee?
  3. 🧂 Do you like salt?
  4. 🍬 Do you like sugar?
  5. 😂 Do you laugh loudly?
  6. 😅 Are you red when you are shy?
  7. 👩 Do you have a sister?
  8. 👨 Do you have a brother?
  9. 🍎 Do you like apples?
  10. 🍌 Do you like bananas?
  ```

---

## 5️⃣ Section 3: Cloze Test (Fun Grammar Review)
**Goal:** Review **function words** (Articles, Prepositions, Pronouns, Auxiliaries) in a fun, obvious way.

### A. Strategy
- **Target:** **Grammar words** (a/an/the, in/on/at, I/He/She/It, is/are/do).
- **Distractors:** 3 words that are **grammatically impossible** in that slot.
  - **Correct:** The grammar word.
  - **Distractor 1:** A Noun (if correct is not a noun).
  - **Distractor 2:** A Verb (if correct is not a verb).
  - **Distractor 3:** An Adjective.
- **No Grammar Traps:** The correct answer should be the **only one that makes sense** structurally.
- **Example (EIKEN 7):**
  ```text
  1. 🍵 1. Tony wants ___ tea. • a • cat • run • blue •
  2. 🧂 2. He sees ___ shaker. • a • dog • eat • big •
  3. 🤔 3. He puts salt ___ the cup. • in • apple • is • red •
  4. ☕ 4. He drinks ___ tea. • the • milk • sleep • happy •
  5. 😱 5. It ___ salty! • is • book • table • green •
  6. 🤢 6. He spits ___ out. • it • cat • run • loud •
  7. 👩 7. Minako ___ him. • sees • car • blue • table •
  8. 😂 8. She ___ loudly. • laughs • dog • car • red •
  9. 👉 9. "That ___ salt!" • is • apple • table • big •
  10. 😅 10. Tony ___ red. • is • dog • cat • blue •
  ```

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
