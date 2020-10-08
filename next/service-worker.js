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
    "revision": "7bef30a8dad8cc658c9bc52559f8034f"
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
    "url": "assets/js/16.15637d19.js",
    "revision": "1cf496d376d21b016fff465549e91ceb"
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
    "url": "assets/js/26.77039076.js",
    "revision": "8cf2696ce228fb2fe177758c24143b57"
  },
  {
    "url": "assets/js/27.73f19062.js",
    "revision": "5537566959c759952a5712e6e6799929"
  },
  {
    "url": "assets/js/28.068288f6.js",
    "revision": "11045359aea94b9909906de222dcd90e"
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
    "url": "assets/js/39.54b59c70.js",
    "revision": "24720f2ef03f8f713fbcdff358c25fb3"
  },
  {
    "url": "assets/js/4.afa1599c.js",
    "revision": "54cc31affd79b7e730134eb10454c30b"
  },
  {
    "url": "assets/js/40.e3b9e5b6.js",
    "revision": "cd71a11079522d30c04bdd6cd8029663"
  },
  {
    "url": "assets/js/41.256c13bc.js",
    "revision": "c086ee07316c849d498bb3f28ca9686d"
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
    "url": "assets/js/55.4a5159c8.js",
    "revision": "915cc8075872038e99f0c4cb33b9512c"
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
    "url": "assets/js/58.561881f6.js",
    "revision": "9852c4d32ae4781aa0eaa28413e21310"
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
    "url": "assets/js/67.61692ff0.js",
    "revision": "c33504c8c5e6f5dbca71a0fc41a855ee"
  },
  {
    "url": "assets/js/68.7227f5bf.js",
    "revision": "efea453dc7c8d91b4e029e853eb697c0"
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
    "url": "assets/js/80.6cd9fda7.js",
    "revision": "255631a7c71788b0e4e6c086c348b17d"
  },
  {
    "url": "assets/js/81.82669c96.js",
    "revision": "8b043cb6887d330376be75489a1bc027"
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
    "url": "assets/js/app.20ecea06.js",
    "revision": "dfdf4949eea5a448fb3afc2d7546f2e8"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "cef728233aa17210868eb873c9d235eb"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "915a5a2a2add0c7e3dedc75066d4ee88"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "2b2894b0750968ab44b8b6291e77ddf9"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "1fc1fcd1405f0cd4acc0b1956c96612b"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "2797eadacf252e3a4e4733b5eba5c6e3"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "2dd3008fb750234c41264de1280efed1"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "bc4a81cb2e27acb65d4c533ee333805b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "e3396d549075fdb31656d6e22e3e90c7"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "004d99731739cb66c66884710515bd1b"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "2c0fe31fd989a06cb165d1f33f8f9d22"
  },
  {
    "url": "courses/index.html",
    "revision": "840398480435d8c56147ed3c308878bd"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "90ba11d686a5fdc4d5cd4ff408a28853"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "f61e0bc7df7ada8a007e02099389a7a3"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d622ddf7d7c3759d688afa1125212e20"
  },
  {
    "url": "courses/template/index.html",
    "revision": "967b8a75002edf291a0d2aeddc85d23a"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "2988f1b74577bbb4e09a5656cbaeae4d"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "bde9d2a9662713f919614ae360c1633d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "2cf9409a33ba8087695182714c0d9ff0"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "304bd325faca837c302a229eb2f8811c"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "c0769177d61ad6d138b7a56f4ba2b82c"
  },
  {
    "url": "index.html",
    "revision": "7fd72a2a67a9b149f4c5f8b6efa8a261"
  },
  {
    "url": "studyathome/about.html",
    "revision": "2140b04cb477426739d38113982e8960"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "cc2d4c608b6e340eaa7416be7d76cd69"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "1659b601795225fb4e65ee171fdf28f4"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b3aabc29420cbf1d27137db785912539"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "011868d30fca946a2d2cc83a7d9acc75"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "96c1b09f0b46c5d63a4d25b3bf6d85ef"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "8e49b8fdf18c82ec89844a209ba4a60a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "b70012c9024e4471e6aeca6442b9ba54"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "10e4c5a552505d131c90766d7e836238"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "86177f6b7f2953e31c9473185a7a213c"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "4c45bb8d6bee2d60a38471e3f62f3fd3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "79ae26d1a02f4b78efbd70ac5c12f543"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "d67f263c097212dab9f0ab712466a1e5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "739479c4a10ad5c58af57ca82deea6f7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "55fb5044fdbcc892f29c21a0a7026188"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "2def1411d0c332cbb80f9fd148de4d68"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "16860be115694e9450c385762ff047cd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "e0807bc2fda5084ffbbbf7a4ff9e274f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "d67e659ed2114fd21020c595cd158c84"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "011868d30fca946a2d2cc83a7d9acc75"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "f5f22b95aa7d695c77c0af5855007596"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "0f22b44d8beaaaf3b1dafa3e24446735"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "51fdb2769cc92eeb5d43b3846d65b3e3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "3705e3a071f5dd615b26b25b5eb800fd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "f93d60bb06bb33f17a58427980ecd4d9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "4f3202b1938ce4b657c45ccb34489a2a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "e0525c1a81751bb8dadf5dedc6415f89"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "87d15816d2be78ad1108d83e51fdea49"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "d1a51752af6659ae304a27685d1a7b5a"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "7bef30a8dad8cc658c9bc52559f8034f"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ebc3d4294b1c8b70ee3e593778b99695"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "8ff91b7043197e144dd19a19d8a23404"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "9177b9fea370f31d503394d4d8652855"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "cb30445711df70fe986005140aa5260f"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "b7413edefc9601f35a30c41d011a059d"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "aca9fb2d12f965f2f268c345188da18e"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "914f060614c77547b3fee82ed93a6ee9"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "5595270ac0d2d7f25c3435333c106ae1"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "d87a649f11811a593d442beac9242a3a"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7201d69634199d2b4190e174c209cac1"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "6daef10c730cf65dfe4b84ea524a082e"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "7d2f201fa992e62145f5f1b75f24677b"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "b3ac0e37665548b3ec4521d2ff6da0ff"
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
