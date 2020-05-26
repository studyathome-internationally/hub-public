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
    "revision": "d222abfa851183b6ab4edcb3fae391b1"
  },
  {
    "url": "assets/css/0.styles.9e593e92.css",
    "revision": "33ea670d4db2c25a4d5eaa1d89317393"
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
    "url": "assets/js/21.d8353f05.js",
    "revision": "23084385e4f1a802e3821b0f7873b523"
  },
  {
    "url": "assets/js/22.ae2062b6.js",
    "revision": "ebeee20ba4c3464c2624acdde81b223c"
  },
  {
    "url": "assets/js/23.fec63b26.js",
    "revision": "06510e723619af28feb82aa58121168f"
  },
  {
    "url": "assets/js/24.f155ac7b.js",
    "revision": "233e6483715e3feb51870e516276e448"
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
    "url": "assets/js/37.cbfbde95.js",
    "revision": "ee4000da0c5dc44a840a6f854d04efea"
  },
  {
    "url": "assets/js/38.498bb353.js",
    "revision": "93770b1f3f98f5a063afec7881f3c51e"
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
    "url": "assets/js/49.14bbb3da.js",
    "revision": "2c9952016d3f9f3ebc9a7084269d3421"
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
    "url": "assets/js/72.2cab3f70.js",
    "revision": "d656aec80887e44083f12faf955aaa8e"
  },
  {
    "url": "assets/js/73.3130088e.js",
    "revision": "3844c8242b21e1e201c91889228bb357"
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
    "url": "assets/js/app.7047576e.js",
    "revision": "9f184dee05a0b1b6eaf001f76840afc7"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "68fd436df3f1321f5f667f35f55d9d94"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "af63695a7a38aa2635e512f6d61a2749"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "30b67aba11d9cbfcc7b7b5ea73ab962d"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "99b969bbbb60a06442d7a62e87eca2ec"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "9faa9020cc49edeaa903cea482e9768a"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "cba13879f5dfa4db4bf6f3149b7a7f13"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "adad7fb01daac129e3ae34e4a2843880"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "ba510e1b08c6aeb29892f031b924cd7d"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "59c918779b90fe57088cc5b5ebbca877"
  },
  {
    "url": "courses/index.html",
    "revision": "bc567fb28f44203671c9efbb8d03ec99"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8be51f699c6f1be92620a39484a613a3"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d08cde43b9d6f341328deb6a526c80fd"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "a6662a1e85bc97247740254378712f18"
  },
  {
    "url": "courses/template/index.html",
    "revision": "b6def7e35d1936debddf374e92578abd"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "ed5fb0fabae1735e9c3a6bc5df4019fc"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "534dd7bde58e4ac266dd228c05f2f8ad"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "792266a2a60f854f0b756b965cd94803"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "4ef0de326c5db641814b104a4ff08db5"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "b8f36047987801a22ac2761952cac96a"
  },
  {
    "url": "index.html",
    "revision": "adfbacda5e8cfa71b8acd62c0d0d935e"
  },
  {
    "url": "studyathome/about.html",
    "revision": "25eeb21ed751fb45cfcb213c33f9e932"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "5939661edc37f89c5e606c4cddd8d258"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "b23561b48154d0aa56c6c42cb0e95ace"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "f6103ebc90116776e070e3102576a846"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "43e4cbb3ae36e9de102ee2b64b61a017"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "b76ee1a9dcd91c142894271da6029394"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "e1df360a1e5748846595f92997091df7"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "af2fa79a34d4a68a55168b622761e47d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "34e2f8bcdeb40651f7e207864b0f680f"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "20f95ac970ca505ee16a5f2fe8265dd7"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "15d430d8e48597251ef5116587c58841"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "4509d4bca8e4fe289664322acb91eabb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "604561b020af75d9f792289bd237e4e6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "323b54ff27de5c49abf8231128f55114"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "159994d8321ed7a6b495618722e0bcb0"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "2cdc6b9d9d81e9f4476427faded79a7e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "f2688da3eb08c0ff5e37ef6fab50f6f3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "65e41236412ce629226966e369dba2d3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "8b1b0c06eb3e3fc64569e37aa4e41cce"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "c32e56e1ee3ff42db02e6a987bad8af5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "08f09083f3765751ca437fa7d57d4611"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "356916d495bf4481d13655d7d2733116"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "798d06cb4ac93bf23f9063a80ec95d3f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "1a396d399e554b4309efc3bfa1eacef7"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "43e4cbb3ae36e9de102ee2b64b61a017"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "27bbc2a167919c179bb68234ae3343d0"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "90a24493fe48056a005dd8f3c1dd4ce5"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "91cacdbcc10d35e9d520484cc1787d55"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "e56b0d3132e936f05bce35ee9a6649bc"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "7615a5fdb0a246059a0fd243f9f6a71e"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "f4ed7e7470a90e764f0f4de4ea66b863"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "481afacafad751973eae1b15721dc315"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "d668594db7f8af234a187475ede43ff7"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "237f3294d5282ee07dfccd13da7e73d0"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "28f130180b901006bdd53bc93615cf69"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "74934fbf402c7fa8baf143139f9acc76"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "02dd52b1b0f8eee5a3050ff46fe18dd1"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "ed594eb03e460c1e15717937c6291c9e"
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
