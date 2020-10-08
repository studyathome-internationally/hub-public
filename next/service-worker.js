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
    "revision": "3d35ba462137826b19c61bc88bf7c244"
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
    "revision": "4ebc8d13e18ec98a6f0c24e81aa883d1"
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
    "url": "assets/js/16.99a6d0bb.js",
    "revision": "4138cddaa4501f0cdea14eb676d9ddaf"
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
    "url": "assets/js/21.415faa12.js",
    "revision": "a770d8a63f459e6add31833fc56a430a"
  },
  {
    "url": "assets/js/22.46f0de86.js",
    "revision": "41e4483a4f8aa7a90db7bfda8f335755"
  },
  {
    "url": "assets/js/23.469f8421.js",
    "revision": "06141e604333e3f3f489d2f8593df46a"
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
    "url": "assets/js/26.51c93c48.js",
    "revision": "c5ed7e8697d1b1e73af020e532beffcd"
  },
  {
    "url": "assets/js/27.73f19062.js",
    "revision": "5537566959c759952a5712e6e6799929"
  },
  {
    "url": "assets/js/28.3d68a2d8.js",
    "revision": "3dc9e253fde58fb6ede5a813a4359f94"
  },
  {
    "url": "assets/js/29.e24c1a77.js",
    "revision": "c4c9ccefc651084ec818cdb2e15ce72c"
  },
  {
    "url": "assets/js/30.ad1dde58.js",
    "revision": "70c9a89e4b7fd03aa740903ace97c0db"
  },
  {
    "url": "assets/js/31.85ee2ed9.js",
    "revision": "7f6f174042f6d7cd399227c9b9645de7"
  },
  {
    "url": "assets/js/32.228a5500.js",
    "revision": "700a61fdeae5bff5e1eb866ea3b604af"
  },
  {
    "url": "assets/js/33.6ca00816.js",
    "revision": "a4d9ff4c02778f7f4d3049a5deebec4c"
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
    "url": "assets/js/36.8f867919.js",
    "revision": "69974b203d297e2c2bc71b62abe302cd"
  },
  {
    "url": "assets/js/37.cf81954f.js",
    "revision": "4efa3ee903e8c07d0303059753e54464"
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
    "url": "assets/js/40.f887857e.js",
    "revision": "ba1350939a3678017e711e428ebecee8"
  },
  {
    "url": "assets/js/41.5ae0e0c7.js",
    "revision": "88f7360e1cdaffc84e1dfac820f9813b"
  },
  {
    "url": "assets/js/42.c499f11f.js",
    "revision": "c9c6a7ed381df8f25f6907fa8cf89f25"
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
    "url": "assets/js/54.34b95946.js",
    "revision": "4fe816bb28b493ca3a70711f3156bbcd"
  },
  {
    "url": "assets/js/55.6e2145fd.js",
    "revision": "757bb9e982d7dd4f042b65be6bcfc9fe"
  },
  {
    "url": "assets/js/56.56a40764.js",
    "revision": "58ae76d4d1277e9a0148650aab57247a"
  },
  {
    "url": "assets/js/57.cd3693ea.js",
    "revision": "74adc9251b439e55d30e89b2370c41af"
  },
  {
    "url": "assets/js/58.28c607fc.js",
    "revision": "65769981ce4a04875a35c167beabd34e"
  },
  {
    "url": "assets/js/59.c09b213c.js",
    "revision": "ef9b06f3af226090ebdee8ed90a6b4c1"
  },
  {
    "url": "assets/js/6.f6281999.js",
    "revision": "a0a324a3dc071311eec4055549e76853"
  },
  {
    "url": "assets/js/60.11f47c14.js",
    "revision": "31ddff5fbb023a44b67ad9881584393d"
  },
  {
    "url": "assets/js/61.058dbfe4.js",
    "revision": "7e588c4d6c74387ed7e0f532657b5a4b"
  },
  {
    "url": "assets/js/62.d32135f3.js",
    "revision": "3331816718072f4583c2e913aebfe0c7"
  },
  {
    "url": "assets/js/63.19538152.js",
    "revision": "47daa2018b3e65f9e81345586e2fc283"
  },
  {
    "url": "assets/js/64.b0c59620.js",
    "revision": "29353e39ee20e996e12640e43cb8718f"
  },
  {
    "url": "assets/js/65.a3be044a.js",
    "revision": "9388426b96457570aaba6bbe6a689345"
  },
  {
    "url": "assets/js/66.da5e23c9.js",
    "revision": "1d5e44d9d355e3c8523f3661e878f475"
  },
  {
    "url": "assets/js/67.bffe250f.js",
    "revision": "4c450b60c632d3bbfaa50ff02ab4c695"
  },
  {
    "url": "assets/js/68.ee1b0c10.js",
    "revision": "8fbc823d38ff1d7f0f1e7553852d640a"
  },
  {
    "url": "assets/js/69.531bede5.js",
    "revision": "edd08a83b860b9f48fbb3823252bcf8a"
  },
  {
    "url": "assets/js/7.eee4d8e4.js",
    "revision": "38cae7310767380c87c836936cf1b545"
  },
  {
    "url": "assets/js/70.429228df.js",
    "revision": "2ef20706d7f26dfe160d1837e8fdabd5"
  },
  {
    "url": "assets/js/71.7a55a0f2.js",
    "revision": "e8496872a9cb7f3292640bfbb54a88ce"
  },
  {
    "url": "assets/js/72.26dbc6aa.js",
    "revision": "5ef9ab4852a01ca713411cacd7c46537"
  },
  {
    "url": "assets/js/73.340169da.js",
    "revision": "de3970b27fc80190acbcca398ddae7bc"
  },
  {
    "url": "assets/js/74.33a4d256.js",
    "revision": "644f6b51be9ef4b5dceb64e83260264c"
  },
  {
    "url": "assets/js/75.7703d1e0.js",
    "revision": "8ab457ac36135742f5020098551ed60b"
  },
  {
    "url": "assets/js/76.3778a3f5.js",
    "revision": "76ff95b3549bd9569a4e4f275a5d2dea"
  },
  {
    "url": "assets/js/77.77f79e3d.js",
    "revision": "cd8e1f68718685c3c1f34583d21afc55"
  },
  {
    "url": "assets/js/78.dff19de2.js",
    "revision": "f74ecc1a7e307d4368285ae1121e3453"
  },
  {
    "url": "assets/js/79.333ffd5e.js",
    "revision": "3016ebc85dab92681fcbff88b2abbf62"
  },
  {
    "url": "assets/js/8.1a7974f4.js",
    "revision": "9af149e99ccff6a3cfcfe6d8497cdda8"
  },
  {
    "url": "assets/js/80.8859f798.js",
    "revision": "d89518ed02f326128b7f6c326eecf83f"
  },
  {
    "url": "assets/js/81.d058a151.js",
    "revision": "b696287b44106a601c48b550e6c75a44"
  },
  {
    "url": "assets/js/82.ad030c68.js",
    "revision": "28065a9f5534a1d9337ad4fbadf44e90"
  },
  {
    "url": "assets/js/83.131d300c.js",
    "revision": "20f61e8e3d55b848c542da811feb83a7"
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
    "url": "assets/js/app.df4b47f3.js",
    "revision": "8bb3462cc7555d61a5a07126f686877a"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "90f50759a3678f63d95262ec00d17548"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "0b585550b29ab5002115b8e4b9731c30"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "c37d10c28799ba6270d3f3ed03557037"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "642d864c57d86650d09da23680a723e3"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "842a5e55bfaac39b931e0584ef616cb1"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "78f4174bc956d9e1f7c149c8c50f4434"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "cc1bb8f347b9dd3d6274922c3357cbea"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "00d7055f56b230365b343adadf10cd25"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "e17dfa0bcd91c4a41a07a25f6dd3808c"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "8cd8852406e5952f81f45a960ed904b8"
  },
  {
    "url": "courses/index.html",
    "revision": "72747e84f1aa2f724ed667ab23d49a86"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "576f0c0e86eb0fa89a1bd81deced1f78"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d588be82741bf5098abec3b4333c8a10"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "3a7753cd038aeace8beba49d48cc48f8"
  },
  {
    "url": "courses/template/index.html",
    "revision": "e9dd365f4a6efdfbfb8671f6070d0886"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "fa4032c6114e02e352e5b72cb7ae3441"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "05966ee981e5613fe14e1c626a0ab1cf"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "673954cf8264816c1f99edb5ce5c325b"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "6b1951732cd60946fb603c8133e8133a"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "76494722a44e2c566b6fea0fb4ceb1b3"
  },
  {
    "url": "index.html",
    "revision": "fb0570489653c9ebce5e63dd64be3629"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d0b13384cc168af4d2247dba12652ac7"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "5a89479275273e961fff38c6c9253529"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "198779eef68385761d34c0c03c194369"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "55276190a8e3a26980c09461531986c5"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "e9c560c6a4541047a2bd47cf17b46b5b"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "52ac09f3d70cf1bc6cab992cf3de0f91"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "b5e7cf3960244fc4536eb5c87713fba1"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "5cf04085620b267121661ad36aa51860"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "08f29ccb5b10f958c5cfd138a4db4bec"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "b6a46083f883e603e8b5d2a730bc5a54"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "6464015ecf51750f89a9c5ae28044c47"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "6209151f8bd124db6a487e190619a568"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "732f45227927648859a16d014bf64f78"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "16fd2ebf70fb4c36e31f5417ddcc2e39"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "a88e8c608b4533f44a0eff2ef8863a59"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "bc04c6e718bd51e9bfc8ac2433f8cb61"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "c691766276b3046cb446ac77024eee88"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "4b605b20f9ced3f117829890c4d127df"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "39ae44aca45d33db7cfdd7656df37c7b"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "e9c560c6a4541047a2bd47cf17b46b5b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "3068f51a8f7bd629b54d9697ea3f51ca"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "4f03d7063a9d585013ef319e16e822c0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "581cd7425e7c0e9e67250b6a7dc08a5d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "c93bdee40e51bc684c085d3865f21bf6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "8838f8ed59ad97c086f396961c841fbc"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "efe56ce0df3295dda1d53b6a46fb947f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "5bdd37220d86c6f89439dc11b03764b1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "46c1026359b49308e291abc17a55a94d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "4de31f74da136202b3ddd01a72859dad"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "b6a46083f883e603e8b5d2a730bc5a54"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "f1c7eee60d0708b6736979b51af82ed5"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "8c466cfb4953be23ebd7fcb6f1c41e0e"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "77da2fbe469ffefd8ed43420f9b70272"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "79d4daadeae124836eedeb6ce21b2e69"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "89d2d88415ab97aa94542cefd1d84a6d"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "5e365cce2cf35cf493efe5f930b1a026"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "351f193239d566269312a91aeac187e3"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "9df3d4f09330d478f365b8db15323e5e"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "fafc014fa5443b8baa8b0f5106d9fb44"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "4f2344020f52c8cfee6f34f576cd4cd4"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "fc4662e48962bcb8d5f8953719cb302a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "c867f3165f18005f3937642131081403"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "9ff6e2f63a74222e7c32b2c583475512"
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
