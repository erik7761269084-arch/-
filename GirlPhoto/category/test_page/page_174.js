// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39419,
        "title": "Helly Valentine - Nero Maid (Fate/Extra Last Encore)",
        "cover": "https://telegra.ph/file/601748d04f6460f66e2cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39419",
        "pageSeq": 39419
    },
    {
        "IDcode": 39420,
        "title": "Sayo Momo - Zero Two Wedding Dress (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/54b643b7d472450c6dc37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39420",
        "pageSeq": 39420
    },
    {
        "IDcode": 39421,
        "title": "UyUy - Azula (Avatar)",
        "cover": "https://telegra.ph/file/5d4fdd93ea1a4c72e1f52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39421",
        "pageSeq": 39421
    },
    {
        "IDcode": 39422,
        "title": "Neppu - Karin Bunny (Blue Archive)",
        "cover": "https://telegra.ph/file/eb5acee59f8eda389cb67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39422",
        "pageSeq": 39422
    },
    {
        "IDcode": 39423,
        "title": "ZinieQ - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/824f909f06bd35623a027.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39423",
        "pageSeq": 39423
    },
    {
        "IDcode": 39424,
        "title": "Gumiho - Raphtalia & Filo (Tate No Yuusha)",
        "cover": "https://telegra.ph/file/1aa7345ec97288033c363.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39424",
        "pageSeq": 39424
    },
    {
        "IDcode": 39425,
        "title": "Akemi - Byleth (Fire Emblem: Three Houses)",
        "cover": "https://telegra.ph/file/d8f9b854e53414ea73d06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39425",
        "pageSeq": 39425
    },
    {
        "IDcode": 39426,
        "title": "UyUy - Mysterious Girl",
        "cover": "https://telegra.ph/file/e7bd289a1db4b72dcf5cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39426",
        "pageSeq": 39426
    },
    {
        "IDcode": 39427,
        "title": "Alin Ma / Xenon - Elf Queen",
        "cover": "https://telegra.ph/file/9d134e8da742a1ae66e74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39427",
        "pageSeq": 39427
    },
    {
        "IDcode": 39428,
        "title": "Hokunaimeko - Reika (Gantz)",
        "cover": "https://telegra.ph/file/d0877c84ad44bb8419e3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39428",
        "pageSeq": 39428
    },
    {
        "IDcode": 39429,
        "title": "习呆呆 - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/73380040a69327780df42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39429",
        "pageSeq": 39429
    },
    {
        "IDcode": 39430,
        "title": "Ino - Makima Body Straps (Chainsaw Man )",
        "cover": "https://telegra.ph/file/e555a807cbbf1e3febb4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39430",
        "pageSeq": 39430
    },
    {
        "IDcode": 39431,
        "title": "UyUy - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/84cb8fa8b32174764653e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39431",
        "pageSeq": 39431
    },
    {
        "IDcode": 39432,
        "title": "Ganlory - Tsubaki (Blue Archive)",
        "cover": "https://telegra.ph/file/b85c7bc1549659f416eb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39432",
        "pageSeq": 39432
    },
    {
        "IDcode": 39433,
        "title": "Lada Lyumos - Mercy (Overwatch)",
        "cover": "https://telegra.ph/file/1b4c90751436bc099e7cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39433",
        "pageSeq": 39433
    },
    {
        "IDcode": 39434,
        "title": "Fantasy Factory - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/b33163e435edd772bc049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39434",
        "pageSeq": 39434
    },
    {
        "IDcode": 39435,
        "title": "Ino Cosplayer - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/662df4139b741b35c626a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39435",
        "pageSeq": 39435
    },
    {
        "IDcode": 39436,
        "title": "Hoshilily - 2B Nun (Nier Automata)",
        "cover": "https://telegra.ph/file/65ac9d5c1a531492d249d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39436",
        "pageSeq": 39436
    },
    {
        "IDcode": 39437,
        "title": "Potato Godzilla - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/b48d1c2ddebeff4965fcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39437",
        "pageSeq": 39437
    },
    {
        "IDcode": 39438,
        "title": "Potato Godzilla - Raiden Shogun Maid (Genshin Impact)",
        "cover": "https://telegra.ph/file/5f728f0117fcdfdd85fe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39438",
        "pageSeq": 39438
    },
    {
        "IDcode": 39439,
        "title": "Lady Melamori - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/1bb438bb3a9cd710f45fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39439",
        "pageSeq": 39439
    },
    {
        "IDcode": 39440,
        "title": "金鱼 - 探险废弃教学楼 Schoolgirl",
        "cover": "https://telegra.ph/file/d510e4ac2fad702d1488c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39440",
        "pageSeq": 39440
    },
    {
        "IDcode": 39441,
        "title": "六味帝皇酱 - 体操服 Uniforme de Gimnasia",
        "cover": "https://telegra.ph/file/59c205d25f89b5498a9f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39441",
        "pageSeq": 39441
    },
    {
        "IDcode": 39442,
        "title": "KuukoW - Catura (Grandblue Fantasy)",
        "cover": "https://telegra.ph/file/99f6a6b163cbf92368d2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39442",
        "pageSeq": 39442
    },
    {
        "IDcode": 39443,
        "title": "Kelly Jean - Mai Shiranui (The King",
        "cover": "https://telegra.ph/file/4acbceaa2937bebb76aa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39443",
        "pageSeq": 39443
    },
    {
        "IDcode": 39444,
        "title": "Potato Godzilla - Mash Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/14c297deca75c96f62ca7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39444",
        "pageSeq": 39444
    },
    {
        "IDcode": 39445,
        "title": "KuukoW - Researching Neko",
        "cover": "https://telegra.ph/file/9500a3b6ff9b5fd203fd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39445",
        "pageSeq": 39445
    },
    {
        "IDcode": 39446,
        "title": "Quackiess - Jeanne D'Arc Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/078aa192499aed4e5ea8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39446",
        "pageSeq": 39446
    },
    {
        "IDcode": 39447,
        "title": "손예은 Son Ye-Eun - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/d6b9cc0cb30959d669a2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39447",
        "pageSeq": 39447
    },
    {
        "IDcode": 39448,
        "title": "KuukoW - Dreamy Visitor",
        "cover": "https://telegra.ph/file/c2a2ae7f8c56ce94571f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39448",
        "pageSeq": 39448
    },
    {
        "IDcode": 39449,
        "title": "KuukoW - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/b1aa533bb20c04a836d47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39449",
        "pageSeq": 39449
    },
    {
        "IDcode": 39450,
        "title": "LemonCat Sempai - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/0e18d10c050281873ec6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39450",
        "pageSeq": 39450
    },
    {
        "IDcode": 39451,
        "title": "Ino - Makima Swimsuit (Chainsaw Man)",
        "cover": "https://telegra.ph/file/c8c644d0be04027953d6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39451",
        "pageSeq": 39451
    },
    {
        "IDcode": 39452,
        "title": "Sayo Momo - Le Malin (Azur Lane)",
        "cover": "https://telegra.ph/file/a7d0527861daaccd05214.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39452",
        "pageSeq": 39452
    },
    {
        "IDcode": 39453,
        "title": "小礼好困 SleeppyLee - Shinano (Azur Lane)",
        "cover": "https://telegra.ph/file/fdfd732f7d6d13c7d52bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39453",
        "pageSeq": 39453
    },
    {
        "IDcode": 39454,
        "title": "Quackiess - Bunny Rem (Re Zero)",
        "cover": "https://telegra.ph/file/ac8df9a116ec78b47d490.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39454",
        "pageSeq": 39454
    },
    {
        "IDcode": 39455,
        "title": "Byoru- Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/dd4d9e91d329656f5f85a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39455",
        "pageSeq": 39455
    },
    {
        "IDcode": 39456,
        "title": "Sayo Momo - Meltryllis Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/f75de08bf82550f9fd97d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39456",
        "pageSeq": 39456
    },
    {
        "IDcode": 39457,
        "title": "蜜蜜子Kimmie - Vol. NO.007 玩电脑的少女",
        "cover": "https://telegra.ph/file/ecdc06bc9b0c5d78c3172.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39457",
        "pageSeq": 39457
    },
    {
        "IDcode": 39458,
        "title": "Aery Tiefling - Thosaka Rin (Fate Stay Night)",
        "cover": "https://telegra.ph/file/6e041cb752934066cdcd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39458",
        "pageSeq": 39458
    },
    {
        "IDcode": 39459,
        "title": "Fantasy Factory - Little Red Riding Hood (Caperucita Roja)",
        "cover": "https://telegra.ph/file/2228d43dde1a8bde2a9c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39459",
        "pageSeq": 39459
    },
    {
        "IDcode": 39460,
        "title": "Rioko - Chen Hai (Azur Lane)",
        "cover": "https://telegra.ph/file/304a46874afcd1da03b3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39460",
        "pageSeq": 39460
    },
    {
        "IDcode": 39461,
        "title": "Momoko - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/d698bb15309c195e41617.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39461",
        "pageSeq": 39461
    },
    {
        "IDcode": 39462,
        "title": "Pattie - Daki (Genshin Impact)",
        "cover": "https://telegra.ph/file/8798bfadf8e5d4a575f57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39462",
        "pageSeq": 39462
    },
    {
        "IDcode": 39463,
        "title": "Aery Tiefling - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/2f7c399994d6c9407a8e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39463",
        "pageSeq": 39463
    },
    {
        "IDcode": 39464,
        "title": "蜜蜜子 Kimmie - Vol. NO.004 金缕衣",
        "cover": "https://telegra.ph/file/8aa35ffed4989dd150d50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39464",
        "pageSeq": 39464
    },
    {
        "IDcode": 39465,
        "title": "Fantasy Factory - Amelia Watson (Hololive)",
        "cover": "https://telegra.ph/file/fae3c2491236387861150.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39465",
        "pageSeq": 39465
    },
    {
        "IDcode": 39466,
        "title": "Quackiess - Lewd Peach (Super Mario Bros)",
        "cover": "https://telegra.ph/file/94f62398e2a05ad05c37d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39466",
        "pageSeq": 39466
    },
    {
        "IDcode": 39468,
        "title": "おみみ Omimi - ヨル・フォージャー Yor Forger (SPY × FAMILY)",
        "cover": "https://telegra.ph/file/72deb86043baf462375af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39468",
        "pageSeq": 39468
    },
    {
        "IDcode": 39469,
        "title": "Lovely Speace Kitten - Jesse (Toy Story)",
        "cover": "https://telegra.ph/file/32dfe92c7f9565dcda84e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39469",
        "pageSeq": 39469
    },
    {
        "IDcode": 39470,
        "title": "Meenfox - Lumine, Yelan, Marin & Black Lobelia (Genshin Impact/Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/36d76e209b1929d21e869.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39470",
        "pageSeq": 39470
    },
    {
        "IDcode": 39471,
        "title": "Fantasy Factory - Perseus (Azur Lane)",
        "cover": "https://telegra.ph/file/d23a58002effd3671dd22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39471",
        "pageSeq": 39471
    },
    {
        "IDcode": 39472,
        "title": "Hane Ame - Albedo Nun (Overlord)",
        "cover": "https://telegra.ph/file/d7c4846e940a83ef64363.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39472",
        "pageSeq": 39472
    },
    {
        "IDcode": 39473,
        "title": "KuukoW - Beast In The Wild",
        "cover": "https://telegra.ph/file/2230042244ac6999c7dbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39473",
        "pageSeq": 39473
    },
    {
        "IDcode": 39474,
        "title": "Kyaandere - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/02d971f7345e1d53302b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39474",
        "pageSeq": 39474
    },
    {
        "IDcode": 39475,
        "title": "Yoshinobi - Mei Swimsuit (Overwatch)",
        "cover": "https://telegra.ph/file/080bc028ac734409c1a6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39475",
        "pageSeq": 39475
    },
    {
        "IDcode": 39476,
        "title": "Yoshinobi - Nozomi (Love Live)",
        "cover": "https://telegra.ph/file/bd5f92c43f9dd2bed2455.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39476",
        "pageSeq": 39476
    },
    {
        "IDcode": 39477,
        "title": "白莉爱吃巧克力 - 明日香 Azuka (Neon Génesis Evangelion)",
        "cover": "https://telegra.ph/file/b748e921122efdd09f688.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39477",
        "pageSeq": 39477
    },
    {
        "IDcode": 39478,
        "title": "Hane Ame - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru/Dressing up My Darling)",
        "cover": "https://telegra.ph/file/dd20329124fe49dca2606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39478",
        "pageSeq": 39478
    },
    {
        "IDcode": 39480,
        "title": "Chameleahn - Dark Magician Girl (Yu Gi Oh)",
        "cover": "https://telegra.ph/file/ffa50335d408cec88fa66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39480",
        "pageSeq": 39480
    },
    {
        "IDcode": 39481,
        "title": "Stelar Hoshi - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/a7cef931c45684e8b94fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39481",
        "pageSeq": 39481
    },
    {
        "IDcode": 39482,
        "title": "Hane Ame - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/e612c13d0a98fec1f7767.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39482",
        "pageSeq": 39482
    },
    {
        "IDcode": 39483,
        "title": "Donna Loli - Jinx (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/f83c0cc2990354a5f5342.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39483",
        "pageSeq": 39483
    },
    {
        "IDcode": 39484,
        "title": "Fantasy Factory - Boosette & Boowsette (Super Mario Bros)",
        "cover": "https://telegra.ph/file/e505c9673586f3ca91ccd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39484",
        "pageSeq": 39484
    },
    {
        "IDcode": 39485,
        "title": "Queenie Chuppy - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/56a00888cc4b9ab36c85b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39485",
        "pageSeq": 39485
    },
    {
        "IDcode": 39486,
        "title": "UyUy - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/2b52417e6ebfe2e92706b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39486",
        "pageSeq": 39486
    },
    {
        "IDcode": 39487,
        "title": "Choi Ji Yun - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/e0c0febb740c91ab96892.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39487",
        "pageSeq": 39487
    },
    {
        "IDcode": 39488,
        "title": "Choi Ji Yun - Asa Mitaka (Chainsaw Man)",
        "cover": "https://telegra.ph/file/31aaa914fa06803f27d88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39488",
        "pageSeq": 39488
    },
    {
        "IDcode": 39489,
        "title": "Nyako 喵子 - JK Uniform in Train",
        "cover": "https://telegra.ph/file/9270a6f64863ba91bfa18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39489",
        "pageSeq": 39489
    },
    {
        "IDcode": 39490,
        "title": "Alexis Lust - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c2dfa8b79bfda53ec6136.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39490",
        "pageSeq": 39490
    },
    {
        "IDcode": 39491,
        "title": "Kaya Huang - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/e49ae76c7ca50f9e24189.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39491",
        "pageSeq": 39491
    },
    {
        "IDcode": 39492,
        "title": "Hokunaimeko - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/9854f7564edcfe841e20d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39492",
        "pageSeq": 39492
    },
    {
        "IDcode": 39493,
        "title": "Potato Godzilla - Yu Miaoyi (Fate Grand Order)",
        "cover": "https://telegra.ph/file/e9a22d8628f44501c3435.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39493",
        "pageSeq": 39493
    },
    {
        "IDcode": 39494,
        "title": "Choi Ji Yun - Marin Kitagawa Maid (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/577b94eac796d324ed4bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39494",
        "pageSeq": 39494
    },
    {
        "IDcode": 39495,
        "title": "Choi Ji Yun - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/c6d3cb804146a6c9a771b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39495",
        "pageSeq": 39495
    },
    {
        "IDcode": 39496,
        "title": "Hane Ame - Kurumi Tokisaki (Date A Live)",
        "cover": "https://telegra.ph/file/19683ec8bd45e10d96249.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39496",
        "pageSeq": 39496
    },
    {
        "IDcode": 39497,
        "title": "Chameleahn - Ahri & Evelyn (League Of Legends/KDA)",
        "cover": "https://telegra.ph/file/e0157052a8b620495996c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39497",
        "pageSeq": 39497
    },
    {
        "IDcode": 39498,
        "title": "迷之呆梨 - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/b4623d84b6811173de69a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39498",
        "pageSeq": 39498
    },
    {
        "IDcode": 39499,
        "title": "Shirogane Sama - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/796e51ff23280276b60e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39499",
        "pageSeq": 39499
    },
    {
        "IDcode": 39500,
        "title": "Choi Ji Yun - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/588209c86c39a3e0c3359.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39500",
        "pageSeq": 39500
    },
    {
        "IDcode": 39501,
        "title": "Donna Loli - Yir Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/848fb1a8ddcc26ea2f5fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39501",
        "pageSeq": 39501
    },
    {
        "IDcode": 39502,
        "title": "Byoru - Sakamata Chloe (Hololive)",
        "cover": "https://telegra.ph/file/50988ce8e01a4b00cad8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39502",
        "pageSeq": 39502
    },
    {
        "IDcode": 39503,
        "title": "Katie Simrell - Misty (Pokemon)",
        "cover": "https://telegra.ph/file/40bf8fdeb62edfc076f08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39503",
        "pageSeq": 39503
    },
    {
        "IDcode": 39504,
        "title": "Byoru - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/b1e6e4d95870817f18719.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39504",
        "pageSeq": 39504
    },
    {
        "IDcode": 39505,
        "title": "Akemi - Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/36f2fe7e82e96e2692b25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39505",
        "pageSeq": 39505
    },
    {
        "IDcode": 39506,
        "title": "Kaya Huang - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/d5bc71cebb748a92fdd04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39506",
        "pageSeq": 39506
    },
    {
        "IDcode": 39507,
        "title": "Aery Tiefling - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/a893431d2e9f0645f2216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39507",
        "pageSeq": 39507
    },
    {
        "IDcode": 39508,
        "title": "Fantasy Factory - Purple Rabbit (Random)",
        "cover": "https://telegra.ph/file/bf511a8ce0098481e5dc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39508",
        "pageSeq": 39508
    },
    {
        "IDcode": 39509,
        "title": "Sara Carvalho - Velma (Scooby Doo)",
        "cover": "https://telegra.ph/file/8898d3f69a2399cd41eb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39509",
        "pageSeq": 39509
    },
    {
        "IDcode": 39510,
        "title": "UyUy - Aqua (Konosuba)",
        "cover": "https://telegra.ph/file/97321e712c6dae12def6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39510",
        "pageSeq": 39510
    },
    {
        "IDcode": 39511,
        "title": "Candy Ball - Neko Maid",
        "cover": "https://telegra.ph/file/712ef6d06814ac3c42fe7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39511",
        "pageSeq": 39511
    },
    {
        "IDcode": 39512,
        "title": "UmekoJ - Cindy Aurum (Final Fantasy)",
        "cover": "https://telegra.ph/file/8ab32ad326b4bf80960db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39512",
        "pageSeq": 39512
    },
    {
        "IDcode": 39513,
        "title": "Hane Ame - Swimmer (Original Character)",
        "cover": "https://telegra.ph/file/ee461c8c8dcb90b17de2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39513",
        "pageSeq": 39513
    },
    {
        "IDcode": 39514,
        "title": "Vinnegal - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/e07f62d48342e14ad3a7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39514",
        "pageSeq": 39514
    },
    {
        "IDcode": 39515,
        "title": "Fluffy Nemu - Shizuku-tan (Spy x Family)",
        "cover": "https://telegra.ph/file/02abb55c75038c1d59bc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39515",
        "pageSeq": 39515
    },
    {
        "IDcode": 39516,
        "title": "UyUy - Toph (Avatar The Last Airbender)",
        "cover": "https://telegra.ph/file/ba316c6ed9a2aa3db2867.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39516",
        "pageSeq": 39516
    },
    {
        "IDcode": 39517,
        "title": "Fantasy Factory - Yuukyuu Kikan Elf",
        "cover": "https://telegra.ph/file/1e137776f585a0587646f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39517",
        "pageSeq": 39517
    },
    {
        "IDcode": 39518,
        "title": "Choi Ji Yun - Shizuku-tan (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/faf1d6287f840cec65aeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39518",
        "pageSeq": 39518
    },
    {
        "IDcode": 39519,
        "title": "Akemi - Yor Forger (Soy x Family)",
        "cover": "https://telegra.ph/file/977687e5b3d4d6753e742.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39519",
        "pageSeq": 39519
    },
    {
        "IDcode": 39520,
        "title": "Donna Loli - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/957a682d7b51b7ff8e4b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39520",
        "pageSeq": 39520
    }
];
