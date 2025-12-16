// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 48272,
        "title": "Yoshinobi Fansly + Twitter + Patreon [2023 - 2024] - Page 1",
        "cover": "https://telegra.ph/file/4fe9b70d40b4c85b82f3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48272",
        "pageSeq": 48272
    },
    {
        "IDcode": 48273,
        "title": "Neppu - Mashu - Page 1",
        "cover": "https://telegra.ph/file/06ebe2211489d65862fbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48273",
        "pageSeq": 48273
    },
    {
        "IDcode": 48274,
        "title": "Hinata2000 - Ayaka schoolgirl uniform - Page 1",
        "cover": "https://telegra.ph/file/2c0c7f19fce60bdb1040d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48274",
        "pageSeq": 48274
    },
    {
        "IDcode": 48275,
        "title": "Xidaidai - Frieren - Page 1",
        "cover": "https://telegra.ph/file/13e506caa85eb273c6a3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48275",
        "pageSeq": 48275
    },
    {
        "IDcode": 48276,
        "title": "Neppu - Marine - Page 1",
        "cover": "https://telegra.ph/file/8b5361012bcf536d257c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48276",
        "pageSeq": 48276
    },
    {
        "IDcode": 48277,
        "title": "Meenfox - Ayaka - Page 1",
        "cover": "https://telegra.ph/file/feb7ecd7df80f6bce8671.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48277",
        "pageSeq": 48277
    },
    {
        "IDcode": 48278,
        "title": "软萌兔兔酱 - 拉珠草神 with GIF - Page 1",
        "cover": "https://telegra.ph/file/1ebb4097cb5dfca948781.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48278",
        "pageSeq": 48278
    },
    {
        "IDcode": 48279,
        "title": "咬一口兔娘ovo 巴尔的摩 [76P+1V] - Page 1",
        "cover": "https://telegra.ph/file/98aa2f8ab83e405152a20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48279",
        "pageSeq": 48279
    },
    {
        "IDcode": 48280,
        "title": "Nagomi - 喜多川魅魔 [45P-59.3MB] - Page 1",
        "cover": "https://telegra.ph/file/0ba1db6d5374ca7552e1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48280",
        "pageSeq": 48280
    },
    {
        "IDcode": 48281,
        "title": "Lagertha chan - Bunny Marin - Page 1",
        "cover": "https://telegra.ph/file/3f24e128befc8bbcdc74d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48281",
        "pageSeq": 48281
    },
    {
        "IDcode": 48282,
        "title": "Littlebluegirl6 - Tifa - Page 1",
        "cover": "https://telegra.ph/file/3bf298abfc08fb12fa30d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48282",
        "pageSeq": 48282
    },
    {
        "IDcode": 48283,
        "title": "[HERESY (林檎蜜紀)] マル秘アーカイブ・一之瀬アスナ2 - Page 1",
        "cover": "https://telegra.ph/file/4c611df518038c4166a41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48283",
        "pageSeq": 48283
    },
    {
        "IDcode": 48284,
        "title": "[HERESY (林檎蜜紀)] マル秘アーカイブ・一之瀬アスナ - Page 1",
        "cover": "https://telegra.ph/file/ff987578fc194963b684a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48284",
        "pageSeq": 48284
    },
    {
        "IDcode": 48285,
        "title": "Me1adinha-  2B - Page 1",
        "cover": "https://telegra.ph/file/941b71acbfb336b033bd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48285",
        "pageSeq": 48285
    },
    {
        "IDcode": 48286,
        "title": "阿雪雪 - 泥岩泳装 明日方舟 - Page 1",
        "cover": "https://telegra.ph/file/21dcad7d18ddee63bebe5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48286",
        "pageSeq": 48286
    },
    {
        "IDcode": 48287,
        "title": "[封疆疆] 碧蓝档案 妃咲 兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/62229c6bfe516ac5bcd2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48287",
        "pageSeq": 48287
    },
    {
        "IDcode": 48288,
        "title": "阿包也是兔娘 冰雪2B - Page 1",
        "cover": "https://telegra.ph/file/978a8a2c0ba64a73bec60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48288",
        "pageSeq": 48288
    },
    {
        "IDcode": 48289,
        "title": "Sayo Momo - Yor Forger - Page 1",
        "cover": "https://telegra.ph/file/a15ffd29f5e969f4036af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48289",
        "pageSeq": 48289
    },
    {
        "IDcode": 48290,
        "title": "biya1024 cos合集 - Page 1",
        "cover": "https://telegra.ph/file/5ae793be1855d75847f07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48290",
        "pageSeq": 48290
    },
    {
        "IDcode": 48291,
        "title": "TiTi - Nurse (Silent Hill) - Page 1",
        "cover": "https://telegra.ph/file/fb2d82c6ec023f381f8c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48291",
        "pageSeq": 48291
    },
    {
        "IDcode": 48292,
        "title": "tuzi (twitter pics) - Page 1",
        "cover": "https://telegra.ph/file/67188faf3d9837c214410.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48292",
        "pageSeq": 48292
    },
    {
        "IDcode": 48293,
        "title": "您的蛋蛋 - 我的狐仙女友-源千鹤 - Page 1",
        "cover": "https://telegra.ph/file/f0c8da487c9ab2eee558d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48293",
        "pageSeq": 48293
    },
    {
        "IDcode": 48294,
        "title": "Misswarmj - 申鹤 - Page 1",
        "cover": "https://telegra.ph/file/d8b6ae902b3e5a7db0180.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48294",
        "pageSeq": 48294
    },
    {
        "IDcode": 48295,
        "title": "Jiujiangbaby - Nahida - Page 1",
        "cover": "https://telegra.ph/file/25e0465069916736dbc0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48295",
        "pageSeq": 48295
    },
    {
        "IDcode": 48296,
        "title": "Hana Bunny & Byoru - Fern & Frieren - Page 1",
        "cover": "https://telegra.ph/file/33c90331240c369cdf369.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48296",
        "pageSeq": 48296
    },
    {
        "IDcode": 48297,
        "title": "[封疆疆] 碧蓝档案 妃咲 [34P-348MB] - Page 1",
        "cover": "https://telegra.ph/file/31c7cdf3337a1440489a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48297",
        "pageSeq": 48297
    },
    {
        "IDcode": 48298,
        "title": "Vinnegal - Zelda - Page 1",
        "cover": "https://telegra.ph/file/773815c47643a6143ecbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48298",
        "pageSeq": 48298
    },
    {
        "IDcode": 48299,
        "title": "[小仓千代w] 23年12月patreon会员合集 131P - Page 1",
        "cover": "https://telegra.ph/file/6f69402964f8be167339f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48299",
        "pageSeq": 48299
    },
    {
        "IDcode": 48300,
        "title": "Aqua Area - Blue Archive Asuna Ichinose - Page 1",
        "cover": "https://telegra.ph/file/969b90ead47b5befa96b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48300",
        "pageSeq": 48300
    },
    {
        "IDcode": 48301,
        "title": "Vinnegal - Shadowheart - Page 1",
        "cover": "https://telegra.ph/file/a1314def2f9f76fab5331.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48301",
        "pageSeq": 48301
    },
    {
        "IDcode": 48302,
        "title": "Vinnegal - Satsuki (Nudist Beach) - Page 1",
        "cover": "https://telegra.ph/file/aadff18fbf75d621dd801.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48302",
        "pageSeq": 48302
    },
    {
        "IDcode": 48303,
        "title": "Byoru - Santa Tifa - Page 1",
        "cover": "https://telegra.ph/file/6a926f445b11a90767639.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48303",
        "pageSeq": 48303
    },
    {
        "IDcode": 48304,
        "title": "小鳥遊六花 - Page 1",
        "cover": "https://telegra.ph/file/0e028ad189d7c4eff02ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48304",
        "pageSeq": 48304
    },
    {
        "IDcode": 48305,
        "title": "Heavenly God Bastet - Page 1",
        "cover": "https://telegra.ph/file/56dbd48470fad33799f6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48305",
        "pageSeq": 48305
    },
    {
        "IDcode": 48306,
        "title": "小仓千代w 2B 短裙 - Page 1",
        "cover": "https://telegra.ph/file/85c86b5100e0c82787ef9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48306",
        "pageSeq": 48306
    },
    {
        "IDcode": 48307,
        "title": "小仓千代w 2B 圣诞 - Page 1",
        "cover": "https://telegra.ph/file/7dc1422cde9de881415ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48307",
        "pageSeq": 48307
    },
    {
        "IDcode": 48308,
        "title": "九言 (阿九从不咕咕) - 停云 - Page 1",
        "cover": "https://telegra.ph/file/099c62f808ef13637e750.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48308",
        "pageSeq": 48308
    },
    {
        "IDcode": 48309,
        "title": "Hinata2000 - Ishtar - Page 1",
        "cover": "https://telegra.ph/file/7935cc4349bd9bf06355f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48309",
        "pageSeq": 48309
    },
    {
        "IDcode": 48310,
        "title": "星之迟迟  华甲  HwahJah   AZURLANE - Page 1",
        "cover": "https://telegra.ph/file/44af6a132cbacba0be0c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48310",
        "pageSeq": 48310
    },
    {
        "IDcode": 48311,
        "title": "Genshin Impact - Page 1",
        "cover": "https://telegra.ph/file/7230c5cccb2e7a7caffb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48311",
        "pageSeq": 48311
    },
    {
        "IDcode": 48312,
        "title": "Genshin Impact - Page 2",
        "cover": "https://telegra.ph/file/c107302c3deee547de66d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48312",
        "pageSeq": 48312
    },
    {
        "IDcode": 48313,
        "title": "[nonsummerjack] Owari - Page 1",
        "cover": "https://telegra.ph/file/c7ccf4ffafcaa6f04146b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48313",
        "pageSeq": 48313
    },
    {
        "IDcode": 48314,
        "title": "小鸟酱 - 2B - Page 1",
        "cover": "https://telegra.ph/file/a12ee1c4a0061ab0f8881.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48314",
        "pageSeq": 48314
    },
    {
        "IDcode": 48315,
        "title": "Lada Lyumos - Zelda - Page 1",
        "cover": "https://telegra.ph/file/73caf7acb72866586d795.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48315",
        "pageSeq": 48315
    },
    {
        "IDcode": 48316,
        "title": "Arty Huang - Santa Ganyu - Page 1",
        "cover": "https://telegra.ph/file/fa4b5b276ca5889bae88a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48316",
        "pageSeq": 48316
    },
    {
        "IDcode": 48317,
        "title": "Arty Huang - Kisaki - Page 1",
        "cover": "https://telegra.ph/file/e98146342370a4a45e293.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48317",
        "pageSeq": 48317
    },
    {
        "IDcode": 48318,
        "title": "Umeko J - Toga Himiko Bunny - Page 1",
        "cover": "https://telegra.ph/file/fa7fcacbca68911364638.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48318",
        "pageSeq": 48318
    },
    {
        "IDcode": 48319,
        "title": "Vinnegal - D.va - Page 1",
        "cover": "https://telegra.ph/file/ac01f7377287c1168c6b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48319",
        "pageSeq": 48319
    },
    {
        "IDcode": 48320,
        "title": "Wildhoney - Bride Ganyu - Page 1",
        "cover": "https://telegra.ph/file/baea95d4d088a47ad571e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48320",
        "pageSeq": 48320
    },
    {
        "IDcode": 48321,
        "title": "Aina Mikami - Ganyu - Page 1",
        "cover": "https://telegra.ph/file/9b86835d0e00180dfa94e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48321",
        "pageSeq": 48321
    },
    {
        "IDcode": 48322,
        "title": "AZURE - REM Cow Bikini - Page 1",
        "cover": "https://telegra.ph/file/493f49c154f72449fcdcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48322",
        "pageSeq": 48322
    },
    {
        "IDcode": 48323,
        "title": "Byoru-Fern - Page 1",
        "cover": "https://telegra.ph/file/c59f2658396c67ae4590c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48323",
        "pageSeq": 48323
    },
    {
        "IDcode": 48324,
        "title": "桃暖酱 - 拉姆的秘密 - Page 1",
        "cover": "https://telegra.ph/file/ab2aed8ef3f3612f4d244.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48324",
        "pageSeq": 48324
    },
    {
        "IDcode": 48325,
        "title": "Hana Bunny - Chun li - Page 1",
        "cover": "https://telegra.ph/file/d05a83cafc5b7c3eb233c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48325",
        "pageSeq": 48325
    },
    {
        "IDcode": 48326,
        "title": "钛合金TiTi - 杀戮都市 - Page 1",
        "cover": "https://telegra.ph/file/6124b9cf22e73ea0e3805.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48326",
        "pageSeq": 48326
    },
    {
        "IDcode": 48327,
        "title": "G44不会受伤 芙洛伦春节 - Page 1",
        "cover": "https://telegra.ph/file/553d0d5aae3ac352a55b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48327",
        "pageSeq": 48327
    },
    {
        "IDcode": 48328,
        "title": "Fantasy Factory - Mashu - Page 1",
        "cover": "https://telegra.ph/file/f3a6b830d3d287196f6fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48328",
        "pageSeq": 48328
    },
    {
        "IDcode": 48329,
        "title": "Hinata2000 - Raiden Shogun - Page 1",
        "cover": "https://telegra.ph/file/502d421aac3e83853e885.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48329",
        "pageSeq": 48329
    },
    {
        "IDcode": 48330,
        "title": "YummyKimmy- Yor Forger Set - Page 1",
        "cover": "https://telegra.ph/file/ad77de7143dbd8748734e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48330",
        "pageSeq": 48330
    },
    {
        "IDcode": 48331,
        "title": "软萌兔兔酱 - 拉珠草神 - Page 1",
        "cover": "https://telegra.ph/file/d18547b7b839acd0b6b1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48331",
        "pageSeq": 48331
    },
    {
        "IDcode": 48332,
        "title": "Byoru-Mavis - Page 1",
        "cover": "https://telegra.ph/file/39dc9d2384b458ffc15bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48332",
        "pageSeq": 48332
    },
    {
        "IDcode": 48333,
        "title": "Okada Yui - Chun Li - Page 1",
        "cover": "https://telegra.ph/file/1e57005c8eb5fc7040358.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48333",
        "pageSeq": 48333
    },
    {
        "IDcode": 48334,
        "title": "倦倦喵-甘雨 魅魔- genshin impact - Page 1",
        "cover": "https://telegra.ph/file/ff6f6f8502b705dd444f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48334",
        "pageSeq": 48334
    },
    {
        "IDcode": 48335,
        "title": "铃木美咲(Misaki Suzuki) 美脚の祝福(符玄編) - Page 1",
        "cover": "https://telegra.ph/file/5ae2513c755c525e692d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48335",
        "pageSeq": 48335
    },
    {
        "IDcode": 48336,
        "title": "Umeko J - Frieren - Page 1",
        "cover": "https://telegra.ph/file/ccdcc325b665ac66584e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48336",
        "pageSeq": 48336
    },
    {
        "IDcode": 48337,
        "title": "【霜月shimo】 Elf Village - Page 1",
        "cover": "https://telegra.ph/file/f42b707d2341744c1c7f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48337",
        "pageSeq": 48337
    },
    {
        "IDcode": 48338,
        "title": "Hinata2000 - Formidable - Page 1",
        "cover": "https://telegra.ph/file/c2984418174f5d9d0bf52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48338",
        "pageSeq": 48338
    },
    {
        "IDcode": 48339,
        "title": "[ATFM Tsubaki] Jeanne d’Arc JK Fate Grand Order - Page 1",
        "cover": "https://telegra.ph/file/06a0bc9ab7aa710e82519.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48339",
        "pageSeq": 48339
    },
    {
        "IDcode": 48340,
        "title": "[rioko凉凉子] 雷根斯堡 原造型+泳装 暗龙与光之海岸 - Page 1",
        "cover": "https://telegra.ph/file/b7c29e86312237cc3d3b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48340",
        "pageSeq": 48340
    },
    {
        "IDcode": 48341,
        "title": "浵卡(Tokar) - 夜阑·兔女郎ver(Yelab · Bunny ver) - Page 1",
        "cover": "https://telegra.ph/file/4de2dd87d63a1105331a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48341",
        "pageSeq": 48341
    },
    {
        "IDcode": 48342,
        "title": "浵卡(Tokar) - 霞泽美游(Kasumisawa Miyu) - Page 1",
        "cover": "https://telegra.ph/file/9b887e28142436787b310.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48342",
        "pageSeq": 48342
    },
    {
        "IDcode": 48343,
        "title": "Rioko凉凉子 港区的龙女仆 无码 - Page 1",
        "cover": "https://telegra.ph/file/3b2125c34ed54e917750e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48343",
        "pageSeq": 48343
    },
    {
        "IDcode": 48344,
        "title": "Hinata2000 - Ganyu Maid - Page 1",
        "cover": "https://telegra.ph/file/72b09473e15006e46a02f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48344",
        "pageSeq": 48344
    },
    {
        "IDcode": 48345,
        "title": "Erovee - Marin - Page 1",
        "cover": "https://telegra.ph/file/b5d756b4df0ddf25962e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48345",
        "pageSeq": 48345
    },
    {
        "IDcode": 48346,
        "title": "Candy ball - Chen Hai - Page 1",
        "cover": "https://telegra.ph/file/9267f3ae6a23023782e7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48346",
        "pageSeq": 48346
    },
    {
        "IDcode": 48347,
        "title": "Yua Hentai - Azunyan - Page 1",
        "cover": "https://telegra.ph/file/5e8446a27130bbe82e334.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48347",
        "pageSeq": 48347
    },
    {
        "IDcode": 48348,
        "title": "TiTi - 2B - Page 1",
        "cover": "https://telegra.ph/file/fcc33552a83a646af05e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48348",
        "pageSeq": 48348
    },
    {
        "IDcode": 48349,
        "title": "ZinieQ - Princess Peach - Page 1",
        "cover": "https://telegra.ph/file/bcc4bad49055c58aa2d67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48349",
        "pageSeq": 48349
    },
    {
        "IDcode": 48350,
        "title": "TiTi - Zelda - Page 1",
        "cover": "https://telegra.ph/file/b62a999c102d1310070da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48350",
        "pageSeq": 48350
    },
    {
        "IDcode": 48351,
        "title": "【森萝财团】小七-明日香-R18 - Page 1",
        "cover": "https://telegra.ph/file/c1d9868b59a5746343fa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48351",
        "pageSeq": 48351
    },
    {
        "IDcode": 48352,
        "title": "小仓千代w – 埃吉尔 - Page 1",
        "cover": "https://telegra.ph/file/55a6aabad781ba9d91437.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48352",
        "pageSeq": 48352
    },
    {
        "IDcode": 48353,
        "title": "Hinata2000 - Ganyu - Page 1",
        "cover": "https://telegra.ph/file/f147601dad41130bd6f9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48353",
        "pageSeq": 48353
    },
    {
        "IDcode": 48354,
        "title": "BDWP - Page 1",
        "cover": "https://telegra.ph/file/af9934fbf2c6f5db49cd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48354",
        "pageSeq": 48354
    },
    {
        "IDcode": 48355,
        "title": "ぶっかけドロドロ淫乱任務 - Page 1",
        "cover": "https://telegra.ph/file/08a18872382701153d19c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48355",
        "pageSeq": 48355
    },
    {
        "IDcode": 48356,
        "title": "Yor Briar (Various Cosplayers) - Page 1",
        "cover": "https://telegra.ph/file/c5ac3f6ba73685cae7996.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48356",
        "pageSeq": 48356
    },
    {
        "IDcode": 48357,
        "title": "[HERESY (林檎蜜紀)] FGO バーヴァンシー - Page 1",
        "cover": "https://telegra.ph/file/6c09bcb3f2e8f77b69d78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48357",
        "pageSeq": 48357
    },
    {
        "IDcode": 48358,
        "title": "Meiilyn - Yae Miko - Page 1",
        "cover": "https://telegra.ph/file/8cecacf0a76ff9704bcba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48358",
        "pageSeq": 48358
    },
    {
        "IDcode": 48359,
        "title": "阳布布鸭 NO.07 衬衫猫娘 [15P] - Page 1",
        "cover": "https://telegra.ph/file/4e7c48f7998ec50d0d8c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48359",
        "pageSeq": 48359
    },
    {
        "IDcode": 48360,
        "title": "Meiilyn - Viper - Page 1",
        "cover": "https://telegra.ph/file/e6c2b03cc732b1e1146b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48360",
        "pageSeq": 48360
    },
    {
        "IDcode": 48361,
        "title": "木之本澜 - NO.007 Perseus Nurse (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/58d030b5ee88eac83a435.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48361",
        "pageSeq": 48361
    },
    {
        "IDcode": 48362,
        "title": "轩萧学姐 吉他妹妹肉丝套 [61P-108MB] - Page 1",
        "cover": "https://telegra.ph/file/4e8f3bf5329cb55c187b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48362",
        "pageSeq": 48362
    },
    {
        "IDcode": 48363,
        "title": "崩壊スターレイル カフカROM - Page 1",
        "cover": "https://telegra.ph/file/64973fd4dcdf90716b497.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48363",
        "pageSeq": 48363
    },
    {
        "IDcode": 48364,
        "title": "原神 申鶴・甘雨ROM - Page 1",
        "cover": "https://telegra.ph/file/5c184ba35bfb50a569de0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48364",
        "pageSeq": 48364
    },
    {
        "IDcode": 48365,
        "title": "Poppachan - Lola Bunny - Page 1",
        "cover": "https://telegra.ph/file/2c5deb9f76d6bf561db49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48365",
        "pageSeq": 48365
    },
    {
        "IDcode": 48366,
        "title": "Potato Godzilla - Lumine Christmas - Page 1",
        "cover": "https://telegra.ph/file/661e5f64514812946bfcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48366",
        "pageSeq": 48366
    },
    {
        "IDcode": 48367,
        "title": "Potato Godzilla - Lumine Hoyofest - Page 1",
        "cover": "https://telegra.ph/file/eebd3aee6c3471d87e69f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48367",
        "pageSeq": 48367
    },
    {
        "IDcode": 48368,
        "title": "Kaya Huang - Yor Forger - Page 1",
        "cover": "https://telegra.ph/file/ddd5936671b2a27e5db1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48368",
        "pageSeq": 48368
    },
    {
        "IDcode": 48369,
        "title": "Umeko J - Marie Rose Xmas - Page 1",
        "cover": "https://telegra.ph/file/19a4d19269c27620a3fdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48369",
        "pageSeq": 48369
    },
    {
        "IDcode": 48370,
        "title": "Lostwind10 - Silver Wolf - Page 1",
        "cover": "https://telegra.ph/file/05ce65f2997d583081dc4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48370",
        "pageSeq": 48370
    },
    {
        "IDcode": 48371,
        "title": "Aery Tiefling - Tifa Lockhart Xmas - Page 1",
        "cover": "https://telegra.ph/file/56f7eb9a6be75434aff81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48371",
        "pageSeq": 48371
    }
];
