const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the Object.assign block and wrap it in a proper DOMContentLoaded event
// First, find the start of the Object.assign block
const assignStart = content.indexOf("Object.assign(lessonsData, {");
if (assignStart === -1) {
  console.log("Could not find Object.assign");
  process.exit(1);
}

// Find the end of the Object.assign block (the closing });)
let braceCount = 0;
let assignEnd = -1;
for (let i = assignStart; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  else if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0 && content.substring(i, i+3) === '});') {
      assignEnd = i + 3;
      break;
    }
  }
}

if (assignEnd === -1) {
  console.log("Could not find end of Object.assign");
  process.exit(1);
}

// Extract the Object.assign block
const assignBlock = content.substring(assignStart, assignEnd);

// Remove the Object.assign block from its current location
content = content.substring(0, assignStart) + content.substring(assignEnd);

// Find the location of the last </script> tag before the Object.assign was
// We'll insert the DOMContentLoaded event after the last script tag
const lastScriptIndex = content.lastIndexOf("</script>");
if (lastScriptIndex === -1) {
  console.log("Could not find last </script>");
  process.exit(1);
}

// Insert the DOMContentLoaded event after the last </script>
const insertPoint = lastScriptIndex + "</script>".length;
const newBlock = `
<script>
document.addEventListener('DOMContentLoaded', function() {
${assignBlock}
});
</script>
`;

content = content.substring(0, insertPoint) + newBlock + content.substring(insertPoint);

fs.writeFileSync(path, content);
console.log("Wrapped Object.assign in DOMContentLoaded event after last script tag");
