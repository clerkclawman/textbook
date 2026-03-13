const fs = require('fs');
const path = require('path');

// Generate 50 fun questions for tomorrow (2026-03-13)
const date = '2026-03-13';
const filename = `fun-questions-${date}.js`;

const questions = [
  // N7 (A1 - Very Basic)
  { level: 'N7', emoji: '🍎', type: 'serious', en: 'What is your favorite color? Why?', jp: '好きな色は何ですか？なぜですか？' },
  { level: 'N7', emoji: '🐶', type: 'silly', en: 'If your dog could talk, what would it say?', jp: 'もし犬が話せたら、何と言いますか？' },
  { level: 'N7', emoji: '🌞', type: 'serious', en: 'Do you like sunny days or rainy days?', jp: '晴れた日が好きですか、雨の日が好きですか？' },
  { level: 'N7', emoji: '🍦', type: 'silly', en: 'If ice cream was hot, would you eat it?', jp: 'アイスクリームが熱かったら、食べますか？' },
  { level: 'N7', emoji: '🏫', type: 'serious', en: 'What is your favorite subject at school?', jp: '学校で好きな教科は何ですか？' },
  { level: 'N7', emoji: '🦖', type: 'silly', en: 'If a dinosaur came to school, would you run?', jp: '恐竜が学校に来たら、走って逃げますか？' },
  { level: 'N7', emoji: '🎨', type: 'serious', en: 'Do you like to draw pictures?', jp: '絵を描くのは好きですか？' },
  { level: 'N7', emoji: '🚗', type: 'silly', en: 'If your toy car could fly, where would it go?', jp: 'おもちゃの車が空を飛べたら、どこへいきますか？' },
  { level: 'N7', emoji: '🐱', type: 'serious', en: 'Do you have a cat or a dog?', jp: '猫か犬を飼っていますか？' },
  { level: 'N7', emoji: '🍕', type: 'silly', en: 'If you ate pizza for breakfast, would you be happy?', jp: '朝食にピザを食べたら、幸せになりますか？' },
  // N6 (A1+ - Simple Sentences)
  { level: 'N6', emoji: '🌧️', type: 'serious', en: 'What do you do when it rains?', jp: '雨が降ったら、何をするのが好きですか？' },
  { level: 'N6', emoji: '🦸', type: 'silly', en: 'If you had a superpower, what would it be?', jp: 'スーパーパワーを持てたら、何にしますか？' },
  { level: 'N6', emoji: '🎵', type: 'serious', en: 'Do you like to sing songs?', jp: '歌を歌うのは好きですか？' },
  { level: 'N6', emoji: '🍔', type: 'silly', en: 'If you could only eat burgers, would you be sad?', jp: 'ハンバーガーしか食べられなかったら、悲しくなりますか？' },
  { level: 'N6', emoji: '🏠', type: 'serious', en: 'What is your favorite room in your house?', jp: '家の中で一番好きな部屋はどこですか？' },
  { level: 'N6', emoji: '🚀', type: 'silly', en: 'If you went to space, what would you bring?', jp: '宇宙に行ったら、何を持っていきますか？' },
  { level: 'N6', emoji: '📚', type: 'serious', en: 'What is a book you like to read?', jp: '読んで好きな本は何ですか？' },
  { level: 'N6', emoji: '🐸', type: 'silly', en: 'If you were a frog, where would you jump?', jp: 'カエルになったら、どこへ飛びますか？' },
  { level: 'N6', emoji: '🎬', type: 'serious', en: 'Do you like movies or cartoons?', jp: '映画が好きですか、それともアニメが好きですか？' },
  { level: 'N6', emoji: '🤖', type: 'silly', en: 'If your robot friend cooked dinner, what would it make?', jp: 'ロボットのお友達が夕食を作ったら、何を作りますか？' },
  // N5 (A2 - Descriptive)
  { level: 'N5', emoji: '🌍', type: 'serious', en: 'Where do you want to travel? Why?', jp: 'どこへ旅行に行きたいですか？なぜですか？' },
  { level: 'N5', emoji: '🐉', type: 'silly', en: 'If dragons were real, would you be scared?', jp: 'ドラゴンが本当いたら、怖がりますか？' },
  { level: 'N5', emoji: '🎨', type: 'serious', en: 'What are you good at?', jp: '得意なことは何ですか？' },
  { level: 'N5', emoji: '🍩', type: 'silly', en: 'If you found a magic donut, what would you do?', jp: '魔法のドーナツを見つけたら、何しますか？' },
  { level: 'N5', emoji: '🏆', type: 'serious', en: 'What is your goal for this year?', jp: '今年の目標は何ですか？' },
  { level: 'N5', emoji: '🦁', type: 'silly', en: 'If you were a lion, what would you eat?', jp: 'ライオンになったら、何を食べますか？' },
  { level: 'N5', emoji: '🌟', type: 'serious', en: 'Who is your hero?', jp: 'あなたのヒーローは誰ですか？' },
  { level: 'N5', emoji: '🍜', type: 'silly', en: 'If you made a new ramen flavor, what is in it?', jp: '新しいラーメンの味を作ったら、何を入れますか？' },
  { level: 'N5', emoji: '🏫', type: 'serious', en: 'What is the best thing about your school?', jp: 'あなたの学校の一番良いところはどこですか？' },
  { level: 'N5', emoji: '👻', type: 'silly', en: 'If you saw a ghost, would you say hello?', jp: 'おばけを見たら、こんにちはと言いますか？' },
  // N4 (A2 - Opinions)
  { level: 'N4', emoji: '🌱', type: 'serious', en: 'Why is nature important?', jp: 'なぜ自然は重要だと思いますか？' },
  { level: 'N4', emoji: '🦄', type: 'silly', en: 'Where do unicorns hide?', jp: 'ユニコーンはどこに隠れていると思いますか？' },
  { level: 'N4', emoji: '📱', type: 'serious', en: 'Do kids need smartphones?', jp: '子供はスマートフォンが必要だと思いますか？' },
  { level: 'N4', emoji: '🍕', type: 'silly', en: 'If you ate pizza for a month, what would you miss?', jp: '一ヶ月ピザを食べたら、何が恋しくなりますか？' },
  { level: 'N4', emoji: '🏥', type: 'serious', en: 'How do doctors help people?', jp: '医師は人々をどう助けていますか？' },
  { level: 'N4', emoji: '🦖', type: 'silly', en: 'How would dinosaurs change our life?', jp: '恐竜は私たちの生活をどう変えますか？' },
  { level: 'N4', emoji: '🎭', type: 'serious', en: 'Why do people like movies?', jp: 'なぜ人々は映画が好きなんですか？' },
  { level: 'N4', emoji: '🍦', type: 'silly', en: 'If ice cream smelled like cheese, would you eat it?', jp: 'アイスクリームがチーズの匂いがしたら、食べますか？' },
  { level: 'N4', emoji: '🌏', type: 'serious', en: 'What can we do to help the world?', jp: '私たちは世界を助けるために何ができますか？' },
  { level: 'N4', emoji: '🤖', type: 'silly', en: 'If robots did all the work, what would we do?', jp: 'ロボットがすべての仕事をしたら、私たちは何をするのですか？' },
  // N3 (A2 - Simple Complex)
  { level: 'N3', emoji: '🌍', type: 'serious', en: 'Should children help with housework? Why?', jp: '子供は家事を手伝うべきですか？なぜですか？' },
  { level: 'N3', emoji: '🚀', type: 'silly', en: 'If you could invent a machine to do your homework, what would it do?', jp: '宿題をしてくれる機械を作れたら、どんなことをしますか？' },
  { level: 'N3', emoji: '🎓', type: 'serious', en: 'What is the best way to learn English?', jp: '英語を学ぶ一番良い方法は何だと思いますか？' },
  { level: 'N3', emoji: '🦸', type: 'silly', en: 'If you had a superpower to make people laugh, what would it be?', jp: '人を笑わせるスーパーパワーを持てたら、何にしますか？' },
  { level: 'N3', emoji: '🌐', type: 'serious', en: 'Is it better to play outside or play video games? Why?', jp: '外で遊ぶのとゲームをするのと、どっちがいいですか？なぜですか？' },
  { level: 'N3', emoji: '🍜', type: 'silly', en: 'If you could only eat one food for a week, what would you choose?', jp: '一週間一つの食べ物しか食べられないとしたら、何を選びますか？' },
  { level: 'N3', emoji: '🏛️', type: 'serious', en: 'Why is it good to learn about other countries?', jp: '他の国のことを学ぶのはなぜ良いですか？' },
  { level: 'N3', emoji: '🐱', type: 'silly', en: 'If cats could talk, what would they complain about?', jp: '猫が話せたら、何について文句を言うと思いますか？' },
  { level: 'N3', emoji: '🌱', type: 'serious', en: 'How can we keep our school clean?', jp: '学校をきれいに保つには、どうすればいいですか？' },
  { level: 'N3', emoji: '🤖', type: 'silly', en: 'If a robot was your best friend, what would you do together?', jp: 'ロボットが親友だったら、一緒に何をしますか？' }
];

let content = `var funQuestions${date.replace(/-/g, '')} = [\n  {\n    title: "Fun Questions of the Day - ${date}",\n    content: \``;

questions.forEach((q, i) => {
  // Put English on one line, Japanese on the next line
  content += `${q.level}. ${q.emoji} ${q.en}\n${q.jp}\n`;
});

content += '`\n  }\n];\n';

fs.writeFileSync(path.join(__dirname, filename), content);
console.log(`Created ${filename} with ${questions.length} questions.`);
