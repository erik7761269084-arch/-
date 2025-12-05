// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 2902,
        "title": "[雪咲みあれ] もっとヒドイのがいいの♡ (コミックホットミルク 2021年12月号)",
        "cover": "https://telegra.ph/file/0d758c9fde76720758ba0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2902"
    },
    {
        "IDcode": 2903,
        "title": "[いんとくいんふぉ (遠藤弘土)] 爆乳な風紀委員長は風紀がナニかわかってないっ!",
        "cover": "https://telegra.ph/file/1acf45e0293c561f859e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2903"
    },
    {
        "IDcode": 2904,
        "title": "[楠木りん] 先生はボクたちのもの (正義のヒロイン姦獄ファイルDX Vol.1)",
        "cover": "https://telegra.ph/file/b3ac6a595468062c954e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2904"
    },
    {
        "IDcode": 2905,
        "title": "[OKINA] 夜の孵る音",
        "cover": "https://telegra.ph/file/592d688281f6a1c99d09d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2905"
    },
    {
        "IDcode": 2906,
        "title": "[有間乃ユウキ] 鬼娘の愛棒 (COMIC 外楽 Vol.06)",
        "cover": "https://telegra.ph/file/df74bcb55c71d50416208.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2906"
    },
    {
        "IDcode": 2907,
        "title": "[ぽりうれたん]温泉[栗子汉化]",
        "cover": "https://telegra.ph/file/a6fa77d0f8ce4632e0d24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2907"
    },
    {
        "IDcode": 2908,
        "title": "[タコヤキロック] セイナルヨルニ (COMIC 快楽天ビースト 2022年1月号)",
        "cover": "https://telegra.ph/file/13be02f1fe7fcb345043b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2908"
    },
    {
        "IDcode": 2909,
        "title": "[てぃらみすたると (一弘)] スケベな娘の落とし方ドスケベなおばさんがシコんであげる",
        "cover": "https://telegra.ph/file/93284dceed47b2f674c45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2909"
    },
    {
        "IDcode": 2910,
        "title": "[ハーデス] 枝垂ほたるヤリマンビッチ墜ち～下巻～ (だがしかし)",
        "cover": "https://telegra.ph/file/e1b32edc15583a0ccd96f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2910"
    },
    {
        "IDcode": 2911,
        "title": "[ヴー博士] 援交する子ちゃん (見える子ちゃん)",
        "cover": "https://telegra.ph/file/76c6f417d289dff292222.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2911"
    },
    {
        "IDcode": 2912,
        "title": "[ツリサス] マノナニー (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/dc1a905977fb38f3abae6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2912"
    },
    {
        "IDcode": 2913,
        "title": "(C92) [じゃばら屋根 (坂井なゆ太)] 僕の前だけビッチな鈴谷姉ちゃん (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/98e144afb45e79f7b7aef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2913"
    },
    {
        "IDcode": 2914,
        "title": "[846号]【FGO】おねショタ漫画",
        "cover": "https://telegra.ph/file/cdf1aeeedcde00230880f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2914"
    },
    {
        "IDcode": 2915,
        "title": "[源五郎] 放課後なにしてるの? 第2話 (COMIC LO 2022年1月号)",
        "cover": "https://telegra.ph/file/d70de0c6dec1559c71a71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2915"
    },
    {
        "IDcode": 2916,
        "title": "[にぎりうさぎ] 陰キャのあたしに春がきた・続【中編】",
        "cover": "https://telegra.ph/file/6c7a4084afffc023e6a81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2916"
    },
    {
        "IDcode": 2917,
        "title": "[Neutron city (沢良宜)] 解放特区 学園性活2",
        "cover": "https://telegra.ph/file/ea7b5e876aa2dfd2027c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2917"
    },
    {
        "IDcode": 2918,
        "title": "(COMIC1☆14) [えのころくらげ (NOSA)] 気がついたらヤリサーにハメられていた話 (ラブライブ! サンシャイン!!)",
        "cover": "https://telegra.ph/file/6abbc0e68224b7e4f9700.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2918"
    },
    {
        "IDcode": 2919,
        "title": "[Free Style] 囚われのベッドルーム",
        "cover": "https://telegra.ph/file/28fae4940c84d0e8b9eee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2919"
    },
    {
        "IDcode": 2920,
        "title": "[悪転奏進 (黒糖ニッケ)] 山風ちゃんは愛が重いっ!!(艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/a6425ea47ad85f653121c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2920"
    },
    {
        "IDcode": 2921,
        "title": "[HG茶川] 夜姦進入 (ANGEL 倶楽部 2016年6月号)",
        "cover": "https://telegra.ph/file/5ab039cf281ed4eabb192.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2921"
    },
    {
        "IDcode": 2922,
        "title": "[亜美寿真] エッチなことは (COMIC 快楽天 2021年11月号)",
        "cover": "https://telegra.ph/file/ebbb853e7be0bd6dea4dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2922"
    },
    {
        "IDcode": 2923,
        "title": "[毒茸人] 故郷の珠婆様",
        "cover": "https://telegra.ph/file/1bae78b13f1b9828a1a64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2923"
    },
    {
        "IDcode": 2924,
        "title": "[花札さくらの] みのりちゃん家 その2 (COMIC BAVEL 2022年1月号)",
        "cover": "https://telegra.ph/file/558006aadc7764a0777c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2924"
    },
    {
        "IDcode": 2925,
        "title": "[BRLL] 魔物のごちそう (二次元コミックマガジン 弱体化陵辱 成り下がった雑魚ヒロインにヤりたい放題！Vol.2)",
        "cover": "https://telegra.ph/file/76eb1a97e67bf17116d67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2925"
    },
    {
        "IDcode": 2926,
        "title": "(C94) [大艦巨砲組 (あずさのりへー)] デリバリデイズ二日目→ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/f7ccc963f259cbbacdb2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2926"
    },
    {
        "IDcode": 2927,
        "title": "[純銀星 (たかしな浅妃)] 幼馴染で恋人の彼女とこたつでいちゃいちゃ",
        "cover": "https://telegra.ph/file/0cdb468b5fd9aa7498953.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2927"
    },
    {
        "IDcode": 2928,
        "title": "[ぽりうれたん]山中ドライブで意気投合[栗子汉化]",
        "cover": "https://telegra.ph/file/3038410271bf82d6888e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2928"
    },
    {
        "IDcode": 2929,
        "title": "(C96) [覇娘。 (猫耳花音)] 狗那国香澄の牝犬願望  [ページ欠落]",
        "cover": "https://telegra.ph/file/30548fdbe2f2c8b19ee34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2929"
    },
    {
        "IDcode": 2930,
        "title": "[俵緋龍] 熟メス♀",
        "cover": "https://telegra.ph/file/d5b6547abb62c1af15a3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2930"
    },
    {
        "IDcode": 2931,
        "title": "[ピンク作品置き場 (ピンク☆太郎)] 幼なじみがママとヤっています。6",
        "cover": "https://telegra.ph/file/536cc75064f6ddf87ab46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2931"
    },
    {
        "IDcode": 2932,
        "title": "[ratatatat74] 112021 reward  [流木个人汉化]",
        "cover": "https://telegra.ph/file/75eb96ec14000c5cad563.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2932"
    },
    {
        "IDcode": 2933,
        "title": "[むた] 魔法戦士☆スカキュア+(差分)",
        "cover": "https://telegra.ph/file/eb329b3d9d8a3587d7a9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2933"
    },
    {
        "IDcode": 2934,
        "title": "[もじゃりん] 撫子さんはNO!って言えない ほろ酔い撫子さん編 (WEEKLY快楽天 2021 No.33)",
        "cover": "https://telegra.ph/file/4b1857a597315de15835f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2934"
    },
    {
        "IDcode": 2935,
        "title": "[毒茸人] 故郷の珠婆様",
        "cover": "https://telegra.ph/file/d1325501c7f1269725eb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2935"
    },
    {
        "IDcode": 2936,
        "title": "[御家かえる] 王女さま大ピンチ! (異世界娘との交接)",
        "cover": "https://telegra.ph/file/2b3c3ab11298e7b77d406.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2936"
    },
    {
        "IDcode": 2937,
        "title": "[うさでん] お母さん、あたしの彼氏取らないで!2",
        "cover": "https://telegra.ph/file/89cad29659df1dc1f621c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2937"
    },
    {
        "IDcode": 2938,
        "title": "[琴義弓介] 母と姉と青い苺のフロマージュ 第3話 (豊乳4989)",
        "cover": "https://telegra.ph/file/ec73f7e6bbda0cb3de4a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2938"
    },
    {
        "IDcode": 2939,
        "title": "[さざれいと (大仲いと)] わたし…変えられちゃいました。―アラサーOLがヤリチン大学生達のチ○ポにドハマリするまで―",
        "cover": "https://telegra.ph/file/c53e6256081d97b924511.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2939"
    },
    {
        "IDcode": 2940,
        "title": "(コミティア138) [MochiPeach (桃豆こまもち)] 飼ってください、ご主人さま！",
        "cover": "https://telegra.ph/file/2fc7a4c9c183fa545d703.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2940"
    },
    {
        "IDcode": 2941,
        "title": "[じゃらや (森嶋プチ)] ネロ酔い (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/af068f2c364b5e15eebc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2941"
    },
    {
        "IDcode": 2942,
        "title": "[木静謙二] Intention #7 (コミックホットミルク濃いめ vol.26)",
        "cover": "https://telegra.ph/file/8aa2fc666dc8f3c0f000f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2942"
    },
    {
        "IDcode": 2943,
        "title": "月之仙人丿/soyincapazz（5745007） Patreon collection to 2021.10.31",
        "cover": "https://telegra.ph/file/bb44698ac7cd244546857.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2943"
    },
    {
        "IDcode": 2944,
        "title": "[滞空ワークス (滞空時間)] 強い子種を何度も求めるお母さんは好きですか (通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか?)",
        "cover": "https://telegra.ph/file/3927b50d306ec467ef450.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2944"
    },
    {
        "IDcode": 2945,
        "title": "[瓦爺] シスター・クレア 催眠中出し (シスター・クレア)",
        "cover": "https://telegra.ph/file/c6faafb7d8c185bdfbfa2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2945"
    },
    {
        "IDcode": 2946,
        "title": "[瓦爺] クレアさんとおうちデート (シスター・クレア)",
        "cover": "https://telegra.ph/file/ac94db1daf418f523bc99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2946"
    },
    {
        "IDcode": 2947,
        "title": "[リリックボックス (Blast)] もしも妻が他人に抱かれたら",
        "cover": "https://telegra.ph/file/bb76e807b2bfe5b1da416.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2947"
    },
    {
        "IDcode": 2948,
        "title": "[つなめぐり (夏生ツナオ)] ちぐはぐカノジョ",
        "cover": "https://telegra.ph/file/2e0e7efe188cc302a7974.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2948"
    },
    {
        "IDcode": 2949,
        "title": "[霜降りまぐろ] cr●ssi●k 配信部屋でお泊まりお仕置き百合えっち (白雪巴、健屋花那)",
        "cover": "https://telegra.ph/file/a4a3db54cbcb5d6b4f1b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2949"
    },
    {
        "IDcode": 2950,
        "title": "[Aki-AW] 剑鱼捕食水母珍贵影像 2 [中国语]",
        "cover": "https://telegra.ph/file/0945c7b480ce82dec4caa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2950"
    },
    {
        "IDcode": 2951,
        "title": "[あんこまん] 頼光＆酒吞、アストルフォと仲良くなる (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/283d47ee00219ab0a99b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2951"
    },
    {
        "IDcode": 2952,
        "title": "[NCP] めちゃくちゃエロい身体の世話好き幼なじみと、クール系巨乳美人同僚と俺ん家で3Pハーレム！? 2",
        "cover": "https://telegra.ph/file/5f3872bf39dedb9e56b43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2952"
    },
    {
        "IDcode": 2953,
        "title": "[いんとくいんふぉ (遠藤弘土)] 爆乳な剣道少女は竹刀より肉刀に打ち込まれたいっ♥",
        "cover": "https://telegra.ph/file/ac25df392c958867114d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2953"
    },
    {
        "IDcode": 2954,
        "title": "[栗餅ちづる] 容姿端麗な俺♂が痴漢にハマっちゃうお話",
        "cover": "https://telegra.ph/file/9c9076eb8d8839a504a8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2954"
    },
    {
        "IDcode": 2955,
        "title": "[ヘリを] ラストチャンス! (コミック エグゼ 34)",
        "cover": "https://telegra.ph/file/db00478fccb15769aafe0.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2955"
    },
    {
        "IDcode": 2956,
        "title": "[ぼんすけ] スカトロヘルス短編漫画 GoldHeaven #1 ~ #4  [進行中]",
        "cover": "https://telegra.ph/file/6a1e6d335b8bc9bc47fb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2956"
    },
    {
        "IDcode": 2957,
        "title": "[惑星的趣向 (ゆたかめ)] 異世界のママと僕",
        "cover": "https://telegra.ph/file/41e021fe18e856779314d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2957"
    },
    {
        "IDcode": 2958,
        "title": "[からももたると (きんだつ)] その性癖 見えてますよ？ (東方Project)",
        "cover": "https://telegra.ph/file/9bd563bcd229e3de1cf11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2958"
    },
    {
        "IDcode": 2959,
        "title": "(コミティア138) [TwinBox (花花捲、草草饅)] 君のことが好きだから",
        "cover": "https://telegra.ph/file/a29c783c86e8419d19795.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2959"
    },
    {
        "IDcode": 2960,
        "title": "[玉乃井ぺろめくり] 占い好きの女子は「イイことだけ信じる」って言いがち。 (COMIC LO 2019年2月号)",
        "cover": "https://telegra.ph/file/bd81a5ee16900f4009322.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2960"
    },
    {
        "IDcode": 2961,
        "title": "[綿120パーセント (めんようじゃん)] TastYui 3 (To LOVEる -とらぶる-)",
        "cover": "https://telegra.ph/file/48aec205a78c6ff09dc53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2961"
    },
    {
        "IDcode": 2962,
        "title": "(第2回ウルトラサマーフェスタ) [PLANT (鶴井)] 秋葉さまのプレゼント (月姫)",
        "cover": "https://telegra.ph/file/3d4b95dee4ddb03538f39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2962"
    },
    {
        "IDcode": 2963,
        "title": "[すりお] 乖乖接受調教成為人家的性玩具吶 (前篇)",
        "cover": "https://telegra.ph/file/b4ce9b88436efed10fc6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2963"
    },
    {
        "IDcode": 2964,
        "title": "[瀬奈阳太郎] 魔女とx魔とカワイイお弟子 [Creeper汉化组] [1-10+extre][完结]",
        "cover": "https://telegra.ph/file/a0e45d02cf8603302921e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2964"
    },
    {
        "IDcode": 2965,
        "title": "[右端] 夜の飛び方 (COMIC 快楽天ビースト 2021年12月号)",
        "cover": "https://telegra.ph/file/4e4cdfca81bd307ed6a4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2965"
    },
    {
        "IDcode": 2966,
        "title": "(C97) [ここのき屋 (ここのき奈緒)] キョウカイ。4",
        "cover": "https://telegra.ph/file/664731e1ea86758233334.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2966"
    },
    {
        "IDcode": 2967,
        "title": "[西沢みずき] 人妻の午後 (COMIC 失楽天 2022年1月号)",
        "cover": "https://telegra.ph/file/5a22ccf2231cb244b149a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2967"
    },
    {
        "IDcode": 2968,
        "title": "[TSF妄想蓄積所 (倉塚りこ)] 今日から俺がカノジョです！",
        "cover": "https://telegra.ph/file/d1c5f2a1028bdbd4f993e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2968"
    },
    {
        "IDcode": 2969,
        "title": "[Marialite (ふーか)] 正義の味方を堕とす方法",
        "cover": "https://telegra.ph/file/69fc4befa1b459ae8a965.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2969"
    },
    {
        "IDcode": 2970,
        "title": "[ヒキコモリスト]ゴブリン憑依～乗っ取られた女騎士～",
        "cover": "https://telegra.ph/file/fb7a3981c8f33a13974d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2970"
    },
    {
        "IDcode": 2971,
        "title": "[柊ぽぷら] 黒ギャルと肝試し(本番パート)",
        "cover": "https://telegra.ph/file/dd62cd3fc882de20865de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2971"
    },
    {
        "IDcode": 2972,
        "title": "[柊ぽぷら] 黒ギャルと肝試し(憑依パート)",
        "cover": "https://telegra.ph/file/6019b67588ea81387968d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2972"
    },
    {
        "IDcode": 2973,
        "title": "[柊ぽぷら] 黒ギャルと肝試し(後日談)",
        "cover": "https://telegra.ph/file/09c4fd1ea6ade24fcdc19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2973"
    },
    {
        "IDcode": 2974,
        "title": "[tsxy] 女性化兄から彼女を寝取っちゃえ!",
        "cover": "https://telegra.ph/file/15ba78594b3bce63e942e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2974"
    },
    {
        "IDcode": 2975,
        "title": "[H9] 罰と恋 (にょたいか！ものがたり)",
        "cover": "https://telegra.ph/file/77fc3140a20cda70f3dc4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2975"
    },
    {
        "IDcode": 2976,
        "title": "[さくらぷちろー] にょたなづま (にょたいか！ものがたり)",
        "cover": "https://telegra.ph/file/2a104d1f713fd7f3732c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2976"
    },
    {
        "IDcode": 2977,
        "title": "[きつね長官] 勇者と!! (にょたいか！ものがたり)",
        "cover": "https://telegra.ph/file/b0f066d53623ccb14dcd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2977"
    },
    {
        "IDcode": 2978,
        "title": "[いわした書店 (いわした)] 皮化ナイフ Shine！",
        "cover": "https://telegra.ph/file/db1751711aa3340df91a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2978"
    },
    {
        "IDcode": 2979,
        "title": "[L.P.E.G. (まる寝子)] 皮専門ショップ 後編",
        "cover": "https://telegra.ph/file/acc39256136a4255e0c77.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2979"
    },
    {
        "IDcode": 2980,
        "title": "[久我繭莉] たくさんのいっかい",
        "cover": "https://telegra.ph/file/f388c6198a61c1d35b028.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2980"
    },
    {
        "IDcode": 2981,
        "title": "【fanbox】ナベシキ",
        "cover": "https://telegra.ph/file/1479906da3a3c04a820f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2981"
    },
    {
        "IDcode": 2982,
        "title": "[たぶちさんち (たぶち)] 夏休みだから無抵抗ないとこにチ●ンコ入れる話",
        "cover": "https://telegra.ph/file/08fb4a87369e054d38f41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2982"
    },
    {
        "IDcode": 2983,
        "title": "[かしこ村 (かしこあきら)] 融合洗脳蟲 柚子はとっくに洗脳され寝取られてました編 (遊☆戯☆王ARC-V)",
        "cover": "https://telegra.ph/file/12f4e397b80803556b0b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2983"
    },
    {
        "IDcode": 2984,
        "title": "[Makin (Makin)] ふたなりフランちゃんが霊夢を調教する漫画｜扶她芙蘭調教靈夢的漫畫 (東方Project) [Kokodone個人翻譯]",
        "cover": "https://telegra.ph/file/cdfb4a8c4f0db6c7c1576.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2984"
    },
    {
        "IDcode": 2985,
        "title": "[Yanje] ブレマートン (アズールレーン)",
        "cover": "https://telegra.ph/file/ea91e4006900f8a9de8fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2985"
    },
    {
        "IDcode": 2986,
        "title": "[もふ屋 (明日葉もふ)] 純潔彼女が堕ちていくまで‐処女喪失編",
        "cover": "https://telegra.ph/file/2dab4c5b23882b0b76ace.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2986"
    },
    {
        "IDcode": 2987,
        "title": "[nyx]boruto‘s birthday clash（naruto）（流木个人汉化）",
        "cover": "https://telegra.ph/file/67c4889782be157477c29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2987"
    },
    {
        "IDcode": 2988,
        "title": "[kakao] メタモルフォーゼ (COMIC 快楽天ビースト 2021年10月号)",
        "cover": "https://telegra.ph/file/220ce9881cd2f0d97c460.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2988"
    },
    {
        "IDcode": 2989,
        "title": "[澱みどろ] お憑かれ少女とくすぐり厄落とし",
        "cover": "https://telegra.ph/file/f43c9171bdeaf364569ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2989"
    },
    {
        "IDcode": 2990,
        "title": "[kakao] パーフェクトガール? (COMIC 快楽天ビースト 2021年11月号)",
        "cover": "https://telegra.ph/file/8357970680bf1c6fe3e9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2990"
    },
    {
        "IDcode": 2991,
        "title": "[筆鍋 (筆禍)] 実録!本当にあったVRChatのえっちな話",
        "cover": "https://telegra.ph/file/e6b1267c353496d410656.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2991"
    },
    {
        "IDcode": 2992,
        "title": "[Duokuma] 楽しい入院生活",
        "cover": "https://telegra.ph/file/b12431a947c44c95088b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2992"
    },
    {
        "IDcode": 2993,
        "title": "[越後屋タケル] 双子コンプレックス (コミック アンスリウム 2021年8月号)",
        "cover": "https://telegra.ph/file/db2d1c72521224d0f19e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2993"
    },
    {
        "IDcode": 2994,
        "title": "[海老名えび] 女体化パンデミック！！ 〜パパ活編〜(コミックアンリアル 2021年8月号 Vol.92)",
        "cover": "https://telegra.ph/file/b0538621740c1d10dad27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2994"
    },
    {
        "IDcode": 2995,
        "title": "[古事式 (古事タカイチ)] 異世界に行こうと思ったら女の子になった件",
        "cover": "https://telegra.ph/file/d0add7903f16d3793fb7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2995"
    },
    {
        "IDcode": 2996,
        "title": "[桐下悠司] TSインモラル 前編 (コミックアンリアル 2021年8月号 Vol.92)",
        "cover": "https://telegra.ph/file/48afff19dda9cb4cf5c34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2996"
    },
    {
        "IDcode": 2997,
        "title": "[ちろたた] 皮り皮って 第4話 (コミックアンリアル 2021年8月号 Vol.92)",
        "cover": "https://telegra.ph/file/3d6fee99e815d024d4185.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2997"
    },
    {
        "IDcode": 2998,
        "title": "[華フック] 母親失格・私と息子のメス豚寝取られ復讐劇",
        "cover": "https://telegra.ph/file/5573de825c4fa3fda7f85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2998"
    },
    {
        "IDcode": 2999,
        "title": "[いぬくりぃむ (いぬくりぃむあいす)] スライム化したボクと乗っ取りごくごく女体化たいけん",
        "cover": "https://telegra.ph/file/c74a5baa5dd591d624ce2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2999"
    },
    {
        "IDcode": 3000,
        "title": "[ちょくばす] 嫌いな同級生が意中の彼女に憑依した",
        "cover": "https://telegra.ph/file/33981ac88509c59d67d41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3000"
    }
];
