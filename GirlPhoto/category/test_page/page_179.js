// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39938,
        "title": "Hane Ame - Prinz Eugen (Azur Lane)",
        "cover": "https://telegra.ph/file/da76245c7cb88b92e3c9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39938",
        "pageSeq": 39938
    },
    {
        "IDcode": 39939,
        "title": "Fantasy Factory - Asuka (Neo Genesis Evangelion) + Event PF32",
        "cover": "https://telegra.ph/file/bbdfa115b53bb2470a91c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39939",
        "pageSeq": 39939
    },
    {
        "IDcode": 39940,
        "title": "Angel Chan - Red Devil",
        "cover": "https://telegra.ph/file/e80431956aa0850d7d607.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39940",
        "pageSeq": 39940
    },
    {
        "IDcode": 39941,
        "title": "六味帝皇酱 -  回归新作",
        "cover": "https://telegra.ph/file/83512db6bcbf82e5f498c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39941",
        "pageSeq": 39941
    },
    {
        "IDcode": 39943,
        "title": "Hana Bunny - Yor Forger Casual (Spy x Family)",
        "cover": "https://telegra.ph/file/b732352551e31aaff0209.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39943",
        "pageSeq": 39943
    },
    {
        "IDcode": 39944,
        "title": "Umeko J - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/b70427e161b43d3d7a781.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39944",
        "pageSeq": 39944
    },
    {
        "IDcode": 39945,
        "title": "Fantasy Factory - Black cat underwear",
        "cover": "https://telegra.ph/file/1473581de9603d7dbde32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39945",
        "pageSeq": 39945
    },
    {
        "IDcode": 39946,
        "title": "Helly Valentine - 2B (Nier Automta)",
        "cover": "https://telegra.ph/file/80f10e08ea19596cc5c02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39946",
        "pageSeq": 39946
    },
    {
        "IDcode": 39947,
        "title": "Hidori Rose - Niko Yazawa (Love Live)",
        "cover": "https://telegra.ph/file/0451464435b9cecb4e637.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39947",
        "pageSeq": 39947
    },
    {
        "IDcode": 39948,
        "title": "Umeko J - Yamato (One Piece)",
        "cover": "https://telegra.ph/file/ba8abe543eb16c7969ee4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39948",
        "pageSeq": 39948
    },
    {
        "IDcode": 39949,
        "title": "Aery Tiefling - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/edb5f90e405844b5ceec1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39949",
        "pageSeq": 39949
    },
    {
        "IDcode": 39950,
        "title": "星之迟迟 Hoshilily -  碧蓝航线 让巴尔 Jean Bart (Azur Lane)",
        "cover": "https://telegra.ph/file/21bae42ba35b3475eff4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39950",
        "pageSeq": 39950
    },
    {
        "IDcode": 39952,
        "title": "Donna Loli - Ankha (Animal Crossing)",
        "cover": "https://telegra.ph/file/fed27516a8a33235e8c0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39952",
        "pageSeq": 39952
    },
    {
        "IDcode": 39953,
        "title": "Umeko J - Dark Magician Girl (Yu Gi Oh)",
        "cover": "https://telegra.ph/file/5d2b94d1814efa4f0a0d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39953",
        "pageSeq": 39953
    },
    {
        "IDcode": 39954,
        "title": "Umeko J - Faye Valentine (Cowboy Bepop)",
        "cover": "https://telegra.ph/file/7642750076c6b688f97db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39954",
        "pageSeq": 39954
    },
    {
        "IDcode": 39955,
        "title": "贞子蜜桃 - 春日椿 Vol.013 Tsubaki (Azur Lane)",
        "cover": "https://telegra.ph/file/2dd82e09a0695f8fa422a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39955",
        "pageSeq": 39955
    },
    {
        "IDcode": 39956,
        "title": "Uri - Misterius Heroine (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ffe6551c965267617f66c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39956",
        "pageSeq": 39956
    },
    {
        "IDcode": 39957,
        "title": "Kururin - Lumine (Genshin Impact)",
        "cover": "https://telegra.ph/file/c87d5c674782fe1c4624b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39957",
        "pageSeq": 39957
    },
    {
        "IDcode": 39958,
        "title": "Aery Tiefling - Shinobu Kochou (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/d367c297c2b105ef6c898.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39958",
        "pageSeq": 39958
    },
    {
        "IDcode": 39959,
        "title": "Potato Godzilla - Lumine (Genshin Impact)",
        "cover": "https://telegra.ph/file/97cb1697321c5ef4ecd89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39959",
        "pageSeq": 39959
    },
    {
        "IDcode": 39960,
        "title": "Fantasy Factory - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/530827b119971365576c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39960",
        "pageSeq": 39960
    },
    {
        "IDcode": 39961,
        "title": "Potato Godzilla - Maid",
        "cover": "https://telegra.ph/file/2b59007c5fd3568291a9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39961",
        "pageSeq": 39961
    },
    {
        "IDcode": 39962,
        "title": "Potato Godzilla - Cowgirl",
        "cover": "https://telegra.ph/file/155b63d63556fb6e07e1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39962",
        "pageSeq": 39962
    },
    {
        "IDcode": 39963,
        "title": "Lera Himera - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/b75e492740d5fee19cfec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39963",
        "pageSeq": 39963
    },
    {
        "IDcode": 39964,
        "title": "桜井宁宁 Sakurai - 任务绅士版",
        "cover": "https://telegra.ph/file/be38ee5b68f0758bae068.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39964",
        "pageSeq": 39964
    },
    {
        "IDcode": 39965,
        "title": "Umeko J - Android N.18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/101ebcb4a1250f856ac9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39965",
        "pageSeq": 39965
    },
    {
        "IDcode": 39966,
        "title": "Loli Sama - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/935576f7be40e340f331d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39966",
        "pageSeq": 39966
    },
    {
        "IDcode": 39967,
        "title": "KuukoW - Kuki Shinobu (Genshin Impact)",
        "cover": "https://telegra.ph/file/0cdbccd27adbc9af07618.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39967",
        "pageSeq": 39967
    },
    {
        "IDcode": 39968,
        "title": "Byoru - Morrigan (Capcom Game)",
        "cover": "https://telegra.ph/file/3adc9104df47f62cdfd8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39968",
        "pageSeq": 39968
    },
    {
        "IDcode": 39969,
        "title": "Byoru - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/c9d383e1643a22820def5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39969",
        "pageSeq": 39969
    },
    {
        "IDcode": 39970,
        "title": "Potato Godzilla - Bunny",
        "cover": "https://telegra.ph/file/ee92b7969d0d30c9134b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39970",
        "pageSeq": 39970
    },
    {
        "IDcode": 39971,
        "title": "星之迟迟 Hoshilily - B本原创 体操服妹妹",
        "cover": "https://telegra.ph/file/d7babb6c268941f8b5edb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39971",
        "pageSeq": 39971
    },
    {
        "IDcode": 39972,
        "title": "Byoru - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/906b14b655f97109d9fa6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39972",
        "pageSeq": 39972
    },
    {
        "IDcode": 39973,
        "title": "Byoru & Sally Dorasnow - Makima & Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/e18bd118f015e9acd5428.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39973",
        "pageSeq": 39973
    },
    {
        "IDcode": 39974,
        "title": "Byoru - Reze (Chainsaw Man)",
        "cover": "https://telegra.ph/file/e334aee21a75aa7ab560e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39974",
        "pageSeq": 39974
    },
    {
        "IDcode": 39975,
        "title": "Mik Allen - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/bb475d67d055d2788a1a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39975",
        "pageSeq": 39975
    },
    {
        "IDcode": 39976,
        "title": "桜井宁宁 Sakurai - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/f5a986927c641fadf2b39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39976",
        "pageSeq": 39976
    },
    {
        "IDcode": 39977,
        "title": "Hane Ame - Illustrious (Azur Lane)",
        "cover": "https://telegra.ph/file/f4c4761b90f23486f8aa0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39977",
        "pageSeq": 39977
    },
    {
        "IDcode": 39978,
        "title": "KuukoW - Kaine (Nier Replicant)",
        "cover": "https://telegra.ph/file/4693dc5ee1a4e0162a7a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39978",
        "pageSeq": 39978
    },
    {
        "IDcode": 39979,
        "title": "Shirogane Sama & Misaki Sai - Yae Miko & Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/01a96b65720ef515aae25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39979",
        "pageSeq": 39979
    },
    {
        "IDcode": 39980,
        "title": "Rizuna - Reze (Chainsaw Man)",
        "cover": "https://telegra.ph/file/05018200de774603685d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39980",
        "pageSeq": 39980
    },
    {
        "IDcode": 39981,
        "title": "KuukoW - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/ca495c525d88f1820b9cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39981",
        "pageSeq": 39981
    },
    {
        "IDcode": 39982,
        "title": "桜井宁宁 Sakurai-  双马尾JK",
        "cover": "https://telegra.ph/file/8843c60ac93dfbfc4489f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39982",
        "pageSeq": 39982
    },
    {
        "IDcode": 39983,
        "title": "蠢沫沫 Chunmomo x桃良阿宅 - 莉可莉丝 ( lycoris Recoil)",
        "cover": "https://telegra.ph/file/2850c0e7342c82bb28a95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39983",
        "pageSeq": 39983
    },
    {
        "IDcode": 39984,
        "title": "爆机少女喵小吉 Nekokoyoshi &云烧 - 原神花嫁：优菈&甘雨 Eula & Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/8641f6e8c2b19816ff13c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39984",
        "pageSeq": 39984
    },
    {
        "IDcode": 39985,
        "title": "Potato Godzilla - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/36170ed77b263273217f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39985",
        "pageSeq": 39985
    },
    {
        "IDcode": 39986,
        "title": "Potato Godzilla - Nex to the beach",
        "cover": "https://telegra.ph/file/612b1bdb05740970124a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39986",
        "pageSeq": 39986
    },
    {
        "IDcode": 39987,
        "title": "Lai Dawud - Mai Shiranui (The King of Fighters)",
        "cover": "https://telegra.ph/file/259d56fb0e9eca6602c81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39987",
        "pageSeq": 39987
    },
    {
        "IDcode": 39988,
        "title": "Akemi - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/ffa6e674003855e9917eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39988",
        "pageSeq": 39988
    },
    {
        "IDcode": 39989,
        "title": "Potato Godzilla - Kinako",
        "cover": "https://telegra.ph/file/2ef9d8356327c2eac12ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39989",
        "pageSeq": 39989
    },
    {
        "IDcode": 39990,
        "title": "Potato Godzilla - Eula Bunny (Genshin Impact)",
        "cover": "https://telegra.ph/file/459b4ef9408ca5a5dd359.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39990",
        "pageSeq": 39990
    },
    {
        "IDcode": 39991,
        "title": "Umeko J - Bea (Pokemon)",
        "cover": "https://telegra.ph/file/d316920228e950c1d37bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39991",
        "pageSeq": 39991
    },
    {
        "IDcode": 39992,
        "title": "Aery Tiefling - Komi Shouko (Komi-san)",
        "cover": "https://telegra.ph/file/7a7145c2bf967dc6a833f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39992",
        "pageSeq": 39992
    },
    {
        "IDcode": 39993,
        "title": "Potato Godzilla - Rei Ayanami (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/026b01216d2e2c872003b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39993",
        "pageSeq": 39993
    },
    {
        "IDcode": 39994,
        "title": "Hidori Rose - Pervy Bear",
        "cover": "https://telegra.ph/file/52115217282e854a9d2de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39994",
        "pageSeq": 39994
    },
    {
        "IDcode": 39995,
        "title": "Hana Bunny - Dehya (Genshin Impact)",
        "cover": "https://telegra.ph/file/3268c96bd4f133ff92987.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39995",
        "pageSeq": 39995
    },
    {
        "IDcode": 39996,
        "title": "Hana Bunny - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/0ec025d9c4b017d5c72a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39996",
        "pageSeq": 39996
    },
    {
        "IDcode": 39997,
        "title": "Fantasy Factory - Kitchen competitive swimwear",
        "cover": "https://telegra.ph/file/3d39c3b21c2bc73697392.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39997",
        "pageSeq": 39997
    },
    {
        "IDcode": 39998,
        "title": "Lady Melamori - Sakura Haruno (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/9ac7b37ff1457306d2554.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39998",
        "pageSeq": 39998
    },
    {
        "IDcode": 39999,
        "title": "Hana Bunny - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/c11913959d942b588d556.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39999",
        "pageSeq": 39999
    },
    {
        "IDcode": 40000,
        "title": "Hana Bunny - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/8c468e59fa6778de850b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40000",
        "pageSeq": 40000
    },
    {
        "IDcode": 40001,
        "title": "Shui Miao Aqua - Yumeko Jabami (Kakegurui)",
        "cover": "https://telegra.ph/file/71e71a916e4d913a00846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40001",
        "pageSeq": 40001
    },
    {
        "IDcode": 40002,
        "title": "Shirogane Sama - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/c497e3aea983640fe34be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40002",
        "pageSeq": 40002
    },
    {
        "IDcode": 40003,
        "title": "Potato Godzilla - Red Kitten",
        "cover": "https://telegra.ph/file/555bb3ae4e3c4d2b83b87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40003",
        "pageSeq": 40003
    },
    {
        "IDcode": 40004,
        "title": "Umeko J - D. Va (Overwatch)",
        "cover": "https://telegra.ph/file/06417e14ef6bce25315e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40004",
        "pageSeq": 40004
    },
    {
        "IDcode": 40005,
        "title": "Hane Ame - Mihara (NIKKE)",
        "cover": "https://telegra.ph/file/27c4e17e777718062417b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40005",
        "pageSeq": 40005
    },
    {
        "IDcode": 40006,
        "title": "Fantasy Factory - 水手服运动泳衣",
        "cover": "https://telegra.ph/file/ae6bda79a2cdc8657cafa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40006",
        "pageSeq": 40006
    },
    {
        "IDcode": 40007,
        "title": "KuukoW - Nero/Kiara (Fate Grand Order)",
        "cover": "https://telegra.ph/file/671bd341c4028f8614b6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40007",
        "pageSeq": 40007
    },
    {
        "IDcode": 40008,
        "title": "YaoYaoQwQ - Sagiri (Eromanga sensei)",
        "cover": "https://telegra.ph/file/fc504f224c6debda7961f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40008",
        "pageSeq": 40008
    },
    {
        "IDcode": 40009,
        "title": "Potato Godzilla - Casual",
        "cover": "https://telegra.ph/file/059db7d4c6ead498e3490.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40009",
        "pageSeq": 40009
    },
    {
        "IDcode": 40011,
        "title": "Minichu - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c1564fbffcc25abc18479.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40011",
        "pageSeq": 40011
    },
    {
        "IDcode": 40012,
        "title": "Sophie Valentine - Ciri (The Witcher)",
        "cover": "https://telegra.ph/file/8bda6dfc37b70a2b9ebc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40012",
        "pageSeq": 40012
    },
    {
        "IDcode": 40013,
        "title": "Ain Nguyen - Illulu (Kobayashi-San)",
        "cover": "https://telegra.ph/file/1fac6d71b08a7c03c41da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40013",
        "pageSeq": 40013
    },
    {
        "IDcode": 40014,
        "title": "KuukoW - Layla (Genshin Impact)",
        "cover": "https://telegra.ph/file/438e675a995394b0bcda9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40014",
        "pageSeq": 40014
    },
    {
        "IDcode": 40015,
        "title": "Carry Key - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/76e809cc5c6fb4422902b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40015",
        "pageSeq": 40015
    },
    {
        "IDcode": 40016,
        "title": "Potato Godzilla - Schoolgirl",
        "cover": "https://telegra.ph/file/345e7ac11d97ae5070511.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40016",
        "pageSeq": 40016
    },
    {
        "IDcode": 40017,
        "title": "Potato Godzilla - Casual Boring Potato",
        "cover": "https://telegra.ph/file/3fe1b5d15e67d1974270b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40017",
        "pageSeq": 40017
    },
    {
        "IDcode": 40018,
        "title": "奈汐酱Nice 自撮り - Vol.001 快乐水 兔女郎",
        "cover": "https://telegra.ph/file/56642d8a1ea87ceeebedd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40018",
        "pageSeq": 40018
    },
    {
        "IDcode": 40019,
        "title": "Minichu - Mitsuri Miko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/7d12df103659bca6b604d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40019",
        "pageSeq": 40019
    },
    {
        "IDcode": 40020,
        "title": "Minichu - Freya (Kaifuku)",
        "cover": "https://telegra.ph/file/42aceceea9674e287e31c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40020",
        "pageSeq": 40020
    },
    {
        "IDcode": 40021,
        "title": "Fantasy Factory - Seaside",
        "cover": "https://telegra.ph/file/3b1ac5c10a5b66cd14339.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40021",
        "pageSeq": 40021
    },
    {
        "IDcode": 40022,
        "title": "ゆららch Yurarach - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/9bebf73472b8107d5865e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40022",
        "pageSeq": 40022
    },
    {
        "IDcode": 40023,
        "title": "Helly Valentine - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/959577c136e6fad8fdeca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40023",
        "pageSeq": 40023
    },
    {
        "IDcode": 40024,
        "title": "Minichu - Tamaki (Fire Force)",
        "cover": "https://telegra.ph/file/1696188b99773fd314313.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40024",
        "pageSeq": 40024
    },
    {
        "IDcode": 40025,
        "title": "Aery Tiefling - Nezuko (Kimetsu no Yaiba)",
        "cover": "https://telegra.ph/file/c1d371fbb1ce24de4cb2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40025",
        "pageSeq": 40025
    },
    {
        "IDcode": 40026,
        "title": "Umeko J - Esdeath (Akame ga Kill)",
        "cover": "https://telegra.ph/file/0ac0011678708da9f70d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40026",
        "pageSeq": 40026
    },
    {
        "IDcode": 40027,
        "title": "Megumi Koneko - Ishtar (Fate Grand Order)",
        "cover": "https://telegra.ph/file/0bf1be9c0c5fea8e37524.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40027",
        "pageSeq": 40027
    },
    {
        "IDcode": 40028,
        "title": "Yoshinobi - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/9d79c00c9d95477e7ac25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40028",
        "pageSeq": 40028
    },
    {
        "IDcode": 40029,
        "title": "Donna Loli - Raphtalia (Tate no Yuusha)",
        "cover": "https://telegra.ph/file/c89df40235824d6c756e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40029",
        "pageSeq": 40029
    },
    {
        "IDcode": 40030,
        "title": "Potato Godzilla - Popo Weeb Lewd Girl",
        "cover": "https://telegra.ph/file/373414146bd164b8528bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40030",
        "pageSeq": 40030
    },
    {
        "IDcode": 40031,
        "title": "Byoru - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/e94257c0284d772f87c63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40031",
        "pageSeq": 40031
    },
    {
        "IDcode": 40032,
        "title": "Sneesnaw - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/e70395a4874f4ada6f21f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40032",
        "pageSeq": 40032
    },
    {
        "IDcode": 40033,
        "title": "KuukoW - Elf Kuuko",
        "cover": "https://telegra.ph/file/feadf4b4f87996f728cdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40033",
        "pageSeq": 40033
    },
    {
        "IDcode": 40034,
        "title": "Lady Melamori - Judy Alvarez (Cyberpunk 2077)",
        "cover": "https://telegra.ph/file/4645a3924736421a3c4cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40034",
        "pageSeq": 40034
    },
    {
        "IDcode": 40035,
        "title": "Sakurai 桜井宁宁 - 约尔太太 Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/4029c97bb84ec9dcb5c9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40035",
        "pageSeq": 40035
    },
    {
        "IDcode": 40036,
        "title": "Bambi - Special Christmas",
        "cover": "https://telegra.ph/file/4effe24a4f4d2d0d3521e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40036",
        "pageSeq": 40036
    },
    {
        "IDcode": 40037,
        "title": "Lady Melamori - Ashe (Overwatch)",
        "cover": "https://telegra.ph/file/4e7c0e6bf1f3a442f35c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40037",
        "pageSeq": 40037
    },
    {
        "IDcode": 40038,
        "title": "Lady Melamori - Bridgette (Overwatch)",
        "cover": "https://telegra.ph/file/4620301858f64197e84b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40038",
        "pageSeq": 40038
    },
    {
        "IDcode": 40039,
        "title": "Minichu - 2B Christmas (Nier Automata)",
        "cover": "https://telegra.ph/file/0e0f1db9d50a844f0ef32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40039",
        "pageSeq": 40039
    },
    {
        "IDcode": 40040,
        "title": "Aery Tiefling - Zero Two Christmas (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/ce56433089ccb5b642933.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40040",
        "pageSeq": 40040
    }
];
