// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 7401,
        "title": "ウワサ",
        "cover": "https://telegra.ph/file/b1427cfda16fa3a4dc696.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7401"
    },
    {
        "IDcode": 7402,
        "title": "チラリズムの終わり",
        "cover": "https://telegra.ph/file/96d7fd14f770172fa470d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7402"
    },
    {
        "IDcode": 7403,
        "title": "エキドナ様のひまつぶし 第二層目",
        "cover": "https://telegra.ph/file/e5bedacf673935320959c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7403"
    },
    {
        "IDcode": 7404,
        "title": "怪盗クーロ君の巻",
        "cover": "https://telegra.ph/file/60e6939bcb0f2665b040d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7404"
    },
    {
        "IDcode": 7405,
        "title": "性交は間違いのもと!-",
        "cover": "https://telegra.ph/file/0a8e131af9f0b84403b1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7405"
    },
    {
        "IDcode": 7406,
        "title": "気持ちぃまんまんの作り方",
        "cover": "https://telegra.ph/file/918144941a6fa0cdf0002.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7406"
    },
    {
        "IDcode": 7407,
        "title": "こすとらっぷ",
        "cover": "https://telegra.ph/file/1cfe154fd9c504c17f431.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7407"
    },
    {
        "IDcode": 7408,
        "title": "この状况で弟ルートがないのはおかしい！",
        "cover": "https://telegra.ph/file/c253a6d45a8aa27f90b72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7408"
    },
    {
        "IDcode": 7409,
        "title": "オフィスの媚っ痴女",
        "cover": "https://telegra.ph/file/8a86bbeef875927317568.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7409"
    },
    {
        "IDcode": 7410,
        "title": "秘湯妻",
        "cover": "https://telegra.ph/file/0f62c92455e754b017277.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7410"
    },
    {
        "IDcode": 7411,
        "title": "ウワサ",
        "cover": "https://telegra.ph/file/a0b0e154f52d4b1912cff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7411"
    },
    {
        "IDcode": 7412,
        "title": "夏休み何する？",
        "cover": "https://telegra.ph/file/e674459771789715110a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7412"
    },
    {
        "IDcode": 7413,
        "title": "セックスライフ",
        "cover": "https://telegra.ph/file/839b3e35dbb5e9139cb21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7413"
    },
    {
        "IDcode": 7414,
        "title": "せんせいの秘密",
        "cover": "https://telegra.ph/file/d00f709c92db0a9711b36.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7414"
    },
    {
        "IDcode": 7415,
        "title": "ソウタイセイ",
        "cover": "https://telegra.ph/file/9fdf0a34aa554f49f90f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7415"
    },
    {
        "IDcode": 7416,
        "title": "神様のお誘い",
        "cover": "https://telegra.ph/file/90fcba33ee6f0f1865375.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7416"
    },
    {
        "IDcode": 7417,
        "title": "聖処女産卵黙示録",
        "cover": "https://telegra.ph/file/fe203ed0808a1b551e3a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7417"
    },
    {
        "IDcode": 7418,
        "title": "恋人盃",
        "cover": "https://telegra.ph/file/29ad2214d7b932eee704c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7418"
    },
    {
        "IDcode": 7419,
        "title": "肚脐与刀尖",
        "cover": "https://telegra.ph/file/d20104eabb485598f062b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7419"
    },
    {
        "IDcode": 7420,
        "title": "おじさんとボク 夏休み編",
        "cover": "https://telegra.ph/file/4f9600e6b606223e097f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7420"
    },
    {
        "IDcode": 7421,
        "title": "火華",
        "cover": "https://telegra.ph/file/48e90010e5ec772146edb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7421"
    },
    {
        "IDcode": 7422,
        "title": "俺の彼女が可愛すぎるのが悪い",
        "cover": "https://telegra.ph/file/9fabcec166f99bb5a1e61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7422"
    },
    {
        "IDcode": 7423,
        "title": "もっと見ていて",
        "cover": "https://telegra.ph/file/402f48137d85075f6fd44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7423"
    },
    {
        "IDcode": 7424,
        "title": "コスチュームプレイ",
        "cover": "https://telegra.ph/file/e4845f29f62cd3b7b99ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7424"
    },
    {
        "IDcode": 7425,
        "title": "日本ロリババア話 〜鬼退治編〜",
        "cover": "https://telegra.ph/file/80947cf6bae2115834787.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7425"
    },
    {
        "IDcode": 7426,
        "title": "いつもとは、違う君と。",
        "cover": "https://telegra.ph/file/ff7203f70662353fa64c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7426"
    },
    {
        "IDcode": 7427,
        "title": "少女A",
        "cover": "https://telegra.ph/file/efbc4b6d54eb1ab0f0d25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7427"
    },
    {
        "IDcode": 7428,
        "title": "知らないセカイ",
        "cover": "https://telegra.ph/file/dca09516e77a068411443.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7428"
    },
    {
        "IDcode": 7429,
        "title": "悪魔なしっぽ！",
        "cover": "https://telegra.ph/file/ce715a25394bf1e42b3b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7429"
    },
    {
        "IDcode": 7430,
        "title": "泡のお姫様 #7 ドS優等生の射精管理",
        "cover": "https://telegra.ph/file/ab32d847f82d4e11e2928.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7430"
    },
    {
        "IDcode": 7431,
        "title": "とある国の夜伽話",
        "cover": "https://telegra.ph/file/7c83aa448a403401f5502.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7431"
    },
    {
        "IDcode": 7432,
        "title": "ご奉仕執事♥吉野くん",
        "cover": "https://telegra.ph/file/caf3be60da7877a840ee8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7432"
    },
    {
        "IDcode": 7433,
        "title": "欲望パンドラ",
        "cover": "https://telegra.ph/file/c41d8b894cb16c7706eac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7433"
    },
    {
        "IDcode": 7434,
        "title": "お母さんからの俺の十七歳のプレゼント",
        "cover": "https://telegra.ph/file/f8bd90a0b884d15fb4a3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7434"
    },
    {
        "IDcode": 7435,
        "title": "しあわせタマゴの作り方",
        "cover": "https://telegra.ph/file/dfeefc464e7755c95626e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7435"
    },
    {
        "IDcode": 7436,
        "title": "獣人の躾方",
        "cover": "https://telegra.ph/file/da3bee47ccbc99ee992c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7436"
    },
    {
        "IDcode": 7437,
        "title": "甥を喰らわば膣内まで",
        "cover": "https://telegra.ph/file/84b309fe4aeddc6479756.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7437"
    },
    {
        "IDcode": 7438,
        "title": "イタズラのヤり方",
        "cover": "https://telegra.ph/file/da52a3dbd278dcdcf9549.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7438"
    },
    {
        "IDcode": 7439,
        "title": "乙女にお任セックス",
        "cover": "https://telegra.ph/file/86028e1e22456751a51af.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7439"
    },
    {
        "IDcode": 7440,
        "title": "Other・Sister",
        "cover": "https://telegra.ph/file/c3d9ffa652ac42a8273fb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7440"
    },
    {
        "IDcode": 7441,
        "title": "ウラ学園祭で脱童貞！！",
        "cover": "https://telegra.ph/file/928fa96f29e25f2eff880.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7441"
    },
    {
        "IDcode": 7442,
        "title": "アナタとなら…",
        "cover": "https://telegra.ph/file/be7d9e7b5579b13d29bfe.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7442"
    },
    {
        "IDcode": 7443,
        "title": "小さな兄さん元気になって",
        "cover": "https://telegra.ph/file/2322b115e7ca4530c06a7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7443"
    },
    {
        "IDcode": 7444,
        "title": "ダークエルフの恋物語",
        "cover": "https://telegra.ph/file/f55708227d99ee7a88c82.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7444"
    },
    {
        "IDcode": 7445,
        "title": "シスターコンプレックス",
        "cover": "https://telegra.ph/file/b13699995edf9e2189497.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7445"
    },
    {
        "IDcode": 7446,
        "title": "恋にならない",
        "cover": "https://telegra.ph/file/2a5ab539dfe1fde0e1f25.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7446"
    },
    {
        "IDcode": 7447,
        "title": "飼い犬に噛まれる",
        "cover": "https://telegra.ph/file/698b6fd5bef002d85b0d7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7447"
    },
    {
        "IDcode": 7448,
        "title": "Beastie Charm",
        "cover": "https://telegra.ph/file/ccd2dac508bb761c55f7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7448"
    },
    {
        "IDcode": 7449,
        "title": "日本ロリババア話 〜鬼退治編〜",
        "cover": "https://telegra.ph/file/c5ae30370b2a80f5963ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7449"
    },
    {
        "IDcode": 7450,
        "title": "（日吉ハナ）アマデウス",
        "cover": "https://telegra.ph/file/e55fb45a2b4302817618c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7450"
    },
    {
        "IDcode": 7451,
        "title": "永世の香り",
        "cover": "https://telegra.ph/file/c1ff7eed328c902f4df75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7451"
    },
    {
        "IDcode": 7452,
        "title": "魔法老女オルガズム✩チヨさん",
        "cover": "https://telegra.ph/file/7218d1efa036f7c80cdc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7452"
    },
    {
        "IDcode": 7453,
        "title": "Amadeus -アマデウス- 〜十五夜〜",
        "cover": "https://telegra.ph/file/b632970d994f94fa8b660.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7453"
    },
    {
        "IDcode": 7454,
        "title": "道に迷った女の子と遭遇したら",
        "cover": "https://telegra.ph/file/e795ba30a27d2ba8cfcaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7454"
    },
    {
        "IDcode": 7455,
        "title": "催眠ごっこ",
        "cover": "https://telegra.ph/file/46ca0a107d18699bb319a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7455"
    },
    {
        "IDcode": 7456,
        "title": "だって好きだから",
        "cover": "https://telegra.ph/file/0af2cc499c984bdd6af07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7456"
    },
    {
        "IDcode": 7457,
        "title": "見られて魅せられて",
        "cover": "https://telegra.ph/file/c1a52e6a5573631afa188.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7457"
    },
    {
        "IDcode": 7458,
        "title": "男の娘アイドルの最終面接",
        "cover": "https://telegra.ph/file/453fe20633a89f9269b97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7458"
    },
    {
        "IDcode": 7459,
        "title": "先生は大きいのがお好き",
        "cover": "https://telegra.ph/file/c30de0d11764f2fa913c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7459"
    },
    {
        "IDcode": 7460,
        "title": "女剣士の淫乱堕落記",
        "cover": "https://telegra.ph/file/8be9d22103666532281f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7460"
    },
    {
        "IDcode": 7461,
        "title": "女将と俺と妹",
        "cover": "https://telegra.ph/file/efc0ad449449525f1f2e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7461"
    },
    {
        "IDcode": 7462,
        "title": "裸の魔境",
        "cover": "https://telegra.ph/file/f77f6bb1670eafea8134d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7462"
    },
    {
        "IDcode": 7463,
        "title": "ワンダーカラー",
        "cover": "https://telegra.ph/file/3cc32aca407f30c5f8c79.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7463"
    },
    {
        "IDcode": 7464,
        "title": "僕の従姉のお姉さん",
        "cover": "https://telegra.ph/file/476b211926228a5e17457.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7464"
    },
    {
        "IDcode": 7465,
        "title": "きょーいくてき指導!!",
        "cover": "https://telegra.ph/file/063de852d02bb42fd97a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7465"
    },
    {
        "IDcode": 7466,
        "title": "オナニーアシスタントのお姉ちゃんママ",
        "cover": "https://telegra.ph/file/8f00ad8e9954cf540ee3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7466"
    },
    {
        "IDcode": 7467,
        "title": "獄城姦-朱宮胡桃・実刑7年-",
        "cover": "https://telegra.ph/file/7086b1cd3f999071e52ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7467"
    },
    {
        "IDcode": 7468,
        "title": "素直になれた日",
        "cover": "https://telegra.ph/file/9019fe71598447cd20c8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7468"
    },
    {
        "IDcode": 7469,
        "title": "師妻艶武",
        "cover": "https://telegra.ph/file/ed01d31416deb6ce1e7d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7469"
    },
    {
        "IDcode": 7470,
        "title": "オナニーアシスタントの日常",
        "cover": "https://telegra.ph/file/5694b929f66c1dca69919.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7470"
    },
    {
        "IDcode": 7471,
        "title": "妖姫生誕",
        "cover": "https://telegra.ph/file/9cd1fa0476e8b800fe93f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7471"
    },
    {
        "IDcode": 7472,
        "title": "ヘドニック・ナーブ",
        "cover": "https://telegra.ph/file/21c733b263e88fad12a83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7472"
    },
    {
        "IDcode": 7473,
        "title": "僕とサッちゃんとあの匂いと",
        "cover": "https://telegra.ph/file/4f69ac49d30b816a44a79.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7473"
    },
    {
        "IDcode": 7474,
        "title": "ちょっぴり強淫な幸せをッ!!",
        "cover": "https://telegra.ph/file/c05c1efb0c247edd636a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7474"
    },
    {
        "IDcode": 7475,
        "title": "裏 Birthday",
        "cover": "https://telegra.ph/file/0068f4c0d3413eea43cd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7475"
    },
    {
        "IDcode": 7476,
        "title": "れんしゅう。",
        "cover": "https://telegra.ph/file/d2c9b5636f45db0ef61ce.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7476"
    },
    {
        "IDcode": 7477,
        "title": "MOMO！ 最終話 めでたしめでたしの巻",
        "cover": "https://telegra.ph/file/7a39da316938df3d3a359.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7477"
    },
    {
        "IDcode": 7478,
        "title": "サセ男の瀬尾くん",
        "cover": "https://telegra.ph/file/367f30719af10091eb165.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7478"
    },
    {
        "IDcode": 7479,
        "title": "べんきょう好きの女の子",
        "cover": "https://telegra.ph/file/edd086177c3dc287d8629.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7479"
    },
    {
        "IDcode": 7480,
        "title": "バイトちゃんの足に敷かれる",
        "cover": "https://telegra.ph/file/40400ac2bf043a9839e2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7480"
    },
    {
        "IDcode": 7481,
        "title": "おしかけ妖狐さま",
        "cover": "https://telegra.ph/file/d984a347b5397941d34cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7481"
    },
    {
        "IDcode": 7482,
        "title": "OGRE #Extra",
        "cover": "https://telegra.ph/file/a935fc741dea15b8fd887.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7482"
    },
    {
        "IDcode": 7483,
        "title": "森のシキタリ 〜エルフどうしのコン比べ？〜",
        "cover": "https://telegra.ph/file/7b1c695a95caaca3cc05a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7483"
    },
    {
        "IDcode": 7484,
        "title": "ママ酔い[ふしだら日和 + イラストカード",
        "cover": "https://telegra.ph/file/799bd3de126f097fec81d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7484"
    },
    {
        "IDcode": 7485,
        "title": "みだらママ (ふしだら日和)",
        "cover": "https://telegra.ph/file/bd6ab6c9e26ce43d22de8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7485"
    },
    {
        "IDcode": 7486,
        "title": "Soon Crazy",
        "cover": "https://telegra.ph/file/395f10fb346696d9df85b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7486"
    },
    {
        "IDcode": 7487,
        "title": "母子狂宴",
        "cover": "https://telegra.ph/file/d1087486dcf25cf36e905.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7487"
    },
    {
        "IDcode": 7488,
        "title": "見られちゃった",
        "cover": "https://telegra.ph/file/c4091fe62641df83ecdb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7488"
    },
    {
        "IDcode": 7489,
        "title": "僕たちホントにつきあってるんだよね？",
        "cover": "https://telegra.ph/file/0423bdf5150c247934d82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7489"
    },
    {
        "IDcode": 7490,
        "title": "美脚とは太く逞しく",
        "cover": "https://telegra.ph/file/fea13f7c6286ec56c1967.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7490"
    },
    {
        "IDcode": 7491,
        "title": "超満足オフ会",
        "cover": "https://telegra.ph/file/1d015b12bacf607d8ae16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7491"
    },
    {
        "IDcode": 7492,
        "title": "Next is…-",
        "cover": "https://telegra.ph/file/b623a7a089c254b65620b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7492"
    },
    {
        "IDcode": 7493,
        "title": "JKビッチの恋愛相談",
        "cover": "https://telegra.ph/file/98ba8d70d324336934c67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7493"
    },
    {
        "IDcode": 7494,
        "title": "ナイショの授業",
        "cover": "https://telegra.ph/file/6f35504cefaf520e347ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7494"
    },
    {
        "IDcode": 7495,
        "title": "バレないように♥",
        "cover": "https://telegra.ph/file/51a98b35c6427b6583488.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7495"
    },
    {
        "IDcode": 7496,
        "title": "らぶらぶ♥抱きしめ男の娘!",
        "cover": "https://telegra.ph/file/36b6a42c7839ea128c9bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7496"
    },
    {
        "IDcode": 7497,
        "title": "もらい水",
        "cover": "https://telegra.ph/file/9bc7e5dbf3f1115c0bcda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7497"
    },
    {
        "IDcode": 7498,
        "title": "ダブルレッスン",
        "cover": "https://telegra.ph/file/6e73cd12ff225b93de20e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7498"
    },
    {
        "IDcode": 7499,
        "title": "ラブストーリー",
        "cover": "https://telegra.ph/file/5a138d36df767bd8cd7f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7499"
    },
    {
        "IDcode": 7500,
        "title": "Hunted by a Witch!",
        "cover": "https://telegra.ph/file/84f26481f9346a7473dc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=7500"
    }
];
