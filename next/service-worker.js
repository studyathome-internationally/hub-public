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
    "revision": "f5885ec56048a16145dc9b0a01785597"
  },
  {
    "url": "assets/css/0.styles.99f38067.css",
    "revision": "be9344ad9c1b11a680ef9a62faf413c5"
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
    "url": "assets/img/logos/CV_MA23-orbit1_pos_web.png",
    "revision": "7c4bada1929ac5d3868dc7f4dd2709dd"
  },
  {
    "url": "assets/img/logos/CV_MA23-orbit1_pos_web.svg",
    "revision": "9a3aa5fea8181a51c9a4480d76fb9b67"
  },
  {
    "url": "assets/img/logos/FH_Technikum_Wien_logo.png",
    "revision": "6b684983902d736130300e319398bb9e"
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
    "url": "assets/img/logos/studyathome-noir.png",
    "revision": "53251ffb2ce8d8db176b44451cabc9bf"
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
    "url": "assets/js/1.92ae34ae.js",
    "revision": "1c25c75d7a9c35563dfdb9bdd8ec85aa"
  },
  {
    "url": "assets/js/10.29087ad2.js",
    "revision": "b0cc245743c70d0cc2e983479753e30e"
  },
  {
    "url": "assets/js/11.eba8a401.js",
    "revision": "cb76e497447603717496c1e3f1ede604"
  },
  {
    "url": "assets/js/12.215dca0c.js",
    "revision": "6bff37e27939bc901a9f2d097cd01dff"
  },
  {
    "url": "assets/js/13.6aaf0dcf.js",
    "revision": "b057ae3c8c44b8a01c5051c581b426fe"
  },
  {
    "url": "assets/js/14.16c2e7b5.js",
    "revision": "490cf8fac007d971a0ac7d9d8fd2bb11"
  },
  {
    "url": "assets/js/15.6ac68cf0.js",
    "revision": "f60e325fc06d0f7c8bb6155c35d8c1cd"
  },
  {
    "url": "assets/js/16.c999a1b4.js",
    "revision": "82f75dfef31a58230debec01d46c3a38"
  },
  {
    "url": "assets/js/17.8e3d9be3.js",
    "revision": "6e079808529ae0053642e58e1c5df0d2"
  },
  {
    "url": "assets/js/18.e9cbedd4.js",
    "revision": "777304f271da0a3f1156ee601d3f5558"
  },
  {
    "url": "assets/js/19.92be6fd6.js",
    "revision": "b061f17bd904098e81aeeb9693320f72"
  },
  {
    "url": "assets/js/2.43b056d9.js",
    "revision": "25015ce0dda83c655af0a4d63ec6f3af"
  },
  {
    "url": "assets/js/20.9ee99d7e.js",
    "revision": "c537237d89762b38060d0fb84d25af79"
  },
  {
    "url": "assets/js/21.1ee14f68.js",
    "revision": "b01bb05a6aff9a4db6af52462dd49baf"
  },
  {
    "url": "assets/js/22.5f72dfbd.js",
    "revision": "d5689594a33fdce0d5205e8cb210d537"
  },
  {
    "url": "assets/js/23.c89e896a.js",
    "revision": "066676741bae11becb6fb23862d2d7e9"
  },
  {
    "url": "assets/js/24.eabfdd14.js",
    "revision": "8c399ede6c7cb63dd5b405a65cc5814d"
  },
  {
    "url": "assets/js/25.95af1f34.js",
    "revision": "4ecd7964ffc675af61b9562e264ff103"
  },
  {
    "url": "assets/js/26.17d6ff67.js",
    "revision": "9e137f22e69f2cb0a252ae06ce303a93"
  },
  {
    "url": "assets/js/27.a1ef21a4.js",
    "revision": "0ecf7e09cb7b5d99e6685144703cf186"
  },
  {
    "url": "assets/js/28.f39ba5ca.js",
    "revision": "04c04b547de448cd8c5c14cbc453fc5a"
  },
  {
    "url": "assets/js/29.7c37fc8c.js",
    "revision": "16f78d721e68f694e873be3ca51747c4"
  },
  {
    "url": "assets/js/30.a965c962.js",
    "revision": "d866e7e14ea1fffdf625934d30ac4241"
  },
  {
    "url": "assets/js/31.491a7ab0.js",
    "revision": "9ddbed19c4b7dde5285352daf37bc23b"
  },
  {
    "url": "assets/js/32.df1f0109.js",
    "revision": "4e7f17d3c7240ae5866d235daf75df62"
  },
  {
    "url": "assets/js/33.c83cebe9.js",
    "revision": "78e7183eb0c3e5cea931eefb657487a9"
  },
  {
    "url": "assets/js/34.f7436514.js",
    "revision": "a9c13e830d419ef1fb91c5ed18727549"
  },
  {
    "url": "assets/js/35.b14ded2c.js",
    "revision": "27e16da675e1dcd26d461b3870fd7758"
  },
  {
    "url": "assets/js/36.6f6a26cb.js",
    "revision": "d12a7c21d50baa271fd5bafb9a5fb1e7"
  },
  {
    "url": "assets/js/37.bbb21ff4.js",
    "revision": "65703a6056338785343976d0e57cd07d"
  },
  {
    "url": "assets/js/38.a7f7664e.js",
    "revision": "d3ffa0422f7cbb3151e5250fb47c4127"
  },
  {
    "url": "assets/js/39.3a767a23.js",
    "revision": "3bb50c727b94a46cc6ad331072bbe864"
  },
  {
    "url": "assets/js/4.4fa42ac5.js",
    "revision": "6ce26a716f4dea874ca18fd7448e7336"
  },
  {
    "url": "assets/js/40.d240f54d.js",
    "revision": "2cee3d6a97de570a8897b1e5505a8331"
  },
  {
    "url": "assets/js/41.0a452a16.js",
    "revision": "cce6205179a06e9c69ebf6b034521c73"
  },
  {
    "url": "assets/js/42.c40a1945.js",
    "revision": "e169a054ddbfefda19e14904a9335a80"
  },
  {
    "url": "assets/js/43.01d60e1c.js",
    "revision": "92158402f3dc01a9096cf75bd459095c"
  },
  {
    "url": "assets/js/44.22b4761b.js",
    "revision": "8f5b7da71b184acd3ea698b63bb9f105"
  },
  {
    "url": "assets/js/45.32a6e183.js",
    "revision": "032d2b5870493452ffd692d56f72964c"
  },
  {
    "url": "assets/js/46.4f73add0.js",
    "revision": "9e7f3a08551789e1665eecedc16b927b"
  },
  {
    "url": "assets/js/47.e9e5b2e7.js",
    "revision": "67daa1a3a81a7e2065311056ec9ea032"
  },
  {
    "url": "assets/js/48.2982cd80.js",
    "revision": "be9f4dee71e8ea475c1089c2658a8500"
  },
  {
    "url": "assets/js/49.6e9bd47b.js",
    "revision": "7c8c18a0dfa160205f4301adf1fc55ea"
  },
  {
    "url": "assets/js/5.6f12ba5c.js",
    "revision": "f029c763355b02a6621e1fbd4e83e960"
  },
  {
    "url": "assets/js/50.686c31d7.js",
    "revision": "f39ec3c6e5a625c31ef3084ceafb4067"
  },
  {
    "url": "assets/js/51.cb69653a.js",
    "revision": "84263b906bd87862c3a7fb5a27a8f5ef"
  },
  {
    "url": "assets/js/52.378988d2.js",
    "revision": "67d03f55177042cd1113ee74ae5d0d90"
  },
  {
    "url": "assets/js/53.e19c39a8.js",
    "revision": "74090fb5289f910205f78e82d2e78d13"
  },
  {
    "url": "assets/js/54.e5adf64f.js",
    "revision": "6813ad8a77a04b478a78772ddd41f6e3"
  },
  {
    "url": "assets/js/55.eaf9f85c.js",
    "revision": "1f760aff97b85d969e5056894715c53f"
  },
  {
    "url": "assets/js/56.db86149a.js",
    "revision": "c0efe06ad4809015afa4c093ac4c507b"
  },
  {
    "url": "assets/js/57.7f819132.js",
    "revision": "d8a59bb1b9e07ea9a3623990a766e7ee"
  },
  {
    "url": "assets/js/58.43bddff8.js",
    "revision": "903cdf6dfc1c9f2302856120612e83a9"
  },
  {
    "url": "assets/js/59.dd3117cb.js",
    "revision": "6ce15ecee60a68595efc494ac719112d"
  },
  {
    "url": "assets/js/6.719fe1f7.js",
    "revision": "5e903b9119da9f8a5ba62210f41279b2"
  },
  {
    "url": "assets/js/60.3b860175.js",
    "revision": "bbca8c0d7084e4f3338b913f821e65ab"
  },
  {
    "url": "assets/js/61.7d45b438.js",
    "revision": "a5ea6b1556eaae1b2459e9964b2be4c8"
  },
  {
    "url": "assets/js/62.db445e80.js",
    "revision": "4a239014b6841150b639e92e68f2753a"
  },
  {
    "url": "assets/js/63.01fbfc33.js",
    "revision": "aff4f9690a3fbf38ffb97e82af484098"
  },
  {
    "url": "assets/js/64.74d70f67.js",
    "revision": "dfb7fadaadf939f4c143526e3b5af9c3"
  },
  {
    "url": "assets/js/65.cf4a1ca6.js",
    "revision": "22303039957c1416940bf67689124d73"
  },
  {
    "url": "assets/js/66.b1c695fd.js",
    "revision": "8e978b44719858c4af9c21686153dfc4"
  },
  {
    "url": "assets/js/67.048aa846.js",
    "revision": "e0b55e5d81060217d6edf03a1aed92b7"
  },
  {
    "url": "assets/js/68.2d68b7f4.js",
    "revision": "3b9e50775d613448047272013beb7a38"
  },
  {
    "url": "assets/js/69.267507af.js",
    "revision": "2f3433f675b78d6be755f6eb417ea82d"
  },
  {
    "url": "assets/js/7.d4125b92.js",
    "revision": "04a3a246129118f556475c3b11d6bee4"
  },
  {
    "url": "assets/js/70.58f13334.js",
    "revision": "4323624700668ec7e52d46ea22b09faa"
  },
  {
    "url": "assets/js/71.94d4f7ad.js",
    "revision": "a55e8c45c10245dc9b9f52948587bfae"
  },
  {
    "url": "assets/js/72.d41051e9.js",
    "revision": "eb2f6fdaec515fd594b8ba3165c19517"
  },
  {
    "url": "assets/js/73.02912a33.js",
    "revision": "62e095b3064fed544b893327e20b2624"
  },
  {
    "url": "assets/js/74.c471bb25.js",
    "revision": "727efdd91928e15222c6a9cf6c1f3cfe"
  },
  {
    "url": "assets/js/75.67fb9d06.js",
    "revision": "09756eb6c0931db8a38fcaad1e97fc4d"
  },
  {
    "url": "assets/js/76.1b35ed50.js",
    "revision": "b2c654ee7a090bbb863171ab50a088cd"
  },
  {
    "url": "assets/js/77.f6c3fbbd.js",
    "revision": "770ba9bbb5040cfb8f24c7898e6854f3"
  },
  {
    "url": "assets/js/78.15b89428.js",
    "revision": "97c5a566fdfcddd64a8e4df9e6884a8c"
  },
  {
    "url": "assets/js/79.db8aa4e3.js",
    "revision": "2b25874531a5a3d9f815bdfcead2de9a"
  },
  {
    "url": "assets/js/8.1881ee2a.js",
    "revision": "25de7c1d55a12df32b1e62e0609dcebd"
  },
  {
    "url": "assets/js/80.88a32af7.js",
    "revision": "862534ad4f28b70a7e298fb8ef51633d"
  },
  {
    "url": "assets/js/81.5d97d9fa.js",
    "revision": "e4e9b8ad39e19f24970d58d7fd977276"
  },
  {
    "url": "assets/js/82.5bc99966.js",
    "revision": "2efd998e4a33e8c3aeacf471e1a73aa8"
  },
  {
    "url": "assets/js/83.8af101dc.js",
    "revision": "a2f130cad543dc2e1aec123b9a09bc8b"
  },
  {
    "url": "assets/js/84.f3241909.js",
    "revision": "af0cb9ce9efd30366e81d9ce0a020d7d"
  },
  {
    "url": "assets/js/85.f3033ea2.js",
    "revision": "44dc53f78631a874258b83a72880772e"
  },
  {
    "url": "assets/js/86.b9108594.js",
    "revision": "3223aa9539774dfe3fd46954e0990600"
  },
  {
    "url": "assets/js/87.fbecb0ff.js",
    "revision": "aa4137fa80f867af51c64508bafc4550"
  },
  {
    "url": "assets/js/9.7151fb63.js",
    "revision": "d241246aa14f8247d9372304c01898b0"
  },
  {
    "url": "assets/js/app.855d4e79.js",
    "revision": "9b8c69bfd60ddc067e2534c9e4764a52"
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
    "revision": "ecb4e2e4a3eb0776730907373e663d0b"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "2cad3b2c2028a0a0867a4558ea5f2e28"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "23a293b9c8148525169b58914a312675"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "91fa31ea83a96374a8c624d301a7ce2a"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "fb37b807b6ff0c2619c85d485c17ff1e"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e5fc4c8f3db0a6368ca48e319133eeb5"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "f7142609f76926f2a50abd311f13863f"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "860a0499f918d29a4b169aaf24c90205"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "e3ae7a82d6d60a37aa35304181995976"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "d232d3bd67bef25f74848ef49cf35831"
  },
  {
    "url": "courses/index.html",
    "revision": "720fc70845e0d92626fb4a28e1b80d37"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8b7a91e8945d6901cb14a64cffd9a5f7"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d86dfa02fbee3725ed01fea277cf6cee"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "2a18109399eb2f95b0b47a8da1cf578e"
  },
  {
    "url": "courses/template/index.html",
    "revision": "3da1fdd44441f92f7a529e1655933a1e"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d830e04649ddb0e0d8eff22402c84897"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "40a5905ea2610c01c90608e32d8b4fdc"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "047d69e0d07a077abcc57ebe97584568"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "1ceb35ce39d9f7f9cb2384397288b2e0"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "d5d8e2b9bd0b8b8ca0b351eea16b7de5"
  },
  {
    "url": "index.html",
    "revision": "82d80ac2699fa8f56bf551ac5d175e68"
  },
  {
    "url": "studyathome/about.html",
    "revision": "7319c26eb8dc637eeb313d6c1910d61d"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "bb86d6f40cf4ad41d0d45a60ecc06e3f"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "fee1e38aa74fec4d1fb09a739fd7f4f0"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "935b6ad6000184b25739d422077f5ddd"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "cf86697bb23ed763a9699f6ffbd09d1d"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "172020b6675125faedf1ea65d36697a7"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "2135198266c70a53d7180d77d1271ab0"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "106d6422caa87a5c24ea89c7d5005a5c"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "4f6084a95dd48fe14b59a320cc5d7345"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "f5885ec56048a16145dc9b0a01785597"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "e30151a938f5321d04b67d1f646bf3a9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "f325f3994485355fb5fea0b675376a2f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "9e38eb3573d703fcec2a4936c641637d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "2ac77820478c047b8e5b24b4231f4e05"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "57838f426c9f82bb90e8ba758a866a4d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "a34e41fa0030bf1ae97f092eca15e9f3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "b8035d28f46d85482ad7cc0bbdf51af5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "3267deb8514f575731a4f9b6dab797d8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "4f2c73b560cf391cf621ad61f3e1a6ed"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "f0f74793cb7733d2ff5642f97a342b9a"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b299cf55c22458b12ce860ba72db17b7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "37eeca6c8f35450f0d92e5f692126814"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "6c9de025a38503c9ef56437ad6861284"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "ae94f35e5c608dfe2e9d16e00a695b78"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "887e7c2254b978e6652092713484982e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "db324bd9f17f63c0b644fe40f239e681"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "bd52fa5513be5e8d0b4aa7960c82895a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "d68e8c6adc088122745b4c8da39eadd3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "55c9c5ce14f71e384484c3a59081473b"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "f0f74793cb7733d2ff5642f97a342b9a"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "c9ca0e273ac815055fe747a7a17c2072"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "38f40a88807cd8ee29cf2af66b78156b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "aec7a0641644bf160a72258d7da4e589"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "3f971583ade930509b756fe9eaa5dce6"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "49f7a18fb31772e645a8946a35c2a53a"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d8c83c2602df6b7d6c2c69c21ad45acd"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "5ceef39b1bb5e31f64fc8e3cde4d219f"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "4caebc875742c0d8232555be0297ee7d"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "60944cfff95a67654b36fe63c72b35b1"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "1d25445e43a479e128f0b0cf782a471a"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "4125e6a6527d2ae92a9e27055dc0452b"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "37daf2d0ecf0feeb89df986107236055"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "d78edf0034993fbc4eae26d158de2df7"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "4ba93842c32aad68fdb80639e2f12f18"
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
