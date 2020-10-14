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
    "revision": "c7c2a6636ee1ed3139249608e38190df"
  },
  {
    "url": "assets/css/0.styles.f0721dcb.css",
    "revision": "c3ee93945945bee6a9eece7261527c78"
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
    "url": "assets/fonts/fa-brands-400.8300bd7f.ttf",
    "revision": "8300bd7f30e0a313c1d772b49d96cb8e"
  },
  {
    "url": "assets/fonts/fa-brands-400.ad527cc5.woff",
    "revision": "ad527cc5ec23d6da66e8a1d6772ea6d3"
  },
  {
    "url": "assets/fonts/fa-brands-400.e2ca6541.eot",
    "revision": "e2ca6541bff3a3e9f4799ee327b28c58"
  },
  {
    "url": "assets/fonts/fa-brands-400.f075c50f.woff2",
    "revision": "f075c50f89795e4cdb4d45b51f1a6800"
  },
  {
    "url": "assets/fonts/fa-regular-400.3c6879c4.woff",
    "revision": "3c6879c4f342203d099bdd66dce6d396"
  },
  {
    "url": "assets/fonts/fa-regular-400.49f00693.ttf",
    "revision": "49f00693b0e5d45097832ef5ea1bc541"
  },
  {
    "url": "assets/fonts/fa-regular-400.4a74738e.woff2",
    "revision": "4a74738e7728e93c4394b8604081da62"
  },
  {
    "url": "assets/fonts/fa-regular-400.b01516c1.eot",
    "revision": "b01516c1808be557667befec76cd6318"
  },
  {
    "url": "assets/fonts/fa-solid-900.205f07b3.ttf",
    "revision": "205f07b3883c484f27f40d21a92950d4"
  },
  {
    "url": "assets/fonts/fa-solid-900.4451e1d8.woff",
    "revision": "4451e1d86df7491dd874f2c41eee1053"
  },
  {
    "url": "assets/fonts/fa-solid-900.8ac31674.eot",
    "revision": "8ac3167427b1d5d2967646bd8f7a0587"
  },
  {
    "url": "assets/fonts/fa-solid-900.8e1ed89b.woff2",
    "revision": "8e1ed89b6ccb8ce41faf5cb672677105"
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
    "url": "assets/img/fa-brands-400.2f122423.svg",
    "revision": "2f12242375edd68e9013ecfb59c672e9"
  },
  {
    "url": "assets/img/fa-regular-400.3602b7e8.svg",
    "revision": "3602b7e8b2cb1462b0bef9738757ef8a"
  },
  {
    "url": "assets/img/fa-solid-900.664de393.svg",
    "revision": "664de3932dd6291b4b8a8c0ddbcb4c61"
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
    "url": "assets/img/partner/uastw/lecturer/christina-hochleitner.png",
    "revision": "a4886c1c14e25be6bc7ccd079a1be157"
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
    "url": "assets/img/partner/uastw/lecturer/michael-graf.png",
    "revision": "af0799432b29c653f75040eb3fe3d2b1"
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
    "url": "assets/js/1.c00336b1.js",
    "revision": "ddf3ce067aeab60dde67bf736074c78e"
  },
  {
    "url": "assets/js/10.f00cf2f8.js",
    "revision": "8c53827e357b84c9516afe11107fbdea"
  },
  {
    "url": "assets/js/11.41ffed99.js",
    "revision": "758b5a5187ae84de94edf0c8e0e83033"
  },
  {
    "url": "assets/js/12.6f5eb1be.js",
    "revision": "1d47ed9897f1eebf024a6a677cfdf430"
  },
  {
    "url": "assets/js/13.bf9e4cc4.js",
    "revision": "a157a4b874336e62d8f8c01841211e60"
  },
  {
    "url": "assets/js/14.c7655919.js",
    "revision": "0cd785ee4fb4d2a7f016c88eb34908dc"
  },
  {
    "url": "assets/js/15.517853ec.js",
    "revision": "13a0b297853b28d8f1c743d163344eed"
  },
  {
    "url": "assets/js/16.7fbc530f.js",
    "revision": "93dec2a0ba1f1072c3729c7b56f3bd83"
  },
  {
    "url": "assets/js/17.04af5b6f.js",
    "revision": "364ded0cbedf2ae8077a09a630024399"
  },
  {
    "url": "assets/js/18.399c2927.js",
    "revision": "4cb659985c3956b914c8a2e5def2f70c"
  },
  {
    "url": "assets/js/19.86ef4b5a.js",
    "revision": "20b64f553e2be48db4aca9e140ee5901"
  },
  {
    "url": "assets/js/2.32f03971.js",
    "revision": "84ea74c1d136ba592489c9b8163b4865"
  },
  {
    "url": "assets/js/20.11a864d2.js",
    "revision": "6e7833c1d852656e0f525049f70d0b95"
  },
  {
    "url": "assets/js/21.ecb5d64a.js",
    "revision": "224eeec408ec5b36fa97c73a3b1281a2"
  },
  {
    "url": "assets/js/22.1c64cce7.js",
    "revision": "82de28d983042c4ac2cba11a3a3432c9"
  },
  {
    "url": "assets/js/23.7eeb3908.js",
    "revision": "b50201424a1834ff1bb9fa6bee234d07"
  },
  {
    "url": "assets/js/24.dd013133.js",
    "revision": "98b3eb48ecb1d223ec090c29ceb59a5c"
  },
  {
    "url": "assets/js/25.16f56880.js",
    "revision": "02c827540577dfa7c7d0f4cfa880864d"
  },
  {
    "url": "assets/js/26.d2cdb5fa.js",
    "revision": "861982d3af1496349fbfedbce67c0714"
  },
  {
    "url": "assets/js/27.c5b00fd7.js",
    "revision": "1fdc12c0efb91e63cd91b75bb3cb0084"
  },
  {
    "url": "assets/js/28.c9e175db.js",
    "revision": "bdeb4a36926dfbc6f4e078f5471cc6fa"
  },
  {
    "url": "assets/js/29.eabe2173.js",
    "revision": "e29be825d72887ca87dbd4358f5edc94"
  },
  {
    "url": "assets/js/30.de9b71d9.js",
    "revision": "adf6dba131f45186a50fb5dd600329b9"
  },
  {
    "url": "assets/js/31.4a4d8710.js",
    "revision": "361609bc49ce9d1dcd22480c15394831"
  },
  {
    "url": "assets/js/32.a5a0c903.js",
    "revision": "255ea8c805d2af418f924bea4ed33373"
  },
  {
    "url": "assets/js/33.dbd4ae22.js",
    "revision": "56bc1f96c6aeed9124377ebd282967d2"
  },
  {
    "url": "assets/js/34.6c17f8d3.js",
    "revision": "bbd0dc89081f496c21fdbec18c57d51f"
  },
  {
    "url": "assets/js/35.322ac2d2.js",
    "revision": "91f8583e530b33171ea6d1077e8f4d77"
  },
  {
    "url": "assets/js/36.27f0bef4.js",
    "revision": "e21ac0a6dc854461bed7583c030ad43e"
  },
  {
    "url": "assets/js/37.354132e4.js",
    "revision": "7daa8ea3da75ebc71b11b61623178993"
  },
  {
    "url": "assets/js/38.98eaaa6d.js",
    "revision": "56a244a573e1c780eef661fc84c2628e"
  },
  {
    "url": "assets/js/39.17a6dd80.js",
    "revision": "118692ed9a7fee8ca7188c11cea48ea2"
  },
  {
    "url": "assets/js/4.1e460b9b.js",
    "revision": "f687dbf99331f27d01b5cc7feccb4193"
  },
  {
    "url": "assets/js/40.7ff1f192.js",
    "revision": "cef63dc87f137956a42a2d4d5bc66ba6"
  },
  {
    "url": "assets/js/41.95314b75.js",
    "revision": "6058b7f9bdc4797d8394dfe627e91250"
  },
  {
    "url": "assets/js/42.a48ce736.js",
    "revision": "59a1d3912f6985caa4b30ab28dd2371d"
  },
  {
    "url": "assets/js/43.41287762.js",
    "revision": "254d29eed85ed63a65ece9d1cdedb250"
  },
  {
    "url": "assets/js/44.f44a970f.js",
    "revision": "ad6c83de7806e7ffcb33f1b0a9ca9abd"
  },
  {
    "url": "assets/js/45.411402f7.js",
    "revision": "e728adc83707787b096baf95a205a79e"
  },
  {
    "url": "assets/js/46.d61121d5.js",
    "revision": "5ed9e6cd7ffba73c7d05a4c066872ff7"
  },
  {
    "url": "assets/js/47.2eaaeba5.js",
    "revision": "ec03e7b90cb7cec12b7aa29f83cc9b03"
  },
  {
    "url": "assets/js/48.70be9b7c.js",
    "revision": "b9f918702bd83466c6f19db70c85583c"
  },
  {
    "url": "assets/js/49.95304591.js",
    "revision": "95622827fb3f48a011f45e1754df23ff"
  },
  {
    "url": "assets/js/5.d22f47d3.js",
    "revision": "ec0f2692ca7c5853bd6e3e7dd652e97a"
  },
  {
    "url": "assets/js/50.a5517d87.js",
    "revision": "1db0ba41ba65e76139c4e8c071a6a163"
  },
  {
    "url": "assets/js/51.2dcc8ee1.js",
    "revision": "503c4df8961d3e003da17baa53febe90"
  },
  {
    "url": "assets/js/52.b0773a0a.js",
    "revision": "1a80bb779bd6a9bb58b5f4b073978c73"
  },
  {
    "url": "assets/js/53.21a0a9b5.js",
    "revision": "970e9d9c216bd12b6e6add177a1b384c"
  },
  {
    "url": "assets/js/54.781e9d3d.js",
    "revision": "196deeea4491aa7fabdc053c10ac15b7"
  },
  {
    "url": "assets/js/55.dd254ac4.js",
    "revision": "8066d8ad58e18bfd02584534e592bb35"
  },
  {
    "url": "assets/js/56.6426fe88.js",
    "revision": "47013c6d757c6d0a6bd0c8208b8ab687"
  },
  {
    "url": "assets/js/57.ddfe019f.js",
    "revision": "d6847afe9208359d084ae6d78513f99e"
  },
  {
    "url": "assets/js/58.36a6a1a3.js",
    "revision": "512e9a59d54983d9558d711d424a54fb"
  },
  {
    "url": "assets/js/59.22b4756c.js",
    "revision": "8ce4da34e7dbfe28f0ba1e0d8cf41a2e"
  },
  {
    "url": "assets/js/6.5abaf83c.js",
    "revision": "db2d65427846c8826b3d87ba3d1b8e47"
  },
  {
    "url": "assets/js/60.b7b9b005.js",
    "revision": "725cffb2aef1d69a57e1264f7ff6ab83"
  },
  {
    "url": "assets/js/61.8b2e8c76.js",
    "revision": "82f216c546a43deb5ec2d9318d1566fc"
  },
  {
    "url": "assets/js/62.5ed2fd28.js",
    "revision": "2e126058f9557a3169302d7d01491141"
  },
  {
    "url": "assets/js/63.f2248fda.js",
    "revision": "b0d97f034071c18c67f8ed203c6a9193"
  },
  {
    "url": "assets/js/64.0ee12c95.js",
    "revision": "6287804221a6265c2bd55732f8901a79"
  },
  {
    "url": "assets/js/65.85041dc5.js",
    "revision": "c830e3028387e801a9411b2b43141174"
  },
  {
    "url": "assets/js/66.68455464.js",
    "revision": "b6267cc79dd74b83daa4b84c5be0be4b"
  },
  {
    "url": "assets/js/67.c41b833b.js",
    "revision": "862804d13034790458e0a84ade441fe0"
  },
  {
    "url": "assets/js/68.02433b2d.js",
    "revision": "d18a8437efa0e7c490dcd608702f6e23"
  },
  {
    "url": "assets/js/69.0e5b0c52.js",
    "revision": "4df014d138e8b79c0786d0382ae3ea03"
  },
  {
    "url": "assets/js/7.ad06d599.js",
    "revision": "51c22886b9bdfe3b9f9a0f081756033d"
  },
  {
    "url": "assets/js/70.399cc801.js",
    "revision": "e748a0346f528b46c37d1854f2b6ebfb"
  },
  {
    "url": "assets/js/71.3b129de6.js",
    "revision": "43c90b9fd0eca5244e7e3da989aa24c3"
  },
  {
    "url": "assets/js/72.d527b1fc.js",
    "revision": "9a17f11d96294bcc3cb8561cb1853dfa"
  },
  {
    "url": "assets/js/73.90c12c19.js",
    "revision": "6f75049c59fedbc4b6f759b02cdff724"
  },
  {
    "url": "assets/js/74.8a35e6cd.js",
    "revision": "05dd4173848621c1b2d4852ec9aba41f"
  },
  {
    "url": "assets/js/75.e022677a.js",
    "revision": "63a1afd1a3265bb583976f684d32a8e1"
  },
  {
    "url": "assets/js/76.8f6b34aa.js",
    "revision": "3d998a945bec02ebd4a9c15835c9ce6d"
  },
  {
    "url": "assets/js/77.dc7a9831.js",
    "revision": "5a5a0dc0538ceda9b30c5dd5e8c8a199"
  },
  {
    "url": "assets/js/78.5a26f1ee.js",
    "revision": "e94c256a637d2bf05aac846553c75e4b"
  },
  {
    "url": "assets/js/79.dc796974.js",
    "revision": "f6ac3ed3a168a9a3a2265f278c7f1862"
  },
  {
    "url": "assets/js/8.e39e474f.js",
    "revision": "a786a46eb359423f1ae65f0f6decf876"
  },
  {
    "url": "assets/js/80.22e9f633.js",
    "revision": "9abfff6d7e72479c85fc54ac2ae14edb"
  },
  {
    "url": "assets/js/81.262ed652.js",
    "revision": "b075fdcf187a1e326944ea1413250ec0"
  },
  {
    "url": "assets/js/82.2d43af2b.js",
    "revision": "8ee8b7715a4f4477b5df4edf6ba29e46"
  },
  {
    "url": "assets/js/83.05a05cee.js",
    "revision": "c39b412a1db55c1396bab5f882271a9a"
  },
  {
    "url": "assets/js/84.1be4a66b.js",
    "revision": "e9ac4f8f3fd5a8558dc0adb3b743919d"
  },
  {
    "url": "assets/js/85.82039a25.js",
    "revision": "87210320815f716bcdec3564f0e4bf93"
  },
  {
    "url": "assets/js/86.316c884e.js",
    "revision": "f67e12930fd709650d7d72d754f8a621"
  },
  {
    "url": "assets/js/87.634c1433.js",
    "revision": "0b195a780a00fc9a998f6da8f044bc1c"
  },
  {
    "url": "assets/js/88.5eeaef98.js",
    "revision": "80b00eb2f0e460ed7e50fe93b8c21b2d"
  },
  {
    "url": "assets/js/9.585d493a.js",
    "revision": "79ace94c97e5951b556c585d33a0f40b"
  },
  {
    "url": "assets/js/app.7eaa3b13.js",
    "revision": "97d60fea7e83888dcb56c7db3dcce3b5"
  },
  {
    "url": "assets/pdf/summer-school/at-summer-school-2021.png",
    "revision": "c81a5e74ae1bdeb77db57e5c8c487f05"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "19c8284c5ddc90252ad0ed3d1310092e"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "5c3f05cc4c16486246a52c1cc3d5d4d9"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "b7ad865f35f60f8fd2ddc198c011ad0a"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "cac2000f3b590a56c062c2b3cc095358"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "cda3b514ba43b7521329174809e43a7f"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "9ee800ec4b0085898cee57438546d12f"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "99eb65660dd32705a3fe67f5283f70d4"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "d0b83f925967df13221248da0f206bf8"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "bcd734ff365b86c788e2c7ab36edca6a"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "fc528c77c4b1841129cdac712c91dda3"
  },
  {
    "url": "courses/index.html",
    "revision": "69250912bac534cd9ce57fdf89fc169c"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "11055d711bbcf7ad343233b006fbc85e"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "ec39c77e5a880ca549d001ec6e1e06b2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "66b1ace2dc6c8e8da488c500d8588267"
  },
  {
    "url": "courses/template/index.html",
    "revision": "3b69cb27c10363a1ad1118bc85148a96"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "0b60e86e40fddd721897b4fb82a8c63d"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "8ee0e9ff0763036991d902a2b95ea6eb"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "94aef3da96eef33bf8f35b10542c7354"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "3931a597b8a2abdf10f84f0bc58c306d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "87872303e81b4342b596383c42567162"
  },
  {
    "url": "index.html",
    "revision": "d82e2af90f54344f58a05b456819d67f"
  },
  {
    "url": "studyathome/about.html",
    "revision": "98d9192530fc64c3191e117692d6d814"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "5cfb1e1e2e01cef3df81baef7ed6d2dc"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "898513525ab1811346928d1e7d6f7cc6"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "602c83b384c3b16b6c0125b85ef94481"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "e6fec75443ddb2d1e6bcb5d2a376992b"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "ec2cb29bc306194e908a642a68aed2b5"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "8acf2c302394ece01ed975f92c1f3762"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "70dfcf6960cabbd609c63b8f2ca13501"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "6d8383da31cec1245ee54f7ae68409e1"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "e6fec75443ddb2d1e6bcb5d2a376992b"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "d8165c13c0fc898077f42fca5300ea6f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "c977d5908a874d558e448dc2a8731800"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "9b19bbc093566407ab6c288b4a9e3a17"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "782c2987d4541db33153ae89093bf17c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "750ba98dcdfd63e6c8b285ff345b90e5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "044d17f8262f977c2580d20d71bef561"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "b7f34a8c136eab7f5499b03a019f8eed"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "2bd2c3ee4d413f6b054ace10121e13b8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "a2a4b114979801794537250011675f20"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "c7c2a6636ee1ed3139249608e38190df"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "78e4ededfaabfa5cf2677cee6b547560"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "8b77cd3c38f325f51eff81fbc47fbd5f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "d3d09eb26e9f487fbb90d20ceea5f69f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "9ca8f343d37bfe1c039b9e603bea857c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "c939a56c0b1e05453298500e6d735b3b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "eb82116a90a23566491ec491ef803b81"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "852fa72d571f435b3c7d97c3db99cace"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "728f5fb7039c10443684fdf49851ea2c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "b25107995030939d1d956fe22366e3d9"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "a4f584626c4edffbf0fcaf295acf8fcb"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "4abff6407181461de8c8a8a77b6f243b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "be15775e34fa4489bf86038bccbd0eda"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "ac0f6d97db9ba51577a9f8c48cb0d994"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "4cdda44c0bfb5bc6b74ecbc0b5877382"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "03290bdba443f816f7b425ca03236229"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "e492506b272f5d3f5ef010c4743302c1"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "6739cae1a44a904abd2f3e93160f6095"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c338964c52df2759ddd85a8f3fddc4a8"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "09a2275601a5afcfb0684de63734a978"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "e73f601dab12ebebf77992fcedb74e94"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "720b8ff7d61f39b28f8b0b9265ed99ad"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "a7bef64d5d784c5c4a848b17dc19ef19"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "4a8c4c52839a91017177544d42e3fcd3"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "0317187a56a5e0cdb0330db704fe6663"
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
