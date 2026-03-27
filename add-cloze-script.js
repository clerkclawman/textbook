const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the line with "tony-jay-loader.js" and add the Cloze Quiz script tag after it
const searchPattern = "<script src='tony-jay-loader.js'></script>";
const replacement = "<script src='tony-jay-loader.js'></script>\n<script src='quiz-loader.js'></script>";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Added Cloze Quiz script tag after tony-jay-loader.js');
} else {
  console.log('Pattern not found!');
}
