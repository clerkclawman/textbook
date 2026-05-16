// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 17, 2026",
            content: `📰 "Taiwan insists it is independent after Trump warning" — Is this a serious threat?
「トランプ氏の警告を受けて、台湾は独立を主張している。」— これは深刻な脅威でしょうか？
📰 "Man drives car into pedestrians in Italy, injuring eight" — Is this surprising?
「イタリアで男性が車で歩行者に突っ込み、8人が負傷した。」— これは驚くべきことですか？
📰 "Senior IS leader killed in joint operation, US and Nigeria say" — How does this affect the country?
「米国とナイジェリアによると、ISの幹部が共同作戦で殺害された。」— これはその国にどのような影響を与えますか？
📰 "Rescue diver dies during search for bodies of Italians who drowned in" — Who loses from this situation?
「イタリア人水死体の捜索中に救助ダイバーが死亡した。」— この状況で誰が損をしますか？
📰 "Whale found dead near Danish island after German rescue operation" — What would you want to discuss?
「ドイツの救助活動の後、デンマークの島の近くでクジラが死んでいるのが見つかった。」— あなたは何について話し合いたいですか？
📰 "US planning to charge ex-Cuban leader Raúl Castro" — Do you trust the government's plan?
「アメリカがキューバの前指導者ラウル・カストロを起訴する方針」— あなたは政府の計画を信頼しますか？
📰 "Toddlers among more than 50 schoolchildren kidnapped in Nigeria" — How will this change our lives?
「ナイジェリアで50人以上の児童が誘拐され、その中には幼児も含まれる」— これは私たちの生活をどう変えるのでしょうか？
📰 "Switzerland to open secret files on Auschwitz 'Angel of Death' Mengele" — Is this something we should remember or forget?
「スイスがアウシュビッツの「死の天使」メンゲレに関する秘密文書を公開へ」— これは私たちが覚えておくべきことでしょうか、それとも忘れるべきことでしょうか？
📰 "Lebanon says six killed in Israeli strike as US says ceasefire extension" — How can we prevent more deaths?
「レバノンがイスラエルの攻撃で6人死亡と発表、アメリカは停戦延長を主張」— これ以上死者を出さないためにはどうすればよいでしょうか？
📰 "Freight train and bus crash kills at least eight in Bangkok" — How will this change our lives?
「バンコクで貨物列車とバスが衝突し、少なくとも8人死亡」— これは私たちの生活をどう変えるのでしょうか？
📰 "Man killed by 13ft shark in Western Australia" — What would make you feel like you're being held?
「西オーストラリアで13フィートのサメに男性が襲われ死亡」— あなたが「拘束されている」と感じるのはどんな時ですか？
📰 "New outbreak of Ebola kills 80 in eastern DR Congo" — Why is this newsworthy?
「コンゴ民主共和国東部でエボラ出血熱が新たに発生、80人死亡」— なぜこれがニュース価値があるのですか？
📰 "What China critics in Maga movement make of Trump's Beijing trip" — Do you trust the government's plan?
「マガ運動における中国批判派はトランプの北京訪問をどう見ているか」— あなたは政府の計画を信頼しますか？
📰 "What is a 'safe death'" — What would make you feel like you belong in this conversation?
「「安全な死」とは何ですか？」— この会話に「自分が属している」と感じるのはどんな時ですか？
📰 "From misfit to rap sensation" — What would make you feel like you're being copied?
「はみ出し者からラップのセンセーションへ」— あなたが「真似されている」と感じるのはどんな時ですか？
📰 "Trump's gold MAGA phone FINALLY ships to customers... but mystery surrounds bold" — What would you do if you were the leader?
「トランプ氏の金色のMAGAスマートフォンがついに顧客に届き始めたが、その大胆なデザインには謎が残る。」— もしあなたがリーダーだったら、どうしますか？
📰 "Timmy the humpback whale found dead off Danish coast" — What would you want to discuss?
「ザトウクジラのティミーがデンマーク沖で死んでいるのが見つかった。」— あなたは何について話し合いたいですか？
📰 "The war in Ukraine is at a standstill as societal fatigue grows" — What would peace look like?
「ウクライナ戦争は膠着状態にあり、社会の疲れが広がっている。」— 平和とはどのようなものだろうか？
📰 "The townspeople of Vilseck, Germany, worry that Trump may pull out 5,000" — Is this a good decision?
「ドイツのフィルゼックの町の人々は、トランプ氏が5000人の部隊を撤退させるのではないかと心配している。」— これは良い決断ですか？
📰 "Trump says Islamic State group leader was killed in a joint U.S.-Nigerian" — How does this affect the country?
「トランプ氏は、ISISの指導者がアメリカとナイジェリアの合同作戦で殺害されたと述べた。」— これはその国にどのような影響を与えますか？
📰 "The Eurovision Song Contest reaches its grand final with pop and protests" — Would you listen to this?
「ユーロビジョン・ソング・コンテストは、ポップスと抗議の声が交錯する中、グランドファイナルを迎えます。」— あなたはこれを聞きますか？
📰 "Israel says it killed the leader of Hamas' military wing" — What makes a good leader?
「イスラエルは、ハマスの軍事部門のリーダーを殺害したと発表しました。」— 良いリーダーとは、どのような人でしょうか？
📰 "Iran has been confiscating property from critics of the regime" — Is this more about giving or receiving?
「イランは、政権批判者から資産を没収し続けています。」— これは、与えることと受け取ることのどちらに重点があるのでしょうか？
📰 "CIA director's visit to Cuba echoes past memories of U.S. in Latin" — Would you watch this?
「CIA長官のキューバ訪問は、ラテンアメリカにおけるアメリカの過去の記憶をよみがえらせます。」— あなたはこれを見ますか？
📰 "SCOTUS upholds abortion pill telehealth access. And, Trump returns from China visit" — What should world leaders discuss?
「最高裁判所は、中絶薬の遠隔医療によるアクセスを認めました。そして、トランプ氏が中国訪問から帰国しました。」— 世界のリーダーたちは、何について話し合うべきでしょうか？
📰 "Tens of thousands join far-right rally in central London" — Is this good for world peace?
「ロンドン中心部で数万人が極右の集会に参加」— これは世界平和にとって良いことでしょうか？
📰 "Latvia’s president asks opposition leader to form new government" — What would you do if you were the leader?
「ラトビア大統領、野党党首に新政府樹立を要請」— もしあなたがリーダーだったら、どうしますか？
📰 "Accident kills eight people in Thailand raising questions of rail safety" — How will this change our lives?
「タイで事故により8人死亡、鉄道の安全性に疑問」— これは私たちの生活をどう変えるのでしょうか？
📰 "Spanish Foreign Minister on Spain’s clash with the Trump administration" — What would you do if you were the leader?
「スペイン外相、トランプ政権との対立について語る」— もしあなたがリーダーだったら、どうしますか？
📰 "DRC health minister warns ‘very high’ Ebola lethality rate as toll hits" — Is this a serious threat?
「DRC保健相、エボラ出血熱の致死率が「非常に高い」と警告、死者数が増加」— これは深刻な脅威でしょうか？
📰 "Thousands march in central London to mark 78th Nakba anniversary" — Should countries work together or alone?
「ロンドン中心部で数千人が行進し、ナクバから78年を記念」— 国々は協力すべきか、それとも単独で行動すべきか？
📰 "Palestinian President Abbas casts vote in decisive Fatah elections" — Do you trust the government's plan?
「パレスチナのアッバス大統領、決定的なファタハ選挙で投票」— あなたは政府の計画を信頼しますか？
📰 "UK ex-health minister says will run to replace Prime Minister Keir Starmer" — Is this a good decision?
「英国の元保健大臣、キア・スターマー首相の後任を目指して立候補へ」— これは良い決断ですか？
📰 "Al Jazeera’s exclusive report from the Strait of Hormuz" — What are the benefits?
「アルジャジーラがホルムズ海峡から独占報道」— 利点は何ですか？
📰 "Sudanese army captures key town near Ethiopian border from RSF" — What would you need to know to have a strong opinion?
「スーダン軍、エチオピア国境近くの重要都市をRSFから奪還」— 強い意見を持つために何を知る必要がありますか？
📰 "Hamas confirms killing of Qassam Brigades leader in Israeli attack" — What are the risks?
「ハマスが、イスラエル軍の攻撃でカッサム旅団の指導者が死亡したことを確認した。」— リスクは何ですか？
📰 "Iran warns of readiness for war and economic costs as US talks" — How does this affect people's daily lives?
「イランは、アメリカとの協議の中で戦争と経済的負担への備えがあると警告した。」— これは人々の日常生活にどのような影響を与えますか？
📰 "Cannes' Golden Relationship" — How does this affect international relations?
「カンヌの黄金の関係」— これは国際関係にどのような影響を与えますか？
📰 "Eurovision final in Vienna overshadowed by protests over Israel’s participation" — Should countries work together or alone?
「イスラエルの参加に抗議するデモの中、ウィーンで行われたユーロビジョン決勝戦。」— 国々は協力すべきか、それとも単独で行動すべきか？
📰 "Several injured after car ploughs into crowd in Italy's Modena" — What would you do if you were completely angry?
「イタリアのモデナで車が群衆に突っ込み、数人が負傷した。」— もし完全に怒ったら、あなたはどうしますか？
📰 "London police out in force as tens of thousands attend rival rallies" — What would you do if you were the judge?
「ロンドン警察が大規模に動員され、数万人が対立する集会に参加」— もしあなたが裁判官だったら、どうしますか？
📰 "London on edge as Tommy Robinson backers and pro-Palestinian marchers rally" — Who benefits from this situation?
「トミー・ロビンソンの支持者とパレスチナ支持の行進者による集会で、ロンドンは緊張状態に」— この状況から誰が利益を得るのですか？
📰 "Whale Timmy is dead, GPS tracker confirms identity" — Who would you want to buy from or sell to?
「クジラのティミーは死亡、GPS追跡装置が個体識別を確認」— あなたは誰から買いたい、または誰に売りたいですか？
📰 "Indian PM Modi begins European tour with meeting of Dutch royals" — Is this a good decision?
「インドのモディ首相、オランダ王室との会談で欧州歴訪を開始」— これは良い決断ですか？
📰 "French judge opens probe into 2018 killing of Jamal Khashoggi" — What should happen next?
「フランスの裁判官、2018年のジャマル・カショギ殺害事件の捜査を開始」— 次に何が起こるべきですか？
📰 "Baby dies of hypothermia as migrants reach Lampedusa overnight" — Should countries work together or alone?
「夜間にランペドゥーサ島に到着した移民の間で、乳児が低体温症で死亡。」— 国々は協力すべきか、それとも単独で行動すべきか？
📰 "Russia launches nearly 300 drones at Ukraine as 528 bodies of Ukrainian" — What did they achieve?
「ロシアがウクライナに約300機のドローンを発射、ウクライナ兵528人の遺体も見つかる。」— 彼らは何を達成したのか？
📰 "Satellite lofted for first Arab country" — Is this groundbreaking?
「アラブ諸国初の人工衛星が打ち上げられる。」— これは画期的なことなのか？
📰 "WWII memorials solemn reminders of war tragedy" — What would peace look like?
「第二次世界大戦の記念碑は、戦争の悲劇を厳かに思い起こさせる。」— 平和とはどのようなものだろうか？
📰 "Chinese, Russian and Indian ministers meet" — Is this fair to everyone?
「中国、ロシア、インドの閣僚が会合。」— これはすべての人にとって公平なのか。`？
        }
    ]
};
