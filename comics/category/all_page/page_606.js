// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 6501,
        "title": "マネジ！キスします!! (字余り)",
        "cover": "https://telegra.ph/file/f13f5aeace78c3da17641.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6501"
    },
    {
        "IDcode": 6502,
        "title": "こころのかんけい",
        "cover": "https://telegra.ph/file/1c3f8083675c5e97b498e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6502"
    },
    {
        "IDcode": 6503,
        "title": "Русский語クラスの劣等生",
        "cover": "https://telegra.ph/file/eee4b72c0d9154d447d5b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6503"
    },
    {
        "IDcode": 6504,
        "title": "MOUSOUみにしあたー35",
        "cover": "https://telegra.ph/file/da83fe692fa7e937bf91c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6504"
    },
    {
        "IDcode": 6505,
        "title": "Midnight Combat! (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/1d92982495b119eba5c9d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6505"
    },
    {
        "IDcode": 6506,
        "title": "朝潮ちゃんはがんばり屋さん (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/f887cb602774d709a4d15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6506"
    },
    {
        "IDcode": 6507,
        "title": "ご主人様おっ!ぱいですよ！！ (Fate／EXTRA)",
        "cover": "https://telegra.ph/file/38b584a62d28bb13d3203.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6507"
    },
    {
        "IDcode": 6508,
        "title": "幻想奇獣空間 (東方Project)",
        "cover": "https://telegra.ph/file/0ad9efd04874c1b319c28.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6508"
    },
    {
        "IDcode": 6509,
        "title": "秘書艦としてのおつとめ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/6ff7ce732a87dbd7dac14.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6509"
    },
    {
        "IDcode": 6510,
        "title": "おもてなし (IS＜インフィニット・ストラトス＞)",
        "cover": "https://telegra.ph/file/5449b7a6858e8b55d2004.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6510"
    },
    {
        "IDcode": 6511,
        "title": "従順洋艦羽黒 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/1c545884185b7e4819a48.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6511"
    },
    {
        "IDcode": 6512,
        "title": "妹〉〉〉兄",
        "cover": "https://telegra.ph/file/da630aa5f979857e0b856.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6512"
    },
    {
        "IDcode": 6513,
        "title": "ネコカノジョ (カゲロウプロジェクト)",
        "cover": "https://telegra.ph/file/e6f90d917ec6dcae80acb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6513"
    },
    {
        "IDcode": 6514,
        "title": "りぐるちゃん応援せっくす(東方Project)",
        "cover": "https://telegra.ph/file/e9aa4a0cda7dfb01307b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6514"
    },
    {
        "IDcode": 6515,
        "title": "しこしこーまかん (東方Project)",
        "cover": "https://telegra.ph/file/3ecf9df901c65902b67c7.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6515"
    },
    {
        "IDcode": 6516,
        "title": "アクアさんは、いっぱいかわいい (スーパーロボット大戦MX)",
        "cover": "https://telegra.ph/file/122390528d8952f888765.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6516"
    },
    {
        "IDcode": 6517,
        "title": "貞子本 (リング)",
        "cover": "https://telegra.ph/file/36b1c2a1c7d3956e21a2e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6517"
    },
    {
        "IDcode": 6518,
        "title": "メイドinチャイナ リベンジ! (東方Project)",
        "cover": "https://telegra.ph/file/88832c3ccf278e91985cb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6518"
    },
    {
        "IDcode": 6519,
        "title": "女装息子 Vol.01",
        "cover": "https://telegra.ph/file/36158d56cd66fcdee241e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6519"
    },
    {
        "IDcode": 6520,
        "title": "もうそうしたり追尾したりするツインテール",
        "cover": "https://telegra.ph/file/6e15722a4578f9c030501.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6520"
    },
    {
        "IDcode": 6521,
        "title": "総領娘様と僕。 (東方Project)",
        "cover": "https://telegra.ph/file/726feb91297d77f6b172e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6521"
    },
    {
        "IDcode": 6522,
        "title": "もう提督の側に戻れない… (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/23617f3e45e73ff26d499.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6522"
    },
    {
        "IDcode": 6523,
        "title": "文ちゃんからエッチなサービスしてもらった (東方Project)",
        "cover": "https://telegra.ph/file/205d003480a7884b72d1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6523"
    },
    {
        "IDcode": 6524,
        "title": "プリあれ7-百合キュアデリバリー- (ドキドキ!プリキュア)",
        "cover": "https://telegra.ph/file/f10116a0d889f99042064.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6524"
    },
    {
        "IDcode": 6525,
        "title": "高雄お姉さんと入渠! (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/e657e8ce6627d227a733f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6525"
    },
    {
        "IDcode": 6526,
        "title": "ドーナツ「過」現象! (VOCALOID)",
        "cover": "https://telegra.ph/file/8fb7aec5b2a240bd2627c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6526"
    },
    {
        "IDcode": 6527,
        "title": "ソードアート・オンライン ホロウ・センシュアル (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/344eba54321623759e19b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6527"
    },
    {
        "IDcode": 6528,
        "title": "大和撫子 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/c5c24930aabc952e611b9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6528"
    },
    {
        "IDcode": 6529,
        "title": "大和撫子 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/1bb870f0972458663139a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6529"
    },
    {
        "IDcode": 6530,
        "title": "ガハラ語 (化物語)",
        "cover": "https://telegra.ph/file/bd269634690ab6e8f07c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6530"
    },
    {
        "IDcode": 6531,
        "title": "無題 (RΩ HARD CORE) (ラグナロクオンライン)",
        "cover": "https://telegra.ph/file/dfb5081a971f7fd693ab7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6531"
    },
    {
        "IDcode": 6532,
        "title": "海ノ底 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/784f4e96a4b8a474e9bbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6532"
    },
    {
        "IDcode": 6533,
        "title": "秦ココろコねくと。 (東方Project)",
        "cover": "https://telegra.ph/file/fbef074d79b08ec1b9ba8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6533"
    },
    {
        "IDcode": 6534,
        "title": "みょんなお使い (東方Project)",
        "cover": "https://telegra.ph/file/096e09da9711c83a2f1e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6534"
    },
    {
        "IDcode": 6535,
        "title": "The Holiday (東方Project)",
        "cover": "https://telegra.ph/file/53776fb710f97e5f627b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6535"
    },
    {
        "IDcode": 6536,
        "title": "リン子イキマス!! (ガンダムビルドファイターズ)",
        "cover": "https://telegra.ph/file/01ac87b2da28cf748160f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6536"
    },
    {
        "IDcode": 6537,
        "title": "秘書艦の大鳳さん (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/ba3945752852f13f46c4f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6537"
    },
    {
        "IDcode": 6538,
        "title": "艦ドルマスター (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/d8dbcc40cde39fec632b3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6538"
    },
    {
        "IDcode": 6539,
        "title": "エリタマ！ eri love middleage",
        "cover": "https://telegra.ph/file/78607a019dbbf36b66506.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6539"
    },
    {
        "IDcode": 6540,
        "title": "NIPPON FUTA OL",
        "cover": "https://telegra.ph/file/a190f9a55042bcdf8a2fd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6540"
    },
    {
        "IDcode": 6541,
        "title": "T MOON COMPLEX APO (Fate Apocrypha)",
        "cover": "https://telegra.ph/file/32fd1e6b08b1ab01dfb4e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6541"
    },
    {
        "IDcode": 6542,
        "title": "画礫17 (よろず)",
        "cover": "https://telegra.ph/file/8b60da1917eef08be6afb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6542"
    },
    {
        "IDcode": 6543,
        "title": "9SEX p.a.r.t.y -hard drug lesson-",
        "cover": "https://telegra.ph/file/d60118ff114e4ea16adb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6543"
    },
    {
        "IDcode": 6544,
        "title": "新妻希さんとひたすらイチャイチャラブラブセックスする本",
        "cover": "https://telegra.ph/file/13575bc2fcf2af34e50a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6544"
    },
    {
        "IDcode": 6545,
        "title": "∞Oooverheat↑ (無限大オーーーバーヒート)",
        "cover": "https://telegra.ph/file/41823f554712af5c2b096.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6545"
    },
    {
        "IDcode": 6546,
        "title": "執務室での小さなバカンス (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/74cfd1e895973750e26a6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6546"
    },
    {
        "IDcode": 6547,
        "title": "D.L. action 88 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/fb87cf112e78f125d419e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6547"
    },
    {
        "IDcode": 6548,
        "title": "新妻希さんとひたすらイチャイチャラブラブセックスする本",
        "cover": "https://telegra.ph/file/2abbb3553b7d2dda2299a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6548"
    },
    {
        "IDcode": 6549,
        "title": "呂玲綺無惨 (真·三國無双シリーズ)",
        "cover": "https://telegra.ph/file/1e54b745dcbccedfdc4b7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6549"
    },
    {
        "IDcode": 6550,
        "title": "栄妖がほしいの (東方Project)",
        "cover": "https://telegra.ph/file/eaf001ddd41f34878c89a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6550"
    },
    {
        "IDcode": 6551,
        "title": "最近の駆逐艦は発育が良い (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/0e037eff0faffa1847204.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6551"
    },
    {
        "IDcode": 6552,
        "title": "GREEN DAY (美少女戦士セーラームーン)",
        "cover": "https://telegra.ph/file/7d32700735d80e8eb40a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6552"
    },
    {
        "IDcode": 6553,
        "title": "大きな提督と溢れる格納庫 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/b19549ae12e6b8d859882.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6553"
    },
    {
        "IDcode": 6554,
        "title": "高雄型靴下本 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/85a228398f1ce4586c120.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6554"
    },
    {
        "IDcode": 6555,
        "title": "好き、だって思いがあふれてはみ出ちゃうから……。 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/314b2d7321c64cdaee47d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6555"
    },
    {
        "IDcode": 6556,
        "title": "二三七年 (新世界より)",
        "cover": "https://telegra.ph/file/5336568b36788bc1a9118.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6556"
    },
    {
        "IDcode": 6557,
        "title": "白濁液幻想 ギャンバン・マーチ",
        "cover": "https://telegra.ph/file/0e924f3e7dbd64310b8cd.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6557"
    },
    {
        "IDcode": 6558,
        "title": "山姫ノ繭",
        "cover": "https://telegra.ph/file/75ba18adbd105ac75dff9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6558"
    },
    {
        "IDcode": 6559,
        "title": "C9-12 ワルイユメ (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/dc5c6d104ef6b80a07d86.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6559"
    },
    {
        "IDcode": 6560,
        "title": "阿賀野はてーとくだい好きよ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/a12ad0e1bbb433b0573c8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6560"
    },
    {
        "IDcode": 6561,
        "title": "アスカトゥエンティエイト (新世紀エヴァンゲリオン)",
        "cover": "https://telegra.ph/file/8ffb350b44c8e4b921347.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6561"
    },
    {
        "IDcode": 6562,
        "title": "はいてないの？えりな樣っ！",
        "cover": "https://telegra.ph/file/da0db2441b52cb5e136d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6562"
    },
    {
        "IDcode": 6563,
        "title": "スキンシップは大切じゃん (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/4b502d497eff35c4fe276.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6563"
    },
    {
        "IDcode": 6564,
        "title": "かな子のふわふわダイエット",
        "cover": "https://telegra.ph/file/9a0d1330a2c1ea54e6a46.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6564"
    },
    {
        "IDcode": 6565,
        "title": "風俗金星と恋愛木星 (美少女戦士セーラームーン)",
        "cover": "https://telegra.ph/file/2de404b06b4511a6e89d1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6565"
    },
    {
        "IDcode": 6566,
        "title": "ヲ級ちゃんカッコカリ (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/8208281945f950d2db641.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6566"
    },
    {
        "IDcode": 6567,
        "title": "ゴーヤを南の島まで連れてって!(艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/f3449283b2ca1f41d4ef8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6567"
    },
    {
        "IDcode": 6568,
        "title": "鈴谷と熊野と提督と(艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/41c448de3ad5d5202e9c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6568"
    },
    {
        "IDcode": 6569,
        "title": "鈴谷level110 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/f3a16dea5e237dbbce04c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6569"
    },
    {
        "IDcode": 6570,
        "title": "棺姫のカチューシャ (棺姫のチャイカ)",
        "cover": "https://telegra.ph/file/3077747d97b208751ed8e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6570"
    },
    {
        "IDcode": 6571,
        "title": "ほえ～るうぉっちんぐ! (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/0284884aeb466d6d7edd5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6571"
    },
    {
        "IDcode": 6572,
        "title": "いもうと身体検査",
        "cover": "https://telegra.ph/file/65a9f70b899549531e945.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6572"
    },
    {
        "IDcode": 6573,
        "title": "Sloth Life (けいおん!)",
        "cover": "https://telegra.ph/file/9bcc438ea24cf5040f984.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6573"
    },
    {
        "IDcode": 6574,
        "title": "正規空母の姦通事情 改 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/7752eb2407dace6bbbdf8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6574"
    },
    {
        "IDcode": 6575,
        "title": "Call me, Alice ! (東方Project)",
        "cover": "https://telegra.ph/file/c029cbc5e880d881bfe83.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6575"
    },
    {
        "IDcode": 6576,
        "title": "兄妹Distance (この中に1人、妹がいる!)",
        "cover": "https://telegra.ph/file/09943a30b20f87d1964e4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6576"
    },
    {
        "IDcode": 6577,
        "title": "MONOPOLIZE SINON (ソードアート・オンライン)",
        "cover": "https://telegra.ph/file/8653f4c9d4eab738d8c19.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6577"
    },
    {
        "IDcode": 6578,
        "title": "明石と夜をあかしたい (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/2d2c68d092f870732a60d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6578"
    },
    {
        "IDcode": 6579,
        "title": "ちとちよ姉妹の運用について (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/d7ce53cc77f92c9036669.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6579"
    },
    {
        "IDcode": 6580,
        "title": "セクシャリティ×サービス3 (サーバント×サービス)",
        "cover": "https://telegra.ph/file/ea72474adb6314cb9d1bc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6580"
    },
    {
        "IDcode": 6581,
        "title": "ライダーさんと縦セタ。 (Fate hollow ataraxia)",
        "cover": "https://telegra.ph/file/8a6278d95f274f63e8fa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6581"
    },
    {
        "IDcode": 6582,
        "title": "MAKI LESSON (ラブライブ!)",
        "cover": "https://telegra.ph/file/ee72217b3b6741f1f443d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6582"
    },
    {
        "IDcode": 6583,
        "title": "提督の檻 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/332c6c2d0ea5f46e1b0e3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6583"
    },
    {
        "IDcode": 6584,
        "title": "天津風 新婚初夜日誌 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/ac41c46069b8936428631.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6584"
    },
    {
        "IDcode": 6585,
        "title": "401-ひと夏の過ち- (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/920fcdf03f04ff53c8225.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6585"
    },
    {
        "IDcode": 6586,
        "title": "MOUSOU THEATER44 (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/a8b4cb57a43e67e637d36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6586"
    },
    {
        "IDcode": 6587,
        "title": "提督の童貞は赤城が美味しくいただきました",
        "cover": "https://telegra.ph/file/98f2a6a6fbd1e921b2338.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6587"
    },
    {
        "IDcode": 6588,
        "title": "頬の薄紅 褪せぬ間に",
        "cover": "https://telegra.ph/file/4cd123ea6d71f2afd643b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6588"
    },
    {
        "IDcode": 6589,
        "title": "SAOff SUMMER (ソードアート·オンライン)",
        "cover": "https://telegra.ph/file/caf3a26b03aaa83de5270.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6589"
    },
    {
        "IDcode": 6590,
        "title": "DARK BLUE MOON (美少女戦士セーラームーン)",
        "cover": "https://telegra.ph/file/a8981b72ed1ff89b96dbb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6590"
    },
    {
        "IDcode": 6591,
        "title": "Okodukai no Hani de Asobimashou",
        "cover": "https://telegra.ph/file/100a016798b5149bccbdf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6591"
    },
    {
        "IDcode": 6592,
        "title": "提督管理 (艦隊これくしょん -艦これ-)",
        "cover": "https://telegra.ph/file/cf4ccf0d99a63f5806b91.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6592"
    },
    {
        "IDcode": 6593,
        "title": "青子BLUE5 後編 (魔法使いの夜)",
        "cover": "https://telegra.ph/file/e130335c30ca7a5f7498c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6593"
    },
    {
        "IDcode": 6594,
        "title": "大和とケッコンしますた! (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/88eae0719517089652245.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6594"
    },
    {
        "IDcode": 6595,
        "title": "天津風ちゃんと (艦隊これくしょん-艦これ-)",
        "cover": "https://telegra.ph/file/3165a70cf333664ef87c3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6595"
    },
    {
        "IDcode": 6596,
        "title": "さまよえるイド (東方Project)",
        "cover": "https://telegra.ph/file/3ea6cf21ea2cdd7f7296b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6596"
    },
    {
        "IDcode": 6597,
        "title": "桃色の果実の散花 (東方Project)",
        "cover": "https://telegra.ph/file/8f0f171e0d1b67d3e7056.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6597"
    },
    {
        "IDcode": 6598,
        "title": "銀河系赤○祭 (宇宙戦艦ヤマト2199)",
        "cover": "https://telegra.ph/file/b660fb52f3a9db7dd67d0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6598"
    },
    {
        "IDcode": 6599,
        "title": "悪魔でイけにえ! (東方Project)",
        "cover": "https://telegra.ph/file/910be84bd661d1fb9d11c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6599"
    },
    {
        "IDcode": 6600,
        "title": "小さな屋根の下 (ぱにぽにだっしゅ！)",
        "cover": "https://telegra.ph/file/4163ac3d02e772ac2edd8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6600"
    }
];
