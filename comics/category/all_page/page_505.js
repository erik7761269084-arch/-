// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5402,
        "title": "[tsuniverse (ゆにば)] 夏の憑依",
        "cover": "https://telegra.ph/file/b08d3dc99083bda54a46c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5402"
    },
    {
        "IDcode": 5403,
        "title": "魔法少女催眠パコパコーズGAME OVER",
        "cover": "https://telegra.ph/file/39ba0d7366f93ae53336a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5403"
    },
    {
        "IDcode": 5404,
        "title": "[丸和太郎] みせられて…",
        "cover": "https://telegra.ph/file/089ba5fb36b2230dbfb65.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5404"
    },
    {
        "IDcode": 5405,
        "title": "[梟森] 圖書館裏的小妖精",
        "cover": "https://telegra.ph/file/c6ef9f927a8fad4a5814f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5405"
    },
    {
        "IDcode": 5406,
        "title": "[西條サトル] 結び逢えたら",
        "cover": "https://telegra.ph/file/9b349cc7a0253a23dead0.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5406"
    },
    {
        "IDcode": 5407,
        "title": "触手屋1",
        "cover": "https://telegra.ph/file/a9afba757dce0d3decf83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5407"
    },
    {
        "IDcode": 5408,
        "title": "[咲田咲] いれてくださいっ！",
        "cover": "https://telegra.ph/file/623f7475aef685a3c658f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5408"
    },
    {
        "IDcode": 5409,
        "title": "[天路あや] 女勇者エリナ ~鎧の奥で蠢く欲望~",
        "cover": "https://telegra.ph/file/66dd39dcf05e9f3151225.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5409"
    },
    {
        "IDcode": 5410,
        "title": "[篠塚醸二] みことひめごと",
        "cover": "https://telegra.ph/file/f372ba574ada5bd62d019.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5410"
    },
    {
        "IDcode": 5411,
        "title": "[岩崎ユウキ] アナタノウシロ",
        "cover": "https://telegra.ph/file/8f457ab137859ec935a99.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5411"
    },
    {
        "IDcode": 5412,
        "title": "[一ノ瀬ランド] ふつうの・オンナノコ",
        "cover": "https://telegra.ph/file/f3382df2301a217cb24b3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5412"
    },
    {
        "IDcode": 5413,
        "title": "[由浦カズヤ] オトナあつかい",
        "cover": "https://telegra.ph/file/4b3a1a66ab26f2b278e2b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5413"
    },
    {
        "IDcode": 5414,
        "title": "[羽月ユウ] ロッカートラップ",
        "cover": "https://telegra.ph/file/38eb2cf9aa578a35aa87d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5414"
    },
    {
        "IDcode": 5415,
        "title": "[玉之けだま] こうそくいはん",
        "cover": "https://telegra.ph/file/e09645bfc19b60cdb688b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5415"
    },
    {
        "IDcode": 5416,
        "title": "[智弘カイ] Actual Size",
        "cover": "https://telegra.ph/file/22ce9fc4a3757f9666c43.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5416"
    },
    {
        "IDcode": 5417,
        "title": "[中乃空] Pan！Pan！Pump！！",
        "cover": "https://telegra.ph/file/d4bdb007f8b808c4619b5.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5417"
    },
    {
        "IDcode": 5418,
        "title": "[伊丹] 双子カースト～非リア兄貴の逆襲催眠～",
        "cover": "https://telegra.ph/file/5dca99dfc3888d7d94038.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5418"
    },
    {
        "IDcode": 5419,
        "title": "[シルエットさくら] Sirena (エログロス Vol.4)",
        "cover": "https://telegra.ph/file/852e80772e97ac19c128e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5419"
    },
    {
        "IDcode": 5420,
        "title": "[はぐはぐ] ごっこ遊び",
        "cover": "https://telegra.ph/file/1c4ac5c423490fcf41d52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5420"
    },
    {
        "IDcode": 5421,
        "title": "[あやとあやり] 君を娶る日",
        "cover": "https://telegra.ph/file/3e2ad77fa239e3e156b0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5421"
    },
    {
        "IDcode": 5422,
        "title": "[堀出井靖水] 綴ちゃんあふたー",
        "cover": "https://telegra.ph/file/042d60406e612de4258b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5422"
    },
    {
        "IDcode": 5423,
        "title": "[さいもん] Love & Sick",
        "cover": "https://telegra.ph/file/0dbf266f577e9ae73262e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5423"
    },
    {
        "IDcode": 5424,
        "title": "[箕山] 戀の病",
        "cover": "https://telegra.ph/file/e92292d8e96e7ef26143e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5424"
    },
    {
        "IDcode": 5425,
        "title": "[沈没] IDOL DANCE",
        "cover": "https://telegra.ph/file/bb16c6e51069b9823ac59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5425"
    },
    {
        "IDcode": 5426,
        "title": "[はるさめすぅぷ (あつとく)] 朝起きたら早霜が妹になっていましたー",
        "cover": "https://telegra.ph/file/21d95d70792fcb4d82fa1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5426"
    },
    {
        "IDcode": 5427,
        "title": "[終焉] Sweet10",
        "cover": "https://telegra.ph/file/97bf01be1f170f875c50d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5427"
    },
    {
        "IDcode": 5428,
        "title": "[牡丹もちと] お手つき！ひゃくんに一首",
        "cover": "https://telegra.ph/file/a0e40888d9f00b3f74711.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5428"
    },
    {
        "IDcode": 5429,
        "title": "[牛野缶詰] 蛙の恩返し",
        "cover": "https://telegra.ph/file/bebd467c140eb5a5459f2.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5429"
    },
    {
        "IDcode": 5430,
        "title": "[橋本] ストローク",
        "cover": "https://telegra.ph/file/9640ee93e5e87c9ec7e0d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5430"
    },
    {
        "IDcode": 5431,
        "title": "[青ばなな] トイレのヤリ子さん",
        "cover": "https://telegra.ph/file/bfcb518a60eac5c3f39e1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5431"
    },
    {
        "IDcode": 5432,
        "title": "[清宮涼] ながされセーラー",
        "cover": "https://telegra.ph/file/0ced9782262ac921044da.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5432"
    },
    {
        "IDcode": 5433,
        "title": "[犬江しんすけ] エンチャントレス ジャスミン",
        "cover": "https://telegra.ph/file/b6e9c8f553d779eaab679.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5433"
    },
    {
        "IDcode": 5434,
        "title": "[日吉ハナ] Discussion",
        "cover": "https://telegra.ph/file/5103158dd71617c24368e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5434"
    },
    {
        "IDcode": 5435,
        "title": "[日之下あかめ] 火入れ",
        "cover": "https://telegra.ph/file/b4ee36f3f7d8a0495d33d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5435"
    },
    {
        "IDcode": 5436,
        "title": "[三左わさび] 姉弟ふたりぐらし",
        "cover": "https://telegra.ph/file/09ee57c7e327c2c622b4e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5436"
    },
    {
        "IDcode": 5437,
        "title": "[森島コン] オーバーチャージ",
        "cover": "https://telegra.ph/file/1619736a4b25ce2370d85.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5437"
    },
    {
        "IDcode": 5438,
        "title": "[森島コン] オーバードライブ",
        "cover": "https://telegra.ph/file/6837e30abda094ab59530.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5438"
    },
    {
        "IDcode": 5439,
        "title": "[神代竜] シルシ 最终幕",
        "cover": "https://telegra.ph/file/4b26a428a079fe34cf440.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5439"
    },
    {
        "IDcode": 5440,
        "title": "[神代竜] 黒崎小夜の秘密",
        "cover": "https://telegra.ph/file/f7cfc3492464a381263d4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5440"
    },
    {
        "IDcode": 5441,
        "title": "[石川シスケ] 訪問",
        "cover": "https://telegra.ph/file/256cd1d6b4cb42eb117a7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5441"
    },
    {
        "IDcode": 5442,
        "title": "[石川シスケ] 君はおもちゃ",
        "cover": "https://telegra.ph/file/ee7cf0333ac652006cb54.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5442"
    },
    {
        "IDcode": 5443,
        "title": "[水口鷹志] あまごい",
        "cover": "https://telegra.ph/file/31c645e3939c27636be3f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5443"
    },
    {
        "IDcode": 5444,
        "title": "[松河] オトナになった君へ",
        "cover": "https://telegra.ph/file/dfa98cc2e5d259e11a6a3.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5444"
    },
    {
        "IDcode": 5445,
        "title": "[桃月すず] イルカに溺れる",
        "cover": "https://telegra.ph/file/f40b26edcb1a43db85f97.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5445"
    },
    {
        "IDcode": 5446,
        "title": "[燵成] OverNight",
        "cover": "https://telegra.ph/file/b080ba4250ce5fc0a1870.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5446"
    },
    {
        "IDcode": 5447,
        "title": "[淡夢] あにぴゅれーたー",
        "cover": "https://telegra.ph/file/dcd973ece3150d3fcd58d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5447"
    },
    {
        "IDcode": 5448,
        "title": "[島津鉄甲] 穴場スポットエクスタシー",
        "cover": "https://telegra.ph/file/52f44c29d63d20f63991c.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5448"
    },
    {
        "IDcode": 5449,
        "title": "[東鉄神] 与朋友姐姐的故事",
        "cover": "https://telegra.ph/file/aab3d6039e274ad6b0ebf.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5449"
    },
    {
        "IDcode": 5450,
        "title": "[二条かため] オオカミ注意！",
        "cover": "https://telegra.ph/file/be3c36392e7730f26b31d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5450"
    },
    {
        "IDcode": 5451,
        "title": "[富士やま] ＃girl",
        "cover": "https://telegra.ph/file/2739dd03789aa82a53188.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5451"
    },
    {
        "IDcode": 5452,
        "title": "[宮本りず] オタ×ビッチ",
        "cover": "https://telegra.ph/file/f09bd16aabd4301b32d40.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5452"
    },
    {
        "IDcode": 5453,
        "title": "[宮元一佐] TAKEN!!!!",
        "cover": "https://telegra.ph/file/e796d657014536d80c35e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5453"
    },
    {
        "IDcode": 5454,
        "title": "[宮元一佐] 快落の夢",
        "cover": "https://telegra.ph/file/f983e2ee9f2d47cdddaac.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5454"
    },
    {
        "IDcode": 5455,
        "title": "[黒輪] コスヤン！",
        "cover": "https://telegra.ph/file/97c1f4718dd795fda7516.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5455"
    },
    {
        "IDcode": 5456,
        "title": "[紅村かる] プレゼントフライデー",
        "cover": "https://telegra.ph/file/9c62da4503b1ce8889742.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5456"
    },
    {
        "IDcode": 5457,
        "title": "[荒巻越前] どうしてこうなった！？",
        "cover": "https://telegra.ph/file/f567c71134a15619d32b1.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5457"
    },
    {
        "IDcode": 5458,
        "title": "[回転筆] ギリ嫁",
        "cover": "https://telegra.ph/file/2d1e139f5278af30eb791.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5458"
    },
    {
        "IDcode": 5459,
        "title": "[回転筆] 背徳の園",
        "cover": "https://telegra.ph/file/05adafdbbbd4860d66b7a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5459"
    },
    {
        "IDcode": 5460,
        "title": "[けものの★] ぐるーみんぐ!!にゃん",
        "cover": "https://telegra.ph/file/56a72ebd9c25e4c9bddde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5460"
    },
    {
        "IDcode": 5461,
        "title": "[inoino] 魔に喰われし忍 (対魔忍アサギ アンソロジーコミックス)",
        "cover": "https://telegra.ph/file/2def28e376c90e9e7b140.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5461"
    },
    {
        "IDcode": 5462,
        "title": "[トロ太郎] パンチラ sign",
        "cover": "https://telegra.ph/file/0fc80fcc1d7860d6d3c2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5462"
    },
    {
        "IDcode": 5463,
        "title": "[羅ぶい] 欲望ラブプリンセス",
        "cover": "https://telegra.ph/file/730e2e39e768c2da3b4f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5463"
    },
    {
        "IDcode": 5464,
        "title": "[黒岩瑪瑙] In the School...",
        "cover": "https://telegra.ph/file/62d261ad0131339316216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5464"
    },
    {
        "IDcode": 5465,
        "title": "[M-MAX] 僕の先生",
        "cover": "https://telegra.ph/file/114acf9b32de4e9b0db2a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5465"
    },
    {
        "IDcode": 5466,
        "title": "[鷹勢優] おしかけおとう娘",
        "cover": "https://telegra.ph/file/7278b9f5940897148da0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5466"
    },
    {
        "IDcode": 5467,
        "title": "[きょくちょ] 楓と鈴",
        "cover": "https://telegra.ph/file/3c3dd6dd789c500bdc6d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5467"
    },
    {
        "IDcode": 5468,
        "title": "[きょくちょ] らぶりーあいなちゃん",
        "cover": "https://telegra.ph/file/c56c0e01022c529f2ae71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5468"
    },
    {
        "IDcode": 5469,
        "title": "[平いっすい] 気まぐれお嬢様と忠実なる執事",
        "cover": "https://telegra.ph/file/4f21bbcdfc45e2c0a58f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5469"
    },
    {
        "IDcode": 5470,
        "title": "[あるぷ] 西園寺家の華麗なる性活",
        "cover": "https://telegra.ph/file/6f1e842f71ea84e6a346b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5470"
    },
    {
        "IDcode": 5471,
        "title": "[沈没] 夕凪の一時",
        "cover": "https://telegra.ph/file/72ad164db564fb322b3e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5471"
    },
    {
        "IDcode": 5472,
        "title": "[川津健二朗] 恋花温泉",
        "cover": "https://telegra.ph/file/d93151e0848c1ebd2f319.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5472"
    },
    {
        "IDcode": 5473,
        "title": "[猫玄] 男の娘はバーチャルの夢を見るか",
        "cover": "https://telegra.ph/file/7f1d8df730026dc24cdf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5473"
    },
    {
        "IDcode": 5474,
        "title": "[丸居まる] おとな用過保護",
        "cover": "https://telegra.ph/file/4d914ba576b6858ba9aa1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5474"
    },
    {
        "IDcode": 5475,
        "title": "[もんぷち]マリッジ×トラブル",
        "cover": "https://telegra.ph/file/08762333c055e9e615ef8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5475"
    },
    {
        "IDcode": 5476,
        "title": "[あおむし] サキュバスちゃんとふたなり魔法",
        "cover": "https://telegra.ph/file/40f2c43ea3c19a899fd65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5476"
    },
    {
        "IDcode": 5477,
        "title": "[魂神] ひとりぼっちの人魚姫と",
        "cover": "https://telegra.ph/file/9e2ebdf44153407887699.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5477"
    },
    {
        "IDcode": 5478,
        "title": "[清宮涼] 時空警察がやってきた!",
        "cover": "https://telegra.ph/file/e4d8fadbfe9d34815f0d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5478"
    },
    {
        "IDcode": 5479,
        "title": "[御雷] Because I Love You",
        "cover": "https://telegra.ph/file/14ebc282cc670a0559303.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5479"
    },
    {
        "IDcode": 5480,
        "title": "[ゲズンタイト]ノーパンアンソロジー",
        "cover": "https://telegra.ph/file/c75c1501b00fd2f15de6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5480"
    },
    {
        "IDcode": 5481,
        "title": "[牡丹もちと] サインポはV! (ミルキータイム)",
        "cover": "https://telegra.ph/file/2ca2751f8f26988cbedf6.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5481"
    },
    {
        "IDcode": 5482,
        "title": "[ニム] 我不觉得不道德～!-",
        "cover": "https://telegra.ph/file/d51795c0ae6e29e05f3f0.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5482"
    },
    {
        "IDcode": 5483,
        "title": "[ヨッコラ] SカノMカレ",
        "cover": "https://telegra.ph/file/4415edf1dc0dca81b4789.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5483"
    },
    {
        "IDcode": 5484,
        "title": "[hiro] 美少女演武シルキー★スター",
        "cover": "https://telegra.ph/file/1d179fa9bcfef625fef0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5484"
    },
    {
        "IDcode": 5485,
        "title": "[宮野木ジジ] おにいちゃんクエスト",
        "cover": "https://telegra.ph/file/713bc3356984cb772ffc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5485"
    },
    {
        "IDcode": 5486,
        "title": "[まれお] 向狐狸祈祷",
        "cover": "https://telegra.ph/file/410b734b3a03438078046.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5486"
    },
    {
        "IDcode": 5487,
        "title": "[花巻かえる] 夢見るユズハ",
        "cover": "https://telegra.ph/file/81ef2f40cdc602fed3f0b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5487"
    },
    {
        "IDcode": 5488,
        "title": "[花巻かえる] 彩葉drowning",
        "cover": "https://telegra.ph/file/9f07aa5b72f196fa8dd89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5488"
    },
    {
        "IDcode": 5489,
        "title": "[Batsu] INRUN!!",
        "cover": "https://telegra.ph/file/530632f6a2d12c8fa5c92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5489"
    },
    {
        "IDcode": 5490,
        "title": "[ブラザーピエロ] 汗っかきの天使たち",
        "cover": "https://telegra.ph/file/91405530e49d2963db98f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5490"
    },
    {
        "IDcode": 5491,
        "title": "[菅野タカシ] クローンガール ラブファック",
        "cover": "https://telegra.ph/file/aef95a623342d9afc954f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5491"
    },
    {
        "IDcode": 5492,
        "title": "[煌野一人] 淫蟲のいけにえ",
        "cover": "https://telegra.ph/file/6fd5a611ee64e2a2391c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5492"
    },
    {
        "IDcode": 5493,
        "title": "[Batta] とにかくやれ!!～Just Do It～",
        "cover": "https://telegra.ph/file/16dd48c1640e43d097c95.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5493"
    },
    {
        "IDcode": 5494,
        "title": "[汐焼あゆ] ボクのお腹いっぱいに中出しセックスするんでしょ-",
        "cover": "https://telegra.ph/file/09f7b8c3d8e505a6e635a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5494"
    },
    {
        "IDcode": 5495,
        "title": "[核座頭] 催眠サティスファクション",
        "cover": "https://telegra.ph/file/716c2942f572bd1d0055f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5495"
    },
    {
        "IDcode": 5496,
        "title": "[まる寝子] 雄性先熟",
        "cover": "https://telegra.ph/file/bb2331b2017bfbbbd9c13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5496"
    },
    {
        "IDcode": 5497,
        "title": "[たいばんステーキ] 同情から始まる女装のすすめ",
        "cover": "https://telegra.ph/file/838cec220b1f67e167b34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5497"
    },
    {
        "IDcode": 5498,
        "title": "[AQUI] ユリアはじめての結婚",
        "cover": "https://telegra.ph/file/09fe5174309700a9d9178.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5498"
    },
    {
        "IDcode": 5499,
        "title": "[鈴月あこに] ガンカケ",
        "cover": "https://telegra.ph/file/71b6b3037f5fb5d3304ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5499"
    },
    {
        "IDcode": 5500,
        "title": "[メネア・ザ・ドッグ] マヨちゅっちゅ",
        "cover": "https://telegra.ph/file/6a62467c5e0471c0a9a60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5500"
    },
    {
        "IDcode": 5501,
        "title": "[おじょ] ナマイキ娘にシドウッ!",
        "cover": "https://telegra.ph/file/b4fd5349654c0d9555874.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5501"
    }
];
