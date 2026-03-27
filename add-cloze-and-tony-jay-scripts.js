const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the last </script> tag before the closing </body>
// and add the new script tags after it
const lines = content.split('\n');
let insertIndex = -1;

// Find the line with "</body>"
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].trim() === '</body>') {
    insertIndex = i;
    break;
  }
}

if (insertIndex === -1) {
  console.log("Could not find </body> tag");
  process.exit(1);
}

// Insert the script tags before </body>
const newScripts = [
  "<!-- Cloze Quiz and Tony & Jay Stories (Daily) -->",
  "<script src='quiz-loader.js'></script>",
  "<script src='tony-jay-loader.js'></script>",
  ""
];

lines.splice(insertIndex, 0, ...newScripts);

const newContent = lines.join('\n');
fs.writeFileSync(path, newContent);
console.log("Added Cloze Quiz and Tony & Jay script tags before </body>");
