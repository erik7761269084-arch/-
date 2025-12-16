// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40443,
        "title": "Donna Loli - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/d91d9cbb9f12d37763781.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40443",
        "pageSeq": 40443
    },
    {
        "IDcode": 40444,
        "title": "Arty Huang - Kashino (Azur Lane)",
        "cover": "https://telegra.ph/file/89c6672b63824212d5538.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40444",
        "pageSeq": 40444
    },
    {
        "IDcode": 40445,
        "title": "Lady Oichi - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/ac5dae9a923e1b1eefaee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40445",
        "pageSeq": 40445
    },
    {
        "IDcode": 40446,
        "title": "Choi Ji Yun - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/98bb641a5e71679450b96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40446",
        "pageSeq": 40446
    },
    {
        "IDcode": 40447,
        "title": "Hane Ame - Darkness (Konosuba)",
        "cover": "https://telegra.ph/file/0224054d2d6d1d98d1026.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40447",
        "pageSeq": 40447
    },
    {
        "IDcode": 40448,
        "title": "Byoru - Rupee (Nikke)",
        "cover": "https://telegra.ph/file/33d569467a6b995ae3b2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40448",
        "pageSeq": 40448
    },
    {
        "IDcode": 40450,
        "title": "Zine Q - Penny (Pokémon)",
        "cover": "https://telegra.ph/file/d91e9e30a35e297204c3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40450",
        "pageSeq": 40450
    },
    {
        "IDcode": 40451,
        "title": "Zinie Q - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/48cc45eb8bdfdf788660e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40451",
        "pageSeq": 40451
    },
    {
        "IDcode": 40452,
        "title": "水淼aqua NO.102 海贼王 娜美 Nami (One Pice)",
        "cover": "https://telegra.ph/file/69f5c099234603ec08f65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40452",
        "pageSeq": 40452
    },
    {
        "IDcode": 40453,
        "title": "Byoru - Boa Hancock (One Piece)",
        "cover": "https://telegra.ph/file/a8e60d0b46d61de58f8c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40453",
        "pageSeq": 40453
    },
    {
        "IDcode": 40454,
        "title": "Hidori Rose & Enafox - Vanilla Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/ade235722917a9c76eb3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40454",
        "pageSeq": 40454
    },
    {
        "IDcode": 40455,
        "title": "Okita Rinka - Yuudachi (Azur Lane)",
        "cover": "https://telegra.ph/file/1abd81e9355c128fc6e04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40455",
        "pageSeq": 40455
    },
    {
        "IDcode": 40456,
        "title": "Shui Miao Aqua - Rappi (Nikke)",
        "cover": "https://telegra.ph/file/97c15b60e33b82feaba68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40456",
        "pageSeq": 40456
    },
    {
        "IDcode": 40457,
        "title": "Okita Rinka - Rem Bunny Maid (Re Zero)",
        "cover": "https://telegra.ph/file/07dd2d2a9865b15558305.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40457",
        "pageSeq": 40457
    },
    {
        "IDcode": 40458,
        "title": "Poppachan - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/1ab364efc1f77f9a1dcda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40458",
        "pageSeq": 40458
    },
    {
        "IDcode": 40459,
        "title": "Hane Ame - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/854238c94955dc3852360.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40459",
        "pageSeq": 40459
    },
    {
        "IDcode": 40460,
        "title": "Xidaidai 习呆呆 - Janus (Azur Lane)",
        "cover": "https://telegra.ph/file/d5fa30f222477dd0fed9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40460",
        "pageSeq": 40460
    },
    {
        "IDcode": 40461,
        "title": "Hane Ame - Viper (Valorant)",
        "cover": "https://telegra.ph/file/4a7745a0c1999cfbbbabb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40461",
        "pageSeq": 40461
    },
    {
        "IDcode": 40462,
        "title": "Azami - Hoshino Ai (Oshi No Ko)",
        "cover": "https://telegra.ph/file/1630fea74ec9339034c39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40462",
        "pageSeq": 40462
    },
    {
        "IDcode": 40463,
        "title": "Potato Godzilla - 2B Maid Bikini (Nier Automata)",
        "cover": "https://telegra.ph/file/f306383992e460ed9b8ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40463",
        "pageSeq": 40463
    },
    {
        "IDcode": 40464,
        "title": "Queenie - Nitocris (Fate Grand Order)",
        "cover": "https://telegra.ph/file/214082fc41df2549b5a37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40464",
        "pageSeq": 40464
    },
    {
        "IDcode": 40465,
        "title": "Azami - Eula Maid (Genshin Impact)",
        "cover": "https://telegra.ph/file/494dba2a3c7675cb6fda0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40465",
        "pageSeq": 40465
    },
    {
        "IDcode": 40466,
        "title": "Hane Ame - Viper (Nikke)",
        "cover": "https://telegra.ph/file/31dde46cd5f98d4209360.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40466",
        "pageSeq": 40466
    },
    {
        "IDcode": 40467,
        "title": "Hitomi Locks - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/cfd64f1b25ce06f80738c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40467",
        "pageSeq": 40467
    },
    {
        "IDcode": 40468,
        "title": "KuukoW - Silver Wolf (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/7ce83a372c4546e776296.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40468",
        "pageSeq": 40468
    },
    {
        "IDcode": 40469,
        "title": "Byoru - Himeno (Chainsaw Man)",
        "cover": "https://telegra.ph/file/c33f3686689e5cef584e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40469",
        "pageSeq": 40469
    },
    {
        "IDcode": 40470,
        "title": "KuukoW - Race Queen Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/e121f4cc86bcf706c8caf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40470",
        "pageSeq": 40470
    },
    {
        "IDcode": 40471,
        "title": "Azami & Sally Dorasnow - Bunny Girls",
        "cover": "https://telegra.ph/file/61f7141558e1aaac7e8db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40471",
        "pageSeq": 40471
    },
    {
        "IDcode": 40472,
        "title": "Hane Ame - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/33829b95fd78081b9148a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40472",
        "pageSeq": 40472
    },
    {
        "IDcode": 40473,
        "title": "Hane Ame - Yor Forger Venus Bikini (Spy x Family)",
        "cover": "https://telegra.ph/file/7152791e4c3a207bbb9ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40473",
        "pageSeq": 40473
    },
    {
        "IDcode": 40474,
        "title": "KuukoW - Clara (Honkai Rail)",
        "cover": "https://telegra.ph/file/ade1ed19222bcc877f270.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40474",
        "pageSeq": 40474
    },
    {
        "IDcode": 40475,
        "title": "Byoru - Vermeil (Kinsou No Vermeil)",
        "cover": "https://telegra.ph/file/7aa9130c084089d2c260c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40475",
        "pageSeq": 40475
    },
    {
        "IDcode": 40476,
        "title": "Hane Ame - Ichinose Asuna Bunny (Blue Archive)",
        "cover": "https://telegra.ph/file/88bcb65f09e631e12fb68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40476",
        "pageSeq": 40476
    },
    {
        "IDcode": 40477,
        "title": "Hane Ame Ichinose Asuna Swimsuit (Blue Archive)",
        "cover": "https://telegra.ph/file/c1c46993e2d35370433e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40477",
        "pageSeq": 40477
    },
    {
        "IDcode": 40478,
        "title": "Hane Ame - Ichinose Asuna Cheerleader (Blue Archive)",
        "cover": "https://telegra.ph/file/dc0c4416ee5d942246842.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40478",
        "pageSeq": 40478
    },
    {
        "IDcode": 40479,
        "title": "Yuna - Nezuko / Shinobu (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/97c65b2535046266482ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40479",
        "pageSeq": 40479
    },
    {
        "IDcode": 40480,
        "title": "Hana bunny - Lonely Milf",
        "cover": "https://telegra.ph/file/ece76d280ac616ebfb324.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40480",
        "pageSeq": 40480
    },
    {
        "IDcode": 40481,
        "title": "Kokuhui - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/6296a140959a884f14b15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40481",
        "pageSeq": 40481
    },
    {
        "IDcode": 40482,
        "title": "Nekokoyoshi 爆机少女喵小吉 - Kasugano Sora (Yosuga no Sora)",
        "cover": "https://telegra.ph/file/9c93f5478c73d5f910569.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40482",
        "pageSeq": 40482
    },
    {
        "IDcode": 40483,
        "title": "Little Wicked - Lola Bunny (Space Jam)",
        "cover": "https://telegra.ph/file/7ca1469c344f2137bbc96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40483",
        "pageSeq": 40483
    },
    {
        "IDcode": 40484,
        "title": "Zinie Q - Marnie (Pokemon)",
        "cover": "https://telegra.ph/file/e80dd69eee3908dad0ec8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40484",
        "pageSeq": 40484
    },
    {
        "IDcode": 40485,
        "title": "新蔻島 - Vol.001 ブルマ / セーラー服",
        "cover": "https://telegra.ph/file/bd33ace5e05b44792cb63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40485",
        "pageSeq": 40485
    },
    {
        "IDcode": 40486,
        "title": "Potato Godzilla - Tamamo School Uniform (Azure Lane)",
        "cover": "https://telegra.ph/file/6f26962e0b781178d6911.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40486",
        "pageSeq": 40486
    },
    {
        "IDcode": 40487,
        "title": "Shoujo Eiga 少女映畫 - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/6b847a29d97fbd391e4be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40487",
        "pageSeq": 40487
    },
    {
        "IDcode": 40488,
        "title": "Azami - Bremerton Cheerleader (Azur Lane)",
        "cover": "https://telegra.ph/file/01c7a926b3017f00c194e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40488",
        "pageSeq": 40488
    },
    {
        "IDcode": 40489,
        "title": "Nekokoyoshi 爆机少女喵小吉 - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/6fcef0ae4a58f9c8ff83d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40489",
        "pageSeq": 40489
    },
    {
        "IDcode": 40490,
        "title": "Karin Nonone - Housen Ryofu (Ikkitoisen)",
        "cover": "https://telegra.ph/file/53144ba6735f67895acfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40490",
        "pageSeq": 40490
    },
    {
        "IDcode": 40491,
        "title": "奈汐酱Nice - Red Riding Hood",
        "cover": "https://telegra.ph/file/ea5cff26df74033cc5d2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40491",
        "pageSeq": 40491
    },
    {
        "IDcode": 40492,
        "title": "Shoujo Eiga 少女映畫 - Ayame Kajou (Shimoneta)",
        "cover": "https://telegra.ph/file/2b563ba7bf9cb15ef1b4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40492",
        "pageSeq": 40492
    },
    {
        "IDcode": 40493,
        "title": "Aery Tiefling - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/4a784d204fb469727d967.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40493",
        "pageSeq": 40493
    },
    {
        "IDcode": 40494,
        "title": "Hane Ame - Mori Calliope (Hololive)",
        "cover": "https://telegra.ph/file/6c3385f26251c3efa69d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40494",
        "pageSeq": 40494
    },
    {
        "IDcode": 40495,
        "title": "Kuuko W - Innocent White",
        "cover": "https://telegra.ph/file/4db3b9212085634eed6b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40495",
        "pageSeq": 40495
    },
    {
        "IDcode": 40496,
        "title": "Potato Godzilla - Atago Bikini (Azur Lane)",
        "cover": "https://telegra.ph/file/762fb83b834396a8b78e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40496",
        "pageSeq": 40496
    },
    {
        "IDcode": 40497,
        "title": "Hana Bunny - Home Gym",
        "cover": "https://telegra.ph/file/1631d6c4d9a7eed14a6b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40497",
        "pageSeq": 40497
    },
    {
        "IDcode": 40498,
        "title": "Neyrodesu - Senko (Sewayaki Kitsuneno Senko San)",
        "cover": "https://telegra.ph/file/faf55ec7a8b3c075072f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40498",
        "pageSeq": 40498
    },
    {
        "IDcode": 40499,
        "title": "Sakurai Ning Ning - Ruin jk Neko Schoolgirl",
        "cover": "https://telegra.ph/file/8cc0d4d37ccf3ded87797.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40499",
        "pageSeq": 40499
    },
    {
        "IDcode": 40500,
        "title": "Hidori Rose - Nurse Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/b3e1bb28840ab5f200240.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40500",
        "pageSeq": 40500
    },
    {
        "IDcode": 40501,
        "title": "Aery Tiefling - Ann Takamaki (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/13f48ac4b9131d3c7416a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40501",
        "pageSeq": 40501
    },
    {
        "IDcode": 40502,
        "title": "Arty Huang - Raiden Shogun OL (Genshin Impact)",
        "cover": "https://telegra.ph/file/8f20dd9a5873a886d571c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40502",
        "pageSeq": 40502
    },
    {
        "IDcode": 40503,
        "title": "Arty Huang - Argentina",
        "cover": "https://telegra.ph/file/3d6d70831854fcda6da84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40503",
        "pageSeq": 40503
    },
    {
        "IDcode": 40504,
        "title": "Meladinha - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/854fa44ea0d46d7f9c070.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40504",
        "pageSeq": 40504
    },
    {
        "IDcode": 40505,
        "title": "Little Wicked - Monika (Doki Doki Literature Club)",
        "cover": "https://telegra.ph/file/72971dfe60ecd7f2b7c26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40505",
        "pageSeq": 40505
    },
    {
        "IDcode": 40506,
        "title": "Potato Godzilla - D.Va (Overwatch)",
        "cover": "https://telegra.ph/file/5a5ced04237d28f84d191.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40506",
        "pageSeq": 40506
    },
    {
        "IDcode": 40507,
        "title": "Hidori Rose - Pakhet (Destiny Child)",
        "cover": "https://telegra.ph/file/81f79fc7d71b118b42c60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40507",
        "pageSeq": 40507
    },
    {
        "IDcode": 40508,
        "title": "Arty - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/5e35921035f0120f7d0fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40508",
        "pageSeq": 40508
    },
    {
        "IDcode": 40509,
        "title": "PingPing - Tifa Dark Nurse (Final Fantasy)",
        "cover": "https://telegra.ph/file/3f82f83c86b0730111660.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40509",
        "pageSeq": 40509
    },
    {
        "IDcode": 40510,
        "title": "Hidori Rose - Black Bodysuit",
        "cover": "https://telegra.ph/file/969bee803914f4e8b92fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40510",
        "pageSeq": 40510
    },
    {
        "IDcode": 40511,
        "title": "麻花麻花酱 Xiaxiaoqiu - NO.45 修女 Nun",
        "cover": "https://telegra.ph/file/d7c48a59f1dea315de01e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40511",
        "pageSeq": 40511
    },
    {
        "IDcode": 40512,
        "title": "星之迟迟 Hoshilily - Nun 女仆",
        "cover": "https://telegra.ph/file/76f67df87c348c4c8f920.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40512",
        "pageSeq": 40512
    },
    {
        "IDcode": 40513,
        "title": "Mimi chan - Yir Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/fd8178235161e0a4084dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40513",
        "pageSeq": 40513
    },
    {
        "IDcode": 40514,
        "title": "Byoru - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/ab66374e50ac0befc5026.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40514",
        "pageSeq": 40514
    },
    {
        "IDcode": 40515,
        "title": "Meenfox - Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/7403640667de88a745f43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40515",
        "pageSeq": 40515
    },
    {
        "IDcode": 40516,
        "title": "Mikomin - Asuma Toki (Blue Archive)",
        "cover": "https://telegra.ph/file/5488c5dbfe676f9dddad4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40516",
        "pageSeq": 40516
    },
    {
        "IDcode": 40517,
        "title": "Hana Bunny - Hangover",
        "cover": "https://telegra.ph/file/9684ce9312818475fbde4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40517",
        "pageSeq": 40517
    },
    {
        "IDcode": 40518,
        "title": "Neyrodesu - Spider-Gwen (Spider-man)",
        "cover": "https://telegra.ph/file/1095b7f63753637a08672.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40518",
        "pageSeq": 40518
    },
    {
        "IDcode": 40519,
        "title": "마루에몽 Maruemon - Nun",
        "cover": "https://telegra.ph/file/d11a14a3e442cd6bdfd3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40519",
        "pageSeq": 40519
    },
    {
        "IDcode": 40520,
        "title": "Byoru - Yoko (Tengen Toppa Gurren Lagann)",
        "cover": "https://telegra.ph/file/cd442d3e64092a1098c40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40520",
        "pageSeq": 40520
    },
    {
        "IDcode": 40521,
        "title": "星之迟迟 Hoshilily -  米哈拉 Mihara (Nikke)",
        "cover": "https://telegra.ph/file/a19e1e24a79715f4c9ef0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40521",
        "pageSeq": 40521
    },
    {
        "IDcode": 40522,
        "title": "Potato Godzilla - Riamu Yumei (Idol Master)",
        "cover": "https://telegra.ph/file/9717537ed5fd66988bb63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40522",
        "pageSeq": 40522
    },
    {
        "IDcode": 40523,
        "title": "Sonson 손손 & Zia 지아 - Bitch Academy",
        "cover": "https://telegra.ph/file/bea3d436e0174d51703ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40523",
        "pageSeq": 40523
    },
    {
        "IDcode": 40524,
        "title": "软萌兔兔酱 - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/873ebfd02ebc16bf04ef8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40524",
        "pageSeq": 40524
    },
    {
        "IDcode": 40525,
        "title": "PuyPuy - Hanekawa (Bakemonogatari)",
        "cover": "https://telegra.ph/file/983b083a194663f31b11a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40525",
        "pageSeq": 40525
    },
    {
        "IDcode": 40526,
        "title": "NAGISA 魔物喵 - 百合 Schoolgirl",
        "cover": "https://telegra.ph/file/4d160c02e17625fb22bc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40526",
        "pageSeq": 40526
    },
    {
        "IDcode": 40527,
        "title": "TsukiDes - Ashley (Resident Evil)",
        "cover": "https://telegra.ph/file/e6d0e8e141f9b3ad7babe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40527",
        "pageSeq": 40527
    },
    {
        "IDcode": 40528,
        "title": "Hidori Rose - OL Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/c7a562779a2be1b350077.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40528",
        "pageSeq": 40528
    },
    {
        "IDcode": 40529,
        "title": "Azami - Usaki (Usaki-chan)",
        "cover": "https://telegra.ph/file/f0306e99d4b32fc50301b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40529",
        "pageSeq": 40529
    },
    {
        "IDcode": 40530,
        "title": "CocoPie - Himeno (Chainsaw Man)",
        "cover": "https://telegra.ph/file/1b0584a64fb914858829e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40530",
        "pageSeq": 40530
    },
    {
        "IDcode": 40531,
        "title": "CocoPie - Anya Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/531657146adfd70b361c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40531",
        "pageSeq": 40531
    },
    {
        "IDcode": 40532,
        "title": "Hatori - Nico (Dead Or Alive)",
        "cover": "https://telegra.ph/file/e1771093dcc9a9af3c849.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40532",
        "pageSeq": 40532
    },
    {
        "IDcode": 40533,
        "title": "Potato Godzilla - Tatami Otaku Girl Birthday Celebration",
        "cover": "https://telegra.ph/file/f6f8838c901da4ce78844.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40533",
        "pageSeq": 40533
    },
    {
        "IDcode": 40534,
        "title": "Aery Tiefling - Ymeko Jabami (Kakegurui)",
        "cover": "https://telegra.ph/file/54078a6cce3f92769267c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40534",
        "pageSeq": 40534
    },
    {
        "IDcode": 40535,
        "title": "柚木YUZUKI - JK百合",
        "cover": "https://telegra.ph/file/c05bf4cd372a8162fd11e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40535",
        "pageSeq": 40535
    },
    {
        "IDcode": 40536,
        "title": "Little Wicked - Black Cat (Spider-Man)",
        "cover": "https://telegra.ph/file/5c1577d5d99ad2d4387c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40536",
        "pageSeq": 40536
    },
    {
        "IDcode": 40537,
        "title": "Arty Huang - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/ce90e0e772aaa19050883.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40537",
        "pageSeq": 40537
    },
    {
        "IDcode": 40538,
        "title": "Choi Ji Yun - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/fd45cef9f0cb2ea3cff6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40538",
        "pageSeq": 40538
    },
    {
        "IDcode": 40539,
        "title": "星之迟迟 Hoshilily – NO.167 z46 (Azure Lane)",
        "cover": "https://telegra.ph/file/f6b8e4fa59dea87e0875a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40539",
        "pageSeq": 40539
    },
    {
        "IDcode": 40540,
        "title": "Lady Melamori - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/6aad0995fc4918f7de919.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40540",
        "pageSeq": 40540
    },
    {
        "IDcode": 40541,
        "title": "白莉爱吃巧克力 BLACQKL - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/267bacb742b2c299b0da2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40541",
        "pageSeq": 40541
    },
    {
        "IDcode": 40542,
        "title": "Misswarmj - Hermione Granger (Harry Potter)",
        "cover": "https://telegra.ph/file/50ce87bc4034c7ed534bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40542",
        "pageSeq": 40542
    },
    {
        "IDcode": 40543,
        "title": "Ravvcorn - Spider -Gwen (Spider-Man)",
        "cover": "https://telegra.ph/file/e8b928ff00ef6274e1469.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40543",
        "pageSeq": 40543
    }
];
