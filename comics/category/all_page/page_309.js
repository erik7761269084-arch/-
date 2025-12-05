// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 3804,
        "title": "[ロジオネ] 巫女の掟〜極上ショタと子作りライフ〜 第5話 (COMIC GEE Vol.14)",
        "cover": "https://telegra.ph/file/56208c760671ee8431a79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3804"
    },
    {
        "IDcode": 3805,
        "title": "(C99) [やたい屋 (yatai)] Fallen Light (ゼノブレイド2)",
        "cover": "https://telegra.ph/file/8ba048512b7313568110d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3805"
    },
    {
        "IDcode": 3806,
        "title": "[じりたり! (朔月)] 僕しか男を知らない可愛い妻が子作りセックス のためになんでもしてくれる",
        "cover": "https://telegra.ph/file/c49de46c1df8c5d5e19a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3806"
    },
    {
        "IDcode": 3807,
        "title": "(C99) [地下7cm (wasavi_8)] ハマカゼトリートバニー (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/afa9b8b5c4ba32163fb45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3807"
    },
    {
        "IDcode": 3808,
        "title": "[ウソノキ (つくねんど)] 爆乳デカ女の逆襲",
        "cover": "https://telegra.ph/file/e8d260b665037f62fba7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3808"
    },
    {
        "IDcode": 3809,
        "title": "[割り箸効果] 敗北ヒロイン無様命乞い!",
        "cover": "https://telegra.ph/file/7d1ac2647eb95c6720364.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3809"
    },
    {
        "IDcode": 3810,
        "title": "[ふらいでぃっしゅ (じゃっこ)] お嬢様に買われたボク2",
        "cover": "https://telegra.ph/file/067b8ae1da3502f091045.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3810"
    },
    {
        "IDcode": 3811,
        "title": "[CAT GARDEN (ねこてゐ)] ゲルダとアーシャのしあわせのかたち (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/7f64065f878f235dee145.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3811"
    },
    {
        "IDcode": 3812,
        "title": "(C99) [すてらどろっぷ (皐月ゆきみ)] ユニコーンちゃんと秘密のお勉強会 (アズールレーン)",
        "cover": "https://telegra.ph/file/b604fafc5db870617d12b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3812"
    },
    {
        "IDcode": 3813,
        "title": "[愛上陸] アタシに課金してみない? (失楽天 Premium)",
        "cover": "https://telegra.ph/file/cb75e1bf38443c859ff32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3813"
    },
    {
        "IDcode": 3814,
        "title": "[ハウス栽培もち (白玉もち)] あの娘に勝ちたい",
        "cover": "https://telegra.ph/file/f92f74147ac452c98f8f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3814"
    },
    {
        "IDcode": 3815,
        "title": "[イノセントルーシー (咲楽ぴの、零龍)] 紫式部とムラムラスケベ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/1f1fd0dd3069f41bd440b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3815"
    },
    {
        "IDcode": 3816,
        "title": "[蜜柑電車 (ダン)] FITTING (アイドルマスター)",
        "cover": "https://telegra.ph/file/ea7a163ee451eea0e0aa5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3816"
    },
    {
        "IDcode": 3817,
        "title": "[墓場] 奈落教師 (COMIC MUJIN 2010年1月号)",
        "cover": "https://telegra.ph/file/36f6e2b5dc118e0ad4c6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3817"
    },
    {
        "IDcode": 3818,
        "title": "[けんじゃたいむ (MANA)] FATE/GENTLE ORDER (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/d3526603c646b2d4bd44a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3818"
    },
    {
        "IDcode": 3819,
        "title": "[けんじゃたいむ (MANA)] FATE/GENTLE ORDER 2 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/0e0d84161d9c1f90f4e2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3819"
    },
    {
        "IDcode": 3820,
        "title": "[けんじゃたいむ (MANA)] FATE/GENTLE ORDER 3「リリィ」(Fate/Grand Order)",
        "cover": "https://telegra.ph/file/55088d880dc08c7ad6128.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3820"
    },
    {
        "IDcode": 3821,
        "title": "[けんじゃたいむ (MANA)] FATE/GENTLE ORDER 3「オルタ」(Fate/Grand Order)",
        "cover": "https://telegra.ph/file/202a47dc8215216b086ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3821"
    },
    {
        "IDcode": 3822,
        "title": "[けんじゃたいむ (MANA)] FATE/GENTLE ORDER 4「オルタ」(Fate/Grand Order)",
        "cover": "https://telegra.ph/file/b696b011356cc06be2f45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3822"
    },
    {
        "IDcode": 3823,
        "title": "[芽の里 (めりーべ)] ディオナちゃんの発情反応 (原神)",
        "cover": "https://telegra.ph/file/fac8f87cecb55b5f5c847.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3823"
    },
    {
        "IDcode": 3824,
        "title": "[えんりゅう堂 (えんりゅう)] シスター・クレアのえっちなお仕置き (シスター・クレア)",
        "cover": "https://telegra.ph/file/103104350df5684ad89e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3824"
    },
    {
        "IDcode": 3825,
        "title": "[TreeDrop (葉月琥珀)] 僕の従者が、最近おかしい。 (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/4cf563fcb7a6f002e719d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3825"
    },
    {
        "IDcode": 3826,
        "title": "[FAP製作所 (瀧本ゆかり)] わわべだちゃんに抜き尽くされるっ!! (童田明治)",
        "cover": "https://telegra.ph/file/6ed0c41ce38753bb3856a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3826"
    },
    {
        "IDcode": 3827,
        "title": "[木鈴亭 (木鈴カケル)] 無口でエッチなお姉さんにペット扱いされる僕",
        "cover": "https://telegra.ph/file/427418b96ecff2b29fece.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3827"
    },
    {
        "IDcode": 3828,
        "title": "[仲町まち] 溢れちゃう♡ (COMIC 快楽天ビースト 2022年2月号)",
        "cover": "https://telegra.ph/file/af68a21e360c1b5ad8e9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3828"
    },
    {
        "IDcode": 3829,
        "title": "[けんじゃたいむ (MANA)] FATE/GENTLE ORDER 5 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/098022d8c10132251bee7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3829"
    },
    {
        "IDcode": 3830,
        "title": "[けんじゃたいむ (MANA)] FATE/GENTLE ORDER 4「リリィ」(Fate/Grand Order)",
        "cover": "https://telegra.ph/file/527330563a4c44457ce55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3830"
    },
    {
        "IDcode": 3831,
        "title": "[木鈴亭 (木鈴カケル、コウリ)] 真夏の恋と通り雨 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/341d606ad3dfbed3a2153.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3831"
    },
    {
        "IDcode": 3832,
        "title": "[えびまし (海老名えび)] TS復讐リベンジ 1",
        "cover": "https://telegra.ph/file/1f35c1028412c38650f11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3832"
    },
    {
        "IDcode": 3833,
        "title": "[111当番 (1号)] 葉一に搾精される本",
        "cover": "https://telegra.ph/file/20de4f04e0dcd47c61692.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3833"
    },
    {
        "IDcode": 3834,
        "title": "[お肉] 一人前になるまえに",
        "cover": "https://telegra.ph/file/c264f82cabcd0c7844b9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3834"
    },
    {
        "IDcode": 3835,
        "title": "[ハライセカイワイ (ゆっ栗栖)] RARES (ゼノブレイド2)",
        "cover": "https://telegra.ph/file/569ca73a36557181611f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3835"
    },
    {
        "IDcode": 3836,
        "title": "[ゆるちん教祖] ツインズらぶ (COMIC LO 2021年12月号)",
        "cover": "https://telegra.ph/file/d6f1e6a9e19d0546bfcf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3836"
    },
    {
        "IDcode": 3837,
        "title": "[喵傲天] 塞诺蜜的夜袭 (Arknights)",
        "cover": "https://telegra.ph/file/3d158d172d5f5329c9ece.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3837"
    },
    {
        "IDcode": 3838,
        "title": "(例大祭10) [アタりや教室 (目目蓮)] デリヘル嬢早苗さんがやってきた!! (東方Project)",
        "cover": "https://telegra.ph/file/fd36acb8ac201b67c001c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3838"
    },
    {
        "IDcode": 3839,
        "title": "[アヘ丸] ご近所NTR付き合い (ANGEL 倶楽部 2020年11月号)  [Decensored]",
        "cover": "https://telegra.ph/file/467a5355c0f86b3ff8e0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3839"
    },
    {
        "IDcode": 3840,
        "title": "[正経同人 (へるんぐ)] UMAちゃん誘拐",
        "cover": "https://telegra.ph/file/42c7b658fc81d025142c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3840"
    },
    {
        "IDcode": 3841,
        "title": "(C99) [IRON FIN (テツビレ)] barghest BREAST (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/8594ebc4fc4525e8c4f09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3841"
    },
    {
        "IDcode": 3842,
        "title": "[菜さん] 誓約パーティー①",
        "cover": "https://telegra.ph/file/c77587f18e93c3cb89326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3842"
    },
    {
        "IDcode": 3843,
        "title": "(C99) [わたくび (笹井さじ)] 双子姉妹の満たし方1～もしもしえっち編～",
        "cover": "https://telegra.ph/file/994a94fa3fdf5ba8cdc88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3843"
    },
    {
        "IDcode": 3844,
        "title": "[八月九月 (八月九月)] アコガレノオワリ",
        "cover": "https://telegra.ph/file/79de73ea03843115fb4e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3844"
    },
    {
        "IDcode": 3845,
        "title": "[やみなべ] 淫ぷりんていんぐ (二次ろ 6年生)",
        "cover": "https://telegra.ph/file/8e59c2ffcb57136907e95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3845"
    },
    {
        "IDcode": 3846,
        "title": "[ちゅーりっぷ。] 西宮さんの射精管理 (コミックゼロス #88)",
        "cover": "https://telegra.ph/file/4ec5896cc81d4542208d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3846"
    },
    {
        "IDcode": 3847,
        "title": "[アジサイデンデン (川上六角、小鳥遊レイ)] わっちとしっぽり毛づくろい本 (狼と香辛料)   [加筆修正版]",
        "cover": "https://telegra.ph/file/2562fa4dccb1aa1c20229.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3847"
    },
    {
        "IDcode": 3848,
        "title": "[Hamao] Prepayment (COMIC快楽天 2022年2月号)",
        "cover": "https://telegra.ph/file/b44669f7093a656874357.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3848"
    },
    {
        "IDcode": 3849,
        "title": "(C97) [横島んち。 (Ash横島)] マテリア×ガール#2 ティファのミニマム大作戦! (ファイナルファンタジーVII)",
        "cover": "https://telegra.ph/file/0d08cb77a8d1b6d1ef557.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3849"
    },
    {
        "IDcode": 3850,
        "title": "[Patreon] ikemeru19",
        "cover": "https://telegra.ph/file/1de6ba45d9fae5e920a3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3850"
    },
    {
        "IDcode": 3851,
        "title": "[ギャルドラゴン] 先輩ギャルと放課後ドスケベれっすん",
        "cover": "https://telegra.ph/file/7004ca6e791254f99b3cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3851"
    },
    {
        "IDcode": 3852,
        "title": "[むた] マシュの日課フ〇ラチオ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/ca6bbb1fabbb34bdb1870.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3852"
    },
    {
        "IDcode": 3853,
        "title": "(COMIC1☆10) [ふらいぱん大魔王 (提灯暗光)] お薬つかいプリキュア! (魔法つかいプリキュア!)",
        "cover": "https://telegra.ph/file/b8459454e13797e72437a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3853"
    },
    {
        "IDcode": 3854,
        "title": "[ふぁーや] いっしょにスカっと 1~2",
        "cover": "https://telegra.ph/file/7ba00f87d69ecd4a414af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3854"
    },
    {
        "IDcode": 3855,
        "title": "[貝塚芥] 鬼救阿ｖｓデーモン (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/b9d7f3789d358af146fff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3855"
    },
    {
        "IDcode": 3856,
        "title": "(C99) [八宮亭 (八宮)] アイドルだから前はダメ! (ホロライブ)",
        "cover": "https://telegra.ph/file/e77d9a86333896683beb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3856"
    },
    {
        "IDcode": 3857,
        "title": "[すみだれパンツ]女退魔師VS妖怪（中文翻译）",
        "cover": "https://telegra.ph/file/17db7a0dd2c47d9711738.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3857"
    },
    {
        "IDcode": 3858,
        "title": "[まよねーず。] 性交人形と、私",
        "cover": "https://telegra.ph/file/16a3deb48800c65e741f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3858"
    },
    {
        "IDcode": 3859,
        "title": "[Sindoll] でじたるせっくすらいふ (デジモンテイマーズ)",
        "cover": "https://telegra.ph/file/a7e60669cac989db56046.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3859"
    },
    {
        "IDcode": 3860,
        "title": "[ンガ丸] 婦長とデカ竿おじさんのイチャラブ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/6ff8ae47e756823ca0e44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3860"
    },
    {
        "IDcode": 3861,
        "title": "(C92) [蟲娘愛好会 (仲村ユキトシ)] 逸見エリカが尿意なんかに負けるわけがない! (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/ff4878abe0d8658b53618.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3861"
    },
    {
        "IDcode": 3862,
        "title": "[あーくもすら] 返してっ!私のクリトリス!クリボックス化されて絶頂管理された女勇者の話",
        "cover": "https://telegra.ph/file/d2bd58d19f482cf69c6a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3862"
    },
    {
        "IDcode": 3863,
        "title": "(例大祭15) [Right away (坂井みなと)] 催犬注意 (東方Project)",
        "cover": "https://telegra.ph/file/934efa4da47973ff2dc0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3863"
    },
    {
        "IDcode": 3864,
        "title": "[やまこんぶ] 秘事 (COMIC アンスリウム 2021年7月号)",
        "cover": "https://telegra.ph/file/2c7eee6248f33fa2eb30d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3864"
    },
    {
        "IDcode": 3865,
        "title": "[OrangeMaru (雨)] かくしたいこと (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/163bc5ceea6bd5761ad79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3865"
    },
    {
        "IDcode": 3866,
        "title": "(C97) [SicoSourCream (シコサワー)] Rance10 After Echi♥Echi Book (ランス10)",
        "cover": "https://telegra.ph/file/0892ad38ebf54521bd83b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3866"
    },
    {
        "IDcode": 3867,
        "title": "[NO相撲KING (吸斬)] 尿道で遊んじゃいけません (東方Project)",
        "cover": "https://telegra.ph/file/4ae0e981fece54e0c01e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3867"
    },
    {
        "IDcode": 3868,
        "title": "(C94) [Clochette (咲良ゆき)] 洗脳淫紋監獄 MA/STER (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/d3f33c8a0522207145462.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3868"
    },
    {
        "IDcode": 3869,
        "title": "[ツリサス] 指輪外して、心は溶けて  (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/894afd96e973a6094064e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3869"
    },
    {
        "IDcode": 3870,
        "title": "(C97) [ぜんまい工房 (ショーソン)] 蕩かす叢雲 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/c0aaafffc095d772baa9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3870"
    },
    {
        "IDcode": 3871,
        "title": "[Right away (坂井みなと)] 兎の躾けは性的に (東方Project)",
        "cover": "https://telegra.ph/file/ad1a62195e79bf4757c75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3871"
    },
    {
        "IDcode": 3872,
        "title": "[蒼山哲] 頼光マッマ×？酒呑童子 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/4ce6df67985dc3256226f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3872"
    },
    {
        "IDcode": 3873,
        "title": "[OrangeMaru (雨)] かくしたいこと (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/5527d4347a4bd7761be2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3873"
    },
    {
        "IDcode": 3874,
        "title": "[Fanbox] 隈吉",
        "cover": "https://telegra.ph/file/cc6167f0234105063c9b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3874"
    },
    {
        "IDcode": 3875,
        "title": "触手拘束sareru[最爱福瑞汉化组]",
        "cover": "https://telegra.ph/file/d44509faf9bd3c5017f40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3875"
    },
    {
        "IDcode": 3876,
        "title": "[秋嵩 (あきよしたか)] 寄生生物ファイル 実録\"生殖器乗っ取り型ゴキブリ\"編",
        "cover": "https://telegra.ph/file/1501eb873959477ca703a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3876"
    },
    {
        "IDcode": 3877,
        "title": "(名華祭15) [てこめんち (てち)] 古明地姉妹のいけないペット (東方Project)",
        "cover": "https://telegra.ph/file/d9e31b8ea6d9e74437fb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3877"
    },
    {
        "IDcode": 3878,
        "title": "[山本善々] S県K市 社会人女子バレーボールサークルの事情 第7話",
        "cover": "https://telegra.ph/file/3511694b74e872c4ec919.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3878"
    },
    {
        "IDcode": 3879,
        "title": "[OrangeMaru (JP06)] 黛冬優子お借りします (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/e61ca2c8576559144e3ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3879"
    },
    {
        "IDcode": 3880,
        "title": "[Gゼロ] 家事代行サービス人妻NTRモノ",
        "cover": "https://telegra.ph/file/93e7fa469cf636318641d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3880"
    },
    {
        "IDcode": 3881,
        "title": "[OrangeMaru (JP06)] 黛冬優子お借りします (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/84ce0af29b4d564741d7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3881"
    },
    {
        "IDcode": 3882,
        "title": "[三崎 (京のごはん)] あなたのためなら",
        "cover": "https://telegra.ph/file/3dcb0568e4e45d1701d15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3882"
    },
    {
        "IDcode": 3883,
        "title": "[BECHU] Kalina (少女前線)",
        "cover": "https://telegra.ph/file/2aae07aa4931a85488680.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3883"
    },
    {
        "IDcode": 3884,
        "title": "[ばにこー] そうだ公園へ行こう (COMIC ペンギンクラブ 2021年8月号)",
        "cover": "https://telegra.ph/file/edd0d66d0299d071d8958.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3884"
    },
    {
        "IDcode": 3885,
        "title": "[西崎えいむ] エルとエロゲプレイH (金色ラブリッチェ)",
        "cover": "https://telegra.ph/file/3ad4a466fed6123ce72db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3885"
    },
    {
        "IDcode": 3886,
        "title": "[暗ノ吽] 現実世界でも俺最強クエスト (ハーレムクエスト 俺と美女とオッパイと異世界肉欲生活)",
        "cover": "https://telegra.ph/file/2ae1b0e210048f91775af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3886"
    },
    {
        "IDcode": 3887,
        "title": "[ゴールデンバズーカ (ガガーリン吉)] 寝取られた爆乳清楚妻ひとみ ―甥っ子にトロトロに溶かされました―",
        "cover": "https://telegra.ph/file/5569a5f986c228de7c1fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3887"
    },
    {
        "IDcode": 3888,
        "title": "(C94) [Clochette (咲良ゆき)] 洗脳淫紋監獄 MA/STER (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/c8c8f7bdcb4595fd8f1a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3888"
    },
    {
        "IDcode": 3889,
        "title": "[竹とんぼ (duokuma)] アイドル侵入者 (シャニマスTS合同) (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/1b9bf1538bf3625dcc521.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3889"
    },
    {
        "IDcode": 3890,
        "title": "[蘭田夢] ふーとらっぷ 第3話 (マガジンサイベリア Vol.147)",
        "cover": "https://telegra.ph/file/f43a15d4fc62ed2b7d9d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3890"
    },
    {
        "IDcode": 3891,
        "title": "(ぷにケット35) [ふらいぱん大魔王 (提灯暗光)] システムですから アイドルタイム (プリパラ)",
        "cover": "https://telegra.ph/file/21eee784852cc26a6151e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3891"
    },
    {
        "IDcode": 3892,
        "title": "[うかつではない (よろず)] 現代サキュバスのおせっくす研修 -ナマイキ後輩とマジメ先輩編-",
        "cover": "https://telegra.ph/file/5e13cfddb93e4226356a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3892"
    },
    {
        "IDcode": 3893,
        "title": "(C88) [ふらいぱん大魔王 (提灯暗光)] あろまげどらっぐ (プリパラ)",
        "cover": "https://telegra.ph/file/d26412afbcc402d76991e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3893"
    },
    {
        "IDcode": 3894,
        "title": "[満開開花] 催眠で家族でＨなちゅーばー生活 お部屋でエッチなファッションショー後編一括",
        "cover": "https://telegra.ph/file/14d15ff11fd11da57bfe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3894"
    },
    {
        "IDcode": 3895,
        "title": "[いわお] OL織姫+立ちバック (よろず)",
        "cover": "https://telegra.ph/file/818efb14dd3e3e2848276.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3895"
    },
    {
        "IDcode": 3896,
        "title": "(C95) [チャバシラチェーンソー (茶々らん)] ダージリンとまほの絆温泉 (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/86b0be7b5baed4e5e4a81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3896"
    },
    {
        "IDcode": 3897,
        "title": "无题",
        "cover": "https://telegra.ph/file/ef1ee44ef563b30ab3846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3897"
    },
    {
        "IDcode": 3898,
        "title": "[ジャックとニコルソン (のりパチ)] アンツィオ流さらさらちゃづけ+おまけ (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/07a83060d59af97135966.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3898"
    },
    {
        "IDcode": 3899,
        "title": "(C90) [らふれしあ (キャンベル議長)] 侵入者 (東方Project)",
        "cover": "https://telegra.ph/file/67307db4936188f75fec3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3899"
    },
    {
        "IDcode": 3900,
        "title": "[牙を剥く] 狙いは男性教師♂～メス♀化計画～",
        "cover": "https://telegra.ph/file/642e09d3249318602733f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3900"
    },
    {
        "IDcode": 3901,
        "title": "[レオナト] 雨の日のミソギと (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/b0f9a3c78e7a44b9e1fe1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3901"
    },
    {
        "IDcode": 3902,
        "title": "[hal] 襲学旅行 第3話 ～終わりの生殖渇望～ (COMIC 真激 2021年9月号)",
        "cover": "https://telegra.ph/file/bcb69a96b83bfefe8682d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3902"
    },
    {
        "IDcode": 3903,
        "title": "[テラスMC] すのはら荘を追い出され姉にメス調教されるあっくん (すのはら荘の管理人さん)",
        "cover": "https://telegra.ph/file/8b66f0096f36907ff3753.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3903"
    }
];
