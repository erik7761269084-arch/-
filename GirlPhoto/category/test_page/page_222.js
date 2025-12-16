// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 44272,
        "title": "Hong Kong Cosplayer Coser Hisui ongoing spy x family",
        "cover": "https://telegra.ph/file/16e6b800aaebc894d41de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44272",
        "pageSeq": 44272
    },
    {
        "IDcode": 44273,
        "title": "[my suite (あつき)] Suite Extella Link.III (Fate/EXTRA) [DL版]",
        "cover": "https://telegra.ph/file/6760d5e7dea9645c45159.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44273",
        "pageSeq": 44273
    },
    {
        "IDcode": 44274,
        "title": "Magic OnaPet",
        "cover": "https://telegra.ph/file/6f29cefe03d687a768f0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44274",
        "pageSeq": 44274
    },
    {
        "IDcode": 44275,
        "title": "nagisa魔物喵 niconiconi",
        "cover": "https://telegra.ph/file/1804bdfa3780085bac2b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44275",
        "pageSeq": 44275
    },
    {
        "IDcode": 44276,
        "title": "Alina Becker - Ankha",
        "cover": "https://telegra.ph/file/553e4e9559f3b0e5f48dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44276",
        "pageSeq": 44276
    },
    {
        "IDcode": 44277,
        "title": "水淼Aqua［Fantia］",
        "cover": "https://telegra.ph/file/0798e00b106b223cd2571.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44277",
        "pageSeq": 44277
    },
    {
        "IDcode": 44278,
        "title": "かさぎ",
        "cover": "https://telegra.ph/file/5d8b0fbcb3a756bc30adf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44278",
        "pageSeq": 44278
    },
    {
        "IDcode": 44279,
        "title": "Luisa - 喜多川海梦",
        "cover": "https://telegra.ph/file/8d5ba16c6d10299bbf302.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44279",
        "pageSeq": 44279
    },
    {
        "IDcode": 44280,
        "title": "是三不是世w - 麻衣学姐",
        "cover": "https://telegra.ph/file/0f9fd0e697921c41abec6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44280",
        "pageSeq": 44280
    },
    {
        "IDcode": 44281,
        "title": "Vinnegal - 2B White",
        "cover": "https://telegra.ph/file/ad266716a84bd13825c62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44281",
        "pageSeq": 44281
    },
    {
        "IDcode": 44282,
        "title": "白烨烨 - 恶魔姐姐兔女郎",
        "cover": "https://telegra.ph/file/24ac53f179853a9adeec9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44282",
        "pageSeq": 44282
    },
    {
        "IDcode": 44283,
        "title": "Voezacos - Spider-Gwen",
        "cover": "https://telegra.ph/file/c4775ed14f8dbc737788b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44283",
        "pageSeq": 44283
    },
    {
        "IDcode": 44284,
        "title": "Pingping - Ada Wong Nurse",
        "cover": "https://telegra.ph/file/87878d91fccb750a89ad4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44284",
        "pageSeq": 44284
    },
    {
        "IDcode": 44285,
        "title": "蜜蜜子-迦南",
        "cover": "https://telegra.ph/file/7f158246e73594fb85202.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44285",
        "pageSeq": 44285
    },
    {
        "IDcode": 44286,
        "title": "九曲Jean – 定制剑圣女(40P168MB)",
        "cover": "https://telegra.ph/file/46e078e92e98cb72823b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44286",
        "pageSeq": 44286
    },
    {
        "IDcode": 44287,
        "title": "KuukoW - Eula",
        "cover": "https://telegra.ph/file/7cc9307b837071900fc30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44287",
        "pageSeq": 44287
    },
    {
        "IDcode": 44288,
        "title": "星之迟迟 - 碧蓝航线镇海",
        "cover": "https://telegra.ph/file/35430ddd3fc843371b921.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44288",
        "pageSeq": 44288
    },
    {
        "IDcode": 44289,
        "title": "Bambi - Ichinose Asuna",
        "cover": "https://telegra.ph/file/4b56e73ae47594ac18ff3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44289",
        "pageSeq": 44289
    },
    {
        "IDcode": 44290,
        "title": "橙子喵酱 - 艾米莉亚 [13P]",
        "cover": "https://telegra.ph/file/83c37f27f1460a8f659e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44290",
        "pageSeq": 44290
    },
    {
        "IDcode": 44291,
        "title": "橙子喵酱 - 独角兽 [34P]",
        "cover": "https://telegra.ph/file/8dd5c23b117837d388201.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44291",
        "pageSeq": 44291
    },
    {
        "IDcode": 44292,
        "title": "蜜蜜子Kimmie - 天狼星",
        "cover": "https://telegra.ph/file/b2ea70263bfec1e539ba2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44292",
        "pageSeq": 44292
    },
    {
        "IDcode": 44293,
        "title": "Neppu - ATAGO RACING",
        "cover": "https://telegra.ph/file/f0de46422271af594408b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44293",
        "pageSeq": 44293
    },
    {
        "IDcode": 44294,
        "title": "Neppu - Belfast",
        "cover": "https://telegra.ph/file/f9c8833c6649b53ca60fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44294",
        "pageSeq": 44294
    },
    {
        "IDcode": 44295,
        "title": "Umeko J - Shuten sushi",
        "cover": "https://telegra.ph/file/288f8c7b68a881933caaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44295",
        "pageSeq": 44295
    },
    {
        "IDcode": 44296,
        "title": "Umeko J - St. Louis",
        "cover": "https://telegra.ph/file/4c85c1c6bad95efb9b78b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44296",
        "pageSeq": 44296
    },
    {
        "IDcode": 44297,
        "title": "Meikoui - D.Va",
        "cover": "https://telegra.ph/file/ed54f12a94d74cb4d3842.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44297",
        "pageSeq": 44297
    },
    {
        "IDcode": 44298,
        "title": "Byoru - Rosaria",
        "cover": "https://telegra.ph/file/d1a29b746232653b132fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44298",
        "pageSeq": 44298
    },
    {
        "IDcode": 44299,
        "title": "星之迟迟 - 利兹",
        "cover": "https://telegra.ph/file/8f61d9511303350e5c7b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44299",
        "pageSeq": 44299
    },
    {
        "IDcode": 44300,
        "title": "Alina Becker - 2B",
        "cover": "https://telegra.ph/file/b97d35d93c7ebedda5d1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44300",
        "pageSeq": 44300
    },
    {
        "IDcode": 44301,
        "title": "沖田凜花-冰雪30p480MB",
        "cover": "https://telegra.ph/file/3de77f97e17fccfdc8362.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44301",
        "pageSeq": 44301
    },
    {
        "IDcode": 44302,
        "title": "[Neppu] Tokoyami Towa",
        "cover": "https://telegra.ph/file/65fa8b5d993b0ee77923f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44302",
        "pageSeq": 44302
    },
    {
        "IDcode": 44303,
        "title": "Queenie - Chun Li Battle Outfit",
        "cover": "https://telegra.ph/file/1656476d26fdafc6ea91b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44303",
        "pageSeq": 44303
    },
    {
        "IDcode": 44304,
        "title": "Aery Tiefling - Asuka",
        "cover": "https://telegra.ph/file/85594693ef89ef758840d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44304",
        "pageSeq": 44304
    },
    {
        "IDcode": 44305,
        "title": "Meikoui - Nezuko",
        "cover": "https://telegra.ph/file/be67c40ac9babd6a99f43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44305",
        "pageSeq": 44305
    },
    {
        "IDcode": 44306,
        "title": "Meikoui - Bowsette",
        "cover": "https://telegra.ph/file/2cd056c27066b68353e25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44306",
        "pageSeq": 44306
    },
    {
        "IDcode": 44307,
        "title": "(C85) [Heru3 (Lenfried)] 恋フリートこれくしょん ～恋これ～ (艦隊これくしょん)",
        "cover": "https://telegra.ph/file/0a822ef0245706134db05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44307",
        "pageSeq": 44307
    },
    {
        "IDcode": 44308,
        "title": "kittyxkum kobeni Chainsaw Man",
        "cover": "https://telegra.ph/file/766927b5e55a14c6fff2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44308",
        "pageSeq": 44308
    },
    {
        "IDcode": 44309,
        "title": "kittyxkum kanao Demon Slayer",
        "cover": "https://telegra.ph/file/077482b6ff1e57a606a36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44309",
        "pageSeq": 44309
    },
    {
        "IDcode": 44310,
        "title": "星之迟迟-菊千代",
        "cover": "https://telegra.ph/file/91584fde1c837761bfd0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44310",
        "pageSeq": 44310
    },
    {
        "IDcode": 44311,
        "title": "那位大人-喜多川海梦",
        "cover": "https://telegra.ph/file/033b3670a5ebd6274404d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44311",
        "pageSeq": 44311
    },
    {
        "IDcode": 44312,
        "title": "水淼Aqua - Ganyu Succubus",
        "cover": "https://telegra.ph/file/e2a4db1a692225e95fc01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44312",
        "pageSeq": 44312
    },
    {
        "IDcode": 44313,
        "title": "kittyxkum kurumi Date A Live",
        "cover": "https://telegra.ph/file/e6fcc490032be4773ceba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44313",
        "pageSeq": 44313
    },
    {
        "IDcode": 44314,
        "title": "kittyxkum Hammann azurlane",
        "cover": "https://telegra.ph/file/4e8ebef03702d75586ca0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44314",
        "pageSeq": 44314
    },
    {
        "IDcode": 44315,
        "title": "Aleksandra Bodler - Gawr Gura",
        "cover": "https://telegra.ph/file/568a1689f0bbd999bc4d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44315",
        "pageSeq": 44315
    },
    {
        "IDcode": 44316,
        "title": "Alin ma  Xenon",
        "cover": "https://telegra.ph/file/70057820c087e61c234d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44316",
        "pageSeq": 44316
    },
    {
        "IDcode": 44317,
        "title": "Tsuki Desu - Elizabeth Liones",
        "cover": "https://telegra.ph/file/db38d298d6c465b7f2ca1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44317",
        "pageSeq": 44317
    },
    {
        "IDcode": 44318,
        "title": "Yoshinobi - Bunny Illulu",
        "cover": "https://telegra.ph/file/63b6edec82c33beb9059c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44318",
        "pageSeq": 44318
    },
    {
        "IDcode": 44319,
        "title": "Hinata Hyuga (Sweetie Fox)",
        "cover": "https://telegra.ph/file/94c96bc7987c8cd0ba045.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44319",
        "pageSeq": 44319
    },
    {
        "IDcode": 44320,
        "title": "齋齋いつき itsukichan - Keke Tang",
        "cover": "https://telegra.ph/file/8bef4a057ef3a031b869a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44320",
        "pageSeq": 44320
    },
    {
        "IDcode": 44321,
        "title": "Mona - Alicekyo",
        "cover": "https://telegra.ph/file/519e0085fc2a7c3575fff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44321",
        "pageSeq": 44321
    },
    {
        "IDcode": 44322,
        "title": "Ryuuko Matoi (Sweetie Fox)",
        "cover": "https://telegra.ph/file/0025e41a47093ccf38fb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44322",
        "pageSeq": 44322
    },
    {
        "IDcode": 44323,
        "title": "Makima (Sweetie Fox)",
        "cover": "https://telegra.ph/file/bd56775d862c3104b3aee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44323",
        "pageSeq": 44323
    },
    {
        "IDcode": 44324,
        "title": "Donnaloli - Gwenpool",
        "cover": "https://telegra.ph/file/3d9c31c380bdfde3d8f14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44324",
        "pageSeq": 44324
    },
    {
        "IDcode": 44325,
        "title": "Donna loli - Ishtar",
        "cover": "https://telegra.ph/file/ddd6f78877f722ee6f296.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44325",
        "pageSeq": 44325
    },
    {
        "IDcode": 44326,
        "title": "Mikasa Ackerman (Sweetie Fox)",
        "cover": "https://telegra.ph/file/62c3ed292b30291f392dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44326",
        "pageSeq": 44326
    },
    {
        "IDcode": 44327,
        "title": "Kenizinea - Tsunade",
        "cover": "https://telegra.ph/file/9bb13e9ee0c2fa19fd5d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44327",
        "pageSeq": 44327
    },
    {
        "IDcode": 44328,
        "title": "Maria Desu - Yae Miko",
        "cover": "https://telegra.ph/file/b86934cb702c5ef13cb1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44328",
        "pageSeq": 44328
    },
    {
        "IDcode": 44329,
        "title": "Gumiho hannya - Lenore (Castlevania)",
        "cover": "https://telegra.ph/file/78fdb58e6918158872f78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44329",
        "pageSeq": 44329
    },
    {
        "IDcode": 44330,
        "title": "Hana Bunny - Hachisakusama",
        "cover": "https://telegra.ph/file/e0652e8af6182310ebcbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44330",
        "pageSeq": 44330
    },
    {
        "IDcode": 44331,
        "title": "Mikomin - Gym Raiden Shogun",
        "cover": "https://telegra.ph/file/7fcc3192da15368d318c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44331",
        "pageSeq": 44331
    },
    {
        "IDcode": 44332,
        "title": "Neppu - Belfast",
        "cover": "https://telegra.ph/file/d55425222aac9b55d5dd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44332",
        "pageSeq": 44332
    },
    {
        "IDcode": 44333,
        "title": "AT鲨 - 麻衣学姐",
        "cover": "https://telegra.ph/file/9ed005b39e2dfd159c10a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44333",
        "pageSeq": 44333
    },
    {
        "IDcode": 44334,
        "title": "雪晴Astra - 黑江雫",
        "cover": "https://telegra.ph/file/213eab998391eb85faae1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44334",
        "pageSeq": 44334
    },
    {
        "IDcode": 44335,
        "title": "Byoru - Riamu Nekomini",
        "cover": "https://telegra.ph/file/d62635d63165c66f70a0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44335",
        "pageSeq": 44335
    },
    {
        "IDcode": 44336,
        "title": "Yoshinobi - Nozomi",
        "cover": "https://telegra.ph/file/f2b28ae55e56b6e7a209a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44336",
        "pageSeq": 44336
    },
    {
        "IDcode": 44337,
        "title": "白莉爱吃巧克力 - 芭芭拉",
        "cover": "https://telegra.ph/file/1a71bba8aefe22d5a217a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44337",
        "pageSeq": 44337
    },
    {
        "IDcode": 44338,
        "title": "Donna Loli - Jinx",
        "cover": "https://telegra.ph/file/24210520d91f1f37e4559.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44338",
        "pageSeq": 44338
    },
    {
        "IDcode": 44339,
        "title": "日奈娇 NO.046 穹妹",
        "cover": "https://telegra.ph/file/cf0b17808452d175448d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44339",
        "pageSeq": 44339
    },
    {
        "IDcode": 44340,
        "title": "Donna Loli - Yor",
        "cover": "https://telegra.ph/file/3dbc51ffcd59d2a13b7b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44340",
        "pageSeq": 44340
    },
    {
        "IDcode": 44341,
        "title": "Son YeEun 손예은 - CODE : 002 MINI",
        "cover": "https://telegra.ph/file/de5a5f453e28205cf4b0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44341",
        "pageSeq": 44341
    },
    {
        "IDcode": 44342,
        "title": "RAIDEN SHOGUN EI By Joyce_lin2x",
        "cover": "https://telegra.ph/file/6f8f7802478e911d2248c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44342",
        "pageSeq": 44342
    },
    {
        "IDcode": 44343,
        "title": "Byoru - Nyotengu Dark Prison ver",
        "cover": "https://telegra.ph/file/d30141b66e8d0ec174309.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44343",
        "pageSeq": 44343
    },
    {
        "IDcode": 44344,
        "title": "[DJAWA] Maruemon - GANTZ",
        "cover": "https://telegra.ph/file/502147235c1c1bfb30a80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44344",
        "pageSeq": 44344
    },
    {
        "IDcode": 44345,
        "title": "Aery Tiefling - Hinata Hyuga",
        "cover": "https://telegra.ph/file/48b6e2dccd926d54593a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44345",
        "pageSeq": 44345
    },
    {
        "IDcode": 44346,
        "title": "白莉爱吃巧克力 - 安琪拉",
        "cover": "https://telegra.ph/file/2e6c64a8e45bf5b446759.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44346",
        "pageSeq": 44346
    },
    {
        "IDcode": 44347,
        "title": "Aery Tiefling - Hayase Nagatoro",
        "cover": "https://telegra.ph/file/20f7d80d9689bf250f202.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44347",
        "pageSeq": 44347
    },
    {
        "IDcode": 44348,
        "title": "Aery Tiefling - Hatsune Miku",
        "cover": "https://telegra.ph/file/b4e96d4822eed8b759b2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44348",
        "pageSeq": 44348
    },
    {
        "IDcode": 44349,
        "title": "Aery Tiefling - Ochako Uraraka",
        "cover": "https://telegra.ph/file/24bc6cd6ec9a2c849973f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44349",
        "pageSeq": 44349
    },
    {
        "IDcode": 44350,
        "title": "Aery Tiefling - Chika Fujiwara",
        "cover": "https://telegra.ph/file/52af35475a12e76727e4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44350",
        "pageSeq": 44350
    },
    {
        "IDcode": 44351,
        "title": "蠢沫沫 - 深海少女",
        "cover": "https://telegra.ph/file/eadaa2707f980a9761f55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44351",
        "pageSeq": 44351
    },
    {
        "IDcode": 44352,
        "title": "Azami - Yor",
        "cover": "https://telegra.ph/file/e017e55ae714948a821e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44352",
        "pageSeq": 44352
    },
    {
        "IDcode": 44353,
        "title": "软妹摇摇乐 自撮り vol.31 嫩足蘿莉系",
        "cover": "https://telegra.ph/file/909a74cea038f209a785d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44353",
        "pageSeq": 44353
    },
    {
        "IDcode": 44354,
        "title": "ShiroKitsune - Motoko Kusanagi (Ghost in the Shell)",
        "cover": "https://telegra.ph/file/475c7fc36b0c0416ee1a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44354",
        "pageSeq": 44354
    },
    {
        "IDcode": 44355,
        "title": "ShiroKitsune - Nino Nakano (The Quintessential Quintuplets)",
        "cover": "https://telegra.ph/file/7b12e9846bca38d9ca741.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44355",
        "pageSeq": 44355
    },
    {
        "IDcode": 44356,
        "title": "Aery Tiefling - Chocola",
        "cover": "https://telegra.ph/file/3268e836e6c0397584a8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44356",
        "pageSeq": 44356
    },
    {
        "IDcode": 44357,
        "title": "KuukoW - Columbina",
        "cover": "https://telegra.ph/file/87229b0da4d0a33c356fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44357",
        "pageSeq": 44357
    },
    {
        "IDcode": 44358,
        "title": "瓜希酱 大凤JK",
        "cover": "https://telegra.ph/file/47b90ae95b8d037006284.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44358",
        "pageSeq": 44358
    },
    {
        "IDcode": 44359,
        "title": "Hana Bunny - Yelan",
        "cover": "https://telegra.ph/file/714b6828645c2b4197b14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44359",
        "pageSeq": 44359
    },
    {
        "IDcode": 44360,
        "title": "★魔法少女マミの剃毛潮吹きパイパンオナニー★",
        "cover": "https://telegra.ph/file/8198b474fb3b4d0a7a612.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44360",
        "pageSeq": 44360
    },
    {
        "IDcode": 44361,
        "title": "[なおみん@母乳育児中] 鹿島さんいろいろ",
        "cover": "https://telegra.ph/file/13f97d623d46e162ea037.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44361",
        "pageSeq": 44361
    },
    {
        "IDcode": 44362,
        "title": "[習呆呆] カグラナナ+カグラナナ部屋着",
        "cover": "https://telegra.ph/file/19d55087d0d8a7598a56b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44362",
        "pageSeq": 44362
    },
    {
        "IDcode": 44363,
        "title": "[習呆呆] ヴァンパイア カズハ",
        "cover": "https://telegra.ph/file/854157dc8f71af993bc5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44363",
        "pageSeq": 44363
    },
    {
        "IDcode": 44364,
        "title": "[Aki] Astolfo",
        "cover": "https://telegra.ph/file/0ad69f1b70b7dfdfdb9e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44364",
        "pageSeq": 44364
    },
    {
        "IDcode": 44365,
        "title": "[Saiwari] Kazuha | Venti | Luna",
        "cover": "https://telegra.ph/file/9fcc8cb90659c0a2edd34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44365",
        "pageSeq": 44365
    },
    {
        "IDcode": 44366,
        "title": "Vinnegal - Asuna",
        "cover": "https://telegra.ph/file/9b254fd2bb274adb70a30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44366",
        "pageSeq": 44366
    },
    {
        "IDcode": 44367,
        "title": "Hidori Rose - Bunny Yor Forger",
        "cover": "https://telegra.ph/file/8d30f14de6a57c6feac1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44367",
        "pageSeq": 44367
    },
    {
        "IDcode": 44368,
        "title": "Hidori Rose & Mikomi Hokina - Atago & Takao",
        "cover": "https://telegra.ph/file/ccf6e4cf877754c348755.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44368",
        "pageSeq": 44368
    },
    {
        "IDcode": 44369,
        "title": "[わんこちゃん] 島風 | 白上フブキ",
        "cover": "https://telegra.ph/file/ecad16c6bc1c7290d4df5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44369",
        "pageSeq": 44369
    },
    {
        "IDcode": 44370,
        "title": "宮本桜(宫本樱樱饼) - 恶毒",
        "cover": "https://telegra.ph/file/5151ccf5b35583ec60829.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44370",
        "pageSeq": 44370
    },
    {
        "IDcode": 44371,
        "title": "[Sex Syndrome] ガチセフレちゃん 乃木⊿５期生テレパン似 E65cup１８歳肉食清純性欲女子大レイヤーみゆちぃ Ｊ〇卒業ほやほや彼氏有り顔バレ絶対ＮＧオールゴム無し生中出し 着せ恋 しずくたん[H]",
        "cover": "https://telegra.ph/file/3be4c512ee1c4b09288d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44371",
        "pageSeq": 44371
    }
];
