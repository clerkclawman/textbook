const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the line with quiz-loader.js and add tony-jay-loader.js after it
const searchPattern = "<script src='quiz-loader.js'></script>";
const replacement = "<script src='quiz-loader.js'></script>\n<script src='tony-jay-loader.js'></script>";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully added tony-jay-loader.js script tag');
} else {
  console.log('Pattern not found!');
}
