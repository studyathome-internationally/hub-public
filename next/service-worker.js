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
    "revision": "db7ca904a51242b08d775b7408bc43a7"
  },
  {
    "url": "assets/css/0.styles.333ab2a6.css",
    "revision": "a441076129b7b50aa8b5716dee081fdd"
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
    "url": "assets/js/1.e8ae862c.js",
    "revision": "6a19f05d1279f019dcc14c0b2555a3ed"
  },
  {
    "url": "assets/js/10.1c69f992.js",
    "revision": "689d9f40a31aeec536714040e918403c"
  },
  {
    "url": "assets/js/11.c9a07a4c.js",
    "revision": "0a93a7e33338d0a919a29ced13ebee33"
  },
  {
    "url": "assets/js/12.4cbc220a.js",
    "revision": "50860a776a0ffe44e2b70db0989b6b7e"
  },
  {
    "url": "assets/js/13.81ff4beb.js",
    "revision": "9ab1f24df135e224432f66a801203cd7"
  },
  {
    "url": "assets/js/14.c5897c16.js",
    "revision": "1247c6115f13b1ca78059984556c3dc8"
  },
  {
    "url": "assets/js/15.e19ca0eb.js",
    "revision": "5032a50a647e8aa5098981afe26556b1"
  },
  {
    "url": "assets/js/16.c48eb80f.js",
    "revision": "13310ad9b874412e61dab9583fc77f5f"
  },
  {
    "url": "assets/js/17.3664ba1d.js",
    "revision": "2c91c1d2ec06371231942304916ab1bc"
  },
  {
    "url": "assets/js/18.cf15519c.js",
    "revision": "36c3f38b481fd9bccdd77d4f42474770"
  },
  {
    "url": "assets/js/19.05b06790.js",
    "revision": "e604b8c4ac8a61c5ef8a125dcae1f3b5"
  },
  {
    "url": "assets/js/2.92354c6d.js",
    "revision": "849b1a912572f669a8af45fb514df6a3"
  },
  {
    "url": "assets/js/20.2d3536b9.js",
    "revision": "7d0453191dcc15df975503b681509fb1"
  },
  {
    "url": "assets/js/21.cff03ba0.js",
    "revision": "fd6cd3d7bf540641ee34581c643e4913"
  },
  {
    "url": "assets/js/22.ccabcb3a.js",
    "revision": "5e91ff655e1dc127b350cfa54f45c3b4"
  },
  {
    "url": "assets/js/23.fe41204b.js",
    "revision": "994ceed775c77f6f638efd3f0e60f442"
  },
  {
    "url": "assets/js/24.57709b72.js",
    "revision": "8f78e4450c32bee2c472d89e286edf1b"
  },
  {
    "url": "assets/js/25.b5db5927.js",
    "revision": "9b84cac5b4cd1638ff4af1057a5990fa"
  },
  {
    "url": "assets/js/26.ae1b2f7d.js",
    "revision": "5a35abd6eede38f54647cfcf89b1677f"
  },
  {
    "url": "assets/js/27.b069780d.js",
    "revision": "c5522350c15f0f1980bd1bbeca8fd31c"
  },
  {
    "url": "assets/js/28.98492691.js",
    "revision": "319259a9538d2dd6384922e23f31da34"
  },
  {
    "url": "assets/js/29.8813918c.js",
    "revision": "f8e7fbf845a07de59318f3a8997761a1"
  },
  {
    "url": "assets/js/30.3855c70a.js",
    "revision": "e4d7d592f69d7aba59d4b2b390b45388"
  },
  {
    "url": "assets/js/31.5dad4e87.js",
    "revision": "ec65b789ba33870d3780639925be2b84"
  },
  {
    "url": "assets/js/32.d202b433.js",
    "revision": "35d898ec47d74d4094e59a5c28c11bd0"
  },
  {
    "url": "assets/js/33.e5ebeabb.js",
    "revision": "fcd804f8e92ab5997fe5b12d488bdb57"
  },
  {
    "url": "assets/js/34.d75c1bc8.js",
    "revision": "4a623e66bc4663a0384d432bd7306bac"
  },
  {
    "url": "assets/js/35.8f3b8b9d.js",
    "revision": "6cd61489611997c7c12318e638ea12c0"
  },
  {
    "url": "assets/js/36.81914a1e.js",
    "revision": "bd14842f414cf2212345155d3511137b"
  },
  {
    "url": "assets/js/37.74643744.js",
    "revision": "91de43dc6d9362fa6b63c69cb6fa2e13"
  },
  {
    "url": "assets/js/38.5bb8cb3b.js",
    "revision": "5f1641b29f23a1a8ee3a0a1c3a3057ba"
  },
  {
    "url": "assets/js/39.db6a5e4e.js",
    "revision": "6440eece38897a9483c48a407f3c47ce"
  },
  {
    "url": "assets/js/4.3df969d0.js",
    "revision": "fe4240ad1b7055fa70586189093594d1"
  },
  {
    "url": "assets/js/40.5b74aaba.js",
    "revision": "ded0a4de29ea12415e42747821bb3ebe"
  },
  {
    "url": "assets/js/41.d02fadeb.js",
    "revision": "27a9ee241ab9bb938eb8cd757aa1e0f6"
  },
  {
    "url": "assets/js/42.f5463329.js",
    "revision": "e95636be854df2f8df4b6b93d0adbba5"
  },
  {
    "url": "assets/js/43.ab82a6f8.js",
    "revision": "796926859e8c83b5033ad2b79c5385ae"
  },
  {
    "url": "assets/js/44.66d291a3.js",
    "revision": "a4092ebe2f56b654601e299c48398aa6"
  },
  {
    "url": "assets/js/45.2c961a0e.js",
    "revision": "58034c86f9f9ef2704656557a02c8bf4"
  },
  {
    "url": "assets/js/46.a3bfaee5.js",
    "revision": "226cf06feceb47435cf1591f63c67707"
  },
  {
    "url": "assets/js/47.1055a350.js",
    "revision": "3f6e3c5b738ff38454cdb529d7db6097"
  },
  {
    "url": "assets/js/48.93907234.js",
    "revision": "fc004cb1cdfba89fb58ce4f3c323d7c5"
  },
  {
    "url": "assets/js/49.b10e7d2f.js",
    "revision": "427730dae8edd9d1d5fd36563de8cb2e"
  },
  {
    "url": "assets/js/5.5bc51737.js",
    "revision": "4a414610a45b39f49ce22a3fbe9cb8b4"
  },
  {
    "url": "assets/js/50.b07b1c40.js",
    "revision": "f9636826e0949739b310820e6ec91b76"
  },
  {
    "url": "assets/js/51.aa9aa713.js",
    "revision": "2ad0e769f69dc0b9206e9c37e5a80cbc"
  },
  {
    "url": "assets/js/52.481d184e.js",
    "revision": "6d375c48b4011b6c3944a395e035ebd4"
  },
  {
    "url": "assets/js/53.a55ac343.js",
    "revision": "11660f0c447f304862f21902562602a8"
  },
  {
    "url": "assets/js/54.152a852e.js",
    "revision": "5cde9615e6a50054e2e5efab2076f165"
  },
  {
    "url": "assets/js/55.6a0f2ace.js",
    "revision": "cf42fe9eb392696cac34b4eef43f0cdb"
  },
  {
    "url": "assets/js/56.51dcef17.js",
    "revision": "cb3487813d3dbfb60f8bf8d8feebe1b0"
  },
  {
    "url": "assets/js/57.5d4c17f6.js",
    "revision": "2c1f5c2e4f6ecdbd3e4a9471e83e6bcb"
  },
  {
    "url": "assets/js/58.e5b9eee8.js",
    "revision": "7246fa0ced6b2edf53158891dce7d575"
  },
  {
    "url": "assets/js/59.ef142ffd.js",
    "revision": "76270bb78011f7a6ad02ed9f769cd87b"
  },
  {
    "url": "assets/js/6.02c5faf6.js",
    "revision": "e4228366c7ceae00f112594e5385eb00"
  },
  {
    "url": "assets/js/60.5147e853.js",
    "revision": "8011a7a64175695f18991664c0b40711"
  },
  {
    "url": "assets/js/61.ac5d7bcf.js",
    "revision": "e2edff465d97a23a97d38d4b5e79e318"
  },
  {
    "url": "assets/js/62.120ce040.js",
    "revision": "402178bdecc2c9c557b10f5f99b0229f"
  },
  {
    "url": "assets/js/63.2acea46e.js",
    "revision": "b626bc9a7db87d3d3bf81ad920e675b0"
  },
  {
    "url": "assets/js/64.a079a528.js",
    "revision": "34c196392845d648ff206c4756585dfd"
  },
  {
    "url": "assets/js/65.e0c13052.js",
    "revision": "dcd36778ebaa300bac85b1367e6eac16"
  },
  {
    "url": "assets/js/66.44654e25.js",
    "revision": "366336136d5a502f162b3f9b8c2d683b"
  },
  {
    "url": "assets/js/67.d881588d.js",
    "revision": "334deed46a393c4638d1e781058adbd9"
  },
  {
    "url": "assets/js/68.5536d183.js",
    "revision": "8cbb2db77a2e167aa3a93ec562f2c415"
  },
  {
    "url": "assets/js/69.4b3a12ef.js",
    "revision": "2de81dc71ccf2fb7851c25b60e74154a"
  },
  {
    "url": "assets/js/7.66e9e685.js",
    "revision": "a603190fb3e170bbd5ece4b615b7dd6a"
  },
  {
    "url": "assets/js/70.adcf057b.js",
    "revision": "ecc9be0b14b25952958af5459f50480d"
  },
  {
    "url": "assets/js/71.83d24534.js",
    "revision": "9b0939fb430b62f77a0f0e69af9f90a6"
  },
  {
    "url": "assets/js/72.2f4e0804.js",
    "revision": "e9dcbbf549a3218d6204070c763673be"
  },
  {
    "url": "assets/js/73.420967e3.js",
    "revision": "a74889ccc5c8efa2f81198e446fb39c3"
  },
  {
    "url": "assets/js/74.dbd6fe88.js",
    "revision": "f28550e5cce9c5e018aa9805d113be46"
  },
  {
    "url": "assets/js/75.d69f1174.js",
    "revision": "c3cbed0c35260b19d8db29e7b053c11d"
  },
  {
    "url": "assets/js/76.56c29f2c.js",
    "revision": "2eae59e6689df360f0b27d8d327b545f"
  },
  {
    "url": "assets/js/77.41db2bce.js",
    "revision": "2839b57b225731adf2e501c4dd7d778b"
  },
  {
    "url": "assets/js/78.b2dfa8cc.js",
    "revision": "fc0ea3d54ca60c63229b0660b39f8214"
  },
  {
    "url": "assets/js/79.fcc69f66.js",
    "revision": "3d0c6bb47bfccf45a0a920a31281bffd"
  },
  {
    "url": "assets/js/8.a3a3ab84.js",
    "revision": "389b607a5a99a7481993dcd5a58678f0"
  },
  {
    "url": "assets/js/80.0673f82c.js",
    "revision": "147a23920aa5b91f18ee4a28da028e58"
  },
  {
    "url": "assets/js/81.295c8a8b.js",
    "revision": "afb8013bbbda2efeb2b87bd2a9c66479"
  },
  {
    "url": "assets/js/82.54b41eb0.js",
    "revision": "3383afeeae3300aa61fd7df6bfaf8536"
  },
  {
    "url": "assets/js/83.05e70b28.js",
    "revision": "6bec10004ddf1f5595327eded210ef2d"
  },
  {
    "url": "assets/js/84.ae70c899.js",
    "revision": "b621408b7fc057154254cdfac5a4de6f"
  },
  {
    "url": "assets/js/85.d2c75e16.js",
    "revision": "2d6d62739b1ececd06505138d2351769"
  },
  {
    "url": "assets/js/86.76093ff8.js",
    "revision": "6d1a9de9bd824cf82885b819f9e7c985"
  },
  {
    "url": "assets/js/87.aa3992f1.js",
    "revision": "428196696a1001c6d705dfe2b5e9b10d"
  },
  {
    "url": "assets/js/88.1cef98fd.js",
    "revision": "ff43483e003df422b373c8948c00d54d"
  },
  {
    "url": "assets/js/89.b864cbcd.js",
    "revision": "e9a76913daf0527581d32efa831acae2"
  },
  {
    "url": "assets/js/9.f373f452.js",
    "revision": "dd4acf141a8b76ff5f6fd8f1dfd47381"
  },
  {
    "url": "assets/js/90.cfc1b054.js",
    "revision": "1f156fcc3531e2c5c5a31538e7d24315"
  },
  {
    "url": "assets/js/app.89e585d8.js",
    "revision": "282c7baba7a7b7162e08a2d7100e424f"
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
    "revision": "3a0d40e73c8066f8a50cafcadfbdef69"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "89a417f4be5dd36aef9ab6a1910a16cd"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "416adeb9ca3096f3c21e25b7c9e987c6"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "a13816c921b91bf024edc45218b93969"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "ece294bf47f3b66d77e33d1ff6324000"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "d7719ba891e60cb9bbbd0dffcf60aca4"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "a714d9ed1bad7f1b76682deba4d54eab"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "1b50067b81b6be2ffe48c7d73654041e"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "9e3ced6cad28dbec003a594064b15bc3"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "a6ce0dc01de98270e9e4edd55d0203d9"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "f35ce5eb89c612b3646dfba9a1cd6682"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "abe1e18ddf6faa771a2fee6e4e7f35ed"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "25e4d1d41ecd3465732eeefe6fd8076b"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "b6a1aae9137ab16b8b897c7ef5964f3b"
  },
  {
    "url": "courses/index.html",
    "revision": "6f71b00fe874243e2179cd8531158b4e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "60bf1c72db19f368a61a868ec0745716"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d5d3a991d0727046235dbef3a379f215"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "dfb5e321d2631ff16a7c6c5bcf24d270"
  },
  {
    "url": "courses/template/index.html",
    "revision": "e84a41224f4c2137dfdf76778ef4d21b"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f9ae6216c0280f1bda19c7ab40aa472e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "60ec8edf98f238a4faaab33b52ae2f37"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "2eb073ffd917984b6fcf2e183807f237"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "9f48ace9502c555e28d484fb1dfbd808"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "8f8c947d421b7db10756393d444a4c12"
  },
  {
    "url": "index.html",
    "revision": "4f5ff8189253e8aa177cf804c85af889"
  },
  {
    "url": "studyathome/about.html",
    "revision": "9a4a61fbd50948100b3f0c4388b494ee"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ecb4647b14374f03a18ebabbe2665493"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "3f7114e4302c54bcb898945534e45163"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "7992504e700de4a8aa81af80f362cbe1"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "db7ca904a51242b08d775b7408bc43a7"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "e76b6c3240e3bb17fe57c17dfb4c5b67"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "946d12a07a5053e302dc433b629926f6"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "38636e63f5724f0e0d977327ada63cfc"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "0e9133f418f1e2bbf26d78b8218dfd18"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "191958c4d6c91d6168bd5937e67266da"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "344f1083196ed9d6e601482d6a3c0871"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "8dfbb48706650debc6bf6863313fa0a3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "463a806e1102c2ba8229c8a1c05dbe0e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "1a2899c17b8c5e19f11a84f9360a63d8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "b4c3aa77d75216a392ad7861ea80245c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "031d0f4883fb328a6ee12d3a463a2db1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "13458a18025c35ab5457d69bde51082c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "75e7b85bfde04bf0a1658b9d170022b9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "f3486fcb0101cc3deea65b90cdafb46e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "92ef888f75af454a92430a526d2b0086"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "e21f3abab0fd497371a18d7618f39120"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "26ca8472c99aa78f41193496dfbb38f4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "632fa272eb25618f5af2e9b10179a3f4"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "191958c4d6c91d6168bd5937e67266da"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "0af6b4e2954336acd33fb4bd34a06863"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "84d6db6beebaa11835085f781e6a9560"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "487a9f1af6b487c6b989aa3020488fd3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "b0433bc13c065ce442b66a9b665ba8a1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "1acc2cc199c2587a61f913c0f60d7c05"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "1418da40b112fffb73b56c75057870e2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "1da9c63169542f72a02fb8191ebbec69"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "125d6608d423de32a93dc141385ae10c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "b7230ee50821e29208aadeb0b6691e1f"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "1227acdfc828ec3d5303ff893e9ec801"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "3bb09c997922d3c2e67e69726f71b98b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "86327f4cab57cb94cdc058c1acb49e43"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "2a97c20d461d9a749966d913a5ae9b83"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "ac2f7881353be7cc6f1d9591eb4713c3"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "902ed834d198c6eb22b4bd1519336f21"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "961035bb7fafdbf58382dab961da8520"
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
