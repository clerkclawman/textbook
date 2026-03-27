const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the line with "Fun Questions (Daily)" and add Tony & Jay after it
const searchPattern = "<option value='FunQuestions'>Fun Questions (Daily)</option>";
const replacement = "<option value='FunQuestions'>Fun Questions (Daily)</option>\n <option value='TonyJayStories'>Tony & Jay Stories (Daily)</option>";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully added Tony & Jay Stories option to classSelector');
} else {
  console.log('Pattern not found!');
}
