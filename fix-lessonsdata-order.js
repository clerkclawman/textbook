const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// Find the line with "let lessonsData = {};"
let declarationLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === "let lessonsData = {};") {
    declarationLine = i;
    break;
  }
}

// Find the first loader script line (should be around 1227)
let firstLoaderLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("<script src='adult.js'>")) {
    firstLoaderLine = i;
    break;
  }
}

if (declarationLine !== -1 && firstLoaderLine !== -1 && declarationLine > firstLoaderLine) {
  // Remove the declaration from its current position
  const declaration = lines[declarationLine];
  lines.splice(declarationLine, 1);
  
  // Insert it before the first loader script
  // Adjust index because we removed a line
  const adjustedLoaderLine = firstLoaderLine;
  lines.splice(adjustedLoaderLine, 0, declaration);
  
  const newContent = lines.join('\n');
  fs.writeFileSync(path, newContent, 'utf8');
  console.log(`Moved "let lessonsData = {};" from line ${declarationLine + 1} to line ${adjustedLoaderLine + 1}`);
} else {
  console.log(`Could not move: declarationLine=${declarationLine}, firstLoaderLine=${firstLoaderLine}`);
}
