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
    "revision": "ea77d143e2e92e84b16ea7665e609427"
  },
  {
    "url": "assets/css/0.styles.a80a497c.css",
    "revision": "8ad41efc71589e1cdd4d8b37a149beae"
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
    "url": "assets/img/courses/digits.jpg",
    "revision": "6c19eec6f3f28e275ae69d4fd4c15a39"
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
    "url": "assets/img/partner/uastw/lecturer/christina-hochleitner.png",
    "revision": "a4886c1c14e25be6bc7ccd079a1be157"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/christoph-veigl.jpg",
    "revision": "856a73506f666454dca2b3019a41fb2a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/iris-nemec.jpg",
    "revision": "dd4e5c5edc011d186edc2f274388004d"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/lukas-rohatsch.png",
    "revision": "5afadf2709eabd8ff96ba05d0e7ad0f6"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/martin-deinhofer.jpg",
    "revision": "f02da1cdead835cf3dfff3b38c169a1a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/michael-graf.png",
    "revision": "af0799432b29c653f75040eb3fe3d2b1"
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
    "url": "assets/js/1.cfd94cc0.js",
    "revision": "39300a5988fd6cce3eef620687abe7d4"
  },
  {
    "url": "assets/js/10.01426485.js",
    "revision": "caec1e0e79c0d6fd98f9a3371b1b6b2a"
  },
  {
    "url": "assets/js/11.682bcee9.js",
    "revision": "8c521cd10bd967319bfada213ea905a4"
  },
  {
    "url": "assets/js/12.c00b05b4.js",
    "revision": "16a0a663387fbf26d19174f816d2fbbf"
  },
  {
    "url": "assets/js/13.47ea7a14.js",
    "revision": "1eb3601c0884e9491251a2e4b68972f4"
  },
  {
    "url": "assets/js/14.5513ee67.js",
    "revision": "5eb44a34abc0e4ff6b061dfd85a712ae"
  },
  {
    "url": "assets/js/15.cf73eb2e.js",
    "revision": "ecf92b41c76a198c851d9e4ea886ec3e"
  },
  {
    "url": "assets/js/16.af821c91.js",
    "revision": "89f010545eb1a460861e99c36c4ae117"
  },
  {
    "url": "assets/js/17.0c647ee5.js",
    "revision": "c5793079dad6faf4de09759ff397caa7"
  },
  {
    "url": "assets/js/18.9d75d929.js",
    "revision": "d0953256586e3f9064b2a22797b6f551"
  },
  {
    "url": "assets/js/19.0634054e.js",
    "revision": "e2d8074f59ded1e8c0a27b91d044816a"
  },
  {
    "url": "assets/js/2.9bfaae5b.js",
    "revision": "3f74725085c36daf6a26214395b2080b"
  },
  {
    "url": "assets/js/20.1a9a58af.js",
    "revision": "65b13cd14650c1470d351554feaf037f"
  },
  {
    "url": "assets/js/21.df5664e2.js",
    "revision": "5a487339883628407c34ea416bb5e137"
  },
  {
    "url": "assets/js/22.7baf4f50.js",
    "revision": "2cd4c3bd51d7f096f1c03d405ac08b59"
  },
  {
    "url": "assets/js/23.c4c05d95.js",
    "revision": "064f274a6243a0b809a55b52d1d070b2"
  },
  {
    "url": "assets/js/24.e1fac332.js",
    "revision": "5c019650842a579be6cc4c8b89c50ea9"
  },
  {
    "url": "assets/js/25.2f5b9fe1.js",
    "revision": "8bed31b1d894e6ccd5da4bcc21b6f198"
  },
  {
    "url": "assets/js/26.658c35e2.js",
    "revision": "9eb593b9d4db5586c2108e1e7e57b75f"
  },
  {
    "url": "assets/js/27.7819ec12.js",
    "revision": "43a30562475a94f351312e3b04c23106"
  },
  {
    "url": "assets/js/28.068288f6.js",
    "revision": "11045359aea94b9909906de222dcd90e"
  },
  {
    "url": "assets/js/29.21d81cca.js",
    "revision": "eb1575157d37b2defc121d0b008a5494"
  },
  {
    "url": "assets/js/30.501749f2.js",
    "revision": "e559e1812c3abe2c3ddb13e651b167e7"
  },
  {
    "url": "assets/js/31.e8c65c8d.js",
    "revision": "c5b879093bd6f301cfaba01d16f85575"
  },
  {
    "url": "assets/js/32.916eb2a6.js",
    "revision": "9eaf522809410dd01aef2786c83fe269"
  },
  {
    "url": "assets/js/33.4b1aea9b.js",
    "revision": "82a4f638850cd4f0b1c466a988273b70"
  },
  {
    "url": "assets/js/34.2cedbbae.js",
    "revision": "dd82381ee9aaa9b8d86926cae7621e99"
  },
  {
    "url": "assets/js/35.74d8376f.js",
    "revision": "a62976c2f6891d460dca76629eae3256"
  },
  {
    "url": "assets/js/36.d08eef70.js",
    "revision": "19b9c35f6c419df57826fd3ba64f5512"
  },
  {
    "url": "assets/js/37.9c274b63.js",
    "revision": "8b6068c54b7122e41ffb29728bc61890"
  },
  {
    "url": "assets/js/38.5325917c.js",
    "revision": "af20ae004d33039a0c14d1068a75349a"
  },
  {
    "url": "assets/js/39.f04107ce.js",
    "revision": "ab7111fb583feb7a6f9c251392332298"
  },
  {
    "url": "assets/js/4.afa1599c.js",
    "revision": "54cc31affd79b7e730134eb10454c30b"
  },
  {
    "url": "assets/js/40.f46c0c67.js",
    "revision": "593c7458263e5d529aa57366fcaab8d5"
  },
  {
    "url": "assets/js/41.256c13bc.js",
    "revision": "c086ee07316c849d498bb3f28ca9686d"
  },
  {
    "url": "assets/js/42.54d9628f.js",
    "revision": "59c263ae0559f648ac5d80a021191624"
  },
  {
    "url": "assets/js/43.a0237c94.js",
    "revision": "41a4430770b2a2b35e6842c330ab547f"
  },
  {
    "url": "assets/js/44.0beaab5e.js",
    "revision": "ca116ce5343b4c4786d59f9356cb3e90"
  },
  {
    "url": "assets/js/45.0624e436.js",
    "revision": "b344643e27231a77b5390aa8ecd12e90"
  },
  {
    "url": "assets/js/46.ca122056.js",
    "revision": "ed5836a00ec010513c74eb56336ca206"
  },
  {
    "url": "assets/js/47.42a6626c.js",
    "revision": "cc9e2f802922082dc751e4879d9ec4a4"
  },
  {
    "url": "assets/js/48.a9119e11.js",
    "revision": "bae200d08bc21d0c063807e7287bf52f"
  },
  {
    "url": "assets/js/49.531c8ea4.js",
    "revision": "9f1b9aa885199ab033ffdbce04ef7364"
  },
  {
    "url": "assets/js/5.cce026cd.js",
    "revision": "c8abf55b058c7f10e6721ac89a3df4f0"
  },
  {
    "url": "assets/js/50.8132e184.js",
    "revision": "19962448b1b7664a2bd53a78f14deff3"
  },
  {
    "url": "assets/js/51.a295fb0d.js",
    "revision": "15c646aa04bd637a8dcf16b93cd492e0"
  },
  {
    "url": "assets/js/52.81610efd.js",
    "revision": "fdcae962b4552da298ee9a07abff1b83"
  },
  {
    "url": "assets/js/53.0761572d.js",
    "revision": "d1b0a796c4571f0a067402b04b4adca2"
  },
  {
    "url": "assets/js/54.a61b0e3e.js",
    "revision": "1bcae28d3114152ce78d69d0951cfdc0"
  },
  {
    "url": "assets/js/55.506412ec.js",
    "revision": "cfc139b5439a7905a27023b35325c1e9"
  },
  {
    "url": "assets/js/56.56a40764.js",
    "revision": "58ae76d4d1277e9a0148650aab57247a"
  },
  {
    "url": "assets/js/57.0cfe7290.js",
    "revision": "7f0bc5b3a35415db3a533b4de07d275d"
  },
  {
    "url": "assets/js/58.2d2f3d06.js",
    "revision": "ba52817f2519bbaf14c7001cc1bfe29d"
  },
  {
    "url": "assets/js/59.a20eb809.js",
    "revision": "93d8905d9a953c1c93369f90c3299c94"
  },
  {
    "url": "assets/js/6.f6281999.js",
    "revision": "a0a324a3dc071311eec4055549e76853"
  },
  {
    "url": "assets/js/60.cdac1fea.js",
    "revision": "450a477c2cb06519d7a694aca87ad627"
  },
  {
    "url": "assets/js/61.d14cc340.js",
    "revision": "a08e34fabc908e0b9a71257297180740"
  },
  {
    "url": "assets/js/62.d31ba0fb.js",
    "revision": "8710575b4a1ac4dc5107743f08b08a6c"
  },
  {
    "url": "assets/js/63.9de740a8.js",
    "revision": "ff3125fe35cf1af96f937ff9e795dded"
  },
  {
    "url": "assets/js/64.ea621330.js",
    "revision": "87e45fa31bb6f5bb809abb5ff8828777"
  },
  {
    "url": "assets/js/65.c90a841b.js",
    "revision": "ef3c09f66842bb5c388bc7600926863e"
  },
  {
    "url": "assets/js/66.bb19bfc1.js",
    "revision": "453622727fdfcc9e66fa34337761d5e8"
  },
  {
    "url": "assets/js/67.d43ea57a.js",
    "revision": "4c5eb8e4f18e5bae3781099686169da5"
  },
  {
    "url": "assets/js/68.ee1b0c10.js",
    "revision": "8fbc823d38ff1d7f0f1e7553852d640a"
  },
  {
    "url": "assets/js/69.56b9023d.js",
    "revision": "882bf6fadf7388bff8c57f629f9181fd"
  },
  {
    "url": "assets/js/7.eee4d8e4.js",
    "revision": "38cae7310767380c87c836936cf1b545"
  },
  {
    "url": "assets/js/70.704c3c8e.js",
    "revision": "e8b3276517e161a38f8f3a38c730d1af"
  },
  {
    "url": "assets/js/71.cc40efec.js",
    "revision": "8ee7f7f6a0e0bcb553dcaf5868555846"
  },
  {
    "url": "assets/js/72.2473bfce.js",
    "revision": "049581fe0303e0b814d234b6c5c50958"
  },
  {
    "url": "assets/js/73.7ed9c93e.js",
    "revision": "df2a1b2d3871f1bc97cda810d2de9d1f"
  },
  {
    "url": "assets/js/74.37ca2ed3.js",
    "revision": "9a5ce889242eddfa0fb36bd5f5286639"
  },
  {
    "url": "assets/js/75.8bc63657.js",
    "revision": "bdd59552d147f0db835206ee7065480b"
  },
  {
    "url": "assets/js/76.9f1dcf24.js",
    "revision": "193047b6fbcd257a88c1faa04921d7d1"
  },
  {
    "url": "assets/js/77.a13cf673.js",
    "revision": "7eb357ced39df76c844110a996210fb1"
  },
  {
    "url": "assets/js/78.458a014a.js",
    "revision": "c5780a5f1c3840d0123a9d368581ca2d"
  },
  {
    "url": "assets/js/79.e6dea81d.js",
    "revision": "70fe783b871dbd715bd1dba18067e038"
  },
  {
    "url": "assets/js/8.1a7974f4.js",
    "revision": "9af149e99ccff6a3cfcfe6d8497cdda8"
  },
  {
    "url": "assets/js/80.a29d7a65.js",
    "revision": "ee022dbbebdee5cb36f30a4eedfec501"
  },
  {
    "url": "assets/js/81.d058a151.js",
    "revision": "b696287b44106a601c48b550e6c75a44"
  },
  {
    "url": "assets/js/82.1a9c08c6.js",
    "revision": "c7abb3620a102704e738966b62821259"
  },
  {
    "url": "assets/js/83.ad8e2bee.js",
    "revision": "cd0a20fa90e73768eabe2bd12031fd4b"
  },
  {
    "url": "assets/js/84.eb10b5e4.js",
    "revision": "c98e61b3dcb2f9c6d0c76b9f126bd0ee"
  },
  {
    "url": "assets/js/9.e865369b.js",
    "revision": "ca354d5a93de983720bb681213a12b24"
  },
  {
    "url": "assets/js/app.a8fca0e4.js",
    "revision": "12a8e85babc4542fdbe5771702f79d80"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "184cfda499e36a2a9c720cd620e55f4e"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "a2073152d3d0e7d3cadb7f1bbb78b251"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "ec4a08ab937d6e895a281ca164b22ac6"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c1a936819ebb63bbe6908f5d6182c267"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "c30ca8d868fbc6ed19c7cea8f5372afa"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "70c7e59d04b2509797b5a9eb592fd105"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "cb3af0d2bc16eec33f59117275619911"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "a8f75087569588aefc9f034c8fcf8fc3"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "15e737119ce9a8310b8234880a458a5f"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "766a6eeff385d6e3427d19d2ad89879e"
  },
  {
    "url": "courses/index.html",
    "revision": "ae6b829b80fd6dc382de70875e87804c"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "7140edc9b0bed4f9babaf7a28c6bf59f"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "7d3f6aec6643a78175e3f4cda3827b5a"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "7db017283ee595d7d11288f0761e93d2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "b6b33a9fc67137453ca41a27032970b7"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "3a8e8353dcba76f580ed08c4354c79d9"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d8c29c3df05dac66da8735f7cece3443"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c885e968d1dafd2b00e3bad0908d3f70"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "e6c2de2fab24295d75a31bf7a53fa5b9"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "2d9f5165251f6ae656e2f4bc2a1a71d1"
  },
  {
    "url": "index.html",
    "revision": "8a307a83c1f7ae20155f97a6465867b6"
  },
  {
    "url": "studyathome/about.html",
    "revision": "2cc08a5c73a7548db31548e08288ed0c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "e09d5681fed8da4191d2dfdf1381549c"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "bc3b826e08c5cbb4f816766bc114371e"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "daa3fe149b9dc49aea775b3457828dfa"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "ea77d143e2e92e84b16ea7665e609427"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "85a4fb9afdb346544cc20eae1370a250"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "d8fde077a427353010ef5e65d7e35bfd"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "9ce6dbdcf85ade590d1d27d2f55300c8"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "253c75475908acbd331d2562b5870e1d"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "684ba6c187410b83f162d3b396a20935"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "d3b54631df6126988846f2a0ef01d176"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "ffc2c43a4b68bacd7c60926bcb9e1de3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "16825a888f127240e32e7ceccff74613"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "539ecdc1b95f3d9c639be144d1f72f71"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "29f187c6dee361b85265577699ce2695"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "c03c80c1dff0441beee76e780d7949a7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "201ca5ebfac615f660d5c8e175769d62"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "4c21cefba72eba5da100d16b53c79c4a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "eccdfa7eeb6dd50f13f087d4c4a323af"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ea77d143e2e92e84b16ea7665e609427"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "a1b483b5bcd83eb110e7e75d21e62bfa"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "39435dabc3540a769749c69877556e2c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "a2d8dcd952942180a90d1e15ec742c01"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "9c89722d1055df613919cc9da2eaf81b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "08198b42eac88f50b59828b92278f2de"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "efe43bdbe8b105098ae4460f0c96f8c7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "5e36f5626bf3edef1e75480e467e4e98"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "d3c0aefde61a802d7b3aec5c639cbc3e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "2d0a980fb89ed97e0359834fe8cba7a8"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "ea77d143e2e92e84b16ea7665e609427"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "3a1cd1943cc9c91bb97339f88444854b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "58fed32052b96a0cd66a71c639da0ba5"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "0f2fa295652896bac50c8f05a2dc4d19"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "aece2a53f24ae5024fa60698ea0c721b"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "c831371715ac481e8bffcd6df937deeb"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "d236098cc9b992a2ac20ac5d51816398"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "98ac28d877b7d024d0c85dacbf318be7"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "fb9f598dac6f1982a9d548c80c7ea520"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "e0051886eb8f8bcdca6fc2478e95d133"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "51f7f6b93ea7d046625886d1f936d0ee"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "73eaa1e3ca256660011af856914a5894"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "17fdc69ea65c1a1b5eec512e447077b1"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5ebd18c82492e0d33c342bd83cbee157"
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
