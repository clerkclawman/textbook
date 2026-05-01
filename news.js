// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 01, 2026",
            content: `📰 "British couple jailed in Iran" — How will this change our lives?
「イランでイギリス人夫婦が収監される」— これは私たちの生活をどう変えるのでしょうか？
📰 "Israel releases all but two activists in Greece after intercepting Gaza aid" — How will this change our lives?
「イスラエル、ガザ支援物資を阻止後、ギリシャで活動家2人を除く全員を解放」— これは私たちの生活をどう変えるのでしょうか？
📰 "Myanmar ex-leader Aung San Suu Kyi moved to house arrest, military says" — What should happen next?
「ミャンマー元指導者アウン・サン・スー・チー氏、自宅軟禁に移されたと軍が発表」— 次に何が起こるべきだろうか
📰 "Brazil's Congress approves plan to drastically cut Bolsonaro's jail term" — How does this affect the country?
「ブラジル議会、ボルソナロ元大統領の刑期を大幅に短縮する計画を承認」— これはその国にどのような影響を与えますか？
📰 "US imposes sanctions on DR Congo ex-President Kabila alleging rebel support" — How does this affect the country?
「米国、コンゴ民主共和国のカビラ前大統領に制裁、反政府勢力支援の疑い」— これはその国にどのような影響を与えますか？
📰 "China scraps tariffs for all but one African nation" — Who does this affect most?
「中国がアフリカのほぼすべての国に対する関税を撤廃」— これは誰に最も影響を与えますか？
📰 "Six injured in Washington state school stabbing" — What's the most important part?
「ワシントン州の学校で刺傷事件、6人が負傷」— 最も重要な部分は何ですか？
📰 "Britney Spears charged in California with driving under influence" — Do you agree with this decision?
「ブリトニー・スピアーズ、カリフォルニア州で飲酒運転の容疑で起訴される」— この決定に賛成ですか？
📰 "Venice Biennale jury resigns days before start of top art exhibition" — Is this surprising?
「ヴェネツィア・ビエンナーレの審査員、主要美術展の開幕直前に辞任」— これは驚きですか？
📰 "Former Chick-fil-A employee charged in $80,000 mac-and-cheese scheme" — Is this good or bad news?
「元チックフィレイ従業員、8万ドルのマカロニ＆チーズ詐欺で起訴される」— これは良い知らせですか、それとも悪い知らせですか。
📰 "Scrap the 'unaffordable' pensions triple lock, urges former prime minister Sir Tony" — How does this affect the country?
「「負担できない」年金のトリプルロックを廃止すべきだと、元首相のサー・トニーが主張」— これはその国にどのような影響を与えますか？
📰 "A tech worker in China is laid off and replaced by AI." — Will AI take your job?
「中国のテクノロジー労働者が解雇され、AIに置き換えられる」— AIはあなたの仕事を奪うのでしょうか？
📰 "The U.S. once had a monopoly on rare earths. How it lost" — Do you agree with this decision?
「アメリカはかつてレアアースを独占していた——その地位を失った理由」— この決定に賛成ですか？
📰 "Myanmar attempts to rehabilitate image with Suu Kyi move" — How does this affect you?
「ミャンマー、スー・チー氏への対応でイメージ回復を図る」— これはあなたにどのような影響を与えますか？
📰 "Zelenskyy says he's seeking details of Putin's May 9 ceasefire proposal" — How will this change our lives?
「ゼレンスキー大統領、プーチン氏の5月9日停戦提案の詳細を求めていると発言」— これは私たちの生活をどう変えるのでしょうか？
📰 "20,000 civilian sailors are stuck in the gulf that opens to the" — How will this change our lives?
「2万人の民間船員が、外洋に開けた湾に足止めされている。」— これは私たちの生活をどう変えるのでしょうか？
📰 "Myanmar junta says Suu Kyi moved to house arrest, doubts linger" — What should happen next?
「ミャンマー軍事政権、スー・チー氏を自宅軟禁に移したと発表も、疑念は消えず。」— 次に何が起こるべきだろうか
📰 "Despite growth and pay rises, Greek workers are among the poorest in" — What should be done about this?
「成長と賃上げにもかかわらず、ギリシャの労働者は最も貧しい部類に入る。」— これについてどうすべきでしょうか？
📰 "Mohamed Salah ‘deserves big send-off’, says Liverpool boss Slot" — Is this good or bad news?
「リバプールのスロット監督、モハメド・サラー選手には「盛大な送り出しが必要」と語る。」— これは良い知らせですか、それとも悪い知らせですか。
📰 "Rallies under way as workers gather for International Labour Day" — How does this affect international relations?
「国際労働者の日を前に、労働者たちが集まり抗議活動が行われている。」— これは国際関係にどのような影響を与えますか？
📰 "Commercial flights from Tehran’s main airport resume amid cautious normalcy" — How will this change our lives?
「テヘランの主要空港からの民間便が、慎重な正常化の中で再開される」— これは私たちの生活をどう変えるのでしょうか？
📰 "Ukraine begins to flex muscle as an emerging air power, angering Russia" — How will this change our lives?
「ウクライナが新たな航空戦力として力を示し始め、ロシアを怒らせる」— これは私たちの生活をどう変えるのでしょうか？
📰 "UK police charge man over stabbing of two Jewish men in London" — What should happen next?
「英国警察、ロンドンでユダヤ人男性2人を刺した容疑者を起訴」— 次に何が起こるべきだろうか
📰 "Russia hammers targets across Ukraine overnight" — How will this change our lives?
「ロシア、一晩でウクライナ各地の標的を攻撃」— これは私たちの生活をどう変えるのでしょうか？
📰 "On May Day, Gaza’s workers find whatever source of income they can" — What should be done about this?
「メーデー、ガザの労働者は可能な限りの収入源を探す」— これについてどうすべきでしょうか？
📰 "Workers' health isn't the only thing at risk of job strain —" — Will AI take your job?
「仕事の負担によって危険にさらされるのは、労働者の健康だけではありません。」— AIはあなたの仕事を奪うのでしょうか？
📰 "Dutch football league passport dispute could force replay of 133 matches" — Do you follow this sport?
「オランダのサッカーリーグ、パスポート問題で133試合の再試合の可能性」— あなたはこのスポーツを観戦しますか？
📰 "Experience the best of Europe in 2026 with these new vintage luxury" — Do you agree with this decision?
「2026年、これらの新しいヴィンテージ・ラグジュアリーでヨーロッパの最高を体験しよう」— この決定に賛成ですか？
📰 "Elon Musk clashes with OpenAI lawyer on third day of trial over" — How will this change our lives?
「イーロン・マスク氏、裁判3日目にOpenAIの弁護士と激しく対立」— これは私たちの生活をどう変えるのでしょうか？
📰 "Podcast | Is the future looking bright or bleak for European workers" — Do you agree with this decision?
「ポッドキャスト | ヨーロッパの労働者の未来は明るいのか、それとも暗いのか」— この決定に賛成ですか？
📰 "‘A united region’" — Is this good or bad news?
「「団結した地域」」— これは良い知らせですか、それとも悪い知らせですか。
📰 "Activists on Gaza flotilla intercepted by Israel disembark in Crete" — How will this change things?
「ガザ支援船団でイスラエルに阻止された活動家たちがクレタ島に上陸」— これで状況はどう変わりますか？
📰 "Brazil's Congress reduces ex-President Bolsonaro's coup prison sentence" — How does this affect the country?
「ブラジル議会、元大統領ボルソナロのクーデターに関する禁錮刑を減刑」— これはその国にどのような影響を与えますか？
📰 "After Orbán's defeat, the EU faces tough questions about Ukraine's accession" — How will this change our lives?
「オルバン氏の敗北後、EUはウクライナ加盟に関して厳しい問いに直面」— これは私たちの生活をどう変えるのでしょうか？
📰 "Satellite lofted for first Arab country" — Why is this important?
「アラブ諸国初となる人工衛星が打ち上げられる」— なぜこれが重要なのですか。
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの大臣が会談」— これはその国にどのような影響を与えますか？
📰 "Young Chinese-Irish ballroom dancer goes international" — How does this affect international relations?
「若い中国系アイルランド人の社交ダンサーが国際的に活躍」— これは国際関係にどのような影響を与えますか？
📰 "UK and China allow more direct flights" — What's the most important part?
「英国と中国が直行便を増やす」— 最も重要な部分は何ですか？
📰 "Bad weather causes massive travel disruption in Britain" — How will this change our lives?
「悪天候により英国で大規模な交通障害が発生」— これは私たちの生活をどう変えるのでしょうか？
📰 "Four injured in New York City blast, suspect nabbed" — How will this change things?
「ニューヨーク市で爆発、4人負傷、容疑者を逮捕」— これで状況はどう変わりますか？
📰 "Banksy confirms he's behind statue in central London" — What should be done about this?
「バンクシーがロンドン中心部の像の作者であることを認める」— これについてどうすべきでしょうか？
📰 "One of the world's most valuable books goes on display in Glasgow" — What's the most important part?
「世界で最も価値のある本の一つがグラスゴーで展示される」— 最も重要な部分は何ですか？
📰 "Will Disney lose its licenses over Jimmy Kimmel's Melania 'widow' joke" — Would you watch this?
「ジミー・キンメルがメラニアを「未亡人」とジョークしたことで、ディズニーはライセンスを失うのか？」— あなたはこれを見ますか？
📰 "Stephen Fry sues tech conference for up to £100,000 after falling off" — How will this change our lives?
「スティーブン・フライ、転落後に技術会議を最大10万ポンドで訴える」— これは私たちの生活をどう変えるのでしょうか？
📰 "Hollyoaks storyline 'devastating but important'" — Is this surprising?
「『ホリーオークス』のストーリー展開は「衝撃的だが重要」」— これは驚きですか？
📰 "Catherine Zeta-Jones joins Sir Anthony Hopkins in Dylan Thomas film" — Would you watch this?
「キャサリン・ゼタ＝ジョーンズが、アンソニー・ホプキンス卿と共にディラン・トーマス映画に出演」— あなたはこれを見ますか？
📰 "No evidence of widespread fuel price-gouging, watchdog says" — Should we rely less on oil?
「広範囲にわたるガソリンの価格つり上げの証拠はないと監視機関が発表」— 私たちは石油への依存を減らすべきでしょうか？
📰 "Apple says iPhone 17 'most popular ever' as sales soar" — How will this change our lives?
「アップル、iPhone 17が「史上最も人気」と発表、売上急増」— これは私たちの生活をどう変えるのでしょうか？
📰 "What the Renters' Rights Act means for tenants and landlords" — How does this affect you?
「借主の権利法が入居者と大家にとって何を意味するのか」— これはあなたにどのような影響を与えますか？
📰 "Will AI lead to more accurate opinion polls" — How will this change our lives?
「AIは世論調査の精度を高めることになるのか」— これは私たちの生活をどう変えるのでしょうか？`
        }
    ]
};
