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
    "revision": "8b130a92083a866aee206c0054488c57"
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
    "url": "assets/js/22.003f57a2.js",
    "revision": "2f09c3657293d3b76ce395899b2a0e06"
  },
  {
    "url": "assets/js/23.e763c2a8.js",
    "revision": "94a232423790ed6538cb6ecdab2e1f38"
  },
  {
    "url": "assets/js/24.807b3b13.js",
    "revision": "cea765a688e9426ed5ad9d893319871f"
  },
  {
    "url": "assets/js/25.e0687e96.js",
    "revision": "136029baadf3bd6d8de0ac518573f796"
  },
  {
    "url": "assets/js/26.a0213dee.js",
    "revision": "1e0af229acc0d9d6f51fd278b160a269"
  },
  {
    "url": "assets/js/27.a64df42a.js",
    "revision": "fa180f241799f85c5be58b3d3ef0c07d"
  },
  {
    "url": "assets/js/28.3a956c60.js",
    "revision": "16f07d435c4ca05af08f6b92cba6a324"
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
    "url": "assets/js/34.6647ace5.js",
    "revision": "4d29fac8dd0d6ac6a38d52f187c64f73"
  },
  {
    "url": "assets/js/35.b4a5ce81.js",
    "revision": "6b2d19c2fbb1e0b3e2da3e1b8f6e98c4"
  },
  {
    "url": "assets/js/36.ed8bfeb3.js",
    "revision": "05a755a789201a99b787fbca0f09228f"
  },
  {
    "url": "assets/js/37.3c495a37.js",
    "revision": "d8e42475a9a0bb28f3481af0ed4818b9"
  },
  {
    "url": "assets/js/38.a1268e30.js",
    "revision": "41b6b382f31b53c7bdcb330277bcb201"
  },
  {
    "url": "assets/js/39.b3c1b331.js",
    "revision": "37cd5056a1cee5b7a2e7d7c4d848b516"
  },
  {
    "url": "assets/js/4.76cb1118.js",
    "revision": "436f054bec7e3b588d4c9cfceddc2dcd"
  },
  {
    "url": "assets/js/40.5122d2ab.js",
    "revision": "60f947368362a82ba0c10eb772fc7dfa"
  },
  {
    "url": "assets/js/41.4cd839e9.js",
    "revision": "db47ceb8d565bc57642f0c310df7ea3f"
  },
  {
    "url": "assets/js/42.0c95a853.js",
    "revision": "77bf13d0f80f3cae2338b5602858f0fa"
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
    "url": "assets/js/45.222155c2.js",
    "revision": "c3f9cd1d7c28accdcbccb49ad33bf906"
  },
  {
    "url": "assets/js/46.5ea82d40.js",
    "revision": "6063f9ab786a52b7288de55a52079e14"
  },
  {
    "url": "assets/js/47.91e11d27.js",
    "revision": "2c611b9a8be5a1db69505e9d0fbf5662"
  },
  {
    "url": "assets/js/48.8f731d19.js",
    "revision": "26ee22a6a3e9c6ca055e29246445fed6"
  },
  {
    "url": "assets/js/49.5a7ea739.js",
    "revision": "6bf894965b92ceffebf45c1a88967c9e"
  },
  {
    "url": "assets/js/5.f83e5ccd.js",
    "revision": "924bb0bbf744d7adb1888a33dda59740"
  },
  {
    "url": "assets/js/50.93e481d7.js",
    "revision": "523ab69d6dbec89f63434639fa10e9a8"
  },
  {
    "url": "assets/js/51.33ce39c9.js",
    "revision": "bf1e5c88d61aabf891d4e996bdbe75b5"
  },
  {
    "url": "assets/js/52.b516c9d4.js",
    "revision": "039abf46c7ea9e21ef79540b1db15181"
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
    "url": "assets/js/55.c5b94bb4.js",
    "revision": "d90490edd9453ef6e364a68854fc344e"
  },
  {
    "url": "assets/js/56.94f3149c.js",
    "revision": "6d8ddc9ef84b0a664ce4b17940d60ab1"
  },
  {
    "url": "assets/js/57.1d7b7841.js",
    "revision": "4985df656f079aab2860de545c512877"
  },
  {
    "url": "assets/js/58.f24a4e17.js",
    "revision": "4705002e1558d5adc3b898345fee9f1f"
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
    "url": "assets/js/60.e714dddf.js",
    "revision": "e8debb6c393ea06472759443de2d50ec"
  },
  {
    "url": "assets/js/61.9c589dbb.js",
    "revision": "7338e41f17ebbf5293d8355d828cd0c0"
  },
  {
    "url": "assets/js/62.973f40af.js",
    "revision": "98045520272be16b519030ac613286bd"
  },
  {
    "url": "assets/js/63.2520e534.js",
    "revision": "6a70760a47536e92171e62987a341fe7"
  },
  {
    "url": "assets/js/64.ddc44293.js",
    "revision": "3665801ef64b950b815222ac1e245256"
  },
  {
    "url": "assets/js/65.bb3720eb.js",
    "revision": "ccd11328843d2dc507fae2cd56ca6a94"
  },
  {
    "url": "assets/js/66.5e5902b2.js",
    "revision": "1b8808c8b67badddea645241c20321d0"
  },
  {
    "url": "assets/js/67.43da411d.js",
    "revision": "43fa4a36c0de975e0ea56b3709e71ae1"
  },
  {
    "url": "assets/js/68.5b8704f6.js",
    "revision": "606ac21fcbd3c9e27aa266f7ef36aa39"
  },
  {
    "url": "assets/js/69.12b212f6.js",
    "revision": "8ecd132292c2fed125557bc076490c06"
  },
  {
    "url": "assets/js/7.eec7b586.js",
    "revision": "0fbf4bcb4139de44b0dc206cdb789913"
  },
  {
    "url": "assets/js/70.f61c0bba.js",
    "revision": "2629920e1b2ac7333d176a155aac03cd"
  },
  {
    "url": "assets/js/71.c3b7de33.js",
    "revision": "24e7d584c90ebb6b7b07e9958c7ca77b"
  },
  {
    "url": "assets/js/72.68edc30b.js",
    "revision": "9597878f48c0b7bf6731b7293767d1b5"
  },
  {
    "url": "assets/js/73.47e2ffbd.js",
    "revision": "ff7c6e6f86cf46754fa24d06ff3ba1db"
  },
  {
    "url": "assets/js/74.70427256.js",
    "revision": "bdea08556fd7a95e976930c187cdc3bb"
  },
  {
    "url": "assets/js/75.7fcbd3ea.js",
    "revision": "156115fc3a1a4a55bb4e0a4d6cc10403"
  },
  {
    "url": "assets/js/76.2375374b.js",
    "revision": "36457786687f1cdd673c438ed177e47d"
  },
  {
    "url": "assets/js/77.572b352e.js",
    "revision": "e30ab73154fb4ba3787dc0226bc6b665"
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
    "url": "assets/js/80.4201a8cf.js",
    "revision": "68462534b7d5e9d7fefc49a8866a18c7"
  },
  {
    "url": "assets/js/81.86e1255b.js",
    "revision": "0c2c7e96802c3b543475a2e1e9b5e917"
  },
  {
    "url": "assets/js/82.0cad6661.js",
    "revision": "2bde6c0df79b2844ade70569c8616918"
  },
  {
    "url": "assets/js/83.b51821f0.js",
    "revision": "e17a6cfd713b34a03b9b9346c1597ef5"
  },
  {
    "url": "assets/js/84.f9ce9968.js",
    "revision": "a99df6221c0963512a2bca29dc9c481e"
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
    "url": "assets/js/92.6156fd95.js",
    "revision": "f7d4151adda0be8e7720161f792ee849"
  },
  {
    "url": "assets/js/93.15cd00e7.js",
    "revision": "560fc8aeb8a2dbb56df892b03247e90c"
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
    "url": "assets/js/app.16dd9e1a.js",
    "revision": "7dbb11705c0f969ac63842a81be0a91a"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "3a43414b631b70b41c6c6d881bdc5880"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "0e6711715410704e02737b3fcf0a6b9e"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "5f160350fb6509d06843e5b50d74a78b"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "fba017fe1b00e35d10ded42452bccf91"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "d1734b320d41521b1501c9a47882d083"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "28bbe2fd78769e7b44190cf8a5f21802"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "7d82e6b16ad92700b0956ffd311f0b4f"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "5c94dc26a390f03dc8604a97c6ac9257"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "be2742d64fdbd82027d912833c6cb704"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "46a23670dfb41f44b98777a94cfb4086"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "ee7dcb8c8223b7d20915600d2c414207"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "d152dfb6e2dc676272b16d7d24f56422"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "5209553a3ad01bda2e41076c8e989c4b"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "3453beada58634476fbb11a15f370e87"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "2cddd4fd42cd93c6a2e48bc5ffe0856f"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "4b19f91adfd7feaca2f55a92c1e141ec"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "cf30b6b431ac7343583c0d494d25ea6d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "60e5e6293fd8f2e6e97e9fa197484c0a"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "ee090bceafdc68bdd6339140b2a2ff6b"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "3f638840f73a2adbe8b6b2442ff50a51"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "99a8eb73975e4e098ed9eb217790dd88"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "47bc11ba64f7d5842a4cab537b86c7b7"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "814756c6931a88bc59c537905b17bb37"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "0a1f8ff6513653b11848307e51eeaffa"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "1dbcc7626cec06dff75fa584bbbde9de"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2ff51294cb31ba5af192e5f22a0c1072"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "76c2bd0d3b2359cecf0e715c571a0ca1"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "1e5db8b895378bbd5ed345d6d681f4df"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "46133f9163b1ea9855fa35c3a561f7e6"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "5410bf9b566bbda665737edcb40f1a9e"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "5640efceab9e3d9aa6ede17aa5f4bd62"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "a33093be21df88a43a003e763ff47e7b"
  },
  {
    "url": "courses/index.html",
    "revision": "e1e7a80da1f0f40b7bf951a58c20196a"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "e712ad621319734bc31c463231cc9879"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "40105ddf40529c030338d5abe80a7bdd"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "8ed97b9713b08db24775bf054d930e74"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "aa28c942af1f747a795e6f7fd15e0af4"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "daee26dd4642920751b1d143e88cc797"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "e32f931bf3ce5d575ff7e4a940d7af6d"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "7c7dccabdc6eb1bd8d3ad29d215b1fdf"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "dd400247ebd81ddebd2626a4c9bd440e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "e025113bc0bc7295ea7e32c531b0dda7"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "c8a82d29a561a93fc097c60eed7ef0e6"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "3b5bf6bc62ec64bb664bcbb5dd44e3cd"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "a2ab84769dc43428ccf3e2459ac8dafe"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "73b019574840c6a25acfa6f7e600417a"
  },
  {
    "url": "courses/template/index.html",
    "revision": "7eccf37b15250d0582282589742959f9"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "f19c33a1864ba73a98441a6e1107208d"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "b4829fb9f8e52752ab2f250845ca71d8"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "ad3a4de8f121aaf0091083bd006608de"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "5c04cdc61045d25734613af7993ee758"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "6915a828af49351382bba4a09045dead"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "b4a5866ad02ae270a6d0e26812765d20"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "3980f2997dac70df3a28f040b2a3f09b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "cab1a5b2e356a297671afc108b045cc2"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "b8d9e6a01b12c343594d8005fd4ae68e"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "0336842d9e3dd63ad51adbadbd1d567f"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "630cb2c3ff1631cfaf83df6a179d090e"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "f57bbe3c96a7c1ac5a56a61ebd02a29d"
  },
  {
    "url": "general/enroll.html",
    "revision": "a5849d35029518d606356bf2c39caddf"
  },
  {
    "url": "index.html",
    "revision": "b0fe890674aea9616c1dede5675ca49c"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "6b82183b1e2ffbb6fae48326ee79ecbb"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "5604be7704810f4ecb233df945a70faf"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "98ef854d79a31872978304a720b24fed"
  },
  {
    "url": "studyathome/about.html",
    "revision": "9c7aae694be09a7206209a92febe1252"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ff3a1d593c374ae28255a61a8a97247b"
  },
  {
    "url": "studyathome/help.html",
    "revision": "91e909cf6883f03c9d932240a956478b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "02a90b0adf036f89f56567aac4cea0fd"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "18eee1f6a4132d666157ddbdea9fb979"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "770f26c7468a63afbc6f8f23cceb8ddd"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "45f9de2fa7bb013d76afde417f537d60"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "86ae3a6ff9b96b56a5002292b9cdd3f4"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "06c82ffda6eebfb453d401f1efdf6b36"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "37f5a7c3c5dedc5002ba4749dccca0c1"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "7d6be25f0fb4f38eead0c6c6768627c3"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "a5ee97f1f524174d1b82274e27f93aa2"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "17dc77601540412c178606719eebf188"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "c1a7c7daa00d146655abc679d827b636"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "c1e58c6824b9c17aff67b0bbdb094259"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "c5b523367443e1737618381b2f25c980"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "5290f3d156567b340ae2f16f6c818e66"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "ecfdfa981f6397dbb973cc5b87c14750"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "5dadd54a562fcc0a86ac072bd03154b7"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "44b35bf0f834700afb86da46f0ed2d66"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "a31a55fb1a30d12a0e319a0e3b3597f5"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "cb1277394f6be08ca66ff6e3f40f031b"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "87535f17cd4e400662a07d21ac1dbe61"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "8e68bb5511f857caac255b8b467ff129"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "6df4b517af730611d76958997accc6d5"
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
