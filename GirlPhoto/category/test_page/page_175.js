// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39521,
        "title": "Choi Ji Yun - Yor Forger 2 (Spy x Family)",
        "cover": "https://telegra.ph/file/99c313fe98c9c0e418825.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39521",
        "pageSeq": 39521
    },
    {
        "IDcode": 39522,
        "title": "UyUy - Cynthia (Pokemon)",
        "cover": "https://telegra.ph/file/e35236def9340eaa2bbae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39522",
        "pageSeq": 39522
    },
    {
        "IDcode": 39523,
        "title": "Fantasy Factory - Bicolor Demond",
        "cover": "https://telegra.ph/file/d0f452913ff3c7a406054.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39523",
        "pageSeq": 39523
    },
    {
        "IDcode": 39524,
        "title": "Potato Godzilla - Shizuku-tan (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/f25999d39820b0af2e699.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39524",
        "pageSeq": 39524
    },
    {
        "IDcode": 39525,
        "title": "Byoru - Ms. Hina (Genshin Impact)",
        "cover": "https://telegra.ph/file/8fbaa7af621aa16f0c771.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39525",
        "pageSeq": 39525
    },
    {
        "IDcode": 39526,
        "title": "小礼好困 - 絮语 Whisperain (Arknaights)",
        "cover": "https://telegra.ph/file/a86d14a70f8a1cffeb8d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39526",
        "pageSeq": 39526
    },
    {
        "IDcode": 39527,
        "title": "NinJa - Evelyn & Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/e026484e78b6c58545dc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39527",
        "pageSeq": 39527
    },
    {
        "IDcode": 39528,
        "title": "Airiri Ganlory - NO.015 放课后风纪 Moral Guardia of School",
        "cover": "https://telegra.ph/file/695bb5c17c82514ec2f4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39528",
        "pageSeq": 39528
    },
    {
        "IDcode": 39529,
        "title": "Vinnegal - 2B Black Bride (Nier Automata)",
        "cover": "https://telegra.ph/file/b43620fc612fbf27ee36b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39529",
        "pageSeq": 39529
    },
    {
        "IDcode": 39530,
        "title": "Sarah Carvalho - Shoto Todoroki (Boku No Hero)",
        "cover": "https://telegra.ph/file/61b6895281ef89093a3f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39530",
        "pageSeq": 39530
    },
    {
        "IDcode": 39531,
        "title": "KitKat - Nero Bride x Mini Bikini (Fate/Extra Last Encore)",
        "cover": "https://telegra.ph/file/021be772f93a44a524711.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39531",
        "pageSeq": 39531
    },
    {
        "IDcode": 39532,
        "title": "Fantasy Factory - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/6ced42aaac78f2f8b9666.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39532",
        "pageSeq": 39532
    },
    {
        "IDcode": 39533,
        "title": "Bambi - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/194b239ac132234c4edf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39533",
        "pageSeq": 39533
    },
    {
        "IDcode": 39534,
        "title": "Kitkat - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/9b7469f7c3bcca39eec2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39534",
        "pageSeq": 39534
    },
    {
        "IDcode": 39535,
        "title": "Shui Miao Aqua - Kurumi Tokisaki (Date a Live)",
        "cover": "https://telegra.ph/file/1c264e54c2af5ae651bf5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39535",
        "pageSeq": 39535
    },
    {
        "IDcode": 39536,
        "title": "Azami - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/e0e390bd2c30d8e760bfa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39536",
        "pageSeq": 39536
    },
    {
        "IDcode": 39537,
        "title": "Vinnegal - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/5d077b7735573b4d7d2a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39537",
        "pageSeq": 39537
    },
    {
        "IDcode": 39538,
        "title": "Kaya Huang - Supersónico",
        "cover": "https://telegra.ph/file/c12294d5fff26138bcbb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39538",
        "pageSeq": 39538
    },
    {
        "IDcode": 39539,
        "title": "Potato Godzilla - Dark Magician Girl (Yu Gi Oh)",
        "cover": "https://telegra.ph/file/82c1feb1009fd75dc4e68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39539",
        "pageSeq": 39539
    },
    {
        "IDcode": 39540,
        "title": "Niannian D - Succubus",
        "cover": "https://telegra.ph/file/fd7267ae21727c9d75821.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39540",
        "pageSeq": 39540
    },
    {
        "IDcode": 39541,
        "title": "Sally Dorasnow - Ke Qing Maid (Genshin Impact)",
        "cover": "https://telegra.ph/file/c59535d96be926372babd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39541",
        "pageSeq": 39541
    },
    {
        "IDcode": 39543,
        "title": "Kaya Huang - St. Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/41f9a96ef7d80e282a641.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39543",
        "pageSeq": 39543
    },
    {
        "IDcode": 39544,
        "title": "Hokunaimeko - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/1b185fe8c7cc01b704cb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39544",
        "pageSeq": 39544
    },
    {
        "IDcode": 39545,
        "title": "Emiai - Nemissa (Megami Tensei)",
        "cover": "https://telegra.ph/file/a06d4df4d8cf319c310ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39545",
        "pageSeq": 39545
    },
    {
        "IDcode": 39546,
        "title": "Potato Godzilla - Meltryllis (Fate Grand Order)",
        "cover": "https://telegra.ph/file/e46c0f2785f2fa5eaf1ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39546",
        "pageSeq": 39546
    },
    {
        "IDcode": 39547,
        "title": "Potato Godzilla - Rikka Takarada (SSSS.Gridman)",
        "cover": "https://telegra.ph/file/4d470f7a8eb575be18a32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39547",
        "pageSeq": 39547
    },
    {
        "IDcode": 39548,
        "title": "지아 Zia - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/c58bdfe92bf9ff8584705.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39548",
        "pageSeq": 39548
    },
    {
        "IDcode": 39549,
        "title": "Byoru - Aeolian",
        "cover": "https://telegra.ph/file/dbaff60b2dd92687eaa73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39549",
        "pageSeq": 39549
    },
    {
        "IDcode": 39550,
        "title": "Byoru - Mori Calliope (Hololive)",
        "cover": "https://telegra.ph/file/32b4587cb5fb38f32dd5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39550",
        "pageSeq": 39550
    },
    {
        "IDcode": 39551,
        "title": "Naat - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/8f2acdfaef281061d9d05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39551",
        "pageSeq": 39551
    },
    {
        "IDcode": 39552,
        "title": "모찌 Mozzi - Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/bfcc0b0c988df591124e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39552",
        "pageSeq": 39552
    },
    {
        "IDcode": 39553,
        "title": "Fantasy Factory - Pink Cat",
        "cover": "https://telegra.ph/file/d609f1b2f8117f6a32ed7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39553",
        "pageSeq": 39553
    },
    {
        "IDcode": 39554,
        "title": "Sayo Momo - Alter Saber (Fate Grand Order)",
        "cover": "https://telegra.ph/file/faff2d455881ac1371616.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39554",
        "pageSeq": 39554
    },
    {
        "IDcode": 39555,
        "title": "Kitkat - Uzaki Cow (Uzaki-chan)",
        "cover": "https://telegra.ph/file/b9db5021a33b3b0bdb62e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39555",
        "pageSeq": 39555
    },
    {
        "IDcode": 39556,
        "title": "Byoru - Gawr Gura Swimsuit (Hololive)",
        "cover": "https://telegra.ph/file/a65654e50394857f2d4b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39556",
        "pageSeq": 39556
    },
    {
        "IDcode": 39557,
        "title": "Mikomin - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/a2e6386cc5000af06f205.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39557",
        "pageSeq": 39557
    },
    {
        "IDcode": 39558,
        "title": "Byoru - Chiyo (Ane Naru Mono)",
        "cover": "https://telegra.ph/file/d506a3f1272dd50edef56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39558",
        "pageSeq": 39558
    },
    {
        "IDcode": 39559,
        "title": "Kalinka Fox - Miss Fortune (League Of Legends)",
        "cover": "https://telegra.ph/file/ad3737604dcde1f932278.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39559",
        "pageSeq": 39559
    },
    {
        "IDcode": 39560,
        "title": "Azami - Ram & Taiho (Re: Zero & Azur Lane)",
        "cover": "https://telegra.ph/file/77824d5f3d64cb8281054.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39560",
        "pageSeq": 39560
    },
    {
        "IDcode": 39561,
        "title": "Arty Huang - Rikka Takarada (SSSS.Gridman)",
        "cover": "https://telegra.ph/file/03307ae8dc4b0f0f4136a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39561",
        "pageSeq": 39561
    },
    {
        "IDcode": 39562,
        "title": "Potato Godzilla - Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/664bf0277e1971915b715.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39562",
        "pageSeq": 39562
    },
    {
        "IDcode": 39564,
        "title": "Rioko 凉凉子 - 和女上司的七夕",
        "cover": "https://telegra.ph/file/1e1e206fd0765c1ea4217.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39564",
        "pageSeq": 39564
    },
    {
        "IDcode": 39565,
        "title": "MissWarmj - Halloween 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/6952cb04da1a3b4c70bde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39565",
        "pageSeq": 39565
    },
    {
        "IDcode": 39566,
        "title": "Lucy Lein - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/b3609b0ef9b4c3fcd2281.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39566",
        "pageSeq": 39566
    },
    {
        "IDcode": 39567,
        "title": "Byoru - Nyotengu (Dead Or Alive)",
        "cover": "https://telegra.ph/file/4f4f4f32c540a8c007a28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39567",
        "pageSeq": 39567
    },
    {
        "IDcode": 39568,
        "title": "Nekokoyoshi - Malzeno (Monster Hunter)",
        "cover": "https://telegra.ph/file/1e6a688a3f17637013c0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39568",
        "pageSeq": 39568
    },
    {
        "IDcode": 39569,
        "title": "Lady Melamori - Yennefer (The Witcher)",
        "cover": "https://telegra.ph/file/258815a4cc15172466ed1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39569",
        "pageSeq": 39569
    },
    {
        "IDcode": 39570,
        "title": "Kaya Huang - Illustrious (Azur Lane)",
        "cover": "https://telegra.ph/file/df21c2003d304908d8097.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39570",
        "pageSeq": 39570
    },
    {
        "IDcode": 39572,
        "title": "Byoru - Luna Latex Suit",
        "cover": "https://telegra.ph/file/d8e0969d0378e531d8ef6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39572",
        "pageSeq": 39572
    },
    {
        "IDcode": 39573,
        "title": "Lady Melamori - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/19c2f697af90cb5933c6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39573",
        "pageSeq": 39573
    },
    {
        "IDcode": 39574,
        "title": "Kitkat - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/5f9816f81749e319e49c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39574",
        "pageSeq": 39574
    },
    {
        "IDcode": 39575,
        "title": "Fantasy Factory & Okita Rinka - Shimakaze & Kashimada (Kantai Collection)",
        "cover": "https://telegra.ph/file/0a59a8bd8abc0f12928d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39575",
        "pageSeq": 39575
    },
    {
        "IDcode": 39576,
        "title": "Anna Aifert - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/111fee32caaafc8ae224e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39576",
        "pageSeq": 39576
    },
    {
        "IDcode": 39577,
        "title": "MissWarmj - Jean (Genshin Impact)",
        "cover": "https://telegra.ph/file/e04e9fb3511cf5c778740.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39577",
        "pageSeq": 39577
    },
    {
        "IDcode": 39578,
        "title": "Hidori Rose - Sucrose (Genshin Impact)",
        "cover": "https://telegra.ph/file/ca21ebac52cae0c8f3c6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39578",
        "pageSeq": 39578
    },
    {
        "IDcode": 39579,
        "title": "Alin Ma / Xenon - Aphrodite",
        "cover": "https://telegra.ph/file/4f0bc132671c09d04dadf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39579",
        "pageSeq": 39579
    },
    {
        "IDcode": 39580,
        "title": "Yoshinobi - Unicorn (Azur Lane)",
        "cover": "https://telegra.ph/file/76aaa65b9419dbb24ddf2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39580",
        "pageSeq": 39580
    },
    {
        "IDcode": 39581,
        "title": "Fantasy Factory - Yellow dress black underwear",
        "cover": "https://telegra.ph/file/986fd5d05fdf1283838ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39581",
        "pageSeq": 39581
    },
    {
        "IDcode": 39582,
        "title": "Joyce - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/0c7340ca4652cbda2b257.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39582",
        "pageSeq": 39582
    },
    {
        "IDcode": 39583,
        "title": "Potato Godzilla - Jeanne D'Arc Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/865b2732a183d4b84b7aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39583",
        "pageSeq": 39583
    },
    {
        "IDcode": 39584,
        "title": "Potato Godzilla - Asuna Ichinose (Blue Archive)",
        "cover": "https://telegra.ph/file/551757b15105c10c02c51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39584",
        "pageSeq": 39584
    },
    {
        "IDcode": 39587,
        "title": "秋和柯基 Qiu Xia Xiao - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/4bc80215bd06dd79c87af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39587",
        "pageSeq": 39587
    },
    {
        "IDcode": 39588,
        "title": "Shimo 霜月 - Elf Village",
        "cover": "https://telegra.ph/file/e9f6ea5c6db26eab88b29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39588",
        "pageSeq": 39588
    },
    {
        "IDcode": 39589,
        "title": "Kalinka Fox - Rias Gremory (High School DxD)",
        "cover": "https://telegra.ph/file/2022827314032ddf6d9c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39589",
        "pageSeq": 39589
    },
    {
        "IDcode": 39590,
        "title": "金鱼 Kinngyo - Krul (Owari No Seraph)",
        "cover": "https://telegra.ph/file/77c991c8309f1991c38c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39590",
        "pageSeq": 39590
    },
    {
        "IDcode": 39591,
        "title": "Shui Miao Aqua - Guitar Sister",
        "cover": "https://telegra.ph/file/2281bf141494229330c38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39591",
        "pageSeq": 39591
    },
    {
        "IDcode": 39592,
        "title": "Shui Miao Aqua - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/ee6fa63ae51a39fa9d471.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39592",
        "pageSeq": 39592
    },
    {
        "IDcode": 39593,
        "title": "Arty Huang - Zara (Azur Lane)",
        "cover": "https://telegra.ph/file/c597014773bbfdd24e4c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39593",
        "pageSeq": 39593
    },
    {
        "IDcode": 39594,
        "title": "Kalinka Fox - Toga Himiko (Boku no Hero)",
        "cover": "https://telegra.ph/file/470301cc0d0e359c59a75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39594",
        "pageSeq": 39594
    },
    {
        "IDcode": 39595,
        "title": "Choi Ji Yun - Misato Katsuragi (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/92aa716d1fd37e657b81f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39595",
        "pageSeq": 39595
    },
    {
        "IDcode": 39596,
        "title": "Choi Ji Yun - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/25b7fd5d5339251c15a3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39596",
        "pageSeq": 39596
    },
    {
        "IDcode": 39597,
        "title": "Floradaria & Carry Key - Kalifa & Nami (One Piece)",
        "cover": "https://telegra.ph/file/a29246bab7aa3b9aad946.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39597",
        "pageSeq": 39597
    },
    {
        "IDcode": 39599,
        "title": "Hane Ame - Pet Photobook",
        "cover": "https://telegra.ph/file/10428b523cb9accc73312.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39599",
        "pageSeq": 39599
    },
    {
        "IDcode": 39600,
        "title": "Potato Godzilla - Zakura Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/b9459f6a6c8cce85a85eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39600",
        "pageSeq": 39600
    },
    {
        "IDcode": 39601,
        "title": "Hylia Fawkes - Asuna (Swort Art Online)",
        "cover": "https://telegra.ph/file/793275caf21d7c53ba052.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39601",
        "pageSeq": 39601
    },
    {
        "IDcode": 39602,
        "title": "Chunmomo 蠢沫沫 - Lincia (Elf Village)",
        "cover": "https://telegra.ph/file/d66dd202b11f2eda9fa3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39602",
        "pageSeq": 39602
    },
    {
        "IDcode": 39603,
        "title": "Yoshinobi - Cow Nozomi (Love Live)",
        "cover": "https://telegra.ph/file/bc8bfe1ee306ff38efab2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39603",
        "pageSeq": 39603
    },
    {
        "IDcode": 39604,
        "title": "Hane Ame - Mudrock (Arknights)",
        "cover": "https://telegra.ph/file/c6a7704f5fd9d0df36bab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39604",
        "pageSeq": 39604
    },
    {
        "IDcode": 39605,
        "title": "Mikomin -2B (Nier Automata)",
        "cover": "https://telegra.ph/file/5e88893a05a499fc0c293.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39605",
        "pageSeq": 39605
    },
    {
        "IDcode": 39606,
        "title": "Nagisa - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/bc4b0d81a81b05b447802.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39606",
        "pageSeq": 39606
    },
    {
        "IDcode": 39607,
        "title": "Aery Tiefling - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/61c46e909e76b971e952a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39607",
        "pageSeq": 39607
    },
    {
        "IDcode": 39608,
        "title": "Shimo - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/659df206b1c20cbb92443.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39608",
        "pageSeq": 39608
    },
    {
        "IDcode": 39609,
        "title": "Kalinka Fox - Wonder Woman",
        "cover": "https://telegra.ph/file/89832df3542bb9eee9cd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39609",
        "pageSeq": 39609
    },
    {
        "IDcode": 39610,
        "title": "Potato Godzilla - Squeek! Happy Lunar New Year!!!",
        "cover": "https://telegra.ph/file/0057ccf9a4ac3bbbbf95d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39610",
        "pageSeq": 39610
    },
    {
        "IDcode": 39611,
        "title": "白莉爱吃巧克力 - 雷电将军 Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/c6a028e86b2c46adf1119.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39611",
        "pageSeq": 39611
    },
    {
        "IDcode": 39612,
        "title": "Aery Tiefling - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/f6d3d1da3e3c17458ca43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39612",
        "pageSeq": 39612
    },
    {
        "IDcode": 39613,
        "title": "Shimo - Shizuko (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/1cd1517a721eee42f6257.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39613",
        "pageSeq": 39613
    },
    {
        "IDcode": 39614,
        "title": "Lady Melamori - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/971a015c96ce88f604c27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39614",
        "pageSeq": 39614
    },
    {
        "IDcode": 39615,
        "title": "白莉爱吃巧克力 - 安琪拉 Angela (King of Glory)",
        "cover": "https://telegra.ph/file/38b380391c27175737aab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39615",
        "pageSeq": 39615
    },
    {
        "IDcode": 39616,
        "title": "白莉爱吃巧克力 - 宵宫 Yoimiya (Genshin Impact)",
        "cover": "https://telegra.ph/file/6d213794ffe72a4070791.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39616",
        "pageSeq": 39616
    },
    {
        "IDcode": 39617,
        "title": "Nekokoyoshi 爆机少女喵小吉&金鱼✨kinngyo - 双子系列 从零开始異世界生活 Ram & Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/5c4090ac92370cbaf0514.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39617",
        "pageSeq": 39617
    },
    {
        "IDcode": 39618,
        "title": "Hane Ame - Nico Robin (One Piece)",
        "cover": "https://telegra.ph/file/7f354c3ded6720327b6d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39618",
        "pageSeq": 39618
    },
    {
        "IDcode": 39619,
        "title": "Aery Tiefling - Hatsune Miku Neko (Vocaloid)",
        "cover": "https://telegra.ph/file/740eb4319af16f4f65e3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39619",
        "pageSeq": 39619
    },
    {
        "IDcode": 39620,
        "title": "Aery Tiefling - Chika (Kaguya Sama: Love is war)",
        "cover": "https://telegra.ph/file/944c1ad693d35b4e3df99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39620",
        "pageSeq": 39620
    },
    {
        "IDcode": 39621,
        "title": "Potato Godzilla - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/de29add345db9266ce882.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39621",
        "pageSeq": 39621
    },
    {
        "IDcode": 39622,
        "title": "Nekokoyoshi 爆机少女喵小吉 – 密室监禁",
        "cover": "https://telegra.ph/file/4e075af578bdd844cd823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39622",
        "pageSeq": 39622
    },
    {
        "IDcode": 39623,
        "title": "Hane Ame - Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/284e78b00165e5b847c4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39623",
        "pageSeq": 39623
    },
    {
        "IDcode": 39624,
        "title": "Lady Melamori - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/1c539ac2e845cbdfc9851.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39624",
        "pageSeq": 39624
    },
    {
        "IDcode": 39625,
        "title": "KuukoW - Tight Bondange",
        "cover": "https://telegra.ph/file/e55324af1c58ccaf3562f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39625",
        "pageSeq": 39625
    },
    {
        "IDcode": 39626,
        "title": "Fluffy - Neko 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/76f4c0a1f7817d8d5cc7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39626",
        "pageSeq": 39626
    }
];
