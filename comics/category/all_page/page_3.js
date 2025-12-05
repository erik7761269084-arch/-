// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 201,
        "title": "[西崎えいむ] 推し絵師と初体験 (BugBug 2021年4月号)",
        "cover": "https://telegra.ph/file/4060c2f100cdfa2778a78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=201"
    },
    {
        "IDcode": 202,
        "title": "[Pixiv] 雪绵豆沙 (Mr.大Bean) (71945247)",
        "cover": "https://telegra.ph/file/eafd26ae76440137c1f2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=202"
    },
    {
        "IDcode": 203,
        "title": "[七ツ田] 囚われのおひめさま (COMIC 快楽天 2020年11月号)",
        "cover": "https://telegra.ph/file/cc836081d453ab4eadabb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=203"
    },
    {
        "IDcode": 204,
        "title": "[不可不可 (関谷あさみ)] マヨナカ侵略者",
        "cover": "https://telegra.ph/file/6d0cc0877ef30d393bfdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=204"
    },
    {
        "IDcode": 205,
        "title": "[ratatatat74] 04/2022 reward  with 05 Extra [中译] [大明个人汉化]",
        "cover": "https://telegra.ph/file/bcc6f7013480ec898440b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=205"
    },
    {
        "IDcode": 206,
        "title": "[かるきやカンパニー (かるきや)] アヘ顔牝豚奴隷雪堕とし計画 (宇宙戦艦ヤマト2199)",
        "cover": "https://telegra.ph/file/a6cdc8d774184cca17f84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=206"
    },
    {
        "IDcode": 207,
        "title": "[TWILIGHT DUSK (藍夜)] 駆け落ち少女寝取られ～完結編～",
        "cover": "https://telegra.ph/file/64059096ee8f99e71f4e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=207"
    },
    {
        "IDcode": 208,
        "title": "[研そうげん] better than sex vol.4 (COMIC アンスリウム 2022年5月号)",
        "cover": "https://telegra.ph/file/6d0203791ed170bf20e0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=208"
    },
    {
        "IDcode": 209,
        "title": "[くろはると] 肉食ウサギ先生 (コミック・マショウ 2017年6月号)",
        "cover": "https://telegra.ph/file/ac1cbdf2a530b84a3930e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=209"
    },
    {
        "IDcode": 210,
        "title": "[ie] ほほえましい夫婦",
        "cover": "https://telegra.ph/file/756bd575182e0f86d343c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=210"
    },
    {
        "IDcode": 211,
        "title": "[MMU2000 (みしまひろじ)] NPC&MOBs コピー誌12p（2022年）(少女前線)",
        "cover": "https://telegra.ph/file/eea4d8a100dd8ef1f235d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=211"
    },
    {
        "IDcode": 212,
        "title": "[左藤空気] 詩乃ちゃんねる～彼氏持ち文学JK浮気録～Part.1-12",
        "cover": "https://telegra.ph/file/0c16c446999c587c30012.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=212"
    },
    {
        "IDcode": 213,
        "title": "Beidou by how ［Pixiv Fanbox］",
        "cover": "https://telegra.ph/file/f99bc2f8031a33c72c35e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=213"
    },
    {
        "IDcode": 214,
        "title": "[夕鍋進行中 (田辺京)] 恍惚の騎士 Elfina 外伝",
        "cover": "https://telegra.ph/file/ab27d2942687b093d8c20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=214"
    },
    {
        "IDcode": 215,
        "title": "[ドラチェフ] ドスケベホットパンツ平安未亡人黒人竿役七番勝負❤③-⑤ (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/da971b747f9ab0c5f190a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=215"
    },
    {
        "IDcode": 216,
        "title": "[remora] 訓練後にイチャイチャ (原神)",
        "cover": "https://telegra.ph/file/17af6e13b7e56a92172b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=216"
    },
    {
        "IDcode": 217,
        "title": "[Lithium] 元カノしぇありんぐ (COMIC 高 2017年5月号)",
        "cover": "https://telegra.ph/file/0f7c6a484020ac0b96ecc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=217"
    },
    {
        "IDcode": 218,
        "title": "[18マスター] 親父の再婚相手であり僕の母であり僕の彼女",
        "cover": "https://telegra.ph/file/b4edb2911fa5534ded7ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=218"
    },
    {
        "IDcode": 219,
        "title": "[MC (マフェン)] 男に奉仕するのが女の幸福という田舎町で過ごすヤりたい放題ヤりまくりな夏休み",
        "cover": "https://telegra.ph/file/6087ca0b5945aec46177b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=219"
    },
    {
        "IDcode": 220,
        "title": "[まめぞう] やったらやるだけくせになる (COMIC LO 2022年5月号)",
        "cover": "https://telegra.ph/file/525f737566429b4ca6f7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=220"
    },
    {
        "IDcode": 221,
        "title": "(C97) [スタジオひとりぼっち (綾城大福)] ぷにきょがくえん",
        "cover": "https://telegra.ph/file/acd9b1978cc0f910a988a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=221"
    },
    {
        "IDcode": 222,
        "title": "[EBA] ラブホイール 最終話 (COMIC アンスリウム 2022年5月号)",
        "cover": "https://telegra.ph/file/920334d183312ccc76390.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=222"
    },
    {
        "IDcode": 223,
        "title": "[栗原ケンシロウ] 先輩の可愛いところ (コミック エグゼ 28)",
        "cover": "https://telegra.ph/file/a0e3324037b73358e00bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=223"
    },
    {
        "IDcode": 224,
        "title": "[黒澤pict (黒澤ユリ)] 制服触手18",
        "cover": "https://telegra.ph/file/3187ca3d193b6d0889b11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=224"
    },
    {
        "IDcode": 225,
        "title": "(秋季例大祭8) [てこめんち (てち)] パチュリー・ノーレッジ快発記録II (東方Project)",
        "cover": "https://telegra.ph/file/d7b05e3d084f40c1cd623.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=225"
    },
    {
        "IDcode": 226,
        "title": "[ドラチェフ] 彼女の金髪ママがスケベ過ぎる件 (交尾のお時間)",
        "cover": "https://telegra.ph/file/c282574c44e2388239da4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=226"
    },
    {
        "IDcode": 227,
        "title": "[中村カンコ] イキしょん! (COMIC LO 2017年4月号)",
        "cover": "https://telegra.ph/file/4bd1b2b51ce6c9a22da34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=227"
    },
    {
        "IDcode": 228,
        "title": "[俵太] ヴァジラちゃんと親密になる漫画 (グランブルーファンタジー)",
        "cover": "https://telegra.ph/file/f368e9091842f3e98c78a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=228"
    },
    {
        "IDcode": 229,
        "title": "[ワールドオブピュア (ネゴム)] 甘雨とえっちがしたい! (原神)",
        "cover": "https://telegra.ph/file/d76d38359839ce64e2564.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=229"
    },
    {
        "IDcode": 230,
        "title": "(C93) [ワッフル同盟犬 (田中竕)] この素晴らしい女神達と3Pを! (この素晴らしい世界に祝福を!)",
        "cover": "https://telegra.ph/file/b5f43f6ce8028a0d11be4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=230"
    },
    {
        "IDcode": 231,
        "title": "[MC (影斬)] 本日、性交課に異動になりました。",
        "cover": "https://telegra.ph/file/4ea3408ce3f7d07e98c95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=231"
    },
    {
        "IDcode": 232,
        "title": "[さーくるスパイス] 未亡人の母・小夜子～四畳半に住む親子の交尾記録～",
        "cover": "https://telegra.ph/file/1be491d8b1a61b3558e6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=232"
    },
    {
        "IDcode": 233,
        "title": "(C99) [毛玉牛乳 (玉之けだま)] C99おまけ本 すとらサンタとあそぼう！",
        "cover": "https://telegra.ph/file/e9fff9f330f55b1eb2811.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=233"
    },
    {
        "IDcode": 234,
        "title": "(C94) [またたび参上 (HaRu)] ヒガンバナさんの水着姿が見たいんです (フラワーナイトガール)",
        "cover": "https://telegra.ph/file/447976915be84139d8be3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=234"
    },
    {
        "IDcode": 235,
        "title": "[Noise] Reversi (じぇーえす☆じぇーしー)  [ページ欠落]",
        "cover": "https://telegra.ph/file/4899542a756c776d5f444.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=235"
    },
    {
        "IDcode": 236,
        "title": "[九門りお] ごめんね、お姉ちゃん 先生のSEX人形になります…",
        "cover": "https://telegra.ph/file/2e0d22fb07ca0415bb56c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=236"
    },
    {
        "IDcode": 237,
        "title": "[NYPAON] 合格祝いの筆おろし交尾でキンタマ空っぽにしてくれる爆乳義姉",
        "cover": "https://telegra.ph/file/eeee091096efe830bacfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=237"
    },
    {
        "IDcode": 238,
        "title": "[江森うき] 叔母ちゃんの腋と…特別編 (近親相愛)",
        "cover": "https://telegra.ph/file/60db298538d48bd19ae27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=238"
    },
    {
        "IDcode": 239,
        "title": "[BlossomSphere (桜湯ハル)] 永遠亭射精外来 (東方Project)",
        "cover": "https://telegra.ph/file/e04d9149d12bab1cffca3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=239"
    },
    {
        "IDcode": 240,
        "title": "[ドラチェフ] 格安物件♥サキュバス付き (コミックホットミルク 2020年12月号)",
        "cover": "https://telegra.ph/file/c42585661c978992142f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=240"
    },
    {
        "IDcode": 241,
        "title": "[ハメドラゴン] 樋口円香コレクション (アイドルマスターシャイニーカラーズ)",
        "cover": "https://telegra.ph/file/43a5cf7bb83b782a2ef59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=241"
    },
    {
        "IDcode": 242,
        "title": "[御姉狂 (ML)] 悪いギャルに捕まった その後",
        "cover": "https://telegra.ph/file/bcd761d660c2de6cafda7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=242"
    },
    {
        "IDcode": 243,
        "title": "[うのせろ] 悪魔と奴隷契約 (ダンジョン攻略はSEXで!! VOL.4)",
        "cover": "https://telegra.ph/file/bb28dbf9fcd23cb1ddd8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=243"
    },
    {
        "IDcode": 244,
        "title": "[ie] 朝勃ち病で入院しました",
        "cover": "https://telegra.ph/file/a0dfb7c67a5e8324f876c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=244"
    },
    {
        "IDcode": 245,
        "title": "[おりんぜ] 刻晴ちゃんに土下座してえっちお願いしたい (原神)",
        "cover": "https://telegra.ph/file/9e2fcc408de048ddc90d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=245"
    },
    {
        "IDcode": 246,
        "title": "[おりんぜ] 申鶴 (原神)",
        "cover": "https://telegra.ph/file/046b461f04b5d3f53da89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=246"
    },
    {
        "IDcode": 247,
        "title": "[Moo] シデロカに捕まってしまった時の妄想絵 (アークナイツ)",
        "cover": "https://telegra.ph/file/6cf43e6b6e67a8ac83876.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=247"
    },
    {
        "IDcode": 248,
        "title": "[どじろーブックス (どじろー)]「とりあえず生で!」+Girl's Side",
        "cover": "https://telegra.ph/file/7e8e2f16bec45d4c37e8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=248"
    },
    {
        "IDcode": 249,
        "title": "[mogg] 地球で一番暑い日 (COMIC 快楽天 2022年4月号)",
        "cover": "https://telegra.ph/file/76ceefa7a3c4c714b0e79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=249"
    },
    {
        "IDcode": 250,
        "title": "[越後屋タケル] お金ダイスキ！女体化バイト おつかい編 (女体化天国)",
        "cover": "https://telegra.ph/file/9d313a1201d95d20d4284.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=250"
    },
    {
        "IDcode": 251,
        "title": "[はーふまいる (やおまい)] EROTIC VACATION (閃乱カグラ)",
        "cover": "https://telegra.ph/file/5d820f4d552665388dff1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=251"
    },
    {
        "IDcode": 252,
        "title": "[菜さん] 便器セレスティン (黒獣～気高き聖女は白濁に染まる～)",
        "cover": "https://telegra.ph/file/716570e5cc4a0d0212c85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=252"
    },
    {
        "IDcode": 253,
        "title": "[紅涙] サキュバスの開花 (異世快楽天 Vol.1)",
        "cover": "https://telegra.ph/file/637771becafee23ddb574.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=253"
    },
    {
        "IDcode": 254,
        "title": "[Hamao] この後どうします? (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/3a55102f400b654cd6657.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=254"
    },
    {
        "IDcode": 255,
        "title": "[唄飛鳥] 慟哭の檻 第1話 (コミックホットミルク 2020年6月号)",
        "cover": "https://telegra.ph/file/89f72596945413cc9b07c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=255"
    },
    {
        "IDcode": 256,
        "title": "(C99) [Number2 (たくじ)] パパ活パコリーヌ! (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/262afac03ec77ad2ff386.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=256"
    },
    {
        "IDcode": 257,
        "title": "[野際かえで] わるいこ 前編 (COMIC LO 2021年12月号)",
        "cover": "https://telegra.ph/file/f57d5b5f09d9e2fd8391f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=257"
    },
    {
        "IDcode": 258,
        "title": "(C99) [ケダモノ屋さん (真っ赤なケダモノ)] Connect with you (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/b6bb9e4b8b70107be33e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=258"
    },
    {
        "IDcode": 259,
        "title": "[ふわとろおぱんちゅケーキ] 夜這いから始まる母と息子の夫婦生活",
        "cover": "https://telegra.ph/file/cf4136e3c23e3b66fab58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=259"
    },
    {
        "IDcode": 260,
        "title": "[唄飛鳥] 慟哭の檻 第3話 (コミックホットミルク 2020年8月号)",
        "cover": "https://telegra.ph/file/8cf1727bfc1f0e76394fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=260"
    },
    {
        "IDcode": 261,
        "title": "[青木幹治] 法的に問題ない姉との関係 (コミックグレープ Vol.100)",
        "cover": "https://telegra.ph/file/816f8424abe0b22ab4abe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=261"
    },
    {
        "IDcode": 262,
        "title": "[草野郎] スレイブボール洗脳～スイレン&アシマリ編～ (ポケットモンスター サン・ムーン)",
        "cover": "https://telegra.ph/file/1ba743033eb02df5ab581.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=262"
    },
    {
        "IDcode": 263,
        "title": "[シオマネキ] あぶない挑発 (アクションピザッツ 2022年6月号)",
        "cover": "https://telegra.ph/file/c69bc3c8383d2606cd921.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=263"
    },
    {
        "IDcode": 264,
        "title": "[菜さん] 一之瀬アスナ (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/677fe89bdf9cfccf81ef1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=264"
    },
    {
        "IDcode": 265,
        "title": "[prhs]あの夏のかげろう1巻[CHINESE]",
        "cover": "https://telegra.ph/file/c69259a794ded804714d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=265"
    },
    {
        "IDcode": 266,
        "title": "[DAMDA] 治療タイム (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/358f2f676582afb1311a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=266"
    },
    {
        "IDcode": 267,
        "title": "[あんこまん] ラムダリリス、太歳星君とはんなまする (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/caa01e49cd295a9f93a96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=267"
    },
    {
        "IDcode": 268,
        "title": "[ベコ太郎] 恋するダブルドリブル (COMIC 快楽天ビースト 2022年5月号)",
        "cover": "https://telegra.ph/file/0dd10e89e494d888d5579.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=268"
    },
    {
        "IDcode": 269,
        "title": "[いづも合衆国 (ももも合衆国)] ふたなりイケメン女の子ちんぽにメロメロ即堕ち巨乳女の子ちゃん",
        "cover": "https://telegra.ph/file/ebbf403b825fa30e57b1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=269"
    },
    {
        "IDcode": 270,
        "title": "(C99) [海通信 (なまもななせ)] 時を止めて強制種付け",
        "cover": "https://telegra.ph/file/6c018956fa566aeafcfd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=270"
    },
    {
        "IDcode": 271,
        "title": "[JJ.JJ] Fubuki Anal Expansion",
        "cover": "https://telegra.ph/file/2fff4310ddedbdc504733.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=271"
    },
    {
        "IDcode": 272,
        "title": "[火鸡] ル・マランの休日 (アズールレーン)",
        "cover": "https://telegra.ph/file/490ad2aea23e72366ac18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=272"
    },
    {
        "IDcode": 273,
        "title": "[ぴよぴよ] 橘さんは優しくて… (コミックゼロス #61)",
        "cover": "https://telegra.ph/file/e7cef1b06b76e0757c06b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=273"
    },
    {
        "IDcode": 274,
        "title": "(C85) [SHRINE (人丸)] 幻想生物図鑑 12(獣弐) [幻想生物图鉴吧汉化]",
        "cover": "https://telegra.ph/file/6b992245a3983c917067f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=274"
    },
    {
        "IDcode": 275,
        "title": "[DiceBomb (カジノ)] Strawberry Secret (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/3ffc3a190db3d08c3573c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=275"
    },
    {
        "IDcode": 276,
        "title": "[ぽりうれたん] 近所の女の子",
        "cover": "https://telegra.ph/file/7b0abcc9910407ec2c8d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=276"
    },
    {
        "IDcode": 277,
        "title": "[鳶村] AK-12の 進捗2 (少女前線)",
        "cover": "https://telegra.ph/file/1c7ab0603194a2a20a683.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=277"
    },
    {
        "IDcode": 278,
        "title": "[ぶたちゃんぐ] 異世界でゴブリンに犯されるやつ1.3.4(尼特子个人汉化)",
        "cover": "https://telegra.ph/file/37fec394e0b6cfda78d66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=278"
    },
    {
        "IDcode": 279,
        "title": "[海通信 (なまもななせ)] 陵辱田舎少女3",
        "cover": "https://telegra.ph/file/49461817a4768cae1c947.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=279"
    },
    {
        "IDcode": 280,
        "title": "[ro] ケモロリ魔王ベールちゃん屈服アクメ",
        "cover": "https://telegra.ph/file/85b651bfec8aa9e1331f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=280"
    },
    {
        "IDcode": 281,
        "title": "[すぱいらる] 美少女の涙は枯れ果てて",
        "cover": "https://telegra.ph/file/462a68c1ece252c6f6205.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=281"
    },
    {
        "IDcode": 282,
        "title": "[朝峰テル] 楓先生のおっぱい学習法? あふたー (COMIC BAVEL 2022年6月号)",
        "cover": "https://telegra.ph/file/611eea019f5170a0248ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=282"
    },
    {
        "IDcode": 283,
        "title": "[岩崎ユウキ] 投稿動画 (COMIC BAVEL 2022年6月号)",
        "cover": "https://telegra.ph/file/0a548e3614fb9b2c7fd5c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=283"
    },
    {
        "IDcode": 284,
        "title": "[島鵜製作所 (島鵜そりね)] 女の子が居眠りしてるふたなりお姉さんにイタズラしちゃう本",
        "cover": "https://telegra.ph/file/e99750fa68498a55ef7cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=284"
    },
    {
        "IDcode": 285,
        "title": "[唄飛鳥] 慟哭の檻 第5話 (コミックホットミルク 2021年6月号)",
        "cover": "https://telegra.ph/file/a235fbecaffb05e87f4a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=285"
    },
    {
        "IDcode": 286,
        "title": "[laliberte] BEHIND + AFTER  [Nuka個人漢化]",
        "cover": "https://telegra.ph/file/b7a9db64dbb6a28dd0426.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=286"
    },
    {
        "IDcode": 287,
        "title": "[DATE] 改変対象 最終話 (コミックアンリアル 2021年12月号 Vol.94)",
        "cover": "https://telegra.ph/file/485e64ffb47f7b1a02f54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=287"
    },
    {
        "IDcode": 288,
        "title": "[catastrophe. (ハルサワ)] あなたの親友に抱かれて2",
        "cover": "https://telegra.ph/file/f173a88f3ffc857a88fd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=288"
    },
    {
        "IDcode": 289,
        "title": "[蘭田夢] ふっとわーきんぐ 第4話 (マガジンサイベリア Vol.155)",
        "cover": "https://telegra.ph/file/b6afaf839a5db9b5e3ad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=289"
    },
    {
        "IDcode": 290,
        "title": "[コブラノヲヤツ] ゆめっち☆ナマ配信中♡ (COMIC 失楽天 2022年1月号)",
        "cover": "https://telegra.ph/file/ce9bb9acc7e3fbd378eda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=290"
    },
    {
        "IDcode": 291,
        "title": "[武田弘光] 獣魂戦隊ジュウソルジャー (戦隊司令官ママンIFストーリー（SS付きラフイラスト）) ]",
        "cover": "https://telegra.ph/file/c2fb01e237a60a11a6255.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=291"
    },
    {
        "IDcode": 292,
        "title": "[ビンビン本舗 (ガッツ師範)] 何も知らない無知姉を孕ませて俺の嫁にする話",
        "cover": "https://telegra.ph/file/0b1067756eea91daf341c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=292"
    },
    {
        "IDcode": 293,
        "title": "[アヘ丸] パチュリーさんの何気ない日常（催眠） (東方Project)  [云月长空个人汉化]",
        "cover": "https://telegra.ph/file/920b78a5da40c27e60247.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=293"
    },
    {
        "IDcode": 294,
        "title": "[あおむし] Pet Girl Zero (COMIC 失楽天 2022年2月号)",
        "cover": "https://telegra.ph/file/d551f2bbc6654f68b8180.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=294"
    },
    {
        "IDcode": 295,
        "title": "(C96) [あらと屋 (あらと安里)] まぐわい上手のシリアスさん (アズールレーン)",
        "cover": "https://telegra.ph/file/ca279d9ea8a34826c272b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=295"
    },
    {
        "IDcode": 296,
        "title": "[ココアホリック (ユイザキカズヤ)] 異世界×魔王×サキュバス",
        "cover": "https://telegra.ph/file/3e4798721934c2f7fd858.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=296"
    },
    {
        "IDcode": 297,
        "title": "[まんの] アヤカのヒメゴト♡ (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/f7cc5b99436130ab8b9da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=297"
    },
    {
        "IDcode": 298,
        "title": "[しらすどん] ドスケベ援交ギャルのナイショ性交",
        "cover": "https://telegra.ph/file/734a0701fe2fb018a0fd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=298"
    },
    {
        "IDcode": 299,
        "title": "[前島龍] 蜜と蝶 (COMIC LO 2022年1月号)",
        "cover": "https://telegra.ph/file/d15035daee1749bb91d50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=299"
    },
    {
        "IDcode": 300,
        "title": "[岩崎ユウキ] 投稿動画 (COMIC BAVEL 2022年6月号)",
        "cover": "https://telegra.ph/file/600cc7b7184f717088770.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=300"
    }
];
