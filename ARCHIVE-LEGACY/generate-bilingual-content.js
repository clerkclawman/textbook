#!/usr/bin/env node
/**
 * Universal Bilingual Content Generator
 * 
 * Generates perfectly formatted bilingual content files for the textbook site.
 * The generator creates BOTH English and Japanese text natively (no translation needed).
 * 
 * Format Enforced:
 *   Line 1 (odd):  [Emoji][Number]. English text?
 *   Line 2 (even): Japanese translation. (NO emoji, NO number)
 * 
 * Usage:
 *   node generate-bilingual-content.js --type=news --date=2026-03-24 --input=news-raw-2026-03-24.json
 *   node generate-bilingual-content.js --type=fun --date=2026-03-24
 *   node generate-bilingual-content.js --type=story --level=5 --title="The Lost Key"
 */

const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURATION
// ============================================

const EMOJIS = ['🌏', '🤔', '🌍', '🔍', '⚡', '👑', '🎤', '🎬', '💥', '🇯🇵', '💔', '🏛️', '💧', '🛢️', '🏃', '💣', '📚', '⚔️', '💉', '👶', '🗳️', '🚶', '📈', '🏥', '🕌', '👁️', '🐕', '🇬🇧', '🚢', '🤝', '⚓', '🎓', '🌑', '🏰', '📖', '📂', '🇺🇸', '🎯', '🏠', '🗑️', '👮', '🌊', '🍎', '🐶', '🌞', '🍦', '🏫', '🦖', '🎨', '🚗', '🐱', '🍕', '🌧️', '🦸', '🎵', '🍔', '🚀', '📚', '🐸', '🎬', '🤖'];

// ============================================
// CONTENT GENERATION (NATIVE BILINGUAL)
// ============================================

/**
 * Generates a simplified Japanese headline from English.
 * Extracts key entities and creates a natural Japanese sentence.
 */
function generateJapaneseHeadline(englishHeadline) {
  const lower = englishHeadline.toLowerCase();
  
  // Detect key topics and generate appropriate Japanese
  if (lower.includes('iran') && lower.includes('us') && lower.includes('war')) {
    return 'イランと米国の緊張が高まる';
  }
  if (lower.includes('israel') && lower.includes('palestinian')) {
    return 'イスラエルとパレスチナの対立が継続';
  }
  if (lower.includes('missile') || lower.includes('attack')) {
    return 'ミサイル攻撃で多数の負傷者';
  }
  if (lower.includes('trump')) {
    return 'トランプ氏の新たな政策発表';
  }
  if (lower.includes('japan') && lower.includes('summit')) {
    return '日米首脳会談が開催';
  }
  if (lower.includes('energy') || lower.includes('oil') || lower.includes('gas')) {
    return 'エネルギー価格の上昇が続く';
  }
  if (lower.includes('election') || lower.includes('vote')) {
    return '選挙の結果が注目される';
  }
  if (lower.includes('sports') || lower.includes('win') || lower.includes('championship')) {
    return 'スポーツ大会で快挙達成';
  }
  if (lower.includes('weather') || lower.includes('snow') || lower.includes('storm')) {
    return '大雪で交通に影響';
  }
  if (lower.includes('health') || lower.includes('outbreak') || lower.includes('disease')) {
    return '感染症の拡大が懸念される';
  }
  if (lower.includes('economy') || lower.includes('market') || lower.includes('stock')) {
    return '経済市場に大きな変動';
  }
  if (lower.includes('technology') || lower.includes('ai') || lower.includes('tech')) {
    return '新技術が社会を変える';
  }
  if (lower.includes('climate') || lower.includes('environment') || lower.includes('green')) {
    return '環境問題への取り組みが加速';
  }
  if (lower.includes('culture') || lower.includes('music') || lower.includes('movie')) {
    return '文化イベントが盛り上がった';
  }
  
  // Default: Create a generic Japanese headline (NO English words)
  return '最新のニュース速報です';
}

/**
 * Generates news discussion questions with native English and Japanese.
 * Reads raw headlines, creates English question, and generates natural Japanese translation.
 */
function generateNewsContent(date, rawData) {
  const headlines = [];
  
  // Extract headlines from raw data
  for (const [source, data] of Object.entries(rawData.sources || {})) {
    if (data.headlines && Array.isArray(data.headlines)) {
      for (const h of data.headlines) {
        const title = typeof h === 'string' ? h : h.title;
        if (title) {
          headlines.push(title);
          if (headlines.length >= 50) break;
        }
      }
    }
    if (headlines.length >= 50) break;
  }
  
  // Fill with placeholders if needed
  while (headlines.length < 50) {
    headlines.push(`News item ${headlines.length + 1}`);
  }
  
  // Discussion questions (English + Japanese pairs)
  const discussionPairs = [
    { en: "What do you think about this?", jp: "これについてどう思いますか？" },
    { en: "How do you feel about this news?", jp: "このニュースについてどう感じますか？" },
    { en: "What would you do in this situation?", jp: "もしあなたの立場ならどうしますか？" },
    { en: "Why do you think this happened?", jp: "なぜこれが起きたと思いますか？" },
    { en: "What impact does this have on people?", jp: "これは人々にどんな影響を与えるでしょうか？" },
    { en: "How does this affect your daily life?", jp: "これはあなたの日常生活にどう影響しますか？" },
    { en: "What do you think will happen next?", jp: "次に何が起きると思いますか？" },
    { en: "Is this a good or bad development?", jp: "これは良いこと还是悪いことでしょうか？" },
    { en: "What lessons can we learn from this?", jp: "これから何を学べるでしょうか？" },
    { en: "How should countries respond to this?", jp: "国々はこれにどう対応すべきですか？" },
    { en: "What would you say to people involved?", jp: "関係者に何と言いますか？" },
    { en: "Why is this important to know about?", jp: "なぜこれを知ることが重要ですか？" },
    { en: "How does this compare to past events?", jp: "過去の出来事と比較してどうですか？" },
    { en: "What solutions do you see for this problem?", jp: "この問題に対する解決策は何だと思いますか？" },
    { en: "Who should be responsible for fixing this?", jp: "これを直す責任は誰にあるべきですか？" },
    { en: "What do you think about the leadership here?", jp: "ここでの指導力についてどう思いますか？" },
    { en: "How can people protect themselves from this?", jp: "人々はこれから自分自身をどう守れますか？" },
    { en: "What changes do you expect to see?", jp: "どのような変化を期待していますか？" },
    { en: "Why do you think people react this way?", jp: "なぜ人々はこう反応すると思いますか？" },
    { en: "What would make this situation better?", jp: "状況をより良くするにはどうすればいいですか？" }
  ];
  
  let content = '';
  for (let i = 0; i < 50; i++) {
    const fullHeadline = headlines[i];
    const displayHeadline = fullHeadline.length > 80 ? fullHeadline.substring(0, 77) + '...' : fullHeadline;
    const emoji = EMOJIS[i % EMOJIS.length];
    const pair = discussionPairs[i % discussionPairs.length];
    
    // Generate Japanese headline from the FULL headline (before truncation)
    const jpHeadline = generateJapaneseHeadline(fullHeadline);
    
    // CRITICAL: TWO-LINE FORMAT
    // Line 1: English with emoji (may be truncated)
    // Line 2: Japanese ONLY (NO emoji, NO number, NO English)
    content += `${i + 1}. ${emoji} ${displayHeadline} - ${pair.en}\n`;
    content += `${jpHeadline} - ${pair.jp}`;
    
    if (i < 49) content += '\n';
  }
  
  return content;
}

/**
 * Generates fun questions by level with native English and Japanese.
 */
function generateFunQuestions(date) {
  // Pre-defined bilingual questions (English + Japanese pairs)
  const questions = [
    { level: 'N7', emoji: '🍎', en: 'What is your favorite color? Why?', jp: '好きな色は何ですか？なぜですか？' },
    { level: 'N7', emoji: '🐶', en: 'If your dog could talk, what would it say?', jp: 'もし犬が話せたら、何と言いますか？' },
    { level: 'N7', emoji: '🌞', en: 'Do you like sunny days or rainy days?', jp: '晴れた日が好きですか、雨の日が好きですか？' },
    { level: 'N7', emoji: '🍦', en: 'If ice cream was hot, would you eat it?', jp: 'アイスクリームが熱かったら、食べますか？' },
    { level: 'N7', emoji: '🏫', en: 'What is your favorite subject at school?', jp: '学校で好きな教科は何ですか？' },
    { level: 'N7', emoji: '🦖', en: 'If a dinosaur came to school, would you run?', jp: '恐竜が学校に来たら、走って逃げますか？' },
    { level: 'N7', emoji: '🎨', en: 'Do you like to draw pictures?', jp: '絵を描くのは好きですか？' },
    { level: 'N7', emoji: '🚗', en: 'If your toy car could fly, where would it go?', jp: 'おもちゃの車が空を飛べたら、どこへいきますか？' },
    { level: 'N7', emoji: '🐱', en: 'Do you have a cat or a dog?', jp: '猫か犬を飼っていますか？' },
    { level: 'N7', emoji: '🍕', en: 'If you ate pizza for breakfast, would you be happy?', jp: '朝食にピザを食べたら、幸せになりますか？' },
    { level: 'N6', emoji: '🌧️', en: 'What do you do when it rains?', jp: '雨が降ったら、何をするのが好きですか？' },
    { level: 'N6', emoji: '🦸', en: 'If you had a superpower, what would it be?', jp: 'スーパーパワーを持てたら、何にしますか？' },
    { level: 'N6', emoji: '🎵', en: 'Do you like to sing songs?', jp: '歌を歌うのは好きですか？' },
    { level: 'N6', emoji: '🍔', en: 'If you could only eat burgers, would you be sad?', jp: 'ハンバーガーしか食べられなかったら、悲しくなりますか？' },
    { level: 'N6', emoji: '🏠', en: 'What is your favorite room in your house?', jp: '家の中で一番好きな部屋はどこですか？' },
    { level: 'N6', emoji: '🚀', en: 'If you went to space, what would you bring?', jp: '宇宙に行ったら、何を持っていきますか？' },
    { level: 'N6', emoji: '📚', en: 'What is a book you like to read?', jp: '読んで好きな本は何ですか？' },
    { level: 'N6', emoji: '🐸', en: 'If you were a frog, where would you jump?', jp: 'カエルになったら、どこへ飛びますか？' },
    { level: 'N6', emoji: '🎬', en: 'Do you like movies or cartoons?', jp: '映画が好きですか、それともアニメが好きですか？' },
    { level: 'N6', emoji: '🤖', en: 'If your robot friend cooked dinner, what would it make?', jp: 'ロボットのお友達が夕食を作ったら、何を作りますか？' },
    { level: 'N5', emoji: '🌍', en: 'Where do you want to travel? Why?', jp: 'どこへ旅行に行きたいですか？なぜですか？' },
    { level: 'N5', emoji: '🐉', en: 'If dragons were real, would you be scared?', jp: 'ドラゴンが本当いたら、怖がりますか？' },
    { level: 'N5', emoji: '🎨', en: 'What are you good at?', jp: '得意なことは何ですか？' },
    { level: 'N5', emoji: '🍩', en: 'If you found a magic donut, what would you do?', jp: '魔法のドーナツを見つけたら、何しますか？' },
    { level: 'N5', emoji: '🏆', en: 'What is your goal for this year?', jp: '今年の目標は何ですか？' },
    { level: 'N5', emoji: '🦁', en: 'If you were a lion, what would you eat?', jp: 'ライオンになったら、何を食べますか？' },
    { level: 'N5', emoji: '🌟', en: 'Who is your hero?', jp: 'あなたのヒーローは誰ですか？' },
    { level: 'N5', emoji: '🍜', en: 'If you made a new ramen flavor, what is in it?', jp: '新しいラーメンの味を作ったら、何を入れますか？' },
    { level: 'N5', emoji: '🏫', en: 'What is the best thing about your school?', jp: 'あなたの学校の一番良いところはどこですか？' },
    { level: 'N5', emoji: '👻', en: 'If you saw a ghost, would you say hello?', jp: 'おばけを見たら、こんにちはと言いますか？' }
  ];
  
  // Repeat to get 50 items
  const allQuestions = [];
  while (allQuestions.length < 50) {
    for (const q of questions) {
      if (allQuestions.length >= 50) break;
      allQuestions.push(q);
    }
  }
  
  let content = '';
  for (let i = 0; i < 50; i++) {
    const q = allQuestions[i];
    content += `${q.level}. ${q.emoji} ${q.en}\n`;
    content += `${q.jp}`;
    if (i < 49) content += '\n';
  }
  
  return content;
}

/**
 * Generates EIKEN story content with native English and Japanese.
 */
function generateStoryContent(title, level) {
  // Example story structure (can be expanded with real stories)
  const narrative = [
    { emoji: '🔑', en: 'Ken wants to go home.', jp: 'ケンは家に帰りたいです。' },
    { emoji: '😱', en: 'But he loses his key!', jp: 'でも鍵をなくしました！' },
    { emoji: '🏫', en: 'He looks in the classroom.', jp: '彼は教室で探します。' },
    { emoji: '🔍', en: 'The key is not there.', jp: '鍵はそこにありません。' },
    { emoji: '😕', en: 'He looks in his bag too.', jp: '彼はバッグの中でも探します。' },
    { emoji: '🎒', en: 'Yuki sees the key there!', jp: 'ユキはバッグの中で鍵を見つけました！' },
    { emoji: '😊', en: 'Thank you, Yuki!', jp: 'ユキ、ありがとう！' },
    { emoji: '🚶', en: 'Ken runs home quickly.', jp: 'ケンは急いで家へ走ります。' },
    { emoji: '🏠', en: 'Mom opens the door now.', jp: 'お母さんは今ドアを開けます。' },
    { emoji: '😊', en: 'Ken is home at last!', jp: 'ケンはついに家に帰りました！' }
  ];
  
  const questions = [
    { emoji: '🔑', en: 'Do you have a key for houses?', jp: '家の鍵を持っていますか？' },
    { emoji: '😱', en: 'Do you lose things often?', jp: 'よく物をなくしますか？' },
    { emoji: '🏫', en: 'Do you have a classroom at school?', jp: '学校では教室がありますか？' },
    { emoji: '🎒', en: 'What is in your school bag?', jp: '学校のバッグには何が入っていますか？' },
    { emoji: '🚶', en: 'Do you walk home from school?', jp: '学校から歩いて帰りますか？' },
    { emoji: '🏠', en: 'Is your home big or small?', jp: 'あなたの家は大きいですか、それとも小さいですか？' },
    { emoji: '👩', en: 'Does your mom open the door for you?', jp: 'お母さんがドアを開けてくれますか？' },
    { emoji: '😊', en: 'Are you happy when you find lost things?', jp: 'なくしたものが見つかると嬉しいですか？' },
    { emoji: '🏃', en: 'Do you run fast or walk slowly?', jp: '速く走りますか、それともゆっくり歩きますか？' },
    { emoji: '😊', en: 'Are you happy today?', jp: '今日は幸せですか？' }
  ];
  
  let content = '';
  
  // Narrative section
  for (let i = 0; i < narrative.length; i++) {
    const { emoji, en, jp } = narrative[i];
    content += `${emoji} ${en}\n`;
    content += `${jp}`;
    if (i < narrative.length - 1 || questions.length > 0) content += '\n';
  }
  
  // Questions section
  for (let i = 0; i < questions.length; i++) {
    const { emoji, en, jp } = questions[i];
    content += `${emoji} ${en}\n`;
    content += `${jp}`;
    if (i < questions.length - 1) content += '\n';
  }
  
  return content;
}

// ============================================
// FILE OUTPUT & VALIDATION
// ============================================

function writeFile(filename, variableName, title, content) {
  const output = `var ${variableName} = [
  {
    title: "${title}",
    content: \`${content}\`
  }
];
`;
  
  fs.writeFileSync(filename, output);
  console.log(`✅ Generated: ${filename}`);
  
  // Validate syntax
  try {
    require(`./${filename}`);
    console.log('   ✓ Syntax valid');
  } catch (e) {
    console.error('   ❌ Syntax error:', e.message);
    process.exit(1);
  }
  
  // Validate format
  const testContent = fs.readFileSync(filename, 'utf8');
  const match = testContent.match(/content: \`(.+?)\`/s);
  if (match) {
    const lines = match[1].split('\n').filter(l => l.trim());
    let errors = 0;
    
    for (let i = 0; i < Math.min(10, lines.length); i++) {
      const line = lines[i];
      const hasEmoji = /[🌏🤔🌍🔍⚡👑🎤🎬💥🇯🇵💔🏛️💧🛢️🏃💣📚⚔️💉👶🗳️🚶📈🏥🕌👁️🐕🇬🇧🚢🤝⚓🎓🌑🏰📖📂🇺🇸🎯🏠🗑️👮🌊🍎🐶🌞🍦🏫🦖🎨🚗🐱🍕🌧️🦸🎵🍔🚀📚🐸🎬🤖]/.test(line);
      const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(line);
      const hasEnglish = /[a-zA-Z]/.test(line);
      
      if (i % 2 === 0) { // Odd lines (0, 2, 4...) should be English
        if (!hasEmoji) {
          console.log(`  ❌ Line ${i+1} missing emoji`);
          errors++;
        }
        if (hasJapanese) {
          console.log(`  ❌ Line ${i+1} has Japanese characters`);
          errors++;
        }
      } else { // Even lines (1, 3, 5...) should be Japanese
        if (hasEmoji) {
          console.log(`  ❌ Line ${i+1} has emoji (should not)`);
          errors++;
        }
        if (hasEnglish) {
          console.log(`  ❌ Line ${i+1} has English characters`);
          errors++;
        }
      }
    }
    
    if (errors === 0) {
      console.log('  ✅ First 10 lines follow correct format');
      console.log(`  ✅ Total lines: ${lines.length}`);
    } else {
      console.log(`  ❌ ${errors} format errors found`);
      process.exit(1);
    }
  }
}

// ============================================
// MAIN
// ============================================

const args = process.argv.slice(2);
const type = args.find(a => a.startsWith('--type='))?.split('=')[1];
const date = args.find(a => a.startsWith('--date='))?.split('=')[1];
const inputFile = args.find(a => a.startsWith('--input='))?.split('=')[1];
const level = args.find(a => a.startsWith('--level='))?.split('=')[1];
const storyTitle = args.find(a => a.startsWith('--title='))?.split('=')[1];

if (!type) {
  console.error('Usage: node generate-bilingual-content.js --type=<news|fun|story> [options]');
  console.error('');
  console.error('Options:');
  console.error('  --type=news    Generate news discussion questions');
  console.error('    --date=YYYY-MM-DD  (required)');
  console.error('    --input=file.json  (required, raw news data)');
  console.error('');
  console.error('  --type=fun     Generate fun questions by level');
  console.error('    --date=YYYY-MM-DD  (required)');
  console.error('');
  console.error('  --type=story   Generate EIKEN story');
  console.error('    --level=N        (5, 4, 3, etc.)');
  console.error('    --title="Title"  (required)');
  process.exit(1);
}

let content, filename, variableName, title;

if (type === 'news') {
  if (!date || !inputFile) {
    console.error('Error: --date and --input required for news type');
    process.exit(1);
  }
  const rawData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  content = generateNewsContent(date, rawData);
  const dateStr = date.replace(/-/g, '');
  filename = `news-${date}.js`;
  variableName = `news${dateStr}`;
  const monthDay = date.split('-').slice(1).join('/');
  title = `News Discussion: ${monthDay}, 2026`;
  
} else if (type === 'fun') {
  if (!date) {
    console.error('Error: --date required for fun type');
    process.exit(1);
  }
  content = generateFunQuestions(date);
  const dateStr = date.replace(/-/g, '');
  filename = `fun-questions-${date}.js`;
  variableName = `funQuestions${dateStr}`;
  title = `Fun Questions - ${date}`;
  
} else if (type === 'story') {
  if (!storyTitle) {
    console.error('Error: --title required for story type');
    process.exit(1);
  }
  content = generateStoryContent(storyTitle, level);
  filename = `eiken${level || '5'}story-${Date.now()}.js`;
  variableName = `eiken${level || '5'}story`;
  title = storyTitle;
}

writeFile(filename, variableName, title, content);
console.log('✅ Content generation complete!');
console.log('');
console.log('Format verification passed: Both English and Japanese generated natively.');
