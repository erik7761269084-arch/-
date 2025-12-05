// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 3202,
        "title": "[Yanje] ブレマートン (アズールレーン)",
        "cover": "https://telegra.ph/file/23c45cd726de5919f05b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3202"
    },
    {
        "IDcode": 3203,
        "title": "[TSFのF (べってぃ、F)] 不真面目勇者の再教育 [Angiris Council漢化组]",
        "cover": "https://telegra.ph/file/451632b52cd5da88b086d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3203"
    },
    {
        "IDcode": 3204,
        "title": "[nohito] 夫を十数年探し続けた女",
        "cover": "https://telegra.ph/file/c66a682a2bb02ecaf97af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3204"
    },
    {
        "IDcode": 3205,
        "title": "[Type-G (イシガキタカシ)] V好き女子校生をイケボ絶頂オフパコでわからせる",
        "cover": "https://telegra.ph/file/0ab84ec83d8e146b8dbdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3205"
    },
    {
        "IDcode": 3206,
        "title": "[孝至] メスガキになってメスガキにわからされちゃったら (別冊コミックアンリアル メスガキわからせられ敗北射精! Vol.2)",
        "cover": "https://telegra.ph/file/06af8fbfa99430fc82b6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3206"
    },
    {
        "IDcode": 3207,
        "title": "[EsuEsu] 魔法少女vs淫魔生物 15",
        "cover": "https://telegra.ph/file/316607a66f12d24f0ab72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3207"
    },
    {
        "IDcode": 3208,
        "title": "[幻影ソーダ (柊ぽぷら、ファンタのコーラ味)] 口移しの簒奪者",
        "cover": "https://telegra.ph/file/a0a78faf2565a75cbc437.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3208"
    },
    {
        "IDcode": 3209,
        "title": "[猫乃ふぐり] ひみつのかくれんぼ (コミックトリガー vol.03)",
        "cover": "https://telegra.ph/file/9de04ffdc9f346c9784c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3209"
    },
    {
        "IDcode": 3210,
        "title": "[冬みかん] 女子校生が制服姿でえっちなことをしているようです!",
        "cover": "https://telegra.ph/file/b90fb2b580c17cc52b737.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3210"
    },
    {
        "IDcode": 3211,
        "title": "(歌姫庭園14) [春工房 (のりまき)] MILIERO (アイドルマスター ミリオンライブ!)",
        "cover": "https://telegra.ph/file/b78180c91e5da69dbbce3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3211"
    },
    {
        "IDcode": 3212,
        "title": "[ヴァリオス] 彼が好きな本当の穴 (コミックメガストアDEEP Vol.35)",
        "cover": "https://telegra.ph/file/df1b0bfaf588ad6400e08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3212"
    },
    {
        "IDcode": 3213,
        "title": "[田屋沼屋 (たぬま)] 今日から悪い子。",
        "cover": "https://telegra.ph/file/fef64fa6a0ff4096ba724.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3213"
    },
    {
        "IDcode": 3214,
        "title": "[シオマネキ] 夜のネカフェで... (アクションピザッツ 2022年2月号)",
        "cover": "https://telegra.ph/file/d10d6c297ae16588146c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3214"
    },
    {
        "IDcode": 3215,
        "title": "[平沢Zen] クリスマスモルガンさん＋ラフ",
        "cover": "https://telegra.ph/file/3458e219dde381cf21d38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3215"
    },
    {
        "IDcode": 3216,
        "title": "[あんこまん] ニキチッチ、ルルハワでエッチッチ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/d8567d534163b8357cbd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3216"
    },
    {
        "IDcode": 3217,
        "title": "[鳥海]「ジャンヌ・オルタ」ＮＴＲ",
        "cover": "https://telegra.ph/file/7219a6d315da4f0a9717b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3217"
    },
    {
        "IDcode": 3218,
        "title": "[EsuEsu] 魔法少女VS淫魔生物",
        "cover": "https://telegra.ph/file/3288ba0b135a322d877c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3218"
    },
    {
        "IDcode": 3219,
        "title": "[あべもりおか] 邪眼の催眠淫力で生徒会レズ女子達の処女を強制レ×プ!!",
        "cover": "https://telegra.ph/file/495558130eec415b7c933.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3219"
    },
    {
        "IDcode": 3220,
        "title": "[ED] 友達のままじゃ嫌だから",
        "cover": "https://telegra.ph/file/6172441f986efe3477c08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3220"
    },
    {
        "IDcode": 3221,
        "title": "[雪陽炎 (KANZUME)] 18歳JKライバーといちゃラブセックスしちゃうだけの本。 (瀬戸美夜子)",
        "cover": "https://telegra.ph/file/3485e0af57dd8a4e067a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3221"
    },
    {
        "IDcode": 3222,
        "title": "[明石六露] おませに飲ませて♡ (COMIC 快楽天 2022年2月号)",
        "cover": "https://telegra.ph/file/7a5b1fd64a9acf553166b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3222"
    },
    {
        "IDcode": 3223,
        "title": "[玉砂糖] ペット注意報 (COMIC BAVEL 2022年2月号)",
        "cover": "https://telegra.ph/file/d72eec4b4fcac600d87f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3223"
    },
    {
        "IDcode": 3224,
        "title": "[Deadflow] 大潮ちゃんぱいずりまとめ (アズールレーン)",
        "cover": "https://telegra.ph/file/e83551820b0cc0cf95f37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3224"
    },
    {
        "IDcode": 3225,
        "title": "[塩鯖っ (塩鯖ッ)]グラカノ ～姉友を犯してしまった。～",
        "cover": "https://telegra.ph/file/7f2613f20c006b7fdeea5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3225"
    },
    {
        "IDcode": 3226,
        "title": "[あまくち少女 (うまくち醤油)] 時雨ベッドウェッタ3 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/900ca4f72591aaa4f3962.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3226"
    },
    {
        "IDcode": 3227,
        "title": "[ほたてちゃん] 特訓好きな野球部ちゃん",
        "cover": "https://telegra.ph/file/427a905e545d88d62602e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3227"
    },
    {
        "IDcode": 3228,
        "title": "[黒岩瑪瑙] 熟妻発汗療法 (コミックメガストアDEEP Vol.36)",
        "cover": "https://telegra.ph/file/6751ddb51cb0c8e12b5d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3228"
    },
    {
        "IDcode": 3229,
        "title": "[ビルドテツ (二宮仁巳)] 矢矧もグラーフも正妻 前編 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/e4539bac99bf3871ca9ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3229"
    },
    {
        "IDcode": 3230,
        "title": "[ごむはち (ゴム)] Temptation (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/4b828f7a66135abbcbd8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3230"
    },
    {
        "IDcode": 3231,
        "title": "[GGGG]加賀さん",
        "cover": "https://telegra.ph/file/21b91e6ab5e72a85c3397.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3231"
    },
    {
        "IDcode": 3232,
        "title": "[史鬼匠人] TS☆Revolution＜第4話＞ (COMIC 夢幻転生 2021年12月号)",
        "cover": "https://telegra.ph/file/9bda6bd32c9575a404cef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3232"
    },
    {
        "IDcode": 3233,
        "title": "[妖滅堂 (ヤサカニ・アン)] となりの乳王さま六幕 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/62cc7b47dff44bbe6da0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3233"
    },
    {
        "IDcode": 3234,
        "title": "(C96) [DROP DEAD!! (水瀬修)] 幸福論でちゅっちゅっちゅ (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/130a18eee47bfa761e1a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3234"
    },
    {
        "IDcode": 3235,
        "title": "(C99) [こーひーめーかー (朝峰テル)] マスター専属奉仕倶楽部 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/0d53b0790533ef68b0ac8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3235"
    },
    {
        "IDcode": 3236,
        "title": "[毎日健康生活 (ヘルシーマン)] 7歳",
        "cover": "https://telegra.ph/file/8bbaeb440e41d3493f43e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3236"
    },
    {
        "IDcode": 3237,
        "title": "(C97) [カナリヤバいカナリヤ (まゃ～吾郎)] アルマがアレコレされるのを眺める本。7 (神羅万象)",
        "cover": "https://telegra.ph/file/13bb8fed218c4ebbb0e05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3237"
    },
    {
        "IDcode": 3238,
        "title": "[EBA] ラブホイール 第三話 (COMIC アンスリウム 2022年1月号)",
        "cover": "https://telegra.ph/file/a3da768f169b689d6181e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3238"
    },
    {
        "IDcode": 3239,
        "title": "[内藤春人] ギャル社長アキナの性活 (COMIC 夢幻転生 2018年12月号)",
        "cover": "https://telegra.ph/file/6f3320ed51cc599634112.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3239"
    },
    {
        "IDcode": 3240,
        "title": "[丸居まる] 貼ったらヤレちゃう!? えろシール～ワガママJKのアソコをたった1枚で奴隷に～ 1-23   (COMPLETE)",
        "cover": "https://telegra.ph/file/60adcd95e75de7d4a1aea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3240"
    },
    {
        "IDcode": 3241,
        "title": "[だんれんじ] 少女汚染 (WEEKLY快楽天 2021 No.26)",
        "cover": "https://telegra.ph/file/376a54d2f3558c1db03c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3241"
    },
    {
        "IDcode": 3242,
        "title": "[keso] 隣のマジメビッチ (COMIC オルガ vol.33)",
        "cover": "https://telegra.ph/file/683483921c8caa3abd401.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3242"
    },
    {
        "IDcode": 3243,
        "title": "[鉢本] ズッ友 (COMIC BAVEL 2022年2月号)",
        "cover": "https://telegra.ph/file/f8dc333485addaacdd4da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3243"
    },
    {
        "IDcode": 3244,
        "title": "[すばちきゅ! (すばち)] かわいそうはかわいい",
        "cover": "https://telegra.ph/file/25cb7a4c51faa01ad822b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3244"
    },
    {
        "IDcode": 3245,
        "title": "[史鬼匠人] TS☆Revolution＜第4話＞ (COMIC 夢幻転生 2021年12月号)",
        "cover": "https://telegra.ph/file/9bda6bd32c9575a404cef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3245"
    },
    {
        "IDcode": 3246,
        "title": "[宮本りず] 不運ギャル女子大生がまっすぐな彼に出逢ったら (コミックトリガー vol.02)",
        "cover": "https://telegra.ph/file/66f24e5a7d310e06604f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3246"
    },
    {
        "IDcode": 3247,
        "title": "[てつのおとしご (チロリアン)] 成美ちゃんががんばる本 (東方Project)",
        "cover": "https://telegra.ph/file/703901edebc167f6feb3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3247"
    },
    {
        "IDcode": 3248,
        "title": "[ふうたまろ] ボクのアダルトヴィーナス",
        "cover": "https://telegra.ph/file/7407406e2aaf55ef9f548.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3248"
    },
    {
        "IDcode": 3249,
        "title": "[ディメトロ] 魔力抽出工場 (コミックアンリアル 2020年8月号 Vol.86)",
        "cover": "https://telegra.ph/file/fdca319d9a4dab4f02a9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3249"
    },
    {
        "IDcode": 3250,
        "title": "[水無月三日] 貞セ子～ソレは男をダメにする最恐地縛霊～",
        "cover": "https://telegra.ph/file/3b039f378f5fe34ee71df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3250"
    },
    {
        "IDcode": 3251,
        "title": "[もふ屋 (明日葉もふ)] 純潔彼女が堕ちていくまで‐孕ませ編",
        "cover": "https://telegra.ph/file/8bb70e6035137096c355b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3251"
    },
    {
        "IDcode": 3252,
        "title": "[似せ] ママになんかなりたくない!メイカのはっぴぃ☆家族計画 (COMIC アオハ 2021冬)",
        "cover": "https://telegra.ph/file/5f993173c27ae4ef7e5d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3252"
    },
    {
        "IDcode": 3253,
        "title": "[りんごくらぶ]尊様編()",
        "cover": "https://telegra.ph/file/cb39c81abbe0d7a9579ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3253"
    },
    {
        "IDcode": 3254,
        "title": "(C86) [ケモノ絵描きの光速2 (シンドール)] IDOL",
        "cover": "https://telegra.ph/file/756fbdc002d6fe622b52a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3254"
    },
    {
        "IDcode": 3255,
        "title": "(C89) [ケモノ絵描きの光速2 (シンドール)] Dungeon♀",
        "cover": "https://telegra.ph/file/695b3e8eafc54254e99aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3255"
    },
    {
        "IDcode": 3256,
        "title": "[Ink Complex (智弘カイ)] 秘公開サブプラン",
        "cover": "https://telegra.ph/file/252d9663a26d98301d1a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3256"
    },
    {
        "IDcode": 3257,
        "title": "[トーティシェル (きんく)] 種付け孤児院",
        "cover": "https://telegra.ph/file/1b0a86d484f031fcafcdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3257"
    },
    {
        "IDcode": 3258,
        "title": "[スタジオN.BALL (針玉ヒロキ)] チョロい、上司/3",
        "cover": "https://telegra.ph/file/88afbcb047a31e8ef97b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3258"
    },
    {
        "IDcode": 3259,
        "title": "[こーひーめーかー (朝峰テル)] 紫式部搾精本。 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/b1cc4d2a2cc7a7f06359c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3259"
    },
    {
        "IDcode": 3260,
        "title": "[らま] 秘密のデコレイション (コミックゼロス #47)",
        "cover": "https://telegra.ph/file/7a9eaf9d5a4ac7ba5d6e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3260"
    },
    {
        "IDcode": 3261,
        "title": "[久我繭莉] わりゅいこ！しょこたん！ (コミックホットミルク 2021年7月号)",
        "cover": "https://telegra.ph/file/5c85114f9a6cc0a5eab7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3261"
    },
    {
        "IDcode": 3262,
        "title": "[よそ者] ギャル育成日記 (COMIC 阿吽 2021年12月号)",
        "cover": "https://telegra.ph/file/20642c9332a48e1a472eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3262"
    },
    {
        "IDcode": 3263,
        "title": "[難民ふぇすてぃばる (ぎヴちょこ)] 悪い家出娘にはおしおきだ! (東方Project)",
        "cover": "https://telegra.ph/file/f34672648ae3511a2d4c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3263"
    },
    {
        "IDcode": 3264,
        "title": "[上杉響士郎] 僕の小夏先輩と野外活動 (COMIC 天魔 2015年4月号)",
        "cover": "https://telegra.ph/file/48d7c76fe454615bd4b3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3264"
    },
    {
        "IDcode": 3265,
        "title": "[あるぷ] 善い出会い (COMIC BAVEL 2022年2月号)",
        "cover": "https://telegra.ph/file/2aff263a53d2723ea462a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3265"
    },
    {
        "IDcode": 3266,
        "title": "[春夏秋冬鈴] 気になるマシーン",
        "cover": "https://telegra.ph/file/f2118a0842e6e4ad55ebd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3266"
    },
    {
        "IDcode": 3267,
        "title": "[わとちっぷめろんぱん (わとす)] メリュジーヌといろいろえっち本 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/905196b237a89a8402f66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3267"
    },
    {
        "IDcode": 3268,
        "title": "(C99) [Part K (羊羽忍)] 寂しがり屋のメリュジーヌ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/84d264dd9fc3b874d5b11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3268"
    },
    {
        "IDcode": 3269,
        "title": "[kakao] シコスプラッシュ + 4Pリーフレット",
        "cover": "https://telegra.ph/file/331ba40959e000ac3a95c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3269"
    },
    {
        "IDcode": 3270,
        "title": "[鬼貴族] 僕はヒーローパラノイア 前編",
        "cover": "https://telegra.ph/file/1b30a1bf8eab5efe709c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3270"
    },
    {
        "IDcode": 3271,
        "title": "[こーひーめーかー (朝峰テル)] 紫式部搾精本。 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/455993ae7f7d1f0fdcd51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3271"
    },
    {
        "IDcode": 3272,
        "title": "[篠屋 (推乃)] 夜の避難先 III ふたりぐらし",
        "cover": "https://telegra.ph/file/2f84fbd0a48dfeae9c043.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3272"
    },
    {
        "IDcode": 3273,
        "title": "[篠屋 (推乃)] 夜の避難先 II",
        "cover": "https://telegra.ph/file/3429fa740382b0a4d6045.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3273"
    },
    {
        "IDcode": 3274,
        "title": "[篠屋 (推乃)] 夜の避難先",
        "cover": "https://telegra.ph/file/40758493464385863daae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3274"
    },
    {
        "IDcode": 3275,
        "title": "[闇に蠢く (どくろさん)] 娘の次はママオナホ・オナホ合宿＃2",
        "cover": "https://telegra.ph/file/8cb779450311d9b859cc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3275"
    },
    {
        "IDcode": 3276,
        "title": "(C99) [Number2 (たくじ)] パパ活パコリーヌ! (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/c797e3ded96f98dbc3928.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3276"
    },
    {
        "IDcode": 3277,
        "title": "[空巣] 真衣ちゃんしか勝たん♡ (COMICグーチョ vol.7)",
        "cover": "https://telegra.ph/file/cb88c2373169044d22778.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3277"
    },
    {
        "IDcode": 3278,
        "title": "[らふれしあ (キャンベル議長)] エロトラップダンジョン:HELL (東方Project)",
        "cover": "https://telegra.ph/file/e52358bf4dcd669799e7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3278"
    },
    {
        "IDcode": 3279,
        "title": "[エロマズン (まー九郎)] カナヲ無表情姦 (鬼滅の刃)",
        "cover": "https://telegra.ph/file/4dc1d5bedbad73240e233.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3279"
    },
    {
        "IDcode": 3280,
        "title": "[エロマズン (まー九郎)] 強制援交 ～黒ギャルJKをカネで抱きたい～",
        "cover": "https://telegra.ph/file/3030741711b482f2f385d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3280"
    },
    {
        "IDcode": 3281,
        "title": "[エロマズン (まー九郎)] 強制援交2～黒ギャルJKをカネで抱きたい～ (ゆるキャン△)",
        "cover": "https://telegra.ph/file/880350d66cc33534a67c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3281"
    },
    {
        "IDcode": 3282,
        "title": "[東鉄神] 迎春 (童貞弟とビッチ姉)",
        "cover": "https://telegra.ph/file/ace22e3cc8e91e6de6fdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3282"
    },
    {
        "IDcode": 3283,
        "title": "[senファンクラブ (sen)] 恵まれないペ〇ス救済に尽力する敬虔な”ぴっちり”シスター。その７",
        "cover": "https://telegra.ph/file/a7cf340d250d57f39ba96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3283"
    },
    {
        "IDcode": 3284,
        "title": "[七尾ゆきじ] 風紀委員のお仕事",
        "cover": "https://telegra.ph/file/792176240c38d95580478.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3284"
    },
    {
        "IDcode": 3285,
        "title": "[七尾ゆきじ] 双母相姦 第3話 (COMICグーチョ vol.7)",
        "cover": "https://telegra.ph/file/be01ad5dad9680baa8134.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3285"
    },
    {
        "IDcode": 3286,
        "title": "[こしの] 恋愛回路 (COMIC BAVEL 2021年6月号)",
        "cover": "https://telegra.ph/file/387710e82a239ecaa3c53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3286"
    },
    {
        "IDcode": 3287,
        "title": "[ぞんびと愉快な仲間たち (すーぱーぞんび)] お金が無くなったアルちゃんは気づいたら屈強な男たちに囲まれていた件。 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/3e13855c64c40c2bf465d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3287"
    },
    {
        "IDcode": 3288,
        "title": "[Fatalpulse (朝凪)] レディ、メイドに堕つ (アズールレーン)",
        "cover": "https://telegra.ph/file/340cc7313fa52bdac9250.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3288"
    },
    {
        "IDcode": 3289,
        "title": "[ポニ]何気ない修学旅行のと相関図[栗子汉化]",
        "cover": "https://telegra.ph/file/18befab883ca93d6847a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3289"
    },
    {
        "IDcode": 3290,
        "title": "[九調四季 (調四季)] 低級ザコ淫魔の触手が不快なので感覚遮断魔法を展開しましたわっ!!",
        "cover": "https://telegra.ph/file/cd2b43f4b33f9a10461fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3290"
    },
    {
        "IDcode": 3291,
        "title": "[スタジオN.BALL (針玉ヒロキ)] チョロい、上司/4",
        "cover": "https://telegra.ph/file/b994fff2d48e54b227f48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3291"
    },
    {
        "IDcode": 3292,
        "title": "(C91) [8cm (8000)] 清霜のいちばん長い夜 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/11635e6d46c1a89b56955.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3292"
    },
    {
        "IDcode": 3293,
        "title": "(C94) [マシュマロ風船 (かゆみ止め)] ベルファストママの射精管理 (アズールレーン)",
        "cover": "https://telegra.ph/file/85e245b56f6ba4e06f3c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3293"
    },
    {
        "IDcode": 3294,
        "title": "[イシダヤ] 悪母～悪いお母さんは好きですか…?～",
        "cover": "https://telegra.ph/file/a328492d2abe6cea20c7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3294"
    },
    {
        "IDcode": 3295,
        "title": "[篠塚裕志] 初めてのヒトヅマ  [DL]",
        "cover": "https://telegra.ph/file/160ecf9325348a207a9a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3295"
    },
    {
        "IDcode": 3296,
        "title": "[MEAN MACHINE (三船誠二郎)] 爆乳人妻金髪外国人女教師が村の因習で褐色ショタの筆おろしをする話",
        "cover": "https://telegra.ph/file/d580707f32c2ffba0e4ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3296"
    },
    {
        "IDcode": 3297,
        "title": "(C99) [OrangeMaru (YD)] 妄想ダイアリー (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/5bc5ee1c68cc23d5cc895.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3297"
    },
    {
        "IDcode": 3298,
        "title": "[ソーダ畑 (無敵ソーダ)] クール系お姉さんには誰にも言えない悩みがある。",
        "cover": "https://telegra.ph/file/eebeaea177d098658c68b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3298"
    },
    {
        "IDcode": 3299,
        "title": "[犬上いの字] Bitter Sweet Teens",
        "cover": "https://telegra.ph/file/0c70f19a83e794e8529fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3299"
    },
    {
        "IDcode": 3300,
        "title": "[にらみっ子工場] 親友じゃなくてメスでした",
        "cover": "https://telegra.ph/file/3c4b18905409a92454073.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3300"
    },
    {
        "IDcode": 3301,
        "title": "[Fatalpulse (朝凪)] レディ、メイドに堕つ (アズールレーン)",
        "cover": "https://telegra.ph/file/1c9b4ff40c46f08a0fad6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3301"
    }
];
