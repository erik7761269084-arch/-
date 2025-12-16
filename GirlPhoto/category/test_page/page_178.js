// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39834,
        "title": "Mimo & Momoka - Spidergwen (Spiderman / Marvel)",
        "cover": "https://telegra.ph/file/3beb4276b0709f8af1d12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39834",
        "pageSeq": 39834
    },
    {
        "IDcode": 39835,
        "title": "Hana Bunny - Mama Cow & Lucoa Cow Maid (Kobayashi-San)",
        "cover": "https://telegra.ph/file/79c53e0a8f0e85f56949b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39835",
        "pageSeq": 39835
    },
    {
        "IDcode": 39836,
        "title": "日奈娇 - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/5412294413b62ec5446cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39836",
        "pageSeq": 39836
    },
    {
        "IDcode": 39837,
        "title": "Choi Ji Yun - Ryuko Matoi (Kill la Kill)",
        "cover": "https://telegra.ph/file/fb50f37c994cce1a6f12a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39837",
        "pageSeq": 39837
    },
    {
        "IDcode": 39838,
        "title": "Shui Miao Aqua - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/63c2ea164bc5e35303e4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39838",
        "pageSeq": 39838
    },
    {
        "IDcode": 39839,
        "title": "Shirogane Sama - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/1e61e85bc73953915d7f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39839",
        "pageSeq": 39839
    },
    {
        "IDcode": 39840,
        "title": "Chameleahn - Kaisa (KDA / League Of Legends)",
        "cover": "https://telegra.ph/file/88655ee7988aa2de5c47b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39840",
        "pageSeq": 39840
    },
    {
        "IDcode": 39841,
        "title": "Hoshilily 星之迟迟 - 大凤JK  Dafeng Taiho (Azur Lane)",
        "cover": "https://telegra.ph/file/e64e31270928d65a87e31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39841",
        "pageSeq": 39841
    },
    {
        "IDcode": 39842,
        "title": "Mikomin - Nilou (Genshin Impact)",
        "cover": "https://telegra.ph/file/d51c43c2e3070c7e061a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39842",
        "pageSeq": 39842
    },
    {
        "IDcode": 39843,
        "title": "Potato Godzilla - Swimsuit",
        "cover": "https://telegra.ph/file/413896278bc87bbb3bc93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39843",
        "pageSeq": 39843
    },
    {
        "IDcode": 39844,
        "title": "宮本桜 - New Jersey (Azur Lane)",
        "cover": "https://telegra.ph/file/f32073bc7452150952e64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39844",
        "pageSeq": 39844
    },
    {
        "IDcode": 39846,
        "title": "Joyce - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/4ebd671ddd19168960c42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39846",
        "pageSeq": 39846
    },
    {
        "IDcode": 39847,
        "title": "Peach Milky - Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/82fa471d7ee936f591bd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39847",
        "pageSeq": 39847
    },
    {
        "IDcode": 39848,
        "title": "Hidori Rose - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/3a64e8f616a4f4931e452.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39848",
        "pageSeq": 39848
    },
    {
        "IDcode": 39849,
        "title": "Nekokoyoshi 爆机少女喵小吉 - 镜花水月",
        "cover": "https://telegra.ph/file/7af57c0b06b98cc052663.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39849",
        "pageSeq": 39849
    },
    {
        "IDcode": 39850,
        "title": "Lady Oichi - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/579e133dfec1a8c0b086a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39850",
        "pageSeq": 39850
    },
    {
        "IDcode": 39851,
        "title": "Sweetie Fox - Triss Merigold (The Witcher)",
        "cover": "https://telegra.ph/file/d9ae2d8cad8f7288c11b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39851",
        "pageSeq": 39851
    },
    {
        "IDcode": 39852,
        "title": "Hana Bunny - Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/394c3fe7712e8c8e45bc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39852",
        "pageSeq": 39852
    },
    {
        "IDcode": 39853,
        "title": "Caticornplay - Gawr Gura Halloween (Hololive)",
        "cover": "https://telegra.ph/file/0a15f642048d2329e4ea7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39853",
        "pageSeq": 39853
    },
    {
        "IDcode": 39854,
        "title": "Chunmomo 蠢沫沫 - 蒸汽少女 (Steampunk)",
        "cover": "https://telegra.ph/file/c185aeae91d1be1ea53bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39854",
        "pageSeq": 39854
    },
    {
        "IDcode": 39855,
        "title": "Teddi Terri - Yamanaka Ino (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/b99792317c9ed8207cd17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39855",
        "pageSeq": 39855
    },
    {
        "IDcode": 39856,
        "title": "Hana Bunny - Neighborhood Girlfriend",
        "cover": "https://telegra.ph/file/1f2e98d8bea8ce3e7b048.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39856",
        "pageSeq": 39856
    },
    {
        "IDcode": 39857,
        "title": "Lovely Space Kitten - Toph (Avatar The Last Airbender)",
        "cover": "https://telegra.ph/file/c0da894671cd16be35561.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39857",
        "pageSeq": 39857
    },
    {
        "IDcode": 39858,
        "title": "Bishoujomom - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/ca2cc3059962dafdd4fe0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39858",
        "pageSeq": 39858
    },
    {
        "IDcode": 39859,
        "title": "Fantasy Factory - Scorpion",
        "cover": "https://telegra.ph/file/9ad820db372896b8d4ef7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39859",
        "pageSeq": 39859
    },
    {
        "IDcode": 39860,
        "title": "Potato Godzilla - OC Momo Just Pink",
        "cover": "https://telegra.ph/file/9aacf7b00823e0b01c1a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39860",
        "pageSeq": 39860
    },
    {
        "IDcode": 39861,
        "title": "Maria Desu - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/48864586aa535b04f8cfb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39861",
        "pageSeq": 39861
    },
    {
        "IDcode": 39862,
        "title": "Shui Miao Aqua - Kujou (Genshin Impacto)",
        "cover": "https://telegra.ph/file/e5678746edc2f8eb6fc31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39862",
        "pageSeq": 39862
    },
    {
        "IDcode": 39863,
        "title": "Lady Melamori - Kujou (Genshin Impacto)",
        "cover": "https://telegra.ph/file/855eb3aad871fbe67127b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39863",
        "pageSeq": 39863
    },
    {
        "IDcode": 39864,
        "title": "Fantasy Factory - Try Blond And Sexy",
        "cover": "https://telegra.ph/file/183329e6d27f8800b5918.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39864",
        "pageSeq": 39864
    },
    {
        "IDcode": 39865,
        "title": "Yoshinobi - Satania (Gabriel Dropout)",
        "cover": "https://telegra.ph/file/de56fdbffa50af73bb2a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39865",
        "pageSeq": 39865
    },
    {
        "IDcode": 39866,
        "title": "Yoshinobi - Spooky Uzaki Hana (Uzaki-chan wa Asobitai!)",
        "cover": "https://telegra.ph/file/1581b64686ff392a24f2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39866",
        "pageSeq": 39866
    },
    {
        "IDcode": 39867,
        "title": "Fantasy Factory - White Cheongsam",
        "cover": "https://telegra.ph/file/17c1170aed23ef3cc7be5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39867",
        "pageSeq": 39867
    },
    {
        "IDcode": 39868,
        "title": "Queenie - Satsuki Cow Bikini Sling (Kill la kill)",
        "cover": "https://telegra.ph/file/3cefa71028733e4f3cd88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39868",
        "pageSeq": 39868
    },
    {
        "IDcode": 39869,
        "title": "Shadory - Vermeil (Kinsou no Vermeil)",
        "cover": "https://telegra.ph/file/d983fc3b782363a42f699.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39869",
        "pageSeq": 39869
    },
    {
        "IDcode": 39870,
        "title": "Potato Godzilla - KAmiw",
        "cover": "https://telegra.ph/file/2485568ffcca8b22f3a6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39870",
        "pageSeq": 39870
    },
    {
        "IDcode": 39871,
        "title": "Potato Godzila - Black Lace",
        "cover": "https://telegra.ph/file/47553ab498fd177e4b9cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39871",
        "pageSeq": 39871
    },
    {
        "IDcode": 39872,
        "title": "幼愛youmeko - Charlotte Nun",
        "cover": "https://telegra.ph/file/a8d4d4b41ca4a268b9356.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39872",
        "pageSeq": 39872
    },
    {
        "IDcode": 39873,
        "title": "星之迟迟 Hoshilily - 菊千代 Chiyo",
        "cover": "https://telegra.ph/file/8cd7b91605d0930710deb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39873",
        "pageSeq": 39873
    },
    {
        "IDcode": 39874,
        "title": "Bishoujomom x Midna Ash - Asami & Korra (Avatar: Legend of Korra)",
        "cover": "https://telegra.ph/file/f72affffb4880d858d612.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39874",
        "pageSeq": 39874
    },
    {
        "IDcode": 39875,
        "title": "Hane Ame 雨波 - Cow Qipao (Original)",
        "cover": "https://telegra.ph/file/a4dfca28d53e251e6001d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39875",
        "pageSeq": 39875
    },
    {
        "IDcode": 39876,
        "title": "Yoshinobi - Yoshiko (Love Live Sunshine)",
        "cover": "https://telegra.ph/file/49aa78ce0dc5ab3ef9565.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39876",
        "pageSeq": 39876
    },
    {
        "IDcode": 39877,
        "title": "Alice Bong - Sakura Haruno (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/72ded46c82450ff9013f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39877",
        "pageSeq": 39877
    },
    {
        "IDcode": 39878,
        "title": "Aery Tiefling - Mirko (Boku no Hero)",
        "cover": "https://telegra.ph/file/bd3a493a1a63dce8b4ba6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39878",
        "pageSeq": 39878
    },
    {
        "IDcode": 39879,
        "title": "Yoshinobi - Miu Amano (Blend S)",
        "cover": "https://telegra.ph/file/ddbe1868edd67cb36b6ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39879",
        "pageSeq": 39879
    },
    {
        "IDcode": 39880,
        "title": "Ulichan - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/bda8079fa043299f98f9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39880",
        "pageSeq": 39880
    },
    {
        "IDcode": 39881,
        "title": "Virtual Geisha - Swimsuit",
        "cover": "https://telegra.ph/file/7cd282355244cbf097067.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39881",
        "pageSeq": 39881
    },
    {
        "IDcode": 39882,
        "title": "Lady Melamori - Maid",
        "cover": "https://telegra.ph/file/64dd64a03c0bd6ad188f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39882",
        "pageSeq": 39882
    },
    {
        "IDcode": 39883,
        "title": "Yoshinobi - Hestia Bunny (DANMACHI)",
        "cover": "https://telegra.ph/file/2cd23c691d431e2adb2e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39883",
        "pageSeq": 39883
    },
    {
        "IDcode": 39884,
        "title": "Alin Ma / Xenon - Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/7502838c0c13a745eafee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39884",
        "pageSeq": 39884
    },
    {
        "IDcode": 39885,
        "title": "Potato Godzilla - Casual Lonley Gamer",
        "cover": "https://telegra.ph/file/50290cebdcf9c4b13ce24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39885",
        "pageSeq": 39885
    },
    {
        "IDcode": 39887,
        "title": "日奈娇 - 喜多川海梦女警 Kitagawa Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/51bad61b94994bd0652a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39887",
        "pageSeq": 39887
    },
    {
        "IDcode": 39888,
        "title": "Misaki Sai - Lucyna Kushinada (Cyberpunk)",
        "cover": "https://telegra.ph/file/73e8240e1ccdaf2fa6800.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39888",
        "pageSeq": 39888
    },
    {
        "IDcode": 39889,
        "title": "Hana Bunny - Rebecca (Cyberpunk)",
        "cover": "https://telegra.ph/file/e4b389cb9962869339ab8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39889",
        "pageSeq": 39889
    },
    {
        "IDcode": 39890,
        "title": "KuukoW - Hu Tao (Genshin Impact)",
        "cover": "https://telegra.ph/file/93bd16533a5b1ad25fc5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39890",
        "pageSeq": 39890
    },
    {
        "IDcode": 39891,
        "title": "Nekokoyoshi 爆机少女喵小吉 - Home Girl",
        "cover": "https://telegra.ph/file/fcf3e61d5002e0a342005.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39891",
        "pageSeq": 39891
    },
    {
        "IDcode": 39892,
        "title": "Sweetie Fox - Reika (Gantz)",
        "cover": "https://telegra.ph/file/3f6b2bf4cf2edea62ad1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39892",
        "pageSeq": 39892
    },
    {
        "IDcode": 39893,
        "title": "星之迟迟 10月计划B 碧蓝航线能代 Noshiro (Azur Lane)",
        "cover": "https://telegra.ph/file/aac4eda489323d0c169b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39893",
        "pageSeq": 39893
    },
    {
        "IDcode": 39894,
        "title": "Sameki - Okayu (Vtuber/Hololive)",
        "cover": "https://telegra.ph/file/36445a946c746a0559ffa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39894",
        "pageSeq": 39894
    },
    {
        "IDcode": 39895,
        "title": "Umeko J - Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/c11648b8a125a1dd476fb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39895",
        "pageSeq": 39895
    },
    {
        "IDcode": 39896,
        "title": "Hana Bunny - Mask Girl Luna",
        "cover": "https://telegra.ph/file/cb0026c781998059c4a7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39896",
        "pageSeq": 39896
    },
    {
        "IDcode": 39897,
        "title": "爆机少女喵小吉 赛博朋克-超梦",
        "cover": "https://telegra.ph/file/fcc0237c184928cd42593.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39897",
        "pageSeq": 39897
    },
    {
        "IDcode": 39898,
        "title": "Gremlynne - Mavis (Hotel Transilvania)",
        "cover": "https://telegra.ph/file/1f88eb7267e397e013381.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39898",
        "pageSeq": 39898
    },
    {
        "IDcode": 39899,
        "title": "Caticornplay - Power (Chainsaw Man)",
        "cover": "https://telegra.ph/file/f19a5624606757ee36282.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39899",
        "pageSeq": 39899
    },
    {
        "IDcode": 39900,
        "title": "Alcololi - Marie Rose (Dead or Alive)",
        "cover": "https://telegra.ph/file/5c97230602db053dd1c7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39900",
        "pageSeq": 39900
    },
    {
        "IDcode": 39901,
        "title": "Umeko J - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/df9bb903a02a2012ddd88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39901",
        "pageSeq": 39901
    },
    {
        "IDcode": 39902,
        "title": "Hane Ame -  Mizuki Shiranui / Asagi Igawa (Taimanin Asagi/Mahou Kaiju Series)",
        "cover": "https://telegra.ph/file/52d2639ffaa1a8feaa307.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39902",
        "pageSeq": 39902
    },
    {
        "IDcode": 39903,
        "title": "Hane Ame  - Kronii (Hololive)",
        "cover": "https://telegra.ph/file/38d33b92274b650fd7ee6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39903",
        "pageSeq": 39903
    },
    {
        "IDcode": 39904,
        "title": "蠢沫沫- 制服 Office",
        "cover": "https://telegra.ph/file/6d52cb14a2c37bd694705.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39904",
        "pageSeq": 39904
    },
    {
        "IDcode": 39905,
        "title": "Lady Oichi - Witch 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/e48155894323aad0ec321.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39905",
        "pageSeq": 39905
    },
    {
        "IDcode": 39906,
        "title": "安食Ajiki - 黄豆粉 Kinako",
        "cover": "https://telegra.ph/file/b263a07494c799d6595e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39906",
        "pageSeq": 39906
    },
    {
        "IDcode": 39907,
        "title": "Alin Ma / Xenon - Signora (Genshin Impact)",
        "cover": "https://telegra.ph/file/6833fd0f25732cc219ee7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39907",
        "pageSeq": 39907
    },
    {
        "IDcode": 39909,
        "title": "Lada Lyumos - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/fff9c83a1acb550ded4aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39909",
        "pageSeq": 39909
    },
    {
        "IDcode": 39910,
        "title": "Donna Loli - Illyasviel Beast (Fate kaleid liner Prisma Illya)",
        "cover": "https://telegra.ph/file/a263766830add65accf9a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39910",
        "pageSeq": 39910
    },
    {
        "IDcode": 39911,
        "title": "Fantasy Factory - Boobs Guardian",
        "cover": "https://telegra.ph/file/9a0c6828bc65f13656811.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39911",
        "pageSeq": 39911
    },
    {
        "IDcode": 39912,
        "title": "Potato Godzilla - Red Hair (Tier 7)",
        "cover": "https://telegra.ph/file/d4d156daa3fdde994691e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39912",
        "pageSeq": 39912
    },
    {
        "IDcode": 39913,
        "title": "Saya The Fox - Frost 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/b3b1aa9f942a07385b52d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39913",
        "pageSeq": 39913
    },
    {
        "IDcode": 39914,
        "title": "Queenie - Ino Yamanaka Bikini (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/22246805a520480d7a4f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39914",
        "pageSeq": 39914
    },
    {
        "IDcode": 39915,
        "title": "Hidori Rose - August von Parseval (Azur Lane)",
        "cover": "https://telegra.ph/file/79dae5c6dc11d826bef2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39915",
        "pageSeq": 39915
    },
    {
        "IDcode": 39916,
        "title": "云溪溪 奶桃 Tourmaline-Malachite孔雀石",
        "cover": "https://telegra.ph/file/b1e7f79fc327740619ace.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39916",
        "pageSeq": 39916
    },
    {
        "IDcode": 39917,
        "title": "Joyce - Nero (Fate/Extra Last Encore)",
        "cover": "https://telegra.ph/file/17a61ff63438853b56c52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39917",
        "pageSeq": 39917
    },
    {
        "IDcode": 39918,
        "title": "阿包也是兔娘-生日图 自拍",
        "cover": "https://telegra.ph/file/617483aa5cf566ff57cf3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39918",
        "pageSeq": 39918
    },
    {
        "IDcode": 39919,
        "title": "Mik Allen - Jinx - Vi (Arkane / League of Legends)",
        "cover": "https://telegra.ph/file/04feaaa79e4ff4b17eeeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39919",
        "pageSeq": 39919
    },
    {
        "IDcode": 39920,
        "title": "Octokuro - Lucy (Cyberpunk)",
        "cover": "https://telegra.ph/file/8c7f4dbd50fd3fd92f803.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39920",
        "pageSeq": 39920
    },
    {
        "IDcode": 39921,
        "title": "六味帝皇酱 -  回归新作",
        "cover": "https://telegra.ph/file/67c3626e657dba8fd4e11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39921",
        "pageSeq": 39921
    },
    {
        "IDcode": 39922,
        "title": "Hidori Rose, Mikomi Hokina, Gumiho, Kerocchi, Liensue - Iron Blood (Azur Lane)",
        "cover": "https://telegra.ph/file/e8a70278d13be7b82cbcf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39922",
        "pageSeq": 39922
    },
    {
        "IDcode": 39923,
        "title": "Maria Desu - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/daa238d9423c456749512.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39923",
        "pageSeq": 39923
    },
    {
        "IDcode": 39924,
        "title": "阿包也是兔娘 OTS14 天意佳人 (Girls Frontline)",
        "cover": "https://telegra.ph/file/8d08ad3303672bed2d88d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39924",
        "pageSeq": 39924
    },
    {
        "IDcode": 39925,
        "title": "Beke - Leia (Star Wars)",
        "cover": "https://telegra.ph/file/839548e18b83a3edbbcb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39925",
        "pageSeq": 39925
    },
    {
        "IDcode": 39927,
        "title": "Mik Allen -  Misato Katsuragi (Neo Genesis Evangelion)",
        "cover": "https://telegra.ph/file/9df3984992cbac1b34233.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39927",
        "pageSeq": 39927
    },
    {
        "IDcode": 39928,
        "title": "Potato Godzilla - Asuna (Sword Arts Online)",
        "cover": "https://telegra.ph/file/1b319a6900b258a2e5ea9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39928",
        "pageSeq": 39928
    },
    {
        "IDcode": 39929,
        "title": "Hane Ame - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/40011098d92d5c67d3bf2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39929",
        "pageSeq": 39929
    },
    {
        "IDcode": 39930,
        "title": "Lady Melamori - 2B (NieR:Automata)",
        "cover": "https://telegra.ph/file/2134c8172c72dc4c0d533.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39930",
        "pageSeq": 39930
    },
    {
        "IDcode": 39931,
        "title": "KuukoW - New Jersey (Azur Lane)",
        "cover": "https://telegra.ph/file/5a76341a762d2fa04236a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39931",
        "pageSeq": 39931
    },
    {
        "IDcode": 39932,
        "title": "Shui Miao Aqua - Yumeko Jabami (Kakegurui)",
        "cover": "https://telegra.ph/file/0cdae34d952418c2a6c1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39932",
        "pageSeq": 39932
    },
    {
        "IDcode": 39933,
        "title": "Fantasy Factory - Shuten douji (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1f0938b181706a3017b86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39933",
        "pageSeq": 39933
    },
    {
        "IDcode": 39934,
        "title": "Fantasy Factory - Black Cat Nurse",
        "cover": "https://telegra.ph/file/6693b70f6daebb5417f5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39934",
        "pageSeq": 39934
    },
    {
        "IDcode": 39935,
        "title": "白莉爱吃巧克力 - 蕾姆女仆装 Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/85dcaa6ab0202a9ddfc61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39935",
        "pageSeq": 39935
    },
    {
        "IDcode": 39936,
        "title": "Carry Key - Tracer (Overwatch)",
        "cover": "https://telegra.ph/file/456ec421ffd45f3295065.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39936",
        "pageSeq": 39936
    },
    {
        "IDcode": 39937,
        "title": "Fantasy Factory - Boyfried Shirt",
        "cover": "https://telegra.ph/file/da651dd066f12a076f9e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39937",
        "pageSeq": 39937
    }
];
