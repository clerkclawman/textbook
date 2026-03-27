const fs = require('fs');
const path = '/home/tony/textbook/quiz-loader.js';

let content = fs.readFileSync(path, 'utf8');

// Find the line where lessonsData['ClozeQuiz'] is set and add a retry if lessonsData is not defined
const searchPattern = "} else {\n        console.error('lessonsData is not defined yet!');\n      }";
const replacement = "} else {\n        console.error('lessonsData is not defined yet! Retrying in 500ms...');\n        setTimeout(() => {\n          if (typeof lessonsData !== 'undefined') {\n            lessonsData['ClozeQuiz'] = quizData;\n            console.log('Quiz data added to lessonsData[\\'ClozeQuiz\\'] (retry)');\n          } else {\n            console.error('lessonsData still not defined after retry!');\n          }\n        }, 500);\n      }";

const newContent = content.replace(searchPattern, replacement);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Successfully added retry logic to quiz-loader.js');
} else {
  console.log('Pattern not found! Trying alternative...');
  // Try alternative pattern with different whitespace
  const altPattern = "console.error('lessonsData is not defined yet!');";
  const altReplacement = "console.error('lessonsData is not defined yet! Retrying in 500ms...');\n        setTimeout(() => {\n          if (typeof lessonsData !== 'undefined') {\n            lessonsData['ClozeQuiz'] = quizData;\n            console.log('Quiz data added to lessonsData[\\'ClozeQuiz\\'] (retry)');\n          } else {\n            console.error('lessonsData still not defined after retry!');\n          }\n        }, 500);";
  const altNewContent = content.replace(altPattern, altReplacement);
  if (altNewContent !== content) {
    fs.writeFileSync(path, altNewContent, 'utf8');
    console.log('Successfully added retry logic to quiz-loader.js (alternative pattern)');
  } else {
    console.log('Alternative pattern also not found!');
  }
}
