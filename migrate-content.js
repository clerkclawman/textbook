#!/usr/bin/env node
/**
 * Chatterbox House Content Migration Script
 * Normalizes all story files to standard: var gradeNameStories = [{title, content}]
 */

const fs = require('fs');
const path = require('path');

// File mapping: current filename -> standardized variable name
const FILE_MAP = {
  // Phonics levels
  'bronze.js': { varName: 'bronzeStories', struct: 'array' },
  'silver.js': { varName: 'silverStories', struct: 'array' },
  'gold.js': { varName: 'goldStories', struct: 'array' },
  
  // Eiken grades
  'eiken5story.js': { varName: 'eiken5Stories', struct: 'array' },
  'eiken4.js': { varName: 'eiken4Stories', struct: 'array' },
  'eiken3.js': { varName: 'eiken3Stories', struct: 'array' },
  'eikenpre2.js': { varName: 'eikenPre2Stories', struct: 'array' },
  'eikenpre2plus.js': { varName: 'eikenPre2PlusStories', struct: 'array' },
  'eiken2.js': { varName: 'eiken2Stories', struct: 'array' },
  'eikenpre1.js': { varName: 'eikenPre1Stories', struct: 'array' },
  'eiken1.js': { varName: 'eiken1Stories', struct: 'array' },
  'eiken7story.js': { varName: 'eiken7Stories', struct: 'array' },
  'eiken6story.js': { varName: 'eiken6Stories', struct: 'array' },
  
  // Conversation classes
  'adult.js': { varName: 'adultStories', struct: 'array' },
  'adult2026.js': { varName: 'adult2026Stories', struct: 'array' },
  'c.js': { varName: 'cClassStories', struct: 'array' },
  'x.js': { varName: 'xClassStories', struct: 'array' },
  
  // Question sets (these may need special handling)
  'easyquestions.js': { varName: 'easyQuestions', struct: 'array' },
  'gettingtoknow.js': { varName: 'gettingToKnowQuestions', struct: 'array' },
  'wouldyourather.js': { varName: 'wouldYouRatherQuestions', struct: 'array' },
  'QA5.js': { varName: 'qa5Questions', struct: 'object' },
  'eiken3questions.js': { varName: 'eiken3Questions', struct: 'object' },
};

// Content normalization rules
function normalizeContent(content) {
  // Remove numbered prefixes from lines (e.g., "1. 🍎" -> "🍎")
  content = content.replace(/^(\d+\.\s*)([🎍⛩️🌅📝🌏🍱🍕🧧🛌📺🏃‍♂️🛍️🤧🗓️🥂🧹🍎🐜🐊🐻⚾🚌🐱🚗🍰🐶🍩🚪🐘🥚👀🐟🦊🖐🦍🐐🍇👒🐴])/gm, '$2');
  
  // Remove extra blank lines (keep only single line breaks)
  content = content.replace(/\n{3,}/g, '\n\n');
  
  // Ensure content starts with emoji if it doesn't
  content = content.trim();
  if (!/^[^\S\r\n]*[\u{1F300}-\u{1F9FF}]/u.test(content) && !content.startsWith('//')) {
    // If content doesn't start with emoji, that's probably the formatting itself
    // Just return as-is for now
  }
  
  return content;
}

function parseVariableContent(fileContent, filename) {
  // Extract the variable declaration
  // Matches: var name = ... OR const name = ... OR let name = ...
  const varMatch = fileContent.match(/(?:var|const|let)\s+(\w+)\s*=\s*([\s\S]*?);?\s*$/);
  if (!varMatch) {
    console.warn(`No variable declaration found in ${filename}`);
    return null;
  }
  
  const oldVarName = varMatch[1];
  let data = varMatch[2].trim();
  
  // Remove trailing semicolon if present
  if (data.endsWith(';')) {
    data = data.slice(0, -1).trim();
  }
  
  try {
    // Try to eval safely-ish (just for parsing, not execution)
    // Replace the variable name with parseable structure
    const jsonLike = data
      .replace(/'/g, '"')  // Convert single quotes to double
      .replace(/`/g, '"')  // Convert template literals (simplified, loses formatting)
      .replace(/([{,]\s*)(\w+):/g, '$1"$2":')  // Quote unquoted keys
      .replace(/,\s*([}\]])/g, '$1'); // Remove trailing commas
    
    return { oldVarName, data, structure: 'unknown' };
  } catch (e) {
    console.warn(`Failed to parse ${filename}: ${e.message}`);
    return { oldVarName, data, structure: 'unknown', error: e.message };
  }
}

function generateStandardizedFile(stories, questions, config) {
  const { varName } = config;
  
  let output = `// ${varName}.js - Standardized Chatterbox House Content\n`;
  output += `// Generated: ${new Date().toISOString()}\n`;
  output += `// Format: var varName = [{title, content}, ...]\n\n`;
  
  // Main stories array
  output += `var ${varName} = [`;
  
  if (stories && stories.length > 0) {
    stories.forEach((story, i) => {
      const normalizedContent = normalizeContent(story.content || story);
      const title = story.title || `Story ${i + 1}`;
      
      output += `\n  {\n    title: "${title.replace(/"/g, '\\"')}",`;
      output += `\n    content: \`${normalizedContent}\``;
      output += `\n  }`;
      if (i < stories.length - 1) output += ',';
    });
  }
  
  output += `\n];\n`;
  
  // Questions array if present
  if (questions && questions.length > 0) {
    const qVarName = varName.replace('Stories', 'Questions');
    output += `\nvar ${qVarName} = {\n  questions: [`;
    
    questions.forEach((q, i) => {
      const qText = typeof q === 'string' ? q : JSON.stringify(q);
      output += `\n    "${qText.replace(/"/g, '\\"')}"`;
      if (i < questions.length - 1) output += ',';
    });
    
    output += `\n  ]\n};\n`;
  }
  
  return output;
}

function processFile(filename) {
  const filepath = path.join(__dirname, filename);
  if (!fs.existsSync(filepath)) {
    console.log(`SKIP: ${filename} (not found)`);
    return null;
  }
  
  const config = FILE_MAP[filename];
  if (!config) {
    console.log(`SKIP: ${filename} (not in migration map)`);
    return null;
  }
  
  console.log(`PROCESSING: ${filename}`);
  
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  
  // Extract the actual data from the file
  // This is simplified - in practice need to actually parse JS
  // For now, create the standardized output preserving original content
  
  // Read the existing structure
  let stories = [];
  let questions = [];
  
  // Try to extract array/object content
  if (fileContent.includes('stories:')) {
    // Adult-style: {stories: [...]}
    const storiesMatch = fileContent.match(/stories:\s*([\s\S]*?)(?:,?\s*questions:|\n})/);
    if (storiesMatch) {
      // This is tricky to parse - for now just note the structure
      console.log(`  -> Detected: Object with .stories property`);
    }
  }
  
  // For now, generate the new file format
  // We'll need to manually verify these
  const output = generateStandardizedFile(stories, questions, config);
  
  // Write to new directory
  const outputDir = path.join(__dirname, 'migrated');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  const newFilename = `${config.varName}.js`;
  const outputPath = path.join(outputDir, newFilename);
  
  // For safety, write a stub explaining manual migration needed
  const stubContent = `// ${newFilename}
// TODO: Manual migration required from ${filename}
// Expected format: var ${config.varName} = [{title, content}, ...]
// 
// Original file preserved. See migration guide in README.
`;
  
  fs.writeFileSync(outputPath, stubContent, 'utf-8');
  console.log(`  -> Created stub: ${outputPath}`);
  
  return { original: filename, newName: newFilename, config };
}

// Main execution
console.log('=== Chatterbox House Content Migration ===\n');

if (process.argv.includes('--dry-run')) {
  console.log('DRY RUN MODE - No files will be modified\n');
}

if (process.argv.includes('--init')) {
  console.log('INITIALIZATION MODE\n');
  console.log('Creating migration plan...\n');
  
  const plan = Object.keys(FILE_MAP).map(filename => {
    const config = FILE_MAP[filename];
    return {
      original: filename,
      standardized: `${config.varName}.js`,
      variableName: config.varName,
      structure: config.struct
    };
  });
  
  console.log('Migration Plan:');
  console.log('-'.repeat(60));
  plan.forEach((item, i) => {
    console.log(`${i + 1}. ${item.original} -> ${item.standardized}`);
    console.log(`   Variable: ${item.variableName} (${item.structure})`);
  });
  
  // Write migration plan JSON
  fs.writeFileSync('migration-plan.json', JSON.stringify(plan, null, 2));
  console.log('\nPlan saved to: migration-plan.json');
  
  // Create README for migration
  const readmeContent = `# Content Migration Guide

## Standard Format

All content files should follow this structure:

\`\`\`javascript
var gradeNameStories = [
  {
    title: "Story Title (Grammar Focus)",
    content: \`🍎 English sentence.
日本語の翻訳。
🐶 Another sentence.
別の翻訳。\`
  }
];
\`\`\`

## Naming Convention

| Original | Standardized | Variable |
|----------|--------------|----------|
${plan.map(p => `| ${p.original} | ${p.standardized} | ${p.variableName} |`).join('\n')}

## Migration Steps

1. Backup original files
2. Create new standardized files in ./migrated/
3. Update index.html loader to use new variable names
4. Test each class displays correctly
5. Replace original files with migrated versions

## Content Rules

1. **Variable naming**: gradeNameStories (camelCase, Stories suffix)
2. **Structure**: Array of {title, content} objects
3. **Content format**: 
   - Line 1: Emoji + English
   - Line 2: Japanese translation (no emoji)
   - Repeat
4. **No blank lines** between pairs
5. **No numbered prefixes** on sentences
`;
  
  fs.writeFileSync('MIGRATION.md', readmeContent);
  console.log('Guide saved to: MIGRATION.md');
} else {
  console.log('Run with --init to see migration plan');
  console.log('Run with --execute to perform migration (not implemented - manual recommended)\n');
  console.log('FILES TO MIGRATE:', Object.keys(FILE_MAP).length);
}
