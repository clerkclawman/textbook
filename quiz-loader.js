/**
 * Cloze Quiz Loader
 * Loads quiz files organized by date
 * Shows dates in dropdown, then all questions for that date
 */
const QUIZ_MAX_AGE_DAYS = 7;

// Cache for loaded quizzes (keyed by date string 'YYYY-MM-DD')
const quizCache = new Map();

/**
 * Get YYYY-MM-DD format for a date
 */
function formatDateQuiz(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Get display date string (e.g., "March 27, 2026")
 */
function formatDisplayDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/**
 * Load quiz file dynamically
 */
async function loadQuizFile(dateStr) {
    const filename = `quiz-${dateStr}.js`;
    
    if (quizCache.has(dateStr)) {
        return quizCache.get(dateStr);
    }
    
    try {
        const response = await fetch(filename);
        if (!response.ok) return null;
        const javascript = await response.text();
        const quizData = parseJavaScriptQuiz(javascript);
        if (quizData) {
            quizCache.set(dateStr, quizData);
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
 */
function parseJavaScriptQuiz(javascript) {
    try {
        // Remove comments
        let cleanCode = javascript.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
        
        // Extract the array from "var quizYYYYMMDD = [...]"
        const match = cleanCode.match(/var\s+quiz\d+\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
        if (match && match[1]) {
            const arrayString = match[1];
            const extractor = new Function('return ' + arrayString);
            const result = extractor();
            if (Array.isArray(result) && result.length > 0) {
                return result;
            }
        }
        return null;
    } catch (error) {
        console.error('Error parsing quiz JavaScript:', error.message);
        return null;
    }
}

/**
 * Initialize quiz loader
 * Loads all available quiz files and organizes by date
 */
async function initQuizLoader() {
    console.log('=== INITIALIZING QUIZ LOADER ===');
    
    // Wait for lessonsData to be available
    let initRetries = 0;
    const initMaxRetries = 30;
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
    
    for (let i = 0; i <= QUIZ_MAX_AGE_DAYS; i++) {
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

// Auto-initialize when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuizLoader);
} else {
    initQuizLoader();
}
