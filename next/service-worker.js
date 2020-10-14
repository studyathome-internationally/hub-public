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
    "revision": "64cf3c84d9adf6faab6cb58f5ac3ec0b"
  },
  {
    "url": "assets/css/0.styles.474bdf87.css",
    "revision": "f0a30600628a9cf7d50aebdeb8613289"
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
    "url": "assets/img/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
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
    "url": "assets/img/partner/uastw/lecturer/christina-hochleitner.png",
    "revision": "a4886c1c14e25be6bc7ccd079a1be157"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/christoph-veigl.jpg",
    "revision": "856a73506f666454dca2b3019a41fb2a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/iris-nemec.jpg",
    "revision": "dd4e5c5edc011d186edc2f274388004d"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/lukas-rohatsch.jpg",
    "revision": "b6b879b4fe81d13d70ffdd2c4d4cf6a6"
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
    "url": "assets/js/1.2e52b33f.js",
    "revision": "466048c3466c697981408fd42c5fad3f"
  },
  {
    "url": "assets/js/10.a0fb0e61.js",
    "revision": "7cb6b444ab17e17082a4418cc62ba609"
  },
  {
    "url": "assets/js/11.1d3890b4.js",
    "revision": "54aa7dbd91ea1921f06fc342d7d30ffe"
  },
  {
    "url": "assets/js/12.fbd98762.js",
    "revision": "09dace1ac6df7999f1e0bf0d24b7cd51"
  },
  {
    "url": "assets/js/13.69b38ca3.js",
    "revision": "c4bad1d74dc62472dccf8ff0c187d676"
  },
  {
    "url": "assets/js/14.13cd9d13.js",
    "revision": "ef100e0712b1eca9d4e1ca2643e9179f"
  },
  {
    "url": "assets/js/15.a564b09e.js",
    "revision": "54f3c6556b9bc43733383f2f293aafe8"
  },
  {
    "url": "assets/js/16.245cb5ab.js",
    "revision": "d05e3f463afb147447e3d40cff7e9684"
  },
  {
    "url": "assets/js/17.2601659a.js",
    "revision": "2f9c406469650e911cb9e92e1f6fc52a"
  },
  {
    "url": "assets/js/18.328abe4c.js",
    "revision": "8036427a3c5aa0f99f3ffc4f73044d6b"
  },
  {
    "url": "assets/js/19.edaada4b.js",
    "revision": "dd77a70db183b7c8358f75a4eff4b0c6"
  },
  {
    "url": "assets/js/2.1c9bc3ee.js",
    "revision": "40804eda19d53200d8fbe437e74e4425"
  },
  {
    "url": "assets/js/20.dff41fc7.js",
    "revision": "6c9fc21a1138c2fad491280dd4e6101b"
  },
  {
    "url": "assets/js/21.5c37422c.js",
    "revision": "21fd01b084196776e6ad083d0c52a781"
  },
  {
    "url": "assets/js/22.3b54abbb.js",
    "revision": "b6c664c640820c42a05a0414e9bed20b"
  },
  {
    "url": "assets/js/23.2a6b0b01.js",
    "revision": "2d5c1634195ebedc356589f330a5bf3f"
  },
  {
    "url": "assets/js/24.09b6437f.js",
    "revision": "cb9afdb8d0ca8c35619b32c02f6140dd"
  },
  {
    "url": "assets/js/25.6e66cd7a.js",
    "revision": "2b1ec9522ac29545757ed1e46c2bc004"
  },
  {
    "url": "assets/js/26.c2f97c0e.js",
    "revision": "42de6d75b1238b453f9026840248ace9"
  },
  {
    "url": "assets/js/27.96ac5f9a.js",
    "revision": "9f7fc88d48e8a0e27862753c1d407764"
  },
  {
    "url": "assets/js/28.7fc24fe8.js",
    "revision": "8684b1ab6f9149f56248b6e5be7d68df"
  },
  {
    "url": "assets/js/29.f040b07c.js",
    "revision": "a38142bfdd69c0aa4239d413c8ba9ea3"
  },
  {
    "url": "assets/js/30.a189f13f.js",
    "revision": "829e505712f0e4a215fe924da63c091c"
  },
  {
    "url": "assets/js/31.8df7681e.js",
    "revision": "4f9fcf8b8c4666c8c27ca3ec667fca22"
  },
  {
    "url": "assets/js/32.4cc5e4eb.js",
    "revision": "947a373f835927e84a8e1c670bc94c81"
  },
  {
    "url": "assets/js/33.fe61e492.js",
    "revision": "b08f5f01153b010f6f6a662cd1bfb87b"
  },
  {
    "url": "assets/js/34.4f1368f1.js",
    "revision": "e091b3ddcf5d2640684e51d687285307"
  },
  {
    "url": "assets/js/35.47e98658.js",
    "revision": "b3948f3596c4d110ebb1966153f3f5ab"
  },
  {
    "url": "assets/js/36.13a08ac4.js",
    "revision": "805addc29164862b969557436c2b69a2"
  },
  {
    "url": "assets/js/37.d66908b4.js",
    "revision": "24a38786a24e881a57f0b2dc959338bd"
  },
  {
    "url": "assets/js/38.ef827cd7.js",
    "revision": "4eb24dc11942832d190ced175a00a67d"
  },
  {
    "url": "assets/js/39.3d6874c2.js",
    "revision": "823096cd77f7e85fc0f6ea863c27e7ee"
  },
  {
    "url": "assets/js/4.eeca81bf.js",
    "revision": "f8c2d0d52c795e9f7d113c91ad43ca0d"
  },
  {
    "url": "assets/js/40.4555d5c1.js",
    "revision": "3d629dd00481cf8df829df903db1ba73"
  },
  {
    "url": "assets/js/41.1726667a.js",
    "revision": "db9364fe913f0348ab18b1a9a953dd10"
  },
  {
    "url": "assets/js/42.36b0c48f.js",
    "revision": "ec4aaccdbf58d346440793c38585d3ba"
  },
  {
    "url": "assets/js/43.f05d7802.js",
    "revision": "785ba8a31202929b32d1c5093b45d371"
  },
  {
    "url": "assets/js/44.922168e5.js",
    "revision": "d3e681208967a0e2256fe4b2939bf0e1"
  },
  {
    "url": "assets/js/45.ab297619.js",
    "revision": "0919792ffaff3143821254fd17c79d51"
  },
  {
    "url": "assets/js/46.0e22ac9b.js",
    "revision": "094d95a2f34c4114071fccd91fae2e27"
  },
  {
    "url": "assets/js/47.d4b79e7d.js",
    "revision": "d9fcd78e0ffc1adde4fbc0de233d7290"
  },
  {
    "url": "assets/js/48.57608422.js",
    "revision": "6f00b98608385953db6e999b0e44eceb"
  },
  {
    "url": "assets/js/49.fa78ba16.js",
    "revision": "25ea751922628804236efc61651104eb"
  },
  {
    "url": "assets/js/5.eeb28318.js",
    "revision": "ffe63724210d283a69a842661b492f1d"
  },
  {
    "url": "assets/js/50.4530bae4.js",
    "revision": "f0c6bd08197be4257f4bb65a9e35bc2e"
  },
  {
    "url": "assets/js/51.3f0cb25a.js",
    "revision": "7e88eef39985a85c0343c667fd6ecf3a"
  },
  {
    "url": "assets/js/52.9849c4e3.js",
    "revision": "11787661db0228843f83e61bee29b079"
  },
  {
    "url": "assets/js/53.323d4358.js",
    "revision": "cee78fc1acdf837334aa07678b79d54b"
  },
  {
    "url": "assets/js/54.3c36bfdb.js",
    "revision": "2f2158f55369cb9a87a0e919f342aa50"
  },
  {
    "url": "assets/js/55.c08cff72.js",
    "revision": "4713da002b2ce0d2033a1a4cab195eba"
  },
  {
    "url": "assets/js/56.ad344aaa.js",
    "revision": "6520b498e4afc018bc87c69120c96385"
  },
  {
    "url": "assets/js/57.86e765c9.js",
    "revision": "2b6f5118f6acd7de33a5b27fe10b5e92"
  },
  {
    "url": "assets/js/58.4b8da9c0.js",
    "revision": "c75b42e4d9adfd53a91e2e678b97031b"
  },
  {
    "url": "assets/js/59.3cf94307.js",
    "revision": "5dbd787468ec6fc1a74bb66a37f8f4ce"
  },
  {
    "url": "assets/js/6.81146704.js",
    "revision": "b5bb099142f1cc1883f10204f75fd3b9"
  },
  {
    "url": "assets/js/60.4d062087.js",
    "revision": "c4c3477925ca78bb6d3adce199d20a79"
  },
  {
    "url": "assets/js/61.8d33d733.js",
    "revision": "8616302f93618e3c33316c1572f22047"
  },
  {
    "url": "assets/js/62.f64683d1.js",
    "revision": "cfcd34a8a7b87a4e8fbde032229fa3bc"
  },
  {
    "url": "assets/js/63.a10ebf7c.js",
    "revision": "724ae8ec5ac2b3c4833c7655ca860d8b"
  },
  {
    "url": "assets/js/64.05422a21.js",
    "revision": "dfc8fef2b56ca1abb35de92c11b841ee"
  },
  {
    "url": "assets/js/65.738f954b.js",
    "revision": "9b4a6d4a59b0da4cb781a9f9f948805f"
  },
  {
    "url": "assets/js/66.de88940b.js",
    "revision": "f74d272e095044aec5ee150df558a8c2"
  },
  {
    "url": "assets/js/67.8a041778.js",
    "revision": "1c72bc869d6512fc0b9d84d65853b788"
  },
  {
    "url": "assets/js/68.215a0b4e.js",
    "revision": "f02a180d7e91ee28f990dd5257791a75"
  },
  {
    "url": "assets/js/69.e65da379.js",
    "revision": "a96ebe8d2b8f24bcdccab11c96e9e17e"
  },
  {
    "url": "assets/js/7.54401960.js",
    "revision": "2e83e81e3fd818e53c55f2eb67518b19"
  },
  {
    "url": "assets/js/70.2218b1ae.js",
    "revision": "80665f250b9e838ae96931dfc3c71cc5"
  },
  {
    "url": "assets/js/71.25770169.js",
    "revision": "f55c1b5b5103d85a2b5df5f2c5e62c34"
  },
  {
    "url": "assets/js/72.bf859734.js",
    "revision": "8e80162125acfd3001ef480462f15dd3"
  },
  {
    "url": "assets/js/73.d1959889.js",
    "revision": "bb32d135790fc91cb74cc28318a28a35"
  },
  {
    "url": "assets/js/74.82cc9a03.js",
    "revision": "90ec7a0f2900c95cad0ad421debea4a6"
  },
  {
    "url": "assets/js/75.9721b0ce.js",
    "revision": "397bb17084449e0ea22bfe4ee605758b"
  },
  {
    "url": "assets/js/76.f205ada8.js",
    "revision": "14c70655650c738c2d7c314dc8ddf08f"
  },
  {
    "url": "assets/js/77.10ab54f6.js",
    "revision": "7b9613e9e49e557f1a9bdcc419cd538e"
  },
  {
    "url": "assets/js/78.83301e7e.js",
    "revision": "0467f7b2829f84bd85d29df02d9967c9"
  },
  {
    "url": "assets/js/79.b4326501.js",
    "revision": "12197e5c1358effd51e3e959406243d9"
  },
  {
    "url": "assets/js/8.bb3144c3.js",
    "revision": "b4155ed57c5e26f665d341837503d72e"
  },
  {
    "url": "assets/js/80.25c3ad9c.js",
    "revision": "00b137806f3d0b3729d42bac35902542"
  },
  {
    "url": "assets/js/81.9f0e581a.js",
    "revision": "9b91485622f397af32858cec5088b1dc"
  },
  {
    "url": "assets/js/82.a962953f.js",
    "revision": "9ebf433b5b72c0fe5831a738c115bae4"
  },
  {
    "url": "assets/js/83.432b5b0d.js",
    "revision": "53c0083f883899be7d933f56ad316803"
  },
  {
    "url": "assets/js/9.5fae5c6e.js",
    "revision": "b1ce18beb82d650472e7d514b70c3ab5"
  },
  {
    "url": "assets/js/app.0f0009da.js",
    "revision": "699f34cbd21e431c49aee44fc0567dfc"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "37ff2ac60283a089c4245b281275b0bb"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "8a542200158f91eb933c79cf365aef86"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "9b7522563f2d71642937acacc422c5c6"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "19603ea50b6a6dfcb07f509c3315afe6"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "b0a47151fe9ba07400129453047102ea"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "bc6fc8dc2cca51c954b5d61a89c34347"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2e34cd3476ef7b26561a445729eabb4b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "eb4107ae3b2c6b74ead615b6c1af42b8"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "c19ea30a56fa499b79383e7e2a02ac4d"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "91746a7be540ed1feea2e6440ff88367"
  },
  {
    "url": "courses/index.html",
    "revision": "034df5b15fe77a48af63f139701639bc"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1ad815d4d4b8a34ceb078b8ca441fd51"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a04427f3ba81396277a8f1457d701cb8"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "5dc9ebd91fbe8f24e799d2deac45cbda"
  },
  {
    "url": "courses/template/index.html",
    "revision": "f5f02f3e8f63679aab4158098c64e9e6"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "4efb8f04eca81f73635d9c6c17df6962"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "9f1619058bd3d46323b8ff0a6476d3cc"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "70a76310096ec3f61182f3051c3609f0"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "c6e23661305a4b12e3bda44ab28bf597"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "dcac96f619004823927d5508350beba7"
  },
  {
    "url": "index.html",
    "revision": "bd680dda12375d7674e636f37e888070"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d8e787306724302c08a34f57175060f9"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "d3df049e607544986e68a38dfcd049e0"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "992c210cb3ad1d95c5bdddaa58702e4a"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "d4afc4db7d43433e5ff18c5d63985c12"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "382c995b58d9d4217051dc4620923b16"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "8827e16ef539945fd7f8c8d36e0d6799"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "133a335e62a707abadcd0b4d29edbf48"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "f6930b763b3501da030d338c78483a08"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "6753cb6f4a8c3c6eadf1331dd7a18790"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d38dfb0a2b1753ac93ab67b603f5dc71"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "3352ca9d913bba485f67c5869b16c29a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "a5c1dc10cbc1ee44b9955bce4705a96d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "a9e0fb611053a00bdae3c301763b27e6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "b817d3613029c7081ffd510b854655a8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "3d7d77b534a3d176fcef15aa3e98d7ec"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "8588f3650dd209e30049b971580f15f3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "471b09f5a8a4bb144eecd206c513b3be"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "23c5091954a60680719db4893824b8f4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "7bd2f87a97ec8449705ed21c65cc314d"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "382c995b58d9d4217051dc4620923b16"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "c7b380665765adfcba939413f27807ae"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "ff078fedb2792b285f7a45679cf151c8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "74a5d4afb7fe3b0b43bae25ccee6a8b7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "38cd78948bbc90dc633e8a5a9bc6cb47"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "dd338de5d52be31635df991dfd3caaec"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "aef683c79dca0065db95987807da4d67"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "4aa0fd2b5f28abb7f329a8157a967b4f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "0163d176ac672c5bc94596b40b716d0b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "482b7c86dece2de64ea4ed67982f0b3d"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "64cf3c84d9adf6faab6cb58f5ac3ec0b"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "de3ee7a3eed1dfacff1371c3dc9e7d08"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "5fb23d768868ad2af0fce815f3d67ae8"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "11ede56e2a3b07af3c782c3846c13e0e"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "cd74f0ae45fdc7752214ef9136fbd6ce"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "794a44c84149e3b46301c5ab73d93d5e"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "0c0593dcb7d7f614f04afb1b095ece9f"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "392082154ead41ca87465b4ec13380bf"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "2e606ce2da11c14c8d8733a80d260daf"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "a3a975971bd8cc6f9e5a55011f58fcc2"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "0271d008b266014dabbcb06cd10e1028"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "ea81ff03dbdc5f4515389f128b8887cf"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "fd05817d6c18c86255804954a81c1ea3"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "a85eeb021f38db1143e09cc4fb5c3f55"
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
