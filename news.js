// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 01, 2026",
            content: `📰 "British couple jailed in Iran" — How will this change our lives?
「イランで英国人夫婦が収監される」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Israel releases all but two activists in Greece after intercepting Gaza aid" — How will this change our lives?
「イスラエル、ガザ支援物資を阻止後、ギリシャで活動家2人を除く全員を解放」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Myanmar ex-leader Aung San Suu Kyi moved to house arrest, military says" — What should happen next?
「ミャンマー元指導者アウン・サン・スー・チー氏、自宅軟禁に移されたと軍が発表」— 次に何が起こるべきでしょうか
📰 "Brazil's Congress approves plan to drastically cut Bolsonaro's jail term" — How does this affect the country?
「ブラジル議会、ボルソナロ元大統領の刑期を大幅に短縮する計画を承認」— これはその国にどのような影響を与えますか
📰 "US imposes sanctions on DR Congo ex-President Kabila alleging rebel support" — How does this affect the country?
「米国、コンゴ民主共和国のカビラ前大統領に制裁、反政府勢力支援の疑い」— これはその国にどのような影響を与えますか
📰 "China scraps tariffs for all but one African nation" — What should be done about this?
「中国がアフリカのほぼすべての国に対する関税を撤廃」— これについて何が行われるべきでしょうか？
📰 "Six injured in Washington state school stabbing" — Is this surprising?
「ワシントン州の学校で刺傷事件、6人が負傷」— これは驚くべきことですか？
📰 "Britney Spears charged in California with driving under influence" — Is this surprising?
「ブリトニー・スピアーズ、カリフォルニア州で飲酒運転の罪に問われる」— これは驚くべきことですか？
📰 "Venice Biennale jury resigns days before start of top art exhibition" — How does this affect you?
「ヴェネツィア・ビエンナーレの審査員、主要美術展の開幕直前に辞任」— これはあなたにどのような影響を与えますか？
📰 "Former Chick-fil-A employee charged in $80,000 mac-and-cheese scheme" — Do you agree with this decision?
「元チックフィレイ従業員、8万ドルのマカロニ＆チーズ詐欺で起訴」— この決定に賛成ですか？
📰 "Moment thieves mow down innocent woman trying to stop them after they" — Is this good or bad news?
「瞬間泥棒が止めようとした無実の女性をなぎ倒す」— これは良い知らせですか、それとも悪い知らせですか
📰 "A tech worker in China is laid off and replaced by AI." — Will AI take your job?
「中国の技術者が解雇され、AIに置き換えられる」— AIはあなたの仕事を奪うのでしょうか？
📰 "The U.S. once had a monopoly on rare earths. How it lost" — What are the consequences?
「アメリカはかつてレアアースを独占していた。その独占を失った理由」— その結果は何でしょうか。
📰 "Myanmar attempts to rehabilitate image with Suu Kyi move" — What should be done about this?
「ミャンマー、スー・チー氏への措置でイメージ回復を図る」— これについて何が行われるべきでしょうか？
📰 "Zelenskyy says he's seeking details of Putin's May 9 ceasefire proposal" — How will this change our lives?
「ゼレンスキー大統領、プーチン氏の5月9日停戦提案の詳細を求めていると発言」— これは私たちの生活をどのように変えるのでしょうか？
📰 "20,000 civilian sailors are stuck in the gulf that opens to the" — How will this change our lives?
「2万人の民間船員が、外海に開けた湾に足止めされている。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Myanmar junta says Suu Kyi moved to house arrest, doubts linger" — What should happen next?
「ミャンマー軍事政権、スー・チー氏を自宅軟禁に移したと発表、疑念は消えず。」— 次に何が起こるべきでしょうか
📰 "Despite growth and pay rises, Greek workers are among the poorest in" — What are the consequences?
「経済成長と賃上げにもかかわらず、ギリシャの労働者はヨーロッパで最も貧しい層の一つだ。」— その結果は何でしょうか。
📰 "Mohamed Salah ‘deserves big send-off’, says Liverpool boss Slot" — What's your opinion on this?
「リバプールのスロット監督、モハメド・サラーは「盛大な送り出しに値する」と語る。」— これについてあなたの意見はどうですか？
📰 "Rallies under way as workers gather for International Labour Day" — How does this affect international relations?
「メーデーを前に、労働者たちが集まりデモ行進が行われている。」— これは国際関係にどのような影響を与えますか
📰 "Commercial flights from Tehran’s main airport resume amid cautious normalcy" — How will this change our lives?
「テヘランの主要空港からの民間便が、慎重な正常化の中で再開される」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Ukraine begins to flex muscle as an emerging air power, angering Russia" — How will this change our lives?
「ウクライナが新たな航空戦力として力を示し始め、ロシアを怒らせる」— これは私たちの生活をどのように変えるのでしょうか？
📰 "UK police charge man over stabbing of two Jewish men in London" — What should happen next?
「イギリス警察、ロンドンでユダヤ人男性2人を刺した事件で男を起訴」— 次に何が起こるべきでしょうか
📰 "Russia hammers targets across Ukraine overnight" — How will this change our lives?
「ロシア、一晩でウクライナ各地の標的を攻撃」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Japanese man arrested after wife's remains found in zoo incinerator, officials say" — How will this change our lives?
「日本の男性、動物園の焼却炉で妻の遺体が見つかり逮捕される」— これは私たちの生活をどのように変えるのでしょうか？
📰 "‘Fenian’" — What's the most important part?
「「フェニアン」」— 最も重要な部分は何ですか？
📰 "Workers' health isn't the only thing at risk of job strain —" — Will AI take your job?
「仕事のストレスで危険にさらされるのは、労働者の健康だけではありません。」— AIはあなたの仕事を奪うのでしょうか？
📰 "Dutch football league passport dispute could force replay of 133 matches" — Do you follow this sport?
「オランダのサッカーリーグ、パスポート問題で133試合の再試合の可能性」— あなたはこのスポーツを観戦しますか？
📰 "Experience the best of Europe in 2026 with these new vintage luxury" — What should be done about this?
「2026年、これらの新しいヴィンテージ・ラグジュアリーでヨーロッパの最高を体験しよう」— これについて何が行われるべきでしょうか？
📰 "Elon Musk clashes with OpenAI lawyer on third day of trial over" — How will this change our lives?
「イーロン・マスク、裁判3日目にOpenAIの弁護士と激しく対立」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Podcast | Is the future looking bright or bleak for European workers" — Is this good or bad news?
「ポッドキャスト | ヨーロッパの労働者の未来は明るいのか、それとも暗いのか」— これは良い知らせですか、それとも悪い知らせですか
📰 "‘A united region’" — Who does this affect most?
「「団結した地域」」— これが最も影響を受けるのは誰ですか
📰 "Activists on Gaza flotilla intercepted by Israel disembark in Crete" — Do you agree with this decision?
「イスラエルに阻止されたガザ支援船団の活動家たちがクレタ島に上陸」— この決定に賛成ですか？
📰 "Satellite lofted for first Arab country" — Why is this important?
「アラブ諸国初の人工衛星が打ち上げられる」— なぜこれが重要なのですか
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの閣僚が会合」— これはその国にどのような影響を与えますか
📰 "Young Chinese-Irish ballroom dancer goes international" — How does this affect international relations?
「若い中国系アイルランド人の社交ダンサーが国際的に活躍」— これは国際関係にどのような影響を与えますか
📰 "UK and China allow more direct flights" — Do you agree with this decision?
「イギリスと中国が直行便を増やす」— この決定に賛成ですか？
📰 "Bad weather causes massive travel disruption in Britain" — How will this change our lives?
「悪天候でイギリスで大規模な交通障害が発生」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Four injured in New York City blast, suspect nabbed" — What should be done about this?
「ニューヨーク市で爆発、4人負傷、容疑者を逮捕」— これについて何が行われるべきでしょうか？
📰 "How did Banksy put up a statue in central London" — Is this good or bad news?
「バンクシーはどのようにしてロンドン中心部に像を設置したのか」— これは良い知らせですか、それとも悪い知らせですか
📰 "Spotify adds 'Verified' badges to distinguish human artists from AI" — How will this change our lives?
「Spotifyが「認証済み」バッジを導入し、人間のアーティストとAIを区別できるようにする」— これは私たちの生活をどのように変えるのでしょうか？
📰 "George Michael's Faith jacket sells for £176,400" — How will this change our lives?
「ジョージ・マイケルの「フェイス」ジャケットが176,400ポンドで落札される」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Banksy confirms he's behind statue in central London" — What should be done about this?
「バンクシー、ロンドン中心部の像の作者であることを認める」— これについて何が行われるべきでしょうか？
📰 "One of the world's most valuable books goes on display in Glasgow" — Do you agree with this decision?
「世界で最も価値のある本の一つがグラスゴーで展示される」— この決定に賛成ですか？
📰 "Will Disney lose its licenses over Jimmy Kimmel's Melania 'widow' joke" — Would you watch this?
「ディズニーはジミー・キンメルのメラニア「未亡人」ジョークでライセンスを失うのか？」— あなたはこれを見ますか？
📰 "Stephen Fry sues tech conference for up to £100,000 after falling off" — How will this change our lives?
「スティーブン・フライ氏、転落事故でテクノロジー会議を最大10万ポンドで提訴」— これは私たちの生活をどのように変えるのでしょうか？
📰 "No evidence of widespread fuel price-gouging, watchdog says" — Should we rely less on oil?
「広範囲にわたる燃料の価格つり上げの証拠はない、と監視機関が発表」— 私たちは石油への依存を減らすべきでしょうか？
📰 "Apple says iPhone 17 'most popular ever' as sales soar" — How will this change our lives?
「アップル社、iPhone 17の売上急増で「史上最も人気」と発表」— これは私たちの生活をどのように変えるのでしょうか？
📰 "What the Renters' Rights Act means for tenants and landlords" — What's your opinion on this?
「借家人権利法が入居者と大家に与える影響とは」— これについてあなたの意見はどうですか？
📰 "Will AI lead to more accurate opinion polls" — How will this change our lives?
「AIは世論調査の精度を高めるのでしょうか？」— これは私たちの生活をどのように変えるのでしょうか？`
        }
    ]
};
