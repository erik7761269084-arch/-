// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 44772,
        "title": "Minichu - Freia",
        "cover": "https://telegra.ph/file/5cc3fdf141d29807ab133.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44772",
        "pageSeq": 44772
    },
    {
        "IDcode": 44773,
        "title": "AT鲨 - gawr gura",
        "cover": "https://telegra.ph/file/e1c21b3ade463772665f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44773",
        "pageSeq": 44773
    },
    {
        "IDcode": 44774,
        "title": "Nyako喵子 - 樫野本 - 奶牛比基尼+牛牛赌场女郎",
        "cover": "https://telegra.ph/file/f27bd71a4395e0587ea50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44774",
        "pageSeq": 44774
    },
    {
        "IDcode": 44775,
        "title": "Hinata Hyuga - Tenleid （134P）",
        "cover": "https://telegra.ph/file/270015ff051bea75e0bc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44775",
        "pageSeq": 44775
    },
    {
        "IDcode": 44776,
        "title": "Joyce - Kokomi",
        "cover": "https://telegra.ph/file/2e8a124b71f15cab2ca23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44776",
        "pageSeq": 44776
    },
    {
        "IDcode": 44777,
        "title": "[Lisa様] Lucy",
        "cover": "https://telegra.ph/file/59fd525fd2c0e6120f972.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44777",
        "pageSeq": 44777
    },
    {
        "IDcode": 44778,
        "title": "[lMusicl]Blue Archive Kisaki",
        "cover": "https://telegra.ph/file/ef4d38f2af439787de7ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44778",
        "pageSeq": 44778
    },
    {
        "IDcode": 44779,
        "title": "Donna Loli - Seraphine",
        "cover": "https://telegra.ph/file/fb289ad5f450e34f7b370.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44779",
        "pageSeq": 44779
    },
    {
        "IDcode": 44780,
        "title": "猫と爪呸罗呸罗-乾纱寿叶（猫爪呸罗呸罗）",
        "cover": "https://telegra.ph/file/a5071c37bab8b0ceddb2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44780",
        "pageSeq": 44780
    },
    {
        "IDcode": 44781,
        "title": "雪晴Astra - 八重神子",
        "cover": "https://telegra.ph/file/94a4e2312702e55bb1e9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44781",
        "pageSeq": 44781
    },
    {
        "IDcode": 44782,
        "title": "七七娜娜子 赖光僵尸娘",
        "cover": "https://telegra.ph/file/61056f5c47ee916b60354.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44782",
        "pageSeq": 44782
    },
    {
        "IDcode": 44783,
        "title": "Ｃ101 新刊 黒獣オリガ写真集",
        "cover": "https://telegra.ph/file/7964765662be538e297fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44783",
        "pageSeq": 44783
    },
    {
        "IDcode": 44784,
        "title": "Dreamtamu - Bride Vermeil",
        "cover": "https://telegra.ph/file/e0a19900eafe57f693fe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44784",
        "pageSeq": 44784
    },
    {
        "IDcode": 44785,
        "title": "洛璃LoLiSAMA-雷电将军OL",
        "cover": "https://telegra.ph/file/cb9ad918742060b2853dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44785",
        "pageSeq": 44785
    },
    {
        "IDcode": 44786,
        "title": "Neppu - Nazuna",
        "cover": "https://telegra.ph/file/d744174b3d21e9554451f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44786",
        "pageSeq": 44786
    },
    {
        "IDcode": 44787,
        "title": "Kaya Huang - Sesshouin Kiara",
        "cover": "https://telegra.ph/file/f20428084ccfd431e6480.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44787",
        "pageSeq": 44787
    },
    {
        "IDcode": 44788,
        "title": "Ain Nguyen - Yelan",
        "cover": "https://telegra.ph/file/2bbfaa58dc2a2e3810554.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44788",
        "pageSeq": 44788
    },
    {
        "IDcode": 44789,
        "title": "Byoru - Quiet",
        "cover": "https://telegra.ph/file/a284aa2a7e61fa4a6537d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44789",
        "pageSeq": 44789
    },
    {
        "IDcode": 44790,
        "title": "Choi Ji Yun - Makima lingerie",
        "cover": "https://telegra.ph/file/992ed5845144276c36f1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44790",
        "pageSeq": 44790
    },
    {
        "IDcode": 44791,
        "title": "2318033",
        "cover": "https://telegra.ph/file/cdf3141ca0ea4d4784d06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44791",
        "pageSeq": 44791
    },
    {
        "IDcode": 44792,
        "title": "Bishoujomom - Aphrodite",
        "cover": "https://telegra.ph/file/32ec647c90598cc723a08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44792",
        "pageSeq": 44792
    },
    {
        "IDcode": 44793,
        "title": "2324242",
        "cover": "https://telegra.ph/file/a3cd1e99d6899f8027dc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44793",
        "pageSeq": 44793
    },
    {
        "IDcode": 44794,
        "title": "2325539",
        "cover": "https://telegra.ph/file/1b4ec7e2a6b27f840bebd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44794",
        "pageSeq": 44794
    },
    {
        "IDcode": 44795,
        "title": "2326987",
        "cover": "https://telegra.ph/file/59bb3672d1fcd6d85bc37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44795",
        "pageSeq": 44795
    },
    {
        "IDcode": 44796,
        "title": "Twoyun cosplay / NIKKE Alice & Yuni",
        "cover": "https://telegra.ph/file/50fb67327ca0b432332d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44796",
        "pageSeq": 44796
    },
    {
        "IDcode": 44797,
        "title": "2332586",
        "cover": "https://telegra.ph/file/8bc38a021a74342f5a164.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44797",
        "pageSeq": 44797
    },
    {
        "IDcode": 44798,
        "title": "2335663",
        "cover": "https://telegra.ph/file/2785da56488cf7a01fb7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44798",
        "pageSeq": 44798
    },
    {
        "IDcode": 44799,
        "title": "ZinieQ - Alice",
        "cover": "https://telegra.ph/file/07c24747e628f2d233b70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44799",
        "pageSeq": 44799
    },
    {
        "IDcode": 44800,
        "title": "2336981",
        "cover": "https://telegra.ph/file/4673981de2738dd8df3a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44800",
        "pageSeq": 44800
    },
    {
        "IDcode": 44801,
        "title": "2341956",
        "cover": "https://telegra.ph/file/87a5c7599872d2df3fbbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44801",
        "pageSeq": 44801
    },
    {
        "IDcode": 44802,
        "title": "2345336",
        "cover": "https://telegra.ph/file/f6e6e9ac4c653c5d41da8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44802",
        "pageSeq": 44802
    },
    {
        "IDcode": 44803,
        "title": "Umeko J - Mai Shiranui",
        "cover": "https://telegra.ph/file/02f402e095dc9348a1af9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44803",
        "pageSeq": 44803
    },
    {
        "IDcode": 44804,
        "title": "2345534",
        "cover": "https://telegra.ph/file/6e82aa7514b347bffae63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44804",
        "pageSeq": 44804
    },
    {
        "IDcode": 44805,
        "title": "Umeko J Yor Forger",
        "cover": "https://telegra.ph/file/0e8d85f7daac0cf20bc8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44805",
        "pageSeq": 44805
    },
    {
        "IDcode": 44806,
        "title": "2347262",
        "cover": "https://telegra.ph/file/c3e42d1d4a3ac6adc361a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44806",
        "pageSeq": 44806
    },
    {
        "IDcode": 44807,
        "title": "Umeko J - Zelda",
        "cover": "https://telegra.ph/file/7f9eabded3a51ea7de59d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44807",
        "pageSeq": 44807
    },
    {
        "IDcode": 44808,
        "title": "2349836",
        "cover": "https://telegra.ph/file/f882fe4647462cc14c594.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44808",
        "pageSeq": 44808
    },
    {
        "IDcode": 44809,
        "title": "2351733",
        "cover": "https://telegra.ph/file/acfcce9970700a1fcf3a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44809",
        "pageSeq": 44809
    },
    {
        "IDcode": 44810,
        "title": "2354617",
        "cover": "https://telegra.ph/file/44cba30e45ece1c8abbad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44810",
        "pageSeq": 44810
    },
    {
        "IDcode": 44811,
        "title": "2366597",
        "cover": "https://telegra.ph/file/260e0c3433d8513987430.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44811",
        "pageSeq": 44811
    },
    {
        "IDcode": 44812,
        "title": "2367695",
        "cover": "https://telegra.ph/file/b3ff62b9575eb6eacc10e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44812",
        "pageSeq": 44812
    },
    {
        "IDcode": 44813,
        "title": "[小倉ちよ]サン・ルイ 華麗なる聖騎士",
        "cover": "https://telegra.ph/file/b2b49703a248966c15bf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44813",
        "pageSeq": 44813
    },
    {
        "IDcode": 44814,
        "title": "Katyuska Moonfox - BB",
        "cover": "https://telegra.ph/file/cace8e149e8c24cbbbaa0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44814",
        "pageSeq": 44814
    },
    {
        "IDcode": 44815,
        "title": "2328055",
        "cover": "https://telegra.ph/file/f39637b6f444e29d78491.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44815",
        "pageSeq": 44815
    },
    {
        "IDcode": 44816,
        "title": "2330315",
        "cover": "https://telegra.ph/file/b4015cb6a73c95adb16cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44816",
        "pageSeq": 44816
    },
    {
        "IDcode": 44817,
        "title": "2338237",
        "cover": "https://telegra.ph/file/ed02615567cbea236ed69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44817",
        "pageSeq": 44817
    },
    {
        "IDcode": 44818,
        "title": "2338396",
        "cover": "https://telegra.ph/file/634879df214aacf0963f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44818",
        "pageSeq": 44818
    },
    {
        "IDcode": 44819,
        "title": "2339763",
        "cover": "https://telegra.ph/file/8327d6f6b349f0ed02cb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44819",
        "pageSeq": 44819
    },
    {
        "IDcode": 44820,
        "title": "2339776",
        "cover": "https://telegra.ph/file/521b74c8b03f30017c8fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44820",
        "pageSeq": 44820
    },
    {
        "IDcode": 44821,
        "title": "2344109",
        "cover": "https://telegra.ph/file/0f0af6aaaa0ad37ccf1a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44821",
        "pageSeq": 44821
    },
    {
        "IDcode": 44822,
        "title": "2346070",
        "cover": "https://telegra.ph/file/58617cf4e491f151032f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44822",
        "pageSeq": 44822
    },
    {
        "IDcode": 44823,
        "title": "2346167",
        "cover": "https://telegra.ph/file/8417e307d7fa4052808f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44823",
        "pageSeq": 44823
    },
    {
        "IDcode": 44824,
        "title": "2347474",
        "cover": "https://telegra.ph/file/c318dadb7a28e06ec7bdd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44824",
        "pageSeq": 44824
    },
    {
        "IDcode": 44825,
        "title": "2352975",
        "cover": "https://telegra.ph/file/1413c224d9b57cde581ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44825",
        "pageSeq": 44825
    },
    {
        "IDcode": 44826,
        "title": "Meikoui - Albedo",
        "cover": "https://telegra.ph/file/652c34d97c59b7d6783fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44826",
        "pageSeq": 44826
    },
    {
        "IDcode": 44827,
        "title": "2355079",
        "cover": "https://telegra.ph/file/bbb777ca4eedd5d601042.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44827",
        "pageSeq": 44827
    },
    {
        "IDcode": 44828,
        "title": "Hime Tsu - 2B",
        "cover": "https://telegra.ph/file/bd917a1f3e002492ec559.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44828",
        "pageSeq": 44828
    },
    {
        "IDcode": 44829,
        "title": "2371795",
        "cover": "https://telegra.ph/file/c2b4a96f430c5bf237833.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44829",
        "pageSeq": 44829
    },
    {
        "IDcode": 44830,
        "title": "2378782",
        "cover": "https://telegra.ph/file/21c3147f1b38287ae81a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44830",
        "pageSeq": 44830
    },
    {
        "IDcode": 44831,
        "title": "2B - Zzyuri - Djawaphoto",
        "cover": "https://telegra.ph/file/2654e0f373586ba6dc280.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44831",
        "pageSeq": 44831
    },
    {
        "IDcode": 44832,
        "title": "2384083",
        "cover": "https://telegra.ph/file/f9fb846cfabcdbf99b582.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44832",
        "pageSeq": 44832
    },
    {
        "IDcode": 44833,
        "title": "Bambi - HomeWork",
        "cover": "https://telegra.ph/file/703343a9662b851ff58fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44833",
        "pageSeq": 44833
    },
    {
        "IDcode": 44834,
        "title": "Yamisung - Miku",
        "cover": "https://telegra.ph/file/f009dd12ca93bf41234ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44834",
        "pageSeq": 44834
    },
    {
        "IDcode": 44835,
        "title": "2385297",
        "cover": "https://telegra.ph/file/bd5feb52dd3d66ea7cd29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44835",
        "pageSeq": 44835
    },
    {
        "IDcode": 44836,
        "title": "Nyako喵子 - DOAほのか",
        "cover": "https://telegra.ph/file/452d5959d902cd4cc68ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44836",
        "pageSeq": 44836
    },
    {
        "IDcode": 44837,
        "title": "Aery Tiefling - Froppy",
        "cover": "https://telegra.ph/file/e7639fe766fe25a401384.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44837",
        "pageSeq": 44837
    },
    {
        "IDcode": 44838,
        "title": "[Cosplayer] YangYi 202209-12",
        "cover": "https://telegra.ph/file/74e7d4678696cd4f11423.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44838",
        "pageSeq": 44838
    },
    {
        "IDcode": 44839,
        "title": "2385944",
        "cover": "https://telegra.ph/file/f05bfaf176da886d143ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44839",
        "pageSeq": 44839
    },
    {
        "IDcode": 44840,
        "title": "猫と爪呸罗呸罗-霞澤美游 （猫爪呸罗呸罗）",
        "cover": "https://telegra.ph/file/fd8edc8ca94b4d655fb59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44840",
        "pageSeq": 44840
    },
    {
        "IDcode": 44841,
        "title": "AT鲨 - Rem",
        "cover": "https://telegra.ph/file/5286521220038bb907892.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44841",
        "pageSeq": 44841
    },
    {
        "IDcode": 44842,
        "title": "2395479",
        "cover": "https://telegra.ph/file/6d759d2bf19fbe74aae5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44842",
        "pageSeq": 44842
    },
    {
        "IDcode": 44843,
        "title": "なぎさ - 英梨々 (冴えない彼女の育てかた)",
        "cover": "https://telegra.ph/file/6eeec28cb0eddc8144da7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44843",
        "pageSeq": 44843
    },
    {
        "IDcode": 44844,
        "title": "Yamisung - Eula",
        "cover": "https://telegra.ph/file/96cdfc08d7f2a87099465.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44844",
        "pageSeq": 44844
    },
    {
        "IDcode": 44845,
        "title": "2398340",
        "cover": "https://telegra.ph/file/acdb5e3d29c48917fdae9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44845",
        "pageSeq": 44845
    },
    {
        "IDcode": 44846,
        "title": "Gremlynne - Raven",
        "cover": "https://telegra.ph/file/727ec75f2bd7f1dea76a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44846",
        "pageSeq": 44846
    },
    {
        "IDcode": 44847,
        "title": "Evenink - Marin",
        "cover": "https://telegra.ph/file/35d89dc4e5d0adba92b0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44847",
        "pageSeq": 44847
    },
    {
        "IDcode": 44848,
        "title": "2405751",
        "cover": "https://telegra.ph/file/f5adb47f84ea6c411549a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44848",
        "pageSeq": 44848
    },
    {
        "IDcode": 44849,
        "title": "PingPing - Taihou",
        "cover": "https://telegra.ph/file/f15dfce9c8e5714fe6c04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44849",
        "pageSeq": 44849
    },
    {
        "IDcode": 44850,
        "title": "PingPing - Star Guardian Kai'Sa",
        "cover": "https://telegra.ph/file/fd4ef2e5bbb6f28c4fb2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44850",
        "pageSeq": 44850
    },
    {
        "IDcode": 44851,
        "title": "2417718",
        "cover": "https://telegra.ph/file/ae021ad573b3accdd29d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44851",
        "pageSeq": 44851
    },
    {
        "IDcode": 44852,
        "title": "Kaya Huang - Nero Claudius",
        "cover": "https://telegra.ph/file/23b5c6fd4e36bdad9576a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44852",
        "pageSeq": 44852
    },
    {
        "IDcode": 44853,
        "title": "Potato Godzilla - Yae Miko",
        "cover": "https://telegra.ph/file/f4e509129ee8363dc1c58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44853",
        "pageSeq": 44853
    },
    {
        "IDcode": 44854,
        "title": "水淼aqua - 夜阑",
        "cover": "https://telegra.ph/file/b1f09acf758abb350b392.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44854",
        "pageSeq": 44854
    },
    {
        "IDcode": 44855,
        "title": "2419897",
        "cover": "https://telegra.ph/file/003911a48414ad0cf98a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44855",
        "pageSeq": 44855
    },
    {
        "IDcode": 44856,
        "title": "Neppu ネップ - Alice Nikke",
        "cover": "https://telegra.ph/file/833c39302ef746000a832.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44856",
        "pageSeq": 44856
    },
    {
        "IDcode": 44857,
        "title": "[习呆呆] 井上泷奈 (Lycoris Recoil)",
        "cover": "https://telegra.ph/file/6b1f29e80ccb67955735c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44857",
        "pageSeq": 44857
    },
    {
        "IDcode": 44858,
        "title": "轩萧学姐 - 円香ol+竞泳",
        "cover": "https://telegra.ph/file/63a394e07ca414dbca6d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44858",
        "pageSeq": 44858
    },
    {
        "IDcode": 44859,
        "title": "Byoru - Choco Yuzuki",
        "cover": "https://telegra.ph/file/ee07c9c6f7925b58d8fe0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44859",
        "pageSeq": 44859
    },
    {
        "IDcode": 44860,
        "title": "2421649",
        "cover": "https://telegra.ph/file/7fffa0654fa403e21f7f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44860",
        "pageSeq": 44860
    },
    {
        "IDcode": 44861,
        "title": "Arty Huang - Yor",
        "cover": "https://telegra.ph/file/536783e2671f1df69dbf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44861",
        "pageSeq": 44861
    },
    {
        "IDcode": 44862,
        "title": "Arty Huang - Bocchi",
        "cover": "https://telegra.ph/file/6e1a7376001eec78dcee0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44862",
        "pageSeq": 44862
    },
    {
        "IDcode": 44863,
        "title": "Lumine Bunny tier 6 Joycelin2x",
        "cover": "https://telegra.ph/file/730d874110b0260e01a9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44863",
        "pageSeq": 44863
    },
    {
        "IDcode": 44864,
        "title": "2421660",
        "cover": "https://telegra.ph/file/d17a76eb8f55cd038e6b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44864",
        "pageSeq": 44864
    },
    {
        "IDcode": 44865,
        "title": "Mikomin - Nahida Selfies",
        "cover": "https://telegra.ph/file/75827dcdadb1fa665710f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44865",
        "pageSeq": 44865
    },
    {
        "IDcode": 44866,
        "title": "Izumi Sagiri",
        "cover": "https://telegra.ph/file/f718d5e3f8a9d1f1ef262.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44866",
        "pageSeq": 44866
    },
    {
        "IDcode": 44867,
        "title": "Krul Tepes",
        "cover": "https://telegra.ph/file/7d9b7636bdfaaf3b88887.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44867",
        "pageSeq": 44867
    },
    {
        "IDcode": 44868,
        "title": "HellyValentine - 2B",
        "cover": "https://telegra.ph/file/e61c5d4be52e60fb7cb72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44868",
        "pageSeq": 44868
    },
    {
        "IDcode": 44869,
        "title": "Ame Airi - Inori",
        "cover": "https://telegra.ph/file/5d1bb3461489bdb333140.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44869",
        "pageSeq": 44869
    },
    {
        "IDcode": 44870,
        "title": "2421661",
        "cover": "https://telegra.ph/file/c7f16dbeb3c6e2119ecf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44870",
        "pageSeq": 44870
    },
    {
        "IDcode": 44871,
        "title": "Hidori Rose - Wednesday",
        "cover": "https://telegra.ph/file/3eedbbd3ec230990aa16f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=44871",
        "pageSeq": 44871
    }
];
