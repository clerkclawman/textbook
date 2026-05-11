// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations included

var news = {
    stories: [
        {
            title: "Daily News Headlines - May 12, 2026",
            content: `📰 "Last passengers leave virus-hit cruise ship as three more test positive" — What should people know about this?
「ウイルスに感染したクルーズ船から最後の乗客が下船、新たに3人が陽性と判明」— 人々はこれについて何を知るべきか
📰 "US passengers quarantining in Nebraska as officials say public hantavirus risk 'very" — What should people know about this?
「ネブラスカ州で隔離中の米国人乗客、当局はハンタウイルスの一般へのリスクは「非常に低い」と発表」— 人々はこれについて何を知るべきか
📰 "Trump says Iran ceasefire is on 'massive life support'" — Do you agree with this?
「トランプ氏、イラン停戦は「瀕死の状態」と発言」— あなたはこれに賛成ですか？
📰 "Elon Musk and Tim Cook among CEOs expected to accompany Trump on" — How does this affect the economy?
「イーロン・マスク氏やティム・クック氏らCEOがトランプ氏に同行すると見込まれる」— これは経済にどのような影響を与えますか？
📰 "Portrait looted by Nazis found in home of Dutch SS leader's descendants" — How will this change our lives?
「ナチスに略奪された肖像画、オランダのSS指導者の子孫の自宅で発見される」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Washington dinner shooting suspect pleads not guilty" — Is this good or bad news?
「ワシントンの夕食会での銃撃事件、容疑者は無罪を主張」— これは良い知らせでしょうか、それとも悪い知らせでしょうか？
📰 "Whales could be harmed by diverted ships avoiding Middle East, scientists warn" — How can we help animals?
「中東を避けて航路を変更した船がクジラに悪影響を与える可能性があると科学者が警告」— 私たちはどのように動物を助けることができるでしょうか？
📰 "Dozens of Nigerian fishermen feared dead after Chad air strikes on Boko" — How will this change our lives?
「チャドの空爆により、ナイジェリアの漁師数十名が死亡したと懸念」— これは私たちの生活をどのように変えるのでしょうか？
📰 "Trump calls Iran response to US proposal to end war 'totally unacceptable'" — How can we prevent conflicts?
「トランプ氏、戦争終結に向けた米国の提案に対するイランの対応を「全く受け入れられない」と非難」— どうすれば紛争を防げるのか
📰 "Philippine VP Sara Duterte impeached for a second time" — What's the most important part?
「フィリピンのサラ・ドゥテルテ副大統領、2度目の弾劾」— 最も重要な部分は何でしょうか？
📰 "Bosnia's powerful peace envoy quits, with questions over role's future" — Is this surprising?
「ボスニアの強力な和平特使が辞任、その役割の将来に疑問の声」— これは驚くべきことですか
📰 "Ailing Iranian Nobel laureate given bail and hospital transfer" — How will this change our lives?
「病気のイランのノーベル賞受賞者、保釈と病院への移送が認められる」— これは私たちの生活をどのように変えるのでしょうか？
📰 "His father had just been buried. Then West Bank settlers forced him" — How will this change things?
「彼の父親が埋葬されたばかりだった。そこへヨルダン川西岸の入植者たちが彼を強制した」— これは状況をどのように変えるのでしょうか？
📰 "Police find body believed to be of fugitive Australian shooter" — What should happen next?
「警察、逃亡中のオーストラリア人銃撃犯とみられる遺体を発見」— 次に何が起こるべきでしょうか？
📰 "Iran activists tell BBC how threat of war intensifies trauma of repression" — How can we prevent conflicts?
「イランの活動家、BBCに「戦争の脅威が弾圧のトラウマを強めている」と語る」— どうすれば紛争を防げるのか
📰 "Calls grow for Starmer to resign as PM vows to fight leadership" — Why do leaders resign?
「スター首相の辞任を求める声が高まる中、首相はリーダーシップを守ると誓う」— なぜリーダーは辞任するのか
📰 "Trump rejects Iran's ceasefire proposal response. And, Congress to tackle ICE funding" — How does this affect the country?
「トランプ氏、イランの停戦提案への回答を拒否。そして議会はICEの資金問題に取り組む」— これは国にどのような影響を与えますか。
📰 "Trump heads to China amid ongoing war with Iran" — How can we prevent conflicts?
「トランプ氏、イランとの戦争が続く中、中国へ向かう」— どうすれば紛争を防げるのか
📰 "Nobel laureate Narges Mohammadi transferred to a Tehran hospital, her foundation says" — What should people know about this?
「ノーベル賞受賞者のナルゲス・モハンマディ氏がテヘランの病院に移送されたと財団が発表」— 人々はこれについて何を知るべきか
📰 "AI on the agenda as Trump heads to China" — Is this good or bad?
「トランプ氏の中国訪問の議題にAIが浮上」— これは良いことか、悪いことか
📰 "Remains of a U.S. soldier who went missing in Morocco have been" — Is there a solution?
「モロッコで行方不明になっていたアメリカ兵の遺骨が見つかりました。」— 解決策はあるのでしょうか？
📰 "U.S. cruise passengers arrive in the U.S. after one tests positive for" — Is this surprising?
「新型コロナウイルス検査で陽性反応が出た乗客がいた後、アメリカのクルーズ船の乗客がアメリカに到着しました。」— これは驚くべきことですか
📰 "Israeli settlers force Palestinian family to exhume and rebury their father" — Who does this affect most?
「イスラエル人入植者がパレスチナ人家族に父親の遺体を掘り起こして再埋葬するよう強制しました。」— これは誰に最も影響を与えますか。
📰 "Trump says the Iran ceasefire is 'on life support' after rejecting an" — Do you agree with this?
「トランプ氏は、イランの停戦合意を拒否した後、「瀕死の状態だ」と述べました。」— あなたはこれに賛成ですか？
📰 "Why has China doubled its nuclear capacity in the last decade" — What's your opinion on this?
「なぜ中国は過去10年間で核能力を2倍にしたのですか？」— これについてあなたの意見はどうですか。
📰 "Keir Starmer's party lost big in U.K. local elections. Here's what comes" — How does this affect the country?
「イギリスの地方選挙で、キア・スターマー氏の党が大敗しました。今後の展開を解説します。」— これは国にどのような影響を与えますか。
📰 "Hundreds displaced, medical services suspended amid gang violence in Haiti" — What are the benefits?
「ハイチでギャングの暴力により、数百人が避難し、医療サービスが停止しています。」— 利点は何ですか。
📰 "Trump says he will suspend petrol tax amid soaring US fuel prices" — How will higher prices affect you?
「トランプ氏は、アメリカの燃料価格高騰を受け、ガソリン税を一時的に停止すると述べています。」— 物価の上昇はあなたにどのような影響を与えますか。
📰 "EU and UK sanction Russians over deportations of Ukrainian children" — What are the risks?
「EUとイギリスは、ウクライナ人の子ども強制移送に関与したロシア関係者に制裁を科しました。」— リスクは何ですか？
📰 "EU sanctions violent Israeli settlers after months of deadlock" — What's your opinion on this?
「EUは数か月の行き詰まりの末、暴力的なイスラエル人入植者への制裁を決定しました。」— これについてあなたの意見はどうですか。
📰 "Palestinians mark 78 years since Nakba amid ongoing displacement" — Who does this affect most?
「パレスチナの人々は、今も続く避難の中で、ナクバから78年を迎えました。」— これは誰に最も影響を与えますか。
📰 "Could the latest violence in DR Congo undermine truce efforts" — How does this affect you?
「コンゴ民主共和国での最近の暴力は、停戦の努力を弱める可能性がありますか。」— これはあなたにどのような影響を与えますか？
📰 "South Africa plans presidential impeachment probe over ‘Farmgate’ scandal" — How does this affect the country?
「南アフリカは「ファームゲート」スキャンダルをめぐり、大統領の弾劾調査を計画しています。」— これは国にどのような影響を与えますか。
📰 "Trump says he will discuss arms sales to Taiwan in meeting with" — What are the benefits?
「トランプ氏は、台湾への武器売却について、会談で話し合うと述べています。」— 利点は何ですか。
📰 "EU agrees sanctions on Israeli West Bank settlers, Hamas leaders" — What are the consequences?
「EUは、ヨルダン川西岸の入植者とハマスの指導者に対する制裁に合意しました。」— 結果はどうなりますか。
📰 "UK sanctions network accused of planning attacks for Iran" — Will this work?
「イギリス、イランのための攻撃を計画したとされるネットワークに制裁を科す」— これはうまくいくでしょうか？
📰 "Philippine senator flees ICC arrest over role in Duterte’s drug war" — What should be done?
「フィリピン上院議員、ドゥテルテの麻薬戦争での役割をめぐり国際刑事裁判所の逮捕を逃れる」— 何をすべきでしょうか？
📰 "Hantavirus-hit vessel re-docks in the Canary Island due to bad weather during" — What are the side effects?
「ハンタウイルスに感染した船、悪天候のためカナリア諸島に再び寄港」— 副作用は何ですか？
📰 "EU's Kos sets July deadline for Ukraine accession clusters" — What are the risks?
「EUのコス委員、ウクライナの加盟交渉クラスターに7月の期限を設定」— リスクは何ですか？
📰 "Socialists rebuff EPP push to advance EU-US trade deal talks" — What should be done about this?
「社会党、EUとアメリカの貿易協定交渉を進める欧州人民党の提案を拒否」— これについて何をすべきでしょうか？
📰 "International Feline Contest" — How does this affect international relations?
「国際ネココンテスト」— これは国際関係にどのような影響を与えますか？
📰 "EU sanctions Russian individuals over forced deportation of Ukrainian children" — Will this continue?
「EU、ウクライナの子どもの強制移送をめぐりロシアの個人に制裁」— これは続くのでしょうか？
📰 "Pashinyan says Karabakh 'was not ours' as Armenia and Azerbaijan look to" — How should we use this?
「パシニャン首相、アルメニアとアゼルバイジャンの和平に向け「カラバフは我々のものではなかった」と発言」— これはどのように使うべきでしょうか
📰 "The making of the Palme d'Or" — How does this affect you?
「パルム・ドールの誕生」— これはあなたにどのような影響を与えますか？
📰 "Man charged with attempting to kill US President Donald Trump pleads not" — How does this affect ordinary people?
「アメリカのトランプ大統領暗殺未遂で起訴された男、無罪を主張」— これは一般の人々にどのような影響を与えますか？
📰 "EU approves sanctions on Israeli settlers after Hungarian backing" — How should we use this?
「ハンガリーの支持を受けて、EUがイスラエル人入植者への制裁を承認」— これはどのように使うべきでしょうか
📰 "Fancy exploring Europe by boat" — Is this surprising?
「ヨーロッパを船で旅してみませんか」— これは驚くべきことですか
📰 "Satellite lofted for first Arab country" — Why is this important?
「アラブ諸国初の人工衛星が打ち上げられる」— なぜこれが重要なのですか
📰 "WWII memorials solemn reminders of war tragedy" — How can we prevent this?
「戦争の悲劇を伝える第二次世界大戦の慰霊碑」— どうすればこれを防げるでしょうか
📰 "Chinese, Russian and Indian ministers meet" — What do you think about this?
「中国、ロシア、インドの閣僚が会談」— これについてどう思いますか`
        }
    ]
};
