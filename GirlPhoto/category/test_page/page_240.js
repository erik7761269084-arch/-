// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 46072,
        "title": "TI 黑贞 - Page 1",
        "cover": "https://telegra.ph/file/2a3eb130d04965b0a24e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46072",
        "pageSeq": 46072
    },
    {
        "IDcode": 46073,
        "title": "Ely - Rikka Takarada Swimsuit - Page 1",
        "cover": "https://telegra.ph/file/5d7921d583432e8c36f00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46073",
        "pageSeq": 46073
    },
    {
        "IDcode": 46074,
        "title": "TI 黑贞兔兔 30P - Page 1",
        "cover": "https://telegra.ph/file/165766b09cb5d1539cb5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46074",
        "pageSeq": 46074
    },
    {
        "IDcode": 46075,
        "title": "TI 杀戮都市兔女郎 31P - Page 1",
        "cover": "https://telegra.ph/file/70cb531d3b1f10ee223a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46075",
        "pageSeq": 46075
    },
    {
        "IDcode": 46076,
        "title": "Fantasy Factory - Dido - Page 1",
        "cover": "https://telegra.ph/file/497b84ed5cdcff0225377.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46076",
        "pageSeq": 46076
    },
    {
        "IDcode": 46077,
        "title": "上大分的瑶 - Page 1",
        "cover": "https://telegra.ph/file/6e14255fe6f2b0714bc01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46077",
        "pageSeq": 46077
    },
    {
        "IDcode": 46078,
        "title": "HaneAme - Asagi Igawa - Page 1",
        "cover": "https://telegra.ph/file/fba30cf918bea890b3ec6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46078",
        "pageSeq": 46078
    },
    {
        "IDcode": 46079,
        "title": "CarryKey - Zelda Christmas - Page 1",
        "cover": "https://telegra.ph/file/eedc2951b950eb7cc046f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46079",
        "pageSeq": 46079
    },
    {
        "IDcode": 46080,
        "title": "Sayako(さやこ) - 原神胡桃 - Page 1",
        "cover": "https://telegra.ph/file/f0ebf3a90bb8e11228276.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46080",
        "pageSeq": 46080
    },
    {
        "IDcode": 46081,
        "title": "Sayako(さやこ) - ユニコーン憧れの遊園地 - Page 1",
        "cover": "https://telegra.ph/file/755b68fe7577ed3c6fbbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46081",
        "pageSeq": 46081
    },
    {
        "IDcode": 46082,
        "title": "[林檎蜜紀] 淫乱ぴんく💖生着替えもあるよ！ドスケベすぎるアズレン！テニス🎾ブレマートン - Page 1",
        "cover": "https://telegra.ph/file/d7236c9edcc6341009686.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46082",
        "pageSeq": 46082
    },
    {
        "IDcode": 46083,
        "title": "UyUy ~ Hinata - Page 1",
        "cover": "https://telegra.ph/file/015652831a651a5516eec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46083",
        "pageSeq": 46083
    },
    {
        "IDcode": 46084,
        "title": "nagisa魔物喵 - ウェディング(ランジェリー)・レム💙 - Page 1",
        "cover": "https://telegra.ph/file/bd40ba12d5642e9720f7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46084",
        "pageSeq": 46084
    },
    {
        "IDcode": 46085,
        "title": "Vinnegal - 2B - Page 1",
        "cover": "https://telegra.ph/file/ae3a04f1236007597af4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46085",
        "pageSeq": 46085
    },
    {
        "IDcode": 46086,
        "title": "Vinnegal - Zero Two - Page 1",
        "cover": "https://telegra.ph/file/67ac9b70b922f408330e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46086",
        "pageSeq": 46086
    },
    {
        "IDcode": 46087,
        "title": "鈴木美咲 (Misaki Suzuki) – 刻晴篇 - Page 1",
        "cover": "https://telegra.ph/file/0349450fc0c9949c97d46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46087",
        "pageSeq": 46087
    },
    {
        "IDcode": 46088,
        "title": "nagisa魔物喵 - 雷電将軍💜 - Page 1",
        "cover": "https://telegra.ph/file/7a329bc6d5c28d07f7c21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46088",
        "pageSeq": 46088
    },
    {
        "IDcode": 46089,
        "title": "Vinnegal - Satsuki - Page 1",
        "cover": "https://telegra.ph/file/c35961ea856f21a3fab94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46089",
        "pageSeq": 46089
    },
    {
        "IDcode": 46090,
        "title": "[DJAWA] Backout Queen Misa Amane - Son YeEun 손예은 - Page 1",
        "cover": "https://telegra.ph/file/e4d5a1d4c938e9332b1ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46090",
        "pageSeq": 46090
    },
    {
        "IDcode": 46091,
        "title": "Barbara by Joyce_lin2x - Page 1",
        "cover": "https://telegra.ph/file/8dbe7f04a3be943544189.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46091",
        "pageSeq": 46091
    },
    {
        "IDcode": 46092,
        "title": "lostwind10 kagura nana - Page 1",
        "cover": "https://telegra.ph/file/ee6e2bbc155d6d7b0db59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46092",
        "pageSeq": 46092
    },
    {
        "IDcode": 46093,
        "title": "Sayako(さやこ) ユニコーンメイド - Page 1",
        "cover": "https://telegra.ph/file/f8384f3157df414306220.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46093",
        "pageSeq": 46093
    },
    {
        "IDcode": 46094,
        "title": "Vinnegal Pieck Finger - Page 1",
        "cover": "https://telegra.ph/file/dfe6da7aaa53956d99aa2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46094",
        "pageSeq": 46094
    },
    {
        "IDcode": 46095,
        "title": "Nath Sokolova - Hermione Granger - Page 1",
        "cover": "https://telegra.ph/file/d692ddb27f7e7cbc1928f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46095",
        "pageSeq": 46095
    },
    {
        "IDcode": 46096,
        "title": "Nath Sokolova - Asuka Langley Soryu - Page 1",
        "cover": "https://telegra.ph/file/7ea1adfed5721dc574093.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46096",
        "pageSeq": 46096
    },
    {
        "IDcode": 46097,
        "title": "[DJAWA] Zia - Overheated K2 (Girls Frontline) - Page 1",
        "cover": "https://telegra.ph/file/e95eff8b3753b135de13d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46097",
        "pageSeq": 46097
    },
    {
        "IDcode": 46098,
        "title": "[DJAWA] Bambi - Azur Lane HMS Sirius - Page 1",
        "cover": "https://telegra.ph/file/4187948cb551e9c381425.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46098",
        "pageSeq": 46098
    },
    {
        "IDcode": 46099,
        "title": "Angel Chan (Wlepwlop) - Sayu - Page 1",
        "cover": "https://telegra.ph/file/9b85246c054767bfef094.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46099",
        "pageSeq": 46099
    },
    {
        "IDcode": 46100,
        "title": "秋和柯基 - 白枪呆 同人和服 - Page 1",
        "cover": "https://telegra.ph/file/f3ab6517980da2eae6070.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46100",
        "pageSeq": 46100
    },
    {
        "IDcode": 46101,
        "title": "Kaya - Samsung Sam - Page 1",
        "cover": "https://telegra.ph/file/0d2400db9c4c789804e4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46101",
        "pageSeq": 46101
    },
    {
        "IDcode": 46102,
        "title": "[Fantasy Factory]Asuka 17P - Page 1",
        "cover": "https://telegra.ph/file/a49d52b8d5414a55febf0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46102",
        "pageSeq": 46102
    },
    {
        "IDcode": 46103,
        "title": "Vinnegal REZE - Page 1",
        "cover": "https://telegra.ph/file/b6d7ef9db51f61c4687cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46103",
        "pageSeq": 46103
    },
    {
        "IDcode": 46104,
        "title": "Vinnegal 2B - Page 1",
        "cover": "https://telegra.ph/file/a4acddd40309b7749ba51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46104",
        "pageSeq": 46104
    },
    {
        "IDcode": 46105,
        "title": "SexFriend 170「ダージリン様の午後のタイツ」 - Page 1",
        "cover": "https://telegra.ph/file/b87754181d7bb504a4a48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46105",
        "pageSeq": 46105
    },
    {
        "IDcode": 46106,
        "title": "花柒Hana - 独角兽清凉阅读时光 - Page 1",
        "cover": "https://telegra.ph/file/d81f5e4d70735f7647a78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46106",
        "pageSeq": 46106
    },
    {
        "IDcode": 46107,
        "title": "蜜汁猫裘 - 黑太子 - Page 1",
        "cover": "https://telegra.ph/file/1b74b03fca7f2c0a52c53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46107",
        "pageSeq": 46107
    },
    {
        "IDcode": 46108,
        "title": "蠢沫沫 - 安琪拉 时之奇旅 - Page 1",
        "cover": "https://telegra.ph/file/c7fbfdd450c35853caf3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46108",
        "pageSeq": 46108
    },
    {
        "IDcode": 46109,
        "title": "皮皮奶可可爱了啦 - 天狼星 - Page 1",
        "cover": "https://telegra.ph/file/6aa749f3acbca4c4f4633.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46109",
        "pageSeq": 46109
    },
    {
        "IDcode": 46110,
        "title": "[cospuri] 259 - Jeanne dArc Alter Leather - Page 1",
        "cover": "https://telegra.ph/file/3ca9141a50a8d81a3eb70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46110",
        "pageSeq": 46110
    },
    {
        "IDcode": 46111,
        "title": "バニー桜島麻衣 - Page 1",
        "cover": "https://telegra.ph/file/72b2e7be72020baaa0480.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46111",
        "pageSeq": 46111
    },
    {
        "IDcode": 46112,
        "title": "Sayako(さやこ) - シロクマと夏のアイスタイム - Page 1",
        "cover": "https://telegra.ph/file/0279fd1f57c91eea1a873.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46112",
        "pageSeq": 46112
    },
    {
        "IDcode": 46113,
        "title": "[りずな] 八重神子 (原神) - Page 1",
        "cover": "https://telegra.ph/file/356d8d2c2fa76185d96a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46113",
        "pageSeq": 46113
    },
    {
        "IDcode": 46114,
        "title": "Sayako(さやこ) - 能代♡夜饗の絶園Cosplay - Page 1",
        "cover": "https://telegra.ph/file/b064ef47e4d00df6fcff4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46114",
        "pageSeq": 46114
    },
    {
        "IDcode": 46115,
        "title": "Sayako(さやこ) - バーバラ原神 - Page 1",
        "cover": "https://telegra.ph/file/6424e827aeceebebfd950.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46115",
        "pageSeq": 46115
    },
    {
        "IDcode": 46116,
        "title": "二佐Nisa - 玛修婚纱 - Page 1",
        "cover": "https://telegra.ph/file/fe6187678c58e12e25696.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46116",
        "pageSeq": 46116
    },
    {
        "IDcode": 46117,
        "title": "Arknights - Rhine Labs - Page 1",
        "cover": "https://telegra.ph/file/0ff64039eaa57e26b48b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46117",
        "pageSeq": 46117
    },
    {
        "IDcode": 46118,
        "title": "ShiroKitsune - Barbara (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/4e22852d54202643a704f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46118",
        "pageSeq": 46118
    },
    {
        "IDcode": 46119,
        "title": "Kalinka Fox - Do-S - Page 1",
        "cover": "https://telegra.ph/file/b66ff67ee2bf5cad5cc48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46119",
        "pageSeq": 46119
    },
    {
        "IDcode": 46120,
        "title": "[林檎蜜紀] 原神💜新コスプレ⚡️Sexy雷電将軍💜ファンティア限定エロエロランジェリーVerも💜 - Page 1",
        "cover": "https://telegra.ph/file/005e1e3a6fa5ce4482b90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46120",
        "pageSeq": 46120
    },
    {
        "IDcode": 46121,
        "title": "[十字風 Lin Crosswind] Pregnant Saber Extra / Saber Alter - Page 1",
        "cover": "https://telegra.ph/file/8e7bab99ff0c35c805919.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46121",
        "pageSeq": 46121
    },
    {
        "IDcode": 46122,
        "title": "UyUy - Tifa Reverse Bunny - Page 1",
        "cover": "https://telegra.ph/file/c7f87ae8c182d913ec088.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46122",
        "pageSeq": 46122
    },
    {
        "IDcode": 46123,
        "title": "My Suite Atsuki - Bunny Surprise (Ichinose Asuna - Blue Archive 碧蓝档案 一之瀬明日奈) - Page 1",
        "cover": "https://telegra.ph/file/911dd98bfd67cb7fd2291.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46123",
        "pageSeq": 46123
    },
    {
        "IDcode": 46124,
        "title": "[PROJECT-Y] ア●ールレーン ユニコーンの大胆えっちな姿を覗いちゃった☆彡 - Page 1",
        "cover": "https://telegra.ph/file/872603dd59536c132af68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46124",
        "pageSeq": 46124
    },
    {
        "IDcode": 46125,
        "title": "Vinnegal - Casual Asuka - Page 1",
        "cover": "https://telegra.ph/file/639b2156602c3c739e0f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46125",
        "pageSeq": 46125
    },
    {
        "IDcode": 46126,
        "title": "Shirokitsune - Zero Two - Page 1",
        "cover": "https://telegra.ph/file/5e06a26828c0c38c24733.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46126",
        "pageSeq": 46126
    },
    {
        "IDcode": 46127,
        "title": "星之迟迟 - 斯卡哈 真红教枪 - Page 1",
        "cover": "https://telegra.ph/file/cb1a98a1a3448720f99cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46127",
        "pageSeq": 46127
    },
    {
        "IDcode": 46128,
        "title": "[Fantasy Factory 小丁] Enjou Genmu Tan - Chun-mei - Page 1",
        "cover": "https://telegra.ph/file/41221683aa15946086947.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46128",
        "pageSeq": 46128
    },
    {
        "IDcode": 46129,
        "title": "Meenfox - Yae Miko - Page 1",
        "cover": "https://telegra.ph/file/2c2b4706809695e272933.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46129",
        "pageSeq": 46129
    },
    {
        "IDcode": 46130,
        "title": "Meenfox - Ayaka - Page 1",
        "cover": "https://telegra.ph/file/68952216d8d4b3c99e0c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46130",
        "pageSeq": 46130
    },
    {
        "IDcode": 46131,
        "title": "Meenfox - Yanfei - Page 1",
        "cover": "https://telegra.ph/file/c7eff85be3b50bf0cb317.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46131",
        "pageSeq": 46131
    },
    {
        "IDcode": 46132,
        "title": "Meenfox - Mona - Page 1",
        "cover": "https://telegra.ph/file/51e4ec1db9e810d1552f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46132",
        "pageSeq": 46132
    },
    {
        "IDcode": 46133,
        "title": "Meenfox - Sucrose - Page 1",
        "cover": "https://telegra.ph/file/7a2ed8a40975cbe226386.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46133",
        "pageSeq": 46133
    },
    {
        "IDcode": 46134,
        "title": "Meenfox - Noelle - Page 1",
        "cover": "https://telegra.ph/file/799310d8e091658680c57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46134",
        "pageSeq": 46134
    },
    {
        "IDcode": 46135,
        "title": "Meenfox - Barbara - Page 1",
        "cover": "https://telegra.ph/file/2314fa18206817d7f4fae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46135",
        "pageSeq": 46135
    },
    {
        "IDcode": 46136,
        "title": "Meenfox - Marine - Page 1",
        "cover": "https://telegra.ph/file/8c8369ae9026c02231098.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46136",
        "pageSeq": 46136
    },
    {
        "IDcode": 46137,
        "title": "蠢沫沫 - 可畏 巫女 + 可畏 婚纱 + 可畏 绅士版 - Page 1",
        "cover": "https://telegra.ph/file/099a2f2e6ffc289f9de21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46137",
        "pageSeq": 46137
    },
    {
        "IDcode": 46138,
        "title": "Lera Himera - Tifa Lockhart - Page 1",
        "cover": "https://telegra.ph/file/c7acd10d834b9ab2a83fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46138",
        "pageSeq": 46138
    },
    {
        "IDcode": 46139,
        "title": "Hidori Rose & Gumiho - Nekopara Chocola x Vanilla swimsuit collab - Page 1",
        "cover": "https://telegra.ph/file/53e4cdd92334b0987871d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46139",
        "pageSeq": 46139
    },
    {
        "IDcode": 46140,
        "title": "Meladinha - Makima - Page 1",
        "cover": "https://telegra.ph/file/4912947d2d59f681e36f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46140",
        "pageSeq": 46140
    },
    {
        "IDcode": 46141,
        "title": "Hana Bunny - Bayonetta - Page 1",
        "cover": "https://telegra.ph/file/4076cb24dc74b3bef4c0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46141",
        "pageSeq": 46141
    },
    {
        "IDcode": 46142,
        "title": "Hana Bunny - Mahito - Page 1",
        "cover": "https://telegra.ph/file/527506439a7e2a2fd143a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46142",
        "pageSeq": 46142
    },
    {
        "IDcode": 46143,
        "title": "Quackiess - Hu Tao - Page 1",
        "cover": "https://telegra.ph/file/946ca659c72d13d541e47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46143",
        "pageSeq": 46143
    },
    {
        "IDcode": 46144,
        "title": "[CocoPie] Shoujo Ramune - Page 1",
        "cover": "https://telegra.ph/file/46860a8be98c5653feeed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46144",
        "pageSeq": 46144
    },
    {
        "IDcode": 46145,
        "title": "nagisa魔物喵 本日のヘスティア様 - Page 1",
        "cover": "https://telegra.ph/file/424d23cfb995c0e4fe9aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46145",
        "pageSeq": 46145
    },
    {
        "IDcode": 46146,
        "title": "UyUy - Mashu - Page 1",
        "cover": "https://telegra.ph/file/fa5c8d8ef825bae2236ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46146",
        "pageSeq": 46146
    },
    {
        "IDcode": 46147,
        "title": "ShiroKitsune - Bela Dimitrescu (Resident Evil Village) - Page 1",
        "cover": "https://telegra.ph/file/e39888224156cff8ac8f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46147",
        "pageSeq": 46147
    },
    {
        "IDcode": 46148,
        "title": "ShiroKitsune - Power (Chainsaw Man) - Page 1",
        "cover": "https://telegra.ph/file/a4a2b5fd56723508301cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46148",
        "pageSeq": 46148
    },
    {
        "IDcode": 46149,
        "title": "ShiroKitsune - Nobara Kugisaki (Jujutsu Kaisen) - Page 1",
        "cover": "https://telegra.ph/file/1e0403d05eff183104828.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46149",
        "pageSeq": 46149
    },
    {
        "IDcode": 46150,
        "title": "Hidori Rose - Kashino - Page 1",
        "cover": "https://telegra.ph/file/85de0cafdbf4a5da0ab22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46150",
        "pageSeq": 46150
    },
    {
        "IDcode": 46151,
        "title": "Hidori Rose - Graf Zeppelin - Page 1",
        "cover": "https://telegra.ph/file/80ea295b0116929ade603.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46151",
        "pageSeq": 46151
    },
    {
        "IDcode": 46152,
        "title": "半半子 - 大凤花嫁 - Page 1",
        "cover": "https://telegra.ph/file/5740700117f348eb95c4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46152",
        "pageSeq": 46152
    },
    {
        "IDcode": 46153,
        "title": "Azami - Rias Gremory - Page 1",
        "cover": "https://telegra.ph/file/836c617408df6447281ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46153",
        "pageSeq": 46153
    },
    {
        "IDcode": 46154,
        "title": "Lada Lyumos - Ankha - Page 1",
        "cover": "https://telegra.ph/file/d46a8d0d06c7c34861593.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46154",
        "pageSeq": 46154
    },
    {
        "IDcode": 46155,
        "title": "半半子 - 柴郡 - Page 1",
        "cover": "https://telegra.ph/file/c6d2128981bb53b34ad70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46155",
        "pageSeq": 46155
    },
    {
        "IDcode": 46156,
        "title": "[my suite (Atsuki)] Suite Kaleid Liner - Page 1",
        "cover": "https://telegra.ph/file/291f4ce4cdb5970d1d4db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46156",
        "pageSeq": 46156
    },
    {
        "IDcode": 46157,
        "title": "[my suite (Atsuki)] Fischl (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/4024b62779e1170522fbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46157",
        "pageSeq": 46157
    },
    {
        "IDcode": 46158,
        "title": "[my suite (Atsuki)] Suite Breathing - Page 1",
        "cover": "https://telegra.ph/file/f054602a599b17fc966b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46158",
        "pageSeq": 46158
    },
    {
        "IDcode": 46159,
        "title": "[nonsummerjack (non)] Black White Gal Chun-li- - Page 1",
        "cover": "https://telegra.ph/file/be6626c751389d19e66c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46159",
        "pageSeq": 46159
    },
    {
        "IDcode": 46160,
        "title": "Hana Bunny - Makima - Page 1",
        "cover": "https://telegra.ph/file/39abaa74339c5b9bede59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46160",
        "pageSeq": 46160
    },
    {
        "IDcode": 46161,
        "title": "Hana Bunny - Iruru - Page 1",
        "cover": "https://telegra.ph/file/8590ed063ffa4e8b7ef6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46161",
        "pageSeq": 46161
    },
    {
        "IDcode": 46162,
        "title": "Watson Amelia - Page 1",
        "cover": "https://telegra.ph/file/795a2231ab2ced96243b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46162",
        "pageSeq": 46162
    },
    {
        "IDcode": 46163,
        "title": "Byoru - Misaki Charm Witch - Page 1",
        "cover": "https://telegra.ph/file/b0247f0689a1dc8a1641c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46163",
        "pageSeq": 46163
    },
    {
        "IDcode": 46164,
        "title": "Hana Bunny - Ankha - Page 1",
        "cover": "https://telegra.ph/file/d675c373ba3c435ac5450.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46164",
        "pageSeq": 46164
    },
    {
        "IDcode": 46165,
        "title": "Hana Bunny - Nico Robin - Page 1",
        "cover": "https://telegra.ph/file/6c625bbec5bf735f7bbcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46165",
        "pageSeq": 46165
    },
    {
        "IDcode": 46166,
        "title": "Hana Bunny - Raiden Shogun - Page 1",
        "cover": "https://telegra.ph/file/0fdd311e79f3b3fc56c10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46166",
        "pageSeq": 46166
    },
    {
        "IDcode": 46167,
        "title": "一北亦北 - NO.12 2b冰雪同人 - Page 1",
        "cover": "https://telegra.ph/file/68a295cd59f8a23b10254.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46167",
        "pageSeq": 46167
    },
    {
        "IDcode": 46168,
        "title": "雷電将軍 - Page 1",
        "cover": "https://telegra.ph/file/0b39755fba75d5c38f1a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46168",
        "pageSeq": 46168
    },
    {
        "IDcode": 46169,
        "title": "Enafox - Makima - Page 1",
        "cover": "https://telegra.ph/file/92d9344d9b1b52ba0f8c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46169",
        "pageSeq": 46169
    },
    {
        "IDcode": 46170,
        "title": "[DJAWA] Shuten Douji Maid - Page 1",
        "cover": "https://telegra.ph/file/54ed22e948f7166ef2cdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46170",
        "pageSeq": 46170
    },
    {
        "IDcode": 46171,
        "title": "[Cosplayer] Niu - Page 1",
        "cover": "https://telegra.ph/file/8771d53aaa6e4a529f350.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46171",
        "pageSeq": 46171
    }
];
