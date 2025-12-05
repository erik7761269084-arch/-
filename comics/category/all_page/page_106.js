// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 1501,
        "title": "[銀糖製菓 (玉砂糖)] Hina Archive (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/bdc16e01b429d3a1cac91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1501"
    },
    {
        "IDcode": 1502,
        "title": "[にぎりうさぎ] 心霊スポットに行ったらやっばいのが憑いたので根こそぎ吸い出してもらう【前編】",
        "cover": "https://telegra.ph/file/59905c1f8db00234c2255.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1502"
    },
    {
        "IDcode": 1503,
        "title": "[mamaloni] おうちでやることないので触手召喚してエッチにふける魔法少女",
        "cover": "https://telegra.ph/file/187d3e156e550296875a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1503"
    },
    {
        "IDcode": 1504,
        "title": "[みくろぺえじ (黒本君)] C99じぇーしーみっくす",
        "cover": "https://telegra.ph/file/5e174ed161a3303708d23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1504"
    },
    {
        "IDcode": 1505,
        "title": "[listless time (ment)] バニー藍子をえっちに躾ける本 (アイドルマスターシンデレラガールズ)",
        "cover": "https://telegra.ph/file/36cba7c3727a5ae581e48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1505"
    },
    {
        "IDcode": 1506,
        "title": "(第3回クリスマスフェスタ) [うなぎやさん (花宮なつか)] えむカノ",
        "cover": "https://telegra.ph/file/3a31b40a7f5b2ea2858f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1506"
    },
    {
        "IDcode": 1507,
        "title": "[ナスムスビム] 1日だけのお姉ちゃん (COMIC アンスリウム 2022年2月号)",
        "cover": "https://telegra.ph/file/e986b1704694f19237046.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1507"
    },
    {
        "IDcode": 1508,
        "title": "(C99) [ホロナミンZ (ホロナミン)] [re:]Rape",
        "cover": "https://telegra.ph/file/86a0f7e34984a5d0e22f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1508"
    },
    {
        "IDcode": 1509,
        "title": "[almanacco (居待暦)] よばひ-ε Pavonis- (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/662f34f5730172cb7e78c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1509"
    },
    {
        "IDcode": 1510,
        "title": "[悪魔都市計画 (あくまっこ、トシぞー)] 堕トサレ師匠: ……強く、美しかった憧れの人",
        "cover": "https://telegra.ph/file/b3e7f21d7608788e69b71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1510"
    },
    {
        "IDcode": 1511,
        "title": "[むた] 頼光ママ（another ver.その②） (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/e71f78dc05fb31a8f4044.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1511"
    },
    {
        "IDcode": 1512,
        "title": "[Digital Lover (なかじまゆか)] 孕ませ屋 DLO-16",
        "cover": "https://telegra.ph/file/926919453317005ec9260.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1512"
    },
    {
        "IDcode": 1513,
        "title": "[あろはそふと] 酔っぱらうとおっぱい揉ませてくれるおねえさんは好きですか?",
        "cover": "https://telegra.ph/file/f2de32a90bfae9a31b594.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1513"
    },
    {
        "IDcode": 1514,
        "title": "[黒礫] 宝盗団に捕まったフータオ",
        "cover": "https://telegra.ph/file/4c6e3f8679605ed3ab68e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1514"
    },
    {
        "IDcode": 1515,
        "title": "[エフ屋 (メッシィ)] ふたなりおねえちゃん あまあませっくす",
        "cover": "https://telegra.ph/file/042f0fc508c5159940d0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1515"
    },
    {
        "IDcode": 1516,
        "title": "[彩画堂 (彩画堂)] 地味子ダイアリーFour",
        "cover": "https://telegra.ph/file/a11782df63686046a0a89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1516"
    },
    {
        "IDcode": 1517,
        "title": "[Circle Eden (ヂイスケ)] この温泉は無限の肉で出来ている (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/637a14173f60f423298a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1517"
    },
    {
        "IDcode": 1518,
        "title": "[ふじ家 (ねくたー)] 等身大の姉と夏",
        "cover": "https://telegra.ph/file/313164b7ee25ffc767146.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1518"
    },
    {
        "IDcode": 1519,
        "title": "[闇に蠢く (どくろさん)] 娘の次はママオナホ・オナホ合宿＃2 + おまけ",
        "cover": "https://telegra.ph/file/2de1d627caa73ac3a5539.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1519"
    },
    {
        "IDcode": 1520,
        "title": "[わかまつ] 性欲0な彼女が性衝動に駆られて求愛セックスするようになるまで",
        "cover": "https://telegra.ph/file/7e2655186304ad3b7925b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1520"
    },
    {
        "IDcode": 1521,
        "title": "口内射精しないと死ぬ病気に掛かったＰ& 授乳手コキしてもらわないと死ぬ病気に掛かったＰ(アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/da08a5731a9575613be5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1521"
    },
    {
        "IDcode": 1522,
        "title": "[まるごし] カルミナ水着レ〇プ (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/3421d35faae2915ccd6d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1522"
    },
    {
        "IDcode": 1523,
        "title": "(COMITIA131) [アイソカーブ (アレグロ)] HOTELコランバイン821号室  [MingZ同学个人汉化] (前半部分)",
        "cover": "https://telegra.ph/file/b54e1a74f7b2a4144e309.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1523"
    },
    {
        "IDcode": 1524,
        "title": "(C99) [Horizontal World (またのんき▼)] ももかわるいつま～ももかよいつま4～ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/696b2bace6103ec1b351f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1524"
    },
    {
        "IDcode": 1525,
        "title": "[こらんだむ] メリュ子なんかに絶対負けないマスター (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/acdffc17755701a6e6e3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1525"
    },
    {
        "IDcode": 1526,
        "title": "(C99) [むげんWORKS (秋月秋名)] 鈴谷とあやしい催眠アプリ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/a0437813a9c9709ace729.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1526"
    },
    {
        "IDcode": 1527,
        "title": "[唄飛鳥] 極情性活表裹 第一話「理想と現実の表側」(コミックマグナム Vol.145)",
        "cover": "https://telegra.ph/file/033110d6a89cd25440daa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1527"
    },
    {
        "IDcode": 1528,
        "title": "[唄飛鳥] 極情性活表裹 第二話「理想と現実の裹側」(コミックマグナム Vol.146)",
        "cover": "https://telegra.ph/file/7bc43b3f831dafbb130a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1528"
    },
    {
        "IDcode": 1529,
        "title": "[MAXゴリゴリ (たまいモコ)] 人妻宅配便",
        "cover": "https://telegra.ph/file/23a8b108cd5d9f334762b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1529"
    },
    {
        "IDcode": 1530,
        "title": "(C99) [黒猫館モンプチ (ヤミザワ)] ろーちゃんのサウナで大作戦 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/0ddd17b8ef7f3dbee2a55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1530"
    },
    {
        "IDcode": 1531,
        "title": "(C92) [WICKEDHEART (ZOOTAN)] あおいじぇらぁと (キラキラ☆プリキュアアラモード)",
        "cover": "https://telegra.ph/file/f0443fb6a3e153a56225b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1531"
    },
    {
        "IDcode": 1532,
        "title": "[イシダヤ] ミセスクラブvol4～痴女出没?夏夜のホットスポットへGO!～",
        "cover": "https://telegra.ph/file/e4aff2918be816f6c8227.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1532"
    },
    {
        "IDcode": 1533,
        "title": "[ふみひこ] NO MONEY NO SEX (オタクに優しいギャルとか、巨乳の幼なじみとか。)",
        "cover": "https://telegra.ph/file/023f58835e746f21d2b58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1533"
    },
    {
        "IDcode": 1534,
        "title": "[熟成角砂糖 (sugarBt)] 出会った記憶なんてなかった (トロピカル～ジュ!プリキュア)",
        "cover": "https://telegra.ph/file/f3c56b50fdb4996dc6a25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1534"
    },
    {
        "IDcode": 1535,
        "title": "[オクモト悠太] かふぇ事変! (COMIC 快楽天 2021年7月号)",
        "cover": "https://telegra.ph/file/09cafbba12926bd5bb593.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1535"
    },
    {
        "IDcode": 1536,
        "title": "(C99) [さくらがーでん (しろすず)] マスターさんはしつけ穴に敗北確定でーす (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/5574ac24b04a5e8168a28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1536"
    },
    {
        "IDcode": 1537,
        "title": "[Gehyul Great Demon(魔神ゲヒュール)]催眠アプリでかんたん指導!! [周央珊瑚汉化组]",
        "cover": "https://telegra.ph/file/8c249e10d5d46857ae860.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1537"
    },
    {
        "IDcode": 1538,
        "title": "(C99) [ものくろり (乙倉りんご)] Fantastic Bambi (アイドルマスターシンデレラガールズ)",
        "cover": "https://telegra.ph/file/3a41ebc58065df7fcad46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1538"
    },
    {
        "IDcode": 1539,
        "title": "[山含] 跟星野學姊懶洋洋的打炮 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/bfd4e7ee4a52029e47767.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1539"
    },
    {
        "IDcode": 1540,
        "title": "[水上みずや] ギャルの恩返し (COMIC 快楽天ビースト 2022年2月号)",
        "cover": "https://telegra.ph/file/8f431d908b63a12d0b3ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1540"
    },
    {
        "IDcode": 1541,
        "title": "[烏の倉庫 (カラス)] 家事代行アンドロイドさんになすがまま性処理してもらうお話",
        "cover": "https://telegra.ph/file/5c78a4bb464b1401e1d74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1541"
    },
    {
        "IDcode": 1542,
        "title": "[ざんか] 双子メイドさんに取り合いされるお嬢様",
        "cover": "https://telegra.ph/file/17b3b39da2bb5c273a98a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1542"
    },
    {
        "IDcode": 1543,
        "title": "厕所肉便器",
        "cover": "https://telegra.ph/file/8991fb7e5e03680916f58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1543"
    },
    {
        "IDcode": 1544,
        "title": "[2P-Color (月本築希)] 奉仕係の女の子たち",
        "cover": "https://telegra.ph/file/07ff0265adf8e753675bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1544"
    },
    {
        "IDcode": 1545,
        "title": "[ふか] Gall Flowers (ファイナルファンタジーXIV)",
        "cover": "https://telegra.ph/file/0d690620e03f2b135feb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1545"
    },
    {
        "IDcode": 1546,
        "title": "[牛野缶詰] 蛙の恩返し (いろはにほへと)",
        "cover": "https://telegra.ph/file/28e19873208c52491130f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1546"
    },
    {
        "IDcode": 1547,
        "title": "[爺わら] ワンチャンス (COMIC BAVEL 2022年1月号)",
        "cover": "https://telegra.ph/file/79978d2f2a9f8311baf91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1547"
    },
    {
        "IDcode": 1548,
        "title": "[狛形] リバーシブル (COMIC X-EROS #06)",
        "cover": "https://telegra.ph/file/d2ab283382dd2cbc9a557.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1548"
    },
    {
        "IDcode": 1549,
        "title": "(COMIC1☆8) [Number2 (たくじ)] 撮影の後は好きにしていいよ♪ (ラブライブ!)",
        "cover": "https://telegra.ph/file/a946f6f4e4f4cfab30268.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1549"
    },
    {
        "IDcode": 1550,
        "title": "[VV_SXX]魔女之旅",
        "cover": "https://telegra.ph/file/6c4dba70804d27bb48762.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1550"
    },
    {
        "IDcode": 1551,
        "title": "[VV_SXX]刻晴",
        "cover": "https://telegra.ph/file/af670890b303436675057.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1551"
    },
    {
        "IDcode": 1552,
        "title": "[VV_SXX]套图合集",
        "cover": "https://telegra.ph/file/ed62288af55ca5137bb10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1552"
    },
    {
        "IDcode": 1553,
        "title": "[きょくちょ局 (きょくちょ)] メイド教育。2 -没落貴族 瑠璃川椿-",
        "cover": "https://telegra.ph/file/2e379b8f93ea526512ab5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1553"
    },
    {
        "IDcode": 1554,
        "title": "[純なり (ニヒト)] 母子から始める恋愛関係",
        "cover": "https://telegra.ph/file/d9d4416ce7d511492a396.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1554"
    },
    {
        "IDcode": 1555,
        "title": "[つくすん] フキちゃんは不機嫌 (コミック Mate legend Vol.43 2022年2月号)",
        "cover": "https://telegra.ph/file/19f382583bb7a40361776.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1555"
    },
    {
        "IDcode": 1556,
        "title": "(C99) [Quick kick Lee (吉村竜巻)] 帰巣煩悩 (モンスターハンターライズ)",
        "cover": "https://telegra.ph/file/486a2bf8012a292c18710.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1556"
    },
    {
        "IDcode": 1557,
        "title": "(C99) [るるえぱあにまーと (るるえぱ)] NO.1ピンサロ嬢アリスちゃん ~ネコチャン感謝デー~ (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/38e5deb287b4b3eed9321.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1557"
    },
    {
        "IDcode": 1558,
        "title": "[ひやかけごはん (小矢部亮)] 現パロハーヴィンハーレムアパート日常編 (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/70466ae9769c4ed056659.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1558"
    },
    {
        "IDcode": 1559,
        "title": "[ひやかけごはん (小矢部亮)] 現パロハーヴィンハーレムアパート台風編 (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/365b3f3a2a9a58fb54363.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1559"
    },
    {
        "IDcode": 1560,
        "title": "[巻貝一ヶ] 脱童貞 姉弟母乳ソープ (G-エッヂ Vol.013)",
        "cover": "https://telegra.ph/file/ee9b0001094e6fbff7d0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1560"
    },
    {
        "IDcode": 1561,
        "title": "[液態水] 白濁的冠軍之戰!",
        "cover": "https://telegra.ph/file/b5f8f2ac7face1c9770b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1561"
    },
    {
        "IDcode": 1562,
        "title": "[MANA] 申鶴 2",
        "cover": "https://telegra.ph/file/bfe7b09f785595c20a3a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1562"
    },
    {
        "IDcode": 1563,
        "title": "[Darkmaya] 沙花叉に風呂に入らせて大作戦 part2 (沙花叉クロヱ)",
        "cover": "https://telegra.ph/file/5473e0117e4f7484aa7e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1563"
    },
    {
        "IDcode": 1564,
        "title": "[あんこまん] 虞美人、蘭陵王とウワキセックスする (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/cfefb32863bb17ad626bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1564"
    },
    {
        "IDcode": 1565,
        "title": "[南乃さざん] この世の乳は俺のもの！2乳目 (COMIC 失楽天 2022年2月号)",
        "cover": "https://telegra.ph/file/5ae5eac895d201d2c6c00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1565"
    },
    {
        "IDcode": 1566,
        "title": "[チョコヘル] ママは元グラドル僕は我慢出来ない",
        "cover": "https://telegra.ph/file/7ae4bdc307a7d0c602e57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1566"
    },
    {
        "IDcode": 1567,
        "title": "(C99) [AOKIHOSHI (全紅白子)] 悪堕ちフォーミダブルの育て方 (アズールレーン)",
        "cover": "https://telegra.ph/file/b641abb9de1e6761934dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1567"
    },
    {
        "IDcode": 1568,
        "title": "[草野郎] スレイブボール洗脳～シロナ&ガブリアス編～ (ポケットモンスター ダイヤモンド・パール)",
        "cover": "https://telegra.ph/file/49fbaa6fbb92ed88ca661.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1568"
    },
    {
        "IDcode": 1569,
        "title": "[SOULFLY (ムサシマル)] SOULFLY 7",
        "cover": "https://telegra.ph/file/77aefe19140dd22a5d283.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1569"
    },
    {
        "IDcode": 1570,
        "title": "[WLHO] 隣に住む優しいお姉ちゃんに告白したら…?!",
        "cover": "https://telegra.ph/file/abcd3443061af199096b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1570"
    },
    {
        "IDcode": 1571,
        "title": "[境外天元 (桃吹リオ)] 洗脳された家元達の全裸淫肉撮影会 (ガールズ&パンツァー)",
        "cover": "https://telegra.ph/file/15c292925b256684994e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1571"
    },
    {
        "IDcode": 1572,
        "title": "[ペテン師] ゆかりさんと触手ソファー (VOICEROID)",
        "cover": "https://telegra.ph/file/2b68be2e8f003d8c1fd52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1572"
    },
    {
        "IDcode": 1573,
        "title": "[kuretudenn] 家出少年を拾ったら実は女の子でした (COMIC 阿吽 改 Vol.17)",
        "cover": "https://telegra.ph/file/398ea989c04ec65dbeb7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1573"
    },
    {
        "IDcode": 1574,
        "title": "(C99) [Candy Club (スカイ)] お姉ちゃんととろける気持ち3",
        "cover": "https://telegra.ph/file/41c6066befd82e9d99e37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1574"
    },
    {
        "IDcode": 1575,
        "title": "(C94) [大事なことは二回も言わない (はせべso鬱)] アリスの生き人形 (東方Project)",
        "cover": "https://telegra.ph/file/00f5a572c353952134ae8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1575"
    },
    {
        "IDcode": 1576,
        "title": "[ビーメロクリシェ (サインこす)] 種付デビュー!? (おちこぼれフルーツタルト)",
        "cover": "https://telegra.ph/file/ab26c26c6bcad407d0dcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1576"
    },
    {
        "IDcode": 1577,
        "title": "[MM] 催眠健康診断 (ホロライブ)",
        "cover": "https://telegra.ph/file/19eff0e03839c8db9bb1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1577"
    },
    {
        "IDcode": 1578,
        "title": "[ぎばちゃん] エルフさん過去編①~⑧",
        "cover": "https://telegra.ph/file/f2d16055bd9500f463dea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1578"
    },
    {
        "IDcode": 1579,
        "title": "(C92) [毒パン工房 (毒コロネ)] 小野塚小町壁尻の刑に処す (東方Project)",
        "cover": "https://telegra.ph/file/4d638f13efa05d74326de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1579"
    },
    {
        "IDcode": 1580,
        "title": "[PX-Real (菅野タカシ)] 魔法少女錬精システム EPISODE 05",
        "cover": "https://telegra.ph/file/0c786bc054775afd16d95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1580"
    },
    {
        "IDcode": 1581,
        "title": "(サンクリ2021 Summer) [あるへゐと (むうつき)] 熱の灯った指先で、きみの輪郭をなぞる (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/567637a20d9bd462b40d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1581"
    },
    {
        "IDcode": 1582,
        "title": "[あくま] 好きな男子に告白したら、ビッチにされるトラップだった件 (COMIC BAVEL 2019年7月号)",
        "cover": "https://telegra.ph/file/48b367011de3a1b220c12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1582"
    },
    {
        "IDcode": 1583,
        "title": "[SweetEdda (ろき)] SweetEdda vol.07 淫魔改造編 淫魔の探究者インテレッセ",
        "cover": "https://telegra.ph/file/77ad31d0e1721a9fc8540.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1583"
    },
    {
        "IDcode": 1584,
        "title": "[花兄けい] 夜のないしょ (COMIC BAVEL 2022年3月号)",
        "cover": "https://telegra.ph/file/3100dd33798badb471e94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1584"
    },
    {
        "IDcode": 1585,
        "title": "[黒礫] 脅迫されて犯されるフータオ (原神)",
        "cover": "https://telegra.ph/file/186ed9262bbadcdd140a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1585"
    },
    {
        "IDcode": 1586,
        "title": "(C99) [秘密結社M (北原亜希)] 転生したら触手妖魔だった件 (美少女戦士セーラームーン)",
        "cover": "https://telegra.ph/file/a71f79ec215f50a7f990b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1586"
    },
    {
        "IDcode": 1587,
        "title": "(歌姫庭園23) [春工房 (春工房のりまき)] ミリエロ05 (アイドルマスター ミリオンライブ!)",
        "cover": "https://telegra.ph/file/07ee936c5b72759180176.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1587"
    },
    {
        "IDcode": 1588,
        "title": "[火愚夜] 特務戦隊カラフル・フォース 第5話 (二次元ドリームマガジン Vol.117)",
        "cover": "https://telegra.ph/file/4153b856583594878d09b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1588"
    },
    {
        "IDcode": 1589,
        "title": "[メメ50] ガマンできない不倫旅行",
        "cover": "https://telegra.ph/file/d930fa43e3902cf4ff0ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1589"
    },
    {
        "IDcode": 1590,
        "title": "[唄飛鳥] MONSTER 謀欲ノ棲",
        "cover": "https://telegra.ph/file/3dfa736486536f10b182b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1590"
    },
    {
        "IDcode": 1591,
        "title": "[ACID EATERS (和馬村政)] ぼくの診療所へようこそ。 (ヒーリングっど♥プリキュア)",
        "cover": "https://telegra.ph/file/02e389749db882a840be0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1591"
    },
    {
        "IDcode": 1592,
        "title": "(C94) [縄色ソナタ (Himitsu)] 天空と冥界の檻 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/2f5f3d3007fa4bc6af960.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1592"
    },
    {
        "IDcode": 1593,
        "title": "[オタクビーム (大塚まひろ)] 倉田有稀子の告白 3",
        "cover": "https://telegra.ph/file/3cf5810a9d61b5a798272.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1593"
    },
    {
        "IDcode": 1594,
        "title": "[アットホーム酒家 (たくのみ)] 現界集落～エルフの村で過ごすHな夏休み～",
        "cover": "https://telegra.ph/file/344194ef97c0ba776b220.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1594"
    },
    {
        "IDcode": 1595,
        "title": "(C99) [Part K (羊羽忍)] チョロいカーマは面倒くさい (※カワイイ) (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/dda71fbe1e6503f83f35b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1595"
    },
    {
        "IDcode": 1596,
        "title": "[おぶせっしょん! (ひょうが。)] お姉さん組deムラムラ我慢 (ホロライブ)",
        "cover": "https://telegra.ph/file/966c023778310fb406482.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1596"
    },
    {
        "IDcode": 1597,
        "title": "[Copin (藍沢ちひろ)] ツン子先生と編集くん",
        "cover": "https://telegra.ph/file/c4e9268617e7a58a95846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1597"
    },
    {
        "IDcode": 1598,
        "title": "[ごまブラザーズ (ごまぶら)] フェミナイザー ～ナメてたオタクが実がヤバい奴だった話～",
        "cover": "https://telegra.ph/file/c4e9268617e7a58a95846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1598"
    },
    {
        "IDcode": 1599,
        "title": "[文雅] ひまわりの咲く頃に (コミック エグゼ 34)",
        "cover": "https://telegra.ph/file/a37b4be9d066a6dbb770c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1599"
    },
    {
        "IDcode": 1600,
        "title": "[wyvern s4]UMP45 调教",
        "cover": "https://telegra.ph/file/de20dc88ca14192ca2359.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1600"
    }
];
