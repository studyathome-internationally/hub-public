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
    "revision": "0cc10e41689453fa8c8c342122745115"
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
    "url": "assets/js/21.dc25b9bc.js",
    "revision": "fab4da79f439f3088c29a9e28b6a20c3"
  },
  {
    "url": "assets/js/22.a3d847aa.js",
    "revision": "536b6e4687fd3704040bd60f52879b59"
  },
  {
    "url": "assets/js/23.201f390f.js",
    "revision": "22f3dfefff9ac09d2f18644284708675"
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
    "url": "assets/js/26.6aac0446.js",
    "revision": "3849800cf5d60118fc8231494eb9e2b2"
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
    "url": "assets/js/29.ccad808c.js",
    "revision": "a0222969400a1952312ead1fa2d23acc"
  },
  {
    "url": "assets/js/30.4e33bb11.js",
    "revision": "72faec6b9b89934732e6fca1fdaba0af"
  },
  {
    "url": "assets/js/31.b94bb3be.js",
    "revision": "a1af00dd8ed73efdbe3e8ca6c48c23a9"
  },
  {
    "url": "assets/js/32.fc4fc8a5.js",
    "revision": "bda1f6ac5de8cf296dd1f6f004643ffe"
  },
  {
    "url": "assets/js/33.e60f7172.js",
    "revision": "0ae421c97287fc14453375862917331d"
  },
  {
    "url": "assets/js/34.e3c87030.js",
    "revision": "82a8b9e8f34420fc12aef715be972889"
  },
  {
    "url": "assets/js/35.a718cda5.js",
    "revision": "a188faf18778f0b772a03750977df0ea"
  },
  {
    "url": "assets/js/36.c6837ede.js",
    "revision": "15221e587dedb20d0962c79f4839f061"
  },
  {
    "url": "assets/js/37.e48c4ad0.js",
    "revision": "03b8a035574536e1b2223bac491dacbf"
  },
  {
    "url": "assets/js/38.9588d202.js",
    "revision": "d175506bc24fc2fbf590c4e17a339dee"
  },
  {
    "url": "assets/js/39.d6eec051.js",
    "revision": "aeeb08b90518dd49082222e8941860ab"
  },
  {
    "url": "assets/js/4.93fec7c5.js",
    "revision": "a7b6e730e4b27cb9bbb254b344975c71"
  },
  {
    "url": "assets/js/40.857c8896.js",
    "revision": "8d6e238fd812541866117da98c1e7acd"
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
    "url": "assets/js/45.fe6f59ab.js",
    "revision": "3c66ae8bc99c4321a40f06e75e531b6b"
  },
  {
    "url": "assets/js/46.a0fd7c30.js",
    "revision": "ec1617943f8e32352ace95c208c3494e"
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
    "url": "assets/js/52.59445165.js",
    "revision": "f8cdd99854c53a1f43693c432de17a65"
  },
  {
    "url": "assets/js/53.4c81601b.js",
    "revision": "36a74aee814e1d7f4e51da65845ebed4"
  },
  {
    "url": "assets/js/54.1f7fe25d.js",
    "revision": "6b42fb37e1c82aacf3e9224032790f4f"
  },
  {
    "url": "assets/js/55.25c559e4.js",
    "revision": "1de38cd02f19386285a6a74c4197b2e1"
  },
  {
    "url": "assets/js/56.5ef6b90f.js",
    "revision": "26f955bb2439d92b3b934e036b786c6e"
  },
  {
    "url": "assets/js/57.1c8a727f.js",
    "revision": "9db115b97d2488b209936f1b88d4bc2a"
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
    "url": "assets/js/68.bb5d82f1.js",
    "revision": "fe01626497f351db80f25398b34d647f"
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
    "url": "assets/js/70.c819c706.js",
    "revision": "faf87061cbd8847866972b7539e1a30d"
  },
  {
    "url": "assets/js/71.a6a4e520.js",
    "revision": "aa109b5f3bc039a53184ae9af37cc1a0"
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
    "url": "assets/js/8.96ad2595.js",
    "revision": "f207987e97681d0b95af28ab862c59e3"
  },
  {
    "url": "assets/js/9.698d3b09.js",
    "revision": "abc6d362c0228dcffb93a2462e3f1290"
  },
  {
    "url": "assets/js/app.7e8d70ff.js",
    "revision": "5c8b3c0b2362e4148b94e3c4cb0e05eb"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6e04a2af7721444a3a1afa7dcf67e49b"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "725ad97c14755f900d6d7871776e8f36"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "52818f72c7375a5803f70d994abc7a91"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "2db32e9dabe5ff665ec94df4a63edb69"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8343d39169621c5556e32ce76109fa8e"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "bcaa4bfb6a6c2e4bbcfd5860b0115ab1"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "59a850c374740e8d27a622a883ed923e"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "43a6f714bf612350f37cf029fe6baf70"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "6f874537942c2a485f95b43353c649ee"
  },
  {
    "url": "courses/index.html",
    "revision": "cc3986891a383c192eacbe9c060f608d"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "dc1e760fab417dc2206024dadc7cbafc"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "4bb498293639ac02b70f92a0c36d1c8a"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "066a27abea4325ed11ed3f4c1bc53a8c"
  },
  {
    "url": "courses/template/index.html",
    "revision": "673a0bdd52aecb4caaaf417d77b53966"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "a326522444703962de8fdac3d3cd29c8"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "75bf554d6ea9eafa3debf1201cbedde2"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "695e61c4214e165e05c284b4c7cdfdc6"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "3de3207bb6713069e883968eaeb25651"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "01ecce8fae356ea8a55a30f396877b55"
  },
  {
    "url": "index.html",
    "revision": "003d22e933c3908e03c7b97526e60e5a"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d3e2abe564a8eb50731ad234cc77016f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2e44c893dbfdd5da75b137bf9a275ef9"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "6da99ea79968e2a7ae241f0687e4ef3b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "395f321c5a289f96740ff8aa45974307"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "0cc10e41689453fa8c8c342122745115"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "099fe7cb71b076e8e9149ded11c50a8f"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "ad4dc4183eb4848d31d8a0584c953340"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "6f4edef56dd7649675902790d2631bc4"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "c1ad46048f6a05c32f1488cf6a05a40f"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d09d50e5e4c5bf252663354bbaf96792"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "a515d0f914361953e2969b411525f441"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "76cf3fcee4681182c3380573a574b755"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "bb935c346148b6eadd3d17d17d391ee0"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "b431489d033930482fcf087dc5da1851"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "0cc10e41689453fa8c8c342122745115"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "9b983e1b168d8bf3ee7c70844644d1df"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "0956c807ee9864feae105c7ed27d32e8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "0d4c7057f1c5912928179d67c31acbb7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "2d5dd139bb9aba43bae5d474614f3c4c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "a90a102b4324bccc53e8881e484d935e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "1596e05eb9b6e257c908c9b808cc0512"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "b86e0a629a608f0afa8e0d6205907ed3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "7a098c8e2a6a2ac88aa8b42a777d7b1c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "e30f0959ace6b05b3b63c0a2d27da513"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "f3b29417d3f46f4cf4b4a8f754b224bd"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "04801989f908452d1419ea229ae013f4"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "f80200579f3860f59977ca578d84055c"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "5a42cfce2a8d542a6c6d248d72db299c"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "f23f1405719d6185093dca12e0756d97"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "93707ba1ad10796ff996644576bd7060"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9bfd7fb3b75a5cc98e2d2128aeb1629a"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "79d390eccaa2db152228905dc290f54f"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "03b144b50787f12044a4daae9339fe83"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "4e9a70f5ad3e2fd3a9d4a3f79666fd4b"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "23d7894db638f5c5ef5a04389eb62bb3"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "ffd78029168f46a2b5113b5cbf8ee9f8"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "0b1d9392249c742f6cfda4da35954457"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "36b9190d87b4c2ac276fcabfd298bdcc"
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
