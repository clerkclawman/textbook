#!/usr/bin/env node
/**
 * Generate Daily News for today.
 * Creates news-YYYY-MM-DD.js with 5 news items.
 * Format: Emoji. Statement? Question? (one line), Japanese translation (next line).
 * No labels like "headline" or "question".
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get today's date
const today = new Date();
const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
const dateVar = dateStr.replace(/-/g, ''); // YYYYMMDD

// Sample news items (replace with AI-generated content in production)
// Format: [Emoji, Statement, Question, Japanese translation]
const sampleNews = [
  ['🌍', 'Global temperatures hit record high in March.', 'Do you think climate change is the biggest challenge today?', '3月の全球気温が記録的な高さを記録しました。'],
  ['🤖', 'AI models can now write code better than humans.', 'Are you excited or worried about AI writing code?', 'AIモデルは人間よりも優れたコードを書けます。'],
  ['🚀', 'New Mars rover discovers signs of ancient water.', 'Would you like to live on Mars one day?', '新しい火星探査機が多古代の水の痕跡を発見しました。'],
  ['🎮', 'A new video game breaks sales records worldwide.', 'What is your favorite video game of all time?', '新しいビデオゲームが世界的な売上記録を打ち立てました。'],
  ['🌱', 'Scientists develop a new type of plastic-eating bacteria.', 'How important is recycling in your daily life?', '科学者がプラスチックを分解する新しい細菌を開発しました。'],
  ['🏥', 'A new medicine helps people live longer.', 'Do you think we will live to 150 years old?', '新しい薬が人々の寿命を延ばしています。'],
  ['🎵', 'A robot band performs at a famous concert hall.', 'Would you like to see a robot band live?', 'ロボットバンドが有名なコンサートホールで演奏しました。'],
  ['🌊', 'Scientists find a new island in the Pacific Ocean.', 'Would you like to visit a new island?', '科学者が太平洋に新しい島を発見しました。'],
  ['🦁', 'A zoo celebrates the birth of a baby panda.', 'Do you like pandas?', '動物園でパンダの赤ちゃんが誕生しました。'],
  ['💡', 'A new solar panel is twice as efficient.', 'Do you use solar energy at home?', '新しいソーラーパネルの効率が2倍になりました。']
];

// Build the JavaScript file content
let content = '';
for (let i = 0; i < sampleNews.length; i++) {
  const [emoji, statement, question, japanese] = sampleNews[i];
  // Format: Emoji + Statement + Question on ONE line
  content += `${i + 1}. ${emoji} ${statement} ${question}\n`;
  // Japanese on the NEXT line (no emoji)
  content += `${japanese}\n`;
}

const jsContent = `var news${dateVar} = [
  {
    title: "News - ${dateStr}",
    content: \`
${content}
  \`  }
];
`;

// Write the file
const filePath = path.join(__dirname, `news-${dateStr}.js`);
fs.writeFileSync(filePath, jsContent, 'utf8');

console.log(`✅ Created ${filePath} with ${sampleNews.length} news items`);

// Validate syntax
try {
  execSync(`node -c ${filePath}`, { stdio: 'inherit' });
  console.log('✅ Syntax validation passed');
} catch (error) {
  console.error('❌ Syntax validation failed:', error);
  process.exit(1);
}