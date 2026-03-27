const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find and replace the handleStorySelect function
const oldFunction = `function handleStorySelect() {
  currentStory = this.value;
  if (currentStory) {
    enterReadingMode(currentClass);
  }
}`;

const newFunction = `function handleStorySelect() {
  currentStory = this.value;
  if (currentStory) {
    if (currentClass === 'ClozeQuiz') {
      // For Cloze Quiz, display the questions instead of entering reading mode
      displayClozeQuestions();
    } else {
      enterReadingMode(currentClass);
    }
  }
}`;

const newContent = content.replace(oldFunction, newFunction);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Updated handleStorySelect to handle Cloze Quiz');
} else {
  console.log('Pattern not found! Trying alternative...');
  // Try with different whitespace
  const altPattern = "function handleStorySelect() {\\n  currentStory = this.value;\\n  if (currentStory) {\\n    enterReadingMode(currentClass);\\n  }\\n}";
  const altReplacement = "function handleStorySelect() {\\n  currentStory = this.value;\\n  if (currentStory) {\\n    if (currentClass === 'ClozeQuiz') {\\n      displayClozeQuestions();\\n    } else {\\n      enterReadingMode(currentClass);\\n    }\\n  }\\n}";
  const altNewContent = content.replace(altPattern, altReplacement);
  if (altNewContent !== content) {
    fs.writeFileSync(path, altNewContent, 'utf8');
    console.log('Updated with alternative pattern');
  } else {
    console.log('Alternative also failed!');
  }
}
