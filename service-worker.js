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
    "revision": "f864152e945200f732f24b0bd9d6c0d1"
  },
  {
    "url": "assets/css/0.styles.8165497c.css",
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
    "url": "assets/js/1.2774fe72.js",
    "revision": "07dd4696f8da2e0b8190ec00d4eab71c"
  },
  {
    "url": "assets/js/10.0fc66614.js",
    "revision": "46d5630f9815d25ea321098432db9750"
  },
  {
    "url": "assets/js/11.d0880da8.js",
    "revision": "670498a32f99645b61aaa70c84500eef"
  },
  {
    "url": "assets/js/12.29113c77.js",
    "revision": "4323f47ce15758a8daf90e34de4bfeb5"
  },
  {
    "url": "assets/js/13.40f74ffa.js",
    "revision": "52cab36641ec27b586a4bca61aa10f0a"
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
    "url": "assets/js/16.30f62f44.js",
    "revision": "574af9cf374f3cf71202ae6439567c62"
  },
  {
    "url": "assets/js/17.6c4ac954.js",
    "revision": "8951aff079a3f362e37b5e8d55350d67"
  },
  {
    "url": "assets/js/18.6379cc2d.js",
    "revision": "43fa5c3fc830bdd4ddc4a9165858f688"
  },
  {
    "url": "assets/js/19.f2666273.js",
    "revision": "07d32135ee29706d8454ebbf5e3f1ea1"
  },
  {
    "url": "assets/js/2.8fe4254e.js",
    "revision": "70800b2eb2aa3092040833b5a3d62692"
  },
  {
    "url": "assets/js/20.8c4e6d9f.js",
    "revision": "39683594fb498142a86899a2aec084ea"
  },
  {
    "url": "assets/js/21.e1c58284.js",
    "revision": "33d2239b8419d00f6579b822c14ba298"
  },
  {
    "url": "assets/js/22.6d4c3d5a.js",
    "revision": "9f4945e39f2263808adec8568678f6a5"
  },
  {
    "url": "assets/js/23.acf061ee.js",
    "revision": "f6e171d2bcc916ee2d78f8a929c5232f"
  },
  {
    "url": "assets/js/24.8b0cf874.js",
    "revision": "569d40d3a34f39e73cc3f70cd958b3c6"
  },
  {
    "url": "assets/js/25.ecf985ba.js",
    "revision": "37894c49501ca7c2a539e958c04c7c2e"
  },
  {
    "url": "assets/js/26.15db3a62.js",
    "revision": "b608bc9ff859ade8d08721ac6c3c2177"
  },
  {
    "url": "assets/js/27.3248171d.js",
    "revision": "d878295cadf3cf8ba0eaa329f6dfb44e"
  },
  {
    "url": "assets/js/28.d6faadc0.js",
    "revision": "e8271a84cc825b8adc9e18193fb405ea"
  },
  {
    "url": "assets/js/29.54161430.js",
    "revision": "e60426d23aad2733ff0db4b52232a73f"
  },
  {
    "url": "assets/js/30.0e6ff156.js",
    "revision": "e3829fd6f5271864be03f8afceb449c5"
  },
  {
    "url": "assets/js/31.ce611bf1.js",
    "revision": "18bdcd9170a3e43aea7ebecbb851a40b"
  },
  {
    "url": "assets/js/32.d04c5b1e.js",
    "revision": "ac04ce6352de8d07f67769279b379133"
  },
  {
    "url": "assets/js/33.b791cd29.js",
    "revision": "ccb790b1cdbe81bc887cf2f183b5f83a"
  },
  {
    "url": "assets/js/34.27237b90.js",
    "revision": "92f35c7b8bad71b2cb31509d12715bcf"
  },
  {
    "url": "assets/js/35.5711a9a8.js",
    "revision": "8ca5b7d78da8cce5e95c5de054aa1cfa"
  },
  {
    "url": "assets/js/36.a9ebbbbe.js",
    "revision": "98563b7a41164dacfd0691829013ca7d"
  },
  {
    "url": "assets/js/37.866b54ae.js",
    "revision": "82eda973dd1ccce7cfe8c086019b77c0"
  },
  {
    "url": "assets/js/38.f2313b14.js",
    "revision": "2467281b26c42c4f7ed12fdd319d877e"
  },
  {
    "url": "assets/js/39.b2d95cf1.js",
    "revision": "c62b12babbe240c0612808118e45765d"
  },
  {
    "url": "assets/js/4.49d38d09.js",
    "revision": "704029859be55cf90ce8934f7a30290c"
  },
  {
    "url": "assets/js/40.3b7f61fc.js",
    "revision": "6554a784093a91dc3b8c87c528a02fd9"
  },
  {
    "url": "assets/js/41.887a78d8.js",
    "revision": "a4025fcf63850b7a9b29224484958c36"
  },
  {
    "url": "assets/js/42.203c5cd1.js",
    "revision": "8a73c24e567df38b46bfb6fe02792901"
  },
  {
    "url": "assets/js/43.00962093.js",
    "revision": "e8767679a298c7d64c24c2f44029740a"
  },
  {
    "url": "assets/js/44.99459f19.js",
    "revision": "c2022a1852ce751d4b1e144b21021960"
  },
  {
    "url": "assets/js/45.4e29f472.js",
    "revision": "f04a406ce18d668f0c139075f5f54905"
  },
  {
    "url": "assets/js/46.841bacea.js",
    "revision": "46e3f5320b04c019e300beb1388a58cd"
  },
  {
    "url": "assets/js/47.00eb7a9a.js",
    "revision": "beb895bd4f79493508afb083a9baaecd"
  },
  {
    "url": "assets/js/48.65abec4f.js",
    "revision": "1b9c4450b86f0b7a21eb13538edf5d7f"
  },
  {
    "url": "assets/js/49.eb5f9527.js",
    "revision": "849080cf78c9d0242c1c594c98f984ca"
  },
  {
    "url": "assets/js/5.cf5261ec.js",
    "revision": "42cc03f9a2113e36d6e0788a288e529c"
  },
  {
    "url": "assets/js/50.484ccd79.js",
    "revision": "3d7130e6c0d51a036723a8e9be766e36"
  },
  {
    "url": "assets/js/51.58c0a0c9.js",
    "revision": "33e911a0bb7e31ba20504a1c4f669ae4"
  },
  {
    "url": "assets/js/52.3ab60fab.js",
    "revision": "296da6bce71e23faec3b080c40907b07"
  },
  {
    "url": "assets/js/53.7527d75e.js",
    "revision": "4b2300aea9d7146ca67c1557ec8aa0f1"
  },
  {
    "url": "assets/js/54.96f70264.js",
    "revision": "7651c420ba0cfef0f3b2022617ee76ac"
  },
  {
    "url": "assets/js/55.7a26cf28.js",
    "revision": "d1b752987242dfd52be931616eb0cb60"
  },
  {
    "url": "assets/js/56.559ab8bb.js",
    "revision": "22781d7a3556232f088cef09f502fc36"
  },
  {
    "url": "assets/js/57.a76b98e8.js",
    "revision": "d4dac04da2f49a8cb1eeb647610837c9"
  },
  {
    "url": "assets/js/58.edc38e7f.js",
    "revision": "0e0de4da6c1a77e06dfd4388a55e45a7"
  },
  {
    "url": "assets/js/59.8791cedf.js",
    "revision": "3ca8c892b9c3d3894c3940a1e8666859"
  },
  {
    "url": "assets/js/6.81065626.js",
    "revision": "b8f44f2684236991378e389b5be06cd9"
  },
  {
    "url": "assets/js/60.9aeadbf8.js",
    "revision": "869af4bd536d9c9700212f83c8c8de01"
  },
  {
    "url": "assets/js/61.1595465a.js",
    "revision": "a2cf735098f1e049753a63e273102978"
  },
  {
    "url": "assets/js/62.6237a0bd.js",
    "revision": "a4f6f605a44d23f4994b9d9fe97bf881"
  },
  {
    "url": "assets/js/63.116a1ef8.js",
    "revision": "56b691d2a9a2bf054f48f508f4f42e36"
  },
  {
    "url": "assets/js/64.733538f2.js",
    "revision": "8522cdb6cb4b91668b150cc181908edb"
  },
  {
    "url": "assets/js/65.28d8ab5d.js",
    "revision": "d6ed98b88956ce3423f8670329bb9102"
  },
  {
    "url": "assets/js/66.56dc4e91.js",
    "revision": "6a3ca4cf8e16283264939c8528a248ef"
  },
  {
    "url": "assets/js/67.4af69d10.js",
    "revision": "865327a9da3d6655099ad9acb79a6538"
  },
  {
    "url": "assets/js/68.7358fd1c.js",
    "revision": "fe7dc3592a5c7b22d16169f083e67cc3"
  },
  {
    "url": "assets/js/69.156fc0ca.js",
    "revision": "fde007885e816a96045564d6a5159fac"
  },
  {
    "url": "assets/js/7.15e8091e.js",
    "revision": "cde505f735663fffca3f8e3cef786c87"
  },
  {
    "url": "assets/js/70.17bafc9e.js",
    "revision": "3cae942ac0a65d71ca05ad133068d6ad"
  },
  {
    "url": "assets/js/71.9c426e10.js",
    "revision": "029c22de32c17785f05caafefb9a51ca"
  },
  {
    "url": "assets/js/72.a27fc88a.js",
    "revision": "bc7a2685dd867c68e99d09973b2d5315"
  },
  {
    "url": "assets/js/73.697acd99.js",
    "revision": "57786fb016b824d4eebf34da67711054"
  },
  {
    "url": "assets/js/74.b7e4db89.js",
    "revision": "5437410be565f4e9c52692ff2306fda3"
  },
  {
    "url": "assets/js/75.a6497132.js",
    "revision": "89ed8e37c7654cfae73bba805503fad4"
  },
  {
    "url": "assets/js/76.5a4d080f.js",
    "revision": "1a70e49d5b6aefe2833ed49e56310536"
  },
  {
    "url": "assets/js/77.15413120.js",
    "revision": "cc99c04f52541180974e5de08441fa33"
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
    "url": "assets/js/8.ea63b58d.js",
    "revision": "22f6dd2865ac8d893f3dd7917b29d02d"
  },
  {
    "url": "assets/js/9.34afd006.js",
    "revision": "96b7884c5cf4cc616985e446f4cb656c"
  },
  {
    "url": "assets/js/app.1d54314e.js",
    "revision": "4fdd1ef18d6d924f6441c9b1de135013"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "94b69200686351f7cfcdd13cd946e809"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "6a1e9dc861a8e056071664c4d04e1ff5"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "f60e8c3a757ab2ab84a5d3d29d731ca9"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "29ef9ce449638d1351e3382b9edc5476"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "0462287e075d48aef568c050703c7b94"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "cebe6ac77a3edc7a6d2788d7797a2603"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "21cbd9c686a5193df6e8d3cc75b4d385"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "5c1f24e1f5ffd8508ec6477d5ba42f3e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "56d5ee4fa047d8a9180f9bc648ac4c76"
  },
  {
    "url": "courses/index.html",
    "revision": "e2840c25d615486364863ae089786a95"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "2729f522b24dd2e5a7820ab69eb677e6"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "53b64f92730b9e1c7d04e7ff9d19e378"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "9e11e504fabfb458cd96d2cdfd5516c7"
  },
  {
    "url": "courses/template/index.html",
    "revision": "a676676cef538f7a65e336d7a96de6c2"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d6f35efe569c6c544f31e74500a27dc1"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d69fb29c603717cad07bc9e170f9ed02"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1a9567995fc6e765f2191c7002b80765"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "8c6559499b9565eed695e6e9f418535d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "beb5b4825245af1c1e1aa79a07ca01d3"
  },
  {
    "url": "index.html",
    "revision": "4578f4cae61a39c798d431100fd5410d"
  },
  {
    "url": "studyathome/about.html",
    "revision": "1848f7a6610ee8c5cc800a805fa98c8e"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "816414caf5279959e0e5d3c86a05a39a"
  },
  {
    "url": "studyathome/help.html",
    "revision": "aee3b42a27480c056e19ca956d6650b9"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "da7dccafd7af43ec370a33d03de30ada"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "fb1a89facff66e10d9be1a29fc8bccc3"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "775db212abb1d228d77cb67ad30b3e3d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "f955ba98cf0994d3a6a1784375cd4499"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "55923967bcf98f84da68f7ba0445a079"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "de0360c98c5589971b3d729d35df496f"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "79fc429d9cfcff88b6e2dc32c30622f5"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "5857e6267128f41fa639c310a471f1f4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "ce4b9716517d6c0b196f45ed38a19d92"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "3943eb28c20e167ffae9148719e39880"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "d7fcf4ea880c320e575c4392ad7410b0"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "fb1a89facff66e10d9be1a29fc8bccc3"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "04345c9743c7f2c4b6fa4e143627336e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "256eeff85d828bfc5fa5c38c1e7521ad"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "2be53a820005b782f1d4fbf848af8f69"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "c4f41c01a18812986015a0795ee32adf"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "7afe1e2c0929cc721e4ef6e406916851"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "d6c4dca9b762e20196719f74e4ea8271"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "51581912b341dde54f7deb63fa073ce4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "46fecb4827f584f3ffe8d65eee929022"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "73bf5441b597f03a28f4180ebe307cff"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "79fc429d9cfcff88b6e2dc32c30622f5"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "d52e468f8fe3aee1459602272cc9c58d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "e161db164117600fb22b91916a296c16"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "6f665532fd8e142984631c45fba103c8"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "027d50155f880bb503713e1e3617d3df"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "55bfcdb49aeb658ce4ea21f274f4bfad"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "7bca62257f58aeb2ff3dce96941f5106"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "eb58b13fe8308ef38bd48eaeb10ff478"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "dece9eb514c613df5962e08b66920538"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "2c7d5f61ba4c6a2c935abe76616c96d7"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "83b7d505608bb774f0ed905701060e4f"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "6bbb5df0c232f6d64c6b4055a521df33"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "37cd644dbb5320397031842d743ab6c0"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "3cec41a4155d54a662bf103d31cc0cde"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "51ac5146922de684c514065762e808e4"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "7068ff8ec7379fcee60c67c98a9345e4"
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
