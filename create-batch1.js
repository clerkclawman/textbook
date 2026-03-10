const fs = require('fs');

const batch1 = [
{
  title: "1. Emma's New Routine (Present Perfect / Comparatives)",
  content: `🏡 Emma wants to become healthier this year.
エマは今年、より健康になりたいです。
🏃‍♀️ She decides to start jogging every morning.
彼女は毎朝ジョギングを始めることにします。
⏰ But waking up at 6 AM is very hard.
しかし、朝6時に起きるのはとても大変です。
😴 For three days, she feels too tired to continue.
3日間、彼女は疲れすぎて続けられません。
💪 However, Emma remembers her goal to be healthy.
しかし、エマは健康になるという目標を思い出します。
🌳 She starts jogging slowly in the park nearby.
彼女は近くの公園でゆっくりジョギングを始めます。
🥤 After running, she drinks water and feels better.
走った後、彼女は水を飲んで元気になります。
😊 Now Emma is stronger than she was last month.
今、エマは先月よりも強くなりました。
🌟 She has become a morning person finally!
ついに彼女は朝型人間になりました！

🏡 Do you want to become healthier this year?
今年はもっと健康になりたいですか？
🏃‍♀️ Have you ever tried jogging in the morning?
朝ジョギングしたことがありますか？
⏰ Is it difficult for you to wake up early?
早起きすることは難しいですか？
😴 What do you do when you feel tired?
疲れた時あなたは何をしますか？
💪 Do you have a goal this year?
今年は目標がありますか？
🌳 Do you like exercising in parks?
公園で運動するのは好きですか？
🥤 How much water do you drink daily?
毎日どれくらい水を飲みますか？
😊 Do you feel happy when you achieve goals?
目標を達成すると幸せに感じますか？
🌟 Are you a morning person or night person?
あなたは朝型ですか、それとも夜型ですか？
🏡 What healthy habit do you want to start?
どんな健康習慣を始めたいですか？`
},
{
  title: "2. Kenta's Helpful Weekend (Passive Voice / Adverbs)",
  content: `🧹 Kenta wants to help his busy parents.
ケンタは忙しい両親を助けたいです。
🍽️ He decides to wash the dishes after dinner.
彼は夕食後に皿を洗うことにします。
😱 But he drops his mother's favorite plate!
しかし、彼は母のお気に入りの皿を落としてしまいます！
💔 The plate breaks into many pieces.
皿は多くの破片に割れてしまいます。
😰 Kenta feels terrible and thinks his mom will be angry.
ケンタは最悪な気分になり、母が怒ると思います。
🙏 However, his mother says, "Thank you for trying to help."
しかし、母は「手伝おうとしてくれてありがとう」と言います。
😊 She teaches him how to wash dishes carefully.
彼女は彼に丁寧に皿を洗う方法を教えます。
🧺 Now Kenta helps with laundry every weekend.
今、ケンタは毎週末洗濯を手伝います。
❤️ He feels proud when his parents thank him.
両親がありがとうと言ってくれると彼は誇らしく思います。

🧹 Do you help your parents at home?
家で両親を手伝いますか？
🍽️ Have you ever broken a dish?
皿を割ったことがありますか？
😱 How did you feel when you made a mistake?
ミスをした時どう感じましたか？
🙏 Do your parents get angry easily?
あなたの両親は簡単に怒りますか？
😊 Who teaches you new things at home?
家で新しいことを誰が教えてくれますか？
🧺 What chores do you like doing?
どんな家事が好きですか？
❤️ How do you feel when someone thanks you?
誰かにありがとうと言われるとどう感じますか？
💪 What can you do to help your family?
家族を助けるために何ができますか？
🏠 Is your room usually clean or messy?
あなたの部屋はいつもきれいですか、それとも散らかっていますか？
🌟 What chore do you want to learn?
どんな家事を学びたいですか？`
},
{
  title: "3. Yui's Music Challenge (Gerunds / Infinitive)",
  content: `🎵 Yui wants to join the school music club.
ユイは学校の音楽部に入りたいです。
🎸 She is interested in playing the guitar.
彼女はギターを弾くことに興味があります。
😰 But learning guitar is harder than she expected.
しかし、ギターを学ぶことは彼女が思っていたより難しいです。
🖐️ Her fingers hurt from pressing the strings.
弦を押さえることで彼女の指が痛くなります。
😔 After one week, Yui thinks about quitting.
1週間後、ユイは辞めることを考えます。
👩‍🏫 However, her teacher says, "Keep trying. You will improve."
しかし、先生は「続けなさい。上手になるよ」と言います。
📚 Yui practices the same song every day.
ユイは毎日同じ曲を練習します。
🎶 After one month, she can play the song perfectly!
1ヶ月後、彼女はその曲を完璧に弾けるようになります！
🎉 Yui performs at the school festival with her club.
ユイはクラブの仲間と学校祭で演奏します。
🌟 She is happy she didn't give up.
彼女は諦めなかったことを嬉しく思います。

🎵 Do you play any musical instruments?
何か楽器を演奏しますか？
🎸 Have you ever wanted to learn guitar?
ギターを習いたいと思ったことがありますか？
😰 What is something difficult you have learned?
あなたが学んだ難しいことは何ですか？
🖐️ Have you ever wanted to quit something?
何かを辞めたいと思ったことがありますか？
👩‍🏫 Does a teacher encourage you sometimes?
先生が時々あなたを励ましてくれますか？
📚 Do you practice something every day?
毎日何かを練習しますか？
🎶 What song do you like to listen to?
どんな曲を聴くのが好きですか？
🎉 Have you ever performed in front of people?
人の前で演奏したことがありますか？
🌟 What do you want to learn this year?
今年何を学びたいですか？
🎵 Which instrument do you think is hardest?
どの楽器が一番難しいと思いますか？`
}
];

fs.writeFileSync('/home/tony/textbook/eikenpre2-batch1-TPRS.js', `// Pre-2 Batch 1 (Stories 1-3) - TPRS Narrative Style
var eikenpre2batch1 = ${JSON.stringify(batch1, null, 2)};
module.exports = eikenpre2batch1;
`);

console.log('Created batch1 with', batch1.length, 'stories');
