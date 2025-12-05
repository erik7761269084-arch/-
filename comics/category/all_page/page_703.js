// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 7201,
        "title": "異世界でロリエルフ助けたらこうなった",
        "cover": "https://telegra.ph/file/9701b026e62f754656f45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7201"
    },
    {
        "IDcode": 7202,
        "title": "操る男～全ての女を思い通りに～",
        "cover": "https://telegra.ph/file/0ee14b3476e15e5861934.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7202"
    },
    {
        "IDcode": 7203,
        "title": "少女婚活時代－夫婦の時間は放課後から",
        "cover": "https://telegra.ph/file/cef6af120e24ee01a21fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7203"
    },
    {
        "IDcode": 7204,
        "title": "魔物喰らいの鎧",
        "cover": "https://telegra.ph/file/d59ecb8d446285dd5b010.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7204"
    },
    {
        "IDcode": 7205,
        "title": "肉欲の受精",
        "cover": "https://telegra.ph/file/eb57bedec61bcb36fc9b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7205"
    },
    {
        "IDcode": 7206,
        "title": "おいでませ・・・♥",
        "cover": "https://telegra.ph/file/b7484e4f03957b6221043.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7206"
    },
    {
        "IDcode": 7207,
        "title": "チャイナオ～クション",
        "cover": "https://telegra.ph/file/2b16f0ec9765f2ba886cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7207"
    },
    {
        "IDcode": 7208,
        "title": "女勇者エリナ ~鎧の奥で蠢く欲望~",
        "cover": "https://telegra.ph/file/41d84ea0884de491912d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7208"
    },
    {
        "IDcode": 7209,
        "title": "ぱいドルマスター!2",
        "cover": "https://telegra.ph/file/a56017e8cb7e0a208f65a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7209"
    },
    {
        "IDcode": 7210,
        "title": "TAKEN!!!!",
        "cover": "https://telegra.ph/file/71f7fd829ba168359ba52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7210"
    },
    {
        "IDcode": 7211,
        "title": "[夏木きよひと] 昔の傷 これからの傷",
        "cover": "https://telegra.ph/file/73d43e7fe421adf395278.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7211"
    },
    {
        "IDcode": 7212,
        "title": "すてっぷ☆おーばー",
        "cover": "https://telegra.ph/file/0fbe3e15c91bec0cbdb0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7212"
    },
    {
        "IDcode": 7213,
        "title": "太陽の憧れ",
        "cover": "https://telegra.ph/file/42347d17b56c3648163be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7213"
    },
    {
        "IDcode": 7214,
        "title": "マザーコレクション",
        "cover": "https://telegra.ph/file/7db8629dd57ad306a4a25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7214"
    },
    {
        "IDcode": 7215,
        "title": "どうしようもない俺に降りてきた天使",
        "cover": "https://telegra.ph/file/a1929221a706930fd92c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7215"
    },
    {
        "IDcode": 7216,
        "title": "高慢と偏愛",
        "cover": "https://telegra.ph/file/c1236c0bcb778308f2115.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7216"
    },
    {
        "IDcode": 7217,
        "title": "巫女少年～",
        "cover": "https://telegra.ph/file/2b5a05e4f8b25ab38edc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7217"
    },
    {
        "IDcode": 7218,
        "title": "女子力!",
        "cover": "https://telegra.ph/file/b26ef5fe702bb4ca13481.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7218"
    },
    {
        "IDcode": 7219,
        "title": "悪魔百禍 〜淫蕩の申し子達",
        "cover": "https://telegra.ph/file/c6fa4996058cf9a6aa9e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7219"
    },
    {
        "IDcode": 7220,
        "title": "きみだけのリボン",
        "cover": "https://telegra.ph/file/9a54621d981f4cb5eec00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7220"
    },
    {
        "IDcode": 7221,
        "title": "籠~",
        "cover": "https://telegra.ph/file/4d9efef8dbefea9778871.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7221"
    },
    {
        "IDcode": 7222,
        "title": "プ痴♥トモ２",
        "cover": "https://telegra.ph/file/194d65f7717310e121b93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7222"
    },
    {
        "IDcode": 7223,
        "title": "酔って火に入る他人の妻",
        "cover": "https://telegra.ph/file/6c7baad0bd29927d331ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7223"
    },
    {
        "IDcode": 7224,
        "title": "甥っ子を預かってみた！",
        "cover": "https://telegra.ph/file/b5ccd5ce12752442b65ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7224"
    },
    {
        "IDcode": 7225,
        "title": "Arms Live",
        "cover": "https://telegra.ph/file/93ae39da0dbfbd87a9285.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7225"
    },
    {
        "IDcode": 7226,
        "title": "女戦士フレアと淫呪の鎧",
        "cover": "https://telegra.ph/file/1f552b12b7f99e5783db4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7226"
    },
    {
        "IDcode": 7227,
        "title": "サキュバスお姉さんと淫紋契約",
        "cover": "https://telegra.ph/file/7a3e64f8fc4c4bbb4b1b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7227"
    },
    {
        "IDcode": 7228,
        "title": "性的えでゅけーしょん",
        "cover": "https://telegra.ph/file/895e1a86842db95c0bb4b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7228"
    },
    {
        "IDcode": 7229,
        "title": "コスッて男の娘",
        "cover": "https://telegra.ph/file/8fb34f14f4ec0c940c8ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7229"
    },
    {
        "IDcode": 7230,
        "title": "続・かのまま",
        "cover": "https://telegra.ph/file/f0e9f2b812b6dd97d7909.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7230"
    },
    {
        "IDcode": 7231,
        "title": "ふぉーりんらぶっ！",
        "cover": "https://telegra.ph/file/d30114d894c225cdf4784.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7231"
    },
    {
        "IDcode": 7232,
        "title": "パパの面影 + パパの面影 プラス",
        "cover": "https://telegra.ph/file/f4e5711a4f14f2d09249b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7232"
    },
    {
        "IDcode": 7233,
        "title": "欲望パンドラ",
        "cover": "https://telegra.ph/file/3736276fdc9c4bacf510e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7233"
    },
    {
        "IDcode": 7234,
        "title": "プチスク妻サマ",
        "cover": "https://telegra.ph/file/59b35ec1cbafb1d08c6f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7234"
    },
    {
        "IDcode": 7235,
        "title": "放課後ももいろサロン",
        "cover": "https://telegra.ph/file/044a90ea2bcc062f14796.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7235"
    },
    {
        "IDcode": 7236,
        "title": "懲罰アナル指導",
        "cover": "https://telegra.ph/file/7d5b10231bc7d6aab40d8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7236"
    },
    {
        "IDcode": 7237,
        "title": "少年と土地神の一夜",
        "cover": "https://telegra.ph/file/471afe5024f98bee55b75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7237"
    },
    {
        "IDcode": 7238,
        "title": "VR調教ゲーム",
        "cover": "https://telegra.ph/file/2d712275d225026754151.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7238"
    },
    {
        "IDcode": 7239,
        "title": "エロ本代わりのお母さん",
        "cover": "https://telegra.ph/file/74fab7f978345a14080fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7239"
    },
    {
        "IDcode": 7240,
        "title": "ヒップスイミング",
        "cover": "https://telegra.ph/file/6f3544169e5b0a272d8ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7240"
    },
    {
        "IDcode": 7241,
        "title": "雌母輪姦",
        "cover": "https://telegra.ph/file/78c2c4d8ea352626be166.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7241"
    },
    {
        "IDcode": 7242,
        "title": "最後の夜",
        "cover": "https://telegra.ph/file/a6d00b67f233813ddf2e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7242"
    },
    {
        "IDcode": 7243,
        "title": "Wink",
        "cover": "https://telegra.ph/file/c19e9b820cd3083e166c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7243"
    },
    {
        "IDcode": 7244,
        "title": "トイレの花子くん",
        "cover": "https://telegra.ph/file/3d9738aad4c916da62712.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7244"
    },
    {
        "IDcode": 7245,
        "title": "よりみち",
        "cover": "https://telegra.ph/file/ae9dc9d9af6b6ca66ca58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7245"
    },
    {
        "IDcode": 7246,
        "title": "雪乃先生の性教育",
        "cover": "https://telegra.ph/file/df8543a0844095475be22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7246"
    },
    {
        "IDcode": 7247,
        "title": "相姦の夜 (全裸淫交宣言!!)",
        "cover": "https://telegra.ph/file/4944825587f5a87be1aff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7247"
    },
    {
        "IDcode": 7248,
        "title": "ディアス提督の受難",
        "cover": "https://telegra.ph/file/5131de5735956f8db2ae6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7248"
    },
    {
        "IDcode": 7249,
        "title": "夏と箱",
        "cover": "https://telegra.ph/file/99b9d6543519cc0dee367.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7249"
    },
    {
        "IDcode": 7250,
        "title": "異文化 for YOU!",
        "cover": "https://telegra.ph/file/11ef148d38e1dc9438354.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7250"
    },
    {
        "IDcode": 7251,
        "title": "むっつりびっち",
        "cover": "https://telegra.ph/file/fde27d24d9741d18a5e72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7251"
    },
    {
        "IDcode": 7252,
        "title": "お母さんからの俺の十七歳のプレゼント",
        "cover": "https://telegra.ph/file/5aa3c38e839e3051185d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7252"
    },
    {
        "IDcode": 7253,
        "title": "TAKEN!!!!",
        "cover": "https://telegra.ph/file/179c2d75dac2b268c3e69.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7253"
    },
    {
        "IDcode": 7254,
        "title": "吐精懺悔部屋",
        "cover": "https://telegra.ph/file/fa1e612dd6ace5447076a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7254"
    },
    {
        "IDcode": 7255,
        "title": "僕の忠誠は最後の一滴まで",
        "cover": "https://telegra.ph/file/c84adecd92e7f6dde1025.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7255"
    },
    {
        "IDcode": 7256,
        "title": "動物報恩",
        "cover": "https://telegra.ph/file/6898b303d66c2e3231f49.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7256"
    },
    {
        "IDcode": 7257,
        "title": "別冊コミックアンリアル モンスター娘パラダイス",
        "cover": "https://telegra.ph/file/74ed0aff91b4b0a541db3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7257"
    },
    {
        "IDcode": 7258,
        "title": "楽しくエッチに生きればいいのさっ",
        "cover": "https://telegra.ph/file/67f931d4c98ff33cb19cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7258"
    },
    {
        "IDcode": 7259,
        "title": "のーまんず♥あいらんど",
        "cover": "https://telegra.ph/file/06d3c7d6819f4ea803245.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7259"
    },
    {
        "IDcode": 7260,
        "title": "咬合",
        "cover": "https://telegra.ph/file/3a13e60f530f46507f7b7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7260"
    },
    {
        "IDcode": 7261,
        "title": "秋のおちんちん狩り",
        "cover": "https://telegra.ph/file/9f2a6cbe9c5b44f771e57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7261"
    },
    {
        "IDcode": 7262,
        "title": "校内限定♥手コキチケット",
        "cover": "https://telegra.ph/file/92b05aa1260dea4e55205.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7262"
    },
    {
        "IDcode": 7263,
        "title": "ラッキー❤ゆい",
        "cover": "https://telegra.ph/file/729ab708a1f0a8eef4d0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7263"
    },
    {
        "IDcode": 7264,
        "title": "ナギ、行かないで! ~狼と少女~",
        "cover": "https://telegra.ph/file/676a7e9c5d98b95f2966f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7264"
    },
    {
        "IDcode": 7265,
        "title": "家庭内恋愛",
        "cover": "https://telegra.ph/file/c083849b74d53a0688730.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7265"
    },
    {
        "IDcode": 7266,
        "title": "空手姉ちゃん悶絶睡眠組手",
        "cover": "https://telegra.ph/file/ba8f7dd276c3ec4b1d470.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7266"
    },
    {
        "IDcode": 7267,
        "title": "パパ活JKのエッチなバイト",
        "cover": "https://telegra.ph/file/95c0cc08fecc39cb0783f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7267"
    },
    {
        "IDcode": 7268,
        "title": "変わってしまった彼女と夏の思い出",
        "cover": "https://telegra.ph/file/94bb3c85197ef18a3b21a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7268"
    },
    {
        "IDcode": 7269,
        "title": "少年チチデル",
        "cover": "https://telegra.ph/file/6f4444561f2c8d67f0bbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7269"
    },
    {
        "IDcode": 7270,
        "title": "触らぬ神に祟られたい",
        "cover": "https://telegra.ph/file/b3c50c8e949fcb17f694b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7270"
    },
    {
        "IDcode": 7271,
        "title": "甘いからかい",
        "cover": "https://telegra.ph/file/e529f445764e6eeea4c62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7271"
    },
    {
        "IDcode": 7272,
        "title": "ランジェリーな男の娘",
        "cover": "https://telegra.ph/file/a5bff5a075c0cb119de4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7272"
    },
    {
        "IDcode": 7273,
        "title": "姉体験女学寮",
        "cover": "https://telegra.ph/file/825c2e6c73ca65c6a8291.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7273"
    },
    {
        "IDcode": 7274,
        "title": "[ツチノコ]+",
        "cover": "https://telegra.ph/file/d5ad3f6127d6bc9cb9bd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7274"
    },
    {
        "IDcode": 7275,
        "title": "なぐさみ螺旋",
        "cover": "https://telegra.ph/file/11a620c6002d1f1efb4dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7275"
    },
    {
        "IDcode": 7276,
        "title": "ラブドール",
        "cover": "https://telegra.ph/file/3fd2b60db7553bd25f5fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7276"
    },
    {
        "IDcode": 7277,
        "title": "バブMe",
        "cover": "https://telegra.ph/file/9c63bb9ef1a8c97ad1b82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7277"
    },
    {
        "IDcode": 7278,
        "title": "初めての想い人",
        "cover": "https://telegra.ph/file/56999a9108a0ba2e89e47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7278"
    },
    {
        "IDcode": 7279,
        "title": "先生専用",
        "cover": "https://telegra.ph/file/935ed95f59b7dafca7f32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7279"
    },
    {
        "IDcode": 7280,
        "title": "聖百合ヶ丘女学園性奴会",
        "cover": "https://telegra.ph/file/f4d7cfc3bdd3702702779.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7280"
    },
    {
        "IDcode": 7281,
        "title": "夢食いエクスタシー",
        "cover": "https://telegra.ph/file/6ab17c6f496368b4debb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7281"
    },
    {
        "IDcode": 7282,
        "title": "魔法少女シャイニー・レッド",
        "cover": "https://telegra.ph/file/d7c9a3d6e095c82bf00bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7282"
    },
    {
        "IDcode": 7283,
        "title": "俺氏、異世界に召喚されました",
        "cover": "https://telegra.ph/file/7cd8eaae1852a1da461e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7283"
    },
    {
        "IDcode": 7284,
        "title": "落ちた館とお嬢様",
        "cover": "https://telegra.ph/file/483873ef26da45d742a9a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7284"
    },
    {
        "IDcode": 7285,
        "title": "あ・パート",
        "cover": "https://telegra.ph/file/da2dfe29f311e1c40fd7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7285"
    },
    {
        "IDcode": 7286,
        "title": "今日は代わりに「中の人」",
        "cover": "https://telegra.ph/file/572b183ee604d6c006659.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7286"
    },
    {
        "IDcode": 7287,
        "title": "OLケンタウロスと後輩君",
        "cover": "https://telegra.ph/file/a09b727d5ed3a7d088e9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7287"
    },
    {
        "IDcode": 7288,
        "title": "魔法少女シャイニー・ブルー",
        "cover": "https://telegra.ph/file/bb8f9dd3f5e2220ad3b56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7288"
    },
    {
        "IDcode": 7289,
        "title": "猫を飼う",
        "cover": "https://telegra.ph/file/a476ee3a0d989492f1738.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7289"
    },
    {
        "IDcode": 7290,
        "title": "鬼娘と妖狐",
        "cover": "https://telegra.ph/file/94feeb778376fe2b88be0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7290"
    },
    {
        "IDcode": 7291,
        "title": "家庭内ハーレム",
        "cover": "https://telegra.ph/file/b14254eb5184178cc7f9e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7291"
    },
    {
        "IDcode": 7292,
        "title": "肉壺奴隷騎士ベルギア",
        "cover": "https://telegra.ph/file/fb33b60beaf99eca11fb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7292"
    },
    {
        "IDcode": 7293,
        "title": "alternate",
        "cover": "https://telegra.ph/file/07cc7bd1eca1f995bf198.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7293"
    },
    {
        "IDcode": 7294,
        "title": "堕ち果てる魔法剣士",
        "cover": "https://telegra.ph/file/6c31f50d5d7588aee271b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7294"
    },
    {
        "IDcode": 7295,
        "title": "非実在少年少女",
        "cover": "https://telegra.ph/file/85772641b24017f042da5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7295"
    },
    {
        "IDcode": 7296,
        "title": "触手退治は快楽の始まり",
        "cover": "https://telegra.ph/file/b8bdc1574d159490c511d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7296"
    },
    {
        "IDcode": 7297,
        "title": "ココロカヨワセテ",
        "cover": "https://telegra.ph/file/2d727d3d23e57fb398a4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7297"
    },
    {
        "IDcode": 7298,
        "title": "真夜中の遊具",
        "cover": "https://telegra.ph/file/2ef649e14fca2ab3ea070.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7298"
    },
    {
        "IDcode": 7299,
        "title": "モン娘へんたいアプリでGO!",
        "cover": "https://telegra.ph/file/aaddf13f9250e6888ae43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7299"
    },
    {
        "IDcode": 7300,
        "title": "天使と悪魔",
        "cover": "https://telegra.ph/file/42cb0f0e395280ebb9e0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7300"
    }
];
