// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41055,
        "title": "Lovely Space Kitten - Raven (Teen Titans)",
        "cover": "https://telegra.ph/file/aad441f99f4e7ac2afd05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41055",
        "pageSeq": 41055
    },
    {
        "IDcode": 41056,
        "title": "Kyokoyaki - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/1ccfca79f621d9162a6b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41056",
        "pageSeq": 41056
    },
    {
        "IDcode": 41057,
        "title": "Hassekai - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/dfe9f9d7dbc8f2d5bf447.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41057",
        "pageSeq": 41057
    },
    {
        "IDcode": 41058,
        "title": "Hidori Rose - Perona (One Piece)",
        "cover": "https://telegra.ph/file/3307d8093faca7d32983a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41058",
        "pageSeq": 41058
    },
    {
        "IDcode": 41059,
        "title": "Hinatasama - Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/1e977b7bae959594d5fb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41059",
        "pageSeq": 41059
    },
    {
        "IDcode": 41060,
        "title": "Kuuko W - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/cf9ea4e88220569e9827f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41060",
        "pageSeq": 41060
    },
    {
        "IDcode": 41061,
        "title": "Aery Tiefling - Tifa Xmas (Final Fantasy)",
        "cover": "https://telegra.ph/file/bd9a4fc36bca7197086f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41061",
        "pageSeq": 41061
    },
    {
        "IDcode": 41062,
        "title": "Umeko J - Marie Rose Xmas (Dead Or Alive)",
        "cover": "https://telegra.ph/file/c4efb68d2dc5fbf787170.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41062",
        "pageSeq": 41062
    },
    {
        "IDcode": 41063,
        "title": "Potato Godzilla - Lumine Chritmas (Genshin Impact)",
        "cover": "https://telegra.ph/file/087e39f3b240e1722ca00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41063",
        "pageSeq": 41063
    },
    {
        "IDcode": 41064,
        "title": "HaneAme - Sinful Nun YD devil Xmas",
        "cover": "https://telegra.ph/file/fc938d691ff3413ca4916.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41064",
        "pageSeq": 41064
    },
    {
        "IDcode": 41065,
        "title": "Potato Godzilla - Lumine (Genshin Impact)",
        "cover": "https://telegra.ph/file/0aeff1c82cab87740d0f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41065",
        "pageSeq": 41065
    },
    {
        "IDcode": 41066,
        "title": "Hane Ame 那位大人 精灵村人14号 (Elf Villager)",
        "cover": "https://telegra.ph/file/943feb64636bf156ace74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41066",
        "pageSeq": 41066
    },
    {
        "IDcode": 41067,
        "title": "Kyokoyaki - Ganyu Cow (Genshin Impact)",
        "cover": "https://telegra.ph/file/d9c122e045c9dae7d9bc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41067",
        "pageSeq": 41067
    },
    {
        "IDcode": 41068,
        "title": "Kuuko W - Hanya (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/20a47af89f82e6fcbd991.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41068",
        "pageSeq": 41068
    },
    {
        "IDcode": 41069,
        "title": "Hina Jiao - Hitori Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/ace23e13b3d130ea9e1f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41069",
        "pageSeq": 41069
    },
    {
        "IDcode": 41070,
        "title": "ZinieQ - Cynthia (Pokemon)",
        "cover": "https://telegra.ph/file/e55c8b945de3f2bb58d13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41070",
        "pageSeq": 41070
    },
    {
        "IDcode": 41071,
        "title": "Yang Bu Bu Ya - Kinako",
        "cover": "https://telegra.ph/file/90d5442e801c52a5a856d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41071",
        "pageSeq": 41071
    },
    {
        "IDcode": 41072,
        "title": "Monoki chan - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/ff97d8af387e71dbacb01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41072",
        "pageSeq": 41072
    },
    {
        "IDcode": 41073,
        "title": "TiTi - Princess Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/729a0d63ebef335dcd1ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41073",
        "pageSeq": 41073
    },
    {
        "IDcode": 41074,
        "title": "Sakurai Ning Ning - Izumi Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/a3a2aef7eb64624ddf0ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41074",
        "pageSeq": 41074
    },
    {
        "IDcode": 41075,
        "title": "Caticornplay - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/2269784b31874305e7d73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41075",
        "pageSeq": 41075
    },
    {
        "IDcode": 41076,
        "title": "Meiilyn - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/123211c5fe9fa478564ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41076",
        "pageSeq": 41076
    },
    {
        "IDcode": 41077,
        "title": "ZinieQ - Dawn Team Rocket (Pokemon)",
        "cover": "https://telegra.ph/file/3a567832f03cadcdb30b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41077",
        "pageSeq": 41077
    },
    {
        "IDcode": 41078,
        "title": "SunnyVier - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/933175e85532cd4912049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41078",
        "pageSeq": 41078
    },
    {
        "IDcode": 41079,
        "title": "Kuuko W - Houhou (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/3bbac823d2b647276cced.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41079",
        "pageSeq": 41079
    },
    {
        "IDcode": 41080,
        "title": "Donna Loli - Kobeni Bunny (Chainsaw Man)",
        "cover": "https://telegra.ph/file/827ebed4f602aef112ff8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41080",
        "pageSeq": 41080
    },
    {
        "IDcode": 41081,
        "title": "Hane Ame - Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/cde2b37f11cad1ecf8c25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41081",
        "pageSeq": 41081
    },
    {
        "IDcode": 41082,
        "title": "Tokar - Surtr (Arknights)",
        "cover": "https://telegra.ph/file/f636fc36e037a267eb67f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41082",
        "pageSeq": 41082
    },
    {
        "IDcode": 41083,
        "title": "Mikomi Hokina & Liinowitsch & Lealolly - Coconut X Maple X Azuki Ero (Nekopara)",
        "cover": "https://telegra.ph/file/46ca29645bedca9a34cf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41083",
        "pageSeq": 41083
    },
    {
        "IDcode": 41084,
        "title": "Byoru - Mavis (Hotel Transilvania)",
        "cover": "https://telegra.ph/file/7b0e28b440646029b08e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41084",
        "pageSeq": 41084
    },
    {
        "IDcode": 41085,
        "title": "Byoru - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/b832b7f01b731df988250.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41085",
        "pageSeq": 41085
    },
    {
        "IDcode": 41086,
        "title": "Vinnegal - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/527a2c192cfbe37dd4fa2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41086",
        "pageSeq": 41086
    },
    {
        "IDcode": 41087,
        "title": "Lady Melamori - Sucrose (Genshin Impact)",
        "cover": "https://telegra.ph/file/ea42430432a708e8b8454.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41087",
        "pageSeq": 41087
    },
    {
        "IDcode": 41088,
        "title": "Nookkiizz - Yor and Anya Forger (Spy xFamily)",
        "cover": "https://telegra.ph/file/5234739f2990503d7fbb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41088",
        "pageSeq": 41088
    },
    {
        "IDcode": 41089,
        "title": "Mojito - Satsuki (Kill la Kill)",
        "cover": "https://telegra.ph/file/0114a0eac05b714fc0717.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41089",
        "pageSeq": 41089
    },
    {
        "IDcode": 41090,
        "title": "Fantasy Factory - Tape",
        "cover": "https://telegra.ph/file/a3fb3421545ce3ccc5e36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41090",
        "pageSeq": 41090
    },
    {
        "IDcode": 41091,
        "title": "Ana Chuu - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/6b21d2bd4c1d75248689e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41091",
        "pageSeq": 41091
    },
    {
        "IDcode": 41092,
        "title": "柚木yuzuki - 学生制服 捆绑",
        "cover": "https://telegra.ph/file/b8b811b0600c528252401.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41092",
        "pageSeq": 41092
    },
    {
        "IDcode": 41093,
        "title": "Byoru & Hana Bunny - Frieren & Fern (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/e1fa9be542190869123b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41093",
        "pageSeq": 41093
    },
    {
        "IDcode": 41094,
        "title": "Vinnegal - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/6ec0608987ed2c83e6b1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41094",
        "pageSeq": 41094
    },
    {
        "IDcode": 41095,
        "title": "Byoru - Hiiragi Utena / Baiser - Selfies (Mahou Shoujo ni Akogarete)",
        "cover": "https://telegra.ph/file/6a5b570804a9226b958ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41095",
        "pageSeq": 41095
    },
    {
        "IDcode": 41096,
        "title": "Fantasy Factory - 慾茶園",
        "cover": "https://telegra.ph/file/53cbf9ff3a6f1805340aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41096",
        "pageSeq": 41096
    },
    {
        "IDcode": 41097,
        "title": "Octokuro - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/aad82eb514c65b69274b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41097",
        "pageSeq": 41097
    },
    {
        "IDcode": 41098,
        "title": "ZinieQ - Marie Rose Bikini (Dead Or Alive)",
        "cover": "https://telegra.ph/file/db907c9d2796df815076d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41098",
        "pageSeq": 41098
    },
    {
        "IDcode": 41099,
        "title": "Aery Tiefling - Alice (NIKKE)",
        "cover": "https://telegra.ph/file/f968d72bdae8fd3768ba6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41099",
        "pageSeq": 41099
    },
    {
        "IDcode": 41100,
        "title": "Shimo - Elf Mura (Elf Village)",
        "cover": "https://telegra.ph/file/1ea9b412d65ee28d7eda9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41100",
        "pageSeq": 41100
    },
    {
        "IDcode": 41101,
        "title": "Lovely Space Kitten - Chloe (Kuroinu)",
        "cover": "https://telegra.ph/file/58e3083dfd2082b77a2b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41101",
        "pageSeq": 41101
    },
    {
        "IDcode": 41102,
        "title": "Sayo Momo - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/9a4209c5448cd299c3a6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41102",
        "pageSeq": 41102
    },
    {
        "IDcode": 41104,
        "title": "Fantasy Factory - 逆童貞殺す毛衣",
        "cover": "https://telegra.ph/file/374ba6b4c1be8dd692080.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41104",
        "pageSeq": 41104
    },
    {
        "IDcode": 41105,
        "title": "九言 Jiu Yan -  小恶魔",
        "cover": "https://telegra.ph/file/5166fbffee49e04740318.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41105",
        "pageSeq": 41105
    },
    {
        "IDcode": 41106,
        "title": "BakaChi - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/fb808aa800edac50cb672.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41106",
        "pageSeq": 41106
    },
    {
        "IDcode": 41108,
        "title": "Alina Becker - Uzaki (Uzaki chan)",
        "cover": "https://telegra.ph/file/da0806e9a6d9494632974.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41108",
        "pageSeq": 41108
    },
    {
        "IDcode": 41109,
        "title": "Xidaidai - Frieren (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/1a2877ab15d8a3acf4da6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41109",
        "pageSeq": 41109
    },
    {
        "IDcode": 41110,
        "title": "Yoshinobi - Fern Selfies (Sousou No Frieren)",
        "cover": "https://telegra.ph/file/37000872c2c9b3e78f63c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41110",
        "pageSeq": 41110
    },
    {
        "IDcode": 41111,
        "title": "Potato Godzilla - White Bunny",
        "cover": "https://telegra.ph/file/e1f59812bf3148de8128f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41111",
        "pageSeq": 41111
    },
    {
        "IDcode": 41112,
        "title": "Cocopie - Pieck (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/11644a3136c371a8879c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41112",
        "pageSeq": 41112
    },
    {
        "IDcode": 41113,
        "title": "Monoki chan - Harley Quinn",
        "cover": "https://telegra.ph/file/05e6dd1b18478159b6e46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41113",
        "pageSeq": 41113
    },
    {
        "IDcode": 41114,
        "title": "Angel chan - Daddy's Girl",
        "cover": "https://telegra.ph/file/2f202538389b57ad85389.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41114",
        "pageSeq": 41114
    },
    {
        "IDcode": 41115,
        "title": "Aery Tiefling - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/291e99a7ed3e28ef0b477.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41115",
        "pageSeq": 41115
    },
    {
        "IDcode": 41116,
        "title": "Wanco / Kiminogeboku - Aqua (Hololive)",
        "cover": "https://telegra.ph/file/f8eb277bbb94e78aa2f94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41116",
        "pageSeq": 41116
    },
    {
        "IDcode": 41117,
        "title": "Meladinha - Maid 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/b59e787f9e7554c3091b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41117",
        "pageSeq": 41117
    },
    {
        "IDcode": 41118,
        "title": "Meenfox - Ayaka (Genshin Impact)",
        "cover": "https://telegra.ph/file/801179f2a9942bccde438.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41118",
        "pageSeq": 41118
    },
    {
        "IDcode": 41119,
        "title": "Lada Lyumos - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/39c15e6f81176c5928968.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41119",
        "pageSeq": 41119
    },
    {
        "IDcode": 41120,
        "title": "Virtual Geisha - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/6a595750512447f8c2221.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41120",
        "pageSeq": 41120
    },
    {
        "IDcode": 41121,
        "title": "桃暖酱 Tao Nuan Jiang - Ram (Re Zero)",
        "cover": "https://telegra.ph/file/c7cd5e45c64a81b28a466.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41121",
        "pageSeq": 41121
    },
    {
        "IDcode": 41122,
        "title": "Hane Ame - Chiyo (Ane Naru Mono)",
        "cover": "https://telegra.ph/file/a556e6bc6bbf7167dc883.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41122",
        "pageSeq": 41122
    },
    {
        "IDcode": 41123,
        "title": "Hane Ame - Bunny Reika (Gantz)",
        "cover": "https://telegra.ph/file/9c7a2a8bbb8425b505a35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41123",
        "pageSeq": 41123
    },
    {
        "IDcode": 41124,
        "title": "Neppu - Houhou Marine (Hololive)",
        "cover": "https://telegra.ph/file/07c89a4315b3042099b24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41124",
        "pageSeq": 41124
    },
    {
        "IDcode": 41125,
        "title": "Nekochan - Ganyu Cow (Genshin Impact)",
        "cover": "https://telegra.ph/file/8a5547f96412753b366c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41125",
        "pageSeq": 41125
    },
    {
        "IDcode": 41126,
        "title": "Lady Melamori - Holo (Spice And Wolf)",
        "cover": "https://telegra.ph/file/4bc37ae9ae3b982c974b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41126",
        "pageSeq": 41126
    },
    {
        "IDcode": 41127,
        "title": "Sayo Momo & Mikomin - Anya & Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/5ad9b6dff49792e0b4077.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41127",
        "pageSeq": 41127
    },
    {
        "IDcode": 41128,
        "title": "Lagertha chan - Bunny Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/ae24a86a1c2b9acb448f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41128",
        "pageSeq": 41128
    },
    {
        "IDcode": 41129,
        "title": "九言 Jiu Yan - 不听话的妹妹",
        "cover": "https://telegra.ph/file/3ef43074bfea92f399814.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41129",
        "pageSeq": 41129
    },
    {
        "IDcode": 41130,
        "title": "Lovely Space Kitten - Mando / The Mandalorian (Stars Wars)",
        "cover": "https://telegra.ph/file/14767cc59f78a50512464.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41130",
        "pageSeq": 41130
    },
    {
        "IDcode": 41131,
        "title": "Hane Ame - Xianyun (Genshin Impact)",
        "cover": "https://telegra.ph/file/4d2188d85058879316515.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41131",
        "pageSeq": 41131
    },
    {
        "IDcode": 41132,
        "title": "Yoshinobi - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/e55769554e3ad084a216e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41132",
        "pageSeq": 41132
    },
    {
        "IDcode": 41133,
        "title": "倦倦喵 - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/55a7bab9cedc89903d7c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41133",
        "pageSeq": 41133
    },
    {
        "IDcode": 41134,
        "title": "Alina Becker - Pieck Finger (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/a6fd339d9b830652b6988.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41134",
        "pageSeq": 41134
    },
    {
        "IDcode": 41135,
        "title": "Mikomin - Devil Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/3f1c31679cbd14440b50f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41135",
        "pageSeq": 41135
    },
    {
        "IDcode": 41136,
        "title": "软萌兔兔酱 ruan meng tu tu jiang - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/a53d59e2dd18bcaac4110.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41136",
        "pageSeq": 41136
    },
    {
        "IDcode": 41137,
        "title": "Kuuko W - Fern (Sou Sou No Frieren)",
        "cover": "https://telegra.ph/file/12380db0c0b3229e59c1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41137",
        "pageSeq": 41137
    },
    {
        "IDcode": 41138,
        "title": "Hana Bunny - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/3547174b6ac8d34e940c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41138",
        "pageSeq": 41138
    },
    {
        "IDcode": 41139,
        "title": "Tokar - Okayu (Hololive)",
        "cover": "https://telegra.ph/file/5cc658e792ce0748a118e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41139",
        "pageSeq": 41139
    },
    {
        "IDcode": 41140,
        "title": "Nagomi - Rizu Kyun (Sino Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/dafc82034162ee2b31170.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41140",
        "pageSeq": 41140
    },
    {
        "IDcode": 41141,
        "title": "Carry Key - Gwen (Spider-man)",
        "cover": "https://telegra.ph/file/e0091239ea040737f0b74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41141",
        "pageSeq": 41141
    },
    {
        "IDcode": 41142,
        "title": "Sayo Momo - Seraphine (League Of Legends)",
        "cover": "https://telegra.ph/file/f0f10fbcd129037c82876.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41142",
        "pageSeq": 41142
    },
    {
        "IDcode": 41143,
        "title": "Lady Melamori - Tracer (Overwatch)",
        "cover": "https://telegra.ph/file/64c87077dbdec991128d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41143",
        "pageSeq": 41143
    },
    {
        "IDcode": 41144,
        "title": "Kokura Chiyo - Fern (Sou Sou No Frieren)",
        "cover": "https://telegra.ph/file/d1d0f7b98b4b3c7444f09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41144",
        "pageSeq": 41144
    },
    {
        "IDcode": 41146,
        "title": "Choi Ji Yun - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/90c8bd96e74ab39f90299.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41146",
        "pageSeq": 41146
    },
    {
        "IDcode": 41147,
        "title": "Byoru - Agir (Azur Lane)",
        "cover": "https://telegra.ph/file/a09433027d983bedd72ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41147",
        "pageSeq": 41147
    },
    {
        "IDcode": 41148,
        "title": "Itsfay - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/9e630a6423bd52252ae9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41148",
        "pageSeq": 41148
    },
    {
        "IDcode": 41149,
        "title": "Yummichiyo - August von Parseval (Azur Lane)",
        "cover": "https://telegra.ph/file/60371cc399b03377bb53a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41149",
        "pageSeq": 41149
    },
    {
        "IDcode": 41150,
        "title": "Aery Tiefling - White Dress Zelda (The Legend of Zelda Breath of the Wild)",
        "cover": "https://telegra.ph/file/01849d16dc1e0e293d87b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41150",
        "pageSeq": 41150
    },
    {
        "IDcode": 41151,
        "title": "Byoru - Magia Baiser / Utena (Mahou Shoujo ni Akogarete)",
        "cover": "https://telegra.ph/file/57989df912d3da76e01d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41151",
        "pageSeq": 41151
    },
    {
        "IDcode": 41152,
        "title": "Lana Rain - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/71ef34dae1daae9cba4a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41152",
        "pageSeq": 41152
    },
    {
        "IDcode": 41153,
        "title": "Hana Bunny - Morrigan (Capcom)",
        "cover": "https://telegra.ph/file/7e1658597ea31715bb9c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41153",
        "pageSeq": 41153
    },
    {
        "IDcode": 41154,
        "title": "Fantasy Factory - 乳首ピアス",
        "cover": "https://telegra.ph/file/b993a18fd122aa5b9f920.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41154",
        "pageSeq": 41154
    },
    {
        "IDcode": 41155,
        "title": "Yoshinobi - Fern (Sousou no Frieren)",
        "cover": "https://telegra.ph/file/8dae0e6a09462cc6e388a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41155",
        "pageSeq": 41155
    },
    {
        "IDcode": 41156,
        "title": "Ri Care - Jill Valentine (Resident Evil)",
        "cover": "https://telegra.ph/file/c44a7836f191c2a392312.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41156",
        "pageSeq": 41156
    },
    {
        "IDcode": 41157,
        "title": "Gumiho & Mikomin - Ganyu & Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/c88630b2c519afb711162.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41157",
        "pageSeq": 41157
    }
];
