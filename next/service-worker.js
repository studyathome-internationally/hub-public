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
    "revision": "f5837cf7ab015813bf81a1299ce3ea4f"
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
    "url": "assets/js/37.a03bd0c4.js",
    "revision": "dd241b492230b1de9657b457eca6e0c1"
  },
  {
    "url": "assets/js/38.3f181b17.js",
    "revision": "be05bedcae435e40b608d269885b05ba"
  },
  {
    "url": "assets/js/39.693652e9.js",
    "revision": "2f668e30b64ff485ebff08a8ff9ff48b"
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
    "url": "assets/js/69.b5460080.js",
    "revision": "92bd7f3d70d7c49abe8d8852d528e731"
  },
  {
    "url": "assets/js/7.fa396445.js",
    "revision": "f6c11fc0e5c6f7060b48c4c6fdc9c8a6"
  },
  {
    "url": "assets/js/70.959bb44c.js",
    "revision": "8405aa71d0aae55649a19dab8fbeaf53"
  },
  {
    "url": "assets/js/71.471e3d4e.js",
    "revision": "3708673e3e9a9b37ebbf36e6fe8c1e95"
  },
  {
    "url": "assets/js/72.35675715.js",
    "revision": "1c3808024670e6451efb3f1f59746261"
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
    "url": "assets/js/app.9aa95117.js",
    "revision": "ee1fb261e6bca086a3846ff5614c2c47"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "1d7cbae02aa292813c685129e4016ad0"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "1a79e5def20c6dbe8c696140206c2496"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "ff4c072b324aeada6ffb6fe9d37ba7f7"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "d7aca0ec9816039bb5e3b98f79d8e68d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "5420e34d046563f0a730425e42cda970"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "c39956ff571603412ecbd4b62a747e8f"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "f2c502065504d77f0a4b73b634c22583"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "c6288d304dc49e90a20f764c69ef9011"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c4d271670428acbf884303352bd1f8d7"
  },
  {
    "url": "courses/index.html",
    "revision": "ebbcb547bbd099d0f33ba967e266e2ad"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "904d0021064855b7a00c486f5ee61b8f"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "b56201a0967274ad3d5ca9abee8555f9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "e1ec5582be0e27d4d8552832786379b2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "b3f2926102da22e01e63b4b3711f1dd5"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c9ac9db206a37bb08fe3f5e806bf5ed0"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "7ba3187af032e14fb8f6ab1b174be254"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "e7535cd2621f8a571ce743fa98194386"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "86610433a5d5c5a5fe6e6316a1ea25f4"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "936a6b182b41448ec95042c4e7d7082c"
  },
  {
    "url": "index.html",
    "revision": "6b029d9f6961eb67399d2f83ba34b97e"
  },
  {
    "url": "studyathome/about.html",
    "revision": "65b44da7143ac87aa9921f6cf86c44f1"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "569e65d90d8064d34c245ab95abd4557"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "12d8cd7fad99da6b954178ce79b8f058"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "5fe10ce063810936206b5326d1aed55a"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "9e9c86944010ca3190aa66f6f766c6ec"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "2541fb68541d5234c1d9ff18bf650f0a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "3194dbd172d9d636401e214646e3c15f"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "bbb778976dfd052878d1d434f152368e"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "db2607f4c533357c560d3a6e9cd28fea"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "f806afe18edd568fb39d2e9689d7b823"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "23e0200b042a7b4120ed47952cbe0c6e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "67a46bf0671bcd8b395773f25fa88b85"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "65e0c5b50e34bafe8bede745bf274df5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "8525c819eb042db73c3f509c6bffbea1"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "de4caf22347e6d72b25f7fbc0ae53858"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "3d725fb6408b7ec77d696d6851acec0f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "a51c4b407b98153d82d95689b748ff3b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "b1063394e71f2f7c58538dd16129a3bb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "025032d65275d1e7f30d52f86c44694c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "40a6951da5945700584bd924cd77c0e5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "ea30395870a57154e22fc55a5f3f0980"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "c4c76748e4658b0ac44a591f01abf002"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "ed75ad70ad569d9f250aefe2e58d50a4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "250e575b67538c1da2f97bc8dc7f30ab"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "de4caf22347e6d72b25f7fbc0ae53858"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "c2daf6ab91ba391cc1b08f2e414aae16"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "e269ebce2d92daa10e5b2445ab6f56ae"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "7ab49bbf355764442bd4bd8e8de9aed6"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "55a4a851cc2c3310823dc312ff7fd8ba"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d0d3e99f8a7b8b24c1aaca4e4ba8c067"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "e293f14b370fe2bc33194aeef5d2c720"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "ed78799e409718aee63304df65247e71"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "a991f7d83dafcd7b46ec7e076a6b8b9f"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "e5b9fcd4191da5816bc16d3fb47af801"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "a5b5163daf64af6f9560c711681bb70b"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "49cca9749e2cb353e6c1e600a6fc670f"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "086d9a9930a2f078bbd670ace3632c24"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "8fb16afed929759e22f4f89426c5f9a9"
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
