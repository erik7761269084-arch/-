// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 42170,
        "title": "Alexandra Bodler - Kokomi (Genshin Impact)",
        "cover": "https://i.ibb.co/yBKJ0LhP/01-Alexandra-Bodler-Kokomi-1-compress82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42170",
        "pageSeq": 42170
    },
    {
        "IDcode": 42171,
        "title": "lMusicl - Fern (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/d01P5pJr/01-Fern-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42171",
        "pageSeq": 42171
    },
    {
        "IDcode": 42172,
        "title": "Koyokoyaki - Maria Takayama and KAngel (Needy Streamer Overload)",
        "cover": "https://i.ibb.co/Lh81Xpmc/01-Kyokoyaki-cosplay-KAngel-1-compress38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42172",
        "pageSeq": 42172
    },
    {
        "IDcode": 42173,
        "title": "Lada Lyumos - Princess Peach (Mario Bros)",
        "cover": "https://i.ibb.co/spJjM9tj/01-DSC01841450c334366aa432e-compress23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42173",
        "pageSeq": 42173
    },
    {
        "IDcode": 42174,
        "title": "Umeko J - Elegg (NIKKE)",
        "cover": "https://i.ibb.co/Df60W6JS/01-Elegg-NIKKE-compress40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42174",
        "pageSeq": 42174
    },
    {
        "IDcode": 42175,
        "title": "Thicci Velvet - Seiko Ayase (Dan Da Dan)",
        "cover": "https://i.ibb.co/1fdNv6Cs/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42175",
        "pageSeq": 42175
    },
    {
        "IDcode": 42176,
        "title": "Khainsaw - Raven (Teen Titans)",
        "cover": "https://i.ibb.co/cKcCqbYQ/01-1-compress8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42176",
        "pageSeq": 42176
    },
    {
        "IDcode": 42177,
        "title": "Uri - Nicole (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/BVVY8xqF/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42177",
        "pageSeq": 42177
    },
    {
        "IDcode": 42178,
        "title": "Ayame - Alya / Alisa Mikhailovna Kujou (Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san)",
        "cover": "https://i.ibb.co/mFR6RMjf/Ayame-Base-cosplay-Alya-Alya-Sometimes-Hides-Her-Feelings-in-Russian-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42178",
        "pageSeq": 42178
    },
    {
        "IDcode": 42179,
        "title": "Potato Godzilla - Black Bikini",
        "cover": "https://i.ibb.co/tM5s5F43/01-Potato-Godzilla-Black-Bikini-Only-Fans-Nude-Jul-2025-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42179",
        "pageSeq": 42179
    },
    {
        "IDcode": 42180,
        "title": "Tiny Asa アサ - Ani Grok",
        "cover": "https://i.ibb.co/dNDgs7j/Tiny-Asa-tiny-asababy-cosplay-Ani-Grok-1-compress39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42180",
        "pageSeq": 42180
    },
    {
        "IDcode": 42181,
        "title": "Sladkoslava - Shadowheart (Baldur's Gate 3)",
        "cover": "https://i.ibb.co/xtbYmY2X/01-1-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42181",
        "pageSeq": 42181
    },
    {
        "IDcode": 42182,
        "title": "Mimsy - Power Girl",
        "cover": "https://i.ibb.co/Tx5gHNvZ/01-Mimsy-Power-Girl-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42182",
        "pageSeq": 42182
    },
    {
        "IDcode": 42183,
        "title": "Puypuy - Kallen (Code Geass)",
        "cover": "https://i.ibb.co/spmRGJ0x/01-Kallen-1-compress93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42183",
        "pageSeq": 42183
    },
    {
        "IDcode": 42184,
        "title": "Mik Allen & Alcololi & Donnaloli - Rumi Kang & Mira & Zoey (Kpop Demon Hunters)",
        "cover": "https://i.ibb.co/RGH8m8BS/01-19-compress89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42184",
        "pageSeq": 42184
    },
    {
        "IDcode": 42185,
        "title": "Anari.exe - Emma Frost (X-Men)",
        "cover": "https://i.ibb.co/5XLttJW7/01-1-compress22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42185",
        "pageSeq": 42185
    },
    {
        "IDcode": 42186,
        "title": "Atelier Roro - The Bride",
        "cover": "https://i.ibb.co/hFDzLPSL/IMG-1385-compress79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42186",
        "pageSeq": 42186
    },
    {
        "IDcode": 42187,
        "title": "Sweetieline - Super Sonico",
        "cover": "https://i.ibb.co/gbcpkq1y/01-1-compress59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42187",
        "pageSeq": 42187
    },
    {
        "IDcode": 42188,
        "title": "PoppaChan - Ubel (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/XfnWYnSd/001-Ubel-Poppa-Chan-1-compress47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42188",
        "pageSeq": 42188
    },
    {
        "IDcode": 42189,
        "title": "Arty Huang 亚缇 - Surtr (Arknights)",
        "cover": "https://i.ibb.co/B5VrYffT/Arty-Huang-Arty-cosplay-Surtr-Arknights-1-compress6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42189",
        "pageSeq": 42189
    },
    {
        "IDcode": 42190,
        "title": "Myuumarie - Briar (League Of Legends)",
        "cover": "https://i.ibb.co/mVt1LS3b/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42190",
        "pageSeq": 42190
    },
    {
        "IDcode": 42191,
        "title": "Atelier Roro - Cynthia (Pokemon)",
        "cover": "https://i.ibb.co/XZdCFqXw/01-Shirona-Cynthia-01-compress85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42191",
        "pageSeq": 42191
    },
    {
        "IDcode": 42192,
        "title": "雯妹不讲道理 – 蓝粉",
        "cover": "https://i.ibb.co/qhFMKdx/DSC-8946-compress44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42192",
        "pageSeq": 42192
    },
    {
        "IDcode": 42193,
        "title": "Shui Miao Aqua - Tifa Lockhart (Final Fantasy)",
        "cover": "https://i.ibb.co/spBgMBY0/000-Cover-compress31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42193",
        "pageSeq": 42193
    },
    {
        "IDcode": 42194,
        "title": "少女映画 Shojo eiga - Dark Magician (Yu-Gi-Oh)",
        "cover": "https://i.ibb.co/Q3JnJLSq/Shojo-eiga-cosplay-Dark-Magician-Yu-Gi-Oh-1-compress15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42194",
        "pageSeq": 42194
    },
    {
        "IDcode": 42195,
        "title": "Tiny Asa アサ - Mitsuri Kanroji (Kimetsu No Yaiba)",
        "cover": "https://i.ibb.co/PssRBvK8/01-big-b2fd91059c-compress22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42195",
        "pageSeq": 42195
    },
    {
        "IDcode": 42196,
        "title": "Machi - Onsen",
        "cover": "https://i.ibb.co/7JJfgSwf/01-06-compress8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42196",
        "pageSeq": 42196
    },
    {
        "IDcode": 42197,
        "title": "Daria Hime - Maid 2B (Nier Automata)",
        "cover": "https://i.ibb.co/1Yhk92Jp/02-Maid-2-B-2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42197",
        "pageSeq": 42197
    },
    {
        "IDcode": 42198,
        "title": "Catzilla - Ada Wong (Resident Evil)",
        "cover": "https://i.ibb.co/M5SL61yt/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42198",
        "pageSeq": 42198
    },
    {
        "IDcode": 42199,
        "title": "Kirbee - Yor (Spy X Family)",
        "cover": "https://i.ibb.co/W49hmyvh/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42199",
        "pageSeq": 42199
    },
    {
        "IDcode": 42200,
        "title": "Puypuy - Abigail (Fate Grand Order)",
        "cover": "https://i.ibb.co/Z6vzxFBq/001-1-compress8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42200",
        "pageSeq": 42200
    },
    {
        "IDcode": 42202,
        "title": "Xenon - Makima Nurse (Chainsaw Man)",
        "cover": "https://i.ibb.co/8nFPXgrB/01-xe-17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42202",
        "pageSeq": 42202
    },
    {
        "IDcode": 42203,
        "title": "Rowsvee - Mona (Genshin Impact)",
        "cover": "https://i.ibb.co/MdJyFyK/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42203",
        "pageSeq": 42203
    },
    {
        "IDcode": 42204,
        "title": "Tniwe - Princess Zelda Lingerie (The Legend Of Zelda)",
        "cover": "https://i.ibb.co/G30Y4g1t/01-TNI12-compress73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42204",
        "pageSeq": 42204
    },
    {
        "IDcode": 42205,
        "title": "Chen Xiaohua 陈小花 - SPA热油按摩内购版",
        "cover": "https://i.ibb.co/N2d0dSvz/XR-Uncensored-Chen-Xiaohua-SPA-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42205",
        "pageSeq": 42205
    },
    {
        "IDcode": 42206,
        "title": "Ayame Base - Momo Ayase (DanDaDan)",
        "cover": "https://i.ibb.co/wZfyBpTV/01-Momo-Ayase-12-compress42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42206",
        "pageSeq": 42206
    },
    {
        "IDcode": 42207,
        "title": "Asami Gate - Fubuki (One Punch Man)",
        "cover": "https://i.ibb.co/7xFQBqLN/01-1-compress78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42207",
        "pageSeq": 42207
    },
    {
        "IDcode": 42208,
        "title": "Misaki Sai - Duchess (Elden Ring)",
        "cover": "https://i.ibb.co/Qj1nRhyn/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42208",
        "pageSeq": 42208
    },
    {
        "IDcode": 42209,
        "title": "布丁大法 - Kobeni (Chainsaw Man)",
        "cover": "https://i.ibb.co/67yCRZbT/01-4-IMG-4565.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42209",
        "pageSeq": 42209
    },
    {
        "IDcode": 42210,
        "title": "Maria Desu - Magia Baiser (Mahou Shoujo ni Akogarete)",
        "cover": "https://i.ibb.co/q3jXvgN2/01-1-compress65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42210",
        "pageSeq": 42210
    },
    {
        "IDcode": 42211,
        "title": "Kovicki - Nazuna Nanakusa Maid (Yufukashi No Uta)",
        "cover": "https://i.ibb.co/bMmV4QcY/01-Kovicki-Nazuna-Nanakusa-Maid-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42211",
        "pageSeq": 42211
    },
    {
        "IDcode": 42212,
        "title": "Mik Allen & Donnaloli - Fubuki & Tatsumaki (One Punch Man)",
        "cover": "https://i.ibb.co/C5zcWbJW/donnaloli-fubukitatsumaki-001-compress82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42212",
        "pageSeq": 42212
    },
    {
        "IDcode": 42213,
        "title": "Hidori Rose - Nico Robin (One Piece)",
        "cover": "https://i.ibb.co/SD1C7b4L/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42213",
        "pageSeq": 42213
    },
    {
        "IDcode": 42214,
        "title": "水淼aqua Shui Miao Aqua - Yelan (Genshin Impact)",
        "cover": "https://i.ibb.co/4Zb8NQmf/01-aqua-cosplay-Yelan-Genshin-Impact-1-compress3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42214",
        "pageSeq": 42214
    },
    {
        "IDcode": 42215,
        "title": "Jean Wanwan - Rin lingerie (Fate Stay Night)",
        "cover": "https://i.ibb.co/VGgfy9R/3-U6-A1698-Edit2a1d97ec4acf55f0-compress9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42215",
        "pageSeq": 42215
    },
    {
        "IDcode": 42216,
        "title": "胡桃猫Kurumineko - Swimming",
        "cover": "https://i.ibb.co/FqLSNQQ9/001-Kurumineko-Swimming-1-compress1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42216",
        "pageSeq": 42216
    },
    {
        "IDcode": 42217,
        "title": "Saku - Elegg (NIKKE)",
        "cover": "https://i.ibb.co/Mk09p61r/01-NSE-1-compress85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42217",
        "pageSeq": 42217
    },
    {
        "IDcode": 42218,
        "title": "Ayame Base - Ryuuge Kisaki (Blue Archive)",
        "cover": "https://i.ibb.co/k6KB0rXL/01-Ayame-Base-Ryuuge-Kisaki-1-compress22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42218",
        "pageSeq": 42218
    },
    {
        "IDcode": 42219,
        "title": "懒懒睡不醒 - Klee (Genshin Impact)",
        "cover": "https://i.ibb.co/99Y1R8tH/01-19-compress87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42219",
        "pageSeq": 42219
    },
    {
        "IDcode": 42220,
        "title": "上杉绘梨落 - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/hFf3qDCP/01-1-compress4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42220",
        "pageSeq": 42220
    },
    {
        "IDcode": 42221,
        "title": "Sladkoslava - Shani (The Witcher)",
        "cover": "https://i.ibb.co/B5fbWF4b/01-1-compress67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42221",
        "pageSeq": 42221
    },
    {
        "IDcode": 42222,
        "title": "Hackee - Sparkle (Honkai Star Rail)",
        "cover": "https://i.ibb.co/tMW5LBjS/01-1-compress29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42222",
        "pageSeq": 42222
    },
    {
        "IDcode": 42223,
        "title": "Kosucchi - Yoshika (Strike Witches)",
        "cover": "https://i.ibb.co/x8G60sym/001-compress32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42223",
        "pageSeq": 42223
    },
    {
        "IDcode": 42224,
        "title": "Comonun - Privaty (NIKKE)",
        "cover": "https://i.ibb.co/VYmXrQz8/001-001-2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42224",
        "pageSeq": 42224
    },
    {
        "IDcode": 42225,
        "title": "Potato Godzilla - Reze (Chainsaw Man)",
        "cover": "https://i.ibb.co/MkFGYVp8/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42225",
        "pageSeq": 42225
    },
    {
        "IDcode": 42226,
        "title": "Tiny Asa - Mihara (NIKKE)",
        "cover": "https://i.ibb.co/V09nHxxx/Mihara-full-outfit-01-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42226",
        "pageSeq": 42226
    },
    {
        "IDcode": 42227,
        "title": "Zyra秋 - Raikou (Fate Grand Order)",
        "cover": "https://i.ibb.co/jcLrf1s/001-compress26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42227",
        "pageSeq": 42227
    },
    {
        "IDcode": 42228,
        "title": "Maria Desu - Ochako (Boku no Hero)",
        "cover": "https://i.ibb.co/7tRB497D/1-compress41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42228",
        "pageSeq": 42228
    },
    {
        "IDcode": 42229,
        "title": "小瑶幺幺 xiaoyaoyao - Bailuu (HonkaiStar Rail)",
        "cover": "https://i.ibb.co/SDWmHsZ9/xiaoyaoyaoyao12-cosplay-Bailu-Honkai-Star-Rail-1-compress49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42229",
        "pageSeq": 42229
    },
    {
        "IDcode": 42230,
        "title": "Kovicki - Stocking bikini (Panty and Stocking with Garterbelt)",
        "cover": "https://i.ibb.co/spD8VZL0/819634540547948544.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42230",
        "pageSeq": 42230
    },
    {
        "IDcode": 42231,
        "title": "Neyrodesu - Queen Marika (Elden Ring)",
        "cover": "https://i.ibb.co/21kS58Px/03-3-compress20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42231",
        "pageSeq": 42231
    },
    {
        "IDcode": 42232,
        "title": "Tiny Asa アサ - Dorothy (NIKKE)",
        "cover": "https://i.ibb.co/5WXgSLb3/01-Tiny-Asa-66-compress33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42232",
        "pageSeq": 42232
    },
    {
        "IDcode": 42233,
        "title": "Mae The Way - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/sJsvY2Mz/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42233",
        "pageSeq": 42233
    },
    {
        "IDcode": 42234,
        "title": "Alice Delish - Cowgirl",
        "cover": "https://i.ibb.co/C3F2VRgj/01-Alice-Delish-Cow-Set-2-10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42234",
        "pageSeq": 42234
    },
    {
        "IDcode": 42235,
        "title": "Eroticneko - Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://i.ibb.co/ynS9bLKx/01-1-compress81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42235",
        "pageSeq": 42235
    },
    {
        "IDcode": 42236,
        "title": "Agos Ashford - Firekeeper (Dark Souls)",
        "cover": "https://i.ibb.co/pB7FmqGF/01-1-compress44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42236",
        "pageSeq": 42236
    },
    {
        "IDcode": 42237,
        "title": "Arty Huang - Firefly (HonkaiStar Rail)",
        "cover": "https://i.ibb.co/Y7LMgNQb/Firefly-Honkai-Star-Rail-10-compress56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42237",
        "pageSeq": 42237
    },
    {
        "IDcode": 42238,
        "title": "Potato Godzilla - Eve 2B (Stellar Blade - Nier Automata)",
        "cover": "https://i.ibb.co/qMf1WWjn/01-Potato-Godzilla-Eve-2-B-Dress-Stellar-Blade-1-compress86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42238",
        "pageSeq": 42238
    },
    {
        "IDcode": 42239,
        "title": "BakaChi - Ryuko gym (Kill la Kill)",
        "cover": "https://i.ibb.co/wr2KJwqR/01-1-compress23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42239",
        "pageSeq": 42239
    },
    {
        "IDcode": 42240,
        "title": "Xidaidai 习呆呆 - Cipher (Honkai Star Rail)",
        "cover": "https://i.ibb.co/dwTqGNtw/01-2-IMG-3433.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42240",
        "pageSeq": 42240
    },
    {
        "IDcode": 42241,
        "title": "Yoshinobi - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://i.ibb.co/QFX4c3Cc/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42241",
        "pageSeq": 42241
    },
    {
        "IDcode": 42242,
        "title": "Catzilla - Rei (Neon Genesis Evangelion)",
        "cover": "https://i.ibb.co/rKQMwWbz/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42242",
        "pageSeq": 42242
    },
    {
        "IDcode": 42243,
        "title": "Lovelyspacekitten - Briar (League of Legends)",
        "cover": "https://i.ibb.co/V8rFySm/01-BRIAR-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42243",
        "pageSeq": 42243
    },
    {
        "IDcode": 42244,
        "title": "Cyberkitty - Ubel (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/fzffy2QG/01-Ubel-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42244",
        "pageSeq": 42244
    },
    {
        "IDcode": 42245,
        "title": "Lada Lyumos - Shani (The Witcher)",
        "cover": "https://i.ibb.co/0y4MxYk5/001-1-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42245",
        "pageSeq": 42245
    },
    {
        "IDcode": 42246,
        "title": "小丁 Fantasy Factory - Fern (Sousou no Frieren)",
        "cover": "https://i.ibb.co/673fd9q9/01-Xiao-Ding-cosplay-Fern-Sousou-no-Frieren-1-compress68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42246",
        "pageSeq": 42246
    },
    {
        "IDcode": 42247,
        "title": "Xidaidai - Santa",
        "cover": "https://i.ibb.co/xq7CpzLx/01-01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42247",
        "pageSeq": 42247
    },
    {
        "IDcode": 42248,
        "title": "Hidori Rose - Nico Robin (One Piece)",
        "cover": "https://i.ibb.co/SD1C7b4L/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42248",
        "pageSeq": 42248
    },
    {
        "IDcode": 42249,
        "title": "Yiko湿润兔 Niantutu - Abnormal Classroom",
        "cover": "https://i.ibb.co/RG4CGFMk/001-5-FAE4249-3757-42-F9-BD7-B-AB41-E39-A1-D91-compress78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42249",
        "pageSeq": 42249
    },
    {
        "IDcode": 42250,
        "title": "Maria Desu - Shizuku (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://i.ibb.co/MDmhJ20B/01-1-compress7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42250",
        "pageSeq": 42250
    },
    {
        "IDcode": 42251,
        "title": "前野太太 - Amagi (Azur Lane)",
        "cover": "https://i.ibb.co/FkbV9x4C/01-compress33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42251",
        "pageSeq": 42251
    },
    {
        "IDcode": 42252,
        "title": "Lada Lyumos - Mai Shiranui (King Of Fighter)",
        "cover": "https://i.ibb.co/BKdyQQr1/IMG-5879-KOPIYffdfca49537334de-compress34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42252",
        "pageSeq": 42252
    },
    {
        "IDcode": 42253,
        "title": "Ayame - Gawr Gura Swimsuit (Hololive)",
        "cover": "https://i.ibb.co/5WX4mXR4/Ayame-Base-cosplay-Gawr-Gura-Swimsuit-Hololive-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42253",
        "pageSeq": 42253
    },
    {
        "IDcode": 42254,
        "title": "白莉爱吃巧克力 BLACQKL - Kanao Tsuyuri (Kimetsu No Yaiba)",
        "cover": "https://i.ibb.co/m518Jg6N/001-compress6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42254",
        "pageSeq": 42254
    },
    {
        "IDcode": 42255,
        "title": "Okita Rinka - Tiger Girlfriend",
        "cover": "https://i.ibb.co/TBqGkmzN/01-Okita-Rinka-Rinka-Tiger-Girlfriend-1-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42255",
        "pageSeq": 42255
    },
    {
        "IDcode": 42256,
        "title": "Ayame - Tokoyami Towa (Hololive)",
        "cover": "https://i.ibb.co/C563rdY5/Ayame-Base-cosplay-Tokoyami-Towa-Hololive-1-compress44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42256",
        "pageSeq": 42256
    },
    {
        "IDcode": 42257,
        "title": "Potato Godzilla - OnlyFans Nude Nov 1-30, 2025",
        "cover": "https://i.ibb.co/xSD305nh/Potato-Godzilla-Only-Fans-Nude-Nov-1-30-2025-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42257",
        "pageSeq": 42257
    },
    {
        "IDcode": 42258,
        "title": "Velvet Valerina - Sonic",
        "cover": "https://i.ibb.co/sp3RzB53/01-Velvetvalerina-Patreon-Cupcake-Sonic-Photos-13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42258",
        "pageSeq": 42258
    },
    {
        "IDcode": 42259,
        "title": "Demon Mika- Mavis Dracula (Hotel Transilvania)",
        "cover": "https://i.ibb.co/CpGNKCW4/01-2d0b6f23-ac81-4a0e-82b2-7a4e5d516cdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42259",
        "pageSeq": 42259
    },
    {
        "IDcode": 42260,
        "title": "Joyce - Eula (Genshin Impact)",
        "cover": "https://i.ibb.co/1GjTmyR1/01-IMG-20250115-174219-350.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42260",
        "pageSeq": 42260
    },
    {
        "IDcode": 42261,
        "title": "Lada Lyumos - Marin Kitawaga (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://i.ibb.co/VWD2nV2t/01-0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42261",
        "pageSeq": 42261
    },
    {
        "IDcode": 42262,
        "title": "Tokar 浵卡 - Ubel (Sousou no Frieren)",
        "cover": "https://i.ibb.co/6cPy3g8F/Tokar-Ubel-Sousou-no-Frieren-001-compress27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42262",
        "pageSeq": 42262
    },
    {
        "IDcode": 42263,
        "title": "Akisoso秋楚楚 - NO.23 -粉色透明女仆",
        "cover": "https://telegra.ph/file/541d9e182a6f14ccba9aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42263",
        "pageSeq": 42263
    },
    {
        "IDcode": 42264,
        "title": "Akisoso秋楚楚 - NO.22 死库水",
        "cover": "https://telegra.ph/file/a9e124e4cad2c43c4e928.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42264",
        "pageSeq": 42264
    },
    {
        "IDcode": 42265,
        "title": "六味帝皇酱 - 废墟JK [52P]",
        "cover": "https://telegra.ph/file/cc949276c01f66c9865ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42265",
        "pageSeq": 42265
    },
    {
        "IDcode": 42266,
        "title": "六味帝皇酱 - 樱花女友 [53P]",
        "cover": "https://telegra.ph/file/bfb8dbba9661bbfab247f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42266",
        "pageSeq": 42266
    },
    {
        "IDcode": 42267,
        "title": "六味帝皇酱 - 幼稚园随拍[53P]",
        "cover": "https://telegra.ph/file/15ce2ef5a4b4ab06246ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42267",
        "pageSeq": 42267
    },
    {
        "IDcode": 42268,
        "title": "六味帝皇酱 - 粉丝福利 [6P]",
        "cover": "https://telegra.ph/file/61539acbaca85c9fccb7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42268",
        "pageSeq": 42268
    },
    {
        "IDcode": 42269,
        "title": "[BLUECAKE] Son Ye-Eun (손예은) 2B RED [62P]",
        "cover": "https://telegra.ph/file/78945a0c61a8cc555507d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42269",
        "pageSeq": 42269
    },
    {
        "IDcode": 42270,
        "title": "XIUREN No.4453 Ai Jing Xiang (艾静香) [48P]",
        "cover": "https://telegra.ph/file/ee9c23f489179b6d80f8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=42270",
        "pageSeq": 42270
    }
];
