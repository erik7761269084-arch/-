// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 601,
        "title": "[地底の肉屋 (どきゆり)] ザーメン苦手系女子のはなし",
        "cover": "https://telegra.ph/file/95dfd2d7afc6498639770.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=601"
    },
    {
        "IDcode": 602,
        "title": "[ハトマメ (顎)] 発情うさぎ狩り",
        "cover": "https://telegra.ph/file/340c6c790411c91618f4b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=602"
    },
    {
        "IDcode": 603,
        "title": "[雛咲葉] ゆれてみだれて + 虎穴&蜜瓜特典",
        "cover": "https://telegra.ph/file/1fc271072419371f331de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=603"
    },
    {
        "IDcode": 604,
        "title": "[かぱ] 小麦色の微熱 (コミック エグゼ 26)",
        "cover": "https://telegra.ph/file/946c0ebca77da61bc8f1e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=604"
    },
    {
        "IDcode": 605,
        "title": "[ココアホリック (ユイザキカズヤ)] 甘喰みの巣",
        "cover": "https://telegra.ph/file/28b20ddd65ce0b479cf31.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=605"
    },
    {
        "IDcode": 606,
        "title": "[こしの] Ducky (COMIC BAVEL 2022年6月号)",
        "cover": "https://telegra.ph/file/eb75234ca3ad209b1ceb4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=606"
    },
    {
        "IDcode": 607,
        "title": "[はいとく先生] どのママが好き？～高橋家の場合～",
        "cover": "https://telegra.ph/file/d3e8b06084e11222a9e89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=607"
    },
    {
        "IDcode": 608,
        "title": "[haku89] ナツメと性愛対決 (喫茶ステラと死神の蝶)   [進行中]",
        "cover": "https://telegra.ph/file/0640c8ee0435d25e3ecf4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=608"
    },
    {
        "IDcode": 609,
        "title": "(C99) [SKK (消火器)] SKK's Skeb COLLECTION (少女前線)",
        "cover": "https://telegra.ph/file/1b72f61a42c9329a8914a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=609"
    },
    {
        "IDcode": 610,
        "title": "[黒漆 (メロンブックス)] Plant 1",
        "cover": "https://telegra.ph/file/94303df4856cbad097612.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=610"
    },
    {
        "IDcode": 611,
        "title": "[絵援隊 (酒呑童子)] 母性本能暴走スイッチ",
        "cover": "https://telegra.ph/file/95d935bd58d9c07591194.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=611"
    },
    {
        "IDcode": 612,
        "title": "[藤丸] これからの君に (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/572f72e8d86c4982c632d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=612"
    },
    {
        "IDcode": 613,
        "title": "[ナズナソフト (桂ハルフミ)] そして、彼女は僕のものになった・・・。",
        "cover": "https://telegra.ph/file/31598982a0bb28af6b199.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=613"
    },
    {
        "IDcode": 614,
        "title": "[ゐちぼっち (一宮夕羽)] 悪徳医淫",
        "cover": "https://telegra.ph/file/1f9df812e3fa5e4cebf65.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=614"
    },
    {
        "IDcode": 615,
        "title": "[ひっさつくん] Swap on the Beach!! (ウリ売春JK)",
        "cover": "https://telegra.ph/file/bb82963df5dcf929aa1fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=615"
    },
    {
        "IDcode": 616,
        "title": "[丁髷帝国 (まげきち)] 憧れの姉ちゃんは風俗堕ちして親父に抱かれる",
        "cover": "https://telegra.ph/file/d9ba3104c4cfb5e2e56b6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=616"
    },
    {
        "IDcode": 617,
        "title": "[うさおとめ] シスターのかくしごと (ダンジョン攻略はSEXで!! VOL.5)",
        "cover": "https://telegra.ph/file/01cd9151ab133752126ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=617"
    },
    {
        "IDcode": 618,
        "title": "[Yimao] OC 1-6",
        "cover": "https://telegra.ph/file/c5f86255f1bd5e22231c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=618"
    },
    {
        "IDcode": 619,
        "title": "[アヘ丸] 裏切りの爆豪ママ (僕のヒーローアカデミア)",
        "cover": "https://telegra.ph/file/4c80509274029d2f318af.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=619"
    },
    {
        "IDcode": 620,
        "title": "(C84) [カナリヤバいカナリヤ (まゃ～吾郎)] 神触操姫 (神羅万象)",
        "cover": "https://telegra.ph/file/35a5c483179e37fe36356.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=620"
    },
    {
        "IDcode": 621,
        "title": "[シイナ] シスコイ～姉弟ヒトツ屋根の下～ 【合本版】",
        "cover": "https://telegra.ph/file/3f9584780e23701803846.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=621"
    },
    {
        "IDcode": 622,
        "title": "[犬上いの字] 蜜月とムーンライト (COMIC アンスリウム 2022年2月号)",
        "cover": "https://telegra.ph/file/090b2a977ade1ce5c87d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=622"
    },
    {
        "IDcode": 623,
        "title": "[7連鎖 (荒巻越前)] おっきなさおりちゃんは不器用にえろい",
        "cover": "https://telegra.ph/file/8a84e8a5afdcecfc15105.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=623"
    },
    {
        "IDcode": 624,
        "title": "[翁計画 (師走の翁)] 私をエッチの仲間に入れてください",
        "cover": "https://telegra.ph/file/938bbb9c0849969ae4298.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=624"
    },
    {
        "IDcode": 625,
        "title": "[やっそん義之] あなたといっしょにイきたい",
        "cover": "https://telegra.ph/file/789ef04506dbb737333e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=625"
    },
    {
        "IDcode": 626,
        "title": "[日吉ハナ] 廻逢のケモノ",
        "cover": "https://telegra.ph/file/4ca0ba8baaecf78752db8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=626"
    },
    {
        "IDcode": 627,
        "title": "[いわお] マッサージを受ける織姫 といろいろ (ブリーチ)",
        "cover": "https://telegra.ph/file/fddeb1baef19ebc63f6da.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=627"
    },
    {
        "IDcode": 628,
        "title": "[アンソロジー] 二次元コミックマガジン クレイジーサイコレズ求愛陵辱 Vol.2   [ページ欠落]",
        "cover": "https://telegra.ph/file/247ef3831657d53a416eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=628"
    },
    {
        "IDcode": 629,
        "title": "(C77) (同人CG集) [SHRINE(人丸)] 幻想生物図鑑 7 (死地)",
        "cover": "https://telegra.ph/file/1b290fda699ca3d2fcbe5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=629"
    },
    {
        "IDcode": 630,
        "title": "[STUDIOふあん (来鈍)] 委員長の催眠海水浴",
        "cover": "https://telegra.ph/file/bb3ec1b731c68237cb5c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=630"
    },
    {
        "IDcode": 631,
        "title": "(C99) [みやぜん] ラヴェンツァと、特別な関係になった… (ペルソナ5)",
        "cover": "https://telegra.ph/file/ec3071bea394f8722d086.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=631"
    },
    {
        "IDcode": 632,
        "title": "[Pixiv] 奶凍 (7805672)",
        "cover": "https://telegra.ph/file/1f33b3b992039b3d8b092.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=632"
    },
    {
        "IDcode": 633,
        "title": "[いけめる] フルタ",
        "cover": "https://telegra.ph/file/1290d6ece8f3e9899a8d6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=633"
    },
    {
        "IDcode": 634,
        "title": "(C89) [SHRINE (人丸)] 幻想生物図鑑 14(獣屍) [角虫国国都汉化]",
        "cover": "https://telegra.ph/file/6d6ae4d680b2481529961.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=634"
    },
    {
        "IDcode": 635,
        "title": "(C86) [MTSP (Jin)] 橘さん家ノ男性事情 まとめ版  [カラー化]  (超分辨率)",
        "cover": "https://telegra.ph/file/8aeb98b5a68804c3a4f45.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=635"
    },
    {
        "IDcode": 636,
        "title": "[あくま] 催眠代行業者～あなたの恨みはらします～ 第2話",
        "cover": "https://telegra.ph/file/82ad49f2b2005f71a2b79.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=636"
    },
    {
        "IDcode": 637,
        "title": "[もふもふ苑 (空色れん)] 【02】ミリスフィア様がお口で…❤ リアクション 5",
        "cover": "https://telegra.ph/file/99f74aded4b65050eaa27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=637"
    },
    {
        "IDcode": 638,
        "title": "[さくらがーでん (しろすず)] かるでああうとどあちゃれんじ アビーちゃんと一緒3 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/ea66bc67c902cc5c627d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=638"
    },
    {
        "IDcode": 639,
        "title": "[イコール] カラオケボックスで隣のJC2人組と乱入即ハメ",
        "cover": "https://telegra.ph/file/3a30cfe22d27d52e5f3ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=639"
    },
    {
        "IDcode": 640,
        "title": "[織田non] NON VIRGIN",
        "cover": "https://telegra.ph/file/966cc89b120b4ac23d328.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=640"
    },
    {
        "IDcode": 641,
        "title": "[ニコライの嫁] 捨てる紙あれば拾う紙あり (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/6e3733ec38067fc983fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=641"
    },
    {
        "IDcode": 642,
        "title": "[をかだ|膕舐郎] ふたなり学園肉便器科 二年生",
        "cover": "https://telegra.ph/file/008451400393ba92fbdae.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=642"
    },
    {
        "IDcode": 643,
        "title": "[Fatalpulse (朝凪)] VictimGirls19 JEZEBEL AMAZONES (ダンジョンに出会いを求めるのは間違っているだろうか)",
        "cover": "https://telegra.ph/file/ff071a76c431027308a47.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=643"
    },
    {
        "IDcode": 644,
        "title": "[愛沢精肉店 (愛沢アンジ)] クマとトラ〜体格差幼馴染のはじめてから、獣になる2日間まで〜",
        "cover": "https://telegra.ph/file/11a449cf7faa2b1327907.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=644"
    },
    {
        "IDcode": 645,
        "title": "[Pixiv] _ (9349834)",
        "cover": "https://telegra.ph/file/65192069e26b0474a3852.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=645"
    },
    {
        "IDcode": 646,
        "title": "[YUE C] 蛍とウェンディの敗北-ヒルチャールの肉便器- (原神)",
        "cover": "https://telegra.ph/file/a49cb6f3389eb8949ecb5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=646"
    },
    {
        "IDcode": 647,
        "title": "[ラブリテス (ちくわぶ汰)] 興味本位で援交始めた清楚な巨乳JKを大人チンポで生ハメ種付けしまくってセックス中毒にする",
        "cover": "https://telegra.ph/file/8b98e0c24f11ba7755f6c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=647"
    },
    {
        "IDcode": 648,
        "title": "[Pixiv] Leevan (47042747)",
        "cover": "https://telegra.ph/file/1149872a7576d2fa382ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=648"
    },
    {
        "IDcode": 649,
        "title": "[月夜鴉 (将)] 淫堕マリオネット ～女捜査官洗脳改造～",
        "cover": "https://telegra.ph/file/93e6da104ce95ea28b642.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=649"
    },
    {
        "IDcode": 650,
        "title": "[Paint Lab (L's)] ふたなりナースの肉便器・調教診察2",
        "cover": "https://telegra.ph/file/8339073d2f6cc34eb2ff1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=650"
    },
    {
        "IDcode": 651,
        "title": "[竜太] 征欲～性に溺れるオンナたち～",
        "cover": "https://telegra.ph/file/629a55b1eb83c6dc0e52e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=651"
    },
    {
        "IDcode": 652,
        "title": "[五月猫] 性なる処女たち",
        "cover": "https://telegra.ph/file/5102cb91328da2c975348.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=652"
    },
    {
        "IDcode": 653,
        "title": "[ガロウド] 菓子鬼こちら",
        "cover": "https://telegra.ph/file/b1ad36218fd2a4f9d52d5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=653"
    },
    {
        "IDcode": 654,
        "title": "(C75) [Radical Dream (黒井弘騎、竜胆)] 粘獄のリーゼ appetizer",
        "cover": "https://telegra.ph/file/9c2a8d55678a79744f024.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=654"
    },
    {
        "IDcode": 655,
        "title": "[papuka] 癒し系保健の先生が僕の友達に寝取られるまで",
        "cover": "https://telegra.ph/file/0a990a2a2c07d5df3a40f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=655"
    },
    {
        "IDcode": 656,
        "title": "[radio tower (ラジオ先生)] 強制催眠レイプで自由の国のメスを犯し尽くす (原神)",
        "cover": "https://telegra.ph/file/e0bed0671d78faa001cd4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=656"
    },
    {
        "IDcode": 657,
        "title": "[Pixiv] 自己会飞的手里剑 (418324)",
        "cover": "https://telegra.ph/file/f68ac334f4eb88a37f15f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=657"
    },
    {
        "IDcode": 658,
        "title": "[もんぷち] うちの可愛い同居人さん",
        "cover": "https://telegra.ph/file/cefd3237239508a745272.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=658"
    },
    {
        "IDcode": 659,
        "title": "[黒越陽] らぶぱい 私のおっぱい好きですか?",
        "cover": "https://telegra.ph/file/4d1597a1c8ae28dd064ac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=659"
    },
    {
        "IDcode": 660,
        "title": "[稍日向] 明日、世界が終わるなら",
        "cover": "https://telegra.ph/file/9fd9a7a7aa51782b598ea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=660"
    },
    {
        "IDcode": 661,
        "title": "[七ツ田] さよならブランケット (COMIC 快楽天 2021年2月号)",
        "cover": "https://telegra.ph/file/e948e20b9d9b025c95a11.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=661"
    },
    {
        "IDcode": 662,
        "title": "[大伴ヤキ] アナタのお願い (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/90d2a7efebfe6b3045638.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=662"
    },
    {
        "IDcode": 663,
        "title": "(C94) [SHRINE (人丸)] 幻想生物図鑑 19(獣狂) [角虫国国都汉化]",
        "cover": "https://telegra.ph/file/8c5825a983a04652e0a8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=663"
    },
    {
        "IDcode": 664,
        "title": "[自家太郎] 陸上部ちゃん",
        "cover": "https://telegra.ph/file/f1414987526bb6b399784.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=664"
    },
    {
        "IDcode": 665,
        "title": "[冷色调咖啡] 原神 - 凝光篇 (原神)",
        "cover": "https://telegra.ph/file/fc73bb3811214c4f7ca04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=665"
    },
    {
        "IDcode": 666,
        "title": "[玉ぼん] 純血少女と雑種犬。 (COMIC 快楽天 2022年6月号)",
        "cover": "https://telegra.ph/file/1083ef240e0187b36a975.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=666"
    },
    {
        "IDcode": 667,
        "title": "[規制当局 (リヒャルト・バフマン)] 放課後代理妻3 卒業式は妊婦で…",
        "cover": "https://telegra.ph/file/cc175c1bf78688d400c0a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=667"
    },
    {
        "IDcode": 668,
        "title": "[奥ヴぁ] 鬼真羅",
        "cover": "https://telegra.ph/file/6ecff2a9e48b4039d83b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=668"
    },
    {
        "IDcode": 669,
        "title": "[荒井啓] 群青群像",
        "cover": "https://telegra.ph/file/19e960fcba255bba32b15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=669"
    },
    {
        "IDcode": 670,
        "title": "[Pixiv] 触服D (21403274)",
        "cover": "https://telegra.ph/file/94fcf3ca06a9c0df9636f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=670"
    },
    {
        "IDcode": 671,
        "title": "(C99) [難民ふぇすてぃばる (ぎヴちょこ)] 意識されないことをいいことに人前でこいしちゃんと致してみた (東方Project)",
        "cover": "https://telegra.ph/file/4c64615b5175bf3dfe84d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=671"
    },
    {
        "IDcode": 672,
        "title": "[大山樹奈] ヤりすぎバックシュート (COMIC 快楽天ビースト 2022年3月号)",
        "cover": "https://telegra.ph/file/55db0956b5f1ef8dcd76c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=672"
    },
    {
        "IDcode": 673,
        "title": "[Blue Mage (あおいまなぶ)] ハニバニ (ブルーアーカイブ)  [2022年1月30日]",
        "cover": "https://telegra.ph/file/d328a2fa394988a1ac22f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=673"
    },
    {
        "IDcode": 674,
        "title": "(C94) [Apple Effect (紫御)] 俺の幼馴染が可愛くないわけがない (みつどもえ)",
        "cover": "https://telegra.ph/file/8627ec04040d27489c2cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=674"
    },
    {
        "IDcode": 675,
        "title": "[もふもふ苑 (空色れん)] まゆ様と正常位で…❤",
        "cover": "https://telegra.ph/file/fbfacfab15ae0194fecff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=675"
    },
    {
        "IDcode": 676,
        "title": "[ハードボイルドよし子] おしかけサンシャワー",
        "cover": "https://telegra.ph/file/7ab4e853714bbc2ce0831.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=676"
    },
    {
        "IDcode": 677,
        "title": "[志峨丘トウキ]幫我破處的淫蕩肉體 煩請收下我的第一次",
        "cover": "https://telegra.ph/file/61b50b79069b3da9f3b0e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=677"
    },
    {
        "IDcode": 678,
        "title": "[柴崎ショージ]特別的每一天",
        "cover": "https://telegra.ph/file/59ebf30fb380c921aaab3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=678"
    },
    {
        "IDcode": 679,
        "title": "(C93) [平成茶々丸堂 (N.O-茶々丸)] 帰宅巣挿",
        "cover": "https://telegra.ph/file/df8d358031a9d003d2b26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=679"
    },
    {
        "IDcode": 680,
        "title": "[えいとまん] 本能",
        "cover": "https://telegra.ph/file/b59e30205f71081d1f8fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=680"
    },
    {
        "IDcode": 681,
        "title": "(紅楼夢17) [桃栗万年 (てぃあまと)] 風見幽香に搾られたい! (東方Project)",
        "cover": "https://telegra.ph/file/1239fdd1496f0b72f9c04.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=681"
    },
    {
        "IDcode": 682,
        "title": "[珊瑚] 地味でビッチな女の売春",
        "cover": "https://telegra.ph/file/5c098fcd034aa2945d853.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=682"
    },
    {
        "IDcode": 683,
        "title": "[みれい] 灯織差分🌧 (アイドルマスター シャイニーカラーズ)",
        "cover": "https://telegra.ph/file/8840a4c86052a16f50f3f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=683"
    },
    {
        "IDcode": 684,
        "title": "(C99) [Fatima Cigarette (滝まくら)] 先生の赤ちゃんミルクはアリスの人工子宮で温めます! (ブルーアーカイブ)",
        "cover": "https://telegra.ph/file/294259cf168e732b37539.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=684"
    },
    {
        "IDcode": 685,
        "title": "[蒼山哲]ドハマりママ～息子の親友とヤリたい牝～ (ANGEL 倶楽部  2022年3月号)",
        "cover": "https://telegra.ph/file/1975f020e090ab2a56bb1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=685"
    },
    {
        "IDcode": 686,
        "title": "[冬乃よる] 君の奥まで全部、みせて。 1-4",
        "cover": "https://telegra.ph/file/6318dbfb4105837faf4ed.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=686"
    },
    {
        "IDcode": 687,
        "title": "[ふぇると工房 (Flugel)] メイドのG36 (少女前線)",
        "cover": "https://telegra.ph/file/5944414c231280b3be9ff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=687"
    },
    {
        "IDcode": 688,
        "title": "[あんこまん] ジャンヌオルタinセックスしないと出られない部屋 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/ae270084ca175c9027723.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=688"
    },
    {
        "IDcode": 689,
        "title": "(C99) [Wanderlust (cuboon)] BALTIX (アズールレーン)",
        "cover": "https://telegra.ph/file/049d6c841816ecb58f646.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=689"
    },
    {
        "IDcode": 690,
        "title": "[MANA] 八重神子 1-4 (原神)",
        "cover": "https://telegra.ph/file/bc0c1bc1cee474170abd3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=690"
    },
    {
        "IDcode": 691,
        "title": "[灯色の研究室 (灯問)] 援交彼女と見学会",
        "cover": "https://telegra.ph/file/442f6e870d5f896eff277.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=691"
    },
    {
        "IDcode": 692,
        "title": "[草野郎] 未亡人母娘と上級国民 IF「下剋上」END",
        "cover": "https://telegra.ph/file/1ef1799073b264dfa2032.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=692"
    },
    {
        "IDcode": 693,
        "title": "[メメ屋 (メメ50)] 性癖マッチングアプリ ズボプリ",
        "cover": "https://telegra.ph/file/52854acc193d6df058f24.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=693"
    },
    {
        "IDcode": 694,
        "title": "[ドラチェフ] 桃子先生の楽しい性教育 (交尾のお時間)",
        "cover": "https://telegra.ph/file/b6b6e79a1d769861a446a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=694"
    },
    {
        "IDcode": 695,
        "title": "[栗原ケンシロウ] お姉ちゃんは心配性 (コミック エグゼ 26)  [カラー化]",
        "cover": "https://telegra.ph/file/03621615270d21b7ba17f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=695"
    },
    {
        "IDcode": 696,
        "title": "(C82) [こはねと (桐野いつき)] 縁日に行ってみたら憧れのお姉さんが…",
        "cover": "https://telegra.ph/file/c96a4431c55cb8bb296c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=696"
    },
    {
        "IDcode": 697,
        "title": "[OrangeMaru (雨)] 暗転 (Fate/Grand Order)",
        "cover": "https://telegra.ph/file/9d35b16bd4f48f457cb5a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=697"
    },
    {
        "IDcode": 698,
        "title": "(C87) [ハイパーピンチ (clover)] ホシノ・フミナ セカイ君専用W／Cです! (ガンダムビルドファイターズトライ)",
        "cover": "https://telegra.ph/file/94c93a39b657d7b221ff7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=698"
    },
    {
        "IDcode": 699,
        "title": "[ゆずや (ユズハ)] 君のものになる前に",
        "cover": "https://telegra.ph/file/ffc861740e7d08a15822a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=699"
    },
    {
        "IDcode": 700,
        "title": "[オオカミうお] 覗く人、覗かれる人 (ふくらみかけの見せたがり願望)",
        "cover": "https://telegra.ph/file/f16b79026806a6b78ac75.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=700"
    }
];
