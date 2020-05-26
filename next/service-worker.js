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
    "revision": "99764b4b1b1ea8e7173a0c734dd9c8d6"
  },
  {
    "url": "assets/css/0.styles.6589f442.css",
    "revision": "7ff1c26bbf9a4b0169cfe6a499f82369"
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
    "url": "assets/js/1.d92193d1.js",
    "revision": "19190d2e0076bbbb3529d1ac57bfbf76"
  },
  {
    "url": "assets/js/10.684abf33.js",
    "revision": "8ed90fbf439225a89fca14701fe6f446"
  },
  {
    "url": "assets/js/11.3dbd123f.js",
    "revision": "5998d9623cb74f74b1092714577dc48d"
  },
  {
    "url": "assets/js/12.22849823.js",
    "revision": "c7c31907ed7dd22151a552da6af16585"
  },
  {
    "url": "assets/js/13.88a448d6.js",
    "revision": "1bf78e0f52c7a1cb1b2a6e485b52abf7"
  },
  {
    "url": "assets/js/14.04eae669.js",
    "revision": "cf5fc086169d2fc1f78388eebbbac4f9"
  },
  {
    "url": "assets/js/15.ca6596a1.js",
    "revision": "21048aa83323f8348ba04b99018eca29"
  },
  {
    "url": "assets/js/16.9740de42.js",
    "revision": "850dbdc472369670184454df6c32a455"
  },
  {
    "url": "assets/js/17.ab88a1e8.js",
    "revision": "9572695e9125afd64ebd43da0cb91420"
  },
  {
    "url": "assets/js/18.08e8be22.js",
    "revision": "dddc1cdc0d6ddbdbdea3af564900b585"
  },
  {
    "url": "assets/js/19.cff32919.js",
    "revision": "0a7e5337085ccb8fbdc0f612b9c89e16"
  },
  {
    "url": "assets/js/2.b4a58311.js",
    "revision": "eb55687c660f9b875ae239bbbb30bbb6"
  },
  {
    "url": "assets/js/20.7b6537e4.js",
    "revision": "ebba7bfd5b5c89412fd3b46b5cf83610"
  },
  {
    "url": "assets/js/21.798571ac.js",
    "revision": "638af2e2326a8f8f4789c4c02051ac4c"
  },
  {
    "url": "assets/js/22.19431020.js",
    "revision": "bd86557c0535fa07a7e574bb1f0c7e3a"
  },
  {
    "url": "assets/js/23.39f475d0.js",
    "revision": "43222f285228523c102c042fb8eddd53"
  },
  {
    "url": "assets/js/24.d91e99ff.js",
    "revision": "9bbab52c64c3b48ad40c8a93105cea58"
  },
  {
    "url": "assets/js/25.2135ea4f.js",
    "revision": "2a2bd027421b46e423a133bb2f2509a7"
  },
  {
    "url": "assets/js/26.b33f818f.js",
    "revision": "802b84f1150e184c4fe5a9c1991e25ea"
  },
  {
    "url": "assets/js/27.49c2b47f.js",
    "revision": "dda4220496dd2a74ed6da93c7dc99178"
  },
  {
    "url": "assets/js/28.d6faadc0.js",
    "revision": "e8271a84cc825b8adc9e18193fb405ea"
  },
  {
    "url": "assets/js/29.54161430.js",
    "revision": "e60426d23aad2733ff0db4b52232a73f"
  },
  {
    "url": "assets/js/30.0e6ff156.js",
    "revision": "e3829fd6f5271864be03f8afceb449c5"
  },
  {
    "url": "assets/js/31.b9147187.js",
    "revision": "36284bf664a8b82d80b92c0b65908f3c"
  },
  {
    "url": "assets/js/32.364d07d7.js",
    "revision": "59b03c4ab2f9a68f58c58a29c25281a6"
  },
  {
    "url": "assets/js/33.b791cd29.js",
    "revision": "ccb790b1cdbe81bc887cf2f183b5f83a"
  },
  {
    "url": "assets/js/34.27237b90.js",
    "revision": "92f35c7b8bad71b2cb31509d12715bcf"
  },
  {
    "url": "assets/js/35.5711a9a8.js",
    "revision": "8ca5b7d78da8cce5e95c5de054aa1cfa"
  },
  {
    "url": "assets/js/36.5b681e05.js",
    "revision": "055d15c9c8e7b2d2da5cbd6e3c851712"
  },
  {
    "url": "assets/js/37.717b6bba.js",
    "revision": "21760eb91a1551a63dd1d2e1832a8bdc"
  },
  {
    "url": "assets/js/38.e6afca98.js",
    "revision": "baa8dd3acecf073940d87a1a8ef9a1fb"
  },
  {
    "url": "assets/js/39.27ae8826.js",
    "revision": "a94db6e9d4a59792c93803e5fa40cc6b"
  },
  {
    "url": "assets/js/4.5df2b094.js",
    "revision": "592415592202e7cd67b219c75f166ce7"
  },
  {
    "url": "assets/js/40.4533851f.js",
    "revision": "cc51764128a69450a833b785bdebb167"
  },
  {
    "url": "assets/js/41.36f5cfc1.js",
    "revision": "516c22eee1e1ac654d06c0fd1a6e42a6"
  },
  {
    "url": "assets/js/42.d2027515.js",
    "revision": "d3bdf5c97369e8d5bcc6a7a57364add2"
  },
  {
    "url": "assets/js/43.3758982e.js",
    "revision": "bd9f032286f1a165fbf8564654efd8bb"
  },
  {
    "url": "assets/js/44.760a0ebb.js",
    "revision": "ea2c6a875e0641595835b7394d4d690e"
  },
  {
    "url": "assets/js/45.37cf1bb1.js",
    "revision": "098f98229c79d70aab01ad654de4a23a"
  },
  {
    "url": "assets/js/46.7faeb2ed.js",
    "revision": "c21adaa2c8a6783822e266dc1814a36c"
  },
  {
    "url": "assets/js/47.0576531f.js",
    "revision": "d447758bcb2c2356627f64b2449dc15b"
  },
  {
    "url": "assets/js/48.f1dd1130.js",
    "revision": "cd486e06de205420f125c47b0ff07d5a"
  },
  {
    "url": "assets/js/49.740c2d95.js",
    "revision": "87a7d7f79b2f9ba9e401cb11aa78cc99"
  },
  {
    "url": "assets/js/5.32eb1131.js",
    "revision": "a9458ff22be6dd0c2363d7e7ad0895f9"
  },
  {
    "url": "assets/js/50.27e4c4d7.js",
    "revision": "36a6bd45758bc8ecaa096d84efc269cc"
  },
  {
    "url": "assets/js/51.e73a843f.js",
    "revision": "9564afd7d68af9a7dfb1d854c2209f73"
  },
  {
    "url": "assets/js/52.c44773ed.js",
    "revision": "c58822fd7ea3f276f73b7cbb7a1f0856"
  },
  {
    "url": "assets/js/53.7527d75e.js",
    "revision": "4b2300aea9d7146ca67c1557ec8aa0f1"
  },
  {
    "url": "assets/js/54.96f70264.js",
    "revision": "7651c420ba0cfef0f3b2022617ee76ac"
  },
  {
    "url": "assets/js/55.7a26cf28.js",
    "revision": "d1b752987242dfd52be931616eb0cb60"
  },
  {
    "url": "assets/js/56.22e6cd78.js",
    "revision": "81d25f9c509e6df0a6c3bccd8e0edd5b"
  },
  {
    "url": "assets/js/57.ede17289.js",
    "revision": "cd62d069d3988bdef4891e776cd541b8"
  },
  {
    "url": "assets/js/58.4731c641.js",
    "revision": "14aac80f103820d85e00fd7e5715bd6f"
  },
  {
    "url": "assets/js/59.fdfb005f.js",
    "revision": "56169cb02dea90f808e68b43d7cbb825"
  },
  {
    "url": "assets/js/6.e2ec9e67.js",
    "revision": "65e75d54af760d5db93be50f1e91dbf6"
  },
  {
    "url": "assets/js/60.ed08b728.js",
    "revision": "8b0973a708740eaac78437b85d8dec30"
  },
  {
    "url": "assets/js/61.1595465a.js",
    "revision": "a2cf735098f1e049753a63e273102978"
  },
  {
    "url": "assets/js/62.6237a0bd.js",
    "revision": "a4f6f605a44d23f4994b9d9fe97bf881"
  },
  {
    "url": "assets/js/63.116a1ef8.js",
    "revision": "56b691d2a9a2bf054f48f508f4f42e36"
  },
  {
    "url": "assets/js/64.733538f2.js",
    "revision": "8522cdb6cb4b91668b150cc181908edb"
  },
  {
    "url": "assets/js/65.28d8ab5d.js",
    "revision": "d6ed98b88956ce3423f8670329bb9102"
  },
  {
    "url": "assets/js/66.9430a37f.js",
    "revision": "5bbedc784cd4c1a9f0cdb8a128b9e131"
  },
  {
    "url": "assets/js/67.84b8778c.js",
    "revision": "4e02878159b0c2282200d7b2bbabc794"
  },
  {
    "url": "assets/js/68.0b5785f3.js",
    "revision": "d96d4812743bc05a8405bd35586d733e"
  },
  {
    "url": "assets/js/69.58b99f55.js",
    "revision": "dd97f1e2b83f826a237ac313deffb46a"
  },
  {
    "url": "assets/js/7.93603dc6.js",
    "revision": "2c49ec318eb1ff459b8acf52bda9c080"
  },
  {
    "url": "assets/js/70.b64ddf44.js",
    "revision": "b7f47fb15888a2d7a67d1bcd16610cc7"
  },
  {
    "url": "assets/js/71.b27beb1c.js",
    "revision": "9bd5b0fc510d20978b5402a54315b7bc"
  },
  {
    "url": "assets/js/72.0a815390.js",
    "revision": "e2c7bf74c33e3ba312ba78a2b90b789b"
  },
  {
    "url": "assets/js/73.62530dc5.js",
    "revision": "ffb0f0a5189cc2f56a2bec3bf331d6af"
  },
  {
    "url": "assets/js/74.f4820564.js",
    "revision": "da93a6604be9e396dfef6c47970dd991"
  },
  {
    "url": "assets/js/75.c0a06048.js",
    "revision": "d116ae3a885b306aba1b24057a220b73"
  },
  {
    "url": "assets/js/76.403a746b.js",
    "revision": "d1eecbc84cfb6ca793b168d257890ee9"
  },
  {
    "url": "assets/js/77.2ced34bd.js",
    "revision": "68448bc64f6bb499dee20ac7638a9a55"
  },
  {
    "url": "assets/js/8.4d99fd52.js",
    "revision": "be4f0f8999193befdef3d442cd09c2ed"
  },
  {
    "url": "assets/js/9.d13ff141.js",
    "revision": "84787ab3da89600fcfb913d51f0ca6b8"
  },
  {
    "url": "assets/js/app.34202d92.js",
    "revision": "1ec52e54efefc8d0e4b2b16bf32a93b0"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "9857add71946c2547a0f49195c20aa04"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "01ca1ae7af2d609ed3403ce91d28458f"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "fb49aa258bca0bf1b4d5c29f3d5daffa"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "2257398f51a3a284a8425cc35150360f"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8aac4a119f265e1e017507b66d62e2d2"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "52f517b7e7ab36596f336277e064d929"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2dc5f66c45fca9139e52f247ed501b14"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "c44935e7a35b3527bf7804d240026a24"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "bb7380e528b2b0904ce06673f2631327"
  },
  {
    "url": "courses/index.html",
    "revision": "3cf766d52f3f0a2d04ddd4d6429c67d6"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1be4fc63c92b8095b6e799dc31a89b24"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "fc41bee0ffed6255e4c4677895066257"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "603a9e9ef639f040cec392b143026040"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2f66e0d7eda6a980c7d2a1c560959d2d"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f0d20a4bbc2d24ab08ff8280d73134a5"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "55c61ef4451a74ff24f836e4e1cf5947"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "67f63086d9a2b595cb0900000ebb5d3e"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "e40784e35522d5aff09ae1a1c7c92973"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "e49379dafb460142b39909a214d06299"
  },
  {
    "url": "index.html",
    "revision": "de59a89305176ab181229ccde64013e9"
  },
  {
    "url": "studyathome/about.html",
    "revision": "ffb8779ab859945bcff6f7a26b306181"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "1b924ef27c4e8035859841d337bc371e"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "f5676e5cf39605c97253fb4e5274b9f5"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "4c3770072207c03003ea2b9159eb21aa"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "5acba88d9aceea30529ba894b8025398"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "68b244ac0e0318a3768531bae149a959"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "b2f92983ec0d9b8892a8eb16688fd214"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "a25a66b57544caf19783a0858627dcfa"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "8729ee0dca2e46dd318339fa8f3e75eb"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "5acba88d9aceea30529ba894b8025398"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "65a54c6f9a35f2916b137f58ed4fe6d7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "f852a5760519cb18fad6145b0c48d838"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "ca20745765c201ddd97dcd4564480256"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "52faf451b9329cb4f7fc9625cca11611"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "5acba88d9aceea30529ba894b8025398"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "2c35faf34092a07809d0612d4bad74e6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "5fc864dc30e4748378db3a2d0f223666"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "522f8f5fc35c7441f1672b966e026e63"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "3d5edf34bb376d2c36ac7a59869ad15b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "4902d41e5f1f73412731e6df9be859e6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "1023f5001d8facd592757bff0c3009f3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "29c70ec5013551c6c71b4e4cb62e7abf"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "5683c2e0661ad6a6f82498964244696b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "b7d588acad5d7f86f979fb59eaaf8f51"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "99764b4b1b1ea8e7173a0c734dd9c8d6"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "0ec7318f93c10221504da2c36d7707e1"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "cd924095bd2d4864c8b2dd9fb7251a5b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "395ba5641cf6042a3627bf735ee5acb6"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "7745c72eb976c350b1ffd7a2990a63b7"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d5e110f74945819d67416380f67be300"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "3274aa5549abcd080cfa7f81226a0124"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "d2498cbf836329e3a670c031360e4918"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "acd09aeb987d459e28054a9cb5f93199"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "328cd6c680d9d791f7877b1b197ebc32"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "b44afa66fb44955545b9bc6b6f02d947"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "4fc1442d926d7be71b3b5570eb0a246b"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "7097cb88314b5e8f2e403cc9a3f03928"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5169c912ec6e00dc11448dd4dc2b359d"
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
