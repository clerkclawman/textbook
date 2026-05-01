// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 02, 2026",
            content: `📰 "French PM fuels row with trip to buy baguettes" — Should we rely less on oil?
「フランス首相、バゲットを買いに行ったことで批判を招く」— 私たちは石油への依存をもっと減らすべきでしょうか？
📰 "Turkish police arrest more than 500 people at May Day rallies" — What should happen next?
「トルコ警察、メーデーの集会で500人以上を逮捕」— 次に何が起こるべきでしょうか？
📰 "Israel releases all but two activists in Greece after intercepting Gaza aid" — How will this change our lives?
「イスラエル、ガザ支援船を阻止後、ギリシャで活動家2人以外を全員解放」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Zayn Malik cancels US tour and cuts UK dates after hospital bed" — What should people know about this?
「ゼイン・マリク、入院後にアメリカツアーを中止、イギリス公演も縮小」— 人々はこれについて何を知るべきでしょうか？
📰 "Myanmar ex-leader Aung San Suu Kyi moved to house arrest, military says" — What should happen next?
「ミャンマー元指導者アウン・サン・スー・チー氏、自宅軟禁に移されたと軍が発表」— 次に何が起こるべきでしょうか？
📰 "British couple jailed in Iran" — How will this change our lives?
「イランでイギリス人夫婦が収監される」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Brazil's Congress approves plan to drastically cut Bolsonaro's jail term" — How does this affect the country?
「ブラジル議会、ボルソナーロ元大統領の刑期を大幅に短縮する計画を承認」— これはその国にどのような影響を与えますか？
📰 "US imposes sanctions on DR Congo ex-President Kabila alleging rebel support" — How does this affect the country?
「米国、コンゴ民主共和国のカビラ前大統領に反政府勢力支援の疑いで制裁を科す」— これはその国にどのような影響を与えますか？
📰 "China scraps tariffs for all but one African nation" — What are the consequences?
「中国、アフリカのほぼ全諸国に対する関税を撤廃」— その結果はどうなりますか？
📰 "A tech worker in China is laid off and replaced by AI." — Will AI take your job?
「中国のIT技術者が解雇され、AIに置き換えられる」— AIはあなたの仕事を奪うのでしょうか？
📰 "The U.S. once had a monopoly on rare earths. How it lost" — Is this surprising?
「かつてアメリカはレアアースを独占していました。その独占をどのようにして失ったのか」— これは驚くべきことなのか？
📰 "Myanmar attempts to rehabilitate image with Suu Kyi move" — How does this affect you?
「ミャンマーがスー・チー氏への対応でイメージ回復を図る」— これはあなたにどのような影響を与えますか？
📰 "Zelenskyy says he's seeking details of Putin's May 9 ceasefire proposal" — How will this change our lives?
「ゼレンスキー大統領は、プーチン氏の5月9日の停戦提案の詳細を求めていると述べる」— これは私たちの生活をどのように変えるのでしょうか？
📰 "20,000 civilian sailors are stuck in the gulf that opens to the" — How will this change our lives?
「2万人の民間船員が、外洋に通じる湾に足止めされている」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Rebel checkpoints reported around Mali’s capital, northern town seized" — Do you agree with this decision?
「マリの首都周辺で反政府勢力の検問所が報告され、北部の町が制圧される」— この決定に賛成ですか？
📰 "Photos" — What should be done about this?
「写真」— これについてどうすべきでしょうか？
📰 "Michael Jackson’s biopic and what it leaves out" — Is this good or bad news?
「マイケル・ジャクソンの伝記映画と、そこから省かれたもの」— これは良い知らせでしょうか、それとも悪い知らせでしょうか？
📰 "UAE exit from OPEC signals closer alignment with US interests, experts say" — What should be done about this?
「専門家によると、UAEのOPEC脱退は米国の利益との連携を強める兆候」— これについてどうすべきでしょうか？
📰 "EU trade deal with South America’s Mercosur bloc takes provisional effect" — Do you agree with this decision?
「EUと南米のメルコスール圏との貿易協定が暫定的に発効」— この決定に賛成ですか？
📰 "Pentagon says deal with seven AI companies for classified systems" — How will this change our lives?
「米国防総省、7社のAI企業と機密システムに関する契約を発表」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Turkish police fire tear gas, arrest hundreds at May Day rally" — Should we rely less on oil?
「トルコ警察、メーデーの集会で催涙ガスを使用し数百人を逮捕」— 私たちは石油への依存をもっと減らすべきでしょうか？
📰 "Italian firefighters respond to Tuscany wildfires" — What should be done about this?
「イタリアの消防士、トスカーナの山火事に対応」— これについてどうすべきでしょうか？
📰 "Cricket club bans social media comments to protect players’ mental health" — What should people know about this?
「クリケットクラブ、選手のメンタルヘルス保護のためSNSコメントを禁止」— 人々はこれについて何を知るべきでしょうか？
📰 "Benfica’s Mourinho says no contact with Real Madrid about manager’s job" — Is this good or bad news?
「ベンフィカのモウリーニョ監督、レアル・マドリードの監督職に関する接触はなしと発言」— これは良い知らせでしょうか、それとも悪い知らせでしょうか？
📰 "Howe says Saudi owners’ desire for success at Newcastle remains unchanged" — How will this change our lives?
「ハウ監督、サウジアラビアのオーナーによるニューカッスルの成功への願望は変わらずと語る」— これは私たちの生活をどのように変えるのでしょうか？
📰 "France and Germany send firefighters to help battle woodland blazes in Netherlands" — How will this change things?
「フランスとドイツがオランダの森林火災を消し止めるために消防士を派遣する」— これで状況はどう変わるのでしょうか？
📰 "Gold for Tajikistan on Day 1 in Dushanbe" — How will this change things?
「ドゥシャンベでの大会初日、タジキスタンが金メダルを獲得」— これで状況はどう変わるのでしょうか？
📰 "Russia launches new Soyuz-5 rocket from Kazakhstan cosmodrome in first test flight" — Why is this important?
「ロシアがカザフスタンの宇宙基地から新型ロケット「ソユーズ5号」の初飛行試験を実施」— なぜこれが重要なのですか？
📰 "Hungary's Péter Magyar defends appointing brother-in-law as country's justice minister" — How does this affect the country?
「ハンガリーのペーテル・マジャール氏が、義理の兄弟を同国の法務大臣に任命したことを擁護」— これはその国にどのような影響を与えますか？
📰 "Brixen Water Light Festival 2026 puts peace at its centre" — Who does this affect most?
「2026年ブリクセン水と光のフェスティバルは平和をテーマに開催」— これが最も影響を受けるのは誰か？
📰 "Why news publishers are blocking AI from accessing internet archives" — How will this change our lives?
「ニュース出版社がなぜAIによるインターネットアーカイブへのアクセスを禁止しているのか」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Explained" — How will this change our lives?
「解説」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Satellite lofted for first Arab country" — Why is this important?
「アラブ諸国初の人工衛星が打ち上げられる」— なぜこれが重要なのですか？
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの閣僚が会談」— これはその国にどのような影響を与えますか？
📰 "Young Chinese-Irish ballroom dancer goes international" — How does this affect international relations?
「中国系アイルランド人の若い社交ダンサーが国際舞台へ」— これは国際関係にどのような影響を与えますか？
📰 "UK and China allow more direct flights" — What are the consequences?
「イギリスと中国が直行便を増やす」— その結果はどうなりますか？
📰 "Bad weather causes massive travel disruption in Britain" — How will this change our lives?
「悪天候でイギリス国内の交通が大混乱」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Four injured in New York City blast, suspect nabbed" — How does this affect you?
「ニューヨーク市で爆発、4人負傷、容疑者を逮捕」— これはあなたにどのような影響を与えますか？
📰 "How did Banksy put up a statue in central London" — Is this surprising?
「バンクシーはどうやってロンドン中心部に像を設置したのか？」— これは驚くべきことなのか？
📰 "Graham Linehan's conviction for damaging trans activist's phone overturned" — Who does this affect most?
「グラハム・ラインハン、トランス活動家の携帯電話を壊した有罪判決が覆る」— これが最も影響を受けるのは誰か？
📰 "Britney Spears charged in California with driving under influence" — Is this good or bad news?
「ブリトニー・スピアーズ、カリフォルニア州で飲酒運転の容疑で起訴される」— これは良い知らせでしょうか、それとも悪い知らせでしょうか？
📰 "James McAvoy says filming in Wales fuelled his love for the outdoors" — Should we rely less on oil?
「ジェームズ・マカヴォイ、ウェールズでの撮影がアウトドアへの愛情を深めたと語る」— 私たちは石油への依存をもっと減らすべきでしょうか？
📰 "Spotify adds 'Verified' badges to distinguish human artists from AI" — How will this change our lives?
「Spotify、人間のアーティストとAIを区別する「認証済み」バッジを追加」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Venice Biennale jury resigns days before start of top art exhibition" — What's the most important part?
「ヴェネツィア・ビエンナーレの審査員、主要美術展の開幕目前に辞任」— 最も重要な部分は何ですか？
📰 "George Michael's Faith jacket sells for £176,400" — How will this change our lives?
「ジョージ・マイケルの「フェイス」ジャケット、176,400ポンドで落札」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Banksy confirms he's behind statue in central London" — What's the most important part?
「バンクシーがロンドン中心部の像の作者であることを認める」— 最も重要な部分は何ですか？
📰 "Billie Eilish puts Manchester at centre of new 3D concert film" — Would you watch this?
「ビリー・アイリッシュ、マンチェスターを舞台にした新しい3Dコンサート映画を公開」— あなたはこれを見ますか？
📰 "From Gamestation to PlayStation" — How does this affect you?
「ゲームステーションからプレイステーションへ」— これはあなたにどのような影響を与えますか？
📰 "The Real Greek rescued by Cote Brasserie-owner" — How does this affect you?
「リアル・グリーク、コート・ブラッスリーのオーナーに救われる」— これはあなたにどのような影響を与えますか？
📰 "Crayola toys recalled over possible asbestos contamination" — What are the consequences?
「クレヨラのおもちゃ、アスベスト汚染の可能性でリコール」— その結果はどうなりますか？`
        }
    ]
};
