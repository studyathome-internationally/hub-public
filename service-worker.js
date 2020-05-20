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
    "revision": "f3b3a0b1dfe8859f35f1f5603de1ab77"
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
    "url": "assets/js/1.03f4c065.js",
    "revision": "3d03660eb48181d23026cfabae982a8e"
  },
  {
    "url": "assets/js/10.a2a24b7c.js",
    "revision": "cbfd4d30ef2f30462aa8a97391c2a045"
  },
  {
    "url": "assets/js/11.d0880da8.js",
    "revision": "670498a32f99645b61aaa70c84500eef"
  },
  {
    "url": "assets/js/12.d85ddc32.js",
    "revision": "aace98bb1a2a29207cd4a44569415c50"
  },
  {
    "url": "assets/js/13.5491f728.js",
    "revision": "a907f82457ee742307411c720986acc4"
  },
  {
    "url": "assets/js/14.85be5f02.js",
    "revision": "6bb346cd6ec8c0a327a1fcf3c3161ec2"
  },
  {
    "url": "assets/js/15.8397ff33.js",
    "revision": "5dc632a326ef835a9dd11850d03f70a1"
  },
  {
    "url": "assets/js/16.95ecacd2.js",
    "revision": "6917844868818e3c0695ef28553a3d0b"
  },
  {
    "url": "assets/js/17.74a0c9fb.js",
    "revision": "0bee1ee7165d2215f16cfbbea104192a"
  },
  {
    "url": "assets/js/18.c1e1327f.js",
    "revision": "d65cd1c9b7fe42e8efd06806909dc2c2"
  },
  {
    "url": "assets/js/19.a1dda0da.js",
    "revision": "dd0251d44e7bbc0c72284de1a663cbee"
  },
  {
    "url": "assets/js/2.8fe4254e.js",
    "revision": "70800b2eb2aa3092040833b5a3d62692"
  },
  {
    "url": "assets/js/20.6316a727.js",
    "revision": "cf58675561dedf300ef3e2ecad4ff37e"
  },
  {
    "url": "assets/js/21.fc21f2fa.js",
    "revision": "c79ef9c53ed9ce160279a686d66ea7c6"
  },
  {
    "url": "assets/js/22.9f2aa440.js",
    "revision": "54fd81f89efe26bdc512c70c7ab673aa"
  },
  {
    "url": "assets/js/23.211544c8.js",
    "revision": "2d24ac57feaa1d4216b384e61ce54f18"
  },
  {
    "url": "assets/js/24.d370e7dd.js",
    "revision": "f435bd206549851263f74263805099bc"
  },
  {
    "url": "assets/js/25.a4e877f5.js",
    "revision": "a16312c3459b91ca4deba5198d9ac549"
  },
  {
    "url": "assets/js/26.8f588d76.js",
    "revision": "de217f9738c26992ad8423d451f6f443"
  },
  {
    "url": "assets/js/27.cb41ca3a.js",
    "revision": "8f58eb1f08aef7799bfd05aedec7640e"
  },
  {
    "url": "assets/js/28.f928de73.js",
    "revision": "eb3d4a83ca6a2e7b46e00c1106c00503"
  },
  {
    "url": "assets/js/29.908e1037.js",
    "revision": "e1dcc53e1ffd71583b19d9705ae6b706"
  },
  {
    "url": "assets/js/30.38d6429e.js",
    "revision": "e981deb0d9b558abfba16956b8d2b0c4"
  },
  {
    "url": "assets/js/31.36812146.js",
    "revision": "8aba3c10d4941cffa4d9b158042f7856"
  },
  {
    "url": "assets/js/32.b48c5ff9.js",
    "revision": "1283ff22fea3973db976542e9a77a359"
  },
  {
    "url": "assets/js/33.3e8d05db.js",
    "revision": "bb4440fb43d9e794c0629e338134f58d"
  },
  {
    "url": "assets/js/34.a39ae799.js",
    "revision": "e6d97ea469a2a6f8e16394435ec22a7e"
  },
  {
    "url": "assets/js/35.d0d5a530.js",
    "revision": "b42be18177f82e888a994580aeb74914"
  },
  {
    "url": "assets/js/36.adce3d0c.js",
    "revision": "9372f8ac19eaa5c8284ff471624fd067"
  },
  {
    "url": "assets/js/37.6231dcec.js",
    "revision": "ca377ef0c4d5c182f38977787f62d70f"
  },
  {
    "url": "assets/js/38.54ded36f.js",
    "revision": "e2d3bf4d31dba30c37e4a7a9845bae43"
  },
  {
    "url": "assets/js/39.a4c4d538.js",
    "revision": "725b718d093dc0a362e81d449049c442"
  },
  {
    "url": "assets/js/4.49d38d09.js",
    "revision": "704029859be55cf90ce8934f7a30290c"
  },
  {
    "url": "assets/js/40.630023f2.js",
    "revision": "08d5fd27dcfcdb5b99b23bd9376651f9"
  },
  {
    "url": "assets/js/41.2a15c254.js",
    "revision": "5c01f8ab267b1f3ba5973b3a17918be0"
  },
  {
    "url": "assets/js/42.bccc11c7.js",
    "revision": "d954f9b53e407c702518325d79b3a7b2"
  },
  {
    "url": "assets/js/43.875b665d.js",
    "revision": "067587a389e5a0a7a184c26d1dd9530f"
  },
  {
    "url": "assets/js/44.4a2f9fb2.js",
    "revision": "96ad20b177603e1fdb56fcf274b13e57"
  },
  {
    "url": "assets/js/45.b795bd4c.js",
    "revision": "3d54de0a0b7d4ac318e3645d0ae46107"
  },
  {
    "url": "assets/js/46.b81328ae.js",
    "revision": "c5c6c7da21fc0ffe56a6cd78171d1fc8"
  },
  {
    "url": "assets/js/47.e648b137.js",
    "revision": "23c66fd33692b625bc8fff9a994833ae"
  },
  {
    "url": "assets/js/48.2e3d288f.js",
    "revision": "98b1be6269f894ef48ceffe2cb6ad620"
  },
  {
    "url": "assets/js/49.682b9dd9.js",
    "revision": "cf945bb8c23289408c81bbbd59438895"
  },
  {
    "url": "assets/js/5.2d902ddd.js",
    "revision": "42cc03f9a2113e36d6e0788a288e529c"
  },
  {
    "url": "assets/js/50.77c6005d.js",
    "revision": "83e7896fc8dacb89d1fa7604cb17361f"
  },
  {
    "url": "assets/js/51.9683b420.js",
    "revision": "a60d49f7b62758ff216abc08894f6bbc"
  },
  {
    "url": "assets/js/52.90bac46c.js",
    "revision": "860a97c612440a6e438f43232baf8e50"
  },
  {
    "url": "assets/js/53.a6512729.js",
    "revision": "0f0fd01a740ac53e89d545bb53ae2ac6"
  },
  {
    "url": "assets/js/54.a63c329c.js",
    "revision": "bfbba0cd633836b0ccd16420f781ea51"
  },
  {
    "url": "assets/js/55.3d0c2fa8.js",
    "revision": "a08519431b99b4b0e62e4e0c7ef47233"
  },
  {
    "url": "assets/js/56.0e6c353f.js",
    "revision": "65cfef99a2de203d85f64593a801b255"
  },
  {
    "url": "assets/js/57.6ea14d9a.js",
    "revision": "cc4ca6c62215f8abfdf565ba170706a3"
  },
  {
    "url": "assets/js/58.926779bf.js",
    "revision": "e81d9006cbe11807c3924908e7f59de5"
  },
  {
    "url": "assets/js/59.d6ab0f54.js",
    "revision": "6cefb6bfc34c76aed2b62aa00b6bc2b0"
  },
  {
    "url": "assets/js/6.2a12adea.js",
    "revision": "83644d12f2bc603b8f47f84cf3829194"
  },
  {
    "url": "assets/js/60.3ed306eb.js",
    "revision": "0a44d057e9b3f146a27dcd6050e508ff"
  },
  {
    "url": "assets/js/61.b715ff1f.js",
    "revision": "87e2688efbb73fa7f9ed96820692e718"
  },
  {
    "url": "assets/js/62.9c15bc60.js",
    "revision": "5864174979ce78aa74594f04ff5f6636"
  },
  {
    "url": "assets/js/63.cc60d1a2.js",
    "revision": "c67a217fe621b978896ec97e86313a16"
  },
  {
    "url": "assets/js/64.be839b2e.js",
    "revision": "0136ecf6d3d39d2bd30c1a676907de46"
  },
  {
    "url": "assets/js/65.6ee38f9e.js",
    "revision": "adf9f46eb21aed7d961bce84766be36d"
  },
  {
    "url": "assets/js/66.e9f03f87.js",
    "revision": "aea91e4ee7e958c41fe42834a543faee"
  },
  {
    "url": "assets/js/67.b694f53c.js",
    "revision": "1b74eff6c28acdb70a7f04ff71277afa"
  },
  {
    "url": "assets/js/68.7358fd1c.js",
    "revision": "fe7dc3592a5c7b22d16169f083e67cc3"
  },
  {
    "url": "assets/js/69.0056fc91.js",
    "revision": "b83e642052065fbc5a43b8b59408dfe8"
  },
  {
    "url": "assets/js/7.7b45b233.js",
    "revision": "fb254870392efd1868bad6a723337506"
  },
  {
    "url": "assets/js/70.50cd6ac9.js",
    "revision": "d34c14b5d5b7227d18d129a24cda7fb3"
  },
  {
    "url": "assets/js/71.c052b08d.js",
    "revision": "f4abc552b07dee2b429e11956857c033"
  },
  {
    "url": "assets/js/72.a27fc88a.js",
    "revision": "bc7a2685dd867c68e99d09973b2d5315"
  },
  {
    "url": "assets/js/73.c589245a.js",
    "revision": "c3628e0d99ee2a1fd20c91222dab9184"
  },
  {
    "url": "assets/js/74.b7e4db89.js",
    "revision": "5437410be565f4e9c52692ff2306fda3"
  },
  {
    "url": "assets/js/75.67731928.js",
    "revision": "7fb7cd3eb723827168b2defa8445be8d"
  },
  {
    "url": "assets/js/76.f0e69198.js",
    "revision": "848d9604563f536196c8c4a05dbe3fe8"
  },
  {
    "url": "assets/js/77.00501e5f.js",
    "revision": "bd9cdf0766f0ccd4f1b20ea8f5b17407"
  },
  {
    "url": "assets/js/78.3f534918.js",
    "revision": "ff3a1411565bda5c7fb00042918a7410"
  },
  {
    "url": "assets/js/79.45605366.js",
    "revision": "120f4282fe942567de52779fc5f22a0d"
  },
  {
    "url": "assets/js/8.3e042d85.js",
    "revision": "727da92991733e2c606da561dde92e51"
  },
  {
    "url": "assets/js/9.e088e972.js",
    "revision": "ffe8cc25becd6fa7a7117bdf57556955"
  },
  {
    "url": "assets/js/app.5e236ed2.js",
    "revision": "2e7ddf4bda811c7d71dc1374a254720d"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "f47928ffe47706381139e74f73d02ed0"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "3bf34f1596e55a84a39891533a4faa60"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "b267e317055b5815af30d9e35b42a7ff"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "49ac74e6db081ba80bf772387896e37d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "06053b7fbcdc5bc71491223c1f743617"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "12a7a9e874ac46f739d892b44065d3a9"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "65dab1e9433beea00df420f4d7310479"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "dc8dcd3a52604cea34a082c057bbae7c"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "31a89bee4d5247d57e72784b3b088662"
  },
  {
    "url": "courses/index.html",
    "revision": "e089234fe8fecbd0eee6f77e952fd4fe"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "66e32f1fea542aa041cff7f626837a96"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "f457cff4a1b87471c53d44380aa649ff"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "a45403ec93e30b864a73095b1a403c12"
  },
  {
    "url": "courses/template/index.html",
    "revision": "5726961f9282b3621eea90750a1d5470"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "4ec9c7ab8f3991c68501e50622d6dd56"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "3cc8dbb38ef67ea57932f8e98c96bb23"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "061a41fe9313de2dac3a655002c4f91e"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "71636cac625f2fa2b80cbc5fa33686cf"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "a3f6f35a6127e41cb7308d2e6b680389"
  },
  {
    "url": "index.html",
    "revision": "8e34a79e9f3d41a273b09f93680cc013"
  },
  {
    "url": "studyathome/about.html",
    "revision": "092e76f750608f121d9a6ef471315fd4"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "1398e60d30448082ffca572eb735835f"
  },
  {
    "url": "studyathome/help.html",
    "revision": "d3b83655de04bb5b5ded6fb5c85ab531"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "6b13e4b2a7fd8e888bc7512ca5998f31"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "f3b3a0b1dfe8859f35f1f5603de1ab77"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "1a7ffac38931c3207799119fd0b2aa29"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "b3cb7c28080eeab47a0f72bb3da481e5"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "7caf25b8b01ae30488a87a5aa8debaee"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "c4e094f6af7805024c0f0aefdf6ce74e"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "2cb16f013faf338ddf22ed24400cac25"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "038764c3cabb3d2abee2d5b0a3c7656e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "37d971bdc8ce2ee46d41983fe9734fab"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "1789bfd5ae7116e041361e42be782aca"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "f0b73138b5da3a9bd43870ce583a3a50"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "2cb16f013faf338ddf22ed24400cac25"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "f563270cc8929c60c28064c96d301f0c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "1897ea357b10e175bd0e07468b0bafc3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "867cb2cbdaffcb41bb99ed2594dcffaf"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "87a487cf01352b2d3d8b53c687b62f2b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "e551726097271d184e853db41a317c72"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "b3276691d2064077b13c111684fffde8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "01d42de1b483fc123da01c7f308cea8c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "2c8d3fe636886f75dddf41fe002b1090"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "84a2b0a83c814b0d954e7fde0c44cb4b"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "003f07e6d1ae4449e370865d47cf83c9"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ed58ddd640c5f195bf12037180f12f8c"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "52202c303db32198305b1a98dac1eaf8"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "e67fcaf828bb2065eebd7362ab6d3b6e"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a342f69ae8c0103884faa5f0e0c82996"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "cf33ee6545bdef0ae783553525d8817e"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "309ca69fa81e8b93ec81ad27027f7b99"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "1289389c73ebc528212870dffea4fff8"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9a7d295f0ecf2392ad528b1a05a16bb3"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "e28b2134b8b0d88460f702e37436eac5"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "a659f973782803679da3f53e70423015"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "fc3642076efc7c9c30fb4609d9124c98"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "fa75299f3b7b5d4546c91db2fc94ea19"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "3f754c4f96f90e03abe2896852ce0750"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "694aba8821adb45e6b687ee67b461679"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "d3228a6c9a46d42d1a37d876e96120cb"
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
