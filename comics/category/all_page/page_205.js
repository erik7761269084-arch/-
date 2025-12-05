// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 2401,
        "title": "[ie]妙に煽ってくる彼女ちゃん",
        "cover": "https://telegra.ph/file/58c383498ac46810ce4c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2401"
    },
    {
        "IDcode": 2402,
        "title": "(COMIC1☆13) [bolze. (○蜜柑)] さらわれ上手の◯木さん (からかい上手の高木さん)",
        "cover": "https://telegra.ph/file/2ed85dc3b6b4efcd9c6ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2402"
    },
    {
        "IDcode": 2403,
        "title": "[すぱいらる] 欲望のままの王様ゲーム",
        "cover": "https://telegra.ph/file/ca349ba46e207159d1f7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2403"
    },
    {
        "IDcode": 2404,
        "title": "[空色れん] ぽん様が騎乗位で…♡",
        "cover": "https://telegra.ph/file/311c8642cbdbe58116bbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2404"
    },
    {
        "IDcode": 2405,
        "title": "[Lunatic*Maiden (ぽるのいぶき)] オフパコお姉さんは我慢ができない3",
        "cover": "https://telegra.ph/file/2d7d274f649a60129a176.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2405"
    },
    {
        "IDcode": 2406,
        "title": "[純情ハリネズミ (カグユヅ)] ただ今、勉強中。 (Fate/Grand Order)  [2022年1月8日]",
        "cover": "https://telegra.ph/file/9e6fddecfe19eba418ee4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2406"
    },
    {
        "IDcode": 2407,
        "title": "[サークルOUTER WORLD (ちばしゅう)] おくさまは17歳 (古見さんは、コミュ症です。)",
        "cover": "https://telegra.ph/file/ab376f4fce7d911b6fffb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2407"
    },
    {
        "IDcode": 2408,
        "title": "[澤野明] カエルバショ (コミックメガストアDEEP Vol.8)",
        "cover": "https://telegra.ph/file/c02db5702125d7df918db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2408"
    },
    {
        "IDcode": 2409,
        "title": "[あんこまん] 六花ちゃん、裕太とチアコスでイチャつく (SSSS.GRIDMAN)",
        "cover": "https://telegra.ph/file/07d2a72a2fe1aaba5466b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2409"
    },
    {
        "IDcode": 2410,
        "title": "[煌野一人] JK退魔部Season2  [進行中]",
        "cover": "https://telegra.ph/file/bce55fa7e37ba8d053090.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2410"
    },
    {
        "IDcode": 2411,
        "title": "【喵子小屋】[kangbang] CumTissues (九阳豆浆基个人汉化)",
        "cover": "https://telegra.ph/file/00f10e6156d47268357d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2411"
    },
    {
        "IDcode": 2412,
        "title": "[ie] 幼なじみサキュバス",
        "cover": "https://telegra.ph/file/6076e9e6b9d5383e6a1fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2412"
    },
    {
        "IDcode": 2413,
        "title": "[えいとまん] えいとまん先生のおかげで彼女ができました! (コミックホットミルク 2021年7月号)",
        "cover": "https://telegra.ph/file/a68eb3b213955848578f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2413"
    },
    {
        "IDcode": 2414,
        "title": "[えいとまん] えいとまん先生のおかげで彼女ができました! 2 (コミックホットミルク 2021年10月号)",
        "cover": "https://telegra.ph/file/6edfe4e881f36cb439df2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2414"
    },
    {
        "IDcode": 2415,
        "title": "[詩乃譜] 指輪と耳飾 〜童貞三人組〜 (COMIC マグナムX Vol.17)",
        "cover": "https://telegra.ph/file/65718bd7d462d9e82f531.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2415"
    },
    {
        "IDcode": 2416,
        "title": "[京極燈弥] 愚か者は猫耳奴隷に依存する～初めての調教生活～ 14",
        "cover": "https://telegra.ph/file/7e703a06e80bc4974c65c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2416"
    },
    {
        "IDcode": 2417,
        "title": "[HLL.ALSG99]魔法少女续",
        "cover": "https://telegra.ph/file/11361bd32ed58beb7eae4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2417"
    },
    {
        "IDcode": 2418,
        "title": "[ie]サキュバスのダチ",
        "cover": "https://telegra.ph/file/06766b3af304362978441.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2418"
    },
    {
        "IDcode": 2419,
        "title": "[JK君] 奴隸援交妹——零珠",
        "cover": "https://telegra.ph/file/4246ae064b3b03ac4cac6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2419"
    },
    {
        "IDcode": 2420,
        "title": "[太阳下山了] 自行车棚上发条 [有字版]",
        "cover": "https://telegra.ph/file/d794bc42bd67934222605.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2420"
    },
    {
        "IDcode": 2421,
        "title": "[HANEE] (ooc)罗德岛性处理部干员档案—水月篇",
        "cover": "https://telegra.ph/file/91c4b552167d17e31ddd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2421"
    },
    {
        "IDcode": 2422,
        "title": "[SS-BRAIN] 恋人じゃ...ない。APPEND BOOK",
        "cover": "https://telegra.ph/file/acb86834606b7b7f4d363.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2422"
    },
    {
        "IDcode": 2423,
        "title": "[シルバードッグ] 悪役令嬢に夜伽を命じられました (乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった...)",
        "cover": "https://telegra.ph/file/52118aa141bfb51b4654e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2423"
    },
    {
        "IDcode": 2424,
        "title": "[ie]親戚のお姉さん",
        "cover": "https://telegra.ph/file/cbe8464897c1263b1b354.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2424"
    },
    {
        "IDcode": 2425,
        "title": "(C99) [ゆーき乳業 (悠木しん)] 光さす炎天の導き (ゼノブレイド2)",
        "cover": "https://telegra.ph/file/ffec22a9ff39064fe6f39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2425"
    },
    {
        "IDcode": 2426,
        "title": "[スタジオ尋問時計(もろみ涼成)] 腹黒美青年と生ハメしちゃう巨乳人妻",
        "cover": "https://telegra.ph/file/9f89e953a5344da0512a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2426"
    },
    {
        "IDcode": 2427,
        "title": "[學園血盟帖 (織上ワト)] 大人のア〇レン競泳水着部 (アズールレーン)",
        "cover": "https://telegra.ph/file/a8c883f904f369ee4458e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2427"
    },
    {
        "IDcode": 2428,
        "title": "[イマソリドンダイ (あすぜむ)] 樋口さん (アイドルマスターシャイニーカラーズ)",
        "cover": "https://telegra.ph/file/e1d5f90dc1dbbb55030b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2428"
    },
    {
        "IDcode": 2429,
        "title": "(C96) [RipLip (水原優)] 保健室の秘蜜",
        "cover": "https://telegra.ph/file/c05a56df19e20dccc2965.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2429"
    },
    {
        "IDcode": 2430,
        "title": "[世捨人な漫画描き (ともきとものり)] 犯され待ちの発情女を何十人とヤらせてくれる典ちゃんの悪だくみ (東方Project)",
        "cover": "https://telegra.ph/file/7b7ec1a3c4b6776da5f3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2430"
    },
    {
        "IDcode": 2431,
        "title": "[山本善々] 抗え! 筋肉女のマウントポジション!! (COMIC アンスリウム 2022年3月号)",
        "cover": "https://telegra.ph/file/117169cc81b16a2bb1539.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2431"
    },
    {
        "IDcode": 2432,
        "title": "[花札さくらの] みのりちゃん家 その3 (COMIC BAVEL 2022年4月号)",
        "cover": "https://telegra.ph/file/0f261542b2ab4e5e68aa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2432"
    },
    {
        "IDcode": 2433,
        "title": "[ヌタウナギ] 夢魔ん娘と俺 (コミックアンリアル 2021年4月号 Vol.90)",
        "cover": "https://telegra.ph/file/2b474180dd0dfd0a1336a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2433"
    },
    {
        "IDcode": 2434,
        "title": "[ディッコ] 今日も可愛い☆街すい☆いを滅茶苦茶イカせまくって雌になっていただくCG集 (星街すいせい)",
        "cover": "https://telegra.ph/file/73416392a87ee880799c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2434"
    },
    {
        "IDcode": 2435,
        "title": "[でんぱゆっくり] 私と隣の僕のおいしい時間 (コミック刺激的SQUIRT!! Vol.27)",
        "cover": "https://telegra.ph/file/acf010ff95f9a93dba826.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2435"
    },
    {
        "IDcode": 2436,
        "title": "[わかまつ] 女上司二人に両側から責められて脳バグらされる話",
        "cover": "https://telegra.ph/file/5803305d54b9ac1d29be7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2436"
    },
    {
        "IDcode": 2437,
        "title": "[わかまつ] 私には性欲なんてありませんって顔してる彼女の生殖本能を掻き立てる話",
        "cover": "https://telegra.ph/file/255c9e7943d8fbc6dbbc3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2437"
    },
    {
        "IDcode": 2438,
        "title": "[わかまつ] 人見知り同僚女子と密着セックスするお話",
        "cover": "https://telegra.ph/file/0b0dd1e2c325fb0fbdad5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2438"
    },
    {
        "IDcode": 2439,
        "title": "[わかまつ] 女上司と裏で肉体関係を持つお話",
        "cover": "https://telegra.ph/file/035e4bf303b3891ad8f9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2439"
    },
    {
        "IDcode": 2440,
        "title": "[yamadare] ドスケベ配信者Rママ",
        "cover": "https://telegra.ph/file/bfc6e7c583f42524ea75f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2440"
    },
    {
        "IDcode": 2441,
        "title": "[ごさいじ] アマイアイマイ -前編- (COMIC 快楽天 2022年4月号)",
        "cover": "https://telegra.ph/file/c4596dd3ed2194051661f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2441"
    },
    {
        "IDcode": 2442,
        "title": "(C94) [風道屋 (まもウィリアムズ)] むらくもあぱーと (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/28d7d0d7265e145864c0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2442"
    },
    {
        "IDcode": 2443,
        "title": "[有村大根] 昔の制服を着るモルガン陛下",
        "cover": "https://telegra.ph/file/a4e00fa957484c09b667c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2443"
    },
    {
        "IDcode": 2444,
        "title": "[Contamination (eigetu)] 弟の彼女",
        "cover": "https://telegra.ph/file/a1e47a0d025469961a4d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2444"
    },
    {
        "IDcode": 2445,
        "title": "[ctrlz77] Yae Miko (Genshin Impact)  [Decensored]",
        "cover": "https://telegra.ph/file/a623119a2068fe0407a93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2445"
    },
    {
        "IDcode": 2446,
        "title": "(C86) [もっちー王国 (もっちー)] 武蔵のドキドキ大作戦 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/5554b0e5a8195b3112f8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2446"
    },
    {
        "IDcode": 2447,
        "title": "(My Best Friends 9) [Count2.4 (弐肆)] まゆにおまかせ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/a6cf61103c1c46b091c4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2447"
    },
    {
        "IDcode": 2448,
        "title": "[tes_mel] 保健室では本日初恋が実りました (乱れ妻は蜜の味)",
        "cover": "https://telegra.ph/file/d26955e3abacda993f005.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2448"
    },
    {
        "IDcode": 2449,
        "title": "[あんこまん] 巴御前、パリスと仲良くなる (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/1e643d44b9c2800cc3b9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2449"
    },
    {
        "IDcode": 2450,
        "title": "[濡れ枝垂れ] 母子堕淫日常～ボクのオンナになった母～",
        "cover": "https://telegra.ph/file/5f59e528a58f1444dbdbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2450"
    },
    {
        "IDcode": 2451,
        "title": "(AC2) [さんだいよっきゅう (小桜菜々音)] LIP SERVICE 5 (アイドルマスターミリオンライブ!)",
        "cover": "https://telegra.ph/file/649f90a501c07fe230823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2451"
    },
    {
        "IDcode": 2452,
        "title": "(C95) [スライムイール (ヌタウナギ)] 僕と乗っ取りヴィラン膣内射精ミア (僕のヒーローアカデミア)  [カラー化]",
        "cover": "https://telegra.ph/file/a34b2525384543e973a54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2452"
    },
    {
        "IDcode": 2453,
        "title": "[スライムイール (ヌタウナギ)] 僕と乗っ取りヴィラン膣内射精ミア Vol.2 (僕のヒーローアカデミア)  [カラー化]",
        "cover": "https://telegra.ph/file/a6dc60894535679996a6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2453"
    },
    {
        "IDcode": 2454,
        "title": "[スライムイール (ヌタウナギ)] 僕と乗っ取りヴィラン膣内射精ミア Vol.3 (僕のヒーローアカデミア)  [カラー化]",
        "cover": "https://telegra.ph/file/c076cb8ed33e0ca296b74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2454"
    },
    {
        "IDcode": 2455,
        "title": "[ほたてちゃん] 星条旗ビキニ着ためぐるとイチャイチャする漫画 (アイドルマスター シャイニーカラーズ)  [カラー化]",
        "cover": "https://telegra.ph/file/8889e87bf62d8a4ffff5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2455"
    },
    {
        "IDcode": 2456,
        "title": "[ほたてちゃん] 押しに弱い母  [カラー化]",
        "cover": "https://telegra.ph/file/89bcf9e2ded8af131e786.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2456"
    },
    {
        "IDcode": 2457,
        "title": "[エロマズン (まー九郎)] 胡蝶しのぶ姦 ～寝ている間におっさん鬼に犯される～ (鬼滅の刃)  [カラー化]",
        "cover": "https://telegra.ph/file/9b4c32c2fa9759fa10e43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2457"
    },
    {
        "IDcode": 2458,
        "title": "[エロマズン (まー九郎)] カナヲ無表情姦 (鬼滅の刃)    [カラー化]",
        "cover": "https://telegra.ph/file/e5cb1933621102bc43e2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2458"
    },
    {
        "IDcode": 2459,
        "title": "(C96) [熊掌社 (俺正讀)] カルデアマニア・源頼光 (Fate/Grand Order)  [カラー化]",
        "cover": "https://telegra.ph/file/2f0b15c08418b480adfc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2459"
    },
    {
        "IDcode": 2460,
        "title": "[Estrus Girls (彩社長)] トイレのマリア様 (Melty H)",
        "cover": "https://telegra.ph/file/005c410093f78d01a9a95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2460"
    },
    {
        "IDcode": 2461,
        "title": "[ダブルデック製作所 (だぶるでっく)] MECHANICAL TEMPTS (Fallout 4)  [カラー化]",
        "cover": "https://telegra.ph/file/255648ce6db1126fb5306.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2461"
    },
    {
        "IDcode": 2462,
        "title": "[SHIS (Zトン)] メスダチと。",
        "cover": "https://telegra.ph/file/bd3352bca22c536dcecaf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2462"
    },
    {
        "IDcode": 2463,
        "title": "[廃狼] 二人だけのレッスン (COMIC LO 2021年4月号)",
        "cover": "https://telegra.ph/file/06cfc7e08d3ea8488a16e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2463"
    },
    {
        "IDcode": 2464,
        "title": "[角煮煮] 常識改変活動記録 #12. バスに揺られて (WEEKLY快楽天 2022 No.09)",
        "cover": "https://telegra.ph/file/662dae3319746c27ba08d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2464"
    },
    {
        "IDcode": 2465,
        "title": "[隣] 幼女先輩(21)",
        "cover": "https://telegra.ph/file/82c87dcd69b688b8f2a54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2465"
    },
    {
        "IDcode": 2466,
        "title": "(C99) [鮭缶メモリアル (ソロピップB)] Lymphae -リンファエ-",
        "cover": "https://telegra.ph/file/3fcea67140fab64cf0393.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2466"
    },
    {
        "IDcode": 2467,
        "title": "[しろたると (瑚樽、白崎カル)] いとしぐれ ~二人で温泉編~ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/d92e4b2f309b5a3d9b1ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2467"
    },
    {
        "IDcode": 2468,
        "title": "[香りの力 (風の声)] お姉ちゃんはいつもボクにオナラを嗅がせてくれる",
        "cover": "https://telegra.ph/file/711cf43b7cbc6a1f0f602.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2468"
    },
    {
        "IDcode": 2469,
        "title": "[冬壱もんめ] 甘やかし上手の長里さん～保健室でよしよしえっち！～ 第1-14話",
        "cover": "https://telegra.ph/file/f30b36413856aa6812eb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2469"
    },
    {
        "IDcode": 2470,
        "title": "[高津] 私のご主人（ファラオ）様っ!",
        "cover": "https://telegra.ph/file/f649938bdf2d83c9fb04b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2470"
    },
    {
        "IDcode": 2471,
        "title": "[凸傘 (サガッとる)] 母姿系列整合版 夏艶+秋艶+潤艶+甘艶（流木个人整合版）",
        "cover": "https://telegra.ph/file/4cb12c2ea764363f30005.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2471"
    },
    {
        "IDcode": 2472,
        "title": "[品川ミクズ] 短篇合并[一只麻利的鸽子汉化]",
        "cover": "https://telegra.ph/file/a54a2f0a0f22c8d3136d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2472"
    },
    {
        "IDcode": 2473,
        "title": "[わかまつ] 年下の僕に性行為の気持ち良さを教えてくれる幼馴染のお姉さん",
        "cover": "https://telegra.ph/file/53fca1b283ee0b5dff8e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2473"
    },
    {
        "IDcode": 2474,
        "title": "[sironora]浮気エッチ中に指揮官から電話が来ちゃった綾波[一只麻利的鸽子汉化]",
        "cover": "https://telegra.ph/file/e2a9c24592216ed2d2b43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2474"
    },
    {
        "IDcode": 2475,
        "title": "[ACME DOSE (堀田阿伴、鬼遍かっつぇ、幾春別たかお)] 触れたらセックス!?ダマサレ先生と悪魔学～ツンギレ悪魔は抗えない～ | 碰到就要开干!?被骗的老师和恶魔学生～傲娇恶魔无法抵抗～",
        "cover": "https://telegra.ph/file/c4043d1b7daaae601e104.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2475"
    },
    {
        "IDcode": 2476,
        "title": "[えいとまん] えいとまん先生のおかげで彼女ができました! 3 (コミックホットミルク 2022年4月号)",
        "cover": "https://telegra.ph/file/a1a27f5baf49e35bad1f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2476"
    },
    {
        "IDcode": 2477,
        "title": "[あべなっつ] SEXでわかる運命の人～カラダの相性…試してみる?～ 第1-6話",
        "cover": "https://telegra.ph/file/0558f54c2e028d64f452a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2477"
    },
    {
        "IDcode": 2478,
        "title": "[コテラバイト]拗らせ裏垢JK、フォロワーにハメられる",
        "cover": "https://telegra.ph/file/c4415b24107604e66eea1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2478"
    },
    {
        "IDcode": 2479,
        "title": "[ジャムナッツ (夏ジャム)] 贄の森",
        "cover": "https://telegra.ph/file/5d1ec808c0785151a664d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2479"
    },
    {
        "IDcode": 2480,
        "title": "[yamadare] 発情ドスケベ頼光さん",
        "cover": "https://telegra.ph/file/b8a094e82ed3f54afe6eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2480"
    },
    {
        "IDcode": 2481,
        "title": "[エロマズン (まー九郎)] 催眠茨華仙 (東方Project)()",
        "cover": "https://telegra.ph/file/3e521e5ded352763990f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2481"
    },
    {
        "IDcode": 2482,
        "title": "(C91) [LongHornTrain (ちょちょ)] こづくり☆ミトメール!! (魔法つかいプリキュア!)",
        "cover": "https://telegra.ph/file/5c94b9f3a18fea702575a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2482"
    },
    {
        "IDcode": 2483,
        "title": "[浦瀬しおじ] 妖女館の日常 第四話",
        "cover": "https://telegra.ph/file/77b560ed0cf050b7291f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2483"
    },
    {
        "IDcode": 2484,
        "title": "[ここまち] 2022年1月号",
        "cover": "https://telegra.ph/file/79dad79b75b0fb2301d92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2484"
    },
    {
        "IDcode": 2485,
        "title": "[木瀬樹] 麦の恩返し (WEEKLY快楽天 2022 No.09)",
        "cover": "https://telegra.ph/file/a36129f4c5b472841d179.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2485"
    },
    {
        "IDcode": 2486,
        "title": "[水龍敬] ラブスレイヴ 15 (コミックめづ 2022-02-11)",
        "cover": "https://telegra.ph/file/7b0393e8edebf0bdbb207.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2486"
    },
    {
        "IDcode": 2487,
        "title": "(C99) [キレイナブタ (ぶたちゃんぐ)] 異世界の女たち 2.0",
        "cover": "https://telegra.ph/file/abcbe8f0c9f99319bdf93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2487"
    },
    {
        "IDcode": 2488,
        "title": "[RipLip (水原優)] クレーム性処理女子社員2 ~謝罪出張~",
        "cover": "https://telegra.ph/file/42c1ee526db51bb02f899.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2488"
    },
    {
        "IDcode": 2489,
        "title": "[絵援隊 (酒呑童子)] 僕以外インポの世界2 体育教師編",
        "cover": "https://telegra.ph/file/e508f01ad55c15c662e6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2489"
    },
    {
        "IDcode": 2490,
        "title": "[sironora] パーミャチ・メルクーリヤが寝取られた (アズールレーン)",
        "cover": "https://telegra.ph/file/acf01b57c211762aed559.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2490"
    },
    {
        "IDcode": 2491,
        "title": "[Eonsang] kalina manga",
        "cover": "https://telegra.ph/file/5f15bf64f2e7f6155fc57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2491"
    },
    {
        "IDcode": 2492,
        "title": "[太阳下山了]和瑶瑶一起共克难关：内急",
        "cover": "https://telegra.ph/file/eda8a19b47bfee71e6f13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2492"
    },
    {
        "IDcode": 2493,
        "title": "圣诞快乐！——为了给大家带来快乐，攸子酱决定成为圣诞树",
        "cover": "https://telegra.ph/file/56681585efac8b7d74474.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2493"
    },
    {
        "IDcode": 2494,
        "title": "[stratus]年夕令三姐妹的子宫凌虐盛会！",
        "cover": "https://telegra.ph/file/aebd6f6c3e9a065f7f915.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2494"
    },
    {
        "IDcode": 2495,
        "title": "[木瀬樹] 負けるな絶倫先生! (G-エッヂ Vol.014)",
        "cover": "https://telegra.ph/file/7c3e3fa77cd793966c0e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2495"
    },
    {
        "IDcode": 2496,
        "title": "[高城ごーや] この屋敷では〈前編〉(ろりっちゃう?パコっちゃう?)",
        "cover": "https://telegra.ph/file/27eb0b324b793ec36fa80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2496"
    },
    {
        "IDcode": 2497,
        "title": "[高城ごーや] この屋敷では 後編 (ろりっちゃう?パコっちゃう?)",
        "cover": "https://telegra.ph/file/553083834d91ce7ea0571.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2497"
    },
    {
        "IDcode": 2498,
        "title": "[あむぁいおかし製作所 (星埜いろ)] クラスメイトと入れかわったぼくのエッチな三角関係!",
        "cover": "https://telegra.ph/file/88b97d234f591dcf70197.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2498"
    },
    {
        "IDcode": 2499,
        "title": "[早乙女もんどのすけ] 褐色人妻K・Eさんアルバイト先で排泄調教+ (黄金のソナタXXX その八)",
        "cover": "https://telegra.ph/file/ea69e58dec627aea97b21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2499"
    },
    {
        "IDcode": 2500,
        "title": "[ディッコ] あく⚓んを電マでイカセたりしながらいっぱいえっちしまくるCG集（湊あくあ）【基德漢化組】",
        "cover": "https://telegra.ph/file/245e66d370cd5b9b0cae8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2500"
    }
];
