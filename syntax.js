     1|// File: syntax.js
     2|// Target: Syntax drills for pronoun practice
     3|// Structure: Object with stories array for class selector compatibility
     4|
     5|var syntax = {
     6|    stories: [
     7|        {
     8|            title: "Subject Pronouns Drill",
     9|            content: `👦 I eat pizza.
    10|私はピザを食べます。
    11|👧 You kick a ball.
    12|あなたはボールを蹴ります。
    13|👨 He sees a ghost.
    14|彼は幽霊を見ます。
    15|👩 She eats a shoe.
    16|彼女は靴を食べます。
    17|🐶 It chases a cat.
    18|それは猫を追いかけます。
    19|👪 We play soccer.
    20|私たちはサッカーをします。
    21|👥 They read books.
    22|彼らは本を読みます。
    23|📝 I write a letter.
    24|私は手紙を書きます。
    25|🐕 You watch a movie.
    26|あなたは映画を見ます。
    27|⚽ He throws a ball.
    28|彼はボールを投げます。
    29|🐱 She catches a fish.
    30|彼女は魚を捕まえます。
    31|🥤 I drink water.
    32|私は水を飲みます。
    33|🍞 You eat bread.
    34|あなたはパンを食べます。
    35|📺 He watches TV.
    36|彼はテレビを見ています。
    37|🎧 She listens to music.
    38|彼女は音楽を聞いています。
    39|🐇 It jumps over a fence.
    40|それはフェンスを飛び越えます。
    41|🎤 We sing a song.
    42|私たちは歌を歌います。
    43|💃 They dance a dance.
    44|彼らは踊りを踊ります。
    45|🚪 I open a door.
    46|私はドアを開けます。
    47|🪟 You close a window.
    48|あなたは窓を閉じます。
    49|🎁 He gives a gift.
    50|彼はプレゼントをあげます。
    51|📸 She takes a photo.
    52|彼女は写真を撮ります。
    53|🔊 It makes a sound.
    54|それは音を出します。
    55|📚 We do homework.
    56|私たちは宿題をします。
    57|🏠 They go home.
    58|彼らは家に帰ります。
    59|👫 I see a dinosaur.
    60|私は恐竜を見ます。
    61|✏️ You have a pencil.
    62|あなたは鉛筆を持っています。
    63|🥤 He likes milk.
    64|彼は牛乳が好きです。
    65|🎒 She has a bag.
    66|彼女はバッグを持っています。
    67|📏 It breaks a window.
    68|それは窓を壊します。
    69|😊 We love pizza.
    70|私たちはピザが好きです。
    71|🎒 They hate homework.
    72|彼らは宿題が嫌いです。
    73|🔍 I find a treasure.
    74|私は宝物を見つけます。
    75|🔍 You lose a key.
    76|あなたは鍵を失くします。
    77|🔴 He buys a car.
    78|彼は車を買います。
    79|🔵 She sells a house.
    80|彼女は家を売ります。
    81|🏃 I run a race.
    82|私はレースを走ります。
    83|🚶 You walk a dog.
    84|あなたは犬を散歩させます。
    85|⬆️ He climbs a tree.
    86|彼は木を登ります。
    87|🪑 She moves a chair.
    88|彼女は椅子を動かします。
    89|⬆️ It pushes a box.
    90|それは箱を押します。
    91|🍽️ We cook dinner.
    92|私たちは夕食を作ります。
    93|🥛 They drink tea.
    94|彼らはお茶を飲みます。
    95|📖 I read a book.
    96|私は本を読みます。
    97|✏️ You write a story.
    98|あなたは物語を書きます。
    99|🎨 He draws a picture.
   100|彼は絵を描きます。
   101|📘 She paints a wall.
   102|彼女は壁を塗ります。
   103|🚲 It rides a bike.
   104|それは自転車に乗ります。
   105|🧹 We clean a room.
   106|私たちは部屋を掃除します。
   107|🛒 They buy food.
   108|彼らは食べ物を買います。
   109|🌞 I feel the sun.
   110|私は太陽を感じます。
   111|🌧️ You feel the rain.
   112|あなたは雨を感じます。
   113|🌳 He climbs a mountain.
   114|彼は山を登ります。
   115|🎶 She plays music.
   116|彼女は音楽を演奏します。
   117|💡 It lights a room.
   118|それは部屋を照らします。
   119|🤝 We help a friend.
   120|私たちは友達を助けます。
   121|🌍 They visit a planet.
   122|彼らは惑星を訪れます。`
   123|        },
   124|        {
   125|            title: "Object Pronouns Drill",
   126|            content: `👦 John sees me.
   127|ジョンは私を見ます。
   128|👧 Mary helps you.
   129|メアリーはあなたを助けます。
   130|👨 Tom likes him.
   131|トムは彼が好きです。
   132|👩 Lisa knows her.
   133|リサは彼女を知っています。
   134|👪 The teacher invites us.
   135|先生は私たちを招待します。
   136|👥 My friends watch them.
   137|私の友達は彼らを見ています。
   138|📝 Dad calls me.
   139|パパは私に電話します。
   140|🐕 Mom feeds you.
   141|ママはあなたに餌をやります。
   142|⚽ Ken hits him.
   143|ケンは彼を叩きます。
   144|🐱 Yumi loves her.
   145|ユミちゃんは彼女を愛しています。
   146|🥤 Bob finds us.
   147|ボブは私たちを見つけます。
   148|🍞 Anna follows them.
   149|アンナは彼らについていきます。
   150|📺 Mike watches me.
   151|マイクは私を見ています。
   152|🎧 Sarah hears you.
   153|サラはあなたの声を聞きます。
   154|🐇 The dog chases him.
   155|犬は彼を追いかけます。
   156|🎤 The band loves us.
   157|バンドは私たちを愛しています。
   158|💃 The team chooses them.
   159|チームは彼らを選びます。
   160|🚪 Dad opens it.
   161|パパはそれを開けます。
   162|🪟 Mom closes it.
   163|ママはそれを閉じます。
   164|🎁 Grandpa holds it.
   165|おじいちゃんはそれを持っています。
   166|📸 Grandma takes it.
   167|おばあちゃんはそれを取ります。
   168|🔊 The cat follows us.
   169|猫は私たちについてきます。
   170|📚 The students need them.
   171|学生はそれらが必要です。
   172|🏠 The family wants you.
   173|家族はあなたを望んでいます。
   174|👦 A ghost scares me.
   175|幽霊は私を怖がらせます。
   176|👧 A robot helps you.
   177|ロボットはあなたを助けます。
   178|👨 A dinosaur eats him.
   179|恐竜は彼を食べます。
   180|👩 An alien visits her.
   181|エイリアンは彼女を訪れます。
   182|👪 A monster chases us.
   183|怪物は私たちを追いかけます。
   184|👥 A dragon watches them.
   185|ドラゴンは彼らを見ています。
   186|📝 A monkey throws me.
   187|猿は私を投げます。
   188|🐕 A bear hugs you.
   189|熊はあなたを抱きしめます。
   190|⚽ A lion kicks him.
   191|ライオンは彼を蹴ります。
   192|🐱 A tiger bites her.
   193|トラは彼女を噛みます。
   194|🥤 A snake catches us.
   195|蛇は私たちを捕まえます。
   196|🍞 A bird follows them.
   197|鳥は彼らについていきます。
   198|📺 A fish watches me.
   199|魚は私を見ています。
   200|🎧 A frog hears you.
   201|カエルはあなたの声を聞きます。
   202|🐇 A pig chases him.
   203|豚は彼を追いかけます。
   204|🎤 A cow loves us.
   205|牛は私たちを愛しています。
   206|💃 A sheep chooses them.
   207|羊は彼らを選びます。
   208|🚪 A fly opens it.
   209|ハエはそれを開けます。
   210|🪟 A bee closes it.
   211|蜂はそれを閉じます。
   212|🎁 An ant holds it.
   213|アリはそれを持っています。
   214|📸 A spider takes it.
   215|クモはそれを取ります。
   216|🔊 A worm follows us.
   217|ミミズは私たちについてきます。
   218|📚 A beetle needs them.
   219|甲虫はそれらが必要です。
   220|🏠 A butterfly wants you.
   221|蝶はあなたを望んでいます。`
   222|        },
   223|        {
   224|            title: "Mixed Pronouns Drill",
   225|            content: `👦 I see you.
   226|私はあなたを見ます。
   227|👧 You like him.
   228|あなたは彼が好きです。
   229|👨 He helps her.
   230|彼は彼女を助けます。
   231|👩 She knows them.
   232|彼女は彼らを知っています。
   233|👪 We see us.
   234|私たちは私たちを見ます。
   235|👥 They thank you.
   236|彼らはあなたに感謝します。
   237|📝 This pleases me.
   238|これは私を喜ばせます。
   239|🐕 That annoys you.
   240|それはあなたを苛立たせます。
   241|⚽ These excite us.
   242|これらは私たちを興奮させます。
   243|🐱 Those bore them.
   244|それらは彼らを退屈させます。
   245|🥤 I call you.
   246|私はあなたに電話します。
   247|🍞 You help me.
   248|あなたは私を助けます。
   249|📺 He finds it.
   250|彼はそれを見つけます。
   251|🎧 She hears us.
   252|彼女は私たちを聞きます。
   253|🐇 It follows me.
   254|それは私についてきます。
   255|🎤 We watch you.
   256|私たちはあなたを見ています。
   257|💃 They invite us.
   258|彼らは私たちを招待します。
   259|🚪 I open it.
   260|私はそれを開けます。
   261|🪟 You close it.
   262|あなたはそれを閉じます。
   263|🎁 He gives it.
   264|彼はそれをあげます。
   265|📸 She takes it.
   266|彼女はそれを取ります。
   267|🔊 It annoys you.
   268|それはあなたを苛立たせます。
   269|📚 We teach them.
   270|私たちは彼らに教えます。
   271|🏠 They call us.
   272|彼らは私たちに電話します。
   273|👫 I kiss you.
   274|私はあなたにキスします。
   275|✏️ You hug me.
   276|あなたは私を抱きしめます。
   277|🥤 He bites her.
   278|彼は彼女を噛みます。
   279|🎒 She kicks him.
   280|彼女は彼を蹴ります。
   281|📏 It chases us.
   282|それは私たちを追いかけます。
   283|😊 We scare them.
   284|私たちは彼らを怖がらせます。
   285|🎒 They love you.
   286|彼らはあなたを愛しています。
   287|🔍 I tickle you.
   288|私はあなたをくすぐります。
   289|🔍 You pinch me.
   290|あなたは私をつねります。
   291|🔴 He pokes it.
   292|彼はそれをつつきます。
   293|🔵 She pulls us.
   294|彼女は私たちを引っ張ります。
   295|🏃 It pushes me.
   296|それは私を押します。
   297|🚶 You catch us.
   298|あなたは私たちを捕まえます。
   299|⬆️ He throws them.
   300|彼は彼らを投げます。
   301|🪑 She hits us.
   302|彼女は私たちを叩きます。
   303|⬆️ It kicks you.
   304|それはあなたを蹴ります。
   305|🍽️ We chase them.
   306|私たちは彼らを追いかけます。
   307|🥛 They scare us.
   308|彼らは私たちを怖がらせます。
   309|📖 I love you.
   310|私はあなたを愛しています。
   311|✏️ You hate me.
   312|あなたは私が嫌いです。
   313|🎨 He likes it.
   314|彼はそれが好きです。
   315|📘 She wants us.
   316|彼女は私たちを望んでいます。
   317|🚲 It needs you.
   318|それはあなたを必要としています。
   319|🧹 We help them.
   320|私たちは彼らを助けます。
   321|🛒 They watch us.
   322|彼らは私たちを見ています。
   323|🌞 I see you.
   324|私はあなたを見ます。
   325|🌧️ You hear me.
   326|あなたは私の声を聞きます。
   327|🌳 He knows us.
   328|彼は私たちを知っています。
   329|🎶 She likes them.
   330|彼女は彼らが好きです。
   331|💡 It wants you.
   332|それはあなたを望んでいます。
   333|🤝 We help you.
   334|私たちはあなたを助けます。
   335|🌍 They see us.
   336|彼らは私たちを見ています。`
   337|        },
        {
            title: "Singular and Plural Nouns Drill",
            content: `🐱 A cat eats a pizza.
猫はピザを食べます。
🐱 Two cats eat pizzas.
2匹の猫がピザを食べます。
🐶 A dog chases a ghost.
犬は幽霊を追いかけます。
🐶 Three dogs chase ghosts.
3匹の犬が幽霊を追いかけます。
🐦 A bird finds a treasure.
鳥は宝物を見つけます。
🐦 Four birds find treasures.
4羽の鳥が宝物を見つけます。
🐟 A fish catches a robot.
魚はロボットを捕まえます。
🐟 Five fish catch robots.
5匹の魚がロボットを捕まえます。
🐰 A rabbit eats a shoe.
ウサギは靴を食べます。
🐰 Six rabbits eat shoes.
6匹のウサギが靴を食べます。
🐴 A horse pulls a spaceship.
馬は宇宙船を引きます。
🐴 Seven horses pull spaceships.
7頭の馬が宇宙船を引きます。
🐄 A cow gives milk.
牛はミルクを出します。
🐄 Eight cows give milk.
8頭の牛がミルクを出します。
🐷 A pig digs a hole.
豚は穴を掘ります。
🐷 Nine pigs dig holes.
9頭の豚が穴を掘ります。
🐑 A sheep eats grass.
羊は草を食べます。
🐑 Ten sheep eat grass.
10頭の羊が草を食べます。
🐔 A chicken lays an egg.
鶏は卵を産みます。
🐔 Eleven chickens lay eggs.
11羽の鶏が卵を産みます。
📚 A student reads a book.
学生は本を読みます。
📚 Two students read books.
2人の学生が本を読みます。
✏️ A teacher writes a letter.
先生は手紙を書きます。
✏️ Three teachers write letters.
3人の先生が手紙を書きます。
🎨 An artist paints a picture.
芸術家は絵を描きます。
🎨 Four artists paint pictures.
4人の芸術家が絵を描きます。
📘 A writer writes a story.
作家は物語を書きます。
📘 Five writers write stories.
5人の作家が物語を書きます。
🚲 A bike rides a dog.
自転車は犬に乗ります。
🚲 Six bikes ride dogs.
6台の自転車が犬に乗ります。
🧹 A cleaner cleans a room.
掃除員は部屋を掃除します。
🧹 Seven cleaners clean rooms.
7人の掃除員が部屋を掃除します。
🛒 A shopper buys a car.
買い物客は車を買います。
🛒 Eight shoppers buy cars.
8人の買い物客が車を買います。
🌞 The sun warms ice cream.
太陽はアイスクリームを温めます。
🌞 Nine suns warm ice creams.
9つの太陽がアイスクリームを温めます。
🌧️ The rain waters a flower.
雨は花に水をやります。
🌧️ Ten rains water flowers.
10の雨が花に水をやります。
🌳 A tree grows an apple.
木はリンゴを育てます。
🌳 Eleven trees grow apples.
11本の木がリンゴを育てます。
🎶 A band plays music.
バンドは音楽を演奏します。
🎶 Twelve bands play music.
12のバンドが音楽を演奏します。
💡 A lamp lights a cave.
ランプは洞窟を照らします。
💡 Thirteen lamps light caves.
13のランプが洞窟を照らします。
🤝 A team helps a robot.
チームはロボットを助けます。
🤝 Fourteen teams help robots.
14のチームがロボットを助けます。
🌍 The world watches a bear.
世界は熊を見ています。
🌍 Fifteen worlds watch bears.
15の世界が熊を見ています。`
        },
   501|        {
   502|            title: "Article Pairs Drill",
   503|            content: `🐱 I see a cat. The cat runs.
   504|私は猫を見ます。その猫は走ります。
   505|🐶 You find a dog. The dog barks.
   506|あなたは犬を見つけます。その犬は吠えます。
   507|🐦 He watches a bird. The bird flies.
   508|彼は鳥を見ています。その鳥は飛びます。
   509|🐟 She catches a fish. The fish swims.
   510|彼女は魚を捕まえます。その魚は泳ぎます。
   511|🐰 It chases a rabbit. The rabbit jumps.
   512|それはウサギを追いかけます。そのウサギは跳びます。
   513|🐴 We see a horse. The horse eats grass.
   514|私たちは馬を見ます。その馬は草を食べます。
   515|🐄 They find a cow. The cow gives milk.
   516|彼らは牛を見つけます。その牛はミルクを出します。
   517|🐷 I feed a pig. The pig digs a hole.
   518|私は豚に餌をやります。その豚は穴を掘ります。
   519|🐑 You watch a sheep. The sheep stands on the hill.
   520|あなたは羊を見ています。その羊は丘の上に立っています。
   521|🐔 He sees a chicken. The chicken lays an egg.
   522|彼は鶏を見ます。その鶏は卵を産みます。
   523|📚 She reads a book. The book has pictures.
   524|彼女は本を読みます。その本には絵があります。
   525|✏️ I use a pencil. The pencil writes well.
   526|私は鉛筆を使います。その鉛筆はよく書けます。
   527|🖊️ You hold a pen. The pen has blue ink.
   528|あなたはペンを持ちます。そのペンは青いインクです。
   529|🧹 He finds a broom. The broom cleans the floor.
   530|彼はほうきを見つけます。そのほうきは床を掃除します。
   531|🪑 She sits on a chair. The chair is comfortable.
   532|彼女は椅子に座ります。その椅子は快適です。
   533|🎒 I carry a bag. The bag holds books.
   534|私はカバンを持ちます。そのカバンは本を入れます。
   535|🍎 You eat an apple. The apple is sweet.
   536|あなたはリンゴを食べます。そのリンゴは甘いです。
   537|🍊 He peels an orange. The orange tastes good.
   538|彼はオレンジの皮をむきます。そのオレンジは美味しいです。
   539|🍌 She eats a banana. The banana is yellow.
   540|彼女はバナナを食べます。そのバナナは黄色いです。
   541|🍞 I buy some bread. The bread is fresh.
   542|私はパンを買います。そのパンは新鮮です。
   543|🥚 You break an egg. The egg falls on the floor.
   544|あなたは卵を割ります。その卵は床に落ちます。
   545|🧁 He bakes a cake. The cake smells good.
   546|彼はケーキを焼きます。そのケーキはいい匂いがします。
   547|🍪 She eats a cookie. The cookie is chocolate.
   548|彼女はクッキーを食べます。そのクッキーはチョコレートです。
   549|🌳 I plant a tree. The tree grows tall.
   550|私は木を植えます。その木は高く育ちます。
   551|🌸 You pick a flower. The flower is beautiful.
   552|あなたは花を摘みます。その花は美しいです。
   553|☀️ He sees the sun. The sun shines bright.
   554|彼は太陽を見ます。その太陽は明るく輝きます。
   555|🌙 She watches the moon. The moon glows at night.
   556|彼女は月を見ています。その月は夜に輝きます。
   557|⭐ I see a star. The star twinkles in the sky.
   558|私は星を見ます。その星は空で瞬きます。
   559|☁️ You watch a cloud. The cloud floats in the sky.
   560|あなたは雲を見ています。その雲は空に浮かんでいます。
   561|🌧️ He feels the rain. The rain falls from the sky.
   562|彼は雨を感じます。その雨は空から降ります。
   563|❄️ She touches the snow. The snow covers the ground.
   564|彼女は雪に触れます。その雪は地面を覆います。
   565|👦 I see a boy. The boy kicks a ball.
   566|私は男の子を見ます。その男の子はボールを蹴ります。
   567|👧 You watch a girl. The girl holds a doll.
   568|あなたは女の子を見ています。その女の子は人形を持ちます。
   569|👨 He meets a man. The man drives a car.
   570|彼は男性に会います。その男性は車を運転します。
   571|👩 She sees a woman. The woman cooks a meal.
   572|彼女は女性を見ます。その女性は食事を作ります。
   573|👨‍🏫 I know a teacher. The teacher teaches a class.
   574|私は先生を知っています。その先生はクラスを教えます。
   575|👨‍🎓 You help a student. The student learns a lesson.
   576|あなたは学生を助けます。その学生はレッスンを学びます。
   577|👨‍⚕️ He visits a doctor. The doctor treats a patient.
   578|彼は医者を訪ねます。その医者は患者を治療します。
   579|👩‍⚕️ She sees a nurse. The nurse helps a patient.
   580|彼女は看護師を見ます。その看護師は患者を助けます。
   581|🚗 I fix a car. The car runs fast.
   582|私は車を修理します。その車は速く走ります。
   583|🚌 You drive a bus. The bus stops at the station.
   584|あなたはバスを運転します。そのバスは駅で止まります。
   585|🚆 He rides a train. The train moves on the tracks.
   586|彼は電車に乗ります。その電車は線路の上を動きます。
   587|🚲 She rides a bike. The bike goes on the path.
   588|彼女は自転車に乗ります。その自転車は道を走ります。
   589|🏠 I buy a house. The house stands on the street.
   590|私は家を買います。その家は通りの上にあります。
   591|🏢 You see a building. The building touches the sky.
   592|あなたはビルを見ます。そのビルは空に触れています。
   593|🚪 He opens a door. The door leads to a room.
   594|彼はドアを開けます。そのドアは部屋に繋がっています。
   595|🪟 She washes a window. The window shows the view.
   596|彼女は窓を洗います。その窓は景色を見せます。
   597|👁️ I use an eye. The eye sees a bird.
   598|私は目を使います。その目は鳥を見ます。
   599|👂 You listen with an ear. The ear hears a sound.
   600|あなたは耳で聞きます。その耳は音を聞きます。
   601|👃 He smells with a nose. The nose smells a flower.
   602|彼は鼻で匂いを嗅ぎます。その鼻は花の匂いを嗅ぎます。
   603|👄 She opens a mouth. The mouth eats an apple.
   604|彼女は口を開けます。その口はリンゴを食べます。
   605|🤚 I use a hand. The hand holds a pen.
   606|私は手を使います。その手はペンを持ちます。
   607|🦶 You kick with a foot. The foot kicks a ball.
   608|あなたは足で蹴ります。その足はボールを蹴ります。
   609|💪 He lifts with an arm. The arm lifts a box.
   610|彼は腕で持ち上げます。その腕は箱を持ち上げます。
   611|🦵 She pushes with a leg. The leg pushes a door.
   612|彼女は足で押します。その足はドアを押します。`
   613|        },
   614|        {
   615|            title: "To Be - Singular and Plural Drill",
   616|            content: `🐱 The cat is big. The cats are big.
   617|猫は大きいです。猫たちは大きいです。
   618|🐶 The dog is small. The dogs are small.
   619|犬は小さいです。犬たちは小さいです。
   620|🐦 The bird is fast. The birds are fast.
   621|鳥は速いです。鳥たちは速いです。
   622|🐟 The fish is blue. The fish are blue.
   623|魚は青いです。魚たちは青いです。
   624|🐰 The rabbit is cute. The rabbits are cute.
   625|ウサギは可愛いです。ウサギたちは可愛いです。
   626|🐴 The horse is strong. The horses are strong.
   627|馬は強いです。馬たちは強いです。
   628|🐄 The cow is heavy. The cows are heavy.
   629|牛は重いです。牛たちは重いです。
   630|🐷 The pig is dirty. The pigs are dirty.
   631|豚は汚いです。豚たちは汚いです。
   632|🐑 The sheep is white. The sheep are white.
   633|羊は白いです。羊たちは白いです。
   634|🐔 The chicken is yellow. The chickens are yellow.
   635|鶏は黄色いです。鶏たちは黄色いです。
   636|📚 The book is new. The books are new.
   637|本は新しいです。本たちは新しいです。
   638|✏️ The pencil is long. The pencils are long.
   639|鉛筆は長いです。鉛筆たちは長いです。
   640|🖊️ The pen is red. The pens are red.
   641|ペンは赤いです。ペンたちは赤いです。
   642|🧹 The broom is old. The brooms are old.
   643|ほうきは古いです。ほうきたちは古いです。
   644|🪑 The chair is wooden. The chairs are wooden.
   645|椅子は木製です。椅子たちは木製です。
   646|🎒 The bag is heavy. The bags are heavy.
   647|カバンは重いです。カバンたちは重いです。
   648|🍎 The apple is sweet. The apples are sweet.
   649|リンゴは甘いです。リンゴたちは甘いです。
   650|🍊 The orange is sour. The oranges are sour.
   651|オレンジは酸っぱいです。オレンジたちは酸っぱいです。
   652|🍌 The banana is soft. The bananas are soft.
   653|バナナは柔らかいです。バナナたちは柔らかいです。
   654|🍞 The bread is fresh. The bread is fresh.
   655|パンは新鮮です。パンは新鮮です。
   656|🥚 The egg is round. The eggs are round.
   657|卵は丸いです。卵たちは丸いです。
   658|🧁 The cake is delicious. The cakes are delicious.
   659|ケーキは美味しいです。ケーキたちは美味しいです。
   660|🍪 The cookie is crunchy. The cookies are crunchy.
   661|クッキーはサクサクしています。クッキーたちはサクサクしています。
   662|🌳 The tree is tall. The trees are tall.
   663|木は高いです。木たちは高いです。
   664|🌸 The flower is beautiful. The flowers are beautiful.
   665|花は美しいです。花たちは美しいです。
   666|☀️ The sun is bright. The suns are bright.
   667|太陽は明るいです。太陽たちは明るいです。
   668|🌙 The moon is round. The moons are round.
   669|月は丸いです。月たちは丸いです。
   670|⭐ The star is far. The stars are far.
   671|星は遠いです。星たちは遠いです。
   672|☁️ The cloud is white. The clouds are white.
   673|雲は白いです。雲たちは白いです。
   674|🌧️ The rain is cold. The rains are cold.
   675|雨は冷たいです。雨たちは冷たいです。
   676|❄️ The snow is white. The snows are white.
   677|雪は白いです。雪たちは白いです。
   678|👦 The boy is young. The boys are young.
   679|男の子は若いです。男の子たちは若いです。
   680|👧 The girl is tall. The girls are tall.
   681|女の子は背が高いです。女の子たちは背が高いです。
   682|👨 The man is old. The men are old.
   683|男性は年をとっています。男性たちは年をとっています。
   684|👩 The woman is kind. The women are kind.
   685|女性は親切です。女性たちは親切です。
   686|👨‍🏫 The teacher is smart. The teachers are smart.
   687|先生は賢いです。先生たちは賢いです。
   688|👨‍🎓 The student is young. The students are young.
   689|学生は若いです。学生たちは若いです。
   690|👨‍⚕️ The doctor is busy. The doctors are busy.
   691|医者は忙しいです。医者たちは忙しいです。
   692|👩‍⚕️ The nurse is kind. The nurses are kind.
   693|看護師は親切です。看護師たちは親切です。
   694|🚗 The car is fast. The cars are fast.
   695|車は速いです。車たちは速いです。
   696|🚌 The bus is big. The buses are big.
   697|バスは大きいです。バスたちは大きいです。
   698|🚆 The train is long. The trains are long.
   699|電車は長いです。電車たちは長いです。
   700|🚲 The bike is small. The bikes are small.
   701|自転車は小さいです。自転車たちは小さいです。
   702|🏠 The house is big. The houses are big.
   703|家は大きいです。家たちは大きいです。
   704|🏢 The building is tall. The buildings are tall.
   705|ビルは高いです。ビルたちは高いです。
   706|🚪 The door is open. The doors are open.
   707|ドアは開いています。ドアたちは開いています。
   708|🪟 The window is clean. The windows are clean.
   709|窓は綺麗です。窓たちは綺麗です。
   710|👁️ The eye is small. The eyes are small.
   711|目は小さいです。目たちは小さいです。
   712|👂 The ear is round. The ears are round.
   713|耳は丸いです。耳たちは丸いです。
   714|👃 The nose is big. The noses are big.
   715|鼻は大きいです。鼻たちは大きいです。
   716|👄 The mouth is red. The mouths are red.
   717|口は赤いです。口たちは赤いです。
   718|🤚 The hand is strong. The hands are strong.
   719|手は強いです。手たちは強いです。
   720|🦶 The foot is big. The feet are big.
   721|足は大きいです。足たちは大きいです。
   722|💪 The arm is long. The arms are long.
   723|腕は長いです。腕たちは長いです。
   724|🦵 The leg is strong. The legs are strong.
   725|足は強いです。足たちは強いです。`
   726|        },
   727|        {
   728|            title: "It and They Pronoun Drill",
   729|            content: `🐱 The cat is big. It runs fast.
   730|猫は大きいです。それは速く走ります。
   731|🐶 The dog is small. It barks loud.
   732|犬は小さいです。それは大声で吠えます。
   733|🐦 The bird is fast. It flies high.
   734|鳥は速いです。それは高く飛びます。
   735|🐟 The fish is blue. It swims deep.
   736|魚は青いです。それは深く泳ぎます。
   737|🐰 The rabbit is cute. It jumps far.
   738|ウサギは可愛いです。それは遠く跳びます。
   739|🐴 The horse is strong. It pulls hard.
   740|馬は強いです。それは強く引きます。
   741|🐄 The cow is heavy. It gives milk.
   742|牛は重いです。それはミルクを出します。
   743|🐷 The pig is dirty. It digs holes.
   744|豚は汚いです。それは穴を掘ります。
   745|🐑 The sheep is white. It eats grass.
   746|羊は白いです。それは草を食べます。
   747|🐔 The chicken is yellow. It lays eggs.
   748|鶏は黄色いです。それは卵を産みます。
   749|📚 The book is new. It has pictures.
   750|本は新しいです。それは絵があります。
   751|✏️ The pencil is long. It writes well.
   752|鉛筆は長いです。それはよく書けます。
   753|🖊️ The pen is red. It has ink.
   754|ペンは赤いです。それはインクがあります。
   755|🧹 The broom is old. It cleans floors.
   756|ほうきは古いです。それは床を掃除します。
   757|🪑 The chair is wooden. It stands firm.
   758|椅子は木製です。それはしっかり立っています。
   759|🎒 The bag is heavy. It holds books.
   760|カバンは重いです。それは本を入れます。
   761|🍎 The apple is sweet. It tastes good.
   762|リンゴは甘いです。それは美味しいです。
   763|🍊 The orange is sour. It has juice.
   764|オレンジは酸っぱいです。それはジュースがあります。
   765|🍌 The banana is soft. It peels easy.
   766|バナナは柔らかいです。それは簡単に皮がむけます。
   767|🍞 The bread is fresh. It smells good.
   768|パンは新鮮です。それはいい匂いがします。
   769|🥚 The egg is round. It breaks easy.
   770|卵は丸いです。それは簡単に割れます。
   771|🧁 The cake is delicious. It tastes sweet.
   772|ケーキは美味しいです。それは甘い味がします。
   773|🍪 The cookie is crunchy. It melts fast.
   774|クッキーはサクサクしています。それは速く溶けます。
   775|🌳 The tree is tall. It grows slow.
   776|木は高いです。それはゆっくり育ちます。
   777|🌸 The flower is beautiful. It blooms spring.
   778|花は美しいです。それは春に咲きます。
   779|☀️ The sun is bright. It shines day.
   780|太陽は明るいです。それは昼に輝きます。
   781|🌙 The moon is round. It glows night.
   782|月は丸いです。それは夜に輝きます。
   783|⭐ The star is far. It twinkles bright.
   784|星は遠いです。それは明るく瞬きます。
   785|☁️ The cloud is white. It floats high.
   786|雲は白いです。それは高く浮かんでいます。
   787|🌧️ The rain is cold. It falls down.
   788|雨は冷たいです。それは下に降ります。
   789|❄️ The snow is white. It covers ground.
   790|雪は白いです。それは地面を覆います。
   791|👦 The boy is young. He plays soccer.
   792|男の子は若いです。彼はサッカーをします。
   793|👧 The girl is tall. She dances ballet.
   794|女の子は背が高いです。彼女はバレエを踊ります。
   795|👨 The man is old. He works hard.
   796|男性は年をとっています。彼は一生懸命働きます。
   797|👩 The woman is kind. She cooks well.
   798|女性は親切です。彼女はよく料理をします。
   799|👨‍🏫 The teacher is smart. He teaches class.
   800|先生は賢いです。彼はクラスを教えます。
   801|👨‍🎓 The student is young. He studies hard.
   802|学生は若いです。彼は一生懸命勉強します。
   803|👨‍⚕️ The doctor is busy. He treats patients.
   804|医者は忙しいです。彼は患者を治療します。
   805|👩‍⚕️ The nurse is kind. She helps people.
   806|看護師は親切です。彼女は人々を助けます。
   807|🚗 The car is fast. It drives smooth.
   808|車は速いです。それはスムーズに走ります。
   809|🚌 The bus is big. It stops often.
   810|バスは大きいです。それは頻繁に止まります。
   811|🚆 The train is long. It moves fast.
   812|電車は長いです。それは速く動きます。
   813|🚲 The bike is small. It rides easy.
   814|自転車は小さいです。それは簡単に乗れます。
   815|🏠 The house is big. It stands tall.
   816|家は大きいです。それは高く立っています。
   817|🏢 The building is tall. It touches sky.
   818|ビルは高いです。それは空に触れています。
   819|🚪 The door is open. It leads inside.
   820|ドアは開いています。それは中に繋がっています。
   821|🪟 The window is clean. It shows view.
   822|窓は綺麗です。それは景色を見せます。
   823|👁️ The eye is small. It sees clear.
   824|目は小さいです。それははっきり見ます。
   825|👂 The ear is round. It hears well.
   826|耳は丸いです。それはよく聞こえます。
   827|👃 The nose is big. It smells strong.
   828|鼻は大きいです。それは強い匂いがします。
   829|👄 The mouth is red. It eats food.
   830|口は赤いです。それは食べ物を食べます。
   831|🤚 The hand is strong. It holds tight.
   832|手は強いです。それはしっかり持ちます。
   833|🦶 The foot is big. It kicks hard.
   834|足は大きいです。それは強く蹴ります。
   835|💪 The arm is long. It lifts high.
   836|腕は長いです。それは高く持ち上げます。
   837|🦵 The leg is strong. It pushes hard.
   838|足は強いです。それは強く押します。
   839|🐱 The cats are big. They run fast.
   840|猫たちは大きいです。それらは速く走ります。
   841|🐶 The dogs are small. They bark loud.
   842|犬たちは小さいです。それらは大声で吠えます。
   843|🐦 The birds are fast. They fly high.
   844|鳥たちは速いです。それらは高く飛びます。
   845|🐟 The fish are blue. They swim deep.
   846|魚たちは青いです。それらは深く泳ぎます。
   847|🐰 The rabbits are cute. They jump far.
   848|ウサギたちは可愛いです。それらは遠く跳びます。
   849|🐴 The horses are strong. They pull hard.
   850|馬たちは強いです。それらは強く引きます。
   851|🐄 The cows are heavy. They give milk.
   852|牛たちは重いです。それらはミルクを出します。
   853|🐷 The pigs are dirty. They dig holes.
   854|豚たちは汚いです。それらは穴を掘ります。
   855|🐑 The sheep are white. They eat grass.
   856|羊たちは白いです。それらは草を食べます。
   857|🐔 The chickens are yellow. They lay eggs.
   858|鶏たちは黄色いです。それらは卵を産みます。
   859|📚 The books are new. They have pictures.
   860|本たちは新しいです。それらは絵があります。
   861|✏️ The pencils are long. They write well.
   862|鉛筆たちは長いです。それらはよく書けます。
   863|🖊️ The pens are red. They have ink.
   864|ペンたちは赤いです。それらはインクがあります。
   865|🧹 The brooms are old. They clean floors.
   866|ほうきたちは古いです。それらは床を掃除します。
   867|🪑 The chairs are wooden. They stand firm.
   868|椅子たちは木製です。それらはしっかり立っています。
   869|🎒 The bags are heavy. They hold books.
   870|カバンたちは重いです。それらは本を入れます。
   871|🍎 The apples are sweet. They taste good.
   872|リンゴたちは甘いです。それらは美味しいです。
   873|🍊 The oranges are sour. They have juice.
   874|オレンジたちは酸っぱいです。それらはジュースがあります。
   875|🍌 The bananas are soft. They peel easy.
   876|バナナたちは柔らかいです。それらは簡単に皮がむけます。
   877|🍞 The bread is fresh. It smells good.
   878|パンは新鮮です。それはいい匂いがします。
   879|🥚 The eggs are round. They break easy.
   880|卵たちは丸いです。それらは簡単に割れます。
   881|🧁 The cakes are delicious. They taste sweet.
   882|ケーキたちは美味しいです。それらは甘い味がします。
   883|🍪 The cookies are crunchy. They melt fast.
   884|クッキーたちはサクサクしています。それらは速く溶けます。
   885|🌳 The trees are tall. They grow slow.
   886|木たちは高いです。それらはゆっくり育ちます。
   887|🌸 The flowers are beautiful. They bloom spring.
   888|花たちは美しいです。それらは春に咲きます。
   889|☀️ The suns are bright. They shine day.
   890|太陽たちは明るいです。それらは昼に輝きます。
   891|🌙 The moons are round. They glow night.
   892|月たちは丸いです。それらは夜に輝きます。
   893|⭐ The stars are far. They twinkle bright.
   894|星たちは遠いです。それらは明るく瞬きます。
   895|☁️ The clouds are white. They float high.
   896|雲たちは白いです。それらは高く浮かんでいます。
   897|🌧️ The rains are cold. They fall down.
   898|雨たちは冷たいです。それらは下に降ります。
   899|❄️ The snows are white. They cover ground.
   900|雪たちは白いです。それらは地面を覆います。
   901|👦 The boys are young. They play soccer.
   902|男の子たちは若いです。彼らはサッカーをします。
   903|👧 The girls are tall. They dance ballet.
   904|女の子たちは背が高いです。彼女たちはバレエを踊ります。
   905|👨 The men are old. They work hard.
   906|男性たちは年をとっています。彼らは一生懸命働きます。
   907|👩 The women are kind. They cook well.
   908|女性たちは親切です。彼女たちはよく料理をします。
   909|👨‍🏫 The teachers are smart. They teach class.
   910|先生たちは賢いです。彼らはクラスを教えます。
   911|👨‍🎓 The students are young. They study hard.
   912|学生たちは若いです。彼らは一生懸命勉強します。
   913|👨‍⚕️ The doctors are busy. They treat patients.
   914|医者たちは忙しいです。彼らは患者を治療します。
   915|👩‍⚕️ The nurses are kind. They help people.
   916|看護師たちは親切です。彼女たちは人々を助けます。
   917|🚗 The cars are fast. They drive smooth.
   918|車たちは速いです。それらはスムーズに走ります。
   919|🚌 The buses are big. They stop often.
   920|バスたちは大きいです。それらは頻繁に止まります。
   921|🚆 The trains are long. They move fast.
   922|電車たちは長いです。それらは速く動きます。
   923|🚲 The bikes are small. They ride easy.
   924|自転車たちは小さいです。それらは簡単に乗れます。
   925|🏠 The houses are big. They stand tall.
   926|家たちは大きいです。それらは高く立っています。
   927|🏢 The buildings are tall. They touch sky.
   928|ビルたちは高いです。それらは空に触れています。
   929|🚪 The doors are open. They lead inside.
   930|ドアたちは開いています。それらは中に繋がっています。
   931|🪟 The windows are clean. They show view.
   932|窓たちは綺麗です。それらは景色を見せます。
   933|👁️ The eyes are small. They see clear.
   934|目たちは小さいです。それらははっきり見ます。
   935|👂 The ears are round. They hear well.
   936|耳たちは丸いです。それらはよく聞こえます。
   937|👃 The noses are big. They smell strong.
   938|鼻たちは大きいです。それらは強い匂いがします。
   939|👄 The mouths are red. They eat food.
   940|口たちは赤いです。それらは食べ物を食べます。
   941|🤚 The hands are strong. They hold tight.
   942|手たちは強いです。それらはしっかり持ちます。
   943|🦶 The feet are big. They kick hard.
   944|足たちは大きいです。それらは強く蹴ります。
   945|💪 The arms are long. They lift high.
   946|腕たちは長いです。それらは高く持ち上げます。
   947|🦵 The legs are strong. They push hard.
   948|足たちは強いです。それらは強く押します。`
   949|        },
   950|        {
   951|            title: "He and She with To Be Drill",
   952|            content: `👦 Ken is happy. He is not sad.
   953|ケンくんは幸せです。彼は悲しくありません。
   954|👧 Yumi is kind. She is not mean.
   955|ユミちゃんは親切です。彼女は意地悪ではありません。
   956|👨 Takashi is tall. He is not short.
   957|タカシくんは背が高いです。彼は背が低くありません。
   958|👩 Sakura is cute. She is not ugly.
   959|サクラちゃんは可愛いです。彼女は醜くありません。
   960|👨 Hiroshi is young. He is not old.
   961|ヒロシくんは若いです。彼は年をとっていません。
   962|👩 Aiko is wise. She is not foolish.
   963|アイコちゃんは賢明です。彼女は愚かではありません。
   964|👨 Yuji is busy. He is not free.
   965|ユウジくんは忙しいです。彼は自由ではありません。
   966|👩 Emi is relaxed. She is not stressed.
   967|エミちゃんはリラックスしています。彼女はストレスを感じていません。
   968|👨 Masato is hungry. He is not full.
   969|マサトくんはお腹が空いています。彼は満腹ではありません。
   970|👩 Kaori is energetic. She is not tired.
   971|カオリちゃんは元気です。彼女は疲れていません。
   972|👨 Kenji is cold. He is not warm.
   973|ケンジくんは寒いです。彼は暖かくありません。
   974|👩 Mika is gentle. She is not rough.
   975|ミカちゃんは優しいです。彼女は荒くありません。
   976|👨 Taro is rich. He is not poor.
   977|タロウくんは金持ちです。彼は貧しくありません。
   978|👩 Yuki is humble. She is not proud.
   979|ユキちゃんは謙虚です。彼女は傲慢ではありません。
   980|👨 Jiro is healthy. He is not sick.
   981|ジロウくんは健康です。彼は病気ではありません。
   982|👩 Rina is weak. She is not strong.
   983|リナちゃんは弱いです。彼女は強くありません。
   984|👨 Saburo is loud. He is not quiet.
   985|サブロウくんは大声です。彼は静かではありません。
   986|👩 Hana is shy. She is not bold.
   987|ハナちゃんは恥ずかしがり屋です。彼女は大胆ではありません。
   988|👨 Shinji is careful. He is not careless.
   989|シンジくんは慎重です。彼は不注意ではありません。
   990|👩 Moe is clumsy. She is not graceful.
   991|モエちゃんは不器用です。彼女は優雅ではありません。
   992|👨 Daisuke is patient. He is not impatient.
   993|ダイスケくんは忍耐強いです。彼は忍耐がありません。
   994|👨 Yui is nervous. She is not calm.
   995|ユイちゃんは緊張しています。彼女は冷静ではありません。
   996|👨 Kenta is friendly. He is not unfriendly.
   997|ケンタくんは友好的です。彼は不友好的ではありません。
   998|👩 Aoi is lonely. She is not popular.
   999|アオイちゃんは孤独です。彼女は人気がありません。
  1000|👨 Yuta is creative. He is not boring.
  1001|ユウタくんは創造的です。彼は退屈ではありません。
  1002|👨 Rin is dull. She is not interesting.
  1003|リンちゃんは退屈です。彼女は面白くありません。
  1004|👨 Sota is lucky. He is not unlucky.
  1005|ソウタくんは幸運です。彼は不運ではありません。
  1006|👨 Mei is unfortunate. She is not lucky.
  1007|メイちゃんは不幸です。彼女は幸運ではありません。
  1008|👨 Ryo is famous. He is not unknown.
  1009|リョウくんは有名です。彼は無名ではありません。
  1010|👨 Hina is ordinary. She is not special.
  1011|ヒナちゃんは普通です。彼女は特別ではありません。
  1012|👨 Kai is single. He is not married.
  1013|カイくんは独身です。彼は結婚していません。
  1014|👨 Saki is devoted. She is not unfaithful.
  1015|サキちゃんは献身的です。彼女は不誠実ではありません。
  1016|👨 Ren is open. He is not closed.
  1017|レンくんは開放的です。彼は閉鎖的ではありません。
  1018|👨 Yua is busy. She is not available.
  1019|ユアちゃんは忙しいです。彼女は利用可能ではありません。
  1020|👨 Haruto is ready. He is not late.
  1021|ハルトくんは準備ができています。彼は遅れていません。
  1022|👨 Miu is sorry. She is not happy.
  1023|ミウちゃんは申し訳ないと思っています。彼女は幸せではありません。
  1024|👨 Sora is correct. He is not wrong.
  1025|ソラくんは正確です。彼は間違っていません。
  1026|👨 Koharu is mistaken. She is not right.
  1027|コハルちゃんは間違っています。彼女は正しくありません。
  1028|👨 Riko is certain. He is not unsure.
  1029|リコくんは確実です。彼は確信していません。
  1030|👨 Mirai is doubtful. She is not sure.
  1031|ミライちゃんは疑っています。彼女は確信していません。
  1032|👨 Daiki is confident. He is not nervous.
  1033|ダイキくんは自信があります。彼は緊張していません。
  1034|👨 Hina is anxious. She is not relaxed.
  1035|ヒナちゃんは不安です。彼女はリラックスしていません。
  1036|👨 Kaito is peaceful. He is not stressed.
  1037|カイトくんは平和的です。彼はストレスを感じていません。
  1038|👨 Aoi is worried. She is not calm.
  1039|アオイちゃんは心配しています。彼女は冷静ではありません。
  1040|👨 Yuto is joyful. He is not sad.
  1041|ユウトくんは喜んでいます。彼は悲しくありません。
  1042|👨 Hina is unhappy. She is not happy.
  1043|ヒナちゃんは不幸です。彼女は幸せではありません。`
  1044|        },
  1045|        {
  1046|            title: "I and You with To Be Drill",
  1047|            content: `👦 I am happy. I am not sad.
  1048|私は幸せです。私は悲しくありません。
  1049|👧 You are kind. You are not mean.
  1050|あなたは親切です。あなたは意地悪ではありません。
  1051|👦 I am tall. I am not short.
  1052|私は背が高いです。私は背が低くありません。
  1053|👧 You are young. You are not old.
  1054|あなたは若いです。あなたは年をとっていません。
  1055|👦 I am strong. I am not weak.
  1056|私は強いです。私は弱くありません。
  1057|👧 You are fast. You are not slow.
  1058|あなたは速いです。あなたは遅くありません。
  1059|👦 I am smart. I am not stupid.
  1060|私は賢いです。私は愚かではありません。
  1061|👧 You are busy. You are not free.
  1062|あなたは忙しいです。あなたは自由ではありません。
  1063|👦 I am hungry. I am not full.
  1064|私はお腹が空いています。私は満腹ではありません。
  1065|👧 You are tired. You are not energetic.
  1066|あなたは疲れています。あなたは元気ではありません。
  1067|👦 I am cold. I am not warm.
  1068|私は寒いです。私は暖かくありません。
  1069|👧 You are rich. You are not poor.
  1070|あなたは金持ちです。あなたは貧しくありません。
  1071|👦 I am healthy. I am not sick.
  1072|私は健康です。私は病気ではありません。
  1073|👧 You are brave. You are not scared.
  1074|あなたは勇敢です。あなたは怖がっていません。
  1075|👦 I am quiet. I am not loud.
  1076|私は静かです。私は大声ではありません。
  1077|👧 You are careful. You are not careless.
  1078|あなたは慎重です。あなたは不注意ではありません。
  1079|👦 I am honest. I am not dishonest.
  1080|私は正直です。私は不正直ではありません。
  1081|👧 You are patient. You are not impatient.
  1082|あなたは忍耐強いです。あなたは忍耐がありません。
  1083|👦 I am friendly. I am not unfriendly.
  1084|私は友好的です。私は不友好的ではありません。
  1085|👧 You are creative. You are not boring.
  1086|あなたは創造的です。あなたは退屈ではありません。
  1087|👦 I am funny. You are serious too.
  1088|私は面白いです。あなたも真面目です。
  1089|👧 You are lucky. I am lucky too.
  1090|あなたは幸運です。私も幸運です。
  1091|👦 I am famous. You are famous too.
  1092|私は有名です。あなたも有名です。
  1093|👧 You are single. I am single too.
  1094|あなたは独身です。私も独身です。
  1095|👦 I am available. You are available too.
  1096|私は利用可能です。あなたも利用可能です。
  1097|👧 You are ready. I am ready too.
  1098|あなたは準備ができています。私も準備ができています。
  1099|👦 I am right. You are right too.
  1100|私は正しいです。あなたも正しいです。
  1101|👧 You are sure. I am sure too.
  1102|あなたは確信しています。私も確信しています。
  1103|👦 I am confident. You are confident too.
  1104|私は自信があります。あなたも自信があります。
  1105|👧 You are relaxed. I am relaxed too.
  1106|あなたはリラックスしています。私もリラックスしています。
  1107|👦 I am happy. You are happy too.
  1108|私は幸せです。あなたも幸せです。
  1109|👧 You are sad. I am sad too.
  1110|あなたは悲しいです。私も悲しいです。
  1111|👦 I am not late. You are not late either.
  1112|私は遅れていません。あなたも遅れていません。
  1113|👧 You are not wrong. I am not wrong either.
  1114|あなたは間違っていません。私も間違っていません。
  1115|👦 I am not unsure. You are not unsure either.
  1116|私は確信していません。あなたも確信していません。
  1117|👧 You are not nervous. I am not nervous either.
  1118|あなたは緊張していません。私も緊張していません。
  1119|👦 I am not stressed. You are not stressed either.
  1120|私はストレスを感じていません。あなたもストレスを感じていません。
  1121|👧 You are not worried. I am not worried either.
  1122|あなたは心配していません。私も心配していません。
  1123|👦 I am tall, but I am not strong.
  1124|私は背が高いですが、強くありません。
  1125|👧 You are young, but you are not fast.
  1126|あなたは若いですが、速くありません。
  1127|👦 I am smart, but I am not busy.
  1128|私は賢いですが、忙しくありません。
  1129|👧 You are kind, but you are not rich.
  1130|あなたは親切ですが、金持ちではありません。
  1131|👦 I am healthy, but I am not brave.
  1132|私は健康ですが、勇敢ではありません。
  1133|👧 You are quiet, but you are not honest.
  1134|あなたは静かですが、正直ではありません。
  1135|👦 I am friendly, but I am not funny.
  1136|私は友好的ですが、面白くありません。
  1137|👧 You are creative, but you are not lucky.
  1138|あなたは創造的ですが、幸運ではありません。
  1139|👦 I am happy, but I am not famous.
  1140|私は幸せですが、有名ではありません。
  1141|👧 You are ready, but you are not sure.
  1142|あなたは準備ができていますが、確信していません。`
  1143|        },
  1144|        {
  1145|            title: "Me and X and We with To Be Drill",
  1146|            content: `👦 Me and Ken are happy. We are not sad.
  1147|ケンくんと私は幸せです。私たちは悲しくありません。
  1148|👧 Me and Yumi are kind. We are not mean.
  1149|ユミちゃんと私は親切です。私たちは意地悪ではありません。
  1150|👦 Me and Takashi are tall. We are not short.
  1151|タカシくんと私は背が高いです。私たちは背が低くありません。
  1152|👧 Me and Sakura are cute. We are not ugly.
  1153|サクラちゃんと私は可愛いです。私たちは醜くありません。
  1154|👦 Me and Hiroshi are young. We are not old.
  1155|ヒロシくんと私は若いです。私たちは年をとっていません。
  1156|👧 Me and Aiko are wise. We are not foolish.
  1157|アイコちゃんと私は賢明です。私たちは愚かではありません。
  1158|👦 Me and Yuji are busy. We are not free.
  1159|ユウジくんと私は忙しいです。私たちは自由ではありません。
  1160|👧 Me and Emi are relaxed. We are not stressed.
  1161|エミちゃんと私はリラックスしています。私たちはストレスを感じていません。
  1162|👦 Me and Masato are hungry. We are not full.
  1163|マサトくんと私はお腹が空いています。私たちは満腹ではありません。
  1164|👧 Me and Kaori are energetic. We are not tired.
  1165|カオリちゃんと私は元気です。私たちは疲れていません。
  1166|👦 Me and Kenji are cold. We are not warm.
  1167|ケンジくんと私は寒いです。私たちは暖かくありません。
  1168|👧 Me and Mika are gentle. We are not rough.
  1169|ミカちゃんと私は優しいです。私たちは荒くありません。
  1170|👦 Me and Taro are rich. We are not poor.
  1171|タロウくんと私は金持ちです。私たちは貧しくありません。
  1172|👧 Me and Yuki are humble. We are not proud.
  1173|ユキちゃんと私は謙虚です。私たちは傲慢ではありません。
  1174|👦 Me and Jiro are healthy. We are not sick.
  1175|ジロウくんと私は健康です。私たちは病気ではありません。
  1176|👧 Me and Rina are weak. We are not strong.
  1177|リナちゃんと私は弱いです。私たちは強くありません。
  1178|👦 Me and Saburo are loud. We are not quiet.
  1179|サブロウくんと私は大声です。私たちは静かではありません。
  1180|👧 Me and Hana are shy. We are not bold.
  1181|ハナちゃんと私は恥ずかしがり屋です。私たちは大胆ではありません。
  1182|👦 Me and Shinji are careful. We are not careless.
  1183|シンジくんと私は慎重です。私たちは不注意ではありません。
  1184|👧 Me and Moe are clumsy. We are not graceful.
  1185|モエちゃんと私は不器用です。私たちは優雅ではありません。
  1186|👦 Me and Daisuke are patient. We are not impatient.
  1187|ダイスケくんと私は忍耐強いです。私たちは忍耐がありません。
  1188|👧 Me and Yui are nervous. We are not calm.
  1189|ユイちゃんと私は緊張しています。私たちは冷静ではありません。
  1190|👦 Me and Kenta are friendly. We are not unfriendly.
  1191|ケンタくんと私は友好的です。私たちは不友好的ではありません。
  1192|👧 Me and Aoi are lonely. We are not popular.
  1193|アオイちゃんと私は孤独です。私たちは人気がありません。
  1194|👦 Me and Yuta are creative. We are not boring.
  1195|ユウタくんと私は創造的です。私たちは退屈ではありません。
  1196|👧 Me and Rin are dull. We are not interesting.
  1197|リンちゃんと私は退屈です。私たちは面白くありません。
  1198|👦 Me and Sota are lucky. We are not unlucky.
  1199|ソウタくんと私は幸運です。私たちは不運ではありません。
  1200|👧 Me and Mei are unfortunate. We are not lucky.
  1201|メイちゃんと私は不幸です。私たちは幸運ではありません。
  1202|👦 Me and Ryo are famous. We are not unknown.
  1203|リョウくんと私は有名です。私たちは無名ではありません。
  1204|👧 Me and Hina are ordinary. We are not special.
  1205|ヒナちゃんと私は普通です。私たちは特別ではありません。
  1206|👦 Me and Kai are single. We are not married.
  1207|カイくんと私は独身です。私たちは結婚していません。
  1208|👧 Me and Saki are devoted. We are not unfaithful.
  1209|サキちゃんと私は献身的です。私たちは不誠実ではありません。
  1210|👦 Me and Ren are open. We are not closed.
  1211|レンくんと私は開放的です。私たちは閉鎖的ではありません。
  1212|👧 Me and Yua are busy. We are not available.
  1213|ユアちゃんと私は忙しいです。私たちは利用可能ではありません。
  1214|👦 Me and Haruto are ready. We are not late.
  1215|ハルトくんと私は準備ができています。私たちは遅れていません。
  1216|👧 Me and Miu are sorry. We are not happy.
  1217|ミウちゃんと私は申し訳ないと思っています。私たちは幸せではありません。
  1218|👦 Me and Sora are correct. We are not wrong.
  1219|ソラくんと私は正確です。私たちは間違っていません。
  1220|👧 Me and Koharu are mistaken. We are not right.
  1221|コハルちゃんと私は間違っています。私たちは正しくありません。
  1222|👦 Me and Riko are certain. We are not unsure.
  1223|リコくんと私は確実です。私たちは確信していません。
  1224|👧 Me and Mirai are doubtful. We are not sure.
  1225|ミライちゃんと私は疑っています。私たちは確信していません。
  1226|👦 Me and Daiki are confident. We are not nervous.
  1227|ダイキくんと私は自信があります。私たちは緊張していません。
  1228|👧 Me and Hina are anxious. We are not relaxed.
  1229|ヒナちゃんと私は不安です。私たちはリラックスしていません。
  1230|👦 Me and Kaito are peaceful. We are not stressed.
  1231|カイトくんと私は平和的です。私たちはストレスを感じていません。
  1232|👧 Me and Aoi are worried. We are not calm.
  1233|アオイちゃんと私は心配しています。私たちは冷静ではありません。
  1234|👦 Me and Yuto are joyful. We are not sad.
  1235|ユウトくんと私は喜んでいます。私たちは悲しくありません。
  1236|👧 Me and Hina are unhappy. We are not happy.
  1237|ヒナちゃんと私は不幸です。私たちは幸せではありません。`
  1238|        },
  1239|        {
  1240|            title: "Personal Pronouns Review with To Be",
  1241|            content: `👦 I am happy.
  1242|私は幸せです。
  1243|👧 You are kind.
  1244|あなたは親切です。
  1245|👦 He is tall.
  1246|彼は背が高いです。
  1247|👩 She is smart.
  1248|彼女は賢いです。
  1249|🐱 It is big.
  1250|それは大きいです。
  1251|👪 We are strong.
  1252|私たちは強いです。
  1253|👥 They are fast.
  1254|彼らは速いです。
  1255|👦 I am rich.
  1256|私は金持ちです。
  1257|👧 You are young.
  1258|あなたは若いです。
  1259|👦 He is brave.
  1260|彼は勇敢です。
  1261|👩 She is beautiful.
  1262|彼女は美しいです。
  1263|🐱 It is small.
  1264|それは小さいです。
  1265|👪 We are lucky.
  1266|私たちは幸運です。
  1267|👥 They are healthy.
  1268|彼らは健康です。
  1269|👦 I am busy.
  1270|私は忙しいです。
  1271|👧 You are quiet.
  1272|あなたは静かです。
  1273|👦 He is careful.
  1274|彼は慎重です。
  1275|👩 She is patient.
  1276|彼女は忍耐強いです。
  1277|🐱 It is cold.
  1278|それは寒いです。
  1279|👪 We are honest.
  1280|私たちは正直です。
  1281|👥 They are gentle.
  1282|彼らは優しいです。
  1283|👦 I am confident.
  1284|私は自信があります。
  1285|👧 You are relaxed.
  1286|あなたはリラックスしています。
  1287|👦 He is creative.
  1288|彼は創造的です。
  1289|👩 She is generous.
  1290|彼女は寛大です。
  1291|🐱 It is warm.
  1292|それは暖かいです。
  1293|👪 We are friendly.
  1294|私たちは友好的です。
  1295|👥 They are kind.
  1296|彼らは親切です。
  1297|👦 I am short.
  1298|私は背が低いです。
  1299|👧 You are old.
  1300|あなたは年をとっています。
  1301|👦 He is free.
  1302|彼は自由です。
  1303|👩 She is scared.
  1304|彼女は怖がっています。
  1305|🐱 It is hungry.
  1306|それはお腹が空いています。
  1307|👪 We are unlucky.
  1308|私たちは不運です。
  1309|👥 They are careless.
  1310|彼らは不注意です。
  1311|👦 I am late.
  1312|私は遅れています。
  1313|👧 You are nervous.
  1314|あなたは緊張しています。
  1315|👦 He is stressed.
  1316|彼はストレスを感じています。
  1317|👩 She is boring.
  1318|彼女は退屈です。
  1319|🐱 It is full.
  1320|それは満腹です。
  1321|👪 We are dishonest.
  1322|私たちは不正直です。
  1323|👥 They are impatient.
  1324|彼らは忍耐がありません。
  1325|👦 I am unfriendly.
  1326|私は不友好的です。
  1327|👧 You are sick.
  1328|あなたは病気です。
  1329|👦 He is sad.
  1330|彼は悲しいです。
  1331|👩 She is selfish.
  1332|彼女は利己的です。
  1333|🐱 It is loud.
  1334|それは大声です。
  1335|👪 We are rough.
  1336|私たちは荒いです。
  1337|👥 They are stupid.
  1338|彼らは愚かです。
  1339|👦 I am weak.
  1340|私は弱いです。
  1341|👧 You are slow.
  1342|あなたは遅いです。
  1343|👦 He is poor.
  1344|彼は貧しいです。
  1345|👩 She is mean.
  1346|彼女は意地悪です。
  1347|🐱 It is quiet.
  1348|それは静かです。
  1349|👪 We are ugly.
  1350|私たちは醜いです。
  1351|👥 They are foolish.
  1352|彼らは愚かです。`
  1353|        },
  1354|        {
  1355|            title: "Present Continuous Drill",
  1356|            content: `👦 I am eating an apple.
  1357|私はリンゴを食べています。
  1358|👧 You are drinking water.
  1359|あなたは水を飲んでいます。
  1360|👦 He is reading a book.
  1361|彼は本を読んでいます。
  1362|👩 She is writing a letter.
  1363|彼女は手紙を書いています。
  1364|🐱 It is chasing a mouse.
  1365|それはネズミを追いかけています。
  1366|👪 We are playing soccer.
  1367|私たちはサッカーをしています。
  1368|👥 They are watching TV.
  1369|彼らはテレビを見ています。
  1370|👦 I am cooking dinner.
  1371|私は夕食を作っています。
  1372|👧 You are cleaning the room.
  1373|あなたは部屋を掃除しています。
  1374|👦 He is washing the car.
  1375|彼は車を洗っています。
  1376|👩 She is painting a picture.
  1377|彼女は絵を描いています。
  1378|🐱 It is catching a ball.
  1379|それはボールを捕まえています。
  1380|👪 We are studying English.
  1381|私たちは英語を勉強しています。
  1382|👥 They are listening to music.
  1383|彼らは音楽を聞いています。
  1384|👦 I am buying a gift.
  1385|私はプレゼントを買っています。
  1386|👧 You are selling flowers.
  1387|あなたは花を売っています。
  1388|👦 He is teaching math.
  1389|彼は数学を教えています。
  1390|👩 She is learning Japanese.
  1391|彼女は日本語を学んでいます。
  1392|🐱 It is eating fish.
  1393|それは魚を食べています。
  1394|👪 We are building a house.
  1395|私たちは家を建てています。
  1396|👥 They are fixing a bike.
  1397|彼らは自転車を直しています。
  1398|👦 I am opening the door.
  1399|私はドアを開けています。
  1400|👧 You are closing the window.
  1401|あなたは窓を閉めています。
  1402|👦 He is giving a present.
  1403|彼はプレゼントを渡しています。
  1404|👩 She is taking a photo.
  1405|彼女は写真を撮っています。
  1406|🐱 It is making noise.
  1407|それは音を出しています。
  1408|👪 We are doing homework.
  1409|私たちは宿題をしています。
  1410|👥 They are going home.
  1411|彼らは家に帰っています。
  1412|👦 I am drawing a cat.
  1413|私は猫を描いています。
  1414|👧 You are singing a song.
  1415|あなたは歌を歌っています。
  1416|👦 He is dancing with friends.
  1417|彼は友達と踊っています。
  1418|👩 She is running a race.
  1419|彼女はレースを走っています。
  1420|🐱 It is jumping over a fence.
  1421|それはフェンスを飛び越えています。
  1422|👪 We are eating lunch.
  1423|私たちは昼ご飯を食べています。
  1424|👥 They are drinking milk.
  1425|彼らは牛乳を飲んでいます。
  1426|👦 I am reading a story.
  1427|私は物語を読んでいます。
  1428|👧 You are writing a report.
  1429|あなたはレポートを書いています。
  1430|👦 He is drawing a map.
  1431|彼は地図を描いています。
  1432|👩 She is baking a cake.
  1433|彼女はケーキを焼いています。
  1434|🐱 It is climbing a tree.
  1435|それは木を登っています。
  1436|👪 We are planting flowers.
  1437|私たちは花を植えています。
  1438|👥 They are cutting grass.
  1439|彼らは草を刈っています。
  1440|👦 I am washing dishes.
  1441|私は皿を洗っています。
  1442|👧 You are drying clothes.
  1443|あなたは服を乾かしています。
  1444|👦 He is ironing shirts.
  1445|彼はシャツをアイロンがけしています。
  1446|👩 She is folding clothes.
  1447|彼女は服を畳んでいます。
  1448|🐱 It is sleeping on a bed.
  1449|それはベッドで寝ています。
  1450|👪 We are making tea.
  1451|私たちはお茶を入れています。
  1452|👥 They are eating breakfast.
  1453|彼らは朝食を食べています。
  1454|👦 I am playing the piano.
  1455|私はピアノを弾いています。
  1456|👧 You are playing the guitar.
  1457|あなたはギターを弾いています。
  1458|👦 He is playing tennis.
  1459|彼はテニスをしています。
  1460|👩 She is playing basketball.
  1461|彼女はバスケットボールをしています。
  1462|🐱 It is playing with a toy.
  1463|それはおもちゃで遊んでいます。
  1464|👪 We are swimming in a pool.
  1465|私たちはプールで泳いでいます。
  1466|👥 They are walking in the park.
  1467|彼らは公園を歩いています。
  1468|👦 I am riding a bike.
  1469|私は自転車に乗っています。
  1470|👧 You are driving a car.
  1471|あなたは車を運転しています。
  1472|👦 He is flying a kite.
  1473|彼は凧を飛ばしています。
  1474|👩 She is feeding birds.
  1475|彼女は鳥に餌をやっています。
  1476|🐱 It is drinking water.
  1477|それは水を飲んでいます。
  1478|👪 We are buying food.
  1479|私たちは食べ物を買っています。
  1480|👥 They are selling vegetables.
  1481|彼らは野菜を売っています。`
  1482|        },
  1483|        {
  1484|            title: "Adjective Drill",
  1485|            content: `🐱 The cat is big.
  1486|猫は大きいです。
  1487|🐱 The cat was big.
  1488|猫は大きかったです。
  1489|🐱 The big cat runs.
  1490|大きな猫が走ります。
  1491|🐱 The cat was fat, but now it is thin.
  1492|猫は太っていましたが、今は痩せています。
  1493|🐶 The dog is small.
  1494|犬は小さいです。
  1495|🐶 The dog was small.
  1496|犬は小さかったです。
  1497|🐶 The small dog sleeps.
  1498|小さな犬が寝ています。
  1499|🐶 The dog was young, but now it is old.
  1500|犬は若かったですが、今は年をとっています。
  1501|🐦 The bird is fast.
  1502|鳥は速いです。
  1503|🐦 The bird was fast.
  1504|鳥は速かったです。
  1505|🐦 The fast bird flies.
  1506|速い鳥が飛びます。
  1507|🐦 The bird was hungry, but now it is full.
  1508|鳥はお腹が空いていましたが、今は満腹です。
  1509|🐟 The fish is cold.
  1510|魚は寒いです。
  1511|🐟 The fish was cold.
  1512|魚は寒かったです。
  1513|🐟 The cold fish swims.
  1514|寒い魚が泳ぎます。
  1515|🐟 The fish was small, but now it is big.
  1516|魚は小さかったですが、今は大きいです。
  1517|🐰 The rabbit is quiet.
  1518|ウサギは静かです。
  1519|🐰 The rabbit was quiet.
  1520|ウサギは静かでした。
  1521|🐰 The quiet rabbit jumps.
  1522|静かなウサギが跳びます。
  1523|🐰 The rabbit was scared, but now it is brave.
  1524|ウサギは怖がっていましたが、今は勇敢です。
  1525|🐴 The horse is strong.
  1526|馬は強いです。
  1527|🐴 The horse was strong.
  1528|馬は強かったです。
  1529|🐴 The strong horse runs.
  1530|強い馬が走ります。
  1531|🐴 The horse was sick, but now it is healthy.
  1532|馬は病気でしたが、今は健康です。
  1533|🐄 The cow is gentle.
  1534|牛は優しいです。
  1535|🐄 The cow was gentle.
  1536|牛は優しかったです。
  1537|🐄 The gentle cow eats.
  1538|優しい牛が食べます。
  1539|🐄 The cow was thin, but now it is fat.
  1540|牛は痩せていましたが、今は太っています。
  1541|🐷 The pig is dirty.
  1542|豚は汚いです。
  1543|🐷 The pig was dirty.
  1544|豚は汚かったです。
  1545|🐷 The dirty pig sleeps.
  1546|汚い豚が寝ています。
  1547|🐷 The pig was hungry, but now it is full.
  1548|豚はお腹が空いていましたが、今は満腹です。
  1549|🐔 The chicken is loud.
  1550|鶏は大声です。
  1551|🐔 The chicken was loud.
  1552|鶏は大声でした。
  1553|🐔 The loud chicken sings.
  1554|大声の鶏が歌います。
  1555|🐔 The chicken was small, but now it is big.
  1556|鶏は小さかったですが、今は大きいです。
  1557|🐑 The sheep is soft.
  1558|羊は柔らかいです。
  1559|🐑 The sheep was soft.
  1560|羊は柔らかかったです。
  1561|🐑 The soft sheep walks.
  1562|柔らかい羊が歩きます。
  1563|🐑 The sheep was slow, but now it is fast.
  1564|羊は遅かったですが、今は速いです。
  1565|🐘 The elephant is big.
  1566|象は大きいです。
  1567|🐘 The elephant was big.
  1568|象は大きかったです。
  1569|🐘 The big elephant walks.
  1570|大きな象が歩きます。
  1571|🐘 The elephant was weak, but now it is strong.
  1572|象は弱かったですが、今は強いです。
  1573|🦁 The lion is brave.
  1574|ライオンは勇敢です。
  1575|🦁 The lion was brave.
  1576|ライオンは勇敢でした。
  1577|🦁 The brave lion runs.
  1578|勇敢なライオンが走ります。
  1579|🦁 The lion was tired, but now it is energetic.
  1580|ライオンは疲れていましたが、今は元気です。
  1581|🐯 The tiger is fast.
  1582|トラは速いです。
  1583|🐯 The tiger was fast.
  1584|トラは速かったです。
  1585|🐯 The fast tiger hunts.
  1586|速いトラが狩りをします。
  1587|🐯 The tiger was hungry, but now it is full.
  1588|トラはお腹が空いていましたが、今は満腹です。
  1589|🐻 The bear is big.
  1590|熊は大きいです。
  1591|🐻 The bear was big.
  1592|熊は大きかったです。
  1593|🐻 The big bear sleeps.
  1594|大きな熊が寝ています。
  1595|🐻 The bear was angry, but now it is calm.
  1596|熊は怒っていましたが、今は冷静です。
  1597|🦊 The fox is smart.
  1598|キツネは賢いです。
  1599|🦊 The fox was smart.
  1600|キツネは賢かったです。
  1601|🦊 The smart fox runs.
  1602|賢いキツネが走ります。
  1603|🦊 The fox was scared, but now it is brave.
  1604|キツネは怖がっていましたが、今は勇敢です。
  1605|🐒 The monkey is active.
  1606|猿は活発です。
  1607|🐒 The monkey was active.
  1608|猿は活発でした。
  1609|🐒 The active monkey jumps.
  1610|活発な猿が跳びます。
  1611|🐒 The monkey was sad, but now it is happy.
  1612|猿は悲しかったですが、今は幸せです。`
  1613|        }
  1614|    ]
  1615|};
  1616|