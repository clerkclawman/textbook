const fs = require('fs');
const path = '/home/tony/textbook/tony-jay-loader.js';

let content = fs.readFileSync(path, 'utf8');

// Find the line that says "if (typeof populateStorySelector === 'function')"
// and replace it with a retry logic
const oldCode = `if (typeof populateStorySelector === 'function') {
    populateStorySelector('TonyJayStories');
    console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories');
  } else {
    console.warn('Tony & Jay Loader: populateStorySelector function not found yet');
  }`;

const newCode = `// Retry logic to wait for populateStorySelector function
  let retries = 0;
  const maxRetries = 20; // Try for up to 2 seconds
  const checkFunction = () => {
    if (typeof populateStorySelector === 'function') {
      populateStorySelector('TonyJayStories');
      console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories (after ' + retries + ' retries)');
    } else {
      retries++;
      if (retries < maxRetries) {
        console.log('Tony & Jay Loader: Waiting for populateStorySelector (retry ' + retries + '/' + maxRetries + ')');
        setTimeout(checkFunction, 100);
      } else {
        console.error('Tony & Jay Loader: populateStorySelector function still not found after ' + maxRetries + ' retries!');
      }
    }
  };
  checkFunction();`;

content = content.replace(oldCode, newCode);

fs.writeFileSync(path, content);
console.log('Updated tony-jay-loader.js with retry logic');
