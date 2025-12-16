// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41768,
        "title": "Potato Godzilla - Yixuan (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/KpK67tXR/file-4977.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41768",
        "pageSeq": 41768
    },
    {
        "IDcode": 41769,
        "title": "Caticornplay - Nazuna (Yufukashi No Uta)",
        "cover": "https://i.ibb.co/21pKTKgd/file-5298.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41769",
        "pageSeq": 41769
    },
    {
        "IDcode": 41770,
        "title": "Alcololi - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/fV4SRcJB/file-5121.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41770",
        "pageSeq": 41770
    },
    {
        "IDcode": 41771,
        "title": "Lady Melamori - Gwen Grey (Spider-Man)",
        "cover": "https://i.ibb.co/7NWmnQ19/file-4930.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41771",
        "pageSeq": 41771
    },
    {
        "IDcode": 41772,
        "title": "【少女映畫】寄叶A型2号 ︱ YoRHa Type A No.2",
        "cover": "https://i.ibb.co/BHgbtKQn/file-5210.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41772",
        "pageSeq": 41772
    },
    {
        "IDcode": 41773,
        "title": "Aery Tiefling - Winry Rocbell (Fullmetal Alchemist)",
        "cover": "https://i.ibb.co/LDTZ9ndc/file-5326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41773",
        "pageSeq": 41773
    },
    {
        "IDcode": 41774,
        "title": "KuukoW - Kuki Shinobu (Genshin Impact)",
        "cover": "https://i.ibb.co/Lz4XB55R/file-5376.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41774",
        "pageSeq": 41774
    },
    {
        "IDcode": 41775,
        "title": "Umeko J - Mirko (Boku no Hero)",
        "cover": "https://i.ibb.co/wNLmhCXY/file-5521.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41775",
        "pageSeq": 41775
    },
    {
        "IDcode": 41776,
        "title": "Mik Allen - Caitlyn Kiramman (League Of Legends)",
        "cover": "https://i.ibb.co/LXnbR7Y8/file-5421.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41776",
        "pageSeq": 41776
    },
    {
        "IDcode": 41777,
        "title": "Hidori Rose - Shadowheart (Baldur's Gate 3)",
        "cover": "https://i.ibb.co/jkhJPhwh/file-5626.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41777",
        "pageSeq": 41777
    },
    {
        "IDcode": 41778,
        "title": "Yuumeilyn - Mita (MiSide)",
        "cover": "https://i.ibb.co/Qvv9Jhfk/file-5101.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41778",
        "pageSeq": 41778
    },
    {
        "IDcode": 41779,
        "title": "Kokura Chiyo - Fia (Elden Ring)",
        "cover": "https://i.ibb.co/Y4rNZ5nG/file-5668.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41779",
        "pageSeq": 41779
    },
    {
        "IDcode": 41780,
        "title": "Machi - Aglaea (Honkai Star Rail)",
        "cover": "https://i.ibb.co/V0nxRNsV/file-5766.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41780",
        "pageSeq": 41780
    },
    {
        "IDcode": 41781,
        "title": "Poppachan - Marine Houshou (Hololive)",
        "cover": "https://i.ibb.co/rGvhrJcV/file-5872.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41781",
        "pageSeq": 41781
    },
    {
        "IDcode": 41782,
        "title": "Hane Ame - Gemma (Monster Hunter Wilds)",
        "cover": "https://i.ibb.co/5hJ3BjSy/file-5725.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41782",
        "pageSeq": 41782
    },
    {
        "IDcode": 41783,
        "title": "Xiaoying - Reika (Gantz)",
        "cover": "https://i.ibb.co/qMzhZGL2/file-5981.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41783",
        "pageSeq": 41783
    },
    {
        "IDcode": 41784,
        "title": "阿雪雪 - Yat-Sen (Azur Lane)",
        "cover": "https://i.ibb.co/HTPRs7fs/file-6171.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41784",
        "pageSeq": 41784
    },
    {
        "IDcode": 41785,
        "title": "Caticornplay - Übel (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/svDsRnRJ/file-6011.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41785",
        "pageSeq": 41785
    },
    {
        "IDcode": 41786,
        "title": "Potato Godzilla - OnlyFans Nude Mar 1-31, 2025",
        "cover": "https://i.ibb.co/zTwKWJf2/file-6271.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41786",
        "pageSeq": 41786
    },
    {
        "IDcode": 41787,
        "title": "Vinnegal - Santa Claus",
        "cover": "https://i.ibb.co/SX7vm5cd/file-6106.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41787",
        "pageSeq": 41787
    },
    {
        "IDcode": 41788,
        "title": "Hane Ame - Tamaki (Dead Or Alive)",
        "cover": "https://i.ibb.co/F2wYsNZ/file-6321.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41788",
        "pageSeq": 41788
    },
    {
        "IDcode": 41789,
        "title": "Hane Ame - Eve (Stellar Blade)",
        "cover": "https://i.ibb.co/KcZ3LW4g/file-6356.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41789",
        "pageSeq": 41789
    },
    {
        "IDcode": 41790,
        "title": "Hane Ame - Nicole (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/fdhs4bWt/file-6391.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41790",
        "pageSeq": 41790
    },
    {
        "IDcode": 41791,
        "title": "Hane Ame - Glasses Girlfriend",
        "cover": "https://i.ibb.co/whMQ8DmH/file-6425.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41791",
        "pageSeq": 41791
    },
    {
        "IDcode": 41792,
        "title": "Hane Ame - Oboro (Taimanin Asagi)",
        "cover": "https://i.ibb.co/tMmtSLYh/file-6495.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41792",
        "pageSeq": 41792
    },
    {
        "IDcode": 41793,
        "title": "Hane Ame - Mary Bunny (NIKKE)",
        "cover": "https://i.ibb.co/Lhc2PyZj/file-6533.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41793",
        "pageSeq": 41793
    },
    {
        "IDcode": 41794,
        "title": "KANEKO - Kashino (Azur Lane)",
        "cover": "https://i.ibb.co/Dg8Lzrx4/file-6649.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41794",
        "pageSeq": 41794
    },
    {
        "IDcode": 41795,
        "title": "年年 Nnian - 青丝诀",
        "cover": "https://i.ibb.co/wNHKsH1d/file-6571.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41795",
        "pageSeq": 41795
    },
    {
        "IDcode": 41796,
        "title": "Sally Dorasnow - Clay (NIKKE)",
        "cover": "https://i.ibb.co/DDJPrWpq/file-6701.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41796",
        "pageSeq": 41796
    },
    {
        "IDcode": 41797,
        "title": "Sally Dorasnow & Azami - Bay & Clay (Nikke Cheerleader Outfits)",
        "cover": "https://i.ibb.co/yFfZKCwk/file-6751.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41797",
        "pageSeq": 41797
    },
    {
        "IDcode": 41798,
        "title": "Azami - Fern (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/cKJh2zqN/file-6782.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41798",
        "pageSeq": 41798
    },
    {
        "IDcode": 41799,
        "title": "Tniwe - Seiko Ayase (Dandadan)",
        "cover": "https://i.ibb.co/DH2bgvzQ/file-6808.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41799",
        "pageSeq": 41799
    },
    {
        "IDcode": 41800,
        "title": "白银 Baiyin - Kashino (Azur Lane)",
        "cover": "https://i.ibb.co/ZpxHwzNw/file-7030.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41800",
        "pageSeq": 41800
    },
    {
        "IDcode": 41801,
        "title": "Umeko J - Shenhe (Genshin Impact)",
        "cover": "https://i.ibb.co/BKCD3j9b/file-6884.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41801",
        "pageSeq": 41801
    },
    {
        "IDcode": 41802,
        "title": "Hologana - Mita (MiSide)",
        "cover": "https://i.ibb.co/N61kZQVx/file-7139.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41802",
        "pageSeq": 41802
    },
    {
        "IDcode": 41803,
        "title": "Xidaidai 习呆呆 - Cartethyia (Wuthering Waves)",
        "cover": "https://i.ibb.co/dJmmMtWr/file-7120.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41803",
        "pageSeq": 41803
    },
    {
        "IDcode": 41804,
        "title": "Hane Ame - Ogre Vibrastar Nun",
        "cover": "https://i.ibb.co/jvNZ79sR/file-7314.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41804",
        "pageSeq": 41804
    },
    {
        "IDcode": 41805,
        "title": "Hane Ame - Original_Girl from country",
        "cover": "https://i.ibb.co/C5mLdHtY/file-7232.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41805",
        "pageSeq": 41805
    },
    {
        "IDcode": 41806,
        "title": "Hane Ame - Aqua (Konosuba)",
        "cover": "https://i.ibb.co/Q7tQ6bqn/file-7207.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41806",
        "pageSeq": 41806
    },
    {
        "IDcode": 41807,
        "title": "Hane Ame - Ceres Fauna (Hololive)",
        "cover": "https://i.ibb.co/YFjd8g66/file-7353.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41807",
        "pageSeq": 41807
    },
    {
        "IDcode": 41808,
        "title": "Hane Ame - Rossanna (NIKKE)",
        "cover": "https://i.ibb.co/mrpMJShP/file-7268.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41808",
        "pageSeq": 41808
    },
    {
        "IDcode": 41809,
        "title": "Hane Ame - Akali Bunny (League Of Legends)",
        "cover": "https://i.ibb.co/xtwYNg4q/file-7659.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41809",
        "pageSeq": 41809
    },
    {
        "IDcode": 41810,
        "title": "Peachmilky - Viper (NIKKE)",
        "cover": "https://i.ibb.co/sptHC9hC/file-7409.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41810",
        "pageSeq": 41810
    },
    {
        "IDcode": 41811,
        "title": "Oku No Conscience - 2B (Nier Automata)",
        "cover": "https://i.ibb.co/hx8LYWRy/file-7440.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41811",
        "pageSeq": 41811
    },
    {
        "IDcode": 41812,
        "title": "麻花麻花酱 - 修女 Nun",
        "cover": "https://i.ibb.co/G4TQMt6j/file-7477.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41812",
        "pageSeq": 41812
    },
    {
        "IDcode": 41813,
        "title": "蠢沫沫 Chunmomo - Rapi (NIKKE)",
        "cover": "https://i.ibb.co/HDNvWR96/file-7505.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41813",
        "pageSeq": 41813
    },
    {
        "IDcode": 41814,
        "title": "Potato Godzilla - OnlyFans Nude Jul 1-31, 2025",
        "cover": "https://i.ibb.co/j966PWyn/file-7384.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41814",
        "pageSeq": 41814
    },
    {
        "IDcode": 41815,
        "title": "慕慕Momo - Lynette (Genshin Impact)",
        "cover": "https://i.ibb.co/DgYx0MCR/file-7694.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41815",
        "pageSeq": 41815
    },
    {
        "IDcode": 41816,
        "title": "KANEKO_咔喵 - 天下布魔 撒旦",
        "cover": "https://i.ibb.co/67w4WnmK/file-7784.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41816",
        "pageSeq": 41816
    },
    {
        "IDcode": 41817,
        "title": "屿鱼YuYu - Taiho Skin 舞娘 (Azur Lane)",
        "cover": "https://i.ibb.co/5WdJJH0W/file-7814.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41817",
        "pageSeq": 41817
    },
    {
        "IDcode": 41818,
        "title": "洛璃LoLiSAMA - Guitar Sister",
        "cover": "https://i.ibb.co/93WBnnLJ/file-7864.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41818",
        "pageSeq": 41818
    },
    {
        "IDcode": 41819,
        "title": "Tiny Asa - Feixiao (Honkai Star Rail)",
        "cover": "https://i.ibb.co/9ksSjJgb/file-7921.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41819",
        "pageSeq": 41819
    },
    {
        "IDcode": 41820,
        "title": "Potato Godzilla - Sparkle (Honkai Star Rail)",
        "cover": "https://i.ibb.co/pvjzvDH3/file-8002.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41820",
        "pageSeq": 41820
    },
    {
        "IDcode": 41821,
        "title": "Meiilyn (yuumeilyn) - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/TB3M6zCd/Meiilyn-yuumeilyn-cosplay-Frieren-Sousou-no-Frieren-31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41821",
        "pageSeq": 41821
    },
    {
        "IDcode": 41822,
        "title": "Neppu - Shinano (Azur Lane)",
        "cover": "https://i.ibb.co/DHK82bF0/001-01-compress52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41822",
        "pageSeq": 41822
    },
    {
        "IDcode": 41823,
        "title": "莱可Raika (Raikajiang) - Nun",
        "cover": "https://i.ibb.co/VfQXZrC/Raika-Raikajiang-Nun-68-compress25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41823",
        "pageSeq": 41823
    },
    {
        "IDcode": 41824,
        "title": "Joyce - Chelsea Mermaid (Ruby Gillman Teenage Kraken)",
        "cover": "https://i.ibb.co/b51h4zqg/03-compress66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41824",
        "pageSeq": 41824
    },
    {
        "IDcode": 41825,
        "title": "Neyrodesu - Ganyu (Genshin Impact)",
        "cover": "https://i.ibb.co/HfnLWPb6/01-Neyrodesu-Ganyu-1-compress45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41825",
        "pageSeq": 41825
    },
    {
        "IDcode": 41826,
        "title": "Fantasy Factory Komachi - Holo (Wolf and Spice)",
        "cover": "https://i.ibb.co/pvqnQCxh/04-004-compress54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41826",
        "pageSeq": 41826
    },
    {
        "IDcode": 41827,
        "title": "Xenon / Alinma - Keqing (Genshin Impact)",
        "cover": "https://i.ibb.co/hF1JHm8W/Keqing-Xenon-27-compress58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41827",
        "pageSeq": 41827
    },
    {
        "IDcode": 41828,
        "title": "Mik Allen - Momo & Seiko (Dandadan)",
        "cover": "https://i.ibb.co/7tJm4DpQ/21-Mik-Allen-Momo-Seiko-21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41828",
        "pageSeq": 41828
    },
    {
        "IDcode": 41829,
        "title": "咬一口兔娘 Niantutu - Ningguan (Genshin Impact)",
        "cover": "https://i.ibb.co/m5xqvwXD/15-Yiko-16-compress47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41829",
        "pageSeq": 41829
    },
    {
        "IDcode": 41830,
        "title": "Happy Manek - Nico Robin (One Piece)",
        "cover": "https://i.ibb.co/hFnwFV1B/08-8-compress27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41830",
        "pageSeq": 41830
    },
    {
        "IDcode": 41831,
        "title": "迷之呆梨 Fatiao Lii -  NO.50kikyou kiryuu (Blue Archive)",
        "cover": "https://i.ibb.co/TBFxtLRX/003-compress24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41831",
        "pageSeq": 41831
    },
    {
        "IDcode": 41832,
        "title": "Hokunaimeko - Maha Rukkhadevata (Genshin Impact)",
        "cover": "https://i.ibb.co/hFvYfzrG/Cosplay-Hokunaimeko-Kitano-Ako-Genshin-Impact-075.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41832",
        "pageSeq": 41832
    },
    {
        "IDcode": 41833,
        "title": "UyUy & Asagi - Satsuki Kiryuin & Ryuko Matoi (Kill La Kill)",
        "cover": "https://i.ibb.co/fGBjpwd1/01-Uy-Uy-Asagi-Kawaii-Satsuki-Kiryuin-Ryuko-Matoi-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41833",
        "pageSeq": 41833
    },
    {
        "IDcode": 41834,
        "title": "蛋黄mayo - Eula (Genshin Impact)",
        "cover": "https://i.ibb.co/wNSn30jR/01-3-compress51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41834",
        "pageSeq": 41834
    },
    {
        "IDcode": 41835,
        "title": "落落Raku - Kangel (Needy Streamer Overload)",
        "cover": "https://i.ibb.co/v6Wd6vWG/01-compress25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41835",
        "pageSeq": 41835
    },
    {
        "IDcode": 41836,
        "title": "Tiny Asa - Red Hood (NIKKE)",
        "cover": "https://i.ibb.co/YT1qmH3t/01-Tiny-Asa-tiny-asababy-cosplay-Red-Hood-NIKKE-1-min-compress82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41836",
        "pageSeq": 41836
    },
    {
        "IDcode": 41837,
        "title": "Hane Ame - Cartethyia Fleurdelys (Wuthering Waves)",
        "cover": "https://i.ibb.co/HjXgdtD/01-djuh.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41837",
        "pageSeq": 41837
    },
    {
        "IDcode": 41838,
        "title": "Arty Huang - Tingyun (Honkai Star Rail)",
        "cover": "https://i.ibb.co/BH3QvyHb/Arty-00101.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41838",
        "pageSeq": 41838
    },
    {
        "IDcode": 41839,
        "title": "Mizu - Phoebe (Wuthering Waves)",
        "cover": "https://i.ibb.co/21WB24zF/Mizu-cosplay-Phoebe-Wuthering-Waves-1-compress20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41839",
        "pageSeq": 41839
    },
    {
        "IDcode": 41840,
        "title": "慕慕Momo - Cinnamon (Cinnamoroll)",
        "cover": "https://i.ibb.co/xq0JzLf9/01-compress38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41840",
        "pageSeq": 41840
    },
    {
        "IDcode": 41841,
        "title": "Carry Key - Chel (The Road To El Dorado)",
        "cover": "https://i.ibb.co/V0qDMq5G/01-Chel-1-compress29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41841",
        "pageSeq": 41841
    },
    {
        "IDcode": 41842,
        "title": "Hana Bunny - Step Sister Story Vol 1 & 2",
        "cover": "https://i.ibb.co/XZ1tDn1V/01-1-compress94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41842",
        "pageSeq": 41842
    },
    {
        "IDcode": 41843,
        "title": "Hana Bunny - Fern (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/JjqJBYVR/01-1-compress8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41843",
        "pageSeq": 41843
    },
    {
        "IDcode": 41844,
        "title": "Potato Godzilla - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/JjBHxgwN/01-Potato-Godzilla-Frieren-1-compress70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41844",
        "pageSeq": 41844
    },
    {
        "IDcode": 41845,
        "title": "Comonun - Furina (Genshin Impact)",
        "cover": "https://i.ibb.co/MkmyqWBQ/1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41845",
        "pageSeq": 41845
    },
    {
        "IDcode": 41846,
        "title": "沖田凜花 Okita Rinka - Police Rinka",
        "cover": "https://i.ibb.co/JjJVBysk/01-003-compress73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41846",
        "pageSeq": 41846
    },
    {
        "IDcode": 41847,
        "title": "Chono Black - Noelle (Genshin Impact)",
        "cover": "https://i.ibb.co/TsQqF80/01-Noelle-1-compress85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41847",
        "pageSeq": 41847
    },
    {
        "IDcode": 41848,
        "title": "Anri Okita - Devil Body Topless",
        "cover": "https://i.ibb.co/4nkwSKLD/960x1280-09b76e6a423fe40e8a6207f24cf0822c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41848",
        "pageSeq": 41848
    },
    {
        "IDcode": 41849,
        "title": "SweetieLine - Yor (Spy x Family)",
        "cover": "https://i.ibb.co/FLv9TTQN/01-Sweetie-Line-Yor-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41849",
        "pageSeq": 41849
    },
    {
        "IDcode": 41850,
        "title": "Chuchu - Frieren (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/fzYqDPnT/100-R-compress69.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41850",
        "pageSeq": 41850
    },
    {
        "IDcode": 41851,
        "title": "KittyxKum - Secre (Black Clover)",
        "cover": "https://i.ibb.co/r2BDCygF/0001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41851",
        "pageSeq": 41851
    },
    {
        "IDcode": 41852,
        "title": "Aery Tiefling - Makato Niijima (Makoto Niijima)",
        "cover": "https://i.ibb.co/PsTpWmZg/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41852",
        "pageSeq": 41852
    },
    {
        "IDcode": 41853,
        "title": "テ-レ-ビ - 2B Wedding Dress (NieR Automata)",
        "cover": "https://i.ibb.co/cXgS8ksV/01-compress54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41853",
        "pageSeq": 41853
    },
    {
        "IDcode": 41854,
        "title": "Labinnak Mangoloo - Plugsuit Asuka (Neon Genesis Evangelion)",
        "cover": "https://i.ibb.co/Q03rs78/001-Plugsuit-Asuka-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41854",
        "pageSeq": 41854
    },
    {
        "IDcode": 41855,
        "title": "Lu - 魅魔 Succubus",
        "cover": "https://i.ibb.co/0RD67w9H/01-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41855",
        "pageSeq": 41855
    },
    {
        "IDcode": 41856,
        "title": "Helly Valentine - 2B Maid (Nier Automata)",
        "cover": "https://i.ibb.co/9mqjYnKC/01-Helly-Valentine-2-B-Maid-1-compress34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41856",
        "pageSeq": 41856
    },
    {
        "IDcode": 41857,
        "title": "Aery Tiefling - Nami (One Piece)",
        "cover": "https://i.ibb.co/8p9KwhL/00-Aery-Tiefling-Nami.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41857",
        "pageSeq": 41857
    },
    {
        "IDcode": 41858,
        "title": "Hokunaimeko - Anubis",
        "cover": "https://i.ibb.co/KzfQYTcT/01-1-compress79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41858",
        "pageSeq": 41858
    },
    {
        "IDcode": 41859,
        "title": "COSH_237 - Shimakaze (Kantai collection 岛风)",
        "cover": "https://i.ibb.co/Ng59J9hd/000.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41859",
        "pageSeq": 41859
    },
    {
        "IDcode": 41860,
        "title": "Joyce - Marie Rose (Dead Or Alive)",
        "cover": "https://i.ibb.co/gFL8WTry/01-Grid-Art-20220430-100013926-compress89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41860",
        "pageSeq": 41860
    },
    {
        "IDcode": 41861,
        "title": "Joyce - St. Louis (Azur Lane)",
        "cover": "https://i.ibb.co/6p8qHR1/01-1-compress6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41861",
        "pageSeq": 41861
    },
    {
        "IDcode": 41862,
        "title": "Mik Allen - Mita (MiSide)",
        "cover": "https://i.ibb.co/F4cV3RNy/01-1-compress53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41862",
        "pageSeq": 41862
    },
    {
        "IDcode": 41863,
        "title": "Yaokoututu 咬一口兔娘ovo - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://i.ibb.co/BVhY6ZJx/02-Yaokoututu-Marin-Kitagawa-2-compress14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41863",
        "pageSeq": 41863
    },
    {
        "IDcode": 41864,
        "title": "Tiny Asa - Cinderella (NIKKE)",
        "cover": "https://i.ibb.co/0jWHD5pt/01-Cinderella-lewd-1-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41864",
        "pageSeq": 41864
    },
    {
        "IDcode": 41865,
        "title": "二佐Nisa - Bunny Taiho (Azur Lane)",
        "cover": "https://i.ibb.co/zy7HJRs/001-compress88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41865",
        "pageSeq": 41865
    },
    {
        "IDcode": 41866,
        "title": "阿半今天很开心 - 粉色双马尾",
        "cover": "https://i.ibb.co/C5BnF8rV/001-compress68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41866",
        "pageSeq": 41866
    },
    {
        "IDcode": 41867,
        "title": "Pattie - 2B (Nier Automata)",
        "cover": "https://i.ibb.co/mVtszLJD/2-B-2020-0001-compress84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41867",
        "pageSeq": 41867
    }
];
