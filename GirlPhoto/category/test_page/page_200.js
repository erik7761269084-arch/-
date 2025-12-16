// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 42068,
        "title": "Anna Aifert - Power swimsuit (Chainsaw Man)",
        "cover": "https://i.ibb.co/RkxD2NCg/01-fansly-1z4hzbqiiahi.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42068",
        "pageSeq": 42068
    },
    {
        "IDcode": 42069,
        "title": "Potato Godzilla - Himeko (Honkai Star Rail)",
        "cover": "https://i.ibb.co/Dg4KKGgj/001-compress92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42069",
        "pageSeq": 42069
    },
    {
        "IDcode": 42070,
        "title": "Shui Miao Aqua - Olga & Chloe (KuroInu)",
        "cover": "https://i.ibb.co/j9BVktCr/001-00-compress11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42070",
        "pageSeq": 42070
    },
    {
        "IDcode": 42071,
        "title": "Potato Godzilla - Mari Makinami (Neon Genesis Evangelion)",
        "cover": "https://i.ibb.co/v4tfVC3v/2024-11-Mari-Makinami-Evangelion-compress27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42071",
        "pageSeq": 42071
    },
    {
        "IDcode": 42072,
        "title": "TITI - Rakshasi (Black Myth Wukong)",
        "cover": "https://i.ibb.co/ZRHHv2T8/001-compress27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42072",
        "pageSeq": 42072
    },
    {
        "IDcode": 42073,
        "title": "Shui Miao Aqua - Bunny Taihou (Azur Lane)",
        "cover": "https://i.ibb.co/jPRgxZXQ/Taihou-Bunny-01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42073",
        "pageSeq": 42073
    },
    {
        "IDcode": 42074,
        "title": "Okita Rinka - Naruko (Naruto Shippuden)",
        "cover": "https://i.ibb.co/SwDDkSRS/Okita-Rinka-Rinka-cosplay-Naruto-Naruto-1-compress9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42074",
        "pageSeq": 42074
    },
    {
        "IDcode": 42075,
        "title": "Ayame - Varesa (Genshin Impact)",
        "cover": "https://i.ibb.co/MkyrD34F/01-Ayame-Varesa-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42075",
        "pageSeq": 42075
    },
    {
        "IDcode": 42076,
        "title": "Shaeunderscore - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/F4f8gtWt/001-01-compress71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42076",
        "pageSeq": 42076
    },
    {
        "IDcode": 42077,
        "title": "Donna Loli - Tatsumaki lingerie (One Punch Man)",
        "cover": "https://i.ibb.co/Y4wGzRSC/donnaloli-senritsunotatsumakilingerie-001-compress6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42077",
        "pageSeq": 42077
    },
    {
        "IDcode": 42078,
        "title": "Bunny Alina Kim - Leotard Cat",
        "cover": "https://i.ibb.co/YFTwWFQq/01-3213x5712-3b6225cf559b3e675619ccd6fa48238b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42078",
        "pageSeq": 42078
    },
    {
        "IDcode": 42079,
        "title": "Anastasia Komori - Birthday 2025 Fanservice",
        "cover": "https://i.ibb.co/Jj8xrpXg/01-Bday-F1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42079",
        "pageSeq": 42079
    },
    {
        "IDcode": 42080,
        "title": "Rioko 凉凉子 - Mogador (Azur Lane)",
        "cover": "https://i.ibb.co/s9RchSFx/Rioko-cosplay-Mogador-Azur-Lane-1-compress59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42080",
        "pageSeq": 42080
    },
    {
        "IDcode": 42081,
        "title": "Poppachan - Phoebe (Wuthering Waves)",
        "cover": "https://i.ibb.co/JRThX3dZ/001-Phoebe-Poppa-Chan-1-compress12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42081",
        "pageSeq": 42081
    },
    {
        "IDcode": 42082,
        "title": "Ulichan - Momo (Dan Da Dan)",
        "cover": "https://i.ibb.co/Xk2dJG8G/01-IMG-9370-compress78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42082",
        "pageSeq": 42082
    },
    {
        "IDcode": 42083,
        "title": "Potato Godzilla - Akari (Pokemon)",
        "cover": "https://i.ibb.co/FL7JZZbd/01-Potato-Godzilla-Akari-Pokemon-1-compress80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42083",
        "pageSeq": 42083
    },
    {
        "IDcode": 42084,
        "title": "Hologana - Gwen (Spider-Man)",
        "cover": "https://i.ibb.co/YTFvgbcM/hologana-gwen-001-compress27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42084",
        "pageSeq": 42084
    },
    {
        "IDcode": 42085,
        "title": "Quistreous - St Louis (Azur Lane)",
        "cover": "https://i.ibb.co/tMhx0VBX/001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42085",
        "pageSeq": 42085
    },
    {
        "IDcode": 42086,
        "title": "Natsuko夏夏子 - Makima (Chainsaw Man)",
        "cover": "https://i.ibb.co/XrtQd11m/01-1-compress88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42086",
        "pageSeq": 42086
    },
    {
        "IDcode": 42087,
        "title": "Nyako喵子 - Guitar Sister",
        "cover": "https://i.ibb.co/8LbZqPPx/01-compress72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42087",
        "pageSeq": 42087
    },
    {
        "IDcode": 42088,
        "title": "Meenfox - Tifa Lockhart Swimsuit (Final Fantasy)",
        "cover": "https://i.ibb.co/qFnRpfd9/Meenfox-cosplay-Tifa-Lockhart-Swimsuit-Final-Fantasy-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42088",
        "pageSeq": 42088
    },
    {
        "IDcode": 42089,
        "title": "Hidori Rose - Himeko (Honkai Star Rail)",
        "cover": "https://i.ibb.co/Y7BRvPGC/01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42089",
        "pageSeq": 42089
    },
    {
        "IDcode": 42090,
        "title": "Dreamtamu - Rory Mercury (Gate Jieitai Kano Chi Nite Kaku Tatakaeri)",
        "cover": "https://i.ibb.co/wNTyxdqs/01-Rory-Mercury-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42090",
        "pageSeq": 42090
    },
    {
        "IDcode": 42091,
        "title": "Sayo Momo - Mogador (Azur Lane)",
        "cover": "https://i.ibb.co/RrQcB19/01-compress73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42091",
        "pageSeq": 42091
    },
    {
        "IDcode": 42092,
        "title": "麻花麻花酱 Makachan - Maiden (NIKKE)",
        "cover": "https://i.ibb.co/yn5hVQFL/Mahua-Mahua-Jiang-001-compress14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42092",
        "pageSeq": 42092
    },
    {
        "IDcode": 42093,
        "title": "慕慕Momo - Nahida (Genshin Impact)",
        "cover": "https://i.ibb.co/9FcFkPq/01-compress11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42093",
        "pageSeq": 42093
    },
    {
        "IDcode": 42094,
        "title": "Hana Bunny - Boa Hancock (One Piece)",
        "cover": "https://i.ibb.co/LzP4sRtg/01-Hana-Bunny-Snake-Boa-Hancock-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42094",
        "pageSeq": 42094
    },
    {
        "IDcode": 42095,
        "title": "Arty Huang - 2B Bride (NieR Automata)",
        "cover": "https://i.ibb.co/hxNgYDCK/01-Arty-2-B-1-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42095",
        "pageSeq": 42095
    },
    {
        "IDcode": 42096,
        "title": "Helly Valentine - Saber Nero Boudoir (Fate Extra Last Encore)",
        "cover": "https://i.ibb.co/VpvWqdsn/DSC01808-compress92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42096",
        "pageSeq": 42096
    },
    {
        "IDcode": 42097,
        "title": "懒懒睡不醒 LanLanWink - Sparkle Hanabi (Honkai Star Rail)",
        "cover": "https://i.ibb.co/0y1mZ7cB/Lan-Lan-Wink-cosplay-Sparkle-Hanabi-Honkai-Star-Rail-1-compress65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42097",
        "pageSeq": 42097
    },
    {
        "IDcode": 42099,
        "title": "Ulichan - Emma Frost (X-Men)",
        "cover": "https://i.ibb.co/r2N4GRHz/01-IMG-9325-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42099",
        "pageSeq": 42099
    },
    {
        "IDcode": 42100,
        "title": "Umeko J - Ani GrokAI",
        "cover": "https://i.ibb.co/0p4vbLHD/01-banner-compress96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42100",
        "pageSeq": 42100
    },
    {
        "IDcode": 42101,
        "title": "Minichu - Miku (Vocaloid)",
        "cover": "https://i.ibb.co/8LrHvMMK/01-Miku-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42101",
        "pageSeq": 42101
    },
    {
        "IDcode": 42102,
        "title": "Wanderlustluca - Sue Storm bikini (Fantastic Four)",
        "cover": "https://i.ibb.co/ymY6xgJG/01-3840x5760-f671856bc965592b5fa20aa554d748b8-compress54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42102",
        "pageSeq": 42102
    },
    {
        "IDcode": 42103,
        "title": "Jean Wanwan - Takanashi Kiara (Holo Live)",
        "cover": "https://i.ibb.co/84mL7yHq/01-1-compress21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42103",
        "pageSeq": 42103
    },
    {
        "IDcode": 42104,
        "title": "Fantasy factory - Kayoko (Blue Archive)",
        "cover": "https://i.ibb.co/wrQHG7vt/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42104",
        "pageSeq": 42104
    },
    {
        "IDcode": 42105,
        "title": "Mizu - Ani Grok",
        "cover": "https://i.ibb.co/WvCWsqtm/Mizu-cosplay-Ani-Grok-1-compress20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42105",
        "pageSeq": 42105
    },
    {
        "IDcode": 42106,
        "title": "Lada Lyumos - Momo Ayase (Dan Da Dan)",
        "cover": "https://i.ibb.co/pvdgzLY4/01-LL-Mo-Mo-0-compress56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42106",
        "pageSeq": 42106
    },
    {
        "IDcode": 42107,
        "title": "Zalaria - Fern (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/5pC8DMK/01-2464x3280-0742ea321d2a850e907d1760401bd3ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42107",
        "pageSeq": 42107
    },
    {
        "IDcode": 42108,
        "title": "lMusicl - Nahida (Genshin Impact)",
        "cover": "https://i.ibb.co/XRK76VD/01-Nahida-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42108",
        "pageSeq": 42108
    },
    {
        "IDcode": 42109,
        "title": "Misaki Sai - Shadowheart (Baldur's Gate 3)",
        "cover": "https://i.ibb.co/bM0gDPpF/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42109",
        "pageSeq": 42109
    },
    {
        "IDcode": 42110,
        "title": "是一只熊仔吗 - Yutori Natsu (Blue Archive)",
        "cover": "https://i.ibb.co/RGbkRmCC/01-ovo-1-compress57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42110",
        "pageSeq": 42110
    },
    {
        "IDcode": 42111,
        "title": "Ayame - Nicole Demara (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/0ySrcgtD/Ayame-Base-cosplay-Nicole-Demara-Zenless-Zone-Zero-01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42111",
        "pageSeq": 42111
    },
    {
        "IDcode": 42112,
        "title": "Mik Allen - Emma Frost Bunny Suit (X-Men)",
        "cover": "https://i.ibb.co/VW8DrmST/01-1-compress37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42112",
        "pageSeq": 42112
    },
    {
        "IDcode": 42113,
        "title": "Natsuko夏夏子 - Chen Hai (Azur Lane)",
        "cover": "https://i.ibb.co/p66BrY59/0001-compress26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42113",
        "pageSeq": 42113
    },
    {
        "IDcode": 42114,
        "title": "DaphVT - Nerissa Ravencroft (Slingshot Swimsuit)",
        "cover": "https://i.ibb.co/Zp2bkm4w/01-06-2316x3088-de4f1e7e55a19c2827a3c63eb524f2a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42114",
        "pageSeq": 42114
    },
    {
        "IDcode": 42115,
        "title": "Khainsaw - Mordred (Fate Apocrypha)",
        "cover": "https://i.ibb.co/hPTFp3R/01-1-compress13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42115",
        "pageSeq": 42115
    },
    {
        "IDcode": 42116,
        "title": "Rioko 凉凉子 - Shenhe Cheongsam (Genshin Impact)",
        "cover": "https://i.ibb.co/SFtFNtS/Rioko-cosplay-Shenhe-Cheongsam-Genshin-Impact-1-compress83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42116",
        "pageSeq": 42116
    },
    {
        "IDcode": 42117,
        "title": "PoppaChan - Ju Fufu (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/JRRFCZgm/001-Poppa-Chan-Ju-Fufu-1-compress69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42117",
        "pageSeq": 42117
    },
    {
        "IDcode": 42118,
        "title": "Hana Bunny - Hana x Maidoll (Photobook)",
        "cover": "https://i.ibb.co/JjLhbyg6/01-P1-compress84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42118",
        "pageSeq": 42118
    },
    {
        "IDcode": 42119,
        "title": "Hinata2000 - Yor Forger (Spy X Family)",
        "cover": "https://i.ibb.co/fzMNFtTy/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42119",
        "pageSeq": 42119
    },
    {
        "IDcode": 42120,
        "title": "Misaki Sai - Cammy (Street Fighter)",
        "cover": "https://i.ibb.co/WvhbMqML/01-Cammy-25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42120",
        "pageSeq": 42120
    },
    {
        "IDcode": 42121,
        "title": "Joyce - Yoimiya (Genshin Impact)",
        "cover": "https://i.ibb.co/Zkh0K14/02-1-compress97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42121",
        "pageSeq": 42121
    },
    {
        "IDcode": 42122,
        "title": "Win Winry - Mita (MiSide) (1)",
        "cover": "https://i.ibb.co/dskWNwTK/01-Win-Winry-Mita-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42122",
        "pageSeq": 42122
    },
    {
        "IDcode": 42123,
        "title": "Bangni邦尼 - NO.049 A Lucky Zongzi - Success in One Go”",
        "cover": "https://i.ibb.co/23LfVwTp/0001-compress33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42123",
        "pageSeq": 42123
    },
    {
        "IDcode": 42124,
        "title": "Hologana - Satsuki Kiryuuin (Kill la Kill)",
        "cover": "https://i.ibb.co/WvnzvkHW/hologana-satsukikiryuuin-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42124",
        "pageSeq": 42124
    },
    {
        "IDcode": 42125,
        "title": "Ayame - Ryuuge Kisaki (Blue Archive)",
        "cover": "https://i.ibb.co/Df47zWfm/Ayame-Base-cosplay-Ryuuge-Kisaki-Blue-Archive-1-compress58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42125",
        "pageSeq": 42125
    },
    {
        "IDcode": 42126,
        "title": "Okita Rinka - Rem (Re Zero)",
        "cover": "https://i.ibb.co/M5W0YwrV/01-Rem-1-compress4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42126",
        "pageSeq": 42126
    },
    {
        "IDcode": 42127,
        "title": "Kuuko W - NO.202  Theresa Apocalypse (Honkai Gakuen)",
        "cover": "https://i.ibb.co/Df5VFhWS/01-C-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42127",
        "pageSeq": 42127
    },
    {
        "IDcode": 42128,
        "title": "PoppaChan - 2B (Nier Automata)",
        "cover": "https://i.ibb.co/RkqrRdNk/001-1-compress13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42128",
        "pageSeq": 42128
    },
    {
        "IDcode": 42129,
        "title": "日奈娇 Hina Jiao - Yoga exercise",
        "cover": "https://i.ibb.co/xKPHnpFm/001-Rinaijiao-Yoga-Training-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42129",
        "pageSeq": 42129
    },
    {
        "IDcode": 42130,
        "title": "Aery Tiefling - Darth Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/0THXnQw/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42130",
        "pageSeq": 42130
    },
    {
        "IDcode": 42131,
        "title": "MirinShu - Fuwawa (Hololive)",
        "cover": "https://i.ibb.co/yB7YRmg6/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42131",
        "pageSeq": 42131
    },
    {
        "IDcode": 42132,
        "title": "Sexylil069 - Formidable (Azur Lane)",
        "cover": "https://i.ibb.co/SwKgqsB3/01-Formidable-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42132",
        "pageSeq": 42132
    },
    {
        "IDcode": 42133,
        "title": "桜井宁宁 Sakurai Ning Ning - NO.165 White Catgirl",
        "cover": "https://i.ibb.co/k29W1NYZ/001-compress24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42133",
        "pageSeq": 42133
    },
    {
        "IDcode": 42134,
        "title": "Carrykey - Tylee (Avatar)",
        "cover": "https://i.ibb.co/mCYLsg0n/DSC00582-compress62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42134",
        "pageSeq": 42134
    },
    {
        "IDcode": 42135,
        "title": "Asagi Kawaii - Mualani (Genshin Impact)",
        "cover": "https://i.ibb.co/G40wvGY9/01-Mualani-1-compress38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42135",
        "pageSeq": 42135
    },
    {
        "IDcode": 42136,
        "title": "Donnaloli - Chun-li (Street Fighter)",
        "cover": "https://i.ibb.co/Mxwg4j9N/donnaloli-chun-li-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42136",
        "pageSeq": 42136
    },
    {
        "IDcode": 42137,
        "title": "Mors tyan - Ganyu (Genshin Impact)",
        "cover": "https://i.ibb.co/svGgbrqM/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42137",
        "pageSeq": 42137
    },
    {
        "IDcode": 42138,
        "title": "Krrn - Reze (Chainsaw Man)",
        "cover": "https://i.ibb.co/HLxxH5vN/KRRN-Reze-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42138",
        "pageSeq": 42138
    },
    {
        "IDcode": 42140,
        "title": "Uri - Bunny Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://i.ibb.co/5gBKdBF6/01-1-compress11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42140",
        "pageSeq": 42140
    },
    {
        "IDcode": 42141,
        "title": "Neppu - Mogador (Azur Lane)",
        "cover": "https://i.ibb.co/nM8PFf08/01-01-compress51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42141",
        "pageSeq": 42141
    },
    {
        "IDcode": 42142,
        "title": "Hidori Rose - Shinano (Azur Lane)",
        "cover": "https://i.ibb.co/ksG87tsR/02-2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42142",
        "pageSeq": 42142
    },
    {
        "IDcode": 42143,
        "title": "Jean Wanwan - Officer 2B (Nier Automata)",
        "cover": "https://i.ibb.co/m5LZwGrb/01-1-compress30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42143",
        "pageSeq": 42143
    },
    {
        "IDcode": 42144,
        "title": "SushiBunniii - Chocola & Vanilla (Nekopara)",
        "cover": "https://i.ibb.co/DDWSGnV3/01-Chocola-Vanilla-1-compress25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42144",
        "pageSeq": 42144
    },
    {
        "IDcode": 42145,
        "title": "Shimo - Bunny Alice (Alice In Wonderland)",
        "cover": "https://i.ibb.co/Kc47d1Ch/a01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42145",
        "pageSeq": 42145
    },
    {
        "IDcode": 42146,
        "title": "Mik Allen - Gwen Stacy (Spider-Man)",
        "cover": "https://i.ibb.co/5XRbbfmq/01-6-compress53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42146",
        "pageSeq": 42146
    },
    {
        "IDcode": 42147,
        "title": "玉汇 Yuuhui - Cat Catching 捉猫记",
        "cover": "https://i.ibb.co/7NLtqc4n/001-1-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42147",
        "pageSeq": 42147
    },
    {
        "IDcode": 42148,
        "title": "Potato Godzilla - Feixiao (Honkai Star Rail)",
        "cover": "https://i.ibb.co/sJDZjVr2/01-Potato-Godzilla-Feixiao-1-compress9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42148",
        "pageSeq": 42148
    },
    {
        "IDcode": 42149,
        "title": "Nekolina - Misato Katsuragi Neon (Genesis Evangelion)",
        "cover": "https://i.ibb.co/nqCWWZth/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42149",
        "pageSeq": 42149
    },
    {
        "IDcode": 42150,
        "title": "Tniwe - Casual Power (Chainsaw Man)",
        "cover": "https://i.ibb.co/R4jTFDfL/01-TNI3-compress96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42150",
        "pageSeq": 42150
    },
    {
        "IDcode": 42151,
        "title": "Lovely Space Kitten - Kurumu (Rosario Vampire)",
        "cover": "https://i.ibb.co/SX78Pdx8/01-clo9-NUp-B.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42151",
        "pageSeq": 42151
    },
    {
        "IDcode": 42152,
        "title": "Peachuu - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://i.ibb.co/KJLFm4f/01-3840x5990-40bbe421dcfb9c188fcaa84b836c1de9-0ad3d389-1e0d-4b8c-8214-4b840160c574.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42152",
        "pageSeq": 42152
    },
    {
        "IDcode": 42153,
        "title": "桜满三时 AreneaSakura - Yae Miko (Genshin Impact)",
        "cover": "https://i.ibb.co/mVyDHXVZ/01-compress82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42153",
        "pageSeq": 42153
    },
    {
        "IDcode": 42154,
        "title": "Aery Tiefling - Ubel (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/vvmw9yPw/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42154",
        "pageSeq": 42154
    },
    {
        "IDcode": 42155,
        "title": "Hana Bunny - Noxus Katarina (League Of Legends)",
        "cover": "https://i.ibb.co/wN3V6pnf/Hana-Bunny-Noxus-Katarina-1-compress5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42155",
        "pageSeq": 42155
    },
    {
        "IDcode": 42156,
        "title": "Echi Tornado - Roxy Migurdia (Mushoku Tensei)",
        "cover": "https://i.ibb.co/G3fppthq/DSC6761-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42156",
        "pageSeq": 42156
    },
    {
        "IDcode": 42157,
        "title": "Anastasia Komori - Raiden Shogun (Genshin Impact)",
        "cover": "https://i.ibb.co/qM7dJf6r/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42157",
        "pageSeq": 42157
    },
    {
        "IDcode": 42158,
        "title": "星澜是澜澜叫澜妹呀 Xing lan - Mary (NIKKE)",
        "cover": "https://i.ibb.co/8LCZMTft/01-compress82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42158",
        "pageSeq": 42158
    },
    {
        "IDcode": 42159,
        "title": "Joyce - Mobius (Honkai Impact 3)",
        "cover": "https://i.ibb.co/ybHddq1/01-Joyce-Joyce-Lin2x-cosplay-Mobius-Honkai-Impact-3-1-compress65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42159",
        "pageSeq": 42159
    },
    {
        "IDcode": 42160,
        "title": "Hana Bunny - Solo Girlfriend",
        "cover": "https://i.ibb.co/Q72QDd1h/01-Cover-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42160",
        "pageSeq": 42160
    },
    {
        "IDcode": 42161,
        "title": "HaneAme - Shinano (Azur Lane)",
        "cover": "https://i.ibb.co/Dmpgg3P/01-0-compress53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42161",
        "pageSeq": 42161
    },
    {
        "IDcode": 42162,
        "title": "hologana - Nico Robin (One Piece)",
        "cover": "https://i.ibb.co/KxCn0ssW/hologana-nicorobin-001-compress88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42162",
        "pageSeq": 42162
    },
    {
        "IDcode": 42163,
        "title": "Potato Godzilla - Cheongsam Baby",
        "cover": "https://i.ibb.co/VY3MfhBt/01-Cheongsam-Baby-Potato-Godzilla1-compress14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42163",
        "pageSeq": 42163
    },
    {
        "IDcode": 42164,
        "title": "Shui Miao Aqua - Nicole Demara (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/TMfhnMfx/aqua-cosplay-nicol-01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42164",
        "pageSeq": 42164
    },
    {
        "IDcode": 42165,
        "title": "布丁大法 Pudding Dafa - Halloween Ghost Lady",
        "cover": "https://i.ibb.co/xtK8psc7/Pudding-Dafa-Halloween-Ghost-Lady-01-compress73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42165",
        "pageSeq": 42165
    },
    {
        "IDcode": 42166,
        "title": "Potato Godzilla - Jiangshi Halloween",
        "cover": "https://i.ibb.co/HTcBdZks/Jiangshi-Halloween202510-compress75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42166",
        "pageSeq": 42166
    },
    {
        "IDcode": 42167,
        "title": "BakaChi & Shadory - Gym Ryuko & Satsuki (Kill la Kill)",
        "cover": "https://i.ibb.co/dwRGq2bR/01-Baka-Chi-Gym-Ryuko-Satsuki-1-compress15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42167",
        "pageSeq": 42167
    },
    {
        "IDcode": 42168,
        "title": "Lada Lyumos - Momo Ayase (Dan Da Dan)",
        "cover": "https://i.ibb.co/pvdgzLY4/01-LL-Mo-Mo-0-compress56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42168",
        "pageSeq": 42168
    },
    {
        "IDcode": 42169,
        "title": "日奈娇 Hina Jiao - Daisen (Azur Lane)",
        "cover": "https://i.ibb.co/ycFcj8Bx/01-compress59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42169",
        "pageSeq": 42169
    }
];
