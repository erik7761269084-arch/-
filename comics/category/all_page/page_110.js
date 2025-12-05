// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 1901,
        "title": "(C99) [Kuro Queen (ミサカ12003)] Carnal Chaldea 5 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/73cfbd00a68d16e7c56ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1901"
    },
    {
        "IDcode": 1902,
        "title": "[ももこ] 姉の友達 (COMIC 快楽天 2022年3月号)",
        "cover": "https://telegra.ph/file/0a92b87d657bda7bbe186.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1902"
    },
    {
        "IDcode": 1903,
        "title": "[ヘルアンドヘブン] Highschool DxD - Akeno Doujinshi (ハイスクールD×D)",
        "cover": "https://telegra.ph/file/f5d3782fb3de78f080aa8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1903"
    },
    {
        "IDcode": 1904,
        "title": "(Patreon) [MANA] 申鹤 (原神)",
        "cover": "https://telegra.ph/file/a87ba3b57b4604e24b68b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1904"
    },
    {
        "IDcode": 1905,
        "title": "(C99) [マキ割りトルネード (つづきよしお)] 姉ズリレッスンXX (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/e9580d1acdf66f47965f4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1905"
    },
    {
        "IDcode": 1906,
        "title": "(Patreon) [MANA] 胡桃 (原神)",
        "cover": "https://telegra.ph/file/7631056db51774d957f14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1906"
    },
    {
        "IDcode": 1907,
        "title": "[電気式 (リコセ)] 魔将軍マゼルちゃん",
        "cover": "https://telegra.ph/file/b78f2407b4645b5a24292.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1907"
    },
    {
        "IDcode": 1908,
        "title": "[阿部いのり] メスオチ～乙女は奪われ牝になる～ 第3話 (COMIC GEE Vol.13)",
        "cover": "https://telegra.ph/file/6800d881089d8594f76e9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1908"
    },
    {
        "IDcode": 1909,
        "title": "[牛タン定食への恋]FANBOX 合集",
        "cover": "https://telegra.ph/file/989dba2f37a5336b55082.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1909"
    },
    {
        "IDcode": 1910,
        "title": "[彦馬ヒロユキ] 異国の花 after (COMIC LO 2021年11月号)",
        "cover": "https://telegra.ph/file/f4dfe106570a697c4abe0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1910"
    },
    {
        "IDcode": 1911,
        "title": "[ごてん] スライム危機イッパツ! (異世快楽天 Vol.6)",
        "cover": "https://telegra.ph/file/e46c1545bbc22018d2b74.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1911"
    },
    {
        "IDcode": 1912,
        "title": "[ネトラレの民]『7日間の寝取らせ記録』 ～妻視点～ 第2話",
        "cover": "https://telegra.ph/file/7735acc030e8683e5c15f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1912"
    },
    {
        "IDcode": 1913,
        "title": "[JJ.JJ]  56. \"Happy New Year!!!\" (CN, Eng, JP, Kor, NoText)",
        "cover": "https://telegra.ph/file/aa5056c584c6384b33506.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1913"
    },
    {
        "IDcode": 1914,
        "title": "(C99) [マキノ事務所 (滝美梨香)] SISTERS ～隠された記憶～ ACT.12 AKIKO Ⅵ + おまけ (SISTERS ～夏の最後の日～)",
        "cover": "https://telegra.ph/file/ac917f41a49a3ad9bdf65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1914"
    },
    {
        "IDcode": 1915,
        "title": "[ばつま亭 (ばつま)] もう駄目だ確実に妹が世界一かわいいし嫁になってもらおう",
        "cover": "https://telegra.ph/file/18caa5966239b57087c1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1915"
    },
    {
        "IDcode": 1916,
        "title": "[唄飛鳥]極情性活表裏 第四話「非日常生活の裏側」（(コミックマグナム Vol.148）",
        "cover": "https://telegra.ph/file/cd7ff28984409a17e49f7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1916"
    },
    {
        "IDcode": 1917,
        "title": "[赤月屋 (赤月みゅうと)] 異世界ハーレムパラダイス番外編～禁欲のシスターの国～",
        "cover": "https://telegra.ph/file/33055b73237433c454607.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1917"
    },
    {
        "IDcode": 1918,
        "title": "[きのこのみ (konomi)] ギャルゆいなちゃんとえっち -片思いの彼女がボクに赤面!?-",
        "cover": "https://telegra.ph/file/488e3aef27dac66b61dd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1918"
    },
    {
        "IDcode": 1919,
        "title": "[きのこのみ (konomi)] ギャルゆいなちゃんとえっち2-片思いの彼女がボクに赤面!?-",
        "cover": "https://telegra.ph/file/511cb23476b8a95db652f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1919"
    },
    {
        "IDcode": 1920,
        "title": "(C99) [夜の勉強会 (ふみひろ)] 杏子触手責めの本 (魔法少女まどか☆マギカ)",
        "cover": "https://telegra.ph/file/e2ba141c8cac4d4d94a15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1920"
    },
    {
        "IDcode": 1921,
        "title": "[伊月クロ] 正しい噛み癖矯正法？ (COMIC BAVEL 2020年12月号)",
        "cover": "https://telegra.ph/file/f6d7db72f2188c54e7087.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1921"
    },
    {
        "IDcode": 1922,
        "title": "[Yutto Prime] Boruto Erotic Adventure chapter1:Boruto is in trouble[流木个人汉化]",
        "cover": "https://telegra.ph/file/dfdbb08a0303de7e4d446.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1922"
    },
    {
        "IDcode": 1923,
        "title": "[京極燈弥] 愚か者は猫耳奴隷に依存する～初めての調教生活～ 10",
        "cover": "https://telegra.ph/file/702d2312bd2facdb7ce13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1923"
    },
    {
        "IDcode": 1924,
        "title": "[うみのさち (水平線)] 私の彼はインキュバス",
        "cover": "https://telegra.ph/file/0dbe371a690a641b102b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1924"
    },
    {
        "IDcode": 1925,
        "title": "[アヘ丸] カーテン越しのケツ穴NTR (NTRな世界)",
        "cover": "https://telegra.ph/file/4c91c94cf31377cfaf8fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1925"
    },
    {
        "IDcode": 1926,
        "title": "[鬼鳴らす] 亞絲娜-西田 (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/ffb913a0216016259f6e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1926"
    },
    {
        "IDcode": 1927,
        "title": "[内藤キララ] レディスライム! 第1話 (コミックアンリアル 2021年12月号 Vol.94)",
        "cover": "https://telegra.ph/file/d2bf7e0f8e75b656987e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1927"
    },
    {
        "IDcode": 1928,
        "title": "[雪咲みあれ] 窓の内側にて (コミックホットミルク 2022年3月号)",
        "cover": "https://telegra.ph/file/097a7807c41fafd984a92.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1928"
    },
    {
        "IDcode": 1929,
        "title": "[アヘ丸] 後ろからネトラレ (ANGEL 倶楽部 2019年10月号)",
        "cover": "https://telegra.ph/file/86528b63db6655ee74ce0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1929"
    },
    {
        "IDcode": 1930,
        "title": "(C96) [grand-slum (キュアスラム)] 歩いてた摩美々を金で買ってみる本 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/ab273db20049403a111e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1930"
    },
    {
        "IDcode": 1931,
        "title": "[Rifuroom (りふる)] 優等生くん、えっちなおねーさんにあまやかされまくり",
        "cover": "https://telegra.ph/file/c9eaa8d600ce676ab4fff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1931"
    },
    {
        "IDcode": 1932,
        "title": "[ぽぽちち (八尋ぽち)] レンタル彼女お触りします05 (レンタル彼女お触りします総集編+05) (彼女、お借りします)",
        "cover": "https://telegra.ph/file/61314946afa57c38960f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1932"
    },
    {
        "IDcode": 1933,
        "title": "[原茂之] 未亡人と宅配便 〜変身願望〜 (Web コミックトウテツ Vol.66)",
        "cover": "https://telegra.ph/file/f23cf7816cc567631ecef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1933"
    },
    {
        "IDcode": 1934,
        "title": "[魔空軍団 (しのづかあつと)] スケベエルフ探訪記 3",
        "cover": "https://telegra.ph/file/292e63ae0ac0f582d72a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1934"
    },
    {
        "IDcode": 1935,
        "title": "[GR-2] ふたなりサキュバス",
        "cover": "https://telegra.ph/file/20706123bd46f20f7fb39.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1935"
    },
    {
        "IDcode": 1936,
        "title": "[庭トリ]女人島漂流記～做愛對象只有我的世界～ 1-6話",
        "cover": "https://telegra.ph/file/40dfc7c3bccb9333637f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1936"
    },
    {
        "IDcode": 1937,
        "title": "[東タイラ] 昼下がり、妻の事情。",
        "cover": "https://telegra.ph/file/ea342848996a091f415cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1937"
    },
    {
        "IDcode": 1938,
        "title": "[一夢] やわちちフェスティバル",
        "cover": "https://telegra.ph/file/4552f3e62650505d832f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1938"
    },
    {
        "IDcode": 1939,
        "title": "[割れ目 (こっぺ)] 足枷2 ～連鎖する人妻調教～",
        "cover": "https://telegra.ph/file/ecf3d2c5214bf9e7c638f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1939"
    },
    {
        "IDcode": 1940,
        "title": "[肛門堂 (いしむら)] メタルガール",
        "cover": "https://telegra.ph/file/f05b758b848adb5029352.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1940"
    },
    {
        "IDcode": 1941,
        "title": "[六角八十助] せっくすのしくみ!",
        "cover": "https://telegra.ph/file/cc2002611c8669fc6aba0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1941"
    },
    {
        "IDcode": 1942,
        "title": "[にーきゅー (る～く)] GRIMOIRE FANTASY",
        "cover": "https://telegra.ph/file/86d4d18fe401ebae0884e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1942"
    },
    {
        "IDcode": 1943,
        "title": "(C99) [DOGYEAR (九条だんぼ)] サキュバスさんの搾精記録",
        "cover": "https://telegra.ph/file/98d6d8ffb1f5853112330.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1943"
    },
    {
        "IDcode": 1944,
        "title": "[サイクロン (和泉、冷泉)] サイクロンのフルカラーパック1「Sui-Sui」 (スイートプリキュア♪)",
        "cover": "https://telegra.ph/file/3ad4a427e2aca0b1bbdcd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1944"
    },
    {
        "IDcode": 1945,
        "title": "[朝峰テル] がんばれ♡ココロちゃん (COMIC BAVEL 2022年3月号)",
        "cover": "https://telegra.ph/file/f917f827a4f6495d4b0cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1945"
    },
    {
        "IDcode": 1946,
        "title": "[YU] おマセな妹 (COMIC LO 2022年3月号)",
        "cover": "https://telegra.ph/file/9217d3582712c127a229f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1946"
    },
    {
        "IDcode": 1947,
        "title": "(C99) [ちょこれぃとじゃむ (こあら)] かわいい狐兎は、えっちせよ! (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/9bd7e359bfff0794916ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1947"
    },
    {
        "IDcode": 1948,
        "title": "[絶望しろむじ (しょうさん坊主)] お屋敷の日3",
        "cover": "https://telegra.ph/file/506eaac73140971955d6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1948"
    },
    {
        "IDcode": 1949,
        "title": "(C91) [毒パン工房 (毒コロネ)] 是非曲直庁の気持ちのイイ穴 (東方Project)",
        "cover": "https://telegra.ph/file/0056b3eaf52cdb958ed37.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1949"
    },
    {
        "IDcode": 1950,
        "title": "(C89) [ぱーせぷとろん (浅賀葵)] ネメ様の下僕調教 (To LOVEる ダークネス)",
        "cover": "https://telegra.ph/file/eed26807fb39e5725293a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1950"
    },
    {
        "IDcode": 1951,
        "title": "[ろうか] ヒカリとイチャラブ催眠 (ポケットモンスター)",
        "cover": "https://telegra.ph/file/993c9fbc7c047938a9326.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1951"
    },
    {
        "IDcode": 1952,
        "title": "[yanje] 莫娜 (原神)  (中国翻译) [patreon]",
        "cover": "https://telegra.ph/file/369efcf1d50da83f132c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1952"
    },
    {
        "IDcode": 1953,
        "title": "[おちこち亭 (唯乃くしゃみ)] 友人のママがオナニーのお手伝い2",
        "cover": "https://telegra.ph/file/13109cb10b211a05428e7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1953"
    },
    {
        "IDcode": 1954,
        "title": "[LBL] 鬼のお嫁さん",
        "cover": "https://telegra.ph/file/528696c8da1b47552f2ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1954"
    },
    {
        "IDcode": 1955,
        "title": "[くりもも (つかこ)] 俺の幼なじみがあまあまカワイイ2",
        "cover": "https://telegra.ph/file/da1e961a50fc7be2efe73.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1955"
    },
    {
        "IDcode": 1956,
        "title": "[モフったれ本舗] 奴隷エルフを手に入れた",
        "cover": "https://telegra.ph/file/44eb6f56481c5af2afaf7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1956"
    },
    {
        "IDcode": 1957,
        "title": "[ぷらすて] 変われない僕ら",
        "cover": "https://telegra.ph/file/3a3d82335cec2675cf067.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1957"
    },
    {
        "IDcode": 1958,
        "title": "(COMIC1☆8) [C.N.P (Clone人間)] ママと彼女がエロ過ぎて困ってます (ガンダムビルドファイターズ)",
        "cover": "https://telegra.ph/file/3ec93ad707fb67023ea15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1958"
    },
    {
        "IDcode": 1959,
        "title": "[関西オレンジ (荒井啓)] リトウノホホエミ",
        "cover": "https://telegra.ph/file/db03e6f9cd7699bd8aec4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1959"
    },
    {
        "IDcode": 1960,
        "title": "[Grand lemon (隣)] 幼女先輩(20)",
        "cover": "https://telegra.ph/file/e38e4dd206f7d95682843.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1960"
    },
    {
        "IDcode": 1961,
        "title": "[こらんだむ] 幼精騎士ロリスタン (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/f60d2a335d23ee8eec22c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1961"
    },
    {
        "IDcode": 1962,
        "title": "[大島あき] 彼女のお母さんに童貞を奪われる話1",
        "cover": "https://telegra.ph/file/143bd6a75fe01e9641eca.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1962"
    },
    {
        "IDcode": 1963,
        "title": "[Kunaboto] BLEACH - ホロのめちゃくちゃH",
        "cover": "https://telegra.ph/file/5df0a3416b2fb2523a450.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1963"
    },
    {
        "IDcode": 1964,
        "title": "[jaguchi] 初雪が溶ける頃 (COMIC アオハ 2021冬)",
        "cover": "https://telegra.ph/file/635f1133ec99437646759.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1964"
    },
    {
        "IDcode": 1965,
        "title": "[VENUS] ごめんね。私、名前も知らないおじさんと……",
        "cover": "https://telegra.ph/file/6910d718109f4535192af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1965"
    },
    {
        "IDcode": 1966,
        "title": "細い触手とさくらちゃん (Fantia)",
        "cover": "https://telegra.ph/file/0f00089158ed35af0bfc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1966"
    },
    {
        "IDcode": 1967,
        "title": "(歌姫庭園23) [春工房 (春工房のりまき)] ミリエロ05 (アイドルマスター ミリオンライブ!)",
        "cover": "https://telegra.ph/file/eaee45ecf8f52b62b12be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1967"
    },
    {
        "IDcode": 1968,
        "title": "[すぱいらる (在誠舞あゆか+)] 風紀委員隷属アンプル更生計画",
        "cover": "https://telegra.ph/file/510f124b906a4f1da90e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1968"
    },
    {
        "IDcode": 1969,
        "title": "[墓場] 闇生徒会長 第4話 (COMIC 夢幻転生 2022年2月号)",
        "cover": "https://telegra.ph/file/f6e047bf39d0b3ec7727a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1969"
    },
    {
        "IDcode": 1970,
        "title": "[柚木イチカ] パンツ忘れて初エッチ!？ 濡れすぎちゃって止まらないっ",
        "cover": "https://telegra.ph/file/1ed7bbe18694e101da238.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1970"
    },
    {
        "IDcode": 1971,
        "title": "[里崎] 傀儡!キョンシー娘!! (コミックゼロス #84)",
        "cover": "https://telegra.ph/file/9a549ddb2553c72b45990.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1971"
    },
    {
        "IDcode": 1972,
        "title": "[かに家 (かにゃぴぃ)] ちびさきゅシコらいふ",
        "cover": "https://telegra.ph/file/22d6545b890396659c28f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1972"
    },
    {
        "IDcode": 1973,
        "title": "[宮原歩] エロカワ彼女の性衝動",
        "cover": "https://telegra.ph/file/9fe2ff9c51e3479e5ef3d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1973"
    },
    {
        "IDcode": 1974,
        "title": "[佐波缶] 憧れの先輩を追いかけて (COMIC グーチョ vol.8)",
        "cover": "https://telegra.ph/file/6c248f27802008e1a92ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1974"
    },
    {
        "IDcode": 1975,
        "title": "[宮原歩] ペンと彼女と甘い罠 2",
        "cover": "https://telegra.ph/file/3f000afdd16d8b6fd24eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1975"
    },
    {
        "IDcode": 1976,
        "title": "[塩ちょこ (七G)] バーチャルサイミンフーゾク 2 (にじさんじ)",
        "cover": "https://telegra.ph/file/d9a1ed29fa749d0b93aaf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1976"
    },
    {
        "IDcode": 1977,
        "title": "[桐野いつき] 妹の彼とのつきあい方 (COMIC グーチョ vol.8)",
        "cover": "https://telegra.ph/file/4e7ef2d04efb5a3d0e082.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1977"
    },
    {
        "IDcode": 1978,
        "title": "[小島紗] ア◯ルエッチに興味を持ってしまった主さま！",
        "cover": "https://telegra.ph/file/eca60b9ceb638601ea349.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1978"
    },
    {
        "IDcode": 1979,
        "title": "[京極燈弥] 愚か者は猫耳奴隷に依存する～初めての調教生活～ 11",
        "cover": "https://telegra.ph/file/f56463236a324e26aa285.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1979"
    },
    {
        "IDcode": 1980,
        "title": "(サンクリ2019 Summer) [シノビロケット (ササマシン)] ねこガキが分かるまでパコるのをやめない (Wonderland Wars)",
        "cover": "https://telegra.ph/file/6ff4b46e542f376fd874e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1980"
    },
    {
        "IDcode": 1981,
        "title": "[南拳蟑狼]體驗比基尼咖啡師工作的女上司(Chinese)",
        "cover": "https://telegra.ph/file/518a1b9cea926fd6fe6db.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1981"
    },
    {
        "IDcode": 1982,
        "title": "(C91) [スーパーイチゴチャン (みさおか)] きらりおねえちゃんまとめ (アイドルマスター シンデレラガールズ)",
        "cover": "https://telegra.ph/file/55f3249275349db683fac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1982"
    },
    {
        "IDcode": 1983,
        "title": "[ICE] マッチング上司 相性はカラダでチェック (ANGEL 倶楽部 2022年3月号)",
        "cover": "https://telegra.ph/file/f62f3a1bda94d44bcc114.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1983"
    },
    {
        "IDcode": 1984,
        "title": "[ぼちぼちいこか (たっく)] アリスちゃんの社会科見学",
        "cover": "https://telegra.ph/file/390e64a759e5c71e60796.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1984"
    },
    {
        "IDcode": 1985,
        "title": "[世捨人な漫画描き (ともきとものり)] 濡れる永遠亭 (東方Project)",
        "cover": "https://telegra.ph/file/3b795f63a416da3cf112d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1985"
    },
    {
        "IDcode": 1986,
        "title": "[ヨールキ・パールキ (露々々木もげら)] K子と病みおじ・派",
        "cover": "https://telegra.ph/file/95a72f0945e0a677cc7a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1986"
    },
    {
        "IDcode": 1987,
        "title": "[オオサキ] 大当たり！？ (COMIC 失楽天 2021年8月号)",
        "cover": "https://telegra.ph/file/05b4a6c6fdfd7983b3bb2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1987"
    },
    {
        "IDcode": 1988,
        "title": "[肛門堂 (いしむら)] メタルガール",
        "cover": "https://telegra.ph/file/39294b3783b45da0f7220.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1988"
    },
    {
        "IDcode": 1989,
        "title": "[アヘ丸] 幸せNTR計画 (NTRな世界)",
        "cover": "https://telegra.ph/file/e5d4b5433e4b15510a627.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1989"
    },
    {
        "IDcode": 1990,
        "title": "[夏季のタネ (サマー)] 重桜レースクイーンズ2 (アズールレーン)  [2022年1月15日]",
        "cover": "https://telegra.ph/file/2bed76777a6fd62441e0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1990"
    },
    {
        "IDcode": 1991,
        "title": "[SeN] ぷりーずほーるどみー (comicアンスリウム 001 2013年5月号)",
        "cover": "https://telegra.ph/file/4f52bbcfecc84f8d46867.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1991"
    },
    {
        "IDcode": 1992,
        "title": "[憑依ラヴァー (Duokuma)] そのカラダ、頂きます",
        "cover": "https://telegra.ph/file/4f83cab22cf90d4a53bd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1992"
    },
    {
        "IDcode": 1993,
        "title": "[松野田ヨウ] 先生と一緒にきもちよ～く良い子になろうね",
        "cover": "https://telegra.ph/file/09abc181b0b94be3be5a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1993"
    },
    {
        "IDcode": 1994,
        "title": "[こいんとす (杏飴)] イリヤともーっとキモチよくなろっ (Fate/kaleid liner プリズマ☆イリヤ)",
        "cover": "https://telegra.ph/file/f69482bfbd9bba86b425f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1994"
    },
    {
        "IDcode": 1995,
        "title": "[その他大勢Z (ゆかたろ)] なかよし女冒険者は夜になると宿屋でめちゃくちゃえっちする",
        "cover": "https://telegra.ph/file/c5dbaa5b9839088af2445.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1995"
    },
    {
        "IDcode": 1996,
        "title": "(C99) [カシスかぼす (ありあ。)] 制服コスのナツメさんが可愛すぎて痴漢してしまった話。 (喫茶ステラと死神の蝶)",
        "cover": "https://telegra.ph/file/2bb728395f6123757e162.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1996"
    },
    {
        "IDcode": 1997,
        "title": "[草野郎] 幼馴染と妹と上級国民",
        "cover": "https://telegra.ph/file/d6f8fb867856a1ecb6c95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1997"
    },
    {
        "IDcode": 1998,
        "title": "[アヘ丸] カレの弟にネトラレ (ANGEL倶楽部 2019年3月号)",
        "cover": "https://telegra.ph/file/bdedbdf27fa2f2f46809e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1998"
    },
    {
        "IDcode": 1999,
        "title": "[MANA] エウルア+アンバー 1",
        "cover": "https://telegra.ph/file/8dca927e520518bec0857.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=1999"
    },
    {
        "IDcode": 2000,
        "title": "[野際かえで] わるいこ 中編 (COMIC LO 2022年2月号)",
        "cover": "https://telegra.ph/file/0b70a2b74280bdeb5a9bb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2000"
    }
];
