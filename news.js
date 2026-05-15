// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 16, 2026",
            content: `📰 "Trump warns Taiwan against declaring independence, hours after summit with China's Xi" — Is this a serious threat?
「トランプ氏、中国の習氏との首脳会談の数時間後に台湾に対し独立宣言をしないよう警告」— これは深刻な脅威なのでしょうか？
📰 "Trump and Xi conclude 'very successful' talks but no deals confirmed" — What should world leaders discuss?
「トランプ氏と習氏、「非常に成功した」会談を終えるも合意内容は確認されず」— 世界のリーダーたちは何を話し合うべきですか？
📰 "Israel and Lebanon agree to extend ceasefire, US state department says" — Will this last?
「イスラエルとレバノン、停戦延長で合意と米国務省発表」— これは続くのでしょうか
📰 "Prisoner swap goes ahead as Kyiv mourns 24 killed in Russian strike" — How can we prevent more deaths?
「キーウでロシアの攻撃により24人死亡、遺族が悲しむ中、捕虜交換が実施される」— これ以上の死者を防ぐにはどうすればよいでしょうか？
📰 "AI vigilante trap snares alleged paedophile ex-teacher in France" — How will this change our lives?
「フランスでAI自警団の罠により、元教師の小児性愛容疑者が逮捕される」— これは私たちの生活をどのように変えるのだろうか
📰 "Five Italians die during cave scuba dive in Maldives" — What would make this better?
「モルディブでの洞窟スキューバダイビング中にイタリア人5人が死亡」— これをより良くするにはどうすればいいでしょうか？
📰 "New York Times defends journalist after Israel threatens to sue" — Why is this newsworthy?
「イスラエルが訴訟を起こすと脅した後、ニューヨーク・タイムズが記者を擁護」— なぜこれがニュース価値があるのか？
📰 "US to seek death penalty for suspect in killing of Israeli embassy" — Should countries work together or alone?
「米国、イスラエル大使館殺害事件の容疑者に死刑を求める方針」— 国々は協力すべきか、それとも単独で行動すべきか？
📰 "New outbreak of Ebola kills 65 in eastern DR Congo" — Why is this newsworthy?
「コンゴ民主共和国東部でエボラ出血熱の新たな流行、65人死亡」— なぜこれがニュース価値があるのか？
📰 "CIA chief visits Cuba as energy crisis worsens" — Should we rely less on oil?
「エネルギー危機が深刻化する中、CIA長官がキューバを訪問」— 私たちは石油への依存を減らすべきか？
📰 "Brutal raid on woman's birthday party highlights rise of Russian vigilante group" — What would you do if you were the leader?
「女性の誕生日パーティーへの残忍な襲撃事件が、ロシアの自警団グループの台頭を浮き彫りに」— もし自分がリーダーだったら、どうしますか？
📰 "Anti-immigration AI videos traced to overseas fakers, BBC finds" — How will this change our lives?
「反移民のAI動画は海外の偽造者によるものとBBCが特定」— これは私たちの生活をどのように変えるのだろうか
📰 "Why is Ireland not taking part in this year's Eurovision" — Is this good for world peace?
「なぜアイルランドは今年のユーロビジョンに参加しないのですか？」— これは世界平和にとって良いことか？
📰 "Starmer launches fresh bid to cosy up to European human rights chiefs" — How does this affect the country?
「スターマー氏、欧州人権トップへの接近を新たに試みる」— これはその国にどのような影響を与えますか？
📰 "SCOTUS upholds abortion pill telehealth access. And, Trump returns from China visit" — What should world leaders discuss?
「最高裁が中絶薬の遠隔医療アクセスを支持。そして、トランプ氏が中国訪問から帰国」— 世界のリーダーたちは何を話し合うべきですか？
📰 "Key takeaways from Trump's China trip" — What would you do if you were the leader?
「トランプ大統領の中国訪問から得られた主なポイント」— もし自分がリーダーだったら、どうしますか？
📰 "China economist shares takeaways from the Trump-Xi summit" — Is this a good decision?
「中国の経済学者がトランプ・習近平首脳会談のポイントを語る」— これは良い決断なのか？
📰 "Death toll in attack on Kyiv apartment building now stands at 24" — How can we prevent more deaths?
「キーウのアパートへの攻撃による死者数は24人になりました」— これ以上の死者を防ぐにはどうすればよいでしょうか？
📰 "How the relationship between the U.S. and China has changed under Trump" — Is this a good decision?
「トランプ政権下で米中関係はどのように変わったか」— これは良い決断なのか？
📰 "At this electronics market in China, buyers can find parts for just" — How does this affect the economy?
「中国のこの電子市場では、買い物客が部品をわずか…」— これは経済にどのような影響を与えますか？
📰 "U.S. pledges additional $1.8B in funding for U.N. humanitarian aid efforts" — How will this change our lives?
「アメリカは国連の人道支援活動に追加で18億ドルを拠出することを約束した」— これは私たちの生活をどのように変えるのだろうか
📰 "Inside Beijing's Temple of Heaven" — Is this more about what we have or what we want?
「北京の天壇（てんたん）の内部」— これは私たちが持っているものについてなのか、それとも欲しいものについてなのか
📰 "U.K. Prime Minister Keir Starmer faces challenges from his own party" — Who would you vote for?
「イギリスのキア・スターマー首相は自身の党内から課題に直面している」— あなたは誰に投票しますか
📰 "Is the US dialling down its support for Taiwan" — What are the risks?
「アメリカは台湾への支援を縮小しているのか」— リスクは何か
📰 "WHO confirms 10 global hantavirus cases, Hondius crew remain symptom-free" — Is this good or bad?
「WHOは世界で10件のハンタウイルス感染症を確認、ホンディウス号の乗組員は症状なし」— これは良いことですか、それとも悪いことですか？
📰 "Canada’s Carney travels to Alberta as separatists face legal setback" — How will this affect you?
「カナダのカーニー首相がアルバータ州へ向かう中、分離主義者たちは法的な後退に直面している。」— これはあなたにどのような影響を与えますか？
📰 "Trump says China to buy 200 Boeing planes, much lower than expected" — Do you trust the government's plan?
「トランプ氏は中国がボーイング機を200機購入すると述べたが、これは予想よりもはるかに少ない。」— あなたは政府の計画を信じますか？
📰 "Zelenskyy vows response after Russian strike kills 24 in Kyiv" — How can we prevent more deaths?
「ロシアの攻撃でキーウで24人が死亡した後、ゼレンスキー大統領は報復を誓った。」— これ以上の死者を防ぐにはどうすればよいでしょうか？
📰 "Trump departs China touting deals, but little clarity on Iran or Taiwan" — Do you trust the government's plan?
「トランプ氏は取引を宣伝しながら中国を離れたが、イランや台湾についてはほとんど明確にしなかった。」— あなたは政府の計画を信じますか？
📰 "Russia pounds Kyiv as its advance in eastern Ukraine slows to a" — Is this good or bad?
「ロシアがキーウを激しく攻撃する一方、東部ウクライナでの進撃は鈍化している。」— これは良いことですか、それとも悪いことですか？
📰 "UAE to accelerate oil pipeline project to bypass Strait of Hormuz" — Should we rely less on oil?
「UAE to accelerate oil pipeline project to bypass Strait of Hormuz」— 私たちは石油への依存を減らすべきか？
📰 "BRICS talks end without joint statement as divisions over Iran war deepen" — Should other countries get involved?
「BRICS talks end without joint statement as divisions over Iran war deepen」— 他の国々も関与すべきなのか？
📰 "Israel kills seven in Lebanon, agrees ‘ceasefire’ extension at talks in US" — What should be done?
「Israel kills seven in Lebanon, agrees ‘ceasefire’ extension at talks in US」— What should be done?
📰 "Iran says lack of trust is the main obstacle in US negotiations" — How should we use this?
「Iran says lack of trust is the main obstacle in US negotiations」— How should we use this?
📰 "California county scam ad lawsuit adds to mounting Meta legal woes" — Should the punishment be harder?
「California county scam ad lawsuit adds to mounting Meta legal woes」— Should the punishment be harder?
📰 "India and UAE sign defence pacts, as Iran war tensions simmer" — How does this affect people's daily lives?
「インドとUAEが防衛協定に署名、イラン戦争の緊張が高まる中」— これは人々の日常生活にどのような影響を与えるのでしょうか
📰 "Israeli army says targeting of Hamas military chief in Gaza City airstrike" — How does this affect people's daily lives?
「イスラエル軍、ガザ市での空爆でハマス軍事指導者を標的にしたと発表」— これは人々の日常生活にどのような影響を与えるのでしょうか
📰 "Israel and Lebanon extend their ceasefire by 45 days following talks in" — Will this last?
「イスラエルとレバノン、協議の末に停戦を45日間延長」— これは続くのでしょうか
📰 "Hundreds of Hungarian roads may be contaminated with asbestos" — What would you want to discuss?
「ハンガリーの数百の道路にアスベストが含まれている可能性」— あなたは何について話し合いたいですか
📰 "Extraordinary discovery in Pompeii" — Why is this important?
「ポンペイでの驚くべき発見」— なぜこれが重要なのですか
📰 "Norway defends move to cancel missile system sale following criticism from Malaysia" — How can we prevent conflicts?
「ノルウェー、マレーシアからの批判を受けミサイルシステム販売中止の決定を擁護」— 紛争を防ぐにはどうすればよいか？
📰 "Spanish row over EU cash fuels north–south tensions ahead of tough budget" — Is this good for world peace?
「スペインのEU資金をめぐる対立、厳しい予算を前に南北間の緊張をあおる」— これは世界平和にとって良いことか？
📰 "MEP and far-right influencers barred from UK rally" — How does this affect international relations?
「欧州議会議員と極右インフルエンサー、英国の集会への参加を禁止される」— これは国際関係にどのような影響を与えるのか？
📰 "What is the 'Thucydides Trap' that Xi invoked in his meeting with" — What should they discuss?
「習主席が会談で言及した「トゥキディデスの罠」とは何か？」— 彼らは何を話し合うべきか？
📰 "Greece has cheap green energy in abundance. So why are electricity bills" — Should we rely less on oil?
「ギリシャには安価なグリーンエネルギーが豊富にある。ではなぜ電気代が高いのか？」— 私たちは石油への依存を減らすべきか？
📰 "What we know about Congo's new Ebola outbreak" — Why is this newsworthy?
「コンゴで新たに発生したエボラ出血熱について、私たちが知っていること」— なぜこれがニュース価値があるのか？
📰 "Merz and Trump hold “good” phone call, German Chancellor says" — Is this a good decision?
「メルツ氏とトランプ氏が「良好な」電話会談を行ったとドイツ首相が発表」— これは良い決断なのか？
📰 "The world's largest lake is disappearing – and it's taking ecosystems and" — Will this continue?
「世界最大の湖が消えつつある――そして生態系も失われている」— この状況は続くのか？
📰 "Satellite lofted for first Arab country" — How does this affect international relations?
「アラブ諸国初の人工衛星が打ち上げられる」— これは国際関係にどのような影響を与えるのか？
📰 "WWII memorials solemn reminders of war tragedy" — Should other countries get involved?
「第二次世界大戦の記念碑は、戦争の悲劇を厳かに思い起こさせる」— 他の国々も関与すべきなのか？`
        }
    ]
};
