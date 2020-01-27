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
    "revision": "a17c16950f6014fbf1864df6195ed510"
  },
  {
    "url": "assets/css/0.styles.078f1e3a.css",
    "revision": "ff64ce08d13af5a2d63b3ab7551ed2a9"
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
    "url": "assets/js/1.29ec6227.js",
    "revision": "f1be6511a244c648bf66cb793727e82e"
  },
  {
    "url": "assets/js/10.35faf5d3.js",
    "revision": "0bae226d7f8e3bf99729938232b73bcb"
  },
  {
    "url": "assets/js/11.34f71a0a.js",
    "revision": "21f1da09e5e01411ef26f8b33c9a4403"
  },
  {
    "url": "assets/js/12.bd343a0d.js",
    "revision": "1c8264f3dfd99392c60a8df1099873fd"
  },
  {
    "url": "assets/js/13.4bbb3c48.js",
    "revision": "45a4ff086ee81a7f0ab295021b88051a"
  },
  {
    "url": "assets/js/14.3b3814f9.js",
    "revision": "e2eabc6ab07f02e3f83b05009843279b"
  },
  {
    "url": "assets/js/15.27c4e1c9.js",
    "revision": "a8c026871bc2fe7a1e0667e905437829"
  },
  {
    "url": "assets/js/16.1d92ee2e.js",
    "revision": "f670b4059ec8a3e6acd248cae7932d08"
  },
  {
    "url": "assets/js/17.2b438ee4.js",
    "revision": "e1b159120709d16dbaf4e5f42d9acc24"
  },
  {
    "url": "assets/js/18.f2149f17.js",
    "revision": "057953df0b6146dca6bcc21d82d8fb8e"
  },
  {
    "url": "assets/js/19.2db6cd0d.js",
    "revision": "f8aafec8e24935904fb8d13a3a8908bf"
  },
  {
    "url": "assets/js/20.5f253f89.js",
    "revision": "2d55448e16baa11a4f843964a3d3981f"
  },
  {
    "url": "assets/js/21.7ea0aff1.js",
    "revision": "70bb39639c986677411a528690680ba3"
  },
  {
    "url": "assets/js/22.8fe66e1f.js",
    "revision": "f982b104d3f22c479c28c3387dbceced"
  },
  {
    "url": "assets/js/23.831fc708.js",
    "revision": "ad0ecd2b2f94e2d36f89f8d65139d1f9"
  },
  {
    "url": "assets/js/24.87b309aa.js",
    "revision": "3fdd3699b83e0834b0b4f7cc043749c2"
  },
  {
    "url": "assets/js/25.074e5d4f.js",
    "revision": "413abf06cc18e13d814b9765b368eac0"
  },
  {
    "url": "assets/js/26.77c15215.js",
    "revision": "ca9710757f0c0c69b3f6d41181c12c25"
  },
  {
    "url": "assets/js/27.e6906b58.js",
    "revision": "5e509e0cfbbd1a2d233bdd87a7aa6441"
  },
  {
    "url": "assets/js/28.cae23202.js",
    "revision": "70f0b417bf8927ed809c378ddef4c314"
  },
  {
    "url": "assets/js/29.d5a4d01f.js",
    "revision": "d33987057828193fa48310b3d96199e6"
  },
  {
    "url": "assets/js/3.f3c0b2d1.js",
    "revision": "7e0c2ed3bd0cf209416c58b279fd1a6b"
  },
  {
    "url": "assets/js/30.ff671734.js",
    "revision": "1532f9393323525f967521851818b1de"
  },
  {
    "url": "assets/js/31.04dcece0.js",
    "revision": "2267e51c5f61e908c702107791fb7836"
  },
  {
    "url": "assets/js/32.19eeb6d9.js",
    "revision": "cc22436c88173ac5d0f7d70e0ef63ff0"
  },
  {
    "url": "assets/js/33.e4550cbe.js",
    "revision": "0b323abc583b4819713bf57ba8931c73"
  },
  {
    "url": "assets/js/34.3ce44a36.js",
    "revision": "d4f25876c1032fd657de670d1de27a22"
  },
  {
    "url": "assets/js/35.9938386a.js",
    "revision": "6663f02a57b5ff4b6fb01fdada01b7bf"
  },
  {
    "url": "assets/js/36.b8986ccf.js",
    "revision": "f2f74b31ec5f43d32b8e7e9670221a34"
  },
  {
    "url": "assets/js/37.a7f67e33.js",
    "revision": "85a1e6661d2b811ebdaf9bb2f520a1fa"
  },
  {
    "url": "assets/js/38.b3c55d5b.js",
    "revision": "16be4aa1b973592b6bd29edee47a494f"
  },
  {
    "url": "assets/js/39.b3b15af6.js",
    "revision": "c4aab274a0f73869ad14cd8ce470565a"
  },
  {
    "url": "assets/js/4.e7c3c7ec.js",
    "revision": "73902f95e1401cdb711bc18631cbfe78"
  },
  {
    "url": "assets/js/40.2909e237.js",
    "revision": "00b79c28c8e24dd1dd3bc33ba7350629"
  },
  {
    "url": "assets/js/41.6d21b0ff.js",
    "revision": "4425b69d7f8e69bb76e0ba5b1af245a3"
  },
  {
    "url": "assets/js/42.2b7c1c9b.js",
    "revision": "c5b8b2efa78af8f07840cb1e767cc2c2"
  },
  {
    "url": "assets/js/43.5d9c51ba.js",
    "revision": "566a5fd42ecc57251994a5097ef0a367"
  },
  {
    "url": "assets/js/44.4df9238b.js",
    "revision": "9802e6ff470e95f41df68886138086df"
  },
  {
    "url": "assets/js/45.b735c5da.js",
    "revision": "c39ec6cef5550b6d5cb2a6d29448c18f"
  },
  {
    "url": "assets/js/46.12134506.js",
    "revision": "c31a238f55985cfd25eb929b57e2ae5f"
  },
  {
    "url": "assets/js/47.c0843aac.js",
    "revision": "a9894976ee58855cbd8e23051f6bff86"
  },
  {
    "url": "assets/js/48.bb278505.js",
    "revision": "c2718a6c4721b7032441e84f79b205dc"
  },
  {
    "url": "assets/js/49.055f018c.js",
    "revision": "d4bba78824d0e776d1cb011f1444ac4c"
  },
  {
    "url": "assets/js/5.592ebcfa.js",
    "revision": "cc49a2d821b424931062c0cfd881c33a"
  },
  {
    "url": "assets/js/50.9b575ff7.js",
    "revision": "7b7ee7ee47895ab53c8be3a34e4310e7"
  },
  {
    "url": "assets/js/51.e3be2c35.js",
    "revision": "1e9afdf598aeb6ff4d4f2c90350f6297"
  },
  {
    "url": "assets/js/52.dbed47e7.js",
    "revision": "46a31215c2af0d4213cc5b054789d8f3"
  },
  {
    "url": "assets/js/53.3951aa06.js",
    "revision": "01fead82e29994e7e096f3afed1bb032"
  },
  {
    "url": "assets/js/54.369dd24d.js",
    "revision": "c4a594da84568ed60bb739ddb58e87d4"
  },
  {
    "url": "assets/js/55.7c69b430.js",
    "revision": "f55e35e36e92c490d3ee6a03b95d79cb"
  },
  {
    "url": "assets/js/56.b353b0b5.js",
    "revision": "f7f6eb0dd12aea8d063797ed3a3c1c61"
  },
  {
    "url": "assets/js/57.d2c38e41.js",
    "revision": "384a1b6a5ef5122e16acb124439f6da2"
  },
  {
    "url": "assets/js/58.71bb4429.js",
    "revision": "2076cf020cdc5aa3fd6447efa1c3484b"
  },
  {
    "url": "assets/js/59.b67ee94f.js",
    "revision": "e4b75d62eed5d26063930fd737c150f7"
  },
  {
    "url": "assets/js/6.53226798.js",
    "revision": "4bc79776027093a09ed423d5381720d0"
  },
  {
    "url": "assets/js/60.ae975bd6.js",
    "revision": "f3c5d976a751ef8d08eb5020c0ca7588"
  },
  {
    "url": "assets/js/61.48d70e2b.js",
    "revision": "70499a672f81fdc4ee3765236408d9f8"
  },
  {
    "url": "assets/js/62.2891b17a.js",
    "revision": "1605acf02bd6219bd3b417913d6534c3"
  },
  {
    "url": "assets/js/63.562effa5.js",
    "revision": "e3117fe298571992ba09203e8815bd35"
  },
  {
    "url": "assets/js/64.0aa52bcb.js",
    "revision": "ffc5303e8468278df1a09b6bc2e057cd"
  },
  {
    "url": "assets/js/65.4d750bad.js",
    "revision": "4e7f78cddae37dd9c4b7c6f7daea8e3d"
  },
  {
    "url": "assets/js/66.a033e4e9.js",
    "revision": "9d6bdd9a610911136a04f3d4bb10e054"
  },
  {
    "url": "assets/js/67.283f64cb.js",
    "revision": "c9b0d7f2b9b0ec38a4f103603089a285"
  },
  {
    "url": "assets/js/68.63f440ac.js",
    "revision": "6de1e709190f7110f229a2ce807b92c5"
  },
  {
    "url": "assets/js/69.eb317857.js",
    "revision": "6d02633197cfb405d608621399cb09de"
  },
  {
    "url": "assets/js/7.7813b446.js",
    "revision": "7fd373e9f0a599ecee36dc42c9dfc8fa"
  },
  {
    "url": "assets/js/70.27cf125d.js",
    "revision": "ea6ce39f47b57c88650afc157816bf64"
  },
  {
    "url": "assets/js/71.e675b79c.js",
    "revision": "372e41f931aa7cc29ce39409595fe0cc"
  },
  {
    "url": "assets/js/72.7371eecc.js",
    "revision": "7aa3ac5a02f511ee58f1c202f529019f"
  },
  {
    "url": "assets/js/73.20162dc2.js",
    "revision": "288a1184f67aa8ed0dc911d4eca2b13f"
  },
  {
    "url": "assets/js/74.b01a31c7.js",
    "revision": "791b006b59304b45c70ed91f839bf2a6"
  },
  {
    "url": "assets/js/75.e38d885e.js",
    "revision": "44350f4deac5bc37c8b5c03808ca7c7a"
  },
  {
    "url": "assets/js/76.87c3acf4.js",
    "revision": "437357f2b2d1527c8b588a3b188d6378"
  },
  {
    "url": "assets/js/77.524c5f42.js",
    "revision": "947a0a7dce36c7764a336f22179d7448"
  },
  {
    "url": "assets/js/78.7e6c25e7.js",
    "revision": "eff69f3fa6915a27ca63074838469d6c"
  },
  {
    "url": "assets/js/79.29f0c146.js",
    "revision": "fab2b183e53368bc40535460d0c8f53b"
  },
  {
    "url": "assets/js/8.45d8ea6c.js",
    "revision": "39e6ea3b385d8bff472a048bab63417a"
  },
  {
    "url": "assets/js/80.d1451a6b.js",
    "revision": "979985a86955f35d2828d4cb1ea6b222"
  },
  {
    "url": "assets/js/81.db716ccd.js",
    "revision": "f02f76de697d09668bfe299bfa829a50"
  },
  {
    "url": "assets/js/82.d53d0b5b.js",
    "revision": "bfda60046319a9747f9d8101c697a93f"
  },
  {
    "url": "assets/js/83.bd59c5de.js",
    "revision": "3e45d73a758dc66ccefd8a8113bf2a05"
  },
  {
    "url": "assets/js/84.c498a4ee.js",
    "revision": "d6876cc35030c9694e2eaf8af4e9c1b4"
  },
  {
    "url": "assets/js/85.6799e3e6.js",
    "revision": "d4a66d12201d43b9db92b90d75fe25d0"
  },
  {
    "url": "assets/js/86.91e61a94.js",
    "revision": "589b8cd8ee820d50f4b8b7e8eaf74ab4"
  },
  {
    "url": "assets/js/87.75441ceb.js",
    "revision": "a7fc72389ccc4d858b292a9edbb56b60"
  },
  {
    "url": "assets/js/88.76cd8b15.js",
    "revision": "988cd1d7de60f72e19b6b6ce55416404"
  },
  {
    "url": "assets/js/89.21d7705a.js",
    "revision": "7344ab1e267e0f5e1e61ea2737b7ed44"
  },
  {
    "url": "assets/js/9.5c779c3a.js",
    "revision": "b142dfd5a330620eeac4b83347a025c9"
  },
  {
    "url": "assets/js/90.5360478c.js",
    "revision": "a1cfb497889a61837a461e17b788f96e"
  },
  {
    "url": "assets/js/91.c7e9046b.js",
    "revision": "40180030275960273d523d10d7971998"
  },
  {
    "url": "assets/js/92.df80dd7b.js",
    "revision": "f488b3b8d46869cbb7e2b4bfe07fed44"
  },
  {
    "url": "assets/js/93.9c78e6a3.js",
    "revision": "88e771f905f93af886afddc33f5162e2"
  },
  {
    "url": "assets/js/94.cbb71a79.js",
    "revision": "5609bdb9e4bf287157fa382ccff74c69"
  },
  {
    "url": "assets/js/95.938ddb06.js",
    "revision": "bf035965a75ea8f6e5f5c89d573972c5"
  },
  {
    "url": "assets/js/app.b9fc8971.js",
    "revision": "112a7bbf5066bc0b4ec5314c798396d0"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "96a348c8648984b1119ee6a6ee79a93b"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "eb08cfd645b3996993f773836dc8326e"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "cf14aed92e612a69a9294b3a6b151f92"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "408c8df23a44a0a2f1c28dad3ef0e702"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "37836082029482adf0b59fe3ba158aa6"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "862c925da5afcc53e15c1fb2277318f2"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "636fcf5886b141b1896f114d65302b7d"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "e4ca2397eaa4400bc9c7d823200da065"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "0bc5a5458e9d856217d31a368629e380"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "0f84d21fb6b54d89c1dca02e97b030b9"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "a5da5ecacb6f942bcc7b6d707eb10a0c"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "082e66d68aec957d2431a18e056a47f8"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "97f96e16eb3832c538940bb03dab72e9"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "14cb9c5efa40940fe7b52dd45988f497"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "d29c9ec49977d7e16a4d9b71b49d707b"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "dda5b15fc55f75fdf0c0312ba59ca66b"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "bd286f4c43858e67f35b7996d90ad612"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "ce91e78dde35b2a8030092b4d2191ec3"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "a41f50cde03a2517c2655079b443e1e6"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "6d06a9c20e67b7107b55fbf8ef9700e8"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "e2b6bd45a992668c31b0cd6a435ba86c"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2830a1be14b7a876ae7ea4f661fe8a53"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "5255843462df8f2db2ebe7d24d62b09b"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "6a0dbfc598cd62ab54587b9546c87545"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "bf97543b97327d4f17211f1e01e1f0c5"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "d1d81f77dd6bf040c20715f1c0fb8dc6"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "4ae4a9ff637ca76e500dc3c63a38b4ff"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "ddbb07e95756719ca0e44511a8f21be0"
  },
  {
    "url": "courses/index.html",
    "revision": "251182ec7ddbdc62f02f2bb997ed3dd0"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "3ef8e20930483afaffb13614da21bb5f"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "7cf075638514dda0a197778a7b9f94cc"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "f58d9c283d0f7cf7ef5c0d08b1d3223e"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "5cbffd97a811a6fbde82d323e8921232"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "ba0ee88e2fc4a77a6aa687f1283f05d8"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "07a7353e393c983d69b4f57d860c8a84"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "84277dd787ccb68b49a6a4c952251e13"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "569ffcbf502922ca581fded10bbdecd6"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "16df62b1a93d4596601c5be72802298a"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b0593f025d1847bbafa89c52f22aaafa"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "c6ef82b248199977f7d84bca53fbb331"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "eb751d103b1489a71d2d23f0385e4db0"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "1833802193ec65b88a1644dbbc3f2cde"
  },
  {
    "url": "courses/template/index.html",
    "revision": "b0b345d4cdebbe75229c69d123d89760"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "be0d25c1f07881cb5dd0302812fc28c7"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "afa2ab35707c1264db544cdde5fc5b5b"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "6bb4ee1f2b88647427cfd740923a2f84"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "59670e0c3a63fd24b768ed55d18d18e4"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "3de3d2cbcb9b208f7ea50a1791747153"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "0fa77cf0e4dbcd592a01f5e2608d4969"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "198b1c83a19e5805fb78e6fb3603226b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "7ff36e8763101f5c8c84c25d6770622c"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "8c0142a3bda6f3ad0b154411e00919c8"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "a0b82b0094b3520ee969a20573aac2f0"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "ded9852995107026c0d8ec568a21cfa1"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "9a5a5553a5af327a74c4409e2ec39794"
  },
  {
    "url": "general/enroll.html",
    "revision": "4ef8aea2e899840c61ffb837809530ef"
  },
  {
    "url": "index.html",
    "revision": "d4ad06f39886b2c8fe007c9adeed2398"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "430e93a9a43dce5af02a63c258b761b4"
  },
  {
    "url": "studyathome/about.html",
    "revision": "976a046ca7a79eeab1e78036ad04745c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2f08a83d0691d4ce54995f096309b0b8"
  },
  {
    "url": "studyathome/help.html",
    "revision": "661436678943c1486471331cb656bd91"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "df9a7a50b95bbcaddcfa2c83985d06c2"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "8b1927f830ed714e34ebd93b12043872"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "c9be4bf8e753ed3e480ce09dfdca00de"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "e0eb241b6cde4ad65c00e2a7f8b8680b"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "46b04d9c10c23cda31022395c1e58db1"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "5f49993a53ae638d61f2992de279804d"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "0c85aa2403a8382928bd5e91a68f5ab2"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "38e01f10933b82322cb25f45219eef32"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "1effa787b0de551a8e745a9ed639ea51"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "2de0b74f5cd5d8d1e53fc77b4b4ab8b5"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "30c3f63c5482d93dbe0647120b2e515e"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "054a9aa687ac24fec625e6e3534fcf93"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "2e7a54bd99de091a195f807e3cb10f55"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "1fdbffab36283e47d49827f0619839b0"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "b8ff934799bc207fab34fd61f419e9ca"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "4fda178730abf5f8fe6bb7c905e64989"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "e2012e630f6de978e8681a4835a01f13"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "c621ca95bc86208e85d5f995f5990277"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7ffe7699acb30579dccaf2edd7324df6"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "178228dceb1cf6b5a63a7a03d262840d"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "6f7f48a42c9375e4f0344d668e312d0d"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "80af1dd88eb9063d21d51d23d97c0473"
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
