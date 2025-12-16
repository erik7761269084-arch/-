// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 37802,
        "title": "Nagisa - Blue Lencery (Model)",
        "cover": "https://telegra.ph/file/e56aa1f111ff5b7802b71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37802",
        "pageSeq": 37802
    },
    {
        "IDcode": 37803,
        "title": "Helly Valentine - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/a6c31ce4c2c0a16502cf9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37803",
        "pageSeq": 37803
    },
    {
        "IDcode": 37804,
        "title": "MissWarmJ - Zero Two/Swimsuit (Darling in the franxx)",
        "cover": "https://telegra.ph/file/8c35b9a4e8d3719e83419.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37804",
        "pageSeq": 37804
    },
    {
        "IDcode": 37805,
        "title": "Queenie Chuppy - 2B Nun (Nier Automata)",
        "cover": "https://telegra.ph/file/c76cf1fdcb77d465f2383.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37805",
        "pageSeq": 37805
    },
    {
        "IDcode": 37806,
        "title": "Hidori Rose - Pekora (Holo Live)",
        "cover": "https://telegra.ph/file/c6990525ed1901c8114b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37806",
        "pageSeq": 37806
    },
    {
        "IDcode": 37807,
        "title": "Sarah Carvalho - Maid",
        "cover": "https://telegra.ph/file/38f8e6f4fa275e7394047.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37807",
        "pageSeq": 37807
    },
    {
        "IDcode": 37808,
        "title": "Xia Gege - Honoka Fortune (Dead or Live)",
        "cover": "https://telegra.ph/file/9f1ddf8a21fb682b70590.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37808",
        "pageSeq": 37808
    },
    {
        "IDcode": 37809,
        "title": "Yuzupyon - Scathach/Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/8928e77b43404ce147b9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37809",
        "pageSeq": 37809
    },
    {
        "IDcode": 37810,
        "title": "Meow Lem - Sakura Peach",
        "cover": "https://telegra.ph/file/5d499ce5996d8b2c8ffe9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37810",
        "pageSeq": 37810
    },
    {
        "IDcode": 37811,
        "title": "KaYa Huang - Illustrious Swimsuit/Lencery (Azur Lane)",
        "cover": "https://telegra.ph/file/2b366238446c281b050d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37811",
        "pageSeq": 37811
    },
    {
        "IDcode": 37812,
        "title": "Hidori Rose - Hinata [Naruto Shippuden]",
        "cover": "https://telegra.ph/file/d2d5998340fe442b706e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37812",
        "pageSeq": 37812
    },
    {
        "IDcode": 37813,
        "title": "Kayla Erin - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/31fdc33e477658f10435f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37813",
        "pageSeq": 37813
    },
    {
        "IDcode": 37814,
        "title": "Queenie Chuppy - Hinata (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/5334f00900148ca9c0c03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37814",
        "pageSeq": 37814
    },
    {
        "IDcode": 37815,
        "title": "Nisa - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/96468112db9f5a6f2cf39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37815",
        "pageSeq": 37815
    },
    {
        "IDcode": 37816,
        "title": "Hana Bunny - Black Cat DVA (Overwatch)",
        "cover": "https://telegra.ph/file/5d428feae0e406dc6d090.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37816",
        "pageSeq": 37816
    },
    {
        "IDcode": 37817,
        "title": "Bai Ye - Shinano (Azur Lane)",
        "cover": "https://telegra.ph/file/fddabe51603725be6f383.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37817",
        "pageSeq": 37817
    },
    {
        "IDcode": 37818,
        "title": "Yuki Astra - Vol.031 (Cosplay)",
        "cover": "https://telegra.ph/file/9146495cf168a83d64464.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37818",
        "pageSeq": 37818
    },
    {
        "IDcode": 37819,
        "title": "Mew Sugar Movie - Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/ab2c69db925f495c59bea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37819",
        "pageSeq": 37819
    },
    {
        "IDcode": 37820,
        "title": "Xia Gege - Hitaha Kasumigaoka (Saenai Heroine)",
        "cover": "https://telegra.ph/file/d7aaeb13b0f8649098417.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37820",
        "pageSeq": 37820
    },
    {
        "IDcode": 37821,
        "title": "Xia Gege - Meiko Shiraki/Selfie (Prisión School)",
        "cover": "https://telegra.ph/file/7ef71c5e094f4d0422e59.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37821",
        "pageSeq": 37821
    },
    {
        "IDcode": 37822,
        "title": "Xia Gege - kiara sessyoin (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/bda8ff4973c0856f1cdab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37822",
        "pageSeq": 37822
    },
    {
        "IDcode": 37823,
        "title": "果咩酱 - Rei Ayanami (Evangelion)",
        "cover": "https://telegra.ph/file/ecb68ee00a39f35d31ccf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37823",
        "pageSeq": 37823
    },
    {
        "IDcode": 37824,
        "title": "Xia Gege - Meiko Shiraki (Prisión School)",
        "cover": "https://telegra.ph/file/d1589b451c4574ba3c004.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37824",
        "pageSeq": 37824
    },
    {
        "IDcode": 37825,
        "title": "Zou Jing Jing - Daji Fox (The King Glory Daji)",
        "cover": "https://telegra.ph/file/45432bc60a6266b293255.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37825",
        "pageSeq": 37825
    },
    {
        "IDcode": 37826,
        "title": "Zhu Ke er - Vol. 271 (Model)",
        "cover": "https://telegra.ph/file/6cda7409bd6bb23cb735d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37826",
        "pageSeq": 37826
    },
    {
        "IDcode": 37827,
        "title": "果咩酱 - Saber Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/abecffc646d47b0242288.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37827",
        "pageSeq": 37827
    },
    {
        "IDcode": 37828,
        "title": "Nagisa - Sailor",
        "cover": "https://telegra.ph/file/4e44436712f1f5e9150d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37828",
        "pageSeq": 37828
    },
    {
        "IDcode": 37829,
        "title": "Hidori Rose - Newby Succubus (Konosuba)",
        "cover": "https://telegra.ph/file/b6bac34859537501cada6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37829",
        "pageSeq": 37829
    },
    {
        "IDcode": 37830,
        "title": "Peach Milky - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/5609e51e746b5c51989c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37830",
        "pageSeq": 37830
    },
    {
        "IDcode": 37831,
        "title": "Hidori Rose - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/df383193f8e1bc6c89638.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37831",
        "pageSeq": 37831
    },
    {
        "IDcode": 37832,
        "title": "Sarah Carvalho - Mikasa (Shingeki No kyojin)",
        "cover": "https://telegra.ph/file/be7a0731818832f06f98a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37832",
        "pageSeq": 37832
    },
    {
        "IDcode": 37833,
        "title": "Potato Godzilla - Casual/Satay Home",
        "cover": "https://telegra.ph/file/f495e410a4914f616dd84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37833",
        "pageSeq": 37833
    },
    {
        "IDcode": 37834,
        "title": "Potato Godzilla - Jeanne D'Arc Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/074ad8e1bbf68d6882931.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37834",
        "pageSeq": 37834
    },
    {
        "IDcode": 37835,
        "title": "Rioko - Fox/Lencery",
        "cover": "https://telegra.ph/file/49e0d78740f4a6d7f252b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37835",
        "pageSeq": 37835
    },
    {
        "IDcode": 37836,
        "title": "Potato Godzilla - Hatsune Miku (Senbonsakura)",
        "cover": "https://telegra.ph/file/27e6c37d5e6c6f5860b62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37836",
        "pageSeq": 37836
    },
    {
        "IDcode": 37837,
        "title": "Saya The Fox - Ciri (Sword of Destiny)",
        "cover": "https://telegra.ph/file/d99e06076b3102d7b2045.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37837",
        "pageSeq": 37837
    },
    {
        "IDcode": 37838,
        "title": "Hidori Rose - Chii (Chobits)",
        "cover": "https://telegra.ph/file/38a4948d7c2124b7c1ec6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37838",
        "pageSeq": 37838
    },
    {
        "IDcode": 37839,
        "title": "Shiro Kitsune - Rei Ayanami (Evangelion)",
        "cover": "https://telegra.ph/file/f5303cfabac562f75f9f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37839",
        "pageSeq": 37839
    },
    {
        "IDcode": 37840,
        "title": "Hidori Rose - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/19b726832b7c840368456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37840",
        "pageSeq": 37840
    },
    {
        "IDcode": 37841,
        "title": "Hidori Rose - Pochaco (Super Sonico)",
        "cover": "https://telegra.ph/file/3f55939af611b3ff3eb3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37841",
        "pageSeq": 37841
    },
    {
        "IDcode": 37842,
        "title": "Potato Godzilla - Kurumi/Neko (Date a Live)",
        "cover": "https://telegra.ph/file/6fe6f785e10004423bb02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37842",
        "pageSeq": 37842
    },
    {
        "IDcode": 37843,
        "title": "Cati Corplay - Megumin (Konosuba)",
        "cover": "https://telegra.ph/file/732db4f71176be153b0b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37843",
        "pageSeq": 37843
    },
    {
        "IDcode": 37844,
        "title": "Ninja - Tsubaki (Blue Archive)",
        "cover": "https://telegra.ph/file/ba72abc759203ec3150bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37844",
        "pageSeq": 37844
    },
    {
        "IDcode": 37845,
        "title": "Saya The Fox - 2B/Christmast (Nier Automata)",
        "cover": "https://telegra.ph/file/ffb42aa72eb6de3096f8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37845",
        "pageSeq": 37845
    },
    {
        "IDcode": 37846,
        "title": "Xiao - 2B/Christmast (Nier Automata)",
        "cover": "https://telegra.ph/file/f1271c7a65f0626d631e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37846",
        "pageSeq": 37846
    },
    {
        "IDcode": 37847,
        "title": "Hidori Rose - Barbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/e2a20aed0a5bdca327d11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37847",
        "pageSeq": 37847
    },
    {
        "IDcode": 37848,
        "title": "Arty & KaYa Huang - Saber Alter & Jeanne Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/a863e3ef7cf08ba6c51fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37848",
        "pageSeq": 37848
    },
    {
        "IDcode": 37849,
        "title": "Mikomin Hokina - 2B/Night Dress (Nier Automata)",
        "cover": "https://telegra.ph/file/afb13fdc726e637002b7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37849",
        "pageSeq": 37849
    },
    {
        "IDcode": 37850,
        "title": "过期米线线喵 - Succubus (Cosplay)",
        "cover": "https://telegra.ph/file/c81b6b5288523ed99c176.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37850",
        "pageSeq": 37850
    },
    {
        "IDcode": 37851,
        "title": "Kitkat - Bárbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/3f4fff514634e37f9ce22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37851",
        "pageSeq": 37851
    },
    {
        "IDcode": 37852,
        "title": "Hana Bunny - Akali (KDA/LoL)",
        "cover": "https://telegra.ph/file/074a3f5c0808ed75c1ab1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37852",
        "pageSeq": 37852
    },
    {
        "IDcode": 37853,
        "title": "Hana Bunny - Bears (Cosplay)",
        "cover": "https://telegra.ph/file/385e3848e116f562b23ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37853",
        "pageSeq": 37853
    },
    {
        "IDcode": 37854,
        "title": "Yoshinobi - Yamashiro/Swimsuit (Azur Lane)",
        "cover": "https://telegra.ph/file/4ce311c6d281c6cbcd5ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37854",
        "pageSeq": 37854
    },
    {
        "IDcode": 37855,
        "title": "Mikomin Hokina & Yuzupyon - Saber Alter & Rin Tohsaka (Fate Grand Order)",
        "cover": "https://telegra.ph/file/5ec06bbe756e5e6a0d03e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37855",
        "pageSeq": 37855
    },
    {
        "IDcode": 37856,
        "title": "Hoshilily - Shinano (Azur Lane)",
        "cover": "https://telegra.ph/file/b7269807314208b1f438d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37856",
        "pageSeq": 37856
    },
    {
        "IDcode": 37857,
        "title": "Astra - Cheetah (Random Cosplay)",
        "cover": "https://telegra.ph/file/dd4da51a4c845a629fc41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37857",
        "pageSeq": 37857
    },
    {
        "IDcode": 37858,
        "title": "Astra - Lencery/Cosplay (Random)",
        "cover": "https://telegra.ph/file/4c4431ca6798570c83406.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37858",
        "pageSeq": 37858
    },
    {
        "IDcode": 37859,
        "title": "Azami - Toga Swimsuit (Boku no Hero)",
        "cover": "https://telegra.ph/file/79124829e73a64bf51599.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37859",
        "pageSeq": 37859
    },
    {
        "IDcode": 37860,
        "title": "Hidori Rose - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/cceb0abaf38271cf89f1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37860",
        "pageSeq": 37860
    },
    {
        "IDcode": 37861,
        "title": "Astra - Perseus/Takao (Azur Lane)",
        "cover": "https://telegra.ph/file/fcb072b03da880713e8b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37861",
        "pageSeq": 37861
    },
    {
        "IDcode": 37862,
        "title": "Hidori Rose - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/5307adee62c7146b3cd2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37862",
        "pageSeq": 37862
    },
    {
        "IDcode": 37863,
        "title": "Qqueen - Fusou (Azur Lane)",
        "cover": "https://telegra.ph/file/a5920f4bb99482fcc6f67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37863",
        "pageSeq": 37863
    },
    {
        "IDcode": 37864,
        "title": "Hana Bunny - Ahri/Black Cat (League of Legends)",
        "cover": "https://telegra.ph/file/a6465e058fe3d7dbae296.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37864",
        "pageSeq": 37864
    },
    {
        "IDcode": 37865,
        "title": "Astra - Saber/Mash/Sakura (Fate Series)",
        "cover": "https://telegra.ph/file/6b0361adaad181c7b7d8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37865",
        "pageSeq": 37865
    },
    {
        "IDcode": 37866,
        "title": "Mikomin Hokina - Tatsumaki (One Punch Man)",
        "cover": "https://telegra.ph/file/9d217720892d729afb640.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37866",
        "pageSeq": 37866
    },
    {
        "IDcode": 37867,
        "title": "Eri Kitami - Neptune (Chou Jigen Game Neptune)",
        "cover": "https://telegra.ph/file/fc2e5b466d55d95f16162.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37867",
        "pageSeq": 37867
    },
    {
        "IDcode": 37868,
        "title": "Queenie Chuppy - Mitsuri ( Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/47672fa71b8f74de1ba7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37868",
        "pageSeq": 37868
    },
    {
        "IDcode": 37869,
        "title": "Eri Kitami - ZeroTwo (Darling In The Frannxx)",
        "cover": "https://telegra.ph/file/e3763dc2662b467213bd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37869",
        "pageSeq": 37869
    },
    {
        "IDcode": 37870,
        "title": "Byoru - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/a1abc29da9130b2efb046.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37870",
        "pageSeq": 37870
    },
    {
        "IDcode": 37871,
        "title": "Byoru - Jiangshi (Fate Grand Order)",
        "cover": "https://telegra.ph/file/d06a70aa3444cc58cf611.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37871",
        "pageSeq": 37871
    },
    {
        "IDcode": 37872,
        "title": "Hokunaimeko - Saber Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ff54867a9bcc95843f30a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37872",
        "pageSeq": 37872
    },
    {
        "IDcode": 37873,
        "title": "Mikomin Hokina - Asuna (Sword Art Online)",
        "cover": "https://telegra.ph/file/a6bfac4174e922c7d31e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37873",
        "pageSeq": 37873
    },
    {
        "IDcode": 37874,
        "title": "KaYa Huang - 2B (NierAutomata)",
        "cover": "https://telegra.ph/file/bc29060e1e292c35e2fd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37874",
        "pageSeq": 37874
    },
    {
        "IDcode": 37875,
        "title": "Hana Bunny - Lala (To Love Ru)",
        "cover": "https://telegra.ph/file/5693fb5f43e3118503927.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37875",
        "pageSeq": 37875
    },
    {
        "IDcode": 37876,
        "title": "Evenink - Kai'Sa (KDA/League of Legends)",
        "cover": "https://telegra.ph/file/645081100aff296fbb05b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37876",
        "pageSeq": 37876
    },
    {
        "IDcode": 37877,
        "title": "Miu - Kurumi/Neko (Date A Live)",
        "cover": "https://telegra.ph/file/8862f2a4df1b2f4b00318.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37877",
        "pageSeq": 37877
    },
    {
        "IDcode": 37878,
        "title": "Sally Dorasnow - Kurumi/Neko (Date A Live)",
        "cover": "https://telegra.ph/file/f8831fd11055e6dd11a23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37878",
        "pageSeq": 37878
    },
    {
        "IDcode": 37879,
        "title": "Byoru - Ganyu/Milk (Genshin Impact)",
        "cover": "https://telegra.ph/file/c257556516489ab528253.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37879",
        "pageSeq": 37879
    },
    {
        "IDcode": 37880,
        "title": "Arty Huang - Belfast/Lencery (Azur Lane)",
        "cover": "https://telegra.ph/file/4b1e5d95fe80e676d7521.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37880",
        "pageSeq": 37880
    },
    {
        "IDcode": 37881,
        "title": "Hidori Rose - Bunny/Maid (Super Sonico)",
        "cover": "https://telegra.ph/file/1495c56570c9f45f99a71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37881",
        "pageSeq": 37881
    },
    {
        "IDcode": 37882,
        "title": "Sally Dorasnow - Sora Kasugano/Bunny (Yosuga No Sora)",
        "cover": "https://telegra.ph/file/e945b1b0baf0e95111cad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37882",
        "pageSeq": 37882
    },
    {
        "IDcode": 37883,
        "title": "Xiao Rong - Succubus (Cosplay Random)",
        "cover": "https://telegra.ph/file/cfeeb1edc8e250b692a07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37883",
        "pageSeq": 37883
    },
    {
        "IDcode": 37884,
        "title": "Hana Bunny - 2B/Lencery (Nierautomata)",
        "cover": "https://telegra.ph/file/20325a80562be92e24b84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37884",
        "pageSeq": 37884
    },
    {
        "IDcode": 37885,
        "title": "Mikomin Hokina - Asuna/Swimsuit (Sword Art Online)",
        "cover": "https://telegra.ph/file/4befba8f1a754787b3bea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37885",
        "pageSeq": 37885
    },
    {
        "IDcode": 37886,
        "title": "Mikomin Hokina & Gumiho Arts - 2B Bunny (Nierautomata)",
        "cover": "https://telegra.ph/file/726fb8d040111ec6463f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37886",
        "pageSeq": 37886
    },
    {
        "IDcode": 37887,
        "title": "Nikumikyo - Cheerleader (Model)",
        "cover": "https://telegra.ph/file/ec810af24c6f82bad2a19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37887",
        "pageSeq": 37887
    },
    {
        "IDcode": 37888,
        "title": "Hidori Rose - Kana Kamui (Kobayashi-san)",
        "cover": "https://telegra.ph/file/6ffaded09ea412740b72a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37888",
        "pageSeq": 37888
    },
    {
        "IDcode": 37889,
        "title": "Hidori Rose - Miko Kurokawa (Original Character/Binging)",
        "cover": "https://telegra.ph/file/ec321126386639a2ba617.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37889",
        "pageSeq": 37889
    },
    {
        "IDcode": 37890,
        "title": "Shiro Kitsune - Princess Zelda (The Legend of Zelda)",
        "cover": "https://telegra.ph/file/6541f4e40c9b05ce94fd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37890",
        "pageSeq": 37890
    },
    {
        "IDcode": 37891,
        "title": "Azami - 2B/Shinobi (NierAutomata)",
        "cover": "https://telegra.ph/file/3081d3ed1938c83982783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37891",
        "pageSeq": 37891
    },
    {
        "IDcode": 37892,
        "title": "Okitarinka - Momo Deviluke (To LOVE-ru)",
        "cover": "https://telegra.ph/file/85fe1c039a421420e39d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37892",
        "pageSeq": 37892
    },
    {
        "IDcode": 37893,
        "title": "Mikomin Hokina - Asuna (Sword Art Online)",
        "cover": "https://telegra.ph/file/e0480dead3b2a64b88b0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37893",
        "pageSeq": 37893
    },
    {
        "IDcode": 37894,
        "title": "Hana Bunny - Ahri (League Of Legends)",
        "cover": "https://telegra.ph/file/f8aa1b08a7a4c6613a999.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37894",
        "pageSeq": 37894
    },
    {
        "IDcode": 37895,
        "title": "Hane Ame - Vivy (Vivy: Fluorite Eye's Song)",
        "cover": "https://telegra.ph/file/cfbf8bce52bffac59d14a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37895",
        "pageSeq": 37895
    },
    {
        "IDcode": 37896,
        "title": "Moondays - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/39315a0c723c80a007bc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37896",
        "pageSeq": 37896
    },
    {
        "IDcode": 37897,
        "title": "念念D - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/d9afe952c092d1fe20633.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37897",
        "pageSeq": 37897
    },
    {
        "IDcode": 37898,
        "title": "UyUy - Makima (Chai Saw Man)",
        "cover": "https://telegra.ph/file/a4cb24475c2c09b3c180e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37898",
        "pageSeq": 37898
    },
    {
        "IDcode": 37899,
        "title": "Azami - Misaki (Dead or Alive)",
        "cover": "https://telegra.ph/file/29074fb2aa446372f6fa0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37899",
        "pageSeq": 37899
    },
    {
        "IDcode": 37900,
        "title": "Mikomin Hokina - Touka Kirishima (Tokyo Ghoul)",
        "cover": "https://telegra.ph/file/ec731c1e2b091f247f681.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37900",
        "pageSeq": 37900
    },
    {
        "IDcode": 37901,
        "title": "Hana Bunny - Akeno Himejima/Lencery (High School DxD)",
        "cover": "https://telegra.ph/file/d3cd49e4530a8c2015ce5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37901",
        "pageSeq": 37901
    }
];
