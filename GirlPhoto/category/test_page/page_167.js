// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38710,
        "title": "Ain Nguyen - Mai Sakurajima (Seishun Buta)",
        "cover": "https://telegra.ph/file/5c6b416f500837fc814ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38710",
        "pageSeq": 38710
    },
    {
        "IDcode": 38711,
        "title": "Alina Becker - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/2314c52e9429ed0e1e615.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38711",
        "pageSeq": 38711
    },
    {
        "IDcode": 38712,
        "title": "Hane Ame - Raikou Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/143a84bfb771510a69d97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38712",
        "pageSeq": 38712
    },
    {
        "IDcode": 38713,
        "title": "Yoshinobi - Ryoko & Mako (Kill la Kill)",
        "cover": "https://telegra.ph/file/b2b00a9eea0eb7bdc6368.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38713",
        "pageSeq": 38713
    },
    {
        "IDcode": 38714,
        "title": "Sophie Valentine - Cindy Aurum (Final Fantasy)",
        "cover": "https://telegra.ph/file/6bd36f52a6de52e8b391f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38714",
        "pageSeq": 38714
    },
    {
        "IDcode": 38715,
        "title": "G44不会受伤 - 美少女万华镜夕莉夕摩 (Bishoujo Magekyou)",
        "cover": "https://telegra.ph/file/4262aed6ef17b612ea78e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38715",
        "pageSeq": 38715
    },
    {
        "IDcode": 38716,
        "title": "Hane Ame - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/b752b1b4560b1a094b1b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38716",
        "pageSeq": 38716
    },
    {
        "IDcode": 38717,
        "title": "Vinnegal - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/ac15306d773cf112019b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38717",
        "pageSeq": 38717
    },
    {
        "IDcode": 38718,
        "title": "Shui Miao Aqua - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/a6835e1d4eda64135f7a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38718",
        "pageSeq": 38718
    },
    {
        "IDcode": 38719,
        "title": "Shui Miao Aqua - 2B Lingerie (Nier Autómata)",
        "cover": "https://telegra.ph/file/7621c8e7c1c7f36551f1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38719",
        "pageSeq": 38719
    },
    {
        "IDcode": 38720,
        "title": "Hidori Rose - Rem Bride Swimsuit (Re:Zero)",
        "cover": "https://telegra.ph/file/51294a8174cd975f9ab5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38720",
        "pageSeq": 38720
    },
    {
        "IDcode": 38721,
        "title": "Hane Ame - Sakamata Chloe (Hololive)",
        "cover": "https://telegra.ph/file/3177511e71036a4447a5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38721",
        "pageSeq": 38721
    },
    {
        "IDcode": 38722,
        "title": "Hane Ame - Brynhildr (Fate Grand Order)",
        "cover": "https://telegra.ph/file/c23b009e2d1a8e478b463.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38722",
        "pageSeq": 38722
    },
    {
        "IDcode": 38723,
        "title": "Vinnegal - Yumeko (Kakeguri)",
        "cover": "https://telegra.ph/file/be3967a06e89e7336b16d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38723",
        "pageSeq": 38723
    },
    {
        "IDcode": 38724,
        "title": "Alina Becker - Makima Church (Chani Saw Man)",
        "cover": "https://telegra.ph/file/eecfabf0777e955e18d4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38724",
        "pageSeq": 38724
    },
    {
        "IDcode": 38725,
        "title": "Alina Becker - Tifa Gym (Final Fantasy)",
        "cover": "https://telegra.ph/file/bf3ea9af4804aa780d04c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38725",
        "pageSeq": 38725
    },
    {
        "IDcode": 38726,
        "title": "Kanra - Ankha Zone (Animal Crosing)",
        "cover": "https://telegra.ph/file/2015828a7bd5c5fc3a2c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38726",
        "pageSeq": 38726
    },
    {
        "IDcode": 38727,
        "title": "Luxlo - Lewd Lightning (Final Fantasy)",
        "cover": "https://telegra.ph/file/f77a671d9f1a67344d9fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38727",
        "pageSeq": 38727
    },
    {
        "IDcode": 38728,
        "title": "Hane Ame - Taihou Wedding (Azur Lane)",
        "cover": "https://telegra.ph/file/ccf3425becfc65058be46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38728",
        "pageSeq": 38728
    },
    {
        "IDcode": 38729,
        "title": "Serinide - Akali (KDA/League of Legends)",
        "cover": "https://telegra.ph/file/518b8b64dd71b0d56e486.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38729",
        "pageSeq": 38729
    },
    {
        "IDcode": 38730,
        "title": "Potato Godzilla - Chinese Halloween (Rando Cosplay)",
        "cover": "https://telegra.ph/file/8eedae21f163516cbaa4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38730",
        "pageSeq": 38730
    },
    {
        "IDcode": 38731,
        "title": "Nagisa - Cowgirl (Random Cosplay)",
        "cover": "https://telegra.ph/file/7c2d34ae4b2d0e92147bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38731",
        "pageSeq": 38731
    },
    {
        "IDcode": 38732,
        "title": "Hane Ame - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/50ead2ad4379b943f428e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38732",
        "pageSeq": 38732
    },
    {
        "IDcode": 38733,
        "title": "HaneAme - Shirogane Noel (VTuber/Hololive)",
        "cover": "https://telegra.ph/file/6d8410e5bdfd41723cd4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38733",
        "pageSeq": 38733
    },
    {
        "IDcode": 38734,
        "title": "Sweetie Line - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/177503d3d18f258d78232.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38734",
        "pageSeq": 38734
    },
    {
        "IDcode": 38735,
        "title": "Sally Dorasnow - Rem White Cat Hoodie (Re:Zero)",
        "cover": "https://telegra.ph/file/b7477e5dbdbd5f985ff50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38735",
        "pageSeq": 38735
    },
    {
        "IDcode": 38736,
        "title": "Hidori Rose - Ram Bride Lingerie (Re:Zero)",
        "cover": "https://telegra.ph/file/1ee913d35bd3da68dc973.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38736",
        "pageSeq": 38736
    },
    {
        "IDcode": 38737,
        "title": "Arty Huang Elsa Granhiert (Re:Zero)",
        "cover": "https://telegra.ph/file/7e0aefb239c961774b17c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38737",
        "pageSeq": 38737
    },
    {
        "IDcode": 38738,
        "title": "Danielle Beaulieu - Pikachu (Pokemon)",
        "cover": "https://telegra.ph/file/54fde43f873a4e2237d79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38738",
        "pageSeq": 38738
    },
    {
        "IDcode": 38739,
        "title": "Peach Milky - Hatsune Miku Bunny (Vocaloid)",
        "cover": "https://telegra.ph/file/2110a2363125a2ee01cae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38739",
        "pageSeq": 38739
    },
    {
        "IDcode": 38740,
        "title": "蠢沫沫Chunmomo - 2B Lingerie (Nier Autómata)",
        "cover": "https://telegra.ph/file/69f26f9c97ceab4d63314.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38740",
        "pageSeq": 38740
    },
    {
        "IDcode": 38741,
        "title": "蠢沫沫Chunmomo - 2B Lingerie (Nier Autómata)",
        "cover": "https://telegra.ph/file/c7549108427253a253bfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38741",
        "pageSeq": 38741
    },
    {
        "IDcode": 38742,
        "title": "蠢沫沫 Chunmomo - Kinako (Random Cosplay)",
        "cover": "https://telegra.ph/file/ef5bc263e00be05af8bf1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38742",
        "pageSeq": 38742
    },
    {
        "IDcode": 38743,
        "title": "瓜希酱 - St. Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/35ee18f7e448174390223.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38743",
        "pageSeq": 38743
    },
    {
        "IDcode": 38744,
        "title": "HaneAme - Nurse B B (Fate Grand Order)",
        "cover": "https://telegra.ph/file/da5cab9295eb9d868938a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38744",
        "pageSeq": 38744
    },
    {
        "IDcode": 38745,
        "title": "UyUy - Toga Himiko (Boku no Hero)",
        "cover": "https://telegra.ph/file/f95081ead657a265d3486.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38745",
        "pageSeq": 38745
    },
    {
        "IDcode": 38746,
        "title": "Queenie - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/8a2d437e0856adbab6e29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38746",
        "pageSeq": 38746
    },
    {
        "IDcode": 38747,
        "title": "Azami - Kurumi Tokisaki (Date A Live)",
        "cover": "https://telegra.ph/file/a764752b6283a963f9534.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38747",
        "pageSeq": 38747
    },
    {
        "IDcode": 38748,
        "title": "Azami - Chinnese (Random Cosplay)",
        "cover": "https://telegra.ph/file/8b5e2ee092fa32e4f63d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38748",
        "pageSeq": 38748
    },
    {
        "IDcode": 38749,
        "title": "Queenie - Hinata Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/e354924b4c3b34025954e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38749",
        "pageSeq": 38749
    },
    {
        "IDcode": 38750,
        "title": "G44不会受伤 - Vol. 25 Elf (Elf Village)",
        "cover": "https://telegra.ph/file/30857075d736b5d7399cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38750",
        "pageSeq": 38750
    },
    {
        "IDcode": 38751,
        "title": "Nyako - Perseus (Azur Lane)",
        "cover": "https://telegra.ph/file/35fc7952284a8a6ae962c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38751",
        "pageSeq": 38751
    },
    {
        "IDcode": 38752,
        "title": "Arty Huang - Mash Dancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/5ac3ffdf2d262b4dd0fb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38752",
        "pageSeq": 38752
    },
    {
        "IDcode": 38753,
        "title": "Shui Miao Aqua - Dafeng Wedding (Azur Lane)",
        "cover": "https://telegra.ph/file/25345147e3fad06b4d4fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38753",
        "pageSeq": 38753
    },
    {
        "IDcode": 38754,
        "title": "Miaw Kotoshi 爆机少女喵小吉 - Kinako (Random Cosplay)",
        "cover": "https://telegra.ph/file/bc5e20348930910d68e81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38754",
        "pageSeq": 38754
    },
    {
        "IDcode": 38755,
        "title": "Byoru - Lei Fang Halloween (Dead or Alive)",
        "cover": "https://telegra.ph/file/e9f51b8504ebe5354a65d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38755",
        "pageSeq": 38755
    },
    {
        "IDcode": 38756,
        "title": "Byoru - Asuna Ichinose (Blue Archive)",
        "cover": "https://telegra.ph/file/13f5174b9fe9a744d6f89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38756",
        "pageSeq": 38756
    },
    {
        "IDcode": 38757,
        "title": "Kerocchi - No. 18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/80407cde807d50cb8095c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38757",
        "pageSeq": 38757
    },
    {
        "IDcode": 38758,
        "title": "Kerocchi - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/b310fbc5a8d529af96bfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38758",
        "pageSeq": 38758
    },
    {
        "IDcode": 38759,
        "title": "Hidori Rose - Chieri Ogata (Idolmaster)",
        "cover": "https://telegra.ph/file/0647a742717cc7a768941.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38759",
        "pageSeq": 38759
    },
    {
        "IDcode": 38760,
        "title": "KuukoW - Magical Kitty Girl (Random Cosplay)",
        "cover": "https://telegra.ph/file/868eb2ffe5d92bed3541b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38760",
        "pageSeq": 38760
    },
    {
        "IDcode": 38761,
        "title": "G44不会受伤 - blade原创角色小恶魔 (Random Cosplay)",
        "cover": "https://telegra.ph/file/7f1c26729610f34f034f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38761",
        "pageSeq": 38761
    },
    {
        "IDcode": 38762,
        "title": "Hana Bunny - Evelynn (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/20a7911751f339696c9d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38762",
        "pageSeq": 38762
    },
    {
        "IDcode": 38763,
        "title": "Katyuska Moonfox - Morrigan (Capcom Game)",
        "cover": "https://telegra.ph/file/91940b1a3925b05089e4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38763",
        "pageSeq": 38763
    },
    {
        "IDcode": 38764,
        "title": "Yunocos69 - Mash Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/0b03ee51adc2291fcfd80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38764",
        "pageSeq": 38764
    },
    {
        "IDcode": 38765,
        "title": "Vandych - Zelda and Tentacles (The Legend of Zelda)",
        "cover": "https://telegra.ph/file/77719c44aa1dbc373ffc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38765",
        "pageSeq": 38765
    },
    {
        "IDcode": 38766,
        "title": "Voezacos - Zelda Gym (The Legend of Zelda)",
        "cover": "https://telegra.ph/file/51eb31b375f30a0d22401.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38766",
        "pageSeq": 38766
    },
    {
        "IDcode": 38767,
        "title": "刺青Poi - Chapayev (Azur Lane)",
        "cover": "https://telegra.ph/file/d5e046999fc7a4324a063.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38767",
        "pageSeq": 38767
    },
    {
        "IDcode": 38768,
        "title": "Shae Underscore - Grass Quill (Pokemon)",
        "cover": "https://telegra.ph/file/fe77d8fea890f8f8bb0f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38768",
        "pageSeq": 38768
    },
    {
        "IDcode": 38769,
        "title": "是一只熊仔吗 - NO.011 Glorious 碧蓝航线 光荣 (Azur Lane) [30P-131MB]",
        "cover": "https://telegra.ph/file/3cab7241053186a8d9b01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38769",
        "pageSeq": 38769
    },
    {
        "IDcode": 38770,
        "title": "Kitkat - Atago (Azur Lane)",
        "cover": "https://telegra.ph/file/258d7444f9c647b3ec758.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38770",
        "pageSeq": 38770
    },
    {
        "IDcode": 38771,
        "title": "Voezacos - Ann Takamaki (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/5bd39e1256a02d2b1fec7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38771",
        "pageSeq": 38771
    },
    {
        "IDcode": 38772,
        "title": "齋齋いつき itsukichan - Sagiri Izumi (Ero-Manga Sensei)",
        "cover": "https://telegra.ph/file/4bca061332f65ac432a32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38772",
        "pageSeq": 38772
    },
    {
        "IDcode": 38773,
        "title": "Vandych - Motoko Kusanagi (Ghost In The Shell)",
        "cover": "https://telegra.ph/file/906cb161aae4c70f66205.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38773",
        "pageSeq": 38773
    },
    {
        "IDcode": 38774,
        "title": "齋齋いつき itsukichan - Gawr Gura (Hololive/Vtuber)",
        "cover": "https://telegra.ph/file/72130c6a6c586c7086740.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38774",
        "pageSeq": 38774
    },
    {
        "IDcode": 38775,
        "title": "Shui Miao Aqua - Kamisato Ayaka (Azur Lane)",
        "cover": "https://telegra.ph/file/a1e8f20d1aca58a7e93c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38775",
        "pageSeq": 38775
    },
    {
        "IDcode": 38776,
        "title": "Hane Ame - Mizuhara Chizuru (Kanojo Kanajo Okarishimasu)",
        "cover": "https://telegra.ph/file/75376a7d127569f9000f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38776",
        "pageSeq": 38776
    },
    {
        "IDcode": 38777,
        "title": "Hane Ame - Ankha Zone (Random)",
        "cover": "https://telegra.ph/file/b7fadcd4f7051ef5db23a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38777",
        "pageSeq": 38777
    },
    {
        "IDcode": 38778,
        "title": "Hane Ame - Race Queen St. Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/bdfb521e9150818e6992d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38778",
        "pageSeq": 38778
    },
    {
        "IDcode": 38779,
        "title": "Chonoblack - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/f8cd83c6eba5356267df2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38779",
        "pageSeq": 38779
    },
    {
        "IDcode": 38780,
        "title": "Virtual Geisha - Shampoo (Ranma 1/2)",
        "cover": "https://telegra.ph/file/e0b21e1af5188e3d4a055.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38780",
        "pageSeq": 38780
    },
    {
        "IDcode": 38781,
        "title": "Virtual Geisha - Ruby Rose (RWBY)",
        "cover": "https://telegra.ph/file/e1f1066bc5ee96553a024.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38781",
        "pageSeq": 38781
    },
    {
        "IDcode": 38782,
        "title": "Vandych - Jill Valentine (Resident Evil)",
        "cover": "https://telegra.ph/file/2c0c7e0dfab30304a16ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38782",
        "pageSeq": 38782
    },
    {
        "IDcode": 38783,
        "title": "Sally Dorasnow - Ayaka (Azur Lane)",
        "cover": "https://telegra.ph/file/666297b4ca9caff1aa5b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38783",
        "pageSeq": 38783
    },
    {
        "IDcode": 38784,
        "title": "Miih - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/562c36ab5e35d696342e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38784",
        "pageSeq": 38784
    },
    {
        "IDcode": 38785,
        "title": "KuukoW - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/f5175e0d63a3c95c0798b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38785",
        "pageSeq": 38785
    },
    {
        "IDcode": 38786,
        "title": "二佐Nisa NO.115 Amagi (Azur Lane)",
        "cover": "https://telegra.ph/file/a8b7fe6798c456e5325c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38786",
        "pageSeq": 38786
    },
    {
        "IDcode": 38787,
        "title": "Caticornplay - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/bf3cee661002f19129747.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38787",
        "pageSeq": 38787
    },
    {
        "IDcode": 38788,
        "title": "Hane Ame - Ada Wong & St. Louis (Resident Evil & Azur Lane)",
        "cover": "https://telegra.ph/file/eb13b0c602094b6a20233.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38788",
        "pageSeq": 38788
    },
    {
        "IDcode": 38789,
        "title": "Nisa -No.118 Chiyoda (Azur Lane)",
        "cover": "https://telegra.ph/file/00d31871ac7c7bdfb392c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38789",
        "pageSeq": 38789
    },
    {
        "IDcode": 38790,
        "title": "Shirogane - Christmas (Random Cosplay)",
        "cover": "https://telegra.ph/file/1229d75e89c341df16f68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38790",
        "pageSeq": 38790
    },
    {
        "IDcode": 38791,
        "title": "Hane Ame - Ina (Hololive)",
        "cover": "https://telegra.ph/file/af9c0bb15b1c62236f19f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38791",
        "pageSeq": 38791
    },
    {
        "IDcode": 38792,
        "title": "Arty Huang - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/dc6d08970e6133b071c39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38792",
        "pageSeq": 38792
    },
    {
        "IDcode": 38793,
        "title": "KuukoW - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/6085b3f988b8990cc54fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38793",
        "pageSeq": 38793
    },
    {
        "IDcode": 38794,
        "title": "Shirogane - Asuka Casual (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/6922907e699d8e369b91d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38794",
        "pageSeq": 38794
    },
    {
        "IDcode": 38795,
        "title": "Shirogane - Makima (Chain Saw Man)",
        "cover": "https://telegra.ph/file/2b296d964412a865249d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38795",
        "pageSeq": 38795
    },
    {
        "IDcode": 38796,
        "title": "Hidori Rose - Cinnamon (Nekopara)",
        "cover": "https://telegra.ph/file/03486a099ed29fa567eb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38796",
        "pageSeq": 38796
    },
    {
        "IDcode": 38797,
        "title": "Tunlita 🇻🇳  - School Girl (Random Cosplay)",
        "cover": "https://telegra.ph/file/657c1f9c1e1b4f0a785c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38797",
        "pageSeq": 38797
    },
    {
        "IDcode": 38798,
        "title": "Octokuro - Cammy White (Street Fighter)",
        "cover": "https://telegra.ph/file/14ee8d9051009baa7e6bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38798",
        "pageSeq": 38798
    },
    {
        "IDcode": 38799,
        "title": "Hana Bunny - 2B Dark Nurse (Nier Autómata)",
        "cover": "https://telegra.ph/file/4c5d48b0c91ab2bc83cb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38799",
        "pageSeq": 38799
    },
    {
        "IDcode": 38800,
        "title": "蜜汁猫裘 Mizhimaoqiu - Bunny (Random Cosplay)",
        "cover": "https://telegra.ph/file/34d309bb934116e3c1a2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38800",
        "pageSeq": 38800
    },
    {
        "IDcode": 38801,
        "title": "Sunnyvier - Bunny (Random Cosplay)",
        "cover": "https://telegra.ph/file/b251d135c900d1ae30107.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38801",
        "pageSeq": 38801
    },
    {
        "IDcode": 38802,
        "title": "Akemi - Makima (Chain Saw Man)",
        "cover": "https://telegra.ph/file/8cc72978000c1328816b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38802",
        "pageSeq": 38802
    },
    {
        "IDcode": 38803,
        "title": "Mo Lan - Kashino (Azur Lane)",
        "cover": "https://telegra.ph/file/296112c656e54350db9eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38803",
        "pageSeq": 38803
    },
    {
        "IDcode": 38804,
        "title": "Vandych - G3A3 (Girl's Frontline)",
        "cover": "https://telegra.ph/file/0e39d55bb9cb88b1d8594.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38804",
        "pageSeq": 38804
    },
    {
        "IDcode": 38805,
        "title": "Sophie Valentine - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/bd9c1c50936dfa2f9b9cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38805",
        "pageSeq": 38805
    },
    {
        "IDcode": 38806,
        "title": "Chunmomo - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/79099ed6c627878bd2302.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38806",
        "pageSeq": 38806
    },
    {
        "IDcode": 38807,
        "title": "Mizhimaoqiu - Mataro Bunny Christmas (Random Cosplay)",
        "cover": "https://telegra.ph/file/4d8941cc7d5842111f4f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38807",
        "pageSeq": 38807
    },
    {
        "IDcode": 38808,
        "title": "Shirogane - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/1611aab199e25f20de26c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38808",
        "pageSeq": 38808
    },
    {
        "IDcode": 38809,
        "title": "Kerocchi - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/d8de5199b7a123a006895.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38809",
        "pageSeq": 38809
    }
];
