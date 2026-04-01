#!/usr/bin/env node
/**
 * Generate Tony & Jay Stories for today.
 * Creates stories-tony-jay-YYYY-MM-DD.js with 9 hilarious stories (one per level).
 * Format: 10-25 sentences, English + Japanese, no questions.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get today's date
const today = new Date();
const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
const dateVar = dateStr.replace(/-/g, ''); // YYYYMMDD

// Levels in order
const levels = ['7', '6', '5', '4', '3', 'Pre-2', 'Pre-2Plus', '2', 'Pre-1', '1'];

// Sample stories (replace with AI-generated content in production)
const sampleStories = {
  '7': {
    title: 'Grade 7: The Confused Cat',
    content: `🐱 The cat is very confused today.
猫は今日とても混乱しています。
😲 It sees a bird on the TV screen.
テレビ画面に鳥が見えます。
🤔 The cat tries to catch the bird.
猫は鳥を捕まえようとします。
😿 But the bird is not real.
でも鳥は本物ではありません。
😸 The cat falls off the sofa.
猫はソファから落ちます。
😹 Now the cat is angry.
今、猫は怒っています。
🐾 It runs around the room.
部屋の中を走り回ります。
😴 Finally, the cat is tired.
ついに、猫は疲れました。
😺 It sleeps on the floor.
床で寝ています。
🎉 The cat is happy again.
猫はまた幸せです。`
  },
  '6': {
    title: 'Grade 6: The Pizza Robot',
    content: `🤖 The robot loves pizza.
ロボットはピザが大好きです。
🍕 It eats pizza every day.
毎日ピザを食べます。
😋 The robot is very happy.
ロボットはとても幸せです。
🔧 But one day, the robot breaks.
でもある日、ロボットが壊れます。
😢 It cannot eat pizza anymore.
もうピザを食べられません。
👨‍🔧 A mechanic fixes the robot.
整備士がロボットを直します。
🎉 The robot works again!
ロボットはまた動きます！
🍕 Now it eats more pizza.
今、もっとピザを食べます。
😸 The robot is the happiest!
ロボットは一番幸せです！`
  },
  '5': {
    title: 'Grade 5: The Dog with Sunglasses',
    content: `🐶 The dog wears sunglasses.
犬はサングラスをかけています。
😎 It looks very cool.
とてもクールに見えます。
🌞 The dog walks in the park.
公園を歩きます。
👀 Everyone looks at the dog.
みんなが犬を見ています。
😂 The dog is very proud.
犬はとても誇りに思っています。
🎾 It plays with a ball.
ボールで遊びます。
🏃‍♂️ The dog runs very fast.
犬はとても速く走ります。
💦 It is tired but happy.
疲れていますが幸せです。
🏠 The dog goes home.
家に帰ります。
😴 It sleeps with sunglasses.
サングラスをかけたまま寝ます。`
  },
  '4': {
    title: 'Grade 4: The Hamster\'s Big Adventure',
    content: `🐹 The hamster wants to explore.
ハムスターは探検したいです。
🏠 It escapes from its cage.
ケージから逃げます。
🌿 It runs in the garden.
庭を走ります。
🌸 The hamster sees flowers.
花を見ます。
🦋 A butterfly flies by.
蝶が飛んできます。
🐾 The hamster chases the butterfly.
蝶を追いかけます。
😰 But it gets lost.
でも迷子になります。
😢 The hamster is scared.
怖がっています。
👨‍👩‍👧 A child finds the hamster.
子供がハムスターを見つけます。
🏠 The hamster goes home safely.
安全に家に帰ります。`
  },
  '3': {
    title: 'Grade 3: The Parrot Who Loves Karaoke',
    content: `🦜 The parrot loves singing.
オウムは歌うのが大好きです。
🎤 It sings karaoke every night.
毎晩カラオケを歌います。
🎶 The parrot has a beautiful voice.
美しい声を持っています。
👏 Everyone claps for the parrot.
みんなが拍手します。
😸 The parrot is very proud.
とても誇りに思っています。
🎵 It sings louder and louder.
もっと大きな声で歌います。
😰 But the neighbors are angry.
でも近所の人は怒っています。
🔇 They tell the parrot to stop.
歌うのをやめるように言います。
😢 The parrot is sad.
悲しいです。
🤫 Now it sings quietly.
今は静かに歌います。`
  },
  'Pre-2': {
    title: 'Pre-2: The Turtle Who Wanted to Fly',
    content: `🐢 The turtle watches birds fly.
カメは鳥が飛ぶのを見ています。
🌤️ It wishes it could fly too.
自分も飛べたらいいなと思っています。
🪂 The turtle makes a parachute.
パラシュートを作ります。
🌳 It climbs a tall tree.
高い木に登ります。
😰 The turtle is very scared.
とても怖がっています。
🪂 It jumps from the tree!
木から飛び降ります！
🌬️ The wind blows the turtle.
風がカメを吹きます。
😲 The turtle flies for a moment!
一瞬、飛びます！
💥 But it falls into a pond.
でも池に落ちます。
🐸 The turtle is happy to be alive.
生きていて幸せです。`
  },
  'Pre-2Plus': {
    title: 'Pre-2 Plus: The Squirrel Who Forgot Where It Hid Nuts',
    content: `🐿️ The squirrel collects nuts.
リスは木の実を集めます。
🌰 It hides them in many places.
いろいろな場所に隠します。
🌳 Under the tree, in the grass, and in the hole.
木の下、草の中、穴の中に。
😴 The squirrel sleeps all winter.
冬の間ずっと寝ます。
🌸 Spring comes, and the squirrel wakes up.
春が来て、リスは目覚めます。
😰 It is very hungry.
とてもお腹が空いています。
🌰 The squirrel looks for its nuts.
木の実を探します。
🤔 But it cannot remember where they are!
でもどこに隠したか思い出せません！
😢 The squirrel is sad.
悲しいです。
🌱 But it finds new nuts in the spring.
でも春に新しい木の実を見つけます。`
  },
  '2': {
    title: 'Grade 2: The Owl Who Was Afraid of the Dark',
    content: `🦉 The owl is afraid of the dark.
フクロウは暗闇が怖いです。
🌙 But owls are supposed to be nocturnal!
でもフクロウは夜行性のはずです！
😰 The owl hides in its nest during the night.
夜は巣に隠れています。
🌞 It only comes out during the day.
昼間だけ出てきます。
🐿️ Other animals make fun of the owl.
他の動物はフクロウを笑います。
😢 The owl is very sad.
とても悲しいです。
🦉 One night, the owl sees a beautiful starry sky.
ある夜、美しい星空を見ます。
✨ It is amazed!
感動します！
🌙 The owl realizes the dark is beautiful.
暗闇は美しいと気づきます。
🦉 Now the owl loves the night!
今、夜が大好きです！`
  },
  'Pre-1': {
    title: 'Pre-1: The Cat Who Thought It Was a Dog',
    content: `🐱 The cat grew up with dogs.
猫は犬と一緒に育ちました。
🐕 It learned to bark like a dog.
犬のように吠えることを学びました。
🦴 It loves to play fetch.
ボール遊びが大好きです。
🐾 The cat wags its tail when happy.
幸せな時、尻尾を振ります。
😸 Other cats are confused.
他の猫は混乱しています。
🤔 "Why does this cat bark?" they ask.
「なぜこの猫は吠えるの？」と聞きます。
😂 The cat doesn't understand.
猫は理解していません。
🐕 It thinks it is a dog!
自分は犬だと思っています！
🏠 One day, the cat sees a mirror.
ある日、鏡を見ます。
😲 "I am a cat!" it realizes.
「私は猫だ！」と気づきます。
😸 Now the cat is happy to be itself.
今、自分自身で幸せです。`
  },
  '1': {
    title: 'Grade 1: The Philosophical Goldfish',
    content: `🐠 The goldfish lives in a small bowl.
金魚は小さなボウルに住んでいます。
🤔 It thinks about the meaning of life.
人生の意味について考えています。
🌊 "Is this all there is?" it wonders.
「これだけなの？」と疑問に思います。
🐠 The goldfish watches the world go by.
世界が過ぎ去るのを見ています。
👨‍👩‍👧 People feed it every day.
毎日餌をくれます。
😊 The goldfish is grateful.
感謝しています。
🌊 But it dreams of the ocean.
でも海を夢見ています。
🌊 "What lies beyond the glass?" it asks.
「ガラスの向こうには何があるの？」と聞きます。
🤔 The goldfish ponders existence.
存在について考えます。
🐠 It finds peace in its small world.
小さな世界に平和を見つけます。`
  }
};

// Build the JavaScript file content
let jsContent = `var storiesTonyJay${dateVar} = [\n`;

for (const level of levels) {
  const story = sampleStories[level];
  if (story) {
    jsContent += `  {\n`;
    jsContent += `    title: "${story.title}",\n`;
    jsContent += `    content: \`${story.content}\`\n`;
    jsContent += `  },\n`;
  }
}

jsContent += `];\n`;

// Write the file
const filePath = path.join(__dirname, `stories-tony-jay-${dateStr}.js`);
fs.writeFileSync(filePath, jsContent, 'utf8');

console.log(`✅ Created ${filePath} with ${levels.length} stories`);

// Validate syntax
try {
  execSync(`node -c ${filePath}`, { stdio: 'inherit' });
  console.log('✅ Syntax validation passed');
} catch (error) {
  console.error('❌ Syntax validation failed:', error);
  process.exit(1);
}
