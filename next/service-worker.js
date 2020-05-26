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
    "revision": "69b3338efb3928daac807e13f56a6e27"
  },
  {
    "url": "assets/css/0.styles.6844211e.css",
    "revision": "94a43408cc854cc96933c4f849e12855"
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
    "url": "assets/js/26.2926a9e4.js",
    "revision": "6b208a39a113b0f2834f5af7855d6d66"
  },
  {
    "url": "assets/js/27.8e04d984.js",
    "revision": "3aca084298e3ee506503fac5aa3b5573"
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
    "url": "assets/js/43.80e2c092.js",
    "revision": "cc9d856ec34dc1937416cbc8895b07ec"
  },
  {
    "url": "assets/js/44.1a1fe73d.js",
    "revision": "1790f732409d2cbb66bcff771ed9a97d"
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
    "url": "assets/js/48.3fdfe58f.js",
    "revision": "4073b12a37f4a0fcae7c7dd87ec84d7f"
  },
  {
    "url": "assets/js/49.62c1093f.js",
    "revision": "7f0ca3bce119a1e4ea90548c54081302"
  },
  {
    "url": "assets/js/5.0f95ca27.js",
    "revision": "1a0d54c7f5de4c49c775dc5290a8f326"
  },
  {
    "url": "assets/js/50.f845dcda.js",
    "revision": "9426e24c434cedf03cb3452dfae94970"
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
    "url": "assets/js/55.1665aaae.js",
    "revision": "1a82a7281e36e13c67ad11ec09ed5297"
  },
  {
    "url": "assets/js/56.4773c102.js",
    "revision": "3ad3d30a3e6c9c7124f5cf168076143c"
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
    "url": "assets/js/59.a8385311.js",
    "revision": "686d6ec5df3db43a7d137704040adf68"
  },
  {
    "url": "assets/js/6.b7207f69.js",
    "revision": "3ce029acc21b9b54e8421b5e37431b1f"
  },
  {
    "url": "assets/js/60.6aaddde0.js",
    "revision": "d43b553e51da4126e7443b80def154e4"
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
    "url": "assets/js/app.b26afb65.js",
    "revision": "73f5ead8027fce815763028be74b0d18"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "e8d3b671277a74b92a306c2ed159658a"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "8629bac026795a3e735a7897c3befe80"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "6f423f32c45b92356ef2d41b4383e945"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "dddbc01ab20936628b66437c3931e9e4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "f7aedbcb91b9b17b3a6b6dbe27c835fd"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "86364a1494648694736722102cee5f8b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "c05c1c847c6076c4c09e4ca8a759e06f"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "e074af3dba543a9a70ca7528af2b0341"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "cc583ca442c9f32f032e435ee4aba0ff"
  },
  {
    "url": "courses/index.html",
    "revision": "c825d43c26268dd66623959f2e3841ba"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "e6e810d631349d85b74fb2552597f0dd"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "e19ba9c8af9a98c3da1fbc65370bfe28"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "4ba5e28a243e18a5cbf0b3600004945f"
  },
  {
    "url": "courses/template/index.html",
    "revision": "29f72a654104b5204ad3ae1b63228d44"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "6397595142e74c555d87c2f72a1a67f9"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "ad45a405747db8cd3b3f98506d8a0e57"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "faaa06728a49c5e02c8570448cbe8b6c"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "f20ef3d348c8e744e791e7324f45a02c"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "0bb90900cd9be74bf84188b44eace692"
  },
  {
    "url": "index.html",
    "revision": "8b93b23ef971234c04776f4c9ac4831e"
  },
  {
    "url": "studyathome/about.html",
    "revision": "cd5c7203c0df2e0b6528cdc74ad47dea"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "741520cd512cb02c3c43859f538f96b1"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "eebfaba6b42917d5e6d58622811ef4ec"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "41265dae891dcc066a0104a00b2d4f42"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "9c07ff09e47469d1d68a4f40af047330"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "6c93a49ab92e12dc736b51c011193edc"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "cc0ba17ad74fb816edc366e45a5b52fc"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "c2355f7b515ca8538bb5fa46266066f3"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "4f7a3dd92ce750cbfa819e04e72867e0"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "69b3338efb3928daac807e13f56a6e27"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "ea9d16a04e0c5d1c1dd4733ce8199716"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "251060d05aef2c9be4ebb6ad47793823"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "65132c882f53761703e70d4c0840cf6b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "bf948ffd092475b7a513352edb751c40"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "1d2b9f1bd77a7e3fd569b46eb7a8453f"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "3b3ef879eaf16e01552a3cb664584e7f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "e6895d10cfc5cea7de1302bc79142c35"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "f2f2389f1e77da2bd62c10c560e012d2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "bdb646ddbf378bb96b89f9879d1e30d5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "5380c6dfaa0492089860f3c9ea9fe9cf"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "57c00b043ef6a23368110471eaf204b7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "ff02ec8787d3abc292fb38fa733647c8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "0606bbdec7a0c75cf893ff844c788e19"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "d90a09a06cd6d1da64e22592d80d9c97"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "69b3338efb3928daac807e13f56a6e27"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "83fad65267ac96e7ff56fc26497bd5bf"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "1e75991c25a64e44cc6b8b220d71bd5a"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "5953371aec50c7613a0867cce4cec4fc"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "99ddd5b15a168279a946a3e3f7d9a5ec"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "dcd33e6e9ef4ce3c47e3cc8c91b18b16"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "c872145815378f877f962e124818e36d"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "ee82cfcd5ac7931ad1eab4c078a9703e"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "29993d9153ece1160c923c7117323922"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "5ae716661565197649699b9098a67ca3"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "0f0f6a85f1d05484caf612118b4028c3"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "39abf49d8755820ef9990bd794d95d5a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "9d15007bef015d58981bbeba1088689c"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "f0985a856c8b23bf044cd14b9f6b1b83"
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
