const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Fix the bug: change "story && story.title" to "item && item.title"
const searchPattern = "} else if (story && story.title) {";
const replacement = "} else if (item && item.title) {";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Fixed the ReferenceError: changed "story" to "item" in the else-if condition');
} else {
  console.log('Pattern not found!');
}
