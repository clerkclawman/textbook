/**
 * Weekly Q&A Loader
 * Loads current QA questions for each Eiken level
 * Auto-loads the most recent dated file for each level
 */

// Cache for loaded Q&A
const qaCache = new Map();

// Eiken levels to load
const EIKEN_LEVELS = ['7', '6', '5', '4', '3', '2', '1', 'pre2', 'pre2plus', 'pre1'];

/**
 * Get YYYY-MM-DD format for a date
 */
function formatDateQA(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Get Q&A filename for a level and date
 */
function getQAFilename(level, date) {
    const dateStr = formatDateQA(date);
    return `eiken${level}qa-${dateStr}.js`;
}

/**
 * Load Q&A file dynamically
 */
async function loadQAFile(filename) {
    if (qaCache.has(filename)) {
        return qaCache.get(filename);
    }

    try {
        const response = await fetch(filename);
        if (!response.ok) return null;
        const javascript = await response.text();
        const qaData = parseJavaScriptQA(javascript);

        if (qaData) {
            qaCache.set(filename, qaData);
        }
        return qaData;
    } catch (error) {
        console.warn(`Failed to load ${filename}:`, error);
        return null;
    }
}

/**
 * Parse JavaScript Q&A file to extract data
 */
function parseJavaScriptQA(javascript) {
    try {
        // Extract title: title: "Text",
        const jsonTitleMatch = javascript.match(/"title":\s*"([^"]+)"/);
        const plainTitleMatch = javascript.match(/title:\s*"([^"]+)"/);
        const title = jsonTitleMatch ? jsonTitleMatch[1] : (plainTitleMatch ? plainTitleMatch[1] : null);

        // Extract content from template string: content: `...`
        const contentMatch = javascript.match(/(?:content:\s*|"content":\s*)`([^`]*)`/s);
        const content = contentMatch ? contentMatch[1] : '';

        if (title && content) {
            return [{ title, content }];
        }
        return null;
    } catch (e) {
        console.warn('Failed to parse Q&A data:', e);
        return null;
    }
}

/**
 * Find the most recent Q&A file for a level
 */
async function getRecentQA(level) {
    const now = new Date();
    const levelMap = {
        'pre2': 'Pre-2',
        'pre2plus': 'Pre-2 Plus',
        'pre1': 'Pre-1'
    };

    // Check up to 7 days back (weekly rotation)
    for (let i = 0; i < 7; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const filename = getQAFilename(level, date);

        const qa = await loadQAFile(filename);
        if (qa && qa.length > 0) {
            return { date, filename, qa };
        }
    }

    return null;
}

/**
 * Load Q&A for all levels
 */
async function getAllQA() {
    const allQA = {};

    for (const level of EIKEN_LEVELS) {
        const result = await getRecentQA(level);
        if (result && result.qa) {
            allQA[`Eiken${level.charAt(0).toUpperCase()}${level.slice(1)}`] = result.qa;
        }
    }

    return allQA;
}

/**
 * Get Q&A for a specific level
 */
async function getQAForLevel(level) {
    const result = await getRecentQA(level);
    if (result && result.qa) {
        return result.qa;
    }

    // Fallback message if no Q&A found
    return [{
        title: `❓ No Q&A Available`,
        content: `Q&A questions are updated weekly. Check back soon!\n\nQ&A問題は毎週更新されています。もうすぐチェックしてください！`
    }];
}
// Export function for use by main script
const loadAllQA = getAllQA;

// Make functions available globally
if (typeof window !== 'undefined') {
    window.loadAllQA = loadAllQA;
}
if (typeof getCombinedNews === 'function' && typeof window !== 'undefined') {
    window.getCombinedNews = getCombinedNews;
}

// Debug: log when loadAllQA is called
console.log('✓ loadAllQA function ready and exported');
console.log('QA loader functions exported: loadAllQA =', typeof loadAllQA);
