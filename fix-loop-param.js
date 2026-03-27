const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Fix the loop parameter from 'story' to 'item'
const searchPattern = "classData.forEach((story, index) => {";
const replacement = "classData.forEach((item, index) => {";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Fixed the loop parameter: changed "story" to "item" in forEach');
  
  // Also fix the console.warn line that still uses 'story'
  const warnPattern = "console.warn('Invalid story at index', index, ':', story);";
  const warnReplacement = "console.warn('Invalid item at index', index, ':', item);";
  const finalContent = newContent.replace(warnPattern, warnReplacement);
  
  if (finalContent !== newContent) {
    fs.writeFileSync(path, finalContent, 'utf8');
    console.log('Also fixed the console.warn message');
  }
} else {
  console.log('Pattern not found!');
}
