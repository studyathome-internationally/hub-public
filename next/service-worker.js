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
    "revision": "d6776e84beca083fda015ed007feb958"
  },
  {
    "url": "assets/css/0.styles.1c3094dd.css",
    "revision": "9791c2f75cd38b6c079b810346bad6d6"
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
    "url": "assets/js/1.f2f14354.js",
    "revision": "173d53e919f91f0682eaf1efac0c7455"
  },
  {
    "url": "assets/js/10.f01c79b6.js",
    "revision": "e425f8ccd5dde9f50aa03d9d8fdb0118"
  },
  {
    "url": "assets/js/11.2ec7801c.js",
    "revision": "4aafb062c198fd9d5d29ea1fbaf47076"
  },
  {
    "url": "assets/js/12.b3505208.js",
    "revision": "82f916dbe3ce984116402845a41f8ef9"
  },
  {
    "url": "assets/js/13.cd4ee280.js",
    "revision": "9b7f43c9c6c8681b786839946697370b"
  },
  {
    "url": "assets/js/14.b73b5cae.js",
    "revision": "01da9a63d87888b5b7f2241ad1ac25f1"
  },
  {
    "url": "assets/js/15.9318469f.js",
    "revision": "97c6fa6ab159a33f62b4d951c5d32b7c"
  },
  {
    "url": "assets/js/16.77036634.js",
    "revision": "7b640f99582cc16c96283b6dd5665683"
  },
  {
    "url": "assets/js/17.edcdaa06.js",
    "revision": "54bff18cf29d2e33534c3f5a6ce5b79e"
  },
  {
    "url": "assets/js/18.0f2e4085.js",
    "revision": "e4eeb95da81f31c15e1d2d957385d201"
  },
  {
    "url": "assets/js/19.b52fd99d.js",
    "revision": "75abeaa958428e6cb1a99e010ef7c623"
  },
  {
    "url": "assets/js/2.596c9355.js",
    "revision": "ad4ebf7dacb5d94b4df681bb06d19b77"
  },
  {
    "url": "assets/js/20.d80efa5e.js",
    "revision": "8118b11488d7839955bcbdb397051a76"
  },
  {
    "url": "assets/js/21.c0c8c665.js",
    "revision": "d7e9066bce6207120d44beb33abbb41c"
  },
  {
    "url": "assets/js/22.b87b6380.js",
    "revision": "2c038751736f49369296900c39a351f6"
  },
  {
    "url": "assets/js/23.adbb3610.js",
    "revision": "083d54edce8f7598e5efc3fee6b94410"
  },
  {
    "url": "assets/js/24.f27a2e6e.js",
    "revision": "7ee36a2835aa4fe23239cec68778feee"
  },
  {
    "url": "assets/js/25.21a38274.js",
    "revision": "bd330a2cd957b829a430481303808018"
  },
  {
    "url": "assets/js/26.a9f68b6e.js",
    "revision": "a90abf5d72269c19b7922717bf0f3fb7"
  },
  {
    "url": "assets/js/27.9e84ff30.js",
    "revision": "0455f9740ce905eade1492cd15fc1500"
  },
  {
    "url": "assets/js/28.f141ced0.js",
    "revision": "485297472cfd6ed5a5bc3b26a56d2279"
  },
  {
    "url": "assets/js/29.6560e48a.js",
    "revision": "ae237ed403a4ded3aa3a7ed470dc13b2"
  },
  {
    "url": "assets/js/30.f3679b4f.js",
    "revision": "36df5e0af1e9944792b74d6f958a2f99"
  },
  {
    "url": "assets/js/31.19dc25f5.js",
    "revision": "9dd558eec0f2ac5e9e60d5092cc93907"
  },
  {
    "url": "assets/js/32.7bcdafa1.js",
    "revision": "b7ed5c562c5e791c43387b481013c370"
  },
  {
    "url": "assets/js/33.24800341.js",
    "revision": "607c03fbe5fd61c2cd49487247f0f58d"
  },
  {
    "url": "assets/js/34.b5a9458f.js",
    "revision": "95bfd577ba55604a7a9f4bd39ad99384"
  },
  {
    "url": "assets/js/35.49af3fac.js",
    "revision": "c4ea029b833c8630394d363ced774284"
  },
  {
    "url": "assets/js/36.85744082.js",
    "revision": "da9b3225135ed395b9b8da9b1b311a1a"
  },
  {
    "url": "assets/js/37.ff14d741.js",
    "revision": "85146a8c42529fcf3bfec788e04307cd"
  },
  {
    "url": "assets/js/38.61ee18b6.js",
    "revision": "2a2e0b6c95aef0c5954a1951cb664f89"
  },
  {
    "url": "assets/js/39.7470825a.js",
    "revision": "b4304d8595002851bf5811520d0be090"
  },
  {
    "url": "assets/js/4.4b392003.js",
    "revision": "c8c5157ffab2a3ddd7016556f36c1c1b"
  },
  {
    "url": "assets/js/40.6b9bf05d.js",
    "revision": "eaac6f2e77d1ac5c2dd09536cb12ce7a"
  },
  {
    "url": "assets/js/41.8be098b5.js",
    "revision": "ef959eb3d5e31f5805ec22c40f8fd0de"
  },
  {
    "url": "assets/js/42.da7e570a.js",
    "revision": "a999a840833525302596ca8ea9a0adfc"
  },
  {
    "url": "assets/js/43.d05087e2.js",
    "revision": "a3e9fc66f852904982edf084945567fb"
  },
  {
    "url": "assets/js/44.6a627a1d.js",
    "revision": "2e94680b896b73c34c69eb9fbba57737"
  },
  {
    "url": "assets/js/45.209d4e8b.js",
    "revision": "7f6e4493ff6f7ad3d8f75dcc22922755"
  },
  {
    "url": "assets/js/46.858695a7.js",
    "revision": "c72843247cf8516b1f252b988dffacf7"
  },
  {
    "url": "assets/js/47.e09af7d1.js",
    "revision": "0c135488766f1a1b18107a775110fd7d"
  },
  {
    "url": "assets/js/48.98e865d2.js",
    "revision": "2f960d8c1ca9aa335b6161e579995cb4"
  },
  {
    "url": "assets/js/49.5bd5a641.js",
    "revision": "03b3c33b3e89ed599b97d1f90c89cc1e"
  },
  {
    "url": "assets/js/5.fb311ae4.js",
    "revision": "5d200298e07274638b40919dad9788fc"
  },
  {
    "url": "assets/js/50.27f323c0.js",
    "revision": "d825f09edbc29bd3ddf4e90203a65ce3"
  },
  {
    "url": "assets/js/51.e315795c.js",
    "revision": "161db9c0bbd348963d955ba8ebb61303"
  },
  {
    "url": "assets/js/52.33f5cd2c.js",
    "revision": "bc60b29162f202ea9002258ae963de01"
  },
  {
    "url": "assets/js/53.ea87a019.js",
    "revision": "b2de8fa788f3bc3b993be8339df95433"
  },
  {
    "url": "assets/js/54.325ba936.js",
    "revision": "0633a379fc89e06f4e77fe94aa3c124f"
  },
  {
    "url": "assets/js/55.3e00f2c7.js",
    "revision": "3f00e644593c01a5afbfb9e3c080ee42"
  },
  {
    "url": "assets/js/56.75854979.js",
    "revision": "2983438c34192acdf8820ffd614deab7"
  },
  {
    "url": "assets/js/57.392f98dd.js",
    "revision": "26e95399d2943e264fa0235c6a68e0e1"
  },
  {
    "url": "assets/js/58.b2e0f141.js",
    "revision": "edef2b04cfb0d3531a11d95637b17a8d"
  },
  {
    "url": "assets/js/59.fb9246ad.js",
    "revision": "2509db6cff0a563154a718c89ea15463"
  },
  {
    "url": "assets/js/6.d8c0a384.js",
    "revision": "ccfce8adb0eb4d0d32eaf7f082d34d13"
  },
  {
    "url": "assets/js/60.73bb8744.js",
    "revision": "cd5e7535eb3cda1e5e2eef850072193b"
  },
  {
    "url": "assets/js/61.9b37203c.js",
    "revision": "20ae66c438af588f6ad962aec0965277"
  },
  {
    "url": "assets/js/62.76ff2d6d.js",
    "revision": "cc42948af3af294844d20d9067af25b6"
  },
  {
    "url": "assets/js/63.5aed2d3f.js",
    "revision": "724eedbda55a595252a142ab4a2b9223"
  },
  {
    "url": "assets/js/64.7c81b1a1.js",
    "revision": "984589fc874977af7c4c8adbbf040c70"
  },
  {
    "url": "assets/js/65.90cb8405.js",
    "revision": "aea22df72fb4376c94a1b46b6a2e8b3e"
  },
  {
    "url": "assets/js/66.c539a7e1.js",
    "revision": "debde10c552cdafde4ba181dfb964b2d"
  },
  {
    "url": "assets/js/67.b3806062.js",
    "revision": "b6f72b480d8d63a7c5b02ba1eabbca38"
  },
  {
    "url": "assets/js/68.3391abd6.js",
    "revision": "58c3682267f61189ba55fcf2d4561e7e"
  },
  {
    "url": "assets/js/69.f8db7831.js",
    "revision": "92fa96234580fe499bf147a78e7aa802"
  },
  {
    "url": "assets/js/7.770e61f3.js",
    "revision": "8d48e135a00fee778d7d3c29fc08ea34"
  },
  {
    "url": "assets/js/70.adf70474.js",
    "revision": "30127e331c4d482cd24441b1ee1711d2"
  },
  {
    "url": "assets/js/71.b07e6cfb.js",
    "revision": "d18c008becf4c7ec607ebd0660a9561e"
  },
  {
    "url": "assets/js/72.0539db56.js",
    "revision": "5e853864311e99907626a10bbf0fd04a"
  },
  {
    "url": "assets/js/73.6f0c4e35.js",
    "revision": "4ab68e38316ebc08752bfdf64b08bcdc"
  },
  {
    "url": "assets/js/74.d81f2644.js",
    "revision": "64193b52a2dcbc7021468580d1ebdb31"
  },
  {
    "url": "assets/js/75.9833481b.js",
    "revision": "432ca93890647a3a3b846e3efe8a48a1"
  },
  {
    "url": "assets/js/76.be37b3cd.js",
    "revision": "1db992833e35d9e9c417ffb1297f7d71"
  },
  {
    "url": "assets/js/77.3e847e53.js",
    "revision": "245e754c7a678b586e98eb9a9022c0be"
  },
  {
    "url": "assets/js/78.a5961aef.js",
    "revision": "31f6291e7aae3bcf133fd063b1e85e06"
  },
  {
    "url": "assets/js/79.2fd85ff9.js",
    "revision": "33c5ee5783ced025a7ed521b6bb84ff3"
  },
  {
    "url": "assets/js/8.1e34f4cf.js",
    "revision": "bf9fb29b3b9d4f36b6fcd32e90ad3e94"
  },
  {
    "url": "assets/js/80.c3daf852.js",
    "revision": "9983c70993760c476e4f6097b229c1ab"
  },
  {
    "url": "assets/js/81.0908b77d.js",
    "revision": "2e5a1881b3880dacde9854f7be789716"
  },
  {
    "url": "assets/js/82.efc326f3.js",
    "revision": "1000f2481cc3eadec433723f17a72305"
  },
  {
    "url": "assets/js/83.afb3e23e.js",
    "revision": "b71b0f7efed66e23b2e84b92f9d259b7"
  },
  {
    "url": "assets/js/84.e2739e77.js",
    "revision": "a1acf35640965f2288fcb47dd0bc831a"
  },
  {
    "url": "assets/js/85.45c307bf.js",
    "revision": "97a603261cab405be829283adfb7f421"
  },
  {
    "url": "assets/js/86.e830cc4e.js",
    "revision": "eadb236177bb6112875da54d848bf88e"
  },
  {
    "url": "assets/js/87.824b9b90.js",
    "revision": "c963ed8a0ed724d44633998f01b0053c"
  },
  {
    "url": "assets/js/9.0cae8bdb.js",
    "revision": "62ee750418bb92357e83a36e1850e186"
  },
  {
    "url": "assets/js/app.4972017b.js",
    "revision": "9272bb10eac1b08f23e897c47da94e2e"
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
    "revision": "fb175042ac3229491ae2ab8d202c4058"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "863cf84acace58c7ef95885e06972bed"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "de86ef8d37e9ba8b7450783f95f2cb5f"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "68a81b54686232ddb88d03c0bc994ad8"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "ae647da1dcbc1019e01c7005228baa06"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e510e360860c16e534a4827cef831312"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "c7f7f7a934240baf82d87527514e2e14"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "cbf4537689b7b531a5264b8dafda2952"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "290767636320f9a831580f77ba8a378a"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "9c05038094833d9441057a1e2f938243"
  },
  {
    "url": "courses/index.html",
    "revision": "7a1581aa48f756052034efa92490b34b"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "e9564ffd9ee33fa849408c8ba099b0bf"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "7d0350f0c35de7a65813aea288bc2cc2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "630a9c3549e58ee7c864adffaea0a77a"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ac08a66e7cd26944c44b37813595aaae"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "9129a09006f7ca643b21e98ff966c12e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "e3293cec12557a4c8cf1bcf5129a81b9"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "d0326aa3346000e1327cf0bbfc3b5376"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "961f43767f36ad31b167eb9ed2ea9116"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "98ceef6451515f3528197d02cd1f82c0"
  },
  {
    "url": "index.html",
    "revision": "c9c67155b01cb39f5e87cbcc63e7a801"
  },
  {
    "url": "studyathome/about.html",
    "revision": "97d900fa566063fa877a490483cf6f94"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "b70dc02e221274f57d9db7014fc1569c"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "a21c9b89ad77414762caf1af2cd05ecf"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "ed38931cf28700575b28706e167119de"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "e6494ca20ab155803af085feabd504fa"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "501e3cf99a16c36abf4d2184caeec704"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "ad55c8c51f3d4ad868d93e7464d1bfad"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "bc02e3c3d9717396ed86e33ceae2e08a"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "a3017e20e4369b4aee6f3cfb379d0450"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d6776e84beca083fda015ed007feb958"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2889229ae7f62ccf6828ec5bdc3c6676"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "4f5daacde1ce38a546a36f4ec7a0c83e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "b3435757b269dd2dd77a60f207cf329c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "27fdb83b858f2750186ed2f3f50573ea"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "b4e42d4f02978902991c5881e79ef5be"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "910c5eff645e0ec3827eddf736477df7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "eddd3dda74a68a0700c8e3364ffa35b6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "61feb609b7a997ea0f88aa428ab6be49"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "f2713d6a47eee3160136d9cb0b7be398"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "e6494ca20ab155803af085feabd504fa"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "401c92469d16b7d3949ca6a81ee09008"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "16d99e372d2ed641541dabe56baf2444"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "f9a73cdb2399714b97bffcf3ea6ade99"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "d478cb1161e256c2074ad95773403a09"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "4da36b9fedb2efce5b758dd2e84a0eeb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "efa63bc03fb94b48ca351f039d025852"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "470b8b16efb90c546028f0b990be619d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "91ede77026ae1f66b0d92dc7da67f9c8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "ff3ab416904cbb7590b7644082d87b54"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "d4785554dc879707272499424b4075f7"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "9d8231f3d5ed42db384f9f78385dcfca"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "69fceccbeed57dbab0f121efa09dba5b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "f9511436e2a77bb1cf0fe1accdce8c46"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "4a3a3e1c0998c24b92a0ed2b08a13d52"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "614afea944df9e0a7f329c8f1f5544f7"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "91713b07b41609c65ccff295e492940c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "c061cf64238150f987464aab868ad319"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "047b7f0b9d41a531b6d8650e6c46dd07"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "6fa544f8129e4ea27fd63c753573530d"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "cdf141cd7492cb51dbf2679280ee3049"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "78ce3b7361b6b98252e558763bfb4dfb"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "bac2c18317842cd57b81e2b102f5f1ac"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "079247926c74f02596c3d48d789aa242"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "be478ba9ce380c1e7f03d7459c4d1c76"
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
