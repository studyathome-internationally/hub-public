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
    "revision": "2b5c67089c94f3208301ec2ac82d5933"
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
    "url": "assets/js/23.ce7daa5c.js",
    "revision": "6c02ad9fe26ead1c34cf5333830aaf18"
  },
  {
    "url": "assets/js/24.1bdd9087.js",
    "revision": "d480b7a17e124920d61c02c5e28a4947"
  },
  {
    "url": "assets/js/25.a3d73c34.js",
    "revision": "06f63ff08e175dbb88f345f16127dc84"
  },
  {
    "url": "assets/js/26.77acc000.js",
    "revision": "297bcb8be59a4e6e645ed756c3a79ea8"
  },
  {
    "url": "assets/js/27.04f28cee.js",
    "revision": "8fa75bc4a9d8f910506bd51e66a60b26"
  },
  {
    "url": "assets/js/28.a53562d3.js",
    "revision": "fe193a87be16cd6ab377329795ec9daf"
  },
  {
    "url": "assets/js/29.80faea6d.js",
    "revision": "b559d81d8ca89cae51c4845fd365fa75"
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
    "url": "assets/js/42.27317b62.js",
    "revision": "4ac63c40c902a1ad59fd857a9231a927"
  },
  {
    "url": "assets/js/43.5e900e5b.js",
    "revision": "0fb95e0bac138ed097fc10e899b2198d"
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
    "url": "assets/js/63.d9631958.js",
    "revision": "95dffc38d19826795d93760f09755742"
  },
  {
    "url": "assets/js/64.18c81f70.js",
    "revision": "fb9633288a9fc8dd38404a98e66922f1"
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
    "url": "assets/js/72.7597fb6f.js",
    "revision": "6828ca5f24050405b1b90cfe315109ab"
  },
  {
    "url": "assets/js/73.d7221119.js",
    "revision": "3e26456b9761da2a2f2fc554d578619a"
  },
  {
    "url": "assets/js/74.e1cb244f.js",
    "revision": "e1a6edad4b8ba5dfb82bc6802a9aedd2"
  },
  {
    "url": "assets/js/75.584a6fe0.js",
    "revision": "f96a02ffdb7fbb96a640e41afbf6fe2b"
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
    "url": "assets/js/8.1ea204c2.js",
    "revision": "4d2326f83695f18d81e612dd2dd61bd6"
  },
  {
    "url": "assets/js/9.698d3b09.js",
    "revision": "abc6d362c0228dcffb93a2462e3f1290"
  },
  {
    "url": "assets/js/app.71c663d8.js",
    "revision": "775315829792170aae5cffbe51ebc9a7"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "9f8156d5f938d399340afe9498107ac6"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "4622868eae282fd2193269d7919c8966"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "265db7a5cc6d124cb8c04a931b1f1d0c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "f9000e44a110fe03ee0f0fb4455375c3"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8dee769008495bbb56b40deb31a505f6"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "29448a340857bfd58b479e685ac42f0d"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "17677bca418327ee93707c530f261408"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "dd4b1ae80af1a27c46f0f1361300c378"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "6e6a43ea8c273092f172ab4a577959e0"
  },
  {
    "url": "courses/index.html",
    "revision": "139bfb13c158ee30e20c83ff62506f08"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "5d788fb07b1bd1a3102c46d117deb7f8"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "5f76aa761905b5363dc005d075213001"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "6b4f74253900c6ef933850b7131db60d"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8f016782fe2f8a9c239eebe20b861d12"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e99e90e71f346993fba5df277fbdc551"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d73e39e4dcea952d94527a4fbcfb3006"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c043d1ac28d0b6d61e2bf908fc97c991"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "24695cd62dedd9b9acbf3bee3a8d37d3"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "901c48e252315300f12023da85a1e877"
  },
  {
    "url": "index.html",
    "revision": "e95cd3b008dc2d6b10dfc7d1bc7bd366"
  },
  {
    "url": "studyathome/about.html",
    "revision": "0365f227ee9193b9d4a20e443795f387"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "f59bd4af9764708b71f71a4ee50c1803"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "b1942a0e2f1bea51723da64292b60111"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "ec2cc7dd9b7368d1c982f7c289052cc7"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "2c4ff600bcd2e5833883f96012a62bc1"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "848f776d7daf72e2c9428d0de35e0a1d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "dbcef9f20783e04076520ad576efb791"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "c7772c43aded876bb675cf6e0a477b4e"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "037a9c72b5ce9a1e2120c20f1ca5306b"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "ba202283cc9ef6bdd6cb7412a54b5f99"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "ee45fa9c275f1a8c2c29608893f85692"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "c2700973c6a81139030f3fc90e613a9f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "07e3612969c27b3e2c17b093f9e4793a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "f8ff1b92585bff890653029536d1396f"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ba202283cc9ef6bdd6cb7412a54b5f99"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "615db76be98f1b2b20f84a8d681f272c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "cf7d0cdce8a211cec8c1921b1ddfaeb4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "dbf248ea9247a0acf1130f396973530c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "9ef68b39e87a8a6dae60fb35ea712676"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "32fd1090abf41d2c6c1e070cf90c6efb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "2a558112c09e0837be752b4a0cf6e0e2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "26a036deb6da2e7833199ae579649877"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "16d260da49c37ede332f29eb30bf866b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "919de7b4d8798f9a6b2d5689a5e11065"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "2c4ff600bcd2e5833883f96012a62bc1"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "88213f8a347fee76f7315259efd3028c"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "225620c0152f018619a2c8b4a8f19f4d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "4662faa5e30352e358072a6fc3feb406"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "2189e50f8fe5d31916df185b58800f74"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "3a79a0e5a0c014c882f412269f44d8c2"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "16b1c91b9f20f929eedafbf82bb00367"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "e07f0f894836ce2fe560b238ec944535"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "f031cef892b2a3b59826a7c47e1400f2"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "2a7c982812d3a6d5e4205ff787f61e86"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "b110b56012ce1eb1aa1f9584fdf94985"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "fd414d48906c99263bf6b74bffcf5588"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "259298221fbe8f7889f960d3058cb0e4"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5154991964fc4b616518cf621e18aa47"
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
