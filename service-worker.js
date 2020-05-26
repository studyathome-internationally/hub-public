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
    "revision": "7227a9dcfc517ad13e5b4ce87c910ce9"
  },
  {
    "url": "assets/css/0.styles.4fe934b3.css",
    "revision": "732441355e1557ebda0022ca6b5caa01"
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
    "url": "assets/img/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
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
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.jpg",
    "revision": "01662dfd145e8afdf12e0916a2778791"
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
    "url": "assets/img/simple-workflow-all-line-arrows-studyat.a377037b.svg",
    "revision": "a377037bbd71a298049598d8c7db81d5"
  },
  {
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.15baa48e.js",
    "revision": "9869e66c07ab4a2f0f2c184563da0d25"
  },
  {
    "url": "assets/js/10.64b23a15.js",
    "revision": "9210b3746d24ce42d04c1db13c1550ec"
  },
  {
    "url": "assets/js/11.61b3c4c6.js",
    "revision": "9f274f48ff157f0c8ab83d1eb98f5bad"
  },
  {
    "url": "assets/js/12.0db8cbd7.js",
    "revision": "4840d3b315b6f8217c8e6772a6a60a31"
  },
  {
    "url": "assets/js/13.dd867184.js",
    "revision": "fecc144ce1701cd9989f7bb87a383996"
  },
  {
    "url": "assets/js/14.dfb7f586.js",
    "revision": "4f432ffe0bf72f101cb962fb98edcad8"
  },
  {
    "url": "assets/js/15.08c8a107.js",
    "revision": "59a9fc2f477065bcad03dad702134828"
  },
  {
    "url": "assets/js/16.2350b8b4.js",
    "revision": "b5681b2de6154d7a9af2d0442b38d0eb"
  },
  {
    "url": "assets/js/17.0bb44fd1.js",
    "revision": "03de4cc9ce446311a6385237863c3b95"
  },
  {
    "url": "assets/js/18.e7b6f869.js",
    "revision": "d801c410bf0419f7241c7e72b12f1455"
  },
  {
    "url": "assets/js/19.7b04d004.js",
    "revision": "86dae221419eda11caa1cb7f503209f7"
  },
  {
    "url": "assets/js/2.d840a784.js",
    "revision": "c7a4adb88df131913262fe5f3455464c"
  },
  {
    "url": "assets/js/20.3cc11f49.js",
    "revision": "6df8152245bfb8d1907d220e8babd1a7"
  },
  {
    "url": "assets/js/21.02e7db06.js",
    "revision": "6e7a146798c78d0bd5bb934241a1049a"
  },
  {
    "url": "assets/js/22.208aea3c.js",
    "revision": "9ab49ca3672b9008ec56b2165f069b7a"
  },
  {
    "url": "assets/js/23.8bd80a1e.js",
    "revision": "605d3f5539a6d178d0d9d92c71e15054"
  },
  {
    "url": "assets/js/24.3e6e19a7.js",
    "revision": "f78b963025740c10621e8160049c9045"
  },
  {
    "url": "assets/js/25.0e6a7403.js",
    "revision": "a20b467453d4df9165ed1c4174cdc66f"
  },
  {
    "url": "assets/js/26.affb63f8.js",
    "revision": "1eb4566e8519f67c45a88390c59e9439"
  },
  {
    "url": "assets/js/27.5d874399.js",
    "revision": "3d5ad9aae0f66a9740e23b787bb35860"
  },
  {
    "url": "assets/js/28.4af40c9b.js",
    "revision": "d56a96d0e2d67bff7fbfbe18b6c456dc"
  },
  {
    "url": "assets/js/29.b7bb5812.js",
    "revision": "54f3f487151b0601f64347e28e5e2209"
  },
  {
    "url": "assets/js/30.04b5658e.js",
    "revision": "63a9a3e308da4f1436e03c832b64ad77"
  },
  {
    "url": "assets/js/31.24e1f478.js",
    "revision": "f3f2d3145dd64e408e086011ae491a22"
  },
  {
    "url": "assets/js/32.b4d73ba8.js",
    "revision": "cd5281f8515d2b05ddc6af783f9592bd"
  },
  {
    "url": "assets/js/33.50c7e916.js",
    "revision": "def51a25234a7f09a4cabdb8f037bfaf"
  },
  {
    "url": "assets/js/34.8e72ebe1.js",
    "revision": "196e5f5b21259c6c45cad615fba25c89"
  },
  {
    "url": "assets/js/35.8e208faf.js",
    "revision": "d27bfca142108dbbc8a22d692072344f"
  },
  {
    "url": "assets/js/36.adce3d0c.js",
    "revision": "9372f8ac19eaa5c8284ff471624fd067"
  },
  {
    "url": "assets/js/37.f1b3ddf4.js",
    "revision": "68c2ccbfac58765b30ffc0a7dfcf8342"
  },
  {
    "url": "assets/js/38.fce78630.js",
    "revision": "a9b7f09256ab663fe5732add7001ea40"
  },
  {
    "url": "assets/js/39.4bf80bd6.js",
    "revision": "490e3e0bcc5098c397760947e8028661"
  },
  {
    "url": "assets/js/4.448e588f.js",
    "revision": "d7f5c3e02f9e46bec94a77cdec0e144c"
  },
  {
    "url": "assets/js/40.5bacdaa7.js",
    "revision": "ceb9174ca1b4396a5aceb1eb8424c6cd"
  },
  {
    "url": "assets/js/41.2e985860.js",
    "revision": "a364993dd5e39f322fdd2d1f3d2a8a4d"
  },
  {
    "url": "assets/js/42.203c5cd1.js",
    "revision": "8a73c24e567df38b46bfb6fe02792901"
  },
  {
    "url": "assets/js/43.b4eab96b.js",
    "revision": "35ce72ef76d3c3303d74b3e2189e8cb3"
  },
  {
    "url": "assets/js/44.fd0b213e.js",
    "revision": "a9af7c7703e1ddd39cf21cef207fba30"
  },
  {
    "url": "assets/js/45.cbd6a289.js",
    "revision": "f71bc81864f3f192a76afaac433276d5"
  },
  {
    "url": "assets/js/46.269c9910.js",
    "revision": "5f44a05c718832299634478dcdda2cb5"
  },
  {
    "url": "assets/js/47.b9e8c514.js",
    "revision": "08e08030ea2c423a6df994333da7a3e2"
  },
  {
    "url": "assets/js/48.76407098.js",
    "revision": "efb0d77478b69eaa111ce6c2e5137402"
  },
  {
    "url": "assets/js/49.682b9dd9.js",
    "revision": "cf945bb8c23289408c81bbbd59438895"
  },
  {
    "url": "assets/js/5.ed6a2662.js",
    "revision": "e95d4611498b72943eaea626b028de64"
  },
  {
    "url": "assets/js/50.d47c033a.js",
    "revision": "84a566a41667fd21e899cb67c0ff17dd"
  },
  {
    "url": "assets/js/51.12a3643f.js",
    "revision": "7504c2dca3f781ee9c18ad3666948ebe"
  },
  {
    "url": "assets/js/52.90bac46c.js",
    "revision": "860a97c612440a6e438f43232baf8e50"
  },
  {
    "url": "assets/js/53.e8183a76.js",
    "revision": "899ccd30b77a04a4521c11359b2c8918"
  },
  {
    "url": "assets/js/54.f0e7d9ce.js",
    "revision": "84bd79ce0eb5434371d018e37c8ff1fa"
  },
  {
    "url": "assets/js/55.4173eb72.js",
    "revision": "d7e235fb92e7b086e3e1ae23abfaf32f"
  },
  {
    "url": "assets/js/56.2a9656ee.js",
    "revision": "0c916765916db991be73ccbf6162e8d7"
  },
  {
    "url": "assets/js/57.50456514.js",
    "revision": "ab52f9f3b7ae59094a947f56c9e43253"
  },
  {
    "url": "assets/js/58.29e6dad0.js",
    "revision": "5f81764da7beb9dc8ab367ad51bb5b68"
  },
  {
    "url": "assets/js/59.d6ab0f54.js",
    "revision": "6cefb6bfc34c76aed2b62aa00b6bc2b0"
  },
  {
    "url": "assets/js/6.ebe5e6c5.js",
    "revision": "d73db32965621135bc4ab029fd2c0ac1"
  },
  {
    "url": "assets/js/60.3ed306eb.js",
    "revision": "0a44d057e9b3f146a27dcd6050e508ff"
  },
  {
    "url": "assets/js/61.920fb706.js",
    "revision": "ffa19fa88f87390e07755b464b8fce28"
  },
  {
    "url": "assets/js/62.372dd6cc.js",
    "revision": "b0d835d296a48bf68a32e8264d57fc88"
  },
  {
    "url": "assets/js/63.8a2fc66e.js",
    "revision": "0c1503e2c28300933db2539d736042c5"
  },
  {
    "url": "assets/js/64.048c1a42.js",
    "revision": "a2fbe29b3eb85edc7bc7e6d6d0922ad7"
  },
  {
    "url": "assets/js/65.10f6ddf9.js",
    "revision": "9a8ad8bd2f4e52cf1649b2cf2b8f01ac"
  },
  {
    "url": "assets/js/66.8250ba55.js",
    "revision": "86bd516cdb3a5fcfe3681011cee3ddd7"
  },
  {
    "url": "assets/js/67.ce1f147c.js",
    "revision": "25cf0bee11c72bfd85d31a610f896851"
  },
  {
    "url": "assets/js/68.bbf3667a.js",
    "revision": "f0dc93c1d32aecc0a1fd042208430409"
  },
  {
    "url": "assets/js/69.76ea2b25.js",
    "revision": "8e44a9d0fff088095b287feed2b20fff"
  },
  {
    "url": "assets/js/7.926947ba.js",
    "revision": "08cc0e8453a20df43eda951466def0f3"
  },
  {
    "url": "assets/js/70.e1861cec.js",
    "revision": "b7e21722d2509a582166f14b89a31885"
  },
  {
    "url": "assets/js/71.79a3cc1e.js",
    "revision": "5412781c93864887c6c0b7b8968ab3ae"
  },
  {
    "url": "assets/js/72.d055dfb6.js",
    "revision": "eaff2ee0259b40fe2884a507fb3f44bf"
  },
  {
    "url": "assets/js/73.4927bd5c.js",
    "revision": "f129eabf16394f06cbab013ef6b4717f"
  },
  {
    "url": "assets/js/74.801f1ba4.js",
    "revision": "56bebcbbe88f79603ae2651ce2141c9d"
  },
  {
    "url": "assets/js/75.2622239f.js",
    "revision": "792b4d4476c7cbb1bdb0a13ed0cefd5b"
  },
  {
    "url": "assets/js/76.403a746b.js",
    "revision": "d1eecbc84cfb6ca793b168d257890ee9"
  },
  {
    "url": "assets/js/77.66e0f189.js",
    "revision": "9174bc5dc0a9339523737f43b862863a"
  },
  {
    "url": "assets/js/8.9673e60d.js",
    "revision": "8dc0423c7cd1931eee24dca93b0ebfb3"
  },
  {
    "url": "assets/js/9.a8f09ed5.js",
    "revision": "419e5421337351276c0473bf35778bc1"
  },
  {
    "url": "assets/js/app.e7147b03.js",
    "revision": "b2cdff4f5795cce3451e11d03bac6270"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "bda6ed19fb1b77b631a8cb53b97475f1"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "6901745eda1c3280c34c9a5f03a0e31e"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "1140ddc98e65d274fb5f5bd0b1cc377f"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "19a8fc827da686a880da006bd6305f2d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "4bc4619218344e882801b713befbcdc3"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "78610acbf60dd5b7b7f45b2174057206"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "3bde8450d19ebe51e38e15865c7fa78a"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "ecd36c5ce4658958244680c5aa479810"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e53031df823462c9c09b8e7cddbfac3e"
  },
  {
    "url": "courses/index.html",
    "revision": "6c11772d0eec2832ddc73ac46e05392f"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "80ffa1d9b40a3a48dc5b9cf429032ab4"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "b5c84b26722cca1a1e07a52459ba0d1b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "3502b75cf8f7027666d1efa72ccd8878"
  },
  {
    "url": "courses/template/index.html",
    "revision": "a7d20decea2c251d6434dd0fd508c7a4"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e56c6cbfa5189ea2663909d3fb4ea3fd"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "723ed740e954f584c415befb5d8ca363"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "6a56c3a30aa1f908d5392202435dec98"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "384cd11ef6b8ddae20cd6377b4909352"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "6d37e7abca42f821e742811d239c2f77"
  },
  {
    "url": "index.html",
    "revision": "8d165eff0609005b8fe01e308d23c5ba"
  },
  {
    "url": "studyathome/about.html",
    "revision": "07a1ca1e88a707d14d8cce663a58b096"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "703f9c57f6dadb596629c00d0a7cabdd"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "c4aca0d86b7c94b8e383b3320d37b9e8"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "862bf80243b6287d410d907e01d6c42b"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "7227a9dcfc517ad13e5b4ce87c910ce9"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "3cebb465f41bb2db78dd189abc12aa33"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "13f52cd9606aca6916c297759fb12480"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "a069254b7b3695fbb5c3bfe4d9f4e638"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "a53c95a10c78577424fc760299b24fec"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "9b1226f9cc55d20b42b7e4acb94010de"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "c6901e624fd51dd30080ad81062b75ea"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "d0d15b36bcbc4b41ebf5641f1e3e47eb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "af61432763b51fdd4c4b7e2c580662e6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "15e4b879e43a04847152f4016a02280d"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "9b1226f9cc55d20b42b7e4acb94010de"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "785a299c8e26e8142f5f8f50ffb5f135"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "e1e0501ff97836d41b2296537f180713"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "32888a4a2d2f9216306e7abd06ade556"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "442d66f5ac172c4c6f4e1880b60daee6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "1d702388cd2d09a848e3d1e769109173"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "3f101469da0d727393672f9c90862e6e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "857d7fd1391498ade19c5662a0f6c80b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "fef70ac9aa0c1fce2ecd561922141e09"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "2be7c6f7ab0a82cb9d4493a8deb87b52"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "9b1226f9cc55d20b42b7e4acb94010de"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "65f9d2830ce73d01d0dcf33a2fec2bce"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "913ab0a1518de2d8faaa1174dac49b8d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "a32e994937bf46f85a15ee3f8cbfd0ed"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "1c7e311e313ae2be3e0b62ac4443b30a"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "5c457138314156c1820e7d2ca7dfbf86"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "dceec266a1e47afb5d33cc0c54b69b58"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "fc9596c3184cc88c0835ea80d0a54d9a"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "c69209513e8379780382f5e8ce0721af"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "0474d4a6ce1bafc45a1f0968e761c17d"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "492f53d1b8fc2fd7f8e720183aefc08d"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "9b20800f8f2bbdf02df8cc789c6c2773"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "905d9fec23be7ab1cc35f9b7fc35d4a2"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "9c9fbeb6a906e6bf971403a323cb90f1"
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
