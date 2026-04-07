/**
 * Tony & Jay Stories Loader
 * Loads today's stories and organizes them by level
 * Shows levels in dropdown, displays only today's story for selected level
 */

// Cache for today's stories
let todayStories = null;

/**
 * Get YYYY-MM-DD format for today
 */
function formatDateToday() {
 const today = new Date();
 const year = today.getFullYear();
 const month = String(today.getMonth() + 1).padStart(2, '0');
 const day = String(today.getDate()).padStart(2, '0');
 return `${year}-${month}-${day}`;
}

/**
 * Format level for display (e.g., "7" -> "Grade 7")
 */
function formatLevel(level) {
 if (level === 'Pre-2Plus') return 'Pre-2 Plus';
 if (level === 'Pre-1') return 'Pre-1';
 if (level === 'Pre-2') return 'Pre-2';
 return `Grade ${level}`;
}

/**
 * Initialize Tony & Jay Stories loader
 * Loads today's stories file and organizes by level
 */
async function initTonyJayStoriesLoader() {
 console.log('=== INITIALIZING TONY & JAY STORIES LOADER ===');

 // Wait for lessonsData to be available
 let initRetries = 0;
 const initMaxRetries = 100; // 10 seconds
 while (typeof window.lessonsData === 'undefined' && initRetries < initMaxRetries) {
   await new Promise(resolve => setTimeout(resolve, 100));
   initRetries++;
 }

 if (typeof window.lessonsData === 'undefined') {
   console.error('Tony & Jay Loader: lessonsData never became available');
   return;
 }

 const todayStr = formatDateToday();
 const filename = `stories-tony-jay-${todayStr}.js`;
 console.log(`Tony & Jay Loader: Loading ${filename}`);

 try {
   const response = await fetch(filename);
   if (!response.ok) {
     console.error(`Tony & Jay Loader: Failed to load ${filename}`, response.status);
     return;
   }
   const data = await response.json();
   todayStories = data;

   // Organize by level
   window.lessonsData['TonyJayStories'] = {};
   for (const story of todayStories) {
     const level = story.level;
     if (!window.lessonsData['TonyJayStories'][level]) {
       window.lessonsData['TonyJayStories'][level] = [];
     }
     window.lessonsData['TonyJayStories'][level].push(story);
   }

   console.log('Tony & Jay Loader: Organized by level:', Object.keys(window.lessonsData['TonyJayStories']));

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

 } catch (error) {
   console.error('Tony & Jay Loader: Error loading stories', error);
 }
}

// Auto-initialize when script loads
if (document.readyState === 'loading') {
 document.addEventListener('DOMContentLoaded', initTonyJayStoriesLoader);
} else {
 initTonyJayStoriesLoader();
}
