const fs = require('fs');
const path = '/home/tony/textbook/index.html';

let content = fs.readFileSync(path, 'utf8');

// Remove the window.onload block
const startMarker = "window.onload = function() {";
const endMarker = "};\n</script>";

const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  console.log("Could not find window.onload start");
  process.exit(1);
}

const endIndex = content.indexOf(endMarker, startIndex);
if (endIndex === -1) {
  console.log("Could not find window.onload end");
  process.exit(1);
}

// Remove the window.onload block
content = content.substring(0, startIndex) + content.substring(endIndex + endMarker.length);

// Find the last </script> tag (after all data scripts)
const lastScriptIndex = content.lastIndexOf("</script>");
if (lastScriptIndex === -1) {
  console.log("Could not find last </script>");
  process.exit(1);
}

// Insert a synchronous script block right after the last data script
const syncScript = `
<script>
// Synchronously populate lessonsData immediately after all scripts load
// This ensures data is ready BEFORE any user interaction
if (typeof bronzeStories !== 'undefined') lessonsData['Bronze'] = bronzeStories;
if (typeof silverStories !== 'undefined') lessonsData['Silver'] = silverStories;
if (typeof goldStories !== 'undefined') lessonsData['Gold'] = goldStories;
if (typeof adult !== 'undefined') lessonsData['Adult'] = adult;
if (typeof newsData !== 'undefined') lessonsData['News'] = newsData;
if (typeof funQuestionsData !== 'undefined') lessonsData['FunQuestions'] = funQuestionsData;
if (typeof x !== 'undefined') lessonsData['X'] = x;
if (typeof c !== 'undefined') lessonsData['C'] = c;
if (typeof eiken1 !== 'undefined') lessonsData['Eiken1'] = eiken1;
if (typeof eiken2 !== 'undefined') lessonsData['Eiken2'] = eiken2;
if (typeof eiken3story !== 'undefined') lessonsData['Eiken3'] = eiken3story;
if (typeof eiken4story !== 'undefined') lessonsData['Eiken4'] = eiken4story;
if (typeof eiken5story !== 'undefined') lessonsData['Eiken5'] = eiken5story;
if (typeof eiken6story !== 'undefined') lessonsData['Eiken6'] = eiken6story;
if (typeof eiken7story !== 'undefined') lessonsData['Eiken7'] = eiken7story;
if (typeof eiken7new12 !== 'undefined') lessonsData['New7'] = eiken7new12;
if (typeof eiken6new12 !== 'undefined') lessonsData['New6'] = eiken6new12;
if (typeof eiken5new12 !== 'undefined') lessonsData['New5'] = eiken5new12;
if (typeof eiken4new12v2 !== 'undefined') lessonsData['New4'] = eiken4new12v2;
if (typeof eiken3new12 !== 'undefined') lessonsData['New3'] = eiken3new12;
if (typeof eikenpre2new12 !== 'undefined') lessonsData['NewPre2'] = eikenpre2new12;
if (typeof eikenpre2plusnew12 !== 'undefined') lessonsData['NewPre2Plus'] = eikenpre2plusnew12;
if (typeof eiken2new12 !== 'undefined') lessonsData['New2'] = eiken2new12;
if (typeof eikenpre1new12v2 !== 'undefined') lessonsData['NewPre1'] = eikenpre1new12v2;
if (typeof eiken1new12v2 !== 'undefined') lessonsData['New1'] = eiken1new12v2;
if (typeof eikenpre1 !== 'undefined') lessonsData['EikenPre1'] = eikenpre1;
if (typeof eikenpre2 !== 'undefined') lessonsData['EikenPre2'] = eikenpre2;
if (typeof eikenpre2plus !== 'undefined') lessonsData['EikenPre2Plus'] = eikenpre2plus;
if (typeof gettingtoknow !== 'undefined') lessonsData['GettingToKnow'] = gettingtoknow;
if (typeof easyquestions !== 'undefined') lessonsData['EasyQuestions'] = easyquestions;
if (typeof wouldyourather !== 'undefined') lessonsData['WouldYouRather'] = wouldyourather;
if (typeof vocab !== 'undefined') lessonsData['Vocab'] = vocab;

// Combine grammar and sentences arrays
if (typeof eiken7grammar !== 'undefined' && typeof eiken6grammar !== 'undefined') {
  lessonsData['Grammar'] = [].concat(
    eiken7grammar, eiken6grammar, eiken5grammar, eiken4grammar, eiken3grammar,
    eikenpre2grammar, eikenpre2plusgrammar, eiken2grammar, eikenpre1grammar, eiken1grammar
  );
}
if (typeof eiken7sentences !== 'undefined' && typeof eiken6sentences !== 'undefined') {
  lessonsData['Sentences'] = [].concat(
    eiken7sentences, eiken6sentences, eiken5sentences, eiken4sentences, eiken3sentences,
    eikenpre2sentences, eikenpre2plussentences, eiken2sentences, eikenpre1sentences, eiken1sentences
  );
}

console.log('Lesson data loaded synchronously:', Object.keys(lessonsData));
console.log('Eiken5 stories:', lessonsData['Eiken5'] ? lessonsData['Eiken5'].length + ' stories' : 'NOT FOUND');
</script>
`;

content = content.substring(0, lastScriptIndex + "</script>".length) + syncScript + content.substring(lastScriptIndex + "</script>".length);

fs.writeFileSync(path, content);
console.log("Moved data population to synchronous block after last script tag");
