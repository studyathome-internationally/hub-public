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
    "revision": "787469413e8736ed0050e7cef8291753"
  },
  {
    "url": "assets/css/0.styles.0fdf996b.css",
    "revision": "96a4572e7152d59f7d290647d9ab2a4a"
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
    "url": "assets/js/1.e32058a7.js",
    "revision": "6b3475a979aa8a96244f978afc9aac1d"
  },
  {
    "url": "assets/js/10.123eb24a.js",
    "revision": "7cb6b444ab17e17082a4418cc62ba609"
  },
  {
    "url": "assets/js/11.5ca28bf1.js",
    "revision": "f8e883d39a48804cf9965b4eeb9a55e9"
  },
  {
    "url": "assets/js/12.a84a8c20.js",
    "revision": "7ff05f908e6cca03015d20b924c3764f"
  },
  {
    "url": "assets/js/13.7f37f735.js",
    "revision": "96ac9e35262dae9cda9eaaac09f184a0"
  },
  {
    "url": "assets/js/14.1238abab.js",
    "revision": "51a4e9857136a243f77e5bf97630add2"
  },
  {
    "url": "assets/js/15.e64f91bb.js",
    "revision": "900dc613c3a5328f7fa032f3cf995fe2"
  },
  {
    "url": "assets/js/16.179c10ec.js",
    "revision": "a4bb9b9124b2c64a1896a6bb6c55f7ff"
  },
  {
    "url": "assets/js/17.df588788.js",
    "revision": "3773e4ca57971fe5731d84dd89dbdf8c"
  },
  {
    "url": "assets/js/18.328abe4c.js",
    "revision": "8036427a3c5aa0f99f3ffc4f73044d6b"
  },
  {
    "url": "assets/js/19.edaada4b.js",
    "revision": "dd77a70db183b7c8358f75a4eff4b0c6"
  },
  {
    "url": "assets/js/2.1c9bc3ee.js",
    "revision": "40804eda19d53200d8fbe437e74e4425"
  },
  {
    "url": "assets/js/20.a9f1a233.js",
    "revision": "2a203016c1ed2080d6bd8e872509651f"
  },
  {
    "url": "assets/js/21.9acba5e9.js",
    "revision": "dc731a5ec984aff53f0493d4a39d25d3"
  },
  {
    "url": "assets/js/22.cce2a205.js",
    "revision": "8ec6fbab138c555d0815d3fdbd1dfd17"
  },
  {
    "url": "assets/js/23.a2560e0f.js",
    "revision": "67e3f4020c0020270132a32f869fe063"
  },
  {
    "url": "assets/js/24.1b757814.js",
    "revision": "70896d723ed391e72f71708282375a36"
  },
  {
    "url": "assets/js/25.4c80cf10.js",
    "revision": "5850e43ae54b09eb2e58260b0cb3ab2d"
  },
  {
    "url": "assets/js/26.176763a3.js",
    "revision": "1b0ecf213a8d01b211cfbd2376c4969e"
  },
  {
    "url": "assets/js/27.0033dd40.js",
    "revision": "2a16cd2f30db5f50a6294c8552565ee3"
  },
  {
    "url": "assets/js/28.8a6d92e5.js",
    "revision": "d251eefc3c2ad1572b375060a1b44e58"
  },
  {
    "url": "assets/js/29.6d737fcc.js",
    "revision": "13ac453bf2a78211f56d9c4a586d3a5b"
  },
  {
    "url": "assets/js/30.383642b9.js",
    "revision": "ea3d62e9e829cecbd81ab432bd99bd3a"
  },
  {
    "url": "assets/js/31.062c9866.js",
    "revision": "edd27faf987b9b5d0b2c9a1f13f9a928"
  },
  {
    "url": "assets/js/32.ebf2e1b6.js",
    "revision": "2f7503339bdaaf351d3ea5ae874373ce"
  },
  {
    "url": "assets/js/33.8365261f.js",
    "revision": "2e86e3858ecd8d6235393b0a2072d340"
  },
  {
    "url": "assets/js/34.2a8d6682.js",
    "revision": "dcf7c1701b613937f84208c49aebd00b"
  },
  {
    "url": "assets/js/35.e0dd6051.js",
    "revision": "8eda97f209f283d34ce13519abd9c9dd"
  },
  {
    "url": "assets/js/36.3f2fd06d.js",
    "revision": "03cd7855ca38582748b1b43eccea08a3"
  },
  {
    "url": "assets/js/37.1c7383e0.js",
    "revision": "b2600ab2c905d31413118c5954224dc7"
  },
  {
    "url": "assets/js/38.27473842.js",
    "revision": "d8b64ffeee13e43d45c9014ee2470673"
  },
  {
    "url": "assets/js/39.f7591ec2.js",
    "revision": "46cea6a91713d9daf2e9eb3915ab2743"
  },
  {
    "url": "assets/js/4.eeca81bf.js",
    "revision": "f8c2d0d52c795e9f7d113c91ad43ca0d"
  },
  {
    "url": "assets/js/40.4cba97f0.js",
    "revision": "12d733f27358d95a1b23b21076703751"
  },
  {
    "url": "assets/js/41.63012cc9.js",
    "revision": "cd08d7580c77c58ddd4604154de94c12"
  },
  {
    "url": "assets/js/42.cce81c94.js",
    "revision": "692e2bf1bc257f89d356400b0303d706"
  },
  {
    "url": "assets/js/43.d1966d02.js",
    "revision": "2787bac948c7317169f59a6d35ffebab"
  },
  {
    "url": "assets/js/44.59e67a52.js",
    "revision": "c06079313e8e28ed88c8d24c3ca5254a"
  },
  {
    "url": "assets/js/45.a5ee4b95.js",
    "revision": "34acdfb4347214487bfad26b7b27b9d0"
  },
  {
    "url": "assets/js/46.68c4ef14.js",
    "revision": "5a13ea7edaf6aae6bb04a6da3ac381d2"
  },
  {
    "url": "assets/js/47.5ae7dd6b.js",
    "revision": "0c77be0175731220595002816e925ab3"
  },
  {
    "url": "assets/js/48.20cba6b6.js",
    "revision": "308ec276602ac418f1e9962596b07f2a"
  },
  {
    "url": "assets/js/49.ffce1029.js",
    "revision": "59ff4a9ed2e76e55715f8bfe484209c4"
  },
  {
    "url": "assets/js/5.023997a5.js",
    "revision": "ffe63724210d283a69a842661b492f1d"
  },
  {
    "url": "assets/js/50.719920f4.js",
    "revision": "acd86bfc3d31e3d7a4cd157b468807fa"
  },
  {
    "url": "assets/js/51.d71f0e50.js",
    "revision": "56a8d246008fc23c2f7c2cb879c3610a"
  },
  {
    "url": "assets/js/52.2db07193.js",
    "revision": "924952f43be2f2c6eab9633a4cfba6c0"
  },
  {
    "url": "assets/js/53.c885f5cb.js",
    "revision": "72e965d2a5b1f6ac1f7b6ab875a8bfa8"
  },
  {
    "url": "assets/js/54.ec9949e8.js",
    "revision": "31bf242eaa57fe210ebbf3bc1bb1deba"
  },
  {
    "url": "assets/js/55.6aa5a80f.js",
    "revision": "0d66e8c9140c33eb6534ae15f72a49df"
  },
  {
    "url": "assets/js/56.056acff5.js",
    "revision": "8ca976514adb531caf0c142150d9e88f"
  },
  {
    "url": "assets/js/57.f1c7ebe4.js",
    "revision": "1ce3221a36586b3b80ac2c1b90e118c3"
  },
  {
    "url": "assets/js/58.058d2598.js",
    "revision": "3b24471ba19d6a1d0678c3a6d6a9b87b"
  },
  {
    "url": "assets/js/59.0ea3ed45.js",
    "revision": "4664554a2ad7a56164735324e258d6fb"
  },
  {
    "url": "assets/js/6.c54a71d7.js",
    "revision": "8b127bdde248203203319363fd39b79b"
  },
  {
    "url": "assets/js/60.29baeb38.js",
    "revision": "f6d2310a63736cceb5749e1832605564"
  },
  {
    "url": "assets/js/61.f1beed05.js",
    "revision": "6602498899b814514e5a60f44ade7be2"
  },
  {
    "url": "assets/js/62.d099b81e.js",
    "revision": "d0db3c312288bfbff8a3c7ede10738f3"
  },
  {
    "url": "assets/js/63.f5714294.js",
    "revision": "3a2da597dc0c3ded2b19b0b4611d5b1a"
  },
  {
    "url": "assets/js/64.a4690705.js",
    "revision": "c9b808b5864119b97674e37de68835d5"
  },
  {
    "url": "assets/js/65.bbe5482e.js",
    "revision": "a18b3d615476534e0ae14e1eb4ac392b"
  },
  {
    "url": "assets/js/66.c2484a0e.js",
    "revision": "9f941a25d6f5df4802817bd33ddee5a2"
  },
  {
    "url": "assets/js/67.c41c0a0e.js",
    "revision": "f2c424d3d2b1249c891bb27d68028e3d"
  },
  {
    "url": "assets/js/68.a7ffaaa7.js",
    "revision": "6cb68fee5e1ec8b73aef014147bee717"
  },
  {
    "url": "assets/js/69.2763bb45.js",
    "revision": "0f04c22bbfb7a5ab0d7014a214580929"
  },
  {
    "url": "assets/js/7.05ee27e7.js",
    "revision": "438e18c0f7aaf303e109405524fde204"
  },
  {
    "url": "assets/js/70.44cd8fbb.js",
    "revision": "16c5aa6d443dee15ec0143a45c475361"
  },
  {
    "url": "assets/js/71.44a8f0dd.js",
    "revision": "9e446ee0b1a2cfb6bf4c250a1eedec8d"
  },
  {
    "url": "assets/js/72.01143508.js",
    "revision": "277ee24ad78feff891cfc290fead8505"
  },
  {
    "url": "assets/js/73.579b8a9f.js",
    "revision": "029f5f59af341edb75bfc0aa55677741"
  },
  {
    "url": "assets/js/74.921f97b9.js",
    "revision": "2a4fde6151c115adc7e0f4a16abf2bac"
  },
  {
    "url": "assets/js/75.7c4af325.js",
    "revision": "9663d780537dabf7bdabae036ee6c65e"
  },
  {
    "url": "assets/js/76.f205ada8.js",
    "revision": "14c70655650c738c2d7c314dc8ddf08f"
  },
  {
    "url": "assets/js/77.10ab54f6.js",
    "revision": "7b9613e9e49e557f1a9bdcc419cd538e"
  },
  {
    "url": "assets/js/78.83301e7e.js",
    "revision": "0467f7b2829f84bd85d29df02d9967c9"
  },
  {
    "url": "assets/js/79.b4326501.js",
    "revision": "12197e5c1358effd51e3e959406243d9"
  },
  {
    "url": "assets/js/8.1a7974f4.js",
    "revision": "9af149e99ccff6a3cfcfe6d8497cdda8"
  },
  {
    "url": "assets/js/80.7bc4cc8b.js",
    "revision": "18f0d77766a43cd9f8192aac04e5eaef"
  },
  {
    "url": "assets/js/81.acca5423.js",
    "revision": "17a7598b657bc05fbf95bd3e834968f1"
  },
  {
    "url": "assets/js/82.0617fd6d.js",
    "revision": "139b87378a4534dba5fb8fc43ca4a4e0"
  },
  {
    "url": "assets/js/83.432b5b0d.js",
    "revision": "53c0083f883899be7d933f56ad316803"
  },
  {
    "url": "assets/js/9.d953d757.js",
    "revision": "02a7137a81281c0990a8da620a5e9e93"
  },
  {
    "url": "assets/js/app.8f267b02.js",
    "revision": "3added19272a2d709460fb2649bcb79f"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "fc6a7b56715b2e5fe55aaec22bb71462"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "b3e1c99c7f1536edf909f7f892b8544f"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "0af8b57f6c29bfa5b14b3c35ae0c8af1"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "0186588961d43d55a6d7b03b47473735"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "6f4f52f93b229dfc9de3c7f75e6a0868"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "0fcbeb3c0ff3862be0c33d525b7dc1c5"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "55e0a375e7595552c408783e44cf58eb"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5d8d491b7a147835972fb2e3587e76ae"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "8e4c72e1764df0f80d13982c61e2da05"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "0f692beaa83556aa4e2549a189170e25"
  },
  {
    "url": "courses/index.html",
    "revision": "ca69705b600781d68affae83d35eebe0"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "6707c585b8d0d7ff66f4efd86a490e10"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "eeb10438b97f252875106c74a28c6996"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "5393a224c97d50d331ec48e98656a6ac"
  },
  {
    "url": "courses/template/index.html",
    "revision": "9f7cd453861e0cf318e7482ae6705f96"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "171921933e72619f854836b1fa7d4bae"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "feb0e05651b9b00a75f653997a87973f"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "253988fcbe4c94ce36821066dc0bad01"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "35a6341ed596671c5dc55b4fb833c1d4"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "fc59570430beae6f8e183046e0630cea"
  },
  {
    "url": "index.html",
    "revision": "ddb12a136c761bc0350b9f170ba9b7be"
  },
  {
    "url": "studyathome/about.html",
    "revision": "69941443abe772ad5508df489955253f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "6c803ee3ddec03f56444f7755a08f1bc"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "c99e2374035e5c8a8777d593d564f45a"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b8e604962046c2739e51a4713c606a5d"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "631eba5a527b0445dc289cddc10e2592"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "5665bf3799dae2f67a2a6436a1837d4b"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "a25e160cdf02aa8379e5c7a713dc885b"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "f5c30c0b2a74a9ef6887675cb988d15d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d58c82947679d97c927be2026e0a8fb9"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "359da07a449cfc848fd811216e0f6066"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "0a7450657005f7af1422289838fa4fb5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "a2cb9a888829c6fec943eec50fdddaf1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "83c380b9ddc8a422bbd91e6f657b072c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "6258841aa2aea0421ea4d1bedd8c0cf3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "982184a5b21b49e550a20fe2c7df847d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "6a79c3ec2cce8c3b4afe994099f93207"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "e3dd37fd598b515239649463b446eb1d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "73c52318ef16f96c6ed642d47710e2ec"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "214bbcc141f8db168aa77dd9f207b0c4"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "631eba5a527b0445dc289cddc10e2592"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "5a5ad651e72039e62da99dc9eada6851"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "1b72625b22b254308224569c5b7ca034"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "53978a984ebc9e8fc38e085d3b2979b1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "15bb4a6ac2ba87a55799b192ff384200"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "f8b11b1add2afae2ef16b1ebfd098bb6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "3a60fd50a020009d8d58450f916e2821"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "f5161e60e2430b8291fadc41b420a16b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "60e54bdcb2d08f65ae3cb319e767426e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "b4a7fe2b36c55d811007ab9ec32b330b"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "359da07a449cfc848fd811216e0f6066"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "c28ac1a2421236e2fef80237496a5404"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "95ac506d67e185b8df5894c19e1db228"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "ecad8ff7260991963c82075f16e2d064"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "4d595013747ae96ac331805822f2a733"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "77c9bba2b62dc38dcecc64b97be8ad08"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "38ab4082aaf70fa28131774dfae2e184"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "d05f64acfa886018a27e27f6e192d87e"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "559f687c40358baaa376f66342c1c856"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "04cf721d1a01bb3b6287b22cdaa3cf5d"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "79af72997a4d72c62fb21846f034d7c3"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "0685500797e72daed703057869a716c7"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "41e025dd9c2b13a9dc6d2e23c85c41de"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "0a0c940c279940cc6e9daa393f33f1f7"
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
