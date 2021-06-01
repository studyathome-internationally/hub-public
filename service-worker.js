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
    "revision": "93a97d62d3ff2ffe5a112952bd13061d"
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
    "url": "assets/js/25.86237023.js",
    "revision": "93d3f483e75ac8f24508746fcb1ff198"
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
    "url": "assets/js/28.bbb644bb.js",
    "revision": "bdee256f49146bb4d1bb5b974660356f"
  },
  {
    "url": "assets/js/29.373a66e2.js",
    "revision": "8df03e093bb7db17a01655c74013c585"
  },
  {
    "url": "assets/js/30.1b003a67.js",
    "revision": "4179de2b55638f600dc90c996c279bda"
  },
  {
    "url": "assets/js/31.b59a671c.js",
    "revision": "f863130f6dbcad60e628f5de0941fa24"
  },
  {
    "url": "assets/js/32.d61f13c9.js",
    "revision": "483a7abb1c3818c183f6ad2e1477d46a"
  },
  {
    "url": "assets/js/33.9f2b3bc0.js",
    "revision": "49afa4cdbdf33a8ed76da53bb3b8a8f0"
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
    "url": "assets/js/38.7ffbe115.js",
    "revision": "1631c0314882c963aaa5915e755958c6"
  },
  {
    "url": "assets/js/39.13975f69.js",
    "revision": "b4d26f2a6469f37240caa7e45bf87b72"
  },
  {
    "url": "assets/js/4.c05ef996.js",
    "revision": "a608ccc2b363dfb1e1331e54f9c38bd4"
  },
  {
    "url": "assets/js/40.6c9831a4.js",
    "revision": "2dd3a9e8d00494209c20730d5c4fffd9"
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
    "url": "assets/js/48.3172b7ba.js",
    "revision": "09ce7c03a1545cb4f1ee77db68745294"
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
    "url": "assets/js/50.291bb90d.js",
    "revision": "934ae9b1fd690cb202c4de2782feaabb"
  },
  {
    "url": "assets/js/51.09ae8bcd.js",
    "revision": "8da55aa84b9bfc96809719a5369c1d0a"
  },
  {
    "url": "assets/js/52.c45a5a06.js",
    "revision": "1d6acaa5282b160110c9cff6310000ba"
  },
  {
    "url": "assets/js/53.4063493b.js",
    "revision": "90952a027972ff62fd461b7d9902e631"
  },
  {
    "url": "assets/js/54.784778f9.js",
    "revision": "19e01a37ea032a79a4eeac2d4afb1d38"
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
    "url": "assets/js/68.d757f73f.js",
    "revision": "645cee1dbc6251c1082de405bc2935e0"
  },
  {
    "url": "assets/js/69.8245aedb.js",
    "revision": "3c0f4527ec14ba0a942920a3960122a8"
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
    "url": "assets/js/74.502a0170.js",
    "revision": "d294bb2b7d9c61d2803a563308556cc7"
  },
  {
    "url": "assets/js/75.7968c9bb.js",
    "revision": "b00c21694ad6ebfc8a6a79d5320f8b33"
  },
  {
    "url": "assets/js/76.aa5cdabe.js",
    "revision": "cdd2bbeba76f0f50d849aa66880c48c5"
  },
  {
    "url": "assets/js/77.c05f4926.js",
    "revision": "de0a1abc4574d1a3e49372c4f4c65e0f"
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
    "url": "assets/js/81.10c3931d.js",
    "revision": "4727527157fe02edb031fbc849d8e750"
  },
  {
    "url": "assets/js/82.0c48f9cb.js",
    "revision": "3446f21cf98f98c90d6d0d890b883525"
  },
  {
    "url": "assets/js/83.9bddb741.js",
    "revision": "c41f5f0ca2d8551286ba5953be662854"
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
    "url": "assets/js/app.7bff4798.js",
    "revision": "77772ab3b12b1bc68baeb1a90fa64b28"
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
    "revision": "9950aabf8c0b12903306217042e96788"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "2bda83128b0c6d7f0f422b1960e5ae46"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "e332ebb6eb27becfc162ebf1ac6ad1f6"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "f2cf3b39e4b60385c0dc03261002d8f4"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "8d3abfe67039fb7a92f531172446976b"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "dcbf531284aca6d328aec830fd34af2b"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "a3c5a012064ad14e1999f84358fa914b"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "59f94429b7b94d740b14280c5af677b6"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "f9c12219ddf958627a7d9ea9c8bef6ae"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "22b3858932b1862b8c514ad9dcdb8a65"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "5fa785bcf0d8c36d0874c9cc0fe61700"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "84e027f1b0b961812ded535fb5f344b3"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "3913bfafdc4f6ea008f1f862a017fda2"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "03ae7e7554ba365e7003c6469f75db81"
  },
  {
    "url": "courses/index.html",
    "revision": "2ed4466991d36f226c41d62c83e39a74"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "5d1ab2e7c29e10e07c99b7ca4dcdf84b"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "2a193c1d2cd6a8d5551aec193d13e414"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d14520fd1316fabb160843ef097ba468"
  },
  {
    "url": "courses/template/index.html",
    "revision": "416aadfcc0b69fcf6613e80bd8a87152"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "3ec4768fe7a0c4db30bd55031221e17a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "7993006d0da2ef1d3621fb0e2ca45fd3"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "98b6db67d791de8322d1fa25919f8df1"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "10635e5437f945fab1f1d0fbb956682d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "6eb32f070b9ff4852cb5d216fd395d5d"
  },
  {
    "url": "index.html",
    "revision": "f5e62279103e1660d3057676892b9eed"
  },
  {
    "url": "studyathome/about.html",
    "revision": "63113f701b3007aa289b5eb76eda5491"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "44a536d0eda02f7d471a4039c742005c"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "9b75ff3ce20a38c7bf0ed083a2e1a188"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b00bb790f43b8495d54f6446683a1767"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "ff5ea896a2533a29b18c68d02db7d3f2"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "17d43ed60bc99827c32646fff452b92c"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "33280b3f08fe6d70bfc1c04d37f75e8d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "1a84e0b591305dc2b47285f46f6827ba"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "3e3e279638b94ee43cc729732ac01f97"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "e48e44c9b5bcdc66fd8298919ec249c3"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "e841c5c8e82f3601dffad263f4771809"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "85f59ac2d9bb7849a516c8b4ef3f4d7a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "5d50c644ee80b104530496ebaf684467"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "25197bd875bc0331b70872cdaab8f2f2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "d1b0c5139279ee58ce8a284d8846b6e6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "3b54c43725df1435ea1aeddcb3220cbc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "890dcd2660f2aa192cb210f9ff53dc7a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "568d8b4f3c4b54a406ee23d87ecb7806"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "910623621efeb9805fa49e8126f6c7ab"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "235c070c23ae8d36518d6d741b94626a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "4e03a9d8db256c00619b52f114753dac"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "60945dd5f6e97101bd13c97453797e93"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "42c51d95f68fa47c21aab666bf8d9f0b"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ff5ea896a2533a29b18c68d02db7d3f2"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "17a8ced96e817c97be9e3f2d789ddda7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "dd36798221a70b2ef2031f9c7dcfaa06"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "c69d8b8ac7fcff878cdf927439fd9348"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "f9dd2f0588a07046137f31407ebc3af3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "55377e34f5a48550ed202a810491a1b1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "2b7a72ba81092e6141e27a17f3d861a2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "b93ec5d77793c0f6e4a447ca6a3bef25"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "ee41754f6a3e3e97eeeea9ec8e73a292"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "95cbcfd5e1665bb11f5085e3d39f07c9"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "93a97d62d3ff2ffe5a112952bd13061d"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "29db69d238642997ec48cdb64c611702"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "8ebbaa67c0e084184b99366a8fd09fbd"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "336738489ac03b5e0409e8a3fabfa2e3"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "33e227353d399c575a33b424bb81af2b"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "466a956f63186f3f4883f741e337e957"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "0118a5c35b678e843c1a9b279d50f0ca"
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
