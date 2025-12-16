// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41463,
        "title": "麻花麻花酱 Xia Xiao Qiu - Ruan Mei (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/81b60e390ccdebda9dac6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41463",
        "pageSeq": 41463
    },
    {
        "IDcode": 41464,
        "title": "Hane Ame - Pekomama (Hololive)",
        "cover": "https://telegra.ph/file/478ccc7923742557c9e0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41464",
        "pageSeq": 41464
    },
    {
        "IDcode": 41465,
        "title": "Byoru - D Killer Wife (Nikke)",
        "cover": "https://telegra.ph/file/4eb9b93d91772fe534aca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41465",
        "pageSeq": 41465
    },
    {
        "IDcode": 41466,
        "title": "Neyrodesu & Caticornplay - Fern & Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/e21212eb3c206ca59800c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41466",
        "pageSeq": 41466
    },
    {
        "IDcode": 41467,
        "title": "Pyon - Saber Kimono (Fate Grand Order)",
        "cover": "https://telegra.ph/file/f1d91bf146d59a62f59a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41467",
        "pageSeq": 41467
    },
    {
        "IDcode": 41468,
        "title": "二阶堂 Erjiadang - Jiangshi",
        "cover": "https://telegra.ph/file/9460729216c4b80d353d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41468",
        "pageSeq": 41468
    },
    {
        "IDcode": 41470,
        "title": "NinJA - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/af0b306f4a765b901ed5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41470",
        "pageSeq": 41470
    },
    {
        "IDcode": 41471,
        "title": "Sweetie Fox - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/940ffb35cf5db5ef839c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41471",
        "pageSeq": 41471
    },
    {
        "IDcode": 41472,
        "title": "Machi - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/5bfb28543ceaed22599f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41472",
        "pageSeq": 41472
    },
    {
        "IDcode": 41473,
        "title": "奶昔 Naixi - Green vest 《绿背心》",
        "cover": "https://telegra.ph/file/70df5501fa75b6e300680.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41473",
        "pageSeq": 41473
    },
    {
        "IDcode": 41474,
        "title": "Aery Tiefling - Toga Himiko (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/12cc94788cb2125b1b681.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41474",
        "pageSeq": 41474
    },
    {
        "IDcode": 41475,
        "title": "Andromeda - Maki (Love Live)",
        "cover": "https://telegra.ph/file/94422a271b04f80db3920.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41475",
        "pageSeq": 41475
    },
    {
        "IDcode": 41476,
        "title": "Nookkiizz - Lynette (Genshin Impact)",
        "cover": "https://telegra.ph/file/eb486f96a8f7df62d5e75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41476",
        "pageSeq": 41476
    },
    {
        "IDcode": 41477,
        "title": "Aery Tiefling - Aqua (Konosuba)",
        "cover": "https://telegra.ph/file/45705dd1bebd821a15aef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41477",
        "pageSeq": 41477
    },
    {
        "IDcode": 41478,
        "title": "ZinieQ - Dark Magician Girl (Yu Gi Oh)",
        "cover": "https://telegra.ph/file/0ccec2e90e5ca10b30db1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41478",
        "pageSeq": 41478
    },
    {
        "IDcode": 41479,
        "title": "Hana Bunny - Hoshino Ai (Oshi No ko)",
        "cover": "https://telegra.ph/file/18a2880dce4f2fd5768c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41479",
        "pageSeq": 41479
    },
    {
        "IDcode": 41480,
        "title": "Meenfox - Eula & Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/00cbe57ca31ac4345e5cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41480",
        "pageSeq": 41480
    },
    {
        "IDcode": 41481,
        "title": "Umeko J - Zelada (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/6101039d0097ee3a3ff03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41481",
        "pageSeq": 41481
    },
    {
        "IDcode": 41482,
        "title": "Vinnegal - Quanxi (Chainsaw Man)",
        "cover": "https://telegra.ph/file/917e637d739be4c710f7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41482",
        "pageSeq": 41482
    },
    {
        "IDcode": 41483,
        "title": "Pyon - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/612234be9457ac775b037.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41483",
        "pageSeq": 41483
    },
    {
        "IDcode": 41484,
        "title": "Shui Miao Aqua - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/1de0366b3331cbf17b640.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41484",
        "pageSeq": 41484
    },
    {
        "IDcode": 41485,
        "title": "Mik Allen & Alcololi - Ada Wong & Ashley Graham (Resident Evil)",
        "cover": "https://telegra.ph/file/6ca4381a9964a90710a25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41485",
        "pageSeq": 41485
    },
    {
        "IDcode": 41486,
        "title": "Vinnegal & Shirogane sama - Shego & Kim (Kim Possible)",
        "cover": "https://telegra.ph/file/65dbf4b9c9fd89b00fa06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41486",
        "pageSeq": 41486
    },
    {
        "IDcode": 41487,
        "title": "Peachuu - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/586a0cfd356485aad47ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41487",
        "pageSeq": 41487
    },
    {
        "IDcode": 41488,
        "title": "Shui Miao Aqua - Ningguang & Beidou (Genshin Impact)",
        "cover": "https://telegra.ph/file/9624e54f1257b6745b204.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41488",
        "pageSeq": 41488
    },
    {
        "IDcode": 41489,
        "title": "Hana Bunny - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/6582a42cc65a87f747568.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41489",
        "pageSeq": 41489
    },
    {
        "IDcode": 41490,
        "title": "落落Raku – Lily White",
        "cover": "https://telegra.ph/file/366a6857d6467c03ac937.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41490",
        "pageSeq": 41490
    },
    {
        "IDcode": 41491,
        "title": "Lada Lyumos - Pinup Girl (Fallout)",
        "cover": "https://telegra.ph/file/ac38671abbd025c0156d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41491",
        "pageSeq": 41491
    },
    {
        "IDcode": 41492,
        "title": "Sweetieline - Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/f367cfd5cb783aa1a63ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41492",
        "pageSeq": 41492
    },
    {
        "IDcode": 41493,
        "title": "Ino - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/d30cbcfdc69485a5aac03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41493",
        "pageSeq": 41493
    },
    {
        "IDcode": 41494,
        "title": "PuyPuy - Artoria Lancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/89e19e1e06ee8733dab27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41494",
        "pageSeq": 41494
    },
    {
        "IDcode": 41495,
        "title": "Alina Becker - Satsuki (Kill la Kill)",
        "cover": "https://telegra.ph/file/afde5ccae14223dff3108.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41495",
        "pageSeq": 41495
    },
    {
        "IDcode": 41496,
        "title": "九言 - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/919052094a5a126f140b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41496",
        "pageSeq": 41496
    },
    {
        "IDcode": 41497,
        "title": "Asami Gate - The Colonel",
        "cover": "https://telegra.ph/file/f1068c77abf7bbc5a5f89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41497",
        "pageSeq": 41497
    },
    {
        "IDcode": 41498,
        "title": "Kururin - Himeno (Chainsaw Man)",
        "cover": "https://telegra.ph/file/3fc46163eaf94510a14dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41498",
        "pageSeq": 41498
    },
    {
        "IDcode": 41499,
        "title": "Donna Loli - Taiga (Toradora)",
        "cover": "https://telegra.ph/file/97bf4735213ab656f5ed2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41499",
        "pageSeq": 41499
    },
    {
        "IDcode": 41500,
        "title": "Hana Bunny - Himeko (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/b5fbaf43e5c7ff2206649.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41500",
        "pageSeq": 41500
    },
    {
        "IDcode": 41501,
        "title": "Kalinka Fox - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/b74f81d0dc90cd0a620a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41501",
        "pageSeq": 41501
    },
    {
        "IDcode": 41502,
        "title": "Angel Chan - Mai Shiranui (The King Of Fighter)",
        "cover": "https://telegra.ph/file/e445f53fad6e02992a621.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41502",
        "pageSeq": 41502
    },
    {
        "IDcode": 41503,
        "title": "Alina Becker - Chun Li Bikini (Street Fighter)",
        "cover": "https://telegra.ph/file/7725b30670c7bd54f8624.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41503",
        "pageSeq": 41503
    },
    {
        "IDcode": 41504,
        "title": "Rioko - Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/1fff2edb58e9be18d7ff8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41504",
        "pageSeq": 41504
    },
    {
        "IDcode": 41505,
        "title": "KANEKO - Asuna Maid (Blue Archive)",
        "cover": "https://telegra.ph/file/5fc3897771f9b9b01c4c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41505",
        "pageSeq": 41505
    },
    {
        "IDcode": 41506,
        "title": "KANEKO - Asuna Bunny (Blue Archive)",
        "cover": "https://telegra.ph/file/698a06ad5f23ac09cba55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41506",
        "pageSeq": 41506
    },
    {
        "IDcode": 41507,
        "title": "KANEKO - Asuna School (Blue Archive)",
        "cover": "https://telegra.ph/file/513570f634a0cb1ba02e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41507",
        "pageSeq": 41507
    },
    {
        "IDcode": 41508,
        "title": "鹿八岁 Lu Ba Sui - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/495ab3835b4d87f069fc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41508",
        "pageSeq": 41508
    },
    {
        "IDcode": 41509,
        "title": "Kaya - Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/a6349e9909587a42a0d96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41509",
        "pageSeq": 41509
    },
    {
        "IDcode": 41510,
        "title": "Alina Becker - Strapped Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/51bb211380c0f904f1e1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41510",
        "pageSeq": 41510
    },
    {
        "IDcode": 41511,
        "title": "Angel Chan - D-Killer Wife (Nikke)",
        "cover": "https://telegra.ph/file/bf6d46c9be8de90d20eb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41511",
        "pageSeq": 41511
    },
    {
        "IDcode": 41512,
        "title": "ZinieQ - Dizzy (Guilty Gear)",
        "cover": "https://telegra.ph/file/e809623ac00bcdfaf9189.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41512",
        "pageSeq": 41512
    },
    {
        "IDcode": 41513,
        "title": "年年 Ninnian - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/804e692743981b2a9ecc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41513",
        "pageSeq": 41513
    },
    {
        "IDcode": 41514,
        "title": "Ino - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/7abbde86bd7bcf94cb9e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41514",
        "pageSeq": 41514
    },
    {
        "IDcode": 41515,
        "title": "Alcololi - Shuten Douji (Fate Grand Order)",
        "cover": "https://telegra.ph/file/d27e6cfd0ba394792575b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41515",
        "pageSeq": 41515
    },
    {
        "IDcode": 41516,
        "title": "Cmiiu - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/4832147fe3c2a84ddb99b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41516",
        "pageSeq": 41516
    },
    {
        "IDcode": 41517,
        "title": "Xidaidai - Firefly (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/f37574b1f5d419dab5e94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41517",
        "pageSeq": 41517
    },
    {
        "IDcode": 41518,
        "title": "Carry Key - Anna & Elsa (Frozen)",
        "cover": "https://telegra.ph/file/46c01efadbfb5a627f226.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41518",
        "pageSeq": 41518
    },
    {
        "IDcode": 41519,
        "title": "Shaeunderscore - Akeno (High School DxD)",
        "cover": "https://telegra.ph/file/55340f7d8f98ba7efa02d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41519",
        "pageSeq": 41519
    },
    {
        "IDcode": 41520,
        "title": "ZinieQ - 2B Barbie (Nier Automata)",
        "cover": "https://telegra.ph/file/86d7ea4e98d1294797719.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41520",
        "pageSeq": 41520
    },
    {
        "IDcode": 41521,
        "title": "Hidori Rose - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/e7b327d44b0b5ff3ff5be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41521",
        "pageSeq": 41521
    },
    {
        "IDcode": 41522,
        "title": "Neko 薇薇 丝绒女仆",
        "cover": "https://telegra.ph/file/86079e4f82b29c859d5a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41522",
        "pageSeq": 41522
    },
    {
        "IDcode": 41523,
        "title": "Xidaidai - Sakamata Chloe (Hololive)",
        "cover": "https://telegra.ph/file/54980be74078bc3644965.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41523",
        "pageSeq": 41523
    },
    {
        "IDcode": 41524,
        "title": "藏森林 Zang Senlin - D.Va (Overwatch)",
        "cover": "https://telegra.ph/file/f069f1544b59ae258432e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41524",
        "pageSeq": 41524
    },
    {
        "IDcode": 41525,
        "title": "Potato Godzilla - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/b619fddec4b43e561ac8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41525",
        "pageSeq": 41525
    },
    {
        "IDcode": 41526,
        "title": "Hina Jiao - Iconose Asuna Maid (Blue Archive)",
        "cover": "https://telegra.ph/file/fc53f2cfe778bd7e453b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41526",
        "pageSeq": 41526
    },
    {
        "IDcode": 41527,
        "title": "Alina Becker - Power Bikini (Chainsaw Man)",
        "cover": "https://telegra.ph/file/fe9910a6712a2c9c926ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41527",
        "pageSeq": 41527
    },
    {
        "IDcode": 41528,
        "title": "年年 Niannian - Cyberpunk Girl 赛博女孩",
        "cover": "https://telegra.ph/file/1d3a9af177c81fc3c3dde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41528",
        "pageSeq": 41528
    },
    {
        "IDcode": 41529,
        "title": "Helly Valentine - Esdeath (Akame Ga Kill)",
        "cover": "https://telegra.ph/file/c06432066b4ec0d0ceb43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41529",
        "pageSeq": 41529
    },
    {
        "IDcode": 41530,
        "title": "日奈娇 Hina Jiao - 麦乐送 McDelivery",
        "cover": "https://telegra.ph/file/5651de6b4cebf1dc1ac20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41530",
        "pageSeq": 41530
    },
    {
        "IDcode": 41531,
        "title": "Potato Godzilla - Jeanne Alter Schoolgirl & Shinjuku (Fate Grand Order)",
        "cover": "https://telegra.ph/file/9d222c505cc93ec5f0193.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41531",
        "pageSeq": 41531
    },
    {
        "IDcode": 41532,
        "title": "Machi - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/d5e2230d0605c33e046db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41532",
        "pageSeq": 41532
    },
    {
        "IDcode": 41533,
        "title": "Danielle DeNicola - Nanami Kento (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/e11e5c00f3bc728ff5686.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41533",
        "pageSeq": 41533
    },
    {
        "IDcode": 41534,
        "title": "Nookkiizz - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/650c33a776d07c782d454.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41534",
        "pageSeq": 41534
    },
    {
        "IDcode": 41535,
        "title": "Aery Tiefling - Tae Takemi (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/b711964d4a2925cf677b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41535",
        "pageSeq": 41535
    },
    {
        "IDcode": 41536,
        "title": "阿包也是兔娘 Abaoyeshituniang - 黑枪呆兔女郎 Artoria Pendragon Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/48e595fbf57e750dd624c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41536",
        "pageSeq": 41536
    },
    {
        "IDcode": 41537,
        "title": "Monokichan & Mimorgue - Rem and Ram (Re: Zero)",
        "cover": "https://telegra.ph/file/410e460cc8627ee129e3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41537",
        "pageSeq": 41537
    },
    {
        "IDcode": 41538,
        "title": "Lady Melamori - Motoko Kusanagi (Ghost In The Shell)",
        "cover": "https://telegra.ph/file/640b56e4a4bf87a644c90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41538",
        "pageSeq": 41538
    },
    {
        "IDcode": 41539,
        "title": "Banbanko 半半子 - 纯白女仆",
        "cover": "https://telegra.ph/file/6ab7399d4942da906ef73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41539",
        "pageSeq": 41539
    },
    {
        "IDcode": 41540,
        "title": "Potato Godzilla - Stelle (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/7b846dc49c058e7447310.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41540",
        "pageSeq": 41540
    },
    {
        "IDcode": 41541,
        "title": "Oniksiya - Jill Valentine (Resident Evil)",
        "cover": "https://telegra.ph/file/594be6512dd187a75aed9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41541",
        "pageSeq": 41541
    },
    {
        "IDcode": 41542,
        "title": "Mayweda - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/9ead6b708accd6b7f008e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41542",
        "pageSeq": 41542
    },
    {
        "IDcode": 41543,
        "title": "Mikomin - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/3b5682c484ae4886950e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41543",
        "pageSeq": 41543
    },
    {
        "IDcode": 41544,
        "title": "Shui Miao Aqua - Ako Amau (Blue Archive)",
        "cover": "https://telegra.ph/file/39873f180da53d8d59939.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41544",
        "pageSeq": 41544
    },
    {
        "IDcode": 41545,
        "title": "Yoshinobi - Anis (Nikke)",
        "cover": "https://telegra.ph/file/a87fe320a991592b84289.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41545",
        "pageSeq": 41545
    },
    {
        "IDcode": 41547,
        "title": "Demon Mika - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/1e806a1ecf2fa495c9859.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41547",
        "pageSeq": 41547
    },
    {
        "IDcode": 41548,
        "title": "Kururin - Moona Hoshinova (Hololive)",
        "cover": "https://telegra.ph/file/bd40b746a0f16d319c2b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41548",
        "pageSeq": 41548
    },
    {
        "IDcode": 41549,
        "title": "Lada Lyumos - Satsuki Kiryuin (Kill la Kill)",
        "cover": "https://telegra.ph/file/4753c76a176bd426af063.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41549",
        "pageSeq": 41549
    },
    {
        "IDcode": 41550,
        "title": "Potato Godzilla - Nicole (Zenless Zone Zero)",
        "cover": "https://telegra.ph/file/11a8ff3acaf162d85b153.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41550",
        "pageSeq": 41550
    },
    {
        "IDcode": 41551,
        "title": "ZinieQ - Power (Chainsaw Man & Nikke)",
        "cover": "https://telegra.ph/file/c6aa354bec3d266c55f48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41551",
        "pageSeq": 41551
    },
    {
        "IDcode": 41552,
        "title": "Melamori - Harley Quinn (Batman)",
        "cover": "https://telegra.ph/file/1cc9bc72fe320afc569ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41552",
        "pageSeq": 41552
    },
    {
        "IDcode": 41553,
        "title": "Yoshinobi - Sana (Ijiranaide Nagatoro San)",
        "cover": "https://telegra.ph/file/9eaf412329002824f8bd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41553",
        "pageSeq": 41553
    },
    {
        "IDcode": 41554,
        "title": "NekoChan - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/aa12939c688642582470e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41554",
        "pageSeq": 41554
    },
    {
        "IDcode": 41556,
        "title": "Aery Tiefling - Emilia  (Re Zero)",
        "cover": "https://telegra.ph/file/010b1a36deefa70020b7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41556",
        "pageSeq": 41556
    },
    {
        "IDcode": 41557,
        "title": "Hane Ame - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/c826ed39a65dd1b890b6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41557",
        "pageSeq": 41557
    },
    {
        "IDcode": 41558,
        "title": "Hane Ame - Implacable (Azur Lane)",
        "cover": "https://telegra.ph/file/5417ea4554ac659d3dcf0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41558",
        "pageSeq": 41558
    },
    {
        "IDcode": 41559,
        "title": "Ain Nguyen - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/a1b3d76d1ac83e5224ffa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41559",
        "pageSeq": 41559
    },
    {
        "IDcode": 41560,
        "title": "Sweetie Fox - Raven (Teen Titans)",
        "cover": "https://telegra.ph/file/8413cd07aad389ee99759.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41560",
        "pageSeq": 41560
    },
    {
        "IDcode": 41561,
        "title": "Xidaidai - Cat Girl",
        "cover": "https://telegra.ph/file/24fa9be2bda5394c6c9d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41561",
        "pageSeq": 41561
    },
    {
        "IDcode": 41562,
        "title": "Yoshinobi - Blue Bikini",
        "cover": "https://telegra.ph/file/53acbdd02ca3381e2150f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41562",
        "pageSeq": 41562
    },
    {
        "IDcode": 41563,
        "title": "Hane Ame - Houshou Marine Hololive)",
        "cover": "https://telegra.ph/file/b08f2e754e2bd5363af5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41563",
        "pageSeq": 41563
    },
    {
        "IDcode": 41564,
        "title": "Arty - Frankenstein (Fate Grand Order)",
        "cover": "https://telegra.ph/file/2d426591558b9505640ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41564",
        "pageSeq": 41564
    },
    {
        "IDcode": 41565,
        "title": "Uri - 下乳褐色ヴァンパイア 🦇",
        "cover": "https://telegra.ph/file/aeb9df5e608d386808c67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41565",
        "pageSeq": 41565
    }
];
