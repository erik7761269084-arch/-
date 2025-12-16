// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40544,
        "title": "Arty - Yae Sakura Xmas (Honkai Gakuen)",
        "cover": "https://telegra.ph/file/b86d3cd803f1ceee975fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40544",
        "pageSeq": 40544
    },
    {
        "IDcode": 40545,
        "title": "Azami - Mitsuri Kanroji (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/3cb2084180ec2895b8cae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40545",
        "pageSeq": 40545
    },
    {
        "IDcode": 40546,
        "title": "Donna Loli - Beach Jinx (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/441a5c195aa2e3530f012.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40546",
        "pageSeq": 40546
    },
    {
        "IDcode": 40547,
        "title": "KuukoW - Seele (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/ee8d470ef3db0fadc96fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40547",
        "pageSeq": 40547
    },
    {
        "IDcode": 40548,
        "title": "KuukoW - Nero (Nikke)",
        "cover": "https://telegra.ph/file/eec0af58f015567891010.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40548",
        "pageSeq": 40548
    },
    {
        "IDcode": 40549,
        "title": "Kalinka Fox - Wednesday / Merlina (The Addams Family)",
        "cover": "https://telegra.ph/file/91869c3c8ff737f23172b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40549",
        "pageSeq": 40549
    },
    {
        "IDcode": 40550,
        "title": "Choi Ji Yun - Trixie (The Fairly Oddparents)",
        "cover": "https://telegra.ph/file/297b99698d71dcf20930e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40550",
        "pageSeq": 40550
    },
    {
        "IDcode": 40551,
        "title": "咬一口兔娘ovo - 黏黏团子兔 Nahida (万年萝莉纳西妲)",
        "cover": "https://telegra.ph/file/5fa862c668e3b19c6d03a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40551",
        "pageSeq": 40551
    },
    {
        "IDcode": 40552,
        "title": "Voezacos - Moka (Rosario Vampire)",
        "cover": "https://telegra.ph/file/21cc3a8904bcc6f03d4b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40552",
        "pageSeq": 40552
    },
    {
        "IDcode": 40553,
        "title": "NAGISA魔物喵 - 今日は時雨です〜 Shigure Shimakaze (Kantai Collection)",
        "cover": "https://telegra.ph/file/3caeb28418ec8d9ddaff5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40553",
        "pageSeq": 40553
    },
    {
        "IDcode": 40554,
        "title": "Vinnegal - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/f1bccda070eab0478887c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40554",
        "pageSeq": 40554
    },
    {
        "IDcode": 40555,
        "title": "Meladinha - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/3b8d774c4a1bb610c8a01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40555",
        "pageSeq": 40555
    },
    {
        "IDcode": 40556,
        "title": "Mikomin - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/5f6c875994ee29be690b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40556",
        "pageSeq": 40556
    },
    {
        "IDcode": 40557,
        "title": "蠢沫沫 Chunmomo - 午后课间",
        "cover": "https://telegra.ph/file/7c0ce54cb10398a469079.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40557",
        "pageSeq": 40557
    },
    {
        "IDcode": 40558,
        "title": "Potato Godzilla - Uncensored Onlyfans",
        "cover": "https://telegra.ph/file/5b74642e9c46326bb62e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40558",
        "pageSeq": 40558
    },
    {
        "IDcode": 40559,
        "title": "Vinnegal - Satsuki (Kill la Kill)",
        "cover": "https://telegra.ph/file/178114c9196aff3d02cb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40559",
        "pageSeq": 40559
    },
    {
        "IDcode": 40560,
        "title": "Pattie - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/a0c4b6032ceacc8e05e9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40560",
        "pageSeq": 40560
    },
    {
        "IDcode": 40561,
        "title": "Lera Himera - Zombie Zoey (Gaslighters)",
        "cover": "https://telegra.ph/file/fd69f9cd6010006bf887e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40561",
        "pageSeq": 40561
    },
    {
        "IDcode": 40562,
        "title": "Sayo Momo - Raven (Teen Titans)",
        "cover": "https://telegra.ph/file/b8edb802e9d3560f1ee75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40562",
        "pageSeq": 40562
    },
    {
        "IDcode": 40563,
        "title": "Vinnegal - 2B Black Bride (Nier Automata)",
        "cover": "https://telegra.ph/file/ac3fd09a0a134d96f427b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40563",
        "pageSeq": 40563
    },
    {
        "IDcode": 40564,
        "title": "Azami - Aerith Red Lingerie (Final Fantasy)",
        "cover": "https://telegra.ph/file/36bd0e0089287588b57d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40564",
        "pageSeq": 40564
    },
    {
        "IDcode": 40565,
        "title": "Xidaidai 习呆呆 - Elysia (Honkai Gakuen)",
        "cover": "https://telegra.ph/file/21cf319d3aa1a4c6b5ed4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40565",
        "pageSeq": 40565
    },
    {
        "IDcode": 40566,
        "title": "KuukoW - Baobhan Sith (Fate Grand Order)",
        "cover": "https://telegra.ph/file/abd3405406ed047417ea1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40566",
        "pageSeq": 40566
    },
    {
        "IDcode": 40567,
        "title": "Vinnegal - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/73e58ae86c05de6c61644.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40567",
        "pageSeq": 40567
    },
    {
        "IDcode": 40568,
        "title": "Vinnegal - Yor Forger V2 (Spy x Family)",
        "cover": "https://telegra.ph/file/e0094932a8990dc4291cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40568",
        "pageSeq": 40568
    },
    {
        "IDcode": 40569,
        "title": "Yoshinobi & Minty Miyako - Frogs",
        "cover": "https://telegra.ph/file/6534de7a9b7446595e2dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40569",
        "pageSeq": 40569
    },
    {
        "IDcode": 40570,
        "title": "Xidaidai 习呆呆 - Noshiro (Azur Lane)",
        "cover": "https://telegra.ph/file/6e5ade8e52807bb470e5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40570",
        "pageSeq": 40570
    },
    {
        "IDcode": 40571,
        "title": "Choi Ji Yun - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/1948cd7926bbd86f6a858.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40571",
        "pageSeq": 40571
    },
    {
        "IDcode": 40572,
        "title": "Byoru - Marin Red (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/77cda21a2ad85faa766aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40572",
        "pageSeq": 40572
    },
    {
        "IDcode": 40573,
        "title": "Aery Tiefling - Rei Ayanami (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/488ba353ade6d75c07fce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40573",
        "pageSeq": 40573
    },
    {
        "IDcode": 40574,
        "title": "Leticia Shirayuki - Rias Gremory (High School DxD)",
        "cover": "https://telegra.ph/file/5303d1406e654b6257aac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40574",
        "pageSeq": 40574
    },
    {
        "IDcode": 40575,
        "title": "Helly Valentine - Sombra (Overwatch)",
        "cover": "https://telegra.ph/file/7a57b83cf6ac36d3fa907.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40575",
        "pageSeq": 40575
    },
    {
        "IDcode": 40576,
        "title": "Xidaidai 习呆呆 - Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/5dea4b694801946d855e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40576",
        "pageSeq": 40576
    },
    {
        "IDcode": 40577,
        "title": "Byoru - Anti Gwenom (Spider-Man)",
        "cover": "https://telegra.ph/file/86d87059628ff51e2a65b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40577",
        "pageSeq": 40577
    },
    {
        "IDcode": 40578,
        "title": "Vinnegal - A2 (Nier Automata)",
        "cover": "https://telegra.ph/file/298e53f9febf8400cb012.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40578",
        "pageSeq": 40578
    },
    {
        "IDcode": 40579,
        "title": "爆机少女喵小吉 Nekokoyoshi - 桃色看護師の夜間問診 Nurse",
        "cover": "https://telegra.ph/file/485de573e38f1b303e833.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40579",
        "pageSeq": 40579
    },
    {
        "IDcode": 40581,
        "title": "迷之呆梨 Fatiao_liii - あなたは好きですか",
        "cover": "https://telegra.ph/file/b4fbf8275193b4d9f65bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40581",
        "pageSeq": 40581
    },
    {
        "IDcode": 40582,
        "title": "Lera Himera & Alexandra Bodler - Lola Bunny & Gadget (Chip And Dale & Space Jam)",
        "cover": "https://telegra.ph/file/8eaccfdcf5cb778ead524.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40582",
        "pageSeq": 40582
    },
    {
        "IDcode": 40583,
        "title": "白莉爱吃巧克力 - Miyu Kasumizawa (Blue Archive)",
        "cover": "https://telegra.ph/file/d989de19b7c5df18a52b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40583",
        "pageSeq": 40583
    },
    {
        "IDcode": 40584,
        "title": "Frauleinmilk - Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/704723cc55bbcfffb11d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40584",
        "pageSeq": 40584
    },
    {
        "IDcode": 40585,
        "title": "Nyako喵子 - 粉色高叉竞泳",
        "cover": "https://telegra.ph/file/3ca4865ab860ac6fb74b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40585",
        "pageSeq": 40585
    },
    {
        "IDcode": 40586,
        "title": "星之迟迟 Hoshilily -  纯爱之槛 Succubus",
        "cover": "https://telegra.ph/file/e562c976d3be66d6dde8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40586",
        "pageSeq": 40586
    },
    {
        "IDcode": 40587,
        "title": "Potato Godzilla - Bunny Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/3f2d6ca1f8e81cfed1d43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40587",
        "pageSeq": 40587
    },
    {
        "IDcode": 40588,
        "title": "Sayo Momo - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/f14c3e0f86a8a67a4ce16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40588",
        "pageSeq": 40588
    },
    {
        "IDcode": 40589,
        "title": "Sayomomo - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/eec341e451a0a025d74ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40589",
        "pageSeq": 40589
    },
    {
        "IDcode": 40590,
        "title": "Mimi Chan - Shizuku (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/25bc1a4a2f02f50e66f6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40590",
        "pageSeq": 40590
    },
    {
        "IDcode": 40591,
        "title": "Nightmare-36e - Evelynn (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/d8aed99f043b1aa63ecef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40591",
        "pageSeq": 40591
    },
    {
        "IDcode": 40592,
        "title": "Vinnegal - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/16d5e5e0b81a079c80dd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40592",
        "pageSeq": 40592
    },
    {
        "IDcode": 40593,
        "title": "Byoru - Ms. Hina (Genshin Impact)",
        "cover": "https://telegra.ph/file/c35593c5f3f2f93080fbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40593",
        "pageSeq": 40593
    },
    {
        "IDcode": 40594,
        "title": "Potato Godzilla - St. Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/7587372dcda8445cf775c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40594",
        "pageSeq": 40594
    },
    {
        "IDcode": 40595,
        "title": "Hane Ame - 蜘蛛侠格温 Spider-Gwen",
        "cover": "https://telegra.ph/file/649459bf047ba7585fb83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40595",
        "pageSeq": 40595
    },
    {
        "IDcode": 40596,
        "title": "Hane Ame - Reze 蕾塞 (Chainsaw Man)",
        "cover": "https://telegra.ph/file/9338f10ceaf46d5dc6b5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40596",
        "pageSeq": 40596
    },
    {
        "IDcode": 40597,
        "title": "桃暖酱 - Chang'e (Honor Of Kings)",
        "cover": "https://telegra.ph/file/3ef94b46495ab2363670d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40597",
        "pageSeq": 40597
    },
    {
        "IDcode": 40598,
        "title": "您的蛋蛋 - 鬼父爱莉酱 Airi (Oni-Chichi)",
        "cover": "https://telegra.ph/file/c7faae293244c1a26c085.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40598",
        "pageSeq": 40598
    },
    {
        "IDcode": 40599,
        "title": "Byoru - Barbie",
        "cover": "https://telegra.ph/file/3c3049f45f932af78ede5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40599",
        "pageSeq": 40599
    },
    {
        "IDcode": 40600,
        "title": "Byoru - Dehya (Genshin Impact)",
        "cover": "https://telegra.ph/file/cfa1322ef965426752eba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40600",
        "pageSeq": 40600
    },
    {
        "IDcode": 40601,
        "title": "Hane Ame Baltimore (Azur Lane)",
        "cover": "https://telegra.ph/file/baba682264d83694442aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40601",
        "pageSeq": 40601
    },
    {
        "IDcode": 40602,
        "title": "Arty Huang - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/bad1170164de9929c668a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40602",
        "pageSeq": 40602
    },
    {
        "IDcode": 40603,
        "title": "Potato Godzilla - Nico Yazawa (Love Live)",
        "cover": "https://telegra.ph/file/09ac7a6d198a2964bc7cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40603",
        "pageSeq": 40603
    },
    {
        "IDcode": 40604,
        "title": "Ywuuki - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/db6bfd1a89e395f3c7d90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40604",
        "pageSeq": 40604
    },
    {
        "IDcode": 40605,
        "title": "Helly Valentine - Miu Amano (Blend S)",
        "cover": "https://telegra.ph/file/118a3ce9591917f86a1c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40605",
        "pageSeq": 40605
    },
    {
        "IDcode": 40606,
        "title": "Byoru - Alice (Nikke)",
        "cover": "https://telegra.ph/file/0263cf980c2d53304823f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40606",
        "pageSeq": 40606
    },
    {
        "IDcode": 40607,
        "title": "Hane Ame - Sky Blue Original",
        "cover": "https://telegra.ph/file/ae23407ed7f9b4ace5d09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40607",
        "pageSeq": 40607
    },
    {
        "IDcode": 40608,
        "title": "Nightmare-36e - Noboro (Taimanin Asagi)",
        "cover": "https://telegra.ph/file/e5be2967adc976ce74e2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40608",
        "pageSeq": 40608
    },
    {
        "IDcode": 40609,
        "title": "星之迟迟 - 偶像大师 樋口圆香 Madoka (The Idol Master)",
        "cover": "https://telegra.ph/file/2f97cd236347552cb4080.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40609",
        "pageSeq": 40609
    },
    {
        "IDcode": 40610,
        "title": "Uri - マスク配信者ちゃん😷",
        "cover": "https://telegra.ph/file/833ccad3b4b4c78f10979.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40610",
        "pageSeq": 40610
    },
    {
        "IDcode": 40611,
        "title": "Choi Ji Yun - Himeko (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/28751c1ce04ad466fa7e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40611",
        "pageSeq": 40611
    },
    {
        "IDcode": 40612,
        "title": "Vinnegal - Kaine II (Nier Automata)",
        "cover": "https://telegra.ph/file/a8eb64ad1f6e413de70c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40612",
        "pageSeq": 40612
    },
    {
        "IDcode": 40613,
        "title": "秋和柯基 Xiao Qiu & Natsuko 夏夏子 - Yuni & Mihara (Nikke)",
        "cover": "https://telegra.ph/file/c073fa6be05f967462ebf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40613",
        "pageSeq": 40613
    },
    {
        "IDcode": 40614,
        "title": "星澜是澜澜叫澜妹呀 Xinglanlans - 人造人十八号 Android 18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/34bc444502065188fb8f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40614",
        "pageSeq": 40614
    },
    {
        "IDcode": 40615,
        "title": "Lada Lyumos -  Melissa Rory (Cyberpunk 2077 Cyberpsychosis)",
        "cover": "https://telegra.ph/file/96e7eac95460488c7233c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40615",
        "pageSeq": 40615
    },
    {
        "IDcode": 40616,
        "title": "Uri - 秘書ちゃん👓",
        "cover": "https://telegra.ph/file/da8ecdb0e2c75fe7cdc83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40616",
        "pageSeq": 40616
    },
    {
        "IDcode": 40617,
        "title": "Aery Tiefling - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/b6f5458ec97762c77e283.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40617",
        "pageSeq": 40617
    },
    {
        "IDcode": 40618,
        "title": "Potato Godzilla - Mashu FOU XMas (Fate Grand Order)",
        "cover": "https://telegra.ph/file/9bea3ba754160a10b7805.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40618",
        "pageSeq": 40618
    },
    {
        "IDcode": 40619,
        "title": "Eliza Miao Miao - Reika (Gantz)",
        "cover": "https://telegra.ph/file/577ae849af61d72972d3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40619",
        "pageSeq": 40619
    },
    {
        "IDcode": 40620,
        "title": "Uri - 喜多川海夢ちゃん水着👙 Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/caa3ba765154511e24e75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40620",
        "pageSeq": 40620
    },
    {
        "IDcode": 40621,
        "title": "Byoru - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/8895cb11274c75c366f3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40621",
        "pageSeq": 40621
    },
    {
        "IDcode": 40622,
        "title": "Donna Loli - Yoimiya (Genshin Impact)",
        "cover": "https://telegra.ph/file/a665aec38deb845cce867.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40622",
        "pageSeq": 40622
    },
    {
        "IDcode": 40623,
        "title": "손예은 Son Ye Eun - PLAYGAME YEEUN RED",
        "cover": "https://telegra.ph/file/0ac8a28ef38111a9d7e9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40623",
        "pageSeq": 40623
    },
    {
        "IDcode": 40624,
        "title": "Potato Godzilla - Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/15b14b3a1abdcb65845ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40624",
        "pageSeq": 40624
    },
    {
        "IDcode": 40625,
        "title": "Azami - Yu Miaoyi Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/d91227fdb191494e91850.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40625",
        "pageSeq": 40625
    },
    {
        "IDcode": 40626,
        "title": "Vinnegal - Reze Battle Maid II (One Punch Man)",
        "cover": "https://telegra.ph/file/b685b7dbf71d992c6d6bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40626",
        "pageSeq": 40626
    },
    {
        "IDcode": 40627,
        "title": "Hane Ame - Rupee (Goddess of Victory Nikke)",
        "cover": "https://telegra.ph/file/f23ee4eb448f00a752216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40627",
        "pageSeq": 40627
    },
    {
        "IDcode": 40628,
        "title": "Potato Godzilla - Eriri Spencer (Saenai Heroine)",
        "cover": "https://telegra.ph/file/5ca171c0410a949339472.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40628",
        "pageSeq": 40628
    },
    {
        "IDcode": 40629,
        "title": "Potato Godzilla - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/c117dea006bf284aaad18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40629",
        "pageSeq": 40629
    },
    {
        "IDcode": 40630,
        "title": "Alina Becker - Spider-Gwen (Spider-Man)",
        "cover": "https://telegra.ph/file/108d0bb320892075777a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40630",
        "pageSeq": 40630
    },
    {
        "IDcode": 40631,
        "title": "Alina Becker - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/24aba4c8b2464f8a50b74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40631",
        "pageSeq": 40631
    },
    {
        "IDcode": 40634,
        "title": "Fantasy Factory - Kisaki (Blue Archive)",
        "cover": "https://telegra.ph/file/a877b0045c65dc54159c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40634",
        "pageSeq": 40634
    },
    {
        "IDcode": 40635,
        "title": "神沢永莉 Yongli - 家庭作业 Tarea",
        "cover": "https://telegra.ph/file/252626a926d5e6e8969f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40635",
        "pageSeq": 40635
    },
    {
        "IDcode": 40636,
        "title": "Alina Becker - Quiet (Metal Gear Solid)",
        "cover": "https://telegra.ph/file/c0cbf3e21c2886c82dcd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40636",
        "pageSeq": 40636
    },
    {
        "IDcode": 40637,
        "title": "Alina Becker - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/c3002c80b5301d6dbc65d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40637",
        "pageSeq": 40637
    },
    {
        "IDcode": 40638,
        "title": "Mik Allen - Katsuragi Misato (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/cd131436a37969bfc98ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40638",
        "pageSeq": 40638
    },
    {
        "IDcode": 40639,
        "title": "落落Raku – 閃光少女~Shining Days",
        "cover": "https://telegra.ph/file/80cf008c6f65ac07c64d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40639",
        "pageSeq": 40639
    },
    {
        "IDcode": 40640,
        "title": "Meriol Chan - Rin Tohsaka (Fate Stay Night)",
        "cover": "https://telegra.ph/file/e21901ce1a068d1c50d02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40640",
        "pageSeq": 40640
    },
    {
        "IDcode": 40641,
        "title": "Alina Becker - Reika (Gantz)",
        "cover": "https://telegra.ph/file/999f419c56c95f2ad9ebe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40641",
        "pageSeq": 40641
    },
    {
        "IDcode": 40642,
        "title": "Miih - Rosaria (Genshin Impact)",
        "cover": "https://telegra.ph/file/f9086087bb0dd0ac96ae9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40642",
        "pageSeq": 40642
    },
    {
        "IDcode": 40643,
        "title": "Byoru - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/93cfc66691bd1eff5f634.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40643",
        "pageSeq": 40643
    },
    {
        "IDcode": 40644,
        "title": "玉汇 Kokuhui - 午后牛乳时间",
        "cover": "https://telegra.ph/file/c6ddd5e25f599fac850d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40644",
        "pageSeq": 40644
    },
    {
        "IDcode": 40645,
        "title": "Xidaidai 习呆呆 - 喜多川海夢 バニー  Bunny Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/eb272b23eae6d39c33219.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40645",
        "pageSeq": 40645
    },
    {
        "IDcode": 40646,
        "title": "Potato Godzilla - Asuna (Sword Art Online)",
        "cover": "https://telegra.ph/file/71f91816e22471d5a277d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40646",
        "pageSeq": 40646
    }
];
