// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 14, 2026",
            content: `📰 "Trade, Iran and Taiwan on the agenda as Trump arrives in China" — How will this change our lives?
「トランプ大統領が中国に到着、貿易問題やイラン、台湾が議題に」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Court overturns Alex Murdaugh's murder convictions and orders new trial" — What should happen next?
「裁判所がアレックス・マードーの殺人有罪判決を覆し、再審を命じる」— 次に何が起こるべきでしょうか
📰 "Dozens of dogs rescued and suspect arrested in Uganda after BBC investigation" — What should happen next?
「BBCの調査を受けて、ウガンダで数十匹の犬が救出され、容疑者が逮捕される」— 次に何が起こるべきでしょうか
📰 "Woman isolating on British island in South Pacific after hantavirus contact" — What should people know about this?
「ハンタウイルスに接触した女性が南太平洋のイギリス領の島で隔離中」— 人々はこれについて何を知っておくべきでしょうか？
📰 "What to know as Trump visits Xi in China" — What's your opinion on this?
「トランプ大統領が中国で習主席を訪問する際に知っておくべきこと」— これについてあなたの意見は何ですか？
📰 "Lockdown in Philippine Senate after gunshots fired" — How does this affect the country?
「フィリピン上院で発砲事件、議会が封鎖される」— これは国にどのような影響を与えるのでしょうか。
📰 "Israeli strikes on cars in southern Lebanon kill 12, health ministry says" — What should people know about this?
「レバノン南部でイスラエル軍が車両を攻撃、保健省によると12人死亡」— 人々はこれについて何を知っておくべきでしょうか？
📰 "Deadly Russian drone attacks on Ukraine resume after ceasefire expires" — How will this change our lives?
「停戦期限切れ後、ロシアによるウクライナへの無人機攻撃が再開、死者発生」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Shrinking Milka chocolate bar tricked consumers, says German court" — What should happen next?
「ミルカのチョコレートバーが縮小、ドイツ裁判所が消費者を欺いたと判断」— 次に何が起こるべきでしょうか
📰 "More than 1,000 passengers held on cruise after gastrointestinal illness outbreak" — What should be done about this?
「胃腸炎の集団発生後、クルーズ船で1000人以上の乗客が拘束される」— これに対して何をすべきでしょうか？
📰 "Climbers clear path to Everest summit past giant chunk of ice" — How does this affect international relations?
「登山者たちが、巨大な氷の塊を越えてエベレスト山頂への道を切り開く」— これは国際関係にどのような影響を与えるのか。
📰 "Nigerian film star Alexx Ekubo dies aged 40" — Would you watch this?
「ナイジェリアの映画スター、アレックス・エクボさんが40歳で死去」— あなたはこれを見ますか？
📰 "Thousands of Waymos recalled after robotaxi swept into a creek" — How will this change our lives?
「自動運転タクシーが小川に流された後、数千台のウェイモがリコールされる」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Ghana to evacuate 300 from South Africa over anti-immigrant protests" — What are the consequences?
「ガーナ、反移民抗議を受け南アフリカから300人を避難させる」— その結果として何が起こるのでしょうか？
📰 "In Hormuz deadlock, U.S. and Iran refuse to back down" — What's your opinion on this?
「ホルムズ海峡の膠着状態で、アメリカとイランが譲歩を拒否」— これについてあなたの意見は何ですか？
📰 "Five countries boycott Eurovision Song Contest over Israel's participation" — Would you listen to this?
「イスラエルの参加に抗議して、5か国がユーロビジョン・ソング・コンテストをボイコットする」— あなたはこれを聞きますか？
📰 "Greetings from Seville, where springtime means caracoles" — Do you agree with this decision?
「セビリアからのご挨拶。春といえばカラコレス（カタツムリ料理）です」— あなたはこの決定に賛成ですか？
📰 "Gunfire breaks out in Philippine Senate as police try to arrest senator" — How does this affect the country?
「フィリピン上院で警官が上院議員を逮捕しようとした際、銃撃が発生する」— これは国にどのような影響を与えるのでしょうか。
📰 "War in Iran costs $29 billion so far. And, students are finally" — How can we prevent conflicts?
「イランでの戦争はこれまでに290億ドルの費用がかかっている。そして、学生たちはついに」— 紛争を防ぐにはどうすればよいでしょうか。
📰 "Trump expected to talk Iran and trade during summit in China" — How does this affect international relations?
「トランプ氏は中国での首脳会談でイランと貿易について話し合う見込み」— これは国際関係にどのような影響を与えるのか。
📰 "Chinese economist talks about the competing interest of China and the U.S." — What should be done about this?
「中国の経済学者が、アメリカと中国の対立する利害について語っています。」— これに対して何をすべきでしょうか？
📰 "Putin hails Russia's test launch of a new ballistic missile" — Is this good or bad?
「プーチン大統領が、新型弾道ミサイルの試験発射を称賛しています。」— これは良いことなのでしょうか、それとも悪いことなのでしょうか。
📰 "Japanese snack packages turning black-and-white as Iran war depletes ink supply" — How can we prevent conflicts?
「イラン戦争でインクの供給が不足し、日本のスナック菓子のパッケージが白黒になっています。」— 紛争を防ぐにはどうすればよいでしょうか。
📰 "Is the U.S. slipping into 'Competitive Authoritarianism" — How will this change things?
「アメリカは「競争的権威主義」に陥っているのでしょうか。」— これによって、何が変わるのでしょうか。
📰 "Republicans break ranks, but Senate fails to curb Trump’s Iran war powers" — How does this affect the country?
「共和党からも反対意見が出ましたが、上院はトランプ大統領のイランに対する戦争権限を制限できませんでした。」— これは国にどのような影響を与えるのでしょうか。
📰 "Russia unleashes massive drone barrage on Ukraine killing six" — How can we prevent this?
「ロシアがウクライナに大規模なドローン攻撃を行い、6人が死亡しました。」— これを防ぐためにはどうすればよいでしょうか？
📰 "New eye scan detects diseases years before symptoms appear" — What are the benefits?
「新しい目の検査で、症状が出る何年も前に病気を発見できます。」— その利点は何ですか。
📰 "Will the boycott of Eurovision have any impact" — Who does this affect most?
「ユーロビジョンのボイコットは影響を与えるでしょうか。」— これが最も影響を受けるのは誰か。
📰 "Hamas must disarm, not ‘disappear’ from Gaza" — What are the benefits?
「ハマスはガザから「姿を消す」のではなく、武装解除すべきです。」— その利点は何ですか。
📰 "Netanyahu visited UAE in ‘secret’ during US-Israel war on Iran, office says" — How can we prevent conflicts?
「ネタニヤフ首相は、米国とイスラエルによるイランへの戦争中に「秘密裏に」UAEを訪問したと事務所が発表しました。」— 紛争を防ぐにはどうすればよいでしょうか。
📰 "There’s an app for that" — How should we use this?
「それにはアプリがあります。」— これはどのように使えばいいですか？
📰 "Mexico’s Claudia Sheinbaum denies reports of CIA operations against cartels" — Will this continue?
「メキシコのクラウディア・シェインバウム氏、カルテルに対するCIAの作戦の報道を否定」— これは続くのでしょうか？
📰 "Kevin Warsh confirmed as new US Federal Reserve chair amid controversy" — What are the risks?
「ケビン・ウォーシュ氏、物議を醸す中で新たな米連邦準備制度理事会議長に承認」— リスクは何ですか？
📰 "How US donor bodies were sold for Israeli military training" — What did they achieve?
「米国の遺体がイスラエルの軍事訓練用にどのように売却されたか」— 彼らは何を達成しましたか？
📰 "US Senator Cassidy’s vote to convict Trump looms over Louisiana primary" — What will happen next?
「トランプ前大統領の有罪評決に賛成した米上院議員キャシディ氏、ルイジアナ州予備選で影を落とす」— 次に何が起こるのか。
📰 "Drug overdose deaths drop in United States for third year in a" — What are the consequences?
「アメリカで薬物の過剰摂取による死亡者数が3年連続で減少」— その結果として何が起こるのでしょうか？
📰 "Can Macron’s Kenya visit revive French influence in Africa" — Who does this affect most?
「マクロン大統領のケニア訪問は、フランスの影響力をアフリカで回復させることができるのか」— これが最も影響を受けるのは誰か。
📰 "South Carolina court tosses murder conviction in Alex Murdaugh case" — How can we prevent this?
「サウスカロライナ州の裁判所が、アレックス・マードー事件の殺人罪の有罪判決を破棄」— これを防ぐためにはどうすればよいでしょうか？
📰 "Pro-Palestine chants disrupt Israel Eurovision performance" — What should be done about this?
「イスラエルのユーロビジョン出演中に、パレスチナ支持のチャントが中断させる」— これに対して何をすべきでしょうか？
📰 "Princess Catherine visits Italy on first overseas trip since cancer diagnosis" — What should people know about this?
「キャサリン妃、がん診断後初の海外訪問でイタリアへ」— 人々はこれについて何を知っておくべきでしょうか？
📰 "Europe watches Beijing summit from the sidelines and fears the worst" — How does this affect international relations?
「ヨーロッパは北京での首脳会談を傍観し、最悪の事態を恐れている。」— これは国際関係にどのような影響を与えるのか。
📰 "Is Global Europe the answer to shifting alliances" — Who does this affect most?
「「グローバル・ヨーロッパ」は変わりゆく同盟関係への答えとなるのか。」— これが最も影響を受けるのは誰か。
📰 "Hungary's Magyar set to outline his red lines over EU funding talks" — How does this affect you?
「ハンガリーのマジャール氏は、EUの資金協議における自らの譲れない線を示す構えだ。」— これはあなたにどのような影響を与えるのか。
📰 "Syria needs 'comprehensive security agreement' with Israel, foreign minister tells Euronews" — What will happen next?
「シリアはイスラエルとの「包括的な安全保障合意」を必要としていると、外相がユーロニュースに語った。」— 次に何が起こるのか。
📰 "EU Commission to dispatch team to Budapest as it mulls Hungarian investment" — What's the most important part?
「EU委員会はハンガリーへの投資を検討する中、チームをブダペストに派遣する。」— 最も重要な部分は何ですか？
📰 "Brazil ‘surprised’ by EU ban on meat imports" — What's the most important part?
「ブラジル、EUによる肉類輸入禁止に「驚き」」— 最も重要な部分は何ですか？
📰 "Turkey removes a rules on direct trade with Armenia to improve ties" — What's the most important part?
「トルコ、アルメニアとの直接貿易に関する規制を撤廃し関係改善へ」— 最も重要な部分は何ですか？
📰 "Staged claims and Israeli hoaxes" — What are the risks?
「でっち上げられた主張とイスラエルの偽情報」— リスクは何ですか？
📰 "Lamine Yamal’s Palestine flag wave revives debate over politics in football" — Do you follow this sport?
「ラミン・ヤマルのパレスチナ国旗掲揚がサッカーと政治の議論を再燃させる」— あなたはこのスポーツを観ますか？
📰 "End 'barbaric' conversion practices now, Brussels tells EU countries" — Is this surprising?
「「野蛮な」転向療法を今すぐやめよ、EUが加盟国に要請」— これは驚きですか？`
        }
    ]
};
