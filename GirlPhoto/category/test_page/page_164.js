// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38406,
        "title": "Valentina Kryp - Akeno (High School DxD)",
        "cover": "https://telegra.ph/file/df479ff2dd3c750a6b7b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38406",
        "pageSeq": 38406
    },
    {
        "IDcode": 38407,
        "title": "Hane Ame - Do-S (One Punch Man)",
        "cover": "https://telegra.ph/file/6c9406a94701cd11b1d4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38407",
        "pageSeq": 38407
    },
    {
        "IDcode": 38408,
        "title": "Hane Ame - Artoria Lancer Aphron (Fate Grand Order)",
        "cover": "https://telegra.ph/file/97e792ae7fb8b838637af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38408",
        "pageSeq": 38408
    },
    {
        "IDcode": 38409,
        "title": "Queenie Chuppy - Kaine (Nier Replicant)",
        "cover": "https://telegra.ph/file/b46cf4ef633645b492cc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38409",
        "pageSeq": 38409
    },
    {
        "IDcode": 38410,
        "title": "Queenie Chuppy - Cerestia (Last Origin)",
        "cover": "https://telegra.ph/file/accfe996e41609d436bed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38410",
        "pageSeq": 38410
    },
    {
        "IDcode": 38411,
        "title": "Hane Ame - Nyotengu Kimono (Dead or Alive)",
        "cover": "https://telegra.ph/file/4d4794b699813b547470b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38411",
        "pageSeq": 38411
    },
    {
        "IDcode": 38412,
        "title": "Hana Bunny - Rias Gremory Lencery (High School DxD)",
        "cover": "https://telegra.ph/file/f248a20e5f68d9e42063c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38412",
        "pageSeq": 38412
    },
    {
        "IDcode": 38413,
        "title": "Mikomin - Hinata Topless (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/5b0fd4c410913f110d7d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38413",
        "pageSeq": 38413
    },
    {
        "IDcode": 38414,
        "title": "Lady Oichi - Tifa Halloween (Final Fantasy)",
        "cover": "https://telegra.ph/file/514c06da793a0d988632d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38414",
        "pageSeq": 38414
    },
    {
        "IDcode": 38416,
        "title": "Chono Black - Mash Kyrielight Halloween (Fate Grand Order)",
        "cover": "https://telegra.ph/file/8191ee44211c6d8794fe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38416",
        "pageSeq": 38416
    },
    {
        "IDcode": 38417,
        "title": "Hidori Rose - Hatsune Miku Halloween (Vocaloid)",
        "cover": "https://telegra.ph/file/6e163bb4b711722f5fd4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38417",
        "pageSeq": 38417
    },
    {
        "IDcode": 38418,
        "title": "Alina Becker - Ankha (Random Cosplay)",
        "cover": "https://telegra.ph/file/96bf6cc13a100c7ba8d09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38418",
        "pageSeq": 38418
    },
    {
        "IDcode": 38419,
        "title": "Momoiru Reku - Swimsuit Halloween (Random Cosplay)",
        "cover": "https://telegra.ph/file/0559a8e4e3e6a91efa93b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38419",
        "pageSeq": 38419
    },
    {
        "IDcode": 38420,
        "title": "Chono Black - Kurumi Tokisaki (Date A Live)",
        "cover": "https://telegra.ph/file/90421a7ffd6b7ef89a2e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38420",
        "pageSeq": 38420
    },
    {
        "IDcode": 38421,
        "title": "Byoru - Misaki Charm Witch (Dead or Alive)",
        "cover": "https://telegra.ph/file/4eaac863a601ee79c910e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38421",
        "pageSeq": 38421
    },
    {
        "IDcode": 38422,
        "title": "Byoru - Maidmask (High Rise Invasion)",
        "cover": "https://telegra.ph/file/17ec4987f49b183e0ddd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38422",
        "pageSeq": 38422
    },
    {
        "IDcode": 38423,
        "title": "Hana Bunny - Ankha Zone (Animal Crossing)",
        "cover": "https://telegra.ph/file/d14ec83fc8ec418662d17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38423",
        "pageSeq": 38423
    },
    {
        "IDcode": 38424,
        "title": "Queenie Chuppy - Hatsune Miku Lingerie (Vocaloid)",
        "cover": "https://telegra.ph/file/f6924eb5bc5e51aaca396.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38424",
        "pageSeq": 38424
    },
    {
        "IDcode": 38425,
        "title": "Byoru - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/b9415ad0e4f1cd238f36b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38425",
        "pageSeq": 38425
    },
    {
        "IDcode": 38426,
        "title": "Hane Ame - Artoria Lancer Lencery (Fate Grand Order)",
        "cover": "https://telegra.ph/file/aa470364a62b6352dd260.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38426",
        "pageSeq": 38426
    },
    {
        "IDcode": 38427,
        "title": "Hana Bunny - Power Lencery (Chain Saw Man)",
        "cover": "https://telegra.ph/file/eddaef27ef0de557310c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38427",
        "pageSeq": 38427
    },
    {
        "IDcode": 38428,
        "title": "Hana Bunny - Iruru (Kobayashi San)",
        "cover": "https://telegra.ph/file/b7f58f6c3efd6f8ddfe78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38428",
        "pageSeq": 38428
    },
    {
        "IDcode": 38429,
        "title": "Hana Bunny - Nico Robin (One Piece)",
        "cover": "https://telegra.ph/file/1748225eca2e7844b2e0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38429",
        "pageSeq": 38429
    },
    {
        "IDcode": 38430,
        "title": "Queenie Chuppy - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/9eb2d7cde417d80112c6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38430",
        "pageSeq": 38430
    },
    {
        "IDcode": 38431,
        "title": "Mikomi Hokina - Azyt Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/d5ae9af341cbdc191b670.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38431",
        "pageSeq": 38431
    },
    {
        "IDcode": 38432,
        "title": "Mikomi Hokina & Waifufox - Rias & Akeno Swimsuit (High School DxD)",
        "cover": "https://telegra.ph/file/b2e48e13d2464e43df8ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38432",
        "pageSeq": 38432
    },
    {
        "IDcode": 38433,
        "title": "KuukoW - Slingkini (Model)",
        "cover": "https://telegra.ph/file/2d70c522546d64522947f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38433",
        "pageSeq": 38433
    },
    {
        "IDcode": 38434,
        "title": "Hane Ame - Pink Nurse Alter (Random Cosplay)",
        "cover": "https://telegra.ph/file/54f6b8e4efd8b4af4b560.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38434",
        "pageSeq": 38434
    },
    {
        "IDcode": 38435,
        "title": "HaneAme - Elf Villa (Random Cosplay)",
        "cover": "https://telegra.ph/file/88569e4d625429f741f97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38435",
        "pageSeq": 38435
    },
    {
        "IDcode": 38436,
        "title": "Hane Ame - Swimsuit (Model)",
        "cover": "https://telegra.ph/file/cbe7794748b26eb2b11ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38436",
        "pageSeq": 38436
    },
    {
        "IDcode": 38437,
        "title": "Valentina Kryp - Nurse Akali (League Of Legends)",
        "cover": "https://telegra.ph/file/169043ae34584e75dba14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38437",
        "pageSeq": 38437
    },
    {
        "IDcode": 38438,
        "title": "Sally Dorasnow - Hu Tao (Genshin Impact)",
        "cover": "https://telegra.ph/file/7563cfa5e21c1fe8709eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38438",
        "pageSeq": 38438
    },
    {
        "IDcode": 38439,
        "title": "Hana Bunny - Makima Lingerie (Chain Saw Man)",
        "cover": "https://telegra.ph/file/8c857af40e2d903373c98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38439",
        "pageSeq": 38439
    },
    {
        "IDcode": 38440,
        "title": "Hana Bunny - Raiden Shogun (Genshin Impact))",
        "cover": "https://telegra.ph/file/1a2a09eacdd1a55c64114.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38440",
        "pageSeq": 38440
    },
    {
        "IDcode": 38441,
        "title": "Yoshinobi - Cat Illulu (Kobayashi-San)",
        "cover": "https://telegra.ph/file/e21785edcc36574ac95cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38441",
        "pageSeq": 38441
    },
    {
        "IDcode": 38442,
        "title": "Yoshinobi - Cat Illulu (Kobayashi-San)",
        "cover": "https://telegra.ph/file/cafe7f0b71d5259c5ee6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38442",
        "pageSeq": 38442
    },
    {
        "IDcode": 38443,
        "title": "Lada Lyumos - Ankha Zone (Animal Crossing)",
        "cover": "https://telegra.ph/file/cb9593ca3a3754bdfe8a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38443",
        "pageSeq": 38443
    },
    {
        "IDcode": 38444,
        "title": "Azami - Rias Gremory (High School DxD)",
        "cover": "https://telegra.ph/file/9ab226342a5c5bd086819.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38444",
        "pageSeq": 38444
    },
    {
        "IDcode": 38445,
        "title": "Potato Godzilla - Jean (Genshin Impact)",
        "cover": "https://telegra.ph/file/140bf3f6d7f9002bbadf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38445",
        "pageSeq": 38445
    },
    {
        "IDcode": 38446,
        "title": "Azami - Ganyu Swimsuit (Genshin Impact)",
        "cover": "https://telegra.ph/file/1e44d53383af83b99f994.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38446",
        "pageSeq": 38446
    },
    {
        "IDcode": 38447,
        "title": "Ana Chu - Rem Lencery (Re: Zero)",
        "cover": "https://telegra.ph/file/5d94f89ee25b23b287be3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38447",
        "pageSeq": 38447
    },
    {
        "IDcode": 38448,
        "title": "Hidori Rose & Gumiho Arts selfies - Chocola x Vanilla swimsuit (Nekopara Collab)",
        "cover": "https://telegra.ph/file/a551da18b43e821d96936.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38448",
        "pageSeq": 38448
    },
    {
        "IDcode": 38449,
        "title": "Hidori Rose - Kashino (Azur Lane)",
        "cover": "https://telegra.ph/file/1e23d122c17762594b9e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38449",
        "pageSeq": 38449
    },
    {
        "IDcode": 38450,
        "title": "Hana Bunny - Cow Girl Swimsuit (Random Cosplay)",
        "cover": "https://telegra.ph/file/5a302c7afa08c12c1b5de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38450",
        "pageSeq": 38450
    },
    {
        "IDcode": 38451,
        "title": "KuukoW - Yang GuiFei (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1817e1b644cdfc9de8215.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38451",
        "pageSeq": 38451
    },
    {
        "IDcode": 38452,
        "title": "Queenie Chuppy Rin Tohsaka (Fate stay night)",
        "cover": "https://telegra.ph/file/1d2d5ba8b182cecd867e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38452",
        "pageSeq": 38452
    },
    {
        "IDcode": 38453,
        "title": "一北亦北 - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/242ad5b744a6b931ef42a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38453",
        "pageSeq": 38453
    },
    {
        "IDcode": 38454,
        "title": "Shiro Kitsune - Nobara Kujisaki (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/9c55b9ef6e6988531c3d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38454",
        "pageSeq": 38454
    },
    {
        "IDcode": 38455,
        "title": "Azami - Guitar Sister (Random Cosplay)",
        "cover": "https://telegra.ph/file/a605ea69927c9cf3a3d4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38455",
        "pageSeq": 38455
    },
    {
        "IDcode": 38456,
        "title": "白烨 - Tamamo/Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/fbd368929f222668096fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38456",
        "pageSeq": 38456
    },
    {
        "IDcode": 38457,
        "title": "星之迟迟 - Jeanne D'Arc Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/6bbe96766105bed464ab3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38457",
        "pageSeq": 38457
    },
    {
        "IDcode": 38458,
        "title": "KuukoW - Gray (Fate Grand Order)",
        "cover": "https://telegra.ph/file/deccba6022b36f0cdd7ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38458",
        "pageSeq": 38458
    },
    {
        "IDcode": 38459,
        "title": "Chie, Tenka & komako (Shoujo Romune)",
        "cover": "https://telegra.ph/file/9bcd2d0ae198e5ddbd9a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38459",
        "pageSeq": 38459
    },
    {
        "IDcode": 38460,
        "title": "Hane Ame - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/26e721efc84d91f519f05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38460",
        "pageSeq": 38460
    },
    {
        "IDcode": 38461,
        "title": "KuukoW - Silent (Random Cosplay)",
        "cover": "https://telegra.ph/file/a2a3e9ae4b247b84e117a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38461",
        "pageSeq": 38461
    },
    {
        "IDcode": 38462,
        "title": "Nikumikyo - Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/a04ef2ce48ef6e77f75f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38462",
        "pageSeq": 38462
    },
    {
        "IDcode": 38463,
        "title": "BishoujoMom - Mavis Drácula (Hotel Transylvania)",
        "cover": "https://telegra.ph/file/b29a41e3ae8bc9ced1d93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38463",
        "pageSeq": 38463
    },
    {
        "IDcode": 38464,
        "title": "Agos Ashford - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/737cd4105ddc8f5bd4360.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38464",
        "pageSeq": 38464
    },
    {
        "IDcode": 38465,
        "title": "KaYa Huang - Blue Swimsuit/Lingerie (Random Cosplay)",
        "cover": "https://telegra.ph/file/0f80f3ec7f5e18a5f0e38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38465",
        "pageSeq": 38465
    },
    {
        "IDcode": 38466,
        "title": "Meggi Kohai - Aqua/Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/7cb281cfe5aec2f351182.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38466",
        "pageSeq": 38466
    },
    {
        "IDcode": 38467,
        "title": "Hane Ame - Mamako Oosuki (Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki Desu ka)",
        "cover": "https://telegra.ph/file/c861db73b5bc916283173.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38467",
        "pageSeq": 38467
    },
    {
        "IDcode": 38468,
        "title": "Hana Bunny - Mahito (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/ee869bda77b8a59f33b56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38468",
        "pageSeq": 38468
    },
    {
        "IDcode": 38469,
        "title": "Hana Bunny - Tringle (Squid Game)",
        "cover": "https://telegra.ph/file/e58e785685f146d894870.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38469",
        "pageSeq": 38469
    },
    {
        "IDcode": 38470,
        "title": "NinJa - Seitokai (Random Cosplay)",
        "cover": "https://telegra.ph/file/760be05c96bad74db0271.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38470",
        "pageSeq": 38470
    },
    {
        "IDcode": 38471,
        "title": "Hackee - Sakura Futaba (Shin Megami Tensei V)",
        "cover": "https://telegra.ph/file/59e950278303cff31a5f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38471",
        "pageSeq": 38471
    },
    {
        "IDcode": 38472,
        "title": "Okicospi - Mai Shiranui/Cow (The King Of Fighters)",
        "cover": "https://telegra.ph/file/76f63ddc9c74f9612007c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38472",
        "pageSeq": 38472
    },
    {
        "IDcode": 38473,
        "title": "Sarah Carvalho - Nurse Makima (Chain Saw Man)",
        "cover": "https://telegra.ph/file/50cdd93c0e8bad349d6b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38473",
        "pageSeq": 38473
    },
    {
        "IDcode": 38474,
        "title": "Hidori Rose - Macaron (Super Sonico)",
        "cover": "https://telegra.ph/file/6d0265bed75d6f3a8ae0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38474",
        "pageSeq": 38474
    },
    {
        "IDcode": 38475,
        "title": "Hane Ame - Mamako Oosuki/ Aphron/Swimsuit (Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki Desu ka)",
        "cover": "https://telegra.ph/file/9f54f5608926be31770fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38475",
        "pageSeq": 38475
    },
    {
        "IDcode": 38476,
        "title": "Hane Ame - Modeus (Random Cosplay)",
        "cover": "https://telegra.ph/file/18671a6705fc4aa3c4e08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38476",
        "pageSeq": 38476
    },
    {
        "IDcode": 38477,
        "title": "白烨 - 女王の調教官",
        "cover": "https://telegra.ph/file/a9bcab846cc1ef1a6c534.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38477",
        "pageSeq": 38477
    },
    {
        "IDcode": 38478,
        "title": "Sweetie Fox - Squid Game",
        "cover": "https://telegra.ph/file/038eda273b906bc1d0048.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38478",
        "pageSeq": 38478
    },
    {
        "IDcode": 38479,
        "title": "Hackee - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/e40ff1610e4449449e6b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38479",
        "pageSeq": 38479
    },
    {
        "IDcode": 38480,
        "title": "Hana Bunny - Bayonetta (Bayonetta Game)",
        "cover": "https://telegra.ph/file/760afb649f89985b9b4f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38480",
        "pageSeq": 38480
    },
    {
        "IDcode": 38482,
        "title": "Shui Miao Aqua - Tohru (Kobayashi-san)",
        "cover": "https://telegra.ph/file/bc680e991cedda4bf1444.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38482",
        "pageSeq": 38482
    },
    {
        "IDcode": 38483,
        "title": "Azami - Kunoichi (Random Cosplay)",
        "cover": "https://telegra.ph/file/d032f914854eb957ac5ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38483",
        "pageSeq": 38483
    },
    {
        "IDcode": 38484,
        "title": "Azami - Ahegao Swimsuit (Random Cosplay)",
        "cover": "https://telegra.ph/file/3ea4e8810e4e595513880.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38484",
        "pageSeq": 38484
    },
    {
        "IDcode": 38485,
        "title": "芊川一笑MNK - Confessions of a Sinful Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/77e669fc27aa759ff45ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38485",
        "pageSeq": 38485
    },
    {
        "IDcode": 38486,
        "title": "MissWarmJ - Hana Midorikawa (Prison School)",
        "cover": "https://telegra.ph/file/3433a0120d71c294f1865.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38486",
        "pageSeq": 38486
    },
    {
        "IDcode": 38487,
        "title": "momo520xoxo - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/b47b0b973fc0c6eda036b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38487",
        "pageSeq": 38487
    },
    {
        "IDcode": 38488,
        "title": "Megumi Koneko - Scathach Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/83c917655d111cc6efe54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38488",
        "pageSeq": 38488
    },
    {
        "IDcode": 38489,
        "title": "Bambi - Riamu Yumei Lingerie (Idolmaster)",
        "cover": "https://telegra.ph/file/082955a35219afef907b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38489",
        "pageSeq": 38489
    },
    {
        "IDcode": 38490,
        "title": "天使みゅ。、lenfried - Twin Closet (Random Cosplay)",
        "cover": "https://telegra.ph/file/dc179a6f1c2461ee15373.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38490",
        "pageSeq": 38490
    },
    {
        "IDcode": 38491,
        "title": "Shiro Kitsune - Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/289c08e01df82ff48615a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38491",
        "pageSeq": 38491
    },
    {
        "IDcode": 38492,
        "title": "Katyuska MoonFox - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/e1dba48675448f0a2a2ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38492",
        "pageSeq": 38492
    },
    {
        "IDcode": 38493,
        "title": "Vinnegal - Asuka Casual (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/00c00d1bafda414640e27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38493",
        "pageSeq": 38493
    },
    {
        "IDcode": 38494,
        "title": "毛毛喵momocat - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/68cfb6d3659787fe60076.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38494",
        "pageSeq": 38494
    },
    {
        "IDcode": 38495,
        "title": "Glossy Rabbit - Sucrose (Genshin Impact)",
        "cover": "https://telegra.ph/file/88473c08a0810f6320cf6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38495",
        "pageSeq": 38495
    },
    {
        "IDcode": 38496,
        "title": "Shiro Kitsune - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/98390f31b42ed4ad94b12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38496",
        "pageSeq": 38496
    },
    {
        "IDcode": 38497,
        "title": "Ronnie Riot - Camie (Boku no Hero)",
        "cover": "https://telegra.ph/file/74201a244c4a4c50b1b6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38497",
        "pageSeq": 38497
    },
    {
        "IDcode": 38498,
        "title": "Kalinka Fox - SpiderGwen (Spiderman)",
        "cover": "https://telegra.ph/file/1b8ba2d413566cb818761.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38498",
        "pageSeq": 38498
    },
    {
        "IDcode": 38499,
        "title": "KuukoW - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/5a3948e09f39ae6c326b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38499",
        "pageSeq": 38499
    },
    {
        "IDcode": 38500,
        "title": "UyUy - Amelia Watson (Hololive)",
        "cover": "https://telegra.ph/file/8e0fcc2610fac74b35a82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38500",
        "pageSeq": 38500
    },
    {
        "IDcode": 38501,
        "title": "Mohuyume - Musashi Miyamoto (Fate Grand Order)",
        "cover": "https://telegra.ph/file/0c044b2cbdbee0bf0aa3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38501",
        "pageSeq": 38501
    },
    {
        "IDcode": 38502,
        "title": "Potato Godzilla - Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/199a3b0ddc6aebc463eb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38502",
        "pageSeq": 38502
    },
    {
        "IDcode": 38503,
        "title": "Cheooooongsam - White (Model)",
        "cover": "https://telegra.ph/file/22ed93138eb4916bbe698.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38503",
        "pageSeq": 38503
    },
    {
        "IDcode": 38504,
        "title": "Cheooooongsam - Red  (Model)",
        "cover": "https://telegra.ph/file/0422671bd675b983490f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38504",
        "pageSeq": 38504
    },
    {
        "IDcode": 38505,
        "title": "UyUy - Tifa Bunny Reverse (Final Fantasy)",
        "cover": "https://telegra.ph/file/490081c7b019b10f6de03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38505",
        "pageSeq": 38505
    },
    {
        "IDcode": 38506,
        "title": "Azami - Tifa Bunny Reverse (Final Fantasy)",
        "cover": "https://telegra.ph/file/ed18e84e138ff6412219e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38506",
        "pageSeq": 38506
    },
    {
        "IDcode": 38507,
        "title": "Azami - Nero Claudius (Fate Extra Last Encore/Fate Grand Order)",
        "cover": "https://telegra.ph/file/7ac1363b67b04af732682.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38507",
        "pageSeq": 38507
    }
];
