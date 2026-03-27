const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the line "<!-- Load external scripts -->" and add a script tag before it
const searchPattern = "<!-- Load external scripts -->";
const replacement = "<!-- Load external scripts -->\n<script>\n  // Initialize lessonsData BEFORE any loaders run\n  window.lessonsData = {};\n</script>";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully added lessonsData initialization before loaders');
} else {
  console.log('Pattern not found!');
}
