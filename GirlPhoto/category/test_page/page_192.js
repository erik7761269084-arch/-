// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41261,
        "title": "Vinnegal - Asa Mitaka / Yoru (Chainsaw Man)",
        "cover": "https://telegra.ph/file/fb5669ce2dd73979c0827.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41261",
        "pageSeq": 41261
    },
    {
        "IDcode": 41262,
        "title": "Meggi - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/beb2d5e50ad0a8cb5e1be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41262",
        "pageSeq": 41262
    },
    {
        "IDcode": 41263,
        "title": "Hana Bunny - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/8c098ff4f8ca11c6c10ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41263",
        "pageSeq": 41263
    },
    {
        "IDcode": 41264,
        "title": "Todopokie - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/b68ba48993c9b338380ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41264",
        "pageSeq": 41264
    },
    {
        "IDcode": 41265,
        "title": "Arty - Kisaki (Blue Archive)",
        "cover": "https://telegra.ph/file/62d201c48f161eb9d1350.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41265",
        "pageSeq": 41265
    },
    {
        "IDcode": 41266,
        "title": "Hane Ame - Irys (Hololive)",
        "cover": "https://telegra.ph/file/fe39e0a7ceeaa9223136f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41266",
        "pageSeq": 41266
    },
    {
        "IDcode": 41267,
        "title": "Aokotan - Bride 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/3e7b08b0bc56bb7004395.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41267",
        "pageSeq": 41267
    },
    {
        "IDcode": 41268,
        "title": "Maria desu - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/0444f01b145487f979436.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41268",
        "pageSeq": 41268
    },
    {
        "IDcode": 41269,
        "title": "Lagertha chan - Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/e0c35e6b48a32fcadcb50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41269",
        "pageSeq": 41269
    },
    {
        "IDcode": 41270,
        "title": "Aery Tiefling - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/e2ab9bda4c40ce27efd98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41270",
        "pageSeq": 41270
    },
    {
        "IDcode": 41271,
        "title": "lMusicl - No. 18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/1eff9230ed8e4be1cda08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41271",
        "pageSeq": 41271
    },
    {
        "IDcode": 41272,
        "title": "Foxy Cosplay - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/b53b5e2640d7f3fba5604.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41272",
        "pageSeq": 41272
    },
    {
        "IDcode": 41273,
        "title": "Hane Ame - 2B Cyberpunk Cat (Nier Automata)",
        "cover": "https://telegra.ph/file/7d1c39a745af4a4894f24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41273",
        "pageSeq": 41273
    },
    {
        "IDcode": 41274,
        "title": "Hane Ame - Navia (Genshin Impact)",
        "cover": "https://telegra.ph/file/c4be45379db47f781ade9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41274",
        "pageSeq": 41274
    },
    {
        "IDcode": 41275,
        "title": "Thicci Velvet - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/796b9f6b89c8463c06282.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41275",
        "pageSeq": 41275
    },
    {
        "IDcode": 41276,
        "title": "蠢沫沫 Chunmomo - 蠢沫沫奇遇记 捆绑",
        "cover": "https://telegra.ph/file/0c1c288db6f74a8f5e7de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41276",
        "pageSeq": 41276
    },
    {
        "IDcode": 41277,
        "title": "Hane Ame - Owari (Azur Lane)",
        "cover": "https://telegra.ph/file/6ca888c3d6e2b85a34e3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41277",
        "pageSeq": 41277
    },
    {
        "IDcode": 41278,
        "title": "Hane Ame - Owari (Azur Lane)",
        "cover": "https://telegra.ph/file/4ec7438b2100bab098be1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41278",
        "pageSeq": 41278
    },
    {
        "IDcode": 41279,
        "title": "Hane Ame - Owari (Azur Lane)",
        "cover": "https://telegra.ph/file/6a0246acc63bfdab1cc28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41279",
        "pageSeq": 41279
    },
    {
        "IDcode": 41280,
        "title": "Shui Miao Aqua - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/0bee36ceb41ddd98ee479.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41280",
        "pageSeq": 41280
    },
    {
        "IDcode": 41281,
        "title": "Shui Miao Aqua - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/b92e6ee339795c6f32c7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41281",
        "pageSeq": 41281
    },
    {
        "IDcode": 41282,
        "title": "Sweetie Fox - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/eacabee3b7c351baf40c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41282",
        "pageSeq": 41282
    },
    {
        "IDcode": 41283,
        "title": "Hana Bunny - Princess Peach  (Mario Bros)",
        "cover": "https://telegra.ph/file/082f14bc3fbcc494f6015.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41283",
        "pageSeq": 41283
    },
    {
        "IDcode": 41284,
        "title": "Kaya - Chahirie (Azur Lane)",
        "cover": "https://telegra.ph/file/414bbae2a08822035cfc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41284",
        "pageSeq": 41284
    },
    {
        "IDcode": 41285,
        "title": "Caticornplay - Raven (Teen Titans)",
        "cover": "https://telegra.ph/file/18ec092731a5bd71fdd0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41285",
        "pageSeq": 41285
    },
    {
        "IDcode": 41286,
        "title": "Xidaidai - Alice (Nikke)",
        "cover": "https://telegra.ph/file/0ba236fec0ba54019fb0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41286",
        "pageSeq": 41286
    },
    {
        "IDcode": 41287,
        "title": "奶糖 Nai Tang - 《JK》",
        "cover": "https://telegra.ph/file/4fdd000f9a3b481adb9a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41287",
        "pageSeq": 41287
    },
    {
        "IDcode": 41288,
        "title": "Umeko J - Kazama Kinoko",
        "cover": "https://telegra.ph/file/9c1ac508a197e7367aa38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41288",
        "pageSeq": 41288
    },
    {
        "IDcode": 41290,
        "title": "Shui Miao Aqua - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/430d48cc8aec3cf51a820.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41290",
        "pageSeq": 41290
    },
    {
        "IDcode": 41291,
        "title": "Shui Miao Aqua - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/9e1402fd19469cd7d41a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41291",
        "pageSeq": 41291
    },
    {
        "IDcode": 41292,
        "title": "Queenie - Asuna Ichinose (Blue Archive)",
        "cover": "https://telegra.ph/file/843edeb1ebb2901863c05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41292",
        "pageSeq": 41292
    },
    {
        "IDcode": 41293,
        "title": "Lady Melamori - D.Va Gym Pants (Overwatch)",
        "cover": "https://telegra.ph/file/441846a4ec510ec61f4bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41293",
        "pageSeq": 41293
    },
    {
        "IDcode": 41294,
        "title": "Lady Melamori - D.Va (Overwatch)",
        "cover": "https://telegra.ph/file/96e82471f24ecd6e050f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41294",
        "pageSeq": 41294
    },
    {
        "IDcode": 41295,
        "title": "Kaya - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/5615c545a970fd2912366.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41295",
        "pageSeq": 41295
    },
    {
        "IDcode": 41296,
        "title": "Hane Ame - Christmas Bunny",
        "cover": "https://telegra.ph/file/3a3ea314297f5506f0575.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41296",
        "pageSeq": 41296
    },
    {
        "IDcode": 41297,
        "title": "年年 Niannian - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/2c9b05f37eeb9481f6f67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41297",
        "pageSeq": 41297
    },
    {
        "IDcode": 41298,
        "title": "贝贝琪 Becky - Cowgirl",
        "cover": "https://telegra.ph/file/904ddd5a546c6a57406a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41298",
        "pageSeq": 41298
    },
    {
        "IDcode": 41299,
        "title": "Byoru - Marie Rose Bomber Bikini (Dead Or Alive)",
        "cover": "https://telegra.ph/file/6d4cb2c37e43e309b29c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41299",
        "pageSeq": 41299
    },
    {
        "IDcode": 41300,
        "title": "Aery Tiefling - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/197f21754e10fa05e0cf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41300",
        "pageSeq": 41300
    },
    {
        "IDcode": 41301,
        "title": "Katta Ramos - Jean (Genshin Impact)",
        "cover": "https://telegra.ph/file/b49b40b4794e97f7cf10a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41301",
        "pageSeq": 41301
    },
    {
        "IDcode": 41302,
        "title": "Shui Miao Aqua - Mc Mommy",
        "cover": "https://telegra.ph/file/80ee5588ada81518713de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41302",
        "pageSeq": 41302
    },
    {
        "IDcode": 41303,
        "title": "Lera Himera & Octokuro - Mari Kurihara & Meiko Shiraki (Prison School)",
        "cover": "https://telegra.ph/file/f0b91c5c22eae19224be3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41303",
        "pageSeq": 41303
    },
    {
        "IDcode": 41304,
        "title": "Arty - Prinz Eugen (Azur Lane)",
        "cover": "https://telegra.ph/file/c64e4cdfce87e224d260e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41304",
        "pageSeq": 41304
    },
    {
        "IDcode": 41305,
        "title": "九言 Jiu Yan - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/93a81429e8cb6de08603d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41305",
        "pageSeq": 41305
    },
    {
        "IDcode": 41306,
        "title": "ZinieQ - Bea (Pokemon)",
        "cover": "https://telegra.ph/file/a5bae5786e8772e6773cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41306",
        "pageSeq": 41306
    },
    {
        "IDcode": 41307,
        "title": "Lana Rain - Peach (Mario bros)",
        "cover": "https://telegra.ph/file/97eaff93bd0c7940aa9d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41307",
        "pageSeq": 41307
    },
    {
        "IDcode": 41308,
        "title": "Okita Rinka - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/0f238148725caf674fef3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41308",
        "pageSeq": 41308
    },
    {
        "IDcode": 41309,
        "title": "ZinieQ - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/266f15c241de95e73e88b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41309",
        "pageSeq": 41309
    },
    {
        "IDcode": 41310,
        "title": "Noi Oogami - Frankie (Foster's Home For Imaginary Friends)",
        "cover": "https://telegra.ph/file/264016e6c414911c7e8b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41310",
        "pageSeq": 41310
    },
    {
        "IDcode": 41311,
        "title": "Mimsy - Reina (Tekken)",
        "cover": "https://telegra.ph/file/8a0045f6802beb990e282.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41311",
        "pageSeq": 41311
    },
    {
        "IDcode": 41312,
        "title": "Arty - Tsundere Elf (Isekai Ojisan)",
        "cover": "https://telegra.ph/file/aa781cce099bc79b93c6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41312",
        "pageSeq": 41312
    },
    {
        "IDcode": 41313,
        "title": "Luxlo - Snow White (Snow White and the Seven Dwarfs)",
        "cover": "https://telegra.ph/file/8262ad50644c3d714f787.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41313",
        "pageSeq": 41313
    },
    {
        "IDcode": 41314,
        "title": "Maria desu -  Neko Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/184f51813b4f649c3f584.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41314",
        "pageSeq": 41314
    },
    {
        "IDcode": 41315,
        "title": "Hackee - Azula (Avatar)",
        "cover": "https://telegra.ph/file/f68f206372ac5046523b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41315",
        "pageSeq": 41315
    },
    {
        "IDcode": 41316,
        "title": "MissWarmj - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/93e34511b201d8bb57cd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41316",
        "pageSeq": 41316
    },
    {
        "IDcode": 41317,
        "title": "Hina Jiao 日奈娇 - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/d895299994081685273d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41317",
        "pageSeq": 41317
    },
    {
        "IDcode": 41318,
        "title": "Nymph - Rin Tohsaka (Fate Stay Night)",
        "cover": "https://telegra.ph/file/ef6d738383e28e335a391.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41318",
        "pageSeq": 41318
    },
    {
        "IDcode": 41319,
        "title": "Mimsy - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/3173cd2518cb799f25e8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41319",
        "pageSeq": 41319
    },
    {
        "IDcode": 41320,
        "title": "Queenie - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/f1e25deb34884503282f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41320",
        "pageSeq": 41320
    },
    {
        "IDcode": 41321,
        "title": "Arty - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/0d27709e5a27be1f82c3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41321",
        "pageSeq": 41321
    },
    {
        "IDcode": 41322,
        "title": "Choi Ji Yun - Sakura (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/a6a58a38c7bb5fa8496c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41322",
        "pageSeq": 41322
    },
    {
        "IDcode": 41323,
        "title": "Neppu - Nilou (Genshin Impact)",
        "cover": "https://telegra.ph/file/b79032cfe64dd3f102bac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41323",
        "pageSeq": 41323
    },
    {
        "IDcode": 41324,
        "title": "Kaya - Fern Sexy Sweater (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/fd7faf4994c00bc8c1b83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41324",
        "pageSeq": 41324
    },
    {
        "IDcode": 41325,
        "title": "Byoru - Furina (Genshin Impact)",
        "cover": "https://telegra.ph/file/4f7542d708315b81cfaf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41325",
        "pageSeq": 41325
    },
    {
        "IDcode": 41326,
        "title": "Xiaoying - Quetzalcoatl (Fate Grand Order)",
        "cover": "https://telegra.ph/file/62dbdcd37a142ef782d92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41326",
        "pageSeq": 41326
    },
    {
        "IDcode": 41327,
        "title": "Alina Becker - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/039550a492e9dc7035d7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41327",
        "pageSeq": 41327
    },
    {
        "IDcode": 41328,
        "title": "Fantasy Factory 小丁 - 失落眠月 Mianyue Line",
        "cover": "https://telegra.ph/file/4fd18a7be0befc3d6fa5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41328",
        "pageSeq": 41328
    },
    {
        "IDcode": 41329,
        "title": "ZinieQ - Shizuka Mkazuki (Zom100)",
        "cover": "https://telegra.ph/file/3899a8ef91fb68e9cc0c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41329",
        "pageSeq": 41329
    },
    {
        "IDcode": 41330,
        "title": "Pattie - Reika (Gantz)",
        "cover": "https://telegra.ph/file/90f16eed32123cbca15a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41330",
        "pageSeq": 41330
    },
    {
        "IDcode": 41331,
        "title": "Queenie - McGirl",
        "cover": "https://telegra.ph/file/775a2362cc1d31a0aa792.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41331",
        "pageSeq": 41331
    },
    {
        "IDcode": 41332,
        "title": "Tokar 浵卡 - Toki Asuma Bunny (Blue Archive)",
        "cover": "https://telegra.ph/file/58a9a76772859fe41f649.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41332",
        "pageSeq": 41332
    },
    {
        "IDcode": 41333,
        "title": "Umeko J - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/2a21c2c13c618a9e06978.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41333",
        "pageSeq": 41333
    },
    {
        "IDcode": 41334,
        "title": "Yorkie - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/a8934ec2595530e5c2dcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41334",
        "pageSeq": 41334
    },
    {
        "IDcode": 41335,
        "title": "Sweetie Fox - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/47e7a155c49cb73deff13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41335",
        "pageSeq": 41335
    },
    {
        "IDcode": 41336,
        "title": "Aokotan - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/00ce855594059cd5cbe61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41336",
        "pageSeq": 41336
    },
    {
        "IDcode": 41337,
        "title": "Hane Ame - Tifa Swimsuit (Final Fantasy)",
        "cover": "https://telegra.ph/file/6d8b9b128094312dfc470.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41337",
        "pageSeq": 41337
    },
    {
        "IDcode": 41338,
        "title": "桃良阿宅 Taoliang Azhai - 2B Maid (Nier Automata)",
        "cover": "https://telegra.ph/file/9ff7a5db6204829a2fdcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41338",
        "pageSeq": 41338
    },
    {
        "IDcode": 41339,
        "title": "Mirikashi - Marin Bunny (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/369792fd91f364a6d357f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41339",
        "pageSeq": 41339
    },
    {
        "IDcode": 41340,
        "title": "日奈娇 Hinajiao - Mifuyu Yukino (Hitozukiai ga Nigate na Miboujin no Yukionnasanto Noroi no Yubiwa)",
        "cover": "https://telegra.ph/file/578495244fddcc2ed9466.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41340",
        "pageSeq": 41340
    },
    {
        "IDcode": 41341,
        "title": "Byoru - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/2e2b411112fe55ac3a153.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41341",
        "pageSeq": 41341
    },
    {
        "IDcode": 41342,
        "title": "Yorkie - Elf Mura (Elf Village)",
        "cover": "https://telegra.ph/file/30f2e9c425c0595691495.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41342",
        "pageSeq": 41342
    },
    {
        "IDcode": 41343,
        "title": "Yuzu Pyon - Ruby (RWBY)",
        "cover": "https://telegra.ph/file/0d49f3378250a148b278b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41343",
        "pageSeq": 41343
    },
    {
        "IDcode": 41344,
        "title": "Rocksy Light - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/d7a89cb893155ae4fd92a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41344",
        "pageSeq": 41344
    },
    {
        "IDcode": 41345,
        "title": "Hane Ame - Glasses Girlfriend",
        "cover": "https://telegra.ph/file/6de5d20af432a4d9e7f13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41345",
        "pageSeq": 41345
    },
    {
        "IDcode": 41346,
        "title": "Byoru - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/7a812f13ca582faa52f45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41346",
        "pageSeq": 41346
    },
    {
        "IDcode": 41347,
        "title": "Xiaoying - Marine (Pokemon)",
        "cover": "https://telegra.ph/file/bc0e3b087963a5b19ba34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41347",
        "pageSeq": 41347
    },
    {
        "IDcode": 41348,
        "title": "Misaki Sai - Princess Peach (Mario Bros)",
        "cover": "https://telegra.ph/file/4723cacffaf3272326f42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41348",
        "pageSeq": 41348
    },
    {
        "IDcode": 41349,
        "title": "Byoru - Ruan Mei (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/da633aa92864d16264d18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41349",
        "pageSeq": 41349
    },
    {
        "IDcode": 41350,
        "title": "Hologana - Satsuki (Kill la Kill)",
        "cover": "https://telegra.ph/file/cb847074a3fbcf7257f62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41350",
        "pageSeq": 41350
    },
    {
        "IDcode": 41351,
        "title": "Momoko.xoxo - Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/11d8b8e3485a7c9c3c7a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41351",
        "pageSeq": 41351
    },
    {
        "IDcode": 41352,
        "title": "Misaki Sai - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/8672c71dcfa0ca28271e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41352",
        "pageSeq": 41352
    },
    {
        "IDcode": 41353,
        "title": "Hane Ame - Boa Hacock Offical (One Piece)",
        "cover": "https://telegra.ph/file/0d6219b8cfa09f9e5186e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41353",
        "pageSeq": 41353
    },
    {
        "IDcode": 41354,
        "title": "Hane Ame - Boa Hancock QIPAO (One Piece)",
        "cover": "https://telegra.ph/file/628ee681ec750822a233d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41354",
        "pageSeq": 41354
    },
    {
        "IDcode": 41355,
        "title": "Hane Ame - Boa Hancock Slave (One Piece)",
        "cover": "https://telegra.ph/file/1f982dab96cb6e0edc651.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41355",
        "pageSeq": 41355
    },
    {
        "IDcode": 41356,
        "title": "Shadow - Chiaki Nanami (Danganronpa)",
        "cover": "https://telegra.ph/file/7018cfe1e855e77209e54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41356",
        "pageSeq": 41356
    },
    {
        "IDcode": 41357,
        "title": "Byoru - Houshou Marine Bikini (Hololive)",
        "cover": "https://telegra.ph/file/04a9b1e96f6a879cc1c81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41357",
        "pageSeq": 41357
    },
    {
        "IDcode": 41358,
        "title": "小瑶幺幺 Xiao Yao Yao  - Lynette (Genshin Impact)",
        "cover": "https://telegra.ph/file/f5dd3c8db6e34a59d7139.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41358",
        "pageSeq": 41358
    },
    {
        "IDcode": 41359,
        "title": "Neppu - Lincia (Elf Village)",
        "cover": "https://telegra.ph/file/fd5c99e5a468bba8f324e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41359",
        "pageSeq": 41359
    },
    {
        "IDcode": 41360,
        "title": "蠢沫沫 Chunmomo - 捆绑和服",
        "cover": "https://telegra.ph/file/6a45301a59740691b278f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41360",
        "pageSeq": 41360
    },
    {
        "IDcode": 41361,
        "title": "Alin Ma / Xenon - Tae Takemi (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/80d2b32686a80e4de52d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41361",
        "pageSeq": 41361
    }
];
