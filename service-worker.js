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
    "revision": "cf19b6cd1b518f10a59131ec752b3220"
  },
  {
    "url": "assets/css/0.styles.a579fccd.css",
    "revision": "9f99134ab12a9f4dd9d5f8d211ba95b0"
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
    "url": "assets/js/1.3791edbf.js",
    "revision": "f03bdf10b25a0069ca2894c84be3452b"
  },
  {
    "url": "assets/js/10.6de0c2a0.js",
    "revision": "a76384a761730506aaa08a1ae887ce54"
  },
  {
    "url": "assets/js/11.49f7f149.js",
    "revision": "a437b51ea15af6da6d2c7422cd8f8a8e"
  },
  {
    "url": "assets/js/12.a882047b.js",
    "revision": "654129df4fffb648306974dd6a4e5967"
  },
  {
    "url": "assets/js/13.9e26c87b.js",
    "revision": "55c6181fe7d96fbe95d1629d97215194"
  },
  {
    "url": "assets/js/14.6aba82c1.js",
    "revision": "d68bc39463ef7302d5d2499a3b8cfed4"
  },
  {
    "url": "assets/js/15.3a33634e.js",
    "revision": "09aa64ff7b35df799c2bc5f029b2fef9"
  },
  {
    "url": "assets/js/16.d0705265.js",
    "revision": "e87978bb7f374450d46c41fcf6f0352f"
  },
  {
    "url": "assets/js/17.a51925a7.js",
    "revision": "7f952e5b37b5ac377bf8739053bc841a"
  },
  {
    "url": "assets/js/18.6fe2c4ae.js",
    "revision": "23a6bde42ef4f968dff09ac76ec1a119"
  },
  {
    "url": "assets/js/19.34e98049.js",
    "revision": "c38932f55412a74a3951df9f975b79a4"
  },
  {
    "url": "assets/js/2.9bfaae5b.js",
    "revision": "3f74725085c36daf6a26214395b2080b"
  },
  {
    "url": "assets/js/20.20df571f.js",
    "revision": "afdd41905e43847124842e761bb48a76"
  },
  {
    "url": "assets/js/21.7000e07f.js",
    "revision": "4bd304f6fb999e191de0c3c61a90c64d"
  },
  {
    "url": "assets/js/22.c1cc5c1c.js",
    "revision": "f38b2f4ca73468704da3fd2f79d74996"
  },
  {
    "url": "assets/js/23.134010dd.js",
    "revision": "219c1cf0c466caa0dc1e55aef3039d7b"
  },
  {
    "url": "assets/js/24.ad1997f0.js",
    "revision": "c4671d72d0255099adb3194ae9dcc6b1"
  },
  {
    "url": "assets/js/25.0d206b2d.js",
    "revision": "36ec9050cfaaea54a0c494095bfd605d"
  },
  {
    "url": "assets/js/26.6766e260.js",
    "revision": "82a6396c19f6e01976f6b66a5518ae6b"
  },
  {
    "url": "assets/js/27.1809a685.js",
    "revision": "3c78bd4ebfca539698746ea489ee2311"
  },
  {
    "url": "assets/js/28.aec3b771.js",
    "revision": "096083e15435028f1a2d6350a089a9e2"
  },
  {
    "url": "assets/js/29.f268aee6.js",
    "revision": "75f5f4934ed33a38d373f7c4422289ea"
  },
  {
    "url": "assets/js/30.39a9abba.js",
    "revision": "1ccd61e5947243a27a4f51ba2b254765"
  },
  {
    "url": "assets/js/31.327f3b7d.js",
    "revision": "18a9b82fac29be9393b202a903fb7336"
  },
  {
    "url": "assets/js/32.e648b0d7.js",
    "revision": "724d13ea32e59c1735cb7b4e8161fc15"
  },
  {
    "url": "assets/js/33.576c532b.js",
    "revision": "eedc3d2d37e48bc26468f1f6ba973f73"
  },
  {
    "url": "assets/js/34.fe60c1bd.js",
    "revision": "de76aa614ff4d403368a48f7a748eac3"
  },
  {
    "url": "assets/js/35.d35d098d.js",
    "revision": "4218eee61e7dcb7adda70ed8861468a6"
  },
  {
    "url": "assets/js/36.29e66b37.js",
    "revision": "158ad7fa4988ffff8a07fac46042c4ee"
  },
  {
    "url": "assets/js/37.bef43602.js",
    "revision": "2457a1545f00e5b23cd7c5236903a89f"
  },
  {
    "url": "assets/js/38.901701b2.js",
    "revision": "8240670265846eb691b2984b105ec366"
  },
  {
    "url": "assets/js/39.d7b19248.js",
    "revision": "e85758be2c75af507199360980323c63"
  },
  {
    "url": "assets/js/4.902f4aaf.js",
    "revision": "69140a73b0201376e30bd8b2dd54e584"
  },
  {
    "url": "assets/js/40.81ab0192.js",
    "revision": "24b6684efa1d56513bfc6d93a82c770d"
  },
  {
    "url": "assets/js/41.c5ae22c0.js",
    "revision": "5a4d3048a12c9545b2527c29a1e16c26"
  },
  {
    "url": "assets/js/42.01c1869d.js",
    "revision": "bfdcf9cf14871e0c9e8872cfb7557d29"
  },
  {
    "url": "assets/js/43.873dc104.js",
    "revision": "2dd89116d5b4d48b75a088d4f48528dc"
  },
  {
    "url": "assets/js/44.2ce2212e.js",
    "revision": "60a791c1fe7d303503e9ce78f03d7061"
  },
  {
    "url": "assets/js/45.3d60fe9b.js",
    "revision": "7d163aadbd280fa58a4172fefd4124dc"
  },
  {
    "url": "assets/js/46.ad01a6b3.js",
    "revision": "a96f881e8cc7ae47c3f2a7d0056f3074"
  },
  {
    "url": "assets/js/47.82d90094.js",
    "revision": "eb2b3ffaa886d006f47e1c1cfb4ed4d7"
  },
  {
    "url": "assets/js/48.de23a3a3.js",
    "revision": "c4f42bc802e76cb9ada957f90e78597c"
  },
  {
    "url": "assets/js/49.48d12bfa.js",
    "revision": "cef0eec722c775dadc6a7b61638b77b7"
  },
  {
    "url": "assets/js/5.f8fb0b74.js",
    "revision": "dbb95a8a8680f28e02ee06fd0e7eb153"
  },
  {
    "url": "assets/js/50.88f01bb6.js",
    "revision": "cecfc64f82266bf0da6a1e7efd738bf9"
  },
  {
    "url": "assets/js/51.a7e9bb33.js",
    "revision": "49e6a6da114da039ecf623e15e05dda4"
  },
  {
    "url": "assets/js/52.ce9a61cd.js",
    "revision": "7b9f80e21ebb7246e37b6407f1bd6516"
  },
  {
    "url": "assets/js/53.83d234df.js",
    "revision": "d071ff91ad18f8b36b7d059ff1e5ca0c"
  },
  {
    "url": "assets/js/54.a5c3eb2c.js",
    "revision": "eae909980863024c7a33e79f187e72f7"
  },
  {
    "url": "assets/js/55.ea69f01f.js",
    "revision": "751def3420b07efeeea334573fb26176"
  },
  {
    "url": "assets/js/56.184dcdb7.js",
    "revision": "4ae4afa40031680a1bdf82852a462c4f"
  },
  {
    "url": "assets/js/57.3feb9ad4.js",
    "revision": "65292102789642f4ac63ef495a2a8ea4"
  },
  {
    "url": "assets/js/58.9a49e07b.js",
    "revision": "41aa41250f71266331c24b2a725facf7"
  },
  {
    "url": "assets/js/59.14c2152a.js",
    "revision": "701d91985e28e151bf4423243a1770d5"
  },
  {
    "url": "assets/js/6.e1c70db2.js",
    "revision": "cc01fd21a85964a94c1f424bd093e3ce"
  },
  {
    "url": "assets/js/60.177c9dc4.js",
    "revision": "f92c9dce46305d98a84a9900c9eef97d"
  },
  {
    "url": "assets/js/61.84d51d99.js",
    "revision": "0537b853a5b721f9dc8b2e6ee378da5c"
  },
  {
    "url": "assets/js/62.4dbbbf25.js",
    "revision": "fcae1a7ce8207702a77cbf5c53282b08"
  },
  {
    "url": "assets/js/63.4fbb7ec3.js",
    "revision": "a89695dd149861e35f0e27e2994a6279"
  },
  {
    "url": "assets/js/64.bb8067cf.js",
    "revision": "e7a0674f5c8bb39558d4b732d6dac7ba"
  },
  {
    "url": "assets/js/65.ae81c99b.js",
    "revision": "18d9a1b07094dfc7792905a6fea10a3f"
  },
  {
    "url": "assets/js/66.0ab91ed3.js",
    "revision": "3e168174ddc69fd0406bcbaf913a1d7a"
  },
  {
    "url": "assets/js/67.3351b338.js",
    "revision": "63dbe38fec71244412c3c3d3e4eaacea"
  },
  {
    "url": "assets/js/68.22c91fa9.js",
    "revision": "c171e328215889fe7e192ea55b75ccc0"
  },
  {
    "url": "assets/js/69.1f041a64.js",
    "revision": "0662f850b2e0c373ef1dca81272f384d"
  },
  {
    "url": "assets/js/7.a31c5dc2.js",
    "revision": "690109b128f0492bd707c7de313cba04"
  },
  {
    "url": "assets/js/70.01ae6b23.js",
    "revision": "fb1676ef1d78cff62b51a1aed5f5977f"
  },
  {
    "url": "assets/js/71.d5bb44fb.js",
    "revision": "a1d903c260f9b2a52969ccdfa40ec23e"
  },
  {
    "url": "assets/js/72.53a99ffe.js",
    "revision": "5cbe334a202f15a6a61377bbad95cbf2"
  },
  {
    "url": "assets/js/73.d46a8b98.js",
    "revision": "e1fdf4e1ed9c470df43285a46b3f9ac4"
  },
  {
    "url": "assets/js/74.50c71c50.js",
    "revision": "8e7d60ba72f51cf20b14e461fabce367"
  },
  {
    "url": "assets/js/75.0250ddc4.js",
    "revision": "b5b519e779cdc3b768cd78b57bc72cad"
  },
  {
    "url": "assets/js/76.9f0cb8b4.js",
    "revision": "0379f9169e743cd71ef19c7de4aa7101"
  },
  {
    "url": "assets/js/77.540c5faf.js",
    "revision": "4124396e0291a16816a8a808a842014f"
  },
  {
    "url": "assets/js/78.158a706b.js",
    "revision": "018828594bcbab6425182c428de524d1"
  },
  {
    "url": "assets/js/79.8b4cfa1b.js",
    "revision": "d36a531ae03bb6f214ece70664b102ce"
  },
  {
    "url": "assets/js/8.9c9751c3.js",
    "revision": "60ec7d8172b600fb524c2f0efe1319af"
  },
  {
    "url": "assets/js/80.13a294cc.js",
    "revision": "fc340c8b88f4c296a0005e667d32bf82"
  },
  {
    "url": "assets/js/81.f2106171.js",
    "revision": "3872376d7fa4112385ac7ff3969d1e65"
  },
  {
    "url": "assets/js/82.66eb1075.js",
    "revision": "b7d1bc623244db774a838e06ad90e1e1"
  },
  {
    "url": "assets/js/9.0be1933f.js",
    "revision": "f01fdfe43a78aeabc3a4623c36dbc143"
  },
  {
    "url": "assets/js/app.86276a0a.js",
    "revision": "737610e49df14458056aebecff616f5f"
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
    "revision": "7399d2f80fbc1264bb85a7c04aa84ae1"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "618761f6f3ac9a6c8fc807f961358a9f"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "1dc7f441bdc8f0998d082d826e6423e8"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "66dc8e3521a07e6035e4fdd4b1a0a764"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "e971164eaaf218352b76e4d90289bdba"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "860df036f4c3cf64e904feb7c41e4bb5"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "7bf03565b9ee8d3f66c5f3f439fb47d2"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "36e276e73debbd1acce9cf0280805ae6"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "e0f72c865576be5d97df537a0c679640"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "50839965b59a7ce968d49fd281df0f5c"
  },
  {
    "url": "courses/index.html",
    "revision": "47d55beb9d168c825d99fb3f72eb8a57"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "53ae5e94441793bb9e541b0661c0532c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "059afb14cc2fe99706ec8b3181e9bae2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "075c89898d6e35640292d47b723ab04e"
  },
  {
    "url": "courses/template/index.html",
    "revision": "63c327cfb63a4af753e438388079b3ce"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f5e4e1fb527addd287be7959ab88a306"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "8b5b6fbc1a1f9f6b8ab283e16117d047"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1f695a1c88a737aaad605258ef8b0514"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "c9988bbb63a81eada6f855bb42270585"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "f85d90ed61604c939203aafcec15de1e"
  },
  {
    "url": "index.html",
    "revision": "61a8c8610b63ecd11c57b0f067138234"
  },
  {
    "url": "studyathome/about.html",
    "revision": "fae5d775dbd01879f57f8270e229343f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "d337ae811eca91cde17759e85e7c32f3"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "70ea0d1f96877b6a8fe698bd72497636"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "82f4c27831899b792e9abceba4b43ceb"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "ff60e30c96dc47f3147f1819e68add05"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "902d5b6be18ee01e2e07586576edf7a9"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "dbfb5fae6ca0be9b04ccb9e2ccbc0c88"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "f5ba943518bcc6e5bcba66c604af6de2"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "1c59d47035ecf08063b5b9bf39bdd5ee"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "3ff14f252a79423946274237289004ee"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "ce2be49a6aa3af4034b9ef6e8180b839"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "8def872d54a82f7bd74098261f57efb4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "c7781a58ac2639795aed35b0b5bcccad"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "887ef3d3ff72039f101f49ac66bdab1c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "b420989beaeac79eb75109e842d2d4d6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "ab4192f8c2d85955abb42814651ded16"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "6f805c0e37f75e815036a83c28e78722"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "e1cf92651c8019319976529f45562878"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "12f873df5e0e86544990307e5582d920"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "cf19b6cd1b518f10a59131ec752b3220"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "ffb8a61e56143cc9897dbeb3d92c734d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "42b519d82b3c995c152fbffe815d5881"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "50a966f68dbb8ca8871685419233d1ae"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "f1ec92e4f3944f984f506d2d3f024bc2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "c2e41e614675439d2822811fae3cb654"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "86fb6a5b301a95fe85098a8766d10c21"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "fa9003c2a95867ef7a7bca04358fc73c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "8e2fa25c145b481cdd93deb2f81a7ce7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "3b0a2e8808eced38783dd288716a5b21"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "4e42bf09a63c9d52858923d3406cbea2"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "f687d99e010fddcc33cc728fe5227398"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "822d8d4e719ff9d58c12b4f842c08f00"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "a6c8baee6814592f630e8da938932d06"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "4d7ce39ca2cb5e27389f133cc6f255a9"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "1b65ecfb15cc27c5950c7ae8bc28ad17"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "2ce9a99663f4b15dd194ddf9b2f8ea7a"
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
