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
    "revision": "72bd30467daa4eb7c69b64e834407787"
  },
  {
    "url": "assets/css/0.styles.dc07a995.css",
    "revision": "ff2439aea2e172b4acfa1dafba1f9fb2"
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
    "url": "assets/js/22.fe911584.js",
    "revision": "4ece9b42858fa4279c48dea20e57ebd3"
  },
  {
    "url": "assets/js/23.94d09215.js",
    "revision": "0257800c7100007be797e21667d9c69e"
  },
  {
    "url": "assets/js/24.45d32632.js",
    "revision": "1db710e4d741925990d6fdbc70e820df"
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
    "url": "assets/js/34.487dc183.js",
    "revision": "c9544e8d310b432a4e7d4f89cdcbbcfb"
  },
  {
    "url": "assets/js/35.a935238a.js",
    "revision": "5717f0cf9d70a9ec3ec7f489f0a4b113"
  },
  {
    "url": "assets/js/36.c7dd88f6.js",
    "revision": "5df1f416a62b4c7d438aaadf2dc316ca"
  },
  {
    "url": "assets/js/37.34deb75d.js",
    "revision": "df2e9eab43fc334497644f0015068c5b"
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
    "url": "assets/js/41.709d5f82.js",
    "revision": "1ee64b51a128ff71d362b16038e1e2b6"
  },
  {
    "url": "assets/js/42.670ae08d.js",
    "revision": "48bfc96209ee0cee956df01a2568773a"
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
    "url": "assets/js/48.e0e6e88e.js",
    "revision": "8ae5c6833466384873ad85401d1eaa85"
  },
  {
    "url": "assets/js/49.8a5f9eef.js",
    "revision": "b3a41baf905852260e7f929f4bfa0833"
  },
  {
    "url": "assets/js/5.1ec5ebb6.js",
    "revision": "87da9e2faf8d2a4221dea152c5b93340"
  },
  {
    "url": "assets/js/50.231fbc6d.js",
    "revision": "4a87ef998848eb4862cb05ac170f56b7"
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
    "url": "assets/js/54.5b1e25c0.js",
    "revision": "f3142543e61ae14b6d8621bb2a0528fe"
  },
  {
    "url": "assets/js/55.2def607b.js",
    "revision": "5203649eb5702944e1ae03eaea32650c"
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
    "url": "assets/js/72.977f7225.js",
    "revision": "dec51c5dad78a47e305011a6da39ee9a"
  },
  {
    "url": "assets/js/73.c20ba3d9.js",
    "revision": "479590636efc1c4b6ca30030cb76718c"
  },
  {
    "url": "assets/js/74.6cefb85b.js",
    "revision": "81b68513e00f0454f82e4fae3903861c"
  },
  {
    "url": "assets/js/75.7968c9bb.js",
    "revision": "b00c21694ad6ebfc8a6a79d5320f8b33"
  },
  {
    "url": "assets/js/76.4db4552f.js",
    "revision": "8ab3cb429e7a9b70dbd360b90d741861"
  },
  {
    "url": "assets/js/77.969cf721.js",
    "revision": "e32705ff8241778415e29167d3ac00a2"
  },
  {
    "url": "assets/js/78.222001c7.js",
    "revision": "b8d075008b865c64724f4e08191238fc"
  },
  {
    "url": "assets/js/79.d1cd2ecd.js",
    "revision": "b9697423f0914153880c3f9cd8c5e7d6"
  },
  {
    "url": "assets/js/8.b6509278.js",
    "revision": "98cfcbf8e2489b494e8e4c418a619395"
  },
  {
    "url": "assets/js/80.41cf113c.js",
    "revision": "158e9cf3e82b54036a2a1734e8819720"
  },
  {
    "url": "assets/js/81.883c5b70.js",
    "revision": "f603a15a1bcca5a29757b82aaf799011"
  },
  {
    "url": "assets/js/82.0c48f9cb.js",
    "revision": "3446f21cf98f98c90d6d0d890b883525"
  },
  {
    "url": "assets/js/83.654c725b.js",
    "revision": "07aeec60c416ed7ad6c2dc1252418a14"
  },
  {
    "url": "assets/js/84.4a185d4b.js",
    "revision": "498b85ae5d19ca68cb68299fb6ec7f21"
  },
  {
    "url": "assets/js/85.5a8fd38b.js",
    "revision": "c0c05b5cb2c328a27aeebedb22e57f62"
  },
  {
    "url": "assets/js/86.4d8362a8.js",
    "revision": "d56d6c8c573da459b0d693cbdf94f0e2"
  },
  {
    "url": "assets/js/87.bf6e6457.js",
    "revision": "842e0260f453ec880ce6728f49bb3779"
  },
  {
    "url": "assets/js/88.aa2df8d5.js",
    "revision": "1492f9b996b48ef130f13f773722ee41"
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
    "url": "assets/js/app.8558f89e.js",
    "revision": "2744b6492fb8ccb48000e25384b0d1c3"
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
    "revision": "8658e0afc1ba33cc987e911b35cf47ff"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "77e940625af462aa40541fc4565bc330"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "4b9835dee1b0638e46937332c43903b6"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "f82f4ea98c9a42e7b1d68c7bb85a182c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "b9916c14e7324b6a901933dd9abe87e4"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "0c54865bd1d1975d72e550d2fd950428"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "68c26423f22ccededdba17fc1a4edf3f"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "52d6fb11d8cbe672b317be7f256163c7"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "dad05c00f1407dee7b200d3e16fc0873"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "bb178c12db1f05938125739f31306bf9"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "6a65204415ba28933c1c0afb0d548e7a"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "9ff221f50719dd41a7810b46a39f1211"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "8211e07455266dda90aa67169d2833f1"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c6515d48e7a02f51577f0c8a871415d1"
  },
  {
    "url": "courses/index.html",
    "revision": "bccfc714b6bab7aace2b6dd54e6882ff"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1059622ddd4240ed8e32bd7c24bb0843"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "8b96f25d4afaa61b3dd1c98ce3706b92"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "9bdc0b2882abac301ca8776fdd3b456f"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2a2a7898e8e85dc88058072c6843a7b1"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "933cfb1df01d2cfe798e4de134743b56"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "a6d92545c30bf6e356e405e2abc19b40"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "3980c46e89235cef98f09027e907e867"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "fe0f19a713005158c05fe3943e2f8231"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "07dba9fd6d15ace4c122100a674c49f1"
  },
  {
    "url": "index.html",
    "revision": "53476b2aee98733470cdad853e5943f3"
  },
  {
    "url": "studyathome/about.html",
    "revision": "922071799f9846b001d348296961686c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "924ed3ccd412937fb199216a990db149"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "f3fe63c9351e9a27b888e83b2cfb9e3a"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "f7029d084f48ef0df508e1659164808e"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "72bd30467daa4eb7c69b64e834407787"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "96a1c20a0e5d5e9276d74bf56cff7123"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "fa07baafc261eb8f3e125766e1dd61cf"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "07100da16ee187f79f2342a9a3134a2d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "02f9233a18132898561b38b170d76dbe"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "72bd30467daa4eb7c69b64e834407787"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "7134e20deb5a5b79fbd33d6528d4da8b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "ac215e42fbe79f7f814fc8df46b9ca58"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "45964b14eaf5be3af19e4125def85931"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "5e85bf2d97aee2f6c318c80bbb8439f5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "c33e6af8e5da56873d6641a617d53378"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "34cb29be74e470d7c30524e8a6851dd5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "32799a1daa5c80a7a89d9f68be59f610"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "c861f96343621a859bbdfa2935d01c83"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "bdc5432d0766cdb827d53a84bbd2cd83"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "3799639d58937f2c7534dbb96ff17b96"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "0b85c1d91caf7be048fb8f8d58fdbcc0"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "8410cff35e1bfd3f0a884b4133f2d54f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "5c945aec3d6119dc53918b87115f8f5f"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "62a9cbba0597ff0b21347a16c8e3eccf"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "18a0e5cf53a4a1b7451b4abef4c772e3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "4ba12a9197e70dfd5c4db8287a8e3484"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "d606ff5ad870bd98ce812d73900efabc"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "83afe197c7290d9a179e7e3abc451588"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "41d020520bc45e9436f7831968c8feb5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "28d1620bf6f837def38ab14a9d198bf2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "bcb3b080240d43ffc7e74dbebefbaa24"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "cdf26f7ddea8c13beff1a09c419d89d0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "0fb5fcc92e57479b96a0c3eccab477d1"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "8a32767d30a070f82c0df5e0d27a8df4"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "1e3880c7e10bdda48e96c459638c02a5"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "90f44d96a291bc34f963c6a0b9e6043b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "fa9389caa387ac03f8c9b1cdb8ab5840"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "1c7408499c792627cc9d1b670d997d00"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "493ff4916a1585a79a1a181dd64e8a61"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "757ed31eb3956d50ef932ba48b636ce2"
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
