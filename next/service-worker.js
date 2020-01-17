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
    "revision": "2284444830725c263893b4d1f8f95493"
  },
  {
    "url": "assets/css/0.styles.3edc3a36.css",
    "revision": "b922be5a6bf7a487197ead390aa915cf"
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
    "url": "assets/js/1.9415419d.js",
    "revision": "56a572b829bcef51feec89903c397218"
  },
  {
    "url": "assets/js/10.585aab42.js",
    "revision": "0c9d548d289525f382f28cf29141b052"
  },
  {
    "url": "assets/js/11.e10829e4.js",
    "revision": "91319b4ae190346f1580343de120a12d"
  },
  {
    "url": "assets/js/12.e0f2127b.js",
    "revision": "f9f5b0d6c860d3e05ad69d80bc7e8007"
  },
  {
    "url": "assets/js/13.a376061e.js",
    "revision": "4764e5d12536817541b043c68b5f5464"
  },
  {
    "url": "assets/js/14.cf173319.js",
    "revision": "d025519979685582553adfe4a0ac770d"
  },
  {
    "url": "assets/js/15.8f628a4b.js",
    "revision": "98550d6b424604262ac13d0791cc176b"
  },
  {
    "url": "assets/js/16.3a11e236.js",
    "revision": "1ed8718964abed8eafb619bb447c82b1"
  },
  {
    "url": "assets/js/17.f0e2bef3.js",
    "revision": "33d87c969d746efd04c0df41f2682ca9"
  },
  {
    "url": "assets/js/18.8a4cfcef.js",
    "revision": "46c9de19c89417bea56b694ce0944b38"
  },
  {
    "url": "assets/js/19.dd738210.js",
    "revision": "d55a744e47a4e0b1a47b4d707be56f25"
  },
  {
    "url": "assets/js/2.5b89b256.js",
    "revision": "64a56bdb6f00fe6da8c18c50ee51f1c2"
  },
  {
    "url": "assets/js/20.7f3f1525.js",
    "revision": "36a4805c71d2581ac1b3ff5ce15901d7"
  },
  {
    "url": "assets/js/21.819db850.js",
    "revision": "c0d5c9fd03209b588fe84d8f1a8fef22"
  },
  {
    "url": "assets/js/22.f121fb07.js",
    "revision": "71bebb0dbcfdeebca7a7966833f7ad5d"
  },
  {
    "url": "assets/js/23.55602a68.js",
    "revision": "4ce171ac0d1e51a8be2b94f3449a7459"
  },
  {
    "url": "assets/js/24.5e657046.js",
    "revision": "57392aaf1fe4638a1e125b46aabcf836"
  },
  {
    "url": "assets/js/25.1ee2746e.js",
    "revision": "1489ce1cbbcceff4d1efbbafe818e8a7"
  },
  {
    "url": "assets/js/26.f0ab9589.js",
    "revision": "9952975482e86b0163e829e32c8848dc"
  },
  {
    "url": "assets/js/27.a5d1d677.js",
    "revision": "7220b1bb95218fdb82607d3fe3c35101"
  },
  {
    "url": "assets/js/28.4fb550b9.js",
    "revision": "f9e6e9fa613f03842f7da7d55c9c0240"
  },
  {
    "url": "assets/js/29.d8189f59.js",
    "revision": "6b6fbf67538510ef07c8c6585c90360c"
  },
  {
    "url": "assets/js/30.09f83f56.js",
    "revision": "ee3a0645622ea8a9418084248c6136c1"
  },
  {
    "url": "assets/js/31.107e4fad.js",
    "revision": "7a32f6e5a172443d615a362090f7ce78"
  },
  {
    "url": "assets/js/32.d43c4461.js",
    "revision": "6034b5aa3d8df5c26b30d89172e02c4e"
  },
  {
    "url": "assets/js/33.84ac8f6c.js",
    "revision": "52e5f0f231f586f56a8ce48c980a97e4"
  },
  {
    "url": "assets/js/34.d92445f9.js",
    "revision": "6b47ae0f14962067e79fa8e5e5df0f4b"
  },
  {
    "url": "assets/js/35.22b365f8.js",
    "revision": "f3358535d57b81feff8d3d79829c3f48"
  },
  {
    "url": "assets/js/36.ef09da07.js",
    "revision": "e1c56e7f88d2054dde25517a411aedf3"
  },
  {
    "url": "assets/js/37.1ac15760.js",
    "revision": "2d755d8cdb17cd6f12da875e8ed0986c"
  },
  {
    "url": "assets/js/38.de4b7c5e.js",
    "revision": "f7f74d017e41091876b68ed09d56d0f2"
  },
  {
    "url": "assets/js/39.8003c190.js",
    "revision": "ba99e3ff124e3686f3446bb13aa051d6"
  },
  {
    "url": "assets/js/4.ad2707c5.js",
    "revision": "cd93bc6220e50114b233c34de111f012"
  },
  {
    "url": "assets/js/40.c2201a04.js",
    "revision": "88226fc814bf675b011db9c917b079ef"
  },
  {
    "url": "assets/js/41.6de875a6.js",
    "revision": "ccc0a4fe12b1677fe18b34c48c755964"
  },
  {
    "url": "assets/js/42.ec7563a5.js",
    "revision": "165ededf39a677e3c5728a4b9836a374"
  },
  {
    "url": "assets/js/43.832ed221.js",
    "revision": "6408953cbc808f28e9e3c11db6c79199"
  },
  {
    "url": "assets/js/44.6c356ec0.js",
    "revision": "de15d572710a0a8c600344b765f26370"
  },
  {
    "url": "assets/js/45.9871da12.js",
    "revision": "63541dd5671cba16223b68724ab8665f"
  },
  {
    "url": "assets/js/46.9b5b8a4d.js",
    "revision": "d4f2b267a1defcde56f038b86e83b7a4"
  },
  {
    "url": "assets/js/47.6e4d6c56.js",
    "revision": "21c94c0eec7e618304952164c1c6d3bb"
  },
  {
    "url": "assets/js/48.34eed941.js",
    "revision": "3d98e006feeba4ef04c80c7b6a21ced0"
  },
  {
    "url": "assets/js/49.c025e60b.js",
    "revision": "dd5d052edd12dba5812c4009dd291389"
  },
  {
    "url": "assets/js/5.8c3536ca.js",
    "revision": "5f6c72454f1e621879f5eefa9d5f138b"
  },
  {
    "url": "assets/js/50.e637d4d6.js",
    "revision": "91ac39146e1d2804ef163d882fb0a67e"
  },
  {
    "url": "assets/js/51.6c1f3026.js",
    "revision": "bb4ca7801b08107137827016cbe782cc"
  },
  {
    "url": "assets/js/52.7df03774.js",
    "revision": "e34c7224032c12643202a88a9a753241"
  },
  {
    "url": "assets/js/53.cb2df8f1.js",
    "revision": "f3b03994d3faa9cb5f392d06e79d6aba"
  },
  {
    "url": "assets/js/54.55957218.js",
    "revision": "e63b94b152eb23bcbdc10c2f4394b126"
  },
  {
    "url": "assets/js/55.8f3255fb.js",
    "revision": "162f662eaf513ce44167c4ea02f81b67"
  },
  {
    "url": "assets/js/56.9da4f9c3.js",
    "revision": "56261796042185b1712fa7199d2282c5"
  },
  {
    "url": "assets/js/57.1f64671c.js",
    "revision": "107c5a93eaa6523b0cc404d30d579c04"
  },
  {
    "url": "assets/js/58.6d84d46e.js",
    "revision": "6425e27120740026c87f29b9d5142c34"
  },
  {
    "url": "assets/js/59.f4acfd9a.js",
    "revision": "3ff013fed79b382d9218d5991400a85c"
  },
  {
    "url": "assets/js/6.61cc1f54.js",
    "revision": "9b12384d8206d6fbc01959078f81f044"
  },
  {
    "url": "assets/js/60.06ccbde8.js",
    "revision": "f6e35558da26aca093f75e0a297be36c"
  },
  {
    "url": "assets/js/61.67835624.js",
    "revision": "2c3afbfb91c2aca8e20a8615d0861f6f"
  },
  {
    "url": "assets/js/62.49678ec8.js",
    "revision": "f957b0e80345fa7361a8c6ea7655f76d"
  },
  {
    "url": "assets/js/63.aa734b4e.js",
    "revision": "ac4bb08fa40cf1a0de8f9d234d2f1464"
  },
  {
    "url": "assets/js/64.45c45e7d.js",
    "revision": "df635c43d2217adb040ff98f4380fd82"
  },
  {
    "url": "assets/js/65.cdf68230.js",
    "revision": "f318de8e1c33f477903417ce1868fc21"
  },
  {
    "url": "assets/js/66.9fa6f783.js",
    "revision": "6782942ec0de56ad66623fdcd979145e"
  },
  {
    "url": "assets/js/67.39863d28.js",
    "revision": "f7960f93b8573edbdb6b3890cc12e199"
  },
  {
    "url": "assets/js/68.021f3d8b.js",
    "revision": "9f8a52d9a19bbc6c53b80cbd03ae4c05"
  },
  {
    "url": "assets/js/69.f5162c72.js",
    "revision": "d14fae7e0a0129ed6c0e98009132726c"
  },
  {
    "url": "assets/js/7.bfa384c3.js",
    "revision": "e985446a0492427824ca1da5a27176ce"
  },
  {
    "url": "assets/js/70.74596b54.js",
    "revision": "761d92c42964ebc32950a96dbaa5d612"
  },
  {
    "url": "assets/js/71.4a695c2e.js",
    "revision": "8ebf4ea82036a345ad8096f247bc627e"
  },
  {
    "url": "assets/js/72.5d02985c.js",
    "revision": "f630790842646da23e5145af3b0b42d7"
  },
  {
    "url": "assets/js/73.4c6e4770.js",
    "revision": "f40beb09f1576a498d1ccecece4b019a"
  },
  {
    "url": "assets/js/74.0ba29411.js",
    "revision": "70441fff9776eeb87c5722727c426a23"
  },
  {
    "url": "assets/js/75.9303adae.js",
    "revision": "bec9b4ccb0ee9d8ee0bd46b715f82d6f"
  },
  {
    "url": "assets/js/76.6b0720a0.js",
    "revision": "bb2138a5fc632bcccd4b46bd58158e8c"
  },
  {
    "url": "assets/js/77.c0af1ff7.js",
    "revision": "2db39beb0861f63ee5c130a80a362f95"
  },
  {
    "url": "assets/js/78.0dad3be9.js",
    "revision": "a4c7cc2f0bf514c42eb56adf86b2705b"
  },
  {
    "url": "assets/js/79.8e69d8f5.js",
    "revision": "8537336d777d74120d400839e8169c6e"
  },
  {
    "url": "assets/js/8.24e617da.js",
    "revision": "91a21117cb14caa6a5ea6f0e6d9499a0"
  },
  {
    "url": "assets/js/80.b1eb074e.js",
    "revision": "69f4d0e9bcccc3f3d1b2a146873c414f"
  },
  {
    "url": "assets/js/81.fcc61ab9.js",
    "revision": "e9e7883675c012f0b4ed25dc93d52b6e"
  },
  {
    "url": "assets/js/82.d4d6ced4.js",
    "revision": "cb687c2fd637551fe5a3b47506a81289"
  },
  {
    "url": "assets/js/83.c90ce682.js",
    "revision": "46b63608ea56d676b4ede4b27c98c9d7"
  },
  {
    "url": "assets/js/84.65be36e0.js",
    "revision": "03848aaccc85656aa0bab5574689e9bf"
  },
  {
    "url": "assets/js/85.878255dd.js",
    "revision": "596697cf83d310811cba5f66bf47da2e"
  },
  {
    "url": "assets/js/86.951c77e8.js",
    "revision": "e0cdf32088a8e444ac49decfc4abad92"
  },
  {
    "url": "assets/js/87.47c0970e.js",
    "revision": "c94103db7492fc0c28e6484144a109eb"
  },
  {
    "url": "assets/js/88.48841399.js",
    "revision": "d5f3e42a6981af1ea14e34739c4889a3"
  },
  {
    "url": "assets/js/89.dfc386c5.js",
    "revision": "17e1ef7bf162679266e38811e5140e76"
  },
  {
    "url": "assets/js/9.f5a61d34.js",
    "revision": "defe3dcdc4e220cbdfa37560a5d43ddf"
  },
  {
    "url": "assets/js/90.4e2b9124.js",
    "revision": "accacddced7916c37ea5a6f5a7c82fd2"
  },
  {
    "url": "assets/js/91.8e4df8a0.js",
    "revision": "59f14704146a0273083f7d44b5c6a58e"
  },
  {
    "url": "assets/js/92.79de09a2.js",
    "revision": "0f7dc3e5da8c0357fac7fa5ab4e72db7"
  },
  {
    "url": "assets/js/93.3500945c.js",
    "revision": "f157e18e1c2393f71fb11445afd2cb26"
  },
  {
    "url": "assets/js/94.0fe7c289.js",
    "revision": "a4d3fc3d42ae73973bf79c3a20303894"
  },
  {
    "url": "assets/js/95.8c118d26.js",
    "revision": "fb53eea5c862f40fb1a0f226f9bd9b87"
  },
  {
    "url": "assets/js/96.ae65bcf8.js",
    "revision": "d8de6f5a7e52295006bd783fdfac03d3"
  },
  {
    "url": "assets/js/app.b2a90717.js",
    "revision": "e27586c65e22eb6c186bd8c87bbdaf91"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "69749d9bda6f7ffad36c482d36b01491"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "e3c5195cd92e86fae641fecd19951e8b"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "0542925bf2e7ec1d40f25539d62eb420"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "88a6b6e7eb7b77e4e6e0b1eddeb4e585"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "430cad5aff478d1cf6c137432175fcf9"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "969f56444b1f042a6ba213b67cac540f"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "9178a888d5196b29214990a927705814"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "2b74405ffb0f9ab15c582d606e5b5e0d"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "ce9988d6cb5ce5077db562ab6bb1fbd1"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "15e4fee1b1ff006aa92c28646f2d7697"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "b1356b55d210fda5581275ed15a30ad4"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "6945443765ffbe8a5b6237b1ed3a3ddd"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "00811abb4c338e9245bb4f3d091370c4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "94e5d8db440cfdcd95942a1351144e65"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "f1bd36ec2913653963b03f0f972b0f74"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "f3d1868a664211381deae1cee1ddcb63"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "8f14732eb5c899111620235e65b064dc"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "6f72a67b76ee8aa487983d75d5f1ef93"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "06ee3eb9c4e7e88033150f0f1d0b5c69"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "12a8fdcb3b89b8c9dc23b8701b660360"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "84b409e2bc208632bacf95463112071a"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "54a8a7ce07bb750e5bd3d2e582e668ff"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "baf6c48a4c4bbb706744252fc293d36f"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "1c992235f2e77190cc46c80d6a9545f4"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "c30d1f27a13aa741d4d19dce56db169c"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "4f31973ed87cdabd5b80fc6b39695352"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "81a54ffe0e52f554cee8289c58371426"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "1cc9ec14220557783a3fab7b697d8e1a"
  },
  {
    "url": "courses/index.html",
    "revision": "f699d007f221e2b1661cda49c8e4c31a"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "cc14243daee261e135f62b2c52ddfe69"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1b3f8522ec5f3c6787e98def2145c5d3"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "ca623c7de1c078ec3a412bde0949685b"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "d92ed394653dba229bde72e638cd82ae"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "2a46dfb1eeab4adaaea24bc188c9998b"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "2196820433281a5eca7f9e327aabf805"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "2962ee103c391e208741742958de4efa"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "dc3bc54fa93bd68077aebe856de32203"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "4a058e92d19d482bed2b48770b39d2a7"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "cf389ecf7ea0cdfe0fc411e75ef3b20b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "82d743e5762375f056eca9cf0ae5fc35"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "a80e1228a4241fd8a95ff00d50b08268"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "9973a2f67b3967f98a7895185f5bea00"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ec1283995c12ad40f76421a08e2f04d5"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "b941d9c6a7983d838a7d61dc3282ecc0"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "a771f53efab188a2487badaf32fbf364"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "5d2fc965aa900492dd69fc1f59028e42"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f7df02d1a926b7d7ecb1a99cd1d385c2"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "03969082827d7a577ee30b7e282987bc"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "f444eb372e3709e3aec248cf602df3f1"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "18d531b095604c972cc821bf7544d842"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "272bb2477604e537724d2e25ad7f9705"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "1d0b1edbc91fca2212cfea458b4d3f00"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "2e3b37f5d2a25f513ea2bcb56f730f28"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "ba15c275f8476fb92159f9c6033a154f"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "8e6e508c54376562cead2329916f37e7"
  },
  {
    "url": "general/enroll.html",
    "revision": "afd63f261ec469a286c28d744f7f8b0f"
  },
  {
    "url": "index.html",
    "revision": "0dd2a554b71a15f6e1e65f4095bc0698"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "ba0d4488ed33711cffedfc9ec2e1e948"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f8f2718bb0617defdb3c1953afe08ba2"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "97c23b79ff4870dc364e8d5d116ebf48"
  },
  {
    "url": "studyathome/help.html",
    "revision": "248aca7e3904f3630b59ed9e2a548b81"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b7dd5627424f0f83e8742ecfeda7547e"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "56279760a1f0682f46277276450cb994"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "8757332634d1d33a4dcec0504f3b6aaf"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "fd7ed1c1714cbe31b0ce75cb1fde0651"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "7c0fa934001ac53c8644b8baec866290"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2e6c0c2b1c485f97b32cf7942fe28192"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "44719d65f3d5d0874c76a8d5ea3214ae"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "5fe74039e909a67a47f50567f4a7e1b0"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "c0958f6ab1c5d86aadb870d3770a39ef"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "5e42c5e7ed7e89b14970856e5ee0a06a"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "b2202406075982bfb79d7b1219f5040b"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "46131eb381a063056f1ee66e32ee6986"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "40d1b216136d885d2e4ed27752235b95"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "ca51d2429d5681708d8369303bc7b2e4"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "e70b1455add5bed975cfc4beeb7fbec8"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "052cc139cf5e9346131c39baa2bff8d3"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "db0e9064476c0a08af0d35bef183f478"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "76ab78b3b8afa49b98c845d37309b47d"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "e472e2ba52c0197a283e5e041505414e"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "8abeee3ee1ccef7bd1b14cdbf9d197ee"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "c8a53dba8a566ce220a3435195596d73"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "09a68451bb03944beca91e2367fa435e"
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
