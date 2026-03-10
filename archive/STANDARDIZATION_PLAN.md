# Textbook Content Standardization Plan

**Created:** 2026-02-21
**Goal:** All files use same format: `var name = [{ title, content }]`
**Status:** 📋 Planning Phase

---

## Summary of Current State

We have **25 JS content files** with **5 different formats**:

| Format Type | Files | Status |
|------------|-------|--------|
| ✅ Correct `var name = [{ title, content }]` | 11 files | Already compliant |
| ❌ Uses `const` instead of `var` | 6 files | Needs var declaration change |
| ❌ Object with `#STORY`/`#QUESTIONS` markers | 2 files (x.js, c.js) | Needs format conversion |
| ❌ Wrapper `{ stories: [...] }` | 1 file (adult.js) | Needs wrapper removal |
| ❌ Variable conflict + wrapper | 1 file (adult2026.js) | Needs variable rename + wrapper removal |
| ❌ Object `{ "Category": [...] }` | 1 file (vocabulary.js) | Needs format conversion |
| ✅ Different structure (vocab) | 1 file (vocab.js) | Keep as-is (different purpose) |
| 🐛 Missing file reference | 1 (easyquestions2) | HTML references non-existent file |

---

## PHASE 1: HTML Bug Fix

**Priority:** 🔴 CRITICAL - Current bug breaks functionality

### Bug Description
HTML `loadLessonsData()` references `easyquestions2.questions` but:
- File `easyquestions.js` exists (not easyquestions2.js)
- File is already an array `[{ title, content }]` (old format had `.questions` property)

### Fix Required

**File:** `/home/tony/.openclaw/workspace/textbook/index.html`

**Location:** Line 2726 (in HighSchool section)

**BEFORE:**
```javascript
'HighSchool': {
    stories: [
        {
            title: 'Getting to Know You',
            content: gettingtoknow.questions  ❌ Wrong property
        },
        {
            title: 'Easy Questions',
            content: easyquestions2.questions  ❌ Wrong variable AND property
        },
        {
            title: 'Would You Rather',
            content: wouldyourather.questions  ❌ Wrong property
        }
    ]
}
```

**AFTER:**
```javascript
'HighSchool': {
    stories: [
        {
            title: 'Getting to Know You',
            content: gettingtoknow[0].content  ✅ Correct array access
        },
        {
            title: 'Easy Questions',
            content: easyquestions[0].content  ✅ Correct variable, array access
        },
        {
            title: 'Would You Rather',
            content: wouldyourather[0].content  ✅ Correct array access
        }
    ]
}
```

Alternative (better) - create a combined array structure:
```javascript
'HighSchool': [
    { title: 'Getting to Know You', content: gettingtoknow[0].content },
    { title: 'Easy Questions', content: easyquestions[0].content },
    { title: 'Would You Rather', content: wouldyourather[0].content }
]
```

### Testing
1. Open `index.html` in browser
2. Select "HighSchool" from dropdown
3. Verify content displays correctly
4. Check console for errors

---

## PHASE 2: File Format Conversions

### Conversion Order (Safest First)

#### 2.1 Easy: `const` → `var` Declaration Change (6 files)

**Files to convert:**

| File | Current Format | Target Format | Risk Level |
|------|----------------|---------------|------------|
| eiken1.js | `const eiken1 = [...]` | `var eiken1 = [...]` | 🟢 Low |
| eiken2.js | `const eiken2 = [...]` | `var eiken2 = [...]` | 🟢 Low |
| eiken4.js | `const eiken4 = [...]` | `var eiken4 = [...]` | 🟢 Low |
| eikenpre1.js | `const eikenpre1 = [...]` | `var eikenpre1 = [...]` | 🟢 Low |
| eikenpre2.js | `const eikenpre2 = [...]` | `var eikenpre2 = [...]` | 🟢 Low |
| eikenpre2plus.js | `const eikenpre2plus = [...]` | `var eikenpre2plus = [...]` | 🟢 Low |

**Conversion Process:**
1. Read file
2. Find `const <name>` declaration
3. Replace with `var <name>`
4. Save file

**Example transformation:**
```javascript
// BEFORE
const eiken1 = [
    { title: "...", content: "..." }
];

// AFTER
var eiken1 = [
    { title: "...", content: "..." }
];
```

**Reason for using var:**
- Consistency with existing codebase (11 files already use `var`)
- Functional hoisting allows flexible loading order
- Simpler mental model - all files use same pattern
- No benefit to `const` for globally-scoped lesson data arrays

**No HTML changes required** - variable names remain the same

---

#### 2.2 Medium: Object to Array Conversion - X/C Files (2 files)

**Files to convert:**

| File | Current Format | Target Format | Special Handling |
|------|----------------|---------------|------------------|
| x.js | `var x = { story1: "#STORY...\n#QUESTIONS...", story2: "..." }` | `var x = [{ title, content }, ...]` | Need to parse `#STORY`/`#QUESTIONS` markers → combine into single content OR split into separate stories + questions |
| c.js | `var c = { story1: "#STORY...\n#QUESTIONS...", story2: "..." }` | `var c = [{ title, content }, ...]` | Same as x.js |

**Current Format (x.js example):**
```javascript
var x = {
    story1: `#STORY
    🏠 Tony lives upstairs...
    #QUESTIONS
    ⏰ What time do you wake up?
    ...`,
    story2: `#STORY
    ...`
};
```

**Target Format Option A: Combine story + questions:**
```javascript
var x = [
    {
        title: "Story 1",
        content: `#STORY
🏠 Tony lives upstairs...

#QUESTIONS
⏰ What time do you wake up?
...`
    },
    {
        title: "Story 2",
        content: `...`
    }
];
```

**Target Format Option B: Separate stories + questions:**
```javascript
var xStories = [
    { title: "Story 1", content: `🏠 Tony lives upstairs...` },
    { title: "Story 2", content: `...` }
];

var xQuestions = [
    { title: "Story 1 Questions", content: `⏰ What time do you wake up?...` }
];
```

**Decision:** Use Option A (combine) - keeps it simple, aligns with current HTML handling

**Conversion Process for x.js:**
1. Read x.js
2. Parse the object to extract story1, story2, etc.
3. For each story property:
   - Extract the full content (both STORY and QUESTIONS sections)
   - Create an object with `title: "Story <N>"` and `content: <full text>`
   - Add to array
4. Write new array format
5. Repeat for c.js

**No HTML changes required** - HTML already handles x and c as objects and converts them

---

#### 2.3 Medium: Wrapper Removal - Adult Files (2 files)

##### a. adult.js

**Current Format:**
```javascript
var adult = {
    stories: [
        {
            title: "Week 1: New Year Resolutions...",
            content: `...`
        }
    ]
};
```

**Target Format:**
```javascript
var adult = [
    {
        title: "Week 1: New Year Resolutions...",
        content: `...`
    }
];
```

**Conversion Process:**
1. Read adult.js
2. Extract the stories array from the wrapper
3. Write the array directly to `var adult`
4. Save file

**No HTML changes required** - HTML references `adult` directly

---

##### b. adult2026.js

**Current Format:**
```javascript
var adult = {  ❌ Variable name conflicts with adult.js!
    stories: [
        {
            title: "Week 1: New Year Resolutions...",
            content: `...`
        }
    ]
};
```

**Target Format:**
```javascript
var adult2026 = [  ✅ Renamed variable
    {
        title: "Week 1: New Year Resolutions...",
        content: `...`
    }
];
```

**Special Considerations:**
1. **Variable rename required:** `var adult` → `var adult2026`
2. **Wrapper removal:** Remove `{ stories: [...] }` wrapper
3. **HTML integration:** adult2026.js is NOT currently loaded in HTML

**Two options:**

**Option A: Deactivate adult2026.js (simpler)**
- Don't include it in the standardized system
- Archive or delete it
- Focus on standardizing active files

**Option B: Integrate adult2026.js (more work)**
- If it's replacement content, consider merging into adult.js or
- Add as separate content category with HTML updates
- Requires HTML changes (add script tag, add to loadLessonsData)

**Recommendation:** Option A - Deactivate (check with user first)

**Conversion Process (if integrating):**
1. Read adult2026.js
2. Change `var adult` → `var adult2026`
3. Remove `{ stories: [...] }` wrapper
4. Write new array format
5. Add to HTML: `<script src='adult2026.js'></script>`
6. Add to loadLessonsData: `'Adult2026': adult2026`

---

#### 2.4 Complex: Object to Conversion - vocabulary.js

**Current Format:**
```javascript
const vocabularyCategories = {  ❌ Uses const + object structure
    "People": [
        {english: "friend", japanese: "友達", emoji: "👫"},
        ...
    ],
    "Food": [...],
    ...
};
```

**Target Format:**
```javascript
var vocabulary = [
    {
        title: "People",
        content: [
            { english: "friend", japanese: "友達", emoji: "👫" },
            ...
        ]
    },
    {
        title: "Food",
        content: [
            { english: "apple", japanese: "りんご", emoji: "🍎" },
            ...
        ]
    }
];
```

**Alternative Target Format (flattened):**
```javascript
var vocabulary = [
    { title: "friend - People", content: "友達", emoji: "👫", type: "word" },
    { title: "apple - Food", content: "りんご", emoji: "🍎", type: "word" },
    ...
];
```

**Decision:** Use first option (categories preserved) - maintains organization

**Conversion Process:**
1. Read vocabulary.js
2. Parse the vocabularyCategories object
3. For each category:
   - Create an object with `title: <category name>`
   - Set `content: <category array>`
   - Add to main array
4. Change `const` → `var`
5. Change variable name: `vocabularyCategories` → `vocabulary`
6. Save file

**HTML Changes Required:**
- Update variable reference in loadLessonsData if used
- (Note: vocabulary.js is loaded but not currently used in HTML loadLessonsData)

---

## PHASE 3: Variable Declaration Unification

### Summary of Changes

| File | From | To | Reason |
|------|------|-----|--------|
| eiken1.js | `const eiken1` | `var eiken1` | Consistency |
| eiken2.js | `const eiken2` | `var eiken2` | Consistency |
| eiken4.js | `const eiken4` | `var eiken4` | Consistency |
| eikenpre1.js | `const eikenpre1` | `var eikenpre1` | Consistency |
| eikenpre2.js | `const eikenpre2` | `var eikenpre2` | Consistency |
| eikenpre2plus.js | `const eikenpre2plus` | `var eikenpre2plus` | Consistency |
| vocabulary.js | `const vocabularyCategories` | `var vocabulary` | Consistency + name |
| adult2026.js | `var adult` | `var adult2026` | Fix conflict |

### Why Use `var`?

1. **Consistency:** 11 files already use `var` - aligning to the majority pattern
2. **Hoisting:** `var` declarations are hoisted, allowing flexible loading order in HTML scripts
3. **Simplicity:** Single pattern across all 25 files is easier to maintain
4. **Learning environment:** For teaching purposes, `var` is simpler to explain than block-scope nuances
5. **Performance:** No measurable difference for global module-scoped variables
6. **Legacy compatibility:** Older browsers and teaching materials often assume `var`

**Note:** For lesson content (static data arrays), the scoping benefits of `const`/`let` are negligible.

---

## PHASE 4: HTML Simplification

### Current Complex loadLessonsData()

**Issues with current implementation:**
1. Complex conditional checks (`typeof`, `Array.isArray`, ternary operators)
2. Multiple format handling paths
3. Special cases for every file type
4. Hard to maintain and debug
5. ~85 lines of conditional logic

### Simplified loadLessonsData()

**After all files are standardized:**

```javascript
function loadLessonsData() {
    return new Promise((resolve, reject) => {
        try {
            // Direct assignment - all files now use [{ title, content }] format
            lessonsData = {
                'Bronze': bronzeStories,
                'Silver': silverStories,
                'Gold': goldStories,
                'Adult': adult,
                'X': x,
                'C': c,
                'Eiken1': eiken1,
                'EikenPre1': eikenpre1,
                'Eiken2': eiken2,
                'EikenPre2': eikenpre2,
                'EikenPre2Plus': eikenpre2plus,
                'Eiken3': eiken3,
                'Eiken3Questions': eiken3questions,
                'Eiken4': eiken4,
                'Eiken5': eiken5story,
                'Eiken5Questions': qa5,
                'Eiken6': eiken6story,
                'Eiken7': eiken7story,
                'HighSchool': [  // Combined array
                    { title: 'Getting to Know You', content: gettingtoknow[0].content },
                    { title: 'Easy Questions', content: easyquestions[0].content },
                    { title: 'Would You Rather', content: wouldyourather[0].content }
                ],
                'Vocabulary': vocabulary
            };

            // Validate loading
            Object.entries(lessonsData).forEach(([className, data]) => {
                if (!Array.isArray(data)) {
                    console.warn(`${className} is not an array:`, typeof data);
                }
                console.log(`${className} loaded with`,
                    data.length || 0, 'items');
            });

            if (Object.keys(lessonsData).length > 0) {
                resolve();
            } else {
                reject('No lesson data found');
            }
        } catch (e) {
            console.error('Error loading lesson data:', e);
            reject(e);
        }
    });
}
```

**Benefits:**
- ✅ Reduced from ~85 lines to ~30 lines
- ✅ No conditional logic
- ✅ Direct object literal
- ✅ All files use same format
- ✅ Easy to add new content types
- ✅ Easier to debug
- ✅ Self-documenting

---

## PHASE 5: File Renaming (Optional)

### Current Variable Names vs File Names

| File | Variable Name | Status |
|------|---------------|--------|
| bronze.js | `bronzeStories` | ✅ Consistent-ish |
| silver.js | `silverStories` | ✅ Consistent-ish |
| gold.js | `goldStories` | ✅ Consistent-ish |
| adult.js | `adult` | ✅ Consistent |
| adult2026.js | `adult` → `adult2026` | ✅ Will fix |
| x.js | `x` | ✅ Consistent |
| c.js | `c` | ✅ Consistent |
| eiken1.js | `eiken1` | ✅ Consistent |
| eiken2.js | `eiken2` | ✅ Consistent |
| eiken3.js | `eiken3` | ✅ Consistent |
| eiken3questions.js | `eiken3questions` | ✅ Consistent |
| eiken4.js | `eiken4` | ✅ Consistent |
| eiken5story.js | `eiken5story` | ✅ Consistent |
| eiken6story.js | `eiken6story` | ✅ Consistent |
| eiken7story.js | `eiken7story` | ✅ Consistent |
| eikenpre1.js | `eikenpre1` | ✅ Consistent |
| eikenpre2.js | `eikenpre2` | ✅ Consistent |
| eikenpre2plus.js | `eikenpre2plus` | ✅ Consistent |
| easyquestions.js | `easyquestions` | ✅ Consistent |
| gettingtoknow.js | `gettingtoknow` | ✅ Consistent |
| wouldyourather.js | `wouldyourather` | ✅ Consistent |
| qa5.js | `qa5` | ✅ Consistent |
| vocab.js | `vocab` | ✅ Consistent |
| vocabulary.js | `vocabularyCategories` → `vocabulary` | ✅ Will fix |

### Proposed Renames (Optional Alignment)

If strict 1:1 variable-to-file mapping is desired:

| File | Current Variable | Proposed Variable | Reason |
|------|------------------|-------------------|--------|
| bronze.js | `bronzeStories` | `bronze` | Match filename |
| silver.js | `silverStories` | `silver` | Match filename |
| gold.js | `goldStories` | `gold` | Match filename |

**HTML Updates Required:**
```javascript
// Update in loadLessonsData and script references
'Bronze': bronze,        // was bronzeStories
'Silver': silver,        // was silverStories
'Gold': gold            // was goldStories
```

**Decision:** 🟡 OPTIONAL - Current names work fine, rename only if strict consistency is desired

---

## Implementation Order (Priority-Based)

### 🔴 Phase 1: CRITICAL - Fix HTML Bug
1. Fix easyquestions2.questions → easyquestions[0].content
2. Test in browser

### 🟢 Phase 2a: Easy - const → var conversions
1. eiken1.js
2. eiken2.js
3. eiken4.js
4. eikenpre1.js
5. eikenpre2.js
6. eikenpre2plus.js
7. Test Eiken content in browser

### 🟠 Phase 2b: Medium - Wrapper removal
1. adult.js - Remove { stories: [...] } wrapper
2. Test Adult content in browser
3. adult2026.js - Variable rename + wrapper removal (OR deactivate)
4. (If integrating) Add to HTML and test

### 🟡 Phase 2c: Complex - Object to array
1. x.js - Convert object to array format
2. Test X content in browser
3. c.js - Convert object to array format
4. Test C content in browser

### 🔵 Phase 2d: Complex - vocabulary.js conversion
1. vocabulary.js - Convert object to array format
2. Change variable name to `vocabulary`
3. Test in browser (if integrated)

### 🟣 Phase 4: HTML Simplification
1. Replace loadLessonsData with simplified version
2. Test all content types in browser
3. Verify no console errors

### ⚪ Phase 5: Optional - Variable renames
1. bronzeStories → bronze
2. silverStories → silver
3. goldStories → gold
4. Update HTML references
5. Test in browser

---

## Risk Mitigation

### Before Starting
1. ✅ **Backup:** Create git commit with current state
2. ✅ **Test baseline:** Verify all content works in browser
3. ✅ **Check dependencies:** Note any external references to these files

### During Conversions
1. ✅ **One file at a time:** Convert and test each file separately
2. ✅ **Validate format:** Check JSON structure after each conversion
3. ✅ **Keep originals:** Archive original files until testing complete

### Testing Each Phase
1. ✅ **Load browser:** Open index.html
2. ✅ **Check console:** Look for errors
3. ✅ **Test dropdown:** Select each content category
4. ✅ **Verify display:** Content appears correctly
5. ✅ **Test navigation:** Navigate through stories

### Rollback Plan
- If any phase breaks functionality:
  1. Revert to previous working state
  2. Investigate the specific file that failed
  3. Fix issue before proceeding

---

## Expected Outcomes

### After Completion
- ✅ **Consistent format:** All 25 files use `var name = [{ title, content }]`
- ✅ **Simplified HTML:** loadLessonsData reduced from ~85 to ~30 lines
- ✅ **No complex parsing:** Direct array access throughout
- ✅ **Easy to maintain:** Single pattern for all content
- ✅ **Easy to extend:** Adding new content is straightforward
- ✅ **No variable conflicts:** All variable names unique and descriptive

### Metrics
- **Files converted:** 14 files
- **Lines of code reduced:** ~55 lines in loadLessonsData
- **Code complexity:** High → Low
- **Maintenance effort:** High → Low

---

## Notes for Execution

### Adult2026 Decision Point
⚠️ **User decision needed:**
- Option A: Deactivate/delete adult2026.js (recommended)
- Option B: Integrate as separate content category

### Testing Checklist
After each conversion phase, verify:
- [ ] Index.html loads without errors
- [ ] All dropdown options appear
- [ ] Content displays for each category
- [ ] Console shows no errors
- [ ] Navigation works (next/previous story)

### Git Workflow
```bash
# Before starting
git add -A
git commit -m "Pre-standardization baseline"

# After each phase
git commit -m "Standardization Phase X: [description]"

# Final
git commit -m "Standardization complete: All files unified"
```

---

## Appendix: File Inventory

### File Status Matrix

| # | File | Current Format | Phase | Status |
|---|------|----------------|-------|--------|
| 1 | bronze.js | ✅ `var bronzeStories = [{ title, content }]` | 5 (optional) | Complete |
| 2 | silver.js | ✅ `var silverStories = [{ title, content }]` | 5 (optional) | Complete |
| 3 | gold.js | ✅ `var goldStories = [{ title, content }]` | 5 (optional) | Complete |
| 4 | adult.js | ❌ `{ stories: [...] }` wrapper | 2b | Needs conversion |
| 5 | adult2026.js | ❌ `var adult` (conflict) + wrapper | 2b | Needs conversion |
| 6 | x.js | ❌ Object with story1, story2... | 2c | Needs conversion |
| 7 | c.js | ❌ Object with story1, story2... | 2c | Needs conversion |
| 8 | eiken1.js | ❌ `const eiken1 = [...]` | 2a | Needs conversion |
| 9 | eiken2.js | ❌ `const eiken2 = [...]` | 2a | Needs conversion |
| 10 | eiken3.js | ✅ `var eiken3 = [...]` | - | Complete |
| 11 | eiken3questions.js | ✅ `var eiken3questions = [...]` | - | Complete |
| 12 | eiken4.js | ❌ `const eiken4 = [...]` | 2a | Needs conversion |
| 13 | eiken5story.js | ✅ `var eiken5story = [...]` | - | Complete |
| 14 | eiken6story.js | ✅ `var eiken6story = [...]` | - | Complete |
| 15 | eiken7story.js | ✅ `var eiken7story = [...]` | - | Complete |
| 16 | eikenpre1.js | ❌ `const eikenpre1 = [...]` | 2a | Needs conversion |
| 17 | eikenpre2.js | ❌ `const eikenpre2 = [...]` | 2a | Needs conversion |
| 18 | eikenpre2plus.js | ❌ `const eikenpre2plus = [...]` | 2a | Needs conversion |
| 19 | easyquestions.js | ✅ `var easyquestions = [...]` | - | Complete |
| 20 | gettingtoknow.js | ✅ `var gettingtoknow = [...]` | - | Complete |
| 21 | wouldyourather.js | ✅ `var wouldyourather = [...]` | - | Complete |
| 22 | qa5.js | ✅ `var qa5 = [...]` | - | Complete |
| 23 | vocab.js | ✅ `var vocab = [...]` (different structure) | - | Keep as-is |
| 24 | vocabulary.js | ❌ `const vocabularyCategories = {...}` | 2d | Needs conversion |
| 25 | index.html | 🐛 References non-existent easyquestions2 | 1 | Needs fix |

**Summary:**
- ✅ Already correct: 11 files
- ❌ Needs conversion: 14 files
- 🐛 Bug fixes needed: 2 (index.html + variable conflicts)

---

**End of Standardization Plan**
