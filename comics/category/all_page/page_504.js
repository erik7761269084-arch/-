// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5302,
        "title": "田舎にはこれくらいしか娯楽がない 4",
        "cover": "https://telegra.ph/file/8f639862a376a68d16107.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5302"
    },
    {
        "IDcode": 5303,
        "title": "[しばのしっぽ (柴あや)] これは不可抗力ですので (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/1d2d351f28ff12b31ae3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5303"
    },
    {
        "IDcode": 5304,
        "title": "[ぽんこっちゃん] 幼馴染は俺の専属お口メイド",
        "cover": "https://telegra.ph/file/000d3c348a7e6f2baf365.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5304"
    },
    {
        "IDcode": 5305,
        "title": "(C85) メイ三昧 (ギルテイギア) [oxt04389漢化]",
        "cover": "https://telegra.ph/file/a3bcccd82eea9dabedbb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5305"
    },
    {
        "IDcode": 5306,
        "title": "(C86) 快賊触姦 (ギルティギア Xrd)",
        "cover": "https://telegra.ph/file/6040daf95fcfdb9a6910c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5306"
    },
    {
        "IDcode": 5307,
        "title": "(C93) メイブリ射精我慢ゲーム (ギルティギア) [罪恶装备爱好者汉化]",
        "cover": "https://telegra.ph/file/71725cc347b7febcfd340.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5307"
    },
    {
        "IDcode": 5308,
        "title": "(C95) 口を吸いねェ (Fate Grand Order) [黑锅汉化组]",
        "cover": "https://telegra.ph/file/fe95ed0b80c714a8a9cb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5308"
    },
    {
        "IDcode": 5309,
        "title": "(C97) えっちゃんとイチャラブおくちえっち! (Fate Grand Order) [奧日個人漢化]",
        "cover": "https://telegra.ph/file/c5c82b4fbc7bac1e045ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5309"
    },
    {
        "IDcode": 5310,
        "title": "(COMIC1☆13) ちょろいってえっちやん (Fate Grand Order) [虚数个人汉化]",
        "cover": "https://telegra.ph/file/6f98444e8529571f50bcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5310"
    },
    {
        "IDcode": 5311,
        "title": "(サンクリ2018 Spring) 高木さんescalate (からかい上手の高木さん)",
        "cover": "https://telegra.ph/file/7e48ba009e5174cb82df8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5311"
    },
    {
        "IDcode": 5312,
        "title": "[2023.01] 爆裂娘を彼女にしたらヤルことなんて決まってる! 2 (この素晴らしい世界に祝福を!)",
        "cover": "https://telegra.ph/file/6453aa426dc6c7ca019a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5312"
    },
    {
        "IDcode": 5313,
        "title": "[16.05] ちょろいみん 1 (COMIC 阿吽 2016年5月号)",
        "cover": "https://telegra.ph/file/4166ff8603f3ef11cc066.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5313"
    },
    {
        "IDcode": 5314,
        "title": "[2022.02] 爆裂娘を彼女にしたらヤルことなんて決まってる! 1 (この素晴らしい世界に祝福を!)",
        "cover": "https://telegra.ph/file/ab5f97cd74fdec81e47a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5314"
    },
    {
        "IDcode": 5315,
        "title": "[16.06] ちょろいみん 2 (COMIC 阿吽 2016年6月号)",
        "cover": "https://telegra.ph/file/72f8c0a655126bf042918.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5315"
    },
    {
        "IDcode": 5316,
        "title": "[20.10] 幼馴染は俺の専属お口メイド 1 (COMIC 阿吽 2020年10月号)",
        "cover": "https://telegra.ph/file/2b9d7329b70b8ee9bf52f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5316"
    },
    {
        "IDcode": 5317,
        "title": "[20.12] 幼馴染は俺の専属お口メイド 2 (COMIC 阿吽 2020年12月号)",
        "cover": "https://telegra.ph/file/ae84da00c8678dd4fa2d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5317"
    },
    {
        "IDcode": 5318,
        "title": "[21.02] 幼馴染は俺の専属お口メイド 3 (COMIC 阿吽 2021年2月号)",
        "cover": "https://telegra.ph/file/956e26baaf2776991d6b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5318"
    },
    {
        "IDcode": 5319,
        "title": "[21.04] 幼馴染は俺の専属お口メイド 4 (COMIC 阿吽 2021年4月号)",
        "cover": "https://telegra.ph/file/1e173538b9e0be426b621.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5319"
    },
    {
        "IDcode": 5320,
        "title": "[21.08] 幼馴染は俺の専属お口メイド 5 中編 (COMIC 阿吽 2021年8月号) [Vali&tokinosora.bit汉化]",
        "cover": "https://telegra.ph/file/95d13df6f4541eb30418e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5320"
    },
    {
        "IDcode": 5321,
        "title": "[21.10] 幼馴染は俺の専属お口メイド 5 後編 (COMIC 阿吽 2021年10月号) [Vali&tokinosora.bit汉化]",
        "cover": "https://telegra.ph/file/7b9b161d2d8127a3138ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5321"
    },
    {
        "IDcode": 5322,
        "title": "[2015] 少女達の遊戯",
        "cover": "https://telegra.ph/file/77582e0a52682a543f7bc.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5322"
    },
    {
        "IDcode": 5323,
        "title": "[2017] イラマックス",
        "cover": "https://telegra.ph/file/b7ac8fe927975b1f91d58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5323"
    },
    {
        "IDcode": 5324,
        "title": "今日も西片君は高木さんに見透かされてる 1 (からかい上手の高木さん)  (C90)",
        "cover": "https://telegra.ph/file/75bfb9a9a8c7158555a66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5324"
    },
    {
        "IDcode": 5325,
        "title": "今日も西片君は高木さんに見透かされてる 2 (からかい上手の高木さん)  (C91)",
        "cover": "https://telegra.ph/file/9c095a21e0d4deb88b1fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5325"
    },
    {
        "IDcode": 5326,
        "title": "今日も西片君は高木さんに見透かされてる 3 (からかい上手の高木さん) [星幽漢化組] (COMIC1☆11)",
        "cover": "https://telegra.ph/file/450abec5f0d7dd919f312.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5326"
    },
    {
        "IDcode": 5327,
        "title": "今日も西片君は高木さんに見透かされてる 4 (からかい上手の高木さん) [星幽漢化組] (C92)",
        "cover": "https://telegra.ph/file/31d7621450b8707e42575.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5327"
    },
    {
        "IDcode": 5328,
        "title": "今日も西片君は高木さんに見透かされてる 5 (からかい上手の高木さん) [星幽漢化組] (C93)",
        "cover": "https://telegra.ph/file/49f83cb5ede331376b928.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5328"
    },
    {
        "IDcode": 5329,
        "title": "今日も西片君は高木さんに見透かされてる 6 (からかい上手の高木さん) [星幽漢化組] (COMIC1☆13)",
        "cover": "https://telegra.ph/file/59a1c742c2df292142256.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5329"
    },
    {
        "IDcode": 5330,
        "title": "今日も西片君は高木さんに見透かされてる 7 (からかい上手の高木さん) (C94)",
        "cover": "https://telegra.ph/file/72b5e3068de200971c52a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5330"
    },
    {
        "IDcode": 5331,
        "title": "今日も西片君は高木さんに見透かされてる 8 (からかい上手の高木さん) (C95)",
        "cover": "https://telegra.ph/file/255b6fe757b1070e6bca3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5331"
    },
    {
        "IDcode": 5332,
        "title": "今日も西片君は高木さんに見透かされてる 総集編 (からかい上手の高木さん)",
        "cover": "https://telegra.ph/file/edffdfd8525e1c6839047.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5332"
    },
    {
        "IDcode": 5333,
        "title": "(C92) [篠原重工営業部 (榛名まお、うきょちゅう)] からかいっくす2 (からかい上手の高木さん)",
        "cover": "https://telegra.ph/file/4dbfdc43f807b9a8a75db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5333"
    },
    {
        "IDcode": 5334,
        "title": "[2022.01] その着せ替え人形はHをする 1 (その着せ替え人形は恋をする)  [カラー化]",
        "cover": "https://telegra.ph/file/38520ec712f793d729ff5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5334"
    },
    {
        "IDcode": 5335,
        "title": "[2022.05] その着せ替え人形はHをする 2 (その着せ替え人形は恋をする)",
        "cover": "https://telegra.ph/file/440c66d468eb018aece22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5335"
    },
    {
        "IDcode": 5336,
        "title": "[2022.08] その着せ替え人形はHをする 3 (その着せ替え人形は恋をする) (C100)",
        "cover": "https://telegra.ph/file/18956b461e8ae19740dcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5336"
    },
    {
        "IDcode": 5337,
        "title": "[2022.12] その着せ替え人形はHをする 4 (その着せ替え人形は恋をする) (C101)",
        "cover": "https://telegra.ph/file/f93e04b1cc85774ecb104.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5337"
    },
    {
        "IDcode": 5338,
        "title": "[2023.08] その着せ替え人形はHをする 総集編 (その着せ替え人形は恋をする) (C102)",
        "cover": "https://telegra.ph/file/35ee84c28f9afd71fbd25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5338"
    },
    {
        "IDcode": 5339,
        "title": "[2023.08] その着せ替え人形はHをする 総集編 (その着せ替え人形は恋をする) (C102)",
        "cover": "https://telegra.ph/file/35ee84c28f9afd71fbd25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5339"
    },
    {
        "IDcode": 5340,
        "title": "[2023.12] その着せ替え人形はHをする 6 (その着せ替え人形は恋をする) (C103)",
        "cover": "https://telegra.ph/file/5d7b115c839a6d3934e72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5340"
    },
    {
        "IDcode": 5341,
        "title": "[いっきづか (きづかかずき)] 催眠耐性ちょっとある。",
        "cover": "https://telegra.ph/file/1873a8ec8615430b850eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5341"
    },
    {
        "IDcode": 5342,
        "title": "[2020] イジワルコネクト [未来數位]",
        "cover": "https://telegra.ph/file/a0d162c98b42ab01dc127.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5342"
    },
    {
        "IDcode": 5343,
        "title": "[Whisp (乃莉助)] セックスしないと出られない部屋に清楚なあの子と閉じ込められる",
        "cover": "https://telegra.ph/file/a627543d27a159c708848.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5343"
    },
    {
        "IDcode": 5344,
        "title": "[アマイ少女工房 (雨居めいでん)] セクハラOK!女性専用チカン車両～新米OLちゃんレズ堕ち行き～",
        "cover": "https://telegra.ph/file/d48d4269ebcba693d0c72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5344"
    },
    {
        "IDcode": 5345,
        "title": "(C97) [ゆずや (ユズハ)] 無口な図書委員とセックス漬け。",
        "cover": "https://telegra.ph/file/bddf8a7627a1859302eed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5345"
    },
    {
        "IDcode": 5346,
        "title": "[ゆずや (ユズハ)] 無口な図書委員とセックス漬け。夏休み篇～セックス漬けの二日間…～",
        "cover": "https://telegra.ph/file/37aa6ae54ce3eae9aed06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5346"
    },
    {
        "IDcode": 5347,
        "title": "[TRY] 新しい風紀委員長が巨乳すぎる件2",
        "cover": "https://telegra.ph/file/7fb035692221eaa87e8d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5347"
    },
    {
        "IDcode": 5348,
        "title": "[TRY] 憧れの生徒会長が巨乳すぎる件",
        "cover": "https://telegra.ph/file/87253c0ba6e08de25c144.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5348"
    },
    {
        "IDcode": 5349,
        "title": "[豆六] ヒメごと",
        "cover": "https://telegra.ph/file/f5196be65cdce98d7a78e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5349"
    },
    {
        "IDcode": 5350,
        "title": "[柊ぽぷら] 俺の理想の憑依絵師 (全編)",
        "cover": "https://telegra.ph/file/1467873d53104c9975055.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5350"
    },
    {
        "IDcode": 5351,
        "title": "[あらと安里]いっぱい食べるキミがすき[中国翻译]",
        "cover": "https://telegra.ph/file/1d4377a6e31b7000a449b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5351"
    },
    {
        "IDcode": 5352,
        "title": "(C103) [KAROMIX (karory)] 妹と妹の親友で催眠耐性EXの清楚JCと催眠でイチャイチャする本",
        "cover": "https://telegra.ph/file/16c90ba85a67ede39010f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5352"
    },
    {
        "IDcode": 5353,
        "title": "配信女子ナマコの生出し配信",
        "cover": "https://telegra.ph/file/2edd2ce173114ebb48c49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5353"
    },
    {
        "IDcode": 5354,
        "title": "[牛タン定食への恋] 魔法少女はおじさんを手に入れる",
        "cover": "https://telegra.ph/file/8c6fb1e8af12fc293b409.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5354"
    },
    {
        "IDcode": 5355,
        "title": "[花咲方茶] ピュアな振りした彼女とたくさんコスプレえっちする話",
        "cover": "https://telegra.ph/file/f57c96e5ca2cb6021e027.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5355"
    },
    {
        "IDcode": 5356,
        "title": "[毛玉牛乳 (玉之けだま)] 【紧急招募】コイツに胜つ方法",
        "cover": "https://telegra.ph/file/3474cd75db210460273cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5356"
    },
    {
        "IDcode": 5357,
        "title": "[みっつまん (真冬)] ヌマル。",
        "cover": "https://telegra.ph/file/0c8e8f97fd9f205168030.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5357"
    },
    {
        "IDcode": 5358,
        "title": "[alice16 (emily)] 巨乳JKが本気を出したら、義父(パパ)はもう逃げられない♥",
        "cover": "https://telegra.ph/file/f9be7a1885f32788696b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5358"
    },
    {
        "IDcode": 5359,
        "title": "[カムリズム (鬼頭サケル)] 雌猫吐息 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/68e68c28754971b4b230d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5359"
    },
    {
        "IDcode": 5360,
        "title": "[Usacastle (うさ城まに)] ××ぱーてぃ!",
        "cover": "https://telegra.ph/file/494bf76be7e43e3d59d35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5360"
    },
    {
        "IDcode": 5361,
        "title": "[きつね屋 (リーフィ)] せんせぇ イブキとわんわんごっこしよ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/c0acf5e98bf0339f5147d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5361"
    },
    {
        "IDcode": 5362,
        "title": "[Meguistous (めぎ)] すけべするだけ",
        "cover": "https://telegra.ph/file/a1824d5abc684904fd99e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5362"
    },
    {
        "IDcode": 5363,
        "title": "[淫楽とんぼ (臼歯カゲロウ)] 焦燥まいんどくらいしす!!",
        "cover": "https://telegra.ph/file/09e2f1626444f6a9b0e8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5363"
    },
    {
        "IDcode": 5364,
        "title": "[うなハウス (うなっち)] お嬢様完全敗北。～大切に育てられた貴族娘が自分から庶民おち◯ぽおねだりするまで～",
        "cover": "https://telegra.ph/file/84b0f6e4d51797135bf6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5364"
    },
    {
        "IDcode": 5365,
        "title": "[クレスタ (呉マサヒロ)] 女学校で男ひとりなので校則で性欲のはけ口にされる日常",
        "cover": "https://telegra.ph/file/cefd21c7106b6abc80e22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5365"
    },
    {
        "IDcode": 5366,
        "title": "[クレスタ (呉マサヒロ)] 女学校で男ひとりなので校則で性欲のはけ口にされる日常 2時限目",
        "cover": "https://telegra.ph/file/af037b105274d09a8cd1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5366"
    },
    {
        "IDcode": 5367,
        "title": "[クレスタ (呉マサヒロ)] 女学校で男ひとりなので校則で性欲のはけ口にされる日常 3時限目",
        "cover": "https://telegra.ph/file/b54f3bf830f087ec925e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5367"
    },
    {
        "IDcode": 5368,
        "title": "[クレスタ (呉マサヒロ)] 女学校で男ひとりなので校則で性欲のはけ口にされる日常 4時限目",
        "cover": "https://telegra.ph/file/989b96399cd8f30998acf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5368"
    },
    {
        "IDcode": 5369,
        "title": "[あめじすとダークネス (エロッチ)] GIRL 後輩彼女の性事情",
        "cover": "https://telegra.ph/file/218a0f165aa7bd208b8a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5369"
    },
    {
        "IDcode": 5370,
        "title": "[あめじすとダークネス (エロッチ)] GIRL 後輩彼女総集編 II",
        "cover": "https://telegra.ph/file/ab0a061ce8854824b450c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5370"
    },
    {
        "IDcode": 5371,
        "title": "[あめじすとダークネス (エロッチ)] GIRL 後輩彼女の性事情3",
        "cover": "https://telegra.ph/file/718161c4e0016e85d6a56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5371"
    },
    {
        "IDcode": 5372,
        "title": "[レオナト工房 (Leonat)] カエデちゃん成長録2―補習授業編― (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/983f2646dbb2795dd1c46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5372"
    },
    {
        "IDcode": 5373,
        "title": "[滑らか精肉店 (kamasu)] ギャルと店員",
        "cover": "https://telegra.ph/file/597e03951af131829973c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5373"
    },
    {
        "IDcode": 5374,
        "title": "[みじ屋 (ミコジン)] シロコとホシノとえっちする本 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/efc0056bd303ec51fccea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5374"
    },
    {
        "IDcode": 5375,
        "title": "[sakurawhite (結城リカ)] 長屋暮らし、幼な妻",
        "cover": "https://telegra.ph/file/55e857aa91868ad7fe62d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5375"
    },
    {
        "IDcode": 5376,
        "title": "(C104) [シンセカイセット (菖蒲)] 隣人は有名配信者5人目",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/5839b8c9a285e58fb731a5f21d1b34eb1/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5376"
    },
    {
        "IDcode": 5377,
        "title": "[おおまがの森 (すけぞう)] おぬしを信じてたのに...‼",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/2491d6800f4f552b9d4e75357dc359c81/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5377"
    },
    {
        "IDcode": 5378,
        "title": "[桜咲ももこ、KEWS] 彼女の妹 第1-6話",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/9aa52ef7ea3ba4a70394dfdc2804e0c01/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5378"
    },
    {
        "IDcode": 5379,
        "title": "[桜咲ももこ、KEWS] 彼女の妹 第6-9話",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/899a6e8ef3bb2abea367e8f2a51709d6163/163.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5379"
    },
    {
        "IDcode": 5380,
        "title": "[飯食って寝る。 (あたげ)] レから始まる淫奔オナホの恋",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/90864817b525099f3a431fc5b35e7c031/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5380"
    },
    {
        "IDcode": 5381,
        "title": "[KAROMIX (karory)] 三玖が既成事実を作る本 (五等分の花嫁)",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/e2b005457d60cc70a3bf77f6300ec1601/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5381"
    },
    {
        "IDcode": 5382,
        "title": "[蜂蜜庭園 (柊ハニカ)] ヴィーニャちゃん逃げられない!",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/67ff05a44084203d81dac60ed28d1b581/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5382"
    },
    {
        "IDcode": 5383,
        "title": "[こんにゃく] 天才オナホ彩香ちゃん",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/435d24725d7e642817c6784a063f792c1/1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5383"
    },
    {
        "IDcode": 5384,
        "title": "(C104) [ものくろサーキット (racer)] イブキとなにしてあそぼっか (ブルーアーカイブ)",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/fe86a152754ad865422abdf7cffba9981/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5384"
    },
    {
        "IDcode": 5385,
        "title": "(C104) [備前式ロロップ (備前)] 兄の手も借りたい",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/c4ff9189eb23b164c201b6263be030cf1/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5385"
    },
    {
        "IDcode": 5386,
        "title": "[こくまろちょうせい豆乳 (オーマンズリーダス)] 透き通るような世界観なのに…Vol.04 (ブルーアーカイブ)",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/dcf1cb9967abf821f09e61e3e39959b11/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5386"
    },
    {
        "IDcode": 5387,
        "title": "[アカマツ (レッド松)] お姉ちゃんと甘々エッチ (学園アイドルマスター)",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/3f1223a708c694d39c805e579f887dec1/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5387"
    },
    {
        "IDcode": 5388,
        "title": "プチ☆パコ - ゆりか、トイレで兄パコしました！",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/fb925549a7dd8064756cd0c2bb29cbd9PetitPako1_p0/PetitPako1_p0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5388"
    },
    {
        "IDcode": 5389,
        "title": "[だにまる] 后辈彼女辻中 + 恋になるまで + もう一度、してみたい。",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/c21df0bdf3df26d6c34a0eb0e80b10601/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5389"
    },
    {
        "IDcode": 5390,
        "title": "Vtuberなカノジョ、絶頂えっち生配信  [62P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/aae23e79c598c932bcec12d1eefd9adb1/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5390"
    },
    {
        "IDcode": 5391,
        "title": "[大嘘] 通勤電車でパンツを見せてくるJKがいたのでハメてみた 2 [35P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/92b61a4430d5785fcb9304047e0b22b21/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5391"
    },
    {
        "IDcode": 5392,
        "title": "[大嘘] オナホ教室-新学期-女生徒妊娠仕置計画   [217P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/2a75537741a65413bfc60b1afdfc73201/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5392"
    },
    {
        "IDcode": 5393,
        "title": "[Poison Gray (松竜太)] 文化祭ソープランド  [ページ欠落][156P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/98a7ad61e141c63c02b63c6a1748a54f001_p000/001_p000.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5393"
    },
    {
        "IDcode": 5394,
        "title": "[おおまがの森 (すけぞう)] おじさんをお借りします♥J〇なかよし運動会  [34P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/debd0eb25fb3bb444cc064140c1379f91/1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5394"
    },
    {
        "IDcode": 5395,
        "title": "[毛玉牛乳 (玉之けだま)] 全部君のせいだ。 フルカラー版 [41P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/1dc9c2f813cd67dddc7af2c592334b361/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5395"
    },
    {
        "IDcode": 5396,
        "title": "[毛玉牛乳 (玉之けだま)] 遠隔授乳アプリのある世界  [10P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/1dc9c2f813cd67dddc7af2c592334b361/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5396"
    },
    {
        "IDcode": 5397,
        "title": "(C102) [fuka2yun (ふかゆん)] 悪魔の契約 (魔王城でおやすみ) [24P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/9e21b4545975ddca929a1ece005499cb2/2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5397"
    },
    {
        "IDcode": 5398,
        "title": "[えだまめ亭 (うこ)] 思い出のよるべを手繰って (ブルーアーカイブ)  [26P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/48ad32e8848360ff7d6d05799e4437a52/2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5398"
    },
    {
        "IDcode": 5399,
        "title": "[はとめ本舗] 催眠アイテムを貰ったので [31P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/e99facc91823005cb7f8e4fcdfaa7b211/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5399"
    },
    {
        "IDcode": 5400,
        "title": "(C105) [アサツキミント (みんとあいす)] 悪魔なイブキの精液タンク (ブルーアーカイブ)",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/a23eb254c42cd84d8f67e880318f97781/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5400"
    },
    {
        "IDcode": 5401,
        "title": "[レオナト]  (ブルーアーカイブ) [40P]",
        "cover": "https://i2.iciallo.uk/mangz/ZZ/b15308e10effd4467c69cf09892297dc2/2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5401"
    }
];
