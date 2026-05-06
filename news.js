// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 07, 2026",
            content: `📰 "Massive Alaska megatsunami was second largest ever recorded" — Is this reasonable?
「アラスカで発生した巨大な津波は、観測史上2番目の大きさでした。」— これは妥当でしょうか？
📰 "Orphaned baby hippo to be hand-reared by keepers at Kenya sanctuary" — Is this good or bad news?
「孤児になったカバの赤ちゃんが、ケニアの保護施設で飼育員に手で育てられることになりました。」— これは良い知らせですか、それとも悪い知らせですか？
📰 "Apple to pay up to $95 to some US iPhone buyers" — How should we use this?
「アップル社が一部のアメリカのiPhone購入者に最大95ドルを支払うことになりました。」— これはどのように使うべきでしょうか？
📰 "Greetings from a sea village in Indonesia, where Indigenous fishing gets help" — Who does this affect most?
「インドネシアの海辺の村から、先住民の漁業を支援する取り組みについてご挨拶します。」— これが最も影響を与えるのは誰でしょうか？
📰 "NPR went looking for Polymarket's Panama headquarters. It's elusive" — How does this affect the economy?
「NPRがポリマーケットのパナマ本社を探したが、見つけるのは難しい。」— これは経済にどのような影響を与えるのか。
📰 "Infected passengers evacuated from hantavirus cruise ship" — What should people know about this?
「ハンタウイルスが発生したクルーズ船から、感染した乗客が避難した。」— 人々はこれについて何を知っておくべきか。
📰 "Amputee football grows in Rwanda, fostering unity and resilience" — Do you follow this sport?
「ルワンダで義足サッカーが広がり、団結と回復力を育んでいる」— あなたはこのスポーツを観ますか？
📰 "Commissioner vows to end poverty in 25 years as EU unveils first plan" — Why is this newsworthy?
「EUが初の計画を発表、委員長は25年以内に貧困をなくすと誓う」— なぜこれがニュース価値があるのか？
📰 "Spain is more convinced of its own position on trade than the US" — What are the benefits?
「スペインは米国に対して「自らの立場をより確信している」」— 利点は何ですか？
📰 "Europe's first commercial robotaxi service rolls out in Croatia" — Will this continue?
「欧州初の商用ロボタクシーサービスがクロアチアで始動」— この状況は続くのでしょうか？
📰 "What is Elon Musk's new chip-making facility, Terafab?" — Is this a good thing or bad thing?
「イーロン・マスクの新しいチップ製造施設「テラファブ」とは？」— これは良いことでしょうか、悪いことでしょうか？
📰 "Divisions in Brussels as EU negotiators face crunch talks on US trade" — Is this fair?
「EUの交渉担当者が米国との通商協議で山場を迎える中、ブリュッセルでは意見の対立が見られる」— これは公平でしょうか？
📰 "Satellite launched for first Arab country" — Why is this important?
「アラブ諸国初の人工衛星が打ち上げられる」— なぜこれが重要なのでしょうか？
📰 "Young Chinese-Irish ballroom dancer goes international" — What can we learn from this?
「中国人とアイルランド人の血を引く若い社交ダンサーが国際的に活躍」— これから何を学べるでしょうか？
📰 "UK and China allow more direct flights" — How will this affect you?
「イギリスと中国、直行便を増やす」— これはあなたにどのような影響を与えますか
📰 "Bad weather causes massive travel disruption in Britain" — How can we prepare for this?
「悪天候でイギリスで大規模な交通障害」— どう備えればよいでしょうか？
📰 "Strictly Come Dancing returns for new season" — Who benefits from this?
「ストリクトリー・カム・ダンシングが新シーズンで復活」— これで誰が得をしますか
📰 "Spanish superstar Rosalía brings her tour to London" — What are the consequences?
「スペインのスーパースター、ロサリアがロンドン公演を開催」— その結果はどうなるのでしょうか？
📰 "The Summer I Turned Pretty fans asked to stop visiting film set" — Would you watch this?
「「サマー・アイ・ターンド・プリティ」のファンに撮影現場への訪問を控えるよう要請」— あなたはこれを見ますか？
📰 "Matt Damon seen in new trailer for Christopher Nolan's The Odyssey" — Is this good or bad?
「クリストファー・ノーラン監督の『オデュッセイ』新予告編にマット・デイモンが登場」— これは良いことでしょうか、悪いことでしょうか？
📰 "Bonnie Tyler recovering after being taken to hospital for surgery" — Is this treatment effective?
「ボニー・タイラー、手術のため入院後、回復中」— この治療法は効果がありますか？
📰 "Peter Kay show rescheduled after arena evacuation" — What should be done about this?
「ピーター・ケイのショー、アリーナ避難後に日程変更」— これに対してどうすべきでしょうか？
📰 "Richard Osman and Bill Bailey receive honours at Windsor Castle" — What are the risks?
「リチャード・オスマンとビル・ベイリーがウィンザー城で栄誉を受ける」— リスクは何ですか？
📰 "Pussycat Dolls cancel US leg of reunion tour after poor ticket sales" — How important is this?
「プッシーキャット・ドールズ、チケット販売不振で再結成ツアーのアメリカ公演を中止」— これはどのくらい重要ですか？
📰 "The most talked-about looks at this year's Met Gala" — What's your reaction to this?
「今年のメットガラで最も話題になったファッション」— これについてどう思いますか？
📰 "Rapper Kid Cudi removes British star M.I.A. from tour" — What are the risks?
「ラッパーのキッド・クディ、イギリス人スターM.I.A.をツアーから外す」— リスクは何ですか？
📰 "People urged not to cancel flights over fuel shortage fears" — Should we rely less on oil?
「燃料不足への懸念から、航空便をキャンセルしないよう呼びかけ」— 私たちは石油への依存を減らすべきでしょうか？
📰 "Up to 150 former WHSmith high street stores to close" — What can we learn from this?
「最大150店舗の旧WHSmithの街中店舗が閉店へ」— これから何を学べるでしょうか？
📰 "Robots move in as waste firms struggle to find staff" — Will this continue?
「廃棄物処理会社が人手不足の中、ロボットが活躍」— この状況は続くのでしょうか？
📰 "Campaigners call for ban on use of weedkiller glyphosate at harvest time" — What should be done?
「活動家らが収穫時の除草剤グリホサート使用禁止を求める」— 何をすべきでしょうか？
📰 "Hedge fund founder hits back at 'creepy' wealth tax video" — What's your opinion on this?
「ヘッジファンドの創業者が、「気味が悪い」富裕税に関する動画に反論した。」— これについて、あなたの意見はどうですか？
📰 "UK long-term borrowing costs reach 28-year high" — What's the main issue here?
「英国の長期借入コストが28年ぶりの高水準に達した。」— ここでの主な問題は何ですか？
📰 "Lidl's new loyalty scheme less generous, shoppers say" — How does this affect people?
「リドルの新しい会員制度は以前よりお得感が減ったと買い物客は言う。」— これは人々にどのような影響を与えますか？
📰 "Nissan to close UK line and cut 900 European jobs" — What's the solution?
「日産が英国の生産ラインを閉鎖し、欧州で900人の雇用を削減する。」— 解決策は何ですか？
📰 "US to safety test new AI models from Google, Microsoft, xAI" — What are the benefits?
「米国がグーグル、マイクロソフト、xAIの新しいAIモデルを安全性テストする。」— 利点は何ですか？
📰 "Dragonflies in distress" — What are the risks?
「困っているトンボたち」— どんなリスクがあるのでしょうか？
📰 "The world wants to eliminate cervical cancer" — How will this change our lives?
「世界は子宮頸がんをなくそうとしています」— これは私たちの生活をどう変えるのでしょうか？
📰 "Final proof vaping IS harder to quit than smoking" — What should people know about this?
「電子タバコはタバコよりやめにくいという最終的な証拠」— 人々はこれについて何を知っておくべきでしょうか？
📰 "Huge crowd attends free Shakira Copacabana beach concert" — Would you watch this?
「無料のシャキーラ・コパカバーナビーチコンサートに大群衆が集まる」— あなたはこれを見ますか？
📰 "Princess Charlotte marks her 11th birthday with a carefree smile" — Is this good or bad news?
「シャーロット王女、11歳の誕生日を無邪気な笑顔で迎える」— これは良い知らせですか、それとも悪い知らせですか？
📰 "Missing Oscar found after winner blocked from taking it on plane" — What's the most important part?
「行方不明になったオスカー像、受賞者が飛行機に持ち込めず見つかる」— 最も重要な部分は何ですか？
📰 "Laufey on making jazz cool again for a new generation" — Would you listen to this?
「ラウフェイ、新しい世代のためにジャズを再びかっこよくする」— あなたはこれを聴きますか？
📰 "Thousands of lost Canadians apply for dual citizenship" — How does this affect you?
「何千人ものカナダ人失格者が二重国籍を申請」— これはあなたにどのような影響を与えますか？
📰 "Britain's Got Talent judge KSI sparks outrage with joke" — Is this reasonable?
「「ブリテンズ・ゴット・タレント」審査員KSI、ジョークで怒りを招く」— これは妥当ですか？
📰 "Warmth and laughter as King reflects on his first year" — What do you think about this?
「国王が即位1年を振り返り、温かさと笑いが広がる」— これについてどう思いますか？
📰 "Portugal and Italy set to ditch controversial EU border rules" — How will this affect travelers?
「ポルトガルとイタリア、物議を醸すEU国境ルールを廃止へ」— これは旅行者にどのような影響を与えますか？
📰 "Why is China banning drone sales in Beijing" — Is this reasonable?
「中国が北京でのドローン販売を禁止する理由は？」— これは妥当ですか？
📰 "Timmy the humpback whale presumed dead after release" — What can we learn from this?
「ザトウクジラのティミー、放流後に死亡と推定される」— これから何を学べるでしょうか？
📰 "New study shows exercise beats medication for depression" — What should people know about this?
「新しい研究で、うつ病には薬より運動が効果的と判明」— 人々はこれについて何を知っておくべきでしょうか？
📰 "World's oldest known wild bird lays egg at age 74" — What's your reaction to this?
「世界最古の野生の鳥、74歳で卵を産む」— これに対するあなたの反応は？
`
        }
    ]
};