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
    "revision": "93b7decc308449662231edc20b7cde0e"
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
    "url": "assets/js/1.45efadc6.js",
    "revision": "5e31f1842f28f3514b1c8d12896dd9fa"
  },
  {
    "url": "assets/js/10.307f2345.js",
    "revision": "1e9b6832c5d16a77bb1cfc30d1874c1a"
  },
  {
    "url": "assets/js/11.6ab837ee.js",
    "revision": "2e91ff684f1f4854102bb393638c7bb1"
  },
  {
    "url": "assets/js/12.8eb812a2.js",
    "revision": "33c112145534e93538a06c5927e48b7b"
  },
  {
    "url": "assets/js/13.8a8f3cd1.js",
    "revision": "f73b8506286950dac5672160bece0788"
  },
  {
    "url": "assets/js/14.b39cb5ed.js",
    "revision": "1b7eb0c3445877e6d36614dc9dfe78fb"
  },
  {
    "url": "assets/js/15.21249652.js",
    "revision": "7adfd5835bd9b492144bac397efd4e2d"
  },
  {
    "url": "assets/js/16.659905c5.js",
    "revision": "d823d9a85d453f2a78680f64c82f2a8a"
  },
  {
    "url": "assets/js/17.d2c9d1df.js",
    "revision": "2e4fa6dd3a92012e5ccc7d25d289fdbc"
  },
  {
    "url": "assets/js/18.625d68d1.js",
    "revision": "5ee8f74b7bffceb532d8950e67b1b53d"
  },
  {
    "url": "assets/js/19.f94ca863.js",
    "revision": "96e587e02f7a36269b03d5f565063052"
  },
  {
    "url": "assets/js/2.455d4bdd.js",
    "revision": "eb9aa0f017afe8e0290ce8f8c0625706"
  },
  {
    "url": "assets/js/20.0594a1a6.js",
    "revision": "c881ecf695d84561195fe32cd99cdf72"
  },
  {
    "url": "assets/js/21.ed56f1df.js",
    "revision": "1b44e5150c0bb89325a2c38b5c57cade"
  },
  {
    "url": "assets/js/22.07a7ecec.js",
    "revision": "5fde75f6fa34ee880610cee69f6929b4"
  },
  {
    "url": "assets/js/23.0534bf2a.js",
    "revision": "aedf0d2e9a557ee7c54054e697435d04"
  },
  {
    "url": "assets/js/24.68fcc6d1.js",
    "revision": "d391720bce665f28e3a654c63b61e814"
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
    "url": "assets/js/29.9e7fffa5.js",
    "revision": "67d7762a93ad6cf3872c436c130031f8"
  },
  {
    "url": "assets/js/30.a4c8d8d2.js",
    "revision": "5741af0f84b95c8184862000c24da5d2"
  },
  {
    "url": "assets/js/31.062c9866.js",
    "revision": "edd27faf987b9b5d0b2c9a1f13f9a928"
  },
  {
    "url": "assets/js/32.aac09b5d.js",
    "revision": "804be52ff948952802d315e449c863e6"
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
    "url": "assets/js/37.ac3f9036.js",
    "revision": "b2b330d6dc9da35ed9b418e24c525c5f"
  },
  {
    "url": "assets/js/38.34285cb3.js",
    "revision": "bdf819a0016b03c8f7bfd67fe9f03efb"
  },
  {
    "url": "assets/js/39.0dd6ff6a.js",
    "revision": "3348859f8e13572f69e054f7b640043c"
  },
  {
    "url": "assets/js/4.1eb2b6fa.js",
    "revision": "e163580db6fe0e694406ab5092703ad1"
  },
  {
    "url": "assets/js/40.4b121f8f.js",
    "revision": "92c525be8467efa7bbac734f8d1424d4"
  },
  {
    "url": "assets/js/41.63012cc9.js",
    "revision": "cd08d7580c77c58ddd4604154de94c12"
  },
  {
    "url": "assets/js/42.7d93d559.js",
    "revision": "804c8079d4c6181e4b0b8ec6f363c418"
  },
  {
    "url": "assets/js/43.fa6461f7.js",
    "revision": "3fa11a0528aa088f8038410aaad02efb"
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
    "url": "assets/js/5.4c7ef493.js",
    "revision": "4f71df4a40686324ea6b6b3405f27c77"
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
    "url": "assets/js/53.c419e1c9.js",
    "revision": "59c050eab1182d61ad2a7a43a3349361"
  },
  {
    "url": "assets/js/54.9ccd841c.js",
    "revision": "949d426497d3d6bd1872260121633857"
  },
  {
    "url": "assets/js/55.b4dd0178.js",
    "revision": "da6644f71f8ee392cab57e2679b5d571"
  },
  {
    "url": "assets/js/56.3f66f99e.js",
    "revision": "760f6f24dded2a36567a79bcdbf50428"
  },
  {
    "url": "assets/js/57.3b0939eb.js",
    "revision": "5fbae5794290c4a8ea6956bee3ee4bb4"
  },
  {
    "url": "assets/js/58.6e468008.js",
    "revision": "411460121c0aa05dec565c601c8c6fb8"
  },
  {
    "url": "assets/js/59.a1334a7f.js",
    "revision": "d445c4138e469f63cd19ac4edcfc1fb2"
  },
  {
    "url": "assets/js/6.c3fca63c.js",
    "revision": "6270aeb07e5468160b62766b4f7fb943"
  },
  {
    "url": "assets/js/60.d9c6cf99.js",
    "revision": "68ab18b52abecdaec818dd64527a79db"
  },
  {
    "url": "assets/js/61.9f0c0500.js",
    "revision": "0d2f9527c51195265501d58cff2bcc9d"
  },
  {
    "url": "assets/js/62.1941ced8.js",
    "revision": "5cc4840ef6e9b8eb8c6f3cbd696c607d"
  },
  {
    "url": "assets/js/63.75aab516.js",
    "revision": "08087daac5a66073072ff81d287af1a4"
  },
  {
    "url": "assets/js/64.9ae3bd65.js",
    "revision": "d8c7d84e0ac405af6d5721b151801317"
  },
  {
    "url": "assets/js/65.50d9600e.js",
    "revision": "ca541e244c3d230bafb7b814f6e33470"
  },
  {
    "url": "assets/js/66.dba08ee9.js",
    "revision": "7cfec056967a368119a1c492f52d5cca"
  },
  {
    "url": "assets/js/67.fd0cadbb.js",
    "revision": "50e0298a7b82c7fa39998111c1b6b4c4"
  },
  {
    "url": "assets/js/68.00f260dd.js",
    "revision": "9abdcc583a637548e43791a78ff8c1f0"
  },
  {
    "url": "assets/js/69.be0d33d0.js",
    "revision": "2d3d8340d546fd9c6181dffc9ff1c355"
  },
  {
    "url": "assets/js/7.7db236c4.js",
    "revision": "e797aa4596c70e73770ff87f517db44f"
  },
  {
    "url": "assets/js/70.f671b8b7.js",
    "revision": "f0f5bb69605ccc5375b0286a03553542"
  },
  {
    "url": "assets/js/71.61ae10ac.js",
    "revision": "824c4de08876b5bb288070760613e9b0"
  },
  {
    "url": "assets/js/72.ff13a5b0.js",
    "revision": "d02340e25f671cf232868ce4b3c108d5"
  },
  {
    "url": "assets/js/73.c9fb3f38.js",
    "revision": "6c9206e3cbdfd7d1662e9c263f5eb7ca"
  },
  {
    "url": "assets/js/74.54241c1b.js",
    "revision": "902884b5dde7f622bd450909a71c79d1"
  },
  {
    "url": "assets/js/75.505850a3.js",
    "revision": "9af446b1b9934afe585140c5ff333c6d"
  },
  {
    "url": "assets/js/76.1d330d32.js",
    "revision": "68be20e94e6d5719207a9d705695c7c2"
  },
  {
    "url": "assets/js/77.1e4a51b0.js",
    "revision": "f16346145257ff831dad8c2c2ccdfd64"
  },
  {
    "url": "assets/js/78.6074bcda.js",
    "revision": "cee8e45b8ff9074bfad517792c97556e"
  },
  {
    "url": "assets/js/79.2af154db.js",
    "revision": "b675e6178c195cb1569968f806ff2927"
  },
  {
    "url": "assets/js/8.86a2271b.js",
    "revision": "d29c5eced42ed519d6790f4341ef50e7"
  },
  {
    "url": "assets/js/80.e959f53e.js",
    "revision": "b0fecde196014027d4be12e2d6172048"
  },
  {
    "url": "assets/js/9.44607eed.js",
    "revision": "0e8385d30d061a83a9bcf3d02c89343e"
  },
  {
    "url": "assets/js/app.9ae11a6a.js",
    "revision": "5b36c529b2bc47dfdbeb3fd47b6ba8be"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "857130ee5898152c5278af489b70350b"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "fbf574a9839ae869e693abff62e53f05"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "8b69a1235a8af90e058cbcec3103ed59"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "14394f6d81d988ef750cef2c29c8b666"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "a02dfbaef4ad2023e8ba999304af2ba3"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "4ad2b58ee608dd1aa35b7137e3dc4756"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "d6ef638125f81ea0f7cb7acbe732bccb"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "7a36a87d1307707810734ba10b9b4c98"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "a1011cd10603a6d53498cb35e78b7f00"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "26aac8ac9da2b3e350a14a3b1745511f"
  },
  {
    "url": "courses/index.html",
    "revision": "9b8eec768847a079f9426c35347611d9"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "d3198cbf59819a5b5957a384c8ddd20f"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "ed90b1aa68a742f452c712c4ab4dda0d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "04132a30b9a56fb9db8edefd4971b2cb"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8fbe8bdd956cb6dca13874b6a7128170"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "1de7551afea5b06cd6770c306f1fa318"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d3cf61ff30cd41b0d229ffa7ca9df0f6"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "6b1a43a431ad70407721dba8659dd184"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "c5a2f65b0b9979213c57da6245d01ce7"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "b78698e66b1f1aba1cc6e7358056d3b9"
  },
  {
    "url": "index.html",
    "revision": "2ea8c1a9ee268c349396c5289b9a1715"
  },
  {
    "url": "studyathome/about.html",
    "revision": "999d6de7665383395553794191ecd6c7"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "a3a558ae29d95401f7a192ec758d2852"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "9ef524ee232d11cfe82009e031abfbc0"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "d98562da8e7fc19a1137092ea0ad48c1"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "839d33a53f5df9e45b0cbf8b1dc31e00"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "e4f3c14aee15c8f70b4a06318b0cc1fd"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "01364d200bed3b203206f49248e378b2"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "5acb54fceaad1cac3d7b88560c3ec3ad"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "125ea568141aa3f3a24b3ded2b5bcabb"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "218e76bd1f19b7c296e0076368a19dc2"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "07d5ef5bc79a1a0130c1eee83a256660"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "8a70a21f49e8200cae764080059bc82a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "72cd6f126ea0c80b0b8e5ed5bfe0c17d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "f69bc4918d98ef2591fa4ef08a4b52bd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "649b361632277a4e1d841b91faefeafd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "97546efa43cf8339ab2492115fae9ea3"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "839d33a53f5df9e45b0cbf8b1dc31e00"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "5de303055d2c2e18a78ffd2d532d3d8e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "151bca9421cded9ff1ed06c98b237a14"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "178df77cf6dc639b5f055680d8f5b13f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "90cd5a4dba23c32f21d08537e1bab89e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "3346f4d1c81471c921e64eb3c7ec17f1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "994d67cfbc06e4a359d69db4da7724b5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "f3960ec16c4794ea3ce817c4e224cd0e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "435ef1b5118741818981297c2f936f0a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "c4327dea160d676a1aac1d40468e3e81"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "839d33a53f5df9e45b0cbf8b1dc31e00"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "083596ce6b715ee7cb4ef27bb70d72aa"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "342787e4fd9a6967124ba20b91d97f63"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "a0de1b7ccdc82599055b9b5680acfddf"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "27ee58d801763dfaaf894f5ba28bcead"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "2f506da6e82fb6c8ab09704caae61faf"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "cdd42fe3e28a3bb0be3709185a70b0ee"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "4a1b96ae3f97cfdb09d5bb434f4f4859"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "ad93189c1fb7e6643797ae1bac571440"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "28a543c24546c5cb8056d6afb4a30a5a"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "a2d9742ecec32a090d0838f960286b1e"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "b7c1ad33f031faa32a6536f4b8eea419"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "c96d26bb89648b952bfd2827ba1ccf65"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "aa198822cfe5473f072cc7fca8efd6b8"
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
