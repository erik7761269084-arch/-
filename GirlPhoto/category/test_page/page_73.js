// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 29381,
        "title": "水淼aqua Vol.095: 碧蓝航线 新泽西 107P",
        "cover": "https://telegra.ph/file/c3a4ae053cf850b7a06e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29381",
        "pageSeq": 29381
    },
    {
        "IDcode": 29382,
        "title": "[PURE MEDIA] Vol.029 – Mozzi 모찌 108P",
        "cover": "https://telegra.ph/file/e246e55c3af3285af9af9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29382",
        "pageSeq": 29382
    },
    {
        "IDcode": 29383,
        "title": "云溪溪 -  双人教室  60P",
        "cover": "https://telegra.ph/file/631b735da01ecb81be698.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29383",
        "pageSeq": 29383
    },
    {
        "IDcode": 29384,
        "title": "[JVID]璃奈酱 - 全裸课堂 155P",
        "cover": "https://telegra.ph/file/516a8a5a932e36bbc8b59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29384",
        "pageSeq": 29384
    },
    {
        "IDcode": 29385,
        "title": "不二子X理万姬 - 日租女友  32P",
        "cover": "https://telegra.ph/file/8e7cc539f772d9b9ad0dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29385",
        "pageSeq": 29385
    },
    {
        "IDcode": 29386,
        "title": "[ArtGravia] vol.193 Jangjoo  87P",
        "cover": "https://telegra.ph/file/fb870e94394efa639f619.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29386",
        "pageSeq": 29386
    },
    {
        "IDcode": 29387,
        "title": "桃乃木かな 2016.05.14『らぶぱら』[97P]",
        "cover": "https://telegra.ph/file/cbead8beac2a90b4e6909.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29387",
        "pageSeq": 29387
    },
    {
        "IDcode": 29388,
        "title": "摄影师@slavesmart - 极限裸露&捆绑作品集 [215P]",
        "cover": "https://telegra.ph/file/c7c2d29ecc7d42f04782c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29388",
        "pageSeq": 29388
    },
    {
        "IDcode": 29389,
        "title": "[Graphis] Gals – Mei Miyajima 宮島めい blooming  141P",
        "cover": "https://telegra.ph/file/90cef42ce3d715203bb4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29389",
        "pageSeq": 29389
    },
    {
        "IDcode": 29390,
        "title": "山岸逢花 抱いて… 花と逢ｰ最終章ｰ アサ芸SEXY 62P",
        "cover": "https://telegra.ph/file/8f27083895b79f53c7868.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29390",
        "pageSeq": 29390
    },
    {
        "IDcode": 29391,
        "title": "Byoru - NO.20 Misaki Charm Witch [55P]",
        "cover": "https://telegra.ph/file/be61875c1d0fedce2c333.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29391",
        "pageSeq": 29391
    },
    {
        "IDcode": 29392,
        "title": "[JVID] 罗颖 - VR虚拟女友  143P",
        "cover": "https://telegra.ph/file/abe2fe696dbd124005dd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29392",
        "pageSeq": 29392
    },
    {
        "IDcode": 29393,
        "title": "杪夏 - 楼梯口的死库水少女+酸奶 59P",
        "cover": "https://telegra.ph/file/58989555c17cfd7869ffb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29393",
        "pageSeq": 29393
    },
    {
        "IDcode": 29394,
        "title": "[XIUREN] No.2141  就是阿朱啊  119P",
        "cover": "https://telegra.ph/file/e9fcfac445c2b181f2453.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29394",
        "pageSeq": 29394
    },
    {
        "IDcode": 29395,
        "title": "[JVID]叶思敏 - 情欲女秘书 95P",
        "cover": "https://telegra.ph/file/b9f20dcf8ef853424c232.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29395",
        "pageSeq": 29395
    },
    {
        "IDcode": 29396,
        "title": "周妍希 –  旅拍无圣光版 [69P]",
        "cover": "https://telegra.ph/file/43d4097b810072f4a3f93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29396",
        "pageSeq": 29396
    },
    {
        "IDcode": 29397,
        "title": "[JVID] 阿黎 - 旅行日租的艳遇 141P",
        "cover": "https://telegra.ph/file/57ae009331964cbcfc975.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29397",
        "pageSeq": 29397
    },
    {
        "IDcode": 29398,
        "title": "[Pure Media] Vol.115 - Bambi (밤비) 111P",
        "cover": "https://telegra.ph/file/61a005cceebc69db17472.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29398",
        "pageSeq": 29398
    },
    {
        "IDcode": 29399,
        "title": "[OnlyFans] Nimtharin 170P",
        "cover": "https://telegra.ph/file/2ffc7e03adadb0ebb29c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29399",
        "pageSeq": 29399
    },
    {
        "IDcode": 29400,
        "title": "抖娘-利世 - 吉他妹妹  42P",
        "cover": "https://telegra.ph/file/fb3ecfc524188c8595609.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29400",
        "pageSeq": 29400
    },
    {
        "IDcode": 29401,
        "title": "[JVID] 璃奈酱 -  女王调教  83P",
        "cover": "https://telegra.ph/file/35af265f03fc6e1aa887f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29401",
        "pageSeq": 29401
    },
    {
        "IDcode": 29402,
        "title": "[Moon Night Snap]   Jucy (쥬시콩): Hospital play [72P]",
        "cover": "https://telegra.ph/file/9b18d27e6782d57701b6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29402",
        "pageSeq": 29402
    },
    {
        "IDcode": 29403,
        "title": "DJAWA photo – HaNaRi (하나리) :Loose and Tight Cool Mint [86P]",
        "cover": "https://telegra.ph/file/de7da8c94b2d16806fffa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29403",
        "pageSeq": 29403
    },
    {
        "IDcode": 29404,
        "title": "抖叔作品集 160P",
        "cover": "https://telegra.ph/file/9d058e8eb226bf8ea80af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29404",
        "pageSeq": 29404
    },
    {
        "IDcode": 29405,
        "title": "抖叔作品集 152P",
        "cover": "https://telegra.ph/file/90698e11729363ef1a622.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29405",
        "pageSeq": 29405
    },
    {
        "IDcode": 29406,
        "title": "佐野ひなこ写真集「COLORS」 週プレ PHOTO BOOK 145P",
        "cover": "https://telegra.ph/file/7356cb968af4777099c8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29406",
        "pageSeq": 29406
    },
    {
        "IDcode": 29407,
        "title": "[ArtGravia] Vol.216 Bambi 69P",
        "cover": "https://telegra.ph/file/6d950b846b256d6f62d9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29407",
        "pageSeq": 29407
    },
    {
        "IDcode": 29408,
        "title": "[JVID] 护士  151P",
        "cover": "https://telegra.ph/file/fa520dba969a95b370888.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29408",
        "pageSeq": 29408
    },
    {
        "IDcode": 29409,
        "title": "[XIUREN] No.3679  玥儿玥er  63P",
        "cover": "https://telegra.ph/file/bf4e2f76989c423234c40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29409",
        "pageSeq": 29409
    },
    {
        "IDcode": 29410,
        "title": "LEEHEE EXPRESS – LEHF-039: Ray (레이) [52P]",
        "cover": "https://telegra.ph/file/fe6c70eb7d91b89ed9082.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29410",
        "pageSeq": 29410
    },
    {
        "IDcode": 29411,
        "title": "清水由乃  - NO.024 湿水洛丽塔 Wet Lolita [61P]",
        "cover": "https://telegra.ph/file/5c741eaf03dfdda1f7e85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29411",
        "pageSeq": 29411
    },
    {
        "IDcode": 29412,
        "title": "LEEHEE EXPRESS - LERB-001-RanG 46P",
        "cover": "https://telegra.ph/file/b134fb662894ac02a5f38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29412",
        "pageSeq": 29412
    },
    {
        "IDcode": 29413,
        "title": "[GALLI嘉丽]舞蹈生日记020 – 环环 [31P]",
        "cover": "https://telegra.ph/file/132a05e7f1b43bdbdaa68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29413",
        "pageSeq": 29413
    },
    {
        "IDcode": 29414,
        "title": "[JVID] 璃奈酱 - 全裸女仆润滑套餐 142P",
        "cover": "https://telegra.ph/file/b5e2838680e34cc30aa1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29414",
        "pageSeq": 29414
    },
    {
        "IDcode": 29415,
        "title": "奈汐酱nice – 小猪佩奇 [55P]",
        "cover": "https://telegra.ph/file/bd83845f2c344042ea025.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29415",
        "pageSeq": 29415
    },
    {
        "IDcode": 29416,
        "title": "[Moon Night Snap] Dame (담): Mature Vol.2 [69P]",
        "cover": "https://telegra.ph/file/d1f1384bc5264d6e3bb34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29416",
        "pageSeq": 29416
    },
    {
        "IDcode": 29417,
        "title": "[Moon Night Snap] Yeon Woo-Give me yours Vol.1 [75P]",
        "cover": "https://telegra.ph/file/6b57a5fac70d017d875b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29417",
        "pageSeq": 29417
    },
    {
        "IDcode": 29418,
        "title": "明里つむぎ「純潔のへア裸身」　ＦＲＩＤＡＹデジタル写真集[74P]",
        "cover": "https://telegra.ph/file/54ca89660bc6bc727e4a1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29418",
        "pageSeq": 29418
    },
    {
        "IDcode": 29419,
        "title": "[Photobook] Kana Momonogi 桃乃木かな – Crazy 夢中 [103P]",
        "cover": "https://telegra.ph/file/5acecb4651d280547025b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29419",
        "pageSeq": 29419
    },
    {
        "IDcode": 29420,
        "title": "DJAWA photo – Bambi (밤비): Moral Guardian of School  [120P]",
        "cover": "https://telegra.ph/file/2e03e3ce86e0b09f1d134.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29420",
        "pageSeq": 29420
    },
    {
        "IDcode": 29421,
        "title": "CarryKey - Harley Quinn [99P]",
        "cover": "https://telegra.ph/file/129cc25af97e4ae8d5766.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29421",
        "pageSeq": 29421
    },
    {
        "IDcode": 29422,
        "title": "DJAWA Photo – Son Ye-Eun (손예은): “Backout Queen Misa” 130P",
        "cover": "https://telegra.ph/file/193d73c776f6328899368.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29422",
        "pageSeq": 29422
    },
    {
        "IDcode": 29423,
        "title": "[Tunlita] Patreon set AB49 [49P]",
        "cover": "https://telegra.ph/file/db60543b9bb86ac237a9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29423",
        "pageSeq": 29423
    },
    {
        "IDcode": 29424,
        "title": "週刊大衆デジタル写真集NUDE : 1 三上悠亜 51P",
        "cover": "https://telegra.ph/file/44ff623d42df6a204efc8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29424",
        "pageSeq": 29424
    },
    {
        "IDcode": 29425,
        "title": "涼森れむ写真集「Remlist」88P",
        "cover": "https://telegra.ph/file/90e85c499565563fe6661.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29425",
        "pageSeq": 29425
    },
    {
        "IDcode": 29426,
        "title": "DJAWA Photo – Bambi (밤비) : “Spirit Blossom Ahri (League of Legends)”  145P",
        "cover": "https://telegra.ph/file/79dc5afb1a9e0836f5689.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29426",
        "pageSeq": 29426
    },
    {
        "IDcode": 29427,
        "title": "[Moon Night Snap] Mona x Jucy - Loveholic 76P",
        "cover": "https://telegra.ph/file/11e31a156628295c9f81e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29427",
        "pageSeq": 29427
    },
    {
        "IDcode": 29428,
        "title": "[Tunlita] Vietnamese model  51P",
        "cover": "https://telegra.ph/file/d55a9e4b8c8651dc4acd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29428",
        "pageSeq": 29428
    },
    {
        "IDcode": 29429,
        "title": "ＦＲＩＤＡＹデジタル写真集プレミアム　たかしょー 高橋しょう子×園田みおん×桜空もも　「トリプルＧカップ競艶」125P",
        "cover": "https://telegra.ph/file/bdbaa5338a4392ba293c4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29429",
        "pageSeq": 29429
    },
    {
        "IDcode": 29430,
        "title": "[JVID] 圈养  65P",
        "cover": "https://telegra.ph/file/bc05e047a3cdc8dbf7e38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29430",
        "pageSeq": 29430
    },
    {
        "IDcode": 29431,
        "title": "喵小吉 - 永恒魅魔 52P",
        "cover": "https://telegra.ph/file/c81e4ab459524a1df8041.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29431",
        "pageSeq": 29431
    },
    {
        "IDcode": 29432,
        "title": "[GALLI嘉丽] 舞蹈生日记 026 - 雨琪 [31P]",
        "cover": "https://telegra.ph/file/ced0670b650954a1f257c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29432",
        "pageSeq": 29432
    },
    {
        "IDcode": 29433,
        "title": "DJAWA Photo – Son Ye-Eun (손예은): “A Snap of Intimacy”  160P",
        "cover": "https://telegra.ph/file/8c8ff8396e66392c28ab5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29433",
        "pageSeq": 29433
    },
    {
        "IDcode": 29434,
        "title": "[Moon Night Snap]Dame (담): “섹시한 산타걸” 60P",
        "cover": "https://telegra.ph/file/483e01c4e209881cc0ddb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29434",
        "pageSeq": 29434
    },
    {
        "IDcode": 29435,
        "title": "[DJAWA] Zia 지아 – Christmas Special 70P",
        "cover": "https://telegra.ph/file/41fc66c9a8f6c34d6be93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29435",
        "pageSeq": 29435
    },
    {
        "IDcode": 29436,
        "title": "LOVING YOU 七ツ森りり アサ芸SEXY女優写真集 61P",
        "cover": "https://telegra.ph/file/6f5e300644715de0f05bb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29436",
        "pageSeq": 29436
    },
    {
        "IDcode": 29437,
        "title": "吉高寧々×二階堂夢 桃尻郷へようこそ 週刊ポストデジタル写真集[82P]",
        "cover": "https://telegra.ph/file/6bff2b66425e6141ab3ba.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29437",
        "pageSeq": 29437
    },
    {
        "IDcode": 29438,
        "title": "[Photobook] Yua Mikami 三上悠亜 – your eyes 112P",
        "cover": "https://telegra.ph/file/7f09c7389c9a7cf828b3a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29438",
        "pageSeq": 29438
    },
    {
        "IDcode": 29439,
        "title": "[XIUREN] No.3828 鱼子酱Fish 64P",
        "cover": "https://telegra.ph/file/dcf1d3b8cce4b4106df6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29439",
        "pageSeq": 29439
    },
    {
        "IDcode": 29440,
        "title": "Fantasy Factory 小丁 134P",
        "cover": "https://telegra.ph/file/7f85303d3b2b2ae76b8e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29440",
        "pageSeq": 29440
    },
    {
        "IDcode": 29441,
        "title": "伊藤舞雪 Desire【ディザイア】 アサ芸SEXY女優写真集[60P]",
        "cover": "https://telegra.ph/file/3b81b46c7741cd0b145ef.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29441",
        "pageSeq": 29441
    },
    {
        "IDcode": 29442,
        "title": "[JVID] 夏暮光&肉包 - 女仆 94P",
        "cover": "https://telegra.ph/file/3ea11b26457c852102f15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29442",
        "pageSeq": 29442
    },
    {
        "IDcode": 29443,
        "title": "Masquerade -マスカレード-  葵つかさ アサ芸SEXY女優写真集 [172P]",
        "cover": "https://telegra.ph/file/8885434c2f78d70e7917a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29443",
        "pageSeq": 29443
    },
    {
        "IDcode": 29444,
        "title": "年年 – 神明之女 40P",
        "cover": "https://telegra.ph/file/74753e99cec416fb6bff8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29444",
        "pageSeq": 29444
    },
    {
        "IDcode": 29445,
        "title": "Gatlemon废墟+密室 120P",
        "cover": "https://telegra.ph/file/cda1029b21c43405575b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29445",
        "pageSeq": 29445
    },
    {
        "IDcode": 29446,
        "title": "[JVID] 飄飄－南北半球、激凸、駱駝蹄极致诱惑149P",
        "cover": "https://telegra.ph/file/f18eeb54f0573bc681785.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29446",
        "pageSeq": 29446
    },
    {
        "IDcode": 29447,
        "title": "[JVID] 梦幻般的美巨乳 - 木木森 124P",
        "cover": "https://telegra.ph/file/577ed283748018a96845f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29447",
        "pageSeq": 29447
    },
    {
        "IDcode": 29448,
        "title": "DJAWA Photo - Son Ye-Eun (손예은) - A Girl in Nature 120P",
        "cover": "https://telegra.ph/file/e2297b83953d9e3abbd42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29448",
        "pageSeq": 29448
    },
    {
        "IDcode": 29449,
        "title": "七月喵子 透明 灰撕袜 [45P-448MB]",
        "cover": "https://telegra.ph/file/c08fac089fdc2e1e5fdef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29449",
        "pageSeq": 29449
    },
    {
        "IDcode": 29450,
        "title": "香草喵露露 无路可退 秘密搜查官 [71P-1.79GB]",
        "cover": "https://telegra.ph/file/bc97cd13bae1f95a3fcff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29450",
        "pageSeq": 29450
    },
    {
        "IDcode": 29451,
        "title": "灼灼其华（12月1打赏群资源）",
        "cover": "https://telegra.ph/file/769b09d6aa46def7e117b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29451",
        "pageSeq": 29451
    },
    {
        "IDcode": 29452,
        "title": "喵小吉 长相思（12月1打赏群资源）",
        "cover": "https://telegra.ph/file/c4ce29fcd248ca89e8ff0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29452",
        "pageSeq": 29452
    },
    {
        "IDcode": 29453,
        "title": "小吉的家政服务（12月1打赏群资源）",
        "cover": "https://telegra.ph/file/a342559cc6947da8e0445.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29453",
        "pageSeq": 29453
    },
    {
        "IDcode": 29454,
        "title": "喵小吉 双子：最强冰雪组合（优菈&甘雨）（12月1打赏群资源）",
        "cover": "https://telegra.ph/file/527dfbca62f28ab68d336.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29454",
        "pageSeq": 29454
    },
    {
        "IDcode": 29455,
        "title": "古董店人偶（12月1打赏群资源）",
        "cover": "https://telegra.ph/file/c3719fefd7838b157ff5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29455",
        "pageSeq": 29455
    },
    {
        "IDcode": 29456,
        "title": "51酱 九月制服",
        "cover": "https://telegra.ph/file/e1719ff9b79b2f5296580.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29456",
        "pageSeq": 29456
    },
    {
        "IDcode": 29457,
        "title": "Tina很妖孽呀 倩女幽魂之小倩归来 [47P2V-1.43GB]",
        "cover": "https://telegra.ph/file/a71f56ddaa1394296dc8b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29457",
        "pageSeq": 29457
    },
    {
        "IDcode": 29458,
        "title": "白莉 蕾姆女仆装",
        "cover": "https://telegra.ph/file/38472569577799257fc06.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29458",
        "pageSeq": 29458
    },
    {
        "IDcode": 29459,
        "title": "奶桃 Topaz黄宝石",
        "cover": "https://telegra.ph/file/f82b7ff694a3a66b25970.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29459",
        "pageSeq": 29459
    },
    {
        "IDcode": 29460,
        "title": "神楽坂真冬 醉梦星河 [75P-161MB]",
        "cover": "https://telegra.ph/file/b3c1218f8e06d8c23ddbd.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29460",
        "pageSeq": 29460
    },
    {
        "IDcode": 29461,
        "title": "神楽坂真冬 小鸟依人 [75P-129MB]",
        "cover": "https://telegra.ph/file/bee580b58bf61ad64eceb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29461",
        "pageSeq": 29461
    },
    {
        "IDcode": 29462,
        "title": "落落Raku 黒猫のソロダンス",
        "cover": "https://telegra.ph/file/ba97f4b382503af2dc14d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29462",
        "pageSeq": 29462
    },
    {
        "IDcode": 29463,
        "title": "[LEEHEE EXPRESS] LEBE 054 Ray [56P]",
        "cover": "https://telegra.ph/file/d0eb7f4f9078f8333cfb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29463",
        "pageSeq": 29463
    },
    {
        "IDcode": 29464,
        "title": "[PhotoChips] No.21 Bokbunjajoo (복분자주) 115P",
        "cover": "https://telegra.ph/file/50acb0fb33c38ae363402.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29464",
        "pageSeq": 29464
    },
    {
        "IDcode": 29465,
        "title": "The End Magazine 作品 205P",
        "cover": "https://telegra.ph/file/00e1c0bdeca21d652d2c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29465",
        "pageSeq": 29465
    },
    {
        "IDcode": 29466,
        "title": "[Espacia Korea] EHC #050 PURM 47P",
        "cover": "https://telegra.ph/file/2cfc610848136028a4f60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29466",
        "pageSeq": 29466
    },
    {
        "IDcode": 29467,
        "title": "[Espacia Korea]  EHC #027 PURM 46P",
        "cover": "https://telegra.ph/file/84c59b141eb124f34338a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29467",
        "pageSeq": 29467
    },
    {
        "IDcode": 29468,
        "title": "[Espacia Korea] EXC #115 SAIKA 河北彩花 48P",
        "cover": "https://telegra.ph/file/50d65f402571e5e7221ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29468",
        "pageSeq": 29468
    },
    {
        "IDcode": 29469,
        "title": "[Moon Night Snap] Mona x Dame - The Queen 85P",
        "cover": "https://telegra.ph/file/c3730ad9dac707775b295.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29469",
        "pageSeq": 29469
    },
    {
        "IDcode": 29470,
        "title": "[Moon Night Snap] Yeon Woo (연우)  83P",
        "cover": "https://telegra.ph/file/eeda04f4e911704636fcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29470",
        "pageSeq": 29470
    },
    {
        "IDcode": 29471,
        "title": "[Espacia Korea] EXC #060 RAHEE 49P",
        "cover": "https://telegra.ph/file/4c6b62cb1b3e8a5556910.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29471",
        "pageSeq": 29471
    },
    {
        "IDcode": 29472,
        "title": "ESPACIA KOREA | EHC - 045 Rahee",
        "cover": "https://telegra.ph/file/4c69ef6a68a0e4602410e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29472",
        "pageSeq": 29472
    },
    {
        "IDcode": 29473,
        "title": "ESPACIA KOREA | ESP - 016 K.G.J",
        "cover": "https://telegra.ph/file/28b70498d29c1ce719019.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29473",
        "pageSeq": 29473
    },
    {
        "IDcode": 29474,
        "title": "ESPACIA KOREA | EHC - #050 PURM",
        "cover": "https://telegra.ph/file/6ee017726b7d6b393be4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29474",
        "pageSeq": 29474
    },
    {
        "IDcode": 29475,
        "title": "ESPACIA KOREA | EHC - #043 K.D.L",
        "cover": "https://telegra.ph/file/45c6597671fe24f200da5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29475",
        "pageSeq": 29475
    },
    {
        "IDcode": 29476,
        "title": "ESPACIA KOREA | EHC - #053 YUNHA",
        "cover": "https://telegra.ph/file/52f6b3d2dd52209dd3c69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29476",
        "pageSeq": 29476
    },
    {
        "IDcode": 29477,
        "title": "ESPACIA KOREA | EHC - #058 Leesnoww_",
        "cover": "https://telegra.ph/file/65af0263e7adad9cb0298.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29477",
        "pageSeq": 29477
    },
    {
        "IDcode": 29478,
        "title": "三无皮卡喵 - 初音酱",
        "cover": "https://telegra.ph/file/588b06eda00ab15e4c353.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29478",
        "pageSeq": 29478
    },
    {
        "IDcode": 29479,
        "title": "黏黏团子兔 特别授课",
        "cover": "https://telegra.ph/file/1eac4b2eb7ddf709a7f16.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29479",
        "pageSeq": 29479
    },
    {
        "IDcode": 29480,
        "title": "黏黏团子兔 修女",
        "cover": "https://telegra.ph/file/205ce00b6e6282813a317.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=29480",
        "pageSeq": 29480
    }
];
