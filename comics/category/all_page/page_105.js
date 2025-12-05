// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 1401,
        "title": "[かるま龍狼] 菜穂ちゃんはオナホ屋さん2 (WEEKLY快楽天 2022 No.15)",
        "cover": "https://telegra.ph/file/f9bc61414f51d699141d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1401"
    },
    {
        "IDcode": 1402,
        "title": "[よしおエレキ] 君を守りたい (ダンジョン攻略はSEXで!! VOL.2)",
        "cover": "https://telegra.ph/file/b8c2ae76bb99002e3af92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1402"
    },
    {
        "IDcode": 1403,
        "title": "[にげサポ] 搾精ペットになれるかな?～人外ちゃんたちに搾られる～",
        "cover": "https://telegra.ph/file/016015bc26eb510e08a7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1403"
    },
    {
        "IDcode": 1404,
        "title": "[尻戦車] 聖煌戦姫ジュエルルミナス 乙女ふたり堕つる時",
        "cover": "https://telegra.ph/file/c98011dffef13e6ee8b13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1404"
    },
    {
        "IDcode": 1405,
        "title": "[クレスタ (呉マサヒロ)] GoToコヅクリ2ndseason ~今度は海でコヅクリ!~",
        "cover": "https://telegra.ph/file/9b2fb26767fe9a5d958dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1405"
    },
    {
        "IDcode": 1406,
        "title": "[ドラチェフ] 格安物件♥サキュバス付き (コミックホットミルク 2020年12月号)",
        "cover": "https://telegra.ph/file/332dbbe47c71892150766.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1406"
    },
    {
        "IDcode": 1407,
        "title": "[ひょころー] かくしデレ",
        "cover": "https://telegra.ph/file/4ef8a99b477f32e62e243.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1407"
    },
    {
        "IDcode": 1408,
        "title": "[桃吹リオ] 痴情の極み",
        "cover": "https://telegra.ph/file/18967b750bd80842eb36f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1408"
    },
    {
        "IDcode": 1409,
        "title": "[ガロウド] 菓子鬼こちら",
        "cover": "https://telegra.ph/file/fcf4ecc2b89d1c74b771e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1409"
    },
    {
        "IDcode": 1410,
        "title": "[五月猫] 性なる処女たち",
        "cover": "https://telegra.ph/file/7221b8dbf9f59f0a98a00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1410"
    },
    {
        "IDcode": 1411,
        "title": "[ハードボイルドよし子] おしかけサンシャワー",
        "cover": "https://telegra.ph/file/e929bf5ecc6e8f5499f82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1411"
    },
    {
        "IDcode": 1412,
        "title": "[東出イロドリ] いろとりどり",
        "cover": "https://telegra.ph/file/a6f9c046116dec1a073cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1412"
    },
    {
        "IDcode": 1413,
        "title": "[久川ちん] スケベな魔王があらわれた！ (コミック エグゼ 36)",
        "cover": "https://telegra.ph/file/88d549c8a07fa3b6caf79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1413"
    },
    {
        "IDcode": 1414,
        "title": "[いわした書店 (いわした)] sequence 入れ替わる二人のカラダ",
        "cover": "https://telegra.ph/file/278c9a57069a5d73704ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1414"
    },
    {
        "IDcode": 1415,
        "title": "[森宮缶 (森宮正幸)] 後輩日記。  [ページ欠落]",
        "cover": "https://telegra.ph/file/cbda55a8d04285c1df770.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1415"
    },
    {
        "IDcode": 1416,
        "title": "[かみしき (守月史貴)] ワケアリJKの特別指導",
        "cover": "https://telegra.ph/file/00e21699a764346d040b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1416"
    },
    {
        "IDcode": 1417,
        "title": "(ふぁーすと7) [ケモノ絵描きの光速2 (シンドール)] Re：Temptation (聖剣伝説 LEGEND OF MANA)",
        "cover": "https://telegra.ph/file/7d30f57fab886d5474904.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1417"
    },
    {
        "IDcode": 1418,
        "title": "[みれい] めぐる差分 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/936301657018bd5a9877e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1418"
    },
    {
        "IDcode": 1419,
        "title": "[あやね] 望月血液研究所の娘",
        "cover": "https://telegra.ph/file/b0ea470bf3e63704f45dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1419"
    },
    {
        "IDcode": 1420,
        "title": "(C99) [オニヅカバーガー (おにづか)] 大鳳とケッコン。 (アズールレーン)",
        "cover": "https://telegra.ph/file/22926f445dab84ee8fe54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1420"
    },
    {
        "IDcode": 1421,
        "title": "[きみおたまこ] 延長したから挿入れていいよね?～JKリフレで同級生と初エッチ!",
        "cover": "https://telegra.ph/file/3815952813015fe73ea5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1421"
    },
    {
        "IDcode": 1422,
        "title": "[天満春華] 出張先のビジホが同室!? ～ダブルベッドで女上司と泥酔SEX",
        "cover": "https://telegra.ph/file/ae85632aed26fa75c0c42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1422"
    },
    {
        "IDcode": 1423,
        "title": "[わかまつ] 付き合ってる先輩女子マネージャーに部室で抜いてもらう",
        "cover": "https://telegra.ph/file/0b47f52b2c192d339e4a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1423"
    },
    {
        "IDcode": 1424,
        "title": "(C99) [HBO (変熊)] 今日ノトリコ (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/698cf5ffee1db10375255.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1424"
    },
    {
        "IDcode": 1425,
        "title": "[Satellites (サテツ)] 小悪魔ちゃんに催淫されたので搾精セックスで愛し合っちゃいました。",
        "cover": "https://telegra.ph/file/19f117bc78e9f5d2a128e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1425"
    },
    {
        "IDcode": 1426,
        "title": "[Duokuma] 原神乗っ取り (原神) (中国翻译)  [pixiv]",
        "cover": "https://telegra.ph/file/18823b5813fe18754f9ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1426"
    },
    {
        "IDcode": 1427,
        "title": "[みくろぺえじ (黒本君)] C99じぇーしーみっくす",
        "cover": "https://telegra.ph/file/8970be0c0a23a52fb03ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1427"
    },
    {
        "IDcode": 1428,
        "title": "(アズレン学園購買部7) [メロメイト (ひな)] しきかん、だっこ (アズールレーン)",
        "cover": "https://telegra.ph/file/2fe8e6d79a82978edc049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1428"
    },
    {
        "IDcode": 1429,
        "title": "[バクシーシAT] プライベートレッスン (ANGEL 倶楽部 2022年2月号)",
        "cover": "https://telegra.ph/file/e6edcb5f11e7ced62aa72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1429"
    },
    {
        "IDcode": 1430,
        "title": "[ニャリャポンガ (世界最速のパンダ)] 事務的に処理してくれる艦護師さん (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/44330e59fa8b9aa0e6172.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1430"
    },
    {
        "IDcode": 1431,
        "title": "[タコヤキロック] 俺の知らぬ間に姉トラレ (COMIC 快楽天ビースト 2022年2月号)",
        "cover": "https://telegra.ph/file/6a96016aef338a7d3caa2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1431"
    },
    {
        "IDcode": 1432,
        "title": "[2P-Color (月本築希)] おねショタあつめ",
        "cover": "https://telegra.ph/file/2e988988c1559245cbd72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1432"
    },
    {
        "IDcode": 1433,
        "title": "[まゃ～吾郎] 戦姫顛落アンジェリア (二次元コミックマガジン 生体ユニット機械姦 Vol.1)",
        "cover": "https://telegra.ph/file/6c2b259132e9b45aee456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1433"
    },
    {
        "IDcode": 1434,
        "title": "[紙切ればさみ (やすゆき)] トイレがない!2ー学校編ー",
        "cover": "https://telegra.ph/file/15f7487f67d487fd16a25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1434"
    },
    {
        "IDcode": 1435,
        "title": "[みくろぺえじ (黒本君)] JC催眠で性教育3",
        "cover": "https://telegra.ph/file/07cb9c90892f4eefe9544.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1435"
    },
    {
        "IDcode": 1436,
        "title": "[MM] 催眠健康診断＿放クラ (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/bf09c0f6373ce70df6ab1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1436"
    },
    {
        "IDcode": 1437,
        "title": "[尻肉DON!! (アイモ)] いたづら狸の臭い責め (戦国乙女)",
        "cover": "https://telegra.ph/file/414d01e3d958fa991004b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1437"
    },
    {
        "IDcode": 1438,
        "title": "[おぶい] ひどいことされるぽぷらちゃん (WORKING!!)",
        "cover": "https://telegra.ph/file/2c40538dcdc5031a2e78d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1438"
    },
    {
        "IDcode": 1439,
        "title": "[江☆浪漫工房 (江戸川浪漫)] シカクとバツ",
        "cover": "https://telegra.ph/file/272a423c735dcda5b8114.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1439"
    },
    {
        "IDcode": 1440,
        "title": "[にーきゅー (る～く] 飲み薬によってふたなり化したエミリアちゃん  [翻车汉化组]",
        "cover": "https://telegra.ph/file/805b6866590fbd3c26d72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1440"
    },
    {
        "IDcode": 1441,
        "title": "(C99) [毒電波受信中 (炉心)] ちはやさんと楽しい保健体育",
        "cover": "https://telegra.ph/file/8238f49a72e3e58d9197d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1441"
    },
    {
        "IDcode": 1442,
        "title": "(C81) [あまりにセンパク! (ヨッコラ)] イケナイジル先生 (ジュエルペット サンシャイン)",
        "cover": "https://telegra.ph/file/6390f77e9b64bf994f8b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1442"
    },
    {
        "IDcode": 1443,
        "title": "[C.N.P (clone人間)] YG-2199 (宇宙戦艦ヤマト2199)  [2013年8月28日]",
        "cover": "https://telegra.ph/file/97c1a676e262ef77b7b2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1443"
    },
    {
        "IDcode": 1444,
        "title": "[イシダヤ] ミセスクラブvol3～とある団地は不倫地帯!～（Chinese）",
        "cover": "https://telegra.ph/file/005040b72b2c3360b22d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1444"
    },
    {
        "IDcode": 1445,
        "title": "[鈴根らい地下室 (鈴根らい)] のじゃロリババア狐さま こんなご時世に乱交",
        "cover": "https://telegra.ph/file/27e2374ac5825190ce6da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1445"
    },
    {
        "IDcode": 1446,
        "title": "[獅子千丸] 舐めすぎメスガキ☆ (COMIC LO 2021年9月号)",
        "cover": "https://telegra.ph/file/6b1ed44bfdf94bfe1b5e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1446"
    },
    {
        "IDcode": 1447,
        "title": "[リンゴヤ (あるぷ)] 黒澤の休日 (ラブライブ! サンシャイン!!)",
        "cover": "https://telegra.ph/file/04139fb4e1385df76bd87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1447"
    },
    {
        "IDcode": 1448,
        "title": "[墓場] 夢の終わり (COMIC 夢幻転生 2019年9月号)",
        "cover": "https://telegra.ph/file/29dd76b266afcb584f364.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1448"
    },
    {
        "IDcode": 1449,
        "title": "(C99) [サークルフィオレ (えかきびと)] お嬢様も本気出す (無職転生 ～異世界行ったら本気だす～)",
        "cover": "https://telegra.ph/file/109ef115c765863b2774a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1449"
    },
    {
        "IDcode": 1450,
        "title": "[MANA] 申鶴 1",
        "cover": "https://telegra.ph/file/9820e3b82a71b776d67b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1450"
    },
    {
        "IDcode": 1451,
        "title": "[大島あき] 彼女のお母さんに童貞を奪われる話1",
        "cover": "https://telegra.ph/file/f87ee44343292caed878c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1451"
    },
    {
        "IDcode": 1452,
        "title": "【てっこ】男装巨乳♀と痴漢満員電車-4",
        "cover": "https://telegra.ph/file/9ab6c865dad1b23c7f575.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1452"
    },
    {
        "IDcode": 1453,
        "title": "[にーきゅー (る～く] バニーエミリアちゃん",
        "cover": "https://telegra.ph/file/9d5eb2cc9fe33fe6b4b36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1453"
    },
    {
        "IDcode": 1454,
        "title": "[廃狼] CHOCO×LOVE",
        "cover": "https://telegra.ph/file/e5d7d9255d322679220fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1454"
    },
    {
        "IDcode": 1455,
        "title": "[珈琲幼女 (芽々ノ圭)] sweet small devil business (常闇トワ)",
        "cover": "https://telegra.ph/file/797eacb20c89266dcc430.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1455"
    },
    {
        "IDcode": 1456,
        "title": "[紙切ればさみ (やすゆき)] トイレがない!1",
        "cover": "https://telegra.ph/file/068904ded0a2d096ed3a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1456"
    },
    {
        "IDcode": 1457,
        "title": "[みくろぺえじ (黒本君)] JC催眠で性教育2",
        "cover": "https://telegra.ph/file/86ff362797bb8ed56986c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1457"
    },
    {
        "IDcode": 1458,
        "title": "[テングサ (tokorot)] 私たち子作りするために生まれてきました",
        "cover": "https://telegra.ph/file/493dbdea0a3a2581fb10d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1458"
    },
    {
        "IDcode": 1459,
        "title": "(C99) [怪奇日蝕 (綾野なおと)] R.O.D 16 -Rider or Die- (Fate/hollow ataraxia)",
        "cover": "https://telegra.ph/file/3c90105a30b9809f80969.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1459"
    },
    {
        "IDcode": 1460,
        "title": "[平沢Zen] 好感度高めの特盛り爆乳セイバーお姉ちゃんに甘く虐められながら何度も乳内射精させられる話 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/3c90a4ba4fc09972d6c96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1460"
    },
    {
        "IDcode": 1461,
        "title": "[ショコラテ (一葉モカ)] 催眠カノジョ 橋本加恋2",
        "cover": "https://telegra.ph/file/56b6b073fa63ed28fea0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1461"
    },
    {
        "IDcode": 1462,
        "title": "[アキカン (oxアキカンox)] 現実改変ゲーム お母さんコントローラー",
        "cover": "https://telegra.ph/file/4e01a9f87a1aabe7a992f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1462"
    },
    {
        "IDcode": 1463,
        "title": "[むらさきにゃんこバー] 茶畑ヴァエのTS短篇集2",
        "cover": "https://telegra.ph/file/874389c78366ccd464f99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1463"
    },
    {
        "IDcode": 1464,
        "title": "[けものの★] ハメっこ3Peace!!!",
        "cover": "https://telegra.ph/file/f73ae80ecf063694f8918.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1464"
    },
    {
        "IDcode": 1465,
        "title": "[A極振り (Sian)] 雌ガチャII",
        "cover": "https://telegra.ph/file/e35cd2d86fc9d465ac9e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1465"
    },
    {
        "IDcode": 1466,
        "title": "[まりも屋 (もりまりも)] CHALDEA GIRLS COLLECTION ジャンヌ＆マリー制服Hしまくる本 (Fate/Grand Order)  [黑锅汉化组]",
        "cover": "https://telegra.ph/file/3266f494438fa4b33957c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1466"
    },
    {
        "IDcode": 1467,
        "title": "[MM] ベロチューまどか (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/61bb910fc5e772d19b328.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1467"
    },
    {
        "IDcode": 1468,
        "title": "[ありむらんど (蟻アンド村)]隷属娘～不屈の女剣士～",
        "cover": "https://telegra.ph/file/d79c4b30244b2678de1c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1468"
    },
    {
        "IDcode": 1469,
        "title": "[Hamao] diss (コミックゼロス #50)",
        "cover": "https://telegra.ph/file/6a5c854b64ae2b74e96d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1469"
    },
    {
        "IDcode": 1470,
        "title": "[あらくれ] 紅色の囁き 第二章 (COMIC 失楽天 2022年2月号)",
        "cover": "https://telegra.ph/file/80b687f46f7c484171f1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1470"
    },
    {
        "IDcode": 1471,
        "title": "[URAN-FACTORY (URAN)] 桜花爛漫の宴 (原神)",
        "cover": "https://telegra.ph/file/a32bb36569f6bc4505e2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1471"
    },
    {
        "IDcode": 1472,
        "title": "[kakao] おたぎゃる (COMIC 快楽天ビースト 2022年2月号)",
        "cover": "https://telegra.ph/file/43a1649ba1bd8d827dd51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1472"
    },
    {
        "IDcode": 1473,
        "title": "(C99) [生々シャンディガフ (nf4)] またまたさかま十=つかまった Plus (ホロライブ)",
        "cover": "https://telegra.ph/file/c7e8cede3cad53373d385.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1473"
    },
    {
        "IDcode": 1474,
        "title": "(ふたけっと14) [厩 (UMA)] なかよしたねづけにっき (ウマ娘 プリティーダービー)",
        "cover": "https://telegra.ph/file/d10f251635078bd0a750b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1474"
    },
    {
        "IDcode": 1475,
        "title": "[元帥] 畏マリました… (COMIC 真激 2022年2月号)",
        "cover": "https://telegra.ph/file/6bd1aeb4a0f80446587bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1475"
    },
    {
        "IDcode": 1476,
        "title": "[第壱ユタカ荘 (築)] 見せる子ちゃん (見える子ちゃん)",
        "cover": "https://telegra.ph/file/11e48b233fe1bbf924bd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1476"
    },
    {
        "IDcode": 1477,
        "title": "[にこびぃ] ちゃんといってよ (COMIC 快楽天ビースト 2022年2月号)",
        "cover": "https://telegra.ph/file/a6c70a9c2e3738de594f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1477"
    },
    {
        "IDcode": 1478,
        "title": "[ト！ヘーゲモニコン] たとえば家庭教師が一家に催眠をかけたとして (少女組曲 17)",
        "cover": "https://telegra.ph/file/d019b9e76c0f56eb02cd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1478"
    },
    {
        "IDcode": 1479,
        "title": "[にほふうへほん (すぷらい)] WhiteBrim ロイヤルメイド隊の献身的な愛情を存分に味わう本 (アズールレーン)",
        "cover": "https://telegra.ph/file/f263609b53cbdfb0bc471.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1479"
    },
    {
        "IDcode": 1480,
        "title": "(C99) [乱視と君と。 (santa)] お隣さんへ。あなたの娘さんがあまりに可愛くて健気で頭も良くて、僕の理想のオナホにピッタリだったので、しちゃいました——催眠種付け(プロポーズ)",
        "cover": "https://telegra.ph/file/5aba51547df09578701e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1480"
    },
    {
        "IDcode": 1481,
        "title": "(C99) [雷神会 (はるきゲにあ)] バニートラップアーカイブ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/2f9239b89007fb66b6f5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1481"
    },
    {
        "IDcode": 1482,
        "title": "[アヘ丸] 大切な2人を裏切るNTR (ANGEL 倶楽部 2021年5月号)",
        "cover": "https://telegra.ph/file/f78ae3be08eb9945bbc34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1482"
    },
    {
        "IDcode": 1483,
        "title": "[B.B.T.T. (山本善々)] 学園サポ日記6～黒ギャルと週末弾丸温泉旅行編～",
        "cover": "https://telegra.ph/file/9b3feb188956599da9950.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1483"
    },
    {
        "IDcode": 1484,
        "title": "[MM] 前貼りだけでグラビア撮影する千雪さん (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/1aa22fc911d058681d054.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1484"
    },
    {
        "IDcode": 1485,
        "title": "[MM] コスプレまどか (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/3391fde14352338f21c22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1485"
    },
    {
        "IDcode": 1486,
        "title": "[fanbox] ikemeru19",
        "cover": "https://telegra.ph/file/11afbe13abe13d0218a1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1486"
    },
    {
        "IDcode": 1487,
        "title": "[能都くるみ]石榴裙下[脫氧核糖漢化組]",
        "cover": "https://telegra.ph/file/2ab01f184ff2563d0fac1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1487"
    },
    {
        "IDcode": 1488,
        "title": "[純なり (ニヒト)] 母子から始める恋愛関係",
        "cover": "https://telegra.ph/file/0d3f16ab11205bd0059af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1488"
    },
    {
        "IDcode": 1489,
        "title": "[チョコヘル] ママは元グラドル僕は我慢出来ない",
        "cover": "https://telegra.ph/file/12a07a094efda7968ec62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1489"
    },
    {
        "IDcode": 1490,
        "title": "[40010試作型] プロトタイプ マドモアゼル",
        "cover": "https://telegra.ph/file/202ea23dd7c4c3b710846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1490"
    },
    {
        "IDcode": 1491,
        "title": "[ニム] 小麦色ふぁっしねいしょん！ + イラストカード",
        "cover": "https://telegra.ph/file/69e67d971473fd7f32e52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1491"
    },
    {
        "IDcode": 1492,
        "title": "(C99) [三毛猫飯店 (坂本カフカ)]クリちんぽ育成記",
        "cover": "https://telegra.ph/file/1bd57a75791756983f216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1492"
    },
    {
        "IDcode": 1493,
        "title": "[Circle Eden (ヂイスケ)] この温泉は無限の肉で出来ている (Fate Grand Order)",
        "cover": "https://telegra.ph/file/101f0f8664f4e6ee77d0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1493"
    },
    {
        "IDcode": 1494,
        "title": "[マンガスーパー (猫井ミィ)] マシュの花嫁修業 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/68c0f643365c60abd17ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1494"
    },
    {
        "IDcode": 1495,
        "title": "[南乃さざん] この世の乳は俺のもの! 1乳目 (COMIC 失楽天 2021年12月号)",
        "cover": "https://telegra.ph/file/ae62dd9d4fc61f9aaa27a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1495"
    },
    {
        "IDcode": 1496,
        "title": "[空色にゃんにゃん (片瀬蒼子)] ふたなり妹と優しいお姉ちゃんの12カ月  [進行中]",
        "cover": "https://telegra.ph/file/2b110a1e75c5eca557617.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1496"
    },
    {
        "IDcode": 1497,
        "title": "[ハウス栽培もち (白玉もち)] あの娘に勝ちたい",
        "cover": "https://telegra.ph/file/428af606babcea95d95c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1497"
    },
    {
        "IDcode": 1498,
        "title": "[アンソロジー] 二次元コミックマガジン メスガキvs優しいお姉さんVol.2",
        "cover": "https://telegra.ph/file/ce18c87a1868d0663a8bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1498"
    },
    {
        "IDcode": 1499,
        "title": "[逆又練物] 豚の交尾 第3話 (コミック刺激的SQUIRT!! Vol.27)",
        "cover": "https://telegra.ph/file/9a4ab40ea729cdbf5e66a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1499"
    },
    {
        "IDcode": 1500,
        "title": "[moco chouchou (ひさまくまこ)] 優等生のウラの姿は超ビッチレイヤー 優等生 綾香のウラオモテ",
        "cover": "https://telegra.ph/file/7dff24c2d081452f500d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1500"
    }
];
