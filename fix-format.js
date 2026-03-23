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

// Simple Japanese translation function
function translateToJapanese(text) {
  const translations = {
    'Israel': 'イスラエル', 'US': '米国', 'Iran': 'イラン', 'Netanyahu': 'ネタニヤフ',
    'Trump': 'トランプ', 'Japan': '日本', 'UK': '英国', 'China': '中国', 'India': 'インド',
    'Africa': 'アフリカ', 'Europe': 'ヨーロッパ', 'Cuba': 'キューバ', 'Russia': 'ロシア',
    'Palestinian': 'パレスチナ', 'Lebanon': 'レバノン', 'Germany': 'ドイツ', 'France': 'フランス',
    'Spain': 'スペイン', 'Italy': 'イタリア', 'Canada': 'カナダ', 'Australia': 'オーストラリア',
    'Korea': '韓国', 'Indonesia': 'インドネシア', 'Pakistan': 'パキスタン', 'Turkey': 'トルコ',
    'Egypt': 'エジプト', 'South Africa': '南アフリカ', 'Mexico': 'メキシコ', 'Brazil': 'ブラジル',
    'DR Congo': 'コンゴ民主共和国', 'Rwanda': 'ルワンダ', 'Chad': 'チャド', 'Sudan': 'スーダン',
    'Cyprus': 'キプロス', 'Afghan': 'アフガン', 'Qatar': 'カタール', 'Swiss': 'スイス',
    'Amsterdam': 'アムステルダム', 'Barcelona': 'バルセロナ', 'Nigeria': 'ナイジェリア',
    'Kenya': 'ケニア', 'West Bank': '西岸', 'Israeli': 'イスラエルの', 'settlers': '入植者',
    'cluster bomb': 'クラスター爆弾', 'meningitis': '髄膜炎', 'vaccination': '予防接種',
    'Myleene Klass': 'マイリーン・クラス', 'Badenoch': 'バデノック', 'Tories': '保守党',
    'Reform': 'リフォーム党', 'Scotland': 'スコットランド', 'Farage': 'ファラージ',
    'Holyrood': 'ホーリールード', 'King Charles': 'チャールズ国王', 'coastal path': '海岸道',
    'interest rates': '金利', 'NHS': 'NHS', 'Covid': 'コロナ', 'Gerry Adams': 'ゲリー・アダムス',
    'IRA': 'IRA', 'Comic Relief': 'コミック・リリーフ', 'Traitors': '裏切り者',
    'Idris Elba': 'イドリス・エルバ', 'energy bill': 'エネルギー請求書', 'MI5': 'MI5',
    'Juan Joseph': 'フアン・ジョゼフ', 'Eid': 'イード', 'Birmingham': 'バーミンガム',
    'Hillsborough Law': 'ヒルズボロ法', 'IEA': 'IEA', 'Arlington': 'アーリントン',
    '三重': '三重県', 'Shin-Meishin': '新名神', '富士山': '富士山', 'Zelensky': 'ゼレンスキー',
    'peace plan': '和平案', 'NATO': 'NATO', 'Tehran': 'テヘラン', 'wrestler': 'レスラー',
    'execution': '処刑', 'Middle East': '中東', 'Norway': 'ノルウェー', 'Epstein': 'エプスタイン',
    'Marines': '海兵隊', 'Singapore': 'シンガポール', 'Pearl Harbor': '真珠湾',
    'cable car': 'ケーブルカー', 'gondola': 'ゴンドラ', 'ski resort': 'スキーリゾート',
    'samosas': 'サモサ', 'chai': 'チャイ', 'Rick Ross': 'リック・ロス', 'Cuban': 'キューバ人',
    'US warship': '米軍艦', 'US allies': '米同盟国', 'Russian fuel tanker': 'ロシア燃料タンカー',
    'Italian': 'イタリア', 'Prince Harry': 'ヘンリー王子', 'Mandelson': 'マンデソン',
    'Ukraine': 'ウクライナ', 'war hero': '戦争英雄', 'tyrant': '独裁者',
    'explosion': '爆発', 'conspiracy': '陰謀', 'British PM': '英首相', 'weakened': '弱体化した'
  };
  
  let translated = text;
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    const regex = new RegExp(key, 'gi');
    translated = translated.replace(regex, translations[key]);
  }
  
  // Simplify: remove most English words and keep Japanese
  // For a real translation, we'd need a proper translation API
  // Here we'll create a simplified Japanese version
  translated = translated
    .replace(/ didn't drag /g, 'は巻き込まなかったと')
    .replace(/ says$/g, ' says')
    .replace(/ says -/g, ' -')
    .replace(/ Are /g, 'は')
    .replace(/ aligned on /g, '連携している？')
    .replace(/ war\?/g, '戦争？')
    .replace(/ Deciphering /g, '解読：')
    .replace(/ after /g, '後')
    .replace(/ attacks/g, '攻撃')
    .replace(/ agree to ease tensions/g, '緊張緩和で合意')
    .replace(/ talks/g, '会談')
    .replace(/ investigated by/g, '調査される')
    .replace(/ over alleged/g, 'で')
    .replace(/ leaks/g, '情報漏洩')
    .replace(/ sleepwalked into/g, 'うっかり陥った')
    .replace(/ yet another/g, '別の')
    .replace(/ crisis/g, '危機')
    .replace(/ welcomes/g, '歓迎')
    .replace(/ invite/g, '招待')
    .replace(/ comments/g, 'コメント')
    .replace(/ crown princess/g, '王太子')
    .replace(/ to address/g, 'について発言')
    .replace(/ links/g, '関連')
    .replace(/ trial closes/g, '裁判終了')
    .replace(/ and accusers/g, 'と告訴者')
    .replace(/ settle before/g, '前に和解')
    .replace(/ civil trial/g, '民事裁判')
    .replace(/ warns/g, '警告')
    .replace(/ it will retaliate/g, '報復')
    .replace(/ drone strike/g, 'ドローン攻撃')
    .replace(/ kills/g, '死亡')
    .replace(/ conflict looms large/g, '紛争が影を落とす')
    .replace(/ meeting with/g, '会談')
    .replace(/ PM/g, '首相')
    .replace(/ killed/g, '死亡')
    .replace(/ during/g, '中')
    .replace(/ missile attack/g, 'ミサイル攻撃')
    .replace(/ beauty salon/g, '美容院')
    .replace(/ calls for/g, '要求')
    .replace(/ frank discussion/g, '率直な議論')
    .replace(/ colonial/g, '植民地')
    .replace(/ bases/g, '基地')
    .replace(/ say/g, '主張')
    .replace(/ exploiting/g, '悪用')
    .replace(/ water crisis/g, '水道危機')
    .replace(/ causing/g, '引き起こしている')
    .replace(/ can.*withstand/g, '耐えられるか')
    .replace(/ evacuees/g, '避難民')
    .replace(/ in limbo/g, '行き場を失い')
    .replace(/ accuse.*of betrayal/g, '裏切りを告発')
    .replace(/ visits scene/g, '現場を訪問')
    .replace(/ strike on/g, '攻撃')
    .replace(/ young are more educated/g, '若者はより教育されている')
    .replace(/ So why/g, 'しかしなぜ')
    .replace(/ jobless/g, '失業している')
    .replace(/ detains/g, '拘束')
    .replace(/ soldiers over/g, '兵士が')
    .replace(/ acid attack/g, '酸攻撃')
    .replace(/ activist/g, '活動家')
    .replace(/ queues for jabs/g, 'ワクチン接種の行列')
    .replace(/ scheme expanded/g, '計画拡大')
    .replace(/ children as young as/g, 'わずか年齢の')
    .replace(/ abused/g, '虐待')
    .replace(/ mini-marts/g, 'ミニマート')
    .replace(/ launches election campaign/g, '選挙戦開始')
    .replace(/ vows to cut/g, '削減を約束')
    .replace(/ income tax/g, '所得税')
    .replace(/ below.*rate/g, '以下')
    .replace(/ opens.*path/g, '道を開設')
    .replace(/ ready to raise/g, '引き上げ準備')
    .replace(/ persists/g, '続く場合')
    .replace(/ Patients harmed/g, '患者が被害')
    .replace(/ brought.*close to collapse/g, '崩壊寸前')
    .replace(/ inquiry finds/g, '調査で判明')
    .replace(/ Hospital order/g, '病院命令')
    .replace(/ man who stalked/g, 'ストーキングした男')
    .replace(/ backs.*in row/g, '支持')
    .replace(/ Muslim prayer event/g, 'イスラム祈りイベント')
    .replace(/ reveals aid priorities/g, '援助優先事項を明らかに')
    .replace(/ major cuts to budget/g, '予算大幅削減')
    .replace(/ accused of spying/g, 'スパイ容疑')
    .replace(/ Jewish community/g, 'ユダヤコミュニティ')
    .replace(/ 'Designer'.*owners/g, 'デザイナー犬の飼い主')
    .replace(/ problem behaviours/g, '行動問題')
    .replace(/ vets warn/g, '獣医が警告')
    .replace(/ does not.*agree/g, '同意しない')
    .replace(/ hit back at/g, '反撃')
    .replace(/ criticism of/g, '批判')
    .replace(/ response to/g, '対応')
    .replace(/ sexual assaulted/g, '性的暴行')
    .replace(/ by Israeli settlers/g, 'イスラエル入植者に')
    .replace(/ one person dead/g, '1人死亡')
    .replace(/ crashes down mountain/g, '山に転落')
    .replace(/ chokehold on/g, '封鎖')
    .replace(/ threatens/g, '脅かす')
    .replace(/ beloved/g, '好きな')
    .replace(/ was a.*and/g, 'はで')
    .replace(/ public face/g, '公の顔')
    .replace(/ killing could prolong/g, '殺害が長期化か')
    .replace(/ promises.*resistance/g, '抵抗を約束')
    .replace(/ any.*attempt to control/g, '支配の試み')
    .replace(/ island/g, '島')
    .replace(/ believed to be carrying/g, '運ぶとされる')
    .replace(/ additional Marines/g, '追加海兵隊')
    .replace(/ tracked off/g, '追跡')
    .replace(/ balk at/g, 'ためらう')
    .replace(/ appeal to help/g, '要請')
    .replace(/ secure.*Strait/g, '海峡確保')
    .replace(/ Ticking time bomb/g, '時限爆弾')
    .replace(/ Stricken.*tanker/g, '損傷タンカー')
    .replace(/ drifts near/g, '近くを漂流')
    .replace(/ Body found/g, '遺体発見')
    .replace(/ amid search for/g, '捜索中')
    .replace(/ college student/g, '大学生')
    .replace(/ makes.*joke/g, '冗談')
    .replace(/ in front of/g, 'の前で')
    .replace(/ facing no food/g, '食料がない')
    .replace(/ water or electricity/g, '水や電気')
    .replace(/ flee to other countries/g, '他国へ逃亡')
    .replace(/ for a better life/g, 'より良い生活のために')
    .replace(/ says.*can end war/g, '戦争を終結できると')
    .replace(/ worries about.*losing/g, '失うことを懸念')
    .replace(/ as global attention shifts/g, '世界の関心がシフト')
    .replace(/ Returned home as war hero/g, '戦争英雄として帰国')
    .replace(/ Behind closed doors/g, '裏で')
    .replace(/ became a tyrant/g, '独裁者になった')
    .replace(/ rocks.*in what/g, 'で爆発')
    .replace(/ targeted attack against/g, '標的型攻撃')
    .replace(/ New.*book/g, '新本')
    .replace(/ deranged conspiracy/g, '常軌を逸した陰謀')
    .replace(/ spokesperson says/g, 'スポークスマン')
    .replace(/ was warned of/g, '警告')
    .replace(/ reputational risk over/g, '評判リスク')
    .replace(/ ties to/g, 'との関係')
    .replace(/ files show/g, '文書で判明')
    .replace(/ Why.*insisting on prolonging/g, 'なぜ長期化を主張するか')
    .replace(/ weakened.*is/g, '弱体化したは')
    .replace(/ the war/g, '戦争');
  
  return translated;
}

function generateNewsContent(date, rawData) {
  const headlines = extractHeadlines(rawData);
  let content = '';
  
  for (let i = 0; i < 50; i++) {
    const headline = headlines[i] || `News item ${i + 1}`;
    const emoji = emojis[i % emojis.length];
    const question = questions[i % questions.length];
    const jpHeadline = translateToJapanese(headline);
    
    // TWO-LINE FORMAT with actual newline character
    const englishLine = `${i + 1}. ${emoji} ${headline} - ${question}`;
    const japaneseLine = `  ${jpHeadline} - ${question}についてどう思いますか？`;
    
    if (i === 0) {
      content = englishLine + '\n' + japaneseLine;
    } else {
      content = content + '\n' + englishLine + '\n' + japaneseLine;
    }
  }
  
  return content;
}

// Generate March 20
const content20 = generateNewsContent('2026-03-20', march20);
const news20260320 = 'var news20260320 = [ { title: "March 20, 2026: World News & Headlines", content: `' + content20 + '` } ];';
fs.writeFileSync('news-2026-03-20.js', news20260320);

// Generate March 21
const content21 = generateNewsContent('2026-03-21', march21);
const news20260321 = 'var news20260321 = [ { title: "March 21, 2026: World News & Headlines", content: `' + content21 + '` } ];';
fs.writeFileSync('news-2026-03-21.js', news20260321);

console.log('Files generated with CORRECT TWO-LINE format!');
console.log('First 3 items of March 20:');
console.log(content20.split('\n').slice(0, 6).join('\n'));
