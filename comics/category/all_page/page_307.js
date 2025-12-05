// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 3604,
        "title": "[TSFのF (栗餅ちづる、星名めいと)] 復讐の果てに～御曹司が女体化されてバッドエンド～",
        "cover": "https://telegra.ph/file/7c4f305657365e37d66db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3604"
    },
    {
        "IDcode": 3605,
        "title": "[CHARAN PORAN (猫乃またたび)] 退魔忍アリスII -退魔忍文香 淫魔の覚醒め- (アイドルマスターシンデレラガールズ)",
        "cover": "https://telegra.ph/file/9fc54de166e4abd1bd406.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3605"
    },
    {
        "IDcode": 3606,
        "title": "[Yanje] Ahri (League of Legends)",
        "cover": "https://telegra.ph/file/0220d42f4a7bff5dcd7cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3606"
    },
    {
        "IDcode": 3607,
        "title": "[Aikunn8] 姉ちゃんと勉強しよ! (コミックゼロス #94)",
        "cover": "https://telegra.ph/file/66b3f6baa8cfa03dfcd7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3607"
    },
    {
        "IDcode": 3608,
        "title": "[A極振り (Sian)] お出かけしたのはHなギャルお姉ちゃん達との海でした",
        "cover": "https://telegra.ph/file/46d0c17c218144585eee5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3608"
    },
    {
        "IDcode": 3609,
        "title": "[morrow] 六十路母と始めるめちゃシコ団地生活。",
        "cover": "https://telegra.ph/file/bf9f25f265c18cfbb8c60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3609"
    },
    {
        "IDcode": 3610,
        "title": "(C99) [きのこのみ (konomi)] ギャルゆいなちゃんとえっち3 -片思いの彼女がボクに赤面!?-",
        "cover": "https://telegra.ph/file/fc0c8619815fc13c7929b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3610"
    },
    {
        "IDcode": 3611,
        "title": "[川上真樹] フタナリのエルフ",
        "cover": "https://telegra.ph/file/3849d49010c0ce5b9a324.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3611"
    },
    {
        "IDcode": 3612,
        "title": "[れぐでく] ケモミミの占術師  ～踊り子来襲～ (異世快楽天 Vol.5)",
        "cover": "https://telegra.ph/file/1f886e83daaf4cafe91e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3612"
    },
    {
        "IDcode": 3613,
        "title": "[黒越陽] らぶちゅーばー (らぶぱい 私のおっぱい好きですか?)",
        "cover": "https://telegra.ph/file/188b8e6d4020809e57c7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3613"
    },
    {
        "IDcode": 3614,
        "title": "[三崎 (紅村かる)] ぼくだけがセックスできない家・派 芽衣ビフォー朝陽アフター",
        "cover": "https://telegra.ph/file/1aa969640511ce9e9e184.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3614"
    },
    {
        "IDcode": 3615,
        "title": "[RK-2] 友達のママが僕のデカチンでイキまくった話",
        "cover": "https://telegra.ph/file/194c5463c4f28d0d0288a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3615"
    },
    {
        "IDcode": 3616,
        "title": "(この声届け、月までも 五) [く～へんしろっぷ (にのパル)] トークキャラクターおくちオンリーぶっく (VOICEROID)",
        "cover": "https://telegra.ph/file/be92798322f78d52ee563.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3616"
    },
    {
        "IDcode": 3617,
        "title": "(ふたけっと15) [眞嶋堂 (まとう)] 姫騎士様は視られたい!",
        "cover": "https://telegra.ph/file/d39d2701cf3b4afee8afe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3617"
    },
    {
        "IDcode": 3618,
        "title": "(C99) [さとうや (さとうちーふ)] えちえち交尾領域アヴァロンルフェ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/bf005540a97d269205463.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3618"
    },
    {
        "IDcode": 3619,
        "title": "[瓦屋工房 (瓦爺)] スイッチオフ (シスター・クレア)",
        "cover": "https://telegra.ph/file/3d309c6d430492108a85b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3619"
    },
    {
        "IDcode": 3620,
        "title": "[オヤマ!菊之助VS (ヘンリー・ヤック・ヨンセン3世)] 誰ともペアになれなかったのでやさしい先生とセックス実習をしました。",
        "cover": "https://telegra.ph/file/6c7c69906a85c62fa5211.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3620"
    },
    {
        "IDcode": 3621,
        "title": "(COMIC1☆15) [70年式悠久機関 (おはぎさん)] シノワドール",
        "cover": "https://telegra.ph/file/39556fdb10f4870883851.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3621"
    },
    {
        "IDcode": 3622,
        "title": "(C99) [Yokohama Junky (魔狩十織)] ソロハンターの生態WORLD7 (モンスターハンター)",
        "cover": "https://telegra.ph/file/8ddff1bf47ccff5712243.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3622"
    },
    {
        "IDcode": 3623,
        "title": "[でらうえあ] となりのサキュバスちゃん 外伝 (COMIC BAVEL 2022年2月号)",
        "cover": "https://telegra.ph/file/8c0f643dec644bba4b198.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3623"
    },
    {
        "IDcode": 3624,
        "title": "(C92) [CHARAN PORAN (猫乃またたび)] P.P.P Pくんとパコパコ パーティー (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/b063a40282baac66b2c54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3624"
    },
    {
        "IDcode": 3625,
        "title": "[Croriin]サキュちゃれ！(異世快楽天 Vol.5)",
        "cover": "https://telegra.ph/file/4221ddaf9c12b0fd63fdd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3625"
    },
    {
        "IDcode": 3626,
        "title": "[だんれんじ] 少女汚染 2",
        "cover": "https://telegra.ph/file/376a54d2f3558c1db03c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3626"
    },
    {
        "IDcode": 3627,
        "title": "[VYCMa] 蒙德温泉节",
        "cover": "https://telegra.ph/file/e4cf8d64c39095ce0d1d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3627"
    },
    {
        "IDcode": 3628,
        "title": "[舞大夢] マンチラしてるJKを発見したので学園内で調教してみた 第1-29話",
        "cover": "https://telegra.ph/file/58c688df60f8e585346d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3628"
    },
    {
        "IDcode": 3629,
        "title": "[吉田悟郎商會 (吉田悟郎)] オレのいも☆おと",
        "cover": "https://telegra.ph/file/a55314bbb311e9572b677.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3629"
    },
    {
        "IDcode": 3630,
        "title": "[Hamao] straying (COMIC 快楽天 2021年11月号)",
        "cover": "https://telegra.ph/file/a73fcfcd6c9462a65699f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3630"
    },
    {
        "IDcode": 3631,
        "title": "[September (三九)] 僕は妻が寝取られ何度もイかされる姿を見続けた。3",
        "cover": "https://telegra.ph/file/70952f1b9ee38aa6cbb0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3631"
    },
    {
        "IDcode": 3632,
        "title": "[ぷちめいぷる (ひさぎ)] 後輩男子に寝取られSEX 3",
        "cover": "https://telegra.ph/file/ed7c6b50b9cf7dfa8599b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3632"
    },
    {
        "IDcode": 3633,
        "title": "[DLメイト (ももしか藤子)] 乳牛",
        "cover": "https://telegra.ph/file/f963472ca16199515bc1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3633"
    },
    {
        "IDcode": 3634,
        "title": "[おつきみ工房 (秋空もみぢ)] JKVアイドル秘密の実況プレイ♥",
        "cover": "https://telegra.ph/file/79a834ecc709ce1bbba2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3634"
    },
    {
        "IDcode": 3635,
        "title": "[きのこのみ (konomi)] ニャンコロジ総集編",
        "cover": "https://telegra.ph/file/f359877876b03068a3ef8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3635"
    },
    {
        "IDcode": 3636,
        "title": "(C99) [忘らるる手紙 (びんせん)] 例えばこんな奈緒シアター (アイドルマスターミリオンライブ!)",
        "cover": "https://telegra.ph/file/08ba0b8d397278273d327.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3636"
    },
    {
        "IDcode": 3637,
        "title": "[こらんだむ] カーマVSカーマ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/9fba56358acd049313f54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3637"
    },
    {
        "IDcode": 3638,
        "title": "(C99) [デジアンコ (あんこまん)] 竿役アストルフォきゅんが女英霊とエッチしまくる本 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/d75d851294a71d7437461.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3638"
    },
    {
        "IDcode": 3639,
        "title": "(C99) [さいかわようじょ (にゃまる)] ネズミミ取られてビカラがXXXしちゃう本 (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/2779d009b2fd87475c0e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3639"
    },
    {
        "IDcode": 3640,
        "title": "[アイアンカー] 甘雨ちゃんのお祭り交尾 (原神)",
        "cover": "https://telegra.ph/file/75e43f3a222f0d9fd8f54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3640"
    },
    {
        "IDcode": 3641,
        "title": "[ポリウレたん] 世界TSF日和 (COMIC 夢幻転生 2022年1月号)",
        "cover": "https://telegra.ph/file/45d3391017266d8199c92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3641"
    },
    {
        "IDcode": 3642,
        "title": "[ぴかお] UP! UP! カリキュラム (コミックゼロス #82)",
        "cover": "https://telegra.ph/file/b497f44b48f5f11e1664e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3642"
    },
    {
        "IDcode": 3643,
        "title": "[毒とんこつ肉ドレイ (たのひと)] 究極の皮マンコを探せ!～青い果実の皮を剝いたら～",
        "cover": "https://telegra.ph/file/e26297fc71f597944e2d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3643"
    },
    {
        "IDcode": 3644,
        "title": "[おきょう] 二人呑み咄 (COMIC アンスリウム 2021年12月号)",
        "cover": "https://telegra.ph/file/c07ae64ece72dc1d8bf41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3644"
    },
    {
        "IDcode": 3645,
        "title": "[aki99] 欲求不満 (1-4) (Fate/kaleid liner プリズマ☆イリヤ)",
        "cover": "https://telegra.ph/file/83d6b0b3201c838ce9821.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3645"
    },
    {
        "IDcode": 3646,
        "title": "[デンパツーシン (ゆま)] バニー千雪にいっぱいちゅきして (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/4c85b5ce485fb61a03bb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3646"
    },
    {
        "IDcode": 3647,
        "title": "(Ricky) 西狩獲麟（甘雨）",
        "cover": "https://telegra.ph/file/4ab2983edb8aff1042a92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3647"
    },
    {
        "IDcode": 3648,
        "title": "[江戸川浪漫] 嘘つきポニーテール",
        "cover": "https://telegra.ph/file/2e27ad1ec775e9c570267.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3648"
    },
    {
        "IDcode": 3649,
        "title": "[Bonsketch (ぼんすけ)] そこは魅惑のスカトロプレイヘルス 指名キャスト エリナ嬢",
        "cover": "https://telegra.ph/file/960158620fe513187fe59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3649"
    },
    {
        "IDcode": 3650,
        "title": "(C99) [ジャックとニコルソン (のりパチ)] 新型ウイルスにはワクチン接種した母乳が抗体を持つことが実証されたから夏帆ちゃんが授乳してまわる本 (ブレンド・S)",
        "cover": "https://telegra.ph/file/618751a8672b23521e906.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3650"
    },
    {
        "IDcode": 3651,
        "title": "(氷馬) 月見 彩 【Neko汉化】",
        "cover": "https://telegra.ph/file/01f757bbcf6c66cc98e45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3651"
    },
    {
        "IDcode": 3652,
        "title": "[空維深夜] 約束の先の快感 (コミックリブート Vol.30)",
        "cover": "https://telegra.ph/file/8cf328409c7228f8cefd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3652"
    },
    {
        "IDcode": 3653,
        "title": "[Remnants (シリ蔵)] 性・愛・食・欲 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/f010fb7d4c9c1b416f5bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3653"
    },
    {
        "IDcode": 3654,
        "title": "[サジタリウス (ショーン)] アナル顔騎七番勝負 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/6b622c448d0ce523ac8c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3654"
    },
    {
        "IDcode": 3655,
        "title": "[にーきゅー (る～く] 競泳水着澪ちゃん&澪ちゃん日焼け跡水着",
        "cover": "https://telegra.ph/file/8b84617474db65a04daa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3655"
    },
    {
        "IDcode": 3656,
        "title": "[きい] -不等号- (群青ノイズ)",
        "cover": "https://telegra.ph/file/b88924562cc3a5364551b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3656"
    },
    {
        "IDcode": 3657,
        "title": "[ふらいでぃっしゅ (じゃっこ)] 拾った捨てエルフ達に溺愛されて敷かれるまでの話",
        "cover": "https://telegra.ph/file/b7303fbb394505d0ee6f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3657"
    },
    {
        "IDcode": 3658,
        "title": "[サイトウヤフ] 泥棒猫はカノジョの始まり",
        "cover": "https://telegra.ph/file/e9b5f3d28593cb05c2e07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3658"
    },
    {
        "IDcode": 3659,
        "title": "[ななお] Fleur #5 (コミック エグゼ 34)",
        "cover": "https://telegra.ph/file/b5fe8d58c07f4d4a042ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3659"
    },
    {
        "IDcode": 3660,
        "title": "[パラダイス・ロスト (あへ)] 優しいママは僕のモノ!～催眠巨乳母争奪戦～",
        "cover": "https://telegra.ph/file/05fdddda9728619e5bfa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3660"
    },
    {
        "IDcode": 3661,
        "title": "[毛玉牛乳 (玉之けだま)] 全部君のせいだ。III",
        "cover": "https://telegra.ph/file/608859d37a6422c4709c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3661"
    },
    {
        "IDcode": 3662,
        "title": "[Beなんとか] ビッチ英才教育 (COMIC LO 2015年5月号)",
        "cover": "https://telegra.ph/file/a9dc7b3c4983e400d7ef0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3662"
    },
    {
        "IDcode": 3663,
        "title": "[血まみれ屋敷 (がちょん次郎)] ゲーム友達の女の子とヤる話",
        "cover": "https://telegra.ph/file/122a663655cc342fecada.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3663"
    },
    {
        "IDcode": 3664,
        "title": "Houjou no Reizoku Elf 1-6",
        "cover": "https://telegra.ph/file/7093326a269e4eb6e294c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3664"
    },
    {
        "IDcode": 3665,
        "title": "(caisan)刀剑神域系列",
        "cover": "https://telegra.ph/file/7d55df06784be2e78aa1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3665"
    },
    {
        "IDcode": 3666,
        "title": "[Darkmaya] クロニー新婚三択お風呂篇 (オーロ・クロニー)",
        "cover": "https://telegra.ph/file/53d8d0a2102f4edc47016.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3666"
    },
    {
        "IDcode": 3667,
        "title": "(C86) [裏方本舗 (SINK)] ウラバンビvol.49 母さんは僕が知らない内にオマ○コにドハマりしてました。 (ガンダムビルドファイターズ)",
        "cover": "https://telegra.ph/file/eb7ca8f9753ccd68719f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3667"
    },
    {
        "IDcode": 3668,
        "title": "[イシダヤ] ミセスクラブ（Chinese）",
        "cover": "https://telegra.ph/file/4d2078578f73d00dd276d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3668"
    },
    {
        "IDcode": 3669,
        "title": "[居酒屋よっちゃん (江ノ島行き)] 褐色戦士汗臭奮闘記",
        "cover": "https://telegra.ph/file/2b616ed77894c872fcbaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3669"
    },
    {
        "IDcode": 3670,
        "title": "[琴義弓介] ワケアリ熟女㊙チア性交 (ヤリスギ肉熟女)",
        "cover": "https://telegra.ph/file/fe9162af29fdf54d33710.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3670"
    },
    {
        "IDcode": 3671,
        "title": "(COMIC1☆10) [Radical Dream (竜胆、黒井弘騎)] 魔胎都市 五",
        "cover": "https://telegra.ph/file/605d491c2442328bfae02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3671"
    },
    {
        "IDcode": 3672,
        "title": "[ALBANOTE (alba)] メルティメイド (ボンバーガール)",
        "cover": "https://telegra.ph/file/16f63c4ed738a83b2a777.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3672"
    },
    {
        "IDcode": 3673,
        "title": "[もやしばーすと] 囚われて犯されて (サイベリアマニアックス 強制肉便器ラプソディ Vol.6)",
        "cover": "https://telegra.ph/file/139bac968888c0bc5cb4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3673"
    },
    {
        "IDcode": 3674,
        "title": "[ntrman] Short Comic #16  [superofla个人瞎翻]",
        "cover": "https://telegra.ph/file/8d50cf021b95b8158b829.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3674"
    },
    {
        "IDcode": 3675,
        "title": "[小島紗] 敗北した釘崎さん (呪術廻戦)",
        "cover": "https://telegra.ph/file/dda96d902311b5436b368.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3675"
    },
    {
        "IDcode": 3676,
        "title": "[蟑+蚊个人汉化][よしよし屋] じゅんクンと友達のママえちえち大作戦",
        "cover": "https://telegra.ph/file/b690c43228f62a30f7bb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3676"
    },
    {
        "IDcode": 3677,
        "title": "[蟑+蚊个人汉化][よしよし屋] ハルくんと雪奈センパイ",
        "cover": "https://telegra.ph/file/e2e95b6348c4d1386a058.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3677"
    },
    {
        "IDcode": 3678,
        "title": "[青ばなな] 爆乳垂れ乳虞美人パイセン母乳噴射乳首アクメ",
        "cover": "https://telegra.ph/file/46feaddc01565b4aec844.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3678"
    },
    {
        "IDcode": 3679,
        "title": "(C99) [FavoriteTrick! (てるうぃ)] アビーちゃんにオナホ見つかる本 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/2d4b9ecda80417c221651.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3679"
    },
    {
        "IDcode": 3680,
        "title": "[ZÊz_ze] FaFa0以奶换血惨遭背刺 (明日方舟)",
        "cover": "https://telegra.ph/file/9549fbb38ee32fc40cd9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3680"
    },
    {
        "IDcode": 3681,
        "title": "[牛乳茶屋 (牛乳左衛門)]  紫式部 vs クソガキ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/45c7872e4ca4be7376410.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3681"
    },
    {
        "IDcode": 3682,
        "title": "[るび様を崇める会 (るび様)] 捕獲調教! ナマイキ幼馴染は地獄行き!!",
        "cover": "https://telegra.ph/file/f8be2bea03f75d3bda065.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3682"
    },
    {
        "IDcode": 3683,
        "title": "(C95) [squeezecandyheaven (いちはや)] 妹はひきこもりのおまけ+ロリとギターのおまけ (少女のD～squeezecandyheaven総集編～)",
        "cover": "https://telegra.ph/file/61d971ce2481b28f0ea52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3683"
    },
    {
        "IDcode": 3684,
        "title": "[かずたろ] キャルちゃんに見られながら (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/0888997979306ec7e8c53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3684"
    },
    {
        "IDcode": 3685,
        "title": "[軽部ぐり] 本日のがちんこ対決! さーびすえでゅけいしょん編 (コミックゼロス #94)",
        "cover": "https://telegra.ph/file/aafbb7afc8998577d8497.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3685"
    },
    {
        "IDcode": 3686,
        "title": "[東出イロドリ] カテキョのお勉強 (COMIC 失楽天 2022年1月号)",
        "cover": "https://telegra.ph/file/805890a3c08f161e10ee9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3686"
    },
    {
        "IDcode": 3687,
        "title": "(C76) [70年式悠久機関 (袁藤沖人)] 湯に錢",
        "cover": "https://telegra.ph/file/5205bd5e9218ee74e4aa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3687"
    },
    {
        "IDcode": 3688,
        "title": "(C93) [きつね屋 (リーフィ)] 狐楽3 (アズールレーン)",
        "cover": "https://telegra.ph/file/5e54dbb652cda017f7c02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3688"
    },
    {
        "IDcode": 3689,
        "title": "(COMIC1☆15) [きつね屋 (リーフィ)] 狐楽6 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/9e591755171ffb3843897.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3689"
    },
    {
        "IDcode": 3690,
        "title": "[Fantia/Twitter] Fumihiko (ふみひこ) (until 16/01/2022)  [進行中]",
        "cover": "https://telegra.ph/file/2ee2cb8e26aae910a0d70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3690"
    },
    {
        "IDcode": 3691,
        "title": "[140km/h (赤城あさひと)] 不良っぽい彼女とダラダラコスプレっくす。",
        "cover": "https://telegra.ph/file/288d3f51c36ae97d092b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3691"
    },
    {
        "IDcode": 3692,
        "title": "[くろこ屋 (式神くろ子)] 全員!あの世イキ (原神)",
        "cover": "https://telegra.ph/file/f6a2cc4c4f38522fb77bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3692"
    },
    {
        "IDcode": 3693,
        "title": "[Zijou] ライバーを指名できるふしぎなお店 (ニュイ・ソシエール)",
        "cover": "https://telegra.ph/file/54bc5958d1de465512da5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3693"
    },
    {
        "IDcode": 3694,
        "title": "[ロリの宴 (四万十川)] ギラギラのビーチ (白銀ノエル)",
        "cover": "https://telegra.ph/file/1a144f9f0f3da975f3193.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3694"
    },
    {
        "IDcode": 3695,
        "title": "(C99) [Rico-ba (Rico)] 義妹ちゃんは甘えんぼ",
        "cover": "https://telegra.ph/file/c92f340b9c2f6bd1a0259.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3695"
    },
    {
        "IDcode": 3696,
        "title": "[あくま] おじさま専用系女子 (COMIC BAVEL 2018年6月号)",
        "cover": "https://telegra.ph/file/2c5a24c910a87187fa702.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3696"
    },
    {
        "IDcode": 3697,
        "title": "[utu] おあいこ (COMIC 失楽天 2022年1月号)",
        "cover": "https://telegra.ph/file/2cabc2a07763496a5f8a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3697"
    },
    {
        "IDcode": 3698,
        "title": "[コントレンジ]魔王殴ったら記憶消えたので妻にした話",
        "cover": "https://telegra.ph/file/dbbe3a09776694eac6358.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3698"
    },
    {
        "IDcode": 3699,
        "title": "[三船誠二郎] 续篇+后日谈 巨乳精灵产子契约 [中国翻译]",
        "cover": "https://telegra.ph/file/da41efc49411ecf5a51a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3699"
    },
    {
        "IDcode": 3700,
        "title": "[三船誠二郎] エルフハーレムアカデミア (エルフハーレム物語)",
        "cover": "https://telegra.ph/file/fb2ce7337643fea4ca567.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3700"
    },
    {
        "IDcode": 3701,
        "title": "[勾配亭] 巨チンに寝取られたビッチ妻",
        "cover": "https://telegra.ph/file/2eca410aaf4b7e1342573.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3701"
    },
    {
        "IDcode": 3702,
        "title": "(C99) [カミナリネコ (えーたろー)] 冴えた彼女の睡姦堕ち (冴えない彼女の育てかた)",
        "cover": "https://telegra.ph/file/0ef4891e32d5b85ed97a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3702"
    },
    {
        "IDcode": 3703,
        "title": "[チームサザンドラ (後藤マサキの野望)] 何やこのVちゅーばぁ!?2 ～私は大物Youtuberの性奴隷ですぺこぉ!～ (兎田ぺこら)",
        "cover": "https://telegra.ph/file/c01e6870991cf37a6a53a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3703"
    }
];
