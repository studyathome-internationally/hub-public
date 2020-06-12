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
    "revision": "7fc04e755fd782dec75d369ab9e6d349"
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
    "url": "assets/js/15.47b93962.js",
    "revision": "f72141fe3fafa1ea82b937170c9fb620"
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
    "url": "assets/js/20.985a3290.js",
    "revision": "fb20f0a66e0ee699cfe0fe4eddaf14c4"
  },
  {
    "url": "assets/js/21.d079ad20.js",
    "revision": "4a75ce8ff63ad5dabfc5133f248bf383"
  },
  {
    "url": "assets/js/22.901fdfee.js",
    "revision": "88b0c24d8c0148dae0e4a245599ab76d"
  },
  {
    "url": "assets/js/23.8538b338.js",
    "revision": "d948e55b2d00f493b39b3b4c212b92c6"
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
    "url": "assets/js/26.ae36ef46.js",
    "revision": "7123d65f0eb037702c337afa54fe9abf"
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
    "url": "assets/js/29.b6874fdd.js",
    "revision": "84096f8cf5e0e886723dd877efc5fcdc"
  },
  {
    "url": "assets/js/30.4e33bb11.js",
    "revision": "72faec6b9b89934732e6fca1fdaba0af"
  },
  {
    "url": "assets/js/31.b8e96501.js",
    "revision": "e61308e28edb1d90796eddb2db6f7fbf"
  },
  {
    "url": "assets/js/32.8087d736.js",
    "revision": "2475d915c1d36b1d6ae0b5f51670dfe7"
  },
  {
    "url": "assets/js/33.e60f7172.js",
    "revision": "0ae421c97287fc14453375862917331d"
  },
  {
    "url": "assets/js/34.f0fa214a.js",
    "revision": "99e8d2264fad39a8dbc8495f024f2cf7"
  },
  {
    "url": "assets/js/35.a718cda5.js",
    "revision": "a188faf18778f0b772a03750977df0ea"
  },
  {
    "url": "assets/js/36.c4d7dd54.js",
    "revision": "1bd59784cd731372c0c505c98ae108d5"
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
    "url": "assets/js/40.655496b4.js",
    "revision": "a9de1f85180fb25d0102f2752fc2994c"
  },
  {
    "url": "assets/js/41.ec76a474.js",
    "revision": "6ec00065d056b7fd0f8743013b4ad219"
  },
  {
    "url": "assets/js/42.aa6d4032.js",
    "revision": "3c1bb9ff78dbe7bd65538748d6258a43"
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
    "url": "assets/js/45.fe6f59ab.js",
    "revision": "3c66ae8bc99c4321a40f06e75e531b6b"
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
    "url": "assets/js/48.5aed10e7.js",
    "revision": "173c9e8b42923f117b10eae8125634f7"
  },
  {
    "url": "assets/js/49.7c283fca.js",
    "revision": "08b161c2b2a99a1213c24bd211369fa4"
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
    "url": "assets/js/58.32c59880.js",
    "revision": "7ea2f999f0b2a33ab2f365c9ae12b4a4"
  },
  {
    "url": "assets/js/59.62ad8d30.js",
    "revision": "3b972ab25ad68937147a5fb585e95e66"
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
    "url": "assets/js/61.a35e335d.js",
    "revision": "48ef00ad846d9c4e7f2ff3b3199be457"
  },
  {
    "url": "assets/js/62.5eb4faf2.js",
    "revision": "9800f3fa463ca3c1b1f0a751a365ddf0"
  },
  {
    "url": "assets/js/63.b1432952.js",
    "revision": "3ef83d3162de8bd52a2a52cd268c9d4d"
  },
  {
    "url": "assets/js/64.18c81f70.js",
    "revision": "fb9633288a9fc8dd38404a98e66922f1"
  },
  {
    "url": "assets/js/65.bd336e91.js",
    "revision": "dca389a4b2dd33633f4cc0643ad8405c"
  },
  {
    "url": "assets/js/66.d34d54f6.js",
    "revision": "eb0276c8635a3d36ac3aac95fde0db7a"
  },
  {
    "url": "assets/js/67.7d522e5a.js",
    "revision": "4637cfc22d4daa6c5b14fbb67d736a8e"
  },
  {
    "url": "assets/js/68.2667ff5d.js",
    "revision": "04a57805dd8b16ef8eafb30d46be4bf3"
  },
  {
    "url": "assets/js/69.2edb1e63.js",
    "revision": "9a629ad5c13d15d90fb3c762ba82939e"
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
    "url": "assets/js/71.93badaea.js",
    "revision": "5b9a85fa7dd66747d436b3b8f2dd935b"
  },
  {
    "url": "assets/js/72.12a8ae99.js",
    "revision": "8b31481b014a2df381106bd70ceb8289"
  },
  {
    "url": "assets/js/73.03fe6b3c.js",
    "revision": "bc79bacf41ff735d534c771316d184d2"
  },
  {
    "url": "assets/js/74.50d2ceb6.js",
    "revision": "4f8d9f3dabb91cbccf5dbed5952ae382"
  },
  {
    "url": "assets/js/75.49c8e0e5.js",
    "revision": "fdf81292ec4d302f47b0bb0549ef71cd"
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
    "url": "assets/js/8.9da0cf31.js",
    "revision": "44e3a5965369f98c1df6881a1c36a681"
  },
  {
    "url": "assets/js/9.698d3b09.js",
    "revision": "abc6d362c0228dcffb93a2462e3f1290"
  },
  {
    "url": "assets/js/app.b070b920.js",
    "revision": "b4f78b19af0f837577e9c6b78365a713"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "06df0db14c4d02f97054d2d9553aa51b"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "abbcb7d857ea3633e5658191f04141d7"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "044b388cd97b04f5268f51c7b2a49f56"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "eb8059f4c1f0b8e3858fcf43d5c881c6"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "b68724173ad4d83586fa7a193d8c2c5e"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "987e8404317be1e86b84c0693b2ffb1c"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "14122ca003b228685292774d1dd60f87"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "0bff5281cfc65521245e9282953d3a8e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "95536a7f86ddb2570d025870450e6541"
  },
  {
    "url": "courses/index.html",
    "revision": "72cc5054c90779cdf961018d0d191822"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "7d6ae0764361906d9d0b62db8af45a52"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "b62a270aa0f2864fafcfd4535d10cf96"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "a0e39497c0df18835fd89cb213fe1277"
  },
  {
    "url": "courses/template/index.html",
    "revision": "81566ddd06f4b3f15320cedb938e0838"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "aecd99eb984aead2f20a4fa8f22bbea7"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "293eb1250106027c802460777a45bdf2"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1acf3d00ab6df06201734fb734bbbac6"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "74037ee8279c7ea5ab9e5770a446d646"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "b789afa4c696a6e6e38c8675952df035"
  },
  {
    "url": "index.html",
    "revision": "4ac1f80f581d6bc92c0fb8136cd89e88"
  },
  {
    "url": "studyathome/about.html",
    "revision": "a331e0a1be9c77da4b3a499227d067a2"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "dd763e2e0e8c103853446c031d3f562e"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "8810ee805a9a15746cd1f9504af8521f"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2be512b27759ef12d620e009b90f1c08"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "dd68159fda74d368f353cf72694d2901"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "33261fe5d00de27931e817f0a2d9c0f0"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "e8f49573fdfc888a07b5e45a7fbe2437"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "8d3231dbd644451d94e65b16482735d1"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "99e4de8454c0a1c820585e3136b0aa67"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "7fc04e755fd782dec75d369ab9e6d349"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "72e68c5edfbb348d1d7df81c2cea21a6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "251609b47d95183176669870f6fcc5a3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "ca670cc4d1a6104b4613c031f2f569bd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "49bec140ae6c30e5a9bd1624f30d03f6"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "f03536d2d2bb0da40585b55efda812fc"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "c564628133b8758631295339893d1720"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "2f07d190e3af93e97c795c2a2f322097"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "7aaaa0479d889fe70a6aa4ca60c0b622"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "4c701e8c6817156583207dfee8c6415c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "4f0446d4c36b71501922cb801d5cde4c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "2cdf99fa461936b6a9811622d2d1cc2f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "84d6c20249ab6bebab6b9ea56819b18e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "539875a759a12de17b6127b0e2f7185d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "6feff5b8f1ee465959d8411244dc0aac"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "dd68159fda74d368f353cf72694d2901"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ed32381858ec4cdd46b24018accdceb2"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "c57e451a512018f202b8b08607195b2f"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "60d90cd58028dc95dc37190c5e70ef92"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "4cf3b3219a2d82c2c3a5047f2d776838"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "3c7001b09011d38e540c42aa3a9171a7"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "6f44e429ae6c08bbbeb5049562f3098a"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "58537ec3ab93c7a3567dec6ca8a5d366"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "2e8031aad80cd4eb62c35cc0379043bf"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "4c86a63bab049b1a3b32c3c0338acb38"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "eed220bb2c281ea39101ed9bc067ffff"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "d6bff06fb0cec5e66026533abe1fc3da"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "32727c87461b60796b40de2e69a6dc98"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5e7901cb20e0dc5d40fa7bad9ecba7d9"
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
