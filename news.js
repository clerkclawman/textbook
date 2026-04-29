// File: news.js
// Target: Daily news headlines with discussion questions
// Structure: Object with stories array for class selector compatibility

var news = {
    stories: [
        {
            title: "Daily News Headlines - April 29, 2026",
            content: `📰 "Musk says basis of charitable giving at stake in OpenAI lawsuit" — What do you think about AI?
「マスク氏、OpenAI訴訟で慈善活動の基礎が危ういと主張」— 人工知能についてどう思いますか？
📰 "Why Sam Altman and his former hero Elon Musk are taking their" — What do you think about this news?
「サム・アルトマンと元の英雄イーロン・マスクが対立する理由」— このニュースについてどう思いますか？
📰 "Social media rules for under-16s even if no ban, minister says" — How has social media changed your life?
「16歳未満でも禁止令がなくても、大臣はソーシャルメディアのルールが適用されると述べています」— ソーシャルメディアはあなたの人生をどのように変えましたか？
📰 "Valve's £85 Steam Controller divides gamers ahead of May launch" — Do you like video games?
「ヴァルヴェーの £85 スチームコントローラーが、5 月の発売を前にゲームプレイヤーの間で話題を集めています」— ビデオゲームは好きですか？
📰 "Why Spotify has no button to filter out AI music" — What kind of music do you like?
「なぜ Spotify に AI 音楽をフィルタリングするボタンがないのか」— どんな音楽が好きですか？
📰 "China blocks Meta's $2bn buys of AI start-up Manus" — What do you think about AI?
「中国は、AI スタートアップの「マナス」を買収するメタの 20 億ドル計画を阻止した」— AI についてどう思われますか？
📰 "The viral manifesto of 'anti-woke' tech boss with NHS and defence contracts" — How has technology changed your life?
「NHS と防衛契約を持つ「反覚醒」テックボスのウイルス的宣言」— テクノロジーはあなたの生活を変えましたか？
📰 "UK cyber chiefs say it's time to ditch passwords for passkeys" — What do you think about this news?
「イギリスのサイバー担当者は、パスワードをパスキーに切り替える時期が来たと述べています」— このニュースについて、どう思われますか？
📰 "£20m mystery gift buys London Zoo new hospital where you can watch" — How do you stay healthy?
「2000 万ポンドの謎の寄付が、ロンドン動物園に新しい病院を建設しました」— あなたは健康を維持する方法は何ですか？
📰 "UK's biggest ever environmental pollution claim reaches High Court" — What do you think about AI?
「イギリス史上最も重大な環境汚染訴訟が高等裁判所に提出された」— AI についてどう思われますか？
📰 "We're living in a shed because of river pollution" — What do you think about this news?
「川の水質汚染のため、私たちは仮住まいの小屋に住んでいます」— このニュースについて、どう思われますか？
📰 "First ever talks to ditch fossil fuels as UN deadlock deepens" — Do you think electric cars are the future?
「化石燃料を廃止するための初めての会談が行われ、国連の膠着状態が深まっている」— 電気自動車は未来だと思いますか？
📰 "Meet the 19-metre octopus that prowled the ancient seas" — What do you think about this news?
「古代の海を徘徊した 19 メートルのタコに会う」— このニュースについて、どう思われますか？
📰 "Ban 'forever chemicals' in uniforms and frying pans" — What can we do to help the environment?
「制服とフライパンに「永遠の化学物質」を禁止する」— 環境を助けるために何ができますか？
📰 "Electricity bills targeted in planned shakeup to energy market" — What makes a good company?
「エネルギー市場の計画された改革で電気代がターゲットになる」— 良い会社とは何ですか？
📰 "Artemis II crew" — Are you interested in space exploration?
「アルテミス II の乗組員」— 宇宙探査に興味がありますか？
📰 "Butterfly numbers are dropping but here are five simple things" — Do you like animals?
「蝶の数が減少していますが、ここに 5 つの簡単なことがあります」— 動物は好きですか？
📰 "Golden eagles' return to English skies gets government backing" — What achievement deserves recognition?
「イヌワシのイングランドへの帰還が政府の支援を受ける」— どの成果が認識に値しますか？
📰 "Face serum advert banned over 'five years younger' claim" — How has technology changed your life?
「5 年若くなるという主張で顔用血清の広告が禁止された」— テクノロジーはあなたの生活を変えましたか？
📰 "United Arab Emirates to quit oil cartel Opec" — What makes a good company?
「アラブ首長国連邦が石油カルテル OPEC を脱退する」— 良い会社とは何ですか？
📰 "Faisal Islam" — What do you think about this news?
「ファイサル・イスラム」— このニュースについて、どう思われますか？
📰 "Why Spotify has no button to filter out AI music" — What kind of music do you like?
「なぜ Spotify に AI 音楽をフィルタリングするボタンがないのか」— どんな音楽が好きですか？
📰 "Musk says basis of charitable giving at stake in OpenAI lawsuit" — What do you think about AI?
「マスク氏、OpenAI訴訟で慈善活動の基礎が危ういと主張」— 人工知能についてどう思いますか？
📰 "Nostalgia wasn't enough" — What's your favorite movie?
「ノスタルジーだけでは十分ではなかった」— お気に入りの映画は何ですか？
📰 "Why Sam Altman and his former hero Elon Musk are taking their" — What do you think about this news?
「サム・アルトマンと元の英雄イーロン・マスクが対立する理由」— このニュースについてどう思いますか？
📰 "Billie Eilish puts Manchester at centre of new 3D" — What kind of music do you like?
「ビリー・アイリッシュがマンチェスターを新しい 3D の中心にする」— どんな音楽が好きですか？
📰 "Antiquities dealer who exposed British Museum theft" — What achievement deserves recognition?
「大英博物館の盗難を暴露した骨董品業者」— どの成果が認識に値しますか？
📰 "Rebel Wilson says claims she bullied women on her set" — What's your favorite movie?
「レベル・ウィルソンは、彼女のセットで女性をいじめたという主張を否定する」— お気に入りの映画は何ですか？
📰 "When Attenborough met the gorillas - the story behind" — Do you like animals?
「アッテンボローがゴリラに出会ったとき - その背後にある物語」— 動物は好きですか？
📰 "Hot Chocolate founder and You Sexy Thing co-writer" — What kind of music do you like?
「ホット・チョコレートの創設者と「You Sexy Thing」の共作者」— どんな音楽が好きですか？
📰 "Megan Thee Stallion pulls out of Moulin Rouge show" — What's your favorite movie?
「メガン・ザ・スタリオンがムーラン・ルージュのショーを辞退する」— お気に入りの映画は何ですか？
📰 "Why Spotify has no button to filter out AI music" — What kind of music do you like?
「なぜ Spotify に AI 音楽をフィルタリングするボタンがないのか」— どんな音楽が好きですか？
📰 "Early care scheme could prevent thousands of miscarriages" — How do you stay healthy?
「早期ケアスキームが数千の流産を防ぐ可能性がある」— あなたは健康を維持する方法は何ですか？
📰 "11 cancers on the rise in young people - scientists" — How do you stay healthy?
「若者の間で 11 種類のがんが増加している - 科学者」— あなたは健康を維持する方法は何ですか？
📰 "UK healthy life expectancy falls by two years in pandemic" — How do you stay healthy?
「パンデミックでイギリスの健康な寿命が 2 年短縮された」— あなたは健康を維持する方法は何ですか？
📰 "Your pint could come with a surprising health benefit" — How do you stay healthy?
「あなたのパイントには驚くべき健康上の利点があるかもしれません」— あなたは健康を維持する方法は何ですか？
📰 "Hay fever misery does last longer - here is how to cope" — How do you stay healthy?
「花粉症の苦しみは長く続きます - ここに対処方法があります」— あなたは健康を維持する方法は何ですか？
📰 "Bird flu vaccine trial against potential pandemic" — How do you stay healthy?
「潜在的なパンデミックに対する鳥インフルエンザワクチン試験」— あなたは健康を維持する方法は何ですか？
📰 "Smoking ban for people born after 2008 in the UK" — How do you stay healthy?
「2008 年以降に生まれた人々の喫煙禁止令」— あなたは健康を維持する方法は何ですか？
📰 "Health visitors call for limits on 'impossible' 1" — How do you stay healthy?
「保健師が「不可能な」1 の制限を求める」— あなたは健康を維持する方法は何ですか？
📰 "Pregnancy vaccine reduces baby hospital admissions" — How do you stay healthy?
「妊娠中のワクチン接種が赤ちゃんの入院を減らす」— あなたは健康を維持する方法は何ですか？
📰 "Rollout of Covid vaccines extraordinary feat - inquiry" — How do you stay healthy?
「コビドワクチンの展開は並外れた偉業 - 調査」— あなたは健康を維持する方法は何ですか？`
        }
    ]
};