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
    "revision": "5088d4b22e106570e8a6e3e1aa5d8d1f"
  },
  {
    "url": "assets/css/0.styles.fce805fe.css",
    "revision": "696acb18ffc69eb17bc8555aa114b0f0"
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
    "url": "assets/js/23.fa56cc19.js",
    "revision": "25fd3946ff7c1fd0c3bbe0781ea74d47"
  },
  {
    "url": "assets/js/24.f155ac7b.js",
    "revision": "233e6483715e3feb51870e516276e448"
  },
  {
    "url": "assets/js/25.6243b653.js",
    "revision": "209abe28e9260e1162de8571439234be"
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
    "url": "assets/js/44.1a36a8ba.js",
    "revision": "3ed73a3128190127b0f16048c8609c0c"
  },
  {
    "url": "assets/js/45.c71dc678.js",
    "revision": "e43cf5d5745c06846bd70b8731ec1bb5"
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
    "url": "assets/js/56.14f7fd0d.js",
    "revision": "632a813e0555dabc3609ee03a3a71597"
  },
  {
    "url": "assets/js/57.3f9ff7a2.js",
    "revision": "e15032aa407e8a2d944e0a5aedc3990e"
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
    "url": "assets/js/61.210a1613.js",
    "revision": "8887a2c4638ead68b2d32c079b5a4c74"
  },
  {
    "url": "assets/js/62.8dbb26c5.js",
    "revision": "c90534a7ff858be17d86f4eeb2cfefee"
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
    "url": "assets/js/app.b1f58170.js",
    "revision": "7cad858965c7da7d2fe2cff11b4205ae"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "f8997c1f1f0035e80f978a9473bebf5c"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "4c6c1168e2e4ec8330a43471fee71215"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "66ef7529b2459a9f6ae2cb813ef0de91"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "30be7e50b14d01a0bf7cde54c5b33069"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "1c6d2fc15fb0f465962ddea0225207dc"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "4b37171aadb2161888a04292bbb7aaa4"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "c51ccf1e1412cec54c8c47174f4c785a"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "929d28b9846dac6bb9d3b9ff88474395"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e5d241d98408f1547eb518de90decedf"
  },
  {
    "url": "courses/index.html",
    "revision": "bf1ebfc75b5d28ff72f5cbac08d57324"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "08758a4eefaa6f32b85e0aecb919220b"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "68a09fad38bd33e67e876d760f021618"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "2cd507319b9c0532e235512ed6cb8cdb"
  },
  {
    "url": "courses/template/index.html",
    "revision": "4f6b090d920f3a89f0126d03a2d51510"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b8e904c5296295e12fa682b2821d32ca"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d5d6f709f9584b7e4cc905da3ea0c94a"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "12310432a31d8c19f745aacfc7ca5134"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "35d21ee17c01ce51a8ca0adfe54b4c14"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "06bbb64009cfee065ff1f7dbc9ba7054"
  },
  {
    "url": "index.html",
    "revision": "2b4acfc1317c19e5b1a17f8797fa80c3"
  },
  {
    "url": "studyathome/about.html",
    "revision": "8ca939cf0a3d1cc7d1f9f5db0a37c3b2"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "c8a8d3e1512ee2d5aa95bfc117578da5"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "da3de82efbe469022a6224940f365b25"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "062579d97023cd0070d181a008a76411"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "2e35d65be7adf7a17428a5b538d1b20a"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "00100465a21d45f075ab98a5f71d00ad"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "0527c15579f1df4bb26182ee84008870"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "3f01330f71cf9b3804a29d49095f948d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "f5bd11998cd590a0ea7ae21d4f34def0"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "5088d4b22e106570e8a6e3e1aa5d8d1f"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "21ab0259cb556d288b0e35ca57bdf167"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "e136b266af2c2669de7d24dcdb0c0075"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "55b3c1214960859cd613948e1e204be5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "adf2642a66a29f2563f140d83b398e9a"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "5088d4b22e106570e8a6e3e1aa5d8d1f"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "e01b4e38c4f3aa0bab5faf4789d085c6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "8d667232cd8a6c90d9451274a129d89d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "6184bb89a41c4a061bec030f9823362d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "e127514799903e26a95eb741bfa8bbb2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "a750566237d468702e577ba2f01080a3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "43ec793142c130efeec974303b6c64fb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "a6b99541570d4ffd6d45c222f374a92a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "1db92fdbb26d5d4d6bab964927f4f8e4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "ce81a8359775373f9123067f4a603e2f"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "7ce76abcd04a6120f6d21dd94ef8c5d2"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "a0d0d46831eb30f8adb6fad2431eb039"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "26d41874ce5dc506f0156421270187a5"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "2df368f9d63a95658b53a5d3b936e66d"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a4d322ab5d1c5522c6f72f8d8e68865d"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "5b4fe247e2eb76cb4faa4e068c01f84a"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "05290a5ca2a538d4b84351528516b1e4"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "dcfd97c5b1b5c347a8853d0126a2ab80"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "9a3169fff48c2808c2151ef5bdb37cb1"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "930d9e8f8164a4deb29179db738f6830"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "59403078d494b2fcb25c88028e2b98e2"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "e12564e2ac07c71be1f9ef458a0889c9"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "30cecb0d9ecc40b5d31d0667d24a2160"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "e2bfb843b941cd11d0e885cd202bb9b7"
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
