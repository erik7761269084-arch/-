// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40854,
        "title": "Byoru - Yor Forger Selfies (Spy x Family)",
        "cover": "https://telegra.ph/file/18958f437b23b8df915ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40854",
        "pageSeq": 40854
    },
    {
        "IDcode": 40855,
        "title": "星澜是澜澜叫澜妹呀 Xinglanlans - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/8b826a87d1283489f837b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40855",
        "pageSeq": 40855
    },
    {
        "IDcode": 40856,
        "title": "Alina Becker & Neyrodesu - Makima & Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/ea8047ac3899bd5e2ba51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40856",
        "pageSeq": 40856
    },
    {
        "IDcode": 40857,
        "title": "Noi Oogami - Meimei (Boku No Hero)",
        "cover": "https://telegra.ph/file/277877fab2ea1baaf7c2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40857",
        "pageSeq": 40857
    },
    {
        "IDcode": 40858,
        "title": "Yuuhui - Maid",
        "cover": "https://telegra.ph/file/d2ee6f8495f1e18b81982.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40858",
        "pageSeq": 40858
    },
    {
        "IDcode": 40859,
        "title": "Tao Nuan Jiang - Chen Hai (Azur Lane)",
        "cover": "https://telegra.ph/file/a64a3e850e7551a0c75a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40859",
        "pageSeq": 40859
    },
    {
        "IDcode": 40860,
        "title": "Noi Oogami - Shizuka Mikazuki (Zom 100 zombie ni naru made ni shitai 100 no koto)",
        "cover": "https://telegra.ph/file/3559ba02d7d14cfe77975.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40860",
        "pageSeq": 40860
    },
    {
        "IDcode": 40861,
        "title": "Kuuko W - Fu Xuan (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/10b8c9407b73cc99381e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40861",
        "pageSeq": 40861
    },
    {
        "IDcode": 40862,
        "title": "Chunmomo 蠢沫沫 No.243 魅魔 Succubus",
        "cover": "https://telegra.ph/file/45d258b60cceabd70b7c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40862",
        "pageSeq": 40862
    },
    {
        "IDcode": 40863,
        "title": "Yuna 유나 - Vol.52 Emilia (Re Zero)",
        "cover": "https://telegra.ph/file/44a8b0dfe74dbcb1ab86e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40863",
        "pageSeq": 40863
    },
    {
        "IDcode": 40864,
        "title": "Yoshinobi - McDonald's Mom",
        "cover": "https://telegra.ph/file/ab5091ee24e9e74725f51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40864",
        "pageSeq": 40864
    },
    {
        "IDcode": 40865,
        "title": "Pyon - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/7f590e2d135ba0ea47188.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40865",
        "pageSeq": 40865
    },
    {
        "IDcode": 40866,
        "title": "Lana Rain - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/b22f89661f11f329dd473.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40866",
        "pageSeq": 40866
    },
    {
        "IDcode": 40867,
        "title": "Lana Rain - Himeno (Chainsaw Man)",
        "cover": "https://telegra.ph/file/6ba179d61848ecc91c6d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40867",
        "pageSeq": 40867
    },
    {
        "IDcode": 40868,
        "title": "Aery Tiefling - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/76bfec5f492f1b12a7a21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40868",
        "pageSeq": 40868
    },
    {
        "IDcode": 40869,
        "title": "Joyce - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/e4498739482398585e5b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40869",
        "pageSeq": 40869
    },
    {
        "IDcode": 40870,
        "title": "Chunmomo - 房车",
        "cover": "https://telegra.ph/file/df423808d15160e4d326e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40870",
        "pageSeq": 40870
    },
    {
        "IDcode": 40871,
        "title": "Umeko J - Juri Han (Street Fighter)",
        "cover": "https://telegra.ph/file/928033a13827406ebfb2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40871",
        "pageSeq": 40871
    },
    {
        "IDcode": 40872,
        "title": "Mikomin - Maid",
        "cover": "https://telegra.ph/file/ef70636ce36b1aba201a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40872",
        "pageSeq": 40872
    },
    {
        "IDcode": 40873,
        "title": "Lana Rain - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/fefdc2b138d2a15effde7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40873",
        "pageSeq": 40873
    },
    {
        "IDcode": 40874,
        "title": "Noi Oogami - Gym Bloomer",
        "cover": "https://telegra.ph/file/0ace7246e497ed441ca66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40874",
        "pageSeq": 40874
    },
    {
        "IDcode": 40875,
        "title": "Byoru - Tiger",
        "cover": "https://telegra.ph/file/b908ca3d1d23d0312ee86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40875",
        "pageSeq": 40875
    },
    {
        "IDcode": 40876,
        "title": "Hane Ame - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/712313ec3351e180619a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40876",
        "pageSeq": 40876
    },
    {
        "IDcode": 40877,
        "title": "Lana Rain - Raven (RWBY)",
        "cover": "https://telegra.ph/file/a106ea804625bebc536b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40877",
        "pageSeq": 40877
    },
    {
        "IDcode": 40878,
        "title": "Okita Rinka - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/1845855faf64be2e8ccbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40878",
        "pageSeq": 40878
    },
    {
        "IDcode": 40879,
        "title": "咬一口兔娘ovo Niantutu - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/56bd0ef1d9a10193c02c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40879",
        "pageSeq": 40879
    },
    {
        "IDcode": 40880,
        "title": "Noi Oogami - Mavis (Hotel Transilvania)",
        "cover": "https://telegra.ph/file/6a0af4c210b1da187e4dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40880",
        "pageSeq": 40880
    },
    {
        "IDcode": 40881,
        "title": "Maria Kazi - Megan (M3GAN)",
        "cover": "https://telegra.ph/file/3f290d3f6f9874284e4c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40881",
        "pageSeq": 40881
    },
    {
        "IDcode": 40882,
        "title": "Pyon - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/46b244c4b537dea84c46b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40882",
        "pageSeq": 40882
    },
    {
        "IDcode": 40883,
        "title": "Noi Oogami - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/2cd40039fb9b5098b67ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40883",
        "pageSeq": 40883
    },
    {
        "IDcode": 40884,
        "title": "Choi Ji Yin - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/84758f9a1a0c0493fbaec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40884",
        "pageSeq": 40884
    },
    {
        "IDcode": 40885,
        "title": "Lada Lyumos -  Do-s (One Punch Man)",
        "cover": "https://telegra.ph/file/1dd24cb7e9c4985ee582d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40885",
        "pageSeq": 40885
    },
    {
        "IDcode": 40886,
        "title": "Choi Ji Yun - Purah (The Legend Of Zelada)",
        "cover": "https://telegra.ph/file/88fdf2cbe7b66b0365483.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40886",
        "pageSeq": 40886
    },
    {
        "IDcode": 40887,
        "title": "Asagiri Ai - Guitar Sister",
        "cover": "https://telegra.ph/file/78ed76286b23735575e5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40887",
        "pageSeq": 40887
    },
    {
        "IDcode": 40888,
        "title": "Babyfooji - Jinx (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/c7ca0ce8149e745c526be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40888",
        "pageSeq": 40888
    },
    {
        "IDcode": 40889,
        "title": "Arty Huang - Darkness (Konosuba)",
        "cover": "https://telegra.ph/file/d8847aedd824f398f00a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40889",
        "pageSeq": 40889
    },
    {
        "IDcode": 40890,
        "title": "TiTi - Ayanami Rei (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/727829e2b6dcb2a246355.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40890",
        "pageSeq": 40890
    },
    {
        "IDcode": 40891,
        "title": "Umeko J - Ghislaine (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/9fb575898597eba966175.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40891",
        "pageSeq": 40891
    },
    {
        "IDcode": 40892,
        "title": "Kaya Huang - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/0b505cc5a655b0c9dd2ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40892",
        "pageSeq": 40892
    },
    {
        "IDcode": 40893,
        "title": "Tsuki Desu - Aqua (Konosuba)",
        "cover": "https://telegra.ph/file/63e5f5115188b6e221240.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40893",
        "pageSeq": 40893
    },
    {
        "IDcode": 40894,
        "title": "Mikomin - Catherine (Catherine)",
        "cover": "https://telegra.ph/file/935f0c23c9797c16a4071.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40894",
        "pageSeq": 40894
    },
    {
        "IDcode": 40895,
        "title": "Yoshinobi - Chika (Kaguya Sama: Love is war)",
        "cover": "https://telegra.ph/file/c339b3c0125539628bab7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40895",
        "pageSeq": 40895
    },
    {
        "IDcode": 40896,
        "title": "Hane Ame - 2023 Birthday",
        "cover": "https://telegra.ph/file/e6bcff75b961f2f91e036.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40896",
        "pageSeq": 40896
    },
    {
        "IDcode": 40897,
        "title": "Hane Ame - McDonald's Mom",
        "cover": "https://telegra.ph/file/7c08aa0ec1d76b2304ec4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40897",
        "pageSeq": 40897
    },
    {
        "IDcode": 40898,
        "title": "Shaeunderscore - Monika (Doki doki literature club)",
        "cover": "https://telegra.ph/file/45d916b196825191831f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40898",
        "pageSeq": 40898
    },
    {
        "IDcode": 40899,
        "title": "Tiny Asa - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/9286adb019169e107f06a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40899",
        "pageSeq": 40899
    },
    {
        "IDcode": 40900,
        "title": "Okita Rinka & Fantasy Factory - Sport Underwear Uncen",
        "cover": "https://telegra.ph/file/78a33ed635a8773f489ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40900",
        "pageSeq": 40900
    },
    {
        "IDcode": 40901,
        "title": "Hane Ame - Helm (Nikke)",
        "cover": "https://telegra.ph/file/5ab5777012e48e2eb5bd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40901",
        "pageSeq": 40901
    },
    {
        "IDcode": 40902,
        "title": "Alina Becker - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/7e73bd29e88275375cf24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40902",
        "pageSeq": 40902
    },
    {
        "IDcode": 40903,
        "title": "Potato Godzilla - See-through swimsuit",
        "cover": "https://telegra.ph/file/192be04d6c5ab70ef7c3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40903",
        "pageSeq": 40903
    },
    {
        "IDcode": 40904,
        "title": "Potato Godzilla - Devil Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/ccde5e1d87f1a2babe971.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40904",
        "pageSeq": 40904
    },
    {
        "IDcode": 40905,
        "title": "Umeko J - Juri Han PJ (Street Fighter)",
        "cover": "https://telegra.ph/file/5c0c88d678747ca821f60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40905",
        "pageSeq": 40905
    },
    {
        "IDcode": 40906,
        "title": "洛桑w伊梓 - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/97f0491597fbb9948172e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40906",
        "pageSeq": 40906
    },
    {
        "IDcode": 40907,
        "title": "Alin Ma / Xenon - Do-s (One Punch Man)",
        "cover": "https://telegra.ph/file/220d34de67399d0c40c91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40907",
        "pageSeq": 40907
    },
    {
        "IDcode": 40908,
        "title": "Hana Bunny - Mc Mommy",
        "cover": "https://telegra.ph/file/0a3dae3aa8c3abf01ff4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40908",
        "pageSeq": 40908
    },
    {
        "IDcode": 40909,
        "title": "Umeko J - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/c94e521581c128d51847a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40909",
        "pageSeq": 40909
    },
    {
        "IDcode": 40910,
        "title": "Xidaidai - Kana Arima (Oshi No Ko)",
        "cover": "https://telegra.ph/file/3d659d45fdf5f9c5a7732.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40910",
        "pageSeq": 40910
    },
    {
        "IDcode": 40911,
        "title": "麻花麻花酱 Xia Xiao Qiu - No.058-Yorktown (Azur Lane)",
        "cover": "https://telegra.ph/file/21b044b82df73d65db5bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40911",
        "pageSeq": 40911
    },
    {
        "IDcode": 40912,
        "title": "Kuuko W - Jingliu (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/8035e4da4393c5851d531.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40912",
        "pageSeq": 40912
    },
    {
        "IDcode": 40913,
        "title": "Asagiri Ai - Nun",
        "cover": "https://telegra.ph/file/466af5c9e9dee04c7cc6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40913",
        "pageSeq": 40913
    },
    {
        "IDcode": 40914,
        "title": "Hana Bunny - Nurse",
        "cover": "https://telegra.ph/file/8155cca06c8206430c7f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40914",
        "pageSeq": 40914
    },
    {
        "IDcode": 40915,
        "title": "麻花酱 Ma Hua Jiang - 逆兔女郎",
        "cover": "https://telegra.ph/file/d03815c6d8957856bc4cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40915",
        "pageSeq": 40915
    },
    {
        "IDcode": 40916,
        "title": "Lana Rain - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/b493ec7593150ae7ccb8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40916",
        "pageSeq": 40916
    },
    {
        "IDcode": 40917,
        "title": "Akemi - Juri Han (Street Fighter)",
        "cover": "https://telegra.ph/file/75469bc41adab84241fef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40917",
        "pageSeq": 40917
    },
    {
        "IDcode": 40918,
        "title": "莱可 Raika - 甘雨女仆 Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/4cc9dfe3a82d5f3b125dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40918",
        "pageSeq": 40918
    },
    {
        "IDcode": 40919,
        "title": "木之本澜 - 修女夏洛特 Sister Charlotte",
        "cover": "https://telegra.ph/file/db96ffe68ccd19d0558e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40919",
        "pageSeq": 40919
    },
    {
        "IDcode": 40920,
        "title": "Mochidolll - Senko (Sewayaki Kitsuneno Senko San)",
        "cover": "https://telegra.ph/file/50c726f2ea5a174272ce2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40920",
        "pageSeq": 40920
    },
    {
        "IDcode": 40921,
        "title": "Sayo Momo - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/ee2bb26943950c6d04c81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40921",
        "pageSeq": 40921
    },
    {
        "IDcode": 40922,
        "title": "Kaneko 咔喵 - 信浓赛车 跑车 Shinano (Azur Lane)",
        "cover": "https://telegra.ph/file/549fe0c716c50bd1466fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40922",
        "pageSeq": 40922
    },
    {
        "IDcode": 40923,
        "title": "Choi Ji Yun - Maki Zenin (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/79f5b837971843030f606.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40923",
        "pageSeq": 40923
    },
    {
        "IDcode": 40924,
        "title": "Nookkiizz - Charlotte",
        "cover": "https://telegra.ph/file/97e6b8a672ff0fd73b5fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40924",
        "pageSeq": 40924
    },
    {
        "IDcode": 40925,
        "title": "Tiny Asa - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/97b91b24628ffe11ffea1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40925",
        "pageSeq": 40925
    },
    {
        "IDcode": 40926,
        "title": "Pattie - BB (Fate Grand Order)",
        "cover": "https://telegra.ph/file/588514abcf48e2b8f7ff0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40926",
        "pageSeq": 40926
    },
    {
        "IDcode": 40927,
        "title": "Lana Rain - Toga Himiko (Boku no Hero Academia)",
        "cover": "https://telegra.ph/file/9ee670836ac54f47cc7bd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40927",
        "pageSeq": 40927
    },
    {
        "IDcode": 40928,
        "title": "星之迟迟 Hoshilily - 催眠打工战士",
        "cover": "https://telegra.ph/file/39eeb9e31a298ddb56838.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40928",
        "pageSeq": 40928
    },
    {
        "IDcode": 40929,
        "title": "Djarii - Moka (Rosario + Vampire)",
        "cover": "https://telegra.ph/file/d5b8466946c811665b4ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40929",
        "pageSeq": 40929
    },
    {
        "IDcode": 40930,
        "title": "Mikomin - Peach (Mario Bros)",
        "cover": "https://telegra.ph/file/5bd8221daae7dabb13d65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40930",
        "pageSeq": 40930
    },
    {
        "IDcode": 40931,
        "title": "Kuuko W - Faruzan (Genshin Impact)",
        "cover": "https://telegra.ph/file/208a3eb04635a6497d4e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40931",
        "pageSeq": 40931
    },
    {
        "IDcode": 40932,
        "title": "Alina Becker - Bear",
        "cover": "https://telegra.ph/file/3143330f21f2c2e529a21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40932",
        "pageSeq": 40932
    },
    {
        "IDcode": 40933,
        "title": "Azure - Pekora (Hololive)",
        "cover": "https://telegra.ph/file/61ce31e9e6e1655cecbb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40933",
        "pageSeq": 40933
    },
    {
        "IDcode": 40934,
        "title": "Aery Tiefling - Hu Tao (Genshin Impact)",
        "cover": "https://telegra.ph/file/e216ec6db98013639d324.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40934",
        "pageSeq": 40934
    },
    {
        "IDcode": 40935,
        "title": "Byoru - Rio (Blue Archive)",
        "cover": "https://telegra.ph/file/ed466f907c3a489c0d220.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40935",
        "pageSeq": 40935
    },
    {
        "IDcode": 40936,
        "title": "Hoshilily - No 004 原创 邻家的小鬼头妹妹",
        "cover": "https://telegra.ph/file/6fd8e71bdf706bb28ae48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40936",
        "pageSeq": 40936
    },
    {
        "IDcode": 40937,
        "title": "Okita Rinka - CC (Code Geass)",
        "cover": "https://telegra.ph/file/d9f33a0083f4d016de7dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40937",
        "pageSeq": 40937
    },
    {
        "IDcode": 40938,
        "title": "Byoru - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/d856dc4679c9078c0027a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40938",
        "pageSeq": 40938
    },
    {
        "IDcode": 40939,
        "title": "Chunmomo - Tosa (Azur Lane)",
        "cover": "https://telegra.ph/file/4234220f0509ab70c4e90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40939",
        "pageSeq": 40939
    },
    {
        "IDcode": 40940,
        "title": "Carry Key - Katara (Avatar)",
        "cover": "https://telegra.ph/file/4c65aee80aa512633b983.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40940",
        "pageSeq": 40940
    },
    {
        "IDcode": 40941,
        "title": "Adamae Dono - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/d7248c6719dd899ced8ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40941",
        "pageSeq": 40941
    },
    {
        "IDcode": 40942,
        "title": "Umeko J - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/8d4ee9328242a6206f18b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40942",
        "pageSeq": 40942
    },
    {
        "IDcode": 40943,
        "title": "Vinnegal - Raven (Teen Titans)",
        "cover": "https://telegra.ph/file/0b000a4cf783879dd69a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40943",
        "pageSeq": 40943
    },
    {
        "IDcode": 40944,
        "title": "Akemi - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/1400d7c08ed06b69ee480.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40944",
        "pageSeq": 40944
    },
    {
        "IDcode": 40945,
        "title": "Natsuko - Marriage Deluxe Edition",
        "cover": "https://telegra.ph/file/bba7d96dc29d91a4152bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40945",
        "pageSeq": 40945
    },
    {
        "IDcode": 40946,
        "title": "Alice Bong - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/3b92b8d63ce94f91b4980.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40946",
        "pageSeq": 40946
    },
    {
        "IDcode": 40947,
        "title": "Sawakate - Spider-Gwen",
        "cover": "https://telegra.ph/file/7bea86655105a02236fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40947",
        "pageSeq": 40947
    },
    {
        "IDcode": 40948,
        "title": "Vinnegal - Beatrice (Umineko No Naku Koro Ni)",
        "cover": "https://telegra.ph/file/25b4e2cee22236b5b6aca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40948",
        "pageSeq": 40948
    },
    {
        "IDcode": 40949,
        "title": "Domi Versailles - Korra (Avatar: The Legend Of Korra)",
        "cover": "https://telegra.ph/file/e3cfb25fb1180ce5cdb68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40949",
        "pageSeq": 40949
    },
    {
        "IDcode": 40950,
        "title": "Michi Kyunn - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/5fa447034137c90130fee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40950",
        "pageSeq": 40950
    },
    {
        "IDcode": 40951,
        "title": "Yuuforia - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/268e8ae62fd49db28b2b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40951",
        "pageSeq": 40951
    },
    {
        "IDcode": 40952,
        "title": "木之本澜 - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/c7ec35d9326dab5dea1bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40952",
        "pageSeq": 40952
    },
    {
        "IDcode": 40953,
        "title": "Tiny Asa - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/907a346c8de1bbe145701.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40953",
        "pageSeq": 40953
    }
];
