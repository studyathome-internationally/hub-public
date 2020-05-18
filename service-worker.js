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
    "revision": "9cdc442b9eace61f62d0316be27f0ca5"
  },
  {
    "url": "assets/css/0.styles.002664ef.css",
    "revision": "dc3c218a3f795000851c9c6cc4a50baf"
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
    "url": "assets/img/courses/VHDL1Cover.png",
    "revision": "2f4f8ee1239795b664f4cb17a641db9d"
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
    "url": "assets/img/simple-workflow-all.bd2f8ab6.svg",
    "revision": "bd2f8ab64c179ae8b7c45f1fb73e7550"
  },
  {
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.e7e11648.js",
    "revision": "c5ae57d1bd3019eeb258038d1f4a9a42"
  },
  {
    "url": "assets/js/10.7a5a634c.js",
    "revision": "e63658a6d1e357f42eda2d3b9c869885"
  },
  {
    "url": "assets/js/11.427c8c4a.js",
    "revision": "beeddb0c38d38b7e2f982205a6ea1aed"
  },
  {
    "url": "assets/js/12.5c32a8e8.js",
    "revision": "2c41910d1785b7139c5c5b505e9e5124"
  },
  {
    "url": "assets/js/13.705be5cc.js",
    "revision": "8dcff317d0487c2a700ed8971745bb0a"
  },
  {
    "url": "assets/js/14.0becf6a1.js",
    "revision": "1bcef22533ce22d0d69224c05193e175"
  },
  {
    "url": "assets/js/15.39a7a561.js",
    "revision": "d22ec5b6e5f705bc667546de46b499d8"
  },
  {
    "url": "assets/js/16.50bb10c4.js",
    "revision": "c4904d331dc62f8e3c65bd84ecf67147"
  },
  {
    "url": "assets/js/17.614b5608.js",
    "revision": "50afc36f27d895997ca6712ec614f094"
  },
  {
    "url": "assets/js/18.68b9521e.js",
    "revision": "40f6ac81b33c288cc748d445343ace55"
  },
  {
    "url": "assets/js/19.9ee3fcff.js",
    "revision": "892f7dd46b4c7e305569f64df1257269"
  },
  {
    "url": "assets/js/2.9cf477a6.js",
    "revision": "9e52f594071691b47e32e674e6be8f18"
  },
  {
    "url": "assets/js/20.09a8d691.js",
    "revision": "939ae63533dbc9171c368e50dbe4e117"
  },
  {
    "url": "assets/js/21.d03635d5.js",
    "revision": "5216e36040f9cea3acef1da99b9435a1"
  },
  {
    "url": "assets/js/22.6164eb35.js",
    "revision": "83b71ecf8ee1fd9ae0eb98cd1dc8e622"
  },
  {
    "url": "assets/js/23.c94c5940.js",
    "revision": "f87616a1e3a7fd965b52541c1581b527"
  },
  {
    "url": "assets/js/24.7cea0fa8.js",
    "revision": "09525e9c625f684a46859471049a8704"
  },
  {
    "url": "assets/js/25.1e76f687.js",
    "revision": "47f5d7eec94cee5a4f84415797fb6d56"
  },
  {
    "url": "assets/js/26.b2526d14.js",
    "revision": "6e65014ad0093b1dce21884896be7d5a"
  },
  {
    "url": "assets/js/27.1814c92a.js",
    "revision": "9d538cbcbc2fb1f6df104835da573826"
  },
  {
    "url": "assets/js/28.279dccd1.js",
    "revision": "8b9204b083a9d467f2aa9d3fed4d974f"
  },
  {
    "url": "assets/js/29.ed52b160.js",
    "revision": "79d26070af75f74c78b7d8bf1974bfe7"
  },
  {
    "url": "assets/js/30.b2912e9c.js",
    "revision": "ce958919888e4c3b98346a721f1739aa"
  },
  {
    "url": "assets/js/31.28689b83.js",
    "revision": "9f0a9f3415c9fe0859120c7dd8e1fcc9"
  },
  {
    "url": "assets/js/32.a51a0a73.js",
    "revision": "8f588465e643a497fa44e507fd037818"
  },
  {
    "url": "assets/js/33.e9c0fe74.js",
    "revision": "9043276edc54b5d7b81daecd5ade9fb6"
  },
  {
    "url": "assets/js/34.9a312f58.js",
    "revision": "d63d70a234c98abf03369be2fe741f21"
  },
  {
    "url": "assets/js/35.623ccf70.js",
    "revision": "4404986599fdbd049b8025ad8c05e2ea"
  },
  {
    "url": "assets/js/36.7435452a.js",
    "revision": "6697f8999b7e27b83f2a21ac9ca5da36"
  },
  {
    "url": "assets/js/37.9a3e13c9.js",
    "revision": "7d45423b5cd9423566b5666410e4f856"
  },
  {
    "url": "assets/js/38.ea060ff9.js",
    "revision": "48229e32cee10eb6504276d7e45814b0"
  },
  {
    "url": "assets/js/39.323c7b64.js",
    "revision": "5f932bdec2007a8f1b0bee388c4ce2be"
  },
  {
    "url": "assets/js/4.43f43365.js",
    "revision": "de3706132891e129d083dec9262ce9c7"
  },
  {
    "url": "assets/js/40.54d181df.js",
    "revision": "1ec64e0fe186c08a3e86eb294652f61b"
  },
  {
    "url": "assets/js/41.aaec3cf7.js",
    "revision": "25efff2a93221daf9bae68828324496f"
  },
  {
    "url": "assets/js/42.6391f69e.js",
    "revision": "726f97dee77bc5dd9445c2a7e75386f2"
  },
  {
    "url": "assets/js/43.8f750b0c.js",
    "revision": "316faea722dac6588d4bd8ecad240b42"
  },
  {
    "url": "assets/js/44.8b359370.js",
    "revision": "9b154041df00da48c166c65d20c0e646"
  },
  {
    "url": "assets/js/45.61b8b7c6.js",
    "revision": "7a9852464d726d2855e98802192d4110"
  },
  {
    "url": "assets/js/46.dd8f578a.js",
    "revision": "299da55bfb80a20042ebbc6be91b1f83"
  },
  {
    "url": "assets/js/47.e86b59ad.js",
    "revision": "d3daa75a5a745039c4d0a7e512fc8b24"
  },
  {
    "url": "assets/js/48.bd041bc4.js",
    "revision": "e05c4bc93a9c916afa8133e62121fe0b"
  },
  {
    "url": "assets/js/49.c34c5fd8.js",
    "revision": "0f0166ada575a8d60a1ca9965a12b1c3"
  },
  {
    "url": "assets/js/5.02fa3947.js",
    "revision": "1168265fbfedab5c1f94a65cef905de2"
  },
  {
    "url": "assets/js/50.c36e1fdb.js",
    "revision": "aed7fc80499cc9b3f5db1d1ffca796bb"
  },
  {
    "url": "assets/js/51.27a84182.js",
    "revision": "bda3e3c992ee3bb40f97436619e51b59"
  },
  {
    "url": "assets/js/52.c5f88e6d.js",
    "revision": "11c0ffd2ee633a15bb70486fd6f79e5a"
  },
  {
    "url": "assets/js/53.5e3f96fe.js",
    "revision": "374d3397ace1de2e182ebc2e49fce1da"
  },
  {
    "url": "assets/js/54.bfbac1fe.js",
    "revision": "95de63a1da1b4288f5c1288effbfeb21"
  },
  {
    "url": "assets/js/55.bf959f74.js",
    "revision": "c9ae3814cd6b5d965560a059c557d2ef"
  },
  {
    "url": "assets/js/56.755ec4a4.js",
    "revision": "78348ca70830011cd7d75562ef6c7026"
  },
  {
    "url": "assets/js/57.db0a1c82.js",
    "revision": "b94c2376503e926910161fe08a536d62"
  },
  {
    "url": "assets/js/58.a52fd590.js",
    "revision": "4cc29da867287063285f653f9a929a10"
  },
  {
    "url": "assets/js/59.c42a036c.js",
    "revision": "eb48e8508f4e3b3aa20338ffb80ff617"
  },
  {
    "url": "assets/js/6.dd0a8348.js",
    "revision": "ae9fd1b867573a7c9aa225df91886ac8"
  },
  {
    "url": "assets/js/60.2e88a157.js",
    "revision": "3716230f0302e54abb7dad58f262c547"
  },
  {
    "url": "assets/js/61.0f766712.js",
    "revision": "b1251ebfe119a4e990ff17f34513a1dd"
  },
  {
    "url": "assets/js/62.72cd8bf3.js",
    "revision": "55064b64c2d8ee668403f2c0a83f737c"
  },
  {
    "url": "assets/js/63.98839866.js",
    "revision": "767868121978dfb26c19a349d1658fe7"
  },
  {
    "url": "assets/js/64.4354a117.js",
    "revision": "0a34d1479624b640ad916852ff02393a"
  },
  {
    "url": "assets/js/65.5463ea3b.js",
    "revision": "1c2e7a79f5ec4ccfdce8a21e65efedd3"
  },
  {
    "url": "assets/js/66.d4472d5d.js",
    "revision": "743802336162384cdb441dc2f3e2f9a2"
  },
  {
    "url": "assets/js/67.044c67c0.js",
    "revision": "1443b5280e84870d04284fb08fcd68b0"
  },
  {
    "url": "assets/js/68.26ee3157.js",
    "revision": "98d0bbaf2de726d826b83e0ae3a1ffbf"
  },
  {
    "url": "assets/js/69.3aca3806.js",
    "revision": "7727062b8a104181338534cbd629a061"
  },
  {
    "url": "assets/js/7.67507997.js",
    "revision": "23acbe4cdb173dad75e74d6ffb49f917"
  },
  {
    "url": "assets/js/70.34264858.js",
    "revision": "900f231ec1f46a1f1e9a7f6d353f7c08"
  },
  {
    "url": "assets/js/71.15b894a1.js",
    "revision": "07a6e6e990b2bfb65044fad37b244320"
  },
  {
    "url": "assets/js/72.b7eec909.js",
    "revision": "188f4585385b0375ecd162fa869c6068"
  },
  {
    "url": "assets/js/73.11712b9b.js",
    "revision": "5ecbf5d5881ae87784bc9fc4e28bc658"
  },
  {
    "url": "assets/js/74.e2359fe4.js",
    "revision": "aff6c3ae8bf1619c428191137730fa90"
  },
  {
    "url": "assets/js/75.d1af0c7f.js",
    "revision": "b6e2ff29f5b7c7b5b5acc99814e1d0f7"
  },
  {
    "url": "assets/js/76.726f1fb4.js",
    "revision": "a35a056b93901b0a7f664d219ebdcc2c"
  },
  {
    "url": "assets/js/77.00141b72.js",
    "revision": "d2154aaeddf8bec2356d0cbccfc06a78"
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
    "url": "assets/js/8.6d79bc96.js",
    "revision": "5294717116380bfdae01d364aa3b92f2"
  },
  {
    "url": "assets/js/9.bd246e99.js",
    "revision": "14d8e2b90e96456a64080198189d72fe"
  },
  {
    "url": "assets/js/app.82b1cb56.js",
    "revision": "2b6a802437dce50f4b860af9ae5da7e9"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6caabd01c977fe6eb4b45e86aa2bec20"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "a0f3627dbcc075977ebab7b6ef32b354"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "353cbd42a77ee59e64134b5e4fa026fc"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "a26d1840ff106b83ff9582f55e308572"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "99a514f95448ed5af9abe69b86408297"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "4c0e3075713da136df1c84ec50868c81"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "9400ac00cb27fb292bd2fa5be080d534"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "521db33fe3435af399ece791365bb2c3"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "a2657b20cacf4be335bcd9c2c4b1d93a"
  },
  {
    "url": "courses/index.html",
    "revision": "926af5a367787a9a1b622a9585aa85e6"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "53c35e3f2a778f10909fa55cd95afdc9"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d9725f430db38f459719a34baf52a648"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b0740fd69d733cd8dae472972c65aa34"
  },
  {
    "url": "courses/template/index.html",
    "revision": "15641996c46799a051bf6cfc378e9f20"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "0384f3cb2188d85725c070bc0506a516"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "2a99166d494d919c5373bac53908350e"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "5562a3e7f5e4f9dae141df44ad8e38d6"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "4303e6a5fb665aafc0c99c91b6ba775d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "e2b34973b7bf34d98adbee84dbaa0d5b"
  },
  {
    "url": "index.html",
    "revision": "3ee00e2495d6e43fb9861cadc2e208c5"
  },
  {
    "url": "studyathome/about.html",
    "revision": "39a18479cfce2065cfd8d4fa967fb839"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "5e6ae57ee33f3f6d1f7eee6e67273b0b"
  },
  {
    "url": "studyathome/help.html",
    "revision": "df39a4c034bdc93de03a661a2240f908"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "4a17123d3d3fdc1a0336629a7c6ea364"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "9cdc442b9eace61f62d0316be27f0ca5"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "180f2c3ff56c27b0047aa81b3a98e437"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "1df2bcec8bee369b1d66de70a9fde88b"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "d3e249d4880d234790164c07c325d338"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "52bacea1ef19c6a29e89cc09500694ac"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "32ee4869701fe6247f21c09cfa413b4d"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "d66d5a36440e9f3447fde1fbd2421977"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "f0154c25550fa1448795d65fec58dfcc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "32b80c03c5d4c6051c0c0ece374079aa"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "d9c0627e1552331abe187d573dbd5741"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "32ee4869701fe6247f21c09cfa413b4d"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b0a14771ef7d74fb1f7977b5d2a43136"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "87d391b683a46b7431f1e0049b7b1a9b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "ab7c0e55d37027fbe076cb18d82d76a2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "215e6b895c10d2191c78949419c8b572"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "90630226ec833a92fc922e9db838a672"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "770071b70c8981a8f40858d95248bf16"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "d357c6bd7e9ed412d25ce866cdb6ed61"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "80c10735ccfda05587fca8040280a590"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "2489a502d1658a934f9902696c5e0fa5"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "9cdc442b9eace61f62d0316be27f0ca5"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "cb4648c932b1f4edb522cc5020d71779"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "69c4d3768c6bfc47546967cd574427f9"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "c06fb32c342bf10ba0d4868c7faca2fa"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "4f375008c98ec5633f68d6335fe99206"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "22b72c297e68dbae62739228f658a2f0"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "638f215f063d8721dc54e26917acaa7e"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "093b890486661869a8c8529da240947c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "b74d11cea4479054d965b52d5dcd1fac"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "f6dd440a7f409e07b44d897196724945"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "a6a41ebc29b42fe8352166352d9aabdf"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "e134e2e6046c235eb51c6c598adc918e"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "16c53a2c7a65ba9e9923c0681ca5d392"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "bc7c4a1e57d9914cfc03b516a6fcd32d"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "467aea865ee1cd9a4d9b043efdcd17a7"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5f850c9ac41a72377d0a2fbf81fbebb4"
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
