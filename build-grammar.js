// Build grammar-site.js with emoji clozes for all levels
const fs = require('fs');

const levels = {
  'Eiken7': {
    header: ['BE Verb (am/is/are)', 'BE動詞'],
    paradigms: [
      // BE Verb affirmative
      { en: 'I am a 👦/👧/🎓.', jp: '私は です 👦/👧/🎓。' },
      { en: 'You are 😊/😄/🤗.', jp: 'あなた です 😊/😄/🤗。' },
      { en: 'He is 👨/🏃/🧑‍⚕️.', jp: '彼 です 👨/🏃/🧑‍⚕️。' },
      { en: 'She is 👩/🏃/👩‍🏫.', jp: '彼女 です 👩/🏃/👩‍🏫。' },
      { en: 'We are 👦s/👧s/🎓s.', jp: '私たちは です 👦s/👧s/🎓s。' },
      { en: 'They are 🐱s/🐶s/🐦s.', jp: '彼ら です 🐱s/🐶s/🐦s。' },
    ]
  }
};

// For now, let me just test with Eiken 7
// Then expand to all levels

console.log('Test build complete');
