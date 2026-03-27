import re

with open('/home/tony/textbook/tony-jay-loader.js', 'r') as f:
    content = f.read()

# Find the problematic section and replace it entirely
# Look for the pattern starting with "lessonsData['TonyJayStories'] = storiesData"
pattern = r"(lessonsData\['TonyJayStories'\] = storiesData;.*?console\.log\('Tony & Jay Loader: Stories data added to lessonsData\['TonyJayStories'\]'\);)(.*?)(// Refresh the dropdown to include Tony & Jay stories.*?)(else \{ console\.error\('Tony & Jay Loader: lessonsData is not defined yet!'\))"

replacement = r"""\1

// Refresh the dropdown to include Tony & Jay stories (with retry logic)
let retries = 0;
const maxRetries = 20;
const checkFunction = () => {
  if (typeof populateStorySelector === 'function') {
    populateStorySelector('TonyJayStories');
    console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories (after ' + retries + ' retries)');
  } else {
    retries++;
    if (retries < maxRetries) {
      console.log('Tony & Jay Loader: Waiting for populateStorySelector (retry ' + retries + '/' + maxRetries + ')');
      setTimeout(checkFunction, 100);
    } else {
      console.error('Tony & Jay Loader: populateStorySelector function still not found after ' + maxRetries + ' retries!');
    }
  }
};
checkFunction();

\4"""

# Try a simpler approach: just find and replace the specific lines
old_text = """// Refresh the dropdown to include Tony & Jay stories
// Retry logic for populateStorySelector
let retries = 0;
const maxRetries = 20;
const checkFunction = () => {
  if (typeof populateStorySelector === 'function') {
    populateStorySelector('TonyJayStories');
    console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories');
  } else {
    console.warn('Tony & Jay Loader: populateStorySelector function not found yet');
  }
}"""

new_text = """// Refresh the dropdown to include Tony & Jay stories (with retry logic)
let retries = 0;
const maxRetries = 20;
const checkFunction = () => {
  if (typeof populateStorySelector === 'function') {
    populateStorySelector('TonyJayStories');
    console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories (after ' + retries + ' retries)');
  } else {
    retries++;
    if (retries < maxRetries) {
      console.log('Tony & Jay Loader: Waiting for populateStorySelector (retry ' + retries + '/' + maxRetries + ')');
      setTimeout(checkFunction, 100);
    } else {
      console.error('Tony & Jay Loader: populateStorySelector function still not found after ' + maxRetries + ' retries!');
    }
  }
};
checkFunction();"""

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('/home/tony/textbook/tony-jay-loader.js', 'w') as f:
        f.write(content)
    print("Successfully fixed the retry logic")
else:
    print("Could not find the exact text. Current state might be corrupted.")
    # Print the relevant section for debugging
    idx = content.find("lessonsData['TonyJayStories']")
    if idx != -1:
        print("Found section starting at index", idx)
        print(content[idx:idx+500])
