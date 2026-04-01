#!/usr/bin/env node
/**
 * Generate Daily Cloze Quiz for today.
 * Creates quiz-YYYY-MM-DD.js with 10 quiz questions.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get today's date
const today = new Date();
const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
const dateVar = dateStr.replace(/-/g, ''); // YYYYMMDD

// Sample quiz questions (replace with AI-generated content in production)
const questions = [
  {
    question: "The cat ___ on the mat.",
    options: ["sit", "sits", "sitting", "sat"],
    answer: "sits",
    hint: "Present simple, third person singular"
  },
  {
    question: "Yesterday, I ___ to the store.",
    options: ["go", "went", "gone", "going"],
    answer: "went",
    hint: "Past simple of 'go'"
  },
  {
    question: "She ___ reading a book right now.",
    options: ["is", "are", "am", "be"],
    answer: "is",
    hint: "Present continuous, third person singular"
  },
  {
    question: "They ___ football every Sunday.",
    options: ["play", "plays", "playing", "played"],
    answer: "play",
    hint: "Present simple, plural subject"
  },
  {
    question: "___ you like pizza?",
    options: ["Do", "Does", "Is", "Are"],
    answer: "Do",
    hint: "Question form with 'you'"
  },
  {
    question: "He ___ not know the answer.",
    options: ["do", "does", "is", "are"],
    answer: "does",
    hint: "Negative present simple, third person singular"
  },
  {
    question: "We ___ watching TV when you called.",
    options: ["was", "were", "are", "is"],
    answer: "were",
    hint: "Past continuous, plural subject"
  },
  {
    question: "I ___ my homework already.",
    options: ["finish", "finished", "have finished", "finishing"],
    answer: "have finished",
    hint: "Present perfect"
  },
  {
    question: "If it rains, we ___ at home.",
    options: ["stay", "stayed", "will stay", "staying"],
    answer: "will stay",
    hint: "First conditional"
  },
  {
    question: "She is the ___ student in the class.",
    options: ["smart", "smarter", "smartest", "most smart"],
    answer: "smartest",
    hint: "Superlative adjective"
  }
];

// Convert to JSON string with proper formatting
const questionsJson = JSON.stringify(questions, null, 2);

// Build the JavaScript file content
const jsContent = `var quiz${dateVar} = [
  {
    title: "Cloze Quiz - ${dateStr}",
    questions: ${questionsJson}
  }
];
`;

// Write the file
const filePath = path.join(__dirname, `quiz-${dateStr}.js`);
fs.writeFileSync(filePath, jsContent, 'utf8');

console.log(`✅ Created ${filePath} with ${questions.length} questions`);

// Validate syntax
try {
  execSync(`node -c ${filePath}`, { stdio: 'inherit' });
  console.log('✅ Syntax validation passed');
} catch (error) {
  console.error('❌ Syntax validation failed:', error);
  process.exit(1);
}