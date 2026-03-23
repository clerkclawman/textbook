const fs = require('fs');

// Read raw data
const march20 = JSON.parse(fs.readFileSync('news-raw-2026-03-20.json', 'utf8'));
const march21 = JSON.parse(fs.readFileSync('news-raw-2026-03-21.json', 'utf8'));

// Emojis
const emojis = ['🌏','🤔','🌍','🔍','⚡','👑','🎤','🎬','💥','🇯🇵','💔','🏛️','💧','🛢️','🏃','💣','📚','⚔️','💉','👶','🗳️','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🚶','📈','🏥','🎤','🕌','👁️','🐕','🇬🇧','🇮🇱','🚠','🍛','🎵','🎤','🇨🇺','🚢','🤝','⚓','🎓','🌑','🇱🇧','🇺🇦','🏰','💣','📖','📂','🇺🇸','🎯','🏠'];

// Discussion questions
const questions = [
  'What do you think about leaders making independent decisions?',
  'Do you trust when leaders say they are working together?',
  'What makes countries agree to peace?',
  'Have you ever heard news about government investigations?',
  'How do energy problems affect your life?',
  'What do you say to apologize for past mistakes?',
  'How do royal families handle scandals?',
  'Is it better to settle or go to court?',
  'What would your country do if attacked?',
  'How do international conflicts affect diplomacy?',
  'How do civilians suffer in wars?',
  'Do you think foreign military bases are necessary?',
  'What would you do if there was no clean water?',
  'How does an energy crisis affect the world?',
  'Have you ever felt betrayed by someone?',
  'What do you think about weapons used in war?',
  'Why do you think young people struggle to find jobs?',
  'What punishment should soldiers get for attacks?',
  'Would you wait in line for a vaccine?',
  'How can we protect children from abuse?',
  'Do you trust political parties plans?',
  'Would you support lower taxes?',
  'What is your favorite place to walk?',
  'How do interest rates affect you?',
  'What lessons did we learn from the pandemic?',
  'What should happen to stalkers?',
  'Should politicians support religious events?',
  'Should rich countries help poor ones?',
  'How do communities protect themselves?',
  'Do you prefer purebred or mixed dogs?',
  'What would you do if you disagreed with your leader?',
  'What should be done about settler violence?',
  'Have you ever been in an accident?',
  'How does food connect to politics?',
  'What music from other countries do you like?',
  'What would you do if your country was threatened?',
  'What do you think about military ships?',
  'Would your country help secure trade routes?',
  'What do you think about disasters at sea?',
  'How do you stay safe when traveling alone?',
  'Is it okay to make jokes about war?',
  'Would you leave your country for a better life?',
  'Can one leader end a war?',
  'Where does attention go in times of crisis?',
  'What makes someone a hero or villain?',
  'How do you protect schools from attacks?',
  'Do you believe conspiracy theories?',
  'How do you handle reputation risks?',
  'Why do countries continue fighting?',
  'What is your opinion on this news?'
];

function extractHeadlines(data) {
  const headlines = [];
  for (const [source, sourceData] of Object.entries(data.sources || {})) {
    if (sourceData.headlines) {
      for (const h of sourceData.headlines) {
        headlines.push(h.title);
        if (headlines.length >= 50) break;
      }
    }
    if (headlines.length >= 50) break;
  }
  return headlines.slice(0, 50);
}

// Simple Japanese translation
function translateToJapanese(text) {
  const translations = {
    'Israel': 'イスラエル', 'US': '米国', 'Iran': 'イラン', 'Netanyahu': 'ネタニヤフ',
    'Trump': 'トランプ', 'Japan': '日本', 'UK': '英国', 'China': '中国', 'India': 'インド',
    'Europe': 'ヨーロッパ', 'Cuba': 'キューバ', 'Russia': 'ロシア', 'Palestinian': 'パレスチナ',
    'Lebanon': 'レバノン', 'Spain': 'スペイン', 'Mexico': 'メキシコ', 'Norway': 'ノルウェー',
    'Chad': 'チャド', 'Sudan': 'スーダン', 'Cyprus': 'キプロス', 'Afghan': 'アフガン',
    'Qatar': 'カタール', 'India': 'インド', 'Indonesia': 'インドネシア', 'DR Congo': 'コンゴ民主共和国',
    'Rwanda': 'ルワンダ', 'war': '戦争', 'peace': '平和', 'attack': '攻撃', 'killed': '死亡',
    'arrest': '逮捕', 'court': '裁判', 'trial': '裁判', 'settle': '和解', 'meeting': '会談',
    'summit': '首脳会談', 'leader': '指導者', 'president': '大統領', 'prime minister': '首相',
    'king': '国王', 'crown princess': '王太子', 'energy': 'エネルギー', 'crisis': '危機',
    'oil': '石油', 'gas': 'ガス', 'price': '価格', 'high': '高い', 'economy': '経済',
    'trade': '貿易', 'military': '軍事', 'defense': '防衛', 'security': '安全保障',
    'intelligence': '情報', 'leak': '漏洩', 'investigation': '調査', 'FBI': 'FBI',
    'NATO': 'NATO', 'UN': '国連', 'refugee': '難民', 'vaccine': 'ワクチン', 'health': '健康',
    'hospital': '病院', 'doctor': '医師', 'patient': '患者', 'disease': '病気',
    'pandemic': 'パンデミック', 'virus': 'ウイルス', 'politics': '政治', 'election': '選挙',
    'campaign': 'キャンペーン', 'party': '党', 'government': '政府', 'law': '法律',
    'crime': '犯罪', 'police': '警察', 'victim': '犠牲者', 'accused': '容疑者', 'justice': '正義',
    'human rights': '人権', 'freedom': '自由', 'democracy': '民主主義', 'protest': '抗議',
    'strike': 'ストライキ', 'worker': '労働者', 'job': '仕事', 'employment': '雇用',
    'salary': '給料', 'tax': '税金', 'budget': '予算', 'spend': '支出', 'save': '節約',
    'invest': '投資', 'profit': '利益', 'loss': '損失', 'safe': '安全', 'danger': '危険',
    'risk': 'リスク', 'threat': '脅威', 'protect': '保護', 'privacy': 'プライバシー',
    'secret': '秘密', 'public': '公', 'private': '私', 'company': '会社', 'business': 'ビジネス',
    'industry': '産業', 'market': '市場', 'consumer': '消費者', 'service': 'サービス',
    'product': '製品', 'supply': '供給', 'demand': '需要', 'value': '価値', 'quality': '品質',
    'technology': '技術', 'science': '科学', 'research': '研究', 'university': '大学',
    'school': '学校', 'student': '学生', 'education': '教育', 'teacher': '先生',
    'learning': '学習', 'skill': 'スキル', 'training': '訓練', 'exam': '試験', 'test': 'テスト',
    'success': '成功', 'failure': '失敗', 'win': '勝利', 'lose': '敗北', 'sport': 'スポーツ',
    'team': 'チーム', 'player': '選手', 'coach': 'コーチ', 'fan': 'ファン', 'match': '試合',
    'race': 'レース', 'travel': '旅行', 'tourism': '観光', 'tourist': '観光客', 'vacation': '休暇',
    'city': '都市', 'town': '町', 'country': '国', 'nation': '国家', 'world': '世界',
    'global': '世界的な', 'international': '国際的な', 'local': '地元の', 'national': '国の',
    'community': 'コミュニティ', 'family': '家族', 'home': '家', 'house': '家', 'office': 'オフィス',
    'store': '店', 'restaurant': 'レストラン', 'music': '音楽', 'song': '歌', 'artist': 'アーティスト',
    'singer': '歌手', 'band': 'バンド', 'concert': 'コンサート', 'movie': '映画', 'film': '映画',
    'book': '本', 'novel': '小説', 'story': '物語', 'news': 'ニュース', 'media': 'メディア',
    'internet': 'インターネット', 'online': 'オンライン', 'computer': 'コンピュータ',
    'phone': '電話', 'app': 'アプリ', 'software': 'ソフトウェア', 'system': 'システム',
    'network': 'ネットワーク', 'data': 'データ', 'information': '情報', 'knowledge': '知識',
    'truth': '真実', 'money': 'お金', 'cash': '現金', 'dollar': 'ドル', 'yen': '円', 'euro': 'ユーロ',
    'pound': 'ポンド', 'fee': '料金', 'cost': '費用', 'expense': '経費', 'income': '収入',
    'poverty': '貧困', 'wealth': '富', 'rich': '豊かな', 'poor': '貧しい', 'development': '開発',
    'environment': '環境', 'climate': '気候', 'weather': '天気', 'temperature': '温度',
    'rain': '雨', 'snow': '雪', 'wind': '風', 'sun': '太陽', 'moon': '月', 'star': '星',
    'sky': '空', 'cloud': '雲', 'storm': '嵐', 'earth': '地球', 'fire': '火', 'water': '水',
    'air': '空気', 'land': '土地', 'sea': '海', 'river': '川', 'mountain': '山', 'forest': '森',
    'desert': '砂漠', 'island': '島', 'beach': 'ビーチ', 'road': '道路', 'street': '通り',
    'bridge': '橋', 'tunnel': 'トンネル', 'train': '列車', 'bus': 'バス', 'car': '車',
    'plane': '飛行機', 'ship': '船', 'boat': 'ボート', 'bicycle': '自転車', 'airport': '空港',
    'station': '駅', 'port': '港', 'hotel': 'ホテル', 'restaurant': 'レストラン', 'cafe': 'カフェ',
    'bar': 'バー', 'club': 'クラブ', 'theater': '劇場', 'cinema': '映画館', 'museum': '博物館',
    'park': '公園', 'garden': '庭', 'zoo': '動物園', 'library': '図書館', 'church': '教会',
    'temple': '寺院', 'mosque': 'モスク', 'hospital': '病院', 'clinic': 'クリニック',
    'pharmacy': '薬局', 'bank': '銀行', 'post office': '郵便局', 'police station': '警察署',
    'fire station': '消防署', 'school': '学校', 'university': '大学', 'college': 'カレッジ',
    'library': '図書館', 'gym': 'ジム', 'sports center': 'スポーツセンター', 'pool': 'プール',
    'beach': 'ビーチ', 'mountain': '山', 'forest': '森', 'lake': '湖', 'river': '川',
    'ocean': '海', 'sea': '海', 'island': '島', 'desert': '砂漠', 'valley': '谷', 'canyon': '峡谷',
    'waterfall': '滝', 'hot spring': '温泉', 'ski resort': 'スキーリゾート', 'camping site': 'キャンプ場',
    'hiking trail': 'ハイキング道', 'nature reserve': '自然保護区', 'national park': '国立公園',
    'wildlife': '野生生物', 'animal': '動物', 'bird': '鳥', 'fish': '魚', 'insect': '昆虫',
    'plant': '植物', 'tree': '木', 'flower': '花', 'grass': '草', 'fruit': '果物', 'vegetable': '野菜',
    'meat': '肉', 'fish': '魚', 'bread': 'パン', 'rice': '米', 'noodle': '麺', 'soup': 'スープ',
    'salad': 'サラダ', 'sandwich': 'サンドイッチ', 'pizza': 'ピザ', 'burger': 'ハンバーガー',
    'sushi': '寿司', 'tempura': '天ぷら', 'ramen': 'ラーメン', 'curry': 'カレー', 'stew': 'シチュー',
    'steak': 'ステーキ', 'chicken': '鶏肉', 'beef': '牛肉', 'pork': '豚肉', 'seafood': '海鮮',
    'dairy': '乳製品', 'cheese': 'チーズ', 'butter': 'バター', 'milk': '牛乳', 'yogurt': 'ヨーグルト',
    'egg': '卵', 'oil': '油', 'salt': '塩', 'sugar': '砂糖', 'spice': 'スパイス', 'herb': 'ハーブ',
    'sauce': 'ソース', 'dressing': 'ドレッシング', 'condiment': '調味料', 'beverage': '飲料',
    'juice': 'ジュース', 'soda': 'ソーダ', 'coffee': 'コーヒー', 'tea': 'お茶', 'water': '水',
    'beer': 'ビール', 'wine': 'ワイン', 'whiskey': 'ウイスキー', 'vodka': 'ウォッカ', 'cocktail': 'カクテル',
    'dessert': 'デザート', 'cake': 'ケーキ', 'pie': 'パイ', 'cookie': 'クッキー', 'chocolate': 'チョコレート',
    'ice cream': 'アイスクリーム', 'candy': 'キャンディー', 'gum': 'ガム', 'snack': 'スナック',
    'breakfast': '朝食', 'lunch': '昼食', 'dinner': '夕食', 'meal': '食事', 'appetizer': '前菜',
    'main course': 'メインディッシュ', 'side dish': 'サイドディッシュ', 'drink': '飲み物',
    'food': '食べ物', 'recipe': 'レシピ', 'cooking': '料理', 'baking': 'ベーキング', 'grilling': 'グリル',
    'frying': 'フライ', 'boiling': '茹でる', 'steaming': '蒸す', 'roasting': 'ロースト', 'sauteing': '炒める'
  };
  
  let translated = text;
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    const regex = new RegExp(key, 'gi');
    translated = translated.replace(regex, translations[key]);
  }
  
  // Simplify the translation - just replace key words
  return translated;
}

function generateNewsContent(rawData) {
  const headlines = extractHeadlines(rawData);
  const lines = [];
  
  for (let i = 0; i < 50; i++) {
    const headline = headlines[i] || `News item ${i + 1}`;
    const emoji = emojis[i % emojis.length];
    const question = questions[i % questions.length];
    const jpHeadline = translateToJapanese(headline);
    
    // Line 1: English with emoji
    lines.push(`${i + 1}. ${emoji} ${headline} - ${question}`);
    // Line 2: Japanese with leading spaces (2 spaces for alignment)
    lines.push(`  ${jpHeadline} - ${question}についてどう思いますか？`);
  }
  
  return lines.join('\n');
}

// Generate March 20
const content20 = generateNewsContent(march20);
const file20 = `var news20260320 = [ { title: "March 20, 2026: World News & Headlines", content: \`${content20}\` } ];`;
fs.writeFileSync('news-2026-03-20.js', file20);

// Generate March 21
const content21 = generateNewsContent(march21);
const file21 = `var news20260321 = [ { title: "March 21, 2026: World News & Headlines", content: \`${content21}\` } ];`;
fs.writeFileSync('news-2026-03-21.js', file21);

console.log('Files generated successfully!');
console.log('');
console.log('First 4 lines of March 20:');
const lines20 = content20.split('\n');
for (let i = 0; i < 4; i++) {
  console.log(`Line ${i + 1}: ${lines20[i]}`);
}
