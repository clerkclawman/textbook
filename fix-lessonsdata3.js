const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// Find the second occurrence of "lessonsData = {" (should be around line 2919)
let count = 0;
let targetLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === "lessonsData = {") {
    count++;
    if (count === 2) {
      targetLine = i;
      break;
    }
  }
}

if (targetLine !== -1) {
  lines[targetLine] = lines[targetLine].replace("lessonsData = {", "Object.assign(lessonsData, {");
  const newContent = lines.join('\n');
  fs.writeFileSync(path, newContent, 'utf8');
  console.log(`Successfully changed lessonsData reassignment at line ${targetLine + 1}`);
  
  // Verify
  console.log(`New line: ${lines[targetLine]}`);
} else {
  console.log('Second occurrence not found!');
  console.log(`Found ${count} occurrences total.`);
}
