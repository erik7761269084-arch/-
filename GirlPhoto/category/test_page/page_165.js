// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38508,
        "title": "Byoru - Bunny Maid Reverse (Random Cosplay)",
        "cover": "https://telegra.ph/file/b12b0aa466755a3b427f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38508",
        "pageSeq": 38508
    },
    {
        "IDcode": 38509,
        "title": "Wang Yu Chun - ArtGravia Vol.292 Lingerie (Model)",
        "cover": "https://telegra.ph/file/2e0cdd636f7086029463e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38509",
        "pageSeq": 38509
    },
    {
        "IDcode": 38510,
        "title": "Wang Yu Chun - YouMi Vol.696 (Model)",
        "cover": "https://telegra.ph/file/bcea000b78cd2ff910784.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38510",
        "pageSeq": 38510
    },
    {
        "IDcode": 38511,
        "title": "Kalinka Fox - DO-S (One Punch Man)",
        "cover": "https://telegra.ph/file/9fafa7cfba17a07665746.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38511",
        "pageSeq": 38511
    },
    {
        "IDcode": 38512,
        "title": "Ptilopsis - 星野秀奈 / Xuxu (秀秀) / Ifrit - 紫玥桃-Sakuramomo / Saria - 公主病三三-Sum sum Princess / Mayer - 卡比兔 (傅唯甯) / Magallan - 小律 Ritsu / Muelsyse - FREYA ▷太妃麥芽糖 / Silence - BOSS cosplayer (Arknights)",
        "cover": "https://telegra.ph/file/38dd9fcb8a6cd01f70025.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38512",
        "pageSeq": 38512
    },
    {
        "IDcode": 38513,
        "title": "Hane Ame - Butt Dress/Guitar Sister (Random Cosplay)",
        "cover": "https://telegra.ph/file/0d73e5869626258b27c06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38513",
        "pageSeq": 38513
    },
    {
        "IDcode": 38514,
        "title": "Mimmi밈미 - Witch(Random Cosplay)",
        "cover": "https://telegra.ph/file/31eea938460f5c02aa5ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38514",
        "pageSeq": 38514
    },
    {
        "IDcode": 38515,
        "title": "Evenink - Junko (Dangaronpa)",
        "cover": "https://telegra.ph/file/10b9a1d00cca32c69be3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38515",
        "pageSeq": 38515
    },
    {
        "IDcode": 38516,
        "title": "Lady Melamori - Brigitte (Overwatch)",
        "cover": "https://telegra.ph/file/b713afc715503152bc488.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38516",
        "pageSeq": 38516
    },
    {
        "IDcode": 38517,
        "title": "Yoshinobi Chan - Pumpkin Lingerie (Ramdo Cosplay)",
        "cover": "https://telegra.ph/file/016a2c8e2d9ff7168fcd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38517",
        "pageSeq": 38517
    },
    {
        "IDcode": 38518,
        "title": "Hane Ame - Karin Bunny (Blue Archive)",
        "cover": "https://telegra.ph/file/ff218af6ada1c04be7f5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38518",
        "pageSeq": 38518
    },
    {
        "IDcode": 38519,
        "title": "Hane Ame - Birthday (Model)",
        "cover": "https://telegra.ph/file/a0ac7a94466e8d2ee33c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38519",
        "pageSeq": 38519
    },
    {
        "IDcode": 38520,
        "title": "Caticorplay - Fischl (Genshin Impact)",
        "cover": "https://telegra.ph/file/7fe00f043eb5ebb56a0fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38520",
        "pageSeq": 38520
    },
    {
        "IDcode": 38521,
        "title": "Serinide - Tejina (Tejina-Sempai)",
        "cover": "https://telegra.ph/file/103e1979a3769018af9bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38521",
        "pageSeq": 38521
    },
    {
        "IDcode": 38522,
        "title": "Lovely Speace Kitten - Mari Setogaya (Itadaki Seieki)",
        "cover": "https://telegra.ph/file/ad7aefd02ff7a2bca9cac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38522",
        "pageSeq": 38522
    },
    {
        "IDcode": 38523,
        "title": "Hane Ame - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/6f6ea614690da4dafea1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38523",
        "pageSeq": 38523
    },
    {
        "IDcode": 38524,
        "title": "Yorkie - Maid Bathroom (Random-Cosplay)",
        "cover": "https://telegra.ph/file/6b90f146d2c5d0420a007.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38524",
        "pageSeq": 38524
    },
    {
        "IDcode": 38526,
        "title": "Lady Melamori - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/5b2e8b07808739214701e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38526",
        "pageSeq": 38526
    },
    {
        "IDcode": 38527,
        "title": "Lovely Speace Kitten - C.C. Neko (Code Geass)",
        "cover": "https://telegra.ph/file/f711a5d18a11f0c8d6491.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38527",
        "pageSeq": 38527
    },
    {
        "IDcode": 38528,
        "title": "MissWarmJ - Bowsette (Mario Bros)",
        "cover": "https://telegra.ph/file/29afa8c3f0c9e4bf54223.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38528",
        "pageSeq": 38528
    },
    {
        "IDcode": 38529,
        "title": "Yoshinobi - Satania (Gabriel Dropout)",
        "cover": "https://telegra.ph/file/ecfbb6c0e3a75f129c889.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38529",
        "pageSeq": 38529
    },
    {
        "IDcode": 38530,
        "title": "Fe Galvāo - Mavis (Hotel Transylvania)",
        "cover": "https://telegra.ph/file/fb03b01c4c47ac10e2c6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38530",
        "pageSeq": 38530
    },
    {
        "IDcode": 38531,
        "title": "Ronnie Riot - PS5-Chan (Random Cosplay)",
        "cover": "https://telegra.ph/file/036e56cfe71e1ac579336.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38531",
        "pageSeq": 38531
    },
    {
        "IDcode": 38532,
        "title": "Keri - Shine Mirage (Hengen Souki Shine Mirage)",
        "cover": "https://telegra.ph/file/4c48ae75f475423b70fec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38532",
        "pageSeq": 38532
    },
    {
        "IDcode": 38533,
        "title": "麵Mian - Okita Souji Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ba87f607585f904d97667.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38533",
        "pageSeq": 38533
    },
    {
        "IDcode": 38534,
        "title": "Potato Godzilla - Bowsette (Mario Bros)",
        "cover": "https://telegra.ph/file/62a5755810d4d70fce840.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38534",
        "pageSeq": 38534
    },
    {
        "IDcode": 38535,
        "title": "Meggii - Mitsuri Kanroji (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/9daf25b439bc40d32eca2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38535",
        "pageSeq": 38535
    },
    {
        "IDcode": 38536,
        "title": "Plant Lily - Power Nurse (Chain Saw Man)",
        "cover": "https://telegra.ph/file/cc07dca9024d14d38d1bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38536",
        "pageSeq": 38536
    },
    {
        "IDcode": 38537,
        "title": "Helly Valentine - Modeus (Random Cosplay)",
        "cover": "https://telegra.ph/file/f3dcc9e69a3779377866d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38537",
        "pageSeq": 38537
    },
    {
        "IDcode": 38538,
        "title": "Hana Bunny - Rias Swimsuit Christmas (High School DxD)",
        "cover": "https://telegra.ph/file/b1e03d7a006f89da77b18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38538",
        "pageSeq": 38538
    },
    {
        "IDcode": 38539,
        "title": "Vinnegal - Faye Valentine (Cowboy Bepop)",
        "cover": "https://telegra.ph/file/a02254e1deb50b7e300e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38539",
        "pageSeq": 38539
    },
    {
        "IDcode": 38540,
        "title": "Lady Melamori - Ahri Spirit Blossom (League Of Legends)",
        "cover": "https://telegra.ph/file/4e95fc83bcf873e353f19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38540",
        "pageSeq": 38540
    },
    {
        "IDcode": 38541,
        "title": "Ely - Tomoe Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/939e36eb474f046ff4f69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38541",
        "pageSeq": 38541
    },
    {
        "IDcode": 38542,
        "title": "Lyvlas - Mavis (Hotel Transylvania)",
        "cover": "https://telegra.ph/file/6dce03b86e4077d5a9769.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38542",
        "pageSeq": 38542
    },
    {
        "IDcode": 38543,
        "title": "Niku-Dokiki - Model Nonude",
        "cover": "https://telegra.ph/file/6a35cc02eae6fc819d5a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38543",
        "pageSeq": 38543
    },
    {
        "IDcode": 38544,
        "title": "Vinnegal - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/2f42a4fb777c4d9c63959.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38544",
        "pageSeq": 38544
    },
    {
        "IDcode": 38545,
        "title": "Shiro Kitsune - White Bunny (Rando Cosplay)",
        "cover": "https://telegra.ph/file/04c2165b4aad8cc27e8d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38545",
        "pageSeq": 38545
    },
    {
        "IDcode": 38546,
        "title": "Bloodalice - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/5e345fa4ba3c0353a001d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38546",
        "pageSeq": 38546
    },
    {
        "IDcode": 38547,
        "title": "Hane Ame - Ishtar (Fate Grand Order)",
        "cover": "https://telegra.ph/file/7b3ff5310d391728a6d41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38547",
        "pageSeq": 38547
    },
    {
        "IDcode": 38548,
        "title": "KaYa - Sam/Samsun-Chan (Random Cosplay)",
        "cover": "https://telegra.ph/file/33d16382046f20067fa04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38548",
        "pageSeq": 38548
    },
    {
        "IDcode": 38549,
        "title": "Vinnegal - Reze (Chain Saw Man)",
        "cover": "https://telegra.ph/file/fb5fc28de04ee394ec41f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38549",
        "pageSeq": 38549
    },
    {
        "IDcode": 38550,
        "title": "Hane Ame - Tifa Queenbee (Final Fantasy)",
        "cover": "https://telegra.ph/file/53339950259e8f93bbe7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38550",
        "pageSeq": 38550
    },
    {
        "IDcode": 38551,
        "title": "Hane Ame - Surcouf (Azur Lane)",
        "cover": "https://telegra.ph/file/d141ff53e367a7f9b4929.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38551",
        "pageSeq": 38551
    },
    {
        "IDcode": 38552,
        "title": "Alina Becker - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/52078568fde82bd70e393.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38552",
        "pageSeq": 38552
    },
    {
        "IDcode": 38553,
        "title": "Vinnegal - Pieck Finger (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/142784319ddd72714cbf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38553",
        "pageSeq": 38553
    },
    {
        "IDcode": 38554,
        "title": "Mikomi Hokina & Gumiho Arts - Ishtsar & Ereshkigal (Fate Grand Order)",
        "cover": "https://telegra.ph/file/4c43c0b656b355bb6d517.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38554",
        "pageSeq": 38554
    },
    {
        "IDcode": 38555,
        "title": "KittyxKum - Kanao Tsuyuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/631a2de72a08179a4d9a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38555",
        "pageSeq": 38555
    },
    {
        "IDcode": 38556,
        "title": "Nath Sokolova - Asuka (Neon Génesis Evangelion)",
        "cover": "https://telegra.ph/file/089a7c5cb293476fd84f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38556",
        "pageSeq": 38556
    },
    {
        "IDcode": 38557,
        "title": "Hane Ame - Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/54e6a78cd0d3826e3ae79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38557",
        "pageSeq": 38557
    },
    {
        "IDcode": 38558,
        "title": "Angel chan/Wlepwlop - Sayu (Hige Wo Soru)",
        "cover": "https://telegra.ph/file/a0d6f2d8b17fd4f79deba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38558",
        "pageSeq": 38558
    },
    {
        "IDcode": 38559,
        "title": "Peach Milky - Princess Zelda Gym (Breath of the Wild)",
        "cover": "https://telegra.ph/file/8c74c2ed4bc2afe631532.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38559",
        "pageSeq": 38559
    },
    {
        "IDcode": 38560,
        "title": "Saku - Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/a5398114d5336abc5a7e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38560",
        "pageSeq": 38560
    },
    {
        "IDcode": 38561,
        "title": "Glossy Rabbit - Hutao (Genshin Impact)",
        "cover": "https://telegra.ph/file/d2f26d698eddc89b7e18e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38561",
        "pageSeq": 38561
    },
    {
        "IDcode": 38562,
        "title": "Sunny Vier - Houshou Marine (Hololive/Vtuber)",
        "cover": "https://telegra.ph/file/439ee9248ece4df9f9d13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38562",
        "pageSeq": 38562
    },
    {
        "IDcode": 38563,
        "title": "Vinnegal - Satsuki (Kill La Kill)",
        "cover": "https://telegra.ph/file/5416aac3b6fc8758acc4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38563",
        "pageSeq": 38563
    },
    {
        "IDcode": 38564,
        "title": "Joyce lin2x - Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/21747774ba8c1021ef565.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38564",
        "pageSeq": 38564
    },
    {
        "IDcode": 38565,
        "title": "Hane Ame - Atago Race Queen (Azur Lane)",
        "cover": "https://telegra.ph/file/d2ac0a6a2ff46f6b3a387.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38565",
        "pageSeq": 38565
    },
    {
        "IDcode": 38566,
        "title": "Hane Ame - Atago Bunny (Azur Lane)",
        "cover": "https://telegra.ph/file/fcce87a7786b29421051c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38566",
        "pageSeq": 38566
    },
    {
        "IDcode": 38567,
        "title": "Shui Miao Aqua - Neko Latex (Random Cosplay)",
        "cover": "https://telegra.ph/file/221c0649b8022fa699ee2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38567",
        "pageSeq": 38567
    },
    {
        "IDcode": 38568,
        "title": "Vinnegal - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/a0c0070ac144bb1dd2baa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38568",
        "pageSeq": 38568
    },
    {
        "IDcode": 38569,
        "title": "Vinnegal - Katsuragi Misato (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/c6cf3d28ffdc3f9043790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38569",
        "pageSeq": 38569
    },
    {
        "IDcode": 38570,
        "title": "Sayako - Unicorn (Azur Lane)",
        "cover": "https://telegra.ph/file/4736fbb51ee4a1b77b7d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38570",
        "pageSeq": 38570
    },
    {
        "IDcode": 38571,
        "title": "Sayako - Hutao (Genshin Impact)",
        "cover": "https://telegra.ph/file/740e20cfc92290034c07a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38571",
        "pageSeq": 38571
    },
    {
        "IDcode": 38572,
        "title": "Nora Fawn - Astolfo (Fate Grand Order)",
        "cover": "https://telegra.ph/file/557526287553d7aced9f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38572",
        "pageSeq": 38572
    },
    {
        "IDcode": 38573,
        "title": "Alina Latipova - Bunny Girl (Random Cosplay)",
        "cover": "https://telegra.ph/file/ff5f8ae33133f9a908d05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38573",
        "pageSeq": 38573
    },
    {
        "IDcode": 38574,
        "title": "UyUy - Ukulelesister/GuitarSister (Random Cosplay)",
        "cover": "https://telegra.ph/file/27c25713774a58f2faf40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38574",
        "pageSeq": 38574
    },
    {
        "IDcode": 38575,
        "title": "Carry Key - Princess Zelda Gym (Breath of the Wild)",
        "cover": "https://telegra.ph/file/cc24fc8946c285dade5ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38575",
        "pageSeq": 38575
    },
    {
        "IDcode": 38576,
        "title": "Ringo Mitsuri - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/084f20ef1831985d1bba2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38576",
        "pageSeq": 38576
    },
    {
        "IDcode": 38577,
        "title": "Kyaandere - Chizuru Ichinose (Kanojo Okarishimasu)",
        "cover": "https://telegra.ph/file/62ec589b46a91be1bc5f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38577",
        "pageSeq": 38577
    },
    {
        "IDcode": 38578,
        "title": "Mofy Milk - Sumi Sakurasawa (Kanojo Okarishimasu)",
        "cover": "https://telegra.ph/file/c4f074e7ec4d0d844ffcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38578",
        "pageSeq": 38578
    },
    {
        "IDcode": 38579,
        "title": "Sally Dorasnow - Nanami Mami (Kanojo Okarishimasu)",
        "cover": "https://telegra.ph/file/5ec5b6ed85e47c2a4d9e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38579",
        "pageSeq": 38579
    },
    {
        "IDcode": 38580,
        "title": "皮皮奶 - Boudica (Fate Grand Order)",
        "cover": "https://telegra.ph/file/e9a32e0facf4083d17b89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38580",
        "pageSeq": 38580
    },
    {
        "IDcode": 38581,
        "title": "KaYa Huang - Neko/Cat Student (Random Cosplay)",
        "cover": "https://telegra.ph/file/76cc94d534d4d02388607.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38581",
        "pageSeq": 38581
    },
    {
        "IDcode": 38582,
        "title": "Helly Valentine - Golden",
        "cover": "https://telegra.ph/file/59bbb4d1ab6c8db4f4687.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38582",
        "pageSeq": 38582
    },
    {
        "IDcode": 38583,
        "title": "Fantasy Factory - Dido (Random Cosplay)",
        "cover": "https://telegra.ph/file/0df3df5e05577201a5d09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38583",
        "pageSeq": 38583
    },
    {
        "IDcode": 38584,
        "title": "Ronnie Riot - Camie (Boku no Hero)",
        "cover": "https://telegra.ph/file/80fb1944e63c88604617a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38584",
        "pageSeq": 38584
    },
    {
        "IDcode": 38585,
        "title": "Yoshinobi - Sonico Bath (Super Sonico)",
        "cover": "https://telegra.ph/file/05081b0b60ef5de3caec2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38585",
        "pageSeq": 38585
    },
    {
        "IDcode": 38586,
        "title": "Potato Godzilla - Mash Bunny Christmas (Fate Grand Order)",
        "cover": "https://telegra.ph/file/447fb1b33bb7ec3552087.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38586",
        "pageSeq": 38586
    },
    {
        "IDcode": 38587,
        "title": "習呆呆 - Yao (king of Glory)",
        "cover": "https://telegra.ph/file/dd5cef2b8f9893d0203cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38587",
        "pageSeq": 38587
    },
    {
        "IDcode": 38588,
        "title": "Helly Valentine - Harley Quinn (Barman)",
        "cover": "https://telegra.ph/file/69a998685cfc4e24a9dca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38588",
        "pageSeq": 38588
    },
    {
        "IDcode": 38589,
        "title": "Kalinka Fox - Hellen Ripley (Alien)",
        "cover": "https://telegra.ph/file/78b4dd501c980b2695082.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38589",
        "pageSeq": 38589
    },
    {
        "IDcode": 38590,
        "title": "Hokunaimeko - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/08781ab65a2c14fc28310.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38590",
        "pageSeq": 38590
    },
    {
        "IDcode": 38591,
        "title": "Byoru - Seitokai/ Discipline chan (Random Cosplay)",
        "cover": "https://telegra.ph/file/39974bd0b17bf65fe52c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38591",
        "pageSeq": 38591
    },
    {
        "IDcode": 38592,
        "title": "TI - Reika (Gantz)",
        "cover": "https://telegra.ph/file/cb8a4a2ed61fb36b72c1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38592",
        "pageSeq": 38592
    },
    {
        "IDcode": 38593,
        "title": "Helly Valentine - Ahri Spirit Blossom (League Of Legends)",
        "cover": "https://telegra.ph/file/5e5a5812b7e42fe41caeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38593",
        "pageSeq": 38593
    },
    {
        "IDcode": 38594,
        "title": "Hana Bunny - Hinata Akatsuki (Naruto)",
        "cover": "https://telegra.ph/file/f8fc263efe713b541dc50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38594",
        "pageSeq": 38594
    },
    {
        "IDcode": 38595,
        "title": "Bambi - Discipline /  Seitokai (Random Cosplay)",
        "cover": "https://telegra.ph/file/fc6f0cc56ee78e5ef1045.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38595",
        "pageSeq": 38595
    },
    {
        "IDcode": 38596,
        "title": "Bambi - Discipline /  Seitokai V-S (Random Cosplay)",
        "cover": "https://telegra.ph/file/547b7785011ec22b4efd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38596",
        "pageSeq": 38596
    },
    {
        "IDcode": 38598,
        "title": "Hana Bunny - Raiden Aphron (Genshin Impact)",
        "cover": "https://telegra.ph/file/ae8079b2f8c4a0bbafb1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38598",
        "pageSeq": 38598
    },
    {
        "IDcode": 38599,
        "title": "Hana Bunny - Yamato (One Piece)",
        "cover": "https://telegra.ph/file/76ea7ea76e80d8abaad52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38599",
        "pageSeq": 38599
    },
    {
        "IDcode": 38600,
        "title": "Enafox - Makima (Chain Saw Man)",
        "cover": "https://telegra.ph/file/5f61c460a5cc426f40486.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38600",
        "pageSeq": 38600
    },
    {
        "IDcode": 38601,
        "title": "奈汐酱nice - Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/0ac49424209c3c1e34349.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38601",
        "pageSeq": 38601
    },
    {
        "IDcode": 38602,
        "title": "秋和柯基 - Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/ef34fc904e04d3578173a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38602",
        "pageSeq": 38602
    },
    {
        "IDcode": 38603,
        "title": "日奈娇 - Unicorn (Azur Lane)",
        "cover": "https://telegra.ph/file/d1e8db01e57d04080a65e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38603",
        "pageSeq": 38603
    },
    {
        "IDcode": 38604,
        "title": "KuukoW - Shuten Douji (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1cd6883b43f99acbad70f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38604",
        "pageSeq": 38604
    },
    {
        "IDcode": 38605,
        "title": "Caticornplay - Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/2c72b03f9a208e37a1874.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38605",
        "pageSeq": 38605
    },
    {
        "IDcode": 38606,
        "title": "Becke Jacoba - DVa (Overwatch)",
        "cover": "https://telegra.ph/file/a1fc685aace52a37cf27b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38606",
        "pageSeq": 38606
    },
    {
        "IDcode": 38607,
        "title": "KuukoW - Kinako (Random Cosplay)",
        "cover": "https://telegra.ph/file/69d2b5999fb2dfe275c6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38607",
        "pageSeq": 38607
    },
    {
        "IDcode": 38608,
        "title": "Hane Ame - Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/2fed7bc8f370e0e667ef1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38608",
        "pageSeq": 38608
    },
    {
        "IDcode": 38609,
        "title": "Hane Ame - Elf (Elf Village)",
        "cover": "https://telegra.ph/file/8d1a8cd20e2152a3129b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38609",
        "pageSeq": 38609
    }
];
