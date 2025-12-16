// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 27781,
        "title": "Sonson &BamBi밤비 Maid Mansion W [153P1.13G]",
        "cover": "https://telegra.ph/file/4e55e6dfd753d2e562cb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27781",
        "pageSeq": 27781
    },
    {
        "IDcode": 27782,
        "title": "Bomi (보미) - NO.10 [BLUECAKE] Christmas with my Bomi & Lover [146P-2.18GB]",
        "cover": "https://telegra.ph/file/f64b3e38ec19d193f4551.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27782",
        "pageSeq": 27782
    },
    {
        "IDcode": 27783,
        "title": "[Bimilstory] Bomi (보미) Sexy bunny girl maid",
        "cover": "https://telegra.ph/file/2324fd156cd7446209bb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27783",
        "pageSeq": 27783
    },
    {
        "IDcode": 27784,
        "title": "Bomi(보미) - [BLUECAKE] Siren [71P-131MB]",
        "cover": "https://telegra.ph/file/1af296c39b1c8a26eb10e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27784",
        "pageSeq": 27784
    },
    {
        "IDcode": 27785,
        "title": "Bomi (보미) - [BLUECAKE] Pink Dancer [73P-109MB]",
        "cover": "https://telegra.ph/file/82cbf4f13d6f38edc42fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27785",
        "pageSeq": 27785
    },
    {
        "IDcode": 27786,
        "title": "Bomi (보미) - [BLUECAKE] Secret Billiard Room [82P-283MB]",
        "cover": "https://telegra.ph/file/76d66b2633e3488e6fd09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27786",
        "pageSeq": 27786
    },
    {
        "IDcode": 27787,
        "title": "Bomi (보미) - NO.015 [BLUECAKE] &Zia (지아) Fate Saber x Thosaka Rin -Lingerie ver [128P-1.65GB]",
        "cover": "https://telegra.ph/file/aed2a87d922545f7ba13b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27787",
        "pageSeq": 27787
    },
    {
        "IDcode": 27788,
        "title": "Bomi (보미) - [BLUECAKE] Mini Bikini [80P-785MB]",
        "cover": "https://telegra.ph/file/fdcacb4b57643ffee9c9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27788",
        "pageSeq": 27788
    },
    {
        "IDcode": 27789,
        "title": "[LOOZY] Bomi - PT Girl Bomi [126P-1.91GB]",
        "cover": "https://telegra.ph/file/1ef360497166c2c99beee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27789",
        "pageSeq": 27789
    },
    {
        "IDcode": 27790,
        "title": "Bomi (보미) - [LOOZY] “Your own fantasy” [123P-1.73GB]",
        "cover": "https://telegra.ph/file/4a1e76331addc5a6e0771.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27790",
        "pageSeq": 27790
    },
    {
        "IDcode": 27791,
        "title": "Bomi (보미) - [DJAWA] “Bomistry #2” [45P-257MB]",
        "cover": "https://telegra.ph/file/9fe1c27cb205e8ce442b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27791",
        "pageSeq": 27791
    },
    {
        "IDcode": 27792,
        "title": "Bomi (보미) - [BLUECAKE] City of Night [76P-778MB]",
        "cover": "https://telegra.ph/file/334b2f369a5277e1aa8b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27792",
        "pageSeq": 27792
    },
    {
        "IDcode": 27793,
        "title": "Bomi (보미) - [Loozy] Thin Piece Between [63P-809MB]",
        "cover": "https://telegra.ph/file/5bacd6e929849aba50f79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27793",
        "pageSeq": 27793
    },
    {
        "IDcode": 27794,
        "title": "Bbuttermilk Vol.24 Bomi",
        "cover": "https://telegra.ph/file/937b068b42946a7efa426.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27794",
        "pageSeq": 27794
    },
    {
        "IDcode": 27795,
        "title": "Bomi (보미) - [DJAWA] “Bomistry #3” [58P-527MB]",
        "cover": "https://telegra.ph/file/c4308e6fa4322c478b55d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27795",
        "pageSeq": 27795
    },
    {
        "IDcode": 27796,
        "title": "Bomi (보미) - [DJAWA] Tae Ri (태리) “Devil 666 & Angel 777” [80P-1.40GB]",
        "cover": "https://telegra.ph/file/dbc80491b65fffe30fcf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27796",
        "pageSeq": 27796
    },
    {
        "IDcode": 27797,
        "title": "Bomi (보미) - [LOOZY] Roomate [52P-955MB]",
        "cover": "https://telegra.ph/file/33c46adfe191b6c4323d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27797",
        "pageSeq": 27797
    },
    {
        "IDcode": 27798,
        "title": "Bomi (보미) - [LOOZY] The undress [69P-906MB]",
        "cover": "https://telegra.ph/file/61689a1d16194828ca432.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27798",
        "pageSeq": 27798
    },
    {
        "IDcode": 27799,
        "title": "Bomi (보미) - [BLUECAKE] Catalina [98P-758MB]",
        "cover": "https://telegra.ph/file/10e600f6bff7471a954e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27799",
        "pageSeq": 27799
    },
    {
        "IDcode": 27800,
        "title": "Bomi (보미) - [DJAWA] “Bomistry #1” [44P-236MB]",
        "cover": "https://telegra.ph/file/af664f4bc5d96f94a9027.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27800",
        "pageSeq": 27800
    },
    {
        "IDcode": 27801,
        "title": "Bomi (보미) - [LOOZY] One day [70P-752MB]",
        "cover": "https://telegra.ph/file/575a4b59c2e28f6c557ae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27801",
        "pageSeq": 27801
    },
    {
        "IDcode": 27802,
        "title": "Bomi (보미) - [BLUECAKE] Lucifer [89P-1.58GB]",
        "cover": "https://telegra.ph/file/44cb319b2ba88efe829da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27802",
        "pageSeq": 27802
    },
    {
        "IDcode": 27803,
        "title": "Bomi (보미) - [BLUECAKE] Happy Bomiday [95P-1.14GB]",
        "cover": "https://telegra.ph/file/0587f4c29005555717d0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27803",
        "pageSeq": 27803
    },
    {
        "IDcode": 27804,
        "title": "Bomi (보미) - [BLUECAKE] &Zia (지아) Mandarin [72P-1.31GB]",
        "cover": "https://telegra.ph/file/fb0701ad7268c0d334c23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27804",
        "pageSeq": 27804
    },
    {
        "IDcode": 27805,
        "title": "Bomi (보미) - [BLUECAKE] Pure Love [109P-1.09GB]",
        "cover": "https://telegra.ph/file/adc3ba784d56452686197.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27805",
        "pageSeq": 27805
    },
    {
        "IDcode": 27806,
        "title": "Bomi (보미) - [Bimilstory] Vol.04 Cute Striped Maid [80P-573MB]",
        "cover": "https://telegra.ph/file/0ed25a82cf5b082b7ac21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27806",
        "pageSeq": 27806
    },
    {
        "IDcode": 27807,
        "title": "Bomi (보미) - [Bimilstory] Vol.05 Under Boob [80P-333MB]",
        "cover": "https://telegra.ph/file/e108188067bfc5c7e8a95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27807",
        "pageSeq": 27807
    },
    {
        "IDcode": 27808,
        "title": "Bomi (보미) Vol.07 - Dark maid",
        "cover": "https://telegra.ph/file/12b9d1e0b781c3dc49d80.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27808",
        "pageSeq": 27808
    },
    {
        "IDcode": 27809,
        "title": "Bomi (보미) Vol.08 - Boyfriend's point of view",
        "cover": "https://telegra.ph/file/752286fa7c8085dae0049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27809",
        "pageSeq": 27809
    },
    {
        "IDcode": 27810,
        "title": "Pure Media Vol.182 - Bomi (보미) [96P-662MB]",
        "cover": "https://telegra.ph/file/232aa4d94ba476a441c1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27810",
        "pageSeq": 27810
    },
    {
        "IDcode": 27811,
        "title": "[BLUECAKE] Bomi (보미) - LUST + RED.Ver",
        "cover": "https://telegra.ph/file/c81cc93f0c8c8a2609e37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27811",
        "pageSeq": 27811
    },
    {
        "IDcode": 27812,
        "title": "Bomi (보미) - [BLUECAKE] Bomi Vol.12 Hot Summer Cool Body [98P1V-1.63GB]",
        "cover": "https://telegra.ph/file/6e5679bd957b7653ba077.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27812",
        "pageSeq": 27812
    },
    {
        "IDcode": 27813,
        "title": "[Loozy] bomi Part Timer [124P-0.99GB]",
        "cover": "https://telegra.ph/file/bfe9e98041cff67aaef8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27813",
        "pageSeq": 27813
    },
    {
        "IDcode": 27814,
        "title": "[Bimilstory] Vol.11 Bomi (보미) Athletic Girl [105P-475MB]",
        "cover": "https://telegra.ph/file/db23ce035d19a726eee71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27814",
        "pageSeq": 27814
    },
    {
        "IDcode": 27815,
        "title": "Moon Night Snap_Bomi - Melody Vol 2",
        "cover": "https://telegra.ph/file/93f5f528fe9b50238902a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27815",
        "pageSeq": 27815
    },
    {
        "IDcode": 27816,
        "title": "Bomi - Bomistry 黑丝兔兔女仆&小恶魔 45P",
        "cover": "https://telegra.ph/file/896fd0d9bb16dc5d00c2c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27816",
        "pageSeq": 27816
    },
    {
        "IDcode": 27817,
        "title": "Byoru - Marin Kitagawa Bikini",
        "cover": "https://telegra.ph/file/70916bfc276eecd7ec1f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27817",
        "pageSeq": 27817
    },
    {
        "IDcode": 27818,
        "title": "Byoru - NO.57 Amber [23P-43MB]",
        "cover": "https://telegra.ph/file/2defb929ed4c8ea7e6e3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27818",
        "pageSeq": 27818
    },
    {
        "IDcode": 27819,
        "title": "Byoru - NO.56 Shenhe [17- 88MB]",
        "cover": "https://telegra.ph/file/1e8901642964b47f37d4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27819",
        "pageSeq": 27819
    },
    {
        "IDcode": 27820,
        "title": "Byoru - NO.58 Shizuku Kuroe [63P1V-1.22GB]",
        "cover": "https://telegra.ph/file/deb5ad47f13e4a995555b.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27820",
        "pageSeq": 27820
    },
    {
        "IDcode": 27821,
        "title": "Byoru - NO.59 Powa Christmas [52P1V-817MB]",
        "cover": "https://telegra.ph/file/5fd4edcf263f0a6b214b8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27821",
        "pageSeq": 27821
    },
    {
        "IDcode": 27822,
        "title": "Ankha ✧NSFW set✧ (Fullset 2 version)",
        "cover": "https://telegra.ph/file/7788806975d18bb45b69e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27822",
        "pageSeq": 27822
    },
    {
        "IDcode": 27823,
        "title": "Squirt Game ✧NSFW set✧",
        "cover": "https://telegra.ph/file/e39c2ba6b4325b082a50f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27823",
        "pageSeq": 27823
    },
    {
        "IDcode": 27824,
        "title": "Byoru - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/4b041ad5f50d130ebac8a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27824",
        "pageSeq": 27824
    },
    {
        "IDcode": 27825,
        "title": "Byoru - Hinata Akatsuki",
        "cover": "https://telegra.ph/file/ee97ee2d897a1011f9e98.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27825",
        "pageSeq": 27825
    },
    {
        "IDcode": 27826,
        "title": "Byoru - Aqua Minato [47P-75MB]",
        "cover": "https://telegra.ph/file/ae27ef8e1ff7e605f8be4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27826",
        "pageSeq": 27826
    },
    {
        "IDcode": 27827,
        "title": "Byoru - Yae Miko x Raiden Shogun [95P-242MB]",
        "cover": "https://telegra.ph/file/55516444fa4488d8ebe7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27827",
        "pageSeq": 27827
    },
    {
        "IDcode": 27828,
        "title": "Byoru - Ganyu Cow",
        "cover": "https://telegra.ph/file/173d1e48bef5fa5e08845.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27828",
        "pageSeq": 27828
    },
    {
        "IDcode": 27829,
        "title": "Byoru - Mori Calliope [47P-134MB]",
        "cover": "https://telegra.ph/file/63482ebfbaa1730fdb82c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27829",
        "pageSeq": 27829
    },
    {
        "IDcode": 27830,
        "title": "Maid Raiden ✧implied nude set✧",
        "cover": "https://telegra.ph/file/a60e75d8d45ecc524a08b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27830",
        "pageSeq": 27830
    },
    {
        "IDcode": 27831,
        "title": "Byoru - Eula HD [35P-89MB]",
        "cover": "https://telegra.ph/file/d5fc6666f138fcdb16014.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27831",
        "pageSeq": 27831
    },
    {
        "IDcode": 27832,
        "title": "Byoru - Eula HD [35P-89MB]",
        "cover": "https://telegra.ph/file/f1185a0715707b0c7ad8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27832",
        "pageSeq": 27832
    },
    {
        "IDcode": 27833,
        "title": "Byoru - Makima 57P 13V",
        "cover": "https://telegra.ph/file/63b9c97301a1df8604f46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27833",
        "pageSeq": 27833
    },
    {
        "IDcode": 27834,
        "title": "Byoru - Mashu Kyrielight Dancer [30P12V-682MB]",
        "cover": "https://telegra.ph/file/90c318b29bc1eb1dca149.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27834",
        "pageSeq": 27834
    },
    {
        "IDcode": 27835,
        "title": "Byoru - Misaki Charm Witch (Dead or Alive)",
        "cover": "https://telegra.ph/file/c592a3682de87cf7d2a3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27835",
        "pageSeq": 27835
    },
    {
        "IDcode": 27836,
        "title": "Byoru - Rizu-kyun [44P9V-1.34GB]",
        "cover": "https://telegra.ph/file/d82f5617719dec718de42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27836",
        "pageSeq": 27836
    },
    {
        "IDcode": 27837,
        "title": "Byoru - Yor Forger [68P10V-1.49GB]",
        "cover": "https://telegra.ph/file/8ba60ae307ef3b6d396b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27837",
        "pageSeq": 27837
    },
    {
        "IDcode": 27838,
        "title": "Misaki seashell bikini HD（5月31会员资源）",
        "cover": "https://telegra.ph/file/568e05ee0a2f35109004d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27838",
        "pageSeq": 27838
    },
    {
        "IDcode": 27839,
        "title": "Byoru - Marin Kitagawa [70P1V-867MB]",
        "cover": "https://telegra.ph/file/fcc4af58fdb3da0b20dfb.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27839",
        "pageSeq": 27839
    },
    {
        "IDcode": 27840,
        "title": "Byoru - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/de44671aca201abc82efa.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27840",
        "pageSeq": 27840
    },
    {
        "IDcode": 27841,
        "title": "Byoru - Houshou Marine Hololive Summer [28P-55MB]",
        "cover": "https://telegra.ph/file/069396caa7dadc97a1f75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27841",
        "pageSeq": 27841
    },
    {
        "IDcode": 27842,
        "title": "Byoru - Sakamata Chloe [90P1V-1.58GB]",
        "cover": "https://telegra.ph/file/c7c5b0d6c321d0769cd1a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27842",
        "pageSeq": 27842
    },
    {
        "IDcode": 27843,
        "title": "Byoru Pack Miss Hina",
        "cover": "https://telegra.ph/file/78e4050bf7ab24073738e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27843",
        "pageSeq": 27843
    },
    {
        "IDcode": 27844,
        "title": "Byoru - Nyotengu Dark Prison ver [20P-182MB]",
        "cover": "https://telegra.ph/file/1610ef14d5c8968edaa41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27844",
        "pageSeq": 27844
    },
    {
        "IDcode": 27845,
        "title": "Byoru - Marie Rose Bomber [28P-300MB]",
        "cover": "https://telegra.ph/file/6688f9b575092b2778fed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27845",
        "pageSeq": 27845
    },
    {
        "IDcode": 27846,
        "title": "Byoru - Chiyo [25P-162MB]",
        "cover": "https://telegra.ph/file/5fa3d82e733f2c471f77a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27846",
        "pageSeq": 27846
    },
    {
        "IDcode": 27847,
        "title": "Byoru - Aeolian [35P-105MB]",
        "cover": "https://telegra.ph/file/c88733c1af6429ad13f6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27847",
        "pageSeq": 27847
    },
    {
        "IDcode": 27848,
        "title": "Byoru - Tifa",
        "cover": "https://telegra.ph/file/d1aad7dfcfe21e6d21e43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27848",
        "pageSeq": 27848
    },
    {
        "IDcode": 27849,
        "title": "Byoru - Gawr Gura [91P-147MB]",
        "cover": "https://telegra.ph/file/2ae4e604532965ebfea0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27849",
        "pageSeq": 27849
    },
    {
        "IDcode": 27850,
        "title": "Byoru - Natigaru [56P-248MB]",
        "cover": "https://telegra.ph/file/8114b971797e3e14d395a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27850",
        "pageSeq": 27850
    },
    {
        "IDcode": 27851,
        "title": "Byoru - Arlecchino",
        "cover": "https://telegra.ph/file/4b6ad6e87fbbc226de44c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27851",
        "pageSeq": 27851
    },
    {
        "IDcode": 27852,
        "title": "Byoru - Jett[32P]",
        "cover": "https://telegra.ph/file/43375a361dbd88dac6c6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27852",
        "pageSeq": 27852
    },
    {
        "IDcode": 27853,
        "title": "Byoru - 黑崎一护",
        "cover": "https://telegra.ph/file/f9769ecf4fefd55bac664.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27853",
        "pageSeq": 27853
    },
    {
        "IDcode": 27854,
        "title": "Byoru - 妮可罗宾",
        "cover": "https://telegra.ph/file/f154c51854c2d2dac43a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27854",
        "pageSeq": 27854
    },
    {
        "IDcode": 27855,
        "title": "Byoru-Quiet[34P]",
        "cover": "https://telegra.ph/file/ea4082f4e29c2bb0eba0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27855",
        "pageSeq": 27855
    },
    {
        "IDcode": 27856,
        "title": "Byoru - Lollipops 60P 15V",
        "cover": "https://telegra.ph/file/4a2f9754e41eb303f77fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27856",
        "pageSeq": 27856
    },
    {
        "IDcode": 27857,
        "title": "Byoru - NO.55 Mitsuri Kanroji [23P-50MB]",
        "cover": "https://telegra.ph/file/f1b826b93dcb65a30ca12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27857",
        "pageSeq": 27857
    },
    {
        "IDcode": 27858,
        "title": "Byoru - Rosaria [33P-88MB]",
        "cover": "https://telegra.ph/file/a14a3573a8c5aac3e2599.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27858",
        "pageSeq": 27858
    },
    {
        "IDcode": 27859,
        "title": "Byoru - Futaba Sakura [59P7V-483MB]",
        "cover": "https://telegra.ph/file/07bfae724da5fd800c610.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27859",
        "pageSeq": 27859
    },
    {
        "IDcode": 27860,
        "title": "Byoru - Pack Leviathan",
        "cover": "https://telegra.ph/file/eaf8979d073ff97ea9491.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27860",
        "pageSeq": 27860
    },
    {
        "IDcode": 27861,
        "title": "Byoru Pack Yumemi Riamu Neko",
        "cover": "https://telegra.ph/file/02646f26d666e0040f697.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27861",
        "pageSeq": 27861
    },
    {
        "IDcode": 27862,
        "title": "Byoru - Gura Selfies [38P-64MB]",
        "cover": "https://telegra.ph/file/54a168828593f129356fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27862",
        "pageSeq": 27862
    },
    {
        "IDcode": 27863,
        "title": "[Cos]Byoru - Kainé[25P]",
        "cover": "https://telegra.ph/file/06c64115eaa5e324d2796.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27863",
        "pageSeq": 27863
    },
    {
        "IDcode": 27864,
        "title": "[Cos]Byoru - Pai Mei [41P+9V]",
        "cover": "https://telegra.ph/file/a6777b03038104169c303.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27864",
        "pageSeq": 27864
    },
    {
        "IDcode": 27865,
        "title": "Byoru – Nekoji [28P]",
        "cover": "https://telegra.ph/file/b21d67558df1c33a890f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27865",
        "pageSeq": 27865
    },
    {
        "IDcode": 27866,
        "title": "Byoru-Ahri bikini[30P]",
        "cover": "https://telegra.ph/file/0463910a447204a2a1b0f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27866",
        "pageSeq": 27866
    },
    {
        "IDcode": 27867,
        "title": "Byoru-Aphrodite[30P]",
        "cover": "https://telegra.ph/file/d7b2e73e35eac28259e42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27867",
        "pageSeq": 27867
    },
    {
        "IDcode": 27868,
        "title": "Byoru-Baby oil lolita [18P]",
        "cover": "https://telegra.ph/file/4ec01394a8f0e70205b65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27868",
        "pageSeq": 27868
    },
    {
        "IDcode": 27869,
        "title": "Byoru-&Azami Martini Dress[51P10V]",
        "cover": "https://telegra.ph/file/0e00a4ce2d7ac90f6c36c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27869",
        "pageSeq": 27869
    },
    {
        "IDcode": 27870,
        "title": "CarryKey Pack Katarina",
        "cover": "https://telegra.ph/file/44fa07ef1566506ef0c9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27870",
        "pageSeq": 27870
    },
    {
        "IDcode": 27871,
        "title": "CatiCornplay Pack Eris",
        "cover": "https://telegra.ph/file/310f957b1c49df8f5ad16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27871",
        "pageSeq": 27871
    },
    {
        "IDcode": 27872,
        "title": "Cazi 姬纪 - 迷魂香[20P-256MB]",
        "cover": "https://telegra.ph/file/16e338c608472d7d093bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27872",
        "pageSeq": 27872
    },
    {
        "IDcode": 27873,
        "title": "Cazi-维修工[21P]",
        "cover": "https://legra.ph/file/f97abc5cdde5aea991c16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27873",
        "pageSeq": 27873
    },
    {
        "IDcode": 27874,
        "title": "Cazi-厨娘[19P]",
        "cover": "https://legra.ph/file/e79ae4b614e259adb7d68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27874",
        "pageSeq": 27874
    },
    {
        "IDcode": 27875,
        "title": "Cazi姬纪-欧风合集[53P]",
        "cover": "https://legra.ph/file/0a67a7133c485d7f59106.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27875",
        "pageSeq": 27875
    },
    {
        "IDcode": 27876,
        "title": "2B Cheongsam ver. (Nier_ Automata)",
        "cover": "https://telegra.ph/file/21212e6a0fa35e2980f7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27876",
        "pageSeq": 27876
    },
    {
        "IDcode": 27877,
        "title": "Chimurin – Pack Cyber Cat[102P-187MB]",
        "cover": "https://telegra.ph/file/0c011dc55d1ed599ab9df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27877",
        "pageSeq": 27877
    },
    {
        "IDcode": 27878,
        "title": "Chono Black - NO.009 DVa chocolate [16P-150MB]",
        "cover": "https://telegra.ph/file/a0a7c3b4a5749cc03221f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27878",
        "pageSeq": 27878
    },
    {
        "IDcode": 27879,
        "title": "[Moon Night Snap] Dame (담) – Happy Day Vol.1",
        "cover": "https://telegra.ph/file/d472c0a925adb1c891c7a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27879",
        "pageSeq": 27879
    },
    {
        "IDcode": 27880,
        "title": "[Moon Night Snap] Dame (담) – Happy Day Vol.2",
        "cover": "https://telegra.ph/file/c9a47c87f4863d473f74d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27880",
        "pageSeq": 27880
    }
];
