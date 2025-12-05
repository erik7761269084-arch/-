// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 1001,
        "title": "[ONIGUNSOW] 恋の功徳 (コミックゼロス #91) [中國翻訳]",
        "cover": "https://telegra.ph/file/f41cdd91bf2bfed094b8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1001"
    },
    {
        "IDcode": 1002,
        "title": "(C90) [ナンタラカンタラ (春菊天うどん)] やわらか かしまん (艦隊これくしょん -艦これ-) [中國翻訳]",
        "cover": "https://telegra.ph/file/a9cc374bb67995c49a1eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1002"
    },
    {
        "IDcode": 1003,
        "title": "[野際かえで] わるいこ 後編 (COMIC LO 2022年5月号)",
        "cover": "https://telegra.ph/file/7ca29255207ca857d7f88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1003"
    },
    {
        "IDcode": 1004,
        "title": "[剑轩辕7]《手办》",
        "cover": "https://telegra.ph/file/58427dc79275b918ca5b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1004"
    },
    {
        "IDcode": 1005,
        "title": "[ie (raarami)] 催眠生徒会",
        "cover": "https://telegra.ph/file/4a5f86b93d8f643404139.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1005"
    },
    {
        "IDcode": 1006,
        "title": "[夏のおやつ] Incestism 第4話 (COMIC クリベロン DUMA 2022年4月号 Vol.35)",
        "cover": "https://telegra.ph/file/5e2e346327a71a6373c11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1006"
    },
    {
        "IDcode": 1007,
        "title": "[むた] 水着ダヴィンチちゃん (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/a6d5193a6a7e206a7cd14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1007"
    },
    {
        "IDcode": 1008,
        "title": "[蘭田夢] ふっとわーきんぐ 第3話 (マガジンサイベリア Vol.154)",
        "cover": "https://telegra.ph/file/97450c24bd5c5c6f7007f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1008"
    },
    {
        "IDcode": 1009,
        "title": "[でぃふぃーと、高浜太郎] 変幻装姫シャインミラージュ 砕かれるプライド、穢される存在",
        "cover": "https://telegra.ph/file/ec9b2f14a5c6bc9806d8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1009"
    },
    {
        "IDcode": 1010,
        "title": "[せぶんがー] ミスコン出場巨乳JD おじさんに全裸土下座",
        "cover": "https://telegra.ph/file/7362995dcfa02d7e6d9e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1010"
    },
    {
        "IDcode": 1011,
        "title": "[ぼうえん] ネコになりたいっ！ (COMIC LO 2022年5月号)",
        "cover": "https://telegra.ph/file/4bd3a68e99fd692065e7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1011"
    },
    {
        "IDcode": 1012,
        "title": "[KAROMIX (karory)] 妹と(催眠で)イチャイチャする本2",
        "cover": "https://telegra.ph/file/ab9f5815b5fed1fd68402.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1012"
    },
    {
        "IDcode": 1013,
        "title": "[きさらづ帝国 (JK更津)] 私を愛してくれるまでは帰してあげません",
        "cover": "https://telegra.ph/file/dfaca6a67f59fde445dc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1013"
    },
    {
        "IDcode": 1014,
        "title": "- アーティスト - りべいく",
        "cover": "https://telegra.ph/file/7ec0b29627e36322f5e8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1014"
    },
    {
        "IDcode": 1015,
        "title": "[pixiv]ユヨウ(附带pixiv文案，已整理阅读顺序）",
        "cover": "https://telegra.ph/file/80787355d68d48e231dd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1015"
    },
    {
        "IDcode": 1016,
        "title": "[てろめあな (ぐすたふ)] メイド主従ラバーズ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/05ece72ed7205eaca7320.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1016"
    },
    {
        "IDcode": 1017,
        "title": "[姫屋 (阿部いのり)] レンタル種付けおじさん4～パパ活を悪用する生イキギャルにおしおき輪姦パーティ～",
        "cover": "https://telegra.ph/file/aea74bddf5f44353ae632.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1017"
    },
    {
        "IDcode": 1018,
        "title": "[Family Affair (Family Man)] 大好きな弟が血の繋がってない妹に取られそうでヤキモキするお姉ちゃんの話。",
        "cover": "https://telegra.ph/file/6ef446030b43690148b7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1018"
    },
    {
        "IDcode": 1019,
        "title": "[とりかわ小屋 (ありえすず)] メイド姉妹とイチャイチャする本",
        "cover": "https://telegra.ph/file/e4c7681b8bb931f5c5983.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1019"
    },
    {
        "IDcode": 1020,
        "title": "[唄飛鳥] 極情性活表裏",
        "cover": "https://telegra.ph/file/033110d6a89cd25440daa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1020"
    },
    {
        "IDcode": 1021,
        "title": "[Bonsketch (ぼんすけ)] 匂い立つ汗臭ヘルス～沙江子～",
        "cover": "https://telegra.ph/file/5938139a9964346841bab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1021"
    },
    {
        "IDcode": 1022,
        "title": "[ハードボイルドよし子] おしかけサンシャワー",
        "cover": "https://telegra.ph/file/26d1a509429511fe78c89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1022"
    },
    {
        "IDcode": 1023,
        "title": "[morrow] 海女母ちゃん",
        "cover": "https://telegra.ph/file/5b3b74cd1545db1243ab7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1023"
    },
    {
        "IDcode": 1024,
        "title": "[日本ケモ耳推奨委員会 (てふん)] こんこん狐の守り神さま (獣ノ耳々)",
        "cover": "https://telegra.ph/file/c48e6510ae2b30ac94644.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1024"
    },
    {
        "IDcode": 1025,
        "title": "[安藤周記]あのFUKとホテル行った (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/da18ecd64e1ecb18406c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1025"
    },
    {
        "IDcode": 1026,
        "title": "[せぶんがー] 女番長無様敗北",
        "cover": "https://telegra.ph/file/02a83e7f69570aa27e5fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1026"
    },
    {
        "IDcode": 1027,
        "title": "[せぶんがー] 幼馴染の新人教師のお姉さんがヤンキー男子に調教され尽くしてた",
        "cover": "https://telegra.ph/file/8232a556ea5e1840a32fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1027"
    },
    {
        "IDcode": 1028,
        "title": "[俵緋龍]ドスケベ熟女魔王が罠にハマったので種付けしてみた (二次元コミックマガジン 絶頂快楽が止まらないエロトラップダンジョン Vol.4)",
        "cover": "https://telegra.ph/file/fc70ff622b44016ef3b4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1028"
    },
    {
        "IDcode": 1029,
        "title": "[ゐちぼっち (一宮夕羽)] 元陰キャの巨乳ヤリマン妹がエロすぎて、お兄ちゃんはもう…!! 2",
        "cover": "https://telegra.ph/file/415df36d000de6a2d982e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1029"
    },
    {
        "IDcode": 1030,
        "title": "[砂漠] 真夜中の夜子さん「夜子に男らしいとこ見せて」 (COMIC LO 2021年6月号)",
        "cover": "https://telegra.ph/file/3d08e4d71d25f3671bb18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1030"
    },
    {
        "IDcode": 1031,
        "title": "[せぶんがー] 上京した一人娘がAV堕ちして黒人に中田氏される",
        "cover": "https://telegra.ph/file/e95d0e97728895f23c70a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1031"
    },
    {
        "IDcode": 1032,
        "title": "(C99) [ねこバス亭 (しゃあ)] 淫獣が女神ママを弱体化させました。 (原神)",
        "cover": "https://telegra.ph/file/77c9bf98fd1f7ab19ee7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1032"
    },
    {
        "IDcode": 1033,
        "title": "[ファイカプリコ] 弟の睡眠薬トラップにかかったふりをする姉",
        "cover": "https://telegra.ph/file/6f9515d9bd8d4251fb7c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1033"
    },
    {
        "IDcode": 1034,
        "title": "[YOSHITORA] 私のヘンタイ王子さま (黄金のソナタXXX その十二)",
        "cover": "https://telegra.ph/file/5723172c37612c75d76a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1034"
    },
    {
        "IDcode": 1035,
        "title": "[羽原ヒロ] 発情空間 (COMIC BAVEL 2022年5月号)",
        "cover": "https://telegra.ph/file/bc02acfafa979df9eed78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1035"
    },
    {
        "IDcode": 1036,
        "title": "[Pixiv] 怠惰老鸽 (12169164)",
        "cover": "https://telegra.ph/file/ac15db502b356a7df1e8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1036"
    },
    {
        "IDcode": 1037,
        "title": "[りとるほっぱー+Ziggurat (橋広こう)] あいかと叔父さん～花嫁修行睡眠姦～04",
        "cover": "https://telegra.ph/file/d43eebdcc9c2b2ec683a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1037"
    },
    {
        "IDcode": 1038,
        "title": "[某人間] 叔母と淑母 (COMIC 天魔 2010年5月号)",
        "cover": "https://telegra.ph/file/7c50b70d772539f78c1e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1038"
    },
    {
        "IDcode": 1039,
        "title": "[いよの窯 (いよ)] はーちゃんとPの性行為…オカズにするしか (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/8b8a0ce6cfc025ed70539.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1039"
    },
    {
        "IDcode": 1040,
        "title": "[てっこ] 「アソコのきゅんきゅんが止まらないのぉ…!」バレたらアウト!? 男装巨乳♀と痴漢満員電車 5",
        "cover": "https://telegra.ph/file/b0dd566a77fbcc23de65a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1040"
    },
    {
        "IDcode": 1041,
        "title": "[角煮煮] 常識改変活動記録 #13. 朝の生ハメ放送 (WEEKLY快楽天 2022 No.13)",
        "cover": "https://telegra.ph/file/252c934173b0bdb6ec20c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1041"
    },
    {
        "IDcode": 1042,
        "title": "[天気輪 (甘露アメ)] 自分で作ったエロトラップダンジョンの最上階でTS化したせいでうっかり外に出れなくなってしまった異世界転生魔王おじさん",
        "cover": "https://telegra.ph/file/1c195701fe2c995f7ca1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1042"
    },
    {
        "IDcode": 1043,
        "title": "［gorani］人造人18号andriod 18（djsymq机翻）",
        "cover": "https://telegra.ph/file/20bfeec4e12fc510985da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1043"
    },
    {
        "IDcode": 1044,
        "title": "[橘由宇] マシュ ラフム姦 [GaLaSky個人漢化]",
        "cover": "https://telegra.ph/file/6373033a27ff56c8fa643.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1044"
    },
    {
        "IDcode": 1045,
        "title": "[三杯酢] 女湯でおばさん達に",
        "cover": "https://telegra.ph/file/31beb664f97d9d08cc6a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1045"
    },
    {
        "IDcode": 1046,
        "title": "[十はやみ] 小さくてかわいい坊ちゃま (コミックゼロス #49)",
        "cover": "https://telegra.ph/file/7928476961af930b9820b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1046"
    },
    {
        "IDcode": 1047,
        "title": "(C99) [肉りんご (カクガリ兄弟)] 日本ロードプリンセス牝豚化計画",
        "cover": "https://telegra.ph/file/2d170022f9fe0e7a91eb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1047"
    },
    {
        "IDcode": 1048,
        "title": "[Road=ロード=] 力あるサキュバスは性欲を満たしたいだけ。3",
        "cover": "https://telegra.ph/file/c6f779efe036ca1b7f2a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1048"
    },
    {
        "IDcode": 1049,
        "title": "[じゃんくふぅど (照玉ぽてこら)] 必殺おねぇさん",
        "cover": "https://telegra.ph/file/dec09798f65a316b9bfb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1049"
    },
    {
        "IDcode": 1050,
        "title": "[あずせ] 今日から家族、そして恋人。 第2話 (アナンガ・ランガ Vol.81)",
        "cover": "https://telegra.ph/file/aa1014291cb4c10d30685.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1050"
    },
    {
        "IDcode": 1051,
        "title": "[あずせ] 今日から家族、そして恋人。 第3話 (アナンガ・ランガ Vol.82)",
        "cover": "https://telegra.ph/file/c5e5c41a60dc4ae01832f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1051"
    },
    {
        "IDcode": 1052,
        "title": "[poyeop] hk416 (少女前線)",
        "cover": "https://telegra.ph/file/c86e3f63000b6912eb621.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1052"
    },
    {
        "IDcode": 1053,
        "title": "[黒斗] ギャルママとパコパコSEX～人妻の超絶テクにマジイキ絶頂！ 第1-23話",
        "cover": "https://telegra.ph/file/a1c816d60adfbef2b1c87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1053"
    },
    {
        "IDcode": 1054,
        "title": "[水無月三日] 万引きママと店長の息子1",
        "cover": "https://telegra.ph/file/f78f5edf491b2aee21be5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1054"
    },
    {
        "IDcode": 1055,
        "title": "[八方微人 (ユモテリウス)] Trap Honey (僕のヒーローアカデミア)  [カラー化]",
        "cover": "https://telegra.ph/file/3592d71cbecdbf74bc416.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1055"
    },
    {
        "IDcode": 1056,
        "title": "[Pixiv] 试作型KOF (8846958)",
        "cover": "https://telegra.ph/file/b4e2c5a0bef3ad60aa2b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1056"
    },
    {
        "IDcode": 1057,
        "title": "[よんたろう] 変態露出摩天楼～女社長輪姦劇～ (ANGEL倶楽部 2014年7月号)",
        "cover": "https://telegra.ph/file/7565e200f7f88ab16bf7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1057"
    },
    {
        "IDcode": 1058,
        "title": "[ししおとめ (ししを)] ド田舎サンドイッチ ～全校生徒三名の学校で女子二人のオモチャにされる僕～",
        "cover": "https://telegra.ph/file/baa200ee4e30ec2cf7ff7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1058"
    },
    {
        "IDcode": 1059,
        "title": "[広弥] ハル色カノジョ + 虎穴&蜜瓜特典",
        "cover": "https://telegra.ph/file/c67531509cf4d7eecae63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1059"
    },
    {
        "IDcode": 1060,
        "title": "Cute Honey",
        "cover": "https://telegra.ph/file/3e0f3976066180521bc79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1060"
    },
    {
        "IDcode": 1061,
        "title": "(C89) [666PROTECT (甚六)] 転校生 JKエルフ ―放課後調教授業―",
        "cover": "https://telegra.ph/file/136429c8b19c62c3ca724.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1061"
    },
    {
        "IDcode": 1062,
        "title": "[田中家の鴨 (たなかあひる)] にじさん毛 (にじさんじ)",
        "cover": "https://telegra.ph/file/8614661a10741901e66aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1062"
    },
    {
        "IDcode": 1063,
        "title": "[悪魔都市計画 (あくまっこ、トシぞー)] 迅雷将イリーナ ―誇り高き魔族を洗脳天使化―",
        "cover": "https://telegra.ph/file/8a671df9957031b75994f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1063"
    },
    {
        "IDcode": 1064,
        "title": "[シイナ] ノラネコ少女との暮らしかた 第22-35話",
        "cover": "https://telegra.ph/file/00a1f186752c4a954381a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1064"
    },
    {
        "IDcode": 1065,
        "title": "[スタジオサウスポー (ぞん太)] 童貞大好き保母さんのパンスト退行射精介護",
        "cover": "https://telegra.ph/file/ca930de24d1423f414e66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1065"
    },
    {
        "IDcode": 1066,
        "title": "[Bbbs] 雷妮特",
        "cover": "https://telegra.ph/file/0c52e0d18e170e24f682d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1066"
    },
    {
        "IDcode": 1067,
        "title": "[かに村えびお] 鬼を囚える (永遠娘 12)",
        "cover": "https://telegra.ph/file/cabdd199f910b96072a9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1067"
    },
    {
        "IDcode": 1068,
        "title": "[Iris art (戸田比佐也)] 今夜、妻が他人と寝る",
        "cover": "https://telegra.ph/file/90c6d18a4d989721b4191.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1068"
    },
    {
        "IDcode": 1069,
        "title": "(C99) [Seven Deadly Sins (homu)] 樋口のとある一日 (アイドルマスターシャイニーカラーズ)",
        "cover": "https://telegra.ph/file/aee04b03cc7ccd40f6090.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1069"
    },
    {
        "IDcode": 1070,
        "title": "[せぶんがー] 年上お姉さんオラオラ系DQNに返り討ちにされ雌堕ち",
        "cover": "https://telegra.ph/file/1f2ef61e9c2148ea9dcb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1070"
    },
    {
        "IDcode": 1071,
        "title": "(神ノ叡智) [Cotton Candy (わたあめ)] ふたりでまねごと。(原神)",
        "cover": "https://telegra.ph/file/8ebd7d434acbd452fa82c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1071"
    },
    {
        "IDcode": 1072,
        "title": "[ロケットモンキー] 純愛トリックスター とらのあな8P小冊子",
        "cover": "https://telegra.ph/file/d6ea6e733033cdc5e9eed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1072"
    },
    {
        "IDcode": 1073,
        "title": "[Poyeop] HK416 (ドールズフロントライン)",
        "cover": "https://telegra.ph/file/6f1e224a891200b3225b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1073"
    },
    {
        "IDcode": 1074,
        "title": "[Farys] サトノダイヤモンドブルマー♡ (ウマ娘プリティーダービー)",
        "cover": "https://telegra.ph/file/b3680f7910022af9561a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1074"
    },
    {
        "IDcode": 1075,
        "title": "[草野郎] スレイブボール洗脳～ルザミーネ&リーリエ編～ (ポケットモンスター サン・ムーン)",
        "cover": "https://telegra.ph/file/62cca113e78b519f6a0a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1075"
    },
    {
        "IDcode": 1076,
        "title": "[仁志田メガネ] 里帰り (妻乳テンプテーション)",
        "cover": "https://telegra.ph/file/6c2237e27aa79bf8ebdb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1076"
    },
    {
        "IDcode": 1077,
        "title": "[毛玉牛乳 (玉之けだま)] 僕は小さな淫魔のしもべ総集編",
        "cover": "https://telegra.ph/file/a1987b3f52fe25042f609.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1077"
    },
    {
        "IDcode": 1078,
        "title": "(C95) [H×3I (平野河重)] 能代セラピー (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/37a6fc50d0966cef4e1c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1078"
    },
    {
        "IDcode": 1079,
        "title": "[いもけんぴ記念日] お嬢様からイジメられている俺にボーイッシュドスケベ執事女がお詫びSEXにくる話",
        "cover": "https://telegra.ph/file/74a158ca6b4387310c5bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1079"
    },
    {
        "IDcode": 1080,
        "title": "[草野郎] 未亡人母娘と上級国民 IF「メス奴隷の争い」END",
        "cover": "https://telegra.ph/file/76841f596f8cf4fc57e0f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1080"
    },
    {
        "IDcode": 1081,
        "title": "[鳥海] ＮＴＲFANBOXー",
        "cover": "https://telegra.ph/file/eb82ae208322fc9208fae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1081"
    },
    {
        "IDcode": 1082,
        "title": "[鳥海] 咲夜を妊娠させたい催眠おじさん！ (東方Project)",
        "cover": "https://telegra.ph/file/faebfc772d85a1a01daa4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1082"
    },
    {
        "IDcode": 1083,
        "title": "[りとるほっぱー+Ziggurat (橋広こう)] あいかと叔父さん～寝ている間に花嫁修行～01",
        "cover": "https://telegra.ph/file/bb2c3b336060514287286.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1083"
    },
    {
        "IDcode": 1084,
        "title": "[蒟吉人] スキを魅せたらハメられて",
        "cover": "https://telegra.ph/file/281e01817dbb9293c86b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1084"
    },
    {
        "IDcode": 1085,
        "title": "(C96) [サシミノワイフ (しでん)] 水滴少女 part 1",
        "cover": "https://telegra.ph/file/f8c9b0e15f0279ea0d011.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1085"
    },
    {
        "IDcode": 1086,
        "title": "[りとるほっぱー+Ziggurat (橋広こう)] あいかと叔父さん～寝ている間に花嫁修行～03",
        "cover": "https://telegra.ph/file/6e791b55b98a1bfb51ac6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1086"
    },
    {
        "IDcode": 1087,
        "title": "[どじろーブックス (どじろー)] #有料少女2【高額支援版】～お金を払うと〇〇してくれる女の子～+追加漫画",
        "cover": "https://telegra.ph/file/208b9af1924542c481cc3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1087"
    },
    {
        "IDcode": 1088,
        "title": "[雲丹ピアノ楽団 (雲丹ピアノ)] ふたなりおばさんバ先のメスガキとベロチューセックス",
        "cover": "https://telegra.ph/file/edac8449d1e8e171c2ee0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1088"
    },
    {
        "IDcode": 1089,
        "title": "[kakao] ピュアメイドサービス (COMIC 快楽天ビースト 2022年4月号)",
        "cover": "https://telegra.ph/file/2b55c9135d1f158744f38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1089"
    },
    {
        "IDcode": 1090,
        "title": "[脆炒瓜子] 捕获小马驹的陷阱",
        "cover": "https://telegra.ph/file/cc99365214330a982de97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1090"
    },
    {
        "IDcode": 1091,
        "title": "[霞雪誠] 性春ガイダンス",
        "cover": "https://telegra.ph/file/e2d197c4ddd679704f33c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1091"
    },
    {
        "IDcode": 1092,
        "title": "[十はやみ] おねえさんのごほうび (コミックゼロス #47)",
        "cover": "https://telegra.ph/file/7bf544f3615f46bc9dbc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1092"
    },
    {
        "IDcode": 1093,
        "title": "(C99) [TIES (タケイオーキ)] 私の、お父さん",
        "cover": "https://telegra.ph/file/6ba34a74844e1f975b6a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1093"
    },
    {
        "IDcode": 1094,
        "title": "[ファイカプリコ] パパ活詐欺女を全裸土下座させておしおき",
        "cover": "https://telegra.ph/file/8c81c03602954267e245c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1094"
    },
    {
        "IDcode": 1095,
        "title": "[Beなんとか] スーパーレア小学生 (10から始める英才教育)",
        "cover": "https://telegra.ph/file/468906118809308034b5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1095"
    },
    {
        "IDcode": 1096,
        "title": "(C90) [ろ～たり～Engine (神無月元史)] ラパンでPeace! (ご注文はうさぎですか?)",
        "cover": "https://telegra.ph/file/1ba0e5ba2154fb01f8031.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1096"
    },
    {
        "IDcode": 1097,
        "title": "[鶴山ミト] お嬢様のイケない面接 (COMIC BAVEL 2020年12月号)",
        "cover": "https://telegra.ph/file/36046cba7e92cbcbd842e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1097"
    },
    {
        "IDcode": 1098,
        "title": "[だめなひ堂 (だめなひと)] GAME OVER (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/316eeadd4bc9594bb523b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1098"
    },
    {
        "IDcode": 1099,
        "title": "(C97) [サシミノワイフ (しでん)] ウェットガールズpart2",
        "cover": "https://telegra.ph/file/8f715577c6f9e533fe701.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1099"
    },
    {
        "IDcode": 1100,
        "title": "[平沢Zen] 特盛り爆乳メイドオルタさんの見せつけオナニー (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/73f1d36f42c013b7f65e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1100"
    }
];
