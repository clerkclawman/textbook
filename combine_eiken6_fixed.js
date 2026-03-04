#!/usr/bin/env node
const fs = require('fs');

// Read the fixed stories 5-12 file (var fixedStories = [...])
eval(fs.readFileSync('eiken6-stories5-12-fixed.js', 'utf8'));

// Read original eiken6story.js to get stories 1-4 and 13-48
const original = fs.readFileSync('eiken6story.js', 'utf8');
const origMatch = original.match(/var eiken6story = (\[.+\]);/s);
const originalStories = JSON.parse(origMatch[1]);

// Get stories 1-4 (indices 0-3)
const stories1_4 = originalStories.slice(0, 4);

// Get stories 13-48 (indices 12 onwards)
const stories13_48 = originalStories.slice(12);

// Combine: 1-4 (original) + 5-12 (fixed) + 13-48 (original)
const combinedStories = [...stories1_4, ...fixedStories, ...stories13_48];

console.log(`Story 1-4: ${stories1_4.length}`);
console.log(`Story 5-12 (fixed): ${fixedStories.length}`);
console.log(`Story 13-48: ${stories13_48.length}`);
console.log(`Total: ${combinedStories.length}`);

// Write complete fixed file
const outputJS = 'var eiken6story = ' + JSON.stringify(combinedStories, null, 2) + ';';
fs.writeFileSync('eiken6story.js', outputJS, 'utf8');

console.log('✅ Eiken 6 stories fixed and combined!');
console.log('Updated: eiken6story.js');
