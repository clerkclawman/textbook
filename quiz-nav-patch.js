// Patch for quiz navigation - overrides showNextSentence and showPreviousSentence
// to handle quiz mode

(function() {
    // Save original functions
    const originalShowNext = window.showNextSentence;
    const originalShowPrev = window.showPreviousSentence;

    // Override showNextSentence
    window.showNextSentence = function() {
        // Handle quiz mode first
        if (typeof isQuizMode !== 'undefined' && isQuizMode && quizQuestions && quizQuestions.length > 0) {
            if (currentSentenceIndex >= quizQuestions.length - 1) {
                currentSentenceIndex = 0;
            } else {
                currentSentenceIndex++;
            }
            if (typeof displayQuizQuestion === 'function') {
                displayQuizQuestion(currentSentenceIndex);
            }
            return;
        }
        
        // Fall back to original function for regular mode
        if (typeof originalShowNext === 'function') {
            originalShowNext();
        }
    };

    // Override showPreviousSentence
    window.showPreviousSentence = function() {
        // Handle quiz mode first
        if (typeof isQuizMode !== 'undefined' && isQuizMode && quizQuestions && quizQuestions.length > 0) {
            if (currentSentenceIndex > 0) {
                currentSentenceIndex--;
            } else {
                currentSentenceIndex = quizQuestions.length - 1;
            }
            if (typeof displayQuizQuestion === 'function') {
                displayQuizQuestion(currentSentenceIndex);
            }
            return;
        }
        
        // Fall back to original function for regular mode
        if (typeof originalShowPrev === 'function') {
            originalShowPrev();
        }
    };

    console.log('Quiz navigation patch loaded');
})();
