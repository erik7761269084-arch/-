// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38303,
        "title": "Katta Ramos - Kurumi Imari (Bible Black)",
        "cover": "https://telegra.ph/file/de29f877c84d365a963f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38303",
        "pageSeq": 38303
    },
    {
        "IDcode": 38304,
        "title": "Beke Jacoba - Poison Ivy (Batman /DC Comics)",
        "cover": "https://telegra.ph/file/8ed8c95817fb717fd3869.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38304",
        "pageSeq": 38304
    },
    {
        "IDcode": 38305,
        "title": "Shimo Jeanne D'Arc/Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/58e9ec7066031c4db70d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38305",
        "pageSeq": 38305
    },
    {
        "IDcode": 38306,
        "title": "Mikomin - Ningguang (Genshin Impact)",
        "cover": "https://telegra.ph/file/6ed3e04392af801ec8f1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38306",
        "pageSeq": 38306
    },
    {
        "IDcode": 38307,
        "title": "UyUy - Saki-chan (The Naughty Succubus)",
        "cover": "https://telegra.ph/file/adf62fc4574f1748fee63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38307",
        "pageSeq": 38307
    },
    {
        "IDcode": 38308,
        "title": "UyUy - Melony (Pokémon Pocket Monster)",
        "cover": "https://telegra.ph/file/4cb27fa218925c91a020b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38308",
        "pageSeq": 38308
    },
    {
        "IDcode": 38309,
        "title": "Alina Becker - 2B Maid (Nier Autómata)",
        "cover": "https://telegra.ph/file/e9ae53ae843a1a02cc599.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38309",
        "pageSeq": 38309
    },
    {
        "IDcode": 38310,
        "title": "Alina Becker - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/e5b2e08ae482be63341da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38310",
        "pageSeq": 38310
    },
    {
        "IDcode": 38311,
        "title": "Arty Huang - Ereshkigal Bunny Lencery (Fate Grand Order)",
        "cover": "https://telegra.ph/file/190735c8c57cacafd447b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38311",
        "pageSeq": 38311
    },
    {
        "IDcode": 38312,
        "title": "UyUy - Tohru (Kobayashi-san)",
        "cover": "https://telegra.ph/file/ab202c615ab0d40b5b471.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38312",
        "pageSeq": 38312
    },
    {
        "IDcode": 38313,
        "title": "UyUy - Tifa Latex Nurse (Final Fantasy)",
        "cover": "https://telegra.ph/file/90c1f1d7512069c3f3a10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38313",
        "pageSeq": 38313
    },
    {
        "IDcode": 38314,
        "title": "Mikomin - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/b7d47aecf11445f19c71a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38314",
        "pageSeq": 38314
    },
    {
        "IDcode": 38315,
        "title": "Mikomin - Catherine Lingerie (Catherine)",
        "cover": "https://telegra.ph/file/22c594d6b25c916cd05b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38315",
        "pageSeq": 38315
    },
    {
        "IDcode": 38316,
        "title": "Kitkat - Honoka (Dead Or Alive)",
        "cover": "https://telegra.ph/file/96fe4c70e78304d437967.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38316",
        "pageSeq": 38316
    },
    {
        "IDcode": 38317,
        "title": "UyUy - D.VA (Overwatch)",
        "cover": "https://telegra.ph/file/85723dc3340fd3837317f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38317",
        "pageSeq": 38317
    },
    {
        "IDcode": 38318,
        "title": "Mizhimaoqiu - Cow-Girl Milk (Random Cosplay)",
        "cover": "https://telegra.ph/file/63d645c8b36d731ff1cd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38318",
        "pageSeq": 38318
    },
    {
        "IDcode": 38319,
        "title": "Liensue & Gumiho Arts - Saeko & Saya (School of The Dead)",
        "cover": "https://telegra.ph/file/bb9de69e71468b58b0fdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38319",
        "pageSeq": 38319
    },
    {
        "IDcode": 38320,
        "title": "Kitkat - Misaki (Dead or Alive)",
        "cover": "https://telegra.ph/file/4102292c86ec7e98e08f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38320",
        "pageSeq": 38320
    },
    {
        "IDcode": 38321,
        "title": "Kerrochi - Atalanta (Fate Apocrypha)",
        "cover": "https://telegra.ph/file/44fd9eb247039cd529fcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38321",
        "pageSeq": 38321
    },
    {
        "IDcode": 38322,
        "title": "Alina Becker - Tifa Lingerie (Final Fantasy)",
        "cover": "https://telegra.ph/file/e96731476b10ae252dd58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38322",
        "pageSeq": 38322
    },
    {
        "IDcode": 38323,
        "title": "Hinaughtya - Kakashi Lingerie (Naruto)",
        "cover": "https://telegra.ph/file/413445a306cb0966109dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38323",
        "pageSeq": 38323
    },
    {
        "IDcode": 38324,
        "title": "Amaimai - Chika (Kaguya-Sama: Love is War)",
        "cover": "https://telegra.ph/file/68b144eda5c478f857883.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38324",
        "pageSeq": 38324
    },
    {
        "IDcode": 38325,
        "title": "Hana Bunny - Flasher Bunny (Random Cosplay)",
        "cover": "https://telegra.ph/file/64bcae7a0e5174b58e889.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38325",
        "pageSeq": 38325
    },
    {
        "IDcode": 38326,
        "title": "Plant Lily - Twintail Lingerie (Model)",
        "cover": "https://telegra.ph/file/9ee3f2492392d2abcbb65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38326",
        "pageSeq": 38326
    },
    {
        "IDcode": 38327,
        "title": "Amy Fantasy - Inosuke (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/59ce79038616d4771ac38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38327",
        "pageSeq": 38327
    },
    {
        "IDcode": 38328,
        "title": "Hidori Rose - La Galissonniere (Azur Lane)",
        "cover": "https://telegra.ph/file/cfc28df01323cb750463e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38328",
        "pageSeq": 38328
    },
    {
        "IDcode": 38329,
        "title": "Beccadex - Kakashi Hatake (Naruto)",
        "cover": "https://telegra.ph/file/89e589673903808630e67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38329",
        "pageSeq": 38329
    },
    {
        "IDcode": 38330,
        "title": "Yurihime - Narmaya (Fate Grand Order)",
        "cover": "https://telegra.ph/file/267723f28283667062de9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38330",
        "pageSeq": 38330
    },
    {
        "IDcode": 38331,
        "title": "Byoru - Makima (Chainsawman)",
        "cover": "https://telegra.ph/file/e8cd05e642e58ca51bb1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38331",
        "pageSeq": 38331
    },
    {
        "IDcode": 38332,
        "title": "Yorkie - St. Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/0d9514c8392fd29a63abc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38332",
        "pageSeq": 38332
    },
    {
        "IDcode": 38333,
        "title": "Amy Fantasy - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/a6ff31c14ab1fb095cc5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38333",
        "pageSeq": 38333
    },
    {
        "IDcode": 38334,
        "title": "Joyce - Yanfei (Genshin Impact)",
        "cover": "https://telegra.ph/file/d1bb911902283a57f9577.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38334",
        "pageSeq": 38334
    },
    {
        "IDcode": 38335,
        "title": "Okita Rinka - Kurumi Takisaki (Date A Live)",
        "cover": "https://telegra.ph/file/dc605973e60742e90077e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38335",
        "pageSeq": 38335
    },
    {
        "IDcode": 38336,
        "title": "Hane Ame - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/f971afd060fa49b981b5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38336",
        "pageSeq": 38336
    },
    {
        "IDcode": 38337,
        "title": "Meenfox - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/19bce907f3f8e826f971e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38337",
        "pageSeq": 38337
    },
    {
        "IDcode": 38338,
        "title": "Virtual Geisha - Erza Scarlet (Fairy Tail)",
        "cover": "https://telegra.ph/file/06a931919e4999c818519.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38338",
        "pageSeq": 38338
    },
    {
        "IDcode": 38339,
        "title": "Hane Ame - Stocking Ice cream lady (Random Cosplay)",
        "cover": "https://telegra.ph/file/348c57a626fccb37dfafc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38339",
        "pageSeq": 38339
    },
    {
        "IDcode": 38340,
        "title": "Rin Higurashi - Kasumi (Dead or Alive)",
        "cover": "https://telegra.ph/file/9e3ecd7f978a7e999792e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38340",
        "pageSeq": 38340
    },
    {
        "IDcode": 38341,
        "title": "Shiro Kitsune - Makima (Chainsaw man)",
        "cover": "https://telegra.ph/file/dae8cbdbe83eb3840c61f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38341",
        "pageSeq": 38341
    },
    {
        "IDcode": 38342,
        "title": "Kuuko W - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/fec8eb0a60ffd8a54cd81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38342",
        "pageSeq": 38342
    },
    {
        "IDcode": 38343,
        "title": "Vinnegal - Mikasa Ackerman (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/120a4e6188d5c0c761a04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38343",
        "pageSeq": 38343
    },
    {
        "IDcode": 38344,
        "title": "Hane Ame - Scathach Bunny (Fate Grand Order)",
        "cover": "https://telegra.ph/file/e6edeb64c5748b080994b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38344",
        "pageSeq": 38344
    },
    {
        "IDcode": 38345,
        "title": "Yuno Shimizu - Tamamo (Fate Grand Order)",
        "cover": "https://telegra.ph/file/885b6f05a2517977336f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38345",
        "pageSeq": 38345
    },
    {
        "IDcode": 38346,
        "title": "Byoru - Mizuryu Kei Land",
        "cover": "https://telegra.ph/file/fa380c1b48886fb8776a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38346",
        "pageSeq": 38346
    },
    {
        "IDcode": 38347,
        "title": "Helly Valentine - Princess Zelda (Breath of the Wild)",
        "cover": "https://telegra.ph/file/e7a0f59da4bdd0b75a033.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38347",
        "pageSeq": 38347
    },
    {
        "IDcode": 38348,
        "title": "Chihiro Chang – Queen Bee Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/e86fa86cd02bc7320e52a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38348",
        "pageSeq": 38348
    },
    {
        "IDcode": 38349,
        "title": "Hane Ame - Sesshoui (Fate Grand Order)",
        "cover": "https://telegra.ph/file/acfb59734a91c0b344f31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38349",
        "pageSeq": 38349
    },
    {
        "IDcode": 38350,
        "title": "Shiro Kitsune - Saber Tomoe Gozen (Fate Grand Order)",
        "cover": "https://telegra.ph/file/746339ee876deab780e3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38350",
        "pageSeq": 38350
    },
    {
        "IDcode": 38351,
        "title": "Plant Lily - Maid/Neko (Random-Cosplay)",
        "cover": "https://telegra.ph/file/9eaa7820fd10bde22c52d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38351",
        "pageSeq": 38351
    },
    {
        "IDcode": 38352,
        "title": "Virtual Geisha - Ty Lee (Avatar The Last Airbender)",
        "cover": "https://telegra.ph/file/d1d2b7a56fee3605750ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38352",
        "pageSeq": 38352
    },
    {
        "IDcode": 38353,
        "title": "Dio Sixx - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/6ed6f7402c80947787e91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38353",
        "pageSeq": 38353
    },
    {
        "IDcode": 38354,
        "title": "一北亦北 - Heket (Destiny Child)",
        "cover": "https://telegra.ph/file/ab7522011d0ac5551f605.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38354",
        "pageSeq": 38354
    },
    {
        "IDcode": 38355,
        "title": "Hane Ame - Gangut Police (Azur Lane)",
        "cover": "https://telegra.ph/file/d1ff0b65334e5535dd4bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38355",
        "pageSeq": 38355
    },
    {
        "IDcode": 38356,
        "title": "Carry Key - Cerberus (Helltaker)",
        "cover": "https://telegra.ph/file/c6be9b4cebae00bfe2486.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38356",
        "pageSeq": 38356
    },
    {
        "IDcode": 38357,
        "title": "Momokun - Lady Tsunade (Naruto)",
        "cover": "https://telegra.ph/file/326ce168a9d89d6506a88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38357",
        "pageSeq": 38357
    },
    {
        "IDcode": 38358,
        "title": "Bambi - Neko/Maid (Cosplay Vol. 06)",
        "cover": "https://telegra.ph/file/1f4e2a6fc558e4817350b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38358",
        "pageSeq": 38358
    },
    {
        "IDcode": 38359,
        "title": "Bambi - Nurse (Cosplay Vol. 06)",
        "cover": "https://telegra.ph/file/32d23aa70e6c383f86ebc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38359",
        "pageSeq": 38359
    },
    {
        "IDcode": 38360,
        "title": "Potato Godzilla - Saber/Maid Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/5518c94a0ea59eeafbb96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38360",
        "pageSeq": 38360
    },
    {
        "IDcode": 38361,
        "title": "Potato Godzilla - Izumi Sagiri (EroManga Sensei)",
        "cover": "https://telegra.ph/file/d93e78f065c359ed74b97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38361",
        "pageSeq": 38361
    },
    {
        "IDcode": 38362,
        "title": "KuukoW - Eris (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/ad67687d9be3c8a17d196.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38362",
        "pageSeq": 38362
    },
    {
        "IDcode": 38363,
        "title": "SexFriend - Roxy (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/f4353670c43b9f1970b88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38363",
        "pageSeq": 38363
    },
    {
        "IDcode": 38364,
        "title": "Neppu - Jeanne Alter Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1f9f9bb1d3ccfc61509df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38364",
        "pageSeq": 38364
    },
    {
        "IDcode": 38365,
        "title": "Neppu - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/54d25c7af86a78c113e25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38365",
        "pageSeq": 38365
    },
    {
        "IDcode": 38366,
        "title": "Neppu - 細胞cell (Hataraku Saibou)",
        "cover": "https://telegra.ph/file/a731628b0ed51728de02c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38366",
        "pageSeq": 38366
    },
    {
        "IDcode": 38367,
        "title": "Megumi Koneko - Elizabeth Liones (Nanatsu no Taiza)",
        "cover": "https://telegra.ph/file/978c1538477a52f56ab63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38367",
        "pageSeq": 38367
    },
    {
        "IDcode": 38368,
        "title": "Mikomin - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/4acbc47f3ff9387bf3557.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38368",
        "pageSeq": 38368
    },
    {
        "IDcode": 38369,
        "title": "Potato Godzilla - Cow Girl/Milk (Random Cosplay)",
        "cover": "https://telegra.ph/file/ae7feed649e13068daa13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38369",
        "pageSeq": 38369
    },
    {
        "IDcode": 38370,
        "title": "Potato Godzilla - Katou Megumi (Saenai Heroine no Sodatekata)",
        "cover": "https://telegra.ph/file/260a58a46b222fdf1bd85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38370",
        "pageSeq": 38370
    },
    {
        "IDcode": 38371,
        "title": "Byoru - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/da41de65f187f27711060.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38371",
        "pageSeq": 38371
    },
    {
        "IDcode": 38372,
        "title": "Kalinka Fox - Alice (Alice in Wonderland)",
        "cover": "https://telegra.ph/file/43ab4453a04b645117cd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38372",
        "pageSeq": 38372
    },
    {
        "IDcode": 38373,
        "title": "Helly Valentine - Mitsuri Kanroji (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/bf7fbf9f26f4bbed9dde9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38373",
        "pageSeq": 38373
    },
    {
        "IDcode": 38374,
        "title": "Hane Ame - Artoria Lancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/dbfee513c83060a104a5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38374",
        "pageSeq": 38374
    },
    {
        "IDcode": 38375,
        "title": "G44不会受伤 - Maid Blade (Random Cosplay)",
        "cover": "https://telegra.ph/file/d58270817bf34f47f337a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38375",
        "pageSeq": 38375
    },
    {
        "IDcode": 38376,
        "title": "Momokun - Mysterious Heroine X (Fate Grand Order)",
        "cover": "https://telegra.ph/file/8e0a74db63639e876e776.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38376",
        "pageSeq": 38376
    },
    {
        "IDcode": 38377,
        "title": "Hidori Rose - Kokoro (Princess Connect)",
        "cover": "https://telegra.ph/file/40ce13c5845efc04ff1ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38377",
        "pageSeq": 38377
    },
    {
        "IDcode": 38378,
        "title": "Hane Ame - Nyotengu (Dead or Alive)",
        "cover": "https://telegra.ph/file/0a8893f1236b6c98ff8e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38378",
        "pageSeq": 38378
    },
    {
        "IDcode": 38379,
        "title": "Hane Ame - Royal Bunny Lancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/68fd08d75aafb27bff003.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38379",
        "pageSeq": 38379
    },
    {
        "IDcode": 38380,
        "title": "Hidori Rose - Nero Claudius (Fate Extra Last/Fate Grand Order)",
        "cover": "https://telegra.ph/file/3b5ec99c8667594b3e344.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38380",
        "pageSeq": 38380
    },
    {
        "IDcode": 38381,
        "title": "Azami - Black Lencery (Model)",
        "cover": "https://telegra.ph/file/fa582394c7b427b8e3487.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38381",
        "pageSeq": 38381
    },
    {
        "IDcode": 38382,
        "title": "Azami - Mashu Apron (Fate Grand Order)",
        "cover": "https://telegra.ph/file/341567030a3c2a42343e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38382",
        "pageSeq": 38382
    },
    {
        "IDcode": 38383,
        "title": "Píaloof - SpiderGwen/Gwen Stacy (Spiderman)",
        "cover": "https://telegra.ph/file/39f97f15474a188c2d27e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38383",
        "pageSeq": 38383
    },
    {
        "IDcode": 38384,
        "title": "Nadya Sonika - Kakashi Hatake (Naruo)",
        "cover": "https://telegra.ph/file/c5bdec776fb4de2413419.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38384",
        "pageSeq": 38384
    },
    {
        "IDcode": 38385,
        "title": "一北亦北 - Elfo de la Flor (Random Cosplay)",
        "cover": "https://telegra.ph/file/1a0a385bb40e36f12dbcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38385",
        "pageSeq": 38385
    },
    {
        "IDcode": 38387,
        "title": "KuukoW - Yukizaki Mizuki (Mahou Kaiju)",
        "cover": "https://telegra.ph/file/e4e32085a2048d0e9f6b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38387",
        "pageSeq": 38387
    },
    {
        "IDcode": 38388,
        "title": "Baegle - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/408c4c99b0dd7d309d781.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38388",
        "pageSeq": 38388
    },
    {
        "IDcode": 38389,
        "title": "UyUy - DVA Cop (Ovewatch)",
        "cover": "https://telegra.ph/file/ed97dfe7788805260af3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38389",
        "pageSeq": 38389
    },
    {
        "IDcode": 38390,
        "title": "UyUy & Sunnyvier - Gawr Gura & Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/04ce977ae2719e555c45a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38390",
        "pageSeq": 38390
    },
    {
        "IDcode": 38391,
        "title": "Lovely Speacekitten - Mikasa Ackerman (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/886667a0bd755dddb635a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38391",
        "pageSeq": 38391
    },
    {
        "IDcode": 38392,
        "title": "Hane Ame - Nyotengu (Dead or Alive)",
        "cover": "https://telegra.ph/file/237ac883e938d27e6271d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38392",
        "pageSeq": 38392
    },
    {
        "IDcode": 38393,
        "title": "Hane Ame - Nyotengu Cat (Dead or Alive)",
        "cover": "https://telegra.ph/file/0254472aea912e14b629f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38393",
        "pageSeq": 38393
    },
    {
        "IDcode": 38394,
        "title": "Lovely Speacekitten - Papi The Harpy (Monster Musume  No Iru Nichijou)",
        "cover": "https://telegra.ph/file/0a05c713766ee79ce00ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38394",
        "pageSeq": 38394
    },
    {
        "IDcode": 38395,
        "title": "KuukoW - Uruha Rushia (Hololive/Vtuber)",
        "cover": "https://telegra.ph/file/29b636daa15758f7d8dc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38395",
        "pageSeq": 38395
    },
    {
        "IDcode": 38396,
        "title": "Valentina Kryp - Suzuka Gozen Christmas (Fate Grand Order)",
        "cover": "https://telegra.ph/file/443d9b46f4c38678d595e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38396",
        "pageSeq": 38396
    },
    {
        "IDcode": 38397,
        "title": "Byoru - Honoka Altermis Swimsuit (Dead Or Alive)",
        "cover": "https://telegra.ph/file/a5b9c84e077f5d52ba2a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38397",
        "pageSeq": 38397
    },
    {
        "IDcode": 38400,
        "title": "Yoshinobi - Rem Christmas (Re: Zero)",
        "cover": "https://telegra.ph/file/3d459665582caa4ff33a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38400",
        "pageSeq": 38400
    },
    {
        "IDcode": 38401,
        "title": "Hana Bunny - 2B Boudoir (Nier Autómata)",
        "cover": "https://telegra.ph/file/058210a9258882d205e45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38401",
        "pageSeq": 38401
    },
    {
        "IDcode": 38402,
        "title": "Valentina Kryp - Bayonetta (Bayonetta Game)",
        "cover": "https://telegra.ph/file/2acde897c318930e8bcea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38402",
        "pageSeq": 38402
    },
    {
        "IDcode": 38403,
        "title": "Mikomi Hokina, Megumi Koneko, Gumiho Arts & Kerocchi - Boku no Hero Academia",
        "cover": "https://telegra.ph/file/7e0916ab822497439214d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38403",
        "pageSeq": 38403
    },
    {
        "IDcode": 38404,
        "title": "Kang In-Kyung - Maid (Random-Cosplay)",
        "cover": "https://telegra.ph/file/e9220066e1a8d78b8ef96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38404",
        "pageSeq": 38404
    },
    {
        "IDcode": 38405,
        "title": "Kang In-kyung - Miko/Summoner Girl (Random Cosplay)",
        "cover": "https://telegra.ph/file/bc74fa88badab11545f0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38405",
        "pageSeq": 38405
    }
];
