// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 49773,
        "title": "[Fantia/Twitter] プー 2B - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFwyRntUB7Ix2h0Oull-def7XycjqQkwACBxQAAllZqVWqccHld_lEbzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49773",
        "pageSeq": 49773
    },
    {
        "IDcode": 49774,
        "title": "狍崽子 gwen league of legends - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFxMZntU3JA3d3ZQqxMohS1b1dW_DQnAAC1BUAAllZqVX5JutNjU0N4jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49774",
        "pageSeq": 49774
    },
    {
        "IDcode": 49775,
        "title": "Arty Huang cosplay Fern - Sousou no Frieren - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFxThntVeMf1lF4kt0a9SLzo3eoTeMoQACfBYAAllZqVVGy2tkrv51eDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49775",
        "pageSeq": 49775
    },
    {
        "IDcode": 49776,
        "title": "星之迟迟 - 碧蓝航线 尾张 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFxYRntWK6t5iNRTLfcyD9yD0Vfp9KSwACDBcAAllZqVXZ6dG9i220UjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49776",
        "pageSeq": 49776
    },
    {
        "IDcode": 49777,
        "title": "Bangni邦尼 - 碧蓝航线 尾张 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFxnFntW5yuDikWna83T9pEqEfKpzgIQACCBgAAllZqVWXwuiSoLEmeDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49777",
        "pageSeq": 49777
    },
    {
        "IDcode": 49778,
        "title": "阿包也是兔娘 碧蓝航线 奇尔沙治 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFxxBntXol8M30O2GIjXjx1hgQlGaq5wACuBgAAllZqVV28wH7MWZjeTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49778",
        "pageSeq": 49778
    },
    {
        "IDcode": 49779,
        "title": "茶籽ccz - 蜘蛛侠格温 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFx0xntYKmefhaHhG34Z3yYv3Oe_LH7AACAxkAAllZqVVI97WIKJfZ7TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49779",
        "pageSeq": 49779
    },
    {
        "IDcode": 49780,
        "title": "Bangni邦尼 - 杀戮都市 下平玲花 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFx9NntZHbxxsdX2zP50pHsjYqCxJi0wACrhkAAllZqVUDnkAmtWwwFzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49780",
        "pageSeq": 49780
    },
    {
        "IDcode": 49781,
        "title": "Arty Huang (huang_arty) [Twitter] (17.01.2023) 906P 5V - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFycdntbJmxNRtdWXMcEHbr_RVnIyOcgAC_BsAAllZqVXVAAEpUC-mPeo2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49781",
        "pageSeq": 49781
    },
    {
        "IDcode": 49782,
        "title": "Arty Huang (huang_arty) [Twitter] (17.01.2023) 906P 5V - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFyxxntbiXXFcCPeHjAY3Bh8ZU4SOOxwACdB0AAllZqVW2E8BnJ9R-0DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49782",
        "pageSeq": 49782
    },
    {
        "IDcode": 49783,
        "title": "Arty Huang (huang_arty) [Twitter] (17.01.2023) 906P 5V - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFzFVntb52YEr4nXnH7ZcYQnRVrJdFegACyR4AAllZqVX6tgzNAcryFDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49783",
        "pageSeq": 49783
    },
    {
        "IDcode": 49784,
        "title": "Arty Huang (huang_arty) [Twitter] (17.01.2023) 906P 5V - Page 4",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFzYFntcQvfyqObheJNVL6VfbytVCRYwAC-h8AAllZqVXizu1mvoFvbjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49784",
        "pageSeq": 49784
    },
    {
        "IDcode": 49785,
        "title": "Mikomi Hokina - Mona Pasties - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEFzepntc1FV4d0_jDMXe2GGBK7TXHqCAACbCAAAllZqVX_RlaO8R05MjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49785",
        "pageSeq": 49785
    },
    {
        "IDcode": 49786,
        "title": "Elizamiaomiao - Mashu Dangerous Beast - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF0KFntgzu0wOgrThN5QywlQ_Phof2jQAC0RoAAllZsVUowLdaDBQUhzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49786",
        "pageSeq": 49786
    },
    {
        "IDcode": 49787,
        "title": "楊衣 Yangyi FOOT TIER 202310 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF0sBnthtYsfZg_1Ny5eCyP31zmJK5sgACix0AAllZsVWkkALhOqmZNTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49787",
        "pageSeq": 49787
    },
    {
        "IDcode": 49788,
        "title": "Xiaoying - Reika [Gantz] - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF1PpntjwSSNqcvcdINxK1MP2NtFfX8QACzB8AAllZsVXWLG5zxKvX1jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49788",
        "pageSeq": 49788
    },
    {
        "IDcode": 49789,
        "title": "是一只熊仔吗  镇海 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF1cpntkXylX967qmZHxqOvBoVW3BhJwACoSAAAllZsVVx-71QpDGoIjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49789",
        "pageSeq": 49789
    },
    {
        "IDcode": 49790,
        "title": "Ayame_base - Kasugano Sora - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF1phntl-PZIxO9Yzng5fcNy-kZ1So4wACgSEAAllZsVWEGD4---g8nTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49790",
        "pageSeq": 49790
    },
    {
        "IDcode": 49791,
        "title": "敗北！ジュリちゃん！ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF12Vntn9WniCY20WL2DTbhGddUJUmEAACcyIAAllZsVW5QZMlI_9sojYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49791",
        "pageSeq": 49791
    },
    {
        "IDcode": 49792,
        "title": "柠檬小茶mio Nahida - Genshin Impact - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF3y5nt-t3Cmke0Vs77eMYEul5cBtbdQACFBQAAg7xwFXr-ladfajkuDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49792",
        "pageSeq": 49792
    },
    {
        "IDcode": 49793,
        "title": "小樱 (Xiao Ying)  Reika Shimohira - Gantz - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF3_Bnt_zB7lw049uSi9HkmQLRpEHwIAAC7RQAAg7xwFWqxGwt-QXfvjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49793",
        "pageSeq": 49793
    },
    {
        "IDcode": 49794,
        "title": "Hime Tsu - Marin Kitagawa - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF4J1nuAbloUdq2-XhWVBRLrfMNNOP2wACtBUAAg7xwFUCaYQWV9uosjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49794",
        "pageSeq": 49794
    },
    {
        "IDcode": 49795,
        "title": "Tiny Asa - Mihara - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF4OhnuA_yTztZekEQ3lRY_nwaMiBh2AACLRYAAg7xwFXih93AugPFPTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49795",
        "pageSeq": 49795
    },
    {
        "IDcode": 49796,
        "title": "Tiny Asa - 菲伦 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF4SRnuBsGdSpybyzLoKDbvU5zhk1VdgACchYAAg7xwFU4iyAcLzgzRzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49796",
        "pageSeq": 49796
    },
    {
        "IDcode": 49797,
        "title": "[甘噛みはむちゃん (はむ)]ぐらぐらキュート_ちびサメの水遊び - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF4mVnuCmflb4g8zb12tI0W4JBA2asagACxxcAAg7xwFUWQ6zB0oOwXjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49797",
        "pageSeq": 49797
    },
    {
        "IDcode": 49798,
        "title": "[MACHI 馬吉] ホタルの下着報告です💚第一弹 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF44pnuDZUwOZNfLPks-ACSl0pbZs6FQACDBkAAg7xwFXSr647_VzNCTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49798",
        "pageSeq": 49798
    },
    {
        "IDcode": 49799,
        "title": "Puypuy - BB Summer (August 2024) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF7O9nuMEBnTZHVNqosRYvylguY49EtwACbBwAAoOkyVVgZU8Urx1ubTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49799",
        "pageSeq": 49799
    },
    {
        "IDcode": 49800,
        "title": "封疆疆v 飞鸟马时竞泳 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEF9qJnuaByCg1PLirl5QibWAOoXePGJQAC-RgAAoOk0VU_fvWdOStk6jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49800",
        "pageSeq": 49800
    },
    {
        "IDcode": 49801,
        "title": "Puypuy - Summer BB  (Fate/Grand Order) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGAe5nuizeqldATIWnvZo_ZweuCzydHQACAyYAAoOk0VXbBod9RPUNwDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49801",
        "pageSeq": 49801
    },
    {
        "IDcode": 49802,
        "title": "PC合集（伪娘） - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGBYRnum9jZC1EZVRl7WhaARhGP-O7kQAC-RMAAoOk2VW7lwAB88swCOo2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49802",
        "pageSeq": 49802
    },
    {
        "IDcode": 49803,
        "title": "Tiny Asa - Chun-li - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGEOxnuvrLmwckRysQv2nBFFjVozYraQACZRsAAn-g2VW84yujKNqoAAE2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49803",
        "pageSeq": 49803
    },
    {
        "IDcode": 49804,
        "title": "沖田凜花 - 常闇トワ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGHBRnu2SqOzKbEAABu9e89B5fdTasvaAAAlInAAJ_oNlVOXzHKmLPBC82BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49804",
        "pageSeq": 49804
    },
    {
        "IDcode": 49805,
        "title": "抱走莫子aa - Baltimore - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGHhJnu5PrkpQ-JvU7oT3o2v5Syb4SQwACXikAAn-g2VVV4-4MCLmKmDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49805",
        "pageSeq": 49805
    },
    {
        "IDcode": 49806,
        "title": "铃木美咲(Misaki Suzuki) - 想见你想见你想见你X1（刻晴单人） - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGNWdnvMH_iCHs_kyiGjeQtB2cG-8IYgACEiYAAmYp6FUukt048cN-9zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49806",
        "pageSeq": 49806
    },
    {
        "IDcode": 49807,
        "title": "铃木美咲(Misaki Suzuki) - 想见你想见你想见你X4（刻晴霓裾翩跹单人） - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGNbBnvMpFvIBVguMys9qLGdMWrXKjrgACZSYAAmYp6FWafje47BPB8zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49807",
        "pageSeq": 49807
    },
    {
        "IDcode": 49808,
        "title": "抱走莫子 –  LUNA - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGNhJnvNZzVQ2wxThJ2j3cStQxFuo5MgAC5iYAAmYp6FU1Hr5s_S4kVjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49808",
        "pageSeq": 49808
    },
    {
        "IDcode": 49809,
        "title": "阿包也是兔娘 生或死联动碧蓝航线 穗香泳装 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGOd1nvRBl-MPd4jwmj4sks00Nd6vDzQAC3yoAAmYp6FXp3Y8Yf8Ma1DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49809",
        "pageSeq": 49809
    },
    {
        "IDcode": 49810,
        "title": "[K] Marin no BunnyGal wa Suki desuka? - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGQL5nvU9x-ZF7NzvRmCz15PLuLy0lKAACYxoAAmYp8FWfa9g-utTKgTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49810",
        "pageSeq": 49810
    },
    {
        "IDcode": 49811,
        "title": "Byoru - Vermeil - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGRE9nvc7i8QNg_FRt8zLh7nw4Q9bGlQAC7x4AAmYp8FXOlYtG-8RDNjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49811",
        "pageSeq": 49811
    },
    {
        "IDcode": 49812,
        "title": "Azami - Leviathan (Seven Mortal Sins) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGSWNnvoH3f7o_wn8LF9auYmm7-fBpQgACWxUAAtfX-FXl4pY4qGtE7TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49812",
        "pageSeq": 49812
    },
    {
        "IDcode": 49813,
        "title": "Lady Dimitrescu in Lace Suit (Resident Evil Village) by Alice - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGUQJnvyLs9t-9bzHzxfksV7wxX4X17gACYR8AAtfX-FVIk-Fae2g5vDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49813",
        "pageSeq": 49813
    },
    {
        "IDcode": 49814,
        "title": "[菌烨TAKO] エウルア・ローレンス - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGVOlnv4s4l7EOdpU7OL3BuEWmSTMSnAACfhUAAtfXAAFWa37lHjbOxUc2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49814",
        "pageSeq": 49814
    },
    {
        "IDcode": 49815,
        "title": "[PingPing] 間桐 桜 cosplay (Fate/Stay Night) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGVvBnv-8fgn0OvrjdyhjwcYyr1B7ACgACOhgAAtfXAAFW1Dk_mw0vyZY2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49815",
        "pageSeq": 49815
    },
    {
        "IDcode": 49816,
        "title": "(CH25) [桜のぁ被害者の会 (桜のぁ)] 最強女神 ～Takao＆Atago RaceQueen～ (Azur Lane) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGX8ZnwIAUpfLR-K-2Ug24KKwgdk1BLgACRBEAAu29CVZPPY84BG1q_zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49816",
        "pageSeq": 49816
    },
    {
        "IDcode": 49817,
        "title": "【神楽坂真冬】後で逮捕してもいい？(Fate Grand Order) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGZhZnwO66wm4KnbXEeP39qs-Uz9kxFAAC5BcAAu29CVZQpafji1xNyDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49817",
        "pageSeq": 49817
    },
    {
        "IDcode": 49818,
        "title": "[coli厨(水無月みり)] もう！子ども扱いしないでくださいトナカイさん！ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGZvNnwPoMM_McunpgTzmOa9nXyuOeWQACwhgAAu29CVYj6PnFazPT7TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49818",
        "pageSeq": 49818
    },
    {
        "IDcode": 49819,
        "title": "[饲育系少女]南小鸟 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGbD9nwZjmdivALdqXZzmyZmG0hENwYwACCxYAAjmoEFYnNBsWPaLu2zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49819",
        "pageSeq": 49819
    },
    {
        "IDcode": 49820,
        "title": "[色气喵凛酱]艾米莉亚睡衣 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGbVNnwaNuLaGUcOh_EmqMgAY1HRqArAACUxcAAjmoEFYgMMFmk1EPUjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49820",
        "pageSeq": 49820
    },
    {
        "IDcode": 49821,
        "title": "[饲育系少女]康纳 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGbl1nwauZF09Vwz23k7GT02K6SmloTwACfRgAAjmoEFaeiB4l60uODDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49821",
        "pageSeq": 49821
    },
    {
        "IDcode": 49822,
        "title": "【少女映畫】真姬旗袍 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGbuZnwbYZP5a70_2lx01XooSdlDcEJQACGhkAAjmoEFaCG9wGWgnxczYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49822",
        "pageSeq": 49822
    },
    {
        "IDcode": 49823,
        "title": "[呆萌橘子酱aa]蕾姆 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGb8BnwcDRtSnhQAm-d7ugj8HQQEEadAACGxoAAjmoEFYlg21GkjY29zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49823",
        "pageSeq": 49823
    },
    {
        "IDcode": 49824,
        "title": "水◯燈は搾りたてミルクがお好き。 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGcQJnwcxDFtB90qmqnK9o3lN6utIq7AAChRsAAjmoEFYZYTbFOqs2CjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49824",
        "pageSeq": 49824
    },
    {
        "IDcode": 49825,
        "title": "Re:エルザから始める異仮装生活 | ノースコンプレックス - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGcdtnwdvbl6hKJI-PGzW-2gdDSH_r7gACexwAAjmoEFZKNqzOxSKx0zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49825",
        "pageSeq": 49825
    },
    {
        "IDcode": 49826,
        "title": "Coser 妖少 (Little Demon) [bcy.net 5614] (2017-02) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGdJFnwe-OCWskxdTFq87_wZBJSjnwMQACQh8AAjmoEFYexrtZHfZ8szYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49826",
        "pageSeq": 49826
    },
    {
        "IDcode": 49827,
        "title": "Coser 妖少 (Little Demon) [bcy.net 5614] (2017-02) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGdcVnwfUkdjRq0oJJb_YZOVIfGjKvDAACfyAAAjmoEFZMqysVjr9H0DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49827",
        "pageSeq": 49827
    },
    {
        "IDcode": 49828,
        "title": "Coser 妖少 (Little Demon) [bcy.net 5614] (2017-02) - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGdv1nwfqq6byswsRn7F3H07uyU0sNCQACtyEAAjmoEFaFzYKWFvX7wTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49828",
        "pageSeq": 49828
    },
    {
        "IDcode": 49829,
        "title": "ガチ本壊ちゃん　過去最高感度の過去最高おっぱい 10代J○から調教済みオフパコびっちレイヤー　楓さんデレます[H] - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGeChnwgeaKeUkg-ziWZ-m5ttPRLi7AgAC5CIAAjmoEFZgy2D1rFqNzjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49829",
        "pageSeq": 49829
    },
    {
        "IDcode": 49830,
        "title": "BoLoli 2017-05-15 Vol.056 Xia Mei Jiang (夏美酱) (Fate/Grand Order) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGePRnwhB9lLWh0vfGpoIce6pdYr-MgQACvyMAAjmoEFazQYaemJ1fxjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49830",
        "pageSeq": 49830
    },
    {
        "IDcode": 49831,
        "title": "ピンキーwebDL073/湊莉久さん・成宮ルリさん - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGeV5nwidD1N-KnIvnqdpXAAGPZhcLSa8AAjEkAAI5qBBWupImtAaaCFs2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49831",
        "pageSeq": 49831
    },
    {
        "IDcode": 49832,
        "title": "ピンキーwebDL073/湊莉久さん・成宮ルリさん - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGerBnwi1Rpx_s_BnE8tN-25jQ052CXAACgyUAAjmoEFaDUnlHorQHPzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49832",
        "pageSeq": 49832
    },
    {
        "IDcode": 49833,
        "title": "ピンキーwebDL073/湊莉久さん・成宮ルリさん - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGe9tnwjL3vU5AtYA4rMJ-GAreM9ZloAACriYAAjmoEFYEusU3shHoiTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49833",
        "pageSeq": 49833
    },
    {
        "IDcode": 49834,
        "title": "ピンキーwebDL073/湊莉久さん・成宮ルリさん - Page 4",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGfUNnwjmqT1Rcdba-F-yvHwRzVf3jggACFigAAjmoEFbbejHjQIbj4DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49834",
        "pageSeq": 49834
    },
    {
        "IDcode": 49835,
        "title": "ピンキーwebDL073/湊莉久さん・成宮ルリさん - Page 5",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGfn1nwj98KfSpkRXYNOIScn_-BPtCmwACsxMAAjmoGFYtP1gs-WYqnDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49835",
        "pageSeq": 49835
    },
    {
        "IDcode": 49836,
        "title": "ピンキーwebDL053 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGf1VnwlcQh7e-lp4H_FdiePeHkkHTawACjxQAAjmoGFbtHr9ON3a_WDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49836",
        "pageSeq": 49836
    },
    {
        "IDcode": 49837,
        "title": "ピンキーwebDL053 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGgJxnwl0ZqZPh7ZRdqP--kLPPbgN7PQAC9RUAAjmoGFY21Tq17AHmoDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49837",
        "pageSeq": 49837
    },
    {
        "IDcode": 49838,
        "title": "ピンキーwebDL053 - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGgiBnwmPa-n_8bHKfRdxaWCOWGfV-QgACgRcAAjmoGFaIJbd_-MYdbzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49838",
        "pageSeq": 49838
    },
    {
        "IDcode": 49839,
        "title": "ピンキーwebDL053 - Page 4",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGg1ZnwmoWeIRmW_LN1IfstSZHo9H6vAACwRgAAjmoGFbaSbd5PwbJ0DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49839",
        "pageSeq": 49839
    },
    {
        "IDcode": 49840,
        "title": "ガチ洗脳ちゃん　唾液タンツボ性処理便所リゼロシャス　しゃぶれよ、レムりん[お掃除フェラ編] - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGhOFnwnXyqbhLdp9H67gAAUxQwZeezLUAAlUaAAI5qBhWfqoMd8syjQE2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49840",
        "pageSeq": 49840
    },
    {
        "IDcode": 49841,
        "title": "ガチ洗脳ちゃん　誰とでも生ハメ超絶有名姦通レイヤー 闇過去１８歳アナル尻尾ＳＡ〇　シリ力ちゃん - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGhQtnwn6uJqKwneecC56tyNei1ZOmNgAChRoAAjmoGFZZRLoZ6WdDAjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49841",
        "pageSeq": 49841
    },
    {
        "IDcode": 49842,
        "title": "BoLoli 2017-05-06 Vol.052 Liu You Qi Sevenbaby (柳侑绮Sevenbaby) - Xia Mei Jiang (夏美酱) (Kobayashi-san-chi no maid dragon) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGhbZnwogKReMpg8RAkP53iLN_ovBcMgACRxsAAjmoGFYVltpsS_AXpDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49842",
        "pageSeq": 49842
    },
    {
        "IDcode": 49843,
        "title": "Coser Shiraga Yanko (しらが泱) (2017-05-25) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGhfhnwpUdSBu-V9bEYy_53cuasSAPQQACjRsAAjmoGFb0NhlNcy1bRzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49843",
        "pageSeq": 49843
    },
    {
        "IDcode": 49844,
        "title": "BoLoli 2017-04-25 Vol.047 Xia Mei Jiang (夏美酱), Liu You Qi Sevenbaby (柳侑绮Sevenbaby) (Kobayashi-san-chi no maid dragon) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGhy9nwqFNhmEYPbdCr4ZFMCrEidK3AwACyxwAAjmoGFaGsXBT8js_NzYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49844",
        "pageSeq": 49844
    },
    {
        "IDcode": 49845,
        "title": "Coser Loluuuuuu - Cuteness Overdose (2017-05-24) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGh2Znwqrl4k4pn4vomP4PSa6ECCbQRQACGR0AAjmoGFZL2dLQ_8b4jTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49845",
        "pageSeq": 49845
    },
    {
        "IDcode": 49846,
        "title": "Coser Rollrollろろ (寒小肉肉Rollroll) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGiJBnwrggM5I0ZtW06HwpLT7ZauV2qAACdh4AAjmoGFbV3xFLr-4ZSTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49846",
        "pageSeq": 49846
    },
    {
        "IDcode": 49847,
        "title": "Cosplay-e-3 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGichnwsXj1n5vw-CdnDt3bRYkm8PwcAAC7h8AAjmoGFZvkQtjeyccUjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49847",
        "pageSeq": 49847
    },
    {
        "IDcode": 49848,
        "title": "Sex Friend 30「はめ撮りこれくしょん -は◯かぜ- 」 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGil1nwtMyC0KdyqPkmvq-tzE48OmyMwACrCAAAjmoGFYR6DGYONRvizYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49848",
        "pageSeq": 49848
    },
    {
        "IDcode": 49849,
        "title": "Coser ShiCuCuBu (是粗粗不是姐姐) [BCY@720042] (2017-05-07) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGi3RnwuGJpzyB_gHId0oBEp0AAWNfOmoAAuwhAAI5qBhWRzqQtKR2fRM2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49849",
        "pageSeq": 49849
    },
    {
        "IDcode": 49850,
        "title": "Coser ShiCuCuBu (是粗粗不是姐姐) [BCY@720042] (2017-05-07) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGjJ9nwud2cggkmdv5DHNfls_Kq9rc5wACNCMAAjmoGFaY-MRklm94JTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49850",
        "pageSeq": 49850
    },
    {
        "IDcode": 49851,
        "title": "Coser SesshuAsuak (半半子) [BCY@33957] (2017-04-29) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGjYhnwvWT53jkYelB665pwig2td4tPAACLSQAAjmoGFZVtD6O1YVJizYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49851",
        "pageSeq": 49851
    },
    {
        "IDcode": 49852,
        "title": "Coser SesshuAsuak (半半子) [BCY@33957] (2017-04-29) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGjrRnwvtQmLUsSRIf6BVCOe_gfbhp1wACZSUAAjmoGFYOSNh2g4huCTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49852",
        "pageSeq": 49852
    },
    {
        "IDcode": 49853,
        "title": "はいか×らびっち119シモセカアンナ錦ノ宮 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGj7JnwwuooyDLB-3-r5a7ZLbK2cXbmQAC5hYAAkKvGFblNDEcNpVtHDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49853",
        "pageSeq": 49853
    },
    {
        "IDcode": 49854,
        "title": "はいか×らびっち119シモセカアンナ錦ノ宮 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGkN5nwxFrk-hvkVCQeIHKvBP8NK0uDQACOhgAAkKvGFZK7xzdpv8CJjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49854",
        "pageSeq": 49854
    },
    {
        "IDcode": 49855,
        "title": "[半半子] ヨルハ二号B型 Cosplay (ニーア オートマタ) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGkcVnwxz6Lc5nnmhvidjycEflYiVr8gACQhkAAkKvGFZZNrRdzdmr4TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49855",
        "pageSeq": 49855
    },
    {
        "IDcode": 49856,
        "title": "Coser Yuri Majyo (百合魔女) [BCY@31032] (2017-26-04) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGkg5nwyidF2nEyH-bgT4xhRVIksDfdAAClxkAAkKvGFY-yUKnSiDvLjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49856",
        "pageSeq": 49856
    },
    {
        "IDcode": 49857,
        "title": "Coser Yuri Majyo (百合魔女) [BCY@31032] (2017-26-04) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGk25nwy88dc9AHTSe_9AVLt0-zq935wAC9xoAAkKvGFZ0GLd-ijTJhDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49857",
        "pageSeq": 49857
    },
    {
        "IDcode": 49858,
        "title": "Coser Hoshilily (这很迟迟) [BCY@19413] (2017-04-23) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGlCNnw0c-RvovL6TaTpU8_V98J2pqzAACuRsAAkKvGFYVslGQmgbg1TYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49858",
        "pageSeq": 49858
    },
    {
        "IDcode": 49859,
        "title": "Coser Hoshilily (这很迟迟) [BCY@19413] (2017-04-23) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGlXlnw01zUV6BbnCxBFhswkAmqOH1zAACER0AAkKvGFZaG4V9FTQ3_zYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49859",
        "pageSeq": 49859
    },
    {
        "IDcode": 49860,
        "title": "Coser Hoshilily (这很迟迟) [BCY@19413] (2017-04-23) - Page 3",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGlqVnw1NKHnqTzaChk269KyuHl1apPQACPh4AAkKvGFabD8bovYE-6jYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49860",
        "pageSeq": 49860
    },
    {
        "IDcode": 49861,
        "title": "Coser Hoshilily (这很迟迟) [BCY@19413] (2017-04-23) - Page 4",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGl_Znw1l_TCaIaCyoKIk-hQABb6KuFnsAApQfAAJCrxhWPN88PD1_hbE2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49861",
        "pageSeq": 49861
    },
    {
        "IDcode": 49862,
        "title": "Coser Hoshilily (这很迟迟) [BCY@19413] (2017-04-23) - Page 5",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGmThnw1-i8nSo1LC3LNGjzna4zP505AAC1yAAAkKvGFY4iIIMKJCP6DYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49862",
        "pageSeq": 49862
    },
    {
        "IDcode": 49863,
        "title": "Coser HentaiKariko [BCY@291420] (2017-04-23) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGmxdnw3AoJ92P1_MmiKsZTOFw-nE72wACuiIAAkKvGFbW1ZB_-KHgIjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49863",
        "pageSeq": 49863
    },
    {
        "IDcode": 49864,
        "title": "Coser Hane Ame (雨波) [BCY@1319360] (2017-04-15) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGnBFnw34NSZJXmm1hjxiwkVubcAqRZAACtiMAAkKvGFaV82gXOIPDuTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49864",
        "pageSeq": 49864
    },
    {
        "IDcode": 49865,
        "title": "Coser Ely (E子) [bcy.net 768355] (2017-04-12) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGnQABZ8OQDTXLTJIYnqYZtaozFwSROf0AAqkkAAJCrxhWGTvyNmhHVAE2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49865",
        "pageSeq": 49865
    },
    {
        "IDcode": 49866,
        "title": "Coser Ely (E子) [bcy.net 768355] (2017-04-12) - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGnkVnw5Yc5DmTOyb9F-1mgvyIdUXYDwAC7iUAAkKvGFYZmQWYKf8dYTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49866",
        "pageSeq": 49866
    },
    {
        "IDcode": 49867,
        "title": "[ORANGE MANIAC] ヒトイヌサクヤ - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGoAVnw6T0vo2RzANsGq6iRq60w-jZ-gACuicAAkKvGFZHbam3lSyEujYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49867",
        "pageSeq": 49867
    },
    {
        "IDcode": 49868,
        "title": "Coser AzaiHatsu [bcy.net 38558] - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGozlnw7Ru6rnLUoB_ioHeXYqX4DeR8wACCysAAkKvGFac0u63SAELEDYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49868",
        "pageSeq": 49868
    },
    {
        "IDcode": 49869,
        "title": "Coser AzaiHatsu [bcy.net 38558] - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGpWdnw73iOlgnhgdvij83kcpPT8tkwQACQy0AAkKvGFZRETKmgmfYOTYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49869",
        "pageSeq": 49869
    },
    {
        "IDcode": 49870,
        "title": "妄想双子 - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGpjhnw8uPjNMmJVW3sRgFzw7wAAEvlwgAAh4uAAJCrxhWHO0gm78hNDw2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49870",
        "pageSeq": 49870
    },
    {
        "IDcode": 49871,
        "title": "妄想双子 - Page 2",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGp3tnw9Hdnh2tC3g-bB5iOdvHrkm4TgACay8AAkKvGFb9acz1xrfHEjYE",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49871",
        "pageSeq": 49871
    },
    {
        "IDcode": 49872,
        "title": "Coser Himeking (天皇姬) [bcy.net 12714] (2017-04-07) - Page 1",
        "cover": "https://pic.850123.xyz/d/BQACAgUAAyEGAASHe6CwAAEGqGlnw-s3y1p2o7bJqtzZ6QSHp-hdEwACnDAAAkKvGFaxLA7VX3x-AAE2BA",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=49872",
        "pageSeq": 49872
    }
];
