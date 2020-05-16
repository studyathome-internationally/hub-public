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
    "revision": "339bd1912809dcfa3193e39cf53838d9"
  },
  {
    "url": "assets/css/0.styles.5da7dd13.css",
    "revision": "436d15058b4bb7cee2c94ac4b1d4db01"
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
    "url": "assets/fonts/fa-brands-400.13685372.ttf",
    "revision": "13685372945d816a2b474fc082fd9aaa"
  },
  {
    "url": "assets/fonts/fa-brands-400.a06da7f0.woff2",
    "revision": "a06da7f0950f9dd366fc9db9d56d618a"
  },
  {
    "url": "assets/fonts/fa-brands-400.c1868c95.eot",
    "revision": "c1868c9545d2de1cf8488f1dadd8c9d0"
  },
  {
    "url": "assets/fonts/fa-brands-400.ec3cfdde.woff",
    "revision": "ec3cfddedb8bebd2d7a3fdf511f7c1cc"
  },
  {
    "url": "assets/fonts/fa-regular-400.261d666b.eot",
    "revision": "261d666b0147c6c5cda07265f98b8f8c"
  },
  {
    "url": "assets/fonts/fa-regular-400.c20b5b73.woff2",
    "revision": "c20b5b7362d8d7bb7eddf94344ace33e"
  },
  {
    "url": "assets/fonts/fa-regular-400.db78b935.ttf",
    "revision": "db78b9359171f24936b16d84f63af378"
  },
  {
    "url": "assets/fonts/fa-regular-400.f89ea91e.woff",
    "revision": "f89ea91ecd1ca2db7e09baa2c4b156d1"
  },
  {
    "url": "assets/fonts/fa-solid-900.1ab236ed.ttf",
    "revision": "1ab236ed440ee51810c56bd16628aef0"
  },
  {
    "url": "assets/fonts/fa-solid-900.a0369ea5.eot",
    "revision": "a0369ea57eb6d3843d6474c035111f29"
  },
  {
    "url": "assets/fonts/fa-solid-900.b15db15f.woff2",
    "revision": "b15db15f746f29ffa02638cb455b8ec0"
  },
  {
    "url": "assets/fonts/fa-solid-900.bea989e8.woff",
    "revision": "bea989e82b07e9687c26fc58a4805021"
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
    "url": "assets/img/fa-brands-400.0cb5a5c0.svg",
    "revision": "0cb5a5c0d251c109458c85c6afeffbaa"
  },
  {
    "url": "assets/img/fa-regular-400.89ffa3ab.svg",
    "revision": "89ffa3aba80d30ee0a9371b25c968bbb"
  },
  {
    "url": "assets/img/fa-solid-900.ec763292.svg",
    "revision": "ec763292e583294612f124c0b0def500"
  },
  {
    "url": "assets/img/general/portrait-placeholder.png",
    "revision": "4788048f319dc48101678d9e69f5077e"
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
    "url": "assets/img/partner/ctu/lecturer/lenka-lhotska.png",
    "revision": "0b1695ff77feec156a97c40a007ef777"
  },
  {
    "url": "assets/img/partner/ctu/lecturer/martin-macas.png",
    "revision": "8c139d8888625a4ef9898b797f92d4b9"
  },
  {
    "url": "assets/img/partner/ctu/people.jpg",
    "revision": "a65a903feaf3bf886aed682ec3c43ef5"
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
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.jpg",
    "revision": "01662dfd145e8afdf12e0916a2778791"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/martin-deinhofer.jpg",
    "revision": "50e8b7c92cc864af957eb0fd6f4212d7"
  },
  {
    "url": "assets/img/partner/uastw/uastw-at-night.jpg",
    "revision": "bb98ed986758d05549ae03342857dd73"
  },
  {
    "url": "assets/img/partner/ukim/campus.jpg",
    "revision": "3518a28279ececacc090c10fc7d29aec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/andrea-kulakov.jpg",
    "revision": "2a5323f34cf5181ba6d5837bdb10947a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-chorbev.jpg",
    "revision": "b2f324317d75d740e0bb3772e9c623c5"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-kitanovski.jpg",
    "revision": "b519c89fb08e7c611b0dc89b9516dc5a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivica-dimitrovski.png",
    "revision": "3ae6ccfeadbcc4713537e332cd738cec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/nevena-ackovska.jpg",
    "revision": "92f3a6441f15910cacd0a88acdcd9317"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/petre-lameski.jpg",
    "revision": "a0f4909a7ca9b9b40811a66559b4fdc4"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/sonja-gievska.jpg",
    "revision": "ff8f5610c600379402d4f0e2291446a6"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/suzana-loshkovka.png",
    "revision": "431ecce02384434025a3c717143c5da6"
  },
  {
    "url": "assets/img/partner/ukim/people.png",
    "revision": "d0e8b198fb189c285b5376af4b52719b"
  },
  {
    "url": "assets/img/partner/wit/lecturer/brendan-jackman.png",
    "revision": "c0469cbd2ffe4e0fe85fb46c04d8d4d0"
  },
  {
    "url": "assets/img/partner/wit/lecturer/frank-walsh.png",
    "revision": "aaacba8bf03192e709beeb02a1ad6d6b"
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
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.c059e8e5.js",
    "revision": "0fbdb1733848589cdc1da704ca454e4a"
  },
  {
    "url": "assets/js/10.745b1502.js",
    "revision": "a45945dd11fbf597c4b7bf695083a23d"
  },
  {
    "url": "assets/js/11.6733c0cc.js",
    "revision": "554e06d95ac2b63fd26936d5f5058cea"
  },
  {
    "url": "assets/js/12.97390734.js",
    "revision": "ac11009a19b268ea754b457d84ad72d9"
  },
  {
    "url": "assets/js/13.cb57142b.js",
    "revision": "0a816d79c06dc73542dbc09e72f5bd59"
  },
  {
    "url": "assets/js/14.1417e7d5.js",
    "revision": "5bb2ec68402e79bd99c47cac364a3f2a"
  },
  {
    "url": "assets/js/15.0f04e896.js",
    "revision": "fd5e08eccf3257523ee85be7fa819422"
  },
  {
    "url": "assets/js/16.8d86fa1e.js",
    "revision": "7c7edec53910eea6929517fee733bbc1"
  },
  {
    "url": "assets/js/17.e8f10a4e.js",
    "revision": "95faa91b1cc0302129e5dcf37e7c92cb"
  },
  {
    "url": "assets/js/18.73209b49.js",
    "revision": "1e60f6099afa60486ed48301b3e725b1"
  },
  {
    "url": "assets/js/19.bbbde3f4.js",
    "revision": "f88fa2f5879fc067ecdb06816bd1d4c5"
  },
  {
    "url": "assets/js/2.00c2a864.js",
    "revision": "5ea910fd88a8af6816be302e2ec4d375"
  },
  {
    "url": "assets/js/20.f92bb4c9.js",
    "revision": "653eb40d5a1a61b87e44ba1847581cf2"
  },
  {
    "url": "assets/js/21.340ace30.js",
    "revision": "fe9cfef81d342657349473b6744ecc85"
  },
  {
    "url": "assets/js/22.6164eb35.js",
    "revision": "83b71ecf8ee1fd9ae0eb98cd1dc8e622"
  },
  {
    "url": "assets/js/23.a24db796.js",
    "revision": "878b64b9a407543c34981d300d7fff31"
  },
  {
    "url": "assets/js/24.2196e321.js",
    "revision": "ebbc1db074f961af1a97b7936eb63615"
  },
  {
    "url": "assets/js/25.53563d17.js",
    "revision": "7284ab50abc198024b61504fabfd6582"
  },
  {
    "url": "assets/js/26.ceea6c22.js",
    "revision": "8ee1cd795853bf22b2f433107748aeda"
  },
  {
    "url": "assets/js/27.127c67af.js",
    "revision": "a60b74efb8596847a55cd696ef322d9f"
  },
  {
    "url": "assets/js/28.279dccd1.js",
    "revision": "8b9204b083a9d467f2aa9d3fed4d974f"
  },
  {
    "url": "assets/js/29.b654969e.js",
    "revision": "f520f13cc71261b5a20b660d6506c953"
  },
  {
    "url": "assets/js/30.26429dad.js",
    "revision": "9f50a532ed29153237be9f515882adb3"
  },
  {
    "url": "assets/js/31.28689b83.js",
    "revision": "9f0a9f3415c9fe0859120c7dd8e1fcc9"
  },
  {
    "url": "assets/js/32.e3d6e86d.js",
    "revision": "8d478bf7cdf36d1a867661aa0cc65bac"
  },
  {
    "url": "assets/js/33.e4b1721e.js",
    "revision": "c42c37294129fc180dac95143fd97e74"
  },
  {
    "url": "assets/js/34.9a312f58.js",
    "revision": "d63d70a234c98abf03369be2fe741f21"
  },
  {
    "url": "assets/js/35.eb86f4e1.js",
    "revision": "e890f895d883fea26a9d04dc8d2c87ae"
  },
  {
    "url": "assets/js/36.7435452a.js",
    "revision": "6697f8999b7e27b83f2a21ac9ca5da36"
  },
  {
    "url": "assets/js/37.35780e87.js",
    "revision": "d353962cd0022d1cff0f30472d3a04d8"
  },
  {
    "url": "assets/js/38.13b086fa.js",
    "revision": "3f93864158cf3e1ab4a347db40ea340d"
  },
  {
    "url": "assets/js/39.5f50ed67.js",
    "revision": "daa7344eab06ab0ac61c349c1232d580"
  },
  {
    "url": "assets/js/4.84cf10a0.js",
    "revision": "b673ece30ea833d53793a53f46cae3da"
  },
  {
    "url": "assets/js/40.037b6407.js",
    "revision": "c812b207d25cda0e89c16941bc1c674d"
  },
  {
    "url": "assets/js/41.03a64d65.js",
    "revision": "2b44b572da6b928a3c2dcf06830dc282"
  },
  {
    "url": "assets/js/42.1e038b6e.js",
    "revision": "89aabcce5370fef9f310e8c2897c0cdf"
  },
  {
    "url": "assets/js/43.f8b64b11.js",
    "revision": "0db5a8d1b6071c043e19067f46aba0f5"
  },
  {
    "url": "assets/js/44.9feda8f8.js",
    "revision": "9f21e85b1ebf0a88e45e9ad22868fabe"
  },
  {
    "url": "assets/js/45.09971f0d.js",
    "revision": "1b13624c6efe4c1c7edd78818568efe1"
  },
  {
    "url": "assets/js/46.28ae138e.js",
    "revision": "6ba52e422cafa42a268e5aa2d62641ed"
  },
  {
    "url": "assets/js/47.e86b59ad.js",
    "revision": "d3daa75a5a745039c4d0a7e512fc8b24"
  },
  {
    "url": "assets/js/48.9e498db7.js",
    "revision": "b4fdf88ae8c24455e64cf1906f7f01ff"
  },
  {
    "url": "assets/js/49.579e7180.js",
    "revision": "d1fd9df3ec52039539007390bea3bb2f"
  },
  {
    "url": "assets/js/5.c70f8d26.js",
    "revision": "a3998fa020e1a952af4ba8e2bec05118"
  },
  {
    "url": "assets/js/50.99b229f2.js",
    "revision": "ed9576ce8bff167a7919a1362a31767f"
  },
  {
    "url": "assets/js/51.8f0d6231.js",
    "revision": "1bb02d303464bd5a2b75e849f48f9164"
  },
  {
    "url": "assets/js/52.b6475714.js",
    "revision": "77f808ca47fdde2995197f0a33d21fd5"
  },
  {
    "url": "assets/js/53.f94b009d.js",
    "revision": "93852afd6d0016279806a71a40f57be0"
  },
  {
    "url": "assets/js/54.09a7a7b1.js",
    "revision": "e08350b28c2255ad08e366c2133e95b1"
  },
  {
    "url": "assets/js/55.bd55a639.js",
    "revision": "16bdb38b70b3b8a95fb2ab0fb1d2b436"
  },
  {
    "url": "assets/js/56.b00562f7.js",
    "revision": "05ed137b82e81f5e435d7623fecac730"
  },
  {
    "url": "assets/js/57.626a7225.js",
    "revision": "469af51b503ffc9943cafcdc83a1a520"
  },
  {
    "url": "assets/js/58.7551acbc.js",
    "revision": "b0184fbfd6726fc10a2a28d3478393e1"
  },
  {
    "url": "assets/js/59.e9721cbe.js",
    "revision": "c99e3a3129b5171be3244efffb79c246"
  },
  {
    "url": "assets/js/6.e966e041.js",
    "revision": "ac7290a5f732fcc8512ab88073454f8a"
  },
  {
    "url": "assets/js/60.2554be47.js",
    "revision": "dcac52e772bb86b68708435ed916ee53"
  },
  {
    "url": "assets/js/61.40630a4d.js",
    "revision": "3e44ceaf995cf653d1cdea10d767a49d"
  },
  {
    "url": "assets/js/62.0f8de8a4.js",
    "revision": "1e454c17689760bffe325253817e90d8"
  },
  {
    "url": "assets/js/63.04c6b521.js",
    "revision": "90bf73e614280d92ef6f4570869535e0"
  },
  {
    "url": "assets/js/64.1cf43316.js",
    "revision": "88222ac9788222bc10534a7086ed1c62"
  },
  {
    "url": "assets/js/65.000589ae.js",
    "revision": "a25ef1a3c9a686579172c73ed97e2bef"
  },
  {
    "url": "assets/js/66.547a4e86.js",
    "revision": "ed7bb5b854cb970409e9b22916df2e11"
  },
  {
    "url": "assets/js/67.68f5aa3f.js",
    "revision": "36bfe688962be5ccb2bdafe53bc42e0b"
  },
  {
    "url": "assets/js/68.41c8c0be.js",
    "revision": "8df28981e9969c448e0fd304d2893ef1"
  },
  {
    "url": "assets/js/69.1d563cb8.js",
    "revision": "ce861e89b2bf34a27c3b013f81bbe5b0"
  },
  {
    "url": "assets/js/7.7641b82f.js",
    "revision": "73d687dbb43cf86fa1dfd91866bd7fb8"
  },
  {
    "url": "assets/js/70.401d1e73.js",
    "revision": "ec42dbb41748b19a9c581437fddcb111"
  },
  {
    "url": "assets/js/71.c0013601.js",
    "revision": "072e421e74025de8f342d928a4779735"
  },
  {
    "url": "assets/js/72.2b4b5914.js",
    "revision": "82ddf42102fef7ae8daccb38ceb6e6cd"
  },
  {
    "url": "assets/js/73.c91804c9.js",
    "revision": "9fa58478f632b263d50d3866b1b679ab"
  },
  {
    "url": "assets/js/74.8c673b51.js",
    "revision": "55a6618f4eab6e8afdbc74f4f30fb3c2"
  },
  {
    "url": "assets/js/75.e4599ec2.js",
    "revision": "7ad590fd955a04b886297a43156cc4b3"
  },
  {
    "url": "assets/js/76.1978d5b9.js",
    "revision": "7e38a79a6ee52eb7f6eb4c29a3646668"
  },
  {
    "url": "assets/js/77.e0f1e11b.js",
    "revision": "f757e96c6272619c1e8d9d5ff659061d"
  },
  {
    "url": "assets/js/78.69987440.js",
    "revision": "ff3a1411565bda5c7fb00042918a7410"
  },
  {
    "url": "assets/js/79.852ed099.js",
    "revision": "49ba530254f21afa4cbd7cc5543bdca9"
  },
  {
    "url": "assets/js/8.c86c5ff8.js",
    "revision": "5f1f7e5099bc6dd1a85748f7fbb3470c"
  },
  {
    "url": "assets/js/9.5270d11c.js",
    "revision": "d09e3e089c051f054dd52dc20b87fe0c"
  },
  {
    "url": "assets/js/app.a11b70a6.js",
    "revision": "246be1f4a977d7e735e69246da7eaf08"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "1d97874e065e8923ac6dc3434558e6a5"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "dd155e16d686af337d5f93550966fa84"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "e850922d9cb2ef92e1b31768f8badb15"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "70abbd0c927290f4d3390376a00f1393"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e31f4376fb493ff08af8a9e008e8c04c"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "b07919b61e6554c0e09bf49dc342db11"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "9879cb7e5ea5650bb8bcd16bdafbfde9"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "da64949044c1049c63f05f2359e641b4"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c4c66c3cdc224629ea8d9e271a4ca03d"
  },
  {
    "url": "courses/index.html",
    "revision": "be2c1a2ff69df0f2b995643624291246"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "62d73b2ae70e2242213ca6dc063e3b96"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "1e5e133e1d34a59092851cfe862fb00e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "cd355ab33260f6753bbed54940562eaa"
  },
  {
    "url": "courses/template/index.html",
    "revision": "68d4a7604d4b193bab77842476967d29"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "71b55ca293a5d8d59985a279c664699b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "daf44a7a16778d56f489e62aeb52289d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "0f21807a0526f71b85262768ff84fee3"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "a5ae4316f0212f56a29d87283979e6b2"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "f5e33e918ce49342f2e29e69841b9710"
  },
  {
    "url": "index.html",
    "revision": "9d8fda90f6e1141b3d77d11427cb9fcc"
  },
  {
    "url": "studyathome/about.html",
    "revision": "558fa80e32c7d3af38069ad1643294b0"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "57c652787e509bb7f52cb9d97d85721c"
  },
  {
    "url": "studyathome/help.html",
    "revision": "c6ee3a4cee7a21ded0078dc998594a26"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "75dda24fabe9151dbaa9f8c574a085dd"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "dc7960153c4a5be84fc6ce9c57455440"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d86b2676f7b45d9ac51656a64285485c"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "af1b10b4c392dd7089ead7f190f3b710"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "b9e028c9f037facb7ea060dbd5f2d41c"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "273aefcfe0c8d01cb3dfa05febd3f1ec"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "0f91f41e7cabcaee655f6e23173e7a5b"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "53b15a84cb930c7685d545317a85650d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "86b6a6248ecfa2a3594e7640d7bebcb7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "21abbf799921997cca66d5c814c92e7e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "889784c1bd3244e5bacaafab43119a2e"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "0f91f41e7cabcaee655f6e23173e7a5b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "df877fe1c259864ee22ac9a34f0013e8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "fbaf7f944c3eaa31e16ab5a7591a1d0d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "03d1eda2030c1418522f6fb8165660cc"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "44f2235c8c1471f921219587e341b7eb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "c919c9923a4d8016a0e9d4a28c4eb342"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "5f0bb62fcacde85815946de071365b7b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "40ebb2427e2da1a6f7edebe3fc6cbcc0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "be79c1d5121756c3097d9e901d672193"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovka.html",
    "revision": "10d2d18b824ca14af1494506f6b1280a"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "0f91f41e7cabcaee655f6e23173e7a5b"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "2ec0261df4e9ee799c6a810a29c266aa"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "6e97d7bfd74f767597f877307889136d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "0473cfb9b71a17c075701030d9a6dbd9"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "fba8afc8c79a76306974131b106f7482"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "11a6094ed26b84bbc5fa7b211d6af2d3"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "c0764c61af5d92d13146421431a2a0c9"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d65b4f0ec9105d3b2ed2e7ff40ca8674"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "4be20dd4d8ed03f2fe5eafcbd588850d"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "d23061c42969aa18a69cdc0c77670b2e"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "bf95286d144b7473a0c5da6026cbd136"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "dff1961e984c8bda9fa81b1f567df082"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "f5c2c19c4c11b1d91902749b2d3fff15"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "18b4d89bc793b6d2d3e1ef9611b4699f"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "4d6a62caab025e2c7f74646cf5ae7c64"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "8b003ddf4252abf7071d2e19f96878a4"
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
