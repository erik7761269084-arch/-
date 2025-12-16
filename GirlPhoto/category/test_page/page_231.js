// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 45172,
        "title": "Byoru-Himeno - Page 1",
        "cover": "https://telegra.ph/file/20a3a430c865eb8328071.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45172",
        "pageSeq": 45172
    },
    {
        "IDcode": 45173,
        "title": "DJAWA Photo - Yeri - My Cat is a Kawaii Girl - Page 1",
        "cover": "https://telegra.ph/file/283d087c90f214ce3a24a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45173",
        "pageSeq": 45173
    },
    {
        "IDcode": 45174,
        "title": "铃木美咲(Misaki Suzuki) - 想见你想见你想见你X1（绫华单人） - Page 1",
        "cover": "https://telegra.ph/file/20489372b1970998cdb71.gif",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45174",
        "pageSeq": 45174
    },
    {
        "IDcode": 45175,
        "title": "[Twitter] elizamiaomiao (@elizamiaomiao72) - Page 1",
        "cover": "https://telegra.ph/file/23d3fe63eb3c3db7d9ae0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45175",
        "pageSeq": 45175
    },
    {
        "IDcode": 45176,
        "title": "[Twitter] elizamiaomiao (@elizamiaomiao72) - Page 2",
        "cover": "https://telegra.ph/file/454710fcc8c72b5cdf61d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45176",
        "pageSeq": 45176
    },
    {
        "IDcode": 45177,
        "title": "rioko凉凉子 – Helm - Page 1",
        "cover": "https://telegra.ph/file/d1940e07b54b91bd7d193.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45177",
        "pageSeq": 45177
    },
    {
        "IDcode": 45178,
        "title": "Meenfox - Bocchi - Page 1",
        "cover": "https://telegra.ph/file/650b52a4837a7fadd7373.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45178",
        "pageSeq": 45178
    },
    {
        "IDcode": 45179,
        "title": "铃木美咲 (Misaki Suzuki) - 神里绫华 花时来信 - Page 1",
        "cover": "https://telegra.ph/file/5f0142e91080685ee43f0.gif",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45179",
        "pageSeq": 45179
    },
    {
        "IDcode": 45180,
        "title": "神里绫华·花时来信 - Page 1",
        "cover": "https://telegra.ph/file/f67ff113b52022877d587.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45180",
        "pageSeq": 45180
    },
    {
        "IDcode": 45181,
        "title": "Frau - Bride 2B - Page 1",
        "cover": "https://telegra.ph/file/025e286fd4aa630eece20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45181",
        "pageSeq": 45181
    },
    {
        "IDcode": 45182,
        "title": "Azami - Hoshino Ai - Page 1",
        "cover": "https://telegra.ph/file/db98fe5db15b1ca569fe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45182",
        "pageSeq": 45182
    },
    {
        "IDcode": 45183,
        "title": "Potato Godzilla - 2B maid bikini - Page 1",
        "cover": "https://telegra.ph/file/663cdda04e61717087534.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45183",
        "pageSeq": 45183
    },
    {
        "IDcode": 45184,
        "title": "okita rinka - rem bunny maid - Page 1",
        "cover": "https://telegra.ph/file/9b756cec9a44cbcb02baa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45184",
        "pageSeq": 45184
    },
    {
        "IDcode": 45185,
        "title": "禅院熏 – Le Malin - Page 1",
        "cover": "https://telegra.ph/file/2b667c74c674201ee52d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45185",
        "pageSeq": 45185
    },
    {
        "IDcode": 45186,
        "title": "水淼aqua - kisaki selfies - Page 1",
        "cover": "https://telegra.ph/file/2a01cd4e39753cbd974b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45186",
        "pageSeq": 45186
    },
    {
        "IDcode": 45187,
        "title": "aqua area-カフカの下着 - Page 1",
        "cover": "https://telegra.ph/file/2bbef886cbb30c173ada4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45187",
        "pageSeq": 45187
    },
    {
        "IDcode": 45188,
        "title": "Kittyxkum - Haru - Page 1",
        "cover": "https://telegra.ph/file/d7c5d9000ef988b6ba9f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45188",
        "pageSeq": 45188
    },
    {
        "IDcode": 45189,
        "title": "Kaya Huang - Makima - Page 1",
        "cover": "https://telegra.ph/file/268ed0a6909596748d7b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45189",
        "pageSeq": 45189
    },
    {
        "IDcode": 45190,
        "title": "Byoru-Rupee - Page 1",
        "cover": "https://telegra.ph/file/068a90b24d420fb4d7a99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45190",
        "pageSeq": 45190
    },
    {
        "IDcode": 45191,
        "title": "B00b1e - 2B - Page 1",
        "cover": "https://telegra.ph/file/afb8ef62a6c4853c3a50f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45191",
        "pageSeq": 45191
    },
    {
        "IDcode": 45192,
        "title": "曉美媽 NO.025 碧蓝档案 妃咲 [70P-215MB] - Page 1",
        "cover": "https://telegra.ph/file/0438ed6fee785e9977197.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45192",
        "pageSeq": 45192
    },
    {
        "IDcode": 45193,
        "title": "astella(astela chan) - Page 1",
        "cover": "https://telegra.ph/file/73b9e9d0090f6a69e9953.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45193",
        "pageSeq": 45193
    },
    {
        "IDcode": 45194,
        "title": "DonnaLoli - Shimakaze - Page 1",
        "cover": "https://telegra.ph/file/96716930adbaeca9cd9fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45194",
        "pageSeq": 45194
    },
    {
        "IDcode": 45195,
        "title": "Hime Tsu - Yor - Page 1",
        "cover": "https://telegra.ph/file/182b7c738d424bc826fc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45195",
        "pageSeq": 45195
    },
    {
        "IDcode": 45196,
        "title": "DonnaLoli - Yuzuriha - Page 1",
        "cover": "https://telegra.ph/file/190d9ae8ff46c6015f291.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45196",
        "pageSeq": 45196
    },
    {
        "IDcode": 45197,
        "title": "Byoru-Vermeil - Page 1",
        "cover": "https://telegra.ph/file/aabbd5ec0aca1f5d8b686.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45197",
        "pageSeq": 45197
    },
    {
        "IDcode": 45198,
        "title": "byoru - viper - Page 1",
        "cover": "https://telegra.ph/file/1abcccfe9eec0aa449d6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45198",
        "pageSeq": 45198
    },
    {
        "IDcode": 45199,
        "title": "咬一口兔娘ovo - NIKKE 爱丽丝 - Page 1",
        "cover": "https://telegra.ph/file/4cd2891c9c4580f1eb532.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45199",
        "pageSeq": 45199
    },
    {
        "IDcode": 45200,
        "title": "咬一口兔娘ovo - 生化危机4重制版 阿什莉 - Page 1",
        "cover": "https://telegra.ph/file/c724085b9b37da0e958a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45200",
        "pageSeq": 45200
    },
    {
        "IDcode": 45201,
        "title": "咬一口兔娘ovo - 雅努斯喵喵 - Page 1",
        "cover": "https://telegra.ph/file/66d52e95fc4d57eefeeee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45201",
        "pageSeq": 45201
    },
    {
        "IDcode": 45202,
        "title": "Yua Hentai - Kanao - Page 1",
        "cover": "https://telegra.ph/file/28dbcc8c822effcac468b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45202",
        "pageSeq": 45202
    },
    {
        "IDcode": 45203,
        "title": "DJAWA Photo - HaNari (하나리) - Fleet Girl Shimakaze (+S.Ver) - Page 1",
        "cover": "https://telegra.ph/file/dbe81c5a5668dbc87247f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45203",
        "pageSeq": 45203
    },
    {
        "IDcode": 45204,
        "title": "水淼aqua ❄️Xmas 2b❄️ - Page 1",
        "cover": "https://telegra.ph/file/d79249377dc6461250ee5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45204",
        "pageSeq": 45204
    },
    {
        "IDcode": 45205,
        "title": "疯猫ss - 恶毒 - Page 1",
        "cover": "https://telegra.ph/file/d525641fb62bc4dddde2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45205",
        "pageSeq": 45205
    },
    {
        "IDcode": 45206,
        "title": "水淼aqua - アスナちゃん🐰 + アスナちゃん✨ - Page 1",
        "cover": "https://telegra.ph/file/46f868905dc4f41c3f9d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45206",
        "pageSeq": 45206
    },
    {
        "IDcode": 45207,
        "title": "铃木美咲 - 想成为你的偶像（神里绫华JK篇） - Page 1",
        "cover": "https://telegra.ph/file/82716334a90e1ade0b225.gif",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45207",
        "pageSeq": 45207
    },
    {
        "IDcode": 45208,
        "title": "rioko凉凉子 大凤-海滨的白日美梦 - Page 1",
        "cover": "https://telegra.ph/file/0b026bbf0a6b9666a3065.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45208",
        "pageSeq": 45208
    },
    {
        "IDcode": 45209,
        "title": "星之迟迟 - 2023 6月计划B 偶像大师樋口円香 - Page 1",
        "cover": "https://telegra.ph/file/713f456e63980277f5eac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45209",
        "pageSeq": 45209
    },
    {
        "IDcode": 45210,
        "title": "Kittyxkum - Kaguya Shinomiya - Page 1",
        "cover": "https://telegra.ph/file/267c30ef3aa6ab0843575.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45210",
        "pageSeq": 45210
    },
    {
        "IDcode": 45211,
        "title": "Banbanko 半半子 - Asuma Toki - Page 1",
        "cover": "https://telegra.ph/file/f4659d10a34b99cfcb186.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45211",
        "pageSeq": 45211
    },
    {
        "IDcode": 45212,
        "title": "Yuuhui玉汇 - Mako Oiled Kimono - Page 1",
        "cover": "https://telegra.ph/file/d0b0a4161c88ae830ee1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45212",
        "pageSeq": 45212
    },
    {
        "IDcode": 45213,
        "title": "Xidaidai - Janus - Page 1",
        "cover": "https://telegra.ph/file/8139ca32a49b3b36dbb19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45213",
        "pageSeq": 45213
    },
    {
        "IDcode": 45214,
        "title": "DonnaLoli - Gwen - Page 1",
        "cover": "https://telegra.ph/file/c0b24b45c15dc71238403.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45214",
        "pageSeq": 45214
    },
    {
        "IDcode": 45215,
        "title": "Yamisung - Nahida - Page 1",
        "cover": "https://telegra.ph/file/7f7b760c6c45dce038ed7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45215",
        "pageSeq": 45215
    },
    {
        "IDcode": 45216,
        "title": "Kittyxkum - Makima - Page 1",
        "cover": "https://telegra.ph/file/18d4b4802a9d2249a1dfc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45216",
        "pageSeq": 45216
    },
    {
        "IDcode": 45217,
        "title": "蠢沫沫 女神楽園 ガデパラ - Page 1",
        "cover": "https://telegra.ph/file/a652147f53662b5d2a39d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45217",
        "pageSeq": 45217
    },
    {
        "IDcode": 45218,
        "title": "Meladinha - Kobeni - Page 1",
        "cover": "https://telegra.ph/file/dcca7f990cec816b4c568.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45218",
        "pageSeq": 45218
    },
    {
        "IDcode": 45219,
        "title": "Arty Huang - Ayaka shibari - Page 1",
        "cover": "https://telegra.ph/file/dc6d7ba150a82778b884f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45219",
        "pageSeq": 45219
    },
    {
        "IDcode": 45220,
        "title": "小和甜酒 NO.002 &阿呀 - 温泉酒吞奶光双人 [193P-4V 1.11 GB] - Page 1",
        "cover": "https://telegra.ph/file/566fabf77c95b6436d5f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45220",
        "pageSeq": 45220
    },
    {
        "IDcode": 45221,
        "title": "Byoru ビョル - coser合集P2 - Page 1",
        "cover": "https://telegra.ph/file/40e525287875f3fd4f66f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45221",
        "pageSeq": 45221
    },
    {
        "IDcode": 45222,
        "title": "Byoru ビョル - coser合集P2 - Page 2",
        "cover": "https://telegra.ph/file/e00f0a8463ef76d6303c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45222",
        "pageSeq": 45222
    },
    {
        "IDcode": 45223,
        "title": "Byoru ビョル - coser合集P2 - Page 3",
        "cover": "https://telegra.ph/file/f1ca5fbc11a94a6f5c417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45223",
        "pageSeq": 45223
    },
    {
        "IDcode": 45224,
        "title": "Aery Tiefling - Vermeil - Page 1",
        "cover": "https://telegra.ph/file/4e778b50fd25967b62cb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45224",
        "pageSeq": 45224
    },
    {
        "IDcode": 45225,
        "title": "Aery Tiefling - Juri Han - Page 1",
        "cover": "https://telegra.ph/file/80239084661142e5ea58c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45225",
        "pageSeq": 45225
    },
    {
        "IDcode": 45226,
        "title": "Byoru-Chunli - Page 1",
        "cover": "https://telegra.ph/file/34f697ccbae7e993b3d67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45226",
        "pageSeq": 45226
    },
    {
        "IDcode": 45227,
        "title": "Cosplay Ashley Graham [Disharmonica] - Page 1",
        "cover": "https://telegra.ph/file/2f51e3a46d417f5a78ffa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45227",
        "pageSeq": 45227
    },
    {
        "IDcode": 45228,
        "title": "二佐Nisa - 2B女仆 - Page 1",
        "cover": "https://telegra.ph/file/e34df7fb03a4f62232157.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45228",
        "pageSeq": 45228
    },
    {
        "IDcode": 45229,
        "title": "女主K - Makima - Page 1",
        "cover": "https://telegra.ph/file/ade2f61ad873ecdb0f03d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45229",
        "pageSeq": 45229
    },
    {
        "IDcode": 45230,
        "title": "二佐Nisa - 原神荧修女 - Page 1",
        "cover": "https://telegra.ph/file/8308ca226a2e2e07ca973.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45230",
        "pageSeq": 45230
    },
    {
        "IDcode": 45231,
        "title": "Byoru-2B Cybuny - Page 1",
        "cover": "https://telegra.ph/file/8234cf4bd1d6145f9c8c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45231",
        "pageSeq": 45231
    },
    {
        "IDcode": 45232,
        "title": "Byoru - Leifang Autumn Festival Mooncake - Page 1",
        "cover": "https://telegra.ph/file/a09e4b16855e412c89f8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45232",
        "pageSeq": 45232
    },
    {
        "IDcode": 45233,
        "title": "Sayo Momo - NIKKE Naughty Oil Bunny - Page 1",
        "cover": "https://telegra.ph/file/08ae7b4cc049d7a8cbd28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45233",
        "pageSeq": 45233
    },
    {
        "IDcode": 45234,
        "title": "咬一口兔娘ovo - 绫华的小憩 - Page 1",
        "cover": "https://telegra.ph/file/f9e511089909f275da775.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45234",
        "pageSeq": 45234
    },
    {
        "IDcode": 45235,
        "title": "rioko凉凉子 - TOKI兔兔 - Page 1",
        "cover": "https://telegra.ph/file/e7dc4f759ab00f006f425.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45235",
        "pageSeq": 45235
    },
    {
        "IDcode": 45236,
        "title": "Hime Tsu - Marin - Page 1",
        "cover": "https://telegra.ph/file/48833bef4ab794b34a803.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45236",
        "pageSeq": 45236
    },
    {
        "IDcode": 45237,
        "title": "Fantasy Factory - Asuna & Karin - Page 1",
        "cover": "https://telegra.ph/file/5af10e3c7944575490340.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45237",
        "pageSeq": 45237
    },
    {
        "IDcode": 45238,
        "title": "Byoru-Hoshino Ai - Page 1",
        "cover": "https://telegra.ph/file/a0ef7494631eb542d64e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45238",
        "pageSeq": 45238
    },
    {
        "IDcode": 45239,
        "title": "Tokar - Hatsune - Page 1",
        "cover": "https://telegra.ph/file/d0517df9c88c844d916fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45239",
        "pageSeq": 45239
    },
    {
        "IDcode": 45240,
        "title": "二阶堂 - Nahida - Page 1",
        "cover": "https://telegra.ph/file/d0fd68eece50974eb7a09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45240",
        "pageSeq": 45240
    },
    {
        "IDcode": 45241,
        "title": "Byoru-Kisaki - Page 1",
        "cover": "https://telegra.ph/file/6794ed1dc5ebb5248f272.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45241",
        "pageSeq": 45241
    },
    {
        "IDcode": 45242,
        "title": "Tokar - Kal'tsit - Page 1",
        "cover": "https://telegra.ph/file/894352a21725bfaf3c970.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45242",
        "pageSeq": 45242
    },
    {
        "IDcode": 45243,
        "title": "雪琪SAMA - 阿狸杂志 - Page 1",
        "cover": "https://telegra.ph/file/5c7af167c90552cdaaaee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45243",
        "pageSeq": 45243
    },
    {
        "IDcode": 45244,
        "title": "[BlueCake] Bambi - Hancock (One Piece) - Page 1",
        "cover": "https://telegra.ph/file/e6a5679ca86cdae80ce29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45244",
        "pageSeq": 45244
    },
    {
        "IDcode": 45245,
        "title": "MollyRedWolf Albedo cosplay - Page 1",
        "cover": "https://telegra.ph/file/2b06c8a5fc83afa02e1ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45245",
        "pageSeq": 45245
    },
    {
        "IDcode": 45246,
        "title": "宮本桜 - 埃吉尔旗袍 - Page 1",
        "cover": "https://telegra.ph/file/72a60858994d92951f5e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45246",
        "pageSeq": 45246
    },
    {
        "IDcode": 45247,
        "title": "Tokar - Nazuna Nanakusa - Page 1",
        "cover": "https://telegra.ph/file/c0cafd9b89c5a454431f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45247",
        "pageSeq": 45247
    },
    {
        "IDcode": 45248,
        "title": "Tokar - Houshou Marine Bunny - Page 1",
        "cover": "https://telegra.ph/file/59c7f3055c7496935b62d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45248",
        "pageSeq": 45248
    },
    {
        "IDcode": 45249,
        "title": "Tokar - Hoshimachi Suisei - Page 1",
        "cover": "https://telegra.ph/file/3ee8203379841e9bafb2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45249",
        "pageSeq": 45249
    },
    {
        "IDcode": 45250,
        "title": "瓜希酱 葵葵 BA兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/bab6cd41cbf4dafcc4546.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45250",
        "pageSeq": 45250
    },
    {
        "IDcode": 45251,
        "title": "九曲jean 花园花嫁 - Page 1",
        "cover": "https://telegra.ph/file/6eb37bae74e8d796f41fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45251",
        "pageSeq": 45251
    },
    {
        "IDcode": 45252,
        "title": "Cosplayer - Aza miyuko - Page 1",
        "cover": "https://telegra.ph/file/d0cb5c8784c4a49516fa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45252",
        "pageSeq": 45252
    },
    {
        "IDcode": 45253,
        "title": "Cosplayer - Aza miyuko - Page 2",
        "cover": "https://telegra.ph/file/f5030271bf485d58efa32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45253",
        "pageSeq": 45253
    },
    {
        "IDcode": 45254,
        "title": "[幼愛youmeko] 龙卷 - Page 1",
        "cover": "https://telegra.ph/file/4c19c392a41e1d215a7c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45254",
        "pageSeq": 45254
    },
    {
        "IDcode": 45255,
        "title": "[Xidaidai 习呆呆] 后藤一里 (Bocchi The Rock!) - Page 1",
        "cover": "https://telegra.ph/file/ec88a35505fd6f8c00c08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45255",
        "pageSeq": 45255
    },
    {
        "IDcode": 45256,
        "title": "[Comonun] 雌豚産卵計画 - Page 1",
        "cover": "https://telegra.ph/file/ecfc63b6317914a1bba72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45256",
        "pageSeq": 45256
    },
    {
        "IDcode": 45257,
        "title": "Loving Eli - Shinobu - Page 1",
        "cover": "https://telegra.ph/file/0612b1098728f3a2a2c19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45257",
        "pageSeq": 45257
    },
    {
        "IDcode": 45258,
        "title": "Genshin impact_A ninja little_Sayu cosplay Riribonni - Page 1",
        "cover": "https://telegra.ph/file/9cef0aa66ee7d1a9693c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45258",
        "pageSeq": 45258
    },
    {
        "IDcode": 45259,
        "title": "水淼aqua - 妃咲 - Page 1",
        "cover": "https://telegra.ph/file/b3e74ca76c2e695b26564.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45259",
        "pageSeq": 45259
    },
    {
        "IDcode": 45260,
        "title": "[林檎蜜紀] りんごみつき妄想セクションvol.3 腋乳丸出しのムチムチデカ尻ミニスカで何が風紀だ！すぐ快楽堕ちするブル●カ・天雨アコのコスプレ (ブルーアーカイブ) - Page 1",
        "cover": "https://telegra.ph/file/7cb5996b3aedc5cf87cea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45260",
        "pageSeq": 45260
    },
    {
        "IDcode": 45261,
        "title": "[icjhn1225cos] Hoshimachi Suisei Collection (Updated since 5/30/2023) - Page 1",
        "cover": "https://telegra.ph/file/fa1a52a4457ce834de225.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45261",
        "pageSeq": 45261
    },
    {
        "IDcode": 45262,
        "title": "[Xidaidai 习呆呆] 锦木千束 (Lycoris Recoil) - Page 1",
        "cover": "https://telegra.ph/file/a7c6a8cf637859f80b417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45262",
        "pageSeq": 45262
    },
    {
        "IDcode": 45263,
        "title": "Cosplay Feet コスプレ足 - Page 1",
        "cover": "https://telegra.ph/file/1692297454173d09da7c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45263",
        "pageSeq": 45263
    },
    {
        "IDcode": 45264,
        "title": "Cosplay Feet コスプレ足 - Page 2",
        "cover": "https://telegra.ph/file/07c49e6ad7ca473e3967d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45264",
        "pageSeq": 45264
    },
    {
        "IDcode": 45265,
        "title": "铃木美咲 (Misaki Suzuki) - 凝光 - Page 1",
        "cover": "https://telegra.ph/file/a198607bd102fa4306a47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45265",
        "pageSeq": 45265
    },
    {
        "IDcode": 45266,
        "title": "DJAWA Photo - ZziZzi (모찌) Operator 2B - Page 1",
        "cover": "https://telegra.ph/file/0cf6bee4e8ad1e87413ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45266",
        "pageSeq": 45266
    },
    {
        "IDcode": 45267,
        "title": "宫本桜 - Helm (Goddess of Victory Nikke) - Page 1",
        "cover": "https://telegra.ph/file/de7e7c7bac8ad498e69df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45267",
        "pageSeq": 45267
    },
    {
        "IDcode": 45268,
        "title": "洛璃LoLiSAMA - Ägir Golden Dragon Among Auspicious Clouds - Page 1",
        "cover": "https://telegra.ph/file/c1ffcf5f27ade7519d602.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45268",
        "pageSeq": 45268
    },
    {
        "IDcode": 45269,
        "title": "DJAWA Photo - Zzyuri (쮸리) - Asuna’s Maid Mansion (+S.Ver) - Page 1",
        "cover": "https://telegra.ph/file/79897ffc3adc0ceb553fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45269",
        "pageSeq": 45269
    },
    {
        "IDcode": 45270,
        "title": "Loving Eli - Pennywise - Page 1",
        "cover": "https://telegra.ph/file/b9b9122647a14029408be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45270",
        "pageSeq": 45270
    },
    {
        "IDcode": 45271,
        "title": "Byoru - Jackal - Page 1",
        "cover": "https://telegra.ph/file/f95e4957bc8007a581ac9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45271",
        "pageSeq": 45271
    }
];
