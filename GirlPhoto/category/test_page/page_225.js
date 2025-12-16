// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 44572,
        "title": "[BLUECAKE]  - Son YeEun 손예은 - Puss Puss (Cosplay ver.)",
        "cover": "https://telegra.ph/file/6452bb692d56dd141c413.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44572",
        "pageSeq": 44572
    },
    {
        "IDcode": 44573,
        "title": "Minichu - Kuki Shinobu",
        "cover": "https://telegra.ph/file/8b1c522e6cc6cad5f54c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44573",
        "pageSeq": 44573
    },
    {
        "IDcode": 44574,
        "title": "Byoru - Nezuko",
        "cover": "https://telegra.ph/file/3e8028462f01212ca3330.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44574",
        "pageSeq": 44574
    },
    {
        "IDcode": 44575,
        "title": "Minichu - Mashu Lingerie",
        "cover": "https://telegra.ph/file/e14bf132d6246614d9ad4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44575",
        "pageSeq": 44575
    },
    {
        "IDcode": 44576,
        "title": "[Tokar浵卡 Laurus]11月樋口円香 求11月视频",
        "cover": "https://telegra.ph/file/453450b7ceb7d19bdd50f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44576",
        "pageSeq": 44576
    },
    {
        "IDcode": 44577,
        "title": "ShiroKitsune - Marin Kitagawa（school uniform ）(My Dress-up Darling)",
        "cover": "https://telegra.ph/file/36f6bcad51a2274ce12ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44577",
        "pageSeq": 44577
    },
    {
        "IDcode": 44578,
        "title": "ShiroKitsune - Tamaki Kotatsu (Enen no shouboutai)",
        "cover": "https://telegra.ph/file/fb796298a1d5786ed907e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44578",
        "pageSeq": 44578
    },
    {
        "IDcode": 44579,
        "title": "ShiroKitsune - Christmas Mona（genshin impact）",
        "cover": "https://telegra.ph/file/964887df3e5d8b627d203.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44579",
        "pageSeq": 44579
    },
    {
        "IDcode": 44580,
        "title": "ShiroKitsune - Florence Nightingale（Fate/Grand Order）",
        "cover": "https://telegra.ph/file/11bb89bab8c0306c61bc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44580",
        "pageSeq": 44580
    },
    {
        "IDcode": 44581,
        "title": "Minichu - Ganyu cowkini",
        "cover": "https://telegra.ph/file/48c50cd263fd1ecf10460.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44581",
        "pageSeq": 44581
    },
    {
        "IDcode": 44582,
        "title": "ShiroKitsune - Rider Medusa（Fate/stay night）",
        "cover": "https://telegra.ph/file/ac4e73923d04d62c380d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44582",
        "pageSeq": 44582
    },
    {
        "IDcode": 44583,
        "title": "[PoppaChan] - None Gawr Gura",
        "cover": "https://telegra.ph/file/7a6b4af784918552cf492.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44583",
        "pageSeq": 44583
    },
    {
        "IDcode": 44584,
        "title": "KuukoW - Nahida selfies",
        "cover": "https://telegra.ph/file/c5e79529e7aa1098e84be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44584",
        "pageSeq": 44584
    },
    {
        "IDcode": 44585,
        "title": "[Tokar浵卡/Laurus]11月合集",
        "cover": "https://telegra.ph/file/90f938dfdfb5598f1c3b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44585",
        "pageSeq": 44585
    },
    {
        "IDcode": 44586,
        "title": "Byoru - Helm",
        "cover": "https://telegra.ph/file/715c79ec527e94d5352c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44586",
        "pageSeq": 44586
    },
    {
        "IDcode": 44587,
        "title": "Byoru - Nyotengu",
        "cover": "https://telegra.ph/file/9d509508b8aa0a9513a32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44587",
        "pageSeq": 44587
    },
    {
        "IDcode": 44588,
        "title": "Hokunaimeko 2B 蕾丝",
        "cover": "https://telegra.ph/file/472f25cb91a999c1e7cdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44588",
        "pageSeq": 44588
    },
    {
        "IDcode": 44589,
        "title": "白莉爱吃巧克力-雷电将军 [57P-795MB]",
        "cover": "https://telegra.ph/file/6b36d15630e61d70fd260.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44589",
        "pageSeq": 44589
    },
    {
        "IDcode": 44590,
        "title": "桃谷若姬子 - 申鹤",
        "cover": "https://telegra.ph/file/d0d116141cd746b608629.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44590",
        "pageSeq": 44590
    },
    {
        "IDcode": 44591,
        "title": "Joyce - Nero",
        "cover": "https://telegra.ph/file/ea23dc5d6d785e9e28070.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44591",
        "pageSeq": 44591
    },
    {
        "IDcode": 44592,
        "title": "桃谷若姬子 - 嫦娥 拒霜思",
        "cover": "https://telegra.ph/file/3d9f0f803d6b69cdf7ec2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44592",
        "pageSeq": 44592
    },
    {
        "IDcode": 44593,
        "title": "[Nagisa魔物喵] 英梨々ちゃん〜 (with mov)",
        "cover": "https://telegra.ph/file/e36d49ce93180984e842e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44593",
        "pageSeq": 44593
    },
    {
        "IDcode": 44594,
        "title": "[习呆呆] 伊什塔尔 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/2f91e39804d1c1a4e8357.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44594",
        "pageSeq": 44594
    },
    {
        "IDcode": 44595,
        "title": "Umeko J Mashu Dancer",
        "cover": "https://telegra.ph/file/d5868af27a932a4f06308.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44595",
        "pageSeq": 44595
    },
    {
        "IDcode": 44596,
        "title": "yuuhui玉汇 约尔",
        "cover": "https://telegra.ph/file/6cdc94a80273d3a22cb46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44596",
        "pageSeq": 44596
    },
    {
        "IDcode": 44597,
        "title": "Haki - Mai Shiranui",
        "cover": "https://telegra.ph/file/fde752f9f5259d4829516.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44597",
        "pageSeq": 44597
    },
    {
        "IDcode": 44598,
        "title": "Minichu - Android 18",
        "cover": "https://telegra.ph/file/c4ee69b97b7cc9805a268.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44598",
        "pageSeq": 44598
    },
    {
        "IDcode": 44599,
        "title": "水淼 - 八重神子",
        "cover": "https://telegra.ph/file/53e2fd2295d4f674eb257.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44599",
        "pageSeq": 44599
    },
    {
        "IDcode": 44600,
        "title": "Aery Tiefling - Mikasa Ackerman",
        "cover": "https://telegra.ph/file/868dfcd5e53b546f446e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44600",
        "pageSeq": 44600
    },
    {
        "IDcode": 44601,
        "title": "小仓千代w - 黛朵礼服",
        "cover": "https://telegra.ph/file/89367892c5ae525346929.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44601",
        "pageSeq": 44601
    },
    {
        "IDcode": 44602,
        "title": "HaneAme - 對魔忍-不知火寫真書 -BUNNY",
        "cover": "https://telegra.ph/file/789abdc894daf4f1071bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44602",
        "pageSeq": 44602
    },
    {
        "IDcode": 44603,
        "title": "32D阿西 11-12月福利",
        "cover": "https://telegra.ph/file/2eeaad1a8008945ae40cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44603",
        "pageSeq": 44603
    },
    {
        "IDcode": 44604,
        "title": "黏黏团子兔 - 蕾姆",
        "cover": "https://telegra.ph/file/174869840924b5d3c4123.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44604",
        "pageSeq": 44604
    },
    {
        "IDcode": 44605,
        "title": "黏黏团子兔 - 永劫胡桃",
        "cover": "https://telegra.ph/file/0c1e8e23070f74b5cb467.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44605",
        "pageSeq": 44605
    },
    {
        "IDcode": 44606,
        "title": "水淼 八重神子",
        "cover": "https://telegra.ph/file/eda72226facf9d04653b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44606",
        "pageSeq": 44606
    },
    {
        "IDcode": 44607,
        "title": "Byoru - Liliel",
        "cover": "https://telegra.ph/file/2aa80631682697bea93d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44607",
        "pageSeq": 44607
    },
    {
        "IDcode": 44608,
        "title": "上海阿西 推特cos散图",
        "cover": "https://telegra.ph/file/5e3edf7adcb7d6de91fba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44608",
        "pageSeq": 44608
    },
    {
        "IDcode": 44609,
        "title": "上海阿西 推特cos散图2",
        "cover": "https://telegra.ph/file/fcc5d8370b0d1471779a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44609",
        "pageSeq": 44609
    },
    {
        "IDcode": 44610,
        "title": "ZinieQ - Marie Rose",
        "cover": "https://telegra.ph/file/1053d08889bb3e393007e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44610",
        "pageSeq": 44610
    },
    {
        "IDcode": 44611,
        "title": "[Ringo Mitsuki] 今日はスケベ回！大人気♡原神・エウルア♡ムチムチ大量更新！無料さんも購入セットあり",
        "cover": "https://telegra.ph/file/3eed0baf5ed5533737042.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44611",
        "pageSeq": 44611
    },
    {
        "IDcode": 44612,
        "title": "Potato Godzilla - Mona Lingerie",
        "cover": "https://telegra.ph/file/3877e62366cae83e9d7f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44612",
        "pageSeq": 44612
    },
    {
        "IDcode": 44613,
        "title": "Shadory - Esdeath",
        "cover": "https://telegra.ph/file/ff1239b4319469faca902.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44613",
        "pageSeq": 44613
    },
    {
        "IDcode": 44614,
        "title": "Ino - Makima Body Straps",
        "cover": "https://telegra.ph/file/7bb5730e8e51f2cf8c772.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44614",
        "pageSeq": 44614
    },
    {
        "IDcode": 44615,
        "title": "Aery Tiefling - Shinobu Kochou",
        "cover": "https://telegra.ph/file/7f80ec1d5694bc35b3933.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44615",
        "pageSeq": 44615
    },
    {
        "IDcode": 44616,
        "title": "Minichu - Dark Nurse Tifa",
        "cover": "https://telegra.ph/file/b22e1091aab1a77e51354.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44616",
        "pageSeq": 44616
    },
    {
        "IDcode": 44617,
        "title": "黏黏团子兔 - 蕾姆花嫁",
        "cover": "https://telegra.ph/file/65ad11aa9d4ce40fc5551.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44617",
        "pageSeq": 44617
    },
    {
        "IDcode": 44618,
        "title": "HaneAme -Spy X Family",
        "cover": "https://telegra.ph/file/8ada09fa1bf1c10ea330b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44618",
        "pageSeq": 44618
    },
    {
        "IDcode": 44619,
        "title": "Quan冉有点饿 - 珀尔诺",
        "cover": "https://telegra.ph/file/8ef51d35b26204f26a8bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44619",
        "pageSeq": 44619
    },
    {
        "IDcode": 44620,
        "title": "[Byoru] FULLSET Nyotengu Fortune bikini",
        "cover": "https://telegra.ph/file/68b2ce9c138a41ea37906.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44620",
        "pageSeq": 44620
    },
    {
        "IDcode": 44621,
        "title": "Xenon - Motoko",
        "cover": "https://telegra.ph/file/0fd3102e4f1952794d993.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44621",
        "pageSeq": 44621
    },
    {
        "IDcode": 44622,
        "title": "Vinnegal - Makima & Reze",
        "cover": "https://telegra.ph/file/146c21330708bdbaba102.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44622",
        "pageSeq": 44622
    },
    {
        "IDcode": 44623,
        "title": "桜桃喵 - 雷电将军",
        "cover": "https://telegra.ph/file/6fd624f800eaa23a678a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44623",
        "pageSeq": 44623
    },
    {
        "IDcode": 44624,
        "title": "Letícia Shirayuki - 雏田",
        "cover": "https://telegra.ph/file/4f21ff653fa6b9fdf0106.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44624",
        "pageSeq": 44624
    },
    {
        "IDcode": 44625,
        "title": "Letícia Shirayuki - 玛奇玛（电锯人）",
        "cover": "https://telegra.ph/file/6f0adb057f9a6cfffa502.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44625",
        "pageSeq": 44625
    },
    {
        "IDcode": 44626,
        "title": "星之迟迟 - 约尔圣诞",
        "cover": "https://telegra.ph/file/71d8ea05322b0df6abf3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44626",
        "pageSeq": 44626
    },
    {
        "IDcode": 44627,
        "title": "KuukoW - Layla",
        "cover": "https://telegra.ph/file/660a814664ab623f4ce9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44627",
        "pageSeq": 44627
    },
    {
        "IDcode": 44628,
        "title": "Minichu - Red Riding Hood",
        "cover": "https://telegra.ph/file/69a65f038c21c7613cdad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44628",
        "pageSeq": 44628
    },
    {
        "IDcode": 44629,
        "title": "Azami - Esdeath",
        "cover": "https://telegra.ph/file/2322c4710bdea0442fc54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44629",
        "pageSeq": 44629
    },
    {
        "IDcode": 44630,
        "title": "阿包也是兔娘 明日方舟 w芭蕾",
        "cover": "https://telegra.ph/file/76e87462a38f58f95f341.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44630",
        "pageSeq": 44630
    },
    {
        "IDcode": 44631,
        "title": "[H a n e u l 💗] OnlyFans Compilation",
        "cover": "https://telegra.ph/file/31efd3b2b0c3c7a56990e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44631",
        "pageSeq": 44631
    },
    {
        "IDcode": 44632,
        "title": "[Fantasy Factory 小丁] miko kurokawa - 2022.04",
        "cover": "https://telegra.ph/file/07c2d2a09240010d42ac5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44632",
        "pageSeq": 44632
    },
    {
        "IDcode": 44633,
        "title": "Donna Loli - Cat Girl Lucy",
        "cover": "https://telegra.ph/file/d3820ab75a37704fba207.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44633",
        "pageSeq": 44633
    },
    {
        "IDcode": 44634,
        "title": "【三度_69】光荣凉夜香雪 [45P6V 497MB]",
        "cover": "https://telegra.ph/file/b1b1323d93fde605499d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44634",
        "pageSeq": 44634
    },
    {
        "IDcode": 44635,
        "title": "Letícia Shirayuki - 雅儿贝德 (Overlord)",
        "cover": "https://telegra.ph/file/5a44bc24f07242e69748b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44635",
        "pageSeq": 44635
    },
    {
        "IDcode": 44636,
        "title": "雪晴Astra - 雷电将军",
        "cover": "https://telegra.ph/file/15a63b842bd8709ca0d53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44636",
        "pageSeq": 44636
    },
    {
        "IDcode": 44637,
        "title": "秋和柯基 - 约尔福杰 Yor Forger",
        "cover": "https://telegra.ph/file/6c2f0c05a4a90975e1d04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44637",
        "pageSeq": 44637
    },
    {
        "IDcode": 44638,
        "title": "misswarmj - kokomi (genshin)",
        "cover": "https://telegra.ph/file/786b8ba53cdc2bf798d8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44638",
        "pageSeq": 44638
    },
    {
        "IDcode": 44639,
        "title": "misswarmj - shenhe (genshin)",
        "cover": "https://telegra.ph/file/d3313510e7ab275adf6a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44639",
        "pageSeq": 44639
    },
    {
        "IDcode": 44640,
        "title": "胡桃猫Kurumineko 玛丽罗斯 宝石之吻泳衣",
        "cover": "https://telegra.ph/file/98789cda656c6bea18d61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44640",
        "pageSeq": 44640
    },
    {
        "IDcode": 44641,
        "title": "[Comonun]BeLuこも合同本その2酒呑写真編",
        "cover": "https://telegra.ph/file/d6ea6692284a9155c0b9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44641",
        "pageSeq": 44641
    },
    {
        "IDcode": 44642,
        "title": "[Twitter] JOYCE (@Joyce_lin2x)",
        "cover": "https://telegra.ph/file/e0e0ceabb47f7d2dcee4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44642",
        "pageSeq": 44642
    },
    {
        "IDcode": 44643,
        "title": "Minichu - Tokisaki Kurumi",
        "cover": "https://telegra.ph/file/c10d01a9bc287d7826a00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44643",
        "pageSeq": 44643
    },
    {
        "IDcode": 44644,
        "title": "小青茗 喜多川海梦",
        "cover": "https://telegra.ph/file/cc1f74cfdd17f0b35f25c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44644",
        "pageSeq": 44644
    },
    {
        "IDcode": 44645,
        "title": "[Twitter] eliza喵喵 (@elizamiaomiao72)",
        "cover": "https://telegra.ph/file/25be330f7080902210026.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44645",
        "pageSeq": 44645
    },
    {
        "IDcode": 44646,
        "title": "桃谷若姬子 - 可莉",
        "cover": "https://telegra.ph/file/1bb1ed873312fa8c08c07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44646",
        "pageSeq": 44646
    },
    {
        "IDcode": 44647,
        "title": "【阿晶Akira&落落Raku】 青龍&白虎 [25P 138MB]",
        "cover": "https://telegra.ph/file/43ea1d1a8ea789b4cf0f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44647",
        "pageSeq": 44647
    },
    {
        "IDcode": 44648,
        "title": "Sayako(さやこ) - 阿库娅JK",
        "cover": "https://telegra.ph/file/53a062c0849a0c79ae6e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44648",
        "pageSeq": 44648
    },
    {
        "IDcode": 44649,
        "title": "Letícia Shirayuki - 纲手 (Naruto)",
        "cover": "https://telegra.ph/file/d0dab0918a48d55ec9ac8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44649",
        "pageSeq": 44649
    },
    {
        "IDcode": 44650,
        "title": "半半子x面饼仙儿 - 明日方舟黑x森蚺",
        "cover": "https://telegra.ph/file/e03284ca97d53f7989cc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44650",
        "pageSeq": 44650
    },
    {
        "IDcode": 44651,
        "title": "MissWarmJ - 春丽 （街头霸王）",
        "cover": "https://telegra.ph/file/1cef2e99f9060ff4703f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44651",
        "pageSeq": 44651
    },
    {
        "IDcode": 44652,
        "title": "Hana Bunny - Yae Miko",
        "cover": "https://telegra.ph/file/7582de5e8d31b4e45b997.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44652",
        "pageSeq": 44652
    },
    {
        "IDcode": 44653,
        "title": "Minichu - Scathach",
        "cover": "https://telegra.ph/file/5a87604854fb54f6eb6bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44653",
        "pageSeq": 44653
    },
    {
        "IDcode": 44654,
        "title": "Hana Bunny - Senate Tifa",
        "cover": "https://telegra.ph/file/9c825d2632d2cf6de9bed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44654",
        "pageSeq": 44654
    },
    {
        "IDcode": 44655,
        "title": "星之迟迟 - 约尔2人妻",
        "cover": "https://telegra.ph/file/58e47280cee92e939f7f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44655",
        "pageSeq": 44655
    },
    {
        "IDcode": 44656,
        "title": "Hana Bunny - Wednesday Addams",
        "cover": "https://telegra.ph/file/4f7b223b377fd31d2595d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44656",
        "pageSeq": 44656
    },
    {
        "IDcode": 44657,
        "title": "洛璃LoLiSAMA 不挠女仆 碧蓝航线",
        "cover": "https://telegra.ph/file/0e7f7ad6483d10a3fd763.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44657",
        "pageSeq": 44657
    },
    {
        "IDcode": 44658,
        "title": "爆机少女喵小吉&花音栗子 - 原神圣诞特辑",
        "cover": "https://telegra.ph/file/6480185dd1d467bc4691c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44658",
        "pageSeq": 44658
    },
    {
        "IDcode": 44659,
        "title": "爆机少女喵小吉 - 赛博朋克 边缘行者 Lucy",
        "cover": "https://telegra.ph/file/16ea9c06a66451279b107.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44659",
        "pageSeq": 44659
    },
    {
        "IDcode": 44660,
        "title": "Neyrodesu - Gawr Gura",
        "cover": "https://telegra.ph/file/657b943539aa6e3367ba3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44660",
        "pageSeq": 44660
    },
    {
        "IDcode": 44661,
        "title": "Octokuro - Compulsive Gambler Orgy",
        "cover": "https://telegra.ph/file/8e267c74e1683b712bb61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44661",
        "pageSeq": 44661
    },
    {
        "IDcode": 44662,
        "title": "[牛牛Niu] IJN Noshiro, dress ver. (アズールレーン)",
        "cover": "https://telegra.ph/file/69ce27d4bb72e8a8a476b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44662",
        "pageSeq": 44662
    },
    {
        "IDcode": 44663,
        "title": "Vandych - Draenei Alliance",
        "cover": "https://telegra.ph/file/70d22360bf2f839e25b65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44663",
        "pageSeq": 44663
    },
    {
        "IDcode": 44664,
        "title": "Lyvlas - Mavis",
        "cover": "https://telegra.ph/file/29a3c16b63beb52c76042.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44664",
        "pageSeq": 44664
    },
    {
        "IDcode": 44665,
        "title": "Bunny Ayumi - Hex Maniac",
        "cover": "https://telegra.ph/file/a0a28c3be7a49059083bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44665",
        "pageSeq": 44665
    },
    {
        "IDcode": 44666,
        "title": "[Misa米砂] Ahri Spirit Blossom",
        "cover": "https://telegra.ph/file/fcef4164aa425c8ed6bca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44666",
        "pageSeq": 44666
    },
    {
        "IDcode": 44667,
        "title": "ShaeUnderscore - Misty",
        "cover": "https://telegra.ph/file/c8e08b602c39f8c576821.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44667",
        "pageSeq": 44667
    },
    {
        "IDcode": 44668,
        "title": "Sally Dorasnow - Gura Bikini",
        "cover": "https://telegra.ph/file/7de58bab27358fa97f8f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44668",
        "pageSeq": 44668
    },
    {
        "IDcode": 44669,
        "title": "LovelySpaceKitten - Mitsuki Bakugou",
        "cover": "https://telegra.ph/file/a014308deff7145eac151.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44669",
        "pageSeq": 44669
    },
    {
        "IDcode": 44670,
        "title": "tenletters - Emilia (Re:Zero)",
        "cover": "https://telegra.ph/file/2eaf12c1461eb8f12275e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44670",
        "pageSeq": 44670
    },
    {
        "IDcode": 44671,
        "title": "Donnaloli - Tifa",
        "cover": "https://telegra.ph/file/a5cc3607112bcaffc6f0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44671",
        "pageSeq": 44671
    }
];
