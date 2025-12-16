// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 28181,
        "title": "Minas.NO.01",
        "cover": "https://telegra.ph/file/d4ddffaf5c4486cf65730.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28181",
        "pageSeq": 28181
    },
    {
        "IDcode": 28182,
        "title": "白色小奶貓 我们一起來玩吧",
        "cover": "https://telegra.ph/file/9ce81a799fcb738956208.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28182",
        "pageSeq": 28182
    },
    {
        "IDcode": 28183,
        "title": "JVID_Mio-Neighbor sister",
        "cover": "https://telegra.ph/file/b5e4c16372d4a164b0314.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28183",
        "pageSeq": 28183
    },
    {
        "IDcode": 28184,
        "title": "Misaki Suzuki - 幼稚的恋爱",
        "cover": "https://telegra.ph/file/68ca817e4c8f0bc2eaf18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28184",
        "pageSeq": 28184
    },
    {
        "IDcode": 28185,
        "title": "Misaki Suzuki - 欲求不满的她",
        "cover": "https://telegra.ph/file/d0568c1b731c833a11997.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28185",
        "pageSeq": 28185
    },
    {
        "IDcode": 28186,
        "title": "Misaki Suzuki - 援x交友人的LO娘 跨年lo娘 [59P 1V 2.4G]",
        "cover": "https://telegra.ph/file/1d2eadd1373b5dd258a3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28186",
        "pageSeq": 28186
    },
    {
        "IDcode": 28187,
        "title": "MisswarmJ - Platelet-chan [98P11V-646MB]",
        "cover": "https://telegra.ph/file/fefdbe8c5a8c9f84c90d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28187",
        "pageSeq": 28187
    },
    {
        "IDcode": 28188,
        "title": "MisswarmJ - piggy tails j [43P11V-640MB]",
        "cover": "https://telegra.ph/file/9cd37695a5d8cd84df47e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28188",
        "pageSeq": 28188
    },
    {
        "IDcode": 28189,
        "title": "MisswarmJ - Golden J and her kitties Duo and Trio Lewd HD set [57P1V-941MB]",
        "cover": "https://telegra.ph/file/91214e270fb43e1f987f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28189",
        "pageSeq": 28189
    },
    {
        "IDcode": 28190,
        "title": "MissWarmJ-Jill Valentine[27P1V]",
        "cover": "https://telegra.ph/file/9928e5c42f9ae982ee4c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28190",
        "pageSeq": 28190
    },
    {
        "IDcode": 28191,
        "title": "MissWarmJ-2B[64P]",
        "cover": "https://telegra.ph/file/4262b24f591dbb50f97fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28191",
        "pageSeq": 28191
    },
    {
        "IDcode": 28192,
        "title": "MissWarmJ-Bonus Step sis OF set[25P5V]",
        "cover": "https://telegra.ph/file/61f44a94631c5398d30a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28192",
        "pageSeq": 28192
    },
    {
        "IDcode": 28193,
        "title": "MissWarmJ-Bath Pics[29P2V1GIF]",
        "cover": "https://telegra.ph/file/4eb0d4da60d5bbfdc4ef9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28193",
        "pageSeq": 28193
    },
    {
        "IDcode": 28194,
        "title": "MissWarmJ-2020 Free New Year Set! 圣诞[26P]",
        "cover": "https://telegra.ph/file/2637a30980ad0a5517091.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28194",
        "pageSeq": 28194
    },
    {
        "IDcode": 28195,
        "title": "MissWarmJ-all booty  foot[20P2V]",
        "cover": "https://telegra.ph/file/b7579a5ed749d49cf1d0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28195",
        "pageSeq": 28195
    },
    {
        "IDcode": 28196,
        "title": "MissWarmJ-Bat 2B[37P3V]",
        "cover": "https://telegra.ph/file/8fd2e2adfd908a036b540.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28196",
        "pageSeq": 28196
    },
    {
        "IDcode": 28197,
        "title": "MissWarmJ-Mash Yoga[39P]",
        "cover": "https://telegra.ph/file/7a22b404ed93859a70cc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28197",
        "pageSeq": 28197
    },
    {
        "IDcode": 28198,
        "title": "Momoko葵葵-狂三 [20P]",
        "cover": "https://telegra.ph/file/f685f4fc33b0371224c23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28198",
        "pageSeq": 28198
    },
    {
        "IDcode": 28199,
        "title": "Momoko葵葵-加藤惠 [20P]",
        "cover": "https://telegra.ph/file/5d9db4307bcfc0ecb796f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28199",
        "pageSeq": 28199
    },
    {
        "IDcode": 28200,
        "title": "Momoko葵葵-杨贵妃 [12P]",
        "cover": "https://telegra.ph/file/2fafab7c180d95d396ff0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28200",
        "pageSeq": 28200
    },
    {
        "IDcode": 28201,
        "title": "Mona (모나) vs Dame (담) - Relationship - Moon Night Snap - Uncensored",
        "cover": "https://telegra.ph/file/4ba1ca5d6b2f66fafbe43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28201",
        "pageSeq": 28201
    },
    {
        "IDcode": 28202,
        "title": "Mona (모나) & Jucy (쥬시) - Valentine - Moon Night Snap",
        "cover": "https://telegra.ph/file/b617ef9896e8c7305646d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28202",
        "pageSeq": 28202
    },
    {
        "IDcode": 28203,
        "title": "Money冷冷 – 宝衩145P1V1.58GB",
        "cover": "https://telegra.ph/file/d9fc9d0789fd5c3b02e21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28203",
        "pageSeq": 28203
    },
    {
        "IDcode": 28204,
        "title": "Money冷冷 – 小恶魔30P615MB",
        "cover": "https://telegra.ph/file/0e208917ef3afc5132d12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28204",
        "pageSeq": 28204
    },
    {
        "IDcode": 28205,
        "title": "Money冷冷 - 花花网衣 [89P3V-1.93GB]",
        "cover": "https://telegra.ph/file/1de915de048a733bd4dca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28205",
        "pageSeq": 28205
    },
    {
        "IDcode": 28206,
        "title": "Money冷冷 - 恶灵退散女巫 [121P-709MB]",
        "cover": "https://telegra.ph/file/1b51dda60834c8af041ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28206",
        "pageSeq": 28206
    },
    {
        "IDcode": 28207,
        "title": "Money冷冷 酒吞高腰旗袍 [66P1V-5.16GB]",
        "cover": "https://telegra.ph/file/6de50299e20abb2c5ca88.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28207",
        "pageSeq": 28207
    },
    {
        "IDcode": 28208,
        "title": "Money冷冷-高雄旗袍[41P]",
        "cover": "https://telegra.ph/file/e1ed050e4421e1025021a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28208",
        "pageSeq": 28208
    },
    {
        "IDcode": 28209,
        "title": "Money冷冷-索尼子OL[61P]",
        "cover": "https://telegra.ph/file/8cbaabbac234ebd3ea69f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28209",
        "pageSeq": 28209
    },
    {
        "IDcode": 28210,
        "title": "Money冷冷-黑旗袍[54P]",
        "cover": "https://telegra.ph/file/022f7d921d5c595f13d7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28210",
        "pageSeq": 28210
    },
    {
        "IDcode": 28211,
        "title": "Money冷冷 白衬衫",
        "cover": "https://telegra.ph/file/6bbc536eb6739142568bf.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28211",
        "pageSeq": 28211
    },
    {
        "IDcode": 28212,
        "title": "Money冷冷 辉夜姬OL制服",
        "cover": "https://telegra.ph/file/d5d339df586764b8c6637.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28212",
        "pageSeq": 28212
    },
    {
        "IDcode": 28213,
        "title": "Money冷冷 - 辉夜姬巫女 [127P1V-2.21GB]",
        "cover": "https://telegra.ph/file/454cdb53b596a02074683.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28213",
        "pageSeq": 28213
    },
    {
        "IDcode": 28214,
        "title": "Monthly Addielyn - NO.001 June Girlfriend [164P4V-3.08GB]",
        "cover": "https://telegra.ph/file/a72ae57334561e83d8a99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28214",
        "pageSeq": 28214
    },
    {
        "IDcode": 28215,
        "title": "Monthly Addielyn - NO.002 July Morning classes [118P2V-2.63GB]",
        "cover": "https://telegra.ph/file/281f4834b827b62a0ec45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28215",
        "pageSeq": 28215
    },
    {
        "IDcode": 28216,
        "title": "Pure Media Vol.69 Mozzi",
        "cover": "https://telegra.ph/file/605a480f608e522866949.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28216",
        "pageSeq": 28216
    },
    {
        "IDcode": 28217,
        "title": "[Loozy] Mozzi (모찌) – Real Sub + S.Ver [149P+9V-1.61GB]",
        "cover": "https://telegra.ph/file/f36851ae98d5355a1f84a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28217",
        "pageSeq": 28217
    },
    {
        "IDcode": 28218,
        "title": "PURE_VOL 39",
        "cover": "https://telegra.ph/file/c15ad234048a43a0e304d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28218",
        "pageSeq": 28218
    },
    {
        "IDcode": 28219,
        "title": "muaymyb-Onlyfans极品泰国巨乳博主合集[113P241V]",
        "cover": "https://telegra.ph/file/92cbde16746bf6df1a9e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28219",
        "pageSeq": 28219
    },
    {
        "IDcode": 28220,
        "title": "SAINT Photolife - Myu_a_ (뮤아) Vol.3",
        "cover": "https://telegra.ph/file/0b01a4cfac17c6d27a5c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28220",
        "pageSeq": 28220
    },
    {
        "IDcode": 28221,
        "title": "Nagisa-专属秘书[60P]",
        "cover": "https://telegra.ph/file/2658dfc01090a57633f7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28221",
        "pageSeq": 28221
    },
    {
        "IDcode": 28222,
        "title": "Nagisa-物置的女子大生[122P]",
        "cover": "https://telegra.ph/file/96939ff9cba735d4e6881.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28222",
        "pageSeq": 28222
    },
    {
        "IDcode": 28223,
        "title": "nagisa-肉をたくさん食べられる動物[18P]",
        "cover": "https://telegra.ph/file/fbd66b7f4d15c7fd0f452.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28223",
        "pageSeq": 28223
    },
    {
        "IDcode": 28224,
        "title": "nagisa-20200819-白いフォーク水着[21P]",
        "cover": "https://telegra.ph/file/3046a066cfe9401405dec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28224",
        "pageSeq": 28224
    },
    {
        "IDcode": 28225,
        "title": "nagisa-[20191020] 誕生日祝いの無料プラン[18P2V]",
        "cover": "https://telegra.ph/file/66a11134c38975fcc90a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28225",
        "pageSeq": 28225
    },
    {
        "IDcode": 28226,
        "title": "nagisa-透明なセーラー服[13P2V1GIF]",
        "cover": "https://telegra.ph/file/5411fba890bd483a6e164.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28226",
        "pageSeq": 28226
    },
    {
        "IDcode": 28227,
        "title": "nagisa-エロいソニ子[17P2V2GIF]",
        "cover": "https://telegra.ph/file/f14489e8fb05cbff239d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28227",
        "pageSeq": 28227
    },
    {
        "IDcode": 28228,
        "title": "nagisa-主人の言いつけに従う[19P2V]",
        "cover": "https://telegra.ph/file/5f3e5b49740d760befc68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28228",
        "pageSeq": 28228
    },
    {
        "IDcode": 28229,
        "title": "Natsuko_夏夏子 夏记钱庄",
        "cover": "https://telegra.ph/file/e7d329d1fa2bfa83d728e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28229",
        "pageSeq": 28229
    },
    {
        "IDcode": 28230,
        "title": "Natsuko夏夏子 - 男友衬衫",
        "cover": "https://telegra.ph/file/2f643ee32b9eee035429a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28230",
        "pageSeq": 28230
    },
    {
        "IDcode": 28231,
        "title": "Natsuko夏夏子 - NO.002 碧蓝航线 大凤誓约 [24P-195MB]",
        "cover": "https://telegra.ph/file/b8b2eaeb5ce75a3dab8e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28231",
        "pageSeq": 28231
    },
    {
        "IDcode": 28232,
        "title": "Natsuko夏夏子 私房11【Natsuko】Behind the Aura 反差修女 40p＋2分钟MV",
        "cover": "https://telegra.ph/file/55866df7a274a49f64307.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28232",
        "pageSeq": 28232
    },
    {
        "IDcode": 28233,
        "title": "Natsuko夏夏子 私房11【Natsuko】Behind the Aura 反差修女 40p＋2分钟MV",
        "cover": "https://telegra.ph/file/472e66253b43223497377.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28233",
        "pageSeq": 28233
    },
    {
        "IDcode": 28234,
        "title": "[Cos]nayako喵子 - 个人写真02[123P]",
        "cover": "https://telegra.ph/file/b90f362e1e84bf4bb8680.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28234",
        "pageSeq": 28234
    },
    {
        "IDcode": 28235,
        "title": "Neppu ネップ - Rizu-kyun",
        "cover": "https://telegra.ph/file/5497cb2c68b481d5a157e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28235",
        "pageSeq": 28235
    },
    {
        "IDcode": 28236,
        "title": "Neppu - RIAMU YUMEMI",
        "cover": "https://telegra.ph/file/8386f098ebe52d46f9432.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28236",
        "pageSeq": 28236
    },
    {
        "IDcode": 28237,
        "title": "Neppu ネップ – 尺度COS Cerestia",
        "cover": "https://telegra.ph/file/1f3d8afdde5974a9898f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28237",
        "pageSeq": 28237
    },
    {
        "IDcode": 28238,
        "title": "Neppuネップ - TOWA [40P12V-841MB]",
        "cover": "https://telegra.ph/file/ae9f0ceca989f1fd56de9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28238",
        "pageSeq": 28238
    },
    {
        "IDcode": 28239,
        "title": "Neppuネップ - Minato Aqua [49P-525MB]",
        "cover": "https://telegra.ph/file/a1a49d452725becb8c10c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28239",
        "pageSeq": 28239
    },
    {
        "IDcode": 28240,
        "title": "Neppuネップ - Bath JK [27P7V-712MB]",
        "cover": "https://telegra.ph/file/b89f48db444c6239454e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28240",
        "pageSeq": 28240
    },
    {
        "IDcode": 28241,
        "title": "Neppu Pack Yor Forger",
        "cover": "https://telegra.ph/file/b7e7d1883ada223ebe3fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28241",
        "pageSeq": 28241
    },
    {
        "IDcode": 28242,
        "title": "Neppuネップ - Housou Marine [23P-477MB]",
        "cover": "https://telegra.ph/file/13bdc4c309d21911fa39a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28242",
        "pageSeq": 28242
    },
    {
        "IDcode": 28243,
        "title": "Neppu Pack Maid",
        "cover": "https://telegra.ph/file/7faff7f966812dba21a5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28243",
        "pageSeq": 28243
    },
    {
        "IDcode": 28244,
        "title": "[Djawa] Newbom - Loose and Tight Camo+Pink [107P-3GB]",
        "cover": "https://telegra.ph/file/2c5b3f963a35e8464b31d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28244",
        "pageSeq": 28244
    },
    {
        "IDcode": 28245,
        "title": "[BLUECAKE] Black & Red [119P-0.98GB]",
        "cover": "https://telegra.ph/file/e7a5de7047418f5b23a1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28245",
        "pageSeq": 28245
    },
    {
        "IDcode": 28246,
        "title": "Neyrodesu Pack Nezuko",
        "cover": "https://telegra.ph/file/6a5a391cb5fe7a06e8989.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28246",
        "pageSeq": 28246
    },
    {
        "IDcode": 28247,
        "title": "Ninja阿寨寨-赎罪修女[39P]",
        "cover": "https://telegra.ph/file/5b97f188d3fea162cb038.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28247",
        "pageSeq": 28247
    },
    {
        "IDcode": 28248,
        "title": "Ninja阿寨寨-叛忍捕获[43P]",
        "cover": "https://telegra.ph/file/6683989df672dd53792ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28248",
        "pageSeq": 28248
    },
    {
        "IDcode": 28249,
        "title": "Ninja阿寨寨-受虐魅魔[43P]",
        "cover": "https://telegra.ph/file/7701957315511e9777f79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28249",
        "pageSeq": 28249
    },
    {
        "IDcode": 28250,
        "title": "Ninja阿寨寨-潮湿夏日[21P]",
        "cover": "https://telegra.ph/file/86ce47fb0953f7b9f69c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28250",
        "pageSeq": 28250
    },
    {
        "IDcode": 28251,
        "title": "Ninja阿寨寨-肉肉大白兔[34P1V]",
        "cover": "https://legra.ph/file/c0fe4d1f6f9c1b260f344.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28251",
        "pageSeq": 28251
    },
    {
        "IDcode": 28252,
        "title": "Ninja阿寨寨-体育课后[28P]",
        "cover": "https://legra.ph/file/9be8ed7d151e84aa04edc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28252",
        "pageSeq": 28252
    },
    {
        "IDcode": 28253,
        "title": "Ninja阿寨寨-神明巫女[38P]",
        "cover": "https://legra.ph/file/9a623a995b54ba0fd5321.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28253",
        "pageSeq": 28253
    },
    {
        "IDcode": 28254,
        "title": "NinJa阿寨寨-吊带袜1.0、椿[66P]",
        "cover": "https://telegra.ph/file/c72d17164ab8318da848a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28254",
        "pageSeq": 28254
    },
    {
        "IDcode": 28255,
        "title": "NinJa阿寨寨-生徒会长[37P]",
        "cover": "https://telegra.ph/file/9f47016d81c0db396ddd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28255",
        "pageSeq": 28255
    },
    {
        "IDcode": 28256,
        "title": "NinJA阿寨寨 - NO.01 -叛忍捕获轻度SM [43P-223MB]",
        "cover": "https://telegra.ph/file/5f91d391b536c57c05c96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28256",
        "pageSeq": 28256
    },
    {
        "IDcode": 28257,
        "title": "NinJA阿寨寨 - NO.02 赎罪修女 [39P-177MB]",
        "cover": "https://telegra.ph/file/b6193c4a5000f1f9c4d09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28257",
        "pageSeq": 28257
    },
    {
        "IDcode": 28258,
        "title": "NinJA阿寨寨 - NO.03 -潮湿夏日 [21P-206MB]",
        "cover": "https://telegra.ph/file/472bba3bbe0624fcfa4ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28258",
        "pageSeq": 28258
    },
    {
        "IDcode": 28259,
        "title": "NinJA阿寨寨 - NO.04 受虐魅魔",
        "cover": "https://telegra.ph/file/3d2b05b1a155d3a396cfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28259",
        "pageSeq": 28259
    },
    {
        "IDcode": 28260,
        "title": "NinJA阿寨寨 - NO.05 肉肉大白兔 [55P1V-210MB]",
        "cover": "https://telegra.ph/file/0e936a372e1e3cb69f9dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28260",
        "pageSeq": 28260
    },
    {
        "IDcode": 28261,
        "title": "NinJA阿寨寨 - NO.07 体育课后 [28P-75MB]",
        "cover": "https://telegra.ph/file/9284796a5c349727b4353.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28261",
        "pageSeq": 28261
    },
    {
        "IDcode": 28262,
        "title": "NinJA阿寨寨 - NO.08 神明巫女 [38P-333MB]",
        "cover": "https://telegra.ph/file/31b04d6accac29c7bcaae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28262",
        "pageSeq": 28262
    },
    {
        "IDcode": 28263,
        "title": "NinJA阿寨寨 - NO.09 椿 [34P-401MB]",
        "cover": "https://telegra.ph/file/deb162d957cfb2a497da3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28263",
        "pageSeq": 28263
    },
    {
        "IDcode": 28264,
        "title": "NinJA阿寨寨 - NO.10 生徒会长 [37P-404MB]",
        "cover": "https://telegra.ph/file/ba6d589878df9023c7213.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28264",
        "pageSeq": 28264
    },
    {
        "IDcode": 28265,
        "title": "Nyako喵子 - 柴郡旗袍 [48P]",
        "cover": "https://telegra.ph/file/afdd197198e64efe444de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28265",
        "pageSeq": 28265
    },
    {
        "IDcode": 28266,
        "title": "Nyako喵子 – 风纪委员[86P+1V]",
        "cover": "https://telegra.ph/file/b3436324398eff156354a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28266",
        "pageSeq": 28266
    },
    {
        "IDcode": 28267,
        "title": "Nyako喵子 – 火车JK [80P+1V]",
        "cover": "https://telegra.ph/file/1d8d6398e6694fd8df11d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28267",
        "pageSeq": 28267
    },
    {
        "IDcode": 28268,
        "title": "Octokuro-Lady Dimitrescu[21P]",
        "cover": "https://telegra.ph/file/2875d22772d46e2d1bcbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28268",
        "pageSeq": 28268
    },
    {
        "IDcode": 28269,
        "title": "Omimi Pack Kurumi Tokisaki",
        "cover": "https://telegra.ph/file/50a86a562096549e322f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28269",
        "pageSeq": 28269
    },
    {
        "IDcode": 28270,
        "title": "PAKI酱 - 班长 [35P-375MB]",
        "cover": "https://telegra.ph/file/58fd6c225583611eda05f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28270",
        "pageSeq": 28270
    },
    {
        "IDcode": 28271,
        "title": "PAKI酱 - 柴郡 [40P-441MB]",
        "cover": "https://telegra.ph/file/a07d6bc23b7ae787bb191.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28271",
        "pageSeq": 28271
    },
    {
        "IDcode": 28272,
        "title": "[Cos]PAKI酱 - 马萨诸塞 [38P]",
        "cover": "https://telegra.ph/file/94111f34ddf3a6cb3cee6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28272",
        "pageSeq": 28272
    },
    {
        "IDcode": 28273,
        "title": "DJAWA Photo - Parkhaag (박하악) - Private Athletic Class #3",
        "cover": "https://telegra.ph/file/5c64774b8e6b15c2bd9a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28273",
        "pageSeq": 28273
    },
    {
        "IDcode": 28274,
        "title": "Peach milky - NO.022 Marin Kitagawa [21P-28MB]",
        "cover": "https://telegra.ph/file/085d2594463ec603b8570.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28274",
        "pageSeq": 28274
    },
    {
        "IDcode": 28275,
        "title": "Peachmilky - Yae Miko Onsen",
        "cover": "https://telegra.ph/file/df0d82f9836d94df645de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28275",
        "pageSeq": 28275
    },
    {
        "IDcode": 28276,
        "title": "PeachMilky - Lumine Lingerie (Genshin Impact)",
        "cover": "https://telegra.ph/file/6fd253911dd5ce34dcbe0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28276",
        "pageSeq": 28276
    },
    {
        "IDcode": 28277,
        "title": "DJAWA Photo - Jamong - Nurse j 护士[151p 1.4GB]",
        "cover": "https://telegra.ph/file/8ea801d75340ba275889d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28277",
        "pageSeq": 28277
    },
    {
        "IDcode": 28278,
        "title": "DJAWA Photo - Pia (피아) - The Lord of Nightmares in Red",
        "cover": "https://telegra.ph/file/041fddf8b57130ef8fd45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28278",
        "pageSeq": 28278
    },
    {
        "IDcode": 28279,
        "title": "「DJAWA」Pia (피아) – Goth&Oriental(111P1.14GB)",
        "cover": "https://telegra.ph/file/31d7bcbc15b9edff56838.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28279",
        "pageSeq": 28279
    },
    {
        "IDcode": 28280,
        "title": "Pingping - MISA AMANE",
        "cover": "https://telegra.ph/file/dd02c8926da2bc6daa2e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=28280",
        "pageSeq": 28280
    }
];
