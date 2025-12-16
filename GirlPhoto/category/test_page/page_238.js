// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 45872,
        "title": "二阶堂 初音 - Page 1",
        "cover": "https://telegra.ph/file/7f0be95b3d5fc7ba8e82b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45872",
        "pageSeq": 45872
    },
    {
        "IDcode": 45873,
        "title": "[ワルキューレ (りずな)] 八重桜 (原神) - Page 1",
        "cover": "https://telegra.ph/file/6d2983a6d1dbc07d9f12e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45873",
        "pageSeq": 45873
    },
    {
        "IDcode": 45874,
        "title": "Aery Tiefling - Zelda - Page 1",
        "cover": "https://telegra.ph/file/128fb9e3175cd5933d5cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45874",
        "pageSeq": 45874
    },
    {
        "IDcode": 45875,
        "title": "[蜜蜜子Kimmie] Luna胶衣 - Page 1",
        "cover": "https://telegra.ph/file/ebbbe201c1f7ce355d721.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45875",
        "pageSeq": 45875
    },
    {
        "IDcode": 45876,
        "title": "[HERESY (林檎蜜紀)] エッチなコヤンスカヤの人 (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/0fe4ad2d7136fa3bc5690.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45876",
        "pageSeq": 45876
    },
    {
        "IDcode": 45877,
        "title": "[DJAWA] Jenny - Gambling with Yumeko (Kakegurui) - Page 1",
        "cover": "https://telegra.ph/file/d0a2917c454cd036f5199.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45877",
        "pageSeq": 45877
    },
    {
        "IDcode": 45878,
        "title": "Voeza - Zelda (New Year) - Page 1",
        "cover": "https://telegra.ph/file/b340360ad6a83eb0836ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45878",
        "pageSeq": 45878
    },
    {
        "IDcode": 45879,
        "title": "Lola Bunny (Sweetie Fox) - Page 1",
        "cover": "https://telegra.ph/file/e4427af3a66cd48b23662.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45879",
        "pageSeq": 45879
    },
    {
        "IDcode": 45880,
        "title": "Nonsummerjack (2021) - Je t'adore - Page 1",
        "cover": "https://telegra.ph/file/5f3a0a3fa890c7099c055.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45880",
        "pageSeq": 45880
    },
    {
        "IDcode": 45881,
        "title": "Hane Ame - Marine - Page 1",
        "cover": "https://telegra.ph/file/fd644e2f885a302a3c9ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45881",
        "pageSeq": 45881
    },
    {
        "IDcode": 45882,
        "title": "Cosplayer - Michelle Zepeda - Page 1",
        "cover": "https://telegra.ph/file/24e65f7049f3e861397a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45882",
        "pageSeq": 45882
    },
    {
        "IDcode": 45883,
        "title": "[COSH-121] こすっち121 橋本●奈似妊娠力極大美少女に中出しVスラッシャー！超絶スレンダーガチ本物レイヤー子宮イキ脳イキぐちゃぐちゃ種付け！着床で激絶頂からのエロ過ぎ放心状態ザ・孕まSEX・オブ・ファイターズ - Page 1",
        "cover": "https://telegra.ph/file/55dbb21b7c6fad23ec27e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45883",
        "pageSeq": 45883
    },
    {
        "IDcode": 45884,
        "title": "瓜希酱 - 圣路易斯 - Page 1",
        "cover": "https://telegra.ph/file/2f50a705f392aa78e2e99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45884",
        "pageSeq": 45884
    },
    {
        "IDcode": 45885,
        "title": "［Wendydydydy-酱油] HMS Sirius - Page 1",
        "cover": "https://telegra.ph/file/e23af972e05bc37e14059.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45885",
        "pageSeq": 45885
    },
    {
        "IDcode": 45886,
        "title": "桜桃喵 - 麻衣学姐兔女郎 - Page 1",
        "cover": "https://telegra.ph/file/54b5ebf245839d16eb740.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45886",
        "pageSeq": 45886
    },
    {
        "IDcode": 45887,
        "title": "白烨 - 夜莺x2B - Page 1",
        "cover": "https://telegra.ph/file/fafa70cd99d11e7dfbf90.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45887",
        "pageSeq": 45887
    },
    {
        "IDcode": 45888,
        "title": "Sunnyvier - Raiden Shogun - Page 1",
        "cover": "https://telegra.ph/file/7c658a8f15c8db266ba70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45888",
        "pageSeq": 45888
    },
    {
        "IDcode": 45889,
        "title": "Alina Becker - Mashu - Page 1",
        "cover": "https://telegra.ph/file/39344e685c732180c06c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45889",
        "pageSeq": 45889
    },
    {
        "IDcode": 45890,
        "title": "Alina Becker - Zero Two - Page 1",
        "cover": "https://telegra.ph/file/efe749eb211a64cc14667.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45890",
        "pageSeq": 45890
    },
    {
        "IDcode": 45891,
        "title": "水淼aqua NO.101 海贼王 娜美[122P-155MB] - Page 1",
        "cover": "https://telegra.ph/file/52d379d21739c0d1649a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45891",
        "pageSeq": 45891
    },
    {
        "IDcode": 45892,
        "title": "起司块wii - 宫本武藏女仆 - Page 1",
        "cover": "https://telegra.ph/file/c04089ff9758d3977265d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45892",
        "pageSeq": 45892
    },
    {
        "IDcode": 45893,
        "title": "[林檎蜜紀] 新年あけましておめでとうございますのすけべ更新💙原神💙裸マントエウルア - Page 1",
        "cover": "https://telegra.ph/file/b87eee0521090aa90e97e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45893",
        "pageSeq": 45893
    },
    {
        "IDcode": 45894,
        "title": "[林檎蜜紀] ２月1発目🐦タイツオフのエッチスキンで💖原神、申鶴さんの各所フェチ多め写真 - Page 1",
        "cover": "https://telegra.ph/file/6d9606cd0be54ab161c82.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45894",
        "pageSeq": 45894
    },
    {
        "IDcode": 45895,
        "title": "是一只熊仔吗&一北亦北  八尺夫人 - Page 1",
        "cover": "https://telegra.ph/file/acb9941a36d20bc73c843.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45895",
        "pageSeq": 45895
    },
    {
        "IDcode": 45896,
        "title": "Hidori Rose - Takane Shijou - Page 1",
        "cover": "https://telegra.ph/file/e922a35df3de2e1561dc8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45896",
        "pageSeq": 45896
    },
    {
        "IDcode": 45897,
        "title": "Hidori Rose - Ichinose Asuna - Page 1",
        "cover": "https://telegra.ph/file/4fbb99b2af9f36b44bc02.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45897",
        "pageSeq": 45897
    },
    {
        "IDcode": 45898,
        "title": "Sunnyvier - Android 18 - Page 1",
        "cover": "https://telegra.ph/file/c8d8268a807611cf5e4d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45898",
        "pageSeq": 45898
    },
    {
        "IDcode": 45899,
        "title": "[Chunmomo] Ruby-Laced Beauty Akagi - Page 1",
        "cover": "https://telegra.ph/file/c403b4d9b8aa8b9cb5729.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45899",
        "pageSeq": 45899
    },
    {
        "IDcode": 45900,
        "title": "Arty亚缇 - 碧蓝航线 - 企业 泳装 - Page 1",
        "cover": "https://telegra.ph/file/74e0a1ab3ffc22c9c94f3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45900",
        "pageSeq": 45900
    },
    {
        "IDcode": 45901,
        "title": "Arty亚缇 - 明日方舟 陈 岁红霞旗袍 [18张] - Page 1",
        "cover": "https://telegra.ph/file/39d326f2daac789709514.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45901",
        "pageSeq": 45901
    },
    {
        "IDcode": 45902,
        "title": "Arty亚缇 - 埃列什基伽勒 泳衣 [17张] - Page 1",
        "cover": "https://telegra.ph/file/3a6224a133d2e1d585e26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45902",
        "pageSeq": 45902
    },
    {
        "IDcode": 45903,
        "title": "Arty亚缇 - FGO同人赛车玛修 [22张] - Page 1",
        "cover": "https://telegra.ph/file/a3ccf9324dac7eefb8dff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45903",
        "pageSeq": 45903
    },
    {
        "IDcode": 45904,
        "title": "【一口幼桃】【萌白酱】初音未来 - Page 1",
        "cover": "https://telegra.ph/file/829053c1326ea4c73c254.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45904",
        "pageSeq": 45904
    },
    {
        "IDcode": 45905,
        "title": "Helly Valentine - Me!Me!Me! - Page 1",
        "cover": "https://telegra.ph/file/d384b98bfa71894e717ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45905",
        "pageSeq": 45905
    },
    {
        "IDcode": 45906,
        "title": "Azami - Sucrose - Page 1",
        "cover": "https://telegra.ph/file/ef73088a039338bc78fa0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45906",
        "pageSeq": 45906
    },
    {
        "IDcode": 45907,
        "title": "[小丁こまち] 2021.10 - Page 1",
        "cover": "https://telegra.ph/file/3f9079cd69a85cbed8e8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45907",
        "pageSeq": 45907
    },
    {
        "IDcode": 45908,
        "title": "Atsuki - 星-sei- - Page 1",
        "cover": "https://telegra.ph/file/64d3855ca4d1e3b3cd8a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45908",
        "pageSeq": 45908
    },
    {
        "IDcode": 45909,
        "title": "Atsuki - 薔-bara- - Page 1",
        "cover": "https://telegra.ph/file/b65d2e5301cbae93fa447.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45909",
        "pageSeq": 45909
    },
    {
        "IDcode": 45910,
        "title": "Arty亚缇 - 阿纳斯塔西娅 [18张] - Page 1",
        "cover": "https://telegra.ph/file/bf07407ffa36e1a60d62a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45910",
        "pageSeq": 45910
    },
    {
        "IDcode": 45911,
        "title": "Arty亚缇 - 万圣节 清姫 [16张] - Page 1",
        "cover": "https://telegra.ph/file/b10006953dfc5ab702d2f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45911",
        "pageSeq": 45911
    },
    {
        "IDcode": 45912,
        "title": "Helly Valentine - Camie - Page 1",
        "cover": "https://telegra.ph/file/42e7a4abd1923a5072589.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45912",
        "pageSeq": 45912
    },
    {
        "IDcode": 45913,
        "title": "Azami - Jinx - Page 1",
        "cover": "https://telegra.ph/file/852ce674b309be6b04e18.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45913",
        "pageSeq": 45913
    },
    {
        "IDcode": 45914,
        "title": "Son Ye-Eun (손예은) -DJAWA Photo - [Squid Game] Triangle Soldier - Page 1",
        "cover": "https://telegra.ph/file/599a5cdc71cb7aae3d0c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45914",
        "pageSeq": 45914
    },
    {
        "IDcode": 45915,
        "title": "桜井宁宁 春日野 穹 - Page 1",
        "cover": "https://telegra.ph/file/d14e4121f871db6c2976e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45915",
        "pageSeq": 45915
    },
    {
        "IDcode": 45916,
        "title": "神楽坂真冬 白丝胡桃 （永劫无间） - Page 1",
        "cover": "https://telegra.ph/file/61416d1f30f268f38e477.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45916",
        "pageSeq": 45916
    },
    {
        "IDcode": 45917,
        "title": "[Vinnegal] Seraphine (League of Legends) - Page 1",
        "cover": "https://telegra.ph/file/7a5ec539c38f3ed7a2181.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45917",
        "pageSeq": 45917
    },
    {
        "IDcode": 45918,
        "title": "RocksyLight - Bamby - Page 1",
        "cover": "https://telegra.ph/file/459e19b6d7be11b741a01.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45918",
        "pageSeq": 45918
    },
    {
        "IDcode": 45919,
        "title": "Velvet Chann Astolfo Night Beach - Page 1",
        "cover": "https://telegra.ph/file/0d108ad32d84b8f918625.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45919",
        "pageSeq": 45919
    },
    {
        "IDcode": 45920,
        "title": "Okada Yui - Mona (part 1) - Page 1",
        "cover": "https://telegra.ph/file/aab76866d4addbec62841.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45920",
        "pageSeq": 45920
    },
    {
        "IDcode": 45921,
        "title": "可可老师ARIZATUS - 碧蓝航线 光荣凉夜春雪 - Page 1",
        "cover": "https://telegra.ph/file/21d5084f6c0686839d1e5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45921",
        "pageSeq": 45921
    },
    {
        "IDcode": 45922,
        "title": "萌白酱 穹妹女仆 - Page 1",
        "cover": "https://telegra.ph/file/e6704a458d38eb1ad62ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45922",
        "pageSeq": 45922
    },
    {
        "IDcode": 45923,
        "title": "Arty Huang - Tifa - Page 1",
        "cover": "https://telegra.ph/file/5e4fefc76f3443c3f89b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45923",
        "pageSeq": 45923
    },
    {
        "IDcode": 45924,
        "title": "[まりすさん] 特濃!光沢ローションぬ～るぬる(ド○フロ編) - Page 1",
        "cover": "https://telegra.ph/file/829dad704394d8a42b01f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45924",
        "pageSeq": 45924
    },
    {
        "IDcode": 45925,
        "title": "こすっち119 さァ孕み狂いましょう！本能がエロ狂ったビッチちゃんは種付けするのが義務。誰もが妊娠させたくなる究極2.5次元美少女とアヘアヘ孕まSEX！！ - Page 1",
        "cover": "https://telegra.ph/file/851d1898211f8f0297384.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45925",
        "pageSeq": 45925
    },
    {
        "IDcode": 45926,
        "title": "Anri Okita - Daki - Page 1",
        "cover": "https://telegra.ph/file/962e5a1c85631130feeba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45926",
        "pageSeq": 45926
    },
    {
        "IDcode": 45927,
        "title": "Hane Ame  - St. Louis Racing - Page 1",
        "cover": "https://telegra.ph/file/c5a1df766ae3468b0efae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45927",
        "pageSeq": 45927
    },
    {
        "IDcode": 45928,
        "title": "[DJAWA] Aram - Creamy Alice (Alice in Wonderland) - Page 1",
        "cover": "https://telegra.ph/file/af7a2336d918accd74fc2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45928",
        "pageSeq": 45928
    },
    {
        "IDcode": 45929,
        "title": "KuukoW - Shenhe - Page 1",
        "cover": "https://telegra.ph/file/1d9e8a83a67fec8beb88f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45929",
        "pageSeq": 45929
    },
    {
        "IDcode": 45930,
        "title": "KuukoW - Marie Rose - Page 1",
        "cover": "https://telegra.ph/file/f163372d5437289dac4d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45930",
        "pageSeq": 45930
    },
    {
        "IDcode": 45931,
        "title": "[Nagisa魔物喵] 結城 明日奈 - Page 1",
        "cover": "https://telegra.ph/file/26b89f0af7fc847906f7b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45931",
        "pageSeq": 45931
    },
    {
        "IDcode": 45932,
        "title": "Okada Yui - Asuna bunny - Page 1",
        "cover": "https://telegra.ph/file/41fa26c66d6336999f2c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45932",
        "pageSeq": 45932
    },
    {
        "IDcode": 45933,
        "title": "日奈娇 - 蕾姆同人蓝色护士88p - Page 1",
        "cover": "https://telegra.ph/file/0c6ade87636c023bd9395.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45933",
        "pageSeq": 45933
    },
    {
        "IDcode": 45934,
        "title": "神楽坂真冬 胡桃（永劫无间) - Page 1",
        "cover": "https://telegra.ph/file/a00c795222fcfce0f72bf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45934",
        "pageSeq": 45934
    },
    {
        "IDcode": 45935,
        "title": "千夜未来 蒂法泳衣 - Page 1",
        "cover": "https://telegra.ph/file/61d975869dc07d522b7f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45935",
        "pageSeq": 45935
    },
    {
        "IDcode": 45936,
        "title": "念念_D NO.016 欧根护士 Azur Lane Prinz Eugen [25P-106MB] - Page 1",
        "cover": "https://telegra.ph/file/bbf1ca260e4c20ef1a8a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45936",
        "pageSeq": 45936
    },
    {
        "IDcode": 45937,
        "title": "齋齋いつき itsukichan - Sagiri Izumi - Page 1",
        "cover": "https://telegra.ph/file/c1986960a98f5d7f89a62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45937",
        "pageSeq": 45937
    },
    {
        "IDcode": 45938,
        "title": "齋齋いつき itsukichan - Kokomi Sangonomiya - Page 1",
        "cover": "https://telegra.ph/file/8846f0b50fa22f4f3b774.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45938",
        "pageSeq": 45938
    },
    {
        "IDcode": 45939,
        "title": "齋齋いつき itsukichan - Sayu - Page 1",
        "cover": "https://telegra.ph/file/3f2f589375c1c19a8ed72.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45939",
        "pageSeq": 45939
    },
    {
        "IDcode": 45940,
        "title": "齋齋いつき itsukichan - Gawr Gura - Page 1",
        "cover": "https://telegra.ph/file/08f7363c0a4e9089d30a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45940",
        "pageSeq": 45940
    },
    {
        "IDcode": 45941,
        "title": "齋齋いつき itsukichan - Uruha Rushia - Page 1",
        "cover": "https://telegra.ph/file/327936d0da5a0f5235d9b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45941",
        "pageSeq": 45941
    },
    {
        "IDcode": 45942,
        "title": "Vandych - D.Va Black Cat - Page 1",
        "cover": "https://telegra.ph/file/f2d7146abf59b066f827b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45942",
        "pageSeq": 45942
    },
    {
        "IDcode": 45943,
        "title": "刺青Poi - 恰巴耶夫 - Page 1",
        "cover": "https://telegra.ph/file/56f9b99fd588902762d73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45943",
        "pageSeq": 45943
    },
    {
        "IDcode": 45944,
        "title": "[Nonsummerjack] Millennium Jackpot - Page 1",
        "cover": "https://telegra.ph/file/4850ef909c2a0ae62923b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45944",
        "pageSeq": 45944
    },
    {
        "IDcode": 45945,
        "title": "Shirogane-sama - Asuka plugsuits - Page 1",
        "cover": "https://telegra.ph/file/cbdb25103258638b549e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45945",
        "pageSeq": 45945
    },
    {
        "IDcode": 45946,
        "title": "Yunocos69 - Nero - Page 1",
        "cover": "https://telegra.ph/file/399f7ca19487400099ba9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45946",
        "pageSeq": 45946
    },
    {
        "IDcode": 45947,
        "title": "Yunocos69 - Maid Mashu - Page 1",
        "cover": "https://telegra.ph/file/372a98b8b7d9418d5dda0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45947",
        "pageSeq": 45947
    },
    {
        "IDcode": 45948,
        "title": "Yunocos69 - Ganyu - Page 1",
        "cover": "https://telegra.ph/file/652c8d1fa0d481855fe4a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45948",
        "pageSeq": 45948
    },
    {
        "IDcode": 45949,
        "title": "Shirogane - Eula - Page 1",
        "cover": "https://telegra.ph/file/e8e7fcf6438e4753d97f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45949",
        "pageSeq": 45949
    },
    {
        "IDcode": 45950,
        "title": "Yunocos69 - Ishtar - Page 1",
        "cover": "https://telegra.ph/file/8efe78460972234e08b8f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45950",
        "pageSeq": 45950
    },
    {
        "IDcode": 45951,
        "title": "Yunocos69 - Beast Mashu - Page 1",
        "cover": "https://telegra.ph/file/fb99be11d927dbc5a0b84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45951",
        "pageSeq": 45951
    },
    {
        "IDcode": 45952,
        "title": "Voezacos - Zelda - Page 1",
        "cover": "https://telegra.ph/file/b8aff33ea53a945cca707.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45952",
        "pageSeq": 45952
    },
    {
        "IDcode": 45953,
        "title": "Byoru - Asuna Ichinose - Page 1",
        "cover": "https://telegra.ph/file/474f90c67f26fd77d6555.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45953",
        "pageSeq": 45953
    },
    {
        "IDcode": 45954,
        "title": "Yunocos69 - Ahri - Page 1",
        "cover": "https://telegra.ph/file/530cf1c4c6a67a7d855b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45954",
        "pageSeq": 45954
    },
    {
        "IDcode": 45955,
        "title": "Byoru - Leifang Halloween - Page 1",
        "cover": "https://telegra.ph/file/11db4b517f621a19a5634.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45955",
        "pageSeq": 45955
    },
    {
        "IDcode": 45956,
        "title": "Yunocos69 - D.va - Page 1",
        "cover": "https://telegra.ph/file/43cad48cf450a91526659.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45956",
        "pageSeq": 45956
    },
    {
        "IDcode": 45957,
        "title": "水淼aqua - NO.100 大凤婚纱 [85P-103MB] - Page 1",
        "cover": "https://telegra.ph/file/5b044cc745baf6b68b11b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45957",
        "pageSeq": 45957
    },
    {
        "IDcode": 45958,
        "title": "星之迟迟 圣诞礼物 [90P1V1.96GB] - Page 1",
        "cover": "https://telegra.ph/file/8beb0a0094a77dd16da8b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45958",
        "pageSeq": 45958
    },
    {
        "IDcode": 45959,
        "title": "[つなりん開発チーム] シャニマス冬優子とオ♡フ♡レ♡コ - Page 1",
        "cover": "https://telegra.ph/file/4571d270b92b61955f82f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45959",
        "pageSeq": 45959
    },
    {
        "IDcode": 45960,
        "title": "Voezacos - Ann Takamaki - Page 1",
        "cover": "https://telegra.ph/file/4cccafa1be407deb78a0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45960",
        "pageSeq": 45960
    },
    {
        "IDcode": 45961,
        "title": "Arty亞緹 Mash Dancer ver. (Fate/Grand Order) - Page 1",
        "cover": "https://telegra.ph/file/6d572878d9eea527ea7a0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45961",
        "pageSeq": 45961
    },
    {
        "IDcode": 45962,
        "title": "蠢沫沫 - 黄豆粉 - Page 1",
        "cover": "https://telegra.ph/file/1dabf2ff540a2ef0e9a53.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45962",
        "pageSeq": 45962
    },
    {
        "IDcode": 45963,
        "title": "Aokotan - Kurumi - Page 1",
        "cover": "https://telegra.ph/file/e6eb3abd2ba82f74e503b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45963",
        "pageSeq": 45963
    },
    {
        "IDcode": 45964,
        "title": "蠢沫沫 - 2B 圣诞 - Page 1",
        "cover": "https://telegra.ph/file/da0d0f42eb27f082f58da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45964",
        "pageSeq": 45964
    },
    {
        "IDcode": 45965,
        "title": "是一只熊仔吗 NO.011 碧蓝航线 光荣 [30P-131MB] - Page 1",
        "cover": "https://telegra.ph/file/a5a4592c403f6fe3cd842.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45965",
        "pageSeq": 45965
    },
    {
        "IDcode": 45966,
        "title": "半半子 NO.050 柴郡旗袍[64P-100MB] - Page 1",
        "cover": "https://telegra.ph/file/c53bb743769b8f3784275.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45966",
        "pageSeq": 45966
    },
    {
        "IDcode": 45967,
        "title": "铃木美咲 - 风野灯织 - Page 1",
        "cover": "https://telegra.ph/file/04c7404c8f898648d6a05.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45967",
        "pageSeq": 45967
    },
    {
        "IDcode": 45968,
        "title": "蠢沫沫 - 2B 黑婚纱 - Page 1",
        "cover": "https://telegra.ph/file/fe463383f31fec73f003a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45968",
        "pageSeq": 45968
    },
    {
        "IDcode": 45969,
        "title": "HaneAme - Nyotengu Photobook (Dead or Alive) - Page 1",
        "cover": "https://telegra.ph/file/d1aaa8f484c57e0d890d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45969",
        "pageSeq": 45969
    },
    {
        "IDcode": 45970,
        "title": "HaneAme - Aphrodite (Record of Ragnarok) - Page 1",
        "cover": "https://telegra.ph/file/01cbcf0040ec86aefc729.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45970",
        "pageSeq": 45970
    },
    {
        "IDcode": 45971,
        "title": "Donna Loli - Emilia - Page 1",
        "cover": "https://telegra.ph/file/5d4b187adb30108f711d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45971",
        "pageSeq": 45971
    }
];
