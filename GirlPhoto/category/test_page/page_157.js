// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 37702,
        "title": "未命名漫画",
        "cover": "",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37702",
        "pageSeq": 37702
    },
    {
        "IDcode": 37703,
        "title": "Yiyang Silva",
        "cover": "https://telegra.ph/file/ada9895f08dc45b165f89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37703",
        "pageSeq": 37703
    },
    {
        "IDcode": 37704,
        "title": "韶陌陌 shaomomo",
        "cover": "https://telegra.ph/file/f1c597fe56964b5acc8eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37704",
        "pageSeq": 37704
    },
    {
        "IDcode": 37705,
        "title": "水淼-Aqua",
        "cover": "https://telegra.ph/file/23c17c93c90bc902346ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37705",
        "pageSeq": 37705
    },
    {
        "IDcode": 37706,
        "title": "Nana-san",
        "cover": "https://telegra.ph/file/3403bb2edbe21bccde936.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37706",
        "pageSeq": 37706
    },
    {
        "IDcode": 37707,
        "title": "Rioko",
        "cover": "https://telegra.ph/file/dadff671c79a26e0514a4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37707",
        "pageSeq": 37707
    },
    {
        "IDcode": 37708,
        "title": "Chunmomo & 一笑芳香沁",
        "cover": "https://telegra.ph/file/500fdd3ae795e92b03c75.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37708",
        "pageSeq": 37708
    },
    {
        "IDcode": 37709,
        "title": "Uy Uy - Tifa",
        "cover": "https://telegra.ph/file/39b4f5be1504b7dc938f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37709",
        "pageSeq": 37709
    },
    {
        "IDcode": 37710,
        "title": "Vinnegal - Tifa",
        "cover": "https://telegra.ph/file/9d322176b4c5d802727cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37710",
        "pageSeq": 37710
    },
    {
        "IDcode": 37711,
        "title": "Kaho Shibuya - Tifa",
        "cover": "https://telegra.ph/file/41cf8c71823acb9b0ceec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37711",
        "pageSeq": 37711
    },
    {
        "IDcode": 37712,
        "title": "Momo Okawa - Lencery Bunny",
        "cover": "https://telegra.ph/file/e355938c46dc65c6ed571.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37712",
        "pageSeq": 37712
    },
    {
        "IDcode": 37713,
        "title": "Hane Ame - Ada Wong",
        "cover": "https://telegra.ph/file/8c511adcd02468aa50f10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37713",
        "pageSeq": 37713
    },
    {
        "IDcode": 37714,
        "title": "Hane Ame - Ada Wong 03",
        "cover": "https://telegra.ph/file/bba444d46ca384adc7dd7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37714",
        "pageSeq": 37714
    },
    {
        "IDcode": 37715,
        "title": "Hane Ame - Ada Wong 02",
        "cover": "https://telegra.ph/file/ebd0a13abd551bce93f65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37715",
        "pageSeq": 37715
    },
    {
        "IDcode": 37716,
        "title": "鯊魚SAME - (HK416 - Hoshina)",
        "cover": "https://telegra.ph/file/07ae5043af7e930df3fc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37716",
        "pageSeq": 37716
    },
    {
        "IDcode": 37717,
        "title": "Chi Gen Liang Mian - Neko",
        "cover": "https://telegra.ph/file/a40da1445a7f687eb0bae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37717",
        "pageSeq": 37717
    },
    {
        "IDcode": 37718,
        "title": "Hidori Rose & Byoru - Marie Rose & Honoka (Dead ir Live)",
        "cover": "https://telegra.ph/file/f3d1daefb48e8d8fbdf90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37718",
        "pageSeq": 37718
    },
    {
        "IDcode": 37719,
        "title": "Yoshinobi - Tejina Sempai",
        "cover": "https://telegra.ph/file/180a35e3477d5326b5dd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37719",
        "pageSeq": 37719
    },
    {
        "IDcode": 37720,
        "title": "Ichiko Osamu - Black Nun (Monja Negra)",
        "cover": "https://telegra.ph/file/e4086c46a6351a32a9ea6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37720",
        "pageSeq": 37720
    },
    {
        "IDcode": 37721,
        "title": "Shui Miao - Glorious (Azur Lane)",
        "cover": "https://telegra.ph/file/b0b0a40e66f1f4e88c286.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37721",
        "pageSeq": 37721
    },
    {
        "IDcode": 37722,
        "title": "Nai Yu - Lencery (Model)",
        "cover": "https://telegra.ph/file/67450bdf84fb33230a823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37722",
        "pageSeq": 37722
    },
    {
        "IDcode": 37723,
        "title": "Hidori Rose - Belfast (Azur Lane)",
        "cover": "https://telegra.ph/file/4d347799e04d9cbfa3167.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37723",
        "pageSeq": 37723
    },
    {
        "IDcode": 37724,
        "title": "柚木 - Black Nurse",
        "cover": "https://telegra.ph/file/51a66cf1e3147191cc5d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37724",
        "pageSeq": 37724
    },
    {
        "IDcode": 37725,
        "title": "Hidori Rose - Fischl (Genshin Impact)",
        "cover": "https://telegra.ph/file/34c8776a5c5efc9543ff9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37725",
        "pageSeq": 37725
    },
    {
        "IDcode": 37726,
        "title": "Hidori Rose - Violet (Violet Evergarden)",
        "cover": "https://telegra.ph/file/3070b91e885505de5dd64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37726",
        "pageSeq": 37726
    },
    {
        "IDcode": 37727,
        "title": "Hidori Rose - Nico (Dead or Alive)",
        "cover": "https://telegra.ph/file/c14887d3cf18803df519e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37727",
        "pageSeq": 37727
    },
    {
        "IDcode": 37728,
        "title": "Shui Miao - Flare/Freya (Kaifuku)",
        "cover": "https://telegra.ph/file/a2bfff3393f37c0859a33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37728",
        "pageSeq": 37728
    },
    {
        "IDcode": 37729,
        "title": "Kaya Huang - Reika (Gantz)",
        "cover": "https://telegra.ph/file/5044d8ba8061ca138bf36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37729",
        "pageSeq": 37729
    },
    {
        "IDcode": 37730,
        "title": "Yoshinobi - Milk",
        "cover": "https://telegra.ph/file/212c8175f3e2516bfa409.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37730",
        "pageSeq": 37730
    },
    {
        "IDcode": 37731,
        "title": "NinJa - Nun",
        "cover": "https://telegra.ph/file/e71eb807134e1d8cfb4ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37731",
        "pageSeq": 37731
    },
    {
        "IDcode": 37732,
        "title": "Shui Miao - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/337c81e7f90f523d09794.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37732",
        "pageSeq": 37732
    },
    {
        "IDcode": 37733,
        "title": "Shimo - Emilia (Re:Zero)",
        "cover": "https://telegra.ph/file/1480df29d4973a93ddaeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37733",
        "pageSeq": 37733
    },
    {
        "IDcode": 37734,
        "title": "Senya Miku - Cheshire (Azurlane)",
        "cover": "https://telegra.ph/file/0b291fcaf4087eb0d3da2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37734",
        "pageSeq": 37734
    },
    {
        "IDcode": 37735,
        "title": "Hidori Rose - Belfast (Azur Lane)",
        "cover": "https://telegra.ph/file/d75903be6dce5dd4622b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37735",
        "pageSeq": 37735
    },
    {
        "IDcode": 37736,
        "title": "Potato Godzilla - Maid",
        "cover": "https://telegra.ph/file/2cbfd157f84752bc2d721.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37736",
        "pageSeq": 37736
    },
    {
        "IDcode": 37737,
        "title": "Hoshilily - Illustrious (Azur Lane)",
        "cover": "https://telegra.ph/file/3caa5bf454823b6d412d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37737",
        "pageSeq": 37737
    },
    {
        "IDcode": 37738,
        "title": "Hane Ame - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/744484c2f31174d70a601.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37738",
        "pageSeq": 37738
    },
    {
        "IDcode": 37739,
        "title": "Potato Godzilla - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/8e4db90a44f57d797327f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37739",
        "pageSeq": 37739
    },
    {
        "IDcode": 37740,
        "title": "XiaXiaoqiu秋和柯基 - Succubus",
        "cover": "https://telegra.ph/file/eb56f7ffa79b31a19e473.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37740",
        "pageSeq": 37740
    },
    {
        "IDcode": 37741,
        "title": "Makachan - Samurai Lencery",
        "cover": "https://telegra.ph/file/90b719d69bfb090262554.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37741",
        "pageSeq": 37741
    },
    {
        "IDcode": 37742,
        "title": "Shimo - Yuuki Asuna (Sword Art Online)",
        "cover": "https://telegra.ph/file/7d9ed80ae12a2f1964fcb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37742",
        "pageSeq": 37742
    },
    {
        "IDcode": 37743,
        "title": "Kalinka Fox - Asagi Igawa (Taimani Asagi)",
        "cover": "https://telegra.ph/file/fe28111111df77f3af8ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37743",
        "pageSeq": 37743
    },
    {
        "IDcode": 37744,
        "title": "Hidori Rose - Meteorite (Arknights)",
        "cover": "https://telegra.ph/file/612bb150ebccdad76b783.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37744",
        "pageSeq": 37744
    },
    {
        "IDcode": 37745,
        "title": "Azami - Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/cf0c804ff207dfb6c6a73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37745",
        "pageSeq": 37745
    },
    {
        "IDcode": 37746,
        "title": "Hidori Rose - Weiss Schnee (RWBY)",
        "cover": "https://telegra.ph/file/f22a0a903dabe3c5d5e13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37746",
        "pageSeq": 37746
    },
    {
        "IDcode": 37747,
        "title": "Hidori Rose & KukoW - Vanilla & Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/014160034e9b8a95a1093.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37747",
        "pageSeq": 37747
    },
    {
        "IDcode": 37748,
        "title": "KuukoW - Fischl (Genshin Impact)",
        "cover": "https://telegra.ph/file/7d858b13bb45f8faa0b68.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37748",
        "pageSeq": 37748
    },
    {
        "IDcode": 37749,
        "title": "Hidori Rose - Hina Roselia (Original Character)",
        "cover": "https://telegra.ph/file/869f2a3fcee63490bcbde.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37749",
        "pageSeq": 37749
    },
    {
        "IDcode": 37750,
        "title": "NinJa - God Miko",
        "cover": "https://telegra.ph/file/30c03038ad24aff61389c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37750",
        "pageSeq": 37750
    },
    {
        "IDcode": 37751,
        "title": "KuukoW - Pymon (Genshin Impact)",
        "cover": "https://telegra.ph/file/98fd5b16a66bd0c7ad930.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37751",
        "pageSeq": 37751
    },
    {
        "IDcode": 37752,
        "title": "こすっちKosuchi - Sinon (Sword Art Online)",
        "cover": "https://telegra.ph/file/68b86d7c695a02e86cc3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37752",
        "pageSeq": 37752
    },
    {
        "IDcode": 37753,
        "title": "KuukoW - Bárbara (Genshin Impact)",
        "cover": "https://telegra.ph/file/cbe30fe545220a81a8cbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37753",
        "pageSeq": 37753
    },
    {
        "IDcode": 37754,
        "title": "Hana Bunny - Nun",
        "cover": "https://telegra.ph/file/f69c87a6fa06c8037c387.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37754",
        "pageSeq": 37754
    },
    {
        "IDcode": 37755,
        "title": "Hidori Rose - Projekt Melody (Vtuber)",
        "cover": "https://telegra.ph/file/9d0da7e64298d718c9b17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37755",
        "pageSeq": 37755
    },
    {
        "IDcode": 37756,
        "title": "Hidori Rose - Scathach/Bunny (Fate Grand Order)",
        "cover": "https://telegra.ph/file/f4fef62bdd55572cdc185.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37756",
        "pageSeq": 37756
    },
    {
        "IDcode": 37757,
        "title": "Nana - Lencery (Model)",
        "cover": "https://telegra.ph/file/ce5e612fc80179ee69e33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37757",
        "pageSeq": 37757
    },
    {
        "IDcode": 37758,
        "title": "NinJa - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/3a3aaf7b218df909449cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37758",
        "pageSeq": 37758
    },
    {
        "IDcode": 37759,
        "title": "麻花酱 - Demeter (Destiny Child)",
        "cover": "https://telegra.ph/file/d0275471ba5f6b177a342.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37759",
        "pageSeq": 37759
    },
    {
        "IDcode": 37760,
        "title": "KuukoW - Hana (Yankee kun to Megane chan)",
        "cover": "https://telegra.ph/file/64976ab98ba4582f6d695.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37760",
        "pageSeq": 37760
    },
    {
        "IDcode": 37761,
        "title": "Yoshinobi - Idol (Azur Lane)",
        "cover": "https://telegra.ph/file/0fe3e58091a4477bb89fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37761",
        "pageSeq": 37761
    },
    {
        "IDcode": 37762,
        "title": "Hidori Rose - CC (Code Geass)",
        "cover": "https://telegra.ph/file/fddcd67b121f9b69f053e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37762",
        "pageSeq": 37762
    },
    {
        "IDcode": 37763,
        "title": "Azami - Ram (Re:Zero)",
        "cover": "https://telegra.ph/file/60080df415201e07fdb21.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37763",
        "pageSeq": 37763
    },
    {
        "IDcode": 37764,
        "title": "Shui Miao - Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/5f95aa00bc99507c1edd7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37764",
        "pageSeq": 37764
    },
    {
        "IDcode": 37765,
        "title": "Hana Bunny - Jeanne D. Arc/Lencery (Fate Grand Order)",
        "cover": "https://telegra.ph/file/c93a8a60dd9071a404d76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37765",
        "pageSeq": 37765
    },
    {
        "IDcode": 37766,
        "title": "Mimi chan - Apron (Delantal)",
        "cover": "https://telegra.ph/file/ea34c30e36f70d43d5f8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37766",
        "pageSeq": 37766
    },
    {
        "IDcode": 37767,
        "title": "Hane Ame - Mikasa (Shingeki No Kyojin)",
        "cover": "https://telegra.ph/file/05f8b09d2116422305ad0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37767",
        "pageSeq": 37767
    },
    {
        "IDcode": 37768,
        "title": "每天都想睡觉的阿咸 - Diona (Genshin Impct)",
        "cover": "https://telegra.ph/file/6391ebce87432f8d50fd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37768",
        "pageSeq": 37768
    },
    {
        "IDcode": 37769,
        "title": "Hane Ame - Stay Home",
        "cover": "https://telegra.ph/file/37404e58327a9d1f75584.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37769",
        "pageSeq": 37769
    },
    {
        "IDcode": 37770,
        "title": "Potato Godzilla - Stay Home",
        "cover": "https://telegra.ph/file/6a61f5cc8519890907f52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37770",
        "pageSeq": 37770
    },
    {
        "IDcode": 37771,
        "title": "Azami - Bunny/Lencery (Model)",
        "cover": "https://telegra.ph/file/d81628679cdbbc96f856f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37771",
        "pageSeq": 37771
    },
    {
        "IDcode": 37772,
        "title": "Lada Lyumos - Mercy (Overwatch)",
        "cover": "https://telegra.ph/file/fb446aae2494bcdcdff97.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37772",
        "pageSeq": 37772
    },
    {
        "IDcode": 37773,
        "title": "Lada Lyumos - Aerith (Final Fantasy)",
        "cover": "https://telegra.ph/file/6f449fe178c9ce8d3b99f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37773",
        "pageSeq": 37773
    },
    {
        "IDcode": 37774,
        "title": "Uy Uy - DVA (Overwatch)",
        "cover": "https://telegra.ph/file/d80f9c4a40bb00bbfab54.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37774",
        "pageSeq": 37774
    },
    {
        "IDcode": 37775,
        "title": "Hoshilily - Noshiro (Azur Lane)",
        "cover": "https://telegra.ph/file/e47b5914477d31683859d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37775",
        "pageSeq": 37775
    },
    {
        "IDcode": 37776,
        "title": "Hidori Rose - Yumy Ros",
        "cover": "https://telegra.ph/file/38d6c837cc2e42837fe26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37776",
        "pageSeq": 37776
    },
    {
        "IDcode": 37777,
        "title": "KaYa Huang - Taihou (Azur Lane)",
        "cover": "https://telegra.ph/file/00dd2e28758a633b712c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37777",
        "pageSeq": 37777
    },
    {
        "IDcode": 37778,
        "title": "Hana Bunny - Stay Home (Bathroom)",
        "cover": "https://telegra.ph/file/7e542aaa82c3b858a50f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37778",
        "pageSeq": 37778
    },
    {
        "IDcode": 37779,
        "title": "KaYa Huang - Kimono (Model)",
        "cover": "https://telegra.ph/file/6e993b7bb75a586496274.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37779",
        "pageSeq": 37779
    },
    {
        "IDcode": 37780,
        "title": "Sally Dorasnow - Eriri (Saenai Heroine)",
        "cover": "https://telegra.ph/file/5bf9776d47e2c12d9a830.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37780",
        "pageSeq": 37780
    },
    {
        "IDcode": 37781,
        "title": "Hane Ame - Venom (Spider Wen)",
        "cover": "https://telegra.ph/file/15b5827dd210e76396617.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37781",
        "pageSeq": 37781
    },
    {
        "IDcode": 37782,
        "title": "Hidori Rose - Karyl (Princess Connect)",
        "cover": "https://telegra.ph/file/48c3b2558b97a0a2cd8ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37782",
        "pageSeq": 37782
    },
    {
        "IDcode": 37783,
        "title": "Nagisa - Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/6a86eb9383af15645653a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37783",
        "pageSeq": 37783
    },
    {
        "IDcode": 37784,
        "title": "MissWarmJ - Lencery/Cosplay (Random)",
        "cover": "https://telegra.ph/file/5f03fac56d105468ccaf5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37784",
        "pageSeq": 37784
    },
    {
        "IDcode": 37785,
        "title": "Hidori Rose - Peach (Mario Bros)",
        "cover": "https://telegra.ph/file/d5ea23ff530c9576d21e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37785",
        "pageSeq": 37785
    },
    {
        "IDcode": 37786,
        "title": "Hane Ame - Celestine (Kuroinu)",
        "cover": "https://telegra.ph/file/48b1f28450d94139e7147.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37786",
        "pageSeq": 37786
    },
    {
        "IDcode": 37787,
        "title": "Ena Fox - Kotori/Maid (Love Live)",
        "cover": "https://telegra.ph/file/8d29817c282001e18b752.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37787",
        "pageSeq": 37787
    },
    {
        "IDcode": 37788,
        "title": "Mimi Chan - Swimsuit (Mizugi)",
        "cover": "https://telegra.ph/file/f4ee5e54fd35b03b7fc23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37788",
        "pageSeq": 37788
    },
    {
        "IDcode": 37789,
        "title": "Mimi Chan - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/c0018777f7a87c54f6a5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37789",
        "pageSeq": 37789
    },
    {
        "IDcode": 37790,
        "title": "Sally Dorasnow - Keqing (Genshin Impact)",
        "cover": "https://telegra.ph/file/95c616391c7dbcb5ae881.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37790",
        "pageSeq": 37790
    },
    {
        "IDcode": 37791,
        "title": "Arty Huang - Nero (Fate/Extra Last Encore)",
        "cover": "https://telegra.ph/file/0a22bd9974216a5161f09.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37791",
        "pageSeq": 37791
    },
    {
        "IDcode": 37792,
        "title": "Potato Godzilla - 2B (Nier Automata)",
        "cover": "https://telegra.ph/file/d4a8f6a476e9f1c26ceb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37792",
        "pageSeq": 37792
    },
    {
        "IDcode": 37793,
        "title": "Hane Ame - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/d0cc283a412611ccd1a82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37793",
        "pageSeq": 37793
    },
    {
        "IDcode": 37794,
        "title": "Shimo - Atago (Azur Lane)",
        "cover": "https://telegra.ph/file/9762c6462f76577b9b5c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37794",
        "pageSeq": 37794
    },
    {
        "IDcode": 37795,
        "title": "Chameleahn - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/dd4dc6235d31f159079b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37795",
        "pageSeq": 37795
    },
    {
        "IDcode": 37796,
        "title": "Yuzupyon - Scathach/Bunny (Fate Grand Order)",
        "cover": "https://telegra.ph/file/35bfac09baeba781249d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37796",
        "pageSeq": 37796
    },
    {
        "IDcode": 37797,
        "title": "Hana Bunny - DVA (Overwatch)",
        "cover": "https://telegra.ph/file/e920e76e273269b274e37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37797",
        "pageSeq": 37797
    },
    {
        "IDcode": 37798,
        "title": "Azami - Zero Two/Bunny (Darling in the Franxx)",
        "cover": "https://telegra.ph/file/09e030048c04387acfb5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37798",
        "pageSeq": 37798
    },
    {
        "IDcode": 37799,
        "title": "Azami - Zero Two/Christmas (Darling in the Franxx)",
        "cover": "https://telegra.ph/file/7d8e576e88feee67c080d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37799",
        "pageSeq": 37799
    },
    {
        "IDcode": 37800,
        "title": "UmekoJ - Gawr Gura (Holo Live)",
        "cover": "https://telegra.ph/file/788110c92bcf6d74f5622.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37800",
        "pageSeq": 37800
    },
    {
        "IDcode": 37801,
        "title": "Azami & Byoru - Misaki & Nagisa (Dead or Live)",
        "cover": "https://telegra.ph/file/ce40c9bf644d2db146c17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=37801",
        "pageSeq": 37801
    }
];
