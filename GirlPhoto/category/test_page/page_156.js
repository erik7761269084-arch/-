// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 37682,
        "title": "Zia 지아, [Bimilstory] Bad Girl At The Academy Set.02",
        "cover": "https://telegra.ph/file/8697942811dc14ea551cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37682",
        "pageSeq": 37682
    },
    {
        "IDcode": 37683,
        "title": "Cosplay 虎森森 爱心特工",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZ2NsOj5zQpuJjzyIzTZx0Yg3MfAAAu7GMRvDUhlT62t-zVzV23IBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37683",
        "pageSeq": 37683
    },
    {
        "IDcode": 37684,
        "title": "Cosplay Rinaijiao日奈娇 实习女警 Set.02",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZ1jh6x2rYziRzylW4iQo7P9vyx0AAhHHMRtDJclSZyUhCSimUpYBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37684",
        "pageSeq": 37684
    },
    {
        "IDcode": 37685,
        "title": "UGirls尤果圈 No.2534 茯苓Fuling",
        "cover": "https://telegra.ph/file/e86415aaba544597a7e7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37685",
        "pageSeq": 37685
    },
    {
        "IDcode": 37686,
        "title": "Hayun 하윤, [Bimilstory] Freshman at College of Music Set.03",
        "cover": "https://telegra.ph/file/86bab6356eb38c4af37cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37686",
        "pageSeq": 37686
    },
    {
        "IDcode": 37687,
        "title": "XiuRen秀人网 NO.7231 LinXingLan林星阑",
        "cover": "https://telegra.ph/file/a2e05182c1e181eaa04a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37687",
        "pageSeq": 37687
    },
    {
        "IDcode": 37688,
        "title": "Merry LEEHEE EXPRESS MERRY-013C Set.01",
        "cover": "https://telegra.ph/file/b5835ebd1979ce86ba85e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37688",
        "pageSeq": 37688
    },
    {
        "IDcode": 37689,
        "title": "Cosplay 桃良阿宅 特训",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZ8j2LnF88T3CkpEMi3MinulWsJAAAsXHMRu3sEhSYBjXUbA01psBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37689",
        "pageSeq": 37689
    },
    {
        "IDcode": 37690,
        "title": "Han Jina 한지나, PINK Photobook ‘Sunshine’ Set.03",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZzJpeVZaS11DtofqZPBDA2ik6O0AAvbLMRuioJBR0ve2LCXhxRoBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37690",
        "pageSeq": 37690
    },
    {
        "IDcode": 37691,
        "title": "Cosplay 许岚LAN 白丝水手服",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZ94N9qC5RffOU9AlQGK1FzJ-elcAAnvIMRtRgPFSqDClbBr6VHwBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37691",
        "pageSeq": 37691
    },
    {
        "IDcode": 37692,
        "title": "Jeong Jenny 정제니, DJAWA &#8216;Maid Mansion&#8217; Set.02",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZxAqkO4F9MseOHgQBFHfnKkQRT0AAhTGMRvxJYFQbpeu3A5JBckBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37692",
        "pageSeq": 37692
    },
    {
        "IDcode": 37693,
        "title": "Cosplay 麻花麻花酱 圣诞套 Set.01",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZ-yL41PPreMNZQABl_JsM7Sx4MJnAAKVxzEbRxdpU3z8I04gL5iuAQADAgADdwADNgQ.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37693",
        "pageSeq": 37693
    },
    {
        "IDcode": 37694,
        "title": "Ming 섹밍, LEEHEE EXPRESS LERB-175C Set.02",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHZ2YWYqojF6MlbuJ6RolRXAkQtzMAAszBMRsBbDhTDNpPvoVZsj4BAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37694",
        "pageSeq": 37694
    },
    {
        "IDcode": 37695,
        "title": "Suzu Honjo 本庄鈴, Graphis Gals 「Devine」 Vol.05",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHaB7FYdfCtmCIq078gCmy6PGSZDoAAuHLMRusp_FQTif7hcBYLTEBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37695",
        "pageSeq": 37695
    },
    {
        "IDcode": 37696,
        "title": "ZIA.Kwon 권지아, Loozy ‘Tight and Closer’ Set.01",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHaB7Bdngu1VsitW7TCu7m0vW-XjgAAtvKMRusp_FQ_oxC01so0NsBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37696",
        "pageSeq": 37696
    },
    {
        "IDcode": 37697,
        "title": "杪夏 爱丽丝梦游仙境套 Set.01",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHaB7EVvrZstLVNjJSE-5OQULRxzMAApXLMRusp_FQ1VJHuI2K4XcBAAMCAAN3AAM2BA.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37697",
        "pageSeq": 37697
    },
    {
        "IDcode": 37698,
        "title": "JVID 淇淇selina – 穀雨白露花茶 淇淇美少女四點全露 Set.01",
        "cover": "https://img2409.emiriatan.top/tgfile/AgACAgQAAxUHaB7C2kFTc1q3r6LUzwABMmZFeTfvAAIzyzEbrKfxUCer9wT9egXoAQADAgADdwADNgQ.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37698",
        "pageSeq": 37698
    },
    {
        "IDcode": 37699,
        "title": "Bambi 밤비, [CreamSoda] Over knee socks Set.01",
        "cover": "https://telegra.ph/file/2438b7dc5e3c946d32144.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37699",
        "pageSeq": 37699
    },
    {
        "IDcode": 37700,
        "title": "[MFStar模范学院] 2021.06.23 Vol.508 星萌",
        "cover": "https://telegra.ph/file/f5c764a1caa7c6c94feda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37700",
        "pageSeq": 37700
    },
    {
        "IDcode": 37701,
        "title": "Cosplay Nagisa魔物喵 2023年01月订阅写真 Set.02",
        "cover": "https://telegra.ph/file/6e086e0660d77659f7909.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37701",
        "pageSeq": 37701
    }
];
