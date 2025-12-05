// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 2601,
        "title": "[井藤ななみ] Like a LOVEDOLL 〜だから、なんでもシてあげる〜",
        "cover": "https://telegra.ph/file/9f3461f3b3f53f87c9a3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2601"
    },
    {
        "IDcode": 2602,
        "title": "[メトニウム] むちラヴァ",
        "cover": "https://telegra.ph/file/1582ebfca158799539e58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2602"
    },
    {
        "IDcode": 2603,
        "title": "[日吉ハナ] 廻逢のケモノ",
        "cover": "https://telegra.ph/file/d054dd92a03bf06e8a7f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2603"
    },
    {
        "IDcode": 2604,
        "title": "[ひっさつわざ (ひっさつくん)] ホームレス村",
        "cover": "https://telegra.ph/file/7a589d0881747864106c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2604"
    },
    {
        "IDcode": 2605,
        "title": "[チーム☆ラッキー] 雨の日は、ほんのり乳首",
        "cover": "https://telegra.ph/file/fad8ce981570f9ebd6e5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2605"
    },
    {
        "IDcode": 2606,
        "title": "[ソロピップB] ご主人様募集中! (コミックゼロス #45)",
        "cover": "https://telegra.ph/file/fad8ce981570f9ebd6e5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2606"
    },
    {
        "IDcode": 2607,
        "title": "[茶畑に生えた筍 (倉塚りこ、いが扇風機)] 一般兵士アキラが四天王タマモを使い魔にできたワケ",
        "cover": "https://telegra.ph/file/0d100a582d0fb2c97230f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2607"
    },
    {
        "IDcode": 2608,
        "title": "[GADGET (A-10)] 懇願種付け公衆便所 巴マミvs豚 (魔法少女まどか☆マギカ)",
        "cover": "https://telegra.ph/file/e599f47684461c29d9cdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2608"
    },
    {
        "IDcode": 2609,
        "title": "[もふもふ苑 (空色れん)] 長門 騎乗位 夕",
        "cover": "https://telegra.ph/file/ac9e901173ad204c9f28c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2609"
    },
    {
        "IDcode": 2610,
        "title": "[煙ハク] ムチビッチ",
        "cover": "https://telegra.ph/file/487ddf61fd187be879208.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2610"
    },
    {
        "IDcode": 2611,
        "title": "(C99) [まんまん屋 (チチヅキ)] 闇夜に灯火 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/fbf127496d83b96a660de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2611"
    },
    {
        "IDcode": 2612,
        "title": "(C99) [FoxTail (sakifox)] 稼働記録 No.1670",
        "cover": "https://telegra.ph/file/a9aa4f83bffee51fa290b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2612"
    },
    {
        "IDcode": 2613,
        "title": "(C99) [きつね屋 (リーフィ)] ないしょのおるすばん (はじめてのおるすばん)",
        "cover": "https://telegra.ph/file/8c4b36cda45993ec5f4d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2613"
    },
    {
        "IDcode": 2614,
        "title": "(C99) [CRIMSON GROUND (宮社惣恭)] 休日の過ごし方-樋口円香編- (アイドルマスターシャイニーカラーズ)",
        "cover": "https://telegra.ph/file/a33bd8e57059fcd06f749.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2614"
    },
    {
        "IDcode": 2615,
        "title": "(C94) [G-SCAN CORP. (佐藤茶菓子)] 新生・冴えない彼女たちのりんり審査会 (冴えない彼女の育てかた)",
        "cover": "https://telegra.ph/file/945ea05474e0e3bcc49da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2615"
    },
    {
        "IDcode": 2616,
        "title": "[ばななのかわ (まったん)] 痴漢電車",
        "cover": "https://telegra.ph/file/4b7cc99ff0ade1ff99299.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2616"
    },
    {
        "IDcode": 2617,
        "title": "[カルムアトモスフィア (しんや)] 同期の嫁と枕えっちと旦那の浮気～受精パート～",
        "cover": "https://telegra.ph/file/bd251deac2fbf8b43eca5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2617"
    },
    {
        "IDcode": 2618,
        "title": "[てぃらみすたると (一弘)] 家族旅行はヤリモクビーチでセックス三昧 ～お姉ちゃん編～",
        "cover": "https://telegra.ph/file/404412aec8e1b7c2799d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2618"
    },
    {
        "IDcode": 2619,
        "title": "[たまランド (たまの父)] 暴挙暴行百合暴力",
        "cover": "https://telegra.ph/file/9e9f8bc4efa267e00d809.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2619"
    },
    {
        "IDcode": 2620,
        "title": "(C99) [grand-slum (キュアスラム)] ギャルリフレの標的にされる本 (アイドルマスターシンデレラガールズ)",
        "cover": "https://telegra.ph/file/a7fe9680d300fe1b82a4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2620"
    },
    {
        "IDcode": 2621,
        "title": "(C99) [怪盗紳士団 (カイシンシ)] ベストショットはーちゃん! (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/808b637e5120081e14f9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2621"
    },
    {
        "IDcode": 2622,
        "title": "(C99) [梅雨前線 (アステリア、Yan2252)] 冬の残骸 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/c6fef6d9aacf91d63e5fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2622"
    },
    {
        "IDcode": 2623,
        "title": "[昭和最終戦線 (はなうな)] 雷電将軍激似コスプレイヤー(本人)が不敬過ぎる件について (原神)",
        "cover": "https://telegra.ph/file/72ebb71cef5fcbea0ef83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2623"
    },
    {
        "IDcode": 2624,
        "title": "[ジュースボックス工場 (ジュナジュナジュース)] 僕のハーレムアカデミア 爆豪ママとの夏休み「中編」 (僕のヒーローアカデミア)",
        "cover": "https://telegra.ph/file/c2d6ee79344f777e703d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2624"
    },
    {
        "IDcode": 2625,
        "title": "(C99) [ZiP (萌木原ふみたけ)] 甘雨ちゃんは、ヌクモリティを待っている。 (原神)",
        "cover": "https://telegra.ph/file/f2bea7660d375303f5445.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2625"
    },
    {
        "IDcode": 2626,
        "title": "(C99) [CRIMSON GROUND (宮社惣恭)] 休日の過ごし方-樋口円香編- (アイドルマスターシャイニーカラーズ)",
        "cover": "https://telegra.ph/file/44158e763c4a94f5af4d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2626"
    },
    {
        "IDcode": 2627,
        "title": "[紅梅なでしこ (赤薄紅)] 義妹性タイムリープ依存症3",
        "cover": "https://telegra.ph/file/3f8dddfb108ac54d608b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2627"
    },
    {
        "IDcode": 2628,
        "title": "[Kanbe] 父の娘 (COMIC 快楽天 2022年4月号)",
        "cover": "https://telegra.ph/file/24276461f207ab4a57a57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2628"
    },
    {
        "IDcode": 2629,
        "title": "[暮林あさ美] ぶっかけ委員長 (COMIC LO 2022年2月号)",
        "cover": "https://telegra.ph/file/6f8fcf038765da1333a5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2629"
    },
    {
        "IDcode": 2630,
        "title": "[Gorani]皮城执法官人格排泄 Arcane Slut Cops! (League of Legends)（djsymq机翻汉化）",
        "cover": "https://telegra.ph/file/b06024d287b89c8354353.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2630"
    },
    {
        "IDcode": 2631,
        "title": "[nanagi]  エクソシスター・イレーヌ  (遊☆戯☆王)",
        "cover": "https://telegra.ph/file/53481b82b26ace474cb39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2631"
    },
    {
        "IDcode": 2632,
        "title": "[しいたけ農園 (Kanabun)] ほけんしつでいろいろする",
        "cover": "https://telegra.ph/file/9096887e31a9c33895344.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2632"
    },
    {
        "IDcode": 2633,
        "title": "[三ッ葉稔] 歪欲",
        "cover": "https://telegra.ph/file/cf0da4996260d022ca9dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2633"
    },
    {
        "IDcode": 2634,
        "title": "[稍日向] 明日、世界が終わるなら",
        "cover": "https://telegra.ph/file/3bb5db7c5239b2425ae80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2634"
    },
    {
        "IDcode": 2635,
        "title": "[小路あゆむ] おじさま 知ってますか? (COMIC LO 2021年12月号)",
        "cover": "https://telegra.ph/file/02b9cc9c70298c3e46e81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2635"
    },
    {
        "IDcode": 2636,
        "title": "(C93) [うどんや (鬼月あるちゅ、ZAN)] もんはんのえろほんβ (モンスターハンター)",
        "cover": "https://telegra.ph/file/1e26b31445ed6d317a9b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2636"
    },
    {
        "IDcode": 2637,
        "title": "(C81) [ひぐま屋(野良ヒグマ)] ナミさんが！ (ワンピース)",
        "cover": "https://telegra.ph/file/51f4fbacec0f67ce44b56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2637"
    },
    {
        "IDcode": 2638,
        "title": "[ハレノチアメ] 子供じゃないし！ (COMIC 高 Vol.3)",
        "cover": "https://telegra.ph/file/738fab2ed4dfda46adca9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2638"
    },
    {
        "IDcode": 2639,
        "title": "[美矢火] 二人の相性～幼なじみとねっとりイチャラブ1～",
        "cover": "https://telegra.ph/file/de6d08926dd90576e86ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2639"
    },
    {
        "IDcode": 2640,
        "title": "[クリムゾン] 渦巻花束2 サクラ編 「過信」 (NARUTO -ナルト-)  (B·C漢化)",
        "cover": "https://telegra.ph/file/5a740f28d99e0c07b271d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2640"
    },
    {
        "IDcode": 2641,
        "title": "[平沢Zen] 【褐色肌・乳内射精差分48枚】ドスケベナース爆盛りモルガンさんの性欲管理",
        "cover": "https://telegra.ph/file/b314f9adaab4ec34c5bff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2641"
    },
    {
        "IDcode": 2642,
        "title": "[れぐでく] ケモミミの占術師~姉の謀略~ (異世快楽天 Vol.7)",
        "cover": "https://telegra.ph/file/d69e360f6547245aca8af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2642"
    },
    {
        "IDcode": 2643,
        "title": "[こらんだむ] 絆レベル別でみるエッチ中の態度 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/f45727afa5edfc9d0752b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2643"
    },
    {
        "IDcode": 2644,
        "title": "[苺ドレッシング (肉そうきゅー。)] 夏休み監禁性活 ～PTA会長の娘を雌奴隷に堕とす二週間～",
        "cover": "https://telegra.ph/file/df9351fc86eca48afc540.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2644"
    },
    {
        "IDcode": 2645,
        "title": "[珊瑚] 睡姦ヒーロー～帰り道に爆乳ヒーローが倒れていたからお持ち帰りした～",
        "cover": "https://telegra.ph/file/6b4a09abc6198aca35c70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2645"
    },
    {
        "IDcode": 2646,
        "title": "[ie] エリートサキュバスと天才サキュバス",
        "cover": "https://telegra.ph/file/04aa6ccc97eac7df7a237.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2646"
    },
    {
        "IDcode": 2647,
        "title": "[MANA] エウルア+アンバー 4",
        "cover": "https://telegra.ph/file/9e5bdabc66b6c55a4995d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2647"
    },
    {
        "IDcode": 2648,
        "title": "[にぎりうさぎ] ◯ビーシッター訓練校 大鳳編",
        "cover": "https://telegra.ph/file/51ebc3c4fcfd405fbe337.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2648"
    },
    {
        "IDcode": 2649,
        "title": "[けれの帝国 (けれの)] コピ本",
        "cover": "https://telegra.ph/file/0022fcae0f64f12ddf939.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2649"
    },
    {
        "IDcode": 2650,
        "title": "[ハメミエ亭 (即丸)] 夏休み!幼馴染と汗だくセックス",
        "cover": "https://telegra.ph/file/6d21db6593b4b72b25eeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2650"
    },
    {
        "IDcode": 2651,
        "title": "[規制当局 (リヒャルト・バフマン)] 放課後代理妻 義父は娘を孕ませたい",
        "cover": "https://telegra.ph/file/0a74b5f5ece3e60b01d2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2651"
    },
    {
        "IDcode": 2652,
        "title": "[規制当局 (リヒャルト・バフマン)] 放課後代理妻2 僕の彼女は父親に種付けされている",
        "cover": "https://telegra.ph/file/2d8bb198370e100782361.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2652"
    },
    {
        "IDcode": 2653,
        "title": "[moyori] 先輩とわんちゃん after (WEEKLY 快楽天 2022 No.10)",
        "cover": "https://telegra.ph/file/8c8d866d6e92f4735d476.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2653"
    },
    {
        "IDcode": 2654,
        "title": "[ぽりうれたん] ネカフェ",
        "cover": "https://telegra.ph/file/3f5932fa25d63891a118a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2654"
    },
    {
        "IDcode": 2655,
        "title": "[エアリーソックス] 彼女の犯したアヤマチ",
        "cover": "https://telegra.ph/file/af3573ed50af9864d27f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2655"
    },
    {
        "IDcode": 2656,
        "title": "［Gudlmok99］沙奈朵的丈夫Gardevoir's lover(Pokemon)（djsymq机翻汉化）",
        "cover": "https://telegra.ph/file/fe745f978573e1bd71590.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2656"
    },
    {
        "IDcode": 2657,
        "title": "(C99) [アイソカーブ (アレグロ)] Special EXtra FRIEND セフレ妻ゆかり Vol.01 RE",
        "cover": "https://telegra.ph/file/8c9a1611522560c2ce649.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2657"
    },
    {
        "IDcode": 2658,
        "title": "[ねこ缶 (ぬこやろう)] 隣の肉オナホ 保護した放置子が生意気だったので分からせた件",
        "cover": "https://telegra.ph/file/100eecbe637bec778c1b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2658"
    },
    {
        "IDcode": 2659,
        "title": "[鬼脚堂 (カラテカ・バリュー)] ふたなり妖精騎士ガウェイン (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/34cfb8a0e0e5f63d5a0ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2659"
    },
    {
        "IDcode": 2660,
        "title": "[あんこまん] スカサハvsフェルグス (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/9bedecd853e937b05094e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2660"
    },
    {
        "IDcode": 2661,
        "title": "[エクセシオ] 洗脳旅館へようこそ!発情巨乳美女たちの性欲を鎮められるのは俺一人だけ",
        "cover": "https://telegra.ph/file/cf4833f73aa9a6051c8d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2661"
    },
    {
        "IDcode": 2662,
        "title": "[お米屋] 王妃を寝取られ、孕まされた国王物語",
        "cover": "https://telegra.ph/file/8212b00994b6e28976d33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2662"
    },
    {
        "IDcode": 2663,
        "title": "[黒川おとぎ] 天照女学院文化祭 最終話 (ズリトピア)",
        "cover": "https://telegra.ph/file/fdc62abb7d668cceee795.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2663"
    },
    {
        "IDcode": 2664,
        "title": "[ぽりうれたん] 元ヤリサーの人妻",
        "cover": "https://telegra.ph/file/8c1c1198525ceeaccb378.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2664"
    },
    {
        "IDcode": 2665,
        "title": "(秋葉原超同人祭) [ディオゲネスクラブ (灰川ヘムレン)] ひびきと汗だくトレーニング (ダンベル何キロ持てる?)",
        "cover": "https://telegra.ph/file/1fce0f260bae11227cb15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2665"
    },
    {
        "IDcode": 2666,
        "title": "[kakao] ピュアメイドサービス (COMIC 快楽天ビースト 2022年4月号)",
        "cover": "https://telegra.ph/file/9b5c988de412ad7485ace.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2666"
    },
    {
        "IDcode": 2667,
        "title": "[まげきち] ボツにしたエロ漫画2 Project aborted",
        "cover": "https://telegra.ph/file/094e521de1b18cbed7163.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2667"
    },
    {
        "IDcode": 2668,
        "title": "[Bbbs] 狂暴鸿儒熬夜波比 (League of Legends) + cow suit",
        "cover": "https://telegra.ph/file/702d2ce23252ba8c064aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2668"
    },
    {
        "IDcode": 2669,
        "title": "[さしみ定食 (さしみ)] 人妻NTR家族旅行",
        "cover": "https://telegra.ph/file/8bc01d7cee3f970ee3819.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2669"
    },
    {
        "IDcode": 2670,
        "title": "[おせんべいの森 (だにまる)] 沖田さんといちゃらぶえっち (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/10d93986f188389a8be6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2670"
    },
    {
        "IDcode": 2671,
        "title": "[とんこつふうみ (ぽんこっちゃん)] 爆裂娘を彼女にしたらヤルことなんて決まってる！ (この素晴らしい世界に祝福を！)",
        "cover": "https://telegra.ph/file/c8c58e05d7f7b8696d00a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2671"
    },
    {
        "IDcode": 2672,
        "title": "[さいもん] Loveリスタート！ (コミック エグゼ 32)",
        "cover": "https://telegra.ph/file/71704b5ae748e2818c99c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2672"
    },
    {
        "IDcode": 2673,
        "title": "[二次結び (大野かなえ)] 恋するパッションモンスター",
        "cover": "https://telegra.ph/file/931cdf35e38a62268c691.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2673"
    },
    {
        "IDcode": 2674,
        "title": "[ヒロアキ] カーテン越しNTR婦長 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/625f9e2238e35d45c07db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2674"
    },
    {
        "IDcode": 2675,
        "title": "(C99) [てこめんち (てち)] 幻撮 幻想少女自慰盗撮録 (東方Project)",
        "cover": "https://telegra.ph/file/97dc40a748fbc3d0b1326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2675"
    },
    {
        "IDcode": 2676,
        "title": "[雲呑めお] ご奉仕ウララちゃん (COMIC 快楽天 2022年4月号)",
        "cover": "https://telegra.ph/file/386bd3e4a76087ba3e55b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2676"
    },
    {
        "IDcode": 2677,
        "title": "[きたく] はじめまして栞子ちゃん (ラブライブ! 虹ヶ咲学園スクールアイドル同好会)  [進行中]",
        "cover": "https://telegra.ph/file/5e573dbfa844f1baa00c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2677"
    },
    {
        "IDcode": 2678,
        "title": "(C97) [武装カルシウム (竹刈シウム)] 牝穴裁判 (東方Project)",
        "cover": "https://telegra.ph/file/ae70848322c56cff77ab8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2678"
    },
    {
        "IDcode": 2679,
        "title": "(サンクリ2017 Summer) [千歳烏山第2出張所 (真未たつや)] エロマンガ先生の…! (エロマンガ先生)",
        "cover": "https://telegra.ph/file/f5eab916a0d300d0078a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2679"
    },
    {
        "IDcode": 2680,
        "title": "[岩男] もし大前田の卍解が鏡花水月だったら と織姫編 といろいろ (ブリーチ)",
        "cover": "https://telegra.ph/file/3cc59c7d0107a2d786c46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2680"
    },
    {
        "IDcode": 2681,
        "title": "全年齢版 第1話",
        "cover": "https://telegra.ph/file/7433650b950c1a158cea4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2681"
    },
    {
        "IDcode": 2682,
        "title": "[天馬ふぇみお] 欲求不満の人妻は温泉旅館で激しく悶える",
        "cover": "https://telegra.ph/file/03b07b24b8d17416ce14c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2682"
    },
    {
        "IDcode": 2683,
        "title": "[よこしま日記] 1ON1でメチャクチャHした話",
        "cover": "https://telegra.ph/file/aa6848da088318cb8bf24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2683"
    },
    {
        "IDcode": 2684,
        "title": "[ももいろたんざく (なめたけのこ)] バイト先のちっちゃな先輩 ～クールな先輩とイチャイチャしたい～",
        "cover": "https://telegra.ph/file/b72ecf16f57e6df693255.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2684"
    },
    {
        "IDcode": 2685,
        "title": "[しとろんの杜 (柚子奈ひよ)] クラスで一番の堅物女は俺の前でだけエロくなる",
        "cover": "https://telegra.ph/file/435ef746e1423a585a01c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2685"
    },
    {
        "IDcode": 2686,
        "title": "[モノクロイド] 遊びのつもりだったのに (前編)",
        "cover": "https://telegra.ph/file/8d3c522e04e1eb5668b66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2686"
    },
    {
        "IDcode": 2687,
        "title": "[モノクロイド] 遊びのつもりだったのに (中編)",
        "cover": "https://telegra.ph/file/782fcaa2ba60c15f05954.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2687"
    },
    {
        "IDcode": 2688,
        "title": "[如月群真] 好きになったら一直線！[全彩]   [个人重嵌]",
        "cover": "https://telegra.ph/file/a936411cf9868c40e4977.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2688"
    },
    {
        "IDcode": 2689,
        "title": "[右脳] むいちゃいました! FINAL (コミックゼロス #80)",
        "cover": "https://telegra.ph/file/ff76992ebb178367ed0f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2689"
    },
    {
        "IDcode": 2690,
        "title": "[エアリーソックス (麻冬HEMP)] 自撮りSNSにハマるOL秘湯ブロガー、ハメられる",
        "cover": "https://telegra.ph/file/3e20358b88be823aa9be5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2690"
    },
    {
        "IDcode": 2691,
        "title": "[STUDIOふあん (来鈍)] 飯犯トラベラーズ 沖縄集団レイプ済 ハーレムひとり旅編",
        "cover": "https://telegra.ph/file/02dcb2e749992de2cd591.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2691"
    },
    {
        "IDcode": 2692,
        "title": "(C99) [おちあき]郷に従う九条さん。(原神)",
        "cover": "https://telegra.ph/file/add4838e14a6f09da01dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2692"
    },
    {
        "IDcode": 2693,
        "title": "(C99) [はに屋 (はにーに)] もし鷺沢文香の露出癖がバレたら (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/bd96bc535013f2dd881ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2693"
    },
    {
        "IDcode": 2694,
        "title": "(C99) [Dish up (わらびゆうぞう)] モナゲーテ 私はモナ、ゲーテ様の所有物です。 (原神)",
        "cover": "https://telegra.ph/file/ff8ef3af998dd9ee8534e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2694"
    },
    {
        "IDcode": 2695,
        "title": "[割り箸効果] 大人をなめてるギャルがボテ腹でヤリ捨てられていたので拾ってわからせてみた",
        "cover": "https://telegra.ph/file/dbb155d9a7c9c11ae6981.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2695"
    },
    {
        "IDcode": 2696,
        "title": "[菊のすけまる] 友達4年+恋人1年 (COMIC アンスリウム 2021年11月号)",
        "cover": "https://telegra.ph/file/85dff2a70044bc4ddfe87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2696"
    },
    {
        "IDcode": 2697,
        "title": "[hal] 襲学旅行 最終話 ～旅立ちの襲学旅行～ (COMIC 真激 2022年3月号)",
        "cover": "https://telegra.ph/file/cd28937f9ffc1930258a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2697"
    },
    {
        "IDcode": 2698,
        "title": "[木瀬樹] 麦の恩返し (WEEKLY 快楽天 2022 No.09)",
        "cover": "https://telegra.ph/file/dc0c583ada01e3aa3f6ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2698"
    },
    {
        "IDcode": 2699,
        "title": "[桃吹リオ] 俺様のあそび (COMIC 阿吽 2022年2月号)",
        "cover": "https://telegra.ph/file/eabd20829ca5f4b268909.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2699"
    },
    {
        "IDcode": 2700,
        "title": "[しょごた] 性轉換純情不良少年！莫名其妙被欺負到濕得一塌糊塗☆ 1-7話",
        "cover": "https://telegra.ph/file/bcf4ae47f01844b0c3737.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2700"
    }
];
