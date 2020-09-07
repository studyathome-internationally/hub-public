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
    "revision": "c727e719c3d538d2812ac0874c26ae62"
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
    "url": "assets/js/22.4f765dd0.js",
    "revision": "0f60a948b5d6abadb9e1142262840af6"
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
    "url": "assets/js/27.4d493871.js",
    "revision": "7f65546354b9d398be4d0451237a474e"
  },
  {
    "url": "assets/js/28.c1d22f29.js",
    "revision": "5a128cddd06a6b042c202ea1462e1c71"
  },
  {
    "url": "assets/js/29.e8a6e9a0.js",
    "revision": "e3be3a0d1747e9b74e3d3c93e7dbd1fa"
  },
  {
    "url": "assets/js/30.a2e77ffd.js",
    "revision": "0808520ed4569db00247293809d88a78"
  },
  {
    "url": "assets/js/31.a1b2cf56.js",
    "revision": "036f29142068105412b327612430e9aa"
  },
  {
    "url": "assets/js/32.8087d736.js",
    "revision": "2475d915c1d36b1d6ae0b5f51670dfe7"
  },
  {
    "url": "assets/js/33.266d81a7.js",
    "revision": "325865c0281e637ea7ab34b82126fe01"
  },
  {
    "url": "assets/js/34.f0fa214a.js",
    "revision": "99e8d2264fad39a8dbc8495f024f2cf7"
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
    "url": "assets/js/37.e48c4ad0.js",
    "revision": "03b8a035574536e1b2223bac491dacbf"
  },
  {
    "url": "assets/js/38.ef358b2c.js",
    "revision": "4c265f5a7970098bdda283cf233118e2"
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
    "url": "assets/js/40.4ab241b6.js",
    "revision": "f2cd24300949993e380b6b2c94f272e0"
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
    "url": "assets/js/46.0cfe6567.js",
    "revision": "a5c7abcd9406de2b50abf66affed4adc"
  },
  {
    "url": "assets/js/47.03333ef1.js",
    "revision": "57a2d5debf6320405ae2867c27f346e6"
  },
  {
    "url": "assets/js/48.8730156c.js",
    "revision": "79cbd12f218b2efd407684b2692f435a"
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
    "url": "assets/js/50.831ce90c.js",
    "revision": "570855dd43a0e6a2ff981f28a7c13965"
  },
  {
    "url": "assets/js/51.92feea99.js",
    "revision": "b1f38867796e0e918abd394c41fd1f22"
  },
  {
    "url": "assets/js/52.91e5807c.js",
    "revision": "88dd46ee2b7faa85b867f8ae2f5824ef"
  },
  {
    "url": "assets/js/53.c5d481bf.js",
    "revision": "cdca8068ca83ef9bc1dea4e5979ff48f"
  },
  {
    "url": "assets/js/54.1f7fe25d.js",
    "revision": "6b42fb37e1c82aacf3e9224032790f4f"
  },
  {
    "url": "assets/js/55.b03966c7.js",
    "revision": "11c44d5b9611e83d91eb7eac80008f36"
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
    "url": "assets/js/60.3c8ae8e5.js",
    "revision": "0bc57e1da32c0b03a190448c6c41cf27"
  },
  {
    "url": "assets/js/61.a35e335d.js",
    "revision": "48ef00ad846d9c4e7f2ff3b3199be457"
  },
  {
    "url": "assets/js/62.296921f5.js",
    "revision": "25557cc12e37ca0e0a24afb36a241518"
  },
  {
    "url": "assets/js/63.270768bd.js",
    "revision": "90574f83a7b1efbaa3a2825fb8a0de0d"
  },
  {
    "url": "assets/js/64.e9c250fe.js",
    "revision": "3c2ad59bb365e02d9122cd34ac591bc2"
  },
  {
    "url": "assets/js/65.ddedd8a1.js",
    "revision": "bfd09183ab71a2a012ce86dfd3c33c27"
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
    "url": "assets/js/70.253b485b.js",
    "revision": "0326c638613a190c718146634c429015"
  },
  {
    "url": "assets/js/71.a6a4e520.js",
    "revision": "aa109b5f3bc039a53184ae9af37cc1a0"
  },
  {
    "url": "assets/js/72.c7d590e3.js",
    "revision": "2564718294a3784ebb2a40e7d9ad2fdf"
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
    "url": "assets/js/app.01a35e8b.js",
    "revision": "c0764f0da47c427cb0bfb8ad7260c4e8"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "9d529db8cfc633e8cb1196576c71c558"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "34c57bea62501875b50fb09047e15fdc"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "16ccb70c25790b2cfc277c8139832555"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c416b4c284c0261a6c864dda1bdc131d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "d318e26c5a56939a21c3ed66a34ae5aa"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "aa9c02f0c9e4421316fe34b175056128"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "98277bee8894c66d2cad1e6dc9243c26"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "49ac3976e9692d925a06585b59ca30fb"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e2f1b1ae14fdb9f2ce2dbf5b2c05ebb2"
  },
  {
    "url": "courses/index.html",
    "revision": "5a694d3bc0730083b7073f2fdfee3484"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "468aaae68bb907545583c8975975faf7"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6a0f766ada96361d04b7bf2c6d383532"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "5c3d344d641b085de946ce1bedfb8142"
  },
  {
    "url": "courses/template/index.html",
    "revision": "90d63e9f5c94ec37924406ff8ce166a2"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c851128eeafe445d13771e37830d99f5"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "e7845d43682dcd6d11db3259c74e5206"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c6baf877efe953595e9623822e98efdf"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "7fa906bbbdba498dd352df08e6633b48"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "61701b4ee1769fbb0a6a2fb94c22fef5"
  },
  {
    "url": "index.html",
    "revision": "87b2ac092cd7dfa6ae8ee4f485a6feb4"
  },
  {
    "url": "studyathome/about.html",
    "revision": "2cf690a9d3c98fd7ee0be8359c148ce3"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "e946ce6b244d3be113d115326587aaeb"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "02f2239d141b99a9c932ac735c991f6e"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "d9c528e8edea37c803a467602f46fc63"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "c727e719c3d538d2812ac0874c26ae62"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "6696eb011770bd4827ff0d2141dc31b3"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "c19fab5fa1bd4b1aea6b6503d4a9db04"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "f9ad5ba76152977851d80ae6bde82676"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "62f823700e02bd38ad0057290026d2c8"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "7be22d9d32d07ab65999521835cff80c"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "183cc62fb9369a56dc6940a53a0f682e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "de9659d5d2bec923fb2d496c5ad0c34b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "aa301260ecfebbb607d4a1263cdf9323"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "b7cf2e69875d0f388c84dab769ab6c71"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "7be22d9d32d07ab65999521835cff80c"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "9efa7caf2ba098bb9ba567bec157ea52"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "77226572888f2827078d4c75b5220988"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "e8affe645018fded65faffe573ade6fa"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "3f045dcdc97609ccd23b0f133fbc49a5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "0e20a20a64fd29392e5bde0d1df332e8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "ac04ec3aab24cc8d9f4a3d4cbdb69fb9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "8038283e8659976df34c3016e2e457ae"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "554b6a68757c22b31a033ee7224adb81"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "551d70674b68c5c4f84314a220f95d4e"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "870152f89d8b8c075d3f6086a2454533"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "da3bd5e96d9e2f886d15ab4b29aab69d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "5abc910fb28a58b393f6053abebe7bf0"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "8fd3234e8bd1d8f5277d934319e2f62c"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "3f77f3097c17fa27252b3b7a9152c994"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "af25f390eae80db82e031c54f6e23b66"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "7501fe3ac79c3280aa072dc9bb39fb83"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "3685b774b9e9faba3a1a6e79070ed0de"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "af225caab48b78ded85ffb95675849f0"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "6cb5afe163ce7f8f9f214b7cc6571398"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "e2fdc86936a7178e4fb39164cff7cc49"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "d5fb54edbe3bf2d0c505dab02c317fdd"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "10fcc03c138095d7bd9e60a9b9f0c31c"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "bded1711b472db9811e04ed28547a1f3"
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
