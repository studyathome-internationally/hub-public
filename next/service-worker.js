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
    "revision": "929c8996355f195df9134106c8129687"
  },
  {
    "url": "assets/css/0.styles.b4026c6a.css",
    "revision": "ee6472cdfba3c2c8d5e0edb5e367d4f7"
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
    "revision": "e86389a542ebac496054060d1f4e6d05"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/patrick-schmitt.jpg",
    "revision": "10287187ea3a73b6e89c675daaafaf9b"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/roman-beneder.jpg",
    "revision": "411f777a2a72dc0aee6c3feeec539b10"
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
    "url": "assets/js/1.9b18bc76.js",
    "revision": "7887f44832e2e7cbd11435122b0b4208"
  },
  {
    "url": "assets/js/10.1c69f992.js",
    "revision": "689d9f40a31aeec536714040e918403c"
  },
  {
    "url": "assets/js/11.f5296b4a.js",
    "revision": "932c5c949dfa2e6226f1f6eefd976e6c"
  },
  {
    "url": "assets/js/12.4cbc220a.js",
    "revision": "50860a776a0ffe44e2b70db0989b6b7e"
  },
  {
    "url": "assets/js/13.3e9fefec.js",
    "revision": "8bc034a50b65cd6de7f75246872d686b"
  },
  {
    "url": "assets/js/14.5cc42aa8.js",
    "revision": "a6908d40001fa4821250e11fc20ee115"
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
    "url": "assets/js/26.ba599caa.js",
    "revision": "26175cdd6cc2f0b4d077694e9188ec63"
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
    "url": "assets/js/31.327f3b7d.js",
    "revision": "18a9b82fac29be9393b202a903fb7336"
  },
  {
    "url": "assets/js/32.ea44f7e3.js",
    "revision": "dae6e768e28a8e7d8816140ab63f713f"
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
    "url": "assets/js/35.402b6fba.js",
    "revision": "7a2095a0cf85c87ba6a7c634a4f29ee0"
  },
  {
    "url": "assets/js/36.bd41fbfd.js",
    "revision": "3b530e5a2c2f567bc6b91383aabb1ea8"
  },
  {
    "url": "assets/js/37.219b73c8.js",
    "revision": "c842bea08006c7fa2896c509f09de4e8"
  },
  {
    "url": "assets/js/38.8db20269.js",
    "revision": "8310c7ede4381e6a88f5e2fb25118819"
  },
  {
    "url": "assets/js/39.db6a5e4e.js",
    "revision": "6440eece38897a9483c48a407f3c47ce"
  },
  {
    "url": "assets/js/4.78da0889.js",
    "revision": "5a4a1ed3bbda64e4f936791672369b29"
  },
  {
    "url": "assets/js/40.deab0da7.js",
    "revision": "fa924fc0040f1a5fde682085d1c0332c"
  },
  {
    "url": "assets/js/41.7b23e58f.js",
    "revision": "b523e4d607fe9605edcc2bd1a6534756"
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
    "url": "assets/js/44.84cca55a.js",
    "revision": "761ad694fe1a6d613fce7a351c537175"
  },
  {
    "url": "assets/js/45.75be6561.js",
    "revision": "bf46b548cdf0cdd56519d1d307d622af"
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
    "url": "assets/js/49.76316eae.js",
    "revision": "d0e2b0510c39f14ce7add5a77fb7411f"
  },
  {
    "url": "assets/js/5.5bc51737.js",
    "revision": "4a414610a45b39f49ce22a3fbe9cb8b4"
  },
  {
    "url": "assets/js/50.9033c9a1.js",
    "revision": "3dd2497ec8b6e1f0a87d8ed66162dbda"
  },
  {
    "url": "assets/js/51.d14e0558.js",
    "revision": "9a4fba83f588303277ff90523466d5c1"
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
    "url": "assets/js/6.274a24f0.js",
    "revision": "9beb8ae2d3a7b56ed29a0174a64aac17"
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
    "url": "assets/js/63.d60a9bc7.js",
    "revision": "dfa183d237463889fa4ac899b6efe3f4"
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
    "url": "assets/js/7.51feb973.js",
    "revision": "4015280dc888d0d68e14120cbbaea8c9"
  },
  {
    "url": "assets/js/70.38888b05.js",
    "revision": "06a4d4ebe26dbed058d3e8efe1582e64"
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
    "url": "assets/js/8.f85ccdeb.js",
    "revision": "4a86550ae32366a831ded420cfbb8cf4"
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
    "url": "assets/js/85.cdf5219a.js",
    "revision": "6bc07416fa9ea501d0c8dcc54d30d106"
  },
  {
    "url": "assets/js/86.62ef5f36.js",
    "revision": "90153dfb3180f8ef94376a7283a677fc"
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
    "url": "assets/js/app.d01f3602.js",
    "revision": "abc16036183da86003ec1b37e94917d3"
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
    "revision": "0faaa83f62d02659c09f8faffb3fcbb8"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "a5e1d6cd6ca2c514eac9e9edb316ce4e"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "8da461e67806488b605f478829c30cee"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "d868b0bb824d329ab1c79e4e90bd544c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "5f338f1ba3d8e994cbbaf8ea01393985"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "1533f1450c08384f7a75fdf030da2799"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "4d411cbdfa557dc1c6bbf3837cef85b0"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "72e033a81ebd968a61cdf63317b36a51"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "ebdb699a1790fd5e5fdeeeabb3d25d3d"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "e5e716ab1d1c5e8e99a2dcb5b99de119"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "69e86620d811c69241d477f693421615"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "0ac3628021dc94455e03eb241e94d6ad"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "ba2fbe6c8ed9bc707579464e8a76b87c"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e5272773b367a31e58091212c71fc73d"
  },
  {
    "url": "courses/index.html",
    "revision": "20478371c5eee5036bce55903969859f"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "49fe71156a4bd0256d87c57c2834a361"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "803c79fb92cb35e08ed58df0a8b06a60"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "729bbc67224adfe449c31a48d109dc1a"
  },
  {
    "url": "courses/template/index.html",
    "revision": "e97b62f0dd650796478672ed8f1d86bd"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e688bed94f3cd95266f1661523c5b8d9"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "6ce8aa60a374f5d25d3dc3ca299fa3cd"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "a91aee6b68e893c89fb236001cc1211b"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "4d7e78569c010b974356e365ed76724e"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "68e2707f30c000575405f17cb6fccd03"
  },
  {
    "url": "index.html",
    "revision": "af5d2436659d54def1ac5e642cbe217c"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d100ef9564fc62ecbff9cc156f87f9d1"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "3bcab46458a01f0524bb48b81f987589"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "c82043d836a92b5de5653085e0100bd2"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "cc0cc3933b675dcc95c2934666cf323b"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "929c8996355f195df9134106c8129687"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "11dc145b18308ae5131a6a37b07ea1a9"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "94f151074b173653f926d1647fd40789"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "ea4ef1abadd647a7f6cc934bedbab979"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "75abe1a762854474e39a0f2315bfdf0c"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "8fb5784a3f367b2956be5470fc2292d7"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "8c996abe72ab0bc0943885ab7828de2c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "ecb81d7d504862aeef78559ef294874b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "57e425979f270a2a3260113de92232e9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "839aa74baed0b4d5dab8349b927df46c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "049ddd29c3f9f2c938bb8affc588e240"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "6bda8cc520ebb5a02e0ff81e10add13c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "8e19e5bb990d0ca4f6ffb00e7a36b6fc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "70b7d5929d267121889b2ecc02f89cda"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "d8f087a05bfada09822ee3236001855c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "99a7fe58c275f8e492588a9ee94ada97"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "3140fa4b6ecdaf00828432f028c517a1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "48b0bbfc46daceba71ecb06cc495c6a6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "277b62bc15b7553cb317d96423f87b35"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "9e14d469d6746d10c378510a005ed2e9"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b49c60130b9f3a088ae3225beb04b9e4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "1917f275817a7b139c19d4ba9bfe573d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "9aadae83530d16e61a0293fa71c562e2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "edec899aa7a62d0d7a7aa7bfdde067df"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "dd829febbadb195fea78693e7529e5d2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "c9aa2b865d52420938ca5bcf5ecef612"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "f5fa4bd5573be327ced12223d032d5b1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "581c3ab9ab2f6683dc2b09b9dba6bd82"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "09c1629a7918c48f3d6208eacc3cf1aa"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "ab4ec8a29deee751c999d9fe668e5f34"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "de7768e224cc22dd0167c3cb9ad78061"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "5e2fa51df63b504b2c198335dd33cb5c"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "478585210af3aa1d55d8b8b9d118d33c"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "079087ce1c502c700976d19ade8ab03c"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "794a2b7ca49f11fb0c0e7d6f96501e33"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "188006fe236ae4791fa0a129cd1a571a"
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
