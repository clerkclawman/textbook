// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility
// NOTE: Japanese translations added

var news = {
    stories: [
        {
            title: "Daily News Headlines - April 30, 2026",
            content: `📰 "Oil price rises above $120 after reports of 'extended' Iran blockade" — Do you think self-driving cars are safe?
「イラン封鎖の延長報告を受け、原油価格が120ドル超に上昇」— 自動運転車は安全だと思いますか？

📰 "Hungary's next PM says frozen EU funds will be paid out soon" — What's the most useful AI you've used?
「ハンガリー次期首相、凍結されたEU資金がまもなく支払われると表明」— あなたが使った中で最も便利なAIは何ですか？

📰 "Russia scales back Moscow Victory Day parade, blaming threat from Ukraine" — Are you excited or scared about AI?
「ロシア、ウクライナからの脅威を理由にモスクワ対戦勝利記念日パレードを縮小」— AIについて興奮していますか、それとも怖いですか？

📰 "Stranded whale ferried out of German waters in barge" — How does this affect your life?
「座礁したクジラ、はしけ船でドイツ領海から搬出」— これはあなたの生活にどのように影響しますか？

📰 "Madagascar detains French national over alleged plot to stir unrest" — Are you excited or scared about AI?
「マダガスカル、騒乱を画策した疑いでフランス人を拘束」— AIについて興奮していますか、それとも怖いですか？

📰 "France investigates reappearance of website linked to Pelicot crimes" — Do you think privacy is dead in the digital age?
「フランス、ペリコ事件に関連するウェブサイトの再出現を調査」— デジタル時代においてプライバシーは死んだと思いますか？

📰 "US Supreme Court limits use of race in drawing electoral maps" — What's the worst sports injury you've had?
「米国最高裁、選挙区割りにおける人種の使用を制限」— あなたが経験した最悪のスポーツ怪我は何ですか？

📰 "Global forest loss slows but El Niño fires could threaten progress" — How does this affect your life?
「世界の森林減少は鈍化するも、エルニーニョによる火災が進展を脅かす可能性」— これはあなたの生活にどのように影響しますか？

📰 "Stephen Fry sues tech conference for up to £100,000 after falling off" — What's the best tech invention ever?
「スティーブン・フライ、転倒事故でテック会議を最大10万ポンドで提訴」— これまでで最高の技術発明は何ですか？

📰 "Laura Dern replaces Helena Bonham Carter in The White Lotus" — What's the most annoying thing about driving?
「ローラ・ダーン、『ザ・ホワイト・ロータス』でヘレナ・ボナム・カーターに代わり出演」— 運転で最もイライラすることは何ですか？

📰 "Billie Eilish puts Manchester at centre of new 3D concert film" — Have you ever met a famous musician?
「ビリー・アイリッシュ、マンチェスターを新しい3Dコンサート映画の中心に」— 有名な音楽家に会ったことはありますか？

📰 "BBC reschedules Radio 2 in the Park festival in Stirling" — Do you think this is good or bad?
「BBC、スターリングでの『Radio 2 in the Park』フェスティバルを延期」— これは良いと思いますか、それとも悪いと思いますか？

📰 "'Like a slap in the face'" — Do you think this is surprising?
「『顔を平手打ちされたような』」— これは驚くべきことだと思いますか？

📰 "Life after winning Race Across the World" — What's your favorite sport to watch?
「『世界を横断するレース』優勝後の人生」— 観戦するのが好きなスポーツは何ですか？

📰 "'I call them Bublé-bies' - Singer jokes population doubles after his gigs" — Do you think this is surprising?
「『彼らを「ブービー」と呼んでいる』歌手、コンサート後に人口が倍増すると冗談」— これは驚くべきことだと思いますか？

📰 "Antiquities dealer who exposed British Museum thefts dies aged 61" — What's your opinion on this?
「大英博物館の盗難を暴露した骨董品商、61歳で死去」— これについてどう思いますか？

📰 "Rebel Wilson says claims she bullied women on her film are 'absolute" — Do you think AI will take your job?
「レベル・ウィルソン、映画で女性をいじめたという主張は『完全に』」— AIがあなたの仕事を奪うと思いますか？

📰 "Hot Chocolate founder and You Sexy Thing co-writer Tony Wilson dies" — What's your reaction to this news?
「ホット・チョコレートの創設者で『You Sexy Thing』の共作者トニー・ウィルソン死去」— このニュースに対するあなたの反応は何ですか？

📰 "Megan Thee Stallion pulls out of Moulin Rouge show" — What's the best concert you've ever been to?
「メガン・ザ・スタリオン、ムーラン・ルージュのショーを降板」— あなたが行った中で最高のコンサートは何ですか？

📰 "Why Spotify has no button to filter out AI music" — Do you think AI will rule the world?
「SpotifyにAI音楽を除外するボタンがない理由」— AIが世界を支配すると思いますか？

📰 "Were Arsenal right to be 'fuming' with refereeing after Atletico draw" — Do you think this is good or bad?
「アトレティコ戦の引き分け後、アーセナルが審判に激怒したのは正しかったか」— これは良いと思いますか、それとも悪いと思いますか？

📰 "Arsenal 'hunt' Man City - what 7-0 win means for WSL title" — Do you think video games should be considered sports?
「アーセナルがマンチェスター・シティを『追う』7-0の勝利がWSLタイトルに意味すること」— ビデオゲームはスポーツと見なされるべきだと思いますか？

📰 "Liverpool expect Salah return before end of season" — What questions do you have about this?
「リヴァプール、サラーのシーズン終了前の復帰を期待」— これについてどのような質問がありますか？

📰 "Murphy to face Higgins after dashing Zhao's Crucible hopes" — How does this affect your life?
「マーフィー、チャオのクルーシブルの希望を打ち砕いた後、ヒギンスと対戦へ」— これはあなたの生活にどのように影響しますか？

📰 "Draper out of French Open with knee injury" — What's your opinion on this?
「ドレイパー、膝の怪我で全仏オープンを欠場」— これについてどう思いますか？

📰 "VAR denies Arsenal late penalty in draw against Atletico" — What's the most useful AI you've used?
「VAR、アトレティコ戦の引き分けでアーセナルの遅れたペナルティを否定」— あなたが使った中で最も便利なAIは何ですか？

📰 "Chelsea's Mudryk appeals against four-year FA ban" — Would you trust an AI to make decisions for you?
「チェルシーのムドリク、4年間のFA禁止処分に対して控訴」— AIにあなたの代わりに決定を任せますか？

📰 "Man Utd consider Leao move - Thursday's gossip" — How does this affect your life?
「マンチェスター・ユナイテッド、レアオの移籍を検討 - 木曜日のゴシップ」— これはあなたの生活にどのように影響しますか？

📰 "Will Rose's McLaren club gamble pay off" — How does this make you feel?
「ローズのマクラーレンクラブの賭けは報われるか」— これはあなたにどのような感情を抱かせますか？

📰 "Zaragoza keeper banned for 13 games for punching rival" — What's your favorite video game?
「サラゴサのGK、ライバルを殴ったため13試合の出場停止」— あなたのお気に入りのビデオゲームは何ですか？

📰 "Howson to be first black FA Cup final official" — Would you tell your friends about this?
「ハウソン、初の黒人FAカップ決勝審判に」— これを友達に伝えますか？

📰 "Wales great North to retire from rugby" — Do you think this is good or bad?
「ウェールズの偉人ノース、ラグビーから引退」— これは良いと思いますか、それとも悪いと思いますか？

📰 "Chelsea captain Bright retires - what now for ex-England defender" — What's the most useful AI you've used?
「チェルシーキャプテンブライト引退 - 元イングランドDFの今後は」— あなたが使った中で最も便利なAIは何ですか？

📰 "Bath could call on teenager Mears for semi-final" — What questions do you have about this?
「バース、準決勝で10代のミアーズを起用する可能性」— これについてどのような質問がありますか？

📰 "Big US tech stocks swing as investors probe AI spend" — What's the most useful AI you've used?
「米国の大型テック株が変動、投資家がAI支出を調査」— あなたが使った中で最も便利なAIは何ですか？

📰 "Four key takeaways from Jerome Powell's final rate decision as Fed chair" — What's the weirdest thing AI has done?
「ジェローム・パウエルのFRB議長として最後の利下げ決定から4つの重要なポイント」— AIがした最も奇妙なことは何ですか？

📰 "Oil price rises above $120 after reports of 'extended' Iran blockade" — What's your favorite road trip memory?
「イラン封鎖の延長報告を受け、原油価格が120ドル超に上昇」— あなたのお気に入りのロードトリップの思い出は何ですか？

📰 "A son overlooked and a jailed tycoon" — What's the scariest thing about AI?
「見過ごされた息子と投獄された大富豪」— AIについて最も怖いことは何ですか？

📰 "The kelp producer who wants to get Americans eating seaweed" — Do you think this is surprising?
「アメリカ人に海藻を食べさせようとする昆布生産者」— これは驚くべきことだと思いますか？

📰 "In five charts - How UAE's exit could affect Opec's influence over" — Do you think this will change anything?
「5つのチャートで - UAEの撤退がOPECの影響力に与える可能性」— これは何かを変えると思いますか？

📰 "Advert for £49 serum banned over 'five years younger' claim" — Do you think AI will rule the world?
「『5歳若くなる』主張により49ポンドの血清の広告が禁止」— AIが世界を支配すると思いますか？

📰 "Why has the UAE left Opec - and why does this matter" — What questions do you have about this?
「なぜUAEはOPECを離脱したのか - そしてなぜこれが重要なのか」— これについてどのような質問がありますか？

📰 "Faisal Islam" — Would you be friends with an AI?
「ファイサル・イスラム」— AIと友達になりますか？

📰 "United Arab Emirates to quit oil cartel Opec" — Would you give up your car for public transport?
「アラブ首長国連邦、石油カルテルOPECを離脱へ」— 公共交通機関のために車を諦めますか？

📰 "Musk accuses Altman of stealing a charity as courtroom battle begins" — What's the most interesting part of this story?
「マスク、裁判所での戦いが始まる中、アルトマンが慈善団体を盗んだと告発」— この物語で最も興味深い部分は何ですか？

📰 "Claimants in Johnson & Johnson talcum powder case rise to 7,000" — Would you trust an AI to make decisions for you?
「ジョンソン・エンド・ジョンソンのタルカムパウダー事件の請求者が7,000人に増加」— AIにあなたの代わりに決定を任せますか？

📰 "Early care scheme could prevent thousands of miscarriages a year" — What's your favorite road trip memory?
「早期ケア制度により年間数千件の流産を防ぐ可能性」— あなたのお気に入りのロードトリップの思い出は何ですか？

📰 "11 cancers on the rise in young people - scientists find first" — What's your guilty pleasure when it comes to food?
「若者の間で11種類のがんが増加 - 科学者が初めて発見」— 食べ物に関してあなたの罪深い楽しみは何ですか？

📰 "UK healthy life expectancy falls by two years in past decade" — What's your favorite unhealthy food?
「英国の健康寿命が過去10年間で2年低下」— あなたのお気に入りの不健康な食べ物は何ですか？

📰 "Your pint could come with a surprising health benefit" — What's the weirdest health tip you've ever heard?
「あなたのパイントには驚くべき健康上の利点が付いているかもしれません」— あなたが聞いた中で最も奇妙な健康のヒントは何ですか？`
        }
    ]
};
