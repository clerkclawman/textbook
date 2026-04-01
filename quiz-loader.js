/**
 * Quiz Loader
 * Loads all quiz files and organizes by date
 */

async function initQuizLoader() {
 console.log('=== INITIALIZING QUIZ LOADER ===');

 // Wait for lessonsData to be available
 let initRetries = 0;
 const initMaxRetries = 100; // 10 seconds
 while (typeof window.lessonsData === 'undefined' && initRetries < initMaxRetries) {
   await new Promise(resolve => setTimeout(resolve, 100));
   initRetries++;
 }

 if (typeof window.lessonsData === 'undefined') {
   console.error('Quiz Loader: lessonsData never became available');
   return;
 }

 // Load quizzes for today and past 7 days
 const today = new Date();
 const quizzesByDate = {};

 for (let i = 0; i <= 7; i++) {
   const date = new Date();
   date.setDate(today.getDate() - i);
   const dateStr = formatDateQuiz(date);
   const quizData = await loadQuizFile(dateStr);
   if (quizData && Array.isArray(quizData) && quizData.length > 0) {
     quizzesByDate[dateStr] = quizData;
     console.log(`Quiz Loader: Loaded ${quizData.length} questions for ${dateStr}`);
   }
 }

 if (Object.keys(quizzesByDate).length === 0) {
   console.warn('Quiz Loader: No quiz data loaded');
   return;
 }

 // Store in lessonsData as date-keyed object
 window.lessonsData['ClozeQuiz'] = quizzesByDate;
 console.log('Quiz Loader: Quiz data organized by date:', Object.keys(quizzesByDate));

 // Wait for populateStorySelector to be available
 let dropdownRetries = 0;
 const dropdownMaxRetries = 30;
 const checkAndRefresh = () => {
   if (typeof window.populateStorySelector === 'function') {
     window.populateStorySelector('ClozeQuiz');
     console.log('Quiz Loader: Dropdown refreshed for ClozeQuiz');
   } else {
     dropdownRetries++;
     if (dropdownRetries < dropdownMaxRetries) {
       setTimeout(checkAndRefresh, 100);
     }
   }
 };
 checkAndRefresh();
}

function formatDateQuiz(date) {
 const year = date.getFullYear();
 const month = String(date.getMonth() + 1).padStart(2, '0');
 const day = String(date.getDate()).padStart(2, '0');
 return `${year}-${month}-${day}`;
}

async function loadQuizFile(dateStr) {
 const filename = `quiz-${dateStr}.js`;
 try {
   const response = await fetch(filename);
   if (!response.ok) return null;
   const text = await response.text();
   // Extract array from var quizYYYYMMDD = [ ... ];
   const match = text.match(/var quiz\d+ = (\[.*?\]);/s);
   if (match) {
     return eval(match[1]);
   }
   return null;
 } catch (error) {
   console.error(`Quiz Loader: Failed to load ${filename}`, error);
   return null;
 }
}

// Auto-initialize
if (document.readyState === 'loading') {
 document.addEventListener('DOMContentLoaded', initQuizLoader);
} else {
 initQuizLoader();
}
