// Récupère la langue sauvegardée
const lang = localStorage.getItem('quizLang') || 'fr';

// 100 questions variées, haut niveau, sans répétitions
const questions = [
  { fr: "En quelle année a eu lieu la Révolution française ?", en: "In what year did the French Revolution occur?", zh: "法国大革命是哪一年发生的？", a: 1, o: ["1776", "1789", "1804", "1815"] },
  { fr: "Qui était le premier empereur romain ?", en: "Who was the first Roman emperor?", zh: "谁是第一位罗马皇帝？", a: 2, o: ["César", "Auguste", "Néron", "Trajan"] },
  { fr: "Quelle reine d’Égypte fut célèbre pour sa beauté ?", en: "Which Egyptian queen was famous for her beauty?", zh: "哪位埃及女王以美貌闻名？", a: 1, o: ["Néfertiti", "Cléopâtre", "Hatchepsout", "Néfertari"] },
  { fr: "En quelle année a eu lieu la chute du mur de Berlin ?", en: "In what year did the Berlin Wall fall?", zh: "柏林墙是哪一年倒塌的？", a: 2, o: ["1987", "1989", "1991", "1993"] },
  { fr: "Qui a découvert l’Amérique en 1492 ?", en: "Who discovered America in 1492?", zh: "谁在1492年发现了美洲？", a: 0, o: ["Christophe Colomb", "Magellan", "Vasco de Gama", "Jacques Cartier"] },
  { fr: "Quel roi de France a été surnommé “le Roi Soleil” ?", en: "Which French king was nicknamed “the Sun King”?", zh: "哪位法国国王被称为“太阳王”？", a: 1, o: ["Louis XIII", "Louis XIV", "Louis XV", "Louis XVI"] },
  { fr: "Quelle guerre a opposé le Nord et le Sud des États-Unis ?", en: "Which war pitted the North against the South in the USA?", zh: "美国南北双方交战的是哪场战争？", a: 0, o: ["Guerre de Sécession", "Guerre de 1812", "Guerre civile espagnole", "Première Guerre mondiale"] },
  { fr: "Qui a fondé l’Empire mongol ?", en: "Who founded the Mongol Empire?", zh: "谁建立了蒙古帝国？", a: 2, o: ["Kubilai Khan", "Batu Khan", "Gengis Khan", "Ogodei Khan"] },
  { fr: "Quelle bataille célèbre a eu lieu en 1815 ?", en: "Which famous battle occurred in 1815?", zh: "哪场著名战役发生在1815年？", a: 1, o: ["Bataille de Trafalgar", "Bataille de Waterloo", "Bataille d'Austerlitz", "Bataille de Leipzig"] },
  { fr: "Quel pays a utilisé la bombe atomique en 1945 ?", en: "Which country used the atomic bomb in 1945?", zh: "哪个国家在1945年使用了原子弹？", a: 2, o: ["Allemagne", "URSS", "États-Unis", "Japon"] },
  { fr: "Quelle est la capitale du Canada ?", en: "What is the capital of Canada?", zh: "加拿大的首都是哪里？", a: 1, o: ["Toronto", "Ottawa", "Montréal", "Vancouver"] },
  { fr: "Quel est le plus grand désert du monde ?", en: "What is the largest desert in the world?", zh: "世界上最大的沙漠是哪个？", a: 3, o: ["Sahara", "Gobi", "Atacama", "Antarctique"] },
  { fr: "Quel fleuve traverse Paris ?", en: "Which river flows through Paris?", zh: "哪条河流经巴黎？", a: 0, o: ["Seine", "Loire", "Rhin", "Rhone"] },
  { fr: "Quel pays a pour capitale Canberra ?", en: "Which country has Canberra as its capital?", zh: "哪个国家的首都是堪培拉？", a: 0, o: ["Australie", "Nouvelle-Zélande", "Papouasie-Nouvelle-Guinée", "Fidji"] },
  { fr: "Sur quel continent se trouve le Kenya ?", en: "On which continent is Kenya located?", zh: "肯尼亚位于哪个大陆？", a: 1, o: ["Asie", "Afrique", "Amérique", "Europe"] },
  { fr: "Quelle est la plus haute montagne du monde ?", en: "What is the highest mountain in the world?", zh: "世界最高峰是哪座山？", a: 2, o: ["K2", "Mont Blanc", "Everest", "Kilimandjaro"] },
  { fr: "Quel océan borde la côte ouest des États-Unis ?", en: "Which ocean borders the west coast of the USA?", zh: "哪个海洋与美国西海岸接壤？", a: 0, o: ["Pacifique", "Atlantique", "Indien", "Arctique"] },
  { fr: "Dans quel pays se trouve le Machu Picchu ?", en: "In which country is Machu Picchu located?", zh: "马丘比丘位于哪个国家？", a: 2, o: ["Colombie", "Équateur", "Pérou", "Bolivie"] },
  { fr: "Quelle île est à la fois un pays et un continent ?", en: "Which island is both a country and a continent?", zh: "哪个岛屿既是国家又是大陆？", a: 0, o: ["Australie", "Madagascar", "Grande-Bretagne", "Irlande"] },
  { fr: "Quel est le plus long fleuve du monde ?", en: "What is the longest river in the world?", zh: "世界上最长的河流是哪条？", a: 0, o: ["Nil", "Amazone", "Mississippi", "Yangtsé"] },
  { fr: "Quelle est la planète la plus proche du Soleil ?", en: "Which planet is closest to the Sun?", zh: "哪颗行星离太阳最近？", a: 2, o: ["Vénus", "Terre", "Mercure", "Mars"] },
  { fr: "Qui a formulé la théorie de la relativité ?", en: "Who formulated the theory of relativity?", zh: "谁提出了相对论？", a: 1, o: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"] },
  { fr: "Combien de paires de chromosomes possède l’être humain ?", en: "How many pairs of chromosomes does a human have?", zh: "人类有多少对染色体？", a: 2, o: ["22", "23", "24", "25"] },
  { fr: "Quelle molécule est la principale source d’énergie des cellules ?", en: "Which molecule is the main source of energy for cells?", zh: "哪种分子是细胞的主要能量来源？", a: 0, o: ["ATP", "ADN", "ARN", "Glucose"] },
  { fr: "Quel gaz les plantes absorbent-elles pour la photosynthèse ?", en: "Which gas do plants absorb for photosynthesis?", zh: "植物在光合作用中吸收哪种气体？", a: 1, o: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"] },
  { fr: "Quel est le symbole chimique du fer ?", en: "What is the chemical symbol for iron?", zh: "铁的化学符号是什么？", a: 2, o: ["Fe", "Ir", "Fr", "Fl"] },
  { fr: "Quelle unité mesure la force électrique ?", en: "Which unit measures electrical force?", zh: "哪个单位测量电力？", a: 0, o: ["Volt", "Ohm", "Ampère", "Watt"] },
  { fr: "Quelle est la vitesse de la lumière dans le vide (en km/s) ?", en: "What is the speed of light in a vacuum (in km/s)?", zh: "光在真空中的速度是多少（km/s）？", a: 1, o: ["290 000", "300 000", "310 000", "280 000"] },
  { fr: "Qui a inventé l’ampoule électrique ?", en: "Who invented the light bulb?", zh: "谁发明了电灯泡？", a: 1, o: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"] },
  { fr: "Quelle partie du cerveau contrôle l’équilibre ?", en: "Which part of the brain controls balance?", zh: "大脑的哪个部分控制平衡？", a: 2, o: ["Cervelet", "Cerveau", "Tronc cérébral", "Moelle épinière"] },
  { fr: "Qui a écrit Les Misérables ?", en: "Who wrote Les Misérables?", zh: "谁写了《悲惨世界》？", a: 2, o: ["Victor Hugo", "Alexandre Dumas", "Émile Zola", "Gustave Flaubert"] },
  { fr: "Quel écrivain est l’auteur de 1984 ?", en: "Who is the author of 1984?", zh: "《1984》的作者是谁？", a: 1, o: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Kurt Vonnegut"] },
  { fr: "De quel pays est originaire William Shakespeare ?", en: "Which country is William Shakespeare from?", zh: "威廉·莎士比亚来自哪个国家？", a: 0, o: ["Angleterre", "Écosse", "Irlande", "Pays de Galles"] },
  { fr: "Quel roman met en scène un capitaine nommé Nemo ?", en: "Which novel features a captain named Nemo?", zh: "哪部小说中有一位叫尼莫的船长？", a: 1, o: ["Vingt mille lieues sous les mers", "Le Tour du monde en 80 jours", "Robinson Crusoé", "L’Île mystérieuse"] },
  { fr: "Qui a écrit Le Petit Prince ?", en: "Who wrote The Little Prince?", zh: "《小王子》的作者是谁？", a: 2, o: ["André Gide", "Antoine de Saint-Exupéry", "Paul Valéry", "Jean Cocteau"] },
  { fr: "Quelle héroïne de roman perd son soulier de verre ?", en: "Which fictional heroine loses her glass slipper?", zh: "哪个小说中的女主角丢了玻璃鞋？", a: 0, o: ["Cendrillon", "Blanche-Neige", "La Belle au bois dormant", "Raiponce"] },
  { fr: "Quel est le nom du détective créé par Arthur Conan Doyle ?", en: "What is the name of the detective created by Arthur Conan Doyle?", zh: "阿瑟·柯南·道尔创造的侦探叫什么名字？", a: 1, o: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Philip Marlowe"] },
  { fr: "Dans quel roman trouve-t-on le personnage de Jean Valjean ?", en: "In which novel does the character Jean Valjean appear?", zh: "哪个小说中有让·瓦尔让这个角色？", a: 0, o: ["Les Misérables", "Notre-Dame de Paris", "L'Assommoir", "Germinal"] },
  { fr: "Qui est l’auteur de L’Odyssée ?", en: "Who is the author of The Odyssey?", zh: "《奥德赛》的作者是谁？", a: 1, o: ["Sophocle", "Homère", "Virgile", "Platon"] },
  { fr: "Quel poète français a écrit Les Fleurs du mal ?", en: "Which French poet wrote Les Fleurs du mal?", zh: "哪位法国诗人写了《恶之花》？", a: 2, o: ["Paul Verlaine", "Arthur Rimbaud", "Charles Baudelaire", "Stéphane Mallarmé"] },
  { fr: "Qui a peint la Joconde ?", en: "Who painted the Mona Lisa?", zh: "谁画了蒙娜丽莎？", a: 2, o: ["Michel-Ange", "Pablo Picasso", "Léonard de Vinci", "Vincent van Gogh"] },
  { fr: "Quel peintre espagnol est célèbre pour le cubisme ?", en: "Which Spanish painter is famous for cubism?", zh: "哪位西班牙画家以立体主义闻名？", a: 1, o: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Francisco Goya"] },
  { fr: "Dans quelle ville se trouve le musée du Louvre ?", en: "In which city is the Louvre Museum located?", zh: "卢浮宫博物馆位于哪个城市？", a: 0, o: ["Paris", "Lyon", "Marseille", "Nice"] },
  { fr: "Quelle est la couleur obtenue en mélangeant du bleu et du jaune ?", en: "What color do you get by mixing blue and yellow?", zh: "蓝色和黄色混合后是什么颜色？", a: 2, o: ["Violet", "Orange", "Vert", "Rouge"] },
  { fr: "Quel artiste a peint La Nuit étoilée ?", en: "Which artist painted The Starry Night?", zh: "谁画了《星夜》？", a: 1, o: ["Paul Cézanne", "Vincent van Gogh", "Claude Monet", "Henri Matisse"] },
  { fr: "Qui a sculpté Le Penseur ?", en: "Who sculpted The Thinker?", zh: "谁雕刻了《思想者》？", a: 0, o: ["Auguste Rodin", "Michel-Ange", "Donatello", "Alberto Giacometti"] },
  { fr: "Quel mouvement artistique est associé à Claude Monet ?", en: "Which art movement is associated with Claude Monet?", zh: "哪场艺术运动与克劳德·莫奈有关？", a: 1, o: ["Surréalisme", "Impressionnisme", "Cubisme", "Fauvisme"] },
  { fr: "Quelle est la principale matière utilisée dans la sculpture de Michel-Ange ?", en: "What is the main material used in Michelangelo's sculptures?", zh: "米开朗基罗雕塑的主要材料是什么？", a: 2, o: ["Bois", "Marbre", "Argile", "Bronze"] },
  { fr: "Qui a peint Guernica ?", en: "Who painted Guernica?", zh: "谁画了《格尔尼卡》？", a: 1, o: ["Salvador Dalí", "Pablo Picasso", "Georges Braque", "Joan Miró"] },
  { fr: "Quelle est la capitale mondiale de la mode ?", en: "Which city is the world capital of fashion?", zh: "世界时尚之都是哪个城市？", a: 0, o: ["Paris", "Milan", "New York", "Londres"] },
  { fr: "Quel compositeur a écrit la Symphonie n°9 ?", en: "Which composer wrote Symphony No. 9?", zh: "哪位作曲家写了第九交响曲？", a: 1, o: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johannes Brahms", "Pyotr Ilyich Tchaikovsky"] },
  { fr: "Quel groupe a chanté Bohemian Rhapsody ?", en: "Which band sang Bohemian Rhapsody?", zh: "哪个乐队唱了《波西米亚狂想曲》？", a: 0, o: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"] },
  { fr: "Qui est surnommée “la reine de la pop” ?", en: "Who is nicknamed “the queen of pop”?", zh: "谁被称为“流行音乐女王”？", a: 1, o: ["Taylor Swift", "Madonna", "Beyoncé", "Ariana Grande"] },
  { fr: "Quel instrument a des cordes et un archet ?", en: "Which instrument has strings and a bow?", zh: "哪种乐器有弦和弓？", a: 2, o: ["Guitare", "Piano", "Violon", "Trompette"] },
  { fr: "Dans quel pays est né le reggae ?", en: "In which country was reggae born?", zh: "雷鬼音乐诞生于哪个国家？", a: 1, o: ["Cuba", "Jamaïque", "Brésil", "Haïti"] },
  { fr: "Quel chanteur est surnommé “le roi du rock’n’roll” ?", en: "Which singer is nicknamed “the king of rock’n’roll”?", zh: "哪位歌手被称为“摇滚之王”？", a: 2, o: ["Chuck Berry", "Elton John", "Elvis Presley", "Little Richard"] },
  { fr: "Qui a chanté Imagine ?", en: "Who sang Imagine?", zh: "谁唱了《想象》？", a: 0, o: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"] },
  { fr: "Quel musicien est devenu sourd à la fin de sa vie ?", en: "Which musician became deaf later in life?", zh: "哪位音乐家晚年失聪？", a: 1, o: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Liszt"] },
  { fr: "Quel instrument utilise des touches noires et blanches ?", en: "Which instrument uses black and white keys?", zh: "哪种乐器使用黑白键？", a: 0, o: ["Piano", "Violon", "Flûte", "Trombone"] },
  { fr: "Quel compositeur autrichien a écrit La Flûte enchantée ?", en: "Which Austrian composer wrote The Magic Flute?", zh: "哪位奥地利作曲家写了《魔笛》？", a: 0, o: ["Wolfgang Amadeus Mozart", "Franz Schubert", "Johann Strauss", "Gustav Mahler"] },
  { fr: "Quelle est la durée d’un match de football (sans prolongation) ?", en: "How long is a football match (without extra time)?", zh: "一场足球比赛（不含加时）有多长时间？", a: 1, o: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"] },
  { fr: "Combien de joueurs composent une équipe de basket-ball ?", en: "How many players are on a basketball team?", zh: "一支篮球队有多少名球员？", a: 2, o: ["4", "5", "6", "7"] },
  { fr: "Dans quel sport utilise-t-on une raquette et un volant ?", en: "In which sport do you use a racket and a shuttlecock?", zh: "哪种运动使用球拍和羽毛球？", a: 1, o: ["Tennis", "Badminton", "Squash", "Tennis de table"] },
  { fr: "En quelle année la France a-t-elle gagné sa première Coupe du Monde de football ?", en: "In which year did France win its first FIFA World Cup?", zh: "法国在哪一年赢得了首届世界杯？", a: 1, o: ["1986", "1998", "2006", "2018"] },
  { fr: "Quelle discipline sportive utilise des barres asymétriques ?", en: "Which sport uses uneven bars?", zh: "哪种体育项目使用高低杠？", a: 0, o: ["Gymnastique", "Tennis", "Haltérophilie", "Natation"] },
  { fr: "Quel est le sport national du Japon ?", en: "What is the national sport of Japan?", zh: "日本的国技是什么？", a: 1, o: ["Karate", "Sumo", "Judo", "Baseball"] },
  { fr: "Quel coureur a remporté le plus de Tours de France ?", en: "Which cyclist won the most Tour de France titles?", zh: "哪位自行车手赢得的环法自行车赛最多？", a: 2, o: ["Bernard Hinault", "Eddy Merckx", "Jacques Anquetil", "Miguel Indurain"] },
  { fr: "Dans quel sport utilise-t-on un club et une balle blanche ?", en: "In which sport do you use a club and a white ball?", zh: "哪种运动使用球杆和白球？", a: 1, o: ["Baseball", "Golf", "Tennis", "Cricket"] },
  { fr: "Qui est Michael Jordan ?", en: "Who is Michael Jordan?", zh: "迈克尔·乔丹是谁？", a: 2, o: ["Footballeur", "Golfeur", "Joueur de basket-ball", "Nageur"] },
  { fr: "Combien de points vaut un essai au rugby ?", en: "How many points is a try worth in rugby?", zh: "橄榄球中达阵得几分？", a: 0, o: ["5", "3", "7", "10"] },
  { fr: "Qui a réalisé Titanic ?", en: "Who directed Titanic?", zh: "谁执导了《泰坦尼克号》？", a: 1, o: ["Steven Spielberg", "James Cameron", "George Lucas", "Martin Scorsese"] },
  { fr: "Quel film met en scène un robot nommé R2-D2 ?", en: "Which movie features a robot named R2-D2?", zh: "哪部电影中有一个叫R2-D2的机器人？", a: 2, o: ["Star Trek", "Blade Runner", "Star Wars", "Terminator"] },
  { fr: "Qui joue le rôle principal dans Pirates des Caraïbes ?", en: "Who plays the main role in Pirates of the Caribbean?", zh: "谁在《加勒比海盗》中担任主角？", a: 0, o: ["Johnny Depp", "Brad Pitt", "Leonardo DiCaprio", "Tom Cruise"] },
  { fr: "Quel est le nom du magicien dans Harry Potter ?", en: "What is the name of the wizard in Harry Potter?", zh: "哈利·波特中的巫师叫什么名字？", a: 1, o: ["Ron Weasley", "Harry Potter", "Hermione Granger", "Albus Dumbledore"] },
  { fr: "Dans quel film entend-on la réplique “Je suis ton père” ?", en: "In which movie do you hear the line “I am your father”?", zh: "哪部电影中有人说“我是你父亲”？", a: 2, o: ["Star Trek", "The Matrix", "Star Wars", "Indiana Jones"] },
  { fr: "Quel studio a créé Toy Story ?", en: "Which studio created Toy Story?", zh: "哪个工作室制作了《玩具总动员》？", a: 1, o: ["Pixar", "Disney", "DreamWorks", "Blue Sky Studios"] },
  { fr: "Qui est le réalisateur du Seigneur des Anneaux ?", en: "Who directed The Lord of the Rings?", zh: "《指环王》的导演是谁？", a: 0, o: ["Peter Jackson", "George Lucas", "James Cameron", "Steven Spielberg"] },
  { fr: "Quel film a remporté l’Oscar du meilleur film en 2020 ?", en: "Which film won the Best Picture Oscar in 2020?", zh: "哪部电影获得了2020年奥斯卡最佳影片奖？", a: 2, o: ["Joker", "1917", "Parasite", "Ford v Ferrari"] },
  { fr: "Quel acteur incarne Iron Man ?", en: "Which actor plays Iron Man?", zh: "谁扮演钢铁侠？", a: 2, o: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"] },
  { fr: "Dans quelle ville se tient le Festival de Cannes ?", en: "In which city is the Cannes Film Festival held?", zh: "戛纳电影节在哪个城市举办？", a: 1, o: ["Paris", "Cannes", "Nice", "Marseille"] },
  { fr: "Quel est le plus grand mammifère terrestre ?", en: "What is the largest land mammal?", zh: "最大的陆地哺乳动物是什么？", a: 0, o: ["Éléphant", "Rhinocéros", "Girafe", "Hippopotame"] },
  { fr: "Combien de continents existe-t-il ?", en: "How many continents are there?", zh: "有多少个大陆？", a: 1, o: ["5", "7", "6", "8"] },
  { fr: "Quelle est la durée moyenne d’une rotation complète de la Terre ?", en: "What is the average duration of one full rotation of the Earth?", zh: "地球自转一周的平均时间是多少？", a: 0, o: ["24 heures", "23 heures 56 minutes", "25 heures", "24 heures 4 minutes"] },
  { fr: "Quelle est la plus grande forêt tropicale du monde ?", en: "What is the largest tropical rainforest in the world?", zh: "世界上最大的热带雨林是哪个？", a: 1, o: ["Forêt de Bornéo", "Amazonie", "Forêt du Congo", "Forêt de Valdivia"] },
  { fr: "Quel animal pond des œufs mais allaite ses petits ?", en: "Which animal lays eggs but nurses its young?", zh: "哪种动物会下蛋但又哺乳幼崽？", a: 2, o: ["Pingouin", "Poisson", "Ornithorynque", "Tortue"] },
  { fr: "Quelle est la principale cause du réchauffement climatique ?", en: "What is the main cause of global warming?", zh: "全球变暖的主要原因是什么？", a: 1, o: ["Volcanisme", "Émissions de gaz à effet de serre", "Rayons cosmiques", "Perte de la couche d'ozone"] },
  { fr: "Quel gaz est responsable de l’effet de serre ?", en: "Which gas is responsible for the greenhouse effect?", zh: "哪种气体导致温室效应？", a: 0, o: ["Dioxyde de carbone", "Oxygène", "Azote", "Méthane"] },
  { fr: "Quelle saison suit l’hiver ?", en: "Which season follows winter?", zh: "冬天之后是什么季节？", a: 2, o: ["Automne", "Hiver", "Printemps", "Été"] },
  { fr: "Combien de pattes a une araignée ?", en: "How many legs does a spider have?", zh: "蜘蛛有多少条腿？", a: 1, o: ["6", "8", "10", "12"] },
  { fr: "Quel oiseau ne peut pas voler mais court très vite ?", en: "Which bird cannot fly but runs very fast?", zh: "哪种鸟不会飞但跑得很快？", a: 0, o: ["Autruche", "Pingouin", "Autour", "Épervier"] },
  { fr: "Quelle langue a le plus de locuteurs dans le monde ?", en: "Which language has the most speakers in the world?", zh: "世界上使用人数最多的语言是什么？", a: 1, o: ["Anglais", "Mandarin", "Espagnol", "Hindi"] },
  { fr: "Quelle est la monnaie du Japon ?", en: "What is the currency of Japan?", zh: "日本的货币是什么？", a: 2, o: ["Yen", "Won", "Rouble", "Riyal"] },
  { fr: "Quelle invention est attribuée à Gutenberg ?", en: "Which invention is attributed to Gutenberg?", zh: "古腾堡的发明是什么？", a: 1, o: ["Téléscope", "Imprimerie", "Horloge", "Papier"] },
  { fr: "Combien de côtés a un hexagone ?", en: "How many sides does a hexagon have?", zh: "六边形有多少条边？", a: 2, o: ["5", "6", "7", "8"] },
  { fr: "Quel métal est liquide à température ambiante ?", en: "Which metal is liquid at room temperature?", zh: "哪种金属在室温下是液体？", a: 0, o: ["Mercure", "Gallium", "Brome", "Césium"] },
  { fr: "Quelle ville est surnommée “la Ville Lumière” ?", en: "Which city is nicknamed “the City of Light”?", zh: "哪个城市被称为“光之城”？", a: 0, o: ["Paris", "Lyon", "Nice", "Lille"] },
  { fr: "Quelle est la capitale de la Suisse ?", en: "What is the capital of Switzerland?", zh: "瑞士的首都是哪里？", a: 2, o: ["Genève", "Zurich", "Berne", "Bâle"] },
  { fr: "Combien de jours compte une année bissextile ?", en: "How many days are in a leap year?", zh: "闰年有多少天？", a: 1, o: ["364", "366", "365", "367"] },
  { fr: "Quelle entreprise a créé l’iPhone ?", en: "Which company created the iPhone?", zh: "哪家公司创造了iPhone？", a: 0, o: ["Apple", "Samsung", "Google", "Microsoft"] },
  { fr: "Quelle est la formule chimique de l’eau ?", en: "What is the chemical formula of water?", zh: "水的化学式是什么？", a: 2, o: ["CO2", "H2O2", "H2O", "NaCl"] }
];

// === LOGIQUE DU QUIZ ===
let currentQuestion = 0;
let score = 0;
const total = 100;

function loadQuestion() {
  if (currentQuestion >= total) {
    showFinalScore();
    return;
  }

  const q = questions[currentQuestion];
  document.getElementById('current').textContent = currentQuestion + 1;
  document.getElementById('question').textContent = q[lang];
  
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  
  q.o.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(idx, q.a);
    optionsDiv.appendChild(btn);
  });

  document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(selected, correct) {
  const buttons = document.querySelectorAll('.option');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.style.background = '#2ecc71'; // vert
    } else if (i === selected && selected !== correct) {
      btn.style.background = '#e74c3c'; // rouge
    }
  });

  if (selected === correct) score++;

  document.getElementById('next-btn').style.display = 'inline-block';
// Récupère la langue sauvegardée
const lang = localStorage.getItem('quizLang') || 'fr';

// 100 questions variées, haut niveau, sans répétitions
const questions = [
  { fr: "En quelle année a eu lieu la Révolution française ?", en: "In what year did the French Revolution occur?", zh: "法国大革命是哪一年发生的？", a: 1, o: ["1776", "1789", "1804", "1815"] },
  { fr: "Qui était le premier empereur romain ?", en: "Who was the first Roman emperor?", zh: "谁是第一位罗马皇帝？", a: 2, o: ["César", "Auguste", "Néron", "Trajan"] },
  { fr: "Quelle reine d’Égypte fut célèbre pour sa beauté ?", en: "Which Egyptian queen was famous for her beauty?", zh: "哪位埃及女王以美貌闻名？", a: 1, o: ["Néfertiti", "Cléopâtre", "Hatchepsout", "Néfertari"] },
  { fr: "En quelle année a eu lieu la chute du mur de Berlin ?", en: "In what year did the Berlin Wall fall?", zh: "柏林墙是哪一年倒塌的？", a: 2, o: ["1987", "1989", "1991", "1993"] },
  { fr: "Qui a découvert l’Amérique en 1492 ?", en: "Who discovered America in 1492?", zh: "谁在1492年发现了美洲？", a: 0, o: ["Christophe Colomb", "Magellan", "Vasco de Gama", "Jacques Cartier"] },
  { fr: "Quel roi de France a été surnommé “le Roi Soleil” ?", en: "Which French king was nicknamed “the Sun King”?", zh: "哪位法国国王被称为“太阳王”？", a: 1, o: ["Louis XIII", "Louis XIV", "Louis XV", "Louis XVI"] },
  { fr: "Quelle guerre a opposé le Nord et le Sud des États-Unis ?", en: "Which war pitted the North against the South in the USA?", zh: "美国南北双方交战的是哪场战争？", a: 0, o: ["Guerre de Sécession", "Guerre de 1812", "Guerre civile espagnole", "Première Guerre mondiale"] },
  { fr: "Qui a fondé l’Empire mongol ?", en: "Who founded the Mongol Empire?", zh: "谁建立了蒙古帝国？", a: 2, o: ["Kubilai Khan", "Batu Khan", "Gengis Khan", "Ogodei Khan"] },
  { fr: "Quelle bataille célèbre a eu lieu en 1815 ?", en: "Which famous battle occurred in 1815?", zh: "哪场著名战役发生在1815年？", a: 1, o: ["Bataille de Trafalgar", "Bataille de Waterloo", "Bataille d'Austerlitz", "Bataille de Leipzig"] },
  { fr: "Quel pays a utilisé la bombe atomique en 1945 ?", en: "Which country used the atomic bomb in 1945?", zh: "哪个国家在1945年使用了原子弹？", a: 2, o: ["Allemagne", "URSS", "États-Unis", "Japon"] },
  { fr: "Quelle est la capitale du Canada ?", en: "What is the capital of Canada?", zh: "加拿大的首都是哪里？", a: 1, o: ["Toronto", "Ottawa", "Montréal", "Vancouver"] },
  { fr: "Quel est le plus grand désert du monde ?", en: "What is the largest desert in the world?", zh: "世界上最大的沙漠是哪个？", a: 3, o: ["Sahara", "Gobi", "Atacama", "Antarctique"] },
  { fr: "Quel fleuve traverse Paris ?", en: "Which river flows through Paris?", zh: "哪条河流经巴黎？", a: 0, o: ["Seine", "Loire", "Rhin", "Rhone"] },
  { fr: "Quel pays a pour capitale Canberra ?", en: "Which country has Canberra as its capital?", zh: "哪个国家的首都是堪培拉？", a: 0, o: ["Australie", "Nouvelle-Zélande", "Papouasie-Nouvelle-Guinée", "Fidji"] },
  { fr: "Sur quel continent se trouve le Kenya ?", en: "On which continent is Kenya located?", zh: "肯尼亚位于哪个大陆？", a: 1, o: ["Asie", "Afrique", "Amérique", "Europe"] },
  { fr: "Quelle est la plus haute montagne du monde ?", en: "What is the highest mountain in the world?", zh: "世界最高峰是哪座山？", a: 2, o: ["K2", "Mont Blanc", "Everest", "Kilimandjaro"] },
  { fr: "Quel océan borde la côte ouest des États-Unis ?", en: "Which ocean borders the west coast of the USA?", zh: "哪个海洋与美国西海岸接壤？", a: 0, o: ["Pacifique", "Atlantique", "Indien", "Arctique"] },
  { fr: "Dans quel pays se trouve le Machu Picchu ?", en: "In which country is Machu Picchu located?", zh: "马丘比丘位于哪个国家？", a: 2, o: ["Colombie", "Équateur", "Pérou", "Bolivie"] },
  { fr: "Quelle île est à la fois un pays et un continent ?", en: "Which island is both a country and a continent?", zh: "哪个岛屿既是国家又是大陆？", a: 0, o: ["Australie", "Madagascar", "Grande-Bretagne", "Irlande"] },
  { fr: "Quel est le plus long fleuve du monde ?", en: "What is the longest river in the world?", zh: "世界上最长的河流是哪条？", a: 0, o: ["Nil", "Amazone", "Mississippi", "Yangtsé"] },
  { fr: "Quelle est la planète la plus proche du Soleil ?", en: "Which planet is closest to the Sun?", zh: "哪颗行星离太阳最近？", a: 2, o: ["Vénus", "Terre", "Mercure", "Mars"] },
  { fr: "Qui a formulé la théorie de la relativité ?", en: "Who formulated the theory of relativity?", zh: "谁提出了相对论？", a: 1, o: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"] },
  { fr: "Combien de paires de chromosomes possède l’être humain ?", en: "How many pairs of chromosomes does a human have?", zh: "人类有多少对染色体？", a: 2, o: ["22", "23", "24", "25"] },
  { fr: "Quelle molécule est la principale source d’énergie des cellules ?", en: "Which molecule is the main source of energy for cells?", zh: "哪种分子是细胞的主要能量来源？", a: 0, o: ["ATP", "ADN", "ARN", "Glucose"] },
  { fr: "Quel gaz les plantes absorbent-elles pour la photosynthèse ?", en: "Which gas do plants absorb for photosynthesis?", zh: "植物在光合作用中吸收哪种气体？", a: 1, o: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"] },
  { fr: "Quel est le symbole chimique du fer ?", en: "What is the chemical symbol for iron?", zh: "铁的化学符号是什么？", a: 2, o: ["Fe", "Ir", "Fr", "Fl"] },
  { fr: "Quelle unité mesure la force électrique ?", en: "Which unit measures electrical force?", zh: "哪个单位测量电力？", a: 0, o: ["Volt", "Ohm", "Ampère", "Watt"] },
  { fr: "Quelle est la vitesse de la lumière dans le vide (en km/s) ?", en: "What is the speed of light in a vacuum (in km/s)?", zh: "光在真空中的速度是多少（km/s）？", a: 1, o: ["290 000", "300 000", "310 000", "280 000"] },
  { fr: "Qui a inventé l’ampoule électrique ?", en: "Who invented the light bulb?", zh: "谁发明了电灯泡？", a: 1, o: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"] },
  { fr: "Quelle partie du cerveau contrôle l’équilibre ?", en: "Which part of the brain controls balance?", zh: "大脑的哪个部分控制平衡？", a: 2, o: ["Cervelet", "Cerveau", "Tronc cérébral", "Moelle épinière"] },
  { fr: "Qui a écrit Les Misérables ?", en: "Who wrote Les Misérables?", zh: "谁写了《悲惨世界》？", a: 2, o: ["Victor Hugo", "Alexandre Dumas", "Émile Zola", "Gustave Flaubert"] },
  { fr: "Quel écrivain est l’auteur de 1984 ?", en: "Who is the author of 1984?", zh: "《1984》的作者是谁？", a: 1, o: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Kurt Vonnegut"] },
  { fr: "De quel pays est originaire William Shakespeare ?", en: "Which country is William Shakespeare from?", zh: "威廉·莎士比亚来自哪个国家？", a: 0, o: ["Angleterre", "Écosse", "Irlande", "Pays de Galles"] },
  { fr: "Quel roman met en scène un capitaine nommé Nemo ?", en: "Which novel features a captain named Nemo?", zh: "哪部小说中有一位叫尼莫的船长？", a: 1, o: ["Vingt mille lieues sous les mers", "Le Tour du monde en 80 jours", "Robinson Crusoé", "L’Île mystérieuse"] },
  { fr: "Qui a écrit Le Petit Prince ?", en: "Who wrote The Little Prince?", zh: "《小王子》的作者是谁？", a: 2, o: ["André Gide", "Antoine de Saint-Exupéry", "Paul Valéry", "Jean Cocteau"] },
  { fr: "Quelle héroïne de roman perd son soulier de verre ?", en: "Which fictional heroine loses her glass slipper?", zh: "哪个小说中的女主角丢了玻璃鞋？", a: 0, o: ["Cendrillon", "Blanche-Neige", "La Belle au bois dormant", "Raiponce"] },
  { fr: "Quel est le nom du détective créé par Arthur Conan Doyle ?", en: "What is the name of the detective created by Arthur Conan Doyle?", zh: "阿瑟·柯南·道尔创造的侦探叫什么名字？", a: 1, o: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Philip Marlowe"] },
  { fr: "Dans quel roman trouve-t-on le personnage de Jean Valjean ?", en: "In which novel does the character Jean Valjean appear?", zh: "哪个小说中有让·瓦尔让这个角色？", a: 0, o: ["Les Misérables", "Notre-Dame de Paris", "L'Assommoir", "Germinal"] },
  { fr: "Qui est l’auteur de L’Odyssée ?", en: "Who is the author of The Odyssey?", zh: "《奥德赛》的作者是谁？", a: 1, o: ["Sophocle", "Homère", "Virgile", "Platon"] },
  { fr: "Quel poète français a écrit Les Fleurs du mal ?", en: "Which French poet wrote Les Fleurs du mal?", zh: "哪位法国诗人写了《恶之花》？", a: 2, o: ["Paul Verlaine", "Arthur Rimbaud", "Charles Baudelaire", "Stéphane Mallarmé"] },
  { fr: "Qui a peint la Joconde ?", en: "Who painted the Mona Lisa?", zh: "谁画了蒙娜丽莎？", a: 2, o: ["Michel-Ange", "Pablo Picasso", "Léonard de Vinci", "Vincent van Gogh"] },
  { fr: "Quel peintre espagnol est célèbre pour le cubisme ?", en: "Which Spanish painter is famous for cubism?", zh: "哪位西班牙画家以立体主义闻名？", a: 1, o: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Francisco Goya"] },
  { fr: "Dans quelle ville se trouve le musée du Louvre ?", en: "In which city is the Louvre Museum located?", zh: "卢浮宫博物馆位于哪个城市？", a: 0, o: ["Paris", "Lyon", "Marseille", "Nice"] },
  { fr: "Quelle est la couleur obtenue en mélangeant du bleu et du jaune ?", en: "What color do you get by mixing blue and yellow?", zh: "蓝色和黄色混合后是什么颜色？", a: 2, o: ["Violet", "Orange", "Vert", "Rouge"] },
  { fr: "Quel artiste a peint La Nuit étoilée ?", en: "Which artist painted The Starry Night?", zh: "谁画了《星夜》？", a: 1, o: ["Paul Cézanne", "Vincent van Gogh", "Claude Monet", "Henri Matisse"] },
  { fr: "Qui a sculpté Le Penseur ?", en: "Who sculpted The Thinker?", zh: "谁雕刻了《思想者》？", a: 0, o: ["Auguste Rodin", "Michel-Ange", "Donatello", "Alberto Giacometti"] },
  { fr: "Quel mouvement artistique est associé à Claude Monet ?", en: "Which art movement is associated with Claude Monet?", zh: "哪场艺术运动与克劳德·莫奈有关？", a: 1, o: ["Surréalisme", "Impressionnisme", "Cubisme", "Fauvisme"] },
  { fr: "Quelle est la principale matière utilisée dans la sculpture de Michel-Ange ?", en: "What is the main material used in Michelangelo's sculptures?", zh: "米开朗基罗雕塑的主要材料是什么？", a: 2, o: ["Bois", "Marbre", "Argile", "Bronze"] },
  { fr: "Qui a peint Guernica ?", en: "Who painted Guernica?", zh: "谁画了《格尔尼卡》？", a: 1, o: ["Salvador Dalí", "Pablo Picasso", "Georges Braque", "Joan Miró"] },
  { fr: "Quelle est la capitale mondiale de la mode ?", en: "Which city is the world capital of fashion?", zh: "世界时尚之都是哪个城市？", a: 0, o: ["Paris", "Milan", "New York", "Londres"] },
  { fr: "Quel compositeur a écrit la Symphonie n°9 ?", en: "Which composer wrote Symphony No. 9?", zh: "哪位作曲家写了第九交响曲？", a: 1, o: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johannes Brahms", "Pyotr Ilyich Tchaikovsky"] },
  { fr: "Quel groupe a chanté Bohemian Rhapsody ?", en: "Which band sang Bohemian Rhapsody?", zh: "哪个乐队唱了《波西米亚狂想曲》？", a: 0, o: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"] },
  { fr: "Qui est surnommée “la reine de la pop” ?", en: "Who is nicknamed “the queen of pop”?", zh: "谁被称为“流行音乐女王”？", a: 1, o: ["Taylor Swift", "Madonna", "Beyoncé", "Ariana Grande"] },
  { fr: "Quel instrument a des cordes et un archet ?", en: "Which instrument has strings and a bow?", zh: "哪种乐器有弦和弓？", a: 2, o: ["Guitare", "Piano", "Violon", "Trompette"] },
  { fr: "Dans quel pays est né le reggae ?", en: "In which country was reggae born?", zh: "雷鬼音乐诞生于哪个国家？", a: 1, o: ["Cuba", "Jamaïque", "Brésil", "Haïti"] },
  { fr: "Quel chanteur est surnommé “le roi du rock’n’roll” ?", en: "Which singer is nicknamed “the king of rock’n’roll”?", zh: "哪位歌手被称为“摇滚之王”？", a: 2, o: ["Chuck Berry", "Elton John", "Elvis Presley", "Little Richard"] },
  { fr: "Qui a chanté Imagine ?", en: "Who sang Imagine?", zh: "谁唱了《想象》？", a: 0, o: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"] },
  { fr: "Quel musicien est devenu sourd à la fin de sa vie ?", en: "Which musician became deaf later in life?", zh: "哪位音乐家晚年失聪？", a: 1, o: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Liszt"] },
  { fr: "Quel instrument utilise des touches noires et blanches ?", en: "Which instrument uses black and white keys?", zh: "哪种乐器使用黑白键？", a: 0, o: ["Piano", "Violon", "Flûte", "Trombone"] },
  { fr: "Quel compositeur autrichien a écrit La Flûte enchantée ?", en: "Which Austrian composer wrote The Magic Flute?", zh: "哪位奥地利作曲家写了《魔笛》？", a: 0, o: ["Wolfgang Amadeus Mozart", "Franz Schubert", "Johann Strauss", "Gustav Mahler"] },
  { fr: "Quelle est la durée d’un match de football (sans prolongation) ?", en: "How long is a football match (without extra time)?", zh: "一场足球比赛（不含加时）有多长时间？", a: 1, o: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"] },
  { fr: "Combien de joueurs composent une équipe de basket-ball ?", en: "How many players are on a basketball team?", zh: "一支篮球队有多少名球员？", a: 2, o: ["4", "5", "6", "7"] },
  { fr: "Dans quel sport utilise-t-on une raquette et un volant ?", en: "In which sport do you use a racket and a shuttlecock?", zh: "哪种运动使用球拍和羽毛球？", a: 1, o: ["Tennis", "Badminton", "Squash", "Tennis de table"] },
  { fr: "En quelle année la France a-t-elle gagné sa première Coupe du Monde de football ?", en: "In which year did France win its first FIFA World Cup?", zh: "法国在哪一年赢得了首届世界杯？", a: 1, o: ["1986", "1998", "2006", "2018"] },
  { fr: "Quelle discipline sportive utilise des barres asymétriques ?", en: "Which sport uses uneven bars?", zh: "哪种体育项目使用高低杠？", a: 0, o: ["Gymnastique", "Tennis", "Haltérophilie", "Natation"] },
  { fr: "Quel est le sport national du Japon ?", en: "What is the national sport of Japan?", zh: "日本的国技是什么？", a: 1, o: ["Karate", "Sumo", "Judo", "Baseball"] },
  { fr: "Quel coureur a remporté le plus de Tours de France ?", en: "Which cyclist won the most Tour de France titles?", zh: "哪位自行车手赢得的环法自行车赛最多？", a: 2, o: ["Bernard Hinault", "Eddy Merckx", "Jacques Anquetil", "Miguel Indurain"] },
  { fr: "Dans quel sport utilise-t-on un club et une balle blanche ?", en: "In which sport do you use a club and a white ball?", zh: "哪种运动使用球杆和白球？", a: 1, o: ["Baseball", "Golf", "Tennis", "Cricket"] },
  { fr: "Qui est Michael Jordan ?", en: "Who is Michael Jordan?", zh: "迈克尔·乔丹是谁？", a: 2, o: ["Footballeur", "Golfeur", "Joueur de basket-ball", "Nageur"] },
  { fr: "Combien de points vaut un essai au rugby ?", en: "How many points is a try worth in rugby?", zh: "橄榄球中达阵得几分？", a: 0, o: ["5", "3", "7", "10"] },
  { fr: "Qui a réalisé Titanic ?", en: "Who directed Titanic?", zh: "谁执导了《泰坦尼克号》？", a: 1, o: ["Steven Spielberg", "James Cameron", "George Lucas", "Martin Scorsese"] },
  { fr: "Quel film met en scène un robot nommé R2-D2 ?", en: "Which movie features a robot named R2-D2?", zh: "哪部电影中有一个叫R2-D2的机器人？", a: 2, o: ["Star Trek", "Blade Runner", "Star Wars", "Terminator"] },
  { fr: "Qui joue le rôle principal dans Pirates des Caraïbes ?", en: "Who plays the main role in Pirates of the Caribbean?", zh: "谁在《加勒比海盗》中担任主角？", a: 0, o: ["Johnny Depp", "Brad Pitt", "Leonardo DiCaprio", "Tom Cruise"] },
  { fr: "Quel est le nom du magicien dans Harry Potter ?", en: "What is the name of the wizard in Harry Potter?", zh: "哈利·波特中的巫师叫什么名字？", a: 1, o: ["Ron Weasley", "Harry Potter", "Hermione Granger", "Albus Dumbledore"] },
  { fr: "Dans quel film entend-on la réplique “Je suis ton père” ?", en: "In which movie do you hear the line “I am your father”?", zh: "哪部电影中有人说“我是你父亲”？", a: 2, o: ["Star Trek", "The Matrix", "Star Wars", "Indiana Jones"] },
  { fr: "Quel studio a créé Toy Story ?", en: "Which studio created Toy Story?", zh: "哪个工作室制作了《玩具总动员》？", a: 1, o: ["Pixar", "Disney", "DreamWorks", "Blue Sky Studios"] },
  { fr: "Qui est le réalisateur du Seigneur des Anneaux ?", en: "Who directed The Lord of the Rings?", zh: "《指环王》的导演是谁？", a: 0, o: ["Peter Jackson", "George Lucas", "James Cameron", "Steven Spielberg"] },
  { fr: "Quel film a remporté l’Oscar du meilleur film en 2020 ?", en: "Which film won the Best Picture Oscar in 2020?", zh: "哪部电影获得了2020年奥斯卡最佳影片奖？", a: 2, o: ["Joker", "1917", "Parasite", "Ford v Ferrari"] },
  { fr: "Quel acteur incarne Iron Man ?", en: "Which actor plays Iron Man?", zh: "谁扮演钢铁侠？", a: 2, o: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"] },
  { fr: "Dans quelle ville se tient le Festival de Cannes ?", en: "In which city is the Cannes Film Festival held?", zh: "戛纳电影节在哪个城市举办？", a: 1, o: ["Paris", "Cannes", "Nice", "Marseille"] },
  { fr: "Quel est le plus grand mammifère terrestre ?", en: "What is the largest land mammal?", zh: "最大的陆地哺乳动物是什么？", a: 0, o: ["Éléphant", "Rhinocéros", "Girafe", "Hippopotame"] },
  { fr: "Combien de continents existe-t-il ?", en: "How many continents are there?", zh: "有多少个大陆？", a: 1, o: ["5", "7", "6", "8"] },
  { fr: "Quelle est la durée moyenne d’une rotation complète de la Terre ?", en: "What is the average duration of one full rotation of the Earth?", zh: "地球自转一周的平均时间是多少？", a: 0, o: ["24 heures", "23 heures 56 minutes", "25 heures", "24 heures 4 minutes"] },
  { fr: "Quelle est la plus grande forêt tropicale du monde ?", en: "What is the largest tropical rainforest in the world?", zh: "世界上最大的热带雨林是哪个？", a: 1, o: ["Forêt de Bornéo", "Amazonie", "Forêt du Congo", "Forêt de Valdivia"] },
  { fr: "Quel animal pond des œufs mais allaite ses petits ?", en: "Which animal lays eggs but nurses its young?", zh: "哪种动物会下蛋但又哺乳幼崽？", a: 2, o: ["Pingouin", "Poisson", "Ornithorynque", "Tortue"] },
  { fr: "Quelle est la principale cause du réchauffement climatique ?", en: "What is the main cause of global warming?", zh: "全球变暖的主要原因是什么？", a: 1, o: ["Volcanisme", "Émissions de gaz à effet de serre", "Rayons cosmiques", "Perte de la couche d'ozone"] },
  { fr: "Quel gaz est responsable de l’effet de serre ?", en: "Which gas is responsible for the greenhouse effect?", zh: "哪种气体导致温室效应？", a: 0, o: ["Dioxyde de carbone", "Oxygène", "Azote", "Méthane"] },
  { fr: "Quelle saison suit l’hiver ?", en: "Which season follows winter?", zh: "冬天之后是什么季节？", a: 2, o: ["Automne", "Hiver", "Printemps", "Été"] },
  { fr: "Combien de pattes a une araignée ?", en: "How many legs does a spider have?", zh: "蜘蛛有多少条腿？", a: 1, o: ["6", "8", "10", "12"] },
  { fr: "Quel oiseau ne peut pas voler mais court très vite ?", en: "Which bird cannot fly but runs very fast?", zh: "哪种鸟不会飞但跑得很快？", a: 0, o: ["Autruche", "Pingouin", "Autour", "Épervier"] },
  { fr: "Quelle langue a le plus de locuteurs dans le monde ?", en: "Which language has the most speakers in the world?", zh: "世界上使用人数最多的语言是什么？", a: 1, o: ["Anglais", "Mandarin", "Espagnol", "Hindi"] },
  { fr: "Quelle est la monnaie du Japon ?", en: "What is the currency of Japan?", zh: "日本的货币是什么？", a: 2, o: ["Yen", "Won", "Rouble", "Riyal"] },
  { fr: "Quelle invention est attribuée à Gutenberg ?", en: "Which invention is attributed to Gutenberg?", zh: "古腾堡的发明是什么？", a: 1, o: ["Téléscope", "Imprimerie", "Horloge", "Papier"] },
  { fr: "Combien de côtés a un hexagone ?", en: "How many sides does a hexagon have?", zh: "六边形有多少条边？", a: 2, o: ["5", "6", "7", "8"] },
  { fr: "Quel métal est liquide à température ambiante ?", en: "Which metal is liquid at room temperature?", zh: "哪种金属在室温下是液体？", a: 0, o: ["Mercure", "Gallium", "Brome", "Césium"] },
  { fr: "Quelle ville est surnommée “la Ville Lumière” ?", en: "Which city is nicknamed “the City of Light”?", zh: "哪个城市被称为“光之城”？", a: 0, o: ["Paris", "Lyon", "Nice", "Lille"] },
  { fr: "Quelle est la capitale de la Suisse ?", en: "What is the capital of Switzerland?", zh: "瑞士的首都是哪里？", a: 2, o: ["Genève", "Zurich", "Berne", "Bâle"] },
  { fr: "Combien de jours compte une année bissextile ?", en: "How many days are in a leap year?", zh: "闰年有多少天？", a: 1, o: ["364", "366", "365", "367"] },
  { fr: "Quelle entreprise a créé l’iPhone ?", en: "Which company created the iPhone?", zh: "哪家公司创造了iPhone？", a: 0, o: ["Apple", "Samsung", "Google", "Microsoft"] },
  { fr: "Quelle est la formule chimique de l’eau ?", en: "What is the chemical formula of water?", zh: "水的化学式是什么？", a: 2, o: ["CO2", "H2O2", "H2O", "NaCl"] }
];

// === LOGIQUE DU QUIZ ===
let currentQuestion = 0;
let score = 0;
const total = 100;

function loadQuestion() {
  if (currentQuestion >= total) {
    showFinalScore();
    return;
  }

  const q = questions[currentQuestion];
  document.getElementById('current').textContent = currentQuestion + 1;
  document.getElementById('question').textContent = q[lang];
  
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  
  q.o.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(idx, q.a);
    optionsDiv.appendChild(btn);
  });

  document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(selected, correct) {
  const buttons = document.querySelectorAll('.option');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.style.background = '#2ecc71'; // vert
    } else if (i === selected && selected !== correct) {
      btn.style.background = '#e74c3c'; // rouge
    }
  });

  if (selected === correct) score++;

  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}

function showFinalScore() {
  document.getElementById('quiz-box').innerHTML = `
    <h2>${getFinalMessage()}</h2>
    <div id="final-score">✅ ${score} / ${total}</div>
    <button class="main-btn" onclick="location.reload()">🔄 Rejouer</button>
    <button class="main-btn" style="background:#34495e;margin-top:10px" onclick="window.location='index.html'">🏠 Accueil</button>
  `;
}

function getFinalMessage() {
  if (lang === 'en') {
    if (score >= 90) return "Brilliant! You're a genius!";
    if (score >= 70) return "Great job! You know a lot!";
    if (score >= 50) return "Not bad! Keep learning!";
    return "Oops! Try again to improve!";
  } else if (lang === 'zh') {
    if (score >= 90) return "太棒了！你是个天才！";
    if (score >= 70) return "干得好！你知道很多！";
    if (score >= 50) return "还不错！继续学习吧！";
    return "哎呀！再试一次吧！";
  } else {
    if (score >= 90) return "Brillant ! Vous êtes un génie !";
    if (score >= 70) return "Excellent ! Vous en connaissez beaucoup !";
    if (score >= 50) return "Pas mal ! Continuez à apprendre !";
    return "Oups ! Réessayez pour vous améliorer !";
  }
}

// Démarrer
loadQuestion();
