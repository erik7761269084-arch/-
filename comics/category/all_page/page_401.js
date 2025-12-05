// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 4001,
        "title": "[流一本] かなめDate #10 (COMIC 阿吽 2020年8月号)",
        "cover": "https://telegra.ph/file/5eee497619cad672781c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4001"
    },
    {
        "IDcode": 4002,
        "title": "[NCP] 私の全てを会長に捧げます～会長になった男を崇拝する学園は楽しいエロエロハーレム!!",
        "cover": "https://telegra.ph/file/19e616b5e8225c0040d38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4002"
    },
    {
        "IDcode": 4003,
        "title": "[藤坂空樹] おっパラダイスは診療中 (2)",
        "cover": "https://telegra.ph/file/20c0bfd1972fc9414693c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4003"
    },
    {
        "IDcode": 4004,
        "title": "[Hotel Negresco (Negresco)] hepatica8.0 郷愁の章 (ゼノブレイド2)",
        "cover": "https://telegra.ph/file/9d29b21b4a238c31cbd38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4004"
    },
    {
        "IDcode": 4005,
        "title": "[九調四季 (調四季)] 催眠を…3",
        "cover": "https://telegra.ph/file/8eb4421561ff3d56ac713.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4005"
    },
    {
        "IDcode": 4006,
        "title": "[エノキドォ] 美女と野獣 〜ギャルとキモオタ〜 (COMIC アンスリウム 2021年8月号)",
        "cover": "https://telegra.ph/file/e4d9b8f87e2a051a5b4d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4006"
    },
    {
        "IDcode": 4007,
        "title": "[どうしょく(オミズチヒロ)] クール系ネトゲJKと漫喫オフ会から始まるラブえっち",
        "cover": "https://telegra.ph/file/2db9a6a868563c4c8e9af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4007"
    },
    {
        "IDcode": 4008,
        "title": "[あまりにセンパク! (ヨッコラ)] ファミリーラブプレイ",
        "cover": "https://telegra.ph/file/d58e5afa209947a588d89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4008"
    },
    {
        "IDcode": 4009,
        "title": "[アキカン (rikazu)] 長門ちゃんが提督一筋だったので、寝とって孕ませ妊娠させるお ざまぁ笑 (アズールレーン)",
        "cover": "https://telegra.ph/file/69ac17a9bfc22442f3a8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4009"
    },
    {
        "IDcode": 4010,
        "title": "[アイス発電所 (アイスのあ)] 愛する妻との寝取られ生活",
        "cover": "https://telegra.ph/file/8f84b6c7114a4eeef9e8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4010"
    },
    {
        "IDcode": 4011,
        "title": "(C97) [白鳳工房 (コウコク)] 甘くておいしいチョコアイドルです (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/e82d36db1197b14631743.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4011"
    },
    {
        "IDcode": 4012,
        "title": "[あむあむタイガー (てば虎)] 委員長は普通の女の子になりたがっている",
        "cover": "https://telegra.ph/file/394ded80caa259c65a8ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4012"
    },
    {
        "IDcode": 4013,
        "title": "[りーりおがーと (かえぬこ)] ミヤちゃん1年調教 上",
        "cover": "https://telegra.ph/file/b6178137019eb99f677e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4013"
    },
    {
        "IDcode": 4014,
        "title": "[グラスタートル] S教師な加々見先生とM母な僚子さん 2",
        "cover": "https://telegra.ph/file/be2dd669a288c1c384a48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4014"
    },
    {
        "IDcode": 4015,
        "title": "[Darkmaya] 光のコヤンスカヤ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/4c39d595d00cf293eaaeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4015"
    },
    {
        "IDcode": 4016,
        "title": "[Darkmaya] 糸球体ソープランド (はたらく細胞)",
        "cover": "https://telegra.ph/file/a4565db0b801d3a9dd0a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4016"
    },
    {
        "IDcode": 4017,
        "title": "[こんにゃく] おねしょた和希先輩  [進行中]",
        "cover": "https://telegra.ph/file/a7a500b0b23975ae2f03c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4017"
    },
    {
        "IDcode": 4018,
        "title": "(C94) [L.G.C. (リブユウキ)] 踏んでっスカサハさま (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/3beeb87ba675a1947362f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4018"
    },
    {
        "IDcode": 4019,
        "title": "[アルセノテリス (Rebis)] 天才絶倫◯学生と黒爆尻ファミリー！ Genius Stud Student & His Host Family!",
        "cover": "https://telegra.ph/file/a423ccf7c2b5b2d32841f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4019"
    },
    {
        "IDcode": 4020,
        "title": "[悪転奏進 (黒糖ニッケ)] 艦娘着妊 Johnston & Gambier Bay 嬌声胎姦命令 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/df4dd027b3043115fe5be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4020"
    },
    {
        "IDcode": 4021,
        "title": "[まるごし] 温泉強制接待千雪さん (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/4a5720c19582d27ff135e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4021"
    },
    {
        "IDcode": 4022,
        "title": "[てるてるがーる (天乃輝)] 増殖タピオカでタピオカ産卵プレイをするお話",
        "cover": "https://telegra.ph/file/f35a25c3067401f9bb31c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4022"
    },
    {
        "IDcode": 4023,
        "title": "(こみトレ34) [ムキぽめら (蚕堂j1)] 狂言のトニック (Dead by Daylight)",
        "cover": "https://telegra.ph/file/b3961ce451f546077387f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4023"
    },
    {
        "IDcode": 4024,
        "title": "(C89) [フェナル堂 (い～どぅ～)] ゼエン教のHな異端審問♡ (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/6f9297a6407cf0b63e926.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4024"
    },
    {
        "IDcode": 4025,
        "title": "[ここあんこう] 自堕落マキナの性活 (コミックアンリアル 2021年8月号 Vol.92)",
        "cover": "https://telegra.ph/file/54385de9b8bd5eb34dbfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4025"
    },
    {
        "IDcode": 4026,
        "title": "[マッデン] 人妻・寝取られ あ～～社長の奥さん、とても素敵ですね～～",
        "cover": "https://telegra.ph/file/bde9164d2e2883887979a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4026"
    },
    {
        "IDcode": 4027,
        "title": "[つるつるいっぱい] 新しい父親がヤリチンすぎる件",
        "cover": "https://telegra.ph/file/563b455331ce73a60d6c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4027"
    },
    {
        "IDcode": 4028,
        "title": "[空想モノクローム (あび)] 隣のJDの性欲が強い",
        "cover": "https://telegra.ph/file/0024517e509ce2a7e31b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4028"
    },
    {
        "IDcode": 4029,
        "title": "[まんす] ばすとしょっと! (コミックホットミルク 2021年9月号)",
        "cover": "https://telegra.ph/file/acbe437035d24b7cd7990.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4029"
    },
    {
        "IDcode": 4030,
        "title": "[おー] 君の届かないプレリュード (コミック エグゼ 31)",
        "cover": "https://telegra.ph/file/fa569f0f7a26bcbbc19ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4030"
    },
    {
        "IDcode": 4031,
        "title": "[Darkmaya] 白血球敗北 (はたらく細胞)",
        "cover": "https://telegra.ph/file/cfeac74f3455c20fd6dab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4031"
    },
    {
        "IDcode": 4032,
        "title": "[白野じん] 元気ハツラツ!お義父さん (コミックホットミルク濃いめ vol.20)",
        "cover": "https://telegra.ph/file/dd1219138aa4d783cce4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4032"
    },
    {
        "IDcode": 4033,
        "title": "(COMIC1 BS祭 スペシャル) [りゅうかくさんのどあめ (極太眉毛)] ムツキ イ・タ・ズ・ラ ワンデイ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/8d3e38ed246a9868c2e0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4033"
    },
    {
        "IDcode": 4034,
        "title": "[まんまるおねこ] えっちなお姉さん達にしぼりつくされる",
        "cover": "https://telegra.ph/file/92466bd113a7dadae2063.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4034"
    },
    {
        "IDcode": 4035,
        "title": "[ベコ太郎] 素直にわんわん! (COMIC 快楽天ビースト 2021年9月号)",
        "cover": "https://telegra.ph/file/0ad4bc71627e2eaed25f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4035"
    },
    {
        "IDcode": 4036,
        "title": "[武藤まと] 過保護メイドの心子知らず (永遠娘 朧絵巻 参)",
        "cover": "https://telegra.ph/file/be86fd2e3398147e9c7db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4036"
    },
    {
        "IDcode": 4037,
        "title": "[桃月すず] Over flow (COMIC 快楽天 2021年7月号)",
        "cover": "https://telegra.ph/file/5742cbc674ffa2c7b8985.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4037"
    },
    {
        "IDcode": 4038,
        "title": "[ゴ太郎のオールナイトファック (ゴ太郎)] 孤○院をやっていた最強退役女アンドロイド、犯され壊され何一つ守れず機能停止",
        "cover": "https://telegra.ph/file/ac6d8cc184b40d025ee1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4038"
    },
    {
        "IDcode": 4039,
        "title": "[にぎりうさぎ] 園田・続 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/aa6ef86f5a5353b61591f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4039"
    },
    {
        "IDcode": 4040,
        "title": "(COMIC1☆17) [萌姫連合 (xin、obiwan)] カーニバル31-監禁特異点 サマーキャンプ快楽天 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/374328a1eb06adea751af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4040"
    },
    {
        "IDcode": 4041,
        "title": "[平沢＠Zen] 魔乳おっぱい乳上に『お仕置き・体格差・逆パイズリ』で優しく躾けられる話 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/c3cd240ec98dd09b2bdb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4041"
    },
    {
        "IDcode": 4042,
        "title": "(C97) [TWILIGHT DUSK (藍夜)] 蔵の中 ～少女は罪人の上で踊る～",
        "cover": "https://telegra.ph/file/07920ef50e1690f78b81a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4042"
    },
    {
        "IDcode": 4043,
        "title": "[猫の玉手箱 (猫乃ふぐり)] 素直になって、咲夜さんっ！ (東方Project)",
        "cover": "https://telegra.ph/file/08b0efa936a20ac74d2d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4043"
    },
    {
        "IDcode": 4044,
        "title": "[湯山チカ] 先生とぼく 第10話 後編 (アナンガ・ランガ Vol. 60)",
        "cover": "https://telegra.ph/file/c59ee60c576af9da8caa5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4044"
    },
    {
        "IDcode": 4045,
        "title": "[あずせ] エロ本を捨てたらこの子が釣れちゃった!? 第7-24話",
        "cover": "https://telegra.ph/file/77bbbb08aa696cc3f3717.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4045"
    },
    {
        "IDcode": 4046,
        "title": "[跳馬遊鹿] 美乳露出マニア",
        "cover": "https://telegra.ph/file/2aae28343cc759c78446c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4046"
    },
    {
        "IDcode": 4047,
        "title": "[波止場 茜] 7時間目",
        "cover": "https://telegra.ph/file/6a164e5a309da678338b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4047"
    },
    {
        "IDcode": 4048,
        "title": "(C96) [アイスクリウム (vanilla)] アンドロイドのわたしに燃料補給してくださいっ5",
        "cover": "https://telegra.ph/file/37a46c69301488e9045a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4048"
    },
    {
        "IDcode": 4049,
        "title": "[前島龍] キラキラおとなレッスン",
        "cover": "https://telegra.ph/file/8bdc1feb374a59fe5a728.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4049"
    },
    {
        "IDcode": 4050,
        "title": "[Zerodo]常識改変(リゼ・ヘルエスタ)",
        "cover": "https://telegra.ph/file/a0a93bf46909784e6ba32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4050"
    },
    {
        "IDcode": 4051,
        "title": "[ドラムス] デュアルスワップ 前編 (WEEKLY快楽天 2021 No.29)",
        "cover": "https://telegra.ph/file/913eac3b17dc230be5f47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4051"
    },
    {
        "IDcode": 4052,
        "title": "[まんぷち (ねこでる)] Prison if...",
        "cover": "https://telegra.ph/file/25db97e2269e49d74d80f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4052"
    },
    {
        "IDcode": 4053,
        "title": "[40010試作型] プロトタイプロリータ",
        "cover": "https://telegra.ph/file/f5c07ff3240533f1d0d0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4053"
    },
    {
        "IDcode": 4054,
        "title": "[CANAPE] 그로자 만화 [Korean][GABA汉化组]",
        "cover": "https://telegra.ph/file/3b24754a1c942fbfa4d2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4054"
    },
    {
        "IDcode": 4055,
        "title": "[Rinhee] August 2018 - DSR Manga[GABA汉化组]",
        "cover": "https://telegra.ph/file/5a47755bb5eb6f1a2d8ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4055"
    },
    {
        "IDcode": 4056,
        "title": "[hellaP] 스카디라이코 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/fe1e9e191e3ea222e7094.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4056"
    },
    {
        "IDcode": 4057,
        "title": "(C94) [らぼまじ! (武田あらのぶ)] 自分にまるで興味がない師匠にコスプレSEXで女の悦びを刺し穿っていく性活 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/8af407fd64e3fd286582d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4057"
    },
    {
        "IDcode": 4058,
        "title": "[Pixiv] さとうちーふ (FGO部分汉化) (2881905)",
        "cover": "https://telegra.ph/file/44e3b2488c84f1cd4c52c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4058"
    },
    {
        "IDcode": 4059,
        "title": "[腿之助兵衛] ミソラ パイズリ (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/90ce1a177d4c471950805.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4059"
    },
    {
        "IDcode": 4060,
        "title": "[腿之助兵衛] ミソラ パイズリ (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/23c1573b97f3b67e9a366.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4060"
    },
    {
        "IDcode": 4061,
        "title": "[Deadflow] ソラのアルバイト (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/f71428d77d539e1984e96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4061"
    },
    {
        "IDcode": 4062,
        "title": "[タカスギコウ] 旅の恥はかき捨てず (コミック・マショウ 2020年12月号)",
        "cover": "https://telegra.ph/file/d83efc73a800bdb700114.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4062"
    },
    {
        "IDcode": 4063,
        "title": "[流一本] かなめDate #11 (COMIC 阿吽 2020年12月号)",
        "cover": "https://telegra.ph/file/dee090771cfd6570554e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4063"
    },
    {
        "IDcode": 4064,
        "title": "[牛乳のみお] 売れない漫画家、女子小学生になる",
        "cover": "https://telegra.ph/file/c86fe8cf1b89b78b0e72f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4064"
    },
    {
        "IDcode": 4065,
        "title": "[翁計画 (師走の翁)] 私をエッチの仲間に入れてください",
        "cover": "https://telegra.ph/file/4ce927578ab34dedd2828.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4065"
    },
    {
        "IDcode": 4066,
        "title": "(サンクリ2018 Autumn) [うなぎやさん (花宮なつか)] なんでもするから単位くださいっ!!",
        "cover": "https://telegra.ph/file/b71e76927792efd41deb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4066"
    },
    {
        "IDcode": 4067,
        "title": "[ヤシノキ (硬固ナッツ)] 転生玩具",
        "cover": "https://telegra.ph/file/005ca3e6f49a27ee287b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4067"
    },
    {
        "IDcode": 4068,
        "title": "[瀬奈陽太郎] 官能のクリスマスイヴ♡ ～1st Anniversary～ (COMIC ペンギンセレブ 2014年2月号)",
        "cover": "https://telegra.ph/file/2346e9f1dbf65c0bb87f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4068"
    },
    {
        "IDcode": 4069,
        "title": "[いづれ] 濡れています♡ひなみ先生 (コミックゼロス #90)",
        "cover": "https://telegra.ph/file/97045030c0fb75cf9f992.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4069"
    },
    {
        "IDcode": 4070,
        "title": "[エロマズン (まー九郎)] 早坂愛はHなメイド (かぐや様は告らせたい)",
        "cover": "https://telegra.ph/file/9730ba147f928626f6b0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4070"
    },
    {
        "IDcode": 4071,
        "title": "[小島紗] ご奉仕担当の鹿島です (艦隊これくしょん -艦これ-)  總集篇",
        "cover": "https://telegra.ph/file/d33ca9fa1af4d160986c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4071"
    },
    {
        "IDcode": 4072,
        "title": "[藍夜] バイトの時間 (COMIC 快楽天 2021年8月号)",
        "cover": "https://telegra.ph/file/97d906592bb36fd9d8aed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4072"
    },
    {
        "IDcode": 4073,
        "title": "[Scarlett Ann] MILF Airline [假日威龙陈开着塔迪斯转鲨萝莉控汉化组]",
        "cover": "https://telegra.ph/file/1b2c7294596d83bb4265f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4073"
    },
    {
        "IDcode": 4074,
        "title": "[あらくれ] 紅色の囁き 第一章 (COMIC 失楽天 2021年9月号)",
        "cover": "https://telegra.ph/file/74b8f0a9abda2162a93ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4074"
    },
    {
        "IDcode": 4075,
        "title": "[さざれいと (大仲いと)] 雌犬契約 快楽堕ちマコト (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/c02bc0d8934d1a147104a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4075"
    },
    {
        "IDcode": 4076,
        "title": "[urute] なまいき!いモ〜と乳イヤ〜 (なまめいろラプソディー)",
        "cover": "https://telegra.ph/file/ca4371e3ce130dd559e6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4076"
    },
    {
        "IDcode": 4077,
        "title": "[ぱんちらステーキ] お悩み解決!? 除霊セックス (誘惑ミルフィーユ)",
        "cover": "https://telegra.ph/file/52d65d9bb99eded50a9be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4077"
    },
    {
        "IDcode": 4078,
        "title": "(Cute Star Festivl 03) [転寝屋敷 (デコスケ)] 卯月と夜のビーチセックス (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/4cfe14f1f706208d17441.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4078"
    },
    {
        "IDcode": 4079,
        "title": "(C96) [K☆H (KH)] イケない!しだかれガールズ",
        "cover": "https://telegra.ph/file/f3a9ed524db360e33eaa0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4079"
    },
    {
        "IDcode": 4080,
        "title": "(C94) [空色まーち (成沢空)] アイドル輪姦AV 新田美波 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/8fee0a3b563254f9fa2cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4080"
    },
    {
        "IDcode": 4081,
        "title": "[いづれ] あてています♡ひなみ先生 (コミックゼロス #88)",
        "cover": "https://telegra.ph/file/6661cf6a44d700f415a6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4081"
    },
    {
        "IDcode": 4082,
        "title": "[おかだ亭 (岡田コウ)] わたしと兄の日常4",
        "cover": "https://telegra.ph/file/ba700e7e965f0727d60b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4082"
    },
    {
        "IDcode": 4083,
        "title": "[140km/h (赤城あさひと)] 不良っぽい彼女とダラダラおもちゃでもういっかい。",
        "cover": "https://telegra.ph/file/3b184c0bf18861c84ccb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4083"
    },
    {
        "IDcode": 4084,
        "title": "[煌野一人] シスター催眠凌辱 (シスター・クレア)",
        "cover": "https://telegra.ph/file/2bab3598572c2bfe9d768.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4084"
    },
    {
        "IDcode": 4085,
        "title": "[ひょころー] おとめぼれ",
        "cover": "https://telegra.ph/file/70b950abbf30904da0073.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4085"
    },
    {
        "IDcode": 4086,
        "title": "[クールナイツ] 花を売るエルフ",
        "cover": "https://telegra.ph/file/bb7eeccd3d048e81f0599.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4086"
    },
    {
        "IDcode": 4087,
        "title": "[歯車] Hide and Heat (COMIC アンスリウム 2021年8月号)",
        "cover": "https://telegra.ph/file/1a87a2a8105141376358c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4087"
    },
    {
        "IDcode": 4088,
        "title": "帝王级崩坏兽",
        "cover": "https://telegra.ph/file/5ff247a3dbce61652dd81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4088"
    },
    {
        "IDcode": 4089,
        "title": "[月国 (暖気)] 母子淫犯",
        "cover": "https://telegra.ph/file/280c67184e09f43d08d52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4089"
    },
    {
        "IDcode": 4090,
        "title": "[芬兰翼骑兵] 信赖值 砾 (Arknights)",
        "cover": "https://telegra.ph/file/2dc0ba715284e04161a70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4090"
    },
    {
        "IDcode": 4091,
        "title": "[久川ちん] スケベなエルフがあらわれた！ (コミック エグゼ 32)",
        "cover": "https://telegra.ph/file/7aa6170a43d41ecb32b9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4091"
    },
    {
        "IDcode": 4092,
        "title": "[牛タン定食への恋 (チョモラン)]呼び出したアルラウネに強めの矢印を向けられる召喚士くん…よかったね…  [FANBOX]",
        "cover": "https://telegra.ph/file/166215c51944efad5c940.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4092"
    },
    {
        "IDcode": 4093,
        "title": "[たねなしくりぼ] JK愛玩痴育日誌 3話",
        "cover": "https://telegra.ph/file/b2556716b302dba377f40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4093"
    },
    {
        "IDcode": 4094,
        "title": "[たねなしくりぼ] JK愛玩痴育日誌 4話",
        "cover": "https://telegra.ph/file/e5fbaf1b313e41d05f5bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4094"
    },
    {
        "IDcode": 4095,
        "title": "[ドラチェフ] モルガン陛下黒人とまぐわう❤ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/f09b807bbfb13e8e86df2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4095"
    },
    {
        "IDcode": 4096,
        "title": "[はぴねすみるく (おびゃー)] すずあかん (東方Project)",
        "cover": "https://telegra.ph/file/0bb439e142d77137da06b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4096"
    },
    {
        "IDcode": 4097,
        "title": "[拡張パーツ (遠藤良危)] スカサハ師匠に犯される本2 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/ac5f2673f073d8c274f50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4097"
    },
    {
        "IDcode": 4098,
        "title": "[あんこまん] バーヴァンシー、アストルフォと仲良くなる (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/6e9fe0092de17a888a56a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4098"
    },
    {
        "IDcode": 4099,
        "title": "[ソメジマ] 絶倫令嬢～獣のススメ～ (メス堕ち敗北少女)",
        "cover": "https://telegra.ph/file/7cd2de1fa9161cff9e722.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4099"
    },
    {
        "IDcode": 4100,
        "title": "[MUGO] 原神 九条裟罗 即堕 (Genshin Impact)  [Decensored]",
        "cover": "https://telegra.ph/file/ec912170391e7d46e7eda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=4100"
    }
];
