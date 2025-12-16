// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38911,
        "title": "YurikoDxD - Mary Jane (Spiderman)",
        "cover": "https://telegra.ph/file/0346d380306643aee68ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38911",
        "pageSeq": 38911
    },
    {
        "IDcode": 38912,
        "title": "Joyce - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/52d9831cca1ec3bfb8e92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38912",
        "pageSeq": 38912
    },
    {
        "IDcode": 38913,
        "title": "Joyce - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/40ea725ca8a6a3d9bf640.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38913",
        "pageSeq": 38913
    },
    {
        "IDcode": 38914,
        "title": "三刀刀 Miido - Choco (Hololive)",
        "cover": "https://telegra.ph/file/4479481f57d2ec77c38e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38914",
        "pageSeq": 38914
    },
    {
        "IDcode": 38915,
        "title": "Hoshilily - Miko (Random)",
        "cover": "https://telegra.ph/file/6fe53c244e2d56bceefc4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38915",
        "pageSeq": 38915
    },
    {
        "IDcode": 38916,
        "title": "Sunny Vier - Lisa (Genshin Impact)",
        "cover": "https://legra.ph/file/73d8769761c28c46b9f3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38916",
        "pageSeq": 38916
    },
    {
        "IDcode": 38917,
        "title": "Potato Godzilla - Casual (Model Random)",
        "cover": "https://telegra.ph/file/402c70255217f01281b9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38917",
        "pageSeq": 38917
    },
    {
        "IDcode": 38918,
        "title": "Nekokoyoshi - Melina (Elden Ring)",
        "cover": "https://telegra.ph/file/61b62c56c78219dca4502.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38918",
        "pageSeq": 38918
    },
    {
        "IDcode": 38919,
        "title": "Sunny Vier - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/48a8d3bfea07fc829cb38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38919",
        "pageSeq": 38919
    },
    {
        "IDcode": 38920,
        "title": "西园寺南歌 - 约克公爵吸血鬼 Duke Of York (Azur Lane)",
        "cover": "https://telegra.ph/file/d0c597cc2864a7c2411e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38920",
        "pageSeq": 38920
    },
    {
        "IDcode": 38921,
        "title": "阮邑Fairy - Jeanne D'Arc Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/6c9b47a974ebf1c3431bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38921",
        "pageSeq": 38921
    },
    {
        "IDcode": 38922,
        "title": "赤木クロ AkagiKuro - Rem Bunny (Re: Zero)",
        "cover": "https://telegra.ph/file/4fcd2074955af04a3b821.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38922",
        "pageSeq": 38922
    },
    {
        "IDcode": 38923,
        "title": "Nora Fawn - Shimakaze (Kantai Collection)",
        "cover": "https://telegra.ph/file/c5e1ef4766f5fa92a6324.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38923",
        "pageSeq": 38923
    },
    {
        "IDcode": 38924,
        "title": "今宵Koyoyi - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/a839eb60e8f905f81f703.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38924",
        "pageSeq": 38924
    },
    {
        "IDcode": 38925,
        "title": "星之迟迟 Hoshilily - 圣诞礼物 Christmas (Random Cosplay)",
        "cover": "https://telegra.ph/file/c1b82374e85d781a5132f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38925",
        "pageSeq": 38925
    },
    {
        "IDcode": 38926,
        "title": "Potato Godzilla - Jeanne D'Arc Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/c838a5334f5ba4d51aba6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38926",
        "pageSeq": 38926
    },
    {
        "IDcode": 38927,
        "title": "Potato Godzilla - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/c1450e868008949245a98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38927",
        "pageSeq": 38927
    },
    {
        "IDcode": 38928,
        "title": "Jenny - Type95 (Girls Frontline)",
        "cover": "https://telegra.ph/file/f55ff595cf96048cc3173.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38928",
        "pageSeq": 38928
    },
    {
        "IDcode": 38929,
        "title": "Chunmomo蠢沫沫 - 身体检查Schoolgirl (Random Cosplay)",
        "cover": "https://telegra.ph/file/d9b1cc78f8bd1a6fbf12c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38929",
        "pageSeq": 38929
    },
    {
        "IDcode": 38930,
        "title": "Shiro Kitsune - Cynthia (Pokemon)",
        "cover": "https://telegra.ph/file/204b85114d3f6590cc256.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38930",
        "pageSeq": 38930
    },
    {
        "IDcode": 38931,
        "title": "Potato Godzilla - Schoogirl (Random Cosplay)",
        "cover": "https://telegra.ph/file/30569407118e7f2c7df17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38931",
        "pageSeq": 38931
    },
    {
        "IDcode": 38932,
        "title": "Joyce - Mai Shiranui (The King Of Fighters)",
        "cover": "https://telegra.ph/file/19f811d4aa5f260de77af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38932",
        "pageSeq": 38932
    },
    {
        "IDcode": 38933,
        "title": "Alina Becker - Meiko Shiraki (Prison School)",
        "cover": "https://telegra.ph/file/5f58eb5c3ed4396379cb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38933",
        "pageSeq": 38933
    },
    {
        "IDcode": 38934,
        "title": "Akagi Sou - Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/efb0badfbbb166f9bec2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38934",
        "pageSeq": 38934
    },
    {
        "IDcode": 38935,
        "title": "MissWarmj - Chin Li (Street Fighter)",
        "cover": "https://telegra.ph/file/23b20454b2cf55b096701.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38935",
        "pageSeq": 38935
    },
    {
        "IDcode": 38936,
        "title": "Stelar Hoshi - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/f1be060511fb23081d86a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38936",
        "pageSeq": 38936
    },
    {
        "IDcode": 38937,
        "title": "Byoru - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/9281517d3d998a16b6d90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38937",
        "pageSeq": 38937
    },
    {
        "IDcode": 38938,
        "title": "Yunocos69 - Artoria Maid Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/315a4bd65094d843c5fac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38938",
        "pageSeq": 38938
    },
    {
        "IDcode": 38939,
        "title": "Fay SG - Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/91bd3fbf1692a1be2676a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38939",
        "pageSeq": 38939
    },
    {
        "IDcode": 38940,
        "title": "Diandian D - Scathach & Kashino Maid (Azur Lane & Fate Grand Order)",
        "cover": "https://telegra.ph/file/26cad3c7fef465a9b3a8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38940",
        "pageSeq": 38940
    },
    {
        "IDcode": 38941,
        "title": "Hane Ame - Christmas 2021",
        "cover": "https://telegra.ph/file/4879fc4212b3a3a4a7708.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38941",
        "pageSeq": 38941
    },
    {
        "IDcode": 38942,
        "title": "Nekokoyoshi - Alice Cartelet (Kiniro Mosaic)",
        "cover": "https://telegra.ph/file/731e3c7dde5eed2738b13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38942",
        "pageSeq": 38942
    },
    {
        "IDcode": 38943,
        "title": "Nekokoyoshi -  Crystal Rose Lux (League of Legends)",
        "cover": "https://telegra.ph/file/c983998de1a19c524bcac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38943",
        "pageSeq": 38943
    },
    {
        "IDcode": 38944,
        "title": "Byoru - Amber (Genshin Impact)",
        "cover": "https://telegra.ph/file/38df9e0bad9a8c86a3db6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38944",
        "pageSeq": 38944
    },
    {
        "IDcode": 38945,
        "title": "Yoshinobi - Mitsuri (Kimetsu no Yaiba)",
        "cover": "https://telegra.ph/file/bf2b2ddb2064afb778a1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38945",
        "pageSeq": 38945
    },
    {
        "IDcode": 38946,
        "title": "Hana Bunny - Little Kitten (Random Cosplay)",
        "cover": "https://telegra.ph/file/a7b123accd87ddeef419f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38946",
        "pageSeq": 38946
    },
    {
        "IDcode": 38947,
        "title": "Akemi - Giyu Tomioka (Kimetsu no Yaiba)",
        "cover": "https://telegra.ph/file/b8666172416fc51fdef8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38947",
        "pageSeq": 38947
    },
    {
        "IDcode": 38948,
        "title": "Rioko - Shizuku (Sono Bisque Dollw)",
        "cover": "https://telegra.ph/file/9c06e81d45a11eb254eb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38948",
        "pageSeq": 38948
    },
    {
        "IDcode": 38949,
        "title": "Kalinka Fox - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/bc34838aac2cb812a2421.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38949",
        "pageSeq": 38949
    },
    {
        "IDcode": 38950,
        "title": "Shiraga Yanko - Miku & Itsuki & Yotsuba & Ichika & Nino (Go toubun no hanayome)",
        "cover": "https://telegra.ph/file/54032d04ff69154f023aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38950",
        "pageSeq": 38950
    },
    {
        "IDcode": 38951,
        "title": "蠢沫沫 Chunmomo  - 下班后 Nurse (Random Cosplay)",
        "cover": "https://telegra.ph/file/814c2cec9b2d0353f4e19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38951",
        "pageSeq": 38951
    },
    {
        "IDcode": 38952,
        "title": "起司块wii - Reika (Gantz)",
        "cover": "https://telegra.ph/file/1960f3f17034f97139bc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38952",
        "pageSeq": 38952
    },
    {
        "IDcode": 38953,
        "title": "Fantasy Factory 小丁 - Taiwan Green Islands",
        "cover": "https://telegra.ph/file/852c3686d86903593de8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38953",
        "pageSeq": 38953
    },
    {
        "IDcode": 38954,
        "title": "MissWarmj - Ram Swimming (Re: Zero)",
        "cover": "https://telegra.ph/file/5b5c8b9ecb2a638cc7623.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38954",
        "pageSeq": 38954
    },
    {
        "IDcode": 38955,
        "title": "Lovely Speace Kitten - Elf Archer (Goblin Slayer)",
        "cover": "https://telegra.ph/file/15ebd76cbca7843c64c61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38955",
        "pageSeq": 38955
    },
    {
        "IDcode": 38956,
        "title": "Hana Bunny - Cyber Kitten (Random Cosplay)",
        "cover": "https://telegra.ph/file/6c21cb2cadcb7852371e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38956",
        "pageSeq": 38956
    },
    {
        "IDcode": 38957,
        "title": "Azami - Cyber Bunny (Random Cosplay)",
        "cover": "https://telegra.ph/file/076f15521a3f7d505c620.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38957",
        "pageSeq": 38957
    },
    {
        "IDcode": 38958,
        "title": "Shui Miao Aqua - Kokomi (Genshin Impact)",
        "cover": "https://telegra.ph/file/1ea2edd7f6946bc814975.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38958",
        "pageSeq": 38958
    },
    {
        "IDcode": 38959,
        "title": "Song Hana 송하나 - Masked Bunny",
        "cover": "https://telegra.ph/file/1806389a37effd5a07f50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38959",
        "pageSeq": 38959
    },
    {
        "IDcode": 38960,
        "title": "Shui Miao Aqua - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/b8fe06abc564e75fcc190.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38960",
        "pageSeq": 38960
    },
    {
        "IDcode": 38961,
        "title": "Potato Godzilla - Scathach (Fate Grand Order)",
        "cover": "https://telegra.ph/file/db435a857f091ccf1f073.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38961",
        "pageSeq": 38961
    },
    {
        "IDcode": 38962,
        "title": "Potato Godzilla - Ankha Zone (Animal Crosing)",
        "cover": "https://telegra.ph/file/d9e8b8f7e30b53a65dea9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38962",
        "pageSeq": 38962
    },
    {
        "IDcode": 38963,
        "title": "Hane Ame - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/a8001aac16d7322367656.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38963",
        "pageSeq": 38963
    },
    {
        "IDcode": 38964,
        "title": "Gumiho - Mavis (Hotel Transylvania)",
        "cover": "https://telegra.ph/file/b207236a9aac6a85c4f6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38964",
        "pageSeq": 38964
    },
    {
        "IDcode": 38965,
        "title": "Potato Godzilla - Akane Shinjo (SSSS.Gridman)",
        "cover": "https://telegra.ph/file/b2b0e399c6a8e1cbeb87b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38965",
        "pageSeq": 38965
    },
    {
        "IDcode": 38966,
        "title": "Potato Godzilla - Anubis (Random Cosplay)",
        "cover": "https://telegra.ph/file/924531366da463914cd02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38966",
        "pageSeq": 38966
    },
    {
        "IDcode": 38967,
        "title": "HaneAme 雨波 — Kaine (Nier Replicant)",
        "cover": "https://telegra.ph/file/44d40adf11640ea38bd09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38967",
        "pageSeq": 38967
    },
    {
        "IDcode": 38968,
        "title": "Alina Becker - Morrigan (Capcom Game)",
        "cover": "https://telegra.ph/file/2311dc71ebd156549412f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38968",
        "pageSeq": 38968
    },
    {
        "IDcode": 38969,
        "title": "Shiro Kitsune - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/400f5968d7e1baf69bdad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38969",
        "pageSeq": 38969
    },
    {
        "IDcode": 38970,
        "title": "Nichameleon - Harley Quinn Gold (Batman)",
        "cover": "https://telegra.ph/file/567f606dfe7cecdaca1b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38970",
        "pageSeq": 38970
    },
    {
        "IDcode": 38971,
        "title": "UyUy - Devil Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/d0d7102853164e6080293.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38971",
        "pageSeq": 38971
    },
    {
        "IDcode": 38972,
        "title": "Potato Godzilla - Schoolgirl Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/fe22087d247f01f028a11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38972",
        "pageSeq": 38972
    },
    {
        "IDcode": 38973,
        "title": "Shui Miao Aqua - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/b2008a4df3f579a0f9cb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38973",
        "pageSeq": 38973
    },
    {
        "IDcode": 38975,
        "title": "Sweetie Fox - Ryuuko Matoi (Kill La Kill)",
        "cover": "https://telegra.ph/file/3e61a72a54ac4f1f0832d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38975",
        "pageSeq": 38975
    },
    {
        "IDcode": 38976,
        "title": "Akemi - Mikasa Bunny (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/0953f15836cb6a9eee302.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38976",
        "pageSeq": 38976
    },
    {
        "IDcode": 38977,
        "title": "Hana Bunny - Dusciplinary Committee",
        "cover": "https://telegra.ph/file/c81b0090ff0b04f68ac8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38977",
        "pageSeq": 38977
    },
    {
        "IDcode": 38978,
        "title": "Mikomin - Kitagawa Marin (Sono Bisque Dollw)",
        "cover": "https://telegra.ph/file/58acf556eaffa8e8a2a23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38978",
        "pageSeq": 38978
    },
    {
        "IDcode": 38979,
        "title": "Vinnegal - Kaine (Nier Replicant)",
        "cover": "https://telegra.ph/file/b76a302c78d74c18d9a40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38979",
        "pageSeq": 38979
    },
    {
        "IDcode": 38980,
        "title": "Lady Oichi - Lucy Heartfilia (Fairy Tail)",
        "cover": "https://telegra.ph/file/8a8376c920edff7edc6c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38980",
        "pageSeq": 38980
    },
    {
        "IDcode": 38981,
        "title": "Alina Becker - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/acfbe4611abd9c9b2c5e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38981",
        "pageSeq": 38981
    },
    {
        "IDcode": 38982,
        "title": "Ain Nguyen - Fischl (Genshin Impact)",
        "cover": "https://telegra.ph/file/0a0f55cfe77695c68fd4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38982",
        "pageSeq": 38982
    },
    {
        "IDcode": 38983,
        "title": "Queenie Chuppy - Jinx (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/019853373a9d8e3eed19b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38983",
        "pageSeq": 38983
    },
    {
        "IDcode": 38984,
        "title": "Azami - Noelle (Genshin Impact)",
        "cover": "https://telegra.ph/file/4a468fe93df5af0bd2ff1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38984",
        "pageSeq": 38984
    },
    {
        "IDcode": 38985,
        "title": "Fantasy Factory - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/490d923b692d396f32a79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38985",
        "pageSeq": 38985
    },
    {
        "IDcode": 38986,
        "title": "Azami -2B (Gantz/Nier Autómata)",
        "cover": "https://telegra.ph/file/87a63df119f2b6fede70d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38986",
        "pageSeq": 38986
    },
    {
        "IDcode": 38987,
        "title": "Hane Ame - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/1d45bd98c3f0dc85de4fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38987",
        "pageSeq": 38987
    },
    {
        "IDcode": 38988,
        "title": "Byoru - Shizuku Kuroe (Sono Bisque Dollw)",
        "cover": "https://telegra.ph/file/3c17d44f822bc5be7ff91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38988",
        "pageSeq": 38988
    },
    {
        "IDcode": 38989,
        "title": "Hokunaimeko - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/d3597a367729d4e08c80b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38989",
        "pageSeq": 38989
    },
    {
        "IDcode": 38990,
        "title": "Hokunaimeko - Celestino (Kuroinu)",
        "cover": "https://telegra.ph/file/6540c900db9f65c7e794b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38990",
        "pageSeq": 38990
    },
    {
        "IDcode": 38991,
        "title": "清水由乃 - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/dd4b64ecf7f1abf1d3d85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38991",
        "pageSeq": 38991
    },
    {
        "IDcode": 38992,
        "title": "Vinnegal - Reze (Chain Saw Man)",
        "cover": "https://telegra.ph/file/4cfcc6b9fa13a591498f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38992",
        "pageSeq": 38992
    },
    {
        "IDcode": 38993,
        "title": "UyUy - Signora (Genshin Impact)",
        "cover": "https://telegra.ph/file/c8f08031145209208471e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38993",
        "pageSeq": 38993
    },
    {
        "IDcode": 38994,
        "title": "Kaya Huang - Racing Arturia (Fate Grand Order)",
        "cover": "https://telegra.ph/file/d83d897b49c12cd974a81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38994",
        "pageSeq": 38994
    },
    {
        "IDcode": 38995,
        "title": "Helly Valentine - Bowsette (Mario Bros)",
        "cover": "https://telegra.ph/file/1f906223722a482b14b10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38995",
        "pageSeq": 38995
    },
    {
        "IDcode": 38996,
        "title": "Hane Ame - Reika (Gantz)",
        "cover": "https://telegra.ph/file/e8b77b5b3bed7e88211ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38996",
        "pageSeq": 38996
    },
    {
        "IDcode": 38998,
        "title": "Nekokoyoshi - Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/b19faf7bf11e31d959f33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38998",
        "pageSeq": 38998
    },
    {
        "IDcode": 38999,
        "title": "Hoshilily - Arknights + Azur Lane",
        "cover": "https://telegra.ph/file/ac3f2a9beab86e3841cc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38999",
        "pageSeq": 38999
    },
    {
        "IDcode": 39000,
        "title": "Jenny - Combat Maid Mansion",
        "cover": "https://telegra.ph/file/2353176c1bf8597b375a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39000",
        "pageSeq": 39000
    },
    {
        "IDcode": 39001,
        "title": "Sweetie Fox - Ochako Uraraka (Boku No Hero Academia)",
        "cover": "https://telegra.ph/file/82ce98a913d5d5a4f2028.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39001",
        "pageSeq": 39001
    },
    {
        "IDcode": 39002,
        "title": "Ariri Ganlory - Sister (Random Cosplay)",
        "cover": "https://telegra.ph/file/58c61fb71973ea32bbbdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39002",
        "pageSeq": 39002
    },
    {
        "IDcode": 39003,
        "title": "菌烨tako - C.C. (Code Geass)",
        "cover": "https://telegra.ph/file/8f1108c4477f44977d7c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39003",
        "pageSeq": 39003
    },
    {
        "IDcode": 39004,
        "title": "Mizhimaoqiu - Maid (Random Cosplay)",
        "cover": "https://telegra.ph/file/c6976d7c79d596c45b193.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39004",
        "pageSeq": 39004
    },
    {
        "IDcode": 39005,
        "title": "Megumi Koneko - Makoto Loungewear (Shim Megami Tensei V/Persona 5)",
        "cover": "https://telegra.ph/file/2851756a705b0d6ba750d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39005",
        "pageSeq": 39005
    },
    {
        "IDcode": 39006,
        "title": "Byoru - Lewd Ankha (Animal Crossing)",
        "cover": "https://telegra.ph/file/04453079ef3eac26d2ad9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39006",
        "pageSeq": 39006
    },
    {
        "IDcode": 39007,
        "title": "Peach Milky - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/7465f78ab8a946f8095de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39007",
        "pageSeq": 39007
    },
    {
        "IDcode": 39008,
        "title": "林檎蜜紀 Ringo Mitsuki - Marín Kitagawa (Sono Bisque Dollw)",
        "cover": "https://telegra.ph/file/f63fd32aad53d8d54748f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39008",
        "pageSeq": 39008
    },
    {
        "IDcode": 39009,
        "title": "Nekokoyoshi - CyberGirl",
        "cover": "https://telegra.ph/file/efc9333b62129f1c29b45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39009",
        "pageSeq": 39009
    },
    {
        "IDcode": 39010,
        "title": "Azami - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/41dbe0e52cb8d09a49c5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39010",
        "pageSeq": 39010
    },
    {
        "IDcode": 39011,
        "title": "Queenie Chuppy - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/37de56e7583862c8725a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39011",
        "pageSeq": 39011
    },
    {
        "IDcode": 39012,
        "title": "Hane Ame - Rebecca (One Piece)",
        "cover": "https://telegra.ph/file/dade07cf770a3d8a80d10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39012",
        "pageSeq": 39012
    }
];
