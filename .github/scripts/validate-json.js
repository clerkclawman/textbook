#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all JS files in the repository
function getJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .github
      if (file !== 'node_modules' && file !== '.github') {
        getJsFiles(filePath, fileList);
      }
    } else if (path.extname(file) === '.js') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Validate array structure
function validateArrayStructure(content, filePath) {
  let errors = 0;
  
  try {
    // Remove 'var stories' or 'export' declarations to get the array
    const arrayMatch = content.match(/\[\s*\{.*\}\s*\]/s);
    if (!arrayMatch) {
      console.error(`❌ ${filePath}: No array structure found`);
      return 1;
    }
    
    const jsonString = arrayMatch[0];
    const data = JSON.parse(jsonString);
    
    if (!Array.isArray(data)) {
      console.error(`❌ ${filePath}: Not an array`);
      return 1;
    }
    
    // Check first item has story: 0 (questions)
    if (data.length > 0) {
      const firstItem = data[0];
      if (typeof firstItem.story !== 'number' || firstItem.story !== 0) {
        console.error(`❌ ${filePath}: First item story number should be 0, got ${firstItem.story}`);
        errors++;
      }
    }
    
    // Check all items have required fields
    const requiredFields = ['story', 'english', 'japanese'];
    data.forEach((item, index) => {
      requiredFields.forEach(field => {
        if (!(field in item)) {
          console.error(`❌ ${filePath}: Item ${index} missing required field '${field}'`);
          errors++;
        }
      });
    });
    
    // Check story numbers are sequential
    let prevStory = -1;
    data.forEach((item, index) => {
      if (typeof item.story === 'number') {
        if (item.story !== prevStory + 1) {
          console.error(`❌ ${filePath}: Story numbers not sequential: ${prevStory} → ${item.story} at index ${index}`);
          errors++;
        }
        prevStory = item.story;
      }
    });
    
    if (errors === 0) {
      console.log(`✅ ${filePath}: Valid (${data.length} stories)`);
    }
    
    return errors;
  } catch (error) {
    console.error(`❌ ${filePath}: JSON parse error - ${error.message}`);
    return 1;
  }
}

// Main validation
const files = getJsFiles('.');
let totalErrors = 0;

files.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  totalErrors += validateArrayStructure(content, filePath);
});

if (totalErrors > 0) {
  console.error(`\n❌ Total errors: ${totalErrors}`);
  process.exit(1);
} else {
  console.log('\n✅ All JSON structures are valid');
  process.exit(0);
}
