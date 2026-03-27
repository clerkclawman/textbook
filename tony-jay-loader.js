/**
 * Tony & Jay Stories Loader
 * Loads today's Tony & Jay stories file
 */
const TONY_JAY_MAX_AGE_DAYS = 1;

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
 * Load Tony & Jay stories file dynamically
 */
async function loadTonyJayStoriesFile(filename) {
    console.log('Tony & Jay Loader: Attempting to fetch', filename);
    if (tonyJayStoriesCache.has(filename)) {
        console.log('Tony & Jay Loader: Cache hit');
        return tonyJayStoriesCache.get(filename);
    }
    try {
        const response = await fetch(filename);
        console.log('Tony & Jay Loader: Fetch response status', response.status);
        if (!response.ok) {
            console.error('Tony & Jay Loader: Fetch failed with status', response.status);
            return null;
        }
        const javascript = await response.text();
        console.log('Tony & Jay Loader: Fetched', javascript.length, 'characters');
        const storiesData = parseJavaScriptTonyJay(javascript);
        if (storiesData) {
            tonyJayStoriesCache.set(filename, storiesData);
            console.log('Tony & Jay Loader: Parsed', storiesData.length, 'stories');
        } else {
            console.error('Tony & Jay Loader: Parsing returned null');
        }
        return storiesData;
    } catch (error) {
        console.error('Tony & Jay Loader: Fetch error:', error.message);
        return null;
    }
}

/**
 * Parse JavaScript content from Tony & Jay stories file
 */
function parseJavaScriptTonyJay(javascript) {
    try {
        console.log('Tony & Jay Loader: Starting parse');
        // Remove single-line comments (// ...) and multi-line comments (/* ... */)
        let cleanCode = javascript.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

        // Extract the array from "var storiesTonyJayYYYYMMDD = [...]"
        const match = cleanCode.match(/var\s+storiesTonyJay\d+\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
        if (!match) {
            console.error('Tony & Jay Loader: Regex did not match. First 200 chars:', cleanCode.substring(0, 200));
            return null;
        }
        const arrayString = match[1];
        console.log('Tony & Jay Loader: Extracted array string, length:', arrayString.length);

        // Safely evaluate the array literal using a Function constructor
        const extractor = new Function('return ' + arrayString);
        const result = extractor();
        if (!Array.isArray(result)) {
            console.error('Tony & Jay Loader: Result is not an array. Type:', typeof result);
            return null;
        }
        if (result.length === 0) {
            console.error('Tony & Jay Loader: Result is an empty array');
            return null;
        }
        console.log('Tony & Jay Loader: SUCCESS: Parsed', result.length, 'Tony & Jay stories');
        return result;
    } catch (error) {
        console.error('Tony & Jay Loader: Parse error:', error.message);
        console.error('Tony & Jay Loader: Error stack:', error.stack);
        return null;
    }
}

/**
 * Initialize Tony & Jay stories loader - load today's stories
 * Waits for both lessonsData AND populateStorySelector to be available
 */
async function initTonyJayStoriesLoader() {
    console.log('=== INITIALIZING TONY & JAY STORIES LOADER ===');
    
    // Wait for lessonsData to be available
    let initRetries = 0;
    const initMaxRetries = 30;
    while (typeof window.lessonsData === 'undefined' && initRetries < initMaxRetries) {
        console.log('Tony & Jay Loader: Waiting for lessonsData (' + initRetries + '/' + initMaxRetries + ')');
        await new Promise(resolve => setTimeout(resolve, 100));
        initRetries++;
    }
    
    if (typeof window.lessonsData === 'undefined') {
        console.error('Tony & Jay Loader: lessonsData never became available');
        return;
    }
    
    const today = new Date();
    const filename = formatDateTonyJay(today);
    console.log('Tony & Jay Loader: Loading stories file:', filename);
    const storiesData = await loadTonyJayStoriesFile(filename);
    
    if (storiesData && Array.isArray(storiesData)) {
        console.log('Tony & Jay Loader: Loaded', storiesData.length, 'Tony & Jay stories');
        // Add to lessonsData
        window.lessonsData['TonyJayStories'] = storiesData;
        console.log('Tony & Jay Loader: Stories data added to lessonsData[\'TonyJayStories\']');
        
        // Wait for populateStorySelector to be available, then refresh dropdown
        let dropdownRetries = 0;
        const dropdownMaxRetries = 30;
        const checkAndRefresh = () => {
            if (typeof window.populateStorySelector === 'function') {
                window.populateStorySelector('TonyJayStories');
                console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories');
            } else {
                dropdownRetries++;
                if (dropdownRetries < dropdownMaxRetries) {
                    setTimeout(checkAndRefresh, 100);
                } else {
                    console.error('Tony & Jay Loader: populateStorySelector not found after ' + dropdownMaxRetries + ' retries');
                }
            }
        };
        checkAndRefresh();
    } else {
        console.warn('Tony & Jay Loader: No Tony & Jay stories loaded for today');
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

// Fallback: Try again after 1.5 seconds if lessonsData is not ready
setTimeout(() => {
    if (typeof window.lessonsData !== 'undefined' && !window.lessonsData['TonyJayStories']) {
        console.log('Tony & Jay Loader: Fallback trigger, calling init again');
        initTonyJayStoriesLoader();
    }
}, 1500);
