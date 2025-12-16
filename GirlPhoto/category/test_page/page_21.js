// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 24229,
        "title": "巧克力小圆面包 - &胡桃喵 恋兔之踪 [122P-6V 2.37 GB]",
        "cover": "https://telegra.ph/file/40ae950e65211f731fce8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24229",
        "pageSeq": 24229
    },
    {
        "IDcode": 24230,
        "title": "巧克力小圆面包 - 入职训练 [45P-524.44 MB]",
        "cover": "https://telegra.ph/file/b30437da67614a8bddd58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24230",
        "pageSeq": 24230
    },
    {
        "IDcode": 24231,
        "title": "巧克力小圆面包 - 暗香疏影 [115P-4V 1.98 GB]",
        "cover": "https://telegra.ph/file/f9cbb1b3009d29e5aa358.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24231",
        "pageSeq": 24231
    },
    {
        "IDcode": 24232,
        "title": "巧克力小圆面包 - 轻纱幔帐 [62P-4V 1.71 GB]",
        "cover": "https://telegra.ph/file/51e1361dd6686c0ea2945.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24232",
        "pageSeq": 24232
    },
    {
        "IDcode": 24233,
        "title": "起司块wii - 下平玲花绅士版",
        "cover": "https://telegra.ph/file/2baffda344cf6d36e0f15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24233",
        "pageSeq": 24233
    },
    {
        "IDcode": 24234,
        "title": "香草喵露露 - 2023年11月舰长 女警[40P1V-1.54GB]",
        "cover": "https://telegra.ph/file/9e16951fc6c6005f672af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24234",
        "pageSeq": 24234
    },
    {
        "IDcode": 24235,
        "title": "星之迟迟 - 2024年05月计划B 初音未来 兔子洞[85P2V-3.2GB]",
        "cover": "https://telegra.ph/file/68560f03e17b242370086.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24235",
        "pageSeq": 24235
    },
    {
        "IDcode": 24236,
        "title": "落落Raku - Bokura no LIVE Kimi to no LIFE",
        "cover": "https://telegra.ph/file/15754b30cad3896207ae5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24236",
        "pageSeq": 24236
    },
    {
        "IDcode": 24237,
        "title": "桃良阿宅 - 绳艺 [64P-722MB]",
        "cover": "https://telegra.ph/file/817cf36b04d50c999652e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24237",
        "pageSeq": 24237
    },
    {
        "IDcode": 24238,
        "title": "桃良阿宅 - 医务室 [118P-909MB]",
        "cover": "https://telegra.ph/file/81e81a5e272e23fc3d268.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24238",
        "pageSeq": 24238
    },
    {
        "IDcode": 24239,
        "title": "日奈娇 - OTs-14 闪电姐 天意佳人",
        "cover": "https://telegra.ph/file/d66a04dc1d1df8f230833.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24239",
        "pageSeq": 24239
    },
    {
        "IDcode": 24240,
        "title": "桜井宁宁 超涩女仆 [79P1V-3.73GB]",
        "cover": "https://telegra.ph/file/9f06a20244f19fcd7b378.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24240",
        "pageSeq": 24240
    },
    {
        "IDcode": 24241,
        "title": "咬人小小兔 - 7月作品『自助洗衣房』怦然心动",
        "cover": "https://telegra.ph/file/3085c04b34e3f66b7c0a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24241",
        "pageSeq": 24241
    },
    {
        "IDcode": 24242,
        "title": "咬人小小兔 - 7月作品『医疗兔-梅里』不得不爱",
        "cover": "https://telegra.ph/file/ce7e073eda31873b74a05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24242",
        "pageSeq": 24242
    },
    {
        "IDcode": 24243,
        "title": "桜井宁宁 - 和风比基尼",
        "cover": "https://telegra.ph/file/b24557247023ab69b60d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24243",
        "pageSeq": 24243
    },
    {
        "IDcode": 24244,
        "title": "神楽坂真冬 - 战斗修女",
        "cover": "https://telegra.ph/file/c08dcb682e2dfb9da0da4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24244",
        "pageSeq": 24244
    },
    {
        "IDcode": 24245,
        "title": "日奈娇 (樱井小莜) - 天雨亚子",
        "cover": "https://telegra.ph/file/1744f85c461693062efab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24245",
        "pageSeq": 24245
    },
    {
        "IDcode": 24246,
        "title": "鱼子酱Fish - 看病",
        "cover": "https://telegra.ph/file/ed9eaafa0d2e9fa9313d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24246",
        "pageSeq": 24246
    },
    {
        "IDcode": 24247,
        "title": "布丁大法 - 覆盆子眼镜娘",
        "cover": "https://telegra.ph/file/6f54329a444b9552aab1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24247",
        "pageSeq": 24247
    },
    {
        "IDcode": 24248,
        "title": "Byoru 三笠阿克曼-进击的巨人",
        "cover": "https://telegra.ph/file/839194995e57f3c9c59f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24248",
        "pageSeq": 24248
    },
    {
        "IDcode": 24249,
        "title": "日奈娇 - 家教",
        "cover": "https://telegra.ph/file/56f032ff592adfe2b5141.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24249",
        "pageSeq": 24249
    },
    {
        "IDcode": 24250,
        "title": "雪晴Astar - 喜多川海梦 利兹 恶魔",
        "cover": "https://telegra.ph/file/63f298cf291d965ecd943.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24250",
        "pageSeq": 24250
    },
    {
        "IDcode": 24251,
        "title": "水淼Aqua C103一之濑明日奈A",
        "cover": "https://telegra.ph/file/69029bdbd8d8edf5e2d27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24251",
        "pageSeq": 24251
    },
    {
        "IDcode": 24252,
        "title": "水淼Aqua C103一之濑明日奈B",
        "cover": "https://telegra.ph/file/742ef2091a5b7f781e219.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24252",
        "pageSeq": 24252
    },
    {
        "IDcode": 24253,
        "title": "水淼Aqua C104璃月",
        "cover": "https://telegra.ph/file/6b782f4012134dd5d043d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24253",
        "pageSeq": 24253
    },
    {
        "IDcode": 24254,
        "title": "水淼Aqua C104稻妻",
        "cover": "https://telegra.ph/file/dfef4ddfad9350a9ed52f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24254",
        "pageSeq": 24254
    },
    {
        "IDcode": 24255,
        "title": "咬人小小兔 - 黑凤梨[42P+1V-1.08G]",
        "cover": "https://telegra.ph/file/56dd2bb09c593eae391b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24255",
        "pageSeq": 24255
    },
    {
        "IDcode": 24256,
        "title": "咬人小小兔 - 夏の葵[73P+1V-1.52G]",
        "cover": "https://telegra.ph/file/5a2725dca72822fc4d6a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24256",
        "pageSeq": 24256
    },
    {
        "IDcode": 24257,
        "title": "咬人小小兔 - 迷宫菇生食指南 小鹿乱撞[74P+1V-1.52G]",
        "cover": "https://telegra.ph/file/b572c872796384dde80aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24257",
        "pageSeq": 24257
    },
    {
        "IDcode": 24258,
        "title": "年年 - 废墟 [60P-228MB]",
        "cover": "https://telegra.ph/file/0732a49f2599258fef60d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24258",
        "pageSeq": 24258
    },
    {
        "IDcode": 24259,
        "title": "年年 - 花野 [53P-147MB]",
        "cover": "https://telegra.ph/file/bc9d362814692edd90fa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24259",
        "pageSeq": 24259
    },
    {
        "IDcode": 24260,
        "title": "疯猫ss - 少女的衣橱 连体女仆",
        "cover": "https://telegra.ph/file/fce55731e6c351ab546e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24260",
        "pageSeq": 24260
    },
    {
        "IDcode": 24261,
        "title": "咬人小小兔 - 8月作品『闪耀夏日-阿尼斯』 恋爱告急 [80P1V-1.34GB]",
        "cover": "https://telegra.ph/file/549d4f4b6babd280bf187.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24261",
        "pageSeq": 24261
    },
    {
        "IDcode": 24262,
        "title": "咬人小小兔 - 8月作品『妄想病栋』 你的猫咪 [82P1V-1.56GB]",
        "cover": "https://telegra.ph/file/e5e5f67ae548493a0b4d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24262",
        "pageSeq": 24262
    },
    {
        "IDcode": 24263,
        "title": "咬人小小兔 - 8月作品『慵懒逐浪-艾莲·乔』Summertime [79P1V-1.52GB]",
        "cover": "https://telegra.ph/file/3c0360245b0e7497b95cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24263",
        "pageSeq": 24263
    },
    {
        "IDcode": 24264,
        "title": "艾西Aiwest 碧蓝档案伊落玛丽 修女 睡衣 体操服",
        "cover": "https://telegra.ph/file/177c3e5916b212963043c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24264",
        "pageSeq": 24264
    },
    {
        "IDcode": 24265,
        "title": "麻花麻花酱 - 间谍过家家 约尔",
        "cover": "https://telegra.ph/file/9b363590a54d185bd51ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24265",
        "pageSeq": 24265
    },
    {
        "IDcode": 24266,
        "title": "是三不是世w - 喜多川海梦黑山梗菜",
        "cover": "https://telegra.ph/file/891ca5d08bd67456363c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24266",
        "pageSeq": 24266
    },
    {
        "IDcode": 24267,
        "title": "蠢沫沫 - 柊舞缇娜 [87P2V-1.05GB]",
        "cover": "https://telegra.ph/file/af30d349dae1bbfd17466.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24267",
        "pageSeq": 24267
    },
    {
        "IDcode": 24268,
        "title": "蠢沫沫 - 橱窗娃娃 [135P-1.16GB]",
        "cover": "https://telegra.ph/file/bf9daac5a56ba42e9975c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24268",
        "pageSeq": 24268
    },
    {
        "IDcode": 24269,
        "title": "阿雪雪 - 蕾姆女仆 [87P+3V-1.06GB]",
        "cover": "https://telegra.ph/file/4226cd2784cae3b9e60e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24269",
        "pageSeq": 24269
    },
    {
        "IDcode": 24270,
        "title": "沖田凜花Rinka - Marie Rose [79P1V-352MB]",
        "cover": "https://telegra.ph/file/e9396107fcaff92ed34e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24270",
        "pageSeq": 24270
    },
    {
        "IDcode": 24271,
        "title": "沖田凜花Rinka - Marie Rose 私訊解鎖",
        "cover": "https://telegra.ph/file/a9fce2909dec8733e8a3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24271",
        "pageSeq": 24271
    },
    {
        "IDcode": 24272,
        "title": "Quan冉有点饿（拖拉大王） - 樋口圆香",
        "cover": "https://telegra.ph/file/c157308b1170bd708cb85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24272",
        "pageSeq": 24272
    },
    {
        "IDcode": 24273,
        "title": "Quan冉有点饿（拖拉大王） - 花火",
        "cover": "https://telegra.ph/file/106b485954e5c22320e28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24273",
        "pageSeq": 24273
    },
    {
        "IDcode": 24274,
        "title": "Quan冉有点饿（拖拉大王） - 芙莉莲",
        "cover": "https://telegra.ph/file/a0d29cb760b69e0bc5723.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24274",
        "pageSeq": 24274
    },
    {
        "IDcode": 24275,
        "title": "麻花麻花酱 - 生化危机 艾达王",
        "cover": "https://telegra.ph/file/6857fc6f0b9896f92ad4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24275",
        "pageSeq": 24275
    },
    {
        "IDcode": 24276,
        "title": "麻花麻花酱 - 蔚蓝档案 飞鸟马时",
        "cover": "https://telegra.ph/file/5fd7b9a6d89445006895b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24276",
        "pageSeq": 24276
    },
    {
        "IDcode": 24277,
        "title": "起司块wii - 柴郡礼服 [75P4V-637MB]",
        "cover": "https://telegra.ph/file/e40a58124b84a401253b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24277",
        "pageSeq": 24277
    },
    {
        "IDcode": 24278,
        "title": "起司块wii - 埃及猫[56P4V-198MB]",
        "cover": "https://telegra.ph/file/4236e5faa6783d7f5431b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24278",
        "pageSeq": 24278
    },
    {
        "IDcode": 24279,
        "title": "半半子 - EllenJoe🦈エレン✂️🖤[48P-162MB]",
        "cover": "https://telegra.ph/file/75906a0042d11cfa04e8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24279",
        "pageSeq": 24279
    },
    {
        "IDcode": 24280,
        "title": "桜井宁宁 - 小红帽 [70P-3.12GB]",
        "cover": "https://telegra.ph/file/06942b01e02211b0f61ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=24280",
        "pageSeq": 24280
    }
];
