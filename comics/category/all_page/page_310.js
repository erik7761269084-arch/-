// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 3904,
        "title": "[ジロウ] お兄嫁さんと一緒 (COMIC 天魔 2016年4月号)",
        "cover": "https://telegra.ph/file/f13f2b03e803bb555f814.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3904"
    },
    {
        "IDcode": 3905,
        "title": "[ぬくぬく] お姉さんとらっぷ (COMIC BAVEL 2016年10月号)",
        "cover": "https://telegra.ph/file/a7cf268de56282dd5fd55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3905"
    },
    {
        "IDcode": 3906,
        "title": "[もず] りとる☆びっちぇず アイラちゃん編 (COMIC 快楽天ビースト 2021年7月号)",
        "cover": "https://telegra.ph/file/1e2416c5a3724ee6e7e3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3906"
    },
    {
        "IDcode": 3907,
        "title": "[ビフィダス] アカネおばさんの夏 (ANGEL 倶楽部 2020年9月号)",
        "cover": "https://telegra.ph/file/d5a092db3fbf912a88aea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3907"
    },
    {
        "IDcode": 3908,
        "title": "[ウンツエ] バニー師匠とスケベトレーニング (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/8eebe80f8cb4b502d292d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3908"
    },
    {
        "IDcode": 3909,
        "title": "(C97) [ししゃも亭 (白菊)] 足柄が可愛過ぎる (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/509ba9c72b3757d292aa4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3909"
    },
    {
        "IDcode": 3910,
        "title": "[戸村屋 (戸村水仙)] 魔女と少年",
        "cover": "https://telegra.ph/file/b8e285b80a132c5a6cc08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3910"
    },
    {
        "IDcode": 3911,
        "title": "[No Such Agency] ふたなりバトル -獄- (6)",
        "cover": "https://telegra.ph/file/c9f75f6daa02642df9c19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3911"
    },
    {
        "IDcode": 3912,
        "title": "[F.W.ZHolic (FAN)] 美少女暴君乳搾人格排泄録 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/6ce2ca82a11f40ce6b68c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3912"
    },
    {
        "IDcode": 3913,
        "title": "[moyori] 先輩とわんちゃん (WEEKLY 快楽天 2021 No.26)",
        "cover": "https://telegra.ph/file/105935c2f27a9a14a73de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3913"
    },
    {
        "IDcode": 3914,
        "title": "[秋嵩 (あきよしたか)] 寄生生物ファイル vol.1",
        "cover": "https://telegra.ph/file/d28e95e2a1cb3155a0ab5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3914"
    },
    {
        "IDcode": 3915,
        "title": "[DT工房 (DAIGO)] 元ヤンの母ちゃんと子作り交尾",
        "cover": "https://telegra.ph/file/40a9f5f62d8ae3951887e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3915"
    },
    {
        "IDcode": 3916,
        "title": "[亀吉いちこ] 愛しのメスガキ様 (COMIC LO 2021年9月号)",
        "cover": "https://telegra.ph/file/3a00d46cdaf83c271fe14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3916"
    },
    {
        "IDcode": 3917,
        "title": "[five (あまやかん)] アスリート東条早2 もう戻れないよ・・・ゴメンね",
        "cover": "https://telegra.ph/file/94e2777877b1dda6746df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3917"
    },
    {
        "IDcode": 3918,
        "title": "(C95) [MUSES GARDEN (早川あかり)] 46億年分強くて可愛い高雄 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/31d214e9026c81e69a5b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3918"
    },
    {
        "IDcode": 3919,
        "title": "[阿部いのり] メスオチ～乙女は奪われ牝になる～ 第1話 (COMIC GEE Vol.11)",
        "cover": "https://telegra.ph/file/7660b105befab8f5a3ee0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3919"
    },
    {
        "IDcode": 3920,
        "title": "[おっと] ヒナタの告白+借金のカタにクソデカ黒チンポとセックスする熟女火影おばさん (NARUTO -ナルト-)",
        "cover": "https://telegra.ph/file/5179e6d46f72bd4771250.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3920"
    },
    {
        "IDcode": 3921,
        "title": "井上对魔忍",
        "cover": "https://telegra.ph/file/b95e0e7ff5c336b14047f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3921"
    },
    {
        "IDcode": 3922,
        "title": "[OrangeMaru (雨)] かくしたいこと (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/a567010acfd5728a6908e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3922"
    },
    {
        "IDcode": 3923,
        "title": "[OrangeMaru (JP06)] 黛冬優子お借りします (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/e2f7957b9ffa739abb32e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3923"
    },
    {
        "IDcode": 3924,
        "title": "[弥美津峠 (鳳まひろ)] 此処に貴女が居ないから (ラブライブ! サンシャイン!!)",
        "cover": "https://telegra.ph/file/304d995adf2feff653496.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3924"
    },
    {
        "IDcode": 3925,
        "title": "(C95) [アイスクリウム (vanilla)] アンドロイドのわたしに燃料補給してくださいっ3",
        "cover": "https://telegra.ph/file/c5b47ee07d5846b4ab2f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3925"
    },
    {
        "IDcode": 3926,
        "title": "[hudak] Gwen (League of Legends)",
        "cover": "https://telegra.ph/file/a571ab558ebfff94d7dfd.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3926"
    },
    {
        "IDcode": 3927,
        "title": "[モゲラーノ] 橘ミサのご奉仕～童貞卒業手伝います～ (ANGEL 倶楽部 2021年8月号)",
        "cover": "https://telegra.ph/file/c94d033cf88ea60913ffa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3927"
    },
    {
        "IDcode": 3928,
        "title": "[たかやKi] 恋糸記念日 新装版",
        "cover": "https://telegra.ph/file/febf7af9e85628b9a15ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3928"
    },
    {
        "IDcode": 3929,
        "title": "[逆又練物] ヒプノブリンク 15 (コミック Mate legend Vol.40 2021年8月号)",
        "cover": "https://telegra.ph/file/8f70588f900b208169546.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3929"
    },
    {
        "IDcode": 3930,
        "title": "[Corruprotocol (huca、EPLOOV)] 清楚なシスターがサキュバスに襲われて淫魔化する話",
        "cover": "https://telegra.ph/file/db6d766864cf6fd630993.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3930"
    },
    {
        "IDcode": 3931,
        "title": "[ころもたけ] 性欲管理検査",
        "cover": "https://telegra.ph/file/1cc0fb7d8f6bd6ec941c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3931"
    },
    {
        "IDcode": 3932,
        "title": "[オクモト悠太] コスってみたい！！ (COMIC 快楽天 2021年9月号)",
        "cover": "https://telegra.ph/file/59b880a911315964dc256.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3932"
    },
    {
        "IDcode": 3933,
        "title": "(C88) [らふれしあ (キャンベル議長)] 紅魔館のレンタルメイド 蝕 (東方Project)",
        "cover": "https://telegra.ph/file/88ded80e590f2bd3aecde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3933"
    },
    {
        "IDcode": 3934,
        "title": "[五味滓太郎 (鉛棒なよなよ)] 友達の義母と姉に誘惑される話",
        "cover": "https://telegra.ph/file/fd78f0e8c16845cb53540.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3934"
    },
    {
        "IDcode": 3935,
        "title": "(COMIC1☆9) [いもむや本舗 - Singleton (あずまゆき)] おしかけ少女",
        "cover": "https://telegra.ph/file/70937d2d57ff75df719a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3935"
    },
    {
        "IDcode": 3936,
        "title": "[無望菜志] 魔剣の姫士",
        "cover": "https://telegra.ph/file/cf7b40e7e246b8d375369.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3936"
    },
    {
        "IDcode": 3937,
        "title": "[風船クラブ] M 母娘調教日記",
        "cover": "https://telegra.ph/file/de966af2cccb8e96cb9e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3937"
    },
    {
        "IDcode": 3938,
        "title": "[ふれでぃわーくす (坂崎ふれでぃ)] 人間牧場  [2011年1月21日]",
        "cover": "https://telegra.ph/file/d0c75783b00937ee3b6eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3938"
    },
    {
        "IDcode": 3939,
        "title": "[舞六まいむ] バイト先の人妻と女子大生とヤリまくる話 (ママって呼んで ～甘やかし性教育～)",
        "cover": "https://telegra.ph/file/3fcb7edcc4348214903ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3939"
    },
    {
        "IDcode": 3940,
        "title": "(みみけっと43) [日本ケモ耳推奨委員会 (坂井みなと)] マッサージトうッブ (けもけもみみみみ)",
        "cover": "https://telegra.ph/file/beefe4913049f9177a2c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3940"
    },
    {
        "IDcode": 3941,
        "title": "[紫☆にゃ〜] 淫魔警察―耐性感トランスパンツ― (コミックアンリアル 2021年8月号 Vol.92)",
        "cover": "https://telegra.ph/file/a6820685b33f16f6f4b8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3941"
    },
    {
        "IDcode": 3942,
        "title": "[レオナト] 雨の日のミソギと (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/6b1aacfb6409b4da89796.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3942"
    },
    {
        "IDcode": 3943,
        "title": "[ほーるいん椀] 寝取ラレ×寝撮ラレ",
        "cover": "https://telegra.ph/file/9fdeaaf35a1243f0b2ef8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3943"
    },
    {
        "IDcode": 3944,
        "title": "[flanvia] 性のマモノ",
        "cover": "https://telegra.ph/file/fb0b914bb326175a41d54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3944"
    },
    {
        "IDcode": 3945,
        "title": "[DIEPPE FACTORY Darkside (あるぴーぬ)] スレイブ アスナ オンデマンド #002. PLEASURE SLAVE. (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/9caee5ff260b422116983.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3945"
    },
    {
        "IDcode": 3946,
        "title": "[有村大根] プリズマ☆スカサハちゃん (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/fefe6a98a5c3c14f1a0b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3946"
    },
    {
        "IDcode": 3947,
        "title": "[左利き] 無題",
        "cover": "https://telegra.ph/file/0ea4d82f2f6b4d580446b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3947"
    },
    {
        "IDcode": 3948,
        "title": "[Peθ (もず)] With My Honey Knight (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/3447fbdfdfe243d5556b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3948"
    },
    {
        "IDcode": 3949,
        "title": "[ソメジマ] 桃源郷な鬼ヶ島 (メス堕ち敗北少女)",
        "cover": "https://telegra.ph/file/10b4d73175fc160b5bbf6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3949"
    },
    {
        "IDcode": 3950,
        "title": "[Rush Rise Line (キツネノネ)] 獣感 伍 後編",
        "cover": "https://telegra.ph/file/0526393309a0d46b22e79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3950"
    },
    {
        "IDcode": 3951,
        "title": "(COMIC1 BS祭 スペシャル) [ぱんのみみ (ぱん)] COLORFUL PANCAKE UNIFORM",
        "cover": "https://telegra.ph/file/674a9f547a1e4fbde3d8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3951"
    },
    {
        "IDcode": 3952,
        "title": "[吉村竜巻] いんばいと (COMIC 真激 2020年12月号)",
        "cover": "https://telegra.ph/file/b50febe52f7491a88cae4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3952"
    },
    {
        "IDcode": 3953,
        "title": "[Rush Rise Line (キツネノネ)] 獣感 伍 前編",
        "cover": "https://telegra.ph/file/b64dcb3232dd31e25e0a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3953"
    },
    {
        "IDcode": 3954,
        "title": "[青水庵 (佐々田あき)] 陰キャ美少女は、担任に犯されてもイキまくる3",
        "cover": "https://telegra.ph/file/63b332e2c27e91ec1380b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3954"
    },
    {
        "IDcode": 3955,
        "title": "[Xiaohua] Luscious Bride (Punishing: Gray Raven)",
        "cover": "https://telegra.ph/file/df1893ded305230309478.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3955"
    },
    {
        "IDcode": 3956,
        "title": "[薙派] 保体の修学を自習する旅行 (コミックホットミルク 2021年9月号)",
        "cover": "https://telegra.ph/file/3e1764265ed1894ac499c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3956"
    },
    {
        "IDcode": 3957,
        "title": "[HGH (HG茶川)] キミはやさしく寝取られる2",
        "cover": "https://telegra.ph/file/7f6bac6e944863ae610ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3957"
    },
    {
        "IDcode": 3958,
        "title": "(C97) [ねこまた屋 (ねこまたなおみ)] ハツジョウコウハイ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/d1bd7cf1f63e456674b6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3958"
    },
    {
        "IDcode": 3959,
        "title": "[urute] アジアンビューティーティーパーティー (なまめいろラプソディー)",
        "cover": "https://telegra.ph/file/68ab47a6abb58e6d8cc5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3959"
    },
    {
        "IDcode": 3960,
        "title": "[みぞれ] 彼女がいるので邪悪な低身長Mカップ甘々イジワル教え子の誘惑には負けません。(COMIC 真激 2021年9月号)",
        "cover": "https://telegra.ph/file/3a073670d1cd30e1c621d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3960"
    },
    {
        "IDcode": 3961,
        "title": "[Yanje] Jカップのホルステインママだまして１２時間AV撮影 (宇崎ちゃんは遊びたい!)",
        "cover": "https://telegra.ph/file/9f580e794b3c890ebf3c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3961"
    },
    {
        "IDcode": 3962,
        "title": "[hudak] Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/c858cbbd75ede8b048592.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3962"
    },
    {
        "IDcode": 3963,
        "title": "[キイロイタマゴ (きいろいたまご)] あの子の彼氏のフォトフォルダー",
        "cover": "https://telegra.ph/file/8062f19b083795029a2d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3963"
    },
    {
        "IDcode": 3964,
        "title": "(COMIC1☆15) [アイスクリウム (vanilla)] アンドロイドのわたしに燃料補給してくださいっ4",
        "cover": "https://telegra.ph/file/ef3871814bb9e7c1a61cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3964"
    },
    {
        "IDcode": 3965,
        "title": "[sironora] 綾波が寝取られた",
        "cover": "https://telegra.ph/file/2709b107f99ff6e06019f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3965"
    },
    {
        "IDcode": 3966,
        "title": "[逢坂ミナミ] 出会って4時間合体！ 〜無人駅でマッチング〜 (コミック刺激的SQUIRT！！ Vol.24)",
        "cover": "https://telegra.ph/file/49833114b4c0495ba9747.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3966"
    },
    {
        "IDcode": 3967,
        "title": "[ひとつば] 固定観念 (COMIC アンスリウム 2021年5月号)",
        "cover": "https://telegra.ph/file/6f0dc2fb603666d827e0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3967"
    },
    {
        "IDcode": 3968,
        "title": "[茶野みな] ギャルなんてキライなのにっ! (COMIC BAVEL 2021年7月号)",
        "cover": "https://telegra.ph/file/67d010ebd4fb07706347c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3968"
    },
    {
        "IDcode": 3969,
        "title": "[スピリタス太郎] 前略、妹がメイドになりまして (コミックジェシカ Vol.8)",
        "cover": "https://telegra.ph/file/e03247ddd67a1e847471b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3969"
    },
    {
        "IDcode": 3970,
        "title": "(COMIC1☆13) [大本営 (TYPE.90)] EMPIRE HARD CORE 2018 SPRING (ヴァイオレット・エヴァーガーデン、からかい上手の高木さん)",
        "cover": "https://telegra.ph/file/6a50488caa85dd030fa42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3970"
    },
    {
        "IDcode": 3971,
        "title": "[瓶 (えん子)] 貴方とだれかの夜 (進撃の巨人)",
        "cover": "https://telegra.ph/file/9c782bfae5408c405f2f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3971"
    },
    {
        "IDcode": 3972,
        "title": "[Clochette (咲良ゆき)] 梱包少女10",
        "cover": "https://telegra.ph/file/e5e68265cbe10d67fc18f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3972"
    },
    {
        "IDcode": 3973,
        "title": "(COMIC1☆15) [ふなたいむ (幸奈ふな)] ラフィーちゃんの発情期… (アズールレーン)",
        "cover": "https://telegra.ph/file/f7578052e8e05d2a412e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3973"
    },
    {
        "IDcode": 3974,
        "title": "(芸能人はカードが命!9) [毛玉牛乳 (玉之けだま)] みくるとミラクル (アイカツ!)",
        "cover": "https://telegra.ph/file/55d6243fc9d5f19c45262.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3974"
    },
    {
        "IDcode": 3975,
        "title": "[アトリエマゾ (doskoinpo)] 搾精の基礎",
        "cover": "https://telegra.ph/file/3e24709fa5437217fa48f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3975"
    },
    {
        "IDcode": 3976,
        "title": "[瀬奈陽太郎] 転生したらショタハーレムの女王ってマジですか!? 後編 (COMIC ペンギンクラブ 2021年8月号)",
        "cover": "https://telegra.ph/file/b85c79136ec3cf5fd5f6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3976"
    },
    {
        "IDcode": 3977,
        "title": "[つきみたけ] 人間様の玩具",
        "cover": "https://telegra.ph/file/3d0c2be306bb21f4a23ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3977"
    },
    {
        "IDcode": 3978,
        "title": "[森宮缶 (森宮正幸)] ふみふみがおくさんになる本 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/192e321c8312509c38683.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3978"
    },
    {
        "IDcode": 3979,
        "title": "[墓場] 闇生徒会長 第1話 (COMIC 夢幻転生 2020年7月号)",
        "cover": "https://telegra.ph/file/82d3a56a5e4bd4d322e1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3979"
    },
    {
        "IDcode": 3980,
        "title": "[ろこまに (真夏ろこ)] 彼女の真実",
        "cover": "https://telegra.ph/file/eb3cbfd37b61dec90bdd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3980"
    },
    {
        "IDcode": 3981,
        "title": "(C96) [灯夜工房 (灯ひでかず)] エロトラップダンジョン・女勇者はくじけない (ドラゴンクエストIII)",
        "cover": "https://telegra.ph/file/957abb790ff3b9427db50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3981"
    },
    {
        "IDcode": 3982,
        "title": "[玉座の間 (カイザー、ゆなまろ)] ロイヤルバニーとあまあまえっち (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/9a0b1f6b7894fe20f095e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3982"
    },
    {
        "IDcode": 3983,
        "title": "[愛国者 (アゴビッチ姉さん)] このお屋敷の坊ちゃまは…男に飢えたメイド達に搾られている!! 働くお姉さん達 メイドのお姉さん達",
        "cover": "https://telegra.ph/file/cf785c4639a2e8eef31ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3983"
    },
    {
        "IDcode": 3984,
        "title": "[pinkjoe] 報酬の姫君 princess super slut",
        "cover": "https://telegra.ph/file/6851e727dda8a78ca3800.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3984"
    },
    {
        "IDcode": 3985,
        "title": "[Lonely Church (鈴音れな)] 性徒快長が肉便器になる話",
        "cover": "https://telegra.ph/file/b1a0e822fe9835abe6618.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3985"
    },
    {
        "IDcode": 3986,
        "title": "[かるま龍狼] 菜穂ちゃんはオナホ屋さん (WEEKLY快楽天 2021 No.31)",
        "cover": "https://telegra.ph/file/b29275b3a829ae3566ecb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3986"
    },
    {
        "IDcode": 3987,
        "title": "(C89) [SIRIUS. (キリヤマ太一)] にょてんぐとのべつまくなし (デッド・オア・アライブ)",
        "cover": "https://telegra.ph/file/c8b170a4f5d89e36cf279.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3987"
    },
    {
        "IDcode": 3988,
        "title": "[舞六まいむ] 彼女のママとAVで…〈番外編〉(ママって呼んで ～甘やかし性教育～) [中国翻译]",
        "cover": "https://telegra.ph/file/b14cd1e8445c25ea1e524.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3988"
    },
    {
        "IDcode": 3989,
        "title": "(C86) [ACTIVA (SMAC)] シギュン蹂躙 (ブレイク ブレイド)",
        "cover": "https://telegra.ph/file/95f91e6f47eb8a01a833f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3989"
    },
    {
        "IDcode": 3990,
        "title": "(C88) [MILK PUDDING (emily)] のんびりDAYS (DOG DAYS)",
        "cover": "https://telegra.ph/file/e34ea4a0343077286717e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3990"
    },
    {
        "IDcode": 3991,
        "title": "[仔馬牧場 (ぼに～、ウメ種)] 一夜ちゃんの受難SS  [往下瞧个人汉化]",
        "cover": "https://telegra.ph/file/710d921dca7a9668493d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3991"
    },
    {
        "IDcode": 3992,
        "title": "[あむぁいおかし製作所 (ぽこてん)] 俺がオンナであの娘がショタで",
        "cover": "https://telegra.ph/file/8cba06a272e45ab34cd7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3992"
    },
    {
        "IDcode": 3993,
        "title": "[Cuvie] スイカチェリー! (COMIC 快楽天ビースト 2021年8月号)",
        "cover": "https://telegra.ph/file/1e7e87f72be73b093bf83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3993"
    },
    {
        "IDcode": 3994,
        "title": "(C80) [Digital Lover (なかじまゆか)] D.L. action 62 (僕は友達が少ない)",
        "cover": "https://telegra.ph/file/3839920af074bbedd7bff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3994"
    },
    {
        "IDcode": 3995,
        "title": "(C95) [ねちょらぽっど (なんぷぅ)] 酔いデレラフィー (アズールレーン)",
        "cover": "https://telegra.ph/file/7161674f02a95b1d161f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3995"
    },
    {
        "IDcode": 3996,
        "title": "[Marked-two (スガヒデオ)] ヒ・ミ・ツ・マ Marked-girls Origin Vol.6",
        "cover": "https://telegra.ph/file/97508cbbe74a920f2c203.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3996"
    },
    {
        "IDcode": 3997,
        "title": "[藤坂空樹] おっパラダイスは診療中 (1)",
        "cover": "https://telegra.ph/file/ad0a41b2dc1f20ec92417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3997"
    },
    {
        "IDcode": 3998,
        "title": "[かもたま] ひとづま ふたなり みつどもえ (COMIC 夢幻転生 2019年10月号)",
        "cover": "https://telegra.ph/file/3c0654c7fac102a303a8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3998"
    },
    {
        "IDcode": 3999,
        "title": "[トロ太郎] 少女ふぉんでゅ 第1-4話",
        "cover": "https://telegra.ph/file/775b1376cce92d9317ad8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3999"
    },
    {
        "IDcode": 4000,
        "title": "[跳馬遊鹿] 黒ギャルちゃんはキミだけを見てる + イラストカード",
        "cover": "https://telegra.ph/file/ac0498bad26ff2452c610.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4000"
    }
];
