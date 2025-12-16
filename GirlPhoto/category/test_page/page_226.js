// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 44672,
        "title": "[Shooting Star's (Saku)] MidSummerPink",
        "cover": "https://telegra.ph/file/3e0152c253c13142498b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44672",
        "pageSeq": 44672
    },
    {
        "IDcode": 44673,
        "title": "[COSH-094] こすっち094 ようこそ、孕まSEX戦線へ",
        "cover": "https://telegra.ph/file/f0da6cad08c4f456ddf51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44673",
        "pageSeq": 44673
    },
    {
        "IDcode": 44674,
        "title": "Kalinka Fox - Violet Parr",
        "cover": "https://telegra.ph/file/7d2f73048d938cc1f98c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44674",
        "pageSeq": 44674
    },
    {
        "IDcode": 44675,
        "title": "Alina Becker - Widowmaker x Tracer",
        "cover": "https://telegra.ph/file/8576d34737683bc40314a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44675",
        "pageSeq": 44675
    },
    {
        "IDcode": 44676,
        "title": "Alina Becker - 2B",
        "cover": "https://telegra.ph/file/ef3ab53a0edd22fe5c481.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44676",
        "pageSeq": 44676
    },
    {
        "IDcode": 44677,
        "title": "AlinaBecker - Tifa Lingerie",
        "cover": "https://telegra.ph/file/9fcf849c084996cd49021.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44677",
        "pageSeq": 44677
    },
    {
        "IDcode": 44678,
        "title": "Alina Becker - 2B Maid",
        "cover": "https://telegra.ph/file/0c962bd7fa931704cc35e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44678",
        "pageSeq": 44678
    },
    {
        "IDcode": 44679,
        "title": "Aokotan - Ganyu",
        "cover": "https://telegra.ph/file/b7bde9ca247829fb5ef83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44679",
        "pageSeq": 44679
    },
    {
        "IDcode": 44680,
        "title": "[COSH-101] こすっち101 第一宇宙速度では脱出不可能なブラックホール級おっぱい＆おマ●コにチ●ポをスイングバイ！ムチムチ色白がマジのマシュマロで激エロ！たわわなデカパイが奥を突かれる度に痙攣イキ孕まSEX！！",
        "cover": "https://telegra.ph/file/5c8a4317f92288be4614a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44680",
        "pageSeq": 44680
    },
    {
        "IDcode": 44681,
        "title": "Lera Himera - Azula",
        "cover": "https://telegra.ph/file/47539df02976bedffbcac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44681",
        "pageSeq": 44681
    },
    {
        "IDcode": 44682,
        "title": "Pialoof - Hinata",
        "cover": "https://telegra.ph/file/6579baa052b181d38f014.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44682",
        "pageSeq": 44682
    },
    {
        "IDcode": 44683,
        "title": "Rusty Fawkes - 2B",
        "cover": "https://telegra.ph/file/a684e633589eba5449445.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44683",
        "pageSeq": 44683
    },
    {
        "IDcode": 44684,
        "title": "Amy fantasy - Elf Archer",
        "cover": "https://telegra.ph/file/a4f0047ba08727ee372a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44684",
        "pageSeq": 44684
    },
    {
        "IDcode": 44685,
        "title": "[こすっち]こすっち103/ミニマム146cm超究極クビレ轟絶癒やし系ロ●ビッチ彼氏持ち美少女ナマ中出しNTR凶行！誰もが犯したくなるレベルの被虐大好きドMちゃん！首絞めで妊娠力爆上がり孕まSEX！！",
        "cover": "https://telegra.ph/file/8905d9d9cc412e4ecd77c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44685",
        "pageSeq": 44685
    },
    {
        "IDcode": 44686,
        "title": "Yoshinobi - Kokoro",
        "cover": "https://telegra.ph/file/9ef06cfdacb628278280e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44686",
        "pageSeq": 44686
    },
    {
        "IDcode": 44687,
        "title": "DarkWaifuTrap - Spider Gwen",
        "cover": "https://telegra.ph/file/37cf07acd6309a66d3dc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44687",
        "pageSeq": 44687
    },
    {
        "IDcode": 44688,
        "title": "Kalinka Fox - Midnight",
        "cover": "https://telegra.ph/file/16bdd78362b9f899c1650.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44688",
        "pageSeq": 44688
    },
    {
        "IDcode": 44689,
        "title": "Domi - Yoruichi Shihoin Shower",
        "cover": "https://telegra.ph/file/41284eabe0b8d7bbe197f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44689",
        "pageSeq": 44689
    },
    {
        "IDcode": 44690,
        "title": "黒崎ちとせ×白雪千夜 コスプレROM",
        "cover": "https://telegra.ph/file/e63026558784f8d5958fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44690",
        "pageSeq": 44690
    },
    {
        "IDcode": 44691,
        "title": "Lada Lyumos - Black Widow",
        "cover": "https://telegra.ph/file/a2a7619c92d5a07f2a8ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44691",
        "pageSeq": 44691
    },
    {
        "IDcode": 44692,
        "title": "HaneAme - Kiara Sessyoin Xmas",
        "cover": "https://telegra.ph/file/ca3de0ef372e938b03bc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44692",
        "pageSeq": 44692
    },
    {
        "IDcode": 44693,
        "title": "[沖田凜花Rinka] HMS Glorious, pungent plum ver. (アズールレーン)",
        "cover": "https://telegra.ph/file/bcaa6b35a4e54b64b0924.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44693",
        "pageSeq": 44693
    },
    {
        "IDcode": 44694,
        "title": "DarkWaifuTrap - 2B",
        "cover": "https://telegra.ph/file/daf65a9b33fe8dc7243c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44694",
        "pageSeq": 44694
    },
    {
        "IDcode": 44695,
        "title": "Lucy Langley - Bayonetta",
        "cover": "https://telegra.ph/file/bd3eb51d24d5ca5f7e514.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44695",
        "pageSeq": 44695
    },
    {
        "IDcode": 44696,
        "title": "Alina Becker as Harley Quinn",
        "cover": "https://telegra.ph/file/79922532e76134ef2e3bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44696",
        "pageSeq": 44696
    },
    {
        "IDcode": 44697,
        "title": "Meryl Sama - Mikasa Ackerman",
        "cover": "https://telegra.ph/file/a5b7064d7e75df06b0a7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44697",
        "pageSeq": 44697
    },
    {
        "IDcode": 44698,
        "title": "LillybetRose - Quiet",
        "cover": "https://telegra.ph/file/a825337475a33e5690d26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44698",
        "pageSeq": 44698
    },
    {
        "IDcode": 44699,
        "title": "Tokiwa Fanbox Collection",
        "cover": "https://telegra.ph/file/449a7f6f4d5bfcd1f9cbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44699",
        "pageSeq": 44699
    },
    {
        "IDcode": 44700,
        "title": "[DestinyCrossplay] Mona X Monareverse",
        "cover": "https://telegra.ph/file/f679b3eec0b9dd13fe097.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44700",
        "pageSeq": 44700
    },
    {
        "IDcode": 44701,
        "title": "阿包也是兔娘 蒂法",
        "cover": "https://telegra.ph/file/a350922ee62bb14a4a595.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44701",
        "pageSeq": 44701
    },
    {
        "IDcode": 44702,
        "title": "Aery Tiefling - Junko Enoshima",
        "cover": "https://telegra.ph/file/b3cd36f1af786aed1ea19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44702",
        "pageSeq": 44702
    },
    {
        "IDcode": 44703,
        "title": "Joyce - Miku",
        "cover": "https://telegra.ph/file/35bc125c7e345ec9f155b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44703",
        "pageSeq": 44703
    },
    {
        "IDcode": 44704,
        "title": "Lostwind10 - Klee",
        "cover": "https://telegra.ph/file/ac26a14f680f8f0b768f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44704",
        "pageSeq": 44704
    },
    {
        "IDcode": 44705,
        "title": "桃谷若姬子 - Gura",
        "cover": "https://telegra.ph/file/8693b839b6d6bcef973d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44705",
        "pageSeq": 44705
    },
    {
        "IDcode": 44706,
        "title": "misswarmj - 喜多川海梦（更衣人偶坠入爱河）",
        "cover": "https://telegra.ph/file/fbeb386f691098120c0e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44706",
        "pageSeq": 44706
    },
    {
        "IDcode": 44707,
        "title": "星之迟迟- 约尔3 太太的极密东洋任务",
        "cover": "https://telegra.ph/file/293bf04dac613bb20eff8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44707",
        "pageSeq": 44707
    },
    {
        "IDcode": 44708,
        "title": "[乃夜舞]  魅魔X恋",
        "cover": "https://telegra.ph/file/e433da391427e97cf883f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44708",
        "pageSeq": 44708
    },
    {
        "IDcode": 44709,
        "title": "仙仙桃-喜多川海夢",
        "cover": "https://telegra.ph/file/3931de26028c302e007f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44709",
        "pageSeq": 44709
    },
    {
        "IDcode": 44710,
        "title": "【少女映畫】雷电将军 | Raiden Shogun",
        "cover": "https://telegra.ph/file/0f1c86e9dad05ca34038a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44710",
        "pageSeq": 44710
    },
    {
        "IDcode": 44711,
        "title": "【少女映畫】虞姬 | Yu Miaoyi",
        "cover": "https://telegra.ph/file/077f63e99051a69d6325b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44711",
        "pageSeq": 44711
    },
    {
        "IDcode": 44712,
        "title": "【少女映畫】明日香新版 | Asuka Langley Soryu new",
        "cover": "https://telegra.ph/file/aa626bd66426cee8cd615.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44712",
        "pageSeq": 44712
    },
    {
        "IDcode": 44713,
        "title": "rioko凉凉子 - 雪女兔女郎",
        "cover": "https://telegra.ph/file/0e89899f631b2bbd0ccbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44713",
        "pageSeq": 44713
    },
    {
        "IDcode": 44714,
        "title": "Natsuko夏夏子 - 约尔毛衣",
        "cover": "https://telegra.ph/file/73d7ed984d7d1fc384e95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44714",
        "pageSeq": 44714
    },
    {
        "IDcode": 44715,
        "title": "Yamisung - Karin",
        "cover": "https://telegra.ph/file/1a7dadb004f280ff33f20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44715",
        "pageSeq": 44715
    },
    {
        "IDcode": 44716,
        "title": "kaya huang & arty huang",
        "cover": "https://telegra.ph/file/ca7f129e32e762db7ab84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44716",
        "pageSeq": 44716
    },
    {
        "IDcode": 44717,
        "title": "Mona Megistu",
        "cover": "https://telegra.ph/file/eb38e5107fa9aeb15a4a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44717",
        "pageSeq": 44717
    },
    {
        "IDcode": 44718,
        "title": "[ふぃに] 島風",
        "cover": "https://telegra.ph/file/a8658df2c449330538539.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44718",
        "pageSeq": 44718
    },
    {
        "IDcode": 44719,
        "title": "雨波_HaneAme -  艾尔登法环 Elden Ring FIA [28P-118MB]",
        "cover": "https://telegra.ph/file/42b36309cf419fd9d27cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44719",
        "pageSeq": 44719
    },
    {
        "IDcode": 44720,
        "title": "Aery Tiefling - Zero Suit Samus",
        "cover": "https://telegra.ph/file/77d551315dcf0cb0429a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44720",
        "pageSeq": 44720
    },
    {
        "IDcode": 44721,
        "title": "Ely - Marin Kitagawa",
        "cover": "https://telegra.ph/file/90e762075301b65e7aa24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44721",
        "pageSeq": 44721
    },
    {
        "IDcode": 44722,
        "title": "Arty-Huang - Yae Sakura",
        "cover": "https://telegra.ph/file/4e6bca742b283c3a929ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44722",
        "pageSeq": 44722
    },
    {
        "IDcode": 44723,
        "title": "KuukoW - Laplus Darkness",
        "cover": "https://telegra.ph/file/32f101bfc55d6a4706652.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44723",
        "pageSeq": 44723
    },
    {
        "IDcode": 44724,
        "title": "星之迟迟 - 11月计划A 杀戮都市-下平玲花",
        "cover": "https://telegra.ph/file/3e23c63ab7b0116f933f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44724",
        "pageSeq": 44724
    },
    {
        "IDcode": 44725,
        "title": "Yamisung - Mashu",
        "cover": "https://telegra.ph/file/b704cd9c48da30bc28444.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44725",
        "pageSeq": 44725
    },
    {
        "IDcode": 44726,
        "title": "Tupina - 腐川冬子 弹丸论破",
        "cover": "https://telegra.ph/file/f6ae1cd2f39db7f16a803.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44726",
        "pageSeq": 44726
    },
    {
        "IDcode": 44727,
        "title": "凉凉子 - Yat Sen: Oath",
        "cover": "https://telegra.ph/file/09dd299d76674a789a99d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44727",
        "pageSeq": 44727
    },
    {
        "IDcode": 44728,
        "title": "裏垢女子（）愛宕さん",
        "cover": "https://telegra.ph/file/29ea13186e5e0d90bf015.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44728",
        "pageSeq": 44728
    },
    {
        "IDcode": 44729,
        "title": "kaya萱-尤拉",
        "cover": "https://telegra.ph/file/a54f2960b3fbaf7b49eb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44729",
        "pageSeq": 44729
    },
    {
        "IDcode": 44730,
        "title": "Lostwind10 - Minato Aqua",
        "cover": "https://telegra.ph/file/aa9c9ce0538cddb21ae9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44730",
        "pageSeq": 44730
    },
    {
        "IDcode": 44731,
        "title": "Meikoui - Tifa",
        "cover": "https://telegra.ph/file/c23d8678e872ec1342843.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44731",
        "pageSeq": 44731
    },
    {
        "IDcode": 44732,
        "title": "Lostwind10 - Noshiro",
        "cover": "https://telegra.ph/file/3d5ecd9d09c8ebb411a29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44732",
        "pageSeq": 44732
    },
    {
        "IDcode": 44733,
        "title": "Byoru - Emma",
        "cover": "https://telegra.ph/file/d93d837229e1b8f97939c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44733",
        "pageSeq": 44733
    },
    {
        "IDcode": 44734,
        "title": "[迷之呆梨]自撮り写真 Yor Forger 约尔·福杰",
        "cover": "https://telegra.ph/file/612d7b18f5cbda38d917a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44734",
        "pageSeq": 44734
    },
    {
        "IDcode": 44735,
        "title": "Hana Bunny - Volume",
        "cover": "https://telegra.ph/file/2775c6ea8d338ccfb77f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44735",
        "pageSeq": 44735
    },
    {
        "IDcode": 44736,
        "title": "Yamisung - Asuna",
        "cover": "https://telegra.ph/file/ece15b37f2ece45b6189a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44736",
        "pageSeq": 44736
    },
    {
        "IDcode": 44737,
        "title": "KuukoW - Yor Forger",
        "cover": "https://telegra.ph/file/ddf5acb39477ad055f482.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44737",
        "pageSeq": 44737
    },
    {
        "IDcode": 44738,
        "title": "小青茗 - 黑呆毛王",
        "cover": "https://telegra.ph/file/eb006e0facf7f87e9d32a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44738",
        "pageSeq": 44738
    },
    {
        "IDcode": 44739,
        "title": "Nyako喵子 - DOAほのか",
        "cover": "https://telegra.ph/file/452d5959d902cd4cc68ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44739",
        "pageSeq": 44739
    },
    {
        "IDcode": 44740,
        "title": "桃暖酱 - 雷姆兔女郎",
        "cover": "https://telegra.ph/file/782d545c75565c71c3958.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44740",
        "pageSeq": 44740
    },
    {
        "IDcode": 44741,
        "title": "rioko凉凉子 - 丽塔浣溪沙",
        "cover": "https://telegra.ph/file/4b9e1ec598ebe9e153f26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44741",
        "pageSeq": 44741
    },
    {
        "IDcode": 44742,
        "title": "[ふぃに]  初音ミク",
        "cover": "https://telegra.ph/file/a703f0f2557d89b9ae73b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44742",
        "pageSeq": 44742
    },
    {
        "IDcode": 44743,
        "title": "[ZIZG-004TA] 上原亜衣 デジタル写真集・対魔忍ムラサキ購入特典",
        "cover": "https://telegra.ph/file/fecf8047b61d8d26a67b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44743",
        "pageSeq": 44743
    },
    {
        "IDcode": 44744,
        "title": "[迷之呆梨]自撮り写真 Yor Forger 约尔·福杰",
        "cover": "https://telegra.ph/file/612d7b18f5cbda38d917a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44744",
        "pageSeq": 44744
    },
    {
        "IDcode": 44745,
        "title": "星之迟迟 - 黑贞",
        "cover": "https://telegra.ph/file/71180f7844a1adfb42199.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44745",
        "pageSeq": 44745
    },
    {
        "IDcode": 44746,
        "title": "猫と爪呸罗呸罗-纳西妲（猫爪呸罗呸罗）",
        "cover": "https://telegra.ph/file/520ec6fcd0d845aa29d60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44746",
        "pageSeq": 44746
    },
    {
        "IDcode": 44747,
        "title": "Minichu - 2B Xmas present",
        "cover": "https://telegra.ph/file/9c7022b67e69820d760e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44747",
        "pageSeq": 44747
    },
    {
        "IDcode": 44748,
        "title": "Minichu - Bunny Miku",
        "cover": "https://telegra.ph/file/a47fda2b51a7baa03ea1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44748",
        "pageSeq": 44748
    },
    {
        "IDcode": 44749,
        "title": "mikaying - Miss Hina",
        "cover": "https://telegra.ph/file/0933aded1551862849a16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44749",
        "pageSeq": 44749
    },
    {
        "IDcode": 44750,
        "title": "Hane Ame - Yor Forger",
        "cover": "https://telegra.ph/file/da15f130a9163037cfe62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44750",
        "pageSeq": 44750
    },
    {
        "IDcode": 44751,
        "title": "Yamisung - Le Malin",
        "cover": "https://telegra.ph/file/2c72f6300c3b03660142e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44751",
        "pageSeq": 44751
    },
    {
        "IDcode": 44752,
        "title": "Shirokitsune - Bunny Zero Two",
        "cover": "https://telegra.ph/file/260ca21fce7d7266e6855.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44752",
        "pageSeq": 44752
    },
    {
        "IDcode": 44753,
        "title": "Byoru - Chun-li",
        "cover": "https://telegra.ph/file/2b94d3ab4160688a72ee0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44753",
        "pageSeq": 44753
    },
    {
        "IDcode": 44754,
        "title": "Mikomin - Wednesday Addams",
        "cover": "https://telegra.ph/file/cd78a19be0dddce4330aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44754",
        "pageSeq": 44754
    },
    {
        "IDcode": 44755,
        "title": "Yamisung - Nurse Makima",
        "cover": "https://telegra.ph/file/ae8ed350db7d808432ad2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44755",
        "pageSeq": 44755
    },
    {
        "IDcode": 44756,
        "title": "爆机少女喵小吉 NO.067 原神-纳西妲",
        "cover": "https://telegra.ph/file/3336a5459e4fc94b2a67b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44756",
        "pageSeq": 44756
    },
    {
        "IDcode": 44757,
        "title": "SonyaVIbe - Makoto",
        "cover": "https://telegra.ph/file/bf3df7239a10cc3dbf7ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44757",
        "pageSeq": 44757
    },
    {
        "IDcode": 44758,
        "title": "HaneAme - 對魔忍-不知火寫真書 -LINGERIE",
        "cover": "https://telegra.ph/file/ee37f3d03108c4f3b42aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44758",
        "pageSeq": 44758
    },
    {
        "IDcode": 44759,
        "title": "猫と爪呸罗呸罗-HK416（猫爪呸罗呸罗）",
        "cover": "https://telegra.ph/file/3b647dd343a15ced80113.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44759",
        "pageSeq": 44759
    },
    {
        "IDcode": 44760,
        "title": "Meladinha - Ryuko Matoi",
        "cover": "https://telegra.ph/file/7e4541ae617f15c4faf2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44760",
        "pageSeq": 44760
    },
    {
        "IDcode": 44761,
        "title": "ブロッコリー Shirakami Fubuki",
        "cover": "https://telegra.ph/file/f8940765f9ea51fe36d99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44761",
        "pageSeq": 44761
    },
    {
        "IDcode": 44762,
        "title": "AT鲨 - 刻晴",
        "cover": "https://telegra.ph/file/2b1e75b244960a03f9c0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44762",
        "pageSeq": 44762
    },
    {
        "IDcode": 44763,
        "title": "水淼Aqua - 喜多川海梦",
        "cover": "https://telegra.ph/file/2bc807d943063a9384309.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44763",
        "pageSeq": 44763
    },
    {
        "IDcode": 44764,
        "title": "Meenfox - Rupee",
        "cover": "https://telegra.ph/file/b07df94d1f5d2702e22e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44764",
        "pageSeq": 44764
    },
    {
        "IDcode": 44765,
        "title": "Vinnegal - Himeno",
        "cover": "https://telegra.ph/file/d4933fe2125fde8b15a38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44765",
        "pageSeq": 44765
    },
    {
        "IDcode": 44766,
        "title": "Kaya Huang - Bunny Asuna",
        "cover": "https://telegra.ph/file/eec03e6d110d9c99d1a70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44766",
        "pageSeq": 44766
    },
    {
        "IDcode": 44767,
        "title": "Pingping - MISA AMANE",
        "cover": "https://telegra.ph/file/689d31ff0cd35913e1b1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44767",
        "pageSeq": 44767
    },
    {
        "IDcode": 44768,
        "title": "Byoru - Nico Robin",
        "cover": "https://telegra.ph/file/afcb49e40d296d240cd3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44768",
        "pageSeq": 44768
    },
    {
        "IDcode": 44769,
        "title": "Aqua area - Hayasaka Ai （selfie）",
        "cover": "https://telegra.ph/file/9a41dcb501ae5c5f6c1e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44769",
        "pageSeq": 44769
    },
    {
        "IDcode": 44770,
        "title": "ヤマト",
        "cover": "https://telegra.ph/file/ba548ea9781d14b855571.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44770",
        "pageSeq": 44770
    },
    {
        "IDcode": 44771,
        "title": "Yae Miko & Raiden - Shirogane & Misaki Sai",
        "cover": "https://telegra.ph/file/65e86c6b5f0fb48f1990d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44771",
        "pageSeq": 44771
    }
];
