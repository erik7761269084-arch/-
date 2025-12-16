// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 45972,
        "title": "Donna Loli - Gawr Gura - Page 1",
        "cover": "https://telegra.ph/file/01bd4046f05124f7f44e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45972",
        "pageSeq": 45972
    },
    {
        "IDcode": 45973,
        "title": "Son Ye-Eun (손예은) | [BLUECAKE] - Hardcore Gambling - Page 1",
        "cover": "https://telegra.ph/file/68a19db86311305a31c03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45973",
        "pageSeq": 45973
    },
    {
        "IDcode": 45974,
        "title": "Octokuro - Meiko Shiraki - Page 1",
        "cover": "https://telegra.ph/file/0297ef636ca4b6ebb1414.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45974",
        "pageSeq": 45974
    },
    {
        "IDcode": 45975,
        "title": "[蠢沫沫momo-][Cosplay][2b 冰雪]60P - Page 1",
        "cover": "https://telegra.ph/file/dcccea4ccae8783969a4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45975",
        "pageSeq": 45975
    },
    {
        "IDcode": 45976,
        "title": "千煌弑夜 - 英格丽特-B版 - Page 1",
        "cover": "https://telegra.ph/file/50cd2a9f060365584a3b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45976",
        "pageSeq": 45976
    },
    {
        "IDcode": 45977,
        "title": "千煌弑夜 - 英格利特C - Page 1",
        "cover": "https://telegra.ph/file/7c527900bd0a15f456096.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45977",
        "pageSeq": 45977
    },
    {
        "IDcode": 45978,
        "title": "千煌弑夜 - 英格丽特西装 - Page 1",
        "cover": "https://telegra.ph/file/4e64cd2be6a06ec66ef5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45978",
        "pageSeq": 45978
    },
    {
        "IDcode": 45979,
        "title": "爆机少女喵小吉 - 喵酱的一天 - Page 1",
        "cover": "https://telegra.ph/file/4f972b0d1768e6b7bba67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45979",
        "pageSeq": 45979
    },
    {
        "IDcode": 45980,
        "title": "HaneAme - Utaha Kasumigaoka (Saekano: How to Raise a Boring Girlfriend) - Page 1",
        "cover": "https://telegra.ph/file/5c592af74259d23023c66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45980",
        "pageSeq": 45980
    },
    {
        "IDcode": 45981,
        "title": "HaneAme - Raiden Shogun (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/6eb8be77b175c58e19a49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45981",
        "pageSeq": 45981
    },
    {
        "IDcode": 45982,
        "title": "Hane Ame - Olga Discordia wet stocking Office Lady (Kuroinu) - Page 1",
        "cover": "https://telegra.ph/file/35c4efb0ca78226cb1fe7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45982",
        "pageSeq": 45982
    },
    {
        "IDcode": 45983,
        "title": "Astol iycing - Page 1",
        "cover": "https://telegra.ph/file/4532f7d90270b70ef934d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45983",
        "pageSeq": 45983
    },
    {
        "IDcode": 45984,
        "title": "[DJAWA] BamBi - Succubus 2B - Page 1",
        "cover": "https://telegra.ph/file/b71f76992502accb6bc27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45984",
        "pageSeq": 45984
    },
    {
        "IDcode": 45985,
        "title": "Alina Becker - Tifa Gym v2 (HQ 260mb) - Page 1",
        "cover": "https://telegra.ph/file/245c9b97dd2d56f1febdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45985",
        "pageSeq": 45985
    },
    {
        "IDcode": 45986,
        "title": "[DJAWA][Kimetsu no Yaiba] Mitsuri Kanroji Son YeEun 손예은 - Page 1",
        "cover": "https://telegra.ph/file/f62146e53eb8b39d74a48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45986",
        "pageSeq": 45986
    },
    {
        "IDcode": 45987,
        "title": "Hidori Rose - Rem bride swimsuit - Page 1",
        "cover": "https://telegra.ph/file/03524039eea56d238dfd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45987",
        "pageSeq": 45987
    },
    {
        "IDcode": 45988,
        "title": "水淼aqua 神里绫华[68P1V-103MB] - Page 1",
        "cover": "https://telegra.ph/file/524ebdadedcd69d972f2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45988",
        "pageSeq": 45988
    },
    {
        "IDcode": 45989,
        "title": "G44不会受伤 - 美少女万华镜夕莉夕摩 - Page 1",
        "cover": "https://telegra.ph/file/059e03bd6927e1e16e966.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45989",
        "pageSeq": 45989
    },
    {
        "IDcode": 45990,
        "title": "Vinnegal - Makima - Page 1",
        "cover": "https://telegra.ph/file/dd09cfe2492560be623a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45990",
        "pageSeq": 45990
    },
    {
        "IDcode": 45991,
        "title": "懒懒睡不醒 - 酒吞童子 - Page 1",
        "cover": "https://telegra.ph/file/d9f856fa9bdd786e30af7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45991",
        "pageSeq": 45991
    },
    {
        "IDcode": 45992,
        "title": "Ain Nguyen - December Patreon - Page 1",
        "cover": "https://telegra.ph/file/807414d75440761cfe652.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45992",
        "pageSeq": 45992
    },
    {
        "IDcode": 45993,
        "title": "Atsuki - Suite Lane 17 - Page 1",
        "cover": "https://telegra.ph/file/ef5193b8f62a850a3681c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45993",
        "pageSeq": 45993
    },
    {
        "IDcode": 45994,
        "title": "Yoshinobi - Kokomi - Page 1",
        "cover": "https://telegra.ph/file/10016476117d7cd4e5f59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45994",
        "pageSeq": 45994
    },
    {
        "IDcode": 45995,
        "title": "Lera Himera, Octokuro, Zirael Rem - Makima, Reze, Power Cosplay - Page 1",
        "cover": "https://telegra.ph/file/c15057904790a706b2cef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45995",
        "pageSeq": 45995
    },
    {
        "IDcode": 45996,
        "title": "日奈娇 - 麻衣校服 - Page 1",
        "cover": "https://telegra.ph/file/22f4bbd8c73cd73cdf4fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45996",
        "pageSeq": 45996
    },
    {
        "IDcode": 45997,
        "title": "阿包也是兔娘 - 莫娜女仆 - Page 1",
        "cover": "https://telegra.ph/file/dc872856ed690b7a7e146.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45997",
        "pageSeq": 45997
    },
    {
        "IDcode": 45998,
        "title": "Alina Becker - 2B Straps - Page 1",
        "cover": "https://telegra.ph/file/485182ffd68727b966cdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45998",
        "pageSeq": 45998
    },
    {
        "IDcode": 45999,
        "title": "Byoru - Daki - Page 1",
        "cover": "https://telegra.ph/file/fa3cbc6b22250d76e468c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45999",
        "pageSeq": 45999
    },
    {
        "IDcode": 46000,
        "title": "ChonoBlack - Gawr Gura - Page 1",
        "cover": "https://telegra.ph/file/4c2a7de83d077421cbca9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46000",
        "pageSeq": 46000
    },
    {
        "IDcode": 46001,
        "title": "夢見 りあむ - Page 1",
        "cover": "https://telegra.ph/file/152e9f1807c3012d43796.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46001",
        "pageSeq": 46001
    },
    {
        "IDcode": 46002,
        "title": "Hane Ame 雨波 - Gotou OL black stocking (Higehiro) - Page 1",
        "cover": "https://telegra.ph/file/07e98c891c10cbe87317b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46002",
        "pageSeq": 46002
    },
    {
        "IDcode": 46003,
        "title": "清水由乃 - 埃吉尔 - Page 1",
        "cover": "https://telegra.ph/file/35b17ac6aba81624a57e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46003",
        "pageSeq": 46003
    },
    {
        "IDcode": 46004,
        "title": "[Cosplayer] Ping - Page 1",
        "cover": "https://telegra.ph/file/0e5289912819359ae8ec3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46004",
        "pageSeq": 46004
    },
    {
        "IDcode": 46005,
        "title": "Kristen Lanae - Aphrodite - Page 1",
        "cover": "https://telegra.ph/file/a0372c393902b8b679cdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46005",
        "pageSeq": 46005
    },
    {
        "IDcode": 46006,
        "title": "星之迟迟 - 爱蜜莉雅 - Page 1",
        "cover": "https://telegra.ph/file/2afb1b22c9ae7ab3695de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46006",
        "pageSeq": 46006
    },
    {
        "IDcode": 46007,
        "title": "蠢沫沫 - 2B 白婚纱 - Page 1",
        "cover": "https://telegra.ph/file/33d9d8a75c38a63020249.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46007",
        "pageSeq": 46007
    },
    {
        "IDcode": 46008,
        "title": "Mikomi Hokina - Sirius Qipao Lingerie (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/b9e42c4205b1d23b2a468.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46008",
        "pageSeq": 46008
    },
    {
        "IDcode": 46009,
        "title": "蠢沫沫 - 高雄 獒泳装 - Page 1",
        "cover": "https://telegra.ph/file/ac4a22e2d65911c48f1af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46009",
        "pageSeq": 46009
    },
    {
        "IDcode": 46010,
        "title": "雪晴 - 酒吞童子女仆 - Page 1",
        "cover": "https://telegra.ph/file/92c3090b643abb155a3b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46010",
        "pageSeq": 46010
    },
    {
        "IDcode": 46011,
        "title": "日奈娇 - 恶毒 - Page 1",
        "cover": "https://telegra.ph/file/2579a0af2f06fdea97016.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46011",
        "pageSeq": 46011
    },
    {
        "IDcode": 46012,
        "title": "日奈娇 - 95式婚纱 - Page 1",
        "cover": "https://telegra.ph/file/bd09584dc0492ee4db3da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46012",
        "pageSeq": 46012
    },
    {
        "IDcode": 46013,
        "title": "Meladinha - Emilia - Page 1",
        "cover": "https://telegra.ph/file/b1fb983dcd634786176c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46013",
        "pageSeq": 46013
    },
    {
        "IDcode": 46014,
        "title": "Mikomi Hokina - St. Louis Luxurious Ero (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/0ab8f57e5d93e5c2b30bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46014",
        "pageSeq": 46014
    },
    {
        "IDcode": 46015,
        "title": "Byoru - Raiden Shogun - Page 1",
        "cover": "https://telegra.ph/file/ed766755207d202b58dd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46015",
        "pageSeq": 46015
    },
    {
        "IDcode": 46016,
        "title": "桃小沫沫酱-穹妹 - Page 1",
        "cover": "https://telegra.ph/file/28501f19cfb6361634c43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46016",
        "pageSeq": 46016
    },
    {
        "IDcode": 46017,
        "title": "麻花麻花酱- 圣诞2b - Page 1",
        "cover": "https://telegra.ph/file/61090d4c9d9a7a55d724d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46017",
        "pageSeq": 46017
    },
    {
        "IDcode": 46018,
        "title": "千煌弑夜 - 八尺夫人 - Page 1",
        "cover": "https://telegra.ph/file/8835e5605bae3f0dad261.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46018",
        "pageSeq": 46018
    },
    {
        "IDcode": 46019,
        "title": "喵小吉 雷姆 圣诞节 - Page 1",
        "cover": "https://telegra.ph/file/942b8f708219cd1d94267.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46019",
        "pageSeq": 46019
    },
    {
        "IDcode": 46020,
        "title": "[PingPing] Kuroinu Mistioria Arte - Page 1",
        "cover": "https://telegra.ph/file/b0c1c9aa6da377b612b3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46020",
        "pageSeq": 46020
    },
    {
        "IDcode": 46021,
        "title": "Aqua 水淼 – Formidable (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/a30a0996cc19bf0a00f6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46021",
        "pageSeq": 46021
    },
    {
        "IDcode": 46022,
        "title": "雨波 - Page 1",
        "cover": "https://telegra.ph/file/be113ef600951468bc541.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46022",
        "pageSeq": 46022
    },
    {
        "IDcode": 46023,
        "title": "Shirokitsune - Shuten Douji(Caster) - Page 1",
        "cover": "https://telegra.ph/file/477a8745596fecab4d760.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46023",
        "pageSeq": 46023
    },
    {
        "IDcode": 46024,
        "title": "蠢沫沫 - 爱宕犬泳装 - Page 1",
        "cover": "https://telegra.ph/file/88b098fb3183a952e261c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46024",
        "pageSeq": 46024
    },
    {
        "IDcode": 46025,
        "title": "Tsuki Desu - Raiden - Page 1",
        "cover": "https://telegra.ph/file/9a0925c3dfd4ff53a1161.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46025",
        "pageSeq": 46025
    },
    {
        "IDcode": 46026,
        "title": "水淼aqua 恶毒 - Page 1",
        "cover": "https://telegra.ph/file/0b01195b81d2236fd44c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46026",
        "pageSeq": 46026
    },
    {
        "IDcode": 46027,
        "title": "【懒懒睡不醒】玛丽萝丝 - Page 1",
        "cover": "https://telegra.ph/file/62336315abd8003465f11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46027",
        "pageSeq": 46027
    },
    {
        "IDcode": 46028,
        "title": "RocksyLight - Ahri - Page 1",
        "cover": "https://telegra.ph/file/3c5fc9bf99a68af86ab41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46028",
        "pageSeq": 46028
    },
    {
        "IDcode": 46029,
        "title": "Ain Nguyen Asuna & Nagatoro - Page 1",
        "cover": "https://telegra.ph/file/0ed9ea96a3d7fbb3ce1fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46029",
        "pageSeq": 46029
    },
    {
        "IDcode": 46030,
        "title": "【爆机少女喵小吉】尼尔机械纪元-人形兵器 - Page 1",
        "cover": "https://telegra.ph/file/914b634a83a0bf8762220.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46030",
        "pageSeq": 46030
    },
    {
        "IDcode": 46031,
        "title": "【爆机少女喵小吉】尼尔机械纪元-花嫁 - Page 1",
        "cover": "https://telegra.ph/file/f86981dd4ee57d80cc55e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46031",
        "pageSeq": 46031
    },
    {
        "IDcode": 46032,
        "title": "習呆呆 行秋-原神 - Page 1",
        "cover": "https://telegra.ph/file/2b3b06a0532f6f54b0099.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46032",
        "pageSeq": 46032
    },
    {
        "IDcode": 46033,
        "title": "Shadory - YoRHa 2B - Page 1",
        "cover": "https://telegra.ph/file/2617a0b50e739bfe1287b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46033",
        "pageSeq": 46033
    },
    {
        "IDcode": 46034,
        "title": "Fantasy Factory 小丁]OTs-14 business suit - Page 1",
        "cover": "https://telegra.ph/file/24b57497df854e6f99a8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46034",
        "pageSeq": 46034
    },
    {
        "IDcode": 46035,
        "title": "喵小吉 雷姆 - Page 1",
        "cover": "https://telegra.ph/file/4b72c08d62e46c3102eec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46035",
        "pageSeq": 46035
    },
    {
        "IDcode": 46036,
        "title": "[小丁 Fantasy Factory] Sirius - Page 1",
        "cover": "https://telegra.ph/file/f59044f3dd605bb858502.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46036",
        "pageSeq": 46036
    },
    {
        "IDcode": 46037,
        "title": "[ふぁーむ(玉乃みみ)]二号尻型 - Page 1",
        "cover": "https://telegra.ph/file/41de2e2feb42cb8a146c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46037",
        "pageSeq": 46037
    },
    {
        "IDcode": 46038,
        "title": "Velvet Valerina - Makoto - Page 1",
        "cover": "https://telegra.ph/file/161215ca854e47896f796.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46038",
        "pageSeq": 46038
    },
    {
        "IDcode": 46039,
        "title": "[milklimxxx]【DL限定】最終的に合意になれば問題ないよね♪ま◯引きした弟を庇う姉、脅して犯して孕ませよう！「内緒にしてくれるなら、またシテもいいですよ…」 - Page 1",
        "cover": "https://telegra.ph/file/1b9f6e08b4ef8666a3b99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46039",
        "pageSeq": 46039
    },
    {
        "IDcode": 46040,
        "title": "[milklimxxx] 【DL限定】レイヤーオナホ嬢を呼びつけむちまん肉に押し潰される素股プレイを堪能！ テ◯ファのコスプレ姿で全身使っておちんぽしごかれまくりの最後は裏オプで本気イキッ！！ - Page 1",
        "cover": "https://telegra.ph/file/ce5675f058f10fa7fc7f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46040",
        "pageSeq": 46040
    },
    {
        "IDcode": 46041,
        "title": "[Fantasy Factory 小丁] - Sirius: Scorching-Hot Seirios - Page 1",
        "cover": "https://telegra.ph/file/04aed0b66ee395651bff0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46041",
        "pageSeq": 46041
    },
    {
        "IDcode": 46042,
        "title": "[Fantasy Factory 小丁] - Formidable: The Lady of the Beach - Page 1",
        "cover": "https://telegra.ph/file/092a8cead180d88df8e82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46042",
        "pageSeq": 46042
    },
    {
        "IDcode": 46043,
        "title": "[Fantasy Factory 小丁] - Kashima - Page 1",
        "cover": "https://telegra.ph/file/b5180d07b3d532f424b9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46043",
        "pageSeq": 46043
    },
    {
        "IDcode": 46044,
        "title": "[Fantasy Factory 小丁] - Shuten Douji - Page 1",
        "cover": "https://telegra.ph/file/d4343c983ecae60e49378.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46044",
        "pageSeq": 46044
    },
    {
        "IDcode": 46045,
        "title": "Hidori Rose - Bunny Le Malin cosplay - Page 1",
        "cover": "https://telegra.ph/file/3dd889fadce86b7af3d1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46045",
        "pageSeq": 46045
    },
    {
        "IDcode": 46046,
        "title": "Ely - Mujina Swimsuit - Page 1",
        "cover": "https://telegra.ph/file/2c9fcfa50f4c07d70757d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46046",
        "pageSeq": 46046
    },
    {
        "IDcode": 46047,
        "title": "Hidori Rose - Atago - Page 1",
        "cover": "https://telegra.ph/file/118aa4723956a52e18de2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46047",
        "pageSeq": 46047
    },
    {
        "IDcode": 46048,
        "title": "透明セーラー服 - Page 1",
        "cover": "https://telegra.ph/file/b1d9af92a02711d638dc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46048",
        "pageSeq": 46048
    },
    {
        "IDcode": 46049,
        "title": "Ankha - PB - Page 1",
        "cover": "https://telegra.ph/file/01bde1628d7212e5fea55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46049",
        "pageSeq": 46049
    },
    {
        "IDcode": 46050,
        "title": "KuukoW - Mirror Maiden - Page 1",
        "cover": "https://telegra.ph/file/fed39be61683156adfdef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46050",
        "pageSeq": 46050
    },
    {
        "IDcode": 46051,
        "title": "KuukoW - Lumine - Page 1",
        "cover": "https://telegra.ph/file/ad94960d88a2b36ff3465.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46051",
        "pageSeq": 46051
    },
    {
        "IDcode": 46052,
        "title": "Lera Himera - Sunstone with Alice Bong - Page 1",
        "cover": "https://telegra.ph/file/650d7d17d26a9b9804853.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46052",
        "pageSeq": 46052
    },
    {
        "IDcode": 46053,
        "title": "那位大人早期图集 - Page 1",
        "cover": "https://telegra.ph/file/4ef04642c6085b99c27d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46053",
        "pageSeq": 46053
    },
    {
        "IDcode": 46054,
        "title": "那位大人早期图集 - Page 2",
        "cover": "https://telegra.ph/file/b5fb0831a0132b5ef979d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46054",
        "pageSeq": 46054
    },
    {
        "IDcode": 46055,
        "title": "那位大人早期图集 - Page 3",
        "cover": "https://telegra.ph/file/c8f2280a67d29854614ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46055",
        "pageSeq": 46055
    },
    {
        "IDcode": 46056,
        "title": "Hane Ame - Mushoku Tensei Elinalise - Page 1",
        "cover": "https://telegra.ph/file/204093b8057497af6363a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46056",
        "pageSeq": 46056
    },
    {
        "IDcode": 46057,
        "title": "水淼aqua - Race Queen - Page 1",
        "cover": "https://telegra.ph/file/14ea919c1b05ca07e7f90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46057",
        "pageSeq": 46057
    },
    {
        "IDcode": 46058,
        "title": "KuukoW - Shuten Douji - Page 1",
        "cover": "https://telegra.ph/file/5ccd28530d255704b5672.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46058",
        "pageSeq": 46058
    },
    {
        "IDcode": 46059,
        "title": "Beke Jacoba - DVa Keyhole - Page 1",
        "cover": "https://telegra.ph/file/fe8461a8c149301372855.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46059",
        "pageSeq": 46059
    },
    {
        "IDcode": 46060,
        "title": "Hana Bunny - Yamato - Page 1",
        "cover": "https://telegra.ph/file/b9708c621c1062a855651.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46060",
        "pageSeq": 46060
    },
    {
        "IDcode": 46061,
        "title": "日奈娇 - 天狼星泳装 - Page 1",
        "cover": "https://telegra.ph/file/2ebd414ada65843059634.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46061",
        "pageSeq": 46061
    },
    {
        "IDcode": 46062,
        "title": "日奈娇 - 独角兽兵装 - Page 1",
        "cover": "https://telegra.ph/file/32352292b9838c4861948.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46062",
        "pageSeq": 46062
    },
    {
        "IDcode": 46063,
        "title": "Hana Bunny - Starbucks Ei - Page 1",
        "cover": "https://telegra.ph/file/c23669c0e49a90e29b9ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46063",
        "pageSeq": 46063
    },
    {
        "IDcode": 46064,
        "title": "Hana Bunny - Bunny Karin - Page 1",
        "cover": "https://telegra.ph/file/4e68f5485718f8d4434dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46064",
        "pageSeq": 46064
    },
    {
        "IDcode": 46065,
        "title": "Hana Bunny - Akatsuki Hinata - Page 1",
        "cover": "https://telegra.ph/file/cd431af3110923dc3a678.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46065",
        "pageSeq": 46065
    },
    {
        "IDcode": 46066,
        "title": "[Fantasy Factory]明日方舟  W - Page 1",
        "cover": "https://telegra.ph/file/a2452e39c6ab4fa753e3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46066",
        "pageSeq": 46066
    },
    {
        "IDcode": 46067,
        "title": "洛璃 - 圣诞南丁格尔 - Page 1",
        "cover": "https://telegra.ph/file/b343a0a4860e626873d47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46067",
        "pageSeq": 46067
    },
    {
        "IDcode": 46068,
        "title": "阿包也是兔娘 - NO.40 《原神甘雨》[30P-374MB] - Page 1",
        "cover": "https://telegra.ph/file/952a5561c6403674a466c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46068",
        "pageSeq": 46068
    },
    {
        "IDcode": 46069,
        "title": "KaYa 萱 - 阿尔托莉雅女仆 - Page 1",
        "cover": "https://telegra.ph/file/09402f857d24f6cc6a089.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46069",
        "pageSeq": 46069
    },
    {
        "IDcode": 46070,
        "title": "[林檎蜜紀] えちちネロちゃんの中身チラ見せ！未公開お風呂ゾーン多数♥ - Page 1",
        "cover": "https://telegra.ph/file/9303d45104e648edf27a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46070",
        "pageSeq": 46070
    },
    {
        "IDcode": 46071,
        "title": "TI Marie - Page 1",
        "cover": "https://telegra.ph/file/9d229661b3a0c828a545b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46071",
        "pageSeq": 46071
    }
];
