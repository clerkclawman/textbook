const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find the exact line with the Array.isArray check
const lines = html.split('\n');
let foundLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("if (!Array.isArray(classData)) {")) {
    foundLine = i;
    break;
  }
}

if (foundLine === -1) {
  console.error('Could not find the line to replace');
  process.exit(1);
}

console.log('Found at line:', foundLine + 1);

// Replace the block
const newCode = `    // Handle object-based data (e.g., TonyJayStories by level, ClozeQuiz by date)
    let flatStories = [];
    if (Array.isArray(classData)) {
      flatStories = classData;
    } else if (typeof classData === 'object' && classData !== null) {
      Object.entries(classData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(story => {
            if (story && story.title) {
              story._groupKey = key;
              story._groupType = cls === 'TonyJayStories' ? 'level' : (cls === 'ClozeQuiz' ? 'date' : 'group');
              flatStories.push(story);
            }
          });
        }
      });
      console.log('Converted object data to flat array with', flatStories.length, 'items');
    } else {
      console.error('lessonsData[' + cls + '] has unexpected type:', typeof classData);
      storySelector.innerHTML = '<option value="">Error: invalid data format</option>';
      return;
    }
    const classData = flatStories; // Reassign for backward compatibility`;

// Replace the old block (lines 1469-1473)
lines.splice(foundLine, 5, newCode);

fs.writeFileSync('index.html', lines.join('\n'));
console.log('Fixed!');
