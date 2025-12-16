// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 27881,
        "title": "Dame (담) - Summer - Moon Night Snap",
        "cover": "https://telegra.ph/file/d5c04d2a27b7188161870.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27881",
        "pageSeq": 27881
    },
    {
        "IDcode": 27882,
        "title": "[Moon Night Snap] Dame - 새해담이많이받으세요",
        "cover": "https://telegra.ph/file/5cb4190d3fe919b3ce466.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27882",
        "pageSeq": 27882
    },
    {
        "IDcode": 27883,
        "title": "[MoonNightSnap] Dame - It thickens Vol.2",
        "cover": "https://telegra.ph/file/86aee2fc64ad5995d9866.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27883",
        "pageSeq": 27883
    },
    {
        "IDcode": 27884,
        "title": "Moon Night Snap Dame (담) – Pride girl + video [75P+1V-468MB]",
        "cover": "https://telegra.ph/file/ae40d142aea139b53f527.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27884",
        "pageSeq": 27884
    },
    {
        "IDcode": 27885,
        "title": "Dami (퀸다미) - [CreamSoda] Vol.3 [72P-502MB]",
        "cover": "https://telegra.ph/file/3b4318ee2f3da587b3745.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27885",
        "pageSeq": 27885
    },
    {
        "IDcode": 27886,
        "title": "ParanHosu - A Day in Tokyo",
        "cover": "https://telegra.ph/file/01e52ac0267b88073ecaf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27886",
        "pageSeq": 27886
    },
    {
        "IDcode": 27887,
        "title": "Disharmonica-八尺夫人COS[20P]",
        "cover": "https://telegra.ph/file/7fdcd30d1258841a02110.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27887",
        "pageSeq": 27887
    },
    {
        "IDcode": 27888,
        "title": "Disharmonica - Marvel Comics. Ms Marvel[92P]",
        "cover": "https://telegra.ph/file/74d04da19a5bec364f4a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27888",
        "pageSeq": 27888
    },
    {
        "IDcode": 27889,
        "title": "Disharmonica - Fate Grand Order. Saber Bride[70P]",
        "cover": "https://telegra.ph/file/7835583b64e249eb447c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27889",
        "pageSeq": 27889
    },
    {
        "IDcode": 27890,
        "title": "[Cos]DJAWA -  Pure White Graduation [33P]",
        "cover": "https://telegra.ph/file/da1f0b92562dcf512a44c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27890",
        "pageSeq": 27890
    },
    {
        "IDcode": 27891,
        "title": "Ech1h-合集[311P72V]",
        "cover": "https://telegra.ph/file/e13f7de32f0e3b6021367.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27891",
        "pageSeq": 27891
    },
    {
        "IDcode": 27892,
        "title": "eloise软软 - OL[115P5V1.5G]",
        "cover": "https://telegra.ph/file/45c4dc188ada3e60c3612.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27892",
        "pageSeq": 27892
    },
    {
        "IDcode": 27893,
        "title": "eloise软软 - 河边JK",
        "cover": "https://telegra.ph/file/30f1167d47f58d1113feb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27893",
        "pageSeq": 27893
    },
    {
        "IDcode": 27894,
        "title": "eloise软软 乖乖的白丝48P",
        "cover": "https://telegra.ph/file/ae23c75b307937c9db17a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27894",
        "pageSeq": 27894
    },
    {
        "IDcode": 27895,
        "title": "ElyEE子 - NO.87 TUESDAY TWINTAIL [141P-261MB]",
        "cover": "https://telegra.ph/file/4fa29113864d1ddccb486.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27895",
        "pageSeq": 27895
    },
    {
        "IDcode": 27896,
        "title": "ElyEE子 - NO.88 Cheshire 柴郡 [70P-163MB]",
        "cover": "https://telegra.ph/file/8b338a2bcaf87d4d28001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27896",
        "pageSeq": 27896
    },
    {
        "IDcode": 27897,
        "title": "ElyEE子 - NO.89 Flf Bride & Lingerie Elf [65P-139MB]",
        "cover": "https://telegra.ph/file/789434db30f56875c4700.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27897",
        "pageSeq": 27897
    },
    {
        "IDcode": 27898,
        "title": "ElyEE子 - NO.90 Jeanne d'Arc alter Summer [18P-28MB]",
        "cover": "https://telegra.ph/file/775cf9049bd04a91d0b07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27898",
        "pageSeq": 27898
    },
    {
        "IDcode": 27899,
        "title": "1 (Extra)Autumn [41P-161MB]",
        "cover": "https://telegra.ph/file/d01373408c544f1695df8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27899",
        "pageSeq": 27899
    },
    {
        "IDcode": 27900,
        "title": "2 Higanbana [33P-172MB]",
        "cover": "https://telegra.ph/file/e2310f9adf15900136f0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27900",
        "pageSeq": 27900
    },
    {
        "IDcode": 27901,
        "title": "3 Ice Crystsls Fairy [31P-114MB]",
        "cover": "https://telegra.ph/file/5ee71cdd32352d8845db1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27901",
        "pageSeq": 27901
    },
    {
        "IDcode": 27902,
        "title": "4 Pale Lavender [54P-211MB]",
        "cover": "https://telegra.ph/file/9a81792e3c56901840b6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27902",
        "pageSeq": 27902
    },
    {
        "IDcode": 27903,
        "title": "5 Retro Kimono [38P-125MB]",
        "cover": "https://telegra.ph/file/7bcb75031e57ce16e2484.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27903",
        "pageSeq": 27903
    },
    {
        "IDcode": 27904,
        "title": "6 Retro Kimono II [62P-283MB]",
        "cover": "https://telegra.ph/file/d0772f392a606328d00d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27904",
        "pageSeq": 27904
    },
    {
        "IDcode": 27905,
        "title": "7 Sea Foam [15P-57MB]",
        "cover": "https://telegra.ph/file/bef024d9ed81ce0bbb5ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27905",
        "pageSeq": 27905
    },
    {
        "IDcode": 27906,
        "title": "8 Snow White [15P-64MB]",
        "cover": "https://telegra.ph/file/ce03cbc3d95b58faba353.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27906",
        "pageSeq": 27906
    },
    {
        "IDcode": 27907,
        "title": "9 Star Captain [39P-167MB]",
        "cover": "https://telegra.ph/file/0358ce371fea723e8880a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27907",
        "pageSeq": 27907
    },
    {
        "IDcode": 27908,
        "title": "10 Witch Time [47P-162MB]",
        "cover": "https://telegra.ph/file/d4b9b23fc7dbe0a6b6d82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27908",
        "pageSeq": 27908
    },
    {
        "IDcode": 27909,
        "title": "ElyEE子 - Yukihana Lamy [18P-36MB]",
        "cover": "https://telegra.ph/file/3f606166fb70d77fb4a57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27909",
        "pageSeq": 27909
    },
    {
        "IDcode": 27910,
        "title": "ElyEE子 - Towa Tokoyami [39P-104MB]",
        "cover": "https://telegra.ph/file/d6ccee9c67866a2b5e7ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27910",
        "pageSeq": 27910
    },
    {
        "IDcode": 27911,
        "title": "ElyEE子 - Marin Kitagawa [56P-122MB]",
        "cover": "https://telegra.ph/file/02802940e99de138397aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27911",
        "pageSeq": 27911
    },
    {
        "IDcode": 27912,
        "title": "ElyEE子 Scottish Fold Cat Doll 摺耳貓少女人形",
        "cover": "https://telegra.ph/file/1b8e106ffe36785db27a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27912",
        "pageSeq": 27912
    },
    {
        "IDcode": 27913,
        "title": "ElyEE子 - agdoll Cat Doll 布偶貓少女人形",
        "cover": "https://telegra.ph/file/69ffdd7f0f6e8da899b16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27913",
        "pageSeq": 27913
    },
    {
        "IDcode": 27914,
        "title": "ElyEE子 - Mist Blue Lady",
        "cover": "https://telegra.ph/file/8c108d59a67684a40d021.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27914",
        "pageSeq": 27914
    },
    {
        "IDcode": 27915,
        "title": "A- Gawr Gura Swimsuit",
        "cover": "https://telegra.ph/file/a627415a20fc640cab258.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27915",
        "pageSeq": 27915
    },
    {
        "IDcode": 27916,
        "title": "B - Devil Croupier",
        "cover": "https://telegra.ph/file/ef0be729ad8c1af46a837.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27916",
        "pageSeq": 27916
    },
    {
        "IDcode": 27917,
        "title": "C- Rem Pajamas",
        "cover": "https://telegra.ph/file/db617269c504531f62cc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27917",
        "pageSeq": 27917
    },
    {
        "IDcode": 27918,
        "title": "D- CyberGirl Blanche",
        "cover": "https://telegra.ph/file/67a3ff15ae2505a4db478.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27918",
        "pageSeq": 27918
    },
    {
        "IDcode": 27919,
        "title": "ElyEE子 - Bride & Lingerie [65P]",
        "cover": "https://telegra.ph/file/95a7770a47edb41f64abb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27919",
        "pageSeq": 27919
    },
    {
        "IDcode": 27920,
        "title": "Eunji Pyo - NO.05 [Patreon] Private - [Eunji Pyoapple] Eunji Pyo (표은지) 3 Sets [160P1V-3.78GB]",
        "cover": "https://telegra.ph/file/30ff722c13343a8f81c2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27920",
        "pageSeq": 27920
    },
    {
        "IDcode": 27921,
        "title": "Eunji Pyo - NO.06 Eunji’s Digital Photobook [2022-2 FALL] [160P1V-1.05GB]",
        "cover": "https://telegra.ph/file/4fd87927c0a27da31e9d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27921",
        "pageSeq": 27921
    },
    {
        "IDcode": 27922,
        "title": "Eunji Pyo - NO.07 Eunji’s Digital Photobook [2022-2 HOME] [201P1V-857MB]",
        "cover": "https://telegra.ph/file/ab7050ba874e1e6063004.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27922",
        "pageSeq": 27922
    },
    {
        "IDcode": 27923,
        "title": "FullFive-邨路小噴[42P]",
        "cover": "https://telegra.ph/file/870854abee2f884af44ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27923",
        "pageSeq": 27923
    },
    {
        "IDcode": 27924,
        "title": "FullFive-外卖小哥：“要我帮忙吗？”[39P]",
        "cover": "https://telegra.ph/file/8b4d40f754e03f738dcc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27924",
        "pageSeq": 27924
    },
    {
        "IDcode": 27925,
        "title": "FullFive-碉樓小露[23P]",
        "cover": "https://telegra.ph/file/7084f927b6e6877a522ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27925",
        "pageSeq": 27925
    },
    {
        "IDcode": 27926,
        "title": "Fushii_海堂 - NO.01 女仆图包 [30P-48MB]",
        "cover": "https://telegra.ph/file/6fa8ec10775d2f0bde30c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27926",
        "pageSeq": 27926
    },
    {
        "IDcode": 27927,
        "title": "Fushii_海堂 - NO.02 洛丽塔 [57P-241MB]",
        "cover": "https://telegra.ph/file/2525f18deab935782c49d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27927",
        "pageSeq": 27927
    },
    {
        "IDcode": 27928,
        "title": "Fushii_海堂 - NO.03 猫猫头 真爱版 [52P-447MB]",
        "cover": "https://telegra.ph/file/be1d36004d972ae2e282e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27928",
        "pageSeq": 27928
    },
    {
        "IDcode": 27929,
        "title": "Fushii_海堂 - NO.04 近距离恋爱 [40P-238MB]",
        "cover": "https://telegra.ph/file/f04c84aae4f752fe979fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27929",
        "pageSeq": 27929
    },
    {
        "IDcode": 27930,
        "title": "Fushii_海堂 - NO.05 魔法少女 [54P-331MB]",
        "cover": "https://telegra.ph/file/e705b109857b5c43fc596.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27930",
        "pageSeq": 27930
    },
    {
        "IDcode": 27931,
        "title": "Fushii_海堂 - NO.06 护士 [40P-244MB]",
        "cover": "https://telegra.ph/file/b55c2905e2c4fd013315f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27931",
        "pageSeq": 27931
    },
    {
        "IDcode": 27932,
        "title": "Fushii_海堂 - NO.07 高岭爱花 [31P-207MB]",
        "cover": "https://telegra.ph/file/5023d16ff53dd07b17125.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27932",
        "pageSeq": 27932
    },
    {
        "IDcode": 27933,
        "title": "Fushii_海堂 - NO.08 IU Final [20P-171MB]",
        "cover": "https://telegra.ph/file/bcd09f02ee887050f8b02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27933",
        "pageSeq": 27933
    },
    {
        "IDcode": 27934,
        "title": "NO.009 樱花树下",
        "cover": "https://telegra.ph/file/24036a53fb0486edbe90b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27934",
        "pageSeq": 27934
    },
    {
        "IDcode": 27935,
        "title": "NO.010 饮水",
        "cover": "https://telegra.ph/file/6093b9a23ae58efc7f1e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27935",
        "pageSeq": 27935
    },
    {
        "IDcode": 27936,
        "title": "NO.011 生化女仆",
        "cover": "https://telegra.ph/file/913999745fcc270b04aa2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27936",
        "pageSeq": 27936
    },
    {
        "IDcode": 27937,
        "title": "NO.012 兔兔头",
        "cover": "https://telegra.ph/file/354be9f8faff17a58ec67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27937",
        "pageSeq": 27937
    },
    {
        "IDcode": 27938,
        "title": "NO.014 酒吞兔女郎",
        "cover": "https://telegra.ph/file/dbebb5d0ec7a74f64c9bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27938",
        "pageSeq": 27938
    },
    {
        "IDcode": 27939,
        "title": "NO.015 玛丽罗斯",
        "cover": "https://telegra.ph/file/df9718b4ee6059f474372.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27939",
        "pageSeq": 27939
    },
    {
        "IDcode": 27940,
        "title": "NO.016 极探侦道",
        "cover": "https://telegra.ph/file/be3371dd883d002c37e94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27940",
        "pageSeq": 27940
    },
    {
        "IDcode": 27941,
        "title": "NO.017 樱花兔兔",
        "cover": "https://telegra.ph/file/c54bd733da52608917301.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27941",
        "pageSeq": 27941
    },
    {
        "IDcode": 27942,
        "title": "NO.018 万圣节",
        "cover": "https://telegra.ph/file/b8dd8644d989d55d09d7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27942",
        "pageSeq": 27942
    },
    {
        "IDcode": 27943,
        "title": "G44不会受伤 - NO.52 美少女万华镜夕莉夕摩 [31P-357MB]",
        "cover": "https://telegra.ph/file/305baa1e93f64d044dbfd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27943",
        "pageSeq": 27943
    },
    {
        "IDcode": 27944,
        "title": "G44不会受伤 – 弥海砂 [35P-318MB]",
        "cover": "https://telegra.ph/file/bfd660aca98645b708bf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27944",
        "pageSeq": 27944
    },
    {
        "IDcode": 27945,
        "title": "G44不会受伤 play room 31P",
        "cover": "https://telegra.ph/file/57a2b6dfa33f274e0d5dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27945",
        "pageSeq": 27945
    },
    {
        "IDcode": 27946,
        "title": "G44不会受伤 - NO.56 更衣人偶坠入爱河 [42P-503MB]",
        "cover": "https://telegra.ph/file/1470fb14036589ab29323.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27946",
        "pageSeq": 27946
    },
    {
        "IDcode": 27947,
        "title": "G44不会受伤 - 小黑猫娘 [20P-42MB]",
        "cover": "https://telegra.ph/file/e946bda65f495cd8ceff9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27947",
        "pageSeq": 27947
    },
    {
        "IDcode": 27948,
        "title": "G44不会受伤 - 小黑围裙 [20P-47MB]",
        "cover": "https://telegra.ph/file/5ff90d47826af158beae5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27948",
        "pageSeq": 27948
    },
    {
        "IDcode": 27949,
        "title": "G44不会受伤 更衣人偶坠入爱河 利兹",
        "cover": "https://telegra.ph/file/80b3a8bcd44915b76d091.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27949",
        "pageSeq": 27949
    },
    {
        "IDcode": 27950,
        "title": "G44不会受伤 - 休比·多拉 [23P1V-436MB]",
        "cover": "https://telegra.ph/file/e6efabaa9ce8ae8eaf170.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27950",
        "pageSeq": 27950
    },
    {
        "IDcode": 27951,
        "title": "G44不会受伤 - PA-15 Florence & Bunny ver [49P-380MB]",
        "cover": "https://telegra.ph/file/6258d8e8b73259e9587d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27951",
        "pageSeq": 27951
    },
    {
        "IDcode": 27952,
        "title": "G44不会受伤 - 凉宫 制服 [20P-51MB]",
        "cover": "https://telegra.ph/file/2b18502dc50eb7b33fdb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27952",
        "pageSeq": 27952
    },
    {
        "IDcode": 27953,
        "title": "G44不会受伤 - 教皇 20P-79MB",
        "cover": "https://telegra.ph/file/966d5fd28f649391261ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27953",
        "pageSeq": 27953
    },
    {
        "IDcode": 27954,
        "title": "G44不会受伤 霞沢美游",
        "cover": "https://telegra.ph/file/d8df465c454430451084c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27954",
        "pageSeq": 27954
    },
    {
        "IDcode": 27955,
        "title": "G44不会受伤 精灵村（9月25打赏资源）",
        "cover": "https://telegra.ph/file/c119991fbf531b1fe3e77.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27955",
        "pageSeq": 27955
    },
    {
        "IDcode": 27956,
        "title": "G44不会受伤 - 休比·多拉 [23P+1V]",
        "cover": "https://telegra.ph/file/a3ba26701fa1bed4080b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27956",
        "pageSeq": 27956
    },
    {
        "IDcode": 27957,
        "title": "G44不会受伤-酒吞童子 [21P]",
        "cover": "https://telegra.ph/file/91fd0f0cf0b4559c2fdac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27957",
        "pageSeq": 27957
    },
    {
        "IDcode": 27958,
        "title": "G44不会受伤-pa15旗袍 翠雀媚 [20P]",
        "cover": "https://telegra.ph/file/e48cf2b030eb01a6abe7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27958",
        "pageSeq": 27958
    },
    {
        "IDcode": 27959,
        "title": "Gatita_Yan OnlyFans合集[nPnV]",
        "cover": "https://telegra.ph/file/51c528eeb2b34a327c493.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27959",
        "pageSeq": 27959
    },
    {
        "IDcode": 27960,
        "title": "[Patreon] Habin - VVVIP Platinum",
        "cover": "https://telegra.ph/file/94a4697d89ba108eae9f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27960",
        "pageSeq": 27960
    },
    {
        "IDcode": 27961,
        "title": "Habin - Underwear (2 sets)",
        "cover": "https://telegra.ph/file/52c3bb0f00aca9f678660.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27961",
        "pageSeq": 27961
    },
    {
        "IDcode": 27962,
        "title": "Hachi_小芭 - NO.01 蒂法 [12P-30MB]",
        "cover": "https://telegra.ph/file/763abdb17619ad94570bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27962",
        "pageSeq": 27962
    },
    {
        "IDcode": 27963,
        "title": "Hachi_小芭 - NO.02 蒂法泳装 [12P-49MB]",
        "cover": "https://telegra.ph/file/37b45f3a46810d4f4cf0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27963",
        "pageSeq": 27963
    },
    {
        "IDcode": 27964,
        "title": "Hachi_小芭 - NO.03 Himiko Toga(渡我被身子) [13P-71MB]",
        "cover": "https://telegra.ph/file/668bb3869ca851b4af190.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27964",
        "pageSeq": 27964
    },
    {
        "IDcode": 27965,
        "title": "Hachi_小芭 - NO.04 灶门祢豆子 [18P1V-119MB]",
        "cover": "https://telegra.ph/file/395eb2860b21b93c9b5d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27965",
        "pageSeq": 27965
    },
    {
        "IDcode": 27966,
        "title": "Hachi_小芭 - NO.05 酒吞童子 Shuten Douji FGO [14P-67MB]",
        "cover": "https://telegra.ph/file/26b7d9f7e71a6875e16b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27966",
        "pageSeq": 27966
    },
    {
        "IDcode": 27967,
        "title": "Hachi_小芭 - NO.06 Reze [10P-53MB]",
        "cover": "https://telegra.ph/file/63d6cc620c6d8fb4db95d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27967",
        "pageSeq": 27967
    },
    {
        "IDcode": 27968,
        "title": "Hachi_小芭 - NO.08 刻晴 [14P-103MB]",
        "cover": "https://telegra.ph/file/32aadd2988d50835aa8bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27968",
        "pageSeq": 27968
    },
    {
        "IDcode": 27969,
        "title": "Hachi_小芭 - NO.09 殺生院キアラ [14P-29MB]",
        "cover": "https://telegra.ph/file/44e81cd7be7c294a07775.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27969",
        "pageSeq": 27969
    },
    {
        "IDcode": 27970,
        "title": "Hachi_小芭 - NO.10 宇崎花 [13P-38MB]",
        "cover": "https://telegra.ph/file/cff0beb13da54df5a861b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27970",
        "pageSeq": 27970
    },
    {
        "IDcode": 27971,
        "title": "Airi Akitsuki [14P-23MB]",
        "cover": "https://telegra.ph/file/26878d2fe1f40d3d16eb8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27971",
        "pageSeq": 27971
    },
    {
        "IDcode": 27972,
        "title": "Lucy Heartfilia [14P-44MB]",
        "cover": "https://telegra.ph/file/e325ea2f978df2ef7b77c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27972",
        "pageSeq": 27972
    },
    {
        "IDcode": 27973,
        "title": "Nezuko Apron [22P-87MB]",
        "cover": "https://telegra.ph/file/d385fd46cdf75ddc762d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27973",
        "pageSeq": 27973
    },
    {
        "IDcode": 27974,
        "title": "Nezuko School Gym Uniform [11P-18MB]",
        "cover": "https://telegra.ph/file/c9dd765a742d7a5f514a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27974",
        "pageSeq": 27974
    },
    {
        "IDcode": 27975,
        "title": "Paimon [14P-28MB]",
        "cover": "https://telegra.ph/file/24440f32af70386cfa10c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27975",
        "pageSeq": 27975
    },
    {
        "IDcode": 27976,
        "title": "Hachi 小芭 - Reze",
        "cover": "https://telegra.ph/file/13b794db1dfb0430d5d8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27976",
        "pageSeq": 27976
    },
    {
        "IDcode": 27977,
        "title": "Hanari(하나리) - NO.05 [SAINT Photolife] HaNari Vol.1 [64P-520MB]",
        "cover": "https://telegra.ph/file/c0be8a11bf8498bca6ba0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27977",
        "pageSeq": 27977
    },
    {
        "IDcode": 27978,
        "title": "Hanari(하나리) - [DJAWA] Champagne Mesh [109P-149MB]",
        "cover": "https://telegra.ph/file/291222364e3eb2a024771.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27978",
        "pageSeq": 27978
    },
    {
        "IDcode": 27979,
        "title": "Hanari(하나리) - [DJAWA] Catgirl in Stripes [91P-814MB]",
        "cover": "https://telegra.ph/file/5030ca3d3ec38d44622b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27979",
        "pageSeq": 27979
    },
    {
        "IDcode": 27980,
        "title": "Hanari(하나리) - [DJAWA] Snow Cat [35P-385MB]",
        "cover": "https://telegra.ph/file/db7a442f635653fa05e53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27980",
        "pageSeq": 27980
    }
];
