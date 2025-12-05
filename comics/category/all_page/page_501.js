// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 5001,
        "title": "[みぞね] 蛇な乙女は従者を吞む (COMIC BAVEL 2021年11月号)",
        "cover": "https://telegra.ph/file/02185ff0721abe9632b25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5001"
    },
    {
        "IDcode": 5002,
        "title": "[えのき] 朝日先輩の裸 (COMIC アオハ 2021 秋)",
        "cover": "https://telegra.ph/file/144a5c724a0ec078363c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5002"
    },
    {
        "IDcode": 5003,
        "title": "[ACIDSEA (遊馬臣)] ワンデーワンダーランド!? (鬼滅の刃)",
        "cover": "https://telegra.ph/file/b49a20ba3c282bf493dda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5003"
    },
    {
        "IDcode": 5004,
        "title": "[西沢みずき] 侵略のいもうと (WEEKLY快楽天 2021 No.36)",
        "cover": "https://telegra.ph/file/40c13f53cf085913cee9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5004"
    },
    {
        "IDcode": 5005,
        "title": "[平間ひろかず] 望月さんちはもっともっと欲求不満 (COMIC 快楽天ビースト 2021年9月号)",
        "cover": "https://telegra.ph/file/6fe16cb191649fdf362c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5005"
    },
    {
        "IDcode": 5006,
        "title": "普段とは少し違うミミックを発見したフリーレン (葬送のフリーレン)  - Page 1",
        "cover": "https://telegra.ph/file/ee1677474be4171f42786.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5006"
    },
    {
        "IDcode": 5007,
        "title": "[Milknium Family] Otona Ni Akogareru Minarai Shisuta no Kuri Ochi Taiko Nikki",
        "cover": "https://telegra.ph/file/991361d281766c89e8546.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5007"
    },
    {
        "IDcode": 5008,
        "title": "牛娘小姐 [Nise] Ushi no Oneesan",
        "cover": "https://telegra.ph/file/049f2b29a9ef0d2dcbdb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5008"
    },
    {
        "IDcode": 5009,
        "title": "[RA.in] 奴隶少女的励志人生",
        "cover": "https://telegra.ph/file/ef9f909e07488df6865fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5009"
    },
    {
        "IDcode": 5010,
        "title": "[Ichijikushirabe Shiki (Shirabe Shiki)] Teikyuu Zako Inma no Shokushu ga Fukai nanode Kankaku Shadan Mahou o Tenkai Shimashita wa!!  [Entiendio汉化,风间仁重嵌] [Decensored]",
        "cover": "https://telegra.ph/file/4e486366021fc8e4e80c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5010"
    },
    {
        "IDcode": 5011,
        "title": "秘密阴核锻炼 [Milknium Family] Clitoris no Himitsu Tanren Massage",
        "cover": "https://telegra.ph/file/3091e4651ac8dab0a4c8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5011"
    },
    {
        "IDcode": 5012,
        "title": "调教少女达到绝顶 [no name] Choukyou Shoujo Clitoris Renzoku Zecchou",
        "cover": "https://telegra.ph/file/9c5b455c2b82035b02e69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5012"
    },
    {
        "IDcode": 5013,
        "title": "DID部 VS BDSM部 部落争夺战 [ura_macoto] DID club VS BDSM club・club room battle (DID part) [起落委托|阿卡姆汉化]",
        "cover": "https://telegra.ph/file/e4a74eb80dcdf13019bf9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5013"
    },
    {
        "IDcode": 5014,
        "title": "新机测试员 阿慈谷日步美 2 [The-Notes (E-Note)] Machine Tester Ajitani Hifumi 2 (Blue Archive)  [Digital]",
        "cover": "https://telegra.ph/file/5c0c9d221571cd40c53a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5014"
    },
    {
        "IDcode": 5015,
        "title": "[すたじお寿司くいねぇ (琴島もとき)] 蠱惑の霧 (ブルーアーカイブ)  [DL版] - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEQGFFoqzA5y1Kro_InSftvgojRrfsVjwACPh8AAktRWVXMghuidJh8ijYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5015"
    },
    {
        "IDcode": 5016,
        "title": "[茜しゅうへい堂 (茜しゅうへい)] 女学園長春麗、総集編 (ストリートファイター) [DL版][考古學家漢化] - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEQF69oqyXJLiI67aW4Eb0st1aqBOnXNgACkh4AAktRWVW7Rtq7e7PP_zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5016"
    },
    {
        "IDcode": 5017,
        "title": "(C105) [さらさらちゃづけ (さちゃ)] ニヤニヤ教授に理解らせ (られ) たい (ブルーアーカイブ)  - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEQFzZoqwvK6OsMizwaKIYwHPaxxJw4_wACuh0AAktRWVVNLo3j0DZ8ZDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5017"
    },
    {
        "IDcode": 5018,
        "title": "长途绿皮火车",
        "cover": "https://telegra.ph/file/3a27d222015a4f6cd1413.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5018"
    },
    {
        "IDcode": 5019,
        "title": "普段とは少し違うミミックを発見したフリーレン (葬送のフリーレン)  - Page 1",
        "cover": "https://telegra.ph/file/ee1677474be4171f42786.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5019"
    },
    {
        "IDcode": 5020,
        "title": "[Grand Plié. (Erohamu)] Chikubi Batsu 乳头惩罚",
        "cover": "https://telegra.ph/file/ec94e58accfba874f5c81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5020"
    },
    {
        "IDcode": 5021,
        "title": "(C92) 廃墟と無邪気の小画集",
        "cover": "https://telegra.ph/file/fc94f32ed099c9f9d7644.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5021"
    },
    {
        "IDcode": 5022,
        "title": "(C95) たいにーいーびるちゃんず! 1 無邪気で残酷な少女たちのえっちな短編集",
        "cover": "https://telegra.ph/file/62193653132a25fc55fc3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5022"
    },
    {
        "IDcode": 5023,
        "title": "(C96) たいにーいーびるちゃんず! 2 無邪気で残酷な少女たちのえっちな短編集",
        "cover": "https://telegra.ph/file/d75057f00349e6d889f8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5023"
    },
    {
        "IDcode": 5024,
        "title": "(C97) MUK's LOLIWORKS 2019 AUTUMN-WINTER 無邪気と性遊戯の天国絵図 せっくすごっこ",
        "cover": "https://telegra.ph/file/b4767f4d732d650b00fee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5024"
    },
    {
        "IDcode": 5025,
        "title": "[2015.07] Tiny Evil 1",
        "cover": "https://telegra.ph/file/cd5607815451ac135d7d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5025"
    },
    {
        "IDcode": 5026,
        "title": "[2016.09] Tiny Evil 2",
        "cover": "https://telegra.ph/file/d82f0ee5154eb9e0b599b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5026"
    },
    {
        "IDcode": 5027,
        "title": "[2017.12] Tiny Evil 3",
        "cover": "https://telegra.ph/file/d1000f89a792902f844bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5027"
    },
    {
        "IDcode": 5028,
        "title": "[2018.09] Tiny Evil 4",
        "cover": "https://telegra.ph/file/aa1674eff592cf23bebe3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5028"
    },
    {
        "IDcode": 5029,
        "title": "[2022.05] Tiny Evil 5",
        "cover": "https://telegra.ph/file/b15dd08cc0cf9fc1bc79d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5029"
    },
    {
        "IDcode": 5030,
        "title": "[PIXIV] オトコ☆遊び☆ちゃんねる MEN☆PLAY☆CHANNEL 1-6 [沒有漢化]",
        "cover": "https://telegra.ph/file/0c01ae2c03d9383eff16f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5030"
    },
    {
        "IDcode": 5031,
        "title": "[16.01] キュピプリ -Cupid Princesses- (二次元コミックマガジン 悪堕ち逆レイプで悶絶快楽! Vol.3)",
        "cover": "https://telegra.ph/file/12c435f444358894839c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5031"
    },
    {
        "IDcode": 5032,
        "title": "[16.05] Little Titan (Girls for M Vol.12)",
        "cover": "https://telegra.ph/file/fc60c2d17d5fc6f7c49e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5032"
    },
    {
        "IDcode": 5033,
        "title": "[19.06] Tiny Titan オトコノコ飼育係! (Girls for M Vol.19) [沒有漢化]",
        "cover": "https://telegra.ph/file/269a5de44040c27f76b5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5033"
    },
    {
        "IDcode": 5034,
        "title": "杂 (ex-hentai 19P 截止2022.03.27)",
        "cover": "https://telegra.ph/file/99ff5199138109b5a8893.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5034"
    },
    {
        "IDcode": 5035,
        "title": "JSのゆめかわ監禁♥ [日本語]",
        "cover": "https://telegra.ph/file/c382c70445b2fadd152a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5035"
    },
    {
        "IDcode": 5036,
        "title": "萌え袖がぶがぶ MOESODE bite",
        "cover": "https://telegra.ph/file/97d3795eb051788856b9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5036"
    },
    {
        "IDcode": 5037,
        "title": "えっちスケッチ『駄菓子と少女』",
        "cover": "https://telegra.ph/file/3f042b0ab8292bdd21ae4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5037"
    },
    {
        "IDcode": 5038,
        "title": "おしっこいじめ Pee Pee Bullying",
        "cover": "https://telegra.ph/file/516d0c4e660d0dd5776b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5038"
    },
    {
        "IDcode": 5039,
        "title": "ノンストップ・オナホ nonstop hole",
        "cover": "https://telegra.ph/file/861485428422018fb04cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5039"
    },
    {
        "IDcode": 5040,
        "title": "ロリ甘ちゅっちゅ Sweet Kisses with loli",
        "cover": "https://telegra.ph/file/939045d97306ca4ca5340.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5040"
    },
    {
        "IDcode": 5041,
        "title": "夏コミ申込完了！ Comiket 100 signed up!",
        "cover": "https://telegra.ph/file/8da60039572f964d6b180.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5041"
    },
    {
        "IDcode": 5042,
        "title": "女児と団地とパンツ",
        "cover": "https://telegra.ph/file/0fe30d3b8c0db8e7fa29c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5042"
    },
    {
        "IDcode": 5043,
        "title": "JS淫魔の物理的マウント",
        "cover": "https://telegra.ph/file/ab864c53e34b88ef151d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5043"
    },
    {
        "IDcode": 5044,
        "title": "萌袖ま○こ【Twitter凍結！】",
        "cover": "https://telegra.ph/file/b78f864470c59ce549e82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5044"
    },
    {
        "IDcode": 5045,
        "title": "(C89) いろはすと! (やはり俺の青春ラブコメはまちがっている。)",
        "cover": "https://telegra.ph/file/9ea422ab86a4c3f096090.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5045"
    },
    {
        "IDcode": 5046,
        "title": "(C92) やはり俺は一色いろはの掌上で踊りつづける。(やはり俺の青春ラブコメはまちがっている。)",
        "cover": "https://telegra.ph/file/15e1399a44eea90782fe8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5046"
    },
    {
        "IDcode": 5047,
        "title": "(C93) ゆきのひ。(やはり俺の青春ラブコメはまちがっている。)",
        "cover": "https://telegra.ph/file/b9c455898fbd70cccef95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5047"
    },
    {
        "IDcode": 5048,
        "title": "(C96) おはようございます、せんぱい! (やはり俺の青春ラブコメはまちがっている。)",
        "cover": "https://telegra.ph/file/b8d107b60243e2fa2c271.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5048"
    },
    {
        "IDcode": 5049,
        "title": "(サンクリ2017 Winter) がまんして、ほしがって。(やはり俺の青春ラブコメはまちがっている。)",
        "cover": "https://telegra.ph/file/645b8713b206b8a9aa7e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5049"
    },
    {
        "IDcode": 5050,
        "title": "[18.09] 甲子園はおいといて (COMIC アンスリウム 2018年9月号)",
        "cover": "https://telegra.ph/file/63011563c4d39fe89d8be.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5050"
    },
    {
        "IDcode": 5051,
        "title": "(C97) [林檎のなる木 (木瀬 樹)] Kud After3 (リトルバスターズ!)",
        "cover": "https://telegra.ph/file/d5b02b4f4e78187eea500.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5051"
    },
    {
        "IDcode": 5052,
        "title": "(C97) [林檎のなる木 (木瀬 樹)] クドがわんちゃんになって好きにされちゃう本 (リトルバスターズ!)",
        "cover": "https://telegra.ph/file/f3b58076a0589c177cf6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5052"
    },
    {
        "IDcode": 5053,
        "title": "(COMIC1 BS祭 スペシャル) [林檎のなる木 (木瀬樹)] お兄ちゃんイリヤとしよ？ (Fate kaleid liner プリズマ☆イリヤ)",
        "cover": "https://telegra.ph/file/222b27cf7434febeae2c4.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5053"
    },
    {
        "IDcode": 5054,
        "title": "(COMIC1☆17) [林檎のなる木 (木瀬樹)] Kud After4 (リトルバスターズ!)",
        "cover": "https://telegra.ph/file/f55701622eb22df6d74a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5054"
    },
    {
        "IDcode": 5055,
        "title": "(Key Island) [林檎のなるき (木瀬 樹)] Kud After (リトルバスターズ!)",
        "cover": "https://telegra.ph/file/2c024713113d81d1d8913.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5055"
    },
    {
        "IDcode": 5056,
        "title": "(Key Island) [林檎のなるき (木瀬 樹)] Kud After2 (リトルバスターズ!)",
        "cover": "https://telegra.ph/file/73194f1d31e1daf8f6e8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5056"
    },
    {
        "IDcode": 5057,
        "title": "(コミティア140) [林檎のなる木 (木瀬樹)] 知りたくなかった",
        "cover": "https://telegra.ph/file/3ef23fb4804101912ac07.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5057"
    },
    {
        "IDcode": 5058,
        "title": "(こみトレ38) [林檎のなる木 (木瀬樹)] 金曜日は会いにゆきマシュ (Fate Grand Order)",
        "cover": "https://telegra.ph/file/dac36cee98550bdf185f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5058"
    },
    {
        "IDcode": 5059,
        "title": "[木瀬樹] (G-エッヂ Vol.014) 負けるな絶倫先生!",
        "cover": "https://telegra.ph/file/396b8879f2d06812f69d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5059"
    },
    {
        "IDcode": 5060,
        "title": "[木瀬樹] (WEEKLY快楽天 2021 No.38) アイドル・プランニング",
        "cover": "https://telegra.ph/file/120be3f5fc85f2a70231a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5060"
    },
    {
        "IDcode": 5061,
        "title": "[木瀬樹] (WEEKLY快楽天 2022 No.09) 麦の恩返し",
        "cover": "https://telegra.ph/file/33ccdd1de65c9ae649ae5.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5061"
    },
    {
        "IDcode": 5062,
        "title": "(C99) [とっとこSたろう (MだSたろう)] トクイテンLR (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ac554d63c8d064960ac95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5062"
    },
    {
        "IDcode": 5063,
        "title": "(同人CG集) [MだSたろう] アーケードロリンチちゃん (Fate Grand Order) [三倍券拿去買2060的洨五組]",
        "cover": "https://telegra.ph/file/ad4d13e9f0fc735f9ef78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5063"
    },
    {
        "IDcode": 5064,
        "title": "[16-03-09] [とっとこMたろう (MだSたろう)] Strength and ～END～ (BLACK★ROCK SHOOTER) [kun汉化&加了些插图版] [120p]",
        "cover": "https://telegra.ph/file/e5f6c7d21103bbc98753d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5064"
    },
    {
        "IDcode": 5065,
        "title": "[17-08-14] [とっとこMたろう (MだSたろう)] Strength and II (BLACK★ROCK SHOOTER)",
        "cover": "https://telegra.ph/file/1fdfe57e9ff66b2855e63.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5065"
    },
    {
        "IDcode": 5066,
        "title": "[19-03-17] [とっとこMたろう (MだSたろう)] Strength and III (BLACK★ROCK SHOOTER)",
        "cover": "https://telegra.ph/file/12893fc02f056252c006f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5066"
    },
    {
        "IDcode": 5067,
        "title": "[MだSたろう] (COMIC BAVEL 2017年06月号) 奴隷エリミア [MJK-17-Z573]",
        "cover": "https://telegra.ph/file/dec8f6c196dac939213b8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5067"
    },
    {
        "IDcode": 5068,
        "title": "[とっとこSたろう (MだSたろう)]\\[MだSたろう] (COMIC BAVEL 2018年03月号) 子狐ギン [MJK-18-Z990]",
        "cover": "https://telegra.ph/file/00d2193ed40f579e49e42.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5068"
    },
    {
        "IDcode": 5069,
        "title": "[MだSたろう] (COMIC BAVEL 2018年09月号) 新人後輩キリコさん [MJK-18-Z1397]",
        "cover": "https://telegra.ph/file/1c0cff3c3560606c5e018.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5069"
    },
    {
        "IDcode": 5070,
        "title": "[MだSたろう] (COMIC X-EROS #23) 夏色のルリ",
        "cover": "https://telegra.ph/file/8189e5674869d696af7d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5070"
    },
    {
        "IDcode": 5071,
        "title": "[MだSたろう] (COMIC X-EROS #50) サキュ道 [MJK-17-Z442]",
        "cover": "https://telegra.ph/file/70350d7ac8a7ec2356db6.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5071"
    },
    {
        "IDcode": 5072,
        "title": "[MだSたろう] (COMIC X-EROS #67) アマゾネスはいた！ [MJK-18-Z1126]",
        "cover": "https://telegra.ph/file/b22af99c6c2e4a9bd2a72.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5072"
    },
    {
        "IDcode": 5073,
        "title": "(C83) [774ハウス (774)] 裸姫穂乃火 絶頂覚醒豚交尾",
        "cover": "https://telegra.ph/file/cb58fbe2b09f825599f26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5073"
    },
    {
        "IDcode": 5074,
        "title": "(C84) [774ハウス (774)] 鈴香様の下僕",
        "cover": "https://telegra.ph/file/710a54949041444751c27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5074"
    },
    {
        "IDcode": 5075,
        "title": "(C85) [774ハウス (774)] 深海棲艦化艦娘レポート (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/1172e5d9a3ab56d16ff21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5075"
    },
    {
        "IDcode": 5076,
        "title": "(C86) [774ハウス (774)] 裸姫穂乃火2 見世物種付猿交尾",
        "cover": "https://telegra.ph/file/b2ee7d5ff01adf0e80aae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5076"
    },
    {
        "IDcode": 5077,
        "title": "(C87) [774ハウス (774)] 市立見○原○学3年生 巴○ミ 変態AVデビュー (魔法少女まどか☆マギカ)",
        "cover": "https://telegra.ph/file/fe8c3c3f219d10191c790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5077"
    },
    {
        "IDcode": 5078,
        "title": "(C88) [774ハウス (774)] あったかうずまき (NARUTO -ナルト-) [某光年の漢化组]",
        "cover": "https://telegra.ph/file/fc1e57df9a0c84a0349fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5078"
    },
    {
        "IDcode": 5079,
        "title": "(C89) [774ハウス (774)] あったかうずまき 2 (NARUTO -ナルト-) [沒有漢化]",
        "cover": "https://telegra.ph/file/dc3414ebd15e05453023a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5079"
    },
    {
        "IDcode": 5080,
        "title": "(C90) [774ハウス (774)] 市立見○原○学3年生 爆乳便女巴○ミ (魔法少女まどか☆マギカ) [沒有漢化]",
        "cover": "https://telegra.ph/file/117f565ea68964cd4c11a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5080"
    },
    {
        "IDcode": 5081,
        "title": "(C90) [774ハウス (774)] -私の冒険日記- [沒有漢化]",
        "cover": "https://telegra.ph/file/6d983ea86c035becfd7b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5081"
    },
    {
        "IDcode": 5082,
        "title": "(C91) [774ハウス (774)] C91会場限定本 (Fatekaleid liner プリズマ☆イリヤ) [沒有漢化]",
        "cover": "https://telegra.ph/file/a6caeb84f15860af406e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5082"
    },
    {
        "IDcode": 5083,
        "title": "(C91) [774ハウス (774)] 裸姫穂乃火参巨大雄豚vs超能力少女! [沒有漢化]",
        "cover": "https://telegra.ph/file/ced9a2e73c1c5c0de1faf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5083"
    },
    {
        "IDcode": 5084,
        "title": "(C92) [774ハウス (774)] 委員長はすっぽんぽん [沒有漢化]",
        "cover": "https://telegra.ph/file/508b80ed6686ed8c04749.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5084"
    },
    {
        "IDcode": 5085,
        "title": "(C93) [774ハウス (774)] ヒナとスミレの変態おっぱい冒険日記 [沒有漢化]",
        "cover": "https://telegra.ph/file/833ebe36de8c41216fa33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5085"
    },
    {
        "IDcode": 5086,
        "title": "[774] ユピエル様との日常 (永遠娘 2)",
        "cover": "https://telegra.ph/file/16cf912f1fed729f25331.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5086"
    },
    {
        "IDcode": 5087,
        "title": "[774] ユピエル様の下僕 (永遠娘 壱) [沒有漢化]",
        "cover": "https://telegra.ph/file/c5b82c1102a4fdd35eb6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5087"
    },
    {
        "IDcode": 5088,
        "title": "[774ハウス (774)] イジらないで、長瀞さん",
        "cover": "https://telegra.ph/file/d760c74f9719e966e425e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5088"
    },
    {
        "IDcode": 5089,
        "title": "(C80) [こーひーめーかー (TEL)] フタマリ☆ (東方Project)",
        "cover": "https://telegra.ph/file/9645e009d7521702cb696.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5089"
    },
    {
        "IDcode": 5090,
        "title": "[あいらんどう] 幼馴染は引きこもり (COMIC LO 2022年9月号)",
        "cover": "https://telegra.ph/file/849078bb645950a9bb1b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5090"
    },
    {
        "IDcode": 5091,
        "title": "[あいらんどう] メスっこ女将わからせ取材記録",
        "cover": "https://telegra.ph/file/6912ff65e72a3ab436f73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5091"
    },
    {
        "IDcode": 5092,
        "title": "[あいらんどう] 妹はムズかしいお年頃 (COMIC LO 2022年5月号)",
        "cover": "https://telegra.ph/file/cf396778da7b57bea1101.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5092"
    },
    {
        "IDcode": 5093,
        "title": "[あいらんどう]ツンデレ妹との日常 | 與傲嬌妹妹的日常",
        "cover": "https://telegra.ph/file/b9606e9e9295bf56b693d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5093"
    },
    {
        "IDcode": 5094,
        "title": "[あいらんどう] 妹とノリでエッチした件 その後 (COMIC LO 2022年6月号)",
        "cover": "https://telegra.ph/file/5c9123b2d8f336017570c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5094"
    },
    {
        "IDcode": 5095,
        "title": "[あいらんどう] 生意気な妹をオトす方法",
        "cover": "https://telegra.ph/file/04c1dd803befda0b67836.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5095"
    },
    {
        "IDcode": 5096,
        "title": "2018_まい_すうぃーと♡でびる_未來數位_eve个人拼接版_无修正",
        "cover": "https://telegra.ph/file/165686c3f9d830d972d14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5096"
    },
    {
        "IDcode": 5097,
        "title": "からじしぼたん_牡丹もちと_2017_学校でイこう！_酒歌&eve二次重嵌_無修正",
        "cover": "https://telegra.ph/file/5bdf54cd32940402a008e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5097"
    },
    {
        "IDcode": 5098,
        "title": "[洨五組] [DATE] 同居する粘液 第1-11話",
        "cover": "https://telegra.ph/file/d2256f806d88c149a2994.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5098"
    },
    {
        "IDcode": 5099,
        "title": "[大鸟可不敢乱转汉化] [だにまるstudio (だにまる)] 酔った後輩が素直になるまで",
        "cover": "https://telegra.ph/file/55f0d4f3f7574050b2b1f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5099"
    },
    {
        "IDcode": 5100,
        "title": "[大鸟可不敢乱转汉化] [さいおがうま] ほっとらびっと (COMIC 快楽天ビースト 2022年11月号)",
        "cover": "https://telegra.ph/file/5f04ae747040fdb7b361f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=5100"
    }
];
