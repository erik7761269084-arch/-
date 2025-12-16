// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 47172,
        "title": "[出会いCHU] 生放送リスナーを食ってみた 精液便所女・メイさんの写真集２ - Page 1",
        "cover": "https://telegra.ph/file/4baf914970f768b367ac0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47172",
        "pageSeq": 47172
    },
    {
        "IDcode": 47173,
        "title": "[出会いCHU] 生放送リスナーを食ってみた 精液便所女・メイさんの写真集 - Page 1",
        "cover": "https://telegra.ph/file/4752b7012e4222b957caa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47173",
        "pageSeq": 47173
    },
    {
        "IDcode": 47174,
        "title": "【少女映画】自拍 狂赌之渊蛇喰梦子 - Page 1",
        "cover": "https://telegra.ph/file/26b55dedbcd8ff955104e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47174",
        "pageSeq": 47174
    },
    {
        "IDcode": 47175,
        "title": "(C96) Hane Ame 雨波コスプレ デジタル写真集 FGO FATE 源頼光 - Page 1",
        "cover": "https://telegra.ph/file/8068cb89e7c7ecd0186eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47175",
        "pageSeq": 47175
    },
    {
        "IDcode": 47176,
        "title": "[Twitter] Hana Bunny (@squishubunny) - Page 1",
        "cover": "https://telegra.ph/file/0e3302f9b0af7372138d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47176",
        "pageSeq": 47176
    },
    {
        "IDcode": 47177,
        "title": "[my suite (あつき)] 天龍ちゃん！自粛中って本当ですか？ (艦隊これくしょん -艦これ-) - Page 1",
        "cover": "https://telegra.ph/file/3163452809e773286559f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47177",
        "pageSeq": 47177
    },
    {
        "IDcode": 47178,
        "title": "[G44不会受伤] 対魔忍ユキカゼ - Page 1",
        "cover": "https://telegra.ph/file/872b4d6c7224b65287002.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47178",
        "pageSeq": 47178
    },
    {
        "IDcode": 47179,
        "title": "rioko凉凉子 - 翔鹤 - Page 1",
        "cover": "https://telegra.ph/file/1b078c9530e12e9851f46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47179",
        "pageSeq": 47179
    },
    {
        "IDcode": 47180,
        "title": "Hana Bunny - St Louis (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/522ef3b70bdecd4a1c03d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47180",
        "pageSeq": 47180
    },
    {
        "IDcode": 47181,
        "title": "Mash YD Dancer ver. by Rinka - Page 1",
        "cover": "https://telegra.ph/file/280b9c14f45dd57b4739a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47181",
        "pageSeq": 47181
    },
    {
        "IDcode": 47182,
        "title": "一笑芳香沁 - 吾妻旗袍 - Page 1",
        "cover": "https://telegra.ph/file/a1ff48229ccfd29e94a96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47182",
        "pageSeq": 47182
    },
    {
        "IDcode": 47183,
        "title": "一笑芳香沁 - 圣路易斯 - Page 1",
        "cover": "https://telegra.ph/file/96284e5809d8562c9e636.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47183",
        "pageSeq": 47183
    },
    {
        "IDcode": 47184,
        "title": "SexFriend 120「ラ◯ザのハメリエ」 - Page 1",
        "cover": "https://telegra.ph/file/a99a11965c937820e5226.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47184",
        "pageSeq": 47184
    },
    {
        "IDcode": 47185,
        "title": "[コスプレイヤー] Hidori Rose これくしょん - Page 1",
        "cover": "https://telegra.ph/file/16ac2b8ce96534dc8088e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47185",
        "pageSeq": 47185
    },
    {
        "IDcode": 47186,
        "title": "[コスプレイヤー] Hidori Rose これくしょん - Page 2",
        "cover": "https://telegra.ph/file/990b07f2658129f0ca423.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47186",
        "pageSeq": 47186
    },
    {
        "IDcode": 47187,
        "title": "[Twitter] 夏鸽鸽 (@Yorkie_w) - Page 1",
        "cover": "https://telegra.ph/file/e72f2cf9e23031c50253d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47187",
        "pageSeq": 47187
    },
    {
        "IDcode": 47188,
        "title": "Hana Bunny - Queen Bee Tifa - Page 1",
        "cover": "https://telegra.ph/file/337f8325f3f64d7a35a70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47188",
        "pageSeq": 47188
    },
    {
        "IDcode": 47189,
        "title": "Azami - Bremerton - Page 1",
        "cover": "https://telegra.ph/file/e0609ee8b88cb0106ab1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47189",
        "pageSeq": 47189
    },
    {
        "IDcode": 47190,
        "title": "凉凉子 - 布莱默顿 - Page 1",
        "cover": "https://telegra.ph/file/80adc1c40db4c56606b84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47190",
        "pageSeq": 47190
    },
    {
        "IDcode": 47191,
        "title": "Azami - Tifa Reverse Bunny - Page 1",
        "cover": "https://telegra.ph/file/b05a2251f289c9ba6ea4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47191",
        "pageSeq": 47191
    },
    {
        "IDcode": 47192,
        "title": "[姬雾岛酱]  和泉纱雾 - Page 1",
        "cover": "https://telegra.ph/file/a6fca4895a46546cb06a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47192",
        "pageSeq": 47192
    },
    {
        "IDcode": 47193,
        "title": "[牛牛Niu、沖田凜花Rinka] ネコぱら - Page 1",
        "cover": "https://telegra.ph/file/41e131ab2503db7a13dd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47193",
        "pageSeq": 47193
    },
    {
        "IDcode": 47194,
        "title": "Azami - Honoka Fortune Swimsuit - Page 1",
        "cover": "https://telegra.ph/file/10aadd28d6d426b2e11bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47194",
        "pageSeq": 47194
    },
    {
        "IDcode": 47195,
        "title": "[沖田凜花Rinka、鈴鈴Yakira] ネコぱら - Page 1",
        "cover": "https://telegra.ph/file/d486d5511bc854db1e04c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47195",
        "pageSeq": 47195
    },
    {
        "IDcode": 47196,
        "title": "[ぶるーふぁいやー (あおひ様)] Re:エロから始める自縛性活 (Re:ゼロから始める異世界生活) - Page 1",
        "cover": "https://telegra.ph/file/4ff5110e7957b96c12b63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47196",
        "pageSeq": 47196
    },
    {
        "IDcode": 47197,
        "title": "(C98) [my suite (あつき)] C98おまけ - Page 1",
        "cover": "https://telegra.ph/file/c9f5ae9af6872437074b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47197",
        "pageSeq": 47197
    },
    {
        "IDcode": 47198,
        "title": "[G44不会受伤]PA-15翠雀媚旗袍 - Page 1",
        "cover": "https://telegra.ph/file/ceef09a523c0a8cac5466.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47198",
        "pageSeq": 47198
    },
    {
        "IDcode": 47199,
        "title": "[コスプレイヤー] 習呆呆 | 习呆呆 これくしょん - Page 1",
        "cover": "https://telegra.ph/file/cc55ad50c52eeea122ae8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47199",
        "pageSeq": 47199
    },
    {
        "IDcode": 47200,
        "title": "【少女映畫】英梨梨内衣版 - Page 1",
        "cover": "https://telegra.ph/file/f018bb2d715b6dd03839f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47200",
        "pageSeq": 47200
    },
    {
        "IDcode": 47201,
        "title": "QQueen -  Sirius - Page 1",
        "cover": "https://telegra.ph/file/963438b94834b3e7d1d88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47201",
        "pageSeq": 47201
    },
    {
        "IDcode": 47202,
        "title": "QQueen -  Emilia - Page 1",
        "cover": "https://telegra.ph/file/b65005233b636989a9445.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47202",
        "pageSeq": 47202
    },
    {
        "IDcode": 47203,
        "title": "QQueen - Shiraki Meiko - Page 1",
        "cover": "https://telegra.ph/file/54dbb883d46a0722adb9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47203",
        "pageSeq": 47203
    },
    {
        "IDcode": 47204,
        "title": "QQueen - Nezuko - Page 1",
        "cover": "https://telegra.ph/file/8b39073dd19b74c61b9ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47204",
        "pageSeq": 47204
    },
    {
        "IDcode": 47205,
        "title": "QQueen - Tifa Lockhart - Page 1",
        "cover": "https://telegra.ph/file/982814704dfb9926fa163.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47205",
        "pageSeq": 47205
    },
    {
        "IDcode": 47206,
        "title": "QQueen - Rem - Page 1",
        "cover": "https://telegra.ph/file/fea49ce2bbb2b80a802df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47206",
        "pageSeq": 47206
    },
    {
        "IDcode": 47207,
        "title": "QQueen -  Miku Nun - Page 1",
        "cover": "https://telegra.ph/file/13c501285be90e741c9a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47207",
        "pageSeq": 47207
    },
    {
        "IDcode": 47208,
        "title": "QQueen - Bremerton - Page 1",
        "cover": "https://telegra.ph/file/8ef5eab25864f60645ea4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47208",
        "pageSeq": 47208
    },
    {
        "IDcode": 47209,
        "title": "QQueen - Fusou - Page 1",
        "cover": "https://telegra.ph/file/0e6d5b4ac5ab4fcdb51f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47209",
        "pageSeq": 47209
    },
    {
        "IDcode": 47210,
        "title": "QQueen - St Louis - Page 1",
        "cover": "https://telegra.ph/file/bfcf3f0dbf860091ccb7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47210",
        "pageSeq": 47210
    },
    {
        "IDcode": 47211,
        "title": "[Fantasy Factory]Patreon 2020年4月赞助内容 Xiaoding 小丁 - Page 1",
        "cover": "https://telegra.ph/file/6930e86d5e3a4d6073914.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47211",
        "pageSeq": 47211
    },
    {
        "IDcode": 47212,
        "title": "穹妹COS合集 - Page 1",
        "cover": "https://telegra.ph/file/a490f13d0d60f58eedc87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47212",
        "pageSeq": 47212
    },
    {
        "IDcode": 47213,
        "title": "穹妹COS合集 - Page 2",
        "cover": "https://telegra.ph/file/9bfc1aa190f9703de5ecd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47213",
        "pageSeq": 47213
    },
    {
        "IDcode": 47214,
        "title": "穹妹COS合集 - Page 3",
        "cover": "https://telegra.ph/file/c8eb00e7197f1e6fa5016.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47214",
        "pageSeq": 47214
    },
    {
        "IDcode": 47215,
        "title": "穹妹COS合集 - Page 4",
        "cover": "https://telegra.ph/file/e72e757968b4a3f40784a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47215",
        "pageSeq": 47215
    },
    {
        "IDcode": 47216,
        "title": "[Fantasy Factory]Patreon 2020年1月赞助内容 Xiaoding 小丁 - Page 1",
        "cover": "https://telegra.ph/file/a5ac2bc75819c66308366.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47216",
        "pageSeq": 47216
    },
    {
        "IDcode": 47217,
        "title": "[Fantasy Factory(小丁)] 2020.01-2020.06 Collection - Page 1",
        "cover": "https://telegra.ph/file/d2cd416536afb5190ba2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47217",
        "pageSeq": 47217
    },
    {
        "IDcode": 47218,
        "title": "[Fantasy Factory(小丁)] 2020.01-2020.06 Collection - Page 2",
        "cover": "https://telegra.ph/file/bc847954c0896668bcf83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47218",
        "pageSeq": 47218
    },
    {
        "IDcode": 47219,
        "title": "小丁 - Unicorn - Page 1",
        "cover": "https://telegra.ph/file/ec068d6f53796d4e33e9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47219",
        "pageSeq": 47219
    },
    {
        "IDcode": 47220,
        "title": "[HERESY (Ringo Mitsuki)] Ecchi na Mash no Hito Kizuna MAX (Fate/Grand Order) [Digital] - Page 1",
        "cover": "https://telegra.ph/file/6e1409201a21172951ad1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47220",
        "pageSeq": 47220
    },
    {
        "IDcode": 47221,
        "title": "[LucKy] Saber Blue Dress cosplay 2 (Fate/Extella) [Digital] - Page 1",
        "cover": "https://telegra.ph/file/f962bb4aae40f8ee05778.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47221",
        "pageSeq": 47221
    },
    {
        "IDcode": 47222,
        "title": "[Azami] Shining (Arknights) - Page 1",
        "cover": "https://telegra.ph/file/9f3680422bbe9713c0c86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47222",
        "pageSeq": 47222
    },
    {
        "IDcode": 47223,
        "title": "Kuuko - Formidable (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/d3afabd2c1d4576975507.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47223",
        "pageSeq": 47223
    },
    {
        "IDcode": 47224,
        "title": "Kuuko - Marie Rose Fortune Bikini Set - Page 1",
        "cover": "https://telegra.ph/file/e5a93479e31c4669eb5f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47224",
        "pageSeq": 47224
    },
    {
        "IDcode": 47225,
        "title": "小幼齿喵 纱雾 - Page 1",
        "cover": "https://telegra.ph/file/bb6534a5ad22988bf56bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47225",
        "pageSeq": 47225
    },
    {
        "IDcode": 47226,
        "title": "[My Suite] Suite Grand Order 16 (Fate/Grand Order) [Digital] - Page 1",
        "cover": "https://telegra.ph/file/74aa96109e4b022aa7ccc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47226",
        "pageSeq": 47226
    },
    {
        "IDcode": 47227,
        "title": "[My Suite] Suite Collection 34 (Kantai Collection -KanColle-) [Digital] - Page 1",
        "cover": "https://telegra.ph/file/103ca6b0bcaf8f4ff731c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47227",
        "pageSeq": 47227
    },
    {
        "IDcode": 47228,
        "title": "Usatame - Mitsuki Bakugo - Page 1",
        "cover": "https://telegra.ph/file/b6c0cae237d275e183650.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47228",
        "pageSeq": 47228
    },
    {
        "IDcode": 47229,
        "title": "[eerotic] Cosplay Sagiri Erotic Girl (Eromanga Sensei) [Digital] - Page 1",
        "cover": "https://telegra.ph/file/00180237d8d73e9d5f81e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47229",
        "pageSeq": 47229
    },
    {
        "IDcode": 47230,
        "title": "[沖田凜花Rinka] モモ·ベリア·デビルーク (To LOVEる -とらぶる-) - Page 1",
        "cover": "https://telegra.ph/file/881d0a51d721c22351afb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47230",
        "pageSeq": 47230
    },
    {
        "IDcode": 47231,
        "title": "[Hokunaimeko]NO.23 蒂法 - Page 1",
        "cover": "https://telegra.ph/file/46bcf5580b853db11bbe6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47231",
        "pageSeq": 47231
    },
    {
        "IDcode": 47232,
        "title": "Hana Bunny Isabelle - Page 1",
        "cover": "https://telegra.ph/file/32703ac3d9244778f070a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47232",
        "pageSeq": 47232
    },
    {
        "IDcode": 47233,
        "title": "[沖田凜花Rinka、鈴鈴Yakira、鬼姬Oni Hime] Wedding Bikini ver. (Fate/kaleid liner プリズマ☆イリヤ) - Page 1",
        "cover": "https://telegra.ph/file/5354595a9cbd7711889bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47233",
        "pageSeq": 47233
    },
    {
        "IDcode": 47234,
        "title": "[沖田凜花Rinka、鈴鈴Yakira、鬼姬Oni Hime] Fate/kaleid liner プリズマ☆イリヤ - Page 1",
        "cover": "https://telegra.ph/file/1a59e435a5de8d2e66ccf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47234",
        "pageSeq": 47234
    },
    {
        "IDcode": 47235,
        "title": "Mashu Kyrielight cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/c9f726e04d0f5b91ad5bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47235",
        "pageSeq": 47235
    },
    {
        "IDcode": 47236,
        "title": "Bronya bikini cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/0ab163469d6d5ba8e99ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47236",
        "pageSeq": 47236
    },
    {
        "IDcode": 47237,
        "title": "Mio Naruse by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/b7c1458a937f621ee6f13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47237",
        "pageSeq": 47237
    },
    {
        "IDcode": 47238,
        "title": "Takao Race Queen Azur Lane cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/ddc6c7d84a6c3755ae430.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47238",
        "pageSeq": 47238
    },
    {
        "IDcode": 47239,
        "title": "Cygnet Azur Lane cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/53be92b8272deb209a0ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47239",
        "pageSeq": 47239
    },
    {
        "IDcode": 47240,
        "title": "[My Suite] Rem (Re:Zero kara Hajimeru Isekai Seikatsu) [Digital] - Page 1",
        "cover": "https://telegra.ph/file/2758d1389989044807263.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47240",
        "pageSeq": 47240
    },
    {
        "IDcode": 47241,
        "title": "【オフパコ事情14】生意気な妹にお小遣いを渡したら推しのコスプレで×××してくれた件。 - Page 1",
        "cover": "https://telegra.ph/file/beebe99ed5817bcbba47f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47241",
        "pageSeq": 47241
    },
    {
        "IDcode": 47242,
        "title": "Kokoro x Zero Two by Hidori Rose and Virtual Geisha - Page 1",
        "cover": "https://telegra.ph/file/f47d3bdf07d776efe0b90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47242",
        "pageSeq": 47242
    },
    {
        "IDcode": 47243,
        "title": "Aoy Queen Reika Shimohira - Page 1",
        "cover": "https://telegra.ph/file/75de2f5b6b4f3d41b7890.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47243",
        "pageSeq": 47243
    },
    {
        "IDcode": 47244,
        "title": "Kiruya Momochi cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/ce7f8461feaf2757f49c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47244",
        "pageSeq": 47244
    },
    {
        "IDcode": 47245,
        "title": "Akeno Himejima cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/e73c990cc93f451ab70b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47245",
        "pageSeq": 47245
    },
    {
        "IDcode": 47246,
        "title": "Hidori and MissWarmJ Duo Scathach and Mashu - Page 1",
        "cover": "https://telegra.ph/file/c08d2619da4db5063e76f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47246",
        "pageSeq": 47246
    },
    {
        "IDcode": 47247,
        "title": "Aoy Queen - Miku - Page 1",
        "cover": "https://telegra.ph/file/e60af26caed20c9fe502b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47247",
        "pageSeq": 47247
    },
    {
        "IDcode": 47248,
        "title": "Formidable cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/5eeb3731340448a162065.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47248",
        "pageSeq": 47248
    },
    {
        "IDcode": 47249,
        "title": "DoA Venus Bikini by Hidori Rose x Byoru - Page 1",
        "cover": "https://telegra.ph/file/c43ce46128ea03021bdf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47249",
        "pageSeq": 47249
    },
    {
        "IDcode": 47250,
        "title": "Atago Race Queen Azur Lane cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/c6cb1bfa8635a465f2534.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47250",
        "pageSeq": 47250
    },
    {
        "IDcode": 47251,
        "title": "Hana Bunny - Albedo - Page 1",
        "cover": "https://telegra.ph/file/3749b5348c93fdee42f35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47251",
        "pageSeq": 47251
    },
    {
        "IDcode": 47252,
        "title": "[Hane Ame] Ane Naru Mono - Page 1",
        "cover": "https://telegra.ph/file/52e5574c4881b8bf036b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47252",
        "pageSeq": 47252
    },
    {
        "IDcode": 47253,
        "title": "Tamamo no Mae Extra cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/15763ba4cfd7df6812e67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47253",
        "pageSeq": 47253
    },
    {
        "IDcode": 47254,
        "title": "Marie Rose blue costume Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/892684c7908a6d3345200.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47254",
        "pageSeq": 47254
    },
    {
        "IDcode": 47255,
        "title": "[一小央泽] 鬼武 - Page 1",
        "cover": "https://telegra.ph/file/473a1530b978c7913d353.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47255",
        "pageSeq": 47255
    },
    {
        "IDcode": 47256,
        "title": "Akagi Azur Lane cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/27d08d3d0ddd79c672b00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47256",
        "pageSeq": 47256
    },
    {
        "IDcode": 47257,
        "title": "[起司块wii] 甘古特 - Page 1",
        "cover": "https://telegra.ph/file/f603db457cd69b8ef3dd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47257",
        "pageSeq": 47257
    },
    {
        "IDcode": 47258,
        "title": "[小幼齿喵]夕立 - Page 1",
        "cover": "https://telegra.ph/file/4899a32781692b243218f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47258",
        "pageSeq": 47258
    },
    {
        "IDcode": 47259,
        "title": "【少女映畫】玉藻前 - Page 1",
        "cover": "https://telegra.ph/file/9aeba9c4f992c614814be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47259",
        "pageSeq": 47259
    },
    {
        "IDcode": 47260,
        "title": "[小幼齿喵] カグラナナ - Page 1",
        "cover": "https://telegra.ph/file/2b2e12e75a401a3963df2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47260",
        "pageSeq": 47260
    },
    {
        "IDcode": 47261,
        "title": "[少女映画]莓良心 - Page 1",
        "cover": "https://telegra.ph/file/2cbc0d419b86510a1336f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47261",
        "pageSeq": 47261
    },
    {
        "IDcode": 47262,
        "title": "[水淼aqua] 斯卡哈 - Page 1",
        "cover": "https://telegra.ph/file/e519503c23ff797b95539.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47262",
        "pageSeq": 47262
    },
    {
        "IDcode": 47263,
        "title": "[三度_69]合集 - Page 1",
        "cover": "https://telegra.ph/file/9cdd9e0442b7d85d20816.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47263",
        "pageSeq": 47263
    },
    {
        "IDcode": 47264,
        "title": "[鳗鱼霏儿]大凤机车 - Page 1",
        "cover": "https://telegra.ph/file/41a074892ac0ec32e1267.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47264",
        "pageSeq": 47264
    },
    {
        "IDcode": 47265,
        "title": "一米八的大梨子 合集 - Page 1",
        "cover": "https://telegra.ph/file/499bcf3ae7f55958017a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47265",
        "pageSeq": 47265
    },
    {
        "IDcode": 47266,
        "title": "[起司块wii] 紫式部内衣 - Page 1",
        "cover": "https://telegra.ph/file/264d99fe299a1b4a9867e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47266",
        "pageSeq": 47266
    },
    {
        "IDcode": 47267,
        "title": "[青青子js]斯卡哈 - Page 1",
        "cover": "https://telegra.ph/file/a3d0a34e00df1262ef8f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47267",
        "pageSeq": 47267
    },
    {
        "IDcode": 47268,
        "title": "[猫九酱＆鳗鱼霏儿]爱宕赛车娘+兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/eaf974b776dbc774603c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47268",
        "pageSeq": 47268
    },
    {
        "IDcode": 47269,
        "title": "[一笑芳香沁]黑兽 奥莉斯汀 - Page 1",
        "cover": "https://telegra.ph/file/073ffe3e4674f1ef2f39a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47269",
        "pageSeq": 47269
    },
    {
        "IDcode": 47270,
        "title": "[水淼aqua]雅尔贝德 - Page 1",
        "cover": "https://telegra.ph/file/9130043b650058fcb0a6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47270",
        "pageSeq": 47270
    },
    {
        "IDcode": 47271,
        "title": "[水淼aqua]蒂法 - Page 1",
        "cover": "https://telegra.ph/file/d2769417eba2286afc502.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47271",
        "pageSeq": 47271
    }
];
