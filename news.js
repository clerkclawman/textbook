// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 03, 2026",
            content: `📰 "Germany says US troop withdrawal 'foreseeable' as Nato seeks clarification" — How will this change things?
「ドイツは、NATOが説明を求める中、アメリカ軍の撤退は「予想できる」と述べた。」— これは状況をどのように変えるのでしょうか？
📰 "US threatens shipping firms with sanctions if they pay Iran tolls" — What's your opinion on this?
「アメリカは、イランに通行料を支払った場合、海運会社に制裁を科すと警告している。」— これについてあなたの意見は何ですか？
📰 "Taiwan president visits Eswatini days after blaming China for cancelled trip" — How does this affect the country?
「台湾の総統が、訪問中止の責任を中国に求めた数日後にエスワティニを訪問した。」— これはその国にどのような影響を与えますか？
📰 "Ex-F1 driver and Paralympic champion Zanardi dies" — Do you agree with this decision?
「元F1ドライバーでパラリンピックチャンピオンのザナルディが死去した。」— あなたはこの決定に賛成ですか？
📰 "Cuba condemns new US sanctions as 'illegal' and 'abusive'" — What's your opinion on this?
「キューバは、アメリカの新たな制裁を「違法」で「乱暴」だと非難した。」— これについてあなたの意見は何ですか？
📰 "US court limits mail-order access to abortion pill mifepristone" — How will this change our lives?
「アメリカの裁判所が、中絶薬ミフェプリストンの郵送販売を制限しました。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Now Greens want to tear up strike laws that could revive flying" — How can we prevent conflicts?
「今、緑の党はストライキに関する法律を撤廃しようとしており、それが飛行機の運航再開につながる可能性があります。」— どうすれば紛争を防ぐことができるでしょうか。
📰 "Taiwan's Lai lands in Eswatini in a trip delayed by lack of" — How will this change our lives?
「台湾の頼氏がエスワティニに到着しました。この訪問は、何かの不足により遅れていました。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Banksy confirms new statue installed in central London is his work" — How does this affect you?
「バンクシーは、ロンドン中心部に設置された新しい彫刻が自身の作品であると認めました。」— これはあなたにどのような影響を与えますか？
📰 "Imprisoned Iranian Nobel Peace Prize winner in critical condition" — Is this punishment fair?
「投獄されているイランのノーベル平和賞受賞者が、危険な状態にあります。」— この罰は公平でしょうか。
📰 "New Netflix documentary reexamines Winnie Mandela's divisive legacy" — Would you watch this?
「Netflixの新しいドキュメンタリーが、ウィニー・マンデラの賛否両論ある功績を再検証する。」— あなたはこれを見ますか？
📰 "After Assad's fall, Syria's Kurds are left in limbo, feeling abandoned by" — Would you listen to this?
「アサド政権崩壊後、シリアのクルド人は見捨てられたように宙ぶらりんの状態にある。」— あなたはこれを聞きますか？
📰 "Air Force says former Qatari 747 will be ready to fly as" — How will this change our lives?
「空軍によると、かつてカタールが所有していた747型機が飛行可能な状態になるという。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "U.S. to withdraw 5,000 troops from Germany in next 6-12 months" — Is this surprising?
「アメリカは今後6〜12か月でドイツから5000人の部隊を撤退させる。」— これは驚くべきことですか？
📰 "After Canada loosens citizenship requirements, thousands of people apply" — How will this change our lives?
「カナダが市民権の要件を緩和した後、何千人もの人々が申請している。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "A tech worker in China is laid off and replaced by AI." — Will AI take your job?
「中国で技術系の社員が解雇され、AIに置き換えられた。」— AIはあなたの仕事を奪うだろうか？
📰 "Ukraine eyes Belarus border activities as Russian strikes persist" — How will this change our lives?
「ロシアの攻撃が続く中、ウクライナがベラルーシ国境の動きを注視」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Syria becomes alternative energy corridor for oil as Hormuz effectively blo" — Should we rely less on oil?
「ホルムズ海峡が事実上封鎖される中、シリアが石油の代替エネルギー回廊に」— 私たちは石油への依存を減らすべきでしょうか？
📰 "Israel’s expanding ‘orange line’ tightens deadly no-go zones in Gaza" — Is this surprising?
「イスラエルが拡大する「オレンジライン」でガザの立ち入り禁止区域を厳しく」— これは驚くべきことですか？
📰 "Arsenal ease past Fulham to pull six points clear of Manchester City" — Is this surprising?
「アーセナルがフルアムを楽々と下し、マンチェスター・シティに6ポイント差をつける」— これは驚くべきことですか？
📰 "Spain demands Israel release arrested Gaza flotilla crew member" — How will this change our lives?
「スペインがイスラエルに対し、ガザ支援船団で拘束された乗組員の解放を要求」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Devastation of Southern Lebanon continues under ‘ceasefire’" — What should be done about this?
「「停戦」下でも続く南レバノンの壊滅的な被害」— これに対して何をすべきですか？
📰 "Yemen reports hijacked oil tanker headed for Somalia" — Should we rely less on oil?
「イエメン、ソマリアへ向かうハイジャックされた石油タンカーを報告」— 私たちは石油への依存を減らすべきでしょうか？
📰 "Spain’s Sanchez demands Netanyahu free Spaniard seized on aid flotilla" — How will this change our lives?
「スペインのサンチェス首相、支援船団で拘束された自国民の解放をネタニヤフ氏に要求」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Mexico’s Sinaloa state governor resigns amid US drug trafficking charges" — How will this change things?
「メキシコ・シナロア州知事、米国の麻薬密輸容疑で辞任」— これは状況をどのように変えるのでしょうか？
📰 "Israel’s ‘two-tier’ policing and the crime epidemic in Palestinian towns" — What's your opinion on this?
「イスラエルの「二重基準」の警察対応とパレスチナの町での犯罪の増加」— これについてあなたの意見は何ですか？
📰 "The United States of Conspiracy" — Is this surprising?
「陰謀論の国、アメリカ」— これは驚くべきことですか？
📰 "The dark side of Gaza’s new fancy cafes and restaurants" — What should be done about this?
「ガザの新しいおしゃれなカフェやレストランの暗い側面」— これに対して何をすべきですか？
📰 "Iran executes two more over 'spying for Israel'" — What are the consequences?
「イラン、「イスラエルへのスパイ行為」でさらに2人を処刑」— その結果はどうなりますか？
📰 "Robert Fico will back Ukraine's EU membership after call, Zelenskyy says" — How will this change our lives?
「ゼレンスキー氏、ロベルト・フィコ氏が電話後にウクライナのEU加盟を支持すると発表」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Double delight for Tajikistan on Day 2 in Dushanbe" — What's your opinion on this?
「タジキスタン、ドゥシャンベ大会2日目に二重の喜び」— これについてあなたの意見は何ですか？
📰 "End of the rescue operation" — What's the most important part?
「救助活動の終了」— 最も重要な部分は何ですか？
📰 "Thousands at illegal French rave on 'dangerous' military site" — Is this good or bad news?
「フランスで違法レイブ、危険な軍事施設に数千人が集まる」— これは良い知らせですか、それとも悪い知らせですか？
📰 "Humpback whale stranded in Germany released into North Sea" — Is this surprising?
「ドイツで座礁したザトウクジラ、北海に放たれる」— これは驚くべきことですか？
📰 "Ex F1 driver and Paralympic champion Alex Zanardi dies at 59" — What are the consequences?
「元F1ドライバーでパラリンピックチャンピオンのアレックス・ザナルディ、59歳で死去」— その結果はどうなりますか？
📰 "Two flotilla detainees arrive in Israel amid fears for Spaniard Abu Keshek" — How will this change our lives?
「船団の拘束者2名がイスラエルに到着、スペイン人アブ・ケシェク氏の安否が懸念される」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Iranian Nobel laureate Narges Mohammadi hospitalised amid deteriorating health condition" — What should people know about this?
「イランのノーベル賞受賞者ナルゲス・モハンマディ氏、健康状態悪化で入院」— これについて人々が知っておくべきことは何ですか？
📰 "Spirit Airlines says it is going out of business and ending operations" — How will this change our lives?
「スピリット航空、事業停止と運航終了を発表」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Satellite lofted for first Arab country" — Why is this important?
「アラブ諸国初の人工衛星が打ち上げられる」— なぜこれが重要なのですか？
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの閣僚が会合」— これはその国にどのような影響を与えますか？
📰 "Young Chinese-Irish ballroom dancer goes international" — How does this affect international relations?
「若い中国系アイルランド人の社交ダンサーが国際的に活躍」— これは国際関係にどのような影響を与えますか？
📰 "UK and China allow more direct flights" — How does this affect you?
「英国と中国がより多くの直行便を許可」— これはあなたにどのような影響を与えますか？
📰 "Bad weather causes massive travel disruption in Britain" — How will this change our lives?
「悪天候が英国で大規模な交通混乱を引き起こす」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Four injured in New York City blast, suspect nabbed" — What are the consequences?
「ニューヨーク市の爆発で4人が負傷、容疑者が逮捕」— その結果はどうなりますか？
📰 "There was one way we'd agree to do Devil Wears Prada 2," — Do you agree with this decision?
「『プラダを着た悪魔2』に同意する唯一の方法があった」— あなたはこの決定に賛成ですか？
📰 "Star-studded line-up says for Celebrity Traitors series two" — How will this change our lives?
「豪華スター勢ぞろいの『セレブリティ・トレイターズ』シーズン」— これは私たちの生活をどのように変えるのでしょうか？
📰 "EastEnders star on the mental health story 'for everyone'" — What should people know about this?
「『イーストエンダーズ』俳優が語る「みんなのための」メンタルヘルスの物語」— これについて人々が知っておくべきことは何ですか？
📰 "Zayn Malik cancels US tour and cuts UK dates after hospital bed" — What should people know about this?
「ゼイン・マリク、入院を経て全米ツアーを中止、英国公演も縮小」— これについて人々が知っておくべきことは何ですか？
📰 "How did Banksy put up a statue in central London" — Do you agree with this decision?
「バンクシーはどのようにしてロンドン中心部に像を設置したのか」— あなたはこの決定に賛成ですか？
📰 "Matthew Rhys says his only hope was the army – but it" — What's your opinion on this?
「マシュー・リース、唯一の希望は軍隊だったと語る——しかし」— これについてあなたの意見は何ですか？`
        }
    ]
};
