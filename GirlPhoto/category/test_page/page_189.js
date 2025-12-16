// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40954,
        "title": "Queenie - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/45bbeb59fe45e968c80a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40954",
        "pageSeq": 40954
    },
    {
        "IDcode": 40955,
        "title": "Byoru - Saeko Busujima (High School Of The Dead)",
        "cover": "https://telegra.ph/file/c5673f11bfe9e9be5963e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40955",
        "pageSeq": 40955
    },
    {
        "IDcode": 40956,
        "title": "Aery Tiefling - Hoshino Ai (Oshi No Ko)",
        "cover": "https://telegra.ph/file/86ea713a8e4d7582b83fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40956",
        "pageSeq": 40956
    },
    {
        "IDcode": 40957,
        "title": "Hologana - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/2fd2bd021151b6d989577.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40957",
        "pageSeq": 40957
    },
    {
        "IDcode": 40958,
        "title": "ZinieQ & Tiny Asa - Helm & Anis (Nikke)",
        "cover": "https://telegra.ph/file/126a7979c1aa90a5275f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40958",
        "pageSeq": 40958
    },
    {
        "IDcode": 40959,
        "title": "Tokar - Blanc (Nikke)",
        "cover": "https://telegra.ph/file/155aac5dbefc6a2a2792a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40959",
        "pageSeq": 40959
    },
    {
        "IDcode": 40960,
        "title": "Lana Rain - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/338b6fccfb595ce0ce49c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40960",
        "pageSeq": 40960
    },
    {
        "IDcode": 40961,
        "title": "Asagiri Ai - Mash (Genshin Impact)",
        "cover": "https://telegra.ph/file/35adbea90494840b97fb8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40961",
        "pageSeq": 40961
    },
    {
        "IDcode": 40962,
        "title": "Xidaidai - Lynette (Genshin Impact)",
        "cover": "https://telegra.ph/file/9a4256c7cebd269a6f87c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40962",
        "pageSeq": 40962
    },
    {
        "IDcode": 40963,
        "title": "Yoshinobi - Maximilian Calypse (Under the Oak Tree)",
        "cover": "https://telegra.ph/file/4ad979425e4b32d377a43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40963",
        "pageSeq": 40963
    },
    {
        "IDcode": 40964,
        "title": "Lada Lyumos - Daenerys (Game Of  Thrones)",
        "cover": "https://telegra.ph/file/433303192b06619c32a20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40964",
        "pageSeq": 40964
    },
    {
        "IDcode": 40965,
        "title": "Yura - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/6fac5e5d4f69ae41a90c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40965",
        "pageSeq": 40965
    },
    {
        "IDcode": 40966,
        "title": "Ashe Reina - Spider-Gwen",
        "cover": "https://telegra.ph/file/425b4c2e129a2df5a1e57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40966",
        "pageSeq": 40966
    },
    {
        "IDcode": 40967,
        "title": "Potato Godzilla - Swimsuit",
        "cover": "https://telegra.ph/file/87a21f7d816fd6b23685c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40967",
        "pageSeq": 40967
    },
    {
        "IDcode": 40968,
        "title": "Lovely Space Kitten - Annie Leonhart (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/02d537afe06141fb3a191.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40968",
        "pageSeq": 40968
    },
    {
        "IDcode": 40969,
        "title": "Choi Ji Yun - Mash Dancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/68a12a5fc8d2d886f255a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40969",
        "pageSeq": 40969
    },
    {
        "IDcode": 40970,
        "title": "Umeko J - Mavis (Hotel Transilvania)",
        "cover": "https://telegra.ph/file/a2f0916cdb96880fd3336.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40970",
        "pageSeq": 40970
    },
    {
        "IDcode": 40971,
        "title": "Shui Miao Aqua - 2B (Nier: Automata)",
        "cover": "https://telegra.ph/file/39b3c20249f07ebc0f118.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40971",
        "pageSeq": 40971
    },
    {
        "IDcode": 40972,
        "title": "Vinnegal - 2B (Nier: Automata)",
        "cover": "https://telegra.ph/file/c8cb178979e1fd8a5a7d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40972",
        "pageSeq": 40972
    },
    {
        "IDcode": 40973,
        "title": "Carry Key - Ashley (Resident Evil)",
        "cover": "https://telegra.ph/file/78ffc03e5098d540e276e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40973",
        "pageSeq": 40973
    },
    {
        "IDcode": 40974,
        "title": "Alina Becker - Red Top",
        "cover": "https://telegra.ph/file/93627499ec4752ade4831.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40974",
        "pageSeq": 40974
    },
    {
        "IDcode": 40975,
        "title": "Xidaidai - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/b117a98beef0ad56e39dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40975",
        "pageSeq": 40975
    },
    {
        "IDcode": 40976,
        "title": "Nekokoyoshi 爆机少女喵小吉 – 小吉的午后时光",
        "cover": "https://telegra.ph/file/2c31c0b9792d2ca6ad868.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40976",
        "pageSeq": 40976
    },
    {
        "IDcode": 40977,
        "title": "Asagiri Ai - Flare (Kaifuku)",
        "cover": "https://telegra.ph/file/4b74fdf977e4e2fca4dc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40977",
        "pageSeq": 40977
    },
    {
        "IDcode": 40978,
        "title": "Aki Puff - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/46cddb6ac48ae5b956fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40978",
        "pageSeq": 40978
    },
    {
        "IDcode": 40979,
        "title": "Xidaidai - Hoshino Ai (Oshi No Ko)",
        "cover": "https://telegra.ph/file/24f6ffdfe0330cbb1ebd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40979",
        "pageSeq": 40979
    },
    {
        "IDcode": 40980,
        "title": "Yuzupyon - 2B Fanservice (Nier Automata)",
        "cover": "https://telegra.ph/file/d0c668ea6daf5e841a025.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40980",
        "pageSeq": 40980
    },
    {
        "IDcode": 40981,
        "title": "Hackee - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/4c7e50f1b866199b5bca7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40981",
        "pageSeq": 40981
    },
    {
        "IDcode": 40982,
        "title": "Nekokoyoshi - Kurumi Tsuchimikado (Naraka Bladepoint)",
        "cover": "https://telegra.ph/file/5f1c6ef9d234a7bca9a0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40982",
        "pageSeq": 40982
    },
    {
        "IDcode": 40983,
        "title": "Mik Allen & Hologana - Mikasa & Annie (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/12975ca4250c228efdfce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40983",
        "pageSeq": 40983
    },
    {
        "IDcode": 40984,
        "title": "Queenie - Neko Rem (Re Zero",
        "cover": "https://telegra.ph/file/57368cad2df5fe6f5e20b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40984",
        "pageSeq": 40984
    },
    {
        "IDcode": 40985,
        "title": "Sayo Momo - Lynette (Genshin Impact)",
        "cover": "https://telegra.ph/file/9a04d4e448fc2f9662041.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40985",
        "pageSeq": 40985
    },
    {
        "IDcode": 40986,
        "title": "软萌兔兔酱 - NO.011 爱猫人士",
        "cover": "https://telegra.ph/file/a44911779af7beba15ecb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40986",
        "pageSeq": 40986
    },
    {
        "IDcode": 40987,
        "title": "Asagiri Ai - Miko 巫女",
        "cover": "https://telegra.ph/file/ea6d808c16a42cfb63aab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40987",
        "pageSeq": 40987
    },
    {
        "IDcode": 40988,
        "title": "Mik Allen - Vi (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/c0299a1b0dce8f5b8e73d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40988",
        "pageSeq": 40988
    },
    {
        "IDcode": 40989,
        "title": "Potato Godzilla - Viper (Nikke)",
        "cover": "https://telegra.ph/file/68fe1e60ac07a141a3d5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40989",
        "pageSeq": 40989
    },
    {
        "IDcode": 40990,
        "title": "Kyokoyaki - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/58e472155d0be770f4a7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40990",
        "pageSeq": 40990
    },
    {
        "IDcode": 40991,
        "title": "Chihiro - Ayako (Salm Dunk)",
        "cover": "https://telegra.ph/file/db76eb1f20489735700f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40991",
        "pageSeq": 40991
    },
    {
        "IDcode": 40992,
        "title": "Arty Huang - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/09b51f7262d6c1ac35208.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40992",
        "pageSeq": 40992
    },
    {
        "IDcode": 40993,
        "title": "Asagi - Princess Peach (Mario Bros)",
        "cover": "https://telegra.ph/file/9abd5b90cd5d1a460ab6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40993",
        "pageSeq": 40993
    },
    {
        "IDcode": 40994,
        "title": "Yuki Hiino - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/5b660681cf5126cae5cca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40994",
        "pageSeq": 40994
    },
    {
        "IDcode": 40995,
        "title": "Byoru - McMommy",
        "cover": "https://telegra.ph/file/6550a48ed2e6451a02326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40995",
        "pageSeq": 40995
    },
    {
        "IDcode": 40996,
        "title": "Donna Loli - Shizuku (Hunter X Hunter)",
        "cover": "https://telegra.ph/file/b07aafca76a2cddc59806.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40996",
        "pageSeq": 40996
    },
    {
        "IDcode": 40997,
        "title": "Potato Godzilla - Viper (Nikke)",
        "cover": "https://telegra.ph/file/6c38369519fc05a138a04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40997",
        "pageSeq": 40997
    },
    {
        "IDcode": 40998,
        "title": "麻花麻花酱 - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/10f58f7d30a7923d9582f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40998",
        "pageSeq": 40998
    },
    {
        "IDcode": 40999,
        "title": "Asagi - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/12ae51490a50f8b8659c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40999",
        "pageSeq": 40999
    },
    {
        "IDcode": 41000,
        "title": "Byoru - Boa Hancock (One Piece)",
        "cover": "https://telegra.ph/file/e8b4891558cf22cb20894.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41000",
        "pageSeq": 41000
    },
    {
        "IDcode": 41001,
        "title": "Hinatasama - Rizu-Kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/3e690efec01294ea9cd97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41001",
        "pageSeq": 41001
    },
    {
        "IDcode": 41002,
        "title": "Lana Rain - Ayanami Rei (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/4563756616271580aa916.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41002",
        "pageSeq": 41002
    },
    {
        "IDcode": 41003,
        "title": "Donna Loli - McMommy",
        "cover": "https://telegra.ph/file/b22becd4f604247588ccd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41003",
        "pageSeq": 41003
    },
    {
        "IDcode": 41004,
        "title": "Byoru - Viper (Valorant)",
        "cover": "https://telegra.ph/file/8cbc66caa24ba0183a065.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41004",
        "pageSeq": 41004
    },
    {
        "IDcode": 41005,
        "title": "Tiny Asa - Makima Xmas (Chainsaw Man)",
        "cover": "https://telegra.ph/file/219c3bc64af6102a1c35d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41005",
        "pageSeq": 41005
    },
    {
        "IDcode": 41006,
        "title": "Lady Melamori - Viper (Valorant)",
        "cover": "https://telegra.ph/file/7cb109b7c25cf6a0c9d78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41006",
        "pageSeq": 41006
    },
    {
        "IDcode": 41007,
        "title": "Donna Loli - Mavis Casual (Hotel Transylvania)",
        "cover": "https://telegra.ph/file/8fcdcdd0a65a7d28b2c37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41007",
        "pageSeq": 41007
    },
    {
        "IDcode": 41008,
        "title": "ZinieQ - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/4ed493afdb93e0f23c96b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41008",
        "pageSeq": 41008
    },
    {
        "IDcode": 41009,
        "title": "Xidaidai - Kokomi (Genshin Impact)",
        "cover": "https://telegra.ph/file/e67d91dfa980ffacb3151.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41009",
        "pageSeq": 41009
    },
    {
        "IDcode": 41010,
        "title": "Hana Bunny - Matsumoto Rangiku (Bleach)",
        "cover": "https://telegra.ph/file/4b8737cc7869c3d784b36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41010",
        "pageSeq": 41010
    },
    {
        "IDcode": 41011,
        "title": "HaneAme - 原創 Original Bear(愛睡熊熊)",
        "cover": "https://telegra.ph/file/3cecac71a332eec261bc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41011",
        "pageSeq": 41011
    },
    {
        "IDcode": 41012,
        "title": "BakaChi - Nobara Kugisaki (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/e69fd33b45524463de859.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41012",
        "pageSeq": 41012
    },
    {
        "IDcode": 41013,
        "title": "Itsch.y - Maid Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/5b8188690e869fadc9fb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41013",
        "pageSeq": 41013
    },
    {
        "IDcode": 41014,
        "title": "ZinieQ - Jett (Valorant)",
        "cover": "https://telegra.ph/file/8f1717f0d89c7bcf844b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41014",
        "pageSeq": 41014
    },
    {
        "IDcode": 41015,
        "title": "Vinnegal - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/f3e1e8dc9751f3c5b98fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41015",
        "pageSeq": 41015
    },
    {
        "IDcode": 41016,
        "title": "Hoshilily - Hatsune Miku Halloween (Vocaloid)",
        "cover": "https://telegra.ph/file/3d46056189fb3278a4d44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41016",
        "pageSeq": 41016
    },
    {
        "IDcode": 41017,
        "title": "Hana Bunny - Yor Forger Bunny (Spy x Family)",
        "cover": "https://telegra.ph/file/341434f7432afe531a0cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41017",
        "pageSeq": 41017
    },
    {
        "IDcode": 41018,
        "title": "Joyce - Marnie Game Botton (Pokemon)",
        "cover": "https://telegra.ph/file/ebeb4a6e0f733bec0e969.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41018",
        "pageSeq": 41018
    },
    {
        "IDcode": 41019,
        "title": "Hane Ame - Regensburg (Azur Lane)",
        "cover": "https://telegra.ph/file/1af51246afebff3a45959.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41019",
        "pageSeq": 41019
    },
    {
        "IDcode": 41020,
        "title": "Hidori Rose - Kikyou kushida (Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e)",
        "cover": "https://telegra.ph/file/764405e49dd0361ec37f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41020",
        "pageSeq": 41020
    },
    {
        "IDcode": 41021,
        "title": "Rioko凉凉子 - 妄想航线 Agir Maid (Azur Lane 港区的龙女仆)",
        "cover": "https://telegra.ph/file/7587ba84df6e66b822f78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41021",
        "pageSeq": 41021
    },
    {
        "IDcode": 41022,
        "title": "Vinnegal - Nyotengu (Dead or Alive)",
        "cover": "https://telegra.ph/file/2ee5b6066e507b364c57b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41022",
        "pageSeq": 41022
    },
    {
        "IDcode": 41023,
        "title": "Hane Ame - Higuchi Madoka (The Idol Master)",
        "cover": "https://telegra.ph/file/c638806351c5d6399dcf0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41023",
        "pageSeq": 41023
    },
    {
        "IDcode": 41025,
        "title": "Tiny Asa - Hoshino Ai (Oshi No Ko)",
        "cover": "https://telegra.ph/file/ddcd1c036aaf0cc1a3760.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41025",
        "pageSeq": 41025
    },
    {
        "IDcode": 41026,
        "title": "Hane Ame - Sword Maiden (Goblin Slayer)",
        "cover": "https://telegra.ph/file/aa0dfad7b0495eb1a6663.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41026",
        "pageSeq": 41026
    },
    {
        "IDcode": 41027,
        "title": "西园寺南歌 Megumi Nange - Belfast (Azur Lane)",
        "cover": "https://telegra.ph/file/527030f49718be77cecde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41027",
        "pageSeq": 41027
    },
    {
        "IDcode": 41028,
        "title": "Byoru - Hanako (Blue Archive)",
        "cover": "https://telegra.ph/file/05a77ac118c4c7e8354fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41028",
        "pageSeq": 41028
    },
    {
        "IDcode": 41029,
        "title": "Donna Loli - Rebecca v2 (Cyberpunk)",
        "cover": "https://telegra.ph/file/3cf8538cc3c15fe05658d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41029",
        "pageSeq": 41029
    },
    {
        "IDcode": 41030,
        "title": "Umeko J - Hange (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/1301f9933db0e1e55732f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41030",
        "pageSeq": 41030
    },
    {
        "IDcode": 41031,
        "title": "Rizuna - Elaina (Majo No Tabitabi)",
        "cover": "https://telegra.ph/file/3908ac2f94ad51ec97b6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41031",
        "pageSeq": 41031
    },
    {
        "IDcode": 41032,
        "title": "Poppachan - Noshiro Maid (Azur Lane)",
        "cover": "https://telegra.ph/file/e7b30f697987f815cb510.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41032",
        "pageSeq": 41032
    },
    {
        "IDcode": 41033,
        "title": "Rocksy Light - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/574f032aec1593e907862.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41033",
        "pageSeq": 41033
    },
    {
        "IDcode": 41034,
        "title": "Vinnegal - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/1a72983eda2940ade4232.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41034",
        "pageSeq": 41034
    },
    {
        "IDcode": 41035,
        "title": "Ale Tanooki - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/d11004dea656a0dc093c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41035",
        "pageSeq": 41035
    },
    {
        "IDcode": 41036,
        "title": "Babyfooji - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/b3d8764c0cf086b887e2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41036",
        "pageSeq": 41036
    },
    {
        "IDcode": 41037,
        "title": "Umeko J - Rave (Teen Titans)",
        "cover": "https://telegra.ph/file/80f465873d06facf7a618.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41037",
        "pageSeq": 41037
    },
    {
        "IDcode": 41038,
        "title": "Donna Loli - Elizabeth (Nanatsu No Taiza)",
        "cover": "https://telegra.ph/file/552fcd867d8b7eb86ed1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41038",
        "pageSeq": 41038
    },
    {
        "IDcode": 41039,
        "title": "EpicInternetGF - 2B  Xmas (Nier Automata)",
        "cover": "https://telegra.ph/file/c0a9e7cdb9e4897f579cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41039",
        "pageSeq": 41039
    },
    {
        "IDcode": 41040,
        "title": "Tsuki Desu - Xmas Elizabeth (Nanatsu No Taiza)",
        "cover": "https://telegra.ph/file/215e318c7284e393db5af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41040",
        "pageSeq": 41040
    },
    {
        "IDcode": 41041,
        "title": "Angel Chan - Christmas",
        "cover": "https://telegra.ph/file/2dd69c92e36cbba3d1bdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41041",
        "pageSeq": 41041
    },
    {
        "IDcode": 41042,
        "title": "Eiraotis - Yor Forger Xmas (Spy X Family)",
        "cover": "https://telegra.ph/file/3fac7286dece03e35becf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41042",
        "pageSeq": 41042
    },
    {
        "IDcode": 41043,
        "title": "Potato Godzilla - Xmas Casual Part 1 & 2",
        "cover": "https://telegra.ph/file/d937a0bcb89ba0ff15973.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41043",
        "pageSeq": 41043
    },
    {
        "IDcode": 41044,
        "title": "皮皮奶 Pipinai - Succubus 魅魔",
        "cover": "https://telegra.ph/file/90bc214d6b84211857b2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41044",
        "pageSeq": 41044
    },
    {
        "IDcode": 41045,
        "title": "Vasiliel - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/b1c1d2fc638b3506d008d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41045",
        "pageSeq": 41045
    },
    {
        "IDcode": 41046,
        "title": "Carry Key - Futaba (Persona 5/Shin Megami Tensei V)",
        "cover": "https://telegra.ph/file/f0e078c1a5879b864cd61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41046",
        "pageSeq": 41046
    },
    {
        "IDcode": 41047,
        "title": "Hidori Rose - Ganyu Maid (Genshin Impact)",
        "cover": "https://telegra.ph/file/1fabd3c79ba81b165548c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41047",
        "pageSeq": 41047
    },
    {
        "IDcode": 41048,
        "title": "西园寺南歌 Meguminange - Kashino (Azur Lane)",
        "cover": "https://telegra.ph/file/f1b2579fb7d818b89573c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41048",
        "pageSeq": 41048
    },
    {
        "IDcode": 41049,
        "title": "Hinatasama - Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/b2bd3391fc74a918e756e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41049",
        "pageSeq": 41049
    },
    {
        "IDcode": 41050,
        "title": "Rioko凉凉子 - Regensburg 雷根斯堡 (Azur Lane)",
        "cover": "https://telegra.ph/file/81d35cd62dc2554f5e66e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41050",
        "pageSeq": 41050
    },
    {
        "IDcode": 41051,
        "title": "Tiny Asa - Satsuky (Kill la Kill)",
        "cover": "https://telegra.ph/file/fe004d73c49e9091f22d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41051",
        "pageSeq": 41051
    },
    {
        "IDcode": 41052,
        "title": "Tiny Asa - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/8c29bb5c2491dbf0ea153.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41052",
        "pageSeq": 41052
    },
    {
        "IDcode": 41053,
        "title": "Sakurai NingNing 桜井宁宁 - 白色热裤比基尼",
        "cover": "https://telegra.ph/file/7c64018900e1b7e55c958.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41053",
        "pageSeq": 41053
    },
    {
        "IDcode": 41054,
        "title": "Xidaidai - Kisaki (Blue Archivo)",
        "cover": "https://telegra.ph/file/bf4952287e45c85651086.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41054",
        "pageSeq": 41054
    }
];
