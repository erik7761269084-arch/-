// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 44872,
        "title": "Hidori Rose - Lucy Kushinada",
        "cover": "https://telegra.ph/file/669bd61553a11aca85292.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44872",
        "pageSeq": 44872
    },
    {
        "IDcode": 44873,
        "title": "小甜猪猪 - 和泉纱雾",
        "cover": "https://telegra.ph/file/67a62c7e17357e6cd3640.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44873",
        "pageSeq": 44873
    },
    {
        "IDcode": 44874,
        "title": "小甜猪猪 - 春日野穹",
        "cover": "https://telegra.ph/file/67119ce8b5f763905da6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44874",
        "pageSeq": 44874
    },
    {
        "IDcode": 44875,
        "title": "2426384",
        "cover": "https://telegra.ph/file/9f49c39c8c37b7b4816a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44875",
        "pageSeq": 44875
    },
    {
        "IDcode": 44876,
        "title": "「花铃」 – 玛修婚纱(63P/530MB)",
        "cover": "https://telegra.ph/file/b04f5d44e710e3f06f990.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44876",
        "pageSeq": 44876
    },
    {
        "IDcode": 44877,
        "title": "Meenfox - Makima",
        "cover": "https://telegra.ph/file/eb6f3dbc71ae00cb81bd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44877",
        "pageSeq": 44877
    },
    {
        "IDcode": 44878,
        "title": "[一条はな] 星街すいせい収集",
        "cover": "https://telegra.ph/file/13c40583ca2bbb417bda5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44878",
        "pageSeq": 44878
    },
    {
        "IDcode": 44879,
        "title": "2451720",
        "cover": "https://telegra.ph/file/1916ebc5f9f47ee915f00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44879",
        "pageSeq": 44879
    },
    {
        "IDcode": 44880,
        "title": "爆机少女喵小吉 - Eva：人类补奸计划 明日香",
        "cover": "https://telegra.ph/file/ad3ae0bdc40383f939ef7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44880",
        "pageSeq": 44880
    },
    {
        "IDcode": 44881,
        "title": "[七七娜娜子] 金莲 Jin Lian",
        "cover": "https://telegra.ph/file/dbcaacc0522b5f2e77d6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44881",
        "pageSeq": 44881
    },
    {
        "IDcode": 44882,
        "title": "起司块wii – 柴郡礼服",
        "cover": "https://telegra.ph/file/9cc90093a67f3935f79d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44882",
        "pageSeq": 44882
    },
    {
        "IDcode": 44883,
        "title": "2454514",
        "cover": "https://telegra.ph/file/56982936dc1ab05f180eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44883",
        "pageSeq": 44883
    },
    {
        "IDcode": 44884,
        "title": "[弥美] カリン🐰🖤",
        "cover": "https://telegra.ph/file/67e805594c76208c9bf4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44884",
        "pageSeq": 44884
    },
    {
        "IDcode": 44885,
        "title": "Mayumin - D.Va",
        "cover": "https://telegra.ph/file/1902a7593472a4fa5bf22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44885",
        "pageSeq": 44885
    },
    {
        "IDcode": 44886,
        "title": "Minichu - Miss Hina",
        "cover": "https://telegra.ph/file/99a4f2e9c5c442c75100b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44886",
        "pageSeq": 44886
    },
    {
        "IDcode": 44887,
        "title": "Meenfox - Volume",
        "cover": "https://telegra.ph/file/d12efb4403442a52445ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44887",
        "pageSeq": 44887
    },
    {
        "IDcode": 44888,
        "title": "2479981",
        "cover": "https://telegra.ph/file/ebadaa84a95e46d845e5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44888",
        "pageSeq": 44888
    },
    {
        "IDcode": 44889,
        "title": "2483409",
        "cover": "https://telegra.ph/file/403f3a6d1fb907058d310.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44889",
        "pageSeq": 44889
    },
    {
        "IDcode": 44890,
        "title": "2484855",
        "cover": "https://telegra.ph/file/7bb13d33aeb8b09c51641.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44890",
        "pageSeq": 44890
    },
    {
        "IDcode": 44891,
        "title": "2485447",
        "cover": "https://telegra.ph/file/10c37a16ff185eb523ef1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44891",
        "pageSeq": 44891
    },
    {
        "IDcode": 44892,
        "title": "2485585",
        "cover": "https://telegra.ph/file/b12ad7f6ae7138bb123f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44892",
        "pageSeq": 44892
    },
    {
        "IDcode": 44893,
        "title": "2485641",
        "cover": "https://telegra.ph/file/e25695c092dee6f190e0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44893",
        "pageSeq": 44893
    },
    {
        "IDcode": 44894,
        "title": "2488026",
        "cover": "https://telegra.ph/file/9264fb492b071a9104a2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44894",
        "pageSeq": 44894
    },
    {
        "IDcode": 44895,
        "title": "2506652",
        "cover": "https://telegra.ph/file/77e135090323523dbe5ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44895",
        "pageSeq": 44895
    },
    {
        "IDcode": 44896,
        "title": "Ino - Yumeko",
        "cover": "https://telegra.ph/file/a1e38b0d9e540ddf49a3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44896",
        "pageSeq": 44896
    },
    {
        "IDcode": 44897,
        "title": "Sayo Momo - Chainsaw Man Cheongsam Reze",
        "cover": "https://telegra.ph/file/8abf1645cb6220dac1d32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44897",
        "pageSeq": 44897
    },
    {
        "IDcode": 44898,
        "title": "Neppu ネップ - Karin Bunny",
        "cover": "https://telegra.ph/file/a964be40d492b6e76af6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44898",
        "pageSeq": 44898
    },
    {
        "IDcode": 44899,
        "title": "[DJAWA] Bambi - God Mother Heket",
        "cover": "https://telegra.ph/file/3f2fe14008ef135d52045.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44899",
        "pageSeq": 44899
    },
    {
        "IDcode": 44900,
        "title": "Donnaloli - Tifa",
        "cover": "https://telegra.ph/file/b243ed92d3d5310e047f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44900",
        "pageSeq": 44900
    },
    {
        "IDcode": 44901,
        "title": "Tamamo no Mae From FGO Bikini Ver.",
        "cover": "https://telegra.ph/file/60f444c5585ab23dbcad2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44901",
        "pageSeq": 44901
    },
    {
        "IDcode": 44902,
        "title": "2507913",
        "cover": "https://telegra.ph/file/6fcdc79c27edb812f7f4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44902",
        "pageSeq": 44902
    },
    {
        "IDcode": 44903,
        "title": "2509922",
        "cover": "https://telegra.ph/file/feb410829816a177da31e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44903",
        "pageSeq": 44903
    },
    {
        "IDcode": 44904,
        "title": "2512188",
        "cover": "https://telegra.ph/file/4ecd20b7c5655893c41c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44904",
        "pageSeq": 44904
    },
    {
        "IDcode": 44905,
        "title": "2512195",
        "cover": "https://telegra.ph/file/6c1990b4eb8ee72b97b95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44905",
        "pageSeq": 44905
    },
    {
        "IDcode": 44906,
        "title": "2545005",
        "cover": "https://telegra.ph/file/97a1c8f6f9a5f7e005184.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44906",
        "pageSeq": 44906
    },
    {
        "IDcode": 44907,
        "title": "2545539",
        "cover": "https://telegra.ph/file/9f88a21f2bf597d43ded5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44907",
        "pageSeq": 44907
    },
    {
        "IDcode": 44908,
        "title": "2548499",
        "cover": "https://telegra.ph/file/a7ef53f60825867580c91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44908",
        "pageSeq": 44908
    },
    {
        "IDcode": 44909,
        "title": "2548590",
        "cover": "https://telegra.ph/file/70f80daa5b4868faecefd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44909",
        "pageSeq": 44909
    },
    {
        "IDcode": 44910,
        "title": "2548926",
        "cover": "https://telegra.ph/file/ff34967c6531e06fd59b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44910",
        "pageSeq": 44910
    },
    {
        "IDcode": 44911,
        "title": "2550216",
        "cover": "https://telegra.ph/file/c8aaf4a24e7ee96f23aba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44911",
        "pageSeq": 44911
    },
    {
        "IDcode": 44912,
        "title": "Byoru - Rizu-kyun",
        "cover": "https://telegra.ph/file/3435eea3102031bfff645.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44912",
        "pageSeq": 44912
    },
    {
        "IDcode": 44913,
        "title": "Byoru - Futaba Sakura",
        "cover": "https://telegra.ph/file/e18ec24da30f7f44bfe92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44913",
        "pageSeq": 44913
    },
    {
        "IDcode": 44914,
        "title": "桃谷若姬子 - 胡桃",
        "cover": "https://telegra.ph/file/4f191d612e913683d21db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44914",
        "pageSeq": 44914
    },
    {
        "IDcode": 44915,
        "title": "Byoru - Makima Succubus",
        "cover": "https://telegra.ph/file/266d2380f87034f0097e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44915",
        "pageSeq": 44915
    },
    {
        "IDcode": 44916,
        "title": "Power Xmas",
        "cover": "https://telegra.ph/file/0fddd8e8439e79a4162fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44916",
        "pageSeq": 44916
    },
    {
        "IDcode": 44917,
        "title": "花铃 - 下江小春",
        "cover": "https://telegra.ph/file/9f41d35f31418d2074dbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44917",
        "pageSeq": 44917
    },
    {
        "IDcode": 44918,
        "title": "Alina Becker - Mikasa Ackerman",
        "cover": "https://telegra.ph/file/9c84646d5394895e0f619.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44918",
        "pageSeq": 44918
    },
    {
        "IDcode": 44919,
        "title": "YaoYaoQwQ - Asuna",
        "cover": "https://telegra.ph/file/4c8eee962c37c737bce69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44919",
        "pageSeq": 44919
    },
    {
        "IDcode": 44920,
        "title": "封疆疆v - 恶毒",
        "cover": "https://telegra.ph/file/a0b6be2423b020f84092d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44920",
        "pageSeq": 44920
    },
    {
        "IDcode": 44921,
        "title": "Ino - Makima Bikini",
        "cover": "https://telegra.ph/file/c72848a75296bc0e2d2b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44921",
        "pageSeq": 44921
    },
    {
        "IDcode": 44922,
        "title": "Elizamiaomiao - Raiden maid",
        "cover": "https://telegra.ph/file/a9942e61d74b927739fcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44922",
        "pageSeq": 44922
    },
    {
        "IDcode": 44923,
        "title": "wendydydydy_酱油 恶毒 - 懒懒的白兔",
        "cover": "https://telegra.ph/file/da911047bed7d6d53b83c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44923",
        "pageSeq": 44923
    },
    {
        "IDcode": 44924,
        "title": "[Comonun]ジャンヌ洗脳",
        "cover": "https://telegra.ph/file/bb438025da4a95f23a619.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44924",
        "pageSeq": 44924
    },
    {
        "IDcode": 44925,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 歴代No.1長舌タレント級美貌の極上ＳＳ級プロコスプレイヤー 日向⊿かとし似 新太陽系最強ののかもも ノノ#03 原ネ/申 甘雨[H]/02",
        "cover": "https://telegra.ph/file/4a6e9a295567b3a3e631c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44925",
        "pageSeq": 44925
    },
    {
        "IDcode": 44926,
        "title": "花铃 - 大凤jk放学后风纪委员",
        "cover": "https://telegra.ph/file/836ca57919f3d29c7a41b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44926",
        "pageSeq": 44926
    },
    {
        "IDcode": 44927,
        "title": "Byoru - Jeanne D'Arc",
        "cover": "https://telegra.ph/file/98be58dcf30a6c18c7366.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44927",
        "pageSeq": 44927
    },
    {
        "IDcode": 44928,
        "title": "章鱼娘 - 原神 神里綾華 JK",
        "cover": "https://telegra.ph/file/a709ec6618b9f3c984a04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44928",
        "pageSeq": 44928
    },
    {
        "IDcode": 44929,
        "title": "Fantasy Factory - Miss Hina",
        "cover": "https://telegra.ph/file/1bf7bb13691d9b4b15129.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44929",
        "pageSeq": 44929
    },
    {
        "IDcode": 44930,
        "title": "Byoru - Wednesday",
        "cover": "https://telegra.ph/file/318c66e4e5a312db3339a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44930",
        "pageSeq": 44930
    },
    {
        "IDcode": 44931,
        "title": "小容仔咕咕咕w - カグヤ",
        "cover": "https://telegra.ph/file/013d8bfbc41378b04bf70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44931",
        "pageSeq": 44931
    },
    {
        "IDcode": 44932,
        "title": "Vandych - Izayoi Sakuya",
        "cover": "https://telegra.ph/file/5d2a9bab46e1d29111ee4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44932",
        "pageSeq": 44932
    },
    {
        "IDcode": 44933,
        "title": "Hime Tsu - Marin",
        "cover": "https://telegra.ph/file/d0d6e8eaac2e91b633e78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44933",
        "pageSeq": 44933
    },
    {
        "IDcode": 44934,
        "title": "Vinnegal - Robin",
        "cover": "https://telegra.ph/file/f8eda90ed30dfc059445d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44934",
        "pageSeq": 44934
    },
    {
        "IDcode": 44935,
        "title": "Ahriuwu - Marin",
        "cover": "https://telegra.ph/file/9530a47eeccd09d697979.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44935",
        "pageSeq": 44935
    },
    {
        "IDcode": 44936,
        "title": "水淼aqua -镇海",
        "cover": "https://telegra.ph/file/512be70100cbf2ad1d477.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44936",
        "pageSeq": 44936
    },
    {
        "IDcode": 44937,
        "title": "黏黏团子兔 - 白丝胡桃",
        "cover": "https://telegra.ph/file/afa12e4e27b09cb00021c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44937",
        "pageSeq": 44937
    },
    {
        "IDcode": 44938,
        "title": "黏黏团子兔 - 长发蕾姆",
        "cover": "https://telegra.ph/file/d7ae210ffbc2dade3120d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44938",
        "pageSeq": 44938
    },
    {
        "IDcode": 44939,
        "title": "Hime Tsu - Yor",
        "cover": "https://telegra.ph/file/f0e3f0bacefd802c41ca1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44939",
        "pageSeq": 44939
    },
    {
        "IDcode": 44940,
        "title": "Vinnegal - Power",
        "cover": "https://telegra.ph/file/a80a759dffa39b4461894.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44940",
        "pageSeq": 44940
    },
    {
        "IDcode": 44941,
        "title": "Whimpercat - 纳西妲",
        "cover": "https://telegra.ph/file/3ef3064d9ade13424668a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44941",
        "pageSeq": 44941
    },
    {
        "IDcode": 44942,
        "title": "Vinnegal - Shouko Komi",
        "cover": "https://telegra.ph/file/ebc4ae8dad4a31c34c0a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44942",
        "pageSeq": 44942
    },
    {
        "IDcode": 44943,
        "title": "九言 - 路易九世",
        "cover": "https://telegra.ph/file/27f9ffac3e10d9c694053.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44943",
        "pageSeq": 44943
    },
    {
        "IDcode": 44944,
        "title": "Meenfox - Baltimore",
        "cover": "https://telegra.ph/file/0b61a2225ea3e24d03150.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44944",
        "pageSeq": 44944
    },
    {
        "IDcode": 44945,
        "title": "Hime Tsu - 2B",
        "cover": "https://telegra.ph/file/22c146d563a7cdefb69be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44945",
        "pageSeq": 44945
    },
    {
        "IDcode": 44946,
        "title": "2324895",
        "cover": "https://telegra.ph/file/8a0c48622ac0d6c136af6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44946",
        "pageSeq": 44946
    },
    {
        "IDcode": 44947,
        "title": "2324895",
        "cover": "https://telegra.ph/file/706ab1e23807f770df276.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44947",
        "pageSeq": 44947
    },
    {
        "IDcode": 44948,
        "title": "Maria Desu - Yor",
        "cover": "https://telegra.ph/file/bfc23d32a6d897361148f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44948",
        "pageSeq": 44948
    },
    {
        "IDcode": 44949,
        "title": "Yamisung - Rosaria",
        "cover": "https://telegra.ph/file/fad83e2f78fc1832f57f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44949",
        "pageSeq": 44949
    },
    {
        "IDcode": 44950,
        "title": "Meenfox - Eula",
        "cover": "https://telegra.ph/file/2b9684b959f11fb61bb4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44950",
        "pageSeq": 44950
    },
    {
        "IDcode": 44951,
        "title": "茶酒 - 圣诞纱雾",
        "cover": "https://telegra.ph/file/365c277e6fdd887ebfcca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44951",
        "pageSeq": 44951
    },
    {
        "IDcode": 44952,
        "title": "Yoshinobi - Atago maid",
        "cover": "https://telegra.ph/file/38f49a6e5036e74a5d95c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44952",
        "pageSeq": 44952
    },
    {
        "IDcode": 44953,
        "title": "Alina Becker - Elizabeth",
        "cover": "https://telegra.ph/file/d3918a3d30c1ac71248e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44953",
        "pageSeq": 44953
    },
    {
        "IDcode": 44954,
        "title": "Alina Becker - Yor",
        "cover": "https://telegra.ph/file/6d8004bd846d6c26eb0ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44954",
        "pageSeq": 44954
    },
    {
        "IDcode": 44955,
        "title": "宮本桜 花园花嫁",
        "cover": "https://telegra.ph/file/ca5333b85068fa24da5e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44955",
        "pageSeq": 44955
    },
    {
        "IDcode": 44956,
        "title": "[Comonun] 🌈ミク×淫紋=えっち🌈",
        "cover": "https://telegra.ph/file/8466596585ab692067253.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44956",
        "pageSeq": 44956
    },
    {
        "IDcode": 44957,
        "title": "Kojima Tsukumi - Kashima (KANCOLLE)",
        "cover": "https://telegra.ph/file/9ff537b7e84449811e51b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44957",
        "pageSeq": 44957
    },
    {
        "IDcode": 44958,
        "title": "Kojima Tsukumi - Fate/Apocrypha Mordred",
        "cover": "https://telegra.ph/file/0450ac6596187b4db4d37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44958",
        "pageSeq": 44958
    },
    {
        "IDcode": 44959,
        "title": "Saya The Fox - Frost 2B",
        "cover": "https://telegra.ph/file/8d0b61e06812cb5294ba2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44959",
        "pageSeq": 44959
    },
    {
        "IDcode": 44960,
        "title": "Twoyun cosplay / Mashu Kyrielight Dancer",
        "cover": "https://telegra.ph/file/01bdfa24c2c6b3ca1fe38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44960",
        "pageSeq": 44960
    },
    {
        "IDcode": 44961,
        "title": "桃谷若姬子 - 天狼星",
        "cover": "https://telegra.ph/file/15f4a2ced8afd05aaa8f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44961",
        "pageSeq": 44961
    },
    {
        "IDcode": 44962,
        "title": "[林檎蜜紀] 夏の新作、原神の雷電将軍 (with mov)",
        "cover": "https://telegra.ph/file/dc967fca6e202e13ae9e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44962",
        "pageSeq": 44962
    },
    {
        "IDcode": 44963,
        "title": "Astasiadream - Emilia",
        "cover": "https://telegra.ph/file/8a7f0a2a349ff3af1e782.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44963",
        "pageSeq": 44963
    },
    {
        "IDcode": 44964,
        "title": "Ino - Cheshire",
        "cover": "https://telegra.ph/file/5ebf08130f78bb1b96326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44964",
        "pageSeq": 44964
    },
    {
        "IDcode": 44965,
        "title": "[わんこちゃん]【S AOシ◯ン】いやいやおま◯こ見せつけ💙",
        "cover": "https://telegra.ph/file/6aef025115fca00e6a956.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44965",
        "pageSeq": 44965
    },
    {
        "IDcode": 44966,
        "title": "PingPing - Agir (Azurlane)",
        "cover": "https://telegra.ph/file/57a4c819797d94ed0f298.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44966",
        "pageSeq": 44966
    },
    {
        "IDcode": 44967,
        "title": "2330718",
        "cover": "https://telegra.ph/file/41fa0042857810e5210d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44967",
        "pageSeq": 44967
    },
    {
        "IDcode": 44968,
        "title": "2331025",
        "cover": "https://telegra.ph/file/b59c225b3c28268cbe927.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44968",
        "pageSeq": 44968
    },
    {
        "IDcode": 44969,
        "title": "2332105",
        "cover": "https://telegra.ph/file/9c53d959f4f6468adae50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44969",
        "pageSeq": 44969
    },
    {
        "IDcode": 44970,
        "title": "2345603",
        "cover": "https://telegra.ph/file/38fcd5e194119eef899e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44970",
        "pageSeq": 44970
    },
    {
        "IDcode": 44971,
        "title": "2346110",
        "cover": "https://telegra.ph/file/c8c4e29dbefcd8a0e31c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44971",
        "pageSeq": 44971
    }
];
