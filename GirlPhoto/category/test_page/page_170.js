// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 39013,
        "title": "Chunmomo - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/85d4988ddfa652e91498b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39013",
        "pageSeq": 39013
    },
    {
        "IDcode": 39014,
        "title": "KuukoW - Aqua (Hololive)",
        "cover": "https://telegra.ph/file/2e99e80e158628492f4f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39014",
        "pageSeq": 39014
    },
    {
        "IDcode": 39015,
        "title": "Hane Ame - Daki (Kimetsu no Yaiba)",
        "cover": "https://telegra.ph/file/9b99b94cf07492e62cf96.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39015",
        "pageSeq": 39015
    },
    {
        "IDcode": 39016,
        "title": "Alin Ma / Xenon - Konan (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/b53d6941a9032ea3ba3cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39016",
        "pageSeq": 39016
    },
    {
        "IDcode": 39017,
        "title": "Potato Godzilla - Rem in Subaru Jacket (Re: Zero)",
        "cover": "https://telegra.ph/file/ccdbf4c60e20836538c7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39017",
        "pageSeq": 39017
    },
    {
        "IDcode": 39018,
        "title": "Píaloof - Megumi Jatou (Saenai Heroine)",
        "cover": "https://telegra.ph/file/0d20fc0c35561cd864da7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39018",
        "pageSeq": 39018
    },
    {
        "IDcode": 39019,
        "title": "Queenie Chuppy - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/b83b406579311e78970b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39019",
        "pageSeq": 39019
    },
    {
        "IDcode": 39020,
        "title": "Xenon/Alin Ma - Zero Two (Darling In the Franxx)",
        "cover": "https://telegra.ph/file/f4c821307d8df4b11199e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39020",
        "pageSeq": 39020
    },
    {
        "IDcode": 39021,
        "title": "Azami - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/4f557c3f9c7255eb64bf5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39021",
        "pageSeq": 39021
    },
    {
        "IDcode": 39022,
        "title": "小礼好困 SleeppyLee - Airi Akitsuki (Oni Chichi)",
        "cover": "https://telegra.ph/file/82806119877a1c3af439f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39022",
        "pageSeq": 39022
    },
    {
        "IDcode": 39023,
        "title": "Katyuska Moonfox - Coconut (Nekopara)",
        "cover": "https://telegra.ph/file/ac344304085c4ffa98f86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39023",
        "pageSeq": 39023
    },
    {
        "IDcode": 39024,
        "title": "KuukoW - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/7145222f7b816bcaffe8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39024",
        "pageSeq": 39024
    },
    {
        "IDcode": 39025,
        "title": "Valentina Kryp - Psylocke (X-Men)",
        "cover": "https://telegra.ph/file/32eac30deb24028b3760a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39025",
        "pageSeq": 39025
    },
    {
        "IDcode": 39026,
        "title": "UyUy - Princess Zelda (The Legend of Zelda)",
        "cover": "https://telegra.ph/file/bdb005ebbff50e2159111.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39026",
        "pageSeq": 39026
    },
    {
        "IDcode": 39027,
        "title": "Hana Bunny - Senate Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/546f698d2ebb870b51183.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39027",
        "pageSeq": 39027
    },
    {
        "IDcode": 39028,
        "title": "Potato Godzilla - Red Flannel (Model Casual)",
        "cover": "https://telegra.ph/file/bbb349f17479039b384a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39028",
        "pageSeq": 39028
    },
    {
        "IDcode": 39029,
        "title": "Senya Miku - Kunoichi (Random Cosplay)",
        "cover": "https://telegra.ph/file/8d64d9fcce7188781cc06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39029",
        "pageSeq": 39029
    },
    {
        "IDcode": 39030,
        "title": "Shadory - Esdeath (Akame Ga Kill)",
        "cover": "https://telegra.ph/file/d030ac0220b186857abb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39030",
        "pageSeq": 39030
    },
    {
        "IDcode": 39031,
        "title": "Yoshinobi - Tejina (Tejina-sempai)",
        "cover": "https://telegra.ph/file/eb8643dbe2a02652a5cdc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39031",
        "pageSeq": 39031
    },
    {
        "IDcode": 39032,
        "title": "Shiro Kitsune - Do-S (One Punch Man)",
        "cover": "https://telegra.ph/file/acfd0f7cc99c309b6f0db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39032",
        "pageSeq": 39032
    },
    {
        "IDcode": 39033,
        "title": "Chunmomo - Maid (Random Cosplay)",
        "cover": "https://telegra.ph/file/3a10c52638ee8101fac29.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39033",
        "pageSeq": 39033
    },
    {
        "IDcode": 39034,
        "title": "Potato Godzilla - Lewd Black Outfit",
        "cover": "https://telegra.ph/file/e9413568dd03bafe9db9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39034",
        "pageSeq": 39034
    },
    {
        "IDcode": 39035,
        "title": "Studio Vampire - Sagiri Izumi (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/8e715a78f406bd8f19eec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39035",
        "pageSeq": 39035
    },
    {
        "IDcode": 39036,
        "title": "Nana Berry - Seraphine (League of Legends)",
        "cover": "https://telegra.ph/file/4812dc75b0166616d270e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39036",
        "pageSeq": 39036
    },
    {
        "IDcode": 39037,
        "title": "Hana Bunny - Guitar Sister (Random Cosplay)",
        "cover": "https://telegra.ph/file/e94312ec98f14663af290.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39037",
        "pageSeq": 39037
    },
    {
        "IDcode": 39038,
        "title": "KuukoW - Raiden (Genshin Impact)",
        "cover": "https://telegra.ph/file/44cf7c0e20c0a186deb2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39038",
        "pageSeq": 39038
    },
    {
        "IDcode": 39039,
        "title": "Katyuska Moonfox - BB (Fate Grand Order)",
        "cover": "https://telegra.ph/file/2a864d64d7910c1a0e76a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39039",
        "pageSeq": 39039
    },
    {
        "IDcode": 39040,
        "title": "Shui Miao Aqua - Chiyo (Ane Naru Mono)",
        "cover": "https://telegra.ph/file/d051f56a275cbccf04b72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39040",
        "pageSeq": 39040
    },
    {
        "IDcode": 39041,
        "title": "Potato Godzilla - Emo Girlfriend",
        "cover": "https://telegra.ph/file/e66397de5a3e38c00da04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39041",
        "pageSeq": 39041
    },
    {
        "IDcode": 39042,
        "title": "Rocksy Light - Marie Rose (Dead Or Alive)",
        "cover": "https://telegra.ph/file/14084afff4426c7701b50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39042",
        "pageSeq": 39042
    },
    {
        "IDcode": 39043,
        "title": "Hane Ame - Shizuku (Sono Bisque Dollwo Suru)",
        "cover": "https://telegra.ph/file/7e45ec3732c9b81d0aa9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39043",
        "pageSeq": 39043
    },
    {
        "IDcode": 39044,
        "title": "秋和柯基 Qiu Xia Xiao - Tifa Nurse (Final Fantasy)",
        "cover": "https://telegra.ph/file/e5f9229e0eae0b04064a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39044",
        "pageSeq": 39044
    },
    {
        "IDcode": 39045,
        "title": "欲子姐姐 Yuziqoq - Guitar Sister (Random Cosplay)",
        "cover": "https://telegra.ph/file/a7249cea544c1c5c4832c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39045",
        "pageSeq": 39045
    },
    {
        "IDcode": 39046,
        "title": "Sunny Vier - 2B Latex Qipao (Nier Autómata)",
        "cover": "https://telegra.ph/file/3556cab9b8959c6517439.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39046",
        "pageSeq": 39046
    },
    {
        "IDcode": 39047,
        "title": "Joyce - Marin (Sono Bisque Dollwo Suru)",
        "cover": "https://telegra.ph/file/6d80fc3f86547ad97de3b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39047",
        "pageSeq": 39047
    },
    {
        "IDcode": 39048,
        "title": "Hokunaimeko - Celestine Lucullus 2 (Kuroinu)",
        "cover": "https://telegra.ph/file/7de913fdb76c5d0eff0b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39048",
        "pageSeq": 39048
    },
    {
        "IDcode": 39049,
        "title": "Man Man - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/0f1ed1cdd4166dbdc50b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39049",
        "pageSeq": 39049
    },
    {
        "IDcode": 39050,
        "title": "Meggii - Booette (Mario Bros)",
        "cover": "https://telegra.ph/file/2b39494120b8e43bebf3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39050",
        "pageSeq": 39050
    },
    {
        "IDcode": 39051,
        "title": "UyUy - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/33309e9db7998bd32e17c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39051",
        "pageSeq": 39051
    },
    {
        "IDcode": 39052,
        "title": "Shadory - Eula (Genshin Impact)",
        "cover": "https://telegra.ph/file/3fbff372c0e31c43c4aef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39052",
        "pageSeq": 39052
    },
    {
        "IDcode": 39053,
        "title": "是本末末 Benmomo -  精灵村 Elf (Elf Village)",
        "cover": "https://telegra.ph/file/3eae200b1e35fcb56edf0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39053",
        "pageSeq": 39053
    },
    {
        "IDcode": 39054,
        "title": "Rioko 凉凉子  - Rizukyun (Sono Bisque Dollwo Suru)",
        "cover": "https://telegra.ph/file/bb802b227632c1afc95ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39054",
        "pageSeq": 39054
    },
    {
        "IDcode": 39056,
        "title": "UyUy - 2B Christmas (Nier Automata)",
        "cover": "https://telegra.ph/file/557bbc42867090e19771b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39056",
        "pageSeq": 39056
    },
    {
        "IDcode": 39057,
        "title": "猫田圣奈奈 - Formidable 碧蓝航线 可畏 (Azur Lane)",
        "cover": "https://telegra.ph/file/3b199056eb337e3411cb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39057",
        "pageSeq": 39057
    },
    {
        "IDcode": 39058,
        "title": "Yoshinobi - Khaliya",
        "cover": "https://telegra.ph/file/713d1677df438d54bfd2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39058",
        "pageSeq": 39058
    },
    {
        "IDcode": 39059,
        "title": "Lady Melamori - Mitsuri Kanroji (Kimetsu No Yaiba)",
        "cover": "https://telegra.ph/file/4b27075eec49ac5c748eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39059",
        "pageSeq": 39059
    },
    {
        "IDcode": 39060,
        "title": "六味帝皇酱 - Schoolgirl 废墟JK",
        "cover": "https://telegra.ph/file/fb8c58253300ea7105cc9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39060",
        "pageSeq": 39060
    },
    {
        "IDcode": 39061,
        "title": "Nekokoyoshi - Taiho (Azur Lane)",
        "cover": "https://telegra.ph/file/4cd05ddd274e62fe26ed9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39061",
        "pageSeq": 39061
    },
    {
        "IDcode": 39062,
        "title": "Xiaoying - Marin Kitagawa (Sono Bisque Doll Wo Soru)",
        "cover": "https://telegra.ph/file/87441855c9283f63aa4c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39062",
        "pageSeq": 39062
    },
    {
        "IDcode": 39063,
        "title": "Hane Ame - Elinalise (Mushoku Tensei)",
        "cover": "https://telegra.ph/file/27a51b6ebac18e142f1b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39063",
        "pageSeq": 39063
    },
    {
        "IDcode": 39064,
        "title": "Byoru - Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/8b77c13cd7506dfb7ee41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39064",
        "pageSeq": 39064
    },
    {
        "IDcode": 39065,
        "title": "Potato Godzilla - Uzaki Swimsuit (Uzaki-Chan)",
        "cover": "https://telegra.ph/file/a8d355558aa301d4bffeb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39065",
        "pageSeq": 39065
    },
    {
        "IDcode": 39066,
        "title": "Vinnegal - Aphrodite (Random Cosplay)",
        "cover": "https://telegra.ph/file/3e0eebf99bdc728139e5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39066",
        "pageSeq": 39066
    },
    {
        "IDcode": 39067,
        "title": "Fantasy Factory - Ishtar and Ereshkigal (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1883b8dc1efea1e888569.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39067",
        "pageSeq": 39067
    },
    {
        "IDcode": 39068,
        "title": "Candy Ball - Albedo (Overlord)",
        "cover": "https://telegra.ph/file/9a5929503d84d12c023a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39068",
        "pageSeq": 39068
    },
    {
        "IDcode": 39069,
        "title": "Lady Melamori - Lisa (Genshin Impact)",
        "cover": "https://telegra.ph/file/4842bf8db234b69923835.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39069",
        "pageSeq": 39069
    },
    {
        "IDcode": 39070,
        "title": "Hidori Rose - Eli Ayase (Love Live)",
        "cover": "https://telegra.ph/file/878ab3a88e02eed3df482.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39070",
        "pageSeq": 39070
    },
    {
        "IDcode": 39071,
        "title": "Hidori Rose - Marin Kitagawa (Sono Bosque Doll Wo Soru)",
        "cover": "https://telegra.ph/file/d3c5d06e7faf1ae3d22ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39071",
        "pageSeq": 39071
    },
    {
        "IDcode": 39072,
        "title": "Saya The Fox - Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/45f5828990fa6c4e32eba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39072",
        "pageSeq": 39072
    },
    {
        "IDcode": 39073,
        "title": "Queenie Chuppy - Bela Dimitrescu (Resident Evil)",
        "cover": "https://telegra.ph/file/1ade21c1881783e3dde86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39073",
        "pageSeq": 39073
    },
    {
        "IDcode": 39074,
        "title": "Hidori Rose - Reisalin Sout (Atelier Ryza)",
        "cover": "https://telegra.ph/file/2d6919aff0603687ceb62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39074",
        "pageSeq": 39074
    },
    {
        "IDcode": 39075,
        "title": "Hidori Rose - Riamu Yumemi (Idolmaster)",
        "cover": "https://telegra.ph/file/fb6b4ca01533b1498bd3c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39075",
        "pageSeq": 39075
    },
    {
        "IDcode": 39076,
        "title": "Vinnegal - Marin Kitagawa (Sono Bisque Doll Wo Soru)",
        "cover": "https://telegra.ph/file/2d16e98e678d45a9bf825.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39076",
        "pageSeq": 39076
    },
    {
        "IDcode": 39077,
        "title": "蠢沫沫 Chunmomo - Schoolgirl (Random Cosplay)",
        "cover": "https://telegra.ph/file/3e4f21f564e889453312c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39077",
        "pageSeq": 39077
    },
    {
        "IDcode": 39078,
        "title": "Lady Melamori - Atlantic Mercy (Overwatch)",
        "cover": "https://telegra.ph/file/0fefe4645849976ed10e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39078",
        "pageSeq": 39078
    },
    {
        "IDcode": 39079,
        "title": "Lady Melamori - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/5abe477d9d23ad089acf9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39079",
        "pageSeq": 39079
    },
    {
        "IDcode": 39080,
        "title": "Lady Melamori - Triss Merigold (The Witcher)",
        "cover": "https://telegra.ph/file/9fc169ad4f332b52c3b7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39080",
        "pageSeq": 39080
    },
    {
        "IDcode": 39081,
        "title": "Ino - Lady Tsunade (Naruto)",
        "cover": "https://telegra.ph/file/0f877af0da69cd85f949a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39081",
        "pageSeq": 39081
    },
    {
        "IDcode": 39082,
        "title": "Hane Ame - Mash Dangerous Beast (Fate Grad Order)",
        "cover": "https://telegra.ph/file/59508678155484fcb3ccf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39082",
        "pageSeq": 39082
    },
    {
        "IDcode": 39083,
        "title": "KuukoW - Cyber Cat Neon",
        "cover": "https://telegra.ph/file/2c60d2cd8152b745f1218.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39083",
        "pageSeq": 39083
    },
    {
        "IDcode": 39084,
        "title": "Lady Melamori - 2B Bride (Nier Automata)",
        "cover": "https://telegra.ph/file/5212e30039690792bbafa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39084",
        "pageSeq": 39084
    },
    {
        "IDcode": 39085,
        "title": "Lady Melamori - Tifa (Final Fantasy)",
        "cover": "https://telegra.ph/file/d6fa15293f0d5ed69b7c2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39085",
        "pageSeq": 39085
    },
    {
        "IDcode": 39086,
        "title": "Shui Miao Aqua - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/5a30c98d179de343e2425.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39086",
        "pageSeq": 39086
    },
    {
        "IDcode": 39087,
        "title": "Mizhimaoqiu - Succubus Halloween",
        "cover": "https://telegra.ph/file/59d7ab26576205cf547cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39087",
        "pageSeq": 39087
    },
    {
        "IDcode": 39088,
        "title": "MissWarmj - Kasumi (Dead Or Alive)",
        "cover": "https://telegra.ph/file/2795d2e10e49c23897080.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39088",
        "pageSeq": 39088
    },
    {
        "IDcode": 39089,
        "title": "Lady Melamori - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/60b5e3b4f22d493e6ad38.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39089",
        "pageSeq": 39089
    },
    {
        "IDcode": 39090,
        "title": "Lady Melamori - 2B Christmas (Nier Autómata)",
        "cover": "https://telegra.ph/file/fee5945c16848ce6cb6e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39090",
        "pageSeq": 39090
    },
    {
        "IDcode": 39091,
        "title": "Arty Huang - Hinata Akatsuki (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/f0f5ea0bc8e7cf4519dbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39091",
        "pageSeq": 39091
    },
    {
        "IDcode": 39092,
        "title": "Helly Valentine - Ankha Zone (Animal Crossing)",
        "cover": "https://telegra.ph/file/e252fd5d77456105ef12a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39092",
        "pageSeq": 39092
    },
    {
        "IDcode": 39093,
        "title": "Hoshilily - Discipline Schoolgirl (Seitokai)",
        "cover": "https://telegra.ph/file/87c6b415531b3d4d32a4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39093",
        "pageSeq": 39093
    },
    {
        "IDcode": 39094,
        "title": "清水由乃 - Succubus 白发魅魔",
        "cover": "https://telegra.ph/file/a5ee14b912de82a41bb10.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39094",
        "pageSeq": 39094
    },
    {
        "IDcode": 39095,
        "title": "是本末末 Benmomo -  风纪委员Discipline Schoolgirl (Seitokai)",
        "cover": "https://telegra.ph/file/c6518ae28a083d43cb832.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39095",
        "pageSeq": 39095
    },
    {
        "IDcode": 39097,
        "title": "Potato Godzilla - Wolf (Random Cosplay)",
        "cover": "https://telegra.ph/file/c2de961525482ce585fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39097",
        "pageSeq": 39097
    },
    {
        "IDcode": 39098,
        "title": "六味帝皇酱 - Schoolgirl 幼稚园随拍",
        "cover": "https://telegra.ph/file/fe09a76f8df1a7f997ceb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39098",
        "pageSeq": 39098
    },
    {
        "IDcode": 39099,
        "title": "Hane Ame - Original Kimono",
        "cover": "https://telegra.ph/file/c69a575b8e57118d4947f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39099",
        "pageSeq": 39099
    },
    {
        "IDcode": 39100,
        "title": "Carry Key - Toga Himiko (Boku no Hero)",
        "cover": "https://telegra.ph/file/c05454c1a057d3773dae4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39100",
        "pageSeq": 39100
    },
    {
        "IDcode": 39101,
        "title": "蜜蜜子 NO.002 - 健身后",
        "cover": "https://telegra.ph/file/8fab398f2f90a03514f05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39101",
        "pageSeq": 39101
    },
    {
        "IDcode": 39102,
        "title": "六味帝皇酱 - Schoolgirl 樱花女友",
        "cover": "https://telegra.ph/file/fe4c06982129889d95bf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39102",
        "pageSeq": 39102
    },
    {
        "IDcode": 39103,
        "title": "Hidori Rose - Shizuku Kuroe (Sono Busque Doll Wa Koi wo Suru)",
        "cover": "https://telegra.ph/file/e42ea9b54bf40609fbf73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39103",
        "pageSeq": 39103
    },
    {
        "IDcode": 39104,
        "title": "Hane Ame - Yoru Forger (SPY X Family)",
        "cover": "https://telegra.ph/file/50b0221a26d68af408411.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39104",
        "pageSeq": 39104
    },
    {
        "IDcode": 39105,
        "title": "蜜蜜子 - 2B Bride (Nier Autómata)",
        "cover": "https://telegra.ph/file/2fbea6f6eda95d892f233.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39105",
        "pageSeq": 39105
    },
    {
        "IDcode": 39106,
        "title": "손예은 Son Ye-Eun - Triangle (Squid Game)",
        "cover": "https://telegra.ph/file/e451847bde28e451c739f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39106",
        "pageSeq": 39106
    },
    {
        "IDcode": 39107,
        "title": "Byoru - Shuten Douji (Fate Grand Order)",
        "cover": "https://telegra.ph/file/9b9374bd50fe3ae59778c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39107",
        "pageSeq": 39107
    },
    {
        "IDcode": 39108,
        "title": "Hane Ame - Ada Wong (Resident Evil)",
        "cover": "https://telegra.ph/file/62ef592b5aa48cfcb5648.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39108",
        "pageSeq": 39108
    },
    {
        "IDcode": 39109,
        "title": "Arty Huang - Yae Miko (Genshin Impact)",
        "cover": "https://telegra.ph/file/6d724c52ba8fa0d928284.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39109",
        "pageSeq": 39109
    },
    {
        "IDcode": 39110,
        "title": "Nekokoyoshi - Ganyu (Genshi Impact)",
        "cover": "https://telegra.ph/file/2e5f9557574121e1192ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39110",
        "pageSeq": 39110
    },
    {
        "IDcode": 39111,
        "title": "阿包也是兔娘 - Tifa Bunny蒂法 (Final Fantasy)",
        "cover": "https://telegra.ph/file/21fb82bc48eb105750e15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39111",
        "pageSeq": 39111
    },
    {
        "IDcode": 39112,
        "title": "KuukoW - 2B Gemkiki (Nier Autómata)",
        "cover": "https://telegra.ph/file/7978dd26f4164b57b49da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39112",
        "pageSeq": 39112
    },
    {
        "IDcode": 39113,
        "title": "Byoru - Power Xmas (Chainsaw Man)",
        "cover": "https://telegra.ph/file/11d71faf2bcadd919be19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39113",
        "pageSeq": 39113
    },
    {
        "IDcode": 39114,
        "title": "Arty Huang - Jeanne D'Arc (Fate Grand Order)",
        "cover": "https://telegra.ph/file/6b8065591bb52a61ce08f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=39114",
        "pageSeq": 39114
    }
];
