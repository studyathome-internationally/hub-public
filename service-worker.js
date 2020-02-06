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
    "revision": "921274a8c3a6da92464f15d6dab7f208"
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
    "url": "assets/js/23.e309fdeb.js",
    "revision": "34102593db0bf78f347394143d540b46"
  },
  {
    "url": "assets/js/24.41f11af1.js",
    "revision": "0ba38e38e117fc5cbc66bc7912301517"
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
    "url": "assets/js/70.84c67acf.js",
    "revision": "851ac5cf068ba410be92373bb57a32d0"
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
    "url": "assets/js/81.18d1a414.js",
    "revision": "409670a268e53e5b17188f32e8efe1e8"
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
    "url": "assets/js/app.7bb5f129.js",
    "revision": "a42d489012a69fb0ea892310107102b4"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "828845ed208641b8a5a0aac3795323f8"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "dc4707b261529354b2fe298a82505c32"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "4cb8b57677a5335fe3f615d78fab2794"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "5e7e76712082d717ee17d10eb965785e"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "37f33f35a6d730396db40ba5b4da8f61"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "c41cb386499cc127dfd4f77c038422c2"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "55b2c4e5cf7a9640a476cc6cdfd2412f"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "ca9e53fb56db2b89de3d60e72b3ae177"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "a8160aca233fc51f106e267725617c8c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "dee8f7fa4b635374a1889ca12b8bcd48"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "9e0fe008549962a43ae96a069706647b"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "e32395439c99196cd359c25090e06b5b"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "5052f9653b08474ddc3929a8aab6365f"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8e3e5d7f8064bc10af6039ab5f36fdef"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "8959da77072b96c945cbb73e91ae0047"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "42b28cf9790710b65bc39280f5bacae9"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "faaa3900052350cf21aa2fca54eff9c9"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "e024260d972ef52f95aca7579f9d705b"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "76bb9ebca54b5dd70f71449011bd16c3"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "80fefe20b99f958f05c4157061762f53"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "d6b43dba9820c86feb9121a03419c061"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5fa3f196f33a470e33af21e7234a9ebc"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "1c16c7d5d3100bfcad22e7524b075bfe"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "fc27c596842d6ee6e6c74160c5ddf14c"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "aa6cc9d81c48cc7dbe5eb275a29c05c9"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "0fdf78a530703907868e7f125ca0a5a7"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "f56e5b68e737ed28128cad038a165f6c"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "91970ae8c23f9681dffd16a94d2eab7f"
  },
  {
    "url": "courses/index.html",
    "revision": "e9aaa9c486caf78df9e22177268445d4"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "cbdb291014d229e0d52a608044494fd5"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "64379fb74fe341872cbdeed83e01b5c8"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "a26a11d73305331faa0c21d60fd2af12"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "dd7750050747514b66eee5df90153473"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "f38947b6d63593bec86a0991b5a1c279"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "57993aa304540ae7c5ef2e769850c309"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "eeba220eabff661b4cf7fbd9a9b71943"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "22cf8edecfcb0b642e116237cf88642f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "d2a10e7ffc0b33315b5bf7c3e2f1e333"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "49b3c841f1001676852a02976b901eac"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "6f1e22b4641efadb91f4d17be92616c2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "1b4009526ff33f9e1e6f263e418621a9"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "56c240374f2877c8b6a0cc4ad951d4fd"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2ef1437f51ef1d2a8848010d647186b3"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "ecf99d60932b8229107e8be8fa6c8c39"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "f62d25129abe9774f912f11e293b32b3"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "e8a7afc66beb173b55cfd14fe0cd6a4f"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d6373daa1baf5c14ba484deb526b8e0a"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "95ce56ec2b57cb4dc84768916e8554bf"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "4c0cd71d8fdd1af4877229c2d803053b"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "a6976d7eead40ceae04e216dd6beacd5"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "2a2d8f60fe04fd0814d0bd6c1323b692"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "c65fcf89e13da32b9aa448e95e48786b"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "d5f3bd17da7dbfcc789df972f3daeba4"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "2251483d171e668e9959929d09367fb2"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "5507d23f3ed8a24d828e3a7fc6f76200"
  },
  {
    "url": "general/enroll.html",
    "revision": "c82f65aa9cb5bc002431ce455264b998"
  },
  {
    "url": "index.html",
    "revision": "a44e4e58bca6a45b81da48ab4d212214"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "640da77ea5e49e5e124dcf5b2e493927"
  },
  {
    "url": "studyathome/about.html",
    "revision": "11d204daeeb6b1049a3c2257f726ab5d"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2694d8a74179b1d160251c14585aaf0e"
  },
  {
    "url": "studyathome/help.html",
    "revision": "c4d9fd03c3c593bc67951f9db27eb9e8"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "872cd39e8ef71c47693b82ce8e925322"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "057b889e369d3899d89d25025e036a44"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "42cf2af7564643829bdb49589bbc07c9"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "466ff7ca011052f95686aa7e2f6dc562"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "d5b757de919dc911cd96893300417b6b"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "ccb42e3b5cd9a2f4c9685595a6b2e320"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "80b536756f52ca1eab79d9146ca5b7b3"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "111fc09a83a2812c089573c6122dcf70"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "2ef6ade39f92e68159fdec30f827bf26"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "743fc8632139d2fcba261059dedc30f5"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "2b7047cef8f2ff8635f8e632ccb25d8b"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "a697f9b9a93d43cf6741efdf039e766c"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "ba41ceddd641ad6e3438c369f08e374f"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "09ddf33ee6e4a647b304dc61f77b035d"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "49addb8fcc421ac0b557d201dc581042"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "630ba0bfb7bd07772ca2f7b0967e21cc"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "6080d2c7b7163e8df7919b4d6857700a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "9aace6c1e47d3b6e5a889ed55e6c224a"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "f416b381683b6dd871c5ce68ad9784c4"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "467e416b24f89f511a94f484d438407a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "6e8ae336712f82f37ced9f36676e191f"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "3753e63f4be6232ab05ee421720ddaa4"
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
