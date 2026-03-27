const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the line where option.textContent is set and modify it to include the level
// Look for: option.textContent = story.title;
const searchPattern = "option.textContent = story.title;";
const replacement = "option.textContent = story.level ? `Level ${story.level}: ${story.title}` : story.title;";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully updated dropdown titles to include level');
} else {
  console.log('Pattern not found!');
}
