const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Replace "lessonsData = {" with "Object.assign(lessonsData, {" but only if it's NOT the first "let lessonsData = {}"
// We can do this by replacing the second occurrence specifically
const pattern = /lessonsData = \{/g;
const matches = [...content.matchAll(pattern)];
console.log(`Found ${matches.length} occurrences`);

if (matches.length >= 2) {
  // Get the index of the second match
  const secondMatch = matches[1];
  const index = secondMatch.index;
  
  // Replace only the second occurrence
  const before = content.substring(0, index);
  const after = content.substring(index + "lessonsData = {".length);
  const newContent = before + "Object.assign(lessonsData, {" + after;
  
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully changed the second occurrence to Object.assign');
} else {
  console.log('Could not find second occurrence. Found:', matches.length);
}
