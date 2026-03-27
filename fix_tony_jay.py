import re

with open('/home/tony/textbook/tony-jay-loader.js', 'r') as f:
    content = f.read()

# Find and replace the specific block
old_block = """// Refresh the dropdown to include Tony & Jay stories
if (typeof populateStorySelector === 'function') {
  populateStorySelector('TonyJayStories');
  console.log('Tony & Jay Loader: Dropdown refreshed for TonyJayStories');
} else {
  console.warn('Tony & Jay Loader: populateStorySelector function not found yet');
}"""

new_block = """// Refresh the dropdown to include Tony & Jay stories (with retry logic)
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

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('/home/tony/textbook/tony-jay-loader.js', 'w') as f:
        f.write(content)
    print("Successfully updated tony-jay-loader.js")
else:
    print("Could not find the exact block to replace")
    # Try to find similar patterns
    if "populateStorySelector" in content:
        print("Found populateStorySelector but format might be different")
