// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 47272,
        "title": "[水淼aqua]紫式部泳装 - Page 1",
        "cover": "https://telegra.ph/file/f2d3d3538fd0daea2f3ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47272",
        "pageSeq": 47272
    },
    {
        "IDcode": 47273,
        "title": "[水淼aqua]斯卡哈2套 - Page 1",
        "cover": "https://telegra.ph/file/623b5407516d4c9446de7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47273",
        "pageSeq": 47273
    },
    {
        "IDcode": 47274,
        "title": "[水淼aqua]天狼星 - Page 1",
        "cover": "https://telegra.ph/file/f84ec51a95eaebf99ee20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47274",
        "pageSeq": 47274
    },
    {
        "IDcode": 47275,
        "title": "[水淼aqua]公主空花 - Page 1",
        "cover": "https://telegra.ph/file/87aaf3e9a97aa5c56ebdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47275",
        "pageSeq": 47275
    },
    {
        "IDcode": 47276,
        "title": "[星之迟迟][mai sakurajima] - Page 1",
        "cover": "https://telegra.ph/file/a135a4eb82ae060a56863.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47276",
        "pageSeq": 47276
    },
    {
        "IDcode": 47277,
        "title": "宫野莉萝 德克萨斯 - Page 1",
        "cover": "https://telegra.ph/file/0738f46bc5eedb174017a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47277",
        "pageSeq": 47277
    },
    {
        "IDcode": 47278,
        "title": "Gangut (Azur Lane) [水淼 aqua] - Page 1",
        "cover": "https://telegra.ph/file/3c99240488106669c67e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47278",
        "pageSeq": 47278
    },
    {
        "IDcode": 47279,
        "title": "[小幼齿喵] 阿米娅 - Page 1",
        "cover": "https://telegra.ph/file/82145eed6c46e4668571e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47279",
        "pageSeq": 47279
    },
    {
        "IDcode": 47280,
        "title": "Hana Bunny -  Mai Sakurajima (Aobuta) - Page 1",
        "cover": "https://telegra.ph/file/dfea4840ff1aae21a6d37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47280",
        "pageSeq": 47280
    },
    {
        "IDcode": 47281,
        "title": "[一笑芳香沁] 黑兽 克洛伊 - Page 1",
        "cover": "https://telegra.ph/file/61904ef38d3334492d43b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47281",
        "pageSeq": 47281
    },
    {
        "IDcode": 47282,
        "title": "Lovely Spacekitten - Marie Kanker - Page 1",
        "cover": "https://telegra.ph/file/a98d59ce1f6bd67e874bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47282",
        "pageSeq": 47282
    },
    {
        "IDcode": 47283,
        "title": "Octokuro Model - Motoko Kusanagi - Page 1",
        "cover": "https://telegra.ph/file/53e78586d97e429522ae3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47283",
        "pageSeq": 47283
    },
    {
        "IDcode": 47284,
        "title": "[蠢沫沫] 吾妻旗袍 - Page 1",
        "cover": "https://telegra.ph/file/aebd5b5891fd72a0dcb7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47284",
        "pageSeq": 47284
    },
    {
        "IDcode": 47285,
        "title": "YoRHa No.2 Type B - Page 1",
        "cover": "https://telegra.ph/file/bc0efc69f0dcc4d2de520.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47285",
        "pageSeq": 47285
    },
    {
        "IDcode": 47286,
        "title": "[水淼aqua]幻想金莲 - Page 1",
        "cover": "https://telegra.ph/file/2c30dd27160439bc88bf9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47286",
        "pageSeq": 47286
    },
    {
        "IDcode": 47287,
        "title": "[水淼aqua]黑白2B - Page 1",
        "cover": "https://telegra.ph/file/5bd4f7c1a12ef7c4e97c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47287",
        "pageSeq": 47287
    },
    {
        "IDcode": 47288,
        "title": "Disharmonica - Saber - Page 1",
        "cover": "https://telegra.ph/file/85254c1e3d6a374331f1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47288",
        "pageSeq": 47288
    },
    {
        "IDcode": 47289,
        "title": "[Hokunaimeko] 式波(明日香) - Page 1",
        "cover": "https://telegra.ph/file/d251ca0286efcc1b2b751.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47289",
        "pageSeq": 47289
    },
    {
        "IDcode": 47290,
        "title": "Hidori Rose - Mai Sakurajima (Aobuta) - Page 1",
        "cover": "https://telegra.ph/file/a749195a835641dff105e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47290",
        "pageSeq": 47290
    },
    {
        "IDcode": 47291,
        "title": "[Hokunaimeko] No 15 爱宕真夏 - Page 1",
        "cover": "https://telegra.ph/file/ec167abe40be5f86cbe05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47291",
        "pageSeq": 47291
    },
    {
        "IDcode": 47292,
        "title": "Hana Bunny - Mitsuri Kanroji (Demon Slayer) - Page 1",
        "cover": "https://telegra.ph/file/63d8b7dd03e8691f2af86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47292",
        "pageSeq": 47292
    },
    {
        "IDcode": 47293,
        "title": "Hana Bunny - Do-S (One-Punch Man) - Page 1",
        "cover": "https://telegra.ph/file/6d67b7a57074472573da7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47293",
        "pageSeq": 47293
    },
    {
        "IDcode": 47294,
        "title": "[小幼齿喵] 白上吹雪 - Page 1",
        "cover": "https://telegra.ph/file/01f9533d13fa573d37083.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47294",
        "pageSeq": 47294
    },
    {
        "IDcode": 47295,
        "title": "Shirokitsune - Tifa - Page 1",
        "cover": "https://telegra.ph/file/ffb58b4e2c85a56bdc9d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47295",
        "pageSeq": 47295
    },
    {
        "IDcode": 47296,
        "title": "みさ呆呆 眼帯ブラ巫女緊縛 - Page 1",
        "cover": "https://telegra.ph/file/a79749d48b23187e1e0f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47296",
        "pageSeq": 47296
    },
    {
        "IDcode": 47297,
        "title": "[白袜袜格罗丫]春日野穹 - Page 1",
        "cover": "https://telegra.ph/file/73d4b1f37b8713ef9b281.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47297",
        "pageSeq": 47297
    },
    {
        "IDcode": 47298,
        "title": "绵羊喵-埃罗芒白丝cosplay - Page 1",
        "cover": "https://telegra.ph/file/8e875c1e191f4724b6643.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47298",
        "pageSeq": 47298
    },
    {
        "IDcode": 47299,
        "title": "喵呜酱-雷姆 - Page 1",
        "cover": "https://telegra.ph/file/46eb97cc7c8c1d855c204.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47299",
        "pageSeq": 47299
    },
    {
        "IDcode": 47300,
        "title": "[少女枪械师] 蕾姆2 - Page 1",
        "cover": "https://telegra.ph/file/4b332538dbd074c385135.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47300",
        "pageSeq": 47300
    },
    {
        "IDcode": 47301,
        "title": "[Hokunaimeko] NO11 玉藻前 水着ver 踊り子風 - Page 1",
        "cover": "https://telegra.ph/file/c203e0666433ee767aba1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47301",
        "pageSeq": 47301
    },
    {
        "IDcode": 47302,
        "title": "[Hokunaimeko] コスプレ自撮りまとめ - Page 1",
        "cover": "https://telegra.ph/file/caf0cc422d0b67cfbfb8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47302",
        "pageSeq": 47302
    },
    {
        "IDcode": 47303,
        "title": "[Hokunaimeko] NO2 マシュ キリエライト - Page 1",
        "cover": "https://telegra.ph/file/bd9950e6d77001a34b448.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47303",
        "pageSeq": 47303
    },
    {
        "IDcode": 47304,
        "title": "[Hokunaimeko][關羽雲長]31P - Page 1",
        "cover": "https://telegra.ph/file/ac673291345d6861a2014.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47304",
        "pageSeq": 47304
    },
    {
        "IDcode": 47305,
        "title": "Alinorac - D.Va - Page 1",
        "cover": "https://telegra.ph/file/5f34e94cb4299fd19f479.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47305",
        "pageSeq": 47305
    },
    {
        "IDcode": 47306,
        "title": "翔鶴·鹬：@佐小紅琪、瑞鶴·鶴：@一只冉呐 (碧藍航線 ) - Page 1",
        "cover": "https://telegra.ph/file/326e26d0375d6a5403314.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47306",
        "pageSeq": 47306
    },
    {
        "IDcode": 47307,
        "title": "Lera Himera - Zero Two - Page 1",
        "cover": "https://telegra.ph/file/cc9544bc76881bc770abb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47307",
        "pageSeq": 47307
    },
    {
        "IDcode": 47308,
        "title": "MikomiHokina - Shimakaze (Pasties Version) - Page 1",
        "cover": "https://telegra.ph/file/75e9eca5367b3c5bdf8b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47308",
        "pageSeq": 47308
    },
    {
        "IDcode": 47309,
        "title": "🌸2020春新刊🌸FGO競泳武蔵 ROM - Page 1",
        "cover": "https://telegra.ph/file/9d24af4a86a3bb4662efa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47309",
        "pageSeq": 47309
    },
    {
        "IDcode": 47310,
        "title": "[bit (橋本ありな)] bit101 (新世紀エヴァンゲリオン) - Page 1",
        "cover": "https://telegra.ph/file/b1416b6f13c420b937609.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47310",
        "pageSeq": 47310
    },
    {
        "IDcode": 47311,
        "title": "[Hokunaimeko] NO14 コスプレー２Ｂちゃん- - Page 1",
        "cover": "https://telegra.ph/file/2cd2dce278bbb12b7d580.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47311",
        "pageSeq": 47311
    },
    {
        "IDcode": 47312,
        "title": "[bit (橋本ありな)] bit080 (艦隊これくしょん -艦これ-) - Page 1",
        "cover": "https://telegra.ph/file/2f5dba5260d30d179e5fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47312",
        "pageSeq": 47312
    },
    {
        "IDcode": 47313,
        "title": "[bit (橋本ありな)] bit092 (アイドルマスター シンデレラガールズ) - Page 1",
        "cover": "https://telegra.ph/file/109e62f6adae66bcb1802.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47313",
        "pageSeq": 47313
    },
    {
        "IDcode": 47314,
        "title": "[鬼畜瑶]玛修训练服 - Page 1",
        "cover": "https://telegra.ph/file/de89ab86b9b97f8301a9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47314",
        "pageSeq": 47314
    },
    {
        "IDcode": 47315,
        "title": "一笑芳香沁 - 黑兽 - Page 1",
        "cover": "https://telegra.ph/file/0f8c01300a505c7e836eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47315",
        "pageSeq": 47315
    },
    {
        "IDcode": 47316,
        "title": "Reimu Hakurei  (蜜汁猫裘) - Page 1",
        "cover": "https://telegra.ph/file/84bda1182fbe478b28194.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47316",
        "pageSeq": 47316
    },
    {
        "IDcode": 47317,
        "title": "Sora Kasugano by Tsuki Desu - Page 1",
        "cover": "https://telegra.ph/file/93d72c4290b95caa3069f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47317",
        "pageSeq": 47317
    },
    {
        "IDcode": 47318,
        "title": "Lovely Spacekitten - Frankie Foster - Page 1",
        "cover": "https://telegra.ph/file/dac22a896709b48fdc57f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47318",
        "pageSeq": 47318
    },
    {
        "IDcode": 47319,
        "title": "Ereshkigal by Dosya Gasai - Page 1",
        "cover": "https://telegra.ph/file/467c7dfad59d055adb5f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47319",
        "pageSeq": 47319
    },
    {
        "IDcode": 47320,
        "title": "Mordred YD Maid ver by 沖田凜花Rinka - Page 1",
        "cover": "https://telegra.ph/file/f210461bb393a00ac46c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47320",
        "pageSeq": 47320
    },
    {
        "IDcode": 47321,
        "title": "Fate/EXTELLA Nero by 沖田凜花Rinka - Page 1",
        "cover": "https://telegra.ph/file/269fc65f6758de6a34ace.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47321",
        "pageSeq": 47321
    },
    {
        "IDcode": 47322,
        "title": "Shirokitsune - Shinobu Kocho - Page 1",
        "cover": "https://telegra.ph/file/2a1684204adbbb932c670.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47322",
        "pageSeq": 47322
    },
    {
        "IDcode": 47323,
        "title": "Tamamo no Mae by 菌烨tako - Page 1",
        "cover": "https://telegra.ph/file/3dfd6d5b30ceaea4f0eda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47323",
        "pageSeq": 47323
    },
    {
        "IDcode": 47324,
        "title": "[吸血鬼映画]和泉纱雾 - Page 1",
        "cover": "https://telegra.ph/file/4319ebdf6f288df3ce621.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47324",
        "pageSeq": 47324
    },
    {
        "IDcode": 47325,
        "title": "Danielle Beaulieu - Glaceon - Page 1",
        "cover": "https://telegra.ph/file/c5742d9d1d72d8dfb094a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47325",
        "pageSeq": 47325
    },
    {
        "IDcode": 47326,
        "title": "[サクさち合同企画] セイバーボンテージコスプレ写真集 Si-ri（saku ver.）＆ Si-ri-another edition- - Page 1",
        "cover": "https://telegra.ph/file/2a3d2b04c22cadd7ddf35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47326",
        "pageSeq": 47326
    },
    {
        "IDcode": 47327,
        "title": "Hidori Rose - Violet Evergarden - Page 1",
        "cover": "https://telegra.ph/file/4fea2923bef1cb1b1e22f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47327",
        "pageSeq": 47327
    },
    {
        "IDcode": 47328,
        "title": "Yoshinobi - Honoka Gold Bikini - Page 1",
        "cover": "https://telegra.ph/file/958016c14740b7c57b70e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47328",
        "pageSeq": 47328
    },
    {
        "IDcode": 47329,
        "title": "[糯美子Mini]不知火舞 - Page 1",
        "cover": "https://telegra.ph/file/1d1d6baded61d790b6164.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47329",
        "pageSeq": 47329
    },
    {
        "IDcode": 47330,
        "title": "[糯美子Mini]娜美 - Page 1",
        "cover": "https://telegra.ph/file/905b78879f371fb9354e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47330",
        "pageSeq": 47330
    },
    {
        "IDcode": 47331,
        "title": "Hidori Rose - Takao (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/4305e87ad00357b4cd922.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47331",
        "pageSeq": 47331
    },
    {
        "IDcode": 47332,
        "title": "まゆろん୨୧レスカⅣ - Page 1",
        "cover": "https://telegra.ph/file/eb4276f4ee0f04b5ecfc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47332",
        "pageSeq": 47332
    },
    {
        "IDcode": 47333,
        "title": "COSPLAY图集 - Page 1",
        "cover": "https://telegra.ph/file/35a6d1214a3950a250811.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47333",
        "pageSeq": 47333
    },
    {
        "IDcode": 47334,
        "title": "League Of Legends Cosplay Collection (Uncensored) - Page 1",
        "cover": "https://telegra.ph/file/f24dfe226c81e85beb526.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47334",
        "pageSeq": 47334
    },
    {
        "IDcode": 47335,
        "title": "[Cosplay]大兔牙疼的嘞 - Page 1",
        "cover": "https://telegra.ph/file/340d79b3b18c94218f509.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47335",
        "pageSeq": 47335
    },
    {
        "IDcode": 47336,
        "title": "从从从从鸾 - 闪灵私设 - Page 1",
        "cover": "https://telegra.ph/file/9b51334c0509311dd3b2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47336",
        "pageSeq": 47336
    },
    {
        "IDcode": 47337,
        "title": "Hana Bunny - Velma (Scooby-Doo) - Page 1",
        "cover": "https://telegra.ph/file/6aa478df875a2ab545e4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47337",
        "pageSeq": 47337
    },
    {
        "IDcode": 47338,
        "title": "[Hokunaimeko]NO22 Fate GO Saber - Page 1",
        "cover": "https://telegra.ph/file/752e54276da91fcb668b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47338",
        "pageSeq": 47338
    },
    {
        "IDcode": 47339,
        "title": "[一小央泽] 蒂法 - Page 1",
        "cover": "https://telegra.ph/file/5fbb34b6014f37686c87f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47339",
        "pageSeq": 47339
    },
    {
        "IDcode": 47340,
        "title": "ShiroKitsune - Rei Ayanami - Page 1",
        "cover": "https://telegra.ph/file/3363422c6308c077d3c75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47340",
        "pageSeq": 47340
    },
    {
        "IDcode": 47341,
        "title": "[朱可儿] 不知火舞 - Page 1",
        "cover": "https://telegra.ph/file/adde4c3a99d5e063f817b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47341",
        "pageSeq": 47341
    },
    {
        "IDcode": 47342,
        "title": "ShiroKitsune - Yumemi Riamu - Page 1",
        "cover": "https://telegra.ph/file/c67666da38abad305a523.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47342",
        "pageSeq": 47342
    },
    {
        "IDcode": 47343,
        "title": "ShiroKitsune - Bunny 2B - Page 1",
        "cover": "https://telegra.ph/file/fb2177541e8099a0aea18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47343",
        "pageSeq": 47343
    },
    {
        "IDcode": 47344,
        "title": "(C97) [アトリエ ナミナミ (美南 ナミ)] 麗しき Bright Ruler - Page 1",
        "cover": "https://telegra.ph/file/a3be2c8f4435c557b865a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47344",
        "pageSeq": 47344
    },
    {
        "IDcode": 47345,
        "title": "喵呜酱-神乐 - Page 1",
        "cover": "https://telegra.ph/file/286c59ddc06b15cf86f5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47345",
        "pageSeq": 47345
    },
    {
        "IDcode": 47346,
        "title": "ShiroKitsune - Yumemi Riamu - Page 1",
        "cover": "https://telegra.ph/file/7b877b23940eb5b04ce05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47346",
        "pageSeq": 47346
    },
    {
        "IDcode": 47347,
        "title": "Hana Bunny - Tamamo Maid (Fate/GO) - Page 1",
        "cover": "https://telegra.ph/file/1fb475f98154f93e38577.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47347",
        "pageSeq": 47347
    },
    {
        "IDcode": 47348,
        "title": "Alin Ma - Page 1",
        "cover": "https://telegra.ph/file/f8eef51e1a49f80e87b35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47348",
        "pageSeq": 47348
    },
    {
        "IDcode": 47349,
        "title": "Kuuko - ShutenOniLingerie - Page 1",
        "cover": "https://telegra.ph/file/b751cec047e56b956b834.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47349",
        "pageSeq": 47349
    },
    {
        "IDcode": 47350,
        "title": "Mordred Ero Cosplay by HidoriRose - Page 1",
        "cover": "https://telegra.ph/file/960848796e467a5b788fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47350",
        "pageSeq": 47350
    },
    {
        "IDcode": 47351,
        "title": "Hana Bunny - Rin Tohsaka - Page 1",
        "cover": "https://telegra.ph/file/f9fbda1614754e54f165c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47351",
        "pageSeq": 47351
    },
    {
        "IDcode": 47352,
        "title": "QQUEENCOSPLAYER - Page 1",
        "cover": "https://telegra.ph/file/3f1580219729c976c3569.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47352",
        "pageSeq": 47352
    },
    {
        "IDcode": 47353,
        "title": "QQUEENCOSPLAYER 2 - Page 1",
        "cover": "https://telegra.ph/file/03f74a14be44e652c1796.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47353",
        "pageSeq": 47353
    },
    {
        "IDcode": 47354,
        "title": "Hidori & Byoru - Page 1",
        "cover": "https://telegra.ph/file/f3862dc072d865d892384.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47354",
        "pageSeq": 47354
    },
    {
        "IDcode": 47355,
        "title": "Rainbow Dash - Page 1",
        "cover": "https://telegra.ph/file/b15fb11982deb8aeb0227.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47355",
        "pageSeq": 47355
    },
    {
        "IDcode": 47356,
        "title": "[Nonsummerjack] BUNNY SELECTION -HEROES- - Page 1",
        "cover": "https://telegra.ph/file/1f8b593b53e19cdf9d2b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47356",
        "pageSeq": 47356
    },
    {
        "IDcode": 47357,
        "title": "拼音嘤嘤嘤 - 高雄旗袍+卯月女仆+加藤惠 - Page 1",
        "cover": "https://telegra.ph/file/19dfeed98cef3a5b10e2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47357",
        "pageSeq": 47357
    },
    {
        "IDcode": 47358,
        "title": "2B Christmas - Page 1",
        "cover": "https://telegra.ph/file/cc7d834035e4568eed8ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47358",
        "pageSeq": 47358
    },
    {
        "IDcode": 47359,
        "title": "弥音音 - 八重樱+德莉莎+丽塔浣溪沙 - Page 1",
        "cover": "https://telegra.ph/file/033679d1babbc60ad4154.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47359",
        "pageSeq": 47359
    },
    {
        "IDcode": 47360,
        "title": "你的负卿 - 穹妹+虞姬+玛修泳装 - Page 1",
        "cover": "https://telegra.ph/file/a13661e011c0d966c25ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47360",
        "pageSeq": 47360
    },
    {
        "IDcode": 47361,
        "title": "迷失人形 - 合集 - Page 1",
        "cover": "https://telegra.ph/file/440eb215205a54853a984.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47361",
        "pageSeq": 47361
    },
    {
        "IDcode": 47362,
        "title": "你的负卿 - 加藤惠+学姐+英梨梨 - Page 1",
        "cover": "https://telegra.ph/file/460e14855bef4dd244b68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47362",
        "pageSeq": 47362
    },
    {
        "IDcode": 47363,
        "title": "你的负卿 - 95式2套 - Page 1",
        "cover": "https://telegra.ph/file/67fb62da89999f4ef478f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47363",
        "pageSeq": 47363
    },
    {
        "IDcode": 47364,
        "title": "你的负卿 - 爱宕4套 - Page 1",
        "cover": "https://telegra.ph/file/e5af9a07ad71f66d9db3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47364",
        "pageSeq": 47364
    },
    {
        "IDcode": 47365,
        "title": "[Hokunaimeko] - Page 1",
        "cover": "https://telegra.ph/file/2665d9a4d06d7eb077bb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47365",
        "pageSeq": 47365
    },
    {
        "IDcode": 47366,
        "title": "[My suite (Atsuki)] C91 omake - Page 1",
        "cover": "https://telegra.ph/file/264840a79ef85109c57ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47366",
        "pageSeq": 47366
    },
    {
        "IDcode": 47367,
        "title": "[小野妹子w]Azur Lane - Page 1",
        "cover": "https://telegra.ph/file/cab8076ba7c5aecf7326b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47367",
        "pageSeq": 47367
    },
    {
        "IDcode": 47368,
        "title": "镜酱 - ヨルハ二号B型 - Page 1",
        "cover": "https://telegra.ph/file/59b520180b678727262d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47368",
        "pageSeq": 47368
    },
    {
        "IDcode": 47369,
        "title": "弩Sの緊縛凌辱!!! 乳神樂樂 - Page 1",
        "cover": "https://telegra.ph/file/298d2cfaef5313f01dd96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47369",
        "pageSeq": 47369
    },
    {
        "IDcode": 47370,
        "title": "Hana Bunny - Sword Maiden (Goblin Slayer) - Page 1",
        "cover": "https://telegra.ph/file/2de1ed645daf045e3cdc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47370",
        "pageSeq": 47370
    },
    {
        "IDcode": 47371,
        "title": "(CH25) [HERESY (林檎蜜紀)] エッチな謎のヒロインXXの人 - Page 1",
        "cover": "https://telegra.ph/file/c0441de180982b13a8b0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47371",
        "pageSeq": 47371
    }
];
