const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the Object.assign block (inside DOMContentLoaded) and move it to the end
const startMarker = "document.addEventListener('DOMContentLoaded', function() {";
const endMarker = "});\n</script>";

const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  console.log("Could not find DOMContentLoaded start");
  process.exit(1);
}

// Find the end of the block (the closing });</script>)
const endIndex = content.indexOf(endMarker, startIndex);
if (endIndex === -1) {
  console.log("Could not find DOMContentLoaded end");
  process.exit(1);
}

// Extract the Object.assign block (without the wrapper)
const assignBlockStart = content.indexOf("Object.assign(lessonsData,", startIndex);
const assignBlockEnd = content.indexOf("});", assignBlockStart) + 3;
const assignBlock = content.substring(assignBlockStart, assignBlockEnd);

// Remove the entire DOMContentLoaded block
content = content.substring(0, startIndex) + content.substring(endIndex + endMarker.length);

// Find the </body> tag and insert the new block before it
const bodyEndIndex = content.lastIndexOf("</body>");
if (bodyEndIndex === -1) {
  console.log("Could not find </body>");
  process.exit(1);
}

// Insert the new block with window.onload
const newBlock = `
<script>
window.onload = function() {
  ${assignBlock}
};
</script>
`;

content = content.substring(0, bodyEndIndex) + newBlock + content.substring(bodyEndIndex);

fs.writeFileSync(path, content);
console.log("Moved Object.assign to window.onload at the end of the page");
