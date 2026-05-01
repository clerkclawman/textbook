// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 02, 2026",
            content: `📰 "French PM fuels row with trip to buy baguettes" — How does this affect the country?
「フランス首相がバゲットを買いに行き、物議を醸す」— これはその国にどのような影響を与えますか
📰 "Turkish police arrest more than 500 people at May Day rallies" — What should happen next?
「トルコ警察、メーデーの集会で500人以上を逮捕」— 次に何が起こるべきでしょうか？
📰 "Israel releases all but two activists in Greece after intercepting Gaza aid" — How will this change our lives?
「イスラエル、ガザ支援物資を阻止後、ギリシャで活動家2人を除く全員を解放」— これは私たちの生活をどのように変えるのでしょうか。
📰 "Zayn Malik cancels US tour and cuts UK dates after hospital bed" — What should people know about this?
「ゼイン・マリク、入院後にアメリカツアーを中止し、イギリス公演を短縮」— 人々はこれについて何を知っておくべきですか
📰 "Myanmar ex-leader Aung San Suu Kyi moved to house arrest, military says" — What should happen next?
「ミャンマー元指導者アウン・サン・スー・チー氏、自宅軟禁に移されたと軍が発表」— 次に何が起こるべきでしょうか？
📰 "British couple jailed in Iran" — How will this change our lives?
「イランで英国人夫婦が収監される」— これは私たちの生活をどのように変えるのでしょうか。
📰 "Brazil's Congress approves plan to drastically cut Bolsonaro's jail term" — How does this affect the country?
「ブラジル議会、ボルソナロ元大統領の刑期を大幅に短縮する計画を承認」— これはその国にどのような影響を与えますか
📰 "US imposes sanctions on DR Congo ex-President Kabila alleging rebel support" — How does this affect the country?
「米国、反政府勢力支援の疑いでコンゴ民主共和国のカビラ前大統領に制裁を科す」— これはその国にどのような影響を与えますか
📰 "After Canada loosens citizenship requirements, thousands of people apply" — How will this change our lives?
「カナダが市民権取得条件を緩和した後、何千人もの人々が申請」— これは私たちの生活をどのように変えるのでしょうか。
📰 "A tech worker in China is laid off and replaced by AI." — Will AI take your job?
「中国のIT技術者が解雇され、AIに置き換えられる」— AIはあなたの仕事を奪うのか
📰 "The U.S. once had a monopoly on rare earths. How it lost" — What should be done about this?
「かつてアメリカはレアアースを独占していました。その地位をどのように失ったのか」— これについてどうすべきでしょうか？
📰 "Myanmar attempts to rehabilitate image with Suu Kyi move" — How does this affect you?
「ミャンマーがスー・チー氏の動きでイメージ回復を図る」— これはあなたにどのような影響を与えますか？
📰 "Zelenskyy says he's seeking details of Putin's May 9 ceasefire proposal" — How will this change our lives?
「ゼレンスキー氏、プーチン氏の5月9日停戦提案の詳細を求めていると発言」— これは私たちの生活をどのように変えるのでしょうか。
📰 "Iranian Nobel laureate Narges Mohammadi hospitalised as health deteriorates" — What should people know about this?
「イランのノーベル賞受賞者ナルゲス・モハンマディ氏、健康悪化で入院」— 人々はこれについて何を知っておくべきですか
📰 "May Day rallies sweep US, demanding reforms for working-class rights" — What's your opinion on this?
「メーデーの抗議運動が全米に広がり、労働者階級の権利改革を要求」— これについてあなたの意見は何ですか？
📰 "Palestinian football boss refuses Israeli handshake at FIFA event" — Do you follow this sport?
「パレスチナのサッカー協会会長がFIFAのイベントでイスラエル側との握手を拒否」— あなたはこのスポーツを応援していますか？
📰 "Cuban man is 18th person to die in US ICE custody this" — How will this change things?
「キューバ人の男性が米国移民税関捜査局（ICE）の拘留下で死亡した18人目に」— これは状況をどのように変えるのでしょうか？
📰 "Barcelona in sight of La Liga title a week before El Clasico" — Do you agree with this decision?
「バルセロナがエル・クラシコの1週間前にリーガ・エスパニョーラ優勝を目前に」— あなたはこの決定に賛成ですか？
📰 "Rebel checkpoints reported around Mali’s capital, northern town seized" — How does this affect you?
「マリの首都周辺で反政府勢力の検問所が報告され、北部の町が制圧される」— これはあなたにどのような影響を与えますか？
📰 "Michael Jackson’s biopic and what it leaves out" — What's the most important part?
「マイケル・ジャクソンの伝記映画と、そこから省かれたもの」— 最も重要な部分は何ですか
📰 "France and Germany send firefighters to help battle woodland blazes in Netherlands" — What's the most important part?
「フランスとドイツがオランダの森林火災を消し止めるために消防士を派遣した」— 最も重要な部分は何ですか
📰 "Gold for Tajikistan on Day 1 in Dushanbe" — Who does this affect most?
「ドゥシャンベでの初日、タジキスタンが金メダルを獲得」— これが最も影響を受けるのは誰ですか？
📰 "Russia launches new Soyuz-5 rocket from Kazakhstan cosmodrome in first test flight" — Why is this important?
「ロシアがカザフスタンの宇宙基地から新型ソユーズ5ロケットの初飛行試験を実施」— なぜこれが重要なのですか
📰 "Hungary's Péter Magyar defends appointing brother-in-law as country's justice minister" — How does this affect the country?
「ハンガリーのペーテル・マジャール氏が義理の兄弟を同国の法務大臣に任命したことを擁護」— これはその国にどのような影響を与えますか
📰 "Brixen Water Light Festival 2026 puts peace at its centre" — What should be done about this?
「2026年ブリクセン水と光のフェスティバルは平和を中心テーマに掲げる」— これについてどうすべきでしょうか？
📰 "Why news publishers are blocking AI from accessing internet archives" — How will this change our lives?
「なぜ新聞社がAIによるインターネットアーカイブへのアクセスを禁止しているのか」— これは私たちの生活をどのように変えるのでしょうか。
📰 "Satellite lofted for first Arab country" — Why is this important?
「アラブ諸国初の人工衛星が打ち上げられる」— なぜこれが重要なのですか
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの大臣が会談」— これはその国にどのような影響を与えますか
📰 "Young Chinese-Irish ballroom dancer goes international" — How does this affect international relations?
「中国系アイルランド人の若い社交ダンサーが国際舞台へ」— これは国際関係にどのような影響を与えますか
📰 "UK and China allow more direct flights" — What's the most important part?
「英国と中国が直行便を増やす」— 最も重要な部分は何ですか
📰 "Bad weather causes massive travel disruption in Britain" — How will this change our lives?
「悪天候により、イギリスで大規模な交通障害が発生」— これは私たちの生活をどのように変えるのでしょうか。
📰 "Four injured in New York City blast, suspect nabbed" — What's your opinion on this?
「ニューヨーク市で爆発、4人が負傷、容疑者を確保」— これについてあなたの意見は何ですか？
📰 "Peter Kay show evacuated after 'suspicious bag' found" — How will this change things?
「ピーター・ケイのショー、不審なバッグ発見で避難」— これは状況をどのように変えるのでしょうか？
📰 "How did Banksy put up a statue in central London" — Who does this affect most?
「バンクシーはどのようにしてロンドン中心部に像を設置したのか」— これが最も影響を受けるのは誰ですか？
📰 "Graham Linehan's conviction for damaging trans activist's phone overturned" — What should be done about this?
「グラハム・ラインハン、トランス活動家の携帯電話を損傷した有罪判決が覆る」— これについてどうすべきでしょうか？
📰 "Britney Spears charged in California with driving under influence" — Is this surprising?
「ブリトニー・スピアーズ、カリフォルニア州で飲酒運転の容疑で起訴される」— これは驚きですか？
📰 "James McAvoy says filming in Wales fuelled his love for the outdoors" — Would you watch this?
「ジェームズ・マカヴォイ、ウェールズでの撮影がアウトドアへの愛情を深めたと語る」— あなたはこれを見ますか？
📰 "Spotify adds 'Verified' badges to distinguish human artists from AI" — How will this change our lives?
「Spotify、人間のアーティストとAIを区別する「認証済み」バッジを追加」— これは私たちの生活をどのように変えるのでしょうか。
📰 "Venice Biennale jury resigns days before start of top art exhibition" — Is this good or bad news?
「ヴェネツィア・ビエンナーレの審査員、主要美術展の開幕直前に辞任」— これは良い知らせでしょうか、それとも悪い知らせでしょうか。
📰 "George Michael's Faith jacket sells for £176,400" — How will this change our lives?
「ジョージ・マイケルの「フェイス」ジャケット、176,400ポンドで落札」— これは私たちの生活をどのように変えるのでしょうか。
📰 "Banksy confirms he's behind statue in central London" — Do you agree with this decision?
「バンクシーがロンドン中心部の像の作者であることを認める」— あなたはこの決定に賛成ですか？
📰 "Billie Eilish puts Manchester at centre of new 3D concert film" — Would you watch this?
「ビリー・アイリッシュがマンチェスターを舞台にした新しい3Dコンサート映画を公開」— あなたはこれを見ますか？
📰 "Pentagon says US military to be an 'AI-first' fighting force" — How will this change our lives?
「米国防総省、米軍を「AI最優先」の戦闘部隊にすると発表」— これは私たちの生活をどのように変えるのでしょうか。
📰 "The Real Greek rescued by Cote Brasserie-owner" — What are the consequences?
「「ザ・リアル・グリーク」がコート・ブラッスリーのオーナーに救われる」— その結果はどうなるのでしょうか？
📰 "Crayola toys recalled over possible asbestos contamination" — What should be done about this?
「クレヨラのおもちゃがアスベスト汚染の可能性でリコール」— これについてどうすべきでしょうか？
📰 "Will AI lead to more accurate opinion polls" — How will this change our lives?
「AIは、世論調査の精度を高めることにつながるのでしょうか。」— これは私たちの生活をどのように変えるのでしょうか。
📰 "No evidence of widespread fuel price-gouging, watchdog says" — Should we rely less on oil?
「監視機関によると、ガソリンの広範囲にわたる価格つり上げの証拠はないとのことです。」— 私たちは石油への依存を減らすべきでしょうか。
📰 "What the Renters' Rights Act means for tenants and landlords" — Is this good or bad news?
「借家人の権利法は、入居者と大家にとって何を意味するのでしょうか。」— これは良い知らせでしょうか、それとも悪い知らせでしょうか。
📰 "Apple says iPhone 17 'most popular ever' as sales soar" — How will this change our lives?
「Appleは、iPhone 17が売上高の急増により「史上最も人気のある機種」だと発表しました。」— これは私たちの生活をどのように変えるのでしょうか。
📰 "South East Water chair resigns after critical report" — How will this change our lives?
「サウス・イースト・ウォーター社の会長が、批判的な報告書を受けて辞任しました。」— これは私たちの生活をどのように変えるのでしょうか。`
        }
    ]
};
