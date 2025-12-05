// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 6301,
        "title": "[岸里さとし] 上履きのニオイのキツイ少年",
        "cover": "https://telegra.ph/file/d8101d1224819f928d72e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6301"
    },
    {
        "IDcode": 6302,
        "title": "[皿成高味] よりぬき家庭訪問！",
        "cover": "https://telegra.ph/file/aa17cd101b477037c3bcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6302"
    },
    {
        "IDcode": 6303,
        "title": "[こっぽり生ビール] 宵のまにまに",
        "cover": "https://telegra.ph/file/cf2c0f6c45fe03acac918.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6303"
    },
    {
        "IDcode": 6304,
        "title": "[仙道八] ずーっと一緒!",
        "cover": "https://telegra.ph/file/ca93f8e3a91092a514958.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6304"
    },
    {
        "IDcode": 6305,
        "title": "[たかやKi] ドキドキ★コミュニティーライフ",
        "cover": "https://telegra.ph/file/8f6324b60cbd0900e4818.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6305"
    },
    {
        "IDcode": 6306,
        "title": "[アスヒロ] ビキニトラップ!!",
        "cover": "https://telegra.ph/file/c5f4e708e541fd68b9ece.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6306"
    },
    {
        "IDcode": 6307,
        "title": "[仙道八] ON AIR",
        "cover": "https://telegra.ph/file/54ecbf9b92ca49134781d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6307"
    },
    {
        "IDcode": 6308,
        "title": "[彩社長] 若者と至",
        "cover": "https://telegra.ph/file/19f84f51ab84bbfd15293.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6308"
    },
    {
        "IDcode": 6309,
        "title": "[にぃと] シズクデレ",
        "cover": "https://telegra.ph/file/9c8538d4afd74c0921628.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6309"
    },
    {
        "IDcode": 6310,
        "title": "[仙道八] 嘘だと言ってよ、お父さん！",
        "cover": "https://telegra.ph/file/0b83602b897b05271e79a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6310"
    },
    {
        "IDcode": 6311,
        "title": "[丸居まる] 種付け♥とくたいせい",
        "cover": "https://telegra.ph/file/6f86a3f7fd535c9ed82a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6311"
    },
    {
        "IDcode": 6312,
        "title": "[ふじさわたつろー] 母との一夜",
        "cover": "https://telegra.ph/file/50655a0e427939b47308e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6312"
    },
    {
        "IDcode": 6313,
        "title": "[PIえろ] 乳辱の乳之瀬さん",
        "cover": "https://telegra.ph/file/63df226534b8b27fcd8ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6313"
    },
    {
        "IDcode": 6314,
        "title": "[黒磐まどか] 杏仁豆腐・白桃味",
        "cover": "https://telegra.ph/file/cd61a5753f6cb8751e6c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6314"
    },
    {
        "IDcode": 6315,
        "title": "[ゆきの] 特別営業いたします",
        "cover": "https://telegra.ph/file/7e21e98c5a50ab3871eeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6315"
    },
    {
        "IDcode": 6316,
        "title": "[石野鐘音] ジュエル騎士ルビエル ～子宮拷問・吸引捻り責め～",
        "cover": "https://telegra.ph/file/29521c69da097db2ded41.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6316"
    },
    {
        "IDcode": 6317,
        "title": "[カスガソウイチ] 恋の遭遇",
        "cover": "https://telegra.ph/file/7657a8054e14bd6de21d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6317"
    },
    {
        "IDcode": 6318,
        "title": "[鈴月あこに] つゆだく",
        "cover": "https://telegra.ph/file/2cf197d996743b08ba470.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6318"
    },
    {
        "IDcode": 6319,
        "title": "くノ一忍法伝 淫賀性愛奥義",
        "cover": "https://telegra.ph/file/740e2f32f77d4a728fd0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6319"
    },
    {
        "IDcode": 6320,
        "title": "ラブスレイヴ",
        "cover": "https://telegra.ph/file/af9323702391d209e8ea2.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6320"
    },
    {
        "IDcode": 6321,
        "title": "田舎のペンション",
        "cover": "https://telegra.ph/file/bbe11e35340ab2a251b97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6321"
    },
    {
        "IDcode": 6322,
        "title": "保健室で",
        "cover": "https://telegra.ph/file/e8c1a9ab91e8ff60ecb36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6322"
    },
    {
        "IDcode": 6323,
        "title": "ちんちん占い",
        "cover": "https://telegra.ph/file/e5862599d13b0d71c35ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6323"
    },
    {
        "IDcode": 6324,
        "title": "カノジョはピュアなママがいい",
        "cover": "https://telegra.ph/file/3f67f22aea6c815f1d9aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6324"
    },
    {
        "IDcode": 6325,
        "title": "摂食",
        "cover": "https://telegra.ph/file/b793fdf31f00629d429c6.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6325"
    },
    {
        "IDcode": 6326,
        "title": "欲望パンドラ",
        "cover": "https://telegra.ph/file/89577e5193d6a1d1936e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6326"
    },
    {
        "IDcode": 6327,
        "title": "せんせいとかわいい",
        "cover": "https://telegra.ph/file/912d1a17e5ae5f05d5030.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6327"
    },
    {
        "IDcode": 6328,
        "title": "ボーイミーツにゃーゴッド",
        "cover": "https://telegra.ph/file/ec13c267eecfde9ce3dda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6328"
    },
    {
        "IDcode": 6329,
        "title": "ナ・マ・イ・キ☆",
        "cover": "https://telegra.ph/file/26238e46ce61a038863d7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6329"
    },
    {
        "IDcode": 6330,
        "title": "思い出のやり直し",
        "cover": "https://telegra.ph/file/ff999ec5534fef8073a25.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6330"
    },
    {
        "IDcode": 6331,
        "title": "Adagio -中編-",
        "cover": "https://telegra.ph/file/1a3efbdfacf17236f01f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6331"
    },
    {
        "IDcode": 6332,
        "title": "快落の隷刻",
        "cover": "https://telegra.ph/file/627f65c5870964d67540e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6332"
    },
    {
        "IDcode": 6333,
        "title": "保健室に魅せられて",
        "cover": "https://telegra.ph/file/7db2254a317841b857282.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6333"
    },
    {
        "IDcode": 6334,
        "title": "睡姦日記",
        "cover": "https://telegra.ph/file/61877a732f9458a2467ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6334"
    },
    {
        "IDcode": 6335,
        "title": "みにくいビッチな娘",
        "cover": "https://telegra.ph/file/0cea91438f4b9fc880a6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6335"
    },
    {
        "IDcode": 6336,
        "title": "Only you",
        "cover": "https://telegra.ph/file/68e43c74ce4841a9b3d5f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6336"
    },
    {
        "IDcode": 6337,
        "title": "同じ景色",
        "cover": "https://telegra.ph/file/284a3ff8164092156cb7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6337"
    },
    {
        "IDcode": 6338,
        "title": "大好き。",
        "cover": "https://telegra.ph/file/b7e38e0baaaa66f8453aa.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6338"
    },
    {
        "IDcode": 6339,
        "title": "ラブ♡せんせーしょん",
        "cover": "https://telegra.ph/file/06cdbac7e0d48e5dbeda0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6339"
    },
    {
        "IDcode": 6340,
        "title": "異種恋愛 その1",
        "cover": "https://telegra.ph/file/53ceb2a5f00abad69e574.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6340"
    },
    {
        "IDcode": 6341,
        "title": "おっぱい包囲網 後編",
        "cover": "https://telegra.ph/file/007afd614d37737480871.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6341"
    },
    {
        "IDcode": 6342,
        "title": "おじさんが異世界転生したらエラいところに来てしまった件。",
        "cover": "https://telegra.ph/file/d586757fbae4d40555427.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6342"
    },
    {
        "IDcode": 6343,
        "title": "晴ちゃんのお勉強",
        "cover": "https://telegra.ph/file/954e38266fa1e1970c40a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6343"
    },
    {
        "IDcode": 6344,
        "title": "虫遊戯",
        "cover": "https://telegra.ph/file/7ccf3d628ad4e5f59ee39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6344"
    },
    {
        "IDcode": 6345,
        "title": "Baby Doll",
        "cover": "https://telegra.ph/file/d14066d2d90c5cd77a272.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6345"
    },
    {
        "IDcode": 6346,
        "title": "[いちこ] ふたりの文化祭",
        "cover": "https://telegra.ph/file/baeb160195c9d74b7fbc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6346"
    },
    {
        "IDcode": 6347,
        "title": "[でこちんハンマー] Olet nubes -匂い立つは思春期少女-",
        "cover": "https://telegra.ph/file/6b39169b023c3768f4d9d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6347"
    },
    {
        "IDcode": 6348,
        "title": "[あいち志保] キミに片想い",
        "cover": "https://telegra.ph/file/56b3365c236a24e395fbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6348"
    },
    {
        "IDcode": 6349,
        "title": "[アスヒロ] 全部、キミのせいだ",
        "cover": "https://telegra.ph/file/19201cebc1127bfa082e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6349"
    },
    {
        "IDcode": 6350,
        "title": "[ちるまくろ] やきもち ランジェリー",
        "cover": "https://telegra.ph/file/e55fcdb98f3a26833dba2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6350"
    },
    {
        "IDcode": 6351,
        "title": "[かるま龍狼] ふしだら日和 おまけまんが",
        "cover": "https://telegra.ph/file/6787fa53b537e45080032.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6351"
    },
    {
        "IDcode": 6352,
        "title": "[SeN] 雨に宿りて",
        "cover": "https://telegra.ph/file/3a9da30b6d3c9ab91cd70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6352"
    },
    {
        "IDcode": 6353,
        "title": "[大嘘] ついんず♥はらすめんと",
        "cover": "https://telegra.ph/file/f570f5f948942342b10f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6353"
    },
    {
        "IDcode": 6354,
        "title": "[ぐじら] リトルマグナム",
        "cover": "https://telegra.ph/file/f2d9c2664e7e894cdcad4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6354"
    },
    {
        "IDcode": 6355,
        "title": "[ちるまくろ] 銭湯ひとりむすめ",
        "cover": "https://telegra.ph/file/53a576985bdca843ea76f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6355"
    },
    {
        "IDcode": 6356,
        "title": "[冬野みかん] まゆちゃんの頼みごと",
        "cover": "https://telegra.ph/file/56885f76ea996319caf61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6356"
    },
    {
        "IDcode": 6357,
        "title": "[まっさら島] 電脳恥帯",
        "cover": "https://telegra.ph/file/f2e724bf5b640d4eaf922.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6357"
    },
    {
        "IDcode": 6358,
        "title": "(COMIC1☆8) [AMAYADORI+ (ハレノチアメ)]",
        "cover": "https://telegra.ph/file/95f6cb39840b383c1512e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6358"
    },
    {
        "IDcode": 6359,
        "title": "[AYUEST (あゆや)] 21世紀ト恋想",
        "cover": "https://telegra.ph/file/7e33fe8ff3cb1cfe2ec14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6359"
    },
    {
        "IDcode": 6360,
        "title": "黒石りんごリクエスト同人誌弐",
        "cover": "https://telegra.ph/file/cfaa4c23dffa75bbc71fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6360"
    },
    {
        "IDcode": 6361,
        "title": "[腹痛起こす (悔王)] おっけー寝 (東方Project)",
        "cover": "https://telegra.ph/file/eb9c6530c24aedefa4e9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6361"
    },
    {
        "IDcode": 6362,
        "title": "[Σ-Arts (神毛物由宇)] ぼくんちのせんしちょー",
        "cover": "https://telegra.ph/file/5249976a7fd7753222929.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6362"
    },
    {
        "IDcode": 6363,
        "title": "[angelphobia (ともみみしもん)] やせいのちじょがあらわれた!9",
        "cover": "https://telegra.ph/file/728a7e3f515a88a147707.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6363"
    },
    {
        "IDcode": 6364,
        "title": "DRAGONBALL H Gohan X Videl",
        "cover": "https://telegra.ph/file/f2a02103b382dd0cefa2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6364"
    },
    {
        "IDcode": 6365,
        "title": "[peachpulsar (みら)] 奥様とメイドさん",
        "cover": "https://telegra.ph/file/2ef69d61dc36ec1925a34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6365"
    },
    {
        "IDcode": 6366,
        "title": "[腹痛起こす (悔王)] おくすりおねえさん (東方Project)",
        "cover": "https://telegra.ph/file/7926e61dd212f455098bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6366"
    },
    {
        "IDcode": 6367,
        "title": "[なかよひモグダン (モグダン)] 綾波第1回",
        "cover": "https://telegra.ph/file/d2a527084448513939433.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6367"
    },
    {
        "IDcode": 6368,
        "title": "[Digital Lover (なかじまゆか)] D.L. action85",
        "cover": "https://telegra.ph/file/5e5a3857c48fc49e3a535.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6368"
    },
    {
        "IDcode": 6369,
        "title": "提督、ボクに興味があるの？？",
        "cover": "https://telegra.ph/file/70b085f08cba68201cfaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6369"
    },
    {
        "IDcode": 6370,
        "title": "留守番艦 長門",
        "cover": "https://telegra.ph/file/52c01a353cab86fafff2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6370"
    },
    {
        "IDcode": 6371,
        "title": "[伊東ライフ] 東方眼鏡 (東方Project)",
        "cover": "https://telegra.ph/file/8aef3acdd2f80491909a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6371"
    },
    {
        "IDcode": 6372,
        "title": "プリズム少女 (ラブライブ!)",
        "cover": "https://telegra.ph/file/83d4f38f4dcd515c431d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6372"
    },
    {
        "IDcode": 6373,
        "title": "ねこみみセーラー服さん",
        "cover": "https://telegra.ph/file/2c84963517f5f7cef53e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6373"
    },
    {
        "IDcode": 6374,
        "title": "[白液書房 (A輝廃都)] 牝豚 ART IFLINE",
        "cover": "https://telegra.ph/file/7ab8b4a71e57bd46b6599.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6374"
    },
    {
        "IDcode": 6375,
        "title": "慰安戦艦ヤマト2199",
        "cover": "https://telegra.ph/file/5a0dd351fc5421b4282d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6375"
    },
    {
        "IDcode": 6376,
        "title": "Unreasonable world",
        "cover": "https://telegra.ph/file/95c2e8f37f28239b3d24d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6376"
    },
    {
        "IDcode": 6377,
        "title": "[白液書房 (A輝廃都)] 発情ストレイキャット",
        "cover": "https://telegra.ph/file/36f77dd0f3371f708efd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6377"
    },
    {
        "IDcode": 6378,
        "title": "9[不可不可 (関谷あさみ)] わたしのかわいいこいびと + ポストカード",
        "cover": "https://telegra.ph/file/cab4b702289e1328528a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6378"
    },
    {
        "IDcode": 6379,
        "title": "春香と美月がちゅっちゅしてるだけの本",
        "cover": "https://telegra.ph/file/77adfe8c5714f33e43ea3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6379"
    },
    {
        "IDcode": 6380,
        "title": "進水日は大切じゃん",
        "cover": "https://telegra.ph/file/01c1f715dfdd0f1bfb7b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6380"
    },
    {
        "IDcode": 6381,
        "title": "未確認生物",
        "cover": "https://telegra.ph/file/111c37630fd077dc98b09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6381"
    },
    {
        "IDcode": 6382,
        "title": "Scarlet Heart Paradise",
        "cover": "https://telegra.ph/file/f13946d7b96cc80726be4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6382"
    },
    {
        "IDcode": 6383,
        "title": "アンフォルメル (ジョジョの奇妙な冒険)",
        "cover": "https://telegra.ph/file/4e7c66d3a1268b9757db0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6383"
    },
    {
        "IDcode": 6384,
        "title": "シャナに中だし (灼眼のシャナ)",
        "cover": "https://telegra.ph/file/b68a3dd4888a81a4db513.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6384"
    },
    {
        "IDcode": 6385,
        "title": "加賀さんは俺の嫁 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/79c8275517a4d835b9c55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6385"
    },
    {
        "IDcode": 6386,
        "title": "Home Sweet Home ~ティアナ編~ (魔法少女リリカルなのは)",
        "cover": "https://telegra.ph/file/f148d27e1850309f65a32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6386"
    },
    {
        "IDcode": 6387,
        "title": "Profumo (Jojo's Bizarre Adventure)",
        "cover": "https://telegra.ph/file/91dd502ae3af8899892bd.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6387"
    },
    {
        "IDcode": 6388,
        "title": "ケロちゃんのえろいほん (東方Project)",
        "cover": "https://telegra.ph/file/9044f34b64d4079000c1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6388"
    },
    {
        "IDcode": 6389,
        "title": "飛行甲板は超デリケート (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/238c0d941d105d8a694ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6389"
    },
    {
        "IDcode": 6390,
        "title": "ひみつのはなしを聞きたいそうです (魔法少女まどか☆マギカ)",
        "cover": "https://telegra.ph/file/97bbb24c8288adcf57d6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6390"
    },
    {
        "IDcode": 6391,
        "title": "秘書艦のオ・ヤ・ク・メ (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/6c3b360964c13ce78d7c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6391"
    },
    {
        "IDcode": 6392,
        "title": "野菜性活ひゃく。 (のうりん)",
        "cover": "https://telegra.ph/file/05ae54eada8f03dbf4e90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6392"
    },
    {
        "IDcode": 6393,
        "title": "T-18T☆ANA (魔法少女リリカルなのは)",
        "cover": "https://telegra.ph/file/6bd49b5acf07aee233cf1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6393"
    },
    {
        "IDcode": 6394,
        "title": "ETERNAL WATER (咲 -Saki-)",
        "cover": "https://telegra.ph/file/5c2ef15e5df710b387028.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6394"
    },
    {
        "IDcode": 6395,
        "title": "性工廠-榛名開発日誌- (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/e955fac9420b58760b1e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6395"
    },
    {
        "IDcode": 6396,
        "title": "サ.ヨ.ナ.ラー深海の人魚姫",
        "cover": "https://telegra.ph/file/6a27648e32c0cc2adb363.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6396"
    },
    {
        "IDcode": 6397,
        "title": "Muffin Affection (ラブライブ!)",
        "cover": "https://telegra.ph/file/c442e91fd3ef1b52d7f4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6397"
    },
    {
        "IDcode": 6398,
        "title": "妹はまだ本気出してないだけ",
        "cover": "https://telegra.ph/file/cd8ca67bc9ad94a17c4ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6398"
    },
    {
        "IDcode": 6399,
        "title": "アイドルは大なんてしない",
        "cover": "https://telegra.ph/file/13d3ab3a5ba38d0f2b1d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6399"
    },
    {
        "IDcode": 6400,
        "title": "ティアーユ痴漢電車",
        "cover": "https://telegra.ph/file/767766d6a86555f38a519.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6400"
    }
];
