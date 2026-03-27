const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Replace the exact line
const searchPattern = "lessonsData = {";
const replacement = "Object.assign(lessonsData, {";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully changed lessonsData reassignment to Object.assign');
  
  // Verify
  const check = fs.readFileSync(path, 'utf8');
  const lines = check.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Object.assign(lessonsData, {')) {
      console.log(`Found at line ${i + 1}: ${lines[i]}`);
      break;
    }
  }
} else {
  console.log('Pattern not found!');
}
