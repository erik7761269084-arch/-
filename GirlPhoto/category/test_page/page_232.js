// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 45272,
        "title": "九言 - 拉毗 - Page 1",
        "cover": "https://telegra.ph/file/7cc34a3ea3de579904878.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45272",
        "pageSeq": 45272
    },
    {
        "IDcode": 45273,
        "title": "QUEENIE CHUPPY - Mihara - Page 1",
        "cover": "https://telegra.ph/file/2c8cd3d7329ef557f6d1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45273",
        "pageSeq": 45273
    },
    {
        "IDcode": 45274,
        "title": "Meiilyn - Ayaka - Page 1",
        "cover": "https://telegra.ph/file/e15146fa15cf302fd0be0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45274",
        "pageSeq": 45274
    },
    {
        "IDcode": 45275,
        "title": "莱可Raika - Nahida - Page 1",
        "cover": "https://telegra.ph/file/360edbda83f045f8e7377.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45275",
        "pageSeq": 45275
    },
    {
        "IDcode": 45276,
        "title": "[cospuri] 413 - AinaMikami - Page 1",
        "cover": "https://telegra.ph/file/3a96fa5533ce783d3c7c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45276",
        "pageSeq": 45276
    },
    {
        "IDcode": 45277,
        "title": "yura - 2023.5约尔•福杰 (有字+無字) - Page 1",
        "cover": "https://telegra.ph/file/0930318a26b1178168c94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45277",
        "pageSeq": 45277
    },
    {
        "IDcode": 45278,
        "title": "Byoru - Rapi - Page 1",
        "cover": "https://telegra.ph/file/eb02ee0ed0da3b2ae78e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45278",
        "pageSeq": 45278
    },
    {
        "IDcode": 45279,
        "title": "Indigo White - Samus - Page 1",
        "cover": "https://telegra.ph/file/39e41c81baa79724fd36c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45279",
        "pageSeq": 45279
    },
    {
        "IDcode": 45280,
        "title": "咬一口兔娘（黏黏团子兔）兔兔班车No.1『格温』 - Page 1",
        "cover": "https://telegra.ph/file/5801f571461378147cf73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45280",
        "pageSeq": 45280
    },
    {
        "IDcode": 45281,
        "title": "Joyce - Jeanne ALTER ICYNG - Page 1",
        "cover": "https://telegra.ph/file/f15d435865c20a3c61846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45281",
        "pageSeq": 45281
    },
    {
        "IDcode": 45282,
        "title": "[Lana Rain] Yorha No.2 Type B - Page 1",
        "cover": "https://telegra.ph/file/ddf954243bbad62cf5613.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45282",
        "pageSeq": 45282
    },
    {
        "IDcode": 45283,
        "title": "Byoru - Fubuki - Page 1",
        "cover": "https://telegra.ph/file/ff3cd0ed0c767299da939.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45283",
        "pageSeq": 45283
    },
    {
        "IDcode": 45284,
        "title": "樱井小莜-神通 - Page 1",
        "cover": "https://telegra.ph/file/3c00d4b72fcc41161e693.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45284",
        "pageSeq": 45284
    },
    {
        "IDcode": 45285,
        "title": "星之迟迟 - 2023 3月计划D 原创 图书管理员 - Page 1",
        "cover": "https://telegra.ph/file/a9eac65297d38481efa8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45285",
        "pageSeq": 45285
    },
    {
        "IDcode": 45286,
        "title": "Aqua area - Asuna Ichinose - Page 1",
        "cover": "https://telegra.ph/file/2f5d5c44079f3aa71f009.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45286",
        "pageSeq": 45286
    },
    {
        "IDcode": 45287,
        "title": "PingPing - Hinata Hyuga - Page 1",
        "cover": "https://telegra.ph/file/983945dec7b543f4eab9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45287",
        "pageSeq": 45287
    },
    {
        "IDcode": 45288,
        "title": "Meenfox - Chen Hai - Page 1",
        "cover": "https://telegra.ph/file/51fd68002b33e2502e699.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45288",
        "pageSeq": 45288
    },
    {
        "IDcode": 45289,
        "title": "Voezacos - Ankha - Page 1",
        "cover": "https://telegra.ph/file/5f82ac42d50ecbc9f258d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45289",
        "pageSeq": 45289
    },
    {
        "IDcode": 45290,
        "title": "[習呆呆] 喜多川海梦 - Page 1",
        "cover": "https://telegra.ph/file/8dadc4b151cc802937072.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45290",
        "pageSeq": 45290
    },
    {
        "IDcode": 45291,
        "title": "Mikomin - coser合集 - Page 1",
        "cover": "https://telegra.ph/file/b364fc695c2b54b3f3476.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45291",
        "pageSeq": 45291
    },
    {
        "IDcode": 45292,
        "title": "Mikomin - coser合集 - Page 2",
        "cover": "https://telegra.ph/file/914363f10ab34345881f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45292",
        "pageSeq": 45292
    },
    {
        "IDcode": 45293,
        "title": "Mikomin - coser合集 - Page 3",
        "cover": "https://telegra.ph/file/33d6870e0ba827cf473f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45293",
        "pageSeq": 45293
    },
    {
        "IDcode": 45294,
        "title": "Mikomin - coser合集 - Page 4",
        "cover": "https://telegra.ph/file/a17a5d77f157bdf244b9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45294",
        "pageSeq": 45294
    },
    {
        "IDcode": 45295,
        "title": "萌白酱 - 玛丽罗斯 - Page 1",
        "cover": "https://telegra.ph/file/568d7bdf8bf0104a5723c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45295",
        "pageSeq": 45295
    },
    {
        "IDcode": 45296,
        "title": "铃木美咲(miyoki) - 想成为你的偶像（甘雨招行联动篇） - Page 1",
        "cover": "https://telegra.ph/file/1dfba0d24de5679f3edac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45296",
        "pageSeq": 45296
    },
    {
        "IDcode": 45297,
        "title": "Biya（Fanbox/Cosplay Photo Sets） - Page 1",
        "cover": "https://telegra.ph/file/ce542db952b8c0f83701a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45297",
        "pageSeq": 45297
    },
    {
        "IDcode": 45298,
        "title": "[Haru] Call of the Night 【GIF】 - Page 1",
        "cover": "https://telegra.ph/file/876398340026ce097b059.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45298",
        "pageSeq": 45298
    },
    {
        "IDcode": 45299,
        "title": "水淼aqua 早坂愛 - Page 1",
        "cover": "https://telegra.ph/file/8b68ad6a177b841d2e79f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45299",
        "pageSeq": 45299
    },
    {
        "IDcode": 45300,
        "title": "[Haru] Bunny Boy Maid Rem 【GIF】 - Page 1",
        "cover": "https://telegra.ph/file/78d48d2238e93880c6669.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45300",
        "pageSeq": 45300
    },
    {
        "IDcode": 45301,
        "title": "Ame Airi - Mona - Page 1",
        "cover": "https://telegra.ph/file/762d6b289b5cbefbe34d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45301",
        "pageSeq": 45301
    },
    {
        "IDcode": 45302,
        "title": "Hana Bunny - Ganyu Succubus - Page 1",
        "cover": "https://telegra.ph/file/1b6c9883a6752958c4ff1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45302",
        "pageSeq": 45302
    },
    {
        "IDcode": 45303,
        "title": "[弥美] アスナ🐰 - Page 1",
        "cover": "https://telegra.ph/file/d4ca1c2400aab5434c6f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45303",
        "pageSeq": 45303
    },
    {
        "IDcode": 45304,
        "title": "铃木美咲 (Misaki Suzuki) - 想要成为你的偶像（刻晴花嫁篇） - Page 1",
        "cover": "https://telegra.ph/file/2868366c6f1f7d454efca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45304",
        "pageSeq": 45304
    },
    {
        "IDcode": 45305,
        "title": "铃木美咲(Misaki Suzuki) - 想要成为你的偶像（刻晴篇） - Page 1",
        "cover": "https://telegra.ph/file/e0ab867562906172d930e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45305",
        "pageSeq": 45305
    },
    {
        "IDcode": 45306,
        "title": "铃木美咲 - 想见你想见你想见你X6（食铁兽） - Page 1",
        "cover": "https://telegra.ph/file/094cd5b8b3573c8981a05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45306",
        "pageSeq": 45306
    },
    {
        "IDcode": 45307,
        "title": "铃木美咲 - 想成为你的偶像（珊瑚宫心海篇） - Page 1",
        "cover": "https://telegra.ph/file/dcd602ee4dcd9818fb135.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45307",
        "pageSeq": 45307
    },
    {
        "IDcode": 45308,
        "title": "Vinnegal - 2B - Page 1",
        "cover": "https://telegra.ph/file/90455c6326db8a138699c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45308",
        "pageSeq": 45308
    },
    {
        "IDcode": 45309,
        "title": "铃木美咲 - 想成为你的偶像（刻晴霓裾翩跹篇） - Page 1",
        "cover": "https://telegra.ph/file/de3c3fc5f9f7a3c7eab06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45309",
        "pageSeq": 45309
    },
    {
        "IDcode": 45310,
        "title": "铃木美咲 - 想要成为你的偶像（芭芭拉篇） - Page 1",
        "cover": "https://telegra.ph/file/27d4de1ed20aac29eb9f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45310",
        "pageSeq": 45310
    },
    {
        "IDcode": 45311,
        "title": "铃木美咲(Misaki Suzuki) - 想要成为你的偶像（雷电将军篇） - Page 1",
        "cover": "https://telegra.ph/file/eccdcc1ebe56bc4b022a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45311",
        "pageSeq": 45311
    },
    {
        "IDcode": 45312,
        "title": "铃木美咲(Misaki Suzuki) -  想要成为你的偶像（甘雨篇） - Page 1",
        "cover": "https://telegra.ph/file/051dc97b4d01d98f6329e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45312",
        "pageSeq": 45312
    },
    {
        "IDcode": 45313,
        "title": "PoppaChan - Columbina - Page 1",
        "cover": "https://telegra.ph/file/58c9d27d6f6013a6fc55c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45313",
        "pageSeq": 45313
    },
    {
        "IDcode": 45314,
        "title": "小仓千代w - 兔子警官 [16P-38MB] - Page 1",
        "cover": "https://telegra.ph/file/3a1d3985352a1f3b00338.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45314",
        "pageSeq": 45314
    },
    {
        "IDcode": 45315,
        "title": "Lostwind10 - Le Malin - Page 1",
        "cover": "https://telegra.ph/file/4588ed22b98808eca4bca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45315",
        "pageSeq": 45315
    },
    {
        "IDcode": 45316,
        "title": "Xidaidai(习呆呆) - 草神 - Page 1",
        "cover": "https://telegra.ph/file/e8487cda23fa0eb45a4c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45316",
        "pageSeq": 45316
    },
    {
        "IDcode": 45317,
        "title": "黏黏团子兔 - 甘雨魅魔 - Page 1",
        "cover": "https://telegra.ph/file/9b022b9ec36e67f3a8be6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45317",
        "pageSeq": 45317
    },
    {
        "IDcode": 45318,
        "title": "【BANBANKO】镇海 奇響華殿 - Page 1",
        "cover": "https://telegra.ph/file/74bd21a8793d97773b5e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45318",
        "pageSeq": 45318
    },
    {
        "IDcode": 45319,
        "title": "洛桑w伊梓 - 纳西妲 - Page 1",
        "cover": "https://telegra.ph/file/dcf3fd448c433f34ff00f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45319",
        "pageSeq": 45319
    },
    {
        "IDcode": 45320,
        "title": "[Comonun] ししょうの穴にゲイボルグ二本刺挿してみた - Page 1",
        "cover": "https://telegra.ph/file/05c120b82ef6d8ef7fb2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45320",
        "pageSeq": 45320
    },
    {
        "IDcode": 45321,
        "title": "PoppaChan - Nahida - Page 1",
        "cover": "https://telegra.ph/file/2067d6d68dfac90e2a790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45321",
        "pageSeq": 45321
    },
    {
        "IDcode": 45322,
        "title": "[Elles] Astolfo Schoolgirl - Page 1",
        "cover": "https://telegra.ph/file/e5860eb825629b86d2f8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45322",
        "pageSeq": 45322
    },
    {
        "IDcode": 45323,
        "title": "PoppaChan - Roxy - Page 1",
        "cover": "https://telegra.ph/file/4f43d929fc25d842f403e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45323",
        "pageSeq": 45323
    },
    {
        "IDcode": 45324,
        "title": "Astasiadream - Ankha - Page 1",
        "cover": "https://telegra.ph/file/0b726ee93c264eeddb1ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45324",
        "pageSeq": 45324
    },
    {
        "IDcode": 45325,
        "title": "kotomitako (ふぃに) - Page 1",
        "cover": "https://telegra.ph/file/3b72594910832c0ad20f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45325",
        "pageSeq": 45325
    },
    {
        "IDcode": 45326,
        "title": "Byoru - Tsunade - Page 1",
        "cover": "https://telegra.ph/file/f00365a75991ed3729d24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45326",
        "pageSeq": 45326
    },
    {
        "IDcode": 45327,
        "title": "ZinieQ - Juri Han - Page 1",
        "cover": "https://telegra.ph/file/19edf2a9d007c4559c300.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45327",
        "pageSeq": 45327
    },
    {
        "IDcode": 45328,
        "title": "[COMO.EXE] オリジナル洗脳●●ROM（R18） ラブ・ドロイド (sample) - Page 1",
        "cover": "https://telegra.ph/file/3c752dcfc2d1a6e4017c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45328",
        "pageSeq": 45328
    },
    {
        "IDcode": 45329,
        "title": "Minichu - Bikini Rem - Page 1",
        "cover": "https://telegra.ph/file/a6292bdc69ef5c98c003d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45329",
        "pageSeq": 45329
    },
    {
        "IDcode": 45330,
        "title": "Sayako(さやこ) - 大凤JK - Page 1",
        "cover": "https://telegra.ph/file/7577c7d0e0e6978416ba7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45330",
        "pageSeq": 45330
    },
    {
        "IDcode": 45331,
        "title": "日奈娇 - 喜多川海梦 花嫁 - Page 1",
        "cover": "https://telegra.ph/file/18e0ef312cea045a30a54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45331",
        "pageSeq": 45331
    },
    {
        "IDcode": 45332,
        "title": "Hana Bunny - Kobeni - Page 1",
        "cover": "https://telegra.ph/file/6180141ffeffe9b018e1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45332",
        "pageSeq": 45332
    },
    {
        "IDcode": 45333,
        "title": "桃谷若姬子 - 西施 - Page 1",
        "cover": "https://telegra.ph/file/cce8bb1134bef1ba18fb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45333",
        "pageSeq": 45333
    },
    {
        "IDcode": 45334,
        "title": "[林檎蜜紀] 初コスプレ💖明日方舟🐰アークナイツ💖スケスケ白レオタードがえっち過ぎる💖愛重い系騎士グラベル🧸ちゃん💖_💖アクナイ、愛重い系騎士💖グラベルちゃん - Page 1",
        "cover": "https://telegra.ph/file/ab9c7041e2aabe1cf7875.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45334",
        "pageSeq": 45334
    },
    {
        "IDcode": 45335,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/5cab67da6b9c0e0fb2fa4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45335",
        "pageSeq": 45335
    },
    {
        "IDcode": 45336,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/274e490ad77ca9310af4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45336",
        "pageSeq": 45336
    },
    {
        "IDcode": 45337,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/12cb6a86beefee7e8f581.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45337",
        "pageSeq": 45337
    },
    {
        "IDcode": 45338,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ebbe05fd1b19e85dcb48a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45338",
        "pageSeq": 45338
    },
    {
        "IDcode": 45339,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/369cf61ccb2192256ac3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45339",
        "pageSeq": 45339
    },
    {
        "IDcode": 45340,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f527f9574813a6727257e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45340",
        "pageSeq": 45340
    },
    {
        "IDcode": 45341,
        "title": "[HERESY (林檎蜜紀)]322オートマタ2B - Page 1",
        "cover": "https://telegra.ph/file/d0b2e616f93033af1bdc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45341",
        "pageSeq": 45341
    },
    {
        "IDcode": 45342,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/7aee809e6a3c0eb42509c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45342",
        "pageSeq": 45342
    },
    {
        "IDcode": 45343,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8c63fb1c922e1ba7dba9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45343",
        "pageSeq": 45343
    },
    {
        "IDcode": 45344,
        "title": "- Page 2",
        "cover": "https://telegra.ph/file/275870c25fb1883686bec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45344",
        "pageSeq": 45344
    },
    {
        "IDcode": 45345,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2233000f122863d0c5bf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45345",
        "pageSeq": 45345
    },
    {
        "IDcode": 45346,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/961de87ddf29f7556d970.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45346",
        "pageSeq": 45346
    },
    {
        "IDcode": 45347,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/074e973e135e9ea9d605f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45347",
        "pageSeq": 45347
    },
    {
        "IDcode": 45348,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/58151deff713cc4fe1733.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45348",
        "pageSeq": 45348
    },
    {
        "IDcode": 45349,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f69069f94bcc342eeb1be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45349",
        "pageSeq": 45349
    },
    {
        "IDcode": 45350,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/40ea361e5bfec90f18ab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45350",
        "pageSeq": 45350
    },
    {
        "IDcode": 45351,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d7e2474f72308d0d543c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45351",
        "pageSeq": 45351
    },
    {
        "IDcode": 45352,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c0fb43f71b10a8e2005f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45352",
        "pageSeq": 45352
    },
    {
        "IDcode": 45353,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/a11b6fb92734373300b60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45353",
        "pageSeq": 45353
    },
    {
        "IDcode": 45354,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/91cfa5145e75b4ea111ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45354",
        "pageSeq": 45354
    },
    {
        "IDcode": 45355,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/dbede65f63efb504ab6b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45355",
        "pageSeq": 45355
    },
    {
        "IDcode": 45356,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9e4ada70ffbd971216561.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45356",
        "pageSeq": 45356
    },
    {
        "IDcode": 45357,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/4af8efbae2421f6e07f38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45357",
        "pageSeq": 45357
    },
    {
        "IDcode": 45358,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2a267f6c2512c929875f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45358",
        "pageSeq": 45358
    },
    {
        "IDcode": 45359,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/354b2f82e9945842a63c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45359",
        "pageSeq": 45359
    },
    {
        "IDcode": 45360,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/16dc1d55108bca1b24da2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45360",
        "pageSeq": 45360
    },
    {
        "IDcode": 45361,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/45f325e9c5e2dd3e3619c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45361",
        "pageSeq": 45361
    },
    {
        "IDcode": 45362,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d09ceeff0813497324489.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45362",
        "pageSeq": 45362
    },
    {
        "IDcode": 45363,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/3325f4c5ae8c66c73cff3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45363",
        "pageSeq": 45363
    },
    {
        "IDcode": 45364,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8916194c0bde0a0f8554d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45364",
        "pageSeq": 45364
    },
    {
        "IDcode": 45365,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8a99ec637455223bf95f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45365",
        "pageSeq": 45365
    },
    {
        "IDcode": 45366,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/53447e8494b5cb730f69f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45366",
        "pageSeq": 45366
    },
    {
        "IDcode": 45367,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/dce77510f60a056a313b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45367",
        "pageSeq": 45367
    },
    {
        "IDcode": 45368,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/13b02bd7b98322cb915b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45368",
        "pageSeq": 45368
    },
    {
        "IDcode": 45369,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/4badc32f8ec503940e718.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45369",
        "pageSeq": 45369
    },
    {
        "IDcode": 45370,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/dcf9b4d2d5a7378f70828.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45370",
        "pageSeq": 45370
    },
    {
        "IDcode": 45371,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c74c9c2ba9656370b0ca7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45371",
        "pageSeq": 45371
    }
];
