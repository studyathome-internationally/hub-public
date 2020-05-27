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
    "revision": "26e330e448ae70640ff82fd821f2dc64"
  },
  {
    "url": "assets/css/0.styles.4d73f099.css",
    "revision": "211e1e4ec853b2551e489ec2a7d7d899"
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
    "url": "assets/js/14.a5c892bf.js",
    "revision": "b35e83b0ef3ef2a2123494a6d3511bb8"
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
    "url": "assets/js/20.8edb3af1.js",
    "revision": "5b8b17e8d0c4fb70660bb4178ce0de50"
  },
  {
    "url": "assets/js/21.fa997c69.js",
    "revision": "851f4e5dbe63757dc1e00bad38e86d7b"
  },
  {
    "url": "assets/js/22.ba87bfa4.js",
    "revision": "cfda5f44ac5d1ff133255b95b8306193"
  },
  {
    "url": "assets/js/23.d2dc0d1d.js",
    "revision": "30d386296c7ee720d06e013caf3c9c3c"
  },
  {
    "url": "assets/js/24.d7a9854e.js",
    "revision": "b8ebad2383d6a87ecb5d10797ed071b8"
  },
  {
    "url": "assets/js/25.c513ed44.js",
    "revision": "a16af37c34a5bce2ffcd3741a27186c8"
  },
  {
    "url": "assets/js/26.8fa76445.js",
    "revision": "a29d13a22f226130151a3812c7395393"
  },
  {
    "url": "assets/js/27.698ed331.js",
    "revision": "e6cd395dacca897c6a2152ece46772a8"
  },
  {
    "url": "assets/js/28.1354810d.js",
    "revision": "24736acc407605e4055564a4679261c0"
  },
  {
    "url": "assets/js/29.18ef0571.js",
    "revision": "25292e3b93f332893189bdfda5943f38"
  },
  {
    "url": "assets/js/30.b0fee3b1.js",
    "revision": "25e76e36ed415c8b480fcac920c718d4"
  },
  {
    "url": "assets/js/31.f09e15f3.js",
    "revision": "171c39f2e6c20d728139dbee134cf0ce"
  },
  {
    "url": "assets/js/32.f9fdd648.js",
    "revision": "48592668f26361b0e42d8056691d067f"
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
    "url": "assets/js/36.04c729bd.js",
    "revision": "d1b6c6b43be8e161b95612236d7d6701"
  },
  {
    "url": "assets/js/37.a03bd0c4.js",
    "revision": "dd241b492230b1de9657b457eca6e0c1"
  },
  {
    "url": "assets/js/38.6972f104.js",
    "revision": "e4be7c4b1045c587b804bbf2bc0f75ce"
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
    "url": "assets/js/41.13e195ef.js",
    "revision": "1f91a0a606c6dd21ef4dbbda7d259fed"
  },
  {
    "url": "assets/js/42.a84a4fe8.js",
    "revision": "9334324dffbf7fb8bf645baab0c20ce4"
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
    "url": "assets/js/46.2712c2c4.js",
    "revision": "d5238c94382e6e71bbbd3bf4a6c6f102"
  },
  {
    "url": "assets/js/47.6af7b12b.js",
    "revision": "342b230b1b7edcdb34a27307453a82e8"
  },
  {
    "url": "assets/js/48.7c73e3f1.js",
    "revision": "cd6e3af2d145643de1111bac663ddddb"
  },
  {
    "url": "assets/js/49.64ec564a.js",
    "revision": "15d7819937cb2597d600af6812c7e924"
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
    "url": "assets/js/54.cd0b95a7.js",
    "revision": "39223b3baa6e6d43f38422bb7ceb09fb"
  },
  {
    "url": "assets/js/55.7e7a467a.js",
    "revision": "cd95e60fc408296a1eafd8f4d5f8311e"
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
    "url": "assets/js/71.3c1219cd.js",
    "revision": "35634af4111b6ea8955d5d45887b8cd1"
  },
  {
    "url": "assets/js/72.dbeec89a.js",
    "revision": "0c50eecd9ddf46817d25e02869bad5e4"
  },
  {
    "url": "assets/js/73.bf981cc3.js",
    "revision": "c7cf3b67cfd4f7319db45e20597e617a"
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
    "url": "assets/js/app.a44b60c6.js",
    "revision": "9242ec0e50f8436eb090c4ae7c3e20a9"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "f37c51ef4e3eef6ea002bc0d1a7e8a6b"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "49030678bc603759bd492445f633fa85"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "6f8f659990b28a850434824b0b4794b0"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "37b437145c93c1111553cf1a6b299af3"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8ea78733a6daece17a11538ccce4c2be"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "e872e6b037a0e6a7f2df8bbdafb7e0fb"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "fa681a4bf74b5afa08fc4c1866d13c5e"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "0d593171e5b572ac39e5ea826a21d3ff"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "db99ffcb9ff8cdaf6b97b3d1dbb2ef26"
  },
  {
    "url": "courses/index.html",
    "revision": "d0f776198fbc9e1c606f00496642c083"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "83c244e024833b5b007434076d2bdf99"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "ec6f04b80018888319c08ca844cbf7b2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "f9a40f70d0fe94b5f8849e7317ee7b91"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2b6c3115680e09df556e4f8f19e0fc70"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "eba0b8560f0b6a6690d0db9c00bcd7d7"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "70be183c4212f31b9ee1de72067300e8"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "f8a8a1e631e337933e1334ab703dfbb0"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "aca2ae6388a4225f1c32e58b6c07f20a"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "f93ed2b9eef1832cdb3348cd11e2bbe0"
  },
  {
    "url": "index.html",
    "revision": "62f3abae225b71cf7f3266c7435db3a0"
  },
  {
    "url": "studyathome/about.html",
    "revision": "6613f55eb441bc3b4c6b68198766000c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "7847ea0c062e7bba6c6666ab3b77bddc"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "f40b14c40b64b040b2105b5bb47182f0"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2cc20d6da7d6ebbed47110cadf4ad834"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "de15558243ee35f5b794191e9fa5b71c"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "b1baa998a39f8d18448f3c10b406e5ad"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "4150a93cea0979d01974dcb9030d0d3d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "af870eb3fa348c7a6a7c7fffe34f4e4a"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "29e3d10ab35a218756184f1baf896f2f"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "af543f4a4223ca5e6cc60db97ca7c687"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "d72ffa3e071c513ad5d0ad3fd689006a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "daaffb03cfebce14f776fb5dc48f4a86"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "e4abb3b41ed97b5637efda1736a4af71"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "9121c5eaaaec441acb131b45532de0b8"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "de15558243ee35f5b794191e9fa5b71c"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "ba4934d1921d1c1db349c84ac1123690"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "aa91fda90218285dc160855fca1d45f1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "e614a71d277ae3917dd18a71cfb54c68"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "57330f3b0a07748caf15e22aac4fdd9c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "1463b9c5bda24fd0a6e903d9738b4bd9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "18085e82a93a0ec99f1cb5a626429146"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "af091972ffb4fb19ca5e13861565d631"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "b651c32210a7cf3c9d1d187518b8245a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "6dd3f6e5f5ade38bbaa84097df8a13bc"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "de15558243ee35f5b794191e9fa5b71c"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "5755bdb34925d7a96df0a1891fdbe4d8"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "13b6e46472f99f8f0b57b00a8ebda0dc"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "5aa1f3cc000c36d268f2b3ff5c950365"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "f7789be1e2749244a1cc44d91b92752b"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "45c8f7ec6e68bde568e17d3930bb1b61"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "2f8f2bf7d4a9fcc4a9e06dba55a38aa6"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "f514416d46a597f6660535f4589657f4"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "41c47f1e4b95e328177d90d4654635fe"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "ccc1d2a83d3aca5217de1784c45524eb"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7e9f367fb8fb0075d243090fb1029c14"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "696c28e2679308a1be393ce3ddbb2565"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "a8e8d6496579764f2a7e6703cb1d207a"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "e938b4a709befca9581250c41bd88df3"
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
