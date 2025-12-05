// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 7801,
        "title": "カグライジリ2 (閃乱カグラ)",
        "cover": "https://telegra.ph/file/dc1a3419f8d1e3b47bf6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7801"
    },
    {
        "IDcode": 7802,
        "title": "愛して! 豊桃",
        "cover": "https://telegra.ph/file/3ecbe49123968bcadb1f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7802"
    },
    {
        "IDcode": 7803,
        "title": "AZUSTTACK3 (けいおん！)",
        "cover": "https://telegra.ph/file/51229a82d04ffd917b491.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7803"
    },
    {
        "IDcode": 7804,
        "title": "幽々事 (東方Project)",
        "cover": "https://telegra.ph/file/09c5fb235a48a897c5526.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7804"
    },
    {
        "IDcode": 7805,
        "title": "新兵器ONAHOストライカー (ストライクウィッチーズ)",
        "cover": "https://telegra.ph/file/9cbcf2d2c7af398a2b3ed.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7805"
    },
    {
        "IDcode": 7806,
        "title": "その後の母が寝てる間に",
        "cover": "https://telegra.ph/file/14e3f262768525e35903f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7806"
    },
    {
        "IDcode": 7807,
        "title": "撮影の後は好きにしていいよ♪",
        "cover": "https://telegra.ph/file/fb6bda0ff6ed2e482c9c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7807"
    },
    {
        "IDcode": 7808,
        "title": "変態牝豚☆宣言 (ドリームクラブ)",
        "cover": "https://telegra.ph/file/c7993b61e5ba6473c6b2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7808"
    },
    {
        "IDcode": 7809,
        "title": "CL-orz 35 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/8b6e1b64b760274e5122e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7809"
    },
    {
        "IDcode": 7810,
        "title": "爆乳お姉さんは求愛されたらこたえずにはいられない!",
        "cover": "https://telegra.ph/file/c08903b6d03ba0feae997.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7810"
    },
    {
        "IDcode": 7811,
        "title": "幻想郷楽園化計画 13",
        "cover": "https://telegra.ph/file/1c76f1a6369b68300314c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7811"
    },
    {
        "IDcode": 7812,
        "title": "class officer 萌",
        "cover": "https://telegra.ph/file/3920cc72fc94796ba1db9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7812"
    },
    {
        "IDcode": 7813,
        "title": "ツナデの淫治療 (ナルト)",
        "cover": "https://telegra.ph/file/7b4052b6cac7d831abbac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7813"
    },
    {
        "IDcode": 7814,
        "title": "[HAPPO流(八宝備仁)] IMMORAL",
        "cover": "https://telegra.ph/file/456c962f58ce51b4361aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7814"
    },
    {
        "IDcode": 7815,
        "title": "5○1 Maiden Flight (ストライクウィッチーズ)",
        "cover": "https://telegra.ph/file/5e197407828a8132135e5.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7815"
    },
    {
        "IDcode": 7816,
        "title": "TAKAO OF BLUE STEEL (蒼き鋼のアルペジオ)",
        "cover": "https://telegra.ph/file/242c2f7e4830220cdac59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7816"
    },
    {
        "IDcode": 7817,
        "title": "神境へようこそ (咲 -Saki-)",
        "cover": "https://telegra.ph/file/41d280c57c1cf312eed57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7817"
    },
    {
        "IDcode": 7818,
        "title": "優等生の受難",
        "cover": "https://telegra.ph/file/02edc1f74247d4dc93783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7818"
    },
    {
        "IDcode": 7819,
        "title": "催眠術で国際ケッコン提督からビスマルクを寝取り調教～",
        "cover": "https://telegra.ph/file/694bd2f64bf909fde5b0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7819"
    },
    {
        "IDcode": 7820,
        "title": "阿賀野 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/e464dc386de1a1a0c13bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7820"
    },
    {
        "IDcode": 7821,
        "title": "阿賀野のらぶらぶ日誌 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/58eb1d824581608c53c0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7821"
    },
    {
        "IDcode": 7822,
        "title": "CL-orz 36 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/6bad5b9d17c778351e49a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7822"
    },
    {
        "IDcode": 7823,
        "title": "Karorful mix EX12 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/7a9870ff97862231ba163.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7823"
    },
    {
        "IDcode": 7824,
        "title": "超choooooスキンシップ (ラブプラス)",
        "cover": "https://telegra.ph/file/2ba50dbfb15cf918c9f44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7824"
    },
    {
        "IDcode": 7825,
        "title": "AZUSTTACK3 (けいおん！)",
        "cover": "https://telegra.ph/file/25e3edb5cb417ceba9e45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7825"
    },
    {
        "IDcode": 7826,
        "title": "神境へようこそ (咲 -Saki-)",
        "cover": "https://telegra.ph/file/18f44b68216ec72e3be73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7826"
    },
    {
        "IDcode": 7827,
        "title": "聖羅ちゃんマジ天使 (GJ部)",
        "cover": "https://telegra.ph/file/cc8c4537a885c97538bf6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7827"
    },
    {
        "IDcode": 7828,
        "title": "嫁が着任しました！ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/3bb07e2949e3e920978a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7828"
    },
    {
        "IDcode": 7829,
        "title": "エッチなことができるポイントカード",
        "cover": "https://telegra.ph/file/21c67e2364f8ebc900c34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7829"
    },
    {
        "IDcode": 7830,
        "title": "赤城さんとケッコン性活 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/5200f64e09c29cfeb1735.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7830"
    },
    {
        "IDcode": 7831,
        "title": "こんなボクになったのはだれのせいだと思ってるんですか",
        "cover": "https://telegra.ph/file/2553e0fa06c17439677c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7831"
    },
    {
        "IDcode": 7832,
        "title": "美少年雌堕ち",
        "cover": "https://telegra.ph/file/10b81c15aab1332c65735.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7832"
    },
    {
        "IDcode": 7833,
        "title": "CL-orz37 (ラブライブ!)",
        "cover": "https://telegra.ph/file/44dbfe5c3bde83958c791.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7833"
    },
    {
        "IDcode": 7834,
        "title": "ヲ級ちゃんを捕まえたよ！",
        "cover": "https://telegra.ph/file/a85ddc8eb81578548c401.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7834"
    },
    {
        "IDcode": 7835,
        "title": "[東横サーフライダー (ふみー)] ボクとラブホに行きたいですか？",
        "cover": "https://telegra.ph/file/ea6a1534007d31c1ded06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7835"
    },
    {
        "IDcode": 7836,
        "title": "駆逐艦これくしょん (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/d76d795d82514b2d60c99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7836"
    },
    {
        "IDcode": 7837,
        "title": "古明地さとり あ～したい こ～したい (東方Project)",
        "cover": "https://telegra.ph/file/b15748d9d2ac3e58942ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7837"
    },
    {
        "IDcode": 7838,
        "title": "銀雪の彼方に (アマガミ, フォトカノ)",
        "cover": "https://telegra.ph/file/caa86e276cb5d2e11a0bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7838"
    },
    {
        "IDcode": 7839,
        "title": "Melcheese40 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/07ebaedbf087647fa6ed7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7839"
    },
    {
        "IDcode": 7840,
        "title": "天使の居ぬ間に… (そらのおとしもの)",
        "cover": "https://telegra.ph/file/3d582cf5349a6adfded66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7840"
    },
    {
        "IDcode": 7841,
        "title": "妹は僕の恋人～てまりとチャイナとオッパイと。編～",
        "cover": "https://telegra.ph/file/d0e6983665d1f3510bfcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7841"
    },
    {
        "IDcode": 7842,
        "title": "古明地さとり あ～したい こ～したい (東方Project)",
        "cover": "https://telegra.ph/file/ed98994b721bf31c9d5da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7842"
    },
    {
        "IDcode": 7843,
        "title": "狂夢蝕刻・時崎狂三挿畫集 (デート·ア·ライブ)",
        "cover": "https://telegra.ph/file/e81ce31e26e068e011849.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7843"
    },
    {
        "IDcode": 7844,
        "title": "早苗はお乳がとまらない (東方Project)",
        "cover": "https://telegra.ph/file/4a0c721e46fd4eeedb37f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7844"
    },
    {
        "IDcode": 7845,
        "title": "戦場のニクベンキ (戦場のヴァルキュリア)",
        "cover": "https://telegra.ph/file/39753c13e0e9d8efd07b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7845"
    },
    {
        "IDcode": 7846,
        "title": "だってお父さんに毎日好きって言われるんだもん (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/5787929436897ef814990.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7846"
    },
    {
        "IDcode": 7847,
        "title": "駆逐艦これくしょん (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/41e4897f0c45181bf0a32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7847"
    },
    {
        "IDcode": 7848,
        "title": "BROKEN DIAMOND (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/44399ecc16dcb57d38ae9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7848"
    },
    {
        "IDcode": 7849,
        "title": "外部家族子作り計画 (美少女戦士セーラームーン)",
        "cover": "https://telegra.ph/file/81a22bd121548949c42c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7849"
    },
    {
        "IDcode": 7850,
        "title": "Another After School (けいおん!)",
        "cover": "https://telegra.ph/file/5cc1f7ce59901b6c68f67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7850"
    },
    {
        "IDcode": 7851,
        "title": "催眠生徒会～催眠術で完全支配。エッチな生徒会はお嫌いですか",
        "cover": "https://telegra.ph/file/af7a2d580cd215137f510.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7851"
    },
    {
        "IDcode": 7852,
        "title": "強精射精スイッチ",
        "cover": "https://telegra.ph/file/bf2f27f49cd0dae42fd7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7852"
    },
    {
        "IDcode": 7853,
        "title": "Rule (クイーンズブレイド)",
        "cover": "https://telegra.ph/file/aab15f14d3a4d194742ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7853"
    },
    {
        "IDcode": 7854,
        "title": "女冒険者たちが砂漠のオアシスに立ち寄ると……",
        "cover": "https://telegra.ph/file/e05111e4e390b03d5eac5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7854"
    },
    {
        "IDcode": 7855,
        "title": "搾精むすめ2 (咲 -Saki-)",
        "cover": "https://telegra.ph/file/62386516d3b2424f2f303.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7855"
    },
    {
        "IDcode": 7856,
        "title": "Love Potion No.5☆ (とある魔術の禁書目録)",
        "cover": "https://telegra.ph/file/1fb5e6426d5d5891a4b0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7856"
    },
    {
        "IDcode": 7857,
        "title": "EL GENSOW segundo (東方Project)",
        "cover": "https://telegra.ph/file/c14f800bedcfdacfce634.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7857"
    },
    {
        "IDcode": 7858,
        "title": "私も妹がほしいの! (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/535b449ac5751c47258b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7858"
    },
    {
        "IDcode": 7859,
        "title": "MikanAX (とらぶる)",
        "cover": "https://telegra.ph/file/7c39c72513ab75a7e9c81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7859"
    },
    {
        "IDcode": 7860,
        "title": "The Boys Of Summer",
        "cover": "https://telegra.ph/file/c39466c3d3e7304c572fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7860"
    },
    {
        "IDcode": 7861,
        "title": "ぬれすけ白蓮 (東方Project)",
        "cover": "https://telegra.ph/file/8ce75fad35b80076ce6fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7861"
    },
    {
        "IDcode": 7862,
        "title": "うどん先生とイイコトしよっ (東方Project)",
        "cover": "https://telegra.ph/file/c03db6f535bda705b1842.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7862"
    },
    {
        "IDcode": 7863,
        "title": "爆乳お姉さんは熱が出ちゃうと激しく運動したくなるっ!",
        "cover": "https://telegra.ph/file/e6dad07e58b76de73af81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7863"
    },
    {
        "IDcode": 7864,
        "title": "CL-orz 39 (ラブライブ!)",
        "cover": "https://telegra.ph/file/8619e8203dec09afaefcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7864"
    },
    {
        "IDcode": 7865,
        "title": "愛妻幼なじみ",
        "cover": "https://telegra.ph/file/162c4082ca3011f4e34a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7865"
    },
    {
        "IDcode": 7866,
        "title": "TEITOKU LOVE (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/118b3e3000a94fe57b03d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7866"
    },
    {
        "IDcode": 7867,
        "title": "真昼間カセンチャンス (東方Project)",
        "cover": "https://telegra.ph/file/6b8be9d93ac63b8749ae7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7867"
    },
    {
        "IDcode": 7868,
        "title": "What is this thing called love(ラブライブ!)",
        "cover": "https://telegra.ph/file/4f9562dd573695c57a65c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7868"
    },
    {
        "IDcode": 7869,
        "title": "What is this thing called love 2 (ラブライブ!)",
        "cover": "https://telegra.ph/file/509051a0cd631439fc9cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7869"
    },
    {
        "IDcode": 7870,
        "title": "バレットダンス・オンライン (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/bdd1348b5964218478a7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7870"
    },
    {
        "IDcode": 7871,
        "title": "絶対少女 (東方Project)",
        "cover": "https://telegra.ph/file/cb07e0039b2d020e7a26b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7871"
    },
    {
        "IDcode": 7872,
        "title": "クロボックス",
        "cover": "https://telegra.ph/file/24bd7a67a366303900b1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7872"
    },
    {
        "IDcode": 7873,
        "title": "Unnamed (ストライクウィッチーズ)",
        "cover": "https://telegra.ph/file/fcf3d817014622ec5be69.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7873"
    },
    {
        "IDcode": 7874,
        "title": "みんなでメッロメロにしてあげる (俺の妹がこんなに可愛いわけがない)",
        "cover": "https://telegra.ph/file/67591db46d0ac4a47dd61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7874"
    },
    {
        "IDcode": 7875,
        "title": "十香ヲレ○プ (デート・ア・ライブ)",
        "cover": "https://telegra.ph/file/c53102bb5d5bc7d3eb84e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7875"
    },
    {
        "IDcode": 7876,
        "title": "[SEPIA (Ogata)] _PS Vol.10",
        "cover": "https://telegra.ph/file/96017348b16f9a13bde4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7876"
    },
    {
        "IDcode": 7877,
        "title": "妹は僕の恋人 ～お兄ちゃんと秘湯でラブラブ編",
        "cover": "https://telegra.ph/file/81414462ad158400d8581.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7877"
    },
    {
        "IDcode": 7878,
        "title": "LR-06 (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/9eb3c2c1bfcdc4c63ece7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7878"
    },
    {
        "IDcode": 7879,
        "title": "LoliCo 01 (東方Project)",
        "cover": "https://telegra.ph/file/682fb8a925dbf62f27cb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7879"
    },
    {
        "IDcode": 7880,
        "title": "ケッコンカッコカリ×3 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/7676e6e141a2f9cbf5084.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7880"
    },
    {
        "IDcode": 7881,
        "title": "女神Trick (超次元ゲイム ネプテューヌ)",
        "cover": "https://telegra.ph/file/343337782bfa358e155e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7881"
    },
    {
        "IDcode": 7882,
        "title": "なのです！参 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/4cfd3f3fab07bc6f9e42f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7882"
    },
    {
        "IDcode": 7883,
        "title": "秘密の憧ちゃん",
        "cover": "https://telegra.ph/file/6dd3b6deb53fa9b7bd638.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7883"
    },
    {
        "IDcode": 7884,
        "title": "サマーハレーション フルカラー",
        "cover": "https://telegra.ph/file/73a9145e4378f314bdfcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7884"
    },
    {
        "IDcode": 7885,
        "title": "性感パラノイア (東方Project)",
        "cover": "https://telegra.ph/file/899a682c9d5ce0f0e55b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7885"
    },
    {
        "IDcode": 7886,
        "title": "相思相愛姉えっち",
        "cover": "https://telegra.ph/file/32235d2e7be413ff34493.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7886"
    },
    {
        "IDcode": 7887,
        "title": "男の娘風俗♥",
        "cover": "https://telegra.ph/file/cddd413e6425093cac17b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7887"
    },
    {
        "IDcode": 7888,
        "title": "Love Potion No.5☆",
        "cover": "https://telegra.ph/file/a0926179bf6ade2a182d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7888"
    },
    {
        "IDcode": 7889,
        "title": "情交椛 (東方Project)",
        "cover": "https://telegra.ph/file/6c7bb9a939193d291881c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7889"
    },
    {
        "IDcode": 7890,
        "title": "プリズマ☆イリヤ 戦闘失敗！？",
        "cover": "https://telegra.ph/file/55b12f11c2bf287418ba4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7890"
    },
    {
        "IDcode": 7891,
        "title": "少女楽園計画",
        "cover": "https://telegra.ph/file/88666ba94a3f4073f1167.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7891"
    },
    {
        "IDcode": 7892,
        "title": "あえぐ排水管",
        "cover": "https://telegra.ph/file/3655091b2ebebb7c64fb9.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7892"
    },
    {
        "IDcode": 7893,
        "title": "イリヤとクロが妹ならしかたない!!",
        "cover": "https://telegra.ph/file/7e0629e4425e5672c68f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7893"
    },
    {
        "IDcode": 7894,
        "title": "Other Zone4～獣の王様～",
        "cover": "https://telegra.ph/file/2cdac3b3b3fcc8ede1747.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7894"
    },
    {
        "IDcode": 7895,
        "title": "ハーレム淫乱リゾート島",
        "cover": "https://telegra.ph/file/4f34cc09578f302d094c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7895"
    },
    {
        "IDcode": 7896,
        "title": "プリズマ☆イリヤ 戦闘失敗！？",
        "cover": "https://telegra.ph/file/5ea24964660265b89de5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7896"
    },
    {
        "IDcode": 7897,
        "title": "フランちゃんがを重点的に洗ってくれる本",
        "cover": "https://telegra.ph/file/b59cea27066c4148c16a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7897"
    },
    {
        "IDcode": 7898,
        "title": "ご注文は裏メニューですか",
        "cover": "https://telegra.ph/file/69bd558c125a0edd4f61c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7898"
    },
    {
        "IDcode": 7899,
        "title": "DROP SHOOT! (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/38059f5c27d4c15d3822b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7899"
    },
    {
        "IDcode": 7900,
        "title": "ゆっくりいきましょ？",
        "cover": "https://telegra.ph/file/2c7ca136fd4ec3d3be594.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7900"
    }
];
