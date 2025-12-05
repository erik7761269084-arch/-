// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5702,
        "title": "[H9] 続・迷える子羊",
        "cover": "https://telegra.ph/file/4d25196f5418e2fdffacd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5702"
    },
    {
        "IDcode": 5703,
        "title": "[たらぞお] ナイトwithにゃんこ",
        "cover": "https://telegra.ph/file/b3dc79ecd50ea6962cfbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5703"
    },
    {
        "IDcode": 5704,
        "title": "[高遠くろ助] 好きになった女の子が有料便器でした。",
        "cover": "https://telegra.ph/file/d381689d0bc37ce730bd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5704"
    },
    {
        "IDcode": 5705,
        "title": "[オスマントル子] ヤクソク",
        "cover": "https://telegra.ph/file/4a85348d54d0c63d7000a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5705"
    },
    {
        "IDcode": 5706,
        "title": "[藍夜] JKオークションBOX",
        "cover": "https://telegra.ph/file/34c26dd25c9ce86fa627f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5706"
    },
    {
        "IDcode": 5707,
        "title": "[史鬼匠人] 嘘",
        "cover": "https://telegra.ph/file/00d7cdf0f326dfa6b5cf6.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5707"
    },
    {
        "IDcode": 5708,
        "title": "[源五郎] 少女婚活時代～学コンへ行こう",
        "cover": "https://telegra.ph/file/f9e904d87058ed215c436.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5708"
    },
    {
        "IDcode": 5709,
        "title": "[桃之助] 廃線ホーム ~黄金色のエミリー~",
        "cover": "https://telegra.ph/file/311af0f4ac066638af5b1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5709"
    },
    {
        "IDcode": 5710,
        "title": "[泉ゆうじろ～] おできの治療法",
        "cover": "https://telegra.ph/file/68eccd50258005bb670eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5710"
    },
    {
        "IDcode": 5711,
        "title": "[mzne] はじめてのおてつだい",
        "cover": "https://telegra.ph/file/6aa06435dfd9cb0de2b27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5711"
    },
    {
        "IDcode": 5712,
        "title": "[オオカミうお] 義父",
        "cover": "https://telegra.ph/file/2c445eabc9be17d48e61b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5712"
    },
    {
        "IDcode": 5713,
        "title": "[ぐら乳頭] 姉妹",
        "cover": "https://telegra.ph/file/9eefe0b6a02703731117d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5713"
    },
    {
        "IDcode": 5714,
        "title": "[みぞね] 時給1500円!!漁業を手伝う簡単なお仕事です。",
        "cover": "https://telegra.ph/file/7e5e71ec9df7d56bde23b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5714"
    },
    {
        "IDcode": 5715,
        "title": "[ぐら乳頭] あくみこ",
        "cover": "https://telegra.ph/file/08ee2a8cd5c7a1245b5e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5715"
    },
    {
        "IDcode": 5716,
        "title": "[遠藤良危] The second brother",
        "cover": "https://telegra.ph/file/617d3b9ccbd9ad52d6969.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5716"
    },
    {
        "IDcode": 5717,
        "title": "[遠藤良危] ドキドキえすかれーと",
        "cover": "https://telegra.ph/file/8af80f827b44e2fdae14c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5717"
    },
    {
        "IDcode": 5718,
        "title": "[長代ルージユ] 呪いの跡継ぎ",
        "cover": "https://telegra.ph/file/530e0c66222dbb73fa3bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5718"
    },
    {
        "IDcode": 5719,
        "title": "[しーらかんす] ミスターミステイク",
        "cover": "https://telegra.ph/file/24e159ee33050795dbe28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5719"
    },
    {
        "IDcode": 5720,
        "title": "[竜太] 甘やどり",
        "cover": "https://telegra.ph/file/788caeac7a9ea8da92e08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5720"
    },
    {
        "IDcode": 5721,
        "title": "[三上キャノン] 月が綺麗ですね",
        "cover": "https://telegra.ph/file/dec9fbb77102af93e19f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5721"
    },
    {
        "IDcode": 5722,
        "title": "[滝智次朗] お持ち帰りッ!-",
        "cover": "https://telegra.ph/file/a0090b3446ab95d7ff96e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5722"
    },
    {
        "IDcode": 5723,
        "title": "[しろくま] 大きくなりたいのはそこじゃない！！",
        "cover": "https://telegra.ph/file/262b0b268129f4b9caa50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5723"
    },
    {
        "IDcode": 5724,
        "title": "[夜与] 天狗祭 陰核の儀",
        "cover": "https://telegra.ph/file/79ba2d0a230a9a092105c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5724"
    },
    {
        "IDcode": 5725,
        "title": "[ともみみしもん] 委員長のオシゴト",
        "cover": "https://telegra.ph/file/b95871673a071db966440.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5725"
    },
    {
        "IDcode": 5726,
        "title": "[あたげ] 教え子との付きあい方",
        "cover": "https://telegra.ph/file/fcf65fadbc8338f0cf883.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5726"
    },
    {
        "IDcode": 5727,
        "title": "[三上キャノン] ハッピーバースデーレンタルカレシ",
        "cover": "https://telegra.ph/file/aafa06e8dd0b937ba9475.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5727"
    },
    {
        "IDcode": 5728,
        "title": "[さくらぷちろー] 幼馴染は眠り姫",
        "cover": "https://telegra.ph/file/21433547539242c5cbc9a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5728"
    },
    {
        "IDcode": 5729,
        "title": "[あまぎみちひと] 第三エルフ牧場",
        "cover": "https://telegra.ph/file/584ee0658ebb9ef6e8d90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5729"
    },
    {
        "IDcode": 5730,
        "title": "[音乃夏] 働く女の子 -女教師編2-",
        "cover": "https://telegra.ph/file/d9325b8b79617eb6f42c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5730"
    },
    {
        "IDcode": 5731,
        "title": "[篠塚裕志] 母子の思い",
        "cover": "https://telegra.ph/file/5ace398b2474277ed6584.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5731"
    },
    {
        "IDcode": 5732,
        "title": "[三上キャノン] おしうり! (絶頂欲求)",
        "cover": "https://telegra.ph/file/f57ff952fbcdf121589c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5732"
    },
    {
        "IDcode": 5733,
        "title": "[高津] 人質系女子",
        "cover": "https://telegra.ph/file/1f07fa745a50a4ffcde08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5733"
    },
    {
        "IDcode": 5734,
        "title": "[みちのくアタミ] 第一步要從裡面開始",
        "cover": "https://telegra.ph/file/469207355fe76425da1d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5734"
    },
    {
        "IDcode": 5735,
        "title": "[三上キャノン] 別れ話をしましょう",
        "cover": "https://telegra.ph/file/a96df038db19bcf9f7b11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5735"
    },
    {
        "IDcode": 5736,
        "title": "[おかゆさん] スクールカースト ～序章～",
        "cover": "https://telegra.ph/file/3cb67d8922067fbdaafe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5736"
    },
    {
        "IDcode": 5737,
        "title": "[凪市] キャプテンファイト!",
        "cover": "https://telegra.ph/file/aeda3818cef3c1a2cea02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5737"
    },
    {
        "IDcode": 5738,
        "title": "[剛田ナギ] 秘密のトカゲ姫",
        "cover": "https://telegra.ph/file/cd829edca0f5108cd2aa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5738"
    },
    {
        "IDcode": 5739,
        "title": "[幾花にいろ] 軟着地",
        "cover": "https://telegra.ph/file/d749ca6cea73485be7998.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5739"
    },
    {
        "IDcode": 5740,
        "title": "[大嶋亮] とりかえアプリver.Milf",
        "cover": "https://telegra.ph/file/c2685660e54da7e40f9e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5740"
    },
    {
        "IDcode": 5741,
        "title": "[三上キャノン] レベルアップ!",
        "cover": "https://telegra.ph/file/a58ba588b64f100df8806.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5741"
    },
    {
        "IDcode": 5742,
        "title": "[鶴田文学] ハツタイケン",
        "cover": "https://telegra.ph/file/3f120fc1a2f47e88a3fcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5742"
    },
    {
        "IDcode": 5743,
        "title": "[花札さくらの] らぶろーち",
        "cover": "https://telegra.ph/file/8732824818bf445cd73c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5743"
    },
    {
        "IDcode": 5744,
        "title": "[剛田ナギ] 秘密のトカゲ姫",
        "cover": "https://telegra.ph/file/09b3ed29342a6e030c7fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5744"
    },
    {
        "IDcode": 5745,
        "title": "[fk696] 女装部へようこそ",
        "cover": "https://telegra.ph/file/c7e929cbc5f5dda1e617f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5745"
    },
    {
        "IDcode": 5746,
        "title": "[三上キャノン] 夢喰い",
        "cover": "https://telegra.ph/file/0b764528a42ca30b9429a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5746"
    },
    {
        "IDcode": 5747,
        "title": "[三上キャノン] 真夜さんの秘密の顔",
        "cover": "https://telegra.ph/file/97ce32b090e35ea667de2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5747"
    },
    {
        "IDcode": 5748,
        "title": "[しーあーる] ALP -Arms Live Project-",
        "cover": "https://telegra.ph/file/aa867cad419758d932203.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5748"
    },
    {
        "IDcode": 5749,
        "title": "[しーあーる] 光牙忍者スミカ",
        "cover": "https://telegra.ph/file/fa1606257d132d6570e39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5749"
    },
    {
        "IDcode": 5750,
        "title": "[緋乃ひの] 退魔師の日常",
        "cover": "https://telegra.ph/file/f49d4068e221ffde6a781.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5750"
    },
    {
        "IDcode": 5751,
        "title": "[幾花にいろ] 開き直り",
        "cover": "https://telegra.ph/file/d3cc212eb1510c86e776f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5751"
    },
    {
        "IDcode": 5752,
        "title": "[無洗米] 治験のアルバイド",
        "cover": "https://telegra.ph/file/5d79a21523c0cf5b6a0da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5752"
    },
    {
        "IDcode": 5753,
        "title": "[Azuma Tesshin] Boku no Sensei",
        "cover": "https://telegra.ph/file/a72dea860708a36caf6a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5753"
    },
    {
        "IDcode": 5754,
        "title": "[Zutta] 敗北した勇者たち",
        "cover": "https://telegra.ph/file/8815ee2ee4c9f7244e23c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5754"
    },
    {
        "IDcode": 5755,
        "title": "[たまごろー] 男子更生委員会 対 男子堕落委員会",
        "cover": "https://telegra.ph/file/f49ab4108f14c73079e4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5755"
    },
    {
        "IDcode": 5756,
        "title": "[しーあーる] 魔法少女フロイライン-ユミ",
        "cover": "https://telegra.ph/file/bb866dcb5f6788df90d51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5756"
    },
    {
        "IDcode": 5757,
        "title": "[もずK] ハメられ淫淑女",
        "cover": "https://telegra.ph/file/199d1f96ebd7c54bd59f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5757"
    },
    {
        "IDcode": 5758,
        "title": "[Zutta] 魔法少女☆クライシス",
        "cover": "https://telegra.ph/file/5516c3601f5a31c284c1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5758"
    },
    {
        "IDcode": 5759,
        "title": "[友野ヒロ] ubder10",
        "cover": "https://telegra.ph/file/10b6775f1dd858a20e142.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5759"
    },
    {
        "IDcode": 5760,
        "title": "[飛燕] 吸血女教師の眷属性活",
        "cover": "https://telegra.ph/file/beb8af231cccd0d9c758a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5760"
    },
    {
        "IDcode": 5761,
        "title": "[碧木誠心] DOG×どく",
        "cover": "https://telegra.ph/file/e0f915116351c439245eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5761"
    },
    {
        "IDcode": 5762,
        "title": "[あまぎみちひと] 肉ノゆりかご",
        "cover": "https://telegra.ph/file/d6c95f558611c0ecc6852.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5762"
    },
    {
        "IDcode": 5763,
        "title": "[六壱] 恐竜系女子[",
        "cover": "https://telegra.ph/file/d623bbbd47ffcb1ad13ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5763"
    },
    {
        "IDcode": 5764,
        "title": "[友野ヒロ] カノ×トモ 〜彼女の友達〜",
        "cover": "https://telegra.ph/file/cf0335ce07087f7c8440c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5764"
    },
    {
        "IDcode": 5765,
        "title": "[あらくれ] ゼリーマルチプリケーション",
        "cover": "https://telegra.ph/file/21ed56090feca4ef8d31f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5765"
    },
    {
        "IDcode": 5766,
        "title": "[nalvas] 蝕用雌肉",
        "cover": "https://telegra.ph/file/9f40f39dfab21024ef2fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5766"
    },
    {
        "IDcode": 5767,
        "title": "[いちこ] ビンカン中毒",
        "cover": "https://telegra.ph/file/9f83ee953329f429103fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5767"
    },
    {
        "IDcode": 5768,
        "title": "[秋草ぺぺろん] 極太ちんぽプレス",
        "cover": "https://telegra.ph/file/93528b3c17525291de2ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5768"
    },
    {
        "IDcode": 5769,
        "title": "[友野ヒロ] モモとサクラの花咲く頃に",
        "cover": "https://telegra.ph/file/175e6a746cb73a64b4db4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5769"
    },
    {
        "IDcode": 5770,
        "title": "[無道叡智] きょうだいおやこ",
        "cover": "https://telegra.ph/file/bc67f231abf3cca23c284.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5770"
    },
    {
        "IDcode": 5771,
        "title": "[タケ] 石の淫獄",
        "cover": "https://telegra.ph/file/10d8db0193a50450cece3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5771"
    },
    {
        "IDcode": 5772,
        "title": "[みさおか] みるくの時間",
        "cover": "https://telegra.ph/file/9d601d5fb3fe5854dd3f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5772"
    },
    {
        "IDcode": 5773,
        "title": "[スピリタス太郎] 先輩は押しに弱い",
        "cover": "https://telegra.ph/file/8c883d819407aa44024e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5773"
    },
    {
        "IDcode": 5774,
        "title": "[タカヤマノン] んちんちおのにぃ",
        "cover": "https://telegra.ph/file/1d92100b0e03d2cbc62a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5774"
    },
    {
        "IDcode": 5775,
        "title": "[しんどう] Please, forgive me!",
        "cover": "https://telegra.ph/file/9596d8c3474d628f35e98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5775"
    },
    {
        "IDcode": 5776,
        "title": "[舞原マツゲ] アクシデンタルクリニック",
        "cover": "https://telegra.ph/file/ac10db7cc9b64c53c0b3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5776"
    },
    {
        "IDcode": 5777,
        "title": "[こごろー] オセロ",
        "cover": "https://telegra.ph/file/af73e6654977110cad4b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5777"
    },
    {
        "IDcode": 5778,
        "title": "[MTNO] 詩乃ちゃんのいうとおり",
        "cover": "https://telegra.ph/file/7af7c843fbf13528e17ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5778"
    },
    {
        "IDcode": 5779,
        "title": "[obmas] おねがい! 鬼神さま♥",
        "cover": "https://telegra.ph/file/b90820da9900d3d4e4759.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5779"
    },
    {
        "IDcode": 5780,
        "title": "[野原ひろみ] うつろいやすく…",
        "cover": "https://telegra.ph/file/acf525928e543234066ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5780"
    },
    {
        "IDcode": 5781,
        "title": "[えいとまん] To be honest",
        "cover": "https://telegra.ph/file/cffc0d4365606af8317a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5781"
    },
    {
        "IDcode": 5782,
        "title": "[東西] イミテーション ファミリー",
        "cover": "https://telegra.ph/file/4b32b56b8ba3e6030c8bb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5782"
    },
    {
        "IDcode": 5783,
        "title": "[虎助遥人] アレ好きな彼女 掃除好きな彼女",
        "cover": "https://telegra.ph/file/9f995bc88306cfbdc68a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5783"
    },
    {
        "IDcode": 5784,
        "title": "[ジャイロウ] モデルになってほしい",
        "cover": "https://telegra.ph/file/928b57f2de0dd029a9472.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5784"
    },
    {
        "IDcode": 5785,
        "title": "[嵩乃朔] ちぐはぐな恋",
        "cover": "https://telegra.ph/file/805bf839735cc9fcf75f1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5785"
    },
    {
        "IDcode": 5786,
        "title": "[メトニウム] 桃尻オーシャン!!",
        "cover": "https://telegra.ph/file/7e262fedc98886ce4b6e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5786"
    },
    {
        "IDcode": 5787,
        "title": "[GEN] 竜姫契草紙 (モンスター少女との痴情)",
        "cover": "https://telegra.ph/file/73334cc0b357920d4dd82.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5787"
    },
    {
        "IDcode": 5788,
        "title": "[えいとまん] ユキチャンアイシテル",
        "cover": "https://telegra.ph/file/331819d9a1339ddc506fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5788"
    },
    {
        "IDcode": 5789,
        "title": "[霧生実奈] 夏泉先生のトラウマ尻開発",
        "cover": "https://telegra.ph/file/e9146a396835460210089.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5789"
    },
    {
        "IDcode": 5790,
        "title": "[山鳥] 男の娘レフレイン",
        "cover": "https://telegra.ph/file/0f0f29b63e9299e44fd98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5790"
    },
    {
        "IDcode": 5791,
        "title": "[緑いろ] 女の子だったら・・・",
        "cover": "https://telegra.ph/file/ef99d5532f02f85da4b0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5791"
    },
    {
        "IDcode": 5792,
        "title": "[ジャイロウ] ミッドナイトラブフライトにようこそ",
        "cover": "https://telegra.ph/file/473870890993ce9951a64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5792"
    },
    {
        "IDcode": 5793,
        "title": "[こけこっこ★こま] 雨の中走り出せ",
        "cover": "https://telegra.ph/file/58e8318a47e98d548d7f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5793"
    },
    {
        "IDcode": 5794,
        "title": "[砂川多良] スッキリ ワークアウト!",
        "cover": "https://telegra.ph/file/636acde4afa194f502750.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5794"
    },
    {
        "IDcode": 5795,
        "title": "[砂川多良] 挿レ喰イ",
        "cover": "https://telegra.ph/file/136b1c800725372da2c80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5795"
    },
    {
        "IDcode": 5796,
        "title": "[消火器] 恋雨ドルチェ",
        "cover": "https://telegra.ph/file/ccf97db8e45b8e8aa8b1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5796"
    },
    {
        "IDcode": 5797,
        "title": "[えいとまん] まってたよ",
        "cover": "https://telegra.ph/file/e417e86057b372870a7d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5797"
    },
    {
        "IDcode": 5798,
        "title": "[桜桃千絵里] 学校の快談",
        "cover": "https://telegra.ph/file/ee19c3d387338a13c1d70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5798"
    },
    {
        "IDcode": 5799,
        "title": "[みぞね] 妹と始める黒魔術儀式",
        "cover": "https://telegra.ph/file/582856183b4afa5279661.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5799"
    },
    {
        "IDcode": 5800,
        "title": "[HANABi] S♥Debut！あふた～",
        "cover": "https://telegra.ph/file/79de0d00f96cf4bca3310.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5800"
    },
    {
        "IDcode": 5801,
        "title": "[ぴりりねぎ] 倒錯の綻び",
        "cover": "https://telegra.ph/file/32a8f2a0b1f6dcd4cbe34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5801"
    }
];
