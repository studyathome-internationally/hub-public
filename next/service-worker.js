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
    "revision": "ee974d81433c3dcb74a7ea41e0620d9a"
  },
  {
    "url": "assets/css/0.styles.bf484b12.css",
    "revision": "fc2a23521811ac0f789bafb8fab2e8dd"
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
    "url": "assets/img/partners.82f515d1.svg",
    "revision": "82f515d1d6b00ca0bb96184a77e560d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.e59dca03.js",
    "revision": "d0e6ad51dd8e7bab85e367983ffcc042"
  },
  {
    "url": "assets/js/10.8370bbe3.js",
    "revision": "30ad1601c615ff853fb0adfeb1fcd920"
  },
  {
    "url": "assets/js/11.eb0112db.js",
    "revision": "33bd62bd0de23c4cdf2ec7d81f2c3e10"
  },
  {
    "url": "assets/js/12.9a3f5b65.js",
    "revision": "69f84c53114ac1d9aafd9305752108e6"
  },
  {
    "url": "assets/js/13.2087ff72.js",
    "revision": "387056ed93b65633547dd1e64a3f8e5a"
  },
  {
    "url": "assets/js/14.8f230538.js",
    "revision": "846000a056f6d46c038b9280aab0b8d4"
  },
  {
    "url": "assets/js/15.18d36fcf.js",
    "revision": "fa474313dce755dffdfa5543a0cbb16a"
  },
  {
    "url": "assets/js/16.b4c8df1d.js",
    "revision": "b108d5ef82a0ad0c6cfc8a46296722b9"
  },
  {
    "url": "assets/js/17.9bf4d4df.js",
    "revision": "febc4b08f82bb30495b422e30ef8cffc"
  },
  {
    "url": "assets/js/18.9792609d.js",
    "revision": "4756007ab72993d4ac1a2c037a7839fd"
  },
  {
    "url": "assets/js/19.e3f14dfd.js",
    "revision": "d43f058cda7e24e5ade53687f29b1f4e"
  },
  {
    "url": "assets/js/2.c0ed00ab.js",
    "revision": "0f6a7ed81e742c8fd008c116c96c2eaa"
  },
  {
    "url": "assets/js/20.039f1fd2.js",
    "revision": "8d5b2c0d16afaab086134071cfeae359"
  },
  {
    "url": "assets/js/21.94bf928b.js",
    "revision": "de82d9378dff3f2b658854cf4171a504"
  },
  {
    "url": "assets/js/22.ae2062b6.js",
    "revision": "ebeee20ba4c3464c2624acdde81b223c"
  },
  {
    "url": "assets/js/23.76fa6ffb.js",
    "revision": "42b6b22ee6b32f9b5cab39ac63cf47f3"
  },
  {
    "url": "assets/js/24.28342fab.js",
    "revision": "80cfcf9a17fba19e609ea6dfe3db614f"
  },
  {
    "url": "assets/js/25.eefdd720.js",
    "revision": "617253e7da9dad1c86a3c257c6dc6f8e"
  },
  {
    "url": "assets/js/26.7e8e2dbc.js",
    "revision": "87cdc8009ffc3acf51ec7ed8f92ad903"
  },
  {
    "url": "assets/js/27.5fb89c61.js",
    "revision": "50084fa8d72da4ae17b9b779995dcf4e"
  },
  {
    "url": "assets/js/28.e16b0bff.js",
    "revision": "8be611ec1ede8106b3e136f7b8b34bcf"
  },
  {
    "url": "assets/js/29.71a6c06b.js",
    "revision": "016e55ba506f51077d14d27daf5ec883"
  },
  {
    "url": "assets/js/30.f17b5bf2.js",
    "revision": "5d732142156763296930934959307ff7"
  },
  {
    "url": "assets/js/31.15d5f6a5.js",
    "revision": "082125b42f970d292693094d5b00a74a"
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
    "url": "assets/js/36.d490eaf5.js",
    "revision": "3a7521fae6a282c409607e6510c9d898"
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
    "url": "assets/js/4.a8dddcb9.js",
    "revision": "332d85743b3ac3e2c74cb65b6b5f9df2"
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
    "url": "assets/js/46.2712c2c4.js",
    "revision": "d5238c94382e6e71bbbd3bf4a6c6f102"
  },
  {
    "url": "assets/js/47.6af7b12b.js",
    "revision": "342b230b1b7edcdb34a27307453a82e8"
  },
  {
    "url": "assets/js/48.3fdfe58f.js",
    "revision": "4073b12a37f4a0fcae7c7dd87ec84d7f"
  },
  {
    "url": "assets/js/49.dc236c0b.js",
    "revision": "d6205ecb05756793c6dfc8d7384e94da"
  },
  {
    "url": "assets/js/5.0f95ca27.js",
    "revision": "1a0d54c7f5de4c49c775dc5290a8f326"
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
    "url": "assets/js/6.b7207f69.js",
    "revision": "3ce029acc21b9b54e8421b5e37431b1f"
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
    "url": "assets/js/7.fa396445.js",
    "revision": "f6c11fc0e5c6f7060b48c4c6fdc9c8a6"
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
    "url": "assets/js/76.654f010b.js",
    "revision": "db2edba17e37512edf3d172389f9431d"
  },
  {
    "url": "assets/js/8.2c6a2b4e.js",
    "revision": "c2de16cc61dd799f8e31ee003c1dd7cb"
  },
  {
    "url": "assets/js/9.69debf2f.js",
    "revision": "7dfc582ceaa6b982382eb7a0c7e33e49"
  },
  {
    "url": "assets/js/app.4645d1e8.js",
    "revision": "d9b781053392b376ddaaf611ccd23a91"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "5776a3892cfb924c7a9f63c865f340ae"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "d8a9ddb90c391e810723ffcc667fee3b"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "13e216d95ce81b8d9712278c812600c6"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "54832cc403a0e298f0bd03876c79d3b7"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "6a2b5a11714381afa854a03ee2305639"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "29fd5185ad15d3a0feea21a00ae3da98"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5aa32f7a41c6dcf3b0a1d704643b7d90"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "609a09e5b9c97b6a3ea5a7ed4df06622"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "ad30cec57d9d1af5c8f58b4f02e536c7"
  },
  {
    "url": "courses/index.html",
    "revision": "c1ccd6d4bb329eb633db94fe724f1109"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "b83a29efcd5ac0bfe194b499fd837941"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "b9c9bbc43d8eb273b6b71dd6577df421"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "c4465dc9850e0ee09bd43cb87552773f"
  },
  {
    "url": "courses/template/index.html",
    "revision": "e32f0ca06c374e21ce4ea6d5eb172970"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b68691bada68b4bff61e8fb2130808fd"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "725fb4768944684ab8921ad01d100464"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "ab923e896abdad9b4eed88c8e990d10d"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "b2e22d46573720ee11b747537fdb5ccf"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "4dfcc581f5e31f8c76a76bc8cd57c2df"
  },
  {
    "url": "index.html",
    "revision": "40deff42afe28572dc658404ad5161af"
  },
  {
    "url": "studyathome/about.html",
    "revision": "6c1428aa30c1113599582299e8cf09e2"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "73d3d2fc3985acdc33762e5669087f18"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "82337c6e2e4d7ddf526ad53dfc921d43"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "acf5522a7a7cef168a0832009c62f03e"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "3c2f3298a0ce9fcd7f7da885dd41377d"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "6feee714e207cf8f43d243c82cb10538"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "7060968b6a445c347e5d65c124049705"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "97b4c2a4c9fdac176d56c635a3a983f0"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "56d9dfa5a03883d174584528a56a29c6"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d9a2f940999b7d9471572ba512ca8b78"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "fb12f15c3259554a54040767dcb978c2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "5241971b54e4a0de168eca0f8e3e24b1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "5590762bd043ac9b01f00a45f581636c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "a5080cfb43208bef3b6c33cb32e8de2c"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "db5d3ce37e8e962dd81f8915e7f6245f"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "0642850947c3bd65bcec5613f71cb662"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "c18c6c48e25e3eb34f83258b1813b7af"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "4c48a1b50104b1c3d15a393cde01fb60"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "baa7d6ecf93dcf2e8b470f63c95958ca"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "081d564419bd1e71b063a431f59660bf"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "215eb5b6fb9e3796c6c69e677e19a5e7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "a6bac20e10b549a71d72bd10b0f0563a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "c10dd08307ebd170a8568545bcab8ba1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "343bcaf364cabcc224d5b13b48bb81bb"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "d9a2f940999b7d9471572ba512ca8b78"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ed728ce3149fc9d972a2cd654a6fe882"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "76f2e6bfe82efced6686245d52391103"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "18babd47e4e553bebfbd15697fe26702"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "c3b59894b3a759f9a9b2f63342984c43"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "778c5f05feda9cccdd87e05b723b40ee"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "3e358ff1dbdfeae3c31f5158c67dad93"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "60f3742f0e24139583141f80f57b59d3"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "2dc6efb6c14a84775b0f3484a1fa454e"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "461ee3fab57c1e2958108d1abedd5bcb"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "cff8912d12c6bf849d2ffe3ace2fead8"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "dc44f3e07e63f110fa5ea22a8bcc6432"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "a96f9ea72937a150b83d5293b0cc87e0"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "336fda71d954da58208128afb28505e5"
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
