/**
 * Fun Questions Loader
 * Loads current and recent fun questions files based on date
 * Auto-hides questions older than 7 days
 */
const FUN_QUESTIONS_MAX_AGE_DAYS = 7;

// Cache for loaded questions
const funQuestionsCache = new Map();

/**
 * Get YYYY-MM-DD format for a date
 */
function formatDateFunQuestions(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `fun-questions-${year}-${month}-${day}.js`;
}

/**
 * Check if questions are within 7 days (past or future)
 */
function isFunQuestionsFresh(questionsDate) {
  const now = new Date();
  const diffDays = Math.abs(now - questionsDate) / (1000 * 60 * 60 * 24);
  return diffDays <= FUN_QUESTIONS_MAX_AGE_DAYS;
}

/**
 * Load fun questions file dynamically
 */
async function loadFunQuestionsFile(filename) {
  if (funQuestionsCache.has(filename)) {
    return funQuestionsCache.get(filename);
  }
  try {
    const response = await fetch(filename);
    if (!response.ok) return null;
    const javascript = await response.text();
    const questionsData = parseJavaScriptFunQuestions(javascript);
    if (questionsData) {
      funQuestionsCache.set(filename, questionsData);
    }
    return questionsData;
  } catch (error) {
  if (!error.message || !error.message.includes("404")) { console.warn(`Failed to load ${filename}:`, error); }
    return null;
  }
}

/**
 * Parse JavaScript fun questions file to extract data
 * Handles the template literal format:
 * var funQuestionsYYYYMMDD = [
 *   { title: "...", content: `...` }
 * ];
 * Updated to handle multi-line formatting and indentation robustly.
 */
function parseJavaScriptFunQuestions(javascript) {
  try {
    console.log("parseJavaScriptFunQuestions: Received", javascript.length, "chars");
    
    // Match: var funQuestionsYYYYMMDD = [ ... ];
    const arrayMatch = javascript.match(/var\s+funQuestions\d{8}\s*=\s*\[([\s\S]+)\]\s*;/);
    if (!arrayMatch) {
      console.log("parseJavaScriptFunQuestions: No array structure found");
      return null;
    }
    
    const arrayContent = arrayMatch[1];
    console.log("parseJavaScriptFunQuestions: Found array content, length =", arrayContent.length);
    
    // Split by '}, {' to get individual items, then parse each
    // This is more robust than a single complex regex for multi-line content
    const items = arrayContent.split(/}\s*,\s*{/);
    const questionsItems = [];
    
    for (let i = 0; i < items.length; i++) {
      let item = items[i].trim();
      
      // Clean up the first and last items (they might have extra brackets)
      if (i === 0) {
        item = item.replace(/^\s*\{/, '').trim();
      }
      if (i === items.length - 1) {
        item = item.replace(/\}\s*$/, '').trim();
      }
      
      // Extract title: "..."
      const titleMatch = item.match(/title:\s*"([^"]+)"/);
      // Extract content: `...` (using backticks)
      const contentMatch = item.match(/content:\s*`([\s\S]*?)`/);
      
      if (titleMatch && contentMatch) {
        questionsItems.push({
          title: titleMatch[1],
          content: contentMatch[1]
        });
      } else {
        console.warn(`Item ${i} failed to parse:`, item.substring(0, 100));
      }
    }
    
    console.log(`parseJavaScriptFunQuestions: Extracted ${questionsItems.length} questions items`);
    
    if (questionsItems.length === 0) {
      console.log("parseJavaScriptFunQuestions: No items extracted. Check format.");
      return null;
    }
    
    console.log("parseJavaScriptFunQuestions: Success! Returning", questionsItems.length, "items");
    return questionsItems;
  } catch (e) {
    console.warn('Failed to parse fun questions data:', e);
    return null;
  }
}

/**
 * Get all available fun questions within 7 days
 */
async function getRecentFunQuestions() {
  const availableQuestions = [];
  const now = new Date();
  console.log('Checking for recent fun questions files...');
  
  // Check last 7 days
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const filename = formatDateFunQuestions(date);
    const questionsDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const ageDays = (now - questionsDate) / (1000 * 60 * 60 * 24);
    
    console.log(`Checking ${filename} (age: ${ageDays.toFixed(1)}d)`);
    
    if (isFunQuestionsFresh(questionsDate)) {
      const questions = await loadFunQuestionsFile(filename);
      if (questions && questions.length > 0) {
        availableQuestions.push({
          date: questionsDate,
          filename,
          questions
        });
        console.log(`✓ Found ${questions.length} questions in ${filename}`);
      } else {
        console.log(`✗ No valid questions in ${filename}`);
      }
    } else {
      console.log(`✗ ${filename} is older than 7 days`);
    }
  }
  
  // Sort by date (newest first)
  availableQuestions.sort((a, b) => b.date - a.date);
  return availableQuestions;
}

/**
 * Combine multiple days of fun questions into one array
 */
async function getCombinedFunQuestions() {
  const recentQuestions = await getRecentFunQuestions();
  
  if (recentQuestions.length === 0) {
    return [{
      title: "🎉 No Recent Fun Questions",
      content: "Fun Questions are published daily and automatically removed after 7 days. Check back tomorrow!\n\n楽しい質問は毎日更新され、7日後に自動的に削除されます。明日またチェックしてください！"
    }];
  }
  
  // Combine all recent questions
  const combined = [];
  for (const { date, questions } of recentQuestions) {
    const dateHeader = `📅 ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
    combined.push({ title: dateHeader, content: '' });
    combined.push(...questions);
  }
  
  return combined;
}

// Export functions for use by main script
if (typeof window !== 'undefined') {
  window.getCombinedFunQuestions = getCombinedFunQuestions;
  window.getRecentFunQuestions = getRecentFunQuestions;
}

console.log('Fun Questions loader functions exported: getCombinedFunQuestions =', typeof getCombinedFunQuestions);
