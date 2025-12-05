// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 7301,
        "title": "一夜の魔法",
        "cover": "https://telegra.ph/file/249eeb4f7fc2c210d3eee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7301"
    },
    {
        "IDcode": 7302,
        "title": "転職",
        "cover": "https://telegra.ph/file/8fc76c64b5f64022480ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7302"
    },
    {
        "IDcode": 7303,
        "title": "プち妻おもちゃ箱",
        "cover": "https://telegra.ph/file/e4305bab1c5a3d2d11494.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7303"
    },
    {
        "IDcode": 7304,
        "title": "夢食いエクスタシー",
        "cover": "https://telegra.ph/file/1df425f7d0a638a8590c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7304"
    },
    {
        "IDcode": 7305,
        "title": "エイリアンVS女子大生 ～尻ノ穴から産まれしモノ～",
        "cover": "https://telegra.ph/file/53f3f7ad1ab55755c16a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7305"
    },
    {
        "IDcode": 7306,
        "title": "ペトリコール",
        "cover": "https://telegra.ph/file/a0060e13a9543df9f5119.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7306"
    },
    {
        "IDcode": 7307,
        "title": "ママはさかりどき!",
        "cover": "https://telegra.ph/file/26dd3f1ea3e1f36b9827a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7307"
    },
    {
        "IDcode": 7308,
        "title": "夕凪の匂い",
        "cover": "https://telegra.ph/file/4bc5ef8bafd1324823c05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7308"
    },
    {
        "IDcode": 7309,
        "title": "センチメントの季節",
        "cover": "https://telegra.ph/file/20e0986bc4b67c9fa1ecd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7309"
    },
    {
        "IDcode": 7310,
        "title": "夜のがっこう鬼ごっこ！",
        "cover": "https://telegra.ph/file/184d97f192e52aa96e705.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7310"
    },
    {
        "IDcode": 7311,
        "title": "なりきり資料撮影オフ",
        "cover": "https://telegra.ph/file/ef73e272e1e9b4489cd2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7311"
    },
    {
        "IDcode": 7312,
        "title": "2時間目は屋上で",
        "cover": "https://telegra.ph/file/5739c0687bfd086e2c59e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7312"
    },
    {
        "IDcode": 7313,
        "title": "ハッピーハーピー",
        "cover": "https://telegra.ph/file/c7d29c554374500e9ca8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7313"
    },
    {
        "IDcode": 7314,
        "title": "高嶺家の二輪花 prologue",
        "cover": "https://telegra.ph/file/2e99fdd92e47dff550e1e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7314"
    },
    {
        "IDcode": 7315,
        "title": "欲望パンドラ 2",
        "cover": "https://telegra.ph/file/bf858acaaf50d91fb288f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7315"
    },
    {
        "IDcode": 7316,
        "title": "童貞育成期",
        "cover": "https://telegra.ph/file/c9fa218953951d2171a2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7316"
    },
    {
        "IDcode": 7317,
        "title": "ヒミツの宿題",
        "cover": "https://telegra.ph/file/c384df0849bc304c08a01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7317"
    },
    {
        "IDcode": 7318,
        "title": "雨明かりのデジャヴ",
        "cover": "https://telegra.ph/file/7b4d572f0875048dd4cc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7318"
    },
    {
        "IDcode": 7319,
        "title": "西ノ宮センパイの闇トレ",
        "cover": "https://telegra.ph/file/a1a5112fbb8c6396c870d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7319"
    },
    {
        "IDcode": 7320,
        "title": "文香さんの欲しいモノ",
        "cover": "https://telegra.ph/file/cfbc4367c467a40aa25e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7320"
    },
    {
        "IDcode": 7321,
        "title": "ゆりかご",
        "cover": "https://telegra.ph/file/b20ea377b92da6e092d59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7321"
    },
    {
        "IDcode": 7322,
        "title": "姉体験女学寮",
        "cover": "https://telegra.ph/file/38b573b7d777ce2a3953f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7322"
    },
    {
        "IDcode": 7323,
        "title": "ぶるままま",
        "cover": "https://telegra.ph/file/eda280a3c41e346882d2a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7323"
    },
    {
        "IDcode": 7324,
        "title": "アナラーアイドル",
        "cover": "https://telegra.ph/file/3cd0db734447567e25d0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7324"
    },
    {
        "IDcode": 7325,
        "title": "銀色ネクサス",
        "cover": "https://telegra.ph/file/5afae6cbde1f869dbe95b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7325"
    },
    {
        "IDcode": 7326,
        "title": "Is there a witch-",
        "cover": "https://telegra.ph/file/852347596f391929332ba.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7326"
    },
    {
        "IDcode": 7327,
        "title": "三浦君は静かに過ごしたい",
        "cover": "https://telegra.ph/file/6384f00bcf0d5d246e7c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7327"
    },
    {
        "IDcode": 7328,
        "title": "ぬるぬるデリヘル",
        "cover": "https://telegra.ph/file/3b312406881194cb74a2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7328"
    },
    {
        "IDcode": 7329,
        "title": "the backseat of she",
        "cover": "https://telegra.ph/file/e5880fdc1ea9c7045aeac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7329"
    },
    {
        "IDcode": 7330,
        "title": "俺のハーレムラブコメは全て男の娘ルート？",
        "cover": "https://telegra.ph/file/ef46d8b0a69ae629fdd2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7330"
    },
    {
        "IDcode": 7331,
        "title": "ララの結婚",
        "cover": "https://telegra.ph/file/fc554c56fd1c4c1b58de9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7331"
    },
    {
        "IDcode": 7332,
        "title": "クライムガールズ 3.5",
        "cover": "https://telegra.ph/file/177f62c60d26a9a34f488.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7332"
    },
    {
        "IDcode": 7333,
        "title": "ツインズ チェンジ",
        "cover": "https://telegra.ph/file/8f93844504e1cbea57133.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7333"
    },
    {
        "IDcode": 7334,
        "title": "ラブメア 第二变",
        "cover": "https://telegra.ph/file/4901a9b3f70f9ea12cd12.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7334"
    },
    {
        "IDcode": 7335,
        "title": "女间谍惨死",
        "cover": "https://telegra.ph/file/b68e66ba8399dfde2392f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7335"
    },
    {
        "IDcode": 7336,
        "title": "生意気ギャルVS冴えないオジサン",
        "cover": "https://telegra.ph/file/c4739eb0a6b10088f121f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7336"
    },
    {
        "IDcode": 7337,
        "title": "ファントムオンライン 悦楽の幻影",
        "cover": "https://telegra.ph/file/7e98581691b2ed7f879c8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7337"
    },
    {
        "IDcode": 7338,
        "title": "生イキ♡トイプレイ",
        "cover": "https://telegra.ph/file/77fc2afbc1378b9f4161d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7338"
    },
    {
        "IDcode": 7339,
        "title": "ラブメア 第三变",
        "cover": "https://telegra.ph/file/1751665a9e47f51c70402.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7339"
    },
    {
        "IDcode": 7340,
        "title": "それぞれの秘密",
        "cover": "https://telegra.ph/file/c3bc50b3efd76077dcf9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7340"
    },
    {
        "IDcode": 7341,
        "title": "裸体芸術部",
        "cover": "https://telegra.ph/file/374db046698d5fccdeca6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7341"
    },
    {
        "IDcode": 7342,
        "title": "お願いしますっ肉子ちゃん",
        "cover": "https://telegra.ph/file/789313e6b01897e1fe87b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7342"
    },
    {
        "IDcode": 7343,
        "title": "優等生",
        "cover": "https://telegra.ph/file/a7421c30996a492b9835f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7343"
    },
    {
        "IDcode": 7344,
        "title": "Beastie Charm",
        "cover": "https://telegra.ph/file/89ca5a678a4cdcd24f3d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7344"
    },
    {
        "IDcode": 7345,
        "title": "mitigation",
        "cover": "https://telegra.ph/file/41927e02ca74617b8d789.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7345"
    },
    {
        "IDcode": 7346,
        "title": "ぶろーくん ぼーだー",
        "cover": "https://telegra.ph/file/f1007f9b5550d9765c69e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7346"
    },
    {
        "IDcode": 7347,
        "title": "私の彼は種馬さ",
        "cover": "https://telegra.ph/file/27a5b249c5d449d90ee05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7347"
    },
    {
        "IDcode": 7348,
        "title": "その後のアセッちゃダメ²",
        "cover": "https://telegra.ph/file/a697a614887a095880b6a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7348"
    },
    {
        "IDcode": 7349,
        "title": "槍間くるみの残暑",
        "cover": "https://telegra.ph/file/5dc5c3c698527a10c1986.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7349"
    },
    {
        "IDcode": 7350,
        "title": "スフィンクスちゃんのうるとらクイズ",
        "cover": "https://telegra.ph/file/5887be7a1dc2b455f293b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7350"
    },
    {
        "IDcode": 7351,
        "title": "可愛いはずの召使いが夜に豹変したのですが？",
        "cover": "https://telegra.ph/file/1b10c909c0a209a8884c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7351"
    },
    {
        "IDcode": 7352,
        "title": "未知とのドキドキ新婚性活!",
        "cover": "https://telegra.ph/file/e3e6384b4c00f666e2479.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7352"
    },
    {
        "IDcode": 7353,
        "title": "ラブメア 第七变",
        "cover": "https://telegra.ph/file/a001af77e283b06d16d37.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7353"
    },
    {
        "IDcode": 7354,
        "title": "眠れぬ夜に",
        "cover": "https://telegra.ph/file/a2b3032899adf6c6223f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7354"
    },
    {
        "IDcode": 7355,
        "title": "Black Five",
        "cover": "https://telegra.ph/file/c0e32d665389b54ed9cb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7355"
    },
    {
        "IDcode": 7356,
        "title": "その白き器に汚泥を注ぐ",
        "cover": "https://telegra.ph/file/a230487804ca401711a1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7356"
    },
    {
        "IDcode": 7357,
        "title": "Nylon Bitch Trap 深夜のコンビニにて…",
        "cover": "https://telegra.ph/file/96c1305dad8499b9dd880.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7357"
    },
    {
        "IDcode": 7358,
        "title": "こあくまセルフィー",
        "cover": "https://telegra.ph/file/42b5fe0be7b94dfe1e615.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7358"
    },
    {
        "IDcode": 7359,
        "title": "Demonic Sister",
        "cover": "https://telegra.ph/file/b624c02cb5ca2bfb1be0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7359"
    },
    {
        "IDcode": 7360,
        "title": "夏と恋とふたりぐらし",
        "cover": "https://telegra.ph/file/e5eaa93b10afdb71e77c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7360"
    },
    {
        "IDcode": 7361,
        "title": "ナイショの介抱♡",
        "cover": "https://telegra.ph/file/774b26b3619dfbb05ac05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7361"
    },
    {
        "IDcode": 7362,
        "title": "ヨメと遊ぼう！",
        "cover": "https://telegra.ph/file/8c6a07d35bcbb1a60a780.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7362"
    },
    {
        "IDcode": 7363,
        "title": "強制男の娘法 (たまびら)",
        "cover": "https://telegra.ph/file/7ea1cb4ee320fcefd6719.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7363"
    },
    {
        "IDcode": 7364,
        "title": "ふたりでおとり捜査です",
        "cover": "https://telegra.ph/file/0c09d42ce401704e04cc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7364"
    },
    {
        "IDcode": 7365,
        "title": "真珠と鏡",
        "cover": "https://telegra.ph/file/98dcd29de597bd3634bf1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7365"
    },
    {
        "IDcode": 7366,
        "title": "母ブタ娘ブタ",
        "cover": "https://telegra.ph/file/e3d2831044f074ccd1936.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7366"
    },
    {
        "IDcode": 7367,
        "title": "神様働いてください",
        "cover": "https://telegra.ph/file/7499a331617efa3cdfe51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7367"
    },
    {
        "IDcode": 7368,
        "title": "1スキュラパニック",
        "cover": "https://telegra.ph/file/900f836bbe78dde74a58d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7368"
    },
    {
        "IDcode": 7369,
        "title": "媚薬でリベンジ",
        "cover": "https://telegra.ph/file/d60bb379f7760e506ec2f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7369"
    },
    {
        "IDcode": 7370,
        "title": "暇してんだろ？",
        "cover": "https://telegra.ph/file/01b58bba2b7b39aa6f50a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7370"
    },
    {
        "IDcode": 7371,
        "title": "初心ビッチ",
        "cover": "https://telegra.ph/file/d18d257b58051d6723ed2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7371"
    },
    {
        "IDcode": 7372,
        "title": "ナイショのおまじない",
        "cover": "https://telegra.ph/file/8de77f930f2510fa23536.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7372"
    },
    {
        "IDcode": 7373,
        "title": "Sweet Amber",
        "cover": "https://telegra.ph/file/c3bbde26856a91a9bca5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7373"
    },
    {
        "IDcode": 7374,
        "title": "M.I.J",
        "cover": "https://telegra.ph/file/a8a6a699a8079667dc64c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7374"
    },
    {
        "IDcode": 7375,
        "title": "童貞から始める異世界性服",
        "cover": "https://telegra.ph/file/37d43c07723f16dbf8ba8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7375"
    },
    {
        "IDcode": 7376,
        "title": "初めまして、夏",
        "cover": "https://telegra.ph/file/ed6a01886d5713b45d44d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7376"
    },
    {
        "IDcode": 7377,
        "title": "花ちゃん奮闘記",
        "cover": "https://telegra.ph/file/2407aaff8eedf67441737.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7377"
    },
    {
        "IDcode": 7378,
        "title": "禁賀新年",
        "cover": "https://telegra.ph/file/63ac39a732069c9c214b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7378"
    },
    {
        "IDcode": 7379,
        "title": "女体化受胎 -U村A君行方不明事件-",
        "cover": "https://telegra.ph/file/d32d3e87d35b6c9402417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7379"
    },
    {
        "IDcode": 7380,
        "title": "産卵場所は宇宙パイロット",
        "cover": "https://telegra.ph/file/0132a2fd62514cc243fa0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7380"
    },
    {
        "IDcode": 7381,
        "title": "獣妖！ ～けもよう～",
        "cover": "https://telegra.ph/file/a3098e0f4b1dc4826f740.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7381"
    },
    {
        "IDcode": 7382,
        "title": "メルティ♪Nuts＊Milk②",
        "cover": "https://telegra.ph/file/c7299b750b3cafc1aa903.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7382"
    },
    {
        "IDcode": 7383,
        "title": "ラブメア 第九变",
        "cover": "https://telegra.ph/file/2023d537457c6206fd5a1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7383"
    },
    {
        "IDcode": 7384,
        "title": "小悪魔♡お姉ちゃん",
        "cover": "https://telegra.ph/file/ca89cfaa866d2390300ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7384"
    },
    {
        "IDcode": 7385,
        "title": "女尊男卑のお屋敷で男の娘は？",
        "cover": "https://telegra.ph/file/c8568b1eacecb9ba6e04c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7385"
    },
    {
        "IDcode": 7386,
        "title": "キミの目を惹きたい",
        "cover": "https://telegra.ph/file/bce24f35d8bf1a8b46424.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7386"
    },
    {
        "IDcode": 7387,
        "title": "反抗期ヌキのススメ♡",
        "cover": "https://telegra.ph/file/1e8f2937c84058362fa00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7387"
    },
    {
        "IDcode": 7388,
        "title": "花は転じて咲き乱れ",
        "cover": "https://telegra.ph/file/be38c352c7d89df5fa8c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7388"
    },
    {
        "IDcode": 7389,
        "title": "デイドリーム",
        "cover": "https://telegra.ph/file/0bde7a54dc5f95f05a764.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7389"
    },
    {
        "IDcode": 7390,
        "title": "放課後インタレスト",
        "cover": "https://telegra.ph/file/2710c3cc1a3e47514e5a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7390"
    },
    {
        "IDcode": 7391,
        "title": "童貞から始める異世界性服",
        "cover": "https://telegra.ph/file/e55b59671d63c0686dc78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7391"
    },
    {
        "IDcode": 7392,
        "title": "帰り道にて",
        "cover": "https://telegra.ph/file/2b807bd3bc74b80ec9d59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7392"
    },
    {
        "IDcode": 7393,
        "title": "召ませ妹ギャル à la mode",
        "cover": "https://telegra.ph/file/10f518e8e040d1fe28d43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7393"
    },
    {
        "IDcode": 7394,
        "title": "義妹先生スライムももちゃん",
        "cover": "https://telegra.ph/file/a00dd3e91d6c8e74ebd66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7394"
    },
    {
        "IDcode": 7395,
        "title": "うち来る？",
        "cover": "https://telegra.ph/file/7389e45f3d7b4bc282282.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7395"
    },
    {
        "IDcode": 7396,
        "title": "花の…妖精？",
        "cover": "https://telegra.ph/file/b728f943b5cb36d0c0935.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7396"
    },
    {
        "IDcode": 7397,
        "title": "中学性サディスティック",
        "cover": "https://telegra.ph/file/8884652645c845544d36c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7397"
    },
    {
        "IDcode": 7398,
        "title": "帰り道にて",
        "cover": "https://telegra.ph/file/313f295fe2a4adccaf5ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7398"
    },
    {
        "IDcode": 7399,
        "title": "それでよし!",
        "cover": "https://telegra.ph/file/a47539a5dd324ed792439.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7399"
    },
    {
        "IDcode": 7400,
        "title": "赤い木の実のなる森で",
        "cover": "https://telegra.ph/file/085c8be9147247001559e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7400"
    }
];
