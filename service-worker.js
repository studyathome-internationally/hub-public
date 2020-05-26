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
    "revision": "b7948d4c19cd8f86cd27fe52cff38c91"
  },
  {
    "url": "assets/css/0.styles.4fe934b3.css",
    "revision": "732441355e1557ebda0022ca6b5caa01"
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
    "url": "assets/img/courses/mux.svg",
    "revision": "52a569a585cecdd600daedd3669107db"
  },
  {
    "url": "assets/img/courses/stock-photo-ai-artificial-intelligence-concept-691438969.jpg",
    "revision": "aa2746fcf7434dd93c0ec369b1521d11"
  },
  {
    "url": "assets/img/courses/stock-photo-website-development-layout-sketch-drawing-617330408.jpg",
    "revision": "2a32a29f43a6b186507a87bf05225d83"
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
    "url": "assets/img/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
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
    "revision": "f02da1cdead835cf3dfff3b38c169a1a"
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
    "url": "assets/img/partner/ukim/lecturer/suzana-loshkovska.png",
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
    "url": "assets/img/simple-workflow-all-line-arrows-studyat.a377037b.svg",
    "revision": "a377037bbd71a298049598d8c7db81d5"
  },
  {
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.15baa48e.js",
    "revision": "9869e66c07ab4a2f0f2c184563da0d25"
  },
  {
    "url": "assets/js/10.64b23a15.js",
    "revision": "9210b3746d24ce42d04c1db13c1550ec"
  },
  {
    "url": "assets/js/11.61b3c4c6.js",
    "revision": "9f274f48ff157f0c8ab83d1eb98f5bad"
  },
  {
    "url": "assets/js/12.0db8cbd7.js",
    "revision": "4840d3b315b6f8217c8e6772a6a60a31"
  },
  {
    "url": "assets/js/13.dd867184.js",
    "revision": "fecc144ce1701cd9989f7bb87a383996"
  },
  {
    "url": "assets/js/14.dfb7f586.js",
    "revision": "4f432ffe0bf72f101cb962fb98edcad8"
  },
  {
    "url": "assets/js/15.08c8a107.js",
    "revision": "59a9fc2f477065bcad03dad702134828"
  },
  {
    "url": "assets/js/16.2350b8b4.js",
    "revision": "b5681b2de6154d7a9af2d0442b38d0eb"
  },
  {
    "url": "assets/js/17.0bb44fd1.js",
    "revision": "03de4cc9ce446311a6385237863c3b95"
  },
  {
    "url": "assets/js/18.e7b6f869.js",
    "revision": "d801c410bf0419f7241c7e72b12f1455"
  },
  {
    "url": "assets/js/19.a72d111a.js",
    "revision": "3084edfa6b7d5e2b95749f4e13c7d1e5"
  },
  {
    "url": "assets/js/2.d840a784.js",
    "revision": "c7a4adb88df131913262fe5f3455464c"
  },
  {
    "url": "assets/js/20.3cc11f49.js",
    "revision": "6df8152245bfb8d1907d220e8babd1a7"
  },
  {
    "url": "assets/js/21.02e7db06.js",
    "revision": "6e7a146798c78d0bd5bb934241a1049a"
  },
  {
    "url": "assets/js/22.208aea3c.js",
    "revision": "9ab49ca3672b9008ec56b2165f069b7a"
  },
  {
    "url": "assets/js/23.8bd80a1e.js",
    "revision": "605d3f5539a6d178d0d9d92c71e15054"
  },
  {
    "url": "assets/js/24.3e6e19a7.js",
    "revision": "f78b963025740c10621e8160049c9045"
  },
  {
    "url": "assets/js/25.0e6a7403.js",
    "revision": "a20b467453d4df9165ed1c4174cdc66f"
  },
  {
    "url": "assets/js/26.affb63f8.js",
    "revision": "1eb4566e8519f67c45a88390c59e9439"
  },
  {
    "url": "assets/js/27.4c7e5447.js",
    "revision": "fb2c09417866458f8baf86f0a6b51803"
  },
  {
    "url": "assets/js/28.22cc4f4d.js",
    "revision": "5e97ab71b12de6ee57e5f3818ba0f361"
  },
  {
    "url": "assets/js/29.39ac40cc.js",
    "revision": "2fd7560e8216a0175401c80c63ea7702"
  },
  {
    "url": "assets/js/30.04b5658e.js",
    "revision": "63a9a3e308da4f1436e03c832b64ad77"
  },
  {
    "url": "assets/js/31.537a2936.js",
    "revision": "41a57f183383cb2521aaca2d23357c58"
  },
  {
    "url": "assets/js/32.1729b352.js",
    "revision": "269d215bf875141db8f5bcbff884c6e1"
  },
  {
    "url": "assets/js/33.41552247.js",
    "revision": "369c50e01d82010fc5eea37369e7df32"
  },
  {
    "url": "assets/js/34.113227c1.js",
    "revision": "e302626959387348d7fec651a6f1556e"
  },
  {
    "url": "assets/js/35.562553ce.js",
    "revision": "39179d70b1c7f11b17bd957fd2277527"
  },
  {
    "url": "assets/js/36.167e7b75.js",
    "revision": "ece1e6e65a1ec418d8df4d4d22667d86"
  },
  {
    "url": "assets/js/37.744e938b.js",
    "revision": "c0b2ff6dc869c46bbf35e226ef605d9c"
  },
  {
    "url": "assets/js/38.fce78630.js",
    "revision": "a9b7f09256ab663fe5732add7001ea40"
  },
  {
    "url": "assets/js/39.9fa31d94.js",
    "revision": "a0813f4435bbf9f0e0b7a886a9c20cec"
  },
  {
    "url": "assets/js/4.448e588f.js",
    "revision": "d7f5c3e02f9e46bec94a77cdec0e144c"
  },
  {
    "url": "assets/js/40.5bacdaa7.js",
    "revision": "ceb9174ca1b4396a5aceb1eb8424c6cd"
  },
  {
    "url": "assets/js/41.2e985860.js",
    "revision": "a364993dd5e39f322fdd2d1f3d2a8a4d"
  },
  {
    "url": "assets/js/42.203c5cd1.js",
    "revision": "8a73c24e567df38b46bfb6fe02792901"
  },
  {
    "url": "assets/js/43.b4eab96b.js",
    "revision": "35ce72ef76d3c3303d74b3e2189e8cb3"
  },
  {
    "url": "assets/js/44.fd0b213e.js",
    "revision": "a9af7c7703e1ddd39cf21cef207fba30"
  },
  {
    "url": "assets/js/45.cbd6a289.js",
    "revision": "f71bc81864f3f192a76afaac433276d5"
  },
  {
    "url": "assets/js/46.269c9910.js",
    "revision": "5f44a05c718832299634478dcdda2cb5"
  },
  {
    "url": "assets/js/47.a719c39e.js",
    "revision": "ee4239c7c200e06b09008323201b6bf3"
  },
  {
    "url": "assets/js/48.083bbc9e.js",
    "revision": "b26e5fa49c193451a5065c1c52336a43"
  },
  {
    "url": "assets/js/49.682b9dd9.js",
    "revision": "cf945bb8c23289408c81bbbd59438895"
  },
  {
    "url": "assets/js/5.ed6a2662.js",
    "revision": "e95d4611498b72943eaea626b028de64"
  },
  {
    "url": "assets/js/50.e784a4c7.js",
    "revision": "77a4fda4c96e9d7a1921baa62dca7be6"
  },
  {
    "url": "assets/js/51.a527ac52.js",
    "revision": "43a759e56a1f1a542cedb6d96af3cfc8"
  },
  {
    "url": "assets/js/52.42528eb5.js",
    "revision": "0f298a82d16713483e9cbcba889dda8c"
  },
  {
    "url": "assets/js/53.f912d832.js",
    "revision": "2b07995d2e3857a695eaef36cb41bebe"
  },
  {
    "url": "assets/js/54.f0e7d9ce.js",
    "revision": "84bd79ce0eb5434371d018e37c8ff1fa"
  },
  {
    "url": "assets/js/55.4173eb72.js",
    "revision": "d7e235fb92e7b086e3e1ae23abfaf32f"
  },
  {
    "url": "assets/js/56.2a9656ee.js",
    "revision": "0c916765916db991be73ccbf6162e8d7"
  },
  {
    "url": "assets/js/57.808dc013.js",
    "revision": "13f65bcc608223e665766c39f82bf8f8"
  },
  {
    "url": "assets/js/58.c6b537ef.js",
    "revision": "164893262cc752671ccf878e636a4ad5"
  },
  {
    "url": "assets/js/59.5ced024f.js",
    "revision": "41cb7adaffa0a114f29ae5a867b46b05"
  },
  {
    "url": "assets/js/6.ebe5e6c5.js",
    "revision": "d73db32965621135bc4ab029fd2c0ac1"
  },
  {
    "url": "assets/js/60.327986b5.js",
    "revision": "b978c0e9f96f8deb1d816e75f1ae4ada"
  },
  {
    "url": "assets/js/61.920fb706.js",
    "revision": "ffa19fa88f87390e07755b464b8fce28"
  },
  {
    "url": "assets/js/62.c9283dd0.js",
    "revision": "a9aaf905a7bd5a202ae31ae58e72ab7a"
  },
  {
    "url": "assets/js/63.82ea38cd.js",
    "revision": "43a3af0e212d326426fb197d0b5ac632"
  },
  {
    "url": "assets/js/64.048c1a42.js",
    "revision": "a2fbe29b3eb85edc7bc7e6d6d0922ad7"
  },
  {
    "url": "assets/js/65.10f6ddf9.js",
    "revision": "9a8ad8bd2f4e52cf1649b2cf2b8f01ac"
  },
  {
    "url": "assets/js/66.feed53e0.js",
    "revision": "642a6eae473de1bb4939026e3f9c713c"
  },
  {
    "url": "assets/js/67.6700192c.js",
    "revision": "e41a51c2424f4e31b195f02f26140ddd"
  },
  {
    "url": "assets/js/68.f1e643a5.js",
    "revision": "21ac7bb0e76e83cc41c882b624d16a4b"
  },
  {
    "url": "assets/js/69.e977baf1.js",
    "revision": "f7a3e1e5239256cde2ea9923442fa72d"
  },
  {
    "url": "assets/js/7.926947ba.js",
    "revision": "08cc0e8453a20df43eda951466def0f3"
  },
  {
    "url": "assets/js/70.e1861cec.js",
    "revision": "b7e21722d2509a582166f14b89a31885"
  },
  {
    "url": "assets/js/71.79a3cc1e.js",
    "revision": "5412781c93864887c6c0b7b8968ab3ae"
  },
  {
    "url": "assets/js/72.0a815390.js",
    "revision": "e2c7bf74c33e3ba312ba78a2b90b789b"
  },
  {
    "url": "assets/js/73.4927bd5c.js",
    "revision": "f129eabf16394f06cbab013ef6b4717f"
  },
  {
    "url": "assets/js/74.c6ebfa79.js",
    "revision": "d77b32e6577970f19d0a1e0e3d09c16c"
  },
  {
    "url": "assets/js/75.1b65433c.js",
    "revision": "5884cf3a0489b6662519fcfa4361d22c"
  },
  {
    "url": "assets/js/76.403a746b.js",
    "revision": "d1eecbc84cfb6ca793b168d257890ee9"
  },
  {
    "url": "assets/js/77.66e0f189.js",
    "revision": "9174bc5dc0a9339523737f43b862863a"
  },
  {
    "url": "assets/js/8.9673e60d.js",
    "revision": "8dc0423c7cd1931eee24dca93b0ebfb3"
  },
  {
    "url": "assets/js/9.a8f09ed5.js",
    "revision": "419e5421337351276c0473bf35778bc1"
  },
  {
    "url": "assets/js/app.f2fb39f0.js",
    "revision": "4465243f4aa54222dc631075eb20c245"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "72b3d25641a782a7803c32d1cd517fe1"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "1322c8c6e7d01d003a7b43866220635f"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "5235ec06f42bb88b5a50f849edcaacfa"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "aa79cb037c9ee8052e17c97d99b1578b"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "9fea114b3525a49bce95d2fa628859d9"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "9896ad27b5f4e268d5bebaf2f105d819"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "c9fe24b1ede2c9d5272b17e70a910c9b"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "5e9623f879572fc6ae2f3d3008695998"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "38928bb88288393223cec39d3ea2046b"
  },
  {
    "url": "courses/index.html",
    "revision": "ba1ff2a2980caaa2ad98f7b12efdb4c6"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "cd82707d8ba77cd6489c2444d3d8f698"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "dbf7ed90d0851057d989a6c74f49451b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "407a04f72c9c2cb3aa5e8acb2cb74f4d"
  },
  {
    "url": "courses/template/index.html",
    "revision": "de933839f7760e5cecf017352fde4f14"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b9fb0d8e3a93218aac5b5852f5700627"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "a08c6a68b74d42903552ab7301b17d63"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "d2772b005760408d02e4cf60af0e670d"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "257262956fd17f318986ce4ae243c9e0"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "6f0a739ab15cd619360d9f1f1e615f07"
  },
  {
    "url": "index.html",
    "revision": "9ddc4d4fcc322701d33150e63b64b089"
  },
  {
    "url": "studyathome/about.html",
    "revision": "14020ab02c4556b575ffdb22b0226505"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "0b4a9ad771e27a3e02b2f1c72d023abd"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "7e2299a14e64888faca546f353380a3c"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2a95208d86c24170e08f83b95487fded"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "42c611bd983ce626b99f81a5d456d7e4"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a3770d407cc0782bffd18db846fdc1f0"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "cae1dd900a214f83d151e204341be53a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "d0bcc3156ac5c3266b485814001c83c3"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "043d8681aa9d0d086084700524a77dcb"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "ed30bb67d12738153ce9cd27a37ed9e6"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "a1d4d2dc132981010fb8483ade55484a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "dd3332eae939866824afa42e59581697"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "37dd0207363eabb30026286542ba266a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "2da9991774d13ec12071c1a10b336d9b"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "42c611bd983ce626b99f81a5d456d7e4"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "8a7a68710a243d8ceb10baa4a83ed8fd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "63521ffeb9710d185c0aebc898f427f8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "ca6d10e94a353fc4682537f0cafca33b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "8dfea2da15ed8efd8c349c7b104e288b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "bbc46b540f6e966bad0978f2058a2730"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "462b237cf4a9484a7c5936d3db59bd90"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "116d113aa51f5faea870308a6884c12d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "5426a5cdfdd1ae63f0b858c089891ad7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "79927b4c30f2c32fe6fd8c847aa82ced"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "b7948d4c19cd8f86cd27fe52cff38c91"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "53ac5d0c7f87453fae4e0808fc1f8a01"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "43ae8ed179a5b6569df29c4d9e8f2256"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "56a8e7d129a3da396cdd87ff51ad1602"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "cefb64a91e2409c846fd9993f07b0c5b"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d65d6bc6ffe414ae21a6cb15ca796a46"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "70fc42e868dd679fde9dbdc8f062881e"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "0c1ffbc8ed758f4203c724428d89a9a3"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "4f36c0d388a70c8a8aaad69a9c0d4255"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "277bf8c6345a2245760ae3ec88ca1d1e"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "c312605437d0515358b87a0b5a6a7468"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "03d1b817197f942d8542b0699642149f"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "902f94c71800f22e9ac3944fb85fe943"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "c2eef63494a7fb1c8c72dfa5b32dc477"
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
