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
    "revision": "1629924063edf503f07eb09220c062b0"
  },
  {
    "url": "assets/css/0.styles.6d1fad0f.css",
    "revision": "ba6c786c5e260b9e8b6b7adb9968aae5"
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
    "url": "assets/js/24.0f3a2063.js",
    "revision": "8be9230ff676e07e4e163f414d48697f"
  },
  {
    "url": "assets/js/25.8ca856e1.js",
    "revision": "d8dd1173d4b274c29d59832e587cdd57"
  },
  {
    "url": "assets/js/26.947d2c9d.js",
    "revision": "663909422cc6e84cda896776962e4d84"
  },
  {
    "url": "assets/js/27.9e84ff30.js",
    "revision": "0455f9740ce905eade1492cd15fc1500"
  },
  {
    "url": "assets/js/28.9d79268e.js",
    "revision": "2ac6675902ec5d04caae9449a516f8c2"
  },
  {
    "url": "assets/js/29.2b7ec365.js",
    "revision": "a9d8ca4eb8325f8b402652617374b8ae"
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
    "url": "assets/js/32.56824c54.js",
    "revision": "6be5d824baa154a8f29a3fd5f1478a31"
  },
  {
    "url": "assets/js/33.fba72eaa.js",
    "revision": "8a19eff055870d2e8e0d53af9ddc9027"
  },
  {
    "url": "assets/js/34.6ab064a6.js",
    "revision": "d0bdcc8d8679541be8068b4312a276b0"
  },
  {
    "url": "assets/js/35.7fdf7f1e.js",
    "revision": "c94feec24243024b160ab5f671d4885f"
  },
  {
    "url": "assets/js/36.85744082.js",
    "revision": "da9b3225135ed395b9b8da9b1b311a1a"
  },
  {
    "url": "assets/js/37.dd9c926f.js",
    "revision": "ebf6da55cfd0b073006f1f627a652fdf"
  },
  {
    "url": "assets/js/38.11603489.js",
    "revision": "5045e97e9fc452ea74f39b4feca730cb"
  },
  {
    "url": "assets/js/39.a56ba39f.js",
    "revision": "f8ea71f95f4f4f41500a8f93528d6fd0"
  },
  {
    "url": "assets/js/4.4b392003.js",
    "revision": "c8c5157ffab2a3ddd7016556f36c1c1b"
  },
  {
    "url": "assets/js/40.9edf5b6e.js",
    "revision": "286c937be6923423fdac411fa252a2d9"
  },
  {
    "url": "assets/js/41.3ad8f8df.js",
    "revision": "6cc4db222ff5bef85be93cd867146011"
  },
  {
    "url": "assets/js/42.079bffad.js",
    "revision": "d8359993f7251e330428515a3e6b442e"
  },
  {
    "url": "assets/js/43.d05087e2.js",
    "revision": "a3e9fc66f852904982edf084945567fb"
  },
  {
    "url": "assets/js/44.e911671b.js",
    "revision": "84550719357fe546ed5034b972fd55a5"
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
    "url": "assets/js/47.c9db6e6a.js",
    "revision": "fe915930bf38ca5ae3ec572a151aadc0"
  },
  {
    "url": "assets/js/48.fec3a75e.js",
    "revision": "6e3b4dc2a93d829adf2847abf88c5fea"
  },
  {
    "url": "assets/js/49.6efe4d35.js",
    "revision": "d0964407d036b96342333fe346dc7671"
  },
  {
    "url": "assets/js/5.fb311ae4.js",
    "revision": "5d200298e07274638b40919dad9788fc"
  },
  {
    "url": "assets/js/50.3e6eaa17.js",
    "revision": "4a91c3dca67cea31984100b194deb09d"
  },
  {
    "url": "assets/js/51.420e3ffd.js",
    "revision": "2039cb137304abced109e325bd665f6e"
  },
  {
    "url": "assets/js/52.52ea3c23.js",
    "revision": "c11e20c2791a0c57f4965e23bfb7b2f1"
  },
  {
    "url": "assets/js/53.d32dd07c.js",
    "revision": "985cf8df4bf6566437a7a09261056ad9"
  },
  {
    "url": "assets/js/54.325ba936.js",
    "revision": "0633a379fc89e06f4e77fe94aa3c124f"
  },
  {
    "url": "assets/js/55.dcb878cc.js",
    "revision": "18ef7db55189b2e550f36b592d122e49"
  },
  {
    "url": "assets/js/56.5377233a.js",
    "revision": "7ec0cb61c4b832c6aff66dab27dbb323"
  },
  {
    "url": "assets/js/57.8026bfe9.js",
    "revision": "bbda1291d80e59cfd477760396be28b7"
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
    "url": "assets/js/60.eb59812f.js",
    "revision": "d4b69401691e0d6a101808aca0a0963b"
  },
  {
    "url": "assets/js/61.1b8d5eed.js",
    "revision": "87d5805e1d8eb8a55d123a911ea04cf1"
  },
  {
    "url": "assets/js/62.b95eb8bb.js",
    "revision": "0b29a3aa5fd9d731a624b0d98f45b271"
  },
  {
    "url": "assets/js/63.ab505426.js",
    "revision": "f2af0d83547e0fd41d424fc1758a230c"
  },
  {
    "url": "assets/js/64.8a01d64d.js",
    "revision": "123cc73f238c19237804cdf3ef99b42c"
  },
  {
    "url": "assets/js/65.cdcb66dd.js",
    "revision": "a894651fe62371e74e206fcfdba003bf"
  },
  {
    "url": "assets/js/66.f8cab8ac.js",
    "revision": "588854be8de41ff102c89a5d5a4f892c"
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
    "url": "assets/js/72.24f83aab.js",
    "revision": "7ba5903e47e3e3dd341db1f07e4357c3"
  },
  {
    "url": "assets/js/73.625487a3.js",
    "revision": "67e43cf70892304b225cd117ec270417"
  },
  {
    "url": "assets/js/74.a7353eca.js",
    "revision": "4be027d127628d9dbaa94290c4a24722"
  },
  {
    "url": "assets/js/75.cec4a42c.js",
    "revision": "09756eb6c0931db8a38fcaad1e97fc4d"
  },
  {
    "url": "assets/js/76.72fce8ba.js",
    "revision": "63a9f02089487cf35cd5e370ceff10ec"
  },
  {
    "url": "assets/js/77.5ff903d9.js",
    "revision": "50bb443807fda0d0d1d5d5e7c4c5d97e"
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
    "url": "assets/js/8.717f12c5.js",
    "revision": "651874e960658f52cc01746434028e0c"
  },
  {
    "url": "assets/js/80.c3daf852.js",
    "revision": "9983c70993760c476e4f6097b229c1ab"
  },
  {
    "url": "assets/js/81.4169aa3d.js",
    "revision": "aea1feb352d9b63f2b5bc9ae27bed630"
  },
  {
    "url": "assets/js/82.ca51b7c9.js",
    "revision": "60f435363d53cc29909db92ceec37d15"
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
    "url": "assets/js/app.3ffff88f.js",
    "revision": "d121eb969b5ebea591013630f424aa3d"
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
    "revision": "7c79df7d1f20d7f454dfec4d375a4535"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "132af97303c06df976c3911fd4165782"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "d4ec6e5a3b16305c66cb79122a4027b7"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "426f89ccaa9805d1539eb8ef608ca1cb"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "7aa577a948135a9dfd4a205a16aef234"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "bf4253a2b44805c0d6b5454b2e597b41"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "42383b06a606083bae54d1fa3b0abc6b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "17d4aa16df1bf84c1cc5f3e9e6d413e9"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "5cb298fdb23a197de589046782d5d7a6"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "02d51da0691b67fb2ebfad26aa894b46"
  },
  {
    "url": "courses/index.html",
    "revision": "611f7cb2c9ebc2b480764c936781624e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8baec2e834f2391ec0f9343de970732a"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "7d5a0dbee86662796925bed2cc30737f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "604def0d494d96ff17a44a2ea8d1b854"
  },
  {
    "url": "courses/template/index.html",
    "revision": "83fa1afe7c8f0100adfd491991670bd1"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "413315259021e8fae176a40045c1f0fb"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "c6d4dbb1aa2914b7124f44022b0cecc5"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "ae4eadd23d720fb78ecf038b415ba3f7"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "30e8cd238f4af3bd00f0cf94aac57a4b"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "1588b14b33ae7c23b5a76c02c3d79ed5"
  },
  {
    "url": "index.html",
    "revision": "a7420d3e3ff3096a515e00d972e9832e"
  },
  {
    "url": "studyathome/about.html",
    "revision": "dbfca7eacda2c6fa05450b393152bf04"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "0ec9c129665afa1a5d2d3988b9df5b66"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "7b8faea5c1d443201d34aa47b7cb7a77"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "a4297b981aba78729b1a88203316eea4"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "1629924063edf503f07eb09220c062b0"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a8837ffbcc3f996397fd0bc2823d2749"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "9e174168a45c42eea1c0d466f5c71b43"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "e5c8d9b5b89b125a198e9e851bbfdc62"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "4b335b57924b1952050a8372d9cb710d"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "1629924063edf503f07eb09220c062b0"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "e15c85a93a1254f5c32678da2fe0349e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "1364aa81ef60bce43f40a4554c4effd5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "b0fc325a4f2c58e7fb1e2bccfe36d2c7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "45acf78b6a5c678c948188ace6914a9f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "27c6530baac884367e22595e0044bff1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "62fa3f3fa46a1b4ebfd793d5bd217a6e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "5dac1202a19303ffaa18aef1c2469652"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "34b94624929908cd89f1629522d5b7cc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "6e9fe9bd55fe3e02fe7ad30c175c455e"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "1629924063edf503f07eb09220c062b0"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "4cd86866ae20c44ee2d54d7630450674"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "453fafed80da093c052d64a7bcbf6d4e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "e2154cb49151c717777e099d339f15de"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "99373ae6a2e5788edf833801937b3b18"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "e692b07967249125debaf737d5a40da4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "63fc6dc1d3a5f3d52eb29b30a94878d8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "cc3980f40ad3d8f42608c36a0323cd66"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "cf01db1b76122c3a9d78bf045f60a51e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "4f28f6bc789bfea59588d26a23a95ad5"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "1629924063edf503f07eb09220c062b0"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "d2d50e11869dcf1c3a982f835bec0a1c"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "7596bc78952053a7343306216a939f36"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "9be82b326e46fe8f6aaf89cb028d61d6"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "251f415b04839c7201370d22fe4786e3"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "262e008b39f32cc41be9f62673a1e5cf"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "9b15fd4635e0e9b9aa2de708585213c8"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "2b1fdadc0f761b28a5c9548e525ea8e0"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "ff5dae01c9915a15a8e31b65f9ab0dab"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "aa60a4d8b40243813576f7fa8bc616b6"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "bce1496cc6b075a3efe42d7151a68439"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "917fffdc39f7bd97299cc9cc5bc880e5"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "140e94426008b3db71558f864f978a7a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "3c8399328189093b481fff7fa9325c55"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "aec0880e5b70c4cf44e6bc3682579339"
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
