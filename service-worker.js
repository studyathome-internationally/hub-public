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
    "revision": "1b1140d2320db5224c83c296e5bec067"
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
    "url": "assets/js/17.3ce424f1.js",
    "revision": "d384848e3a6e6f4537de9c739e7ba1ff"
  },
  {
    "url": "assets/js/18.3b21e1be.js",
    "revision": "6dd2a6788c9330c8a49ceb06af09a931"
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
    "url": "assets/js/20.f92bb4c9.js",
    "revision": "653eb40d5a1a61b87e44ba1847581cf2"
  },
  {
    "url": "assets/js/21.e6da8f61.js",
    "revision": "936522ec2fe0f7868d3a1898fdd7290d"
  },
  {
    "url": "assets/js/22.6164eb35.js",
    "revision": "83b71ecf8ee1fd9ae0eb98cd1dc8e622"
  },
  {
    "url": "assets/js/23.61ac218a.js",
    "revision": "37ff8b61dd8b80ec41c1fada13415edb"
  },
  {
    "url": "assets/js/24.9be312ed.js",
    "revision": "6fa55a21cd2fd66f5891ec62e20d37b7"
  },
  {
    "url": "assets/js/25.bc4aa5e9.js",
    "revision": "84c8072e2e4544d4a7b7854bf1b70e41"
  },
  {
    "url": "assets/js/26.4755cf43.js",
    "revision": "caf5a456fe859072ab841f19e5ca26c5"
  },
  {
    "url": "assets/js/27.895d8c11.js",
    "revision": "22e13952cae427002a5ee9987482817e"
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
    "url": "assets/js/30.62b192fb.js",
    "revision": "5b0b883e4b5df9d5b1431fe8f976d645"
  },
  {
    "url": "assets/js/31.28689b83.js",
    "revision": "9f0a9f3415c9fe0859120c7dd8e1fcc9"
  },
  {
    "url": "assets/js/32.2c633693.js",
    "revision": "cb513077cff79de2b8643ef67bbc86f4"
  },
  {
    "url": "assets/js/33.e18e0d7c.js",
    "revision": "b27c39bcb11cfc0f6b51d4d1d8b020bd"
  },
  {
    "url": "assets/js/34.b027477b.js",
    "revision": "c6b4f5857bbc4303e6a436a415bbeabb"
  },
  {
    "url": "assets/js/35.1600bd60.js",
    "revision": "75a5677cfe457092ccfa0757166b41ed"
  },
  {
    "url": "assets/js/36.8bb8ecfd.js",
    "revision": "1486a132faadb04470848160497266cc"
  },
  {
    "url": "assets/js/37.9a3e13c9.js",
    "revision": "7d45423b5cd9423566b5666410e4f856"
  },
  {
    "url": "assets/js/38.b06e2ddf.js",
    "revision": "dbeb00454ac9767b533a7c0a54e57b29"
  },
  {
    "url": "assets/js/39.9add6ca6.js",
    "revision": "25c06913b0d1646dd1f12882e9fbf61c"
  },
  {
    "url": "assets/js/4.43f43365.js",
    "revision": "de3706132891e129d083dec9262ce9c7"
  },
  {
    "url": "assets/js/40.6c3cb7c5.js",
    "revision": "6527dc0b667e5374f98e3f3396764670"
  },
  {
    "url": "assets/js/41.aaec3cf7.js",
    "revision": "25efff2a93221daf9bae68828324496f"
  },
  {
    "url": "assets/js/42.c14b74c8.js",
    "revision": "9256ba57c072d47a944c8c80e47aea08"
  },
  {
    "url": "assets/js/43.f8b64b11.js",
    "revision": "0db5a8d1b6071c043e19067f46aba0f5"
  },
  {
    "url": "assets/js/44.7e07535d.js",
    "revision": "1b5f06f59de35bcaa7b06dd27bf41fdc"
  },
  {
    "url": "assets/js/45.61b8b7c6.js",
    "revision": "7a9852464d726d2855e98802192d4110"
  },
  {
    "url": "assets/js/46.4ef6a8ad.js",
    "revision": "1f8d412c561ba7aa22ddfac29625830f"
  },
  {
    "url": "assets/js/47.fe1ac9f2.js",
    "revision": "3663c02c955d85cbf63c5ae376dd7fdf"
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
    "url": "assets/js/52.b6475714.js",
    "revision": "77f808ca47fdde2995197f0a33d21fd5"
  },
  {
    "url": "assets/js/53.5e3f96fe.js",
    "revision": "374d3397ace1de2e182ebc2e49fce1da"
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
    "url": "assets/js/56.f415a903.js",
    "revision": "035adf0e61bc3a72c71992a2f33faff4"
  },
  {
    "url": "assets/js/57.626a7225.js",
    "revision": "469af51b503ffc9943cafcdc83a1a520"
  },
  {
    "url": "assets/js/58.7d254801.js",
    "revision": "e6884ca540400959f4fef6ecb8e9c10b"
  },
  {
    "url": "assets/js/59.e9721cbe.js",
    "revision": "c99e3a3129b5171be3244efffb79c246"
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
    "url": "assets/js/61.fd1c2fab.js",
    "revision": "0cb776209fc6b7226b7eb161de32e5d4"
  },
  {
    "url": "assets/js/62.ca2980ec.js",
    "revision": "2bafaa373bc8d2f51e5ab0015c737bc3"
  },
  {
    "url": "assets/js/63.eeb10437.js",
    "revision": "139d05850e7e602c404db3c0d756c81f"
  },
  {
    "url": "assets/js/64.4354a117.js",
    "revision": "0a34d1479624b640ad916852ff02393a"
  },
  {
    "url": "assets/js/65.7a6f1b3b.js",
    "revision": "b39a7c2137710daa19408628b6530ac4"
  },
  {
    "url": "assets/js/66.47f6be60.js",
    "revision": "645349787a6909cca6a1b9121e0ddebd"
  },
  {
    "url": "assets/js/67.681a77b8.js",
    "revision": "4920ccab72967c0c839025d1b62dfdff"
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
    "url": "assets/js/70.9fec8d57.js",
    "revision": "5513c03a144a92cc3ba447ca5651dd50"
  },
  {
    "url": "assets/js/71.205e44fa.js",
    "revision": "708d69769fb43482b2f4fcfa5e7a9595"
  },
  {
    "url": "assets/js/72.e5855be9.js",
    "revision": "5209e4d1168e1bfea30197fe05bb8b5b"
  },
  {
    "url": "assets/js/73.beae6ac9.js",
    "revision": "5779f04cd8a623ed754006f648150dc8"
  },
  {
    "url": "assets/js/74.a099c5c7.js",
    "revision": "a2964b3a1dfa19272859fed7678d241f"
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
    "url": "assets/js/8.6d79bc96.js",
    "revision": "5294717116380bfdae01d364aa3b92f2"
  },
  {
    "url": "assets/js/9.bd246e99.js",
    "revision": "14d8e2b90e96456a64080198189d72fe"
  },
  {
    "url": "assets/js/app.88051e8c.js",
    "revision": "c6f55146ce4c0958bc4f26b154a7a2fc"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "652935de59be210054a5f77f8ad5020e"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "7f00287a62e79388e3c5596cd8f05e8a"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "ed7c1cbbb521bb55e6ab9c42973d2552"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "4020b445edec5314ff343fa48fc5962c"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "dc5dc394fbd89b89880da62a5918ec07"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2884858d8794f49a680462fad40402f9"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "49d00d288c6db63485d659aa8d0f6d6b"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "a59a90a38ba2b73e99ae6bc845e4ec8a"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "34842709bbb8c6ec8c13a0142c5c2873"
  },
  {
    "url": "courses/index.html",
    "revision": "675ea290502babb813877e89b59cb815"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "98af48b21e12d107cb8105376cd907ed"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "2a57ce9dc431045ede893a28fb55d914"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "432463b7fcb8db96bb3b845393d02209"
  },
  {
    "url": "courses/template/index.html",
    "revision": "90025043bc9f5fc6fb3b98cad84c4cd0"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "ceb836a5a6dbad623ef9ff134b2ad89e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "eed822bb9c00d94f54e6167b2efa17ea"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "aa42e9ca8602e2817cc4335478ea7807"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "1b46ae54e31f756c2e95dc87189e2370"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "8767fdb52cca0718c5d1ef31e7b26e47"
  },
  {
    "url": "index.html",
    "revision": "03c0086c9f2bb78b6693a2d2b615cf76"
  },
  {
    "url": "studyathome/about.html",
    "revision": "fa8754fca71039188701f7dc825479df"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "00fdeca4220009959d4cc3f8616995e9"
  },
  {
    "url": "studyathome/help.html",
    "revision": "e31e31d5c0d1758e40ee93fe5ef75e86"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "c23ebd2a15dd84333ccd0d1e9b582758"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "1b1140d2320db5224c83c296e5bec067"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "851c7cef77ca15b9e4d27fab26f2110c"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "4bf826317f891012b2a63570688be507"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "43550e53f36c5ca8d85b63df1569abf6"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "69505582ec2ddbeb986adc32d5485483"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "1b1140d2320db5224c83c296e5bec067"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2da37c0d2ab4f318c37c2da3a44f2e04"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "4f9d0834353b96b421429529b46cd247"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "c6e978909720ac9951e03fb232526170"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "894c71d8e5e2e8553acb843c23ac6fa2"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "38aff6d983a0db042bfa47577460561b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "f90ba9474fe73979a33aab37565dcc59"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "60e99f20d2d9501f1d4def92fef63aa0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "5de3a56bc762ebd20ec404122cb61333"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "b293fdd0ef1e084cc067982013d50730"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "57cb329f5ab3c9ea45310a56bf135648"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "538ac6c08b16cce3b29f0458b57fbb82"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "ce6f5709f7477e23ee7e41e1b2ef4493"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "3023f248c20dde1a6bf04bab35db8d74"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "7769e817293701936f78ba6469d2c66b"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "224fdb8eba73248c1a2b13cbcc0986e7"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "381edcf75cd3fbf07288f47bcf47956a"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "bb6a8c155760ee6d3055171cdd748474"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "fecb5afd9d8fa1c49239284b4ff6f31a"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "bf4a629fae404590f850ad2650b17bc2"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "cdc32109aec9e8dac9726f8c1e4e7f56"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "c645c74626ffe8d5677d85cfd9b4745d"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "2b942fb85c878ffa321a7ec820b82d95"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "959ad50ceff6af3d1ca407723a42f98c"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "81421200515c9bf58d02e05cc7992488"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "3fc5d814de82613ff45a9a2be9787ed5"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "25bb2d4da42586c6d132ed63d3bca161"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "6b21143c276bf4216bd8bf2d70837a20"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "8e1fdbf8adf2d2eb0bc3cdd3ec5ccf59"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "4a90b82e22a85dc6dc6a6aaf0e1a3edb"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "dfcb020c7526f6d546e9380cc16a13f2"
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
