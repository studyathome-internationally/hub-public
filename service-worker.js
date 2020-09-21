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
    "revision": "0365791a0515a9f9c9a0d226784ffe9f"
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
    "url": "assets/js/25.bd7a4ff8.js",
    "revision": "18f81a3b8eba532933bbac8946cfc26f"
  },
  {
    "url": "assets/js/26.2a23887c.js",
    "revision": "99e8d26027a8ad119c8957d84dc56765"
  },
  {
    "url": "assets/js/27.4d493871.js",
    "revision": "7f65546354b9d398be4d0451237a474e"
  },
  {
    "url": "assets/js/28.e6d5375e.js",
    "revision": "8e90553243f0abc3ff48e3e6583d0fed"
  },
  {
    "url": "assets/js/29.741bfb9d.js",
    "revision": "a795c29f85055e00a53cb0881f0ec942"
  },
  {
    "url": "assets/js/30.cd9fa306.js",
    "revision": "cc282a3640673e183c66502c1372b7f8"
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
    "url": "assets/js/33.266d81a7.js",
    "revision": "325865c0281e637ea7ab34b82126fe01"
  },
  {
    "url": "assets/js/34.e3c87030.js",
    "revision": "82a8b9e8f34420fc12aef715be972889"
  },
  {
    "url": "assets/js/35.2a108610.js",
    "revision": "ed59f878e2ac6035531b0079c7dd17d7"
  },
  {
    "url": "assets/js/36.d69e4745.js",
    "revision": "a3c49842c221886eeaf3568212eb3a62"
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
    "url": "assets/js/39.59b6592d.js",
    "revision": "786d60ebc89e9459c25ea83b392f94f6"
  },
  {
    "url": "assets/js/4.93fec7c5.js",
    "revision": "a7b6e730e4b27cb9bbb254b344975c71"
  },
  {
    "url": "assets/js/40.e639955c.js",
    "revision": "fd1cd94e56a586416de93a3c4826f45e"
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
    "url": "assets/js/43.89bca4ee.js",
    "revision": "a0b6d6bf7590a8c4511e7578278b3155"
  },
  {
    "url": "assets/js/44.7a8f717d.js",
    "revision": "583bcbeb3a853751899af555b4a4ca30"
  },
  {
    "url": "assets/js/45.033f0000.js",
    "revision": "54bbcd681964bb8eb60cf494f47d983f"
  },
  {
    "url": "assets/js/46.c5ae823b.js",
    "revision": "54beb226ab9fedcfd6aa31d9eef7efd0"
  },
  {
    "url": "assets/js/47.c0360669.js",
    "revision": "9dd5875b50fd587522af3f5c1d389766"
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
    "url": "assets/js/53.c5d481bf.js",
    "revision": "cdca8068ca83ef9bc1dea4e5979ff48f"
  },
  {
    "url": "assets/js/54.27605c1b.js",
    "revision": "25ea2fba688cd067fb71ab9eb6a65984"
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
    "url": "assets/js/8.1ea204c2.js",
    "revision": "4d2326f83695f18d81e612dd2dd61bd6"
  },
  {
    "url": "assets/js/9.698d3b09.js",
    "revision": "abc6d362c0228dcffb93a2462e3f1290"
  },
  {
    "url": "assets/js/app.aee44f2d.js",
    "revision": "eab46b49012d6791d51d1681df08c710"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "e810f5536c8d652361cdcc55c802276f"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "78e0d4be1a9743ffd8a9d5c77d41b76d"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "493105a13bd18ccc90abda30157e186e"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "ccc1027b3505737979f6dd0e7381ad70"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "f10bc12a9a4147f566d1f90be79f62f2"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2d9a56dff1073abd6d94ba308bb8ea3a"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "4b5524ed9bd52c3cca9daaaf44120cf3"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "43acd196e5ef19487ee8072323f74f95"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "6cc84a02edcee05a9baa4913ad4ad503"
  },
  {
    "url": "courses/index.html",
    "revision": "802e84271eef43bb664431fe7b23365d"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "5e0ed73422c7ba5fc25efb048653c777"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6622d00df8d33e39f9d11c6d1a13623c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "87a121d28a8ad448562ec307937e0016"
  },
  {
    "url": "courses/template/index.html",
    "revision": "eb478e713cdc70140d8ec75ab3cda0fe"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "1a7095010c11e341fd57070dbfb2e491"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "93c780c3a5f31c9bf791e1e745b0a396"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "88295829a7639e62fdb12cd735db7c4f"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "238edc40b7612775bdd1afeedb0f47f9"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "36cf994bef7484060211278dcd46a3d8"
  },
  {
    "url": "index.html",
    "revision": "492de7f052d43d6bc2b6fb597970a6d9"
  },
  {
    "url": "studyathome/about.html",
    "revision": "3d0d5f6460b7235d395869f05138cb56"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "17923c363c93f0e3f4f3efb68361aec2"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "b9d22e4cac2f075422c877f126ecff07"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "52e68f277ed09300df9afe9bd3e7a29d"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "8a701f5cb5d8b6499a783a75deb6d85e"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "b4cb0116986e358f854ddfdf5c70be5a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "cb7d181dbbf09198752c3348811e2fbf"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "366405c0bae1fabc50f720d8488b9629"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "15b948781de22bf9ea8bf262ee3ac114"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "8a701f5cb5d8b6499a783a75deb6d85e"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "ca518d51d421693ca4f3f69077b638de"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "9183a8b44fb3470ef0c3eee5a2c2ab79"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "4c68d72506fa2d4939b20fa02a13d6d5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "fb07fbeffc2e4df65b45ba9a45409946"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "0cda294e0b1da0ee291fa25eeff9c5b7"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "2dc83a210380d21fe83f45ae503767c5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "a19de4dc0437928813f6ed2351e10308"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "130d22a69008747d068f22a48fc85390"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "46e317b33db34204aff2ec75192e6325"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "4671bc295d5445455680607010041a30"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "983c1abfc80bda5beedfe85090fa8e9b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "2d34368975fce570f6f969082646d869"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "504071fb57d6f427fb31811724e80365"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "3e77929547f3d9acb835a868d8bc21b1"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "75e00ad5004ff1f339f9a57ffddfc6b1"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "4be5190e3792aa89ee79d8a94a61854f"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "afdc67595a059a9d327ec0f01be1bdb2"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "87b8a147bed7b1954a516cd3a7b719e4"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "190bc6b0ec11dca664f5639580774294"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "2d19bfffd275ecedcc9ae25bb1204f0b"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "f82be4c90578dc885663fdeaf96f8904"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "203b47abbda4abca5853938fc566e35e"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "31b80bebf9e473ace05b579cc8554d1c"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "d51dbfd3fb30f33bad6ced3aaac7e5d9"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "941c0ebc3b0b22a1b69f7cc0a467a07a"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "3c610afc8e2c7ea59b62d31ea12d224e"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "8e8d1d743a0d1ea56eb7e05ae647ea7a"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "16ca28f7a63a99ef3523f8ab18cb30cd"
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
