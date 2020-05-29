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
    "revision": "79af8f022701891d927c3ded40cb2a82"
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
    "url": "assets/js/42.e4f3ae74.js",
    "revision": "2dffd350d4ec9cf42bf1e0daf9151729"
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
    "url": "assets/js/53.324f2218.js",
    "revision": "23e2b012550ed902672be97a8d84d7e3"
  },
  {
    "url": "assets/js/54.f994a163.js",
    "revision": "6dc4dd290e7f127b9fc528a2cba6c951"
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
    "url": "assets/js/app.b1518010.js",
    "revision": "dcb0a85d83295ffec73de703887cd1e3"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "b4842ea396d271ef59165fafddcaf6da"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "65f04ca64683788216a4a6def9ac7f87"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "e3ed4115ba84ddba8bbc7f9e6ee277f2"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "367e8abfeaf8c630d082a1ed959146dd"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "a83fd7ab0858e8aa7da17389fa7c64d2"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "0fe66750fbcbc439af45bab26917ff92"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "84f0c477c0924a20e2f649e5ce2c97cb"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "811fba0c7ffb6871ec908ea7910e89df"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "9b4967a9227c3061c3ae12e38a814bb5"
  },
  {
    "url": "courses/index.html",
    "revision": "bd1fe881fe15449b0b13adf1fc437d60"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "d1c77e9706a405de13af8169aff24062"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "1530d4434b7d50f7aa152531de9e0ecb"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "309174e14368e4014ae9b2014193fb7b"
  },
  {
    "url": "courses/template/index.html",
    "revision": "56685458572cf2569893d2b00adb4319"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "424343ad88911037332d014d04163451"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "fabba03e4d09d29cb705e4972e30799f"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "20dfc0e6e0124acf299a2158c8036dc7"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "1eeab5fd84ea094d58f4fc79cda6b696"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "60dd8a645514ef7faf220a7605818100"
  },
  {
    "url": "index.html",
    "revision": "fb692bbf1629f189ce16aa347f373ec2"
  },
  {
    "url": "studyathome/about.html",
    "revision": "a77cc5d7f05fd3f59a18b825426ba4dd"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2184b308f66cfa07619cd898d383805a"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "136b2810d4620fe5d74d629454e5836c"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "36583f849d7ada241dea41ecf374bcd5"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "53af7b316a04cc7f607d53f792b7d4d2"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "830be554627e3481584123f02be367ef"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "e3036d3df73d7d2e7bd4e22657d8e478"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "55bcf13bdf3327765256b433068c5ac3"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "3d158b0caff65240e56eb4c3389bf408"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "79af8f022701891d927c3ded40cb2a82"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "0d36702649500cb8f9047d3ce514d158"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "a73a0c43dfbb27b86639d4db9f9384b8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "cbc38e561aebd8a83626d434c5ed2890"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "ce2757ac4bcaf0e7077947672f8f69f8"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "53af7b316a04cc7f607d53f792b7d4d2"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "87b88bc811ddd56ded7df6b03d15fe0d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "4f26a33ce616632da77b98140219fbb3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "14bfd1b2995b3d4ccd66279b7890d2d4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "4837f1be5ab52c76be769fc5dcffd69d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "52d7ca6e458aafa694a52a36d188d791"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "9e2abc336ad09ee4f51590c07a857b7c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "8d6ff5f7b5da4c805ee08b4b3b7150fa"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "6b5a19590e72d45e8bdb49d0a53f9092"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "ff3ec4b78d74f28b5bfc257b7b01eb04"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "79af8f022701891d927c3ded40cb2a82"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "786d86365465de67a8181d8d7fa2e906"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "744006d8b396cecc8e49d47d1160485c"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "0845d2a6623aaa0f40d9adb1d33429a5"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "1b0fdb7e0d1d4606e70f8a2f071c5128"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "8127d961db35bfcbaa0ffcc5436c7132"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "55b48bc266989a6cb1391cd016fba8f8"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "805bd438df1a09d746b0d4f4569c9e15"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "ef7fb1c7cadc0ed1abd2c6f0fa1b990e"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "ec7bc63aac423c41527db1bd71024069"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "0e2ed84cf7a4d03fb0409b06e00d7804"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "d89a76c8c9eb7408bc514ef44cba9f64"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "ff32459804b1188ea4e987c34b410ddc"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "1b07802ac5340d64d028bd8cb745b628"
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
