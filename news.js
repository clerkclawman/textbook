// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility

var news = {
    stories: [
        {
            title: "Daily News Headlines - April 29, 2026",
            content: `📰 "Musk says basis of charitable giving at stake in OpenAI lawsuit" — Do you think AI will rule the world?
「「マスク氏、OpenAI訴訟で慈善寄付の基礎が危ういと主張」」— AIが世界を支配すると思いますか？
📰 "Why Sam Altman and his former hero Elon Musk are taking their" — How does this make you feel?
「「サム・アルトマンと元の英雄イーロン・マスクが対立する理由」」— これはどう感じさせますか？
📰 "Social media rules for under-16s even if no ban, minister says" — Do you think social media makes people lonely?
「「禁止がなくても16歳未満のSNS規制が必要と大臣」」— SNSは人を孤独にすると思いますか？
📰 "Valve's £85 Steam Controller divides gamers ahead of May launch" — Do you think gaming makes you smarter?
「「バルブの85ポンドSteamコントローラー、5月発売前にゲーマーを二分」」— ゲームは頭を良くすると思いますか？
📰 "Why Spotify has no button to filter out AI music" — Do you think AI will take your job?
「「SpotifyにAI音楽を除外するボタンがない理由」」— AIがあなたの仕事を奪うと思いますか？
📰 "China blocks Meta's $2bn buys of AI start-up Manus" — Do you think AI will rule the world?
「「中国、メタのAIスタートアップManusの20億ドル買収を阻止」」— AIが世界を支配すると思いますか？
📰 "The viral manifesto of 'anti-woke' tech boss with NHS and defence contracts" — What's your favorite social media platform?
「「NHSと防衛契約を持つ「反覚醒」テックCEOの爆発的宣言」」— お気に入りのSNSプラットフォームは何ですか？
📰 "UK cyber chiefs say it's time to ditch passwords for passkeys -" — Do you think technology will solve all our problems?
「「英国サイバー当局、パスワードをパスキーに切り替える時期と主張」」— テクノロジーはすべての問題を解決すると思いますか？
📰 "£20m mystery gift buys London Zoo new hospital where you can watch" — What's the most annoying health rule?
「「2000万ポンドの謎の寄付、ロンドン動物園に新しい病院を提供」」— 最も迷惑な健康ルールは何ですか？
📰 "UK's biggest ever environmental pollution claim reaches High Court" — Do you think AI has feelings?
「「英国史上最大の環境汚染訴訟が高等裁判所に」」— AIには感情があると思いますか？
📰 "'We're living in a shed because of river pollution'" — Have you ever seen an amazing animal in the wild?
「「川の汚染で小屋に住んでいる」」— 野生の素晴らしい動物を見たことがありますか？
📰 "First ever talks to ditch fossil fuels as UN deadlock deepens" — Do you think electric cars are the future?
「「国連の膠着が深まる中、化石燃料廃止の初会談」」— 電気自動車は未来だと思いますか？
📰 "Meet the 19-metre octopus that prowled the ancient seas" — What's the most beautiful place in nature you've seen?
「「古代の海を徘徊した19メートルのタコに出会う」」— 見た中で最も美しい自然の場所はどこですか？
📰 "Ban 'forever chemicals' in uniforms and frying pans, MPs urge" — What's the most annoying thing about driving?
「「制服とフライパンでの「永遠の化学物質」禁止を議員が要請」」— 運転で最も迷惑なことは何ですか？
📰 "Electricity bills targeted in planned shakeup to energy pricing" — What's the most expensive car you've seen?
「「エネルギー価格改革で電気代がターゲットに」」— 見た中で最も高価な車は何ですか？
📰 "Artemis II crew" — What's your favorite planet?
「「アルテミス2号のクルー」」— お気に入りの惑星は何ですか？
📰 "Butterfly numbers are dropping but here are five species you may see" — What's your favorite animal?
「「蝶の数は減少しているが、見られる5種類」」— お気に入りの動物は何ですか？
📰 "Golden eagles' return to English skies gets government backing" — What's the most annoying environmental rule?
「「イヌワシの英国への帰還が政府の支援を受ける」」— 最も迷惑な環境ルールは何ですか？
📰 "Face serum advert banned over 'five years younger' claim" — What's the scariest thing about AI?
「「5歳若くなるという主張で顔用セラム広告が禁止」」— AIについて最も怖いことは何ですか？
📰 "United Arab Emirates to quit oil cartel Opec" — What's the most annoying thing about driving?
「「アラブ首長国連邦、石油カルテルOPECを脱退へ」」— 運転で最も迷惑なことは何ですか？
📰 "Faisal Islam" — What's the most useful AI you've used?
「「ファイサル・イスラム」」— 使った中で最も有用なAIは何ですか？
📰 "Why Spotify has no button to filter out AI music" — What's the scariest thing about AI?
「「SpotifyにAI音楽を除外するボタンがない理由」」— AIについて最も怖いことは何ですか？
📰 "Musk says basis of charitable giving at stake in OpenAI lawsuit" — What's the scariest thing about AI?
「「マスク氏、OpenAI訴訟で慈善寄付の基礎が危ういと主張」」— AIについて最も怖いことは何ですか？
📰 "Nostalgia wasn't enough" — What's the worst movie you've ever seen?
「「ノスタルジーだけでは不十分だった」」— 見た中で最も悪い映画は何ですか？
📰 "Why Sam Altman and his former hero Elon Musk are taking their" — How does this make you feel?
「「サム・アルトマンと元の英雄イーロン・マスクが対立する理由」」— これはどう感じさせますか？
📰 "Billie Eilish puts Manchester at centre of new 3D concert film" — Do you listen to music while working?
「「ビリー・アイリッシュ、マンチェスターを新しい3Dコンサート映画の中心に」」— 仕事中に音楽を聴きますか？
📰 "Antiquities dealer who exposed British Museum thefts dies aged 61" — What questions do you have about this?
「「大英博物館の盗難を暴露した骨董品商、61歳で死去」」— これについてどんな質問がありますか？
📰 "Rebel Wilson says claims she bullied women on her film are 'absolute" — What's the most useful AI you've used?
「「レベル・ウィルソン、映画で女性をいじめたという主張は「絶対に」」」— 使った中で最も有用なAIは何ですか？
📰 "When Attenborough met the gorillas - the story behind his iconic TV" — Do you think this will change anything?
「「アッテンボローがゴリラに出会った時 - 彼の象徴的なTVの裏側」」— これは何かを変えると思いますか？
📰 "Hot Chocolate founder and You Sexy Thing co-writer Tony Wilson dies" — What questions do you have about this?
「「ホット・チョコレート創設者でYou Sexy Thing共作者のトニー・ウィルソン死去」」— これについてどんな質問がありますか？
📰 "Megan Thee Stallion pulls out of Moulin Rouge show" — What's the most embarrassing song in your playlist?
「「メガン・ザ・スタリオン、ムーラン・ルージュ公演を辞退」」— プレイリストで最も恥ずかしい曲は何ですか？
📰 "Why Spotify has no button to filter out AI music" — What's the weirdest thing AI has done?
「「SpotifyにAI音楽を除外するボタンがない理由」」— AIがした最も奇妙なことは何ですか？
📰 "Early care scheme could prevent thousands of miscarriages a year" — What's the most expensive car you've seen?
「「早期ケア制度で年間数千件の流産を防げる可能性」」— 見た中で最も高価な車は何ですか？
📰 "11 cancers on the rise in young people - scientists find first" — What's your favorite unhealthy food?
「「若者で11種類のがんが増加 - 科学者が初めて発見」」— お気に入りの不健康な食べ物は何ですか？
📰 "UK healthy life expectancy falls by two years in past decade" — Do you think doctors know what they're doing?
「「英国の健康寿命が過去10年で2年減少」」— 医師は自分のしていることを理解していると思いますか？
📰 "Your pint could come with a surprising health benefit" — What's the worst illness you've ever had?
「「あなたのパイントには驚くべき健康上の利点があるかも」」— かかった中で最も悪い病気は何ですか？
📰 "Hay fever misery does last longer - here is how to cope" — Do you think electric cars are the future?
「「花粉症の苦しみは長く続く - 対処法はこちら」」— 電気自動車は未来だと思いますか？
📰 "Bird flu vaccine trial against potential pandemic strain begins" — Do you think AI will rule the world?
「「潜在的なパンデミック株に対する鳥インフルエンザワクチン試験開始」」— AIが世界を支配すると思いますか？
📰 "Smoking ban for people born after 2008 in the UK agreed" — Have you ever had a strange medical experience?
「「英国、2008年以降生まれの喫煙禁止に合意」」— 奇妙な医療体験をしたことがありますか？
📰 "Health visitors call for limits on 'impossible' 1,000-family caseloads" — What's the weirdest health tip you've ever heard?
「「保健師、「不可能な」1000家族の担当数に制限を求める」」— 聞いた中で最も奇妙な健康のヒントは何ですか？
📰 "Pregnancy vaccine reduces baby hospital admissions for RSV by 80%" — Have you ever had a strange medical experience?
「「妊娠中のワクチン、RSVによる赤ちゃんの入院を80%削減」」— 奇妙な医療体験をしたことがありますか？
📰 "Rollout of Covid vaccines extraordinary feat - inquiry report" — What's the most annoying health rule?
「「COVIDワクチン接種は並外れた偉業 - 調査報告書」」— 最も迷惑な健康ルールは何ですか？`
        }
    ]
};
