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
    "revision": "d7a6525b37cbe684f945688181400a9d"
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
    "url": "assets/js/16.ae72b41b.js",
    "revision": "13177135aef260fa30affd4dc43497bd"
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
    "url": "assets/js/27.cb2ab36d.js",
    "revision": "88681ed2631ec24ac5c797e3c1960820"
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
    "url": "assets/js/32.326f2a2b.js",
    "revision": "47db01e497ca6af0f8c13be6713dc2f5"
  },
  {
    "url": "assets/js/33.5b60a251.js",
    "revision": "90603d76cde3694ef03b9f300f4da8f8"
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
    "url": "assets/js/40.d03a6c87.js",
    "revision": "0329ccf77ee9212219bdd74f92c9e47f"
  },
  {
    "url": "assets/js/41.84d51086.js",
    "revision": "354484f0ab0bcc6f1f8e1ca5a153986c"
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
    "url": "assets/js/44.900521c1.js",
    "revision": "3c2e968f3939d3a0e5d3a27b180fe590"
  },
  {
    "url": "assets/js/45.0a6a66b8.js",
    "revision": "4875e4a1c2d8a270b388826461f69ccc"
  },
  {
    "url": "assets/js/46.9ddbb47a.js",
    "revision": "e904a90ead044e6739ac7b10d7ccb584"
  },
  {
    "url": "assets/js/47.1693d996.js",
    "revision": "28afaed1caaff09207ea5e0054988e14"
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
    "url": "assets/js/50.85179b4d.js",
    "revision": "7c94dc550e33c505741afbb4ed116abf"
  },
  {
    "url": "assets/js/51.94b3b732.js",
    "revision": "68968519bad7bd75ab0fd38526eab3c7"
  },
  {
    "url": "assets/js/52.e6897631.js",
    "revision": "ba88d4bf409afed8c053aa3385f88b48"
  },
  {
    "url": "assets/js/53.1c07e87e.js",
    "revision": "35745e60c18ff869c1b3e4563fbb69af"
  },
  {
    "url": "assets/js/54.b6342025.js",
    "revision": "34c48c49df4ad4e9feff3365e6571830"
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
    "url": "assets/js/57.ce5fdf1f.js",
    "revision": "d30b05ed49cacd61dccb9e4e992aef2f"
  },
  {
    "url": "assets/js/58.eb106565.js",
    "revision": "badaf1dfff0f6ed94b99da04bf5e7912"
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
    "url": "assets/js/61.8fcd65f2.js",
    "revision": "e73b926f1a2934405259013a403efd68"
  },
  {
    "url": "assets/js/62.99c83902.js",
    "revision": "aaf946b896191300b7018fb093afc47b"
  },
  {
    "url": "assets/js/63.92659fcf.js",
    "revision": "060ccd4ccba015714c2bf29ca2988039"
  },
  {
    "url": "assets/js/64.3de33148.js",
    "revision": "2e7df0a824a5d9638743a8c5feef4fbb"
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
    "url": "assets/js/67.5e40e659.js",
    "revision": "d7b20e9888eea6d0e59a135f307f49de"
  },
  {
    "url": "assets/js/68.5184550d.js",
    "revision": "05f9a023567cdd5353ffacfcc4cdcda4"
  },
  {
    "url": "assets/js/69.8fbfb0d8.js",
    "revision": "f3b26577351108351985464f10cb38d6"
  },
  {
    "url": "assets/js/7.c1712218.js",
    "revision": "f1195d41581be41620e723043db71757"
  },
  {
    "url": "assets/js/70.0f3de4cd.js",
    "revision": "75d02ccf43329dfa01935e7efade05c0"
  },
  {
    "url": "assets/js/71.2d34c4c3.js",
    "revision": "643ac07233ead30f3e9753c7ba2f4674"
  },
  {
    "url": "assets/js/72.b1d1a915.js",
    "revision": "01f57307edbdb951c445621459f24f01"
  },
  {
    "url": "assets/js/73.89bac3a6.js",
    "revision": "b6490517d03c9e81d45e785680b6dd3a"
  },
  {
    "url": "assets/js/74.2d019b0f.js",
    "revision": "ac2e83680ed2721c4c78248500d48476"
  },
  {
    "url": "assets/js/75.7d3a4218.js",
    "revision": "0745ffc99da01f127506c652daad1507"
  },
  {
    "url": "assets/js/76.41322b85.js",
    "revision": "2e6d9cfb0cc86dd5eb7e4e5b428433dd"
  },
  {
    "url": "assets/js/77.87cfc565.js",
    "revision": "0c4c89fb0f91f39082bcffb4d40c0ff2"
  },
  {
    "url": "assets/js/78.d842378b.js",
    "revision": "8aec167a2d04919878404bd000f52b31"
  },
  {
    "url": "assets/js/79.c008d4ae.js",
    "revision": "cd950b857eefd68b9ddda50824d476c7"
  },
  {
    "url": "assets/js/8.9c9751c3.js",
    "revision": "60ec7d8172b600fb524c2f0efe1319af"
  },
  {
    "url": "assets/js/80.f7efeb6d.js",
    "revision": "5a2f5d6fc2bb88d7fe02ab3b50341602"
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
    "url": "assets/js/app.12b6bacb.js",
    "revision": "5d494d5a046fac5a29e10504b5111950"
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
    "revision": "eab4d4eeeecc4c453d830284a185740d"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "1f6412ea06ea713ebbcd296f0d7e0274"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "f50ef35a17fcb41e1f7bf0ed61c8c5f0"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "6e61df2435a152cbe99da0516d1974a6"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "7a3fd2a44f7bb225b883ca55d2fb17e4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "428a8f73335ef38da090bd42c7ae88b1"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "cd635149f1519cb0454a2aee36ef1a82"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2ffd6561376f147006155767f0dcdad9"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "6f2ebbc48f3576260e11093ca180a957"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "929f19b7f6157ba59f5fbeab1ce11497"
  },
  {
    "url": "courses/index.html",
    "revision": "04135e221ebccb045cd90a0b0b0e7a5b"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "cc4acb263ddbfe86cbb580762cc931c3"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "c8fab0d8c02c1123fbe4bf27437373fe"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "2d019b4ce674c455cbdcf273bea969cf"
  },
  {
    "url": "courses/template/index.html",
    "revision": "c4fbb63b69b683859fb09130e98db2dd"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c895e9183ce85541613efce05664ab03"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "334817daee3f7c75557045a238d5c1af"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "3215ddd233b767d8146799cddd2860b9"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "b9409967de70624e3278c71886e08013"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "05556db970de69cd63fbbfafd17165ec"
  },
  {
    "url": "index.html",
    "revision": "4d3efb0078b19a588d2e7aff05396b51"
  },
  {
    "url": "studyathome/about.html",
    "revision": "bd02c2c48746090112a9346e003a8696"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "443b6735b015b3e343123660bc23140d"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "c8b1547706320b896360b06ab7e97cac"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "75b5e323ae4ca191ef735a58c8d18bb2"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "d7a6525b37cbe684f945688181400a9d"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "cedc9843be56b01fc2143f8352c5a24a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "161209a36ae12ebd6c44102370abdac3"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "1f82bf85bd042930854204665ed5a7e5"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d220c400b48470d71356e75b527b15c8"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "72ae04cf6406f0b0a062598c4ac7f3b8"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "c146ca44d19c3d539eeec8d09a3102da"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "99905b952ff9f624c1a1fa3f970c342c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "637287d79edc07a4108be294a510d4de"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "98f5837a7e4febf8c8ba631ce7422f7d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "baa4618f1c449a44f87609fbc5288341"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "6cf39fad58024529dabb67ffd948fa5c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "4b7af1f29e1edc69fd5aa874c65e6040"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "9997b1690ef4f09c17a4ebe326f28717"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "bd0ec55def9601c0abfbfdf5207a0acd"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "d7a6525b37cbe684f945688181400a9d"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b7eb8fa26dbccb41eaf7f1ee65681984"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "cabcc803f77940d22b5f5470ff324430"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "7cb7833b20cc61486aecaddc168da27a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "31f49c4884e92fc47b2d4a0be96981f1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "543ee00f6327903ac1bcf2ff3b179f00"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "b0a530d483417f4cee7985107e05233e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "287418e11c69ea75d9cb8a41100f0455"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "0172657cb2a0a67739b326e03519a2df"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "1b67596553ee6d83ddf73236194b4e22"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "72ae04cf6406f0b0a062598c4ac7f3b8"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "f5d9eb20716629b3ea633cd983e7d7ce"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "062744ebc970504e98d7e8cf5abcec23"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "98e2da3c5dd47b7648fd21b2d0a59294"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "42ee9dcaa77d2cee5a74f30207ed6c5e"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "2374c488cda0c57fa8c0a189ab0ea05f"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "60261de90989d9a46ec7d5164ff7fbba"
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
