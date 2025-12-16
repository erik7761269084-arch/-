// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41566,
        "title": "Alcololi - Ryuko Matoi (Kill la Kill)",
        "cover": "https://telegra.ph/file/cf17837b43f7f2aeaccf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41566",
        "pageSeq": 41566
    },
    {
        "IDcode": 41567,
        "title": "Peachuu - Navia (Genshin Impact)",
        "cover": "https://telegra.ph/file/bc0f449eda132a9d6c477.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41567",
        "pageSeq": 41567
    },
    {
        "IDcode": 41568,
        "title": "Mikomin - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/7b78c421eba525e7e1632.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41568",
        "pageSeq": 41568
    },
    {
        "IDcode": 41569,
        "title": "Jean Wanwan - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/2e6bb4a0476213697f130.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41569",
        "pageSeq": 41569
    },
    {
        "IDcode": 41570,
        "title": "Enzisummers - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/12ab7e6f5fd6598147e16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41570",
        "pageSeq": 41570
    },
    {
        "IDcode": 41571,
        "title": "金鱼kinngyo 夏日午后",
        "cover": "https://telegra.ph/file/0957c895a4cca0fc27f0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41571",
        "pageSeq": 41571
    },
    {
        "IDcode": 41572,
        "title": "小瑶幺幺 Xiao Yao Yao - Fu Xuan (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/6fd2d47c0a594d3b7f6f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41572",
        "pageSeq": 41572
    },
    {
        "IDcode": 41573,
        "title": "ZinieQ - Ulrich Vo Hutten (Azur Lane)",
        "cover": "https://telegra.ph/file/706101e6bc8e00175c4b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41573",
        "pageSeq": 41573
    },
    {
        "IDcode": 41574,
        "title": "咬一口兔娘 Niantutu - 光荣凉夜春雪新年Glorious (Azur Lane)",
        "cover": "https://telegra.ph/file/2450a0971b892cfb31110.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41574",
        "pageSeq": 41574
    },
    {
        "IDcode": 41575,
        "title": "Peachuu - Ubel (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/e6f59bd81e8974fabb28a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41575",
        "pageSeq": 41575
    },
    {
        "IDcode": 41576,
        "title": "Lady Oichi - Reina Mishima (Tekken)",
        "cover": "https://telegra.ph/file/f63e1ca8db6d0f7953987.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41576",
        "pageSeq": 41576
    },
    {
        "IDcode": 41577,
        "title": "Lady Melamori - Pramanix (Arknights)",
        "cover": "https://telegra.ph/file/c3893a1af2575a3df01af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41577",
        "pageSeq": 41577
    },
    {
        "IDcode": 41578,
        "title": "Potato Godzilla - Himeko (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/b7e271110e3db0a38f8de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41578",
        "pageSeq": 41578
    },
    {
        "IDcode": 41579,
        "title": "Ino - Hana Midorikawa (Prison School)",
        "cover": "https://telegra.ph/file/7199bb411a5a70a44572c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41579",
        "pageSeq": 41579
    },
    {
        "IDcode": 41580,
        "title": "SheUnderscore & MiraShiver - Panty & Stocking (Panty and Stocking with Garterbelt)",
        "cover": "https://telegra.ph/file/e07d3d8d9802eab66cea9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41580",
        "pageSeq": 41580
    },
    {
        "IDcode": 41581,
        "title": "Hidori Rose - Uruha Rushia (Hololive)",
        "cover": "https://telegra.ph/file/479e28d81fa79b80da8e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41581",
        "pageSeq": 41581
    },
    {
        "IDcode": 41582,
        "title": "Carry Key - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/6f9d5225080654b284332.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41582",
        "pageSeq": 41582
    },
    {
        "IDcode": 41583,
        "title": "Yoshinobi - Elf Maid",
        "cover": "https://telegra.ph/file/d23b4d6c7b6aa7a179f85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41583",
        "pageSeq": 41583
    },
    {
        "IDcode": 41584,
        "title": "Xiao Ying - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/57b68f6fca0a986accbb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41584",
        "pageSeq": 41584
    },
    {
        "IDcode": 41585,
        "title": "Shaeunderscore - Sucrose (Genshin Impact)",
        "cover": "https://telegra.ph/file/37beb4ff119bb66dc8f48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41585",
        "pageSeq": 41585
    },
    {
        "IDcode": 41586,
        "title": "Sayo Momo - Princess Zelda (The Legeng Of Zelda)",
        "cover": "https://telegra.ph/file/920735588ed0fc848254f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41586",
        "pageSeq": 41586
    },
    {
        "IDcode": 41587,
        "title": "Byoru - Navia (Genshin Impact)",
        "cover": "https://telegra.ph/file/34047fbdb3a0ebeab54c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41587",
        "pageSeq": 41587
    },
    {
        "IDcode": 41588,
        "title": "Okita Rinka - Yuzuha Hirose",
        "cover": "https://telegra.ph/file/ba00508fe0822ff801b36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41588",
        "pageSeq": 41588
    },
    {
        "IDcode": 41589,
        "title": "Sweetie Fox - Vault Dweller (Fallout)",
        "cover": "https://telegra.ph/file/1fbe46cb967e7b7cdf02b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41589",
        "pageSeq": 41589
    },
    {
        "IDcode": 41590,
        "title": "Carry Key - Bunny Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/248c1b459ebee2c7401ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41590",
        "pageSeq": 41590
    },
    {
        "IDcode": 41591,
        "title": "Byoru - Shiori Novella (Hololive)",
        "cover": "https://telegra.ph/file/cf761970c59a85c6e095c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41591",
        "pageSeq": 41591
    },
    {
        "IDcode": 41592,
        "title": "Lady Oichi - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/ea4c4c8a8a3777541d01e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41592",
        "pageSeq": 41592
    },
    {
        "IDcode": 41593,
        "title": "Queenie - Magia Baiser / Utena (Mahou Shoujo ni Akogarete)",
        "cover": "https://telegra.ph/file/a2f1d968319141bf248f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41593",
        "pageSeq": 41593
    },
    {
        "IDcode": 41594,
        "title": "Ulichan - Ramona (Scott Pilgrim)",
        "cover": "https://telegra.ph/file/40f90027d5f76ed0ef649.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41594",
        "pageSeq": 41594
    },
    {
        "IDcode": 41595,
        "title": "Caticornplay - Holo (Spice And Wolf)",
        "cover": "https://telegra.ph/file/5d7781a1f030b213ed127.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41595",
        "pageSeq": 41595
    },
    {
        "IDcode": 41596,
        "title": "黏黏团子兔 Niantutu - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/ffcf58e2838fcf12cec7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41596",
        "pageSeq": 41596
    },
    {
        "IDcode": 41597,
        "title": "Peachmilky - Milk Cowgirl",
        "cover": "https://telegra.ph/file/6c3320629e474fa0a2963.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41597",
        "pageSeq": 41597
    },
    {
        "IDcode": 41598,
        "title": "Rocksy Light - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/a1d67aacc426cc75ab3a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41598",
        "pageSeq": 41598
    },
    {
        "IDcode": 41599,
        "title": "Neppu - Ubel (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/918db63deae65ab481f7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41599",
        "pageSeq": 41599
    },
    {
        "IDcode": 41600,
        "title": "封疆疆v - 雷电将军 Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/2fb2fad1ce51ed2618480.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41600",
        "pageSeq": 41600
    },
    {
        "IDcode": 41601,
        "title": "Alin Ma / Xenon - Sivir (League Of Legends)",
        "cover": "https://telegra.ph/file/f3052393a4d56c6645486.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41601",
        "pageSeq": 41601
    },
    {
        "IDcode": 41602,
        "title": "Yoshinobi - Strawberry bikini",
        "cover": "https://telegra.ph/file/0f495c5e05656c134fb93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41602",
        "pageSeq": 41602
    },
    {
        "IDcode": 41603,
        "title": "Alina Becker - Ghislaine (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/31d7657534722cb7807c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41603",
        "pageSeq": 41603
    },
    {
        "IDcode": 41604,
        "title": "Potato Godzilla - Kafka Lingerie (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/e3fedf2269275e1c5c16d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41604",
        "pageSeq": 41604
    },
    {
        "IDcode": 41605,
        "title": "九言 Jiuyan - Emilia & Black Swan (Re Zero / Honkai Star Rail)",
        "cover": "https://telegra.ph/file/a53171ac0f17973ea201e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41605",
        "pageSeq": 41605
    },
    {
        "IDcode": 41606,
        "title": "Alish Delish - Naughty Bimbo Student",
        "cover": "https://telegra.ph/file/d6dfb553d1ce86e391ec5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41606",
        "pageSeq": 41606
    },
    {
        "IDcode": 41607,
        "title": "Okita Rinka - Dog",
        "cover": "https://telegra.ph/file/d290bae914dbac4253bbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41607",
        "pageSeq": 41607
    },
    {
        "IDcode": 41608,
        "title": "Alina Becker - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/aa9b9808c38fe25f02a13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41608",
        "pageSeq": 41608
    },
    {
        "IDcode": 41609,
        "title": "Foxy Cosplay - Makise Kurisu (Steins;Gate)",
        "cover": "https://telegra.ph/file/473c15cc58c2f028f129b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41609",
        "pageSeq": 41609
    },
    {
        "IDcode": 41610,
        "title": "桜井宁宁 Sakurai Ning Ning - JK学妹",
        "cover": "https://telegra.ph/file/5d98a63f582b6dffc0ea1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41610",
        "pageSeq": 41610
    },
    {
        "IDcode": 41611,
        "title": "Mimsy - Rias Gremory (High School DxD)",
        "cover": "https://telegra.ph/file/2cb3fa40178076446fb47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41611",
        "pageSeq": 41611
    },
    {
        "IDcode": 41612,
        "title": "Tokar 浵卡 - Viper (Nikke)",
        "cover": "https://telegra.ph/file/5d59086d24a6605747244.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41612",
        "pageSeq": 41612
    },
    {
        "IDcode": 41613,
        "title": "Aery Tiefling - Ibuki Mioda (Danganronpa)",
        "cover": "https://telegra.ph/file/20682bd61c4e98baed3ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41613",
        "pageSeq": 41613
    },
    {
        "IDcode": 41614,
        "title": "Ciju - Yukong (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/5814ab34b617383e0a36d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41614",
        "pageSeq": 41614
    },
    {
        "IDcode": 41615,
        "title": "Amaimai - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/ca3e7fd5661beec85fadd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41615",
        "pageSeq": 41615
    },
    {
        "IDcode": 41616,
        "title": "Alin Ma / Xenon - Eliza (Tekken)",
        "cover": "https://telegra.ph/file/54a97070959388a31869e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41616",
        "pageSeq": 41616
    },
    {
        "IDcode": 41617,
        "title": "Alina Becker - Blair (Soul Eater)",
        "cover": "https://telegra.ph/file/18ec25292ee21e28677c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41617",
        "pageSeq": 41617
    },
    {
        "IDcode": 41618,
        "title": "Potato Godzilla - Student",
        "cover": "https://telegra.ph/file/01f173ee4f33cb9801444.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41618",
        "pageSeq": 41618
    },
    {
        "IDcode": 41619,
        "title": "CEO of Gothicc - Pieck (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/fb6cd5d6a54466e7089c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41619",
        "pageSeq": 41619
    },
    {
        "IDcode": 41620,
        "title": "Wanco - Nekomata Okayu (Hololive)",
        "cover": "https://telegra.ph/file/86771e245c166527012ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41620",
        "pageSeq": 41620
    },
    {
        "IDcode": 41621,
        "title": "Ino - Lala (To Love Ru)",
        "cover": "https://telegra.ph/file/5ec3d2249dfd54e2a7167.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41621",
        "pageSeq": 41621
    },
    {
        "IDcode": 41622,
        "title": "Candy Ball - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/6a597a3bfa09496ee7383.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41622",
        "pageSeq": 41622
    },
    {
        "IDcode": 41623,
        "title": "Kaya - Cow Quetzalcoatl (Kobayashi-san)",
        "cover": "https://telegra.ph/file/8895252733971c1b1b158.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41623",
        "pageSeq": 41623
    },
    {
        "IDcode": 41624,
        "title": "Bishoujomom - Atom Eve (Invisible)",
        "cover": "https://telegra.ph/file/c3db75192ceac22bd84b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41624",
        "pageSeq": 41624
    },
    {
        "IDcode": 41625,
        "title": "Alin Ma / Xenon - Alisa (God Eater)",
        "cover": "https://telegra.ph/file/38d365b47243efc207d91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41625",
        "pageSeq": 41625
    },
    {
        "IDcode": 41627,
        "title": "Shui Miao Aqua - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/2e5c372c3b82f52aede0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41627",
        "pageSeq": 41627
    },
    {
        "IDcode": 41628,
        "title": "Hidori Rose - Amelia Watson (Hololive)",
        "cover": "https://telegra.ph/file/867cf9d3057a3390565a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41628",
        "pageSeq": 41628
    },
    {
        "IDcode": 41629,
        "title": "Choi Ji Yun - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/33311dc1a901785bb1581.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41629",
        "pageSeq": 41629
    },
    {
        "IDcode": 41630,
        "title": "Hana Bunny - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/23674efb731557a25bdab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41630",
        "pageSeq": 41630
    },
    {
        "IDcode": 41631,
        "title": "Hidori Rose - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/d8764ec8cce762336a5ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41631",
        "pageSeq": 41631
    },
    {
        "IDcode": 41632,
        "title": "Potato Godzilla - Luigi (Mario bros)",
        "cover": "https://telegra.ph/file/c45563482ef6800552d41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41632",
        "pageSeq": 41632
    },
    {
        "IDcode": 41633,
        "title": "Miih - 2B Bikini (Nier Automata)",
        "cover": "https://telegra.ph/file/b24eb0f5b2ab8f095b969.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41633",
        "pageSeq": 41633
    },
    {
        "IDcode": 41634,
        "title": "Yuuhui 玉汇 - 新婚的妻子",
        "cover": "https://telegra.ph/file/b3a446533657249e82df0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41634",
        "pageSeq": 41634
    },
    {
        "IDcode": 41635,
        "title": "Xidaidai - Robin (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/a0d48f935065820612edd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41635",
        "pageSeq": 41635
    },
    {
        "IDcode": 41636,
        "title": "Potato Godzilla - Mario (Mario Bros)",
        "cover": "https://telegra.ph/file/b0e59f5740d9071eac0e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41636",
        "pageSeq": 41636
    },
    {
        "IDcode": 41637,
        "title": "Xiaoying - Ryuko Matoi (Kill la Kill)",
        "cover": "https://telegra.ph/file/d75b0ba5a4623f5b816ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41637",
        "pageSeq": 41637
    },
    {
        "IDcode": 41638,
        "title": "Alina Becker - Hitori Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/76c6452f73b60c54d9e73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41638",
        "pageSeq": 41638
    },
    {
        "IDcode": 41639,
        "title": "Alina Becker - Hinata Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/0c70afa8872ab01b69894.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41639",
        "pageSeq": 41639
    },
    {
        "IDcode": 41640,
        "title": "Sayo Momo - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/39e3e8326f9abd2ac805f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41640",
        "pageSeq": 41640
    },
    {
        "IDcode": 41641,
        "title": "Little Wicked - Elizabeth (Bioshock Infinite)",
        "cover": "https://telegra.ph/file/0e5c324f246335c0aaa46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41641",
        "pageSeq": 41641
    },
    {
        "IDcode": 41643,
        "title": "Queenie - Tifa Bikini (Final Fantasy)",
        "cover": "https://telegra.ph/file/059bef175134d19cc8a0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41643",
        "pageSeq": 41643
    },
    {
        "IDcode": 41644,
        "title": "Epicinternetgf - Ada Wong ( Resident Evil )",
        "cover": "https://telegra.ph/file/e569ed69f3dcb13c01242.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41644",
        "pageSeq": 41644
    },
    {
        "IDcode": 41645,
        "title": "Uri - Rio (Blue Archive)",
        "cover": "https://telegra.ph/file/bea37c63ef1414015424f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41645",
        "pageSeq": 41645
    },
    {
        "IDcode": 41646,
        "title": "Nyeupe - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/67a77fd2f754ad1e820d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41646",
        "pageSeq": 41646
    },
    {
        "IDcode": 41647,
        "title": "Helly Valentine - Archer Rin (Fate Grand Order)",
        "cover": "https://telegra.ph/file/99e695d5e9ef16c5fb060.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41647",
        "pageSeq": 41647
    },
    {
        "IDcode": 41648,
        "title": "Aokotan - Sagiri Izumi (Eromanga sensei)",
        "cover": "https://telegra.ph/file/303e9b8672bb7bfb243b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41648",
        "pageSeq": 41648
    },
    {
        "IDcode": 41649,
        "title": "Uri - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/bc7fb72d0dd9026afc367.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41649",
        "pageSeq": 41649
    },
    {
        "IDcode": 41650,
        "title": "Alina Becker - Jill Valentine (Resident Evil)",
        "cover": "https://telegra.ph/file/5f9558ffc87cbc7407ffb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41650",
        "pageSeq": 41650
    },
    {
        "IDcode": 41651,
        "title": "Alina Becker - Ann Takamaki (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/1f222c0611a089505c352.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41651",
        "pageSeq": 41651
    },
    {
        "IDcode": 41652,
        "title": "杨衣Yangyi - 黑山梗菜内衣 Black Lobelia (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/7c24acb98706811d7a51e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41652",
        "pageSeq": 41652
    },
    {
        "IDcode": 41653,
        "title": "Queenie - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/4ce2cfc0483da279fdf46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41653",
        "pageSeq": 41653
    },
    {
        "IDcode": 41654,
        "title": "Hane Ame - Eve (Stellar Blade)",
        "cover": "https://telegra.ph/file/978e6084fe367db54cca7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41654",
        "pageSeq": 41654
    },
    {
        "IDcode": 41655,
        "title": "Hane Ame - Takamiya Mio (Date A Live)",
        "cover": "https://telegra.ph/file/54e283f13e6c31f52c3fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41655",
        "pageSeq": 41655
    },
    {
        "IDcode": 41656,
        "title": "Xidaidai - Shigure Ui (Vtuber)",
        "cover": "https://telegra.ph/file/04f943543bcd33aba8a16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41656",
        "pageSeq": 41656
    },
    {
        "IDcode": 41657,
        "title": "BANBANKO - 彼女の制服 Vol.03 夏が恋しい",
        "cover": "https://telegra.ph/file/521b0604a4ec3b2568adf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41657",
        "pageSeq": 41657
    },
    {
        "IDcode": 41658,
        "title": "Kuro Kitsune - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/e7569e802074f61a4fa39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41658",
        "pageSeq": 41658
    },
    {
        "IDcode": 41659,
        "title": "芙莉蓮 Fulilian - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/8f56238433e83810e27a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41659",
        "pageSeq": 41659
    },
    {
        "IDcode": 41660,
        "title": "Kerocchi - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/8bf17ccf3400708028659.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41660",
        "pageSeq": 41660
    },
    {
        "IDcode": 41661,
        "title": "Hidori Rose - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/31156bfca3828d92827bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41661",
        "pageSeq": 41661
    },
    {
        "IDcode": 41662,
        "title": "Lenfried - Maid",
        "cover": "https://telegra.ph/file/47201829c348369e9f1af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41662",
        "pageSeq": 41662
    },
    {
        "IDcode": 41663,
        "title": "Caticornplay - Shiroko (Blue Archive)",
        "cover": "https://telegra.ph/file/86ff10a2a8e4bd7bae485.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41663",
        "pageSeq": 41663
    },
    {
        "IDcode": 41664,
        "title": "Umeko J - Tamaki (Fire Force)",
        "cover": "https://telegra.ph/file/c0c705863e18e519c6fa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41664",
        "pageSeq": 41664
    },
    {
        "IDcode": 41665,
        "title": "Shui Miao Aqua - Ubel (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/dece9baa7e46ae18bf0be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41665",
        "pageSeq": 41665
    },
    {
        "IDcode": 41666,
        "title": "Arty - Toki Police (Blue Archive)",
        "cover": "https://telegra.ph/file/9de865399ede6e14de3a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41666",
        "pageSeq": 41666
    },
    {
        "IDcode": 41667,
        "title": "Tsunnyanchan - Pekomama (Hololive)",
        "cover": "https://telegra.ph/file/a3e44bf05b9c070023af1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41667",
        "pageSeq": 41667
    }
];
