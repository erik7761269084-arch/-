// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 47572,
        "title": "KaYa 萱 FGO 玉藻の前 Tamamo Dancing Diva - Page 1",
        "cover": "https://telegra.ph/file/85ac1abb1556420fd4732.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47572",
        "pageSeq": 47572
    },
    {
        "IDcode": 47573,
        "title": "chinese cosplay (photoshop warning) - Page 1",
        "cover": "https://telegra.ph/file/c6d1aa8aa82dc5ee487da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47573",
        "pageSeq": 47573
    },
    {
        "IDcode": 47574,
        "title": "[桜桃喵]かぐや様は告らせたい-藤原 千花 - Page 1",
        "cover": "https://telegra.ph/file/5c59bcd8de7e896fe46db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47574",
        "pageSeq": 47574
    },
    {
        "IDcode": 47575,
        "title": "[Sex Syndrome]マクライブ！えへへ…いっぱいだしちゃお？握手アイドルことりは性処理ペットです[H] - Page 1",
        "cover": "https://telegra.ph/file/cc136dfda529a968ae28e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47575",
        "pageSeq": 47575
    },
    {
        "IDcode": 47576,
        "title": "Octokuro Model - Quiet (MGSV) - Page 1",
        "cover": "https://telegra.ph/file/5a6b2d07077511305fda0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47576",
        "pageSeq": 47576
    },
    {
        "IDcode": 47577,
        "title": "[Mysuite]Suite Grand Order 7 - Page 1",
        "cover": "https://telegra.ph/file/52737ec39e4a98350b087.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47577",
        "pageSeq": 47577
    },
    {
        "IDcode": 47578,
        "title": "[SexSyndrome]我慢なんてしぃひんでもええから…うちに身を委ねて…？ うちはこわぁい鬼やけど 今は旦那はんに骨抜きや - Page 1",
        "cover": "https://telegra.ph/file/d85bbc821d2402cfe2674.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47578",
        "pageSeq": 47578
    },
    {
        "IDcode": 47579,
        "title": "Sex Friend 65「ハメプリ！Vol.05 はな・さあや・ほまれ 制服4P編」 - Page 1",
        "cover": "https://telegra.ph/file/e624162174475f6d36ca3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47579",
        "pageSeq": 47579
    },
    {
        "IDcode": 47580,
        "title": "[CosDeluxe] コスプレ×ミナヅキヒカル - Page 1",
        "cover": "https://telegra.ph/file/8d117ef1e27533f960b46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47580",
        "pageSeq": 47580
    },
    {
        "IDcode": 47581,
        "title": "[Mysuite] スイートレイズ【賭ケグルイ】 - Page 1",
        "cover": "https://telegra.ph/file/6a702e6a3209d897f5a36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47581",
        "pageSeq": 47581
    },
    {
        "IDcode": 47582,
        "title": "[AKekiMaru] 小蛋糕姊姊 Small cake sister - Page 1",
        "cover": "https://telegra.ph/file/698ab27e905757328d28b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47582",
        "pageSeq": 47582
    },
    {
        "IDcode": 47583,
        "title": "[木花琳琳是勇者] Kakegurui - Page 1",
        "cover": "https://telegra.ph/file/a812bc654d0d5d45a31c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47583",
        "pageSeq": 47583
    },
    {
        "IDcode": 47584,
        "title": "[少女映畫] 佐仓千代 [原版] - Page 1",
        "cover": "https://telegra.ph/file/fc53a5282453a713773ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47584",
        "pageSeq": 47584
    },
    {
        "IDcode": 47585,
        "title": "KAYA HUAN JEANNE D ARC - Page 1",
        "cover": "https://telegra.ph/file/37d839eb6371cc88fe4fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47585",
        "pageSeq": 47585
    },
    {
        "IDcode": 47586,
        "title": "KAYA HUANG ALTER - Page 1",
        "cover": "https://telegra.ph/file/072a5d7682b0fe7d96f0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47586",
        "pageSeq": 47586
    },
    {
        "IDcode": 47587,
        "title": "[日暮企画(日暮りん)]エロ熟格女III - Page 1",
        "cover": "https://telegra.ph/file/3a80e2d67f421838754a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47587",
        "pageSeq": 47587
    },
    {
        "IDcode": 47588,
        "title": "Cosplayer-鳗鱼霏儿 - Page 1",
        "cover": "https://telegra.ph/file/beedf85fb4cdd3be970f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47588",
        "pageSeq": 47588
    },
    {
        "IDcode": 47589,
        "title": "Mirai Kuriyama [Tsuki Desu / Dosya Gasai] - Page 1",
        "cover": "https://telegra.ph/file/5c2eeab349af6d42c5c7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47589",
        "pageSeq": 47589
    },
    {
        "IDcode": 47590,
        "title": "KaYa 萱 《OVERLORD》アルベド Albedo - Page 1",
        "cover": "https://telegra.ph/file/584a81b9c2a86ded914ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47590",
        "pageSeq": 47590
    },
    {
        "IDcode": 47591,
        "title": "碧蓝航线-爱宕（鳗鱼霏儿） - Page 1",
        "cover": "https://telegra.ph/file/07984b8c1d8889ed9bd5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47591",
        "pageSeq": 47591
    },
    {
        "IDcode": 47592,
        "title": "艶娘幻梦谭-金莲（Yoko宅夏） - Page 1",
        "cover": "https://telegra.ph/file/000f34e9edbdc99a26f28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47592",
        "pageSeq": 47592
    },
    {
        "IDcode": 47593,
        "title": "りゅうおうのおしごと!（空银子）-一小央泽 - Page 1",
        "cover": "https://telegra.ph/file/754f05f203a411625fc6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47593",
        "pageSeq": 47593
    },
    {
        "IDcode": 47594,
        "title": "碧蓝航线-爱宕（一小央泽） - Page 1",
        "cover": "https://telegra.ph/file/05376586a6ffa8ddabbe0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47594",
        "pageSeq": 47594
    },
    {
        "IDcode": 47595,
        "title": "明日方舟（天火）-一小央泽 - Page 1",
        "cover": "https://telegra.ph/file/6b2c91a407aaecf8320e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47595",
        "pageSeq": 47595
    },
    {
        "IDcode": 47596,
        "title": "Astolfo Memories of Trifas & maid by YaoAlmaCosplay - Page 1",
        "cover": "https://telegra.ph/file/1dadcff254f5f0f1fa8b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47596",
        "pageSeq": 47596
    },
    {
        "IDcode": 47597,
        "title": "[Sex Syndrome]ガチ洗脳ちゃん 宇垣〇里アナ似レイヤー メンヘラの塊 尊みを感じてジャンヌ 2本立てSP - Page 1",
        "cover": "https://telegra.ph/file/7afc520225373031c9136.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47597",
        "pageSeq": 47597
    },
    {
        "IDcode": 47598,
        "title": "【神楽坂真冬】恋人以上-（冴えない彼女（ヒロイン）の育てかた-英梨梨） - Page 1",
        "cover": "https://telegra.ph/file/be8be80c0eff25188cc9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47598",
        "pageSeq": 47598
    },
    {
        "IDcode": 47599,
        "title": "碧蓝航线-爱宕（Shika小鹿鹿） - Page 1",
        "cover": "https://telegra.ph/file/51ee5bbacb631b5fd6c6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47599",
        "pageSeq": 47599
    },
    {
        "IDcode": 47600,
        "title": "[Sex Syndrome]ガチ洗脳ちゃん １８歳超絶美少女レイヤー中出し便女化調教記録 ＦＧ〇じゃっく・ざ・くぱぁ[フェラのアサシン]-H- - Page 1",
        "cover": "https://telegra.ph/file/c49253e7c7f877c11c3df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47600",
        "pageSeq": 47600
    },
    {
        "IDcode": 47601,
        "title": "【神楽坂真冬】放課後領域（Fate/Grand Order-黑贞德） - Page 1",
        "cover": "https://telegra.ph/file/68abc6208dad646373970.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47601",
        "pageSeq": 47601
    },
    {
        "IDcode": 47602,
        "title": "(C96) [Shooting Star's (サク)] 飛天 (デッドオアアライブ) - Page 1",
        "cover": "https://telegra.ph/file/d884dc0c062ca8845c8b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47602",
        "pageSeq": 47602
    },
    {
        "IDcode": 47603,
        "title": "[Fantasy Factory] Sexy neko maid(Reordered) - Page 1",
        "cover": "https://telegra.ph/file/1ad0664a3f4bf15604376.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47603",
        "pageSeq": 47603
    },
    {
        "IDcode": 47604,
        "title": "Mashiro Nano Cosplay - Page 1",
        "cover": "https://telegra.ph/file/efba38d580d65869a15f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47604",
        "pageSeq": 47604
    },
    {
        "IDcode": 47605,
        "title": "[Mysuite] Suite Grand Order 10 - Jeanne [C96] - Page 1",
        "cover": "https://telegra.ph/file/87219dcce947afd7d6048.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47605",
        "pageSeq": 47605
    },
    {
        "IDcode": 47606,
        "title": "[JKFUN-004] 雪晴 COSPLAYER - Page 1",
        "cover": "https://telegra.ph/file/01b6072fda630bce00bc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47606",
        "pageSeq": 47606
    },
    {
        "IDcode": 47607,
        "title": "《NieR:Automata》 2B - Page 1",
        "cover": "https://telegra.ph/file/46fde7d125e2606d82aaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47607",
        "pageSeq": 47607
    },
    {
        "IDcode": 47608,
        "title": "[CosDeluxe] コスプレ×ヒメカワユウナ - Page 1",
        "cover": "https://telegra.ph/file/de5634b1ce9cddd375290.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47608",
        "pageSeq": 47608
    },
    {
        "IDcode": 47609,
        "title": "Sex Friend 99 オフパコ3Pシリーズ 「美◯×莉◯ 編」 - Page 1",
        "cover": "https://telegra.ph/file/36c4187a3aae8a9c3b699.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47609",
        "pageSeq": 47609
    },
    {
        "IDcode": 47610,
        "title": "Sex Friend 97 オフパコ3Pシリーズ 「島◯×天津◯ 編」 - Page 1",
        "cover": "https://telegra.ph/file/5bf79766c2337373c8d78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47610",
        "pageSeq": 47610
    },
    {
        "IDcode": 47611,
        "title": "[Sex Syndrome]ガチ洗脳ちゃん 歴代No.１タレント級美貌の美巨乳Ｇカップ極上Ｓ級１９歳レイヤー 全身性感帯トランス絶頂イキまくりドロドロ体液ハメ撮り アズレン ヤンデレ赤城[Ｈ] - Page 1",
        "cover": "https://telegra.ph/file/6982401c6863c297e8d5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47611",
        "pageSeq": 47611
    },
    {
        "IDcode": 47612,
        "title": "神守清華-saiwsaiwsaiw - Page 1",
        "cover": "https://telegra.ph/file/631bb2958a339aea66453.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47612",
        "pageSeq": 47612
    },
    {
        "IDcode": 47613,
        "title": "[Fantasy Factory(小丁)] 時雨 野外露出 (Kantai Collection) - Page 1",
        "cover": "https://telegra.ph/file/cfd26a0a1056a48c0ff60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47613",
        "pageSeq": 47613
    },
    {
        "IDcode": 47614,
        "title": "碧蓝航线-爱宕 （南宫） - Page 1",
        "cover": "https://telegra.ph/file/b08e39fe7cd466b23c9d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47614",
        "pageSeq": 47614
    },
    {
        "IDcode": 47615,
        "title": "碧蓝航线-爱宕 黑（雪琪sama） - Page 1",
        "cover": "https://telegra.ph/file/5cfdf28c221f65698ddcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47615",
        "pageSeq": 47615
    },
    {
        "IDcode": 47616,
        "title": "碧蓝航线-爱宕 白（雪琪sama） - Page 1",
        "cover": "https://telegra.ph/file/bc3cac3223fc647e64d99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47616",
        "pageSeq": 47616
    },
    {
        "IDcode": 47617,
        "title": "【神楽坂真冬】Fate/Grand Order-黑贞德 - Page 1",
        "cover": "https://telegra.ph/file/c90d2d74ac183da916174.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47617",
        "pageSeq": 47617
    },
    {
        "IDcode": 47618,
        "title": "[Fantasy Factory(小丁)] 綾波レイ  Patreon 2018-12 (Evangelion) - Page 1",
        "cover": "https://telegra.ph/file/847e50b0ee4d56dcd55b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47618",
        "pageSeq": 47618
    },
    {
        "IDcode": 47619,
        "title": "(C93)[KURUPIKA(桃色れく)] ARTORIA PENDRAGON ALTER LANCER (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/27ac3daf1ccd249ebd674.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47619",
        "pageSeq": 47619
    },
    {
        "IDcode": 47620,
        "title": "青春ブタ野郎シリーズ-樱岛麻衣（面饼仙儿） - Page 1",
        "cover": "https://telegra.ph/file/7977acdb098eb52de1522.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47620",
        "pageSeq": 47620
    },
    {
        "IDcode": 47621,
        "title": "[魔王x小艾x牧歌] Muge Maou Bunny - Page 1",
        "cover": "https://telegra.ph/file/0094ea63174f3b30ec265.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47621",
        "pageSeq": 47621
    },
    {
        "IDcode": 47622,
        "title": "[在下萝莉控ii] 霞ヶ丘 詩羽 - Page 1",
        "cover": "https://telegra.ph/file/d8460bd1f20d603d95320.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47622",
        "pageSeq": 47622
    },
    {
        "IDcode": 47623,
        "title": "[爱老师_PhD] Fate 玉藻前 舞娘泳装 - Page 1",
        "cover": "https://telegra.ph/file/71501649d618f84796448.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47623",
        "pageSeq": 47623
    },
    {
        "IDcode": 47624,
        "title": "Shigure Cosplay - Page 1",
        "cover": "https://telegra.ph/file/6684695a2fd7381c9cbd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47624",
        "pageSeq": 47624
    },
    {
        "IDcode": 47625,
        "title": "巧克力与香兰子-一小央泽 - Page 1",
        "cover": "https://telegra.ph/file/2a57cf0aaa6d8d9ab6bfc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47625",
        "pageSeq": 47625
    },
    {
        "IDcode": 47626,
        "title": "[Mysuite] Suite collection 29 - Page 1",
        "cover": "https://telegra.ph/file/72987c530a05e00d5942e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47626",
        "pageSeq": 47626
    },
    {
        "IDcode": 47627,
        "title": "碧蓝航线-爱宕 （猫九酱） - Page 1",
        "cover": "https://telegra.ph/file/80d4253222e493aa0eff2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47627",
        "pageSeq": 47627
    },
    {
        "IDcode": 47628,
        "title": "[污神会][污神映画]凛凛蝶常服 - Page 1",
        "cover": "https://telegra.ph/file/4908e4d10c90a8cd41168.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47628",
        "pageSeq": 47628
    },
    {
        "IDcode": 47629,
        "title": "[少女映画]霞之丘诗羽 - Page 1",
        "cover": "https://telegra.ph/file/a0c819f92d6ef515e660f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47629",
        "pageSeq": 47629
    },
    {
        "IDcode": 47630,
        "title": "[少女映画]加藤惠.睡衣 - Page 1",
        "cover": "https://telegra.ph/file/d5013e7448c01113a3937.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47630",
        "pageSeq": 47630
    },
    {
        "IDcode": 47631,
        "title": "[少女映画]和泉纱雾 - Page 1",
        "cover": "https://telegra.ph/file/4fc174e1bd6cf823acf88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47631",
        "pageSeq": 47631
    },
    {
        "IDcode": 47632,
        "title": "[少女映画]岛风&CC - Page 1",
        "cover": "https://telegra.ph/file/1c9578b93cf797911c61d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47632",
        "pageSeq": 47632
    },
    {
        "IDcode": 47633,
        "title": "[少女映画]冰霜烈焰安妮 - Page 1",
        "cover": "https://telegra.ph/file/c8d4df82e613614dea686.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47633",
        "pageSeq": 47633
    },
    {
        "IDcode": 47634,
        "title": "Cosplayer―Shika小鹿鹿 - Page 1",
        "cover": "https://telegra.ph/file/2c2c778e4f23e3e4f9e16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47634",
        "pageSeq": 47634
    },
    {
        "IDcode": 47635,
        "title": "KaYa 萱 Fate/GO スカサハ 先生 - Page 1",
        "cover": "https://telegra.ph/file/468af012565ddbdec8937.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47635",
        "pageSeq": 47635
    },
    {
        "IDcode": 47636,
        "title": "【神楽坂真冬】小さな恋（Hataraku Saibou ） - Page 1",
        "cover": "https://telegra.ph/file/78e134002b9626a57f6ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47636",
        "pageSeq": 47636
    },
    {
        "IDcode": 47637,
        "title": "(コスホリック25) [HERESY (林檎蜜紀)] エッチなマシュの人2 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/e100eb7503f3ed1730823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47637",
        "pageSeq": 47637
    },
    {
        "IDcode": 47638,
        "title": "[coli厨(水無月みり)] マスターさんはぴっちりがお好きですか？ - Page 1",
        "cover": "https://telegra.ph/file/0f4d186c2e5aa0aaa3502.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47638",
        "pageSeq": 47638
    },
    {
        "IDcode": 47639,
        "title": "みさ呆呆 FG○ 玉藻婦警 - Page 1",
        "cover": "https://telegra.ph/file/a30c0dadd26ca51d244fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47639",
        "pageSeq": 47639
    },
    {
        "IDcode": 47640,
        "title": "[柚木yuzuki]格温·斯黛西 - Page 1",
        "cover": "https://telegra.ph/file/b8b0afeb9589abfd70de5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47640",
        "pageSeq": 47640
    },
    {
        "IDcode": 47641,
        "title": "[面饼仙儿]霞之丘诗羽 - Page 1",
        "cover": "https://telegra.ph/file/e258eb54855a21fefeaed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47641",
        "pageSeq": 47641
    },
    {
        "IDcode": 47642,
        "title": "【神楽坂真冬】《Swimingthedrea》-白贞德（Fate/Grand Order） - Page 1",
        "cover": "https://telegra.ph/file/bfe3dc4f7e6dff3081c4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47642",
        "pageSeq": 47642
    },
    {
        "IDcode": 47643,
        "title": "【神楽坂真冬】《白昼梦》-樱岛麻衣（青春ブタ野郎シリーズ） - Page 1",
        "cover": "https://telegra.ph/file/5d54707edab3409ecf3f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47643",
        "pageSeq": 47643
    },
    {
        "IDcode": 47644,
        "title": "[けんけん]愛宕日和 - Page 1",
        "cover": "https://telegra.ph/file/2d9fe2f66efd3b798ea47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47644",
        "pageSeq": 47644
    },
    {
        "IDcode": 47645,
        "title": "きょう肉肉vol.15 エロいな彼女の育てかた 英梨々（動画） - Page 1",
        "cover": "https://telegra.ph/file/fb854078ed8f32e835a23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47645",
        "pageSeq": 47645
    },
    {
        "IDcode": 47646,
        "title": "みさ呆呆  FG◯アルトリアオ●タ - Page 1",
        "cover": "https://telegra.ph/file/fcb07cfd19a851c98f45a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47646",
        "pageSeq": 47646
    },
    {
        "IDcode": 47647,
        "title": "[一小央泽] FGO虞姬 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/89eeeb21abef6f12f0393.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47647",
        "pageSeq": 47647
    },
    {
        "IDcode": 47648,
        "title": "Cosplayer - Fantastic Nami - Page 1",
        "cover": "https://telegra.ph/file/804b7396a910775ca3883.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47648",
        "pageSeq": 47648
    },
    {
        "IDcode": 47649,
        "title": "【神楽坂真冬】艳娘幻梦潭-瓶儿 - Page 1",
        "cover": "https://telegra.ph/file/8799fe65436d14e835248.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47649",
        "pageSeq": 47649
    },
    {
        "IDcode": 47650,
        "title": "【神楽坂真冬】黑丝-碧蓝航线 高雄 - Page 1",
        "cover": "https://telegra.ph/file/b30093dd0c0cc71f25fb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47650",
        "pageSeq": 47650
    },
    {
        "IDcode": 47651,
        "title": "【神楽坂真冬】指揮官很忙-Azurlane TaKao/Atago - Page 1",
        "cover": "https://telegra.ph/file/d783e2a53700214e130d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47651",
        "pageSeq": 47651
    },
    {
        "IDcode": 47652,
        "title": "【神楽坂真冬】胶袜-碧蓝航线 爱宕 - Page 1",
        "cover": "https://telegra.ph/file/5b98eaaaba6c0d60b3a3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47652",
        "pageSeq": 47652
    },
    {
        "IDcode": 47653,
        "title": "[少女映畫] 桐崎千棘 (ニセコイ) - Page 1",
        "cover": "https://telegra.ph/file/0ed4394024668c4d6b92b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47653",
        "pageSeq": 47653
    },
    {
        "IDcode": 47654,
        "title": "ShootingStar's (サク) 媚狐譚 - Page 1",
        "cover": "https://telegra.ph/file/f78cef8e76d6bc91417db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47654",
        "pageSeq": 47654
    },
    {
        "IDcode": 47655,
        "title": "[Kaya]Fate/GO スカサハ（ロイヤル・アイシング） - Page 1",
        "cover": "https://telegra.ph/file/5a1bc6c7ad9f48bee64e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47655",
        "pageSeq": 47655
    },
    {
        "IDcode": 47656,
        "title": "[Kaya]Fate/GO タマモヴィッチ‧コヤンスカヤ - Page 1",
        "cover": "https://telegra.ph/file/6590ff0433043d5c1b80f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47656",
        "pageSeq": 47656
    },
    {
        "IDcode": 47657,
        "title": "ShiroKitsune - Nero Racing Set - Page 1",
        "cover": "https://telegra.ph/file/fa94c6f2bb97d96eac633.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47657",
        "pageSeq": 47657
    },
    {
        "IDcode": 47658,
        "title": "こすっち026/ぜ●まし！妊娠力高杉ビッチにビッチコスさせたら中出し欲MAXエロレイヤー爆誕ｗｗｗ最高のカラダを誇るスレンダー美人と子作り！腹筋痙攣させながら子宮で精液吸い上げる妊娠不可避な孕まSEX - Page 1",
        "cover": "https://telegra.ph/file/127df466da7e30f4d08e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47658",
        "pageSeq": 47658
    },
    {
        "IDcode": 47659,
        "title": "ShiroKitsune - Akali - Page 1",
        "cover": "https://telegra.ph/file/0164e76068199f33f7845.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47659",
        "pageSeq": 47659
    },
    {
        "IDcode": 47660,
        "title": "[一只肉酱阿]Kasugano Sora - Page 1",
        "cover": "https://telegra.ph/file/5d37178d261aa8ed6e05f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47660",
        "pageSeq": 47660
    },
    {
        "IDcode": 47661,
        "title": "[Nonsummerjack] NonBB -Hotep!- - Page 1",
        "cover": "https://telegra.ph/file/a1e384fd3c4064073f8e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47661",
        "pageSeq": 47661
    },
    {
        "IDcode": 47662,
        "title": "sagiri izumi - Page 1",
        "cover": "https://telegra.ph/file/0d07d5f88bd1a7ad5ca9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47662",
        "pageSeq": 47662
    },
    {
        "IDcode": 47663,
        "title": "Sia Siberia - Captain Marvel - Page 1",
        "cover": "https://telegra.ph/file/d764a1e87ced612981c83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47663",
        "pageSeq": 47663
    },
    {
        "IDcode": 47664,
        "title": "[押尾猫/YAWEICAT] 圣诞蕾姆 - Page 1",
        "cover": "https://telegra.ph/file/cf16cb221334fe27b7e9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47664",
        "pageSeq": 47664
    },
    {
        "IDcode": 47665,
        "title": "【少女映畫】華城綾女(无码版) - Page 1",
        "cover": "https://telegra.ph/file/081fefbbf00e0d0a124c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47665",
        "pageSeq": 47665
    },
    {
        "IDcode": 47666,
        "title": "(C95) [mysuite] スイートレーン 5 - Page 1",
        "cover": "https://telegra.ph/file/f5ba72c2d4abdbf84a590.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47666",
        "pageSeq": 47666
    },
    {
        "IDcode": 47667,
        "title": "(C95) [mysuite] スイートレーン 4 - Page 1",
        "cover": "https://telegra.ph/file/90fc75f47c07c2156cc06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47667",
        "pageSeq": 47667
    },
    {
        "IDcode": 47668,
        "title": "Hana Bunny - Mei Rise & Shine - Page 1",
        "cover": "https://telegra.ph/file/40d0d21e053380d521f60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47668",
        "pageSeq": 47668
    },
    {
        "IDcode": 47669,
        "title": "eriri spencer sawamura——Leather attire - Page 1",
        "cover": "https://telegra.ph/file/f5754ad33aa5920dd16f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47669",
        "pageSeq": 47669
    },
    {
        "IDcode": 47670,
        "title": "Sia Siberia - Ada Wong - Page 1",
        "cover": "https://telegra.ph/file/e2564df0de3fd17fb75fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47670",
        "pageSeq": 47670
    },
    {
        "IDcode": 47671,
        "title": "[稚颜酱] NO.9 玉藻前 - Page 1",
        "cover": "https://telegra.ph/file/dcaba8d5199b243bfde1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47671",
        "pageSeq": 47671
    }
];
