const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the line where lessonsData is reassigned and change it to Object.assign
const searchPattern = "lessonsData = {\n 'Bronze': bronzeStories,";
const replacement = "Object.assign(lessonsData, {\n 'Bronze': bronzeStories,";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully changed lessonsData reassignment to Object.assign');
} else {
  console.log('Pattern not found! Trying alternative...');
  // Try alternative pattern
  const altPattern = "lessonsData = {";
  const altReplacement = "Object.assign(lessonsData, {";
  const altNewContent = content.replace(altPattern, altReplacement);
  if (altNewContent !== content) {
    fs.writeFileSync(path, altNewContent, 'utf8');
    console.log('Successfully changed lessonsData reassignment to Object.assign (alternative)');
  } else {
    console.log('Alternative pattern also not found!');
  }
}
