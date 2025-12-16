// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 22485,
        "title": "葛生w 宇都宫沙希女警 60P4V",
        "cover": "https://image.acg.lol/file/2025/11/15/1-16976a51db5ce6a74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22485",
        "pageSeq": 22485
    },
    {
        "IDcode": 22486,
        "title": "皮皮奶 房东太太 50P",
        "cover": "https://image.acg.lol/file/2025/11/15/1-1a808b0da89dcf0b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22486",
        "pageSeq": 22486
    },
    {
        "IDcode": 22487,
        "title": "奈汐酱nice 渐变袜 41P6V",
        "cover": "https://image.acg.lol/file/2025/11/15/1-1c6194b64a164f061.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22487",
        "pageSeq": 22487
    },
    {
        "IDcode": 22488,
        "title": "十万珍吱伏特 中华熊猫 168P5V",
        "cover": "https://image.acg.lol/file/2025/11/15/1-1b5082f1636c5691b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22488",
        "pageSeq": 22488
    },
    {
        "IDcode": 22489,
        "title": "cosplay打赏群 预览目录（部分）",
        "cover": "https://image.acg.lol/file/2024/09/10/018.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22489",
        "pageSeq": 22489
    },
    {
        "IDcode": 22490,
        "title": "双木扶苏 水色地雷",
        "cover": "https://image.acg.lol/file/2025/11/21/6T0A3674.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22490",
        "pageSeq": 22490
    },
    {
        "IDcode": 22491,
        "title": "白栎Shirly 琴音 66P10V1.25GB",
        "cover": "https://image.acg.lol/file/2025/11/21/1-1f2638319cc18630a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22491",
        "pageSeq": 22491
    },
    {
        "IDcode": 22492,
        "title": "上杉绘梨落 柴郡同人 24P377MB",
        "cover": "https://image.acg.lol/file/2025/11/21/1-1ac3fcc7985f00f15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22492",
        "pageSeq": 22492
    },
    {
        "IDcode": 22493,
        "title": "上杉绘梨落 葬送的芙莉莲 44P536MB",
        "cover": "https://image.acg.lol/file/2025/11/21/1-147d50546b2b93575.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22493",
        "pageSeq": 22493
    },
    {
        "IDcode": 22494,
        "title": "桜井宁宁 白丝修女 40P2V438MB",
        "cover": "https://image.acg.lol/file/2025/11/21/1-35ebe6c239d1e0a53a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22494",
        "pageSeq": 22494
    },
    {
        "IDcode": 22495,
        "title": "喵喵lock 生化危机 艾达王 117P1V2.66GB",
        "cover": "https://image.acg.lol/file/2025/11/21/1-1145ded527be4d75e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22495",
        "pageSeq": 22495
    },
    {
        "IDcode": 22496,
        "title": "虎森森 熊熊女仆",
        "cover": "https://image.acg.lol/file/2025/11/27/1-1601c25dbbf603a18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22496",
        "pageSeq": 22496
    },
    {
        "IDcode": 22497,
        "title": "阿半今天很开心 - 奶牛比基尼[51P-279M]",
        "cover": "https://image.acg.lol/file/2025/11/27/1-161fef24175b2ef5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22497",
        "pageSeq": 22497
    },
    {
        "IDcode": 22498,
        "title": "皮皮奶 绣球花",
        "cover": "https://image.acg.lol/file/2025/11/27/1-10899c42cecfc141c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22498",
        "pageSeq": 22498
    },
    {
        "IDcode": 22499,
        "title": "星澜是澜澜叫澜妹呀 星澜夫人 [111P1V 2.83GB]",
        "cover": "https://image.acg.lol/file/2025/11/27/1c24d1dd3805307a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22499",
        "pageSeq": 22499
    },
    {
        "IDcode": 22500,
        "title": "桜井宁宁 黑色恶魔",
        "cover": "https://image.acg.lol/file/2025/11/27/1-102947837984c0a60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22500",
        "pageSeq": 22500
    },
    {
        "IDcode": 22501,
        "title": "不呆猫 东航空姐",
        "cover": "https://image.acg.lol/file/2025/11/27/1-1c9cef4323d090f3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22501",
        "pageSeq": 22501
    },
    {
        "IDcode": 22502,
        "title": "封疆疆 - 蕾姆花嫁[26P-118M]",
        "cover": "https://image.acg.lol/file/2025/11/27/1-17410fe546ed6797e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22502",
        "pageSeq": 22502
    },
    {
        "IDcode": 22503,
        "title": "日奈娇 洞房花烛",
        "cover": "https://image.acg.lol/file/2025/11/27/1-6f0ff3eabbc7514b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22503",
        "pageSeq": 22503
    },
    {
        "IDcode": 22504,
        "title": "上杉绘梨落 雪女",
        "cover": "https://image.acg.lol/file/2025/11/27/1-17af8da99e3a3811d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22504",
        "pageSeq": 22504
    },
    {
        "IDcode": 22505,
        "title": "矢量鱼 蔚蓝档案 – 春原心奈",
        "cover": "https://image.acg.lol/file/2025/11/27/1-11d22ce9c88be9311.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22505",
        "pageSeq": 22505
    },
    {
        "IDcode": 22506,
        "title": "上杉绘梨落 深冬雪乃54p",
        "cover": "https://image.acg.lol/file/2025/11/27/1-1fb82c24c2d43ffa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22506",
        "pageSeq": 22506
    },
    {
        "IDcode": 22507,
        "title": "皮皮奶 幽灵姬 48P",
        "cover": "https://image.acg.lol/file/2025/12/03/1-106f23c0f91c4be7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22507",
        "pageSeq": 22507
    },
    {
        "IDcode": 22508,
        "title": "Natsuko夏夏子 - 崩坏：星穹铁道 卡芙卡 dishwasher同人",
        "cover": "https://image.acg.lol/file/2025/12/03/1-1ae555b9d9feb3797.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22508",
        "pageSeq": 22508
    },
    {
        "IDcode": 22509,
        "title": "抱走莫子 米哈拉 73P10V2.71GB",
        "cover": "https://image.acg.lol/file/2025/12/03/1-1385011bc4a0d3d74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22509",
        "pageSeq": 22509
    },
    {
        "IDcode": 22510,
        "title": "宮本桜 交错战线 刃齿女警 22P",
        "cover": "https://image.acg.lol/file/2025/12/03/1-15b73d65095ed4477.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22510",
        "pageSeq": 22510
    },
    {
        "IDcode": 22511,
        "title": "九曲jean 圣诞2B 40P",
        "cover": "https://image.acg.lol/file/2025/12/03/1-17d555dcf1f9cae53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22511",
        "pageSeq": 22511
    },
    {
        "IDcode": 22512,
        "title": "雪琪SAMA 裸足 [50P4V 1.09G]",
        "cover": "https://image.acg.lol/file/2025/12/03/1-1614fa92da466dd43.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22512",
        "pageSeq": 22512
    },
    {
        "IDcode": 22513,
        "title": "桜井宁宁 25年10月会员订阅[83P2V-680M]",
        "cover": "https://image.acg.lol/file/2025/12/03/1775389041d381fb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22513",
        "pageSeq": 22513
    },
    {
        "IDcode": 22514,
        "title": "桜井宁宁 2025年11月会员订阅[77P4V 700M]",
        "cover": "https://image.acg.lol/file/2025/12/03/0015c69d5f669df74ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22514",
        "pageSeq": 22514
    },
    {
        "IDcode": 22515,
        "title": "清水由乃 虎皮蛋糕24P",
        "cover": "https://image.acg.lol/file/2025/12/03/IMG_3758.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22515",
        "pageSeq": 22515
    },
    {
        "IDcode": 22516,
        "title": "清水由乃 白巧克力23P+视频",
        "cover": "https://image.acg.lol/file/2025/12/03/IMG_3851.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22516",
        "pageSeq": 22516
    },
    {
        "IDcode": 22517,
        "title": "清水由乃 黑朗姆酒22P+视频",
        "cover": "https://image.acg.lol/file/2025/12/03/IMG_3827.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22517",
        "pageSeq": 22517
    },
    {
        "IDcode": 22518,
        "title": "清水由乃 加糖黑巧26P+视频",
        "cover": "https://image.acg.lol/file/2025/12/03/IMG_3800.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22518",
        "pageSeq": 22518
    },
    {
        "IDcode": 22519,
        "title": "清水由乃 荷叶粽35P+视频",
        "cover": "https://image.acg.lol/file/2025/12/03/IMG_3723.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22519",
        "pageSeq": 22519
    },
    {
        "IDcode": 22520,
        "title": "cosplay打赏群 预览目录（部分）",
        "cover": "https://image.acg.lol/file/2024/09/10/018.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22520",
        "pageSeq": 22520
    },
    {
        "IDcode": 22521,
        "title": "Bangni邦尼 木屋喵语 [81P3V-953MB]",
        "cover": "https://image.acg.lol/file/2025/12/07/1-1063ede71a779c9fe.gif",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22521",
        "pageSeq": 22521
    },
    {
        "IDcode": 22522,
        "title": "三無人型 爱宕 泳装 30P238MB",
        "cover": "https://image.acg.lol/file/2025/12/07/1-1a81cafa2881f5282.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22522",
        "pageSeq": 22522
    },
    {
        "IDcode": 22523,
        "title": "上杉绘梨落 丝柯克 118P642MB",
        "cover": "https://image.acg.lol/file/2025/12/07/1-1ebd5be3eee7c650a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22523",
        "pageSeq": 22523
    },
    {
        "IDcode": 22524,
        "title": "ZinieQ Jane Doe 53P11V3.45GB",
        "cover": "https://image.acg.lol/file/2025/12/07/1-11f4a24a3376136f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22524",
        "pageSeq": 22524
    },
    {
        "IDcode": 22525,
        "title": "云溪溪 奶桃 苔缚 93P1V3.38GB",
        "cover": "https://image.acg.lol/file/2025/12/07/1-1e3a23cb008c0c6fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22525",
        "pageSeq": 22525
    },
    {
        "IDcode": 22526,
        "title": "双木扶苏 菲比 33P771MB",
        "cover": "https://i.postimg.cc/MKCVfws4/1-(1).jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22526",
        "pageSeq": 22526
    },
    {
        "IDcode": 22527,
        "title": "神楽坂真冬 秘密体操服 [75P2V-549MB]",
        "cover": "https://image.acg.lol/file/2025/12/08/1-1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22527",
        "pageSeq": 22527
    },
    {
        "IDcode": 22528,
        "title": "yuuhui玉汇 幻蝶 131P1.36GB",
        "cover": "https://image.acg.lol/file/2025/12/08/1-18423777feedb73b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=22528",
        "pageSeq": 22528
    }
];
