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
    "revision": "76b3e5786c52f1cfe50cb2bf49397085"
  },
  {
    "url": "assets/css/0.styles.1e850310.css",
    "revision": "5377154606521cbdc01d401ca2b99c2c"
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
    "url": "assets/fonts/fa-brands-400.0c9f225e.woff2",
    "revision": "0c9f225e8f69c622f681cf1ed973cc3d"
  },
  {
    "url": "assets/fonts/fa-brands-400.0ce1e868.woff",
    "revision": "0ce1e868452204695c8ac1c70f693c2d"
  },
  {
    "url": "assets/fonts/fa-brands-400.d28c96ca.eot",
    "revision": "d28c96cabe5302f1b2c90275cd3f4e69"
  },
  {
    "url": "assets/fonts/fa-brands-400.dfe5aa43.ttf",
    "revision": "dfe5aa4344a2d8a29aec8d83fb3fb14e"
  },
  {
    "url": "assets/fonts/fa-regular-400.0232fe8b.eot",
    "revision": "0232fe8b09de812c88e6cc27f57a3a88"
  },
  {
    "url": "assets/fonts/fa-regular-400.398be22b.ttf",
    "revision": "398be22b2308585b84da8e858e2d7b60"
  },
  {
    "url": "assets/fonts/fa-regular-400.3cace4a0.woff",
    "revision": "3cace4a04d941b5981ba32c6ce9afae1"
  },
  {
    "url": "assets/fonts/fa-regular-400.847712aa.woff2",
    "revision": "847712aaabbeba674afdda86d31cab17"
  },
  {
    "url": "assets/fonts/fa-solid-900.00bb62bc.eot",
    "revision": "00bb62bc33034479d5e82a0fd1c5efe3"
  },
  {
    "url": "assets/fonts/fa-solid-900.260d033f.ttf",
    "revision": "260d033f79f75d670fd09d8cf7c8bf8d"
  },
  {
    "url": "assets/fonts/fa-solid-900.4bfbf7eb.woff",
    "revision": "4bfbf7eb4b19d9ff9293eb177b6d0070"
  },
  {
    "url": "assets/fonts/fa-solid-900.9ae050d1.woff2",
    "revision": "9ae050d1876ac1763eb6afe4264e6d5a"
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
    "url": "assets/img/courses/building-and-solar-energy.jpg",
    "revision": "eefedfec25faebab4c8be9f9931f0be3"
  },
  {
    "url": "assets/img/courses/digits.jpg",
    "revision": "6c19eec6f3f28e275ae69d4fd4c15a39"
  },
  {
    "url": "assets/img/courses/electronic-design.jpg",
    "revision": "e4341e7c4c3fa3194a71fcb4310a28f3"
  },
  {
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/courses/machine-vision.jpg",
    "revision": "006bcabe5195ee69968f79da231c970d"
  },
  {
    "url": "assets/img/courses/mux.svg",
    "revision": "52a569a585cecdd600daedd3669107db"
  },
  {
    "url": "assets/img/courses/opendata-d_icon.svg",
    "revision": "7b1de989b4edaf490b4ba0f219096b73"
  },
  {
    "url": "assets/img/courses/opendata.svg",
    "revision": "27e4cc35563f732278b806460e2ad9af"
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
    "url": "assets/img/fa-brands-400.5d10d009.svg",
    "revision": "5d10d00980077f67990f73b1961bc46e"
  },
  {
    "url": "assets/img/fa-regular-400.d0fdc7c2.svg",
    "revision": "d0fdc7c20b0b0b1aaf27327547735fa3"
  },
  {
    "url": "assets/img/fa-solid-900.2306f642.svg",
    "revision": "2306f642b31b774ba1d8b6b784539e19"
  },
  {
    "url": "assets/img/general/portrait-placeholder.png",
    "revision": "4788048f319dc48101678d9e69f5077e"
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
    "url": "assets/img/partner/uastw/lecturer/christian-kollmitzer.jpg",
    "revision": "3f2213cb975128c136bfa4e25ed67d1b"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/christina-hochleitner.jpg",
    "revision": "bdd76d2e3f185c02c7dc6a07236dca29"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/christoph-veigl.jpg",
    "revision": "856a73506f666454dca2b3019a41fb2a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/iris-nemec.jpg",
    "revision": "5e493f4f91d5f536a902907b0f28358d"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/iris-nemec.png",
    "revision": "9b30905af195481a35cdd175a804a4b9"
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
    "url": "assets/img/partner/uastw/lecturer/michael-graf.jpg",
    "revision": "98bd0d935e43b97e63548cfe8d0f5c21"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/momir-tabakovic.jpg",
    "revision": "e42fd83e0beb6bb6f1d99fb5bd3ec0ef"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/momir-tabakovic.png",
    "revision": "c1649c11bc8f9ac8f7015c0b7cc2001a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/patrick-schmitt.jpg",
    "revision": "10287187ea3a73b6e89c675daaafaf9b"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/roman-beneder.jpg",
    "revision": "be3f59f8b15868e11f7222d55712c194"
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
    "url": "assets/js/1.94ef0287.js",
    "revision": "9e155b40f8b2e2cd1c8d149d3daf7f48"
  },
  {
    "url": "assets/js/10.5b22d391.js",
    "revision": "1471f4aec0c3042722b1f87a97fdaeb0"
  },
  {
    "url": "assets/js/11.aa8a9c3d.js",
    "revision": "17de49f0c636bba91d9bc80aaf44914d"
  },
  {
    "url": "assets/js/12.1ecf96b4.js",
    "revision": "45e997f81ff6a3891200588e8f8a07ea"
  },
  {
    "url": "assets/js/13.acfdee53.js",
    "revision": "d4da0768a35c78b265bf4da36fb0fc09"
  },
  {
    "url": "assets/js/14.6a461edd.js",
    "revision": "438700e308ef033e635576ca43e3c62c"
  },
  {
    "url": "assets/js/15.cd2655dc.js",
    "revision": "597f5979f83fc130505fbdea0b1ea5a9"
  },
  {
    "url": "assets/js/16.203e1500.js",
    "revision": "9bfb2ca72b65eb6e6b40a3462a83b9af"
  },
  {
    "url": "assets/js/17.18912e1f.js",
    "revision": "f8ed71b347e31635b387d79d23224e2d"
  },
  {
    "url": "assets/js/18.eefea8f8.js",
    "revision": "e7be34c9530720254747902b51620294"
  },
  {
    "url": "assets/js/19.5500eaf5.js",
    "revision": "e54bcdff88622236872ec23658486e29"
  },
  {
    "url": "assets/js/2.78ab3607.js",
    "revision": "47fe1ea0fcebb6d43377aaf324528bfd"
  },
  {
    "url": "assets/js/20.3573a6a6.js",
    "revision": "8d04f94ee88f0293d89dd5138c2e4191"
  },
  {
    "url": "assets/js/21.98029c2e.js",
    "revision": "f6beb38002f329afefca336106555a1f"
  },
  {
    "url": "assets/js/22.4058fd12.js",
    "revision": "199dae3315c742917d53b567155a8cf9"
  },
  {
    "url": "assets/js/23.2fa7e067.js",
    "revision": "1995c1b70604327ab0353505d12981a1"
  },
  {
    "url": "assets/js/24.9f755726.js",
    "revision": "b66e416173a54acca32414114ce81c1d"
  },
  {
    "url": "assets/js/25.f98b7616.js",
    "revision": "eeb0a6bea27fbec5b7c396bd7aeda76d"
  },
  {
    "url": "assets/js/26.334fbeee.js",
    "revision": "c69253659adbe1a417f737a5ffc465e4"
  },
  {
    "url": "assets/js/27.8a2b8169.js",
    "revision": "a8b8088967e0062864b61f9abbb206f0"
  },
  {
    "url": "assets/js/28.cbdf2b23.js",
    "revision": "7de863066c6be601926e5f543d492709"
  },
  {
    "url": "assets/js/29.373a66e2.js",
    "revision": "8df03e093bb7db17a01655c74013c585"
  },
  {
    "url": "assets/js/30.b22c1085.js",
    "revision": "1f90245e19b42d7ce1f9b308db51e50f"
  },
  {
    "url": "assets/js/31.db4cf588.js",
    "revision": "0007eaacb8173663b1bcb51ae2b355e7"
  },
  {
    "url": "assets/js/32.d61f13c9.js",
    "revision": "483a7abb1c3818c183f6ad2e1477d46a"
  },
  {
    "url": "assets/js/33.dd700120.js",
    "revision": "55e049887cd2928e3d5c98bfcdf0869c"
  },
  {
    "url": "assets/js/34.fc93e647.js",
    "revision": "091d45fda36e7d5c9a5cddd3a2b17467"
  },
  {
    "url": "assets/js/35.a935238a.js",
    "revision": "5717f0cf9d70a9ec3ec7f489f0a4b113"
  },
  {
    "url": "assets/js/36.fb62bc39.js",
    "revision": "489ee1f7aba423bd34640c8b73fa876b"
  },
  {
    "url": "assets/js/37.53217ae0.js",
    "revision": "eea1e4e7bb92c484202cbaf86c1cdce0"
  },
  {
    "url": "assets/js/38.7542bbb8.js",
    "revision": "b234a78fe418a9082f110ee6bdc2036b"
  },
  {
    "url": "assets/js/39.96d2f376.js",
    "revision": "0a923897f4aeac5f8f7b4d3dcc87c0f3"
  },
  {
    "url": "assets/js/4.c05ef996.js",
    "revision": "a608ccc2b363dfb1e1331e54f9c38bd4"
  },
  {
    "url": "assets/js/40.92b32367.js",
    "revision": "972cd36c1d5a139ff6d8219739c29cba"
  },
  {
    "url": "assets/js/41.e56fe29d.js",
    "revision": "0fc869b4f0fcdab757c5968d53c5de0c"
  },
  {
    "url": "assets/js/42.f2532cbd.js",
    "revision": "144a620773ef1cf8c81ad79a90b51123"
  },
  {
    "url": "assets/js/43.ac077477.js",
    "revision": "006f208f03c358acf795d06918195ddf"
  },
  {
    "url": "assets/js/44.28771f46.js",
    "revision": "8ead9f20ed53122d5620fb36af3717df"
  },
  {
    "url": "assets/js/45.a2acb815.js",
    "revision": "7770deddbf895061fc25ff03a7ba38e3"
  },
  {
    "url": "assets/js/46.bee0564a.js",
    "revision": "735d8c41e25d40bb9d91424c5daa5008"
  },
  {
    "url": "assets/js/47.98d5f1f0.js",
    "revision": "63f1f530e7f8035235d0a342e002f210"
  },
  {
    "url": "assets/js/48.3172b7ba.js",
    "revision": "09ce7c03a1545cb4f1ee77db68745294"
  },
  {
    "url": "assets/js/49.07c17dda.js",
    "revision": "81c4639631927a43e1379aea494dc0fc"
  },
  {
    "url": "assets/js/5.1ec5ebb6.js",
    "revision": "87da9e2faf8d2a4221dea152c5b93340"
  },
  {
    "url": "assets/js/50.589265ae.js",
    "revision": "5218e2058636546eaa5c4149d2c9a126"
  },
  {
    "url": "assets/js/51.73740dfd.js",
    "revision": "e76be2fda0ea6c8e1a514e9c99bf742a"
  },
  {
    "url": "assets/js/52.653dfc4d.js",
    "revision": "ff715f75712f8be4effb04fe4d548c7f"
  },
  {
    "url": "assets/js/53.68af83e2.js",
    "revision": "5b1307da41ba8a2105f602b1ee66a452"
  },
  {
    "url": "assets/js/54.7af78dd6.js",
    "revision": "cad0da5c8f7504db28a0478581979096"
  },
  {
    "url": "assets/js/55.67500a42.js",
    "revision": "cc89595788aaf0fba3a59823b222d544"
  },
  {
    "url": "assets/js/56.c65ebe6a.js",
    "revision": "d76d5c7b7d9f90d7d62e0f3996610cc9"
  },
  {
    "url": "assets/js/57.ced9c568.js",
    "revision": "706d193fd0b1d04afaa6f18fe81575c9"
  },
  {
    "url": "assets/js/58.b525f53b.js",
    "revision": "725e4c5b30f431c9d88f88760a6d083f"
  },
  {
    "url": "assets/js/59.6fbf9ca2.js",
    "revision": "353675de44d7be28c974e8c23a033843"
  },
  {
    "url": "assets/js/6.b5530252.js",
    "revision": "768b55f26d2fd34fabe596bdf6bcb7dd"
  },
  {
    "url": "assets/js/60.d8fcc2fc.js",
    "revision": "96ce62aa4f5d1c64d05318ef17aefdec"
  },
  {
    "url": "assets/js/61.ea6fc9d7.js",
    "revision": "66077a636679219771ffc3387616a0a9"
  },
  {
    "url": "assets/js/62.5cd4cc46.js",
    "revision": "1e50889eabc995bab8c871b55e1575b2"
  },
  {
    "url": "assets/js/63.6b03d107.js",
    "revision": "7fe5aa842f8a96f369e832c08d72ecbb"
  },
  {
    "url": "assets/js/64.2aa989a5.js",
    "revision": "459ec85953f43ffabe67d29eb33cfd2a"
  },
  {
    "url": "assets/js/65.9686da83.js",
    "revision": "73019d70305d72255907955aa69c1675"
  },
  {
    "url": "assets/js/66.deb352c8.js",
    "revision": "9cbf283190135095e7c57e5e8e7b473f"
  },
  {
    "url": "assets/js/67.3c4356f0.js",
    "revision": "7bb913610c1c073da607648b52bc0b36"
  },
  {
    "url": "assets/js/68.19b45524.js",
    "revision": "0cf054ea3dc1ae70240e422bd78ab6fe"
  },
  {
    "url": "assets/js/69.9f176df2.js",
    "revision": "0d595440a67bf96724a1958ba1643a76"
  },
  {
    "url": "assets/js/7.fe2e4bd3.js",
    "revision": "513707b9c53333f5c9a982112fc92c4f"
  },
  {
    "url": "assets/js/70.65830e40.js",
    "revision": "0e0e95dc67df5ed95106326390d6583b"
  },
  {
    "url": "assets/js/71.ac84acd8.js",
    "revision": "781588812c083f1b92572eba59f3603b"
  },
  {
    "url": "assets/js/72.6c98b667.js",
    "revision": "5d0755afaa7b992d5465daa56d3ccd5d"
  },
  {
    "url": "assets/js/73.5d8e6653.js",
    "revision": "e4ff4348cfaf142f8de58b00daf7e109"
  },
  {
    "url": "assets/js/74.afe498f2.js",
    "revision": "64f0a00ecee9665909d734686bacc967"
  },
  {
    "url": "assets/js/75.df4f06ac.js",
    "revision": "8e33a8f79b1e6558ed89aa163db0ef47"
  },
  {
    "url": "assets/js/76.4db4552f.js",
    "revision": "8ab3cb429e7a9b70dbd360b90d741861"
  },
  {
    "url": "assets/js/77.d224a1a9.js",
    "revision": "e271d74fc248c6276195615041d6c6fc"
  },
  {
    "url": "assets/js/78.c88ae8c9.js",
    "revision": "45a2496f1ee6772a4d043e0dd938a24f"
  },
  {
    "url": "assets/js/79.616c56ef.js",
    "revision": "c95d3272ea06d85bc69f7d8dcbcf5cf3"
  },
  {
    "url": "assets/js/8.b6509278.js",
    "revision": "98cfcbf8e2489b494e8e4c418a619395"
  },
  {
    "url": "assets/js/80.af6b627b.js",
    "revision": "9747a83042e6b2246f09870edd867dca"
  },
  {
    "url": "assets/js/81.3f66a487.js",
    "revision": "afedd56a90795cc842e389f3963f8e8a"
  },
  {
    "url": "assets/js/82.0c48f9cb.js",
    "revision": "3446f21cf98f98c90d6d0d890b883525"
  },
  {
    "url": "assets/js/83.7974b9d5.js",
    "revision": "a6212930980799e65bdd4e7aa338b64e"
  },
  {
    "url": "assets/js/84.4a185d4b.js",
    "revision": "498b85ae5d19ca68cb68299fb6ec7f21"
  },
  {
    "url": "assets/js/85.0c49b63c.js",
    "revision": "e677812319873d4b27b7784d4c2c8a46"
  },
  {
    "url": "assets/js/86.4d8362a8.js",
    "revision": "d56d6c8c573da459b0d693cbdf94f0e2"
  },
  {
    "url": "assets/js/87.b8adba36.js",
    "revision": "a3b62430f6e381e1c75f1482ef71a607"
  },
  {
    "url": "assets/js/88.9c3fcdcc.js",
    "revision": "fa394ddc229bde7d8af331b4db03391c"
  },
  {
    "url": "assets/js/89.e4e01052.js",
    "revision": "d4b86728e31b5ea7b21b232099c3c0e9"
  },
  {
    "url": "assets/js/9.dc3e732d.js",
    "revision": "8ad4111feb8610895c57c9a7674c88c0"
  },
  {
    "url": "assets/js/app.562f5e17.js",
    "revision": "89cb546543c4deda464864a15ca2c2b0"
  },
  {
    "url": "assets/pdf/summer-school/at-summer-school-2021.png",
    "revision": "35ba39ca13dbd21e3ca9210f43a720eb"
  },
  {
    "url": "assets/pdf/summer-school/summer-school-1.jpg",
    "revision": "a6e800089d9a4387eea6b65974b38c68"
  },
  {
    "url": "assets/pdf/summer-school/summer-school-2.jpg",
    "revision": "4a4d75801f8c1fe4855d6a72c47b3962"
  },
  {
    "url": "assets/pdf/summer-school/summer-school-3.jpg",
    "revision": "0dabfd051371975087997d69a872619d"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "aced894bb357ae511d7354db25136c76"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "3c217746373e460552eca3394a3db287"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "0d11b362e4ffcf60acf25f7c687ffff8"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "0e1ae7a475cabf447c53d9519b300b35"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "64e5fded4e13bad65ee200b7f47fea63"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "026f9e86fb476b967442458764a3e01b"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "4312cc6f8f0d52ce4b633ac236684e76"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "ce9d3f9c8dc32e2b2a63b27f71969b36"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "e0b9639085b945530af1a4791da5ea78"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "b5c7292ee2cf80eb1cf0ecd1097fb074"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "838c9ce27eabb2fa49682fd871e6cbb6"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2eeb54d05e066ccec5c0b1e439c2b547"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "51bf4821617385ad57485ae641d28022"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "5782707d983b4dd21236a111da50f400"
  },
  {
    "url": "courses/index.html",
    "revision": "41a76046b8ecf4ad1ab715eac5e74d48"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f4ad86419bf901e17681e9291dfa5201"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "77d41d954293ced0b020fdac087b91a8"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "3fab75070ffb88ea989156eede8695c0"
  },
  {
    "url": "courses/template/index.html",
    "revision": "95ccd88f5bfc4c07d2b5a883c7d979fb"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "20632e4b4bcc15ad0450138fd7aab87a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d246bc6ebc23463756fbeac67c74966c"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "d0230ed479f23579ce7fd6ef47919955"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "31bb5cd5e5ba593cc814ae9047551190"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "5f548592b3e774cec72d46d729a2b067"
  },
  {
    "url": "index.html",
    "revision": "5f22ffcdb28d4e098b6e0dc10214a609"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f8a0d22e78a65fe1f8e719c2dc4d2580"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "e30b1d286678991a48388c6551c2e41a"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "ed4e180567056233326087e20a04eaed"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "ee52d8c552fd4fcf0f1467ad4a7aed48"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "d6f57523dfa9e21b819a2983133db39a"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "80ff0b13724812aa6563b82a20a7080b"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "eafd9147130d131ead98387727990a8b"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "42681116cac28fbe91ea32eb2ed7263b"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "316df8b09d1a063f08fac6299208ef41"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "b2403c9567686ace2284cb52fc733fa9"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "6741093b7ec4b68467e1d1a7dec194b1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "fd85f74052b0eface1e2311bdfb3ad46"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "7d2e77d95e1cdd323adfb8c7e116ec45"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "4a5aa2ebfe086497970de901dc49ea89"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "2749b08d44a8d78818f08a6996907435"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "1b416e7642ac32cc9f42d238801d95c5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "4933ff47654eb69311f374d018502c32"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "efe225c8914481ec298be91000f73378"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "8ab95f28109418f20c8a532800d9d401"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "a6c04bc2fcad52b1761cda0bf00a3232"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "52a2cb4730b77335a1ed98eb08087fe7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "ab034b92abf41144ee373116bffe2e85"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "1a9ff105e2387ec8369125987f5e9742"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "861057320d550f72b89836fc5a5d8f38"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "85fbef918843b9b4400f21223b30c10b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "f33b9d76941e69ce605e8727307a3b2f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "06960258c55e57abf34af54e9da53863"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "3c888b09e1f5096b865d93550ce1b706"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "75c6404558e18f4be4125827cd6af645"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "a5622f3546cdaf3b02a0ea000e55fdf0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "468c0c057e8050b6f56533688826328e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "01d9e24def0075f8c0f7d90ce2d29d76"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "f67f0ef66f67e86ac6990e2cea0ddb62"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "d6f57523dfa9e21b819a2983133db39a"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "702f9470c5613e6ddc2b7f24400451cb"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "008c93c45cb7d86b56e986f13eb137fb"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "8eee06075551eb8c58dd7cc52212aa49"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "c863e7d0c83ade06e616da3069d7966e"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "f1624705c9c8faf481b913b156b79f94"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "b024c88b0cb5132e147d8eef4f0ed718"
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
