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
    "revision": "1723ed051fe20a016a97f284689c3836"
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
    "url": "assets/js/15.32673d28.js",
    "revision": "ac252b583f30f9cb053912ffa584ac07"
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
    "url": "assets/js/25.c6949e17.js",
    "revision": "5a175b70b5b6196bc70b6247f71317b8"
  },
  {
    "url": "assets/js/26.07656dc6.js",
    "revision": "a4e3c121bd9160238b2d8f15fd2a9fdd"
  },
  {
    "url": "assets/js/27.f4f5acb6.js",
    "revision": "5f973c8778267e0e637953c3853bb400"
  },
  {
    "url": "assets/js/28.c86dcd6e.js",
    "revision": "af1974f8e31fbac3445b2ebf3cb5c55c"
  },
  {
    "url": "assets/js/29.e8a6e9a0.js",
    "revision": "e3be3a0d1747e9b74e3d3c93e7dbd1fa"
  },
  {
    "url": "assets/js/30.5c7a5005.js",
    "revision": "730c7791f469e7b3bf4eba6ed91dc2c2"
  },
  {
    "url": "assets/js/31.67f474d6.js",
    "revision": "f9ce368d2176e3b72908b186d54e6b6b"
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
    "url": "assets/js/36.c6837ede.js",
    "revision": "15221e587dedb20d0962c79f4839f061"
  },
  {
    "url": "assets/js/37.076f2510.js",
    "revision": "19e10b18d6a7b97888aa611e5e74413b"
  },
  {
    "url": "assets/js/38.92ee84aa.js",
    "revision": "134c200c1d8ceaf4420604716a89dc05"
  },
  {
    "url": "assets/js/39.c6fbc305.js",
    "revision": "e5f496d7c17d75d67f892820a04a3e21"
  },
  {
    "url": "assets/js/4.93fec7c5.js",
    "revision": "a7b6e730e4b27cb9bbb254b344975c71"
  },
  {
    "url": "assets/js/40.e326650d.js",
    "revision": "2f7488d14bc40e8fb77029c514ca2171"
  },
  {
    "url": "assets/js/41.a8851128.js",
    "revision": "566fd34fc73c852213aa599836fe6e52"
  },
  {
    "url": "assets/js/42.30d8a869.js",
    "revision": "83d26bbe2b4cc37dbce58e39ac79086b"
  },
  {
    "url": "assets/js/43.9becc156.js",
    "revision": "1cabfdf20d2c5bf10ab6f4b82291c262"
  },
  {
    "url": "assets/js/44.6b0bfb37.js",
    "revision": "71c4ec08dd568cbdd615e01329436b84"
  },
  {
    "url": "assets/js/45.b4387ae4.js",
    "revision": "b3c46d26ec35f22823130b337b7e17d9"
  },
  {
    "url": "assets/js/46.0cfe6567.js",
    "revision": "a5c7abcd9406de2b50abf66affed4adc"
  },
  {
    "url": "assets/js/47.03333ef1.js",
    "revision": "57a2d5debf6320405ae2867c27f346e6"
  },
  {
    "url": "assets/js/48.fc93f7d3.js",
    "revision": "7be5719e03ea923fdb9b9dec9ea0577f"
  },
  {
    "url": "assets/js/49.5b989b6e.js",
    "revision": "e7cb87b13319a159e54f56a34f6fa133"
  },
  {
    "url": "assets/js/5.dbf1faab.js",
    "revision": "d335ff5cfb853c1f0c50828af35f6d85"
  },
  {
    "url": "assets/js/50.0a9fa31b.js",
    "revision": "c7218e117f1f9e0a79b70ce2c4b30384"
  },
  {
    "url": "assets/js/51.92feea99.js",
    "revision": "b1f38867796e0e918abd394c41fd1f22"
  },
  {
    "url": "assets/js/52.b7843fe2.js",
    "revision": "dd9dc1848c05981e5c660391a2157de3"
  },
  {
    "url": "assets/js/53.b66c0e06.js",
    "revision": "7109bdb397d94e0edd06cc96c189296a"
  },
  {
    "url": "assets/js/54.f5f7b424.js",
    "revision": "abf23b041aa323b0ee429be026c8e73a"
  },
  {
    "url": "assets/js/55.5611292b.js",
    "revision": "1312cee3787506f8e046165d7c4ef74d"
  },
  {
    "url": "assets/js/56.141e7b5a.js",
    "revision": "346c9464e0a8951b9770f1aae4612721"
  },
  {
    "url": "assets/js/57.11810cce.js",
    "revision": "b16daf1ea4e1d3e9cd4a42938afea536"
  },
  {
    "url": "assets/js/58.7fd35abc.js",
    "revision": "1d061d8d3a3a63cff4beade9f99cc657"
  },
  {
    "url": "assets/js/59.00d625a3.js",
    "revision": "520310fd1b897654cd8f57ad4fb2a2b1"
  },
  {
    "url": "assets/js/6.dddbb35d.js",
    "revision": "0ec856fb0b20a98018038653df378336"
  },
  {
    "url": "assets/js/60.a63fc24a.js",
    "revision": "2da55a7496c7e2a02aff2f21188e6796"
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
    "url": "assets/js/64.c6bce017.js",
    "revision": "2749a0028c8d824062d70757a0c06f5b"
  },
  {
    "url": "assets/js/65.8559f545.js",
    "revision": "e24951299b99318b8f9ab1d3bece1a4c"
  },
  {
    "url": "assets/js/66.20efc7ca.js",
    "revision": "68e3e869a83a5f61c07575e3cf84f7f3"
  },
  {
    "url": "assets/js/67.856175a7.js",
    "revision": "30864d89fdadd77c67e5d376ad3f774f"
  },
  {
    "url": "assets/js/68.5d5efe08.js",
    "revision": "f1cd2c2052c5547704a121fc7fb5dcbc"
  },
  {
    "url": "assets/js/69.92770916.js",
    "revision": "9fe3646342f48610beca9a7a0d24fc01"
  },
  {
    "url": "assets/js/7.30508171.js",
    "revision": "3de7c285f454c42dc8dd6fa1afed06fd"
  },
  {
    "url": "assets/js/70.49ff7627.js",
    "revision": "4647c04bf38e89059c2a2cbe18b00ac8"
  },
  {
    "url": "assets/js/71.93badaea.js",
    "revision": "5b9a85fa7dd66747d436b3b8f2dd935b"
  },
  {
    "url": "assets/js/72.977a91eb.js",
    "revision": "18cd4b2c1599397a18f58a4e084ae501"
  },
  {
    "url": "assets/js/73.1168d637.js",
    "revision": "e16b04b53f22196c1bd1cbc0e25b0226"
  },
  {
    "url": "assets/js/74.ad611a4e.js",
    "revision": "12b1064b58b762a0f6cb7a9f3c5b0d7a"
  },
  {
    "url": "assets/js/75.60b606da.js",
    "revision": "4e7b6a10393a4ee65d8aa82a312a6b9c"
  },
  {
    "url": "assets/js/76.82204fe1.js",
    "revision": "f19e51b093def60d80e55f5eb2298e16"
  },
  {
    "url": "assets/js/77.6505f198.js",
    "revision": "5df9c496357ac4779efd65ea734762e0"
  },
  {
    "url": "assets/js/8.1ea204c2.js",
    "revision": "4d2326f83695f18d81e612dd2dd61bd6"
  },
  {
    "url": "assets/js/9.698d3b09.js",
    "revision": "abc6d362c0228dcffb93a2462e3f1290"
  },
  {
    "url": "assets/js/app.ef31f9a4.js",
    "revision": "f0eaafb8b62105d3c441d9d73080c466"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "681552493e45ce46c446fc2bd73f9b50"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "6ac626566771394dc6af2dc41c506777"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "cee802465a13bba83ede4055fcd77291"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "9b7fd96aef8fe12bf150a67291d516c2"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "db43eeccedbca7830c8706c8a754b322"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "4db2581bc93318750ac4136d8d26f741"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "16c51af19f06e67e7e7861fa0ec4ad4b"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "5ed85c7dd20da54fae0e15e241b31c7c"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "35ba97e1cc34cb32c3436179ca0a1937"
  },
  {
    "url": "courses/index.html",
    "revision": "7c37ee096bcef176e30dff8b04ce9d56"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "4e4d04ac89b13ca85782f54d59dad0ab"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "2ebc8dd00afff6bb53543ed519491ae9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "f8cc568e286d0944c080fe7ce3f70000"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ff67d248d56581635f0170aa8804b1b8"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "3313d9373e36ccfa6a41f704bc0482d0"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "3dd9a716d9df8e417b79afc7b5ea04b0"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "cdc8c95e0c50b681cc68278df9289bfd"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "0eacd56ec624ec80a72eea7a8c74bfb7"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "05bdd7b288a57ea0c2d77ae858573809"
  },
  {
    "url": "index.html",
    "revision": "da10ec7fc83cc6cb71fa6ac4c274d1b2"
  },
  {
    "url": "studyathome/about.html",
    "revision": "9040f58fd8e7876915513467318be8b9"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "931b7142783d8cae97ec67e8a0fbbaec"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "5cbef444c04eb8c32b794320537f7a5b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "f5631bb60e01578ede59f4c4de792784"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "0d6bf7ee700cb72a9e39e95890251555"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "713dec27745548a293e6ad213d7c317a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "56251422a7199e38cc3d90031b6a5d66"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "ddff80c1dec93c428b41df775b91fd69"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "8949af27638cf0f12b141b9b17dc4096"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "1723ed051fe20a016a97f284689c3836"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "e898dd09500acb6bdd3d3c11b22304ab"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "2411204aae38e3fa37bc7caf11361444"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "f9db604852799e1c595f81c969e8266d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "73e29d3a2e6563a6bb343fb8fe96db93"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "997d282280dfd9dcf0cb12f9a182e240"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "110da063886afbb0b82637bec3fa9770"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "e0bcf84f880de81bac2e7a71fe8fc309"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "47738090eafe0a938f11e99e5edaeff9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "38c952262edd3e7ce8d0e4e3eb32987b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "44257e620c9f41af1a9e45fee0424c1c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "a30391a7e6fae710486de9201f3dfdf1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "80f4096db9b47134e3842f6971c7ccfe"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "b743c644ef567d9f15c211294dff9ed5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "6635728c74f1ab298d2af7e56a63486e"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "ed8df4590e2d3bc339c38e973f5afbb0"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "58e51372549cbbf83257d796188d396f"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "9d375e2f137c6b60b671383405380818"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "f728c6f16b9b80914df559b77e7dd7ec"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "63847e54e6b1a546dbd932ffd84b5d22"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "4b960b76072049112114fe3795c9a001"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "018b6c4027a389b7792813ee020f8c22"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "fbfaa7055dbbfb52a3dde53409654616"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "5f9ed86980f00c2631845c3a74ca5757"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "5b1bd187d0284cd1393091958c9464d2"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "28fb4d596a96f6ebcaaeba1cd169499f"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "f2e4a2538da991964b9b1ece8c166e43"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "8a15d6c80696808e1acf4bd9814c856a"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "ad41e35578e58a2dd2abcb082412f857"
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
