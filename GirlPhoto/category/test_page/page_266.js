// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 48672,
        "title": "Lada Lyumos - Ashley - Page 1",
        "cover": "https://telegra.ph/file/bcc5ad2ea233d1621ec5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48672",
        "pageSeq": 48672
    },
    {
        "IDcode": 48673,
        "title": "Yangyi_Mary - Page 1",
        "cover": "https://telegra.ph/file/2ed6f1fc397e795947cbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48673",
        "pageSeq": 48673
    },
    {
        "IDcode": 48674,
        "title": "Voezacos - Olga Discordia - Page 1",
        "cover": "https://telegra.ph/file/90e59618bfd01caf56326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48674",
        "pageSeq": 48674
    },
    {
        "IDcode": 48675,
        "title": "沖田凜花 - 天音かなた - Page 1",
        "cover": "https://telegra.ph/file/d5ba0dfa13db35310d792.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48675",
        "pageSeq": 48675
    },
    {
        "IDcode": 48676,
        "title": "Anna Aifert - Rosaria - Page 1",
        "cover": "https://telegra.ph/file/09c04c1a0d120f91e1fcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48676",
        "pageSeq": 48676
    },
    {
        "IDcode": 48677,
        "title": "小仓千代w - Spider Gwen - Page 1",
        "cover": "https://telegra.ph/file/dfd7ce4e72c152a1d3e30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48677",
        "pageSeq": 48677
    },
    {
        "IDcode": 48678,
        "title": "Meriol - Tifa - Page 1",
        "cover": "https://telegra.ph/file/0f2c9a7923103eb2787c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48678",
        "pageSeq": 48678
    },
    {
        "IDcode": 48679,
        "title": "AT鲨 - 有栖マナ - Page 1",
        "cover": "https://telegra.ph/file/83f968d2710a1701c9431.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48679",
        "pageSeq": 48679
    },
    {
        "IDcode": 48680,
        "title": "[MeriolChan] Kafka - Page 1",
        "cover": "https://telegra.ph/file/14d2f798af3642a4dc04b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48680",
        "pageSeq": 48680
    },
    {
        "IDcode": 48681,
        "title": "Sweetie Fox - Tatsumaki - Page 1",
        "cover": "https://telegra.ph/file/69c72f84465dd21b1b222.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48681",
        "pageSeq": 48681
    },
    {
        "IDcode": 48682,
        "title": "Seele麦麦 资助麦麦2 [82P] - Page 1",
        "cover": "https://telegra.ph/file/b00a71f847a17067dc2b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48682",
        "pageSeq": 48682
    },
    {
        "IDcode": 48683,
        "title": "桜井宁宁 - 毒蛇兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/ab36626a1bdf2a3ce8d49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48683",
        "pageSeq": 48683
    },
    {
        "IDcode": 48684,
        "title": "Lostwind10 - Kisaki - Page 1",
        "cover": "https://telegra.ph/file/b69db4a940879f20a4f8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48684",
        "pageSeq": 48684
    },
    {
        "IDcode": 48685,
        "title": "Coser黏黏团子兔 特典 蕾姆咩咩 - Page 1",
        "cover": "https://telegra.ph/file/3d4a786bce1fe24d18c1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48685",
        "pageSeq": 48685
    },
    {
        "IDcode": 48686,
        "title": "Meenfox - Yelan - Page 1",
        "cover": "https://telegra.ph/file/2975e012759590998b606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48686",
        "pageSeq": 48686
    },
    {
        "IDcode": 48687,
        "title": "Hana Bunny - Anis - Page 1",
        "cover": "https://telegra.ph/file/bb6d514f8c7e2083aa6a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48687",
        "pageSeq": 48687
    },
    {
        "IDcode": 48688,
        "title": "Yoshinobi - Cinnamon - Page 1",
        "cover": "https://telegra.ph/file/752415e17015865b4c0ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48688",
        "pageSeq": 48688
    },
    {
        "IDcode": 48689,
        "title": "Babyfooji - jinx - Page 1",
        "cover": "https://telegra.ph/file/2ea701031522301759f50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48689",
        "pageSeq": 48689
    },
    {
        "IDcode": 48690,
        "title": "Lostwind10 - Nurse Unicorn - Page 1",
        "cover": "https://telegra.ph/file/f1957c171a0e82f838897.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48690",
        "pageSeq": 48690
    },
    {
        "IDcode": 48691,
        "title": "阿包也是兔娘 - Shiranui - Page 1",
        "cover": "https://telegra.ph/file/d24c2e24357802d2e4ed2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48691",
        "pageSeq": 48691
    },
    {
        "IDcode": 48692,
        "title": "[shika小鹿鹿]碧蓝航线镇海 奇奢花苑 - Page 1",
        "cover": "https://telegra.ph/file/d5c73a9a1269255f086de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48692",
        "pageSeq": 48692
    },
    {
        "IDcode": 48693,
        "title": "[nonsummerjack] Cleaning Agent - Page 1",
        "cover": "https://telegra.ph/file/1394177260a81b37c4d9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48693",
        "pageSeq": 48693
    },
    {
        "IDcode": 48694,
        "title": "[nonsummerjack] Brilliant Strategist - Page 1",
        "cover": "https://telegra.ph/file/879e7ac1cb409b6563144.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48694",
        "pageSeq": 48694
    },
    {
        "IDcode": 48695,
        "title": "[nonsummerjack] Rush Rabbit - Page 1",
        "cover": "https://telegra.ph/file/def0a2177438876b032d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48695",
        "pageSeq": 48695
    },
    {
        "IDcode": 48696,
        "title": "Ely - Viper Bunny - Page 1",
        "cover": "https://telegra.ph/file/870c6b1d88fb84afa623c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48696",
        "pageSeq": 48696
    },
    {
        "IDcode": 48697,
        "title": "Sayo Momo cosplay Tatsumaki - One-Punch Man - Page 1",
        "cover": "https://telegra.ph/file/332b41522c5087b9c61c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48697",
        "pageSeq": 48697
    },
    {
        "IDcode": 48698,
        "title": "[夏鸽鸽不想起床]3 约尔太太泳衣 Yor Forger Swimsuit - Page 1",
        "cover": "https://telegra.ph/file/5417daa58b0c1f68b2a24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48698",
        "pageSeq": 48698
    },
    {
        "IDcode": 48699,
        "title": "Wildhoney - Cheshire - Page 1",
        "cover": "https://telegra.ph/file/aeabe82ee1b1682f25e63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48699",
        "pageSeq": 48699
    },
    {
        "IDcode": 48700,
        "title": "Nikumikyo - Marin - Page 1",
        "cover": "https://telegra.ph/file/a0bbd47a5c8a91379149c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48700",
        "pageSeq": 48700
    },
    {
        "IDcode": 48701,
        "title": "Alina Becker - Makima - Page 1",
        "cover": "https://telegra.ph/file/4143b3e3bb36b6ef58528.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48701",
        "pageSeq": 48701
    },
    {
        "IDcode": 48702,
        "title": "九言 – Anya & Yor - Page 1",
        "cover": "https://telegra.ph/file/cae57397cf482f0d1b987.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48702",
        "pageSeq": 48702
    },
    {
        "IDcode": 48703,
        "title": "[HERESY (林檎蜜紀)] エッチな指揮官に呼ばれてvol.7インプラカブルの場合 (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/3c34504741ab21efc4ebd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48703",
        "pageSeq": 48703
    },
    {
        "IDcode": 48704,
        "title": "Sayo Momo - Oily Neon Valorant - Page 1",
        "cover": "https://telegra.ph/file/7c9659ac593ad78469c41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48704",
        "pageSeq": 48704
    },
    {
        "IDcode": 48705,
        "title": "贝贝琪Becky - 水城雪风 - Page 1",
        "cover": "https://telegra.ph/file/b31746ce7a8dba33ca3a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48705",
        "pageSeq": 48705
    },
    {
        "IDcode": 48706,
        "title": "Meriol - Rin - Page 1",
        "cover": "https://telegra.ph/file/5b2c221e2cfe66029cbdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48706",
        "pageSeq": 48706
    },
    {
        "IDcode": 48707,
        "title": "咬一口兔娘 -  RYZA『莱莎的秘密工坊』 - Page 1",
        "cover": "https://telegra.ph/file/fc54d137c2095115e397e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48707",
        "pageSeq": 48707
    },
    {
        "IDcode": 48708,
        "title": "[PoppaChan] - Honkai Star Rail Bailu - Page 1",
        "cover": "https://telegra.ph/file/e44603deec726544506ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48708",
        "pageSeq": 48708
    },
    {
        "IDcode": 48709,
        "title": "原神 ジン・バーバラ - Page 1",
        "cover": "https://telegra.ph/file/dcee5c964b7286dc18a37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48709",
        "pageSeq": 48709
    },
    {
        "IDcode": 48710,
        "title": "原神 八重神子・九条裟羅 - Page 1",
        "cover": "https://telegra.ph/file/69a225e9b2667eff48ca6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48710",
        "pageSeq": 48710
    },
    {
        "IDcode": 48711,
        "title": "Ino - Ayaka - Page 1",
        "cover": "https://telegra.ph/file/de0a232d82fb8af2bd1ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48711",
        "pageSeq": 48711
    },
    {
        "IDcode": 48712,
        "title": "Sweetie Fox - Wednesday Addams - Page 1",
        "cover": "https://telegra.ph/file/7d9e1f5845de7cb07a834.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48712",
        "pageSeq": 48712
    },
    {
        "IDcode": 48713,
        "title": "kaneko_咔喵 NO.10 一之濑明日香 - Page 1",
        "cover": "https://telegra.ph/file/d312fbca1d71599b5af72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48713",
        "pageSeq": 48713
    },
    {
        "IDcode": 48714,
        "title": "Saki Kawanami - BB Creampie Gangbang - Page 1",
        "cover": "https://telegra.ph/file/a9309a00198e292fca135.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48714",
        "pageSeq": 48714
    },
    {
        "IDcode": 48715,
        "title": "kaneko_咔喵 约尔 - Page 1",
        "cover": "https://telegra.ph/file/c5da9e6405ee87160be29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48715",
        "pageSeq": 48715
    },
    {
        "IDcode": 48716,
        "title": "yura - 甘露寺蜜璃(+VIDEO) - Page 1",
        "cover": "https://telegra.ph/file/b028260821a2ba7db8c25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48716",
        "pageSeq": 48716
    },
    {
        "IDcode": 48717,
        "title": "日奈娇 碧蓝档案 妃咲  blue archive kisaki - Page 1",
        "cover": "https://telegra.ph/file/03f3fc8eecf8daaf5225a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48717",
        "pageSeq": 48717
    },
    {
        "IDcode": 48718,
        "title": "[Tokar 浵卡]雷电将军53P3V - Page 1",
        "cover": "https://telegra.ph/file/0aae89bd2939a25e06bf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48718",
        "pageSeq": 48718
    },
    {
        "IDcode": 48719,
        "title": "Kittyxkum - Yumeko Bunny - Page 1",
        "cover": "https://telegra.ph/file/662ac8084e7fbfb67c2dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48719",
        "pageSeq": 48719
    },
    {
        "IDcode": 48720,
        "title": "蠢沫沫 - 牛牛女仆 - Page 1",
        "cover": "https://telegra.ph/file/acc775855a3964d6462f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48720",
        "pageSeq": 48720
    },
    {
        "IDcode": 48721,
        "title": "[Xidaidai 习呆呆]爱莉希雅 - Page 1",
        "cover": "https://telegra.ph/file/040a573a09b2ca391ee40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48721",
        "pageSeq": 48721
    },
    {
        "IDcode": 48722,
        "title": "習呆呆  メイド能代 - Page 1",
        "cover": "https://telegra.ph/file/3386bbfede6f46bf58b26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48722",
        "pageSeq": 48722
    },
    {
        "IDcode": 48723,
        "title": "九言 刘易斯 - Page 1",
        "cover": "https://telegra.ph/file/6121863b56422c3fee95c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48723",
        "pageSeq": 48723
    },
    {
        "IDcode": 48724,
        "title": "PoppaChan - Alice - Page 1",
        "cover": "https://telegra.ph/file/e11b4f15fdc42d888a1dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48724",
        "pageSeq": 48724
    },
    {
        "IDcode": 48725,
        "title": "Meenfox - Cloud Retainer - Page 1",
        "cover": "https://telegra.ph/file/bd8f81adf445ebe5bd32e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48725",
        "pageSeq": 48725
    },
    {
        "IDcode": 48726,
        "title": "星之迟迟 - 5月计划 绫波丽 - Page 1",
        "cover": "https://telegra.ph/file/8035bc989d5f2ea441203.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48726",
        "pageSeq": 48726
    },
    {
        "IDcode": 48727,
        "title": "菌烨tako - NO.010 八重神子COS[12P-236M] - Page 1",
        "cover": "https://telegra.ph/file/268641b7403d24fa66e72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48727",
        "pageSeq": 48727
    },
    {
        "IDcode": 48728,
        "title": "Byoru-Yuzuriha - Page 1",
        "cover": "https://telegra.ph/file/a47caba54299bbd0b874e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48728",
        "pageSeq": 48728
    },
    {
        "IDcode": 48729,
        "title": "Puypuy - Hanekawa - Page 1",
        "cover": "https://telegra.ph/file/e5ca253805ba3188c13f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48729",
        "pageSeq": 48729
    },
    {
        "IDcode": 48730,
        "title": "Neyrodesu - Senko - Page 1",
        "cover": "https://telegra.ph/file/9a32b827362f478d68bae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48730",
        "pageSeq": 48730
    },
    {
        "IDcode": 48731,
        "title": "Umeko J - Bunny Toga - Page 1",
        "cover": "https://telegra.ph/file/64e792e252484a8c32ac1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48731",
        "pageSeq": 48731
    },
    {
        "IDcode": 48732,
        "title": "蠢沫沫 -  甘雨女仆 - Page 1",
        "cover": "https://telegra.ph/file/b42f1e9e5ba6f0ff1ea91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48732",
        "pageSeq": 48732
    },
    {
        "IDcode": 48733,
        "title": "封疆疆v- Helen(Nikke) - Page 1",
        "cover": "https://telegra.ph/file/0e0ab837fcf1fd6858ca8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48733",
        "pageSeq": 48733
    },
    {
        "IDcode": 48734,
        "title": "ZinieQ- Penny Pokémon Scarlet/Violet - Page 1",
        "cover": "https://telegra.ph/file/692a6e40efee13870821f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48734",
        "pageSeq": 48734
    },
    {
        "IDcode": 48735,
        "title": "DonnaLoli - Rebecca - Page 1",
        "cover": "https://telegra.ph/file/9d315bb8797c9a2e8195c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48735",
        "pageSeq": 48735
    },
    {
        "IDcode": 48736,
        "title": "阿雪雪 – 恶毒泳装 - Page 1",
        "cover": "https://telegra.ph/file/c0bd8d96230275c473623.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48736",
        "pageSeq": 48736
    },
    {
        "IDcode": 48737,
        "title": "二阶堂 - 在异世界当猫娘 - Page 1",
        "cover": "https://telegra.ph/file/467ee44850b7d047c4f3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48737",
        "pageSeq": 48737
    },
    {
        "IDcode": 48738,
        "title": "Meenfox - Pekora - Page 1",
        "cover": "https://telegra.ph/file/c5ad05ba9283c128ca00a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48738",
        "pageSeq": 48738
    },
    {
        "IDcode": 48739,
        "title": "欧翼翼 - 八重神子 - Page 1",
        "cover": "https://telegra.ph/file/e5499965be83487852c8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48739",
        "pageSeq": 48739
    },
    {
        "IDcode": 48740,
        "title": "Hana Bunny - Vermeil - Page 1",
        "cover": "https://telegra.ph/file/96dd5215771829b5580bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48740",
        "pageSeq": 48740
    },
    {
        "IDcode": 48741,
        "title": "Hana Bunny - Cammy - Page 1",
        "cover": "https://telegra.ph/file/8b76c96ea3f2ac20cb77e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48741",
        "pageSeq": 48741
    },
    {
        "IDcode": 48742,
        "title": "星之迟迟 - Viper - Page 1",
        "cover": "https://telegra.ph/file/6868b061bddad015db50c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48742",
        "pageSeq": 48742
    },
    {
        "IDcode": 48743,
        "title": "Rissoft344 - Maid Agir - Page 1",
        "cover": "https://telegra.ph/file/840c89056cdfe928f1018.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48743",
        "pageSeq": 48743
    },
    {
        "IDcode": 48744,
        "title": "QUEENIE CHUPPY - Chun-Li - Page 1",
        "cover": "https://telegra.ph/file/a995d4ef1ad58769720de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48744",
        "pageSeq": 48744
    },
    {
        "IDcode": 48745,
        "title": "Coser@HakureiLing | Random Leg Fetish - Page 1",
        "cover": "https://telegra.ph/file/371d8c38a11150808d2db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48745",
        "pageSeq": 48745
    },
    {
        "IDcode": 48746,
        "title": "宫本樱(宮本桜) - Viper - Page 1",
        "cover": "https://telegra.ph/file/4916fd80175205abdefe3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48746",
        "pageSeq": 48746
    },
    {
        "IDcode": 48747,
        "title": "快乐的莲某人 玛丽萝丝 格斗装 30p - Page 1",
        "cover": "https://telegra.ph/file/8610f1317ee94ef5dacf9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48747",
        "pageSeq": 48747
    },
    {
        "IDcode": 48748,
        "title": "Kojima Tsukumi (Felicia) - Rose (ローゼ in XenoMagia) - Page 1",
        "cover": "https://telegra.ph/file/c8a0601e99d6480b7b6c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48748",
        "pageSeq": 48748
    },
    {
        "IDcode": 48749,
        "title": "Ain Nguyen - Himeno - Page 1",
        "cover": "https://telegra.ph/file/456e91505dda4edff4985.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48749",
        "pageSeq": 48749
    },
    {
        "IDcode": 48750,
        "title": "Ringo Mitsuki - Rapi - Page 1",
        "cover": "https://telegra.ph/file/e1c40902eea1dc2519eb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48750",
        "pageSeq": 48750
    },
    {
        "IDcode": 48751,
        "title": "Yukimi - Ahri - Page 1",
        "cover": "https://telegra.ph/file/d9c0529216f3af619ce1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48751",
        "pageSeq": 48751
    },
    {
        "IDcode": 48752,
        "title": "Zinie Q - Elesa - Page 1",
        "cover": "https://telegra.ph/file/bcdafe62adeb7d0297caf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48752",
        "pageSeq": 48752
    },
    {
        "IDcode": 48753,
        "title": "Zinie Q - Rappi - Page 1",
        "cover": "https://telegra.ph/file/cdaee8cb27fe22a0d54b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48753",
        "pageSeq": 48753
    },
    {
        "IDcode": 48754,
        "title": "Amber Hallibell as Tsunade - Page 1",
        "cover": "https://telegra.ph/file/4052e62ca6516a17cd6e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48754",
        "pageSeq": 48754
    },
    {
        "IDcode": 48755,
        "title": "洛璃LoLiSAMA 暗黑小红帽 - Page 1",
        "cover": "https://telegra.ph/file/50a5e0922123814539837.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48755",
        "pageSeq": 48755
    },
    {
        "IDcode": 48756,
        "title": "Alin Ma - Kobeni - Page 1",
        "cover": "https://telegra.ph/file/c9f181ed48ca328400c5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48756",
        "pageSeq": 48756
    },
    {
        "IDcode": 48757,
        "title": "[林檎蜜紀] チップお礼有回です💜2月もありがとうございました！＆3月のお知らせ💖💜 (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/c402c8566c77dff77c155.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48757",
        "pageSeq": 48757
    },
    {
        "IDcode": 48758,
        "title": "Katie Westwood - Kobeni - Page 1",
        "cover": "https://telegra.ph/file/bb523707cdc2f800678c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48758",
        "pageSeq": 48758
    },
    {
        "IDcode": 48759,
        "title": "Belle Delphine -  Draculaura - Page 1",
        "cover": "https://telegra.ph/file/b08b67b82601e7fe48bd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48759",
        "pageSeq": 48759
    },
    {
        "IDcode": 48760,
        "title": "Mik Allen - 2B - Page 1",
        "cover": "https://telegra.ph/file/6b98481f310fd36ede14d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48760",
        "pageSeq": 48760
    },
    {
        "IDcode": 48761,
        "title": "Yamisung - Yun Jin - Page 1",
        "cover": "https://telegra.ph/file/9cba553508b1a1746947c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48761",
        "pageSeq": 48761
    },
    {
        "IDcode": 48762,
        "title": "衝-syo-（原神 刻晴） - Page 1",
        "cover": "https://telegra.ph/file/8ac05b1f263c677f8ce95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48762",
        "pageSeq": 48762
    },
    {
        "IDcode": 48763,
        "title": "铃木美咲-想成为你的偶像（刻晴花嫁篇） - Page 1",
        "cover": "https://telegra.ph/file/4424c5def80425588b841.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48763",
        "pageSeq": 48763
    },
    {
        "IDcode": 48764,
        "title": "原◯・ナ◯ーダコスプレ - Page 1",
        "cover": "https://telegra.ph/file/bb340ba981985cf3aef81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48764",
        "pageSeq": 48764
    },
    {
        "IDcode": 48765,
        "title": "Neyrodesu - Maid Gura - Page 1",
        "cover": "https://telegra.ph/file/e53a02f84f894eb60902d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48765",
        "pageSeq": 48765
    },
    {
        "IDcode": 48766,
        "title": "Aqua Area-makima selfie - Page 1",
        "cover": "https://telegra.ph/file/b04fd7dc8685d9b220e04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48766",
        "pageSeq": 48766
    },
    {
        "IDcode": 48767,
        "title": "桜井宁宁 - 萝莉女仆 - Page 1",
        "cover": "https://telegra.ph/file/af4980e3450696ec6be2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48767",
        "pageSeq": 48767
    },
    {
        "IDcode": 48768,
        "title": "Virtual Geisha - Nobara Kugisaki - Page 1",
        "cover": "https://telegra.ph/file/b2e75752001e7575a8a63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48768",
        "pageSeq": 48768
    },
    {
        "IDcode": 48769,
        "title": "Alice Bong - Mikasa - Page 1",
        "cover": "https://telegra.ph/file/34ecb627607c22db8e409.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48769",
        "pageSeq": 48769
    },
    {
        "IDcode": 48770,
        "title": "kaya huang Hsuan-Mammon - Page 1",
        "cover": "https://telegra.ph/file/d4fdd8fd3d5750d71069d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48770",
        "pageSeq": 48770
    },
    {
        "IDcode": 48771,
        "title": "[Nonsummerjack] 宵猫 - Page 1",
        "cover": "https://telegra.ph/file/2590d7621f247582f7340.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48771",
        "pageSeq": 48771
    }
];
