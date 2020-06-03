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
    "revision": "92af6997b2e7b35aacbdbd4a03d99bed"
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
    "url": "assets/js/30.c3e8e174.js",
    "revision": "cb9b824c9bd67d9814340679d9edeb25"
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
    "url": "assets/js/33.20460910.js",
    "revision": "79504f6cbcad231d8d0194e978e06709"
  },
  {
    "url": "assets/js/34.f439931a.js",
    "revision": "d55c716681253d8386ddc43c88661fcf"
  },
  {
    "url": "assets/js/35.19a9df3c.js",
    "revision": "89ee5c47f33cbaee7a77d8f1fe9cfc6d"
  },
  {
    "url": "assets/js/36.c4d7dd54.js",
    "revision": "1bd59784cd731372c0c505c98ae108d5"
  },
  {
    "url": "assets/js/37.2252e8ff.js",
    "revision": "4b6b18267f48ec4fe56cc3888a2a8d86"
  },
  {
    "url": "assets/js/38.47eb5c08.js",
    "revision": "4bafcf99e9137b7d15f4cce29b302703"
  },
  {
    "url": "assets/js/39.7f3ea9a9.js",
    "revision": "9e8ac8232aca1e954b42842bf91e3a04"
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
    "url": "assets/js/41.ec76a474.js",
    "revision": "6ec00065d056b7fd0f8743013b4ad219"
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
    "url": "assets/js/47.49081e90.js",
    "revision": "b2c2c210f243581bcbb488d0c86e9b0f"
  },
  {
    "url": "assets/js/48.fc93f7d3.js",
    "revision": "7be5719e03ea923fdb9b9dec9ea0577f"
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
    "url": "assets/js/51.92feea99.js",
    "revision": "b1f38867796e0e918abd394c41fd1f22"
  },
  {
    "url": "assets/js/52.ba0333d0.js",
    "revision": "824ed400005a2c59e6a3f93afab63cd0"
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
    "url": "assets/js/63.d9631958.js",
    "revision": "95dffc38d19826795d93760f09755742"
  },
  {
    "url": "assets/js/64.18c81f70.js",
    "revision": "fb9633288a9fc8dd38404a98e66922f1"
  },
  {
    "url": "assets/js/65.cdc4ec0d.js",
    "revision": "5ce5fdd201a9445ec1c882dac2fb8419"
  },
  {
    "url": "assets/js/66.d34d54f6.js",
    "revision": "eb0276c8635a3d36ac3aac95fde0db7a"
  },
  {
    "url": "assets/js/67.2c8413e8.js",
    "revision": "c553aa0c5435bdb84002a6edab5e6129"
  },
  {
    "url": "assets/js/68.2667ff5d.js",
    "revision": "04a57805dd8b16ef8eafb30d46be4bf3"
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
    "url": "assets/js/8.e5992f1e.js",
    "revision": "e8287c860181347441816bcfb17c0b14"
  },
  {
    "url": "assets/js/9.698d3b09.js",
    "revision": "abc6d362c0228dcffb93a2462e3f1290"
  },
  {
    "url": "assets/js/app.35f43282.js",
    "revision": "a9262bcbf190af9a9178375ebffc393c"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6a5dd257916d3993e15e64f58e28254a"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "d5907a7f737f23ac8ec906f53cd6efc7"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "70f35d692f06e3352944c6d67c31a05a"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "dbfd7f69205847bed4afb112cb9581a3"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "222e6af024898c144f791d36d0735aee"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "27115ada44f18fa8ba5997f494a0cae6"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "81f961fcc2742d77235627e117b3af72"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "5f5ac5f4a84da9568960b2316a99d914"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "9b8949c8e37ee65141118d9457df09e7"
  },
  {
    "url": "courses/index.html",
    "revision": "86472a9df79be024c148743c3e92a2bf"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "5145623d68aef1392f8d1e004ce472b6"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d27487bfbbbbafa2b8447bbbac49232a"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "e17b803da475b57d911db5139dffc569"
  },
  {
    "url": "courses/template/index.html",
    "revision": "29e7db218332d63423a536328d929720"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e18a4b831994fe393bff8bb69d415fd6"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "6d354cd8f719a4849ba446e6e7c1f23b"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c320e79ccac6ddab819ac965d1457e8f"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "f42479c6e696a78f2a85db4735126424"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "9f0bec5fa042a7e2b41c89365fbd6392"
  },
  {
    "url": "index.html",
    "revision": "30d3bb05f689f411a446823ac9adb294"
  },
  {
    "url": "studyathome/about.html",
    "revision": "624270ca1c540c7f2726c3ada5db6e3f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "cc990f7a89ae5f4bccc93ff2440e9023"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "6a7d4ff508a1410a49d49b0ac79f204a"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "8f2fd2ae6f8683eb859e3b6fd2f0b5a3"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "92af6997b2e7b35aacbdbd4a03d99bed"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "57be430f38f01358bc4c790318f3befb"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "f0d50a6fb126de5d2edd82b3485522de"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "b3c609f0ce3d1869445c728a944c2658"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d695ba5a7f74d6325a54fb87d21084d4"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "4ee5a5c6173e0fd648a4b1095429c6a3"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "7114ff8324d4652ba626ce7c9c8fd1e0"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "6dafecbb82a72ca18abf9e2b1f1cddb4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "8df6e74db2774e78a20874f92319e372"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "03601768f0d47bd6066dfa859a5add6e"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "92af6997b2e7b35aacbdbd4a03d99bed"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "662fe824933e17904c9dcb9f6f66f0e6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "82828abde780cba07c49141a21c04952"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "337c0044fcb4e52f98e1b09fd67fb8a4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "a56923166ffc0826ccc5f89fdea1f8a8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "1a051330ea93967244df7f12feb9c1ec"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "e38e933ec8e448027f310c9274ff8586"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "6fa2a3433ae7e39e4e87913ebb1f6aec"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "b27c08901c5aa55d56f9b7ed7db05365"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "58574007e3b33088a3f9e774e7c66003"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "68c438d56499323718723f3ac0763b62"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "aaab48e6f30ad7f36912de976ffabcbd"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "603076c43e2d8ee5699e80bfb2ad36bc"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "9b2c6ecefe82d17a8435a36b22e10b2d"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "aca198de85f2ab827cb01487483c92af"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "7e33dc0514b25d8e2f8b886cc1e5e3cf"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "2784e2c7d950d0eb4aab6b852ed33a24"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "2ee1c8e17e9f73569f1d7f303ac9211d"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "23ad533aa39f9be78ce235bfd9ed0ff0"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "3467b0e9ac74dd0f743661254b189ed9"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7b776469beda17b3b8ef9a7bc3942753"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "b61b2729bddafaa91e39cb012a55100a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "5cc9e13c46e0e47c035e5fe07fff4b43"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "4463a79c6a78e75d688847655ef2964c"
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
