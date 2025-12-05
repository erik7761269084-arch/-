// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 3403,
        "title": "[ゆうさりつかた (淡夢)] 後輩は小悪魔マ!?",
        "cover": "https://telegra.ph/file/cec383a1b4e0d4fa0696f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3403"
    },
    {
        "IDcode": 3404,
        "title": "[桜湯ハル] キラキラ 雑踏ツインテール (COMIC 真激 2022年1月号)",
        "cover": "https://telegra.ph/file/5ce2ced3a8b3df5f43bda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3404"
    },
    {
        "IDcode": 3405,
        "title": "[じゃじゅじょ (じょぶじゅん。)] ディオナの秘蜜のカクテル (原神)",
        "cover": "https://telegra.ph/file/46e1ffb0ce4048d3dab4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3405"
    },
    {
        "IDcode": 3406,
        "title": "[西安] まましか エクストラ (どこかの部屋で)",
        "cover": "https://telegra.ph/file/1cdc5ca6549892a8bd193.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3406"
    },
    {
        "IDcode": 3407,
        "title": "[タケ] 寄生樹",
        "cover": "https://telegra.ph/file/ba9a951e5b4224336aea1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3407"
    },
    {
        "IDcode": 3408,
        "title": "[青豆腐 (ねろましん)] 豊穣の隷属エルフ～王族母子調教姦編～",
        "cover": "https://telegra.ph/file/954d07d4e23c246ed83b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3408"
    },
    {
        "IDcode": 3409,
        "title": "(けもケット10) [回転ParaDOGs (水賀つくね)] すきものどうし",
        "cover": "https://telegra.ph/file/f90f6dd0f3bad86a5d0e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3409"
    },
    {
        "IDcode": 3410,
        "title": "[フェチズムポケット (伊藤ハチ)] 日向ちゃんと先生 (Flower of happiness)",
        "cover": "https://telegra.ph/file/3aae06d7c5660e26a7dbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3410"
    },
    {
        "IDcode": 3411,
        "title": "(C97) [CLUTCH SHOT KING (滑空)] 強制矯正プラクティス (スター☆トゥインクルプリキュア)",
        "cover": "https://telegra.ph/file/696ccbd15edb75d7df7b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3411"
    },
    {
        "IDcode": 3412,
        "title": "[Waage (shift)] 女児性愛矯正病棟 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/255e422519ce85fc6cdda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3412"
    },
    {
        "IDcode": 3413,
        "title": "(C99) [あめうさぎ (飴玉コン)] チノちゃんの可愛いところ見せて (ご注文はうさぎですか?)",
        "cover": "https://telegra.ph/file/ba3df1e30d3c99fd144dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3413"
    },
    {
        "IDcode": 3414,
        "title": "(C99) [ハチノコP (ハチゴ)] みこち催眠えっち本～幼児退行編～ (さくらみこ)",
        "cover": "https://telegra.ph/file/7884a5891ae3f655d228e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3414"
    },
    {
        "IDcode": 3415,
        "title": "(C92) [I am a Rock (杜山リルカ)] 排泄少女シリーズ アローラの少女たち (ポケットモンスター サン・ムーン)",
        "cover": "https://telegra.ph/file/6d345df7bc866703e35fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3415"
    },
    {
        "IDcode": 3416,
        "title": "[Story Circle (瀬戸こうへい、椎名悠輝)] TSっ娘男湯チャレンジ!",
        "cover": "https://telegra.ph/file/0e68e6ec9e225d09a5897.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3416"
    },
    {
        "IDcode": 3417,
        "title": "[あくあべる (ぴらそん)] 甘イロ魔女に紡がれて",
        "cover": "https://telegra.ph/file/542ed8d6532111c61d3ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3417"
    },
    {
        "IDcode": 3418,
        "title": "[佐々城九遠] 復讐! ナマイキ幼馴染JK (コミックマショウ 2022年1月号)",
        "cover": "https://telegra.ph/file/7ba8a359c41051c5b7224.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3418"
    },
    {
        "IDcode": 3419,
        "title": "(C99) [manymanyrain (雨暈郁太)] 逆夢の残り香 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/bf3eb24d7a47f6daef040.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3419"
    },
    {
        "IDcode": 3420,
        "title": "[楝蛙] 似た者どうし (COMIC 快楽天 2022年1月号)",
        "cover": "https://telegra.ph/file/c48721d6e269e997ac54f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3420"
    },
    {
        "IDcode": 3421,
        "title": "(C99) [ものくろサーキット (racer)] だって竜なので (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/23e107ab03752b7dd9f63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3421"
    },
    {
        "IDcode": 3422,
        "title": "(C99) [チャバシラチェーンソー (茶々らん)] この度ジャンヌと結婚しました (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/5e8d4a5ac562d673e5276.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3422"
    },
    {
        "IDcode": 3423,
        "title": "[ねこのおやしろ (ましゅー)] 戦乙女といくさごと!〜女聖騎士編〜",
        "cover": "https://telegra.ph/file/3d29f51cd27ebb5b82b34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3423"
    },
    {
        "IDcode": 3424,
        "title": "(C99) [あんみつよもぎ亭 (みちきんぐ)] 奥野田が精通上手で酔魔せん (東方Project)",
        "cover": "https://telegra.ph/file/b44e8b57bfc706833507b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3424"
    },
    {
        "IDcode": 3425,
        "title": "[Trick-color (桐井ナオ)] ホシの帰る場所 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/f2b6e769c7ec523b2733d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3425"
    },
    {
        "IDcode": 3426,
        "title": "[陸の孤島亭 (しゃよー)] 田舎にはこれくらいしか娯楽がない",
        "cover": "https://telegra.ph/file/c386712f585425d579b3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3426"
    },
    {
        "IDcode": 3427,
        "title": "(C99) [Kisaragi Nana] さーヴぁん☆トランスフォーム",
        "cover": "https://telegra.ph/file/d8c42ce6389a30d8dc867.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3427"
    },
    {
        "IDcode": 3428,
        "title": "[Clochette (咲良ゆき)] 梱包少女11",
        "cover": "https://telegra.ph/file/f199f1364057ce9bba33f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3428"
    },
    {
        "IDcode": 3429,
        "title": "[けれの帝国 (けれの)] 8才児とイチャラブちゅっちゅ犯罪えっちしてもいいよ",
        "cover": "https://telegra.ph/file/8a5ce3fe07471c42f4578.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3429"
    },
    {
        "IDcode": 3430,
        "title": "[春待氷柱 (名宵)] 闇に至る病",
        "cover": "https://telegra.ph/file/0c5106f2cee774ed58995.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3430"
    },
    {
        "IDcode": 3431,
        "title": "[てごめんたる (Zutta)] ゴブリンX女子高生X崩壊 格闘少女編",
        "cover": "https://telegra.ph/file/3e86249fa4d0cd9d44379.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3431"
    },
    {
        "IDcode": 3432,
        "title": "[SeaFox (霧咲白狐)] ふたなりバニ上と (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/8f86e9ce815a116f20ada.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3432"
    },
    {
        "IDcode": 3433,
        "title": "[ハムスターの煮込み (もつあき)] かっこつけてエロいことに興味ないフリしてたら俺のほうが先に好きだった幼馴染をエロ猿の友達に取られるお話",
        "cover": "https://telegra.ph/file/0f9b3f86c32fe175238c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3433"
    },
    {
        "IDcode": 3434,
        "title": "(C87) [チデヂ (オヤジ)] 虜姫のチャイカ (棺姫のチャイカ)",
        "cover": "https://telegra.ph/file/6963a138b5715b5b0cb75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3434"
    },
    {
        "IDcode": 3435,
        "title": "(C99) [もすきーと音。 (ぐれーともす)] 恋する大悪魔2 (ガヴリールドロップアウト)",
        "cover": "https://telegra.ph/file/efd2f1d39160cb9722851.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3435"
    },
    {
        "IDcode": 3436,
        "title": "[あずせ] 卒アルカメラマンとして一年間女子校のイベントへ同行することになった話 第1-16話",
        "cover": "https://telegra.ph/file/563b54719551096bfcbca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3436"
    },
    {
        "IDcode": 3437,
        "title": "[にぎりうさぎ] 心霊スポットに行ったらやっばいのが憑いたので根こそぎ吸い出してもらう・続【後編】",
        "cover": "https://telegra.ph/file/5e9aa38ec0b21f4fce398.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3437"
    },
    {
        "IDcode": 3438,
        "title": "(C97) [魔空軍団 (しのづかあつと)] 北斎ちゃんのジジョウ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/07e051c4e56474db338ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3438"
    },
    {
        "IDcode": 3439,
        "title": "[だらぶち堂 (だらぶち)] 摘マレタ異国ノ華IV",
        "cover": "https://telegra.ph/file/bfed6c1bb7bd23a8f0578.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3439"
    },
    {
        "IDcode": 3440,
        "title": "[Imitation Moon (成海優)] 黒の剣士と呼ばれた俺はもういない… (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/793d6853e75c1892edac7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3440"
    },
    {
        "IDcode": 3441,
        "title": "[もふもふ苑 (空色れん)] 水結様が騎乗位で…❤",
        "cover": "https://telegra.ph/file/add06acfcfd669d8d3aaf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3441"
    },
    {
        "IDcode": 3442,
        "title": "[妄想美術部 (しょーやん)] Beginning black 7",
        "cover": "https://telegra.ph/file/d4ccb7d2a63a97b259137.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3442"
    },
    {
        "IDcode": 3443,
        "title": "[ハメドラゴン] ボーナスコミュ#41 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/edf1b12e112a66360d69a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3443"
    },
    {
        "IDcode": 3444,
        "title": "Nyanners/Veibae | 鮭魚豆腐",
        "cover": "https://telegra.ph/file/531da1278bce51e6eb7e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3444"
    },
    {
        "IDcode": 3445,
        "title": "[ホムンクルス] サクラサク (COMIC 快楽天 2019年4月号)",
        "cover": "https://telegra.ph/file/d0bd9d351798ddc4319f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3445"
    },
    {
        "IDcode": 3446,
        "title": "[あとりえひなた (ひなた悠)] 補習授業部性活記録 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/8262ac07286e95944c176.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3446"
    },
    {
        "IDcode": 3447,
        "title": "[SHUKO] 超昂神騎エクシール ～双翼、魔悦調教～ THE COMIC 07 (二次元ドリームマガジン Vol.117)",
        "cover": "https://telegra.ph/file/c2e3829dd5346a411751c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3447"
    },
    {
        "IDcode": 3448,
        "title": "[あらくれた者たち (あらくれ)] 寝取られた人妻と寝取られる人妻3",
        "cover": "https://telegra.ph/file/929d87aefdffa87ae0379.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3448"
    },
    {
        "IDcode": 3449,
        "title": "(C95) [鳩小屋 (駿河りぬ)] もっとなでなでして (アズールレーン)",
        "cover": "https://telegra.ph/file/9f5a3ecfe7375895ff08b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3449"
    },
    {
        "IDcode": 3450,
        "title": "[ねどころみつき] ちえちゃんはずっとぼくのこいびと (コミックホットミルク 2022年2月号)",
        "cover": "https://telegra.ph/file/1cc19635603a74ee519f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3450"
    },
    {
        "IDcode": 3451,
        "title": "皮着",
        "cover": "https://telegra.ph/file/3b44dad57c4930e0e4697.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3451"
    },
    {
        "IDcode": 3452,
        "title": "[あとりえひなた (ひなた悠)] 補習授業部性活記録 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/72cbad228df4d91fda1f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3452"
    },
    {
        "IDcode": 3453,
        "title": "[HoneyRoad (Bee導師)] 配達バニーガール",
        "cover": "https://telegra.ph/file/8f1759c657e39570c1a9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3453"
    },
    {
        "IDcode": 3454,
        "title": "(C99) [HMA (日吉ハナ)] MVP (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/145f025339cc12da4a9e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3454"
    },
    {
        "IDcode": 3455,
        "title": "[むーもん] モナちゃんに会えない理由(妄想) (原神)",
        "cover": "https://telegra.ph/file/b7bdfbf08aa65baaa0689.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3455"
    },
    {
        "IDcode": 3456,
        "title": "[白夜PartⅡ (てんらい)] 敗北の後に (原神)",
        "cover": "https://telegra.ph/file/f6818143986cf466efb57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3456"
    },
    {
        "IDcode": 3457,
        "title": "(秋季例大祭8) [踏月 (ふみつき、えろつき)] パチュリー魔力搾乳開発 (東方Project)",
        "cover": "https://telegra.ph/file/29a7f59ea0d8a9903a511.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3457"
    },
    {
        "IDcode": 3458,
        "title": "[名仁川るい] 眼をそらさないでいて。(COMIC BAVEL 2022-02)",
        "cover": "https://telegra.ph/file/0d61451b9c5201b2a4177.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3458"
    },
    {
        "IDcode": 3459,
        "title": "[ほおぶくろっ! (ベコ太郎)] イトムスビ-瑞希アフターストーリー-",
        "cover": "https://telegra.ph/file/087269b9ecb52dd9ff382.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3459"
    },
    {
        "IDcode": 3460,
        "title": "[NB定食 (なぶぅ)] 舞と海そ",
        "cover": "https://telegra.ph/file/380a29de6b66e7cd2c782.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3460"
    },
    {
        "IDcode": 3461,
        "title": "[MK] Ecstasy Stage 01 - 30 (THE IDOLMSTER CINDERELLA GIRLS)[chinese][純情美嘉俏莉嘉]",
        "cover": "https://telegra.ph/file/6e22fc187d89409214969.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3461"
    },
    {
        "IDcode": 3462,
        "title": "[太阳下山了] 和瑶瑶一起共度万圣节",
        "cover": "https://telegra.ph/file/0e0a09ba59e5104589535.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3462"
    },
    {
        "IDcode": 3463,
        "title": "[丑露ムキ] あばら家のオンナノコたち (COMIC BAVEL 2022年1月号)",
        "cover": "https://telegra.ph/file/43f03d47cad670dc27d44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3463"
    },
    {
        "IDcode": 3464,
        "title": "[ほしとラッキー] 冬のある日 (COMIC 快楽天 2022年2月号)",
        "cover": "https://telegra.ph/file/09b3f43d1aba7c9b952a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3464"
    },
    {
        "IDcode": 3465,
        "title": "(C99) [紺色ドロップス (森島コン)] クソザコ勇者様と魔法使いさん",
        "cover": "https://telegra.ph/file/db0ec92e1679af6b2a5a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3465"
    },
    {
        "IDcode": 3466,
        "title": "[COUNTER-CENSORSHIP (オオカミうお)] 魔法つかい姪キュアっくす (魔法つかいプリキュア!)",
        "cover": "https://telegra.ph/file/de417a259c92feec2e981.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3466"
    },
    {
        "IDcode": 3467,
        "title": "[セブンデイズホリディ (篠川あるみ、古我望)] 姉の代わりに生意気な双子姉妹を再教育?",
        "cover": "https://telegra.ph/file/86d4ca8e20f05eb396fae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3467"
    },
    {
        "IDcode": 3468,
        "title": "[龍之咲 (全紅白子)] ザラの性福セット (アズールレーン)",
        "cover": "https://telegra.ph/file/eb3b8604c2acae0453314.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3468"
    },
    {
        "IDcode": 3469,
        "title": "[angelphobia (ともみみしもん)] ママソープ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/891f73532e41d4a44e838.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3469"
    },
    {
        "IDcode": 3470,
        "title": "(C99) [ナズナソフト (桂ハルフミ)] 頼光ママがこんなに○○だったなんて・・・ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/744d71a7659169ec4e8bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3470"
    },
    {
        "IDcode": 3471,
        "title": "[夏のおやつ] Incestism 第2話 (COMIC クリベロン DUMA 2022年1月号 Vol.32)",
        "cover": "https://telegra.ph/file/179f34310afdf28f8b16a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3471"
    },
    {
        "IDcode": 3472,
        "title": "[まめこ] 悪魔とのラブラブ共同性活 第1-7話",
        "cover": "https://telegra.ph/file/f738087948e8a52e38529.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3472"
    },
    {
        "IDcode": 3473,
        "title": "[ユキウサギ (雪国裕)] 銀セレH (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/3ab9c2dee88f6d008dc78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3473"
    },
    {
        "IDcode": 3474,
        "title": "[こまねすと (クックロビン)] DokiDokiラブリーこいしちゃん! (東方Project)",
        "cover": "https://telegra.ph/file/c999af683c1b753e15cc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3474"
    },
    {
        "IDcode": 3475,
        "title": "[雲呑めお] レンアイ化学式 (COMIC 快楽天 2022年1月号)",
        "cover": "https://telegra.ph/file/1b5034aedddda61190833.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3475"
    },
    {
        "IDcode": 3476,
        "title": "[PigPanPan (伊倉ナギサ)] 向かいの母娘",
        "cover": "https://telegra.ph/file/a556805982a053d8924f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3476"
    },
    {
        "IDcode": 3477,
        "title": "[黒越陽] となりの乙女さん (らぶぱい 私のおっぱい好きですか?)",
        "cover": "https://telegra.ph/file/c59902769e963c9a69022.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3477"
    },
    {
        "IDcode": 3478,
        "title": "[虎助遥人] ちちくり胸双曲 〜どっちもいいよね〜 (COMIC アンスリウム 2021年10月号)",
        "cover": "https://telegra.ph/file/96437f8335fb9b18dddc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3478"
    },
    {
        "IDcode": 3479,
        "title": "[みつ目のみつ豆 (よいころがし)] 私の娘を抱いて頂けませんか。",
        "cover": "https://telegra.ph/file/b59409d241778c7cb4c15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3479"
    },
    {
        "IDcode": 3480,
        "title": "[桂あいり] 「夫の部下にイかされちゃう…」抗えず感じてしまう不倫妻 7 -14",
        "cover": "https://telegra.ph/file/e00c46e79f88d524eaa3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3480"
    },
    {
        "IDcode": 3481,
        "title": "[榎屋 (eno)] ケッコン艦スケベ録 3.5 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/58de3fe131b8d16d799a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3481"
    },
    {
        "IDcode": 3482,
        "title": "(C99) [ちんちん亭 (chin)] 長乳・ママ八雲紫2 (東方Project)",
        "cover": "https://telegra.ph/file/e12144794fd2154a54062.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3482"
    },
    {
        "IDcode": 3483,
        "title": "[眼帯クリティカル (BeLu)] 自作の最強洗脳アプリで女の子達を僕専用肉人形にするお話",
        "cover": "https://telegra.ph/file/c990375338691554817f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3483"
    },
    {
        "IDcode": 3484,
        "title": "[夜ままごと] 性教育科が導入された直後のとある高校にて [無モザイク][中文機翻]",
        "cover": "https://telegra.ph/file/8d6e2a8aa1501b609f361.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3484"
    },
    {
        "IDcode": 3485,
        "title": "[MISS BLACK OFFLINE (MISS BLACK)] 情欲狂想組曲 第一楽章 Revival (アズールレーン)",
        "cover": "https://telegra.ph/file/80fe141bdf82a37b24338.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3485"
    },
    {
        "IDcode": 3486,
        "title": "[不可不可 (関谷あさみ)] C99おまけ本",
        "cover": "https://telegra.ph/file/a004b694d09dda2049c8d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3486"
    },
    {
        "IDcode": 3487,
        "title": "[ヒツジ企画 (むねしろ)] 乳侍 -チチサムライ‐ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/efb8c3af7e0f33c5ed15c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3487"
    },
    {
        "IDcode": 3488,
        "title": "[ぶじである] らこすりっぷ！ (COMIC LO 2021年12月号)",
        "cover": "https://telegra.ph/file/3a57c78e31ab0b4005a70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3488"
    },
    {
        "IDcode": 3489,
        "title": "[Jun] FEEL SO ASS ~運命、感じちゃった♥~ (COMIC天魔 2015年12月号)",
        "cover": "https://telegra.ph/file/733837b1e26e177a63244.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3489"
    },
    {
        "IDcode": 3490,
        "title": "[Come Through (あづみ一樹)] サキュバスデリバリーW",
        "cover": "https://telegra.ph/file/c3ad9a54c4a0772de8e17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3490"
    },
    {
        "IDcode": 3491,
        "title": "[大仕掛け (山家大右衛門)] 凪と颯とひたすらイチャイチャでラブラブなHをする本 (アイドルマスターシンデレラガールズ)",
        "cover": "https://telegra.ph/file/0f80744fd26b40e15499d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3491"
    },
    {
        "IDcode": 3492,
        "title": "[Ozaki]最後の作戦",
        "cover": "https://telegra.ph/file/fcec6d5ff4f23c242c0e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3492"
    },
    {
        "IDcode": 3493,
        "title": "[最果て空間 (緋乃ひの)] 情報料は体です! (無職転生 ～異世界行ったら本気だす～)",
        "cover": "https://telegra.ph/file/594f28bce1b36ced73f80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3493"
    },
    {
        "IDcode": 3494,
        "title": "[TSFのF (栗餅ちづる、星名めいと)] 復讐の果てに～御曹司が女体化されてバッドエンド～",
        "cover": "https://telegra.ph/file/e4319723b158e6990dc54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3494"
    },
    {
        "IDcode": 3495,
        "title": "[ジンギスカンの玉葱は俺の嫁 (谷口さん)] 君になる3.0～カーマ～ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/e7b72391a950938335449.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3495"
    },
    {
        "IDcode": 3496,
        "title": "[仁志田メガネ] 肉食オフ会妻 (コミック刺激的SQUIRT！！ Vol.27)",
        "cover": "https://telegra.ph/file/53f823820e4a545ab76e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3496"
    },
    {
        "IDcode": 3497,
        "title": "[まりも屋 (もりまりも)] ジャンヌ&マリースク水Hしまくる本 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/587ac80e3bd007efa7511.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3497"
    },
    {
        "IDcode": 3498,
        "title": "[ベルゼ]十二生肖辞旧迎新[栗子汉化]",
        "cover": "https://telegra.ph/file/c49b3a2f0a58fa9a94658.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3498"
    },
    {
        "IDcode": 3499,
        "title": "[らぼまじ! (武田あらのぶ)] えっちなお姉さんは、好きですか?2～隣のお姉さんと一週間同棲性活編～",
        "cover": "https://telegra.ph/file/bbd0dbf0b6279c811a706.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3499"
    },
    {
        "IDcode": 3500,
        "title": "[limit+ (モチヅキナノ)] 空くんとモナちゃんがひたすらイチャラブえっちするだけのうすいほん (原神)",
        "cover": "https://telegra.ph/file/1bf97c1f91de0eb05d1ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3500"
    },
    {
        "IDcode": 3501,
        "title": "(C93) [マシュマロ風船 (かゆみ止め)] 高雄ヲ籠絡セヨ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/b4f86d78911636f43b4e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3501"
    },
    {
        "IDcode": 3502,
        "title": "[イシダヤ] 悪母2～痴戯(アソビ)にハマるオンナタチ…!～",
        "cover": "https://telegra.ph/file/b62ee1a8d6af647f86f68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3502"
    }
];
