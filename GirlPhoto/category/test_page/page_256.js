// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 47672,
        "title": "Raku - Kuroneko - Page 1",
        "cover": "https://telegra.ph/file/4eb60b4b8a674164c1b27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47672",
        "pageSeq": 47672
    },
    {
        "IDcode": 47673,
        "title": "(C93)[mysuite]Suite collection 28 - Page 1",
        "cover": "https://telegra.ph/file/8eff5b383a606cd4505fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47673",
        "pageSeq": 47673
    },
    {
        "IDcode": 47674,
        "title": "Saber——Black swimsuit - Page 1",
        "cover": "https://telegra.ph/file/cefd38b03c3163083f781.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47674",
        "pageSeq": 47674
    },
    {
        "IDcode": 47675,
        "title": "Hana Bunny - Ada Wong - Page 1",
        "cover": "https://telegra.ph/file/8e9b6f1f97857360def55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47675",
        "pageSeq": 47675
    },
    {
        "IDcode": 47676,
        "title": "Bunny Ayumi ~ Mei Slingkini - Page 1",
        "cover": "https://telegra.ph/file/9257f1716735d6bf45ddc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47676",
        "pageSeq": 47676
    },
    {
        "IDcode": 47677,
        "title": "Shiro Kitsune - Mash Kyrielight Boudoir Set - Page 1",
        "cover": "https://telegra.ph/file/bf12573c8ece540cc1e39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47677",
        "pageSeq": 47677
    },
    {
        "IDcode": 47678,
        "title": "Working cell —— Platelet - Page 1",
        "cover": "https://telegra.ph/file/3fc8b8b70842ea13f06a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47678",
        "pageSeq": 47678
    },
    {
        "IDcode": 47679,
        "title": "Shiro Kitsune - Shuten Douji - Page 1",
        "cover": "https://telegra.ph/file/e5b893a19a063a015b469.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47679",
        "pageSeq": 47679
    },
    {
        "IDcode": 47680,
        "title": "[Nagesa魔物喵] nero - Page 1",
        "cover": "https://telegra.ph/file/83f3280b8c43c542f84a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47680",
        "pageSeq": 47680
    },
    {
        "IDcode": 47681,
        "title": "[香草少女m/九尾狐狸m/咬一口小奈樱] 碧蓝航线爱宕 | Atago - Azur Lane - Page 1",
        "cover": "https://telegra.ph/file/6fe582aade435b661eb14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47681",
        "pageSeq": 47681
    },
    {
        "IDcode": 47682,
        "title": "【少女映畫】D.VA战斗服 - Page 1",
        "cover": "https://telegra.ph/file/3c9b16ce9267b126f6fe9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47682",
        "pageSeq": 47682
    },
    {
        "IDcode": 47683,
        "title": "【少女映畫】Saber 晴着和服 | Saber Haregi ver. - Page 1",
        "cover": "https://telegra.ph/file/a0d36cf74aa8011a91545.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47683",
        "pageSeq": 47683
    },
    {
        "IDcode": 47684,
        "title": "【少女映畫】冲田总司初始 - Page 1",
        "cover": "https://telegra.ph/file/c0115296448b9bc44c408.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47684",
        "pageSeq": 47684
    },
    {
        "IDcode": 47685,
        "title": "【少女映畫】冲田总司 | Souji Okita - Page 1",
        "cover": "https://telegra.ph/file/13f0e40640af3c61e5340.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47685",
        "pageSeq": 47685
    },
    {
        "IDcode": 47686,
        "title": "【少女映畫】阿蒂拉 | Altera - Page 1",
        "cover": "https://telegra.ph/file/43db066f7a7cf7676949c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47686",
        "pageSeq": 47686
    },
    {
        "IDcode": 47687,
        "title": "Kalynka Fox - Saber - Page 1",
        "cover": "https://telegra.ph/file/4f42fc901de660dff2d56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47687",
        "pageSeq": 47687
    },
    {
        "IDcode": 47688,
        "title": "【少女映畫】saber女仆装 - Page 1",
        "cover": "https://telegra.ph/file/264fb2cc366e91893d35b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47688",
        "pageSeq": 47688
    },
    {
        "IDcode": 47689,
        "title": "【萌白酱】英梨梨泳装 - Page 1",
        "cover": "https://telegra.ph/file/2267a1781fd64057f6d56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47689",
        "pageSeq": 47689
    },
    {
        "IDcode": 47690,
        "title": "Sex Friend 90「OGF - Omanko Girl Friend - Vol.26 アビ◯イル 編」サンプル動画 - Page 1",
        "cover": "https://telegra.ph/file/1d8699b06a9f58d353295.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47690",
        "pageSeq": 47690
    },
    {
        "IDcode": 47691,
        "title": "【少女映畫】Saber 蓝色礼服 - Page 1",
        "cover": "https://telegra.ph/file/cffeb51cc2ab274904863.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47691",
        "pageSeq": 47691
    },
    {
        "IDcode": 47692,
        "title": "【私人玩物】d.va（2） - Page 1",
        "cover": "https://telegra.ph/file/44c6f735d6fa444958a08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47692",
        "pageSeq": 47692
    },
    {
        "IDcode": 47693,
        "title": "Mikomi Hokina - Esdeath - Page 1",
        "cover": "https://telegra.ph/file/284da2bbdc68390352d12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47693",
        "pageSeq": 47693
    },
    {
        "IDcode": 47694,
        "title": "(コスホリック24) [HERESY (林檎蜜紀)] エッチな玉藻の人 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/5fd2809e9ab514b65489f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47694",
        "pageSeq": 47694
    },
    {
        "IDcode": 47695,
        "title": "(コスホリック24) [HERESY (林檎蜜紀)] エッチな乳上の人 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/7c03ac4a4bd8cff38f113.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47695",
        "pageSeq": 47695
    },
    {
        "IDcode": 47696,
        "title": "【少女映畫】X毛 | Mysterious Heroine X - Page 1",
        "cover": "https://telegra.ph/file/b8d0c16f676d7cb8f24e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47696",
        "pageSeq": 47696
    },
    {
        "IDcode": 47697,
        "title": "【甜美小娇妾/沈娇娇】d.va - Page 1",
        "cover": "https://telegra.ph/file/43c7fb099dbdb8e120e2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47697",
        "pageSeq": 47697
    },
    {
        "IDcode": 47698,
        "title": "cos澤村・スペンサー・英梨々 - Page 1",
        "cover": "https://telegra.ph/file/fb28d124ed66b32ed2bd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47698",
        "pageSeq": 47698
    },
    {
        "IDcode": 47699,
        "title": "【麻酥酥哟】春日野穹 - Page 1",
        "cover": "https://telegra.ph/file/702f8bd1d28badddb6f69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47699",
        "pageSeq": 47699
    },
    {
        "IDcode": 47700,
        "title": "Astolfo by YaoAlmaCosplay - Page 1",
        "cover": "https://telegra.ph/file/3950e25c3216d118ff5c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47700",
        "pageSeq": 47700
    },
    {
        "IDcode": 47701,
        "title": "【少女映畫】Saber仙鹤礼服 - Page 1",
        "cover": "https://telegra.ph/file/a203b2a9e25d8dc99c1bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47701",
        "pageSeq": 47701
    },
    {
        "IDcode": 47702,
        "title": "【少女映畫】罪恶王冠-楪祈 | Inori Yuzuriha - Page 1",
        "cover": "https://telegra.ph/file/2a6a286682ec1795d7c4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47702",
        "pageSeq": 47702
    },
    {
        "IDcode": 47703,
        "title": "[面饼仙儿]玉玲珑 少女前线 - Page 1",
        "cover": "https://telegra.ph/file/14d6cf1ac4bc2b72fc24a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47703",
        "pageSeq": 47703
    },
    {
        "IDcode": 47704,
        "title": "玉藻前-兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/d55d34f09915a968747d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47704",
        "pageSeq": 47704
    },
    {
        "IDcode": 47705,
        "title": "[白金Saki、Yoko宅夏、小野妹子w]路人女主的养成方法 - Page 1",
        "cover": "https://telegra.ph/file/01824253c41ee987fb5fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47705",
        "pageSeq": 47705
    },
    {
        "IDcode": 47706,
        "title": "[Yoko宅夏]狂三内衣 - Page 1",
        "cover": "https://telegra.ph/file/0d85cbc622bb8041251ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47706",
        "pageSeq": 47706
    },
    {
        "IDcode": 47707,
        "title": "【少女映畫】莫德雷德常服 | Mordred - Page 1",
        "cover": "https://telegra.ph/file/49ab68f935e322b3c28df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47707",
        "pageSeq": 47707
    },
    {
        "IDcode": 47708,
        "title": "【少女映畫】玛修战斗服 | Mash Kyrielight - Page 1",
        "cover": "https://telegra.ph/file/1342e17cb9f5df2bc6ccd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47708",
        "pageSeq": 47708
    },
    {
        "IDcode": 47709,
        "title": "九曲COS合集 - Page 1",
        "cover": "https://telegra.ph/file/c09612e0d05c41c49619e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47709",
        "pageSeq": 47709
    },
    {
        "IDcode": 47710,
        "title": "九曲COS合集 - Page 2",
        "cover": "https://telegra.ph/file/88d5e2ca60ced92a9cdd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47710",
        "pageSeq": 47710
    },
    {
        "IDcode": 47711,
        "title": "えっちな初音ミクるーむ ※ノーパン動画付き - Page 1",
        "cover": "https://telegra.ph/file/3025b4522fd45f107843f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47711",
        "pageSeq": 47711
    },
    {
        "IDcode": 47712,
        "title": "【私人玩物】d.va - Page 1",
        "cover": "https://telegra.ph/file/0f08d58d66c3734061ef4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47712",
        "pageSeq": 47712
    },
    {
        "IDcode": 47713,
        "title": "Sabrina Nichole - Velma Dinkley - Page 1",
        "cover": "https://telegra.ph/file/d731c63f17cc4643a368f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47713",
        "pageSeq": 47713
    },
    {
        "IDcode": 47714,
        "title": "【私人玩物】和泉纱雾 - Page 1",
        "cover": "https://telegra.ph/file/45551df515aaa3619ba6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47714",
        "pageSeq": 47714
    },
    {
        "IDcode": 47715,
        "title": "[日暮企画(日暮りん)]エロ熟格女Ⅱ - Page 1",
        "cover": "https://telegra.ph/file/a5476e08c0aa026ddb4a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47715",
        "pageSeq": 47715
    },
    {
        "IDcode": 47716,
        "title": "[草莓味的软糖]穹妹旗袍 - Page 1",
        "cover": "https://telegra.ph/file/60b9b3f5a4d3864627104.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47716",
        "pageSeq": 47716
    },
    {
        "IDcode": 47717,
        "title": "【少女映畫】縁結びの妖狐ちゃん - Page 1",
        "cover": "https://telegra.ph/file/37f7e1ed06a4fd6e0b8ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47717",
        "pageSeq": 47717
    },
    {
        "IDcode": 47718,
        "title": "[森萝财团]LOVEPLUS-005 Takao(Azurlane) - Page 1",
        "cover": "https://telegra.ph/file/d52c081071509aa37e588.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47718",
        "pageSeq": 47718
    },
    {
        "IDcode": 47719,
        "title": "【少女映畫】明日香 | Asuka langley soryu - Page 1",
        "cover": "https://telegra.ph/file/459a66a55cd24a9009b6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47719",
        "pageSeq": 47719
    },
    {
        "IDcode": 47720,
        "title": "Mai Shiranui cosplay by Zhou Yu Xi - Page 1",
        "cover": "https://telegra.ph/file/2468bdd74d40276622f0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47720",
        "pageSeq": 47720
    },
    {
        "IDcode": 47721,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん １８歳Ｇカップ自閉症スペクトラム黒ギャルレイヤー オール生ナカダシ性処理便女ドＭ調教記録 ＦＧ〇 水着ＢＢ[褐色えっちちのムーンキャンサー]-H- - Page 1",
        "cover": "https://telegra.ph/file/9b795774c4fd393bc2d9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47721",
        "pageSeq": 47721
    },
    {
        "IDcode": 47722,
        "title": "[森萝财团] X-055 宝多六花 - Page 1",
        "cover": "https://telegra.ph/file/c09f1e7d135aae9c7322b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47722",
        "pageSeq": 47722
    },
    {
        "IDcode": 47723,
        "title": "(C95) [Krouge (倉坂くるる)] Minty - Page 1",
        "cover": "https://telegra.ph/file/c7581ee9038298d958e9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47723",
        "pageSeq": 47723
    },
    {
        "IDcode": 47724,
        "title": "Kayla Erin - Witch Mercy - Page 1",
        "cover": "https://telegra.ph/file/6c82da5c993da49d8dbbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47724",
        "pageSeq": 47724
    },
    {
        "IDcode": 47725,
        "title": "[VRCosplayX] Stella Cox in Harry Pudder and the Gryffin-Whore - Page 1",
        "cover": "https://telegra.ph/file/e55f890a0791de9427586.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47725",
        "pageSeq": 47725
    },
    {
        "IDcode": 47726,
        "title": "桜桃喵–英梨梨1 - Page 1",
        "cover": "https://telegra.ph/file/67e481b5d44884073cf6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47726",
        "pageSeq": 47726
    },
    {
        "IDcode": 47727,
        "title": "[nonsummerjack]  nonbb - Page 1",
        "cover": "https://telegra.ph/file/a364a8774c6e7aaa2d194.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47727",
        "pageSeq": 47727
    },
    {
        "IDcode": 47728,
        "title": "[Heru3(lenfried)] れんふりの撮影会体験版2 - Page 1",
        "cover": "https://telegra.ph/file/5c5fa4ffff05941b6fd52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47728",
        "pageSeq": 47728
    },
    {
        "IDcode": 47729,
        "title": "島田アリスちゃんはいいぞ!! [H] - Page 1",
        "cover": "https://telegra.ph/file/ca40a5d39c13ad8fd840b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47729",
        "pageSeq": 47729
    },
    {
        "IDcode": 47730,
        "title": "[HERESY] エッチなマシュの人 - Page 1",
        "cover": "https://telegra.ph/file/55705f36d414ce14eded1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47730",
        "pageSeq": 47730
    },
    {
        "IDcode": 47731,
        "title": "[枳姬]碧蓝航线-高雄旗袍 - Page 1",
        "cover": "https://telegra.ph/file/ac43d31aa988463bd79d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47731",
        "pageSeq": 47731
    },
    {
        "IDcode": 47732,
        "title": "[枳姬]Fate/Grand Order-伊斯塔凛 - Page 1",
        "cover": "https://telegra.ph/file/b5fbe17c8579d6c8bd24d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47732",
        "pageSeq": 47732
    },
    {
        "IDcode": 47733,
        "title": "Sword Maiden Cosplay by HaneAme - Page 1",
        "cover": "https://telegra.ph/file/a463a7956681448637801.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47733",
        "pageSeq": 47733
    },
    {
        "IDcode": 47734,
        "title": "(C95) [girlfriend end (じる)] 良妻賢艦 - Page 1",
        "cover": "https://telegra.ph/file/0b61667207f54245300f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47734",
        "pageSeq": 47734
    },
    {
        "IDcode": 47735,
        "title": "（少女映画）-远坂凛 Tohsaka Rin - Page 1",
        "cover": "https://telegra.ph/file/2a51684dfdf4948a88bb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47735",
        "pageSeq": 47735
    },
    {
        "IDcode": 47736,
        "title": "[Purple Bitch] Mikasa wants anal and facial (Shingeki no Kyojin) - Page 1",
        "cover": "https://telegra.ph/file/3c8969048d82941684127.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47736",
        "pageSeq": 47736
    },
    {
        "IDcode": 47737,
        "title": "Rin as Cindy Aurum - Page 1",
        "cover": "https://telegra.ph/file/df3b35ec5a951056d51ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47737",
        "pageSeq": 47737
    },
    {
        "IDcode": 47738,
        "title": "Rin as Harley Quinn - Page 1",
        "cover": "https://telegra.ph/file/211e4c942ee8b1462eec6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47738",
        "pageSeq": 47738
    },
    {
        "IDcode": 47739,
        "title": "Rin as Boosette - Page 1",
        "cover": "https://telegra.ph/file/a4c44d4e596233181da71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47739",
        "pageSeq": 47739
    },
    {
        "IDcode": 47740,
        "title": "(C94) [girlfriend end (じる)] いけない放課後の過ごしかた - Page 1",
        "cover": "https://telegra.ph/file/c1838d1cc673108bc21cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47740",
        "pageSeq": 47740
    },
    {
        "IDcode": 47741,
        "title": "[Mikehouse (ミケ)] 非売品写真集２ - Page 1",
        "cover": "https://telegra.ph/file/4c23bd9b7bdec2c4b91ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47741",
        "pageSeq": 47741
    },
    {
        "IDcode": 47742,
        "title": "(C93)[girlfriend end]詩羽先輩「いけない小説家の育て方」 - Page 1",
        "cover": "https://telegra.ph/file/8f329cefb797904ca25f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47742",
        "pageSeq": 47742
    },
    {
        "IDcode": 47743,
        "title": "Usatame Mei May Selfie Set - Page 1",
        "cover": "https://telegra.ph/file/7a643dac9e9ae92bea1e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47743",
        "pageSeq": 47743
    },
    {
        "IDcode": 47744,
        "title": "Lady Deadpool by Octokuro Model - Page 1",
        "cover": "https://telegra.ph/file/5b754bf9cda7d443e5d76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47744",
        "pageSeq": 47744
    },
    {
        "IDcode": 47745,
        "title": "[Nagesa魔物喵]加藤惠 - Page 1",
        "cover": "https://telegra.ph/file/1c99f2bdb72eb4fa431cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47745",
        "pageSeq": 47745
    },
    {
        "IDcode": 47746,
        "title": "Suite Grand Order 6 - Page 1",
        "cover": "https://telegra.ph/file/ce755559b30ddd3592c41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47746",
        "pageSeq": 47746
    },
    {
        "IDcode": 47747,
        "title": "【少女映畫】阿斯托尔福水手服/Astolfo - Page 1",
        "cover": "https://telegra.ph/file/0fc494acd1ae17e5fe8c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47747",
        "pageSeq": 47747
    },
    {
        "IDcode": 47748,
        "title": "【少女映畫】阿库娅/Aqua (Kono Subarashii Sekai ni Syukufuku o!) - Page 1",
        "cover": "https://telegra.ph/file/2887aa48809d70f4379fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47748",
        "pageSeq": 47748
    },
    {
        "IDcode": 47749,
        "title": "ピンキーweb@つぼみん029 - Page 1",
        "cover": "https://telegra.ph/file/1ccf6a00746e34a64b677.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47749",
        "pageSeq": 47749
    },
    {
        "IDcode": 47750,
        "title": "ピンキーweb@つぼみん029 - Page 2",
        "cover": "https://telegra.ph/file/e76a5d03cdc4e244a0989.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47750",
        "pageSeq": 47750
    },
    {
        "IDcode": 47751,
        "title": "ピンキーweb@つぼみん029 - Page 3",
        "cover": "https://telegra.ph/file/66500599004077e5af59c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47751",
        "pageSeq": 47751
    },
    {
        "IDcode": 47752,
        "title": "ピンキーweb@つぼみん029 - Page 4",
        "cover": "https://telegra.ph/file/e1ec3edb02ec4c81267fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47752",
        "pageSeq": 47752
    },
    {
        "IDcode": 47753,
        "title": "[森萝财团]爱花写真-ALPHA-015 Izumi Sagiri - Page 1",
        "cover": "https://telegra.ph/file/9c0ce404ad5a1a529f99a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47753",
        "pageSeq": 47753
    },
    {
        "IDcode": 47754,
        "title": "[甜美小娇妾/沈娇娇]Luo Tianyi | 洛天依 - Page 1",
        "cover": "https://telegra.ph/file/561708592553ee66188a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47754",
        "pageSeq": 47754
    },
    {
        "IDcode": 47755,
        "title": "[甜美小娇妾/沈娇娇]碧蓝航线独角兽妹妹 - Page 1",
        "cover": "https://telegra.ph/file/de8487d11e250d17cd858.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47755",
        "pageSeq": 47755
    },
    {
        "IDcode": 47756,
        "title": "[甜美小娇妾/沈娇娇]sora kasugano | 春日野穹 - Page 1",
        "cover": "https://telegra.ph/file/91184517c708065c1c9b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47756",
        "pageSeq": 47756
    },
    {
        "IDcode": 47757,
        "title": "[甜美小娇妾/沈娇娇]Krul Tepes | 克鲁鲁 - Page 1",
        "cover": "https://telegra.ph/file/b982acec3ce039cd66c85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47757",
        "pageSeq": 47757
    },
    {
        "IDcode": 47758,
        "title": "[傲娇黑兔]亚丝娜 | Asuna Yuuki - Page 1",
        "cover": "https://telegra.ph/file/e501db68fe47ffdb693f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47758",
        "pageSeq": 47758
    },
    {
        "IDcode": 47759,
        "title": "C94アズレン山城チャイナおまけ - Page 1",
        "cover": "https://telegra.ph/file/b434191b9c7ed9993e591.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47759",
        "pageSeq": 47759
    },
    {
        "IDcode": 47760,
        "title": "Holo by Helly von Valentine - Page 1",
        "cover": "https://telegra.ph/file/727bafba95fa170f00bbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47760",
        "pageSeq": 47760
    },
    {
        "IDcode": 47761,
        "title": "みさ呆呆 不思議の国のアリス - Page 1",
        "cover": "https://telegra.ph/file/e7995d86c85adf39baedc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47761",
        "pageSeq": 47761
    },
    {
        "IDcode": 47762,
        "title": "Milena as Asuka Langley - Page 1",
        "cover": "https://telegra.ph/file/aad58d7b8a434a5476d61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47762",
        "pageSeq": 47762
    },
    {
        "IDcode": 47763,
        "title": "HaneAme_雨波 - Page 1",
        "cover": "https://telegra.ph/file/a5913127e674a937e4b16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47763",
        "pageSeq": 47763
    },
    {
        "IDcode": 47764,
        "title": "[甜美小娇妾/沈娇娇]Reimu Hakurei | 灵梦 - Page 1",
        "cover": "https://telegra.ph/file/908389e58fe53b95d6988.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47764",
        "pageSeq": 47764
    },
    {
        "IDcode": 47765,
        "title": "[软软酱M]和泉纱雾 - Page 1",
        "cover": "https://telegra.ph/file/140f252e17435614ee606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47765",
        "pageSeq": 47765
    },
    {
        "IDcode": 47766,
        "title": "[软软酱M]蕾姆兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/a395d00dc45bd281bce01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47766",
        "pageSeq": 47766
    },
    {
        "IDcode": 47767,
        "title": "【少女映畫】玉藻前JK | Tamamo no Mae - Page 1",
        "cover": "https://telegra.ph/file/04850fd734628375a6c0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47767",
        "pageSeq": 47767
    },
    {
        "IDcode": 47768,
        "title": "Marie Rose by Rocksylight - Page 1",
        "cover": "https://telegra.ph/file/59852000b38f4e2198550.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47768",
        "pageSeq": 47768
    },
    {
        "IDcode": 47769,
        "title": "(C94)[mysuite] スイートレーン２ - Page 1",
        "cover": "https://telegra.ph/file/aeb8a9095d72c36e95c00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47769",
        "pageSeq": 47769
    },
    {
        "IDcode": 47770,
        "title": "[Vandych] Katarina by Alina Latypova - Page 1",
        "cover": "https://telegra.ph/file/7a77d4c6e79949d632790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47770",
        "pageSeq": 47770
    },
    {
        "IDcode": 47771,
        "title": "(C94) スイートレーン - Page 1",
        "cover": "https://telegra.ph/file/bdad79caee51bcec33492.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47771",
        "pageSeq": 47771
    }
];
