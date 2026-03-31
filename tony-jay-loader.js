/**
 * Tony & Jay Stories Loader
 * Loads today's stories organized by EIKEN level
 * Shows levels in dropdown, then stories for that level
 */

const TONY_JAY_TODAY_ONLY = true; // Show only today's stories
const tonyJayStoriesCache = new Map();

function formatDateTonyJay(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatLevel(level) {
  if (level === 7) return 'Grade 7';
  if (level === 6) return 'Grade 6';
  if (level === 5) return 'Grade 5';
  if (level === 4) return 'Grade 4';
  if (level === 3) return 'Grade 3';
  if (level === 'Pre-2') return 'Pre-2';
  if (level === 'Pre-2Plus' || level === 'Pre2Plus') return 'Pre-2 Plus';
  if (level === 2) return 'Grade 2';
  if (level === 'Pre-1') return 'Pre-1';
  if (level === 1) return 'Grade 1';
  return `Level ${level}`;
}

async function loadTonyJayStoriesFile(dateStr) {
  const filename = `stories-tony-jay-${dateStr}.js`;
  if (tonyJayStoriesCache.has(dateStr)) {
    return tonyJayStoriesCache.get(dateStr);
  }
  try {
    const response = await fetch(filename);
    if (!response.ok) return null;
    const javascript = await response.text();
    const storiesData = parseJavaScriptTonyJay(javascript);
    if (storiesData) {
      tonyJayStoriesCache.set(dateStr, storiesData);
    }
    return storiesData;
  } catch (error) {
    console.error('Tony & Jay Loader: Fetch error:', error.message);
    return null;
  }
}

function parseJavaScriptTonyJay(javascript) {
  try {
    let cleanCode = javascript.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    const match = cleanCode.match(/var\s+storiesTonyJay\d+\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
    if (!match) return null;
    const arrayString = match[1];
    const extractor = new Function('return ' + arrayString);
    const result = extractor();
    if (!Array.isArray(result) || result.length === 0) return null;
    return result;
  } catch (error) {
    console.error('Tony & Jay Loader: Parse error:', error.message);
    return null;
  }
}

async function initTonyJayStoriesLoader() {
  console.log('=== INITIALIZING TONY & JAY STORIES LOADER ===');
  console.log('Document ready state:', document.readyState);
  
  let initRetries = 0;
  const initMaxRetries = 30;
  while (typeof window.lessonsData === 'undefined' && initRetries < initMaxRetries) {
    await new Promise(resolve => setTimeout(resolve, 100));
    initRetries++;
  }
  
  if (typeof window.lessonsData === 'undefined') {
    console.error('Tony & Jay Loader: lessonsData never became available after', initRetries, 'retries');
    return;
  }
  
  console.log('Tony & Jay Loader: lessonsData is available');
  
  // Load ONLY today's stories
  const today = new Date();
  const todayStr = formatDateTonyJay(today);
  const todayStories = await loadTonyJayStoriesFile(todayStr);
  
  if (!todayStories || !Array.isArray(todayStories) || todayStories.length === 0) {
    console.error('Tony & Jay Loader: No stories loaded for today. todayStories:', todayStories);
    return;
  }
  
  console.log('Tony & Jay Loader: Successfully loaded', todayStories.length, 'stories for', todayStr);
  
  console.log(`Tony & Jay Loader: Loaded ${todayStories.length} stories for ${todayStr}`);
  
  // Organize stories by level
  const storiesByLevel = {};
  const levels = [7, 6, 5, 4, 3, 'Pre-2', 'Pre-2Plus', 2, 'Pre-1', 1];
  
  levels.forEach(level => {
    storiesByLevel[level] = todayStories.filter(story => story.level === level);
  });
  
  // Filter out empty levels
  Object.keys(storiesByLevel).forEach(level => {
    if (storiesByLevel[level].length === 0) {
      delete storiesByLevel[level];
    }
  });
  
  // Store in lessonsData as level-keyed object
  window.lessonsData['TonyJayStories'] = storiesByLevel;
  console.log('Tony & Jay Loader: Stories organized by level:', Object.keys(storiesByLevel));
  console.log('Tony & Jay Loader: lessonsData.TonyJayStories =', window.lessonsData['TonyJayStories']);
  
  // Wait for populateStorySelector to be available
  let dropdownRetries = 0;
  const dropdownMaxRetries = 30;
  const checkAndRefresh = () => {
    console.log('Tony & Jay Loader: checkAndRefresh called, dropdownRetries:', dropdownRetries);
    if (typeof window.populateStorySelector === 'function') {
      console.log('Tony & Jay Loader: Calling populateStorySelector for TonyJayStories');
      window.populateStorySelector('TonyJayStories');
      console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories');
    } else {
      console.log('Tony & Jay Loader: populateStorySelector not ready yet');
      dropdownRetries++;
      if (dropdownRetries < dropdownMaxRetries) {
        setTimeout(checkAndRefresh, 100);
      } else {
        console.error('Tony & Jay Loader: populateStorySelector never became available');
      }
    }
  };
  checkAndRefresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTonyJayStoriesLoader);
} else {
  initTonyJayStoriesLoader();
}
