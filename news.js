// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 01, 2026",
            content: `📰 "British couple jailed in Iran" — How will this change our lives?
「British couple jailed in Iran」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Israel releases all but two activists in Greece after intercepting Gaza aid" — How will this change our lives?
「Israel releases all but two activists in Greece after intercepting Gaza aid」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Myanmar ex-leader Aung San Suu Kyi moved to house arrest, military says" — What should happen next?
「Myanmar ex-leader Aung San Suu Kyi moved to house arrest, military says」— 次に何が起こるべきでしょうか
📰 "Brazil's Congress approves plan to drastically cut Bolsonaro's jail term" — How does this affect the country?
「Brazil's Congress approves plan to drastically cut Bolsonaro's jail term」— これはその国にどのような影響を与えますか？
📰 "US imposes sanctions on DR Congo ex-President Kabila alleging rebel support" — How does this affect the country?
「US imposes sanctions on DR Congo ex-President Kabila alleging rebel support」— これはその国にどのような影響を与えますか？
📰 "China scraps tariffs for all but one African nation" — Who does this affect most?
「中国がアフリカのほぼすべての国に対する関税を撤廃」— これが最も影響を与えるのは誰ですか？
📰 "Six injured in Washington state school stabbing" — What should be done about this?
「ワシントン州の学校で刺傷事件、6人が負傷」— これに対して何をすべきだろうか？
📰 "Britney Spears charged in California with driving under influence" — Is this surprising?
「ブリトニー・スピアーズ、カリフォルニア州で飲酒運転の容疑で起訴される」— これは驚くべきことですか。
📰 "Venice Biennale jury resigns days before start of top art exhibition" — Is this good or bad news?
「ヴェネツィア・ビエンナーレの審査員、主要美術展の開幕直前に辞任」— これは良い知らせですか、それとも悪い知らせですか？
📰 "Former Chick-fil-A employee charged in $80,000 mac-and-cheese scheme" — Do you agree with this decision?
「元チックフィレイ従業員、8万ドルのマカロニ＆チーズ詐欺事件で起訴される」— あなたはこの決定に賛成ですか？
📰 "Moment thieves mow down innocent woman trying to stop them after they" — What should be done about this?
「瞬間泥棒が、自分たちを止めようとした無実の女性をなぎ倒した。」— これに対して何をすべきだろうか？
📰 "A tech worker in China is laid off and replaced by AI." — Will AI take your job?
「中国の技術者が解雇され、AIに取って代わられた。」— AIはあなたの仕事を奪うでしょうか。
📰 "The U.S. once had a monopoly on rare earths. How it lost" — What should be done about this?
「アメリカはかつてレアアースを独占していた。その独占を失った経緯。」— これに対して何をすべきだろうか？
📰 "Myanmar attempts to rehabilitate image with Suu Kyi move" — What should be done about this?
「ミャンマーがスー・チー氏の処遇をきっかけに、イメージ回復を図っている。」— これに対して何をすべきだろうか？
📰 "Zelenskyy says he's seeking details of Putin's May 9 ceasefire proposal" — How will this change our lives?
「ゼレンスキー大統領は、プーチン大統領の5月9日の停戦提案の詳細を求めていると述べた。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "20,000 civilian sailors are stuck in the gulf that opens to the" — How will this change our lives?
「2万人の民間船員が、外海に開かれた湾に足止めされている。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Gaza aid flotilla vessels taken to Crete after Israeli interception" — How will this change our lives?
「ガザ支援船団、イスラエルに拿捕された後、クレタ島へ曳航される。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Despite growth and pay rises, Greek workers are among the poorest in" — What should be done about this?
「経済成長と賃上げにもかかわらず、ギリシャの労働者はヨーロッパで最も貧しい部類に入る。」— これに対して何をすべきだろうか？
📰 "Mohamed Salah ‘deserves big send-off’, says Liverpool boss Slot" — What should be done about this?
「リバプールのスロット監督は「モハメド・サラーには盛大な送別が必要だ」と語る。」— これに対して何をすべきだろうか？
📰 "Rallies under way as workers gather for International Labour Day" — How does this affect international relations?
「メーデーを前に、労働者たちによる集会が行われている。」— これは国際関係にどのような影響を与えますか？
📰 "Commercial flights from Tehran’s main airport resume amid cautious normalcy" — How will this change our lives?
「テヘランの主要空港で商業便の運航が再開、慎重な正常化が進む」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Ukraine begins to flex muscle as an emerging air power, angering Russia" — How will this change our lives?
「ウクライナが新たな航空大国として力を示し始め、ロシアを怒らせる」— これは私たちの生活をどのように変えるのでしょうか？
📰 "UK police charge man over stabbing of two Jewish men in London" — What should happen next?
「英国警察、ロンドンでユダヤ人男性2人を刺した容疑で男を逮捕」— 次に何が起こるべきでしょうか
📰 "Turkish police fire tear gas and arrest almost 400 people at May" — Should we rely less on oil?
「トルコ警察、メーデーに催涙ガスを使用し約400人を逮捕」— 私たちは石油への依存を減らすべきでしょうか？
📰 "UAE’s OPEC exit signals strategic shift as Gulf unity faces new test" — Is this surprising?
「UAEのOPEC脱退は戦略的転換を示し、湾岸諸国の結束が新たな試練に直面」— これは驚くべきことですか。
📰 "World Cup travel demand rises, but not all host cities will get" — Do you agree with this decision?
「ワールドカップの旅行需要が高まっているが、開催都市すべてが恩恵を受けるわけではない。」— あなたはこの決定に賛成ですか？
📰 "Japanese man arrested after wife's remains found in zoo incinerator, officials say" — How will this change our lives?
「妻の遺体が動物園の焼却炉で見つかった後、日本人男性が逮捕されたと当局が発表。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "‘Fenian’" — What should be done about this?
「「フェニアン」」— これに対して何をすべきだろうか？
📰 "Workers' health isn't the only thing at risk of job strain —" — Will AI take your job?
「仕事のストレスで危険にさらされるのは、労働者の健康だけではない。」— AIはあなたの仕事を奪うでしょうか。
📰 "Dutch football league passport dispute could force replay of 133 matches" — Do you follow this sport?
「オランダのサッカーリーグ、パスポート問題で133試合の再試合の可能性。」— あなたはこのスポーツを観戦しますか。
📰 "Experience the best of Europe in 2026 with these new vintage luxury" — How will this change things?
「2026年、これらの新しいヴィンテージラグジュアリーでヨーロッパの最高を体験しよう。」— これで状況はどう変わるのだろうか？
📰 "Elon Musk clashes with OpenAI lawyer on third day of trial over" — How will this change our lives?
「裁判3日目、イーロン・マスクがOpenAIの弁護士と激しく対立。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Podcast | Is the future looking bright or bleak for European workers" — What should be done about this?
「ポッドキャスト | ヨーロッパの労働者にとって未来は明るいのか、それとも暗いのか？」— これに対して何をすべきだろうか？
📰 "‘A united region’" — How will this change things?
「「団結した地域」」— これで状況はどう変わるのだろうか？
📰 "Satellite lofted for first Arab country" — Why is this important?
「アラブ諸国初の人工衛星が打ち上げられる。」— なぜこれが重要なのか？
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの大臣が会談する」— これはその国にどのような影響を与えますか？
📰 "Young Chinese-Irish ballroom dancer goes international" — How does this affect international relations?
「若い中国系アイルランド人の社交ダンサーが国際的に活躍」— これは国際関係にどのような影響を与えますか？
📰 "UK and China allow more direct flights" — Do you agree with this decision?
「イギリスと中国が直行便を増やす」— あなたはこの決定に賛成ですか？
📰 "Bad weather causes massive travel disruption in Britain" — How will this change our lives?
「悪天候によりイギリスで大規模な交通障害が発生」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Four injured in New York City blast, suspect nabbed" — What's the most important part?
「ニューヨーク市で爆発、4人負傷、容疑者を逮捕」— 最も重要な部分は何ですか。
📰 "How did Banksy put up a statue in central London" — What's the most important part?
「バンクシーはどのようにしてロンドン中心部に像を設置したのですか。」— 最も重要な部分は何ですか。
📰 "Spotify adds 'Verified' badges to distinguish human artists from AI" — How will this change our lives?
「Spotifyが人間のアーティストとAIを区別する「認証バッジ」を追加。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "George Michael's Faith jacket sells for £176,400" — How will this change our lives?
「ジョージ・マイケルの「フェイス」ジャケットが176,400ポンドで落札。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Banksy confirms he's behind statue in central London" — How does this affect you?
「バンクシーがロンドン中心部の像の作者であることを認める。」— これはあなたにどのような影響を与えますか。
📰 "One of the world's most valuable books goes on display in Glasgow" — Is this surprising?
「世界で最も価値のある本の一つがグラスゴーで展示される。」— これは驚くべきことですか。
📰 "Will Disney lose its licenses over Jimmy Kimmel's Melania 'widow' joke" — Would you watch this?
「ジミー・キンメルがメラニアを「未亡人」とジョークしたことで、ディズニーはライセンスを失うのでしょうか。」— あなたはこれを見ますか？
📰 "No evidence of widespread fuel price-gouging, watchdog says" — Should we rely less on oil?
「監視機関によると、広範囲にわたるガソリンの価格つり上げの証拠はないとのことです。」— 私たちは石油への依存を減らすべきでしょうか？
📰 "Apple says iPhone 17 'most popular ever' as sales soar" — How will this change our lives?
「アップルは、販売が急増しているiPhone 17が「これまでで最も人気がある」と発表しました。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "What the Renters' Rights Act means for tenants and landlords" — Who does this affect most?
「借家人権利法は、入居者と大家に何を意味するのでしょうか。」— これが最も影響を与えるのは誰ですか？
📰 "Will AI lead to more accurate opinion polls" — How will this change our lives?
「AIは世論調査の精度を高めることになるのでしょうか？」— これは私たちの生活をどのように変えるのでしょうか？`
        }
    ]
};
