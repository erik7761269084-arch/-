// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 4101,
        "title": "[Lonely Church (鈴音れな)] おやすみ少女",
        "cover": "https://telegra.ph/file/fcde647d99f220d3be025.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4101"
    },
    {
        "IDcode": 4102,
        "title": "[夕鍋進行中 (田辺京)] がっこうときどきせっくすやさん",
        "cover": "https://telegra.ph/file/79b8ca0c96bcb058d0a84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4102"
    },
    {
        "IDcode": 4103,
        "title": "2-21-FebruaryYukinaVAHN",
        "cover": "https://telegra.ph/file/bb5b4deeda49cd608c17e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4103"
    },
    {
        "IDcode": 4104,
        "title": "[エノキドォ] 美女と野獣 〜ギャルとキモオタ〜 (COMIC アンスリウム 2021年8月号)",
        "cover": "https://telegra.ph/file/0b55f42992bf145552237.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4104"
    },
    {
        "IDcode": 4105,
        "title": "(C74) [もっちー王国 (もっちー)] 月刊女艦長 (機動戦士ガンダム00、機動戦士ガンダムSEED DESTINY)",
        "cover": "https://telegra.ph/file/c80406e60e3befdeea9f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4105"
    },
    {
        "IDcode": 4106,
        "title": "[空想モノクローム (あび)] 隣のJDの性欲が強い",
        "cover": "https://telegra.ph/file/a7ed15f15e3ef7211375a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4106"
    },
    {
        "IDcode": 4107,
        "title": "[Asunaro Neat. (ろんな)] 教師ひとり、生徒ひとり。 ～田舎の学校で毎日えっち～",
        "cover": "https://telegra.ph/file/46f3bfb0e91be886f5a10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4107"
    },
    {
        "IDcode": 4108,
        "title": "[アトリエマゾ (doskoinpo)] 搾精の基礎",
        "cover": "https://telegra.ph/file/d4f8030c5530b4a126c69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4108"
    },
    {
        "IDcode": 4109,
        "title": "[MUGO] Raiden Shogun 原神 雷电将军 (Genshin Impact)  [Decensored]",
        "cover": "https://telegra.ph/file/e56a2e8245f7a141ae9b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4109"
    },
    {
        "IDcode": 4110,
        "title": "[三巷文] よく似たふたりは... (コミック エグゼ 32)",
        "cover": "https://telegra.ph/file/7611831b6cae04e158149.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4110"
    },
    {
        "IDcode": 4111,
        "title": "[ルシウム23日] 便秘のシスターとふたなりのお医者さん",
        "cover": "https://telegra.ph/file/1a1c9bfebc1a2ba5aaf6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4111"
    },
    {
        "IDcode": 4112,
        "title": "[岩崎ユウキ] ナカニイル (COMIC BAVEL 2021年9月号)",
        "cover": "https://telegra.ph/file/239ebb421899d62cec88e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4112"
    },
    {
        "IDcode": 4113,
        "title": "[墓場] 闇生徒会長 第2話 (COMIC 夢幻転生 2021年3月号)",
        "cover": "https://telegra.ph/file/cbe5e176c4df5d8867208.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4113"
    },
    {
        "IDcode": 4114,
        "title": "(こみトレ30) [星の屑 (カメポンデ)] どちらがお好き? (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/17d0d6f4641403675119c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4114"
    },
    {
        "IDcode": 4115,
        "title": "[Cior (Ken-1)] てぃふぁなま (ファイナルファンタジーVII)",
        "cover": "https://telegra.ph/file/e2a475e4d4fb5268b0b94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4115"
    },
    {
        "IDcode": 4116,
        "title": "(COMIC1☆11) [拡張パーツ (遠藤良危)] スカサハ師匠に犯される本 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/eee8dfa3d2a4483c590bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4116"
    },
    {
        "IDcode": 4117,
        "title": "[幾花にいろ] 幾日",
        "cover": "https://telegra.ph/file/891b18e00e6e121d803a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4117"
    },
    {
        "IDcode": 4118,
        "title": "[ジロウ] 恵のパンスト業務 (肉感的黒ストッキング性活)",
        "cover": "https://telegra.ph/file/57997419a7df0078ae141.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4118"
    },
    {
        "IDcode": 4119,
        "title": "[あかつき茜] 肛辱の乙女たち",
        "cover": "https://telegra.ph/file/c78e2aa0b44670f728000.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4119"
    },
    {
        "IDcode": 4120,
        "title": "[じゃみんぐ] 母娘の淫宴",
        "cover": "https://telegra.ph/file/8094647894afa7bd42ca7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4120"
    },
    {
        "IDcode": 4121,
        "title": "[さわお] ジルのリハビリ (バイオハザード) [進行中](中文翻译)",
        "cover": "https://telegra.ph/file/b146c8b6f941b98daee22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4121"
    },
    {
        "IDcode": 4122,
        "title": "[クールナイツ] エルフのお姉さんシロウトAVインタビュー",
        "cover": "https://telegra.ph/file/9e0a0879eca36167e7fdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4122"
    },
    {
        "IDcode": 4123,
        "title": "(C96) [Radical Dream (竜胆、黒井弘騎)] 祓魔忍 姫丸",
        "cover": "https://telegra.ph/file/76b7d067635ac1f54d135.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4123"
    },
    {
        "IDcode": 4124,
        "title": "[雲呑めお] おかえり",
        "cover": "https://telegra.ph/file/5eead37137b3155d65165.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4124"
    },
    {
        "IDcode": 4125,
        "title": "[いづれ] 名残の雪 (コミックゼロス #89)",
        "cover": "https://telegra.ph/file/1142ff6fc31997c5ac12a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4125"
    },
    {
        "IDcode": 4126,
        "title": "[チャバシラチェーンソー (茶々らん)] ジャンヌと夏の海 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/01f21956e0f6f38f7bfff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4126"
    },
    {
        "IDcode": 4127,
        "title": "[92M] バニーKGNとCYKの発情接待 (アイドルマスターシャイニーカラーズ)",
        "cover": "https://telegra.ph/file/0a46541f3ccf29bf1cb2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4127"
    },
    {
        "IDcode": 4128,
        "title": "[92M] バニーNTHとJYRの発情接待 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/569da3bb556cca11dfac6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4128"
    },
    {
        "IDcode": 4129,
        "title": "[監獄銘菓] ゲームで知り合った(ほぼ)男子高校生とオフパコした時のレポ漫画",
        "cover": "https://telegra.ph/file/6cc41b4427fa194a8779a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4129"
    },
    {
        "IDcode": 4130,
        "title": "(C86) [Number2 (たくじ)] たくじ本2014なつ (ラブライブ!)",
        "cover": "https://telegra.ph/file/364798031d56326d7a7c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4130"
    },
    {
        "IDcode": 4131,
        "title": "[やつあたり (ある)] オフパコレポ漫画まとめ本",
        "cover": "https://telegra.ph/file/ed334e4ec46d085979315.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4131"
    },
    {
        "IDcode": 4132,
        "title": "[ワラビモチー] HEROINE LOSE アルベド編 (オーバーロード)",
        "cover": "https://telegra.ph/file/11c9587444d5da5d4a08d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4132"
    },
    {
        "IDcode": 4133,
        "title": "[草野郎] 100日後に寝取られる彼女",
        "cover": "https://telegra.ph/file/599b689727df7a406d5b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4133"
    },
    {
        "IDcode": 4134,
        "title": "[terasu mc] 三玖[一只麻利的鸽子汉化]",
        "cover": "https://telegra.ph/file/03bc10736c52dd08f2614.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4134"
    },
    {
        "IDcode": 4135,
        "title": "[にらみっ子工場] 金髪ヤンチャ系な彼女との暮らし方 2・前編",
        "cover": "https://telegra.ph/file/9e95ac18edff639fe6f88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4135"
    },
    {
        "IDcode": 4136,
        "title": "[ジュースボックス工場 (ジュナジュナジュース)] ムカつく妹はちゃんと叱らなくちゃ!!2",
        "cover": "https://telegra.ph/file/097b88a9de88c27824d48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4136"
    },
    {
        "IDcode": 4137,
        "title": "[レオナト] 雨の日のミソギと (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/2b65e787aedf249bffcb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4137"
    },
    {
        "IDcode": 4138,
        "title": "[黒ネコワルツ (有一九)] 主の肉は雪に似て～報酬は膣肉で～",
        "cover": "https://telegra.ph/file/488f3c60932e0f7da8d7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4138"
    },
    {
        "IDcode": 4139,
        "title": "[すみやお] 戦国コレクション 松尾芭蕉ちゃん 睡眠姦 (戦国コレクション)",
        "cover": "https://telegra.ph/file/051c9ea693a87c675ee04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4139"
    },
    {
        "IDcode": 4140,
        "title": "[ゴンざぶろー] 対魔忍ユキカゼ 対魔忍は淫獄に沈む番外篇+特典小冊子",
        "cover": "https://telegra.ph/file/8b089a137b159a42d6c10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4140"
    },
    {
        "IDcode": 4141,
        "title": "[夏鈴糖] 生徒会長は挫けない",
        "cover": "https://telegra.ph/file/be1879e7819d031437785.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4141"
    },
    {
        "IDcode": 4142,
        "title": "[はぴねすみるく (おびゃー)] BUKKAKE HAKUDAKU SANAE (東方Project)",
        "cover": "https://telegra.ph/file/5b6dac69c600f80244a18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4142"
    },
    {
        "IDcode": 4143,
        "title": "[あるぷ] めるてぃーりみっと",
        "cover": "https://telegra.ph/file/5d41b170fc698189a6e74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4143"
    },
    {
        "IDcode": 4144,
        "title": "[さくま司] 桃色ドロップ",
        "cover": "https://telegra.ph/file/4d1ef5b23854615c929a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4144"
    },
    {
        "IDcode": 4145,
        "title": "[Xぴえろ] 白宮さんのえちえち奴隷",
        "cover": "https://telegra.ph/file/ae9eb177a9aa3803c665b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4145"
    },
    {
        "IDcode": 4146,
        "title": "[せみもぐら (由家)] 妹と吸収ごっこ",
        "cover": "https://telegra.ph/file/38dd4a22baf1c98466f87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4146"
    },
    {
        "IDcode": 4147,
        "title": "[虎助遥人] ちちくり胸双曲 〜貧乳は最高〜 (COMIC アンスリウム 2021年8月号)",
        "cover": "https://telegra.ph/file/068278de344fbb6c7874a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4147"
    },
    {
        "IDcode": 4148,
        "title": "[露々々木もげら] K子と病みおじ",
        "cover": "https://telegra.ph/file/1f8ff0cad2a40bd840d4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4148"
    },
    {
        "IDcode": 4149,
        "title": "[石器ケトル時代 (石器ケトル)] 同化姫",
        "cover": "https://telegra.ph/file/b3243f4853704c3db931e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4149"
    },
    {
        "IDcode": 4150,
        "title": "[18マスター] 元ヤン母さんと2人きりの生活",
        "cover": "https://telegra.ph/file/042b32cd18e29884c0a55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4150"
    },
    {
        "IDcode": 4151,
        "title": "[七尾ゆきじ] 双母相姦 第1話 (COMIC グーチョ vol.3)",
        "cover": "https://telegra.ph/file/7301579dd2f843e767fac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4151"
    },
    {
        "IDcode": 4152,
        "title": "[のこっぱ] 優華先生の性活指導 (コミックホットミルク 2021年2月号)",
        "cover": "https://telegra.ph/file/8bfe6e54376408a57394a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4152"
    },
    {
        "IDcode": 4153,
        "title": "[吉村竜巻] いんばいと 第2話 (COMIC 真激 2021年4月号)",
        "cover": "https://telegra.ph/file/f8088e6b1e2d27b933d6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4153"
    },
    {
        "IDcode": 4154,
        "title": "[しあし屋] 昔家族を裏切った母はやっぱり今もドスケベでした。",
        "cover": "https://telegra.ph/file/9c222d228a0458d889237.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4154"
    },
    {
        "IDcode": 4155,
        "title": "[吉村竜巻] いんばいと 第2.5話 (COMIC 真激 2021年9月号)",
        "cover": "https://telegra.ph/file/4bbe451a75f33ea6c818f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4155"
    },
    {
        "IDcode": 4156,
        "title": "[Digital Lover (なかじまゆか)] 大人馴染3 DLO-13",
        "cover": "https://telegra.ph/file/b02c8041dadb4e323d577.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4156"
    },
    {
        "IDcode": 4157,
        "title": "[urute] 白雨想いてまざまざと (コミックホットミルク 2020年10月号)",
        "cover": "https://telegra.ph/file/9831e59efbdbfa7864027.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4157"
    },
    {
        "IDcode": 4158,
        "title": "[アヘ丸] 無知崎野薔薇 (呪術廻戦)",
        "cover": "https://telegra.ph/file/498aafdc6509a98ffb6c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4158"
    },
    {
        "IDcode": 4159,
        "title": "(C89) [HONEY QP (命わずか)] 家畜少年射精管理 (デビルサマナー ソウルハッカーズ)",
        "cover": "https://telegra.ph/file/f02d416b757423d3e60bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4159"
    },
    {
        "IDcode": 4160,
        "title": "[だにまる] 僕は梅田さんに逆らえない (COMIC アンスリウム 2021年9月号)",
        "cover": "https://telegra.ph/file/c8efe515265c760111a19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4160"
    },
    {
        "IDcode": 4161,
        "title": "[B-銀河] 二年ぶり漫画練習 書道部ちゃん全編",
        "cover": "https://telegra.ph/file/e66352c6c7e71ff7adb70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4161"
    },
    {
        "IDcode": 4162,
        "title": "[浦瀬しおじ] 妖女館の日常 第一話",
        "cover": "https://telegra.ph/file/5b55824b6c30d356a0946.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4162"
    },
    {
        "IDcode": 4163,
        "title": "[かねことしあき] 女店長を眠らせて… (ANGEL 倶楽部 2021年9月号)",
        "cover": "https://telegra.ph/file/26cdd3e257577f21be775.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4163"
    },
    {
        "IDcode": 4164,
        "title": "[Cior (Ken-1)] 彼女がボクの知らないところで",
        "cover": "https://telegra.ph/file/8c6288227a4c1b6d8b663.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4164"
    },
    {
        "IDcode": 4165,
        "title": "[秋嵩 (あきよしたか)] デキ婚狙いのパパ活女子",
        "cover": "https://telegra.ph/file/1d5b69ce1bbd1694946bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4165"
    },
    {
        "IDcode": 4166,
        "title": "[クールナイツ] エルフのお姉さんシロウトAVインタビュー その2",
        "cover": "https://telegra.ph/file/b75f79df356f2230f2763.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4166"
    },
    {
        "IDcode": 4167,
        "title": "[んみゅ (唐辛子ひでゆ)] なーちゃんおねつであっちっち。てんかうごきます。 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/af3b43d69cb51bc7134c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4167"
    },
    {
        "IDcode": 4168,
        "title": "[Seven Deadly Sins (homu)] 私と円香とプロデューサー (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/c7792be6cb2c93aeb2c91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4168"
    },
    {
        "IDcode": 4169,
        "title": "[甲板下的鸽子窝 (雪ノ岚と异端丶)] 彼岸花の響 (崩壞3rd)",
        "cover": "https://telegra.ph/file/37e8131ab35d4d6e8ec10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4169"
    },
    {
        "IDcode": 4170,
        "title": "[宮部キウイ] フェラチオの天使 + 4Pリーフレット",
        "cover": "https://telegra.ph/file/b7f30fd317691ce967b22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4170"
    },
    {
        "IDcode": 4171,
        "title": "[宮野金太郎] 欲望を叶えるマッチングアプリ 第5話 (COMIC アンスリウム 2021年9月号)",
        "cover": "https://telegra.ph/file/17a18e381dc850697635f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4171"
    },
    {
        "IDcode": 4172,
        "title": "[裹洞补丁] 背德讲台番外--酒局",
        "cover": "https://telegra.ph/file/a05b43f0835b2da4646ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4172"
    },
    {
        "IDcode": 4173,
        "title": "[いづれ] JKちゃんと年頃くん 後日談 (WEEKLY快楽天 2021 No.16)",
        "cover": "https://telegra.ph/file/a21cc315b10fc0275e4ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4173"
    },
    {
        "IDcode": 4174,
        "title": "(C97) [絶対領域 (はげ)] 噂の美人OL ジャンヌ・ダルク 激アツ天然汁マシマシ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/75095c89666cffa9039cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4174"
    },
    {
        "IDcode": 4175,
        "title": "[しあし屋] Mama♥Lover -Summertime!",
        "cover": "https://telegra.ph/file/26d2bcfeee5cdc63d9fc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4175"
    },
    {
        "IDcode": 4176,
        "title": "[TSFのF (F、四葉チカ)] TS魔法少女ひろみ 第3話",
        "cover": "https://telegra.ph/file/d71f928f85f02e22dd3f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4176"
    },
    {
        "IDcode": 4177,
        "title": "[ぽこてん] 男の娘が床オナで精通する漫画",
        "cover": "https://telegra.ph/file/5029d866f533186a12e99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4177"
    },
    {
        "IDcode": 4178,
        "title": "金瓶梅 第一回 潘金莲热盼西门庆 (八字金)[中国古善文化出版社]",
        "cover": "https://telegra.ph/file/7c5bcf9a4626426aa13cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4178"
    },
    {
        "IDcode": 4179,
        "title": "[Deadflow] ユウカまとめ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/09e81f292912e23ac804a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4179"
    },
    {
        "IDcode": 4180,
        "title": "[Deadflow] ユウカさんその2 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/24a942bb1c4406d51da4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4180"
    },
    {
        "IDcode": 4181,
        "title": "[Deadflow] おまけホシノ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/5828ebccb398942e1394c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4181"
    },
    {
        "IDcode": 4182,
        "title": "[ratatatat74] 05/2021 reward  [カラー化]",
        "cover": "https://telegra.ph/file/f36590b4cf733f67e349f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4182"
    },
    {
        "IDcode": 4183,
        "title": "[高山千尋] 大丈夫?お尻でHする? (『お尻が好きです。』)",
        "cover": "https://telegra.ph/file/41d89f4404e70e576731a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4183"
    },
    {
        "IDcode": 4184,
        "title": "[わかまつ] 普段は甘々なお姉さんに金玉空っぽになるまでお仕置きされる話",
        "cover": "https://telegra.ph/file/da729b6c381f67028cfc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4184"
    },
    {
        "IDcode": 4185,
        "title": "[k-mo-狂魔] MonsterhunterRise同人H (Monster Hunter Rise)  [Decensored]",
        "cover": "https://telegra.ph/file/0ea46a1512a197856f4e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4185"
    },
    {
        "IDcode": 4186,
        "title": "[アガタ] 令和のチントレ！ (COMIC 真激 2021年9月号)",
        "cover": "https://telegra.ph/file/0b4de3f69e889830e2f90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4186"
    },
    {
        "IDcode": 4187,
        "title": "(C95) [Garimpeiro (まめでんきゅう)] 心心恋慕 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/2940f357208fa95db5311.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4187"
    },
    {
        "IDcode": 4188,
        "title": "[Futamare (あきあまれ)] ふたなりJK理乃子ちゃん❤",
        "cover": "https://telegra.ph/file/f658acd17b589402d0620.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4188"
    },
    {
        "IDcode": 4189,
        "title": "[ひろびー] 悪戯 (コミックリブート Vol.23)",
        "cover": "https://telegra.ph/file/8b4c5e6187615fa93fc91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4189"
    },
    {
        "IDcode": 4190,
        "title": "[ドラチェフ] 吸い付くモルガン陛下❤ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/e49ed4f33d5451b862bf0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4190"
    },
    {
        "IDcode": 4191,
        "title": "[moro9] アナスタシアちゃんお仕置き (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/c9ca34987c51ada598266.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4191"
    },
    {
        "IDcode": 4192,
        "title": "[Paiれっしゅ] おばさんと1回Hしたら止まらなくなった話",
        "cover": "https://telegra.ph/file/19cbf2546ecea14e7aea3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4192"
    },
    {
        "IDcode": 4193,
        "title": "[かに村えびお] 催眠アプリでイジメっ娘に復讐してみた (COMICグーチョ vol.5)",
        "cover": "https://telegra.ph/file/d79e4beba36f87b6b0c66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4193"
    },
    {
        "IDcode": 4194,
        "title": "[消火器] 愛情の抱き方 (COMIC アンスリウム 2021年8月号)",
        "cover": "https://telegra.ph/file/0c2e51021d2c43ef58db5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4194"
    },
    {
        "IDcode": 4195,
        "title": "[なぱた] おさななじみ (COMIC快楽天 2021年9月号)",
        "cover": "https://telegra.ph/file/6571962b1c3ff3c1f1ff2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4195"
    },
    {
        "IDcode": 4196,
        "title": "[きょくちょ] 恋ひ恋ふ (COMIC BAVEL 2021年10月号)",
        "cover": "https://telegra.ph/file/40794cdba12de98e4bae4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4196"
    },
    {
        "IDcode": 4197,
        "title": "[まきん] サボりたがり少女 (COMIC LO 2021年8月号)",
        "cover": "https://telegra.ph/file/4c67aaef5f8dc0c9c095c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4197"
    },
    {
        "IDcode": 4198,
        "title": "[Jun] けもの道 (COMIC外楽 Vol.07)",
        "cover": "https://telegra.ph/file/48fa2652ddeb21342aa96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4198"
    },
    {
        "IDcode": 4199,
        "title": "[pinkjoe] 報酬の姫君 princess super slut 『補/after story』",
        "cover": "https://telegra.ph/file/d62b0337da4036fc0e117.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4199"
    },
    {
        "IDcode": 4200,
        "title": "(C92) [ぷりたにあ (ぷり)] ヴァイトの鍵 (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/85e4ba594d8026fdcc36d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4200"
    }
];
