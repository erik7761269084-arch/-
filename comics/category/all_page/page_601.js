// 每个对象包含：title、cover、url
const PAGE_DATA = [
    {
        "IDcode": 6001,
        "title": "[けものの★] シビりあん・コントロール (DOGGY♥MAGGY♥)",
        "cover": "https://telegra.ph/file/a787ab0c8614ee1944415.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6001"
    },
    {
        "IDcode": 6002,
        "title": "[椎名波] ある姉妹愛のかたち",
        "cover": "https://telegra.ph/file/6bd806d7d79a606b4e05b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6002"
    },
    {
        "IDcode": 6003,
        "title": "[みぞね] 妖のおもてなし",
        "cover": "https://telegra.ph/file/19526d0799633e26dc733.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6003"
    },
    {
        "IDcode": 6004,
        "title": "[小島紗] 神山さんと僕",
        "cover": "https://telegra.ph/file/eba555be48bfdfbef9e67.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6004"
    },
    {
        "IDcode": 6005,
        "title": "[中田モデム] のぞきサプライズ!",
        "cover": "https://telegra.ph/file/6acbb5d5fdeb4e6512621.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6005"
    },
    {
        "IDcode": 6006,
        "title": "[メネア・ザ・ドッグ] ピナパコ",
        "cover": "https://telegra.ph/file/7323418af8120ee004512.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6006"
    },
    {
        "IDcode": 6007,
        "title": "[焼肉キング] 赤い糸の呪い",
        "cover": "https://telegra.ph/file/a02ec2965d44d90687208.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6007"
    },
    {
        "IDcode": 6008,
        "title": "[GEKO] 堕ちた優等生 -皐月-",
        "cover": "https://telegra.ph/file/e7823b2c084b317dd2165.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6008"
    },
    {
        "IDcode": 6009,
        "title": "[橘由宇] 凹凸カ・ン・ケ・イ",
        "cover": "https://telegra.ph/file/ef687be0d22ac1ab5ba36.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6009"
    },
    {
        "IDcode": 6010,
        "title": "[あるぷ] ごほうびプールサイド",
        "cover": "https://telegra.ph/file/4defbce54121b6906801f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6010"
    },
    {
        "IDcode": 6011,
        "title": "[みたらし侯成] 騙し会い",
        "cover": "https://telegra.ph/file/cbaf91dccb7c2e0c4db3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6011"
    },
    {
        "IDcode": 6012,
        "title": "[MTNO] 甘ブラ！",
        "cover": "https://telegra.ph/file/d09cfe8a0a8dc0f7170aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6012"
    },
    {
        "IDcode": 6013,
        "title": "[虎顎かずや] Follower Flower",
        "cover": "https://telegra.ph/file/2e7cc0978d5d858a83a03.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6013"
    },
    {
        "IDcode": 6014,
        "title": "[ゆきりたかし] おいでよ！遊女の里",
        "cover": "https://telegra.ph/file/5f75c2416e7c4385b8fc7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6014"
    },
    {
        "IDcode": 6015,
        "title": "[太平天極] 再会",
        "cover": "https://telegra.ph/file/132e69d1abba9b8489f3e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6015"
    },
    {
        "IDcode": 6016,
        "title": "[Kharisma Jati] Mother Fuckers",
        "cover": "https://telegra.ph/file/67e39fa7e5aa97282fab9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6016"
    },
    {
        "IDcode": 6017,
        "title": "[桑柘木] SKY high LOVE You",
        "cover": "https://telegra.ph/file/5b10fc63847500b8bc052.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6017"
    },
    {
        "IDcode": 6018,
        "title": "[芹沢] セックス スペル",
        "cover": "https://telegra.ph/file/572b251574a972e2884fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6018"
    },
    {
        "IDcode": 6019,
        "title": "[おかゆさん] キモチイイ肝試し",
        "cover": "https://telegra.ph/file/a7b21fabbf73b13602420.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6019"
    },
    {
        "IDcode": 6020,
        "title": "[大嘘] 街角あんよ",
        "cover": "https://telegra.ph/file/1e7f583547af3e542f2fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6020"
    },
    {
        "IDcode": 6021,
        "title": "[大秦国王安敦] みんなの欲しいもの",
        "cover": "https://telegra.ph/file/5d6e51c646fdfdaa626f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6021"
    },
    {
        "IDcode": 6022,
        "title": "[如月群真] 続・好奇心が止まらない",
        "cover": "https://telegra.ph/file/96a7780e3ae49474d9ed8.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6022"
    },
    {
        "IDcode": 6023,
        "title": "[冥茶] サキュパニ",
        "cover": "https://telegra.ph/file/6874cdef652de58d27447.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6023"
    },
    {
        "IDcode": 6024,
        "title": "[けんじ] 裸体芸術部",
        "cover": "https://telegra.ph/file/1d8839490f595e6532b1a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6024"
    },
    {
        "IDcode": 6025,
        "title": "[空巣] Love Potion ～極楽ツアーへようこそ～",
        "cover": "https://telegra.ph/file/e735ae7b9149acb60938d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6025"
    },
    {
        "IDcode": 6026,
        "title": "[まじろー] 結婚2年目の妻",
        "cover": "https://telegra.ph/file/83f843cb09779e6ff4305.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6026"
    },
    {
        "IDcode": 6027,
        "title": "[嶺本八美] いたずら好きの女の子",
        "cover": "https://telegra.ph/file/8fa35ded46a8802324681.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6027"
    },
    {
        "IDcode": 6028,
        "title": "[MTNO] 男の娘の家",
        "cover": "https://telegra.ph/file/c920822acf3516fc4f711.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6028"
    },
    {
        "IDcode": 6029,
        "title": "[ピジャ] ある暑い日の二人",
        "cover": "https://telegra.ph/file/19895fd4d4b53e38117fe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6029"
    },
    {
        "IDcode": 6030,
        "title": "[源五郎] かわらないもの",
        "cover": "https://telegra.ph/file/57ee3dca26f70f3f073b0.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6030"
    },
    {
        "IDcode": 6031,
        "title": "[服部ミツカ] 壊花-かいか-",
        "cover": "https://telegra.ph/file/d6e99416ae09ebd1c3966.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6031"
    },
    {
        "IDcode": 6032,
        "title": "[無洗米] 催眠危険注意報",
        "cover": "https://telegra.ph/file/bebbbf176c2017a7353d2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6032"
    },
    {
        "IDcode": 6033,
        "title": "[strelka] ポッキチヌッコ島へようこそ！",
        "cover": "https://telegra.ph/file/c226c58b68e079cd838cc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6033"
    },
    {
        "IDcode": 6034,
        "title": "[なちすけ] カゲキなオシオキ",
        "cover": "https://telegra.ph/file/393835034908986a34eba.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6034"
    },
    {
        "IDcode": 6035,
        "title": "[阿部いのり] 妊娠居残り授業",
        "cover": "https://telegra.ph/file/a2d8e10d5268bb7bf0656.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6035"
    },
    {
        "IDcode": 6036,
        "title": "[大嘘] カノトモあんよ",
        "cover": "https://telegra.ph/file/aa9a1ef606eac82228c15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6036"
    },
    {
        "IDcode": 6037,
        "title": "[syou] 私と幼なじみの…",
        "cover": "https://telegra.ph/file/57847f2d1c2314a5ba878.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6037"
    },
    {
        "IDcode": 6038,
        "title": "[なかに] 妹のおっぱいがまるだしだった話",
        "cover": "https://telegra.ph/file/be5438f6faf2597d457ad.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6038"
    },
    {
        "IDcode": 6039,
        "title": "[佐藤想次] 囚われた退魔師 亜弥音",
        "cover": "https://telegra.ph/file/57a7d281a7e2745ac5ddf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6039"
    },
    {
        "IDcode": 6040,
        "title": "[武藤まと] 飼い主のココロエ",
        "cover": "https://telegra.ph/file/bd55cca2941b3a150522c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6040"
    },
    {
        "IDcode": 6041,
        "title": "[蒟吉人] 湯けむりの中のカヤ姉",
        "cover": "https://telegra.ph/file/944a0b552147d0ebfa0c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6041"
    },
    {
        "IDcode": 6042,
        "title": "[ヤスイリオスケ] とろいめらい♪ 1st STAGE",
        "cover": "https://telegra.ph/file/c0789da0a4995cefc5aa9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6042"
    },
    {
        "IDcode": 6043,
        "title": "[あるぷ] トリップ トラップ",
        "cover": "https://telegra.ph/file/916d7d95598225af13adf.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6043"
    },
    {
        "IDcode": 6044,
        "title": "[久水あるた] 檻",
        "cover": "https://telegra.ph/file/37ccd27ef957655910fb6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6044"
    },
    {
        "IDcode": 6045,
        "title": "[板場広し] 橋の下で雨やどり",
        "cover": "https://telegra.ph/file/f1d6564cd34695a5edf91.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6045"
    },
    {
        "IDcode": 6046,
        "title": "[魂神] あやしい通販性活",
        "cover": "https://telegra.ph/file/783476457671a560c24a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6046"
    },
    {
        "IDcode": 6047,
        "title": "[Hirno] ゾンビパニック",
        "cover": "https://telegra.ph/file/9d605331f16b6e586e588.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6047"
    },
    {
        "IDcode": 6048,
        "title": "[ほりとも] おふろスキュラ",
        "cover": "https://telegra.ph/file/ae8374a3491319366f0b8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6048"
    },
    {
        "IDcode": 6049,
        "title": "[みぞね] 妖のおもてなし",
        "cover": "https://telegra.ph/file/10d2cbd20e95d963b82e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6049"
    },
    {
        "IDcode": 6050,
        "title": "[市川劇版社 (市川和秀)] 突擊拉麺漢道",
        "cover": "https://telegra.ph/file/46bcaae584549ff508aa3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6050"
    },
    {
        "IDcode": 6051,
        "title": "[ぐりえるも] 今日イク!-実習生",
        "cover": "https://telegra.ph/file/627dd1931bb120ff49f1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6051"
    },
    {
        "IDcode": 6052,
        "title": "[GIGIメット] 俺の得意魔法はエロ魔法でした",
        "cover": "https://telegra.ph/file/332b6b2b14e70bf286a62.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6052"
    },
    {
        "IDcode": 6053,
        "title": "[7zu7] HUNT ～絶望の森～",
        "cover": "https://telegra.ph/file/83dba03f031687dae8728.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6053"
    },
    {
        "IDcode": 6054,
        "title": "[Dr.P] サーペンタイン・ラブ",
        "cover": "https://telegra.ph/file/7378458052504dbc59d8c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6054"
    },
    {
        "IDcode": 6055,
        "title": "[鬼頭サケル] クレイジー・ハーディ",
        "cover": "https://telegra.ph/file/0b8906cd8bc533581486d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6055"
    },
    {
        "IDcode": 6056,
        "title": "[おろねこ] 送りオオカミ乙女にご注意!",
        "cover": "https://telegra.ph/file/c7b95e97e83f9bd4fad78.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6056"
    },
    {
        "IDcode": 6057,
        "title": "[おそまつ] 猫の杓子もねこかぶり",
        "cover": "https://telegra.ph/file/dcacc66ddf1ad012aa420.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6057"
    },
    {
        "IDcode": 6058,
        "title": "[あきのそら] 運動しよ♥",
        "cover": "https://telegra.ph/file/dcd7a7bf87e3d07a3e97a.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6058"
    },
    {
        "IDcode": 6059,
        "title": "[幾花にいろ] 秘密",
        "cover": "https://telegra.ph/file/ac452ea78b80072d2a03b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6059"
    },
    {
        "IDcode": 6060,
        "title": "[しはちろ] Ups and downs",
        "cover": "https://telegra.ph/file/404707c4f76023e566c5e.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6060"
    },
    {
        "IDcode": 6061,
        "title": "[yumoteliuce] Re-carsex♥",
        "cover": "https://telegra.ph/file/c819f7d93ed4069351f41.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6061"
    },
    {
        "IDcode": 6062,
        "title": "[もんぷち] 私の冴えたやり方",
        "cover": "https://telegra.ph/file/6b33d1a52212dfe30a049.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6062"
    },
    {
        "IDcode": 6063,
        "title": "[Zutta] Hunted Hunter",
        "cover": "https://telegra.ph/file/123bf402cbc6fa3a72eef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6063"
    },
    {
        "IDcode": 6064,
        "title": "[沢村青] 森に蠢く",
        "cover": "https://telegra.ph/file/d8d1966577f1d53d35613.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6064"
    },
    {
        "IDcode": 6065,
        "title": "[メガねぃ] 催眠術にかけられて",
        "cover": "https://telegra.ph/file/53158692f50984b572654.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6065"
    },
    {
        "IDcode": 6066,
        "title": "[四方塚ツカサ] 倒錯ヘヴン",
        "cover": "https://telegra.ph/file/7d11867a00d36248c895f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6066"
    },
    {
        "IDcode": 6067,
        "title": "[ちょびぺろ] かんちょー！",
        "cover": "https://telegra.ph/file/c527e305883082c1051aa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6067"
    },
    {
        "IDcode": 6068,
        "title": "[神毛物由宇] ヒメコイ",
        "cover": "https://telegra.ph/file/00843b86329b2e9cea76e.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6068"
    },
    {
        "IDcode": 6069,
        "title": "[Fue] 淫魔のミカタ! ～タダより高いモノはない",
        "cover": "https://telegra.ph/file/6d0c3477e41f304ab69ef.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6069"
    },
    {
        "IDcode": 6070,
        "title": "[きいろいたまご] とらカブり？？",
        "cover": "https://telegra.ph/file/d21b8bdb21685208ca5b1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6070"
    },
    {
        "IDcode": 6071,
        "title": "[majoccoid] Rabbit hole",
        "cover": "https://telegra.ph/file/bbde639c188bf30f31c27.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6071"
    },
    {
        "IDcode": 6072,
        "title": "[たじ] 囚獄のエルフ",
        "cover": "https://telegra.ph/file/3fcc084b69adcd800b89d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6072"
    },
    {
        "IDcode": 6073,
        "title": "[渚のハイカラ金魚 (如月モユ)] 保健室の恋人",
        "cover": "https://telegra.ph/file/1a23580b76bf29cb6092a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6073"
    },
    {
        "IDcode": 6074,
        "title": "[Cuvie] うそつきにはナニ飲ます-",
        "cover": "https://telegra.ph/file/4526dfd6b20648a6257c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6074"
    },
    {
        "IDcode": 6075,
        "title": "[sugarBt] 一般淑女のマナー",
        "cover": "https://telegra.ph/file/a49d666cca3a191541f2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6075"
    },
    {
        "IDcode": 6076,
        "title": "[sugarBt] 快感特急アナル行き",
        "cover": "https://telegra.ph/file/379ea4b3a5af03c2709d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6076"
    },
    {
        "IDcode": 6077,
        "title": "[コノシロしんこ] 遺らずの雨は突然に",
        "cover": "https://telegra.ph/file/f1ce7597e4c729b68feea.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6077"
    },
    {
        "IDcode": 6078,
        "title": "[sugarBt] ネットカフェではお静かに",
        "cover": "https://telegra.ph/file/5d59a770123dd59a50d15.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6078"
    },
    {
        "IDcode": 6079,
        "title": "[海境] 最初ノ制服",
        "cover": "https://telegra.ph/file/f05f107c1119c95121096.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6079"
    },
    {
        "IDcode": 6080,
        "title": "[船堀斉晃] 調教相談室",
        "cover": "https://telegra.ph/file/490c082c597167689eda9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6080"
    },
    {
        "IDcode": 6081,
        "title": "[彦馬ヒロユキ] パパのとちがうっ",
        "cover": "https://telegra.ph/file/43b450adc05406315af42.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6081"
    },
    {
        "IDcode": 6082,
        "title": "[しーあーる] トレジャーキーパー キリ",
        "cover": "https://telegra.ph/file/f056e268e6431910932e1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6082"
    },
    {
        "IDcode": 6083,
        "title": "[majoccoid] 辰さんの言うとおり",
        "cover": "https://telegra.ph/file/39ddaf9ab77f0e288b081.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6083"
    },
    {
        "IDcode": 6084,
        "title": "[もずや紫] 僕だけのBitch",
        "cover": "https://telegra.ph/file/008420c5f517db5529e59.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6084"
    },
    {
        "IDcode": 6085,
        "title": "[チグチミリ] 従妹なう",
        "cover": "https://telegra.ph/file/6339a4f4af2782d376253.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6085"
    },
    {
        "IDcode": 6086,
        "title": "[ぐじら] 眠れる図書室の少女",
        "cover": "https://telegra.ph/file/462d919499a063e1fee1c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6086"
    },
    {
        "IDcode": 6087,
        "title": "[sugarBt] 僕の愛しい優等生",
        "cover": "https://telegra.ph/file/0caf5d886ad4d38a05823.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6087"
    },
    {
        "IDcode": 6088,
        "title": "[sugarBt] ねえちゃんと風呂はいったことある-",
        "cover": "https://telegra.ph/file/4c0f43ea72bfdcdf4da6a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6088"
    },
    {
        "IDcode": 6089,
        "title": "[友野ヒロ] 修学旅行の夜に",
        "cover": "https://telegra.ph/file/16c222bf9d49c6e9dd72c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6089"
    },
    {
        "IDcode": 6090,
        "title": "[由家] 便器になった男",
        "cover": "https://telegra.ph/file/e92b9b6e4a5df233b1a26.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6090"
    },
    {
        "IDcode": 6091,
        "title": "[ゲズンタイト] 委員長 vs The World",
        "cover": "https://telegra.ph/file/8843c34e9b3538a67315c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6091"
    },
    {
        "IDcode": 6092,
        "title": "[かみ田] 精噴の儀",
        "cover": "https://telegra.ph/file/f96778e6d46b21a62e195.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6092"
    },
    {
        "IDcode": 6093,
        "title": "[Fue] 淫魔のミカタ! ～吸精主のお仕事は～",
        "cover": "https://telegra.ph/file/32addf23cad1f70e11f99.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6093"
    },
    {
        "IDcode": 6094,
        "title": "[ぷよちゃ] 匂うカップル",
        "cover": "https://telegra.ph/file/7cd46f4b1506d83baac95.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6094"
    },
    {
        "IDcode": 6095,
        "title": "[木谷椎] れんあいげーむ(over)",
        "cover": "https://telegra.ph/file/682ce3d6bd7bd4dcc77ae.png",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6095"
    },
    {
        "IDcode": 6096,
        "title": "[sugarBt] 教えて！コーチ",
        "cover": "https://telegra.ph/file/44d5ae8ba610477e01c16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6096"
    },
    {
        "IDcode": 6097,
        "title": "[紅唯まと] 僕は椅子・椅子・椅子モード X 明日はじめたい 射精管理♪",
        "cover": "https://telegra.ph/file/5a86e709428ca1b374d6d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6097"
    },
    {
        "IDcode": 6098,
        "title": "[タカヤマノン] 細マッチョ男の娘と淫肉トレーニング",
        "cover": "https://telegra.ph/file/1eda0bb65062d448e5dfe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6098"
    },
    {
        "IDcode": 6099,
        "title": "[Fue] はむらびっ！",
        "cover": "https://telegra.ph/file/2229ee42619e96fd49ec8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6099"
    },
    {
        "IDcode": 6100,
        "title": "[ゆきの] ご奉仕します！",
        "cover": "https://telegra.ph/file/e50d594da5291a3eda9c5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=6100"
    }
];
