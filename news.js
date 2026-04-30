// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - April 30, 2026",
            content: `📰 "US singer D4vd bought tools online to dispose of girl's body, prosecutors" — What's the most important part?
「アメリカの歌手D4vdが、少女の遺体を処分するための道具をインターネットで購入したと検察が発表」— 最も重要な部分は何ですか？
📰 "'I did not expect it'" — Is this surprising?
「「予想していませんでした」」— これは驚くべきことですか？
📰 "King and Queen lay flowers at 9/11 Memorial in New York" — What should be done about this?
「国王と王妃がニューヨークの9/11追悼施設に花を捧げる」— これに対して何をすべきか？
📰 "Hungary's next PM says frozen EU funds will be paid out soon" — How does this affect the country?
「ハンガリーの次期首相が、凍結されたEUの資金はまもなく支払われると発言」— これはその国にどのような影響を与えますか？
📰 "US charges Mexican governor and other leaders with aiding drug cartel" — How does this affect the country?
「アメリカがメキシコの知事や他の指導者を麻薬カルテルへの協力で起訴」— これはその国にどのような影響を与えますか？
📰 "Florida lawmakers approve new voting maps to favour Republicans" — How will this change our lives?
「フロリダ州議会、共和党に有利な新しい選挙区割りを承認」— これは私たちの生活をどう変えるのでしょうか？
📰 "Russia scales back Moscow Victory Day parade, blaming threat from Ukraine" — How will this change our lives?
「ロシア、ウクライナからの脅威を理由にモスクワ戦勝記念パレードを縮小」— これは私たちの生活をどう変えるのでしょうか？
📰 "Stephen Fry, 68, sues tech conference for £100,000 in damages after he" — How will this change our lives?
「68歳のスティーブン・フライ、テクノロジー会議を相手に10万ポンドの損害賠償を求めて提訴」— これは私たちの生活をどう変えるのでしょうか？
📰 "The King and Queen welcome stars including Stella McCartney, Katherine Jenkins, Karlie" — Who does this affect most?
「国王夫妻、ステラ・マッカートニー、キャサリン・ジェンキンス、カーリーらスターを歓迎」— これが最も影響を受けるのは誰か？
📰 "Angela Rayner's allies say Starmer has 'got to go'" — Is this good or bad news?
「アンジェラ・レイナーの側近、スターマー氏は「辞めるべき」と発言」— これは良い知らせですか、それとも悪い知らせですか？
📰 "Record number of parking tickets quashed last year after appeals soared to" — How will this change our lives?
「昨年、不服申し立てが急増した結果、取り消された駐車違反切符の数が過去最多となりました。」— これは私たちの生活をどう変えるのでしょうか？
📰 "Angela Rayner's VERY wild night out in Parliament revealed, as witnesses share" — Who does this affect most?
「アンジェラ・レイナーの議会での非常に派手な夜の過ごし方が、目撃者たちの証言により明らかになりました。」— これが最も影響を受けるのは誰か？
📰 "'They are so rude. The whole family is tainted'" — How will this change our lives?
「「彼らはとても失礼だ。家族全体が汚染されている。」」— これは私たちの生活をどう変えるのでしょうか？
📰 "Mystery of the mummified corpse found in Chelsea knotweed jungle at £4million" — How does this affect the economy?
「チェルシーの400万ポンドの敷地に生い茂るイタドリのジャングルで発見されたミイラ化した遺体の謎。」— これは経済にどのような影響を与えるのでしょうか。
📰 "Rebel Wilson is accused of calling actress a 'prostitute' after sharing racy" — Would you watch this?
「レベル・ウィルソンが、ある女優を「売春婦」と呼んだと非難されています。きわどい画像を共有した後に。」— あなたはこれを見ますか？
📰 "Trinny Woodall, 62, vows not to 'disappear' as she ages and says" — How will this change our lives?
「62歳のトリニー・ウッドオールは、年を重ねても「消え去る」つもりはないと語っています。」— これは私たちの生活をどう変えるのでしょうか？
📰 "The Austrian nuns who fled their care home are now in Rome" — Do you agree with this decision?
「介護施設を逃げ出したオーストリアの修道女たちは、現在ローマにいます。」— あなたはこの決定に賛成ですか
📰 "South Korean court sentences ex-President Yoon to 7 years in prison" — How does this affect the country?
「韓国の裁判所は、ユン前大統領に懲役7年の判決を言い渡しました。」— これはその国にどのような影響を与えますか？
📰 "EU says Meta is failing to keep underage users off Facebook and" — How will this change our lives?
「EUは、メタ社が未成年のユーザーをFacebookから遠ざけることに失敗していると述べています。」— これは私たちの生活をどう変えるのでしょうか？
📰 "Palestinian refugee uses art to share the story of his childhood with" — Do you agree with this decision?
「パレスチナ難民の男性が、自身の子供時代の物語を伝えるために芸術を活用しています。」— あなたはこの決定に賛成ですか
📰 "How the U.K. is reacting to King Charles' visit to the U.S." — Who does this affect most?
「英国はチャールズ国王のアメリカ訪問にどのように反応しているか」— これが最も影響を受けるのは誰か？
📰 "Will UAE's departure from OPEC affect the oil cartel's future influence" — Should we rely less on oil?
「UAEのOPEC脱退は石油カルテルの将来の影響力に影響するか」— 私たちは石油への依存を減らすべきだろうか？
📰 "Iranian officials to miss FIFA Congress over alleged mistreatment in Canada" — What's your opinion on this?
「イラン当局者、カナダでの不当な扱いを理由にFIFA総会を欠席へ」— これについてあなたの意見は何ですか？
📰 "Why is India turning to crocodiles and snakes to ‘fence’ Bangladesh border" — How does this affect international relations?
「なぜインドはバングラデシュ国境の「フェンス」にワニやヘビを利用しようとしているのか」— これは国際関係にどのような影響を与えますか？
📰 "Europe’s little-known mutual defence clause" — What's the most important part?
「ヨーロッパのあまり知られていない相互防衛条項」— 最も重要な部分は何ですか？
📰 "New Zealand court denies bid by mosque mass shooter to appeal conviction" — How will this change our lives?
「ニュージーランドの裁判所、モスク乱射事件の犯人の控訴を認めず」— これは私たちの生活をどう変えるのでしょうか？
📰 "Marathon record breaker Sabastian Sawe returns to hero’s welcome in Kenya" — Do you agree with this decision?
「マラソン記録更新のサバスチャン・サウェ、ケニアで英雄的な歓迎を受ける」— あなたはこの決定に賛成ですか
📰 "London police release bodycam of arrest after two Jewish men stabbed" — What should happen next?
「ロンドン警察、ユダヤ人男性2人刺傷事件の逮捕時のボディカメラ映像を公開」— 次に何が起こるべきでしょうか
📰 "Video emerges of heavy firefight in Mali" — How can we prevent conflicts?
「マリでの激しい戦闘の映像が公開される」— どのようにして紛争を防ぐことができるでしょうか
📰 "Oil prices soar on fears of long supply disruption, US siege of" — How will higher prices affect you?
「長期供給途絶の懸念と米国の包囲で原油価格が高騰」— 物価の上昇はあなたにどのような影響を与えますか？
📰 "US indicts Sinaloa governor, 9 others over Mexican drug cartel links" — Is this surprising?
「メキシコのシナロア州知事ら10人が、麻薬カルテルとの関係でアメリカに起訴される」— これは驚くべきことですか？
📰 "Israel seizes Global Sumud Flotilla boats 1,000km away from Gaza" — Is this surprising?
「イスラエルがガザから1000キロ離れた場所で「グローバル・スムード・フロティラ」の船を押収」— これは驚くべきことですか？
📰 "Pro-government rally in Tehran demands end to US threats" — How does this affect the country?
「テヘランで親政府デモ、アメリカの脅威を終わらせるよう要求」— これはその国にどのような影響を与えますか？
📰 "Carney ‘strong’ in year one, now must deliver on promises in Canada" — What are the consequences?
「カーニー首相、1年目は「強い」評価、今後はカナダでの公約実現が課題」— その結果はどうなるのか？
📰 "Snow cover in the Greek mountains has declined by 58% in the" — How will this change our lives?
「ギリシャの山々の積雪が58%減少」— これは私たちの生活をどう変えるのでしょうか？
📰 "Google parent Alphabet profit jumps 81% in Big Tech earnings roundup" — How will this change our lives?
「グーグルの親会社アルファベット、大手ハイテク企業の決算で利益が81%増加」— これは私たちの生活をどう変えるのでしょうか？
📰 "Smoke rises over Russia’s Tuapse after Ukrainian drone strikes hit oil refinery" — How will higher prices affect you?
「ウクライナのドローン攻撃で製油所が被害を受け、ロシアのトゥアプセで煙が上がる」— 物価の上昇はあなたにどのような影響を与えますか？
📰 "Are you a chip stealer" — Who does this affect most?
「あなたはチップを盗む人ですか？」— これが最も影響を受けるのは誰か？
📰 "Europe Today" — Who does this affect most?
「今日のヨーロッパ」— これが最も影響を受けるのは誰か？
📰 "Czechia" — What's your opinion on this?
「チェコ共和国」— これについてあなたの意見は何ですか？
📰 "‘Itching to pump more oil’" — Should we rely less on oil?
「もっと石油を掘りたくてうずうずしている」— 私たちは石油への依存を減らすべきだろうか？
📰 "Latest news bulletin | April 30th, 2026 – Morning" — What are the consequences?
「最新ニュース速報 | 2026年4月30日 – 朝」— その結果はどうなるのか？
📰 "Europe’s tax divide" — Who does this affect most?
「ヨーロッパの税金格差」— これが最も影響を受けるのは誰か？
📰 "Wraparound screens, work pods and relax rows" — What are the consequences?
「ぐるりと囲まれたスクリーン、ワークポッド、リラックス列」— その結果はどうなるのか？
📰 "‘Now I believe in myself,’ Yomif Kejelcha on his sub-2-hour marathon and" — What should be done about this?
「「今は自分を信じている」ヨミフ・ケジェルチャ、サブ2時間マラソンについて語る」— これに対して何をすべきか？
📰 "Would you take orders from a chatbot" — What's the most important part?
「チャットボットからの指示に従いますか？」— 最も重要な部分は何ですか？
📰 "Video shows suspect approaching police after stabbing in north London" — How will this change our lives?
「ロンドン北部での刺傷事件後、容疑者が警察に近づく映像」— これは私たちの生活をどう変えるのでしょうか？
📰 "Satellite lofted for first Arab country" — How does this affect international relations?
「アラブ諸国初の人工衛星が打ち上げられる」— これは国際関係にどのような影響を与えますか？
📰 "Satellite lofted for first Arab country" — How does this affect international relations?
「アラブ諸国初の人工衛星が打ち上げられる」— これは国際関係にどのような影響を与えますか？
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの閣僚が会談」— これはその国にどのような影響を与えますか？`
        }
    ]
};
