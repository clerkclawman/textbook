const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the handleClassSelect function and modify it to wait for data
const oldFunction = `function handleClassSelect() {
  currentClass = this.value;
  if (currentClass) {
    if (currentClass === 'ClozeQuiz') {
      displayClozeQuestions();
    } else {
      enterReadingMode(currentClass);
    }
  }
}`;

const newFunction = `function handleClassSelect() {
  currentClass = this.value;
  if (!currentClass) return;

  // Check if lessonsData is populated
  if (!lessonsData || !lessonsData[currentClass]) {
    console.warn('Data not ready yet. Retrying in 100ms...');
    setTimeout(() => {
      if (lessonsData && lessonsData[currentClass]) {
        handleClassSelect(); // Retry
      } else {
        console.error('Data still not ready after retry!');
      }
    }, 100);
    return;
  }

  // Data is ready, proceed
  if (currentClass === 'ClozeQuiz') {
    displayClozeQuestions();
  } else {
    enterReadingMode(currentClass);
  }
}`;

const newContent = content.replace(oldFunction, newFunction);

if (newContent !== content) {
  fs.writeFileSync(path, newContent);
  console.log('Updated handleClassSelect to wait for data');
} else {
  console.log('Pattern not found! Trying alternative...');
  // Try alternative pattern
  const altPattern = "function handleClassSelect() {\\n  currentClass = this.value;\\n  if (currentClass) {\\n    if (currentClass === 'ClozeQuiz') {\\n      displayClozeQuestions();\\n    } else {\\n      enterReadingMode(currentClass);\\n    }\\n  }\\n}";
  const altReplacement = "function handleClassSelect() {\\n  currentClass = this.value;\\n  if (!currentClass) return;\\n\\n  // Check if lessonsData is populated\\n  if (!lessonsData || !lessonsData[currentClass]) {\\n    console.warn('Data not ready yet. Retrying in 100ms...');\\n    setTimeout(() => {\\n      if (lessonsData && lessonsData[currentClass]) {\\n        handleClassSelect(); // Retry\\n      } else {\\n        console.error('Data still not ready after retry!');\\n      }\\n    }, 100);\\n    return;\\n  }\\n\\n  // Data is ready, proceed\\n  if (currentClass === 'ClozeQuiz') {\\n    displayClozeQuestions();\\n  } else {\\n    enterReadingMode(currentClass);\\n  }\\n}";
  const altNewContent = content.replace(altPattern, altReplacement);
  if (altNewContent !== content) {
    fs.writeFileSync(path, altNewContent);
    console.log('Updated with alternative pattern');
  } else {
    console.log('Alternative also failed! Manual fix required.');
  }
}
