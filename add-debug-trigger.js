const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the last </body> tag
const bodyIndex = content.lastIndexOf('</body>');
if (bodyIndex === -1) {
  console.log("Could not find </body> tag");
  process.exit(1);
}

// Add debug script before </body>
const debugScript = `
<!-- DEBUG: Check if Tony & Jay and Quiz data are loaded -->
<script>
console.log('=== DEBUG: Checking lessonsData ===');
console.log('lessonsData keys:', Object.keys(lessonsData));
console.log('TonyJayStories loaded:', lessonsData['TonyJayStories'] ? 'YES (' + lessonsData['TonyJayStories'].length + ' stories)' : 'NO');
console.log('ClozeQuiz loaded:', lessonsData['ClozeQuiz'] ? 'YES (' + lessonsData['ClozeQuiz'].length + ' questions)' : 'NO');

// If TonyJayStories is not loaded, try to load it manually
if (!lessonsData['TonyJayStories']) {
  console.warn('DEBUG: TonyJayStories not loaded. Attempting manual load...');
  if (typeof loadTonyJayStoriesFile === 'function') {
    loadTonyJayStoriesFile('stories-tony-jay-2026-03-27.js');
  } else {
    console.error('DEBUG: loadTonyJayStoriesFile function not found!');
  }
}

// If ClozeQuiz is not loaded, try to load it manually
if (!lessonsData['ClozeQuiz']) {
  console.warn('DEBUG: ClozeQuiz not loaded. Attempting manual load...');
  if (typeof loadQuizFile === 'function') {
    loadQuizFile('quiz-2026-03-27.js');
  } else {
    console.error('DEBUG: loadQuizFile function not found!');
  }
}
</script>
`;

content = content.slice(0, bodyIndex) + debugScript + content.slice(bodyIndex);
fs.writeFileSync(path, content);
console.log('Added debug script before </body>');
