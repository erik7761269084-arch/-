// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 49973,
        "title": "[Disharmonica] Saber Nero swuimsuit+summer dress - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHCVVnyDzmv5kjG1AcEYU-_ET_W00uEAACTxYAAljaSVaTQsmqDhp-RjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49973",
        "pageSeq": 49973
    },
    {
        "IDcode": 49974,
        "title": "(コスホリック16) [bit (園田みおん)] Mastermind (ダンガンロンパ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHCX5nyEa3OQyf5WQXymGYbU7NnKkS-gACxhYAAljaSVZIja6QHFIIhDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49974",
        "pageSeq": 49974
    },
    {
        "IDcode": 49975,
        "title": "(コスホリック16) [bit (園田みおん)] Cowlick (甘城ブリリアントパーク) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHCkdnyFLAv_Vgc7MGCRiVOhq9y-AuHwACwRcAAljaSVa880ksygLNGzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49975",
        "pageSeq": 49975
    },
    {
        "IDcode": 49976,
        "title": "いぬのにちじょう～擬似祭り～ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHC8lnyGKY8LB2-lQyZshG8fWFyOOYcQAChxkAAljaSVaXFHQv7ZVULjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49976",
        "pageSeq": 49976
    },
    {
        "IDcode": 49977,
        "title": "(コスホリック14) [Mikehouse (ミケ)] 黒猫お着替えする (俺の妹がこんなに可愛いわけがない) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHDO1nyHENptdHw3Yew4rXnLifQjiVhQAC2BoAAljaSVZUX22wk8NnGDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49977",
        "pageSeq": 49977
    },
    {
        "IDcode": 49978,
        "title": "(コスホリック14) [Mikehouse (ミケ)] 黒猫お着替えする (俺の妹がこんなに可愛いわけがない) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHDjdnyHcnl6AY--hE8ulevvYc9U8rMQACPBwAAljaSVbaAAG5xvXCK-w2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49978",
        "pageSeq": 49978
    },
    {
        "IDcode": 49979,
        "title": "xidaidai - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHDoFnyIJBDi09PHho7YOISyephaWWTQACoxwAAljaSVZeoTNXkkPNnTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49979",
        "pageSeq": 49979
    },
    {
        "IDcode": 49980,
        "title": "【少女映畫】星空凛 ほしぞら りん - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHDtZnyIyIaL5S4X25xMiLAi4Dg3VxPAACBB0AAljaSVaGYhyT1lSjSjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49980",
        "pageSeq": 49980
    },
    {
        "IDcode": 49981,
        "title": "【少女映畫】五更琉璃 ごこう るり（番外） - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHDwtnyJSPMfhez4SEZuvWkz2ebApjLQACPR0AAljaSVYGvrhQW5RBGjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49981",
        "pageSeq": 49981
    },
    {
        "IDcode": 49982,
        "title": "[nonsummerjack (non)] Hot Gimmick - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHD2NnyJ7dmXwJoYY4FQWzcZLUfXaB-gAClx0AAljaSVZL0CuwMO6-yzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49982",
        "pageSeq": 49982
    },
    {
        "IDcode": 49983,
        "title": "[团子系列]爱丽丝 (Alice in Wonderland) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHEIRnyKtGTv3Iw0tVT2Xda09GucU0CgACuB4AAljaSVbAa8RPwdxz9jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49983",
        "pageSeq": 49983
    },
    {
        "IDcode": 49984,
        "title": "[团子系列]索尼子 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHESlnyLUlyY1M-ITVBlS6rhsf-JKYNwACXR8AAljaSVYa-70c12ZXpDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49984",
        "pageSeq": 49984
    },
    {
        "IDcode": 49985,
        "title": "[Disharmonica] Cosplay - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHEXRnyL6YvB0GSwo0ZWEg9XJMXIpcwAACqB8AAljaSVYeYXYstrNZITYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49985",
        "pageSeq": 49985
    },
    {
        "IDcode": 49986,
        "title": "[少女映畫] 春日野穹 (ヨスガノソラ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHEe5nyMjVUV9CQwuk_gXCtRgqDIrb5wACFRQAAleoSFZmvB_wBF20nzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49986",
        "pageSeq": 49986
    },
    {
        "IDcode": 49987,
        "title": "【少女映畫】かすがの そら - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHEmNnyNH-m-E4S0RiIOVwk-CZVk9LXQACihQAAleoSFbnWK9b-6HoUjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49987",
        "pageSeq": 49987
    },
    {
        "IDcode": 49988,
        "title": "【少女映畫】園田 海未 チャイナドレス - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHEulnyNvuvmm8ZK0h5CVgtsbFPyhpOwACEBUAAleoSFai9AfoR99bdTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49988",
        "pageSeq": 49988
    },
    {
        "IDcode": 49989,
        "title": "【だんご】艦これ-しまかぜ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHFBtnyOZqoHcmWnyluMtVRDlR7Bc6egACQxYAAleoSFZs3QZY_uw2HzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49989",
        "pageSeq": 49989
    },
    {
        "IDcode": 49990,
        "title": "【だんご】涼宮ハルヒの憂鬱 長門 有希 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHFJpnyO9sn45Efis6Ja6NtjxEXnWydQACxBYAAleoSFZdkPvF-ElOBzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49990",
        "pageSeq": 49990
    },
    {
        "IDcode": 49991,
        "title": "【少女映畫】五更 瑠璃  水著 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHFNxnyPhZHbyhan5hT1MHPMUwTbI9eAACEBcAAleoSFYrP_dec5uo-jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49991",
        "pageSeq": 49991
    },
    {
        "IDcode": 49992,
        "title": "(コスホリック14) [Mikehouse (ミケ)] Celle qui prie pour demander le pardon (ギルティクラウン) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHFcBnyQmZwyt1nJxLEh3iLHEs8IEfcwACIhgAAleoSFab1tF_51caSjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49992",
        "pageSeq": 49992
    },
    {
        "IDcode": 49993,
        "title": "(コスホリック14) [Mikehouse (ミケ)] Celle qui prie pour demander le pardon (ギルティクラウン) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHFwpnyQ9i9eT28g08WATkJGXjVyHtHQACcBkAAleoSFb2gPwQFZ6nqjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49993",
        "pageSeq": 49993
    },
    {
        "IDcode": 49994,
        "title": "[うるふふぁんぐ！！ (あやね)] ObsceneCinderella - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHF2pnyR0toKLX10NE8r-T9XOBRLlguQAC2hkAAleoSFYOfEUIqy_iCzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49994",
        "pageSeq": 49994
    },
    {
        "IDcode": 49995,
        "title": "[うるふふぁんぐ！！ (あやね)] ObsceneCinderella - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHGJZnySJNjaSaJu0uDaF5wg-qqYbfkAACCRsAAleoSFYxEJJUQZJv7zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49995",
        "pageSeq": 49995
    },
    {
        "IDcode": 49996,
        "title": "[Heruheru3 (lenfried)] 恋これ Monochrome (艦隊これくしょん -艦これ-) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHGOFnySsphc_WuUbYn-auiGTektK5CQACYxsAAleoSFaBo1_gUMztLTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49996",
        "pageSeq": 49996
    },
    {
        "IDcode": 49997,
        "title": "マルチアングルポーズ集 アニメのためのヌード図鑑 Vol.2 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHGelnyTrh58t5yay0revBlsJwUamwwgACgBwAAleoSFYZyPn6oq8xYjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49997",
        "pageSeq": 49997
    },
    {
        "IDcode": 49998,
        "title": "マルチアングルポーズ集 アニメのためのヌード図鑑 Vol.2 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHGxVnyUB94guW-V_CAt2wHXrIXqzWjwACrR0AAleoSFZRdio6Z14lMzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49998",
        "pageSeq": 49998
    },
    {
        "IDcode": 49999,
        "title": "(コスホリック15) [bit (葵)] Violet (マクロスFRONTIER) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHHk9nyU88ewjiCisxT_rJhk-juPbJxQACDyEAAleoSFbe1WYfmGR1OjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49999",
        "pageSeq": 49999
    },
    {
        "IDcode": 50000,
        "title": "(コスホリック15) [bit (葵)] CANARY (コードギアス 反逆のルルーシュ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHHuRnyVmai5OCf9xK27blAAElYMgIeZYAAr4hAAJXqEhWDwU4p1qLFwI2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50000",
        "pageSeq": 50000
    },
    {
        "IDcode": 50001,
        "title": "(コスホリック15) [bit (葵)] LIME (コードギアス 反逆のルルーシュ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHH3BnyWPZ1m5YVPU7DEwXgD5S4xza9AACVyIAAleoSFb5IYdXDywnMTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50001",
        "pageSeq": 50001
    },
    {
        "IDcode": 50002,
        "title": "[Sex Friend] Sex Friend 09 「CharElotte -シャーエロット-」友◯奈緒 (シャーロット) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHIFRnyXeoHkjtHKDnwCL2jTnyaRJUPQACbyMAAleoSFZaIkFibFURlDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50002",
        "pageSeq": 50002
    },
    {
        "IDcode": 50003,
        "title": "(C88) [Heruheru3 (lenfried)] UZUKI GENERATION NEO (アイドルマスターシンデレラガールズ 島村卯月) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHIT5nyYg9159hIqt5l1rMbwGAucywJAAC8BQAAleoUFbSpAduWupM5zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50003",
        "pageSeq": 50003
    },
    {
        "IDcode": 50004,
        "title": "(C88) [Heruheru3 (lenfried)] UZUKI GENERATION NEO (アイドルマスターシンデレラガールズ 島村卯月) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHImpnyY3QennQ5wuZNhCNg77sTbT2kgACLhYAAleoUFbjydZQZvdBwTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50004",
        "pageSeq": 50004
    },
    {
        "IDcode": 50005,
        "title": "[sakolab] (Kyuru)] kyurulogy - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHI05nyaEVc5E-C--xFEK0wnaTNU4XCAACOBcAAleoUFZrwzVwBMGHozYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50005",
        "pageSeq": 50005
    },
    {
        "IDcode": 50006,
        "title": "[sakolab] (Kyuru)] kyurulogy - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHJHpnyaaVy1WBGz-hENQozC0zHi_QZAACfRgAAleoUFbqCOnRmh5plzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50006",
        "pageSeq": 50006
    },
    {
        "IDcode": 50007,
        "title": "[sakolab] (Kyuru)] kyurulogy - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHJcZnyaxh0Vm8nAKdr08fboaM7ZQ1aQAC-BkAAleoUFbA4UbQ6AABI082BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50007",
        "pageSeq": 50007
    },
    {
        "IDcode": 50008,
        "title": "(コスホリック14) [bit (彩城ゆりな)] Ruban (ラブプラス) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHJhZnybj7m43XM3fCCE0ulc-nU1vTrQACiRoAAleoUFaURKY8JZKJETYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50008",
        "pageSeq": 50008
    },
    {
        "IDcode": 50009,
        "title": "セイバー - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHKJZnyeC6AAHPc2oEGQSluRIw1TOqj-4AAkkdAAJXqFBWa5ZdiEWH6ug2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50009",
        "pageSeq": 50009
    },
    {
        "IDcode": 50010,
        "title": "[日暮企画 (日暮りん)]本妻は床上手 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHKO1nyfD9u63R8sTGHePQ5zjJYiTDpQACpx0AAleoUFbZCrjOvyETRzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50010",
        "pageSeq": 50010
    },
    {
        "IDcode": 50011,
        "title": "[日暮企画 (日暮りん)]本妻は床上手 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHKjVnyfbUfrUc4mHG0UDuZLtmuPBimQAC9h4AAleoUFY4glSBFv6WRjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50011",
        "pageSeq": 50011
    },
    {
        "IDcode": 50012,
        "title": "[DrGraevling & Vandych] A Random Encounter - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHKnxnyf7BUR3ltp2EPvHYoD5vLdNmmAACPR8AAleoUFa7v9h579iNsjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50012",
        "pageSeq": 50012
    },
    {
        "IDcode": 50013,
        "title": "[nonsummerjack (non)] Muramasa Works - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHKvVnyhM6iHDJrQU61r245MhJ2a6Q2QACux8AAleoUFY09OIN44f6QzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50013",
        "pageSeq": 50013
    },
    {
        "IDcode": 50014,
        "title": "[ＣＥピュア]アイドル活動費は身体で稼ぎます！ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHK_dnyiU0fHSPse-Tk8ufLoog6wZWuwACvSAAAleoUFZQF3xnHW_AazYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50014",
        "pageSeq": 50014
    },
    {
        "IDcode": 50015,
        "title": "[日暮企画(日暮りん)] きつねっ狐倶楽部 2期生 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHLg9nykBfUpvIJVVffW3TTjOZ6tXkoQAC3yIAAleoUFamYc4_-Ton3DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50015",
        "pageSeq": 50015
    },
    {
        "IDcode": 50016,
        "title": "[日暮企画(日暮りん)] きつねっ狐倶楽部 2期生 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHL05nykX1RmrF_UneRz8zTzbFBoPI5QACJyQAAleoUFaPEyaqBOwmjDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50016",
        "pageSeq": 50016
    },
    {
        "IDcode": 50017,
        "title": "[日暮企画(日暮りん)] きつねっ狐倶楽部 2期生 - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHMJpnykwH4YowsTR79vjI5SKp9XVPOgACdyUAAleoUFY9xedBOKxmcTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50017",
        "pageSeq": 50017
    },
    {
        "IDcode": 50018,
        "title": "[日暮企画(日暮りん)] きつねっ狐倶楽部 1期生 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHMQ1nyls0oVwHHK1C7M-apnafv1CevQACBiYAAleoUFYHXTXKhIE2UTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50018",
        "pageSeq": 50018
    },
    {
        "IDcode": 50019,
        "title": "[日暮企画(日暮りん)] きつねっ狐倶楽部 1期生 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHMpNnymHtyOL2UtJUB8hBOfoES1NaQQAC4RQAAsz0UFZHcGF2tYIHjDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50019",
        "pageSeq": 50019
    },
    {
        "IDcode": 50020,
        "title": "[日暮企画(日暮りん)] きつねっ狐倶楽部 1期生 - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHNCVnymkQHYWNvZ5K4OVGS76NqhTrZAACghYAAsz0UFbGMfmPvZyFgTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50020",
        "pageSeq": 50020
    },
    {
        "IDcode": 50021,
        "title": "[日暮企画(日暮りん)]『むちむちRQ』 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHNSpnyo_kZveqM49iNzbH6Ynkj9BEAwACqhcAAsz0UFYqylpEGCmjqDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50021",
        "pageSeq": 50021
    },
    {
        "IDcode": 50022,
        "title": "[日暮企画(日暮りん)]『むちむちRQ』 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHNm9nypWpO75InvVYGDG_HmjBvyPd3QACDRkAAsz0UFZiVlNZ-tkoUzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50022",
        "pageSeq": 50022
    },
    {
        "IDcode": 50023,
        "title": "[nonsummerjack (non)] Magica RIRU - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHNsVnyqOsdzYN4niKxQHnY6C6B264BAACPBQAAsz0WFZC8rGlLCHPITYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50023",
        "pageSeq": 50023
    },
    {
        "IDcode": 50024,
        "title": "[水龍敬(WATER DRAGON)] Realize 05 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHN8VnyrGTdjbllExtOUu0uWIaZqP7LwACVhUAAsz0WFaNL4bfI6pwBTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50024",
        "pageSeq": 50024
    },
    {
        "IDcode": 50025,
        "title": "[水龍敬(WATER DRAGON)] Realize 05 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHOPFnyrcmf4lKZTxV3kaYLOzpjxcTHQAClhYAAsz0WFY0lQufESkfVTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50025",
        "pageSeq": 50025
    },
    {
        "IDcode": 50026,
        "title": "[nonsummerjack (non)] Day & Night (Queen's Blade) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHOVpnysHzFaqHEhXguFJDblCmoV0s6AACJxcAAsz0WFYbe1_ifnd1IDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50026",
        "pageSeq": 50026
    },
    {
        "IDcode": 50027,
        "title": "(C86) [mariposa luz de la luna (蝶月真綾)] 密曲 (組曲 蜜乳) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHOwtnytZrE57BdHoAAZBq4hzbuqioX84AAjEZAALM9FhW6EnVnFqMoRU2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50027",
        "pageSeq": 50027
    },
    {
        "IDcode": 50028,
        "title": "[@factory (木村つな)] ご注文はきむらですか？ (ご注文はうさぎですか？) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHPLhnyukmsUM7bNe2Q_Yny7O2LkppjwACSBsAAsz0WFZz42RtUpRVYzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50028",
        "pageSeq": 50028
    },
    {
        "IDcode": 50029,
        "title": "[@factory (木村つな)] ご注文はきむらですか？ (ご注文はうさぎですか？) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHPeRnyu6SecK0WASFq8WAreK1Ve0HvgACexwAAsz0WFb3OsNMr0pleTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50029",
        "pageSeq": 50029
    },
    {
        "IDcode": 50030,
        "title": "[nonsummerjack (non)] ETERNAL DARKNESS - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHPzlnywQsOtYVsaIcK2VSrOAGn1VBowACSh4AAsz0WFbfNLw_y_DSZDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50030",
        "pageSeq": 50030
    },
    {
        "IDcode": 50031,
        "title": "(C86) [Heruheru3 (lenfried)] ノーレンフリ・ノーライフ (ノーゲーム・ノーライフ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHQE9nyxrp242oDUtD3OqUcn4VZlwLjAAC5h8AAsz0WFZPpGOk4Xak-TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50031",
        "pageSeq": 50031
    },
    {
        "IDcode": 50032,
        "title": "(C86) [Heruheru3 (lenfried)] ノーレンフリ・ノーライフ (ノーゲーム・ノーライフ) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHQZxnyyDnmo7YXlQcFRaX-AKzvfSoVAACQCEAAsz0WFb9dKW5xdEZhDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50032",
        "pageSeq": 50032
    },
    {
        "IDcode": 50033,
        "title": "[nonsummerjack (non)] EXOTIC MONT BARBARA (ドラゴンクエストIV) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHQrJnyy8kgJZe2m1Xf1ghuiJ0BJlWcQACpSIAAsz0WFan35pTrDDBdjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50033",
        "pageSeq": 50033
    },
    {
        "IDcode": 50034,
        "title": "[nonsummerjack (non)] GAL ADDICT - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHRDpnyz1cc8LmNmNat-W2zmIWa_70ggACUyQAAsz0WFZ-is5wx46wgjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50034",
        "pageSeq": 50034
    },
    {
        "IDcode": 50035,
        "title": "(コスホリック11) [nonsummerjack (non)] LEOPA DOLL (動物ねーちゃん) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHRT9ny0nXf1UjTO-5SUb6gzidzOAJoQACcCUAAsz0WFZU34fIf7ATyTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50035",
        "pageSeq": 50035
    },
    {
        "IDcode": 50036,
        "title": "(コスエクスプレス) [nonsummerjack (non)] Your sweet Angel (ザ・キング・オブ・ファイターズ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHRwZny1mecFSkHQmFAjXRJM_i75cR0wACXCcAAsz0WFZOiuXsLEfO_jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50036",
        "pageSeq": 50036
    },
    {
        "IDcode": 50037,
        "title": "[日暮企画(日暮りん)] まじかる☆PAD長 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHSFRny2zJxf-ODN474xSfc5PGnj9c3QACuigAAsz0WFZRuh9DsqjAkTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50037",
        "pageSeq": 50037
    },
    {
        "IDcode": 50038,
        "title": "[日暮企画(日暮りん)] まじかる☆PAD長 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHSZdny3KJswNiFk-2t1j2c2k2AxFDegACByoAAsz0WFZm6ATjznaJWzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50038",
        "pageSeq": 50038
    },
    {
        "IDcode": 50039,
        "title": "[@factory (早乙女らぶ)] ラブコイ (ニセコイ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHSidny4NhGf46pCQ8NXzg95D5ZTm8pAACrSoAAsz0WFZsiwfxHvWuyDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50039",
        "pageSeq": 50039
    },
    {
        "IDcode": 50040,
        "title": "[@factory (早乙女らぶ)] ラブコイ (ニセコイ) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHS1Nny4idFoKycGue5Sipd80rENTC2AAC2isAAsz0WFbo3xaTk3OkgjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50040",
        "pageSeq": 50040
    },
    {
        "IDcode": 50041,
        "title": "みらくる☆２Pみこ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHTBBny5WJ4xqz2Fxxie9RD63ZvO2bhQACzCwAAsz0WFZoF-ui8OhyEjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50041",
        "pageSeq": 50041
    },
    {
        "IDcode": 50042,
        "title": "UPDATE Highschool of the Dead [Vandych] (Uncensored) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHTTlny6Wxna9PNHZKy4EXPDN3MfnZCwACbhQAAsz0YFa6HeltidEfFjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50042",
        "pageSeq": 50042
    },
    {
        "IDcode": 50043,
        "title": "[日暮企画 (日暮りん)] セーラー服とスポーツブラ (ラブプラス) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHTj9ny7PDdkTRr7HTD2d0UA-eCgvZ3wACmBUAAsz0YFbYhL5Hfs7k1DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50043",
        "pageSeq": 50043
    },
    {
        "IDcode": 50044,
        "title": "[日暮企画 (日暮りん)] セーラー服とスポーツブラ (ラブプラス) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHT4Rny7mjfZMfdP_veuh-3_QQ0W20iAAC-hYAAsz0YFZA9HPbNjmZrjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50044",
        "pageSeq": 50044
    },
    {
        "IDcode": 50045,
        "title": "[日暮企画 (日暮りん)] セーラー服とスポーツブラ (ラブプラス) - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHULBny78Bl_c0dqV_Gx_UXZiJnbAtSgACOxgAAsz0YFYSFat-PVWpSTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50045",
        "pageSeq": 50045
    },
    {
        "IDcode": 50046,
        "title": "[@factory (早乙女らぶ)] らぶドラ！(とらドラ!) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHUSBny85eMj7pBPR1KbCor9aG8A3b6QAC0xgAAsz0YFa7mKSVr8wuDTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50046",
        "pageSeq": 50046
    },
    {
        "IDcode": 50047,
        "title": "[@factory (早乙女らぶ)] らぶドラ！(とらドラ!) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHUrJny9VQR1JIhOmlp5FMYVumWuI_KAACkhoAAsz0YFbTLKT7yb1LwjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50047",
        "pageSeq": 50047
    },
    {
        "IDcode": 50048,
        "title": "[日暮企画 (日暮りん)] (CH10) ゲルバナのこうのう (STEINS;GATE) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHU3lny-imiGM7q_Quen7hSy5MZGLiYwACoRsAAsz0YFYgmRWInOZKnTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50048",
        "pageSeq": 50048
    },
    {
        "IDcode": 50049,
        "title": "[日暮企画 (日暮りん)] (CH10) ゲルバナのこうのう (STEINS;GATE) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHVO9ny-_p8Gjg3VhT3A8dkCNNV2IEkwACNh0AAsz0YFaGcPFNA-MVPTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50049",
        "pageSeq": 50049
    },
    {
        "IDcode": 50050,
        "title": "[@factory (早乙女らぶ)] とある食蜂の超電マ砲L (とある科学の超電磁砲) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHVjVny_5mYQgaDe3j9B1APM9jhgEQKAACsh4AAsz0YFYe92MkK7Pc9zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50050",
        "pageSeq": 50050
    },
    {
        "IDcode": 50051,
        "title": "(C85) [nonsummerjack (non)] DRAGON'S AMAZON (ドラゴンズクラウン) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHVsJnzAngLvmg0XtVdBazlSoNWTmITwACSR8AAsz0YFYkm8J7_piLtTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50051",
        "pageSeq": 50051
    },
    {
        "IDcode": 50052,
        "title": "(C84) [Heru3 (lenfried)] LOVE A LIVE - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHV3ZnzBvE9h4OJ5nWsydce8ZE_NbalwACHCAAAsz0YFbG0HCyFDKxxzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50052",
        "pageSeq": 50052
    },
    {
        "IDcode": 50053,
        "title": "(C84) [Heru3 (lenfried)] LOVE A LIVE - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHWOVnzCI0BgYHulWjvo3K_GQemlGELgACoSEAAsz0YFaIrEP9Kd_-sDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50053",
        "pageSeq": 50053
    },
    {
        "IDcode": 50054,
        "title": "[@factory (早乙女らぶ)] 絶頂の彼方 (境界の彼方) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHWvdnzDDAh2KV-AY79Q15z6hibbx6ewAC8SMAAsz0YFbXA4NHlOvqvTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50054",
        "pageSeq": 50054
    },
    {
        "IDcode": 50055,
        "title": "[@factory (早乙女らぶ)] 愛玩少女は傷つかない (機巧少女は傷つかない) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHXAtnzD3ig4WWWYGz54p7YV_41whqZwACiBUAAlBKYVYHdrELKDwvPDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50055",
        "pageSeq": 50055
    },
    {
        "IDcode": 50056,
        "title": "[@factory (早乙女らぶ)] 愛玩少女は傷つかない (機巧少女は傷つかない) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHXUZnzEOOyHORg5Iq8w5A_jOeeNS4fAAC0hYAAlBKYVbbHDltga6MbDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50056",
        "pageSeq": 50056
    },
    {
        "IDcode": 50057,
        "title": "美少女剣士ミ○サ×淫語2穴凌辱×連続アナル中出しファック りょう - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHXklnzFF7HQWbf_4GxMEsfpv9LYp0_AACHhgAAlBKYVaMQfyrc2mG_TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50057",
        "pageSeq": 50057
    },
    {
        "IDcode": 50058,
        "title": "[@factory (早乙女らぶ)] ぜかまし (艦隊これくしょん-艦これ-) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHXzpnzF2CElWAfhGgJfkVJHpIndto-AACRRkAAlBKYVbNNi_dwBKNDjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50058",
        "pageSeq": 50058
    },
    {
        "IDcode": 50059,
        "title": "[@factory (早乙女らぶ)] 超高校級の淫乱 (ダンガンロンパ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHYC1nzGoJ02i9U_lD_yuyEgKvyjAQNwACVRoAAlBKYVaj-jGYT7MSnDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50059",
        "pageSeq": 50059
    },
    {
        "IDcode": 50060,
        "title": "(C85) [nonsummerjack (non)] A5 Rank Meat (食戟のソーマ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHYNJnzHTJtFTS4KOwUVD8qU9yMP0AARkAAv4aAAJQSmFWjMFVMxLzk8s2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50060",
        "pageSeq": 50060
    },
    {
        "IDcode": 50061,
        "title": "[@factory (早乙女らぶ)] 侵略！イキ娘 (侵略！イカ娘) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHYbFnzIsZNPGnbV6eyb5ihughV_XSpQAC5hsAAlBKYVZ41eassmnB0TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50061",
        "pageSeq": 50061
    },
    {
        "IDcode": 50062,
        "title": "[vandych (Alina Latypova)] Izayoi Sakuya cosplay (Touhou Project) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHYz1nzKvhOxpYY9_R5RHv-xytXM-txQACPxIAAlBKaVbMTTnAYET34zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50062",
        "pageSeq": 50062
    },
    {
        "IDcode": 50063,
        "title": "[K.H. (真白ゆき)] (C83) もしも黒猫が俺の彼女だったら・・・ (俺の妹がこんなに可愛いわけがない ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHY-1nzMTR6402s6mgLgYRj6KkcZVqaAAC8RIAAlBKaVaWI6_8N559kDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50063",
        "pageSeq": 50063
    },
    {
        "IDcode": 50064,
        "title": "[日暮企画 (日暮りん)] りんりんがいっぱいコレクションvol.2 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHZyxnzTkgsSGMXMjldU6ahW19Nx77kAACTxcAAlBKaVanDnZbVwvaUDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50064",
        "pageSeq": 50064
    },
    {
        "IDcode": 50065,
        "title": "[日暮企画 (日暮りん)] りんりんがいっぱいコレクションvol.2 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHaRZnzUJFBmD61iItr18HwH_xRhGwCQACURkAAlBKaVZL-HzHceUiTTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50065",
        "pageSeq": 50065
    },
    {
        "IDcode": 50066,
        "title": "[日暮企画 (日暮りん)] りんりんがいっぱいコレクションvol.2 - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHakJnzUgHrsLkF_itQi1WrzTTR3CnZAAChRoAAlBKaVZT6oiRkcNoCDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50066",
        "pageSeq": 50066
    },
    {
        "IDcode": 50067,
        "title": "[日暮企画 (日暮りん)] りんりんがいっぱいコレクションvol.2 - Page 4",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHa4xnzU4gpxoBDXueFu0WfUZX5fZIMgAC0xsAAlBKaVYG4sX4LwsDBjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50067",
        "pageSeq": 50067
    },
    {
        "IDcode": 50068,
        "title": "Korean Cosplay (mix) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHbUNnzY_WBqbyNkBR_uSVd67idSXZFwACHh4AAlBKaVbYDOMMiSZcSTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50068",
        "pageSeq": 50068
    },
    {
        "IDcode": 50069,
        "title": "Korean Cosplay (mix) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHbpxnzZX_24KAKMwCLdVxEoUw07iQQQACmh8AAlBKaValHIgQWbM0aDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50069",
        "pageSeq": 50069
    },
    {
        "IDcode": 50070,
        "title": "Korean Cosplay (mix) - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHb8hnzZtkDMBCN1gr9Y5CjPwQCXa7SgAC1CAAAlBKaVYGYdQ04fU6izYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50070",
        "pageSeq": 50070
    },
    {
        "IDcode": 50071,
        "title": "Korean Cosplay (mix) - Page 4",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHcPxnzaEJ_kXgeDRVPAHucbwq5FnesAAC-REAAlBKcVYObwkEipT60zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50071",
        "pageSeq": 50071
    },
    {
        "IDcode": 50072,
        "title": "Korean Cosplay (mix) - Page 5",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEHcjpnzaagZrPMSgFQ_BAVhxtvqqd0_QACPBMAAlBKcVYx5U_qR0XJxDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=50072",
        "pageSeq": 50072
    }
];
