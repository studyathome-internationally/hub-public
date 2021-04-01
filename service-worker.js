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
    "revision": "5d6eb950a468ed593b41ca7949745472"
  },
  {
    "url": "assets/css/0.styles.50efd945.css",
    "revision": "2340b9336613fe9d711d1f4d66991a59"
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
    "url": "assets/js/1.858e9c8a.js",
    "revision": "b0d51d4293a1f211ed84e473b4793c7d"
  },
  {
    "url": "assets/js/10.19417b38.js",
    "revision": "b9fc57e026ccff7cc3f1d307108ba448"
  },
  {
    "url": "assets/js/11.a6d6d81c.js",
    "revision": "762f0f89a1e61de0ebd17d5925cdd2f1"
  },
  {
    "url": "assets/js/12.1dc915c8.js",
    "revision": "bd73095f6606b39e09d61ada901cf4e4"
  },
  {
    "url": "assets/js/13.d4bda0c1.js",
    "revision": "3d88f6c8214e90bc6a8e5f94e85a5442"
  },
  {
    "url": "assets/js/14.d8778e11.js",
    "revision": "076b7117f8a5494f46bbcc8b770b76f0"
  },
  {
    "url": "assets/js/15.211c3e59.js",
    "revision": "0690b21e5b55b6073ac839e09f87eeca"
  },
  {
    "url": "assets/js/16.8c2f2500.js",
    "revision": "66d785df6b0a8b3e57e3904b2f127eed"
  },
  {
    "url": "assets/js/17.a11aac09.js",
    "revision": "6b31727f6cc379b162ebb6ae456e73ae"
  },
  {
    "url": "assets/js/18.fba7cc33.js",
    "revision": "65657a198a389c98ebc1b07cfe8f20c9"
  },
  {
    "url": "assets/js/19.df8ddd2c.js",
    "revision": "7cc3351f4c27aab9f2bf3a5b56bfe4f8"
  },
  {
    "url": "assets/js/2.b69b3790.js",
    "revision": "07ed8024ba1d9e24ba8b07566053a629"
  },
  {
    "url": "assets/js/20.f8454476.js",
    "revision": "d490cf9a8318cdd48867e811134fa1b5"
  },
  {
    "url": "assets/js/21.80549196.js",
    "revision": "d3018fb4a15abab436f615d7ef10214b"
  },
  {
    "url": "assets/js/22.6cdd9b7a.js",
    "revision": "b05ab336686e07fe8860e1364f9b1cae"
  },
  {
    "url": "assets/js/23.23fa0a85.js",
    "revision": "4b9d74344a9f8717ed77c27c34420d95"
  },
  {
    "url": "assets/js/24.cef03816.js",
    "revision": "f0e7d7ad5511e607d8e51fff373b14db"
  },
  {
    "url": "assets/js/25.83320278.js",
    "revision": "126127f0323fece3ca48b6f53975176b"
  },
  {
    "url": "assets/js/26.49f9238c.js",
    "revision": "db02398d2a491454ceab489de07c6617"
  },
  {
    "url": "assets/js/27.8e472cec.js",
    "revision": "65324b273d653fdafe903a50933c373c"
  },
  {
    "url": "assets/js/28.994a6e37.js",
    "revision": "2d2696bffcc7f0f622d9c9d1bc49b6af"
  },
  {
    "url": "assets/js/29.9194e86e.js",
    "revision": "c00733d3eb063c57ed07caade89076c6"
  },
  {
    "url": "assets/js/30.825e31b3.js",
    "revision": "2d16385bd7ac5dad1fe2aecaba8ee48c"
  },
  {
    "url": "assets/js/31.cb7da769.js",
    "revision": "17196345b8a0da5ba4f46d06add182c3"
  },
  {
    "url": "assets/js/32.aae43679.js",
    "revision": "e948ced16856b54242aef9b975a4fbd9"
  },
  {
    "url": "assets/js/33.2cf96a99.js",
    "revision": "6903f58ad4fa8491c357277d6c027de7"
  },
  {
    "url": "assets/js/34.4be1c84d.js",
    "revision": "21973fecdac068e4026f68239db07790"
  },
  {
    "url": "assets/js/35.0e99ce22.js",
    "revision": "e51f61ec9b37cfd2c0be803739ec7b11"
  },
  {
    "url": "assets/js/36.14aa9b51.js",
    "revision": "b83d8b2c3bae2402396a1d07372aa154"
  },
  {
    "url": "assets/js/37.db482a0d.js",
    "revision": "60c2872b65519f8ebda50aab1fe5aea1"
  },
  {
    "url": "assets/js/38.e1c9fb6e.js",
    "revision": "a801f022c7e5840958eb6f2daf3bb897"
  },
  {
    "url": "assets/js/39.c82ed8f3.js",
    "revision": "048ddf747205c5d88ae1ad35c63d147c"
  },
  {
    "url": "assets/js/4.e5ed4f09.js",
    "revision": "1effcc02da5b99bf9c373361270c89b3"
  },
  {
    "url": "assets/js/40.a3bfcac7.js",
    "revision": "4ec8e1031e95c3f5343fa0dceca3644d"
  },
  {
    "url": "assets/js/41.48001487.js",
    "revision": "cedb5d50cac4abfd900357a428ec9028"
  },
  {
    "url": "assets/js/42.3b707996.js",
    "revision": "57c17e5e7d2823170548563e7eca4d15"
  },
  {
    "url": "assets/js/43.eeb41996.js",
    "revision": "186d10f506aa32edaa4f67c1cbc5bdae"
  },
  {
    "url": "assets/js/44.c56d6ca5.js",
    "revision": "f71f5caf13a58b542a75c2c92776702b"
  },
  {
    "url": "assets/js/45.26603e45.js",
    "revision": "cd027254ce40862d1d9d78d625d7073f"
  },
  {
    "url": "assets/js/46.ccb03a9c.js",
    "revision": "ec84722e76819dcdd6882553fbafb2bd"
  },
  {
    "url": "assets/js/47.2784e249.js",
    "revision": "3e3f307921c5afe29612bf706c7e463b"
  },
  {
    "url": "assets/js/48.ec840f55.js",
    "revision": "e923affbdfb6a1cb28cdeba59a958169"
  },
  {
    "url": "assets/js/49.ce132a68.js",
    "revision": "4a64cf08556e344f2bc030efd6313077"
  },
  {
    "url": "assets/js/5.187eee98.js",
    "revision": "81c883636d11682bf4d34c6bc6371e38"
  },
  {
    "url": "assets/js/50.ded955cc.js",
    "revision": "f10f6da0ccc6664eb2f76577cd28aa42"
  },
  {
    "url": "assets/js/51.1478619b.js",
    "revision": "4fc72a5a3b4a895664e573013caf0116"
  },
  {
    "url": "assets/js/52.a11d3b33.js",
    "revision": "f18f0832ed063dcbf61b2fab34350a9c"
  },
  {
    "url": "assets/js/53.e528b301.js",
    "revision": "601a3a71bba14a4e0e72f6b785276898"
  },
  {
    "url": "assets/js/54.8e9803d7.js",
    "revision": "45d3fe5813d28ebd2e9a64698cd5d4cb"
  },
  {
    "url": "assets/js/55.1c016829.js",
    "revision": "cbf5f1307f5d0e63c207b278f97dae61"
  },
  {
    "url": "assets/js/56.d5621983.js",
    "revision": "6902b02574e277e5ea9e7b9769bd4ee7"
  },
  {
    "url": "assets/js/57.8e15b338.js",
    "revision": "35c56bb15aa904d73a5721d9a11478a9"
  },
  {
    "url": "assets/js/58.eb012e46.js",
    "revision": "773130bf14d3bc62f4d9aff56172142a"
  },
  {
    "url": "assets/js/59.ecdb72d2.js",
    "revision": "c9abf5650f5ed8142c11dd74fd6fe3ea"
  },
  {
    "url": "assets/js/6.e506847f.js",
    "revision": "e0b0ce18cb6062a320f7cf603ea6c108"
  },
  {
    "url": "assets/js/60.e8f18503.js",
    "revision": "aab1796e6d97b7b41587d6f7c04aad86"
  },
  {
    "url": "assets/js/61.b0c559b8.js",
    "revision": "dc43ab02d119291927a6b15c0f5fa13a"
  },
  {
    "url": "assets/js/62.5bd2fa5a.js",
    "revision": "da3012c74de757d4063bcde393410d43"
  },
  {
    "url": "assets/js/63.4f7c6eba.js",
    "revision": "2402a8dbca4e87299108ba3a56d8453f"
  },
  {
    "url": "assets/js/64.70807bfa.js",
    "revision": "3951b9170764f22e1092192c21694d1e"
  },
  {
    "url": "assets/js/65.fc005f4e.js",
    "revision": "85fedb08e4e9f71663722abeeacb6d00"
  },
  {
    "url": "assets/js/66.4ffb3669.js",
    "revision": "f78bad9f1edbb04e1ef68a54811599b3"
  },
  {
    "url": "assets/js/67.f74d7c83.js",
    "revision": "d4bb04f8d1b590172c078cc6ba20679e"
  },
  {
    "url": "assets/js/68.f0d37759.js",
    "revision": "8c15a682a3dedd9d497b358169608ad9"
  },
  {
    "url": "assets/js/69.621fa259.js",
    "revision": "4b96a7ec989fe54d095b95b1a1fbc0d7"
  },
  {
    "url": "assets/js/7.c1712218.js",
    "revision": "f1195d41581be41620e723043db71757"
  },
  {
    "url": "assets/js/70.af84a647.js",
    "revision": "b66029891cdfbf10142b7f71fde74cd9"
  },
  {
    "url": "assets/js/71.2d34c4c3.js",
    "revision": "643ac07233ead30f3e9753c7ba2f4674"
  },
  {
    "url": "assets/js/72.9707c23e.js",
    "revision": "2dfc0ee8564124636b11b463d989059a"
  },
  {
    "url": "assets/js/73.6847f7e7.js",
    "revision": "2779333465ca280109bccfe04b33cc5d"
  },
  {
    "url": "assets/js/74.8a217362.js",
    "revision": "eec3f539a2790b0bd36bcdbf058b2c76"
  },
  {
    "url": "assets/js/75.c888a64c.js",
    "revision": "170cbb30487a2a4ce9a2a14991036036"
  },
  {
    "url": "assets/js/76.672daf0c.js",
    "revision": "54381f88ef6e654993df0bad07c34f33"
  },
  {
    "url": "assets/js/77.427377ad.js",
    "revision": "68c55b6f9e2fb22030cb0ac03e269f13"
  },
  {
    "url": "assets/js/78.21ebd7ee.js",
    "revision": "1ddf7315e2d682462511538e7a858149"
  },
  {
    "url": "assets/js/79.7816efa8.js",
    "revision": "4ec822340050e735cfa475bec71b089a"
  },
  {
    "url": "assets/js/8.9c9751c3.js",
    "revision": "60ec7d8172b600fb524c2f0efe1319af"
  },
  {
    "url": "assets/js/80.ea36e6f4.js",
    "revision": "2213d36b1748377141c0eb84947115b3"
  },
  {
    "url": "assets/js/81.764c0d27.js",
    "revision": "8a439bccdd4c80648370c45a9375019b"
  },
  {
    "url": "assets/js/9.bfcfa6f3.js",
    "revision": "2543aab5a79f1244a6be477d00e417f6"
  },
  {
    "url": "assets/js/app.d19a6741.js",
    "revision": "e82692ac1b95dd6323c09a53ae52c9a1"
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
    "revision": "92b30014bb9244297bc4f3c631ceda6f"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "d8abefb6d7905e1acaadb4599f88e33a"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "659bfa49550a61ca826315a73978f5f3"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "970ce8707c16ec20d458e065996de7d8"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "4f7a8f0fe157c786da0d4274eec38645"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e46a4b42e4b960577be56a116380bf35"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "bda8bc0a48c1b6c25b236191ea9a19ec"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "382780ca4ff9ef7917cb37c5d1383842"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "4d1bf776cd75cca59398a3b8470ac722"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "da03dc190fa5c8b972b8fcdc11005ac9"
  },
  {
    "url": "courses/index.html",
    "revision": "3b8d9cb21766ef684c83ffb7d9a0029e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1a36add04218e3ddf63f3e7ad1134186"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "81f10d8e71e230f80f1d4fd7cd2e5471"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d9f86a5bdc270e632d9c13bab20cd324"
  },
  {
    "url": "courses/template/index.html",
    "revision": "0e913eab5e05e81474997c2746c152d7"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "9ecd934ffd97db4222531efabeeb44c3"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d0ab4294a2c0193191e708d875848084"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "d021faa12f5ce4a6739bc0a85db3da37"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "c471c186e775840af029f428fb8f2a94"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "1a3127a01ba5f71929156c03183579be"
  },
  {
    "url": "index.html",
    "revision": "874c1116d509572ed27243faed43f3f3"
  },
  {
    "url": "studyathome/about.html",
    "revision": "cfd0f855b36ad56c99b71b6f26264899"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2d649efbba7a5bd5ffe6e25744a24c9e"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "77c1965b71f7294e78603c90346f7a91"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2c6bc0173fbc0f1d102c00048f92ba04"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "5d6eb950a468ed593b41ca7949745472"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "39106dfd17a8b2c2cfa74245eb17cefb"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "c054b5e5e5c3d7ff58cc007cb07a22cb"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "c8bb79bf9af7257f32bd3752072705c0"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "62249025db6bd4e49f1a4fe486cd2b91"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "5d6eb950a468ed593b41ca7949745472"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "01728c44504a8789dd526858cc35c513"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "83c63037bb7e1c7fff53b5b2659f3b72"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "07b56cffe833fe0f3867228201bb6f46"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "591056118f809e7d6096c136f024098d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "ea6b991321d8da17969cd1c69877e190"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "2af7e159d0f78f51121437835e8993b1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "63c05e76515f26acd68089c63d2502d4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "22dd2ac4caa45309da9b6ca129a68174"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "dd358511e8d37f46948e46c5e2f7f0bb"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "5d6eb950a468ed593b41ca7949745472"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "c40940907bf0a7b4b3af8a11165ae1cb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "0d21f91ae601d0b280b3b9f4d41b50a8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "7dda1ed5812b6240f94a98cc09e49276"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "b2826f146b6f841f807d5df4997e5fc8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "ecb6bede5468e655c0937fcd4ca590bd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "235a151da199d67f394a40b67f6bed31"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "f6bdd3099d7589ebe087ddab3edcab37"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "c0b1adbc759a4210cfcbbcc2d483d3fc"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "07edfe4af2419da81dc21b0be0dfd88e"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "5d6eb950a468ed593b41ca7949745472"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "f0e6e518add1f9ae815d1d5ed24c29ac"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "1afcddf9d062491a5e9e58ba1ede53f2"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "63febe9fd7c1581262d5a155e12630da"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "d32681306741769764664bca7263d6c2"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "7b6573b4211d2f35145f813739f416d8"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "d45f7293e8de08b8bfaa322239744598"
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
