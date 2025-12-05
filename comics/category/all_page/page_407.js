// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 4601,
        "title": "(C89) [OrangeMaru (JP06)] 売れないJKアイドルに枕営業させてみた (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/d32749ecb5f17c837df2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4601"
    },
    {
        "IDcode": 4602,
        "title": "[ドラチェフ] ママさんバレーのスケベな昼下がり (交尾のお時間)",
        "cover": "https://telegra.ph/file/d28bc607606e6904563bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4602"
    },
    {
        "IDcode": 4603,
        "title": "[佐倉さくさく (佐倉さくさくら)] JK彼女が蛇娘化して産卵した話",
        "cover": "https://telegra.ph/file/f34b22c92ef41eab5701f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4603"
    },
    {
        "IDcode": 4604,
        "title": "[てっこ] 「アソコのきゅんきゅんが止まらないのぉ…!」バレたらアウト!? 男装巨乳♀と痴漢満員電車 3",
        "cover": "https://telegra.ph/file/79b098e346d20c2c55c1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4604"
    },
    {
        "IDcode": 4605,
        "title": "[角煮煮] 常識改変活動記録 #08. 暴かれた常識改変 (WEEKLY快楽天 2021 No.37)",
        "cover": "https://telegra.ph/file/4aa1b92e73437fe1895b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4605"
    },
    {
        "IDcode": 4606,
        "title": "[SAIGA堂] ワンコインで中だしOK!～毎月7日はヘンタイGAME～",
        "cover": "https://telegra.ph/file/e1aae458e4b2c139b8f43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4606"
    },
    {
        "IDcode": 4607,
        "title": "[2no.] 虎の意を狩る兎 (コミックホットミルク 2020年8月号)",
        "cover": "https://telegra.ph/file/9e54e8289fb87bb3025f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4607"
    },
    {
        "IDcode": 4608,
        "title": "[あいらんどう] 先生おちんちん見せてください! (COMIC LO 2021年7月号)",
        "cover": "https://telegra.ph/file/2a1af4b38d6777f60ce22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4608"
    },
    {
        "IDcode": 4609,
        "title": "[神毛物由宇] アクマでJK！",
        "cover": "https://telegra.ph/file/4c6479ab838cc0a511683.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4609"
    },
    {
        "IDcode": 4610,
        "title": "(サンクリ2019 Summer) [ふらいぱん大魔王 (提灯暗光)] 橘ありすと催眠アプリ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/12d990d8cea2e8ac6544d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4610"
    },
    {
        "IDcode": 4611,
        "title": "(プリズム☆ジャンプ11) [ふらいぱん大魔王 (提灯暗光)] システムですから#3 (プリパラ)",
        "cover": "https://telegra.ph/file/ae2a3ed872e0c4ece5f60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4611"
    },
    {
        "IDcode": 4612,
        "title": "[骨粉 (ホネ)] 三船さんと乙倉ちゃんと催眠SEX (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/2962522a6c9c15fea7f79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4612"
    },
    {
        "IDcode": 4613,
        "title": "[宮野金太郎] 異世界で女の子のオナネタが見える能力を手に入れた俺がそれだけを武器に世界を救う!?",
        "cover": "https://telegra.ph/file/2eb607d4636ba56136de1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4613"
    },
    {
        "IDcode": 4614,
        "title": "ドラチェフ杂图",
        "cover": "https://telegra.ph/file/e3a836d70f7e8e843dc18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4614"
    },
    {
        "IDcode": 4615,
        "title": "[小島紗] 邪ンヌ調教アナル (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/0a5723a8c206dc060454d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4615"
    },
    {
        "IDcode": 4616,
        "title": "[アトリエマゾ (doskoinpo)] ヒーロー失格  [進行中]",
        "cover": "https://telegra.ph/file/1490b4cf82313a3d0388f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4616"
    },
    {
        "IDcode": 4617,
        "title": "[しいたけ農園 (Kanabun)] ビーチであそぼ  [進行中]",
        "cover": "https://telegra.ph/file/55302774436b702069b41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4617"
    },
    {
        "IDcode": 4618,
        "title": "[瀬奈陽太郎] 放課後と先輩と (COMICペンギンクラブ2021年10月号)",
        "cover": "https://telegra.ph/file/238c73f570936d0e4321c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4618"
    },
    {
        "IDcode": 4619,
        "title": "[肉ドリル (鉄巻とーます)] 人外春漫 11",
        "cover": "https://telegra.ph/file/e479391f356a4ceec2e71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4619"
    },
    {
        "IDcode": 4620,
        "title": "[ErotIs (成田コウ)] 継母といっしょ",
        "cover": "https://telegra.ph/file/3fab3ba259b79eb16087c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4620"
    },
    {
        "IDcode": 4621,
        "title": "[トリブリ] あいつはスカートを履く (COMIC LO 2021年10月号)",
        "cover": "https://telegra.ph/file/72e6d08d4ae061d92efb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4621"
    },
    {
        "IDcode": 4622,
        "title": "[ElectricSheep (シビレヒツジ)] 実験体J秘匿洗脳改造実験ファイル (バイオハザード)",
        "cover": "https://telegra.ph/file/f9d73b91cbe736d6a213b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4622"
    },
    {
        "IDcode": 4623,
        "title": "[木瀬樹] アイドル・プランニング (WEEKLY快楽天 2021 No.38)",
        "cover": "https://telegra.ph/file/417b1daa5b5490c0149e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4623"
    },
    {
        "IDcode": 4624,
        "title": "[すこぶるやま (イトハナ)] 先輩!もっと俺にご褒美ください!",
        "cover": "https://telegra.ph/file/5c7271917b5f296f812b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4624"
    },
    {
        "IDcode": 4625,
        "title": "[栗原ケンシロウ] 彼女はスキだらけ (COMIC ExE 32)",
        "cover": "https://telegra.ph/file/3bfcd828b292c1695f3a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4625"
    },
    {
        "IDcode": 4626,
        "title": "[Ash横島] 曲尺手さんと大縄くん２～曲尺手さんとデート編～ (COMIC X-EROS #90)",
        "cover": "https://telegra.ph/file/5c89f523c4791a531de52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4626"
    },
    {
        "IDcode": 4627,
        "title": "[高岡基文] 華奢な娘の挿入心地は…熱ッ!",
        "cover": "https://telegra.ph/file/0f30df63b26d57c160c4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4627"
    },
    {
        "IDcode": 4628,
        "title": "[赤セイリュウ] 初売り(COMIC 快楽天 2021年11月号)",
        "cover": "https://telegra.ph/file/ae1164f83f2d9e0366f78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4628"
    },
    {
        "IDcode": 4629,
        "title": "[おこっ亭] ギャルセックスビーチ",
        "cover": "https://telegra.ph/file/21c3b889644bcb652ca9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4629"
    },
    {
        "IDcode": 4630,
        "title": "(C95) [nemuke？ (似せ)] 昔してた姉弟",
        "cover": "https://telegra.ph/file/aabcd2733bb22bf52a688.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4630"
    },
    {
        "IDcode": 4631,
        "title": "[TSF妄想蓄積所 (カネコナオヤ)] めたもる★コーディネート2～姉の友人編・女体化編～",
        "cover": "https://telegra.ph/file/ea4e2e8fa81fe92838030.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4631"
    },
    {
        "IDcode": 4632,
        "title": "[あいるあいる (あいる)] 僕にハーレムセフレができた理由",
        "cover": "https://telegra.ph/file/b91534a8415e1535a5e09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4632"
    },
    {
        "IDcode": 4633,
        "title": "[ワッフル同盟犬 (田中竕)] 催眠用務員",
        "cover": "https://telegra.ph/file/dc48e2bf3c056691d93e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4633"
    },
    {
        "IDcode": 4634,
        "title": "(こみトレ35) [特盛アヒージョ (佐藤八千流)] カーミラさんを崩したい。 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/11894bb8015c946fa4551.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4634"
    },
    {
        "IDcode": 4635,
        "title": "(第2回ウルトラサマーフェスタ) [うかつではない (noukatu、水瀬くうる)] ブルアカ催眠モモトーク (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/a8b5de3450c701b0247a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4635"
    },
    {
        "IDcode": 4636,
        "title": "(メガ秋葉原同人祭 第3回) [r.i.s factory (るしゅーと)] SEASIDE SARA (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/3b49cbf9dfec29969dad0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4636"
    },
    {
        "IDcode": 4637,
        "title": "[Metal Owl] iroha [Decensored]",
        "cover": "https://telegra.ph/file/a7b88d57af13a0727be90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4637"
    },
    {
        "IDcode": 4638,
        "title": "[笹弘] いっつにょーたいむ! (COMIC アンスリウム 2021年9月号)",
        "cover": "https://telegra.ph/file/7a26bce6c22eb4c56d057.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4638"
    },
    {
        "IDcode": 4639,
        "title": "[ねここや (かんな久)] 熱帯夜の部屋で寝ている妹をどうするか？",
        "cover": "https://telegra.ph/file/dbc9c2809fefcb6410792.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4639"
    },
    {
        "IDcode": 4640,
        "title": "[Moo] どう考えても将軍様が鉄壁すぎて無理矢理妄想した絵 (原神) [打嗝汉化组]",
        "cover": "https://telegra.ph/file/d57406132c1dce9417d0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4640"
    },
    {
        "IDcode": 4641,
        "title": "[ぽぽちち (八尋ぽち)] 古見さんは、ビン感です。 (古見さんは、コミュ症です。)",
        "cover": "https://telegra.ph/file/b46973e86133b135cb625.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4641"
    },
    {
        "IDcode": 4642,
        "title": "[サガッとる] アンダーヘアサロン～人妻陰毛ヌメり堕とし～ (ANGEL 倶楽部 2019年7月号)",
        "cover": "https://telegra.ph/file/9aea1381e174c23d64c5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4642"
    },
    {
        "IDcode": 4643,
        "title": "[サガッとる] 姉、ちゃんと交さろう (夏艶母姿)",
        "cover": "https://telegra.ph/file/580652a7b4d0bcc1a0a2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4643"
    },
    {
        "IDcode": 4644,
        "title": "[サガッとる] 乱連似姿 夏艶母姿・エピローグ (夏艶母姿)",
        "cover": "https://telegra.ph/file/b2812c1ef94d2f4e719c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4644"
    },
    {
        "IDcode": 4645,
        "title": "[ふじはん] お嬢様もエッチがしたい (COMIC BAVEL 2019年10月号)",
        "cover": "https://telegra.ph/file/5486a13337de49720f490.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4645"
    },
    {
        "IDcode": 4646,
        "title": "[ICE] ヒミツの淫猥病棟 (穢されグラマラス)",
        "cover": "https://telegra.ph/file/82dd8bcb6abb6e4cac905.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4646"
    },
    {
        "IDcode": 4647,
        "title": "[ささちん] むーでぃーべいびー♥ (COMIC BAVEL 2020年5月号)",
        "cover": "https://telegra.ph/file/3ff5b6a11c965080db760.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4647"
    },
    {
        "IDcode": 4648,
        "title": "[Smokin] ゴブリン退治へ失敗 [日本語、英語、中国語]]",
        "cover": "https://telegra.ph/file/944b82fb54c0ed06772ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4648"
    },
    {
        "IDcode": 4649,
        "title": "(例大祭13) [こおろぎコミックス (うろん)] パチュリーの初イキ鬼アクメと産卵事情 (東方Project)",
        "cover": "https://telegra.ph/file/17c90e5f9a307bac5d589.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4649"
    },
    {
        "IDcode": 4650,
        "title": "[ムサシマル] 放課後Threesome! (コミックホットミルク 2020年7月号)",
        "cover": "https://telegra.ph/file/4762595795332441e5db4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4650"
    },
    {
        "IDcode": 4651,
        "title": "[品川ミクズ] 短篇fanbox[一只麻利的鸽子汉化]",
        "cover": "https://telegra.ph/file/1ac8ca67a974642181843.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4651"
    },
    {
        "IDcode": 4652,
        "title": "重口慎入！(C78) [ネコネコ・パンチュッ! (ねこねこぱんちゅっ)] 三姉妹調教遊戯【由香里編】ゆかりちゃんの豚鼻家畜調教【アナル被虐授業】",
        "cover": "https://telegra.ph/file/a1031199c0bb31b79ec67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4652"
    },
    {
        "IDcode": 4653,
        "title": "(C87) [GREAT芥 (tokyo)] ホルンの魔女つかまえた (アークザラッド)",
        "cover": "https://telegra.ph/file/9c505b14f6c4cc117c8c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4653"
    },
    {
        "IDcode": 4654,
        "title": "[Metal Owl] shiho [Decensored]",
        "cover": "https://telegra.ph/file/31f37661796354a10c6e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4654"
    },
    {
        "IDcode": 4655,
        "title": "(COMIC1☆19) [ヤバ谷らんど (ほみなみあ)] 雷電将軍と×××の特訓をする本 (原神)",
        "cover": "https://telegra.ph/file/392d08db3f44900de5746.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4655"
    },
    {
        "IDcode": 4656,
        "title": "[ジェニガタ] NTRiage〜愛を誓う…ハズでした〜 (二次元コミックマガジン エロビッチに寝取られた男たち Vol.1)",
        "cover": "https://telegra.ph/file/fb3b237b3f03789fd99b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4656"
    },
    {
        "IDcode": 4657,
        "title": "(COMIC1☆19) [ヤバ谷らんど (ほみなみあ)] 雷電将軍と×××の特訓をする本 (原神)",
        "cover": "https://telegra.ph/file/fae9dc2add2ac0de1643b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4657"
    },
    {
        "IDcode": 4658,
        "title": "[にのこや (にの子)] 少女回春9 通い妻調教編",
        "cover": "https://telegra.ph/file/2734e0edcacd71a7b2987.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4658"
    },
    {
        "IDcode": 4659,
        "title": "[ちょりもっき] 優しく奪って (COMIC 快楽天 2021年8月号)",
        "cover": "https://telegra.ph/file/7a614ae6452d2b2a56cac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4659"
    },
    {
        "IDcode": 4660,
        "title": "[7×2] なければ良かった (COMIC 快楽天ビースト 2021年11月号)",
        "cover": "https://telegra.ph/file/20a69c3d965279e330e15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4660"
    },
    {
        "IDcode": 4661,
        "title": "[B-銀河] 催眠シスター",
        "cover": "https://telegra.ph/file/f71294eb6a24df0cb8498.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4661"
    },
    {
        "IDcode": 4662,
        "title": "[日月ネコ] 結婚するまで交尾禁止 (コミックグレープ Vol.96)",
        "cover": "https://telegra.ph/file/986a09ebc53148619664f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4662"
    },
    {
        "IDcode": 4663,
        "title": "[ブッパスタジオ (綾枷ちよこ)] ヤリ目ナイトプール",
        "cover": "https://telegra.ph/file/6543a6934c2e3ccf71103.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4663"
    },
    {
        "IDcode": 4664,
        "title": "[nounanka (あぶぶ)] 近所の女達が何故か俺の家の風呂に入りに来る件",
        "cover": "https://telegra.ph/file/bd7701d93c2084c9ef204.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4664"
    },
    {
        "IDcode": 4665,
        "title": "(C96) [リバ島 (矢島Index)] もっとくいこめ!ブルマにあむ (響け! ユーフォニアム)",
        "cover": "https://telegra.ph/file/3754699bf17e3994a2e0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4665"
    },
    {
        "IDcode": 4666,
        "title": "[ママの匂い] おち○ぽ馬鹿になったうちのお母さん2",
        "cover": "https://telegra.ph/file/e26a3aa539e9ab2218be4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4666"
    },
    {
        "IDcode": 4667,
        "title": "[SeN] 白い雪、溶けて茜色 (コミックアンリアル 2021年10月号 Vol.93)",
        "cover": "https://telegra.ph/file/3b301f84e82dfa8beb472.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4667"
    },
    {
        "IDcode": 4668,
        "title": "[脱穀機動隊 S.A.C (脱穀次郎)] ふたなり でかチンスクールライフ",
        "cover": "https://telegra.ph/file/2275eb9e35474da42b43d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4668"
    },
    {
        "IDcode": 4669,
        "title": "[ICE] 淫姦オークション 後編 (穢されグラマラス)",
        "cover": "https://telegra.ph/file/cfcbddaa8f7819054fea3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4669"
    },
    {
        "IDcode": 4670,
        "title": "[黒岩瑪瑙] 文芸部の狼 (たべごろ!背徳の果実)",
        "cover": "https://telegra.ph/file/0919a777061cbd86250b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4670"
    },
    {
        "IDcode": 4671,
        "title": "[砂川多良] 罪悪感と快楽主義 (若妻蟻地獄)",
        "cover": "https://telegra.ph/file/be8067228b010da53cb93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4671"
    },
    {
        "IDcode": 4672,
        "title": "[十はやみ] 二人の夜 (濡れたまなざし)",
        "cover": "https://telegra.ph/file/f1a77199ec80d1e905aa1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4672"
    },
    {
        "IDcode": 4673,
        "title": "[室永叉焼] 先輩!練習より本番ッス♥ (義母さんの埋もれたい肉)",
        "cover": "https://telegra.ph/file/13b2e6de67eb2bba69398.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4673"
    },
    {
        "IDcode": 4674,
        "title": "[B-銀河] 催眠JK清掃委員ちゃん",
        "cover": "https://telegra.ph/file/9457827403ab1128de1e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4674"
    },
    {
        "IDcode": 4675,
        "title": "[ねいさん] 透の普段見せない顔 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/02f6e9a6892aad666088e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4675"
    },
    {
        "IDcode": 4676,
        "title": "[荒井啓] 秋桜が咲いた日に 第1話 (コミックホットミルク 2021年10月号)",
        "cover": "https://telegra.ph/file/e1cdea78bbf36782bea0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4676"
    },
    {
        "IDcode": 4677,
        "title": "[荒井啓] 秋桜が咲いた日に 第2話 (コミックホットミルク 2021年10月号)",
        "cover": "https://telegra.ph/file/b80002ac6ef77316b57d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4677"
    },
    {
        "IDcode": 4678,
        "title": "[ねこてゐ] 🎀Abby🎀 (Fate Grand Order)",
        "cover": "https://telegra.ph/file/77e2de321ab67df5913ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4678"
    },
    {
        "IDcode": 4679,
        "title": "[ひびんぽ] ほろ酔い千雪と生えっちする話 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/4fe7ee3726cd558bc58f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4679"
    },
    {
        "IDcode": 4680,
        "title": "(メガ秋葉原同人祭 第3回) [RedDelicious (Sha)] 竜人双子のおもてなし (モンスターハンターライズ)",
        "cover": "https://telegra.ph/file/dbbf68e4d87ae235a435f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4680"
    },
    {
        "IDcode": 4681,
        "title": "(C78) [常時無常 (篠塚醸二)] うらむぎ (けいおん！)",
        "cover": "https://telegra.ph/file/2678511d9b5c54288cd08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4681"
    },
    {
        "IDcode": 4682,
        "title": "[江森うき] 催眠アプリで始まる近親関係 (コミックホットミルク濃いめ vol.30)",
        "cover": "https://telegra.ph/file/70ab021ca717aa55811f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4682"
    },
    {
        "IDcode": 4683,
        "title": "[Small Marron (アサクラククリ)] 性交秘話〜彼氏持ちの私が年下のオタクに堕とされるまで〜",
        "cover": "https://telegra.ph/file/83a05b737474e84db48f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4683"
    },
    {
        "IDcode": 4684,
        "title": "[さやかた紅茶館 (さやかたかつみ)] 幻想郷淫語ラップ選手権 (東方Project)",
        "cover": "https://telegra.ph/file/71d94099ab09a3a31c7ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4684"
    },
    {
        "IDcode": 4685,
        "title": "(C87) [民宿いなりむし (終焉)] 乳これ vol.03 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/f57301e2132b18d0a79f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4685"
    },
    {
        "IDcode": 4686,
        "title": "[双葉八重] たった1人!?の性教育者 (COMIC 真激 2019年10月号)",
        "cover": "https://telegra.ph/file/4f85710add428547ee9dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4686"
    },
    {
        "IDcode": 4687,
        "title": "[触服D] スライム触手服",
        "cover": "https://telegra.ph/file/1f0b312fb5a6047377373.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4687"
    },
    {
        "IDcode": 4688,
        "title": "[みぃとばん] ニンニンパニック! (コミックホットミルク 2021年1月号)",
        "cover": "https://telegra.ph/file/ffc3c45d8064d398ecf1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4688"
    },
    {
        "IDcode": 4689,
        "title": "[美矢火] 純愛リリシズム とらのあな特典",
        "cover": "https://telegra.ph/file/7893e3ef9062063ccaa52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4689"
    },
    {
        "IDcode": 4690,
        "title": "[双葉八重] まねっこフィクション (COMIC 真激 2020年1月号)",
        "cover": "https://telegra.ph/file/a1085021115aa6ba625a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4690"
    },
    {
        "IDcode": 4691,
        "title": "[月光亭 (セレス龍)] 女の子になっちゃったうちのサーヴァントからのホワイトデイ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/796622faa569e4aa73d99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4691"
    },
    {
        "IDcode": 4692,
        "title": "[にぎりうさぎ] 先輩に自分がメスである事をわからされる後輩・続【後編】",
        "cover": "https://telegra.ph/file/7bebd5f349a206482e839.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4692"
    },
    {
        "IDcode": 4693,
        "title": "[0ぷらす] 痴女は嫌いですか?",
        "cover": "https://telegra.ph/file/595fcba36ecd4c014e27b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4693"
    },
    {
        "IDcode": 4694,
        "title": "[モスキートマン] 息子の身代わりにDQNに抱かれる 堅物で勝気な爆乳ママ!",
        "cover": "https://telegra.ph/file/d02c31629c0dcc0792037.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4694"
    },
    {
        "IDcode": 4695,
        "title": "[綿120パーセント (めんようじゃん)] Girls & GoblinSlayer (ゴブリンスレイヤー)",
        "cover": "https://telegra.ph/file/0387df419cec5ddffafd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4695"
    },
    {
        "IDcode": 4696,
        "title": "[ピリオデストラクション (ぴりぷん)] 次の人生のわたしへ",
        "cover": "https://telegra.ph/file/062f7b83cd7c30936d76d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4696"
    },
    {
        "IDcode": 4697,
        "title": "[モスキートマン] 母ちゃんとチャラ男",
        "cover": "https://telegra.ph/file/f1d1c0f0edac932141f7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4697"
    },
    {
        "IDcode": 4698,
        "title": "[ぼちぼちの木 (ぼるしち)] まぞくのうすい書 (まちカドまぞく)",
        "cover": "https://telegra.ph/file/1c604dbbc61aada47965e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4698"
    },
    {
        "IDcode": 4699,
        "title": "[むげんWORKS (秋月秋名)] ご主人様といっしょ♡ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/186d1203a16b96aed9362.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4699"
    },
    {
        "IDcode": 4700,
        "title": "[しいたけ農園 (kanabun)] 花岡 ゆりx 木谷 千沙 - はじめてのアルバイト",
        "cover": "https://telegra.ph/file/acbf9ecb29dc8d764ddb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4700"
    }
];
