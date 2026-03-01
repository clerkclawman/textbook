// Simple analytics tracking for textbook site
// Stores aggregate data in localStorage (no external dependencies)

const Analytics = {
  // Storage key
  STORAGE_KEY: 'textbook_analytics',

  // Initialize analytics
  init() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.getEmptyState()));
    }
  },

  // Get empty state
  getEmptyState() {
    return {
      levelViews: {
        'Grade 7': 0,
        'Grade 6': 0,
        'Grade 5': 0,
        'Grade 4': 0,
        'Grade 3': 0,
        'Pre-2': 0,
        'Pre-2Plus': 0,
        'Grade 2': 0,
        'Pre-1': 0,
        'Grade 1': 0,
        'Bronze': 0,
        'Silver': 0,
        'Gold': 0
      },
      pageViews: {
        'index.html': 0,
        'eiken-dashboard.html': 0,
        'vocabulary-grammar-index.html': 0,
        'analytics.html': 0
      },
      storyViews: {},
      dailyViews: {},
      firstVisit: null,
      lastVisit: null
    };
  },

  // Get current data
  getData() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : this.getEmptyState();
    } catch (e) {
      console.error('Error reading analytics:', e);
      return this.getEmptyState();
    }
  },

  // Save data
  saveData(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving analytics:', e);
    }
  },

  // Track page view
  trackPageView(page) {
    const data = this.getData();
    
    // Increment page view
    if (data.pageViews[page] === undefined) {
      data.pageViews[page] = 0;
    }
    data.pageViews[page]++;
    
    // Update dates
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    data.lastVisit = today;
    if (!data.firstVisit) {
      data.firstVisit = today;
    }
    
    // Track daily views
    if (!data.dailyViews[today]) {
      data.dailyViews[today] = 0;
    }
    data.dailyViews[today]++;
    
    this.saveData(data);
  },

  // Track level selection
  trackLevelView(level) {
    const data = this.getData();
    
    if (data.levelViews[level] === undefined) {
      data.levelViews[level] = 0;
    }
    data.levelViews[level]++;
    
    this.saveData(data);
  },

  // Track story view
  trackStoryView(level, storyNumber) {
    const data = this.getData();
    
    const key = `${level}_story_${storyNumber}`;
    if (data.storyViews[key] === undefined) {
      data.storyViews[key] = 0;
    }
    data.storyViews[key]++;
    
    this.saveData(data);
  },

  // Get summary stats
  getSummary() {
    const data = this.getData();
    
    const totalLevelViews = Object.values(data.levelViews).reduce((a, b) => a + b, 0);
    const totalPages = Object.keys(data.pageViews).length;
    const totalStories = Object.keys(data.storyViews).length;
    const daysVisited = Object.keys(data.dailyViews).length;
    
    // Sort levels by views
    const sortedLevels = Object.entries(data.levelViews)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
    
    return {
      totalLevelViews,
      totalPages,
      totalStories,
      daysVisited,
      firstVisit: data.firstVisit,
      lastVisit: data.lastVisit,
      topLevels: sortedLevels,
      levelViews: data.levelViews,
      pageViews: data.pageViews,
      storyViews: data.storyViews,
      dailyViews: data.dailyViews
    };
  },

  // Get last 7 days of page views
  getWeeklyViews() {
    const data = this.getData();
    const weekly = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      weekly.push({
        date: dateStr,
        views: data.dailyViews[dateStr] || 0
      });
    }
    
    return weekly;
  },

  // Clear analytics data
  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.init();
  },

  // Export data as JSON
  export() {
    return JSON.stringify(this.getData(), null, 2);
  }
};

// Initialize
Analytics.init();
