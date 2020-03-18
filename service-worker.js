/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "af5ec43a219cc6aa828542047cc25308"
  },
  {
    "url": "assets/css/0.styles.097e3777.css",
    "revision": "614ecf1abdc728f943fd9a1f3aa0100e"
  },
  {
    "url": "assets/favicon/android-chrome-192x192.png",
    "revision": "004e46917395c7ec406327b31644c58c"
  },
  {
    "url": "assets/favicon/android-chrome-512x512.png",
    "revision": "818c788da08f2fca3aac5c197e599c69"
  },
  {
    "url": "assets/favicon/apple-touch-icon.png",
    "revision": "b68ec12e17664d0a9e658488e77b11a5"
  },
  {
    "url": "assets/favicon/favicon-16x16.png",
    "revision": "410fff4ff56c1e0d7cc64b139baea5fc"
  },
  {
    "url": "assets/favicon/favicon-32x32.png",
    "revision": "668ce4ea8a25ba4935de57c9745256aa"
  },
  {
    "url": "assets/favicon/mstile-150x150.png",
    "revision": "1ec57fffb6e10faf63b337a8ea25b62c"
  },
  {
    "url": "assets/favicon/safari-pinned-tab.svg",
    "revision": "8c08ac3cb533d1e090f2a610a59a8483"
  },
  {
    "url": "assets/img/800x600.png",
    "revision": "eb2a1976be398fafb5427d5ca17b5bc8"
  },
  {
    "url": "assets/img/courses/asterics-grid.jpg",
    "revision": "7f95fcce808d500d117e5f25bd1d7345"
  },
  {
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/courses/vhdl-adder.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
  },
  {
    "url": "assets/img/logos/ma23_funded.png",
    "revision": "d6f9117b5659107e66779f18a84cf1d3"
  },
  {
    "url": "assets/img/logos/ma23.svg",
    "revision": "03a32d82ab1d3247ecd24788fa284571"
  },
  {
    "url": "assets/img/logos/studyathome-noir-circular.svg",
    "revision": "6892f6e0f75fecfd78404879bfdc639c"
  },
  {
    "url": "assets/img/logos/studyathome-noir.svg",
    "revision": "0747fffa96b77aca8bbd318ee6957060"
  },
  {
    "url": "assets/img/ma23_funded.d6f9117b.png",
    "revision": "d6f9117b5659107e66779f18a84cf1d3"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-1.jpg",
    "revision": "2009674f2ef164e6d70e65e7de9e8862"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-2.jpg",
    "revision": "1cacabc550cc227647f2e5b2d29faebb"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-3.jpg",
    "revision": "17713de74a732cbce1588ad714e0cf2a"
  },
  {
    "url": "assets/img/partner/uastw/uastw-at-night.jpg",
    "revision": "bb98ed986758d05549ae03342857dd73"
  },
  {
    "url": "assets/img/partners.82f515d1.svg",
    "revision": "82f515d1d6b00ca0bb96184a77e560d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-workflow-all.bd2f8ab6.svg",
    "revision": "bd2f8ab64c179ae8b7c45f1fb73e7550"
  },
  {
    "url": "assets/js/1.0d827ae6.js",
    "revision": "292228c05a4aa50420e87cf4ebe4a1c3"
  },
  {
    "url": "assets/js/10.ba741f64.js",
    "revision": "253630f7b8876fe99dbd831e115d667d"
  },
  {
    "url": "assets/js/100.da33ce78.js",
    "revision": "89062b65be62cf40c5c9965e1ee0d893"
  },
  {
    "url": "assets/js/101.b4c3ed0f.js",
    "revision": "18d38a7ccb561c2e1a6645af613119e1"
  },
  {
    "url": "assets/js/11.1dc75fd0.js",
    "revision": "79f28d31c5213d107fa21f1e5048912a"
  },
  {
    "url": "assets/js/12.1a6533b6.js",
    "revision": "e28768ea80a6915f93bec1cbcac0ec57"
  },
  {
    "url": "assets/js/13.708ad160.js",
    "revision": "9a7e1365e8aadd1915f266ce9d644ee2"
  },
  {
    "url": "assets/js/14.7d156c09.js",
    "revision": "e6cc82dc79b719fc98983cd83da12d01"
  },
  {
    "url": "assets/js/15.2cfd2c0e.js",
    "revision": "ec4d5668648c201275142872dd92baf1"
  },
  {
    "url": "assets/js/16.30740248.js",
    "revision": "3b947c30298b786756910387336af45c"
  },
  {
    "url": "assets/js/17.34a70b71.js",
    "revision": "6ccefd8dcd36897f484f0c630e289973"
  },
  {
    "url": "assets/js/18.dc578c4f.js",
    "revision": "af6ce544eefeafd67bbf5dfb585cea61"
  },
  {
    "url": "assets/js/19.6b4c96fd.js",
    "revision": "8748b65925c0237138504794f6732325"
  },
  {
    "url": "assets/js/20.4f582f59.js",
    "revision": "6d3700819ea300f49189159519ba6a98"
  },
  {
    "url": "assets/js/21.4b81f3d3.js",
    "revision": "67f27a5788ef4d33020ba9ed3d43ffc7"
  },
  {
    "url": "assets/js/22.9c006f79.js",
    "revision": "f47ab671ec5d1588cd9665ab3206e932"
  },
  {
    "url": "assets/js/23.4769968f.js",
    "revision": "3a48157e4500f627a500a24b044885fb"
  },
  {
    "url": "assets/js/24.51e51b5a.js",
    "revision": "62a38cf29c9ef30fb2843479ff511fca"
  },
  {
    "url": "assets/js/25.66987c42.js",
    "revision": "47223d08d6d153a7de9c31168337f386"
  },
  {
    "url": "assets/js/26.f84fffc8.js",
    "revision": "94fa764b475ce670b10be26926c1261d"
  },
  {
    "url": "assets/js/27.7c9d06b4.js",
    "revision": "46ffd2c64cb97157a4559952bb905057"
  },
  {
    "url": "assets/js/28.3a956c60.js",
    "revision": "16f07d435c4ca05af08f6b92cba6a324"
  },
  {
    "url": "assets/js/29.00c831ea.js",
    "revision": "cdd2545a99d9018465ed9e1a2a95ed1b"
  },
  {
    "url": "assets/js/3.ff90e9f7.js",
    "revision": "9a03e9200bb2ab80c76926fdf8c5ef76"
  },
  {
    "url": "assets/js/30.94c469d0.js",
    "revision": "02971f43907a5abf05c2bc1790cff2fc"
  },
  {
    "url": "assets/js/31.cb30334a.js",
    "revision": "e592610b183a2ef8257f93d7179f32d9"
  },
  {
    "url": "assets/js/32.53beb6db.js",
    "revision": "e5870ae601c9e6b0b84ea4d73376c36f"
  },
  {
    "url": "assets/js/33.6b3e49a1.js",
    "revision": "aa93a9f6e02212b451211b90795a2ab0"
  },
  {
    "url": "assets/js/34.acc6c2a5.js",
    "revision": "898d6703a2745afafb99df9a806bd79b"
  },
  {
    "url": "assets/js/35.b4a5ce81.js",
    "revision": "6b2d19c2fbb1e0b3e2da3e1b8f6e98c4"
  },
  {
    "url": "assets/js/36.0dc4fc06.js",
    "revision": "dc27a61208e3329e066caa74bce8d68c"
  },
  {
    "url": "assets/js/37.2a19edcc.js",
    "revision": "f576a2659df9ae7fef77544d06d1ffbb"
  },
  {
    "url": "assets/js/38.ca8b2fda.js",
    "revision": "1815a9e54a20a483a85544b6bf4ddca5"
  },
  {
    "url": "assets/js/39.d9f4bc20.js",
    "revision": "f880a4a1e6b255aa45667fc203b9679c"
  },
  {
    "url": "assets/js/4.76cb1118.js",
    "revision": "436f054bec7e3b588d4c9cfceddc2dcd"
  },
  {
    "url": "assets/js/40.a08044e4.js",
    "revision": "c88655eb37f53f394f746459e97c0ef3"
  },
  {
    "url": "assets/js/41.70d41f9f.js",
    "revision": "706824e4d89c86f11e650dcc7629132d"
  },
  {
    "url": "assets/js/42.432af5ef.js",
    "revision": "1e8f22adbb4cf7bf3fece3ef1a4485f5"
  },
  {
    "url": "assets/js/43.d278d76b.js",
    "revision": "be6c22491aa6b5cdb3fb8d9b7e48e44b"
  },
  {
    "url": "assets/js/44.0e605733.js",
    "revision": "d7a4d0a76546f2104b89252113ed2ada"
  },
  {
    "url": "assets/js/45.b1de8c49.js",
    "revision": "6104ff5d5a80d3c1ee33a6a4086e91c1"
  },
  {
    "url": "assets/js/46.8e457e28.js",
    "revision": "5364ac7363c43ac737b77569d55b163a"
  },
  {
    "url": "assets/js/47.91e11d27.js",
    "revision": "2c611b9a8be5a1db69505e9d0fbf5662"
  },
  {
    "url": "assets/js/48.136d08a1.js",
    "revision": "eed33ceb3ccae65c7408cc8d61f43fa9"
  },
  {
    "url": "assets/js/49.e52492ed.js",
    "revision": "4236c6a09c94aeef1de6ae644fdc280c"
  },
  {
    "url": "assets/js/5.f83e5ccd.js",
    "revision": "924bb0bbf744d7adb1888a33dda59740"
  },
  {
    "url": "assets/js/50.edca3681.js",
    "revision": "dc0480e4a0ed220e49b45d4ed5dd482c"
  },
  {
    "url": "assets/js/51.24d344ab.js",
    "revision": "6491594d50684aac79275eeb5cbaa5b7"
  },
  {
    "url": "assets/js/52.df4ce632.js",
    "revision": "80a8d2429d6fe33f16427c95ca748b8b"
  },
  {
    "url": "assets/js/53.630d3e3d.js",
    "revision": "282640e4db644620f8e30b3646de3ea1"
  },
  {
    "url": "assets/js/54.b708c09e.js",
    "revision": "f79df5d52436bed640ec037efc5fb5ac"
  },
  {
    "url": "assets/js/55.90d11347.js",
    "revision": "36a4f78bbf79e1bb1130d17079cba1fc"
  },
  {
    "url": "assets/js/56.94f3149c.js",
    "revision": "6d8ddc9ef84b0a664ce4b17940d60ab1"
  },
  {
    "url": "assets/js/57.b728d780.js",
    "revision": "25bb57e8d6fbe765a4065a1d56557319"
  },
  {
    "url": "assets/js/58.a0758b1e.js",
    "revision": "dda3ab588014d786777dc99f0d887887"
  },
  {
    "url": "assets/js/59.d5766b9e.js",
    "revision": "aa724b0da0f0b6754e02620d900e0e89"
  },
  {
    "url": "assets/js/6.4efb94c5.js",
    "revision": "1a3e8b1b337c566ad78e42d7acdee47c"
  },
  {
    "url": "assets/js/60.2d1e1a68.js",
    "revision": "a031736349f4bde0926dca7a33835481"
  },
  {
    "url": "assets/js/61.1bb8f159.js",
    "revision": "3aeaa52729caed786c3533acb1cde53c"
  },
  {
    "url": "assets/js/62.973f40af.js",
    "revision": "98045520272be16b519030ac613286bd"
  },
  {
    "url": "assets/js/63.f10bbe2b.js",
    "revision": "230347c3ce9b004c99bdf0a4a979da54"
  },
  {
    "url": "assets/js/64.5b3a6499.js",
    "revision": "e3a863ac159457073ab64c057cd7c2e4"
  },
  {
    "url": "assets/js/65.9db8e46d.js",
    "revision": "dc99355cb187666746db11d8e935a747"
  },
  {
    "url": "assets/js/66.35c912b8.js",
    "revision": "6a15dc79c663501388f3db39e9fb3058"
  },
  {
    "url": "assets/js/67.b1d56af7.js",
    "revision": "8be168501a0cfd52b77d3e0b78741fed"
  },
  {
    "url": "assets/js/68.4e2e3b20.js",
    "revision": "7cd4b23587f9f182176827ba7aee78b2"
  },
  {
    "url": "assets/js/69.bedccb10.js",
    "revision": "b8cd67aa938afdd192ffad5ddc90055b"
  },
  {
    "url": "assets/js/7.eec7b586.js",
    "revision": "0fbf4bcb4139de44b0dc206cdb789913"
  },
  {
    "url": "assets/js/70.805c64c6.js",
    "revision": "0adb4f589a869f1e4c60b5de40882ba9"
  },
  {
    "url": "assets/js/71.44feb02a.js",
    "revision": "49acb1671632582e1d2a476fc15afaad"
  },
  {
    "url": "assets/js/72.12b2587c.js",
    "revision": "55e07d36a5d870108e1f7261b009454a"
  },
  {
    "url": "assets/js/73.48d2db26.js",
    "revision": "b18aec7e1cb2f6d24a28f58e9b3e2182"
  },
  {
    "url": "assets/js/74.84c298e1.js",
    "revision": "ec3a8ad094cc419ae6825ff060577641"
  },
  {
    "url": "assets/js/75.688c0ffc.js",
    "revision": "df360f31480763664453489cd719c035"
  },
  {
    "url": "assets/js/76.2375374b.js",
    "revision": "36457786687f1cdd673c438ed177e47d"
  },
  {
    "url": "assets/js/77.e548c065.js",
    "revision": "a7a475da09635a20e59c14084a9ad28c"
  },
  {
    "url": "assets/js/78.b7deac41.js",
    "revision": "0aa38275ef85b3d6fa7ec1d280f28b2a"
  },
  {
    "url": "assets/js/79.0e9ee05b.js",
    "revision": "de725c2d60a85e69ce5ce0a3f9c1a9a1"
  },
  {
    "url": "assets/js/8.65997bba.js",
    "revision": "c02a4075b6f99debed10e4a0f3847c9d"
  },
  {
    "url": "assets/js/80.a71a0cb5.js",
    "revision": "565584089b7676983a45bfb22bfc111d"
  },
  {
    "url": "assets/js/81.03792e49.js",
    "revision": "73aa9da8f243c070e9e89687c3363867"
  },
  {
    "url": "assets/js/82.42039470.js",
    "revision": "860f9092eec56bb74f8d4dafc1825bb6"
  },
  {
    "url": "assets/js/83.e0a2ef45.js",
    "revision": "6e3a9ef55dbcb68fd209cf799420c09d"
  },
  {
    "url": "assets/js/84.0a1104c0.js",
    "revision": "d51f14bf475d030787f6603941bd3393"
  },
  {
    "url": "assets/js/85.e91a56c6.js",
    "revision": "ed8a6a951c75d6e7b9fdd0b9a1731ba7"
  },
  {
    "url": "assets/js/86.1e8f797d.js",
    "revision": "92436fea246843adf8802b4dcbb3aff9"
  },
  {
    "url": "assets/js/87.d5e7e212.js",
    "revision": "398b326ff0abdc44034a495c11e607fa"
  },
  {
    "url": "assets/js/88.3f2e0c5d.js",
    "revision": "ee7ed7543d9f378e7798d0609d283703"
  },
  {
    "url": "assets/js/89.e7594988.js",
    "revision": "1715d4e4ff48ef61456d9de3b8697d05"
  },
  {
    "url": "assets/js/9.6ef8f66a.js",
    "revision": "e6f987319d85e97f6b19e03c76bb4d2c"
  },
  {
    "url": "assets/js/90.29a57330.js",
    "revision": "2f2d6c616ccaff40287798e723245fdd"
  },
  {
    "url": "assets/js/91.3a4af558.js",
    "revision": "ee52a9e5ec3b0c01221cdbe31a53ec64"
  },
  {
    "url": "assets/js/92.85f91302.js",
    "revision": "0c43d2b9d6683add9ca711bbd9d6e390"
  },
  {
    "url": "assets/js/93.9faa028e.js",
    "revision": "1f59a64c060a25aa02438b39ff91f99e"
  },
  {
    "url": "assets/js/94.24d42f40.js",
    "revision": "8a13e3a09d8b0905dc9a7ead0ac648dc"
  },
  {
    "url": "assets/js/95.73314f24.js",
    "revision": "adb42252dd46c3714c9c90388fb1dff3"
  },
  {
    "url": "assets/js/96.79a2e105.js",
    "revision": "83e13f2f7517824936a9106e60bc1624"
  },
  {
    "url": "assets/js/97.6476761f.js",
    "revision": "cb2bcee27bda886884bdcf7585599f6b"
  },
  {
    "url": "assets/js/98.999f9914.js",
    "revision": "debb18a35a39deeed846951cacc5304e"
  },
  {
    "url": "assets/js/99.ba0e458c.js",
    "revision": "a3a14ee6f6a533bb665b8bbe17044fb1"
  },
  {
    "url": "assets/js/app.b3f61ca0.js",
    "revision": "64d476f72873ac4ed0c8443154ab4f18"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "65e0cf0aa0fa28144afec90b687cc485"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "a737fef3c28c5580faf79c656438d54e"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "bcbef3eaad03b6e03b5e3e0cba1742e6"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "86afb054a31f648c037ea3cea30e21df"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "94f1966afa6190ee0ff9d03fab1722a3"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "0fc9c33b9019cf9d536e6d20537e5bc2"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "8590d0cb2a3d762e5b4b455a772de788"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "6ef2d88752a796d167aab34bc25434e7"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "d335fcc18309e151957548137b2b2b40"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "3081af54dbf039f88856b99909c63853"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "663191dceeceb280d9fe9dda9c2563bf"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "4f4f37c914d053ffd269d4c519ac7964"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "33e0887822a75ae6a45970d7560314f3"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "80825a61a319ccd1f21eec0dfee2eddf"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "f8c239f34925513f6412eb88b6c46289"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "729f0a127d61cf6c60409d9325ae435e"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "dd35ed5f762bbda12b79ce70057bf466"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "774681c9541bcb4dfc7bc352aeb1dffa"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "44a9e82076ebbde06b86fa53f7932501"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "dedd4d809112b4031de02aa4c8dc67e2"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "f27c7bb56ddf5b24ec3619ec8f529b69"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "145629ced576af89512a708b335aaeb1"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "a4db5eb75e3890f380569ea8121bdad0"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "52567a5051eaf8e09cd6e876c486e3b2"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "3537db1d26e8599d5b92998db0c13b88"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "abf71b3b41c83b7c82bd5bcf129eecb8"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "e368ded5704bc527434101360c178ce7"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "8c65615d36465382d24d994768857d40"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "f21bf11f2efb720926dba777262ad7f9"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "57cdca77e153de95227915aad9adfcdc"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "7d2204ce1e3f04107c980a58a4c86869"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "95261edcc8e8b71535a976c426f9bd37"
  },
  {
    "url": "courses/index.html",
    "revision": "10231de0b146bc1d29e55b77206949ba"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "be769608df9e2c58b34c410740062403"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "73590d227436a3ec34068c1b8ddde159"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "bc7ece0576bc1add854d244db8b2a2fb"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "02abec9169d5aad6ada8bbd0cc4a0199"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "1c877edeeff193aaba41583e82d53087"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "14f323fcaf5f1e064e910598a9f6beaf"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "9404c5166a33504839759c7bee853114"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "408d1b8b7fb286b2d8bde6f0aaadabff"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "9cd001fea044cfc720a8f56197e203b5"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "afc92c9f229cbe3e0650f34a293ba343"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "cfa8faa47d44e4c7bdc48d3066828cdc"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "5f625c7f07eefd794ebea2a526ddb78f"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "feb6a3128192d4787162deb11166fb2d"
  },
  {
    "url": "courses/template/index.html",
    "revision": "f9a57ca6a5f4590fbd4ccaf6fd72a2e0"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "dc9df1ad65843f687a92e36f15e72a29"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "4caf4b2b6297ac8e21903026bb0cabee"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "3efb049883bca9307ef43df9c523498e"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "4174bb848716b04e9bf2e9e64adc7ddd"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "825d996376d516a68b1b0cc6037e5864"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "d33d176a9fb1cacf76ced460634698de"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "84fe10bd4ece5d9fb0c84a3335d70d49"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d28e160a880a8d147c8fdd6844c64ad9"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "8b3efd0141273950741a6894e3b984df"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "22a06dcbcce55cd73e3ac23caa7c7a49"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "e90bfbca831b3f805cc38c64f4976086"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "bd1fe40f939743df914722d43a252be7"
  },
  {
    "url": "general/enroll.html",
    "revision": "53ea5a0217b115762456d15663fbd700"
  },
  {
    "url": "index.html",
    "revision": "e19b4460913f5583660b9deec0047998"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "2b539f86932366014441d06f202b2ea1"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "cd44305c3c0e9d9250b90d30824296a3"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "65afd95a1a0c8732b303ea8f5efd8014"
  },
  {
    "url": "studyathome/about.html",
    "revision": "c0f2fd3f5bf377f373913eca50dc7e89"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ab8a5d635b916a0218294036f4c6ca27"
  },
  {
    "url": "studyathome/help.html",
    "revision": "750036e65eebc5f126cba7e422593e30"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "ef1b4bc1e5a014dc0f05440c279abd97"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "dc52d5f81e2f860804aaeee4491997a2"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "cb179b20100aa23bf474771b3c740f89"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "e03b545016cdee3d491a74a9e7b9c27e"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "b8152e4ca48afe97ec36df3b2bf527f0"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "4496c0a127d6c62e8f0fa31836ed201c"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "2639333702a04efdc5a60a2fb868ba80"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "47fc190ad8d496c9a931df337d065439"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "a2b3d5fbce22ceb1a616c10c1303e5e7"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "be01a12c1aa8bcb143ff56083af70e84"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "49bca03fdf3a502dfe23102cffeb1d20"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "eb3bcead3b152b7fecdb38c782b7993d"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "3afd99bb20fc188a24e24b8e59f28fc3"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "68ad3748a88f664eb258b91fbc5b190c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "91776f4237046b6cab5e34e4c61e085b"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c66c050793900e91d969aa0125237e67"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "811216edd7958aa0bd98325a47ce12f9"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "ff817af1a52d3d2546c3016fdbf1c7ff"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "d10bccb58ef26f74de2cafab1de16323"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "685507e5344c3951c8fff7054bd873c4"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "226dd1d8122f2bd2f36ee6becf097531"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "9ca56a8d0ef597d751765272f7b0a358"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
