// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38610,
        "title": "Ti - Elf (Elf Village)",
        "cover": "https://telegra.ph/file/765bd2aa49611b71b7e4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38610",
        "pageSeq": 38610
    },
    {
        "IDcode": 38611,
        "title": "Chunmomo一笑芳香沁 - Nekogirl School",
        "cover": "https://telegra.ph/file/5a4f66ff4fc41e2a8b3df.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38611",
        "pageSeq": 38611
    },
    {
        "IDcode": 38612,
        "title": "日奈娇 - Sirius Swimsui (Azur Lane)",
        "cover": "https://telegra.ph/file/2a2ba204d883f14fd11c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38612",
        "pageSeq": 38612
    },
    {
        "IDcode": 38613,
        "title": "Cheesewii - C.C./CC (Code Geass)",
        "cover": "https://telegra.ph/file/c0a381df49c1fa23966ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38613",
        "pageSeq": 38613
    },
    {
        "IDcode": 38614,
        "title": "KuukoW - Lumine (Genshin Impact)",
        "cover": "https://telegra.ph/file/d86fd7633f1989083b6b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38614",
        "pageSeq": 38614
    },
    {
        "IDcode": 38615,
        "title": "KuukoW - Mirror Maiden (Genshi Impact)",
        "cover": "https://telegra.ph/file/0e39b24782093eeffa176.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38615",
        "pageSeq": 38615
    },
    {
        "IDcode": 38616,
        "title": "Purple Bitch - Ankha Zone (Animal Crosing)",
        "cover": "https://telegra.ph/file/8bbec5da9e0c885398ff3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38616",
        "pageSeq": 38616
    },
    {
        "IDcode": 38617,
        "title": "習呆呆 - Yao (king of Glory)",
        "cover": "https://telegra.ph/file/04c98ad88dde3ea899900.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38617",
        "pageSeq": 38617
    },
    {
        "IDcode": 38618,
        "title": "Caticornplay - Emilia (Re: Zero)",
        "cover": "https://telegra.ph/file/6f4dc8e30a1950a2a897d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38618",
        "pageSeq": 38618
    },
    {
        "IDcode": 38619,
        "title": "Muraemon - Caution Girl & Athletic",
        "cover": "https://telegra.ph/file/c08ed06003ebddb32befd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38619",
        "pageSeq": 38619
    },
    {
        "IDcode": 38620,
        "title": "Hidori Rose - Atago Swimsuit (Azur Lane)",
        "cover": "https://telegra.ph/file/82cb402201a7054e00c13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38620",
        "pageSeq": 38620
    },
    {
        "IDcode": 38621,
        "title": "Kiera Marie - Samus Aran (Detroid)",
        "cover": "https://telegra.ph/file/2f8dc5993df7f4485fc62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38621",
        "pageSeq": 38621
    },
    {
        "IDcode": 38622,
        "title": "Kiera Marie - Samus Aran Swimsuit (Detroid)",
        "cover": "https://telegra.ph/file/256f207f08c533f1446e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38622",
        "pageSeq": 38622
    },
    {
        "IDcode": 38623,
        "title": "Shimo - Medri (Ishuzoku Reviewers)",
        "cover": "https://telegra.ph/file/2746df1dd051f2055e45b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38623",
        "pageSeq": 38623
    },
    {
        "IDcode": 38624,
        "title": "Kiera Marie - Asuna bathroom (Sword Art Online)",
        "cover": "https://telegra.ph/file/1bb9f54eda97d25b26cbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38624",
        "pageSeq": 38624
    },
    {
        "IDcode": 38625,
        "title": "Hidori Rose - Graf Zeppelin (Azur Lane)",
        "cover": "https://telegra.ph/file/84a88c204f0c5a0205b8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38625",
        "pageSeq": 38625
    },
    {
        "IDcode": 38626,
        "title": "Hidori Rose - Le Malin Bunny (Azur Lane)",
        "cover": "https://telegra.ph/file/30b68af31dd09b8f62787.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38626",
        "pageSeq": 38626
    },
    {
        "IDcode": 38627,
        "title": "Baiyin - Succubus (Random Cosplay)",
        "cover": "https://telegra.ph/file/d637b8fb9ee910ad3d1e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38627",
        "pageSeq": 38627
    },
    {
        "IDcode": 38628,
        "title": "Valentina Kryp - Emilia (Re: Zero)",
        "cover": "https://telegra.ph/file/741d407169cbd51d02f06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38628",
        "pageSeq": 38628
    },
    {
        "IDcode": 38629,
        "title": "Megumi Koneko - Catherine (Random Coso)",
        "cover": "https://telegra.ph/file/f7ec3a5c2150a1650f277.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38629",
        "pageSeq": 38629
    },
    {
        "IDcode": 38630,
        "title": "Hidori Rose - Houshou Marine (Hololive/Vtuber)",
        "cover": "https://telegra.ph/file/8311a91f4b87272bf6424.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38630",
        "pageSeq": 38630
    },
    {
        "IDcode": 38631,
        "title": "Potato Godzilla - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/df23e7ff0de59894acbae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38631",
        "pageSeq": 38631
    },
    {
        "IDcode": 38632,
        "title": "Potato Godzilla - MP7 (Girls Frontline)",
        "cover": "https://telegra.ph/file/a147b1d0b50a778a280b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38632",
        "pageSeq": 38632
    },
    {
        "IDcode": 38633,
        "title": "Octokuro - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/73745f1718392e4c6a713.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38633",
        "pageSeq": 38633
    },
    {
        "IDcode": 38634,
        "title": "Ri Care - 2B Christmas (Nier Autómata)",
        "cover": "https://telegra.ph/file/e43ae915194c15bcd04a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38634",
        "pageSeq": 38634
    },
    {
        "IDcode": 38635,
        "title": "Shadory - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/2f8a33a21ca87005fad24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38635",
        "pageSeq": 38635
    },
    {
        "IDcode": 38636,
        "title": "Omimi - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/0332ecfac169a60abaf3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38636",
        "pageSeq": 38636
    },
    {
        "IDcode": 38637,
        "title": "Xiao Ding 小丁 - OTS-14 (Girls Frontline)",
        "cover": "https://telegra.ph/file/6e7a68eec86628fe7c4f0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38637",
        "pageSeq": 38637
    },
    {
        "IDcode": 38638,
        "title": "Xiao Ding 小丁 - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/651bf259df6ecc09f7a93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38638",
        "pageSeq": 38638
    },
    {
        "IDcode": 38639,
        "title": "Kettoe - Asuka Neon (Genesis Evangelion)",
        "cover": "https://telegra.ph/file/a11293674598516ac3e2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38639",
        "pageSeq": 38639
    },
    {
        "IDcode": 38640,
        "title": "Miaw Kotoshi - Succubus",
        "cover": "https://telegra.ph/file/c705ad8bde889cadce5e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38640",
        "pageSeq": 38640
    },
    {
        "IDcode": 38641,
        "title": "Velvet Valerina - Black Seifuku (Random Cosplay)",
        "cover": "https://telegra.ph/file/3bf2e8f431ebf85cb937d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38641",
        "pageSeq": 38641
    },
    {
        "IDcode": 38642,
        "title": "Potato Godzilla - Tamamo Swimsuit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/25bfb535358421edcd17e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38642",
        "pageSeq": 38642
    },
    {
        "IDcode": 38643,
        "title": "Neko Koyoshi - Alice (Alice in Wonderonderl)",
        "cover": "https://telegra.ph/file/732bf4d9ae2d8a8610af7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38643",
        "pageSeq": 38643
    },
    {
        "IDcode": 38644,
        "title": "Rocks Light - Wooly bunny (Random Cosplay)",
        "cover": "https://telegra.ph/file/34e7c4155455bca4808ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38644",
        "pageSeq": 38644
    },
    {
        "IDcode": 38645,
        "title": "Alina Becker - Mikasa (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/b94526a974922f8abb67c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38645",
        "pageSeq": 38645
    },
    {
        "IDcode": 38646,
        "title": "UyUy - 2B Bunny (Nier Autómata)",
        "cover": "https://telegra.ph/file/9970f6e584301fb7939fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38646",
        "pageSeq": 38646
    },
    {
        "IDcode": 38647,
        "title": "Meryl Sama - Chun Li (Street Fighter)",
        "cover": "https://telegra.ph/file/3dca20bc1167cad79becc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38647",
        "pageSeq": 38647
    },
    {
        "IDcode": 38648,
        "title": "Nekokoyoshi - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/6f734b25f395c27f55074.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38648",
        "pageSeq": 38648
    },
    {
        "IDcode": 38649,
        "title": "Ain Nguyen - Chitose Asuna / Nagatoro (Blue Archive / Ijiranaide Nagatoro San)",
        "cover": "https://telegra.ph/file/e2c89c5259d6972a0c392.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38649",
        "pageSeq": 38649
    },
    {
        "IDcode": 38650,
        "title": "Sally Dorasnow - Vanilla (Nekopara)",
        "cover": "https://telegra.ph/file/bbf6c03f63c78e556cf3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38650",
        "pageSeq": 38650
    },
    {
        "IDcode": 38651,
        "title": "Gumiho Arts - U-47 (Azur Lane)",
        "cover": "https://telegra.ph/file/319f05df57329a921e75b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38651",
        "pageSeq": 38651
    },
    {
        "IDcode": 38652,
        "title": "Gumiho Arts & Kerocchi - Asuka & Rei (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/f3ab3bac98f2973044c1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38652",
        "pageSeq": 38652
    },
    {
        "IDcode": 38653,
        "title": "转载 - Rem Bunny (Re: Zero)",
        "cover": "https://telegra.ph/file/1c518d75d21319c44733c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38653",
        "pageSeq": 38653
    },
    {
        "IDcode": 38654,
        "title": "SakuraiNingNing桜井宁宁 - Guitar Sister",
        "cover": "https://telegra.ph/file/2d734c94b081a40a87d7d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38654",
        "pageSeq": 38654
    },
    {
        "IDcode": 38655,
        "title": "Rocksy Light - Skater (Random Cosplay)",
        "cover": "https://telegra.ph/file/3b79f43fe251636c1869d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38655",
        "pageSeq": 38655
    },
    {
        "IDcode": 38656,
        "title": "Alejandra Boodler - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/08aadb4cdca55b186bb4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38656",
        "pageSeq": 38656
    },
    {
        "IDcode": 38657,
        "title": "Shiro Kitsune - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/8708b551f93767e132ea4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38657",
        "pageSeq": 38657
    },
    {
        "IDcode": 38658,
        "title": "Hidori Rose - Bunny Christmas",
        "cover": "https://telegra.ph/file/c5d89ed8abfd8029727ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38658",
        "pageSeq": 38658
    },
    {
        "IDcode": 38659,
        "title": "Shiro Kitsune - Yoko ( Tengen Toppa Gurren Lagan)",
        "cover": "https://telegra.ph/file/31566413f4d8445f16503.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38659",
        "pageSeq": 38659
    },
    {
        "IDcode": 38660,
        "title": "Hime Cosplay - Shinobu Oshino (Monogatari Series)",
        "cover": "https://telegra.ph/file/970d7a80833a93292afa5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38660",
        "pageSeq": 38660
    },
    {
        "IDcode": 38661,
        "title": "Yoshinobi - Ooshino Christmas (Azur Lane)",
        "cover": "https://telegra.ph/file/7d78883a89b53902fafa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38661",
        "pageSeq": 38661
    },
    {
        "IDcode": 38662,
        "title": "Hoshilily - 2B Christmas (Nier Automata)",
        "cover": "https://telegra.ph/file/66a2fc865f6f0df29ae31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38662",
        "pageSeq": 38662
    },
    {
        "IDcode": 38663,
        "title": "蠢沫沫 Chunmomo - Formidable (Azur Lane)",
        "cover": "https://telegra.ph/file/4f3b695673cf4cb4e01e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38663",
        "pageSeq": 38663
    },
    {
        "IDcode": 38664,
        "title": "Ringo Mitsuri - Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/15ff3b84584aae26a2731.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38664",
        "pageSeq": 38664
    },
    {
        "IDcode": 38665,
        "title": "王雨纯 - YouMi Vol. 25 Black Spiderman (Spiderman 9",
        "cover": "https://telegra.ph/file/4d637fdf289dca16f4fe0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38665",
        "pageSeq": 38665
    },
    {
        "IDcode": 38666,
        "title": "Mikomin - Keqing Christmas (Genshin Impact)",
        "cover": "https://telegra.ph/file/46f97afaf8402cf3f0bc0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38666",
        "pageSeq": 38666
    },
    {
        "IDcode": 38667,
        "title": "Kalinka Fox - Jinx Christmas (League Of Legends)",
        "cover": "https://telegra.ph/file/38eebd27a1832cea9b118.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38667",
        "pageSeq": 38667
    },
    {
        "IDcode": 38668,
        "title": "PingPing - Mistioria Arte (Kuroinu)",
        "cover": "https://telegra.ph/file/1b52ad263cfb5c2bfc08c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38668",
        "pageSeq": 38668
    },
    {
        "IDcode": 38669,
        "title": "Shiro Kitsune - Shuten Douji (Fate Grand Order)",
        "cover": "https://telegra.ph/file/9f74939af11d2cc7de17d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38669",
        "pageSeq": 38669
    },
    {
        "IDcode": 38670,
        "title": "Bunny Ayumi - Kasumi (Dead Or Alive)",
        "cover": "https://telegra.ph/file/488c94d63e1c245eed660.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38670",
        "pageSeq": 38670
    },
    {
        "IDcode": 38671,
        "title": "Azami - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/cabd35cab3af5a32f38ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38671",
        "pageSeq": 38671
    },
    {
        "IDcode": 38672,
        "title": "Rocksy Light - Water (Model)",
        "cover": "https://telegra.ph/file/1e4ef4991ebe13af5c0ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38672",
        "pageSeq": 38672
    },
    {
        "IDcode": 38673,
        "title": "蠢沫沫 Chunmomo - Swimsuit (Model)",
        "cover": "https://telegra.ph/file/7055480252a0dd752d216.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38673",
        "pageSeq": 38673
    },
    {
        "IDcode": 38674,
        "title": "Sarah Carvalho - Nezuko (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/c1ba642197f74eefaa442.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38674",
        "pageSeq": 38674
    },
    {
        "IDcode": 38675,
        "title": "日奈娇 - Type 95式婚纱 (Girls Frontline)",
        "cover": "https://telegra.ph/file/0b147b37cbec82fe6a9f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38675",
        "pageSeq": 38675
    },
    {
        "IDcode": 38676,
        "title": "Byoru - Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/2c650ac1bc7e5d15e09aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38676",
        "pageSeq": 38676
    },
    {
        "IDcode": 38677,
        "title": "Mikomi Hokina - Sirius Qipao Lingerie (Azur Lane)",
        "cover": "https://telegra.ph/file/66c515237ce0c8b2a77dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38677",
        "pageSeq": 38677
    },
    {
        "IDcode": 38678,
        "title": "Hoshiko - Saber Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/420d14fdd4b56f505a1b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38678",
        "pageSeq": 38678
    },
    {
        "IDcode": 38679,
        "title": "Chameleahn - Ember Mclain (Danny Phantom)",
        "cover": "https://telegra.ph/file/f4ee6acda26c465ee256c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38679",
        "pageSeq": 38679
    },
    {
        "IDcode": 38680,
        "title": "蠢沫沫 - Chunmomo - 2B (Nier Automáta)",
        "cover": "https://telegra.ph/file/46bf5856471b311177ee3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38680",
        "pageSeq": 38680
    },
    {
        "IDcode": 38681,
        "title": "Ainza Mui Mui - Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/6ce23a7a4792aca035ecf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38681",
        "pageSeq": 38681
    },
    {
        "IDcode": 38682,
        "title": "Anya Braddock - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/8628625a86e5c085b11f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38682",
        "pageSeq": 38682
    },
    {
        "IDcode": 38683,
        "title": "Marcelline Cos - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/642318020640a3fcbcc01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38683",
        "pageSeq": 38683
    },
    {
        "IDcode": 38684,
        "title": "Chonoblack - Gawr Gura (Hololive)",
        "cover": "https://telegra.ph/file/53a228f7fbec1198881f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38684",
        "pageSeq": 38684
    },
    {
        "IDcode": 38685,
        "title": "Byoru - Choco Yuzuki (Hololive)",
        "cover": "https://telegra.ph/file/63fdb0c371096d8f78b86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38685",
        "pageSeq": 38685
    },
    {
        "IDcode": 38686,
        "title": "Miaw Kotoshi 爆机少女喵小吉 - Succubus魅魔",
        "cover": "https://telegra.ph/file/cf1c014bb591c96d09d99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38686",
        "pageSeq": 38686
    },
    {
        "IDcode": 38687,
        "title": "Giu Hellsing - Akeno (High School DXD)",
        "cover": "https://telegra.ph/file/8f96bb9be6312836e1740.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38687",
        "pageSeq": 38687
    },
    {
        "IDcode": 38688,
        "title": "Hoshilily星之迟迟 - Emilia (Re:Zero)",
        "cover": "https://telegra.ph/file/9f8a0814924ade7f5dc12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38688",
        "pageSeq": 38688
    },
    {
        "IDcode": 38689,
        "title": "Gumiho Arts - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/87a04124fedbca3c75218.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38689",
        "pageSeq": 38689
    },
    {
        "IDcode": 38690,
        "title": "Alina Becker - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/1e6510e5c27cbdf1628d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38690",
        "pageSeq": 38690
    },
    {
        "IDcode": 38691,
        "title": "Alina Becker - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/9b967f49dafbe311763e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38691",
        "pageSeq": 38691
    },
    {
        "IDcode": 38692,
        "title": "Giu Hellsing - Elsa (Re: Zero)",
        "cover": "https://telegra.ph/file/f72e14c3820173c038008.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38692",
        "pageSeq": 38692
    },
    {
        "IDcode": 38693,
        "title": "Giu Hellsing - Ein Thosaka (Fate Stay Night)",
        "cover": "https://telegra.ph/file/f7e631b77af2737df10c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38693",
        "pageSeq": 38693
    },
    {
        "IDcode": 38694,
        "title": "Giu Hellsing - Elizabeth Liones (Nanatsu No Taiza)",
        "cover": "https://telegra.ph/file/0e02ea533399373b89a0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38694",
        "pageSeq": 38694
    },
    {
        "IDcode": 38695,
        "title": "Zyra秋 - Nun (Random Cosplay)",
        "cover": "https://telegra.ph/file/f91526c85ea3215614ea7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38695",
        "pageSeq": 38695
    },
    {
        "IDcode": 38696,
        "title": "Alina Becker - Harley Quinn (Batman)",
        "cover": "https://telegra.ph/file/26b2f2d6db9507dfdbcda.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38696",
        "pageSeq": 38696
    },
    {
        "IDcode": 38697,
        "title": "Byoru - Hinata Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/98c7242348fb10b623710.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38697",
        "pageSeq": 38697
    },
    {
        "IDcode": 38698,
        "title": "Gremlynne - Alice Liddell (Alice in Wonderland)",
        "cover": "https://telegra.ph/file/3f550278fafa5756f6fa4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38698",
        "pageSeq": 38698
    },
    {
        "IDcode": 38699,
        "title": "Hane Ame - Sirius (Azur Lane)",
        "cover": "https://telegra.ph/file/635c42b9dfdf1467a549e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38699",
        "pageSeq": 38699
    },
    {
        "IDcode": 38700,
        "title": "阿半今天很开心 - Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/88446716eb3ff506f75bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38700",
        "pageSeq": 38700
    },
    {
        "IDcode": 38701,
        "title": "阿包也是兔娘 - Mona Maid莫娜女仆 (Genshin Impact)",
        "cover": "https://telegra.ph/file/016244e298ef8dcb5279f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38701",
        "pageSeq": 38701
    },
    {
        "IDcode": 38702,
        "title": "Caticornplay - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/7b6ebb47963931dc64cad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38702",
        "pageSeq": 38702
    },
    {
        "IDcode": 38703,
        "title": "KuukoW - Eve Love Call (Original Character)",
        "cover": "https://telegra.ph/file/bbe9c475341318a8fc924.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38703",
        "pageSeq": 38703
    },
    {
        "IDcode": 38704,
        "title": "HaNari (하나리) - Catgirl in Stripes (Random Cosplay)",
        "cover": "https://telegra.ph/file/28d7c27ab77790792446f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38704",
        "pageSeq": 38704
    },
    {
        "IDcode": 38705,
        "title": "阿半今天很开心 - Atago 爱宕婚纱 (Azur Lane)",
        "cover": "https://telegra.ph/file/335d8a184f216412472ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38705",
        "pageSeq": 38705
    },
    {
        "IDcode": 38706,
        "title": "손손 SonSon - Mischief Black Cat (Random Cosplay)",
        "cover": "https://telegra.ph/file/efe662d2c532eff3ab46f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38706",
        "pageSeq": 38706
    },
    {
        "IDcode": 38707,
        "title": "蠢沫沫Chunmomo -  Twintails Gamer (Model)",
        "cover": "https://telegra.ph/file/d3be73275cad8f23ce4c4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38707",
        "pageSeq": 38707
    },
    {
        "IDcode": 38708,
        "title": "Yoshinobi - Kokomi (Genshin Impact)",
        "cover": "https://telegra.ph/file/f8007ea645198aeb78675.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38708",
        "pageSeq": 38708
    },
    {
        "IDcode": 38709,
        "title": "Sophie Valentine - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/dfce2d41f6803e3e9ce16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38709",
        "pageSeq": 38709
    }
];
