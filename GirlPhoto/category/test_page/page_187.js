// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40751,
        "title": "Caticornplay - Toga  Himiko (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/0a7c592e71f0afa2e468b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40751",
        "pageSeq": 40751
    },
    {
        "IDcode": 40752,
        "title": "Fantasy Factory  Elf Swimsuit Pink",
        "cover": "https://telegra.ph/file/684c0d4f5eea4a2fca367.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40752",
        "pageSeq": 40752
    },
    {
        "IDcode": 40753,
        "title": "Chameleah - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/f853f5b3858cea75ce3ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40753",
        "pageSeq": 40753
    },
    {
        "IDcode": 40754,
        "title": "Xidaidai - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/887e8a2e4e9f74b91131e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40754",
        "pageSeq": 40754
    },
    {
        "IDcode": 40755,
        "title": "ZziZzi - Secret Agent Ver A (Desert Stalker S.)",
        "cover": "https://telegra.ph/file/274f8e3706616c456059e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40755",
        "pageSeq": 40755
    },
    {
        "IDcode": 40756,
        "title": "ZziZzi - Secret Agent Ver B (Desert Stalker S.)",
        "cover": "https://telegra.ph/file/6fec24539b27973428a6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40756",
        "pageSeq": 40756
    },
    {
        "IDcode": 40757,
        "title": "莉犬酱 & TiTi - Cyberpunk",
        "cover": "https://telegra.ph/file/ff4a2243dfe3e85d8b6b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40757",
        "pageSeq": 40757
    },
    {
        "IDcode": 40758,
        "title": "Uri - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/31e918a2e18d50511f190.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40758",
        "pageSeq": 40758
    },
    {
        "IDcode": 40759,
        "title": "Babyfoogi - Gwenon/Spider-Gwen",
        "cover": "https://telegra.ph/file/e4bc58fa9161029ac37f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40759",
        "pageSeq": 40759
    },
    {
        "IDcode": 40760,
        "title": "少女映画 - Elaina (Majo No Tabitabi)",
        "cover": "https://telegra.ph/file/ad946262a4e31d59f9392.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40760",
        "pageSeq": 40760
    },
    {
        "IDcode": 40761,
        "title": "Helly Valentine - Ryuuko Matoi (Kill la Kill)",
        "cover": "https://telegra.ph/file/3154762019eb8ff5b9515.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40761",
        "pageSeq": 40761
    },
    {
        "IDcode": 40762,
        "title": "Shui Miao Aqua - Kisaki (Blue Archive)",
        "cover": "https://telegra.ph/file/c70909264f1df6233672b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40762",
        "pageSeq": 40762
    },
    {
        "IDcode": 40763,
        "title": "Hana Bunny - Anis (Nikke)",
        "cover": "https://telegra.ph/file/0e8af3fe1b17228b17eba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40763",
        "pageSeq": 40763
    },
    {
        "IDcode": 40764,
        "title": "YaoYaoQwQ - Hoshino Ai (Oshi No Ko)",
        "cover": "https://telegra.ph/file/bddcdde4184c7e43e2dcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40764",
        "pageSeq": 40764
    },
    {
        "IDcode": 40765,
        "title": "TiTi - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/16a85bbdd04045b0c932c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40765",
        "pageSeq": 40765
    },
    {
        "IDcode": 40766,
        "title": "Byoru - Mary (Nikke)",
        "cover": "https://telegra.ph/file/1fc03bec9857fa1fa8049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40766",
        "pageSeq": 40766
    },
    {
        "IDcode": 40767,
        "title": "Hane Ame - Summer Anis (Nikke)",
        "cover": "https://telegra.ph/file/bb0150224cf71d0bba14e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40767",
        "pageSeq": 40767
    },
    {
        "IDcode": 40768,
        "title": "Yoshinobi - Cinnamon (Nekopara)",
        "cover": "https://telegra.ph/file/2f119d268bb1da4e9e21e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40768",
        "pageSeq": 40768
    },
    {
        "IDcode": 40769,
        "title": "Azami & Mikomin - Office Set",
        "cover": "https://telegra.ph/file/a106c08d3fd7caaa3e702.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40769",
        "pageSeq": 40769
    },
    {
        "IDcode": 40770,
        "title": "Hane Ame - Bunny Kakudate Karin (Blue Archive)",
        "cover": "https://telegra.ph/file/e4bae38769f9c2a92fb00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40770",
        "pageSeq": 40770
    },
    {
        "IDcode": 40771,
        "title": "Hane Ame - Nurse Kakudate Karin (Blue Archive)",
        "cover": "https://telegra.ph/file/575296e45d99795e0388b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40771",
        "pageSeq": 40771
    },
    {
        "IDcode": 40772,
        "title": "Hane Ame - School Kakudate Karin (Blue Archive)",
        "cover": "https://telegra.ph/file/3de7751dbd5d85843d787.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40772",
        "pageSeq": 40772
    },
    {
        "IDcode": 40773,
        "title": "Neyrodesu - Kokomi (Genshin Impact)",
        "cover": "https://telegra.ph/file/caefe019d03c9d81da61b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40773",
        "pageSeq": 40773
    },
    {
        "IDcode": 40774,
        "title": "Mikomin - Snow White (Blanca Nieves)",
        "cover": "https://telegra.ph/file/6a12622da318f751c7390.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40774",
        "pageSeq": 40774
    },
    {
        "IDcode": 40775,
        "title": "Byoru - Nagisa (Dead Or Alive)",
        "cover": "https://telegra.ph/file/e3953505186f37dc2eb20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40775",
        "pageSeq": 40775
    },
    {
        "IDcode": 40776,
        "title": "Hane Ame - Pursena (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/e3bd0769b6ad13db3833f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40776",
        "pageSeq": 40776
    },
    {
        "IDcode": 40777,
        "title": "Shui Miao Aqua - Nilou (Genshin Impact)",
        "cover": "https://telegra.ph/file/163e0e8075787c0db4636.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40777",
        "pageSeq": 40777
    },
    {
        "IDcode": 40778,
        "title": "Kaya - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/824830cfc1a0c2a2b0dee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40778",
        "pageSeq": 40778
    },
    {
        "IDcode": 40779,
        "title": "Fantasy Factory - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/0fa46ab880c8411ce5a8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40779",
        "pageSeq": 40779
    },
    {
        "IDcode": 40780,
        "title": "Lady Melamori - Rias (High School DxD)",
        "cover": "https://telegra.ph/file/580d82a75a675249dcf57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40780",
        "pageSeq": 40780
    },
    {
        "IDcode": 40781,
        "title": "Choi Ji Yun - Satsuki (Kill la Kill)",
        "cover": "https://telegra.ph/file/5194b22e00d0820ded071.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40781",
        "pageSeq": 40781
    },
    {
        "IDcode": 40782,
        "title": "Lien Sue - Yamato (One Piece)",
        "cover": "https://telegra.ph/file/f2389e9f6f689e4e78d10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40782",
        "pageSeq": 40782
    },
    {
        "IDcode": 40783,
        "title": "Asagiri Ai - Qiqi (Genshin Impact)",
        "cover": "https://telegra.ph/file/86f9e49097e4e95714407.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40783",
        "pageSeq": 40783
    },
    {
        "IDcode": 40784,
        "title": "Helly Valentine - Vi (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/bc41b182c11514a15ddce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40784",
        "pageSeq": 40784
    },
    {
        "IDcode": 40785,
        "title": "Byoru - Helm Aquamarine (Nikke)",
        "cover": "https://telegra.ph/file/3c7c525073bfbe641c615.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40785",
        "pageSeq": 40785
    },
    {
        "IDcode": 40786,
        "title": "Meriol Chan - Gojo Satoru (Jujutsu Kaisen)",
        "cover": "https://telegra.ph/file/d9698afb5a4408b331beb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40786",
        "pageSeq": 40786
    },
    {
        "IDcode": 40787,
        "title": "Vinnegal - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/d9590eacf9e8c66fa6f02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40787",
        "pageSeq": 40787
    },
    {
        "IDcode": 40788,
        "title": "Babyfooji - Spiderman",
        "cover": "https://telegra.ph/file/479477a92c94c74db08b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40788",
        "pageSeq": 40788
    },
    {
        "IDcode": 40789,
        "title": "KuukoW - Comfy Cat Swimsuit",
        "cover": "https://telegra.ph/file/66fa881342a7adbbfd11f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40789",
        "pageSeq": 40789
    },
    {
        "IDcode": 40790,
        "title": "Yoshinobi - Mako (Kill la Kill)",
        "cover": "https://telegra.ph/file/f1629f7c2b74676c59724.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40790",
        "pageSeq": 40790
    },
    {
        "IDcode": 40791,
        "title": "Fantasy Factory - Yuzumi (vTuber)",
        "cover": "https://telegra.ph/file/1bede6639c2d149868e1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40791",
        "pageSeq": 40791
    },
    {
        "IDcode": 40792,
        "title": "Vinnegal - Himeno (Chainsaw Man)",
        "cover": "https://telegra.ph/file/223c1fd2f936d50044a62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40792",
        "pageSeq": 40792
    },
    {
        "IDcode": 40793,
        "title": "Meriol - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/c8113df7053bbde80b4f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40793",
        "pageSeq": 40793
    },
    {
        "IDcode": 40794,
        "title": "星野柒兔 Xing Ye Qitu - Hu tao (Genshin Impact)",
        "cover": "https://telegra.ph/file/808173cb58f7658a4d2ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40794",
        "pageSeq": 40794
    },
    {
        "IDcode": 40795,
        "title": "Byoru - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/264dbfe8798fb34ff0056.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40795",
        "pageSeq": 40795
    },
    {
        "IDcode": 40796,
        "title": "Vinnegal - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/380c4fd00e2e807f2ad0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40796",
        "pageSeq": 40796
    },
    {
        "IDcode": 40797,
        "title": "Vinnegal - Lum (Urusei Yatsura)",
        "cover": "https://telegra.ph/file/6f5dd8d23d0b5ce8a7a92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40797",
        "pageSeq": 40797
    },
    {
        "IDcode": 40798,
        "title": "糯美子Mini - Mai Shiranui (The King Of Fighters)",
        "cover": "https://telegra.ph/file/d7ee723f857db42bc51a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40798",
        "pageSeq": 40798
    },
    {
        "IDcode": 40799,
        "title": "Meriol - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/ebadbeefe648e9f32d770.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40799",
        "pageSeq": 40799
    },
    {
        "IDcode": 40800,
        "title": "Byoru - Shizuka Mikazuki (Zom 100 zombie ni naru made ni shitai 100 no koto)",
        "cover": "https://telegra.ph/file/76be502ba25c6f1bbaaba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40800",
        "pageSeq": 40800
    },
    {
        "IDcode": 40801,
        "title": "Hane Ame - Aeolian ( Ghost Blade)",
        "cover": "https://telegra.ph/file/6f8da90e0af33ffab7ddc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40801",
        "pageSeq": 40801
    },
    {
        "IDcode": 40802,
        "title": "九九八吖 Jiujiuba ya - Rizu Kyunn (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/3138d72816b1281b9513f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40802",
        "pageSeq": 40802
    },
    {
        "IDcode": 40803,
        "title": "Yoshinobi - Riamu (Idol Master)",
        "cover": "https://telegra.ph/file/b46eccc42a6d0020ff03a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40803",
        "pageSeq": 40803
    },
    {
        "IDcode": 40804,
        "title": "Byoru - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/a9c6b24887694f7bf26f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40804",
        "pageSeq": 40804
    },
    {
        "IDcode": 40805,
        "title": "Vinnegal - Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/4378e6245757df2a16e89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40805",
        "pageSeq": 40805
    },
    {
        "IDcode": 40806,
        "title": "Angel chan - Kisaki (Blue Archive)",
        "cover": "https://telegra.ph/file/1fb2371ad1e89a494ac8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40806",
        "pageSeq": 40806
    },
    {
        "IDcode": 40807,
        "title": "Lada Lyumos,- Black Widow (Avengers)",
        "cover": "https://telegra.ph/file/ab7ad76d0c13c73b31336.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40807",
        "pageSeq": 40807
    },
    {
        "IDcode": 40808,
        "title": "Kaya Huang - Guitar Sister",
        "cover": "https://telegra.ph/file/adda93172688d0f99a7f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40808",
        "pageSeq": 40808
    },
    {
        "IDcode": 40809,
        "title": "Kaya Huang - Bunny Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/b57d1cc55b530e21dc42c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40809",
        "pageSeq": 40809
    },
    {
        "IDcode": 40810,
        "title": "Anna Aifert - Nun Rosaria (Genshin Impact)",
        "cover": "https://telegra.ph/file/dc7229f77ed5793262816.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40810",
        "pageSeq": 40810
    },
    {
        "IDcode": 40811,
        "title": "Xidaidai - Fuyuko Mayuzumi (THE iDOLM@STER Shiny Colors)",
        "cover": "https://telegra.ph/file/a47f3ae832cd82df69670.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40811",
        "pageSeq": 40811
    },
    {
        "IDcode": 40812,
        "title": "Michi Kyunn - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/b1a4a82ab1d1bf9964f4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40812",
        "pageSeq": 40812
    },
    {
        "IDcode": 40813,
        "title": "Hoshilily - Bunny Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/05b703072d9d39bba58e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40813",
        "pageSeq": 40813
    },
    {
        "IDcode": 40814,
        "title": "小仓千代w Yummichiyo - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c56f665c1bf44d6bc49a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40814",
        "pageSeq": 40814
    },
    {
        "IDcode": 40815,
        "title": "Hane Ame - Original Onsen Plz",
        "cover": "https://telegra.ph/file/7d5b4e2a0d0c813757cc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40815",
        "pageSeq": 40815
    },
    {
        "IDcode": 40817,
        "title": "Risoft344 - Tsubaki (Blue Archive)",
        "cover": "https://telegra.ph/file/3f4f67b49e75e25c4f595.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40817",
        "pageSeq": 40817
    },
    {
        "IDcode": 40818,
        "title": "Potato Godzilla - Purple Dress",
        "cover": "https://telegra.ph/file/1b423fccc0062004828d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40818",
        "pageSeq": 40818
    },
    {
        "IDcode": 40819,
        "title": "Aery Tiefling - Usagi Tsukino / Serena (Sailor Moon)",
        "cover": "https://telegra.ph/file/55a6c920a263062e1da35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40819",
        "pageSeq": 40819
    },
    {
        "IDcode": 40820,
        "title": "Lada Lyumos - Ashley (Resident Evil)",
        "cover": "https://telegra.ph/file/5e52f007f4d0959f95abd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40820",
        "pageSeq": 40820
    },
    {
        "IDcode": 40821,
        "title": "Hane Ame - Home Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/fd99205323eede7d6b0cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40821",
        "pageSeq": 40821
    },
    {
        "IDcode": 40822,
        "title": "Hane Ame - Comic Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/fd4f52c313bc421c8ded2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40822",
        "pageSeq": 40822
    },
    {
        "IDcode": 40823,
        "title": "Hane Ame - Gown Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/7b7ef4f3f167007642a1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40823",
        "pageSeq": 40823
    },
    {
        "IDcode": 40824,
        "title": "Hane Ame - Black Fubuki (One Punch Man)",
        "cover": "https://telegra.ph/file/a34f1fcb43f9e4fe424e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40824",
        "pageSeq": 40824
    },
    {
        "IDcode": 40826,
        "title": "Joyce - Dorothy (Nikke)",
        "cover": "https://telegra.ph/file/43213b41820dfb0bb2fa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40826",
        "pageSeq": 40826
    },
    {
        "IDcode": 40827,
        "title": "Aery Tiefling - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/491a306966770b3b53ab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40827",
        "pageSeq": 40827
    },
    {
        "IDcode": 40828,
        "title": "Byoru - Anis (Nikke)",
        "cover": "https://telegra.ph/file/b41ad380aa92a3413e6d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40828",
        "pageSeq": 40828
    },
    {
        "IDcode": 40829,
        "title": "Sayo Momo - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/0362eb5c3072208bd0934.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40829",
        "pageSeq": 40829
    },
    {
        "IDcode": 40830,
        "title": "Joyce - Marnie (Pokemon)",
        "cover": "https://telegra.ph/file/5fa586c198c6038ecf78b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40830",
        "pageSeq": 40830
    },
    {
        "IDcode": 40831,
        "title": "Hane Ame - Seki (Meridian Project)",
        "cover": "https://telegra.ph/file/85a80bf4d33a1bd0845ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40831",
        "pageSeq": 40831
    },
    {
        "IDcode": 40832,
        "title": "Vinnegal - Raiden Shogun (Genshin Impact)",
        "cover": "https://telegra.ph/file/d9590eacf9e8c66fa6f02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40832",
        "pageSeq": 40832
    },
    {
        "IDcode": 40833,
        "title": "Vinnegal - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/4f4e23fd5389b5f6b151d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40833",
        "pageSeq": 40833
    },
    {
        "IDcode": 40834,
        "title": "Hana Bunny - Meka Succubus Hana",
        "cover": "https://telegra.ph/file/3274f90107a74c4011901.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40834",
        "pageSeq": 40834
    },
    {
        "IDcode": 40835,
        "title": "Shui Miao Aqua - Gown Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/3f586cc0098f451ce25b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40835",
        "pageSeq": 40835
    },
    {
        "IDcode": 40836,
        "title": "Shui Miao Aqua - Bunny Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/d5d2542a069de341ddca9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40836",
        "pageSeq": 40836
    },
    {
        "IDcode": 40837,
        "title": "BANBANKO 半半子 – RED 赤紅 Vol.03",
        "cover": "https://telegra.ph/file/f8775892db26fdc48e3fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40837",
        "pageSeq": 40837
    },
    {
        "IDcode": 40838,
        "title": "Maria desu - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/9dcc9493362130aead6be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40838",
        "pageSeq": 40838
    },
    {
        "IDcode": 40839,
        "title": "小仓千代w Yummichiyo - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/4b83bfd0cc360df9ff08e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40839",
        "pageSeq": 40839
    },
    {
        "IDcode": 40840,
        "title": "Yoshinobi - Kokoro (Dead Or Alive)",
        "cover": "https://telegra.ph/file/473ac33a1fa8d8fc88750.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40840",
        "pageSeq": 40840
    },
    {
        "IDcode": 40841,
        "title": "Hidori Rose - Akane Shinjou (SSSS.gridman)",
        "cover": "https://telegra.ph/file/7f19650164cbd4763b7e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40841",
        "pageSeq": 40841
    },
    {
        "IDcode": 40842,
        "title": "Umeko J - Roxy (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/9d71845c1f3749d6ce295.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40842",
        "pageSeq": 40842
    },
    {
        "IDcode": 40843,
        "title": "Nekokoyoshi - Arturia (Fate Stay Night)",
        "cover": "https://telegra.ph/file/a9eb3428eb01ec0a00882.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40843",
        "pageSeq": 40843
    },
    {
        "IDcode": 40844,
        "title": "Sayo Momo - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/42309073d7ea16792e919.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40844",
        "pageSeq": 40844
    },
    {
        "IDcode": 40845,
        "title": "Okita Rinka - Yelan (Genshin Impact)",
        "cover": "https://telegra.ph/file/23e2164d52986a844eb8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40845",
        "pageSeq": 40845
    },
    {
        "IDcode": 40846,
        "title": "Joyce - Jett (Valorant)",
        "cover": "https://telegra.ph/file/38a5ca704b56e2628c57e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40846",
        "pageSeq": 40846
    },
    {
        "IDcode": 40847,
        "title": "Xidaidai - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/859bf5babd0a5bd75d175.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40847",
        "pageSeq": 40847
    },
    {
        "IDcode": 40848,
        "title": "Bambi - Diesel (Nikke)",
        "cover": "https://telegra.ph/file/4e7c06e3077acbc2de8d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40848",
        "pageSeq": 40848
    },
    {
        "IDcode": 40850,
        "title": "Angel chan - Maid Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/902f92ee1146cf248f351.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40850",
        "pageSeq": 40850
    },
    {
        "IDcode": 40851,
        "title": "Uri - Rizu-Kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/6e6639ef62bf0cb188a51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40851",
        "pageSeq": 40851
    },
    {
        "IDcode": 40852,
        "title": "Helly Valentine - Yor Forger Casual Selfies (Spy x Family)",
        "cover": "https://telegra.ph/file/bd528d9ba08754a3721dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40852",
        "pageSeq": 40852
    },
    {
        "IDcode": 40853,
        "title": "Yoshinobi - Uraraka Ochaco Halloween (Boku no hero academia)",
        "cover": "https://telegra.ph/file/477e2c0828adfce1b6c2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40853",
        "pageSeq": 40853
    }
];
