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
    "revision": "00c9ab2a925bb4e6fef6d7ca52684ac2"
  },
  {
    "url": "assets/css/0.styles.3a416177.css",
    "revision": "28d4f3e16595da1ffde41502539157c7"
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
    "url": "assets/js/19.079c01d2.js",
    "revision": "107ab1b89b9d0b55613a57f36b357936"
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
    "url": "assets/js/24.db15943c.js",
    "revision": "88fbb666cff531f24c5709a5bb4aef53"
  },
  {
    "url": "assets/js/25.6dfa9882.js",
    "revision": "1bef182b8ee98a180318fabd691cf1b3"
  },
  {
    "url": "assets/js/26.a4ef4f6b.js",
    "revision": "6d086ac891b1e3f41f128b4fdd553748"
  },
  {
    "url": "assets/js/27.42bfa2ac.js",
    "revision": "e6dc08c8e730eccd9a38070296060ee1"
  },
  {
    "url": "assets/js/28.c9e175db.js",
    "revision": "bdeb4a36926dfbc6f4e078f5471cc6fa"
  },
  {
    "url": "assets/js/29.ab5ec421.js",
    "revision": "7fbd80ffae8f3c64524e938349774e36"
  },
  {
    "url": "assets/js/30.2963d3a2.js",
    "revision": "74fb2490e9d9b362e3af80f13aa81f3d"
  },
  {
    "url": "assets/js/31.213b1d47.js",
    "revision": "5b1ea6d514a7c5db2141ba8d21ee2ddc"
  },
  {
    "url": "assets/js/32.a5a0c903.js",
    "revision": "255ea8c805d2af418f924bea4ed33373"
  },
  {
    "url": "assets/js/33.fcdd4e20.js",
    "revision": "005c093d518be354a8cf863c368e262c"
  },
  {
    "url": "assets/js/34.5e9d8851.js",
    "revision": "ba297dda74939029899541a5b1f434d1"
  },
  {
    "url": "assets/js/35.04fee306.js",
    "revision": "614255597fd1f5a2e11a3e9f88b1a31f"
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
    "url": "assets/js/38.66e4feaf.js",
    "revision": "dd322468ae730462cb240a1837f6c070"
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
    "url": "assets/js/43.11493025.js",
    "revision": "2afe7b321fb4c637abb65f647442ff1e"
  },
  {
    "url": "assets/js/44.f44a970f.js",
    "revision": "ad6c83de7806e7ffcb33f1b0a9ca9abd"
  },
  {
    "url": "assets/js/45.92315ab4.js",
    "revision": "0c64909944e67a1f8993fa89d98e3d1d"
  },
  {
    "url": "assets/js/46.00b30f6f.js",
    "revision": "02ddaf1be837e790bbe3e9ec3a94dbff"
  },
  {
    "url": "assets/js/47.131144ca.js",
    "revision": "abe154f30b9755f3e81d14298932ae25"
  },
  {
    "url": "assets/js/48.2167e58d.js",
    "revision": "45c897b731bc530df8d1f81697cd1435"
  },
  {
    "url": "assets/js/49.41d7b6c4.js",
    "revision": "d6c59ad775ae09bdb0bc704b4655f22d"
  },
  {
    "url": "assets/js/5.d22f47d3.js",
    "revision": "ec0f2692ca7c5853bd6e3e7dd652e97a"
  },
  {
    "url": "assets/js/50.250f9a63.js",
    "revision": "bcafd9f50759c6cc30178ffc58ea6030"
  },
  {
    "url": "assets/js/51.5df51213.js",
    "revision": "0fea2a9e937172fc51b1aeba1f4b8344"
  },
  {
    "url": "assets/js/52.ed466f69.js",
    "revision": "c7f3010a74aa250455e7901f7be6b099"
  },
  {
    "url": "assets/js/53.7ab690e1.js",
    "revision": "ae7c82ca3eda41623c1358358968bc17"
  },
  {
    "url": "assets/js/54.c2b08d06.js",
    "revision": "84639464909e2ea289439aeadccdcdba"
  },
  {
    "url": "assets/js/55.dd254ac4.js",
    "revision": "8066d8ad58e18bfd02584534e592bb35"
  },
  {
    "url": "assets/js/56.047054b1.js",
    "revision": "9efb4a43b457098e653f3cf41ffe5888"
  },
  {
    "url": "assets/js/57.0bf807a4.js",
    "revision": "3aa0a62ae711aac8aa52a169064dcb76"
  },
  {
    "url": "assets/js/58.cbf32844.js",
    "revision": "4640deecae5ce788924a21be7703f1c7"
  },
  {
    "url": "assets/js/59.83c6c67a.js",
    "revision": "55f99cafe48f7cda0fae193b88d56168"
  },
  {
    "url": "assets/js/6.5abaf83c.js",
    "revision": "db2d65427846c8826b3d87ba3d1b8e47"
  },
  {
    "url": "assets/js/60.8265898d.js",
    "revision": "b625636302dc1b2e29f9f58d8f4c7e3b"
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
    "url": "assets/js/64.0450e34e.js",
    "revision": "c26847704039964ba1b681497ef94e5d"
  },
  {
    "url": "assets/js/65.8dae75c9.js",
    "revision": "cf2a0e3cefedb86d9b5aa379127f45ea"
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
    "url": "assets/js/72.d691f5c7.js",
    "revision": "52800908a701c9a6a18419a94428b22e"
  },
  {
    "url": "assets/js/73.1785b961.js",
    "revision": "a8f229009d04088ed19deaac8d3412d1"
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
    "url": "assets/js/77.24ed2a84.js",
    "revision": "6dc4c0a1d7e1a6b0c7c441276e03dd1f"
  },
  {
    "url": "assets/js/78.4b456c51.js",
    "revision": "8f4f0e2ef016a2a64efe3b436a161ed2"
  },
  {
    "url": "assets/js/79.d4e232ed.js",
    "revision": "561cf710a4608228d565ea7b99680e34"
  },
  {
    "url": "assets/js/8.59169292.js",
    "revision": "5d8b023082c8fba89d37f1611e1f93f2"
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
    "url": "assets/js/83.b2667799.js",
    "revision": "88c4a88df159b1f8cf9ceed33e1bd7ed"
  },
  {
    "url": "assets/js/84.1be4a66b.js",
    "revision": "e9ac4f8f3fd5a8558dc0adb3b743919d"
  },
  {
    "url": "assets/js/85.5575982a.js",
    "revision": "d6ef27e1f783467946aca2d17ebefa5c"
  },
  {
    "url": "assets/js/86.8ad1c6a2.js",
    "revision": "b78bad8ecd8e4564ac24afa2e6ac0e6b"
  },
  {
    "url": "assets/js/87.ce34c6b4.js",
    "revision": "a42b85cae2c768109e7d024fdd1e714d"
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
    "url": "assets/js/app.c0797776.js",
    "revision": "9d9d45b1f08d64e60ffb4ad541507283"
  },
  {
    "url": "assets/pdf/summer-school/at-summer-school-2021.png",
    "revision": "c81a5e74ae1bdeb77db57e5c8c487f05"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6b9979df4aa892eb5cb40f260d085130"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "67bed89567895271bee0c7f17e07c071"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "74b3e0cb1da2d47b41ca6f3ffd6521f3"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "9476f18547205a1c826bbf75e358089b"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "6a34b9af0047a8f3a83216540ea3419e"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "5fd829d54460fdda1aecc21655db4217"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "49f109220f8dee93e1f2fa3909fe3919"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "13d3c9854ae4e3819ac3aea090e6435a"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "28cd401f139820a171de9751aa5ff7ce"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "01dcefbd34bd41ac624c454f2d624418"
  },
  {
    "url": "courses/index.html",
    "revision": "0df952bd4733280f614933e74c56d8e7"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "068b440afeffc545cbb247f894cc27b1"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6349c774ebba78c83b2b73038320cb77"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "9ca4611205ceae9d30f65f38d4223cb2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "0fdd994343126f21e160e8e1145bf4ef"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e06019453a0a13737b90fe6ffab40239"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "4ee3a13cbad334f881e2a1604fee5e4e"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "84ba4dc5bfebcd1db968b46eb0401ed6"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "9c21210a19fd9b9828129a4031f305f7"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "ab8ee77bac165a87d12dc4f85f87a11e"
  },
  {
    "url": "index.html",
    "revision": "eebd35c8f89d39ad18f72690ca9b78fd"
  },
  {
    "url": "studyathome/about.html",
    "revision": "40e102b927d540223cc9b8dc290ddea8"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "487988ee0f4bed7baf4615dc7d644bd2"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "881b065fdaf6f4eaced026a0126d565f"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "fc4d185b56d52fd09da87396b5341bd4"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "00c9ab2a925bb4e6fef6d7ca52684ac2"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "6376774b0e78f99664f74cd419216170"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "1092b87237d87d832dd8b8c9efab15a7"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "27df80e248090896e662732c948c7be3"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "637eaffce23eb6058b91330b13d4a793"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "b23d212f6ae0944676900861dc1fac7d"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2040a158da5d043573c57b4e1d0f5137"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "4d60522e291ed7d63852e554cdc8fa4d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "7df856f7754ee057d36540a1d3af2ef7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "5b645f1efcd981d00b54bd70818aa964"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "405c0935a22c0b4c25b38c9c0fb68aa9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "be9ab61822170bab1d4b697590174c87"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "c39e987d08c95d3d5760d545429861b9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "a02874b2a8dafa7f49f75bc35a1b18a2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "326107d6d97b40646e6455957b8e2f62"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "b23d212f6ae0944676900861dc1fac7d"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "93723378bc3f932b0a9d32451f4331a8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "c01d819abf3685f6eadc9c29743d1813"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "ffc9d136a14764c92631757ab13f20ea"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "f053b79c0520f934989edf79b914e223"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "0dfa2fe1e3603133baeca81d640070e1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "88487a0bee190ecdb758d880b52425a8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "b70bb0414f4c3cd76cd38c2e8509e11e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "392658212a97ddb8f457ce9bc12574a8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "0e9e1e46c56fc8fd3b12199f46a16d3c"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "c097463b7e1c88b0b8b7d667247c1eb9"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "8fdb6ffeb0f88dfa77aedd71d3ad18a8"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "91a8b135060171b9ed4649a061b457a4"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "8bb17d514bb081d4f81cc48635104c90"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "53af707e870ebd64719c3d587f2c2b65"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "037f33b15254d2d1b170c6af45c30637"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "deef91ee979f51c036d509aa47f9f5f3"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "d3b67731ead88025bb4369acd50087f7"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "268ae3f93159d44704d8958053d1a8bc"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "3dc201b2847675c6aa2bc13dc718a144"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "17d14b64259f41a55d2cbe2ead6a4fc5"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "cb50b44966487b2be3ef2c0301e997d6"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "93a0c49434942e6b020f11ffddd75e0f"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "10a1ebca7ef56f22bad13d85c4d0522e"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "24267e37a0c2c3152b1c7b8b17b63399"
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
