const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Pattern to match the return statement after checking for missing data
const pattern = /(function initOverride\(\) \{\s+if \(window\.tonyJayOverrideInitialized\) return; \/\/ Guard: prevent re-initialization\s+if \(!window\.lessonsData \|\| !window\.lessonsData\['TonyJayStories'\]\) \{\s+console\.warn\('TonyJayStories data not found\. Retrying in 500ms\.\.\.'\);\s+setTimeout\(initOverride, 500\);\s+return;\s+\})/g;

// Replacement with guard flag AND the line to set the flag when data is found
const replacement = `function initOverride() {
      if (window.tonyJayOverrideInitialized) return; // Guard: prevent re-initialization
      if (!window.lessonsData || !window.lessonsData['TonyJayStories']) {
        console.warn('TonyJayStories data not found. Retrying in 500ms...');
        setTimeout(initOverride, 500);
        return;
      }
      window.tonyJayOverrideInitialized = true; // Mark as initialized`;

const newContent = content.replace(pattern, replacement);

fs.writeFileSync(path, newContent, 'utf8');
console.log('Successfully added initialization flag assignment');
