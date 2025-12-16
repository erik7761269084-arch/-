// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38002,
        "title": "Lada Lyumos - Shuten Douji (Fate Grand Order)",
        "cover": "https://telegra.ph/file/a91ba37936b0721a55bbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38002",
        "pageSeq": 38002
    },
    {
        "IDcode": 38003,
        "title": "Bambi - Akali (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/f923a61de33452e1caad0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38003",
        "pageSeq": 38003
    },
    {
        "IDcode": 38004,
        "title": "KuukoW - Ganyu Pure Seifuku (Genshin Impact)",
        "cover": "https://telegra.ph/file/f984405bf6eb87b450a5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38004",
        "pageSeq": 38004
    },
    {
        "IDcode": 38005,
        "title": "KuukoW - Qiqi (Genshi Impact)",
        "cover": "https://telegra.ph/file/f2119290c5215c4006232.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38005",
        "pageSeq": 38005
    },
    {
        "IDcode": 38006,
        "title": "Lady Melamori - 2B Bride (Nier Automata)",
        "cover": "https://telegra.ph/file/ee02422e20bd670782332.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38006",
        "pageSeq": 38006
    },
    {
        "IDcode": 38007,
        "title": "Hane Ame - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/c2fc35c6bd23df7f0f5b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38007",
        "pageSeq": 38007
    },
    {
        "IDcode": 38008,
        "title": "Meow Sugar - Nun (MTCos Vol.131)",
        "cover": "https://telegra.ph/file/615e1594321b8546b0074.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38008",
        "pageSeq": 38008
    },
    {
        "IDcode": 38009,
        "title": "Hidori Rose - Kokoro (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/329ade4f657a276f7df7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38009",
        "pageSeq": 38009
    },
    {
        "IDcode": 38010,
        "title": "Yoshinobi - Honoka/Swimsuit (Love Live)",
        "cover": "https://telegra.ph/file/baf253f870ff98741b9ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38010",
        "pageSeq": 38010
    },
    {
        "IDcode": 38011,
        "title": "Yoshinobi - Honoka (Love Live)",
        "cover": "https://telegra.ph/file/886de2ffec78d3165aabc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38011",
        "pageSeq": 38011
    },
    {
        "IDcode": 38012,
        "title": "Azami - Shion (Tensei Shitara Slime Datta Ken)",
        "cover": "https://telegra.ph/file/580c18f9315942bf4fe40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38012",
        "pageSeq": 38012
    },
    {
        "IDcode": 38013,
        "title": "UyUy - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/a2a35655b91f545e50534.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38013",
        "pageSeq": 38013
    },
    {
        "IDcode": 38014,
        "title": "UyUy - Kiara/KFC (Hololive)",
        "cover": "https://telegra.ph/file/9ad6661f6ebd2a68b303a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38014",
        "pageSeq": 38014
    },
    {
        "IDcode": 38015,
        "title": "Bambi - Browsette (Mario Bros)",
        "cover": "https://telegra.ph/file/04559c24233d54dd1e46c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38015",
        "pageSeq": 38015
    },
    {
        "IDcode": 38016,
        "title": "Lady Melamori - Zero Two/Lencery (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/5281be41624b045875ea8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38016",
        "pageSeq": 38016
    },
    {
        "IDcode": 38017,
        "title": "Hana Bunny - Gawr Gura/Swimsuit (Hololive)",
        "cover": "https://telegra.ph/file/22a3021bdd226c029b2c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38017",
        "pageSeq": 38017
    },
    {
        "IDcode": 38018,
        "title": "Azami - Sakura Haruno (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/96cc52c3d6fef106aaa5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38018",
        "pageSeq": 38018
    },
    {
        "IDcode": 38019,
        "title": "Pialoof - Spider Gwen (Siderman)",
        "cover": "https://telegra.ph/file/b4ae01ee2925388662647.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38019",
        "pageSeq": 38019
    },
    {
        "IDcode": 38020,
        "title": "Hidori Rose - Riko Sakurauchi (Love Live)",
        "cover": "https://telegra.ph/file/2ef0b4248b42551b19f0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38020",
        "pageSeq": 38020
    },
    {
        "IDcode": 38021,
        "title": "Hidori Rose - Scathach Lencery (Fate Grand Order)",
        "cover": "https://telegra.ph/file/d796d370861c650e674c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38021",
        "pageSeq": 38021
    },
    {
        "IDcode": 38022,
        "title": "Byoru - Ying Yang/Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/ef0b7b0a2c46b8882d5fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38022",
        "pageSeq": 38022
    },
    {
        "IDcode": 38023,
        "title": "Hana Bunny - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/b99f1026aa5480930a6a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38023",
        "pageSeq": 38023
    },
    {
        "IDcode": 38024,
        "title": "Hidori Rose - Scathach Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/7bf1640ddc101c5ff8e75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38024",
        "pageSeq": 38024
    },
    {
        "IDcode": 38025,
        "title": "UyUy - Mai Shiranui (The King Of Fighters)",
        "cover": "https://telegra.ph/file/0d3b9c2b43a32d4585183.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38025",
        "pageSeq": 38025
    },
    {
        "IDcode": 38026,
        "title": "KuukoW - Yae Kasumi (Honkai Impact)",
        "cover": "https://telegra.ph/file/ec7bfc62d06ab54526ad1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38026",
        "pageSeq": 38026
    },
    {
        "IDcode": 38027,
        "title": "KuukoW - Eris Boreas Greyrat (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/336794ba74d7a59a16a71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38027",
        "pageSeq": 38027
    },
    {
        "IDcode": 38028,
        "title": "Azami - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/5924b11c7f6740e1fee32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38028",
        "pageSeq": 38028
    },
    {
        "IDcode": 38029,
        "title": "Alina Becker - Revy (Black Lagoon)",
        "cover": "https://telegra.ph/file/d55e3650f420924723a03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38029",
        "pageSeq": 38029
    },
    {
        "IDcode": 38030,
        "title": "Shui Miao - Olga (Kuroinu)",
        "cover": "https://telegra.ph/file/133fd63833e0510662a60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38030",
        "pageSeq": 38030
    },
    {
        "IDcode": 38031,
        "title": "Azami - Imounto (Random Cosplay)",
        "cover": "https://telegra.ph/file/39d1696e55d0ea5811627.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38031",
        "pageSeq": 38031
    },
    {
        "IDcode": 38032,
        "title": "Kiera Marie - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/768698dfdae5173c80fb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38032",
        "pageSeq": 38032
    },
    {
        "IDcode": 38033,
        "title": "Mikomin Hokina - Quetzalcoatl (Kobayashi san)",
        "cover": "https://telegra.ph/file/defeb580a8081e538a068.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38033",
        "pageSeq": 38033
    },
    {
        "IDcode": 38034,
        "title": "Shui Miao - Kuuka (Princess Connect)",
        "cover": "https://telegra.ph/file/447e0b27a9738908040e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38034",
        "pageSeq": 38034
    },
    {
        "IDcode": 38035,
        "title": "Hana Bunny - Shion (Tensei Shitara Slime)",
        "cover": "https://telegra.ph/file/1c17b941ddcaf3ead2911.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38035",
        "pageSeq": 38035
    },
    {
        "IDcode": 38036,
        "title": "Azami - Siege (Arknights)",
        "cover": "https://telegra.ph/file/dbdf56a24ff456d686858.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38036",
        "pageSeq": 38036
    },
    {
        "IDcode": 38037,
        "title": "Peach Milky - Bárbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/cdd587e9305d401627991.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38037",
        "pageSeq": 38037
    },
    {
        "IDcode": 38038,
        "title": "Hidori Rose - Quetzalcoatl (Kobayashi san)",
        "cover": "https://telegra.ph/file/cb94738180f63302020ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38038",
        "pageSeq": 38038
    },
    {
        "IDcode": 38039,
        "title": "Hana Bunny - Jeanne D'Arc Alter/Bunny (Fate Grand Order)",
        "cover": "https://telegra.ph/file/6916e1e58e2cdaf657a5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38039",
        "pageSeq": 38039
    },
    {
        "IDcode": 38040,
        "title": "Hidori Rose - Melty (Shininghearts)",
        "cover": "https://telegra.ph/file/40b3bae5af039128c1d07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38040",
        "pageSeq": 38040
    },
    {
        "IDcode": 38041,
        "title": "Tsubomin - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/0ed0c2e0ae891b414b03d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38041",
        "pageSeq": 38041
    },
    {
        "IDcode": 38042,
        "title": "Hana Bunny - Ningguang (Genshin Impact)",
        "cover": "https://telegra.ph/file/54b5ec6628135a9e518c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38042",
        "pageSeq": 38042
    },
    {
        "IDcode": 38043,
        "title": "Hana Bunny - Ghislaine (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/d2404fd8bb6ab45783d25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38043",
        "pageSeq": 38043
    },
    {
        "IDcode": 38044,
        "title": "Shui Miao Aqua - Police (Random Cosplay)",
        "cover": "https://telegra.ph/file/73bd787e5efe8e808ac47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38044",
        "pageSeq": 38044
    },
    {
        "IDcode": 38045,
        "title": "Random coser - Atago (Azur Lane)",
        "cover": "https://telegra.ph/file/f56035e89b9bf23fef94f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38045",
        "pageSeq": 38045
    },
    {
        "IDcode": 38046,
        "title": "KaYa Huang - Ichika (Gotoubun)",
        "cover": "https://telegra.ph/file/f0c732bdc42d05442ce4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38046",
        "pageSeq": 38046
    },
    {
        "IDcode": 38047,
        "title": "SonSon손손 - PA-15 (Girls Frontline)",
        "cover": "https://telegra.ph/file/5f48954d70413e6e27956.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38047",
        "pageSeq": 38047
    },
    {
        "IDcode": 38048,
        "title": "Queenie Chuppy - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/d56b2313d8c4cc0f917b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38048",
        "pageSeq": 38048
    },
    {
        "IDcode": 38049,
        "title": "Shui Miao Aqua - Irirs",
        "cover": "https://telegra.ph/file/347f0fe85abb9a87f2253.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38049",
        "pageSeq": 38049
    },
    {
        "IDcode": 38050,
        "title": "Shui Miao Aqua - Uzuki Momoko",
        "cover": "https://telegra.ph/file/891632427b21d383b94c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38050",
        "pageSeq": 38050
    },
    {
        "IDcode": 38051,
        "title": "Mime弥美 - Bao Chai",
        "cover": "https://telegra.ph/file/1c3470fd8ba08c0c386ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38051",
        "pageSeq": 38051
    },
    {
        "IDcode": 38052,
        "title": "Mime弥美 - Bunny/Lencery",
        "cover": "https://telegra.ph/file/011f2164435c307da40a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38052",
        "pageSeq": 38052
    },
    {
        "IDcode": 38053,
        "title": "Vandych - Nero Claudius (Fate Extra Last Encore)",
        "cover": "https://telegra.ph/file/e2a982b41bad03452b55f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38053",
        "pageSeq": 38053
    },
    {
        "IDcode": 38054,
        "title": "Hana Bunny - Boa Hancock Lencery (One Piece)",
        "cover": "https://telegra.ph/file/5606fc934541974242e00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38054",
        "pageSeq": 38054
    },
    {
        "IDcode": 38055,
        "title": "Saku - Royal Bunny/Reverse (Fate Grand Order)",
        "cover": "https://telegra.ph/file/91f828a76fc455da73a1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38055",
        "pageSeq": 38055
    },
    {
        "IDcode": 38056,
        "title": "Saku - Maid/Bunny Part1 (Random Cosplay)",
        "cover": "https://telegra.ph/file/f8852688fa77566cc4497.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38056",
        "pageSeq": 38056
    },
    {
        "IDcode": 38057,
        "title": "Saku - Maid/Bunny Part2 (Random Cosplay)",
        "cover": "https://telegra.ph/file/98b9b79a1794d409e7540.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38057",
        "pageSeq": 38057
    },
    {
        "IDcode": 38058,
        "title": "Saku - Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/45ac1628d65ce658b8c50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38058",
        "pageSeq": 38058
    },
    {
        "IDcode": 38059,
        "title": "Yoshinobi - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/256358a53fc4edeb42c95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38059",
        "pageSeq": 38059
    },
    {
        "IDcode": 38060,
        "title": "钛合金Titi - Tamamo no Mae (Fate Grand Order)",
        "cover": "https://telegra.ph/file/95241fa101d4845ce9629.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38060",
        "pageSeq": 38060
    },
    {
        "IDcode": 38061,
        "title": "Momoiro Reku - Asuka Shikinami (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/ee784da69b3968e52dd93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38061",
        "pageSeq": 38061
    },
    {
        "IDcode": 38062,
        "title": "Alice - Scarlet Witch (Marvel/Avengers)",
        "cover": "https://telegra.ph/file/f3b63f46fdce7dac0cedf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38062",
        "pageSeq": 38062
    },
    {
        "IDcode": 38063,
        "title": "Hana Bunny - Lady Dimitrescu (Resident Evil Village)",
        "cover": "https://telegra.ph/file/6be62a1c460be7cea9c6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38063",
        "pageSeq": 38063
    },
    {
        "IDcode": 38064,
        "title": "Norafawn - Power (Chai Saw Man)",
        "cover": "https://telegra.ph/file/f3c0282cf3ff31ed71c83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38064",
        "pageSeq": 38064
    },
    {
        "IDcode": 38065,
        "title": "Hana Bunny - Mitsuri Valentine (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/67a0e1297aa03e5aa47a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38065",
        "pageSeq": 38065
    },
    {
        "IDcode": 38066,
        "title": "面饼仙儿 - Hantsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/6a78ebb6003f29f432cd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38066",
        "pageSeq": 38066
    },
    {
        "IDcode": 38067,
        "title": "面饼仙儿 - Hatsune Miku/Cheongsam (Vocaloid)",
        "cover": "https://telegra.ph/file/c5611e8863afb1c1073dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38067",
        "pageSeq": 38067
    },
    {
        "IDcode": 38068,
        "title": "面饼仙儿 - Hatsune Bunny Girl (Vocaloid)",
        "cover": "https://telegra.ph/file/3c16954b8bfdb3771f0ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38068",
        "pageSeq": 38068
    },
    {
        "IDcode": 38069,
        "title": "Xiao Rongzai - Shuten Douji (Fate Grand Order)",
        "cover": "https://telegra.ph/file/6690b4efe8dad9d366744.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38069",
        "pageSeq": 38069
    },
    {
        "IDcode": 38070,
        "title": "Norafawn - Makima/Maid (Chai Saw Man)",
        "cover": "https://telegra.ph/file/ff01e88c3abdeb90b84f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38070",
        "pageSeq": 38070
    },
    {
        "IDcode": 38071,
        "title": "UmekoJ - No.18/2B (Dragon Ball z/Nier Autómata)",
        "cover": "https://telegra.ph/file/559bfeb188ea8c2d2b770.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38071",
        "pageSeq": 38071
    },
    {
        "IDcode": 38072,
        "title": "Byoru - Zenith/Maid (Original Character)",
        "cover": "https://telegra.ph/file/0de843b9c90db6b482dc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38072",
        "pageSeq": 38072
    },
    {
        "IDcode": 38073,
        "title": "Eliza MiaoMiao - Ereshkigal & Ishtar (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ce07a878f39ecdfed8b43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38073",
        "pageSeq": 38073
    },
    {
        "IDcode": 38074,
        "title": "UmekoJ - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/317e4e183b01339d657f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38074",
        "pageSeq": 38074
    },
    {
        "IDcode": 38075,
        "title": "LoliSama - A2 Cheongsam (Nier Automata)",
        "cover": "https://telegra.ph/file/4ccbcf213076234253142.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38075",
        "pageSeq": 38075
    },
    {
        "IDcode": 38076,
        "title": "Mikomi Hokina & Gumiho Arts - Naruko & Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/8be3127fc67ad3863cf61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38076",
        "pageSeq": 38076
    },
    {
        "IDcode": 38077,
        "title": "Fujita Aku - Makima (Chai Saw Man)",
        "cover": "https://telegra.ph/file/ccd363b772279e30494ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38077",
        "pageSeq": 38077
    },
    {
        "IDcode": 38078,
        "title": "Alina Becker - Makima (Chai Saw Man)",
        "cover": "https://telegra.ph/file/1b1f1a9b01a554ca6148b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38078",
        "pageSeq": 38078
    },
    {
        "IDcode": 38079,
        "title": "Hana Bunny - Airi Gotou (Hige wo Soru)",
        "cover": "https://telegra.ph/file/57fd5fac67d872d36dc19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38079",
        "pageSeq": 38079
    },
    {
        "IDcode": 38080,
        "title": "Mikomi Hokina - Talia (Future Fragments)",
        "cover": "https://telegra.ph/file/a967669d91c83e9d7050c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38080",
        "pageSeq": 38080
    },
    {
        "IDcode": 38081,
        "title": "Mikomi Hokina - Talia/Lencery (Future Fragments)",
        "cover": "https://telegra.ph/file/453eb8a2de1e733ffacca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38081",
        "pageSeq": 38081
    },
    {
        "IDcode": 38082,
        "title": "Nana Chubby - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/8d8836f5f350b47cf34f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38082",
        "pageSeq": 38082
    },
    {
        "IDcode": 38083,
        "title": "Hokunaimeko - 細胞cell (Hataraku Saibou)",
        "cover": "https://telegra.ph/file/f963f873fb402443bd2b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38083",
        "pageSeq": 38083
    },
    {
        "IDcode": 38084,
        "title": "Hana Bunny - Samsung-chan(Random Cosplay)",
        "cover": "https://telegra.ph/file/60ee8b3d1108231bf3f9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38084",
        "pageSeq": 38084
    },
    {
        "IDcode": 38085,
        "title": "Juliette Michele - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/ce4379882208f3920576a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38085",
        "pageSeq": 38085
    },
    {
        "IDcode": 38087,
        "title": "Hane Ame - Mash/Maid (Fate-Grand-Order)",
        "cover": "https://telegra.ph/file/b4d2c322f0c4b22784d1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38087",
        "pageSeq": 38087
    },
    {
        "IDcode": 38088,
        "title": "Hane Ame - Jibril (No Game No Life)",
        "cover": "https://telegra.ph/file/64dc3492ee84112e6f6dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38088",
        "pageSeq": 38088
    },
    {
        "IDcode": 38089,
        "title": "Hane Ame - 2B Bride White (Nier Autómata)",
        "cover": "https://telegra.ph/file/11e94fe960d21096d2700.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38089",
        "pageSeq": 38089
    },
    {
        "IDcode": 38090,
        "title": "Jenna Chew - Random Cosplay",
        "cover": "https://telegra.ph/file/db8e492af01caac9fa401.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38090",
        "pageSeq": 38090
    },
    {
        "IDcode": 38091,
        "title": "Peach Milky - Bowsette ( Mario Bros)",
        "cover": "https://telegra.ph/file/4294ae0293a16488661d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38091",
        "pageSeq": 38091
    },
    {
        "IDcode": 38092,
        "title": "Helly Valentine - Mikasa Ackerman (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/38e998f13384f5cd3b62b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38092",
        "pageSeq": 38092
    },
    {
        "IDcode": 38093,
        "title": "Hana Bunny - Black Nurse (Random Cosplay)",
        "cover": "https://telegra.ph/file/ca06f66e7526bc123e145.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38093",
        "pageSeq": 38093
    },
    {
        "IDcode": 38094,
        "title": "Mikomi Hokina - Blair Lencery (Soul Eater)",
        "cover": "https://telegra.ph/file/763cb6599ebbe12986400.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38094",
        "pageSeq": 38094
    },
    {
        "IDcode": 38095,
        "title": "Mikomi Hokina - Blair Bathroom (Soul Eater)",
        "cover": "https://telegra.ph/file/678029bbeabb75c063846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38095",
        "pageSeq": 38095
    },
    {
        "IDcode": 38096,
        "title": "Shui Miao - Ots14 & Type95",
        "cover": "https://telegra.ph/file/2ebb6c8d029c02d790b6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38096",
        "pageSeq": 38096
    },
    {
        "IDcode": 38097,
        "title": "Mimmi 밈미 - HK416 (Girls Frontline)",
        "cover": "https://telegra.ph/file/d5c74768252af5011e9ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38097",
        "pageSeq": 38097
    },
    {
        "IDcode": 38098,
        "title": "Hane Hame - Tsubaki (Blue Archive) Incomplet",
        "cover": "https://telegra.ph/file/cce6c20d107be9613b476.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38098",
        "pageSeq": 38098
    },
    {
        "IDcode": 38099,
        "title": "Hana Bunny - Bunny Cat/Gawr Gura (Holo Live)",
        "cover": "https://telegra.ph/file/7ade243e4399b8c15d0a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38099",
        "pageSeq": 38099
    },
    {
        "IDcode": 38100,
        "title": "Hana Bunny - Lady Muzan (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/5eed50c74dbdbe3ddf795.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38100",
        "pageSeq": 38100
    },
    {
        "IDcode": 38101,
        "title": "Peach Milky - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/04279b2af25a4be112813.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38101",
        "pageSeq": 38101
    },
    {
        "IDcode": 38102,
        "title": "Ryuu Lavitz - Raphtalia (Tate No Yuusha)",
        "cover": "https://telegra.ph/file/48e390dfe0b9e8485ab6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38102",
        "pageSeq": 38102
    }
];
