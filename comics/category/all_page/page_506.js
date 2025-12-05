// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5502,
        "title": "[叙火] 異形怪奇譚 『姦姦蛇螺』",
        "cover": "https://telegra.ph/file/062ff3f8502de436c5753.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5502"
    },
    {
        "IDcode": 5503,
        "title": "[桃吹リオ] 夏の遊戯",
        "cover": "https://telegra.ph/file/97fff9fa94d211cfcffcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5503"
    },
    {
        "IDcode": 5504,
        "title": "[桃吹リオ] 幸福の代償",
        "cover": "https://telegra.ph/file/4a8ace4dacefaacd9a546.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5504"
    },
    {
        "IDcode": 5505,
        "title": "[秋月ひろずみ] 女装男子、お風呂場でドッキリ♥",
        "cover": "https://telegra.ph/file/73a287e99157b499b3c63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5505"
    },
    {
        "IDcode": 5506,
        "title": "[はるきち] おねえちゃん日和",
        "cover": "https://telegra.ph/file/8d210d2bd65007472a010.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5506"
    },
    {
        "IDcode": 5507,
        "title": "[利行] 我们去海边",
        "cover": "https://telegra.ph/file/227b527554ec6333e47cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5507"
    },
    {
        "IDcode": 5508,
        "title": "[おじょ] ハメられた夏…",
        "cover": "https://telegra.ph/file/c63145302498dd21a8355.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5508"
    },
    {
        "IDcode": 5509,
        "title": "[アシオミマサト] Dear Voice",
        "cover": "https://telegra.ph/file/1799443a50627f86510c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5509"
    },
    {
        "IDcode": 5510,
        "title": "[おとちち] 针灸逆疗〜变换针灸治疗〜",
        "cover": "https://telegra.ph/file/d0979debac5ba1ef9980b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5510"
    },
    {
        "IDcode": 5511,
        "title": "[千勢賢秋] 寄り途",
        "cover": "https://telegra.ph/file/4ef0571a7d2205c7660de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5511"
    },
    {
        "IDcode": 5512,
        "title": "[144] カワヤノミコ",
        "cover": "https://telegra.ph/file/7bf63ccbca8737aaea5bb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5512"
    },
    {
        "IDcode": 5513,
        "title": "[144] ピラーズ",
        "cover": "https://telegra.ph/file/8ea2582c6b28f2a7a3d51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5513"
    },
    {
        "IDcode": 5514,
        "title": "[144] 閃姫～センヒメ～ 孕魔忍法帳",
        "cover": "https://telegra.ph/file/ca69b6badada809a3a432.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5514"
    },
    {
        "IDcode": 5515,
        "title": "[忍桐ずん] 男の娘探偵 操くんの災難",
        "cover": "https://telegra.ph/file/f8c20590e876d3eb342a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5515"
    },
    {
        "IDcode": 5516,
        "title": "[magifuro蒟蒻] 春は出会いの… (たまはる)",
        "cover": "https://telegra.ph/file/a127815c99d4ee39a936d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5516"
    },
    {
        "IDcode": 5517,
        "title": "[紅威ヨル] 男の娘とデートの練チュー",
        "cover": "https://telegra.ph/file/1b22bc7e53e0cd1ef52fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5517"
    },
    {
        "IDcode": 5518,
        "title": "[緑いろ] 人目を気にして手つなぎデート",
        "cover": "https://telegra.ph/file/a53771577729e27cea785.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5518"
    },
    {
        "IDcode": 5519,
        "title": "[三ッ葉稔] 桜子先生の特別授業",
        "cover": "https://telegra.ph/file/dc3ad6ab31cf05c23831e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5519"
    },
    {
        "IDcode": 5520,
        "title": "[雨霧MIO] 滋養石",
        "cover": "https://telegra.ph/file/029550353694bee62ce2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5520"
    },
    {
        "IDcode": 5521,
        "title": "[佐々原憂樹] 交友かんけい。",
        "cover": "https://telegra.ph/file/665125d9416d7eb83dcff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5521"
    },
    {
        "IDcode": 5522,
        "title": "[成宮亨] リア充女見返したったwww",
        "cover": "https://telegra.ph/file/08b35707fda9fdfe2d4fb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5522"
    },
    {
        "IDcode": 5523,
        "title": "[九条志怜] 君は僕のご主人様",
        "cover": "https://telegra.ph/file/72dbb8b668d0aed17cff3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5523"
    },
    {
        "IDcode": 5524,
        "title": "[古森詠] 儀典・魔王授精",
        "cover": "https://telegra.ph/file/fd98b44d07c15f38a604c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5524"
    },
    {
        "IDcode": 5525,
        "title": "[けんたろう] おねだり傘",
        "cover": "https://telegra.ph/file/2d1583670d2639201c384.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5525"
    },
    {
        "IDcode": 5526,
        "title": "[玉之けだま] Charms Party",
        "cover": "https://telegra.ph/file/4c85b0d2429668198d290.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5526"
    },
    {
        "IDcode": 5527,
        "title": "[砂漠] 昼すぎの夢",
        "cover": "https://telegra.ph/file/bec55546cab1874bc5065.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5527"
    },
    {
        "IDcode": 5528,
        "title": "[Noise] おーばーおーる",
        "cover": "https://telegra.ph/file/d0e4da3c96c850fdcad6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5528"
    },
    {
        "IDcode": 5529,
        "title": "[緋月アキラ] 欲望パンドラ 8",
        "cover": "https://telegra.ph/file/885ec1c10c11ffaf36726.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5529"
    },
    {
        "IDcode": 5530,
        "title": "[いちよんよん] ローパークエスト そしてボテ腹へ…",
        "cover": "https://telegra.ph/file/f3765d36b5c9ec8627a89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5530"
    },
    {
        "IDcode": 5531,
        "title": "[いちよんよん] 触装奴隷決闘者",
        "cover": "https://telegra.ph/file/361275c87318b08dc1520.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5531"
    },
    {
        "IDcode": 5532,
        "title": "[Zutta] 魔法少女☆クライシス",
        "cover": "https://telegra.ph/file/f83b7b2df0e615dc1eafe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5532"
    },
    {
        "IDcode": 5533,
        "title": "[焔すばる] 深き者達",
        "cover": "https://telegra.ph/file/fbf6765fbe9240e3b1bba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5533"
    },
    {
        "IDcode": 5534,
        "title": "19号-海上生明月",
        "cover": "https://telegra.ph/file/f8288137fbbc5cac48958.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5534"
    },
    {
        "IDcode": 5535,
        "title": "[おしるこ缶 (ぴりりねぎ)] Domestic Dog",
        "cover": "https://telegra.ph/file/6c8a7f3c5b98e8f485f49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5535"
    },
    {
        "IDcode": 5536,
        "title": "[やながわ理央] 少年トイレ",
        "cover": "https://telegra.ph/file/d88d3861b0388bf48af50.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5536"
    },
    {
        "IDcode": 5537,
        "title": "[草津てるにょ] ユキちゃんの日常",
        "cover": "https://telegra.ph/file/835d3a15c85519401a153.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5537"
    },
    {
        "IDcode": 5538,
        "title": "[戦艦コモモ、小玉オサム] 親父",
        "cover": "https://telegra.ph/file/b30b16ef13e0648fbcebe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5538"
    },
    {
        "IDcode": 5539,
        "title": "[夢乃狸] デルタ",
        "cover": "https://telegra.ph/file/46cdc2c50bf5980fa091c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5539"
    },
    {
        "IDcode": 5540,
        "title": "[復八磨直兎] 聖百合ヶ丘女学園性奴会",
        "cover": "https://telegra.ph/file/551c8b59b732a7ad180cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5540"
    },
    {
        "IDcode": 5541,
        "title": "[ぴりりねぎ] Ｓ女子会",
        "cover": "https://telegra.ph/file/c83057bb1e7875b1b3208.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5541"
    },
    {
        "IDcode": 5542,
        "title": "[つくも号] 公衆トイレ男子～はじめての、あおかん～1",
        "cover": "https://telegra.ph/file/3a3dbfd3d81a75f8388fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5542"
    },
    {
        "IDcode": 5543,
        "title": "[木谷椎] ひめはじめ",
        "cover": "https://telegra.ph/file/f27bd24af8012a6a21662.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5543"
    },
    {
        "IDcode": 5544,
        "title": "[いづみやおとは] Love Thermal 38.4",
        "cover": "https://telegra.ph/file/ff68e367ff9a188dd8c5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5544"
    },
    {
        "IDcode": 5545,
        "title": "[BENNY'S] 夏休み!",
        "cover": "https://telegra.ph/file/1c4c4223ae7d4ba1c465b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5545"
    },
    {
        "IDcode": 5546,
        "title": "[ごばん] Please kiss me",
        "cover": "https://telegra.ph/file/b7e7ad5f4e01ac85fff7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5546"
    },
    {
        "IDcode": 5547,
        "title": "[井藤ななみ] ラブラブダイエット",
        "cover": "https://telegra.ph/file/3b498429f0f4792d2cec6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5547"
    },
    {
        "IDcode": 5548,
        "title": "[井藤ななみ] ぬくぬく眠り姫",
        "cover": "https://telegra.ph/file/fdf60e638bf80e5962fdd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5548"
    },
    {
        "IDcode": 5549,
        "title": "[友野ヒロ] オーダー・メイド",
        "cover": "https://telegra.ph/file/a560d43ba3f98f3badac2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5549"
    },
    {
        "IDcode": 5550,
        "title": "[うすべに桜子] 気まぐれ悪魔と気弱な僕",
        "cover": "https://telegra.ph/file/5a3c7a7222d0ce6b1564c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5550"
    },
    {
        "IDcode": 5551,
        "title": "[井藤ななみ] メモリアルサプライズ",
        "cover": "https://telegra.ph/file/1fbe702aba0045ed61d94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5551"
    },
    {
        "IDcode": 5552,
        "title": "[友野ヒロ] ふしだらフレンド",
        "cover": "https://telegra.ph/file/54daf792c4db260f88157.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5552"
    },
    {
        "IDcode": 5553,
        "title": "[けこちゃ] 夢見る体操着",
        "cover": "https://telegra.ph/file/30c7aed561101019d5f65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5553"
    },
    {
        "IDcode": 5554,
        "title": "[後藤寿庵] 発情LOVE",
        "cover": "https://telegra.ph/file/25a8d2e72c60fbb2478e2.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5554"
    },
    {
        "IDcode": 5555,
        "title": "[友野ヒロ] 初恋花火",
        "cover": "https://telegra.ph/file/6c7b961345915cfd3c8af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5555"
    },
    {
        "IDcode": 5556,
        "title": "[そりむらようじ] ロリビッチかうんせりんぐ",
        "cover": "https://telegra.ph/file/ebb8324685be62dca33fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5556"
    },
    {
        "IDcode": 5557,
        "title": "ゲームセンターの中心で愛を叫ぶ",
        "cover": "https://telegra.ph/file/d20145a8a7fc4058cc622.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5557"
    },
    {
        "IDcode": 5558,
        "title": "[見習い雑兵] 夕暮れScramble",
        "cover": "https://telegra.ph/file/c4522cfe69202f2ee9c84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5558"
    },
    {
        "IDcode": 5559,
        "title": "[小池マルミ]- 被暴君濡湿",
        "cover": "https://telegra.ph/file/87c23e610aaeccd8472fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5559"
    },
    {
        "IDcode": 5560,
        "title": "[わらしなママ] 種子様",
        "cover": "https://telegra.ph/file/926cf86a6437978215a93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5560"
    },
    {
        "IDcode": 5561,
        "title": "[友野ヒロ] 甘・雨宿り",
        "cover": "https://telegra.ph/file/f3c5cebcdec0855a5d877.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5561"
    },
    {
        "IDcode": 5562,
        "title": "[彦馬ヒロユキ] 甘い誘惑",
        "cover": "https://telegra.ph/file/2ba343d4808f348965e23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5562"
    },
    {
        "IDcode": 5563,
        "title": "[けこちゃ] アキとシュウと秋の一日",
        "cover": "https://telegra.ph/file/71ffd77a3977a353b964d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5563"
    },
    {
        "IDcode": 5564,
        "title": "[けこちゃ] だって好きだもん",
        "cover": "https://telegra.ph/file/340022ac73419326e7704.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5564"
    },
    {
        "IDcode": 5565,
        "title": "[ひっさつくん] 寝っ取りカテキョ",
        "cover": "https://telegra.ph/file/70d3cffab400d6865aeb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5565"
    },
    {
        "IDcode": 5566,
        "title": "[助三郎] 姫騎士物語",
        "cover": "https://telegra.ph/file/08f7d5ff0e8189aff8bf4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5566"
    },
    {
        "IDcode": 5567,
        "title": "[もじゃりん] となりの花子ちゃん",
        "cover": "https://telegra.ph/file/9e66eb7342a3b357a2a65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5567"
    },
    {
        "IDcode": 5568,
        "title": "[ポンスケ] ナイショのマッサージ",
        "cover": "https://telegra.ph/file/3df8e304f3ea379b4d5d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5568"
    },
    {
        "IDcode": 5569,
        "title": "[夢咲三十郎] ボクの好きな先輩",
        "cover": "https://telegra.ph/file/cb7340c60f0907c6053e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5569"
    },
    {
        "IDcode": 5570,
        "title": "[kiasa] 陰日向のひなた",
        "cover": "https://telegra.ph/file/c02475e887e731f30ace0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5570"
    },
    {
        "IDcode": 5571,
        "title": "[雪雨こん] まんがでわかる精飲勉強法",
        "cover": "https://telegra.ph/file/5d49c43a76b686eebabb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5571"
    },
    {
        "IDcode": 5572,
        "title": "[しはちろ] ♂BrokenHeart♀",
        "cover": "https://telegra.ph/file/ab41ad2983e98a77f58f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5572"
    },
    {
        "IDcode": 5573,
        "title": "[美矢火] 私の好きなおじさん×俺の好きな家出少女 上",
        "cover": "https://telegra.ph/file/4094adb0ca3e19ae1c794.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5573"
    },
    {
        "IDcode": 5574,
        "title": "[橘由宇] キミセン♥♥",
        "cover": "https://telegra.ph/file/858e02d1b7600d830e7d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5574"
    },
    {
        "IDcode": 5575,
        "title": "[高柳カツヤ] ちぐはぐな恋でもいいかなって",
        "cover": "https://telegra.ph/file/9284890a75dc6ac1f60c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5575"
    },
    {
        "IDcode": 5576,
        "title": "[彦馬ヒロユキ] おじさんち",
        "cover": "https://telegra.ph/file/fed8fff15ef626485c515.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5576"
    },
    {
        "IDcode": 5577,
        "title": "[松本ノダ] 要尿出來了啊",
        "cover": "https://telegra.ph/file/5157119fc71ea4950b0ea.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5577"
    },
    {
        "IDcode": 5578,
        "title": "[みぞね] 呪いのシカ煎餅",
        "cover": "https://telegra.ph/file/3b7a6271b57ce92578c2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5578"
    },
    {
        "IDcode": 5579,
        "title": "[しはちろ] 変態女子(仮)と女装男子の関係性",
        "cover": "https://telegra.ph/file/e324e002a7b7aeab0e04d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5579"
    },
    {
        "IDcode": 5580,
        "title": "[わらしなママ] 吊童べ",
        "cover": "https://telegra.ph/file/69f7a8281e7c6ffabf6a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5580"
    },
    {
        "IDcode": 5581,
        "title": "[まぐろ帝國] お姉ちゃんのこうげき！！",
        "cover": "https://telegra.ph/file/be34ac2c76c3379d4557e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5581"
    },
    {
        "IDcode": 5582,
        "title": "[印度カリー] 牧野さんは野外がお好き",
        "cover": "https://telegra.ph/file/95d137e785504e4e2696a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5582"
    },
    {
        "IDcode": 5583,
        "title": "[ro] 不思議の国のアリス",
        "cover": "https://telegra.ph/file/349a3a8c16caae8bfca16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5583"
    },
    {
        "IDcode": 5584,
        "title": "[白野ジア] 甲子園はおいといて",
        "cover": "https://telegra.ph/file/c9367a27fb9038e6f7a31.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5584"
    },
    {
        "IDcode": 5585,
        "title": "[みなこなみ] 春の嵐",
        "cover": "https://telegra.ph/file/792164ff21afd570527c7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5585"
    },
    {
        "IDcode": 5586,
        "title": "[神林タカキ] 代価花嫁",
        "cover": "https://telegra.ph/file/6349b3994d6fd80b738fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5586"
    },
    {
        "IDcode": 5587,
        "title": "[花巻かえる] キミの連れ子に恋してる。4 イクメン新婚気分 ！",
        "cover": "https://telegra.ph/file/b8fb3da7cc470464f0235.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5587"
    },
    {
        "IDcode": 5588,
        "title": "[magifuro蒟蒻] 兄弟愛は姉弟愛",
        "cover": "https://telegra.ph/file/ded952e5747a2cb4598c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5588"
    },
    {
        "IDcode": 5589,
        "title": "[水上蘭丸] 闘うのだ乙女",
        "cover": "https://telegra.ph/file/d756e57792630a0532ea7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5589"
    },
    {
        "IDcode": 5590,
        "title": "[水上蘭丸] 闘うのだ乙女",
        "cover": "https://telegra.ph/file/c78c597d6a2350eb4be29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5590"
    },
    {
        "IDcode": 5591,
        "title": "[スピリタス太郎] ポンコツからは逃げられない",
        "cover": "https://telegra.ph/file/5e63d8eec46f1c693c69c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5591"
    },
    {
        "IDcode": 5592,
        "title": "[草津てるにょ] パツ禁♡",
        "cover": "https://telegra.ph/file/107ce7d091accac7f0c6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5592"
    },
    {
        "IDcode": 5593,
        "title": "[むこうじまてんろ] 幼馴染と結ばれるのが正しいとは限らない",
        "cover": "https://telegra.ph/file/39a365bd0f88993b2eb44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5593"
    },
    {
        "IDcode": 5594,
        "title": "KODAMA Naoko フリー&スプラッシュ",
        "cover": "https://telegra.ph/file/9e42584c7ff6542e7694c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5594"
    },
    {
        "IDcode": 5595,
        "title": "[ちょちょ] ロリコンデトックス",
        "cover": "https://telegra.ph/file/5cc55228142778bcf09f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5595"
    },
    {
        "IDcode": 5596,
        "title": "[オオカミうお] 覗く目",
        "cover": "https://telegra.ph/file/fd147244a85b0df878c70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5596"
    },
    {
        "IDcode": 5597,
        "title": "[冬野みかん] お勉強はえっちの後で",
        "cover": "https://telegra.ph/file/23a25490743fb5cee9258.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5597"
    },
    {
        "IDcode": 5598,
        "title": "[彦馬ヒロユキ] ネトリサス",
        "cover": "https://telegra.ph/file/3f4f5a209cedbe1d7872b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5598"
    },
    {
        "IDcode": 5599,
        "title": "[シュガーミルク] trochos",
        "cover": "https://telegra.ph/file/52d295c75bf066a1e85a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5599"
    },
    {
        "IDcode": 5600,
        "title": "[むこうじまてんろ] 幼馴染と結ばれるのが正しいとは限らない 後編",
        "cover": "https://telegra.ph/file/07ec7711cb4ca56ca5236.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5600"
    },
    {
        "IDcode": 5601,
        "title": "[友野ヒロ] キューティービースト",
        "cover": "https://telegra.ph/file/477795bb0eea8096a803e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5601"
    }
];
