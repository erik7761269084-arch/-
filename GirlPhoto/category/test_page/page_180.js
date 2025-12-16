// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40041,
        "title": "Aery Tiefling - Bulma Christmas (Dragon Ball)",
        "cover": "https://telegra.ph/file/e98aaefac5f8062ef264d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40041",
        "pageSeq": 40041
    },
    {
        "IDcode": 40042,
        "title": "Minichu - Uta (One Piece)",
        "cover": "https://telegra.ph/file/f475860473a6521699dd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40042",
        "pageSeq": 40042
    },
    {
        "IDcode": 40043,
        "title": "Enji Night - Bride 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/2f010e94c182f795d4b05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40043",
        "pageSeq": 40043
    },
    {
        "IDcode": 40044,
        "title": "Neyrodesu - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/849fa0467eaa5fbff8898.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40044",
        "pageSeq": 40044
    },
    {
        "IDcode": 40045,
        "title": "Hana Bunny - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/0c236d31275ebec349d5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40045",
        "pageSeq": 40045
    },
    {
        "IDcode": 40046,
        "title": "Hana Bunny - Lisa Halloween (Genshin Impact)",
        "cover": "https://telegra.ph/file/6a6e079423853f3af1d8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40046",
        "pageSeq": 40046
    },
    {
        "IDcode": 40047,
        "title": "Minichu - Naruko (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/e7d321246af86431cad6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40047",
        "pageSeq": 40047
    },
    {
        "IDcode": 40048,
        "title": "Queenie - Cammy (Street Fighters)",
        "cover": "https://telegra.ph/file/2ceb8dcb1458994f30c0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40048",
        "pageSeq": 40048
    },
    {
        "IDcode": 40049,
        "title": "Hana Bunny - Ranni (Elden Ring)",
        "cover": "https://telegra.ph/file/ee8b83d74e351b428ef52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40049",
        "pageSeq": 40049
    },
    {
        "IDcode": 40050,
        "title": "Hana Bunny - Kson",
        "cover": "https://telegra.ph/file/96e98e329aa32200fa2ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40050",
        "pageSeq": 40050
    },
    {
        "IDcode": 40051,
        "title": "白莉爱吃巧克力 - 甘雨 Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/f6fdb7b783edf5aea3283.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40051",
        "pageSeq": 40051
    },
    {
        "IDcode": 40052,
        "title": "Fantasy Factory - 齐 OnlyFans",
        "cover": "https://telegra.ph/file/f8afec4178c18198c3a4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40052",
        "pageSeq": 40052
    },
    {
        "IDcode": 40053,
        "title": "Plant Lily - Reika (Gantz)",
        "cover": "https://telegra.ph/file/fb8648c3633e5088ad80e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40053",
        "pageSeq": 40053
    },
    {
        "IDcode": 40054,
        "title": "Caticornplay - Christmas Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/c2ee8cf9e05be8e4e249d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40054",
        "pageSeq": 40054
    },
    {
        "IDcode": 40055,
        "title": "蠢沫沫 Chunmomo - 绵绵兔 Bunnygirl",
        "cover": "https://telegra.ph/file/f38b8e162b61aa29dad7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40055",
        "pageSeq": 40055
    },
    {
        "IDcode": 40056,
        "title": "Alina Becker - Chii (Chobits)",
        "cover": "https://telegra.ph/file/c6b2a366d2b3c81bc12e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40056",
        "pageSeq": 40056
    },
    {
        "IDcode": 40057,
        "title": "Minichu - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ea4ceada698c7c8a1b783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40057",
        "pageSeq": 40057
    },
    {
        "IDcode": 40058,
        "title": "Caticornplay - Wednesday (The Family Addams)",
        "cover": "https://telegra.ph/file/f136e676966c98c9cd417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40058",
        "pageSeq": 40058
    },
    {
        "IDcode": 40059,
        "title": "Potato Godzilla - Santa Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/1c54eb49def0445541ec4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40059",
        "pageSeq": 40059
    },
    {
        "IDcode": 40060,
        "title": "Byoru - Helm (NIKKE)",
        "cover": "https://telegra.ph/file/5a31ac5cfe99ff5df0e67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40060",
        "pageSeq": 40060
    },
    {
        "IDcode": 40061,
        "title": "Byoru - Emma (NIKKE)",
        "cover": "https://telegra.ph/file/13571eb818a81701450c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40061",
        "pageSeq": 40061
    },
    {
        "IDcode": 40062,
        "title": "Hokunaimeko - 2B Bride (Nier Automata)",
        "cover": "https://telegra.ph/file/074143a9d4556c066493b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40062",
        "pageSeq": 40062
    },
    {
        "IDcode": 40063,
        "title": "Neyrodesu - Kobeni Apron (Chainsaw Man)",
        "cover": "https://telegra.ph/file/790ee63c597da1e95413f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40063",
        "pageSeq": 40063
    },
    {
        "IDcode": 40064,
        "title": "Umeko J - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/8280131ea5f3bd258ee20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40064",
        "pageSeq": 40064
    },
    {
        "IDcode": 40065,
        "title": "Byoru - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/216ca91c1290756ac95ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40065",
        "pageSeq": 40065
    },
    {
        "IDcode": 40066,
        "title": "Byoru - Nyotengu (Dead Or Alive)",
        "cover": "https://telegra.ph/file/00d00f11fe57fdb47a00e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40066",
        "pageSeq": 40066
    },
    {
        "IDcode": 40067,
        "title": "Hane Ame - Xmas Dragon Hane",
        "cover": "https://telegra.ph/file/f38579aef81ba54734d70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40067",
        "pageSeq": 40067
    },
    {
        "IDcode": 40068,
        "title": "Hane Ame - Neliel (Bleach)",
        "cover": "https://telegra.ph/file/91ce49490dd6cdef54a67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40068",
        "pageSeq": 40068
    },
    {
        "IDcode": 40069,
        "title": "Minichu - Lincia (Elf Village)",
        "cover": "https://telegra.ph/file/160f409c8c768467843e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40069",
        "pageSeq": 40069
    },
    {
        "IDcode": 40070,
        "title": "Kyaandere - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/1df31181c7a58c99d23b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40070",
        "pageSeq": 40070
    },
    {
        "IDcode": 40071,
        "title": "KuukoW - Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/23babc656132335e126b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40071",
        "pageSeq": 40071
    },
    {
        "IDcode": 40072,
        "title": "Fe Galvao - Mary Jane (Spiderman)",
        "cover": "https://telegra.ph/file/cffa974077bd96f2c053e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40072",
        "pageSeq": 40072
    },
    {
        "IDcode": 40073,
        "title": "Minichu - Nurse Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/e65b3e37a4e359df39628.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40073",
        "pageSeq": 40073
    },
    {
        "IDcode": 40074,
        "title": "Quackiess - Modeus (Helltaker)",
        "cover": "https://telegra.ph/file/112076d347b30ca44bad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40074",
        "pageSeq": 40074
    },
    {
        "IDcode": 40075,
        "title": "Umeko J - Shuten Sushi (Fate Grand Order)",
        "cover": "https://telegra.ph/file/0e0af5c28295fdc1334e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40075",
        "pageSeq": 40075
    },
    {
        "IDcode": 40076,
        "title": "Minichu - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/fd71d556cc2d9026dd94e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40076",
        "pageSeq": 40076
    },
    {
        "IDcode": 40077,
        "title": "Byoru - Lilliel (2.5 Jige Kareshi)",
        "cover": "https://telegra.ph/file/11d78370b662d146a80d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40077",
        "pageSeq": 40077
    },
    {
        "IDcode": 40078,
        "title": "爆机少女喵小吉 - 间谍过家家 Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/55151e6434ff4a6b8f31b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40078",
        "pageSeq": 40078
    },
    {
        "IDcode": 40079,
        "title": "KANEKO_咔喵 - 武藏绳缚 Musashi (Azur Lane)",
        "cover": "https://telegra.ph/file/5cbf36d8f4c233daade4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40079",
        "pageSeq": 40079
    },
    {
        "IDcode": 40080,
        "title": "Sameki - Urukawa Hanako (Blue Archive)",
        "cover": "https://telegra.ph/file/f9ea46d45a1c38fde47b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40080",
        "pageSeq": 40080
    },
    {
        "IDcode": 40081,
        "title": "白莉爱吃巧克力 - 兔女郎蕾姆 Bunny Rem (Re Zero)",
        "cover": "https://telegra.ph/file/20a925e4013dcbbeb1446.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40081",
        "pageSeq": 40081
    },
    {
        "IDcode": 40082,
        "title": "Hane Ame - Yukihana Lamy (Hololive)",
        "cover": "https://telegra.ph/file/b3b38c5c673bee04d0475.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40082",
        "pageSeq": 40082
    },
    {
        "IDcode": 40083,
        "title": "Fantasy Factory - 拉拉队员",
        "cover": "https://telegra.ph/file/63b03a45d1abe8f3d7758.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40083",
        "pageSeq": 40083
    },
    {
        "IDcode": 40084,
        "title": "Xidaidai - Kagura Nana (Hololive)",
        "cover": "https://telegra.ph/file/24e66eb1e938081da7900.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40084",
        "pageSeq": 40084
    },
    {
        "IDcode": 40085,
        "title": "Caticornplay - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/85d81c75873e77c090be3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40085",
        "pageSeq": 40085
    },
    {
        "IDcode": 40086,
        "title": "Uri - Mai Shiranui (The King of Fighters)",
        "cover": "https://telegra.ph/file/2f27ce580e37e9739d121.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40086",
        "pageSeq": 40086
    },
    {
        "IDcode": 40087,
        "title": "Umeko J - Akali (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/0c5613b72f0cbcca6804c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40087",
        "pageSeq": 40087
    },
    {
        "IDcode": 40088,
        "title": "Sakurai 桜井宁宁 - 温泉",
        "cover": "https://telegra.ph/file/0bf6f2a101daf86e34636.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40088",
        "pageSeq": 40088
    },
    {
        "IDcode": 40089,
        "title": "Hana Bunny - Bodysuit",
        "cover": "https://telegra.ph/file/711985f828e5f01f3131c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40089",
        "pageSeq": 40089
    },
    {
        "IDcode": 40090,
        "title": "Ino - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/392f2a8bf7dffb1436bc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40090",
        "pageSeq": 40090
    },
    {
        "IDcode": 40091,
        "title": "Ino - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/cb39c66162a4bec507907.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40091",
        "pageSeq": 40091
    },
    {
        "IDcode": 40092,
        "title": "黏黏团子兔 - 修女 Nun",
        "cover": "https://telegra.ph/file/20926dbaaa6aa11a20a69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40092",
        "pageSeq": 40092
    },
    {
        "IDcode": 40093,
        "title": "蠢沫沫 Chunmomo - 棒球女孩",
        "cover": "https://telegra.ph/file/8e11dc81bcb68a8cd5654.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40093",
        "pageSeq": 40093
    },
    {
        "IDcode": 40094,
        "title": "女主K - 恶魔 Succubus",
        "cover": "https://telegra.ph/file/84824280efabdecf5fa0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40094",
        "pageSeq": 40094
    },
    {
        "IDcode": 40095,
        "title": "Lady Melamori - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/52ce194b441bad52d7313.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40095",
        "pageSeq": 40095
    },
    {
        "IDcode": 40096,
        "title": "Ino - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/cbc6303ce9a680fa8a5d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40096",
        "pageSeq": 40096
    },
    {
        "IDcode": 40097,
        "title": "Mikomin - Wednesday (The Family Addams)",
        "cover": "https://telegra.ph/file/8c0b48f0d9d9ff5e51b25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40097",
        "pageSeq": 40097
    },
    {
        "IDcode": 40098,
        "title": "黏黏团子兔 - 特别授课",
        "cover": "https://telegra.ph/file/a44ce3bc230016679b9e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40098",
        "pageSeq": 40098
    },
    {
        "IDcode": 40099,
        "title": "Leticia Shirayuki - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/e824ecc11d218fd0d7f32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40099",
        "pageSeq": 40099
    },
    {
        "IDcode": 40100,
        "title": "Ino - Triangle (Squid Game)",
        "cover": "https://telegra.ph/file/f2bdc5acd941cbc9492d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40100",
        "pageSeq": 40100
    },
    {
        "IDcode": 40101,
        "title": "木之本澜 - 淫乱小僵尸",
        "cover": "https://telegra.ph/file/85df9c9a30c5f592831d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40101",
        "pageSeq": 40101
    },
    {
        "IDcode": 40102,
        "title": "Poppa Chan - Roxy (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/dd5c76a3f6d99a67245f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40102",
        "pageSeq": 40102
    },
    {
        "IDcode": 40103,
        "title": "Hane Ame - Yor Forger Lingerie (Spy x Family)",
        "cover": "https://telegra.ph/file/179f43fb14314e5c9bde2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40103",
        "pageSeq": 40103
    },
    {
        "IDcode": 40104,
        "title": "Hane Ame - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/9b61eca927984cb33b0f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40104",
        "pageSeq": 40104
    },
    {
        "IDcode": 40105,
        "title": "Hane Ame - Yor Forger casual (Spy x Family)",
        "cover": "https://telegra.ph/file/c479390dabba3fb7dfc1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40105",
        "pageSeq": 40105
    },
    {
        "IDcode": 40106,
        "title": "Donna Loli - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/650cfbcdc27d40229a41d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40106",
        "pageSeq": 40106
    },
    {
        "IDcode": 40107,
        "title": "MissWarmj - Jill Valentine (Resident Evil)",
        "cover": "https://telegra.ph/file/b61120dec647c4a740cd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40107",
        "pageSeq": 40107
    },
    {
        "IDcode": 40108,
        "title": "Ino - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/ce7fd51ab16ba588821bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40108",
        "pageSeq": 40108
    },
    {
        "IDcode": 40109,
        "title": "Fantasy Factory - Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/67330ded5660a96c71003.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40109",
        "pageSeq": 40109
    },
    {
        "IDcode": 40110,
        "title": "Fantasy Factory - Fox maid",
        "cover": "https://telegra.ph/file/004c456a7e7a8b5581a0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40110",
        "pageSeq": 40110
    },
    {
        "IDcode": 40111,
        "title": "Fantasy Factory - Taiwan ShenAo travel",
        "cover": "https://telegra.ph/file/37914623810be3120e705.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40111",
        "pageSeq": 40111
    },
    {
        "IDcode": 40112,
        "title": "Ino - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/d612ec5b7501641ed4b69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40112",
        "pageSeq": 40112
    },
    {
        "IDcode": 40113,
        "title": "Letícia Shirayuki - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/b9041ec352b0a4b0ade16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40113",
        "pageSeq": 40113
    },
    {
        "IDcode": 40114,
        "title": "Choi Ji Yun - yea miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/b8c908f3214751cdb8b88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40114",
        "pageSeq": 40114
    },
    {
        "IDcode": 40115,
        "title": "Choi Ji Yun - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/7d6e42a30b15a731fabd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40115",
        "pageSeq": 40115
    },
    {
        "IDcode": 40116,
        "title": "Lady Melamori - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/98ed1509b81d7995adcbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40116",
        "pageSeq": 40116
    },
    {
        "IDcode": 40117,
        "title": "Ino - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/818796a42b0f008f2ba3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40117",
        "pageSeq": 40117
    },
    {
        "IDcode": 40118,
        "title": "MissWarmj - Do-S (One Punch Man)",
        "cover": "https://telegra.ph/file/dd39c999e1ebb5a9a5c98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40118",
        "pageSeq": 40118
    },
    {
        "IDcode": 40119,
        "title": "Hana Bunny - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/05eb269b40aa844dc7ea6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40119",
        "pageSeq": 40119
    },
    {
        "IDcode": 40120,
        "title": "Fantasy Factory - Chun-Mei",
        "cover": "https://telegra.ph/file/4588774c2b889031a71f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40120",
        "pageSeq": 40120
    },
    {
        "IDcode": 40121,
        "title": "Kalinka Fox - Fiona (Shrek)",
        "cover": "https://telegra.ph/file/ecead997e37afa90b10fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40121",
        "pageSeq": 40121
    },
    {
        "IDcode": 40122,
        "title": "Kinngyo 花音栗子 - 堕落修女 Nun",
        "cover": "https://telegra.ph/file/be8af06c93e0a1e1e20ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40122",
        "pageSeq": 40122
    },
    {
        "IDcode": 40123,
        "title": "三刀刀miido - 夏鸣蝉",
        "cover": "https://telegra.ph/file/63bc839ef60b1f35add36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40123",
        "pageSeq": 40123
    },
    {
        "IDcode": 40124,
        "title": "Ino - Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/5117918fb0add60f35b09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40124",
        "pageSeq": 40124
    },
    {
        "IDcode": 40125,
        "title": "Nekokoyoshi - Byleth (Fire Emblem Three Houses)",
        "cover": "https://telegra.ph/file/61e10a76617fe44962b41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40125",
        "pageSeq": 40125
    },
    {
        "IDcode": 40126,
        "title": "Minichu - Android No. 18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/e7255dfd83f210655a6ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40126",
        "pageSeq": 40126
    },
    {
        "IDcode": 40127,
        "title": "Mik Allen - Evelyn (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/b0004b7604dc3bebc272e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40127",
        "pageSeq": 40127
    },
    {
        "IDcode": 40128,
        "title": "Hana Bunny - Wednesday (The Family Addams)",
        "cover": "https://telegra.ph/file/518acb8f4df8184ab1874.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40128",
        "pageSeq": 40128
    },
    {
        "IDcode": 40129,
        "title": "Byoru - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/0973f88282e96407b4692.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40129",
        "pageSeq": 40129
    },
    {
        "IDcode": 40130,
        "title": "Carry Key - Jinx (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/6fdf581c511250466f6e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40130",
        "pageSeq": 40130
    },
    {
        "IDcode": 40131,
        "title": "Chamelahn - Evelynn (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/f0bd4b196315864667db2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40131",
        "pageSeq": 40131
    },
    {
        "IDcode": 40132,
        "title": "Lady Melamori - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/6ec667477b77f20cf7b77.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40132",
        "pageSeq": 40132
    },
    {
        "IDcode": 40133,
        "title": "小礼好困-白精灵 Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/d7f271ec2b688aeedc120.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40133",
        "pageSeq": 40133
    },
    {
        "IDcode": 40134,
        "title": "Carry Key - Princess Elf (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/4ab2131e04285004375ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40134",
        "pageSeq": 40134
    },
    {
        "IDcode": 40135,
        "title": "Ulichan - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/ce8a0fac3720d2d108892.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40135",
        "pageSeq": 40135
    },
    {
        "IDcode": 40136,
        "title": "Queenie - Vermeil (Kinsou no Vermeil)",
        "cover": "https://telegra.ph/file/4fe60b873ea284836c191.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40136",
        "pageSeq": 40136
    },
    {
        "IDcode": 40137,
        "title": "Fantasy Factory - Bunny girl Maid",
        "cover": "https://telegra.ph/file/53265493f34f5ea450624.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40137",
        "pageSeq": 40137
    },
    {
        "IDcode": 40138,
        "title": "蠢沫沫 Chunmomo - 水手日记",
        "cover": "https://telegra.ph/file/b0c8befa67fce4461647e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40138",
        "pageSeq": 40138
    },
    {
        "IDcode": 40139,
        "title": "Carry Key - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/ffa658cf0cd1fc20c76df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40139",
        "pageSeq": 40139
    },
    {
        "IDcode": 40140,
        "title": "Virtual Geisha - Fubuki (One Punch Men)",
        "cover": "https://telegra.ph/file/567fcad22c984473a4436.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40140",
        "pageSeq": 40140
    }
];
