/**
 * Tony & Jay Stories Loader
 * Loads stories organized by date
 * Shows dates in dropdown, then stories with their EIKEN levels
 */
const TONY_JAY_MAX_AGE_DAYS = 7;

// Cache for loaded stories (keyed by date string 'YYYY-MM-DD')
const tonyJayStoriesCache = new Map();

/**
 * Get YYYY-MM-DD format for a date
 */
function formatDateTonyJay(date) {
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
 * Get EIKEN level display string
 */
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

/**
 * Load Tony & Jay stories file dynamically
 */
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

/**
 * Parse JavaScript content from Tony & Jay stories file
 */
function parseJavaScriptTonyJay(javascript) {
    try {
        // Remove comments
        let cleanCode = javascript.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
        
        // Extract the array from "var storiesTonyJayYYYYMMDD = [...]"
        const match = cleanCode.match(/var\s+storiesTonyJay\d+\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
        if (!match) {
            return null;
        }
        const arrayString = match[1];
        const extractor = new Function('return ' + arrayString);
        const result = extractor();
        if (!Array.isArray(result) || result.length === 0) {
            return null;
        }
        return result;
    } catch (error) {
        console.error('Tony & Jay Loader: Parse error:', error.message);
        return null;
    }
}

/**
 * Initialize Tony & Jay stories loader
 * Loads all available story files and organizes by date
 */
async function initTonyJayStoriesLoader() {
    console.log('=== INITIALIZING TONY & JAY STORIES LOADER ===');
    
    // Wait for lessonsData to be available
    let initRetries = 0;
    const initMaxRetries = 30;
    while (typeof window.lessonsData === 'undefined' && initRetries < initMaxRetries) {
        await new Promise(resolve => setTimeout(resolve, 100));
        initRetries++;
    }
    
    if (typeof window.lessonsData === 'undefined') {
        console.error('Tony & Jay Loader: lessonsData never became available');
        return;
    }
    
    // Load stories for today and past 7 days
    const today = new Date();
    const storiesByDate = {};
    
    for (let i = 0; i <= TONY_JAY_MAX_AGE_DAYS; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        const dateStr = formatDateTonyJay(date);
        
        const storiesData = await loadTonyJayStoriesFile(dateStr);
        if (storiesData && Array.isArray(storiesData) && storiesData.length > 0) {
            storiesByDate[dateStr] = storiesData;
            console.log(`Tony & Jay Loader: Loaded ${storiesData.length} stories for ${dateStr}`);
        }
    }
    
    if (Object.keys(storiesByDate).length === 0) {
        console.warn('Tony & Jay Loader: No stories loaded');
        return;
    }
    
    // Store in lessonsData as date-keyed object
    window.lessonsData['TonyJayStories'] = storiesByDate;
    console.log('Tony & Jay Loader: Stories organized by date:', Object.keys(storiesByDate));
    
    // Wait for populateStorySelector to be available
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
            }
        }
    };
    checkAndRefresh();
}

// Auto-initialize when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTonyJayStoriesLoader);
} else {
    initTonyJayStoriesLoader();
}
