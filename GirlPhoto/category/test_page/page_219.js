// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 43972,
        "title": "Queenie - Chun Li Beach",
        "cover": "https://telegra.ph/file/b76fe33ff9e20d7b215a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43972",
        "pageSeq": 43972
    },
    {
        "IDcode": 43973,
        "title": "Choi Ji Yun - Aphrodite White bikini [12]",
        "cover": "https://telegra.ph/file/592b755a305b4c282675a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43973",
        "pageSeq": 43973
    },
    {
        "IDcode": 43974,
        "title": "Choi Ji Yun - Ada Wong w Tifa Outfit",
        "cover": "https://telegra.ph/file/0992ef9134a9b3c0fef6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43974",
        "pageSeq": 43974
    },
    {
        "IDcode": 43975,
        "title": "[Choi Ji Yun] Mikasa Ackerman",
        "cover": "https://telegra.ph/file/187e89d6800c9730a1c46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43975",
        "pageSeq": 43975
    },
    {
        "IDcode": 43976,
        "title": "[Choi Ji Yun] Marin Topless",
        "cover": "https://telegra.ph/file/f2f09f369aaf4f64478c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43976",
        "pageSeq": 43976
    },
    {
        "IDcode": 43977,
        "title": "[Choi Ji Yun] Makima",
        "cover": "https://telegra.ph/file/c0db6bd892f485793256a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43977",
        "pageSeq": 43977
    },
    {
        "IDcode": 43978,
        "title": "[Choi Ji Yun] Kobeni",
        "cover": "https://telegra.ph/file/a38254f308091fe90b142.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43978",
        "pageSeq": 43978
    },
    {
        "IDcode": 43979,
        "title": "Vinnegal - 2B Kunoichi (fullset + bonus)",
        "cover": "https://telegra.ph/file/90e4979340faee8c38373.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43979",
        "pageSeq": 43979
    },
    {
        "IDcode": 43980,
        "title": "Vinnegal - Yumeko (fullset + bonus)",
        "cover": "https://telegra.ph/file/c1d47aad6ba8f6306165d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43980",
        "pageSeq": 43980
    },
    {
        "IDcode": 43981,
        "title": "Fetching_butterflies - Jinx",
        "cover": "https://telegra.ph/file/7885e94c22c8f7774693f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43981",
        "pageSeq": 43981
    },
    {
        "IDcode": 43982,
        "title": "YunoCos - Marin Kitagawa",
        "cover": "https://telegra.ph/file/54bf121a1cdccd92faa0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43982",
        "pageSeq": 43982
    },
    {
        "IDcode": 43983,
        "title": "YunoCos - Taihou Forbidden Fruit",
        "cover": "https://telegra.ph/file/03d4ad37e53f3e23fcd40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43983",
        "pageSeq": 43983
    },
    {
        "IDcode": 43984,
        "title": "白烨烨 - 碧蓝航线可畏奶牛",
        "cover": "https://telegra.ph/file/73888c37e084199f9dd9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43984",
        "pageSeq": 43984
    },
    {
        "IDcode": 43985,
        "title": "KuukoW - Yoimiya",
        "cover": "https://telegra.ph/file/6164281c9153704c07597.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43985",
        "pageSeq": 43985
    },
    {
        "IDcode": 43986,
        "title": "Vinnegal - Tifa Lingerie (fullset + bonus)",
        "cover": "https://telegra.ph/file/bcdda7f2cb68c65dc1993.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43986",
        "pageSeq": 43986
    },
    {
        "IDcode": 43987,
        "title": "Vinnegal - Misato (fullset + bonus)",
        "cover": "https://telegra.ph/file/87db19ca258764101579b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43987",
        "pageSeq": 43987
    },
    {
        "IDcode": 43988,
        "title": "Arty Huang - Genshin Ganyu",
        "cover": "https://telegra.ph/file/0d7455ae7b1a4fb84fc93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43988",
        "pageSeq": 43988
    },
    {
        "IDcode": 43989,
        "title": "Arty Huang - Genshin Raiden Shogun",
        "cover": "https://telegra.ph/file/7ccd8978346db512d86a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43989",
        "pageSeq": 43989
    },
    {
        "IDcode": 43990,
        "title": "Aleksandra Bodler - Zero Two Bunny Suit",
        "cover": "https://telegra.ph/file/17da8c0f7e4b5ed963732.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43990",
        "pageSeq": 43990
    },
    {
        "IDcode": 43991,
        "title": "Rocksy Light - Mononoke",
        "cover": "https://telegra.ph/file/10bf1f151b1511d67a740.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43991",
        "pageSeq": 43991
    },
    {
        "IDcode": 43992,
        "title": "Ana Chuu - Lisa",
        "cover": "https://telegra.ph/file/232837b0613b148099892.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43992",
        "pageSeq": 43992
    },
    {
        "IDcode": 43993,
        "title": "Voezacos - Marin Kitagawa",
        "cover": "https://telegra.ph/file/96d942e0a9555e69cf07c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43993",
        "pageSeq": 43993
    },
    {
        "IDcode": 43994,
        "title": "Voezacos - Shenhe",
        "cover": "https://telegra.ph/file/d159207c51166f2dd9f26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43994",
        "pageSeq": 43994
    },
    {
        "IDcode": 43995,
        "title": "Alcololi & Shirogane-sama - Power and Makima",
        "cover": "https://telegra.ph/file/81a71c474620998620b28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43995",
        "pageSeq": 43995
    },
    {
        "IDcode": 43996,
        "title": "Pingping - Mashu Kyrielight Dancer",
        "cover": "https://telegra.ph/file/36c1c0d597272d338a57f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43996",
        "pageSeq": 43996
    },
    {
        "IDcode": 43997,
        "title": "Mash & Gilgamesh",
        "cover": "https://telegra.ph/file/b81df3f2dd916cde178e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43997",
        "pageSeq": 43997
    },
    {
        "IDcode": 43998,
        "title": "ShiroKitsune - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/a6a1df3facc839fa254c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43998",
        "pageSeq": 43998
    },
    {
        "IDcode": 43999,
        "title": "ShiroKitsune - Shizuku-tan (My Dress-up Darling)",
        "cover": "https://telegra.ph/file/7111783a1ce06806068a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43999",
        "pageSeq": 43999
    },
    {
        "IDcode": 44000,
        "title": "Byoru - Aqua Minato",
        "cover": "https://telegra.ph/file/27e5dd8e98d79ebfc15b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44000",
        "pageSeq": 44000
    },
    {
        "IDcode": 44001,
        "title": "Byoru - Yae Miko x Raiden Shogun",
        "cover": "https://telegra.ph/file/fba9f42debbd88f958465.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44001",
        "pageSeq": 44001
    },
    {
        "IDcode": 44002,
        "title": "星之迟迟 - 阿达尔伯特",
        "cover": "https://telegra.ph/file/555f1b617bc457a839068.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44002",
        "pageSeq": 44002
    },
    {
        "IDcode": 44003,
        "title": "是三不是世w - 恶毒白兔40p",
        "cover": "https://telegra.ph/file/00e858da7ac314bd5dbcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44003",
        "pageSeq": 44003
    },
    {
        "IDcode": 44004,
        "title": "是三不是世w - 原神莫娜女仆55p",
        "cover": "https://telegra.ph/file/c851ce7e6dbcbbeaf7e9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44004",
        "pageSeq": 44004
    },
    {
        "IDcode": 44005,
        "title": "蜜蜜子-2b",
        "cover": "https://telegra.ph/file/5bc7303b1cd819a874755.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44005",
        "pageSeq": 44005
    },
    {
        "IDcode": 44006,
        "title": "水淼 - 喜多川海梦",
        "cover": "https://telegra.ph/file/be8ca87c4f1b035da2138.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44006",
        "pageSeq": 44006
    },
    {
        "IDcode": 44007,
        "title": "[奈奈 紀] 瑪修 YD老師版本",
        "cover": "https://telegra.ph/file/61e8f866025922751d373.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44007",
        "pageSeq": 44007
    },
    {
        "IDcode": 44008,
        "title": "Nagisa - Rem",
        "cover": "https://telegra.ph/file/7a2113c83953c44e71db2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44008",
        "pageSeq": 44008
    },
    {
        "IDcode": 44009,
        "title": "KittyxKum - Secre Swallowtail",
        "cover": "https://telegra.ph/file/f6f696a0819198b40001d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44009",
        "pageSeq": 44009
    },
    {
        "IDcode": 44010,
        "title": "星之迟迟 -《Darling》能代 [61P1V-1.59GB]",
        "cover": "https://telegra.ph/file/c7d5492f81350f2d6dd7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44010",
        "pageSeq": 44010
    },
    {
        "IDcode": 44011,
        "title": "[橙子喵酱]穹妹旗袍 &  穹妹体操服",
        "cover": "https://telegra.ph/file/bd68798935227e636f034.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44011",
        "pageSeq": 44011
    },
    {
        "IDcode": 44012,
        "title": "KittyxKum - D.Va Bunny",
        "cover": "https://telegra.ph/file/309c0ddc671967ad55dab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44012",
        "pageSeq": 44012
    },
    {
        "IDcode": 44013,
        "title": "KittyxKum - Asuna Yuuki",
        "cover": "https://telegra.ph/file/19a47c5ca44d19668845c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44013",
        "pageSeq": 44013
    },
    {
        "IDcode": 44014,
        "title": "aerytiefling - tsuyu",
        "cover": "https://telegra.ph/file/66932295ac1ff7f3d08a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44014",
        "pageSeq": 44014
    },
    {
        "IDcode": 44015,
        "title": "水淼 - 黑江雫",
        "cover": "https://telegra.ph/file/7db0e6636e51fa71bc1d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44015",
        "pageSeq": 44015
    },
    {
        "IDcode": 44016,
        "title": "Arty Huang - Yae Miko",
        "cover": "https://telegra.ph/file/9b8272741cbc2d13f1cba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44016",
        "pageSeq": 44016
    },
    {
        "IDcode": 44017,
        "title": "Chihiro Chang 千尋 - Shinobu (Demon Slayer)",
        "cover": "https://telegra.ph/file/cb3805a814b25391c119d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44017",
        "pageSeq": 44017
    },
    {
        "IDcode": 44018,
        "title": "[Cosplayer] Sameki",
        "cover": "https://telegra.ph/file/6dab3f1d28d8fe540ef6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44018",
        "pageSeq": 44018
    },
    {
        "IDcode": 44019,
        "title": "秋和柯基 - 星奈",
        "cover": "https://telegra.ph/file/471384063f57bcf1b4087.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44019",
        "pageSeq": 44019
    },
    {
        "IDcode": 44020,
        "title": "Arty Huang - Artoria",
        "cover": "https://telegra.ph/file/eb5377fad7ca54cafc419.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44020",
        "pageSeq": 44020
    },
    {
        "IDcode": 44021,
        "title": "Arty Huang - St. Louis",
        "cover": "https://telegra.ph/file/d26f1921756b0d0fe2a2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44021",
        "pageSeq": 44021
    },
    {
        "IDcode": 44022,
        "title": "【菌烨】",
        "cover": "https://telegra.ph/file/49e72b0f16b6cb2ce2a4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44022",
        "pageSeq": 44022
    },
    {
        "IDcode": 44023,
        "title": "Disharmonica Yor Briar Cosplay (Spy x Family)",
        "cover": "https://telegra.ph/file/34284f9621ecad76c1a36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44023",
        "pageSeq": 44023
    },
    {
        "IDcode": 44024,
        "title": "前羽_rr - 花园",
        "cover": "https://telegra.ph/file/a27d0820fbde655d2d201.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44024",
        "pageSeq": 44024
    },
    {
        "IDcode": 44025,
        "title": "Choi Ji Yun - Yor Forger [37] + [19]",
        "cover": "https://telegra.ph/file/69f9b8e3e0d07f7cbaa6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44025",
        "pageSeq": 44025
    },
    {
        "IDcode": 44026,
        "title": "COSH-128 蒂法-最终幻想",
        "cover": "https://telegra.ph/file/7675c6f03986329d2dea7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44026",
        "pageSeq": 44026
    },
    {
        "IDcode": 44027,
        "title": "KuukoW - Mashu Dancer",
        "cover": "https://telegra.ph/file/feb86a8ca66d436251601.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44027",
        "pageSeq": 44027
    },
    {
        "IDcode": 44028,
        "title": "Sameki - Karin",
        "cover": "https://telegra.ph/file/079e0096875b4e218a5a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44028",
        "pageSeq": 44028
    },
    {
        "IDcode": 44029,
        "title": "南宫 - 森蚺",
        "cover": "https://telegra.ph/file/616229b1e062827324a0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44029",
        "pageSeq": 44029
    },
    {
        "IDcode": 44030,
        "title": "【爆机少女喵小吉】罪恶王冠 ギルティクラウン",
        "cover": "https://telegra.ph/file/9ed4c8b9e5a6aec293aeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44030",
        "pageSeq": 44030
    },
    {
        "IDcode": 44031,
        "title": "PoppaChan - Gawr Gura",
        "cover": "https://telegra.ph/file/9cecfb717ec321267a7fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44031",
        "pageSeq": 44031
    },
    {
        "IDcode": 44032,
        "title": "Cosplay deepfakes",
        "cover": "https://telegra.ph/file/067acfad7400f0ee2190b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44032",
        "pageSeq": 44032
    },
    {
        "IDcode": 44033,
        "title": "横川是川崽 - Arknights【三周年】w.芭蕾服",
        "cover": "https://telegra.ph/file/2c737ab8ae3b543db0226.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44033",
        "pageSeq": 44033
    },
    {
        "IDcode": 44034,
        "title": "[仙仙桃]喜多川海梦23P",
        "cover": "https://telegra.ph/file/977c8810aa6b372d77ad5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44034",
        "pageSeq": 44034
    },
    {
        "IDcode": 44035,
        "title": "Yoshinobi - Sonico leotard",
        "cover": "https://telegra.ph/file/d070f593a4f1d7e56561e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44035",
        "pageSeq": 44035
    },
    {
        "IDcode": 44036,
        "title": "Sally Dorasnow - Mona Swimsuit",
        "cover": "https://telegra.ph/file/531220f49effd51029ec7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44036",
        "pageSeq": 44036
    },
    {
        "IDcode": 44037,
        "title": "YaoYaoQwQ - Gawr Gura",
        "cover": "https://telegra.ph/file/817a992b6e460a5b68f86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44037",
        "pageSeq": 44037
    },
    {
        "IDcode": 44038,
        "title": "Byoru - Maid Raiden",
        "cover": "https://telegra.ph/file/90f133e8636281d173f39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44038",
        "pageSeq": 44038
    },
    {
        "IDcode": 44039,
        "title": "Rio 璃緒 - Re:エロから始める新婚生活～レムifルート突入⁉～",
        "cover": "https://telegra.ph/file/5788b28391cf3ebf519ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44039",
        "pageSeq": 44039
    },
    {
        "IDcode": 44040,
        "title": "Byoru - Yelan",
        "cover": "https://telegra.ph/file/f310b3f3043638065c251.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44040",
        "pageSeq": 44040
    },
    {
        "IDcode": 44041,
        "title": "沖田凜花 - 一之瀨明日奈",
        "cover": "https://telegra.ph/file/2d17df06b3ca86bff2b34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44041",
        "pageSeq": 44041
    },
    {
        "IDcode": 44042,
        "title": "Byoru - Eula",
        "cover": "https://telegra.ph/file/5b3da753ced66b937e0bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44042",
        "pageSeq": 44042
    },
    {
        "IDcode": 44043,
        "title": "橙子喵酱 - 阿狸 [23P]",
        "cover": "https://telegra.ph/file/4e3944592b999840797dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44043",
        "pageSeq": 44043
    },
    {
        "IDcode": 44044,
        "title": "橙子喵酱 - 八重神子 [25P]",
        "cover": "https://telegra.ph/file/3ee99839cd6ab35b5c192.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44044",
        "pageSeq": 44044
    },
    {
        "IDcode": 44045,
        "title": "橙子喵酱 - 芭芭拉 [63P]",
        "cover": "https://telegra.ph/file/8dd2194c0ca6840332f45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44045",
        "pageSeq": 44045
    },
    {
        "IDcode": 44046,
        "title": "橙子喵酱 - 金克斯 [29P]",
        "cover": "https://telegra.ph/file/294fcb318e22bc6610454.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44046",
        "pageSeq": 44046
    },
    {
        "IDcode": 44047,
        "title": "橙子喵酱 - 刻晴 [50P]",
        "cover": "https://telegra.ph/file/7a8d6902b944b063303b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44047",
        "pageSeq": 44047
    },
    {
        "IDcode": 44048,
        "title": "橙子喵酱 - 雷神 [26P]",
        "cover": "https://telegra.ph/file/baeaebda7efa7f7458ba5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44048",
        "pageSeq": 44048
    },
    {
        "IDcode": 44049,
        "title": "橙子喵酱 - 蕾姆 [35P]",
        "cover": "https://telegra.ph/file/a99b9f31a42565065da58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44049",
        "pageSeq": 44049
    },
    {
        "IDcode": 44050,
        "title": "橙子喵酱 - 2B 尼尔机械纪元 [21P]",
        "cover": "https://telegra.ph/file/a667847e0c0a6dda27322.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44050",
        "pageSeq": 44050
    },
    {
        "IDcode": 44051,
        "title": "橙子喵酱 - 亚丝娜 [12P]",
        "cover": "https://telegra.ph/file/65fae4604eb7d5768801c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44051",
        "pageSeq": 44051
    },
    {
        "IDcode": 44052,
        "title": "橙子喵酱 - 索拉卡 [34P]",
        "cover": "https://telegra.ph/file/b50f0965fba6098696e08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44052",
        "pageSeq": 44052
    },
    {
        "IDcode": 44053,
        "title": "橙子喵酱 - 宵宫 [23P]",
        "cover": "https://telegra.ph/file/1e6f11d38924b71028cc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44053",
        "pageSeq": 44053
    },
    {
        "IDcode": 44054,
        "title": "橙子喵酱 - 黑贞德 [7P]",
        "cover": "https://telegra.ph/file/78b665ed6dd3fe4f2e7f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44054",
        "pageSeq": 44054
    },
    {
        "IDcode": 44055,
        "title": "橙子喵酱 - 明日方舟 [25P]",
        "cover": "https://telegra.ph/file/ff80327176f7ff773cbed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44055",
        "pageSeq": 44055
    },
    {
        "IDcode": 44056,
        "title": "橙子喵酱 - 樱岛麻衣 [25P]",
        "cover": "https://telegra.ph/file/66a84f87baeca525365d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44056",
        "pageSeq": 44056
    },
    {
        "IDcode": 44057,
        "title": "橙子喵酱 - 恶毒 [6P]",
        "cover": "https://telegra.ph/file/5d2a330946ebfeaa6810f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44057",
        "pageSeq": 44057
    },
    {
        "IDcode": 44058,
        "title": "橙子喵酱 - 胡桃 [10P]",
        "cover": "https://telegra.ph/file/0a1fe6dcce5067de07ba2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44058",
        "pageSeq": 44058
    },
    {
        "IDcode": 44059,
        "title": "橙子喵酱 - 西施 & 娜可露露 [24P]",
        "cover": "https://telegra.ph/file/72779886114a3332d270b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44059",
        "pageSeq": 44059
    },
    {
        "IDcode": 44060,
        "title": "橙子喵酱 - 甘雨 [10P]",
        "cover": "https://telegra.ph/file/0e1de4a80bc68bc8fabec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44060",
        "pageSeq": 44060
    },
    {
        "IDcode": 44061,
        "title": "橙子喵酱 - 伊莉雅 [19P]",
        "cover": "https://telegra.ph/file/4e1060975e92db99048a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44061",
        "pageSeq": 44061
    },
    {
        "IDcode": 44062,
        "title": "橙子喵酱 - 优菈 [49P]",
        "cover": "https://telegra.ph/file/5eac874548b5c47e2ceaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44062",
        "pageSeq": 44062
    },
    {
        "IDcode": 44063,
        "title": "橙子喵酱 - 心海 [7P]",
        "cover": "https://telegra.ph/file/da582b07173f8fd9259b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44063",
        "pageSeq": 44063
    },
    {
        "IDcode": 44064,
        "title": "星之迟迟-《Darling》大凤",
        "cover": "https://telegra.ph/file/3af84f11e6f4f6d47606c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44064",
        "pageSeq": 44064
    },
    {
        "IDcode": 44065,
        "title": "[水淼aqua] Rizukyun",
        "cover": "https://telegra.ph/file/6914beb27f2100e935743.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44065",
        "pageSeq": 44065
    },
    {
        "IDcode": 44066,
        "title": "Neppu ネップ - Ankha",
        "cover": "https://telegra.ph/file/deec053e5dcb93e67f783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44066",
        "pageSeq": 44066
    },
    {
        "IDcode": 44067,
        "title": "Neppu - Ahri_KDA_MORE",
        "cover": "https://telegra.ph/file/b41390431f4ceb9fdc7cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44067",
        "pageSeq": 44067
    },
    {
        "IDcode": 44068,
        "title": "PA-15",
        "cover": "https://telegra.ph/file/717ddfb47324da7b742b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44068",
        "pageSeq": 44068
    },
    {
        "IDcode": 44069,
        "title": "【少女映畫】陈 | Chen Hui-chieh",
        "cover": "https://telegra.ph/file/aa9f93f77f1b8231f333b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44069",
        "pageSeq": 44069
    },
    {
        "IDcode": 44070,
        "title": "Neppu - RIAMU YUMEMI",
        "cover": "https://telegra.ph/file/5e9508a04868d62ce4004.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44070",
        "pageSeq": 44070
    },
    {
        "IDcode": 44071,
        "title": "Hokunaimeko 赫萝",
        "cover": "https://telegra.ph/file/4a5ac7feff3cdb38ad31c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44071",
        "pageSeq": 44071
    }
];
