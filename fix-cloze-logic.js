const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Find the forEach block and replace it with the correct Cloze Quiz logic
const oldBlock = `classData.forEach((item, index) => {
      let optionText = '';
      // Handle ClozeQuiz items (have 'level' and 'sentence' but no 'title')
      if (cls === 'ClozeQuiz' && item.level && item.sentence) {
        optionText = \`\${item.level}: \${item.sentence}\`;
      } else if (item && item.title) {
        // Standard story items
        optionText = item.title;
      } else {
        console.warn('Invalid item at index', index, ':', item);
        return; // Skip invalid items
      }
      
      // Create option for both ClozeQuiz and standard stories
      const option = document.createElement("option");
      option.value = optionIndex;
      option.textContent = optionText;
      storySelector.appendChild(option);
      optionIndex++;
    });`;

const newBlock = `if (cls === 'ClozeQuiz') {
        // For Cloze Quiz, we need to show DATES, not individual questions
        // The classData should be an array of dates or we need to derive dates from the questions
        // Assuming classData is the array of questions for the CURRENT day (today)
        // We will show "Today's Quiz" or the date
        const today = new Date();
        const dateStr = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        
        const option = document.createElement("option");
        option.value = 'today'; // Value represents the date
        option.textContent = dateStr;
        storySelector.appendChild(option);
        optionIndex++;
        
        // Store the questions globally for display when selected
        window.currentQuizQuestions = classData;
      } else {
        // Standard story logic for other classes
        classData.forEach((item, index) => {
          let optionText = '';
          if (item && item.title) {
            optionText = item.title;
          } else {
            console.warn('Invalid item at index', index, ':', item);
            return;
          }
          
          const option = document.createElement("option");
          option.value = optionIndex;
          option.textContent = optionText;
          storySelector.appendChild(option);
          optionIndex++;
        });
      }`;

const newContent = content.replace(oldBlock, newBlock);

if (newContent !== content) {
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('Fixed Cloze Quiz dropdown to show dates instead of questions');
} else {
  console.log('Pattern not found! Manual fix required.');
}
