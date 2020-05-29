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
    "revision": "5ac67cd509f6263c5d9879bfc5e56bd8"
  },
  {
    "url": "assets/css/0.styles.cb81923f.css",
    "revision": "0eb5c4a3e98e53a7520ffaa59a4b71ed"
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
    "url": "assets/js/11.a3450bf5.js",
    "revision": "2804d38c5c9d8d29dc91a7846dc41369"
  },
  {
    "url": "assets/js/12.6e64a003.js",
    "revision": "55bfb634f726ce9d36c7dd542416625d"
  },
  {
    "url": "assets/js/13.464c8099.js",
    "revision": "f66d0564e159fd014eeb5bf463a0ec13"
  },
  {
    "url": "assets/js/14.b0b95e10.js",
    "revision": "401e41bb28f6d92a2d17e2d56f5e38d9"
  },
  {
    "url": "assets/js/15.f34a7252.js",
    "revision": "e3e66abae3647f020f57771cc0c41ba5"
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
    "url": "assets/js/20.5e29d424.js",
    "revision": "46fcbdcce03d95c81d25287dcd0879bd"
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
    "url": "assets/js/25.4c80cf10.js",
    "revision": "5850e43ae54b09eb2e58260b0cb3ab2d"
  },
  {
    "url": "assets/js/26.d5f60270.js",
    "revision": "6c15711fc92b5c4194c8f6ebc66d3ce0"
  },
  {
    "url": "assets/js/27.4aa1091f.js",
    "revision": "44564641a6d5dd8d2f08d0562d2e4e42"
  },
  {
    "url": "assets/js/28.d59d348a.js",
    "revision": "f7dea6ac30e2b8090afc006066bc8ea9"
  },
  {
    "url": "assets/js/29.6d737fcc.js",
    "revision": "13ac453bf2a78211f56d9c4a586d3a5b"
  },
  {
    "url": "assets/js/30.e7a5d852.js",
    "revision": "7ffbc178e9d9652e722b9644b60289b3"
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
    "url": "assets/js/37.5a1e4fa0.js",
    "revision": "cbe7c64a77f363d7f480e5c21e7e1533"
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
    "url": "assets/js/55.0065ba71.js",
    "revision": "837fad4de4bae7bd2e25238687bb26b4"
  },
  {
    "url": "assets/js/56.dcb93770.js",
    "revision": "5dbb8285ad642019b211b600dbd1880b"
  },
  {
    "url": "assets/js/57.5c03e0d8.js",
    "revision": "586e1da15936738ed2593703e0eeb94e"
  },
  {
    "url": "assets/js/58.ec103fa7.js",
    "revision": "317477b14e5fc6ab0d86bb1a668e2ad4"
  },
  {
    "url": "assets/js/59.981b004c.js",
    "revision": "6ede81c6e039355bdd2984550f411ebf"
  },
  {
    "url": "assets/js/6.6829c2e4.js",
    "revision": "1da4ce749cf5c0314dfadbde8d20f5d1"
  },
  {
    "url": "assets/js/60.92ec483e.js",
    "revision": "e1d372562341fd2a3e403b69143cbf25"
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
    "url": "assets/js/63.ce66be41.js",
    "revision": "406495849c788c882e8d6ad952eb3c6e"
  },
  {
    "url": "assets/js/64.64e60365.js",
    "revision": "75a7260a24aee1377f2f2d99893a56a8"
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
    "url": "assets/js/67.5b20cc4d.js",
    "revision": "f490c8aed5e92ef93519b69eed556986"
  },
  {
    "url": "assets/js/68.94d369a4.js",
    "revision": "518844380bff049bd63913d9e541a5ea"
  },
  {
    "url": "assets/js/69.2edb1e63.js",
    "revision": "9a629ad5c13d15d90fb3c762ba82939e"
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
    "url": "assets/js/72.9a87c019.js",
    "revision": "2cb35e9e1118e9433fb30e81bc38f3d8"
  },
  {
    "url": "assets/js/73.d7221119.js",
    "revision": "3e26456b9761da2a2f2fc554d578619a"
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
    "url": "assets/js/app.70cfe2ce.js",
    "revision": "a8e20e627fff7ab91ca86bb5e4ec1314"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6e3cad8f75812eca35d99bf7ea48c939"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "cd11afdf8c21d5b6a776d4256a4c4430"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "b1da2d2f3f17f16a4aff411f697c81c5"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "4f036a78c83ceb79b6f5531724b55010"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "baaf8b40fa0ac9f32f2cd948c63120d6"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2a0ac7a4738d14b52d98f63742746c30"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "306108b96ccb340b5a4ae16e352ef5ca"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "da8fe39febbeaaf1a4dc65c7c2298319"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "986a6fc13bf36df8000e3a444ab54fe7"
  },
  {
    "url": "courses/index.html",
    "revision": "93a5821718c88279d8e5f99fea035e8e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8134cc9c96e92174085310eb0f2f78ba"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6e370b1fa9a9f6155fab0ecebd3b23a3"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "f30b40c349ce8c036b90f1f908fb39a5"
  },
  {
    "url": "courses/template/index.html",
    "revision": "042ba67a776e1ae18cb529cebee4c522"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "8f76a0994c56a5fd27141d9403ceee73"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "899f5a1752fdf21fabebbd25aa18726c"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "569533c9b24092c632bb501512c71335"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "be9db8781bc547b8de986b7b804bbc41"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "0f554cc282192bd2f6a565fdd2accb1d"
  },
  {
    "url": "index.html",
    "revision": "85601bcd83c6ce2a5f95f4bef2940925"
  },
  {
    "url": "studyathome/about.html",
    "revision": "4c9d6400ea35ce98f30291806301416b"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "c08e91153a49610da310f4604603ae53"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "c845be31ff76100028f8ddeb215f6644"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "770fd9d6136d91e252618fbe5601ac81"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "6bfca9431319876c273c441617a9eaaa"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "4634e68bd09abda1151a0e06823474a0"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "3a06fa760dd871d39832336b55b5aa33"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "39d91ebc7ac5d88f81eb4c75ea2309f5"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "fae57efd38d05c00db97eb847d8aaf2c"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "5ac67cd509f6263c5d9879bfc5e56bd8"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "0880a72375b1591784160988ca304659"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "9dedeffce552a26cebf8c03bd03064a5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "bc783da9f5ced4d6ac8e6750dbf521fa"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "9b15fb971c36ce1eabc6c9633fb59f51"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "5b168b39e8539d3222f819655d94b183"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "20f0091090291030e6ce26cfe1f0c291"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "c897be2e1b957ba7cb48b7797cb83b82"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "7b0ed69640b2223b90339f8d89426cd4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "8eeceb6f7e88777ce13ad4027d67d01e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "071e3fb0125164125770022ef6a13ba9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "7fd6993df12ce7f56c3eaa39e9956a2f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "fba0f52adb5e779b031a49b87e5a1286"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "ab9516d570d436cd7865e28e103cbdfe"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "aa6fb82b3b8edf046479147a7e4bfbc2"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "5ac67cd509f6263c5d9879bfc5e56bd8"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "effa77db41ddfc014aae9ed6924baa59"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "6efd9de8663caa5a8c3444de422cd7b6"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "ba7be9bc669024423cae30098eb6a5df"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "022ab8caca8c71cf001556d74de08605"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "f6447906022aa03bf2b83681ac2cd302"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "a564afabd0c383f3c612ae1d7ad68d6e"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "bbe2b10f46083ec092ffaf66b2fdb3f5"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "8d1694b269a220f48423d5ad4106e4da"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "ffee25b0597cc7052fa8b14e2cea7ee1"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "d909a084e61451818b8ef6b836a7f5dd"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "9a55b629f91382a94329f70b76602667"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "ddcfe39a17caeeac7c947186464df44e"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "d8650492c99ad7e9b6a25e68da31846a"
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
