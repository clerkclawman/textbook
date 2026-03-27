const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Replace the entire forEach block with the corrected version
const oldBlock = `classData.forEach((item, index) => {
      if (cls === 'ClozeQuiz' && item.level && item.sentence) {
        optionText = \`\${item.level}: \${item.sentence}\`;
      } else if (item && item.title) {
        const option = document.createElement("option");
        option.value = optionIndex;
        option.textContent = story.title;
        storySelector.appendChild(option);
        optionIndex++;
      } else {
        console.warn('Invalid item at index', index, ':', item);
      }
    });`;

const newBlock = `classData.forEach((item, index) => {
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
      
      // Create option for both ClozeQuiz and standard stories
      const option = document.createElement("option");
      option.value = optionIndex;
      option.textContent = optionText;
      storySelector.appendChild(option);
      optionIndex++;
    });`;

const newContent = content.replace(oldBlock, newBlock);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully fixed the option creation logic for ClozeQuiz');
} else {
  console.log('Pattern not found! Trying alternative...');
  // Try a more flexible approach by just fixing the logic
  const altPattern = "optionText = `${item.level}: ${item.sentence}`;\n      } else if (item && item.title) {\n        const option = document.createElement(\"option\");\n        option.value = optionIndex;\n        option.textContent = story.title;\n        storySelector.appendChild(option);\n        optionIndex++;";
  const altReplacement = "optionText = `${item.level}: ${item.sentence}`;\n      } else if (item && item.title) {\n        optionText = item.title;\n      } else {\n        console.warn('Invalid item at index', index, ':', item);\n        return;\n      }\n      \n      // Create option for both ClozeQuiz and standard stories\n      const option = document.createElement(\"option\");\n      option.value = optionIndex;\n      option.textContent = optionText;\n      storySelector.appendChild(option);\n      optionIndex++;";
  const altNewContent = content.replace(altPattern, altReplacement);
  if (altNewContent !== content) {
    fs.writeFileSync(path, altNewContent, 'utf8');
    console.log('Successfully fixed with alternative pattern');
  } else {
    console.log('Alternative also failed! Manual fix required.');
  }
}
