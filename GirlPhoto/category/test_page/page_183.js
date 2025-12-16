// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40343,
        "title": "Hana Bunny - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/5a30acad231a3677cd88b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40343",
        "pageSeq": 40343
    },
    {
        "IDcode": 40344,
        "title": "Byoru - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/5cdd335ae30692f03b80a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40344",
        "pageSeq": 40344
    },
    {
        "IDcode": 40345,
        "title": "Joyce - Nilou (Genshin Impact)",
        "cover": "https://telegra.ph/file/cdcb431b9922ce7ad731b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40345",
        "pageSeq": 40345
    },
    {
        "IDcode": 40346,
        "title": "Hana Bunny - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/9c3629f708d972f9c832e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40346",
        "pageSeq": 40346
    },
    {
        "IDcode": 40347,
        "title": "日奈娇 Hina Jiao [樱井小莜] - 神通",
        "cover": "https://telegra.ph/file/0016151f8ce4482a7d497.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40347",
        "pageSeq": 40347
    },
    {
        "IDcode": 40348,
        "title": "Hidori Rose & Enafox - Makima & Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/37a94d5283832d9830c63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40348",
        "pageSeq": 40348
    },
    {
        "IDcode": 40349,
        "title": "Rissoft344 - Agir (Azur Lane)",
        "cover": "https://telegra.ph/file/48b484c885e6edbbd8aeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40349",
        "pageSeq": 40349
    },
    {
        "IDcode": 40350,
        "title": "Sweetie Fox - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/1c1b184a2fb910adef4ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40350",
        "pageSeq": 40350
    },
    {
        "IDcode": 40351,
        "title": "Queenie - Akali (KDA / League Of Legend)",
        "cover": "https://telegra.ph/file/9494120c8b73428664c7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40351",
        "pageSeq": 40351
    },
    {
        "IDcode": 40352,
        "title": "Xia Xiao Qiu Qiu Qiu (夏小秋秋秋) -  No.071 超小比基尼",
        "cover": "https://telegra.ph/file/9bc7c33b23b74e84e1050.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40352",
        "pageSeq": 40352
    },
    {
        "IDcode": 40353,
        "title": "Lana Rain - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/b17420180e6e6d08df602.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40353",
        "pageSeq": 40353
    },
    {
        "IDcode": 40354,
        "title": "Arty Huang - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/b10409fac2aa044865916.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40354",
        "pageSeq": 40354
    },
    {
        "IDcode": 40355,
        "title": "Indigo White - Samus (Metroid)",
        "cover": "https://telegra.ph/file/9182438c73d9f8dac7b06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40355",
        "pageSeq": 40355
    },
    {
        "IDcode": 40356,
        "title": "Lana Rain - Bride 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/13b6e228148851a5628ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40356",
        "pageSeq": 40356
    },
    {
        "IDcode": 40357,
        "title": "Shui Miao Aqua - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/4e1e919a0e52cbcab602f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40357",
        "pageSeq": 40357
    },
    {
        "IDcode": 40358,
        "title": "Byoru - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/869bd663538ece0feb27b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40358",
        "pageSeq": 40358
    },
    {
        "IDcode": 40359,
        "title": "PingPing - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/ec5b93b5d76b1b4295245.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40359",
        "pageSeq": 40359
    },
    {
        "IDcode": 40360,
        "title": "Joyce - Jeanne D'Arc (Fate Grand Order)",
        "cover": "https://telegra.ph/file/4732fe9db39661d8eea75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40360",
        "pageSeq": 40360
    },
    {
        "IDcode": 40361,
        "title": "莱可Raika - 原神 纳西妲的乐园 Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/cb7d883c192dea67aa94f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40361",
        "pageSeq": 40361
    },
    {
        "IDcode": 40362,
        "title": "Fantasy Factory - Maid Swimsuit",
        "cover": "https://telegra.ph/file/6216f42ac39142db28a67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40362",
        "pageSeq": 40362
    },
    {
        "IDcode": 40363,
        "title": "Joyce - Amber (Genshin Impact)",
        "cover": "https://telegra.ph/file/d734801d91c922525a4b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40363",
        "pageSeq": 40363
    },
    {
        "IDcode": 40364,
        "title": "Queenie - Mihara (Nikke)",
        "cover": "https://telegra.ph/file/bb338c6ef358b388c54d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40364",
        "pageSeq": 40364
    },
    {
        "IDcode": 40365,
        "title": "Indigo White - Shiro (No Game No Life)",
        "cover": "https://telegra.ph/file/923fd6e2747fd85394fe4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40365",
        "pageSeq": 40365
    },
    {
        "IDcode": 40366,
        "title": "Byoru - Jackal (Nikke)",
        "cover": "https://telegra.ph/file/74e3853e09607af03acc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40366",
        "pageSeq": 40366
    },
    {
        "IDcode": 40367,
        "title": "Zzyuri 쮸리 - Asuna’s Maid Mansion +S.Ver (Blue Archive)",
        "cover": "https://telegra.ph/file/57805c649580e0b3adea0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40367",
        "pageSeq": 40367
    },
    {
        "IDcode": 40368,
        "title": "Yura - Sadako (The Ring)",
        "cover": "https://telegra.ph/file/a7c22ddff4526f5b7ebf5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40368",
        "pageSeq": 40368
    },
    {
        "IDcode": 40369,
        "title": "Indigo White - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/27d603f8d1224e75a0369.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40369",
        "pageSeq": 40369
    },
    {
        "IDcode": 40370,
        "title": "Yuumeilyn - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/af192fd5dbe5766c61e29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40370",
        "pageSeq": 40370
    },
    {
        "IDcode": 40371,
        "title": "Mimmi 밈미 - 你的小鲨鲨古拉 Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/525ede0a2cf298f26aa07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40371",
        "pageSeq": 40371
    },
    {
        "IDcode": 40372,
        "title": "Umeko J - Harribel (Bleach)",
        "cover": "https://telegra.ph/file/5673304c6fc59f8a29a25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40372",
        "pageSeq": 40372
    },
    {
        "IDcode": 40373,
        "title": "美美丘比酱 - 透明女仆 Maid",
        "cover": "https://telegra.ph/file/2b7a09d564ff317fc13a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40373",
        "pageSeq": 40373
    },
    {
        "IDcode": 40374,
        "title": "Alina Becker - Yor Forger (Spy X Family)",
        "cover": "https://telegra.ph/file/4c8226a63f9d3e3e2a970.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40374",
        "pageSeq": 40374
    },
    {
        "IDcode": 40375,
        "title": "Hane Ame - Belfast (Azur Lane)",
        "cover": "https://telegra.ph/file/9e1ee0feb0cc3092d3570.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40375",
        "pageSeq": 40375
    },
    {
        "IDcode": 40376,
        "title": "美美丘比酱 - 黑猫教师 / 白色小猫咪",
        "cover": "https://telegra.ph/file/49984c249bd6475c81aa7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40376",
        "pageSeq": 40376
    },
    {
        "IDcode": 40377,
        "title": "Kalinka Fox - Wednesday / Merlina (The Addams Family)",
        "cover": "https://telegra.ph/file/868fca9a365cf8a1e6e2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40377",
        "pageSeq": 40377
    },
    {
        "IDcode": 40378,
        "title": "Bambi - Akane Shinjou (SSSS.gridman)",
        "cover": "https://telegra.ph/file/45c2c717ca41feb413874.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40378",
        "pageSeq": 40378
    },
    {
        "IDcode": 40379,
        "title": "Byoru - Ghislaine (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/91c325809707ba520463b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40379",
        "pageSeq": 40379
    },
    {
        "IDcode": 40380,
        "title": "Alina Becker - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/834c100e78dd8e6b3affa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40380",
        "pageSeq": 40380
    },
    {
        "IDcode": 40381,
        "title": "Nagisa魔物喵 - 女仆的夏天 Maid",
        "cover": "https://telegra.ph/file/261e4e741ba1972437a91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40381",
        "pageSeq": 40381
    },
    {
        "IDcode": 40382,
        "title": "Zirael Rem - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/85938d3bb7cba7ee50505.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40382",
        "pageSeq": 40382
    },
    {
        "IDcode": 40383,
        "title": "Misaki Sai - Yor Forger (Spy X Family)",
        "cover": "https://telegra.ph/file/f73a329fda0df00066743.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40383",
        "pageSeq": 40383
    },
    {
        "IDcode": 40384,
        "title": "习呆呆 Xidaidai - Nishikigi Chisato (Lycoris Recoil)",
        "cover": "https://telegra.ph/file/6e859604f5253460bdc25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40384",
        "pageSeq": 40384
    },
    {
        "IDcode": 40385,
        "title": "Arty & Kaya - Collab (Genshin Impac & Azur Lane)",
        "cover": "https://telegra.ph/file/db20d868e77392e61638b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40385",
        "pageSeq": 40385
    },
    {
        "IDcode": 40386,
        "title": "Potato Godzilla - Chizuru Ichinose (Kanojo Okarishimasu)",
        "cover": "https://telegra.ph/file/cdb2c2f327231bedb2281.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40386",
        "pageSeq": 40386
    },
    {
        "IDcode": 40387,
        "title": "Lana Rain - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/db6b3cb8b46083954918e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40387",
        "pageSeq": 40387
    },
    {
        "IDcode": 40388,
        "title": "Joyce - Collei (Genshin Impact)",
        "cover": "https://telegra.ph/file/5c542dac0a50d8dc81b95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40388",
        "pageSeq": 40388
    },
    {
        "IDcode": 40389,
        "title": "Zirael Rem - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/e5d708ec1683a7c676aed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40389",
        "pageSeq": 40389
    },
    {
        "IDcode": 40390,
        "title": "星之迟迟 - 约尔3_太太的极密东洋任务 (Spy X Family)",
        "cover": "https://telegra.ph/file/780777e73807782cde8d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40390",
        "pageSeq": 40390
    },
    {
        "IDcode": 40391,
        "title": "Byoru - Kisaki (Blue Archive)",
        "cover": "https://telegra.ph/file/62d92f54ec6ba2cb516a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40391",
        "pageSeq": 40391
    },
    {
        "IDcode": 40392,
        "title": "Yoshinobi - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/5a70e3ca30aaea1d5e88c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40392",
        "pageSeq": 40392
    },
    {
        "IDcode": 40393,
        "title": "Fantasy Factory - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/3d35df883d17f0363a128.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40393",
        "pageSeq": 40393
    },
    {
        "IDcode": 40394,
        "title": "Aery Tiefling - Uraraka Ochaco (Boku no Hero Academia)",
        "cover": "https://telegra.ph/file/cb5de1a8f5bc9104592c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40394",
        "pageSeq": 40394
    },
    {
        "IDcode": 40395,
        "title": "眼酱大魔王w – 22年09月fantia",
        "cover": "https://telegra.ph/file/b2751093516c64b0bd453.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40395",
        "pageSeq": 40395
    },
    {
        "IDcode": 40396,
        "title": "Hatori - Asuma Toki (Blue Archive)",
        "cover": "https://telegra.ph/file/e68742449bcb450c8e7a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40396",
        "pageSeq": 40396
    },
    {
        "IDcode": 40397,
        "title": "Hana Bunny - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/7670c91f2abd12f1b72f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40397",
        "pageSeq": 40397
    },
    {
        "IDcode": 40398,
        "title": "Indigo White - Creeper (Minecraft)",
        "cover": "https://telegra.ph/file/4fdb3a42749ec91225d92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40398",
        "pageSeq": 40398
    },
    {
        "IDcode": 40399,
        "title": "年年Nnian - 空姐 Azafata",
        "cover": "https://telegra.ph/file/37c5091a8675197fb152f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40399",
        "pageSeq": 40399
    },
    {
        "IDcode": 40400,
        "title": "二阶堂 - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/4f0e9cffc97c59444a10c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40400",
        "pageSeq": 40400
    },
    {
        "IDcode": 40401,
        "title": "Meenfox - Pekora (vtuber / Hololive)",
        "cover": "https://telegra.ph/file/c5556b5c55829b855f234.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40401",
        "pageSeq": 40401
    },
    {
        "IDcode": 40402,
        "title": "Lera Himera - Bayonetta (Bayonetta Game)",
        "cover": "https://telegra.ph/file/c1307261dfd0fda517346.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40402",
        "pageSeq": 40402
    },
    {
        "IDcode": 40403,
        "title": "Indigo White - Yor Forger (Spy X Family)",
        "cover": "https://telegra.ph/file/870999338a5cb6f033941.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40403",
        "pageSeq": 40403
    },
    {
        "IDcode": 40404,
        "title": "Noi Oogami - Rosaria (Genshin Impact)",
        "cover": "https://telegra.ph/file/d2436656ea9d78eb61d36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40404",
        "pageSeq": 40404
    },
    {
        "IDcode": 40405,
        "title": "Noi Oogami - Dark Magician Girl (Yu Gi Oh)",
        "cover": "https://telegra.ph/file/9c83604ee08bab4358884.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40405",
        "pageSeq": 40405
    },
    {
        "IDcode": 40406,
        "title": "Rioko 凉凉子 - Toki Asuma (Blue Archive)",
        "cover": "https://telegra.ph/file/3907c156574c47e742678.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40406",
        "pageSeq": 40406
    },
    {
        "IDcode": 40407,
        "title": "Byoru - Leifang (Dead Or Alive)",
        "cover": "https://telegra.ph/file/8e0d256452333295ae1a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40407",
        "pageSeq": 40407
    },
    {
        "IDcode": 40408,
        "title": "Noi Oogami - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/e33ce909c6a96c208febb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40408",
        "pageSeq": 40408
    },
    {
        "IDcode": 40409,
        "title": "Sayomomo - Naughty (Nikke)",
        "cover": "https://telegra.ph/file/7b1c72e02c51b513e6fd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40409",
        "pageSeq": 40409
    },
    {
        "IDcode": 40410,
        "title": "Hana Bunny - Laudry",
        "cover": "https://telegra.ph/file/24d6ee6fcad0528fdc4a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40410",
        "pageSeq": 40410
    },
    {
        "IDcode": 40411,
        "title": "Byoru - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c6cea1fd08a0048e607f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40411",
        "pageSeq": 40411
    },
    {
        "IDcode": 40412,
        "title": "Mikomin - Mihara (Nikke)",
        "cover": "https://telegra.ph/file/d959837adf25fecdc7b64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40412",
        "pageSeq": 40412
    },
    {
        "IDcode": 40413,
        "title": "Hatori - Asuma Toki V2 (Blue Archive)",
        "cover": "https://telegra.ph/file/fa96092a950dda3d2a000.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40413",
        "pageSeq": 40413
    },
    {
        "IDcode": 40414,
        "title": "Hane Ame 雨波 - Collection 8套",
        "cover": "https://telegra.ph/file/525d3dec69600dccd44de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40414",
        "pageSeq": 40414
    },
    {
        "IDcode": 40415,
        "title": "眼酱大魔王w – 22年11月fantia",
        "cover": "https://telegra.ph/file/63aa1b781edfee4f0996b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40415",
        "pageSeq": 40415
    },
    {
        "IDcode": 40416,
        "title": "Uri うり - シースルー水着",
        "cover": "https://telegra.ph/file/4bd6f109a17030dbadaa1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40416",
        "pageSeq": 40416
    },
    {
        "IDcode": 40417,
        "title": "蠢沫沫 Chunmomo - 小电车 Electric Car",
        "cover": "https://telegra.ph/file/c2de82027980166ec7790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40417",
        "pageSeq": 40417
    },
    {
        "IDcode": 40418,
        "title": "Aery Tiefling - Gotoh (Bocchi the Rock)",
        "cover": "https://telegra.ph/file/b10aae219b499400a7cc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40418",
        "pageSeq": 40418
    },
    {
        "IDcode": 40419,
        "title": "女主K - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/17da660840af04379934f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40419",
        "pageSeq": 40419
    },
    {
        "IDcode": 40420,
        "title": "Lady Oichi - Dehya Dancer (Genshin Impact)",
        "cover": "https://telegra.ph/file/2b1066bd53da91fbcb5df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40420",
        "pageSeq": 40420
    },
    {
        "IDcode": 40421,
        "title": "Arty - St Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/046c10fcf1132b3e67bc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40421",
        "pageSeq": 40421
    },
    {
        "IDcode": 40422,
        "title": "Kitty Klaw - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/bd7092d4fe3cb587b9012.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40422",
        "pageSeq": 40422
    },
    {
        "IDcode": 40423,
        "title": "女主k - Little red riding hood",
        "cover": "https://telegra.ph/file/e368c332c46048cef075a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40423",
        "pageSeq": 40423
    },
    {
        "IDcode": 40424,
        "title": "Azami - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/93119b10d3cd1de716382.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40424",
        "pageSeq": 40424
    },
    {
        "IDcode": 40425,
        "title": "Hidori Rose - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/623c1ce8187a4dc557800.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40425",
        "pageSeq": 40425
    },
    {
        "IDcode": 40426,
        "title": "Oichi - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/334dcf9adcb3f7e07bdd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40426",
        "pageSeq": 40426
    },
    {
        "IDcode": 40427,
        "title": "Azami - Shinobu (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/5bd62337777ad2019c61b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40427",
        "pageSeq": 40427
    },
    {
        "IDcode": 40428,
        "title": "Aery Tiefling - Juri Han (Street Fighter)",
        "cover": "https://telegra.ph/file/9a7f5b818f9a05143e219.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40428",
        "pageSeq": 40428
    },
    {
        "IDcode": 40429,
        "title": "kiminogebuko わんこちゃん - Gotoh Hiori (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/90c8fdfc4d50e2195cec5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40429",
        "pageSeq": 40429
    },
    {
        "IDcode": 40430,
        "title": "Aery Tiefling - Vermeil (Kinsou No Vermeil)",
        "cover": "https://telegra.ph/file/4fbc0fd9d367afbbab4fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40430",
        "pageSeq": 40430
    },
    {
        "IDcode": 40431,
        "title": "Arty - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/e8ae33b2b3afbeebbdde6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40431",
        "pageSeq": 40431
    },
    {
        "IDcode": 40432,
        "title": "HaNari 하나리 - Fleet Girl Shimakaze (Kantai Collection)",
        "cover": "https://telegra.ph/file/b999bf218d05d765656bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40432",
        "pageSeq": 40432
    },
    {
        "IDcode": 40433,
        "title": "Azami - St Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/e4316ee47378b7b6d0623.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40433",
        "pageSeq": 40433
    },
    {
        "IDcode": 40434,
        "title": "金鱼kinngyo - 白桃汽水",
        "cover": "https://telegra.ph/file/18785365526881dd76fc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40434",
        "pageSeq": 40434
    },
    {
        "IDcode": 40435,
        "title": "洛璃LoLiSAMA - Agir Golden Dragon Among Auspicious Clouds (Azur Lane)",
        "cover": "https://telegra.ph/file/0b1195c3ed96dd3639f85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40435",
        "pageSeq": 40435
    },
    {
        "IDcode": 40436,
        "title": "Alin Ma/Xenon - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/a9dddfbb841b89556e937.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40436",
        "pageSeq": 40436
    },
    {
        "IDcode": 40437,
        "title": "Azami - White Harness Nurse",
        "cover": "https://telegra.ph/file/76752bd2fad8e4976ae42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40437",
        "pageSeq": 40437
    },
    {
        "IDcode": 40438,
        "title": "Choi Ji Yun & Eiraotis - Sakura & Hinata (Naruro Shippuden)",
        "cover": "https://telegra.ph/file/4d97f3a47a77438777307.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40438",
        "pageSeq": 40438
    },
    {
        "IDcode": 40439,
        "title": "Helly Valentine - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/6dee8a96c395719da6fea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40439",
        "pageSeq": 40439
    },
    {
        "IDcode": 40440,
        "title": "Lady Melamori - Rosaria (Genshin Impact)",
        "cover": "https://telegra.ph/file/445d938928862cf26e4f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40440",
        "pageSeq": 40440
    },
    {
        "IDcode": 40441,
        "title": "咬一口兔娘ovo - 生化危机4重制版 阿什莉 Ashley (Resident Evil)",
        "cover": "https://telegra.ph/file/bdc0dab0c19b048f3c292.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40441",
        "pageSeq": 40441
    },
    {
        "IDcode": 40442,
        "title": "Byoru - Wednesday / Merlina (The Addams Family)",
        "cover": "https://telegra.ph/file/8a2632bf2a239f913a66f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40442",
        "pageSeq": 40442
    }
];
