// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 2801,
        "title": "[ディッコ] 百鬼あ〇めといっぱい仲良し子づくりしちゃうCG集！ (百鬼あやめ)",
        "cover": "https://telegra.ph/file/6fd244a39fbe6083c2553.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2801"
    },
    {
        "IDcode": 2802,
        "title": "[朱尾、穴乱] 好みじゃないけど～ムカつく姉と相性抜群エッチ～ 1-6",
        "cover": "https://telegra.ph/file/02f76025566a05c072776.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2802"
    },
    {
        "IDcode": 2803,
        "title": "[その他大勢 (ゆかたろ)] 閉じ込められて薬のんでそれからのあいだ (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/82d652bf162f1f5bfc3d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2803"
    },
    {
        "IDcode": 2804,
        "title": "[室永叉焼] セクハラ面接！！ぽちゃ娘さん♡（Chinese）",
        "cover": "https://telegra.ph/file/6365380ea7c00941870c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2804"
    },
    {
        "IDcode": 2805,
        "title": "[きゃろっときゃらめる畑] 会長と通勤電車NF",
        "cover": "https://telegra.ph/file/a6578087b5e889c2f592f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2805"
    },
    {
        "IDcode": 2806,
        "title": "[IronSugar] 初めての相手はお父さんでした ＃3 淫乱巨乳な長女",
        "cover": "https://telegra.ph/file/2a42c8e73c4440f39600c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2806"
    },
    {
        "IDcode": 2807,
        "title": "[あいの智絵]続満点のカラダ（Chinese）",
        "cover": "https://telegra.ph/file/9cd7369ec86e7f3f46eea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2807"
    },
    {
        "IDcode": 2808,
        "title": "[琴義弓介] 母と姉と青い苺のフロマージュ 第2話 (豊乳4989)",
        "cover": "https://telegra.ph/file/f3203f12067ef14f4bc3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2808"
    },
    {
        "IDcode": 2809,
        "title": "[湯山チカ] 先生とぼく 第11話 (アナンガ・ランガ Vol. 60)",
        "cover": "https://telegra.ph/file/41eb767b90f77ebe39eee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2809"
    },
    {
        "IDcode": 2810,
        "title": "[花札さくらの] みのりちゃん家 その1 (COMIC BAVEL 2021年10月号)",
        "cover": "https://telegra.ph/file/c0774fcbb7a76235dea98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2810"
    },
    {
        "IDcode": 2811,
        "title": "[狭くて暗い (狭暗)] グロマン化クラブ3",
        "cover": "https://telegra.ph/file/3471758dd8c6bd6c145c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2811"
    },
    {
        "IDcode": 2812,
        "title": "[OKINA] 桜花に翳む (夜の孵る音)",
        "cover": "https://telegra.ph/file/2848e91784802bb6ae18f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2812"
    },
    {
        "IDcode": 2813,
        "title": "(C94) [琥珀亭 (堺はまち)] 不倫セックスの余韻が忘れられない人妻家元が身体の疼きを抑えるために夫と激しくヤってみた (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/834829fa87fc7aabf6e9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2813"
    },
    {
        "IDcode": 2814,
        "title": "[うさでん] お母さん、あたしの彼氏取らないで!",
        "cover": "https://telegra.ph/file/bbf77829fb6187ea7c7be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2814"
    },
    {
        "IDcode": 2815,
        "title": "[ヨイコノtt] 夫婦の秘訣 (COMIC 快楽天 2020年4月号)",
        "cover": "https://telegra.ph/file/f357712f10012dadf6286.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2815"
    },
    {
        "IDcode": 2816,
        "title": "[皐月芋網] ママサカリ (COMIC saseco Vol. 3)",
        "cover": "https://telegra.ph/file/9708ac4bcda5e120683df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2816"
    },
    {
        "IDcode": 2817,
        "title": "[大友卓二] ぼくの彼女はJKエルフ (COMIC アンスリウム 2017年8月号)",
        "cover": "https://telegra.ph/file/c737bd03545bb1482f4b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2817"
    },
    {
        "IDcode": 2818,
        "title": "[大友卓二] ぼくの彼女はJKエルフ (姉) (COMIC アンスリウム 2018年5月号)",
        "cover": "https://telegra.ph/file/4138753c2dbbced2fb9eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2818"
    },
    {
        "IDcode": 2819,
        "title": "[江森うき] 叔母ちゃんの腋とお尻とetc... (COMIC クリベロン DUMA 2021年7月号 Vol.27)",
        "cover": "https://telegra.ph/file/2f3d99364b047e1bb569a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2819"
    },
    {
        "IDcode": 2820,
        "title": "[アンソロジー] 二次元コミックマガジン メス堕ちっ! TSエロトラップダンジョン Vol.2",
        "cover": "https://telegra.ph/file/d91abf2efe8a10c033ff7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2820"
    },
    {
        "IDcode": 2821,
        "title": "(ふたけっと17.5) [シリコン自重 (Condessa)] 出張先で自慰する32歳",
        "cover": "https://telegra.ph/file/ef7756d902f2aa4b928b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2821"
    },
    {
        "IDcode": 2822,
        "title": "[17H (蜥臀目)] SKIN · ノーマルミッション02",
        "cover": "https://telegra.ph/file/6f6b3ea679f84c8a256dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2822"
    },
    {
        "IDcode": 2823,
        "title": "[トリスタ] りぼーんクイーン! (コミックアンリアル 2021年12月号 Vol.94)",
        "cover": "https://telegra.ph/file/35d8061723c5d1691ccf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2823"
    },
    {
        "IDcode": 2824,
        "title": "ウサJO][栗子汉化]Pixiv:67434721",
        "cover": "https://telegra.ph/file/a52df0890671995db0d08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2824"
    },
    {
        "IDcode": 2825,
        "title": "[NT00] せな＆ゆみ",
        "cover": "https://telegra.ph/file/d622f6b9d9e03e704fb03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2825"
    },
    {
        "IDcode": 2826,
        "title": "[ハーデス] 枝垂ほたるヤリマンビッチ墜ち 上巻 (だがしかし)",
        "cover": "https://telegra.ph/file/2dd9c5c5e08e1b165c08a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2826"
    },
    {
        "IDcode": 2827,
        "title": "(C83) [マンガスーパー (猫井ミィ)] ポリスストーリー (アイドルマスター)",
        "cover": "https://telegra.ph/file/a0abfb395efe129211f06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2827"
    },
    {
        "IDcode": 2828,
        "title": "[こしの] ホールインワン (COMIC BAVEL 2021年11月号)",
        "cover": "https://telegra.ph/file/7b9e96e205ec4776e91fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2828"
    },
    {
        "IDcode": 2829,
        "title": "[貝塚芥] 買物デートブレマートン",
        "cover": "https://telegra.ph/file/fdaa7e45952dc2638e426.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2829"
    },
    {
        "IDcode": 2830,
        "title": "(C96) [うなぎやさん (花宮なつか)] サキュバスちゃん育性日誌2",
        "cover": "https://telegra.ph/file/b72678805ead40900050f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2830"
    },
    {
        "IDcode": 2831,
        "title": "[みんなだいすき] 八百長コロシアム (COMIC LO 2022年1月号)",
        "cover": "https://telegra.ph/file/60eb78d656f9ecef9ecbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2831"
    },
    {
        "IDcode": 2832,
        "title": "[18マスター] ツミコイ [巴尼汉化组]",
        "cover": "https://telegra.ph/file/4465eb6fb61a7b41f3246.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2832"
    },
    {
        "IDcode": 2833,
        "title": "[かく恋慕 (だにまる)] 罰ゲームでお姉さんと♥ (甘やかしお姉さんにおチンチンをトロットロにされて抜けだせないっ〜おねショタ搾精アンソロジー〜)",
        "cover": "https://telegra.ph/file/c595597bbc8bdc4ee2a46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2833"
    },
    {
        "IDcode": 2834,
        "title": "[平盛人] ロリ巨乳RPG 【巴尼汉化组】",
        "cover": "https://telegra.ph/file/f33bfcb10cfa24e83b3c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2834"
    },
    {
        "IDcode": 2835,
        "title": "[武田弘光] 21正月ラクガキ",
        "cover": "https://telegra.ph/file/9726da123a313d4d3c2bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2835"
    },
    {
        "IDcode": 2836,
        "title": "[大沢おふだ] 二人だけで (COMIC LO 2021年12月号)",
        "cover": "https://telegra.ph/file/7c590db7c8ba6f7ae7029.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2836"
    },
    {
        "IDcode": 2837,
        "title": "[ハイソン] お馬のお嫁さん (COMIC 夢幻転生 2021年12月号)",
        "cover": "https://telegra.ph/file/6b1424c80bd281716de50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2837"
    },
    {
        "IDcode": 2838,
        "title": "[蘭田夢] ふっとわーきんぐ 第1話 (マガジンサイベリア Vol.152)",
        "cover": "https://telegra.ph/file/50b89831c58f9dedf6f4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2838"
    },
    {
        "IDcode": 2839,
        "title": "[ぎんハハ] ガールフレンド 2 (ポケットモンスター ソード・シールド)",
        "cover": "https://telegra.ph/file/287f88b74d8787d68f408.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2839"
    },
    {
        "IDcode": 2840,
        "title": "[菜さん] NTRclub生放送-アスナ孕篇①-④、⑥ (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/71249880dccfc05c6e22d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2840"
    },
    {
        "IDcode": 2841,
        "title": "[ムサシマル] 誰そ彼 (キャラメルボックス)",
        "cover": "https://telegra.ph/file/edce7ad3393b5b45ae198.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2841"
    },
    {
        "IDcode": 2842,
        "title": "(秋季例大祭8) [てこめんち (てち)] パチュリー・ノーレッジ快発記録II (東方Project)",
        "cover": "https://telegra.ph/file/7d03dc6bd675b76d2398a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2842"
    },
    {
        "IDcode": 2843,
        "title": "[すぺ (なかに)] 昔は楽しかった 2",
        "cover": "https://telegra.ph/file/2afaf0381f240e9f85377.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2843"
    },
    {
        "IDcode": 2844,
        "title": "[武田弘光] ギャル×オタサーNTR",
        "cover": "https://telegra.ph/file/d2b43e91ff5cb2c03092c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2844"
    },
    {
        "IDcode": 2845,
        "title": "[世捨人な漫画描き (ともきとものり)] オシオキだから何してもいいのよ♥ (東方Project)",
        "cover": "https://telegra.ph/file/57e4092ab95ab76801150.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2845"
    },
    {
        "IDcode": 2846,
        "title": "[たつか] 性長期 (COMIC アンスリウム 2021年11月号)",
        "cover": "https://telegra.ph/file/a27f0b3cc2cede618c4e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2846"
    },
    {
        "IDcode": 2847,
        "title": "[琴義弓介] 悪乗り☆ドデカップ (ヤリスギ肉熟女)",
        "cover": "https://telegra.ph/file/2a969dc891fe795ae8385.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2847"
    },
    {
        "IDcode": 2848,
        "title": "[NekoNoTe] 惠惠 Part 5 (この素晴らしい世界に祝福を!) [流木个人汉化]",
        "cover": "https://telegra.ph/file/09406595c40d14d588642.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2848"
    },
    {
        "IDcode": 2849,
        "title": "[鳥茶丸] セイリョク召喚式! (COMIC アンスリウム 2018年2月号)",
        "cover": "https://telegra.ph/file/2625b09f8fbd51bcf6187.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2849"
    },
    {
        "IDcode": 2850,
        "title": "[焼酎MAC (ほずみけんじ)] NTR新婚旅行",
        "cover": "https://telegra.ph/file/8a20774b37b648602ff6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2850"
    },
    {
        "IDcode": 2851,
        "title": "[ナポりたん] 心療内科の女医さんたちはぼくの全部を受け止めてくれる",
        "cover": "https://telegra.ph/file/4b6b9187864ab07ae5d9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2851"
    },
    {
        "IDcode": 2852,
        "title": "[ディッコ] ラプ🛸ス様となかよしえっちしまくるCG集!  (ホロライブ)  (ラプラス・ダークネス) (バーチャルユーチューバー)",
        "cover": "https://telegra.ph/file/205e2abb20d9009bbf7e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2852"
    },
    {
        "IDcode": 2853,
        "title": "(C87) [第六製鉄 (六時)] DAYDREAM INGRID (魔界騎士イングリッド)",
        "cover": "https://telegra.ph/file/6c75875ff0899eeab4456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2853"
    },
    {
        "IDcode": 2854,
        "title": "[むた] ジャンヌお姉ちゃん+(差分)",
        "cover": "https://telegra.ph/file/3d6a1822f8a3e322eb3de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2854"
    },
    {
        "IDcode": 2855,
        "title": "[小路あゆむ] ちっちゃなすじとおなかが好き。",
        "cover": "https://telegra.ph/file/60bb3100417a135752296.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2855"
    },
    {
        "IDcode": 2856,
        "title": "[桂あいり] カラミざかり番外編2～竹内先輩と部室～",
        "cover": "https://telegra.ph/file/5c147d32b870681307275.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2856"
    },
    {
        "IDcode": 2857,
        "title": "[MANA] 甘雨 3",
        "cover": "https://telegra.ph/file/0feec827b86f4d9dca85b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2857"
    },
    {
        "IDcode": 2858,
        "title": "(C97) [L5EX (カメーリエ)] 霧子の夢 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/b66b580ddf8d789ee5ce7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2858"
    },
    {
        "IDcode": 2859,
        "title": "[ぞんだ] 再会 (犯してあげる) [カラー化]",
        "cover": "https://telegra.ph/file/f2fa6ea117c12c1a0b016.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2859"
    },
    {
        "IDcode": 2860,
        "title": "[Grand lemon (隣)] 続・ぽんこつサキュバスちゃん",
        "cover": "https://telegra.ph/file/e40098f32e87c76442bfb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2860"
    },
    {
        "IDcode": 2861,
        "title": "[Ryo] 幼馴染じゃ足りない～整体師の指技は優しくズルい～ 第1-7話 完结",
        "cover": "https://telegra.ph/file/b5bb661db4e591c350d04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2861"
    },
    {
        "IDcode": 2862,
        "title": "(COMIC1☆11) [ブロンコ一人旅 (内々けやき)] Beast Sex Friends (キラキラ☆プリキュア アラモード)",
        "cover": "https://telegra.ph/file/8947a00e47f76e38658fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2862"
    },
    {
        "IDcode": 2863,
        "title": "[ストロングERO] 秘密の性活指導～巨乳清楚系彼女が教師のチ◯ポに堕ちるまで～",
        "cover": "https://telegra.ph/file/d0c7c69e20f61b6d75232.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2863"
    },
    {
        "IDcode": 2864,
        "title": "[ぽんこっちゃん] やらしい気分になるアプリ♡ 姉と俺と妹と",
        "cover": "https://telegra.ph/file/e72862cd49b9ec77301b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2864"
    },
    {
        "IDcode": 2865,
        "title": "(MyBestFriends10) [PLANT (鶴井)] 響とプール! (アイドルマスター)",
        "cover": "https://telegra.ph/file/4785aeef3948c9e5bc4b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2865"
    },
    {
        "IDcode": 2866,
        "title": "(C97) [コズミックうどん (中邑)] 潜熱 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/aa8772e44db3f8e11ef0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2866"
    },
    {
        "IDcode": 2867,
        "title": "(C97) [はじけるせぇし (ふみひこ)] LOVE CHOCO hololive summer memories (癒月ちょこ)",
        "cover": "https://telegra.ph/file/4392654fbd6e0e8cf55f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2867"
    },
    {
        "IDcode": 2868,
        "title": "(C83) [我流痴帯 (TANA)] NTR R 奴隷娼婦凛子 寝獲り返し (対魔忍ユキカゼ)",
        "cover": "https://telegra.ph/file/31cd5a58772ebada0e8c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2868"
    },
    {
        "IDcode": 2869,
        "title": "[伊月クロ] つぼみ宿り (COMIC BAVEL 2022年1月号)",
        "cover": "https://telegra.ph/file/d9f51ea8ec51a8a3957f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2869"
    },
    {
        "IDcode": 2871,
        "title": "[熟成角砂糖 (sugarBt)] トゥインクルイマジネーションなんてなかった 15 years later vol.2 (スター☆トゥインクルプリキュア)",
        "cover": "https://telegra.ph/file/433862508c909df7a974c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2871"
    },
    {
        "IDcode": 2872,
        "title": "[ホムンクルス] Boy meets Girl (COMIC快楽天 2018年9月号)",
        "cover": "https://telegra.ph/file/3123b97ec08de6ae4c657.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2872"
    },
    {
        "IDcode": 2873,
        "title": "[ぽりうれたん] 梅雨のコインランドリー",
        "cover": "https://telegra.ph/file/720843b25e1e402ee86c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2873"
    },
    {
        "IDcode": 2874,
        "title": "[かえでもみじ (しじょっこ)] 思慮深い大学生の彼女",
        "cover": "https://telegra.ph/file/1d0b48539ec845c2bc647.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2874"
    },
    {
        "IDcode": 2875,
        "title": "[木静謙二] Intention ~Interlude 4~ (コミックホットミルク濃いめ Vol.30)",
        "cover": "https://telegra.ph/file/1a37934d3393aeea15ba0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2875"
    },
    {
        "IDcode": 2876,
        "title": "[瀬奈陽太郎] お風呂と妹と (COMIC ペンギンクラブ 2022年1月号)",
        "cover": "https://telegra.ph/file/1d7a48652090e1d1030fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2876"
    },
    {
        "IDcode": 2877,
        "title": "[鳥海] 特異点 HーA.D.？？？？ー外界侵攻勢力ハイグレ！+後篇",
        "cover": "https://telegra.ph/file/18d8b74fad4bba4c307b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2877"
    },
    {
        "IDcode": 2878,
        "title": "(もりや神社例大祭9) [Honoji (プーアカちゃん)] 早苗式射精管理イニシエーション2 (東方Project)",
        "cover": "https://telegra.ph/file/f5112a6ae5017ef957a1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2878"
    },
    {
        "IDcode": 2879,
        "title": "[ハメドラゴン] ボーナスコミュ#39 (アイドルマスターシャイニーカラーズ)",
        "cover": "https://telegra.ph/file/da98abd409f6b9c456ff2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2879"
    },
    {
        "IDcode": 2880,
        "title": "[どうしょく (九栗おいも)] 寝取り愛―私のほうが、キミが好き―",
        "cover": "https://telegra.ph/file/d4ec090672ab1c5ab3d6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2880"
    },
    {
        "IDcode": 2881,
        "title": "(C95) [ここのき屋 (ここのき奈緒)] キョウカイ。2",
        "cover": "https://telegra.ph/file/6ded01d6ef9bcde5b7ba3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2881"
    },
    {
        "IDcode": 2882,
        "title": "[とっとこMたろう (MだSたろう)] Strength and III (ブラック★ロックシューター)",
        "cover": "https://telegra.ph/file/844e8052dc9f3f614f090.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2882"
    },
    {
        "IDcode": 2883,
        "title": "[まろん☆まろん] むち無知!強制成長中っ!番外編 (無視せざるを得ぬ町・番外編!～新作7本セット集～)",
        "cover": "https://telegra.ph/file/afa1dfdbf14e5fd5031c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2883"
    },
    {
        "IDcode": 2884,
        "title": "[みずゆき] 僕たち3人の日常 後編 (コミックホットミルク 2022年1月号)",
        "cover": "https://telegra.ph/file/476e90fb0b26d5457f621.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2884"
    },
    {
        "IDcode": 2885,
        "title": "[ワラビモチー] Heroine Harassment 淫獣ハンターリトルブロッサム(1)",
        "cover": "https://telegra.ph/file/bd15548cf6e94cb843038.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2885"
    },
    {
        "IDcode": 2886,
        "title": "[むちむちねこ (らむち)] みだらな日常5",
        "cover": "https://telegra.ph/file/7c5ffbb9a5e42ce254398.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2886"
    },
    {
        "IDcode": 2887,
        "title": "[ヒレカツ] 母は弟と犯っている",
        "cover": "https://telegra.ph/file/35f83835fb073f485abb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2887"
    },
    {
        "IDcode": 2888,
        "title": "(C94) [毒電波受信中 (炉心)] ちはやさんと楽しいコスプレ撮影会",
        "cover": "https://telegra.ph/file/c656bdf1ab0a7e933464f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2888"
    },
    {
        "IDcode": 2889,
        "title": "[りゅうき夕海] がんばれ受験生 (ふわとろ巨乳なおねーさん)",
        "cover": "https://telegra.ph/file/3e4e8c592b34da0190472.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2889"
    },
    {
        "IDcode": 2890,
        "title": "[Pennel] クラスメイトの紀村さんはおっぱいが大きい (COMIC 快楽天ビースト 2021年9月号)",
        "cover": "https://telegra.ph/file/431f544fa07aee1bda2d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2890"
    },
    {
        "IDcode": 2891,
        "title": "[ACID EATERS (和馬村政)] ニンゲンのお勉強 (トロピカル～ジュ!プリキュア)",
        "cover": "https://telegra.ph/file/cf71024684c9fde481d6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2891"
    },
    {
        "IDcode": 2892,
        "title": "[ぼたもちの宴 (ナユザキナツミ)] お前の女",
        "cover": "https://telegra.ph/file/634bc30266e4d80da23d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2892"
    },
    {
        "IDcode": 2893,
        "title": "[よしよし屋] じゅんクンと友達のママえちえち大作戦",
        "cover": "https://telegra.ph/file/173a17b450f6c70ea3f0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2893"
    },
    {
        "IDcode": 2894,
        "title": "[久我繭莉] わたしのものに",
        "cover": "https://telegra.ph/file/4b4e1d62f5fabb864d10d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2894"
    },
    {
        "IDcode": 2895,
        "title": "[kakao] シコスプラッシュ + 4Pリーフレット",
        "cover": "https://telegra.ph/file/da2974f1bc998309689b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2895"
    },
    {
        "IDcode": 2896,
        "title": "[高村わむ] ガクエンウォーズ -最後の性戦- (コミック エグゼ 12)",
        "cover": "https://telegra.ph/file/78e20e975614c26f26c50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2896"
    },
    {
        "IDcode": 2897,
        "title": "[草野郎] ブルアカ洗脳オマンコ学園バニー奴隷化 (NTR＆ビッチ化) (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/d42c6652eab7bac227678.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2897"
    },
    {
        "IDcode": 2898,
        "title": "[黒斗] ギャルママとパコパコSEX～人妻の超絶テクにマジイキ絶頂！ 第1-19話",
        "cover": "https://telegra.ph/file/a1c816d60adfbef2b1c87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2898"
    },
    {
        "IDcode": 2899,
        "title": "(C96) [ここのき屋 (ここのき奈緒)] キョウカイ。3",
        "cover": "https://telegra.ph/file/a8325725589ddd638195e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2899"
    },
    {
        "IDcode": 2900,
        "title": "[小島紗] C99会場限定ラクガキ本だったかもしれない本",
        "cover": "https://telegra.ph/file/3e3de8f98c8a7632a4aa4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2900"
    },
    {
        "IDcode": 2901,
        "title": "(C97) [ざっはとるて (森永らむね)] 邪ンヌの本４(Fate/Grand Order)",
        "cover": "https://telegra.ph/file/0e6a564dfa69a59a4cad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2901"
    }
];
