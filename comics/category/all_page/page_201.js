// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 2001,
        "title": "(ぷにケット39) [WICKED HEART (ZooTAN)] 宇宙人のひみつ (スター☆トゥインクルプリキュア)",
        "cover": "https://telegra.ph/file/0454d5e089927e02dc782.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2001"
    },
    {
        "IDcode": 2002,
        "title": "[あいらんどう] 妹とノリでエッチした件 (COMIC LO 2021年10月号)",
        "cover": "https://telegra.ph/file/c033f3b0686dd112d2197.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2002"
    },
    {
        "IDcode": 2003,
        "title": "[アヘ丸] アヘっ娘❤天国 [5+7个人汉化组嵌字组]（Ongoing）",
        "cover": "https://telegra.ph/file/316c5ac63118decedb3f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2003"
    },
    {
        "IDcode": 2004,
        "title": "Glory of the King 王者荣耀公孙离同人 【bbbs】",
        "cover": "https://telegra.ph/file/4a4bc2d26a414fff394b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2004"
    },
    {
        "IDcode": 2005,
        "title": "[空色れん] お狐ろりばば様に無理やり…♡",
        "cover": "https://telegra.ph/file/6fb620aca629ee81c095a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2005"
    },
    {
        "IDcode": 2006,
        "title": "[平間ひろかず] よばいむら (COMIC 快楽天ビースト 2021年11月号)",
        "cover": "https://telegra.ph/file/cc02cf962cc6791a104d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2006"
    },
    {
        "IDcode": 2007,
        "title": "[三崎 (京のごはん)] 【生放送】人気JK配信者の裏の顔【快楽堕ち】",
        "cover": "https://telegra.ph/file/8e2efc6f337d245fd376b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2007"
    },
    {
        "IDcode": 2008,
        "title": "(AC2) [並行世界 (可様ありさ)] モナのモラ稼ぎエッチ (原神)",
        "cover": "https://telegra.ph/file/3508a96e5e4e8b4c7c717.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2008"
    },
    {
        "IDcode": 2009,
        "title": "[肉そうきゅー。] 催淫VRコントロール",
        "cover": "https://telegra.ph/file/3e56b61803ba27181332f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2009"
    },
    {
        "IDcode": 2010,
        "title": "[ぞんだ] トライアングル (COMIC マグナムX Vol.29)",
        "cover": "https://telegra.ph/file/d9ba7cb4d571ca6b7bc5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2010"
    },
    {
        "IDcode": 2011,
        "title": "[減塩] 不貞活動 (コミックホットミルク濃いめ vol.22)",
        "cover": "https://telegra.ph/file/6a4260a1fee5ba149f865.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2011"
    },
    {
        "IDcode": 2012,
        "title": "[秋草ぺぺろん] むち無理ガール (もっつぁれら)",
        "cover": "https://telegra.ph/file/12b2a3251d02778576f98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2012"
    },
    {
        "IDcode": 2013,
        "title": "[かに村えびお] こじらせ魔女を討伐セヨ! (異世快楽天 Vol.3)",
        "cover": "https://telegra.ph/file/bf3fc0f5f4344fbefb730.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2013"
    },
    {
        "IDcode": 2014,
        "title": "[ほたてちゃん] 露出狂ちゃん",
        "cover": "https://telegra.ph/file/15b81ac5312477e227766.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2014"
    },
    {
        "IDcode": 2015,
        "title": "[ナイーブタ (西義之)] そだての乳母はぼくのもの",
        "cover": "https://telegra.ph/file/81495694f2164f7f2959d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2015"
    },
    {
        "IDcode": 2016,
        "title": "[京極燈弥] 愚か者は猫耳奴隷に依存する～初めての調教生活～ Vol. 1",
        "cover": "https://telegra.ph/file/ff000538b59031dcfb0ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2016"
    },
    {
        "IDcode": 2017,
        "title": "[刈屋 (カリパー)] 前立腺の恋人  [進行中]",
        "cover": "https://telegra.ph/file/e93b6b314c3bd8085c827.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2017"
    },
    {
        "IDcode": 2018,
        "title": "[ありのひろし] 魔鬼訓練的鬼教官，其實是抖M女。1-5話",
        "cover": "https://telegra.ph/file/7a98caeef4c402b13bd5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2018"
    },
    {
        "IDcode": 2019,
        "title": "[あのん2億年] 催眠家庭教師〜お母さん編〜",
        "cover": "https://telegra.ph/file/6acf716d4926d3839c21f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2019"
    },
    {
        "IDcode": 2020,
        "title": "[雪ノ嵐&异端丶] 帝王级崩坏兽的纷争II (崩坏3rd)",
        "cover": "https://telegra.ph/file/4c97d5a59c60aeb45acbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2020"
    },
    {
        "IDcode": 2021,
        "title": "(C99) [あめうさぎ (飴玉コン)] チノちゃんの可愛いところ見せて (ご注文はうさぎですか?)",
        "cover": "https://telegra.ph/file/97621bdd8ebede4cb44ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2021"
    },
    {
        "IDcode": 2022,
        "title": "(COMIC1☆11) [絶望しろむじ (しょうさん坊主)] お屋敷の日",
        "cover": "https://telegra.ph/file/8e50c1099a1d9927eb076.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2022"
    },
    {
        "IDcode": 2023,
        "title": "(to infinity) [空想休暇 (未琴圭)] 特濃!暴風魔素 (転生したらスライムだった件)",
        "cover": "https://telegra.ph/file/58d309d4ba50a690815c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2023"
    },
    {
        "IDcode": 2024,
        "title": "[高野友宏]えんこーちゃんのパパ活日記",
        "cover": "https://telegra.ph/file/458c7233915f1e9038273.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2024"
    },
    {
        "IDcode": 2025,
        "title": "[野際かえで] わるいこ 前編 (COMIC LO 2021年12月号)",
        "cover": "https://telegra.ph/file/4d1c6c2680de49a6b71a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2025"
    },
    {
        "IDcode": 2026,
        "title": "[はらぺこ定食 (すえゆう)] ご無沙汰北欧美人妻に性感マッサージを!軽い寝取らせのはずが…",
        "cover": "https://telegra.ph/file/5fb237b89a57c93e29bac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2026"
    },
    {
        "IDcode": 2027,
        "title": "[鈍色家電] だって好きだから (コミックホットミルク 2022年3月号)",
        "cover": "https://telegra.ph/file/a897afea146acb6363b8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2027"
    },
    {
        "IDcode": 2028,
        "title": "(C99) [Poison Gray (松竜太)] キヴォトス子作り活動報告書 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/475bb86a3604790ab29da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2028"
    },
    {
        "IDcode": 2029,
        "title": "[ちょちょ] 生徒会長放課後ひみつ (COMIC ペンギンクラブ山賊版 2014年2月号)",
        "cover": "https://telegra.ph/file/9a6136d4871095785814d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2029"
    },
    {
        "IDcode": 2030,
        "title": "[やっそん義之] あなたといっしょにイきたい",
        "cover": "https://telegra.ph/file/9828fbe1d40ba76de5658.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2030"
    },
    {
        "IDcode": 2031,
        "title": "(C92) [WASABI (畳)] Elven Sanctuary (エロマンガ先生)",
        "cover": "https://telegra.ph/file/10b38afb5ebb5ac638f4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2031"
    },
    {
        "IDcode": 2032,
        "title": "[Digital Lover (なかじまゆか)] 大人馴染2 DLO-12",
        "cover": "https://telegra.ph/file/2242cd0baf0f1099286da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2032"
    },
    {
        "IDcode": 2033,
        "title": "[竹とんぼ (狭暗)] 汚っさんに垢やらチンカスやら擦り付けられながら体の内側に入られて体の主導権を握られたうえミスターちんぽしごき猿としての人生を歩まされはじめるまどかちゃん (シャニマスTS合同) (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/7182fb794e31522f42ccc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2033"
    },
    {
        "IDcode": 2034,
        "title": "[Dodok] 方舟性闻录1 (Arknights) [明日方舟]",
        "cover": "https://telegra.ph/file/9c66d85d2329b9a9b1968.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2034"
    },
    {
        "IDcode": 2035,
        "title": "[mega w] 女が全て下品なビッチになった日常 街中編",
        "cover": "https://telegra.ph/file/9781a7852992b7d2714b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2035"
    },
    {
        "IDcode": 2036,
        "title": "[リンゴヤ (あるぷ)] おまけ漫画 (ラブライブ!)",
        "cover": "https://telegra.ph/file/d6473720bd8c3208028ee.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2036"
    },
    {
        "IDcode": 2037,
        "title": "[KOMOTA (KOMOTA)]MILK －ショタ淫魔がお姉さんたちに挟まれる話－",
        "cover": "https://telegra.ph/file/44c5982f127e41e73cf5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2037"
    },
    {
        "IDcode": 2038,
        "title": "(C99) [Armadillo (練慈)] バニーのいざなう VIP ROOM (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/6774d625be231941f4997.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2038"
    },
    {
        "IDcode": 2039,
        "title": "(C99) [NF121 (みどり葵)] めっちゃキモチよかったっしょ? (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/1568027167d8aedbe4bf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2039"
    },
    {
        "IDcode": 2040,
        "title": "[Fanbox] 隈吉 追加",
        "cover": "https://telegra.ph/file/0fb1bc2d189fafea087fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2040"
    },
    {
        "IDcode": 2041,
        "title": "[桜の灯る日へ] 近所の人妻さん",
        "cover": "https://telegra.ph/file/0a26ecd3a423be18f8359.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2041"
    },
    {
        "IDcode": 2042,
        "title": "[ほたてちゃん] 年上の彼女",
        "cover": "https://telegra.ph/file/46653dad04ded699a6687.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2042"
    },
    {
        "IDcode": 2043,
        "title": "[あんこまん] イシュタル、ギル君と借金返済セックス (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/aeb69ee750103f15a36b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2043"
    },
    {
        "IDcode": 2044,
        "title": "[西園寺ぽるぽる] 神は信仰の名のもとに堕ちる (くっ殺ヒロインズ Vol.14)",
        "cover": "https://telegra.ph/file/ac0bf41a0a34e25582e74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2044"
    },
    {
        "IDcode": 2045,
        "title": "[ぽぽんこ] 精子提供してもらいにきた女の子 1-4",
        "cover": "https://telegra.ph/file/80ad08512c40d441aa7e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2045"
    },
    {
        "IDcode": 2046,
        "title": "[DYTM] 淫雨に濡れてII 第1話 (コミックホットミルク 2022年3月号)",
        "cover": "https://telegra.ph/file/6c5849ed8148a53aad11c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2046"
    },
    {
        "IDcode": 2047,
        "title": "[ANCHOR (武藤まと)] あずきさんは限界です!",
        "cover": "https://telegra.ph/file/7b9c98e046b56a4c076c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2047"
    },
    {
        "IDcode": 2048,
        "title": "[しょうさん坊主] じぇいえす学援〜生徒を買う教師達〜",
        "cover": "https://telegra.ph/file/872e713c105f6eb3ddde5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2048"
    },
    {
        "IDcode": 2049,
        "title": "[Fanbox] Laserflip (2021-06-03 - 2022-01-30)",
        "cover": "https://telegra.ph/file/992365d479e1a6446018c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2049"
    },
    {
        "IDcode": 2050,
        "title": "[かもたま] ふたなり女将の生ハメ繁盛記",
        "cover": "https://telegra.ph/file/9952403c5becf7b43ddc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2050"
    },
    {
        "IDcode": 2051,
        "title": "[満開開花] 初めて姫騎士を捕まえてみた",
        "cover": "https://telegra.ph/file/d018bddb7f13147c7d722.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2051"
    },
    {
        "IDcode": 2052,
        "title": "[甲斐ひろゆき] 僕の山ノ上村孕ませ日記",
        "cover": "https://telegra.ph/file/736fb3e424ea6f416341c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2052"
    },
    {
        "IDcode": 2053,
        "title": "[葵ヒトリ] 気弱な部下の育て方 前編 (疼く女上司を舐め寝取り)",
        "cover": "https://telegra.ph/file/eba0080e9dca8d657020e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2053"
    },
    {
        "IDcode": 2054,
        "title": "[らてたそ] とある国の純白聖女様とお下品セックス",
        "cover": "https://telegra.ph/file/277d7469ee5e448c6c758.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2054"
    },
    {
        "IDcode": 2055,
        "title": "[ホーミング] 超JCいもうと",
        "cover": "https://telegra.ph/file/4295d8282df204db560e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2055"
    },
    {
        "IDcode": 2056,
        "title": "[宮原歩] ペンと彼女と甘い罠 1",
        "cover": "https://telegra.ph/file/32b730982826492e9daab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2056"
    },
    {
        "IDcode": 2057,
        "title": "[井藤ななみ] Like a LOVEDOLL 〜だから、なんでもシてあげる〜",
        "cover": "https://telegra.ph/file/bcf409cfbb28f46a71149.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2057"
    },
    {
        "IDcode": 2058,
        "title": "[大盛り] 特異体質 (美少女マニアクス)",
        "cover": "https://telegra.ph/file/8fd98298e965056431d69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2058"
    },
    {
        "IDcode": 2059,
        "title": "[藩滑るめる] メスガキがディルドオナニーするだけ＋α",
        "cover": "https://telegra.ph/file/1396f9bb30156edcaf1d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2059"
    },
    {
        "IDcode": 2060,
        "title": "[ミヤサカタカジ] 園児デリヘルひみつのおゆうぎ ～ゆいのみか～ (COMIC LO 2017年10月号)",
        "cover": "https://telegra.ph/file/c59daadcb87f0a787141c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2060"
    },
    {
        "IDcode": 2061,
        "title": "[わとす] ドレスアップライネス師匠のR18漫画 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/8b0ffc212aa0644a4180e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2061"
    },
    {
        "IDcode": 2062,
        "title": "[pastime774] ユニークジョブ【種付けおじさん】を獲得しました 2",
        "cover": "https://telegra.ph/file/a6c92734a37beca1e3eb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2062"
    },
    {
        "IDcode": 2063,
        "title": "[picapicaすっぱ (すっぱ)] In Sci-Fi 藤丸立香はヒロインXXと懇ろになれるか (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/b2e4a9ee565eff17adc4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2063"
    },
    {
        "IDcode": 2064,
        "title": "[柴犬五郎] 君に染まる予定 (COMIC 快楽天ビースト 2022年3月号)",
        "cover": "https://telegra.ph/file/04a17b2bcb0672971fee1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2064"
    },
    {
        "IDcode": 2065,
        "title": "[Karin] これで世界征服できるのだ!! (ヤン・ナリ)",
        "cover": "https://telegra.ph/file/7585b711afbee14a2c74e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2065"
    },
    {
        "IDcode": 2066,
        "title": "[もくし] アンケートで変身後のデザインが変わる！",
        "cover": "https://telegra.ph/file/dfabb997f690e84f9f5c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2066"
    },
    {
        "IDcode": 2067,
        "title": "(秋季例大祭8) [Poison Gray (松竜太)] 子作り上手なナズーリン先輩 (東方Project)",
        "cover": "https://telegra.ph/file/8e15b3d356377f4b1ab4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2067"
    },
    {
        "IDcode": 2068,
        "title": "[ネトラレの民] 愛する人をネトラセたら… Vol.1",
        "cover": "https://telegra.ph/file/e07bb42b0a762743243d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2068"
    },
    {
        "IDcode": 2069,
        "title": "[あきのそら] 異世界来たのでスケベスキルで全力謳歌しようと思う ５射目 (コミック エグゼ 34)",
        "cover": "https://telegra.ph/file/870d362bbeb8c8ae68f8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2069"
    },
    {
        "IDcode": 2070,
        "title": "[カシスかぼす (ありあ。)] ナツメづくし",
        "cover": "https://telegra.ph/file/6e3a714844cc88a438b39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2070"
    },
    {
        "IDcode": 2071,
        "title": "[無色三太郎] 魔族令嬢の催眠授業（初等編） (二次元コミックマガジン メスガキ催眠制裁エッチ!Vol.1)",
        "cover": "https://telegra.ph/file/fe070f0b8a539ed10de94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2071"
    },
    {
        "IDcode": 2072,
        "title": "(C95) [Yan-Yam] ゴブリンスレイブ (ゴブリンスレイヤー)",
        "cover": "https://telegra.ph/file/48a244a4a059a2cdc2289.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2072"
    },
    {
        "IDcode": 2073,
        "title": "(サンクリ2020 Summer) [Yan-Yam] フー君の子種が愛しくて (五等分の花嫁)",
        "cover": "https://telegra.ph/file/817ac41f9c1640e8bd56d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2073"
    },
    {
        "IDcode": 2074,
        "title": "[オーディン (黒川いづみ)] あねいと",
        "cover": "https://telegra.ph/file/b7e8e3fe8f3af376fc29d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2074"
    },
    {
        "IDcode": 2075,
        "title": "[厚木で5時 (みうらっは)] 便女学園",
        "cover": "https://telegra.ph/file/4ee7b08939b97f1823761.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2075"
    },
    {
        "IDcode": 2076,
        "title": "[交介] 推し✕(かけ)魔王サマ!! (COMIC アンスリウム 2022年3月号)",
        "cover": "https://telegra.ph/file/82151442f015920c870c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2076"
    },
    {
        "IDcode": 2077,
        "title": "[Yen] 橘さんの危険な賭け (橘さん家ノ男性事情)",
        "cover": "https://telegra.ph/file/98267cb8f2e4d6dd69a69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2077"
    },
    {
        "IDcode": 2078,
        "title": "[おみなえし] こんな幼馴染がいてほしい",
        "cover": "https://telegra.ph/file/ab3ac577373891b2bb69f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2078"
    },
    {
        "IDcode": 2079,
        "title": "[居酒屋よっちゃん (江ノ島行き)] 黒ギャルビッチがウチに来た!",
        "cover": "https://telegra.ph/file/888986b5f007147e7650a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2079"
    },
    {
        "IDcode": 2080,
        "title": "[星に帰る! (たらぞお)] くみちゃん3",
        "cover": "https://telegra.ph/file/9cd110ed6b093147a339a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2080"
    },
    {
        "IDcode": 2081,
        "title": "(C91) [あずれ別館 (紺野あずれ)] 白蘭 天然性感マッサージ専門店",
        "cover": "https://telegra.ph/file/01c6abc3e03bb7a531f59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2081"
    },
    {
        "IDcode": 2082,
        "title": "[JJ.JJ] 57. \"Acerola and Lana\" (CN, Eng, JP, Kor, NoText)",
        "cover": "https://telegra.ph/file/0a0c3bb1d8198baef92bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2082"
    },
    {
        "IDcode": 2083,
        "title": "[なえなえ]思春期になりぎこちなくなってしまった幼なじみとの距離を縮めたい",
        "cover": "https://telegra.ph/file/8017e1d9162cdc473a089.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2083"
    },
    {
        "IDcode": 2084,
        "title": "[ながしま超助] 不近親相姦の女",
        "cover": "https://telegra.ph/file/4e6f99fe3910caf044711.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2084"
    },
    {
        "IDcode": 2085,
        "title": "[XTER] My Mother",
        "cover": "https://telegra.ph/file/30cbd727620184785dd4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2085"
    },
    {
        "IDcode": 2086,
        "title": "[PIXIV]atdan(原子dan)",
        "cover": "https://telegra.ph/file/b128680b74c85b4aab872.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2086"
    },
    {
        "IDcode": 2087,
        "title": "[ながしま超助] 不近親相姦の女",
        "cover": "https://telegra.ph/file/4f143c1651ce21b56d65b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2087"
    },
    {
        "IDcode": 2088,
        "title": "[はりぽてと] 気が強い清楚な人妻令嬢が寝取られるまでの一部始終",
        "cover": "https://telegra.ph/file/40372ccd846525bdfd338.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2088"
    },
    {
        "IDcode": 2089,
        "title": "[平沢Zen] ドスケベアルトリアソープでローションまみれのむちむちオルタ二人に誘惑される",
        "cover": "https://telegra.ph/file/7bd000a37a4dc2b106272.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2089"
    },
    {
        "IDcode": 2090,
        "title": "[ザキザラキ] 極楽♥ママさんバレー (人妻ちゅーードクッ)",
        "cover": "https://telegra.ph/file/d885b84750ce2b4407668.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2090"
    },
    {
        "IDcode": 2091,
        "title": "[オオサキ] 確変大当たり！？ (COMIC 失楽天 2021年10月号)",
        "cover": "https://telegra.ph/file/c656e9866687e8e99561c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2091"
    },
    {
        "IDcode": 2092,
        "title": "[あむぁいおかし製作所 (れいとうみかん、HNZM)] 呪いのTS装備 ～冒険者はビキニで雌に堕ちる～",
        "cover": "https://telegra.ph/file/f13c7ddfd3e14907054a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2092"
    },
    {
        "IDcode": 2093,
        "title": "[雛咲葉] 藤色むすめ (COMIC 快楽天ビースト 2022年3月号)",
        "cover": "https://telegra.ph/file/efb07ac51ebe123f8772e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2093"
    },
    {
        "IDcode": 2094,
        "title": "(レインボーフレーバー20) [ ワールドオブピュア (ネゴム)] ANGEL (HUGっと!プリキュア)",
        "cover": "https://telegra.ph/file/f25dffc9a063fc1311b2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2094"
    },
    {
        "IDcode": 2095,
        "title": "[佐倉さくさく (佐倉さくさくら)] 巨乳幼なじみロボ娘進行形",
        "cover": "https://telegra.ph/file/62d0caf6bde44ed2e07ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2095"
    },
    {
        "IDcode": 2096,
        "title": "[みぞれ] 彼女がいるので邪悪な低身長Mカップ甘々イジワル教え子の誘惑には負けません。 (COMIC 真激 2021年9月号)  [カラー化]",
        "cover": "https://telegra.ph/file/b20b04bcec0cf27c8eae9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2096"
    },
    {
        "IDcode": 2097,
        "title": "[春昼 (鬼遍かっつぇ)] 初-完結編-～鬼畜カレシと本気セックス～",
        "cover": "https://telegra.ph/file/416f03fc0139aa09e30a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2097"
    },
    {
        "IDcode": 2098,
        "title": "我的姊姊 3 繁體中文化",
        "cover": "https://telegra.ph/file/782b8a4afae4a4194d158.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2098"
    },
    {
        "IDcode": 2099,
        "title": "[背徳漢] さいみんクエスト 特別編 (コミックゼロス #90)",
        "cover": "https://telegra.ph/file/2a9fc780b2d01bb473564.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2099"
    },
    {
        "IDcode": 2100,
        "title": "[moco chouchou (ひさまくまこ)] 優等生のウラの姿は超ビッチレイヤー 優等生 綾香のウラオモテ",
        "cover": "https://telegra.ph/file/6f88e2ebf5d86a61a3ac3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2100"
    }
];
