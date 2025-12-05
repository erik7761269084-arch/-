// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 401,
        "title": "[エロッカ] 煙緋ちゃんといちゃラブ (原神)",
        "cover": "https://telegra.ph/file/ad363b95df64443b9545e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=401"
    },
    {
        "IDcode": 402,
        "title": "[前島龍] 蜜と蝶 第2話 (COMIC LO 2022年4月号)",
        "cover": "https://telegra.ph/file/8cb17c03186915d6870d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=402"
    },
    {
        "IDcode": 403,
        "title": "[武将武] 放課後のヴィーナス (COMIC 快楽天ビースト 2020年9月号)",
        "cover": "https://telegra.ph/file/a2c60eb33e6349f608d0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=403"
    },
    {
        "IDcode": 404,
        "title": "[塩おにんこ] ここでシちゃお",
        "cover": "https://telegra.ph/file/2407f2270d622f914be1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=404"
    },
    {
        "IDcode": 405,
        "title": "(C99) [まんねんドコドコドンドドコ (とっととねろ太郎。)] POCKET BITCH (ポケットモンスター ソード・シールド)",
        "cover": "https://telegra.ph/file/34e2cbf3a83f58e22b8f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=405"
    },
    {
        "IDcode": 406,
        "title": "[えーすけ] Room022 (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/939e34a5f1ef943c89879.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=406"
    },
    {
        "IDcode": 407,
        "title": "[あくま] ホントのキモチ (COMIC BAVEL 2019年1月号)",
        "cover": "https://telegra.ph/file/e528c3e5045c8de906b54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=407"
    },
    {
        "IDcode": 408,
        "title": "[あくま] 自撮り少女 (COMIC BAVEL 2017年6月号)",
        "cover": "https://telegra.ph/file/f0844823eccffd0593817.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=408"
    },
    {
        "IDcode": 409,
        "title": "[あいらんどう] 妹とノリでエッチした件 その後 (COMIC LO 2022年6月号)",
        "cover": "https://telegra.ph/file/0f3e32cb3ba2aacfb3928.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=409"
    },
    {
        "IDcode": 410,
        "title": "[NT00]みな先輩(尼特子个人汉化)",
        "cover": "https://telegra.ph/file/f24ce5fc4a48ccfd4351e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=410"
    },
    {
        "IDcode": 411,
        "title": "[こんにゃく] 和希先輩ほんばん",
        "cover": "https://telegra.ph/file/e721ac1eb84601a75870a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=411"
    },
    {
        "IDcode": 412,
        "title": "[ぷよちゃ] とりっくSister (COMIC BAVEL 2018年6月号)",
        "cover": "https://telegra.ph/file/dbdb6fb45659e5d6bf911.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=412"
    },
    {
        "IDcode": 413,
        "title": "(C99) [squeezecandyheaven (いちはや)] 作ろう!理想の妹",
        "cover": "https://telegra.ph/file/4dc32689e24988ba8426a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=413"
    },
    {
        "IDcode": 414,
        "title": "[しゃち (kokihanada)] 夜な夜な扇情作戦記録II",
        "cover": "https://telegra.ph/file/e8a08fbbd29605809e7c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=414"
    },
    {
        "IDcode": 415,
        "title": "[矢野トシノリ]同居人（♂）がサキュバスになっちゃった話[進行中]",
        "cover": "https://telegra.ph/file/00ae2ccdae072fd4f68e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=415"
    },
    {
        "IDcode": 416,
        "title": "[極東工務店 (菊のすけまる)] GIRLFriend's 19 (ブルーアーカイブ)  [カラー化]",
        "cover": "https://telegra.ph/file/6beded9fa23942e999042.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=416"
    },
    {
        "IDcode": 417,
        "title": "[サークル影武者 (影武者)] 『召姦銃 DXデリへライザー』ver.2 ～カードから女性を召喚してエッチするお話～",
        "cover": "https://telegra.ph/file/4460ea8337d02fe77d013.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=417"
    },
    {
        "IDcode": 418,
        "title": "[綿120パーセント (めんようじゃん)] AZUSttack Remake (けいおん!)",
        "cover": "https://telegra.ph/file/4bfeb84e8883992763dcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=418"
    },
    {
        "IDcode": 419,
        "title": "[さくらがーでん (しろすず)] マスターさんをこらしめ穴でおしおきしてあげまーす (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/fc9ec1e31d2ffd0d65057.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=419"
    },
    {
        "IDcode": 420,
        "title": "[CANずめ] 雷電将軍 (原神)",
        "cover": "https://telegra.ph/file/92e92ba84ab8a54917f4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=420"
    },
    {
        "IDcode": 421,
        "title": "[ドラチェフ] ドスケベJKヘルパー種付け介護 (交尾のお時間)",
        "cover": "https://telegra.ph/file/a4050d8f16fe90d3b9e66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=421"
    },
    {
        "IDcode": 422,
        "title": "(C87) [ありすの宝箱 (水龍敬)] よいこのスケベ童話シリーズ1 裸の痴女王様",
        "cover": "https://telegra.ph/file/75312e413e32ae67da29d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=422"
    },
    {
        "IDcode": 423,
        "title": "[右脳] 宗明少年の可憐なる悩み ( むいちゃいました! )",
        "cover": "https://telegra.ph/file/ac1b59f1c3c9ea7ef8863.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=423"
    },
    {
        "IDcode": 424,
        "title": "[柚十扇] Take OUT (COMIC 快楽天 2022年5月号)",
        "cover": "https://telegra.ph/file/4919a828380455870ca68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=424"
    },
    {
        "IDcode": 425,
        "title": "[サークル影武者 (影武者)] 『召姦銃 DXデリへライザー』ver.2 ～カードから女性を召喚してエッチするお話～",
        "cover": "https://telegra.ph/file/41426e66d3b045cebc12e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=425"
    },
    {
        "IDcode": 426,
        "title": "[Berry!16 (森ぐる太)] こちょこちょなんて絶対に嫌にゃぁああ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/d263cafdf5a0495de37c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=426"
    },
    {
        "IDcode": 427,
        "title": "[アヘ丸] 「学校で」前編。ルチアリベンジ (対魔忍ユキカゼ) {大明个人汉化}",
        "cover": "https://telegra.ph/file/363d96a0239f214068967.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=427"
    },
    {
        "IDcode": 428,
        "title": "[武田弘光] 戦隊司令官ママンIFストーリー（SS付きラフイラスト)",
        "cover": "https://telegra.ph/file/8268063234b5aab610b59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=428"
    },
    {
        "IDcode": 429,
        "title": "[シロウ] わんダーガール (COMIC Kairakuten BEAST 2013-06)",
        "cover": "https://telegra.ph/file/a691e0137a6610d9b3af3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=429"
    },
    {
        "IDcode": 430,
        "title": "[すがいし] クイック オア スロー (COMIC 快楽天 2013年7月号)",
        "cover": "https://telegra.ph/file/fc09be8bd8c7fdf018e4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=430"
    },
    {
        "IDcode": 431,
        "title": "[Iwao] 御門先生の治療♡ といろいろ（Chinese）",
        "cover": "https://telegra.ph/file/d57df908e67a517b1a5da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=431"
    },
    {
        "IDcode": 432,
        "title": "[UC] ママの友達(友ママ)とショタになります",
        "cover": "https://telegra.ph/file/d57e0df53bc44537d1603.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=432"
    },
    {
        "IDcode": 433,
        "title": "[コブラノヲヤツ] 酔リカカリ (COMIC 失楽天 2022年4月号)",
        "cover": "https://telegra.ph/file/c75c70290509ee0db125c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=433"
    },
    {
        "IDcode": 434,
        "title": "[三上 キャノン] 服従契約（後編）(服従契約)",
        "cover": "https://telegra.ph/file/0ff90026296807f0ebafb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=434"
    },
    {
        "IDcode": 435,
        "title": "[砂川多良] 睡眠ハードコア ～人妻上司は肉オナホ～ (ANGEL 倶楽部 2020年12月号)",
        "cover": "https://telegra.ph/file/399f7e048bc270a8ac7e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=435"
    },
    {
        "IDcode": 436,
        "title": "(C97) [星空ステッキ (如月なな)] 女王サマの搾り搾られ発情交尾 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/6a5c1da196de3d22b2d7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=436"
    },
    {
        "IDcode": 437,
        "title": "[ベコ太郎] 恋するダブルドリブル (COMIC 快楽天ビースト 2022年5月号)",
        "cover": "https://telegra.ph/file/d596552f096509d9c1024.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=437"
    },
    {
        "IDcode": 438,
        "title": "[どじろー] むぼーび! (WEEKLY 快楽天 2022 No.17)",
        "cover": "https://telegra.ph/file/953a90924fed8a4b9e6c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=438"
    },
    {
        "IDcode": 439,
        "title": "[カンザリン] シャニマス催眠エロ (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/78e3dcacbfd7bce088ebc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=439"
    },
    {
        "IDcode": 440,
        "title": "(C99) [やみつき本舗 (ワイズスピーク)] 良妻おねショタ玉藻ちゃん♡ (Fate/EXTRA)",
        "cover": "https://telegra.ph/file/a64371eef792a904321ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=440"
    },
    {
        "IDcode": 441,
        "title": "[スミヤ] おさがりセックスフレンド (COMIC 快楽天 2022年3月号)",
        "cover": "https://telegra.ph/file/6595f8788017b15963237.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=441"
    },
    {
        "IDcode": 442,
        "title": "[ノラネコノタマ (雪野みなと)] ひなのちゃんちの事情",
        "cover": "https://telegra.ph/file/d91e3fd3f0e1bc58863df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=442"
    },
    {
        "IDcode": 443,
        "title": "[伊月クロ] せきらら♥えっち (COMIC BAVEL 2022年6月号)",
        "cover": "https://telegra.ph/file/aba78311ede8390ad9a68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=443"
    },
    {
        "IDcode": 444,
        "title": "[堀博昭] 真っ白に壊れた先に (COMIC 失楽天 2021年12月号)",
        "cover": "https://telegra.ph/file/120bfd17bea040511af37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=444"
    },
    {
        "IDcode": 445,
        "title": "[ibenz009]Liquid Mercury RE [進行中]",
        "cover": "https://telegra.ph/file/31d3adcaf8a3c4604af88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=445"
    },
    {
        "IDcode": 446,
        "title": "[mogg] 異世界通信 -前編- (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/912cb529e1b015f120874.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=446"
    },
    {
        "IDcode": 447,
        "title": "[どえむたん] 【skeb】ストパニ玉青ちゃんの性接待 (ストロベリーパニック!)",
        "cover": "https://telegra.ph/file/db84aefa879dc1fd8950f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=447"
    },
    {
        "IDcode": 448,
        "title": "[流れもの (安堂流)] お母さんいただきます。2",
        "cover": "https://telegra.ph/file/aaaa3845ca41c1cc289ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=448"
    },
    {
        "IDcode": 449,
        "title": "[クルマヤ公道] 堕とされ彼女-何も知らない彼氏くんと会う度にエロくなる先輩彼女編-",
        "cover": "https://telegra.ph/file/e918eac7a244c9e5b4780.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=449"
    },
    {
        "IDcode": 450,
        "title": "(C99) [やみつき本舗 (ワイズスピーク)] 良妻おねショタ玉藻ちゃん♡ (Fate/EXTRA)",
        "cover": "https://telegra.ph/file/b7fdf62db7e613a9501ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=450"
    },
    {
        "IDcode": 451,
        "title": "[灰同 (灰司)] 近女誘惑 僕が隣のお母さんとこんなことになっちゃう話 2",
        "cover": "https://telegra.ph/file/a870289d3b4b27190206c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=451"
    },
    {
        "IDcode": 452,
        "title": "[寿まいろ] ドキドキおさんぽSEX (COMIC クリベロン DUMA 2022年4月号 Vol.35)",
        "cover": "https://telegra.ph/file/900094f2efe3eebeeb54d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=452"
    },
    {
        "IDcode": 453,
        "title": "[寿まいろ] クリ女AV研究会 (COMIC クリベロン DUMA 2021年11月号 Vol.30)",
        "cover": "https://telegra.ph/file/b00343a8bb4169eabc297.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=453"
    },
    {
        "IDcode": 454,
        "title": "[越後屋タケル] TS娼館 -序章- (コミックアンリアル 2022年4月号 Vol.96)",
        "cover": "https://telegra.ph/file/b3ea236b8f2174c859bb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=454"
    },
    {
        "IDcode": 455,
        "title": "[果物物語 (黒石りんご)] 女装リーマン6",
        "cover": "https://telegra.ph/file/374a8039ac2fd28cff156.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=455"
    },
    {
        "IDcode": 456,
        "title": "[銀エイジ] 小学校の担任の先生に催眠とか時間停止とか透明人間とかいろいろ",
        "cover": "https://telegra.ph/file/0a2c2b7f9d4e41133f3fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=456"
    },
    {
        "IDcode": 457,
        "title": "[白猫屋] 寝取られ女バス部 催眠×調教 case:1 美人主将",
        "cover": "https://telegra.ph/file/84f5c4e0a48b661a7e73e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=457"
    },
    {
        "IDcode": 458,
        "title": "[大空若葉] はじめてのEK (COMIC アオハ 2020 春)",
        "cover": "https://telegra.ph/file/40e49d51852c6ce17669b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=458"
    },
    {
        "IDcode": 459,
        "title": "[スミヤ] おひとりスナップ(COMICキスハグ vol.1)",
        "cover": "https://telegra.ph/file/af819ea209c5e03dea1d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=459"
    },
    {
        "IDcode": 460,
        "title": "[雨] エロ漫画 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/2f5f781a3596e4323a43a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=460"
    },
    {
        "IDcode": 461,
        "title": "[F.W.ZHolic (FAN)] お隣さんは闇組織に肉体改造された元正義戦隊メンバーでした",
        "cover": "https://telegra.ph/file/53041eaa81dfd7d4d27e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=461"
    },
    {
        "IDcode": 462,
        "title": "[みかわや] その気で来てたらイヤですか？ (COMIC アンスリウム 2022年5月号)",
        "cover": "https://telegra.ph/file/b0ab216a20da87a21bc8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=462"
    },
    {
        "IDcode": 463,
        "title": "[クルマヤ公道] 堕とされ彼女 -その後-",
        "cover": "https://telegra.ph/file/db86f138ed8af6d5d1d52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=463"
    },
    {
        "IDcode": 464,
        "title": "[木静謙二] Intention #8 (コミックホットミルク濃いめ vol.32)",
        "cover": "https://telegra.ph/file/16415a02f1f79886765c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=464"
    },
    {
        "IDcode": 465,
        "title": "[激マブ] しぐれ〇い無自覚触手姦 (しぐれうい)",
        "cover": "https://telegra.ph/file/44e98d205762a913cc18f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=465"
    },
    {
        "IDcode": 466,
        "title": "[Pd] 妄想世界H (英雄联盟)",
        "cover": "https://telegra.ph/file/88c8054522223ed062497.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=466"
    },
    {
        "IDcode": 467,
        "title": "[pixiv]Archive(附带pixiv文案，仅H部分）",
        "cover": "https://telegra.ph/file/c347c018287dce60cdd29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=467"
    },
    {
        "IDcode": 468,
        "title": "[おりんぜ] エウルアさんバック (原神)",
        "cover": "https://telegra.ph/file/04cbb5bb7ede2f355b948.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=468"
    },
    {
        "IDcode": 469,
        "title": "[おりんぜ] 八重神子さんにおっぱいでいじめられたい (原神)",
        "cover": "https://telegra.ph/file/7f1c524b1c944edfb41c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=469"
    },
    {
        "IDcode": 470,
        "title": "[たまたま山脈 (たまたぬき)] くノ一あざみが堕ちるまで 2",
        "cover": "https://telegra.ph/file/079350c44b0a6d502cad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=470"
    },
    {
        "IDcode": 471,
        "title": "[カナリヤバいカナリヤ (まゃ～吾郎)] アルマがアレコレされるのを眺める本。 (神羅万象)",
        "cover": "https://telegra.ph/file/b58cb6d10dbdca8c01709.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=471"
    },
    {
        "IDcode": 472,
        "title": "全年齢版 第2話 前篇+後篇",
        "cover": "https://telegra.ph/file/b34a13252cca6da271f64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=472"
    },
    {
        "IDcode": 473,
        "title": "[東出イロドリ] みがわりのお勉強 前篇 (COMIC 失楽天 2022年5月号)",
        "cover": "https://telegra.ph/file/b7b96cc43aabcedd6282f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=473"
    },
    {
        "IDcode": 474,
        "title": "[Jun] 今宵、亜人はいかがでしょうか？",
        "cover": "https://telegra.ph/file/12e5b2377df58f19e819c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=474"
    },
    {
        "IDcode": 475,
        "title": "[咖啡姬] 【裸足】奴隶少女的跑步机劳作",
        "cover": "https://telegra.ph/file/6fc9a08f58b0a8a0dc1fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=475"
    },
    {
        "IDcode": 476,
        "title": "[うさぎなごむ] Passiomaid Sister (COMIC 天魔 2013年6月号)",
        "cover": "https://telegra.ph/file/02dad67674e25e9742121.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=476"
    },
    {
        "IDcode": 477,
        "title": "[右脳 ] だっていい匂いがしたから (COMIC アオハ 2021 秋)",
        "cover": "https://telegra.ph/file/8cf7c19e8180af5840166.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=477"
    },
    {
        "IDcode": 478,
        "title": "[テラスMC] コードギアス 洗脳悪堕ちドM向けNTR調教CG集",
        "cover": "https://telegra.ph/file/33d0cae84eaf6c683bf7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=478"
    },
    {
        "IDcode": 479,
        "title": "[東出イロドリ] みがわりのお勉強 前篇 (COMIC 失楽天 2022年5月号)",
        "cover": "https://telegra.ph/file/e2793aa6ae23b59483605.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=479"
    },
    {
        "IDcode": 480,
        "title": "[○△□× (國本隆史)] ネトラレJKグラビアアイドル",
        "cover": "https://telegra.ph/file/168a7fa28e5011658f002.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=480"
    },
    {
        "IDcode": 481,
        "title": "[Pale Scarlet (松河)] 眠り姫 I+II",
        "cover": "https://telegra.ph/file/66c9a89ee0003bc7d3901.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=481"
    },
    {
        "IDcode": 482,
        "title": "[remora field (remora)] 刻晴ちゃんとイチャイチャする本 (原神)",
        "cover": "https://telegra.ph/file/f5afd00ac7cf66d9753ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=482"
    },
    {
        "IDcode": 483,
        "title": "[Been] The illusion of lies（2） (エルソード)",
        "cover": "https://telegra.ph/file/d98c8967029b9a0ae64f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=483"
    },
    {
        "IDcode": 484,
        "title": "[坂井] 甘雨のえっちな漫画 (原神)",
        "cover": "https://telegra.ph/file/e2506466e1a35b6b5ef4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=484"
    },
    {
        "IDcode": 485,
        "title": "[おりんぜ] 神里綾華 (原神)",
        "cover": "https://telegra.ph/file/3df6ed32c13e382b8210a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=485"
    },
    {
        "IDcode": 486,
        "title": "[ハイソン] ヒト目ヒト科ヒトデナシ亜種の1「九十九里のリンちゃん」(COMIC 夢幻転生 2020年8月号)",
        "cover": "https://telegra.ph/file/903b93616954c08f9f818.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=486"
    },
    {
        "IDcode": 487,
        "title": "[ハイソン] ヒト目ヒト科ヒトデナシ亜種の2「九十九里のリンちゃん」 (COMIC 夢幻転生 2020年10月号)",
        "cover": "https://telegra.ph/file/39d7b312ed03819b58ab8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=487"
    },
    {
        "IDcode": 488,
        "title": "[安藤裕行] 雌豚(ドスケベ)チ♂ポ奴隷 ～妖怪 猫又～ (COMIC クリベロン DUMA 2022年4月号 Vol.35)",
        "cover": "https://telegra.ph/file/9c2081ec6ff4a5f3329aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=488"
    },
    {
        "IDcode": 489,
        "title": "[歩かせ屋 (Arkas)] ニーミちゃんはHだなぁ (アズールレーン)",
        "cover": "https://telegra.ph/file/2e44090254da4e1774a8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=489"
    },
    {
        "IDcode": 490,
        "title": "[アトリエマゾ (doskoinpo)] 偽妹リリア",
        "cover": "https://telegra.ph/file/71088544bed67f6b4c7c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=490"
    },
    {
        "IDcode": 491,
        "title": "[みれい] 【2月】ギャルあさひ💙 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/edb31f64a400caaccf03d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=491"
    },
    {
        "IDcode": 492,
        "title": "[灯色の研究室 (灯問)] 援交彼女と見学会After",
        "cover": "https://telegra.ph/file/6ded578e4123021cfbb8c.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=492"
    },
    {
        "IDcode": 493,
        "title": "[Pixiv Fanbox] OSTEREi  (Ongoing; until 2022/11)",
        "cover": "https://telegra.ph/file/97517fe704085623af6ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=493"
    },
    {
        "IDcode": 494,
        "title": "[星井工房 (星井ガル)] 輝装星姫アステリア 悦獄の機装絶頂",
        "cover": "https://telegra.ph/file/ae64abb5329cab99508d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=494"
    },
    {
        "IDcode": 495,
        "title": "[ンガ丸] 婦長がビーチでやばい水着を着て誘ってくるから。。。 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/3eb10816cdbaae58ac55f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=495"
    },
    {
        "IDcode": 496,
        "title": "[SOLar] 旅人様の夢想 (原神)",
        "cover": "https://telegra.ph/file/b77420218dd0968367a65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=496"
    },
    {
        "IDcode": 497,
        "title": "[にぎりうさぎ] 軽い気持ちでキャバ嬢になった結果【全話】",
        "cover": "https://telegra.ph/file/2798895d51512259eb0db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=497"
    },
    {
        "IDcode": 498,
        "title": "[しらすどん] ドスケベ援交ギャルのナイショ性交",
        "cover": "https://telegra.ph/file/c5db4a75e169d313838cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=498"
    },
    {
        "IDcode": 499,
        "title": "[毒猫ノイル] 任務終わりのエウルアにお酒を飲ませて悪いことをする話 (原神)",
        "cover": "https://telegra.ph/file/2dabcb69217d5669ed1ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=499"
    },
    {
        "IDcode": 500,
        "title": "[CANずめ] 八重神子 (原神)",
        "cover": "https://telegra.ph/file/e4518a7c8face8cf2e997.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=500"
    }
];
