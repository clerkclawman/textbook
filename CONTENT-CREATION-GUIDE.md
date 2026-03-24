# 📚 Content Creation Guide for EIKEN Stories
**Last Updated:** March 24, 2026
**Purpose:** A clear, positive guide to creating EIKEN-level stories, questions, and quizzes that are funny, pedagogically sound, and technically correct.

---

## ⚠️ SCOPE
**This guide applies ONLY to EIKEN Story files** (e.g., `eiken7-new-12.js`, `eiken5story.js`).
- **Do NOT use this format for:** News files, pure question files, or Adult/C/X classes. Those have their own existing formats.

---

## 1️⃣ Universal Format Rules (The Template)
**Every file must follow this exact structure:**

### A. File Structure
- **Variable Name:** Matches filename (e.g., `eiken7new12.js` → `var eiken7new12`).
- **Content Block:** Use **backticks** (`` ` ``) for multi-line strings.
- **Array:** Single object in an array: `[ { title: "...", content: `...` } ]`.

### B. The "Separate Line" Rule
**English and Japanese must be on separate lines.**
- **Line N (Odd):** `Number. Emoji English Text`
- **Line N+1 (Even):** `Japanese Translation` (No number, no emoji).
- **Why?** This enables the site's `JP/EN/BOTH` toggle.

**✅ CORRECT Template:**
```text
1. 🍵 Tony wants tea.
トニーはお茶が欲しい。
2. 🧂 He sees a shaker.
彼は振る器を見る。
```

---

## 2️⃣ Level-Specific Constraints (The "Golden Specs")
**Before writing, load the specific Level Profile** (e.g., `EIKEN7-PROFILE.md`).
- **EIKEN 7:** 3-5 words, Present Simple only, concrete nouns.
- **EIKEN 6:** 4-7 words, Present Continuous + Plurals, concrete nouns.
- **EIKEN 5:** 4-6 words, Present Simple/Continuous + `can`, school/hobby topics.

---

## 3️⃣ Section 1: The Story (TPRS Style)
**Goal:** A funny, relatable, 10-sentence narrative.

### A. Structure (The TPRS Arc)
1.  **Lines 1–3:** Introduction (Who? What? Where?).
2.  **Lines 4–7:** Problem/Complication (The funny mistake or twist).
3.  **Lines 8–10:** Resolution (Reaction, laughter, lesson).

### B. Character Guidelines (Optional)
- **Tony:** From England, lives in Neyagawa, wife Minako. **Quirk:** Mixes things up (salt/sugar).
- **Jay:** From England, lives in Osaka, wife Emiko. **Quirk:** Talks too loudly.
- **Rule:** Use characters to add flavor, but **every story must be unique**. Do not repeat the same plot (e.g., "Tony mixes salt/sugar" only once).

### C. ✅ CORRECT Story Template (EIKEN 7)
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
**Goal:** 10 standalone questions about the student's life.

### A. The "Universal Habit" Rule
- **Ask about general habits or preferences.**
- **Use simple, concrete topics:** Food, Family, Pets, Hobbies, Weather.

### B. ✅ CORRECT Question Templates
- **General Habit:** "Do you like tea?" (Not "Are you drinking tea now?")
- **General Fact:** "Do you have a dog?" (Not "Do you have two dogs?")
- **Universal State:** "Is it hot today?" (Not "Is the stove hot?")
- **General Action:** "Do you run in the park?" (Not "Are you running fast?")

### C. ✅ CORRECT Template (EIKEN 6)
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
**Goal:** Review grammar mechanics in a fun, obvious way.
**Critical Rule:** **Cloze items are INDEPENDENT of the story.** Create fresh, simple sentences.

### A. The "Distinct Parts of Speech" Strategy
- **Target:** A grammar word (Article, Preposition, Verb, Modal).
- **Distractors:** Choose 3 words that are **completely different parts of speech**.
  - **Option 1:** The Correct Grammar Word.
  - **Option 2:** A Noun (e.g., `cat`, `dog`, `apple`).
  - **Option 3:** A Verb (e.g., `run`, `eat`, `sleep`).
  - **Option 4:** An Adjective (e.g., `blue`, `big`, `red`).

### B. ✅ CORRECT Cloze Templates
**Target: Verb (`is`)**
```text
1. It ___ sunny today. • is • cat • run • blue •
```
*Correct: `is` (verb). Distractors: `cat` (noun), `run` (verb), `blue` (adj).*

**Target: Noun Plural (`dogs`)**
```text
2. He sees two ___. • dogs • car • jump • loud •
```
*Correct: `dogs` (noun). Distractors: `car` (noun), `jump` (verb), `loud` (adj).*

**Target: Modal (`can`)**
```text
3. I ___ play soccer. • can • dog • is • red •
```
*Correct: `can` (modal). Distractors: `dog` (noun), `is` (verb), `red` (adj).*

**Target: Preposition (`with`)**
```text
4. I write ___ a pen. • with • car • jump • loud •
```
*Correct: `with` (prep). Distractors: `car` (noun), `jump` (verb), `loud` (adj).*

### C. ✅ CORRECT Full Template (EIKEN 5)
```text
1. 🏫 1. It ___ Monday today. • is • cat • run • blue •
2. 🎒 2. I ___ to school. • go • dog • eat • big •
3. 📚 3. I ___ a book. • read • apple • sleep • red •
4. ✏️ 4. I write ___ a pen. • with • car • jump • loud •
5. 👂 5. I ___ to music. • listen • book • table • green •
6. ⚽ 6. I ___ play soccer. • can • dog • is • red •
7. 🎨 7. My friend ___ a picture. • draws • cat • run • blue •
8. 🤔 8. She ___ draw well. • can • book • sleep • happy •
9. 😊 9. We ___ happy now. • are • car • big • table •
10. 🏫 10. School ___ fun today. • is • dog • jump • loud •
```

---

## 6️⃣ Validation Checklist (Run Before Saving)
- [ ] **Format:** English and Japanese on **separate lines**?
- [ ] **Emojis:** Unique emoji on every English line?
- [ ] **Story:** 10 sentences, TPRS arc (Problem → Resolution)?
- [ ] **Questions:** 10 universal, concrete questions (no assumptions)?
- [ ] **Cloze:** 10 items, targeting grammar words, with 4 distinct distractors (Noun/Verb/Adj)?
- [ ] **Level:** All vocabulary and grammar match the Level Profile?
- [ ] **Syntax:** `node -c filename.js` passes?

---

**Remember:** If it's not in the Level Profile, **don't use it**. If it's not funny or clear, **rewrite it**.
