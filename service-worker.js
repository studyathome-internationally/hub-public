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
    "revision": "28fb96b78137efd6cdd823aa07db4e45"
  },
  {
    "url": "assets/css/0.styles.5a1c49f0.css",
    "revision": "d9f436e4291ec7d430fdb175d472c36d"
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
    "url": "assets/img/raspberry-pi-3.c0dce8df.png",
    "revision": "c0dce8dff58a8c8687fb7738504d4816"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sensehat.6c49ffb3.png",
    "revision": "6c49ffb3476d90f0870b26328de81f6d"
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
    "url": "assets/img/talk-1.ddfd561b.jpg",
    "revision": "ddfd561bffad36492f7865c609b363eb"
  },
  {
    "url": "assets/img/topic-5.540dffee.png",
    "revision": "540dffee86c073d270740047dbc22706"
  },
  {
    "url": "assets/img/topic-7.6dd8105a.png",
    "revision": "6dd8105a2f5760d1c8eade3894ebac40"
  },
  {
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.be2f1163.js",
    "revision": "c4c999de7a89cc2b8083304f443245ba"
  },
  {
    "url": "assets/js/10.f70cf00e.js",
    "revision": "0d39d94a2a21c780ae7721ebe22a2296"
  },
  {
    "url": "assets/js/11.f439492c.js",
    "revision": "a9d0dabee3136b02b127261a126ae6c5"
  },
  {
    "url": "assets/js/12.984946b8.js",
    "revision": "c561c918a18e291c726dbc03f35dcee9"
  },
  {
    "url": "assets/js/13.44944120.js",
    "revision": "b9a6e2e97dbe174dc90e3aff0b9ac6c8"
  },
  {
    "url": "assets/js/14.6426c72c.js",
    "revision": "fc25a011b05335c4cb845c71609888bd"
  },
  {
    "url": "assets/js/15.3496c42b.js",
    "revision": "fbddeb85d876a7398a0a28af950ff045"
  },
  {
    "url": "assets/js/16.3f158e63.js",
    "revision": "ca7dcaeb99d64e04af69c091d6e05506"
  },
  {
    "url": "assets/js/17.96b2b294.js",
    "revision": "b47c9439ba77e2dc4992a49cc70225cd"
  },
  {
    "url": "assets/js/18.0bde2ce6.js",
    "revision": "9ee7ce51b0abd709bef1771106247d42"
  },
  {
    "url": "assets/js/19.63eaa215.js",
    "revision": "f10a1d4adce6dcb04eea6180e23faf0c"
  },
  {
    "url": "assets/js/2.b0dece26.js",
    "revision": "450c2197a3fe98d0a3dd39f4225f1243"
  },
  {
    "url": "assets/js/20.ff5699de.js",
    "revision": "868b8ff3a692f3989eb103f92f083e18"
  },
  {
    "url": "assets/js/21.d079ad20.js",
    "revision": "4a75ce8ff63ad5dabfc5133f248bf383"
  },
  {
    "url": "assets/js/22.a3d847aa.js",
    "revision": "536b6e4687fd3704040bd60f52879b59"
  },
  {
    "url": "assets/js/23.9d81df40.js",
    "revision": "d2d4171dc0fa96e07d5f6a002d224342"
  },
  {
    "url": "assets/js/24.1bdd9087.js",
    "revision": "d480b7a17e124920d61c02c5e28a4947"
  },
  {
    "url": "assets/js/25.bd7a4ff8.js",
    "revision": "18f81a3b8eba532933bbac8946cfc26f"
  },
  {
    "url": "assets/js/26.2a23887c.js",
    "revision": "99e8d26027a8ad119c8957d84dc56765"
  },
  {
    "url": "assets/js/27.f4f5acb6.js",
    "revision": "5f973c8778267e0e637953c3853bb400"
  },
  {
    "url": "assets/js/28.cbbc446c.js",
    "revision": "6118786f056ea406895e73fc1e0d2b01"
  },
  {
    "url": "assets/js/29.f60113ad.js",
    "revision": "5a1ee4975c2fcf781a3410eb81884865"
  },
  {
    "url": "assets/js/30.a2d52c2d.js",
    "revision": "a2b2e40a535d7034aa4c8ad1ecf87fd2"
  },
  {
    "url": "assets/js/31.f00277da.js",
    "revision": "7bc1d0a4cf84354b841770e6a2a5fe80"
  },
  {
    "url": "assets/js/32.fc4fc8a5.js",
    "revision": "bda1f6ac5de8cf296dd1f6f004643ffe"
  },
  {
    "url": "assets/js/33.20460910.js",
    "revision": "79504f6cbcad231d8d0194e978e06709"
  },
  {
    "url": "assets/js/34.5ecfbafa.js",
    "revision": "5c2d3c85f7c1e68c924f5cf53abb7778"
  },
  {
    "url": "assets/js/35.f73a5b3a.js",
    "revision": "a27c27da4032af8e18fcc56245832017"
  },
  {
    "url": "assets/js/36.8ed30f2d.js",
    "revision": "613e6a71a40f59256d16a01961b0ced9"
  },
  {
    "url": "assets/js/37.e48c4ad0.js",
    "revision": "03b8a035574536e1b2223bac491dacbf"
  },
  {
    "url": "assets/js/38.ef358b2c.js",
    "revision": "4c265f5a7970098bdda283cf233118e2"
  },
  {
    "url": "assets/js/39.59b6592d.js",
    "revision": "786d60ebc89e9459c25ea83b392f94f6"
  },
  {
    "url": "assets/js/4.93fec7c5.js",
    "revision": "a7b6e730e4b27cb9bbb254b344975c71"
  },
  {
    "url": "assets/js/40.797be883.js",
    "revision": "6f63818c52947a8764d447bba5df070c"
  },
  {
    "url": "assets/js/41.a8851128.js",
    "revision": "566fd34fc73c852213aa599836fe6e52"
  },
  {
    "url": "assets/js/42.27317b62.js",
    "revision": "4ac63c40c902a1ad59fd857a9231a927"
  },
  {
    "url": "assets/js/43.cce37355.js",
    "revision": "2e68997b2a3650f2448de5a77bf652c1"
  },
  {
    "url": "assets/js/44.b1e13cd2.js",
    "revision": "f774384369ca4ec9509c37b08f19b5d1"
  },
  {
    "url": "assets/js/45.033f0000.js",
    "revision": "54bbcd681964bb8eb60cf494f47d983f"
  },
  {
    "url": "assets/js/46.9a988759.js",
    "revision": "09784234f1850dbd90cc051660238bb6"
  },
  {
    "url": "assets/js/47.c0360669.js",
    "revision": "9dd5875b50fd587522af3f5c1d389766"
  },
  {
    "url": "assets/js/48.8730156c.js",
    "revision": "79cbd12f218b2efd407684b2692f435a"
  },
  {
    "url": "assets/js/49.5e802c0f.js",
    "revision": "f07b833db4c9417223e89df8fd969c37"
  },
  {
    "url": "assets/js/5.dbf1faab.js",
    "revision": "d335ff5cfb853c1f0c50828af35f6d85"
  },
  {
    "url": "assets/js/50.ef50cf71.js",
    "revision": "ce61c9edfa7174848a98758881d50b4e"
  },
  {
    "url": "assets/js/51.c11bff15.js",
    "revision": "e477ed38934da708dd591eed21f74a94"
  },
  {
    "url": "assets/js/52.d1c72e84.js",
    "revision": "55fc0424aa0993787b5946e6c5df2faa"
  },
  {
    "url": "assets/js/53.b66c0e06.js",
    "revision": "7109bdb397d94e0edd06cc96c189296a"
  },
  {
    "url": "assets/js/54.e0eb4cfc.js",
    "revision": "e18b3e95b42a7b9258842072db9c683c"
  },
  {
    "url": "assets/js/55.5611292b.js",
    "revision": "1312cee3787506f8e046165d7c4ef74d"
  },
  {
    "url": "assets/js/56.038325a2.js",
    "revision": "8085b5e3cb427043220b817226aa7a92"
  },
  {
    "url": "assets/js/57.342ad534.js",
    "revision": "79512d19bf856c0a3493dfd4a0d2eb17"
  },
  {
    "url": "assets/js/58.7fd35abc.js",
    "revision": "1d061d8d3a3a63cff4beade9f99cc657"
  },
  {
    "url": "assets/js/59.8ac79bbb.js",
    "revision": "788034dbd8dac1704182024007e82909"
  },
  {
    "url": "assets/js/6.dddbb35d.js",
    "revision": "0ec856fb0b20a98018038653df378336"
  },
  {
    "url": "assets/js/60.dedf8534.js",
    "revision": "e8612123db2f5c4306806c70cbe41001"
  },
  {
    "url": "assets/js/61.440769c3.js",
    "revision": "d357597cd0e39484bdd637ad80323a0e"
  },
  {
    "url": "assets/js/62.9d54d02c.js",
    "revision": "8866bcd54894aac1bb5c686109aa5754"
  },
  {
    "url": "assets/js/63.940ad0e4.js",
    "revision": "30e7183313b396de41e8504ed39d6042"
  },
  {
    "url": "assets/js/64.f1505026.js",
    "revision": "d8485ed26ce590ab2449ca18570f7a34"
  },
  {
    "url": "assets/js/65.bd336e91.js",
    "revision": "dca389a4b2dd33633f4cc0643ad8405c"
  },
  {
    "url": "assets/js/66.f686871d.js",
    "revision": "3d4e6f94ec00f547adb3f755c8714f2a"
  },
  {
    "url": "assets/js/67.7d522e5a.js",
    "revision": "4637cfc22d4daa6c5b14fbb67d736a8e"
  },
  {
    "url": "assets/js/68.bb5d82f1.js",
    "revision": "fe01626497f351db80f25398b34d647f"
  },
  {
    "url": "assets/js/69.56821086.js",
    "revision": "88e80654ec2d474de9d2fbfb56351c20"
  },
  {
    "url": "assets/js/7.30508171.js",
    "revision": "3de7c285f454c42dc8dd6fa1afed06fd"
  },
  {
    "url": "assets/js/70.25d25964.js",
    "revision": "f6b9147a75325b91d0d5994a081679ee"
  },
  {
    "url": "assets/js/71.6d213d58.js",
    "revision": "9942cbd4ede42ab70662253de8634195"
  },
  {
    "url": "assets/js/72.4e70fbaf.js",
    "revision": "5ebf0f57af37860981392aa999e80eb7"
  },
  {
    "url": "assets/js/73.1168d637.js",
    "revision": "e16b04b53f22196c1bd1cbc0e25b0226"
  },
  {
    "url": "assets/js/74.85d2abc1.js",
    "revision": "b7e8d409289c7ef7a6a8d8a5f5b845e3"
  },
  {
    "url": "assets/js/75.60b606da.js",
    "revision": "4e7b6a10393a4ee65d8aa82a312a6b9c"
  },
  {
    "url": "assets/js/76.c0215ed5.js",
    "revision": "d951bf3d4fe4f26402af12bd51976a54"
  },
  {
    "url": "assets/js/77.6505f198.js",
    "revision": "5df9c496357ac4779efd65ea734762e0"
  },
  {
    "url": "assets/js/8.356ec90a.js",
    "revision": "d8195a20129b037850abfcfbd4293eb4"
  },
  {
    "url": "assets/js/9.698d3b09.js",
    "revision": "abc6d362c0228dcffb93a2462e3f1290"
  },
  {
    "url": "assets/js/app.30337916.js",
    "revision": "1444cd28589616217ac2c91fa2d0fa9e"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "1d1edb8ed9523a2dec275ece15296850"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "f2d1c5990ff26b1f149db8e474e6179d"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "fabb6734cdfd6436e177fe6ff4842ac2"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c5dd3e1ba6e2768b14a80b0da4c3c828"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "fa5dcc04ce6f658f10b5cdfcbdbdeb82"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "517a8c6375ebfa391bdf28ae2ed9e9b3"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "b5228a277080d44507a8c3f0c307bf6e"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "645f6cf13ec1385ccd5f7b6887f0bbb4"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "4b55bae363cb2abf5ad43b6ef6070bca"
  },
  {
    "url": "courses/index.html",
    "revision": "4b8c6e64315124184ff385cb746c354b"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "be1ef902d1b8669074c1f6cb8552ba5c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "2c423049564b7975df21746c76e99234"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "828ec460eb13e915a545bf4e3579d597"
  },
  {
    "url": "courses/template/index.html",
    "revision": "731acfa3d32fb6f3fe46e986c240d128"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e87429e35b040d72b4a35786251bce25"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "de096ce903713b9264fa2688622c4a06"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "0192e1f0706c524fa834a8ecb8fe3ad2"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "c7bedc7f5a6191f3007770e24bdbff2a"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "dadd2c15b29e5917c0d0e2ce7be8ab5b"
  },
  {
    "url": "index.html",
    "revision": "b47e8a0dda0986e4f782fae97000ed40"
  },
  {
    "url": "studyathome/about.html",
    "revision": "2ea1e1734c64ae52986e2d8e89ab2266"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "b92565c7dfb1ffe6f71699aa28ee50c8"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "f0c609b3d8ee101eb4af8d8da5b4457d"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b67df521e8ef487d615191d3a420f841"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "28fb96b78137efd6cdd823aa07db4e45"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "fae8cebd7a553b7328561bd1b149393f"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "7d6f9ea6be6a4cb2519df4be2d75ac10"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "29003da216b59621a856af9599113fa9"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "0c44ab844f3a173d301cbc3961e05d77"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "b4f5403c01c017b2bd3cfd459dbbb360"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "7cdf996047a7608e7e359f9901aef8be"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "893564e459b3ff33cb6207cb88b349c5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "da2c54e4c8ba6018d17a5fbb9e8a5529"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "9f6d1ec9a8785d9f6d50b556ab70a659"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "328ee6db882d9e36cdbaf70b140d3e09"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "ea3d97722beed41f77f623a0ce11036b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "eb3c1308ff8709005f7a312f82a4793a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "9055215a6a0506b15b56923c999ce608"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "47998eac52ad0bb94635215beebcacbf"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "27be6d2fba5c80931f69e43c1a0b4506"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "8937a7d760379a6083ffaf59cc4b2dff"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "e2c25293f8eb93c94a5ba082ca0f1323"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "a3963af78a2722b027c34b3c31844ed1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "8595bd0cae2b6dea8389e30af79d36db"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "28fb96b78137efd6cdd823aa07db4e45"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "09610875bc94a80790aa80c1352dab81"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "ed835896bd7a6caf4294c00396fabaca"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "c116a956ed7beea84ffe78e1b2d7d282"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "0d35f9f31bf58cfbcf2ccedbc003ff58"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "4728c67cc7afa619af8196bc823c7c11"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "987596ff67ae7b716834916020357ef8"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "bf602c853a99345ebe8d4d0a616e3118"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "c0d3e8098aeed1b6005e2b2ca953a560"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "962ca3f8abd73237bb4f6e666c4bcafa"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7076afc705c320365d1b98611a3fe71a"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "cf8a0f09924a09a987932590443e4998"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "d4ba07e1ce013b65a0b1f2b34fbdb8f2"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "f7da44643286fac3357db5fb0e891831"
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
