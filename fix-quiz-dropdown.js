const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the forEach loop that processes stories and modify it to handle ClozeQuiz
const searchPattern = `classData.forEach((story, index) => {
      if (story && story.title) {
        const option = document.createElement("option");
        option.value = optionIndex;
        option.textContent = story.title;
        storySelector.appendChild(option);
        optionIndex++;
      } else {
        console.warn('Invalid story at index', index, ':', story);
      }
    });`;

const replacement = `classData.forEach((item, index) => {
      let optionText = '';
      // Handle ClozeQuiz items (have 'level' and 'sentence' but no 'title')
      if (cls === 'ClozeQuiz' && item.level && item.sentence) {
        optionText = \`\${item.level}: \${item.sentence}\`;
      } else if (item && item.title) {
        // Standard story items
        optionText = item.title;
      } else {
        console.warn('Invalid item at index', index, ':', item);
        return; // Skip invalid items
      }
      
      const option = document.createElement("option");
      option.value = optionIndex;
      option.textContent = optionText;
      storySelector.appendChild(option);
      optionIndex++;
    });`;

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully updated populateStorySelector to handle ClozeQuiz items');
} else {
  console.log('Pattern not found! Trying alternative approach...');
  // Try a more flexible pattern
  const altPattern = "if (story && story.title) {";
  const altReplacement = "if (cls === 'ClozeQuiz' && item.level && item.sentence) {\n        optionText = `${item.level}: ${item.sentence}`;\n      } else if (story && story.title) {";
  const altNewContent = content.replace(altPattern, altReplacement);
  if (altNewContent !== content) {
    fs.writeFileSync(path, altNewContent, 'utf8');
    console.log('Successfully updated with alternative pattern');
  } else {
    console.log('Alternative pattern also not found!');
  }
}
