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
    "revision": "be8791f5b637bd091f0058154059aab7"
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
    "url": "assets/js/17.6d610037.js",
    "revision": "1b27a544852f8d5cd735d3b2f484730d"
  },
  {
    "url": "assets/js/18.3b21e1be.js",
    "revision": "6dd2a6788c9330c8a49ceb06af09a931"
  },
  {
    "url": "assets/js/19.13644812.js",
    "revision": "bc3c4731e0dd785104342dca2e030914"
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
    "url": "assets/js/23.61ac218a.js",
    "revision": "37ff8b61dd8b80ec41c1fada13415edb"
  },
  {
    "url": "assets/js/24.72e0e3bb.js",
    "revision": "ed520694ed131e89f24ac10b32ed96ac"
  },
  {
    "url": "assets/js/25.67eb257f.js",
    "revision": "83890774991fe62ba0f2e9177f93a0c5"
  },
  {
    "url": "assets/js/26.ced6f5f5.js",
    "revision": "939a6e7d42196c6becd8adcb0e0afea1"
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
    "url": "assets/js/30.b2912e9c.js",
    "revision": "ce958919888e4c3b98346a721f1739aa"
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
    "url": "assets/js/36.5a5f9beb.js",
    "revision": "7c5d533ff893f4a73f9ccfa99ac21499"
  },
  {
    "url": "assets/js/37.9852084e.js",
    "revision": "b7588e3ce30a1dc66df6f2ff975d4158"
  },
  {
    "url": "assets/js/38.451b49cf.js",
    "revision": "4a68fde4fb1472e960453e390e756aaf"
  },
  {
    "url": "assets/js/39.9d2410ec.js",
    "revision": "99bb80fd15aee109fd9206f0bff16692"
  },
  {
    "url": "assets/js/4.43f43365.js",
    "revision": "de3706132891e129d083dec9262ce9c7"
  },
  {
    "url": "assets/js/40.69c3a376.js",
    "revision": "f86c48d469b931e4874d2921ef899118"
  },
  {
    "url": "assets/js/41.03a64d65.js",
    "revision": "2b44b572da6b928a3c2dcf06830dc282"
  },
  {
    "url": "assets/js/42.c14b74c8.js",
    "revision": "9256ba57c072d47a944c8c80e47aea08"
  },
  {
    "url": "assets/js/43.f04fef95.js",
    "revision": "70a1733763043632c62988caa5d939de"
  },
  {
    "url": "assets/js/44.8bb5bfb0.js",
    "revision": "475293fe99debbddb342a3e2614a15f9"
  },
  {
    "url": "assets/js/45.e4b2a3da.js",
    "revision": "1dbc63e9c595c138b2de1fabeca9aaca"
  },
  {
    "url": "assets/js/46.28ae138e.js",
    "revision": "6ba52e422cafa42a268e5aa2d62641ed"
  },
  {
    "url": "assets/js/47.fe1ac9f2.js",
    "revision": "3663c02c955d85cbf63c5ae376dd7fdf"
  },
  {
    "url": "assets/js/48.452af8bf.js",
    "revision": "98b1be6269f894ef48ceffe2cb6ad620"
  },
  {
    "url": "assets/js/49.0c6d2520.js",
    "revision": "11650b5ab842deb5aa836ffc72296433"
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
    "url": "assets/js/51.8f0d6231.js",
    "revision": "1bb02d303464bd5a2b75e849f48f9164"
  },
  {
    "url": "assets/js/52.b6475714.js",
    "revision": "77f808ca47fdde2995197f0a33d21fd5"
  },
  {
    "url": "assets/js/53.8729eb73.js",
    "revision": "576243ff33eb47f86efe0648118763b7"
  },
  {
    "url": "assets/js/54.7c9e1a72.js",
    "revision": "f293674021496e2b2574ba5c0645e6a4"
  },
  {
    "url": "assets/js/55.a82276e8.js",
    "revision": "d2a66092a8a95ff2091f0ebe741a5615"
  },
  {
    "url": "assets/js/56.0811b1dc.js",
    "revision": "6cf1bc39b3e35e4a8db88f9e865e41d9"
  },
  {
    "url": "assets/js/57.bb9602ca.js",
    "revision": "f6fdfdc0bd3af7f7378b8c8070ca2edf"
  },
  {
    "url": "assets/js/58.7d254801.js",
    "revision": "e6884ca540400959f4fef6ecb8e9c10b"
  },
  {
    "url": "assets/js/59.ff1002c3.js",
    "revision": "5a3a1acf7fa13fc31f7535f5c6c7892d"
  },
  {
    "url": "assets/js/6.dd0a8348.js",
    "revision": "ae9fd1b867573a7c9aa225df91886ac8"
  },
  {
    "url": "assets/js/60.fd8c4dc0.js",
    "revision": "c679eb968385a1413156d99af0ff0672"
  },
  {
    "url": "assets/js/61.fd1c2fab.js",
    "revision": "0cb776209fc6b7226b7eb161de32e5d4"
  },
  {
    "url": "assets/js/62.f06a2551.js",
    "revision": "4fdc4e4d6f5f88c577a1c375afafdf2e"
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
    "url": "assets/js/65.ccf59195.js",
    "revision": "115e4a86db43badca1e1329b430190bf"
  },
  {
    "url": "assets/js/66.a6b8025b.js",
    "revision": "b6693263fc6e7c60bf1409877e646e12"
  },
  {
    "url": "assets/js/67.75e1883e.js",
    "revision": "732d6d45e11a3eaee6aba6a3f5d8ae55"
  },
  {
    "url": "assets/js/68.76d19ff2.js",
    "revision": "4866665b7d60ae36ee1f864d4e6b06a0"
  },
  {
    "url": "assets/js/69.5778e42c.js",
    "revision": "dffaa16e7c23ebd45c2682037185734d"
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
    "url": "assets/js/71.205e44fa.js",
    "revision": "708d69769fb43482b2f4fcfa5e7a9595"
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
    "url": "assets/js/8.6d79bc96.js",
    "revision": "5294717116380bfdae01d364aa3b92f2"
  },
  {
    "url": "assets/js/9.bd246e99.js",
    "revision": "14d8e2b90e96456a64080198189d72fe"
  },
  {
    "url": "assets/js/app.6534fc1e.js",
    "revision": "75c806f458a901874437b62daed28306"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "c0f3d03f81633782d74e7e1ee612c44f"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "01074af6c55875d1b611e50771b0c5f9"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "5800799f3c00d456f576e3e9632cba97"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "a80572b20d773b752f6ed79ab573b84b"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "c16240e4836ce38be00066622680911e"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "d0ab4d27c5ab71a1e27f665b0e7ceb6d"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2d67bd4288e4bd2060b958e085e1d1ce"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "40981dfdc836c512b37b67168aec9c73"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "ebf1d30f57e97c120b626ee51d0e87ef"
  },
  {
    "url": "courses/index.html",
    "revision": "fb720fa1f733c03facdb958c825e6bd4"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "ba2509e520a311a28078aeb69342ea02"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "7e195feca56902fb585a95df31cd68f7"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "51e070968c853325a4701f4ecedc68f2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "9f90a1c625e59fb2bb258c5c30cb97ea"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "2b706fd638e160c464b7fc26a3a3e40a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "ecd654e1c2edcc9642fe7fa134858e22"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "277b56919478f7389b13d4513525e06d"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "66654880fb9a2c3c28470c1f1d3e5548"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "3d38f8bb350d847472bea8e53573e1df"
  },
  {
    "url": "index.html",
    "revision": "0d7fe9822a7b26ec11db889eb80bf150"
  },
  {
    "url": "studyathome/about.html",
    "revision": "bf2db5b36f7dd442c76883dec6500cef"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2f1ecc3586c86ee5e778777a29cef5f4"
  },
  {
    "url": "studyathome/help.html",
    "revision": "db56c440b13284c8856dbb39f8aeaa28"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "9e61d46dfdc55e554044dcaabe8f0466"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "26da476830887f51654d25bf3d5cf0ce"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "b36607708da42c780c097c59f6037e86"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "b3966336d27c6c150ed26b69472575b8"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "53a85ae38a43343e03bb184e1a1545c0"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "110e204a1268dc66d7e746f3acdc8244"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "be8791f5b637bd091f0058154059aab7"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "6527812cee7ae89eb6eda4d973e7bb29"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "dc64b23ee00e88656a6af35e51cb3e3c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "b8ef09e41c6babc4a3f08830f95ce092"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "c933e2bcde7eef860b8e450f5c63e948"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "26da476830887f51654d25bf3d5cf0ce"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "6939298ae0cd53939e1a1161db372ee7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "41d0248400be135ea033033f8dc83a47"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "d8990211e48e1af91fbb45d8ad8a64ed"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "45e4d0ccbf5befa7bb22811d9a2bdfe5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "11811ddc82f10928aba88edcea5ea165"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "3788bd4576c9a1e8766c090ced07e690"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "e7716da5204b772c697328369076b343"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "38a51e4fd60ffcac6368e64a69a74cc3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "6010e32475c5b63d9ac7bc361fea91a6"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "63143f54d402b59f952e71a86e64a594"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "7779035ba3b46a1e4bb3672f6f2f8ce4"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "7babcc7a01479a16542057c9776e485a"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "f8413143f26a4c94234b4c3792e6cada"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "e4546b9523776a156edbb403a2bd4b7a"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "326cecdbca4cb6d03d1e4f2624c86155"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "c92ed57f4baae2b0bfc891c0541d7b01"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "2a31654e32fa55c60a7250115e4d4919"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "70786a9b1d5eb474fae5dac6e376ce73"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "200e0f01d1e5047cec3101e6b9d4b3e4"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "b35d5b4b2e49dee2d9ca92f70ec8d581"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "74c3cf758eb30935be4f1efc06c55405"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "514b2d40557aeab0f1f64b37dde3ba49"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "7acbdbc293dab986f517d2b03da9b837"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "3f96c7f718e8b3c46c26889b9ccf3338"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "0365cd254037298504f6b19b0ba4e411"
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
