// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 46872,
        "title": "Money冷冷 cosplay collection - Page 1",
        "cover": "https://telegra.ph/file/0ab1ca2d007b660038f62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46872",
        "pageSeq": 46872
    },
    {
        "IDcode": 46873,
        "title": "Arty Huang - Echidna - Page 1",
        "cover": "https://telegra.ph/file/2b6946e7ba02f00e4e38d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46873",
        "pageSeq": 46873
    },
    {
        "IDcode": 46874,
        "title": "清水由乃 - 愛宕  (婚紗、泳裝Ver、兔女郎) - Page 1",
        "cover": "https://telegra.ph/file/3b7638e3f61b16bd94307.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46874",
        "pageSeq": 46874
    },
    {
        "IDcode": 46875,
        "title": "娜美妖姬 蜘蛛俠 - Page 1",
        "cover": "https://telegra.ph/file/6875f3c49ac7127f4b20c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46875",
        "pageSeq": 46875
    },
    {
        "IDcode": 46876,
        "title": "Hidori Rose - Meteorite cosplay - Page 1",
        "cover": "https://telegra.ph/file/1d05277dba28da0865320.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46876",
        "pageSeq": 46876
    },
    {
        "IDcode": 46877,
        "title": "みさ呆呆 澤村・ス○ンサー・英梨々 - Page 1",
        "cover": "https://telegra.ph/file/c0b21592f855c2c86636f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46877",
        "pageSeq": 46877
    },
    {
        "IDcode": 46878,
        "title": "Firtsbornunicorn - Scathach - Page 1",
        "cover": "https://telegra.ph/file/96e2f8ad322ef9280011a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46878",
        "pageSeq": 46878
    },
    {
        "IDcode": 46879,
        "title": "Firtsbornunicorn - 2B - Page 1",
        "cover": "https://telegra.ph/file/f92f03de534e8cbbb5516.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46879",
        "pageSeq": 46879
    },
    {
        "IDcode": 46880,
        "title": "Firtsbornunicorn - Do-S - Page 1",
        "cover": "https://telegra.ph/file/1608b14cb3aa07d55b288.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46880",
        "pageSeq": 46880
    },
    {
        "IDcode": 46881,
        "title": "[Arty亞緹]Kashino - Page 1",
        "cover": "https://telegra.ph/file/5ec227245fbf77843c242.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46881",
        "pageSeq": 46881
    },
    {
        "IDcode": 46882,
        "title": "Rioko凉凉子 - Tifa Little Bee - Page 1",
        "cover": "https://telegra.ph/file/03b17f811fc8e5c831404.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46882",
        "pageSeq": 46882
    },
    {
        "IDcode": 46883,
        "title": "[Sex Syndrome]ガチ洗脳ちゃん 歴代No.１究極クビレ超絶癒し系ユーチュー〇ーレイヤー １４６cm１８歳ナマ中出し性的強要肉便器 リゼ〇エキドナ[H] - Page 1",
        "cover": "https://telegra.ph/file/3cebf51e1b06062194504.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46883",
        "pageSeq": 46883
    },
    {
        "IDcode": 46884,
        "title": "Azami - Tony Cheongsam - Page 1",
        "cover": "https://telegra.ph/file/c4d0b5db0eaa893fc5bad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46884",
        "pageSeq": 46884
    },
    {
        "IDcode": 46885,
        "title": "[日暮企画 (日暮りん)] もっと先輩のお役に立てるよう頑張ります! vol.1.5 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/b4d00022f54876e57ac6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46885",
        "pageSeq": 46885
    },
    {
        "IDcode": 46886,
        "title": "Hidori Rose - Riamu Yumemi - Page 1",
        "cover": "https://telegra.ph/file/cf891fa82f86e293f3cd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46886",
        "pageSeq": 46886
    },
    {
        "IDcode": 46887,
        "title": "[HERESY(林檎蜜紀)]エッチな指揮官に呼ばれて…♡vol.1シリアスの場合 - Page 1",
        "cover": "https://telegra.ph/file/cb6d35187e4e15da9cbf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46887",
        "pageSeq": 46887
    },
    {
        "IDcode": 46888,
        "title": "Lada Lyumos - Dark & Light YoRHa 2B - Page 1",
        "cover": "https://telegra.ph/file/b35fd175b844a10314ebc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46888",
        "pageSeq": 46888
    },
    {
        "IDcode": 46889,
        "title": "水淼aqua - Sirius (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/fd17ef0522a93b547d821.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46889",
        "pageSeq": 46889
    },
    {
        "IDcode": 46890,
        "title": "Byoru - Nero Swimsuit - Page 1",
        "cover": "https://telegra.ph/file/d1d2820379c908ec72a62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46890",
        "pageSeq": 46890
    },
    {
        "IDcode": 46891,
        "title": "Elles - Ryuko Matoi - Page 1",
        "cover": "https://telegra.ph/file/ea56c9a835f1a645099ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46891",
        "pageSeq": 46891
    },
    {
        "IDcode": 46892,
        "title": "Hidori Rose - Miko Kurokawa cosplay - Page 1",
        "cover": "https://telegra.ph/file/10692ea65be115a3779a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46892",
        "pageSeq": 46892
    },
    {
        "IDcode": 46893,
        "title": "亞緹Arty & kaya萱 - Sasha Necron & Misha Necron - Page 1",
        "cover": "https://telegra.ph/file/f2c57d94af87e10f397ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46893",
        "pageSeq": 46893
    },
    {
        "IDcode": 46894,
        "title": "[KuukoW] Ganyu - Genshin Impact (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/b6835a2198b856bd8016f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46894",
        "pageSeq": 46894
    },
    {
        "IDcode": 46895,
        "title": "夏鸽鸽不想起床 -  オリガ・ディスコルディア - Page 1",
        "cover": "https://telegra.ph/file/ea4f2cb772d2ef4b17778.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46895",
        "pageSeq": 46895
    },
    {
        "IDcode": 46896,
        "title": "HERESY (林檎蜜紀) C96&CH26ハシゴ特典BBほてっぷDVD - Page 1",
        "cover": "https://telegra.ph/file/5da7b2e96b3d07bd0fa09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46896",
        "pageSeq": 46896
    },
    {
        "IDcode": 46897,
        "title": "NiannianD - Taihou Race Queen - Page 1",
        "cover": "https://telegra.ph/file/a022d02c6797d0ea83e33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46897",
        "pageSeq": 46897
    },
    {
        "IDcode": 46898,
        "title": "NiannianD - Minamoto no Raikou Jiangshi - Page 1",
        "cover": "https://telegra.ph/file/9a11703f979c8a5fac7b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46898",
        "pageSeq": 46898
    },
    {
        "IDcode": 46899,
        "title": "NiannianD - Kiara Sessyoin - Page 1",
        "cover": "https://telegra.ph/file/b1c91d54aa7fa6082a7bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46899",
        "pageSeq": 46899
    },
    {
        "IDcode": 46900,
        "title": "NiannianD - 2B - Page 1",
        "cover": "https://telegra.ph/file/7cf75fad06854271018c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46900",
        "pageSeq": 46900
    },
    {
        "IDcode": 46901,
        "title": "千縄万蝋・神鞭鬼縛 - Page 1",
        "cover": "https://telegra.ph/file/287cd177638a673e50747.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46901",
        "pageSeq": 46901
    },
    {
        "IDcode": 46902,
        "title": "[wildhoney423] Sirius of AzurLane 2020 new year skin (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/60226a05aa7a1edeeffb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46902",
        "pageSeq": 46902
    },
    {
        "IDcode": 46903,
        "title": "[HERESY (林檎蜜紀)] エッチな虞美人の人 - Page 1",
        "cover": "https://telegra.ph/file/4441ba0ad3a005d706e8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46903",
        "pageSeq": 46903
    },
    {
        "IDcode": 46904,
        "title": "[青青子JS]2021玉藻前高扬斯卡娅2号本 - Page 1",
        "cover": "https://telegra.ph/file/478c3592bec77a3c87775.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46904",
        "pageSeq": 46904
    },
    {
        "IDcode": 46905,
        "title": "[青青子JS]2021玉藻前高扬斯卡娅1号本 - Page 1",
        "cover": "https://telegra.ph/file/0e23bd48bc56e6a062509.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46905",
        "pageSeq": 46905
    },
    {
        "IDcode": 46906,
        "title": "バレンタインコスプレ写真セット スカサハ(FGO)+Z23(アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/57b8f8c64102d19431d67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46906",
        "pageSeq": 46906
    },
    {
        "IDcode": 46907,
        "title": "Vandych - Black Hanekawa - Page 1",
        "cover": "https://telegra.ph/file/bfeb47397486b0f0bc0e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46907",
        "pageSeq": 46907
    },
    {
        "IDcode": 46908,
        "title": "Kaya Huang - Illustrious - Page 1",
        "cover": "https://telegra.ph/file/d57e2c740f5af05e04e7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46908",
        "pageSeq": 46908
    },
    {
        "IDcode": 46909,
        "title": "Arty Huang - Merlin Prototype - Page 1",
        "cover": "https://telegra.ph/file/439a4a713a9a6ef393c8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46909",
        "pageSeq": 46909
    },
    {
        "IDcode": 46910,
        "title": "[HERESY (林檎蜜紀)] エッチなバニ上の人 - Page 1",
        "cover": "https://telegra.ph/file/2af5bbe724b489ee55b57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46910",
        "pageSeq": 46910
    },
    {
        "IDcode": 46911,
        "title": "Azami & Byoru - DOA Misaki & Nagisa - Page 1",
        "cover": "https://telegra.ph/file/1fa27acd8f459e3d4e18b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46911",
        "pageSeq": 46911
    },
    {
        "IDcode": 46912,
        "title": "【念念_D】赤城+大凤 - Page 1",
        "cover": "https://telegra.ph/file/d1147fbf41e810e56b591.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46912",
        "pageSeq": 46912
    },
    {
        "IDcode": 46913,
        "title": "小蔡頭喵喵喵 - 蕾姆生日 - Page 1",
        "cover": "https://telegra.ph/file/c63873e1225305852bc70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46913",
        "pageSeq": 46913
    },
    {
        "IDcode": 46914,
        "title": "KittyxKum - Tamaki Kotatsu - Page 1",
        "cover": "https://telegra.ph/file/c6e676c30f82ef1ba6072.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46914",
        "pageSeq": 46914
    },
    {
        "IDcode": 46915,
        "title": "Yoshinobi - Kotori Minami - Page 1",
        "cover": "https://telegra.ph/file/bd878eb7899efeb4aeee9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46915",
        "pageSeq": 46915
    },
    {
        "IDcode": 46916,
        "title": "[水淼aqua] Memphis - Page 1",
        "cover": "https://telegra.ph/file/d3c158b524904c5a78294.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46916",
        "pageSeq": 46916
    },
    {
        "IDcode": 46917,
        "title": "[沖田凜花Rinka] HMS Belfast, maid ver. (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/d9801a391f2aa9f970f1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46917",
        "pageSeq": 46917
    },
    {
        "IDcode": 46918,
        "title": "Azami - Lisa (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/5e70b71860a5af11cd863.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46918",
        "pageSeq": 46918
    },
    {
        "IDcode": 46919,
        "title": "水淼aqua-爱宕 - Page 1",
        "cover": "https://telegra.ph/file/85d7565a716f8ac01f438.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46919",
        "pageSeq": 46919
    },
    {
        "IDcode": 46920,
        "title": "ShiroKitsune - Mitsuri Kanroji (Kimetsu no Yaiba ) - Page 1",
        "cover": "https://telegra.ph/file/444f89fa97b12932322fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46920",
        "pageSeq": 46920
    },
    {
        "IDcode": 46921,
        "title": "一米八的大梨子 - Page 1",
        "cover": "https://telegra.ph/file/264f5aea600f7c130cc25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46921",
        "pageSeq": 46921
    },
    {
        "IDcode": 46922,
        "title": "アズールレーン·シリアス - Page 1",
        "cover": "https://telegra.ph/file/e77b037f1e749c64b4241.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46922",
        "pageSeq": 46922
    },
    {
        "IDcode": 46923,
        "title": "萱KaYa 光輝 [20P] - Page 1",
        "cover": "https://telegra.ph/file/ae46bec57737e02524606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46923",
        "pageSeq": 46923
    },
    {
        "IDcode": 46924,
        "title": "【三度_69】圣路易斯+逸仙 - Page 1",
        "cover": "https://telegra.ph/file/17e0b4898efe4872f0b70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46924",
        "pageSeq": 46924
    },
    {
        "IDcode": 46925,
        "title": "[秋] 碧蓝航线让巴尔泳装 (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/df9db1c1b66c4f23a3c09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46925",
        "pageSeq": 46925
    },
    {
        "IDcode": 46926,
        "title": "ShiroKitsune - K/DA Evelynn (League of Legends) - Page 1",
        "cover": "https://telegra.ph/file/d8e4909c8fc6698d157a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46926",
        "pageSeq": 46926
    },
    {
        "IDcode": 46927,
        "title": "Hana Bunny - Artoria Alter Bunny - Page 1",
        "cover": "https://telegra.ph/file/5bc2f9900a81a3bcc5ace.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46927",
        "pageSeq": 46927
    },
    {
        "IDcode": 46928,
        "title": "星之迟迟-马萨诸塞 - Page 1",
        "cover": "https://telegra.ph/file/08ac95be572bc743e3f63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46928",
        "pageSeq": 46928
    },
    {
        "IDcode": 46929,
        "title": "Aoy Queen - Naruko Uzumaki - Page 1",
        "cover": "https://telegra.ph/file/1c1829f91fd28fe623cc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46929",
        "pageSeq": 46929
    },
    {
        "IDcode": 46930,
        "title": "Hana Bunny - Cristmas Aerith (Final Fantasy VII) - Page 1",
        "cover": "https://telegra.ph/file/3a9b6764901e524dcf815.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46930",
        "pageSeq": 46930
    },
    {
        "IDcode": 46931,
        "title": "星之迟迟-爱宕 - Page 1",
        "cover": "https://telegra.ph/file/0822e49c6ac93eb0ef0cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46931",
        "pageSeq": 46931
    },
    {
        "IDcode": 46932,
        "title": "星之迟迟-圣路易斯 - Page 1",
        "cover": "https://telegra.ph/file/dd43f36608253593adbf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46932",
        "pageSeq": 46932
    },
    {
        "IDcode": 46933,
        "title": "蠢沫沫 - 艾米莉亚的睡衣 - Page 1",
        "cover": "https://telegra.ph/file/e9ccc4b112fd4985e84f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46933",
        "pageSeq": 46933
    },
    {
        "IDcode": 46934,
        "title": "みさ呆呆 原○（げんしん） バーバラ - Page 1",
        "cover": "https://telegra.ph/file/068fc3a92d55f5494c35b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46934",
        "pageSeq": 46934
    },
    {
        "IDcode": 46935,
        "title": "星之迟迟-能代 - Page 1",
        "cover": "https://telegra.ph/file/61b0c1bbc3ae6f517c255.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46935",
        "pageSeq": 46935
    },
    {
        "IDcode": 46936,
        "title": "【三度_69】天狼星 - Page 1",
        "cover": "https://telegra.ph/file/325f6ff37495d3203e529.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46936",
        "pageSeq": 46936
    },
    {
        "IDcode": 46937,
        "title": "星之迟迟-黛朵 - Page 1",
        "cover": "https://telegra.ph/file/483ecdb8d71ed808b7f47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46937",
        "pageSeq": 46937
    },
    {
        "IDcode": 46938,
        "title": "星之迟迟-大凤 - Page 1",
        "cover": "https://telegra.ph/file/22a315fd499d8d7f43677.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46938",
        "pageSeq": 46938
    },
    {
        "IDcode": 46939,
        "title": "xiaxiaoqiuqiuqiu - Page 1",
        "cover": "https://telegra.ph/file/6b6d15b3840d076fb2090.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46939",
        "pageSeq": 46939
    },
    {
        "IDcode": 46940,
        "title": "[Lada Lyumos] Meiko Shiraki - Page 1",
        "cover": "https://telegra.ph/file/72d4842e792e6233a7219.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46940",
        "pageSeq": 46940
    },
    {
        "IDcode": 46941,
        "title": "[Lada Lyumos] Lisa Williams - Page 1",
        "cover": "https://telegra.ph/file/e0330bd0c5239841d413a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46941",
        "pageSeq": 46941
    },
    {
        "IDcode": 46942,
        "title": "Lada Lyumos - Prestige KDA Ahri 2 - Page 1",
        "cover": "https://telegra.ph/file/9cf35a6aa838a336a0a78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46942",
        "pageSeq": 46942
    },
    {
        "IDcode": 46943,
        "title": "星之迟迟-信浓 - Page 1",
        "cover": "https://telegra.ph/file/59adcd74f8932ec86cf39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46943",
        "pageSeq": 46943
    },
    {
        "IDcode": 46944,
        "title": "星之迟迟-光辉μ兵装 - Page 1",
        "cover": "https://telegra.ph/file/f9b13692e5e8c38cca8e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46944",
        "pageSeq": 46944
    },
    {
        "IDcode": 46945,
        "title": "星野saori - Page 1",
        "cover": "https://telegra.ph/file/0b9a175784463f31f6989.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46945",
        "pageSeq": 46945
    },
    {
        "IDcode": 46946,
        "title": "Kitkat Cosplay 9 - Ahri - Page 1",
        "cover": "https://telegra.ph/file/6cb9c8c7e5c31fecfed75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46946",
        "pageSeq": 46946
    },
    {
        "IDcode": 46947,
        "title": "[PingPing] アズールレーン - ST LOUIS (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/263b6242295a92d2e1ad5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46947",
        "pageSeq": 46947
    },
    {
        "IDcode": 46948,
        "title": "[KuukoW] Tomoe Gozen Summer (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/707cd5d3c91ecf0111c8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46948",
        "pageSeq": 46948
    },
    {
        "IDcode": 46949,
        "title": "Aoy Queen - 2B - Page 1",
        "cover": "https://telegra.ph/file/9298b574315e58bb74aad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46949",
        "pageSeq": 46949
    },
    {
        "IDcode": 46950,
        "title": "半半子  鳳鳴春暁 大鳳チャイナ服 - Page 1",
        "cover": "https://telegra.ph/file/f07f488a46f7505ff5f3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46950",
        "pageSeq": 46950
    },
    {
        "IDcode": 46951,
        "title": "雨波 – DXD RIAS KITTY - Page 1",
        "cover": "https://telegra.ph/file/86cbd5312f862702de53e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46951",
        "pageSeq": 46951
    },
    {
        "IDcode": 46952,
        "title": "奶昔绵冰- 八重嘤 - Page 1",
        "cover": "https://telegra.ph/file/34e45d72eca2d08903cde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46952",
        "pageSeq": 46952
    },
    {
        "IDcode": 46953,
        "title": "Sarah Carvalho - Uzaki-chan - Page 1",
        "cover": "https://telegra.ph/file/3e87dd68f923aaf20517b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46953",
        "pageSeq": 46953
    },
    {
        "IDcode": 46954,
        "title": "Astolfo - Page 1",
        "cover": "https://telegra.ph/file/a56dc7c4c0a083e07c582.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46954",
        "pageSeq": 46954
    },
    {
        "IDcode": 46955,
        "title": "みさ呆呆 FG○ 酒呑童子メイド - Page 1",
        "cover": "https://telegra.ph/file/5ed0228ff36ed787db3d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46955",
        "pageSeq": 46955
    },
    {
        "IDcode": 46956,
        "title": "[@Yorkie_w] St. Louis (Luxury Handle) セントルイス - Page 1",
        "cover": "https://telegra.ph/file/92174f16a39f80b2f013d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46956",
        "pageSeq": 46956
    },
    {
        "IDcode": 46957,
        "title": "[@Azami_1110] St. Louis (Luxury Handle) セントルイス - Page 1",
        "cover": "https://telegra.ph/file/4eb94eaca522d69b3d94c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46957",
        "pageSeq": 46957
    },
    {
        "IDcode": 46958,
        "title": "[ももれく] 【FGOポリスキアラROM】 [独房懲罰] (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/a9008d1f2cca5959ffa19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46958",
        "pageSeq": 46958
    },
    {
        "IDcode": 46959,
        "title": "PattieCosplay - Bastet - Page 1",
        "cover": "https://telegra.ph/file/f8b20fd3b63e83a6f94cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46959",
        "pageSeq": 46959
    },
    {
        "IDcode": 46960,
        "title": "Aoy Queen - KDA Ahri - Page 1",
        "cover": "https://telegra.ph/file/1c9a88fb26a4aad2a431f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46960",
        "pageSeq": 46960
    },
    {
        "IDcode": 46961,
        "title": "Hidori Rose - Belfast cosplay - Page 1",
        "cover": "https://telegra.ph/file/f8966c4c2b683fc7ffc45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46961",
        "pageSeq": 46961
    },
    {
        "IDcode": 46962,
        "title": "Alin Ma / Xenon_Cos - K/DA Evelynn 2 (League of Legends) - Page 1",
        "cover": "https://telegra.ph/file/1f93cf620eddb08d17a74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46962",
        "pageSeq": 46962
    },
    {
        "IDcode": 46963,
        "title": "[Shooting Star's (SAKU&SACHIBUDOU)] Si-ri2 (Shokaku & Zuikaku Racing Queens)(Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/c7fc9a971dd444326101a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46963",
        "pageSeq": 46963
    },
    {
        "IDcode": 46964,
        "title": "水淼Aqua-杀生院警服 - Page 1",
        "cover": "https://telegra.ph/file/dc43ffca6bd33e1bff41a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46964",
        "pageSeq": 46964
    },
    {
        "IDcode": 46965,
        "title": "Coser@桜井宁宁 Vol.011 - Page 1",
        "cover": "https://telegra.ph/file/871ad90d9548719a451e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46965",
        "pageSeq": 46965
    },
    {
        "IDcode": 46966,
        "title": "水淼Aqua - FFNF Surcouf (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/fa11b57836bfb67615cfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46966",
        "pageSeq": 46966
    },
    {
        "IDcode": 46967,
        "title": "(AC2) [my suite (あつき)] スイートレーン11 愛宕・高雄レースクイーンROM - Page 1",
        "cover": "https://telegra.ph/file/d4bc0e0e050c141849803.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46967",
        "pageSeq": 46967
    },
    {
        "IDcode": 46968,
        "title": "水淼Aqua-信浓 - Page 1",
        "cover": "https://telegra.ph/file/5d2a8323208f221563d18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46968",
        "pageSeq": 46968
    },
    {
        "IDcode": 46969,
        "title": "Alin Ma / Xenon_Cos - K/DA Evelynn (League of Legends) - Page 1",
        "cover": "https://telegra.ph/file/ec0e259ca2830009801cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46969",
        "pageSeq": 46969
    },
    {
        "IDcode": 46970,
        "title": "[Twitter] 水淼aqua (@aqua28551264) - Page 1",
        "cover": "https://telegra.ph/file/c476c212e74f14fecd456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46970",
        "pageSeq": 46970
    },
    {
        "IDcode": 46971,
        "title": "[Twitter] 水淼aqua (@aqua28551264) - Page 2",
        "cover": "https://telegra.ph/file/042af6f9f8105f9f349bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46971",
        "pageSeq": 46971
    }
];
