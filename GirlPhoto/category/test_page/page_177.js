// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39728,
        "title": "Sadako Momo - Nero (Fate Grand Order)",
        "cover": "https://telegra.ph/file/237196722441f7f95016a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39728",
        "pageSeq": 39728
    },
    {
        "IDcode": 39729,
        "title": "Byoru - Vermeil (Kinsou no Vermeil)",
        "cover": "https://telegra.ph/file/5f82dd86b50a40adeba5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39729",
        "pageSeq": 39729
    },
    {
        "IDcode": 39730,
        "title": "Hane Ame - Atago (Azur Lane)",
        "cover": "https://telegra.ph/file/bdcb7c3ff89e35366f9ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39730",
        "pageSeq": 39730
    },
    {
        "IDcode": 39731,
        "title": "Potato Godzilla - Red Hair",
        "cover": "https://telegra.ph/file/c6d402faebfc0c2bfca6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39731",
        "pageSeq": 39731
    },
    {
        "IDcode": 39732,
        "title": "Shui Miao Aqua - Guitar Sister",
        "cover": "https://telegra.ph/file/65e53e6c1cc126128e688.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39732",
        "pageSeq": 39732
    },
    {
        "IDcode": 39733,
        "title": "Tsukidesu - Saber Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/57a3cf1d93c7a616fbc55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39733",
        "pageSeq": 39733
    },
    {
        "IDcode": 39734,
        "title": "Fantasy Factory - Thosaka Rin (Fate Stay Night)",
        "cover": "https://telegra.ph/file/ee7089023b774cbbc9df7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39734",
        "pageSeq": 39734
    },
    {
        "IDcode": 39735,
        "title": "Oichi - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/44134cca3d1461f646d9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39735",
        "pageSeq": 39735
    },
    {
        "IDcode": 39736,
        "title": "Neyrodesu - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/00fa5fe6de3a3405e441f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39736",
        "pageSeq": 39736
    },
    {
        "IDcode": 39737,
        "title": "Rioko - Yuki Onna",
        "cover": "https://telegra.ph/file/823315116487699e13fce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39737",
        "pageSeq": 39737
    },
    {
        "IDcode": 39738,
        "title": "Plant Lily - Yor Forger - (Spy x Family)",
        "cover": "https://telegra.ph/file/c4f2291a7654ee867c040.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39738",
        "pageSeq": 39738
    },
    {
        "IDcode": 39739,
        "title": "Plant Lily - Marin, Shizuku & Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/3899ea45f241af0093cf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39739",
        "pageSeq": 39739
    },
    {
        "IDcode": 39740,
        "title": "Kalinka Fox - Jinx (KDA / League Of Legends)",
        "cover": "https://telegra.ph/file/a07c72682fdd44313adac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39740",
        "pageSeq": 39740
    },
    {
        "IDcode": 39741,
        "title": "MissWarmj - Pussy in Yoga Pants is so Clear",
        "cover": "https://telegra.ph/file/8760d63486bb6adf9c497.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39741",
        "pageSeq": 39741
    },
    {
        "IDcode": 39742,
        "title": "秋和柯基 - Little Red Riding Hood (Caperucita Roja)",
        "cover": "https://telegra.ph/file/4a6bf467e80863b861230.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39742",
        "pageSeq": 39742
    },
    {
        "IDcode": 39743,
        "title": "KuukoW - Kokomi (Genshin Impact)",
        "cover": "https://telegra.ph/file/4dc736112f4a0109c0f67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39743",
        "pageSeq": 39743
    },
    {
        "IDcode": 39744,
        "title": "Potato Godzilla - Psycho Neko",
        "cover": "https://telegra.ph/file/5d008d7e684f671dac912.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39744",
        "pageSeq": 39744
    },
    {
        "IDcode": 39745,
        "title": "Fantasy Factory - Bicycle",
        "cover": "https://telegra.ph/file/8990460b0462dacf60688.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39745",
        "pageSeq": 39745
    },
    {
        "IDcode": 39746,
        "title": "Maria Desu - Bunny Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/dbcfae4d32a8fd09b29c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39746",
        "pageSeq": 39746
    },
    {
        "IDcode": 39747,
        "title": "Shui Miao Aqua - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/71ac964d8eb1869db9629.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39747",
        "pageSeq": 39747
    },
    {
        "IDcode": 39748,
        "title": "Hana Bunny - Aphrodite",
        "cover": "https://telegra.ph/file/950c9104925131be59059.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39748",
        "pageSeq": 39748
    },
    {
        "IDcode": 39749,
        "title": "三度_69 - Kashino (Azur Lane)",
        "cover": "https://telegra.ph/file/fb80744d67dde3bd73259.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39749",
        "pageSeq": 39749
    },
    {
        "IDcode": 39750,
        "title": "Suna - Illyasviel (Fate Kaleid Liner Prisma Illya)",
        "cover": "https://telegra.ph/file/cf3689e27f280a8d4dc7f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39750",
        "pageSeq": 39750
    },
    {
        "IDcode": 39752,
        "title": "Mikomin - Asuka Slingking (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/a6914377ffbc9e8da77e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39752",
        "pageSeq": 39752
    },
    {
        "IDcode": 39755,
        "title": "Byoru - Rangiku Matsumoto (Bleach)",
        "cover": "https://telegra.ph/file/aaf346b6491b6dc214523.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39755",
        "pageSeq": 39755
    },
    {
        "IDcode": 39756,
        "title": "Byoru - Nico Robin (One Piece)",
        "cover": "https://telegra.ph/file/94706ef2983059020295e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39756",
        "pageSeq": 39756
    },
    {
        "IDcode": 39757,
        "title": "HaneAme - Dazzling Bunny",
        "cover": "https://telegra.ph/file/cd8bda1e4cac33e007424.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39757",
        "pageSeq": 39757
    },
    {
        "IDcode": 39758,
        "title": "Potato Godzilla - Saber Maid (Fate Grand Order)",
        "cover": "https://telegra.ph/file/f412349c85c4fac732c35.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39758",
        "pageSeq": 39758
    },
    {
        "IDcode": 39759,
        "title": "Peachmilky - Noshiro (Azur Lane)",
        "cover": "https://telegra.ph/file/8a27ba0a4d78607a9efdb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39759",
        "pageSeq": 39759
    },
    {
        "IDcode": 39760,
        "title": "Hana Bunny - Kouhai Bunny",
        "cover": "https://telegra.ph/file/fd4f96e7c56d0208c87ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39760",
        "pageSeq": 39760
    },
    {
        "IDcode": 39761,
        "title": "Joyce - Princess Zelda (Legend of the Zelda)",
        "cover": "https://telegra.ph/file/75d512bb0d834eaa1847d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39761",
        "pageSeq": 39761
    },
    {
        "IDcode": 39762,
        "title": "Lady Melamori - Hinata Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/ca23c04a4a2dc353f821c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39762",
        "pageSeq": 39762
    },
    {
        "IDcode": 39763,
        "title": "Byoru - Jett (Valorant)",
        "cover": "https://telegra.ph/file/37297ce65d2e56aaf809b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39763",
        "pageSeq": 39763
    },
    {
        "IDcode": 39764,
        "title": "Plant Lily - Miss Hina (Genshin Impact)",
        "cover": "https://telegra.ph/file/ae55e4edcd1ac43c00c9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39764",
        "pageSeq": 39764
    },
    {
        "IDcode": 39765,
        "title": "UyUy - Arlecchino (Genshin Impact)",
        "cover": "https://telegra.ph/file/cbf5a5e9fe0973eb7247d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39765",
        "pageSeq": 39765
    },
    {
        "IDcode": 39766,
        "title": "UyUy - Yoko (Tengen Toppa)",
        "cover": "https://telegra.ph/file/3d7f1265f1780a5c31859.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39766",
        "pageSeq": 39766
    },
    {
        "IDcode": 39767,
        "title": "Maria Desu - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/48729c41232b4cd980685.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39767",
        "pageSeq": 39767
    },
    {
        "IDcode": 39768,
        "title": "Carry Key - Nami Bathtub (One Piece)",
        "cover": "https://telegra.ph/file/194808b969ff2820c784c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39768",
        "pageSeq": 39768
    },
    {
        "IDcode": 39769,
        "title": "爆机少女喵小吉 Nekokoyoshi - 风铃公主 Aeolian",
        "cover": "https://telegra.ph/file/bdb04c30d422eaea0f86d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39769",
        "pageSeq": 39769
    },
    {
        "IDcode": 39770,
        "title": "Sayo Momo - Rizu-kyun (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/6b2b32193154fb35e917f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39770",
        "pageSeq": 39770
    },
    {
        "IDcode": 39771,
        "title": "Hoshilily - Prinz (Azur Lane)",
        "cover": "https://telegra.ph/file/81a6825dfcd32f63f4627.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39771",
        "pageSeq": 39771
    },
    {
        "IDcode": 39772,
        "title": "Hachi - Ruka (kanojo Okarishimasu)",
        "cover": "https://telegra.ph/file/538fb21a4d8c38b87b32f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39772",
        "pageSeq": 39772
    },
    {
        "IDcode": 39773,
        "title": "Aery Tiefling - Junko (Dangaronpa)",
        "cover": "https://telegra.ph/file/f2f67d65a1649da8ca6d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39773",
        "pageSeq": 39773
    },
    {
        "IDcode": 39774,
        "title": "Nichameleon - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/73aae52d2ebfcc8b4c10b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39774",
        "pageSeq": 39774
    },
    {
        "IDcode": 39775,
        "title": "Hane Ame - Aponia (Honkai Impact)",
        "cover": "https://telegra.ph/file/889b5e70fb655bcced006.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39775",
        "pageSeq": 39775
    },
    {
        "IDcode": 39776,
        "title": "Potato Godzilla - No Horny",
        "cover": "https://telegra.ph/file/bbaa73a1b934940938fe3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39776",
        "pageSeq": 39776
    },
    {
        "IDcode": 39777,
        "title": "Ain Nguyen - Lingerie",
        "cover": "https://telegra.ph/file/aebe563a565ecfad72039.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39777",
        "pageSeq": 39777
    },
    {
        "IDcode": 39778,
        "title": "UyUy - Cammy (Street Fighter)",
        "cover": "https://telegra.ph/file/c02550114bdab79287b28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39778",
        "pageSeq": 39778
    },
    {
        "IDcode": 39779,
        "title": "Neppu - Nazuna (Yufukashi no Uta)",
        "cover": "https://telegra.ph/file/1b46c45daa974169b4e54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39779",
        "pageSeq": 39779
    },
    {
        "IDcode": 39780,
        "title": "Choi Ji Yun - Aphrodite",
        "cover": "https://telegra.ph/file/77dc1df57cdfd1b899732.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39780",
        "pageSeq": 39780
    },
    {
        "IDcode": 39781,
        "title": "Fantasy Factory - White Lingerie",
        "cover": "https://telegra.ph/file/a4307c6e2c7eab0f5d3dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39781",
        "pageSeq": 39781
    },
    {
        "IDcode": 39782,
        "title": "Carry Key - Perona (One Piece)",
        "cover": "https://telegra.ph/file/08c930be35b96323d028f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39782",
        "pageSeq": 39782
    },
    {
        "IDcode": 39783,
        "title": "Yoshinobi - Atago Maid (Azur Lane)",
        "cover": "https://telegra.ph/file/a0b27633e1769ebed245b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39783",
        "pageSeq": 39783
    },
    {
        "IDcode": 39784,
        "title": "Sayo Momo - Reika Bunny (Gantz)",
        "cover": "https://telegra.ph/file/5621dd806790e157d8a5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39784",
        "pageSeq": 39784
    },
    {
        "IDcode": 39785,
        "title": "Alina Becker - Elizabeth (Nanatsu no Taiza)",
        "cover": "https://telegra.ph/file/5e36030c0f2450413c1ca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39785",
        "pageSeq": 39785
    },
    {
        "IDcode": 39786,
        "title": "Potato Godzilla - Intermediate",
        "cover": "https://telegra.ph/file/3e5e70c78271db7f4ecd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39786",
        "pageSeq": 39786
    },
    {
        "IDcode": 39787,
        "title": "Hane Ame - Surtr (Arknights)",
        "cover": "https://telegra.ph/file/a6ddf70a68e9ef9be4f88.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39787",
        "pageSeq": 39787
    },
    {
        "IDcode": 39788,
        "title": "Lady Melamori - Ankha Zone (Animal Crossing)",
        "cover": "https://telegra.ph/file/53ab92c4a82c1eeffdf57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39788",
        "pageSeq": 39788
    },
    {
        "IDcode": 39789,
        "title": "nekokoyoshi 爆机少女喵小吉 - Nurse Original Character",
        "cover": "https://telegra.ph/file/2d37c0d0b22361c63b116.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39789",
        "pageSeq": 39789
    },
    {
        "IDcode": 39790,
        "title": "UyUy - Androide No. 18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/0d44fb0793bbb33556ec9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39790",
        "pageSeq": 39790
    },
    {
        "IDcode": 39791,
        "title": "Jessica Nigri - Lady Dimitrescu (Resident Evil)",
        "cover": "https://telegra.ph/file/73a2ef05cb83b988a4e28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39791",
        "pageSeq": 39791
    },
    {
        "IDcode": 39792,
        "title": "桜井宁宁 Sakurai - 麻衣兔女郎 Mai (seishun buta yarou wa bunny girl senpai no yume o minai)",
        "cover": "https://telegra.ph/file/66c0ccac576e502a3d90d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39792",
        "pageSeq": 39792
    },
    {
        "IDcode": 39794,
        "title": "Potato Godzilla - Xmas",
        "cover": "https://telegra.ph/file/a685ef3cb963f96bbf1d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39794",
        "pageSeq": 39794
    },
    {
        "IDcode": 39795,
        "title": "Fantasy Factory - Dark Lingerie",
        "cover": "https://telegra.ph/file/0a27eb25972722a98a559.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39795",
        "pageSeq": 39795
    },
    {
        "IDcode": 39796,
        "title": "橙子喵酱 - Xi Shi (King of Glory)",
        "cover": "https://telegra.ph/file/ee82407d168831ec38629.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39796",
        "pageSeq": 39796
    },
    {
        "IDcode": 39797,
        "title": "Caticornplay - Holo (Spice and Wolf)",
        "cover": "https://telegra.ph/file/41434b07cd5b5b58e38b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39797",
        "pageSeq": 39797
    },
    {
        "IDcode": 39798,
        "title": "一北亦北 - Zb-26 (Girls Frontline)",
        "cover": "https://telegra.ph/file/e445bc2d6bd261b4adc90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39798",
        "pageSeq": 39798
    },
    {
        "IDcode": 39799,
        "title": "KuukoW - Yun Jin (Genshin Impact)",
        "cover": "https://telegra.ph/file/6b803b980e860eee1af20.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39799",
        "pageSeq": 39799
    },
    {
        "IDcode": 39800,
        "title": "Hatori - Noelle (Genshi Impact)",
        "cover": "https://telegra.ph/file/5046c79e821ba70f247a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39800",
        "pageSeq": 39800
    },
    {
        "IDcode": 39801,
        "title": "Aery Tiefling - Jinx (League of Legends)",
        "cover": "https://telegra.ph/file/9736188cec01ca66796fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39801",
        "pageSeq": 39801
    },
    {
        "IDcode": 39802,
        "title": "Hane Ame - Dehya (Genshi Impact)",
        "cover": "https://telegra.ph/file/6084e9ba4146c5f2b2898.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39802",
        "pageSeq": 39802
    },
    {
        "IDcode": 39803,
        "title": "Nichameleon - Jinx (League Of Legends)",
        "cover": "https://telegra.ph/file/ce421a09f2f6d38208fd0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39803",
        "pageSeq": 39803
    },
    {
        "IDcode": 39804,
        "title": "Kalinka Fox - Makima (Chainsaw Man)",
        "cover": "https://telegra.ph/file/1e6aa411a3112c9a770b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39804",
        "pageSeq": 39804
    },
    {
        "IDcode": 39805,
        "title": "Bambi - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/d5208022ea7f109b4ed5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39805",
        "pageSeq": 39805
    },
    {
        "IDcode": 39806,
        "title": "Choi Ji Yun - Shego (Kim Possible)",
        "cover": "https://telegra.ph/file/cc8a85d47ce52c11b95df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39806",
        "pageSeq": 39806
    },
    {
        "IDcode": 39807,
        "title": "金鱼 Kinngyo - Kinako",
        "cover": "https://telegra.ph/file/e1ff418acc071f11391bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39807",
        "pageSeq": 39807
    },
    {
        "IDcode": 39808,
        "title": "Potato Godzilla - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/5334016bba7e58709d8ce.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39808",
        "pageSeq": 39808
    },
    {
        "IDcode": 39809,
        "title": "Enji Night - Harley Quinn (DC / Batman)",
        "cover": "https://telegra.ph/file/3efd333fedb53a6e7afc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39809",
        "pageSeq": 39809
    },
    {
        "IDcode": 39810,
        "title": "Joyce - Bunny Lumine (Genshin Impact)",
        "cover": "https://telegra.ph/file/889e364fa1ea60f90b9c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39810",
        "pageSeq": 39810
    },
    {
        "IDcode": 39811,
        "title": "Rusty Fawkes - Seraphine (KDA/League of Legends)",
        "cover": "https://telegra.ph/file/10ba0561183b0ebaf92cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39811",
        "pageSeq": 39811
    },
    {
        "IDcode": 39812,
        "title": "Carry Key - Halloween Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/9b7690ea3363537550ae6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39812",
        "pageSeq": 39812
    },
    {
        "IDcode": 39813,
        "title": "Yoshinobi - Plumpkin",
        "cover": "https://telegra.ph/file/8417f3ef7a09c67fdca61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39813",
        "pageSeq": 39813
    },
    {
        "IDcode": 39814,
        "title": "阿薰kaOri - Nurse",
        "cover": "https://telegra.ph/file/0d9bb46e5fe9919b7de81.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39814",
        "pageSeq": 39814
    },
    {
        "IDcode": 39815,
        "title": "二阶堂 - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/d672f02640b67475381a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39815",
        "pageSeq": 39815
    },
    {
        "IDcode": 39816,
        "title": "Donna Loli - Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/ebab24f2bdbdbf6fbab76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39816",
        "pageSeq": 39816
    },
    {
        "IDcode": 39818,
        "title": "Fantasy Factory - Raikou (Fate Grand Order)",
        "cover": "https://telegra.ph/file/47fc3c595b2ba24d3223c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39818",
        "pageSeq": 39818
    },
    {
        "IDcode": 39819,
        "title": "Fantasy Factory - Asuka Maid (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/233b7b1c0c280f4625892.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39819",
        "pageSeq": 39819
    },
    {
        "IDcode": 39820,
        "title": "Jessica Nigri - Mitsuri (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/90000ec79d966a9f2728a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39820",
        "pageSeq": 39820
    },
    {
        "IDcode": 39821,
        "title": "Okada Yui - Marin (Sono Bisque Doll Wa Koi Wo Suru)",
        "cover": "https://telegra.ph/file/18fbd4f05479843ab316f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39821",
        "pageSeq": 39821
    },
    {
        "IDcode": 39822,
        "title": "Shui Miao Aqua - Yor Forger (Spy x Family)",
        "cover": "https://telegra.ph/file/00b5ff342a4fab46acd0d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39822",
        "pageSeq": 39822
    },
    {
        "IDcode": 39823,
        "title": "Azami - Saki (Genshin Emergence)",
        "cover": "https://telegra.ph/file/545c7b27d97697d972701.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39823",
        "pageSeq": 39823
    },
    {
        "IDcode": 39824,
        "title": "Potato Godzilla - Lingerie Selfie",
        "cover": "https://telegra.ph/file/af8d8d4137fb942ac58b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39824",
        "pageSeq": 39824
    },
    {
        "IDcode": 39825,
        "title": "Hane Ame - Lum (Urusei Yatsura)",
        "cover": "https://telegra.ph/file/1e154dea2c1e580912dfc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39825",
        "pageSeq": 39825
    },
    {
        "IDcode": 39826,
        "title": "Tedditerri - Princess Zelda (The Legend of Zelda)",
        "cover": "https://telegra.ph/file/3a47117c6fecf4ffe7222.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39826",
        "pageSeq": 39826
    },
    {
        "IDcode": 39827,
        "title": "Queenie - Yamato (One Piece)",
        "cover": "https://telegra.ph/file/ded8ccf3c68cb04e4ed2a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39827",
        "pageSeq": 39827
    },
    {
        "IDcode": 39828,
        "title": "Joyce - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/fe259ad17e3eaf1c3860c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39828",
        "pageSeq": 39828
    },
    {
        "IDcode": 39829,
        "title": "Shui Miao Aqua - Aponia (Honkai Impact)",
        "cover": "https://telegra.ph/file/d5dfe62af30c93acdf2e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39829",
        "pageSeq": 39829
    },
    {
        "IDcode": 39830,
        "title": "Hane Ame - Lucyna Kushinada (Cyberpunk)",
        "cover": "https://telegra.ph/file/ed1c8931e3d4ceb469393.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39830",
        "pageSeq": 39830
    },
    {
        "IDcode": 39832,
        "title": "Pattie - Morrigan (Capcom Game)",
        "cover": "https://telegra.ph/file/f0e55bb9db5bcc1d9b192.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39832",
        "pageSeq": 39832
    },
    {
        "IDcode": 39833,
        "title": "渡边早季Saki - 女仆X裸体围裙 Maid",
        "cover": "https://telegra.ph/file/d4c2ea8a6398354ebb554.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39833",
        "pageSeq": 39833
    }
];
