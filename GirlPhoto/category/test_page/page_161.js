// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38103,
        "title": "Xidaidai - Sagiri/Rem/Keqing/Maid/Neko/Xingkiu (Random)",
        "cover": "https://telegra.ph/file/252e68bfb6b397244864b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38103",
        "pageSeq": 38103
    },
    {
        "IDcode": 38104,
        "title": "Hane Ame - Gangut  (Azur Lane)",
        "cover": "https://telegra.ph/file/fe6718ca3dc52dc1b9865.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38104",
        "pageSeq": 38104
    },
    {
        "IDcode": 38105,
        "title": "Hane Ame - Flare Arlgrande Jioral (Kaifuku Jutsushi no Yarinaoshi)",
        "cover": "https://telegra.ph/file/f3dd516dde92ef96fd05b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38105",
        "pageSeq": 38105
    },
    {
        "IDcode": 38106,
        "title": "Hane Ame - Honolulu (Azur Lane)",
        "cover": "https://telegra.ph/file/80048ec2b7cf21f6a01f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38106",
        "pageSeq": 38106
    },
    {
        "IDcode": 38107,
        "title": "Sakurai Nei Nei - Izumi Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/7a4815f1009ff4f8b5a8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38107",
        "pageSeq": 38107
    },
    {
        "IDcode": 38108,
        "title": "Inkyung - Izumi Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/62ec9d35c080b6e20e6fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38108",
        "pageSeq": 38108
    },
    {
        "IDcode": 38109,
        "title": "木绵绵OwO - Izumi Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/76d1339cc15f6745ec0e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38109",
        "pageSeq": 38109
    },
    {
        "IDcode": 38110,
        "title": "姬雾岛酱 - Izumi Sagir (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/fde1c2653c3173af98326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38110",
        "pageSeq": 38110
    },
    {
        "IDcode": 38111,
        "title": "Hana Bunny - Jiangshi Fox (Fate Grand Order)",
        "cover": "https://telegra.ph/file/7fa760492343ddcbb7aa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38111",
        "pageSeq": 38111
    },
    {
        "IDcode": 38112,
        "title": "Hane Ame - Nyotengu Maple (Dead Or Alive)",
        "cover": "https://telegra.ph/file/750bdd6b91919ad3df11b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38112",
        "pageSeq": 38112
    },
    {
        "IDcode": 38113,
        "title": "Ronnie Rot - Gneisenau (Azur Lane)",
        "cover": "https://telegra.ph/file/d609cbfaec8fb820cbe6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38113",
        "pageSeq": 38113
    },
    {
        "IDcode": 38114,
        "title": "Meryl Sama - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/d72be339b592db17fe2a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38114",
        "pageSeq": 38114
    },
    {
        "IDcode": 38115,
        "title": "小容仔咕咕咕w - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/0814e2184493ca9846952.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38115",
        "pageSeq": 38115
    },
    {
        "IDcode": 38116,
        "title": "Helly Valentine - Tifa Bunny Maid (Final Fantasy)",
        "cover": "https://telegra.ph/file/1aa49cf8e761f14edd404.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38116",
        "pageSeq": 38116
    },
    {
        "IDcode": 38117,
        "title": "NinJa - Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/01b04d5b77e5362302d7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38117",
        "pageSeq": 38117
    },
    {
        "IDcode": 38118,
        "title": "KuukoW - Asuka (Neon Génesis Evangelion)",
        "cover": "https://telegra.ph/file/22d1dab74bf89382c05e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38118",
        "pageSeq": 38118
    },
    {
        "IDcode": 38119,
        "title": "Rinnie Riot - Rias Gremory Bunny ( High School DXD)",
        "cover": "https://telegra.ph/file/213115f6be215ac482bd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38119",
        "pageSeq": 38119
    },
    {
        "IDcode": 38120,
        "title": "Hana Bunny - Sesshouin Kiara (Fate Grand Order)",
        "cover": "https://telegra.ph/file/a588af90fba664a03beb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38120",
        "pageSeq": 38120
    },
    {
        "IDcode": 38121,
        "title": "Rinnie Riot - Raphtalia (Tate No Yuusha)",
        "cover": "https://telegra.ph/file/06900e01d05feac74604b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38121",
        "pageSeq": 38121
    },
    {
        "IDcode": 38122,
        "title": "Hane Ame - Saint Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/b39210c58289912fd984a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38122",
        "pageSeq": 38122
    },
    {
        "IDcode": 38123,
        "title": "Hana Bunny - Narmaya Valentine (Granblue Fantasy)",
        "cover": "https://telegra.ph/file/e435d115f1de6d22a79cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38123",
        "pageSeq": 38123
    },
    {
        "IDcode": 38124,
        "title": "Hokunaimeko - 細胞cell (Hataraku Saibou)",
        "cover": "https://telegra.ph/file/f963f873fb402443bd2b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38124",
        "pageSeq": 38124
    },
    {
        "IDcode": 38125,
        "title": "是本末末 - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/44fa88e19453ebe1eeffb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38125",
        "pageSeq": 38125
    },
    {
        "IDcode": 38126,
        "title": "Hane Ame - Siege (Arknights)",
        "cover": "https://telegra.ph/file/989fb3d5bbee4bf8401a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38126",
        "pageSeq": 38126
    },
    {
        "IDcode": 38127,
        "title": "Shui Miao - Azuma (Azur Lane)",
        "cover": "https://telegra.ph/file/18d418affbc8e44866b50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38127",
        "pageSeq": 38127
    },
    {
        "IDcode": 38128,
        "title": "Shui Miao - Jeanne D'Arc/Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/74427a8e319a86523a5cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38128",
        "pageSeq": 38128
    },
    {
        "IDcode": 38129,
        "title": "Uki - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/d7b149ffda04524dc528b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38129",
        "pageSeq": 38129
    },
    {
        "IDcode": 38130,
        "title": "Hana Bunny - Eula Genshin Impact)",
        "cover": "https://telegra.ph/file/938ff2a9b29f49508bd28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38130",
        "pageSeq": 38130
    },
    {
        "IDcode": 38131,
        "title": "Rongrongzi 小容仔咕咕咕w - Christmas",
        "cover": "https://telegra.ph/file/afc83c3c1d2707a24f754.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38131",
        "pageSeq": 38131
    },
    {
        "IDcode": 38132,
        "title": "Bambi - Samsung Sam/Samsung Chan (Cosplay Random)",
        "cover": "https://telegra.ph/file/4948168a4a880cf5d7e60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38132",
        "pageSeq": 38132
    },
    {
        "IDcode": 38133,
        "title": "Hana Bunny - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/90a962ba4d49672ad76ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38133",
        "pageSeq": 38133
    },
    {
        "IDcode": 38134,
        "title": "Akemi - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/999a014c697e8339ca65d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38134",
        "pageSeq": 38134
    },
    {
        "IDcode": 38135,
        "title": "Hane Ame - Cloba 2P",
        "cover": "https://telegra.ph/file/556fb579f65d24fa39679.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38135",
        "pageSeq": 38135
    },
    {
        "IDcode": 38136,
        "title": "Lady Melamori - Cindy Aurum (Final Fantasy)",
        "cover": "https://telegra.ph/file/0145b1dfe227a5a732894.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38136",
        "pageSeq": 38136
    },
    {
        "IDcode": 38137,
        "title": "Bambi - Riamu Yumemi Cow",
        "cover": "https://telegra.ph/file/806f7234d92d365f4ce34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38137",
        "pageSeq": 38137
    },
    {
        "IDcode": 38138,
        "title": "Nagisa - Rem Swimsuit/Lencery (Re: Zero)",
        "cover": "https://telegra.ph/file/4be7fcd1219e9f800411a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38138",
        "pageSeq": 38138
    },
    {
        "IDcode": 38139,
        "title": "Hidori Rose - Emilie Bertin (Azur Lane)",
        "cover": "https://telegra.ph/file/c8a44d39068f947bc4cfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38139",
        "pageSeq": 38139
    },
    {
        "IDcode": 38140,
        "title": "UyUy - Aqua (Konosuba)",
        "cover": "https://telegra.ph/file/5a6e7854ccaa59d93c333.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38140",
        "pageSeq": 38140
    },
    {
        "IDcode": 38141,
        "title": "Azami - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/29f95a44fcde57193c9af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38141",
        "pageSeq": 38141
    },
    {
        "IDcode": 38142,
        "title": "Mimi Chan - 2B/Swimsuit (Nier Autómata)",
        "cover": "https://telegra.ph/file/b3889dfe7c163dbf3acd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38142",
        "pageSeq": 38142
    },
    {
        "IDcode": 38143,
        "title": "Hane Ame - Nami (One Piece)",
        "cover": "https://telegra.ph/file/8ab070fc0483ccb1c246e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38143",
        "pageSeq": 38143
    },
    {
        "IDcode": 38144,
        "title": "Rinnie Riot - St. Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/0435c8dbe924762ddeeae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38144",
        "pageSeq": 38144
    },
    {
        "IDcode": 38145,
        "title": "Shui Miao Aqua - Nurse & Nun",
        "cover": "https://telegra.ph/file/c24803a863673fca5ed64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38145",
        "pageSeq": 38145
    },
    {
        "IDcode": 38146,
        "title": "Hokunaimeko - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/f3de787e1e89c9d1725e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38146",
        "pageSeq": 38146
    },
    {
        "IDcode": 38147,
        "title": "Alina Becker - Aerith (Final Fantasy)",
        "cover": "https://telegra.ph/file/5a62f24e6be0dc46c6f03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38147",
        "pageSeq": 38147
    },
    {
        "IDcode": 38148,
        "title": "Hana Bunny - Nero/Maid (Fate Extra Last/Fate Grand Order)",
        "cover": "https://telegra.ph/file/314c45f2291e97eb65869.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38148",
        "pageSeq": 38148
    },
    {
        "IDcode": 38149,
        "title": "Virtual Geisha - Mikasa Ackerman (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/dcd380c8a0208b07bc254.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38149",
        "pageSeq": 38149
    },
    {
        "IDcode": 38150,
        "title": "Momoko - Shinano (Azur Lane)",
        "cover": "https://telegra.ph/file/9d7bd362f812715fc1186.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38150",
        "pageSeq": 38150
    },
    {
        "IDcode": 38151,
        "title": "Hana Bunny - Kiryu Coco/Swimsuit (Hololive)",
        "cover": "https://telegra.ph/file/67448acb76d2844cf9840.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38151",
        "pageSeq": 38151
    },
    {
        "IDcode": 38152,
        "title": "Maria Nagai - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/d04ba10b60746b60cb1d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38152",
        "pageSeq": 38152
    },
    {
        "IDcode": 38153,
        "title": "UyUy - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/3da6e8726e1e9365876d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38153",
        "pageSeq": 38153
    },
    {
        "IDcode": 38154,
        "title": "桃小沫沫酱 - Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/9bd82a2bcccc8deae2b2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38154",
        "pageSeq": 38154
    },
    {
        "IDcode": 38155,
        "title": "Maria Nagai - Meiko Shiraki (Prision School)",
        "cover": "https://telegra.ph/file/f5f815647d5ac75e3fa98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38155",
        "pageSeq": 38155
    },
    {
        "IDcode": 38156,
        "title": "Importante/Important",
        "cover": "https://telegra.ph/file/8ad6029ff4165f397427b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38156",
        "pageSeq": 38156
    },
    {
        "IDcode": 38157,
        "title": "Hane Ame - Skyfire/Swimsuit (Arknights)",
        "cover": "https://telegra.ph/file/f8fd396552b2f504dfd5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38157",
        "pageSeq": 38157
    },
    {
        "IDcode": 38158,
        "title": "UyUy - Chun Li (Street Fighters)",
        "cover": "https://telegra.ph/file/8a1395a5168a999959309.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38158",
        "pageSeq": 38158
    },
    {
        "IDcode": 38159,
        "title": "Byoru - Tifa Bunny (Final Fantasy)",
        "cover": "https://telegra.ph/file/8f465b99c45970f6000f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38159",
        "pageSeq": 38159
    },
    {
        "IDcode": 38160,
        "title": "Chameleahn - Tifa/Swimsuit (Final Fantasy)",
        "cover": "https://telegra.ph/file/1a16bbaa94a90198cddd1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38160",
        "pageSeq": 38160
    },
    {
        "IDcode": 38161,
        "title": "Hane Ame - Sam Samsung/Samsung Chan (Random Cosplay)",
        "cover": "https://telegra.ph/file/439e599e73b04bcf4125c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38161",
        "pageSeq": 38161
    },
    {
        "IDcode": 38162,
        "title": "Byoru - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/1b41980f5cd815e7e3ffe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38162",
        "pageSeq": 38162
    },
    {
        "IDcode": 38163,
        "title": "Sally Dorasnow - Roxy Migurdia (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/ddbfd553a31c871c135f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38163",
        "pageSeq": 38163
    },
    {
        "IDcode": 38164,
        "title": "Hane Ame - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/3bd01ff94263829c63380.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38164",
        "pageSeq": 38164
    },
    {
        "IDcode": 38165,
        "title": "Byoru - Mash Dancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/4ee79dabaa075c37f0080.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38165",
        "pageSeq": 38165
    },
    {
        "IDcode": 38166,
        "title": "UyUy - Hinata Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/db9eb99b01f88719e08b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38166",
        "pageSeq": 38166
    },
    {
        "IDcode": 38167,
        "title": "Hana Bunny - Succubus/Demond Girl (Random Cosplay)",
        "cover": "https://telegra.ph/file/f98fe2ffefbe245df76cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38167",
        "pageSeq": 38167
    },
    {
        "IDcode": 38168,
        "title": "Hana Bunny - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/123bcdedfae15935fa12a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38168",
        "pageSeq": 38168
    },
    {
        "IDcode": 38169,
        "title": "Peach Milky - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/09b9f7a8c3a677069aa76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38169",
        "pageSeq": 38169
    },
    {
        "IDcode": 38170,
        "title": "Lady Oichi - 2B Nun (Nier Automata)",
        "cover": "https://telegra.ph/file/d3cf3be76bc8fc7077b86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38170",
        "pageSeq": 38170
    },
    {
        "IDcode": 38171,
        "title": "Kagurazaka Cheshire/Swimsuit (Azur Lane)",
        "cover": "https://telegra.ph/file/125030db961930be1ede2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38171",
        "pageSeq": 38171
    },
    {
        "IDcode": 38172,
        "title": "Hane Ame - Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/f9d1766919b5b8aa6e4f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38172",
        "pageSeq": 38172
    },
    {
        "IDcode": 38173,
        "title": "Sally Dorasnow - Sayu (Hige Wo Soru)",
        "cover": "https://telegra.ph/file/d7c68c833a953dea1f3bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38173",
        "pageSeq": 38173
    },
    {
        "IDcode": 38174,
        "title": "KuukoW - Samsung Chan/Sam (Random Cosplay)",
        "cover": "https://telegra.ph/file/301e007963bc4d6a49db6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38174",
        "pageSeq": 38174
    },
    {
        "IDcode": 38175,
        "title": "Mikomi Hokina - Maple (Nekopara)",
        "cover": "https://telegra.ph/file/0232919dad1631d8b0fe1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38175",
        "pageSeq": 38175
    },
    {
        "IDcode": 38176,
        "title": "Mikomi Hokina - Mercy (Overwatch)",
        "cover": "https://telegra.ph/file/ef802330a376c65af9096.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38176",
        "pageSeq": 38176
    },
    {
        "IDcode": 38177,
        "title": "Hane Ame - Kasumi (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/bcafc2856f8c220fadf0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38177",
        "pageSeq": 38177
    },
    {
        "IDcode": 38178,
        "title": "Peach Milky - Zero Two (Darling in the Franxx)",
        "cover": "https://telegra.ph/file/3404e045de9aa06fc6a7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38178",
        "pageSeq": 38178
    },
    {
        "IDcode": 38179,
        "title": "Mikomi Hokina - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/0e209941898a94941b665.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38179",
        "pageSeq": 38179
    },
    {
        "IDcode": 38180,
        "title": "Mikomi Hokina - Zero Two/Lencery (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/5cf3dd7b460efbca3d7dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38180",
        "pageSeq": 38180
    },
    {
        "IDcode": 38181,
        "title": "Mikomi Hokina - Zero Two/Nude (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/cf5e77209d7473731ee1b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38181",
        "pageSeq": 38181
    },
    {
        "IDcode": 38182,
        "title": "Pia - Zero Two/Swimsuit (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/57ab073029bc9da1a2fa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38182",
        "pageSeq": 38182
    },
    {
        "IDcode": 38183,
        "title": "Beke Jacoba - Yoko (Tengen Toppa Gurren Lagann)",
        "cover": "https://telegra.ph/file/5efab648326495cf4e5b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38183",
        "pageSeq": 38183
    },
    {
        "IDcode": 38184,
        "title": "Hidori, Mikomi, Virtual, Tom & Yuzupyon - Mash, Saber, Nero & Tamamo (Fate Grand Order)",
        "cover": "https://telegra.ph/file/515ac45c7ce40aa74e8ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38184",
        "pageSeq": 38184
    },
    {
        "IDcode": 38185,
        "title": "Shiro Kitsune - Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/6fded569e4966fc56a72e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38185",
        "pageSeq": 38185
    },
    {
        "IDcode": 38186,
        "title": "Mikomi Hokina - Illyasviel Beast (Fate kaleid liner Prisma Illya)",
        "cover": "https://telegra.ph/file/f0275e54805299fa2dcaf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38186",
        "pageSeq": 38186
    },
    {
        "IDcode": 38187,
        "title": "Byoru - Pai Mei (Random Cosplay)",
        "cover": "https://telegra.ph/file/324d0dfd77f4fc65a8216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38187",
        "pageSeq": 38187
    },
    {
        "IDcode": 38188,
        "title": "Mikomi Hokina - St. Louis Luxurious (Azur Lane)",
        "cover": "https://telegra.ph/file/710f8a8e602c7b83b471d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38188",
        "pageSeq": 38188
    },
    {
        "IDcode": 38189,
        "title": "Mikomi Hokina - St. Louis Luxurious Ero (Azur Lane)",
        "cover": "https://telegra.ph/file/ba333fc946c191e19857d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38189",
        "pageSeq": 38189
    },
    {
        "IDcode": 38190,
        "title": "Nagisa - Bárbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/52a1cafea849b584670a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38190",
        "pageSeq": 38190
    },
    {
        "IDcode": 38191,
        "title": "Peach Milky - Evelyn (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/80f09de58029b2458f48f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38191",
        "pageSeq": 38191
    },
    {
        "IDcode": 38192,
        "title": "Choi Ji Yun - Mahito (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/b5dfb1eade28022359a62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38192",
        "pageSeq": 38192
    },
    {
        "IDcode": 38193,
        "title": "Hane Ame - Queen Bee Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/90cc4d224104d3875641e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38193",
        "pageSeq": 38193
    },
    {
        "IDcode": 38194,
        "title": "Byoru - Nagisa (Dead or Alive)",
        "cover": "https://telegra.ph/file/4096a6613b601b8b3e7cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38194",
        "pageSeq": 38194
    },
    {
        "IDcode": 38195,
        "title": "MissWarmJ - Tanya (Wildlife)",
        "cover": "https://telegra.ph/file/e5bce34db6f4d7e8d0d33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38195",
        "pageSeq": 38195
    },
    {
        "IDcode": 38196,
        "title": "Hane Ame - Raphtalia (Tate No Yuusha)",
        "cover": "https://telegra.ph/file/1c73691a0d3951ec0dcd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38196",
        "pageSeq": 38196
    },
    {
        "IDcode": 38197,
        "title": "Lada Lyumos - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/7153ac173877ecec1e3c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38197",
        "pageSeq": 38197
    },
    {
        "IDcode": 38198,
        "title": "Hane Ame - Elsa Granhiert (Re: Zero)",
        "cover": "https://telegra.ph/file/d8fa2bbe8d5e94e689519.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38198",
        "pageSeq": 38198
    },
    {
        "IDcode": 38199,
        "title": "Yorkie - Ninja/Kunoichi (Random Cosplay)",
        "cover": "https://telegra.ph/file/dc2e57dc3a0b555d69024.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38199",
        "pageSeq": 38199
    },
    {
        "IDcode": 38200,
        "title": "Hane Ame - Echidna (Re: Zero)",
        "cover": "https://telegra.ph/file/ec06151baab49b37cb0f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38200",
        "pageSeq": 38200
    },
    {
        "IDcode": 38201,
        "title": "阿包也是兔娘 - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/99fcadfd7e51bc36909db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38201",
        "pageSeq": 38201
    },
    {
        "IDcode": 38202,
        "title": "Gumiho Arts - Modeus (Helltaker)",
        "cover": "https://telegra.ph/file/83f330334e02e3aea5cad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38202",
        "pageSeq": 38202
    }
];
