// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41968,
        "title": "Rumipeach - Evelyn (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/VW2nmMfD/01-12-compress12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41968",
        "pageSeq": 41968
    },
    {
        "IDcode": 41969,
        "title": "Potato Godzilla - Dating with Pota at METRO VIETNAM",
        "cover": "https://i.ibb.co/0y55gVKy/Casual-Look-METRO2025-1-compress75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41969",
        "pageSeq": 41969
    },
    {
        "IDcode": 41970,
        "title": "Tsuki Desu - Shiroko (Blue Archive)",
        "cover": "https://i.ibb.co/SDzgD4CP/001-Tsuki-Desu-Shiroko-1-compress23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41970",
        "pageSeq": 41970
    },
    {
        "IDcode": 41971,
        "title": "Tiny Asa アサ - Mita (MiSide)",
        "cover": "https://i.ibb.co/Ndt7Svkz/Tiny-Asa-tiny-asababy-cosplay-Cappie-Mi-Side-0-compress78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41971",
        "pageSeq": 41971
    },
    {
        "IDcode": 41972,
        "title": "Mainemu 毎日眠たい。-  毎眠かのん (07.2025)",
        "cover": "https://i.ibb.co/1tWg2TBk/01-undefined1-compress45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41972",
        "pageSeq": 41972
    },
    {
        "IDcode": 41973,
        "title": "Makachan 麻花酱 - School jk合集",
        "cover": "https://i.ibb.co/5ym009j/01-1-compress3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41973",
        "pageSeq": 41973
    },
    {
        "IDcode": 41974,
        "title": "KANEKO 咔喵 - Prinz (Azur Lane)",
        "cover": "https://i.ibb.co/xtm3NG1X/001-compress78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41974",
        "pageSeq": 41974
    },
    {
        "IDcode": 41975,
        "title": "Saya the Fox - Queen Marika (Elden Ring)",
        "cover": "https://i.ibb.co/mj4JvYV/01-compress73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41975",
        "pageSeq": 41975
    },
    {
        "IDcode": 41976,
        "title": "Shui Miao Aqua - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Soru)",
        "cover": "https://i.ibb.co/fzVmmFJg/00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41976",
        "pageSeq": 41976
    },
    {
        "IDcode": 41977,
        "title": "Tiny Asa アサ - Castorice (Honkai Star Rail)",
        "cover": "https://i.ibb.co/Q73jcQYh/Tiny-Asa-tiny-asababy-cosplay-Castorice-Honkai-Star-Rail-1-compress33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41977",
        "pageSeq": 41977
    },
    {
        "IDcode": 41978,
        "title": "Lera Himera & Lady Melamori -  Ash & Mercy (Overwatch)",
        "cover": "https://i.ibb.co/6RvHwj7Z/DSC-9108-compress63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41978",
        "pageSeq": 41978
    },
    {
        "IDcode": 41979,
        "title": "Okita Rinka - Nami (One Piece)",
        "cover": "https://i.ibb.co/B2tcPPZn/01-Nami-1-compress52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41979",
        "pageSeq": 41979
    },
    {
        "IDcode": 41980,
        "title": "Carrykey - Zelda (The Legend Of Zelda)",
        "cover": "https://i.ibb.co/5XTD5KVJ/01-Zelda-1-compress43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41980",
        "pageSeq": 41980
    },
    {
        "IDcode": 41981,
        "title": "慕慕Momo - Nicole (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/gMDwtZpq/01-compress18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41981",
        "pageSeq": 41981
    },
    {
        "IDcode": 41982,
        "title": "Byoru - Tifa bunny remake (Final Fantasy)",
        "cover": "https://i.ibb.co/RknLFmqf/Tifa-bunny-HD10-compress16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41982",
        "pageSeq": 41982
    },
    {
        "IDcode": 41983,
        "title": "Joyce - Princess Zelda (Legend of the Zelda)",
        "cover": "https://i.ibb.co/gFSc1D4B/01-1-compress72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41983",
        "pageSeq": 41983
    },
    {
        "IDcode": 41984,
        "title": "Kiki Rose - Harley Quinn (Batman)",
        "cover": "https://i.ibb.co/20Cg51YB/01-Harley-Quinn-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41984",
        "pageSeq": 41984
    },
    {
        "IDcode": 41985,
        "title": "Roxolana Ridel - Wednesday (The Addams Family)",
        "cover": "https://i.ibb.co/xtSs3CDV/01-Roxolana-Ridel-Wednesday-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41985",
        "pageSeq": 41985
    },
    {
        "IDcode": 41986,
        "title": "DreamlikeUwU - Ganyu Succubus (Genshin Impact)",
        "cover": "https://i.ibb.co/FqqN8K5n/Dreamlike-Uw-U-cosplay-Ganyu-Succubus-Genshin-Impact-1-compress14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41986",
        "pageSeq": 41986
    },
    {
        "IDcode": 41987,
        "title": "Tiny Asa アサ - Psylocke (Marvel Rivals)",
        "cover": "https://i.ibb.co/bj7ZsYkJ/01-IMG-1275-compress44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41987",
        "pageSeq": 41987
    },
    {
        "IDcode": 41988,
        "title": "Arty Huang - Nun Eula (Genshin Impact)",
        "cover": "https://i.ibb.co/67XfwZsK/01-DSC00184518e5734eacdafd5-compress7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41988",
        "pageSeq": 41988
    },
    {
        "IDcode": 41989,
        "title": "九言 Jiu Yan - Disobedient Sister 不听话的妹妹",
        "cover": "https://i.ibb.co/60H1v8xv/Jiu-Yan-Disobedient-Sister-1-compress58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41989",
        "pageSeq": 41989
    },
    {
        "IDcode": 41990,
        "title": "Meiilyn - Bunny Rem (Re Zero)",
        "cover": "https://i.ibb.co/BpKWsMH/Meiilyn-yuumeilyn-cosplay-Rem-Re-Zero-1-compress30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41990",
        "pageSeq": 41990
    },
    {
        "IDcode": 41991,
        "title": "Goosaphone - Byleth (Fire Emblem)",
        "cover": "https://i.ibb.co/zWL3Cd3d/01-100001230.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41991",
        "pageSeq": 41991
    },
    {
        "IDcode": 41992,
        "title": "Pattie - Chun li (Street Fighter)",
        "cover": "https://i.ibb.co/zWhY6Lms/01-Pattie-Chun-li-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41992",
        "pageSeq": 41992
    },
    {
        "IDcode": 41993,
        "title": "慕慕Momo - Yelan (Genshin Impact)",
        "cover": "https://i.ibb.co/wZJNh1hF/01-Momo-Violet-Allure-1-compress20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41993",
        "pageSeq": 41993
    },
    {
        "IDcode": 41994,
        "title": "Arty Huang - Cheshire (Azur Lane)",
        "cover": "https://i.ibb.co/R4T49cMQ/01-Arty-Cheshire-1-compress82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41994",
        "pageSeq": 41994
    },
    {
        "IDcode": 41995,
        "title": "Scarlett Sirene - Shinobu (Genshin Impact)",
        "cover": "https://i.ibb.co/jZRzTgsJ/01-Shinobu-1-compress52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41995",
        "pageSeq": 41995
    },
    {
        "IDcode": 41996,
        "title": "Jean Wan Wan - Rapi (NIKKE)",
        "cover": "https://i.ibb.co/Nz02Smp/01-Jean-Wan-Wan-Rapi-1-compress12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41996",
        "pageSeq": 41996
    },
    {
        "IDcode": 41997,
        "title": "ZinieQ - Albedo (Overlord)",
        "cover": "https://i.ibb.co/NgQMXQzC/01-Zinie-Q-Albedo-1-compress15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41997",
        "pageSeq": 41997
    },
    {
        "IDcode": 41998,
        "title": "Peachmilky - Frieren lingerie (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/RpDQHQfM/01-frierenlingeriepreview-compress55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41998",
        "pageSeq": 41998
    },
    {
        "IDcode": 41999,
        "title": "Hidori Rose - Princess Leia (Star Wars)",
        "cover": "https://i.ibb.co/vbJhqrR/Princess-Leia-cosplay-Hidori-Rose-00-compress77.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41999",
        "pageSeq": 41999
    },
    {
        "IDcode": 42000,
        "title": "Potato Godzilla - Marie Rose (Dead Or Alive)",
        "cover": "https://i.ibb.co/RG4fDGHC/2024-11-Marie-Rose-Dead-Or-Alive.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42000",
        "pageSeq": 42000
    },
    {
        "IDcode": 42001,
        "title": "日奈娇 Hina Jiao - Hitori Gotoh (Bocchi The Rock)",
        "cover": "https://i.ibb.co/NnK6qyGc/001-compress7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42001",
        "pageSeq": 42001
    },
    {
        "IDcode": 42002,
        "title": "Machi - Casual",
        "cover": "https://i.ibb.co/bMzPbfdC/001-01-compress40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42002",
        "pageSeq": 42002
    },
    {
        "IDcode": 42003,
        "title": "Hologana - Reze (Chainsaw Man)",
        "cover": "https://i.ibb.co/4R7jygMt/hologana-reze-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42003",
        "pageSeq": 42003
    },
    {
        "IDcode": 42004,
        "title": "ZinieQ - Amau Ako (Blue Archive)",
        "cover": "https://i.ibb.co/JW5g9zwx/01-Zinie-Q-Cosplayer-cosplay-Amau-Ako-Blue-Archive-1-compress76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42004",
        "pageSeq": 42004
    },
    {
        "IDcode": 42005,
        "title": "Donnaloli - Misato Katsuragi (Neon Genesis Evangelion)",
        "cover": "https://i.ibb.co/VcMzGjK7/donnaloli-misatokatsuragi-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42005",
        "pageSeq": 42005
    },
    {
        "IDcode": 42006,
        "title": "Tiny Asa アサ - Shinobu Kocho (Kimetsu No Yaiba)",
        "cover": "https://i.ibb.co/xqb0BgYW/Tiny-Asa-tiny-asababy-cosplay-Shinobu-Kocho-Kimetsu-No-Yaiba-1-compress46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42006",
        "pageSeq": 42006
    },
    {
        "IDcode": 42007,
        "title": "Kamelya - Maid Sparkle (Honkai Star Rail)",
        "cover": "https://i.ibb.co/3952Q4YS/001-Kamelya-Maid-Sparkle-1-compress80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42007",
        "pageSeq": 42007
    },
    {
        "IDcode": 42008,
        "title": "Higurashi Rin - Happy Easter Type.B",
        "cover": "https://i.ibb.co/xq75Sf6M/A-0000-compress63.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42008",
        "pageSeq": 42008
    },
    {
        "IDcode": 42009,
        "title": "Yukina - Suzuya Shimakaze (Kantai Collection)",
        "cover": "https://i.ibb.co/xK5jRZXs/001-1-compress84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42009",
        "pageSeq": 42009
    },
    {
        "IDcode": 42010,
        "title": "李佳 - 2B (Nier Automata)",
        "cover": "https://i.ibb.co/fVQWGJPn/01-compress0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42010",
        "pageSeq": 42010
    },
    {
        "IDcode": 42011,
        "title": "Aery Tiefling - Hoshimi Miyabi (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/SDPqTfM1/01-Aery-Tiefling-Hoshimi-Miyabi-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42011",
        "pageSeq": 42011
    },
    {
        "IDcode": 42012,
        "title": "Umeko J - Boa Hancock (One Piece)",
        "cover": "https://i.ibb.co/67MQPFMf/Umeko-J-cosplay-Boa-Hancock-One-Piece-1-compress31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42012",
        "pageSeq": 42012
    },
    {
        "IDcode": 42013,
        "title": "屿鱼Yukako - 凋零月影",
        "cover": "https://i.ibb.co/LdMhGzbm/01-1-compress28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42013",
        "pageSeq": 42013
    },
    {
        "IDcode": 42014,
        "title": "Bunni Lynn - Shego Bikini (Kim Possible)",
        "cover": "https://i.ibb.co/5gBvjDyk/001-Shego-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42014",
        "pageSeq": 42014
    },
    {
        "IDcode": 42015,
        "title": "Okada Yui - Nurse Keqing (Genshin Impact)",
        "cover": "https://i.ibb.co/NgHQ539H/001-Nurse-Keqing-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42015",
        "pageSeq": 42015
    },
    {
        "IDcode": 42016,
        "title": "Shui Miao Aqua - Kafka (Honkai Star Rail)",
        "cover": "https://i.ibb.co/zhgps48v/000.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42016",
        "pageSeq": 42016
    },
    {
        "IDcode": 42017,
        "title": "Jyu San - Princess Zelda BOTW (The Legend Of Zelda)",
        "cover": "https://i.ibb.co/PksqCW5/01-IMG-7626-compress72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42017",
        "pageSeq": 42017
    },
    {
        "IDcode": 42018,
        "title": "Potato Godzilla - Misa Amane (Death Note)",
        "cover": "https://i.ibb.co/Xx2zbW37/01-Potato-Godzilla-Misa-Amane-1-compress30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42018",
        "pageSeq": 42018
    },
    {
        "IDcode": 42019,
        "title": "Shui Miao Aqua - Yae Miko (Genshin Impact)",
        "cover": "https://i.ibb.co/HfhsdpBK/01-Aqua-Yae-Miko-1-compress57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42019",
        "pageSeq": 42019
    },
    {
        "IDcode": 42020,
        "title": "Kayla Erin - Neko Rem (Re Zero)",
        "cover": "https://i.ibb.co/F4D9vR3c/01-Cartoon-Mums-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42020",
        "pageSeq": 42020
    },
    {
        "IDcode": 42021,
        "title": "Sayo Momo - Ronova (Genshin Impact)",
        "cover": "https://i.ibb.co/BKL8n0tS/01-compress39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42021",
        "pageSeq": 42021
    },
    {
        "IDcode": 42022,
        "title": "Hane Ame - Ninth Villager (Elf Village)",
        "cover": "https://i.ibb.co/KccbTmc1/01-0-COVER-compress21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42022",
        "pageSeq": 42022
    },
    {
        "IDcode": 42023,
        "title": "Hane Ame - Yuki (Jigoku Sensei Nube)",
        "cover": "https://i.ibb.co/hFN0nFWD/01-0-COVER-compress32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42023",
        "pageSeq": 42023
    },
    {
        "IDcode": 42024,
        "title": "Hane Ame - Aglaea (Honkai Star Rail)",
        "cover": "https://i.ibb.co/1Y3kqFzb/01-0-COVER-compress22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42024",
        "pageSeq": 42024
    },
    {
        "IDcode": 42025,
        "title": "Daria Flora - 2B (Nier Automata)",
        "cover": "https://i.ibb.co/cXwmVXfM/01-Daria-Flora-2-B-25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42025",
        "pageSeq": 42025
    },
    {
        "IDcode": 42026,
        "title": "lMusicl - Sparkle (Honkai Star Rail)",
        "cover": "https://i.ibb.co/FSJxWwT/01-b57b60b70e1cf22c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42026",
        "pageSeq": 42026
    },
    {
        "IDcode": 42027,
        "title": "Mimsy - Reze (Chainsaw Man)",
        "cover": "https://i.ibb.co/356wY41R/01-Mimsy-Reze-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42027",
        "pageSeq": 42027
    },
    {
        "IDcode": 42028,
        "title": "Win Winry - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/8DXVMP77/01-Frieren-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42028",
        "pageSeq": 42028
    },
    {
        "IDcode": 42029,
        "title": "kokuhui - Codename Cat",
        "cover": "https://i.ibb.co/d0t2hM44/001-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42029",
        "pageSeq": 42029
    },
    {
        "IDcode": 42030,
        "title": "Mik Allen - Luna Snow (Agents of Atlas)",
        "cover": "https://i.ibb.co/TMJV9Cs1/01-6-compress51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42030",
        "pageSeq": 42030
    },
    {
        "IDcode": 42031,
        "title": "屿鱼 Purinpuppy - Sakura 水着 (NIKKE)",
        "cover": "https://i.ibb.co/WvBWZSTV/cover.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42031",
        "pageSeq": 42031
    },
    {
        "IDcode": 42032,
        "title": "Microkitty - Black Cat (Spider-Man)",
        "cover": "https://i.ibb.co/1GJgqXsb/01-black-cat-1-6-Xbe-XKG7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42032",
        "pageSeq": 42032
    },
    {
        "IDcode": 42033,
        "title": "Hackee - Maid Komi (Komi-san)",
        "cover": "https://i.ibb.co/QvVSBRXY/01-Komi-0-compress22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42033",
        "pageSeq": 42033
    },
    {
        "IDcode": 42034,
        "title": "Ringo Mitsuki - Yoruichi Shihoin (Bleach)",
        "cover": "https://i.ibb.co/Qj35wkqf/C106-yoruitijak.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42034",
        "pageSeq": 42034
    },
    {
        "IDcode": 42035,
        "title": "Pyoncos ピオン -  Nicole Demara (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/TM61RGKk/01-Pyoncos-cosplay-Nicole-Demara-Zenless-Zone-Zero-1-compress14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42035",
        "pageSeq": 42035
    },
    {
        "IDcode": 42036,
        "title": "Jyu San - Yennefer (The Witcher)",
        "cover": "https://i.ibb.co/svvk94HS/01-IMG-8113-compress58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42036",
        "pageSeq": 42036
    },
    {
        "IDcode": 42037,
        "title": "Peachy Bell - Yamato (One Piece)",
        "cover": "https://i.ibb.co/YBMDFSmy/01-Yamato-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42037",
        "pageSeq": 42037
    },
    {
        "IDcode": 42038,
        "title": "Neroko - Momo Ayase (DanDaDan)",
        "cover": "https://i.ibb.co/jvnbzrgr/01-poizon.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42038",
        "pageSeq": 42038
    },
    {
        "IDcode": 42039,
        "title": "Luna Aoki - Ada Wong (Resident Evil)",
        "cover": "https://i.ibb.co/yFvNYrhw/01-Ada-Wong-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42039",
        "pageSeq": 42039
    },
    {
        "IDcode": 42040,
        "title": "Kuuko W - Lucy (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/NdHtVjWT/01-Kuuko-W-Lucy-ZZZ-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42040",
        "pageSeq": 42040
    },
    {
        "IDcode": 42041,
        "title": "Hidori Rose - Fubuki (One Punch Men)",
        "cover": "https://i.ibb.co/m5H1nqJz/01-Fubuki-1-compress47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42041",
        "pageSeq": 42041
    },
    {
        "IDcode": 42042,
        "title": "Aery Tiefling - Nico Robin (One Piece)",
        "cover": "https://i.ibb.co/fYW2zGRK/01-Aery-Tiefling-Nico-Robin-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42042",
        "pageSeq": 42042
    },
    {
        "IDcode": 42043,
        "title": "Cutie Kuromi - Makima (Chainsaw Man)",
        "cover": "https://i.ibb.co/m5t3mFNZ/01-Makima-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42043",
        "pageSeq": 42043
    },
    {
        "IDcode": 42044,
        "title": "Okita Rinka - Devil Cat",
        "cover": "https://i.ibb.co/VcbxK2GN/Okita-Rinka-Rinka-Devil-Cat-1-compress5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42044",
        "pageSeq": 42044
    },
    {
        "IDcode": 42045,
        "title": "白銀81 81silver811 - Bunny Girl",
        "cover": "https://i.ibb.co/KxfTWjD8/81-81silver811-Bunny-Girl-01-compress41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42045",
        "pageSeq": 42045
    },
    {
        "IDcode": 42046,
        "title": "Xidaidai 习呆呆 - Marie Rose (Dead or Alive)",
        "cover": "https://i.ibb.co/RpqqCz88/01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42046",
        "pageSeq": 42046
    },
    {
        "IDcode": 42047,
        "title": "Alina Becker - Nami dress (One Piece)",
        "cover": "https://i.ibb.co/fVHsL6Wj/01-1000001058e95d26b457f86ddf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42047",
        "pageSeq": 42047
    },
    {
        "IDcode": 42048,
        "title": "Potato Godzilla - Grok Ani",
        "cover": "https://i.ibb.co/fddT9ZTj/01-Grok-ANI1-compress73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42048",
        "pageSeq": 42048
    },
    {
        "IDcode": 42049,
        "title": "近衛しおり Shiori Konoe - yousei yunde (Goblin Slayer)",
        "cover": "https://i.ibb.co/7tHB8rVh/001-001-compress86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42049",
        "pageSeq": 42049
    },
    {
        "IDcode": 42050,
        "title": "Ringo Mitsuki - Jane Doe (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/CsnDPMjz/001-zye-jak.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42050",
        "pageSeq": 42050
    },
    {
        "IDcode": 42051,
        "title": "Kyutty - Burnice (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/j90GMW1T/01-Burnice-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42051",
        "pageSeq": 42051
    },
    {
        "IDcode": 42052,
        "title": "Sexylil069 - Sagiri (Eromanga sensei)",
        "cover": "https://i.ibb.co/vvmMYjyJ/01-Sagiri-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42052",
        "pageSeq": 42052
    },
    {
        "IDcode": 42053,
        "title": "Fantasy Factory 小丁 - School 委員長",
        "cover": "https://i.ibb.co/Kj2DRnNC/Fantasy-Factory-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42053",
        "pageSeq": 42053
    },
    {
        "IDcode": 42054,
        "title": "Hidori Rose - Gwen (Total Drama Island)",
        "cover": "https://i.ibb.co/LXKJ5qgP/02-Hidori-Rose-Gwen-2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42054",
        "pageSeq": 42054
    },
    {
        "IDcode": 42055,
        "title": "Anna Aifert - 2B White Sweater (Nier Automata)",
        "cover": "https://i.ibb.co/4wWwscqW/01-fansly-0xmw8yothj0q.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42055",
        "pageSeq": 42055
    },
    {
        "IDcode": 42056,
        "title": "Ravvcoser - Shinobu Kochō (Kimetsu No Yaiba)",
        "cover": "https://i.ibb.co/5WF59Tk6/01-005-509364034080878592.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42056",
        "pageSeq": 42056
    },
    {
        "IDcode": 42057,
        "title": "Potato Godzilla - Pure and Innocent (Sep 2025)",
        "cover": "https://i.ibb.co/r2MLrK5y/Potato-Godzilla-Pure-and-Innocent-Only-Fans-Nude-Sep-2025-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42057",
        "pageSeq": 42057
    },
    {
        "IDcode": 42058,
        "title": "Pyoncos ピオン - Robin (Honkai Star Rail)",
        "cover": "https://i.ibb.co/4wS8x7wF/Pyoncos-cosplay-Firefly-Honkai-Star-Rail-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42058",
        "pageSeq": 42058
    },
    {
        "IDcode": 42059,
        "title": "Potato Godzilla - OnlyFans Nude Sep 1-30, 2025",
        "cover": "https://i.ibb.co/TMY9cSp0/Potato-Godzilla-Only-Fans-Nude-Sep-1-30-2025-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42059",
        "pageSeq": 42059
    },
    {
        "IDcode": 42060,
        "title": "Sally Dorasnow - Marine (Hololive)",
        "cover": "https://i.ibb.co/mFtw6hJj/01-Marine-1-compress32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42060",
        "pageSeq": 42060
    },
    {
        "IDcode": 42061,
        "title": "鹿八岁baby LuLu - Sibuna (House Of Anubis)",
        "cover": "https://i.ibb.co/FbWnKscX/01-baby-baby-Lu-Lu-Sibuna-1-compress24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42061",
        "pageSeq": 42061
    },
    {
        "IDcode": 42062,
        "title": "Anastasia Komori - Gwen (Spider-Man)",
        "cover": "https://i.ibb.co/Cp70mr0T/01-Gwen-F2fc81296a3e26a03a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42062",
        "pageSeq": 42062
    },
    {
        "IDcode": 42063,
        "title": "PoppaChan - Nozoemon (Doraemon)",
        "cover": "https://i.ibb.co/1tvrMKTj/01-Nozoemon-Poppa-Chan1-compress38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42063",
        "pageSeq": 42063
    },
    {
        "IDcode": 42064,
        "title": "沖田凜花 Okita Rinka - Blue Rabbit",
        "cover": "https://i.ibb.co/zVqYKgwY/Okita-Rinka-Rinka-Blue-Rabbit-1-compress9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42064",
        "pageSeq": 42064
    },
    {
        "IDcode": 42065,
        "title": "Tiny Asa - 菲伦 (Pictures)",
        "cover": "https://i.ibb.co/0p6kxWFZ/01-compress21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42065",
        "pageSeq": 42065
    },
    {
        "IDcode": 42066,
        "title": "露Mercurius_i - Bremerton (Azur Lane)",
        "cover": "https://i.ibb.co/fd3wwZC1/01-compress93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42066",
        "pageSeq": 42066
    },
    {
        "IDcode": 42067,
        "title": "Fae Macaron - Rosanna (NIKKE)",
        "cover": "https://i.ibb.co/sp2bzcFc/01-482080287-487439644438237-1247940713793677372-n.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42067",
        "pageSeq": 42067
    }
];
