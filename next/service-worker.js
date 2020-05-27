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
    "revision": "c9cb6dd3602158372e561dd4e46cf241"
  },
  {
    "url": "assets/css/0.styles.7ee5145e.css",
    "revision": "bf04a2c6c64867e6bdff46805f220f4e"
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
    "url": "assets/js/1.d83b18dc.js",
    "revision": "c74da9aa252f64b16351b8030699d640"
  },
  {
    "url": "assets/js/10.77eb1289.js",
    "revision": "68dd7f782f72f562661ba26c8ed544c6"
  },
  {
    "url": "assets/js/11.7a3e1b64.js",
    "revision": "c97e70f3ba61fae9845f0a822f3d317f"
  },
  {
    "url": "assets/js/12.2eaaa6b1.js",
    "revision": "e13351626fd1bc36dcfc4815e44eb732"
  },
  {
    "url": "assets/js/13.8ac41873.js",
    "revision": "57e23ea680671ea752947072f22f362b"
  },
  {
    "url": "assets/js/14.611d138e.js",
    "revision": "6d39e186d0e20c76c9eb744d020cf53c"
  },
  {
    "url": "assets/js/15.73c9606b.js",
    "revision": "7951ddf3e070413a09758f4224b32a3b"
  },
  {
    "url": "assets/js/16.3ea535b5.js",
    "revision": "0d5bb336c8f2abc73056835ed79f72ab"
  },
  {
    "url": "assets/js/17.ff3fa65e.js",
    "revision": "066409d62f1ac9fb3aa3dba2ce67785a"
  },
  {
    "url": "assets/js/18.743a51f9.js",
    "revision": "2f4d1faca2df0666e80a4d1fb0fc9bd0"
  },
  {
    "url": "assets/js/19.8859c131.js",
    "revision": "757bdaebdb951effae564fa81e472d22"
  },
  {
    "url": "assets/js/2.5fb6752a.js",
    "revision": "1f655ac553d37b519baade29530da97c"
  },
  {
    "url": "assets/js/20.830f3e3f.js",
    "revision": "4e2ce3c4dbc4b0e46a8a31db0b036acc"
  },
  {
    "url": "assets/js/21.4ac5ae50.js",
    "revision": "0e2e48431ef5d9d399fc1769f49bcc69"
  },
  {
    "url": "assets/js/22.b8c12846.js",
    "revision": "1d0d09cab90c679af72c22360f7ccd50"
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
    "url": "assets/js/4.05ebf7c3.js",
    "revision": "c66a5b28311ab9695f7b777d57c1f27e"
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
    "url": "assets/js/43.dafd176b.js",
    "revision": "df3762f27f9d9468b881c970638aca20"
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
    "url": "assets/js/49.f84a83ea.js",
    "revision": "7ae98765af2550c5f2dd5280799b6e34"
  },
  {
    "url": "assets/js/5.dad3815b.js",
    "revision": "dbca3a85bfe66446a97d82fcdbf2ffbd"
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
    "url": "assets/js/6.c784cc5a.js",
    "revision": "2e9a3e8d09c08e59d238daf03e510b45"
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
    "url": "assets/js/62.372ab6c9.js",
    "revision": "4255a39241c72e05180bb422610b22a3"
  },
  {
    "url": "assets/js/63.bf1ab7aa.js",
    "revision": "249b4ca8a40cf98ca7397ec7c6647fdf"
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
    "url": "assets/js/7.1b11b110.js",
    "revision": "442cb464c802caaa1f1e9e5c8bda05ac"
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
    "url": "assets/js/72.35675715.js",
    "revision": "1c3808024670e6451efb3f1f59746261"
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
    "url": "assets/js/76.4849496b.js",
    "revision": "b48a09db3caed4d47c68f850d674a4d5"
  },
  {
    "url": "assets/js/8.0446ca62.js",
    "revision": "d53637da58b83f2d1c7670a0b3635e2a"
  },
  {
    "url": "assets/js/9.6a7625b4.js",
    "revision": "98d96f687dadeb6df2d0544245194c7e"
  },
  {
    "url": "assets/js/app.7da79d32.js",
    "revision": "7590f78ab3fc9c18f8103a452e74c3f4"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "edb478010fb1dec78081be778644c5d4"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "514324f45062c5112732d7480ae0a501"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "496fe89d1175f07100eb91d86ad8d549"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "0d6e77cebba36cae95dd844634b391fa"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "0b9e9a1a2cab8de0e0166e390188ddfd"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "0b43bf3771fe52abb833a9e46217a1cc"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "1b53a31a6ed78668dc9f1f134e707fa4"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "0af4bb75993e72778a4ae4d71ec9bb27"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "f9e29f2a9bc4e7d180727a69713ae557"
  },
  {
    "url": "courses/index.html",
    "revision": "6011787ce9a4402a8d1076fbde318f7a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1c190b6248b2c4a87b559ca88969e201"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "3158e58c192722ccdac298206588366b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "4f4b4af65f01af79db42f4fc1a7a8909"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ead55959832bff33a37ecd937b569b63"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "39935003a26b8eaef0427760a2078332"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "50ab78fd7fdf47cf673f9f52af17e253"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "6cdf32e6a41a2ce44965a0ccf870510e"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "3eab016208d601bd83caaa1894404b85"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "54e0281452906d5c6bc303241821b167"
  },
  {
    "url": "index.html",
    "revision": "a351d9e58275fee96b742737bdfef092"
  },
  {
    "url": "studyathome/about.html",
    "revision": "0b74e4c297571b95dcc7518d6a96c802"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "35a218ec1a6442a3e8d7964f7b63f944"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "b786aa9e3d5d2d2cf0a6a4e527dec902"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "cac39c863311cfbf0b15c1ec4b7bb6a1"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "fbb012434ab948ef5b8fdb4001e7d4d1"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "08b01c9f5e6412c75b9f14974de4fbcf"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "ac759e55abdcca3a93f72fca725e5675"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "617b83d78f1e7cba1c59a359fc66de2b"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "86e5247a9bf09ba62ff1525757604693"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "03cb35b9e23e7bafb92f918209fe72f6"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "74f7d52f14d08e287f47b32acc8e4f90"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "f3d4cc203c68325aa7c3d9cb20816432"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "78be84b1320394abe377cb087533e320"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "61e921f0a68a4314433fd7e669ef7ebb"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "c9cb6dd3602158372e561dd4e46cf241"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "9f038e107d7f7b8ae3595af5bb3e8fa4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "82e1ff4bf94441cbfae860fb04ca4e32"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "4e43783aa2239c8a68cca0224efc8eb9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "ce3d9c507367645c50780922a7b9a0b7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "0e37c6b9eb5795a7cd1184317edbbd1f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "0c9ce009cab9f03262b674a32359d78e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "5155d2fc8b6d4124d024b93d191965b3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "05634dad11d74e5843e13d87ffc31c4a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "af76a2e2735594c48b4ee18712786abb"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "09eece61d6d20661d5c6c523b46086e4"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "1b4416090645a8b6ee8ae2e0c8d97e9d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "3b512ba83f0fc64ab997c927ec6919a4"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "084a99dbfd2472ee3f897fb47e503fe2"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "7b1caba1d2682bf105b964eff7916fbd"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "bb1a90cc54835e14e8889e1957496cc7"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "4a9c17d70a96b59eaa14b3b9a4c877a8"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c6c6f81ae5441a8e5468d175c50aa928"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "dc94f59d61380258fecd1e102cfa538e"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "2ca26e9ff04f8c23040019601bf6624c"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "cd20f7414ba5e49f3e906e716593e7fe"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "e45671d96daa35a511fb1d65a1cc8ffa"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "aed0c7519f98423ab9ae2613ca44235f"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "39ff7c49ee5543d7b8a0dd47f804b700"
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
