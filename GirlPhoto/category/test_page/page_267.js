// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 48772,
        "title": "Oichi - Bunny Marin - Page 1",
        "cover": "https://telegra.ph/file/0d64ce8fe801f426f58ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48772",
        "pageSeq": 48772
    },
    {
        "IDcode": 48773,
        "title": "Hana Bunny - Fiona Frost - Page 1",
        "cover": "https://telegra.ph/file/c4d56e5696eeec1805b56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48773",
        "pageSeq": 48773
    },
    {
        "IDcode": 48774,
        "title": "小仓千代w - 剑圣女 - Page 1",
        "cover": "https://telegra.ph/file/65c5484d643cca710be40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48774",
        "pageSeq": 48774
    },
    {
        "IDcode": 48775,
        "title": "Minichu - Bulma - Page 1",
        "cover": "https://telegra.ph/file/71f8bb426c8f46becbcfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48775",
        "pageSeq": 48775
    },
    {
        "IDcode": 48776,
        "title": "[テレビ] 雷電将軍OL - Page 1",
        "cover": "https://telegra.ph/file/dbf9bb747cd241c155a3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48776",
        "pageSeq": 48776
    },
    {
        "IDcode": 48777,
        "title": "Minichu - Uta - Page 1",
        "cover": "https://telegra.ph/file/299cc0ad699bd7640515c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48777",
        "pageSeq": 48777
    },
    {
        "IDcode": 48778,
        "title": "宮本桜 - 奥古斯特 女仆装 - Page 1",
        "cover": "https://telegra.ph/file/11f6864bcefb6cf12b044.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48778",
        "pageSeq": 48778
    },
    {
        "IDcode": 48779,
        "title": "洛璃 2B忍者 - Page 1",
        "cover": "https://telegra.ph/file/d0d35d7c69f9bb0bd0042.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48779",
        "pageSeq": 48779
    },
    {
        "IDcode": 48780,
        "title": "桃谷若姬子 - 阿狸 - Page 1",
        "cover": "https://telegra.ph/file/6a81885df36d240e99189.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48780",
        "pageSeq": 48780
    },
    {
        "IDcode": 48781,
        "title": "桃谷若姬子 - 公孙离 - Page 1",
        "cover": "https://telegra.ph/file/9641c43c93af6e9632cde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48781",
        "pageSeq": 48781
    },
    {
        "IDcode": 48782,
        "title": "桃谷若姬子 - Rizu-kyun - Page 1",
        "cover": "https://telegra.ph/file/a7b38f942b605a7d0a4e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48782",
        "pageSeq": 48782
    },
    {
        "IDcode": 48783,
        "title": "桃谷若姬子 - Rizu-kyun - Page 1",
        "cover": "https://telegra.ph/file/a7b38f942b605a7d0a4e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48783",
        "pageSeq": 48783
    },
    {
        "IDcode": 48784,
        "title": "[秋和柯基] 宁红夜同人 永劫无间 Naraka Viper Ning - Page 1",
        "cover": "https://telegra.ph/file/2d616f012a1ca96eae29f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48784",
        "pageSeq": 48784
    },
    {
        "IDcode": 48785,
        "title": "紧急企划 - EX-009 见希w - Page 1",
        "cover": "https://telegra.ph/file/46f6ec37bfa1b8b9516e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48785",
        "pageSeq": 48785
    },
    {
        "IDcode": 48786,
        "title": "安食Ajiki - 黄豆粉 - Page 1",
        "cover": "https://telegra.ph/file/4841debee75f1f797af82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48786",
        "pageSeq": 48786
    },
    {
        "IDcode": 48787,
        "title": "Gremlynne - Mavis - Page 1",
        "cover": "https://telegra.ph/file/07dbee6adb5dcaa2f12d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48787",
        "pageSeq": 48787
    },
    {
        "IDcode": 48788,
        "title": "阿九从不咕咕(九言) - 甘雨 - Page 1",
        "cover": "https://telegra.ph/file/8631a35f902974983d36a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48788",
        "pageSeq": 48788
    },
    {
        "IDcode": 48789,
        "title": "Yoshinobi - Satanya - Page 1",
        "cover": "https://telegra.ph/file/837567e446e654678b442.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48789",
        "pageSeq": 48789
    },
    {
        "IDcode": 48790,
        "title": "Yoshinobi - Spooky Uzaki - Page 1",
        "cover": "https://telegra.ph/file/7da3e2fe5e418183849cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48790",
        "pageSeq": 48790
    },
    {
        "IDcode": 48791,
        "title": "Sweetie Fox - Wednesday Addams - Page 1",
        "cover": "https://telegra.ph/file/bc046c5b5aaf75fc8b24b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48791",
        "pageSeq": 48791
    },
    {
        "IDcode": 48792,
        "title": "sweetiefox nami - Page 1",
        "cover": "https://telegra.ph/file/f9612fe3b507f42e39c25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48792",
        "pageSeq": 48792
    },
    {
        "IDcode": 48793,
        "title": "Luisa_零纱 - NO.02 新泽西兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/29f79990eb9ec88577f1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48793",
        "pageSeq": 48793
    },
    {
        "IDcode": 48794,
        "title": "花リリ - 更衣人偶坠入爱河写真集 - Page 1",
        "cover": "https://telegra.ph/file/b23c8aa53d9521cfcb85e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48794",
        "pageSeq": 48794
    },
    {
        "IDcode": 48795,
        "title": "Queenie Chuppy - Helena Douglas - Page 1",
        "cover": "https://telegra.ph/file/a3b029f455bd50e4c5331.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48795",
        "pageSeq": 48795
    },
    {
        "IDcode": 48796,
        "title": "沖田凜花 - 雷電將軍 - Page 1",
        "cover": "https://telegra.ph/file/67599b024daf0fe2c069e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48796",
        "pageSeq": 48796
    },
    {
        "IDcode": 48797,
        "title": "秋和柯基 - Nier  Automata - 2B - Page 1",
        "cover": "https://telegra.ph/file/248caa275d1ec804d7e17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48797",
        "pageSeq": 48797
    },
    {
        "IDcode": 48798,
        "title": "Octokuro - Princess Peach - Page 1",
        "cover": "https://telegra.ph/file/15cfd1139b81e7e010a11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48798",
        "pageSeq": 48798
    },
    {
        "IDcode": 48799,
        "title": "Alina Becker – Princess Zelda - Page 1",
        "cover": "https://telegra.ph/file/b0be74e7988897d0ba170.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48799",
        "pageSeq": 48799
    },
    {
        "IDcode": 48800,
        "title": "Byoru - Aeolian - Page 1",
        "cover": "https://telegra.ph/file/d0b50985f1ade49d88e94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48800",
        "pageSeq": 48800
    },
    {
        "IDcode": 48801,
        "title": "KaYa 萱 - アズールレーン イラストリアス - Page 1",
        "cover": "https://telegra.ph/file/1a6869c187c381e4c417d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48801",
        "pageSeq": 48801
    },
    {
        "IDcode": 48802,
        "title": "NinJA阿寨寨&千煌弑夜 EVELYNN 1.0 - Page 1",
        "cover": "https://telegra.ph/file/f44df82314aae735a3e47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48802",
        "pageSeq": 48802
    },
    {
        "IDcode": 48803,
        "title": "yuuhui玉汇 NO.013 PA-15 泳装 - Page 1",
        "cover": "https://telegra.ph/file/7a276819a7d62c86d9add.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48803",
        "pageSeq": 48803
    },
    {
        "IDcode": 48804,
        "title": "[阿包也是兔娘] NO.48 1月舰长 能代女仆 Azur Lane Noshiro Maid - Page 1",
        "cover": "https://telegra.ph/file/e3d2110f53e5599057bd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48804",
        "pageSeq": 48804
    },
    {
        "IDcode": 48805,
        "title": "Hana Bunny x Hane Ame - Ping Yi x Jin Lian - Page 1",
        "cover": "https://telegra.ph/file/8fe1c8a8a028b48bb4225.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48805",
        "pageSeq": 48805
    },
    {
        "IDcode": 48806,
        "title": "Lady Melamori - Marin - Page 1",
        "cover": "https://telegra.ph/file/d758d5f6fd9a3d9914d2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48806",
        "pageSeq": 48806
    },
    {
        "IDcode": 48807,
        "title": "阿包也是兔娘 - 森蚺 - Page 1",
        "cover": "https://telegra.ph/file/dfa2a659fcb21a5c040d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48807",
        "pageSeq": 48807
    },
    {
        "IDcode": 48808,
        "title": "Sayo Momo - Saber Alter the devil - Page 1",
        "cover": "https://telegra.ph/file/3841a40a37164eff9222c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48808",
        "pageSeq": 48808
    },
    {
        "IDcode": 48809,
        "title": "[Sameki] 下江コハル - Page 1",
        "cover": "https://telegra.ph/file/5a3fb2df5248119b9ed89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48809",
        "pageSeq": 48809
    },
    {
        "IDcode": 48810,
        "title": "Saiwari_ph - Marin and Ryzu - Page 1",
        "cover": "https://telegra.ph/file/346caf83927c85e939416.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48810",
        "pageSeq": 48810
    },
    {
        "IDcode": 48811,
        "title": "Maria Desu - Makima - Page 1",
        "cover": "https://telegra.ph/file/6832dd60ef7071177b439.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48811",
        "pageSeq": 48811
    },
    {
        "IDcode": 48812,
        "title": "一北亦北 - 天命之子玉藻前 - Page 1",
        "cover": "https://telegra.ph/file/77849fa6791d300a49dd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48812",
        "pageSeq": 48812
    },
    {
        "IDcode": 48813,
        "title": "Neppu - Utaha Kasumigaoka - Page 1",
        "cover": "https://telegra.ph/file/ad1d638214497009650b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48813",
        "pageSeq": 48813
    },
    {
        "IDcode": 48814,
        "title": "elizamiaomiao - Asuka - Page 1",
        "cover": "https://telegra.ph/file/3ff9c59d7355195cddd85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48814",
        "pageSeq": 48814
    },
    {
        "IDcode": 48815,
        "title": "Neppu - Tamamo_Egypt___FGO_ - Page 1",
        "cover": "https://telegra.ph/file/b3553d7c75d1c08e5ae4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48815",
        "pageSeq": 48815
    },
    {
        "IDcode": 48816,
        "title": "Yoshinobi - Mashu selfies - Page 1",
        "cover": "https://telegra.ph/file/a2ebdd5f69054a310f0ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48816",
        "pageSeq": 48816
    },
    {
        "IDcode": 48817,
        "title": "小仓千代w - 喜多川海夢泳装 - Page 1",
        "cover": "https://telegra.ph/file/80d14c87c9dc4e31aa95f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48817",
        "pageSeq": 48817
    },
    {
        "IDcode": 48818,
        "title": "PattieCosplay - Mona Swimsuit Version - Page 1",
        "cover": "https://telegra.ph/file/a6bfb74e0efba9cd4af33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48818",
        "pageSeq": 48818
    },
    {
        "IDcode": 48819,
        "title": "Pingping - Zero Two - Page 1",
        "cover": "https://telegra.ph/file/fe7172abffd43f4b1d3e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48819",
        "pageSeq": 48819
    },
    {
        "IDcode": 48820,
        "title": "Alcololi - Ganyu - Page 1",
        "cover": "https://telegra.ph/file/253f2d9a5e43f215a25a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48820",
        "pageSeq": 48820
    },
    {
        "IDcode": 48821,
        "title": "Xenon - Do-S - Page 1",
        "cover": "https://telegra.ph/file/02de85d25d16705dd84d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48821",
        "pageSeq": 48821
    },
    {
        "IDcode": 48822,
        "title": "QUEENIE CHUPPY - St. Louis - Page 1",
        "cover": "https://telegra.ph/file/a21ea2f17cfe80b3038da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48822",
        "pageSeq": 48822
    },
    {
        "IDcode": 48823,
        "title": "Elizamiaomiao - Tamamo Dancer - Page 1",
        "cover": "https://telegra.ph/file/c1ced6c44d19a19239cfa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48823",
        "pageSeq": 48823
    },
    {
        "IDcode": 48824,
        "title": "[林檎蜜紀] 新宿ジャンヌオルタとエッチな魔力供給 - Page 1",
        "cover": "https://telegra.ph/file/deed73330aa22f5a9868e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48824",
        "pageSeq": 48824
    },
    {
        "IDcode": 48825,
        "title": "Vinnegal - Kaine - Page 1",
        "cover": "https://telegra.ph/file/97c25b2e2d6413fc666dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48825",
        "pageSeq": 48825
    },
    {
        "IDcode": 48826,
        "title": "南宫 - 能代 [22P300M] - Page 1",
        "cover": "https://telegra.ph/file/7f31de7bc99d764ce4478.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48826",
        "pageSeq": 48826
    },
    {
        "IDcode": 48827,
        "title": "[三刀刀miido] 伽摩 + 自拍 - Page 1",
        "cover": "https://telegra.ph/file/8726c11d2cea6a937c638.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48827",
        "pageSeq": 48827
    },
    {
        "IDcode": 48828,
        "title": "[PingPing] NGE Asuka - Page 1",
        "cover": "https://telegra.ph/file/4f94fdd0fe928bcc12aa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48828",
        "pageSeq": 48828
    },
    {
        "IDcode": 48829,
        "title": "Sunnyvier - Sukuna (Jujutsu Kaisen) - Page 1",
        "cover": "https://telegra.ph/file/ac6c1e7f11edebff8ef40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48829",
        "pageSeq": 48829
    },
    {
        "IDcode": 48830,
        "title": "洛璃 - 光荣凉夜香雪 - Page 1",
        "cover": "https://telegra.ph/file/166e2cbb71f9030d62d2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48830",
        "pageSeq": 48830
    },
    {
        "IDcode": 48831,
        "title": "Arty亚缇 - 明日方舟 能天使 [30张] - Page 1",
        "cover": "https://telegra.ph/file/6a659f2657578055d7873.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48831",
        "pageSeq": 48831
    },
    {
        "IDcode": 48832,
        "title": "Shirogane Sama - 2B Black Bride - Page 1",
        "cover": "https://telegra.ph/file/494a7a662ddec627fb2af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48832",
        "pageSeq": 48832
    },
    {
        "IDcode": 48833,
        "title": "一北亦北 - 奶光新春旗袍 [42P1V-540MB] - Page 1",
        "cover": "https://telegra.ph/file/b233137d33a64114b051f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48833",
        "pageSeq": 48833
    },
    {
        "IDcode": 48834,
        "title": "HaneAme - Taiho Wedding (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/4eca952eaa340a5c84fec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48834",
        "pageSeq": 48834
    },
    {
        "IDcode": 48835,
        "title": "[my suite (あつき)] スイートレーン18 (アズレン　翔鶴RQ（＋瑞鶴RQ）) - Page 1",
        "cover": "https://telegra.ph/file/05bef18044b1df04c069a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48835",
        "pageSeq": 48835
    },
    {
        "IDcode": 48836,
        "title": "負け猫 - Page 1",
        "cover": "https://telegra.ph/file/6af01e4a7907f7f41cc86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48836",
        "pageSeq": 48836
    },
    {
        "IDcode": 48837,
        "title": "Michi Kyunn - Eula - Page 1",
        "cover": "https://telegra.ph/file/b9ea84c24b14bd6bd3087.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48837",
        "pageSeq": 48837
    },
    {
        "IDcode": 48838,
        "title": "Hane Ame - DOA monica - Page 1",
        "cover": "https://telegra.ph/file/33041e686723971ade85e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48838",
        "pageSeq": 48838
    },
    {
        "IDcode": 48839,
        "title": "Sayako(さやこ) - Eyjafjalla - Page 1",
        "cover": "https://telegra.ph/file/9d9dc0a1a1c1c815390db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48839",
        "pageSeq": 48839
    },
    {
        "IDcode": 48840,
        "title": "(Cosket 3) [Shooting Star's (SAKU)] Millennium Bunny Girl AS - Page 1",
        "cover": "https://telegra.ph/file/ad221396f5b1cd450a713.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48840",
        "pageSeq": 48840
    },
    {
        "IDcode": 48841,
        "title": "Alina Becker - Zero Two Casual - Page 1",
        "cover": "https://telegra.ph/file/313a92c0d6af6f35fd8a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48841",
        "pageSeq": 48841
    },
    {
        "IDcode": 48842,
        "title": "[Tokar浵卡 / Laurus] Euphoria - Page 1",
        "cover": "https://telegra.ph/file/712bcc3dd37bdbc544c9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48842",
        "pageSeq": 48842
    },
    {
        "IDcode": 48843,
        "title": "Hana Bunny - 2B Boudoir - Page 1",
        "cover": "https://telegra.ph/file/5ca448b42fcec98334841.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48843",
        "pageSeq": 48843
    },
    {
        "IDcode": 48844,
        "title": "Hane ame - Artoria Lancer - Page 1",
        "cover": "https://telegra.ph/file/8b966f69d983ce39188ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48844",
        "pageSeq": 48844
    },
    {
        "IDcode": 48845,
        "title": "Hane Ame - Artoria Ruler - Page 1",
        "cover": "https://telegra.ph/file/5d5de2f3f306d42742d67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48845",
        "pageSeq": 48845
    },
    {
        "IDcode": 48846,
        "title": "蠢沫沫 - 绝区零 简杜 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECYMBndgENaD4R6DouP0REJtdJLCczNgAC6BAAAkLQsFfyWUN9embfijYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48846",
        "pageSeq": 48846
    },
    {
        "IDcode": 48847,
        "title": "阿薰kaOri - 蔚蓝档案 银镜伊织 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECYfNndiQLvPUb0A7qgSV8_bYtH7O1QwACpBIAAkLQsFeXYtdVD8O9MzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48847",
        "pageSeq": 48847
    },
    {
        "IDcode": 48848,
        "title": "YUSHIKO - Tae Takemi - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECYmpndjmsOkGgs3hfdKuycL5SgFoP4AACMBMAAkLQsFf5QnJnkle2wTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48848",
        "pageSeq": 48848
    },
    {
        "IDcode": 48849,
        "title": "雪晴Astra - 柴郡魔术师 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECY2pndkiXF7YK_vlxVR5kz1T45-iTnQACQhQAAkLQsFd4c9hvmTMj2jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48849",
        "pageSeq": 48849
    },
    {
        "IDcode": 48850,
        "title": "半半子BANBANKO - NIKKE布蘭兒 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECY9dndlGyKgrRLYA819Z2fNYVyjhMCAACzRQAAkLQsFeAJ9MW9YCvATYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48850",
        "pageSeq": 48850
    },
    {
        "IDcode": 48851,
        "title": "yuuhui玉汇 - 卖火柴的小女孩 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECZDNndlvYsdC5ncDnFH1mUlLLSuOXjgACQxUAAkLQsFflhqSwLjz7JzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48851",
        "pageSeq": 48851
    },
    {
        "IDcode": 48852,
        "title": "日奈娇 - 秋月爱莉 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECZSZndmfhZjDoIEN1mF5HEswAAco73CsAAk8WAAJC0LBXZ7GgBMVqC302BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48852",
        "pageSeq": 48852
    },
    {
        "IDcode": 48853,
        "title": "星之迟迟 碧蓝航线 尾张 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECZlZndnXVm-KLn2tlwt25ZyHdVBpqVAACmRcAAkLQsFdtnrZ01VjjyDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48853",
        "pageSeq": 48853
    },
    {
        "IDcode": 48854,
        "title": "Kaya Huang -  Ägir Devil - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECZ01ndoBrJ5sCpwABQHarjR7qwk9rNpYAAqoYAAJC0LBX5FwLAeKmmDc2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48854",
        "pageSeq": 48854
    },
    {
        "IDcode": 48855,
        "title": "Kaya Huang -  Anis swimsuit - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECZ6hndokNZaYP0MO8dGctzy5SGVEHIAACMBkAAkLQsFf2W4pw9EhVKjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48855",
        "pageSeq": 48855
    },
    {
        "IDcode": 48856,
        "title": "Yiko湿润兔 - 狂赌之梦 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECaGNndpWHCFhdNE0OqqbCEQMQhQQhJQACBxoAAkLQsFeas3LEn5-1DjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48856",
        "pageSeq": 48856
    },
    {
        "IDcode": 48857,
        "title": "是一只熊仔吗 - 柴郡 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECaUBndqKvIhMa7tYWcwOlCUOECsPpZgACJxsAAkLQsFdUvKAGdVI93TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48857",
        "pageSeq": 48857
    },
    {
        "IDcode": 48858,
        "title": "是一只熊仔吗 - 生盐诺亚 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECadBndqwzYudl2nLi8vfyIStHU6jlCwAC3xsAAkLQsFcyk0PlHjqH5TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48858",
        "pageSeq": 48858
    },
    {
        "IDcode": 48859,
        "title": "Yiko湿润兔 (咬一口兔娘) -『寂静前夜』 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECakFndrXxSHMc6wSPPP380Omqn0UlkAACZRwAAkLQsFeZg29TBZTRWjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48859",
        "pageSeq": 48859
    },
    {
        "IDcode": 48860,
        "title": "Vinnegal - Fubuki - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECa3VndsUC3pFvyTVp5-Cr7pmjah_UEAACmxMAAkLQuFfTTzlwJxP1nDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48860",
        "pageSeq": 48860
    },
    {
        "IDcode": 48861,
        "title": "yuuhui玉汇 - NIKKE 杀手妻子 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECbAtndtLqZK0n4cRuOSSgpB-2wMhaiQACtBUAAnXduFexfZztGYXXYTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48861",
        "pageSeq": 48861
    },
    {
        "IDcode": 48862,
        "title": "Ayame - Hutao - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECbK5ndtyBStRhCRmBfAgD59OeF91AzQACWxYAAnXduFcI5BuIf5km5TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48862",
        "pageSeq": 48862
    },
    {
        "IDcode": 48863,
        "title": "Ayame - Fubuki - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECbkdnduSu8yo4ZQyG0CGcp4Lh_uOK0AAC9RcAAnXduFeBN2frncyDozYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48863",
        "pageSeq": 48863
    },
    {
        "IDcode": 48864,
        "title": "疯猫ss - 镇海 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECbxtndu1wdZCew66QLocVKjuQgccRBgACyhgAAnXduFfEqRtPzeLg8jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48864",
        "pageSeq": 48864
    },
    {
        "IDcode": 48865,
        "title": "Seele麦麦 – 银狼的满分游戏记录 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECb7Jndvdm_QzV-JqbQzH7C22OG_9JBQACYhkAAnXduFeBfw-1zHcYijYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48865",
        "pageSeq": 48865
    },
    {
        "IDcode": 48866,
        "title": "Yiko湿润兔 - 爱丽丝 蛋糕 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECcLtndwIV36M15shahwAB4FyEcTAeIPsAAmsaAAJ13bhXICZNihGfTuM2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48866",
        "pageSeq": 48866
    },
    {
        "IDcode": 48867,
        "title": "Yiko湿润兔 - 循循守月 甘雨 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECcoVndwwAAbM7GlZJsOQ9D_u496HYn2IAAjYcAAJ13bhXQlG88oDmuLY2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48867",
        "pageSeq": 48867
    },
    {
        "IDcode": 48868,
        "title": "rioko - 布洛妮娅OL - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECcz1ndxcGhrO2aNYmC1Fw07DtQBh76gAC7hwAAnXduFd7qyUrtwM2kzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48868",
        "pageSeq": 48868
    },
    {
        "IDcode": 48869,
        "title": "阿薰kaOri – 黑神话悟空 蜘蛛精 四妹 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECc-tndyJbowZPcy-VJRpY6H7ksIAojQACnx0AAnXduFc-i6pQKNkNijYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48869",
        "pageSeq": 48869
    },
    {
        "IDcode": 48870,
        "title": "Sayo Momo-Xilonen - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECdeJndy3fLGmpuzc2-8eAm-4ObF3ZKwACmR8AAnXduFe-K0wHkN1xaDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48870",
        "pageSeq": 48870
    },
    {
        "IDcode": 48871,
        "title": "兔胖胖 - 柴郡 礼服 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAECd-5ndzmHYGryYssnF4XKBsyHZx063gACsCEAAnXduFeHnOjpu1FXODYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48871",
        "pageSeq": 48871
    }
];
