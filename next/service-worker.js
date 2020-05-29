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
    "revision": "fdbfa9ff0ffbc881ff5f43deb8f54b90"
  },
  {
    "url": "assets/css/0.styles.8a1b627f.css",
    "revision": "fd971c0f9fab72b86d183daf7a0c8617"
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
    "url": "assets/js/1.ff1ecd37.js",
    "revision": "579c0a84a178ebfd3d5ac876522d23a8"
  },
  {
    "url": "assets/js/10.0ddde64a.js",
    "revision": "c96ae8c208eaf7cfebf233aa0cf23a5f"
  },
  {
    "url": "assets/js/11.eb9e482b.js",
    "revision": "a9d0dabee3136b02b127261a126ae6c5"
  },
  {
    "url": "assets/js/12.6e64a003.js",
    "revision": "55bfb634f726ce9d36c7dd542416625d"
  },
  {
    "url": "assets/js/13.6e510349.js",
    "revision": "70aa98ae15d3dc496b58b2d35d047502"
  },
  {
    "url": "assets/js/14.b0b95e10.js",
    "revision": "401e41bb28f6d92a2d17e2d56f5e38d9"
  },
  {
    "url": "assets/js/15.fac7ce85.js",
    "revision": "d005564730f6172655ee5b39736554fc"
  },
  {
    "url": "assets/js/16.634bb68c.js",
    "revision": "ca501e6a6f8804e02e36e57cb5a9448b"
  },
  {
    "url": "assets/js/17.4322dd34.js",
    "revision": "7adec3342c8daa7ca1178f7e14c7ef71"
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
    "url": "assets/js/20.b380d4f5.js",
    "revision": "68464f5aeb2a5cf6197b74bbf979cbf5"
  },
  {
    "url": "assets/js/21.b319ca75.js",
    "revision": "2807673ca197c6e5aa87843d6676aab8"
  },
  {
    "url": "assets/js/22.db6e9a46.js",
    "revision": "86ce193f8046cc28ab0f4de7348a08de"
  },
  {
    "url": "assets/js/23.8eb5d86f.js",
    "revision": "df4f6c244a1179776f8ad58c04b069a1"
  },
  {
    "url": "assets/js/24.045529c4.js",
    "revision": "1debdd3adb846b65fcf5bdfd8fb6564e"
  },
  {
    "url": "assets/js/25.bbaa0888.js",
    "revision": "5087cf0c3aa22b832ec59d90de5618aa"
  },
  {
    "url": "assets/js/26.3fab6ff2.js",
    "revision": "4de271219015f97e4fbe1654d9312c0e"
  },
  {
    "url": "assets/js/27.4aa1091f.js",
    "revision": "44564641a6d5dd8d2f08d0562d2e4e42"
  },
  {
    "url": "assets/js/28.6a97eb2a.js",
    "revision": "a64568ca43ced54a3c198721bef15442"
  },
  {
    "url": "assets/js/29.9e7fffa5.js",
    "revision": "67d7762a93ad6cf3872c436c130031f8"
  },
  {
    "url": "assets/js/30.7c0cc448.js",
    "revision": "fd5bd17b0a6b2e6bfa82a3f7afce1b7b"
  },
  {
    "url": "assets/js/31.98f78a54.js",
    "revision": "96aa0860d74cb2b5439deb5563f42c1e"
  },
  {
    "url": "assets/js/32.845822a3.js",
    "revision": "33a88ca3e9aa7c9417c38da7e7c2e8d1"
  },
  {
    "url": "assets/js/33.65c1ae0e.js",
    "revision": "68f81201622c7b59b19b0bb59e4740c6"
  },
  {
    "url": "assets/js/34.964173e8.js",
    "revision": "da09466e111abecd1048e3a17934ea68"
  },
  {
    "url": "assets/js/35.37c9318b.js",
    "revision": "b6bc09270d85ab7a204e8272af05845f"
  },
  {
    "url": "assets/js/36.b8c8c1c9.js",
    "revision": "a802317f49802ccb6cbdca4473b26d70"
  },
  {
    "url": "assets/js/37.53a94dc5.js",
    "revision": "dc4502ec41415b78c40147beb7fb5656"
  },
  {
    "url": "assets/js/38.a7eba8d1.js",
    "revision": "7a9ccc48a08d5b1ec685bb55c51de52e"
  },
  {
    "url": "assets/js/39.78561e1e.js",
    "revision": "8a8390c967bc9484e830ad80c7f535c3"
  },
  {
    "url": "assets/js/4.93fec7c5.js",
    "revision": "a7b6e730e4b27cb9bbb254b344975c71"
  },
  {
    "url": "assets/js/40.4dd4f3f1.js",
    "revision": "1e49461648eaeec3845336bb7004c517"
  },
  {
    "url": "assets/js/41.c0e39148.js",
    "revision": "e0af5aeabab84f0fe6b2def6d07ea4ca"
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
    "url": "assets/js/44.130a5423.js",
    "revision": "2c24ffea5cf359e9f278c92d42fbc2ad"
  },
  {
    "url": "assets/js/45.2ed46a22.js",
    "revision": "1a724f2f61682f103550bb53c711cb28"
  },
  {
    "url": "assets/js/46.044f82d6.js",
    "revision": "0609a613f0f7e687f94f4b61465684e9"
  },
  {
    "url": "assets/js/47.e60ce3b7.js",
    "revision": "c9cc4bb0f03833c97d5d6a4e4cd986f3"
  },
  {
    "url": "assets/js/48.fe676255.js",
    "revision": "702d327a99e28219da82da7ac5738b76"
  },
  {
    "url": "assets/js/49.be38a82b.js",
    "revision": "27c97a8b460890b6e788fa634ff775bb"
  },
  {
    "url": "assets/js/5.3568ad65.js",
    "revision": "d335ff5cfb853c1f0c50828af35f6d85"
  },
  {
    "url": "assets/js/50.be56cec8.js",
    "revision": "3b7377a3f84ce2a8306afae4ce75341e"
  },
  {
    "url": "assets/js/51.8d6ad97a.js",
    "revision": "b3fe64a265446df11d83702c2f7196bf"
  },
  {
    "url": "assets/js/52.c268e343.js",
    "revision": "4d10c70433eefb530d0fa3370b2676be"
  },
  {
    "url": "assets/js/53.bd1a5d8c.js",
    "revision": "4950254f88dc4604b3767e2483b9f702"
  },
  {
    "url": "assets/js/54.861bd2ca.js",
    "revision": "c95a214afd1e98a5fc3e23ce0ec67d6f"
  },
  {
    "url": "assets/js/55.a660152c.js",
    "revision": "19d89d543615e7dde936df45410083c9"
  },
  {
    "url": "assets/js/56.4a81d7ef.js",
    "revision": "8a45ca1ecb1e98ce608bd68720a27a6d"
  },
  {
    "url": "assets/js/57.d949b291.js",
    "revision": "b382d61f4051404d4c7f15dee3dd171d"
  },
  {
    "url": "assets/js/58.44f3ba6c.js",
    "revision": "84b4428503b588cffb218ed648c8f4c1"
  },
  {
    "url": "assets/js/59.fb3ec308.js",
    "revision": "7c58e3e43c3954ddb541df670e82dbe0"
  },
  {
    "url": "assets/js/6.6829c2e4.js",
    "revision": "1da4ce749cf5c0314dfadbde8d20f5d1"
  },
  {
    "url": "assets/js/60.004e3207.js",
    "revision": "977a160f53d3c1c32e1bf3abd076a9df"
  },
  {
    "url": "assets/js/61.896062e7.js",
    "revision": "ea55eefa3d2d18dbcefd64f216f97d29"
  },
  {
    "url": "assets/js/62.fec1687a.js",
    "revision": "d2ba5a11c9be4f39e140dcb34976a603"
  },
  {
    "url": "assets/js/63.c360d931.js",
    "revision": "406a0087dccacb627a5d47cda1341ebd"
  },
  {
    "url": "assets/js/64.b7c4e534.js",
    "revision": "1f39a049a2ae40e52b777cfc73dd03dc"
  },
  {
    "url": "assets/js/65.15d1bd79.js",
    "revision": "72f8a70e0cd3db5319865a22343fffd3"
  },
  {
    "url": "assets/js/66.9f86f072.js",
    "revision": "0c9cefe00a0f0e79171da52a8e1dace7"
  },
  {
    "url": "assets/js/67.2c8413e8.js",
    "revision": "c553aa0c5435bdb84002a6edab5e6129"
  },
  {
    "url": "assets/js/68.bf6dacd6.js",
    "revision": "b0984c02489cba179cabc49bc7230f46"
  },
  {
    "url": "assets/js/69.9e9ea4dc.js",
    "revision": "3d7a557a132d870fa64042f5db9c6db4"
  },
  {
    "url": "assets/js/7.6baeb5f9.js",
    "revision": "0712d83e3418a1e93e3657facbb6a22d"
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
    "url": "assets/js/74.1215e44d.js",
    "revision": "c9a4cf59173bfa377d1d74e7fdf1a86c"
  },
  {
    "url": "assets/js/75.18e8dc03.js",
    "revision": "12dcca39f1eed237647e8859ce4d075b"
  },
  {
    "url": "assets/js/76.56ab7b4f.js",
    "revision": "db6109f1d2b8c6f95853e11bce616003"
  },
  {
    "url": "assets/js/77.6505f198.js",
    "revision": "5df9c496357ac4779efd65ea734762e0"
  },
  {
    "url": "assets/js/8.cc0bf621.js",
    "revision": "1ba5ccabee546b7ee41c74177aec9e30"
  },
  {
    "url": "assets/js/9.f1e4cc2a.js",
    "revision": "d20ac74a7ac2f2b3b294ec059b477f99"
  },
  {
    "url": "assets/js/app.e0221120.js",
    "revision": "be4b555e2f29fd26b2d33d17430a22e6"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "b3f1acb9e5cc4d3f38ee4c3115221926"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "30e9e618365026f9928842ee615face5"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "f1f9c945a665db1c55ca5bd5d2730059"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c6c31481efc3a4d8fe82bc2bdd6d1a9f"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "14dd1ee94c31d5029026378d5751577f"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "fb5be681a9f1633c6e19ed4b7becf45a"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "ebfa67e4a53ae6b44f735df1a223c2cf"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "35022b75540a02d1ae1d54963864dc8a"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "b56d5033efe115593e7f89e22635619e"
  },
  {
    "url": "courses/index.html",
    "revision": "8cd47858779394eb1ee3d06b4e3121bd"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "ca220c39d797eda68b0152a2d6b5023c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "93e5c6e4fdbc081104fa18f7809cab24"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "edd2064706ee28ddcd2f2ee44380a5f7"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ad4788cffb54c32f264f455612d7b601"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "57ef89989b296cd60b36ffeffca55d70"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "925aa0b61c4cd7c13bb5ba386f999f49"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "0c807e4d0fd17a8a2fc4733530678605"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "aa2cfa38f82b18a3729fe0478068b387"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "47e587ba141075c28de58b7974f9137e"
  },
  {
    "url": "index.html",
    "revision": "c2ee4665e27c84294025748f16c24f17"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d910568d2f0b63a7a5e41051ee5ec1bf"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "d9c888e53b39439f7ef33f3b9ce46471"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "701527c67a116392f3ba99896d563bc6"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b364ef532ad1f2baa5379c7c53ef08ca"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "97bc36f354d70a09dbd30ea5cf974f68"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "62c1b7fcceb54f87f2cd6fb701472192"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "d89122d5b3fb67c88c089b5d299adb6f"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "e780362fb3e25c54a7d9f786c36d07ad"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "627ebc6926054a3ad3c46c0c38f24da9"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "416fea73183feb2d779af9b96f31cf26"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "3fb5de0b346edfd6bf2f2607e348f604"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "eb0d028ae6b398f86eeba9b64da1e4e4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "67ab539e394248bc2687f19a874c564c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "3bfa14a18532f784577326eb4636f26f"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "fdbfa9ff0ffbc881ff5f43deb8f54b90"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "65e46c21007ac6676d50aafcc18d9517"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "4faac86c2944d185fc3f96a942a39eeb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "c10b6029b5f7842dc702d6b6342944fb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "13b57261ef37654e6bc8e9a9321037c9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "2d6f4e96ade34911c1600fab639c642c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "7c03ce6d5f5be808e004884546767aa9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "4c130259c48f1ad3a5ff851755d92405"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "a566d3a2d394e2b4d39fe5f4c8868b49"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "f0a51cf29e14ea6689d7696ee73e2488"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "97bc36f354d70a09dbd30ea5cf974f68"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "8493286cfce06d5a9c132936fbddf686"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "528fc8f1c572d4a24446899cf18f6fb8"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "f547846b7b6f30d2ca0c0944e5aa9509"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "5c93e1d9c09a347dd21bda0b698dfbfc"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "7c1b9c2eb4f3f46023e368bc6a9d0f78"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "222368e9e0347da0b78f6de25cf664f1"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "839553e406fdf39898e5ffd0dbdb5feb"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "1fc1897ec65c9e96f19a395b89f7557d"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "522b05828289c5f6dd61ebee420bb456"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "c8fae074f9be7916a00bb1e870fb09db"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "990251d2980415a519633fe002f969e8"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "7a1ea790e41aed6dce9e7720e9bb3aee"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "e2c2c9e73f4cc0d6b98c680c2fde1bbd"
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
