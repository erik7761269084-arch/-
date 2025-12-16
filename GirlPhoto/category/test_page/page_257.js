// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 47772,
        "title": "Christina Fink - Hermione - Page 1",
        "cover": "https://telegra.ph/file/546461c4ae1d1480af408.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47772",
        "pageSeq": 47772
    },
    {
        "IDcode": 47773,
        "title": "[Rocksylight] Illya (Fate/kaleid liner Prisma Illya) - Page 1",
        "cover": "https://telegra.ph/file/353cfed6ff45f8e400494.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47773",
        "pageSeq": 47773
    },
    {
        "IDcode": 47774,
        "title": "Kato as Babydoll - Page 1",
        "cover": "https://telegra.ph/file/0fec934a1f5304a863181.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47774",
        "pageSeq": 47774
    },
    {
        "IDcode": 47775,
        "title": "(C94) [尊みを感じて桜井] 愛宕お姉さんが本気でお熱いお仕置きしちゃおうかしら？ - Page 1",
        "cover": "https://telegra.ph/file/ad2271a7f007e6ff9792f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47775",
        "pageSeq": 47775
    },
    {
        "IDcode": 47776,
        "title": "[Vandych] Star Guardian Soraka by Alina Latypova - Page 1",
        "cover": "https://telegra.ph/file/3b96a31e73b5ad97c9de3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47776",
        "pageSeq": 47776
    },
    {
        "IDcode": 47777,
        "title": "[Vandych] Battle Bunny Riven by Alina Latypova - Page 1",
        "cover": "https://telegra.ph/file/194d436296d314de3897a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47777",
        "pageSeq": 47777
    },
    {
        "IDcode": 47778,
        "title": "[傲娇黑兔/喵呜少女]アビゲイル・ウィリアムズ - Page 1",
        "cover": "https://telegra.ph/file/2e5f75d736b54b3c7f011.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47778",
        "pageSeq": 47778
    },
    {
        "IDcode": 47779,
        "title": "Sabrina the Bunny as Dragonmaid Tohru - Page 1",
        "cover": "https://telegra.ph/file/010dd9909b4972f7c8aca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47779",
        "pageSeq": 47779
    },
    {
        "IDcode": 47780,
        "title": "[Vandych] Star Guardian Lux by Alina Latypova - Page 1",
        "cover": "https://telegra.ph/file/bb09fbb5199c3b1d7b49f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47780",
        "pageSeq": 47780
    },
    {
        "IDcode": 47781,
        "title": "Love Live! AV图片合集 2 - Page 1",
        "cover": "https://telegra.ph/file/8190d183d7461b484cd2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47781",
        "pageSeq": 47781
    },
    {
        "IDcode": 47782,
        "title": "Love Live! AV图片合集 1 - Page 1",
        "cover": "https://telegra.ph/file/53dbd14f3fa26a8cabc65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47782",
        "pageSeq": 47782
    },
    {
        "IDcode": 47783,
        "title": "[Vandych] Black Cat & Mary Jane - Page 1",
        "cover": "https://telegra.ph/file/737bf8ac867788cf42c0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47783",
        "pageSeq": 47783
    },
    {
        "IDcode": 47784,
        "title": "[Vandych] Zatanna - Page 1",
        "cover": "https://telegra.ph/file/ee83d102cb03c24ca2797.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47784",
        "pageSeq": 47784
    },
    {
        "IDcode": 47785,
        "title": "Katyuska Moonfox - 2B - Page 1",
        "cover": "https://telegra.ph/file/d745ad3a3b21d402623f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47785",
        "pageSeq": 47785
    },
    {
        "IDcode": 47786,
        "title": "Hana Bunny - Azurlane Takao - Page 1",
        "cover": "https://telegra.ph/file/6342ef8e2b0f045f27d56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47786",
        "pageSeq": 47786
    },
    {
        "IDcode": 47787,
        "title": "Hana Bunny - Akeno - Page 1",
        "cover": "https://telegra.ph/file/95869c401c73040dc3743.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47787",
        "pageSeq": 47787
    },
    {
        "IDcode": 47788,
        "title": "[Ely] TamamoE NEro - Page 1",
        "cover": "https://telegra.ph/file/53ca6e1a7e57d0b435f38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47788",
        "pageSeq": 47788
    },
    {
        "IDcode": 47789,
        "title": "[森萝财团]爱花写真-ALPHA-004 机巧少女夜夜 - Page 1",
        "cover": "https://telegra.ph/file/5170685cc5aa88e3bb892.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47789",
        "pageSeq": 47789
    },
    {
        "IDcode": 47790,
        "title": "[Ely] AlternativE & MAID CONCEPT - Page 1",
        "cover": "https://telegra.ph/file/31190f009f392a05218a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47790",
        "pageSeq": 47790
    },
    {
        "IDcode": 47791,
        "title": "【少女映畫】Serval | 藪猫(Kemono Friends) - Page 1",
        "cover": "https://telegra.ph/file/b6175e0307e0ae7bca80a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47791",
        "pageSeq": 47791
    },
    {
        "IDcode": 47792,
        "title": "[水無月みり] ごめんなさい、私っていけない子なの。【DL版】 - Page 1",
        "cover": "https://telegra.ph/file/c2aa956c627f26498ad42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47792",
        "pageSeq": 47792
    },
    {
        "IDcode": 47793,
        "title": "朧 - Page 1",
        "cover": "https://telegra.ph/file/ce381a8aa85d9df63a467.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47793",
        "pageSeq": 47793
    },
    {
        "IDcode": 47794,
        "title": "My suite Prinz eugen Cosplay - Page 1",
        "cover": "https://telegra.ph/file/82cfd371d2f197705068f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47794",
        "pageSeq": 47794
    },
    {
        "IDcode": 47795,
        "title": "[Heru3(lenfried)] れんふりの撮影会体験版 - Page 1",
        "cover": "https://telegra.ph/file/52aa3adcd063993d036ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47795",
        "pageSeq": 47795
    },
    {
        "IDcode": 47796,
        "title": "[水無月みり] プリズマ サマータイム - Page 1",
        "cover": "https://telegra.ph/file/c51d8f04e468d76a2a658.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47796",
        "pageSeq": 47796
    },
    {
        "IDcode": 47797,
        "title": "[水無月みり] 令呪をもって命ずる ２ - Page 1",
        "cover": "https://telegra.ph/file/dec7d18b7f1bb217255b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47797",
        "pageSeq": 47797
    },
    {
        "IDcode": 47798,
        "title": "[Vandych] Ms Marvel by Helly von Valentine - Page 1",
        "cover": "https://telegra.ph/file/104db7821f3573753545f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47798",
        "pageSeq": 47798
    },
    {
        "IDcode": 47799,
        "title": "[Vandych] Exia - Tera Online by Alina Latypova - Page 1",
        "cover": "https://telegra.ph/file/feee65c9ec8bb9fe9a100.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47799",
        "pageSeq": 47799
    },
    {
        "IDcode": 47800,
        "title": "[Vandych] D.Va by Alina Latypova - Page 1",
        "cover": "https://telegra.ph/file/f926f856ae88595f54ef0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47800",
        "pageSeq": 47800
    },
    {
        "IDcode": 47801,
        "title": "きょう肉肉(nikumikyo) - きょう肉肉vol.７ メイド服 レムcosplay (動画入り) - Page 1",
        "cover": "https://telegra.ph/file/243fd4bd31de2b987283c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47801",
        "pageSeq": 47801
    },
    {
        "IDcode": 47802,
        "title": "【２０１７冬の新刊】Flower of bravery (ダウンロード版) - Page 1",
        "cover": "https://telegra.ph/file/db125eadede2dad6a6e0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47802",
        "pageSeq": 47802
    },
    {
        "IDcode": 47803,
        "title": "Katyuska - Tifa - Page 1",
        "cover": "https://telegra.ph/file/45e8784c09733e31ab67f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47803",
        "pageSeq": 47803
    },
    {
        "IDcode": 47804,
        "title": "[HERESY (林檎蜜紀)] Help me, ERINNNNGO!! - Page 1",
        "cover": "https://telegra.ph/file/656172408637dd43eee54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47804",
        "pageSeq": 47804
    },
    {
        "IDcode": 47805,
        "title": "Azur Lane Zeppelin cosplay by 枣糕-下野病弃疗 - Page 1",
        "cover": "https://telegra.ph/file/c71f22fee349417294d11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47805",
        "pageSeq": 47805
    },
    {
        "IDcode": 47806,
        "title": "[软萌萝莉小仙]Izumi Sagiri - Page 1",
        "cover": "https://telegra.ph/file/0b7faa136354b9a083639.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47806",
        "pageSeq": 47806
    },
    {
        "IDcode": 47807,
        "title": "Tenleid ー Camilla Shower - Page 1",
        "cover": "https://telegra.ph/file/3c30577eccd8a12c772e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47807",
        "pageSeq": 47807
    },
    {
        "IDcode": 47808,
        "title": "[小丁.COSPLAY] 楪いのり（ギルティクラウン／GUILTY CROWN） - Page 1",
        "cover": "https://telegra.ph/file/26007db6f2a2a632ce3db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47808",
        "pageSeq": 47808
    },
    {
        "IDcode": 47809,
        "title": "Shae ー Artoria Pendragon - Page 1",
        "cover": "https://telegra.ph/file/10a84e7f7952024643e8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47809",
        "pageSeq": 47809
    },
    {
        "IDcode": 47810,
        "title": "[みさ呆呆(みさだいだい)] Vtuber キズ○アイ - Page 1",
        "cover": "https://telegra.ph/file/374635fbb7f741dc77cdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47810",
        "pageSeq": 47810
    },
    {
        "IDcode": 47811,
        "title": "Hana Bunny Cosplay - Page 1",
        "cover": "https://telegra.ph/file/491f3e2364809c06b2ac1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47811",
        "pageSeq": 47811
    },
    {
        "IDcode": 47812,
        "title": "Hana Bunny Cosplay - Page 2",
        "cover": "https://telegra.ph/file/e44a8ca27e95668ab38f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47812",
        "pageSeq": 47812
    },
    {
        "IDcode": 47813,
        "title": "[雨波] 伊斯塔 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/1050982aab6cb40a85e8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47813",
        "pageSeq": 47813
    },
    {
        "IDcode": 47814,
        "title": "[桃色れく]監獄学園ROM６ 新婚初夜＋街デート - Page 1",
        "cover": "https://telegra.ph/file/69059f109b4e3b4e94c30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47814",
        "pageSeq": 47814
    },
    {
        "IDcode": 47815,
        "title": "Usatame ー Zero Two - Page 1",
        "cover": "https://telegra.ph/file/9098dd9bac7ffe4b4d0d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47815",
        "pageSeq": 47815
    },
    {
        "IDcode": 47816,
        "title": "[日奈森果]阿斯托尔福 | アストルフォ - Page 1",
        "cover": "https://telegra.ph/file/a603bd0544883abfa1457.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47816",
        "pageSeq": 47816
    },
    {
        "IDcode": 47817,
        "title": "【少女映畫】澤村・スペンサー・英梨々 - Page 1",
        "cover": "https://telegra.ph/file/0613931d7873301d0f7c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47817",
        "pageSeq": 47817
    },
    {
        "IDcode": 47818,
        "title": "Hidori Rose ー Kyoko Kirigiri - Page 1",
        "cover": "https://telegra.ph/file/519c7e77592b72391e6f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47818",
        "pageSeq": 47818
    },
    {
        "IDcode": 47819,
        "title": "Amy Fantasy ー Hinata - Page 1",
        "cover": "https://telegra.ph/file/4d7c1e31f3c71fa2d60af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47819",
        "pageSeq": 47819
    },
    {
        "IDcode": 47820,
        "title": "Invadernoodles ー Hinata - Page 1",
        "cover": "https://telegra.ph/file/ba04fea80d47fe3e4f1fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47820",
        "pageSeq": 47820
    },
    {
        "IDcode": 47821,
        "title": "April Hylia ー Misty - Page 1",
        "cover": "https://telegra.ph/file/9f50b1045db85ddc185df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47821",
        "pageSeq": 47821
    },
    {
        "IDcode": 47822,
        "title": "Tenleid ー Makoto Niijima - Page 1",
        "cover": "https://telegra.ph/file/934700c23257be5b74d96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47822",
        "pageSeq": 47822
    },
    {
        "IDcode": 47823,
        "title": "Akagi Kuro cosplay - Page 1",
        "cover": "https://telegra.ph/file/78de3499f08df625cb4f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47823",
        "pageSeq": 47823
    },
    {
        "IDcode": 47824,
        "title": "Akagi Kuro cosplay - Page 2",
        "cover": "https://telegra.ph/file/c78cdb05c4363ac7dce91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47824",
        "pageSeq": 47824
    },
    {
        "IDcode": 47825,
        "title": "ネメシス様の下僕の心得 - Page 1",
        "cover": "https://telegra.ph/file/aa0666f17ac77de746d01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47825",
        "pageSeq": 47825
    },
    {
        "IDcode": 47826,
        "title": "[Hidori Rose] Hinata Hyuga (Naruto) - Page 1",
        "cover": "https://telegra.ph/file/25a09178ed2ea842e8ee1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47826",
        "pageSeq": 47826
    },
    {
        "IDcode": 47827,
        "title": "Hidori – Hatsune Miku - Page 1",
        "cover": "https://telegra.ph/file/fca7dfeef4b3ef0db3526.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47827",
        "pageSeq": 47827
    },
    {
        "IDcode": 47828,
        "title": "[日暮企画 (日暮りん)] 驚きました、おちんちんに関しては満点です。 (Re:ゼロから始める異世界生活) - Page 1",
        "cover": "https://telegra.ph/file/42d1b830c5a1ca13d1dbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47828",
        "pageSeq": 47828
    },
    {
        "IDcode": 47829,
        "title": "[Nikumikyo] Kanna Cosplay - Page 1",
        "cover": "https://telegra.ph/file/7133243c492ffa388f86a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47829",
        "pageSeq": 47829
    },
    {
        "IDcode": 47830,
        "title": "きょう肉肉vol.5 ミコ(動画入り) - Page 1",
        "cover": "https://telegra.ph/file/47f8cd071cde54e4fc669.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47830",
        "pageSeq": 47830
    },
    {
        "IDcode": 47831,
        "title": "【DL版】酔いどれ旅行記 ～湯けむり旅情編～ - Page 1",
        "cover": "https://telegra.ph/file/77ad0d20d51daa099b22b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47831",
        "pageSeq": 47831
    },
    {
        "IDcode": 47832,
        "title": "[Nagesa魔物喵]Super Sonico - Page 1",
        "cover": "https://telegra.ph/file/565feb1aba3d848f2dbd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47832",
        "pageSeq": 47832
    },
    {
        "IDcode": 47833,
        "title": "Black Cat (cosplay animations + snapshot) - Page 1",
        "cover": "https://telegra.ph/file/bf5e066650033d1f44ace.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47833",
        "pageSeq": 47833
    },
    {
        "IDcode": 47834,
        "title": "Hidori Rose - Kanna Kamui - Page 1",
        "cover": "https://telegra.ph/file/5591b0b579f9c2058566a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47834",
        "pageSeq": 47834
    },
    {
        "IDcode": 47835,
        "title": "[喵呜少女]泉纱雾 - Page 1",
        "cover": "https://telegra.ph/file/f2083518ec1a0706702fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47835",
        "pageSeq": 47835
    },
    {
        "IDcode": 47836,
        "title": "[BoLoli]波萝社新刊 2018-02-13 Vol.134 夏美酱 - Page 1",
        "cover": "https://telegra.ph/file/9c689ce03200ac569c98c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47836",
        "pageSeq": 47836
    },
    {
        "IDcode": 47837,
        "title": "Arty Cosplay Collection I - Page 1",
        "cover": "https://telegra.ph/file/7f323d6c4edd023d447c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47837",
        "pageSeq": 47837
    },
    {
        "IDcode": 47838,
        "title": "Veronika Black - Page 1",
        "cover": "https://telegra.ph/file/faa6984f7128bc367b808.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47838",
        "pageSeq": 47838
    },
    {
        "IDcode": 47839,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 過去最高の極上フェラテク１８歳美少女レイヤー 性処理便女ドＭ調教記録 ＦＧ〇モーさん[フェラのセイバー] - Page 1",
        "cover": "https://telegra.ph/file/2f1deb7db549423914790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47839",
        "pageSeq": 47839
    },
    {
        "IDcode": 47840,
        "title": "Katyuska MoonFox as Meiko Shiraki from Prison School - Page 1",
        "cover": "https://telegra.ph/file/82967bca256375c3bc8f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47840",
        "pageSeq": 47840
    },
    {
        "IDcode": 47841,
        "title": "[森萝财团]SSR-006 Sora Kasugano - Page 1",
        "cover": "https://telegra.ph/file/1cc28f1f7f8e52cdcf5d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47841",
        "pageSeq": 47841
    },
    {
        "IDcode": 47842,
        "title": "[一只肉酱阿]蕾姆 - Page 1",
        "cover": "https://telegra.ph/file/0bf9b1e173b6054b30a96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47842",
        "pageSeq": 47842
    },
    {
        "IDcode": 47843,
        "title": "喵呜少女 Cos 阴阳师 神乐 - Page 1",
        "cover": "https://telegra.ph/file/deb48855a2790e660d19b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47843",
        "pageSeq": 47843
    },
    {
        "IDcode": 47844,
        "title": "Mordred Pendragon Cosplay Collection - Page 1",
        "cover": "https://telegra.ph/file/417c18be8b4355db8931a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47844",
        "pageSeq": 47844
    },
    {
        "IDcode": 47845,
        "title": "きょう肉肉vol.4 Honoka水着ver. - Page 1",
        "cover": "https://telegra.ph/file/0ebdb49e06966f48eb1d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47845",
        "pageSeq": 47845
    },
    {
        "IDcode": 47846,
        "title": "マスターだってクロちゃんと魔力供給がしたいっ！ - Page 1",
        "cover": "https://telegra.ph/file/ea639e350f469d86c92fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47846",
        "pageSeq": 47846
    },
    {
        "IDcode": 47847,
        "title": "[my suite] Suite Grand Order - Page 1",
        "cover": "https://telegra.ph/file/5af41af3f0e14814002b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47847",
        "pageSeq": 47847
    },
    {
        "IDcode": 47848,
        "title": "【少女映畫】Onmyoji--Aoandon - Page 1",
        "cover": "https://telegra.ph/file/d0f4a5aa20f633ed0f864.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47848",
        "pageSeq": 47848
    },
    {
        "IDcode": 47849,
        "title": "[喵呜少女]拉姆 - Page 1",
        "cover": "https://telegra.ph/file/e9df114862ffa6f8a3610.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47849",
        "pageSeq": 47849
    },
    {
        "IDcode": 47850,
        "title": "[小小小丁] K2 [少女前线] - Page 1",
        "cover": "https://telegra.ph/file/adff15f1ae171afd5ba2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47850",
        "pageSeq": 47850
    },
    {
        "IDcode": 47851,
        "title": "GANTZ cosplay by@一罐儿一 - Page 1",
        "cover": "https://telegra.ph/file/aba88d0caae80e673d2fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47851",
        "pageSeq": 47851
    },
    {
        "IDcode": 47852,
        "title": "[在下萝莉控ii] MAOU NO.001 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/4b7b5102cdf041e63990b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47852",
        "pageSeq": 47852
    },
    {
        "IDcode": 47853,
        "title": "[my suite] SUITE WHIP GIRL(競女!!!!!!!!) - Page 1",
        "cover": "https://telegra.ph/file/5812170fa7caf1c447ef4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47853",
        "pageSeq": 47853
    },
    {
        "IDcode": 47854,
        "title": "Hana Bunny – Jeanne Alter - Page 1",
        "cover": "https://telegra.ph/file/96657b6a59ebb0e7cc3db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47854",
        "pageSeq": 47854
    },
    {
        "IDcode": 47855,
        "title": "(C93) [Shooting Star's (サク)] SSChannel (Fate/EXTRA CCC、Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/9278714ab13fc94cfb609.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47855",
        "pageSeq": 47855
    },
    {
        "IDcode": 47856,
        "title": "(C93) [Sweet sweetS＆Krouge (姫宮まほれ、倉坂くるる)] #まほくる3 プリズマ☆ツインズ! (Fate/kaleid liner プリズマ☆イリヤ) - Page 1",
        "cover": "https://telegra.ph/file/c53d9fc8c16f8765c8dcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47856",
        "pageSeq": 47856
    },
    {
        "IDcode": 47857,
        "title": "(C93) [Shooting Star's (Saku)] Blue tone - Page 1",
        "cover": "https://telegra.ph/file/5bbb7e083f4c1c0b76583.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47857",
        "pageSeq": 47857
    },
    {
        "IDcode": 47858,
        "title": "[雨波] 酒吞童子 - Page 1",
        "cover": "https://telegra.ph/file/58331393cccd0b10bad83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47858",
        "pageSeq": 47858
    },
    {
        "IDcode": 47859,
        "title": "(C92) [Shooting Star's (サク)] Shadow Queen (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/b1508954011a35fe12384.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47859",
        "pageSeq": 47859
    },
    {
        "IDcode": 47860,
        "title": "【少女映畫】时崎狂三睡衣 - Page 1",
        "cover": "https://telegra.ph/file/7c2f45bd9077f1140ae90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47860",
        "pageSeq": 47860
    },
    {
        "IDcode": 47861,
        "title": "hana bunny cosplay - Page 1",
        "cover": "https://telegra.ph/file/cab32467352cd8d79a98d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47861",
        "pageSeq": 47861
    },
    {
        "IDcode": 47862,
        "title": "(C92) [つぐつぐ (つぐ)] 冴えないつぐの育てかた (冴えない彼女の育てかた) - Page 1",
        "cover": "https://telegra.ph/file/b04a1b0cbdd4d715cb1fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47862",
        "pageSeq": 47862
    },
    {
        "IDcode": 47863,
        "title": "[水無月みり]令呪をもって命ずる - Page 1",
        "cover": "https://telegra.ph/file/9c77e64694f6c2a89f6c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47863",
        "pageSeq": 47863
    },
    {
        "IDcode": 47864,
        "title": "[小鸟酱]星奈奈cos系列5 玉藻前 - Page 1",
        "cover": "https://telegra.ph/file/630bab38968c655f7ffff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47864",
        "pageSeq": 47864
    },
    {
        "IDcode": 47865,
        "title": "[小鸟酱]星奈奈cos系列4 楪祈 - Page 1",
        "cover": "https://telegra.ph/file/8a66dfb9bf2f0d1e698dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47865",
        "pageSeq": 47865
    },
    {
        "IDcode": 47866,
        "title": "[小鸟酱]星奈奈cos系列3 霞之丘诗羽 - Page 1",
        "cover": "https://telegra.ph/file/2aa5788938b6fe16b50a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47866",
        "pageSeq": 47866
    },
    {
        "IDcode": 47867,
        "title": "[小鸟酱]星奈奈cos系列2 蕾姆 - Page 1",
        "cover": "https://telegra.ph/file/c526ca51c3e0e066a20f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47867",
        "pageSeq": 47867
    },
    {
        "IDcode": 47868,
        "title": "[小鸟酱]星奈奈cos系列1 2B小姐姐 - Page 1",
        "cover": "https://telegra.ph/file/d8bdbac0ba253e7afd244.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47868",
        "pageSeq": 47868
    },
    {
        "IDcode": 47869,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん １９歳Ｈカップ低身長ロリレイヤー性処理便女ドＭ調教記録 ＦＧ〇スカサハアサシン[H] - Page 1",
        "cover": "https://telegra.ph/file/851859141f1d73e3c2185.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47869",
        "pageSeq": 47869
    },
    {
        "IDcode": 47870,
        "title": "[Sex Syndrome] ガチ洗脳ちゃん 18歳Fカップ低身長ロリレイヤー性処理便女ドM調教記録 ブレイプウィッチーズ ジョゼたそ - Page 1",
        "cover": "https://telegra.ph/file/1f740c398a0a0ba9f6a2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47870",
        "pageSeq": 47870
    },
    {
        "IDcode": 47871,
        "title": "Melody Wylde as Sailor Jupiter - Page 1",
        "cover": "https://telegra.ph/file/ea04ca6d32819e3cd5172.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47871",
        "pageSeq": 47871
    }
];
