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
    "revision": "51e9e94382ed8f87bb698d027c55d694"
  },
  {
    "url": "assets/css/0.styles.20043176.css",
    "revision": "b0ed3b91ca4583ed20c81989e3afbb97"
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
    "url": "assets/js/19.564acfce.js",
    "revision": "95b0e055e6d9fd9a0a1d098a903a21ae"
  },
  {
    "url": "assets/js/2.5b89b256.js",
    "revision": "64a56bdb6f00fe6da8c18c50ee51f1c2"
  },
  {
    "url": "assets/js/20.768fb423.js",
    "revision": "818be2ec50276cf422d1794b216830e8"
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
    "url": "assets/js/70.37eccf82.js",
    "revision": "47fbb5a739e34652b468da9c59615c3f"
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
    "url": "assets/js/78.da240835.js",
    "revision": "f186c0b807f70319de7e8e3bdfdf6daf"
  },
  {
    "url": "assets/js/79.8e69d8f5.js",
    "revision": "8537336d777d74120d400839e8169c6e"
  },
  {
    "url": "assets/js/8.dc6d0d17.js",
    "revision": "c6fd9805ba6626c525368d93945287b5"
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
    "url": "assets/js/app.2083feca.js",
    "revision": "450ccf676c6d58887bcf4916f1ae1894"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "2049c431c76cca070da0680be5d51bd6"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "ba05a76c1091d31f2e02b9f1cc2a3258"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "5377b72b777a232e357aece419cc461c"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "990a4f5aeaec1a147c8cd28114cc6771"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "5f9dde950cc611686f49c5d5d2001e5d"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "dc2bb62e37f07b6a5527928f2b2f7b3a"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "53602c24d07e0e1a2311eba0e50cf630"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "4ea383a6d49f5f995e10473eaebf8e98"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "6fc3bc75492d36bb90937dad561bb78e"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "fbcf0f4fd683b40e503fa842a53fae1a"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "7cd800f7e052a4a30ae18e46d30af54e"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "af8598aea4c3e66a265374f41d3a57f2"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "cf21bcb779f8c57b7996015205090354"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "d313008a628b73615b384304753f6ceb"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "af9439565090d02ba818d5b8a13c38e9"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "5797af8c6e809dc5ad65f80e252e9f29"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "66175d8a3845ffcfe680d147bc7ce6e6"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "4fe2245431b028ff7fe3a6cbcd5995fe"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "10508a86a368950b91a6798e37cd2993"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "cb9e30a251cd0ae8ec4f07eccb685096"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "b7a4f47db43ca17f16e6433c5abb9c30"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "f615d1e3e8a38c3ac1f5c723e220746c"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "cccad544b9f1bfad1e98ab9a9877eee5"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "8db3df1e7697a3a9f035146af929d662"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "75e2e8eb50de8b919c763dffd6607d6f"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c07e052005cc3d1689a7406d2b6e0f0b"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "f7434e078956b963691c4d81cf73c1a5"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "ec67a1f104913da767f3086332ef4295"
  },
  {
    "url": "courses/index.html",
    "revision": "18562a9743d86a4d30972ebf29e66f10"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "f4073fada75541bd628fed66545879e3"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "4a834b101b74bf6142f4cd11376e2dc6"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "bce18119892bd89c4bf1594c309b4a60"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "442ea91cd5d3afbbfcb1719f0e236e53"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "97740079add07ea1979c96a1a5a557d0"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "3ec3cd33f1d7ee9c953073950f53b171"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "99021356ec8328a707b3e4ce6d861616"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "888d657ef6e9cd58b088c5d3e0937a31"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "03a13b5dc633043600d414ed8adfe1ca"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "9fa64c5cb16bbfb8e54294f5c1e12b33"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "81c91160b4b4504829e5da78b39878b4"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "2a945d2f4cbaaf97758ea00fc4228d94"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "8e93971b84dd9123a6d061e8ba2e9b50"
  },
  {
    "url": "courses/template/index.html",
    "revision": "822d919a455fd605140cdd35d2d64c40"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "6836aaedeb23544d888396bc647a784f"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "cfbc77998b9ab5f0a59627e165e88f53"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "c52e2159fdffc753844efa1b7a9201fc"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "5cb7d335bad41459a33f06c9cc779c9e"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "e1c93158608ceee173afdb0467a8387f"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "a82961bbda0e553ace04a3c04fab18f1"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "5374fd53bd2dc8a39a1d7ad1089cab4a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "1bab91e8f4d79e00852880ef08ae267d"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "9a848dc547d91dee2d186595c5314d91"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "b96274d5fac6c21364b64738383dd598"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "077091d89552fce2e85981ed57f77c79"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "af8ed94c495da8a30f288050d346f949"
  },
  {
    "url": "general/enroll.html",
    "revision": "2cfeb4a1837ac600c3b224b4dc7d9ff0"
  },
  {
    "url": "index.html",
    "revision": "cdf0d0430d16369cc02547e161b0c710"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "460e076ef4f053e05d1d79423872e9fc"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d75bba0bd5176418ed40a5f0156499fb"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "c70305272c9049969e1102e73c5e9b08"
  },
  {
    "url": "studyathome/help.html",
    "revision": "8a06ab99b28b9107e6d1cd2c9c875f68"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "17f91e1d7dddae7b6b43509b0ca1ebb3"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "e13ef7ff8fdbd0f737f84dda2a1f78d5"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "c1c07af8d7663e646431312a74f081ab"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "e96ed7fa78615f791a5dcbbddd672c00"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "4166e21c954c67560e8c210d22cdf56a"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "1e93210b36b537501315629d36dcd1c9"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "c3c875535e5a68c8611d2a1587e31e1b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "491c9616a9afe592ad8cd5b55a1dd218"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "38b038c01b70606a91e476c367d6ec9e"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "348c3b5f001669922e30c1efd86185db"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a6d907aa7765656f84a1e0e7411f5b77"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "58c7b806629a55a91c05214c9f6ffa6c"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "ac67a7e48acbee77b7898f3ab17c7bea"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "7fb5c007b12bd61e505d2ca9d0a17be3"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "7a0443818f57fe3ff26e3a94a8515f9d"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "bc49a0cfbde68bce7df24ddbfe66f1ba"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "878fdea9eb7c7b6e28f5bd78660a93c0"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "318fc5117c04bc85bcbf0e5c5de0cf6a"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "35d7014e926730a73589d8c76d93dbae"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "f57e08dc28465034508604ccd3aa02e6"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "a090ec551e7700923f74d587847bc40e"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "29b358a5b94b970d08c1354f84e5217a"
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
