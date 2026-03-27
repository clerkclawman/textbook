const fs = require('fs');
const path = '/home/tony/textbook/tony-jay-loader.js';

let content = fs.readFileSync(path, 'utf8');

// Find the line where lessonsData['TonyJayStories'] is set and add the populateStorySelector call after it
const searchPattern = "lessonsData['TonyJayStories'] = storiesData;\n        console.log('Tony & Jay Loader: Stories data added to lessonsData[' + \"'\" + 'TonyJayStories' + \"'\" + ']');";
const replacement = "lessonsData['TonyJayStories'] = storiesData;\n        console.log('Tony & Jay Loader: Stories data added to lessonsData[' + \"'\" + 'TonyJayStories' + \"'\" + ']');\n        // Refresh the dropdown to include Tony & Jay stories\n        if (typeof populateStorySelector === 'function') {\n          populateStorySelector('TonyJayStories');\n          console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories');\n        } else {\n          console.warn('Tony & Jay Loader: populateStorySelector function not found yet');\n        }";

// Use a simpler approach: find the exact line and insert after it
const lines = content.split('\n');
let found = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("lessonsData['TonyJayStories'] = storiesData;") && 
      lines[i+1] && lines[i+1].includes("console.log('Tony & Jay Loader: Stories data added")) {
    // Insert the new lines after the console.log
    const insertLines = [
      "        // Refresh the dropdown to include Tony & Jay stories",
      "        if (typeof populateStorySelector === 'function') {",
      "          populateStorySelector('TonyJayStories');",
      "          console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories');",
      "        } else {",
      "          console.warn('Tony & Jay Loader: populateStorySelector function not found yet');",
      "        }"
    ];
    lines.splice(i + 2, 0, ...insertLines);
    found = true;
    console.log(`Inserted populateStorySelector call after line ${i + 2}`);
    break;
  }
}

if (found) {
  fs.writeFileSync(path, lines.join('\n'), 'utf8');
  console.log('Successfully updated tony-jay-loader.js');
} else {
  console.log('Pattern not found!');
}
