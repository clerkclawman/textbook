/**
 * Tony & Jay Stories Loader
 * Loads today's Tony & Jay stories file
 */
const TONY_JAY_MAX_AGE_DAYS = 1; // Only show today's story

// Cache for loaded stories
const tonyJayStoriesCache = new Map();

/**
 * Get YYYY-MM-DD format for a date
 */
function formatDateTonyJay(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `stories-tony-jay-${year}-${month}-${day}.js`;
}

/**
 * Check if story is from today
 */
function isTonyJayFresh(storyDate) {
  const now = new Date();
  const diffDays = Math.abs(now - storyDate) / (1000 * 60 * 60 * 24);
  return diffDays <= TONY_JAY_MAX_AGE_DAYS;
}

/**
 * Load Tony & Jay stories file dynamically
 */
async function loadTonyJayStoriesFile(filename) {
  if (tonyJayStoriesCache.has(filename)) {
    return tonyJayStoriesCache.get(filename);
  }
  try {
    const response = await fetch(filename);
    if (!response.ok) return null;
    const javascript = await response.text();
    const storiesData = parseJavaScriptTonyJay(javascript);
    if (storiesData) {
      tonyJayStoriesCache.set(filename, storiesData);
    }
    return storiesData;
  } catch (error) {
    if (!error.message || !error.message.includes("404")) {
      console.warn(`Failed to load ${filename}:`, error);
    }
    return null;
  }
}

/**
 * Parse JavaScript content from Tony & Jay stories file
 */
function parseJavaScriptTonyJay(javascript) {
  try {
    // Remove single-line comments (// ...) and multi-line comments (/* ... */)
    let cleanCode = javascript.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Extract the array from "var storiesTonyJayYYYYMMDD = [...]"
    const match = cleanCode.match(/var\s+storiesTonyJay\d+\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
    
    if (match && match[1]) {
      const arrayString = match[1];
      // Safely evaluate the array literal using a Function constructor
      const extractor = new Function('return ' + arrayString);
      const result = extractor();
      if (Array.isArray(result) && result.length > 0) {
        console.log('SUCCESS: Parsed', result.length, 'Tony & Jay stories');
        return result;
      } else {
        console.error('Evaluated result is not a non-empty array:', result);
        return null;
      }
    }
    console.error('Could not match Tony & Jay stories array pattern in:', cleanCode.substring(0, 100));
    return null;
  } catch (error) {
    console.error('Error parsing Tony & Jay stories JavaScript:', error.message);
    return null;
  }
}

/**
 * Initialize Tony & Jay stories loader - load today's stories
 */
async function initTonyJayStoriesLoader() {
  console.log('=== INITIALIZING TONY & JAY STORIES LOADER ===');
  const today = new Date();
  const filename = formatDateTonyJay(today);
  console.log('Loading stories file:', filename);
  
  const storiesData = await loadTonyJayStoriesFile(filename);
  if (storiesData && Array.isArray(storiesData)) {
    console.log('Loaded', storiesData.length, 'Tony & Jay stories');
    // Add to lessonsData if it exists
    if (typeof lessonsData !== 'undefined') {
      lessonsData['TonyJayStories'] = storiesData;
      console.log('Stories data added to lessonsData[\'TonyJayStories\']');
    } else {
      console.error('lessonsData is not defined yet!');
    }
  } else {
    console.warn('No Tony & Jay stories loaded for today');
  }
}

// Auto-initialize when script loads
console.log('Tony & Jay Loader: Script loaded');
if (document.readyState === 'loading') {
  console.log('Tony & Jay Loader: Waiting for DOMContentLoaded');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Tony & Jay Loader: DOMContentLoaded fired, calling init');
    initTonyJayStoriesLoader();
  });
} else {
  console.log('Tony & Jay Loader: DOM already loaded, calling init immediately');
  initTonyJayStoriesLoader();
}

// Fallback: Try again after 1 second if lessonsData is not ready
setTimeout(() => {
  if (typeof lessonsData !== 'undefined' && !lessonsData['TonyJayStories']) {
    console.log('Tony & Jay Loader: Fallback trigger, calling init again');
    initTonyJayStoriesLoader();
  }
}, 1000);
