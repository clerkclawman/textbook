// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 13, 2026",
            content: `📰 "No sign of larger hantavirus outbreak, says UN health agency" — What should people know about this?
「国連保健機関、大規模なハンタウイルス感染拡大の兆候はなしと発表」— これについて人々は何を知っておくべきでしょうか？
📰 "Trump says Iran ceasefire is on 'massive life support'" — Do you agree with this?
「トランプ氏、イラン停戦は「瀕死の状態」と発言」— あなたはこれに賛成ですか？
📰 "Lebanon says two paramedics among 13 killed in Israeli strikes" — Do you agree with this?
「レバノン、イスラエル軍の攻撃で死亡した13人の中に救急隊員2人含まれると発表」— あなたはこれに賛成ですか？
📰 "Zelensky's ex-chief of staff in court as Ukraine corruption probe escalates" — How will this change our lives?
「ウクライナ汚職捜査が拡大、ゼレンスキー前首席補佐官が法廷へ」— これは私たちの生活をどのように変えるのでしょうか？
📰 "US inflation jumps to 3.8% as energy costs surge from Iran war" — Should we rely less on oil?
「米国のインフレ率が3.8%に急上昇、イラン戦争によるエネルギーコスト高騰が原因」— 私たちは石油への依存を減らすべきだろうか？
📰 "South Africa's top court bars repeat asylum applications" — How will this change our lives?
「南アフリカの最高裁判所が、難民申請の繰り返しを禁止する判決を下した。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Dali ship operator charged over deadly  Baltimore bridge collapse" — Is this good or bad news?
「貨物船「ダリ」の運航会社が、致命的なボルチモア橋崩落事故で起訴された。」— これは良い知らせなのか、それとも悪い知らせなのか。
📰 "eBay rejects $55.5bn offer from GameStop" — What are the consequences?
「eBayが、GameStopからの555億ドルの買収提案を拒否した。」— その結果、何が起こるのだろうか。
📰 "Uganda's president sworn in for record seventh term" — How does this affect the country?
「ウガンダの大統領が、記録となる7期目の就任宣誓を行った。」— これは国にどのような影響を与えるのだろうか。
📰 "EU needs to delay social media access for children - von der" — What should be done about this?
「EUは、子どもがソーシャルメディアにアクセスするのを遅らせる必要があると、フォン・デア・ライエン氏が述べた。」— これに対して、何が行われるべきだろうか？
📰 "Snack giant switches to black and white packaging as Iran war hits" — How can we prevent conflicts?
「イラン戦争の影響で、お菓子大手がパッケージを白黒に変更」— どうすれば紛争を防ぐことができるだろうか。
📰 "Texas accuses Netflix of spying on users, including children" — Would you watch this?
「テキサス州がNetflixを、子どもを含むユーザーのスパイ行為で告発」— あなたはこれを見ますか？
📰 "People smuggler whose network is responsible for more than half of all" — What's the most important part?
「密航業者のネットワークが、全体の半数以上を占めている」— 最も重要な部分は何ですか？
📰 "Labour could force Netflix and Amazon Prime subscribers 'to pay TV licence" — Would you watch this?
「労働党がNetflixやAmazon Primeの加入者にテレビ受信料を強制する可能性」— あなたはこれを見ますか？
📰 "Israel's government is expected to collapse over ultra-Orthodox military draft" — How does this affect the country?
「イスラエル政府、超正統派ユダヤ教徒の兵役問題で崩壊の見通し」— これは国にどのような影響を与えるのだろうか。
📰 "Trump heads to China for state visit. And, how the war in" — How can we prevent conflicts?
「トランプ氏が中国へ国賓訪問に向かう。そして、戦争はどのように」— どうすれば紛争を防ぐことができるだろうか。
📰 "Kuwait says Iran attacked an island where China is helping to build" — How will this change our lives?
「クウェートは、中国が建設を支援している島をイランが攻撃したと発表した。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "As Trump goes to China, what do Americans say about tariffs, Iran" — Do you agree with this?
「トランプ氏が中国へ向かう中、アメリカ人は関税やイランについて何と言っているのか？」— あなたはこれに賛成ですか？
📰 "Israel to hold military tribunal for Palestinians accused in 2023 Hamas-led attacks" — Who is responsible?
「イスラエルは、2023年のハマス主導の攻撃で告発されたパレスチナ人に対し、軍事法廷を開く予定である。」— 誰に責任があるのでしょうか？
📰 "Military drills in the Philippines affect the country's most vulnerable communities" — What's the most important part?
「フィリピンでの軍事演習は、同国の最も脆弱な地域社会に影響を与えている。」— 最も重要な部分は何ですか？
📰 "Israeli lawmakers set up tribunal, allow for death penalty for October 2023" — Is this punishment fair?
「イスラエルの議員たちが特別法廷を設置し、2023年10月の事件に対して死刑を認める法律を可決した。」— この罰は公平だろうか。
📰 "EU diplomats agree to sanction Hamas leaders and Israeli settlers" — How will this change things?
「EUの外交官たちは、ハマスの指導者とイスラエルの入植者に対する制裁で合意した。」— これによって、状況はどう変わるのだろうか？
📰 "Trump rejects Iran's ceasefire proposal response. And, Congress to tackle ICE funding" — How does this affect the country?
「トランプ氏はイランの停戦提案への回答を拒否した。そして、議会はICE（移民税関捜査局）の資金問題に取り組む。」— これは国にどのような影響を与えるのだろうか。
📰 "Trump heads to China amid ongoing war with Iran" — How can we prevent conflicts?
「トランプ氏はイランとの戦争が続く中、中国へ向かう。」— どうすれば紛争を防ぐことができるだろうか。
📰 "Why have peace efforts failed to end conflict in Sudan" — How should we use this?
「なぜスーダンでの紛争を終わらせるための和平努力は失敗してきたのか。」— これをどのように活用すべきでしょうか。
📰 "Red Cross says people displaced by conflict in Colombia doubled last year" — What's the impact?
「赤十字社によると、コロンビアの紛争で家を追われた人の数が昨年、2倍になったということです。」— その影響は何ですか？
📰 "Why is Iran increasingly targeting the UAE in its war messaging" — Is there a solution?
「なぜイランは、戦争に関するメッセージの中でUAEをますます標的にしているのですか？」— 解決策はありますか？
📰 "Ukraine hits Russia’s distant gas facilities after Moscow’s attacks kill 6" — What should countries do about this?
「ウクライナがロシアの遠く離れたガス施設を攻撃した後、モスクワの攻撃で6人が死亡しました。」— 各国はこれにどう対応すべきですか？
📰 "Moment taxi driver wrestles armed man during police chase in Turkiye" — What should happen next?
「トルコで、警察の追跡中にタクシー運転手が武装した男と格闘した瞬間。」— 次に何が起こるべきでしょうか。
📰 "Macron unveils $27 billion Africa investment, urges reset with Europe" — Is this money well spent?
「マクロン大統領がアフリカへの270億ドルの投資を発表し、ヨーロッパとの関係再構築を呼びかけました。」— このお金は有効に使われるのでしょうか？
📰 "Trump skirts question on US ‘red lines’ for Iran ceasefire" — How will this change things?
「トランプ氏、イラン停戦における米国の「レッドライン」についての質問をかわす」— これによって、状況はどう変わるのだろうか？
📰 "Kevin Warsh confirmed to US Federal Reserve board in close Senate vote" — Is this the right decision?
「ケビン・ウォーシュ氏、僅差の上院投票で米連邦準備制度理事会に承認される」— これは正しい決断でしょうか？
📰 "Serbia hosts first joint military exercise with NATO" — Why is this newsworthy?
「セルビア、NATOとの初の合同軍事演習を主催」— なぜこれがニュース価値があるのでしょうか。
📰 "Voters head to the polls in the Bahamas for high-stakes snap election" — Is this the right decision?
「有権者たち、バハマで重要度の高い解散総選挙の投票所へ向かう」— これは正しい決断でしょうか？
📰 "Israel sent Iron Dome anti-missile batteries and personnel to UAE" — What should be done about this?
「イスラエル、アイアンドーム対ミサイルシステムと人員をUAEに派遣」— これに対して、何が行われるべきだろうか？
📰 "US faces rising costs with Iran war driving energy prices, inflation higher" — Should we rely less on oil?
「アメリカは、イランとの戦争によるエネルギー価格の高騰とインフレ進行で、コスト上昇に直面している。」— 私たちは石油への依存を減らすべきだろうか？
📰 "Inside US Democrats’ Gaza fight – and what it means for 2028" — What's your opinion on this?
「アメリカ民主党のガザ紛争をめぐる内部対立と、それが2028年に与える影響とは。」— これについて、あなたの意見はどうですか？
📰 "EBay rejects GameStop’s $56bn bid as ‘neither credible nor attractive’" — How will this change things?
「eBayは、GameStopからの560億ドルの買収提案を「信頼性も魅力もない」として拒否した。」— これによって、状況はどう変わるのだろうか？
📰 "Palestinians gather to mark 78th anniversary of the Nakba and call for" — What should be done about this?
「パレスチナの人々は、ナクバ（大災厄）から78年を迎え、集まって抗議と要求を訴えた。」— これに対して、何が行われるべきだろうか？
📰 "Kazakhstan launches driverless Light Rail Transit system after 10 years of delays" — How should we use this?
「カザフスタンは、10年の遅れを経て、無人運転のライトレール交通システムを開業した。」— これをどのように活用すべきでしょうか。
📰 "EU to ban Brazilian meat imports from September" — How does this affect you?
「EUは9月からブラジル産肉類の輸入を禁止する予定です。」— これはあなたにどのような影響を与えますか？
📰 "EU countries back suspension of funding for the Venice Biennale over Russian" — What's the most important part?
「EU加盟国は、ロシア関連の問題を理由にヴェネチア・ビエンナーレへの資金提供停止を支持しました。」— 最も重要な部分は何ですか？
📰 "General strike in Belgium against government reforms draws tens of thousands to" — What do you think about this?
「ベルギーで政府の改革に反対するゼネラルストライキが行われ、数万人が参加しました。」— これについてどう思いますか？
📰 "Tens of thousands march in Brussels during Belgium national strike" — What are the risks?
「ベルギーの全国ストライキ中、ブリュッセルで数万人が行進しました。」— リスクは何ですか？
📰 "Peacocks take over northern Italian beach town" — Who does this affect most?
「クジャクがイタリア北部のビーチタウンを占拠しています。」— これが最も影響を与えるのは誰ですか？
📰 "Zelenskyy not implicated in a major graft probe, anti-corruption investigators say" — How does this affect people?
「ゼレンスキー大統領は大規模な汚職捜査の対象ではないと、汚職防止調査官が発表した。」— これは人々にどのような影響を与えるのでしょうか。
📰 "Roche gets European approval for Alzheimer’s diagnosis blood test" — How should we use this?
「ロシュ社、アルツハイマー病診断の血液検査で欧州の承認を取得。」— これをどのように活用すべきでしょうか。
📰 "Chinese people divided ahead of Trump-Xi summit in Beijing" — How does this affect international relations?
「北京でのトランプ・習近平首脳会談を前に、中国人の意見が分かれている。」— これは国際関係にどのような影響を与えるのでしょうか。
📰 "Swedish crime kingpin linked to Foxtrot network arrested in Tunisia, police say" — What should happen next?
「スウェーデンの犯罪組織「フォックストロット」に関連する重要人物がチュニジアで逮捕されたと警察が発表。」— 次に何が起こるべきでしょうか。
📰 "Rare Caucasian horse breed attracts renewed attention in Germany" — Why is this newsworthy?
「ドイツで希少なコーカサス馬の品種が再び注目を集めている。」— なぜこれがニュース価値があるのでしょうか。`
        }
    ]
};
