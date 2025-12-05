// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5602,
        "title": "[しらそ] クリトリス·ハザード",
        "cover": "https://telegra.ph/file/4f9503c939016346e7e8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5602"
    },
    {
        "IDcode": 5603,
        "title": "[る～く] くノ一ツバキ デカクリ改造の罠",
        "cover": "https://telegra.ph/file/6698edeb7aa1f3bacf05a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5603"
    },
    {
        "IDcode": 5604,
        "title": "[石野鐘音] ピンチ! 魔法少女マロン・拷問クリトリス～はじける超充血膨張陰核～",
        "cover": "https://telegra.ph/file/1d50a0c869c50a8b756a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5604"
    },
    {
        "IDcode": 5605,
        "title": "[虎助遥人] Shake Love",
        "cover": "https://telegra.ph/file/541314d32b1c2cc70fd72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5605"
    },
    {
        "IDcode": 5606,
        "title": "[emily] Vanilla Pocket",
        "cover": "https://telegra.ph/file/d7f082f2d53ae35077aab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5606"
    },
    {
        "IDcode": 5607,
        "title": "[locon] 勤労娼年 (きゃわたま 1ST 絶対服従男の娘。)",
        "cover": "https://telegra.ph/file/0d0109adc2263a6c9e7c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5607"
    },
    {
        "IDcode": 5608,
        "title": "[はるゆきこ] ミイラ女VSデカチン",
        "cover": "https://telegra.ph/file/42c59c6c3ce662524a48c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5608"
    },
    {
        "IDcode": 5609,
        "title": "[笹川ハヤシ] 幸せであるように《前編》 (恋コク)",
        "cover": "https://telegra.ph/file/9dd6490539fd2182867be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5609"
    },
    {
        "IDcode": 5610,
        "title": "[冬野みかん] ぷりてんどがーる",
        "cover": "https://telegra.ph/file/67985f024d22650984f18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5610"
    },
    {
        "IDcode": 5611,
        "title": "[Pennel] 露出大作戦",
        "cover": "https://telegra.ph/file/81e2f81798d39bd7a9c52.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5611"
    },
    {
        "IDcode": 5612,
        "title": "[メネア・ザ・ドッグ] 瑞葉はいじっぱり",
        "cover": "https://telegra.ph/file/b6432290b6355e8a1eec2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5612"
    },
    {
        "IDcode": 5613,
        "title": "[林田虎之助] 僕のウェディングドレス",
        "cover": "https://telegra.ph/file/f8c9b3c0d6bf0264a1ec9.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5613"
    },
    {
        "IDcode": 5614,
        "title": "[黒青郎君] 永世の舞 後篇",
        "cover": "https://telegra.ph/file/1eab764030bdbf03db997.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5614"
    },
    {
        "IDcode": 5615,
        "title": "[でこちんハンマー] 社会を生き抜く唯一無二の方法",
        "cover": "https://telegra.ph/file/94a5bad8a2fc55bf9a1f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5615"
    },
    {
        "IDcode": 5616,
        "title": "[ぷいてゐ] ペットな僕",
        "cover": "https://telegra.ph/file/acb56a4b10968f39f9585.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5616"
    },
    {
        "IDcode": 5617,
        "title": "[石恵] だしもの",
        "cover": "https://telegra.ph/file/bb118b968bd65fbe12d45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5617"
    },
    {
        "IDcode": 5618,
        "title": "[イツモン] 私立！男の娘研究部",
        "cover": "https://telegra.ph/file/dfceba1942b02cee03412.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5618"
    },
    {
        "IDcode": 5619,
        "title": "[メネア・ザ・ドッグ] 瑞葉の稼ぎ方！",
        "cover": "https://telegra.ph/file/70e04e833071268ac94c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5619"
    },
    {
        "IDcode": 5620,
        "title": "[hiro] フェアリーナース ユキ",
        "cover": "https://telegra.ph/file/e77083ffa2e307bf27f65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5620"
    },
    {
        "IDcode": 5621,
        "title": "[汐焼あゆ] 花火のあとで",
        "cover": "https://telegra.ph/file/b37ffdf1418aade94e78b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5621"
    },
    {
        "IDcode": 5622,
        "title": "[山雲] クローゼット ～母の願い～",
        "cover": "https://telegra.ph/file/5aa0d2a9f58f65710f9e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5622"
    },
    {
        "IDcode": 5623,
        "title": "[石野鐘音] 野蛮でしなやかなその脚で",
        "cover": "https://telegra.ph/file/c7d8d0e5ad1734001c365.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5623"
    },
    {
        "IDcode": 5624,
        "title": "[BENNY'S] 宅配サンタ",
        "cover": "https://telegra.ph/file/ce1bee2c422c024c73048.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5624"
    },
    {
        "IDcode": 5625,
        "title": "[ぱらボら] EseS to S",
        "cover": "https://telegra.ph/file/1f5ee9310b28da3b70c40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5625"
    },
    {
        "IDcode": 5626,
        "title": "[ふみひろ] エルフの憂鬱日",
        "cover": "https://telegra.ph/file/fa412dcc0e4dfeaee65fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5626"
    },
    {
        "IDcode": 5627,
        "title": "[びん美] つばさちゃん☆営業中",
        "cover": "https://telegra.ph/file/dd594adf4a291493642d1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5627"
    },
    {
        "IDcode": 5628,
        "title": "[ミネむら] 団結の秘訣",
        "cover": "https://telegra.ph/file/8b7385f7bcee3f581efa8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5628"
    },
    {
        "IDcode": 5629,
        "title": "[板場広し] 反抗期 (家族挿姦図)",
        "cover": "https://telegra.ph/file/92eda9cdfd8731543e3c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5629"
    },
    {
        "IDcode": 5630,
        "title": "[PONPON] えぃとふぉう",
        "cover": "https://telegra.ph/file/319b0fd7f24500f12f1e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5630"
    },
    {
        "IDcode": 5631,
        "title": "[太平天極] おいでよ Bitch's island",
        "cover": "https://telegra.ph/file/54932709f1ecc3862d33d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5631"
    },
    {
        "IDcode": 5632,
        "title": "[フリーダム中井] イきたくなるマッサージ店",
        "cover": "https://telegra.ph/file/bd90e8902cd2002ee7b1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5632"
    },
    {
        "IDcode": 5633,
        "title": "[Clover] 回春りらくぜーしょん",
        "cover": "https://telegra.ph/file/5ec933643f102a697ed2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5633"
    },
    {
        "IDcode": 5634,
        "title": "[MTNO] 男の娘は嫌いですか？",
        "cover": "https://telegra.ph/file/f0b071aa2e32be9b7eb35.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5634"
    },
    {
        "IDcode": 5635,
        "title": "[魂神] 優しい夢に抱かれて",
        "cover": "https://telegra.ph/file/fe587fbe566351737025b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5635"
    },
    {
        "IDcode": 5636,
        "title": "[オオカミうお] 援々助ショウジョ",
        "cover": "https://telegra.ph/file/649b4f94361f8d8c4a9fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5636"
    },
    {
        "IDcode": 5637,
        "title": "[笹川ハヤシ] 幸せであるように《後編》",
        "cover": "https://telegra.ph/file/6abc6d248e545d71f2c52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5637"
    },
    {
        "IDcode": 5638,
        "title": "[前島龍] パコパコりなりん",
        "cover": "https://telegra.ph/file/321bcc8bf29a714da17e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5638"
    },
    {
        "IDcode": 5639,
        "title": "[眼魔礼] Dirty&Beauty",
        "cover": "https://telegra.ph/file/64a19d794ca634a2a96e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5639"
    },
    {
        "IDcode": 5640,
        "title": "[桐下悠司] カフェ・トラップ＆トラップ",
        "cover": "https://telegra.ph/file/175c1ed3145b9b7a10e7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5640"
    },
    {
        "IDcode": 5641,
        "title": "[関谷あさみ] アルティメットレア",
        "cover": "https://telegra.ph/file/ee292d0b776ef2cfe05de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5641"
    },
    {
        "IDcode": 5642,
        "title": "[木谷椎] さいみん",
        "cover": "https://telegra.ph/file/d22a48297370867d4bf1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5642"
    },
    {
        "IDcode": 5643,
        "title": "[眼魔礼] Paved with Good Intentions",
        "cover": "https://telegra.ph/file/94d27cec5f77e6b3c65df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5643"
    },
    {
        "IDcode": 5644,
        "title": "[コオリズ] ぼくわるいロリコンじゃないよ",
        "cover": "https://telegra.ph/file/9d2cbcaa4b097e69700e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5644"
    },
    {
        "IDcode": 5645,
        "title": "[由上ゴーシュ] ハート♥ウォッチング",
        "cover": "https://telegra.ph/file/ed524b558c68fc36162d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5645"
    },
    {
        "IDcode": 5646,
        "title": "[眼魔礼] 痴識の渇望",
        "cover": "https://telegra.ph/file/3d4cfafe1e21aa8d1ad22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5646"
    },
    {
        "IDcode": 5647,
        "title": "[イカめし] ティアナvsダークレイズ",
        "cover": "https://telegra.ph/file/de53aa651cfee4037b7fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5647"
    },
    {
        "IDcode": 5648,
        "title": "[神毛物由宇] 催眠アプリ",
        "cover": "https://telegra.ph/file/49d01e9ca2316645c92da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5648"
    },
    {
        "IDcode": 5649,
        "title": "[つりがねそう] 鈍交",
        "cover": "https://telegra.ph/file/6881f53f21b28fdecd25a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5649"
    },
    {
        "IDcode": 5650,
        "title": "[シュガーミルク] お姉さんと遊ぼう♥",
        "cover": "https://telegra.ph/file/e52936c9e207524282912.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5650"
    },
    {
        "IDcode": 5651,
        "title": "[ユイザキカズヤ] ねこいもまりも",
        "cover": "https://telegra.ph/file/2ca0c596ac0418add8942.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5651"
    },
    {
        "IDcode": 5652,
        "title": "[ちみチャンガ] 逆転パラレルワールド彼女",
        "cover": "https://telegra.ph/file/0178becd967ef8e44464f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5652"
    },
    {
        "IDcode": 5653,
        "title": "[由上ゴーシュ] ヒート♥アイランド",
        "cover": "https://telegra.ph/file/421bd5ac0eab0ae5a99ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5653"
    },
    {
        "IDcode": 5654,
        "title": "[加藤じゅん] アナザーアイランド",
        "cover": "https://telegra.ph/file/15782ecec658a207dc36b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5654"
    },
    {
        "IDcode": 5655,
        "title": "[太平天極] 極楽訪問",
        "cover": "https://telegra.ph/file/198577e9d66c9a6f34635.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5655"
    },
    {
        "IDcode": 5656,
        "title": "[響樹はじめ] さよならの黄昏",
        "cover": "https://telegra.ph/file/dd60eb9ee1a3cd94cb1e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5656"
    },
    {
        "IDcode": 5657,
        "title": "[眼魔礼] ついすと・ぶらっく",
        "cover": "https://telegra.ph/file/a7e510948de436992dd11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5657"
    },
    {
        "IDcode": 5658,
        "title": "[夏木きよひと] ふたりはプリプリ",
        "cover": "https://telegra.ph/file/793677e3f889eadab7200.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5658"
    },
    {
        "IDcode": 5659,
        "title": "[もくふう] プロジェクション・セックス",
        "cover": "https://telegra.ph/file/f2fe0cc18db8b5e4ecf8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5659"
    },
    {
        "IDcode": 5660,
        "title": "[三巷文] プライベートスタンダード",
        "cover": "https://telegra.ph/file/738ddec3062669b1cf51e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5660"
    },
    {
        "IDcode": 5661,
        "title": "[くろふーど] 生徒会長イブキ！",
        "cover": "https://telegra.ph/file/72b226a77fe75e337f7f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5661"
    },
    {
        "IDcode": 5662,
        "title": "[睦月] 意識の境界線",
        "cover": "https://telegra.ph/file/02fcc75fbb05159abef0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5662"
    },
    {
        "IDcode": 5663,
        "title": "[せいほうけい] 妹の親友",
        "cover": "https://telegra.ph/file/5af4c5d10b3afe05fbb08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5663"
    },
    {
        "IDcode": 5664,
        "title": "[くろふーど] 春の運び屋",
        "cover": "https://telegra.ph/file/3560b13f6527628689060.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5664"
    },
    {
        "IDcode": 5665,
        "title": "[柚木N'] 俺は、八乙女一華が苦手だ。",
        "cover": "https://telegra.ph/file/862959357327ad234416d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5665"
    },
    {
        "IDcode": 5666,
        "title": "[コインRAND] 南風に会える",
        "cover": "https://telegra.ph/file/1ccfc7192c703ac226cbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5666"
    },
    {
        "IDcode": 5667,
        "title": "[まる寝子] デイリー姉ボディ",
        "cover": "https://telegra.ph/file/81c3b7c440a59d169a350.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5667"
    },
    {
        "IDcode": 5668,
        "title": "[くろふーど] Ruin",
        "cover": "https://telegra.ph/file/0b7a2c1702f773a3e673d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5668"
    },
    {
        "IDcode": 5669,
        "title": "[オスマントル子] エルフ剣士とマッサージ",
        "cover": "https://telegra.ph/file/ff960d3776ca8cd54721d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5669"
    },
    {
        "IDcode": 5670,
        "title": "[桐原湧] 夏の終わりに",
        "cover": "https://telegra.ph/file/88b135f861ab2ab0c9e52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5670"
    },
    {
        "IDcode": 5671,
        "title": "[つりがねそう] ごめんね！山田くん",
        "cover": "https://telegra.ph/file/6529c42b3d117c40780c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5671"
    },
    {
        "IDcode": 5672,
        "title": "[ひっさつくん] ドSなルーズソックス",
        "cover": "https://telegra.ph/file/def0ed13a0d812addefab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5672"
    },
    {
        "IDcode": 5673,
        "title": "[梅太郎] サキュバスプラン",
        "cover": "https://telegra.ph/file/207b20a1dcb22ac8d2ebb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5673"
    },
    {
        "IDcode": 5674,
        "title": "[Noise] 卒業服",
        "cover": "https://telegra.ph/file/79f65755c40a42dae5967.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5674"
    },
    {
        "IDcode": 5675,
        "title": "[でぶらす] きらきら",
        "cover": "https://telegra.ph/file/bad25ccb216295c765fc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5675"
    },
    {
        "IDcode": 5676,
        "title": "[Louis&Visee] 実母姦 ~義父のいない隙に実の母を無理やり犯して孕ませた~",
        "cover": "https://telegra.ph/file/a19682f09dd78b42bce10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5676"
    },
    {
        "IDcode": 5677,
        "title": "[黒乃マサカド] 痴女はクレーマー？",
        "cover": "https://telegra.ph/file/eb17d23940dafe914458c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5677"
    },
    {
        "IDcode": 5678,
        "title": "[橘由宇] かてきょっ♥",
        "cover": "https://telegra.ph/file/a3477955e4d8d512c449f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5678"
    },
    {
        "IDcode": 5679,
        "title": "[mzne] ふぉーるんらぶ",
        "cover": "https://telegra.ph/file/45e98ec498e7b95d65732.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5679"
    },
    {
        "IDcode": 5680,
        "title": "[かかし朝浩] ご休憩１H",
        "cover": "https://telegra.ph/file/856962054bc876e0e1ca0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5680"
    },
    {
        "IDcode": 5681,
        "title": "[大嘘] おこたでみかん",
        "cover": "https://telegra.ph/file/b3bf7395dc9296a96945a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5681"
    },
    {
        "IDcode": 5682,
        "title": "[たまごろー] 男子堕落委員会",
        "cover": "https://telegra.ph/file/0d9e6818fc09fcc0e113f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5682"
    },
    {
        "IDcode": 5683,
        "title": "[ほりとも] 憧れの先輩はケンタウロス",
        "cover": "https://telegra.ph/file/9594563b45112d2d20931.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5683"
    },
    {
        "IDcode": 5684,
        "title": "[ぶぶづけ] ナマイキリップップ",
        "cover": "https://telegra.ph/file/a3952b218ec8e7b029ab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5684"
    },
    {
        "IDcode": 5685,
        "title": "[たまごろー] 男子更生委員会",
        "cover": "https://telegra.ph/file/472ba32ae75eb1579b66c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5685"
    },
    {
        "IDcode": 5686,
        "title": "[桐原湧] 遊びの時間",
        "cover": "https://telegra.ph/file/988cc1ab5b3e6e11d6cc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5686"
    },
    {
        "IDcode": 5687,
        "title": "[彦馬ヒロユキ] 神様ぼしゅう",
        "cover": "https://telegra.ph/file/6adf11df1ee1a8067554b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5687"
    },
    {
        "IDcode": 5688,
        "title": "[たまごろー] タノシイコト",
        "cover": "https://telegra.ph/file/bfe1829bfbde8aec56aa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5688"
    },
    {
        "IDcode": 5689,
        "title": "[紅唯まと] ミャーゥ・・",
        "cover": "https://telegra.ph/file/6de944dfbea9c2c39742a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5689"
    },
    {
        "IDcode": 5690,
        "title": "[runa] 肛辱産卵アリス",
        "cover": "https://telegra.ph/file/1bba84eb20242bb8054f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5690"
    },
    {
        "IDcode": 5691,
        "title": "[しーあーる] 魔法少女アィミー·ミユ",
        "cover": "https://telegra.ph/file/d19d1f37b10474e7c6472.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5691"
    },
    {
        "IDcode": 5692,
        "title": "[橘由宇] ハル咲くハナ",
        "cover": "https://telegra.ph/file/769a055cceb51bcf81acf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5692"
    },
    {
        "IDcode": 5693,
        "title": "[藍夜] 逃避行の果てに",
        "cover": "https://telegra.ph/file/7f8a2a8ec0400e624e2dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5693"
    },
    {
        "IDcode": 5694,
        "title": "[音乃夏] 働く女の子 -女教師編1-",
        "cover": "https://telegra.ph/file/b92328e1a19eebecfc93f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5694"
    },
    {
        "IDcode": 5695,
        "title": "[源五郎] 少女婚活時代～友達以上、結婚未満？",
        "cover": "https://telegra.ph/file/cb3452b5ef867911d8ab1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5695"
    },
    {
        "IDcode": 5696,
        "title": "[高遠くろ助] キレる女の陥落肉便器宣言",
        "cover": "https://telegra.ph/file/86c19dd4eba1ce1f2320a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5696"
    },
    {
        "IDcode": 5697,
        "title": "[高遠くろ助] シスコンパラノイア",
        "cover": "https://telegra.ph/file/140ddc9c9d18abf62d7b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5697"
    },
    {
        "IDcode": 5698,
        "title": "[さじぺん] 彼女はＨなゲーム脳",
        "cover": "https://telegra.ph/file/62ef909e8220c9e2a5491.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5698"
    },
    {
        "IDcode": 5699,
        "title": "[みやもとゆう] キューピッドの気持ち",
        "cover": "https://telegra.ph/file/f6164c7c47aa684f7d184.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5699"
    },
    {
        "IDcode": 5700,
        "title": "[Cuvie] 春からの大進展性活",
        "cover": "https://telegra.ph/file/b120e73510d83945a3463.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5700"
    },
    {
        "IDcode": 5701,
        "title": "[服部ミツカ] 半仏半獣",
        "cover": "https://telegra.ph/file/80c08700077cf29244033.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5701"
    }
];
