// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 6901,
        "title": "ないしょ♡",
        "cover": "https://telegra.ph/file/10989ad3abe5445fbfa69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6901"
    },
    {
        "IDcode": 6902,
        "title": "理想の彼氏様？",
        "cover": "https://telegra.ph/file/33efe73ff2a4480cf6950.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6902"
    },
    {
        "IDcode": 6903,
        "title": "ひみつのブルマ",
        "cover": "https://telegra.ph/file/554bf979a93530b6aedb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6903"
    },
    {
        "IDcode": 6904,
        "title": "リカの研究室 レポートファイル 超人にな～るX",
        "cover": "https://telegra.ph/file/66fa301d0181e1d76f1f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6904"
    },
    {
        "IDcode": 6905,
        "title": "mitigation",
        "cover": "https://telegra.ph/file/c97efe4764c6d65eb34b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6905"
    },
    {
        "IDcode": 6906,
        "title": "お嬢様を催眠術でエロデレに？",
        "cover": "https://telegra.ph/file/7d68a40cb567aff007cab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6906"
    },
    {
        "IDcode": 6907,
        "title": "愛されたい女子",
        "cover": "https://telegra.ph/file/2217106b9fb300688f701.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6907"
    },
    {
        "IDcode": 6908,
        "title": "愛しの？疑惑の？S系彼氏♥",
        "cover": "https://telegra.ph/file/b2bcc5617005a31bc2782.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6908"
    },
    {
        "IDcode": 6909,
        "title": "淫乱催眠オトコノ娘",
        "cover": "https://telegra.ph/file/85a48ad1ff2b3f5d4773b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6909"
    },
    {
        "IDcode": 6910,
        "title": "リカの研究室 レポートファイルボディリフレ～るDX",
        "cover": "https://telegra.ph/file/0ffb658f3e44985c77d4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6910"
    },
    {
        "IDcode": 6911,
        "title": "リカの研究室 レポートファイル 動物とお話できちゃ～う",
        "cover": "https://telegra.ph/file/c17b665ec7359ca0d6a2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6911"
    },
    {
        "IDcode": 6912,
        "title": "SEXおーばーたいむ",
        "cover": "https://telegra.ph/file/b7d82ebc046ddcd998749.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6912"
    },
    {
        "IDcode": 6913,
        "title": "どきどき補習授業",
        "cover": "https://telegra.ph/file/cfa8f6dae5c78fd322875.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6913"
    },
    {
        "IDcode": 6914,
        "title": "デリヘル♡デビル",
        "cover": "https://telegra.ph/file/b6155d214d300621de9c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6914"
    },
    {
        "IDcode": 6915,
        "title": "again -アゲイン-",
        "cover": "https://telegra.ph/file/a5bdf5e6c46135c799571.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6915"
    },
    {
        "IDcode": 6916,
        "title": "ボクのお姫様",
        "cover": "https://telegra.ph/file/8b403bbfee526e21cbaaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6916"
    },
    {
        "IDcode": 6917,
        "title": "skew Lines",
        "cover": "https://telegra.ph/file/b1dd5300ef9e6dabca36c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6917"
    },
    {
        "IDcode": 6918,
        "title": "お姉ちゃんは肉便器",
        "cover": "https://telegra.ph/file/f78ccaf50ed6163a52286.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6918"
    },
    {
        "IDcode": 6919,
        "title": "あいどりんぐ♥stop!",
        "cover": "https://telegra.ph/file/3fa6867d91b2dcb7cba37.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6919"
    },
    {
        "IDcode": 6920,
        "title": "初めての献精",
        "cover": "https://telegra.ph/file/d370acc8cd93226058df0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6920"
    },
    {
        "IDcode": 6921,
        "title": "三丁目のタマ 3",
        "cover": "https://telegra.ph/file/411d758126570bc02765a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6921"
    },
    {
        "IDcode": 6922,
        "title": "委員長GENESIS",
        "cover": "https://telegra.ph/file/de473dd0f22684bbf086e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6922"
    },
    {
        "IDcode": 6923,
        "title": "這與我知道的書店店員不一樣啊",
        "cover": "https://telegra.ph/file/26b2ff641a64166eb5fba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6923"
    },
    {
        "IDcode": 6924,
        "title": "ホーム セクシャリティーチャー",
        "cover": "https://telegra.ph/file/5f5237ed99dee3e4abade.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6924"
    },
    {
        "IDcode": 6925,
        "title": "Pretty Monste",
        "cover": "https://telegra.ph/file/78c3dfd5fe3fad4aecec2.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6925"
    },
    {
        "IDcode": 6926,
        "title": "見られてイッちゃう☆百合電車～女性専用車両のヒメゴト～",
        "cover": "https://telegra.ph/file/5f87ebf40cbde4412aea5.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6926"
    },
    {
        "IDcode": 6927,
        "title": "セックスコミュニケーション",
        "cover": "https://telegra.ph/file/c1ca5756f4be0dcab5d80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6927"
    },
    {
        "IDcode": 6928,
        "title": "ぼくはカワイイモンスター",
        "cover": "https://telegra.ph/file/883d99f7aed667f48992f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6928"
    },
    {
        "IDcode": 6929,
        "title": "とっぴんぐ♥えんじぇるず",
        "cover": "https://telegra.ph/file/146ac51f31a32fd3fbceb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6929"
    },
    {
        "IDcode": 6930,
        "title": "[中村葛湯] LOOP",
        "cover": "https://telegra.ph/file/93f1961d16daaf687cacc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6930"
    },
    {
        "IDcode": 6931,
        "title": "蠢動のこころ",
        "cover": "https://telegra.ph/file/31114f6f3d1f2ba806876.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6931"
    },
    {
        "IDcode": 6932,
        "title": "兄嫁の夢 (ふしだら日和)",
        "cover": "https://telegra.ph/file/828ce58b0953f57babf49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6932"
    },
    {
        "IDcode": 6933,
        "title": "里帰り",
        "cover": "https://telegra.ph/file/3c00943789852eddd7cf1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6933"
    },
    {
        "IDcode": 6934,
        "title": "転生してミノタウロスになったらお嬢様に迫られた件",
        "cover": "https://telegra.ph/file/4f572d359a01e29d3a958.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6934"
    },
    {
        "IDcode": 6935,
        "title": "クズの復讐",
        "cover": "https://telegra.ph/file/77b9b8793cf0c07fd5948.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6935"
    },
    {
        "IDcode": 6936,
        "title": "俺がいちばん愛してる!",
        "cover": "https://telegra.ph/file/0f41577fed850ad0e8c2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6936"
    },
    {
        "IDcode": 6937,
        "title": "ふわふわ恋のbaby doll",
        "cover": "https://telegra.ph/file/003429e0b45d5eef31f61.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6937"
    },
    {
        "IDcode": 6938,
        "title": "S&M～お口で溶けてあそこでも溶ける～",
        "cover": "https://telegra.ph/file/3c55df89452564f4c89ef.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6938"
    },
    {
        "IDcode": 6939,
        "title": "社畜プリンセス",
        "cover": "https://telegra.ph/file/a1c5d15654d9219a2521e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6939"
    },
    {
        "IDcode": 6940,
        "title": "女体化してバニーガールになる",
        "cover": "https://telegra.ph/file/8ebe3b2a1ecfede3c60de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6940"
    },
    {
        "IDcode": 6941,
        "title": "丑三つボンバー",
        "cover": "https://telegra.ph/file/d5c8ba80bcef69a3d72ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6941"
    },
    {
        "IDcode": 6942,
        "title": "彼女は淫ストラクター",
        "cover": "https://telegra.ph/file/79e292f20b43ae65c9fa2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6942"
    },
    {
        "IDcode": 6943,
        "title": "告白。",
        "cover": "https://telegra.ph/file/aa0fb39e0d3ecbb809eba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6943"
    },
    {
        "IDcode": 6944,
        "title": "マジメな後輩にアニ研の俺が教えてやれるコト その",
        "cover": "https://telegra.ph/file/636d7cd0b024b8b4d1c2b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6944"
    },
    {
        "IDcode": 6945,
        "title": "使徒の雌",
        "cover": "https://telegra.ph/file/7ef1620d7e42b56cad26d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6945"
    },
    {
        "IDcode": 6946,
        "title": "ゆーこさんとあいざわくん",
        "cover": "https://telegra.ph/file/79c7d140bd6f366e6e28d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6946"
    },
    {
        "IDcode": 6947,
        "title": "栞のお仕事",
        "cover": "https://telegra.ph/file/bf3f075bc2d1b5e3f8657.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6947"
    },
    {
        "IDcode": 6948,
        "title": "淫魔のミカタ ～休日は、休む時間が無いのです",
        "cover": "https://telegra.ph/file/02fff26c5a83e25696482.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6948"
    },
    {
        "IDcode": 6949,
        "title": "コウカン",
        "cover": "https://telegra.ph/file/a079c527f6193578432c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6949"
    },
    {
        "IDcode": 6950,
        "title": "姉妹協定",
        "cover": "https://telegra.ph/file/72f68a95bb0c78bb88431.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6950"
    },
    {
        "IDcode": 6951,
        "title": "魔法少女メイと最期の夜",
        "cover": "https://telegra.ph/file/ab10ffa6655dd74338a1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6951"
    },
    {
        "IDcode": 6952,
        "title": "風俗妻香織",
        "cover": "https://telegra.ph/file/21ac679f84e55017ae1f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6952"
    },
    {
        "IDcode": 6953,
        "title": "雪の下で",
        "cover": "https://telegra.ph/file/e2ab6ff5285c4809d342b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6953"
    },
    {
        "IDcode": 6954,
        "title": "縛り縛られ絆されて",
        "cover": "https://telegra.ph/file/e0c66190da45ff1c25b36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6954"
    },
    {
        "IDcode": 6955,
        "title": "姦察実験室",
        "cover": "https://telegra.ph/file/ea4ad6f2252d555061801.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6955"
    },
    {
        "IDcode": 6956,
        "title": "デリバリー",
        "cover": "https://telegra.ph/file/7aff8a99a970ee7880a32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6956"
    },
    {
        "IDcode": 6957,
        "title": "smells like…",
        "cover": "https://telegra.ph/file/f14095836914cfcd19676.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6957"
    },
    {
        "IDcode": 6958,
        "title": "野菊のお墓",
        "cover": "https://telegra.ph/file/f54e937520338ad47b43a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6958"
    },
    {
        "IDcode": 6959,
        "title": "Life is a Battle field",
        "cover": "https://telegra.ph/file/4f76609966150578c65d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6959"
    },
    {
        "IDcode": 6960,
        "title": "ふぁみりあ",
        "cover": "https://telegra.ph/file/534382f031d9e8b9010a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6960"
    },
    {
        "IDcode": 6961,
        "title": "スクールリフレ",
        "cover": "https://telegra.ph/file/333ffd661cc046a0ac7dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6961"
    },
    {
        "IDcode": 6962,
        "title": "晒名読子は見られたい",
        "cover": "https://telegra.ph/file/2f28631f5ce9697150183.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6962"
    },
    {
        "IDcode": 6963,
        "title": "必殺エロかわ奥義!",
        "cover": "https://telegra.ph/file/4a72a3d827e3b5624108b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6963"
    },
    {
        "IDcode": 6964,
        "title": "姫の閨",
        "cover": "https://telegra.ph/file/aa2e5796e7fc42e246eab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6964"
    },
    {
        "IDcode": 6965,
        "title": "メリー子づくり！",
        "cover": "https://telegra.ph/file/5e7bdbb050975354b4b89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6965"
    },
    {
        "IDcode": 6966,
        "title": "援交配信こと生♥",
        "cover": "https://telegra.ph/file/d65c219a27e1bec1dc589.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6966"
    },
    {
        "IDcode": 6967,
        "title": "柚と竹彦の事情 1",
        "cover": "https://telegra.ph/file/6e2a53ebaf4a411f88645.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6967"
    },
    {
        "IDcode": 6968,
        "title": "子宮脱苗床SEX",
        "cover": "https://telegra.ph/file/67698cd48b0b9ee64d2dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6968"
    },
    {
        "IDcode": 6969,
        "title": "親はなくとも子は育つ",
        "cover": "https://telegra.ph/file/05df07e4da96194edc793.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6969"
    },
    {
        "IDcode": 6970,
        "title": "いいなり!- ポニテ委員長",
        "cover": "https://telegra.ph/file/9f09ed186b158768a727a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6970"
    },
    {
        "IDcode": 6971,
        "title": "すきっていって！",
        "cover": "https://telegra.ph/file/f9b80295ae8fbc295785c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6971"
    },
    {
        "IDcode": 6972,
        "title": "ひまつぶし",
        "cover": "https://telegra.ph/file/6995eb24f3801ab589141.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6972"
    },
    {
        "IDcode": 6973,
        "title": "日本エジプト説",
        "cover": "https://telegra.ph/file/e17e9c45458eb3c7113fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6973"
    },
    {
        "IDcode": 6974,
        "title": "淫魔のお誘い",
        "cover": "https://telegra.ph/file/ea5078a89771906f295d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6974"
    },
    {
        "IDcode": 6975,
        "title": "小悪魔ageまんっ♥",
        "cover": "https://telegra.ph/file/d10f77457a2ec7f17af9d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6975"
    },
    {
        "IDcode": 6976,
        "title": "あなたの香りに誘われて",
        "cover": "https://telegra.ph/file/f8dbff9084ad65d43e460.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6976"
    },
    {
        "IDcode": 6977,
        "title": "夜のチャンピオン",
        "cover": "https://telegra.ph/file/8e83482f093546cd694df.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6977"
    },
    {
        "IDcode": 6978,
        "title": "おじいちゃんだいきらい",
        "cover": "https://telegra.ph/file/37c1645d7e0c410ad04ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6978"
    },
    {
        "IDcode": 6979,
        "title": "さまーがーる",
        "cover": "https://telegra.ph/file/f46d013faf354956866a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6979"
    },
    {
        "IDcode": 6980,
        "title": "あい♡すくれーぱー つー",
        "cover": "https://telegra.ph/file/11d7389f0e7eebb45a488.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6980"
    },
    {
        "IDcode": 6981,
        "title": "長身の彼女",
        "cover": "https://telegra.ph/file/03172f3f8fd7df4b47311.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6981"
    },
    {
        "IDcode": 6982,
        "title": "デリバリーセックス",
        "cover": "https://telegra.ph/file/7808113ab0575ca376d59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6982"
    },
    {
        "IDcode": 6983,
        "title": "ホクトノゲンコ",
        "cover": "https://telegra.ph/file/97f19dce9614721b52fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6983"
    },
    {
        "IDcode": 6984,
        "title": "十六夜の月",
        "cover": "https://telegra.ph/file/3ff174c904b7dd022b454.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6984"
    },
    {
        "IDcode": 6985,
        "title": "思い出作り",
        "cover": "https://telegra.ph/file/19bf9b6aff3991d6fb527.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6985"
    },
    {
        "IDcode": 6986,
        "title": "密着エロ漫画家24時",
        "cover": "https://telegra.ph/file/9645497d999f32fac6b76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6986"
    },
    {
        "IDcode": 6987,
        "title": "ちょっと一杯",
        "cover": "https://telegra.ph/file/445b58682fe572d8c9624.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6987"
    },
    {
        "IDcode": 6988,
        "title": "シズクデレ",
        "cover": "https://telegra.ph/file/3312b26d40e9e2abba2bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6988"
    },
    {
        "IDcode": 6989,
        "title": "僕のお受験",
        "cover": "https://telegra.ph/file/bf02d3f478763b0cbba7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6989"
    },
    {
        "IDcode": 6990,
        "title": "おじさんとボク クリスマス編",
        "cover": "https://telegra.ph/file/f8f286aa0cc9b4c21e628.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6990"
    },
    {
        "IDcode": 6991,
        "title": "就活中に同級生と出会ったら…",
        "cover": "https://telegra.ph/file/86388bda378e1b7f0dc35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6991"
    },
    {
        "IDcode": 6992,
        "title": "押しかけ♥Lady",
        "cover": "https://telegra.ph/file/33f85d9bfa225f98fec39.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6992"
    },
    {
        "IDcode": 6993,
        "title": "恋心",
        "cover": "https://telegra.ph/file/5933a322ab3a1ce00afd6.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6993"
    },
    {
        "IDcode": 6994,
        "title": "亜人医療総合センターへようこそ",
        "cover": "https://telegra.ph/file/f54fffdad878281dd57a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6994"
    },
    {
        "IDcode": 6995,
        "title": "いいなりのすゝめ",
        "cover": "https://telegra.ph/file/fe722102bf197b8bce532.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6995"
    },
    {
        "IDcode": 6996,
        "title": "浜のおじさん!!",
        "cover": "https://telegra.ph/file/c97f60f699d33010d6f79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6996"
    },
    {
        "IDcode": 6997,
        "title": "ドワーフ娘調教記録",
        "cover": "https://telegra.ph/file/ff997a6602d97300665a3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6997"
    },
    {
        "IDcode": 6998,
        "title": "魅惑の鎖",
        "cover": "https://telegra.ph/file/68cbe07c5aec544975880.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6998"
    },
    {
        "IDcode": 6999,
        "title": "たまつきトランス",
        "cover": "https://telegra.ph/file/fe6a887813b401cd183b9.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6999"
    },
    {
        "IDcode": 7000,
        "title": "勇気をあげたい",
        "cover": "https://telegra.ph/file/867d4c269df88a09c5602.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7000"
    }
];
