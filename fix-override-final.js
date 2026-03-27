const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Pattern to match each initOverride function with the retry logic
// This captures the entire function block
const pattern = /(function initOverride\(\) \{\s+if \(!window\.lessonsData \|\| !window\.lessonsData\['TonyJayStories'\]\) \{\s+console\.warn\('TonyJayStories data not found\. Retrying in 500ms\.\.\.'\);\s+setTimeout\(initOverride, 500\);\s+return;\s+\})/g;

// Replacement with guard flag at start and initialization flag after data check
const replacement = `function initOverride() {
      if (window.tonyJayOverrideInitialized) return; // Guard: prevent re-initialization
      if (!window.lessonsData || !window.lessonsData['TonyJayStories']) {
        console.warn('TonyJayStories data not found. Retrying in 500ms...');
        setTimeout(initOverride, 500);
        return;
      }
      window.tonyJayOverrideInitialized = true; // Mark as initialized`;

let match;
let count = 0;
while ((match = pattern.exec(content)) !== null) {
  count++;
  console.log(`Found match ${count} at index ${match.index}`);
}

console.log(`Total matches found: ${count}`);

// Replace all occurrences
const newContent = content.replace(pattern, replacement);

if (count > 0) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log(`Successfully patched ${count} initOverride functions`);
  
  // Verify the changes
  const checkContent = fs.readFileSync(path, 'utf8');
  const initializedCount = (checkContent.match(/window\.tonyJayOverrideInitialized = true/g) || []).length;
  const guardCount = (checkContent.match(/if \(window\.tonyJayOverrideInitialized\) return/g) || []).length;
  console.log(`Verification: ${guardCount} guard checks, ${initializedCount} initialization assignments`);
} else {
  console.log('No matches found!');
}
