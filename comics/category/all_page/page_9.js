// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 801,
        "title": "[西沢みずき] 隣・人 (COMIC 失楽天 2022年4月号)",
        "cover": "https://telegra.ph/file/39b349fff78046b97e768.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=801"
    },
    {
        "IDcode": 802,
        "title": "[ひよりみのソラ (陽寄瑞貴)] 背伸び少女といちゃラブ生活～黒木萌 13歳～  [2019年8月25日]",
        "cover": "https://telegra.ph/file/3adb8d86058eb3c78a68c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=802"
    },
    {
        "IDcode": 803,
        "title": "[平沢Zen] グレスケ抜き抜きモルガンさん (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/2a7729442b05b4182761c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=803"
    },
    {
        "IDcode": 804,
        "title": "[孝至] 怪盗少女ホーリールルナ (コミックアンリアル 2022年2月号 Vol.95)",
        "cover": "https://telegra.ph/file/652f0a1ab6f9ed1ece417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=804"
    },
    {
        "IDcode": 805,
        "title": "[エクセシオ (こね茶)] 女姫エルフ恥辱の家畜堕ち～搾乳調教でオーク汚チ○ポの奴隷に～",
        "cover": "https://telegra.ph/file/38524e8cdbe6b20d564d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=805"
    },
    {
        "IDcode": 806,
        "title": "(C89) [チデヂ (オヤヂ)] 落魄せしもの (うたわれるもの 偽りの仮面)",
        "cover": "https://telegra.ph/file/7673d982cc908918ddaec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=806"
    },
    {
        "IDcode": 807,
        "title": "(砲雷撃戦!よーい!三十八戦目) [異郷 (山崎かな)] うーちゃん、「ごめんなさい」は? (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/b9939249e3b9e88417653.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=807"
    },
    {
        "IDcode": 808,
        "title": "[Mr.way] 気になるあの娘は友達の肉便器 漫研オタサーの眼鏡地味子",
        "cover": "https://telegra.ph/file/c385ad8dc0ba813ba64d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=808"
    },
    {
        "IDcode": 809,
        "title": "(C76) [シュート・ザ・ムーン (フエタキシ)] rapture rose (ああっ女神さまっ)",
        "cover": "https://telegra.ph/file/0d0243a78108ef36137ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=809"
    },
    {
        "IDcode": 810,
        "title": "[御姉狂 (ML)] 路地裏のメス猫 (ゲゲゲの鬼太郎)",
        "cover": "https://telegra.ph/file/e235f4222ecc070e6102a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=810"
    },
    {
        "IDcode": 811,
        "title": "[きのもと杏] あずなの夏休み (COMIC LO 2022年1月号)",
        "cover": "https://telegra.ph/file/baea771d007a3becb799f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=811"
    },
    {
        "IDcode": 812,
        "title": "[スペースくじら (くじらジオ)] 人妻を催眠えっちで孕ませるまで",
        "cover": "https://telegra.ph/file/81dab2443e2df45ab7425.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=812"
    },
    {
        "IDcode": 813,
        "title": "(COMIC1☆19) [ESSENTIA (藤真拓哉)] 描き下ろし 〜五つ子ウェディング〜 (五等分の総集編) (五等分の花嫁)",
        "cover": "https://telegra.ph/file/7e6b46eceb9f011f69f30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=813"
    },
    {
        "IDcode": 814,
        "title": "[かぜぱな] 妖しく手ほどき♥ (WEEKLY快楽天 2021 No.48)",
        "cover": "https://telegra.ph/file/59dd2499591f4c178c036.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=814"
    },
    {
        "IDcode": 815,
        "title": "[銀色ノエル (ゆーま)] 雨降るあくる日あの子をうちに",
        "cover": "https://telegra.ph/file/f6694242284dcfdfcf74d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=815"
    },
    {
        "IDcode": 816,
        "title": "[こめざわ] 今日は特別ナマ配信♡ (COMIC 快楽天 2021年1月号)",
        "cover": "https://telegra.ph/file/27119026c1919cc5f3c45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=816"
    },
    {
        "IDcode": 817,
        "title": "[こめざわ] 同じ笑顔で (COMIC 快楽天 2021年11月号)",
        "cover": "https://telegra.ph/file/3d5e3e505bff33120d2fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=817"
    },
    {
        "IDcode": 818,
        "title": "(C92) [Σ-Arts (神毛物由宇)] マヨヒガのお姉さんOVA化記念号 カラー編",
        "cover": "https://telegra.ph/file/cbefed618567d86ed3462.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=818"
    },
    {
        "IDcode": 819,
        "title": "[ざんか] メイドさんを誘惑するお嬢様",
        "cover": "https://telegra.ph/file/108a5689151e55fc34ebf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=819"
    },
    {
        "IDcode": 820,
        "title": "[ざんか] メイドさんに縛られたいお嬢様",
        "cover": "https://telegra.ph/file/80e0acf97262da06cb707.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=820"
    },
    {
        "IDcode": 821,
        "title": "[甲月創作処 (甲月)] 一年後のいたずら (五等分の花嫁)",
        "cover": "https://telegra.ph/file/aa49bd0f0f58cd0f4fd5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=821"
    },
    {
        "IDcode": 822,
        "title": "[MANA] 八重神子1",
        "cover": "https://telegra.ph/file/cdf4f09e5a617e278fcbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=822"
    },
    {
        "IDcode": 823,
        "title": "[Fan No Hitori] ナイチンゲール オナホ化人格排泄 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/cdcd410471be7af522306.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=823"
    },
    {
        "IDcode": 824,
        "title": "[ひっさつわざ (ひっさつくん)] 無人駅 III 總集篇新增部份 [個人漢化]",
        "cover": "https://telegra.ph/file/8c579633289269780edfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=824"
    },
    {
        "IDcode": 825,
        "title": "[カムリズム (鬼頭サケル)] オレンジリストバンド 総集編 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/4674567b2d4938c68f230.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=825"
    },
    {
        "IDcode": 826,
        "title": "[ギョウザテイショク] 配信♡中毒 (コミックホットミルク 2021年2月号)",
        "cover": "https://telegra.ph/file/f52036d381c6c4306228e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=826"
    },
    {
        "IDcode": 827,
        "title": "[神官冰点汉化][にゅう工房 (にゅう)] スーパーチートミッションEX そのガラケーに表示されたミッションは必ず達成できる",
        "cover": "https://telegra.ph/file/bab4075dc8137146d7ac0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=827"
    },
    {
        "IDcode": 828,
        "title": "[すのーりっち (いいだ豊雪)] Second Semester II (Fate/stay night)",
        "cover": "https://telegra.ph/file/f21d889c9c0aaa429cf98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=828"
    },
    {
        "IDcode": 829,
        "title": "[ひっさつわざ (ひっさつくん)] ホームレス村 I",
        "cover": "https://telegra.ph/file/7a589d0881747864106c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=829"
    },
    {
        "IDcode": 830,
        "title": "[超斬開 (TER)] 女の子たちのひみつの冒険 3 (ポケットモンスター サン・ムーン)",
        "cover": "https://telegra.ph/file/de1566ce659fa45a3ef0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=830"
    },
    {
        "IDcode": 831,
        "title": "[むた] 酒吞童子 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/4c1aff5e865f6cc2a760a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=831"
    },
    {
        "IDcode": 832,
        "title": "[ありむらんど (蟻アンド村)] 憑依娘～心優しき霊感少女～",
        "cover": "https://telegra.ph/file/4a6c9f491875c3ded1df1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=832"
    },
    {
        "IDcode": 833,
        "title": "[あや鳥] お試し恋心 (COMIC BAVEL 2022年4月号)",
        "cover": "https://telegra.ph/file/a91aa68b84ac58963e716.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=833"
    },
    {
        "IDcode": 834,
        "title": "[海山そぜ] そのマスクの下は (COMIC オルガ vol.35)",
        "cover": "https://telegra.ph/file/afa6c947eba1ef945534e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=834"
    },
    {
        "IDcode": 835,
        "title": "[ホネ] ちつこき (COMIC LO 2017年2月号)",
        "cover": "https://telegra.ph/file/0b68e4031ff1f0d3ae811.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=835"
    },
    {
        "IDcode": 836,
        "title": "[もみやま] 巨乳81人をしあわせにしないと即死亡 第1～5話",
        "cover": "https://telegra.ph/file/46f418c39155b8c38253f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=836"
    },
    {
        "IDcode": 837,
        "title": "[きのこのみ (kino)] えっちな幼なじみは好きですか? ~きのこのみ学園 1年生 桜坂野々花~",
        "cover": "https://telegra.ph/file/17d0ed5a478a819415aa7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=837"
    },
    {
        "IDcode": 838,
        "title": "[ひぐま屋 (野良ヒグマ)] 身近なお姉さんがサキュバスだったので搾精されるお話",
        "cover": "https://telegra.ph/file/b883feb8cd888019d60a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=838"
    },
    {
        "IDcode": 839,
        "title": "(IDOL STAR FESTIVL 08) [PLANT (鶴井)] 詩花はとっても積極的です! (アイドルマスター ステラステージ)",
        "cover": "https://telegra.ph/file/7a56c8daa77a33eb1c02d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=839"
    },
    {
        "IDcode": 840,
        "title": "(C89) [超時空要塞カチューシャ (電気将軍)] アカデミガールズ (僕のヒーローアカデミア)  [カラー化]",
        "cover": "https://telegra.ph/file/4283722f60e9dd814204a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=840"
    },
    {
        "IDcode": 841,
        "title": "[此花区 (此花)] ワノ国銭湯揉み洗い弐 (ワンピース)  [カラー化]",
        "cover": "https://telegra.ph/file/2bcab4965dbe0a6b21fa2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=841"
    },
    {
        "IDcode": 842,
        "title": "(COMIC1☆9) [ぽち小屋。 (ぽち。)] オトナのだがし (だがしかし)  [カラー化]",
        "cover": "https://telegra.ph/file/c2acd87093bee217f6a20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=842"
    },
    {
        "IDcode": 843,
        "title": "(C90) [CELLULOID-ACME (チバトシロウ)] POPPIN' GIRLS (僕のヒーローアカデミア)  [カラー化]",
        "cover": "https://telegra.ph/file/038dc8b4b1b53da381937.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=843"
    },
    {
        "IDcode": 844,
        "title": "(C89) [いちごぱんつ (カグユヅ)] スウィート·ラブ·レター (だがしかし)  [カラー化]",
        "cover": "https://telegra.ph/file/89e1d61a1c240cf4a5954.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=844"
    },
    {
        "IDcode": 845,
        "title": "(C88) [ぽち小屋。 (ぽち。)] オトナのだがし2 (だがしかし)  [カラー化]",
        "cover": "https://telegra.ph/file/419ef6778552cc0017554.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=845"
    },
    {
        "IDcode": 846,
        "title": "(C89) [ぽち小屋。 (ぽち。)] オトナのだがし 3 (だがしかし)  [カラー化]",
        "cover": "https://telegra.ph/file/902dbe01fc9405709781a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=846"
    },
    {
        "IDcode": 847,
        "title": "[こすび] 委員長が堕とされる漫画 (月ノ美兎)",
        "cover": "https://telegra.ph/file/69c6b0a4b65c15c2c3c16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=847"
    },
    {
        "IDcode": 848,
        "title": "[chaccu、TinkerBell] 淫妖蟲 ～凌触学園退魔録～",
        "cover": "https://telegra.ph/file/98427c286ee5e999b9f4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=848"
    },
    {
        "IDcode": 849,
        "title": "[おふとんでスヤァ (みつどうえ)] 嫌なのに本能で種乞いエッチしてしまうサキュバスちゃん",
        "cover": "https://telegra.ph/file/1bd86acee3e8036790661.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=849"
    },
    {
        "IDcode": 850,
        "title": "(こみトレ39) [SANDAN (くるん)] 雷電将軍は夢心地 (原神)",
        "cover": "https://telegra.ph/file/1e8ba1eb01a978fbdbb54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=850"
    },
    {
        "IDcode": 851,
        "title": "[Paradise Lost (斉木)] じゃ、抜くわね (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/ae9ea576b5a92e2f2b015.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=851"
    },
    {
        "IDcode": 852,
        "title": "[へたれん]水着イオリ_ミニ漫画 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/63c1bac78a80566e195df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=852"
    },
    {
        "IDcode": 853,
        "title": "[沢田大介] 天然交母 てんねんこうぼ",
        "cover": "https://telegra.ph/file/4a942dfba415582324bee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=853"
    },
    {
        "IDcode": 854,
        "title": "[もものユーカ] ルナティック (COMIC アンスリウム 2022年3月号)",
        "cover": "https://telegra.ph/file/7d9b0f3bddd031d8c9b0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=854"
    },
    {
        "IDcode": 855,
        "title": "[中華なると] 優等生美波～女教師礼子2～",
        "cover": "https://telegra.ph/file/c0e307963e23b91113549.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=855"
    },
    {
        "IDcode": 856,
        "title": "[練り物工場 (よろず)] 八宮めぐるドスケベ合同誌 マサチューエッチ州 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/ec1131f26dddb4fafc395.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=856"
    },
    {
        "IDcode": 857,
        "title": "[ro] ケモロリメス箱ルウちゃんの初仕事",
        "cover": "https://telegra.ph/file/5eebf855c0d9980d038b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=857"
    },
    {
        "IDcode": 858,
        "title": "[てるてるがーる (天乃輝)] 蟲姦風俗店 II",
        "cover": "https://telegra.ph/file/69dcd6ea7eabd9c65c646.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=858"
    },
    {
        "IDcode": 859,
        "title": "[僥倖酒 (ごん。、黒齋)] ○○はふさわしくありません! (ラブライブ!スーパースター!!)",
        "cover": "https://telegra.ph/file/517d4504c1f83d8d95258.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=859"
    },
    {
        "IDcode": 860,
        "title": "[ダンシングボイ～ン (人風メーン)] 僕の先輩、中出し公衆便女堕ち",
        "cover": "https://telegra.ph/file/f7685f66b0cc850b55d62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=860"
    },
    {
        "IDcode": 861,
        "title": "[シャルロット・ココ (ゆきやなぎ)] ゆきやなぎの本48 未亡人相続2 すべて、あなたのものよ…",
        "cover": "https://telegra.ph/file/d7af81e4b30ec7183b73d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=861"
    },
    {
        "IDcode": 862,
        "title": "[おツマミ] 密室に閉じ込められた2人がえっちな事しちゃう話",
        "cover": "https://telegra.ph/file/7141030bd66b0336dc7a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=862"
    },
    {
        "IDcode": 863,
        "title": "[シャイン・ナビス] ベレト性奴隷調教 (メギド72)",
        "cover": "https://telegra.ph/file/cfdfa6d6848c8c288ee20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=863"
    },
    {
        "IDcode": 864,
        "title": "[まくろ] エスアネ (Comic エロ魂 2015年5月号 Vol.8)",
        "cover": "https://telegra.ph/file/4cecccc1a987a85678622.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=864"
    },
    {
        "IDcode": 865,
        "title": "[一本杭] 押しに弱いOL、手ワザでナカから凄イキ! ほぐれる絶頂ガニ股マッサージ 1",
        "cover": "https://telegra.ph/file/b9dcf5c60d4fb5790788f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=865"
    },
    {
        "IDcode": 866,
        "title": "(C95) [端末異常 (BadHanD)] 白狐の杜其の拾壱",
        "cover": "https://telegra.ph/file/8c6b0198c8e2b4747cebb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=866"
    },
    {
        "IDcode": 867,
        "title": "(C97) [端末異常 (BadHand)] 白狐の杜其の拾弐",
        "cover": "https://telegra.ph/file/67a332e27ca096c374190.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=867"
    },
    {
        "IDcode": 868,
        "title": "[御歯黒溝] 私もう大人だから (COMIC LO 2022年3月号)",
        "cover": "https://telegra.ph/file/8be67b08fd5867ec07ac2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=868"
    },
    {
        "IDcode": 869,
        "title": "[同人昔話] 多目的トイレで",
        "cover": "https://telegra.ph/file/beaa34db44a35d7ce75cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=869"
    },
    {
        "IDcode": 870,
        "title": "[雲之糸] マッチングアプリで出会った相手は母さんでした",
        "cover": "https://telegra.ph/file/5f3949a9e89be1e44a783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=870"
    },
    {
        "IDcode": 871,
        "title": "[甘露アメ] ■■村淫習継承マニュアル",
        "cover": "https://telegra.ph/file/c3784ee677f269be45d1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=871"
    },
    {
        "IDcode": 872,
        "title": "(C97) [ESSENTIA (藤真拓哉)] 五等分の温泉三昧 (五等分の花嫁)",
        "cover": "https://telegra.ph/file/3e22146767341311d0bcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=872"
    },
    {
        "IDcode": 873,
        "title": "[みどり葵] 布団のなか (COMIC 失楽天 2018年8月号)",
        "cover": "https://telegra.ph/file/80d649fff998fbef3f15e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=873"
    },
    {
        "IDcode": 874,
        "title": "[石野鐘音] ふたなり奴隷市場 第1-7話",
        "cover": "https://telegra.ph/file/cd9382e80e01417316072.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=874"
    },
    {
        "IDcode": 875,
        "title": "[みさお。] えるおーちゃんねる (COMIC LO 2022年2月号)",
        "cover": "https://telegra.ph/file/9ac7fd17aad92202ab5f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=875"
    },
    {
        "IDcode": 876,
        "title": "[一本杭] 押しに弱いOL、手ワザでナカから凄イキ! ほぐれる絶頂ガニ股マッサージ 2",
        "cover": "https://telegra.ph/file/d221af00799d4aaa5c535.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=876"
    },
    {
        "IDcode": 877,
        "title": "[みりおんらぶ (夜与)] Double Moon (アイドルマスター)",
        "cover": "https://telegra.ph/file/07e4cdda057c237a99755.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=877"
    },
    {
        "IDcode": 878,
        "title": "[水無月十三] 放課後の教室で乱交する淫乱JSなんているはずがない! (COMIC LO 2019年1月号)  [カラー化]",
        "cover": "https://telegra.ph/file/3357ded55c351d2c6fe84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=878"
    },
    {
        "IDcode": 879,
        "title": "[Pixiv] PICKLEFISH (25421695)",
        "cover": "https://telegra.ph/file/b0fb77621f14cf610f523.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=879"
    },
    {
        "IDcode": 880,
        "title": "[丸新] ギャル娘とオタク君 (純愛、NTR展開一切無し)",
        "cover": "https://telegra.ph/file/9a2ce92eeb388f7249504.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=880"
    },
    {
        "IDcode": 881,
        "title": "[きょくちょ] 楓と鈴 6 (COMIC BAVEL 2022年5月号)",
        "cover": "https://telegra.ph/file/fea08c9319dcfb862f29d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=881"
    },
    {
        "IDcode": 882,
        "title": "[ひっさつわざ (ひっさつくん)] ホームレス村II",
        "cover": "https://telegra.ph/file/b7c3ab9a7fcc3dacb688a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=882"
    },
    {
        "IDcode": 883,
        "title": "[チョコロ] 彼女のスマホを覗いただけなのに 3",
        "cover": "https://telegra.ph/file/fac66c715f07ceb633908.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=883"
    },
    {
        "IDcode": 884,
        "title": "[ひぐま屋 (野良ヒグマ)] 身近なお姉さんがサキュバスだったので搾精されるお話",
        "cover": "https://telegra.ph/file/ec8f0a5fc707a1f7ad372.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=884"
    },
    {
        "IDcode": 885,
        "title": "[ササマシン] 少女退魔師は触手のママになりました [第1話]",
        "cover": "https://telegra.ph/file/a4f2c6596fc51624118c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=885"
    },
    {
        "IDcode": 886,
        "title": "[聖水BAR] SKBなVtuberとHするだけ (にじさんじ)",
        "cover": "https://telegra.ph/file/f60bf775086a69d907f48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=886"
    },
    {
        "IDcode": 887,
        "title": "[極太眉毛] マリーちゃんえっちマンガ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/ba27fab30c457343fdee2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=887"
    },
    {
        "IDcode": 888,
        "title": "[カルムアトモスフィア (しんや)] 同期の嫁と枕えっちと旦那の浮気～妊婦パート～",
        "cover": "https://telegra.ph/file/76fea021fe33f5acc124a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=888"
    },
    {
        "IDcode": 889,
        "title": "[ヨールキ・パールキ (露々々木もげら)] K子と病みおじ・楽",
        "cover": "https://telegra.ph/file/83b5d7c23fc066d742c89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=889"
    },
    {
        "IDcode": 890,
        "title": "[ザキザラキ] 楽しい楽しい中出しパーティー (戯児体験)",
        "cover": "https://telegra.ph/file/f58c90a35290dfd851f1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=890"
    },
    {
        "IDcode": 891,
        "title": "[卍天堂書店 (浪花道またたび)] 異聞火魅華伝 鬼艶草子",
        "cover": "https://telegra.ph/file/d9d769ff57763bb70dc22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=891"
    },
    {
        "IDcode": 892,
        "title": "[雲呑めお] ご奉仕ウララちゃん (COMIC 快楽天 2022年4月号)",
        "cover": "https://telegra.ph/file/eaae2b14d19b493fffba4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=892"
    },
    {
        "IDcode": 893,
        "title": "[hanee] 罗德岛性处理部干员档案—安塞尔篇",
        "cover": "https://telegra.ph/file/cf7023bbc8b1284701946.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=893"
    },
    {
        "IDcode": 894,
        "title": "[マキオ] ひみつのランドリー (COMIC LO 2021年10月号)",
        "cover": "https://telegra.ph/file/36a905f3f983a29bd1eb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=894"
    },
    {
        "IDcode": 895,
        "title": "[山田ゴゴゴ] エローナ2 オークの淫紋に悶えし巫女の成れの果て 三話「雌豚嫉妬 前編」 (くっ殺ヒロインズ Vol.19)",
        "cover": "https://telegra.ph/file/1b12365f96483561e2207.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=895"
    },
    {
        "IDcode": 896,
        "title": "[櫻井マキ] 台風の夜に… (COMIC BAVEL 2022年5月号)",
        "cover": "https://telegra.ph/file/48f3152d44847a87e3d0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=896"
    },
    {
        "IDcode": 897,
        "title": "[あんこまん] イシュタル、エレシュキガルを巻き込んでギルくんと… (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/749c72258deace8e59f5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=897"
    },
    {
        "IDcode": 898,
        "title": "(C99) [麻婆うどん定食 (ヤキソバぱん太郎、ネギトロ子)] モルラブ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/2e89e20563dd13e043823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=898"
    },
    {
        "IDcode": 899,
        "title": "[りとるほっぱー+Ziggurat (橋広こう)] あいかと叔父さん～寝ている間に花嫁修行～03",
        "cover": "https://telegra.ph/file/684a2319bb2b161b2cc05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=899"
    },
    {
        "IDcode": 900,
        "title": "[ざんか] お仕置きしたいお嬢様とされたいメイドさん",
        "cover": "https://telegra.ph/file/38a787571de8e83571906.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=900"
    }
];
