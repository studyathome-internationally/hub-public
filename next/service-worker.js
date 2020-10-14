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
    "revision": "fd81db5ed1e659853f3b9333c0cd9fae"
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
    "url": "assets/js/15.5b32edaa.js",
    "revision": "e64d15652c6c7282d9e03ce8aba351e2"
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
    "url": "assets/js/20.a70538b8.js",
    "revision": "769bd634a1a6d174926ee5ce1deafd29"
  },
  {
    "url": "assets/js/21.e9c14dba.js",
    "revision": "298e35a535d252851652f3146a32b053"
  },
  {
    "url": "assets/js/22.3b54abbb.js",
    "revision": "b6c664c640820c42a05a0414e9bed20b"
  },
  {
    "url": "assets/js/23.79f58767.js",
    "revision": "3e0ede88a15c2227af27b38e0252186a"
  },
  {
    "url": "assets/js/24.09b6437f.js",
    "revision": "cb9afdb8d0ca8c35619b32c02f6140dd"
  },
  {
    "url": "assets/js/25.5297afad.js",
    "revision": "aa347e6c07684dce9a1e9b1a6bae01ec"
  },
  {
    "url": "assets/js/26.c2f97c0e.js",
    "revision": "42de6d75b1238b453f9026840248ace9"
  },
  {
    "url": "assets/js/27.0bdad641.js",
    "revision": "50125d3915e577931d6acf1cc831c70d"
  },
  {
    "url": "assets/js/28.89defaeb.js",
    "revision": "573e2680d42dff2182980a4a633da3e9"
  },
  {
    "url": "assets/js/29.35f8809b.js",
    "revision": "6ca4d288e193915bd166c3b82e499734"
  },
  {
    "url": "assets/js/30.9b726699.js",
    "revision": "6a459592882e56c3108eec8343073ac7"
  },
  {
    "url": "assets/js/31.2b81d890.js",
    "revision": "6fa34548c7041efcedd63fc203b527da"
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
    "url": "assets/js/34.99e8f929.js",
    "revision": "99b003b297d8d55d8adcef448f3e5576"
  },
  {
    "url": "assets/js/35.5c53705c.js",
    "revision": "7189c933818a0a5858448d6e9574e413"
  },
  {
    "url": "assets/js/36.13a08ac4.js",
    "revision": "805addc29164862b969557436c2b69a2"
  },
  {
    "url": "assets/js/37.85b95526.js",
    "revision": "8574a44cdd1dfaf60b92669ad8fd7cf2"
  },
  {
    "url": "assets/js/38.ef827cd7.js",
    "revision": "4eb24dc11942832d190ced175a00a67d"
  },
  {
    "url": "assets/js/39.3fe1fe35.js",
    "revision": "6b2ebd6b1d076be27d638e579d2f1bd0"
  },
  {
    "url": "assets/js/4.eeca81bf.js",
    "revision": "f8c2d0d52c795e9f7d113c91ad43ca0d"
  },
  {
    "url": "assets/js/40.1f0faf5d.js",
    "revision": "9a50077c2dfa7855161d7968b9ee7c0b"
  },
  {
    "url": "assets/js/41.2b94c9da.js",
    "revision": "c4dfc3d32e2415e338479036e38c49b3"
  },
  {
    "url": "assets/js/42.45f5b7f4.js",
    "revision": "0818598f8ca4126defbb30f0e011c2c8"
  },
  {
    "url": "assets/js/43.226e778d.js",
    "revision": "8ebeca49475e017f1ed74071773c9593"
  },
  {
    "url": "assets/js/44.c6b143bd.js",
    "revision": "13a5c2a5e527338cebe8acd0f94bddf3"
  },
  {
    "url": "assets/js/45.d452b7c0.js",
    "revision": "e3ba2853f26c9248373f8b9b41ce2327"
  },
  {
    "url": "assets/js/46.9c8400fd.js",
    "revision": "0adb53b173463d91b91ff1fe8e3791d8"
  },
  {
    "url": "assets/js/47.3138e519.js",
    "revision": "abc1b99a170dbac3c4ec861f4c0d3864"
  },
  {
    "url": "assets/js/48.9090d651.js",
    "revision": "8c8ca63ca5ae2f9b6f8554e173d9a396"
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
    "url": "assets/js/50.2878ad6c.js",
    "revision": "171de9910f715c1562862b508b3625f9"
  },
  {
    "url": "assets/js/51.0e7b4d11.js",
    "revision": "4edfe04e8479735294659250ec3ca4ed"
  },
  {
    "url": "assets/js/52.a39f96fb.js",
    "revision": "19d7d0ab2b17e9c53b8b0c8fa37e7d53"
  },
  {
    "url": "assets/js/53.dc026b9f.js",
    "revision": "8f3e8e1365431de9a02f1a210038b6a4"
  },
  {
    "url": "assets/js/54.3c36bfdb.js",
    "revision": "2f2158f55369cb9a87a0e919f342aa50"
  },
  {
    "url": "assets/js/55.520aab60.js",
    "revision": "e0c41d1f988c119aace36073d153b137"
  },
  {
    "url": "assets/js/56.6383dd71.js",
    "revision": "d214168da9e4eae2abfb8445da9c8e70"
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
    "url": "assets/js/61.3532be8b.js",
    "revision": "5231964dcb321ae13f8de0b16e61aadb"
  },
  {
    "url": "assets/js/62.bc4106bc.js",
    "revision": "69f2872e85fe638a47114a2eb4e10f13"
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
    "url": "assets/js/65.bc856dc0.js",
    "revision": "f92094de479c82e35dbf04873625dd66"
  },
  {
    "url": "assets/js/66.dfaec68e.js",
    "revision": "7e1aca3fa7b37c658d36a23a9eef2b08"
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
    "url": "assets/js/70.7f140be6.js",
    "revision": "c98d1fd0cc32b9aecf14a65b5eddb29b"
  },
  {
    "url": "assets/js/71.29ac1340.js",
    "revision": "7b242357d70e0d72a7b138e0579cf5a7"
  },
  {
    "url": "assets/js/72.bf859734.js",
    "revision": "8e80162125acfd3001ef480462f15dd3"
  },
  {
    "url": "assets/js/73.579b8a9f.js",
    "revision": "029f5f59af341edb75bfc0aa55677741"
  },
  {
    "url": "assets/js/74.1ba81b22.js",
    "revision": "b8cd5daf3dfde9f3663b6c3cd665da94"
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
    "url": "assets/js/77.b855f42a.js",
    "revision": "7d543c6a0ae5c31a310352819a1f216e"
  },
  {
    "url": "assets/js/78.83301e7e.js",
    "revision": "0467f7b2829f84bd85d29df02d9967c9"
  },
  {
    "url": "assets/js/79.51a7cb16.js",
    "revision": "be04643e3360694c8dc9faa349c2b60e"
  },
  {
    "url": "assets/js/8.83a34d1b.js",
    "revision": "322dad3e16fd2897aba81bab82007774"
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
    "url": "assets/js/app.ebae1d4b.js",
    "revision": "552388dbc480fd1ea2c6ff821199945c"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "b86bcbd70db5a275b5a4ac1b4e905696"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "3e4010897c675c8d7e02b114ca5aaf9c"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "a794374af849213095812e0697e87917"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "290fa2a2b8d64c2ba08370da69c8d9c2"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "d018c407ab71ef5994e1d68a92a2df70"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "08ab101e7691f4c2b6a8c42eb4aeca92"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "dbb75791d343d5d758cbd9844ec6d278"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5e3f18d397317862db9b3021809e8968"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "5b332514140ed85b0e323db5615ff253"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "8b6086368df1c10692ef537123a0a430"
  },
  {
    "url": "courses/index.html",
    "revision": "6e8aa36c7594baa291e7b55964ecda31"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "e333e0388e3deb4358ae946d7ec890d9"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "49fdf84bbe7da94e7d19b1b645bb54d4"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "f9b092e1dd378822f9283a466b059d1d"
  },
  {
    "url": "courses/template/index.html",
    "revision": "c94e8833b233e2159fdefaec5d6b85e2"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "5198cb5748e63825391096b8f97d1cea"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "47bcd2df73812f3fd815653429f9a59c"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "8bd0bf6dfccb0d4acd62978d568c7f00"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "7dc568b2baa5526195dd0ffef50d8175"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "70a55a16841b1e0672480610e6e311b5"
  },
  {
    "url": "index.html",
    "revision": "fb266d630c01370726d744f305acaad3"
  },
  {
    "url": "studyathome/about.html",
    "revision": "e9e90f255852fbde9bdbe7aa17a92809"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "220a97e98bffe897d9b2947079f9db23"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "e7b78d7478dc9fe822dcac4c53bd398c"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "1147066eb9be792dc11086fb3c4d3fea"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "aaf88ed4437a0a3efd438030e8e34f0f"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a5f18bbe0fbd9a935f2dbecfcb6ce690"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "f59cad44742b0758460ce44ea4db6925"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "708a9984c871bb7678f3a3489626c283"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "514e687de9db6f619c9d61bf8ed3f181"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "ca022499f2bd718424f8a209b7cbeb57"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "04df8dbe1fc4674709f1316d5f30e4bc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "3287d1544bccbf193f98bc07650b163b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "e2b1b7d46840a1572afe523f89b76b3c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "afd20ed12aa20b3f78493b0973466910"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "63c7525b5a9cdd82a8c4aeeda7e3ea85"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "10b14bcaa564d0e4ee7affb64cbd2ebc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "af7f56ca7ef9acea5b92bacbcdaa09e8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "f3a0f27bdc4111717fb4bb09a9367a69"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "3a69df7bae3d88af2ca704da20b9dd96"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "aaf88ed4437a0a3efd438030e8e34f0f"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "08987ad19aa3bf79c20133e97260cb14"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "e65a097886f188bcf8289bf67a390079"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "cc3b659cce486426a903f100e33e2040"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "853224acbd989a15ba3fd4456974b280"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "c585ff76143cc3ec73dbf93cf99d85fc"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "e8789d829c1495c1a2f6bd290545f21e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "a5352547aa83d539b693af0318b9bcb1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "1db6d25042fbe71cfcc77ef024b04e34"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "fee43a54a4a9ef8e37cedda6b93581ac"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "78519430ad0f0263d1c55ad13380b164"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "554304708c886991f3ecdd2e13e59d40"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "7ffa1529cefbd669fa54bf502d02de27"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "40747b2776ebca718fa55969892ba6e3"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a5c2a13182b3b5aaca638ecc063dc3ad"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d3142d5d762358eab1a51d49555ec06b"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "11f8ebed84b60eb3da10046bc9b5bb91"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "e9399c707a15476ae7fed26bdb38f806"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "854a60b421d0ef2c97f3a1c803b79329"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "0e454bb453075ac5f5dcfb14a6e10478"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "9115b43eaebdb49b37aaa5f367cceada"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "9998a60473c8ccf7630ca5b65109acc6"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "d3d02996eabc83bd346114b7616fa7bf"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "fc9fd6ae0eea30a548375de17af118f4"
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
