// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 7901,
        "title": "シャナのキスで起きた。 (灼眼のシャナ)",
        "cover": "https://telegra.ph/file/0829c304cae3eccef55c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7901"
    },
    {
        "IDcode": 7902,
        "title": "[エクセシオ] 少女家具",
        "cover": "https://telegra.ph/file/5bf864780d7329276fc30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7902"
    },
    {
        "IDcode": 7903,
        "title": "にことまきのなつやすみ",
        "cover": "https://telegra.ph/file/997ad4ead3a154fb358ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7903"
    },
    {
        "IDcode": 7904,
        "title": "[KAROMIX (karory)] Karorful mixEX 13",
        "cover": "https://telegra.ph/file/e3c93a625747e14ce9a61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7904"
    },
    {
        "IDcode": 7905,
        "title": "白玉楼で御休憩",
        "cover": "https://telegra.ph/file/722ff25a09e05d2314ca5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7905"
    },
    {
        "IDcode": 7906,
        "title": "少女楽園計画",
        "cover": "https://telegra.ph/file/d7bdd36426f27eed9ef36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7906"
    },
    {
        "IDcode": 7907,
        "title": "NorE (ラブライブ!)",
        "cover": "https://telegra.ph/file/a08f3daf7a4ff343329b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7907"
    },
    {
        "IDcode": 7908,
        "title": "天然天使の××れっすん",
        "cover": "https://telegra.ph/file/3078e0b09c25eb8f36e21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7908"
    },
    {
        "IDcode": 7909,
        "title": "年上彼女オルタナティブ",
        "cover": "https://telegra.ph/file/6d53460589e06cd4f7abb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7909"
    },
    {
        "IDcode": 7910,
        "title": "twin Milf 1",
        "cover": "https://telegra.ph/file/b20f4bb4df478227160cf.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7910"
    },
    {
        "IDcode": 7911,
        "title": "熟れ乳くらべ",
        "cover": "https://telegra.ph/file/1455f716d9a4ff9d79213.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7911"
    },
    {
        "IDcode": 7912,
        "title": "ニクドレ志願",
        "cover": "https://telegra.ph/file/ae62db41d73c95f906e31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7912"
    },
    {
        "IDcode": 7913,
        "title": "とろけるからだ",
        "cover": "https://telegra.ph/file/d5e0c8a72373a175aee3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7913"
    },
    {
        "IDcode": 7914,
        "title": "ぱい☆パニック ～挟まれたデカぱい～",
        "cover": "https://telegra.ph/file/d1b74353cc43639c405f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7914"
    },
    {
        "IDcode": 7915,
        "title": "タイムストッぴゅ! ～時間を止めてリア充ハメハメ",
        "cover": "https://telegra.ph/file/51dded19f89fbf7d42d87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7915"
    },
    {
        "IDcode": 7916,
        "title": "twin Milf",
        "cover": "https://telegra.ph/file/63812b2fce89e81106078.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7916"
    },
    {
        "IDcode": 7917,
        "title": "自宅警備員～人見知りの姉 葛木さやか 編～",
        "cover": "https://telegra.ph/file/766f50f84fe9ac23f9317.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7917"
    },
    {
        "IDcode": 7918,
        "title": "自宅警備員～生意気な妹 葛木由紀 編～",
        "cover": "https://telegra.ph/file/c0a11e0522615da305db5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7918"
    },
    {
        "IDcode": 7919,
        "title": "女体化された俺のおまめ責めんなーッ!! ～快感マシンで絶頂管理～",
        "cover": "https://telegra.ph/file/c005079ca92386b02ef2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7919"
    },
    {
        "IDcode": 7920,
        "title": "欲望相关二三事",
        "cover": "https://telegra.ph/file/60432a9dbe8ab9fcdbff4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7920"
    },
    {
        "IDcode": 7921,
        "title": "自宅警備員～熟れた未亡人 葛木翔子 編～",
        "cover": "https://telegra.ph/file/e3df029ef4c37ed09a11f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7921"
    },
    {
        "IDcode": 7922,
        "title": "エプロンプレイ ～未亡人食堂繁盛記～",
        "cover": "https://telegra.ph/file/88397a75a59f97081a90b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7922"
    },
    {
        "IDcode": 7923,
        "title": "Sister Syndrome",
        "cover": "https://telegra.ph/file/8072035d7f68dfe1d14fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7923"
    },
    {
        "IDcode": 7924,
        "title": "Help me! 美咲さん",
        "cover": "https://telegra.ph/file/3f5a15a149f50bc050cc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7924"
    },
    {
        "IDcode": 7925,
        "title": "夏あそび",
        "cover": "https://telegra.ph/file/8337b845273aadefe27db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7925"
    },
    {
        "IDcode": 7926,
        "title": "Commensalism 2",
        "cover": "https://telegra.ph/file/f6b1d0d78724ae1b28181.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7926"
    },
    {
        "IDcode": 7927,
        "title": "お兄ちゃんと一緒",
        "cover": "https://telegra.ph/file/e6aa01f5531b2b86b5ccd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7927"
    },
    {
        "IDcode": 7928,
        "title": "痴漢レッスン",
        "cover": "https://telegra.ph/file/ed56f855da2309f28bd21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7928"
    },
    {
        "IDcode": 7929,
        "title": "ギリギリ♥Sisters",
        "cover": "https://telegra.ph/file/1cfa5fd2c785c60760671.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7929"
    },
    {
        "IDcode": 7930,
        "title": "HINA Project",
        "cover": "https://telegra.ph/file/35a4682c918f33692fb16.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7930"
    },
    {
        "IDcode": 7931,
        "title": "愛人アパート❤",
        "cover": "https://telegra.ph/file/7e8cdb64daa4d1b40ce28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7931"
    },
    {
        "IDcode": 7932,
        "title": "大谷さんのコスプレ事情",
        "cover": "https://telegra.ph/file/a2aac14d73ce365d4dbbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7932"
    },
    {
        "IDcode": 7933,
        "title": "リハビリ病棟24時",
        "cover": "https://telegra.ph/file/ce8e5e135e54757aab92d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7933"
    },
    {
        "IDcode": 7934,
        "title": "ステップアップ (ギリギリ♥Sisters)",
        "cover": "https://telegra.ph/file/b91d7050cb488f74f80bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7934"
    },
    {
        "IDcode": 7935,
        "title": "実践 ワレ一ム対応マ二ュアル",
        "cover": "https://telegra.ph/file/ed301d5f48cfcb52ea01e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7935"
    },
    {
        "IDcode": 7936,
        "title": "保健室で…。",
        "cover": "https://telegra.ph/file/e3f9436549c2f92b0e1de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7936"
    },
    {
        "IDcode": 7937,
        "title": "快感スル青春",
        "cover": "https://telegra.ph/file/d36d8a480b7286022d0eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7937"
    },
    {
        "IDcode": 7938,
        "title": "ビッチ・オン・ザ・ポール",
        "cover": "https://telegra.ph/file/65756a48ac8167441b1ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7938"
    },
    {
        "IDcode": 7939,
        "title": "Gal na Seitokaichou to Sugosu Hitonatsu",
        "cover": "https://telegra.ph/file/09ea72247be02f747d85d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7939"
    },
    {
        "IDcode": 7940,
        "title": "母さんじゃなきゃダメなんだっ!! + 続・母さんじゃなきゃダメなんだっ!!",
        "cover": "https://telegra.ph/file/04566a409116a56f8c5db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7940"
    },
    {
        "IDcode": 7941,
        "title": "Dream Girl",
        "cover": "https://telegra.ph/file/84fc533fc8fd495c82724.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7941"
    },
    {
        "IDcode": 7942,
        "title": "[鄭某&安藝] 危險性遊戲",
        "cover": "https://telegra.ph/file/0cc881e15c0e31b74ea83.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7942"
    },
    {
        "IDcode": 7943,
        "title": "妹が好きで好きでたまらない",
        "cover": "https://telegra.ph/file/d56f26d2f858de4df0e1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7943"
    },
    {
        "IDcode": 7944,
        "title": "調教白書",
        "cover": "https://telegra.ph/file/4361f17f65610febc72ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7944"
    },
    {
        "IDcode": 7945,
        "title": "想入非非 Ch.1-5",
        "cover": "https://telegra.ph/file/e06488664be04244831fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7945"
    },
    {
        "IDcode": 7946,
        "title": "ビッチ・オン・ザ・ポール",
        "cover": "https://telegra.ph/file/ba0989b5afcd983841d6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7946"
    },
    {
        "IDcode": 7947,
        "title": "新ママを寝取るゼ！",
        "cover": "https://telegra.ph/file/a48c4bcc731602e360e65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7947"
    },
    {
        "IDcode": 7948,
        "title": "本能解決師",
        "cover": "https://telegra.ph/file/86fa2471344eb565d40cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7948"
    },
    {
        "IDcode": 7949,
        "title": "女助教",
        "cover": "https://telegra.ph/file/67e1069b54a4af524d99f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7949"
    },
    {
        "IDcode": 7950,
        "title": "圈套",
        "cover": "https://telegra.ph/file/fa348287c5d467bdd1e1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7950"
    },
    {
        "IDcode": 7951,
        "title": "ママショタイム 兄弟編",
        "cover": "https://telegra.ph/file/c40cc16eee0581d1f3048.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7951"
    },
    {
        "IDcode": 7952,
        "title": "ボクのお兄ちゃんがを作っていたのでエッチな知識ゼロのフリして色々されちゃった話",
        "cover": "https://telegra.ph/file/ffbef5c66322527b70f1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7952"
    },
    {
        "IDcode": 7953,
        "title": "催眠アプリver.666 ～真夏のビーチで水着美女をご馳走様!",
        "cover": "https://telegra.ph/file/cbc3cd05e0b91948ad28f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7953"
    },
    {
        "IDcode": 7954,
        "title": "貼ったらヤレちゃう!- えろシール～ワガママJKのアソコをたった1枚で奴隷に～",
        "cover": "https://telegra.ph/file/4647a88e5f3c720c4405e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7954"
    },
    {
        "IDcode": 7955,
        "title": "がーるねくすとどあ",
        "cover": "https://telegra.ph/file/632f6b7defa5b4780c91a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7955"
    },
    {
        "IDcode": 7956,
        "title": "がーるねくすとどあ",
        "cover": "https://telegra.ph/file/2a06417cf46af6d896c7e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7956"
    },
    {
        "IDcode": 7957,
        "title": "触手洗脑",
        "cover": "https://telegra.ph/file/421145d4f659b442ada16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7957"
    },
    {
        "IDcode": 7958,
        "title": "XX ROM",
        "cover": "https://telegra.ph/file/6f672f526cb51140a3b90.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7958"
    },
    {
        "IDcode": 7959,
        "title": "カルデアメイド #マシュ",
        "cover": "https://telegra.ph/file/9fcef89c9e5cca567f620.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7959"
    },
    {
        "IDcode": 7960,
        "title": "ヒドゥンクエスト",
        "cover": "https://telegra.ph/file/541ba8b18ae471935b1a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7960"
    },
    {
        "IDcode": 7961,
        "title": "冲突1-9",
        "cover": "https://telegra.ph/file/7df1fc79f51f941972bb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7961"
    },
    {
        "IDcode": 7962,
        "title": "母を寝取られても後編",
        "cover": "https://telegra.ph/file/ed9735dce6df4868676c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7962"
    },
    {
        "IDcode": 7963,
        "title": "母を寝取られても後編",
        "cover": "https://telegra.ph/file/f0d1399a23c69c168aa8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7963"
    }
];
