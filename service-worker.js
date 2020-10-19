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
    "revision": "89b603ff2041c5428ab87cfbe1c1cdac"
  },
  {
    "url": "assets/css/0.styles.1063f873.css",
    "revision": "8b2610efd37f6c17cda737f081c4711e"
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
    "url": "assets/js/19.ed18a04a.js",
    "revision": "61daa3568cb9b7f01776213a6d1eeece"
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
    "url": "assets/js/24.8e5a0c6d.js",
    "revision": "3c7cc0635e7719565f0e160f8a8ecffd"
  },
  {
    "url": "assets/js/25.01f6d6e8.js",
    "revision": "565968aa8513fc65fd43afd1c3025f8c"
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
    "url": "assets/js/29.064d5686.js",
    "revision": "7a633102a806b6ff21865d9b845334a5"
  },
  {
    "url": "assets/js/30.de9b71d9.js",
    "revision": "adf6dba131f45186a50fb5dd600329b9"
  },
  {
    "url": "assets/js/31.b548c395.js",
    "revision": "43e1673fa353fe9b6be91d73edee5ed0"
  },
  {
    "url": "assets/js/32.ffd757a1.js",
    "revision": "84dd4404ce79dfbb053dcf296ee8ab67"
  },
  {
    "url": "assets/js/33.dbd4ae22.js",
    "revision": "56bc1f96c6aeed9124377ebd282967d2"
  },
  {
    "url": "assets/js/34.d962b51c.js",
    "revision": "867b34937fe6d383947e37869308fec2"
  },
  {
    "url": "assets/js/35.04fee306.js",
    "revision": "614255597fd1f5a2e11a3e9f88b1a31f"
  },
  {
    "url": "assets/js/36.de8b4eff.js",
    "revision": "827e820caf118d43d665b01e85d5757b"
  },
  {
    "url": "assets/js/37.6a26251c.js",
    "revision": "8697c83a2791e85497a5339b39d400a6"
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
    "url": "assets/js/54.98975f95.js",
    "revision": "66280b3da138341c16b1792c294f9845"
  },
  {
    "url": "assets/js/55.1475017b.js",
    "revision": "21b469b8a8a1a23b7f6124b2c412f3d2"
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
    "url": "assets/js/6.0b6ca6c1.js",
    "revision": "6520e9a9cc7b35a0f56f974d453fc3e5"
  },
  {
    "url": "assets/js/60.ca0b540d.js",
    "revision": "42e2e86827e42b62bdd5315711114a9b"
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
    "url": "assets/js/78.8d00c1f9.js",
    "revision": "a84041fdc9aa440f709df0d251d7ef24"
  },
  {
    "url": "assets/js/79.dc796974.js",
    "revision": "f6ac3ed3a168a9a3a2265f278c7f1862"
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
    "url": "assets/js/81.4a1a069e.js",
    "revision": "e4d72bbd1ad9670a2754ab825b2d6cc4"
  },
  {
    "url": "assets/js/82.df54def1.js",
    "revision": "6079935c365afcd5503813fadccd7b69"
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
    "url": "assets/js/app.b004644d.js",
    "revision": "f8709a453aab39cc61bc49c7294e7981"
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
    "revision": "0bca72df56e1b390e868b76115373b64"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "2e8c570a38ec1756f0f22aba702ca976"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "529b3329a3112aed431fd972e37f2b66"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "ecb750ecde21f160a142f191eb061aa2"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "00c356e0a383a49d7c59cacdc10fcd72"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "1ec7742fcd39e797ecfa972fe01940a7"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "140a4f2c049958d14085264005b7bc94"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "10a46b2ec85376aca3fdc0febea12c0e"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "dd62eec68b5c12674239bf6e495ba5b1"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "1fea718842b42e258ab81d6b61d292c6"
  },
  {
    "url": "courses/index.html",
    "revision": "552bb0c3da109a149d7faf825787f31b"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "6e160e29ba6e475ce523f715a6063614"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6e3d7b3a01f9182a5e4ab1d205a8f193"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ed7a7c8564ad32e8e14310d64781e4d4"
  },
  {
    "url": "courses/template/index.html",
    "revision": "eafc7e0b648c6bfc089cae92c315332e"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e0fb26431611e48d384ef6bac01b6fd2"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "baf7538b6e31dc5c8cf8c3e30967024d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "b172cc48dc03e1bb479db432c2c84146"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "8c4b9e55d0f73a1357221a650e931d19"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "c491d9c3a681303e3595ae8aae7e9a8b"
  },
  {
    "url": "index.html",
    "revision": "24dc8d2a91b532e09d09be51a019e536"
  },
  {
    "url": "studyathome/about.html",
    "revision": "c170fa58450ffbd4c3bf2804b414ce28"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "767c298b5fb4e2fb22716e2e057a7ce1"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "57b1bc89762c0eff355031e636788bf2"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "745aba35eee58263ec6e1c60375555e5"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "84c5bf035e4c34da64de789ade5552f4"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "c21d79229240bb37fe958d7f29344243"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "02420f86ce27231ead508af859deca09"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "461585e714f6e62c0dd2433bc3be17bf"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "39dcbc4e1feacb02e6affa1c006d55ec"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "84c5bf035e4c34da64de789ade5552f4"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "30b4afd7b331b94d17ea5d353a8d79bd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "6c48b2e0c146244bf5f62a9bce6e09a0"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "076bb94584ab2dc9394f9a716b8b2cb6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "18cb1dbb798c08dea0ea253f3f18ca09"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "eeb8239f43bf975252747009055e36fb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "a78bf909c32163b540d3077bd85d7c96"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "6246e45d04bc92397b51d4c0d160c8dd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "6f1c59544a0a4879467c4838a91ac25c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "74ca699207c7b925852c7adbe4fe24cf"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "e62e0e34a2ada2318e5a0de02ca74dd0"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "1ad6921306dcaa2c229dcf56ec1a7c13"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "426dd4b0a0e802940fe9325056205f81"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "b5f49f79ae56854fd8006635167b4e65"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "987ae77ad505d5cb88fd83394c53edbd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "7819a8c085d35394bd27c1ff50a90db6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "0952ff43caaa4c5ab277899b87edfc8b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "687f5b8f4288690363549a8cb363cea7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "57b64a49f8aaddd0e387bdca309d1249"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "4b87ca4d4997939194ff9aa8db1477e7"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "e5bb67ae83ac7817268a2d848ff63181"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "d257e72c9c7b636446643907b3f37326"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "de88891f1f7cb0ac41687b0b351552aa"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "8a4f496af1658db742b534c1319fe831"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "ed345c017e5c2d5d19b25c26e4cb8430"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "528b24c502ab0a8ffc73ff793878dbfc"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "149b55dfa083883006090d4707942cd8"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "da5482f5de6d9564d81f3f7a238b7a28"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "383d66c7282be898fff8668ab0fe5c66"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "0c70dd02bbeb7afcd07b420e644106da"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "01bd00915718516a7f3a5194c1048981"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "d73994b2bc184ef6f741ac6878d04176"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "ee39a741a3d738e534c5ef237d67805b"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "55a18079e60592922742ab28f55c0cda"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "40897faa164113365583b268e5bc1afa"
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
