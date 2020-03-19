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
    "revision": "f26881c9aad774b02dc10573f690e525"
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
    "url": "assets/js/12.d3700da5.js",
    "revision": "396f65a85ad1010bfb57b169b68ad701"
  },
  {
    "url": "assets/js/13.c03608ff.js",
    "revision": "4181f01412369f00f6db9f8bf11e17a8"
  },
  {
    "url": "assets/js/14.560041c9.js",
    "revision": "544cc66ecbb1a1ccb593d834c530842d"
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
    "url": "assets/js/18.c61f8da7.js",
    "revision": "45e703223a2a97d20012ffc7c302d2d1"
  },
  {
    "url": "assets/js/19.d8358fef.js",
    "revision": "7766151d8c917cee861a4bba7dfe0bf3"
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
    "url": "assets/js/27.66e30563.js",
    "revision": "1da68519f3fe632e17b434436e17794b"
  },
  {
    "url": "assets/js/28.b08473ea.js",
    "revision": "32de3dcf8acb14570206d17e1966b466"
  },
  {
    "url": "assets/js/29.aae1f0c3.js",
    "revision": "af7c41a8806d45c1d96b2054b3850a0f"
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
    "url": "assets/js/32.f5754cc4.js",
    "revision": "7fbd2c26f6126168e083993331f37930"
  },
  {
    "url": "assets/js/33.e2b3100a.js",
    "revision": "4b2de7fec2d73b336eee718d1df95728"
  },
  {
    "url": "assets/js/34.8d9d3014.js",
    "revision": "362beeb4cdbd92649059597061e0d268"
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
    "url": "assets/js/37.5977294d.js",
    "revision": "021868dfda0d0be0735039ed8cd1bb7e"
  },
  {
    "url": "assets/js/38.11b32059.js",
    "revision": "1e1ef916676e12e8f932ea867a7c3929"
  },
  {
    "url": "assets/js/39.70388bde.js",
    "revision": "9692c0dfc864eb42c57777ae581cb363"
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
    "url": "assets/js/43.dbf8d7fe.js",
    "revision": "3860778e9c3a40c35509b7c161d0e437"
  },
  {
    "url": "assets/js/44.a63bdd68.js",
    "revision": "9b028233ab88726bd70e52944edc7133"
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
    "url": "assets/js/47.0743879d.js",
    "revision": "2db6034f0865cd056464220391176f17"
  },
  {
    "url": "assets/js/48.cc7c1d5e.js",
    "revision": "d3788ac14f96b50d6d85dc8c7688fa9c"
  },
  {
    "url": "assets/js/49.11b58eee.js",
    "revision": "54d46ab9d4a23d2a92d4a818f082d721"
  },
  {
    "url": "assets/js/5.f83e5ccd.js",
    "revision": "924bb0bbf744d7adb1888a33dda59740"
  },
  {
    "url": "assets/js/50.ea7a745a.js",
    "revision": "ba515f2201ca298685e07e6ec72ce521"
  },
  {
    "url": "assets/js/51.362dde24.js",
    "revision": "c9ebce6b571b859f60ab3b4cf69a9804"
  },
  {
    "url": "assets/js/52.4477ef17.js",
    "revision": "c1b30aa7e43812c2b09162a1dab92d77"
  },
  {
    "url": "assets/js/53.bddc5134.js",
    "revision": "c9fc0e9ef16355f25ff9f95292e41753"
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
    "url": "assets/js/57.e102dff6.js",
    "revision": "905432cf92f835a464f5859aa3c7a561"
  },
  {
    "url": "assets/js/58.2d179fe7.js",
    "revision": "2231ddabcd02030e8ff1736300ac761f"
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
    "url": "assets/js/60.0ca039fa.js",
    "revision": "c6b6a488a0b6bdb1b43ca94340cd1085"
  },
  {
    "url": "assets/js/61.9c589dbb.js",
    "revision": "7338e41f17ebbf5293d8355d828cd0c0"
  },
  {
    "url": "assets/js/62.ad4f19b5.js",
    "revision": "1a89980df791118e65e09b6870b94082"
  },
  {
    "url": "assets/js/63.2520e534.js",
    "revision": "6a70760a47536e92171e62987a341fe7"
  },
  {
    "url": "assets/js/64.8f8170f4.js",
    "revision": "e255a4bd028ad415802c1f49f4a9eae4"
  },
  {
    "url": "assets/js/65.2c90703e.js",
    "revision": "7b7bbad77adba877287d66c0e8a9db9f"
  },
  {
    "url": "assets/js/66.35c912b8.js",
    "revision": "6a15dc79c663501388f3db39e9fb3058"
  },
  {
    "url": "assets/js/67.30033e23.js",
    "revision": "166d77b1701838bbbe005984fde67431"
  },
  {
    "url": "assets/js/68.140c11bf.js",
    "revision": "990842d6f1dd3c63c7cfe6daca4638b2"
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
    "url": "assets/js/70.784dfd92.js",
    "revision": "a2f335d128312bc639354630ce92dd99"
  },
  {
    "url": "assets/js/71.44feb02a.js",
    "revision": "49acb1671632582e1d2a476fc15afaad"
  },
  {
    "url": "assets/js/72.df602323.js",
    "revision": "1e72dfc26ec291a2f3343133f39eae20"
  },
  {
    "url": "assets/js/73.ba6af323.js",
    "revision": "74e72ac6cadef9c298fdacb5aef2e580"
  },
  {
    "url": "assets/js/74.9892746d.js",
    "revision": "8b56c36e3e828963a481880b25f1fa31"
  },
  {
    "url": "assets/js/75.e8e13878.js",
    "revision": "1e64892e446d2ae8fbcb2ee5655e2b70"
  },
  {
    "url": "assets/js/76.78fd2f57.js",
    "revision": "6cc3d29233e464a05df8b7a8e771da11"
  },
  {
    "url": "assets/js/77.572b352e.js",
    "revision": "e30ab73154fb4ba3787dc0226bc6b665"
  },
  {
    "url": "assets/js/78.ea05b2cf.js",
    "revision": "d2092a0d2ddd6b5e8ff30d066cc643a9"
  },
  {
    "url": "assets/js/79.afe512bf.js",
    "revision": "64b333f3e809681ba75863e1e7934553"
  },
  {
    "url": "assets/js/8.65997bba.js",
    "revision": "c02a4075b6f99debed10e4a0f3847c9d"
  },
  {
    "url": "assets/js/80.c4d6c20c.js",
    "revision": "a1e0cb4b98b6213e13946669c160c17b"
  },
  {
    "url": "assets/js/81.b77353f7.js",
    "revision": "1731f376aaf62da276016666304d4fb3"
  },
  {
    "url": "assets/js/82.825d6f3c.js",
    "revision": "f0de83577ae7d5acd1f8889553d7e219"
  },
  {
    "url": "assets/js/83.89f18ee7.js",
    "revision": "031eae51ba2a38a9c7ab2892552ebb72"
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
    "url": "assets/js/87.09182f45.js",
    "revision": "39d16447a89076b8e0a3a92c3bd44b3c"
  },
  {
    "url": "assets/js/88.121aea5f.js",
    "revision": "33e7428e23569028c4372f7dde5af029"
  },
  {
    "url": "assets/js/89.ccaec491.js",
    "revision": "f3c77af439ea98a7a9c8aafab6a68f70"
  },
  {
    "url": "assets/js/9.6ef8f66a.js",
    "revision": "e6f987319d85e97f6b19e03c76bb4d2c"
  },
  {
    "url": "assets/js/90.9e1ff586.js",
    "revision": "f13d9dbc3c77affc9596c782431cbf88"
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
    "url": "assets/js/app.ec4d79b9.js",
    "revision": "078105d782570f8ae6824e369446c583"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "85dfaaaae3c38a43e42834ca5e2923c2"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "b9ec59436dd5a7eac700ccb74ede8579"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "e7e118c0442ee98fe6ed6077343c64d8"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "39d6cb7afdd693d498d02c21df2669f2"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "6e75a6678a97b532dad296fca9034959"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "537b7f56f7179e939760c09cdc23a3c1"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "6a05cad4fa143385a753a77bb65ae23b"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "cd67c5b46e49b816f00e4c9712ea57b2"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "23ed80beacdce6e195fe74c08a7c1371"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "f669f51fd4081909d34598bf60552b09"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "5ca8a5968317aeaa85097dd109352a41"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "c41ae292a79e317a00613b7576f0cdf5"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "639661307d64874cf5ab026c602c9a25"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "998e0289e2afcc0c80bc55109c31ba16"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "e11adf314f1e3af1f156fedee1b888f6"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "0055896bfb9fb1787db32b020e981f1b"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "409237c56de504eadf87e5d5021ade24"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "5972a63a7f6750e72a1ef81886025e2b"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "d9681fe1b1381cb843e59fa814b16657"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "8a455bcb220459932f2325777a9ab43f"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "547e09d4a790e3a31716a32f9184a33a"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "b511a47dd7f6caea0f075551cc217ed3"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "8ab091573b02c4f4c42961a817621fdb"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "1ec79b7e619303bf826dd489c65ec7ef"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "b4fec98d6fd1594f9c3d7d1352975931"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "a50b28ee46afbd1ff7668c25238e1d33"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "89600701f21788b6d0a9abe9da631fca"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "7c9cc8dbe750ec89f5aa324dfc43b803"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "d5c561d6d7bde758f0cc25b36c5e1b9e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "1c36b97c624de31c815975c44207a346"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "2bcbd6b163de54807061cd543e4ab0f2"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "b1654493df8c1842fe6ad224c7a135d2"
  },
  {
    "url": "courses/index.html",
    "revision": "1834c535a0c50d821cc911aa53880795"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "241e73e8f15a5109b8ddd9cc432e3f14"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "d75bc48d9a0a55b7617f16e5d8934192"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "133828357dabef50d689d9d14ea7794e"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "80263fe4a98889c38d593bf04ae5c3d2"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "7196111d82df3f7505ef2494babed9cb"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "843d86f3277f438bd2d57c34b3186f9d"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "2529ce7c1ee70f8797750d39aaba07d2"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "fec61310e2827f51fd46070b5f9c1949"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "1072cbd147c7971e9c5c31e132693bb7"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "f89f9658ad3418385b62963f8b2cb6cd"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "4af29a19cfe2d0844d2ee5ffc330a095"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "68b003d75d145f5ef7943d194a629df7"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "7f8a2057b24e17ff05321bde9d5906d2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "78e32425139c70fbcc4e52b5ac928c63"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "daa8becf41d08a92c49bec28dcb3e888"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "12f3ea37ae3ef8572f3706ea076b3a43"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "740b1eeac67d3c80407dbcb0a0531978"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "35f39f6402331ed6896023dd7748454d"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "1e56de0faff1e7773051ddac86147bc6"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "22e54c325fbc3937cd39fd43df7689f7"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "2def81b7373b3d76d5e96baf7f42f54b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "3bd98248aa03f51e45faecbcf13f3c6a"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "013ee78fdea7edb10f00462d03265a35"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "8fe34fa64b99f2501ab82cb8d9201137"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "7585434e43a1b17a4e84cb41c3e69b50"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "2bd6275a4f956882f0331a8c48760a37"
  },
  {
    "url": "general/enroll.html",
    "revision": "46aea9bf18640bb7b558fd807dce70c6"
  },
  {
    "url": "index.html",
    "revision": "8e3649a810381bcb6468498661f5752c"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "de382257fcd17758142880dbb4d0538f"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "b327cda31269af2bee951581e5bfafee"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "e6deb70832379a800dd158c5cd9c72d7"
  },
  {
    "url": "studyathome/about.html",
    "revision": "effcb8a4281f3e4081534c018a5f1461"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "e683e531a055e86f20b3bc229b5661c7"
  },
  {
    "url": "studyathome/help.html",
    "revision": "1340b0b50a3e2c2b35184ab3a26d9947"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "7d28681a8d8f0a725d37dee65998c821"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "578c8dfa63534acf0be6f2d3352017ad"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a8d330ccd995261115ec2e509385a626"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "77273e7cbff2b0bf8f3107dff3b786ff"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "1f01129ca67dcf658d816a2c692126cd"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "02c5622dd46aec565ae3bd3cb9e0701b"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "aa512eff95e247cba8d991e297652e3c"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "245b432aa73626b4bd90567a567de126"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "0d3e0510cec5c812063e222f173e9836"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "05475331e0df61b94dfeaa81aa94a7dc"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "c6324e006094b080245ab020d198902a"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "4a0efb7bb2b7db68a921281cd260f549"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "4eaabe6542843f4ce2fb58ec73f2438c"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "b396bf63b63c674753a9977d11ade419"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "5d6f4e2a81ece70854aead1d01fb8949"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "64aee43a9a10e69de0f94e65ba203317"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "be67033410c2fea281c2ef39c8ef3dc6"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "1792d3276ae15f3799e2ffdfbffa87e2"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "169cae96a062a4b5ae88371f01fa6766"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "f7b8336f527db0fed2be1ea9a686a10c"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "38865d76d2fd70da045eea4813e1e4cc"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "ddf7d36a2b83028706a53f7fec9f3e43"
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
