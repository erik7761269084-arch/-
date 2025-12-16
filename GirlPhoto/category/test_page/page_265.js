// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 48572,
        "title": "[铃木美咲(Misaki Suzuki)] 美脚的赐福 姬子篇 - Page 1",
        "cover": "https://telegra.ph/file/de791cb28ceed1f9315ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48572",
        "pageSeq": 48572
    },
    {
        "IDcode": 48573,
        "title": "Smile Bibison - Houshou Marine - Page 1",
        "cover": "https://telegra.ph/file/837dc122f64da8eb95aa4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48573",
        "pageSeq": 48573
    },
    {
        "IDcode": 48574,
        "title": "蜜汁猫裘 - 毒蛇 - Page 1",
        "cover": "https://telegra.ph/file/d3744dd8a70a89bdae128.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48574",
        "pageSeq": 48574
    },
    {
        "IDcode": 48575,
        "title": "莱可Raika - 原神 宵宮 - Page 1",
        "cover": "https://telegra.ph/file/d264251519953435b3606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48575",
        "pageSeq": 48575
    },
    {
        "IDcode": 48576,
        "title": "Sayo Momo - Saki - Page 1",
        "cover": "https://telegra.ph/file/097410ea4d82ebd7d3688.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48576",
        "pageSeq": 48576
    },
    {
        "IDcode": 48577,
        "title": "Sayo Momo - Esdeath - Page 1",
        "cover": "https://telegra.ph/file/7530720a22f1053bd1476.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48577",
        "pageSeq": 48577
    },
    {
        "IDcode": 48578,
        "title": "Lela Sohna - Kobeni Higashiyama - Page 1",
        "cover": "https://telegra.ph/file/d0fd8c987157f58e651c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48578",
        "pageSeq": 48578
    },
    {
        "IDcode": 48579,
        "title": "KuukoW - Ayaka - Page 1",
        "cover": "https://telegra.ph/file/2dccb2ed4249e7c28f7f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48579",
        "pageSeq": 48579
    },
    {
        "IDcode": 48580,
        "title": "Itchika Red-Beryl - Keqing - Page 1",
        "cover": "https://telegra.ph/file/f400fb65e6e652786d0e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48580",
        "pageSeq": 48580
    },
    {
        "IDcode": 48581,
        "title": "Wanco - Uruha Rushia - Page 1",
        "cover": "https://telegra.ph/file/34fe8d614db7d6ba38e7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48581",
        "pageSeq": 48581
    },
    {
        "IDcode": 48582,
        "title": "趴趴捣蛋陌 柴郡 - Page 1",
        "cover": "https://telegra.ph/file/0539c4875b867c0bdb8d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48582",
        "pageSeq": 48582
    },
    {
        "IDcode": 48583,
        "title": "KuukoW - Navia (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/dbaaa9752383f7c23f7a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48583",
        "pageSeq": 48583
    },
    {
        "IDcode": 48584,
        "title": "Kaya Huang -愛宕兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/324537a2d91f0e8822478.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48584",
        "pageSeq": 48584
    },
    {
        "IDcode": 48585,
        "title": "Umeko J - Mitsuri - Page 1",
        "cover": "https://telegra.ph/file/e997e4bd602d83085d8cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48585",
        "pageSeq": 48585
    },
    {
        "IDcode": 48586,
        "title": "Pyoncos - Eula - Genshin Impact - Page 1",
        "cover": "https://telegra.ph/file/f9be90808df0768b0a2cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48586",
        "pageSeq": 48586
    },
    {
        "IDcode": 48587,
        "title": "Yoshinobi - Lucoa Xmas - Page 1",
        "cover": "https://telegra.ph/file/34f70060935ae4d0d16fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48587",
        "pageSeq": 48587
    },
    {
        "IDcode": 48588,
        "title": "[eliza喵喵] Raiden - Page 1",
        "cover": "https://telegra.ph/file/e4372e2f7ad4d073bf918.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48588",
        "pageSeq": 48588
    },
    {
        "IDcode": 48589,
        "title": "[Riie Nana] Sucrose - Page 1",
        "cover": "https://telegra.ph/file/0dae3d1df14d5e6f4ffae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48589",
        "pageSeq": 48589
    },
    {
        "IDcode": 48590,
        "title": "Vinnegal - Nyotengu - Page 1",
        "cover": "https://telegra.ph/file/3ae1d8d7fc504d40ab866.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48590",
        "pageSeq": 48590
    },
    {
        "IDcode": 48591,
        "title": "阿薰kaOri - 黑兽 [70P-1.65G] - Page 1",
        "cover": "https://telegra.ph/file/33ccc58306e260ea50f63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48591",
        "pageSeq": 48591
    },
    {
        "IDcode": 48592,
        "title": "Hinata2000 - Nigguang - Page 1",
        "cover": "https://telegra.ph/file/6a895ecafa4ef89f2e694.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48592",
        "pageSeq": 48592
    },
    {
        "IDcode": 48593,
        "title": "Sayo Momo - Agir - Page 1",
        "cover": "https://telegra.ph/file/8b304045771375c75d78b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48593",
        "pageSeq": 48593
    },
    {
        "IDcode": 48594,
        "title": "ZinieQ - Klara - Page 1",
        "cover": "https://telegra.ph/file/5edc906504674ffbdf3e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48594",
        "pageSeq": 48594
    },
    {
        "IDcode": 48595,
        "title": "ZinieQ - Riamu Yumemi - Page 1",
        "cover": "https://telegra.ph/file/c59229161f765d96678dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48595",
        "pageSeq": 48595
    },
    {
        "IDcode": 48596,
        "title": "Tiny Asa - Nurse 2B - Page 1",
        "cover": "https://telegra.ph/file/2640f2ca48c1ea2e909e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48596",
        "pageSeq": 48596
    },
    {
        "IDcode": 48597,
        "title": "Hinata2000 - Keqing - Page 1",
        "cover": "https://telegra.ph/file/905001dce87e83c39f22e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48597",
        "pageSeq": 48597
    },
    {
        "IDcode": 48598,
        "title": "Hinata2000 - Tamamo - Page 1",
        "cover": "https://telegra.ph/file/efb945fd1d15e8b313dc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48598",
        "pageSeq": 48598
    },
    {
        "IDcode": 48599,
        "title": "UmekoJ - Hu Tao - Page 1",
        "cover": "https://telegra.ph/file/347b5a9f7499edbe9f905.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48599",
        "pageSeq": 48599
    },
    {
        "IDcode": 48600,
        "title": "Vinnegal - Yuzuriha - Page 1",
        "cover": "https://telegra.ph/file/1e2e869a983a6d5855b16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48600",
        "pageSeq": 48600
    },
    {
        "IDcode": 48601,
        "title": "Hinata2000 - Tamamo Dancer - Page 1",
        "cover": "https://telegra.ph/file/5fc893628cf90bcbc94d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48601",
        "pageSeq": 48601
    },
    {
        "IDcode": 48602,
        "title": "Hana Bunny - Yor Forger (Spy X Family) Bunny Suit - Page 1",
        "cover": "https://telegra.ph/file/443fc66dcc3dd40014b4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48602",
        "pageSeq": 48602
    },
    {
        "IDcode": 48603,
        "title": "Tiny Asa - Hoshino Ai - Page 1",
        "cover": "https://telegra.ph/file/58460f5385b82ca820b6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48603",
        "pageSeq": 48603
    },
    {
        "IDcode": 48604,
        "title": "Hana Bunny - Asuna -Ichinose - Page 1",
        "cover": "https://telegra.ph/file/69db4535a679da386dd2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48604",
        "pageSeq": 48604
    },
    {
        "IDcode": 48605,
        "title": "咬一口兔娘 -『大慈树王』 genshin impact - Page 1",
        "cover": "https://telegra.ph/file/48f01193322f9391734a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48605",
        "pageSeq": 48605
    },
    {
        "IDcode": 48606,
        "title": "咬一口兔娘 -『恰巴耶夫』 Azurlane - Page 1",
        "cover": "https://telegra.ph/file/d1b340bf6d2ef88d88a60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48606",
        "pageSeq": 48606
    },
    {
        "IDcode": 48607,
        "title": "草神纳西妲 - Page 1",
        "cover": "https://telegra.ph/file/1e2a70137efb6c1f5cd33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48607",
        "pageSeq": 48607
    },
    {
        "IDcode": 48608,
        "title": "禅院熏  飞鸟马时[44P-87M] - Page 1",
        "cover": "https://telegra.ph/file/16d21c2e7547ee829bf37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48608",
        "pageSeq": 48608
    },
    {
        "IDcode": 48609,
        "title": "Alina Becker - Chun-Li - Page 1",
        "cover": "https://telegra.ph/file/d45406847a5211a41429d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48609",
        "pageSeq": 48609
    },
    {
        "IDcode": 48610,
        "title": "林书辞 - 黄豆粉 - Page 1",
        "cover": "https://telegra.ph/file/b3f30110eb3ce52ff2b87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48610",
        "pageSeq": 48610
    },
    {
        "IDcode": 48611,
        "title": "[Jocelyn] Lisa - Page 1",
        "cover": "https://telegra.ph/file/a1f83b65c8c16af9741aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48611",
        "pageSeq": 48611
    },
    {
        "IDcode": 48612,
        "title": "LepALuli2kVN(Lepaudam) - 海洋水手服 - Page 1",
        "cover": "https://telegra.ph/file/8afae58424addab088b79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48612",
        "pageSeq": 48612
    },
    {
        "IDcode": 48613,
        "title": "LepALuli2kVN(Lepaudam) - DVA - Page 1",
        "cover": "https://telegra.ph/file/e906029e7404266222339.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48613",
        "pageSeq": 48613
    },
    {
        "IDcode": 48614,
        "title": "KuukoW - Ankha - Page 1",
        "cover": "https://telegra.ph/file/4ce8e72afb6b77445214d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48614",
        "pageSeq": 48614
    },
    {
        "IDcode": 48615,
        "title": "Arty Huang - Bride Ganyu - Page 1",
        "cover": "https://telegra.ph/file/545d250d5f466a0219105.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48615",
        "pageSeq": 48615
    },
    {
        "IDcode": 48616,
        "title": "Hinata2000 - Ryzu-kyun - Page 1",
        "cover": "https://telegra.ph/file/e9471fd025ead934f671d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48616",
        "pageSeq": 48616
    },
    {
        "IDcode": 48617,
        "title": "Tiny Asa - Anis - Page 1",
        "cover": "https://telegra.ph/file/cb105a9baa26a21280868.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48617",
        "pageSeq": 48617
    },
    {
        "IDcode": 48618,
        "title": "Tiny Asa - Raiden Shogun - Page 1",
        "cover": "https://telegra.ph/file/3a6aa44b7c0643946b646.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48618",
        "pageSeq": 48618
    },
    {
        "IDcode": 48619,
        "title": "[切切Celia] ルピー - Page 1",
        "cover": "https://telegra.ph/file/a5a0b7d8f9c3753b3c889.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48619",
        "pageSeq": 48619
    },
    {
        "IDcode": 48620,
        "title": "Hidori Rose & Jean Wanwan - August von Parseval & Noshiro - Page 1",
        "cover": "https://telegra.ph/file/fcea97850da279e6de21e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48620",
        "pageSeq": 48620
    },
    {
        "IDcode": 48621,
        "title": "PoppaChan - Peach - Page 1",
        "cover": "https://telegra.ph/file/d09c0ded753cffcda9c44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48621",
        "pageSeq": 48621
    },
    {
        "IDcode": 48622,
        "title": "rizuna - 10月合集 - Page 1",
        "cover": "https://telegra.ph/file/a4bdafeb70a3c0b208b50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48622",
        "pageSeq": 48622
    },
    {
        "IDcode": 48623,
        "title": "麻花麻花酱 - Rukhadevata - Page 1",
        "cover": "https://telegra.ph/file/65572992d322b579484ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48623",
        "pageSeq": 48623
    },
    {
        "IDcode": 48624,
        "title": "Vinnegal - Beatrice - Page 1",
        "cover": "https://telegra.ph/file/5bd382a965fa0e12e4443.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48624",
        "pageSeq": 48624
    },
    {
        "IDcode": 48625,
        "title": "Vinnegal - Raven - Page 1",
        "cover": "https://telegra.ph/file/384b09c272fd52433a00a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48625",
        "pageSeq": 48625
    },
    {
        "IDcode": 48626,
        "title": "Nookkiizz - Alice - Page 1",
        "cover": "https://telegra.ph/file/ba42220262f4480d33426.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48626",
        "pageSeq": 48626
    },
    {
        "IDcode": 48627,
        "title": "Tiny Asa - Ganyu Cowkini - Page 1",
        "cover": "https://telegra.ph/file/bdda5f8b8aa07a04159e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48627",
        "pageSeq": 48627
    },
    {
        "IDcode": 48628,
        "title": "半半子 – Automataヨルハ二号B型 白いドレス - Page 1",
        "cover": "https://telegra.ph/file/6a6dfd2f62a0fdae2f7b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48628",
        "pageSeq": 48628
    },
    {
        "IDcode": 48629,
        "title": "ZinieQ - Eula - Page 1",
        "cover": "https://telegra.ph/file/ba184804a9b34c9bea3e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48629",
        "pageSeq": 48629
    },
    {
        "IDcode": 48630,
        "title": "Arty亚缇 - Tier - Page 1",
        "cover": "https://telegra.ph/file/904566b5962cf046644af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48630",
        "pageSeq": 48630
    },
    {
        "IDcode": 48631,
        "title": "Potato Godzilla - Viper - Page 1",
        "cover": "https://telegra.ph/file/521755f09adad5be87118.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48631",
        "pageSeq": 48631
    },
    {
        "IDcode": 48632,
        "title": "[なごみ亭ちゅちゅ] Ram - Page 1",
        "cover": "https://telegra.ph/file/caca56a7206f8e904c356.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48632",
        "pageSeq": 48632
    },
    {
        "IDcode": 48633,
        "title": "kyokoyaki - Alice Nikke - Page 1",
        "cover": "https://telegra.ph/file/6015df0999475a2aeafb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48633",
        "pageSeq": 48633
    },
    {
        "IDcode": 48634,
        "title": "Nookkiizz - Bride Yae Miko - Page 1",
        "cover": "https://telegra.ph/file/4f2648e9349e9711cbfee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48634",
        "pageSeq": 48634
    },
    {
        "IDcode": 48635,
        "title": "[Xidaidai 习呆呆] 胡桃 (永劫无间) [Decensored] - Page 1",
        "cover": "https://telegra.ph/file/9ab806e381da7e18f9ee7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48635",
        "pageSeq": 48635
    },
    {
        "IDcode": 48636,
        "title": "Nookkiizz - Oide yo Mizuryuu Kei Land - Page 1",
        "cover": "https://telegra.ph/file/7c11055329154becc1794.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48636",
        "pageSeq": 48636
    },
    {
        "IDcode": 48637,
        "title": "Sayo Momo - Ada Wong RE4 in Secret Mission - Page 1",
        "cover": "https://telegra.ph/file/beaf7d1d1dfa1fae921cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48637",
        "pageSeq": 48637
    },
    {
        "IDcode": 48638,
        "title": "Xidaidai - Lynette - Page 1",
        "cover": "https://telegra.ph/file/63ca2960aeb3a625b3901.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48638",
        "pageSeq": 48638
    },
    {
        "IDcode": 48639,
        "title": "小仓千代w - Kashino - Page 1",
        "cover": "https://telegra.ph/file/1a3c2a3cf3877291622ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48639",
        "pageSeq": 48639
    },
    {
        "IDcode": 48640,
        "title": "小仓千代w - Shinano - Page 1",
        "cover": "https://telegra.ph/file/7a6a2251ae0b7a025790a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48640",
        "pageSeq": 48640
    },
    {
        "IDcode": 48641,
        "title": "小仓千代w - Unzen bikini - Page 1",
        "cover": "https://telegra.ph/file/4f042fc4aa2a36f860ab6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48641",
        "pageSeq": 48641
    },
    {
        "IDcode": 48642,
        "title": "水淼Aqua-Fantia-20231125 ⚜️剣の乙女⚜️ - Page 1",
        "cover": "https://telegra.ph/file/477a16316f00a7a1036c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48642",
        "pageSeq": 48642
    },
    {
        "IDcode": 48643,
        "title": "Potato Godzilla - Devil Ganyu - Page 1",
        "cover": "https://telegra.ph/file/a8481ec59b109e7448e09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48643",
        "pageSeq": 48643
    },
    {
        "IDcode": 48644,
        "title": "Tokar - Blanc - Page 1",
        "cover": "https://telegra.ph/file/46b832c4d0cd0f2794648.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48644",
        "pageSeq": 48644
    },
    {
        "IDcode": 48645,
        "title": "[羽生三未] 逸仙 - Page 1",
        "cover": "https://telegra.ph/file/f0628e44f0d35a2003811.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48645",
        "pageSeq": 48645
    },
    {
        "IDcode": 48646,
        "title": "Candy ball - Le Malin - Page 1",
        "cover": "https://telegra.ph/file/f3ff8f09a4136498bd0c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48646",
        "pageSeq": 48646
    },
    {
        "IDcode": 48647,
        "title": "黑白御猫 柴郡旗袍 - Page 1",
        "cover": "https://telegra.ph/file/28067adc6f04a4779eeb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48647",
        "pageSeq": 48647
    },
    {
        "IDcode": 48648,
        "title": "AZURE - PEKORA BUNNY - Page 1",
        "cover": "https://telegra.ph/file/8ff8eb90411c05b3131da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48648",
        "pageSeq": 48648
    },
    {
        "IDcode": 48649,
        "title": "ShaeUnderscore - Mordred - Page 1",
        "cover": "https://telegra.ph/file/757ee4f98c59866a6f4bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48649",
        "pageSeq": 48649
    },
    {
        "IDcode": 48650,
        "title": "Xidaidai - Mem-Cho - Page 1",
        "cover": "https://telegra.ph/file/a6af94513560c9b13bfeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48650",
        "pageSeq": 48650
    },
    {
        "IDcode": 48651,
        "title": "Tiny Asa - Tsunade - Page 1",
        "cover": "https://telegra.ph/file/567d0947822b100bc8a6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48651",
        "pageSeq": 48651
    },
    {
        "IDcode": 48652,
        "title": "咬一口兔娘ovo - 岛风的修整 - Page 1",
        "cover": "https://telegra.ph/file/33c5346188d4d1d681904.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48652",
        "pageSeq": 48652
    },
    {
        "IDcode": 48653,
        "title": "Yangyi_Yuzuriha - Page 1",
        "cover": "https://telegra.ph/file/d1034925d2690d54742c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48653",
        "pageSeq": 48653
    },
    {
        "IDcode": 48654,
        "title": "咬一口兔娘ovo 『喜多川兔女郎』Be My Poi - Page 1",
        "cover": "https://telegra.ph/file/a020420ce139e376083c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48654",
        "pageSeq": 48654
    },
    {
        "IDcode": 48655,
        "title": "Mikomin - Peach - Page 1",
        "cover": "https://telegra.ph/file/b6ca74c3caa7c14ec2020.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48655",
        "pageSeq": 48655
    },
    {
        "IDcode": 48656,
        "title": "[麻花麻花酱] 碧蓝妮姬 海伦娜 Azur Lane Nikke Helena - Page 1",
        "cover": "https://telegra.ph/file/f61014f0965246b3ff1c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48656",
        "pageSeq": 48656
    },
    {
        "IDcode": 48657,
        "title": "miaomjiang rikka takanashi - Page 1",
        "cover": "https://telegra.ph/file/d54d839343dc6699407d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48657",
        "pageSeq": 48657
    },
    {
        "IDcode": 48658,
        "title": "阿包也是兔娘 -  Azur Lane Otto von Alvensleben - Page 1",
        "cover": "https://telegra.ph/file/21cf9a64c49066e60626c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48658",
        "pageSeq": 48658
    },
    {
        "IDcode": 48659,
        "title": "Nonsummerjack - Owari - Page 1",
        "cover": "https://telegra.ph/file/d0faf8a15e2d0e08ab5fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48659",
        "pageSeq": 48659
    },
    {
        "IDcode": 48660,
        "title": "Yura - 2B Bride - Page 1",
        "cover": "https://telegra.ph/file/42695bd8c0acfe5b328c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48660",
        "pageSeq": 48660
    },
    {
        "IDcode": 48661,
        "title": "BLUECAKE Bambi - Diesel's Infinite Rail - Page 1",
        "cover": "https://telegra.ph/file/079232232be2e5d61a356.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48661",
        "pageSeq": 48661
    },
    {
        "IDcode": 48662,
        "title": "咬一口兔娘ovo 梳妆的大小姐-可畏 - Page 1",
        "cover": "https://telegra.ph/file/60857aefee229b1099210.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48662",
        "pageSeq": 48662
    },
    {
        "IDcode": 48663,
        "title": "咬一口兔娘ovo 国家队02泳装 - Page 1",
        "cover": "https://telegra.ph/file/3297e7d2020a08b383ad1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48663",
        "pageSeq": 48663
    },
    {
        "IDcode": 48664,
        "title": "okita rinka - 2B maid - Page 1",
        "cover": "https://telegra.ph/file/31004639db942d4a76820.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48664",
        "pageSeq": 48664
    },
    {
        "IDcode": 48665,
        "title": "Helly Valentine - Yor Forger Selfies - Page 1",
        "cover": "https://telegra.ph/file/57b2ae3fbb020b912e82f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48665",
        "pageSeq": 48665
    },
    {
        "IDcode": 48666,
        "title": "南宫 Nangong - 新泽西(花园) - Page 1",
        "cover": "https://telegra.ph/file/536a013592056ba8867d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48666",
        "pageSeq": 48666
    },
    {
        "IDcode": 48667,
        "title": "Comonun - Nazuna - Page 1",
        "cover": "https://telegra.ph/file/3e77a3fca20b09c1502c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48667",
        "pageSeq": 48667
    },
    {
        "IDcode": 48668,
        "title": "Helly Valentine - Elsa selfies - Page 1",
        "cover": "https://telegra.ph/file/f9c3097650de1f0cd7809.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48668",
        "pageSeq": 48668
    },
    {
        "IDcode": 48669,
        "title": "阿包也是兔娘 NO.035 - 少女前线 PA15翠雀媚 - Page 1",
        "cover": "https://telegra.ph/file/9ea9a7261eaaa678498e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48669",
        "pageSeq": 48669
    },
    {
        "IDcode": 48670,
        "title": "沖田凜花 - 塞蕾斯汀 - Page 1",
        "cover": "https://telegra.ph/file/4e836ceca8139f45b8a7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48670",
        "pageSeq": 48670
    },
    {
        "IDcode": 48671,
        "title": "Comonun - Yu Miaoyi - Page 1",
        "cover": "https://telegra.ph/file/9bb73d575beb39e2843ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48671",
        "pageSeq": 48671
    }
];
