// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41362,
        "title": "Ain Nguyen - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/567cbe799b9356bc35400.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41362",
        "pageSeq": 41362
    },
    {
        "IDcode": 41363,
        "title": "Hologana - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/6b6b4b610e3ffe4e1d231.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41363",
        "pageSeq": 41363
    },
    {
        "IDcode": 41364,
        "title": "星之迟迟 Hoshilily - 春节新品 《蝴蝶旗袍》",
        "cover": "https://telegra.ph/file/a9812bc2aaf2320353526.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41364",
        "pageSeq": 41364
    },
    {
        "IDcode": 41365,
        "title": "Peachuu - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/6379c648f00767ffd73c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41365",
        "pageSeq": 41365
    },
    {
        "IDcode": 41366,
        "title": "Lada Lyumos - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/b080583c10e6212cd5b17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41366",
        "pageSeq": 41366
    },
    {
        "IDcode": 41367,
        "title": "Tsuki Desu - Magia Baiser / Utena (Mahou Shoujo ni Akogarete)",
        "cover": "https://telegra.ph/file/81a930caf1da3db7e8ac7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41367",
        "pageSeq": 41367
    },
    {
        "IDcode": 41368,
        "title": "Virtual Geisha - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/637886ecf013e0841292b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41368",
        "pageSeq": 41368
    },
    {
        "IDcode": 41369,
        "title": "Caticornplay - Komi (Komi-san)",
        "cover": "https://telegra.ph/file/a7f68b3ee2694977f883f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41369",
        "pageSeq": 41369
    },
    {
        "IDcode": 41370,
        "title": "Ain Nguyen - Cha Hae-in (Solo Leveling)",
        "cover": "https://telegra.ph/file/8d2a544770634861cf1b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41370",
        "pageSeq": 41370
    },
    {
        "IDcode": 41371,
        "title": "Amaimai - Shisuka Mikazuki (Zom100)",
        "cover": "https://telegra.ph/file/0607e68dd45b8c7b7b500.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41371",
        "pageSeq": 41371
    },
    {
        "IDcode": 41372,
        "title": "Umeko J - Kitana (Mortal Kombat)",
        "cover": "https://telegra.ph/file/60e298a856bf9105cd815.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41372",
        "pageSeq": 41372
    },
    {
        "IDcode": 41373,
        "title": "Shadow - Viper (Valorant)",
        "cover": "https://telegra.ph/file/1d27ea8d305acbb011a03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41373",
        "pageSeq": 41373
    },
    {
        "IDcode": 41374,
        "title": "Yura - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/6fa975336297a51799d65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41374",
        "pageSeq": 41374
    },
    {
        "IDcode": 41375,
        "title": "Kuuko W - Navia (Genshin Impact)",
        "cover": "https://telegra.ph/file/590815b2f330db6197b55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41375",
        "pageSeq": 41375
    },
    {
        "IDcode": 41376,
        "title": "Hana Bunny - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/aa29d20db46cf3fb9b098.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41376",
        "pageSeq": 41376
    },
    {
        "IDcode": 41377,
        "title": "Xia Xiao Qiu 麻花麻花酱 - Tosa (Azur Lane)",
        "cover": "https://telegra.ph/file/cf4f7e9c871edf3d288a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41377",
        "pageSeq": 41377
    },
    {
        "IDcode": 41378,
        "title": "Sweetie Fox - Elastigirl (The Incredibles)",
        "cover": "https://telegra.ph/file/430aa1d23a42166520258.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41378",
        "pageSeq": 41378
    },
    {
        "IDcode": 41379,
        "title": "Alina Becker - Ichinose Asuna Maid (Blue Archive)",
        "cover": "https://telegra.ph/file/f48ab614009ef35db2805.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41379",
        "pageSeq": 41379
    },
    {
        "IDcode": 41380,
        "title": "Arty - Guitar Sister",
        "cover": "https://telegra.ph/file/d335d657b666eebc66d93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41380",
        "pageSeq": 41380
    },
    {
        "IDcode": 41381,
        "title": "AmaiMai - Mitama (kaminaki sekai no kamisama katsudou)",
        "cover": "https://telegra.ph/file/65d26e461d15a22d126b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41381",
        "pageSeq": 41381
    },
    {
        "IDcode": 41382,
        "title": "Lera Himera & Alcololi - Makima & Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/db15f8bee9cf056563602.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41382",
        "pageSeq": 41382
    },
    {
        "IDcode": 41383,
        "title": "Hana Bunny - Xianyun (Genshin Impact)",
        "cover": "https://telegra.ph/file/77071da718f797d647d00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41383",
        "pageSeq": 41383
    },
    {
        "IDcode": 41384,
        "title": "ZinieQ - Hatsune Miku Project Voltage (Vocaloid / Pokemon)",
        "cover": "https://telegra.ph/file/72efc8ffd53b2242e4371.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41384",
        "pageSeq": 41384
    },
    {
        "IDcode": 41385,
        "title": "Theresa Hime - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/2a6c6a34ac2da954654a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41385",
        "pageSeq": 41385
    },
    {
        "IDcode": 41386,
        "title": "Sladkoslava - Blck Cat  (Spider-Man)",
        "cover": "https://telegra.ph/file/cbab191267015937a375b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41386",
        "pageSeq": 41386
    },
    {
        "IDcode": 41387,
        "title": "Kuuko W - Tifa Swimsuit (Final Fantasy)",
        "cover": "https://telegra.ph/file/cb91222f33efb194e55d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41387",
        "pageSeq": 41387
    },
    {
        "IDcode": 41388,
        "title": "Aery Tiefling - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/fee704e2c93755bfa60fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41388",
        "pageSeq": 41388
    },
    {
        "IDcode": 41389,
        "title": "Dio Sixx - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/92f6175ab2585d9b9719d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41389",
        "pageSeq": 41389
    },
    {
        "IDcode": 41390,
        "title": "Caticornplay - Furina (Genshin Impact)",
        "cover": "https://telegra.ph/file/d0721e97d9b8edb09668d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41390",
        "pageSeq": 41390
    },
    {
        "IDcode": 41391,
        "title": "Ping Ping - Guitarsister",
        "cover": "https://telegra.ph/file/c49d9938e19c9f1aa5c90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41391",
        "pageSeq": 41391
    },
    {
        "IDcode": 41392,
        "title": "小瑶幺幺 Xiao Yao Yao - Lynette (Genshin Impact)",
        "cover": "https://telegra.ph/file/6cb936661641a4705ade5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41392",
        "pageSeq": 41392
    },
    {
        "IDcode": 41393,
        "title": "Shui Miao Aqua - Ako Amau (Blue Archive)",
        "cover": "https://telegra.ph/file/cec4f3abb55b5235e82d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41393",
        "pageSeq": 41393
    },
    {
        "IDcode": 41394,
        "title": "Hana Bunny - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/51265496c93e3f076c2ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41394",
        "pageSeq": 41394
    },
    {
        "IDcode": 41395,
        "title": "Hane Ame - Original Luxe Elf",
        "cover": "https://telegra.ph/file/6b37d9e084222552f8b42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41395",
        "pageSeq": 41395
    },
    {
        "IDcode": 41396,
        "title": "Hane Ame - Original Luxe Elf",
        "cover": "https://telegra.ph/file/287b00ac0ab9e91ec1fa7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41396",
        "pageSeq": 41396
    },
    {
        "IDcode": 41397,
        "title": "Hane Ame - Original Luxe Elf",
        "cover": "https://telegra.ph/file/ff53a2337aaaff0921ead.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41397",
        "pageSeq": 41397
    },
    {
        "IDcode": 41398,
        "title": "Fla - Jinx (League Of Legends / Arcane)",
        "cover": "https://telegra.ph/file/e7f41c60bbe816f2a0eb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41398",
        "pageSeq": 41398
    },
    {
        "IDcode": 41399,
        "title": "NinJA - Ahri (League Of Legends)",
        "cover": "https://telegra.ph/file/c151bcea99e72e8f9eaa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41399",
        "pageSeq": 41399
    },
    {
        "IDcode": 41400,
        "title": "Mercurygin - 2B (Nier Automsta)",
        "cover": "https://telegra.ph/file/24ce6f1552aa76195e134.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41400",
        "pageSeq": 41400
    },
    {
        "IDcode": 41401,
        "title": "Kaya - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/eb0f3f431f0df6b7011ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41401",
        "pageSeq": 41401
    },
    {
        "IDcode": 41402,
        "title": "Hana Bunny - Luxury Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/4878a054fb83fc9b0551a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41402",
        "pageSeq": 41402
    },
    {
        "IDcode": 41403,
        "title": "麻花麻花酱 Xia Xiao Qiu - Nure China",
        "cover": "https://telegra.ph/file/7bf72a6050f38253b6ff9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41403",
        "pageSeq": 41403
    },
    {
        "IDcode": 41404,
        "title": "Demon Mika - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/3c76540804b2ef8cf89b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41404",
        "pageSeq": 41404
    },
    {
        "IDcode": 41405,
        "title": "Xidaidai - March 7th (Honkai Star Rail )",
        "cover": "https://telegra.ph/file/672c452bd91ff5aa225c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41405",
        "pageSeq": 41405
    },
    {
        "IDcode": 41406,
        "title": "Umeko J - Nyotengu (Dead Or Alive)",
        "cover": "https://telegra.ph/file/b411f5f01ec3ec1d4112b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41406",
        "pageSeq": 41406
    },
    {
        "IDcode": 41407,
        "title": "Kuuko W - Miku Rabbit (Vocaloid)",
        "cover": "https://telegra.ph/file/a0bfe52cb2d6e544056db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41407",
        "pageSeq": 41407
    },
    {
        "IDcode": 41408,
        "title": "Wanco - Nekomata Okayu (Hololive)",
        "cover": "https://telegra.ph/file/cf11c0a359094cdfb11a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41408",
        "pageSeq": 41408
    },
    {
        "IDcode": 41409,
        "title": "Lady Melamori - Black Cat (Spider-Man)",
        "cover": "https://telegra.ph/file/425d8b62b1c8b40fe1699.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41409",
        "pageSeq": 41409
    },
    {
        "IDcode": 41410,
        "title": "ZinieQ - Ashley Graham (Resident Evil)",
        "cover": "https://telegra.ph/file/094b9208caa38b6faa369.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41410",
        "pageSeq": 41410
    },
    {
        "IDcode": 41411,
        "title": "Tiny Asa - Anis (Nikke)",
        "cover": "https://telegra.ph/file/cca6fac353ac04c6bf14f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41411",
        "pageSeq": 41411
    },
    {
        "IDcode": 41412,
        "title": "Sayo Momo - Ruan Mei (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/198bc3dea209cabd7b864.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41412",
        "pageSeq": 41412
    },
    {
        "IDcode": 41413,
        "title": "Carry Key & Murrning Glow - Rem & Ram (Re Zero)",
        "cover": "https://telegra.ph/file/23911c04fcfdcdbacd609.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41413",
        "pageSeq": 41413
    },
    {
        "IDcode": 41414,
        "title": "软萌兔兔酱 ruan meng tu tu jiang - Maid Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/2ab92196e2728850004c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41414",
        "pageSeq": 41414
    },
    {
        "IDcode": 41415,
        "title": "Fantasy Factory - School girl",
        "cover": "https://telegra.ph/file/90a3508889964d0f24947.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41415",
        "pageSeq": 41415
    },
    {
        "IDcode": 41416,
        "title": "Nookkiizz - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/de47a3d22e221d6e95741.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41416",
        "pageSeq": 41416
    },
    {
        "IDcode": 41417,
        "title": "Smile Bibison - Yamato (One Pice)",
        "cover": "https://telegra.ph/file/7d15b09e5b0f0576a9e4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41417",
        "pageSeq": 41417
    },
    {
        "IDcode": 41418,
        "title": "Hackee - Bunny Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/91bb6265efd0715012a65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41418",
        "pageSeq": 41418
    },
    {
        "IDcode": 41419,
        "title": "麻花酱 Mahua Jiang - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/f842400729f38e1a058c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41419",
        "pageSeq": 41419
    },
    {
        "IDcode": 41420,
        "title": "Joyce - Bea (Pokemon)",
        "cover": "https://telegra.ph/file/a20a475b3c8526e7b02d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41420",
        "pageSeq": 41420
    },
    {
        "IDcode": 41421,
        "title": "Amaimai - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/dbfc5292cc80d264bb167.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41421",
        "pageSeq": 41421
    },
    {
        "IDcode": 41422,
        "title": "Sayo Momo - Black Swan (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/511a49b18ffc74341db86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41422",
        "pageSeq": 41422
    },
    {
        "IDcode": 41423,
        "title": "Peach Milky - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/1e231b7e8e94ca660084f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41423",
        "pageSeq": 41423
    },
    {
        "IDcode": 41424,
        "title": "Aery Tiefling - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/cc4ab4810a6093320544c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41424",
        "pageSeq": 41424
    },
    {
        "IDcode": 41425,
        "title": "Yummykimmy - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/083483cd107bc2a05bb7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41425",
        "pageSeq": 41425
    },
    {
        "IDcode": 41426,
        "title": "Lada Lyumos - Lisa Lisa (jojo No Kimyou Na Bouken)",
        "cover": "https://telegra.ph/file/27f0176736b6a026bd119.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41426",
        "pageSeq": 41426
    },
    {
        "IDcode": 41427,
        "title": "Xiao Ying - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/b0accac54c07e72be971b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41427",
        "pageSeq": 41427
    },
    {
        "IDcode": 41428,
        "title": "Aery Tiefling - Esdeath (Akame Ga Kill)",
        "cover": "https://telegra.ph/file/c5334176692e797c7c5a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41428",
        "pageSeq": 41428
    },
    {
        "IDcode": 41429,
        "title": "Shika小鹿鹿 - An-94 (Girls Frontline)",
        "cover": "https://telegra.ph/file/34209f7dd870202a8fc0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41429",
        "pageSeq": 41429
    },
    {
        "IDcode": 41430,
        "title": "Sayo Momo - Topaz (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/d0dde1c8a30c4309c3030.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41430",
        "pageSeq": 41430
    },
    {
        "IDcode": 41431,
        "title": "Rocksy Light - Koss",
        "cover": "https://telegra.ph/file/bd9d14a111e84a1c032a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41431",
        "pageSeq": 41431
    },
    {
        "IDcode": 41432,
        "title": "Shui Miao Aqua - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/ba04d7fd447d5e598b2a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41432",
        "pageSeq": 41432
    },
    {
        "IDcode": 41433,
        "title": "Carry Key - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/91a52693d24e62be15c94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41433",
        "pageSeq": 41433
    },
    {
        "IDcode": 41434,
        "title": "Monoki Chan - Kallen (Code Geass)",
        "cover": "https://telegra.ph/file/0b445ec9c970d461c073a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41434",
        "pageSeq": 41434
    },
    {
        "IDcode": 41435,
        "title": "女主K - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/8b14495dcef2d1e257a75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41435",
        "pageSeq": 41435
    },
    {
        "IDcode": 41436,
        "title": "Xidaidai - Sparkle (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/52463a497f0ea7ce6c14c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41436",
        "pageSeq": 41436
    },
    {
        "IDcode": 41437,
        "title": "Hane Ame - Übel (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/fdae4f19b5a0fd59261cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41437",
        "pageSeq": 41437
    },
    {
        "IDcode": 41438,
        "title": "Alina Becker - White",
        "cover": "https://telegra.ph/file/64c0f5161ccb64e857f2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41438",
        "pageSeq": 41438
    },
    {
        "IDcode": 41439,
        "title": "Tenleid - Misty (Pokemon)",
        "cover": "https://telegra.ph/file/cbeb914f1e001668334fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41439",
        "pageSeq": 41439
    },
    {
        "IDcode": 41440,
        "title": "Rioko凉凉子 - 吉他妹妹 Guitar Sister",
        "cover": "https://telegra.ph/file/bab2211e8e2e37bc6ba89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41440",
        "pageSeq": 41440
    },
    {
        "IDcode": 41441,
        "title": "Hane Ame - Lihua (The Apothecary Diaries Consort)",
        "cover": "https://telegra.ph/file/240e0d459c1d83be71529.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41441",
        "pageSeq": 41441
    },
    {
        "IDcode": 41442,
        "title": "Hane Ame - Kashiwazaki Sena (Boku Wa Tomodachi Sakunai)",
        "cover": "https://telegra.ph/file/c6d62a1f6e1790ce00a1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41442",
        "pageSeq": 41442
    },
    {
        "IDcode": 41443,
        "title": "Yummichiyo - Implacable (Azur Lane)",
        "cover": "https://telegra.ph/file/631aa7fbbd0c3d9979c61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41443",
        "pageSeq": 41443
    },
    {
        "IDcode": 41444,
        "title": "Hinata sama - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/dca9e36fbd0c3b67f4236.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41444",
        "pageSeq": 41444
    },
    {
        "IDcode": 41445,
        "title": "Shoujo Eiga 少女映畫 - Megumi Kato (Saenai Heroine)",
        "cover": "https://telegra.ph/file/cbfe65c36a29afd9493fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41445",
        "pageSeq": 41445
    },
    {
        "IDcode": 41446,
        "title": "Umeko J - Queen Marika The Eternal (Elden Ring)",
        "cover": "https://telegra.ph/file/9a7dac03039992b6c7904.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41446",
        "pageSeq": 41446
    },
    {
        "IDcode": 41447,
        "title": "神沢永莉Yongli - 主人喜欢这套吗",
        "cover": "https://telegra.ph/file/d285cf478b9950262c0de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41447",
        "pageSeq": 41447
    },
    {
        "IDcode": 41448,
        "title": "Hidori Rose - Pikachu (Pokemon)",
        "cover": "https://telegra.ph/file/f0426a8f3d0b999352d5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41448",
        "pageSeq": 41448
    },
    {
        "IDcode": 41449,
        "title": "Anna Aifert - Nami Bikini (One Piece)",
        "cover": "https://telegra.ph/file/cede0706b637c6e748606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41449",
        "pageSeq": 41449
    },
    {
        "IDcode": 41450,
        "title": "HaneAme - Original Your Maid",
        "cover": "https://telegra.ph/file/86e2668cd87d2c1a810d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41450",
        "pageSeq": 41450
    },
    {
        "IDcode": 41451,
        "title": "Byoru - Übel (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/834bc201be90a972f89cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41451",
        "pageSeq": 41451
    },
    {
        "IDcode": 41452,
        "title": "Shui Miao Aqua - Tifa Swimsuit ティファ🍹(Final Fantasy)",
        "cover": "https://telegra.ph/file/26f07fe31ca9c9d48186f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41452",
        "pageSeq": 41452
    },
    {
        "IDcode": 41453,
        "title": "Kiji Lump Will-Dusty - Ankha Zone(Animal Crossing)",
        "cover": "https://telegra.ph/file/c92a4e45557a0643a45c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41453",
        "pageSeq": 41453
    },
    {
        "IDcode": 41454,
        "title": "Anna Aifert - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/845004b87636a68502657.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41454",
        "pageSeq": 41454
    },
    {
        "IDcode": 41455,
        "title": "紧急企划 Jinji Qi Hua - Sakura School Uniform",
        "cover": "https://telegra.ph/file/836ca45954d4db758e32b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41455",
        "pageSeq": 41455
    },
    {
        "IDcode": 41456,
        "title": "Byoru - Black Swan (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/790fda90c6efbb49c7904.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41456",
        "pageSeq": 41456
    },
    {
        "IDcode": 41457,
        "title": "Peachuu - St. Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/135f7cfb172110084a99b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41457",
        "pageSeq": 41457
    },
    {
        "IDcode": 41458,
        "title": "Nookkiizz - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/d6d8a8fe999bd7ffd9ab8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41458",
        "pageSeq": 41458
    },
    {
        "IDcode": 41459,
        "title": "Lada Lyumos - Mary Jane Venom (Spider-Man)",
        "cover": "https://telegra.ph/file/98e16fded5f65d1fde1d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41459",
        "pageSeq": 41459
    },
    {
        "IDcode": 41460,
        "title": "ZinieQ - Baltimore Race Queen (Azur Lane)",
        "cover": "https://telegra.ph/file/deb016d9b947433970cb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41460",
        "pageSeq": 41460
    },
    {
        "IDcode": 41462,
        "title": "Messie - Sonico (Supersonico)",
        "cover": "https://telegra.ph/file/b37a24b9efd43825f2884.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41462",
        "pageSeq": 41462
    }
];
