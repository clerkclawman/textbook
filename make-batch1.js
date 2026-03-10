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
朝ジョギングをしたことがありますか？
⏰ Is it difficult for you to wake up early?
早起きすることは難しいですか？
😴 What do you do when you feel tired?
疲れた時何をしますか？
💪 Do you have a goal this year?
今年目標がありますか？
🌳 Do you like exercising in parks?
公園で運動するのは好きですか？
🥤 How much water do you drink daily?
毎日水をどれくらい飲みますか？
😊 Do you feel happy when you achieve goals?
目標を達成すると幸せですか？
🌟 Are you a morning person or night person?
朝型ですか夜型ですか？
🏡 What healthy habit do you want to start?
どんな健康習慣を始めたいですか？`
},
{
  title: "2. Kenta's Helpful Weekend (Passive Voice / Adverbs)",
  content: `🧹 Kenta wants to help his busy parents this weekend.
ケンタは今週末、忙しい両親を手伝いたいです。
🍽️ He decides to wash the dishes after dinner.
彼は夕食後に皿を洗うことにします。
😱 But he drops his mother's favorite plate!
しかし、彼は母のお気に入りの皿を落としてしまいます！
💔 The plate breaks into many pieces.
皿は多くの破片に割れてしまいます。
😰 Kenta feels terrible and thinks his mom will be angry.
ケンタは最悪な気分になり、母が怒ると思います。
🙏 However, his mother says, "Thank you for trying to help."
しかし、母は「手伝ってくれてありがとう」と言います。
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
}
];

fs.writeFileSync('eikenpre2-batch1-TPRS.js', 'var eikenpre2batch1 = ' + JSON.stringify(batch1, null, 2) + '; module.exports = eikenpre2batch1;');
console.log('Created batch1 with', batch1.length, 'stories');
