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

// Simple Japanese translation function - replace common English words with Japanese
function translateToJapanese(text) {
  const translations = {
    'Israel': 'イスラエル', 'US': '米国', 'Iran': 'イラン', 'Netanyahu': 'ネタニヤフ',
    'Trump': 'トランプ', 'Japan': '日本', 'UK': '英国', 'China': '中国', 'India': 'インド',
    'Africa': 'アフリカ', 'Europe': 'ヨーロッパ', 'Cuba': 'キューバ', 'Russia': 'ロシア',
    'Palestinian': 'パレスチナ', 'Lebanon': 'レバノン', 'Germany': 'ドイツ', 'France': 'フランス',
    'Spain': 'スペイン', 'Italy': 'イタリア', 'Canada': 'カナダ', 'Australia': 'オーストラリア',
    'Korea': '韓国', 'Indonesia': 'インドネシア', 'Pakistan': 'パキスタン', 'Turkey': 'トルコ',
    'Egypt': 'エジプト', 'South Africa': '南アフリカ', 'Mexico': 'メキシコ', 'Brazil': 'ブラジル',
    'war': '戦争', 'peace': '平和', 'attack': '攻撃', 'killed': '死亡', 'dead': '死亡',
    'death': '死', 'arrest': '逮捕', 'arrested': '逮捕された', 'court': '裁判', 'trial': '裁判',
    'settle': '和解', 'settlement': '和解', 'meeting': '会談', 'summit': '首脳会談',
    'leader': '指導者', 'president': '大統領', 'prime minister': '首相', 'king': '国王',
    'queen': '女王', 'crown princess': '王太子', 'energy': 'エネルギー', 'crisis': '危機',
    'oil': '石油', 'gas': 'ガス', 'price': '価格', 'prices': '価格', 'high': '高い',
    'low': '低い', 'increase': '上昇', 'decrease': '下降', 'rise': '上昇', 'fall': '下落',
    'economy': '経済', 'economic': '経済的な', 'trade': '貿易', 'sanctions': '制裁',
    'military': '軍事', 'army': '軍隊', 'navy': '海軍', 'air force': '空軍', 'defense': '防衛',
    'security': '安全保障', 'intelligence': '情報', 'spy': 'スパイ', 'spying': 'スパイ活動',
    'leak': '漏洩', 'investigation': '調査', 'investigated': '調査される', 'FBI': 'FBI',
    'CIA': 'CIA', 'NATO': 'NATO', 'UN': '国連', 'refugee': '難民', 'evacuee': '避難民',
    'camp': 'キャンプ', 'border': '国境', 'borders': '国境', 'immigration': '移民',
    'migration': '移住', 'vaccine': 'ワクチン', 'vaccination': '予防接種', 'health': '健康',
    'hospital': '病院', 'doctor': '医師', 'patient': '患者', 'disease': '病気',
    'pandemic': 'パンデミック', 'virus': 'ウイルス', 'infection': '感染', 'politics': '政治',
    'election': '選挙', 'campaign': 'キャンペーン', 'party': '党', 'government': '政府',
    'law': '法律', 'crime': '犯罪', 'criminal': '犯罪者', 'police': '警察', 'prison': '刑務所',
    'jail': '刑務所', 'victim': '犠牲者', 'accused': '容疑者', 'suspect': '容疑者',
    'witness': '証人', 'evidence': '証拠', 'judge': '裁判官', 'lawyer': '弁護士',
    'justice': '正義', 'human rights': '人権', 'freedom': '自由', 'democracy': '民主主義',
    'democratic': '民主的な', 'authoritarian': '独裁的な', 'dictator': '独裁者',
    'rebel': '反乱軍', 'rebellion': '反乱', 'revolution': '革命', 'protest': '抗議',
    'demonstration': 'デモ', 'strike': 'ストライキ', 'worker': '労働者', 'workers': '労働者',
    'union': '組合', 'labor': '労働', 'job': '仕事', 'jobs': '仕事', 'employment': '雇用',
    'unemployment': '失業', 'salary': '給料', 'wage': '賃金', 'income': '収入',
    'poverty': '貧困', 'wealth': '富', 'rich': '豊かな', 'poor': '貧しい',
    'development': '開発', 'developed': '開発された', 'developing': '発展途上の',
    'technology': '技術', 'technological': '技術的な', 'science': '科学',
    'scientific': '科学的な', 'research': '研究', 'study': '研究', 'university': '大学',
    'school': '学校', 'student': '学生', 'education': '教育', 'teacher': '先生',
    'learning': '学習', 'skill': 'スキル', 'skills': 'スキル', 'training': '訓練',
    'course': 'コース', 'class': 'クラス', 'lesson': 'レッスン', 'exam': '試験',
    'test': 'テスト', 'grade': '成績', 'score': 'スコア', 'result': '結果',
    'success': '成功', 'failure': '失敗', 'win': '勝利', 'winning': '勝利', 'lose': '敗北',
    'losing': '敗北', 'champion': 'チャンピオン', 'championship': '選手権',
    'tournament': 'トーナメント', 'competition': '競争', 'contest': 'コンテスト',
    'game': 'ゲーム', 'sport': 'スポーツ', 'sports': 'スポーツ', 'athlete': 'アスリート',
    'team': 'チーム', 'player': '選手', 'coach': 'コーチ', 'fan': 'ファン',
    'supporter': 'サポーター', 'match': '試合', 'race': 'レース', 'run': '走る',
    'running': 'ランニング', 'walk': '歩く', 'walking': 'ウォーキング', 'swim': '泳ぐ',
    'swimming': '水泳', 'bike': '自転車', 'cycling': 'サイクリング', 'train': '列車',
    'bus': 'バス', 'car': '車', 'plane': '飛行機', 'airplane': '飛行機', 'ship': '船',
    'boat': 'ボート', 'travel': '旅行', 'tourism': '観光', 'tourist': '観光客',
    'vacation': '休暇', 'holiday': '休暇', 'beach': 'ビーチ', 'mountain': '山',
    'forest': '森', 'river': '川', 'lake': '湖', 'ocean': '海', 'sea': '海', 'island': '島',
    'city': '都市', 'town': '町', 'village': '村', 'country': '国', 'nation': '国家',
    'world': '世界', 'global': '世界的な', 'international': '国際的な', 'local': '地元の',
    'national': '国の', 'regional': '地域の', 'community': 'コミュニティ',
    'neighborhood': '地域', 'family': '家族', 'home': '家', 'house': '家',
    'building': '建物', 'office': 'オフィス', 'factory': '工場', 'store': '店',
    'shop': '店', 'market': '市場', 'mall': 'モール', 'restaurant': 'レストラン',
    'cafe': 'カフェ', 'bar': 'バー', 'club': 'クラブ', 'theater': '劇場', 'cinema': '映画館',
    'movie': '映画', 'film': '映画', 'music': '音楽', 'song': '歌', 'artist': 'アーティスト',
    'singer': '歌手', 'band': 'バンド', 'concert': 'コンサート', 'show': 'ショー',
    'performance': 'パフォーマンス', 'act': '演技', 'actor': '俳優', 'actress': '女優',
    'director': '監督', 'producer': 'プロデューサー', 'writer': '作家', 'author': '著者',
    'book': '本', 'novel': '小説', 'story': '物語', 'news': 'ニュース', 'media': 'メディア',
    'press': 'プレス', 'journalist': 'ジャーナリスト', 'reporter': '記者', 'article': '記事',
    'website': 'ウェブサイト', 'internet': 'インターネット', 'online': 'オンライン',
    'digital': 'デジタル', 'computer': 'コンピュータ', 'phone': '電話', 'mobile': '携帯電話',
    'smartphone': 'スマートフォン', 'app': 'アプリ', 'software': 'ソフトウェア',
    'hardware': 'ハードウェア', 'system': 'システム', 'network': 'ネットワーク',
    'data': 'データ', 'information': '情報', 'knowledge': '知識', 'wisdom': '知恵',
    'truth': '真実', 'lie': '嘘', 'false': '偽', 'real': '本当の', 'fake': '偽',
    'scam': '詐欺', 'fraud': '詐欺', 'corruption': '腐敗', 'bribe': '賄賂', 'money': 'お金',
    'cash': '現金', 'currency': '通貨', 'dollar': 'ドル', 'yen': '円', 'euro': 'ユーロ',
    'pound': 'ポンド', 'tax': '税金', 'fee': '料金', 'cost': '費用', 'expense': '経費',
    'budget': '予算', 'spend': '支出', 'save': '節約', 'spending': '支出', 'saving': '貯金',
    'invest': '投資', 'investment': '投資', 'profit': '利益', 'loss': '損失', 'gain': '利益',
    'protection': '保護', 'safe': '安全', 'danger': '危険', 'risk': 'リスク',
    'threat': '脅威', 'defend': '防衛', 'protect': '保護', 'security': 'セキュリティ',
    'privacy': 'プライバシー', 'secret': '秘密', 'confidential': '機密', 'public': '公',
    'private': '私', 'personal': '個人的な', 'individual': '個人の', 'group': 'グループ',
    'organization': '組織', 'company': '会社', 'corporation': '企業', 'business': 'ビジネス',
    'industry': '産業', 'consumer': '消費者', 'customer': '顧客', 'client': 'クライアント',
    'service': 'サービス', 'product': '製品', 'goods': '商品', 'supply': '供給',
    'demand': '需要', 'value': '価値', 'quality': '品質', 'quantity': '数量',
    'amount': '量', 'number': '数', 'count': '数', 'total': '合計', 'average': '平均',
    'percentage': '割合', 'percent': '％', 'ratio': '比率', 'rate': '率', 'level': 'レベル',
    'degree': '度', 'extent': '程度', 'size': 'サイズ', 'scale': '規模', 'range': '範囲',
    'scope': '範囲', 'limit': '制限', 'boundary': '境界', 'edge': '端', 'center': '中心',
    'middle': '真ん中', 'top': 'トップ', 'bottom': 'ボトム', 'first': '最初', 'last': '最後',
    'next': '次', 'previous': '前', 'current': '現在の', 'past': '過去', 'future': '未来',
    'present': '現在', 'today': '今日', 'tomorrow': '明日', 'yesterday': '昨日', 'now': '今',
    'then': 'その時', 'DR Congo': 'コンゴ民主共和国', 'Rwanda': 'ルワンダ', 'Chad': 'チャド',
    'Sudan': 'スーダン', 'Cyprus': 'キプロス', 'Afghan': 'アフガン', 'Qatar': 'カタール',
    'Israel': 'イスラエル', 'Swiss': 'スイス', 'Amsterdam': 'アムステルダム',
    'Barcelona': 'バルセロナ', 'Nigeria': 'ナイジェリア', 'Kenya': 'ケニア',
    'West Bank': '西岸', 'Israeli': 'イスラエルの', 'settlers': '入植者',
    'cluster bomb': 'クラスター爆弾', 'meningitis': '髄膜炎', 'vaccination': '予防接種',
    'martial': '軍事', 'stalker': 'ストーカー', 'Muslim': 'イスラム', 'prayer': '祈り',
    'Jewish': 'ユダヤ', 'synagogue': 'シナゴーグ', 'doodle': 'ドゥードル',
    'designer': 'デザイナー', 'NHS': 'NHS', 'Covid': 'コロナ', 'pandemic': 'パンデミック',
    'Badenoch': 'バデノック', 'Tories': '保守党', 'Reform': 'リフォーム党', 'Scotland': 'スコットランド',
    'Farage': 'ファラージ', 'Holyrood': 'ホーリールード', 'King Charles': 'チャールズ国王',
    'coastal path': '海岸道', 'interest rates': '金利', 'Myleene Klass': 'マイリーン・クラス',
    'prison': '刑務所', 'hospital order': '病院命令', 'aid': '援助', 'spy': 'スパイ',
    'Iranian': 'イラン人', 'Faslane': 'ファスレーン', 'nuclear': '核', 'submarines': '潜水艦',
    'Gerry Adams': 'ゲリー・アダムス', 'IRA': 'IRA', 'bombings': '爆撃', 'Comic Relief': 'コミック・リリーフ',
    'Traitors': '裏切り者', 'Idris Elba': 'イドリス・エルバ', 'energy bill': 'エネルギー請求書',
    'Cornwall Insight': 'コーンウォール・インサイト', 'MI5': 'MI5', 'contractor': '請負業者',
    'Juan Joseph': 'フアン・ジョゼフ', 'Eid': 'イード', 'Birmingham': 'バーミンガム',
    'Small Heath Park': 'スモール・ヒース・パーク', 'Hillsborough Law': 'ヒルズボロ法',
    'lab-grown': '実験室で成長した', 'food pipe': '食道', 'highway': '高速道路',
    'speed limits': '速度制限', 'IEA': 'IEA', 'oil consumption': '石油消費',
    'consultation': '相談', 'desk': '窓口', 'Arlington': 'アーリントン', 'cemetery': '墓地',
    'flowers': '花', '三重': '三重県', 'Shin-Meishin': '新名神', 'truck': 'トラック',
    '富士山': '富士山', 'ash': '灰', 'railway': '鉄道', 'planned suspension': '計画運休',
    'high school baseball': '高校野球', 'Spring Tournament': '春の大会', 'Zelensky': 'ゼレンスキー',
    'peace plan': '和平案', 'NATO': 'NATO', 'cowards': '臆病者', 'Strait of Hormuz': 'ホルムズ海峡',
    'Tehran': 'テヘラン', 'wrestler': 'レスラー', 'execution': '処刑', 'Day 20': '20日目',
    'Middle East': '中東', 'Norway': 'ノルウェー', 'manipulated': '操作された',
    'deceived': '欺かれた', 'Epstein': 'エプスタイン', 'Marines': '海兵隊',
    'Singapore': 'シンガポール', 'Pearl Harbor': '真珠湾', 'joke': '冗談',
    'cable car': 'ケーブルカー', 'gondola': 'ゴンドラ', 'ski resort': 'スキーリゾート',
    'samosas': 'サモサ', 'chai': 'チャイ', 'Rick Ross': 'リック・ロス', 'Cuban': 'キューバ人',
    'impregnable': '堅固な', 'resistance': '抵抗', 'US warship': '米軍艦',
    'US allies': '米同盟国', 'balk': 'ためらう', 'appeal': '要請', 'secure': '確保',
    'Russian fuel tanker': 'ロシア燃料タンカー', 'Italian': 'イタリア', 'drifts': '漂流',
    'American college student': '米人大学生', 'Prince Harry': 'ヘンリー王子',
    'conspiracy': '陰謀', 'spokesperson': 'スポークスマン', 'Mandelson': 'マンデソン',
    'reputational risk': '評判リスク', 'files': '文書', 'weakened': '弱体化した',
    'insisting': '主張', 'prolonging': '長期化', 'Ukraine': 'ウクライナ', 'attention': '注目',
    'shifts': 'シフト', 'war hero': '戦争英雄', 'tyrant': '独裁者', 'behind closed doors': '裏で',
    'explosion': '爆発', 'rocks': '揺るがす', 'targeted attack': '標的型攻撃',
    'deranged': '常軌を逸した', 'British PM': '英首相', 'warned': '警告',
    'ties': '関係', 'why': 'なぜ', 'prolonging': '長期化', 'reason': '理由'
  };
  
  let translated = text;
  // Sort keys by length (descending) to match longer phrases first
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    const regex = new RegExp(key, 'gi');
    translated = translated.replace(regex, translations[key]);
  }
  
  return translated;
}

