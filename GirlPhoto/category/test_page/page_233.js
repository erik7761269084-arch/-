// 每个对象包含：title、cover、url、pageSeq
const COMIC_DATA = [
    {
        "IDcode": 45372,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2d38cace6a50e0862a30c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45372",
        "pageSeq": 45372
    },
    {
        "IDcode": 45373,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/539a522eab3108cc8694c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45373",
        "pageSeq": 45373
    },
    {
        "IDcode": 45374,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/7a88fa09822758b6478f8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45374",
        "pageSeq": 45374
    },
    {
        "IDcode": 45375,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b609a205dca58719ce7b4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45375",
        "pageSeq": 45375
    },
    {
        "IDcode": 45376,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/cc9bf746bcdd27f2367c0.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45376",
        "pageSeq": 45376
    },
    {
        "IDcode": 45377,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/08a47c54747c67f222603.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45377",
        "pageSeq": 45377
    },
    {
        "IDcode": 45378,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/845fc5a3963639c4fa278.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45378",
        "pageSeq": 45378
    },
    {
        "IDcode": 45379,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/dd22df769679004e2350d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45379",
        "pageSeq": 45379
    },
    {
        "IDcode": 45380,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/0f35995771b37ea442330.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45380",
        "pageSeq": 45380
    },
    {
        "IDcode": 45381,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e13855d56fdf3f83b4fd9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45381",
        "pageSeq": 45381
    },
    {
        "IDcode": 45382,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ca503bfafdc718a927ad7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45382",
        "pageSeq": 45382
    },
    {
        "IDcode": 45383,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/4ce698dc47afd7d5158ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45383",
        "pageSeq": 45383
    },
    {
        "IDcode": 45384,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f605997af83c8759c514d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45384",
        "pageSeq": 45384
    },
    {
        "IDcode": 45385,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/d0996837c5751d58724e6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45385",
        "pageSeq": 45385
    },
    {
        "IDcode": 45386,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/7c9a1f8e2f8b3d910a107.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45386",
        "pageSeq": 45386
    },
    {
        "IDcode": 45387,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1fb2099940a3b26895572.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45387",
        "pageSeq": 45387
    },
    {
        "IDcode": 45388,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f3d815fcaea4f3267dea9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45388",
        "pageSeq": 45388
    },
    {
        "IDcode": 45389,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/25c1fd72325e8fde503d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45389",
        "pageSeq": 45389
    },
    {
        "IDcode": 45390,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/91868e5113308679bfc0c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45390",
        "pageSeq": 45390
    },
    {
        "IDcode": 45391,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/38fbe50b0ec94b0c226d7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45391",
        "pageSeq": 45391
    },
    {
        "IDcode": 45392,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ae53ba1ba17add4e2889d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45392",
        "pageSeq": 45392
    },
    {
        "IDcode": 45393,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2299c21a03e8338ff81f5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45393",
        "pageSeq": 45393
    },
    {
        "IDcode": 45394,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/4470ee71696ee93b978a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45394",
        "pageSeq": 45394
    },
    {
        "IDcode": 45395,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2e1918368b8f6dadc4893.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45395",
        "pageSeq": 45395
    },
    {
        "IDcode": 45396,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2b45190049b617867023f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45396",
        "pageSeq": 45396
    },
    {
        "IDcode": 45397,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9fda3dd03f75eaa0750de.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45397",
        "pageSeq": 45397
    },
    {
        "IDcode": 45398,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/0347555043757955a9d61.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45398",
        "pageSeq": 45398
    },
    {
        "IDcode": 45399,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8b516f937129a83387b13.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45399",
        "pageSeq": 45399
    },
    {
        "IDcode": 45400,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c0af00010466a2b8b7e1d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45400",
        "pageSeq": 45400
    },
    {
        "IDcode": 45401,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/aca09f59239913a701076.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45401",
        "pageSeq": 45401
    },
    {
        "IDcode": 45402,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8fc95b343a7114724b9c8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45402",
        "pageSeq": 45402
    },
    {
        "IDcode": 45403,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b79bcc72df874be616964.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45403",
        "pageSeq": 45403
    },
    {
        "IDcode": 45404,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/f1f4ffa1a426c607fdf89.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45404",
        "pageSeq": 45404
    },
    {
        "IDcode": 45405,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1eca681ecf0be79011fac.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45405",
        "pageSeq": 45405
    },
    {
        "IDcode": 45406,
        "title": "女仆能代庄园 - Page 1",
        "cover": "https://telegra.ph/file/d8881c2656ccd3eeb264b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45406",
        "pageSeq": 45406
    },
    {
        "IDcode": 45407,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/6be6d6ee9a8fcc06e3bbe.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45407",
        "pageSeq": 45407
    },
    {
        "IDcode": 45408,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/0cc9fbc7d6c12de4ee799.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45408",
        "pageSeq": 45408
    },
    {
        "IDcode": 45409,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/725b2418cdc9c73a88ca1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45409",
        "pageSeq": 45409
    },
    {
        "IDcode": 45410,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/669e20297dbab28d87aa5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45410",
        "pageSeq": 45410
    },
    {
        "IDcode": 45411,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9634c5ecd63211c291bc5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45411",
        "pageSeq": 45411
    },
    {
        "IDcode": 45412,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1e5cb6927add77d627d5f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45412",
        "pageSeq": 45412
    },
    {
        "IDcode": 45413,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/33c64c67c5236741a358f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45413",
        "pageSeq": 45413
    },
    {
        "IDcode": 45414,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e80fe67aded077cb355a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45414",
        "pageSeq": 45414
    },
    {
        "IDcode": 45415,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9a7715d69ec267b398553.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45415",
        "pageSeq": 45415
    },
    {
        "IDcode": 45416,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1623bb6887c47eb1aca8d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45416",
        "pageSeq": 45416
    },
    {
        "IDcode": 45417,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8536ace053f06f74e40ec.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45417",
        "pageSeq": 45417
    },
    {
        "IDcode": 45418,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/86e39150b0db4b1ff46f2.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45418",
        "pageSeq": 45418
    },
    {
        "IDcode": 45419,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9e46385b194037c8e6dbc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45419",
        "pageSeq": 45419
    },
    {
        "IDcode": 45420,
        "title": "软甜糯米糍 - 八重神子 - Page 1",
        "cover": "https://telegra.ph/file/8cc8e8d59779ddf8452fa.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45420",
        "pageSeq": 45420
    },
    {
        "IDcode": 45421,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e86b6a54f693b75222036.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45421",
        "pageSeq": 45421
    },
    {
        "IDcode": 45422,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/3b4d41221fa9c24d636c6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45422",
        "pageSeq": 45422
    },
    {
        "IDcode": 45423,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/0008fd51dc359c5742f56.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45423",
        "pageSeq": 45423
    },
    {
        "IDcode": 45424,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/aacfdf4786b47d7f1c910.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45424",
        "pageSeq": 45424
    },
    {
        "IDcode": 45425,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/969d37261550509313cff.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45425",
        "pageSeq": 45425
    },
    {
        "IDcode": 45426,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8a232407a48488b7b5f1f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45426",
        "pageSeq": 45426
    },
    {
        "IDcode": 45427,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2b8aea65dbfba1147db3a.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45427",
        "pageSeq": 45427
    },
    {
        "IDcode": 45428,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b8e59bdda1335eb5c70eb.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45428",
        "pageSeq": 45428
    },
    {
        "IDcode": 45429,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/613e8ae20ed4aa78de4a1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45429",
        "pageSeq": 45429
    },
    {
        "IDcode": 45430,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/88ac33f8d20940aa9eb12.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45430",
        "pageSeq": 45430
    },
    {
        "IDcode": 45431,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ba91e744c7823f16fa7be.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45431",
        "pageSeq": 45431
    },
    {
        "IDcode": 45432,
        "title": "- Page 2",
        "cover": "https://telegra.ph/file/22c857a92d49d632c5209.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45432",
        "pageSeq": 45432
    },
    {
        "IDcode": 45433,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e2765d69243d1a97a6c50.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45433",
        "pageSeq": 45433
    },
    {
        "IDcode": 45434,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/268de51011fcc84684055.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45434",
        "pageSeq": 45434
    },
    {
        "IDcode": 45435,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8b7d3ca6515efc0312f22.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45435",
        "pageSeq": 45435
    },
    {
        "IDcode": 45436,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/56188703eaa50a0caa7d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45436",
        "pageSeq": 45436
    },
    {
        "IDcode": 45437,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1eb8b3e33893291894697.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45437",
        "pageSeq": 45437
    },
    {
        "IDcode": 45438,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/8ae3e6a84f47ee704dd16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45438",
        "pageSeq": 45438
    },
    {
        "IDcode": 45439,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e02211e5df903d991bb9f.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45439",
        "pageSeq": 45439
    },
    {
        "IDcode": 45440,
        "title": "氷-hyou- - Page 1",
        "cover": "https://telegra.ph/file/88a11e1f24d63ce5d4529.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45440",
        "pageSeq": 45440
    },
    {
        "IDcode": 45441,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b13dd372c0a2a2a505c85.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45441",
        "pageSeq": 45441
    },
    {
        "IDcode": 45442,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e39d37587ae22e9281b2b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45442",
        "pageSeq": 45442
    },
    {
        "IDcode": 45443,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9fe9a5410393abf7dfb30.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45443",
        "pageSeq": 45443
    },
    {
        "IDcode": 45444,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/a8ac61854facb09b9dfa5.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45444",
        "pageSeq": 45444
    },
    {
        "IDcode": 45445,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b0f33ba06fef525e7adc6.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45445",
        "pageSeq": 45445
    },
    {
        "IDcode": 45446,
        "title": "[HERESY (林檎蜜紀)]原ネ 申・淫ぱくと・一／甘雨 - Page 1",
        "cover": "https://telegra.ph/file/f112436072880af3df5e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45446",
        "pageSeq": 45446
    },
    {
        "IDcode": 45447,
        "title": "秋和柯基 & Natsuko夏夏子 米哈拉&尤妮 - Page 1",
        "cover": "https://telegra.ph/file/3638b9edededd47fe546c.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45447",
        "pageSeq": 45447
    },
    {
        "IDcode": 45448,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/48924c6657320ca28cbb7.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45448",
        "pageSeq": 45448
    },
    {
        "IDcode": 45449,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/01072d3dc36b64c2b55a9.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45449",
        "pageSeq": 45449
    },
    {
        "IDcode": 45450,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/b4c9cf47481354dfffd16.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45450",
        "pageSeq": 45450
    },
    {
        "IDcode": 45451,
        "title": "屿鱼 NO.2 Toki X 飛鳥馬トキ兔女郎 蓝色兔子 [45P] - Page 1",
        "cover": "https://telegra.ph/file/ce2efe35a061012156cee.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45451",
        "pageSeq": 45451
    },
    {
        "IDcode": 45452,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/05ff44fe782b201cf99d4.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45452",
        "pageSeq": 45452
    },
    {
        "IDcode": 45453,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/c1db6244ab3a0c230c053.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45453",
        "pageSeq": 45453
    },
    {
        "IDcode": 45454,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e0145614a796be5af8280.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45454",
        "pageSeq": 45454
    },
    {
        "IDcode": 45455,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/e68851fd3c8bedd2411c1.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45455",
        "pageSeq": 45455
    },
    {
        "IDcode": 45456,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/21452455f5af368c1c5a3.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45456",
        "pageSeq": 45456
    },
    {
        "IDcode": 45457,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/1cfaf3a8d3ed1e5e3a4ab.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45457",
        "pageSeq": 45457
    },
    {
        "IDcode": 45458,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/52536b1042333b018e51b.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45458",
        "pageSeq": 45458
    },
    {
        "IDcode": 45459,
        "title": "[Xidaidai] 小恶魔喜多川 - Page 1",
        "cover": "https://telegra.ph/file/4ab30bfa93970b1bacf19.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45459",
        "pageSeq": 45459
    },
    {
        "IDcode": 45460,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/4d1faccac7cbc462ff985.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45460",
        "pageSeq": 45460
    },
    {
        "IDcode": 45461,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/50bf496ed32e4fd7410a8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45461",
        "pageSeq": 45461
    },
    {
        "IDcode": 45462,
        "title": "[林檎蜜紀] チップお礼有回です💜11月もありがとうございました！＆12月のお知らせ💖💜_すけべレオタードはいいぞ。冬コミ新作ROM💜ニーアオートマタ2Bチラ見せ - Page 1",
        "cover": "https://telegra.ph/file/4e929c0023f01e38073fc.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45462",
        "pageSeq": 45462
    },
    {
        "IDcode": 45463,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/08bb0622965fdbf9f5153.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45463",
        "pageSeq": 45463
    },
    {
        "IDcode": 45464,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/2a0aeb7b86c75cd447946.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45464",
        "pageSeq": 45464
    },
    {
        "IDcode": 45465,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/9db0e8ffb63d930aa0905.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45465",
        "pageSeq": 45465
    },
    {
        "IDcode": 45466,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/6e7e9e6c958bbde7bdade.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45466",
        "pageSeq": 45466
    },
    {
        "IDcode": 45467,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/940033c1a6b76eccc7f2d.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45467",
        "pageSeq": 45467
    },
    {
        "IDcode": 45468,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/70edc95b12d6e353eda25.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45468",
        "pageSeq": 45468
    },
    {
        "IDcode": 45469,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/322fe8ce377736ac62b00.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45469",
        "pageSeq": 45469
    },
    {
        "IDcode": 45470,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/ba39e794f0dba0ce926e8.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45470",
        "pageSeq": 45470
    },
    {
        "IDcode": 45471,
        "title": "- Page 1",
        "cover": "https://telegra.ph/file/17c9fbda7981b4faeed55.jpg",
        "url": "https://yunvgong.com/comics/comicDetails.html?series=45471",
        "pageSeq": 45471
    }
];
