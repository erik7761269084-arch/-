// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 37902,
        "title": "Hana Bunny - Akane Shinjo (SSSS.Gridman)",
        "cover": "https://telegra.ph/file/af4dcff33fcc13dc3dc6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37902",
        "pageSeq": 37902
    },
    {
        "IDcode": 37903,
        "title": "Hana Bunny - Ahri Baddest Lencery/Swimsuit (League Of Legends/KDA)",
        "cover": "https://telegra.ph/file/b707d87dcf0dfd2e13d13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37903",
        "pageSeq": 37903
    },
    {
        "IDcode": 37904,
        "title": "Virtual Geisha - Misty (Pokémon)",
        "cover": "https://telegra.ph/file/10b64b941292492724149.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37904",
        "pageSeq": 37904
    },
    {
        "IDcode": 37905,
        "title": "Hana Bunny - Artoria/Saber Alter/Bunny (Fate Series/Fate Grand Order)",
        "cover": "https://telegra.ph/file/fbc09eb96e624d5de8345.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37905",
        "pageSeq": 37905
    },
    {
        "IDcode": 37906,
        "title": "Potato Godzilla - Asuna (Sword Art Online)",
        "cover": "https://telegra.ph/file/439415d41fa6da15df05a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37906",
        "pageSeq": 37906
    },
    {
        "IDcode": 37907,
        "title": "Mikomin Hokina - Esdeath (Akame Ga Kill)",
        "cover": "https://telegra.ph/file/07f3ea88c10bcc5a79753.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37907",
        "pageSeq": 37907
    },
    {
        "IDcode": 37908,
        "title": "Potato Godzilla - Swimsuit (Model)",
        "cover": "https://telegra.ph/file/8902b12a6b946e14bab74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37908",
        "pageSeq": 37908
    },
    {
        "IDcode": 37909,
        "title": "Peach Milky - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/a5404833a45992ae913ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37909",
        "pageSeq": 37909
    },
    {
        "IDcode": 37910,
        "title": "Hoshilily - Tsubaki (Blue Archive)",
        "cover": "https://telegra.ph/file/c5cdadd00db7e40f9aa6b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37910",
        "pageSeq": 37910
    },
    {
        "IDcode": 37911,
        "title": "Alina Becker - 2B (Nieraitomata)",
        "cover": "https://telegra.ph/file/e4847d6fb9a7cf4209608.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37911",
        "pageSeq": 37911
    },
    {
        "IDcode": 37912,
        "title": "Mikomin Hokina - Esdeath (Akame Ga Kill)",
        "cover": "https://telegra.ph/file/52e011285349ef9ed833a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37912",
        "pageSeq": 37912
    },
    {
        "IDcode": 37913,
        "title": "Queenie Chuppy - Princess Boo (Mario Bros)",
        "cover": "https://telegra.ph/file/26ad4fc352d1dcd7f486d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37913",
        "pageSeq": 37913
    },
    {
        "IDcode": 37914,
        "title": "Alina Becker - Ereshkigal (Fate Grand Order)",
        "cover": "https://telegra.ph/file/bb175e9ccbae801d8905d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37914",
        "pageSeq": 37914
    },
    {
        "IDcode": 37915,
        "title": "Hidori Rose - Roeisa (Original Character)",
        "cover": "https://telegra.ph/file/d347ec9aeb69fb1b48f72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37915",
        "pageSeq": 37915
    },
    {
        "IDcode": 37916,
        "title": "Ana Chu - Jeanne D'Arc Alter/Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ac8271442fb37ddffca86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37916",
        "pageSeq": 37916
    },
    {
        "IDcode": 37917,
        "title": "Hana Bunny - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/5d933ad830f52a4b0beae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37917",
        "pageSeq": 37917
    },
    {
        "IDcode": 37918,
        "title": "Shiro Kitsune - Chika Fujiwara (Kaguya Sama wa Kokurosetai)",
        "cover": "https://telegra.ph/file/436521e3ef5557cfbaabf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37918",
        "pageSeq": 37918
    },
    {
        "IDcode": 37919,
        "title": "Sarah Carvalho - Chika Fujiwara (Kaguya Sama wa Kokurosetai)",
        "cover": "https://telegra.ph/file/6d3f1a8f0da17be0a929d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37919",
        "pageSeq": 37919
    },
    {
        "IDcode": 37920,
        "title": "Yoshinobi - Chika Fujiwara (Kaguya Sama wa Kokurosetai)",
        "cover": "https://telegra.ph/file/30116c944451e7dd4a083.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37920",
        "pageSeq": 37920
    },
    {
        "IDcode": 37921,
        "title": "Lada Lyumos - L'envie retorn to Home (Final Fantasy)",
        "cover": "https://telegra.ph/file/bd0bf4ad1c9374bc305e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37921",
        "pageSeq": 37921
    },
    {
        "IDcode": 37922,
        "title": "Ying Tze - Nino Nakano (Go-Toubun no Hanayome)",
        "cover": "https://telegra.ph/file/f3f75c9b6edca8a3370fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37922",
        "pageSeq": 37922
    },
    {
        "IDcode": 37923,
        "title": "Momoko葵葵 - Dragon Nun Tower (Random Cosplay)",
        "cover": "https://telegra.ph/file/18b15d59f7c98cb01637c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37923",
        "pageSeq": 37923
    },
    {
        "IDcode": 37924,
        "title": "Minazuri Miri - Hinako Akuta (Fate Grand Order)",
        "cover": "https://telegra.ph/file/22f540a78c2673f1b7dba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37924",
        "pageSeq": 37924
    },
    {
        "IDcode": 37925,
        "title": "Hidori Rose - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/a9c1e7cdde57397f8765c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37925",
        "pageSeq": 37925
    },
    {
        "IDcode": 37926,
        "title": "Mikomin Hokina - Cinnamon (Nekopara)",
        "cover": "https://telegra.ph/file/10dc50eb7f50631dfd86e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37926",
        "pageSeq": 37926
    },
    {
        "IDcode": 37927,
        "title": "Hana Bunny - Secretary & No.18 (Dragon Ball)",
        "cover": "https://telegra.ph/file/d6572516dfa7a6dc66dd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37927",
        "pageSeq": 37927
    },
    {
        "IDcode": 37928,
        "title": "Rinka - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/ebd062777ed626d9c0911.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37928",
        "pageSeq": 37928
    },
    {
        "IDcode": 37929,
        "title": "Hidori Rose - BB Swimsuit ( Fate Grand Order)",
        "cover": "https://telegra.ph/file/14a5d8bd4396e6e2e9f67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37929",
        "pageSeq": 37929
    },
    {
        "IDcode": 37930,
        "title": "Momoko - Megumi Kato (Saenai Heroine)",
        "cover": "https://telegra.ph/file/546a6163407b3ac185033.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37930",
        "pageSeq": 37930
    },
    {
        "IDcode": 37931,
        "title": "G44不會受傷 - 多娜多娜   Dohna Dohna   (ドーナドーナ)",
        "cover": "https://telegra.ph/file/4087ce8bf38a132ac3140.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37931",
        "pageSeq": 37931
    },
    {
        "IDcode": 37932,
        "title": "Vandych - Black Hanekawa (Monogatari Series)",
        "cover": "https://telegra.ph/file/ecc6c44e652e6dae68272.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37932",
        "pageSeq": 37932
    },
    {
        "IDcode": 37933,
        "title": "MissWarmJ - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/4d385a5468615a02dd6de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37933",
        "pageSeq": 37933
    },
    {
        "IDcode": 37934,
        "title": "Lady Oichi - Mikasa Lencery (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/a0e1dfb6631542d3ecba0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37934",
        "pageSeq": 37934
    },
    {
        "IDcode": 37935,
        "title": "Hidori Rose - Saber  Blue Dress (Fate Stay Night)",
        "cover": "https://telegra.ph/file/60664b54352854b9edb4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37935",
        "pageSeq": 37935
    },
    {
        "IDcode": 37936,
        "title": "Mikomin Hokina - Cinnamon/Lencery (Nekopara)",
        "cover": "https://telegra.ph/file/a05cf8d7d7599a9941a36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37936",
        "pageSeq": 37936
    },
    {
        "IDcode": 37937,
        "title": "Ying Tze - Bowsette (Mario Bros)",
        "cover": "https://telegra.ph/file/739d9c3d05ee9ad583d7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37937",
        "pageSeq": 37937
    },
    {
        "IDcode": 37938,
        "title": "Chameleahn - Boosette (Mario Bros)",
        "cover": "https://telegra.ph/file/b5811864282f92c6a5ad5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37938",
        "pageSeq": 37938
    },
    {
        "IDcode": 37939,
        "title": "Hane Ame - Karyl/Swimsuit (Princess Connect)",
        "cover": "https://telegra.ph/file/ad089d3990442ccf27008.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37939",
        "pageSeq": 37939
    },
    {
        "IDcode": 37940,
        "title": "Hane Ame - Ghyslaine (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/157abbef157a93c87077f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37940",
        "pageSeq": 37940
    },
    {
        "IDcode": 37941,
        "title": "Hane Ame - Kiara KFC (Hololive)",
        "cover": "https://telegra.ph/file/46f3bd2b9e8f1591a8b50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37941",
        "pageSeq": 37941
    },
    {
        "IDcode": 37942,
        "title": "DJAWA - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/ad45c00d192036501cffb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37942",
        "pageSeq": 37942
    },
    {
        "IDcode": 37943,
        "title": "Djawa/Jenny - Chii (Chobits)",
        "cover": "https://telegra.ph/file/eafcb204b59d67437b955.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37943",
        "pageSeq": 37943
    },
    {
        "IDcode": 37944,
        "title": "Mimi Chan - Artoria Pendragon / Saber (Fate Grand Order)",
        "cover": "https://telegra.ph/file/9203502bd5444bce8681d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37944",
        "pageSeq": 37944
    },
    {
        "IDcode": 37945,
        "title": "Hidori Rose - Miku Maekawa (Idol Master)",
        "cover": "https://telegra.ph/file/355419c99db2640f368a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37945",
        "pageSeq": 37945
    },
    {
        "IDcode": 37946,
        "title": "Shui Miao - Shinano (Azur Lane)",
        "cover": "https://telegra.ph/file/012681aaecd70755acd79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37946",
        "pageSeq": 37946
    },
    {
        "IDcode": 37947,
        "title": "KuukoW - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/fae88705cf3730974fce1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37947",
        "pageSeq": 37947
    },
    {
        "IDcode": 37948,
        "title": "Hidori Rose - Sakura Matou (Fate Stay Night)",
        "cover": "https://telegra.ph/file/ee55f2b857e97174967e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37948",
        "pageSeq": 37948
    },
    {
        "IDcode": 37949,
        "title": "Hidori Rose - Sakura Matou (Fate Stay Night)",
        "cover": "https://telegra.ph/file/ee55f2b857e97174967e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37949",
        "pageSeq": 37949
    },
    {
        "IDcode": 37950,
        "title": "Hidori Rose / Mikomin Hokina / Virtual Geisha - Kasumigaoka Utaha / Megumi Kato / Eriri Spencer (Saenai Heroine)",
        "cover": "https://telegra.ph/file/8438e9daa421fac383eed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37950",
        "pageSeq": 37950
    },
    {
        "IDcode": 37951,
        "title": "Vinnegal - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/fe45d6f884007079e3fcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37951",
        "pageSeq": 37951
    },
    {
        "IDcode": 37952,
        "title": "Queenie Chuppy - Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/9397699a9544bba234765.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37952",
        "pageSeq": 37952
    },
    {
        "IDcode": 37953,
        "title": "KaYa Huang - Illustrious (Azur Lane)",
        "cover": "https://telegra.ph/file/561cc6fb198ae9a8b4b77.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37953",
        "pageSeq": 37953
    },
    {
        "IDcode": 37954,
        "title": "MissWarmJ - Tamamo (Fate Grand Order)",
        "cover": "https://telegra.ph/file/56c0ae6662b2b7544bc48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37954",
        "pageSeq": 37954
    },
    {
        "IDcode": 37955,
        "title": "樱桃喵 - Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/a3503ef536503d730e189.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37955",
        "pageSeq": 37955
    },
    {
        "IDcode": 37956,
        "title": "Beke Jacoba - Kasumi (Dead or Alive)",
        "cover": "https://telegra.ph/file/8c149540957c2b366a81e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37956",
        "pageSeq": 37956
    },
    {
        "IDcode": 37957,
        "title": "Beke Jacoba - Black Canary (DC Justice League)",
        "cover": "https://telegra.ph/file/b0e601c604658f715ec22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37957",
        "pageSeq": 37957
    },
    {
        "IDcode": 37958,
        "title": "Beke Jacoba - No.18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/15690d43b3285f9455085.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37958",
        "pageSeq": 37958
    },
    {
        "IDcode": 37959,
        "title": "Rioko - Nun/Lencery (Model)",
        "cover": "https://telegra.ph/file/1f33fb05770235c26f8b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37959",
        "pageSeq": 37959
    },
    {
        "IDcode": 37960,
        "title": "Chono Black - Ahegao",
        "cover": "https://telegra.ph/file/e00ac8a3023db414485f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37960",
        "pageSeq": 37960
    },
    {
        "IDcode": 37961,
        "title": "Hidori Rose & Virtual Geisha - Yuri Maids",
        "cover": "https://telegra.ph/file/9703667f0b1f499b6348c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37961",
        "pageSeq": 37961
    },
    {
        "IDcode": 37962,
        "title": "Mikomin Hokina - Cinnamon Maid (Nekopara)",
        "cover": "https://telegra.ph/file/d83f81a207809a369140d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37962",
        "pageSeq": 37962
    },
    {
        "IDcode": 37963,
        "title": "Kaya Huang - Altria/Saber (Fate Grand Order)",
        "cover": "https://telegra.ph/file/a2cdd456a3191ed6a3a2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37963",
        "pageSeq": 37963
    },
    {
        "IDcode": 37964,
        "title": "KaYa Huang - Jeanne D'Arc Alter/Bunny (Fate Grand Order)",
        "cover": "https://telegra.ph/file/283f3573c9818c7bf21dd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37964",
        "pageSeq": 37964
    },
    {
        "IDcode": 37965,
        "title": "Vinnegal - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/7cc99e159714f6d4de348.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37965",
        "pageSeq": 37965
    },
    {
        "IDcode": 37966,
        "title": "Vinnegal - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/6f37b2c56b7bd3529bb2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37966",
        "pageSeq": 37966
    },
    {
        "IDcode": 37967,
        "title": "Hidori Rose - Twintail (Original Character)",
        "cover": "https://telegra.ph/file/bda3aa14c1a637b0a4627.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37967",
        "pageSeq": 37967
    },
    {
        "IDcode": 37968,
        "title": "Alcololi - Misato Katsuragi (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/517c74e164479a8ebb58e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37968",
        "pageSeq": 37968
    },
    {
        "IDcode": 37969,
        "title": "Momoko - Altria/Saber (Fate Grand Order)",
        "cover": "https://telegra.ph/file/d8fa5c455ffb52b54ca95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37969",
        "pageSeq": 37969
    },
    {
        "IDcode": 37970,
        "title": "Lady Oichi - Paimon (Genshin Impact)",
        "cover": "https://telegra.ph/file/f6535525d863f62f45f64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37970",
        "pageSeq": 37970
    },
    {
        "IDcode": 37971,
        "title": "Hane Ame - Amelia Watson (Hololive)",
        "cover": "https://telegra.ph/file/af63fdf8ffc49c86d8137.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37971",
        "pageSeq": 37971
    },
    {
        "IDcode": 37972,
        "title": "Mikomin Hokina - Mary Saotome (Kakegurui)",
        "cover": "https://telegra.ph/file/76eeac35590d91f6b9283.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37972",
        "pageSeq": 37972
    },
    {
        "IDcode": 37973,
        "title": "Hidori Rose - Takao Race Queen (Azur Lane)",
        "cover": "https://telegra.ph/file/c2abb2f998da85abef4b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37973",
        "pageSeq": 37973
    },
    {
        "IDcode": 37974,
        "title": "Arty Huang - Takarada Rikka (SSSS.Gridman)",
        "cover": "https://telegra.ph/file/3900f4c1b2e0dcee13d8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37974",
        "pageSeq": 37974
    },
    {
        "IDcode": 37975,
        "title": "Shiro Kitsune - Ereshkigal/Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/81bb7afcaeaa6efb15718.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37975",
        "pageSeq": 37975
    },
    {
        "IDcode": 37976,
        "title": "Shiro Kitsune - Taihou (Azur Lane )",
        "cover": "https://telegra.ph/file/f6e05bd6fbee6c63a0e37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37976",
        "pageSeq": 37976
    },
    {
        "IDcode": 37977,
        "title": "Shiro Kitsune - School Girl (Cosplay Random)",
        "cover": "https://telegra.ph/file/396448306982beff4816d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37977",
        "pageSeq": 37977
    },
    {
        "IDcode": 37978,
        "title": "Shui Miao Aqua - Gangut (Azur Lane)",
        "cover": "https://telegra.ph/file/e6596dffb6d2df45019de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37978",
        "pageSeq": 37978
    },
    {
        "IDcode": 37979,
        "title": "Shui Miao Aqua - Elf (Elf Village)",
        "cover": "https://telegra.ph/file/084ea498e0c473e885c0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37979",
        "pageSeq": 37979
    },
    {
        "IDcode": 37980,
        "title": "Shui Miao Aqua - Elf (Elf Village)",
        "cover": "https://telegra.ph/file/10d7b98153bd9f9d45a97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37980",
        "pageSeq": 37980
    },
    {
        "IDcode": 37981,
        "title": "Shui Miao - Elsa (Re Zero)",
        "cover": "https://telegra.ph/file/dcc8fdee7843e16910692.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37981",
        "pageSeq": 37981
    },
    {
        "IDcode": 37982,
        "title": "DJAWA/Bambi - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/c062d9e6a4aa79a8ee980.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37982",
        "pageSeq": 37982
    },
    {
        "IDcode": 37983,
        "title": "DJAWA/Bambi - 2B - S (Nier Automata)",
        "cover": "https://telegra.ph/file/793892ffdddbfbe7cbe42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37983",
        "pageSeq": 37983
    },
    {
        "IDcode": 37984,
        "title": "EunSuk恩率 - Mai Shiranui (The King of Fighters)",
        "cover": "https://telegra.ph/file/53dccfe7673a3ea060347.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37984",
        "pageSeq": 37984
    },
    {
        "IDcode": 37985,
        "title": "UyUy - Samsung Chan (Cosplay Random)",
        "cover": "https://telegra.ph/file/4b6c55a3798c4ba026928.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37985",
        "pageSeq": 37985
    },
    {
        "IDcode": 37986,
        "title": "ZhuKeer朱可儿 - Mai Shiranui (The King of Fighters)",
        "cover": "https://telegra.ph/file/be2d35c41f379629b1254.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37986",
        "pageSeq": 37986
    },
    {
        "IDcode": 37987,
        "title": "Rioko - Gneisenau (Azur Lane)",
        "cover": "https://telegra.ph/file/c0fb0227b573fda34d37b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37987",
        "pageSeq": 37987
    },
    {
        "IDcode": 37988,
        "title": "Bambi - Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/a4c0a72df58ca6a173c0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37988",
        "pageSeq": 37988
    },
    {
        "IDcode": 37989,
        "title": "MissWarmJ - SpiderWen (Spiderman)",
        "cover": "https://telegra.ph/file/231308f7915fc8eec7e73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37989",
        "pageSeq": 37989
    },
    {
        "IDcode": 37990,
        "title": "MissWarmJ - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/52758663b2b3892922c02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37990",
        "pageSeq": 37990
    },
    {
        "IDcode": 37991,
        "title": "MissWarmJ - Asuka (Neon Génesis Evangelion)",
        "cover": "https://telegra.ph/file/d3ef7646c0f35458df7e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37991",
        "pageSeq": 37991
    },
    {
        "IDcode": 37992,
        "title": "Ryuu Lavitz - Zero Suit Samus (Smash Ultimate)",
        "cover": "https://telegra.ph/file/0db0262da7f83ae460c41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37992",
        "pageSeq": 37992
    },
    {
        "IDcode": 37993,
        "title": "Hidori Rose - Black Cat Maid",
        "cover": "https://telegra.ph/file/ae5a405d099f3fd8f1cc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37993",
        "pageSeq": 37993
    },
    {
        "IDcode": 37994,
        "title": "Queenie Chuppy - Rin Tohsaka Succubus",
        "cover": "https://telegra.ph/file/633e971b7924a253206c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37994",
        "pageSeq": 37994
    },
    {
        "IDcode": 37995,
        "title": "Shui Miao - Mirasaki Shikibu (Fate Grand Order)",
        "cover": "https://telegra.ph/file/429fae3defad656b956be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37995",
        "pageSeq": 37995
    },
    {
        "IDcode": 37996,
        "title": "MissWarmJ - 2B/Bat Halloween (Nier Autómata)",
        "cover": "https://telegra.ph/file/16ea07fd25068754df544.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37996",
        "pageSeq": 37996
    },
    {
        "IDcode": 37997,
        "title": "Ping Ping - Jean Bart Racing (Azur Lane)",
        "cover": "https://telegra.ph/file/ca3636e85655c07087a22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37997",
        "pageSeq": 37997
    },
    {
        "IDcode": 37998,
        "title": "Virtual Geisha - Weiss (RWBY)",
        "cover": "https://telegra.ph/file/2f6ff361c455bd8e32de2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37998",
        "pageSeq": 37998
    },
    {
        "IDcode": 37999,
        "title": "Mikomin Hokina - Scathach/Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/c893ff2637f05c7780c50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37999",
        "pageSeq": 37999
    },
    {
        "IDcode": 38000,
        "title": "Hidori Rose - Gamer (Original Character)",
        "cover": "https://telegra.ph/file/0dced2768331d0eeff255.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38000",
        "pageSeq": 38000
    },
    {
        "IDcode": 38001,
        "title": "Shimo - Maid (Random Cosplay)",
        "cover": "https://telegra.ph/file/1e5ed5394ad0a24c09398.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38001",
        "pageSeq": 38001
    }
];
