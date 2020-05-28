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
    "revision": "5fd0215dfc3e790e39dd750bf19b92d1"
  },
  {
    "url": "assets/css/0.styles.028e2b33.css",
    "revision": "f9907a6a123478f04abe0e059ee7a505"
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
    "url": "assets/js/1.e59dca03.js",
    "revision": "d0e6ad51dd8e7bab85e367983ffcc042"
  },
  {
    "url": "assets/js/10.fdeda79b.js",
    "revision": "ae854a1eb6520aecdac1071d8abb4681"
  },
  {
    "url": "assets/js/11.799b41bb.js",
    "revision": "7c657e7f45eafa34bbdb348efb1dea34"
  },
  {
    "url": "assets/js/12.caa1b9a4.js",
    "revision": "69f37e8610f52e5f56a036b019b415f5"
  },
  {
    "url": "assets/js/13.1afb9118.js",
    "revision": "2fd4d749b961ea9fbd51dc9cb68602f1"
  },
  {
    "url": "assets/js/14.230b8012.js",
    "revision": "c82743fc05b4d896a13d4f38ce81c69d"
  },
  {
    "url": "assets/js/15.11365c84.js",
    "revision": "6332cc3bc3e53b3af050e248e7843b06"
  },
  {
    "url": "assets/js/16.abb50828.js",
    "revision": "0d9cfc4d99456ac6ade97037b85d98ce"
  },
  {
    "url": "assets/js/17.2256879a.js",
    "revision": "eef7f82e484749b8e179d75676a4652b"
  },
  {
    "url": "assets/js/18.8d13360f.js",
    "revision": "0a5bfee42d31af05b2254adfc4f59226"
  },
  {
    "url": "assets/js/19.5f40e065.js",
    "revision": "67cbfacec547d74098188be447c96ed1"
  },
  {
    "url": "assets/js/2.8a4e4b29.js",
    "revision": "6ec10667e86540ebe062cdbb8b3b24f7"
  },
  {
    "url": "assets/js/20.104ebcfe.js",
    "revision": "25eb6e9bc1b244deb1e5b1d7fbef4678"
  },
  {
    "url": "assets/js/21.fa997c69.js",
    "revision": "851f4e5dbe63757dc1e00bad38e86d7b"
  },
  {
    "url": "assets/js/22.25dd68af.js",
    "revision": "e4d01abfe4fb7a7a13134adfbeec2d76"
  },
  {
    "url": "assets/js/23.d2dc0d1d.js",
    "revision": "30d386296c7ee720d06e013caf3c9c3c"
  },
  {
    "url": "assets/js/24.be2c1337.js",
    "revision": "43ddf8a1c4e408aea0444f616c728a9a"
  },
  {
    "url": "assets/js/25.d499f85f.js",
    "revision": "4993a83cdeadaef201aa648eda9671d1"
  },
  {
    "url": "assets/js/26.e4b570c9.js",
    "revision": "d7e016f0f20e4137b5b93da871561c55"
  },
  {
    "url": "assets/js/27.698ed331.js",
    "revision": "e6cd395dacca897c6a2152ece46772a8"
  },
  {
    "url": "assets/js/28.074239c9.js",
    "revision": "e7cd707dacd996aa5d694045e88df94b"
  },
  {
    "url": "assets/js/29.0638a4b1.js",
    "revision": "327e51cfd72fb685344b85606df1102d"
  },
  {
    "url": "assets/js/30.fab51179.js",
    "revision": "88c3776997ad287ff8079c91cddd5e69"
  },
  {
    "url": "assets/js/31.b3546d80.js",
    "revision": "60fa145d8c49a6b5ed1288249879b527"
  },
  {
    "url": "assets/js/32.7dc5eae9.js",
    "revision": "d806c85ba295ea13803915708bca777d"
  },
  {
    "url": "assets/js/33.5c4931be.js",
    "revision": "92f0dd8cbfd78831140e3dd0f3fec853"
  },
  {
    "url": "assets/js/34.0d071de0.js",
    "revision": "e5a760f359b78f5c7e652aab1e6e2f72"
  },
  {
    "url": "assets/js/35.482ece95.js",
    "revision": "bd38172b52b1b943ad069411ee65fb72"
  },
  {
    "url": "assets/js/36.d490eaf5.js",
    "revision": "3a7521fae6a282c409607e6510c9d898"
  },
  {
    "url": "assets/js/37.a03bd0c4.js",
    "revision": "dd241b492230b1de9657b457eca6e0c1"
  },
  {
    "url": "assets/js/38.c0756bc8.js",
    "revision": "7eb70d067a720aa0ce80c16db8f60967"
  },
  {
    "url": "assets/js/39.2a9a1115.js",
    "revision": "9a610fb202626c88730e3b6c042e82f8"
  },
  {
    "url": "assets/js/4.2f8d15f0.js",
    "revision": "556811a3718934037993fac84d91b2b6"
  },
  {
    "url": "assets/js/40.7b639d41.js",
    "revision": "029aa53c41321920bebe2c0e09fd5799"
  },
  {
    "url": "assets/js/41.1b9c8dc9.js",
    "revision": "21ac491b223c7bed69ba88826937a92b"
  },
  {
    "url": "assets/js/42.ffe4065b.js",
    "revision": "a508a14e9e5d60a169c3af5fb3ab072c"
  },
  {
    "url": "assets/js/43.1802a14c.js",
    "revision": "35b420a7b7c42378b22356a2ce914107"
  },
  {
    "url": "assets/js/44.c41e060f.js",
    "revision": "a26c64880724f89af59dc8e30048ad1b"
  },
  {
    "url": "assets/js/45.ac6420d5.js",
    "revision": "f402f530b47d57b502ac7589cd0ae9cd"
  },
  {
    "url": "assets/js/46.a041a742.js",
    "revision": "884d7ba4e71389e72cd8d43609a62c44"
  },
  {
    "url": "assets/js/47.6af7b12b.js",
    "revision": "342b230b1b7edcdb34a27307453a82e8"
  },
  {
    "url": "assets/js/48.5ea41ce6.js",
    "revision": "98ae5cf887933d06b129945e9c324088"
  },
  {
    "url": "assets/js/49.f84a83ea.js",
    "revision": "7ae98765af2550c5f2dd5280799b6e34"
  },
  {
    "url": "assets/js/5.af07351f.js",
    "revision": "52818b80ec18a0ac0937d8eed70053df"
  },
  {
    "url": "assets/js/50.c7aa6244.js",
    "revision": "bed7d2cd4c30f0aa12b72846caede0a8"
  },
  {
    "url": "assets/js/51.9b12cbe7.js",
    "revision": "2b96129c74cdf7726005212a664f34fd"
  },
  {
    "url": "assets/js/52.fc2f22f0.js",
    "revision": "ec3f825855eb5c497c909316393f3f04"
  },
  {
    "url": "assets/js/53.460a9a80.js",
    "revision": "96e10ebd7648d0b3f0e8a3574487d22f"
  },
  {
    "url": "assets/js/54.1824d725.js",
    "revision": "77c6a736565079a4ec235ddacce02acd"
  },
  {
    "url": "assets/js/55.7205b808.js",
    "revision": "8d3f0c3b0582755bf0f75a36d6e2124b"
  },
  {
    "url": "assets/js/56.81799589.js",
    "revision": "b5d60921fd1cbaa0608fe63f9203ef2e"
  },
  {
    "url": "assets/js/57.be633d98.js",
    "revision": "ec466cacdc6abdd77e769f8a4ed0cfc6"
  },
  {
    "url": "assets/js/58.94e1747b.js",
    "revision": "bfacbb4483fe5b3632e643e7ca8a89e4"
  },
  {
    "url": "assets/js/59.b9de3628.js",
    "revision": "ea27d0045864ce08e519ca331088c59c"
  },
  {
    "url": "assets/js/6.40feedcc.js",
    "revision": "6a66ce63bb8ac8aafe4625bb5fe0c0e1"
  },
  {
    "url": "assets/js/60.aa78cdc7.js",
    "revision": "805912e03c4d016b7aa382d1e03d31c0"
  },
  {
    "url": "assets/js/61.806b99bb.js",
    "revision": "353de541cbe4930eb5fd518ab6151a67"
  },
  {
    "url": "assets/js/62.102f467d.js",
    "revision": "f4646485363b6f2e2511076341ba843d"
  },
  {
    "url": "assets/js/63.ee37ad9f.js",
    "revision": "9d6322ff65a7d471b08660489d6049c6"
  },
  {
    "url": "assets/js/64.e826054c.js",
    "revision": "48f0b1421b59fe1ea7abf45248530414"
  },
  {
    "url": "assets/js/65.106d5f4b.js",
    "revision": "42fc5724e72e89a553aa45afc572b7cf"
  },
  {
    "url": "assets/js/66.29d899fa.js",
    "revision": "b57e4266407caba4de336342e749dde0"
  },
  {
    "url": "assets/js/67.21cfc166.js",
    "revision": "5b9d0799071cef64594c45c762768b35"
  },
  {
    "url": "assets/js/68.3644caf1.js",
    "revision": "06c8a6732766ac079b164234dd7ebe92"
  },
  {
    "url": "assets/js/69.65f7aa07.js",
    "revision": "58ec90af0cfd762c88415f71b8590df1"
  },
  {
    "url": "assets/js/7.30511c68.js",
    "revision": "96e2ce48e7241ed5efb1b85d62dc6b55"
  },
  {
    "url": "assets/js/70.ac3e2de3.js",
    "revision": "1c4054d60d3d2a02fc76b89b2db4fb40"
  },
  {
    "url": "assets/js/71.887e0596.js",
    "revision": "eaef994a560c0725f17e80881920911d"
  },
  {
    "url": "assets/js/72.dbeec89a.js",
    "revision": "0c50eecd9ddf46817d25e02869bad5e4"
  },
  {
    "url": "assets/js/73.5b426e62.js",
    "revision": "d69e82f26b9192517697d03dd462755b"
  },
  {
    "url": "assets/js/74.6c19efe0.js",
    "revision": "aeaf2a1b746a7627363e549b1cf4a303"
  },
  {
    "url": "assets/js/75.d89956ec.js",
    "revision": "29e766b0067fe2e63fa132ac2fe99891"
  },
  {
    "url": "assets/js/76.fa2e0a94.js",
    "revision": "e9555c297b11f9a1d13d9e850f22e491"
  },
  {
    "url": "assets/js/8.362ad997.js",
    "revision": "578474adcb38cf221e777bb717b764e7"
  },
  {
    "url": "assets/js/9.4194cfc6.js",
    "revision": "f86e5980778381cc52c43741e4dd5bef"
  },
  {
    "url": "assets/js/app.6fabe212.js",
    "revision": "90e248160a5db3255351ac7e1c082939"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "06c3a4e78a8f3928bffd268188b9758f"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "3085aa9f5dff2fdaecc02b4542d25aa6"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "7652f20025a660e4264fddb3f8b4abd3"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "738348323679edb42cb26f593fd77cec"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "5fab27dd4db86e3f6aec1adf2cf2177a"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "09100a005ad6cdfc0252704a4a6d5b0b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "af217f52a3aa01ad08767a2cdb43b3f4"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "8b839602be2d4f512b0414b94d9cc590"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "1b8ebf3674007b00fb971f824c5e005e"
  },
  {
    "url": "courses/index.html",
    "revision": "b0e0b0c95fea1cc826a59e1cb7a36032"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "0216ca69fab6e23ee3f53d6f4c7b17dc"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "218ca7ffc31dca3af3809cd8dff39f4a"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "6a330a163534c9e03d03a1462fa5531a"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8f0e7efb446367303cdc2a42a808b186"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c57fc3296af96fd378c2565d96ff813a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "01c35f92ffbc5842fa651375516e0539"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "eb7071c718faa98a8a5e019f870f8777"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "49aa652f8f4bf1aa7567c18b1263d946"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "06e49a3a562186d7cc4f0bc18a2b5866"
  },
  {
    "url": "index.html",
    "revision": "54898d261621e6c9d3980e58ac52a47a"
  },
  {
    "url": "studyathome/about.html",
    "revision": "3f543e72030ed29c7fde7786ed94949e"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "8da9b19ad12cf18d23902c2afa689e77"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "88b59d44fa99d11fa0799252521d757a"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "76535628d5bec508ffb70e497a5fb476"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "5fd0215dfc3e790e39dd750bf19b92d1"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "226a1d08e1e0e560b69c6be9286aa4bf"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "5d610a2e280ec5f6552fa3bf1d050ccc"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "d7eb6c38b23859e445589bd475022ac6"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "4b7aeb307cceb3e1146bd650e786c999"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d50b8feca3e4a1ea683d7ebb4f844781"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "c6104a32c7ee10426aaa1d60be28f251"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "4817ffcf5a6ec38045eb472a4bcb118a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "e3cee5f2cd1eae85f3523167e1048719"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "12180360a47f3ef1d206f8947b824324"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ddd8fd333fa0dc6cdabd14657bd25512"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "4c80c2a893a933dfae641190397cee07"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "47a313a6f5738f1c01f9ac1892f3ae42"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "e95841e0c2e7c3e43f49d7830647cced"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "2320c733b5ca1f41ad9cc8034b9ebe7f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "e41108a4775156f01211b78285a298f3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "2b4274c54b74676246b2496a8796f40c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "60c8db462d5bdc334547d60092663f31"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "994687c28ab4e8566a551abea35706db"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "95691e7243309575ba555291b29965bd"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "ddd8fd333fa0dc6cdabd14657bd25512"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "c09cb6d0cf5872edb953193304693509"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "e0451c0ec7e13984ebbec6af572d06cd"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "03aad9c64bda688df014d79161aca189"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "75ea67e9dc45a0ad88e7e15b5b4f21f7"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "29ed812468579e5ab86188fa3dd54e33"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "99019761e14aba2af7e7baae11c79212"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "4c25bae7e7a1c1eed53ebbdd22c61591"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "711acdb598ea618fd1acd53396ea9579"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "76006974b934b85e41d8547e1f2374a2"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7ebd662a27ad45d518ffd97480b3ea2f"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "d19352bca8858dba8abb3468d00815a0"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "6bb5467656919adcface610c7dfaf3b1"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "16d759da5554d3d5d6d13f7041f332ef"
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
