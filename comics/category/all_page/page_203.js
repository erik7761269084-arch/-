// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 2227,
        "title": "[ギャルドラゴン] オラオラギャルと毎日エッチ",
        "cover": "https://telegra.ph/file/63b4fe935ba99c64ea772.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2227"
    },
    {
        "IDcode": 2228,
        "title": "[VYCMa] 蒙德温泉节-幕间",
        "cover": "https://telegra.ph/file/04e3e893ba756129a8c55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2228"
    },
    {
        "IDcode": 2229,
        "title": "(COMIC1☆19) [最果て空間 (緋乃ひの)] なんにでも興味深ぁー!なユニちゃん (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/f2043c3654eee6a2171e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2229"
    },
    {
        "IDcode": 2230,
        "title": "[イゲドアハ] ちょろいもんだぜ! (COMIC 快楽天ビースト 2021年6月号)",
        "cover": "https://telegra.ph/file/203cfadaf1415ff1893c7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2230"
    },
    {
        "IDcode": 2231,
        "title": "[雛咲葉] みだれて天使 (COMIC 快楽天ビースト 2022年1月号)",
        "cover": "https://telegra.ph/file/08016d36ac9886d62fd9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2231"
    },
    {
        "IDcode": 2232,
        "title": "[星に帰る! (たらぞお)] くみちゃん3",
        "cover": "https://telegra.ph/file/5333d4dd4593f62947f87.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2232"
    },
    {
        "IDcode": 2233,
        "title": "[シャイン・ナビス] カチョウ性奴隷調教II (ハンター×ハンター)",
        "cover": "https://telegra.ph/file/6a341287699e35afc2d89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2233"
    },
    {
        "IDcode": 2234,
        "title": "[咳寝はじめ] ささやきハレーション (COMIC アンスリウム 2022年3月号)",
        "cover": "https://telegra.ph/file/e8588cd7046a638ffc0d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2234"
    },
    {
        "IDcode": 2235,
        "title": "[Akari (鬼針草)] 山田エルフとディリシャスパンスト (エロマンガ先生)",
        "cover": "https://telegra.ph/file/be4dad2f94c9042bf613b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2235"
    },
    {
        "IDcode": 2236,
        "title": "[テラスMC] 二次創作まとめ2022/2月号 ポケモン [chinese][哇!是數碼寶貝粉絲!]",
        "cover": "https://telegra.ph/file/081a0ce256b5b9bb5637d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2236"
    },
    {
        "IDcode": 2237,
        "title": "[ぐれーともす] やられたらヤリかえす! (COMIC 天魔 2016年1月号)",
        "cover": "https://telegra.ph/file/a27704dfb41f8cf28d986.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2237"
    },
    {
        "IDcode": 2238,
        "title": "[TEM (Tem10)] よしりこの特別な一日 (ラブライブ! サンシャイン!!)",
        "cover": "https://telegra.ph/file/03b4819823503d8aa774f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2238"
    },
    {
        "IDcode": 2239,
        "title": "(C80) [からきし傭兵団 真雅 (砂原渉)] 仙人掌キャンパス (ナルト)",
        "cover": "https://telegra.ph/file/85253ad1beac5f95a9d0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2239"
    },
    {
        "IDcode": 2240,
        "title": "[18マスター] 息子を求めて母は鳴く",
        "cover": "https://telegra.ph/file/64ad344b86af783728ca7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2240"
    },
    {
        "IDcode": 2241,
        "title": "[鬼針草] 偽装出勤 (COMIC 阿吽 2019年10月号)",
        "cover": "https://telegra.ph/file/7407de77ed18366e517c9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2241"
    },
    {
        "IDcode": 2242,
        "title": "[18マスター] 大好きなお母さん",
        "cover": "https://telegra.ph/file/f06f89e5ea381479658a2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2242"
    },
    {
        "IDcode": 2243,
        "title": "[黒岩瑪瑙] 間違えられた男 (コミックメガストアDEEP Vol.37)",
        "cover": "https://telegra.ph/file/5d9b7d19ccf2beefa90a5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2243"
    },
    {
        "IDcode": 2244,
        "title": "[さすまたせぶん (あって七草)] シィちゃんのちっちゃい本 (Tokyo 7th シスターズ)",
        "cover": "https://telegra.ph/file/e48715b2bcee902249a66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2244"
    },
    {
        "IDcode": 2245,
        "title": "[さすまたせぶん (あって七草)] チチのえっちな花嫁修行 (ドラゴンボール)",
        "cover": "https://telegra.ph/file/cfd1307c1591aedc917ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2245"
    },
    {
        "IDcode": 2246,
        "title": "[緋乃ひの] 機姦ハートブレイク (二次元コミックマガジン メスガキ変身ヒロイン機械姦制裁 非情のわからせマシンで連続ロリアクメVol．2)",
        "cover": "https://telegra.ph/file/616693731995a08148fb3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2246"
    },
    {
        "IDcode": 2247,
        "title": "[りふる] 俺だけに小悪魔な同級生～フったら押し倒されました!～",
        "cover": "https://telegra.ph/file/bcb614281db2d34d62abb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2247"
    },
    {
        "IDcode": 2248,
        "title": "[あかつきおぼえず (鈴木春暁)] 新人OLちゃんの憂鬱ー実践飛び込み枕営業編ー",
        "cover": "https://telegra.ph/file/1b8b4c663cb365613dee5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2248"
    },
    {
        "IDcode": 2249,
        "title": "[STUDIOふあん (なぶろっく)] ウド「アカネは何回もレイプすると気持ちよくなるんだ。」",
        "cover": "https://telegra.ph/file/8fcc5b7909622aecc4102.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2249"
    },
    {
        "IDcode": 2250,
        "title": "[三船誠二郎] 僕とサキュバスママたちとのハーレム生活 [特装版]",
        "cover": "https://telegra.ph/file/29dea92b38e3778166b70.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2250"
    },
    {
        "IDcode": 2251,
        "title": "[モニスタラッシュ / a Matures (忠臣蔵之介)] 肛拡系女子の日常?性活～女神パワーで小さくなった私は大きく拡げていくことにします～",
        "cover": "https://telegra.ph/file/4dcbc9b9ffd66485d192b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2251"
    },
    {
        "IDcode": 2252,
        "title": "[沢田大介] 母隷奴 第1-3話",
        "cover": "https://telegra.ph/file/b63058c057bcbe7e3a12c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2252"
    },
    {
        "IDcode": 2253,
        "title": "(C99) [イケメン帝国 (れむ)] メス牛対魔忍水城不知火 妊娠記録 (対魔忍ユキカゼ)",
        "cover": "https://telegra.ph/file/a7672448366cd0c4cfd71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2253"
    },
    {
        "IDcode": 2254,
        "title": "[堀石掘人 (ホリイシホルト)] フェルとマナの森-体液で体力回復させてくれる爆乳ヒーラーエルフ-",
        "cover": "https://telegra.ph/file/0166cf3c444aa9c180b9e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2254"
    },
    {
        "IDcode": 2255,
        "title": "[庄司二号] 「いいわよ、私も濡れてるから…」憧れの女上司と泥酔セックス! (1-4)",
        "cover": "https://telegra.ph/file/b9135f204a3987f4a41cf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2255"
    },
    {
        "IDcode": 2256,
        "title": "[mega w] 女が全て下品なビッチになった日常 バーガーショップ編",
        "cover": "https://telegra.ph/file/3f64ec68e309393bd9f71.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2256"
    },
    {
        "IDcode": 2257,
        "title": "(C93) [あとりえひなた (ひなた悠)] ロリまん売買日記 ふたりめ",
        "cover": "https://telegra.ph/file/dd94d43ae2bcdc610f22c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2257"
    },
    {
        "IDcode": 2258,
        "title": "(C92) [あとりえひなた (ひなた悠)] ロリまん売買日記 ひとりめ",
        "cover": "https://telegra.ph/file/6a406f9f8e254e2b89cbf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2258"
    },
    {
        "IDcode": 2259,
        "title": "[ぎんハハ] 446休日 (獅白ぼたん)",
        "cover": "https://telegra.ph/file/a8b877a5fb588325b78d3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2259"
    },
    {
        "IDcode": 2260,
        "title": "[大盛り] 幼馴染は夢遊病 (美少女マニアクス)",
        "cover": "https://telegra.ph/file/a2f3eb382d3ad90eb14b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2260"
    },
    {
        "IDcode": 2261,
        "title": "[STUDIOふあん (来鈍)] 飯犯トラベラーズ 博多集団レ●プ旅行 フルカラー版",
        "cover": "https://telegra.ph/file/848e2dbd788488809d53d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2261"
    },
    {
        "IDcode": 2262,
        "title": "[わかまつ] いつも素直に指示に従ってくれる女性部下社員",
        "cover": "https://telegra.ph/file/93acf4f959e2ce4960fc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2262"
    },
    {
        "IDcode": 2263,
        "title": "[半里バード] おかえりのえっち (COMIC 快楽天ビースト 2021年11月号)",
        "cover": "https://telegra.ph/file/f072f8386ef364fd603b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2263"
    },
    {
        "IDcode": 2264,
        "title": "[みやはらみみかき] 売られて··· (幼式便所)",
        "cover": "https://telegra.ph/file/6ff38b4a919340f4bed6f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2264"
    },
    {
        "IDcode": 2265,
        "title": "[みやはらみみかき] 売られて···~秘密パーティ~  (幼式便所)",
        "cover": "https://telegra.ph/file/78295930758ea419685e2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2265"
    },
    {
        "IDcode": 2266,
        "title": "[みやはらみみかき] 売られて···~優子~ (幼式便所)",
        "cover": "https://telegra.ph/file/56c54985f19d9bdf7016d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2266"
    },
    {
        "IDcode": 2267,
        "title": "[ジャイロウ] 新人教師藤原さんの怪しい教員日記 三時限目、皆が一緒に楽しむ文化祭! (コミックミルフ 2022年2月号 Vol.64)",
        "cover": "https://telegra.ph/file/0403f9fad04281b9feb16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2267"
    },
    {
        "IDcode": 2268,
        "title": "(COMIC1☆13) [ゆれるちくわぶ (あって七草)] じょししょうがくせい乱交ボテえっち (ボテ腹・孕ませ合同)",
        "cover": "https://telegra.ph/file/fe85111135c207be95823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2268"
    },
    {
        "IDcode": 2269,
        "title": "[早乙女もんどのすけ] 公衆便女 舞・彩音 使用済 (黄金のソナタXXX その九)",
        "cover": "https://telegra.ph/file/3a3ea2a15340fae768e9c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2269"
    },
    {
        "IDcode": 2270,
        "title": "[YOSHITORA] 生ウンチ見るなら一番可愛い子がいい! (黄金のソナタXXX その十一)",
        "cover": "https://telegra.ph/file/c23a77577563cfd532b57.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2270"
    },
    {
        "IDcode": 2271,
        "title": "[あんこまん] マルタ、アストルフォと仲良くなる (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/0e49cb4025fd44894bc07.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2271"
    },
    {
        "IDcode": 2272,
        "title": "[武田弘光] 戦隊ピンク（心咲）のクリスマスの過ごし方（IF)",
        "cover": "https://telegra.ph/file/9a5c5cd2fd2204233ef89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2272"
    },
    {
        "IDcode": 2273,
        "title": "[ソボロゴ] となりの淫蕩奥さん (COMIC saseco Vol. 2)  [カラー化]",
        "cover": "https://telegra.ph/file/58a7b96773336bbbc597d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2273"
    },
    {
        "IDcode": 2274,
        "title": "[はめんず (SAKULA)] 妖魔摩天楼",
        "cover": "https://telegra.ph/file/e245997b7b85f14ecc9a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2274"
    },
    {
        "IDcode": 2275,
        "title": "[うらやまや (うらやま)] 欲求不満な人妻大家を満足させるお仕事",
        "cover": "https://telegra.ph/file/09bc7dbe71bc4172befc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2275"
    },
    {
        "IDcode": 2276,
        "title": "[跳馬遊鹿] 母娘と性愛 ～梗花さんと～",
        "cover": "https://telegra.ph/file/7ae1e582d37ce71fbe294.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2276"
    },
    {
        "IDcode": 2277,
        "title": "[MANA] エウルア+アンバー 2",
        "cover": "https://telegra.ph/file/a2d3abf185314af55dab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2277"
    },
    {
        "IDcode": 2278,
        "title": "(C92) [Sugar＊Berry＊Syrup (クロエ)] マッキー♥好き♥好き♥ (機動戦士ガンダム 鉄血のオルフェンズ)",
        "cover": "https://telegra.ph/file/406f406904cf9b1c4af61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2278"
    },
    {
        "IDcode": 2279,
        "title": "[防波堤] ENKOU JK 藤本京子 編",
        "cover": "https://telegra.ph/file/2dee0e894fe5993b57f62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2279"
    },
    {
        "IDcode": 2280,
        "title": "(C99) [覇娘。 (猫耳花音)] 王室幼膣マゾ化催淫",
        "cover": "https://telegra.ph/file/1fef22404006581aaf37e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2280"
    },
    {
        "IDcode": 2281,
        "title": "[平沢Zen] おっぱいチョコレート爆盛りモルガンさん",
        "cover": "https://telegra.ph/file/d809041c84b24790b253b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2281"
    },
    {
        "IDcode": 2282,
        "title": "[五味滓太郎 (鉛棒なよなよ)] 友達の義母と姉に誘惑される話、後編",
        "cover": "https://telegra.ph/file/0685d822622a3ffe06433.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2282"
    },
    {
        "IDcode": 2283,
        "title": "[Bonsketch (ぼんすけ)] ケツアナニストな熟女尻",
        "cover": "https://telegra.ph/file/99e6f947f16b46b787e4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2283"
    },
    {
        "IDcode": 2284,
        "title": "[18master] 平沢家の息子の場合",
        "cover": "https://telegra.ph/file/8851f8091fdaddce86b4c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2284"
    },
    {
        "IDcode": 2285,
        "title": "(C99) [ゆにおんばすと (かずたろ)] ペコ姉さんの悪い子はた~べちゃうぞぉ♡ (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/255b8fc68b585b12ea2f6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2285"
    },
    {
        "IDcode": 2286,
        "title": "(C99) [ゆにおんばすと (かずたろ)] ペコ姉さんの悪い子はた~べちゃうぞぉ♡ (プリンセスコネクト!Re:Dive)",
        "cover": "https://telegra.ph/file/3c322b64448d86de41739.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2286"
    },
    {
        "IDcode": 2287,
        "title": "[天気輪 (甘露アメ)] ガチ恋しないと出られない部屋",
        "cover": "https://telegra.ph/file/614b4995e01d072b48ca3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2287"
    },
    {
        "IDcode": 2288,
        "title": "[メランコル] 女体化魔法少女、敗北!!2",
        "cover": "https://telegra.ph/file/22415c70ba0b933f184ee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2288"
    },
    {
        "IDcode": 2289,
        "title": "[18マスター] 異世界に行く方法を試してみた。",
        "cover": "https://telegra.ph/file/bb3cf60a85bbad25f2bd6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2289"
    },
    {
        "IDcode": 2290,
        "title": "[さいもん] コハルブレイク! (コミック エグゼ 35)",
        "cover": "https://telegra.ph/file/d8b701925dc33dee7d03d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2290"
    },
    {
        "IDcode": 2291,
        "title": "[PIXIV] 黒森重工 (11063482)",
        "cover": "https://telegra.ph/file/171e0457681580c332c3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2291"
    },
    {
        "IDcode": 2292,
        "title": "[南方ヒトガクシキ (仲村レグラ)] 淪落のすゝめ",
        "cover": "https://telegra.ph/file/b6b25ca7e5e49c744da6e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2292"
    },
    {
        "IDcode": 2293,
        "title": "[りふる] 俺だけに小悪魔な同級生～フったら押し倒されました!～",
        "cover": "https://telegra.ph/file/6e7f22422b579250a33a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2293"
    },
    {
        "IDcode": 2294,
        "title": "(C99) [もすきーと音。 (ぐれーともす)] 恋する大悪魔2 (ガヴリールドロップアウト)",
        "cover": "https://telegra.ph/file/4f3fa68ce3a22327d1b7c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2294"
    },
    {
        "IDcode": 2295,
        "title": "[つくすん] 痛いの大好きお嬢様戦記  (リョナキング vol.18)",
        "cover": "https://telegra.ph/file/f092f9b57be388a2867c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2295"
    },
    {
        "IDcode": 2296,
        "title": "[もふもふ苑 (空色れん)] 水結様がお口で…♥",
        "cover": "https://telegra.ph/file/69a6c4c7098ac24e9c00f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2296"
    },
    {
        "IDcode": 2297,
        "title": "[こらんだむ] 最強のエナジードリンクを完成させたロリンチちゃん (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/beab17f2bc390516c62b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2297"
    },
    {
        "IDcode": 2298,
        "title": "(C99) [ろ～たり～Engine (神無月元史)] パコ推し! (ホロライブ)",
        "cover": "https://telegra.ph/file/520e6de5a8dd54c92637b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2298"
    },
    {
        "IDcode": 2299,
        "title": "[あおむし] 借金のカタ (COMIC 失楽天 2021年2月号)",
        "cover": "https://telegra.ph/file/32840daec87a3c0d12396.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2299"
    },
    {
        "IDcode": 2300,
        "title": "[唄飛鳥] 極情性活表裏 第六話「凌辱と不倫の裏側」（(コミックマグナム Vol.150）",
        "cover": "https://telegra.ph/file/64af8b2c48a7c8c0ef116.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2300"
    },
    {
        "IDcode": 2301,
        "title": "[もふもふ苑 (空色れん)] 水結様がおっぱいで…♥",
        "cover": "https://telegra.ph/file/e9a6c150bd580c9efc4d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2301"
    },
    {
        "IDcode": 2302,
        "title": "[CELLULOID-ACME (チバトシロウ)] 竜のまじない (モンスターハンターライズ)",
        "cover": "https://telegra.ph/file/10160f7d4bd964c1b8357.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2302"
    },
    {
        "IDcode": 2303,
        "title": "[跳馬遊鹿] 母娘と性愛 ～夏希ちゃんと～",
        "cover": "https://telegra.ph/file/dacc996a2189e6f1ec0f1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2303"
    },
    {
        "IDcode": 2304,
        "title": "[LBL] お狐様と昼間から",
        "cover": "https://telegra.ph/file/c410420e5587bca25a63c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2304"
    },
    {
        "IDcode": 2305,
        "title": "[Simao]原神妄想シリーズ-バーバラ(原神)",
        "cover": "https://telegra.ph/file/79a7177e39e0b0195e700.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2305"
    },
    {
        "IDcode": 2306,
        "title": "[18マスター] 友達のお母さんは無口",
        "cover": "https://telegra.ph/file/31b8a01ce1b29bbd86040.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2306"
    },
    {
        "IDcode": 2307,
        "title": "[ciaociao (あらきかなお)] 女体化した俺の爛れた舞台裏生活",
        "cover": "https://telegra.ph/file/bd7965774ba3132c6ac84.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2307"
    },
    {
        "IDcode": 2308,
        "title": "[ろきそにん工房 (ろきた)] 居候のくせに生意気なメスガキを催眠かけてわからせてやった",
        "cover": "https://telegra.ph/file/6df1f795f8d3cbd042f66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2308"
    },
    {
        "IDcode": 2309,
        "title": "(C99) [Argyle◇check、わんとんランド組合 (こまめ丸)] とろ娘β チマメ隊とらぶほ コミケ復活 限定版 (ご注文はうさぎですか?)",
        "cover": "https://telegra.ph/file/8dd3b3ca0be239e918eac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2309"
    },
    {
        "IDcode": 2310,
        "title": "[スイートピー、COCOA BREAK (大島智、大島永遠)] とろける女子湯4",
        "cover": "https://telegra.ph/file/05b6b5ab6a4e0ecebb83d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2310"
    },
    {
        "IDcode": 2311,
        "title": "[hiyocco/ひよこ]水着nncと♡♡♡ (ホロライブ) (桃鈴ねね) [中國語]",
        "cover": "https://telegra.ph/file/50c05bbc58588ab53c9d8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2311"
    },
    {
        "IDcode": 2312,
        "title": "(夏のメガ超同人祭) [MAPLER (まぷる)] セクサロイドのつかいかた -ある大学生の場合-",
        "cover": "https://telegra.ph/file/1f3ef94009e1b9e20d2a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2312"
    },
    {
        "IDcode": 2313,
        "title": "[BUTA] Teddy Steady わんもあ!! (コミックホットミルク 2022年3月号)",
        "cover": "https://telegra.ph/file/1550f2b87e0857689d456.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2313"
    },
    {
        "IDcode": 2314,
        "title": "(C95) [G-SCAN CORP. (佐藤茶菓子)] 冴えない詩羽と英梨々のりんり審査会 (冴えない彼女の育てかた)",
        "cover": "https://telegra.ph/file/1ff3a43abc7ec36f5fc34.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2314"
    },
    {
        "IDcode": 2315,
        "title": "(C93) [Part K (羊羽忍)] 女の子なんだぞ… (アズールレーン)",
        "cover": "https://telegra.ph/file/9788501d184aa3cfaea66.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2315"
    },
    {
        "IDcode": 2316,
        "title": "(C82) [SKlabel (SKpresents)] 千反田えるの災難 (氷菓)",
        "cover": "https://telegra.ph/file/91fa5fb75abdfc64ebd99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2316"
    },
    {
        "IDcode": 2317,
        "title": "[南乃さざん] 壁の薄いアパートの隣室に人妻雷電将軍が引っ越してきた",
        "cover": "https://telegra.ph/file/6b0de9a98b7b3ae8623ba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2317"
    },
    {
        "IDcode": 2318,
        "title": "[ツリサス] 夏葉M化調教 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/aaf031359a9b5c8b22659.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2318"
    },
    {
        "IDcode": 2319,
        "title": "[ラッチョシティ] 日本に馴染めずにいた北欧美少女にちょっと優しくしたらなんかヤる流れになったんだが",
        "cover": "https://telegra.ph/file/faf7b56486de278397836.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2319"
    },
    {
        "IDcode": 2320,
        "title": "(C99) [Twilight Road (ともー)] アリスもレベルアップしたいです! + ユズのフリーパスを使いますか．．．？(ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/2eed372653c5ffd6b0002.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2320"
    },
    {
        "IDcode": 2321,
        "title": "[アーセナル] 妹は重い病（やまい）？ (COMIC ペンギンクラブ 2022年3月号)",
        "cover": "https://telegra.ph/file/d3e467eab8c56279483b2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2321"
    },
    {
        "IDcode": 2322,
        "title": "(秋季例大祭8) [Home Sweet Home (ししき)] 妖夢ちゃんがアダルトグッズのレビューをする話 (東方Project)",
        "cover": "https://telegra.ph/file/275866874e75bd53c0029.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2322"
    },
    {
        "IDcode": 2323,
        "title": "(C99) [もえぷっしゅ (ちんげろ)] イノチ病棟 (アサルトリリィ)",
        "cover": "https://telegra.ph/file/822564f13ceab150977b5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2323"
    },
    {
        "IDcode": 2324,
        "title": "[18マスター] 母さんは無口で無表情で無抵抗",
        "cover": "https://telegra.ph/file/02d319ba3b5a3ed199453.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2324"
    },
    {
        "IDcode": 2325,
        "title": "[むた] ブーディカさん (another ver. zip) (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/f40b6166dd649cc85c50c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2325"
    },
    {
        "IDcode": 2326,
        "title": "[十時企画] 結衣のA感覚II",
        "cover": "https://telegra.ph/file/f6a4916d9e3b640e15f17.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=2326"
    }
];
