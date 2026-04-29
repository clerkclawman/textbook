// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility

var news = {
    stories: [
        {
            title: "Daily News Headlines - April 29, 2026",
            content: `📰 "Musk says basis of charitable giving at stake in OpenAI lawsuit" — What's the scariest thing about AI?
「マスク氏、OpenAI訴訟で慈善活動の基礎が危ういと主張」— AIについて一番怖いことは何ですか？
📰 "Why Sam Altman and his former hero Elon Musk are taking their" — How does this make you feel?
「サム・アルトマンと元の英雄イーロン・マスクが対立する理由」— これはどう感じさせますか？
📰 "Social media rules for under-16s even if no ban, minister says" — What's your favorite social media platform?
「16歳未満でも禁止令がなくても、大臣はソーシャルメディアのルールが適用されると述べています」— お気に入りのソーシャルメディアプラットフォームは何ですか？
📰 "Valve's £85 Steam Controller divides gamers ahead of May launch" — Do you think esports should be in the Olympics?
「ヴァルヴェーの £85 スチームコントローラーが、5 月の発売を前にゲームプレイヤーの間で話題を集めています」— eスポーツはオリンピックに入るべきだと思いますか？
📰 "Why Spotify has no button to filter out AI music" — What's the most useful AI you've used?
「なぜ Spotify に AI 音楽をフィルタリングするボタンがないのか」— 使った中で最も便利なAIは何ですか？
📰 "China blocks Meta's $2bn buys of AI start-up Manus" — What's the weirdest thing AI has done?
「中国は、AI スタートアップの「マナス」を買収するメタの 20 億ドル計画を阻止した」— AIがした一番変なことは何ですか？
📰 "The viral manifesto of 'anti-woke' tech boss with NHS and defence contracts" — What's the most annoying thing about modern technology?
「NHS と防衛契約を持つ「反覚醒」テックボスのウイルス的宣言」— 現代のテクノロジーで一番イライラすることは何ですか？
📰 "UK cyber chiefs say it's time to ditch passwords for passkeys" — Do you think privacy is dead in the digital age?
「イギリスのサイバー担当者は、パスワードをパスキーに切り替える時期が来たと述べています」— デジタル時代にプライバシーは死んだと思いますか？
📰 "£20m mystery gift buys London Zoo new hospital where you can watch" — What's your favorite animal?
「2000 万ポンドの謎の寄付が、ロンドン動物園に新しい病院を建設しました」— お気に入りの動物は何ですか？
📰 "UK's biggest ever environmental pollution claim reaches High Court" — Do you actually recycle, or just say you do?
「イギリス史上最も重大な環境汚染訴訟が高等裁判所に提出された」— 実際にリサイクルしていますか、それとも言うだけですか？
📰 "We're living in a shed because of river pollution" — What's the most beautiful place in nature you've seen?
「川の水質汚染のため、私たちは仮住まいの小屋に住んでいます」— 自然の中で見た一番美しい場所はどこですか？
📰 "First ever talks to ditch fossil fuels as UN deadlock deepens" — Would you give up meat to help the environment?
「化石燃料を廃止するための初めての会談が行われ、国連の膠着状態が深まっている」— 環境を助けるために肉をあきらめますか？
📰 "Meet the 19-metre octopus that prowled the ancient seas" — Do you think aliens exist?
「古代の海を徘徊した 19 メートルのタコに会う」— 宇宙人は存在すると思いますか？
📰 "Ban 'forever chemicals' in uniforms and frying pans" — What's the weirdest thing you've done to be eco-friendly?
「制服とフライパンに「永遠の化学物質」を禁止する」— エコフレンドリーのためにした一番変なことは何ですか？
📰 "Electricity bills targeted in planned shakeup to energy market" — What's the most expensive thing you've ever bought?
「エネルギー市場の計画された改革で電気代がターゲットになる」— 買った中で一番高いものは何ですか？
📰 "Artemis II crew" — Would you go to space if you could?
「アルテミス II の乗組員」— 行けるなら宇宙に行きますか？
📰 "Butterfly numbers are dropping but here are five simple things" — What's your favorite insect?
「蝶の数が減少していますが、ここに 5 つの簡単なことがあります」— お気に入りの昆虫は何ですか？
📰 "Golden eagles' return to English skies gets government backing" — What's the coolest bird you've ever seen?
「イヌワシのイングランドへの帰還が政府の支援を受ける」— 見た中で一番かっこいい鳥は何ですか？
📰 "Face serum advert banned over 'five years younger' claim" — What's the most annoying thing about advertising?
「5 年若くなるという主張で顔用血清の広告が禁止された」— 広告で一番イライラすることは何ですか？
📰 "United Arab Emirates to quit oil cartel Opec" — Do you think oil companies are good or bad?
「アラブ首長国連邦が石油カルテル OPEC を脱退する」— 石油会社は良いと思いますか、悪いと思いますか？
📰 "Faisal Islam" — What's your favorite news presenter?
「ファイサル・イスラム」— お気に入りのニュースキャスターは誰ですか？
📰 "Why Spotify has no button to filter out AI music" — What's the most overrated song ever?
「なぜ Spotify に AI 音楽をフィルタリングするボタンがないのか」— 歴史上で一番過大評価されている曲は何ですか？
📰 "Musk says basis of charitable giving at stake in OpenAI lawsuit" — Would you be friends with an AI?
「マスク氏、OpenAI訴訟で慈善活動の基礎が危ういと主張」— AIと友達になりますか？
📰 "Nostalgia wasn't enough" — What's your favorite memory from the past?
「ノスタルジーだけでは十分ではなかった」— 過去のお気に入りの思い出は何ですか？
📰 "Why Sam Altman and his former hero Elon Musk are taking their" — What's your reaction to this news?
「サム・アルトマンと元の英雄イーロン・マスクが対立する理由」— このニュースに対するあなたの反応は何ですか？
📰 "Billie Eilish puts Manchester at centre of new 3D" — What's the most embarrassing song in your playlist?
「ビリー・アイリッシュがマンチェスターを新しい 3D の中心にする」— プレイリストの中で一番恥ずかしい曲は何ですか？
📰 "Antiquities dealer who exposed British Museum theft" — What's the most valuable thing you own?
「大英博物館の盗難を暴露した骨董品業者」— 持っている中で一番価値のあるものは何ですか？
📰 "Rebel Wilson says claims she bullied women on her set" — What's the worst rumor you've heard about yourself?
「レベル・ウィルソンは、彼女のセットで女性をいじめたという主張を否定する」— 自分について聞いた中で一番悪いうわさは何ですか？
📰 "When Attenborough met the gorillas - the story behind" — What's the most amazing animal encounter you've had?
「アッテンボローがゴリラに出会ったとき - その背後にある物語」— 経験した中で一番素晴らしい動物との出会いは何ですか？
📰 "Hot Chocolate founder and You Sexy Thing co-writer" — What's the best concert you've ever been to?
「ホット・チョコレートの創設者と「You Sexy Thing」の共作者」— 行った中で一番良いコンサートは何ですか？
📰 "Megan Thee Stallion pulls out of Moulin Rouge show" — What's the most disappointing show you've ever seen?
「メガン・ザ・スタリオンがムーラン・ルージュのショーを辞退する」— 見た中で一番がっかりしたショーは何ですか？
📰 "Why Spotify has no button to filter out AI music" — Do you still listen to music from 10 years ago?
「なぜ Spotify に AI 音楽をフィルタリングするボタンがないのか」— 10 年前の音楽をまだ聞きますか？
📰 "Early care scheme could prevent thousands of miscarriages" — What's the most important health advice you've received?
「早期ケアスキームが数千の流産を防ぐ可能性がある」— 受けた中で一番重要な健康アドバイスは何ですか？
📰 "11 cancers on the rise in young people - scientists" — What's the weirdest health tip you've ever heard?
「若者の間で 11 種類のがんが増加している - 科学者」— 聞いた中で一番変な健康のヒントは何ですか？
📰 "UK healthy life expectancy falls by two years in pandemic" — Do you think people are too obsessed with being healthy?
「パンデミックでイギリスの健康な寿命が 2 年短縮された」— 人々は健康になりすぎていると思いますか？
📰 "Your pint could come with a surprising health benefit" — What's your favorite unhealthy food?
「あなたのパイントには驚くべき健康上の利点があるかもしれません」— お気に入りの不健康な食べ物は何ですか？
📰 "Hay fever misery does last longer - here is how to cope" — What's the most annoying allergy you have?
「花粉症の苦しみは長く続きます - ここに対処方法があります」— 持っている中で一番イライラするアレルギーは何ですか？
📰 "Bird flu vaccine trial against potential pandemic" — Have you ever had a strange medical experience?
「潜在的なパンデミックに対する鳥インフルエンザワクチン試験」— 変な医療体験をしたことがありますか？
📰 "Smoking ban for people born after 2008 in the UK" — What's the most annoying rule you have to follow?
「2008 年以降に生まれた人々の喫煙禁止令」— 守らなければならない一番イライラするルールは何ですか？
📰 "Health visitors call for limits on 'impossible' 1" — Do you think doctors know what they're doing?
「保健師が「不可能な」1 の制限を求める」— 医者は自分が何をしているか分かっていると思いますか？
📰 "Pregnancy vaccine reduces baby hospital admissions" — What's the most annoying thing about hospitals?
「妊娠中のワクチン接種が赤ちゃんの入院を減らす」— 病院で一番イライラすることは何ですか？
📰 "Rollout of Covid vaccines extraordinary feat - inquiry" — What's the most surprising medical discovery you've heard about?
「コビドワクチンの展開は並外れた偉業 - 調査」— 聞いた中で一番驚く医療の発見は何ですか？`
        }
    ]
};