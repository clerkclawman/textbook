/**
 * Dynamic News Loader
 * Loads current and recent news files based on date
 * Auto-hides news older than 48 hours
 */
const NEWS_MAX_AGE_HOURS = 48;

// Cache for loaded news
const newsCache = new Map();

/**
 * Get YYYY-MM-DD format for a date
 */
function formatDateNews(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `news-${year}-${month}-${day}.js`;
}

/**
 * Check if news is within 48 hours
 */
function isNewsFresh(newsDate) {
    const now = new Date();
    const ageHours = (now - newsDate) / (1000 * 60 * 60);
    return ageHours <= NEWS_MAX_AGE_HOURS;
}

/**
 * Load news file dynamically
 */
async function loadNewsFile(filename) {
    if (newsCache.has(filename)) {
        return newsCache.get(filename);
    }
    try {
        const response = await fetch(filename);
        if (!response.ok) return null;
        const javascript = await response.text();
        const newsData = parseJavaScriptNews(javascript);
        if (newsData) {
            newsCache.set(filename, newsData);
        }
        return newsData;
    } catch (error) {
        console.warn(`Failed to load ${filename}:`, error);
        return null;
    }
}

/**
 * Parse JavaScript news file to extract data
 * Handles the template literal format like adult.js:
 * var news20260310 = [
 *   { title: "...", content: `...` }
 * ];
 */
function parseJavaScriptNews(javascript) {
    try {
        console.log("parseJavaScriptNews: Received", javascript.length, "chars");
        
        // Match: var newsYYYYMMDD = [ ... ];
        const arrayMatch = javascript.match(/var\s+news\d{8}\s*=\s*\[([\s\S]+)\]\s*;/);
        if (!arrayMatch) {
            console.log("parseJavaScriptNews: No array structure found");
            return null;
        }
        
        const arrayContent = arrayMatch[1];
        console.log("parseJavaScriptNews: Found array content, length =", arrayContent.length);
        
        // Match: { title: "...", content: `...` }
        // Using template literal (backtick) for content
        const itemPattern = /\{\s*title:\s*"([^"]+)"\s*,\s*content:\s*`([\s\S]*?)`\s*\}/g;
        
        const newsItems = [];
        let match;
        
        while ((match = itemPattern.exec(arrayContent)) !== null) {
            newsItems.push({
                title: match[1],
                content: match[2]
            });
        }
        
        console.log(`parseJavaScriptNews: Extracted ${newsItems.length} news items`);
        
        if (newsItems.length === 0) {
            console.log("parseJavaScriptNews: No items extracted");
            return null;
        }
        
        console.log("parseJavaScriptNews: Success! Returning", newsItems.length, "items");
        return newsItems;
        
    } catch (e) {
        console.warn('Failed to parse news data:', e);
        return null;
    }
}

/**
 * Get all available news within 48 hours
 */
async function getRecentNews() {
    const availableNews = [];
    const now = new Date();
    
    console.log('Checking for recent news files...');
    
    // Check today and yesterday
    for (let i = 0; i < 2; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const filename = formatDateNews(date);
        const newsDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const ageHours = (now - newsDate) / (1000 * 60 * 60);
        
        console.log(`Checking ${filename} (age: ${ageHours.toFixed(1)}h)`);
        
        if (isNewsFresh(newsDate)) {
            const news = await loadNewsFile(filename);
            if (news && news.length > 0) {
                availableNews.push({ date: newsDate, filename, news });
                console.log(`✓ Found ${news.length} articles in ${filename}`);
            } else {
                console.log(`✗ No valid news in ${filename}`);
            }
        } else {
            console.log(`✗ ${filename} is older than 48 hours`);
        }
    }
    
    // Sort by date (newest first)
    availableNews.sort((a, b) => b.date - a.date);
    
    return availableNews;
}

/**
 * Combine multiple news days into one array
 */
async function getCombinedNews() {
    const recentNews = await getRecentNews();
    
    if (recentNews.length === 0) {
        return [{
            title: "📰 No Recent News",
            content: "News articles are published daily and automatically removed after 48 hours. Check back tomorrow!\n\nニュース記事は毎日更新され、48時間後に自動的に削除されます。明日またチェックしてください。"
        }];
    }
    
    // Combine all recent news
    const combined = [];
    for (const { date, news } of recentNews) {
        const dateHeader = `📅 ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
        combined.push({ title: dateHeader, content: '' });
        combined.push(...news);
    }
    
    return combined;
}

// Export functions for use by main script
if (typeof window !== 'undefined') {
    window.getCombinedNews = getCombinedNews;
    window.getRecentNews = getRecentNews;
}

console.log('News loader functions exported: getCombinedNews =', typeof getCombinedNews);