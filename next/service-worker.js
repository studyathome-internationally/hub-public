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
    "revision": "4e30d382779e34f0004557b04e2b8a8f"
  },
  {
    "url": "assets/css/0.styles.8bcb28ab.css",
    "revision": "b89a7a18582ad552ec8399077e5c82df"
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
    "url": "assets/js/1.7a3129f0.js",
    "revision": "32aa07e6bee2421f2aafe329195495fb"
  },
  {
    "url": "assets/js/10.be80e09d.js",
    "revision": "180f8cbf7a84b3a4dc8c33dcc78ff1f1"
  },
  {
    "url": "assets/js/11.748d7665.js",
    "revision": "17de49f0c636bba91d9bc80aaf44914d"
  },
  {
    "url": "assets/js/12.34205b8c.js",
    "revision": "48548344ff5f282be027c7378cfdef08"
  },
  {
    "url": "assets/js/13.0750a515.js",
    "revision": "f052b8c06514e156b6245c198236134f"
  },
  {
    "url": "assets/js/14.52f7a820.js",
    "revision": "c4c63631ad195317d8c469953c80d7a1"
  },
  {
    "url": "assets/js/15.cd2655dc.js",
    "revision": "597f5979f83fc130505fbdea0b1ea5a9"
  },
  {
    "url": "assets/js/16.56834d77.js",
    "revision": "a04c88e97f0bd3a9a658efbef2224926"
  },
  {
    "url": "assets/js/17.8b104b11.js",
    "revision": "9285de8ec251c19d48f8bbee5048b7e7"
  },
  {
    "url": "assets/js/18.83ebb6b9.js",
    "revision": "86d77de5079439845a117352d2450fe9"
  },
  {
    "url": "assets/js/19.d3263188.js",
    "revision": "020d733e204e8db4843de9eef69a4b9c"
  },
  {
    "url": "assets/js/2.78ab3607.js",
    "revision": "47fe1ea0fcebb6d43377aaf324528bfd"
  },
  {
    "url": "assets/js/20.ad1e4dca.js",
    "revision": "b053119cef7faa27e8400c125cd035ea"
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
    "url": "assets/js/23.752d2edd.js",
    "revision": "7047171645e8b0f21e0cd4343824945b"
  },
  {
    "url": "assets/js/24.4db58f0e.js",
    "revision": "9075375522378f2e82b3092f460e32aa"
  },
  {
    "url": "assets/js/25.51d24d0a.js",
    "revision": "6642daa0e592a9bb83533da40743a528"
  },
  {
    "url": "assets/js/26.ce89c3f4.js",
    "revision": "1c4828ec8feab31256e8dbd5b1917f6a"
  },
  {
    "url": "assets/js/27.99bf1b86.js",
    "revision": "f0bf6d2073b024db18c7794263ad5115"
  },
  {
    "url": "assets/js/28.53934071.js",
    "revision": "f98fac84e15e7fa5063c840fe8a71f87"
  },
  {
    "url": "assets/js/29.b3083a04.js",
    "revision": "f138d72e7a2021b0f069d5f925b478de"
  },
  {
    "url": "assets/js/30.10ffe48a.js",
    "revision": "a3bcebd195a4f4d47ee96319104d9b7c"
  },
  {
    "url": "assets/js/31.b19d390b.js",
    "revision": "b36ac65021c8671ced7c9b760b095e4e"
  },
  {
    "url": "assets/js/32.4757b0c3.js",
    "revision": "dd2feefba596a1484c87622ec9aeb46a"
  },
  {
    "url": "assets/js/33.ef55c68e.js",
    "revision": "4d8fd6fe2610466c123c8fdf8c2864b5"
  },
  {
    "url": "assets/js/34.6ece8f2a.js",
    "revision": "5358cb30817384099d8666325da141a5"
  },
  {
    "url": "assets/js/35.6d4f4d10.js",
    "revision": "a75ac4bb0ca0b82c67819737ddd0a294"
  },
  {
    "url": "assets/js/36.bc646817.js",
    "revision": "30f2cb83cf594afaabf8b876b7c8b239"
  },
  {
    "url": "assets/js/37.da8e6d7a.js",
    "revision": "590783764ba314149118344488a825aa"
  },
  {
    "url": "assets/js/38.e54589db.js",
    "revision": "44359f204b9d222ddf16c30e73d90265"
  },
  {
    "url": "assets/js/39.8c08fa28.js",
    "revision": "beb94a32eeaa77810c86b7ea122b0041"
  },
  {
    "url": "assets/js/4.f2f50496.js",
    "revision": "a608ccc2b363dfb1e1331e54f9c38bd4"
  },
  {
    "url": "assets/js/40.76d080ec.js",
    "revision": "f9008a3cec154f2e7a38c33fa12fc1ea"
  },
  {
    "url": "assets/js/41.b10e3b2e.js",
    "revision": "020e0b52ed89146920a0f65e8fa03101"
  },
  {
    "url": "assets/js/42.adbb17e8.js",
    "revision": "810141fb9170dc283f7d3f006d976960"
  },
  {
    "url": "assets/js/43.de415b1b.js",
    "revision": "b0fe4246e396276a93d25eee1c447306"
  },
  {
    "url": "assets/js/44.ff669a86.js",
    "revision": "cc2cd0ace365ccae8b9b061449849698"
  },
  {
    "url": "assets/js/45.8cc37297.js",
    "revision": "baddd4b428ff999cd914322e3ca582f1"
  },
  {
    "url": "assets/js/46.19db8258.js",
    "revision": "ffaf6a64faf7cc198d6353b41d6a1863"
  },
  {
    "url": "assets/js/47.17eba27b.js",
    "revision": "9d6e8944aeaa64fabdf0a67826702717"
  },
  {
    "url": "assets/js/48.cc96ff23.js",
    "revision": "7c6b25946b7f548f5b83058f36d839a8"
  },
  {
    "url": "assets/js/49.493f7e12.js",
    "revision": "9cb5b15c6fc7e9884fbe92af6b459b19"
  },
  {
    "url": "assets/js/5.e5bc6f7d.js",
    "revision": "87da9e2faf8d2a4221dea152c5b93340"
  },
  {
    "url": "assets/js/50.c3dae581.js",
    "revision": "8223457ab1d170c89f6307cb4f5451e0"
  },
  {
    "url": "assets/js/51.09ae8bcd.js",
    "revision": "8da55aa84b9bfc96809719a5369c1d0a"
  },
  {
    "url": "assets/js/52.4bf0de1c.js",
    "revision": "e1599d5517b2bb953cf752e57b082392"
  },
  {
    "url": "assets/js/53.b8db52d3.js",
    "revision": "f3ab90efdd5fbaee0f37067625f54608"
  },
  {
    "url": "assets/js/54.338ac8e3.js",
    "revision": "38fd64cc054537a54e086bd9da0acd8d"
  },
  {
    "url": "assets/js/55.3eee6b6d.js",
    "revision": "0c2f7cfaa40e4e73954e698205c842c6"
  },
  {
    "url": "assets/js/56.fc4424d4.js",
    "revision": "877e1c8fecb5ba4ddeb8f4127313c370"
  },
  {
    "url": "assets/js/57.df82cf15.js",
    "revision": "b233dbdf1f708ebb3c032e4bc53398a3"
  },
  {
    "url": "assets/js/58.d6b60a12.js",
    "revision": "cae5d013cd6202c07cdc8dc024d49ea6"
  },
  {
    "url": "assets/js/59.50c82997.js",
    "revision": "5ce744e75d528fddfdca9a1ea798ebdf"
  },
  {
    "url": "assets/js/6.82bb0511.js",
    "revision": "3e0d9929f80417022fb02a04bdc59131"
  },
  {
    "url": "assets/js/60.15abfe79.js",
    "revision": "220886cfba9849c1c4a96c13eb738f87"
  },
  {
    "url": "assets/js/61.ea796d08.js",
    "revision": "f6ef859e541d0acb8a2d1c665aded593"
  },
  {
    "url": "assets/js/62.48d10b05.js",
    "revision": "55abb52399c5e90d9b693bf5492565f1"
  },
  {
    "url": "assets/js/63.2050535f.js",
    "revision": "d0ccbb94052652f57c57b34a82a9295e"
  },
  {
    "url": "assets/js/64.21616b7e.js",
    "revision": "2d61fd10c1650f760ce03894a4a87339"
  },
  {
    "url": "assets/js/65.1219ea06.js",
    "revision": "4b9025d8aea1020d744041d4dfb9dcd4"
  },
  {
    "url": "assets/js/66.1502a495.js",
    "revision": "389ccdf22009a9d507930d03b933176c"
  },
  {
    "url": "assets/js/67.25630388.js",
    "revision": "d7e35fba97ca5dc52a84ac69b89e7c27"
  },
  {
    "url": "assets/js/68.57c20c64.js",
    "revision": "2ef123d8397472deaa821bb1eb3d14c3"
  },
  {
    "url": "assets/js/69.7a772c0a.js",
    "revision": "4026efeb86d16bf1517318dfc729c69f"
  },
  {
    "url": "assets/js/7.94c3137f.js",
    "revision": "0ad60f61463b49f57534408bd91dc53d"
  },
  {
    "url": "assets/js/70.ab499bde.js",
    "revision": "d567e227a38ce5c9a85b917e85c9e235"
  },
  {
    "url": "assets/js/71.d263f279.js",
    "revision": "c3769c407cc3d8d65f7652f24bcd20d7"
  },
  {
    "url": "assets/js/72.676dec3b.js",
    "revision": "72e6bfe9608fa16e6b2ea2e496d06960"
  },
  {
    "url": "assets/js/73.96c46388.js",
    "revision": "413b3cade69669bf7e14511299982bbd"
  },
  {
    "url": "assets/js/74.cee22576.js",
    "revision": "e919e3f0b294ddef95815433371eb8e9"
  },
  {
    "url": "assets/js/75.32e6323b.js",
    "revision": "f589724abb7c0c2739be5a7382aa2a74"
  },
  {
    "url": "assets/js/76.1939fbe9.js",
    "revision": "3ac94f7fe6415bc388f1bdbe4497e2ae"
  },
  {
    "url": "assets/js/77.ecf3a81f.js",
    "revision": "fe8244e4daac16f9d81e83953e13b86a"
  },
  {
    "url": "assets/js/78.529fd474.js",
    "revision": "9d8f299c91d704dab6c84cd77645e471"
  },
  {
    "url": "assets/js/79.14823bf9.js",
    "revision": "af5c9007cedeba2906266624f297c849"
  },
  {
    "url": "assets/js/8.e390e5cb.js",
    "revision": "555d52c947ddf7bfcbdb67d45f07ec1d"
  },
  {
    "url": "assets/js/80.6ca35c4d.js",
    "revision": "494c031878d54923a706b24b24f2a163"
  },
  {
    "url": "assets/js/81.10c3931d.js",
    "revision": "4727527157fe02edb031fbc849d8e750"
  },
  {
    "url": "assets/js/82.bf637494.js",
    "revision": "0590faff7e7ec533b9f599ebf71a8d07"
  },
  {
    "url": "assets/js/83.d844c3f1.js",
    "revision": "e58bc927c8026f59eaea2c830812e6e2"
  },
  {
    "url": "assets/js/84.75b7b49a.js",
    "revision": "7d815c5c108cfdf7089a6d46a044330c"
  },
  {
    "url": "assets/js/85.043902ac.js",
    "revision": "e8a97393e67d195d1b8d26d9ebf13912"
  },
  {
    "url": "assets/js/86.b690f75c.js",
    "revision": "e04bc04c19e401b2a86098ab0d82770d"
  },
  {
    "url": "assets/js/87.bf6e6457.js",
    "revision": "842e0260f453ec880ce6728f49bb3779"
  },
  {
    "url": "assets/js/88.f76a9fa0.js",
    "revision": "5c35294c238fbbd42ff949b38ee01269"
  },
  {
    "url": "assets/js/89.e4e01052.js",
    "revision": "d4b86728e31b5ea7b21b232099c3c0e9"
  },
  {
    "url": "assets/js/9.77f258fc.js",
    "revision": "d189cea6549c1250f535e819f25deed3"
  },
  {
    "url": "assets/js/app.87598f45.js",
    "revision": "f8a48b89477b27aab1661ddbd5c9d36f"
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
    "revision": "b544b47d63505e2b62c395c798758bda"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "8568dcad58c6d51adc9b48654aa6047a"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "209b022cac0ae50143d228359557bc2b"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "512e3510fe5f3b488ff4ff24842d1468"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c1c657209693d543ff14165e32ceab21"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "fa57147c8d2deacef0cb3dcdf30caa1a"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "11da8d063657d37632dfbc80e225da78"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "b918110dcb6a64926284fe1869668448"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "1cc5fccc3fcd77d4e9a458bebb8e38f7"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "01ce09c75ac55527111434dc1b2143ed"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "bb81ff0367df51a8362634658f9a1ef6"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "bc7edb60c605084b9cbac0c2099bc69e"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "439f37cbcfa406a8f7491d00c3a71a58"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "f636f7739697cb3475bb3c32fd0fea89"
  },
  {
    "url": "courses/index.html",
    "revision": "03e7baeebc7ba6aacfc561e1fffb7b7a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "18fc4ba8c0c465ba5b0e1517adcd61ba"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "941c0a7e4783a2f67a9f197811dcbb6c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "cb87b33fca2e8270210bf406c0b0d2f7"
  },
  {
    "url": "courses/template/index.html",
    "revision": "7bda9ac85878de2d5a8ed8d4557db0f0"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "98698af8456cc578e99f4a555d2d153c"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "dfcfb7dba1511fdfcca5164a8a21655e"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "53c9ca9e5b49883d4236f0fa3a9b4247"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "e8bb70bb2e0c986ac5f27fdfcb3c0215"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "f0dd02fc73c78bdbd1ff94ae6d57f5eb"
  },
  {
    "url": "index.html",
    "revision": "c79469bcc145768b56c1149408c20122"
  },
  {
    "url": "studyathome/about.html",
    "revision": "4bf03ead24eb40f580c3930e4d8f0494"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "a857a5ffb7c8d1f6012267add6ab91e0"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "4e51f6d7edb4bbb91ac59ab7f4604a90"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "d1145d9a839ca0fd71cbe76498564626"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "077ed4ddd15ed0306dbe4255488b2a86"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "5becb8b156ba1119e8ad87a21636c2f7"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "a1a9b82b7bad6d0e9415f9a255ffecbf"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "18dd0847e515a4e5a4b592b6437f688f"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "edc2700ecc17ea8b51b5805e2f079ca3"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "025cbcd0faf2c7e266d9d2d4cdc2684e"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "c7f7054d920c7a083f8083f5dae96eb8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "9e6480c80da22396825adadcbd8b7b47"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "f295b52aa52e80b26fe319822f3885e5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "2bbc18a6ff76902a71dac1c608d2db1b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "626c78e3e0f2250f2c6e93cbb81944a0"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "caa3937b80435daadf834e1b494ce7f8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "cadfd794900ce73079d72710d8dfa7ed"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "3ba26ee48d354e8e689a45df714c2c56"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "d6269716f533c4b321a578c5c622eee1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "1233796c922fb7d908f12d7e5b1d5bf4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "4df61c0aff7ca216e66aebf8e624dbf1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "98a07ffb3f546306c3fddf7f77d1d73f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "8dd3da57a9eba46400f553c73f99db13"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "b82ba88cee86a162b7be13d00e4af40a"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "038f5c1911d633912ba96642062d64cb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "bac78397580f0a523c8d8b3dda4153ae"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "826f1f8d6cf6a2897996573f07aea486"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "65357fa81f4025eaa173c6dbc321cefe"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "5a06c5291faad3c53e6b6e3e9a47eec7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "8aebaf6afec48fe69bb4541f503f52e8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "5a8c23e4c8dc3c44eaccd0605d54cdb2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "75c59d455d7b458d50403337b50ce788"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "d49a41a2a177b5aaba4d61c1f5e9fed6"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "025cbcd0faf2c7e266d9d2d4cdc2684e"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "deb000c8061ce15e81a86bc415db7cd8"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "35f3578aebeb036467d13a8bcdce1ed6"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "5ab8eebc2a716292ba50dafac1c99c5d"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "38181163100f31b0c652cfa4a87b11b3"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "0ac066238deb5061311c4ccabd9311ab"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "06dd9faf9c3829e1d5af9ca9ed39defa"
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
