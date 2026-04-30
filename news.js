// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 01, 2026",
            content: `📰 "Myanmar ex-leader Aung San Suu Kyi moved to house arrest, military says" — How does this affect the country?
「ミャンマーの元指導者アウンサンスーチー氏が自宅軟禁に移されたと軍が発表」— これはその国にどのような影響を与えるのか
📰 "'How are we going to get back home" — How does this affect you?
「どうやって家に帰ればいいんだろう」— これはあなたにどのような影響を与えるのか
📰 "Israel intercepts Gaza flotilla near Crete and detains 175 activists" — How will this change our lives?
「イスラエルがクレタ島沖でガザの船団を阻止し、活動家175人を拘束」— これは私たちの生活をどのように変えるのでしょうか？
📰 "US House votes to end government shutdown over immigration operations" — How does this affect the country?
「米下院、移民関連業務をめぐる政府閉鎖を終了する法案を可決」— これはその国にどのような影響を与えるのか
📰 "US charges Mexican governor and other leaders with aiding drug cartel" — How does this affect the country?
「米国、メキシコの州知事らを麻薬カルテル支援で起訴」— これはその国にどのような影響を与えるのか
📰 "China to ban drone sales in Beijing citing security concerns" — Is this surprising?
「中国、安全上の懸念から北京でのドローン販売を禁止へ」— これは驚きですか？
📰 "US singer D4vd bought tools online to dispose of girl's body, prosecutors" — What's your opinion on this?
「米国人歌手D4vd、少女の遺体を処分するための道具をネットで購入と検察」— これについてあなたの意見は何ですか？
📰 "'I did not expect it'" — What's your opinion on this?
「「予想していませんでした」」— これについてあなたの意見は何ですか？
📰 "Rebel Wilson shares baby news as she leaves court after finally winding" — What makes a team successful?
「レベル・ウィルソン、法廷を後にしてようやく決着、赤ちゃんのニュースを共有」— チームを成功させるものは何ですか？
📰 "British divers find missing WWI wreck of US combat vessel" — What's your opinion on this?
「英国人ダイバー、行方不明だった第一次世界大戦の米軍艦の残骸を発見」— これについてあなたの意見は何ですか？
📰 "All the details you might have missed from William and Kate's 15th" — How will this change our lives?
「ウィリアム王子とキャサリン妃の結婚15周年で見逃しがちな細かい点」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Premier Inn owner blames Labour tax hikes as it axes 3,800 jobs" — What should be done about this?
「プレミア・インの運営会社、労働党の増税を非難し3800人を削減」— これに対して何をすべきか
📰 "POLL OF THE DAY" — What's your opinion on this?
「本日の世論調査」— これについてあなたの意見は何ですか？
📰 "'Hardest Geezer', who ran the entire length of Africa, fights back against" — How can we prevent conflicts?
「アフリカ全土を走破した「最強のジジイ」が反撃」— どうすれば争いを防げるでしょうか？
📰 "Fourteen Elizabeth line passengers receive medical treatment after reports of 'smell of" — What should people know about this?
「エリザベス線で異臭報告、14人の乗客が治療を受ける」— これについて人々は何を知っておくべきでしょうか？
📰 "Mystery of the Islamic sect operating in a Cheshire orphanage" — How will this change things?
「チェシャーの孤児院で活動するイスラム教団体の謎」— これによって何が変わるのか
📰 "Myanmar junta says Suu Kyi moved to house arrest, doubts linger" — What should happen next?
「ミャンマー軍事政権、スー・チー氏を自宅軟禁に移したと発表、疑念は続く」— 次に何が起こるべきでしょうか？
📰 "Mirroring Gaza, Israel is destroying towns and villages in southern Lebanon" — Who does this affect most?
「ガザと同様に、イスラエルは南レバノンの町や村を破壊している」— これが最も影響を受けるのは誰ですか？
📰 "Activists say Israel has intercepted their Gaza aid flotilla near Crete" — How will this change our lives?
「活動家らは、イスラエルがクレタ島近くでガザ支援船団を妨害したと主張」— これは私たちの生活をどのように変えるのでしょうか？
📰 "The Austrian nuns who fled their care home are now in Rome" — How will this change things?
「介護施設を逃れたオーストリアの修道女たちは現在ローマにいる」— これによって何が変わるのか
📰 "Mexico’s Sheinbaum questions US claims of drug ties to Sinaloa governor" — How will this change our lives?
「メキシコのシェインバウム大統領が、アメリカがシナロア州知事と麻薬組織の関係を主張していることに疑問を投げかけている。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Iran confirmed to play at World Cup according to FIFA chief Infantino" — How does this affect you?
「インファンティーノFIFA会長によると、イランのワールドカップ出場が確定した。」— これはあなたにどのような影響を与えるのか
📰 "Myanmar’s former leader Aung San Suu Kyi moved to house arrest" — How does this affect the country?
「ミャンマーの元指導者アウン・サン・スー・チー氏が自宅軟禁に移された。」— これはその国にどのような影響を与えるのか
📰 "UN chief calls for immediate reopening of the Strait of Hormuz" — How will this change our lives?
「国連事務総長がホルムズ海峡の即時再開を呼びかけている。」— これは私たちの生活をどのように変えるのでしょうか？
📰 "UAE exit signals OPEC’s declining grip on oil markets" — Should we rely less on oil?
「UAEの脱退は、OPECの石油市場に対する支配力が弱まっていることを示している。」— 私たちは石油への依存を減らすべきでしょうか？
📰 "US falls to ‘historic low’ in press freedom tracker" — How does this affect you?
「アメリカの報道の自由指数が「歴史的な低水準」に落ち込む」— これはあなたにどのような影響を与えるのか
📰 "Israel rights group petitions top court to order release of 14 Gaza" — What should happen next?
「イスラエルの人権団体が最高裁判所にガザ地区の14人を解放するよう申し立て」— 次に何が起こるべきでしょうか？
📰 "How rebels teamed up to shake Mali and the Kremlin’s grip" — Do you follow this sport?
「反政府勢力がどのように協力してマリとクレムリンの支配を揺るがしたか」— あなたはこのスポーツを観戦しますか？
📰 "Africa and Asia back Infantino for unique fourth term as FIFA president" — How does this affect the country?
「アフリカとアジアがインファンティーノ会長の異例の4期目を支持、FIFA会長に」— これはその国にどのような影響を与えるのか
📰 "Saudi Arabia to end LIV Golf funding, while league appoints new chairman" — How will this change our lives?
「サウジアラビアがLIVゴルフへの資金提供を終了、リーグは新会長を任命」— これは私たちの生活をどのように変えるのでしょうか？
📰 "From railways to energy — five strategic projects linking Gulf states" — Should we rely less on oil?
「鉄道からエネルギーまで——湾岸諸国を結ぶ5つの戦略的プロジェクト」— 私たちは石油への依存を減らすべきでしょうか？
📰 "Venice Biennale's international jury resigns as Italy's government opposes Russia's participation" — Why do leaders resign?
「イタリア政府がロシアの参加に反対し、ヴェネツィア・ビエンナーレの国際審査員団が辞任」— なぜリーダーは辞任するのでしょうか？
📰 "'We are ready to discuss digital rules with the US but cannot" — How will this change our lives?
「「私たちはアメリカとデジタルルールについて話し合う用意があるが、それはできない」」— これは私たちの生活をどのように変えるのでしょうか？
📰 "French teen charged in Singapore over vending machine straw-licking viral video" — What's the most important part?
「自動販売機のストローをなめる動画が拡散、シンガポールでフランス人10代が起訴される」— 最も重要な部分は何ですか？
📰 "Latest news bulletin | April 30th, 2026 – Evening" — How will this change things?
「最新ニュース速報 | 2026年4月30日 – 夕方」— これによって何が変わるのか
📰 "Breathtaking landscapes guaranteed" — What are the consequences?
「息をのむような景色が広がっています」— どのような結果が生じるのでしょうか
📰 "UK PM Starmer jeered by crowd on arrival at scene of stabbing" — How does this affect the country?
「英首相スターマー氏、刺傷事件現場に到着した際に群衆からやじられる」— これはその国にどのような影響を与えるのか
📰 "Spain's 'humane migration policy' is 'model for Europe', minister says" — How does this affect the country?
「スペインの「人道的な移民政策」は「ヨーロッパのモデル」だと大臣が語る」— これはその国にどのような影響を与えるのか
📰 "Blinded by the flag" — What should be done about this?
「国旗に目がくらんで」— これに対して何をすべきか
📰 "Exclusive" — What should be done about this?
「独占情報」— これに対して何をすべきか
📰 "Belgium reopens the nuclear door in high-stakes deal with Engie" — How does this affect you?
「ベルギーがエンジー社との重要契約で原子力発電の再開に踏み切る」— これはあなたにどのような影響を与えるのか
📰 "Satellite lofted for first Arab country" — How does this affect international relations?
「アラブ諸国初の人工衛星が打ち上げられる」— これは国際関係にどのような影響を与えるのか
📰 "Satellite lofted for first Arab country" — How does this affect international relations?
「アラブ諸国初の人工衛星が打ち上げられる」— これは国際関係にどのような影響を与えるのか
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの大臣が会談する」— これはその国にどのような影響を与えるのか
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの大臣が会談する」— これはその国にどのような影響を与えるのか
📰 "Chinese, Russian and Indian ministers meet" — How does this affect the country?
「中国、ロシア、インドの大臣が会談する」— これはその国にどのような影響を与えるのか
📰 "Nanjing massacre remembered on 80th anniversary" — How will this change things?
「南京事件から80年、追悼の式典が行われる」— これによって何が変わるのか
📰 "Nanjing massacre remembered on 80th anniversary" — How does this affect you?
「南京事件から80年、追悼の式典が行われる」— これはあなたにどのような影響を与えるのか
📰 "Young Chinese-Irish ballroom dancer goes international" — How does this affect international relations?
「中国人とアイルランド人の血を引く若いダンサーが国際舞台へ」— これは国際関係にどのような影響を与えるのか
📰 "UK and China allow more direct flights" — What should be done about this?
「イギリスと中国が直行便を増やす」— これに対して何をすべきか`
        }
    ]
};
