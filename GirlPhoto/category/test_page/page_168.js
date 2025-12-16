// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 38810,
        "title": "Sandu 69 - Sylvie (Teachin Feeling)",
        "cover": "https://telegra.ph/file/edfdf86a1e677375135d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38810",
        "pageSeq": 38810
    },
    {
        "IDcode": 38811,
        "title": "Rocksy Light - Casual (Random Model)",
        "cover": "https://telegra.ph/file/647a3dab8bdd917bb784e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38811",
        "pageSeq": 38811
    },
    {
        "IDcode": 38812,
        "title": "Vinnegal - Seraphine (League of Legends)",
        "cover": "https://telegra.ph/file/c9eb530f8997b469b5ca5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38812",
        "pageSeq": 38812
    },
    {
        "IDcode": 38813,
        "title": "Shimo霜月 - Elizabeth Bunny (Nanatsu No Taisa)",
        "cover": "https://telegra.ph/file/279c78142a08ccedefae2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38813",
        "pageSeq": 38813
    },
    {
        "IDcode": 38814,
        "title": "九曲Jean - 柴郡自拍 Cheshire (Azur Lane)",
        "cover": "https://telegra.ph/file/412333bdd9a046429723d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38814",
        "pageSeq": 38814
    },
    {
        "IDcode": 38815,
        "title": "Kitty Klaw - Hatsune Miku (Vocaloid)",
        "cover": "https://telegra.ph/file/3636a6983179aa88d1d7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38815",
        "pageSeq": 38815
    },
    {
        "IDcode": 38816,
        "title": "Potato Godzilla - Nero Claudius (Fate Extra Last Encore/Fate Grand Order)",
        "cover": "https://telegra.ph/file/febca16b48c79630f4c64.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38816",
        "pageSeq": 38816
    },
    {
        "IDcode": 38817,
        "title": "Shirogane - 2B Black Bride (Nier Autómata)",
        "cover": "https://telegra.ph/file/4be08b084dc9a78dfdcd7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38817",
        "pageSeq": 38817
    },
    {
        "IDcode": 38818,
        "title": "UyUy - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/181010c3d06a5bc267e1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38818",
        "pageSeq": 38818
    },
    {
        "IDcode": 38819,
        "title": "Arty Huang - Kiyohime (Fate Grand Order)",
        "cover": "https://telegra.ph/file/a7a771212691eeffe249c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38819",
        "pageSeq": 38819
    },
    {
        "IDcode": 38820,
        "title": "Arty Huang - Exusiai (Arknights)",
        "cover": "https://telegra.ph/file/aaab4e5baaa8d3b57ac2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38820",
        "pageSeq": 38820
    },
    {
        "IDcode": 38821,
        "title": "Hackee - Historia Reiss (Shingeki No Kiojin)",
        "cover": "https://telegra.ph/file/5272037de4e1f7c4a97d9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38821",
        "pageSeq": 38821
    },
    {
        "IDcode": 38823,
        "title": "Fantasy Factory - Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/a509c5bb4bc0e89799037.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38823",
        "pageSeq": 38823
    },
    {
        "IDcode": 38824,
        "title": "二佐Nisa - Gascogne (Azur Lane)",
        "cover": "https://telegra.ph/file/671032daf706766b4acac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38824",
        "pageSeq": 38824
    },
    {
        "IDcode": 38825,
        "title": "Peach Milky - Ganyu (Genshin Impact)",
        "cover": "https://telegra.ph/file/187de3e1846b93c7c9beb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38825",
        "pageSeq": 38825
    },
    {
        "IDcode": 38826,
        "title": "Hana Bunny - Cyber Kitty (Random Cosplay)",
        "cover": "https://telegra.ph/file/41105f0cc66d3db91b663.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38826",
        "pageSeq": 38826
    },
    {
        "IDcode": 38827,
        "title": "Arty Huang - Bradamante (Fate Grand Order)",
        "cover": "https://telegra.ph/file/54a0172f2fe13f8e03139.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38827",
        "pageSeq": 38827
    },
    {
        "IDcode": 38828,
        "title": "Rocksy Light - Bamby (Random Cosplay)",
        "cover": "https://telegra.ph/file/0d7715464c320d945210b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38828",
        "pageSeq": 38828
    },
    {
        "IDcode": 38829,
        "title": "Arty Huang - Frankestein Berserker (Fate Grand Order)",
        "cover": "https://telegra.ph/file/6baeb4f0255bbf5abf90e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38829",
        "pageSeq": 38829
    },
    {
        "IDcode": 38830,
        "title": "Arty Huang - Anastasia (Fate Grand Order)",
        "cover": "https://telegra.ph/file/efd3e2392af1319f5848a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38830",
        "pageSeq": 38830
    },
    {
        "IDcode": 38831,
        "title": "Yoshinobi - Akemi (Random Cosplay)",
        "cover": "https://telegra.ph/file/658fe828c7a83e3b9c937.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38831",
        "pageSeq": 38831
    },
    {
        "IDcode": 38832,
        "title": "Yoshinobi - Nanao (Random Cosplay)",
        "cover": "https://telegra.ph/file/c2d2d3d023093f38b3385.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38832",
        "pageSeq": 38832
    },
    {
        "IDcode": 38833,
        "title": "Helly Valentine - Me!Me!Me!",
        "cover": "https://telegra.ph/file/b2b53e8dda253cdce369a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38833",
        "pageSeq": 38833
    },
    {
        "IDcode": 38834,
        "title": "Azami - Sucrose (Genshin Impact)",
        "cover": "https://telegra.ph/file/e03ad4b36ae895104384e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38834",
        "pageSeq": 38834
    },
    {
        "IDcode": 38835,
        "title": "UyUy - Mori Calliope (Hololive)",
        "cover": "https://telegra.ph/file/0e2160e7c7f677805726f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38835",
        "pageSeq": 38835
    },
    {
        "IDcode": 38836,
        "title": "喵糖映画 - VOL.112 蕾姆睡衣 Rem (Re: Zero)",
        "cover": "https://telegra.ph/file/829eec4338ebb378adc58.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38836",
        "pageSeq": 38836
    },
    {
        "IDcode": 38837,
        "title": "Arty Huang - Ereshkigal (Fate Grand Order)",
        "cover": "https://telegra.ph/file/1af688044def2b784f56d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38837",
        "pageSeq": 38837
    },
    {
        "IDcode": 38838,
        "title": "Arty Huang - Mash racing suit (Fate Grand Order)",
        "cover": "https://telegra.ph/file/700270f254b94ed707d40.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38838",
        "pageSeq": 38838
    },
    {
        "IDcode": 38839,
        "title": "Helly Valentine - Kasumi Schoolgirl (Dead or Alive)",
        "cover": "https://telegra.ph/file/698b9af3c17055558af25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38839",
        "pageSeq": 38839
    },
    {
        "IDcode": 38840,
        "title": "Woo - Mario (Mario Bros)",
        "cover": "https://telegra.ph/file/dca6e4db64ed535dc7c49.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38840",
        "pageSeq": 38840
    },
    {
        "IDcode": 38841,
        "title": "UyUy - Kiryu Coco (Hololive)",
        "cover": "https://telegra.ph/file/f7a0d8ff6933d452da192.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38841",
        "pageSeq": 38841
    },
    {
        "IDcode": 38842,
        "title": "Sunny Vier - No. 18 (Dragon Ball Z)",
        "cover": "https://telegra.ph/file/3ac1569a189c298d839fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38842",
        "pageSeq": 38842
    },
    {
        "IDcode": 38843,
        "title": "Eliza MiaoMioa - Artoria (Fate Grand Order)",
        "cover": "https://telegra.ph/file/91795311c7f4782dac2c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38843",
        "pageSeq": 38843
    },
    {
        "IDcode": 38844,
        "title": "Hidori Rose - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/b03ee2139756b7c05e10c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38844",
        "pageSeq": 38844
    },
    {
        "IDcode": 38845,
        "title": "Arty Huang - Enterprise (Azur Lane)",
        "cover": "https://telegra.ph/file/c06d14a14edcdae368577.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38845",
        "pageSeq": 38845
    },
    {
        "IDcode": 38846,
        "title": "Saya The Fox - Lola Bunny (Looney Toons)",
        "cover": "https://telegra.ph/file/6b635093eee1fbda28a5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38846",
        "pageSeq": 38846
    },
    {
        "IDcode": 38847,
        "title": "Potato Godzilla - Catgirl Lingerie (Random Cosplay)",
        "cover": "https://telegra.ph/file/c485d829f52ca686b8ac5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38847",
        "pageSeq": 38847
    },
    {
        "IDcode": 38848,
        "title": "Potato Godzilla - Izumi Sagiri (Eromanga Sensei)",
        "cover": "https://telegra.ph/file/e296d3c099812f7a5177a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38848",
        "pageSeq": 38848
    },
    {
        "IDcode": 38849,
        "title": "Sunny Vier - Jeanne D'Arc Alter (Fate Grand Order)",
        "cover": "https://telegra.ph/file/b103244dba2b02e790f46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38849",
        "pageSeq": 38849
    },
    {
        "IDcode": 38850,
        "title": "Potato Godzilla - Swimsuit (Model)",
        "cover": "https://telegra.ph/file/904c503c6c183087d06f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38850",
        "pageSeq": 38850
    },
    {
        "IDcode": 38851,
        "title": "Moondays - Zero Two (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/39315a0c723c80a007bc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38851",
        "pageSeq": 38851
    },
    {
        "IDcode": 38852,
        "title": "Alina Becker - Zero Two Swimsuit (Darling In The Franxx)",
        "cover": "https://telegra.ph/file/0d218a1dde344c67c6788.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38852",
        "pageSeq": 38852
    },
    {
        "IDcode": 38853,
        "title": "Alina Becker - 2B (Nier Autómata)",
        "cover": "https://telegra.ph/file/aa4c857799a475348a88c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38853",
        "pageSeq": 38853
    },
    {
        "IDcode": 38854,
        "title": "Alina Becker - Raphtalia (Tate no Yuusha)",
        "cover": "https://telegra.ph/file/d76492398dfaec8b10cdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38854",
        "pageSeq": 38854
    },
    {
        "IDcode": 38855,
        "title": "Sunny Vier - Hinata Akatsuki Swimsuit (Naruto Shippuden)",
        "cover": "https://telegra.ph/file/33eef7efd37762fa11419.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38855",
        "pageSeq": 38855
    },
    {
        "IDcode": 38856,
        "title": "Shui Miao Aqua - Nami (One Piece)",
        "cover": "https://telegra.ph/file/921e33a35b3c6ac547786.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38856",
        "pageSeq": 38856
    },
    {
        "IDcode": 38857,
        "title": "Sakurai Ning Ning - Cowgirl (Random Cosplay)",
        "cover": "https://telegra.ph/file/870baa95965f94d3dfca2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38857",
        "pageSeq": 38857
    },
    {
        "IDcode": 38858,
        "title": "Potato Godzilla - Casual (Random Model)",
        "cover": "https://telegra.ph/file/c0687a0e759491783a766.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38858",
        "pageSeq": 38858
    },
    {
        "IDcode": 38859,
        "title": "Alina Becker - Hanekawa (Monogatari Series)",
        "cover": "https://telegra.ph/file/4f5fbc0cae099d27f634c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38859",
        "pageSeq": 38859
    },
    {
        "IDcode": 38860,
        "title": "Alina Becker - Moka (Rosario Vampire)",
        "cover": "https://telegra.ph/file/0483857f7cb71fbf88e39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38860",
        "pageSeq": 38860
    },
    {
        "IDcode": 38861,
        "title": "Alina Becker - Matsumoto Rangiku (Bleach)",
        "cover": "https://telegra.ph/file/418da8e458885cd235c6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38861",
        "pageSeq": 38861
    },
    {
        "IDcode": 38862,
        "title": "Arty huang - Arknights Chen qipao (One Piece)",
        "cover": "https://telegra.ph/file/f2ebe1463a74ad2f0c02d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38862",
        "pageSeq": 38862
    },
    {
        "IDcode": 38863,
        "title": "齋齋いつき itsukichan - Uruha Rushia (Hololive/Vtuber)",
        "cover": "https://telegra.ph/file/349da1f76a82e475b50c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38863",
        "pageSeq": 38863
    },
    {
        "IDcode": 38864,
        "title": "NinJa - Panty & Stocking (Panty & Stocking with Garterbelt)",
        "cover": "https://telegra.ph/file/41435b544dd24797dfecc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38864",
        "pageSeq": 38864
    },
    {
        "IDcode": 38865,
        "title": "UyUy - Velma (Scooby Doo)",
        "cover": "https://telegra.ph/file/05bfbac78265eca01ac55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38865",
        "pageSeq": 38865
    },
    {
        "IDcode": 38866,
        "title": "Alina Becker - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/0d37f93fcd001678d3bfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38866",
        "pageSeq": 38866
    },
    {
        "IDcode": 38867,
        "title": "Akiriia - Emilia (Re: Zero)",
        "cover": "https://telegra.ph/file/b3ef98113691cbb7301e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38867",
        "pageSeq": 38867
    },
    {
        "IDcode": 38868,
        "title": "Lady Melamori - Misa Amane (Death Note)",
        "cover": "https://telegra.ph/file/d7478ebc16412c7578f28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38868",
        "pageSeq": 38868
    },
    {
        "IDcode": 38869,
        "title": "Hidori Rose - Takane Shijou (Idol Master)",
        "cover": "https://telegra.ph/file/f0ff1c89961ff6a5dae71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38869",
        "pageSeq": 38869
    },
    {
        "IDcode": 38870,
        "title": "Kurea Takanashi - Mash (Fate Grand Order)",
        "cover": "https://telegra.ph/file/31e9fc4c25af4b30e9033.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38870",
        "pageSeq": 38870
    },
    {
        "IDcode": 38871,
        "title": "Itsukichan - Sayu (Genshin Impact)",
        "cover": "https://telegra.ph/file/9b1a7b3c86b1976f5a2e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38871",
        "pageSeq": 38871
    },
    {
        "IDcode": 38872,
        "title": "Mikomi Hokina, Virtual Geisha & Yuzupyon - Mikasa, Historia & genderbend Eren (Shingeki no kyojin)",
        "cover": "https://telegra.ph/file/2ab54292249e63a9f035d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38872",
        "pageSeq": 38872
    },
    {
        "IDcode": 38873,
        "title": "Tomoyo酱 - 黛朵礼服 Dido (Azur Lane)",
        "cover": "https://telegra.ph/file/b9206299b4768d704ac7e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38873",
        "pageSeq": 38873
    },
    {
        "IDcode": 38874,
        "title": "Coralea Jade - Spiderwoman Mary Jane Watson (Spider-Man)",
        "cover": "https://telegra.ph/file/ff5a07fe8e67b79e44533.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38874",
        "pageSeq": 38874
    },
    {
        "IDcode": 38875,
        "title": "岡田ゆい - Ichinose Asuna (Blue Archive)",
        "cover": "https://telegra.ph/file/8bd3c6d7fb21836ce970d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38875",
        "pageSeq": 38875
    },
    {
        "IDcode": 38876,
        "title": "Denialism - Ann Takamaki (Persona 5 Royal)",
        "cover": "https://telegra.ph/file/b189610d3229b545c2ffa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38876",
        "pageSeq": 38876
    },
    {
        "IDcode": 38877,
        "title": "Lada Lyumos - April O'neil (the Teenage Mutant Ninja Turtles)",
        "cover": "https://telegra.ph/file/52d86a6ad11d4db6f9a9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38877",
        "pageSeq": 38877
    },
    {
        "IDcode": 38878,
        "title": "Stroke Nademono product Guattari language'm Do Deko - Sengoku (Bakemonogatari)",
        "cover": "https://telegra.ph/file/f4ca26697870ffa2a16f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38878",
        "pageSeq": 38878
    },
    {
        "IDcode": 38879,
        "title": "Pia Loof - Vault Boy (Fallout)",
        "cover": "https://telegra.ph/file/b853b45f33bc4f38558e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38879",
        "pageSeq": 38879
    },
    {
        "IDcode": 38880,
        "title": "MissWarmj - Artoria (Fate Grand Order)",
        "cover": "https://telegra.ph/file/6f92db8d5b08760acffe6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38880",
        "pageSeq": 38880
    },
    {
        "IDcode": 38881,
        "title": "Coralea Hade Collab - Mercy (Overwatch)",
        "cover": "https://telegra.ph/file/4acf21e26e8773affd049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38881",
        "pageSeq": 38881
    },
    {
        "IDcode": 38882,
        "title": "Larkin Love - Velma (Scooby Doo)",
        "cover": "https://telegra.ph/file/39274e6efa71d51602bdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38882",
        "pageSeq": 38882
    },
    {
        "IDcode": 38883,
        "title": "Chame Leahn - Gwen (Total Deame Island)",
        "cover": "https://telegra.ph/file/9e5155161a586b7358280.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38883",
        "pageSeq": 38883
    },
    {
        "IDcode": 38884,
        "title": "Denialism - Camie (Boku no Hero)",
        "cover": "https://telegra.ph/file/2f8953f5f865d6db6a3e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38884",
        "pageSeq": 38884
    },
    {
        "IDcode": 38885,
        "title": "Alina Becker - Ahri (KDA/League Of Legends)",
        "cover": "https://telegra.ph/file/b424120df1325e59006dc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38885",
        "pageSeq": 38885
    },
    {
        "IDcode": 38886,
        "title": "Usatame - Sakura Futaba (Shin Megami Tensei V)",
        "cover": "https://telegra.ph/file/831c82f67464d1c2570f9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38886",
        "pageSeq": 38886
    },
    {
        "IDcode": 38887,
        "title": "Peach Milky - D.VA (Overwatch)",
        "cover": "https://telegra.ph/file/8611d4583397454d0132e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38887",
        "pageSeq": 38887
    },
    {
        "IDcode": 38888,
        "title": "Helly Valentine - Chocola (Nekopara)",
        "cover": "https://telegra.ph/file/dcb868e29c98bb204fbbd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38888",
        "pageSeq": 38888
    },
    {
        "IDcode": 38889,
        "title": "Helly Valentine - Elizabeth (Bioshock Infinite)",
        "cover": "https://telegra.ph/file/6451be51243b1d6f49209.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38889",
        "pageSeq": 38889
    },
    {
        "IDcode": 38890,
        "title": "Purple Bitch - Blac Cat (Marvel Comics)",
        "cover": "https://telegra.ph/file/422707a98f12e34c52cf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38890",
        "pageSeq": 38890
    },
    {
        "IDcode": 38891,
        "title": "Ana Chu - Shenhe (Genshin Impact)",
        "cover": "https://telegra.ph/file/585dbfa9a7dce5857cef6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38891",
        "pageSeq": 38891
    },
    {
        "IDcode": 38892,
        "title": "Hane Ame - Houshou Marine (Hololive)",
        "cover": "https://telegra.ph/file/a37ea3bb3b696482985c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38892",
        "pageSeq": 38892
    },
    {
        "IDcode": 38893,
        "title": "Azami - Yoshida Saki (Genshin Emergence)",
        "cover": "https://telegra.ph/file/395f4552160db9c45fa31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38893",
        "pageSeq": 38893
    },
    {
        "IDcode": 38894,
        "title": "Veronika Black - Lara Croft (Tomb Raider)",
        "cover": "https://telegra.ph/file/7683c5236b6fd540b259b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38894",
        "pageSeq": 38894
    },
    {
        "IDcode": 38895,
        "title": "Little Shiie - Mona (Genshin Impact)",
        "cover": "https://telegra.ph/file/3f268a749cf6aaf648e79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38895",
        "pageSeq": 38895
    },
    {
        "IDcode": 38896,
        "title": "Helly Valentine - Secretary (Model)",
        "cover": "https://telegra.ph/file/9bd6a7f029a1fdc1d4471.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38896",
        "pageSeq": 38896
    },
    {
        "IDcode": 38897,
        "title": "KuukoW - Rosalia (Honkai Gakuen)",
        "cover": "https://telegra.ph/file/7e461f1b66498a64be508.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38897",
        "pageSeq": 38897
    },
    {
        "IDcode": 38898,
        "title": "Byoru - Kitagawa Marin (Sono Bisque Dollw)",
        "cover": "https://telegra.ph/file/c4bdc55201e7c161f83b0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38898",
        "pageSeq": 38898
    },
    {
        "IDcode": 38899,
        "title": "Potato Godzilla - Sakura Futaba (Persona 5/Shin Megami Tensei V)",
        "cover": "https://telegra.ph/file/d487cb5acab57f24c6a93.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38899",
        "pageSeq": 38899
    },
    {
        "IDcode": 38900,
        "title": "Rocksy Light - Asteri (Random Cosplay)",
        "cover": "https://telegra.ph/file/aa13c34c7a446ce04a5b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38900",
        "pageSeq": 38900
    },
    {
        "IDcode": 38901,
        "title": "Okita Rinka - Nurse (Random Cosplay)",
        "cover": "https://telegra.ph/file/2951f7b19435d1f453898.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38901",
        "pageSeq": 38901
    },
    {
        "IDcode": 38902,
        "title": "起司块will-埃及猫Ankha Zone (Animal Crosing)",
        "cover": "https://telegra.ph/file/3d5a5ca235162e243b629.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38902",
        "pageSeq": 38902
    },
    {
        "IDcode": 38903,
        "title": "Ping Ping - Kama (Fate Grand Order)",
        "cover": "https://telegra.ph/file/92da547aba7f82c9ad5d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38903",
        "pageSeq": 38903
    },
    {
        "IDcode": 38904,
        "title": "G44不会受伤 - Shizuku & Marin更衣人偶坠入爱河 (Sono Bisque Dollw)",
        "cover": "https://telegra.ph/file/7c429c0c93bd8cb060b06.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38904",
        "pageSeq": 38904
    },
    {
        "IDcode": 38905,
        "title": "Akemi - Princess Zelda (The Legend of Zelda/",
        "cover": "https://telegra.ph/file/2bc46b52eb9e7a733ca7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38905",
        "pageSeq": 38905
    },
    {
        "IDcode": 38906,
        "title": "Ain Nguyen - Haya Nagatoro san (Ijiranaide  Aagatoro-san)",
        "cover": "https://telegra.ph/file/9f8fe06c7bd0bdad35123.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38906",
        "pageSeq": 38906
    },
    {
        "IDcode": 38907,
        "title": "Sakurai Ning Ning - Miko (Random Cosplay)",
        "cover": "https://telegra.ph/file/e4e6f3370ccb6325b2887.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38907",
        "pageSeq": 38907
    },
    {
        "IDcode": 38908,
        "title": "PingPing - Asuka (Neon Genesis Evangelion)",
        "cover": "https://telegra.ph/file/29e4fd42bb795369b61b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38908",
        "pageSeq": 38908
    },
    {
        "IDcode": 38909,
        "title": "Vandych - Saber (Fate Grand Order)",
        "cover": "https://telegra.ph/file/cc85694fa09c7b9e26c4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38909",
        "pageSeq": 38909
    },
    {
        "IDcode": 38910,
        "title": "三刀刀miido - Kama (Fate Grand Order)",
        "cover": "https://telegra.ph/file/ee285161ad420e86e9ef1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=38910",
        "pageSeq": 38910
    }
];
