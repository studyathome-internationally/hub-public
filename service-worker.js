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
    "revision": "23cabce2568bf370bf400ea2fcab8fb2"
  },
  {
    "url": "assets/css/0.styles.4fe934b3.css",
    "revision": "732441355e1557ebda0022ca6b5caa01"
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
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.jpg",
    "revision": "01662dfd145e8afdf12e0916a2778791"
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
    "url": "assets/img/partners.82f515d1.svg",
    "revision": "82f515d1d6b00ca0bb96184a77e560d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-workflow-all-line-arrows-studyat.a377037b.svg",
    "revision": "a377037bbd71a298049598d8c7db81d5"
  },
  {
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.03f4c065.js",
    "revision": "3d03660eb48181d23026cfabae982a8e"
  },
  {
    "url": "assets/js/10.a2a24b7c.js",
    "revision": "cbfd4d30ef2f30462aa8a97391c2a045"
  },
  {
    "url": "assets/js/11.d0880da8.js",
    "revision": "670498a32f99645b61aaa70c84500eef"
  },
  {
    "url": "assets/js/12.d85ddc32.js",
    "revision": "aace98bb1a2a29207cd4a44569415c50"
  },
  {
    "url": "assets/js/13.5491f728.js",
    "revision": "a907f82457ee742307411c720986acc4"
  },
  {
    "url": "assets/js/14.85be5f02.js",
    "revision": "6bb346cd6ec8c0a327a1fcf3c3161ec2"
  },
  {
    "url": "assets/js/15.8397ff33.js",
    "revision": "5dc632a326ef835a9dd11850d03f70a1"
  },
  {
    "url": "assets/js/16.95ecacd2.js",
    "revision": "6917844868818e3c0695ef28553a3d0b"
  },
  {
    "url": "assets/js/17.9dd0da33.js",
    "revision": "f8c05c9e5913788fdb0a0c3813234e7c"
  },
  {
    "url": "assets/js/18.c1e1327f.js",
    "revision": "d65cd1c9b7fe42e8efd06806909dc2c2"
  },
  {
    "url": "assets/js/19.a1dda0da.js",
    "revision": "dd0251d44e7bbc0c72284de1a663cbee"
  },
  {
    "url": "assets/js/2.8fe4254e.js",
    "revision": "70800b2eb2aa3092040833b5a3d62692"
  },
  {
    "url": "assets/js/20.b49a7663.js",
    "revision": "bcb1c3867d4fa9803cba24443376956a"
  },
  {
    "url": "assets/js/21.0abc147e.js",
    "revision": "56651fa25fda971c65c3886b33db1972"
  },
  {
    "url": "assets/js/22.9f2aa440.js",
    "revision": "54fd81f89efe26bdc512c70c7ab673aa"
  },
  {
    "url": "assets/js/23.738131eb.js",
    "revision": "8b7676b7d87a81650a437a70277c47d9"
  },
  {
    "url": "assets/js/24.2ebb9ccc.js",
    "revision": "a576483fba635c1966e6623ab15ebb46"
  },
  {
    "url": "assets/js/25.917a085a.js",
    "revision": "368739f8c61eefd19940e33b6265e544"
  },
  {
    "url": "assets/js/26.b98b0864.js",
    "revision": "9e911e3466e8e95eead75fe3c433b181"
  },
  {
    "url": "assets/js/27.329cbea0.js",
    "revision": "97189d1f7bc4c5a4bec8f06090624c7f"
  },
  {
    "url": "assets/js/28.22cc4f4d.js",
    "revision": "5e97ab71b12de6ee57e5f3818ba0f361"
  },
  {
    "url": "assets/js/29.25dd543f.js",
    "revision": "93b2d44b0986109c97e2f7c04b4aaad9"
  },
  {
    "url": "assets/js/30.38d6429e.js",
    "revision": "e981deb0d9b558abfba16956b8d2b0c4"
  },
  {
    "url": "assets/js/31.43ed13dd.js",
    "revision": "7ca07da11a4302c0f6fdba78ab87b324"
  },
  {
    "url": "assets/js/32.b4d73ba8.js",
    "revision": "cd5281f8515d2b05ddc6af783f9592bd"
  },
  {
    "url": "assets/js/33.fea24d9a.js",
    "revision": "213d6d62b9346db6689ed6a3c340c0c7"
  },
  {
    "url": "assets/js/34.113227c1.js",
    "revision": "e302626959387348d7fec651a6f1556e"
  },
  {
    "url": "assets/js/35.f076e802.js",
    "revision": "393a6e197cf099d32b1382c188e6205d"
  },
  {
    "url": "assets/js/36.adce3d0c.js",
    "revision": "9372f8ac19eaa5c8284ff471624fd067"
  },
  {
    "url": "assets/js/37.fa7c17ff.js",
    "revision": "7713ec1ebc16ebb6bb3e2c58d7c57fc8"
  },
  {
    "url": "assets/js/38.54ded36f.js",
    "revision": "e2d3bf4d31dba30c37e4a7a9845bae43"
  },
  {
    "url": "assets/js/39.a7e75b56.js",
    "revision": "596aa50552370fa8c2f24a1f2e766ed8"
  },
  {
    "url": "assets/js/4.49d38d09.js",
    "revision": "704029859be55cf90ce8934f7a30290c"
  },
  {
    "url": "assets/js/40.2fe909eb.js",
    "revision": "1c504218b76c4808218cbdbc5366e648"
  },
  {
    "url": "assets/js/41.c72624b4.js",
    "revision": "f98e25dc8843d7c2fa18e07a4f8a6897"
  },
  {
    "url": "assets/js/42.1e2fa968.js",
    "revision": "a5c9763f9d17e5a51bc60347ecaa264c"
  },
  {
    "url": "assets/js/43.6fcb9baa.js",
    "revision": "af53aaef02291557e3ddb41a936b1ad8"
  },
  {
    "url": "assets/js/44.88744a59.js",
    "revision": "9b154041df00da48c166c65d20c0e646"
  },
  {
    "url": "assets/js/45.b85f3082.js",
    "revision": "828b0dbb3bba4e66e73b1ba2574525e2"
  },
  {
    "url": "assets/js/46.88f840e6.js",
    "revision": "a7ad3df3792baf210d6e689b5fa70d27"
  },
  {
    "url": "assets/js/47.e648b137.js",
    "revision": "23c66fd33692b625bc8fff9a994833ae"
  },
  {
    "url": "assets/js/48.2e3d288f.js",
    "revision": "98b1be6269f894ef48ceffe2cb6ad620"
  },
  {
    "url": "assets/js/49.44fef01c.js",
    "revision": "01c481e03791bb38552ada102322232b"
  },
  {
    "url": "assets/js/5.2d902ddd.js",
    "revision": "42cc03f9a2113e36d6e0788a288e529c"
  },
  {
    "url": "assets/js/50.77c6005d.js",
    "revision": "83e7896fc8dacb89d1fa7604cb17361f"
  },
  {
    "url": "assets/js/51.17f0c4b7.js",
    "revision": "a5be3c4f8aecf35d066f99c2263e7673"
  },
  {
    "url": "assets/js/52.90bac46c.js",
    "revision": "860a97c612440a6e438f43232baf8e50"
  },
  {
    "url": "assets/js/53.a6512729.js",
    "revision": "0f0fd01a740ac53e89d545bb53ae2ac6"
  },
  {
    "url": "assets/js/54.6eff0ad1.js",
    "revision": "a55ec1d052542665c8fc3db0b99fd0c3"
  },
  {
    "url": "assets/js/55.4173eb72.js",
    "revision": "d7e235fb92e7b086e3e1ae23abfaf32f"
  },
  {
    "url": "assets/js/56.f384b3d2.js",
    "revision": "9ebcae527c59f4709c58482ff858bccd"
  },
  {
    "url": "assets/js/57.6ea14d9a.js",
    "revision": "cc4ca6c62215f8abfdf565ba170706a3"
  },
  {
    "url": "assets/js/58.5fef11d7.js",
    "revision": "6060d03c15f9ec3559eac1b7eb4a1df6"
  },
  {
    "url": "assets/js/59.d6ab0f54.js",
    "revision": "6cefb6bfc34c76aed2b62aa00b6bc2b0"
  },
  {
    "url": "assets/js/6.2a12adea.js",
    "revision": "83644d12f2bc603b8f47f84cf3829194"
  },
  {
    "url": "assets/js/60.3ed306eb.js",
    "revision": "0a44d057e9b3f146a27dcd6050e508ff"
  },
  {
    "url": "assets/js/61.7ede9816.js",
    "revision": "d29202c7e2dae559d2890804ad8dacd9"
  },
  {
    "url": "assets/js/62.fcac76cb.js",
    "revision": "3aa68edba873547bafdda7766b3023ad"
  },
  {
    "url": "assets/js/63.36a241dd.js",
    "revision": "7167c7ce6a8793e8272fa8992eb5a021"
  },
  {
    "url": "assets/js/64.a02b5b88.js",
    "revision": "f992a33d02c30b1122096a04bc1d3f77"
  },
  {
    "url": "assets/js/65.d1f6d52d.js",
    "revision": "67d8aa0f90c274ba5d10c636e2951330"
  },
  {
    "url": "assets/js/66.4ead0eca.js",
    "revision": "4dc08d011d834f1627d5338b8c90948e"
  },
  {
    "url": "assets/js/67.0688dfcf.js",
    "revision": "86e138a409bbb3e7baa6059bb16e01b6"
  },
  {
    "url": "assets/js/68.58ed7208.js",
    "revision": "2f02dd3ce01cf0e83ae956c8b32221d7"
  },
  {
    "url": "assets/js/69.6b7cd390.js",
    "revision": "79cff9762d845898361140e546709142"
  },
  {
    "url": "assets/js/7.7b45b233.js",
    "revision": "fb254870392efd1868bad6a723337506"
  },
  {
    "url": "assets/js/70.50cd6ac9.js",
    "revision": "d34c14b5d5b7227d18d129a24cda7fb3"
  },
  {
    "url": "assets/js/71.c052b08d.js",
    "revision": "f4abc552b07dee2b429e11956857c033"
  },
  {
    "url": "assets/js/72.a27fc88a.js",
    "revision": "bc7a2685dd867c68e99d09973b2d5315"
  },
  {
    "url": "assets/js/73.c589245a.js",
    "revision": "c3628e0d99ee2a1fd20c91222dab9184"
  },
  {
    "url": "assets/js/74.b7e4db89.js",
    "revision": "5437410be565f4e9c52692ff2306fda3"
  },
  {
    "url": "assets/js/75.67731928.js",
    "revision": "7fb7cd3eb723827168b2defa8445be8d"
  },
  {
    "url": "assets/js/76.f0e69198.js",
    "revision": "848d9604563f536196c8c4a05dbe3fe8"
  },
  {
    "url": "assets/js/77.00501e5f.js",
    "revision": "bd9cdf0766f0ccd4f1b20ea8f5b17407"
  },
  {
    "url": "assets/js/78.3f534918.js",
    "revision": "ff3a1411565bda5c7fb00042918a7410"
  },
  {
    "url": "assets/js/79.45605366.js",
    "revision": "120f4282fe942567de52779fc5f22a0d"
  },
  {
    "url": "assets/js/8.3e042d85.js",
    "revision": "727da92991733e2c606da561dde92e51"
  },
  {
    "url": "assets/js/9.e088e972.js",
    "revision": "ffe8cc25becd6fa7a7117bdf57556955"
  },
  {
    "url": "assets/js/app.16848d76.js",
    "revision": "35e87ac92b0187a56ed84c2f72e34ef2"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6cb744e57b59ef00847597be0acff0af"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "fbdc1e627bc86a3cad7f45ef4883244e"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "6b4adb9e3d34f81404fbc6585194b96c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "50795054e86b908ed61f98be5eb68ec1"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "b674b7689cb6a4ee0f3c668896569f2f"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "7568e2ce48ad5ab53247287b30aa062f"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "1f86cabbbf36525b6eabeded95c3c60b"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "506bb5cd4736adaa9b9646d4d51eced8"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "6247623d2dd953340a89184f8df9762a"
  },
  {
    "url": "courses/index.html",
    "revision": "17bedc123835e44e488def1baaae4175"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "7647534a15aecea72e32ff87c3a9c245"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "88dc81a1f52de9e50a0c121b636d0e0c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "9ea5e6f7d9231ecbda70e6effaaedd77"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8fbd85d7a29046bcfcee05e67949bd07"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e9fd3e78a2bdd46e0292707e7f7b24a5"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "0cc7ff0d285394086ad6a1b3384bac4a"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "e245c93c526f07fde8c9da3c0ef507d8"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "64d3066a43f75592a53abacfc9641cba"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "3e6551ad215398ed27fa5958719956c0"
  },
  {
    "url": "index.html",
    "revision": "9cb55f909da0231d80c5608c88c15b19"
  },
  {
    "url": "studyathome/about.html",
    "revision": "0426167c039e1720da76f1bd62eced78"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "f0cdbfaf5c78d95bfb0d2f72ca8b1e01"
  },
  {
    "url": "studyathome/help.html",
    "revision": "c924170835341c79af125d452045465b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "894443c1e131c241843af47f9b72f4fc"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "23cabce2568bf370bf400ea2fcab8fb2"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "3b8d1558766ca688184c07904defa850"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "3fcd02bef11062adcab5409b16afad1a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "29cf83a964afae972aca6bf8d5fbfe21"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "de380f3ca61bbf5a760a396e8a89f9b8"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d5bf47e8e85c4ec10b3eba1b9cd5f13f"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "1c9dc44c847e33a7f1e7c52aa556b0c4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "8958c2b76e68979496409bee62623029"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "0c0ccc07dc566c2cc1d9a584ffe8f220"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "dd97d66b9529b7527ab585c12e7a03a7"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "bddc221a39471225698a9a4bb539186b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "0b91462b1bdca2e93cc1b5eb48cf4066"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "780d47f320c8ae0bd3fe45bdcb866648"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "cb8c7849e07e7f00932184bdf0ed5811"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "9d6c107d1154f465f7f11c2940b1ad4d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "8871ae7bec0d76211518729fd68afa5d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "24a06d7ab3853cfbbd55277b2e779ee8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "622de0e5256226f33534df93096bb2ac"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "6ef2737537c16d1102787826d2b76b5e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "917ad4e278149f415725bf4f2a2bb12e"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "bddc221a39471225698a9a4bb539186b"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "a018de89099a4c774cec99dc55381740"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "2213f4ed9aff66c6b9d4a7ffb1d8c1c7"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "0ffad10a8da7412af0fa90f798327b08"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "54f7f2ee0bcb91a84eeaf9bf730b6eed"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "8281bc225c1f406749c77ab091f6c082"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "383e975976dd8ebe394171d3ce82b7ce"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "33a46097a52cf4e8bd2427a535b2def0"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9e4cde66dc447ec79ec17c06a501b1b8"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c7052aad3172c23a2582ffd46cb99cc1"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "9760ec159cde86077bb92edffa436576"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "a7caf49534ad3d0c400d3fe2dd10ed47"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "3425bfe69c0f7588c7da98f106edb098"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "557fffbd270f4e1c61ede6ae163a79f5"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "3212c5994e76584dfa83e79952d48d4b"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "cab0786163bedc784ed21bd3cafe065c"
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
