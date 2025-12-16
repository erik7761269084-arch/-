// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 27681,
        "title": "Arty Huang 亚缇 - JeanD_Arc",
        "cover": "https://telegra.ph/file/359d58825c6a809eae4e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27681",
        "pageSeq": 27681
    },
    {
        "IDcode": 27682,
        "title": "Arty亚缇 22.03Tier.2",
        "cover": "https://telegra.ph/file/a0eaa4e5c1fd3e988d31d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27682",
        "pageSeq": 27682
    },
    {
        "IDcode": 27683,
        "title": "Arty亚缇 22.03Tier.1",
        "cover": "https://telegra.ph/file/fe8cc59e81e1e9d8b98d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27683",
        "pageSeq": 27683
    },
    {
        "IDcode": 27684,
        "title": "Arty亜提 - Artoria [33P 78MB]",
        "cover": "https://telegra.ph/file/c7b95a60ae8a6fb511231.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27684",
        "pageSeq": 27684
    },
    {
        "IDcode": 27685,
        "title": "【Arty亜提】 Yor [54P 121MB]",
        "cover": "https://telegra.ph/file/c23a059629893625582ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27685",
        "pageSeq": 27685
    },
    {
        "IDcode": 27686,
        "title": "AT鲨 - 麻衣学姐",
        "cover": "https://telegra.ph/file/20664a93fa2a76373b46f.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27686",
        "pageSeq": 27686
    },
    {
        "IDcode": 27687,
        "title": "ATFmaker-包臀裙女教师[30P]",
        "cover": "https://telegra.ph/file/a618ff96791d99e7d304f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27687",
        "pageSeq": 27687
    },
    {
        "IDcode": 27688,
        "title": "ATFmaker-猫耳娘[42P]",
        "cover": "https://telegra.ph/file/5a2072f230422aba56b78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27688",
        "pageSeq": 27688
    },
    {
        "IDcode": 27689,
        "title": "ATFmaker-裸体星光、迷你裙 半身T[63P]",
        "cover": "https://legra.ph/file/4722a7696311e8ce78f5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27689",
        "pageSeq": 27689
    },
    {
        "IDcode": 27690,
        "title": "ATFmaker-White Nun ホワイトシスター(白修女)[63P]",
        "cover": "https://legra.ph/file/654cd7f665794557f7cfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27690",
        "pageSeq": 27690
    },
    {
        "IDcode": 27691,
        "title": "ATFMAKER-桜満開の季節、スケスケ青いセーラー服[78P]",
        "cover": "https://telegra.ph/file/568b7fd7c6a4ec6c6b029.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27691",
        "pageSeq": 27691
    },
    {
        "IDcode": 27692,
        "title": "ATFMAKER-優等生野外露出、怠いお昼のパジャマ少女、革縛り絶賛ボディ[88P]",
        "cover": "https://telegra.ph/file/7b3cada684d5bf4f00c44.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27692",
        "pageSeq": 27692
    },
    {
        "IDcode": 27693,
        "title": "ATFMAKER-昼と夜♡[13P]",
        "cover": "https://telegra.ph/file/035b36b8e4028fd119e7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27693",
        "pageSeq": 27693
    },
    {
        "IDcode": 27694,
        "title": "ATFMAKER-Nudistただの体、初全裸Fullsize[25P]",
        "cover": "https://telegra.ph/file/1a6e84ea09711a148703a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27694",
        "pageSeq": 27694
    },
    {
        "IDcode": 27695,
        "title": "ATFMAKER-Red Belt Bondage赤い糸紧縛り[40P]",
        "cover": "https://telegra.ph/file/cb02de17d4ccecff61d66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27695",
        "pageSeq": 27695
    },
    {
        "IDcode": 27696,
        "title": "ATFMAKER-Mesh Onesies 网袜[26P]",
        "cover": "https://telegra.ph/file/7fc08bd197ecbdf2ef464.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27696",
        "pageSeq": 27696
    },
    {
        "IDcode": 27697,
        "title": "ATFMAKER-Black Corset[45P]",
        "cover": "https://telegra.ph/file/23b41ea3216de19c1a95b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27697",
        "pageSeq": 27697
    },
    {
        "IDcode": 27698,
        "title": "ATFMAKER-Christmas bikini FullSize 圣诞 比基尼[32P]",
        "cover": "https://telegra.ph/file/b38e283140aac94361161.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27698",
        "pageSeq": 27698
    },
    {
        "IDcode": 27699,
        "title": "ATFMAKER-GYM SUIT Bloomers[43P]",
        "cover": "https://telegra.ph/file/796757f3a6a705e71bc56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27699",
        "pageSeq": 27699
    },
    {
        "IDcode": 27700,
        "title": "ATFMAKER-Dark Tattoo Girl 家出不良娘[60P]",
        "cover": "https://telegra.ph/file/1cb9088cc38a07ac85077.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27700",
        "pageSeq": 27700
    },
    {
        "IDcode": 27701,
        "title": "ATFMAKER-Punk Half skirtパンク半裸スカート[35P]",
        "cover": "https://telegra.ph/file/c0c13477da496be8bbfff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27701",
        "pageSeq": 27701
    },
    {
        "IDcode": 27702,
        "title": "ATFMAKER-Swimwear 泳装[54P]",
        "cover": "https://telegra.ph/file/4bd6535a0886abed7ff60.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27702",
        "pageSeq": 27702
    },
    {
        "IDcode": 27703,
        "title": "ATFMAKER-童顔巨乳[21P]",
        "cover": "https://telegra.ph/file/4abf4fae4f0a4135f3600.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27703",
        "pageSeq": 27703
    },
    {
        "IDcode": 27704,
        "title": "ATFMAKER-雨衣[21P]",
        "cover": "https://telegra.ph/file/d294c6d2f0c66d40dc93d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27704",
        "pageSeq": 27704
    },
    {
        "IDcode": 27705,
        "title": "ATFMAKER-Tail Anal Plug And Vaginal Dilator[28P]",
        "cover": "https://telegra.ph/file/b955f8d3b4ea4f9b395c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27705",
        "pageSeq": 27705
    },
    {
        "IDcode": 27706,
        "title": "ATFMAKER-Cute rabbit LightVer 兔女郎[32P]",
        "cover": "https://telegra.ph/file/95cee922e3bbcce81a539.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27706",
        "pageSeq": 27706
    },
    {
        "IDcode": 27707,
        "title": "ATFMAKER-Leather bikini FullSize 比基尼[25P]",
        "cover": "https://telegra.ph/file/753b012d629e01acc93d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27707",
        "pageSeq": 27707
    },
    {
        "IDcode": 27708,
        "title": "DJAWA Photo - Aya - Tamed Wolfgirl",
        "cover": "https://telegra.ph/file/a49f8f71cb9efa8961c12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27708",
        "pageSeq": 27708
    },
    {
        "IDcode": 27709,
        "title": "Pure Media Vol.0107 Ayul (아율)",
        "cover": "https://telegra.ph/file/b5a7e5f35b452983ceef3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27709",
        "pageSeq": 27709
    },
    {
        "IDcode": 27710,
        "title": "Azami - Ayaka",
        "cover": "https://telegra.ph/file/c1c25a164f7a8bb8c35c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27710",
        "pageSeq": 27710
    },
    {
        "IDcode": 27711,
        "title": "Azami - NO.70 Leviathan [19P-107MB]",
        "cover": "https://telegra.ph/file/9182d9a3e98e1641d1a67.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27711",
        "pageSeq": 27711
    },
    {
        "IDcode": 27712,
        "title": "Azami - Bremerton (Azur Lane)",
        "cover": "https://telegra.ph/file/8d6604b64ac8014c3ab04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27712",
        "pageSeq": 27712
    },
    {
        "IDcode": 27713,
        "title": "Azami - Noelle (Genshin Impact)",
        "cover": "https://telegra.ph/file/f591e31b4ba560a119a9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27713",
        "pageSeq": 27713
    },
    {
        "IDcode": 27714,
        "title": "Azami - Taihou Qipao",
        "cover": "https://telegra.ph/file/689a1e91ed085ecd7c0f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27714",
        "pageSeq": 27714
    },
    {
        "IDcode": 27715,
        "title": "Azami - Zero Two Bunny",
        "cover": "https://telegra.ph/file/80f4a910fd85cc61dee31.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27715",
        "pageSeq": 27715
    },
    {
        "IDcode": 27716,
        "title": "Azami - Nero Swimsuit",
        "cover": "https://telegra.ph/file/626375a94619d1131fd76.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27716",
        "pageSeq": 27716
    },
    {
        "IDcode": 27717,
        "title": "Azami - Himiko Toga Bikini",
        "cover": "https://telegra.ph/file/55597a77c3688ae3bf8fd.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27717",
        "pageSeq": 27717
    },
    {
        "IDcode": 27718,
        "title": "Azami - Zero Two Xmas",
        "cover": "https://telegra.ph/file/6b28006c28573205eaff5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27718",
        "pageSeq": 27718
    },
    {
        "IDcode": 27719,
        "title": "Azami - Super Sonico",
        "cover": "https://telegra.ph/file/c1faae5b24b302e7c7b52.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27719",
        "pageSeq": 27719
    },
    {
        "IDcode": 27720,
        "title": "Azami - Bremerton Qipao (Azur Lane) [15P-123mb]",
        "cover": "https://telegra.ph/file/afcd932d7755462a35c93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27720",
        "pageSeq": 27720
    },
    {
        "IDcode": 27721,
        "title": "Azami - Ulrich von Hutten [20P-48MB]",
        "cover": "https://telegra.ph/file/5064b8caa6903bf8a7cd2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27721",
        "pageSeq": 27721
    },
    {
        "IDcode": 27722,
        "title": "Azami - Ganyu",
        "cover": "https://telegra.ph/file/907dfa1eceb392d446200.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27722",
        "pageSeq": 27722
    },
    {
        "IDcode": 27723,
        "title": "Azami - 2B Gantz",
        "cover": "https://telegra.ph/file/f338ea295df7cc402f164.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27723",
        "pageSeq": 27723
    },
    {
        "IDcode": 27724,
        "title": "Azami Pack Albedo",
        "cover": "https://telegra.ph/file/6b5e7dda29f43dd809948.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27724",
        "pageSeq": 27724
    },
    {
        "IDcode": 27725,
        "title": "Azami - Shining (Arknights)",
        "cover": "https://telegra.ph/file/adc348dc2591dd171403b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27725",
        "pageSeq": 27725
    },
    {
        "IDcode": 27726,
        "title": "Azami - Veronica [22P-99MB]",
        "cover": "https://telegra.ph/file/42e7eb4aded05c28475e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27726",
        "pageSeq": 27726
    },
    {
        "IDcode": 27727,
        "title": "Azami - Yor [26P-232MB]",
        "cover": "https://telegra.ph/file/a986a392d58f116c88db9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27727",
        "pageSeq": 27727
    },
    {
        "IDcode": 27728,
        "title": "Azami - Yelan",
        "cover": "https://telegra.ph/file/8963fde75d11c5146b76d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27728",
        "pageSeq": 27728
    },
    {
        "IDcode": 27729,
        "title": "Azami Esdeath [53P-348MB]",
        "cover": "https://telegra.ph/file/1f8ccea51acb64982a10a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27729",
        "pageSeq": 27729
    },
    {
        "IDcode": 27730,
        "title": "[Cos]Azami - 白色丝带[32P]",
        "cover": "https://telegra.ph/file/ddc792d79eb45df3078de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27730",
        "pageSeq": 27730
    },
    {
        "IDcode": 27731,
        "title": "Azami-白色丝带 [32P]",
        "cover": "https://telegra.ph/file/54dd888b3979002d654b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27731",
        "pageSeq": 27731
    },
    {
        "IDcode": 27732,
        "title": "Azami-布莱默顿 [23P]",
        "cover": "https://telegra.ph/file/463b3b397431a88dd2980.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27732",
        "pageSeq": 27732
    },
    {
        "IDcode": 27733,
        "title": "Azami-蒂法 [20P]",
        "cover": "https://telegra.ph/file/9625f2987cacf7fb6be28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27733",
        "pageSeq": 27733
    },
    {
        "IDcode": 27734,
        "title": "Azure_Channn - Saki Yoshida (henshin) [33P-255MB]",
        "cover": "https://telegra.ph/file/3a4b0b72356daa2fa02a7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27734",
        "pageSeq": 27734
    },
    {
        "IDcode": 27735,
        "title": "Bambi (밤비) – [CreamSoda] Cosplay Serket [126P-1.88GB]",
        "cover": "https://telegra.ph/file/5c24b68cce480992bc079.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27735",
        "pageSeq": 27735
    },
    {
        "IDcode": 27736,
        "title": "Bambi - Ángel de Rosa",
        "cover": "https://telegra.ph/file/b37e60a58921750895847.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27736",
        "pageSeq": 27736
    },
    {
        "IDcode": 27737,
        "title": "Bambi - Fancy Me",
        "cover": "https://telegra.ph/file/fc38296ecc13c950e6dc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27737",
        "pageSeq": 27737
    },
    {
        "IDcode": 27738,
        "title": "DJAWA Photo - Bambi (밤비) - Moral Guardian of School",
        "cover": "https://telegra.ph/file/6e5a4c86b7b29ce5ddbd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27738",
        "pageSeq": 27738
    },
    {
        "IDcode": 27739,
        "title": "DJAWA Photo - Bambi (밤비) – Riamu’s Celebrating the Year of the Cow #2",
        "cover": "https://telegra.ph/file/21ed7e76146b5f15caaaa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27739",
        "pageSeq": 27739
    },
    {
        "IDcode": 27740,
        "title": "DJAWA Photo - Bambi (밤비) - USS Bremerton (Azur Lane) Scorching-Hot Training",
        "cover": "https://telegra.ph/file/c5377908a43e1f133b7bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27740",
        "pageSeq": 27740
    },
    {
        "IDcode": 27741,
        "title": "DJAWA Photo - Bambi (밤비) - Azur Lane：USS Saint Louis (Azur Lane)",
        "cover": "https://telegra.ph/file/0e9034e83666a633377ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27741",
        "pageSeq": 27741
    },
    {
        "IDcode": 27742,
        "title": "DJAWA Photo - Bambi (밤비) - Queen of Passion",
        "cover": "https://telegra.ph/file/fa7439c8eb662d8e87352.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27742",
        "pageSeq": 27742
    },
    {
        "IDcode": 27743,
        "title": "DJAWA Photo - Bambi (밤비) - Sheer Pink",
        "cover": "https://telegra.ph/file/4036a3ce3146a959ad34f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27743",
        "pageSeq": 27743
    },
    {
        "IDcode": 27744,
        "title": "DJAWA Photo - Bambi (밤비) - La Rose NoirE 2B",
        "cover": "https://telegra.ph/file/ac69b3161043d18239618.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27744",
        "pageSeq": 27744
    },
    {
        "IDcode": 27745,
        "title": "DJAWA Photo - Bambi (밤비) - La Rose NoirE 2B-2",
        "cover": "https://telegra.ph/file/a61a4a801f7acfa29485d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27745",
        "pageSeq": 27745
    },
    {
        "IDcode": 27746,
        "title": "Bambi밤비 - [DJAWA] Asuna's Undercover Mission [128P-351MB]",
        "cover": "https://telegra.ph/file/5985969207c4c7e267e7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27746",
        "pageSeq": 27746
    },
    {
        "IDcode": 27747,
        "title": "DJAWA Photo - Bambi (밤비) - Azur Lane HMS Formidable",
        "cover": "https://telegra.ph/file/7753ae3f019fabe37c461.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27747",
        "pageSeq": 27747
    },
    {
        "IDcode": 27748,
        "title": "DJAWA Photo - Bambi (밤비) - Destiny Child - Rita (Paradise Exiled ver.)",
        "cover": "https://telegra.ph/file/d359c5e42142831995cba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27748",
        "pageSeq": 27748
    },
    {
        "IDcode": 27749,
        "title": "[BLUECAKE] Pretty savage [90P-1.30GB]",
        "cover": "https://telegra.ph/file/260131fba222c4fb069f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27749",
        "pageSeq": 27749
    },
    {
        "IDcode": 27750,
        "title": "DJAWA Photo - Bambi (밤비) - Heart to Heart：Nephthys (Destiny Child)",
        "cover": "https://telegra.ph/file/d705a98967565bc627667.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27750",
        "pageSeq": 27750
    },
    {
        "IDcode": 27751,
        "title": "DJAWA Photo - Bambi (밤비) - Heart to Heart：Nephthys (Destiny Child)-1",
        "cover": "https://telegra.ph/file/a1db00096a58b377fbde9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27751",
        "pageSeq": 27751
    },
    {
        "IDcode": 27752,
        "title": "DJAWA Photo - Bambi (밤비) - Le Chat Porte un Qípáo",
        "cover": "https://telegra.ph/file/25bb43801164c0cdff449.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27752",
        "pageSeq": 27752
    },
    {
        "IDcode": 27753,
        "title": "Bambi (밤비) - Cafe Alba",
        "cover": "https://telegra.ph/file/eb3e32d57061d5f53ec5d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27753",
        "pageSeq": 27753
    },
    {
        "IDcode": 27754,
        "title": "Bambi (밤비) - Naughty Cats Pink & Mint RED",
        "cover": "https://telegra.ph/file/4b6cda823a61c136bec5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27754",
        "pageSeq": 27754
    },
    {
        "IDcode": 27755,
        "title": "Bambi (밤비) - Sticky Boosette",
        "cover": "https://telegra.ph/file/e7a6743fbd0f6d172f982.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27755",
        "pageSeq": 27755
    },
    {
        "IDcode": 27756,
        "title": "[Loozy] Bambi (밤비) - S-Bambi",
        "cover": "https://telegra.ph/file/972604cc6a0c5fabe8bba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27756",
        "pageSeq": 27756
    },
    {
        "IDcode": 27757,
        "title": "[Cos]Bambi - Candy Jelly Love",
        "cover": "https://telegra.ph/file/d2323a5c464e55e5a1ad2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27757",
        "pageSeq": 27757
    },
    {
        "IDcode": 27758,
        "title": "[Cos]Bambi - Moral Guardian of School[120P]",
        "cover": "https://telegra.ph/file/72700b53160523de97be6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27758",
        "pageSeq": 27758
    },
    {
        "IDcode": 27759,
        "title": "Bambi - [BLUECAKE] Play Game",
        "cover": "https://telegra.ph/file/bd6f97affc1756572b4ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27759",
        "pageSeq": 27759
    },
    {
        "IDcode": 27760,
        "title": "[Cos]BamBi - Equinoctial Bari[130P]",
        "cover": "https://telegra.ph/file/76a0fc0a5ad7badf4e990.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27760",
        "pageSeq": 27760
    },
    {
        "IDcode": 27761,
        "title": "[Cos] BamBi - Azur Lane：USS Saint Louis [116P]",
        "cover": "https://telegra.ph/file/d8359f87bab03d42e1759.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27761",
        "pageSeq": 27761
    },
    {
        "IDcode": 27762,
        "title": "Sonson&BamBi밤비 - Maid Mansion W [153P]",
        "cover": "https://telegra.ph/file/ea44f189160bf34d1334b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27762",
        "pageSeq": 27762
    },
    {
        "IDcode": 27763,
        "title": "[BLUECAKE] Albedo [197P-1.32GB]",
        "cover": "https://telegra.ph/file/c1013fbd932d05fc4825f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27763",
        "pageSeq": 27763
    },
    {
        "IDcode": 27764,
        "title": "BamBi밤비 - NO.70 [DJAWA] Succubus 2B [119P-2.04G]",
        "cover": "https://telegra.ph/file/03237ace028c210c1f813.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27764",
        "pageSeq": 27764
    },
    {
        "IDcode": 27765,
        "title": "BamBi밤비 - NO.71 Digital photobook - Night Rain [100P-347MB]",
        "cover": "https://telegra.ph/file/75c9e5cf914c9f8618b36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27765",
        "pageSeq": 27765
    },
    {
        "IDcode": 27766,
        "title": "Bambi밤비 - NO.72 [DJAWA] Loose & Tight ：Violet",
        "cover": "https://telegra.ph/file/cfdf25889331b3d8b8d39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27766",
        "pageSeq": 27766
    },
    {
        "IDcode": 27767,
        "title": "PURE_Vol.115 - Bambi",
        "cover": "https://telegra.ph/file/b943bfe80717c5f246f7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27767",
        "pageSeq": 27767
    },
    {
        "IDcode": 27768,
        "title": "Bambi jesuis 吉他妹妹",
        "cover": "https://telegra.ph/file/59cc4a73dd4a5642d0890.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27768",
        "pageSeq": 27768
    },
    {
        "IDcode": 27769,
        "title": "Bambi밤비-95式旗袍[69P]",
        "cover": "https://telegra.ph/file/dc01544c2dd34861ff68b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27769",
        "pageSeq": 27769
    },
    {
        "IDcode": 27770,
        "title": "Bambi밤비-可爱草莓[84P]",
        "cover": "https://telegra.ph/file/056e59757402729d14616.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27770",
        "pageSeq": 27770
    },
    {
        "IDcode": 27771,
        "title": "Bambi밤비-Alice in Glasses [48P]",
        "cover": "https://telegra.ph/file/271e00985bed16fa84d23.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27771",
        "pageSeq": 27771
    },
    {
        "IDcode": 27772,
        "title": "Bambi밤비 - NO.77 [CreamSoda] Bambi VOL.11 [115P-968MB]",
        "cover": "https://telegra.ph/file/88bc7569de445b38581f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27772",
        "pageSeq": 27772
    },
    {
        "IDcode": 27773,
        "title": "Bambi밤비 - [DJAWA] God Mother Heket (Destiny Child) [51P-1GB]",
        "cover": "https://telegra.ph/file/b5956aef3f469d1982a93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27773",
        "pageSeq": 27773
    },
    {
        "IDcode": 27774,
        "title": "Bambi밤비 - [BLUECAKE] Play Game [81P-138MB]",
        "cover": "https://telegra.ph/file/dcf738410e4e0c4bc8ea7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27774",
        "pageSeq": 27774
    },
    {
        "IDcode": 27775,
        "title": "Bambi밤비 - [BLUECAKE] Dive Into You RED.Ver [89P-143MB]",
        "cover": "https://telegra.ph/file/d3f58e065d12ad6b20328.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27775",
        "pageSeq": 27775
    },
    {
        "IDcode": 27776,
        "title": "Bambi밤비 - [Pure Media] Vol.164 [92P-489MB]",
        "cover": "https://telegra.ph/file/8af026e736fe0306e4fb9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27776",
        "pageSeq": 27776
    },
    {
        "IDcode": 27777,
        "title": "Bambi밤비 - [DJAWA] Christmas Special 2021 [132P-1.81GB]",
        "cover": "https://telegra.ph/file/f6ea679afc2cdd41fbe34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27777",
        "pageSeq": 27777
    },
    {
        "IDcode": 27778,
        "title": "Bambi밤비 - [CreamSoda] Vol.10 [55P-498MB]",
        "cover": "https://telegra.ph/file/6ae3adf9f8a7cd69ccb33.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27778",
        "pageSeq": 27778
    },
    {
        "IDcode": 27779,
        "title": "Bambi밤비 - [BLUECAKE] Kagerou Daze [146P-3.05GB]",
        "cover": "https://telegra.ph/file/9e99dd2db48fb2787852f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27779",
        "pageSeq": 27779
    },
    {
        "IDcode": 27780,
        "title": "Bambi밤비 - [BlueCake] Dive Into You (Princess Connect! Re_Dive) [89P-817MB]",
        "cover": "https://telegra.ph/file/dac032da99a0ed18361ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=27780",
        "pageSeq": 27780
    }
];
