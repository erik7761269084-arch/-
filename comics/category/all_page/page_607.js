// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 6601,
        "title": "五月雨びより (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/b86e42c3fa085c077e598.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6601"
    },
    {
        "IDcode": 6602,
        "title": "※注意※惚れると厄いから (東方Project)",
        "cover": "https://telegra.ph/file/09eb93fd1d49d013900e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6602"
    },
    {
        "IDcode": 6603,
        "title": "Mayonaka Yukiko (ペルソナ4)",
        "cover": "https://telegra.ph/file/1789a6a9df76221764c6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6603"
    },
    {
        "IDcode": 6604,
        "title": "提督の檻 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/8f78f12afdb96df6be912.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6604"
    },
    {
        "IDcode": 6605,
        "title": "提督のご趣味 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/5e19011d4e2bc687ef091.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6605"
    },
    {
        "IDcode": 6606,
        "title": "T-20 Fei Tas (魔法少女リリカルなのは)",
        "cover": "https://telegra.ph/file/cfe46fad25d96411c0e67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6606"
    },
    {
        "IDcode": 6607,
        "title": "のうりん牧場へようこそ (のうりん)",
        "cover": "https://telegra.ph/file/28e8f335a22751a7dafbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6607"
    },
    {
        "IDcode": 6608,
        "title": "※注意※惚れると厄いから (東方Project)",
        "cover": "https://telegra.ph/file/41ef11dc31067accd8911.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6608"
    },
    {
        "IDcode": 6609,
        "title": "絶対にゴブリンなんかに負けたりしない! (東方Project)",
        "cover": "https://telegra.ph/file/b914156efbab53bf92eda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6609"
    },
    {
        "IDcode": 6610,
        "title": "KUKKO RO (魔法少女リリカルなのは)",
        "cover": "https://telegra.ph/file/e1868c13cb81c99a1e22b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6610"
    },
    {
        "IDcode": 6611,
        "title": "淫哭啾啾 (東方Project)",
        "cover": "https://telegra.ph/file/e597ccbd55d56f744ac53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6611"
    },
    {
        "IDcode": 6612,
        "title": "加賀さんの (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/642831c01681b273a4216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6612"
    },
    {
        "IDcode": 6613,
        "title": "専業主婦の戦闘服は (魔法少女まどか☆マギカ)",
        "cover": "https://telegra.ph/file/0fb3f654a5fd6a71dda2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6613"
    },
    {
        "IDcode": 6614,
        "title": "はなのとりこ(ToLOVEる-とらぶる-)",
        "cover": "https://telegra.ph/file/41a6a4963e95339b41802.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6614"
    },
    {
        "IDcode": 6615,
        "title": "栞子さんの介助手帖 (ビブリア古书堂の事件手帖)",
        "cover": "https://telegra.ph/file/6da96ca05e08cbbb99d8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6615"
    },
    {
        "IDcode": 6616,
        "title": "ハツネコ (東方Project)",
        "cover": "https://telegra.ph/file/412c83578ee7b03397680.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6616"
    },
    {
        "IDcode": 6617,
        "title": "霧切さんと新婚生活 (ダンガンロンパ 希望の学園と絶望の高校生)",
        "cover": "https://telegra.ph/file/5be627aefe8f9d90288fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6617"
    },
    {
        "IDcode": 6618,
        "title": "女戦士∞マドハンド地獄 (ドラゴンクエストIII)",
        "cover": "https://telegra.ph/file/30cc52616ebc13a350bf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6618"
    },
    {
        "IDcode": 6619,
        "title": "もんはんのえろほん 7 (モンスターハンター)",
        "cover": "https://telegra.ph/file/148f03d8e1ddf383a84d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6619"
    },
    {
        "IDcode": 6620,
        "title": "ブリリアントデイズ (甘城ブリリアントパーク)",
        "cover": "https://telegra.ph/file/934138c9bf31f9acea0a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6620"
    },
    {
        "IDcode": 6621,
        "title": "天津風 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/5c5a8a7a944862d9a9fbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6621"
    },
    {
        "IDcode": 6622,
        "title": "おしおきフラン (東方Project)",
        "cover": "https://telegra.ph/file/bbe121a3b128e29b65a04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6622"
    },
    {
        "IDcode": 6623,
        "title": "予測線を越えて (ソードアート·オンライン)",
        "cover": "https://telegra.ph/file/4303649cf37398eb1e638.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6623"
    },
    {
        "IDcode": 6624,
        "title": "ミルキィ☆リュウセイグン",
        "cover": "https://telegra.ph/file/d1638980bba27ade4d597.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6624"
    },
    {
        "IDcode": 6625,
        "title": "[NARUHO堂 (なるほど)] ツナヒナ",
        "cover": "https://telegra.ph/file/43281a824bdffbecd9a40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6625"
    },
    {
        "IDcode": 6626,
        "title": "ようこそ超川内特区 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/7229f25d2b244ec742893.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6626"
    },
    {
        "IDcode": 6627,
        "title": "即ハメビッチンポinサマー",
        "cover": "https://telegra.ph/file/bd58178a6fa71a0c9c4d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6627"
    },
    {
        "IDcode": 6628,
        "title": "文月中毒 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/e3301e5f94f84875d8ce8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6628"
    },
    {
        "IDcode": 6629,
        "title": "蜂色豊艶 (とある魔術の禁書目録)",
        "cover": "https://telegra.ph/file/0d0ebc2a76edeeaf2547d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6629"
    },
    {
        "IDcode": 6630,
        "title": "あさダさんアサダサン (ソードアート·オンライン)",
        "cover": "https://telegra.ph/file/556d6229d7c33330f7ffa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6630"
    },
    {
        "IDcode": 6631,
        "title": "こいおな (東方Project)",
        "cover": "https://telegra.ph/file/f7ce22acb5aa49e2283e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6631"
    },
    {
        "IDcode": 6632,
        "title": "KUKKO RO (魔法少女リリカルなのは)",
        "cover": "https://telegra.ph/file/01de3c70cfd14d63bbe3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6632"
    },
    {
        "IDcode": 6633,
        "title": "Bitch Up, Girls! (東方Project)",
        "cover": "https://telegra.ph/file/bbaf6d46b56005da17cb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6633"
    },
    {
        "IDcode": 6634,
        "title": "逆しまの太陽に捧げる愛の詩 (ラブライブ!)",
        "cover": "https://telegra.ph/file/a7f60e9bbc7a201709d3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6634"
    },
    {
        "IDcode": 6635,
        "title": "私の希 (ラブライブ!)",
        "cover": "https://telegra.ph/file/4eac9ef9d4b6d1137106b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6635"
    },
    {
        "IDcode": 6636,
        "title": "君の為のモラトリアム (コードギアス 反逆のルルーシュ)",
        "cover": "https://telegra.ph/file/9f5eddb7f78a4572521e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6636"
    },
    {
        "IDcode": 6637,
        "title": "高尾部長と付き合うことになりました",
        "cover": "https://telegra.ph/file/a760466dd9a2f07ce55d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6637"
    },
    {
        "IDcode": 6638,
        "title": "ゲーマ兄妹がセックスを覚えたようです",
        "cover": "https://telegra.ph/file/7cc2f1f9f6b10b26e26b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6638"
    },
    {
        "IDcode": 6639,
        "title": "Lovely Girls Lily vol.10 (魔法少女まどか☆マギカ)",
        "cover": "https://telegra.ph/file/73d16c09be854b9e8c7b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6639"
    },
    {
        "IDcode": 6640,
        "title": "TNTR (ファイナルファンタジーVII)",
        "cover": "https://telegra.ph/file/ea15685882acaad3872a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6640"
    },
    {
        "IDcode": 6641,
        "title": "IMAGINE!!～いいから想像して!!～ (IS＜インフィニット・ストラトス＞)",
        "cover": "https://telegra.ph/file/b509763e2c32a1cbdb12e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6641"
    },
    {
        "IDcode": 6642,
        "title": "SECOND CHANCE (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/9e062fd25e1d586347936.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6642"
    },
    {
        "IDcode": 6643,
        "title": "Close to you (Shingeki no Kyojin)",
        "cover": "https://telegra.ph/file/c8c1e75c0a825cfb780a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6643"
    },
    {
        "IDcode": 6644,
        "title": "予測線を越えて (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/6cb80a0a825c590715190.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6644"
    },
    {
        "IDcode": 6645,
        "title": "T-21 Sai Aaaark (ハピネスチャージプリキュア！)",
        "cover": "https://telegra.ph/file/36aa11436057ae07b57a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6645"
    },
    {
        "IDcode": 6646,
        "title": "ブリリアントデイズ (甘城ブリリアントパーク)",
        "cover": "https://telegra.ph/file/78352f02986dbe562de1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6646"
    },
    {
        "IDcode": 6647,
        "title": "恋色模様8 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/7e726a617b28ca78f5e49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6647"
    },
    {
        "IDcode": 6648,
        "title": "イタチの肉球大全 (NARUTO -ナルト-)",
        "cover": "https://telegra.ph/file/93f51d364b8be3aae0c0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6648"
    },
    {
        "IDcode": 6649,
        "title": "たぶんソレがラブなんじゃなかろうか",
        "cover": "https://telegra.ph/file/04a55025c796a7a58126e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6649"
    },
    {
        "IDcode": 6650,
        "title": "となりのYさん 2時間目 (となりの関くん)",
        "cover": "https://telegra.ph/file/7a5c393941d7fafe96baa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6650"
    },
    {
        "IDcode": 6651,
        "title": "発情期 (涼宮ハルヒの憂鬱)",
        "cover": "https://telegra.ph/file/af05eb31bcb08ec5efb9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6651"
    },
    {
        "IDcode": 6652,
        "title": "黒のリーマンと妖精姫エルニース",
        "cover": "https://telegra.ph/file/9999948b746db6001c9a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6652"
    },
    {
        "IDcode": 6653,
        "title": "Happy Life2 (アマガミ)",
        "cover": "https://telegra.ph/file/1097316931c052ce5cfca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6653"
    },
    {
        "IDcode": 6654,
        "title": "まよなかのひみつ",
        "cover": "https://telegra.ph/file/0cc71048bfe535ab5dd43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6654"
    },
    {
        "IDcode": 6655,
        "title": "マジLOVE咲夜ちゃん☆STAR (東方Project)",
        "cover": "https://telegra.ph/file/40636f656280897fb9211.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6655"
    },
    {
        "IDcode": 6656,
        "title": "鎮守府棲姫 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/b3a0239dcaa480f95118a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6656"
    },
    {
        "IDcode": 6657,
        "title": "乙女心と一航戦 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/3bfd8cd53cbd1642aaf51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6657"
    },
    {
        "IDcode": 6658,
        "title": "コンハルうえでぃんぐ (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/b63f52536c493d5f5966a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6658"
    },
    {
        "IDcode": 6659,
        "title": "KKE♥SUMMER (ラブライブ!)",
        "cover": "https://telegra.ph/file/4812fc9a35dd45b483866.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6659"
    },
    {
        "IDcode": 6660,
        "title": "ビキ二航戦 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/00624db5fb379dece775f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6660"
    },
    {
        "IDcode": 6661,
        "title": "五十鈴挽歌 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/98d880a2eb8d31d2723c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6661"
    },
    {
        "IDcode": 6662,
        "title": "しあわせのうた C83無料配布本 (NARUTO -ナルト-)",
        "cover": "https://telegra.ph/file/ea64b6e5f1673a46c8632.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6662"
    },
    {
        "IDcode": 6663,
        "title": "#581居酒屋フォーマンセル (NARUTO -ナルト-)",
        "cover": "https://telegra.ph/file/c0ccd23374b305695de56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6663"
    },
    {
        "IDcode": 6664,
        "title": "放課後×自慰×体育倉庫",
        "cover": "https://telegra.ph/file/10b0587187fef9eaa799b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6664"
    },
    {
        "IDcode": 6665,
        "title": "夏のたけなわ",
        "cover": "https://telegra.ph/file/b9f5bff6ea5de1c867427.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6665"
    },
    {
        "IDcode": 6666,
        "title": "妖夢ちゃんラブラブせっくす (東方Project)",
        "cover": "https://telegra.ph/file/055f01744810a2af3c71d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6666"
    },
    {
        "IDcode": 6667,
        "title": "秘書艦加賀の夏休み (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/4df62e29d76c6c5b3bead.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6667"
    },
    {
        "IDcode": 6668,
        "title": "リサイクル-資材を産むための深海棲艦達-",
        "cover": "https://telegra.ph/file/ddce522bf7f07abff5a8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6668"
    },
    {
        "IDcode": 6669,
        "title": "五十鈴挽歌 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/880197dea473dffeeedb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6669"
    },
    {
        "IDcode": 6670,
        "title": "薄本のチャイカ (棺姫のチャイカ)",
        "cover": "https://telegra.ph/file/37147056d3639315cf86b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6670"
    },
    {
        "IDcode": 6671,
        "title": "幸セジュウコン生活 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/86332b24902303a7156c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6671"
    },
    {
        "IDcode": 6672,
        "title": "少女変わり玉 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/d51b82a64439975b30fdd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6672"
    },
    {
        "IDcode": 6673,
        "title": "KISS LOVE KISS (キルラキル)",
        "cover": "https://telegra.ph/file/da71e3cae8530854c4142.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6673"
    },
    {
        "IDcode": 6674,
        "title": "深海妻艦～港湾離島～ (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/b5563d032392c661edd32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6674"
    },
    {
        "IDcode": 6675,
        "title": "正妻空母ノススメ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/d4eee3831074e7a3a720f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6675"
    },
    {
        "IDcode": 6676,
        "title": "以心電深 日向さんの恋人 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/d9ce9c055ea11b4c4e7d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6676"
    },
    {
        "IDcode": 6677,
        "title": "「しろ…きょうからこどもおなほに、なる」 (ノーゲーム・ノーライフ)",
        "cover": "https://telegra.ph/file/f58d2e9e0b6bd04c59087.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6677"
    },
    {
        "IDcode": 6678,
        "title": "秋子さんといっしょ 14 (カノン)",
        "cover": "https://telegra.ph/file/fd92d613bcd5f307ad29c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6678"
    },
    {
        "IDcode": 6679,
        "title": "エリーンちゃんとみずあそび (TERA The Exiled Realm of Arborea)",
        "cover": "https://telegra.ph/file/87f12e1a89fa6198bd12c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6679"
    },
    {
        "IDcode": 6680,
        "title": "[U介] あねもね",
        "cover": "https://telegra.ph/file/ec076f8a9ec0ba889240a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6680"
    },
    {
        "IDcode": 6681,
        "title": "文サンノ気マグレ (東方Project)",
        "cover": "https://telegra.ph/file/ccb4998273a25bc260e49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6681"
    },
    {
        "IDcode": 6682,
        "title": "Project Peach (ToLOVEる-とらぶる-)",
        "cover": "https://telegra.ph/file/c3696f6ca4d4b7d085d89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6682"
    },
    {
        "IDcode": 6683,
        "title": "油照紙束 No.03 あくま○こ (ワンピース)",
        "cover": "https://telegra.ph/file/c596f5173969b54b576df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6683"
    },
    {
        "IDcode": 6684,
        "title": "EXPANTION KIT LT (武装神姫)",
        "cover": "https://telegra.ph/file/f7778fd14e4e464b2c243.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6684"
    },
    {
        "IDcode": 6685,
        "title": "夏のせい",
        "cover": "https://telegra.ph/file/12001801c165741238da6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6685"
    },
    {
        "IDcode": 6686,
        "title": "MERCURY SHADOW5 (美少女戦士セーラームーン)",
        "cover": "https://telegra.ph/file/72578a58562f5c1029d68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6686"
    },
    {
        "IDcode": 6687,
        "title": "●ーソン店員 凜ちゃん (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/e0f026abffdf40e887b2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6687"
    },
    {
        "IDcode": 6688,
        "title": "ぺったんたん! (ひなビタ♪)",
        "cover": "https://telegra.ph/file/3d420ba2bf339ee79a859.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6688"
    },
    {
        "IDcode": 6689,
        "title": "401ちゃんといっしょ! (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/e8c60d47ef15f8ff023f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6689"
    },
    {
        "IDcode": 6690,
        "title": "Amicable Unseen Entity (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/fb9e25847f8624bf2f5aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6690"
    },
    {
        "IDcode": 6691,
        "title": "教えて! あずささん。 (アイドルマスター)",
        "cover": "https://telegra.ph/file/daaa5388995f68dd3bb67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6691"
    },
    {
        "IDcode": 6692,
        "title": "AMAGAMI ～HAREM ROOT (アマガミ)",
        "cover": "https://telegra.ph/file/59b4fcd37fe7531a07473.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6692"
    },
    {
        "IDcode": 6693,
        "title": "初美海 (凪のあすから)",
        "cover": "https://telegra.ph/file/c3291f567afbbea37cd91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6693"
    },
    {
        "IDcode": 6694,
        "title": "おさわりしてもいいですよ？ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/c24667c53090b98172fcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6694"
    },
    {
        "IDcode": 6695,
        "title": "DARKNESS (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/7624672c9f83896392b72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6695"
    },
    {
        "IDcode": 6696,
        "title": "増刊成年佐倉さん (月刊少女野崎くん)",
        "cover": "https://telegra.ph/file/d9d8a451b17b40706f118.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6696"
    },
    {
        "IDcode": 6697,
        "title": "THE BROKEN KNIGHTMARE",
        "cover": "https://telegra.ph/file/8748af88e5b1fe138c6c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6697"
    },
    {
        "IDcode": 6698,
        "title": "妹は知らない",
        "cover": "https://telegra.ph/file/49779122e9ae738d45e0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6698"
    },
    {
        "IDcode": 6699,
        "title": "のんたん新婚性活 (ラブライブ！)",
        "cover": "https://telegra.ph/file/cee0abe7428cac645bb29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6699"
    },
    {
        "IDcode": 6700,
        "title": "ステフいじり (ノーゲーム・ノーライフ)",
        "cover": "https://telegra.ph/file/cd68b860a7462c2db1359.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6700"
    }
];
