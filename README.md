# English Learning Textbook

An interactive web-based English learning platform designed for TV browsers (remote/mouse control) with full mobile support.

## Features

- 📺 **TV-Optimized Interface**: Large touch-friendly buttons, clear navigation, designed for remote controls
- 📱 **Mobile Responsive**: Works seamlessly on smartphones and tablets
- 📚 **Complete Curriculum**: Covers beginner to advanced levels including Eiken preparation
- 🎯 **Multiple Learning Modes**: Stories, conversations, vocabulary, and comprehension questions
- 🔄 **Instant Feedback**: Real-time answer validation with explanations

## Supported Levels

### Beginner
- Level C - Basic introductions and simple stories
- Level X - Everyday scenarios and vocabulary

### Eiken Junior
- Bronze - Foundation level for young learners
- Silver - Intermediate stories and vocabulary
- Gold - Advanced junior level content

### Eiken Main
- Eiken 1-5 - Complete preparation for levels 1-5
- Eiken 6-7 - Junior Eiken levels with engaging stories

### Eiken Pre
- Pre1/Pre2/Pre2+ - Comprehensive pre-2 level preparation with story-based learning

### Conversation
- Getting to Know You - Personal information questions
- Easy Questions - Simple conversation starters
- Would You Rather - Creative discussion prompts

### Adult Learning
- Advanced topics including social issues, current events, and sophisticated vocabulary

### Extras
- Vocabulary builders and additional practice materials

## TV Remote / Mouse Controls

### Navigation
- **Arrow Keys** or **D-Pad**: Navigate between stories/questions
- **Enter** or **OK**: Select answer or proceed
- **Back/Escape**: Return to main menu
- **Large Buttons**: All interactive elements are TV-remote friendly (minimum 44px touch targets)

### Navigation Buttons
- **← Prev**: Go to previous story/question
- **Next →**: Advance to next story/question
- **Main Menu**: Return to level selection
- **Show Answer**: View correct answer (when available)
- **Progress Bar**: Visual indicator of completion

## File Structure

```
textbook-main/
├── index.html              # Main application (TV/Mobile optimized)
├── README.md               # This file
├── news.html               # News section
├── QA5.js                  # Eiken 5 questions
│
└── content/
    ├── beginners/
    │   ├── level-c.js      # Level C content
    │   └── level-x.js      # Level X content
    ├── eiken-junior/
    │   ├── bronze.js       # Bronze level (Junior)
    │   ├── silver.js       # Silver level (Junior)
    │   └── gold.js         # Gold level (Junior)
    ├── eiken/
    │   ├── eiken1.js       # Eiken 1 stories
    │   ├── eiken2.js       # Eiken 2 stories
    │   ├── eiken3.js       # Eiken 3 stories
    │   ├── eiken3-questions.js # Eiken 3 Q&A
    │   ├── eiken4.js       # Eiken 4 stories
    │   ├── eiken5.js       # Eiken 5 stories
    │   ├── eiken6.js       # Eiken 6 stories (Junior)
    │   └── eiken7.js       # Eiken 7 stories (Junior)
    ├── eiken-pre/
    │   ├── eiken-pre1.js   # Pre-1 level
    │   ├── eiken-pre2.js   # Pre-2 level
    │   └── eiken-pre2plus.js # Pre-2+ level
    ├── conversation/
    │   ├── gettingtoknow.js      # Personal questions
    │   ├── easyquestions.js      # Easy conversation starters
    │   └── wouldyourather.js     # Discussion prompts
    ├── adult/
    │   └── adult.js       # Adult learning materials
    └── extras/
        ├── vocab.js       # Vocabulary builder
        └── vocabulary.js  # Additional vocabulary
```

## Content Format

Each level follows a consistent structure:

### Stories (Array format)
```javascript
const levelName = [
    {
        title: "Story Title",
        content: `English text here...
Japanese translation here...
Additional content...`
    }
];
```

### Questions (Object format)
```javascript
const levelName = {
    questions: `Question 1 in English?
Japanese translation...
Question 2 in English?
Japanese translation...`
};
```

### Q&A with Explanations
```javascript
const levelName = {
    "story1": {
        "question": "Question text",
        "answer": "Answer text",
        "explanation": "Detailed explanation..."
    }
};
```

## Browser Compatibility

- ✅ Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- ✅ TV browsers (webOS, Tizen, Android TV)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Desktop browsers

## Responsive Breakpoints

- **Mobile**: < 640px (Stacked layout, 16px base font)
- **Tablet**: 640px - 1024px (Adjusted grid, 18px base font)
- **Desktop/TV**: > 1024px (Full grid, 20px base font)
- **Large TV**: > 1400px (Enhanced spacing, 22px base font)

## Performance Optimization

- Dynamic script loading (only loads selected level)
- Efficient DOM updates for story transitions
- Local storage for progress tracking (optional)
- Minimal external dependencies
- CSS animations with hardware acceleration

## Quick Start

1. Open `index.html` in any modern web browser
2. Select a level from the main menu
3. Use arrow keys/remote to navigate stories
4. Press Enter/OK to select answers
5. Track your progress visually

## Deploy to GitHub

The repository is ready for GitHub deployment:

```bash
cd /home/tony/.openclaw/workspace-main/textbook-main
git init
git add .
git commit -m "Initial commit - TV-optimized English learning platform"
git remote add origin <your-github-repo>
git push -u origin main
```

## Contributing Guidelines

### Adding New Content
1. Create JavaScript file in appropriate `content/` subdirectory
2. Follow existing naming conventions (lowercase, hyphen separated)
3. Use consistent data structure (array for stories, object for questions)
4. Add level mapping to `index.html` `levelData` object
5. Add script loader to `loadLevel()` function

### Naming Conventions
- Files: `kebab-case.js` (e.g., `eiken-pre1.js`)
- Variables: `camelCase` (e.g., `eikenPre1`)
- Content: Bilingual (English first, Japanese translation)

## License

Private educational use.

## Contact

Tony's English Classroom Project
