// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40141,
        "title": "Donna Loli - Sheraphine (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/cbdada5ca34e002a37a48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40141",
        "pageSeq": 40141
    },
    {
        "IDcode": 40142,
        "title": "Byoru - Jill Valentine (Resident Evil)",
        "cover": "https://telegra.ph/file/b75f5fed85a4b0d08e4a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40142",
        "pageSeq": 40142
    },
    {
        "IDcode": 40143,
        "title": "Nekokoyoshi 爆机少女喵小吉 1月 圣诞特辑",
        "cover": "https://telegra.ph/file/32e0ab885e84f8f18ddf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40143",
        "pageSeq": 40143
    },
    {
        "IDcode": 40144,
        "title": "KuukoW - Hitori Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/a622d901540437c28eaa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40144",
        "pageSeq": 40144
    },
    {
        "IDcode": 40145,
        "title": "Byoru - Guitar Sister",
        "cover": "https://telegra.ph/file/f20702c72522a306c7de7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40145",
        "pageSeq": 40145
    },
    {
        "IDcode": 40146,
        "title": "蠢沫沫 - 致敬同桌的你",
        "cover": "https://telegra.ph/file/0cea6069bddb886a8024a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40146",
        "pageSeq": 40146
    },
    {
        "IDcode": 40147,
        "title": "Lisa様 - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/564b1f92215dc6277d7d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40147",
        "pageSeq": 40147
    },
    {
        "IDcode": 40148,
        "title": "Meladinha - Ryuko Matoi (Kill La Kill)",
        "cover": "https://telegra.ph/file/c69241c98e328769389a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40148",
        "pageSeq": 40148
    },
    {
        "IDcode": 40149,
        "title": "Mikomin - Wednesday / Merlina (The Family Addams)",
        "cover": "https://telegra.ph/file/04388f2fbf7d6fd186250.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40149",
        "pageSeq": 40149
    },
    {
        "IDcode": 40150,
        "title": "云溪溪 奶桃 - 狗狗2.0",
        "cover": "https://telegra.ph/file/a4e1c40b0247961da5c50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40150",
        "pageSeq": 40150
    },
    {
        "IDcode": 40151,
        "title": "Donna Loli - D.Va (Overwatch)",
        "cover": "https://telegra.ph/file/ad9f0121ea2df21b161bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40151",
        "pageSeq": 40151
    },
    {
        "IDcode": 40152,
        "title": "Vinnegal - Himeno (Chainsaw Man)",
        "cover": "https://telegra.ph/file/2b256c0d0d8bdeafc229c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40152",
        "pageSeq": 40152
    },
    {
        "IDcode": 40153,
        "title": "Kaya - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/fa41fb0ce9d7bd8ccca85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40153",
        "pageSeq": 40153
    },
    {
        "IDcode": 40154,
        "title": "Lady Melamori - Vampirella",
        "cover": "https://telegra.ph/file/9e280f8bd3e0f7b7877c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40154",
        "pageSeq": 40154
    },
    {
        "IDcode": 40155,
        "title": "Jeong Jenny (정제니) - The Smashing Sailorette (+S.Ver)",
        "cover": "https://telegra.ph/file/e8459aaeb870bf1de3d7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40155",
        "pageSeq": 40155
    },
    {
        "IDcode": 40156,
        "title": "洛璃LoLiSAMA - Charybdis Red Chamber of Healing",
        "cover": "https://telegra.ph/file/16e4065a28146acd62970.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40156",
        "pageSeq": 40156
    },
    {
        "IDcode": 40157,
        "title": "Carry Key - Tinker Bell (Peter Pan)",
        "cover": "https://telegra.ph/file/179db5940a412f53d2ce9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40157",
        "pageSeq": 40157
    },
    {
        "IDcode": 40158,
        "title": "Zuken 柘烟- 妮姬勝利女神-拉毗 Nikke - Rapi",
        "cover": "https://telegra.ph/file/52e8e721909ec180d5c49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40158",
        "pageSeq": 40158
    },
    {
        "IDcode": 40159,
        "title": "Kaya Huang - Mammon (Seven Mortal Sins)",
        "cover": "https://telegra.ph/file/bbbcf8e1aa989ea2c61f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40159",
        "pageSeq": 40159
    },
    {
        "IDcode": 40160,
        "title": "KuukoW - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/6752d4f9129e30618c80c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40160",
        "pageSeq": 40160
    },
    {
        "IDcode": 40161,
        "title": "Joyce - Kokomi (Genshin Impact)",
        "cover": "https://telegra.ph/file/27d24007a8eaa98fe592e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40161",
        "pageSeq": 40161
    },
    {
        "IDcode": 40162,
        "title": "Ino - Monkey D. Luffy (One Piece)",
        "cover": "https://telegra.ph/file/5098db8d6cc31d720f683.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40162",
        "pageSeq": 40162
    },
    {
        "IDcode": 40163,
        "title": "Neyrodesu - Taiga (Toradora)",
        "cover": "https://telegra.ph/file/3fb8aff21f81670f0ce63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40163",
        "pageSeq": 40163
    },
    {
        "IDcode": 40164,
        "title": "Sawakate - Himeno (Chainsaw Man)",
        "cover": "https://telegra.ph/file/3fc67b53ff74b5810ff5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40164",
        "pageSeq": 40164
    },
    {
        "IDcode": 40165,
        "title": "Hane Ame - Helm (Nikke)",
        "cover": "https://telegra.ph/file/b9b5db36cc56ddc91dbb8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40165",
        "pageSeq": 40165
    },
    {
        "IDcode": 40166,
        "title": "María Desu - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/1265168d9e3154bb6609c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40166",
        "pageSeq": 40166
    },
    {
        "IDcode": 40167,
        "title": "Meenfox - Rupee (Nikke)",
        "cover": "https://telegra.ph/file/6a8028573f1bddac1368f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40167",
        "pageSeq": 40167
    },
    {
        "IDcode": 40168,
        "title": "Fantasy Factory - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/bb71aadaafe43dfb90648.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40168",
        "pageSeq": 40168
    },
    {
        "IDcode": 40169,
        "title": "Helly Valentine - Rizu-Kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/5cbd30cd67e26ef165d51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40169",
        "pageSeq": 40169
    },
    {
        "IDcode": 40170,
        "title": "Ino - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/e55c6621147791b7c956a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40170",
        "pageSeq": 40170
    },
    {
        "IDcode": 40171,
        "title": "Shadory - Reze (Chainsaw Man)",
        "cover": "https://telegra.ph/file/531234f00c7bf142b285b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40171",
        "pageSeq": 40171
    },
    {
        "IDcode": 40172,
        "title": "Ping Ping - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/d0377f4725493e9fbe808.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40172",
        "pageSeq": 40172
    },
    {
        "IDcode": 40173,
        "title": "Neyrodesu - Gawr Gura (Vtuber / Hololive)",
        "cover": "https://telegra.ph/file/97eae270d97e23a1c2e72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40173",
        "pageSeq": 40173
    },
    {
        "IDcode": 40174,
        "title": "Queenie - Princess Peach (Super Mario Bros)",
        "cover": "https://telegra.ph/file/7c4709ded92dadb14108d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40174",
        "pageSeq": 40174
    },
    {
        "IDcode": 40175,
        "title": "Rinnie Riot - Momo (Boku no Hero Academia)",
        "cover": "https://telegra.ph/file/08dace79e22e09c42a72c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40175",
        "pageSeq": 40175
    },
    {
        "IDcode": 40176,
        "title": "Gremlynne - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/956e6efe1bb44bdefab6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40176",
        "pageSeq": 40176
    },
    {
        "IDcode": 40177,
        "title": "Neyrodesu - Hinata Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/98532009d7005c7e0bc83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40177",
        "pageSeq": 40177
    },
    {
        "IDcode": 40178,
        "title": "Hane Ame - Nilou (Genshin Impact)",
        "cover": "https://telegra.ph/file/71c29008f115ce793a484.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40178",
        "pageSeq": 40178
    },
    {
        "IDcode": 40179,
        "title": "Mikomin - Hitori Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/4a52fdd8dccac6ff16585.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40179",
        "pageSeq": 40179
    },
    {
        "IDcode": 40180,
        "title": "三无皮卡喵 - 初音酱 Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/6b5a588fdadc45889350b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40180",
        "pageSeq": 40180
    },
    {
        "IDcode": 40181,
        "title": "Hidori Rose - Minato Aqua (Hololive)",
        "cover": "https://telegra.ph/file/fa550e6cfccd6e9a49600.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40181",
        "pageSeq": 40181
    },
    {
        "IDcode": 40182,
        "title": "PingPing - Star Guardian Kai'Sa / Akali & Kaisa (League Of Legends)",
        "cover": "https://telegra.ph/file/2fc71f14e5fce9ff25e05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40182",
        "pageSeq": 40182
    },
    {
        "IDcode": 40183,
        "title": "Neyrodesu - Spider-Gwen (Spider-Man)",
        "cover": "https://telegra.ph/file/58239c5dd1434da83aa30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40183",
        "pageSeq": 40183
    },
    {
        "IDcode": 40184,
        "title": "Potato Godzilla - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/619f86464d38c3082f7c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40184",
        "pageSeq": 40184
    },
    {
        "IDcode": 40185,
        "title": "Shui Miao Aqua - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/bbc1de71c87edb4a45cb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40185",
        "pageSeq": 40185
    },
    {
        "IDcode": 40186,
        "title": "Nekokoyoshi 爆机少女喵小吉 - 玉兔迎春",
        "cover": "https://telegra.ph/file/800de880ec62b2be83d58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40186",
        "pageSeq": 40186
    },
    {
        "IDcode": 40187,
        "title": "Ino - Roronoa Zoro (One Piece)",
        "cover": "https://telegra.ph/file/207384294e23291e77ab2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40187",
        "pageSeq": 40187
    },
    {
        "IDcode": 40188,
        "title": "Umeko J - Proncess Peach (Mario Bros)",
        "cover": "https://telegra.ph/file/ed76753c3abfc7ad591b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40188",
        "pageSeq": 40188
    },
    {
        "IDcode": 40189,
        "title": "Donna Loli - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/f0b17038cdfef831be36d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40189",
        "pageSeq": 40189
    },
    {
        "IDcode": 40190,
        "title": "Nekokoyoshi - 玉兔迎春",
        "cover": "https://telegra.ph/file/d80222940c3b7b5f51755.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40190",
        "pageSeq": 40190
    },
    {
        "IDcode": 40191,
        "title": "Bishoujomom - Maddie Fenton (Danny Phantom)",
        "cover": "https://telegra.ph/file/5534d975204bf76fa20ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40191",
        "pageSeq": 40191
    },
    {
        "IDcode": 40192,
        "title": "PingPing - Honokab(Dead or Alive)",
        "cover": "https://telegra.ph/file/a9d51eac01ce9e7138e22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40192",
        "pageSeq": 40192
    },
    {
        "IDcode": 40193,
        "title": "Emiigotchi - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/d7d6b5bc747f6076b7d6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40193",
        "pageSeq": 40193
    },
    {
        "IDcode": 40194,
        "title": "Lana Bee - Gwenpool",
        "cover": "https://telegra.ph/file/4ee68df76caebe35297c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40194",
        "pageSeq": 40194
    },
    {
        "IDcode": 40195,
        "title": "Ino - Celestine Lucross (Kurouinu)",
        "cover": "https://telegra.ph/file/c037a41637eebc3496543.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40195",
        "pageSeq": 40195
    },
    {
        "IDcode": 40196,
        "title": "Arty - Hitori Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/e2367f577a5fd5cf92f2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40196",
        "pageSeq": 40196
    },
    {
        "IDcode": 40197,
        "title": "Amber Hallibell & Lera Himera - Perona & Nami",
        "cover": "https://telegra.ph/file/4e6a8ea83486384ed948e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40197",
        "pageSeq": 40197
    },
    {
        "IDcode": 40198,
        "title": "Neyrodesu - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/de8dfe2309821a810d567.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40198",
        "pageSeq": 40198
    },
    {
        "IDcode": 40199,
        "title": "Hane Ame - Agir (Genshin Impact)",
        "cover": "https://telegra.ph/file/4cf65a99b8ef9d7ce2e05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40199",
        "pageSeq": 40199
    },
    {
        "IDcode": 40200,
        "title": "Okita Rinka - Kanao Tsuyuri (Genshin Impact)",
        "cover": "https://telegra.ph/file/c4f4b15d0759d439f8122.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40200",
        "pageSeq": 40200
    },
    {
        "IDcode": 40201,
        "title": "Domi - Soi Fon (Bleach)",
        "cover": "https://telegra.ph/file/5f352fd0fa95d21ea1d5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40201",
        "pageSeq": 40201
    },
    {
        "IDcode": 40202,
        "title": "Hane Ame - 那位大人 柴犬學妹",
        "cover": "https://telegra.ph/file/b7bab1ff6135c5f35400c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40202",
        "pageSeq": 40202
    },
    {
        "IDcode": 40203,
        "title": "Kiko Baka - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/2790de7ef2e9f698e5ad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40203",
        "pageSeq": 40203
    },
    {
        "IDcode": 40204,
        "title": "Choi Ji Yun - Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/400c82ce6b4747f4cd1f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40204",
        "pageSeq": 40204
    },
    {
        "IDcode": 40205,
        "title": "Hidori Rose - Lucy Kushinada (Cyberpunk)",
        "cover": "https://telegra.ph/file/fea1b4ab49564517b857a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40205",
        "pageSeq": 40205
    },
    {
        "IDcode": 40206,
        "title": "Hane Ame - Fubuki (One Punch Men)",
        "cover": "https://telegra.ph/file/0c4efeec65dcc75ce2e12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40206",
        "pageSeq": 40206
    },
    {
        "IDcode": 40207,
        "title": "Xidaidai - Takina Inoue (Lycoris Recoil)",
        "cover": "https://telegra.ph/file/823410126b65a92c649c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40207",
        "pageSeq": 40207
    },
    {
        "IDcode": 40208,
        "title": "Bambi 밤비 - The Tale of The Nine Tailed Fox",
        "cover": "https://telegra.ph/file/528603775c6c99dd7d2f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40208",
        "pageSeq": 40208
    },
    {
        "IDcode": 40209,
        "title": "Carry Key - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/3598e20ea9c61f749684e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40209",
        "pageSeq": 40209
    },
    {
        "IDcode": 40210,
        "title": "Neyrodesu - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/004767dbe6c935a3bbf91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40210",
        "pageSeq": 40210
    },
    {
        "IDcode": 40211,
        "title": "Mik Allen - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/e4efea34d381bdbf94cc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40211",
        "pageSeq": 40211
    },
    {
        "IDcode": 40212,
        "title": "Virtual Geisha - Uraraka Ochako (Boku no Hero Academia)",
        "cover": "https://telegra.ph/file/5988e36cdbc8a5712a71a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40212",
        "pageSeq": 40212
    },
    {
        "IDcode": 40213,
        "title": "Aery Tiefling - Froppy / Tsuyu Asui (Boku no Hero Academia)",
        "cover": "https://telegra.ph/file/261854c19fd2aac8707bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40213",
        "pageSeq": 40213
    },
    {
        "IDcode": 40214,
        "title": "Nekokoyoshi 爆机少女喵小吉 - 恶堕修女 Nun",
        "cover": "https://telegra.ph/file/d0d7e89baedcfb1976b17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40214",
        "pageSeq": 40214
    },
    {
        "IDcode": 40215,
        "title": "Zirael Rem - Seraphine (League Of Legends)",
        "cover": "https://telegra.ph/file/8a363846e59805f9fdce4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40215",
        "pageSeq": 40215
    },
    {
        "IDcode": 40216,
        "title": "Hane Ame - Bikini Hane (Guitar Sister)",
        "cover": "https://telegra.ph/file/421d8610876cbdf4549a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40216",
        "pageSeq": 40216
    },
    {
        "IDcode": 40217,
        "title": "Neyrodesu - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/6e0a27460867d17e05658.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40217",
        "pageSeq": 40217
    },
    {
        "IDcode": 40218,
        "title": "KuukoW - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/e3d08c7a63a559e2fecc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40218",
        "pageSeq": 40218
    },
    {
        "IDcode": 40219,
        "title": "Enji Night - Sakura Kasugano (Street Fighter)",
        "cover": "https://telegra.ph/file/1e402f06cee1500b67bf0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40219",
        "pageSeq": 40219
    },
    {
        "IDcode": 40220,
        "title": "Maria Desu - Seraphine (League Of Legends)",
        "cover": "https://telegra.ph/file/bbfa96c32d95b1ba3a3a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40220",
        "pageSeq": 40220
    },
    {
        "IDcode": 40221,
        "title": "Hime Tsu - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/538235785e951f0602af8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40221",
        "pageSeq": 40221
    },
    {
        "IDcode": 40222,
        "title": "Hana Bunny - Lewd Teacher",
        "cover": "https://telegra.ph/file/5096a9bebc94138ad2a39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40222",
        "pageSeq": 40222
    },
    {
        "IDcode": 40223,
        "title": "Fe Galvao - Makima Nurse (Chainsaw Man)",
        "cover": "https://telegra.ph/file/b38fecb1e13eaa0e02829.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40223",
        "pageSeq": 40223
    },
    {
        "IDcode": 40224,
        "title": "Byoru - Viper (Nikke)",
        "cover": "https://telegra.ph/file/a4c14cd6a23e769972718.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40224",
        "pageSeq": 40224
    },
    {
        "IDcode": 40225,
        "title": "Vinnegal - Nico Robin (One Piece)",
        "cover": "https://telegra.ph/file/92dc9a145f033a8d4037c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40225",
        "pageSeq": 40225
    },
    {
        "IDcode": 40226,
        "title": "Remukira - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/761414289d6f157896134.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40226",
        "pageSeq": 40226
    },
    {
        "IDcode": 40227,
        "title": "Ahriuwu - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/81f6dd7b4665d01369004.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40227",
        "pageSeq": 40227
    },
    {
        "IDcode": 40228,
        "title": "Hime Tsu - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/a19249a8c9a969683f855.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40228",
        "pageSeq": 40228
    },
    {
        "IDcode": 40229,
        "title": "Vinnegal - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/c0a16c7024160e7c5a3b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40229",
        "pageSeq": 40229
    },
    {
        "IDcode": 40230,
        "title": "Candy Ball - Maid Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/c4e30df22a7f2a708f013.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40230",
        "pageSeq": 40230
    },
    {
        "IDcode": 40231,
        "title": "女主K NO.018 修女 Nun",
        "cover": "https://telegra.ph/file/6f08d5cadaa032e74e801.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40231",
        "pageSeq": 40231
    },
    {
        "IDcode": 40232,
        "title": "Vinnegal - Komi Shouko (Komi-San)",
        "cover": "https://telegra.ph/file/98e5d2dee550e3e19fc0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40232",
        "pageSeq": 40232
    },
    {
        "IDcode": 40233,
        "title": "Hane Ame - Nun Devil (Nun Sinful)",
        "cover": "https://telegra.ph/file/a9634776c9644c63d21de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40233",
        "pageSeq": 40233
    },
    {
        "IDcode": 40234,
        "title": "Hane Ame - Nun Elf (Nun Sinful)",
        "cover": "https://telegra.ph/file/737d342aab726ab6e6ffd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40234",
        "pageSeq": 40234
    },
    {
        "IDcode": 40235,
        "title": "Hane Ame - Nun Red EVL (Nun Sinful)",
        "cover": "https://telegra.ph/file/122d81cc9215ced44cab5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40235",
        "pageSeq": 40235
    },
    {
        "IDcode": 40236,
        "title": "Hane Ame - Nun Angel (Nun Sinful)",
        "cover": "https://telegra.ph/file/13db734a6e178e282fb7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40236",
        "pageSeq": 40236
    },
    {
        "IDcode": 40237,
        "title": "Lada Lyumos - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/2dfd592770f5440669993.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40237",
        "pageSeq": 40237
    },
    {
        "IDcode": 40238,
        "title": "Arty Huang - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/f0784de2b47957db5223e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40238",
        "pageSeq": 40238
    },
    {
        "IDcode": 40239,
        "title": "Hoshilily - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/85329ebf946a62d6e9180.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40239",
        "pageSeq": 40239
    },
    {
        "IDcode": 40240,
        "title": "日奈娇 - Nurse Rem (Re Zero)",
        "cover": "https://telegra.ph/file/7bddf9b50ee630cc72eff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40240",
        "pageSeq": 40240
    }
];
