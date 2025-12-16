// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39627,
        "title": "Carry Key - Tracer (Overwatc)",
        "cover": "https://telegra.ph/file/249ceffe6906bb4ef94ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39627",
        "pageSeq": 39627
    },
    {
        "IDcode": 39628,
        "title": "Choi Ji Yun - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/f03fc03bad29a9f571db3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39628",
        "pageSeq": 39628
    },
    {
        "IDcode": 39629,
        "title": "Azuki - Shizuko (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/3394947825fc7b1809eec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39629",
        "pageSeq": 39629
    },
    {
        "IDcode": 39630,
        "title": "Hana Bunny - Dinner Date",
        "cover": "https://telegra.ph/file/1b24e89bce15b52476d73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39630",
        "pageSeq": 39630
    },
    {
        "IDcode": 39631,
        "title": "Yoshinobi - Hinata Swimsuit (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/a496a8cbaf70a1a780bd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39631",
        "pageSeq": 39631
    },
    {
        "IDcode": 39632,
        "title": "Hana Bunny - Boy Shirt",
        "cover": "https://telegra.ph/file/4f0a6b9b3f7a14b2218e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39632",
        "pageSeq": 39632
    },
    {
        "IDcode": 39633,
        "title": "LoliSama - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/cfae1dbe5fda3ee34cf98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39633",
        "pageSeq": 39633
    },
    {
        "IDcode": 39634,
        "title": "Yoshinobi - Velma (Scooby Doo)",
        "cover": "https://telegra.ph/file/73ce8442cb94ba49a2b08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39634",
        "pageSeq": 39634
    },
    {
        "IDcode": 39635,
        "title": "Hane Ame - Vermeil (Kinsou No Vermeil)",
        "cover": "https://telegra.ph/file/b3fcd98ae0104bef46685.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39635",
        "pageSeq": 39635
    },
    {
        "IDcode": 39636,
        "title": "Hokunaimeko - Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/80214395686ed01717f9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39636",
        "pageSeq": 39636
    },
    {
        "IDcode": 39637,
        "title": "Baozoumoziaa - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/e32c801315acce37f3a6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39637",
        "pageSeq": 39637
    },
    {
        "IDcode": 39638,
        "title": "KuukoW - New Jersey (Azur Lane)",
        "cover": "https://telegra.ph/file/5646c3198b6c04059955f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39638",
        "pageSeq": 39638
    },
    {
        "IDcode": 39639,
        "title": "Potato Godzilla - Xmas",
        "cover": "https://telegra.ph/file/b3e12780c663138e5c911.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39639",
        "pageSeq": 39639
    },
    {
        "IDcode": 39640,
        "title": "Chunmomo 蠢沫沫 - 深海少女 Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/f38b2f73893fe9c6aff82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39640",
        "pageSeq": 39640
    },
    {
        "IDcode": 39641,
        "title": "Okita Rinka 沖田凜花 - 雷電將軍 Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/cd291d8959baf589c6059.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39641",
        "pageSeq": 39641
    },
    {
        "IDcode": 39642,
        "title": "Hane Ame -  Original Summer Picnic 私服_夏日瑟瑟野餐",
        "cover": "https://telegra.ph/file/a7e57ad5a5b14385f5eb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39642",
        "pageSeq": 39642
    },
    {
        "IDcode": 39643,
        "title": "Azami - Veronica (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/30e0e9f088530ea1202c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39643",
        "pageSeq": 39643
    },
    {
        "IDcode": 39644,
        "title": "村上西瓜 - NO.001 多莉 Dori (Genshin Impact)",
        "cover": "https://telegra.ph/file/7032ddf8984fb98f0a367.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39644",
        "pageSeq": 39644
    },
    {
        "IDcode": 39645,
        "title": "Potato Godzilla - Kizuna Ai (Hololive)",
        "cover": "https://telegra.ph/file/4896b39fe283e06d55d50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39645",
        "pageSeq": 39645
    },
    {
        "IDcode": 39646,
        "title": "Chunmomo 蠢沫沫 - 审讯",
        "cover": "https://telegra.ph/file/6dfbb37fa0702e75db678.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39646",
        "pageSeq": 39646
    },
    {
        "IDcode": 39647,
        "title": "Azami - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/76cc1251b3088d8dc4931.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39647",
        "pageSeq": 39647
    },
    {
        "IDcode": 39648,
        "title": "Hane Ame - Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/fab376dc8e80ede1af759.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39648",
        "pageSeq": 39648
    },
    {
        "IDcode": 39649,
        "title": "Shui Miao Aqua - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/76e63e0d4a0f4cfa47ae3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39649",
        "pageSeq": 39649
    },
    {
        "IDcode": 39650,
        "title": "九言 - Uzuki Momoko",
        "cover": "https://telegra.ph/file/748e12f20cd96506e8308.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39650",
        "pageSeq": 39650
    },
    {
        "IDcode": 39651,
        "title": "Son Ye-Eun - Pocky Yenny",
        "cover": "https://telegra.ph/file/735ea7639b9defcadf820.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39651",
        "pageSeq": 39651
    },
    {
        "IDcode": 39652,
        "title": "Aery Tiefling - Sakura Haruno (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/87b1b4b3dc12ae2b7b1e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39652",
        "pageSeq": 39652
    },
    {
        "IDcode": 39653,
        "title": "Potato Godzilla - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/15ded3f576ea20a076c2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39653",
        "pageSeq": 39653
    },
    {
        "IDcode": 39654,
        "title": "Azami - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/808cb4a62becf63f81e79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39654",
        "pageSeq": 39654
    },
    {
        "IDcode": 39655,
        "title": "Potato Godzilla - Secretary",
        "cover": "https://telegra.ph/file/c2e672ce761e81ef07b15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39655",
        "pageSeq": 39655
    },
    {
        "IDcode": 39656,
        "title": "KuukoW - Laplus Darkness (Hololive)",
        "cover": "https://telegra.ph/file/4bf886b90aea947bc66b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39656",
        "pageSeq": 39656
    },
    {
        "IDcode": 39657,
        "title": "Chihiro - Airi (Onichichi)",
        "cover": "https://telegra.ph/file/443d329054bfb90788a5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39657",
        "pageSeq": 39657
    },
    {
        "IDcode": 39658,
        "title": "Vinnegal - Satsuki (Kill La Kill)",
        "cover": "https://telegra.ph/file/8a766de220030b6581209.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39658",
        "pageSeq": 39658
    },
    {
        "IDcode": 39659,
        "title": "Shui Miao Aqua - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/a5e78f93c6db87234acf1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39659",
        "pageSeq": 39659
    },
    {
        "IDcode": 39660,
        "title": "Byoru - Yamato (One Piece)",
        "cover": "https://telegra.ph/file/5247b171c541254cac13f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39660",
        "pageSeq": 39660
    },
    {
        "IDcode": 39661,
        "title": "Hoshilily - New Jersey (Azur Lane)",
        "cover": "https://telegra.ph/file/e48c43265d39c390e4ff8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39661",
        "pageSeq": 39661
    },
    {
        "IDcode": 39662,
        "title": "Nyako - Discipline Commiittee",
        "cover": "https://telegra.ph/file/1d0c29abaa03c267d29e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39662",
        "pageSeq": 39662
    },
    {
        "IDcode": 39663,
        "title": "Shiro Kitsune - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/de57d0b18c2c8b65f46de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39663",
        "pageSeq": 39663
    },
    {
        "IDcode": 39664,
        "title": "Shiro Kitsune - Nino (Go toubun no hanayome)",
        "cover": "https://telegra.ph/file/63e40403af8ef562f4c48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39664",
        "pageSeq": 39664
    },
    {
        "IDcode": 39665,
        "title": "KuukoW - Ring Flt",
        "cover": "https://telegra.ph/file/fa50371f544f3a96c557e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39665",
        "pageSeq": 39665
    },
    {
        "IDcode": 39666,
        "title": "橙子喵酱 - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/20b13137fbf50e73b9fbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39666",
        "pageSeq": 39666
    },
    {
        "IDcode": 39667,
        "title": "Aery Tiefling - Kim Possible (Kim Possible)",
        "cover": "https://telegra.ph/file/1b41410d4c380b2a324ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39667",
        "pageSeq": 39667
    },
    {
        "IDcode": 39668,
        "title": "Chihiro - Asagi Igawa (Taimanin Asagi/Mahou Kaiju Series)",
        "cover": "https://telegra.ph/file/92607ebcff3b5a10de8a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39668",
        "pageSeq": 39668
    },
    {
        "IDcode": 39669,
        "title": "Kaya Huang - Ishtar (Fate Grand Order)",
        "cover": "https://telegra.ph/file/49928c509a02be0258db3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39669",
        "pageSeq": 39669
    },
    {
        "IDcode": 39670,
        "title": "Lui Storm & Marjo Suicide - Power & Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/290ff0283beda6def2379.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39670",
        "pageSeq": 39670
    },
    {
        "IDcode": 39671,
        "title": "橙子喵酱 - Rem & Emilia (Re Zero)",
        "cover": "https://telegra.ph/file/6333c35b0bb522654afd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39671",
        "pageSeq": 39671
    },
    {
        "IDcode": 39672,
        "title": "Fantasy Factory - Miko Kurokawa",
        "cover": "https://telegra.ph/file/c6365c4202a9500b7359c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39672",
        "pageSeq": 39672
    },
    {
        "IDcode": 39673,
        "title": "Pattie - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/b01dad25d6a7d777d97dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39673",
        "pageSeq": 39673
    },
    {
        "IDcode": 39674,
        "title": "KuukoW - Merlin (Fate Grand Order)",
        "cover": "https://telegra.ph/file/71907b5fa46f67868f3e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39674",
        "pageSeq": 39674
    },
    {
        "IDcode": 39675,
        "title": "Potato Godzilla - White Lingerie",
        "cover": "https://telegra.ph/file/7e68656027e54211dcdaf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39675",
        "pageSeq": 39675
    },
    {
        "IDcode": 39676,
        "title": "Azami - Shuten Jiangshi (Fate Grand Order)",
        "cover": "https://telegra.ph/file/eb5ff03b2ed08567f286d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39676",
        "pageSeq": 39676
    },
    {
        "IDcode": 39677,
        "title": "Fantasy Factory - Tiger cheongsam",
        "cover": "https://telegra.ph/file/6e72dacba58a7c1d36cd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39677",
        "pageSeq": 39677
    },
    {
        "IDcode": 39678,
        "title": "Murakami - Setsuna (Kaifuku Jutsushi no Yarinaoshi)",
        "cover": "https://telegra.ph/file/c575534868e6054fdf3fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39678",
        "pageSeq": 39678
    },
    {
        "IDcode": 39679,
        "title": "小礼好困 - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/1cbcf2c3da2b94e0684b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39679",
        "pageSeq": 39679
    },
    {
        "IDcode": 39680,
        "title": "Mimi Chan - Son Goku (Dragon Ball)",
        "cover": "https://telegra.ph/file/c66bf5bf805f832957a35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39680",
        "pageSeq": 39680
    },
    {
        "IDcode": 39681,
        "title": "Hachi - Paimon (Genshin Impact)",
        "cover": "https://telegra.ph/file/ab9f2b435fe621ff76f34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39681",
        "pageSeq": 39681
    },
    {
        "IDcode": 39682,
        "title": "Byoru - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/be1dc838d9dc5a5d9f96e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39682",
        "pageSeq": 39682
    },
    {
        "IDcode": 39683,
        "title": "Byoru - Natigaru (Elf Village)",
        "cover": "https://telegra.ph/file/9486841947aa89b9242a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39683",
        "pageSeq": 39683
    },
    {
        "IDcode": 39684,
        "title": "Byoru - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/4be88963c15d38a96db07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39684",
        "pageSeq": 39684
    },
    {
        "IDcode": 39685,
        "title": "Niannian D - Prinz & Taiho (Azur Lane)",
        "cover": "https://telegra.ph/file/6d71ba77b5cd665fae3f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39685",
        "pageSeq": 39685
    },
    {
        "IDcode": 39686,
        "title": "Ino - Ishtar (Fate Grand Order)",
        "cover": "https://telegra.ph/file/177e5f3b9bf22719d28a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39686",
        "pageSeq": 39686
    },
    {
        "IDcode": 39687,
        "title": "Shirogane - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/b06c1daac6d1575bdb4d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39687",
        "pageSeq": 39687
    },
    {
        "IDcode": 39688,
        "title": "Kalinka Fox - Daenerys (Game Of Thrones)",
        "cover": "https://telegra.ph/file/d0173819f01aa54abc88d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39688",
        "pageSeq": 39688
    },
    {
        "IDcode": 39689,
        "title": "Fantasy Factory - Play Outdoors",
        "cover": "https://telegra.ph/file/d7e94f880ab6477bf83e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39689",
        "pageSeq": 39689
    },
    {
        "IDcode": 39691,
        "title": "Son Son - Isumi Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/3da579a7c3e0f4ec384fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39691",
        "pageSeq": 39691
    },
    {
        "IDcode": 39692,
        "title": "桜井宁宁 Sakurai Ningning - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/109ee153b662898d7cf38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39692",
        "pageSeq": 39692
    },
    {
        "IDcode": 39693,
        "title": "Murrning Glow - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/9f428e4ce3aa83b7b25a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39693",
        "pageSeq": 39693
    },
    {
        "IDcode": 39694,
        "title": "Candy Ball - Alice (Alice In Wonderlan)",
        "cover": "https://telegra.ph/file/c065bd197bd41bdb70816.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39694",
        "pageSeq": 39694
    },
    {
        "IDcode": 39695,
        "title": "Mikomin - Yoimiya (Genshin Impact)",
        "cover": "https://telegra.ph/file/056c9805393d596138d0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39695",
        "pageSeq": 39695
    },
    {
        "IDcode": 39696,
        "title": "Hana Bunny - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/8fd3880196fd66a43ec28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39696",
        "pageSeq": 39696
    },
    {
        "IDcode": 39697,
        "title": "Shirogane - Bunny Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/979c883efcf6935954645.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39697",
        "pageSeq": 39697
    },
    {
        "IDcode": 39698,
        "title": "Fantasy Factory - Christmas",
        "cover": "https://telegra.ph/file/4c57605ddafdfc80121bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39698",
        "pageSeq": 39698
    },
    {
        "IDcode": 39699,
        "title": "Yuzu Pyon - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/a5c49c8c4b141852921e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39699",
        "pageSeq": 39699
    },
    {
        "IDcode": 39700,
        "title": "Murrning Glow - Araragi Karen (Monogatari Series)",
        "cover": "https://telegra.ph/file/d17dd6ccfbece108eeacf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39700",
        "pageSeq": 39700
    },
    {
        "IDcode": 39701,
        "title": "Zzizzi - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/7331e45953b3f48bed75d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39701",
        "pageSeq": 39701
    },
    {
        "IDcode": 39702,
        "title": "桜井宁宁 Sakurai - Nurse Rem (Re Zero)",
        "cover": "https://telegra.ph/file/7ebfe840b22e481e41fd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39702",
        "pageSeq": 39702
    },
    {
        "IDcode": 39703,
        "title": "UyUy - Ps5-Chan",
        "cover": "https://telegra.ph/file/e0b55d7d27d209c833e7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39703",
        "pageSeq": 39703
    },
    {
        "IDcode": 39704,
        "title": "Hachi - Lucy Heartfilia (Fairy Tail)",
        "cover": "https://telegra.ph/file/719d4473699cd8ab83fa1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39704",
        "pageSeq": 39704
    },
    {
        "IDcode": 39705,
        "title": "Rioko 凉凉子 - 柴郡冰雪公主 Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/e47c30518560ed8ffd9eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39705",
        "pageSeq": 39705
    },
    {
        "IDcode": 39706,
        "title": "Carry Key - Azula (Avatar The Last Airbender)",
        "cover": "https://telegra.ph/file/1a0827a6fdcb685ad75fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39706",
        "pageSeq": 39706
    },
    {
        "IDcode": 39707,
        "title": "幼愛youmeko - Purple Cheongsam",
        "cover": "https://telegra.ph/file/4b0118c9da9160a239dcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39707",
        "pageSeq": 39707
    },
    {
        "IDcode": 39708,
        "title": "Hokunaimeko - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/37ff0ba3d31ea7da90f76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39708",
        "pageSeq": 39708
    },
    {
        "IDcode": 39709,
        "title": "阿九从不咕 - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/1f542b2c4ed0ac000fa38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39709",
        "pageSeq": 39709
    },
    {
        "IDcode": 39710,
        "title": "Hachi - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/cd8a2da4f6334942c18f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39710",
        "pageSeq": 39710
    },
    {
        "IDcode": 39711,
        "title": "Mimi Chan - Raphtalia (Tate No Yuusha)",
        "cover": "https://telegra.ph/file/980b5502c908d9f0bc9e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39711",
        "pageSeq": 39711
    },
    {
        "IDcode": 39712,
        "title": "Mimi Chan - Do-S (One Punch Man)",
        "cover": "https://telegra.ph/file/07a7e66abe61c134e1ba9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39712",
        "pageSeq": 39712
    },
    {
        "IDcode": 39713,
        "title": "Potato Godzilla - Korone (Hololive)",
        "cover": "https://telegra.ph/file/0a235af9744e443e147e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39713",
        "pageSeq": 39713
    },
    {
        "IDcode": 39714,
        "title": "PingPing - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/56f3e2b95cbbcbcdf167b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39714",
        "pageSeq": 39714
    },
    {
        "IDcode": 39715,
        "title": "Potato Godzilla - Tamamo (Fate Grand Order)",
        "cover": "https://telegra.ph/file/f0700ddab13163de8940e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39715",
        "pageSeq": 39715
    },
    {
        "IDcode": 39716,
        "title": "Lady Melamori - Azuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/742167ba8e86c90f7e166.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39716",
        "pageSeq": 39716
    },
    {
        "IDcode": 39717,
        "title": "Donna Loli - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/41041ca7335b0e5ebbe5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39717",
        "pageSeq": 39717
    },
    {
        "IDcode": 39718,
        "title": "Mimi Chan - Hu Tao (Genshi Impact)",
        "cover": "https://telegra.ph/file/f441441158fc0e73f8fab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39718",
        "pageSeq": 39718
    },
    {
        "IDcode": 39719,
        "title": "Mimi Chan - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/1ffa1791d561cdebcb53f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39719",
        "pageSeq": 39719
    },
    {
        "IDcode": 39720,
        "title": "Helly Valentine - Ahri (KDA / League Of Legends)",
        "cover": "https://telegra.ph/file/838dd63c63165be9de8e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39720",
        "pageSeq": 39720
    },
    {
        "IDcode": 39721,
        "title": "Helly Valentine - Holo (Spice and Wolf)",
        "cover": "https://telegra.ph/file/2fbd3788af65e79f5fa2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39721",
        "pageSeq": 39721
    },
    {
        "IDcode": 39722,
        "title": "Mimi Chan - Nazuna (Yufukashi No Uta)",
        "cover": "https://telegra.ph/file/1a27cf658163a73b6160d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39722",
        "pageSeq": 39722
    },
    {
        "IDcode": 39723,
        "title": "Queenie - Boa Hancock (One Piece)",
        "cover": "https://telegra.ph/file/1627e64be75688a317a8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39723",
        "pageSeq": 39723
    },
    {
        "IDcode": 39724,
        "title": "Hatori - Lilysa & Lilliel (2.5 Jige Kareshi)",
        "cover": "https://telegra.ph/file/bb837789b78fc9d809cfc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39724",
        "pageSeq": 39724
    },
    {
        "IDcode": 39725,
        "title": "Vinnegal - Asuna (Sword Art Online)",
        "cover": "https://telegra.ph/file/587fd0c36e2abf85e543a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39725",
        "pageSeq": 39725
    },
    {
        "IDcode": 39726,
        "title": "Hidori Rose - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/5fdeba250e07cfc16efb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39726",
        "pageSeq": 39726
    },
    {
        "IDcode": 39727,
        "title": "Hidori Rose & Mikomi - Atago & Takao (Azur Lane)",
        "cover": "https://telegra.ph/file/35124c4106085f2b932ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39727",
        "pageSeq": 39727
    }
];
