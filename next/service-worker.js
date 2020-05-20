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
    "revision": "504dbbf3d88adbe8c90dd0ae030029f1"
  },
  {
    "url": "assets/css/0.styles.f92e094e.css",
    "revision": "348f92199aeecf7ff7c8dcde6954014a"
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
    "url": "assets/js/1.03f4c065.js",
    "revision": "3d03660eb48181d23026cfabae982a8e"
  },
  {
    "url": "assets/js/10.a2a24b7c.js",
    "revision": "cbfd4d30ef2f30462aa8a97391c2a045"
  },
  {
    "url": "assets/js/11.d0880da8.js",
    "revision": "670498a32f99645b61aaa70c84500eef"
  },
  {
    "url": "assets/js/12.d85ddc32.js",
    "revision": "aace98bb1a2a29207cd4a44569415c50"
  },
  {
    "url": "assets/js/13.5491f728.js",
    "revision": "a907f82457ee742307411c720986acc4"
  },
  {
    "url": "assets/js/14.85be5f02.js",
    "revision": "6bb346cd6ec8c0a327a1fcf3c3161ec2"
  },
  {
    "url": "assets/js/15.8397ff33.js",
    "revision": "5dc632a326ef835a9dd11850d03f70a1"
  },
  {
    "url": "assets/js/16.95ecacd2.js",
    "revision": "6917844868818e3c0695ef28553a3d0b"
  },
  {
    "url": "assets/js/17.ba3be645.js",
    "revision": "f8eed7eed85a51a2f97ce30c247f6221"
  },
  {
    "url": "assets/js/18.7d297c86.js",
    "revision": "d7f591f4a6f972e10a91218ec96f89e1"
  },
  {
    "url": "assets/js/19.b76d6814.js",
    "revision": "6a960229c090476467e478a5e94c3b3a"
  },
  {
    "url": "assets/js/2.8fe4254e.js",
    "revision": "70800b2eb2aa3092040833b5a3d62692"
  },
  {
    "url": "assets/js/20.f9bdc767.js",
    "revision": "00f56293c1c74647e415215b12b81451"
  },
  {
    "url": "assets/js/21.e1c58284.js",
    "revision": "33d2239b8419d00f6579b822c14ba298"
  },
  {
    "url": "assets/js/22.9f2aa440.js",
    "revision": "54fd81f89efe26bdc512c70c7ab673aa"
  },
  {
    "url": "assets/js/23.04b8d2be.js",
    "revision": "4be872bcd02a481b2c82a8aaad76513f"
  },
  {
    "url": "assets/js/24.2ebb9ccc.js",
    "revision": "a576483fba635c1966e6623ab15ebb46"
  },
  {
    "url": "assets/js/25.917a085a.js",
    "revision": "368739f8c61eefd19940e33b6265e544"
  },
  {
    "url": "assets/js/26.b98b0864.js",
    "revision": "9e911e3466e8e95eead75fe3c433b181"
  },
  {
    "url": "assets/js/27.5cc62200.js",
    "revision": "1371fcbfad17dc35d7017f0a3f7e351f"
  },
  {
    "url": "assets/js/28.f928de73.js",
    "revision": "eb3d4a83ca6a2e7b46e00c1106c00503"
  },
  {
    "url": "assets/js/29.908e1037.js",
    "revision": "e1dcc53e1ffd71583b19d9705ae6b706"
  },
  {
    "url": "assets/js/30.fe0dd8ae.js",
    "revision": "e69c9299cb7d977fe77945acc1ed0827"
  },
  {
    "url": "assets/js/31.36812146.js",
    "revision": "8aba3c10d4941cffa4d9b158042f7856"
  },
  {
    "url": "assets/js/32.b4d73ba8.js",
    "revision": "cd5281f8515d2b05ddc6af783f9592bd"
  },
  {
    "url": "assets/js/33.be18f728.js",
    "revision": "7694865ff9fa7e2eb72f7004729e25b6"
  },
  {
    "url": "assets/js/34.35e8677b.js",
    "revision": "82af0734b4fa774abd589f24182df5f9"
  },
  {
    "url": "assets/js/35.d0d5a530.js",
    "revision": "b42be18177f82e888a994580aeb74914"
  },
  {
    "url": "assets/js/36.c4d4396c.js",
    "revision": "bf01aac9df01a57f85d0727c7bdf2026"
  },
  {
    "url": "assets/js/37.479e10fb.js",
    "revision": "033682c2b502e63aa668a4a180ab56c8"
  },
  {
    "url": "assets/js/38.a1c1ff7a.js",
    "revision": "16f1323d5ddc089fadbe63e35e9bbf9a"
  },
  {
    "url": "assets/js/39.e2d9dc07.js",
    "revision": "e06253cf07b62ba649d2654c7b4ab8f0"
  },
  {
    "url": "assets/js/4.49d38d09.js",
    "revision": "704029859be55cf90ce8934f7a30290c"
  },
  {
    "url": "assets/js/40.738695dd.js",
    "revision": "e21279021fabb43dffad168cd22f66ce"
  },
  {
    "url": "assets/js/41.1960f92b.js",
    "revision": "c72ffe3bd6f548c638a4dcbf0bee6b14"
  },
  {
    "url": "assets/js/42.1e2fa968.js",
    "revision": "a5c9763f9d17e5a51bc60347ecaa264c"
  },
  {
    "url": "assets/js/43.1db1681c.js",
    "revision": "43d36bbd34cfbf3d6c03b7f245af7ccc"
  },
  {
    "url": "assets/js/44.6b0b6f78.js",
    "revision": "ae89e1aaf14ad0d306705a7f58e35001"
  },
  {
    "url": "assets/js/45.d65c1ee9.js",
    "revision": "8f49cde77bfa6162af318ea421409d63"
  },
  {
    "url": "assets/js/46.b81328ae.js",
    "revision": "c5c6c7da21fc0ffe56a6cd78171d1fc8"
  },
  {
    "url": "assets/js/47.e648b137.js",
    "revision": "23c66fd33692b625bc8fff9a994833ae"
  },
  {
    "url": "assets/js/48.2e3d288f.js",
    "revision": "98b1be6269f894ef48ceffe2cb6ad620"
  },
  {
    "url": "assets/js/49.44fef01c.js",
    "revision": "01c481e03791bb38552ada102322232b"
  },
  {
    "url": "assets/js/5.2d902ddd.js",
    "revision": "42cc03f9a2113e36d6e0788a288e529c"
  },
  {
    "url": "assets/js/50.77c6005d.js",
    "revision": "83e7896fc8dacb89d1fa7604cb17361f"
  },
  {
    "url": "assets/js/51.e510771c.js",
    "revision": "bb71d56366d359188aced706e460afe4"
  },
  {
    "url": "assets/js/52.90bac46c.js",
    "revision": "860a97c612440a6e438f43232baf8e50"
  },
  {
    "url": "assets/js/53.a6512729.js",
    "revision": "0f0fd01a740ac53e89d545bb53ae2ac6"
  },
  {
    "url": "assets/js/54.6eff0ad1.js",
    "revision": "a55ec1d052542665c8fc3db0b99fd0c3"
  },
  {
    "url": "assets/js/55.3d0c2fa8.js",
    "revision": "a08519431b99b4b0e62e4e0c7ef47233"
  },
  {
    "url": "assets/js/56.285e7f4b.js",
    "revision": "f6f5584be3cc29ec53a55e423abc6859"
  },
  {
    "url": "assets/js/57.6ea14d9a.js",
    "revision": "cc4ca6c62215f8abfdf565ba170706a3"
  },
  {
    "url": "assets/js/58.926779bf.js",
    "revision": "e81d9006cbe11807c3924908e7f59de5"
  },
  {
    "url": "assets/js/59.6397bb4c.js",
    "revision": "d27e00e8eb353bfbd4acbed21197bd91"
  },
  {
    "url": "assets/js/6.2a12adea.js",
    "revision": "83644d12f2bc603b8f47f84cf3829194"
  },
  {
    "url": "assets/js/60.3ed306eb.js",
    "revision": "0a44d057e9b3f146a27dcd6050e508ff"
  },
  {
    "url": "assets/js/61.7ede9816.js",
    "revision": "d29202c7e2dae559d2890804ad8dacd9"
  },
  {
    "url": "assets/js/62.c770a98d.js",
    "revision": "ae73423f6e995708f1529fb893188cb6"
  },
  {
    "url": "assets/js/63.98eaff74.js",
    "revision": "74d2ee1c9463d29e94c7b711fcc0ee9e"
  },
  {
    "url": "assets/js/64.ba8dcefe.js",
    "revision": "c2814bd52f67f1cc195800fe501da7cd"
  },
  {
    "url": "assets/js/65.6eb7a427.js",
    "revision": "e34b27fd35130a4b39a26b52552cd758"
  },
  {
    "url": "assets/js/66.99c1b33c.js",
    "revision": "12575f9f6d84ea77faba230a3d3280ff"
  },
  {
    "url": "assets/js/67.149b979a.js",
    "revision": "2fe9907d37cb69c24c9726901c547ef7"
  },
  {
    "url": "assets/js/68.f115e28a.js",
    "revision": "4708e3d401d3a1286783b1f91c313c7c"
  },
  {
    "url": "assets/js/69.6b7cd390.js",
    "revision": "79cff9762d845898361140e546709142"
  },
  {
    "url": "assets/js/7.7b45b233.js",
    "revision": "fb254870392efd1868bad6a723337506"
  },
  {
    "url": "assets/js/70.50cd6ac9.js",
    "revision": "d34c14b5d5b7227d18d129a24cda7fb3"
  },
  {
    "url": "assets/js/71.3842fd68.js",
    "revision": "8a4741027d9cb1add8ade1a9204e86aa"
  },
  {
    "url": "assets/js/72.3ba6c852.js",
    "revision": "df8c66879828af20c188f0473e03f4cc"
  },
  {
    "url": "assets/js/73.1cbde162.js",
    "revision": "92e117abfcaccc15512c485f38c48128"
  },
  {
    "url": "assets/js/74.41c78721.js",
    "revision": "f79ae77aaae12e3c696da9b2105880ac"
  },
  {
    "url": "assets/js/75.cbdbe99c.js",
    "revision": "f9c775eaa0caaff532666b0e8d450b6f"
  },
  {
    "url": "assets/js/76.f0e69198.js",
    "revision": "848d9604563f536196c8c4a05dbe3fe8"
  },
  {
    "url": "assets/js/77.00501e5f.js",
    "revision": "bd9cdf0766f0ccd4f1b20ea8f5b17407"
  },
  {
    "url": "assets/js/78.3f534918.js",
    "revision": "ff3a1411565bda5c7fb00042918a7410"
  },
  {
    "url": "assets/js/79.45605366.js",
    "revision": "120f4282fe942567de52779fc5f22a0d"
  },
  {
    "url": "assets/js/8.3e042d85.js",
    "revision": "727da92991733e2c606da561dde92e51"
  },
  {
    "url": "assets/js/9.e088e972.js",
    "revision": "ffe8cc25becd6fa7a7117bdf57556955"
  },
  {
    "url": "assets/js/app.bf7bcfd9.js",
    "revision": "35e2a2f119ca024a75bc7e7a60c27d47"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "f8593d7f25c64114d95994cc77c1d09d"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "68aada8cc50a1e14fdde8929c1e835bf"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "dc7e143dc3e32548c12769ff79e08c4b"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "6cf49efc942a7d83678239f1b0640a44"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "c9c01fbcc54607367f26838ef830e0c8"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "eb825110503e1474b7682ab01a03c7fb"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "ed0678c4afef58c912b912e92de33c4a"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "7d7128a9a54da53325caaa84f9928354"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "2644c3f64a6f8c7ee96b00a71c981c22"
  },
  {
    "url": "courses/index.html",
    "revision": "f161cc1a9220edbe69e54d9f5be66542"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "31ea15a8253004e51e0b0ec166427122"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d101ef4b705c7b44b9cecd90c6187bb9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "062192b0e789120e1a2de54a3ec04d83"
  },
  {
    "url": "courses/template/index.html",
    "revision": "7694ae0b72e00414fc41a1197569357f"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "14592f597a876711e33570ea0615f068"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "67d4dda1d6ae5f45216bbde1ccf67e47"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "31f6ceb9a1084f4457c0fb33f7a2b118"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "a0f9eacec4191e85120cec59c6fd4477"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "1fb42fd83292a17eca234a1277ba0480"
  },
  {
    "url": "index.html",
    "revision": "9643b5c81fbe71b925927ebe7ad41b08"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d6143f6b3a29c2613322ade3db72ba43"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "8a9500b6ea1cc4e64e6b677c4a2b3afa"
  },
  {
    "url": "studyathome/help.html",
    "revision": "78edd37f5cbf8be5e66f042c61315d09"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "800b89a7e80de1b9bedc6efd06c19bfd"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "504dbbf3d88adbe8c90dd0ae030029f1"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "571e01273648b0b552e2cc2d0e6f55dc"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "86c2c784c8afc9c0c4ef8962a9b5f8d9"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "52408561db8595fd27a29508e563969b"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "b2d1598254fb73dfce399032a5e3f31e"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "504dbbf3d88adbe8c90dd0ae030029f1"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "3918671290b4229147ea016a9de14ffd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "3179925b2b165b261c500c097c09706d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "db947ef426f94bfb9ea33cba5d9a97b7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "11869208d4ca5d38a820eb26cc74736f"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "429f8faf287c7527043f70e6e77fb0fe"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "e8569c8091388be4c036ead0ba90e2fd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "64d4aaaecdc4ccf8b7cdd07c8f100262"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "ed78a8e18e92ea4d11645f6adb3cebad"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "95fdea264ac303157c6b8051d912008d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "7f0ac5bbbfc98441761090b4d7dee773"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "1dabcfcad694754c98606f9662d71a39"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "18811e0a6d2db1395f48195b9dbe8d8b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "883dc463b5d408cb3b22595859981c87"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "634c13de47f06f5a759e6cb87a895162"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "504dbbf3d88adbe8c90dd0ae030029f1"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "a78fe772d01378387df6c24ccf1bf543"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "ff2402a729e4b6a1a7d552c1b5e928e8"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "1e096d13dfb283e995f06d2f375721cd"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "2dfb8301c75a0131210693e612f3b5b8"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "cc4a2dac4b113c9d5b92f43c9ec582d5"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "5e494fc7c604fe32d6dd9e917f7d5eed"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "cda488c5dc05864a962353d502e32d0d"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "50ce3a3a23bba4f7d655e66824f54c75"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c992f7856e7e953dbf138f622b0ef4fe"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "97f0e33c4729303c35058f7f95125f9a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "25a39f4294768261a3802aa999359615"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "520bd9bcb0833749a781cba138930f4f"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "af38e15bedf8c1fb590153f809d40202"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "fa8839e5bfdccaf37a24fc2bbf39bbc9"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "688b1bd1cc74522740de54ba9d0cbdc0"
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
