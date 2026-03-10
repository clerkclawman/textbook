// Identify Pre-2 stories that need narrative fixes
const p2 = require('./eikenpre2.js');

console.log('Checking which Pre-2 stories need narrative fixes:\n');

const needsFix = [];

p2.forEach((story, idx) => {
  const lines = story.content.split('\n').filter(l => l.trim() && !l.includes('日本語'));
  const narrative = lines.slice(0, 10);
  
  // Check for narrative elements
  const text = narrative.join(' ').toLowerCase();
  const hasCharacter = narrative.some(l => l.match(/(Ken|Emma|Yuki|Tom|Hana|Aiko|Ryo|Taku|Haruka|Takumi|Kenji|Satoshi|Yui|Daiki|Haru)/i));
  const hasConflict = text.match(/(but|however|problem|difficult|want|need|try|decide)/i);
  const hasAction = text.match(/(go|come|make|do|take|give|find|see|meet)/i);
  
  // Simple stories without clear narrative arc
  const isDescriptive = !hasCharacter || !hasConflict;
  
  if (isDescriptive) {
    needsFix.push(idx + 1);
    console.log(`Story ${idx + 1}: ${story.title}`);
    console.log(`  Issue: ${!hasCharacter ? 'No clear character' : 'Has character'} | ${!hasConflict ? 'No clear conflict/goal' : 'Has conflict'}`);
    console.log('');
  }
});

console.log(`\nTotal stories needing narrative fix: ${needsFix.length} of ${p2.length}`);
console.log('Stories to fix:', needsFix.join(', '));
