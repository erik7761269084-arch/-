// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 46172,
        "title": "水淼aqua Vol.097: 女天狗 - Page 1",
        "cover": "https://telegra.ph/file/3ec3cc507bc1fa74c2418.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46172",
        "pageSeq": 46172
    },
    {
        "IDcode": 46173,
        "title": "星之迟迟 -  胡桃 - Page 1",
        "cover": "https://telegra.ph/file/f92260e3aeb43fdb39d62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46173",
        "pageSeq": 46173
    },
    {
        "IDcode": 46174,
        "title": "[白餡堂] ペア撮ご奉仕3P 裏オプOKのドスケベレイヤーちゃんの撮影会常連になって信用とマ〇コを勝ち取り、淫乱発禁中出しセックスROMを作っちゃいました。 - Page 1",
        "cover": "https://telegra.ph/file/7b983ed8dfb139dcfea04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46174",
        "pageSeq": 46174
    },
    {
        "IDcode": 46175,
        "title": "Byoru - Asuka - Page 1",
        "cover": "https://telegra.ph/file/521314edcd4b6ddcc9dd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46175",
        "pageSeq": 46175
    },
    {
        "IDcode": 46176,
        "title": "ShiroKitsune - Tae Takemi (Persona 5) - Page 1",
        "cover": "https://telegra.ph/file/56cf3e0133bb8b14e6a7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46176",
        "pageSeq": 46176
    },
    {
        "IDcode": 46177,
        "title": "桜島麻衣 - Page 1",
        "cover": "https://telegra.ph/file/3e562958ba6973cb39e22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46177",
        "pageSeq": 46177
    },
    {
        "IDcode": 46178,
        "title": "Mikomin - Hinata Topless - Page 1",
        "cover": "https://telegra.ph/file/0e5b96ea50242097cf9b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46178",
        "pageSeq": 46178
    },
    {
        "IDcode": 46179,
        "title": "[QUEENIE CHUPPY] Kaine (Nier) - Page 1",
        "cover": "https://telegra.ph/file/be954fdab15445c6b71a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46179",
        "pageSeq": 46179
    },
    {
        "IDcode": 46180,
        "title": "[QUEENIE CHUPPY] Qiqi (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/5362ca11fe2ec6d00d252.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46180",
        "pageSeq": 46180
    },
    {
        "IDcode": 46181,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 歴代No.１究極クビレ超絶癒し系ユーチュー〇ーレイヤー １４６cm１８歳ナマ中出し性的強要肉便器 リゼ〇レムりんウェディング - Page 1",
        "cover": "https://telegra.ph/file/69fc1962c0d661f869b5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46181",
        "pageSeq": 46181
    },
    {
        "IDcode": 46182,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 歴代No.1長舌タレント級美貌の極上ＳＳ級プロコスプレイヤー 日向⊿かとし似 新太陽系最強ののかもも ノノ#04 ベロライブ Verotuber兎◯ぺこら[H]/02 - Page 1",
        "cover": "https://telegra.ph/file/eaae328ad7d5125a39380.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46182",
        "pageSeq": 46182
    },
    {
        "IDcode": 46183,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 歴代No.1長舌タレント級美貌の極上ＳＳ級プロコスプレイヤー 日向⊿かとし似 新太陽系最強ののかもも ノノ#04 ベロライブ Verotuber兎◯ぺこら[H]/01 - Page 1",
        "cover": "https://telegra.ph/file/d6271bf2c4adc7f931ff0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46183",
        "pageSeq": 46183
    },
    {
        "IDcode": 46184,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 歴代No.１タレント級美貌の美巨乳Ｇカップ極上Ｓ級１９歳レイヤー 全身性感帯トランス絶頂イキまくりドロドロ体液ハメ撮り アズレン ヤンデレ加賀[Ｈ] - Page 1",
        "cover": "https://telegra.ph/file/e5fd0e1d00a499bd5fc48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46184",
        "pageSeq": 46184
    },
    {
        "IDcode": 46185,
        "title": "《虐恋尼尔》甜甜 - Page 1",
        "cover": "https://telegra.ph/file/e64f933872e8401070fa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46185",
        "pageSeq": 46185
    },
    {
        "IDcode": 46186,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 歴代No.1長舌タレント級美貌の極上ＳＳ級プロコスプレイヤー 日向⊿かとし似 新太陽系最強ののかもも ノノ#01 原ネ/申 水着バーバラ[H]/02 (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/e6e20c01f949a7d5b7ae9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46186",
        "pageSeq": 46186
    },
    {
        "IDcode": 46187,
        "title": "[Byoru] Honoka Altermis (Dead or Alive) - Page 1",
        "cover": "https://telegra.ph/file/09c8b0abe0c77c148809d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46187",
        "pageSeq": 46187
    },
    {
        "IDcode": 46188,
        "title": "【rioko凉凉子】大凤 - Page 1",
        "cover": "https://telegra.ph/file/1266a9ded090362c056e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46188",
        "pageSeq": 46188
    },
    {
        "IDcode": 46189,
        "title": "[DJAWA] Mimmi - Azur Lane：IJN Atago & Takao (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/15f40db90d546122b0fb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46189",
        "pageSeq": 46189
    },
    {
        "IDcode": 46190,
        "title": "[ぎるてぃどーるず] 冥土さんは精気をご所望のようです。 (クイーンズブレイド) - Page 1",
        "cover": "https://telegra.ph/file/5210eb91ff1b308fe85e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46190",
        "pageSeq": 46190
    },
    {
        "IDcode": 46191,
        "title": "[水淼aqua] 碧蓝航线 新泽西 - Page 1",
        "cover": "https://telegra.ph/file/3bb1922473bf703702c04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46191",
        "pageSeq": 46191
    },
    {
        "IDcode": 46192,
        "title": "[水淼aqua] 小林家的龙女仆 - Page 1",
        "cover": "https://telegra.ph/file/8c1af9d9f8a4368655478.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46192",
        "pageSeq": 46192
    },
    {
        "IDcode": 46193,
        "title": "Hane ame - Lancer Bunny - Page 1",
        "cover": "https://telegra.ph/file/2fc9b9f6fd971d7e6c532.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46193",
        "pageSeq": 46193
    },
    {
        "IDcode": 46194,
        "title": "[Larissa Rochefort] Cosplay Collection 2021 - Page 1",
        "cover": "https://telegra.ph/file/2f57004f83524b40da28c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46194",
        "pageSeq": 46194
    },
    {
        "IDcode": 46195,
        "title": "ShiroKitsune - Yoko Christmas (Tengen Toppa Gurren Lagann) - Page 1",
        "cover": "https://telegra.ph/file/9d1821da147d4c08fe4ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46195",
        "pageSeq": 46195
    },
    {
        "IDcode": 46196,
        "title": "ShiroKitsune - A2 (NieR:Automata) - Page 1",
        "cover": "https://telegra.ph/file/fda286bc65423c52f97df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46196",
        "pageSeq": 46196
    },
    {
        "IDcode": 46197,
        "title": "ShiroKitsune - Maid Artoria Lancer (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/cc1d5aca4a29082dd7066.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46197",
        "pageSeq": 46197
    },
    {
        "IDcode": 46198,
        "title": "Velvet Valerina - Velma - Page 1",
        "cover": "https://telegra.ph/file/06d2e1ac10822b8ccda32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46198",
        "pageSeq": 46198
    },
    {
        "IDcode": 46199,
        "title": "Neppu - Celestine - Page 1",
        "cover": "https://telegra.ph/file/950d238376938ce2fa728.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46199",
        "pageSeq": 46199
    },
    {
        "IDcode": 46200,
        "title": "Neppu - Jeanne Alter Maid - Page 1",
        "cover": "https://telegra.ph/file/7fd5faf34723262dbff9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46200",
        "pageSeq": 46200
    },
    {
        "IDcode": 46201,
        "title": "Neppu - U-1196 - Page 1",
        "cover": "https://telegra.ph/file/4ed3801e5368acfe5a8af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46201",
        "pageSeq": 46201
    },
    {
        "IDcode": 46202,
        "title": "HaneAme - Tifa Dress - Page 1",
        "cover": "https://telegra.ph/file/89d945ab93a10d67825a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46202",
        "pageSeq": 46202
    },
    {
        "IDcode": 46203,
        "title": "蠢沫沫-黑兽 - Page 1",
        "cover": "https://telegra.ph/file/257a14126ae6cb265135b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46203",
        "pageSeq": 46203
    },
    {
        "IDcode": 46204,
        "title": "[nonsummerjack] Promise love - Page 1",
        "cover": "https://telegra.ph/file/9b222bfb8e315edca8fbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46204",
        "pageSeq": 46204
    },
    {
        "IDcode": 46205,
        "title": "［G44不会受伤］碧蓝航线 恶毒皮肤 懒懒的白兔 - Page 1",
        "cover": "https://telegra.ph/file/3082f681a850de5ca3e00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46205",
        "pageSeq": 46205
    },
    {
        "IDcode": 46206,
        "title": "ShiroKitsune - Hinata Hyuga - Page 1",
        "cover": "https://telegra.ph/file/aaf9b336b257c68125c48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46206",
        "pageSeq": 46206
    },
    {
        "IDcode": 46207,
        "title": "ShiroKitsune - Hatsune Miku Tape - Page 1",
        "cover": "https://telegra.ph/file/9649d4d77ce0533b1e282.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46207",
        "pageSeq": 46207
    },
    {
        "IDcode": 46208,
        "title": "Kalinka Fox - Raven (Teen Titans) - Page 1",
        "cover": "https://telegra.ph/file/00ae87aaad5fcac1acb67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46208",
        "pageSeq": 46208
    },
    {
        "IDcode": 46209,
        "title": "Helly Valentine - Princess Zelda (Breath of the Wild) - Page 1",
        "cover": "https://telegra.ph/file/eca1f64c18dc4936d9dcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46209",
        "pageSeq": 46209
    },
    {
        "IDcode": 46210,
        "title": "[清水由乃] 玉藻前 - Page 1",
        "cover": "https://telegra.ph/file/bdd85b37247e8d8ef5d3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46210",
        "pageSeq": 46210
    },
    {
        "IDcode": 46211,
        "title": "Hane Ame - Rosaria - Page 1",
        "cover": "https://telegra.ph/file/646f6680a1d13f607f551.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46211",
        "pageSeq": 46211
    },
    {
        "IDcode": 46212,
        "title": "Hane Ame - OTS-14 Gown - Page 1",
        "cover": "https://telegra.ph/file/90593abc8e6f5d47a8d71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46212",
        "pageSeq": 46212
    },
    {
        "IDcode": 46213,
        "title": "雨波HaneAme - Ada Wong Tactic Lingerie - Page 1",
        "cover": "https://telegra.ph/file/e00c918ff4ed629e60b6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46213",
        "pageSeq": 46213
    },
    {
        "IDcode": 46214,
        "title": "雨波HaneAme - Ada Wong Maid - Page 1",
        "cover": "https://telegra.ph/file/ac1a3f58089f3d76dfb6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46214",
        "pageSeq": 46214
    },
    {
        "IDcode": 46215,
        "title": "[一北亦北] 天命之子 赫克特 - Page 1",
        "cover": "https://telegra.ph/file/dab2f3e40d789629f0dc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46215",
        "pageSeq": 46215
    },
    {
        "IDcode": 46216,
        "title": "ShiroKitsune - Makima (Chainsaw Man) - Page 1",
        "cover": "https://telegra.ph/file/d4b7137a7270fef216b4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46216",
        "pageSeq": 46216
    },
    {
        "IDcode": 46217,
        "title": "ShiroKitsune - Ganyu (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/45dfd68f8f24e61210951.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46217",
        "pageSeq": 46217
    },
    {
        "IDcode": 46218,
        "title": "ShiroKitsune - Saber Tomoe Gozen (FateGrand Order) - Page 1",
        "cover": "https://telegra.ph/file/f42430683ba6a09053de7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46218",
        "pageSeq": 46218
    },
    {
        "IDcode": 46219,
        "title": "Kuuko W - Mona (Genshin Impact) - Page 1",
        "cover": "https://telegra.ph/file/c49b7f4b287e13c54128e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46219",
        "pageSeq": 46219
    },
    {
        "IDcode": 46220,
        "title": "[林檎蜜紀] えちち秘書コヤンスカヤ💖そのに (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/2e03d7981b4bfcc53e2bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46220",
        "pageSeq": 46220
    },
    {
        "IDcode": 46221,
        "title": "[林檎蜜紀] えちちアナスタシア再掲載♥未公開もあるかな？ (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/55ba0fba8a81c2bf72bef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46221",
        "pageSeq": 46221
    },
    {
        "IDcode": 46222,
        "title": "[林檎蜜紀] えちちすぎる布面積！僕の奴隷マシュ💜撮影会 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/65491ae02d5003d9e697e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46222",
        "pageSeq": 46222
    },
    {
        "IDcode": 46223,
        "title": "[林檎蜜紀] どうあがいてもドスケベすぎる❤️‍🔥アズレン❤️‍🔥ドレスのセントルイス (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/fc1236120a3854930b09c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46223",
        "pageSeq": 46223
    },
    {
        "IDcode": 46224,
        "title": "[Sweetie Fox] Ankha Cosplay Set - Page 1",
        "cover": "https://telegra.ph/file/448d5ec837c0d96eca9de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46224",
        "pageSeq": 46224
    },
    {
        "IDcode": 46225,
        "title": "[日暮企画 (日暮りん)] エロ熟格女Ⅳ (デッド・オア・アライブ) - Page 1",
        "cover": "https://telegra.ph/file/7f75cb0002fb9ffd96195.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46225",
        "pageSeq": 46225
    },
    {
        "IDcode": 46226,
        "title": "masaki39135095 (SN Gangut/ HMS Sirius/ HMS Illustrious/ MNF Jean Bart/ IJN Taihou/ IJN Takao/ HMS Dido) - Page 1",
        "cover": "https://telegra.ph/file/b687d4c4ee79c63a80211.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46226",
        "pageSeq": 46226
    },
    {
        "IDcode": 46227,
        "title": "[DJAWA] Inkyung - Eromanga Sensei (Eromanga Sensei) - Page 1",
        "cover": "https://telegra.ph/file/a992e0eff4768019cff57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46227",
        "pageSeq": 46227
    },
    {
        "IDcode": 46228,
        "title": "Hane Ame - 40 Hara sensei IYA PAN - Page 1",
        "cover": "https://telegra.ph/file/97e46eeefb007c7d94f32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46228",
        "pageSeq": 46228
    },
    {
        "IDcode": 46229,
        "title": "HaneAme - Elsa Granhiert - Page 1",
        "cover": "https://telegra.ph/file/06be7a4c500688a757eaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46229",
        "pageSeq": 46229
    },
    {
        "IDcode": 46230,
        "title": "Tsuki Desu - Tamamo-no-Mae (Full Nude) - Page 1",
        "cover": "https://telegra.ph/file/32db3ca87b0b18e8ca9ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46230",
        "pageSeq": 46230
    },
    {
        "IDcode": 46231,
        "title": "Tsuki Desu - Sucrose (Full Nude) - Page 1",
        "cover": "https://telegra.ph/file/a2cc0df4616369f4cf0d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46231",
        "pageSeq": 46231
    },
    {
        "IDcode": 46232,
        "title": "[沖田凜花Rinka]時崎狂三 - Page 1",
        "cover": "https://telegra.ph/file/4bbeaca4a3bbcdcdd8f7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46232",
        "pageSeq": 46232
    },
    {
        "IDcode": 46233,
        "title": "[Byoru]  マキマ - Page 1",
        "cover": "https://telegra.ph/file/09db4e3b94329728f37de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46233",
        "pageSeq": 46233
    },
    {
        "IDcode": 46234,
        "title": "[九曲Jean]  FGO (Tamamo No Mae/ Hokusai/ Yang Guifei/ Yu Miyaoi/ Kama/ Mash/ Scáthach/ Ishtar/ Nero/ Jeanne/ Artoria) - Page 1",
        "cover": "https://telegra.ph/file/2caa024c8e7dbe1ff99e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46234",
        "pageSeq": 46234
    },
    {
        "IDcode": 46235,
        "title": "Hidori Rose - La Galissonniere Azur Lane cosplay - Page 1",
        "cover": "https://telegra.ph/file/740cf4c68c20c5deee114.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46235",
        "pageSeq": 46235
    },
    {
        "IDcode": 46236,
        "title": "Hidori Rose - Kokkoro cosplay - Page 1",
        "cover": "https://telegra.ph/file/9ba161b08aca82caa6e93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46236",
        "pageSeq": 46236
    },
    {
        "IDcode": 46237,
        "title": "[Hokunaimeko] オルチーナ・ドミトレスク - Page 1",
        "cover": "https://telegra.ph/file/cbe552a2424ce9b826b26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46237",
        "pageSeq": 46237
    },
    {
        "IDcode": 46238,
        "title": "Aoy Queen - Momo Deviluke - Page 1",
        "cover": "https://telegra.ph/file/a0a112844a06853c5d167.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46238",
        "pageSeq": 46238
    },
    {
        "IDcode": 46239,
        "title": "(Okada Yui) Genshin Impact - Kujou Sara - Page 1",
        "cover": "https://telegra.ph/file/02598f609c55ad649f4fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46239",
        "pageSeq": 46239
    },
    {
        "IDcode": 46240,
        "title": "ShiroKitsune - Rosaria - Page 1",
        "cover": "https://telegra.ph/file/74ffdfba2cdba8c96b10f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46240",
        "pageSeq": 46240
    },
    {
        "IDcode": 46241,
        "title": "小野妹子w&前羽 校服 - Page 1",
        "cover": "https://telegra.ph/file/e99b7a517814342fe101f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46241",
        "pageSeq": 46241
    },
    {
        "IDcode": 46242,
        "title": "Arty亞緹 REM bunny suit ver. (Re:Zero) - Page 1",
        "cover": "https://telegra.ph/file/bc7de45348916882b0aea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46242",
        "pageSeq": 46242
    },
    {
        "IDcode": 46243,
        "title": "原神 神里綾華 - Page 1",
        "cover": "https://telegra.ph/file/a1e5f6e4e4f2cca93d0cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46243",
        "pageSeq": 46243
    },
    {
        "IDcode": 46244,
        "title": "[JIUQUCKA] Azur Lane (Atago/ Azuma/ Dido/ Cheshire/ St. Louis/ Jean Bart/ Taihou) - Page 1",
        "cover": "https://telegra.ph/file/e85f4a3493ce5c104fc0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46244",
        "pageSeq": 46244
    },
    {
        "IDcode": 46245,
        "title": "Meenfox - Raiden Shogun - Page 1",
        "cover": "https://telegra.ph/file/db876646a64baecd83d28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46245",
        "pageSeq": 46245
    },
    {
        "IDcode": 46246,
        "title": "Aokotan - Yumeko - Page 1",
        "cover": "https://telegra.ph/file/cfb671517d68241dd716f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46246",
        "pageSeq": 46246
    },
    {
        "IDcode": 46247,
        "title": "Aokotan - Mary Saotome - Page 1",
        "cover": "https://telegra.ph/file/48fde2d4de56850d2b595.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46247",
        "pageSeq": 46247
    },
    {
        "IDcode": 46248,
        "title": "Alina Becker - 2B - Page 1",
        "cover": "https://telegra.ph/file/1ed5d3edc6cfd10300a90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46248",
        "pageSeq": 46248
    },
    {
        "IDcode": 46249,
        "title": "Kitkat Cosplay9 - Honoka - Page 1",
        "cover": "https://telegra.ph/file/eb7e93beb10b373a15ce2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46249",
        "pageSeq": 46249
    },
    {
        "IDcode": 46250,
        "title": "Kitkat Cosplay9 - Misaki - Page 1",
        "cover": "https://telegra.ph/file/624679ae2fcb05c060984.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46250",
        "pageSeq": 46250
    },
    {
        "IDcode": 46251,
        "title": "Fantastic Nami - Discordia - Page 1",
        "cover": "https://telegra.ph/file/54b92a45540c131942a6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46251",
        "pageSeq": 46251
    },
    {
        "IDcode": 46252,
        "title": "Shirogane Sama - Shiny Latex 2B - Page 1",
        "cover": "https://telegra.ph/file/9a61c2ce77445f4a17456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46252",
        "pageSeq": 46252
    },
    {
        "IDcode": 46253,
        "title": "[蠢沫沫] 碧蓝航线 絮库夫&土佐 - Page 1",
        "cover": "https://telegra.ph/file/3289af4d829c2d5954e10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46253",
        "pageSeq": 46253
    },
    {
        "IDcode": 46254,
        "title": "原神 フィッシュル - Page 1",
        "cover": "https://telegra.ph/file/89c57b5c23399a534d40c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46254",
        "pageSeq": 46254
    },
    {
        "IDcode": 46255,
        "title": "【蠢沫沫】碧蓝航线-英仙座 - Page 1",
        "cover": "https://telegra.ph/file/c849b68aec2331ab92a08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46255",
        "pageSeq": 46255
    },
    {
        "IDcode": 46256,
        "title": "Arty亞緹 Ereshkigal bunny suit ver. (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/088c056905142440d67f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46256",
        "pageSeq": 46256
    },
    {
        "IDcode": 46257,
        "title": "[Nagisa] Honoka (Dead or Alive) - Page 1",
        "cover": "https://telegra.ph/file/2eb36a97f0f577c5e3f70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46257",
        "pageSeq": 46257
    },
    {
        "IDcode": 46258,
        "title": "ShiroKitsune - Marie Rose (Dead or Alive) - Page 1",
        "cover": "https://telegra.ph/file/ee2bfb48f475a32ec90ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46258",
        "pageSeq": 46258
    },
    {
        "IDcode": 46259,
        "title": "ShiroKitsune - 2B (Nier Reincarnation) - Page 1",
        "cover": "https://telegra.ph/file/b79c6867f224526376fba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46259",
        "pageSeq": 46259
    },
    {
        "IDcode": 46260,
        "title": "九言 – Kafka - Page 1",
        "cover": "https://telegra.ph/file/f6428c368ec5ddbb31c56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46260",
        "pageSeq": 46260
    },
    {
        "IDcode": 46261,
        "title": "Hinata2000 - Bunny Jalter - Page 1",
        "cover": "https://telegra.ph/file/38b4b5b5e056d70118664.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46261",
        "pageSeq": 46261
    },
    {
        "IDcode": 46262,
        "title": "Sayo Momo - Lord Rukkhadevata - Page 1",
        "cover": "https://telegra.ph/file/a26ac7c9ae82bbd359995.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46262",
        "pageSeq": 46262
    },
    {
        "IDcode": 46263,
        "title": "Sayo Momo - Lynette - Page 1",
        "cover": "https://telegra.ph/file/4d4126fcb5c5a090d58ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46263",
        "pageSeq": 46263
    },
    {
        "IDcode": 46264,
        "title": "Sayo Momo - Tingyun x Yukong - Page 1",
        "cover": "https://telegra.ph/file/b14b8421a38ec6565a27e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46264",
        "pageSeq": 46264
    },
    {
        "IDcode": 46265,
        "title": "Byoru-Yor thorn princess - Page 1",
        "cover": "https://telegra.ph/file/ca502a72de27c38151fe6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46265",
        "pageSeq": 46265
    },
    {
        "IDcode": 46266,
        "title": "Byoru-Rio - Page 1",
        "cover": "https://telegra.ph/file/7080e048b1cb2fa8fa41c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46266",
        "pageSeq": 46266
    },
    {
        "IDcode": 46267,
        "title": "Okita Rinka - Yae Miko 八重神子 - Page 1",
        "cover": "https://telegra.ph/file/bceefb1ffa62e26abf5b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46267",
        "pageSeq": 46267
    },
    {
        "IDcode": 46268,
        "title": "Byoru-Doa - Page 1",
        "cover": "https://telegra.ph/file/8d689ad70bf7f2331b6fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46268",
        "pageSeq": 46268
    },
    {
        "IDcode": 46269,
        "title": "Arty Huang OF - Blue Archive Kisaki - Page 1",
        "cover": "https://telegra.ph/file/b196c6e95087e1036933f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46269",
        "pageSeq": 46269
    },
    {
        "IDcode": 46270,
        "title": "[Xidaidai 习呆呆] 约尔·福杰 (with GIF) (Spy x Family) [Decensored] - Page 1",
        "cover": "https://telegra.ph/file/624b29626b360d999ef23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46270",
        "pageSeq": 46270
    },
    {
        "IDcode": 46271,
        "title": "Asagiriai（愛ちゃん）回复术士的重启人生-芙蕾雅 - Page 1",
        "cover": "https://telegra.ph/file/ed613edcaae84f701bb14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46271",
        "pageSeq": 46271
    }
];
