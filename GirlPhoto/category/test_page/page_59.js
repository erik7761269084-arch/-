// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 27981,
        "title": "Hanari(하나리) - [DJAWA] Snow Cat #2 [119P-1.39GB]",
        "cover": "https://telegra.ph/file/da2d15fe22005b901e075.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27981",
        "pageSeq": 27981
    },
    {
        "IDcode": 27982,
        "title": "DJAWA Photo Vol.0162 - HaNari (하나리) - Loose and Tight Cool Mint [85P 2.8GB]",
        "cover": "https://telegra.ph/file/f8ff27de5ea28b3ee03ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27982",
        "pageSeq": 27982
    },
    {
        "IDcode": 27983,
        "title": "Hanari(하나리) - Champagne Mesh [109P]",
        "cover": "https://telegra.ph/file/f1b75719c679f5d337a4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27983",
        "pageSeq": 27983
    },
    {
        "IDcode": 27984,
        "title": "Hana Song (송하나) - NO.12 [JOApictures] x JOA 20. APR Vol.1 [51P-420MB]",
        "cover": "https://telegra.ph/file/8e22495d8bea2b51c956e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27984",
        "pageSeq": 27984
    },
    {
        "IDcode": 27985,
        "title": "Hana Song (송하나) - NO.13 [DJAWA] Masked Bunny [64P-1.52GB]",
        "cover": "https://telegra.ph/file/79b846c9fb03a28632ee5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27985",
        "pageSeq": 27985
    },
    {
        "IDcode": 27986,
        "title": "Hana Song (송하나) – Hana’s Day 2(79P795MB)",
        "cover": "https://telegra.ph/file/8c3c9237e0de5586b8f50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27986",
        "pageSeq": 27986
    },
    {
        "IDcode": 27987,
        "title": "雨波_HaneAme - NO.128 原神 凝光 [30P-29MB]",
        "cover": "https://telegra.ph/file/6376a4db82db318e2005e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27987",
        "pageSeq": 27987
    },
    {
        "IDcode": 27988,
        "title": "雨波_HaneAme - NO.130 大凤花架(Taihou Wedding) [40P-88MB]",
        "cover": "https://telegra.ph/file/aec62505bea176498a304.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27988",
        "pageSeq": 27988
    },
    {
        "IDcode": 27989,
        "title": "雨波_HaneAme - NO.131 白银诺艾尔(Shirogane Noel) [42P-36MB]",
        "cover": "https://telegra.ph/file/936e72d65d8c6ebc1c9d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27989",
        "pageSeq": 27989
    },
    {
        "IDcode": 27990,
        "title": "雨波_HaneAme - NO.132 一之濑明日奈兔女郎(Asuna Ichinose) [37P-69MB]",
        "cover": "https://telegra.ph/file/69c4a0432e9b278c8b45a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27990",
        "pageSeq": 27990
    },
    {
        "IDcode": 27991,
        "title": "雨波_HaneAme - NO.133 墨狄斯（Modeus）[26P-49MB]",
        "cover": "https://telegra.ph/file/45bfcb3ecf010970016df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27991",
        "pageSeq": 27991
    },
    {
        "IDcode": 27992,
        "title": "無職轉生_精靈正裝 SEXY!!!",
        "cover": "https://telegra.ph/file/8f19bb521fa2ff3ec9280.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27992",
        "pageSeq": 27992
    },
    {
        "IDcode": 27993,
        "title": "碧蓝档案 角楯华凛兔女郎",
        "cover": "https://telegra.ph/file/2163bc3ee6b66fa3f4991.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27993",
        "pageSeq": 27993
    },
    {
        "IDcode": 27994,
        "title": "Original_2021 Birthday",
        "cover": "https://telegra.ph/file/e22e778b19dd145d61ac7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27994",
        "pageSeq": 27994
    },
    {
        "IDcode": 27995,
        "title": "AzurLane_Surcouf_絮庫夫",
        "cover": "https://telegra.ph/file/e0fa8f92e06e89c0a79c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27995",
        "pageSeq": 27995
    },
    {
        "IDcode": 27996,
        "title": "OFFICAL",
        "cover": "https://telegra.ph/file/2f8f592935407c9e0eb9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27996",
        "pageSeq": 27996
    },
    {
        "IDcode": 27997,
        "title": "OL",
        "cover": "https://telegra.ph/file/4ef296635c98da889472c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27997",
        "pageSeq": 27997
    },
    {
        "IDcode": 27998,
        "title": "BUNNY",
        "cover": "https://telegra.ph/file/39a33961bc3815b344fd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27998",
        "pageSeq": 27998
    },
    {
        "IDcode": 27999,
        "title": "APRON",
        "cover": "https://telegra.ph/file/94e349a9760f6503d71ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27999",
        "pageSeq": 27999
    },
    {
        "IDcode": 28000,
        "title": "GOTOU_後藤愛依梨",
        "cover": "https://telegra.ph/file/21bda16d43ffc06da343c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28000",
        "pageSeq": 28000
    },
    {
        "IDcode": 28001,
        "title": "40 Hara sensei IYA PAN_嫌棄胖次",
        "cover": "https://telegra.ph/file/04dfcd88aac4565464d49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28001",
        "pageSeq": 28001
    },
    {
        "IDcode": 28002,
        "title": "Hannah Owo-合集[721P38V]",
        "cover": "https://telegra.ph/file/1e3f7b4fbaf50a01f0854.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28002",
        "pageSeq": 28002
    },
    {
        "IDcode": 28003,
        "title": "Hansom (한솜) - [Pure Media] Vol.152 [74P-962MB]",
        "cover": "https://telegra.ph/file/3c96876165c40ce010c08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28003",
        "pageSeq": 28003
    },
    {
        "IDcode": 28004,
        "title": "Hansom (한솜) - [Pure Media] Vol.122 [97P-850MB]",
        "cover": "https://telegra.ph/file/ba9e090be21148d451bff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28004",
        "pageSeq": 28004
    },
    {
        "IDcode": 28005,
        "title": "烟鬼的harley 合集 [149P]",
        "cover": "https://telegra.ph/file/d457a667509200a5422b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28005",
        "pageSeq": 28005
    },
    {
        "IDcode": 28006,
        "title": "[ArtGravia] VOL367 Hia",
        "cover": "https://telegra.ph/file/53334919da77646b68f11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28006",
        "pageSeq": 28006
    },
    {
        "IDcode": 28007,
        "title": "Hidori Rose - Ram Bride Lingerie",
        "cover": "https://telegra.ph/file/55428375747f3f7e648f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28007",
        "pageSeq": 28007
    },
    {
        "IDcode": 28008,
        "title": "Hidori Rose-Belfast (Azur Lane)",
        "cover": "https://telegra.ph/file/5422d8f323a2845e2ae41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28008",
        "pageSeq": 28008
    },
    {
        "IDcode": 28009,
        "title": "Azur Lane 齐柏林伯爵",
        "cover": "https://telegra.ph/file/425b5036db807656f15da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28009",
        "pageSeq": 28009
    },
    {
        "IDcode": 28010,
        "title": "[Hidori Rose] Miko Kurokawa cosplay",
        "cover": "https://telegra.ph/file/892212659a5913ded627d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28010",
        "pageSeq": 28010
    },
    {
        "IDcode": 28011,
        "title": "Hidori Rose - Akeno Himejima black devil bikini uniform cosplay",
        "cover": "https://telegra.ph/file/dc80a1acf3657323b95d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28011",
        "pageSeq": 28011
    },
    {
        "IDcode": 28012,
        "title": "Cygnet Azur Lane cosplay by Hidori Rose",
        "cover": "https://telegra.ph/file/38c079d3f49c1797723e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28012",
        "pageSeq": 28012
    },
    {
        "IDcode": 28013,
        "title": "Hokunaimeko_喜多川海夢コスプレ",
        "cover": "https://telegra.ph/file/d1cc53fd29e6f561266d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28013",
        "pageSeq": 28013
    },
    {
        "IDcode": 28014,
        "title": "Hokunaimeko - Reika Shimohira",
        "cover": "https://telegra.ph/file/568561192219d774faf30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28014",
        "pageSeq": 28014
    },
    {
        "IDcode": 28015,
        "title": "Hokunaimeko NO32 雅尔贝德",
        "cover": "https://telegra.ph/file/d3c9d0aff462076dd9ead.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28015",
        "pageSeq": 28015
    },
    {
        "IDcode": 28016,
        "title": "Hokunaimeko-コスプレー２Ｂちゃん[82P]",
        "cover": "https://telegra.ph/file/4d75d68ba0fe4f3ed1f5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28016",
        "pageSeq": 28016
    },
    {
        "IDcode": 28017,
        "title": "Hokunaimeko-マシュ キリエライト[106P]",
        "cover": "https://telegra.ph/file/a6148a7e5d131ac83c2c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28017",
        "pageSeq": 28017
    },
    {
        "IDcode": 28018,
        "title": "Hokunaimeko-NO.23 蒂法[66P]",
        "cover": "https://telegra.ph/file/5524d3bc14d1f0cdc1ab3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28018",
        "pageSeq": 28018
    },
    {
        "IDcode": 28019,
        "title": "Hokunaimeko-NO.23 玉藻前 水着ver 踊り子風[59P]",
        "cover": "https://telegra.ph/file/e9724a798a99274fde3a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28019",
        "pageSeq": 28019
    },
    {
        "IDcode": 28020,
        "title": "Hokunaimeko-NO5 玉藻の前 私服ver[75P]",
        "cover": "https://telegra.ph/file/31011039180f8cb666e7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28020",
        "pageSeq": 28020
    },
    {
        "IDcode": 28021,
        "title": "Hokunaimeko-コスプレ自撮りまとめ [136P]",
        "cover": "https://telegra.ph/file/153d7feea8ab4bc53e105.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28021",
        "pageSeq": 28021
    },
    {
        "IDcode": 28022,
        "title": "Hokunaimeko-Tamamo no Mae Shinwa Reisou (Fate EXTRA) cos 玉藻前[71P]",
        "cover": "https://legra.ph/file/9ecfc8b12f3e4e3c96383.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28022",
        "pageSeq": 28022
    },
    {
        "IDcode": 28023,
        "title": "Hokunaimeko-嫁王 ネロ自撮りまとめ 25 (FateGrand Order)  [46P2V]",
        "cover": "https://legra.ph/file/aa27a275591b5d3f7fc89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28023",
        "pageSeq": 28023
    },
    {
        "IDcode": 28024,
        "title": "Hokunaimeko-NO8 护士[41P1V]",
        "cover": "https://legra.ph/file/049f676ced35bfc42ab6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28024",
        "pageSeq": 28024
    },
    {
        "IDcode": 28025,
        "title": "Hokunaimeko-NO10 裸露！死库水 JK[90P]",
        "cover": "https://telegra.ph/file/c8be5457871bf3d4bcce2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28025",
        "pageSeq": 28025
    },
    {
        "IDcode": 28026,
        "title": "Hokunaimeko-NO1 魅魔扮演[95P2V]",
        "cover": "https://legra.ph/file/4efee0f69d4643132c366.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28026",
        "pageSeq": 28026
    },
    {
        "IDcode": 28027,
        "title": "Hokunaimeko-NO3 マシュ メイド服ver[68P1V]",
        "cover": "https://telegra.ph/file/167b48a2b2a8a278adfb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28027",
        "pageSeq": 28027
    },
    {
        "IDcode": 28028,
        "title": "Hokunaimeko-NO6 オリジナルコスプレ　闇の門番[51P1V]",
        "cover": "https://telegra.ph/file/8a23711b8276d7c9bcee8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28028",
        "pageSeq": 28028
    },
    {
        "IDcode": 28029,
        "title": "Hokunaimeko NO7 オリジナルコスプレ オートバイお姉ちゃん[73P2V]",
        "cover": "https://telegra.ph/file/94673fda7d7d11e05d3be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28029",
        "pageSeq": 28029
    },
    {
        "IDcode": 28030,
        "title": "Hokunaimeko-NO9 战斗女仆[38P2V]",
        "cover": "https://telegra.ph/file/f63de3131d0e5744cd71e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28030",
        "pageSeq": 28030
    },
    {
        "IDcode": 28031,
        "title": "Hokunaimeko-NO12 オリジナルコスプレ 特殊部隊少女[39P1V]",
        "cover": "https://telegra.ph/file/e6ce9600ceb1b7b7ac0c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28031",
        "pageSeq": 28031
    },
    {
        "IDcode": 28032,
        "title": "Hokunaimeko-NO11 大破！チャイナドレスギャル[51P1V]",
        "cover": "https://telegra.ph/file/9e62f9b163b149b9e8f01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28032",
        "pageSeq": 28032
    },
    {
        "IDcode": 28033,
        "title": "Hokunaimeko-アズールレーン Azur Lane——あたご[50P1V]",
        "cover": "https://telegra.ph/file/f28b060ef4ce88e1c2378.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28033",
        "pageSeq": 28033
    },
    {
        "IDcode": 28034,
        "title": "Hokunaimeko - Mona Megistus[47P]",
        "cover": "https://telegra.ph/file/2657a055a1b79a73d60a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28034",
        "pageSeq": 28034
    },
    {
        "IDcode": 28035,
        "title": "Hokunaimeko-時々の自撮り[35P1V]",
        "cover": "https://telegra.ph/file/fb6f23509d8f8b7692eb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28035",
        "pageSeq": 28035
    },
    {
        "IDcode": 28036,
        "title": "Pure Media - Hong-Si (홍시)",
        "cover": "https://telegra.ph/file/f6882d9c83e189ce64ab8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28036",
        "pageSeq": 28036
    },
    {
        "IDcode": 28037,
        "title": "HongKongDoll-OnlyFans图片打包[159P]",
        "cover": "https://legra.ph/file/ad189e413269bed690f01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28037",
        "pageSeq": 28037
    },
    {
        "IDcode": 28038,
        "title": "韩国[Lilynah] Inah x Shaany - Study on Temptation [91P-611MB]",
        "cover": "https://telegra.ph/file/3cfc8664d529e900467d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28038",
        "pageSeq": 28038
    },
    {
        "IDcode": 28039,
        "title": "姜仁卿-ARTGRAVIA_VOL38[49P]",
        "cover": "https://telegra.ph/file/2fceb6b2caca0fbd99516.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28039",
        "pageSeq": 28039
    },
    {
        "IDcode": 28040,
        "title": "姜仁卿-秀人网2019.07.17 No.154[42P]",
        "cover": "https://telegra.ph/file/2b506a1e80d6b815063ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28040",
        "pageSeq": 28040
    },
    {
        "IDcode": 28041,
        "title": "姜仁卿-ARTGAVIA_VOL180[64P]",
        "cover": "https://legra.ph/file/e4bd5ae5e7211ef410b5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28041",
        "pageSeq": 28041
    },
    {
        "IDcode": 28042,
        "title": "no Pack Yumeko",
        "cover": "https://telegra.ph/file/b4f7231b03af37ce395a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28042",
        "pageSeq": 28042
    },
    {
        "IDcode": 28043,
        "title": "Ino Pack Zero Two",
        "cover": "https://telegra.ph/file/0f05f051d8f49cb17b182.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28043",
        "pageSeq": 28043
    },
    {
        "IDcode": 28044,
        "title": "Ino Pack Tsunade",
        "cover": "https://telegra.ph/file/47b7f34bb900061d5b475.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28044",
        "pageSeq": 28044
    },
    {
        "IDcode": 28045,
        "title": "ARTGRAVIA VOL369 [105P-152MB]",
        "cover": "https://telegra.ph/file/b71c9f9f8b06fe6f6f884.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28045",
        "pageSeq": 28045
    },
    {
        "IDcode": 28046,
        "title": "ARTGRAVIA VOL384 [125P-157MB]",
        "cover": "https://telegra.ph/file/59db71806fc368761b0e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28046",
        "pageSeq": 28046
    },
    {
        "IDcode": 28047,
        "title": "izumi泉桃子 - 帝国通讯官(30P232MB)",
        "cover": "https://telegra.ph/file/f9fce5d033c5b40c3a8e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28047",
        "pageSeq": 28047
    },
    {
        "IDcode": 28048,
        "title": "Jamong - [DJAWA] - Nurse j",
        "cover": "https://telegra.ph/file/6365f7fa53cc09a89e4bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28048",
        "pageSeq": 28048
    },
    {
        "IDcode": 28049,
        "title": "ARTGRAVIA_VOL.400 Jang Joo [57P-120MB]",
        "cover": "https://telegra.ph/file/f0c887c63e6f3a3367d52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28049",
        "pageSeq": 28049
    },
    {
        "IDcode": 28050,
        "title": "장주(Isabella) - ARTGRAVIA_VOL.406 Jang Joo [98P-534MB]",
        "cover": "https://telegra.ph/file/b574aa84b7993dcab933d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28050",
        "pageSeq": 28050
    },
    {
        "IDcode": 28051,
        "title": "장주(Isabella) - NO.20 ARTGRAVIA_VOL.359 Jang Joo [90P-551MB]",
        "cover": "https://telegra.ph/file/fa78dd5582eec0f354f78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28051",
        "pageSeq": 28051
    },
    {
        "IDcode": 28052,
        "title": "JangJoo 장주-ARTGRAVIA_VOL144[73P]",
        "cover": "https://telegra.ph/file/84519365f498443a0e6a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28052",
        "pageSeq": 28052
    },
    {
        "IDcode": 28053,
        "title": "JangJoo 장주-ARTGRAVIA_VOL154[73P]",
        "cover": "https://telegra.ph/file/37f7801de82ddb88e7e69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28053",
        "pageSeq": 28053
    },
    {
        "IDcode": 28054,
        "title": "JangJoo 장주- [DJAWA] Shuten Douji Maid [70P]",
        "cover": "https://telegra.ph/file/18fce08bfb7095375c964.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28054",
        "pageSeq": 28054
    },
    {
        "IDcode": 28055,
        "title": "[PURE MEDIA] VOL.170 jelly 2nd",
        "cover": "https://telegra.ph/file/14e8cdf56771acfec707d.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28055",
        "pageSeq": 28055
    },
    {
        "IDcode": 28056,
        "title": "[PURE MEDIA] Vol.159 Jelly",
        "cover": "https://telegra.ph/file/c284927b9cc239c351db7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28056",
        "pageSeq": 28056
    },
    {
        "IDcode": 28057,
        "title": "Jenny (정제니) - NO.12 [DJAWA] Maid Mansion",
        "cover": "https://telegra.ph/file/ee012d6bdfb80c90bbef3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28057",
        "pageSeq": 28057
    },
    {
        "IDcode": 28058,
        "title": "Jenny (정제니) - NO.09 [DJAWA] Empress of Bunny - Repost",
        "cover": "https://telegra.ph/file/2eeb4781acbec53ca7c40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28058",
        "pageSeq": 28058
    },
    {
        "IDcode": 28059,
        "title": "Jenny (정제니) - NO.31 [DJAWA] Swimming Lesson #10 (Version A) [46P-643MB]",
        "cover": "https://telegra.ph/file/661581f70e5be10fad0c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28059",
        "pageSeq": 28059
    },
    {
        "IDcode": 28060,
        "title": "Jenny (정제니) - NO.34 Classic Athletic Girl in Navy Blue [71P-1.50G]",
        "cover": "https://telegra.ph/file/4a43cf5950b6844b3f85f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28060",
        "pageSeq": 28060
    },
    {
        "IDcode": 28061,
        "title": "[SaintPhotolife] Jenny vol.01",
        "cover": "https://telegra.ph/file/c387a4dae3507ac355f5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28061",
        "pageSeq": 28061
    },
    {
        "IDcode": 28062,
        "title": "Jenny (정제니) - [DJAWA] Schwarz und Weiß Katzenmädchen [66P-463MB]",
        "cover": "https://telegra.ph/file/ffbc37345e1aa79c97164.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28062",
        "pageSeq": 28062
    },
    {
        "IDcode": 28063,
        "title": "Jenny (정제니) - [DJAWA] Schwarz und Weiß Katzenmädchen [66P-463MB]",
        "cover": "https://telegra.ph/file/d73b3d2126ecea5218e03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28063",
        "pageSeq": 28063
    },
    {
        "IDcode": 28064,
        "title": "Jenny (정제니) - [DJAWA] Swimming Lesson #10",
        "cover": "https://telegra.ph/file/3fe42a78255ef85e94bfb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28064",
        "pageSeq": 28064
    },
    {
        "IDcode": 28065,
        "title": "[Cos]Jenny - Play To Win! (D.VA) [43P]",
        "cover": "https://telegra.ph/file/f2bffee7c38777557272e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28065",
        "pageSeq": 28065
    },
    {
        "IDcode": 28066,
        "title": "Jenny (정제니) - NieR Automata 2B [47P]",
        "cover": "https://telegra.ph/file/b132db90553078e348c6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28066",
        "pageSeq": 28066
    },
    {
        "IDcode": 28067,
        "title": "Jenny (정제니) - Combat Maid Mansion [121P]",
        "cover": "https://telegra.ph/file/b71848f0ddeac0d5751a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28067",
        "pageSeq": 28067
    },
    {
        "IDcode": 28068,
        "title": "[JVID]『全裸上空』 SR等級甜美的小姐姐Jenny，午後的巨乳誘惑 JennySuen",
        "cover": "https://telegra.ph/file/fb3b90b4fe1df17e05784.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28068",
        "pageSeq": 28068
    },
    {
        "IDcode": 28069,
        "title": "Jenny (정제니) - NO.30 [DJAWA] Combat Maid Mansion",
        "cover": "https://telegra.ph/file/6ec8133eff0c42540745a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28069",
        "pageSeq": 28069
    },
    {
        "IDcode": 28070,
        "title": "Photo - Jeong Jenny (정제니) - Cyber Cat",
        "cover": "https://telegra.ph/file/6837c5d7e7cf46594de56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28070",
        "pageSeq": 28070
    },
    {
        "IDcode": 28071,
        "title": "DJAWA Photo - Jeong Jenny (정제니) - Kitsune in Hanfu",
        "cover": "https://telegra.ph/file/c8f06ebe63213eade08d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28071",
        "pageSeq": 28071
    },
    {
        "IDcode": 28072,
        "title": "Vol.180 Jia (지아) [125P-960MB]",
        "cover": "https://telegra.ph/file/862375b915bba8d4e4b84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28072",
        "pageSeq": 28072
    },
    {
        "IDcode": 28073,
        "title": "[Cos]兔玩映画 - 少女心事 [52P]",
        "cover": "https://telegra.ph/file/3f502fc7cb98b73091936.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28073",
        "pageSeq": 28073
    },
    {
        "IDcode": 28074,
        "title": "[Cos]兔玩映画 - 黑丝JK小姐姐[40P]",
        "cover": "https://telegra.ph/file/3908e12a8454fb2da3d4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28074",
        "pageSeq": 28074
    },
    {
        "IDcode": 28075,
        "title": "Joyce - NO.001 原神 芭芭拉 [32P-191MB]",
        "cover": "https://telegra.ph/file/b96b418a6b196727581c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28075",
        "pageSeq": 28075
    },
    {
        "IDcode": 28076,
        "title": "Joyce - NO.002 原神 烟绯 [33P-234MB]",
        "cover": "https://telegra.ph/file/f36a0d8b9d52cb6eb03fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28076",
        "pageSeq": 28076
    },
    {
        "IDcode": 28077,
        "title": "Joyce - NO.003 原神 八重神子 [35P-195M]",
        "cover": "https://telegra.ph/file/4b370fe38284291e07fa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28077",
        "pageSeq": 28077
    },
    {
        "IDcode": 28078,
        "title": "Joyce - NO.005 原神优菈 [39P-74MB]",
        "cover": "https://telegra.ph/file/0c5553b54a873df111ea4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28078",
        "pageSeq": 28078
    },
    {
        "IDcode": 28079,
        "title": "Joyce - NO.005 拳皇 不知火舞 [39P-334MB]",
        "cover": "https://telegra.ph/file/ba68e04dc9b0eda4ae1a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28079",
        "pageSeq": 28079
    },
    {
        "IDcode": 28080,
        "title": "Joyce Lin2x - Marin Kitagawa",
        "cover": "https://telegra.ph/file/8ceb6178ef52089dadfe9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28080",
        "pageSeq": 28080
    }
];
