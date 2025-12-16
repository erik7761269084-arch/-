// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 43872,
        "title": "[ATFM] Vol.3 - Fate Jeanne d’Arc uniform [56P／252MB]",
        "cover": "https://telegra.ph/file/33d34434ab5167cce819b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43872",
        "pageSeq": 43872
    },
    {
        "IDcode": 43873,
        "title": "小鱼 - JK学妹 158P",
        "cover": "https://telegra.ph/file/63fa93e67b60714fc036d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43873",
        "pageSeq": 43873
    },
    {
        "IDcode": 43874,
        "title": "CocoPie - Anya Forger",
        "cover": "https://telegra.ph/file/57b1282b9716a35cf9127.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43874",
        "pageSeq": 43874
    },
    {
        "IDcode": 43875,
        "title": "倦倦喵 - 甘雨 魅魔 genshin impact 78P",
        "cover": "https://telegra.ph/file/943a40bf02b8b9a038583.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43875",
        "pageSeq": 43875
    },
    {
        "IDcode": 43876,
        "title": "YangYi 楊衣 - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/04ab9686e874ff6724c1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43876",
        "pageSeq": 43876
    },
    {
        "IDcode": 43877,
        "title": "团子 - 捆绑 90P",
        "cover": "https://telegra.ph/file/404931aa21da0ecdce1cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43877",
        "pageSeq": 43877
    },
    {
        "IDcode": 43878,
        "title": "小七 - 女仆 160P",
        "cover": "https://telegra.ph/file/4d044dd828e0e4bd1e2f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43878",
        "pageSeq": 43878
    },
    {
        "IDcode": 43879,
        "title": "紧急企划 - 内部 奶糖 JK学妹 [98P-610M]",
        "cover": "https://telegra.ph/file/419fffc6b36dc1e52a696.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43879",
        "pageSeq": 43879
    },
    {
        "IDcode": 43880,
        "title": "G44不会受伤 - 芙洛伦春节 30P",
        "cover": "https://telegra.ph/file/b486ba3247c00c5dc65de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43880",
        "pageSeq": 43880
    },
    {
        "IDcode": 43881,
        "title": "柴系小乖(稚乖画册) NO.011 — 新堂01 团子 [65P+1V871M]",
        "cover": "https://telegra.ph/file/1a2b2f7b29a1679ff3f73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43881",
        "pageSeq": 43881
    },
    {
        "IDcode": 43882,
        "title": "小鱼 - 女仆 193P1V",
        "cover": "https://telegra.ph/file/9d4215de5b686e2189cf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43882",
        "pageSeq": 43882
    },
    {
        "IDcode": 43883,
        "title": "云溪溪 - 奶桃 鞭笞之神60P1V",
        "cover": "https://telegra.ph/file/9f07d81cfaa4f0d8e737d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43883",
        "pageSeq": 43883
    },
    {
        "IDcode": 43884,
        "title": "Shojo - Waterfall big tits [59P-171M]",
        "cover": "https://telegra.ph/file/887a0a4b01d61b3cd333d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43884",
        "pageSeq": 43884
    },
    {
        "IDcode": 43885,
        "title": "小七 - JK 230P",
        "cover": "https://telegra.ph/file/d3f94066b098a229d8ba1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43885",
        "pageSeq": 43885
    },
    {
        "IDcode": 43886,
        "title": "星之迟迟 - 23年12月计划B 碧蓝航线 樫野 女仆 78P3V",
        "cover": "https://telegra.ph/file/3852a43add39da3e2da8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43886",
        "pageSeq": 43886
    },
    {
        "IDcode": 43887,
        "title": "NekoChan - Ganyu cow nude photo selfie [27P／89MB]",
        "cover": "https://telegra.ph/file/9d0004e81db1c71ddd6dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43887",
        "pageSeq": 43887
    },
    {
        "IDcode": 43888,
        "title": "是三不是世w - 小僵尸 50P",
        "cover": "https://telegra.ph/file/033c0d5f527d8c3eeb5e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43888",
        "pageSeq": 43888
    },
    {
        "IDcode": 43889,
        "title": "星之迟迟 - 23年12月计划赠品 赛马娘 小栗帽 圣诞衣装 48P",
        "cover": "https://telegra.ph/file/1341dee1bbc83eda0245a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43889",
        "pageSeq": 43889
    },
    {
        "IDcode": 43890,
        "title": "森萝财团-小糕 万元定制 浴缸湿身 [188P1V-5.76G]",
        "cover": "https://telegra.ph/file/9881dec87f6617327cc41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43890",
        "pageSeq": 43890
    },
    {
        "IDcode": 43891,
        "title": "Vinnegal - Zelda",
        "cover": "https://telegra.ph/file/144825ecf8514e56fe7d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43891",
        "pageSeq": 43891
    },
    {
        "IDcode": 43892,
        "title": "Joyce Lin2x - Himeko Dress (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/5753b0b115b775b69bcb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43892",
        "pageSeq": 43892
    },
    {
        "IDcode": 43893,
        "title": "森萝财团 - 游歌 清新泳装比基尼 103P+1V-2.86G",
        "cover": "https://telegra.ph/file/8af30d93ead26f6b3131c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43893",
        "pageSeq": 43893
    },
    {
        "IDcode": 43894,
        "title": "ER Kang - Bright moments with you [85P／769MB]",
        "cover": "https://telegra.ph/file/4111e63d903ecd692f61a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43894",
        "pageSeq": 43894
    },
    {
        "IDcode": 43895,
        "title": "HIGH FANTASY - Shaany (샤니) Vol.1 Feel My Summer",
        "cover": "https://telegra.ph/file/13d3a4e6fd17f54ef18d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43895",
        "pageSeq": 43895
    },
    {
        "IDcode": 43896,
        "title": "九言 - 八重神子 35P5V",
        "cover": "https://telegra.ph/file/a0f706b455a153c6e6296.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43896",
        "pageSeq": 43896
    },
    {
        "IDcode": 43897,
        "title": "[ArtGravia] Vol.548 - 연하 [88P _ 692MB]",
        "cover": "https://telegra.ph/file/c3f6a5ddc6cfb5b46638b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43897",
        "pageSeq": 43897
    },
    {
        "IDcode": 43898,
        "title": "Hidori Rose - Hu Tao",
        "cover": "https://telegra.ph/file/25d3e3687a3e8b1c024bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43898",
        "pageSeq": 43898
    },
    {
        "IDcode": 43899,
        "title": "Potato Godzilla - Tingyun Cheongsam",
        "cover": "https://telegra.ph/file/453561d33f0c714547893.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43899",
        "pageSeq": 43899
    },
    {
        "IDcode": 43900,
        "title": "玩偶姐姐 - 新年旗袍 78P",
        "cover": "https://telegra.ph/file/4a0c6ff4a48adb8f0f8b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43900",
        "pageSeq": 43900
    },
    {
        "IDcode": 43901,
        "title": "年年 - 霓裳 50P",
        "cover": "https://telegra.ph/file/73ff2d22353c1656bd643.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43901",
        "pageSeq": 43901
    },
    {
        "IDcode": 43902,
        "title": "金鱼kinngyo (花音栗子) - 赛博朋克 边缘行者 Rebecca 67P",
        "cover": "https://telegra.ph/file/392745cec05aa60417608.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43902",
        "pageSeq": 43902
    },
    {
        "IDcode": 43903,
        "title": "花音栗子 - 碧窗梦 61P",
        "cover": "https://telegra.ph/file/4c8fb29d80e284a9b6db6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43903",
        "pageSeq": 43903
    },
    {
        "IDcode": 43904,
        "title": "年年 - 爱丽丝仙境 50P",
        "cover": "https://telegra.ph/file/1c153f2ba17b5af9b03cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43904",
        "pageSeq": 43904
    },
    {
        "IDcode": 43905,
        "title": "年年 - 晴天 50P",
        "cover": "https://telegra.ph/file/63f0f249d60d8384ad66d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43905",
        "pageSeq": 43905
    },
    {
        "IDcode": 43906,
        "title": "年年 - 日出 45P",
        "cover": "https://telegra.ph/file/c51a4fad93f5cf5330e5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43906",
        "pageSeq": 43906
    },
    {
        "IDcode": 43907,
        "title": "年年 - 夜虹 39P",
        "cover": "https://telegra.ph/file/04f8c4c578a2e0951287b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43907",
        "pageSeq": 43907
    },
    {
        "IDcode": 43908,
        "title": "桜桃喵 - 夜纱 43P",
        "cover": "https://telegra.ph/file/aa151e2f7db854a0ea9c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43908",
        "pageSeq": 43908
    },
    {
        "IDcode": 43909,
        "title": "rua阮阮 - 雪糕 40P",
        "cover": "https://telegra.ph/file/bd45399c777feef1b3e0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43909",
        "pageSeq": 43909
    },
    {
        "IDcode": 43910,
        "title": "Espacia Korea",
        "cover": "https://telegra.ph/file/b208f338a3d43eb6c266a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43910",
        "pageSeq": 43910
    },
    {
        "IDcode": 43911,
        "title": "水淼Aqua - 蔚蓝档案 天雨亚子礼服 91P",
        "cover": "https://telegra.ph/file/7797bab04872bd70f065b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43911",
        "pageSeq": 43911
    },
    {
        "IDcode": 43912,
        "title": "安食Ajiki - 白猫猫 48P",
        "cover": "https://telegra.ph/file/f6f8db2c3852c17c144da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43912",
        "pageSeq": 43912
    },
    {
        "IDcode": 43913,
        "title": "桜桃喵 - 盏月 38P",
        "cover": "https://telegra.ph/file/7693b93e2902a3f677219.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43913",
        "pageSeq": 43913
    },
    {
        "IDcode": 43914,
        "title": "Potato Godzilla - Nicole (Zenless Zone Zero)",
        "cover": "https://telegra.ph/file/12754179b2da22fed0647.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43914",
        "pageSeq": 43914
    },
    {
        "IDcode": 43915,
        "title": "[Pure Media] Vol.287 Yeha (예하) - Sex Vacation In Camping Car [182P1V-684MB]",
        "cover": "https://telegra.ph/file/27318c1d61d1940910090.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43915",
        "pageSeq": 43915
    },
    {
        "IDcode": 43916,
        "title": "神楽坂真冬 5-48恶魔女仆 2V+75P 514MB",
        "cover": "https://telegra.ph/file/1ee6e3c5e9e92391a6756.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43916",
        "pageSeq": 43916
    },
    {
        "IDcode": 43917,
        "title": "[Lilynah] LW097 Suki - Vol.2 Next Door Temptations",
        "cover": "https://telegra.ph/file/d0c6b73049ceaa95090af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43917",
        "pageSeq": 43917
    },
    {
        "IDcode": 43918,
        "title": "rua阮阮 - 白丝外卖员 40P",
        "cover": "https://telegra.ph/file/4ed24712238ff09af37cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43918",
        "pageSeq": 43918
    },
    {
        "IDcode": 43919,
        "title": "rua阮阮 -失乐园 [55P-687MB]",
        "cover": "https://telegra.ph/file/c52c2d6ed8cc9d3a94500.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43919",
        "pageSeq": 43919
    },
    {
        "IDcode": 43920,
        "title": "轩萧学姐 - 人妻太太 132P1V",
        "cover": "https://telegra.ph/file/1224d6add27bc832a2cbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43920",
        "pageSeq": 43920
    },
    {
        "IDcode": 43921,
        "title": "桜井宁宁 - JK学妹 88P",
        "cover": "https://telegra.ph/file/34bbf356c55e080b442fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43921",
        "pageSeq": 43921
    },
    {
        "IDcode": 43922,
        "title": "[ピンキーweb] ピンキーweb@つぼみん025百合川さ らさん",
        "cover": "https://telegra.ph/file/0610c08d8e5d21049aa79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43922",
        "pageSeq": 43922
    },
    {
        "IDcode": 43923,
        "title": "[千镜映像][Cosplay]クルル・ツェペシ",
        "cover": "https://telegra.ph/file/8a78485e91b75ef228271.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43923",
        "pageSeq": 43923
    },
    {
        "IDcode": 43924,
        "title": "(C92) [Shooting Star's (サク)] Artifically Made Type S (ニーアオートマタ)",
        "cover": "https://telegra.ph/file/d085f84e13bc56c6759fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43924",
        "pageSeq": 43924
    },
    {
        "IDcode": 43925,
        "title": "[Shooting Star's (Saku)] 黒透け来航",
        "cover": "https://telegra.ph/file/f9795c7a64dee621dfd15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43925",
        "pageSeq": 43925
    },
    {
        "IDcode": 43926,
        "title": "Sex Friend 45 「ハメールレーン Vol.02 - あ◯ご - 」",
        "cover": "https://telegra.ph/file/759086e539ba7bf0896c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43926",
        "pageSeq": 43926
    },
    {
        "IDcode": 43927,
        "title": "ピンキーweb@つぼみん004",
        "cover": "https://telegra.ph/file/3c6ebc28e3f5918586c88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43927",
        "pageSeq": 43927
    },
    {
        "IDcode": 43928,
        "title": "(C92) [Shooting Star's (サク)] REIKA-S (GANTZ)",
        "cover": "https://telegra.ph/file/28dcc70e13a0f519e7b7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43928",
        "pageSeq": 43928
    },
    {
        "IDcode": 43929,
        "title": "Sex Friend 41 「赤の性バー - 生ハメモード・レッド -」",
        "cover": "https://telegra.ph/file/2740a45d489d0c098cf78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43929",
        "pageSeq": 43929
    },
    {
        "IDcode": 43930,
        "title": "[水淼Aqua] ヨルハ二号B型 クリスマスVer (ニーア オートマタ)",
        "cover": "https://telegra.ph/file/75f39248d27803155176e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43930",
        "pageSeq": 43930
    },
    {
        "IDcode": 43931,
        "title": "[Hana Bunny]",
        "cover": "https://telegra.ph/file/f995baeb353ae2cf6cd4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43931",
        "pageSeq": 43931
    },
    {
        "IDcode": 43932,
        "title": "YorHa 2B Cosplayers doing cosplay (TL note: costume play) in anything but her costume",
        "cover": "https://telegra.ph/file/4555b5765ae8b6348a15d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43932",
        "pageSeq": 43932
    },
    {
        "IDcode": 43933,
        "title": "水淼Aqua - Akagi (Azur Lane)",
        "cover": "https://telegra.ph/file/d1bcf92112a7e8da5873f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43933",
        "pageSeq": 43933
    },
    {
        "IDcode": 43934,
        "title": "[水淼aqua] アズールレーン パーシュース",
        "cover": "https://telegra.ph/file/6488c1a8292123ffe541b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43934",
        "pageSeq": 43934
    },
    {
        "IDcode": 43935,
        "title": "Hachi 小芭 - Tifa Swimsuit",
        "cover": "https://telegra.ph/file/5d0741203a1edaf3006e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43935",
        "pageSeq": 43935
    },
    {
        "IDcode": 43936,
        "title": "Azami - Siege",
        "cover": "https://telegra.ph/file/97f1f607a0386560ca24a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43936",
        "pageSeq": 43936
    },
    {
        "IDcode": 43937,
        "title": "Shadory - Hestia",
        "cover": "https://telegra.ph/file/f47f8736ddaeb65a7fbd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43937",
        "pageSeq": 43937
    },
    {
        "IDcode": 43938,
        "title": "[@kaya1028] St. Louis (Luxury Handle) セントルイス",
        "cover": "https://telegra.ph/file/afeb93f6be4f0b3cee814.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43938",
        "pageSeq": 43938
    },
    {
        "IDcode": 43939,
        "title": "Anri Okita - Shirahoshi",
        "cover": "https://telegra.ph/file/a174339e93c3a20878f94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43939",
        "pageSeq": 43939
    },
    {
        "IDcode": 43940,
        "title": "Mon夢  マシュ",
        "cover": "https://telegra.ph/file/37119fe5050f11defa76d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43940",
        "pageSeq": 43940
    },
    {
        "IDcode": 43941,
        "title": "[沖田凜花Rinka] Amiya racing swimming suit ver. (明日方舟)",
        "cover": "https://telegra.ph/file/36df506878a49cda9b924.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43941",
        "pageSeq": 43941
    },
    {
        "IDcode": 43942,
        "title": "[KuukoW] Marie Rose Outdoor (Dead or Alive)",
        "cover": "https://telegra.ph/file/1b6f3bad6be3f4c24a0c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43942",
        "pageSeq": 43942
    },
    {
        "IDcode": 43943,
        "title": "[KuukoW] Mashu Kigurumi Pajama (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/18f30c08628625ac9b418.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43943",
        "pageSeq": 43943
    },
    {
        "IDcode": 43944,
        "title": "齋齋 Itsukichan いつき",
        "cover": "https://telegra.ph/file/a18130c2bac52b94a2994.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43944",
        "pageSeq": 43944
    },
    {
        "IDcode": 43945,
        "title": "[KuukoW] Tamaki - Dead or Alive XVV (Dead or Alive)",
        "cover": "https://telegra.ph/file/58bcfdb02f5b21367137a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43945",
        "pageSeq": 43945
    },
    {
        "IDcode": 43946,
        "title": "一笑芳香沁 - 2B Christmas (NieR:Automata)",
        "cover": "https://telegra.ph/file/0eda81b880d72472b3d73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43946",
        "pageSeq": 43946
    },
    {
        "IDcode": 43947,
        "title": "[wink是可爱的wink]兔女郎蕾姆",
        "cover": "https://telegra.ph/file/9ae71bee8a084a7779566.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43947",
        "pageSeq": 43947
    },
    {
        "IDcode": 43948,
        "title": "KuukoW - Marie Rose",
        "cover": "https://telegra.ph/file/584e5aeb36fb34be8ca8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43948",
        "pageSeq": 43948
    },
    {
        "IDcode": 43949,
        "title": "Aoy Queen - Elizabeth Liones",
        "cover": "https://telegra.ph/file/e0556419f9e97e5472fe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43949",
        "pageSeq": 43949
    },
    {
        "IDcode": 43950,
        "title": "念念_D 常闇小恶魔",
        "cover": "https://telegra.ph/file/46d76ed833406ea76c0ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43950",
        "pageSeq": 43950
    },
    {
        "IDcode": 43951,
        "title": "星之迟迟",
        "cover": "https://telegra.ph/file/201c4fe40121e1b2fc55f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43951",
        "pageSeq": 43951
    },
    {
        "IDcode": 43952,
        "title": "nagisa魔物喵 レム",
        "cover": "https://telegra.ph/file/535ef2cdc46822ed4c0fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43952",
        "pageSeq": 43952
    },
    {
        "IDcode": 43953,
        "title": "nagisa魔物喵 かわいい白雪姫",
        "cover": "https://telegra.ph/file/51fa0137d4ad2da7ae798.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43953",
        "pageSeq": 43953
    },
    {
        "IDcode": 43954,
        "title": "Vinnegal - Mikasa Ackerman",
        "cover": "https://telegra.ph/file/f1783e7ea06e8b2e579f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43954",
        "pageSeq": 43954
    },
    {
        "IDcode": 43955,
        "title": "Alina Becker - Zelda Cosplay",
        "cover": "https://telegra.ph/file/12a9aa6f86a7735d01941.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43955",
        "pageSeq": 43955
    },
    {
        "IDcode": 43956,
        "title": "Nova Terra (Sweetie Fox)",
        "cover": "https://telegra.ph/file/50b2bb1613f645c64b424.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43956",
        "pageSeq": 43956
    },
    {
        "IDcode": 43957,
        "title": "Ino - Tsunade",
        "cover": "https://telegra.ph/file/6d24851984d5b379f7405.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43957",
        "pageSeq": 43957
    },
    {
        "IDcode": 43958,
        "title": "水淼aqua - Shenhe",
        "cover": "https://telegra.ph/file/eb7fcd2a3623093506048.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43958",
        "pageSeq": 43958
    },
    {
        "IDcode": 43959,
        "title": "[水淼Aqua] 🔹 申鶴 旗袍 🔹",
        "cover": "https://telegra.ph/file/bed72b5cfbb2f074523d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43959",
        "pageSeq": 43959
    },
    {
        "IDcode": 43960,
        "title": "Arty Huang - Hinata",
        "cover": "https://telegra.ph/file/0627ccd39b80640368205.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43960",
        "pageSeq": 43960
    },
    {
        "IDcode": 43961,
        "title": "爆机少女喵小吉 - 原神 甘雨",
        "cover": "https://telegra.ph/file/517c927da499296c1e350.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43961",
        "pageSeq": 43961
    },
    {
        "IDcode": 43962,
        "title": "Hidori Rose - Shizuku Kuroe",
        "cover": "https://telegra.ph/file/b94840e59d280871772fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43962",
        "pageSeq": 43962
    },
    {
        "IDcode": 43963,
        "title": "Son Ye-Eun (손예은) - “[Squid Game] Triangle Soldier” + Uncensored",
        "cover": "https://telegra.ph/file/6b4428f0de2a82b2b1754.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43963",
        "pageSeq": 43963
    },
    {
        "IDcode": 43964,
        "title": "Arty - Jeanne D Arc",
        "cover": "https://telegra.ph/file/c4049945453c3ca496a57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43964",
        "pageSeq": 43964
    },
    {
        "IDcode": 43965,
        "title": "Arty - Yae Miko",
        "cover": "https://telegra.ph/file/732af4748e4c79af176a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43965",
        "pageSeq": 43965
    },
    {
        "IDcode": 43966,
        "title": "Arty - Kiyohime",
        "cover": "https://telegra.ph/file/4e6c55adf7fed53bcb50a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43966",
        "pageSeq": 43966
    },
    {
        "IDcode": 43967,
        "title": "KuukoW - 2B Gemkini",
        "cover": "https://telegra.ph/file/576b08a9359e40d0450d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43967",
        "pageSeq": 43967
    },
    {
        "IDcode": 43968,
        "title": "Uki雨季 2B A2 Set",
        "cover": "https://telegra.ph/file/892fa6b96c7bc5622fc6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43968",
        "pageSeq": 43968
    },
    {
        "IDcode": 43969,
        "title": "Sameki - 原神 甘雨",
        "cover": "https://telegra.ph/file/6725ce4177a0d3291d86a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43969",
        "pageSeq": 43969
    },
    {
        "IDcode": 43970,
        "title": "Sameki - うま娘 ライスシャワー",
        "cover": "https://telegra.ph/file/e646d4d348f99e0d2b479.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43970",
        "pageSeq": 43970
    },
    {
        "IDcode": 43971,
        "title": "Arty - Jeanne d'Arc",
        "cover": "https://telegra.ph/file/3884fa528205f810889a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=43971",
        "pageSeq": 43971
    }
];
