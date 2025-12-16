// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39218,
        "title": "Dio Sixx - Morticia Addams (The Addams Family)",
        "cover": "https://telegra.ph/file/95855af443a863c0be828.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39218",
        "pageSeq": 39218
    },
    {
        "IDcode": 39219,
        "title": "Sakurai - Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/daa9348821345e9084cef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39219",
        "pageSeq": 39219
    },
    {
        "IDcode": 39220,
        "title": "Sally Dorasnow - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/0620d08d89af9d672faf2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39220",
        "pageSeq": 39220
    },
    {
        "IDcode": 39221,
        "title": "Carry Key - Katarina (League of Legends)",
        "cover": "https://telegra.ph/file/46612d1bae0d996e49ade.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39221",
        "pageSeq": 39221
    },
    {
        "IDcode": 39222,
        "title": "マキ●さんの犬になりたい - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/0afa361a3dfef31bb250d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39222",
        "pageSeq": 39222
    },
    {
        "IDcode": 39223,
        "title": "Yoshinobi - Ganyu Succubus (Genshin Impac)",
        "cover": "https://telegra.ph/file/d84cf82cac4b17bf81456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39223",
        "pageSeq": 39223
    },
    {
        "IDcode": 39224,
        "title": "Kalinka Fox - Mileena (Mortal Kombat)",
        "cover": "https://telegra.ph/file/7f9e8ae30ffc98b99fc17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39224",
        "pageSeq": 39224
    },
    {
        "IDcode": 39225,
        "title": "UyUy - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/6052fe04340438be4bd9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39225",
        "pageSeq": 39225
    },
    {
        "IDcode": 39226,
        "title": "Sally Dorasnow - Fischl (Genshin Impact)",
        "cover": "https://telegra.ph/file/2800d6e81ba2a58ed3e68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39226",
        "pageSeq": 39226
    },
    {
        "IDcode": 39227,
        "title": "Sally Dorasnow - Mikoto Misaka (Toaru Project)",
        "cover": "https://telegra.ph/file/0bc74bdc025988af12352.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39227",
        "pageSeq": 39227
    },
    {
        "IDcode": 39228,
        "title": "Byoru - Raiden Shogun Maid (Genshin Impact)",
        "cover": "https://telegra.ph/file/5c485e806d2eaf6149fd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39228",
        "pageSeq": 39228
    },
    {
        "IDcode": 39229,
        "title": "Byoru - Yelan Bunny (Genshin Impact)",
        "cover": "https://telegra.ph/file/bdc7b44531f41afbac89f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39229",
        "pageSeq": 39229
    },
    {
        "IDcode": 39230,
        "title": "一笑芳香沁 - Olga 黑兽 (Kuroinu)",
        "cover": "https://telegra.ph/file/87d397e6134afc643f90d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39230",
        "pageSeq": 39230
    },
    {
        "IDcode": 39231,
        "title": "Yuriko DxD - Raven (Teen Titans)",
        "cover": "https://telegra.ph/file/dec05ec014b72271d3e3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39231",
        "pageSeq": 39231
    },
    {
        "IDcode": 39232,
        "title": "Byoru - Raiden Maid (Genshin Impact)",
        "cover": "https://telegra.ph/file/29e15281dc7629e30c960.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39232",
        "pageSeq": 39232
    },
    {
        "IDcode": 39233,
        "title": "Hidori Rose - Shinobu Bunny (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/9a7e9cbe4d4955bd3dcd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39233",
        "pageSeq": 39233
    },
    {
        "IDcode": 39234,
        "title": "秋和柯基 - 风息地牢 Mazmorra (Model)",
        "cover": "https://telegra.ph/file/409f2377002bbdf10c612.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39234",
        "pageSeq": 39234
    },
    {
        "IDcode": 39235,
        "title": "Akemi - N. 18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/e6520b1375679f65bca41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39235",
        "pageSeq": 39235
    },
    {
        "IDcode": 39236,
        "title": "Rocksy Light - Bettie Pina",
        "cover": "https://telegra.ph/file/e580fd2dfc71db14efa8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39236",
        "pageSeq": 39236
    },
    {
        "IDcode": 39237,
        "title": "Arya - Nero (Fate Grand Order)",
        "cover": "https://telegra.ph/file/648d735a664da3888b2c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39237",
        "pageSeq": 39237
    },
    {
        "IDcode": 39238,
        "title": "秋和柯基 - 推进之王 Siege (Arknight)",
        "cover": "https://telegra.ph/file/f0f72a5a38f848a5106e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39238",
        "pageSeq": 39238
    },
    {
        "IDcode": 39239,
        "title": "Okita Rinka - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/80657bcc44a77c639940b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39239",
        "pageSeq": 39239
    },
    {
        "IDcode": 39240,
        "title": "Nekokoyoshi 爆机少女喵小吉 - Inori Yuzuriha (Guilty Crown)",
        "cover": "https://telegra.ph/file/fd917508f63adb379629a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39240",
        "pageSeq": 39240
    },
    {
        "IDcode": 39241,
        "title": "Queenie - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/ff65dc901cc1180effd53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39241",
        "pageSeq": 39241
    },
    {
        "IDcode": 39242,
        "title": "六味帝皇酱 - 洛丽塔 Lolita",
        "cover": "https://telegra.ph/file/96d93bfbd6e5b5c18beae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39242",
        "pageSeq": 39242
    },
    {
        "IDcode": 39243,
        "title": "橙子喵酱 - 索拉卡 Soraka (League Of Legends)",
        "cover": "https://telegra.ph/file/18ef78efa3d37f89075e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39243",
        "pageSeq": 39243
    },
    {
        "IDcode": 39244,
        "title": "Byoru - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/b52deb51e62c9d9ea878a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39244",
        "pageSeq": 39244
    },
    {
        "IDcode": 39245,
        "title": "Mikomi Hokina - Shimakaze (Kantai Collection)",
        "cover": "https://telegra.ph/file/a7068bd7a1561180a8569.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39245",
        "pageSeq": 39245
    },
    {
        "IDcode": 39246,
        "title": "Yoshinobi - Supersonico Leotard",
        "cover": "https://telegra.ph/file/734fcb8570f8b7ee7f438.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39246",
        "pageSeq": 39246
    },
    {
        "IDcode": 39247,
        "title": "Helly Valentine - 2B (Nier: Automata)",
        "cover": "https://telegra.ph/file/2ff78d2781168c6127136.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39247",
        "pageSeq": 39247
    },
    {
        "IDcode": 39248,
        "title": "YaoYaoQwQ - Gawr Gura (Vtuber/Hololive)",
        "cover": "https://telegra.ph/file/c45130680e16a8ef75176.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39248",
        "pageSeq": 39248
    },
    {
        "IDcode": 39249,
        "title": "Yuzu Pyon - 2B (Nier: Automata)",
        "cover": "https://telegra.ph/file/963bfd9758f5e9a40ceaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39249",
        "pageSeq": 39249
    },
    {
        "IDcode": 39250,
        "title": "Chonoblack - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/4b215a8a48fabaecd3654.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39250",
        "pageSeq": 39250
    },
    {
        "IDcode": 39251,
        "title": "Akemi - Mirko (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/592363d33512af6124f9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39251",
        "pageSeq": 39251
    },
    {
        "IDcode": 39252,
        "title": "Ino Cosplayer - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/d22755c28c65d46c14b27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39252",
        "pageSeq": 39252
    },
    {
        "IDcode": 39253,
        "title": "Hane Ame - Lilliel (2.5 Dimensional Temptation)",
        "cover": "https://telegra.ph/file/51ce1d4a909d3af8e2688.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39253",
        "pageSeq": 39253
    },
    {
        "IDcode": 39254,
        "title": "Hokunaimeko - 赫萝Holo (Spice and Wolf)",
        "cover": "https://telegra.ph/file/ee3dd2b4f2238b558684d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39254",
        "pageSeq": 39254
    },
    {
        "IDcode": 39255,
        "title": "Mikomi Hokina - Mei (Overwatch)",
        "cover": "https://telegra.ph/file/867efb095377ca126f7ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39255",
        "pageSeq": 39255
    },
    {
        "IDcode": 39256,
        "title": "Neppu - Riamu Yumemi (Idolmaster)",
        "cover": "https://telegra.ph/file/3072eb2acdbb87261e579.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39256",
        "pageSeq": 39256
    },
    {
        "IDcode": 39257,
        "title": "Potato Godzilla - Ochako Uraraka (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/e05c8ca919eb83f34fc2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39257",
        "pageSeq": 39257
    },
    {
        "IDcode": 39258,
        "title": "Okita Rinka - Nino (Go toubun no hanayome)",
        "cover": "https://telegra.ph/file/9f2edbabfd814e88ee68c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39258",
        "pageSeq": 39258
    },
    {
        "IDcode": 39259,
        "title": "爆机少女喵小吉 Nekokoyoshi - Tori Zero 机甲NFT",
        "cover": "https://telegra.ph/file/d88d40a5a2f2e40484912.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39259",
        "pageSeq": 39259
    },
    {
        "IDcode": 39260,
        "title": "Azami - Urlich Von Hutten (Azur Lane)",
        "cover": "https://telegra.ph/file/70393e590f428a14656b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39260",
        "pageSeq": 39260
    },
    {
        "IDcode": 39261,
        "title": "Hane Ame - Dragon Queen (Goden)",
        "cover": "https://telegra.ph/file/ae70627c26b45063f6136.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39261",
        "pageSeq": 39261
    },
    {
        "IDcode": 39262,
        "title": "Hane Ame - Dragon Queen (Crisom)",
        "cover": "https://telegra.ph/file/9eb2f8060d09bee3cf267.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39262",
        "pageSeq": 39262
    },
    {
        "IDcode": 39263,
        "title": "Hane Ame - Dragon Queen (Black)",
        "cover": "https://telegra.ph/file/fed73f97228b8a35e1890.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39263",
        "pageSeq": 39263
    },
    {
        "IDcode": 39264,
        "title": "Hane Ame - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/0cd59cfa1d4d5db53cbcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39264",
        "pageSeq": 39264
    },
    {
        "IDcode": 39265,
        "title": "Nekokoyoshi nekokoyoshi 爆机少女喵小吉 - 鸦 Cuervo",
        "cover": "https://telegra.ph/file/477721735241ed2c0bf20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39265",
        "pageSeq": 39265
    },
    {
        "IDcode": 39266,
        "title": "Voezacos - Lisa / Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/9bcffab9267bc33f1edeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39266",
        "pageSeq": 39266
    },
    {
        "IDcode": 39267,
        "title": "Sakurai - Bunny Girl",
        "cover": "https://telegra.ph/file/6407ac013a4554d7176ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39267",
        "pageSeq": 39267
    },
    {
        "IDcode": 39268,
        "title": "Chunmomo 蠢沫沫 - 真空大巴车 (Random Model)",
        "cover": "https://telegra.ph/file/2f678adf08c670d06bb5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39268",
        "pageSeq": 39268
    },
    {
        "IDcode": 39269,
        "title": "Hane Ame - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/6965ecfcb0e960942de41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39269",
        "pageSeq": 39269
    },
    {
        "IDcode": 39270,
        "title": "HaneAme 雨波 — Malty Melromarc Bikini (Tate No Yuusha)",
        "cover": "https://telegra.ph/file/d8258c78a5f2495c5e6ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39270",
        "pageSeq": 39270
    },
    {
        "IDcode": 39271,
        "title": "白莉爱吃巧克力 - Xiao Qiao (Crossfire)",
        "cover": "https://telegra.ph/file/90fd671574d43f5224a26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39271",
        "pageSeq": 39271
    },
    {
        "IDcode": 39272,
        "title": "지아Zia - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/2cd82fac0d5fb70cf3d2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39272",
        "pageSeq": 39272
    },
    {
        "IDcode": 39273,
        "title": "Nyako 喵子 - 姐姐的居家假日 (Random Model)",
        "cover": "https://telegra.ph/file/780fdfcc6e4912eb064e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39273",
        "pageSeq": 39273
    },
    {
        "IDcode": 39274,
        "title": "Neppu - Chitose (Azur Lane)",
        "cover": "https://telegra.ph/file/167a6dc6914729fd482df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39274",
        "pageSeq": 39274
    },
    {
        "IDcode": 39275,
        "title": "Kaya Huang - Houshou Marine (Vtuber/Hololive)",
        "cover": "https://telegra.ph/file/6a19143d8723710cbafc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39275",
        "pageSeq": 39275
    },
    {
        "IDcode": 39276,
        "title": "Neppu - Minato Aqua (Hololive)",
        "cover": "https://telegra.ph/file/173e264b27472b8d311eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39276",
        "pageSeq": 39276
    },
    {
        "IDcode": 39277,
        "title": "半半子 Banbanko - 竞泳 (Random Model)",
        "cover": "https://telegra.ph/file/a02950f1a0ff6a12e3cc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39277",
        "pageSeq": 39277
    },
    {
        "IDcode": 39278,
        "title": "Aery Tiefling - Misato Katsuragi (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/cd76b650e9c92335465e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39278",
        "pageSeq": 39278
    },
    {
        "IDcode": 39279,
        "title": "Hane Ame - Ann Takamaki (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/811b76f4e7b259c672df8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39279",
        "pageSeq": 39279
    },
    {
        "IDcode": 39280,
        "title": "Fantasy Factory - Illustrious (Azur Lane)",
        "cover": "https://telegra.ph/file/17c373afbb80a6309048b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39280",
        "pageSeq": 39280
    },
    {
        "IDcode": 39281,
        "title": "Son Ye Eun 손예은 -  BunnyLuXXX",
        "cover": "https://telegra.ph/file/96c4c179afadc88487bbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39281",
        "pageSeq": 39281
    },
    {
        "IDcode": 39282,
        "title": "Neppu - Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/1bf6ceb00c2bef93041f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39282",
        "pageSeq": 39282
    },
    {
        "IDcode": 39283,
        "title": "Okita Rinka - Neko",
        "cover": "https://telegra.ph/file/6e22184ed0aa09acdad53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39283",
        "pageSeq": 39283
    },
    {
        "IDcode": 39284,
        "title": "Yin Tian Tian 尹甜甜 - XIUREN No.4199 (Model)",
        "cover": "https://telegra.ph/file/81b9d0cb0605a23ed4be3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39284",
        "pageSeq": 39284
    },
    {
        "IDcode": 39285,
        "title": "Hokunaimeko - Tamamo no mae (Fate/Extra - Fate Grand Order)",
        "cover": "https://telegra.ph/file/fa85560899a077ff3d5b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39285",
        "pageSeq": 39285
    },
    {
        "IDcode": 39286,
        "title": "Helly Valentine - Elsa (Frozen)",
        "cover": "https://telegra.ph/file/c31489f72096a2dbebc6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39286",
        "pageSeq": 39286
    },
    {
        "IDcode": 39287,
        "title": "Neppu - Tokoyami Towa (Vtuber/Hololive)",
        "cover": "https://telegra.ph/file/8bcfadd185226e56cccf9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39287",
        "pageSeq": 39287
    },
    {
        "IDcode": 39288,
        "title": "念念D NiannianD - White Elf",
        "cover": "https://telegra.ph/file/36b2501475e6c98d6f0f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39288",
        "pageSeq": 39288
    },
    {
        "IDcode": 39289,
        "title": "Todopokie - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/09705ee8242159f04b68b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39289",
        "pageSeq": 39289
    },
    {
        "IDcode": 39290,
        "title": "Voeza cos - Princess Zelda Chistmas",
        "cover": "https://telegra.ph/file/11c3928fa512049a40579.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39290",
        "pageSeq": 39290
    },
    {
        "IDcode": 39291,
        "title": "Fantasy Factory - Sirius Bikini (Azur Lane)",
        "cover": "https://telegra.ph/file/53035e49d20f7d607a448.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39291",
        "pageSeq": 39291
    },
    {
        "IDcode": 39292,
        "title": "Shiro Kitsune - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/77cbfd94bab49fa1dae54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39292",
        "pageSeq": 39292
    },
    {
        "IDcode": 39293,
        "title": "Cmiiu - Nobara Kugisaki (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/7c288d8e920821b9db7dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39293",
        "pageSeq": 39293
    },
    {
        "IDcode": 39294,
        "title": "蠢沫沫-画室背带裤 Schoolgirl (Model)",
        "cover": "https://telegra.ph/file/d2971f80659e403aec9c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39294",
        "pageSeq": 39294
    },
    {
        "IDcode": 39295,
        "title": "Byoru - Rosaria Succubus (Genshin Impact)",
        "cover": "https://telegra.ph/file/8696ed95d39e630ad63f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39295",
        "pageSeq": 39295
    },
    {
        "IDcode": 39296,
        "title": "Byoru - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/439a4892933882e2ad382.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39296",
        "pageSeq": 39296
    },
    {
        "IDcode": 39297,
        "title": "MissWarmj - Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/17eb02cfcf1cdbdda0480.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39297",
        "pageSeq": 39297
    },
    {
        "IDcode": 39298,
        "title": "Neppu - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/4aab42c96d4fd542e6783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39298",
        "pageSeq": 39298
    },
    {
        "IDcode": 39299,
        "title": "Potato Godzilla - Jean (Genshin Impact)",
        "cover": "https://telegra.ph/file/f7c799fe6e20f0a4c1ed6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39299",
        "pageSeq": 39299
    },
    {
        "IDcode": 39300,
        "title": "Umekoj - Raphtalia (Tate No Yuusha)",
        "cover": "https://telegra.ph/file/7f3a1e2bc0612c135bb0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39300",
        "pageSeq": 39300
    },
    {
        "IDcode": 39301,
        "title": "Kirbee - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/24fbcc3a418bba705dfde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39301",
        "pageSeq": 39301
    },
    {
        "IDcode": 39302,
        "title": "Ino Cosplayer - Mikasa (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/ab49dffa74d787855638b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39302",
        "pageSeq": 39302
    },
    {
        "IDcode": 39303,
        "title": "尤物清水由乃 - 妹妹一部曲 (Model)",
        "cover": "https://telegra.ph/file/736a7619265d476a77d72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39303",
        "pageSeq": 39303
    },
    {
        "IDcode": 39304,
        "title": "Eliza Mio Miao - Azuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/9551109dc3594950bedb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39304",
        "pageSeq": 39304
    },
    {
        "IDcode": 39305,
        "title": "Potato Godzilla - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/757990b62eb80630f0d68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39305",
        "pageSeq": 39305
    },
    {
        "IDcode": 39306,
        "title": "Potato Godzilla - Sora Kasugano (Yosuga No Sora)",
        "cover": "https://telegra.ph/file/9665e547df1249dbc06d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39306",
        "pageSeq": 39306
    },
    {
        "IDcode": 39307,
        "title": "Neppu - Kurumi Tokisaki (Date A Live)",
        "cover": "https://telegra.ph/file/ba954be79031d20c88a99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39307",
        "pageSeq": 39307
    },
    {
        "IDcode": 39308,
        "title": "Mikomi Hokina, Hidori Rose, Gumiho Arts, Kerocci & Lin Sue (Nekopara)",
        "cover": "https://telegra.ph/file/5c7ba5e0cf07d9610bd1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39308",
        "pageSeq": 39308
    },
    {
        "IDcode": 39309,
        "title": "星之迟迟 Hoshilily - 利兹 Rizu-Kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/4ef1d40cdcc55780b336b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39309",
        "pageSeq": 39309
    },
    {
        "IDcode": 39310,
        "title": "Byoru - Rizu-Kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/9766c64b037e55613e50f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39310",
        "pageSeq": 39310
    },
    {
        "IDcode": 39311,
        "title": "Whitespring - Makima (Chain Saw Man)",
        "cover": "https://telegra.ph/file/d71702e86aacb2512d767.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39311",
        "pageSeq": 39311
    },
    {
        "IDcode": 39312,
        "title": "Hokunaimeko - Kanou Unchou (Ikki Tousen)",
        "cover": "https://telegra.ph/file/73b96f0efc34bb1b0f19d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39312",
        "pageSeq": 39312
    },
    {
        "IDcode": 39313,
        "title": "Donna Loli - Zero Two Maid (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/af6238c3cf0f41cf01914.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39313",
        "pageSeq": 39313
    },
    {
        "IDcode": 39314,
        "title": "BanBanko 半半子 来一份下午茶吧 Maid",
        "cover": "https://telegra.ph/file/e6d842498c98da17c39f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39314",
        "pageSeq": 39314
    },
    {
        "IDcode": 39315,
        "title": "六味帝皇酱 - 死库水 (Model)",
        "cover": "https://telegra.ph/file/ab0cfd4957b2ab623ba52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39315",
        "pageSeq": 39315
    },
    {
        "IDcode": 39316,
        "title": "Meggi - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/8208f7fdccaed1d7273c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39316",
        "pageSeq": 39316
    },
    {
        "IDcode": 39317,
        "title": "Helly Valentine - Velma (Scooby Doo)",
        "cover": "https://telegra.ph/file/0433175048c0a6009fb5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39317",
        "pageSeq": 39317
    }
];
