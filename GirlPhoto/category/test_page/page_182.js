// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40241,
        "title": "Hime Tsu - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c7819a68b5f0b94ef226f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40241",
        "pageSeq": 40241
    },
    {
        "IDcode": 40242,
        "title": "Arty Huang – Chinese New Year 2023 (Year of the Rabbit)",
        "cover": "https://telegra.ph/file/f835837fc1bc0a5bfca96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40242",
        "pageSeq": 40242
    },
    {
        "IDcode": 40243,
        "title": "Eiraotis - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/ffd9fd64278cc84a10aeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40243",
        "pageSeq": 40243
    },
    {
        "IDcode": 40244,
        "title": "KuukoW - Mobius (Honkai Gakuen)",
        "cover": "https://telegra.ph/file/11e5f474896438a63e371.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40244",
        "pageSeq": 40244
    },
    {
        "IDcode": 40245,
        "title": "蠢沫沫 Chunmomo - 废船记",
        "cover": "https://telegra.ph/file/5e5cf6a7804a34ea1d078.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40245",
        "pageSeq": 40245
    },
    {
        "IDcode": 40246,
        "title": "Hane Ame - Maid 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/de0947cd0625768d3d184.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40246",
        "pageSeq": 40246
    },
    {
        "IDcode": 40247,
        "title": "Hane Ame - Nijan 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/4b5aebf7a05b9fbe42dfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40247",
        "pageSeq": 40247
    },
    {
        "IDcode": 40248,
        "title": "Hane Ame - Gown 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/5154f6ffb224a182a10fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40248",
        "pageSeq": 40248
    },
    {
        "IDcode": 40249,
        "title": "KuukoW - Reze (Chainsaw Man)",
        "cover": "https://telegra.ph/file/d6da003d4a73c4c8931c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40249",
        "pageSeq": 40249
    },
    {
        "IDcode": 40250,
        "title": "Donna Loli - Tatsumaki (One Punch Men)",
        "cover": "https://telegra.ph/file/97ac7d4861098229c44dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40250",
        "pageSeq": 40250
    },
    {
        "IDcode": 40251,
        "title": "Usatame & Foxy Cosplay - Aqua & Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/514caacdd101970e416c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40251",
        "pageSeq": 40251
    },
    {
        "IDcode": 40252,
        "title": "Collection - Cosplayers ass",
        "cover": "https://telegra.ph/file/a018e247e69e6cf051398.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40252",
        "pageSeq": 40252
    },
    {
        "IDcode": 40253,
        "title": "Carry Key - Boa Hancock (One Piece)",
        "cover": "https://telegra.ph/file/104d93bc9281c3db79f4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40253",
        "pageSeq": 40253
    },
    {
        "IDcode": 40254,
        "title": "Hatori - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/8db4147bfb50b0c2b9cb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40254",
        "pageSeq": 40254
    },
    {
        "IDcode": 40255,
        "title": "Kalinka Fox - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/d1463ae973d268db9f0c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40255",
        "pageSeq": 40255
    },
    {
        "IDcode": 40256,
        "title": "Alina Becker - Nico Robin (One Piece)",
        "cover": "https://telegra.ph/file/3aae8fcba8bd32fa16abf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40256",
        "pageSeq": 40256
    },
    {
        "IDcode": 40257,
        "title": "Hane Ame - Uta (One Piece)",
        "cover": "https://telegra.ph/file/71f38c2bcd6f9fb7498b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40257",
        "pageSeq": 40257
    },
    {
        "IDcode": 40258,
        "title": "Vandych - Lucy (Elfen Lied)",
        "cover": "https://telegra.ph/file/22b8f636bd234a887d55b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40258",
        "pageSeq": 40258
    },
    {
        "IDcode": 40259,
        "title": "Carry Key - Tatsumaki (One Punch Men)",
        "cover": "https://telegra.ph/file/c45b18d67ed623c4849cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40259",
        "pageSeq": 40259
    },
    {
        "IDcode": 40260,
        "title": "Hane Ame - Kisaki (Blue Archive)",
        "cover": "https://telegra.ph/file/1eb1f7a01b4bede7c15ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40260",
        "pageSeq": 40260
    },
    {
        "IDcode": 40261,
        "title": "Alina Becker - Dehya (Genshin Impact)",
        "cover": "https://telegra.ph/file/b65c0324426d132ddfa4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40261",
        "pageSeq": 40261
    },
    {
        "IDcode": 40262,
        "title": "Asagi - Maid Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/581f0b77c563468fcc82d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40262",
        "pageSeq": 40262
    },
    {
        "IDcode": 40263,
        "title": "Hane Ame - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/1298479a3f6de40a0971d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40263",
        "pageSeq": 40263
    },
    {
        "IDcode": 40265,
        "title": "Byoru - Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/ff1a47de9cf4f49ab398f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40265",
        "pageSeq": 40265
    },
    {
        "IDcode": 40266,
        "title": "Hana Bunny - Tatsumaki (One Punch Men)",
        "cover": "https://telegra.ph/file/50b975e38b274de9bd5a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40266",
        "pageSeq": 40266
    },
    {
        "IDcode": 40267,
        "title": "Mik Allen - Fubuki & Tatsumaki (One Punch Men)",
        "cover": "https://telegra.ph/file/71487f0b839852a853019.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40267",
        "pageSeq": 40267
    },
    {
        "IDcode": 40268,
        "title": "Fantasy Factory - Haachama (Hololive)",
        "cover": "https://telegra.ph/file/13616db5ea3f3223ba0a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40268",
        "pageSeq": 40268
    },
    {
        "IDcode": 40269,
        "title": "Lady Melamori - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/45f8cac3ec9a9c049d6c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40269",
        "pageSeq": 40269
    },
    {
        "IDcode": 40270,
        "title": "Alina Becker - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/bfd2fc4fa7fea4c18ec59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40270",
        "pageSeq": 40270
    },
    {
        "IDcode": 40271,
        "title": "Fantasy Factory - Sailor Suit",
        "cover": "https://telegra.ph/file/7d31f7126bad2cfb8b6c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40271",
        "pageSeq": 40271
    },
    {
        "IDcode": 40272,
        "title": "Mik Allen - Maid Jinx (Arkane / League Of Legends)",
        "cover": "https://telegra.ph/file/4dadb15057c5bb22ce015.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40272",
        "pageSeq": 40272
    },
    {
        "IDcode": 40273,
        "title": "Nekokoyoshi - Alice (Nikke)",
        "cover": "https://telegra.ph/file/a96a51b9f65ae5ec43f0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40273",
        "pageSeq": 40273
    },
    {
        "IDcode": 40274,
        "title": "Joyce - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/3b3f0d02cfc86dce06d1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40274",
        "pageSeq": 40274
    },
    {
        "IDcode": 40275,
        "title": "Aery Tiefling - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/d352eccf03b56346a19c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40275",
        "pageSeq": 40275
    },
    {
        "IDcode": 40276,
        "title": "Fantasy Factory - Fairy Maid",
        "cover": "https://telegra.ph/file/cbb65dcc6f8516809d64b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40276",
        "pageSeq": 40276
    },
    {
        "IDcode": 40277,
        "title": "Nagisa - Schoolgirl",
        "cover": "https://telegra.ph/file/e1c1b02c91cbdc30b4cdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40277",
        "pageSeq": 40277
    },
    {
        "IDcode": 40278,
        "title": "Aery Tiefling - A2 (Nier Automata)",
        "cover": "https://telegra.ph/file/f2ef2fd19ef909d92c159.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40278",
        "pageSeq": 40278
    },
    {
        "IDcode": 40279,
        "title": "Nagisa - 罪惡修女",
        "cover": "https://telegra.ph/file/62527f0a76c6b59de5b66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40279",
        "pageSeq": 40279
    },
    {
        "IDcode": 40280,
        "title": "Choi Ji Yun - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/0c5def79572809b0344f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40280",
        "pageSeq": 40280
    },
    {
        "IDcode": 40281,
        "title": "Choi Ji Yun - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/771a18529eb735de77d2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40281",
        "pageSeq": 40281
    },
    {
        "IDcode": 40282,
        "title": "Fantasy Factory - Hachisaku sama",
        "cover": "https://telegra.ph/file/7b894f9ff38e717a689b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40282",
        "pageSeq": 40282
    },
    {
        "IDcode": 40283,
        "title": "Virtual Geisha - Bea (Pokemon Sword and Shield)",
        "cover": "https://telegra.ph/file/64e8a7e8d47bd2f870457.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40283",
        "pageSeq": 40283
    },
    {
        "IDcode": 40284,
        "title": "Nagisa - 透明セーラー服",
        "cover": "https://telegra.ph/file/b592946df18f834637def.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40284",
        "pageSeq": 40284
    },
    {
        "IDcode": 40285,
        "title": "Alina Becker - Rias Gremory (High School DxD)",
        "cover": "https://telegra.ph/file/d47c36734716b0d7d0c06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40285",
        "pageSeq": 40285
    },
    {
        "IDcode": 40286,
        "title": "Choi Ji Yun - Boa Hancock (One Piece)",
        "cover": "https://telegra.ph/file/a58328bb8928c5dd04f60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40286",
        "pageSeq": 40286
    },
    {
        "IDcode": 40287,
        "title": "Choi Ji Yun - Lucy Kushinada (Cyberpunk)",
        "cover": "https://telegra.ph/file/1cd44d6e52745a656b25c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40287",
        "pageSeq": 40287
    },
    {
        "IDcode": 40288,
        "title": "九言 - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/d73ee9cca19f5c829b298.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40288",
        "pageSeq": 40288
    },
    {
        "IDcode": 40289,
        "title": "Choi Ji Yun - Mistsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/cead43b49977508f83606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40289",
        "pageSeq": 40289
    },
    {
        "IDcode": 40290,
        "title": "Emilia Ito - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/ab35d4d74301de8802dd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40290",
        "pageSeq": 40290
    },
    {
        "IDcode": 40291,
        "title": "Amber Hallibell - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/3f16ff033116f7994a104.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40291",
        "pageSeq": 40291
    },
    {
        "IDcode": 40292,
        "title": "习呆呆 Xidaidai - Lucy Kushinada (Cyberpunk)",
        "cover": "https://telegra.ph/file/7be56ec20f8ddb229b1c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40292",
        "pageSeq": 40292
    },
    {
        "IDcode": 40293,
        "title": "Sameki - Koharu Shimoe (Blue Archive)",
        "cover": "https://telegra.ph/file/58e69b110eac645188cca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40293",
        "pageSeq": 40293
    },
    {
        "IDcode": 40294,
        "title": "Donna Loli - Gwen Stacy (Spider-Man)",
        "cover": "https://telegra.ph/file/ef0508a4569674dcd2362.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40294",
        "pageSeq": 40294
    },
    {
        "IDcode": 40295,
        "title": "Carry Key - Nami (One Piece)",
        "cover": "https://telegra.ph/file/a4b9bcc9dac48db196769.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40295",
        "pageSeq": 40295
    },
    {
        "IDcode": 40296,
        "title": "Xidaidai 习呆呆 - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/416e2c93aa5aa0c106730.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40296",
        "pageSeq": 40296
    },
    {
        "IDcode": 40297,
        "title": "Aery Tiefling - Asuna (Sword Art Online)",
        "cover": "https://telegra.ph/file/40802a3a8531fc28f7785.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40297",
        "pageSeq": 40297
    },
    {
        "IDcode": 40298,
        "title": "Yoshinobi - Supersonico",
        "cover": "https://telegra.ph/file/87696ceb98f86d294bf21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40298",
        "pageSeq": 40298
    },
    {
        "IDcode": 40299,
        "title": "Zirael Rem - Pieck Finger (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/b4ba3e6c12be356c6dc52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40299",
        "pageSeq": 40299
    },
    {
        "IDcode": 40300,
        "title": "Aleksandra Bodler - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/075b1a7753b8ef865ef59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40300",
        "pageSeq": 40300
    },
    {
        "IDcode": 40301,
        "title": "TiTi - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/72b2429913eb6d1b614b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40301",
        "pageSeq": 40301
    },
    {
        "IDcode": 40302,
        "title": "Potato Godzilla - Pink casual cat",
        "cover": "https://telegra.ph/file/408d2356d2e67f5c23af6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40302",
        "pageSeq": 40302
    },
    {
        "IDcode": 40303,
        "title": "Zirael Rem - Emillie  (The Last Of Us)",
        "cover": "https://telegra.ph/file/419bb01173e8f2bc7e540.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40303",
        "pageSeq": 40303
    },
    {
        "IDcode": 40304,
        "title": "Son Ye Eun - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/2c873f20a296c2ddc274c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40304",
        "pageSeq": 40304
    },
    {
        "IDcode": 40305,
        "title": "Zine Q - Elese (Pokemon)",
        "cover": "https://telegra.ph/file/fdec14807e4f5002dcd94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40305",
        "pageSeq": 40305
    },
    {
        "IDcode": 40307,
        "title": "Nyako喵子 - 女子校生",
        "cover": "https://telegra.ph/file/9ab634bf83ea2605b79f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40307",
        "pageSeq": 40307
    },
    {
        "IDcode": 40308,
        "title": "Vinnegal - Lucy Kushinada  (Syberpunk)",
        "cover": "https://telegra.ph/file/f6e0ddfa06ce04c81fcdd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40308",
        "pageSeq": 40308
    },
    {
        "IDcode": 40309,
        "title": "Zinie Q - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/e5a7097db6df4bf545b89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40309",
        "pageSeq": 40309
    },
    {
        "IDcode": 40310,
        "title": "玉汇 Yuuhui - 游泳部学妹",
        "cover": "https://telegra.ph/file/9a9569f6563671c23158c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40310",
        "pageSeq": 40310
    },
    {
        "IDcode": 40311,
        "title": "Vinnegal - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/e219ca412e256edbc9e26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40311",
        "pageSeq": 40311
    },
    {
        "IDcode": 40312,
        "title": "習呆呆 Xidaidai - Marin Kitagawa/Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/4d4b083d2e18fc3fc42e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40312",
        "pageSeq": 40312
    },
    {
        "IDcode": 40313,
        "title": "Ping Ping - Nurse Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/481078ea1f770836407fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40313",
        "pageSeq": 40313
    },
    {
        "IDcode": 40314,
        "title": "霜月 shimo NO.087 - Houshou Marine 寶鐘瑪琳 (Hololive (18張))",
        "cover": "https://telegra.ph/file/7fda2694f673238978baa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40314",
        "pageSeq": 40314
    },
    {
        "IDcode": 40315,
        "title": "Potato Godzilla - Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/e2553da12541a28a2f1ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40315",
        "pageSeq": 40315
    },
    {
        "IDcode": 40316,
        "title": "Nekokoyoshi - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/de00d34be15c23e80bc88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40316",
        "pageSeq": 40316
    },
    {
        "IDcode": 40317,
        "title": "Alina Becker - Nami (One Piece)",
        "cover": "https://telegra.ph/file/32860fe21c02535c6e9ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40317",
        "pageSeq": 40317
    },
    {
        "IDcode": 40318,
        "title": "起司块wii - 下平玲花绅士版 Reika Shinomiya (Gantz)",
        "cover": "https://telegra.ph/file/5f3a19650c5d9097c5dda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40318",
        "pageSeq": 40318
    },
    {
        "IDcode": 40319,
        "title": "KuukoW - Daki (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/670b96c0bb05a3b8eb32c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40319",
        "pageSeq": 40319
    },
    {
        "IDcode": 40320,
        "title": "Arty Huang - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/5bbf218763d5a8987f0b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40320",
        "pageSeq": 40320
    },
    {
        "IDcode": 40321,
        "title": "Arty Huang - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/1d9173eba2c155e2c94e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40321",
        "pageSeq": 40321
    },
    {
        "IDcode": 40322,
        "title": "Arty Huang - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/51a4cf2c280634ced1d7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40322",
        "pageSeq": 40322
    },
    {
        "IDcode": 40323,
        "title": "PingPing - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/b0090bc4170793479a783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40323",
        "pageSeq": 40323
    },
    {
        "IDcode": 40324,
        "title": "PingPing - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/15b30434f2fccf4150240.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40324",
        "pageSeq": 40324
    },
    {
        "IDcode": 40325,
        "title": "Asami Gate - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/1100ee6ce606a87af6964.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40325",
        "pageSeq": 40325
    },
    {
        "IDcode": 40326,
        "title": "Aery Tiefling - Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/5445b8a3ba0c5b2acb4f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40326",
        "pageSeq": 40326
    },
    {
        "IDcode": 40327,
        "title": "PingPing - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/6effea8e4b52c60e17ef7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40327",
        "pageSeq": 40327
    },
    {
        "IDcode": 40328,
        "title": "Rioko凉凉子 人妻的一天 下班篇",
        "cover": "https://telegra.ph/file/d6771781a89afaef49040.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40328",
        "pageSeq": 40328
    },
    {
        "IDcode": 40329,
        "title": "Meenfox - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/4bf6446a29a7fbe7124bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40329",
        "pageSeq": 40329
    },
    {
        "IDcode": 40330,
        "title": "Choi Ji Yun - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/bea134e6964a223e0714d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40330",
        "pageSeq": 40330
    },
    {
        "IDcode": 40331,
        "title": "Umeko J - Mashu Black Cat (Fate Grand Order)",
        "cover": "https://telegra.ph/file/d7432244dca40ecdf5543.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40331",
        "pageSeq": 40331
    },
    {
        "IDcode": 40332,
        "title": "Mikomin - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/b2be7e94ebcc4a437f387.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40332",
        "pageSeq": 40332
    },
    {
        "IDcode": 40333,
        "title": "Hane Ame - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/dd014ca332b79dbade0fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40333",
        "pageSeq": 40333
    },
    {
        "IDcode": 40334,
        "title": "Mikomin - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/1fd84610e7e7d23912e2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40334",
        "pageSeq": 40334
    },
    {
        "IDcode": 40335,
        "title": "Hane Ame - Bunny Altoria 白槍呆 (Fate Grand Order)",
        "cover": "https://telegra.ph/file/06c8f280ed0327d8b2af3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40335",
        "pageSeq": 40335
    },
    {
        "IDcode": 40336,
        "title": "Arty Huang - Eula Genshin Impact)",
        "cover": "https://telegra.ph/file/fb5dceaf7ec42c40851f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40336",
        "pageSeq": 40336
    },
    {
        "IDcode": 40337,
        "title": "千寻 - 蕾姆Rem (Re Zero)",
        "cover": "https://telegra.ph/file/0a2bbc440f77399d00111.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40337",
        "pageSeq": 40337
    },
    {
        "IDcode": 40338,
        "title": "Hane Ame - Suisei (Hololive)",
        "cover": "https://telegra.ph/file/59fbf794e4dfd478872a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40338",
        "pageSeq": 40338
    },
    {
        "IDcode": 40339,
        "title": "Hane Ame - 罪惡修女",
        "cover": "https://telegra.ph/file/07c808788be7162d74f04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40339",
        "pageSeq": 40339
    },
    {
        "IDcode": 40340,
        "title": "Mikomi Hokina - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/757d27cbc31383abb48d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40340",
        "pageSeq": 40340
    },
    {
        "IDcode": 40341,
        "title": "Shimo - Sakamata Chloe (Hololive)",
        "cover": "https://telegra.ph/file/0f4073c887267ec195f18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40341",
        "pageSeq": 40341
    },
    {
        "IDcode": 40342,
        "title": "Hane Ame - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/1258d87c92bd0d178b633.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40342",
        "pageSeq": 40342
    }
];
