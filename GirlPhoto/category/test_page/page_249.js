// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 46972,
        "title": "[Twitter] KaYa Huang ❤️萱❤️ (@kaya1028) - Page 1",
        "cover": "https://telegra.ph/file/189ca4c3fe80e2eb61e5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46972",
        "pageSeq": 46972
    },
    {
        "IDcode": 46973,
        "title": "一笑芳香沁 - 2B (NieR:Automata) - Page 1",
        "cover": "https://telegra.ph/file/2630d29c99091606c3b22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46973",
        "pageSeq": 46973
    },
    {
        "IDcode": 46974,
        "title": "Hidori Rose - Marie Rose cosplay - Page 1",
        "cover": "https://telegra.ph/file/1afa8a7b142a849f4ab99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46974",
        "pageSeq": 46974
    },
    {
        "IDcode": 46975,
        "title": "G44不会受伤 - euphoria - Page 1",
        "cover": "https://telegra.ph/file/999d5b0e58dbaf300908c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46975",
        "pageSeq": 46975
    },
    {
        "IDcode": 46976,
        "title": "习呆呆 - 刻晴 - Page 1",
        "cover": "https://telegra.ph/file/9dc6c524b2a82e39a10d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46976",
        "pageSeq": 46976
    },
    {
        "IDcode": 46977,
        "title": "星之迟迟 - Christmas 2B -sakimichan ver. - Page 1",
        "cover": "https://telegra.ph/file/161a6d00e34ef9fd4a8af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46977",
        "pageSeq": 46977
    },
    {
        "IDcode": 46978,
        "title": "KuukoW - Tifa - Page 1",
        "cover": "https://telegra.ph/file/ab3ba5f8d96c680edf06b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46978",
        "pageSeq": 46978
    },
    {
        "IDcode": 46979,
        "title": "KuuKo W - 芭芭拉 - Page 1",
        "cover": "https://telegra.ph/file/e512eec0a32d46e3309b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46979",
        "pageSeq": 46979
    },
    {
        "IDcode": 46980,
        "title": "[Twitter] Larissa Rochefort (@larochefort11) - Page 1",
        "cover": "https://telegra.ph/file/8373c30d940754415177a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46980",
        "pageSeq": 46980
    },
    {
        "IDcode": 46981,
        "title": "Rocksy Light - Asuka Bunny - Page 1",
        "cover": "https://telegra.ph/file/7700c9f0c9a5045b78131.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46981",
        "pageSeq": 46981
    },
    {
        "IDcode": 46982,
        "title": "Hana Bunny - Ada Tifa - Page 1",
        "cover": "https://telegra.ph/file/15fc816cfc93ed928dd72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46982",
        "pageSeq": 46982
    },
    {
        "IDcode": 46983,
        "title": "一笑芳香沁 - 天命之子哈特帕克 - Page 1",
        "cover": "https://telegra.ph/file/a80a27f07bf53210e16a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46983",
        "pageSeq": 46983
    },
    {
        "IDcode": 46984,
        "title": "Arty and Kaya - Alter Girls - Page 1",
        "cover": "https://telegra.ph/file/15ef26d1c95e3b89b0475.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46984",
        "pageSeq": 46984
    },
    {
        "IDcode": 46985,
        "title": "Kuuko - Marie Rose Martini Bikini (Dead or Alive) - Page 1",
        "cover": "https://telegra.ph/file/647d8516448115b900658.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46985",
        "pageSeq": 46985
    },
    {
        "IDcode": 46986,
        "title": "Usatame - Poolside Kawakami - Page 1",
        "cover": "https://telegra.ph/file/9dbabf37963c55b9dbd8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46986",
        "pageSeq": 46986
    },
    {
        "IDcode": 46987,
        "title": "[コスプレイヤー] 流一喵 これくしょん - Page 1",
        "cover": "https://telegra.ph/file/9524b4ea320e18738e8c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46987",
        "pageSeq": 46987
    },
    {
        "IDcode": 46988,
        "title": "KuukoW - Marie Rose Fortune Bikini (Dead or Alive) - Page 1",
        "cover": "https://telegra.ph/file/93fe2a3dedeeb71c35e49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46988",
        "pageSeq": 46988
    },
    {
        "IDcode": 46989,
        "title": "ShiroKitsune - Black Cat (Spider-Man) - Page 1",
        "cover": "https://telegra.ph/file/2ae7091dbbb7a646a7653.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46989",
        "pageSeq": 46989
    },
    {
        "IDcode": 46990,
        "title": "[アクアエリア] FGO ネロ＆玉藻前 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/5f1803042664facac5bfa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46990",
        "pageSeq": 46990
    },
    {
        "IDcode": 46991,
        "title": "KuukoW - Yang GuiFei (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/4b0b88e94e251db86796b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46991",
        "pageSeq": 46991
    },
    {
        "IDcode": 46992,
        "title": "[Twitter] Peach Milky | ソフィー (@PeachMilky_) - Page 1",
        "cover": "https://telegra.ph/file/9b137bc0f014699438f60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46992",
        "pageSeq": 46992
    },
    {
        "IDcode": 46993,
        "title": "KuukoW - Ishtar (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/4a7cf3c6ee5f5f0ab6f4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46993",
        "pageSeq": 46993
    },
    {
        "IDcode": 46994,
        "title": "[沖田凜花Rinka] USS St. Louis, Luxury Handle ver. (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/1c14cfc81042f3eb85594.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46994",
        "pageSeq": 46994
    },
    {
        "IDcode": 46995,
        "title": "KuukoW - Meltlilith 2020 - Page 1",
        "cover": "https://telegra.ph/file/5f8a3a6e89ec03faad40c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46995",
        "pageSeq": 46995
    },
    {
        "IDcode": 46996,
        "title": "水淼 チェシャー - Page 1",
        "cover": "https://telegra.ph/file/82ecc582eb9e2a60a4112.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46996",
        "pageSeq": 46996
    },
    {
        "IDcode": 46997,
        "title": "KuukoW - Shuten Douji (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/a1d6d81da4215f94279de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46997",
        "pageSeq": 46997
    },
    {
        "IDcode": 46998,
        "title": "[コスプレイヤー] Katyuska Moonfox これくしょん - Page 1",
        "cover": "https://telegra.ph/file/af6847be3061ae4a10b68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46998",
        "pageSeq": 46998
    },
    {
        "IDcode": 46999,
        "title": "ShiroKitsune - Rem Bunny Girl (Re:Zero kara Hajimeru Isekai Seikatsu) - Page 1",
        "cover": "https://telegra.ph/file/09ca07d24947141327ac7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=46999",
        "pageSeq": 46999
    },
    {
        "IDcode": 47000,
        "title": "Kuuko W- Taimanin Yukikaze - Page 1",
        "cover": "https://telegra.ph/file/dfdf08851c6199bdb4714.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47000",
        "pageSeq": 47000
    },
    {
        "IDcode": 47001,
        "title": "[Twitter] 小丁こまち (@Zell_Ching) (@_KOMACHI_1) - Page 1",
        "cover": "https://telegra.ph/file/02ab8ff44c3ef28e0dd86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47001",
        "pageSeq": 47001
    },
    {
        "IDcode": 47002,
        "title": "Hidori Rose - Cinnamon Idol - Page 1",
        "cover": "https://telegra.ph/file/797b715027ece6010ac12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47002",
        "pageSeq": 47002
    },
    {
        "IDcode": 47003,
        "title": "凉凉子rioko Azurlane Amagi - Page 1",
        "cover": "https://telegra.ph/file/1aa3e8cdb0f2d9b471979.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47003",
        "pageSeq": 47003
    },
    {
        "IDcode": 47004,
        "title": "[Twitter] Momoko葵葵 (@Leo_aoi) - Page 1",
        "cover": "https://telegra.ph/file/e1dfcb61d1aca16c54ae0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47004",
        "pageSeq": 47004
    },
    {
        "IDcode": 47005,
        "title": "[nonsummerjack] FGOカイニス Invincible mode (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/f01354b127a94bc5a6353.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47005",
        "pageSeq": 47005
    },
    {
        "IDcode": 47006,
        "title": "Hana Bunny – Boa Hancock - Page 1",
        "cover": "https://telegra.ph/file/6590d918e03478830b73c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47006",
        "pageSeq": 47006
    },
    {
        "IDcode": 47007,
        "title": "[神探火狸狸] 碧蓝航线 路易九世换装「华服的圣骑士」 - Page 1",
        "cover": "https://telegra.ph/file/75a3770b61b31229748ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47007",
        "pageSeq": 47007
    },
    {
        "IDcode": 47008,
        "title": "Gumiho.arts - Rem (lingerie) - Page 1",
        "cover": "https://telegra.ph/file/d0fed8d278f52f1c36be4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47008",
        "pageSeq": 47008
    },
    {
        "IDcode": 47009,
        "title": "[舞小喵_] Tamano No Mae - Page 1",
        "cover": "https://telegra.ph/file/42f5a95a57d30c664b57a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47009",
        "pageSeq": 47009
    },
    {
        "IDcode": 47010,
        "title": "Hana Bunny - Android 18 - Page 1",
        "cover": "https://telegra.ph/file/38269b23fda6b1dc9bdb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47010",
        "pageSeq": 47010
    },
    {
        "IDcode": 47011,
        "title": "Yoshinobi - Chika Fujiwara - Page 1",
        "cover": "https://telegra.ph/file/c42ac2632c7995fdcb997.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47011",
        "pageSeq": 47011
    },
    {
        "IDcode": 47012,
        "title": "Chihiro Sama - Kimetsu no Yaiba - Page 1",
        "cover": "https://telegra.ph/file/c12d8b888dfbd6f656ef0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47012",
        "pageSeq": 47012
    },
    {
        "IDcode": 47013,
        "title": "Arty Huang - Belfast - Page 1",
        "cover": "https://telegra.ph/file/c347b734f4fea6711d329.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47013",
        "pageSeq": 47013
    },
    {
        "IDcode": 47014,
        "title": "Coconut lingerie cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/556a34c91cf71153f6367.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47014",
        "pageSeq": 47014
    },
    {
        "IDcode": 47015,
        "title": "Sweetie Fox - Toga Himiko - Page 1",
        "cover": "https://telegra.ph/file/180faa412a0273d98317f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47015",
        "pageSeq": 47015
    },
    {
        "IDcode": 47016,
        "title": "[My Suite (あつき)] M trainers!!【pkmnメイ・マリィ】(ポケットモンスター) - Page 1",
        "cover": "https://telegra.ph/file/2ed45d64474ee711672eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47016",
        "pageSeq": 47016
    },
    {
        "IDcode": 47017,
        "title": "Kuuko W – Paimon - Page 1",
        "cover": "https://telegra.ph/file/f532c94ad6943a00183ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47017",
        "pageSeq": 47017
    },
    {
        "IDcode": 47018,
        "title": "Enafox - Tifa - Page 1",
        "cover": "https://telegra.ph/file/339a4f937dd2fd0d4ab7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47018",
        "pageSeq": 47018
    },
    {
        "IDcode": 47019,
        "title": "ShiroKitsune - Sirius Cheongsam (Azur Lane) - Page 1",
        "cover": "https://telegra.ph/file/f2778dd75fc4f548b5505.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47019",
        "pageSeq": 47019
    },
    {
        "IDcode": 47020,
        "title": "rioko凉凉子 信浓礼服 - Page 1",
        "cover": "https://telegra.ph/file/be147b4a4e4ed63f8c416.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47020",
        "pageSeq": 47020
    },
    {
        "IDcode": 47021,
        "title": "[アクアエリア] FF7Rティファ (ファイナルファンタジーVII) - Page 1",
        "cover": "https://telegra.ph/file/e4292df08cc30954490b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47021",
        "pageSeq": 47021
    },
    {
        "IDcode": 47022,
        "title": "Octokuro Model - Seras Victoria - Page 1",
        "cover": "https://telegra.ph/file/5f66f23892a2911f35406.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47022",
        "pageSeq": 47022
    },
    {
        "IDcode": 47023,
        "title": "奶牛◎Coser@Arty亞緹 - Page 1",
        "cover": "https://telegra.ph/file/63dddb21c86d7ab658b09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47023",
        "pageSeq": 47023
    },
    {
        "IDcode": 47024,
        "title": "鬼灭之刃 甘露寺 Coser@Arty亞緹 - Page 1",
        "cover": "https://telegra.ph/file/a26f261b161f8cf8bd47d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47024",
        "pageSeq": 47024
    },
    {
        "IDcode": 47025,
        "title": "[COSH-062]こすっち062/究極再現度の2.5次元美少女！！ウエスト実測53cmの色白スレンダーボディとの子作り本気エッチ！俺の柱が子宮を穿つ！中出しと同時にエビ反り激イキ孕まSEX！！ - Page 1",
        "cover": "https://telegra.ph/file/58b75f11b8a0aff4bf61b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47025",
        "pageSeq": 47025
    },
    {
        "IDcode": 47026,
        "title": "[Arty亞緹] Amiya [October Tier1] - Page 1",
        "cover": "https://telegra.ph/file/f399fa290fba3e30484bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47026",
        "pageSeq": 47026
    },
    {
        "IDcode": 47027,
        "title": "芦屋のりこ 淫獣学園 - Page 1",
        "cover": "https://telegra.ph/file/050ebe34135a70824a2dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47027",
        "pageSeq": 47027
    },
    {
        "IDcode": 47028,
        "title": "念念_D - Page 1",
        "cover": "https://telegra.ph/file/de21ef889b22a65b785dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47028",
        "pageSeq": 47028
    },
    {
        "IDcode": 47029,
        "title": "網紅少女九尾狐狸m(香草少女m)蕾姆cos紫薇 - Page 1",
        "cover": "https://telegra.ph/file/f1df4ba0a29ee8ce09328.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47029",
        "pageSeq": 47029
    },
    {
        "IDcode": 47030,
        "title": "Shiro Kitsune - Page 1",
        "cover": "https://telegra.ph/file/b836a1f29104d8051b1a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47030",
        "pageSeq": 47030
    },
    {
        "IDcode": 47031,
        "title": "Azami - Toga Bikini - Page 1",
        "cover": "https://telegra.ph/file/efdce65adb20eeea74b72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47031",
        "pageSeq": 47031
    },
    {
        "IDcode": 47032,
        "title": "Azami - Fubuki (One Punch Man) - Page 1",
        "cover": "https://telegra.ph/file/474ddab04fef54cf1b291.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47032",
        "pageSeq": 47032
    },
    {
        "IDcode": 47033,
        "title": "(CH28) [coli厨 (水無月みり)] 主従関係（愛）に狂い、堕ちましょう? (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/bfbbe5ebf681b3f334ac5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47033",
        "pageSeq": 47033
    },
    {
        "IDcode": 47034,
        "title": "Cosplay面饼仙儿 – 逸仙高清写真集 - Page 1",
        "cover": "https://telegra.ph/file/b00c02a18d8a65dcb837d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47034",
        "pageSeq": 47034
    },
    {
        "IDcode": 47035,
        "title": "[星之迟迟] イリヤスフィール・フォン・アインツベルン (Fate/kaleid liner プリズマ☆イリヤ) - Page 1",
        "cover": "https://telegra.ph/file/36fae00c0ee1451c9d606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47035",
        "pageSeq": 47035
    },
    {
        "IDcode": 47036,
        "title": "[PingPing]  紫式部 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/1b99a82de0e58ec66d1f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47036",
        "pageSeq": 47036
    },
    {
        "IDcode": 47037,
        "title": "Hana Bunny - Tamamo Police - Page 1",
        "cover": "https://telegra.ph/file/235d95750d2834433fe71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47037",
        "pageSeq": 47037
    },
    {
        "IDcode": 47038,
        "title": "[沖田凜花Rinka] PA-15 (少女前線) - Page 1",
        "cover": "https://telegra.ph/file/8d68b9b72f45f8e28bc3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47038",
        "pageSeq": 47038
    },
    {
        "IDcode": 47039,
        "title": "[沖田凜花Rinka] 島風 (艦隊これくしょん -艦これ-) - Page 1",
        "cover": "https://telegra.ph/file/87a555b23d576285269f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47039",
        "pageSeq": 47039
    },
    {
        "IDcode": 47040,
        "title": "[起司块wii] 柴郡 自拍 - Page 1",
        "cover": "https://telegra.ph/file/5931b527bb3e2a437011c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47040",
        "pageSeq": 47040
    },
    {
        "IDcode": 47041,
        "title": "[蠢沫沫] 赫斯提亚 兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/8cdd0cace8543992e93ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47041",
        "pageSeq": 47041
    },
    {
        "IDcode": 47042,
        "title": "[蠢沫沫] 杨玉环二破 - Page 1",
        "cover": "https://telegra.ph/file/dc5dc6ebb76f511d3bc34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47042",
        "pageSeq": 47042
    },
    {
        "IDcode": 47043,
        "title": "RocksyLight Little Red Riding Hood Set - Page 1",
        "cover": "https://telegra.ph/file/698a2be162cf0100caa95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47043",
        "pageSeq": 47043
    },
    {
        "IDcode": 47044,
        "title": "[蠢沫沫] 雅儿贝德 - Page 1",
        "cover": "https://telegra.ph/file/e48fc300ee06166d6b670.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47044",
        "pageSeq": 47044
    },
    {
        "IDcode": 47045,
        "title": "Kaya Azurlane Atago - Page 1",
        "cover": "https://telegra.ph/file/d1c18cfc327e22fea090c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47045",
        "pageSeq": 47045
    },
    {
        "IDcode": 47046,
        "title": "蕾姆女仆自拍 - Page 1",
        "cover": "https://telegra.ph/file/fa649c87b0ceb592cd658.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47046",
        "pageSeq": 47046
    },
    {
        "IDcode": 47047,
        "title": "莫德雷德战斗服自拍 - Page 1",
        "cover": "https://telegra.ph/file/41bf68f14138b3a8c4feb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47047",
        "pageSeq": 47047
    },
    {
        "IDcode": 47048,
        "title": "玉藻前一破自拍 - Page 1",
        "cover": "https://telegra.ph/file/cd27c53b5548e30f04c84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47048",
        "pageSeq": 47048
    },
    {
        "IDcode": 47049,
        "title": "FGO玛修自拍 - Page 1",
        "cover": "https://telegra.ph/file/bb5ba26b7dc2283e5d039.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47049",
        "pageSeq": 47049
    },
    {
        "IDcode": 47050,
        "title": "[HERESY (林檎蜜紀)] エッチなジャンヌお姉ちゃんの人 - Page 1",
        "cover": "https://telegra.ph/file/6a80a80b283cfc0a5feb0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47050",
        "pageSeq": 47050
    },
    {
        "IDcode": 47051,
        "title": "[izumi泉桃子] 靡烟旗袍2B - Page 1",
        "cover": "https://telegra.ph/file/854f716eb7315c3b34c1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47051",
        "pageSeq": 47051
    },
    {
        "IDcode": 47052,
        "title": "[星之迟迟] 伊吹 - Page 1",
        "cover": "https://telegra.ph/file/a7c1269910aade18ecfff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47052",
        "pageSeq": 47052
    },
    {
        "IDcode": 47053,
        "title": "[星之迟迟]  吾妻 - Page 1",
        "cover": "https://telegra.ph/file/1d1a873edb29c454aa761.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47053",
        "pageSeq": 47053
    },
    {
        "IDcode": 47054,
        "title": "[星之迟迟]  黛朵 - Page 1",
        "cover": "https://telegra.ph/file/a9629d325ff70f015d410.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47054",
        "pageSeq": 47054
    },
    {
        "IDcode": 47055,
        "title": "Octokuro Model - Tsunade's Sex Party - Page 1",
        "cover": "https://telegra.ph/file/10fd052c127cf8570a21a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47055",
        "pageSeq": 47055
    },
    {
        "IDcode": 47056,
        "title": "宇○ちゃんは弄びたいっ！ - Page 1",
        "cover": "https://telegra.ph/file/264f5849d36e6226244de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47056",
        "pageSeq": 47056
    },
    {
        "IDcode": 47057,
        "title": "オンライン風俗魔法少女パイパンマミ - Page 1",
        "cover": "https://telegra.ph/file/1da5448689cb5f57bc9bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47057",
        "pageSeq": 47057
    },
    {
        "IDcode": 47058,
        "title": "Azur Lane Cheshire cosplay by Hidori Rose - Page 1",
        "cover": "https://telegra.ph/file/87925e9cf540981185302.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47058",
        "pageSeq": 47058
    },
    {
        "IDcode": 47059,
        "title": "[アクアエリア] ジャンヌ・ダルク(オルタ) 水着Ver (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/ea2bbe3367d6dc56b415d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47059",
        "pageSeq": 47059
    },
    {
        "IDcode": 47060,
        "title": "[アクアエリア] アズールレーン 天城 (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/de8093fe1c828413d7a06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47060",
        "pageSeq": 47060
    },
    {
        "IDcode": 47061,
        "title": "[my suite (あつき)] Suite blossom (Fate/stay night) [DL版] - Page 1",
        "cover": "https://telegra.ph/file/7acc72a975f7b5fc96ca0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47061",
        "pageSeq": 47061
    },
    {
        "IDcode": 47062,
        "title": "[my suite (あつき)] Suite Extella Link.II (Fate/EXTRA) [DL版] - Page 1",
        "cover": "https://telegra.ph/file/7f579126705978a1de7df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47062",
        "pageSeq": 47062
    },
    {
        "IDcode": 47063,
        "title": "[my suite (あつき)] Suite Extella Link.I (Fate/EXTRA) [DL版] - Page 1",
        "cover": "https://telegra.ph/file/397466c9be38bf78b4d08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47063",
        "pageSeq": 47063
    },
    {
        "IDcode": 47064,
        "title": "Kalinka Fox - Hermione Granger - Page 1",
        "cover": "https://telegra.ph/file/97d33cf1a7f474196eb0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47064",
        "pageSeq": 47064
    },
    {
        "IDcode": 47065,
        "title": "星之迟迟 – 特里奥姬 - Page 1",
        "cover": "https://telegra.ph/file/d061d48215d8eef36eb2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47065",
        "pageSeq": 47065
    },
    {
        "IDcode": 47066,
        "title": "星之迟迟 Bishoujo Mangekyou Kagarino Kirie - Page 1",
        "cover": "https://telegra.ph/file/ceb3f6d79c329585d0a1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47066",
        "pageSeq": 47066
    },
    {
        "IDcode": 47067,
        "title": "Hana Bunny - Tifa Dress - Page 1",
        "cover": "https://telegra.ph/file/7ff3a443527e047f80fbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47067",
        "pageSeq": 47067
    },
    {
        "IDcode": 47068,
        "title": "[神楽坂真冬] 極楽の氷 - Page 1",
        "cover": "https://telegra.ph/file/a496280508e08d5852408.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47068",
        "pageSeq": 47068
    },
    {
        "IDcode": 47069,
        "title": "[神楽坂真冬] 刀ノ語 - Page 1",
        "cover": "https://telegra.ph/file/69aea75579be789767e87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47069",
        "pageSeq": 47069
    },
    {
        "IDcode": 47070,
        "title": "[神楽坂真冬] 果実の酒気(酒吞) - Page 1",
        "cover": "https://telegra.ph/file/3d546a4d93be791114482.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47070",
        "pageSeq": 47070
    },
    {
        "IDcode": 47071,
        "title": "[アクアエリア] アズールレーン チャパエフ (アズールレーン) - Page 1",
        "cover": "https://telegra.ph/file/feeda3874c70d449cdff9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=47071",
        "pageSeq": 47071
    }
];
