// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 48372,
        "title": "Hidori Rose - Perona - Page 1",
        "cover": "https://telegra.ph/file/ef8b89bd4a47299fcdf3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48372",
        "pageSeq": 48372
    },
    {
        "IDcode": 48373,
        "title": "Hinata2000 - Maid Jeanne - Page 1",
        "cover": "https://telegra.ph/file/a9c4b64db5e51a9af4293.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48373",
        "pageSeq": 48373
    },
    {
        "IDcode": 48374,
        "title": "Xidaidai - Kisaki - Page 1",
        "cover": "https://telegra.ph/file/6bf6750f6607ee5eff5c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48374",
        "pageSeq": 48374
    },
    {
        "IDcode": 48375,
        "title": "星之迟迟 - 2023-10-C（我推的孩子-星野爱同人） - Page 1",
        "cover": "https://telegra.ph/file/7356615625a274faf1574.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48375",
        "pageSeq": 48375
    },
    {
        "IDcode": 48376,
        "title": "菌烨tako - 森蚺 - Page 1",
        "cover": "https://telegra.ph/file/3ad1d152c7598b180141c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48376",
        "pageSeq": 48376
    },
    {
        "IDcode": 48377,
        "title": "Hinata2000 - Sora - Page 1",
        "cover": "https://telegra.ph/file/4a4db2a85abaece280465.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48377",
        "pageSeq": 48377
    },
    {
        "IDcode": 48378,
        "title": "Nookkiizz - Fern - Page 1",
        "cover": "https://telegra.ph/file/1e5fbc32c6871057e2a94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48378",
        "pageSeq": 48378
    },
    {
        "IDcode": 48379,
        "title": "Alina Becker – Nami - Page 1",
        "cover": "https://telegra.ph/file/666f1117bcdbc15b06284.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48379",
        "pageSeq": 48379
    },
    {
        "IDcode": 48380,
        "title": "ZinieQ - Chun li - Page 1",
        "cover": "https://telegra.ph/file/f9f6bfdb122db08f81144.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48380",
        "pageSeq": 48380
    },
    {
        "IDcode": 48381,
        "title": "Tokar浵卡 - 菲谢尔 [42P1V-1.91G] - Page 1",
        "cover": "https://telegra.ph/file/ce277d7d99484b7ec3d36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48381",
        "pageSeq": 48381
    },
    {
        "IDcode": 48382,
        "title": "Hidori Rose - Ganyu Maid - Page 1",
        "cover": "https://telegra.ph/file/c43bc62602bead93229b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48382",
        "pageSeq": 48382
    },
    {
        "IDcode": 48383,
        "title": "Hinata2000 - Nahida - Page 1",
        "cover": "https://telegra.ph/file/bbf2adc697b0713758e42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48383",
        "pageSeq": 48383
    },
    {
        "IDcode": 48384,
        "title": "Hinata2000 - Jean Maid - Page 1",
        "cover": "https://telegra.ph/file/f8ddb999093636c11348f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48384",
        "pageSeq": 48384
    },
    {
        "IDcode": 48385,
        "title": "Ria Kurumi - HMS Vampire - Page 1",
        "cover": "https://telegra.ph/file/6bef0c1d70d35114d3c4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48385",
        "pageSeq": 48385
    },
    {
        "IDcode": 48386,
        "title": "赤西夜夜 - 麻衣学姐 - Page 1",
        "cover": "https://telegra.ph/file/006eb44645debe3070679.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48386",
        "pageSeq": 48386
    },
    {
        "IDcode": 48387,
        "title": "Umeko J - Raven - Page 1",
        "cover": "https://telegra.ph/file/8f99d27c1e832061ccb13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48387",
        "pageSeq": 48387
    },
    {
        "IDcode": 48388,
        "title": "Smile Bibison - Shenhe - Page 1",
        "cover": "https://telegra.ph/file/cfa03efe9f94f5fe4ca3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48388",
        "pageSeq": 48388
    },
    {
        "IDcode": 48389,
        "title": "Hinata2000 - Alter - Page 1",
        "cover": "https://telegra.ph/file/2c5166ab93c51b9a5831d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48389",
        "pageSeq": 48389
    },
    {
        "IDcode": 48390,
        "title": "Poppachan - Noshiro Maid - Page 1",
        "cover": "https://telegra.ph/file/142de354faccbe7541f5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48390",
        "pageSeq": 48390
    },
    {
        "IDcode": 48391,
        "title": "Hinata2000 - Shizuku - Page 1",
        "cover": "https://telegra.ph/file/df0222db628a90c11c06e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48391",
        "pageSeq": 48391
    },
    {
        "IDcode": 48392,
        "title": "Izayoi Rui - Yae Miko - Page 1",
        "cover": "https://telegra.ph/file/15991e06eeda1ea725d4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48392",
        "pageSeq": 48392
    },
    {
        "IDcode": 48393,
        "title": "Tiny Asa - Hinata - Page 1",
        "cover": "https://telegra.ph/file/e032544a3f23a67a5e996.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48393",
        "pageSeq": 48393
    },
    {
        "IDcode": 48394,
        "title": "二阶堂 - 萨勒芬妮 LOL - Page 1",
        "cover": "https://telegra.ph/file/1c2cb894737efcc087fa5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48394",
        "pageSeq": 48394
    },
    {
        "IDcode": 48395,
        "title": "小仓千代w 黑呆 FGO - Page 1",
        "cover": "https://telegra.ph/file/7b759dbf0d485b297a5d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48395",
        "pageSeq": 48395
    },
    {
        "IDcode": 48396,
        "title": "小仓千代w 武藏  同人  AZURLANE - Page 1",
        "cover": "https://telegra.ph/file/7d239f791715f57b8d883.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48396",
        "pageSeq": 48396
    },
    {
        "IDcode": 48397,
        "title": "小仓千代w 金鹿  婚纱 AZURLANE - Page 1",
        "cover": "https://telegra.ph/file/7f436795f695a99d4be00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48397",
        "pageSeq": 48397
    },
    {
        "IDcode": 48398,
        "title": "小仓千代w 阿尼斯 NIKKE - Page 1",
        "cover": "https://telegra.ph/file/daa9b938aa53b42db616a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48398",
        "pageSeq": 48398
    },
    {
        "IDcode": 48399,
        "title": "Vinnegal - Makima - Page 1",
        "cover": "https://telegra.ph/file/b592922076506ccdd3a00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48399",
        "pageSeq": 48399
    },
    {
        "IDcode": 48400,
        "title": "Tiny Asa - Satsuki - Page 1",
        "cover": "https://telegra.ph/file/b5bd523158313dc520669.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48400",
        "pageSeq": 48400
    },
    {
        "IDcode": 48401,
        "title": "Umeko J - Shizuka - Page 1",
        "cover": "https://telegra.ph/file/8030c71019db93221c0a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48401",
        "pageSeq": 48401
    },
    {
        "IDcode": 48402,
        "title": "Aery Tiefling - Yelan - Page 1",
        "cover": "https://telegra.ph/file/69d2d7d92824350f55fd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48402",
        "pageSeq": 48402
    },
    {
        "IDcode": 48403,
        "title": "封疆疆v - 申鹤水着ver - Page 1",
        "cover": "https://telegra.ph/file/f6503b603f56b7631ad19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48403",
        "pageSeq": 48403
    },
    {
        "IDcode": 48404,
        "title": "Arty亚缇 - Sparkle - Page 1",
        "cover": "https://telegra.ph/file/a156f1411a355d653bfd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48404",
        "pageSeq": 48404
    },
    {
        "IDcode": 48405,
        "title": "水淼Aqua - 憧憬成为魔法少女 柊舞缇娜 - Page 1",
        "cover": "https://telegra.ph/file/ca71ebaf724a6c0867bbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48405",
        "pageSeq": 48405
    },
    {
        "IDcode": 48406,
        "title": "Ayame_base - Arona - Page 1",
        "cover": "https://telegra.ph/file/759481e382af74e8ef598.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48406",
        "pageSeq": 48406
    },
    {
        "IDcode": 48407,
        "title": "蠢沫沫 - 时崎狂三和服 - Page 1",
        "cover": "https://telegra.ph/file/e9e9a90e740057a08661b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48407",
        "pageSeq": 48407
    },
    {
        "IDcode": 48408,
        "title": "蠢沫沫 - 时崎狂三花絮 - Page 1",
        "cover": "https://telegra.ph/file/2ec38622243aab6aa6e09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48408",
        "pageSeq": 48408
    },
    {
        "IDcode": 48409,
        "title": "yuuhui玉汇 绝区零 艾莲·乔 - Page 1",
        "cover": "https://telegra.ph/file/a7e69276c2f5433bd56a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48409",
        "pageSeq": 48409
    },
    {
        "IDcode": 48410,
        "title": "Arty Huang -  Blue Archive Toki Police - Page 1",
        "cover": "https://telegra.ph/file/034c156576860fe05b438.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48410",
        "pageSeq": 48410
    },
    {
        "IDcode": 48411,
        "title": "yuuhui玉汇 - 蔚蓝档案 飞鸟马时 - Page 1",
        "cover": "https://telegra.ph/file/1fd850a0b8b34aea68bfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48411",
        "pageSeq": 48411
    },
    {
        "IDcode": 48412,
        "title": "Rikachan cosplay Ganyu Succubus - Genshin Impact - Page 1",
        "cover": "https://telegra.ph/file/a7772e058834c52303e6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48412",
        "pageSeq": 48412
    },
    {
        "IDcode": 48413,
        "title": "蜜汁猫裘 - 狂赌之渊 蛇喰梦子 - Page 1",
        "cover": "https://telegra.ph/file/b1bad4bb99766abe26d4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48413",
        "pageSeq": 48413
    },
    {
        "IDcode": 48414,
        "title": "ShyBabyBun - Sonico - Page 1",
        "cover": "https://telegra.ph/file/26f6a9fae195bba7fc061.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48414",
        "pageSeq": 48414
    },
    {
        "IDcode": 48415,
        "title": "星之迟迟 - 对策部宇都宫沙希 - Page 1",
        "cover": "https://telegra.ph/file/abb9ebb7af848e7746ed1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48415",
        "pageSeq": 48415
    },
    {
        "IDcode": 48416,
        "title": "日奈娇 - 柊舞缇娜JK - Page 1",
        "cover": "https://telegra.ph/file/35bebc290163d45bb7315.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48416",
        "pageSeq": 48416
    },
    {
        "IDcode": 48417,
        "title": "[HanaSliver] Bridget - Page 1",
        "cover": "https://telegra.ph/file/10d533808d108565edcd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48417",
        "pageSeq": 48417
    },
    {
        "IDcode": 48418,
        "title": "咬人小小兔 - 星穹铁道 花火 - Page 1",
        "cover": "https://telegra.ph/file/eae4f877730b7a25de910.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48418",
        "pageSeq": 48418
    },
    {
        "IDcode": 48419,
        "title": "封疆疆-柴郡魔术师 - Page 1",
        "cover": "https://telegra.ph/file/2efb7a0bee379ef86f29a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48419",
        "pageSeq": 48419
    },
    {
        "IDcode": 48420,
        "title": "日奈娇 - 水神小夜 - Page 1",
        "cover": "https://telegra.ph/file/0c94656cd67644e6131ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48420",
        "pageSeq": 48420
    },
    {
        "IDcode": 48421,
        "title": "Sugary Feast Time - Page 1",
        "cover": "https://telegra.ph/file/bfd029b7a1f6eed4b9b1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48421",
        "pageSeq": 48421
    },
    {
        "IDcode": 48422,
        "title": "Machi - ロビン (崩壊:スターレイル) - Page 1",
        "cover": "https://telegra.ph/file/063daa099c17f3ab45f7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48422",
        "pageSeq": 48422
    },
    {
        "IDcode": 48423,
        "title": "月刊ChuChu☆MAGIC 2023.7月号Class3 - Page 1",
        "cover": "https://telegra.ph/file/3bbdc16a88e2bf450196b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48423",
        "pageSeq": 48423
    },
    {
        "IDcode": 48424,
        "title": "Kittyxkum - Franxx - Page 1",
        "cover": "https://telegra.ph/file/550beedb9b66bf5520d18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48424",
        "pageSeq": 48424
    },
    {
        "IDcode": 48425,
        "title": "Kittyxkum - Gura - Page 1",
        "cover": "https://telegra.ph/file/da086852eea7e32c25b74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48425",
        "pageSeq": 48425
    },
    {
        "IDcode": 48426,
        "title": "biya cosplay - Page 1",
        "cover": "https://telegra.ph/file/2e999383404cdcc92f74d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48426",
        "pageSeq": 48426
    },
    {
        "IDcode": 48427,
        "title": "biya cosplay - Page 2",
        "cover": "https://telegra.ph/file/a39c6f95a416eced28211.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48427",
        "pageSeq": 48427
    },
    {
        "IDcode": 48428,
        "title": "絞肉姬—喜多川海梦 - Page 1",
        "cover": "https://telegra.ph/file/7c93659707bed6152fded.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48428",
        "pageSeq": 48428
    },
    {
        "IDcode": 48429,
        "title": "Byoru-Anubis - Page 1",
        "cover": "https://telegra.ph/file/d4c5dd7abb783c4add1a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48429",
        "pageSeq": 48429
    },
    {
        "IDcode": 48430,
        "title": "Rioko凉凉子 - 蔚蓝档案 椿导游 - Page 1",
        "cover": "https://telegra.ph/file/d014c6c70b27d6a97ef78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48430",
        "pageSeq": 48430
    },
    {
        "IDcode": 48431,
        "title": "肉便器淫乱の悪魔 - Page 1",
        "cover": "https://telegra.ph/file/536bd5877758d48bcfd65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48431",
        "pageSeq": 48431
    },
    {
        "IDcode": 48432,
        "title": "Byoru-Bastet - Page 1",
        "cover": "https://telegra.ph/file/5a99ee361a80137325411.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48432",
        "pageSeq": 48432
    },
    {
        "IDcode": 48433,
        "title": "kannojodori fantia订阅合集（2023.12-2024.06） - Page 1",
        "cover": "https://telegra.ph/file/cd478348bd0404ee409ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48433",
        "pageSeq": 48433
    },
    {
        "IDcode": 48434,
        "title": "水淼aqua 尤贝尔 - Page 1",
        "cover": "https://telegra.ph/file/e62e3a4ac5d5ec82693f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48434",
        "pageSeq": 48434
    },
    {
        "IDcode": 48435,
        "title": "Nookkizz - Elegg - NIKKE - Page 1",
        "cover": "https://telegra.ph/file/460922613c45161af2e33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48435",
        "pageSeq": 48435
    },
    {
        "IDcode": 48436,
        "title": "桃良阿宅 - 库巴姬 - Page 1",
        "cover": "https://telegra.ph/file/3d729f24b4a394424b449.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48436",
        "pageSeq": 48436
    },
    {
        "IDcode": 48437,
        "title": "九言 - 黑天鹅 - Page 1",
        "cover": "https://telegra.ph/file/e39c117a98f9a282bed80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48437",
        "pageSeq": 48437
    },
    {
        "IDcode": 48438,
        "title": "切切celia D：杀手妻子 nikke - Page 1",
        "cover": "https://telegra.ph/file/0b557958831cb08743c57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48438",
        "pageSeq": 48438
    },
    {
        "IDcode": 48439,
        "title": "水淼aqua  葬送的芙莉莲 尤贝尔 - Page 1",
        "cover": "https://telegra.ph/file/fc6bb0c414e81dfcca5f0.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48439",
        "pageSeq": 48439
    },
    {
        "IDcode": 48440,
        "title": "日奈娇 - 菲伦 - Page 1",
        "cover": "https://telegra.ph/file/da02a96c84ac21b0482a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48440",
        "pageSeq": 48440
    },
    {
        "IDcode": 48441,
        "title": "Hidori Rose - Tifa - Page 1",
        "cover": "https://telegra.ph/file/0999a275b1e4bd4a7643f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48441",
        "pageSeq": 48441
    },
    {
        "IDcode": 48442,
        "title": "[Pudding Desu]  Gawr Gura - Page 1",
        "cover": "https://telegra.ph/file/50595232bd96dff923658.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48442",
        "pageSeq": 48442
    },
    {
        "IDcode": 48443,
        "title": "[Pudding Desu] Marcille - Page 1",
        "cover": "https://telegra.ph/file/130a82e0aa44a51fddf3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48443",
        "pageSeq": 48443
    },
    {
        "IDcode": 48444,
        "title": "Xidaidai - Ui Shigure - Page 1",
        "cover": "https://telegra.ph/file/3487426baf7463f0bcbc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48444",
        "pageSeq": 48444
    },
    {
        "IDcode": 48445,
        "title": "Hane Ame - Eve - Page 1",
        "cover": "https://telegra.ph/file/938c4c28dd2af8081a417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48445",
        "pageSeq": 48445
    },
    {
        "IDcode": 48446,
        "title": "Hane Ame - Takamiya Mio - Page 1",
        "cover": "https://telegra.ph/file/4962585e65418616a8bd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48446",
        "pageSeq": 48446
    },
    {
        "IDcode": 48447,
        "title": "Queenie - 2B (More) - Page 1",
        "cover": "https://telegra.ph/file/87bd131f1c6b23f4c140c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48447",
        "pageSeq": 48447
    },
    {
        "IDcode": 48448,
        "title": "Umeko J - Chun Li Street Fighter - Page 1",
        "cover": "https://telegra.ph/file/06c62f269c7efca815f0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48448",
        "pageSeq": 48448
    },
    {
        "IDcode": 48449,
        "title": "日奈娇 - Frieren Holy Light Version - Page 1",
        "cover": "https://telegra.ph/file/3f0a5c5c6f7b460f4836a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48449",
        "pageSeq": 48449
    },
    {
        "IDcode": 48450,
        "title": "Alina Becker - Falin Thorden - Page 1",
        "cover": "https://telegra.ph/file/df31ca8de4e8c42b6f07a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48450",
        "pageSeq": 48450
    },
    {
        "IDcode": 48451,
        "title": "Alina Becker - Tsunade - Page 1",
        "cover": "https://telegra.ph/file/6e1ced8a5e40035cbf13c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48451",
        "pageSeq": 48451
    },
    {
        "IDcode": 48452,
        "title": "Alina Becker - Spider-Gwen - Page 1",
        "cover": "https://telegra.ph/file/0fe75e421531bc442224e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48452",
        "pageSeq": 48452
    },
    {
        "IDcode": 48453,
        "title": "雪晴Astra 崩坏星穹铁道 符玄 - Page 1",
        "cover": "https://telegra.ph/file/f95eb7bdb2ed23a6ad852.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48453",
        "pageSeq": 48453
    },
    {
        "IDcode": 48454,
        "title": "Arty Huang (Arty亚缇) & KaYa Huang (萱) - Raiden Shogun Ei & Yae Miko - Page 1",
        "cover": "https://telegra.ph/file/cd3323814670d245e885c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48454",
        "pageSeq": 48454
    },
    {
        "IDcode": 48455,
        "title": "[爱老师_PhD] 48套合集 - Page 1",
        "cover": "https://telegra.ph/file/a220a4cd91b1ca2df5a9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48455",
        "pageSeq": 48455
    },
    {
        "IDcode": 48456,
        "title": "[爱老师_PhD] 48套合集 - Page 2",
        "cover": "https://telegra.ph/file/674e79da71286a870a985.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48456",
        "pageSeq": 48456
    },
    {
        "IDcode": 48457,
        "title": "Umeko J - Blue Archive Asuma Toki - Page 1",
        "cover": "https://telegra.ph/file/ba76e32464c16a4de225b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48457",
        "pageSeq": 48457
    },
    {
        "IDcode": 48458,
        "title": "高桥千凛 - 春日野穹 - Page 1",
        "cover": "https://telegra.ph/file/041854e74b38978604366.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48458",
        "pageSeq": 48458
    },
    {
        "IDcode": 48459,
        "title": "Hidori Rose - Cammy - Page 1",
        "cover": "https://telegra.ph/file/ce6c29acf0188b0d25d6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48459",
        "pageSeq": 48459
    },
    {
        "IDcode": 48460,
        "title": "Aery Tiefling - Emilia - Page 1",
        "cover": "https://telegra.ph/file/aec6ec58cbcd458968986.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48460",
        "pageSeq": 48460
    },
    {
        "IDcode": 48461,
        "title": "九言 – Nahida - Page 1",
        "cover": "https://telegra.ph/file/14864d976d7874c5a70c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48461",
        "pageSeq": 48461
    },
    {
        "IDcode": 48462,
        "title": "初音ミク：その細ネギ、折れちゃった？ - Page 1",
        "cover": "https://telegra.ph/file/47b7123d4da223887bf8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48462",
        "pageSeq": 48462
    },
    {
        "IDcode": 48463,
        "title": "九言 – Navia - Page 1",
        "cover": "https://telegra.ph/file/cd0174d29e1e56494df34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48463",
        "pageSeq": 48463
    },
    {
        "IDcode": 48464,
        "title": "Aqua - Kafka - Page 1",
        "cover": "https://telegra.ph/file/65e9f1ce6dc3b94354fe0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48464",
        "pageSeq": 48464
    },
    {
        "IDcode": 48465,
        "title": "Hidori Rose - Amelia Watson - Page 1",
        "cover": "https://telegra.ph/file/942739124ddaabdcad138.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48465",
        "pageSeq": 48465
    },
    {
        "IDcode": 48466,
        "title": "PoppaChan - Miku Rabbit Hole - Page 1",
        "cover": "https://telegra.ph/file/0eb79b74792186be11857.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48466",
        "pageSeq": 48466
    },
    {
        "IDcode": 48467,
        "title": "ステージ裏の嘘 - Page 1",
        "cover": "https://telegra.ph/file/5477582e79ff096a02496.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48467",
        "pageSeq": 48467
    },
    {
        "IDcode": 48468,
        "title": "星之迟迟 - 碧蓝航线 奇尔沙治同人 - Page 1",
        "cover": "https://telegra.ph/file/4e85284799b590dacfb2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48468",
        "pageSeq": 48468
    },
    {
        "IDcode": 48469,
        "title": "Cosplay - Vinnegal (Fixed) - Page 1",
        "cover": "https://telegra.ph/file/4c433eb209988de328810.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48469",
        "pageSeq": 48469
    },
    {
        "IDcode": 48470,
        "title": "AmaiMai - Kobeni - Page 1",
        "cover": "https://telegra.ph/file/5311abdc16a41552898b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48470",
        "pageSeq": 48470
    },
    {
        "IDcode": 48471,
        "title": "九言 - 艾米莉亚 - Page 1",
        "cover": "https://telegra.ph/file/0221c28ec8c8b34b2a967.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48471",
        "pageSeq": 48471
    }
];
