// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41158,
        "title": "Hana Bunny - Mei Mei (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/901008470d717356c6b5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41158",
        "pageSeq": 41158
    },
    {
        "IDcode": 41159,
        "title": "Tsuki Desu - Yuni (Nikke)",
        "cover": "https://telegra.ph/file/901181b8736ffb4627955.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41159",
        "pageSeq": 41159
    },
    {
        "IDcode": 41160,
        "title": "Caticornplay - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/0fc0b5e4604972909e44c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41160",
        "pageSeq": 41160
    },
    {
        "IDcode": 41162,
        "title": "Byoru - Lancer Alter Royal Icing (Fate Grand Order)",
        "cover": "https://telegra.ph/file/c5786e3e39fc60a418de6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41162",
        "pageSeq": 41162
    },
    {
        "IDcode": 41163,
        "title": "Aery Tiefling - Nobara Kugisaki (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/db34dc704853364ece326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41163",
        "pageSeq": 41163
    },
    {
        "IDcode": 41164,
        "title": "Evenink - Wanda/Scarlet witch (Avengers)",
        "cover": "https://telegra.ph/file/03e9928f006ed757b673f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41164",
        "pageSeq": 41164
    },
    {
        "IDcode": 41165,
        "title": "Potato Godzilla - Tingyun (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/563f63c235139f31d3e74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41165",
        "pageSeq": 41165
    },
    {
        "IDcode": 41166,
        "title": "Donna Loli - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/051681a70722c064290f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41166",
        "pageSeq": 41166
    },
    {
        "IDcode": 41167,
        "title": "Choi Ji Yun - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/eefbd7e04dd284c42a7c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41167",
        "pageSeq": 41167
    },
    {
        "IDcode": 41168,
        "title": "Virtual Geisha - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/085b3072787f5e6590563.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41168",
        "pageSeq": 41168
    },
    {
        "IDcode": 41169,
        "title": "Ana Chuu - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/559148203f3a88802f105.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41169",
        "pageSeq": 41169
    },
    {
        "IDcode": 41170,
        "title": "Fantasy Factory - Kashima (Kantai Collection)",
        "cover": "https://telegra.ph/file/f58476285188a640fc144.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41170",
        "pageSeq": 41170
    },
    {
        "IDcode": 41171,
        "title": "Lady Melamori - Sucrose (Genshin Impact)",
        "cover": "https://telegra.ph/file/fa50d13d19b28c772403d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41171",
        "pageSeq": 41171
    },
    {
        "IDcode": 41172,
        "title": "Hinatasama - Jean (Genshin Impact)",
        "cover": "https://telegra.ph/file/14a8b73f6e051b302057d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41172",
        "pageSeq": 41172
    },
    {
        "IDcode": 41173,
        "title": "Itchika Red-Beryl - Starbucks Kashino (Azur Lane)",
        "cover": "https://telegra.ph/file/9b4af7f72cd724668706b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41173",
        "pageSeq": 41173
    },
    {
        "IDcode": 41174,
        "title": "Arty - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/c7bcca8c7a0cbc925309a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41174",
        "pageSeq": 41174
    },
    {
        "IDcode": 41175,
        "title": "Virtual Geisha - Rizu-Kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/df0eb3bd8455f27edce65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41175",
        "pageSeq": 41175
    },
    {
        "IDcode": 41176,
        "title": "BakaChi - Shadowheart (Baldurs Gate 3)",
        "cover": "https://telegra.ph/file/2a5a5cc33c4f3b9d634ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41176",
        "pageSeq": 41176
    },
    {
        "IDcode": 41177,
        "title": "Umeko J - Stocking Anarchy (Panty And Stocking With Gartelbelt)",
        "cover": "https://telegra.ph/file/e9cb40023f80534780efa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41177",
        "pageSeq": 41177
    },
    {
        "IDcode": 41178,
        "title": "Shaekitty - Misa (Death Note)",
        "cover": "https://telegra.ph/file/4690709a060bb5e19db28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41178",
        "pageSeq": 41178
    },
    {
        "IDcode": 41179,
        "title": "Akemi - Juri Han (Pokemon)",
        "cover": "https://telegra.ph/file/d9a7eea9a585e7a4aed13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41179",
        "pageSeq": 41179
    },
    {
        "IDcode": 41180,
        "title": "Kaya - Bunny Atago (Azur Lane)",
        "cover": "https://telegra.ph/file/a9482f0498f87206dae7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41180",
        "pageSeq": 41180
    },
    {
        "IDcode": 41181,
        "title": "Choi Ji Yun - Black Naughty Rabbit",
        "cover": "https://telegra.ph/file/a0f8b630cf1d11751d9bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41181",
        "pageSeq": 41181
    },
    {
        "IDcode": 41182,
        "title": "Alice Delish - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/28810721f00b45e41b385.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41182",
        "pageSeq": 41182
    },
    {
        "IDcode": 41183,
        "title": "Itchika Red-Beryl - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/80a72e9b898ecdef76322.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41183",
        "pageSeq": 41183
    },
    {
        "IDcode": 41184,
        "title": "Byoru - Santa Tifa Lockhart (Final Fantsy)",
        "cover": "https://telegra.ph/file/e62a2ab63c0040363b1f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41184",
        "pageSeq": 41184
    },
    {
        "IDcode": 41185,
        "title": "Yuuforia - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/e915d640be5c76f6a66cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41185",
        "pageSeq": 41185
    },
    {
        "IDcode": 41186,
        "title": "Joyce - Peach School Girl (Mariobros)",
        "cover": "https://telegra.ph/file/85680783815dedfe2a50b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41186",
        "pageSeq": 41186
    },
    {
        "IDcode": 41187,
        "title": "ZinieQ - Lana (Pokemon)",
        "cover": "https://telegra.ph/file/82e87326420cec396a54a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41187",
        "pageSeq": 41187
    },
    {
        "IDcode": 41188,
        "title": "白莉爱吃巧克力 - Emilia (Re Zero)",
        "cover": "https://telegra.ph/file/49fcbbdfe0b1a03044c9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41188",
        "pageSeq": 41188
    },
    {
        "IDcode": 41189,
        "title": "Shui Miao Aqua - Ichinose Asuna Maid (Blue Archive)",
        "cover": "https://telegra.ph/file/1523a3b726ef90e2f973b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41189",
        "pageSeq": 41189
    },
    {
        "IDcode": 41190,
        "title": "Yummichiyo - Taihou (Azur Lane)",
        "cover": "https://telegra.ph/file/2ed12e41dccf2ff03b3c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41190",
        "pageSeq": 41190
    },
    {
        "IDcode": 41191,
        "title": "Caticornplay - New Year Senko (Sewayaki Kitsune no Senko San)",
        "cover": "https://telegra.ph/file/e3655c5dab16319e4980c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41191",
        "pageSeq": 41191
    },
    {
        "IDcode": 41192,
        "title": "Potato Godzilla - Purah (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/b92e72048820af0f00e32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41192",
        "pageSeq": 41192
    },
    {
        "IDcode": 41193,
        "title": "Peachuu - Yuni (Nikke)",
        "cover": "https://telegra.ph/file/9e494f93be0f5ce4e313b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41193",
        "pageSeq": 41193
    },
    {
        "IDcode": 41194,
        "title": "Yurico Tiger - Bondage",
        "cover": "https://telegra.ph/file/091e404b2741f677b94fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41194",
        "pageSeq": 41194
    },
    {
        "IDcode": 41195,
        "title": "Kuuko W - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/f3a0e875ddabd26c88f22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41195",
        "pageSeq": 41195
    },
    {
        "IDcode": 41196,
        "title": "小薯条nienie - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/52a2d204142443fcaaa97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41196",
        "pageSeq": 41196
    },
    {
        "IDcode": 41197,
        "title": "Aery Tiefling - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/e00ddf9b25ddf1a887da7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41197",
        "pageSeq": 41197
    },
    {
        "IDcode": 41198,
        "title": "Meriol - Alice (Nikke)",
        "cover": "https://telegra.ph/file/0a4b0df5eb9c60cfe1360.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41198",
        "pageSeq": 41198
    },
    {
        "IDcode": 41199,
        "title": "Bonnie - Mavis (Hotel Transilvania)",
        "cover": "https://telegra.ph/file/3f95cfa78fc545aa6b5ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41199",
        "pageSeq": 41199
    },
    {
        "IDcode": 41200,
        "title": "Xiao Yao Yao - Focalors (Genshin Impact)",
        "cover": "https://telegra.ph/file/c12e2679b94f7cabfe323.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41200",
        "pageSeq": 41200
    },
    {
        "IDcode": 41202,
        "title": "Amaimai - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/40e66993610e058495845.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41202",
        "pageSeq": 41202
    },
    {
        "IDcode": 41204,
        "title": "Lady Melamori - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/e25680eaf1eb0caa9468d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41204",
        "pageSeq": 41204
    },
    {
        "IDcode": 41205,
        "title": "九言 Jiuy Yan - Yumeko (Kakegurui)",
        "cover": "https://telegra.ph/file/6511c8d8bb69b09761726.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41205",
        "pageSeq": 41205
    },
    {
        "IDcode": 41206,
        "title": "Peachuu - Takemi (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/597ab140e307b15bc1f6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41206",
        "pageSeq": 41206
    },
    {
        "IDcode": 41207,
        "title": "Rocksy Light - Yell",
        "cover": "https://telegra.ph/file/8476bd8f59cef8f6d5e40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41207",
        "pageSeq": 41207
    },
    {
        "IDcode": 41208,
        "title": "枣糕 Zao Gao - Urawa Hanako (Blue Archive)",
        "cover": "https://telegra.ph/file/35e15d6f84332564c0cf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41208",
        "pageSeq": 41208
    },
    {
        "IDcode": 41209,
        "title": "Yummichiyo - Owari (Azur Lane)",
        "cover": "https://telegra.ph/file/78b5185cb38e19d8841b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41209",
        "pageSeq": 41209
    },
    {
        "IDcode": 41210,
        "title": "Bao Zou Xiao Cai Tou 抱走小蔡头 - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/01ca6ab6f55dc1380ee7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41210",
        "pageSeq": 41210
    },
    {
        "IDcode": 41211,
        "title": "Xidaidai - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/f9cc36cdfb670332ca7de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41211",
        "pageSeq": 41211
    },
    {
        "IDcode": 41212,
        "title": "Hokunaimeko - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/0ad949179a17560026cbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41212",
        "pageSeq": 41212
    },
    {
        "IDcode": 41213,
        "title": "麻花酱 Mahua Jiang - NO.42 保守老师+珍珠jk",
        "cover": "https://telegra.ph/file/73da76805c9c7ea51f9d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41213",
        "pageSeq": 41213
    },
    {
        "IDcode": 41214,
        "title": "女主K - Guitar Sister",
        "cover": "https://telegra.ph/file/c66274d6cb91c29056ae3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41214",
        "pageSeq": 41214
    },
    {
        "IDcode": 41215,
        "title": "Sweetie Fox - Nico Robin (One Piece)",
        "cover": "https://telegra.ph/file/7ec81988f32a1bbd04ddb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41215",
        "pageSeq": 41215
    },
    {
        "IDcode": 41216,
        "title": "Sayo Momo - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/db6a610695b283c074abf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41216",
        "pageSeq": 41216
    },
    {
        "IDcode": 41217,
        "title": "HoneyMomo - Mavis (Hotel Transylvania)",
        "cover": "https://telegra.ph/file/df658ff5923dd0f2a9efd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41217",
        "pageSeq": 41217
    },
    {
        "IDcode": 41218,
        "title": "Yummichiyo - Taiho (Azur Lane)",
        "cover": "https://telegra.ph/file/55eafdbf5ed804830a6ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41218",
        "pageSeq": 41218
    },
    {
        "IDcode": 41219,
        "title": "Hana Bunny - Portgas D. Ace (One Piece)",
        "cover": "https://telegra.ph/file/a886e3d0f64e84487b33b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41219",
        "pageSeq": 41219
    },
    {
        "IDcode": 41220,
        "title": "Aery Tiefling - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/19ca144d3126b4e352a84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41220",
        "pageSeq": 41220
    },
    {
        "IDcode": 41221,
        "title": "Arty - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/e6bb673975285493a47c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41221",
        "pageSeq": 41221
    },
    {
        "IDcode": 41222,
        "title": "Queenie - Mihara (Nikke)",
        "cover": "https://telegra.ph/file/1e8a4fe051cc72fc29604.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41222",
        "pageSeq": 41222
    },
    {
        "IDcode": 41223,
        "title": "Katta Ramos - Misty (Pokemon)",
        "cover": "https://telegra.ph/file/1d620fe8f5d9ed5807003.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41223",
        "pageSeq": 41223
    },
    {
        "IDcode": 41224,
        "title": "Byoru - Regensburg (Azur Lane)",
        "cover": "https://telegra.ph/file/6fe2d12e5ea05e8483b62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41224",
        "pageSeq": 41224
    },
    {
        "IDcode": 41225,
        "title": "Byoru - Yor Forger Black tape (Spy x Family)",
        "cover": "https://telegra.ph/file/41a13bb032c23a4c5dc5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41225",
        "pageSeq": 41225
    },
    {
        "IDcode": 41226,
        "title": "Nookkiizz - Mihara (Nikke)",
        "cover": "https://telegra.ph/file/02ab3587b796be51e169e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41226",
        "pageSeq": 41226
    },
    {
        "IDcode": 41227,
        "title": "Lana Rain - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/fe676ee629946ce0fa7b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41227",
        "pageSeq": 41227
    },
    {
        "IDcode": 41228,
        "title": "Alina Becker - Satsuki (Kill la Kill)",
        "cover": "https://telegra.ph/file/b9c816bfe68153867a823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41228",
        "pageSeq": 41228
    },
    {
        "IDcode": 41229,
        "title": "Byoru - Implacable (Azur Lane)",
        "cover": "https://telegra.ph/file/bebc501aafbf1ab0de8ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41229",
        "pageSeq": 41229
    },
    {
        "IDcode": 41230,
        "title": "Ain Nguyen - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/49353279bb866cae897f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41230",
        "pageSeq": 41230
    },
    {
        "IDcode": 41231,
        "title": "Lera Himera - Perona (One Pice)",
        "cover": "https://telegra.ph/file/5bb8461d8b6961482add5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41231",
        "pageSeq": 41231
    },
    {
        "IDcode": 41232,
        "title": "Hidori Rose - Inoue (Lycoris Recoil)",
        "cover": "https://telegra.ph/file/9c6aec9498acdd765acda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41232",
        "pageSeq": 41232
    },
    {
        "IDcode": 41233,
        "title": "Mikomi Hokina & Sayo Momo - Fubuki & Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/e95de796191f4d70d143e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41233",
        "pageSeq": 41233
    },
    {
        "IDcode": 41234,
        "title": "Lagertha chan - Nazuna (Yufukashi No Uta)",
        "cover": "https://telegra.ph/file/4ed118c585a6c40e9da9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41234",
        "pageSeq": 41234
    },
    {
        "IDcode": 41235,
        "title": "Tsukidesu - Frieren (Sousou no Frieren)",
        "cover": "https://telegra.ph/file/54991ba38209698ee44be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41235",
        "pageSeq": 41235
    },
    {
        "IDcode": 41236,
        "title": "Loliburin - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/e9983eed92c4c3c98846e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41236",
        "pageSeq": 41236
    },
    {
        "IDcode": 41237,
        "title": "Byoru - Nilou (Genshin Impact)",
        "cover": "https://telegra.ph/file/1a26ebd6f2541bd534576.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41237",
        "pageSeq": 41237
    },
    {
        "IDcode": 41238,
        "title": "Kanon Hentai - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/2f6d8ddc96530d49d510a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41238",
        "pageSeq": 41238
    },
    {
        "IDcode": 41239,
        "title": "筱田甜 Xiao Tian - 雪女未亡人",
        "cover": "https://telegra.ph/file/0b01b3dbd849f209093e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41239",
        "pageSeq": 41239
    },
    {
        "IDcode": 41240,
        "title": "Umeko J - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/9f616932915ce3e28550c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41240",
        "pageSeq": 41240
    },
    {
        "IDcode": 41241,
        "title": "Tokar - Misato Nishikigi (Lycoris Recoil)",
        "cover": "https://telegra.ph/file/7878cbc34189b3c0d508c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41241",
        "pageSeq": 41241
    },
    {
        "IDcode": 41242,
        "title": "Eriri Sama - Shizuku (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/800c562201a284ccc2135.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41242",
        "pageSeq": 41242
    },
    {
        "IDcode": 41243,
        "title": "Lele 樂樂 - Sexy Girl Plumber",
        "cover": "https://telegra.ph/file/dcd41fe543a91cb9ba0e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41243",
        "pageSeq": 41243
    },
    {
        "IDcode": 41244,
        "title": "Lady Melamori - Blair (Soul Eater)",
        "cover": "https://telegra.ph/file/ba1e2c96a0e90b8f62ac4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41244",
        "pageSeq": 41244
    },
    {
        "IDcode": 41245,
        "title": "Byoru - Bride Taihou (Azur Lane)",
        "cover": "https://telegra.ph/file/8116a4ee12c0bbd16e67b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41245",
        "pageSeq": 41245
    },
    {
        "IDcode": 41246,
        "title": "Sailorscholar - Cammy White (Street Fighter)",
        "cover": "https://telegra.ph/file/1bdbbb791ec6355623171.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41246",
        "pageSeq": 41246
    },
    {
        "IDcode": 41247,
        "title": "Queenie - Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/1abae9bfb6731b5817c1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41247",
        "pageSeq": 41247
    },
    {
        "IDcode": 41248,
        "title": "Caticornplay - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/7015fe876ec4b027d4be6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41248",
        "pageSeq": 41248
    },
    {
        "IDcode": 41249,
        "title": "Loliburin - Alice (Alice In The Wonderland)",
        "cover": "https://telegra.ph/file/2c1b9298d8ed9f34f09c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41249",
        "pageSeq": 41249
    },
    {
        "IDcode": 41250,
        "title": "星澜 Xianglan  & 夏夏子 Natsuko - 办公室的秘密",
        "cover": "https://telegra.ph/file/af1ac5c35185ed96d8d73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41250",
        "pageSeq": 41250
    },
    {
        "IDcode": 41251,
        "title": "Yummichiyo - Rio (Blue Archive)",
        "cover": "https://telegra.ph/file/4948add2de88e4a173b11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41251",
        "pageSeq": 41251
    },
    {
        "IDcode": 41252,
        "title": "Lana Rain - Froppy (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/4b0ec5bb80c0b04e1a346.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41252",
        "pageSeq": 41252
    },
    {
        "IDcode": 41253,
        "title": "Donna Loli - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/c85e0dfb07f70140c9ff3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41253",
        "pageSeq": 41253
    },
    {
        "IDcode": 41254,
        "title": "Lada Lyumos - Jessie (Pokemon)",
        "cover": "https://telegra.ph/file/2346aeeb1c16a0629a959.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41254",
        "pageSeq": 41254
    },
    {
        "IDcode": 41255,
        "title": "Sayo Momo - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/0d20f0e45c55cfa28c958.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41255",
        "pageSeq": 41255
    },
    {
        "IDcode": 41256,
        "title": "Ain Nguyen - Neko Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/470c2b11854e108232bce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41256",
        "pageSeq": 41256
    },
    {
        "IDcode": 41257,
        "title": "Alina Becker - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/e43f25b6e0f290b231eeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41257",
        "pageSeq": 41257
    },
    {
        "IDcode": 41258,
        "title": "阿半今天很开心 - Marin & Shizuku (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/297939e9d32cd3a1daa65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41258",
        "pageSeq": 41258
    },
    {
        "IDcode": 41259,
        "title": "Hinata sama - Naruko (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/26cf79923bbcf4080558f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41259",
        "pageSeq": 41259
    },
    {
        "IDcode": 41260,
        "title": "小瑶幺幺 Xiao Yao Yao - Tingyu (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/3f4011b9d687a9b447fec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41260",
        "pageSeq": 41260
    }
];
