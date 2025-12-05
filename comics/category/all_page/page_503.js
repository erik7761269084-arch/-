// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5201,
        "title": "[だいじ] 傍惚れにつき (COMIC快楽天 2022年3月号) [MJK-22-Z2772]",
        "cover": "https://telegra.ph/file/f69ab1f3406580a2f5074.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5201"
    },
    {
        "IDcode": 5202,
        "title": "[ごさいじ] 卒業reward ~fin~ (COMIC快楽天 2021年3月号) [MJK-22-Z2762]",
        "cover": "https://telegra.ph/file/ff111f25bd3d3044932f1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5202"
    },
    {
        "IDcode": 5203,
        "title": "[月蜥蜴] 免許快伝 (COMIC快楽天ビースト 2017年2月号) [MJK-22-Z2839]",
        "cover": "https://telegra.ph/file/85f9ab453690d5e8c315c.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5203"
    },
    {
        "IDcode": 5204,
        "title": "(C95) 高飛車巨乳お嬢様と秘密のえっち",
        "cover": "https://telegra.ph/file/85f9ab453690d5e8c315c.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5204"
    },
    {
        "IDcode": 5205,
        "title": "(C95) 知的文学美少女とイキまくりお勉強♥えっち",
        "cover": "https://telegra.ph/file/58b56ff29994ecfe65bca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5205"
    },
    {
        "IDcode": 5206,
        "title": "(C96) 隣の儚げ少女とはじめてえっち",
        "cover": "https://telegra.ph/file/2019bb2a942e7ff1fca89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5206"
    },
    {
        "IDcode": 5207,
        "title": "(C96) 義妹と一晩中お留守番えっち",
        "cover": "https://telegra.ph/file/1e353a6f1ddabebf8278e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5207"
    },
    {
        "IDcode": 5208,
        "title": "(C97) 自称ビッチ (嘘) の幼馴染に手加減なしえっち",
        "cover": "https://telegra.ph/file/8aaece7bbbb072267c47c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5208"
    },
    {
        "IDcode": 5209,
        "title": "(C99) 先輩と限界まで寸止めイジワルえっち",
        "cover": "https://telegra.ph/file/24cd40e2f1435ecbf115a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5209"
    },
    {
        "IDcode": 5210,
        "title": "(C100) 男慣れしたい従姉妹にいっぱい気持ちいいえっち",
        "cover": "https://telegra.ph/file/804318252d7caea56d195.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5210"
    },
    {
        "IDcode": 5211,
        "title": "(C101) ギャル彼女と過激AVのマネしたら大変なことになったえっち",
        "cover": "https://telegra.ph/file/565a9589cc38c7e4bc345.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5211"
    },
    {
        "IDcode": 5212,
        "title": "(COMIC1☆14) 交際半年目の彼女と放課後とろとろえっち",
        "cover": "https://telegra.ph/file/fe8a652cd0f0e84e95534.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5212"
    },
    {
        "IDcode": 5213,
        "title": "(COMIC1☆18) 友達のようなオタク後輩と泥酔えっち",
        "cover": "https://telegra.ph/file/224bd2496f7b5f5b3cc82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5213"
    },
    {
        "IDcode": 5214,
        "title": "(エアコミケ2) 性欲強めな彼女と禁欲解禁連続射精えっち",
        "cover": "https://telegra.ph/file/7b9b87741bbb96747c6ac.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5214"
    },
    {
        "IDcode": 5215,
        "title": "(サンクリ2018 Autumn) 近所のツンツン妹と無表情姉に迫られえっち",
        "cover": "https://telegra.ph/file/13406c0238dc32695d1a1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5215"
    },
    {
        "IDcode": 5216,
        "title": "(サンクリ2018 Summer) ジト目メイドさんとラブラブえっち",
        "cover": "https://telegra.ph/file/623bdb705cc2dc263c265.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5216"
    },
    {
        "IDcode": 5217,
        "title": "(C100) ジト目メイドさんとラブラブえっち フルカラー版",
        "cover": "https://telegra.ph/file/e1ee0fb062e106bb59324.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5217"
    },
    {
        "IDcode": 5218,
        "title": "(サンクリ2019 Spring) キツめな着物新妻と京言葉えっち",
        "cover": "https://telegra.ph/file/f4ada0fca1e8453a5d47d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5218"
    },
    {
        "IDcode": 5219,
        "title": "(サンクリ2019 Summer) ツンデレ彼女が素直になるまでえっち",
        "cover": "https://telegra.ph/file/833e17a20266224c453e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5219"
    },
    {
        "IDcode": 5220,
        "title": "(第2回GWスプリングフェスタ) 彼女と究極のいちゃいちゃえっち",
        "cover": "https://telegra.ph/file/a3400addb5876727f3f6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5220"
    },
    {
        "IDcode": 5221,
        "title": "[KENTO (KENTO OKAYAMA)] 潮吹きロリは無表情 ～魔法学校の連続絶頂生活～  v2",
        "cover": "https://telegra.ph/file/24a4edcde3e83a9dbc9ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5221"
    },
    {
        "IDcode": 5222,
        "title": "[2021.03] [三崎] 国語・算数・理科・風俗 [不可视汉化]",
        "cover": "https://telegra.ph/file/ce67466983731fe72d62f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5222"
    },
    {
        "IDcode": 5223,
        "title": "[甜族星人出资x一只麻利的鸽子汉化] [きのこのみ (kino)] 放課後 バニーガール",
        "cover": "https://telegra.ph/file/ee522a9f4ba49733a953c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5223"
    },
    {
        "IDcode": 5224,
        "title": "[きのこのみ (konomi)] TSあきら君の性生活",
        "cover": "https://telegra.ph/file/2fba4cc2884460e39c408.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5224"
    },
    {
        "IDcode": 5225,
        "title": "[きのこのみ (konomi)] TSあきら君の性生活 2",
        "cover": "https://telegra.ph/file/d2ed85d901510a55f3972.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5225"
    },
    {
        "IDcode": 5226,
        "title": "[きのこのみ (konomi)] TSあきら君の性生活 3",
        "cover": "https://telegra.ph/file/9560bd450e3d9ea17abd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5226"
    },
    {
        "IDcode": 5227,
        "title": "[きのこのみ (konomi)] TSあきら君の性生活 4",
        "cover": "https://telegra.ph/file/7fcc2da7f89d1decb587c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5227"
    },
    {
        "IDcode": 5228,
        "title": "[きのこのみ (konomi)] TSあきら君の性生活 5",
        "cover": "https://telegra.ph/file/5adf54baf6a9da11279d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5228"
    },
    {
        "IDcode": 5229,
        "title": "[きのこのみ (konomi)] TSあきら君の性生活 6",
        "cover": "https://telegra.ph/file/d0e1f96da20c6beae648e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5229"
    },
    {
        "IDcode": 5230,
        "title": "[きのこのみ (konomi)] TSあきら君の性生活  7",
        "cover": "https://telegra.ph/file/be2ef3d55212d05cd27e5.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5230"
    },
    {
        "IDcode": 5231,
        "title": "[一只麻利的鸽子汉化] [ヨルニネル (ヨルネ)] 抜くのも手伝ってくれる同級生[1/5]",
        "cover": "https://telegra.ph/file/3f4f66b173e6f453def70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5231"
    },
    {
        "IDcode": 5232,
        "title": "[甜族星人出资x一只麻利的鸽子汉化] (C101) [わつき屋 (わつきるみ)] RE:COLORS!#03(仮) (ゼノブレイド3)",
        "cover": "https://telegra.ph/file/bae2a3a5467202f251bb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5232"
    },
    {
        "IDcode": 5233,
        "title": "(C94) 僕はちいさなサキュバスのしもべ [山樱汉化]",
        "cover": "https://telegra.ph/file/0efeccd46abbaa5e5fb3a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5233"
    },
    {
        "IDcode": 5234,
        "title": "(C95) 甘リリス [買動漫授權中文版]",
        "cover": "https://telegra.ph/file/bd629fb022fb867857cce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5234"
    },
    {
        "IDcode": 5235,
        "title": "(C95) 淫魔のレシピ",
        "cover": "https://telegra.ph/file/54ca573a108cff8a96550.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5235"
    },
    {
        "IDcode": 5236,
        "title": "(C96) 全部君のせいだ。I [買動漫授權中文版]",
        "cover": "https://telegra.ph/file/86ebdfa80529f2654091d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5236"
    },
    {
        "IDcode": 5237,
        "title": "(C97) りりすぱ [山樱汉化]",
        "cover": "https://telegra.ph/file/b0f97d3c7a4e02bb2fb05.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5237"
    },
    {
        "IDcode": 5238,
        "title": "(C97) リリィスパイス [買動漫授權中文版]",
        "cover": "https://telegra.ph/file/ba6d563de6d3d315039c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5238"
    },
    {
        "IDcode": 5239,
        "title": "(C99) C99おまけ本 すとらサンタとあそぼう!",
        "cover": "https://telegra.ph/file/0125e19483221b3dc5fd0.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5239"
    },
    {
        "IDcode": 5240,
        "title": "(C97) 全部君のせいだ。II [買動漫授權中文版]",
        "cover": "https://telegra.ph/file/51afd27357fa015c8c3e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5240"
    },
    {
        "IDcode": 5241,
        "title": "(C99) 全部君のせいだ。III [转尾巴猫汉化]",
        "cover": "https://telegra.ph/file/1858e66019ac5c69a5c3e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5241"
    },
    {
        "IDcode": 5242,
        "title": "(C100) クロムちゃんの夏休み ~セミおじさん編~ [SAN个人汉化] [修正版]",
        "cover": "https://telegra.ph/file/43235931a4ab99a92a3be.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5242"
    },
    {
        "IDcode": 5243,
        "title": "(C100) 甘みるく -サキュママと夏休み-",
        "cover": "https://telegra.ph/file/896ef1eb9964815358622.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5243"
    },
    {
        "IDcode": 5244,
        "title": "(C89) [正経同人 (As109)] 通販エルフ [0/181][363]",
        "cover": "https://telegra.ph/file/edea2c303f5525e624def.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5244"
    },
    {
        "IDcode": 5245,
        "title": "少女と裏路地1",
        "cover": "https://telegra.ph/file/a35192453030e55e62ac9.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5245"
    },
    {
        "IDcode": 5246,
        "title": "少女と裏路地2",
        "cover": "https://telegra.ph/file/c879a288ce79b0952cd81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5246"
    },
    {
        "IDcode": 5247,
        "title": "少女と裏路地3",
        "cover": "https://telegra.ph/file/437370ac5c3f9767cb003.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5247"
    },
    {
        "IDcode": 5248,
        "title": "(C91) 少女と裏路地4[漫动版]",
        "cover": "https://telegra.ph/file/de1205396255384e7aa7e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5248"
    },
    {
        "IDcode": 5249,
        "title": "少女と裏路地终[漫动版]",
        "cover": "https://telegra.ph/file/28acac420c8991a64bb0d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5249"
    },
    {
        "IDcode": 5250,
        "title": "(同人CG集) [As109] 少女と裏路地 番外 夏のあること",
        "cover": "https://telegra.ph/file/bc2f46b2f5c30abe8d3c1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5250"
    },
    {
        "IDcode": 5251,
        "title": "(C94) [正経同人 (As109)] CITY no.109 アリス編・序",
        "cover": "https://telegra.ph/file/684a618d26a146cbfa09b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5251"
    },
    {
        "IDcode": 5253,
        "title": "(C97) [Seikei Doujin (As109)] Morinaka no Aru Koto",
        "cover": "https://telegra.ph/file/1733076a832511d70238f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5253"
    },
    {
        "IDcode": 5254,
        "title": "[MUK] プチ パコ - ゆりか、トイレで兄パコしました",
        "cover": "https://telegra.ph/file/1143ed1c346fa244ad1f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5254"
    },
    {
        "IDcode": 5255,
        "title": "[さいおがうま] とろネコメイドのエレーナさん (COMIC 快楽天ビースト 2023年5月号) 中文翻譯",
        "cover": "https://telegra.ph/file/ebf794e6028944315ac81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5255"
    },
    {
        "IDcode": 5256,
        "title": "[ニぎりうさぎ]布団かぶっテ寝入り、既成事実を作りたい女戦士ちゃん[中国翻译]",
        "cover": "https://telegra.ph/file/36bf4db02f19144e17c5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5256"
    },
    {
        "IDcode": 5257,
        "title": "[わさびもち (ももさわ)] 甘雨ちゃんが仕事と性欲処理をお手伝いする本。 (原神)",
        "cover": "https://telegra.ph/file/d626a98ab4bbe11e372ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5257"
    },
    {
        "IDcode": 5258,
        "title": "（C99) [もすまん (へんりいだ)] メスガキ様の言うとおり",
        "cover": "https://telegra.ph/file/ec09c3944f393346e74ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5258"
    },
    {
        "IDcode": 5259,
        "title": "[すずきとと] 榛名と結婚初夜 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/409a2ec4332ae7aea8a8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5259"
    },
    {
        "IDcode": 5260,
        "title": "[芽の里 (めりーべ)] 生徒のためなら仕方ない (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/8cbfddcb45591d6e0d01b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5260"
    },
    {
        "IDcode": 5261,
        "title": "(例大祭19) [緋比ユキ] 聞屋と尼僧と〇んぽ (東方Project)",
        "cover": "https://telegra.ph/file/c57715bddca1595df1c57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5261"
    },
    {
        "IDcode": 5262,
        "title": "[Eonsang] AK12 manga (少女前線)",
        "cover": "https://telegra.ph/file/39b21af8b3192212f6f05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5262"
    },
    {
        "IDcode": 5263,
        "title": "[Eonsang] FFM Manga (Girls' Frontline) [中国翻译] [Decensored]",
        "cover": "https://telegra.ph/file/1cf4959db9402b190e574.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5263"
    },
    {
        "IDcode": 5264,
        "title": "[Eonsang] MDR Manga(少女前线)  [大受气包烤RO组汉化][Decensored]",
        "cover": "https://telegra.ph/file/71aaf87927aa68768516d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5264"
    },
    {
        "IDcode": 5265,
        "title": "[Eonsang] 용돈낭비금지♥",
        "cover": "https://telegra.ph/file/6274ea8e68217f5df2413.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5265"
    },
    {
        "IDcode": 5266,
        "title": "[TRY] 聽說新任風紀委員長胸部很大這回事   [Non-glasses]",
        "cover": "https://telegra.ph/file/63767c652f6fe93afb05b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5266"
    },
    {
        "IDcode": 5267,
        "title": "[あるるもらんど (あるるも)] 千鳥ミチルの房中術 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/072765ecc79eaf2f2a690.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5267"
    },
    {
        "IDcode": 5268,
        "title": "[きのもと杏] ふたり一緒に♡ (COMIC LO 2023年7月号)",
        "cover": "https://telegra.ph/file/b3e0edd0a2ff1379e0830.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5268"
    },
    {
        "IDcode": 5269,
        "title": "[よしおエレキ] みんなのマリア ‐貴族令嬢の下半身が最強過ぎで、誰も相手にならないんですけど？",
        "cover": "https://telegra.ph/file/7c10836c8af92e667c925.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5269"
    },
    {
        "IDcode": 5270,
        "title": "[だめなひ堂 (だめなひと)] 色は匂へど (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/bc92bc0e49945d879839b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5270"
    },
    {
        "IDcode": 5271,
        "title": "[鉄槌ソール (のあ)] Re (ヘルテイカー)",
        "cover": "https://telegra.ph/file/0787fc57ebb2893470495.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5271"
    },
    {
        "IDcode": 5272,
        "title": "[創攻線 (ぴざぬこ)] 聖と性な妹と。",
        "cover": "https://telegra.ph/file/5110a8e93c44b12b00116.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5272"
    },
    {
        "IDcode": 5273,
        "title": "[ふくらすずめ (砂場すずめ)] P活女子がちんぽにおちるまで",
        "cover": "https://telegra.ph/file/8ffa4f1c416f22e4ec54e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5273"
    },
    {
        "IDcode": 5274,
        "title": "[満開開花] デリバリーメイト第一章 ～クラス全員俺のデリ嬢",
        "cover": "https://telegra.ph/file/b9e40324f546c5b3728eb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5274"
    },
    {
        "IDcode": 5275,
        "title": "[満開開花] 搾乳＆搾精！絞りあい❤️ダイエットコース [中国翻译]",
        "cover": "https://telegra.ph/file/4de99b33188bb2cb5258c.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5275"
    },
    {
        "IDcode": 5276,
        "title": "[満開開花] 24時間いつでも 家族シリー",
        "cover": "https://telegra.ph/file/4f085a0bc111899e8c37e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5276"
    },
    {
        "IDcode": 5277,
        "title": "[満開開花] ママの目の前で姉妹丼を堪能しちゃうオジサン 【催眠家族シリーズ】",
        "cover": "https://telegra.ph/file/88d523c730be3c8034487.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5277"
    },
    {
        "IDcode": 5278,
        "title": "[満開開花] 幼馴染のロリお姉ちゃんに似た動画が…",
        "cover": "https://telegra.ph/file/b834a8e5a2340ad27c9ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5278"
    },
    {
        "IDcode": 5279,
        "title": "[白杨X脱氧核糖汉化] [田屋沼屋] 恋と魔法とえとせとら",
        "cover": "https://telegra.ph/file/afec6a476a13f10547a42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5279"
    },
    {
        "IDcode": 5280,
        "title": "[田屋沼屋 (たぬま)]今日から悪い子。",
        "cover": "https://telegra.ph/file/d5b8e4171df778d32810b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5280"
    },
    {
        "IDcode": 5281,
        "title": "(C99) キヴォトス子作り活動報告書 (ブルーアーカイブ) [Jumppmuj個人漢化]",
        "cover": "https://telegra.ph/file/f40f049b272582bbd9080.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5281"
    },
    {
        "IDcode": 5282,
        "title": "(C102) キヴォトス子作り活动报告书第 2 报 (ブルーアーカイブ) [Jumppmuj 个人汉化]",
        "cover": "https://telegra.ph/file/c2f56553673bc65e338f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5282"
    },
    {
        "IDcode": 5283,
        "title": "今日から悪い子。続 [山樱汉化]",
        "cover": "https://telegra.ph/file/deeadca62e075cac62266.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5283"
    },
    {
        "IDcode": 5284,
        "title": "(C96) 無音の僥倖",
        "cover": "https://telegra.ph/file/311c4993d07a393e26980.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5284"
    },
    {
        "IDcode": 5285,
        "title": "[毛玉牛乳 (玉之けだま)] 血姫夜交-真祖の姫は発情しているっ！-",
        "cover": "https://telegra.ph/file/0bc0176e3c7cdab188c1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5285"
    },
    {
        "IDcode": 5286,
        "title": "[禁漫漢化組] (C103) [毛玉牛乳 (玉之けだま)] 血姫夜交-真祖の姫は発情しているっ！2",
        "cover": "https://telegra.ph/file/db6cd8d490a98c173c6ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5286"
    },
    {
        "IDcode": 5287,
        "title": "[自购]天然抖S淫魔們的無限榨精地獄【Tiny Evil】",
        "cover": "https://telegra.ph/file/b00f0e0de3c8c312af4c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5287"
    },
    {
        "IDcode": 5288,
        "title": "[自购]Tiny Evil 3 （繁體中文版）",
        "cover": "https://telegra.ph/file/5d6d315383e7f023d4995.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5288"
    },
    {
        "IDcode": 5289,
        "title": "[2020.12] 隣人は有名配信者1人目 (エアコミケ2) [買動漫授權中文版]",
        "cover": "https://telegra.ph/file/4d26edbebdaf4c79cd323.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5289"
    },
    {
        "IDcode": 5290,
        "title": "[2022.08] 隣人は有名配信者2人目 (C100)",
        "cover": "https://telegra.ph/file/899f0a1002c5d0293bc2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5290"
    },
    {
        "IDcode": 5291,
        "title": "[2022.12] 邻人は有名配信者3人目 (C101) [汉化者茫然]",
        "cover": "https://telegra.ph/file/3d31508855b273ad7d1a6.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5291"
    },
    {
        "IDcode": 5292,
        "title": "[2023.08] 隣人は有名配信者4人目 (C102) [一〇〇五个人汉化]",
        "cover": "https://telegra.ph/file/73df05efd802046da1051.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5292"
    },
    {
        "IDcode": 5293,
        "title": "(C103) [ネコゴショ (ヤナギユウ)] NekoNekoNote11 放課後体育倉庫でクラスメイトと汗だくこどもえっち",
        "cover": "https://telegra.ph/file/58b32c15393a9d3092c28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5293"
    },
    {
        "IDcode": 5294,
        "title": "[いちのや (甘露アメ)] 清楚なエロメスガキJKになんて敗けるはずないが_※敗けます",
        "cover": "https://telegra.ph/file/2d7693b2caef4b5aa189b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5294"
    },
    {
        "IDcode": 5295,
        "title": "[甘露アメ] うちには幽霊さんがいます",
        "cover": "https://telegra.ph/file/273f32a11eeb7c1f45a1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5295"
    },
    {
        "IDcode": 5296,
        "title": "[いちのや (甘露アメ)] 清楚なエロメスガキJKになんて敗けるはずないが_※敗けます",
        "cover": "https://telegra.ph/file/2d7693b2caef4b5aa189b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5296"
    },
    {
        "IDcode": 5297,
        "title": "[まめの木 (豆六)] 相視相愛。",
        "cover": "https://telegra.ph/file/afb694b22588fe3b9965c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5297"
    },
    {
        "IDcode": 5298,
        "title": "(C103) (だにまるstudio) 元カレとはできなかったセックスしてもいいですか_",
        "cover": "https://telegra.ph/file/b2e2759144e651d1451b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5298"
    },
    {
        "IDcode": 5299,
        "title": "(C99) 田舎にはこれくらいしか娯楽がない 1 [阿聰重嵌]",
        "cover": "https://telegra.ph/file/6c6a27c477f0f42ac7339.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5299"
    },
    {
        "IDcode": 5300,
        "title": "(C100) 田舎にはこれくらいしか娯楽がない 2 [阿聰重嵌]",
        "cover": "https://telegra.ph/file/9e01190d26cacc9e0c1e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5300"
    },
    {
        "IDcode": 5301,
        "title": "(C101) 田舎にはこれくらいしか娯楽がない 3 [阿聰重嵌]",
        "cover": "https://telegra.ph/file/45022588eb658e3d9e850.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5301"
    }
];
