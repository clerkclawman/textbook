const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Fix the missing closing parenthesis for Object.assign
// Find the pattern: ... 'Sentences': [].concat(...) };
// Replace with: ... 'Sentences': [].concat(...) });
const searchPattern = "'Sentences': [].concat(eiken7sentences, eiken6sentences, eiken5sentences, eiken4sentences, eiken3sentences, eikenpre2sentences, eikenpre2plussentences, eiken2sentences, eikenpre1sentences, eiken1sentences) };";
const replacement = "'Sentences': [].concat(eiken7sentences, eiken6sentences, eiken5sentences, eiken4sentences, eiken3sentences, eikenpre2sentences, eikenpre2plussentences, eiken2sentences, eikenpre1sentences, eiken1sentences) });";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully fixed Object.assign closing parenthesis');
} else {
  console.log('Pattern not found! Trying alternative...');
  // Try a more flexible pattern
  const altPattern = "eiken1sentences) };";
  const altReplacement = "eiken1sentences) });";
  const altNewContent = content.replace(altPattern, altReplacement);
  if (altNewContent !== content) {
    fs.writeFileSync(path, altNewContent, 'utf8');
    console.log('Successfully fixed Object.assign closing parenthesis (alternative)');
  } else {
    console.log('Alternative pattern also not found!');
  }
}
