/**
 * Cloze Quiz Loader
 * Loads current and recent quiz files based on date
 * Auto-hides quizzes older than 7 days
 */
const QUIZ_MAX_AGE_DAYS = 7; // Cache for loaded quizzes
const quizCache = new Map();

/**
 * Get YYYY-MM-DD format for a date
 */
function formatDateQuiz(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `quiz-${year}-${month}-${day}.js`;
}

/**
 * Check if quiz is within 7 days (past or future)
 */
function isQuizFresh(quizDate) {
  const now = new Date();
  const diffDays = Math.abs(now - quizDate) / (1000 * 60 * 60 * 24);
  return diffDays <= QUIZ_MAX_AGE_DAYS;
}

/**
 * Load quiz file dynamically
 */
async function loadQuizFile(filename) {
  if (quizCache.has(filename)) {
    return quizCache.get(filename);
  }
  try {
    const response = await fetch(filename);
    if (!response.ok) return null;
    const javascript = await response.text();
    const quizData = parseJavaScriptQuiz(javascript);
    if (quizData) {
      quizCache.set(filename, quizData);
    }
    return quizData;
  } catch (error) {
    if (!error.message || !error.message.includes("404")) {
      console.warn(`Failed to load ${filename}:`, error);
    }
    return null;
  }
}

/**
 * Parse JavaScript content from quiz file
 * Note: The file uses JS object syntax (unquoted keys), so we cannot use JSON.parse.
 * We use a safe Function constructor to evaluate the array literal.
 */
function parseJavaScriptQuiz(javascript) {
  try {
    // Remove single-line comments (// ...) and multi-line comments (/* ... */)
    let cleanCode = javascript.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Extract the array from "var quizYYYYMMDD = [...]"
    // Use a more flexible regex that allows whitespace and newlines
    const match = cleanCode.match(/var\s+quiz\d+\s*=\s*(\[[\s\S]*?\])\s*;?\s*$/);
    
    if (match && match[1]) {
      const arrayString = match[1];
      // Safely evaluate the array literal using a Function constructor
      // This avoids executing arbitrary code while allowing JS object syntax
      try {
        const extractor = new Function('return ' + arrayString);
        const result = extractor();
        if (Array.isArray(result)) {
          return result;
        } else {
          console.error('Evaluated result is not an array:', result);
          return null;
        }
      } catch (evalError) {
        console.error('Evaluation error for quiz data:', evalError);
        console.log('Extracted array string (first 200 chars):', arrayString.substring(0, 200));
        return null;
      }
    }
    console.error('Could not match quiz array pattern in:', cleanCode.substring(0, 100));
    return null;
  } catch (error) {
    console.error('Error parsing quiz JavaScript:', error);
    return null;
  }
}

/**
 * Initialize quiz loader - load today's quiz
 */
async function initQuizLoader() {
  console.log('=== INITIALIZING QUIZ LOADER ===');
  const today = new Date();
  const filename = formatDateQuiz(today);
  console.log('Loading quiz file:', filename);
  
  const quizData = await loadQuizFile(filename);
  if (quizData && Array.isArray(quizData)) {
    console.log('Loaded', quizData.length, 'quiz questions');
    // Add to lessonsData if it exists
    if (typeof lessonsData !== 'undefined') {
      lessonsData['ClozeQuiz'] = quizData;
      console.log('Quiz data added to lessonsData[\'ClozeQuiz\']');
    } else {
      console.error('lessonsData is not defined yet!');
    }
  } else {
    console.warn('No quiz data loaded for today');
  }
  
  // Also load recent quizzes (past 7 days)
  for (let i = 1; i <= QUIZ_MAX_AGE_DAYS; i++) {
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - i);
    const pastFilename = formatDateQuiz(pastDate);
    const pastData = await loadQuizFile(pastFilename);
    if (pastData && Array.isArray(pastData)) {
      console.log('Loaded', pastData.length, 'quiz questions from', pastDate.toDateString());
    }
  }
}

// Auto-initialize when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuizLoader);
} else {
  initQuizLoader();
}
