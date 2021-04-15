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
    "revision": "3867c94010516417c9756e300bf6638c"
  },
  {
    "url": "assets/css/0.styles.0febfb01.css",
    "revision": "05336aa862b7e5df31548b64b871b153"
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
    "url": "assets/js/1.7b90dd97.js",
    "revision": "07df81053458bcc45b52b9fd67eb9009"
  },
  {
    "url": "assets/js/10.19417b38.js",
    "revision": "b9fc57e026ccff7cc3f1d307108ba448"
  },
  {
    "url": "assets/js/11.a77721ce.js",
    "revision": "89f4d5b08776d2b391de2340e0dda5b7"
  },
  {
    "url": "assets/js/12.1dc915c8.js",
    "revision": "bd73095f6606b39e09d61ada901cf4e4"
  },
  {
    "url": "assets/js/13.6c49f19b.js",
    "revision": "7dd39b0b5a000caa8d08b3c85a08781d"
  },
  {
    "url": "assets/js/14.327357f4.js",
    "revision": "207c93f51a8af1f28ffb06f9f8ed1cdc"
  },
  {
    "url": "assets/js/15.915bb95e.js",
    "revision": "6474b32f936585101cdc410ff8f06716"
  },
  {
    "url": "assets/js/16.7f09225e.js",
    "revision": "8d621abe74a233e10116c8ccfb7e6c5c"
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
    "url": "assets/js/2.431b2500.js",
    "revision": "1f81df18bbbd5b11470ce57c08d1fbc7"
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
    "url": "assets/js/27.215a3854.js",
    "revision": "8a4fed82176b65cc6c626fd4144ea47b"
  },
  {
    "url": "assets/js/28.dbfaa8e3.js",
    "revision": "90e3844bce581051c0947ccd25ac2f7f"
  },
  {
    "url": "assets/js/29.9194e86e.js",
    "revision": "c00733d3eb063c57ed07caade89076c6"
  },
  {
    "url": "assets/js/30.1d32491f.js",
    "revision": "22810f46c8b84bfb4a16d4812d7d67eb"
  },
  {
    "url": "assets/js/31.811ead19.js",
    "revision": "21b6eb735ec1787a8f1bd3e8413c9e80"
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
    "url": "assets/js/4.ae63bc71.js",
    "revision": "f315be8628cd83d661ba93e17dc6a655"
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
    "url": "assets/js/43.e1fa9ac8.js",
    "revision": "85490668a462ad3d106a752068ea7cf4"
  },
  {
    "url": "assets/js/44.c56d6ca5.js",
    "revision": "f71f5caf13a58b542a75c2c92776702b"
  },
  {
    "url": "assets/js/45.ba72f95b.js",
    "revision": "8339a62398a15268b21445e775510e61"
  },
  {
    "url": "assets/js/46.2b647a77.js",
    "revision": "a429add98d36c403d360062140a4da8c"
  },
  {
    "url": "assets/js/47.1693d996.js",
    "revision": "28afaed1caaff09207ea5e0054988e14"
  },
  {
    "url": "assets/js/48.b8d977ca.js",
    "revision": "541f26d27298bc2a3631327b1509269b"
  },
  {
    "url": "assets/js/49.d46988de.js",
    "revision": "ba94a708fc81beccb5d15c18137229c4"
  },
  {
    "url": "assets/js/5.0d2c8abb.js",
    "revision": "49231bc1ea54283459732ff1d03b4c6a"
  },
  {
    "url": "assets/js/50.c24da006.js",
    "revision": "e153641017dbff85e1275cd7926ff5b5"
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
    "url": "assets/js/6.b2bc5e9e.js",
    "revision": "5e37093c9b8c1f73bf47986905ff102a"
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
    "url": "assets/js/7.b61be2b4.js",
    "revision": "3039148cdfeb4eed128dd8a796ac79c1"
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
    "url": "assets/js/72.7655c415.js",
    "revision": "94390fe1b02899257fdf3a3768814456"
  },
  {
    "url": "assets/js/73.89bac3a6.js",
    "revision": "b6490517d03c9e81d45e785680b6dd3a"
  },
  {
    "url": "assets/js/74.8a217362.js",
    "revision": "eec3f539a2790b0bd36bcdbf058b2c76"
  },
  {
    "url": "assets/js/75.7d3a4218.js",
    "revision": "0745ffc99da01f127506c652daad1507"
  },
  {
    "url": "assets/js/76.87b11115.js",
    "revision": "20887c61bfa502781f931e52cc391153"
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
    "url": "assets/js/app.b9976ffc.js",
    "revision": "15e17098c4f3437b35ed2613bb7d3008"
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
    "revision": "541f27feb7038ed87226c657bd6fd795"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "e10a5b4c8780f3c645b3c2d89f9d2dd4"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "063c264c4ce60f399c6121b010510f19"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "8d13da71db6e166af21c21435ba37498"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "b6d90bb7b4407c91090f9701bb4de99c"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "f424e187c11679719ca893089bf53ec3"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "9354b71ff922bae1f80889126cae88cf"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "e1022fe959fb68f3adbb7fd7e536e5cf"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "ae45752e056ddd1e60e3535e7e91c997"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "96e2f3cf1781f1ff5e15b6f02a61619e"
  },
  {
    "url": "courses/index.html",
    "revision": "5e198fe3ea7c157391174e24392a9f71"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "6ade8d4b0b571e97d5f344ade8f2c3c4"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "398931d3ad4bff7a10d200a0bc8c35b1"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "7fe03c6b3ceb3968891573b5e306e6c1"
  },
  {
    "url": "courses/template/index.html",
    "revision": "1a8151a8f5fb14a4e39886e6445a03ec"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "4d5f58c02d54b7e790d23644c0569c5d"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "0892d7a47da2932256bec102e631cc87"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "a453e07b860e31a9d6f2cd73e5c2431e"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "d0c9989ece1fce9a7a5aa98500958388"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "4ae7ee4e144237567b6d8dfc923417bf"
  },
  {
    "url": "index.html",
    "revision": "cb79315cb8b2d44f55333140d605dc8a"
  },
  {
    "url": "studyathome/about.html",
    "revision": "506c6a4cfc4fdb3fe11b762459de101d"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "9957a06425f75b06446b4676e537855f"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "dae8703d3e51f40cd6f411114c30a286"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "30fff2d0b1a3b3770d7cca496073b083"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "bc377d3688e5a4d4dddeb22f1d2ff2f5"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "f5459d54f07d6c7e4b3439f03bc96809"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "6c63bcb39f042708685bc223f4e5fc49"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "4bac6b106838c8df1f4f84b657f3a61c"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "36d1bd3c82b0f4d4e7dd5c14f72b10bd"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "9e6d79967b05e5b916ffccb29965f063"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "7eddeac7263b8e876f66c08be95746de"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "ab916c2daad78e7fb78503682e821640"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "26ef299a00a0a41879bcc193ab6d6a2c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "066c3d23b02394025178304ff7aed8d5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "54fe8fbac5dbe3be2113e621b5b4e029"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "5e38387d531153bfe34f4812badf6444"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "bb9078ac8722eee3ad2392648ae1866c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "b911507b6bc2c6c95f933fe355e26279"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "ae5e87e58c9b267fd5bda46bc1a1dc3c"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "3867c94010516417c9756e300bf6638c"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "cbdb6b76a16bf2af8912125954cae408"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "ff673b656cc5566363d8108001d5cb4a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "0b9306923a041404cdbfe9a1db9f9693"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "283efca480e7ae16838cc37e59c66738"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "96355adad7ccc7cb7c5474e3eb35f85d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "8f7e69d9c2b8da6630ecb115e2fac7ea"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "f8f7868ff2d4b7b530309003b96eeaf3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "a3ed54ca12191b1fc2f43faf85320557"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "9aef0648836363361dda719d8c7f7b9b"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "bc377d3688e5a4d4dddeb22f1d2ff2f5"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "60febee9ca95bc6541d94c68bc2356a9"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "84b8c3a266de71eb0d694dd14db6df79"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "ffe87c7d65c02ad79e338aa0f423fe06"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "535d42c9d7d05b90bb3a0429c7cc6b5b"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "1aca46681527fb9917a12bb7b91eb174"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "506ad412f075d64188dedd787e063dce"
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
