// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 41868,
        "title": "起司块wii - Yelan (Genshin Impact)",
        "cover": "https://i.ibb.co/Fk0d1vXr/01-compress72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41868",
        "pageSeq": 41868
    },
    {
        "IDcode": 41869,
        "title": "Hana Bunny - Masamichie OC",
        "cover": "https://i.ibb.co/gLyCsxfH/01-1-compress46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41869",
        "pageSeq": 41869
    },
    {
        "IDcode": 41870,
        "title": "Potato Godzilla - Black Swan (Honkai Star Rail)",
        "cover": "https://i.ibb.co/ZpJhtkD2/01-Potato-Godzilla-Black-Swan-Honkai-Star-Rail-1-compress17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41870",
        "pageSeq": 41870
    },
    {
        "IDcode": 41871,
        "title": "Joyce - Kasumi (Dead Or Alive)",
        "cover": "https://i.ibb.co/ZRYyN0zy/01-Grid-Art-20220430-095537267-compress88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41871",
        "pageSeq": 41871
    },
    {
        "IDcode": 41872,
        "title": "抱走莫子aa - Asuma Toki (Blue Archive)",
        "cover": "https://i.ibb.co/cK3Yr3ry/001-compress23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41872",
        "pageSeq": 41872
    },
    {
        "IDcode": 41873,
        "title": "Byoru – Momo Ayase (Dandadan) Pictures",
        "cover": "https://i.ibb.co/wZjY8p1g/01-Byoru-cosplay-Momo-Ayase-Dandadan-1-compress32.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41873",
        "pageSeq": 41873
    },
    {
        "IDcode": 41874,
        "title": "Byoru - Seiko Ayase (Dandadan)",
        "cover": "https://i.ibb.co/zWp9Knkq/Seiko-Ayase-HD00-compress76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41874",
        "pageSeq": 41874
    },
    {
        "IDcode": 41875,
        "title": "Mik Allen & Alcoholy - Panty & Stocking (Panty and Stocking with Garterbelt)",
        "cover": "https://i.ibb.co/rKdGFYdY/01-2-compress80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41875",
        "pageSeq": 41875
    },
    {
        "IDcode": 41876,
        "title": "PoppaChan - Nozomi & Hikari Tachibana (Blue Archive)",
        "cover": "https://i.ibb.co/v4Fw9MNB/01-Poppa-Chan-cosplay-Tachibana-Hikari-and-Tachibana-Nozomi-Blue-Archive-1-compress35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41876",
        "pageSeq": 41876
    },
    {
        "IDcode": 41877,
        "title": "KANEKO - Succubus",
        "cover": "https://i.ibb.co/xqg2B3GQ/001-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41877",
        "pageSeq": 41877
    },
    {
        "IDcode": 41878,
        "title": "Chono Black - Bready (Nikke)",
        "cover": "https://i.ibb.co/1fX8QpSy/01-bia-compress18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41878",
        "pageSeq": 41878
    },
    {
        "IDcode": 41879,
        "title": "小和甜酒 - Phoboe (Wuthering Waves)",
        "cover": "https://i.ibb.co/C3y9wCZp/01-1-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41879",
        "pageSeq": 41879
    },
    {
        "IDcode": 41880,
        "title": "Hokunaimeko - Shenhe (Genshin Impact)",
        "cover": "https://i.ibb.co/r20ZJs38/Hokunaimeko-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41880",
        "pageSeq": 41880
    },
    {
        "IDcode": 41881,
        "title": "Potato Godzilla - Robin (Honkai Star Rail)",
        "cover": "https://i.ibb.co/MxWw15FN/Potato-Godzilla-Robin-HSR-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41881",
        "pageSeq": 41881
    },
    {
        "IDcode": 41882,
        "title": "Minichu - Eula (Genshin Impact)",
        "cover": "https://i.ibb.co/bj8jgTX2/Minichu-cosplay-Eula-Genshin-Impact-1-compress39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41882",
        "pageSeq": 41882
    },
    {
        "IDcode": 41883,
        "title": "桜井宁宁 Sakuri Ning Ning  - Fern (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/93bf3WZd/01-compress95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41883",
        "pageSeq": 41883
    },
    {
        "IDcode": 41884,
        "title": "绞肉姬 - Jane Doe (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/pChSgb1/01-compress34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41884",
        "pageSeq": 41884
    },
    {
        "IDcode": 41885,
        "title": "麻花麻花酱 Makachan - 兽耳和服 Kemonomimi",
        "cover": "https://i.ibb.co/Wv7n8Mw1/Mahua-Mahua-Jiang-001-compress29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41885",
        "pageSeq": 41885
    },
    {
        "IDcode": 41886,
        "title": "Sayo Momo - Castorice (Honkai Star Rail)",
        "cover": "https://i.ibb.co/jPqwVKng/001-compress4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41886",
        "pageSeq": 41886
    },
    {
        "IDcode": 41887,
        "title": "Umeko J - Yor Forger (Spy x Family)",
        "cover": "https://i.ibb.co/C3t6R8gV/001-banner-compress36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41887",
        "pageSeq": 41887
    },
    {
        "IDcode": 41888,
        "title": "Saya the Fox - Esdeath (Akame Ga Kill)",
        "cover": "https://i.ibb.co/xKmj964p/01-1-compress70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41888",
        "pageSeq": 41888
    },
    {
        "IDcode": 41889,
        "title": "Yukina-Takao Ka (Kantai Collection)",
        "cover": "https://i.ibb.co/ZzKPcb03/001-001-compress38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41889",
        "pageSeq": 41889
    },
    {
        "IDcode": 41890,
        "title": "Yukina - Kashima-san-re (Kantai Collection)",
        "cover": "https://i.ibb.co/5gDbfZhp/001-1-compress26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41890",
        "pageSeq": 41890
    },
    {
        "IDcode": 41891,
        "title": "Carrykey - Gwen Stacy (Spider-Man)",
        "cover": "https://i.ibb.co/DfQsTyXm/01-Carry-Key-Gwen-Stacy-School-Girl-1-compress67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41891",
        "pageSeq": 41891
    },
    {
        "IDcode": 41892,
        "title": "蠢沫沫 Chunmomo - Kafka (Honkai Star Rail)",
        "cover": "https://i.ibb.co/d41L90yW/001-compress94.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41892",
        "pageSeq": 41892
    },
    {
        "IDcode": 41893,
        "title": "Xidaidai 习呆呆 - hyacine (Honkai Star Rail)",
        "cover": "https://i.ibb.co/Jw7gZxwW/01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41893",
        "pageSeq": 41893
    },
    {
        "IDcode": 41894,
        "title": "Mamyouu - Mai (King Of Fighters)",
        "cover": "https://i.ibb.co/vvRSN4Ty/01-Mamyouu-Mai-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41894",
        "pageSeq": 41894
    },
    {
        "IDcode": 41895,
        "title": "Oichi - Mai Shiranui Casual (King Of Fighters)",
        "cover": "https://i.ibb.co/q35CNLXV/01-Mai-casual-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41895",
        "pageSeq": 41895
    },
    {
        "IDcode": 41896,
        "title": "咬一口兔娘 Niantutu - Mai Shiranui (King Of Fighters)",
        "cover": "https://i.ibb.co/1GJ0L43S/Niantutu-003-compress7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41896",
        "pageSeq": 41896
    },
    {
        "IDcode": 41897,
        "title": "Alina Becker - Mai Shiranui (King Of Fighters)",
        "cover": "https://i.ibb.co/v4zr0w4t/Alina-Becker-Mai-Shiranui-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41897",
        "pageSeq": 41897
    },
    {
        "IDcode": 41898,
        "title": "Tiny Asa - Mai Shiranui (King Of Fighters)",
        "cover": "https://i.ibb.co/LdNtGdzH/01-Mai-Shiranui-full-costume-01-compress71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41898",
        "pageSeq": 41898
    },
    {
        "IDcode": 41899,
        "title": "Potato Godzilla - MaiShiranui (King Of Fighters)",
        "cover": "https://i.ibb.co/Kp3qLm9m/Potato-Godzilla-Mai-Shiranui-1-compress37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41899",
        "pageSeq": 41899
    },
    {
        "IDcode": 41900,
        "title": "Mik Allen - Mai Shiranui Casual (King Of Fighters)",
        "cover": "https://i.ibb.co/gbrRr7tT/01-3-compress26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41900",
        "pageSeq": 41900
    },
    {
        "IDcode": 41901,
        "title": "Pattie & mumutamumu - 肉感女魔王達の誘惑攻撃!!",
        "cover": "https://i.ibb.co/fdDSrmyk/Part-A-0001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41901",
        "pageSeq": 41901
    },
    {
        "IDcode": 41902,
        "title": "屿鱼 - Mogador (Azur Lane)",
        "cover": "https://i.ibb.co/84Sdv6PJ/Mogador-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41902",
        "pageSeq": 41902
    },
    {
        "IDcode": 41903,
        "title": "Ayame - Houshou Marine (Hololive)",
        "cover": "https://i.ibb.co/s9Smdv3b/Ayame-001-compress49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41903",
        "pageSeq": 41903
    },
    {
        "IDcode": 41904,
        "title": "Yoshinobi - Orihime (Bleach)",
        "cover": "https://i.ibb.co/XkVW4hPd/01-Orhime-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41904",
        "pageSeq": 41904
    },
    {
        "IDcode": 41905,
        "title": "HaneAme - Morpeah Bunny Girl (Brown Dust 2)",
        "cover": "https://i.ibb.co/FqhPWHxs/01-C-1-compress13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41905",
        "pageSeq": 41905
    },
    {
        "IDcode": 41906,
        "title": "Sayo Momo - Kafka (Honkai Star Rail)",
        "cover": "https://i.ibb.co/FLK2sHZT/01-compress66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41906",
        "pageSeq": 41906
    },
    {
        "IDcode": 41907,
        "title": "Byoru - Miia (Monster Musume)",
        "cover": "https://i.ibb.co/zTt16bBT/Byoru-Miia-Monster-Musume-1-compress30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41907",
        "pageSeq": 41907
    },
    {
        "IDcode": 41908,
        "title": "日奈娇 Hina Jiao - Azuma (Azur Lane)",
        "cover": "https://i.ibb.co/ZR0y9g38/001-compress28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41908",
        "pageSeq": 41908
    },
    {
        "IDcode": 41909,
        "title": "日奈娇 Hina Jiao - Nurse",
        "cover": "https://i.ibb.co/CpPSmz8p/001-Rinaijiao-Nurse-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41909",
        "pageSeq": 41909
    },
    {
        "IDcode": 41910,
        "title": "Yoshinobi - Rem (Re: Zero)",
        "cover": "https://i.ibb.co/gLrQKdht/01-Rem-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41910",
        "pageSeq": 41910
    },
    {
        "IDcode": 41911,
        "title": "Peachmilky - Burnice bikini (Zenless Zone Zero)",
        "cover": "https://i.ibb.co/ZR85WskM/01-burnicebikinipreview-compress47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41911",
        "pageSeq": 41911
    },
    {
        "IDcode": 41912,
        "title": "Sally Dorasnow - Viper (NIKKE)",
        "cover": "https://i.ibb.co/wZtVgSgS/01-SET-B-VIPER1-compress74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41912",
        "pageSeq": 41912
    },
    {
        "IDcode": 41913,
        "title": "Holly Wolf - Invisible Woman (Fantastic Four)",
        "cover": "https://i.ibb.co/sddMR4RD/01-476070744-18300505507228814-4073983858579936460-n-compress78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41913",
        "pageSeq": 41913
    },
    {
        "IDcode": 41914,
        "title": "Caticornplay - Roxy Migurdia (Mushoku Tensei)",
        "cover": "https://i.ibb.co/WW88L4t6/01-Roxy-1-compress72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41914",
        "pageSeq": 41914
    },
    {
        "IDcode": 41915,
        "title": "Uri - Nero (NIKKE)",
        "cover": "https://i.ibb.co/Y490CvCR/01-Nero-1-compress16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41915",
        "pageSeq": 41915
    },
    {
        "IDcode": 41916,
        "title": "Alina Becker - Tifa (Final Fantasy)",
        "cover": "https://i.ibb.co/xKbpYzZN/Tifa-001.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41916",
        "pageSeq": 41916
    },
    {
        "IDcode": 41917,
        "title": "Aery Tiefling - Yuna (Final Fantasy)",
        "cover": "https://i.ibb.co/HTPQ0gzK/01-Aery-Tiefling-Yuna-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41917",
        "pageSeq": 41917
    },
    {
        "IDcode": 41918,
        "title": "Slaysha & Shinkobi - Nurse Makima & Power (Chainsaw Man)",
        "cover": "https://i.ibb.co/HDmsDMyJ/01-Nurses-1-compress22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41918",
        "pageSeq": 41918
    },
    {
        "IDcode": 41919,
        "title": "Jean Wanwan - Morrigan (Darkstalkers)",
        "cover": "https://i.ibb.co/v4zy1YkT/01-1-compress60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41919",
        "pageSeq": 41919
    },
    {
        "IDcode": 41920,
        "title": "是一只熊仔吗 - Formidable (Azur Lane)",
        "cover": "https://i.ibb.co/Q7BzwJM0/01-2-compress89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41920",
        "pageSeq": 41920
    },
    {
        "IDcode": 41921,
        "title": "Yuumeilyn - Lumine (Genshin Impact)",
        "cover": "https://i.ibb.co/CKFb8yjF/Photo-22-11-2023-22-09-51-compress74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41921",
        "pageSeq": 41921
    },
    {
        "IDcode": 41922,
        "title": "Hane Ame - Now in Bloom",
        "cover": "https://i.ibb.co/JwJTvnH6/01-B-2-compress47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41922",
        "pageSeq": 41922
    },
    {
        "IDcode": 41923,
        "title": "HaneAme- Eclipse Beach Vacation (Bronw Dust 2)",
        "cover": "https://i.ibb.co/kLRNs41/01-D-1-compress72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41923",
        "pageSeq": 41923
    },
    {
        "IDcode": 41924,
        "title": "霜月shimo - Fern Nun (Sou Sou No Frieren)",
        "cover": "https://i.ibb.co/sdYBcSSZ/01-1-compress64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41924",
        "pageSeq": 41924
    },
    {
        "IDcode": 41925,
        "title": "Rumipeach - Haharley Quinn (Batman)",
        "cover": "https://i.ibb.co/mrh0hnjC/01-02-compress33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41925",
        "pageSeq": 41925
    },
    {
        "IDcode": 41926,
        "title": "Caticornplay - Louise neko (Zero No Tsukaima)",
        "cover": "https://i.ibb.co/7dx0zPCm/01-Louise-neko-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41926",
        "pageSeq": 41926
    },
    {
        "IDcode": 41927,
        "title": "玉汇 Kokuhui - Elaila The Crimson Dragon",
        "cover": "https://i.ibb.co/hJfkQ3PQ/Elaria-the-Crimson-Dragon-Part1-01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41927",
        "pageSeq": 41927
    },
    {
        "IDcode": 41928,
        "title": "Joyce - Shenhe (Genshin Impact)",
        "cover": "https://i.ibb.co/dsLYVV0R/001-compress70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41928",
        "pageSeq": 41928
    },
    {
        "IDcode": 41929,
        "title": "Hidori Rose - Maki Zenin (Jujutsu Kaisen)",
        "cover": "https://i.ibb.co/ZRHysCyX/01-Hidori-Rose-Maki-Zenin-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41929",
        "pageSeq": 41929
    },
    {
        "IDcode": 41930,
        "title": "Kouun - Rem (Re Zero)",
        "cover": "https://i.ibb.co/xkS54mw/Kakao-Talk-20250822-202208614.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41930",
        "pageSeq": 41930
    },
    {
        "IDcode": 41931,
        "title": "Fleurxy - Gwen Tennyson (Ben10)",
        "cover": "https://i.ibb.co/jvQjmDxn/01-gwen-tennyson-ben-10-by-fleurxy-v0-7y37lzy4umkf1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41931",
        "pageSeq": 41931
    },
    {
        "IDcode": 41932,
        "title": "Indigo White - Sakura Miku (Vocaloid)",
        "cover": "https://i.ibb.co/DPzQLK0H/001-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41932",
        "pageSeq": 41932
    },
    {
        "IDcode": 41933,
        "title": "Ulichan - Susan Storm (Fantastic Four)",
        "cover": "https://i.ibb.co/hJmJrk0Z/001-IMG-9235-compress28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41933",
        "pageSeq": 41933
    },
    {
        "IDcode": 41934,
        "title": "Byoru - Karin (Blue Archive)",
        "cover": "https://i.ibb.co/1GwyLR4r/01-1-compress19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41934",
        "pageSeq": 41934
    },
    {
        "IDcode": 41935,
        "title": "Molly Red Wolf - Hayase Nagatoro (Ijiranaide Nagatoro San)",
        "cover": "https://i.ibb.co/Z5z4qz0/01-318457499231461377.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41935",
        "pageSeq": 41935
    },
    {
        "IDcode": 41936,
        "title": "虎森森 - Sakurajima Mai (Seishun Buta)",
        "cover": "https://i.ibb.co/PvgYcsKN/01-c-12-compress52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41936",
        "pageSeq": 41936
    },
    {
        "IDcode": 41937,
        "title": "Kitsune - Alisa (Tokidoki Bosotto Russia-go De Dereru Tonari no Alya-san)",
        "cover": "https://i.ibb.co/nNt9ycLB/01-hlcf-ISv-F5-EOe1p4-Yhi-EUzc2-E-compress27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41937",
        "pageSeq": 41937
    },
    {
        "IDcode": 41938,
        "title": "LewdoArt - Meg  Griffin (Family Guy)",
        "cover": "https://i.ibb.co/Wp0tXgp0/01-Lewdo-Art-Meg-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41938",
        "pageSeq": 41938
    },
    {
        "IDcode": 41939,
        "title": "白露lulu - Sailor Bikini",
        "cover": "https://i.ibb.co/99pY27yy/0001-compress36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41939",
        "pageSeq": 41939
    },
    {
        "IDcode": 41940,
        "title": "PoppaChan - Kiryu Coco Hololive",
        "cover": "https://i.ibb.co/twvdcXjk/Poppa-Chan-cosplay-Kiryu-Coco-Hololive-1-compress19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41940",
        "pageSeq": 41940
    },
    {
        "IDcode": 41941,
        "title": "Ulichan - Latex Asuka (Neon Genesis Evangelion)",
        "cover": "https://i.ibb.co/TB5SGy01/01-IMG-9273-compress47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41941",
        "pageSeq": 41941
    },
    {
        "IDcode": 41942,
        "title": "Lili M0nade - Raven (Teen Titans)",
        "cover": "https://i.ibb.co/jv5Nn0p3/01-Gznbuj-MWEAA4dj-I.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41942",
        "pageSeq": 41942
    },
    {
        "IDcode": 41943,
        "title": "Octokuro - Chun-Li (Street Fighter)",
        "cover": "https://i.ibb.co/qLcpJRhd/01-chun-li-by-octokuro-v0-lbwfu6tjw7nf1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41943",
        "pageSeq": 41943
    },
    {
        "IDcode": 41944,
        "title": "Kouun - Alice (NIKKE)",
        "cover": "https://i.ibb.co/SXKWQ1Yv/Kakao-Talk-20250801-050403289.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41944",
        "pageSeq": 41944
    },
    {
        "IDcode": 41945,
        "title": "Susu Kami - Lauma (Genshin Impact)",
        "cover": "https://i.ibb.co/VcS91NzF/1-Untitled.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41945",
        "pageSeq": 41945
    },
    {
        "IDcode": 41946,
        "title": "Broccoli - Shioriha Ruri (Nijisanji)",
        "cover": "https://i.ibb.co/wNjXHCDB/ver-000-compress2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41946",
        "pageSeq": 41946
    },
    {
        "IDcode": 41947,
        "title": "Hana Bunny - Emma Frost Skin (X-Men)",
        "cover": "https://i.ibb.co/RpzGbQpK/01-1-compress28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41947",
        "pageSeq": 41947
    },
    {
        "IDcode": 41948,
        "title": "Arty Huang - Toki Bunny (Blue Archive)",
        "cover": "https://i.ibb.co/PGpb7rP1/1000121168.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41948",
        "pageSeq": 41948
    },
    {
        "IDcode": 41949,
        "title": "Kiki Rose - Zero Two (Darling Un The Franxx)",
        "cover": "https://i.ibb.co/27WPw0BD/01-Zero-Two-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41949",
        "pageSeq": 41949
    },
    {
        "IDcode": 41950,
        "title": "Kiki Rose - Lady Dimitrescu Lingerie (Resident Evil)",
        "cover": "https://i.ibb.co/ZzSvVzR7/01-Lady-Dimitrescu-Lingerie-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41950",
        "pageSeq": 41950
    },
    {
        "IDcode": 41951,
        "title": "Susu Kami - Eula (Genshin Impact)",
        "cover": "https://i.ibb.co/s9Sn6zwd/01-1207499868-Hoy-fui-a-hacer-fotitos-a-la-nieve-y-me-port-un-poquito-mal-01-880x1144-7072703f4fd10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41951",
        "pageSeq": 41951
    },
    {
        "IDcode": 41952,
        "title": "Feh Galvao - Starlight (The Boys)",
        "cover": "https://i.ibb.co/vx0z6SSD/IMG-4406.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41952",
        "pageSeq": 41952
    },
    {
        "IDcode": 41953,
        "title": "Potato Godzilla - OnlyFans Nude Aug 1-31, 2025",
        "cover": "https://i.ibb.co/G3386F6m/Potato-Godzilla-Only-Fans-Nude-Aug-1-31-2025-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41953",
        "pageSeq": 41953
    },
    {
        "IDcode": 41954,
        "title": "Byoru - Grok Ani",
        "cover": "https://i.ibb.co/tMsKRXr6/01-Byoru-Grok-Ani-1-compress76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41954",
        "pageSeq": 41954
    },
    {
        "IDcode": 41955,
        "title": "Uri - Rio (Blue Archive)",
        "cover": "https://i.ibb.co/CKW7JWnq/01-Rio-1-compress88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41955",
        "pageSeq": 41955
    },
    {
        "IDcode": 41956,
        "title": "一只肉酱阿  - Sagiri Izumi (Eromanga Sensei)",
        "cover": "https://i.ibb.co/DHVZcVg4/roujiangdajiba-cosplay-Sagiri-Izumi-Eromanga-Sensei-1-compress65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41956",
        "pageSeq": 41956
    },
    {
        "IDcode": 41957,
        "title": "Yuumeilyn - Ani Grok",
        "cover": "https://i.ibb.co/jZB6wySn/Meiilyn-yuumeilyn-cosplay-Ani-Grok-1-compress78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41957",
        "pageSeq": 41957
    },
    {
        "IDcode": 41958,
        "title": "Hana Bunny - Daring Mommy",
        "cover": "https://i.ibb.co/BHJ8RWnX/01-1-compress11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41958",
        "pageSeq": 41958
    },
    {
        "IDcode": 41959,
        "title": "Hane Ame - Grok AI Ani",
        "cover": "https://i.ibb.co/SwK4BJ4R/01-A-2-compress14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41959",
        "pageSeq": 41959
    },
    {
        "IDcode": 41960,
        "title": "麻花酱 Mahua Jiang - Chen Hai (Azur Lane)",
        "cover": "https://i.ibb.co/BVyVhQrt/01-1-compress26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41960",
        "pageSeq": 41960
    },
    {
        "IDcode": 41961,
        "title": "DiraCosplay - Maid BB (Fate Grand Order)",
        "cover": "https://i.ibb.co/tTCsksSx/001-Maid-BB-1-compress95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41961",
        "pageSeq": 41961
    },
    {
        "IDcode": 41962,
        "title": "Arty Huang  - St. Louis (Blue Archive)",
        "cover": "https://i.ibb.co/Gfvmx0qb/01-q-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41962",
        "pageSeq": 41962
    },
    {
        "IDcode": 41963,
        "title": "李佳 - Guitar Sister",
        "cover": "https://i.ibb.co/hRtwLc6y/01-compress85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41963",
        "pageSeq": 41963
    },
    {
        "IDcode": 41964,
        "title": "Pyoncos ピオン - Cantarella (Wuthering Waves)",
        "cover": "https://i.ibb.co/WvWGScjJ/Pyoncos-cosplay-Cantarella-Wuthering-Waves-1-compress44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41964",
        "pageSeq": 41964
    },
    {
        "IDcode": 41965,
        "title": "Byoru - Elegg boom & shock (NIKKE)",
        "cover": "https://i.ibb.co/Dgsx19N8/Elegg-boom-shock-HD10-compress45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41965",
        "pageSeq": 41965
    },
    {
        "IDcode": 41966,
        "title": "Zinie Q - Marnie's Misc (Pokemon)",
        "cover": "https://i.ibb.co/6cRQsL3r/01-Marnie-Battle-HD-27-compress58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41966",
        "pageSeq": 41966
    },
    {
        "IDcode": 41967,
        "title": "Lovely Space Kitten - Tutu",
        "cover": "https://i.ibb.co/wF09yf9C/01-597789-scaled-compress19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=41967",
        "pageSeq": 41967
    }
];
