// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38203,
        "title": "Miholy - Megane/School (Random Cosplay)",
        "cover": "https://telegra.ph/file/67e5a56985c4abc167987.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38203",
        "pageSeq": 38203
    },
    {
        "IDcode": 38204,
        "title": "Alina Becker - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/34d7fea9a08b100b84a58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38204",
        "pageSeq": 38204
    },
    {
        "IDcode": 38205,
        "title": "Hane Ame - Chapayev (Azur Lane)",
        "cover": "https://telegra.ph/file/dd77d8fb28a0b582fea8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38205",
        "pageSeq": 38205
    },
    {
        "IDcode": 38206,
        "title": "Cute Caterpillar - Historia Reiss (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/ffba13a6251bb6988bab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38206",
        "pageSeq": 38206
    },
    {
        "IDcode": 38207,
        "title": "蠢沫沫 Celestine V-C (Kuroinu)",
        "cover": "https://telegra.ph/file/e8d276c7ca57d246e2bc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38207",
        "pageSeq": 38207
    },
    {
        "IDcode": 38208,
        "title": "蠢沫沫 Celestine V-B (Kuroinu)",
        "cover": "https://telegra.ph/file/bfcac540e31b812c9c1e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38208",
        "pageSeq": 38208
    },
    {
        "IDcode": 38209,
        "title": "蠢沫沫 Celestine V-A (Kuroinu)",
        "cover": "https://telegra.ph/file/d258f686778c6489a4c3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38209",
        "pageSeq": 38209
    },
    {
        "IDcode": 38210,
        "title": "Ain Nguyen - Sam/Samsung Chan (Random Cosplay)",
        "cover": "https://telegra.ph/file/f050c48d1840869a06b31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38210",
        "pageSeq": 38210
    },
    {
        "IDcode": 38211,
        "title": "Potato Godzilla - Neko (Random Cosplay)",
        "cover": "https://telegra.ph/file/3485781e09d9f9804f251.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38211",
        "pageSeq": 38211
    },
    {
        "IDcode": 38212,
        "title": "Potato Godzilla - Gamer (Random Cosplay)",
        "cover": "https://telegra.ph/file/2dffc9317ed030a4e07bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38212",
        "pageSeq": 38212
    },
    {
        "IDcode": 38213,
        "title": "Potato Godzilla - Lingerie (Model)",
        "cover": "https://telegra.ph/file/0834cfd67ff5f38b5aba9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38213",
        "pageSeq": 38213
    },
    {
        "IDcode": 38214,
        "title": "Yurihime - W (Arknights)",
        "cover": "https://telegra.ph/file/fc0297be14285f40b0e41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38214",
        "pageSeq": 38214
    },
    {
        "IDcode": 38215,
        "title": "KuukoW - Kurumi Tokisaki (Date A Live)",
        "cover": "https://telegra.ph/file/07c6e13cf7d1f5fa8873e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38215",
        "pageSeq": 38215
    },
    {
        "IDcode": 38216,
        "title": "念念_Reminder - 大凤旗袍_Cheongsam",
        "cover": "https://telegra.ph/file/2f7212828233d6ff1a627.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38216",
        "pageSeq": 38216
    },
    {
        "IDcode": 38217,
        "title": "Bambi - St. Louis V1 (Azur Lane)",
        "cover": "https://telegra.ph/file/a73dc2dc92eeb33cd9990.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38217",
        "pageSeq": 38217
    },
    {
        "IDcode": 38218,
        "title": "Bambi - St. Louis V2 (Azur Lane)",
        "cover": "https://telegra.ph/file/326590635b86621609871.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38218",
        "pageSeq": 38218
    },
    {
        "IDcode": 38219,
        "title": "Azami - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/038f21f7f03e3ff5ee0ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38219",
        "pageSeq": 38219
    },
    {
        "IDcode": 38220,
        "title": "Hane Ame - Esdeath (Akame Ga Kill)",
        "cover": "https://telegra.ph/file/dd0c62a8aa71112d990cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38220",
        "pageSeq": 38220
    },
    {
        "IDcode": 38221,
        "title": "Hidori Rose - Sakura Futaba (Shin Megami Tensei V)",
        "cover": "https://telegra.ph/file/9cadb9c545da656d6b781.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38221",
        "pageSeq": 38221
    },
    {
        "IDcode": 38222,
        "title": "Tsuki Desu - Elizabeth Liones (Nanatsu No Taiza)",
        "cover": "https://telegra.ph/file/54625d3260ed192bf7d91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38222",
        "pageSeq": 38222
    },
    {
        "IDcode": 38223,
        "title": "Hidori Rose - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/52294797f8b00b12a93ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38223",
        "pageSeq": 38223
    },
    {
        "IDcode": 38224,
        "title": "Virtual Geisha - Nezuko ( Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/991eda026887c44bd56e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38224",
        "pageSeq": 38224
    },
    {
        "IDcode": 38225,
        "title": "Hana Bunny - Eve (Shumatsu No Valkirie)",
        "cover": "https://telegra.ph/file/590e73c17756fc481749a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38225",
        "pageSeq": 38225
    },
    {
        "IDcode": 38226,
        "title": "Lillybet Rose - Quiet (Metal Gear Solid 5)",
        "cover": "https://telegra.ph/file/3e37b86508cf27c660312.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38226",
        "pageSeq": 38226
    },
    {
        "IDcode": 38227,
        "title": "Plant Lily - Maid Mask (High-Rise Invasion)",
        "cover": "https://telegra.ph/file/f7e9f785a110a1e8515c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38227",
        "pageSeq": 38227
    },
    {
        "IDcode": 38228,
        "title": "Maria Nagai - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/d04ba10b60746b60cb1d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38228",
        "pageSeq": 38228
    },
    {
        "IDcode": 38229,
        "title": "Shui Miao Aqua - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/cc6b015bff8ae201fa768.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38229",
        "pageSeq": 38229
    },
    {
        "IDcode": 38230,
        "title": "Shui Miao Aqua - Eula Lingerie (Genshin Impact)",
        "cover": "https://telegra.ph/file/5a157c5ec8df73a8e84f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38230",
        "pageSeq": 38230
    },
    {
        "IDcode": 38231,
        "title": "Azami - Amelia Watson (Hololive/Vtuber)",
        "cover": "https://telegra.ph/file/a11aaa32fb8469088acdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38231",
        "pageSeq": 38231
    },
    {
        "IDcode": 38232,
        "title": "UyUy - Zero Two Swimsuit (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/d5e7361496f9c5ab4904d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38232",
        "pageSeq": 38232
    },
    {
        "IDcode": 38233,
        "title": "Potato Godzilla - Yoshino ( Date A Live)",
        "cover": "https://telegra.ph/file/f7df0cede8da8e5b637aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38233",
        "pageSeq": 38233
    },
    {
        "IDcode": 38234,
        "title": "Vandych - D.Va Black Cat (Overwatch)",
        "cover": "https://telegra.ph/file/075f52e34a2de41db227c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38234",
        "pageSeq": 38234
    },
    {
        "IDcode": 38235,
        "title": "Meryl Sama - Mikasa Ackerman (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/c34bf618727c7f46adc26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38235",
        "pageSeq": 38235
    },
    {
        "IDcode": 38236,
        "title": "Azami - Samsung Sam/Samsung Chan (Random Cosplay)",
        "cover": "https://telegra.ph/file/7306ff010ef046740f0e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38236",
        "pageSeq": 38236
    },
    {
        "IDcode": 38237,
        "title": "Kitkat Cosplay 9 - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/31dc58993ab6a9348f0e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38237",
        "pageSeq": 38237
    },
    {
        "IDcode": 38238,
        "title": "Ain Nguyen - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/d890a1b0d6deb7ec76309.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38238",
        "pageSeq": 38238
    },
    {
        "IDcode": 38239,
        "title": "六碗鱼子酱 - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/2d9c88fcee19413f20886.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38239",
        "pageSeq": 38239
    },
    {
        "IDcode": 38240,
        "title": "Azami - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/d6bc471b076d86cfaf049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38240",
        "pageSeq": 38240
    },
    {
        "IDcode": 38241,
        "title": "Vandych - Draenei Alliance/Succubus (World of Warcraft)",
        "cover": "https://telegra.ph/file/6720d20d747ff7e1bbbe9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38241",
        "pageSeq": 38241
    },
    {
        "IDcode": 38242,
        "title": "Okada Yui - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/8ed1d4bf3d13e734398ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38242",
        "pageSeq": 38242
    },
    {
        "IDcode": 38243,
        "title": "Kitkat - Atago (Azur Lane)",
        "cover": "https://telegra.ph/file/20995b2cf1ce32e44d0df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38243",
        "pageSeq": 38243
    },
    {
        "IDcode": 38244,
        "title": "Hana Bunny - Wet Shirt Casual (Model)",
        "cover": "https://telegra.ph/file/17977a9ccc2062829ee5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38244",
        "pageSeq": 38244
    },
    {
        "IDcode": 38245,
        "title": "Hana Bunny - Casual Swimsuit (Model)",
        "cover": "https://telegra.ph/file/09703e5c1a0683ac74ba7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38245",
        "pageSeq": 38245
    },
    {
        "IDcode": 38246,
        "title": "Hana Bunny - Casual GYM (Model)",
        "cover": "https://telegra.ph/file/2d7c85267aa2566ea1af7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38246",
        "pageSeq": 38246
    },
    {
        "IDcode": 38247,
        "title": "Chameleahn - Atom Eve (Invisible)",
        "cover": "https://telegra.ph/file/f3a379c18f4d74576efa6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38247",
        "pageSeq": 38247
    },
    {
        "IDcode": 38248,
        "title": "Kitkat Cosplay 9 - Jeanne D'Arc Alter/Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/0b76d3e8d794fb8ebc81d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38248",
        "pageSeq": 38248
    },
    {
        "IDcode": 38249,
        "title": "KittyxKum - Nagato (Azur Lane)",
        "cover": "https://telegra.ph/file/167547e3c60a7b838160f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38249",
        "pageSeq": 38249
    },
    {
        "IDcode": 38250,
        "title": "Mikomin - Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/4d555e463c959203694c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38250",
        "pageSeq": 38250
    },
    {
        "IDcode": 38251,
        "title": "Nisa - 乖张肚兜\t(Random Cosplay)",
        "cover": "https://telegra.ph/file/2476dd712f8b25a05d861.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38251",
        "pageSeq": 38251
    },
    {
        "IDcode": 38252,
        "title": "Sally Dorasnow - Gawr Gura Swimsuit/Bikini (Hololive/Vetuber)",
        "cover": "https://telegra.ph/file/aa1f8ab4eff94d58c0e9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38252",
        "pageSeq": 38252
    },
    {
        "IDcode": 38253,
        "title": "UyUy - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/c4fc54607701d75f81880.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38253",
        "pageSeq": 38253
    },
    {
        "IDcode": 38254,
        "title": "Hane Ame - Quinella (Sword Art Online)",
        "cover": "https://telegra.ph/file/a8eca5c7a838063c14f6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38254",
        "pageSeq": 38254
    },
    {
        "IDcode": 38255,
        "title": "皮皮奶&周叽 - Maid/Bunny (Random Cosplay)",
        "cover": "https://telegra.ph/file/34775a40cd91cf4939061.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38255",
        "pageSeq": 38255
    },
    {
        "IDcode": 38256,
        "title": "一直肉酱啊 - Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/e5edf03ccb55659a3a90b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38256",
        "pageSeq": 38256
    },
    {
        "IDcode": 38257,
        "title": "Lada Lyumos - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c6bd4838be8e0bbe7d787.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38257",
        "pageSeq": 38257
    },
    {
        "IDcode": 38258,
        "title": "Alice Delishe - Cow Girl/Milk (Random Cosplay)",
        "cover": "https://telegra.ph/file/0aa68623242db3a57692b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38258",
        "pageSeq": 38258
    },
    {
        "IDcode": 38259,
        "title": "Shiro Kitsune - 2B Cheongsam (Nier Automata)",
        "cover": "https://telegra.ph/file/55731774a1ae780027db3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38259",
        "pageSeq": 38259
    },
    {
        "IDcode": 38260,
        "title": "Gumiho Arts - Rem Lingerie (Re: Zero)",
        "cover": "https://telegra.ph/file/38279b3b3f857419b10ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38260",
        "pageSeq": 38260
    },
    {
        "IDcode": 38261,
        "title": "Moondays - Shinobu (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/e7e435ffffb5abb3b82fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38261",
        "pageSeq": 38261
    },
    {
        "IDcode": 38262,
        "title": "Evenink - Matoi Ryoko (Kill la Kill)",
        "cover": "https://telegra.ph/file/4eb407782bc672508d7ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38262",
        "pageSeq": 38262
    },
    {
        "IDcode": 38263,
        "title": "Bambi - Uss Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/49e35dffc82d3907c631d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38263",
        "pageSeq": 38263
    },
    {
        "IDcode": 38264,
        "title": "周叽 - Rei Ayanami (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/2a70ea66c6fb1a4ac27b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38264",
        "pageSeq": 38264
    },
    {
        "IDcode": 38265,
        "title": "阿包Abao - Fischl (Genshin Impact)",
        "cover": "https://telegra.ph/file/57a69d369b661027ab695.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38265",
        "pageSeq": 38265
    },
    {
        "IDcode": 38266,
        "title": "Gumiho Arts - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/c1b6bc27d12ff9e04ed8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38266",
        "pageSeq": 38266
    },
    {
        "IDcode": 38267,
        "title": "Hane Ame - Asagi Igawa (Taimanin Asagi/Mahou Kaiju Series)",
        "cover": "https://telegra.ph/file/cdb82067d560de9c5a7dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38267",
        "pageSeq": 38267
    },
    {
        "IDcode": 38268,
        "title": "Shiro Kitsune - Shuten Douji Assassin (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1a381cc522275c3e8a0e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38268",
        "pageSeq": 38268
    },
    {
        "IDcode": 38269,
        "title": "@factory - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/cd9ab506028d38fafc30f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38269",
        "pageSeq": 38269
    },
    {
        "IDcode": 38270,
        "title": "Azami - Prinz Heinrich (Azur Lane)",
        "cover": "https://telegra.ph/file/c74e61b4d22f8e7b63ee2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38270",
        "pageSeq": 38270
    },
    {
        "IDcode": 38271,
        "title": "Maruwins - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/4b68168fcc7bc5b025321.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38271",
        "pageSeq": 38271
    },
    {
        "IDcode": 38272,
        "title": "星之迟迟 - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/89fa0df2fe93a21823725.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38272",
        "pageSeq": 38272
    },
    {
        "IDcode": 38273,
        "title": "Hidori Rose - Honolulu (Azur Lane)",
        "cover": "https://telegra.ph/file/ddb1f9d904f0cd0c1c518.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38273",
        "pageSeq": 38273
    },
    {
        "IDcode": 38274,
        "title": "Hane Ame - Rangiku Matsumoto (Bleach)",
        "cover": "https://telegra.ph/file/457e7a5b1cc84b0730f9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38274",
        "pageSeq": 38274
    },
    {
        "IDcode": 38275,
        "title": "疯猫ss - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/4a4d5ea379597ff0a0891.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38275",
        "pageSeq": 38275
    },
    {
        "IDcode": 38276,
        "title": "Vinnegal - Reika Shimohira (Gantz)",
        "cover": "https://telegra.ph/file/48048ed053ff8dccbde33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38276",
        "pageSeq": 38276
    },
    {
        "IDcode": 38277,
        "title": "Shui Miao Aqua - Formidable/Marine (Azur Lane)",
        "cover": "https://telegra.ph/file/3af797c85d96ce221066d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38277",
        "pageSeq": 38277
    },
    {
        "IDcode": 38278,
        "title": "おみみOmimi - Kurumi Tokisaki (Date A Live)",
        "cover": "https://telegra.ph/file/20818f4839194b7fdb6e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38278",
        "pageSeq": 38278
    },
    {
        "IDcode": 38279,
        "title": "Meryl Sama - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/e517f345b6b74ee7b04cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38279",
        "pageSeq": 38279
    },
    {
        "IDcode": 38280,
        "title": "Xia Gege - Meiko Shiraki (Prisión School)",
        "cover": "https://telegra.ph/file/ab730a6392cf1663505a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38280",
        "pageSeq": 38280
    },
    {
        "IDcode": 38281,
        "title": "Hana Bunny & Hane Ame - Ryas & Akeno (School DxD)",
        "cover": "https://telegra.ph/file/6b5ea148c027d816ba560.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38281",
        "pageSeq": 38281
    },
    {
        "IDcode": 38282,
        "title": "雲少女写真 - 写SchoolGirl (Random Cosplay)",
        "cover": "https://telegra.ph/file/b5349f2decdb17c8c1fb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38282",
        "pageSeq": 38282
    },
    {
        "IDcode": 38283,
        "title": "少女映画 - Tokisaki Kurumi (Date a Live)",
        "cover": "https://telegra.ph/file/d092f26c8270c67c36d0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38283",
        "pageSeq": 38283
    },
    {
        "IDcode": 38284,
        "title": "蠢沫沫 - Uzuki Momoko (Original Character)",
        "cover": "https://telegra.ph/file/fe78f501c7183a92ecb4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38284",
        "pageSeq": 38284
    },
    {
        "IDcode": 38285,
        "title": "Byoru - Kaine (Nier Replicant)",
        "cover": "https://telegra.ph/file/4fea48e3a81f8106c2a85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38285",
        "pageSeq": 38285
    },
    {
        "IDcode": 38286,
        "title": "Hane Ame - Chitose Itou (Iya na Kao sare nagara Opantsu Misete Moraitai)",
        "cover": "https://telegra.ph/file/7a2b860417c89c58221f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38286",
        "pageSeq": 38286
    },
    {
        "IDcode": 38287,
        "title": "Sara Mei Kasai - 2B Lingerie (Nier Autómata)",
        "cover": "https://telegra.ph/file/31a78a8e0d6d8165fae97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38287",
        "pageSeq": 38287
    },
    {
        "IDcode": 38288,
        "title": "Mikomi Hokina - Raven (Teen Titans)",
        "cover": "https://telegra.ph/file/b93bf8766ad766f62ac15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38288",
        "pageSeq": 38288
    },
    {
        "IDcode": 38289,
        "title": "Mikomi Hokina - Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/913d8e418acf879b369da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38289",
        "pageSeq": 38289
    },
    {
        "IDcode": 38290,
        "title": "Nagisa - Honoka (Dead Or Alive)",
        "cover": "https://telegra.ph/file/2f1801a7afc6d14cb8663.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38290",
        "pageSeq": 38290
    },
    {
        "IDcode": 38291,
        "title": "KuukoW - Klee (Genshin Impact)",
        "cover": "https://telegra.ph/file/e74da13fa4552f428b54b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38291",
        "pageSeq": 38291
    },
    {
        "IDcode": 38292,
        "title": "蜜汁猫裘 - Alien异型 (Random Cosplay)",
        "cover": "https://telegra.ph/file/eba6f408396a19626c073.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38292",
        "pageSeq": 38292
    },
    {
        "IDcode": 38293,
        "title": "Sakurai Nei Nei - Maid (Random Cosplay)",
        "cover": "https://telegra.ph/file/12c2b2d44d447d80f72d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38293",
        "pageSeq": 38293
    },
    {
        "IDcode": 38294,
        "title": "Sally Dorasnow - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/6acd0224af1471b13c97e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38294",
        "pageSeq": 38294
    },
    {
        "IDcode": 38295,
        "title": "Hane Ame - Tifa Bunny (Final Fantasy)",
        "cover": "https://telegra.ph/file/b7d92c68b53870a2c3c2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38295",
        "pageSeq": 38295
    },
    {
        "IDcode": 38296,
        "title": "Mikomin - Sakura Haruno ( Naruto Shippuden)",
        "cover": "https://telegra.ph/file/8f6a4038437e4dc9fca86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38296",
        "pageSeq": 38296
    },
    {
        "IDcode": 38297,
        "title": "Hidori Rose - Ereshkigal (Fate Grand Order)",
        "cover": "https://telegra.ph/file/c4532dde05b5368837407.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38297",
        "pageSeq": 38297
    },
    {
        "IDcode": 38298,
        "title": "Pettie - Menat (Street Fighter)",
        "cover": "https://telegra.ph/file/5c99d2dd1254e666608b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38298",
        "pageSeq": 38298
    },
    {
        "IDcode": 38299,
        "title": "Potato Godzilla - Bath But/Satayhome (Random)",
        "cover": "https://telegra.ph/file/4d25506d4d6488092ba94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38299",
        "pageSeq": 38299
    },
    {
        "IDcode": 38300,
        "title": "Kayla Erin - Lola Bunny (Loney Toons)",
        "cover": "https://telegra.ph/file/c5e1b37abc930b23eaf3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38300",
        "pageSeq": 38300
    },
    {
        "IDcode": 38301,
        "title": "Hane Ame -細胞cell (Hataraku Saibou)",
        "cover": "https://telegra.ph/file/dd48483c2a9fd0f08fe3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38301",
        "pageSeq": 38301
    },
    {
        "IDcode": 38302,
        "title": "Bambi - Riamu Yumei (Idolmaster)",
        "cover": "https://telegra.ph/file/67225c0390f38e051b2db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38302",
        "pageSeq": 38302
    }
];
