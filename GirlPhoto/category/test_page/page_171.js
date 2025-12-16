// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39115,
        "title": "Peach Milky - Rizukyun (Sono Busque Doll Wa Koi wo Suru)",
        "cover": "https://telegra.ph/file/22c2d3253c390d66bb13c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39115",
        "pageSeq": 39115
    },
    {
        "IDcode": 39117,
        "title": "Ping Ping - Nyotengu Fortune (Dead or Alive)",
        "cover": "https://telegra.ph/file/21fb56dafbdda7850414f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39117",
        "pageSeq": 39117
    },
    {
        "IDcode": 39118,
        "title": "Arty Huang - Kiyohime Kimono (Fate Grand Order)",
        "cover": "https://telegra.ph/file/8188d6b9660783bfaf92d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39118",
        "pageSeq": 39118
    },
    {
        "IDcode": 39119,
        "title": "麻花麻花酱 - Lisa 莉莎同人 (Genshi Impact)",
        "cover": "https://telegra.ph/file/e73ac918ac12661ba4e49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39119",
        "pageSeq": 39119
    },
    {
        "IDcode": 39120,
        "title": "秋和柯基 Qiu Xia Xiao - Virtual Neon Model",
        "cover": "https://telegra.ph/file/ae29c84ca3bd52d3ad18b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39120",
        "pageSeq": 39120
    },
    {
        "IDcode": 39121,
        "title": "Nicole Marie Jean - Kim Possible (Kim Posible)",
        "cover": "https://telegra.ph/file/3dc56db7c5686c7d2c239.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39121",
        "pageSeq": 39121
    },
    {
        "IDcode": 39122,
        "title": "Carry Key - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/e13c66540dea7df696649.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39122",
        "pageSeq": 39122
    },
    {
        "IDcode": 39123,
        "title": "秋和柯基 Qiu Xia Xiao - Boxeo Subterráneo 地下拳击",
        "cover": "https://telegra.ph/file/238c204005b9f58fd82f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39123",
        "pageSeq": 39123
    },
    {
        "IDcode": 39124,
        "title": "HaneAme 雨波 — Kurumi Tokisaki - bridal lingerie (Date A Live)",
        "cover": "https://telegra.ph/file/fd38158695b120ae31177.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39124",
        "pageSeq": 39124
    },
    {
        "IDcode": 39125,
        "title": "Yoshinobi - Liliana Elf",
        "cover": "https://telegra.ph/file/0be90c3ec8dd880c8be59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39125",
        "pageSeq": 39125
    },
    {
        "IDcode": 39126,
        "title": "손예은 Song Ye-Eun - Romantic Winter Glamping",
        "cover": "https://telegra.ph/file/29d5d40c3070774bd4735.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39126",
        "pageSeq": 39126
    },
    {
        "IDcode": 39127,
        "title": "Bambi - God Mother Heket (Destiny Child)",
        "cover": "https://telegra.ph/file/0c9411c42dd0cd7db2c9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39127",
        "pageSeq": 39127
    },
    {
        "IDcode": 39128,
        "title": "Kururin - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/5880946644da71a842524.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39128",
        "pageSeq": 39128
    },
    {
        "IDcode": 39129,
        "title": "Kururin Rin - Nobara Kugisaki (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/0ee12818a32ca730aaa0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39129",
        "pageSeq": 39129
    },
    {
        "IDcode": 39130,
        "title": "Moiicos43 - Minamoto No Raikou (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1f51070a44856944e2fab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39130",
        "pageSeq": 39130
    },
    {
        "IDcode": 39131,
        "title": "Makachan - Transparent Bunny",
        "cover": "https://telegra.ph/file/ff51aa790455ce296f4a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39131",
        "pageSeq": 39131
    },
    {
        "IDcode": 39132,
        "title": "Nebula Neko - Boo Babe",
        "cover": "https://telegra.ph/file/f6f8b4838cbadef286f84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39132",
        "pageSeq": 39132
    },
    {
        "IDcode": 39133,
        "title": "Kururin - Mikasa (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/a676dc4de92dfd75ca785.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39133",
        "pageSeq": 39133
    },
    {
        "IDcode": 39134,
        "title": "KuukoW - Yoimiya (Genshi Impact)",
        "cover": "https://telegra.ph/file/8a53036e971b22e4ad431.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39134",
        "pageSeq": 39134
    },
    {
        "IDcode": 39135,
        "title": "Arty Huang - Jeanne D'Arc Kimono (Fate Grand Order)",
        "cover": "https://telegra.ph/file/456c3eaa57c3dab5a5983.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39135",
        "pageSeq": 39135
    },
    {
        "IDcode": 39136,
        "title": "Alin Ma/Xenon - Makima Latex (Chain Saw Man)",
        "cover": "https://telegra.ph/file/5bcbb685817926735d30c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39136",
        "pageSeq": 39136
    },
    {
        "IDcode": 39137,
        "title": "Ping Ping - Kaine (Nier Replicant)",
        "cover": "https://telegra.ph/file/b0d1725b988241d371ab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39137",
        "pageSeq": 39137
    },
    {
        "IDcode": 39138,
        "title": "Hane Ame - Sesshouin Kiara bath (Fate Grand Order)",
        "cover": "https://telegra.ph/file/69d6bfed917c60bd8fda0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39138",
        "pageSeq": 39138
    },
    {
        "IDcode": 39139,
        "title": "Arty Huang - Shogun Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/996a3000ccb658833f3fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39139",
        "pageSeq": 39139
    },
    {
        "IDcode": 39140,
        "title": "蠢沫沫 Chunmomo - 乡下妹妹 Chica de Campo",
        "cover": "https://telegra.ph/file/29e296c512c42d13a2dc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39140",
        "pageSeq": 39140
    },
    {
        "IDcode": 39141,
        "title": "Alcololi & Shirogane-sama - Power & Makima Nurse (Chain Saw Man)",
        "cover": "https://telegra.ph/file/7aa1ac2549139c7cb75dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39141",
        "pageSeq": 39141
    },
    {
        "IDcode": 39142,
        "title": "Yoshinobi - Ochako Uraraka (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/31b8c41dc6d273bf0fb2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39142",
        "pageSeq": 39142
    },
    {
        "IDcode": 39143,
        "title": "Ana Chu - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/fd14b3eebd7da54d9fd09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39143",
        "pageSeq": 39143
    },
    {
        "IDcode": 39144,
        "title": "Rocksy Light - Monoke (Mononoke Hime)",
        "cover": "https://telegra.ph/file/29ccd57d5587bd4b726cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39144",
        "pageSeq": 39144
    },
    {
        "IDcode": 39145,
        "title": "Arty Huang - Ganyu Cow (Genshin Impact)",
        "cover": "https://telegra.ph/file/2ede022c848fa73375c37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39145",
        "pageSeq": 39145
    },
    {
        "IDcode": 39146,
        "title": "周叽是可爱兔兔 No.035 伊丽莎白连体衣 (Nanatsu No Taiza)",
        "cover": "https://telegra.ph/file/e3e0aac7be0a74d7bc456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39146",
        "pageSeq": 39146
    },
    {
        "IDcode": 39147,
        "title": "Virtual Geisha - 2B Bunny (NieR:Automata)",
        "cover": "https://telegra.ph/file/260367df321f3d3053985.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39147",
        "pageSeq": 39147
    },
    {
        "IDcode": 39148,
        "title": "UyUy - Komi Shouko (Komi-San)",
        "cover": "https://telegra.ph/file/f33b7287dc717066b0184.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39148",
        "pageSeq": 39148
    },
    {
        "IDcode": 39149,
        "title": "Chunmomo 蠢沫沫 - 日常睡裙",
        "cover": "https://telegra.ph/file/b9a6285da2d54336b8205.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39149",
        "pageSeq": 39149
    },
    {
        "IDcode": 39150,
        "title": "ZinieQ - Hakos Baelz Pole Dancing (Hololive)",
        "cover": "https://telegra.ph/file/f4b9b5ce1c788fc67d879.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39150",
        "pageSeq": 39150
    },
    {
        "IDcode": 39151,
        "title": "Scarlett Jones - Double D. Mitrescu (Resident Evil Village)",
        "cover": "https://telegra.ph/file/33871159ca6de65f02fe7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39151",
        "pageSeq": 39151
    },
    {
        "IDcode": 39152,
        "title": "奶狮不咬人 - 赫萝Holo (Spice and Wolf)",
        "cover": "https://telegra.ph/file/05faa54d89d50423b3b24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39152",
        "pageSeq": 39152
    },
    {
        "IDcode": 39153,
        "title": "Lady Melamori - Qiyana (League Of Legends/KDA)",
        "cover": "https://telegra.ph/file/4705af14d35fd11d122ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39153",
        "pageSeq": 39153
    },
    {
        "IDcode": 39154,
        "title": "Ping Ping - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/da9ee692e748064ed24d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39154",
        "pageSeq": 39154
    },
    {
        "IDcode": 39155,
        "title": "Byoru - Aqua Minamoto (Hololive)",
        "cover": "https://telegra.ph/file/f589c3e5912d544a7a4cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39155",
        "pageSeq": 39155
    },
    {
        "IDcode": 39156,
        "title": "Lady Melamori - Makima (Chain Saw Man)",
        "cover": "https://telegra.ph/file/47eacfa674392db8b2cf5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39156",
        "pageSeq": 39156
    },
    {
        "IDcode": 39157,
        "title": "Ping Ping - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/93a094e0d3f1f32e45f08.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39157",
        "pageSeq": 39157
    },
    {
        "IDcode": 39158,
        "title": "Neppu - Rrizu-kyun (Sono Bisque Doll Wa Koi Wo Soru)",
        "cover": "https://telegra.ph/file/65b7dd6d437aa4e6d8ee0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39158",
        "pageSeq": 39158
    },
    {
        "IDcode": 39159,
        "title": "Hane Ame - Taihou Wedding Dress (Azur Lane)",
        "cover": "https://telegra.ph/file/94559805ecb38817824a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39159",
        "pageSeq": 39159
    },
    {
        "IDcode": 39160,
        "title": "Byoru - Yae Miko x Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/ea5476d3e22e7ccd1edc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39160",
        "pageSeq": 39160
    },
    {
        "IDcode": 39161,
        "title": "蜜蜜子 - 迦南 Canaan (Naraka: Bladepoint)",
        "cover": "https://telegra.ph/file/90a775de5f4e197227c10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39161",
        "pageSeq": 39161
    },
    {
        "IDcode": 39162,
        "title": "KuukoW - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/394a510c0f47b8f1d12bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39162",
        "pageSeq": 39162
    },
    {
        "IDcode": 39163,
        "title": "Shui Miao Aqua - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Soru)",
        "cover": "https://telegra.ph/file/a83f9de1bb26bd6e308d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39163",
        "pageSeq": 39163
    },
    {
        "IDcode": 39164,
        "title": "Byoru - Triangle (Squid Game)",
        "cover": "https://telegra.ph/file/7b2c072119b97f07ff080.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39164",
        "pageSeq": 39164
    },
    {
        "IDcode": 39165,
        "title": "Alin Ma / Xenon - A2 (Nier Automata)",
        "cover": "https://telegra.ph/file/72ab7d3a004efee2776a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39165",
        "pageSeq": 39165
    },
    {
        "IDcode": 39166,
        "title": "Nekokoyoshi 爆机少女喵小吉 - 瓶中精灵 Elf",
        "cover": "https://telegra.ph/file/195c985a3b3cebd9731a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39166",
        "pageSeq": 39166
    },
    {
        "IDcode": 39167,
        "title": "MissWarmj - Platelet Chan (Hataraku Saibou)",
        "cover": "https://telegra.ph/file/6e684d853c1d3d171b294.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39167",
        "pageSeq": 39167
    },
    {
        "IDcode": 39168,
        "title": "Okita Rinka 沖田凜花 - 冰雪 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/89ea933c7d846f0a4511e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39168",
        "pageSeq": 39168
    },
    {
        "IDcode": 39169,
        "title": "Chunmomo 蠢沫沫 - 小护士 Pequeña Enfermera",
        "cover": "https://telegra.ph/file/4af6c5350b4197db020b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39169",
        "pageSeq": 39169
    },
    {
        "IDcode": 39170,
        "title": "Fantasy Factory - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/a27b62a4d1988b22183b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39170",
        "pageSeq": 39170
    },
    {
        "IDcode": 39171,
        "title": "Rinzje Baby - Makima (Chain Saw Man)",
        "cover": "https://telegra.ph/file/da2df456c67187fec71a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39171",
        "pageSeq": 39171
    },
    {
        "IDcode": 39173,
        "title": "白烨 Bai Ye - 夜莺x2B (Nier Automata)",
        "cover": "https://telegra.ph/file/231cd340620dbd44ee772.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39173",
        "pageSeq": 39173
    },
    {
        "IDcode": 39174,
        "title": "Carry Key - Nami (One Piece)",
        "cover": "https://telegra.ph/file/e0f14c5d76f32e4373433.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39174",
        "pageSeq": 39174
    },
    {
        "IDcode": 39175,
        "title": "miko酱ww - 草莓圣代 Mask",
        "cover": "https://telegra.ph/file/c9bbc710aa8ffe12b712d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39175",
        "pageSeq": 39175
    },
    {
        "IDcode": 39176,
        "title": "Carry Key - Jinx Neon/Christmas (League Of Legends)",
        "cover": "https://telegra.ph/file/4364a416d435cbaa924b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39176",
        "pageSeq": 39176
    },
    {
        "IDcode": 39177,
        "title": "Nyako喵子 - Secretary in the Office",
        "cover": "https://telegra.ph/file/8a6955040ac308a35db16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39177",
        "pageSeq": 39177
    },
    {
        "IDcode": 39178,
        "title": "Shirogane-sama - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Soru)",
        "cover": "https://telegra.ph/file/02863c79448a5671ed49b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39178",
        "pageSeq": 39178
    },
    {
        "IDcode": 39179,
        "title": "Hane Ame - Zero Two Swimsuit (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/162e0b7d3bca42c91f0c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39179",
        "pageSeq": 39179
    },
    {
        "IDcode": 39180,
        "title": "Arty Huang - Yoru Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/6139bb929089bd05dc071.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39180",
        "pageSeq": 39180
    },
    {
        "IDcode": 39181,
        "title": "Peach Milky - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/164a4b9d2e7c864637103.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39181",
        "pageSeq": 39181
    },
    {
        "IDcode": 39182,
        "title": "Kokuhui - Maid (Random Cosplay)",
        "cover": "https://telegra.ph/file/53c4caf43ad5c27da89a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39182",
        "pageSeq": 39182
    },
    {
        "IDcode": 39183,
        "title": "Helly Valentine - Ann Takamaki (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/6feb3c14cf92433c04428.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39183",
        "pageSeq": 39183
    },
    {
        "IDcode": 39184,
        "title": "Arty Huang - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/125f9d7fc2dd0d2f0cf5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39184",
        "pageSeq": 39184
    },
    {
        "IDcode": 39185,
        "title": "Hane Ame - Nyotengu/Nico (Dead Or Alive)",
        "cover": "https://telegra.ph/file/e384b70b7519015d37992.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39185",
        "pageSeq": 39185
    },
    {
        "IDcode": 39186,
        "title": "Chameleahn - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/826ccfcc2fef30afdaa4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39186",
        "pageSeq": 39186
    },
    {
        "IDcode": 39187,
        "title": "Arty Huang - Artoria Pendragon Lancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ff392ef66eed61961b97d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39187",
        "pageSeq": 39187
    },
    {
        "IDcode": 39188,
        "title": "秋和柯基 Qiu Xia Xiao - Sena (Boku Wa Tomodachi Ga Sukunai)",
        "cover": "https://telegra.ph/file/92c1fdb7481c5cf6e48fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39188",
        "pageSeq": 39188
    },
    {
        "IDcode": 39189,
        "title": "Choi Ji Yun - Yor Forger (Spy X Family)",
        "cover": "https://telegra.ph/file/fe5d240b4d3fbce1a671a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39189",
        "pageSeq": 39189
    },
    {
        "IDcode": 39190,
        "title": "Potato Godzilla - Marin Kitagawa (Sono Bisque Dow Wa Koi Wo Soru)",
        "cover": "https://telegra.ph/file/144ee37527f93a3a24db4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39190",
        "pageSeq": 39190
    },
    {
        "IDcode": 39191,
        "title": "Helly Valentine - Yor Forger (Spy X Family)",
        "cover": "https://telegra.ph/file/c459ce821f945afdd39c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39191",
        "pageSeq": 39191
    },
    {
        "IDcode": 39192,
        "title": "Chihiro - Shinobu (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/bae0714c94594c2b48908.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39192",
        "pageSeq": 39192
    },
    {
        "IDcode": 39193,
        "title": "Alin Ma/Xenon - Riamu Yumemi (Idolmaster)",
        "cover": "https://telegra.ph/file/2c7586233ee7284597d28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39193",
        "pageSeq": 39193
    },
    {
        "IDcode": 39194,
        "title": "Alin Ma/Xenon - Ereshkigal Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/38cd8d2d767598f295e1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39194",
        "pageSeq": 39194
    },
    {
        "IDcode": 39195,
        "title": "Hane Ame - Fia (Elden Ring)",
        "cover": "https://telegra.ph/file/0bc38bdc5472b690b1dac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39195",
        "pageSeq": 39195
    },
    {
        "IDcode": 39196,
        "title": "Shui Miao Aqua - Yoimiya (Genshin Impact)",
        "cover": "https://telegra.ph/file/9985f45da537bd82b4bba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39196",
        "pageSeq": 39196
    },
    {
        "IDcode": 39197,
        "title": "Ana Chu - Marin Kitagawa (Sono Bisque Dow Wa Koi Wo Soru)",
        "cover": "https://telegra.ph/file/ab3e3a9ed14262b1bfa98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39197",
        "pageSeq": 39197
    },
    {
        "IDcode": 39198,
        "title": "Akemi - Collab (Kimetsu no Yaiba)",
        "cover": "https://telegra.ph/file/d0f7870db599668170ed3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39198",
        "pageSeq": 39198
    },
    {
        "IDcode": 39199,
        "title": "PingPing - Rrizu-kyun (Sono Bisque Doll Wa Koi Wo Soru)",
        "cover": "https://telegra.ph/file/2441b08f39531ce1f0286.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39199",
        "pageSeq": 39199
    },
    {
        "IDcode": 39200,
        "title": "Sweetie Fox - Mikasa (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/7b6afc3736761d504d7b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39200",
        "pageSeq": 39200
    },
    {
        "IDcode": 39201,
        "title": "Helly Valentine - Aerith (Final Fantasy 7)",
        "cover": "https://telegra.ph/file/c7d16f4df635bcccb1211.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39201",
        "pageSeq": 39201
    },
    {
        "IDcode": 39202,
        "title": "Potato Godzilla - Zero Two Swimsuit (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/be1b5b9e2273845f68f21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39202",
        "pageSeq": 39202
    },
    {
        "IDcode": 39203,
        "title": "KuukoW - Mash Dancer (Fate Grand Order)",
        "cover": "https://telegra.ph/file/f7f08d85890d722c2ecf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39203",
        "pageSeq": 39203
    },
    {
        "IDcode": 39204,
        "title": "六味帝皇酱 51假日女友 Model",
        "cover": "https://telegra.ph/file/0cd5ac47a71ee75757433.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39204",
        "pageSeq": 39204
    },
    {
        "IDcode": 39205,
        "title": "Tsuki Desu - Ereshkigal (Fate Grand Order)",
        "cover": "https://telegra.ph/file/07fafff724436c1d5c93d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39205",
        "pageSeq": 39205
    },
    {
        "IDcode": 39206,
        "title": "Sameki - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/9450b0166a88664bcdc14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39206",
        "pageSeq": 39206
    },
    {
        "IDcode": 39208,
        "title": "Enafox - Roxie",
        "cover": "https://telegra.ph/file/fc8e98a08a55e81a53d4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39208",
        "pageSeq": 39208
    },
    {
        "IDcode": 39209,
        "title": "Fantasy Factory - Asuka (Neon Génesis Evangelion)",
        "cover": "https://telegra.ph/file/1465a984dc1e72dcd5fc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39209",
        "pageSeq": 39209
    },
    {
        "IDcode": 39210,
        "title": "Arty Huang - Sena (Boku Wa Tomodachi Ga Sukunai)",
        "cover": "https://telegra.ph/file/60be8f842acfc55ddd465.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39210",
        "pageSeq": 39210
    },
    {
        "IDcode": 39211,
        "title": "PinPing - Kuroneko (Oreimo)",
        "cover": "https://telegra.ph/file/d163afd76f29ec18686d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39211",
        "pageSeq": 39211
    },
    {
        "IDcode": 39212,
        "title": "Akemi - Shion Bunny (Tensei Shitara Slime Datta Ken)",
        "cover": "https://telegra.ph/file/4da9877a0a76197acc925.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39212",
        "pageSeq": 39212
    },
    {
        "IDcode": 39213,
        "title": "Hane Ame - Aegean Sea",
        "cover": "https://telegra.ph/file/386093e80eb53fa6ae901.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39213",
        "pageSeq": 39213
    },
    {
        "IDcode": 39214,
        "title": "Kalinka Fox - Yumeko Jabami (Kakegurui)",
        "cover": "https://telegra.ph/file/b6a7610e0c5776365377d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39214",
        "pageSeq": 39214
    },
    {
        "IDcode": 39215,
        "title": "六味帝皇酱 - 午后 Sunset (Model)",
        "cover": "https://telegra.ph/file/76348c754161ad97a27e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39215",
        "pageSeq": 39215
    },
    {
        "IDcode": 39216,
        "title": "Kalinka Fox - Akali (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/7b218fa97dbf964b9b27b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39216",
        "pageSeq": 39216
    },
    {
        "IDcode": 39217,
        "title": "小仓千代w - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/adabc427085527ef95902.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39217",
        "pageSeq": 39217
    }
];
