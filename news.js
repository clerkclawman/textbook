// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: English only - Japanese translations to be added

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 04, 2026",
            content: `📰 "Iran says US has responded to its latest peace proposal" — Does this surprise you?
「イラン、米国が最新の和平提案に応答したと発表」— これは驚きですか？
📰 "The Iran war has strengthened Ukraine in surprising ways. Could a ceasefire" — How can we prevent conflicts?
「イラン戦争が意外な形でウクライナを強化。停戦は」— 紛争を防ぐにはどうすればよいですか？
📰 "Three dead in suspected virus outbreak on Atlantic cruise ship" — What are the risks?
「大西洋のクルーズ船でウイルス感染疑い、3人死亡」— リスクは何ですか？
📰 "Russian strikes kill 10 as Zelensky says Ukraine hits oil tankers and" — Should we rely less on oil?
「ロシア攻撃で10人死亡、ゼレンスキー氏はウクライナが石油タンカーを攻撃と」— 私たちは石油への依存を減らすべきですか？
📰 "Nigeria summons South African envoy over attacks on its nationals" — How can we prevent conflicts?
「ナイジェリア、自国民への攻撃で南アフリカ大使を召喚」— 紛争を防ぐにはどうすればよいですか？
📰 "Police officer lowered into crocodile-infested river to recover human remains" — How will this change our lives?
「ワニが生息する川に警察官が降り、遺体を回収」— これは私たちの生活をどう変えるでしょうか？
📰 "The clandestine network smuggling Starlink tech into Iran to beat internet blackout" — How will this change our lives?
「インターネット遮断を回避するため、スターリンク技術をイランに密輸する秘密ネットワーク」— これは私たちの生活をどう変えるでしょうか？
📰 "Germany troop cuts send wrong signal to Russia, say two top US" — What are the risks?
「ドイツの軍削減はロシアに誤った信号を送る、米国高官2人が批判」— リスクは何ですか？
📰 "Concern for jailed Iranian Nobel laureate as brother fears she is dying" — How will this change our lives?
「収監中のイラン人ノーベル賞受賞者の健康に懸念、弟が死を恐れる」— これは私たちの生活をどう変えるでしょうか？
📰 "Two US service members reported missing in Morocco, officials say" — Who is responsible?
「モロッコで米軍人2名が行方不明、当局が発表」— 誰に責任がありますか？
📰 "'If we sleep, they bite'" — Who is responsible?
「「寝ると噛まれる」」— 誰に責任がありますか？
📰 "Thirteen killed in Israeli strikes on southern Lebanon, health ministry says" — How can we prevent conflicts?
「イスラエル軍の南部レバノン攻撃で13人死亡、保健省が発表」— 紛争を防ぐにはどうすればよいですか？
📰 "Oil tanker hijacked off coast of Yemen and taken towards Somalia" — Should we rely less on oil?
「イエメン沖で石油タンカーが乗っ取られ、ソマリア方面へ」— 私たちは石油への依存を減らすべきですか？
📰 "US Supreme Court asked to restore abortion pill access" — Is this good or bad?
「米最高裁に中絶薬へのアクセス回復を求める請願」— これは良いことですか、悪いことですか？
📰 "Cuba condemns new US sanctions as 'illegal' and 'abusive'" — What are the risks?
「キューバが新たな米国制裁を「違法」で「虐待的」と非難」— リスクは何ですか？
📰 "Trump tells Congress ceasefire means he does not need their approval for" — How will this change our lives?
「トランプ氏、議会に停戦なら承認不要と主張」— これは私たちの生活をどう変えるでしょうか？
📰 "Who shot a Secret Service officer at the Trump press dinner" — Is this good or bad?
「トランプ氏の記者夕食会でシークレットサービス職員を誰が撃ったのか」— これは良いことですか、悪いことですか？
📰 "Trump claims other presidents flouted war powers law. It's a mixed record" — What do you think about this?
「トランプ氏、他の大統領も戦争権限法を無視していたと主張、実績はまちまち」— これについてどう思いますか？
📰 "Ex-F1 driver and Paralympic champion Zanardi dies" — How can we prevent conflicts?
「元F1ドライバーでパラリンピック金メダリストのザナルディ氏が死去」— 紛争を防ぐにはどうすればよいですか？
📰 "Taiwan president visits Eswatini days after blaming China for cancelled trip" — What do you think about this?
「台湾総統、旅行中止の責任を中国にあると非難した数日後にエスワティニを訪問」— これについてどう思いますか？
📰 "War criminal Mladic close to death, say lawyers asking judge for jail" — How can we prevent conflicts?
「戦犯ムラディッチ氏、死に近いと弁護士が裁判所に釈放を求める」— 紛争を防ぐにはどうすればよいですか？
📰 "Billions of meals at risk due to Iran war, says fertiliser boss" — How can we prevent conflicts?
「イラン戦争で数十億食が危険、肥料会社社長が警告」— 紛争を防ぐにはどうすればよいですか？
📰 "Missing Oscar found after Academy Award winner blocked from taking it on" — How can we prevent conflicts?
「アカデミー賞受賞者が持ち帰り阻止された後、行方不明のオスカー像が発見」— 紛争を防ぐにはどうすればよいですか？
📰 "Turkish police arrest more than 500 people at May Day rallies" — How will this change our lives?
「メーデーの集会でトルコ警察が500人以上を逮捕」— これは私たちの生活をどう変えるでしょうか？
📰 "Israeli police arrest man after nun attacked in Jerusalem" — How can we prevent conflicts?
「エルサレムで修道女が攻撃された後、イスラエル警察が男を逮捕」— 紛争を防ぐにはどうすればよいですか？
📰 "Israel releases all but two activists in Greece after intercepting Gaza aid" — How will this change our lives?
「ガザ支援船を阻止した後、ギリシャで活動家2人を除く全員を解放」— これは私たちの生活をどう変えるでしょうか？
📰 "Kenya battles to stop the 'goons and guns' as fears of political" — How will this change our lives?
「ケニア、政治的暴力を阻止するために「暴徒と銃」と戦う」— これは私たちの生活をどう変えるでしょうか？
📰 "Voters will judge Trump on the economy - how is it doing" — What do you think about this?
「有権者は経済でトランプ氏を判断 - 現状はどうか」— これについてどう思いますか？
📰 "Laufey on making jazz cool again (and the fish that brought out" — How will this change our lives?
「ジャズを再びクールにするラウフェイ（そして魚が引き出した」— これは私たちの生活をどう変えるでしょうか？
📰 "Dragonflies in distress" — What are the risks?
「トンボが危機に瀕している」— リスクは何ですか？
📰 "The world wants to eliminate cervical cancer - how Australian scientists led" — How will this change our lives?
「世界が子宮頸がんを撲滅したい - オーストラリアの科学者がどのように主導したか」— これは私たちの生活をどう変えるでしょうか？
📰 "'This tree was planted by my ancestor hundreds of years ago and" — What should be done?
「「この木は数百年前に私の祖先が植えたもので、」— 何をすべきですか？
📰 "Thousands of 'lost Canadians' have applied for dual citizenship - is Canada" — How will this change our lives?
「数千人の「迷いカナダ人」が二重国籍を申請 - カナダは」— これは私たちの生活をどう変えるでしょうか？
📰 "Huge crowd attends free Shakira Copacabana beach concert" — Is this good or bad?
「シャキーラの無料コパカバナビーチコンサートに大群衆が集結」— これは良いことですか、悪いことですか？
📰 "How we reported in -30C temperatures in Canada's Arctic" — What do you think about this?
「カナダの北極圏でマイナス30度の中でどのように取材したか」— これについてどう思いますか？
📰 "New CCTV footage appears to shows when shots were fired at Washington" — How will this change our lives?
「ワシントンで発砲があった時の新しい監視カメラ映像が公開」— これは私たちの生活をどう変えるでしょうか？
📰 "Why is China banning drone sales in Beijing" — Is this good or bad?
「なぜ中国は北京でのドローン販売を禁止しているのか」— これは良いことですか、悪いことですか？
📰 "Green Party candidate with links to David Cameron posted fake picture of" — Would you watch this?
「デービッド・キャメロンと関係のある緑の党候補が偽の写真を投稿」— あなたはこれを見ますか？
📰 "Britain looks to US suppliers in bid to stop the Iran fuel" — Should we rely less on oil?
「英国、イラン燃料を阻止するために米国のサプライヤーに目を向ける」— 私たちは石油への依存を減らすべきですか？
📰 "Britain's Got Talent judge KSI 'sparks outrage with vile "joke" about hitting" — How will this change our lives?
「ブリテンズ・ゴット・タレントの審査員KSIが殴打についての卑劣な「冗談」で激怒を招く」— これは私たちの生活をどう変えるでしょうか？
📰 "Princess Charlotte marks her 11th birthday with a carefree smile in a" — Is this good or bad?
「シャーロット王女、11歳の誕生日を無邪気な笑顔で迎える」— これは良いことですか、悪いことですか？
📰 "The mission to kill Osama Bin Laden, 15 years on" — How can we prevent conflicts?
「 Osama Bin Laden殺害任務、15年を経て」— 紛争を防ぐにはどうすればよいですか？
📰 "Final proof vaping IS harder to quit than smoking" — What are the risks?
「電子タバコは喫煙よりやめるのが難しいという最終的な証拠」— リスクは何ですか？
📰 "'They worry about her and how she's going to end up'" — What should be done?
「「彼らは彼女を心配し、彼女がどうなるかを心配している」」— 何をすべきですか？
📰 "Portugal and Italy latest holiday destinations set to ditch controversial EU border" — Is this good or bad?
「ポルトガルとイタリア、論争のEU国境規制を廃止する最新の観光地」— これは良いことですか、悪いことですか？
📰 "Muslim election candidates in Birmingham for George Galloway's Workers Party of Britain" — What do you think about this?
「バーミンガムでジョージ・ギャロウェイの英国労働者党のムスリム選挙候補」— これについてどう思いますか？
📰 "Warmth, laughter and what the King REALLY thought about his 'high stakes'" — How can we prevent conflicts?
「温かさ、笑い、そして王が「賭け」について本当にどう思ったか」— 紛争を防ぐにはどうすればよいですか？
📰 "France, take note! Small boat gangs face swift justice from Belgian police," — Does this surprise you?
「フランスは注意！小船ギャングがベルギー警察から迅速な司法に直面」— これは驚きですか？
📰 "Cabinet rebels will unite to show PM the door if local election" — What do you think about this?
「内閣の反乱派が団結して首相を追放する可能性、地方選挙で」— これについてどう思いますか？
📰 "Violent BBC presenter broke his female colleague's wrist in attack 'hushed up" — How can we prevent conflicts?
「暴力的なBBCプレゼンターが女性同僚の手首を折る攻撃が「隠蔽」」— 紛争を防ぐにはどうすればよいですか？`
        }
    ]
};
