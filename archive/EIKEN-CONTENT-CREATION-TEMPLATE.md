# Eiken Content Creation Template for Subagents

## Universal Content Pattern

```javascript
{
    title: "N. Descriptive Topic (Grammar Focus: ...)",
    content: `🎯 English sentence 1.
日本語翻訳 1。

🎯 English sentence 2.
日本語翻訳 2。

...

Q: Question 1?
Q: Question 2?
Q: Question 3?`
}
```

## Content Rules

### Formatting
- **Every line:** Emoji + English sentence + empty line + Japanese translation
- **Line count:** 10-12 lines per story
- **Grammar focus:** Include in title (e.g., "Grammar Focus: Present Perfect")
- **Questions:** End with 3 questions (Q: prefix)

### Vocabulary & Level Alignment
| Level | Word Count | Grammar Complexity | Topic Style |
|-------|-----------|-------------------|------------|
| Eiken 5 | 300-600 words | Present simple, continuous, basic past | Everyday, family, school |
| Eiken 4 | 600-1,200 words | Past, future, comparatives, going to | Junior high life, daily activities |
| Eiken 3 | 1,500-2,500 words | Present perfect, superlatives, conditionals | School, hobbies, friends |
| Pre-2 | 3,000-4,000 words | Complex sentences, relative clauses | Part-time jobs, social situations |
| Eiken 2 | 5,000-7,500 words | Academic vocabulary, formal register | University, work, travel |
| Pre-1 | 7,500-10,000 words | Advanced modals, reported speech | Social/economic issues |
| Eiken 1 | 10,000-15,000+ words | Inversion, subjunctive, cleft sentences | Professional, academic, specialized |

### Emoji Usage
- Use relevant emojis for visual engagement
- Match emoji to content (🎯 = action, ✈️ = travel, 📚 = study)
- Don't overuse (1 per line is standard)

### Engagement Principles
1. **Relatable topics:** Connect to Japanese students' lives
2. **Natural language:** Grammar embedded in real contexts, not drills
3. **Cultural awareness:** Topics resonate with Japanese learners
4. **Progressive difficulty:** Challenge appropriately for level
5. **Avoid:** Boring textbook drills, overly formal tone at lower levels

## Excellence Examples

### Eiken 5 (Benchmark - A1)
```javascript
{
    title: "1. My Family (Grammar Focus: Present Simple)",
    content: `👨 This is my father.
これは私の父です。

👩 This is my mother.
これは私の母です。

👦 I have one brother.
私は兄弟が一人います。

👧 I have one sister.
私は妹がいます。

Q: Do you have any brothers or sisters?
Q: How many people are in your family?
Q: What does your father do?`
}
```

### Eiken 4 (Benchmark - A1-A2)
```javascript
{
    title: "1. Last Weekend (Grammar Focus: Past Simple)",
    content: `🌞 I went to the park on Saturday.
土曜日、私は公園に行きました。

🎾 I played tennis with my friend.
友達とテニスをしました。

🍞 We ate pizza for lunch.
私たちはピザを昼食に食べました。

😊 It was a fun day.
楽しい一日でした。

Q: What did you do last weekend?
Q: Did you play any sports?
Q: What food did you eat?`
}
```

### Eiken 3 (Benchmark - A2)
```javascript
{
    title: "1. School Festival (Grammar Focus: Present Perfect)",
    content: `🎉 Have you ever been to a school festival?
学校の文化祭に行ったことがありますか？

🎪 Our school festival is next weekend.
私たちの学校の文化祭は来週末です。

🎵 We will perform a dance on Friday.
金曜日にダンスを発表します。

🎨 My class made a poster for the event.
私のクラスはイベントのポスターを作りました。

Q: What is your school festival like?
Q: What activities did you participate in?
Q: Which festival activity was the most exciting?`
}
```

## Question Files (Format)

For QA5.js, gettingtoknow.js, easyquestions.js, wouldyourather.js:
```javascript
var fileName = [
    {
        title: "0. Questions",
        content: `Q: Question 1?
A: Answer 1.

Q: Question 2?
A: Answer 2.

...`
    }
];
```

## Quality Checklist

Before completing, verify:
- [ ] 10-12 lines of content
- [ ] Emoji + English + Japanese pattern consistent
- [ ] Vocabulary matches level specification
- [ ] Grammar points appropriate for level
- [ ] 3 discussion questions at end
- [ ] Topics relatable and engaging
- [ ] Natural, flowing content (not drill-like)

## Creating New Content

1. **Identify level** → Check word count/grammar table
2. **Select topic** → Relatable to target age/level
3. **Choose grammar focus** → Match level specifications
4. **Draft 10-12 lines** → Follow emoji + English + Japanese pattern
5. **Add 3 questions** → Discussion questions at end
6. **Verify quality** → Use checklist above

---

**Reference Documentation:**
- Official specs: `/home/tony/.openclaw/workspace/eiken-grammar-specs.md`
- Content analysis: `/home/tony/.openclaw/workspace/eiken-content-analysis.md`
