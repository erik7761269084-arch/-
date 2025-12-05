// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 3704,
        "title": "[三船誠二郎] 三代エルフハーレム温泉 (エルフハーレム物語)",
        "cover": "https://telegra.ph/file/9ee8bb77dca73b2abd7da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3704"
    },
    {
        "IDcode": 3705,
        "title": "[あとりえスターズ (有都あらゆる)] アークナイ蒸 (アークナイツ)",
        "cover": "https://telegra.ph/file/41f7f416403a29d697314.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3705"
    },
    {
        "IDcode": 3706,
        "title": "[Banssee] ak-15 & ak-12  (少女前線)",
        "cover": "https://telegra.ph/file/842da3cad6bb55f3f2e85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3706"
    },
    {
        "IDcode": 3707,
        "title": "[みずゆき]甘蜜",
        "cover": "https://telegra.ph/file/793ac8ab5790088cb753b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3707"
    },
    {
        "IDcode": 3708,
        "title": "(C99) [ケンソウオガワ (フクダーダ)] ハニーブロンド ～さくら～",
        "cover": "https://telegra.ph/file/aed2942d86fd505c123d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3708"
    },
    {
        "IDcode": 3709,
        "title": "[よしよし屋] じゅんクンと友達のママえちえち大作戦 [中国翻译]",
        "cover": "https://telegra.ph/file/b690c43228f62a30f7bb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3709"
    },
    {
        "IDcode": 3710,
        "title": "[よしよし屋] ハルくんと雪奈センパイ[中国翻译]",
        "cover": "https://telegra.ph/file/e2e95b6348c4d1386a058.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3710"
    },
    {
        "IDcode": 3711,
        "title": "[郁村 (郁)] 奥さんとの互恵関係",
        "cover": "https://telegra.ph/file/9a4492f1cd6a1f42f0a92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3711"
    },
    {
        "IDcode": 3712,
        "title": "[Dikk0] 差分４６枚！白上Fbkちゃんといっぱい交尾しまくるCG集! (白上フブキ)",
        "cover": "https://telegra.ph/file/11e789a0f94d41ddae098.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3712"
    },
    {
        "IDcode": 3713,
        "title": "(C99) [はだいろクレヨン (羽田暮)] ラブハメ♡リゾート (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/4ebafd308022c13c4d8a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3713"
    },
    {
        "IDcode": 3714,
        "title": "[ごさいじ] 同人作家は売れっ子作家の夢を見るか (COMIC アンスリウム 2022年1月号)",
        "cover": "https://telegra.ph/file/cefda889a916ed35b2fc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3714"
    },
    {
        "IDcode": 3715,
        "title": "[ctrlz77] 大鳳 (アズールレーン)",
        "cover": "https://telegra.ph/file/9e6bffa47dbd361e64bf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3715"
    },
    {
        "IDcode": 3716,
        "title": "[seidenki] 性徒会長の括約 (キルラキル)",
        "cover": "https://telegra.ph/file/5127d72affcf512ed60a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3716"
    },
    {
        "IDcode": 3717,
        "title": "[秒殺狸団 (佐伯達也)] B0-Girls (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/55f42442c7ae21edde9b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3717"
    },
    {
        "IDcode": 3718,
        "title": "[吉村竜巻] いんばいと 第3話 (COMIC 真激 2022年2月号)",
        "cover": "https://telegra.ph/file/5b29260a6c0dc304c1fd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3718"
    },
    {
        "IDcode": 3719,
        "title": "[ctrlz77] 雷電 (原神)",
        "cover": "https://telegra.ph/file/523b8d4f159b87123fe73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3719"
    },
    {
        "IDcode": 3720,
        "title": "[CHARAN PORAN (猫乃またたび)] みりあのHなお仕事 がんばるも〜ん♥♥ (アイドルマスターシンデレラガールズ)",
        "cover": "https://telegra.ph/file/70157ab75107d6c751452.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3720"
    },
    {
        "IDcode": 3721,
        "title": "[ctrlz77] 九条 (原神)",
        "cover": "https://telegra.ph/file/f3badb22c694191d9a768.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3721"
    },
    {
        "IDcode": 3722,
        "title": "[ctrlz77] 胡桃 (原神)",
        "cover": "https://telegra.ph/file/87882df54aa52d3b3962b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3722"
    },
    {
        "IDcode": 3723,
        "title": "[武藤まと] 齢200ちゃいお狐ちゃんとおしどり夫婦生活 第4話 (永遠娘 朧絵巻 拾)",
        "cover": "https://telegra.ph/file/719bb922792719943e85a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3723"
    },
    {
        "IDcode": 3724,
        "title": "[猫乃またたび] デレマス対魔忍リカ・ミリア + 対魔忍ビートシューター",
        "cover": "https://telegra.ph/file/bcc31d660a8aad2cd7cd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3724"
    },
    {
        "IDcode": 3725,
        "title": "[木鈴亭 (木鈴カケル、コウリ)] ワンナイト♥レッスン (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/5bf8444032cd6cfde33aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3725"
    },
    {
        "IDcode": 3726,
        "title": "[SANDWORKS (砂)] 美嘉研究っしょ (アイドルマスターシンデレラガールズ)",
        "cover": "https://telegra.ph/file/34e6d129f5dc9d9536a09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3726"
    },
    {
        "IDcode": 3727,
        "title": "[morrow] 母ちゃん喰い",
        "cover": "https://telegra.ph/file/656c698916930cee4d345.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3727"
    },
    {
        "IDcode": 3728,
        "title": "[東京プロミネンストマト] 帝忍グレイプニルー帝国軍第七特殊作戦部隊ー",
        "cover": "https://telegra.ph/file/3449bb414fbd86ba78749.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3728"
    },
    {
        "IDcode": 3729,
        "title": "[く～へんしろっぷ (にのパル)] えっちな花ちゃん本 (VOICEROID)",
        "cover": "https://telegra.ph/file/d12f1ab219a3b91c17b4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3729"
    },
    {
        "IDcode": 3730,
        "title": "[Little Note (鈴梨れい)] お兄ちゃんだけのえっちな妹ちゃんっ!!",
        "cover": "https://telegra.ph/file/e103b9623603a3048a523.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3730"
    },
    {
        "IDcode": 3731,
        "title": "[瓦爺] 友達ができた (COMIC 快楽天 2021年7月号)",
        "cover": "https://telegra.ph/file/5f0367b33fb3317632308.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3731"
    },
    {
        "IDcode": 3732,
        "title": "(C99) [M.H.牧場 (TOYOMAN、BEN)] スカサハ先輩に教えてもらったこと1 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/5a1d054a3c0b1b4f4c833.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3732"
    },
    {
        "IDcode": 3733,
        "title": "[サケイチバ (左門しう)] 理由は不明だがえっちしてくれる後輩 2",
        "cover": "https://telegra.ph/file/dbf577e513e331da83931.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3733"
    },
    {
        "IDcode": 3734,
        "title": "(C99) [ワッフル同盟犬 (田中竕)] 逆バニーソープスティーレ! (ブレンド・S)",
        "cover": "https://telegra.ph/file/d09b3ec065d9b82758682.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3734"
    },
    {
        "IDcode": 3735,
        "title": "[MANA] 甘雨 5",
        "cover": "https://telegra.ph/file/479f016882f38a3ce5523.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3735"
    },
    {
        "IDcode": 3736,
        "title": "[裏飯屋 (抹茶ねじ)] 年下チン喰いおばさん",
        "cover": "https://telegra.ph/file/84d8dd90a6bb990615a0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3736"
    },
    {
        "IDcode": 3737,
        "title": "[TSFのF (NOMU)] サキュバス倶楽部へようこそ ～妹の妹♀にされた俺♂～",
        "cover": "https://telegra.ph/file/830e404de01c332d2943a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3737"
    },
    {
        "IDcode": 3738,
        "title": "[あむぁいおかし製作所 (なまむぎ、つく丸)] ヤられたら男に戻れなくなるTS娘がレ×プ魔に襲われて、処女を守ろうと必死に媚び媚びするおはなし",
        "cover": "https://telegra.ph/file/72c62251081545426bcb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3738"
    },
    {
        "IDcode": 3739,
        "title": "真理之键十六连射",
        "cover": "https://telegra.ph/file/4989be59694bc8a16e0cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3739"
    },
    {
        "IDcode": 3740,
        "title": "[眞嶋堂 (まとう)] この狂い咲く純潔に引導を！ (この素晴らしい世界に祝福を!)",
        "cover": "https://telegra.ph/file/32ded3ad4137b5d69e080.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3740"
    },
    {
        "IDcode": 3741,
        "title": "[ドラチェフ] ヌきヌき閻魔亭 2",
        "cover": "https://telegra.ph/file/913ca3dc3f8b49e966d86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3741"
    },
    {
        "IDcode": 3742,
        "title": "[Chomikuplus] Dawn♥ズリ「ミニCG集#4」 [中国语 、日本语 ]",
        "cover": "https://telegra.ph/file/529a327dfd2f5e400e094.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3742"
    },
    {
        "IDcode": 3743,
        "title": "[冬みかん] 女子校生が制服姿でえっちなことをしているようです!",
        "cover": "https://telegra.ph/file/6a42441b33d7d4de69e0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3743"
    },
    {
        "IDcode": 3744,
        "title": "[Count2.4 (弐肆)] 乃々と一日 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/940add5e0d46a17a90ca9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3744"
    },
    {
        "IDcode": 3745,
        "title": "(C96) [けんじゃたいむ (MANA)] FATE/GENTLE ORDER「☆☆☆☆☆」(Fate/Grand Order)",
        "cover": "https://telegra.ph/file/18a44828bdd381a07448a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3745"
    },
    {
        "IDcode": 3746,
        "title": "[綺月さい] 色づく春と 後編 (コミックホットミルク 2022年2月号)",
        "cover": "https://telegra.ph/file/7dff3a921ad2b18c33857.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3746"
    },
    {
        "IDcode": 3747,
        "title": "[三船誠二郎] エルフメイドとハーレム生活 [中国翻译]",
        "cover": "https://telegra.ph/file/35e416ebd045c869e9cb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3747"
    },
    {
        "IDcode": 3748,
        "title": "[NYPAON] エロ乳女将が濃厚なおもてなしをしてくれる温泉旅館があるって本当ですか",
        "cover": "https://telegra.ph/file/cea3326b0dd48226dca9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3748"
    },
    {
        "IDcode": 3749,
        "title": "[ノラネコノタマ (雪野みなと)] ここあちゃんちの事情",
        "cover": "https://telegra.ph/file/db303635bad1475745af3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3749"
    },
    {
        "IDcode": 3750,
        "title": "[嶋V king] 《我...不当狗了！薇拉！》 (战双帕弥什)",
        "cover": "https://telegra.ph/file/70df475dc00ecc4be7ab2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3750"
    },
    {
        "IDcode": 3751,
        "title": "(C99) [ハチゴ (あやみ)] 悪夢☆レムネトラレ (Re:ゼロから始める異世界生活)",
        "cover": "https://telegra.ph/file/d8dbc685652589e6e9fdd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3751"
    },
    {
        "IDcode": 3752,
        "title": "[エロマズン (まー九郎)] 藤原先輩は隙だらけ (かぐや様は告らせたい)",
        "cover": "https://telegra.ph/file/8820f9c449e7b27819d84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3752"
    },
    {
        "IDcode": 3753,
        "title": "[三六九] 胡桃 (原神)  [fanbox]",
        "cover": "https://telegra.ph/file/9da8a8a9a3598f969d5d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3753"
    },
    {
        "IDcode": 3754,
        "title": "[ちゅーりっぷ。] 西宮さんの射精管理R (コミックゼロス #90)",
        "cover": "https://telegra.ph/file/601636223a520d63f13cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3754"
    },
    {
        "IDcode": 3755,
        "title": "[てろめあな (ぐすたふ)] 夜まで待てない (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/07d0e766cfe3039d460a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3755"
    },
    {
        "IDcode": 3756,
        "title": "[まーぼーどん (shimoshi)] 文芸部女子と溶けるように…",
        "cover": "https://telegra.ph/file/f7572c5930643bd3bf62f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3756"
    },
    {
        "IDcode": 3757,
        "title": "[半里バード] サースティーラブ (COMIC 快楽天ビースト 2022年2月号)",
        "cover": "https://telegra.ph/file/c1f2034b825317dd4eb41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3757"
    },
    {
        "IDcode": 3758,
        "title": "[PIえろ] 七人のママ",
        "cover": "https://telegra.ph/file/d554c0a200b8d456cc7bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3758"
    },
    {
        "IDcode": 3759,
        "title": "[Been] The illusion of lies（1） (エルソード)",
        "cover": "https://telegra.ph/file/1c1c8d9cffe734b01f6fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3759"
    },
    {
        "IDcode": 3760,
        "title": "[白ネギ屋 (miya9)] はいぼくユウリちゃん (ポケットモンスター ソード・シールド)",
        "cover": "https://telegra.ph/file/f33d21256e8ac3dcacb56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3760"
    },
    {
        "IDcode": 3761,
        "title": "[宇宙烏賊] ランプで魔人でひきこもり (永遠娘 8)",
        "cover": "https://telegra.ph/file/21733932569fac13dce00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3761"
    },
    {
        "IDcode": 3762,
        "title": "[tsuniverse (ゆにば)] 夏の憑依おまけラフ漫画6P",
        "cover": "https://telegra.ph/file/f24f23c43909464bd6647.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3762"
    },
    {
        "IDcode": 3763,
        "title": "(C99) [URAN-FACTORY (URAN)] オールナイトロマンス 3 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/61d31d1d9083618f5d398.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3763"
    },
    {
        "IDcode": 3764,
        "title": "[ちうさんキングダム (かざみちう)] バニ上様のおもてなし (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/05f4853483d3ff5db075e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3764"
    },
    {
        "IDcode": 3765,
        "title": "(C99) [桃色双六 (シスイ青)] 船長の出航乱交本 (宝鐘マリン)",
        "cover": "https://telegra.ph/file/726ae56d8bf85bafd9d3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3765"
    },
    {
        "IDcode": 3766,
        "title": "(C99) [sand (浅ひるゆう)] BUNNY‧BUNNY (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/6f763e8492cdfdfde8933.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3766"
    },
    {
        "IDcode": 3767,
        "title": "(C99) [麦わらクラブ (こむぎ)] 私とあのバカが海でシちゃった話など。 (ペルソナ5)",
        "cover": "https://telegra.ph/file/0ee0e012c8b9bae04182c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3767"
    },
    {
        "IDcode": 3768,
        "title": "[ディオゲネスクラブ (灰川ヘムレン)] 野薔薇ワカラセ (呪術廻戦)",
        "cover": "https://telegra.ph/file/594a0f61754f6eb116b8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3768"
    },
    {
        "IDcode": 3769,
        "title": "(C99) [ドットエイト (さわやか鮫肌)] ビカラちゃんといちゃいちゃする本2冊目 (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/781523a575ea20516e869.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3769"
    },
    {
        "IDcode": 3770,
        "title": "[羽月ユウト] 立花先生の秘密 (COMIC 快楽天ビースト 2022年2月号)",
        "cover": "https://telegra.ph/file/8e4a03781e83347005462.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3770"
    },
    {
        "IDcode": 3771,
        "title": "(C96) [CHARAN PORAN (猫乃またたび)] 千枝とみりあはメスガキ天使 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/03ffc8a79e401c4d48feb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3771"
    },
    {
        "IDcode": 3772,
        "title": "[倉田むと] 好きのカタチはそれぞれ♥ スピンオフ (コミックリブート Vol.32)",
        "cover": "https://telegra.ph/file/222466e887a9ce05f90be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3772"
    },
    {
        "IDcode": 3773,
        "title": "[Fishneak (クロFn)] 潜入慰安将校イナミ",
        "cover": "https://telegra.ph/file/ecafb56ee0b9458304424.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3773"
    },
    {
        "IDcode": 3774,
        "title": "(C99) [OVing (おぶい)] デカ乳テロリストの更生交配実験 (ファイナルファンタジーVII)",
        "cover": "https://telegra.ph/file/89207b1685c0e5e965120.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3774"
    },
    {
        "IDcode": 3775,
        "title": "[Rev3 (もんちゃんrev3)] 夢で逢いましょう、女神様 (この素晴らしい世界に祝福を!)",
        "cover": "https://telegra.ph/file/e4b1c4997a5765512605a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3775"
    },
    {
        "IDcode": 3776,
        "title": "(サンクリ2018 Autumn) [zero戦 (xxzero)] とりのきもちいい",
        "cover": "https://telegra.ph/file/937ad3a03bbe43da0e756.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3776"
    },
    {
        "IDcode": 3777,
        "title": "(C95) [CHARAN PORAN (猫乃またたび)] 結城晴 メスガキ調教体験 がんばるも～ん♥ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/8b4c8859694d9179cc32d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3777"
    },
    {
        "IDcode": 3778,
        "title": "(C97) [MISSING PARK (チサト)] 犬猫姉妹 (ゲゲゲの鬼太郎)",
        "cover": "https://telegra.ph/file/7523789ecc38b007d0e21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3778"
    },
    {
        "IDcode": 3779,
        "title": "[y0u0k] 新的一年，你要负责嗷 (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/e6165a6ac0963e2b52d1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3779"
    },
    {
        "IDcode": 3780,
        "title": "(C99) [サークルフィオレ (えかきびと)] 藤原書記は育てたい (かぐや様は告らせたい)",
        "cover": "https://telegra.ph/file/b5f9fc1b5bcadc818dbff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3780"
    },
    {
        "IDcode": 3781,
        "title": "(C99) [OVing (おぶい)] サンプルH0539 交配レポート (ファイナルファンタジーVII)",
        "cover": "https://telegra.ph/file/cb4418e922429792fed0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3781"
    },
    {
        "IDcode": 3782,
        "title": "[ぽぽちち (八尋ぽち)] その着せ替え人形はHをする (その着せ替え人形は恋をする)",
        "cover": "https://telegra.ph/file/264858e353db568883f2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3782"
    },
    {
        "IDcode": 3783,
        "title": "[electromonkey (右端)] ゴールデンハーベスト (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/27662444d8621fcb98f64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3783"
    },
    {
        "IDcode": 3784,
        "title": "(メガ秋葉原同人祭 第3回) [electromonkey (右端)] 深夜手当 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/6e6822cb33832343f4528.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3784"
    },
    {
        "IDcode": 3785,
        "title": "[なぱた] おひめさま (ひとりじめ)",
        "cover": "https://telegra.ph/file/935fc63db316c14686ded.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3785"
    },
    {
        "IDcode": 3786,
        "title": "[ビルドテツ (二宮仁巳)] 矢矧もグラーフも正妻 後編 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/0030992ba788b9521abbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3786"
    },
    {
        "IDcode": 3787,
        "title": "[UC] 熟女ママNTR",
        "cover": "https://telegra.ph/file/783c120676653f9ad6888.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3787"
    },
    {
        "IDcode": 3788,
        "title": "[electromonkey (右端)] ゴールデンハーベスト (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/900a21cb683ae8bde6457.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3788"
    },
    {
        "IDcode": 3789,
        "title": "[極東工務店 (菊のすけまる)] GIRLFriend's 19 (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/a96be321f32a2ead5e67c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3789"
    },
    {
        "IDcode": 3790,
        "title": "[electromonkey (右端)] はづき本おまけページ (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/f10707215c34e7077cac2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3790"
    },
    {
        "IDcode": 3791,
        "title": "[pastime774] ユニークジョブ【種付けおじさん】を獲得しました 1",
        "cover": "https://telegra.ph/file/10b9d18ab34884402f3e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3791"
    },
    {
        "IDcode": 3792,
        "title": "[あんこまん] ボテ腹ギレーヌvsゴブリン (無職転生 ～異世界行ったら本気だす～)",
        "cover": "https://telegra.ph/file/b6a098208d9960f5e4496.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3792"
    },
    {
        "IDcode": 3793,
        "title": "(COMIC1☆13) [smooth (中村葛湯)] おりこうさん",
        "cover": "https://telegra.ph/file/9d59147934df4269c016b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3793"
    },
    {
        "IDcode": 3794,
        "title": "(C99) [とっとこSたろう (MだSたろう)] トクイテンLR (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/c53fdf7fabb2875cbc615.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3794"
    },
    {
        "IDcode": 3795,
        "title": "[もふもふ苑 (空色れん)] 水結様と正常位で…❤",
        "cover": "https://telegra.ph/file/21a608b7d79aefcb23c19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3795"
    },
    {
        "IDcode": 3796,
        "title": "[アキカン (oxアキカンox)] 少子化対策法案 遺伝子マッチングで母さんとマッチングしちゃった!?",
        "cover": "https://telegra.ph/file/6e746f4975a8dd9c36bf2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3796"
    },
    {
        "IDcode": 3797,
        "title": "[あとりえスターズ (有都あらゆる)] 家出少女結川さん",
        "cover": "https://telegra.ph/file/0dc295bbfd961ffd0b07a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3797"
    },
    {
        "IDcode": 3798,
        "title": "[瓦屋工房 (瓦爺)] スイッチオフ (シスター・クレア)",
        "cover": "https://telegra.ph/file/bed305f0add3e8d8847f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3798"
    },
    {
        "IDcode": 3799,
        "title": "[俺的十八禁] ふたばちゃん受精Chu☆（Chinese）",
        "cover": "https://telegra.ph/file/7caaa638d71a5285f49a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3799"
    },
    {
        "IDcode": 3800,
        "title": "[琥珀亭 (堺はまち)] SECRET MAMA'S LIVE (ラブライブ!)",
        "cover": "https://telegra.ph/file/f680c6c46b7658f5804e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3800"
    },
    {
        "IDcode": 3801,
        "title": "[MISSING PARK (チサト)] 妖怪エロ女 (ゲゲゲの鬼太郎)",
        "cover": "https://telegra.ph/file/27dbf4efba29889884cc3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3801"
    },
    {
        "IDcode": 3802,
        "title": "[かに家 (かにゃぴぃ)] ちびさきゅシコらいふ",
        "cover": "https://telegra.ph/file/611d2aa5c46be2bdb6f81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3802"
    },
    {
        "IDcode": 3803,
        "title": "[F宅 (安間)] 失恋と喪失",
        "cover": "https://telegra.ph/file/6e89d35bc476b820b4212.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=3803"
    }
];
