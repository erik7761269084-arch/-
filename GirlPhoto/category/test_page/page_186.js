// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 40647,
        "title": "Fatiao Liii 迷之呆梨 - 食べますか？",
        "cover": "https://telegra.ph/file/08b7f77ce9f222c6129be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40647",
        "pageSeq": 40647
    },
    {
        "IDcode": 40648,
        "title": "Mikomin - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/7db3550c2e2960e667fb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40648",
        "pageSeq": 40648
    },
    {
        "IDcode": 40649,
        "title": "Mikomin - Nico Robin (One Piece)",
        "cover": "https://telegra.ph/file/85e58da993adaf22230a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40649",
        "pageSeq": 40649
    },
    {
        "IDcode": 40650,
        "title": "蠢沫沫 Chunmomo – 光 Luz",
        "cover": "https://telegra.ph/file/45d6fec084282dd8ef74a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40650",
        "pageSeq": 40650
    },
    {
        "IDcode": 40651,
        "title": "Alina Becker - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/171700a1742a24e14fbbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40651",
        "pageSeq": 40651
    },
    {
        "IDcode": 40652,
        "title": "Vinnegal - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/2e0114cc53aa8f79a8c6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40652",
        "pageSeq": 40652
    },
    {
        "IDcode": 40653,
        "title": "Helly Valentine - D.Va (Overwatch)",
        "cover": "https://telegra.ph/file/97592b374d7f225b1c9b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40653",
        "pageSeq": 40653
    },
    {
        "IDcode": 40654,
        "title": "Mikomin & Mikomi Hokina - Mavis & Wednesday/Merlina (Hotel Transilvania & The  Addams Family)",
        "cover": "https://telegra.ph/file/a740776201118b7dfc328.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40654",
        "pageSeq": 40654
    },
    {
        "IDcode": 40655,
        "title": "朱可儿Flora - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/f9c1331d3b17b114bf40c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40655",
        "pageSeq": 40655
    },
    {
        "IDcode": 40656,
        "title": "Vinnegal - Kitagawa Marin Bikini II (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/bb092bedfcd216a7b67cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40656",
        "pageSeq": 40656
    },
    {
        "IDcode": 40657,
        "title": "Helly Valentine - Ann Takamaki (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/89c0f25f6d7108da7b3d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40657",
        "pageSeq": 40657
    },
    {
        "IDcode": 40658,
        "title": "Tokar 浵卡 - Nazuna (Yufukashi no Uta)",
        "cover": "https://telegra.ph/file/8e4bb83b604d43d067d4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40658",
        "pageSeq": 40658
    },
    {
        "IDcode": 40659,
        "title": "Asagi Kawai - Rebecca (Cyberpunk)",
        "cover": "https://telegra.ph/file/c37b5f91463d9784c9092.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40659",
        "pageSeq": 40659
    },
    {
        "IDcode": 40660,
        "title": "Fantasy Factory - Sena (Boku Wa Tomodachi Ga Sukunai)",
        "cover": "https://telegra.ph/file/309b8b0510b138d3b42d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40660",
        "pageSeq": 40660
    },
    {
        "IDcode": 40661,
        "title": "Ben dan xue jie 笨蛋学姐 - Gatubela Blanca 白猫女",
        "cover": "https://telegra.ph/file/89acdb6b15695479191d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40661",
        "pageSeq": 40661
    },
    {
        "IDcode": 40662,
        "title": "Qianqian Jiang w 芊芊酱w - 猫耳体操服私房",
        "cover": "https://telegra.ph/file/066faff87c8ae1d41f69c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40662",
        "pageSeq": 40662
    },
    {
        "IDcode": 40663,
        "title": "Asagiriai 愛ちゃん - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/35e259f90f604924fef8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40663",
        "pageSeq": 40663
    },
    {
        "IDcode": 40664,
        "title": "Alina Becker - Motoko Kusanagi (Ghost In The Shell)",
        "cover": "https://telegra.ph/file/4e73889197d71f72c08d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40664",
        "pageSeq": 40664
    },
    {
        "IDcode": 40665,
        "title": "愛ちゃん Asagiriai - Toki トキちゃん (Blue Archive)",
        "cover": "https://telegra.ph/file/33aa0e9b8bb2763970eea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40665",
        "pageSeq": 40665
    },
    {
        "IDcode": 40666,
        "title": "Shiroi 白井茶茶 - 碧蓝航线 英仙座护士 Perseus (Azur Lane)",
        "cover": "https://telegra.ph/file/13e460d8f11de0215686d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40666",
        "pageSeq": 40666
    },
    {
        "IDcode": 40667,
        "title": "Joyce - Kafka (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/910d80fac9df2b2b886ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40667",
        "pageSeq": 40667
    },
    {
        "IDcode": 40668,
        "title": "Alina Becker - Nami (One Pice)",
        "cover": "https://telegra.ph/file/37b29c1bb07691f5ed848.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40668",
        "pageSeq": 40668
    },
    {
        "IDcode": 40669,
        "title": "Yoshinobi - Wiz (Konosuba)",
        "cover": "https://telegra.ph/file/2d0d8b18262017cb86a5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40669",
        "pageSeq": 40669
    },
    {
        "IDcode": 40670,
        "title": "Yoshinobi - Yunyun (Konosuba)",
        "cover": "https://telegra.ph/file/8b99e46e20aafb1ade90d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40670",
        "pageSeq": 40670
    },
    {
        "IDcode": 40671,
        "title": "Hidori Rose - Hoshino Ai (Oshi No Ko)",
        "cover": "https://telegra.ph/file/c1884a503a2d0989d3a4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40671",
        "pageSeq": 40671
    },
    {
        "IDcode": 40672,
        "title": "Lady Melamori - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/6b38577ffb582a5e8b035.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40672",
        "pageSeq": 40672
    },
    {
        "IDcode": 40673,
        "title": "Alina Becker - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/fda732bce036ae2716da0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40673",
        "pageSeq": 40673
    },
    {
        "IDcode": 40674,
        "title": "Alina Becker - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/1efafe90166468e4d18b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40674",
        "pageSeq": 40674
    },
    {
        "IDcode": 40675,
        "title": "Aery Tiefling - Boa Hancock (One Pice)",
        "cover": "https://telegra.ph/file/e51caa670d1eacbc1f0d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40675",
        "pageSeq": 40675
    },
    {
        "IDcode": 40676,
        "title": "Fantasy Factory - Shimakaze (Kantai Collection)",
        "cover": "https://telegra.ph/file/c8dcac5aacfd5a3f9ed73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40676",
        "pageSeq": 40676
    },
    {
        "IDcode": 40677,
        "title": "Joyce - Silver Wolf (Honkai Star)",
        "cover": "https://telegra.ph/file/d877b9cc74613bb4682ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40677",
        "pageSeq": 40677
    },
    {
        "IDcode": 40678,
        "title": "Byoru - Power Rongfit (Chainsaw Man)",
        "cover": "https://telegra.ph/file/fcf81097471cc081a00a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40678",
        "pageSeq": 40678
    },
    {
        "IDcode": 40679,
        "title": "Hane Ame - 沖繩扶桑花",
        "cover": "https://telegra.ph/file/6cd59979a2950576f79a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40679",
        "pageSeq": 40679
    },
    {
        "IDcode": 40680,
        "title": "Hane Ame - Hanekawa Hasumi (Blue Archive)",
        "cover": "https://telegra.ph/file/1042c043e5bf8d4b4d47f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40680",
        "pageSeq": 40680
    },
    {
        "IDcode": 40683,
        "title": "Joyce - Pom Pom (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/697c0da326464c7f1659b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40683",
        "pageSeq": 40683
    },
    {
        "IDcode": 40684,
        "title": "Nikumikyo - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/4784a42980d764ca69cc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40684",
        "pageSeq": 40684
    },
    {
        "IDcode": 40685,
        "title": "Hane Ame - Cecilia (Mobile Suit Gundam The Witch From Mercury)",
        "cover": "https://telegra.ph/file/b77daf4b9b0389f1232a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40685",
        "pageSeq": 40685
    },
    {
        "IDcode": 40686,
        "title": "Hane Ame - Killjoy (Valorant)",
        "cover": "https://telegra.ph/file/80f5a7cbd1701dd036cbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40686",
        "pageSeq": 40686
    },
    {
        "IDcode": 40687,
        "title": "Shui Miao Aqua - Asuma Toki (Blue Archive)",
        "cover": "https://telegra.ph/file/2e74349a5b27108ba55c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40687",
        "pageSeq": 40687
    },
    {
        "IDcode": 40688,
        "title": "Lera Himera - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/6132b203620e9ad2229b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40688",
        "pageSeq": 40688
    },
    {
        "IDcode": 40689,
        "title": "Potato Godzilla - MP7 (Girls Frontline)",
        "cover": "https://telegra.ph/file/aa4244aefed523acee442.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40689",
        "pageSeq": 40689
    },
    {
        "IDcode": 40690,
        "title": "Potato Godzilla - Tifa Lockhart Remake (Final Fantasy)",
        "cover": "https://telegra.ph/file/30529dd531ad6ba8a131e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40690",
        "pageSeq": 40690
    },
    {
        "IDcode": 40691,
        "title": "Yoshinobi - Uzaki (Uzaki-chan)",
        "cover": "https://telegra.ph/file/023ee9c99dcf2939cd783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40691",
        "pageSeq": 40691
    },
    {
        "IDcode": 40692,
        "title": "蠢沫沫 Chunmomo -  车内白虎",
        "cover": "https://telegra.ph/file/36c587bf90c097aa140ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40692",
        "pageSeq": 40692
    },
    {
        "IDcode": 40693,
        "title": "Uri - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/427d6bad775381084f8d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40693",
        "pageSeq": 40693
    },
    {
        "IDcode": 40694,
        "title": "Asagi - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/2e87e3ab10e0a922ee484.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40694",
        "pageSeq": 40694
    },
    {
        "IDcode": 40695,
        "title": "Joyce - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/c5f35283808d1a320981c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40695",
        "pageSeq": 40695
    },
    {
        "IDcode": 40696,
        "title": "Fantasy Factory - ネコメイド Neko Maid",
        "cover": "https://telegra.ph/file/b20926ab0cde4c4901ee7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40696",
        "pageSeq": 40696
    },
    {
        "IDcode": 40697,
        "title": "Hana Bunny - Ironmouse (Hololive)",
        "cover": "https://telegra.ph/file/6792c68020c59cfe5ec16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40697",
        "pageSeq": 40697
    },
    {
        "IDcode": 40698,
        "title": "Mikomin - Succubus",
        "cover": "https://telegra.ph/file/69881a4e4103e83caaf0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40698",
        "pageSeq": 40698
    },
    {
        "IDcode": 40699,
        "title": "Azami - Zelda (The Legend Of Zelda)",
        "cover": "https://telegra.ph/file/195893e9332565694b790.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40699",
        "pageSeq": 40699
    },
    {
        "IDcode": 40700,
        "title": "Donna Loli - Shimakaze (Kantai Collection)",
        "cover": "https://telegra.ph/file/dbae55bfa7bde1cb2dd10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40700",
        "pageSeq": 40700
    },
    {
        "IDcode": 40701,
        "title": "愛ちゃん Asagiriai - Rem (Re Zero)",
        "cover": "https://telegra.ph/file/6f21508c68984d9c11670.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40701",
        "pageSeq": 40701
    },
    {
        "IDcode": 40702,
        "title": "Asagi - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/cc6f04f5854cc3d9f5a67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40702",
        "pageSeq": 40702
    },
    {
        "IDcode": 40703,
        "title": "Alina Becker - Lady Tsunade (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/a06b0600e3bfea1b25254.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40703",
        "pageSeq": 40703
    },
    {
        "IDcode": 40704,
        "title": "Big Titty Goth Egg -  Velma (Scooby Doo)",
        "cover": "https://telegra.ph/file/6050eba6b4fb203b6efb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40704",
        "pageSeq": 40704
    },
    {
        "IDcode": 40705,
        "title": "Fantasy Factory - Viper (Nikke)",
        "cover": "https://telegra.ph/file/50081b414cbac9e42211b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40705",
        "pageSeq": 40705
    },
    {
        "IDcode": 40706,
        "title": "Aery Tiefling - Shadowheart (Baldur's Gate 3)",
        "cover": "https://telegra.ph/file/5d6db7e20188d474310d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40706",
        "pageSeq": 40706
    },
    {
        "IDcode": 40707,
        "title": "Sakurai 桜井宁宁 - JK的秘密X蜡烛",
        "cover": "https://telegra.ph/file/a6a49b59bcf6cd72518cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40707",
        "pageSeq": 40707
    },
    {
        "IDcode": 40708,
        "title": "Arisohma Kato - Sawako Kuronuma (Kimi Ni Todoke)",
        "cover": "https://telegra.ph/file/4cd6b939de4d3d2dc4da9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40708",
        "pageSeq": 40708
    },
    {
        "IDcode": 40709,
        "title": "Joyce - Cynthia (Pokemon)",
        "cover": "https://telegra.ph/file/df7300cfdf82584b40de5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40709",
        "pageSeq": 40709
    },
    {
        "IDcode": 40710,
        "title": "Ayaka Cosplay - Kinako",
        "cover": "https://telegra.ph/file/313bd19c1ae2218638c7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40710",
        "pageSeq": 40710
    },
    {
        "IDcode": 40711,
        "title": "Vinnegal - Asa Mitaka (Chainsaw Man)",
        "cover": "https://telegra.ph/file/bc298675d0918c0da0e52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40711",
        "pageSeq": 40711
    },
    {
        "IDcode": 40712,
        "title": "Yuzupyon - Nerdy GF",
        "cover": "https://telegra.ph/file/975add50d7a509a15d081.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40712",
        "pageSeq": 40712
    },
    {
        "IDcode": 40713,
        "title": "Neyrodesu - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/f963fbccefd925a774098.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40713",
        "pageSeq": 40713
    },
    {
        "IDcode": 40714,
        "title": "Nekokoyoshi 爆机少女喵小吉 - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/073f7a11f7008fbc63bd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40714",
        "pageSeq": 40714
    },
    {
        "IDcode": 40715,
        "title": "Xidaidai 习呆呆 - Hitori Gotoh (Bocchi The Rock)",
        "cover": "https://telegra.ph/file/5a2b2e2ca5979c078eef6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40715",
        "pageSeq": 40715
    },
    {
        "IDcode": 40716,
        "title": "软萌兔兔酱 - Nahida (Genshin Impact)",
        "cover": "https://telegra.ph/file/9db35de6a4922bc97d0fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40716",
        "pageSeq": 40716
    },
    {
        "IDcode": 40717,
        "title": "Caticornplay - Yuzuriha (Jigokuraku)",
        "cover": "https://telegra.ph/file/a5b03fc9b8e80e9944678.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40717",
        "pageSeq": 40717
    },
    {
        "IDcode": 40718,
        "title": "爆机少女喵小吉 Nekokoyoshi - 电锯人 玛奇玛 Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/73c8539989c5c993a2568.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40718",
        "pageSeq": 40718
    },
    {
        "IDcode": 40720,
        "title": "Rocksy Light - Marin Kitagawa (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/69c1315ea7bd5bb5f6ab4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40720",
        "pageSeq": 40720
    },
    {
        "IDcode": 40721,
        "title": "Fantasy Factory - Maid Bunny",
        "cover": "https://telegra.ph/file/7bc148c7fc0474a1ef4b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40721",
        "pageSeq": 40721
    },
    {
        "IDcode": 40722,
        "title": "Mikomin - Maid 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c7e8635e93d0ae394f409.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40722",
        "pageSeq": 40722
    },
    {
        "IDcode": 40723,
        "title": "Choi Ji Yun - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/ff9296bd4818bd3094dcc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40723",
        "pageSeq": 40723
    },
    {
        "IDcode": 40724,
        "title": "Yoshinobi - Riamu Yumei (Idol Master)",
        "cover": "https://telegra.ph/file/fbf44e9113256d1cd36a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40724",
        "pageSeq": 40724
    },
    {
        "IDcode": 40725,
        "title": "Yoshinobi - Riamu Yumei (Idol Master)",
        "cover": "https://telegra.ph/file/06a8f929e11c37a32d458.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40725",
        "pageSeq": 40725
    },
    {
        "IDcode": 40726,
        "title": "幼愛 Youmeko - 天乃莉莉纱 Ririsa (2.5 jigen no yuuwaku)",
        "cover": "https://telegra.ph/file/5d3215c2b0d595b9324f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40726",
        "pageSeq": 40726
    },
    {
        "IDcode": 40727,
        "title": "Fantasy Factory - Rin (Fate Stay Night)",
        "cover": "https://telegra.ph/file/82dcaad2bedf447551ff0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40727",
        "pageSeq": 40727
    },
    {
        "IDcode": 40728,
        "title": "Byoru - Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/82d3ae3db9089e49f0cb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40728",
        "pageSeq": 40728
    },
    {
        "IDcode": 40729,
        "title": "Hana Bunny - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/5e0b1b4e8537e0718e358.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40729",
        "pageSeq": 40729
    },
    {
        "IDcode": 40730,
        "title": "Melamori - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/bc31cfbea38c23818abdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40730",
        "pageSeq": 40730
    },
    {
        "IDcode": 40731,
        "title": "Bishoujomom - Lila Test (Johnny Test)",
        "cover": "https://telegra.ph/file/487c945cbf4512b28fae3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40731",
        "pageSeq": 40731
    },
    {
        "IDcode": 40732,
        "title": "Natsuko 夏夏子 - 祈愿巫女",
        "cover": "https://telegra.ph/file/5bb3793159405d11346b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40732",
        "pageSeq": 40732
    },
    {
        "IDcode": 40733,
        "title": "Helly Valentine - Velma (Scooby Doo)",
        "cover": "https://telegra.ph/file/01bcd898ffe8df536b6b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40733",
        "pageSeq": 40733
    },
    {
        "IDcode": 40734,
        "title": "Lady Melamori - The Twins (Atomic Heart)",
        "cover": "https://telegra.ph/file/32aea6f12f8ccc5496838.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40734",
        "pageSeq": 40734
    },
    {
        "IDcode": 40735,
        "title": "抱走莫子aa - Baltimore (Azur Lane)",
        "cover": "https://telegra.ph/file/dd5b72c588d081564198d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40735",
        "pageSeq": 40735
    },
    {
        "IDcode": 40736,
        "title": "Nana Kuronoma - Cindy (Final Fantasy)",
        "cover": "https://telegra.ph/file/3916cd209a31ac6468a7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40736",
        "pageSeq": 40736
    },
    {
        "IDcode": 40738,
        "title": "蠢沫沫 Chunmomo - 夏",
        "cover": "https://telegra.ph/file/0050bdf5f4a939ebfb6f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40738",
        "pageSeq": 40738
    },
    {
        "IDcode": 40739,
        "title": "Helly Valentine - Lady Dimitrescu (Resident Evil)",
        "cover": "https://telegra.ph/file/bf38eababb2d131b5d418.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40739",
        "pageSeq": 40739
    },
    {
        "IDcode": 40740,
        "title": "Asagiri Ai - Yae Miko (Genshin Impacto)",
        "cover": "https://telegra.ph/file/28991791052ba38cc08cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40740",
        "pageSeq": 40740
    },
    {
        "IDcode": 40741,
        "title": "Alina Becker - Kobeni (Chainsaw Man)",
        "cover": "https://telegra.ph/file/0e096d2da358338c2d0a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40741",
        "pageSeq": 40741
    },
    {
        "IDcode": 40742,
        "title": "Potato Godzilla - Reze (Chainsaw Man)",
        "cover": "https://telegra.ph/file/68a347a85749127b1e216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40742",
        "pageSeq": 40742
    },
    {
        "IDcode": 40743,
        "title": "Jenny - Rapi (Nikke)",
        "cover": "https://telegra.ph/file/262c20205237a4b8050e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40743",
        "pageSeq": 40743
    },
    {
        "IDcode": 40744,
        "title": "Xidaidai - Kirara (Genshin Impact)",
        "cover": "https://telegra.ph/file/fcff1fa8900b8c028f6aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40744",
        "pageSeq": 40744
    },
    {
        "IDcode": 40745,
        "title": "Yoshinobi - Riamu Yumei (Idol Master)",
        "cover": "https://telegra.ph/file/e09a841faef0823e0f6b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40745",
        "pageSeq": 40745
    },
    {
        "IDcode": 40746,
        "title": "Fantasy Factory & Okita Rinka - Devilish Girl Rumiru & Lilith (Mataro)",
        "cover": "https://telegra.ph/file/7aba3e0eac88ddea5de34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40746",
        "pageSeq": 40746
    },
    {
        "IDcode": 40747,
        "title": "Byoru - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/b73226abb56cc82e52bdd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40747",
        "pageSeq": 40747
    },
    {
        "IDcode": 40748,
        "title": "Aery Tiefling - March 7th (Honkai Star Rail)",
        "cover": "https://telegra.ph/file/55bbb0be1a393acbceb03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40748",
        "pageSeq": 40748
    },
    {
        "IDcode": 40749,
        "title": "Shirogane Sama - Gwen Bikini (Spider-man)",
        "cover": "https://telegra.ph/file/967b9c804e16acc7ed96a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40749",
        "pageSeq": 40749
    },
    {
        "IDcode": 40750,
        "title": "Milena Dereka - Holo (Spice and Wolf)",
        "cover": "https://telegra.ph/file/c02647ac850f35fcd7305.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=40750",
        "pageSeq": 40750
    }
];
