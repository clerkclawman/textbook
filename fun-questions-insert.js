// Load Fun Questions data
let funQuestionsData = [];
if (typeof getCombinedFunQuestions === 'function') {
  getCombinedFunQuestions().then(data => {
    funQuestionsData = data;
    console.log('Fun Questions loaded:', funQuestionsData.length + ' entries');
    if (currentClass === 'FunQuestions') {
      populateStorySelector('FunQuestions');
    }
  }).catch(err => {
    console.error('Failed to load Fun Questions:', err);
    funQuestionsData = [{ title: '🎉 No Fun Questions Available', content: 'Fun Questions will be available soon!' }];
  });
} else {
  console.warn('getCombinedFunQuestions not available');
  funQuestionsData = [{ title: '🎉 No Fun Questions Available', content: 'Fun Questions will be available soon!' }];
}
