// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 7701,
        "title": "見られちゃった",
        "cover": "https://telegra.ph/file/c4091fe62641df83ecdb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7701"
    },
    {
        "IDcode": 7702,
        "title": "僕たちホントにつきあってるんだよね？",
        "cover": "https://telegra.ph/file/0423bdf5150c247934d82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7702"
    },
    {
        "IDcode": 7703,
        "title": "美脚とは太く逞しく",
        "cover": "https://telegra.ph/file/fea13f7c6286ec56c1967.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7703"
    },
    {
        "IDcode": 7704,
        "title": "超満足オフ会",
        "cover": "https://telegra.ph/file/1d015b12bacf607d8ae16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7704"
    },
    {
        "IDcode": 7705,
        "title": "Next is…-",
        "cover": "https://telegra.ph/file/b623a7a089c254b65620b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7705"
    },
    {
        "IDcode": 7706,
        "title": "JKビッチの恋愛相談",
        "cover": "https://telegra.ph/file/98ba8d70d324336934c67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7706"
    },
    {
        "IDcode": 7707,
        "title": "ナイショの授業",
        "cover": "https://telegra.ph/file/6f35504cefaf520e347ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7707"
    },
    {
        "IDcode": 7708,
        "title": "バレないように♥",
        "cover": "https://telegra.ph/file/51a98b35c6427b6583488.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7708"
    },
    {
        "IDcode": 7709,
        "title": "らぶらぶ♥抱きしめ男の娘!",
        "cover": "https://telegra.ph/file/36b6a42c7839ea128c9bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7709"
    },
    {
        "IDcode": 7710,
        "title": "もらい水",
        "cover": "https://telegra.ph/file/9bc7e5dbf3f1115c0bcda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7710"
    },
    {
        "IDcode": 7711,
        "title": "ダブルレッスン",
        "cover": "https://telegra.ph/file/6e73cd12ff225b93de20e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7711"
    },
    {
        "IDcode": 7712,
        "title": "ラブストーリー",
        "cover": "https://telegra.ph/file/5a138d36df767bd8cd7f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7712"
    },
    {
        "IDcode": 7713,
        "title": "Hunted by a Witch!",
        "cover": "https://telegra.ph/file/84f26481f9346a7473dc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7713"
    },
    {
        "IDcode": 7714,
        "title": "どっぐぶりーだーず!",
        "cover": "https://telegra.ph/file/c1e9020728afb121e0f7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7714"
    },
    {
        "IDcode": 7715,
        "title": "父子の絆の深め方",
        "cover": "https://telegra.ph/file/467e616da081133e7efdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7715"
    },
    {
        "IDcode": 7716,
        "title": "終わらない日々",
        "cover": "https://telegra.ph/file/2faf30f3bf7aa9050adc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7716"
    },
    {
        "IDcode": 7717,
        "title": "終わらない日々",
        "cover": "https://telegra.ph/file/d587a82c0be1f4880efb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7717"
    },
    {
        "IDcode": 7718,
        "title": "柚好喜のサンタさん",
        "cover": "https://telegra.ph/file/74cd866603fa30c6f5522.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7718"
    },
    {
        "IDcode": 7719,
        "title": "影鏡",
        "cover": "https://telegra.ph/file/f08339186ca8164fc7756.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7719"
    },
    {
        "IDcode": 7720,
        "title": "社畜の幸せ",
        "cover": "https://telegra.ph/file/24c49fd550949b60e1e23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7720"
    },
    {
        "IDcode": 7721,
        "title": "催眠ごっこ",
        "cover": "https://telegra.ph/file/86df15d933e896afb1da2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7721"
    },
    {
        "IDcode": 7722,
        "title": "Moratorium Shounen x Shoujo",
        "cover": "https://telegra.ph/file/0ee1e612e6d09982e86d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7722"
    },
    {
        "IDcode": 7723,
        "title": "［うるし原智志］ラグナロックシティ",
        "cover": "https://telegra.ph/file/8d1b6877e695ff1053dc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7723"
    },
    {
        "IDcode": 7724,
        "title": "[Yagami Hiroki] G-Taste 1",
        "cover": "https://telegra.ph/file/067849eaa152b43e7aebc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7724"
    },
    {
        "IDcode": 7725,
        "title": "[Yagami Hiroki] G-Taste 2",
        "cover": "https://telegra.ph/file/99f817d8d65965ebd2372.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7725"
    },
    {
        "IDcode": 7726,
        "title": "[Yagami Hiroki] G-Taste 3",
        "cover": "https://telegra.ph/file/a51d715001f4f806e34fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7726"
    },
    {
        "IDcode": 7727,
        "title": "[Yagami Hiroki] G-Taste 4",
        "cover": "https://telegra.ph/file/791354e1f394fa002bc12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7727"
    },
    {
        "IDcode": 7728,
        "title": "[唯登詩樹] YUI SHOP 第1巻",
        "cover": "https://telegra.ph/file/ec13ac4300fb71172ee25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7728"
    },
    {
        "IDcode": 7729,
        "title": "[唯登詩樹] YUI SHOP 第2巻",
        "cover": "https://telegra.ph/file/622ce9811c19b0c5d1971.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7729"
    },
    {
        "IDcode": 7730,
        "title": "[唯登詩樹] YUI SHOP 第3巻",
        "cover": "https://telegra.ph/file/c3fa2fde325cce8e5e838.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7730"
    },
    {
        "IDcode": 7731,
        "title": "[唯登詩樹] YUI SHOP 第4巻",
        "cover": "https://telegra.ph/file/c0660c9decb0dce271a03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7731"
    },
    {
        "IDcode": 7732,
        "title": "E.Stage - gallerie",
        "cover": "https://telegra.ph/file/a9e9ab8d06850c00ec213.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7732"
    },
    {
        "IDcode": 7733,
        "title": "[八神ひろき] G-taste 4 12",
        "cover": "https://telegra.ph/file/2e22330dd6a6327dc201a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7733"
    },
    {
        "IDcode": 7734,
        "title": "[Hiroki Yagami] G-taste 5",
        "cover": "https://telegra.ph/file/d4c2f0865797efd2a8025.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7734"
    },
    {
        "IDcode": 7735,
        "title": "[八神ひろき] G-taste 6",
        "cover": "https://telegra.ph/file/c434041a4d5a133f99581.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7735"
    },
    {
        "IDcode": 7736,
        "title": "G-Taste ReMix",
        "cover": "https://telegra.ph/file/4ae1873276520cb93e008.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7736"
    },
    {
        "IDcode": 7737,
        "title": "G-Taste Costume Play Special",
        "cover": "https://telegra.ph/file/4672202de8737884f8344.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7737"
    },
    {
        "IDcode": 7738,
        "title": "[NCP]店长命令是绝对的",
        "cover": "https://telegra.ph/file/b5276a1f9b411ff68ded6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7738"
    },
    {
        "IDcode": 7739,
        "title": "[Kenja Time (MANA)] Fate Gentle Order 3alter(Fate Grand Order)",
        "cover": "https://telegra.ph/file/e741e25f6229c86afae8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7739"
    },
    {
        "IDcode": 7740,
        "title": "[青水庵 (桂井よしあき)] 陰キャ美少女は、担任に犯されてもイキまくる",
        "cover": "https://telegra.ph/file/6ccc784c61401db522ce0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7740"
    },
    {
        "IDcode": 7741,
        "title": "寝取られ妻",
        "cover": "https://telegra.ph/file/5b1d8bc183aff28e00455.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7741"
    },
    {
        "IDcode": 7742,
        "title": "王者荣耀 公孙离",
        "cover": "https://telegra.ph/file/3a2c4df2b9e832a7f1ac3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7742"
    },
    {
        "IDcode": 7743,
        "title": "[OrangeMaru (YD)] XX ROM (FateGrand Order)",
        "cover": "https://telegra.ph/file/59a0c8784a247b3bcaf85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7743"
    },
    {
        "IDcode": 7744,
        "title": "[たまかけ屋 (たまかけ)] JC×緊縛×露出",
        "cover": "https://telegra.ph/file/e2c4975fbe183e1333eb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7744"
    },
    {
        "IDcode": 7745,
        "title": "[鈴穗ほたる] ケモ耳これくしょん (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/7a88dd703df6622098cad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7745"
    },
    {
        "IDcode": 7746,
        "title": "[エクセシオ] 偉そうな姉貴たちも絶対服従!絶対家訓を作った俺",
        "cover": "https://telegra.ph/file/a544b67f130fc76fdd4b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7746"
    },
    {
        "IDcode": 7747,
        "title": "[猫御所 (ヤナギユウ)] Neko Neko Note 4b",
        "cover": "https://telegra.ph/file/b2f1ae26a1a96e317bcda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7747"
    },
    {
        "IDcode": 7748,
        "title": "[Kenja Time (MANA)] Fate Gentle Order 3 Lily (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ac3561c9468d6274ca49a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7748"
    },
    {
        "IDcode": 7749,
        "title": "[MANA (remana)] ジェントルリズム1.0 (東方Project)",
        "cover": "https://telegra.ph/file/2585f2f3d419467ddf495.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7749"
    },
    {
        "IDcode": 7750,
        "title": "[Foundation／1 (MANA)] ジェントルリズム5 (東方Project)",
        "cover": "https://telegra.ph/file/2c4702c20a0ccb7a632f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7750"
    },
    {
        "IDcode": 7751,
        "title": "[OrangeMaru (YD)] カルデアメイド #マシュ (Fate Grand Order)",
        "cover": "https://telegra.ph/file/100368b4879f0dc190b06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7751"
    },
    {
        "IDcode": 7752,
        "title": "[NCP (鷲塚翔)] 快楽に堕ちる母娘",
        "cover": "https://telegra.ph/file/5c1f3ed08efee1f83e237.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7752"
    },
    {
        "IDcode": 7753,
        "title": "[AIM] ボクのお兄ちゃんがを作っていたのでエッチな知識ゼロのフリして色々されちゃった話",
        "cover": "https://telegra.ph/file/3fe63723e9f4ea689c568.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7753"
    },
    {
        "IDcode": 7754,
        "title": "[水原優] 上にイっちゃう！？",
        "cover": "https://telegra.ph/file/b0d22822482e9fa8612db.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7754"
    },
    {
        "IDcode": 7755,
        "title": "[孤独intelligence (ななお)] THE BOOK OF SAKURA 3 (Fate stay night)",
        "cover": "https://telegra.ph/file/052034d4d3e29bf01c723.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7755"
    },
    {
        "IDcode": 7756,
        "title": "[よい子ブックス] 我的暑假作文",
        "cover": "https://telegra.ph/file/a152f909a0c29c27e8e15.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7756"
    },
    {
        "IDcode": 7757,
        "title": "[杢臓] 悦子是镇上大家的性玩具",
        "cover": "https://telegra.ph/file/1652ac6d6daca4d78d8f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7757"
    },
    {
        "IDcode": 7758,
        "title": "[Foundation／1 (MANA)] ジェントルリズム4 (東方Project)",
        "cover": "https://telegra.ph/file/872f2cafc314147a8ead7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7758"
    },
    {
        "IDcode": 7759,
        "title": "[NCP] 家賃がムリならお前の身体で払ってもらおうか (フルカラー)",
        "cover": "https://telegra.ph/file/261a27aff3dec63cc0c64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7759"
    },
    {
        "IDcode": 7760,
        "title": "[OrangeMaru (YD)] 信号無視 (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/249c3c2e9f91ff2255363.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7760"
    },
    {
        "IDcode": 7761,
        "title": "[真城悠] 美人證",
        "cover": "https://telegra.ph/file/fc4b58d0390ecb2a4a919.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7761"
    },
    {
        "IDcode": 7762,
        "title": "人妻的诱惑",
        "cover": "https://telegra.ph/file/af100564572a2d04d5680.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7762"
    },
    {
        "IDcode": 7763,
        "title": "[Small Dog] レンタル彼女～本気セックスを覚えたら～",
        "cover": "https://telegra.ph/file/d44306686736422eabefa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7763"
    },
    {
        "IDcode": 7764,
        "title": "[裏通りの抜け道]我的姐姐们全是碧池",
        "cover": "https://telegra.ph/file/5df8b49d980d96db09fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7764"
    },
    {
        "IDcode": 7765,
        "title": "姐弟在沙发上疯狂做爱",
        "cover": "https://telegra.ph/file/02ccef75d24dd4aecc67c.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7765"
    },
    {
        "IDcode": 7766,
        "title": "[韩漫]坏女人报告书 第1话",
        "cover": "https://telegra.ph/file/6635f08920180c7effe8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7766"
    },
    {
        "IDcode": 7767,
        "title": "[あまい惑星] アダルトグッズ探知機～街の淫乱女をリサーチせよ～",
        "cover": "https://telegra.ph/file/a08792be3938a02f2a160.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7767"
    },
    {
        "IDcode": 7768,
        "title": "[OrangeMaru (YD)] はさみうち",
        "cover": "https://telegra.ph/file/5aa7c0d44d6218c6c3d56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7768"
    },
    {
        "IDcode": 7769,
        "title": "那家伙所不知道的女友的×××",
        "cover": "https://telegra.ph/file/9d9b1e5919b5e0f612c4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7769"
    },
    {
        "IDcode": 7770,
        "title": "[OrangeMaru (YD)] スキル強化解禁",
        "cover": "https://telegra.ph/file/47d3b75140d12c55d9d17.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7770"
    },
    {
        "IDcode": 7771,
        "title": "[如月群真] Sweethearts",
        "cover": "https://telegra.ph/file/386ea0de618d44a74ad36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7771"
    },
    {
        "IDcode": 7772,
        "title": "让人气愤的妹妹必须要被惩罚",
        "cover": "https://telegra.ph/file/418671f5038d860567884.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7772"
    },
    {
        "IDcode": 7773,
        "title": "(MANA) FateGentle Order",
        "cover": "https://telegra.ph/file/3b4bdf52c50a432d7a22c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7773"
    },
    {
        "IDcode": 7774,
        "title": "我的休学旅行",
        "cover": "https://telegra.ph/file/329ea56d1b41ab3b61a0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7774"
    },
    {
        "IDcode": 7775,
        "title": "[篠塚醸二] やさしいせかい",
        "cover": "https://telegra.ph/file/ab5d6a956392c9d154806.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7775"
    },
    {
        "IDcode": 7776,
        "title": "[NCP (雪月佳)] 全滅",
        "cover": "https://telegra.ph/file/48c9363a7b18cc8baa1d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7776"
    },
    {
        "IDcode": 7777,
        "title": "[けんじゃたいむ (MANA)] ジェントルブルーファンタジー・2",
        "cover": "https://telegra.ph/file/8fad23cbb3cd5d83cf354.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7777"
    },
    {
        "IDcode": 7778,
        "title": "[リリックボックス (Blast)] ある日、弟が覗き見たのは不良たちに昏睡レ〇プされる大好きだった姉の姿だった。",
        "cover": "https://telegra.ph/file/0cf926b352a2c437b87bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7778"
    },
    {
        "IDcode": 7779,
        "title": "[けんじゃたいむ (MANA)] ジェントルコレクション",
        "cover": "https://telegra.ph/file/f79ef4682ff4dc1f1debb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7779"
    },
    {
        "IDcode": 7780,
        "title": "[いのうえたくや] ちちのえ＋ ～いのうえたくや画集～",
        "cover": "https://telegra.ph/file/800b794b97d252e191381.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7780"
    },
    {
        "IDcode": 7781,
        "title": "[永野あかね] プチりんく",
        "cover": "https://telegra.ph/file/0155942646228af58c089.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7781"
    },
    {
        "IDcode": 7782,
        "title": "[MAXI Queen (みゃけ)] 突撃!紫の晩ごはん (東方Project)",
        "cover": "https://telegra.ph/file/08d3109ff6adc2b753287.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7782"
    },
    {
        "IDcode": 7783,
        "title": "[銀の星亭 (田宮秋人)] 紅〜AKA〜",
        "cover": "https://telegra.ph/file/dd57506d208cd4da1ace8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7783"
    },
    {
        "IDcode": 7784,
        "title": "[Number2 (たくじ)] ヤミと美柑のハーレムぷろじぇくと (ToLOVEる-とらぶる-)",
        "cover": "https://telegra.ph/file/5848b4d04a6d2edbd85c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7784"
    },
    {
        "IDcode": 7785,
        "title": "[OrangeMaru (YD)] TOKIMEKI ニオイ",
        "cover": "https://telegra.ph/file/c8773f8b360544a1c1a04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7785"
    },
    {
        "IDcode": 7786,
        "title": "[3D]我会好好照顾师娘",
        "cover": "https://telegra.ph/file/fcc96040edfc02a089094.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7786"
    },
    {
        "IDcode": 7787,
        "title": "催眠2.5",
        "cover": "https://telegra.ph/file/715c577a5b949bf3f3a65.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7787"
    },
    {
        "IDcode": 7788,
        "title": "[OZ]アリステンタクルヴァージン",
        "cover": "https://telegra.ph/file/663df996db2d69e666c78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7788"
    },
    {
        "IDcode": 7789,
        "title": "[遊人] みだらし男娘〜ボクの初めて奪われちゃった",
        "cover": "https://telegra.ph/file/e68de790eee5761990b7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7789"
    },
    {
        "IDcode": 7790,
        "title": "琴舎",
        "cover": "https://telegra.ph/file/48264748c68c9e23c07d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7790"
    },
    {
        "IDcode": 7791,
        "title": "七瀬ちゃんと過ごす、週末2泊3日の生ハメお泊まり会",
        "cover": "https://telegra.ph/file/25d6b2f6c5bc0ae8382f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7791"
    },
    {
        "IDcode": 7792,
        "title": "健気猫娘湯上がりえっち編ぷらす",
        "cover": "https://telegra.ph/file/cc7c65ff92e1cc71c9f0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7792"
    },
    {
        "IDcode": 7793,
        "title": "[ショコラテ (一葉モカ)] プリンツのご奉仕頑張りますっ!",
        "cover": "https://telegra.ph/file/512a80f514f168dd69b28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7793"
    },
    {
        "IDcode": 7794,
        "title": "[CORORI (酔っ払い鬼 )] はなかん なんでこんな事になるズラ!",
        "cover": "https://telegra.ph/file/5d5c50856c331960a8b28.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7794"
    },
    {
        "IDcode": 7795,
        "title": "[あばらんち (チマQ)]",
        "cover": "https://telegra.ph/file/65f07b4f6778ae6166000.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7795"
    },
    {
        "IDcode": 7796,
        "title": "[村上水軍の館 (村上水軍)] 少女たちは縛られる。",
        "cover": "https://telegra.ph/file/c64aeb57f360ba4262bd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7796"
    },
    {
        "IDcode": 7797,
        "title": "[萌姫連合 (xin、obiwan)] カーニバル14-新米指揮官の学園性生活-",
        "cover": "https://telegra.ph/file/27310e05311f9107d5d25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7797"
    },
    {
        "IDcode": 7798,
        "title": "東方陵辱フルカラー25霊夢野外緊縛",
        "cover": "https://telegra.ph/file/ee07f0a409c989bfee139.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7798"
    },
    {
        "IDcode": 7799,
        "title": "Baltik Colors vol.2",
        "cover": "https://telegra.ph/file/1b9724868a88688472b91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7799"
    },
    {
        "IDcode": 7800,
        "title": "カグライジリ (閃乱カグラ)",
        "cover": "https://telegra.ph/file/803391ac2208691aa4187.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7800"
    }
];
