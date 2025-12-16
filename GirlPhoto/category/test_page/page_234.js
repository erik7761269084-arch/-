// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 45472,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f1f63f97bef06521e4fa4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45472",
        "pageSeq": 45472
    },
    {
        "IDcode": 45473,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9e1bd28b39e7ac53fc2b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45473",
        "pageSeq": 45473
    },
    {
        "IDcode": 45474,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c31e3ea50e43f664566b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45474",
        "pageSeq": 45474
    },
    {
        "IDcode": 45475,
        "title": "[一条はな] 星街すいせい収集 - Page 1",
        "cover": "https://telegra.ph/file/bb0b971738561ce02f9ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45475",
        "pageSeq": 45475
    },
    {
        "IDcode": 45476,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9ba6511724d9dadecc661.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45476",
        "pageSeq": 45476
    },
    {
        "IDcode": 45477,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/41544394407aaef47bc1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45477",
        "pageSeq": 45477
    },
    {
        "IDcode": 45478,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/06135ec26a2ba12eaa894.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45478",
        "pageSeq": 45478
    },
    {
        "IDcode": 45479,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/eb43d3cd83390d6428cb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45479",
        "pageSeq": 45479
    },
    {
        "IDcode": 45480,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/aa206de3e14e60a2f5323.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45480",
        "pageSeq": 45480
    },
    {
        "IDcode": 45481,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/3ce9fe89d78c634f61d7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45481",
        "pageSeq": 45481
    },
    {
        "IDcode": 45482,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/21141ea6daed6e3258672.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45482",
        "pageSeq": 45482
    },
    {
        "IDcode": 45483,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/afa63df1d2be03773dc64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45483",
        "pageSeq": 45483
    },
    {
        "IDcode": 45484,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1c1a5c9ada5da7b56be4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45484",
        "pageSeq": 45484
    },
    {
        "IDcode": 45485,
        "title": "女仆能代庄园 - Page 1",
        "cover": "https://telegra.ph/file/0c66292692c51e3b7b9e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45485",
        "pageSeq": 45485
    },
    {
        "IDcode": 45486,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/408f9e890109b59c4f0b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45486",
        "pageSeq": 45486
    },
    {
        "IDcode": 45487,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1e3c57669c8a1f901753e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45487",
        "pageSeq": 45487
    },
    {
        "IDcode": 45488,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ee03f216ba074268f9af1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45488",
        "pageSeq": 45488
    },
    {
        "IDcode": 45489,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8f70925807d82624a8ed8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45489",
        "pageSeq": 45489
    },
    {
        "IDcode": 45490,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c701dde6984d104c7b0a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45490",
        "pageSeq": 45490
    },
    {
        "IDcode": 45491,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b96815bcb4a3366323e4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45491",
        "pageSeq": 45491
    },
    {
        "IDcode": 45492,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/46681d41cda6e7a81889d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45492",
        "pageSeq": 45492
    },
    {
        "IDcode": 45493,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ed3561fb6005c2fdf0195.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45493",
        "pageSeq": 45493
    },
    {
        "IDcode": 45494,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ade042c500ba46c6b9e38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45494",
        "pageSeq": 45494
    },
    {
        "IDcode": 45495,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/37cddbe4e32d041f21b37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45495",
        "pageSeq": 45495
    },
    {
        "IDcode": 45496,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d53dc63257ab718c80bb8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45496",
        "pageSeq": 45496
    },
    {
        "IDcode": 45497,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f52a8fc0d3583d6a83d44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45497",
        "pageSeq": 45497
    },
    {
        "IDcode": 45498,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c4d3d8f163f40218dd410.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45498",
        "pageSeq": 45498
    },
    {
        "IDcode": 45499,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/37731c899881aa5be20b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45499",
        "pageSeq": 45499
    },
    {
        "IDcode": 45500,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/07d730dfaf5008a66fad7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45500",
        "pageSeq": 45500
    },
    {
        "IDcode": 45501,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f05d68d66abf43e0c182d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45501",
        "pageSeq": 45501
    },
    {
        "IDcode": 45502,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/007ce968182141a3d62f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45502",
        "pageSeq": 45502
    },
    {
        "IDcode": 45503,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9f46d14710ce5b216ac6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45503",
        "pageSeq": 45503
    },
    {
        "IDcode": 45504,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/cb0e59ce887528830f0ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45504",
        "pageSeq": 45504
    },
    {
        "IDcode": 45505,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/aa8ba2267eb9617030286.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45505",
        "pageSeq": 45505
    },
    {
        "IDcode": 45506,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1699374c68b3a75d103e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45506",
        "pageSeq": 45506
    },
    {
        "IDcode": 45507,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/0bce92b21d0f47d382f9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45507",
        "pageSeq": 45507
    },
    {
        "IDcode": 45508,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/3a31ef2334bbe640486d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45508",
        "pageSeq": 45508
    },
    {
        "IDcode": 45509,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ab743a2b720b03338483e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45509",
        "pageSeq": 45509
    },
    {
        "IDcode": 45510,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/4c5e4fe8b20db9f0d6613.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45510",
        "pageSeq": 45510
    },
    {
        "IDcode": 45511,
        "title": "G44不会受伤 NO.085 水兰儿白旗袍 - Page 1",
        "cover": "https://telegra.ph/file/83929abdecdaa92179df5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45511",
        "pageSeq": 45511
    },
    {
        "IDcode": 45512,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8ee4460083c9fe6fdc719.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45512",
        "pageSeq": 45512
    },
    {
        "IDcode": 45513,
        "title": "猫と爪呸罗呸罗-莫娜（猫爪呸罗呸罗） - Page 1",
        "cover": "https://telegra.ph/file/f1f8235cae155966c9c66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45513",
        "pageSeq": 45513
    },
    {
        "IDcode": 45514,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d4f72db7fb433f07f95fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45514",
        "pageSeq": 45514
    },
    {
        "IDcode": 45515,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b12c792110afbc62f329c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45515",
        "pageSeq": 45515
    },
    {
        "IDcode": 45516,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/789c663ef418f459eceff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45516",
        "pageSeq": 45516
    },
    {
        "IDcode": 45517,
        "title": "[在下萝莉控ii] 埃吉尔＋欧根亲王＋路易九世＋爱宕 (碧蓝航线) - Page 1",
        "cover": "https://telegra.ph/file/711f472d424c4ee4c064a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45517",
        "pageSeq": 45517
    },
    {
        "IDcode": 45518,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/5e61c7d68efece1e56a34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45518",
        "pageSeq": 45518
    },
    {
        "IDcode": 45519,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2c8f974e1166c8993748d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45519",
        "pageSeq": 45519
    },
    {
        "IDcode": 45520,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2722b4a242b02956980e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45520",
        "pageSeq": 45520
    },
    {
        "IDcode": 45521,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f0de7fdfa078faa177438.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45521",
        "pageSeq": 45521
    },
    {
        "IDcode": 45522,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9b8fa399f89c0b68aa8d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45522",
        "pageSeq": 45522
    },
    {
        "IDcode": 45523,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/6cc5d9adb1c5d87a9f1af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45523",
        "pageSeq": 45523
    },
    {
        "IDcode": 45524,
        "title": "tomgirl - Page 1",
        "cover": "https://telegra.ph/file/3a50b42cb180e778105a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45524",
        "pageSeq": 45524
    },
    {
        "IDcode": 45525,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e755d5fb9e51b2526500f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45525",
        "pageSeq": 45525
    },
    {
        "IDcode": 45526,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8dc23960dbcc9c6ccb18d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45526",
        "pageSeq": 45526
    },
    {
        "IDcode": 45527,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2f2b6b65b9d6e8d3bf5b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45527",
        "pageSeq": 45527
    },
    {
        "IDcode": 45528,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2306b235f995420a37f62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45528",
        "pageSeq": 45528
    },
    {
        "IDcode": 45529,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8e33351a6f395fafa3d4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45529",
        "pageSeq": 45529
    },
    {
        "IDcode": 45530,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/159f931543e4d0a14c0e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45530",
        "pageSeq": 45530
    },
    {
        "IDcode": 45531,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8b918f039d9b703b1a8e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45531",
        "pageSeq": 45531
    },
    {
        "IDcode": 45532,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8b0e7babea3a527e71024.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45532",
        "pageSeq": 45532
    },
    {
        "IDcode": 45533,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/70cc54069a61d673e47ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45533",
        "pageSeq": 45533
    },
    {
        "IDcode": 45534,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/bfe150b3a15d9571a61e0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45534",
        "pageSeq": 45534
    },
    {
        "IDcode": 45535,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/43252700213c8d63e7acc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45535",
        "pageSeq": 45535
    },
    {
        "IDcode": 45536,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/5115a354a525e7b7c7579.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45536",
        "pageSeq": 45536
    },
    {
        "IDcode": 45537,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1a43a5bf03462ff8d6b4d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45537",
        "pageSeq": 45537
    },
    {
        "IDcode": 45538,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9231e5fa621f27a358f4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45538",
        "pageSeq": 45538
    },
    {
        "IDcode": 45539,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/69b22e0925f9a6f9b6fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45539",
        "pageSeq": 45539
    },
    {
        "IDcode": 45540,
        "title": "[HERESY (林檎蜜紀)] エウルア (原神) - Page 1",
        "cover": "https://telegra.ph/file/df975e1cbc0cf824f1753.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45540",
        "pageSeq": 45540
    },
    {
        "IDcode": 45541,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/50d6660b2f1f5db072e51.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45541",
        "pageSeq": 45541
    },
    {
        "IDcode": 45542,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e2e8b79dc80d51f5fafc1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45542",
        "pageSeq": 45542
    },
    {
        "IDcode": 45543,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/27892e9dec4eb0aa12de7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45543",
        "pageSeq": 45543
    },
    {
        "IDcode": 45544,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/becf39c047a6729cd85a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45544",
        "pageSeq": 45544
    },
    {
        "IDcode": 45545,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/beb0a6b28dcf27fa91703.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45545",
        "pageSeq": 45545
    },
    {
        "IDcode": 45546,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c1bf4cd5169a1108f25e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45546",
        "pageSeq": 45546
    },
    {
        "IDcode": 45547,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d664e3592cfe5a600b00c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45547",
        "pageSeq": 45547
    },
    {
        "IDcode": 45548,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/aa36f27bf8ea6acf0e522.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45548",
        "pageSeq": 45548
    },
    {
        "IDcode": 45549,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d773e390d44cfab5f2917.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45549",
        "pageSeq": 45549
    },
    {
        "IDcode": 45550,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d29f178f8b188447bd5d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45550",
        "pageSeq": 45550
    },
    {
        "IDcode": 45551,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/da0f6078a4574d1809567.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45551",
        "pageSeq": 45551
    },
    {
        "IDcode": 45552,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8f1161c9ad9bea875d643.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45552",
        "pageSeq": 45552
    },
    {
        "IDcode": 45553,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/df7b8a708734408e575d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45553",
        "pageSeq": 45553
    },
    {
        "IDcode": 45554,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/a08b96ee3202ff534004f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45554",
        "pageSeq": 45554
    },
    {
        "IDcode": 45555,
        "title": "[千夜未来] 大凤 - Page 1",
        "cover": "https://telegra.ph/file/e658b1c14f9c354d3e063.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45555",
        "pageSeq": 45555
    },
    {
        "IDcode": 45556,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/6d913a0dd8863cccec432.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45556",
        "pageSeq": 45556
    },
    {
        "IDcode": 45557,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/7e4f84ac4cfc51f9da7e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45557",
        "pageSeq": 45557
    },
    {
        "IDcode": 45558,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/a22269e9327059096634a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45558",
        "pageSeq": 45558
    },
    {
        "IDcode": 45559,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e0e71c1d51c6d31b256cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45559",
        "pageSeq": 45559
    },
    {
        "IDcode": 45560,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/de289d7ec9b090c636c29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45560",
        "pageSeq": 45560
    },
    {
        "IDcode": 45561,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/dfd27c917e9db558d1d01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45561",
        "pageSeq": 45561
    },
    {
        "IDcode": 45562,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f281574ad5dc2ced55a75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45562",
        "pageSeq": 45562
    },
    {
        "IDcode": 45563,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f515c91e399fb979e6f5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45563",
        "pageSeq": 45563
    },
    {
        "IDcode": 45564,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d5bee7a8429fe6f472f0b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45564",
        "pageSeq": 45564
    },
    {
        "IDcode": 45565,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/a254e3929f75e6f969cf1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45565",
        "pageSeq": 45565
    },
    {
        "IDcode": 45566,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ecbe0065710519b1192fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45566",
        "pageSeq": 45566
    },
    {
        "IDcode": 45567,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/89d3023de67d3a1fbeabf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45567",
        "pageSeq": 45567
    },
    {
        "IDcode": 45568,
        "title": "[岡田ゆい] 3日目❤前にも後ろにもいれてイキ果てちゃいます❤ - Page 1",
        "cover": "https://telegra.ph/file/fe6971f373c62566fb0b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45568",
        "pageSeq": 45568
    },
    {
        "IDcode": 45569,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/33003a24dd98ef40ffeff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45569",
        "pageSeq": 45569
    },
    {
        "IDcode": 45570,
        "title": "[Yuki亭] 🌸八重神子🌸 - Page 1",
        "cover": "https://telegra.ph/file/7c3415b683fa82160526a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45570",
        "pageSeq": 45570
    },
    {
        "IDcode": 45571,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/5659ecba932c3d871750c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45571",
        "pageSeq": 45571
    }
];
