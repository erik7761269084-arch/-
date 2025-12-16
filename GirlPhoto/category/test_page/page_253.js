// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 47372,
        "title": "[森萝财团] JKFUN-023 雪晴 珂朵莉 - Page 1",
        "cover": "https://telegra.ph/file/d8e1834f4df6cdce58ad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47372",
        "pageSeq": 47372
    },
    {
        "IDcode": 47373,
        "title": "[抱走莫子aa] Meiko Shiraki - Page 1",
        "cover": "https://telegra.ph/file/4479f26d70cdc2ef48177.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47373",
        "pageSeq": 47373
    },
    {
        "IDcode": 47374,
        "title": "ShaeUnderscore - Rey - Page 1",
        "cover": "https://telegra.ph/file/89b06045673ab3dcd5489.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47374",
        "pageSeq": 47374
    },
    {
        "IDcode": 47375,
        "title": "ShaeUnderscore - Saber - Page 1",
        "cover": "https://telegra.ph/file/7f6ca1040f95ccd36e533.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47375",
        "pageSeq": 47375
    },
    {
        "IDcode": 47376,
        "title": "ShaeUnderscore - Violet Evergarden - Page 1",
        "cover": "https://telegra.ph/file/45d240660772c9d9bf1cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47376",
        "pageSeq": 47376
    },
    {
        "IDcode": 47377,
        "title": "ShaeUnderscore - Saeko Busujima - Page 1",
        "cover": "https://telegra.ph/file/f94b95155bc7a4141c235.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47377",
        "pageSeq": 47377
    },
    {
        "IDcode": 47378,
        "title": "ShaeUnderscore - 2B - Page 1",
        "cover": "https://telegra.ph/file/5e4c114753676e7f1015e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47378",
        "pageSeq": 47378
    },
    {
        "IDcode": 47379,
        "title": "Lera Himera - Momiji - Page 1",
        "cover": "https://telegra.ph/file/c3dc02b38f92b7c58f4e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47379",
        "pageSeq": 47379
    },
    {
        "IDcode": 47380,
        "title": "ShiroKitsune - Hatsune Miku - Page 1",
        "cover": "https://telegra.ph/file/45eda63db98107e7100c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47380",
        "pageSeq": 47380
    },
    {
        "IDcode": 47381,
        "title": "ShiroKitsune - Ishtar - Page 1",
        "cover": "https://telegra.ph/file/e9977ba57739dde5a494f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47381",
        "pageSeq": 47381
    },
    {
        "IDcode": 47382,
        "title": "ShiroKitsune - Taihou - Page 1",
        "cover": "https://telegra.ph/file/5688c7ec306b66c1babf9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47382",
        "pageSeq": 47382
    },
    {
        "IDcode": 47383,
        "title": "ShiroKitsune - Maid Ereshkigal - Page 1",
        "cover": "https://telegra.ph/file/4b9d9c6f2a773a8ba2fcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47383",
        "pageSeq": 47383
    },
    {
        "IDcode": 47384,
        "title": "ShiroKitsune - Jiangshi Shuten Douji - Page 1",
        "cover": "https://telegra.ph/file/a52540b06ceffe1082985.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47384",
        "pageSeq": 47384
    },
    {
        "IDcode": 47385,
        "title": "ShiroKitsune - Hinata Hyuga - Page 1",
        "cover": "https://telegra.ph/file/9265a2a88bed52f88f430.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47385",
        "pageSeq": 47385
    },
    {
        "IDcode": 47386,
        "title": "ShiroKitsune - D.Va - Page 1",
        "cover": "https://telegra.ph/file/b6dadeb67fb853430d2f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47386",
        "pageSeq": 47386
    },
    {
        "IDcode": 47387,
        "title": "凉凉子 - 自拍6套 - Page 1",
        "cover": "https://telegra.ph/file/d7506126c96747a72d988.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47387",
        "pageSeq": 47387
    },
    {
        "IDcode": 47388,
        "title": "星之迟迟 VOL.03 伊莉雅同人包 - Page 1",
        "cover": "https://telegra.ph/file/57dce6ccf6e6cd1d2e5d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47388",
        "pageSeq": 47388
    },
    {
        "IDcode": 47389,
        "title": "菌烨 - 乳胶衣4套 - Page 1",
        "cover": "https://telegra.ph/file/343aa3894229fe8d602f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47389",
        "pageSeq": 47389
    },
    {
        "IDcode": 47390,
        "title": "菌烨 - fate等3套 - Page 1",
        "cover": "https://telegra.ph/file/10ce7cd6af6753bc9e4a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47390",
        "pageSeq": 47390
    },
    {
        "IDcode": 47391,
        "title": "島風少女 - Page 1",
        "cover": "https://telegra.ph/file/77c9ce902912147e6569a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47391",
        "pageSeq": 47391
    },
    {
        "IDcode": 47392,
        "title": "Kaya萱 杀戮都市 - Page 1",
        "cover": "https://telegra.ph/file/4f8a7b6e71a875cc604fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47392",
        "pageSeq": 47392
    },
    {
        "IDcode": 47393,
        "title": "蠢沫沫 白雪姬 - Page 1",
        "cover": "https://telegra.ph/file/75890120fd452aade27d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47393",
        "pageSeq": 47393
    },
    {
        "IDcode": 47394,
        "title": "(CH27) [coli厨 (水無月みり)] 快楽のエゴ (Fate/EXTRA) - Page 1",
        "cover": "https://telegra.ph/file/c25c4af00c52507d023c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47394",
        "pageSeq": 47394
    },
    {
        "IDcode": 47395,
        "title": "Hidori Rose - Sakura Futaba - Page 1",
        "cover": "https://telegra.ph/file/6deb06760039e5255789b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47395",
        "pageSeq": 47395
    },
    {
        "IDcode": 47396,
        "title": "夏鸽鸽不想起床 - 白木芽衣子内衣ver - Page 1",
        "cover": "https://telegra.ph/file/2b44f63d6d5938568b240.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47396",
        "pageSeq": 47396
    },
    {
        "IDcode": 47397,
        "title": "桜桃喵 - 小忍 - Page 1",
        "cover": "https://telegra.ph/file/067b529b084bd74ed18b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47397",
        "pageSeq": 47397
    },
    {
        "IDcode": 47398,
        "title": "三度_ 明日方舟陈旗袍+狐巫女 - Page 1",
        "cover": "https://telegra.ph/file/e0597c25e7a7ae0771927.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47398",
        "pageSeq": 47398
    },
    {
        "IDcode": 47399,
        "title": "三度 - 贝法+可畏 - Page 1",
        "cover": "https://telegra.ph/file/575f44a4232de122fff21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47399",
        "pageSeq": 47399
    },
    {
        "IDcode": 47400,
        "title": "鳗鱼霏儿 - 碧蓝华裳多套 - Page 1",
        "cover": "https://telegra.ph/file/828c2eff19bce88fc1ada.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47400",
        "pageSeq": 47400
    },
    {
        "IDcode": 47401,
        "title": "菌烨tako - 葛飾北斎+奶光旗袍 - Page 1",
        "cover": "https://telegra.ph/file/08ed33c4aeb1484cbd546.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47401",
        "pageSeq": 47401
    },
    {
        "IDcode": 47402,
        "title": "水淼 - 吾妻 - Page 1",
        "cover": "https://telegra.ph/file/d8a3cbc0487853b18f48c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47402",
        "pageSeq": 47402
    },
    {
        "IDcode": 47403,
        "title": "水淼 - 玉藻前-舞娘 - Page 1",
        "cover": "https://telegra.ph/file/6dea80fe7032bb42fcd0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47403",
        "pageSeq": 47403
    },
    {
        "IDcode": 47404,
        "title": "rioko凉凉子 - 魅魔芽衣 - Page 1",
        "cover": "https://telegra.ph/file/e3ce07c22b99b7551b73b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47404",
        "pageSeq": 47404
    },
    {
        "IDcode": 47405,
        "title": "腐团儿Ikaros - Page 1",
        "cover": "https://telegra.ph/file/f72670735999e1278cd2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47405",
        "pageSeq": 47405
    },
    {
        "IDcode": 47406,
        "title": "rioko凉凉子 - 丽塔2套 - Page 1",
        "cover": "https://telegra.ph/file/97424b488ccaae58eac1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47406",
        "pageSeq": 47406
    },
    {
        "IDcode": 47407,
        "title": "Octokuro Model - Ashe - Page 1",
        "cover": "https://telegra.ph/file/e51bbedbb1b9d6e892c14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47407",
        "pageSeq": 47407
    },
    {
        "IDcode": 47408,
        "title": "[Hana Bunny]  Zero Two - Page 1",
        "cover": "https://telegra.ph/file/4aee043050541bbe40479.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47408",
        "pageSeq": 47408
    },
    {
        "IDcode": 47409,
        "title": "[Hana Bunny] Kamado Nezuko - Page 1",
        "cover": "https://telegra.ph/file/6b449155e45d5bb206f31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47409",
        "pageSeq": 47409
    },
    {
        "IDcode": 47410,
        "title": "[Hana Bunny] Insect Pillar Shinobu Kochou - Page 1",
        "cover": "https://telegra.ph/file/4ab03e6b19494a767c9e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47410",
        "pageSeq": 47410
    },
    {
        "IDcode": 47411,
        "title": "Cosplayer - Lovely Spacekitten - Page 1",
        "cover": "https://telegra.ph/file/d46885eb2ac086511309b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47411",
        "pageSeq": 47411
    },
    {
        "IDcode": 47412,
        "title": "从从从从鸾 VIP 约克公爵 - Page 1",
        "cover": "https://telegra.ph/file/03ee1dc7bb9f72f9ee79b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47412",
        "pageSeq": 47412
    },
    {
        "IDcode": 47413,
        "title": "从从从从鸾 VIP 半人马 - Page 1",
        "cover": "https://telegra.ph/file/d5f7842b4f26fa86ba322.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47413",
        "pageSeq": 47413
    },
    {
        "IDcode": 47414,
        "title": "[麻花酱][シリアス]30P - Page 1",
        "cover": "https://telegra.ph/file/6d7380e9f80362d23a5c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47414",
        "pageSeq": 47414
    },
    {
        "IDcode": 47415,
        "title": "木绵绵 KIMEME - 加藤惠cos内衣 - Page 1",
        "cover": "https://telegra.ph/file/0d0d6e012c4fbde468477.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47415",
        "pageSeq": 47415
    },
    {
        "IDcode": 47416,
        "title": "水淼 aqua - 可畏 原皮 - Page 1",
        "cover": "https://telegra.ph/file/ee5dbc78b8434e19af570.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47416",
        "pageSeq": 47416
    },
    {
        "IDcode": 47417,
        "title": "水淼 aqua - 可畏 水着 - Page 1",
        "cover": "https://telegra.ph/file/5b7d64a59cc14a3f783d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47417",
        "pageSeq": 47417
    },
    {
        "IDcode": 47418,
        "title": "菌烨 tako - 葛飾北斎水着 - Page 1",
        "cover": "https://telegra.ph/file/7fd3fc31797529f86304f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47418",
        "pageSeq": 47418
    },
    {
        "IDcode": 47419,
        "title": "菌烨 tako - 玛修·基列莱特 - Page 1",
        "cover": "https://telegra.ph/file/eeb9767b2d9668b9d160e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47419",
        "pageSeq": 47419
    },
    {
        "IDcode": 47420,
        "title": "[半半子][ヨルハ二号B型]49P - Page 1",
        "cover": "https://telegra.ph/file/93ee08247396046a92a74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47420",
        "pageSeq": 47420
    },
    {
        "IDcode": 47421,
        "title": "[Nude Sheep(柳瀬美月)]・・・おかえり。今日は何したい？ - Page 1",
        "cover": "https://telegra.ph/file/a5859bb7d459c23288807.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47421",
        "pageSeq": 47421
    },
    {
        "IDcode": 47422,
        "title": "[けんけんぱ(けんけん)]玉藻降臨 - Page 1",
        "cover": "https://telegra.ph/file/e9f3b4505129ebe715dd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47422",
        "pageSeq": 47422
    },
    {
        "IDcode": 47423,
        "title": "[ワルキューレ (りずな)]冴えない彼女の裏のかお 詩羽先輩 - Page 1",
        "cover": "https://telegra.ph/file/133b9fc025a409fb59409.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47423",
        "pageSeq": 47423
    },
    {
        "IDcode": 47424,
        "title": "(C97) [mysuite (あつき)] Suite Grand Order 14 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/1d0db05958c8fb5ef10c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47424",
        "pageSeq": 47424
    },
    {
        "IDcode": 47425,
        "title": "Bunny Ayumi - Creepypasta - Page 1",
        "cover": "https://telegra.ph/file/f1ef57b3deea331763bbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47425",
        "pageSeq": 47425
    },
    {
        "IDcode": 47426,
        "title": "一小央泽 黑龙少女 - Page 1",
        "cover": "https://telegra.ph/file/ea3777995bbcc3813acc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47426",
        "pageSeq": 47426
    },
    {
        "IDcode": 47427,
        "title": "爱老师 黑贞黑呆 - Page 1",
        "cover": "https://telegra.ph/file/f648c849df60dc3c9a1e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47427",
        "pageSeq": 47427
    },
    {
        "IDcode": 47428,
        "title": "软妹摇摇乐 六花 - Page 1",
        "cover": "https://telegra.ph/file/57358a6fafde57fa98761.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47428",
        "pageSeq": 47428
    },
    {
        "IDcode": 47429,
        "title": "Shae Snow 2B - Page 1",
        "cover": "https://telegra.ph/file/5c03a89bacc3ab8854a9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47429",
        "pageSeq": 47429
    },
    {
        "IDcode": 47430,
        "title": "[rioko凉凉子]格奈森瑙 - Page 1",
        "cover": "https://telegra.ph/file/39fd5aafb952fc3a8153c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47430",
        "pageSeq": 47430
    },
    {
        "IDcode": 47431,
        "title": "[一小央泽]黑修女 - Page 1",
        "cover": "https://telegra.ph/file/f809b71aae4dbf6e4d139.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47431",
        "pageSeq": 47431
    },
    {
        "IDcode": 47432,
        "title": "ShiroKitsune - Jeanne Alter - Page 1",
        "cover": "https://telegra.ph/file/5c77dda0df8e70a8f2e38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47432",
        "pageSeq": 47432
    },
    {
        "IDcode": 47433,
        "title": "Shiro Kitsune - Okita Shouji - Page 1",
        "cover": "https://telegra.ph/file/a0451abb5fb57c39615dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47433",
        "pageSeq": 47433
    },
    {
        "IDcode": 47434,
        "title": "HidoriRose - Illustrious - Page 1",
        "cover": "https://telegra.ph/file/0d825a3dd810375bdcb9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47434",
        "pageSeq": 47434
    },
    {
        "IDcode": 47435,
        "title": "Hidori Rose - Mordred - Page 1",
        "cover": "https://telegra.ph/file/a7753e2424756708c3fdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47435",
        "pageSeq": 47435
    },
    {
        "IDcode": 47436,
        "title": "Hinaughtya - Hinata Hyuga - Page 1",
        "cover": "https://telegra.ph/file/3c01aea0e0ff5ae448ecb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47436",
        "pageSeq": 47436
    },
    {
        "IDcode": 47437,
        "title": "ShiroKitsune - Queen Medb - Page 1",
        "cover": "https://telegra.ph/file/bdac7db69dcc1ddeab7d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47437",
        "pageSeq": 47437
    },
    {
        "IDcode": 47438,
        "title": "[夏鸽鸽不想起床][霞ヶ丘詩羽]43P - Page 1",
        "cover": "https://telegra.ph/file/5e96a2ce319e0d3e9a49f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47438",
        "pageSeq": 47438
    },
    {
        "IDcode": 47439,
        "title": "[rioko凉凉子]プリンツ・オイゲン メイド - Page 1",
        "cover": "https://telegra.ph/file/d373c5c13865c6425090f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47439",
        "pageSeq": 47439
    },
    {
        "IDcode": 47440,
        "title": "[rioko凉凉子]G36C花嫁 - Page 1",
        "cover": "https://telegra.ph/file/f8da80742669d309cc402.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47440",
        "pageSeq": 47440
    },
    {
        "IDcode": 47441,
        "title": "(CH24) [NudeSheep (柳瀬美月)] 妄想病棟 (Night Shift Nurses) - Page 1",
        "cover": "https://telegra.ph/file/b5fd482293e0ccf536708.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47441",
        "pageSeq": 47441
    },
    {
        "IDcode": 47442,
        "title": "[Sex Syndrome] この素晴らしいめぐみんとネトラレ３Ｐを！[輪姦実験撮影] 性悪ロリレイヤーを絡み志願応募カメコに与えてみた結果 - Page 1",
        "cover": "https://telegra.ph/file/2756194ed237a10165f63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47442",
        "pageSeq": 47442
    },
    {
        "IDcode": 47443,
        "title": "(C97)【Ely】ERE エレシュキガル 写真 - Page 1",
        "cover": "https://telegra.ph/file/5d1fd17608786a4bf50ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47443",
        "pageSeq": 47443
    },
    {
        "IDcode": 47444,
        "title": "[爱老师_PhD] 紫式部 eno泳装 - Page 1",
        "cover": "https://telegra.ph/file/f6c5f34ab47fb79659f86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47444",
        "pageSeq": 47444
    },
    {
        "IDcode": 47445,
        "title": "从从从从鸾 - 爱宕婚纱 - Page 1",
        "cover": "https://telegra.ph/file/082c3cd67a7cb7d321220.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47445",
        "pageSeq": 47445
    },
    {
        "IDcode": 47446,
        "title": "[水淼Aqua][Cosplay][artoria pendragon][Lancer]26P - Page 1",
        "cover": "https://telegra.ph/file/f773671d0cd6026d45210.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47446",
        "pageSeq": 47446
    },
    {
        "IDcode": 47447,
        "title": "【Ely】Emperor FGO ネロ写真 - Page 1",
        "cover": "https://telegra.ph/file/c40fbced02ac022a90003.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47447",
        "pageSeq": 47447
    },
    {
        "IDcode": 47448,
        "title": "[Nagisa魔物喵] 玉藻前 - Page 1",
        "cover": "https://telegra.ph/file/0443a974f22f5d49abee6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47448",
        "pageSeq": 47448
    },
    {
        "IDcode": 47449,
        "title": "(C96) [ELY] TAMAMOE II - Page 1",
        "cover": "https://telegra.ph/file/daa41265954550bf72e48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47449",
        "pageSeq": 47449
    },
    {
        "IDcode": 47450,
        "title": "Hana Bunny - Macrophage Maid - Page 1",
        "cover": "https://telegra.ph/file/f93b9ced75827cb555a75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47450",
        "pageSeq": 47450
    },
    {
        "IDcode": 47451,
        "title": "Pigman - Shimakaze - Page 1",
        "cover": "https://telegra.ph/file/eb07d5eeccb7862b41d14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47451",
        "pageSeq": 47451
    },
    {
        "IDcode": 47452,
        "title": "Pigman - 2B - Page 1",
        "cover": "https://telegra.ph/file/ae2fe6d214735fca109cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47452",
        "pageSeq": 47452
    },
    {
        "IDcode": 47453,
        "title": "(CH24) [Shooting Star's (サク)] Royal Crystals - Page 1",
        "cover": "https://telegra.ph/file/64da7bc126832dc4fba32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47453",
        "pageSeq": 47453
    },
    {
        "IDcode": 47454,
        "title": "(CH26) [NudeSheep (柳瀬美月)] ひなげし (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/4fb087a718924b6897b18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47454",
        "pageSeq": 47454
    },
    {
        "IDcode": 47455,
        "title": "[HERESY] エッチな北斎ちゃんの人 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/79a9358aa6bcf2e6d8ac3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47455",
        "pageSeq": 47455
    },
    {
        "IDcode": 47456,
        "title": "[Shooting Star's (サク)] Formable - Page 1",
        "cover": "https://telegra.ph/file/b77bbb0faa66e78688813.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47456",
        "pageSeq": 47456
    },
    {
        "IDcode": 47457,
        "title": "[Shooting Star's (サク)] belfast - Page 1",
        "cover": "https://telegra.ph/file/440282f3407da71e42fa0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47457",
        "pageSeq": 47457
    },
    {
        "IDcode": 47458,
        "title": "[Arty] ソードアート・オンライン アリシゼーション アドミニストレータ - Page 1",
        "cover": "https://telegra.ph/file/1139aa61e99bb7db3128d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47458",
        "pageSeq": 47458
    },
    {
        "IDcode": 47459,
        "title": "[麻花酱] 吾妻 - Page 1",
        "cover": "https://telegra.ph/file/5c9f1f05395cb78880419.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47459",
        "pageSeq": 47459
    },
    {
        "IDcode": 47460,
        "title": "[少女映画]伊斯塔尔 - Page 1",
        "cover": "https://telegra.ph/file/6490c7bdd0e49a75dc311.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47460",
        "pageSeq": 47460
    },
    {
        "IDcode": 47461,
        "title": "[少女枪械师] 碧蓝航线爱宕 - Page 1",
        "cover": "https://telegra.ph/file/761cdb1b5527aeb4dfdb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47461",
        "pageSeq": 47461
    },
    {
        "IDcode": 47462,
        "title": "【BANBANKO】嫌な顔 メイド - Page 1",
        "cover": "https://telegra.ph/file/292cb65eb58c03e87af23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47462",
        "pageSeq": 47462
    },
    {
        "IDcode": 47463,
        "title": "[小鳥遊くれあ]淫らな彼女の育てかた - Page 1",
        "cover": "https://telegra.ph/file/82c3f0f0156b45e8d284e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47463",
        "pageSeq": 47463
    },
    {
        "IDcode": 47464,
        "title": "NAGISA魔物喵自撮り05 エミリア - Page 1",
        "cover": "https://telegra.ph/file/54038cb238ce47768b159.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47464",
        "pageSeq": 47464
    },
    {
        "IDcode": 47465,
        "title": "[Lenfried ] Monochrome Shimakaze - Page 1",
        "cover": "https://telegra.ph/file/46bee350ee38544cad2e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47465",
        "pageSeq": 47465
    },
    {
        "IDcode": 47466,
        "title": "色气猫凜酱 - Page 1",
        "cover": "https://telegra.ph/file/75fbf95b4053a9af4dd1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47466",
        "pageSeq": 47466
    },
    {
        "IDcode": 47467,
        "title": "尊みを感じて桜井 - Page 1",
        "cover": "https://telegra.ph/file/59e5d4e2f1ed249e01109.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47467",
        "pageSeq": 47467
    },
    {
        "IDcode": 47468,
        "title": "(C97) [mysuite(あつき)] スイートレーン８ - Page 1",
        "cover": "https://telegra.ph/file/1edb8f2731a9d559c8951.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47468",
        "pageSeq": 47468
    },
    {
        "IDcode": 47469,
        "title": "[日暮企画 (日暮りん)] 2019 快楽堕の乙女 (Goblin Slayer) - Page 1",
        "cover": "https://telegra.ph/file/ca7cb21819e24b92005d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47469",
        "pageSeq": 47469
    },
    {
        "IDcode": 47470,
        "title": "[日暮企画(日暮りん)] PACKAGE-HigurashiRin - Page 1",
        "cover": "https://telegra.ph/file/fb152d33d6f39c474d53c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47470",
        "pageSeq": 47470
    },
    {
        "IDcode": 47471,
        "title": "Saya Fox - 2b - Page 1",
        "cover": "https://telegra.ph/file/ca55a5282ccfbc2013bbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47471",
        "pageSeq": 47471
    }
];
