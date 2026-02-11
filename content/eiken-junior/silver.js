// silverStories.js
var silverStories = [
    // --- PATTERN: I LIKE (1-8) ---
    {
        title: "1. I like Fruit",
        content: `🍎 I like apples.
私はリンゴが好きです。
🍌 I like bananas.
私はバナナが好きです。
🍇 I like grapes.
私はブドウが好きです。
🍎 Do you like apples?
リンゴは好きですか？`
    },
    {
        title: "2. I like Colors",
        content: `🔴 I like red.
私は赤が好きです。
🔵 I like blue.
私は青が好きです。
🟡 I like yellow.
私は黄色が好きです。
🔵 Do you like blue?
青は好きですか？`
    },
    {
        title: "3. I like Animals",
        content: `🐶 I like dogs.
私は犬が好きです。
🐱 I like cats.
私は猫が好きです。
🐨 I like koalas.
私はコアラが好きです。
🐶 Do you like dogs?
犬は好きですか？`
    },
    {
        title: "4. I like Sports",
        content: `⚽ I like soccer.
私はサッカーが好きです。
⚾ I like baseball.
私は野球が好きです。
🎾 I like tennis.
私はテニスが好きです。
⚽ Do you like soccer?
サッカーは好きですか？`
    },
    {
        title: "5. I like Food",
        content: `🍕 I like pizza.
私はピザが好きです。
🍔 I like hamburgers.
私はハンバーガーが好きです。
🍛 I like curry.
私はカレーが好きです。
🍕 Is it yummy?
おいしいですか？`
    },
    {
        title: "6. I like Drinks",
        content: `🥛 I like milk.
私は牛乳が好きです。
🧃 I like juice.
私はジュースが好きです。
🥤 I like soda.
私はソーダが好きです。
🥛 Do you drink milk?
牛乳を飲みますか？`
    },
    {
        title: "7. I like Summer",
        content: `☀️ I like summer.
私は夏が好きです。
🏊 I like pools.
私はプールが好きです。
🍦 I like ice cream.
私はアイスクリームが好きです。
☀️ Is it hot?
暑いですか？`
    },
    {
        title: "8. I like School",
        content: `🏫 I like school.
私は学校が好きです。
🎵 I like music.
私は音楽が好きです。
🎨 I like art.
私は図工が好きです。
🏫 Is school fun?
学校は楽しいですか？`
    },

    // --- PATTERN: I HAVE (9-16) ---
    {
        title: "9. I have a Pen",
        content: `✏️ I have a pencil.
私は鉛筆を持っています。
🖊️ I have a pen.
私はペンを持っています。
📏 I have a ruler.
私は定規を持っています。
🖊️ Do you have a pen?
ペンを持っていますか？`
    },
    {
        title: "10. I have a Bag",
        content: `🎒 I have a bag.
私はカバンを持っています。
📕 I have a book.
私は本を持っています。
📓 I have a notebook.
私はノートを持っています。
🎒 Is your bag big?
あなたのカバンは大きいですか？`
    },
    {
        title: "11. I have a Bike",
        content: `🚲 I have a bicycle.
私は自転車を持っています。
🎩 I have a hat.
私は帽子を持っています。
🔑 I have a key.
私はカギを持っています。
🚲 Do you ride a bike?
自転車に乗りますか？`
    },
    {
        title: "12. I have a Pet",
        content: `🐹 I have a hamster.
私はハムスターを飼っています。
🐢 I have a turtle.
私はカメを飼っています。
🦜 I have a bird.
私は鳥を飼っています。
🐹 Is it small?
それは小さいですか？`
    },
    {
        title: "13. I have a Toy",
        content: `🤖 I have a robot.
私はロボットを持っています。
🧸 I have a doll.
私は人形を持っています。
🚗 I have a toy car.
私はおもちゃの車を持っています。
🤖 Do you like toys?
おもちゃは好きですか？`
    },
    {
        title: "14. I have a Ball",
        content: `⚽ I have a soccer ball.
私はサッカーボールを持っています。
⚾ I have a bat.
私はバットを持っています。
🥊 I have a glove.
私はグローブを持っています。
⚾ Let's play baseball.
野球をしよう。`
    },
    {
        title: "15. I have a Brother",
        content: `👦 I have a brother.
私には兄弟がいます。
👧 I have a sister.
私には姉妹がいます。
👶 I have a baby brother.
私には赤ちゃんの弟がいます。
👦 Is he nice?
彼は優しいですか？`
    },
    {
        title: "16. I have Money",
        content: `💰 I have money.
私はお金を持っています。
👛 I have a wallet.
私は財布を持っています。
🍬 I want candy.
私はキャンディが欲しいです。
💰 Do you have 100 yen?
100円持っていますか？`
    },

    // --- PATTERN: IT IS / DESCRIPTIONS (17-24) ---
    {
        title: "17. It is Big",
        content: `🐘 It is big.
それは大きいです。
🐭 It is small.
それは小さいです。
🦒 It is tall.
それは背が高いです。
🐘 Is an elephant big?
ゾウは大きいですか？`
    },
    {
        title: "18. It is Hot",
        content: `🔥 It is hot.
それは熱いです。
❄️ It is cold.
それは冷たいです。
🛀 The bath is hot.
お風呂は熱いです。
❄️ Is ice cold?
氷は冷たいですか？`
    },
    {
        title: "19. It is Red",
        content: `🍎 The apple is red.
そのリンゴは赤いです。
🍌 The banana is yellow.
そのバナナは黄色いです。
🥬 The leaf is green.
その葉っぱは緑色です。
🍎 Is the apple red?
リンゴは赤いですか？`
    },
    {
        title: "20. It is Cute",
        content: `🐱 The cat is cute.
その猫はかわいいです。
🦁 The lion is strong.
そのライオンは強いです。
🐰 The rabbit is fast.
そのウサギは速いです。
🐱 Is the cat cute?
猫はかわいいですか？`
    },
    {
        title: "21. It is Yummy",
        content: `🍰 The cake is yummy.
そのケーキはおいしいです。
🍋 The lemon is sour.
そのレモンは酸っぱいです。
🍫 The chocolate is sweet.
そのチョコレートは甘いです。
🍰 Do you like cake?
ケーキは好きですか？`
    },
    {
        title: "22. It is New",
        content: `👟 The shoes are new.
その靴は新しいです。
🏚️ The house is old.
その家は古いです。
🚗 The car is fast.
その車は速いです。
👟 Are your shoes new?
あなたの靴は新しいですか？`
    },
    {
        title: "23. It is Sunny",
        content: `☀️ It is sunny.
晴れています。
☁️ It is cloudy.
曇っています。
🌧️ It is rainy.
雨が降っています。
☀️ Is it sunny today?
今日は晴れていますか？`
    },
    {
        title: "24. It is Fun",
        content: `🎮 The game is fun.
そのゲームは楽しいです。
📺 The TV is boring.
そのテレビはつまらないです。
🎢 The park is fun.
公園は楽しいです。
🎮 Is the game fun?
ゲームは楽しいですか？`
    },

    // --- PATTERN: I CAN (25-32) ---
    {
        title: "25. I can Run",
        content: `🏃 I can run.
私は走れます。
🚶 I can walk.
私は歩けます。
🤸 I can jump.
私はジャンプできます。
🏃 Can you run fast?
速く走れますか？`
    },
    {
        title: "26. I can Swim",
        content: `🏊 I can swim.
私は泳げます。
⛷️ I can ski.
私はスキーができます。
⛸️ I can skate.
私はスケートができます。
🏊 Can you swim?
泳げますか？`
    },
    {
        title: "27. I can Sing",
        content: `🎤 I can sing.
私は歌えます。
💃 I can dance.
私は踊れます。
🎨 I can draw.
私は絵が描けます。
🎤 Can you sing well?
上手に歌えますか？`
    },
    {
        title: "28. I can Cook",
        content: `🍳 I can cook.
私は料理ができます。
🧼 I can wash.
私は洗えます。
🧹 I can clean.
私は掃除ができます。
🍳 Can you make eggs?
卵料理を作れますか？`
    },
    {
        title: "29. I can Play",
        content: `🎹 I can play the piano.
私はピアノが弾けます。
🎸 I can play the guitar.
私はギターが弾けます。
🥁 I can play the drums.
私はドラムが叩けます。
🎹 Can you play the piano?
ピアノを弾けますか？`
    },
    {
        title: "30. I can Speak",
        content: `🗣️ I can speak English.
私は英語を話せます。
🗣️ I can speak Japanese.
私は日本語を話せます。
✍️ I can write.
私は書けます。
🗣️ Can you speak English?
英語を話せますか？`
    },
    {
        title: "31. I can Count",
        content: `1️⃣ I can count to ten.
私は10まで数えられます。
📕 I can read a book.
私は本を読めます。
🏫 I can go to school.
私は学校に行けます。
1️⃣ Can you count?
数えられますか？`
    },
    {
        title: "32. I can See",
        content: `👀 I can see a bird.
鳥が見えます。
👂 I can hear a car.
車の音が聞こえます。
👃 I can smell flowers.
花の匂いがします。
👀 What can you see?
何が見えますか？`
    },

    // --- PATTERN: THIS IS (33-40) ---
    {
        title: "33. This is Me",
        content: `🧑 This is me.
これが私です。
👨 This is my father.
これは私の父です。
👩 This is my mother.
これは私の母です。
🧑 Who is this?
これは誰ですか？`
    },
    {
        title: "34. This is a Pen",
        content: `🖊️ This is a pen.
これはペンです。
🍎 This is an apple.
これはリンゴです。
🥚 This is an egg.
これはタマゴです。
🍎 Is this an apple?
これはリンゴですか？`
    },
    {
        title: "35. This is My Room",
        content: `🏠 This is my house.
これは私の家です。
🚪 This is my room.
これは私の部屋です。
🛏️ This is my bed.
これは私のベッドです。
🏠 Is your house big?
あなたの家は大きいですか？`
    },
    {
        title: "36. This is My School",
        content: `🏫 This is my school.
これは私の学校です。
👨‍🏫 This is my teacher.
これは私の先生です。
🤝 This is my friend.
これは私の友達です。
👨‍🏫 Do you like your teacher?
先生は好きですか？`
    },
    {
        title: "37. That is...",
        content: `👉 That is a bus.
あれはバスです。
✈️ That is a plane.
あれは飛行機です。
🌛 That is the moon.
あれは月です。
👉 What is that?
あれは何ですか？`
    },
    {
        title: "38. These are...",
        content: `👟 These are my shoes.
これらは私の靴です。
🧦 These are my socks.
これらは私の靴下です。
👀 These are my eyes.
これらは私の目です。
👟 Are these new?
これらは新しいですか？`
    },
    {
        title: "39. Time",
        content: `⌚ It is three o'clock.
3時です。
🕖 It is seven o'clock.
7時です。
🍱 It is lunch time.
お昼の時間です。
⌚ What time is it?
何時ですか？`
    },
    {
        title: "40. Days",
        content: `📅 It is Monday.
月曜日です。
📅 It is Sunday.
日曜日です。
🎂 It is my birthday.
私の誕生日です。
📅 Is it Sunday today?
今日は日曜日ですか？`
    },

    // --- PATTERN: ACTIONS & FEELINGS (41-48) ---
    {
        title: "41. I am Happy",
        content: `😄 I am happy.
私は幸せです。
😢 I am sad.
私は悲しいです。
😠 I am angry.
私は怒っています。
😄 Are you happy?
あなたは幸せですか？`
    },
    {
        title: "42. I am Hungry",
        content: `😋 I am hungry.
私はお腹が空いています。
🥤 I am thirsty.
私は喉が乾いています。
😴 I am sleepy.
私は眠いです。
😋 Are you hungry?
お腹が空いていますか？`
    },
    {
        title: "43. Let's Eat",
        content: `🙏 Let's eat.
食べましょう（いただきます）。
🏃 Let's go.
行きましょう。
🎮 Let's play.
遊びましょう。
🙏 Do you say "Let's eat"?
「いただきます」と言いますか？`
    },
    {
        title: "44. Wake Up",
        content: `☀️ Wake up.
起きなさい。
👕 Get dressed.
着替えなさい。
🍞 Eat breakfast.
朝ごはんを食べなさい。
☀️ What time do you wake up?
何時に起きますか？`
    },
    {
        title: "45. Go to School",
        content: `🎒 Go to school.
学校に行きなさい。
📚 Study hard.
一生懸命勉強しなさい。
👋 Come home.
帰っておいで。
📚 Do you study?
勉強しますか？`
    },
    {
        title: "46. Be Nice",
        content: `😊 Be nice.
優しくしなさい。
🤐 Be quiet.
静かにしなさい。
⚠️ Be careful.
気をつけなさい。
😊 Are you nice?
あなたは優しいですか？`
    },
    {
        title: "47. Please",
        content: `🚪 Open the door, please.
ドアを開けてください。
🪑 Sit down, please.
座ってください。
🕴️ Stand up, please.
立ってください。
🪑 Can you sit down?
座れますか？`
    },
    {
        title: "48. Thank you",
        content: `🎁 Here you are.
はい、どうぞ。
🙏 Thank you.
ありがとう。
😊 You are welcome.
どういたしまして。
🎁 Do you like presents?
プレゼントは好きですか？`
    }
];
