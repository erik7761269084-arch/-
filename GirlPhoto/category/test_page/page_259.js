// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 47972,
        "title": "[HERESY (林檎蜜紀)] りんごみつき妄想セクションvol.9 いいなりすけべ村温泉・デカ尻デカパイ 下乳上にスケベ令呪で牛コス＆メイドを着せて好き放題しちゃうFG●槍トリアオルタのコスプレ - Page 1",
        "cover": "https://telegra.ph/file/9902e06ba77973b073584.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47972",
        "pageSeq": 47972
    },
    {
        "IDcode": 47973,
        "title": "[HERESY (林檎蜜紀)] りんごみつき妄想セクションvol.8 デカ尻クイコミ特化♥すけべアンドロイド化した過激すぎるニーアオー●マタ・２Bのコスプレ (NieR: Automata) - Page 1",
        "cover": "https://telegra.ph/file/a492a5549be607b09a3be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47973",
        "pageSeq": 47973
    },
    {
        "IDcode": 47974,
        "title": "[HERESY (林檎蜜紀)] りんごみつき妄想セクションvol.4 女は風●嬢だった。高級デリへ●ミッション！スパイファ●リーヨルさんのコスプレ (SPY x FAMILY) - Page 1",
        "cover": "https://telegra.ph/file/3905abab46bf7ef95ab67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47974",
        "pageSeq": 47974
    },
    {
        "IDcode": 47975,
        "title": "Byoru-Privaty maid - Page 1",
        "cover": "https://telegra.ph/file/7710a771562ff47a0cb61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47975",
        "pageSeq": 47975
    },
    {
        "IDcode": 47976,
        "title": "咬一口兔娘 -『华甲僵尸夜』 - Page 1",
        "cover": "https://telegra.ph/file/324ba2c2e9c10d2641551.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47976",
        "pageSeq": 47976
    },
    {
        "IDcode": 47977,
        "title": "咬一口兔娘 -『申鹤-明枪』 - Page 1",
        "cover": "https://telegra.ph/file/10c0252db1354db54222a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47977",
        "pageSeq": 47977
    },
    {
        "IDcode": 47978,
        "title": "[星之迟迟] 胜利女神：妮姬 - 布兰儿 52P - Page 1",
        "cover": "https://telegra.ph/file/6ca220b14389b37d83146.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47978",
        "pageSeq": 47978
    },
    {
        "IDcode": 47979,
        "title": "Byoru-D killer wife - Page 1",
        "cover": "https://telegra.ph/file/c0439f9311350d10386b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47979",
        "pageSeq": 47979
    },
    {
        "IDcode": 47980,
        "title": "Cosplayer - Wonni - Page 1",
        "cover": "https://telegra.ph/file/ab6e21f3a09dd87d1f1dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47980",
        "pageSeq": 47980
    },
    {
        "IDcode": 47981,
        "title": "ayame_base00 - Gura Maid Underwear - Page 1",
        "cover": "https://telegra.ph/file/b89e9eed9b14db57094e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47981",
        "pageSeq": 47981
    },
    {
        "IDcode": 47982,
        "title": "Gumiho hannya - Lenore (Castlevania) [Updated] - Page 1",
        "cover": "https://telegra.ph/file/290eff2edaaeebeecaa50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47982",
        "pageSeq": 47982
    },
    {
        "IDcode": 47983,
        "title": "Nookkizz - Genshin Lynette - Page 1",
        "cover": "https://telegra.ph/file/7c3806fa4a9c4a024797b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47983",
        "pageSeq": 47983
    },
    {
        "IDcode": 47984,
        "title": "Arty Huang - Genshin Kamisato Ayaka - Page 1",
        "cover": "https://telegra.ph/file/2abf7b11a4802a17e851c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47984",
        "pageSeq": 47984
    },
    {
        "IDcode": 47985,
        "title": "kannojodori fantia订阅合集（2023.12-2024.04） - Page 1",
        "cover": "https://telegra.ph/file/5775944f0be3372c32b90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47985",
        "pageSeq": 47985
    },
    {
        "IDcode": 47986,
        "title": "Peachuu - Fern - Page 1",
        "cover": "https://telegra.ph/file/188ec1ad1dd5a6370c42c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47986",
        "pageSeq": 47986
    },
    {
        "IDcode": 47987,
        "title": "Byoru-Ubel - Page 1",
        "cover": "https://telegra.ph/file/a80225b2b371f9add848d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47987",
        "pageSeq": 47987
    },
    {
        "IDcode": 47988,
        "title": "りんごみつき妄想セクションvol.12 葬送のフリー●ン・娼館のアウラのコスプレ - Page 1",
        "cover": "https://telegra.ph/file/156666adaa40a0eb74887.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47988",
        "pageSeq": 47988
    },
    {
        "IDcode": 47989,
        "title": "Machi - Fren nun_Cosplay - Page 1",
        "cover": "https://telegra.ph/file/b3ad29e13ce5b39597f49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47989",
        "pageSeq": 47989
    },
    {
        "IDcode": 47990,
        "title": "DreamlikeUwU - Hololive Chloe - Page 1",
        "cover": "https://telegra.ph/file/06a3d02b5a35117953d1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47990",
        "pageSeq": 47990
    },
    {
        "IDcode": 47991,
        "title": "封疆疆v - Fate 玛修 基列莱特 - Page 1",
        "cover": "https://telegra.ph/file/2d2640cd8a595352329e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47991",
        "pageSeq": 47991
    },
    {
        "IDcode": 47992,
        "title": "Sayo Momo - Shenhe Lunar - Page 1",
        "cover": "https://telegra.ph/file/a1d25ecdbfa37d7138b8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47992",
        "pageSeq": 47992
    },
    {
        "IDcode": 47993,
        "title": "Sayo Momo - GI NAVIA - Page 1",
        "cover": "https://telegra.ph/file/ea213ac4dc106b656b221.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47993",
        "pageSeq": 47993
    },
    {
        "IDcode": 47994,
        "title": "Sayo Momo - Azur Lane REGENSBURG - Page 1",
        "cover": "https://telegra.ph/file/07cec6e29283a8eabe555.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47994",
        "pageSeq": 47994
    },
    {
        "IDcode": 47995,
        "title": "[Twitter / FANBOX] Ming (@mingchudesu) - Page 1",
        "cover": "https://telegra.ph/file/a2580ce5c721875f3af52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47995",
        "pageSeq": 47995
    },
    {
        "IDcode": 47996,
        "title": "Vinnegal Yoru chainsaw man - Page 1",
        "cover": "https://telegra.ph/file/383c7bea843336e901fe7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47996",
        "pageSeq": 47996
    },
    {
        "IDcode": 47997,
        "title": "不可爱羚 - 阮•梅 - Page 1",
        "cover": "https://telegra.ph/file/88125e097de6407e62b53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47997",
        "pageSeq": 47997
    },
    {
        "IDcode": 47998,
        "title": "少女映画 加藤惠内衣 - Page 1",
        "cover": "https://telegra.ph/file/873f328bacea9c21f59b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47998",
        "pageSeq": 47998
    },
    {
        "IDcode": 47999,
        "title": "Cosplayer - Aza miyuko - Page 1",
        "cover": "https://telegra.ph/file/134efd85ef78fc9d36a9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47999",
        "pageSeq": 47999
    },
    {
        "IDcode": 48000,
        "title": "Cosplayer - Aza miyuko - Page 2",
        "cover": "https://telegra.ph/file/3f98864b8608ce083161e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48000",
        "pageSeq": 48000
    },
    {
        "IDcode": 48001,
        "title": "水淼Aqua - ティファ🍹 - Page 1",
        "cover": "https://telegra.ph/file/739de71e588b5b47733c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48001",
        "pageSeq": 48001
    },
    {
        "IDcode": 48002,
        "title": "雪晴 – 森蚺芭蕾 - Page 1",
        "cover": "https://telegra.ph/file/2953b02802871ce575188.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48002",
        "pageSeq": 48002
    },
    {
        "IDcode": 48003,
        "title": "Aery Tiefling - Esdeath (Akame Ga Kill) (FULL SET 64 IMAGES) - Page 1",
        "cover": "https://telegra.ph/file/2faf4ac9c50bf3d44eebb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48003",
        "pageSeq": 48003
    },
    {
        "IDcode": 48004,
        "title": "封疆疆v - 申鹤海灯节 - Page 1",
        "cover": "https://telegra.ph/file/e2bb2d1936285d0932b81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48004",
        "pageSeq": 48004
    },
    {
        "IDcode": 48005,
        "title": "Peachuu - St. Louis - Page 1",
        "cover": "https://telegra.ph/file/f33d6ff123f6874cd89a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48005",
        "pageSeq": 48005
    },
    {
        "IDcode": 48006,
        "title": "Peachuu - D: Killer Wife - Page 1",
        "cover": "https://telegra.ph/file/b34faad94bcc0aca0099f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48006",
        "pageSeq": 48006
    },
    {
        "IDcode": 48007,
        "title": "[HERESY (林檎蜜紀)] スケベの女神ミッケ②ヘルム (勝利の女神:NIKKE) - Page 1",
        "cover": "https://telegra.ph/file/2af8f951289f74efc4413.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48007",
        "pageSeq": 48007
    },
    {
        "IDcode": 48008,
        "title": "Tsuki Des nudity compilation 2 - Page 1",
        "cover": "https://telegra.ph/file/2dc8a66248ae5a4be55a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48008",
        "pageSeq": 48008
    },
    {
        "IDcode": 48009,
        "title": "Aqua Area - Fern - Page 1",
        "cover": "https://telegra.ph/file/3fdb73e4a85af84f338f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48009",
        "pageSeq": 48009
    },
    {
        "IDcode": 48010,
        "title": "绞肉机 - 芽亚里兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/43ab9ed7afdec21aa0b7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48010",
        "pageSeq": 48010
    },
    {
        "IDcode": 48011,
        "title": "rioko凉凉子 - 阿尔比恩旗袍 - Page 1",
        "cover": "https://telegra.ph/file/f30ec80d487761a95c644.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48011",
        "pageSeq": 48011
    },
    {
        "IDcode": 48012,
        "title": "麻花酱 - 金鹿号 - Page 1",
        "cover": "https://telegra.ph/file/afad33c62516386638511.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48012",
        "pageSeq": 48012
    },
    {
        "IDcode": 48013,
        "title": "Lera Himera x Alcololi - Kobeni & Makima - Page 1",
        "cover": "https://telegra.ph/file/bc5e12d8f5b4bbf7f5c04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48013",
        "pageSeq": 48013
    },
    {
        "IDcode": 48014,
        "title": "COSPLAYTALES - パープルハート - Page 1",
        "cover": "https://telegra.ph/file/ae30a5a636fa1843ffb24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48014",
        "pageSeq": 48014
    },
    {
        "IDcode": 48015,
        "title": "[nonsummerjack] Lady chocolat - Page 1",
        "cover": "https://telegra.ph/file/abddd9ce618bed6f35ba4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48015",
        "pageSeq": 48015
    },
    {
        "IDcode": 48016,
        "title": "水淼aqua 24年03月fantia订阅 天雨アコ ドレス - Page 1",
        "cover": "https://telegra.ph/file/92a4618325d23a1b83f9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48016",
        "pageSeq": 48016
    },
    {
        "IDcode": 48017,
        "title": "Umeko J - Nyotengu - Page 1",
        "cover": "https://telegra.ph/file/89facba1cefe9bae175d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48017",
        "pageSeq": 48017
    },
    {
        "IDcode": 48018,
        "title": "Aery Tiefling - Ganyu - Page 1",
        "cover": "https://telegra.ph/file/ecc06deec26e308005847.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48018",
        "pageSeq": 48018
    },
    {
        "IDcode": 48019,
        "title": "麻酥酥 - 吉他妹妹 - Page 1",
        "cover": "https://telegra.ph/file/a184c6317a32ef8a638c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48019",
        "pageSeq": 48019
    },
    {
        "IDcode": 48020,
        "title": "[ChuChu♡MAGIC] 聖♡ヌルヌル女学園～無愛想なあの子は性＊＊～ - Page 1",
        "cover": "https://telegra.ph/file/cd57cccfb09083f2c3cf2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48020",
        "pageSeq": 48020
    },
    {
        "IDcode": 48021,
        "title": "宫野莉萝 - 95式玉玲珑福利 - Page 1",
        "cover": "https://telegra.ph/file/9966abd8205f8ee1ecdfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48021",
        "pageSeq": 48021
    },
    {
        "IDcode": 48022,
        "title": "Kaya Huang - Hoshino Ai bikini - Page 1",
        "cover": "https://telegra.ph/file/f5034fdb246a11f3b2ba3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48022",
        "pageSeq": 48022
    },
    {
        "IDcode": 48023,
        "title": "DreamlikeUwU - Keqing - Page 1",
        "cover": "https://telegra.ph/file/0bd43cc7786aee4d215d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48023",
        "pageSeq": 48023
    },
    {
        "IDcode": 48024,
        "title": "DreamlikeUwU - Ganyu succubus - Page 1",
        "cover": "https://telegra.ph/file/10055f5022477ed6956b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48024",
        "pageSeq": 48024
    },
    {
        "IDcode": 48025,
        "title": "九言 - 阮梅 - Page 1",
        "cover": "https://telegra.ph/file/e7b6216f84553027613e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48025",
        "pageSeq": 48025
    },
    {
        "IDcode": 48026,
        "title": "Hana Bunny - Xianyun - Page 1",
        "cover": "https://telegra.ph/file/bba67efbd510ae34aee96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48026",
        "pageSeq": 48026
    },
    {
        "IDcode": 48027,
        "title": "Arty Huang - Guitar Sister - Page 1",
        "cover": "https://telegra.ph/file/0f3666e683f3f3f8e07d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48027",
        "pageSeq": 48027
    },
    {
        "IDcode": 48028,
        "title": "Lizyhs - Tatsumaki - Page 1",
        "cover": "https://telegra.ph/file/28b59d944b89ef4ebf589.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48028",
        "pageSeq": 48028
    },
    {
        "IDcode": 48029,
        "title": "MissWarmJ - Mashu clear see through - Page 1",
        "cover": "https://telegra.ph/file/219b66e2e97b1ab771bcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48029",
        "pageSeq": 48029
    },
    {
        "IDcode": 48030,
        "title": "雪貓Yuki Neko - Tamamo - Page 1",
        "cover": "https://telegra.ph/file/694bc68ccabb0ff693fac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48030",
        "pageSeq": 48030
    },
    {
        "IDcode": 48031,
        "title": "[ChuChu♡MAGIC (なごみ亭ちゅちゅ)] ダーリン?わたしといいことしよっか? (勝利の女神:NIKKE) - Page 1",
        "cover": "https://telegra.ph/file/6f65fcecdf930242f9c35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48031",
        "pageSeq": 48031
    },
    {
        "IDcode": 48032,
        "title": "PoppaChan Yor Forger - Spy x Family - Page 1",
        "cover": "https://telegra.ph/file/aff37fc97a7fa40e01b14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48032",
        "pageSeq": 48032
    },
    {
        "IDcode": 48033,
        "title": "PoppaChan Jingliu - HonkaiStar Rail - Page 1",
        "cover": "https://telegra.ph/file/4964940f7fd37d81e93f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48033",
        "pageSeq": 48033
    },
    {
        "IDcode": 48034,
        "title": "PoppaChan Furina - Genshin Impact - Page 1",
        "cover": "https://telegra.ph/file/fa0c3b0a94c31531849ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48034",
        "pageSeq": 48034
    },
    {
        "IDcode": 48035,
        "title": "Sweetie Fox - Spidergwen (Gwen Stacy) - Page 1",
        "cover": "https://telegra.ph/file/85c6c5db89fbafddf1966.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48035",
        "pageSeq": 48035
    },
    {
        "IDcode": 48036,
        "title": "雪晴Astra 星穹铁道 花火 - Page 1",
        "cover": "https://telegra.ph/file/0c3f8d496300b5e9637bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48036",
        "pageSeq": 48036
    },
    {
        "IDcode": 48037,
        "title": "瓜希酱 - 微博集锦 2024.04.12 - Page 1",
        "cover": "https://telegra.ph/file/1fb4a19bc43c6925f7395.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48037",
        "pageSeq": 48037
    },
    {
        "IDcode": 48038,
        "title": "小容仔咕咕 雪女 - Page 1",
        "cover": "https://telegra.ph/file/4bffd7c89fd42197f064d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48038",
        "pageSeq": 48038
    },
    {
        "IDcode": 48039,
        "title": "Tsuki Desu - Magia Baiser - Page 1",
        "cover": "https://telegra.ph/file/7333749464edf11a4cd8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48039",
        "pageSeq": 48039
    },
    {
        "IDcode": 48040,
        "title": "Genshin Impact Lingerie Cosplay - Page 1",
        "cover": "https://telegra.ph/file/9b9edbcf746259ddd5540.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48040",
        "pageSeq": 48040
    },
    {
        "IDcode": 48041,
        "title": "[铃木美咲(Misaki Suzuki)] 美脚的赐福 阮•梅 - Page 1",
        "cover": "https://telegra.ph/file/ef94dbbe95dd541aaf524.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48041",
        "pageSeq": 48041
    },
    {
        "IDcode": 48042,
        "title": "[铃木美咲(Misaki Suzuki)] 美脚的赐福 布洛妮娅 - Page 1",
        "cover": "https://telegra.ph/file/d6ef532711724a5e983e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48042",
        "pageSeq": 48042
    },
    {
        "IDcode": 48043,
        "title": "[铃木美咲(Misaki Suzuki)] 符玄•洞若观心+甘雨•玄玉瑶芳 - Page 1",
        "cover": "https://telegra.ph/file/5ba24c14bf759e2fad0d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48043",
        "pageSeq": 48043
    },
    {
        "IDcode": 48044,
        "title": "日奈娇 - 小孤独（完整） - Page 1",
        "cover": "https://telegra.ph/file/74c15671ad412180e999a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48044",
        "pageSeq": 48044
    },
    {
        "IDcode": 48045,
        "title": "Peachuu - Kafka - Page 1",
        "cover": "https://telegra.ph/file/772c33630a39d13be0aaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48045",
        "pageSeq": 48045
    },
    {
        "IDcode": 48046,
        "title": "小瑶幺幺 - 琳妮特万圣节版 - Page 1",
        "cover": "https://telegra.ph/file/ba3718e671d5a870eb6ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48046",
        "pageSeq": 48046
    },
    {
        "IDcode": 48047,
        "title": "Rikachan - Yae Miko - Page 1",
        "cover": "https://telegra.ph/file/766afa769770ae0fec8cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48047",
        "pageSeq": 48047
    },
    {
        "IDcode": 48048,
        "title": "笔筒yo优优mi - DVA+明日香 - Page 1",
        "cover": "https://telegra.ph/file/8122ae808d12cc6ce907d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48048",
        "pageSeq": 48048
    },
    {
        "IDcode": 48049,
        "title": "Rikachan - 电锯人玛奇玛 - Page 1",
        "cover": "https://telegra.ph/file/491fc23c5900fe5102258.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48049",
        "pageSeq": 48049
    },
    {
        "IDcode": 48050,
        "title": "Shirokitsune - Easter Jinx - Page 1",
        "cover": "https://telegra.ph/file/8891627e4640f3acba4ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48050",
        "pageSeq": 48050
    },
    {
        "IDcode": 48051,
        "title": "大小姐烂橘子（Rotten_0range_） - 伪娘合集 - Page 1",
        "cover": "https://telegra.ph/file/5bb0d97e834e168ac92a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48051",
        "pageSeq": 48051
    },
    {
        "IDcode": 48052,
        "title": "Sayo Momo - Frieren x Fern - Page 1",
        "cover": "https://telegra.ph/file/cf9acf4fbb62a2641d784.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48052",
        "pageSeq": 48052
    },
    {
        "IDcode": 48053,
        "title": "小仓千代w - 碧蓝航线奇尔沙治运动服 - Page 1",
        "cover": "https://telegra.ph/file/a7bbdcf80948ee6d67c22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48053",
        "pageSeq": 48053
    },
    {
        "IDcode": 48054,
        "title": "黏黏团子兔 - 3月作品约尔太太（已修正） - Page 1",
        "cover": "https://telegra.ph/file/5de254eb78ca14513385e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48054",
        "pageSeq": 48054
    },
    {
        "IDcode": 48055,
        "title": "黏黏团子兔 - 3月作品原神雷电将军 - Page 1",
        "cover": "https://telegra.ph/file/277e2eb3c008ceac6f166.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48055",
        "pageSeq": 48055
    },
    {
        "IDcode": 48056,
        "title": "Byoru - Shadowheart - Page 1",
        "cover": "https://telegra.ph/file/36d538f8d4a1e4df7e4fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48056",
        "pageSeq": 48056
    },
    {
        "IDcode": 48057,
        "title": "半半子 - 兴登堡ヒンデンブルク酔い勝負 - Page 1",
        "cover": "https://telegra.ph/file/b95017eccbc0ad50ad942.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48057",
        "pageSeq": 48057
    },
    {
        "IDcode": 48058,
        "title": "Disharmonica Aerith Cosplay (Final Fantasy 7) - Page 1",
        "cover": "https://telegra.ph/file/2e57cd63b372d94e1dab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48058",
        "pageSeq": 48058
    },
    {
        "IDcode": 48059,
        "title": "桃良阿宅 - 武藏 - Page 1",
        "cover": "https://telegra.ph/file/3f0a45981e718f7dbe3ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48059",
        "pageSeq": 48059
    },
    {
        "IDcode": 48060,
        "title": "Gumiho hannya - Lenore (Castlevania) [Updated] - Page 1",
        "cover": "https://telegra.ph/file/2d0ef02be59c46c6360cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48060",
        "pageSeq": 48060
    },
    {
        "IDcode": 48061,
        "title": "日奈娇 - 明日奈女仆 - Page 1",
        "cover": "https://telegra.ph/file/9fefea19c3407eecf64e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48061",
        "pageSeq": 48061
    },
    {
        "IDcode": 48062,
        "title": "Luceilhime- Kobeni Higashiyama - Page 1",
        "cover": "https://telegra.ph/file/3088512694dddfce2dbce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48062",
        "pageSeq": 48062
    },
    {
        "IDcode": 48063,
        "title": "面饼仙儿&半半子 - Arknights 黑x森蚺バレエ - Page 1",
        "cover": "https://telegra.ph/file/79ecfb5c4bf5e95bde265.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48063",
        "pageSeq": 48063
    },
    {
        "IDcode": 48064,
        "title": "深夜企划 - 全藏森林 游戏宅女 - Page 1",
        "cover": "https://telegra.ph/file/24d0255825c790b327d46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48064",
        "pageSeq": 48064
    },
    {
        "IDcode": 48065,
        "title": "COSPLAYTALES - ソーダ - Page 1",
        "cover": "https://telegra.ph/file/b21503f794e825c0297fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48065",
        "pageSeq": 48065
    },
    {
        "IDcode": 48066,
        "title": "习呆呆 - 流萤 - Page 1",
        "cover": "https://telegra.ph/file/83fa384dd869474c4c9e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48066",
        "pageSeq": 48066
    },
    {
        "IDcode": 48067,
        "title": "封疆疆v - 八重神子 - Page 1",
        "cover": "https://telegra.ph/file/1b315723d7bdffa0a6898.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48067",
        "pageSeq": 48067
    },
    {
        "IDcode": 48068,
        "title": "玄子Genko (@genko_cosplay) - Page 1",
        "cover": "https://telegra.ph/file/48c790131354fd4a9692b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48068",
        "pageSeq": 48068
    },
    {
        "IDcode": 48069,
        "title": "玄子Genko (@genko_cosplay) - Page 2",
        "cover": "https://telegra.ph/file/3393c2802ccc0baa4070a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48069",
        "pageSeq": 48069
    },
    {
        "IDcode": 48070,
        "title": "玄子Genko (@genko_cosplay) - Page 3",
        "cover": "https://telegra.ph/file/ff59e7e752c16652ced8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48070",
        "pageSeq": 48070
    },
    {
        "IDcode": 48071,
        "title": "【絞肉姬】明日方舟W—愚夜密函【60p/12M】 - Page 1",
        "cover": "https://telegra.ph/file/3634cd2e4fbfaa76f1a0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=48071",
        "pageSeq": 48071
    }
];
