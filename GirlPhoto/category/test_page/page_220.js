// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 44072,
        "title": "Azami - Ulrich von Hutten",
        "cover": "https://telegra.ph/file/5b2f713c7002fdcb7bdca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44072",
        "pageSeq": 44072
    },
    {
        "IDcode": 44073,
        "title": "Neppu - Minato Aqua",
        "cover": "https://telegra.ph/file/ddd56068cca87799aae4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44073",
        "pageSeq": 44073
    },
    {
        "IDcode": 44074,
        "title": "白莉爱吃巧克力 - 关小雨",
        "cover": "https://telegra.ph/file/6f98499cef82c3146c3c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44074",
        "pageSeq": 44074
    },
    {
        "IDcode": 44075,
        "title": "神必女人—Kurumi lewd wedding",
        "cover": "https://telegra.ph/file/b0ed898418e8db9f4b96e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44075",
        "pageSeq": 44075
    },
    {
        "IDcode": 44076,
        "title": "Neppu - Lady Dimitrescu",
        "cover": "https://telegra.ph/file/4f7877cbb153b82e22a92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44076",
        "pageSeq": 44076
    },
    {
        "IDcode": 44077,
        "title": "Fantasy Factory - Illustrious",
        "cover": "https://telegra.ph/file/b7fdf8bedd52c858640f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44077",
        "pageSeq": 44077
    },
    {
        "IDcode": 44078,
        "title": "Aery Tiefling - Misato",
        "cover": "https://telegra.ph/file/701921ed80fb43e1f69fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44078",
        "pageSeq": 44078
    },
    {
        "IDcode": 44079,
        "title": "Neppu - Olga",
        "cover": "https://telegra.ph/file/b9d5aa6e875281273703c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44079",
        "pageSeq": 44079
    },
    {
        "IDcode": 44080,
        "title": "Neppu - Cerestia / Celestia",
        "cover": "https://telegra.ph/file/755e50f9a0911211004da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44080",
        "pageSeq": 44080
    },
    {
        "IDcode": 44081,
        "title": "Aery Tiefling - Makima",
        "cover": "https://telegra.ph/file/026103263b09c5cf1a9eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44081",
        "pageSeq": 44081
    },
    {
        "IDcode": 44082,
        "title": "Hidori Rose - Noelle",
        "cover": "https://telegra.ph/file/2089e98071351bcd1da4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44082",
        "pageSeq": 44082
    },
    {
        "IDcode": 44083,
        "title": "rioko凉凉子 镇海 自拍",
        "cover": "https://telegra.ph/file/5200d91428173ed3a60cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44083",
        "pageSeq": 44083
    },
    {
        "IDcode": 44084,
        "title": "Kobeni Higashiyama (Kittyxkum)",
        "cover": "https://telegra.ph/file/aa0d2741ddba792a8c5c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44084",
        "pageSeq": 44084
    },
    {
        "IDcode": 44085,
        "title": "Kaya Huang - Houshou Marine",
        "cover": "https://telegra.ph/file/c7c7e5d0b82731ef7212b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44085",
        "pageSeq": 44085
    },
    {
        "IDcode": 44086,
        "title": "NiannianD - Prinz Eugen",
        "cover": "https://telegra.ph/file/385861e7663ec4bc93312.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44086",
        "pageSeq": 44086
    },
    {
        "IDcode": 44087,
        "title": "白莉爱吃巧克力 - 偶像歌手 艾米莉亚",
        "cover": "https://telegra.ph/file/abc9cec949b3774723970.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44087",
        "pageSeq": 44087
    },
    {
        "IDcode": 44088,
        "title": "Okita Rinka - Celestine",
        "cover": "https://telegra.ph/file/9b5f86529cc2fa01c124e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44088",
        "pageSeq": 44088
    },
    {
        "IDcode": 44089,
        "title": "Aery Tiefling - Misty",
        "cover": "https://telegra.ph/file/017600ccd6a7602c76fb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44089",
        "pageSeq": 44089
    },
    {
        "IDcode": 44090,
        "title": "Meikoui - Ryzu",
        "cover": "https://telegra.ph/file/e134e0dd8f3b440e01354.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44090",
        "pageSeq": 44090
    },
    {
        "IDcode": 44091,
        "title": "白莉爱吃巧克力 - 蕾姆兔女郎",
        "cover": "https://telegra.ph/file/eb8df85967e1075a1869b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44091",
        "pageSeq": 44091
    },
    {
        "IDcode": 44092,
        "title": "Meikoui - Zero Two",
        "cover": "https://telegra.ph/file/4df438c23fd0f61f935e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44092",
        "pageSeq": 44092
    },
    {
        "IDcode": 44093,
        "title": "Byoru - Yor Forger",
        "cover": "https://telegra.ph/file/904fa8e55dffed93204d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44093",
        "pageSeq": 44093
    },
    {
        "IDcode": 44094,
        "title": "Neppu ネップ - Yor Forger",
        "cover": "https://telegra.ph/file/5f983cecd0000b5fe5f10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44094",
        "pageSeq": 44094
    },
    {
        "IDcode": 44095,
        "title": "星之迟迟 - 黑江雫",
        "cover": "https://telegra.ph/file/dc224e27d400794e298cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44095",
        "pageSeq": 44095
    },
    {
        "IDcode": 44096,
        "title": "奶桃 - 枪凛同人兔女郎",
        "cover": "https://telegra.ph/file/9b61e9c3be658c4540348.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44096",
        "pageSeq": 44096
    },
    {
        "IDcode": 44097,
        "title": "小礼好困-白精灵",
        "cover": "https://telegra.ph/file/4f8308328be857882a386.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44097",
        "pageSeq": 44097
    },
    {
        "IDcode": 44098,
        "title": "Azami - Ichinose Asuna",
        "cover": "https://telegra.ph/file/20be64b48dcd87fef495a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44098",
        "pageSeq": 44098
    },
    {
        "IDcode": 44099,
        "title": "星之迟迟 - 朝露 & 日暮",
        "cover": "https://telegra.ph/file/be735bdeca488c79a6713.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44099",
        "pageSeq": 44099
    },
    {
        "IDcode": 44100,
        "title": "[習呆呆] 喜多川海梦",
        "cover": "https://telegra.ph/file/537165f69223bb69a05c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44100",
        "pageSeq": 44100
    },
    {
        "IDcode": 44101,
        "title": "rioko凉凉子 - NEW JERSEY Bunny",
        "cover": "https://telegra.ph/file/67c2ac8c143febc368e55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44101",
        "pageSeq": 44101
    },
    {
        "IDcode": 44102,
        "title": "【蠢沫沫】赫葵特 40P",
        "cover": "https://telegra.ph/file/2b6d4c92cc4c8ceabbe6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44102",
        "pageSeq": 44102
    },
    {
        "IDcode": 44103,
        "title": "[習呆呆] 喜多川海梦小恶魔",
        "cover": "https://telegra.ph/file/bf49dd2755f34ef1c3959.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44103",
        "pageSeq": 44103
    },
    {
        "IDcode": 44104,
        "title": "KuukoW - Elf Kukuru",
        "cover": "https://telegra.ph/file/976de9a4c780d3bee0bea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44104",
        "pageSeq": 44104
    },
    {
        "IDcode": 44105,
        "title": "[林檎蜜紀] 八重神子 (原神)",
        "cover": "https://telegra.ph/file/214fec253c46d7414fabe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44105",
        "pageSeq": 44105
    },
    {
        "IDcode": 44106,
        "title": "Aqua area - Kurumi（with selfies）",
        "cover": "https://telegra.ph/file/52549c9da667ce96408b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44106",
        "pageSeq": 44106
    },
    {
        "IDcode": 44107,
        "title": "波波豹 - 全果2b [78P-418MB]",
        "cover": "https://telegra.ph/file/efac123e9cf4348df6832.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44107",
        "pageSeq": 44107
    },
    {
        "IDcode": 44108,
        "title": "[林檎蜜紀] 酒呑ちゃん (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/3170d780205618c555bfb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44108",
        "pageSeq": 44108
    },
    {
        "IDcode": 44109,
        "title": "星之迟迟 - 可畏旗袍",
        "cover": "https://telegra.ph/file/8d81f4c4f81243ae42426.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44109",
        "pageSeq": 44109
    },
    {
        "IDcode": 44110,
        "title": "日奈娇 下江小春",
        "cover": "https://telegra.ph/file/7b313784b0933ed57031e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44110",
        "pageSeq": 44110
    },
    {
        "IDcode": 44111,
        "title": "My Suite Atsuki - 嫌な顔しながらも言うこと聞いてくれる樋口円香のROM",
        "cover": "https://telegra.ph/file/6c0d83f8d57a6f2981787.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44111",
        "pageSeq": 44111
    },
    {
        "IDcode": 44112,
        "title": "Hana Bunny - Yor Forger",
        "cover": "https://telegra.ph/file/761eea0b1b84fde258db1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44112",
        "pageSeq": 44112
    },
    {
        "IDcode": 44113,
        "title": "蜜汁猫裘 - 可畏巫女",
        "cover": "https://telegra.ph/file/6505b7edd588bdc9b8b80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44113",
        "pageSeq": 44113
    },
    {
        "IDcode": 44114,
        "title": "Meenfox - Kakudate Karin",
        "cover": "https://telegra.ph/file/a707a1c00121d26952007.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44114",
        "pageSeq": 44114
    },
    {
        "IDcode": 44115,
        "title": "Meenfox - Marin",
        "cover": "https://telegra.ph/file/1ba13947c2446380b8ed5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44115",
        "pageSeq": 44115
    },
    {
        "IDcode": 44116,
        "title": "Meenfox - Yor",
        "cover": "https://telegra.ph/file/e45f316e866d77d6c59a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44116",
        "pageSeq": 44116
    },
    {
        "IDcode": 44117,
        "title": "Meenfox - Noshiro",
        "cover": "https://telegra.ph/file/a6669d501c71b6edb0fd7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44117",
        "pageSeq": 44117
    },
    {
        "IDcode": 44118,
        "title": "爆机少女喵小吉 - Yor Forger",
        "cover": "https://telegra.ph/file/c275e3f393d1eb98b5e4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44118",
        "pageSeq": 44118
    },
    {
        "IDcode": 44119,
        "title": "爆机少女喵小吉 - Rizu-kyun",
        "cover": "https://telegra.ph/file/c35e75385d057be037d1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44119",
        "pageSeq": 44119
    },
    {
        "IDcode": 44120,
        "title": "爆机少女喵小吉 - Reisalin Stout",
        "cover": "https://telegra.ph/file/32e72eb3a761a9983e6d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44120",
        "pageSeq": 44120
    },
    {
        "IDcode": 44121,
        "title": "Meenfox - Yelan",
        "cover": "https://telegra.ph/file/bb2a00955682af16a44a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44121",
        "pageSeq": 44121
    },
    {
        "IDcode": 44122,
        "title": "星澜是澜澜叫澜妹呀 - 2b比基尼",
        "cover": "https://telegra.ph/file/b6b692616932eff7ffdd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44122",
        "pageSeq": 44122
    },
    {
        "IDcode": 44123,
        "title": "[Bluecake] Ye-Eun – REDHOOD SM",
        "cover": "https://telegra.ph/file/11ec6d2bb36a9cd8ca577.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44123",
        "pageSeq": 44123
    },
    {
        "IDcode": 44124,
        "title": "蠢沫沫 - 雷姆",
        "cover": "https://telegra.ph/file/1379ba01f3bd26abcd714.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44124",
        "pageSeq": 44124
    },
    {
        "IDcode": 44125,
        "title": "Yoshinobi - Hanekawa Tsubasa",
        "cover": "https://telegra.ph/file/0d3e85f04c30a1e7e7aa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44125",
        "pageSeq": 44125
    },
    {
        "IDcode": 44126,
        "title": "蛋黄mayo - 八重神子",
        "cover": "https://telegra.ph/file/17dc87eaace60e5d72880.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44126",
        "pageSeq": 44126
    },
    {
        "IDcode": 44127,
        "title": "水淼Aqua - 鬼灭之刃 上弦陆堕姬",
        "cover": "https://telegra.ph/file/3efe35b92eba8806ee0ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44127",
        "pageSeq": 44127
    },
    {
        "IDcode": 44128,
        "title": "[Son Ye-Eun 손예은] 2B [BLUECAKE]",
        "cover": "https://telegra.ph/file/079dfcf72919e18e1ca61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44128",
        "pageSeq": 44128
    },
    {
        "IDcode": 44129,
        "title": "kuukoW - Pure Kokomi",
        "cover": "https://telegra.ph/file/f308b44f488e4c1f88288.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44129",
        "pageSeq": 44129
    },
    {
        "IDcode": 44130,
        "title": "[九曲Jean] 镇海旗袍",
        "cover": "https://telegra.ph/file/8bf3fd6b8cd0bc293fee3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44130",
        "pageSeq": 44130
    },
    {
        "IDcode": 44131,
        "title": "[HERESY (林檎蜜紀)] エッチな指揮官に呼ばれて…♡vol.3セントルイスの場合 (アズールレーン)",
        "cover": "https://telegra.ph/file/838bdf27b8f144a36a141.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44131",
        "pageSeq": 44131
    },
    {
        "IDcode": 44132,
        "title": "Kaya Huang - Super Sonico Pink Cow Girl",
        "cover": "https://telegra.ph/file/3610a16efca8e9869c7a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44132",
        "pageSeq": 44132
    },
    {
        "IDcode": 44133,
        "title": "[Fantasy Factory 小丁] Perseus (Azur Lane)",
        "cover": "https://telegra.ph/file/b5534ccf45d7e6943ee56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44133",
        "pageSeq": 44133
    },
    {
        "IDcode": 44134,
        "title": "Tsuki Desu - Kaguya Neko Lingerie",
        "cover": "https://telegra.ph/file/33e69bf7b7dfb9f9e5509.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44134",
        "pageSeq": 44134
    },
    {
        "IDcode": 44135,
        "title": "QUEENIE CHUPPY - 2B sling bikini",
        "cover": "https://telegra.ph/file/00bee7d5c12cfed5d423e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44135",
        "pageSeq": 44135
    },
    {
        "IDcode": 44136,
        "title": "[HERESY (林檎蜜紀)] 八重神子 (原神)",
        "cover": "https://telegra.ph/file/707738f9bec9107ff75c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44136",
        "pageSeq": 44136
    },
    {
        "IDcode": 44137,
        "title": "ShiroKitsune - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/0246d2634c6fe72bf9a01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44137",
        "pageSeq": 44137
    },
    {
        "IDcode": 44138,
        "title": "ShiroKitsune - Rizu-kyun (My Dress-up Darling)",
        "cover": "https://telegra.ph/file/b4d1355a564f7580bab54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44138",
        "pageSeq": 44138
    },
    {
        "IDcode": 44139,
        "title": "小礼好困 - 信浓",
        "cover": "https://telegra.ph/file/4974477162f4b1971ff44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44139",
        "pageSeq": 44139
    },
    {
        "IDcode": 44140,
        "title": "小礼好困 - 天狼星",
        "cover": "https://telegra.ph/file/b909846fe826d04f601f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44140",
        "pageSeq": 44140
    },
    {
        "IDcode": 44141,
        "title": "小礼好困 - 优菈",
        "cover": "https://telegra.ph/file/f0d18ecaac21cefef95cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44141",
        "pageSeq": 44141
    },
    {
        "IDcode": 44142,
        "title": "小礼好困 - 八重神子",
        "cover": "https://telegra.ph/file/59aeab9b2fd3a193a7a35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44142",
        "pageSeq": 44142
    },
    {
        "IDcode": 44143,
        "title": "rioko凉凉子 - 黑白镇海双人",
        "cover": "https://telegra.ph/file/61a3529ef56dbc0525fc3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44143",
        "pageSeq": 44143
    },
    {
        "IDcode": 44144,
        "title": "Byoru - Gura Selfies",
        "cover": "https://telegra.ph/file/3cc5adc77a52bdbd4f0ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44144",
        "pageSeq": 44144
    },
    {
        "IDcode": 44145,
        "title": "Byoru - Misaki seashell bikini",
        "cover": "https://telegra.ph/file/ac09c951d18b47abd5732.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44145",
        "pageSeq": 44145
    },
    {
        "IDcode": 44146,
        "title": "Cosplay Feet コスプレ足",
        "cover": "https://telegra.ph/file/269dbe83e2f3a998d997f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44146",
        "pageSeq": 44146
    },
    {
        "IDcode": 44147,
        "title": "Byoru - Tifa Bunny",
        "cover": "https://telegra.ph/file/af22c528369afc1fcedc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44147",
        "pageSeq": 44147
    },
    {
        "IDcode": 44148,
        "title": "Byoru - Marin Kitagawa",
        "cover": "https://telegra.ph/file/4ccb97d252f55cb31e6cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44148",
        "pageSeq": 44148
    },
    {
        "IDcode": 44149,
        "title": "[Fantasy Factory (小丁)] Ankha",
        "cover": "https://telegra.ph/file/d22406eebf52f4e714bef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44149",
        "pageSeq": 44149
    },
    {
        "IDcode": 44150,
        "title": "[BIYA] Cosplay Pixiv Fanbox Compilation",
        "cover": "https://telegra.ph/file/67c071da59cb9e8c90ad3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44150",
        "pageSeq": 44150
    },
    {
        "IDcode": 44151,
        "title": "Genshin Impact Cosplay",
        "cover": "https://telegra.ph/file/437c75ec54a530a23087c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44151",
        "pageSeq": 44151
    },
    {
        "IDcode": 44152,
        "title": "蠢沫沫 小赤城",
        "cover": "https://telegra.ph/file/496f7a6a4aaa68ef0dd44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44152",
        "pageSeq": 44152
    },
    {
        "IDcode": 44153,
        "title": "[习呆呆] Fantia 喜多川海夢 Kitagawa Marin",
        "cover": "https://telegra.ph/file/c0f5c5bc370669f9d8bd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44153",
        "pageSeq": 44153
    },
    {
        "IDcode": 44154,
        "title": "習呆呆 - 八重神子",
        "cover": "https://telegra.ph/file/cfe7981ac51825127b7c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44154",
        "pageSeq": 44154
    },
    {
        "IDcode": 44155,
        "title": "Hidori Rose & Gumiho -  Ganyu x Qiqi",
        "cover": "https://telegra.ph/file/8e0d4b1b89d954b22cb97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44155",
        "pageSeq": 44155
    },
    {
        "IDcode": 44156,
        "title": "Sayo Momo - Mash Dancer",
        "cover": "https://telegra.ph/file/2e8703c529277f87f35fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44156",
        "pageSeq": 44156
    },
    {
        "IDcode": 44157,
        "title": "九言&喜茶苍苍子 - 碧蓝航线 镇海白黒双人 [35P]",
        "cover": "https://telegra.ph/file/46492c32ee817a55161ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44157",
        "pageSeq": 44157
    },
    {
        "IDcode": 44158,
        "title": "Nagisa魔物喵 - 莱莎的炼金工房",
        "cover": "https://telegra.ph/file/d90d690d6c457d5ba4e87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44158",
        "pageSeq": 44158
    },
    {
        "IDcode": 44159,
        "title": "Momoko.xoxo - Raiden Shogun",
        "cover": "https://telegra.ph/file/b02950f7dc2d78f0e59ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44159",
        "pageSeq": 44159
    },
    {
        "IDcode": 44160,
        "title": "Hokunaimeko - Reika Shimohira",
        "cover": "https://telegra.ph/file/397d3d52cc1d3c740cfef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44160",
        "pageSeq": 44160
    },
    {
        "IDcode": 44161,
        "title": "習呆呆 Xidaidai - Yor Forger",
        "cover": "https://telegra.ph/file/c17005feeae1e35d78bc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44161",
        "pageSeq": 44161
    },
    {
        "IDcode": 44162,
        "title": "Ino - Ishtar",
        "cover": "https://telegra.ph/file/82024ce2b5cf6242955b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44162",
        "pageSeq": 44162
    },
    {
        "IDcode": 44163,
        "title": "ShiroKitsune - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/1a635bf3d5d6aaf7e2ccd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44163",
        "pageSeq": 44163
    },
    {
        "IDcode": 44164,
        "title": "[習呆呆] 胡桃（永劫无间）",
        "cover": "https://telegra.ph/file/f6b87b926112a79acbe6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44164",
        "pageSeq": 44164
    },
    {
        "IDcode": 44165,
        "title": "Neppu ネップ - Indomitable Maid",
        "cover": "https://telegra.ph/file/4467598c5836e40f1b880.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44165",
        "pageSeq": 44165
    },
    {
        "IDcode": 44166,
        "title": "Aery Tiefling - Rin Tohsaka",
        "cover": "https://telegra.ph/file/bd5aa5230c596b2196115.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44166",
        "pageSeq": 44166
    },
    {
        "IDcode": 44167,
        "title": "Aery Tiefling - 2B",
        "cover": "https://telegra.ph/file/5eeb92b249b2ee3985c92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44167",
        "pageSeq": 44167
    },
    {
        "IDcode": 44168,
        "title": "Aery Tiefling - Nezuko",
        "cover": "https://telegra.ph/file/78e5e3e0a0257392991ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44168",
        "pageSeq": 44168
    },
    {
        "IDcode": 44169,
        "title": "爆机少女喵小吉 - 风花雪月 (Byleth Eisner)",
        "cover": "https://telegra.ph/file/dc8984eee4282621eebe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44169",
        "pageSeq": 44169
    },
    {
        "IDcode": 44170,
        "title": "爆机少女喵小吉 - 黑呆 (Saber Alter)",
        "cover": "https://telegra.ph/file/d4cbad5a41200aac579d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44170",
        "pageSeq": 44170
    },
    {
        "IDcode": 44171,
        "title": "fantasy factory Porn Little Red Riding Hood Sexy ver",
        "cover": "https://telegra.ph/file/d9db6f618166cd3b491f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44171",
        "pageSeq": 44171
    }
];
