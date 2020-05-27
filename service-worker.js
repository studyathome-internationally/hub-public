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
    "revision": "214605ed2cb79154808c5e3abad7cdc9"
  },
  {
    "url": "assets/css/0.styles.1314bc05.css",
    "revision": "c9919e3dc32a079358b90f8d14f4b9fa"
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
    "url": "assets/img/logos/CV_MA23-orbit1_pos_web.svg",
    "revision": "9a3aa5fea8181a51c9a4480d76fb9b67"
  },
  {
    "url": "assets/img/logos/FH_Technikum_Wien_logo.svg",
    "revision": "df12fe4e70e7e86bdd139d5ab6aeee6a"
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
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.png",
    "revision": "eae203609d3c3919886fc040c87b3713"
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
    "url": "assets/img/partners.b0704e24.svg",
    "revision": "b0704e24490626da489fe50b459e3851"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-workflow-all-line-arrows-studyat-mobile.6fdf9210.svg",
    "revision": "6fdf9210987b7d13f4f04895aec17eeb"
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
    "url": "assets/js/1.869966bf.js",
    "revision": "08cf1cb0861a19db4ff709252b56df1a"
  },
  {
    "url": "assets/js/10.d7593df9.js",
    "revision": "d0041fb2babaa9689caadd3ef166096e"
  },
  {
    "url": "assets/js/11.f73b856e.js",
    "revision": "d3a02094cdc1299a17e682a7e4b9f9bf"
  },
  {
    "url": "assets/js/12.f0868053.js",
    "revision": "7e45672dcb8aa727ed9dd7562fa6621c"
  },
  {
    "url": "assets/js/13.bb4aa712.js",
    "revision": "69017293fa4282993c04a0696814c4b0"
  },
  {
    "url": "assets/js/14.24988091.js",
    "revision": "3f95ae6daf959bc33ec5489cdea57876"
  },
  {
    "url": "assets/js/15.6db1d817.js",
    "revision": "553e94445ee45d48f7fcc9e0b114e71c"
  },
  {
    "url": "assets/js/16.e3d003d6.js",
    "revision": "dc1138a905c7767854bb00a53d08b603"
  },
  {
    "url": "assets/js/17.463cd6a4.js",
    "revision": "d1fc72ea9091a23e3dd1e1e8719573a2"
  },
  {
    "url": "assets/js/18.31239e70.js",
    "revision": "97c62e586fa7fed4cf60fc33ca675915"
  },
  {
    "url": "assets/js/19.5c59e349.js",
    "revision": "bbeacbce894edd1d3ea9b32972a1fc31"
  },
  {
    "url": "assets/js/2.8a4e4b29.js",
    "revision": "6ec10667e86540ebe062cdbb8b3b24f7"
  },
  {
    "url": "assets/js/20.02730908.js",
    "revision": "290e114628c4f8153c316a044f485dfa"
  },
  {
    "url": "assets/js/21.b273bd44.js",
    "revision": "0124833febf200d7faf8967d4ac648f4"
  },
  {
    "url": "assets/js/22.e3909f42.js",
    "revision": "0ab56bdb14571aac203c8343056d4166"
  },
  {
    "url": "assets/js/23.56b40a2c.js",
    "revision": "e1375a6f2df07cd0b2e08d8a5c10181a"
  },
  {
    "url": "assets/js/24.65a40566.js",
    "revision": "72f869ccab95c3042abf73b595c61874"
  },
  {
    "url": "assets/js/25.1b6229d5.js",
    "revision": "4f0693c652e4dad60403517c622f1369"
  },
  {
    "url": "assets/js/26.be92ee03.js",
    "revision": "60d2d02afec4b12fd5880a20c677250f"
  },
  {
    "url": "assets/js/27.020f3c42.js",
    "revision": "9943aa2d43736ef9d09cb942922df521"
  },
  {
    "url": "assets/js/28.e977233b.js",
    "revision": "c4beebee57bf55aa183f887d425e6fd0"
  },
  {
    "url": "assets/js/29.6b130702.js",
    "revision": "70e78ec4eb83d255e80bb8274c93b401"
  },
  {
    "url": "assets/js/30.5f1c27f2.js",
    "revision": "fa85f0d133c4ae5e20354d8e8f5b12ef"
  },
  {
    "url": "assets/js/31.7652d91f.js",
    "revision": "ddc7160a5826d1cdafc73631b26b8ef8"
  },
  {
    "url": "assets/js/32.e56fc7a2.js",
    "revision": "f01f41741fb0a024310918388ddaaeab"
  },
  {
    "url": "assets/js/33.fdaf70c0.js",
    "revision": "48e12a5b668e50738960aa084c0b41c2"
  },
  {
    "url": "assets/js/34.4b9a9b3e.js",
    "revision": "486e349e07a726c25a1f1d4f8e8f65e6"
  },
  {
    "url": "assets/js/35.e84510e0.js",
    "revision": "26b32639945fda51fcf8574557893bd6"
  },
  {
    "url": "assets/js/36.4ddb02ac.js",
    "revision": "2d1c36ad7d5259acb752592e67c5b2ce"
  },
  {
    "url": "assets/js/37.da9964ec.js",
    "revision": "360e01fb8caee43c4b54ed7e14735d21"
  },
  {
    "url": "assets/js/38.66316060.js",
    "revision": "b30c82681f0b7cbb4a3b1025f572951a"
  },
  {
    "url": "assets/js/39.63710a65.js",
    "revision": "e168efa7ddc41b317119821034e91a4c"
  },
  {
    "url": "assets/js/4.6886351a.js",
    "revision": "c2eccb8db4a91063b0f688631e510ba8"
  },
  {
    "url": "assets/js/40.c81e0ff3.js",
    "revision": "734301e1d4e7a7e4a5a2a796c0f6aeea"
  },
  {
    "url": "assets/js/41.70eb52f8.js",
    "revision": "468928c1aec2be154ea1c58620d591fb"
  },
  {
    "url": "assets/js/42.cf48e346.js",
    "revision": "b71b6e63cacad7c9df6a5dcb3adc919f"
  },
  {
    "url": "assets/js/43.554411f6.js",
    "revision": "035da7112f4a87cdfb8950c0cf72e1d0"
  },
  {
    "url": "assets/js/44.830800c3.js",
    "revision": "69df1c00ba3c8125a5303fb2a8eb96fd"
  },
  {
    "url": "assets/js/45.3dc5e5f5.js",
    "revision": "a3514f23a605425044ef8e6277ac937f"
  },
  {
    "url": "assets/js/46.c78a4ad1.js",
    "revision": "f239341a19b5eb555002ead819d5d395"
  },
  {
    "url": "assets/js/47.817e9fb4.js",
    "revision": "ec60b4cd372cff36d0c300353183d5b5"
  },
  {
    "url": "assets/js/48.36ac3592.js",
    "revision": "81f01f733635bf5e671cbb8bc00596ff"
  },
  {
    "url": "assets/js/49.a7309b24.js",
    "revision": "81211e46df2dbb1a8cd01471b712856e"
  },
  {
    "url": "assets/js/5.45bb5a0f.js",
    "revision": "91c3808b453229e80ca7a28252bfa36c"
  },
  {
    "url": "assets/js/50.af7051f5.js",
    "revision": "8f213c0e9b23aad082a31193b55947aa"
  },
  {
    "url": "assets/js/51.52135322.js",
    "revision": "c852a6e3ffdc81686c41f33f9779da79"
  },
  {
    "url": "assets/js/52.c952c3e2.js",
    "revision": "9677f930c8d045375a5e6af23a8290ea"
  },
  {
    "url": "assets/js/53.965b53de.js",
    "revision": "9d07667a5f330908c95aa2e25a3ac7b4"
  },
  {
    "url": "assets/js/54.cd0f2e89.js",
    "revision": "8c7d427384fe23d99cffddbacc49eb01"
  },
  {
    "url": "assets/js/55.2a6c4903.js",
    "revision": "a473d551f9612903c69e2ed0e0911182"
  },
  {
    "url": "assets/js/56.ce268747.js",
    "revision": "39558b09126fdca7586e3d2e9037c267"
  },
  {
    "url": "assets/js/57.a8a12856.js",
    "revision": "68fbf2591bb7b79a969cccc4c6dedf7d"
  },
  {
    "url": "assets/js/58.5036c1d4.js",
    "revision": "234dc0b94835ec94827006917276fc51"
  },
  {
    "url": "assets/js/59.afb571c5.js",
    "revision": "c462068b1fb5711d869b28e3784363aa"
  },
  {
    "url": "assets/js/6.677386cf.js",
    "revision": "df7331aabf6e609776b4ffe50d087e55"
  },
  {
    "url": "assets/js/60.1d729a10.js",
    "revision": "f1adfd8bd77b9355f02a1126cc2fe6e7"
  },
  {
    "url": "assets/js/61.df68e53a.js",
    "revision": "653f06a87683b90fde563f0cc9a2254e"
  },
  {
    "url": "assets/js/62.81071317.js",
    "revision": "95c83f30d63c82affe301f33ee680010"
  },
  {
    "url": "assets/js/63.e71d69ce.js",
    "revision": "a466a57d8a2c63adcdd7c0c992312b47"
  },
  {
    "url": "assets/js/64.47d6df5d.js",
    "revision": "05cd91acc235a22dfc75adf32520444a"
  },
  {
    "url": "assets/js/65.8f101ca6.js",
    "revision": "3fd6093f4c1505a6f4c143cfbd218be8"
  },
  {
    "url": "assets/js/66.ae6c780e.js",
    "revision": "9ef6ac785b1ffc14e9f43e65ad2074f7"
  },
  {
    "url": "assets/js/67.4ee4b0e3.js",
    "revision": "5ff6a26a69fc7096be244cc7fdc57385"
  },
  {
    "url": "assets/js/68.dda005b4.js",
    "revision": "4c6947403329bd008fcecefd4a724ffc"
  },
  {
    "url": "assets/js/69.65f7aa07.js",
    "revision": "58ec90af0cfd762c88415f71b8590df1"
  },
  {
    "url": "assets/js/7.52352915.js",
    "revision": "721c40127a9b7dc806145deaeb155067"
  },
  {
    "url": "assets/js/70.ac3e2de3.js",
    "revision": "1c4054d60d3d2a02fc76b89b2db4fb40"
  },
  {
    "url": "assets/js/71.3c1219cd.js",
    "revision": "35634af4111b6ea8955d5d45887b8cd1"
  },
  {
    "url": "assets/js/72.be6d20d3.js",
    "revision": "de02bbeea957d96e879278a7e6f23eba"
  },
  {
    "url": "assets/js/73.3673cfcb.js",
    "revision": "5589fcbbe0d70903c7f953b7893c5584"
  },
  {
    "url": "assets/js/74.e603b915.js",
    "revision": "1c98866dd4c6e65c0bfc663668d0388c"
  },
  {
    "url": "assets/js/75.0c634afc.js",
    "revision": "714187890604c815596ecd3dc390f17c"
  },
  {
    "url": "assets/js/76.4849496b.js",
    "revision": "b48a09db3caed4d47c68f850d674a4d5"
  },
  {
    "url": "assets/js/8.b199a32a.js",
    "revision": "d45b3440f6a9651754be3e45cfe8739b"
  },
  {
    "url": "assets/js/9.f3976db5.js",
    "revision": "1aa3b36d3c8d94e8d189db7c2bce4b37"
  },
  {
    "url": "assets/js/app.5e2496f8.js",
    "revision": "eb150c1493c195e8b0f7aea05a347b78"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "2063e7088c86e9820a6d50695c6adeb8"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "1d30884d006a33be8a5666fb80dd4173"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "69570a606b696ce44eac142839f4882b"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "06100fe1fb81673672c9a7f8580ebe5e"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "3a4663b7909d7930fbf8a7eb6b777a8d"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "c5323d2f7fbb0f018e969ec9a4d1df75"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "dea69e1c1051a3db21cf02d1c0eb50de"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "549938a780043c48f55f1f59ff887c9e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "8e50331357ee17c4b176232326974815"
  },
  {
    "url": "courses/index.html",
    "revision": "3f1d9090bd862b746b5e5d0a81415019"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "08a9499b93c71afaaec0343af5f8a090"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "919ecf3aa4c4fb65dcb4dfe0eb525a9d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "7d3623f8292c026164263bcd02c54ad4"
  },
  {
    "url": "courses/template/index.html",
    "revision": "871414aacaef41c1feb2cfa71de03725"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c439b0c2212ef841f43516320e54ce2b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "0f5cf50ebda13aa2f1b195b308516027"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "4c7cb37cdf936e9007a046343fe0771d"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "64809d60de1e1a256a60ba6a3f32f7a4"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "fa7a903ad7d9b9c99ba4a5679d4fe6f3"
  },
  {
    "url": "index.html",
    "revision": "6ef235ce16a55a254ce55aeabe7368e1"
  },
  {
    "url": "studyathome/about.html",
    "revision": "419892b46844ffdfa16227d28e4f7c0f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "cfe20149998e63a7aec1cbbbc4698798"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "1dcf736337a7cb034664fd0bf1471af5"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "0c734775f390c49460430ca6fca71436"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "87b9e18c4af6a1b56a80dae26d18cc1d"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "59e9b4129aba19c7b0497ca0038a7613"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "bcd208802d3e2e758644dad2bd4d30ed"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "cb81c540b8a6c9e864ee33e9cbb8a2e1"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "2d3dcad8bb89ae569d4dafb1d7f7c738"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "175917a385a7c8f5c184be5e648be640"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "67bf764da4d94816f4f28d301815009b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "e9ee5602fe1e3a0e8116d75f5cdbe3f4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "8a69e6903d5d624affc2080eb9548537"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "92d3127d9d0a4dcc7c362c292b84e2cc"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "87b9e18c4af6a1b56a80dae26d18cc1d"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "7360ac99f6eb9d8ded703d81adb57346"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "9f224903b6f437e2bbd993aae68f3cc1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "1c23def30e14f6d46cf28b0b9fad91f7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "67c043a15fb20da0eda97184327103d1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "86700a0071bf87856c68f26b39d12d8f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "e263714e5894d899c3ec8c4b8e5113a3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "5778c1b21b699e9e56bbc88d5b47ca44"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "077ee987fd1acf3ec77f03fbe8a52c08"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "2978acacff68fab14e309978dc50955f"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "95ffc084474e967d6091f3883aa6bfe6"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "54a3eaf0a8248cce7f1989d7529c7074"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "cd185d15e78e52eb0432c182bd2c09a2"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "45278aa7080ee76ef2a52343d6e9268b"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "46f225adf28396cb3847604f1dae07d7"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "c21c9639975edd278704de8f7fe5c057"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "dfe03a5a579a2b75aaaa275dc409a9dd"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c512295ccd34aee7e79d3f0ca38b3f63"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "568185fbfb2839965c4b25acf10a7da8"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "4abd3ca31a8a13727e6df87850420a17"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "f451cfbb901ee9b569fb3e5132b615fa"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "005a6ce4bac33d2111373a472eb397c9"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "71c446dc0fca301d1062dce01687a11e"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "d8d466aa4985ecf4732f9cf0335f7c8d"
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
