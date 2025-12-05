// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 7001,
        "title": "らびんゆー！",
        "cover": "https://telegra.ph/file/87e7ae22a569e7f3e3c1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7001"
    },
    {
        "IDcode": 7002,
        "title": "セーラーJKと・・・",
        "cover": "https://telegra.ph/file/3ffcaf81615d933a4adfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7002"
    },
    {
        "IDcode": 7003,
        "title": "ジェラシー",
        "cover": "https://telegra.ph/file/0a573aef8408b89541f6a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7003"
    },
    {
        "IDcode": 7004,
        "title": "アタシじゃないのに…",
        "cover": "https://telegra.ph/file/d760b0ccff7a63330c837.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7004"
    },
    {
        "IDcode": 7005,
        "title": "アタシじゃないのに… その後",
        "cover": "https://telegra.ph/file/061fc1651f32b959cefd0.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7005"
    },
    {
        "IDcode": 7006,
        "title": "僕が女の子になった日",
        "cover": "https://telegra.ph/file/35b655a415420a301a61c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7006"
    },
    {
        "IDcode": 7007,
        "title": "みんなの大家ちゃん",
        "cover": "https://telegra.ph/file/ef97defb71a3610cc6911.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7007"
    },
    {
        "IDcode": 7008,
        "title": "海でも！いいなり ハウスキーパー",
        "cover": "https://telegra.ph/file/ad2cce55f64a8bac04e7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7008"
    },
    {
        "IDcode": 7009,
        "title": "メルティ",
        "cover": "https://telegra.ph/file/68c062771fe67c2fe99fb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7009"
    },
    {
        "IDcode": 7010,
        "title": "放課後ランデブー",
        "cover": "https://telegra.ph/file/de96fe9cb9b04ab99b790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7010"
    },
    {
        "IDcode": 7011,
        "title": "身長差のある彼女",
        "cover": "https://telegra.ph/file/b3be85ebfe0b084d224db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7011"
    },
    {
        "IDcode": 7012,
        "title": "あくまで彼女",
        "cover": "https://telegra.ph/file/6fadb7c9fcdc7ac3664b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7012"
    },
    {
        "IDcode": 7013,
        "title": "プ痴♥トモ",
        "cover": "https://telegra.ph/file/3e97626fe7993c8aeca4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7013"
    },
    {
        "IDcode": 7014,
        "title": "晃次郎-我的上京物语",
        "cover": "https://telegra.ph/file/a3b6eaa4f691ca268fc78.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7014"
    },
    {
        "IDcode": 7015,
        "title": "リベンジマッチ",
        "cover": "https://telegra.ph/file/7c07462934973c88870d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7015"
    },
    {
        "IDcode": 7016,
        "title": "闇黒に堕ちて",
        "cover": "https://telegra.ph/file/c2763b61458b1e84240d3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7016"
    },
    {
        "IDcode": 7017,
        "title": "看板娘は男の娘",
        "cover": "https://telegra.ph/file/d0a67610abdd3a5dd0d78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7017"
    },
    {
        "IDcode": 7018,
        "title": "もっと私を見て欲しいっ! 実況してみた編",
        "cover": "https://telegra.ph/file/be32016b1aa2524af8482.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7018"
    },
    {
        "IDcode": 7019,
        "title": "[山田の性活が第一] スクラム]",
        "cover": "https://telegra.ph/file/3863dfafaf6be3a7fef89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7019"
    },
    {
        "IDcode": 7020,
        "title": "メドゥーサのシン実",
        "cover": "https://telegra.ph/file/754599cc38a0b1c686dac.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7020"
    },
    {
        "IDcode": 7021,
        "title": "ミイラな妹とエッチな古代のオモチャ♪",
        "cover": "https://telegra.ph/file/3d33342224a558dce3a0f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7021"
    },
    {
        "IDcode": 7022,
        "title": "彼女はもうすぐママになる",
        "cover": "https://telegra.ph/file/985ecf49804eda0376feb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7022"
    },
    {
        "IDcode": 7023,
        "title": "水着のマリョク",
        "cover": "https://telegra.ph/file/84c62b9e93621f95d391a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7023"
    },
    {
        "IDcode": 7024,
        "title": "お店屋さんごっこ",
        "cover": "https://telegra.ph/file/9e9b957d264cb29dfad51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7024"
    },
    {
        "IDcode": 7025,
        "title": "姫川さんは近道したい",
        "cover": "https://telegra.ph/file/8a4660b2080622dfa4d80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7025"
    },
    {
        "IDcode": 7026,
        "title": "一夜のカイホウ",
        "cover": "https://telegra.ph/file/e9d645363cfccd9625ad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7026"
    },
    {
        "IDcode": 7027,
        "title": "怪物の瞳",
        "cover": "https://telegra.ph/file/57e6e88740448a2454187.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7027"
    },
    {
        "IDcode": 7028,
        "title": "ヤリすぎ性教育！～変態女教師危機一発～",
        "cover": "https://telegra.ph/file/5e4ad678b8dc8c541550a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7028"
    },
    {
        "IDcode": 7029,
        "title": "淫モラル研修",
        "cover": "https://telegra.ph/file/5e32ee79cc3104f6afb01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7029"
    },
    {
        "IDcode": 7030,
        "title": "僕のお受験 D判定",
        "cover": "https://telegra.ph/file/1ec7ac377b5989596cae8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7030"
    },
    {
        "IDcode": 7031,
        "title": "女にされた魔王様",
        "cover": "https://telegra.ph/file/843908707d0e3830d2be4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7031"
    },
    {
        "IDcode": 7032,
        "title": "アメスクギャルは男の娘！？",
        "cover": "https://telegra.ph/file/b6efd195584fa50a81183.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7032"
    },
    {
        "IDcode": 7033,
        "title": "丑三つ時の来訪者",
        "cover": "https://telegra.ph/file/a5e664ab16f661b07d807.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7033"
    },
    {
        "IDcode": 7034,
        "title": "鬼っ娘ビッチ",
        "cover": "https://telegra.ph/file/aaf06ec47529ed7993463.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7034"
    },
    {
        "IDcode": 7035,
        "title": "時間停止で先生と！",
        "cover": "https://telegra.ph/file/230c98498e99bcaf7d03e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7035"
    },
    {
        "IDcode": 7036,
        "title": "とまる時計まわれ恋風",
        "cover": "https://telegra.ph/file/b0b2dea086779bcc665c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7036"
    },
    {
        "IDcode": 7037,
        "title": "もっと私を見て欲しいっ!",
        "cover": "https://telegra.ph/file/e67568f3c41b6472492af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7037"
    },
    {
        "IDcode": 7038,
        "title": "落下流水",
        "cover": "https://telegra.ph/file/0a11807ad3bfde87a71c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7038"
    },
    {
        "IDcode": 7039,
        "title": "リラックスフライト",
        "cover": "https://telegra.ph/file/2b99e95488c14b5be0a06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7039"
    },
    {
        "IDcode": 7040,
        "title": "そばにあるしあわせ",
        "cover": "https://telegra.ph/file/dadd1898e476d75b22ea8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7040"
    },
    {
        "IDcode": 7041,
        "title": "ちぇんじTSギャル!!",
        "cover": "https://telegra.ph/file/fa0230f27fab80bb92a43.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7041"
    },
    {
        "IDcode": 7042,
        "title": "娘の彼氏はワンちゃん!- お母さん許しません!",
        "cover": "https://telegra.ph/file/c9b4255906ca1df167ce6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7042"
    },
    {
        "IDcode": 7043,
        "title": "ゲーセンの姫",
        "cover": "https://telegra.ph/file/d0bec6c7a71eb0d5556e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7043"
    },
    {
        "IDcode": 7044,
        "title": "アプリラバー",
        "cover": "https://telegra.ph/file/675dcc24de73d0273064b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7044"
    },
    {
        "IDcode": 7045,
        "title": "ふたなり先輩と魅惑の保健室",
        "cover": "https://telegra.ph/file/808efbd089a57b583a708.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7045"
    },
    {
        "IDcode": 7046,
        "title": "ときたま♡むつむつ",
        "cover": "https://telegra.ph/file/2e03c40fbcc973360f675.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7046"
    },
    {
        "IDcode": 7047,
        "title": "みつめていたい",
        "cover": "https://telegra.ph/file/1267255674fdff234baa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7047"
    },
    {
        "IDcode": 7048,
        "title": "天使の恋人",
        "cover": "https://telegra.ph/file/8b1f6d3d79809e52671c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7048"
    },
    {
        "IDcode": 7049,
        "title": "私、部下に抱かれています…",
        "cover": "https://telegra.ph/file/5567c88d9759aa09ef0f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7049"
    },
    {
        "IDcode": 7050,
        "title": "お客様にも！いいなり ハウスキーパー",
        "cover": "https://telegra.ph/file/b6ade6d59777ed66970df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7050"
    },
    {
        "IDcode": 7051,
        "title": "五年ぶりのお母さん",
        "cover": "https://telegra.ph/file/c9a6ea8c4521ef4211531.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7051"
    },
    {
        "IDcode": 7052,
        "title": "氷結神殿",
        "cover": "https://telegra.ph/file/bb600de4dc3070c835f3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7052"
    },
    {
        "IDcode": 7053,
        "title": "お姉ちゃんのミルクください",
        "cover": "https://telegra.ph/file/25457bb88a5b903f170be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7053"
    },
    {
        "IDcode": 7054,
        "title": "放課後制服デート",
        "cover": "https://telegra.ph/file/062bdfeebf7505b112b2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7054"
    },
    {
        "IDcode": 7055,
        "title": "搾精の錬金術師",
        "cover": "https://telegra.ph/file/0dedcc87ee2bc15ba242e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7055"
    },
    {
        "IDcode": 7056,
        "title": "身体は正直者",
        "cover": "https://telegra.ph/file/1d7b097fad2091a406cf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7056"
    },
    {
        "IDcode": 7057,
        "title": "催眠強制ラブラブ種付け",
        "cover": "https://telegra.ph/file/55357a67d1399eb25869c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7057"
    },
    {
        "IDcode": 7058,
        "title": "こいのおまじない",
        "cover": "https://telegra.ph/file/adcc6d3f1c413e4764c12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7058"
    },
    {
        "IDcode": 7059,
        "title": "足が好きなの-",
        "cover": "https://telegra.ph/file/87da8373e9bc8b7960660.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7059"
    },
    {
        "IDcode": 7060,
        "title": "Catch！",
        "cover": "https://telegra.ph/file/bc4bd258db9951dd1eae7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7060"
    },
    {
        "IDcode": 7061,
        "title": "苦くて甘くて辛い棘",
        "cover": "https://telegra.ph/file/7283e3d18b50a8eca2458.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7061"
    },
    {
        "IDcode": 7062,
        "title": "僕のいもうとはかわいい!",
        "cover": "https://telegra.ph/file/63fd99388ae635dd56a21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7062"
    },
    {
        "IDcode": 7063,
        "title": "至高の母性像",
        "cover": "https://telegra.ph/file/de59ebf8fc5cbe247c5d6.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7063"
    },
    {
        "IDcode": 7064,
        "title": "時間操作デバイスのかたち",
        "cover": "https://telegra.ph/file/5171744a8200a0989d1ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7064"
    },
    {
        "IDcode": 7065,
        "title": "ヒメアナ",
        "cover": "https://telegra.ph/file/4bcdd9d7c2bb32ba3fca8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7065"
    },
    {
        "IDcode": 7066,
        "title": "brother meets sister",
        "cover": "https://telegra.ph/file/94266f3b71dfaf0dfc2b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7066"
    },
    {
        "IDcode": 7067,
        "title": "槍間くるみの遺伝子",
        "cover": "https://telegra.ph/file/1f3afe1a20a68260f1ea3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7067"
    },
    {
        "IDcode": 7068,
        "title": "シークレット・ゲーム",
        "cover": "https://telegra.ph/file/b5495bf07b9f8ad49ad44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7068"
    },
    {
        "IDcode": 7069,
        "title": "私立おちんちん学園",
        "cover": "https://telegra.ph/file/1b3c2652371e607b23011.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7069"
    },
    {
        "IDcode": 7070,
        "title": "よりみち",
        "cover": "https://telegra.ph/file/b8ee30ccef0d5f20191c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7070"
    },
    {
        "IDcode": 7071,
        "title": "おっパラダイスは診療中！",
        "cover": "https://telegra.ph/file/68bc44448be24216c4553.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7071"
    },
    {
        "IDcode": 7072,
        "title": "幽霊彼女",
        "cover": "https://telegra.ph/file/9f32c2ec7545b5adf6b03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7072"
    },
    {
        "IDcode": 7073,
        "title": "Teach two candies",
        "cover": "https://telegra.ph/file/caefe6efae18e7da7dc54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7073"
    },
    {
        "IDcode": 7074,
        "title": "僕は何もできない",
        "cover": "https://telegra.ph/file/1313d60e41f13b1462a3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7074"
    },
    {
        "IDcode": 7075,
        "title": "死ぬほど魅力的な彼女",
        "cover": "https://telegra.ph/file/95b2036a9ffb7cc6cd056.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7075"
    },
    {
        "IDcode": 7076,
        "title": "ふたなりの罠と終わらない責め苦",
        "cover": "https://telegra.ph/file/9a7e0b6e653c2b235a5b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7076"
    },
    {
        "IDcode": 7077,
        "title": "パンツでチャンス！",
        "cover": "https://telegra.ph/file/260fd1cdd82211a2f934c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7077"
    },
    {
        "IDcode": 7078,
        "title": "オシアイ×トレイン？",
        "cover": "https://telegra.ph/file/cf56e510c55d6f1df2c3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7078"
    },
    {
        "IDcode": 7079,
        "title": "どうしようもない変態",
        "cover": "https://telegra.ph/file/2aa7864dc79807eddcd47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7079"
    },
    {
        "IDcode": 7080,
        "title": "人を信じる事なかれ",
        "cover": "https://telegra.ph/file/c7d5962140aaf5178f691.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7080"
    },
    {
        "IDcode": 7081,
        "title": "芍薬の花",
        "cover": "https://telegra.ph/file/80aae580c703189bdf538.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7081"
    },
    {
        "IDcode": 7082,
        "title": "-魂- INSERT Interlude",
        "cover": "https://telegra.ph/file/7dbb0cfc82a64a62237ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7082"
    },
    {
        "IDcode": 7083,
        "title": "工学乙女はオイルの香り",
        "cover": "https://telegra.ph/file/ae600758c921383f7ae37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7083"
    },
    {
        "IDcode": 7084,
        "title": "トキメキサバト",
        "cover": "https://telegra.ph/file/21590a10f87207e1ca668.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7084"
    },
    {
        "IDcode": 7085,
        "title": "女王ノ戯レ",
        "cover": "https://telegra.ph/file/6b9551e4b01e3c651f966.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7085"
    },
    {
        "IDcode": 7086,
        "title": "ハーピィといっしょ",
        "cover": "https://telegra.ph/file/500d99f4c448d16b60c90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7086"
    },
    {
        "IDcode": 7087,
        "title": "深窓の好奇心",
        "cover": "https://telegra.ph/file/5cf0fd27b3971a5b2afc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7087"
    },
    {
        "IDcode": 7088,
        "title": "さくらクライシス! とらい!!!",
        "cover": "https://telegra.ph/file/d1d406c14e226c29362b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7088"
    },
    {
        "IDcode": 7089,
        "title": "妖精のいない朔日祭",
        "cover": "https://telegra.ph/file/eb2f006371d6a641cb136.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7089"
    },
    {
        "IDcode": 7090,
        "title": "ピッタリしたい恋じゃない",
        "cover": "https://telegra.ph/file/888792990203115c3213e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7090"
    },
    {
        "IDcode": 7091,
        "title": "着せ替え弟~歪んだ姉弟愛~",
        "cover": "https://telegra.ph/file/48fdf3687ab329af8a4c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7091"
    },
    {
        "IDcode": 7092,
        "title": "股間心霊スポット!科学で気持ちいい除霊!-",
        "cover": "https://telegra.ph/file/6f9ae4d0346a0bafaebcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7092"
    },
    {
        "IDcode": 7093,
        "title": "の～まんず♥あいらんど",
        "cover": "https://telegra.ph/file/cd317c0f4f05ad6c7acde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7093"
    },
    {
        "IDcode": 7094,
        "title": "応援してあげてるんだからね",
        "cover": "https://telegra.ph/file/e8378326c9382d9226dc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7094"
    },
    {
        "IDcode": 7095,
        "title": "偏愛彼女",
        "cover": "https://telegra.ph/file/134c2f590eb64c3c145d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7095"
    },
    {
        "IDcode": 7096,
        "title": "セックスレスでごめん",
        "cover": "https://telegra.ph/file/729b2c06293cf8e4a1875.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7096"
    },
    {
        "IDcode": 7097,
        "title": "OGRE #Final",
        "cover": "https://telegra.ph/file/d7a27f8756089622dfaaf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7097"
    },
    {
        "IDcode": 7098,
        "title": "運転手",
        "cover": "https://telegra.ph/file/c866dff143cdbbec8e5fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7098"
    },
    {
        "IDcode": 7099,
        "title": "ヤる気スイッチの入れ方",
        "cover": "https://telegra.ph/file/38a125bc1ae8fddea17ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7099"
    },
    {
        "IDcode": 7100,
        "title": "Deviating_girl(16)",
        "cover": "https://telegra.ph/file/7c548fbcc2d62b93cf8b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7100"
    }
];
