// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5101,
        "title": "[一只麻利的鸽子汉化x甜族星人出资] [ANCHOR (武藤まと)] ねこみみ先輩は撮られたい",
        "cover": "https://telegra.ph/file/b6338d5cc8f807f403851.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5101"
    },
    {
        "IDcode": 5102,
        "title": "[なのなんの亭 (なのなんの)] JK屈服拘束2 〜合気道少女が負けた日〜",
        "cover": "https://telegra.ph/file/3504c73333dcdf61970c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5102"
    },
    {
        "IDcode": 5103,
        "title": "(C100) [Ink Complex (智弘カイ)] 共有地の魔5 (オリジナル)",
        "cover": "https://telegra.ph/file/71f8fb34a5fbe0d12b2dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5103"
    },
    {
        "IDcode": 5104,
        "title": "(C100) [MARASCHINO (高山千尋)] 英＊雄おしりえっち (英雄＊戦姫 WWX)",
        "cover": "https://telegra.ph/file/cd18a97e7a536a79b36b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5104"
    },
    {
        "IDcode": 5105,
        "title": "(C100) [MeltdoWN COmet (雪雨こん)] 楽しいパパ活",
        "cover": "https://telegra.ph/file/32ab47f8869528c665a82.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5105"
    },
    {
        "IDcode": 5106,
        "title": "(C100) [MIGNON WORKS (mignon)] 濡れおなか3",
        "cover": "https://telegra.ph/file/5460fb875dd106d51ea81.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5106"
    },
    {
        "IDcode": 5107,
        "title": "(C100) [YuKi-IRo (ゆきうさぎ。)] パチュリー様は欲求不満 (東方Project)",
        "cover": "https://telegra.ph/file/ce09a3e4c17c792523575.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5107"
    },
    {
        "IDcode": 5108,
        "title": "(C100) [Rosapersica (一ノ宮)] ヨルヤハギ -14- 最愛の最新鋭、改二になる (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/36b4564b7aa086118d02b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5108"
    },
    {
        "IDcode": 5109,
        "title": "(C100) [サークルフィオレ (えかきびと)] 5／5の場合+1 (五等分の花嫁) ]",
        "cover": "https://telegra.ph/file/4a9af5907055effde9cd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5109"
    },
    {
        "IDcode": 5110,
        "title": "(C100) [きのこむ神 (きのこむし)] 先生で、栄養補給シたいなあっ (ブルーアーカイブ)  [v3]",
        "cover": "https://telegra.ph/file/96ef62e19ee2b2e8b82fc.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5110"
    },
    {
        "IDcode": 5111,
        "title": "(C100) [んほぉおおおぉおおおおおお♥おっ♥おっ♥ (おおさわらさだお)] ネトラセクラブ (オリジナル)  [MJK-22-T2799]",
        "cover": "https://telegra.ph/file/f810272bb0b554163f63a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5111"
    },
    {
        "IDcode": 5112,
        "title": "(C100) [まりも屋 (もりまりも)] CHALDEA GIRLS COLLECTION 白百合の王妃カラオケデートで制服&コスプレHしちゃう本 (Fate Grand Order) [黑锅汉化组]",
        "cover": "https://telegra.ph/file/b99cb9277d9589ca540f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5112"
    },
    {
        "IDcode": 5113,
        "title": "(C100) [没後 (RYO)] お姉ちゃんは弟とえっちしないと学校にいけない。",
        "cover": "https://telegra.ph/file/4e28aec9d99d325153245.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5113"
    },
    {
        "IDcode": 5114,
        "title": "(C100) [そちゃ屋 (にこびぃ)] 浜風の性事情 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/68dea0e3f5f2530046f27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5114"
    },
    {
        "IDcode": 5115,
        "title": "(C100) [じこまんぞく (秋月伊槻)] 原初の歌姫は譲れない (Fate Grand Order)",
        "cover": "https://telegra.ph/file/59222ad82a232bc858a0d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5115"
    },
    {
        "IDcode": 5116,
        "title": "(C99) あずきさんは限界です!",
        "cover": "https://telegra.ph/file/3856b675067bc8b1d18a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5116"
    },
    {
        "IDcode": 5117,
        "title": "(C100) [みまむぃ (VALRHONA)] 【メロン限定セット】NOT FOUND (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/57133608189265c70b05e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5117"
    },
    {
        "IDcode": 5118,
        "title": "(C96) ケモミミ専門リフレ Vol.1 ねこみみちゃんはとろけたい",
        "cover": "https://telegra.ph/file/2fd3762908bb3dad84a89.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5118"
    },
    {
        "IDcode": 5119,
        "title": "(C100) [ESSENTIA (藤真拓哉)] 五等分のメイド嫁 (五等分の花嫁)",
        "cover": "https://telegra.ph/file/5b3b4563ab34837dc3775.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5119"
    },
    {
        "IDcode": 5120,
        "title": "(C100) [あんみつよもぎ亭 (みちきんぐ)] ANMITSU TOUHOU THE AFTER Vol.3 射精管理してくださいっ咲夜さん!+ (東方Project)",
        "cover": "https://telegra.ph/file/d3d332e34a7b2691b267f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5120"
    },
    {
        "IDcode": 5121,
        "title": "(C100) [みやんち (宮越良月)] どうせ俺の青春ラブコメはDTで終わっている。 (やはり俺の青春ラブコメはまちがっている。)",
        "cover": "https://telegra.ph/file/a1a43ac1e3cbeb4c64e65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5121"
    },
    {
        "IDcode": 5122,
        "title": "[2018] こあくまは小動物 + とらのあな限定リーフレット  (部分汉化 截止2020.05.03)",
        "cover": "https://telegra.ph/file/a91356b38b68a4e1e94b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5122"
    },
    {
        "IDcode": 5123,
        "title": "(C100) [ティタノマキア (みかづち)] 甘いモノは控えめに。 (アイドルマスター シャイニーカラーズ)  [v2]",
        "cover": "https://telegra.ph/file/13bd231356fcc2762ce70.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5123"
    },
    {
        "IDcode": 5124,
        "title": "(C89) うさわーく vol.03",
        "cover": "https://telegra.ph/file/6b190fdf59c2487749e6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5124"
    },
    {
        "IDcode": 5125,
        "title": "(コミティア120) 半熟夫婦のとある休日",
        "cover": "https://telegra.ph/file/cd1a8e124b92c4a30ef04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5125"
    },
    {
        "IDcode": 5126,
        "title": "(C100) [創攻線 (ぴざぬこ)] 妹と催眠アプリは使いよう",
        "cover": "https://telegra.ph/file/3a6d209ab8d232607002a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5126"
    },
    {
        "IDcode": 5127,
        "title": "(C100) [いっきづか (きづかかずき、Fue)] 秩序バケーション (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/07643b4d759ea04447404.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5127"
    },
    {
        "IDcode": 5128,
        "title": "(C100) [ソチコチ (そらモチ)] 甘い雨と甘い香り (原神)",
        "cover": "https://telegra.ph/file/726e2ea133dafd2ce2091.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5128"
    },
    {
        "IDcode": 5129,
        "title": "(C100) [しもやけ堂 (逢魔刻壱)] 新婚パチュリーは満足できない (東方Project)",
        "cover": "https://telegra.ph/file/44546cd01907f4cab0ca6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5129"
    },
    {
        "IDcode": 5130,
        "title": "(C100) [むらさきいろのよる (むらさき )] パパ活初心者桐花ちゃん",
        "cover": "https://telegra.ph/file/fc367a4569054aadaaf29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5130"
    },
    {
        "IDcode": 5131,
        "title": "(C100) [ciaociao (あらきかなお)] ノリのいい男の子に女装させて催眠ごっこするおはなし",
        "cover": "https://telegra.ph/file/21e39c5a1844f985a5f03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5131"
    },
    {
        "IDcode": 5132,
        "title": "(C100) [SKK (消火器)] 水着みせにきただけだしッ!! (少女前線)",
        "cover": "https://telegra.ph/file/918863e998221726fa605.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5132"
    },
    {
        "IDcode": 5133,
        "title": "(C100) [remora field (remora)] ニーアちゃんとイチャイチャする本 (グランブルーファンタジー)  [MJK-22-T2805]",
        "cover": "https://telegra.ph/file/497cb937c16f6158e72c7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5133"
    },
    {
        "IDcode": 5134,
        "title": "(C100) [CrowView (よろず)] ゲームカイハツブハ終了しました (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/c46c565d70f2b77f55bb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5134"
    },
    {
        "IDcode": 5135,
        "title": "[2017.08] My Little Maid 4 (C92) [山樱汉化]",
        "cover": "https://telegra.ph/file/30acbc63365fe2cee9534.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5135"
    },
    {
        "IDcode": 5136,
        "title": "(C100) [MAPLER (まぷる)] おみあしトレーニング",
        "cover": "https://telegra.ph/file/f929f23a76572503568c3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5136"
    },
    {
        "IDcode": 5137,
        "title": "(C100) [花尾娼家 (柳瀬こたつ)] 逆転用意してません + おまけステッカー (Fate Grand Order)",
        "cover": "https://telegra.ph/file/be7f09d4e7b44fa329633.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5137"
    },
    {
        "IDcode": 5138,
        "title": "(C100) [激浪Director (ヨシカ)] 北沢志保の痴漢本 (アイドルマスター ミリオンライブ!)",
        "cover": "https://telegra.ph/file/da98de06f50e4ee7214bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5138"
    },
    {
        "IDcode": 5139,
        "title": "[kakao] おたぎゃる (COMIC快楽天ビースト 2022年2月号) [MJK-22-Z2751]",
        "cover": "https://telegra.ph/file/3714670b8dd1e23d7d086.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5139"
    },
    {
        "IDcode": 5140,
        "title": "[kakao] 鰐ヶ丘学園女子水泳部にようこそ! (COMIC 快楽天ビースト 2022年10月号) [MJK-22-Z2819]",
        "cover": "https://telegra.ph/file/f89841465774fd2611d16.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5140"
    },
    {
        "IDcode": 5141,
        "title": "[大伴ヤキ] アナタのお願い (COMIC快楽天 2022年6月号) [MJK-22-Z2817]",
        "cover": "https://telegra.ph/file/41e0491d68fedd37458ce.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5141"
    },
    {
        "IDcode": 5142,
        "title": "[紺菓] 年上のお姫様♥ (COMIC BAVEL 2022年9月号) [MJK-22-Z2833]",
        "cover": "https://telegra.ph/file/9a0100eeacd47405bfbb1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5142"
    },
    {
        "IDcode": 5143,
        "title": "[翠野タヌキ] 堕淫の教会 (COMIC BAVEL 2021年9月号) [MJK-22-Z2786]",
        "cover": "https://telegra.ph/file/8507b35a9b2e976c4865e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5143"
    },
    {
        "IDcode": 5144,
        "title": "[みちきんぐ] 主従えくすたしー 主僕狂熱 [中文]",
        "cover": "https://telegra.ph/file/430ae620be2fd2d1620fe.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5144"
    },
    {
        "IDcode": 5145,
        "title": "[ホムンクルス] 求愛エトランゼ",
        "cover": "https://telegra.ph/file/464491901fad642afa5d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5145"
    },
    {
        "IDcode": 5146,
        "title": "[メメ50] 発情警報 [不想记名重嵌]",
        "cover": "https://telegra.ph/file/bf02314223d430cfd2fa9.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5146"
    },
    {
        "IDcode": 5147,
        "title": "[こっぺ]滴る女 + 4Pリーフレット(单行本)",
        "cover": "https://telegra.ph/file/17f45cfcad2bb52f404f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5147"
    },
    {
        "IDcode": 5148,
        "title": "[ゆずのきいち] 高鳴り (COMIC快楽天 2019年8月号) [MJK-22-Z2710]",
        "cover": "https://telegra.ph/file/771aeed502b37ecc566d8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5148"
    },
    {
        "IDcode": 5149,
        "title": "[八尋ぽち] 初体験 (COMIC快楽天 2021年6月号) [MJK-22-Z2816]",
        "cover": "https://telegra.ph/file/3780018451ff4122666c1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5149"
    },
    {
        "IDcode": 5150,
        "title": "[半里バード] ナマイキお嬢～なかよし編～ (COMIC快楽天ビースト 2021年3月号)  [MJK-22-Z2725]",
        "cover": "https://telegra.ph/file/24386191153ebe3525201.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5150"
    },
    {
        "IDcode": 5151,
        "title": "[みちきんぐ] アザトメイキング+ [中文]",
        "cover": "https://telegra.ph/file/b3487e92cb35e80826695.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5151"
    },
    {
        "IDcode": 5152,
        "title": "[八尋ぽち] はめぺろ[期远重制]",
        "cover": "https://telegra.ph/file/a606f0e285f6c482d37e8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5152"
    },
    {
        "IDcode": 5153,
        "title": "[もず] オトナになりたい…♡",
        "cover": "https://telegra.ph/file/8e54592a4de0bfcfd45cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5153"
    },
    {
        "IDcode": 5154,
        "title": "[七宫つぐ実] ブルーデイジー (コミックゼロス #50) [MJK-22-Z2845]",
        "cover": "https://telegra.ph/file/37639d37c49ed2f82eb5e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5154"
    },
    {
        "IDcode": 5155,
        "title": "[木瀬樹] (WEEKLY快楽天 2022 No.09) 麦の恩返し",
        "cover": "https://telegra.ph/file/33ccdd1de65c9ae649ae5.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5155"
    },
    {
        "IDcode": 5156,
        "title": "[関谷あさみ] メタモルフォーゼ (COMIC BAVEL 2021年5月号) [MJK-22-Z2659]",
        "cover": "https://telegra.ph/file/c70e95a91f959bce95c25.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5156"
    },
    {
        "IDcode": 5157,
        "title": "[つかこ]でれしす～つよ☆しすのつづき～ (COMIC快楽天ビースト 2021年12月号) [MJK-22-Z2682]",
        "cover": "https://telegra.ph/file/9733dc843fec6a9f48376.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5157"
    },
    {
        "IDcode": 5158,
        "title": "[でらうえあ] ゆうくんの秘密特訓!! (COMIC BAVEL 2018年3月号) [MJK-22-Z2811]",
        "cover": "https://telegra.ph/file/e84ab5dae71002a6f11c4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5158"
    },
    {
        "IDcode": 5159,
        "title": "[つかこ] エルフ嫁のいる暮らし その2 ～はじめてのおでかけ～ (COMIC快楽天ビースト 2022年11月号) [[MJK-22-Z2842]",
        "cover": "https://telegra.ph/file/dd86235999f247126db79.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5159"
    },
    {
        "IDcode": 5160,
        "title": "[kakao] バイタルヘブン (COMIC快楽天ビースト 2022年6月号) [MJK-22-Z2787]",
        "cover": "https://telegra.ph/file/e6286b629390d25a33b62.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5160"
    },
    {
        "IDcode": 5161,
        "title": "[あるぷ] ルーティーン (COMIC BAVEL 2022年10月号) [MJK-22-Z2831]",
        "cover": "https://telegra.ph/file/4d0713115acb680ae81ee.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5161"
    },
    {
        "IDcode": 5162,
        "title": "[きょくちょ] シノ様はご立腹♥2 (COMIC BAVEL 2022年2月号) [MJK-22-Z2727]",
        "cover": "https://telegra.ph/file/57bee697c337fca199f3b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5162"
    },
    {
        "IDcode": 5163,
        "title": "[kakao] Cold Fish (COMIC快楽天ビースト 2022年8月号) [MJK-22-Z2812] [V2]",
        "cover": "https://telegra.ph/file/b7e773e1e6d68f739a451.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5163"
    },
    {
        "IDcode": 5164,
        "title": "[アシオミマサト] シークレットオーダー (COMIC快楽天 2022年2月号) [MJK-22-Z2691]",
        "cover": "https://telegra.ph/file/5e7fbfa7c435b20e8d5b9.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5164"
    },
    {
        "IDcode": 5165,
        "title": "[ぼーかん] アフターサービス[无修正][单行本][结城铃兰个人汉化]",
        "cover": "https://telegra.ph/file/7f7023f8e13e25c32c499.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5165"
    },
    {
        "IDcode": 5166,
        "title": "[太平さんせっと] 自慰んたれすと (COMIC失楽天 2021年11月号) [MJK-22-Z2754]",
        "cover": "https://telegra.ph/file/9909f450d0df28dd46f54.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5166"
    },
    {
        "IDcode": 5167,
        "title": "[火浦R] 深夜の魔法 (COMIC失楽天 2019年5月号) [MJK-22-Z2723]",
        "cover": "https://telegra.ph/file/1fbf10f48022d797b1cdd.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5167"
    },
    {
        "IDcode": 5168,
        "title": "[愛上陸] イジラレ ～復讐催眠～ [伪单行本]",
        "cover": "https://telegra.ph/file/577aae005fce46fe20f8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5168"
    },
    {
        "IDcode": 5169,
        "title": "[荒田川にけい] 失恋生徒会 第1話 生徒会長湯見屋詩織の失恋 (WEEKLY快楽天 2021 No.43.44) [MJK-22-Z2820]",
        "cover": "https://telegra.ph/file/616a0312a2e97e1863aa4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5169"
    },
    {
        "IDcode": 5170,
        "title": "[ホムンクルス] One Way Lover (COMIC快楽天 2022年5月号) [MJK-22-Z2709]",
        "cover": "https://telegra.ph/file/7dc253df939921539b910.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5170"
    },
    {
        "IDcode": 5171,
        "title": "[だいじ] 久遠の縁 (COMIC快楽天 2022年7月号) [MJK-22-Z2761]",
        "cover": "https://telegra.ph/file/c1a04117df23f5596fd48.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5171"
    },
    {
        "IDcode": 5172,
        "title": "[紺菓] 素直なキモチ♥ (COMIC BAVEL 2022年5月号) [MJK-22-Z2753]",
        "cover": "https://telegra.ph/file/5b425e93772a47b2b5f88.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5172"
    },
    {
        "IDcode": 5173,
        "title": "[ぴょん吉] 私のきらいな人 (COMIC快楽天ビースト 2022年4月号) [MJK-22-Z2763]",
        "cover": "https://telegra.ph/file/6ebef755e43ddec774eb4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5173"
    },
    {
        "IDcode": 5174,
        "title": "[きょくちょ] シノ様はご立腹♥2 (COMIC BAVEL 2022年2月号) [MJK-22-Z2727]",
        "cover": "https://telegra.ph/file/1224fd378393accb9e221.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5174"
    },
    {
        "IDcode": 5175,
        "title": "[kakao] ピュアメイドサービス (COMIC快楽天ビースト 2022年4月号) [MJK-22-Z2752]",
        "cover": "https://telegra.ph/file/3d432a836d258529fa29c.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5175"
    },
    {
        "IDcode": 5176,
        "title": "[Hamao] Prepayment (COMIC快楽天 2022年2月号) [MJK-22-Z2661]",
        "cover": "https://telegra.ph/file/dc645d80111c97fa3e57b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5176"
    },
    {
        "IDcode": 5177,
        "title": "[Hamao] プレゼント (COMIC快楽天 2022年10月号) [MJK-22-Z2815]",
        "cover": "https://telegra.ph/file/65af45f8b3fff34fdf3d3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5177"
    },
    {
        "IDcode": 5178,
        "title": "[きょくちょ] 楓と鈴 6 (COMIC BAVEL 2022年5月号) [MJK-22-Z2711]",
        "cover": "https://telegra.ph/file/450ca27d3e27d286c54f5.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5178"
    },
    {
        "IDcode": 5179,
        "title": "[柚木N'] ある日の恵梨と兄 (COMIC アオハ 2019 冬) [MJK-22-Z2814]",
        "cover": "https://telegra.ph/file/793a1b297794325ebed66.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5179"
    },
    {
        "IDcode": 5180,
        "title": "[ごさいじ] アマイアイマイ-前篇- (COMIC快楽天 2022年4月号) [MJK-22-Z2707]",
        "cover": "https://telegra.ph/file/349af4198ed5e04f88e48.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5180"
    },
    {
        "IDcode": 5181,
        "title": "[ごさいじ] アマイアイマイ -後編- (COMIC快楽天 2022年4月号) [MJK-22-Z2758]",
        "cover": "https://telegra.ph/file/03690b1623f18017aa216.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5181"
    },
    {
        "IDcode": 5182,
        "title": "[桃月すず] あまい期待 (COMIC快楽天 2022年7月号) [MJK-22-Z2810]",
        "cover": "https://telegra.ph/file/3bf70f9a0257b33da76a1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5182"
    },
    {
        "IDcode": 5183,
        "title": "[宵野コタロー] 快楽プライバシー (COMIC快楽天 2015年9月号) [MJK-22-Z2846]",
        "cover": "https://telegra.ph/file/70b5454cfd1ccd2906bf3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5183"
    },
    {
        "IDcode": 5184,
        "title": "[爺わら] 練習相手？ (COMIC BAVEL 2021年8月号) [MJK-22-Z2680]",
        "cover": "https://telegra.ph/file/c6da479d5684e9980d504.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5184"
    },
    {
        "IDcode": 5185,
        "title": "[爺わら] ワンチャンス (COMIC BAVEL 2022年1月号) [MJK-22-Z2681]",
        "cover": "https://telegra.ph/file/3f0779f2fdb04f2a077c2.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5185"
    },
    {
        "IDcode": 5186,
        "title": "[爺わら] 不等辺三角形 (COMIC BAVEL 2021年4月号) [MJK-22-Z2679]",
        "cover": "https://telegra.ph/file/4594f8de7b4249c33462a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5186"
    },
    {
        "IDcode": 5187,
        "title": "[つかこ] エルフ嫁のいる暮らし (COMIC 快楽天ビースト 2022年9月号) [MJK-22-Z2835]",
        "cover": "https://telegra.ph/file/a2288860c13a1414abadb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5187"
    },
    {
        "IDcode": 5188,
        "title": "[きょくちょ局 (きょくちょ)] メイド教育。 -没落貴族 瑠璃川椿- [MJK-22-T2690]",
        "cover": "https://telegra.ph/file/802bedd8ba84634694488.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5188"
    },
    {
        "IDcode": 5189,
        "title": "[火浦R] 日本のせいでえっちなクリス (COMIC失楽天 2018年9月号) [MJK-22-Z2813]",
        "cover": "https://telegra.ph/file/0a474a3147f832a90a4c1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5189"
    },
    {
        "IDcode": 5190,
        "title": "[半里バード] ナマイキお嬢～フェリシア編～ (COMIC快楽天ビースト 2021年1月号) [MJK-22-Z2724]",
        "cover": "https://telegra.ph/file/a5b7ba012c2b260170ac8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5190"
    },
    {
        "IDcode": 5191,
        "title": "[半里バード] 秘密の交流会 (COMIC快楽天ビースト 2022年5月号) [MJK-22-Z2726]",
        "cover": "https://telegra.ph/file/8ccda2f890dd531c41fd2.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5191"
    },
    {
        "IDcode": 5192,
        "title": "[楝蛙] たべかけ (COMIC快楽天 2022年10月号) [MJK-22-Z2836]",
        "cover": "https://telegra.ph/file/6139eceb8349badcfb020.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5192"
    },
    {
        "IDcode": 5193,
        "title": "[亜美寿真] カノジョになってあげよっか？ (COMIC快楽天 2022年7月号) [MJK-22-Z2759]",
        "cover": "https://telegra.ph/file/eaa25d599a6387f6e6d4e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5193"
    },
    {
        "IDcode": 5194,
        "title": "[宵野コタロー] カイカンスイッチ (COMIC快楽天 2015年12月号) [MJK-22-Z2764]",
        "cover": "https://telegra.ph/file/d0727fdd9f4f6d90adeac.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5194"
    },
    {
        "IDcode": 5195,
        "title": "[皐月芋網] チョコレートクリームパイ (COMIC失楽天 2022年4月号) [MJK-22-Z2747]",
        "cover": "https://telegra.ph/file/c64df6244c14688faabe8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5195"
    },
    {
        "IDcode": 5196,
        "title": "[宵野コタロー] バスト is ベスト (COMIC快楽天 2016年4月号) [MJK-22-Z2841]",
        "cover": "https://telegra.ph/file/abc81ed6c493b4a7c9691.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5196"
    },
    {
        "IDcode": 5197,
        "title": "[ホムンクルス] また恋になる (COMIC快楽天 2022年8月号) [MJK-22-Z2777]",
        "cover": "https://telegra.ph/file/00b0b119b7eaad60796e2.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5197"
    },
    {
        "IDcode": 5198,
        "title": "[右脳] ペットのしつけ方 (COMICアオハ 2020 秋) [MJK-22-Z2746]",
        "cover": "https://telegra.ph/file/b64c31b0e2566230723f7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5198"
    },
    {
        "IDcode": 5199,
        "title": "[きい] 六月の雨の夜に (COMIC快楽天 2021年12月号) [MJK-22-Z2840]",
        "cover": "https://telegra.ph/file/a6f67082d4b570d3e5095.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5199"
    },
    {
        "IDcode": 5200,
        "title": "[雲呑めお] ご奉仕ウララちゃん (COMIC快楽天 2022年4月号) [MJK-22-Z2708]",
        "cover": "https://telegra.ph/file/b38ecc57f82e662dea05d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5200"
    }
];
