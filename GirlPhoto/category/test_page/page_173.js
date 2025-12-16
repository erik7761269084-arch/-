// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39318,
        "title": "Okita Rinka - Cowgirl",
        "cover": "https://telegra.ph/file/c46d9decb851b7086fb57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39318",
        "pageSeq": 39318
    },
    {
        "IDcode": 39319,
        "title": "Hane Ame - Hot spring (Model)",
        "cover": "https://telegra.ph/file/2552fc19cf6975196ead4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39319",
        "pageSeq": 39319
    },
    {
        "IDcode": 39320,
        "title": "Byoru - Futaba Sakura (Persona 5/Shin Megami Tensei V)",
        "cover": "https://telegra.ph/file/a830d40ad10dd084cc851.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39320",
        "pageSeq": 39320
    },
    {
        "IDcode": 39321,
        "title": "Miko Chan - Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/26ba3ea1a4e4c9c8eaf61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39321",
        "pageSeq": 39321
    },
    {
        "IDcode": 39322,
        "title": "Potato Godzilla - Seraphine (League Of Legends)",
        "cover": "https://telegra.ph/file/9b483a6fee01c450f30de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39322",
        "pageSeq": 39322
    },
    {
        "IDcode": 39323,
        "title": "Potato Godzilla - Yellow Casual (Model)",
        "cover": "https://telegra.ph/file/20f91868a21e93bec156e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39323",
        "pageSeq": 39323
    },
    {
        "IDcode": 39324,
        "title": "Hane Ame - Lolita [Original Character] 'Original The Fair Lady'",
        "cover": "https://telegra.ph/file/1deba626d72dc6117cd64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39324",
        "pageSeq": 39324
    },
    {
        "IDcode": 39325,
        "title": "Hana Bunny - Shilily (Vtuber/Hololive)",
        "cover": "https://telegra.ph/file/5b69bd7150e0805589482.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39325",
        "pageSeq": 39325
    },
    {
        "IDcode": 39326,
        "title": "Hana Bunny - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/e27c753837ca5d8a73efa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39326",
        "pageSeq": 39326
    },
    {
        "IDcode": 39327,
        "title": "蠢沫沫 Chunmomo - 精灵村-第二村人 Elf Village",
        "cover": "https://telegra.ph/file/62e319c616c19318a1ab6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39327",
        "pageSeq": 39327
    },
    {
        "IDcode": 39328,
        "title": "Hane Ame - Wanda Scarlet Witch (Marvel/X-Men)",
        "cover": "https://telegra.ph/file/5dd9f2c1b39d0becddd68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39328",
        "pageSeq": 39328
    },
    {
        "IDcode": 39329,
        "title": "梦乃 Mandy - Rei Ayanami (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/994efc87e304b14a0da60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39329",
        "pageSeq": 39329
    },
    {
        "IDcode": 39330,
        "title": "Miih - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/7cea5396bbbdce13cb30a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39330",
        "pageSeq": 39330
    },
    {
        "IDcode": 39331,
        "title": "Hana Bunny - Luxury Nami (One Piece)",
        "cover": "https://telegra.ph/file/e695f851668418046130d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39331",
        "pageSeq": 39331
    },
    {
        "IDcode": 39332,
        "title": "Hoshilily 星之迟迟 - 可畏旗袍 Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/c08f90b743636fb3993d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39332",
        "pageSeq": 39332
    },
    {
        "IDcode": 39333,
        "title": "Meggi - Lenore Boudoir (Castlevania)",
        "cover": "https://telegra.ph/file/0e663054ba948b5839f54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39333",
        "pageSeq": 39333
    },
    {
        "IDcode": 39334,
        "title": "UyUy - C.C. (Code Geass)",
        "cover": "https://telegra.ph/file/c5aef34388de549a01835.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39334",
        "pageSeq": 39334
    },
    {
        "IDcode": 39335,
        "title": "Caticornplay - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/8225bdf68816420648765.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39335",
        "pageSeq": 39335
    },
    {
        "IDcode": 39336,
        "title": "Hane Ame - Rizu-kyun (Sono Bosque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/4bf2d81acfa12bdde6fcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39336",
        "pageSeq": 39336
    },
    {
        "IDcode": 39337,
        "title": "Yoshinobi - Hanekawa Tsubasa (Monogatari Series)",
        "cover": "https://telegra.ph/file/29577755730b7b0b05bfb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39337",
        "pageSeq": 39337
    },
    {
        "IDcode": 39338,
        "title": "Azure - Saki (Genshin Emergence)",
        "cover": "https://telegra.ph/file/f102afe5bf723d9454e01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39338",
        "pageSeq": 39338
    },
    {
        "IDcode": 39339,
        "title": "HaneAme – Exercise Girl",
        "cover": "https://telegra.ph/file/effa5d47e0e9d577324d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39339",
        "pageSeq": 39339
    },
    {
        "IDcode": 39340,
        "title": "Miih - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/b55d70de14b5cfdfc83a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39340",
        "pageSeq": 39340
    },
    {
        "IDcode": 39341,
        "title": "Neppu - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/65f15a3c43062923bf8f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39341",
        "pageSeq": 39341
    },
    {
        "IDcode": 39342,
        "title": "Chunmomo 蠢沫沫 - Rem Cat (Re: Zero)",
        "cover": "https://telegra.ph/file/be697870149c074a530d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39342",
        "pageSeq": 39342
    },
    {
        "IDcode": 39343,
        "title": "Mimi Chan - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/0ccb8cf175d8650218344.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39343",
        "pageSeq": 39343
    },
    {
        "IDcode": 39344,
        "title": "Mikomin - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/5677fb889473fb4e393d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39344",
        "pageSeq": 39344
    },
    {
        "IDcode": 39345,
        "title": "Chonoblack - Hana Midorikawa (Prison School)",
        "cover": "https://telegra.ph/file/d6941abbe5bce8339fb19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39345",
        "pageSeq": 39345
    },
    {
        "IDcode": 39346,
        "title": "UyUy - Daki (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/b96ba9b53505fcec45ede.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39346",
        "pageSeq": 39346
    },
    {
        "IDcode": 39347,
        "title": "Hana Bunny - Hachisaku sama",
        "cover": "https://telegra.ph/file/056ed922491fe9565f78d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39347",
        "pageSeq": 39347
    },
    {
        "IDcode": 39348,
        "title": "miko酱ww – 吉他妹妹 Guitar Sister",
        "cover": "https://telegra.ph/file/fd72149e24ca9c19a77be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39348",
        "pageSeq": 39348
    },
    {
        "IDcode": 39349,
        "title": "Yureta - Inosuke (Kimetsu no Yaiba)",
        "cover": "https://telegra.ph/file/033cb8b8f2f4e6fbadb6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39349",
        "pageSeq": 39349
    },
    {
        "IDcode": 39350,
        "title": "Aram - Vol. 104 Pure Media (Model)",
        "cover": "https://telegra.ph/file/b3457ad06d50a88a5906d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39350",
        "pageSeq": 39350
    },
    {
        "IDcode": 39351,
        "title": "YaoYaoQwQ - Rikka (Chuunibyou demo Koi ga Shitai)",
        "cover": "https://telegra.ph/file/4145a92c53c9a8cc3bf33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39351",
        "pageSeq": 39351
    },
    {
        "IDcode": 39352,
        "title": "Shui Miao Aqua - Daki (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/536d8d99a251cd01e3827.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39352",
        "pageSeq": 39352
    },
    {
        "IDcode": 39353,
        "title": "星之迟迟 Hoshilily - 逆兔双子 Bunnygirl",
        "cover": "https://telegra.ph/file/677584414deed02b3b06d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39353",
        "pageSeq": 39353
    },
    {
        "IDcode": 39354,
        "title": "秋和柯基 NO.074 日记 Schoolgirl",
        "cover": "https://telegra.ph/file/2d2f424e06b21ea3b073f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39354",
        "pageSeq": 39354
    },
    {
        "IDcode": 39355,
        "title": "Yoshinobi - Lingerie/Casual (Model)",
        "cover": "https://telegra.ph/file/1513b7c41f323f8fca2ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39355",
        "pageSeq": 39355
    },
    {
        "IDcode": 39356,
        "title": "Mikomin - D.Va Swimsuit (Overwatch)",
        "cover": "https://telegra.ph/file/64e4e60e96447c21ca68c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39356",
        "pageSeq": 39356
    },
    {
        "IDcode": 39357,
        "title": "Neppu - Formidable Cow (Azur Lane)",
        "cover": "https://telegra.ph/file/c5bf810d1918b5a985891.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39357",
        "pageSeq": 39357
    },
    {
        "IDcode": 39358,
        "title": "UyUy - Nyotengu (Dead Or Alive)",
        "cover": "https://telegra.ph/file/0361bf7b6fad0d376f1ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39358",
        "pageSeq": 39358
    },
    {
        "IDcode": 39359,
        "title": "Chameleahn - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/6e58c8563d02ae6a0e487.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39359",
        "pageSeq": 39359
    },
    {
        "IDcode": 39360,
        "title": "Parkhaag 박하악 - Lessons No.9 Swimming",
        "cover": "https://telegra.ph/file/4d9a6b2dff122562386d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39360",
        "pageSeq": 39360
    },
    {
        "IDcode": 39361,
        "title": "六味帝皇酱 - 厕所JK Schoolgirl",
        "cover": "https://telegra.ph/file/2e16fd1e0dd8579c66e9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39361",
        "pageSeq": 39361
    },
    {
        "IDcode": 39362,
        "title": "UyUy - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/8665c4654e8f1eff8c97a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39362",
        "pageSeq": 39362
    },
    {
        "IDcode": 39363,
        "title": "Sally Dorasnow - Ruka Sarashina (Kanojo Okarishimasu)",
        "cover": "https://telegra.ph/file/c701aba778de5c63ba881.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39363",
        "pageSeq": 39363
    },
    {
        "IDcode": 39364,
        "title": "Queenie Chuppy - 2B (Nier: Automata)",
        "cover": "https://telegra.ph/file/b7555cfbf5b1556231ef4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39364",
        "pageSeq": 39364
    },
    {
        "IDcode": 39365,
        "title": "Kalinka Fox - Tinkerbell (Peter Pan)",
        "cover": "https://telegra.ph/file/ca890988ad47a6c6171cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39365",
        "pageSeq": 39365
    },
    {
        "IDcode": 39366,
        "title": "Hana Bunny - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/0d0199c43e3e9caa44f70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39366",
        "pageSeq": 39366
    },
    {
        "IDcode": 39367,
        "title": "Shiro Kitsune - Rizu-Kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/dc37b2a0dd2d26229be2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39367",
        "pageSeq": 39367
    },
    {
        "IDcode": 39368,
        "title": "MissWarmj & MollyWolf - PlayBoy Duo (Model)",
        "cover": "https://telegra.ph/file/1e5893c81b118031501d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39368",
        "pageSeq": 39368
    },
    {
        "IDcode": 39369,
        "title": "Hana Bunny - Shizuku (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/aa97e7136aada56778308.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39369",
        "pageSeq": 39369
    },
    {
        "IDcode": 39370,
        "title": "Hidori Rose & Gumiho Arts - Qiqi & Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/3036a4ad0a558e4889432.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39370",
        "pageSeq": 39370
    },
    {
        "IDcode": 39371,
        "title": "Fantasy Factory - Ankha Zone (Animal Crossing)",
        "cover": "https://telegra.ph/file/4032c43832550876b3b96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39371",
        "pageSeq": 39371
    },
    {
        "IDcode": 39372,
        "title": "Lien Sue - Kirari Momobami (Kakegurui)",
        "cover": "https://telegra.ph/file/cc8dbce6cd49476639249.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39372",
        "pageSeq": 39372
    },
    {
        "IDcode": 39373,
        "title": "Potato Godzilla - Atago (Azur Lane)",
        "cover": "https://telegra.ph/file/722e6108b1bc5f7875e72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39373",
        "pageSeq": 39373
    },
    {
        "IDcode": 39374,
        "title": "KuukoW - Kokomi (Genshin Impact)",
        "cover": "https://telegra.ph/file/9e1d91f493d313e5b833d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39374",
        "pageSeq": 39374
    },
    {
        "IDcode": 39375,
        "title": "梦乃 Mandy - Rei Ayanami (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/3ad20841b316c8f0dea0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39375",
        "pageSeq": 39375
    },
    {
        "IDcode": 39376,
        "title": "Hane Ame - Succubus / Musashi (Fate Grand Order)",
        "cover": "https://telegra.ph/file/244a0577e02a24bfc8cb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39376",
        "pageSeq": 39376
    },
    {
        "IDcode": 39377,
        "title": "Paran Hosu - A day in Tokyo",
        "cover": "https://telegra.ph/file/da337eb39fdd7c8051c4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39377",
        "pageSeq": 39377
    },
    {
        "IDcode": 39379,
        "title": "Quackiess - Jill Valentine (Resident Evil)",
        "cover": "https://telegra.ph/file/a5f588be35197980ea219.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39379",
        "pageSeq": 39379
    },
    {
        "IDcode": 39380,
        "title": "Hane Ame - Kiara Vikini (Vtuber/Hololive)",
        "cover": "https://telegra.ph/file/412c63ff949bec6fca686.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39380",
        "pageSeq": 39380
    },
    {
        "IDcode": 39381,
        "title": "Alina Becker - Marin Kitagawa Bikini (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/ca02dabcd852887c9e4ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39381",
        "pageSeq": 39381
    },
    {
        "IDcode": 39382,
        "title": "Meenfox - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/886d1bf0e814486c45b26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39382",
        "pageSeq": 39382
    },
    {
        "IDcode": 39383,
        "title": "Aery Tiefling - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/40fcb3d3d8925d91b8e20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39383",
        "pageSeq": 39383
    },
    {
        "IDcode": 39384,
        "title": "Queenie Chuppy - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/c01c5407c800f8853f7e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39384",
        "pageSeq": 39384
    },
    {
        "IDcode": 39385,
        "title": "Kitty Honey - Terry Bogard (The King Of Fighters)",
        "cover": "https://telegra.ph/file/4fdc0b0a3bc9ba2b3d2a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39385",
        "pageSeq": 39385
    },
    {
        "IDcode": 39386,
        "title": "小礼好困 Sleepy Lee - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/80cb8bb44c61d2e06fb88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39386",
        "pageSeq": 39386
    },
    {
        "IDcode": 39387,
        "title": "Mikomi Hokina - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/6e5a5c32ca0a39b2e837a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39387",
        "pageSeq": 39387
    },
    {
        "IDcode": 39388,
        "title": "Lucy Langley - Hestia (DANMACHI)",
        "cover": "https://telegra.ph/file/391a1b25b04a9d4093a86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39388",
        "pageSeq": 39388
    },
    {
        "IDcode": 39389,
        "title": "Fe Galvāo - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/d55772a3fd398bfa649a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39389",
        "pageSeq": 39389
    },
    {
        "IDcode": 39390,
        "title": "MissWarmj - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/93b9f57e17be8735070d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39390",
        "pageSeq": 39390
    },
    {
        "IDcode": 39391,
        "title": "Byoru - Riamu Yumemi (Idolmaster)",
        "cover": "https://telegra.ph/file/76612f888da258d6cff65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39391",
        "pageSeq": 39391
    },
    {
        "IDcode": 39392,
        "title": "Dira - Lilith (Capcom)",
        "cover": "https://telegra.ph/file/772955dbe522008c75b8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39392",
        "pageSeq": 39392
    },
    {
        "IDcode": 39393,
        "title": "Byoru - Kitagawa Marin (Sono Bisque Dollw)",
        "cover": "https://telegra.ph/file/c4bdc55201e7c161f83b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39393",
        "pageSeq": 39393
    },
    {
        "IDcode": 39394,
        "title": "Fe Galvāo - Toga Himiko (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/a0d42a7f69a262100f744.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39394",
        "pageSeq": 39394
    },
    {
        "IDcode": 39395,
        "title": "Okita Rinka - Minato Aqua (Vtuber/Hololive)",
        "cover": "https://telegra.ph/file/c80618f1e8e47a650ada5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39395",
        "pageSeq": 39395
    },
    {
        "IDcode": 39396,
        "title": "Hane Ame - Agir (Azur Lane)",
        "cover": "https://telegra.ph/file/95f480feaa031982b439a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39396",
        "pageSeq": 39396
    },
    {
        "IDcode": 39397,
        "title": "Alice - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/0d829fe800d798481e841.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39397",
        "pageSeq": 39397
    },
    {
        "IDcode": 39398,
        "title": "Megumi Koneko - Violet (Violet Evergarden)",
        "cover": "https://telegra.ph/file/b7c78de999be2ddd1d232.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39398",
        "pageSeq": 39398
    },
    {
        "IDcode": 39399,
        "title": "Byoru - Leviathan (Seven Mortal Sins)",
        "cover": "https://telegra.ph/file/0ee3f9628c9c4b44d7853.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39399",
        "pageSeq": 39399
    },
    {
        "IDcode": 39400,
        "title": "蠢沫沫 - 小熊猫 Panda Rojo",
        "cover": "https://telegra.ph/file/04e396a6589a3d8337d82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39400",
        "pageSeq": 39400
    },
    {
        "IDcode": 39401,
        "title": "Hane Ame - Melina (Elden Ring)",
        "cover": "https://telegra.ph/file/e85ba49e9216cdc6e2734.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39401",
        "pageSeq": 39401
    },
    {
        "IDcode": 39402,
        "title": "Neppu - Belfast (Azur Lane)",
        "cover": "https://telegra.ph/file/d0d8a38069ef8ad201510.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39402",
        "pageSeq": 39402
    },
    {
        "IDcode": 39403,
        "title": "Lady Oichi - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/894df9aab22096bf02e25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39403",
        "pageSeq": 39403
    },
    {
        "IDcode": 39404,
        "title": "Sayo Momo - Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/db1bbd1f5846c01ac4800.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39404",
        "pageSeq": 39404
    },
    {
        "IDcode": 39405,
        "title": "Sayo Momo - Eula Maid (Genshin Impact)",
        "cover": "https://telegra.ph/file/72fff8527b3ac08a8bcb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39405",
        "pageSeq": 39405
    },
    {
        "IDcode": 39406,
        "title": "Chunmomo 蠢沫沫 - 小赤城 Akagi (Azur Lane)",
        "cover": "https://telegra.ph/file/7816bb31a25d5e699a5d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39406",
        "pageSeq": 39406
    },
    {
        "IDcode": 39407,
        "title": "Holly Wolf - Princess Elf (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/76345b08bb338534d924e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39407",
        "pageSeq": 39407
    },
    {
        "IDcode": 39408,
        "title": "NiannianD - Prinz Eugen (Azur Lane)",
        "cover": "https://telegra.ph/file/638c3bd1bf53e6fac43ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39408",
        "pageSeq": 39408
    },
    {
        "IDcode": 39409,
        "title": "Shirogane Sama - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/aa245a3a6d315be0bb659.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39409",
        "pageSeq": 39409
    },
    {
        "IDcode": 39410,
        "title": "Potato Godzilla - Asuka Yellow Dress (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/0ea8e5c99a5fadc6739d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39410",
        "pageSeq": 39410
    },
    {
        "IDcode": 39411,
        "title": "Hane Ame - Lucoa (Kobayashi-san)",
        "cover": "https://telegra.ph/file/7cd8bc780085632ae1674.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39411",
        "pageSeq": 39411
    },
    {
        "IDcode": 39412,
        "title": "Kalinka Fox - Jill Valentine (Resident  Evil)",
        "cover": "https://telegra.ph/file/a0510b8a77fb10b454661.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39412",
        "pageSeq": 39412
    },
    {
        "IDcode": 39413,
        "title": "Byoru - Misaki (Dead or Alive)",
        "cover": "https://telegra.ph/file/cdf675c3b33f96c949305.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39413",
        "pageSeq": 39413
    },
    {
        "IDcode": 39414,
        "title": "Shirogane Sama - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/1e07d1983eccc4cb6eddb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39414",
        "pageSeq": 39414
    },
    {
        "IDcode": 39415,
        "title": "Hane Ame - Raikou Maid / Bunny / Swimsuit / Lencery (Fate Grand Order)",
        "cover": "https://telegra.ph/file/da7013b7875ace32a8bd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39415",
        "pageSeq": 39415
    },
    {
        "IDcode": 39416,
        "title": "Lovely Speace Kitten - Mavis (Hotel Transilvania)",
        "cover": "https://telegra.ph/file/3dac6cc2312c8356a1607.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39416",
        "pageSeq": 39416
    },
    {
        "IDcode": 39417,
        "title": "Nagisa - Reisalin Ryza Stout (Atelier Ryza)",
        "cover": "https://telegra.ph/file/a15bbe01c47d41379698d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39417",
        "pageSeq": 39417
    },
    {
        "IDcode": 39418,
        "title": "Hidori Rose - Ekaterina Kurae (The Qwaser of Stigmata)",
        "cover": "https://telegra.ph/file/da444b60e782515b86f9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39418",
        "pageSeq": 39418
    }
];
