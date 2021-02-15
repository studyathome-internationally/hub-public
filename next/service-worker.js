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
    "revision": "d1742d2aabac6374d30dd591747ace24"
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
    "url": "assets/js/15.15b04382.js",
    "revision": "1e874b303436b9e7187eeecece06f60a"
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
    "url": "assets/js/23.9e813eda.js",
    "revision": "84faaad7c53d17c0477ca6ed9a21c37c"
  },
  {
    "url": "assets/js/24.d017dcb2.js",
    "revision": "abfd59059d3ce79518a5079a3b401f45"
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
    "url": "assets/js/29.0296a441.js",
    "revision": "ac9d4eb48a5d5fa3173791b99097cd8e"
  },
  {
    "url": "assets/js/30.1179a369.js",
    "revision": "539ae70e019cab6a85d73176d860956d"
  },
  {
    "url": "assets/js/31.f9dcc93a.js",
    "revision": "20c57d511470f73bebf1ccd8fe37ddce"
  },
  {
    "url": "assets/js/32.df1f0109.js",
    "revision": "4e7f17d3c7240ae5866d235daf75df62"
  },
  {
    "url": "assets/js/33.3cdf7be6.js",
    "revision": "c2a1573ce68c064c3c09c98f7832eeb2"
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
    "url": "assets/js/41.4bfa3294.js",
    "revision": "67a3b737cc1f5ba7c2cf62c18a62f1db"
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
    "url": "assets/js/45.a64d2cc8.js",
    "revision": "af1ba383f51435f7e9c71427da0ec0cc"
  },
  {
    "url": "assets/js/46.2e9c4c31.js",
    "revision": "a619ecc1403128dc0134b62b23506279"
  },
  {
    "url": "assets/js/47.e9e5b2e7.js",
    "revision": "67daa1a3a81a7e2065311056ec9ea032"
  },
  {
    "url": "assets/js/48.074aa7c0.js",
    "revision": "57e32862be32c7113d3dde1e6836bc80"
  },
  {
    "url": "assets/js/49.2deafaaa.js",
    "revision": "c417d47c5d5b7eb8d6e896996846090e"
  },
  {
    "url": "assets/js/5.6f12ba5c.js",
    "revision": "f029c763355b02a6621e1fbd4e83e960"
  },
  {
    "url": "assets/js/50.86db4eb4.js",
    "revision": "b8f523a7d51ad6e07c9126af9ee4bc1b"
  },
  {
    "url": "assets/js/51.35305c7d.js",
    "revision": "ea3b2c1807694b5d4d3c51f442eb4d7d"
  },
  {
    "url": "assets/js/52.378988d2.js",
    "revision": "67d03f55177042cd1113ee74ae5d0d90"
  },
  {
    "url": "assets/js/53.4abc084f.js",
    "revision": "94d701f4404c8a03b9b5baf5cbf342c7"
  },
  {
    "url": "assets/js/54.0a356a1b.js",
    "revision": "1b3f4bcbdc335c7689991e9576fdd810"
  },
  {
    "url": "assets/js/55.eaf9f85c.js",
    "revision": "1f760aff97b85d969e5056894715c53f"
  },
  {
    "url": "assets/js/56.a9bcdfca.js",
    "revision": "2e91eb0559307753b0437ec94de17b54"
  },
  {
    "url": "assets/js/57.cfe28103.js",
    "revision": "436d4b1c26c9610e89ebc35f4168ad5c"
  },
  {
    "url": "assets/js/58.e9d34f23.js",
    "revision": "dcae22060ae79a7f6ec21e1aaccaab83"
  },
  {
    "url": "assets/js/59.877047ca.js",
    "revision": "4e2509af30ce028755c54d55321abc2d"
  },
  {
    "url": "assets/js/6.719fe1f7.js",
    "revision": "5e903b9119da9f8a5ba62210f41279b2"
  },
  {
    "url": "assets/js/60.ae72fe12.js",
    "revision": "94d7617e2ffceb96c00e048056c3ae5b"
  },
  {
    "url": "assets/js/61.5678cc4d.js",
    "revision": "527e6abde163b126c19b3a998e6ec8d3"
  },
  {
    "url": "assets/js/62.9ce04d05.js",
    "revision": "e2b804bc0abcf5c696835df69ef2fb43"
  },
  {
    "url": "assets/js/63.3b4c8849.js",
    "revision": "ff8af2af82c16506ffc524bb43ec907c"
  },
  {
    "url": "assets/js/64.74d70f67.js",
    "revision": "dfb7fadaadf939f4c143526e3b5af9c3"
  },
  {
    "url": "assets/js/65.e22476ea.js",
    "revision": "0a1eb5e3cc44f025bb94f4d3c3c6eeaa"
  },
  {
    "url": "assets/js/66.f67ef37d.js",
    "revision": "6e08b55e39f129b891278842d27794ea"
  },
  {
    "url": "assets/js/67.47372008.js",
    "revision": "93780977b1c56361ec98dd1792100e1d"
  },
  {
    "url": "assets/js/68.88ce2acb.js",
    "revision": "5b1cf67cc5f958450566769e90998c9e"
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
    "url": "assets/js/71.689b1e1e.js",
    "revision": "1040bc333d988f7c8ab81af561e94d47"
  },
  {
    "url": "assets/js/72.a3a8713d.js",
    "revision": "c1df5fd57fa6bd3a4b56ffcc2b739011"
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
    "url": "assets/js/77.35605817.js",
    "revision": "cafe77bfa339feb918f59ccfab8695a5"
  },
  {
    "url": "assets/js/78.15b89428.js",
    "revision": "97c5a566fdfcddd64a8e4df9e6884a8c"
  },
  {
    "url": "assets/js/79.bad903e8.js",
    "revision": "13fd6ccf68c5ce22e9e26f3e3375076f"
  },
  {
    "url": "assets/js/8.1881ee2a.js",
    "revision": "25de7c1d55a12df32b1e62e0609dcebd"
  },
  {
    "url": "assets/js/80.f637f490.js",
    "revision": "5556e905cafa8a178df7a5af0cd4cb6b"
  },
  {
    "url": "assets/js/81.5d97d9fa.js",
    "revision": "e4e9b8ad39e19f24970d58d7fd977276"
  },
  {
    "url": "assets/js/82.eae09388.js",
    "revision": "232778b42f8900890f4d240ef0533f5f"
  },
  {
    "url": "assets/js/83.3cfea33c.js",
    "revision": "ba0ebe9a433d821922e68370a40cb5c1"
  },
  {
    "url": "assets/js/84.28f42465.js",
    "revision": "1f085763d98263ec83075947117dd1f3"
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
    "url": "assets/js/app.9c4f69c8.js",
    "revision": "bfee328794bc857638703ce3baacc646"
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
    "revision": "3bb5960aef69d27fbb3a9321ce425b41"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "b711cf3c97f8c1c34190581f3b0b9a3c"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "efdd020a53d0bf2894d8331bdba066b9"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "d2803cc20300dbf7720cf4d4d9f9dfbc"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "8df512de6aee0527f19126553de2c78d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "ac18dc663c50a3237a88c6b1fba06fe2"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "73f154f2ca7cfa8be622dab981ff6639"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "aa5efeac8ef5a2f0b7fc6e02604f6fc2"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "9fc263655f4290019428fdb73ae567b9"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "4c60197b8fecba0a4adbeceb1632f43c"
  },
  {
    "url": "courses/index.html",
    "revision": "1d32b8019d47c0cb1512be60f4746211"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "9803b110084f8795b8148c6fe4d097aa"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "256fa7263650f721857d1492964ad0b3"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "5ca722ee89d5dfff04f889acb985e89e"
  },
  {
    "url": "courses/template/index.html",
    "revision": "f1db64dd9817486273acad787165d8d5"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b617a6bd16ee3e4ed959961ca164362f"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "ef677d662beb6e4c60cc6ebfa05948d4"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "871d7826dd63251d60724855a9d532b5"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "2c74fd9f8fd16d2d16d93fbc580ed27d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "6e63bf7b3576ceef7466f24b048d688c"
  },
  {
    "url": "index.html",
    "revision": "52d50042648bb58d8b56ce8a0c7131e2"
  },
  {
    "url": "studyathome/about.html",
    "revision": "2733a79f4ac37dbb34802434a8c23f97"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "a8c1ebef2da81b618795cd49c03f9c4f"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "8fd9b7636e5ecf38a1b78f23db7a3803"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "61a01875a7eecbc575f4ed3fa812a501"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "d1742d2aabac6374d30dd591747ace24"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "84d7278ef0a58f10dd78282ad0fae14a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "5fb0303b7b803b3ba6dc4db9afe6a68d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "09a89623981577e74f3452140d7f6a7c"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "731c6d8cf9f3d99be4934f08d85f9064"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d1742d2aabac6374d30dd591747ace24"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "e0837ed95c28a5167eba2bdd893c4a87"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "be241fb9f1e0cea74296f778768af679"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "e33cd94f7a45367dadeb4f863a71f050"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "3f38438df99bd62453e922defbe22f81"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "1e8e1015ff19f6952ad7486a4bea5372"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "6f02532df03b8ea4b104b977f5b67d70"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "ea52d00cdafeac7d6fe7dc3cb293691b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "53e58a8b859fd2f6a8277ead5b974d64"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "54c7687caa81900f6733651453d98672"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "e5bf533c5447cdc3e242ad6e4c769088"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "9c78d11536ad50cf852494cc0442f9eb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "7c8f0139123a2cdc952a2f01457250be"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "3d8a8885032d92f459bfc8706e3aa812"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "2e7741eef9be1ead93a2aef469ea1ec3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "2e8f79e135f958db59e6b080151a6d3b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "9477623f150b25f069980e457c08d338"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "7bcb84195630aa301f3453bdda56c91c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "810e80d54af9db671295610419ea64a4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "e719005a10aeaa649182ff3e620cbb08"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "d1742d2aabac6374d30dd591747ace24"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ed7ab53bfad61e3f519096e591286e0b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "aefb956144b822bea1645d805bca566e"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "15463648e9480819a0c42fc62f034398"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "191f35a5d109ea71beff49a410203ea1"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "3b45c69dadf9cfdb716d2d9c3b7fadfe"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "be3f284ef46e2c2f673999033930a6ae"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "1d5ec46340b7e947f4e624f45b8ee054"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "3b4e73b8d808a222e97718069cad8a42"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "cf47a59af8d8b4602fde93d9e01f2c3a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "91208d3bf16acdfbe87ee6baa9ea68f3"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "049952a7580a96a9927c72b3d43f1868"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "21524b96017efa1b6c5e0ea0525100da"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "e44b155880bb323fa6d211aa9215b690"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "107163c5f12e21cc82e394e4e3f27382"
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
