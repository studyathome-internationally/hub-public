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
    "revision": "f32faeae5417d8fd96c39271d59c528e"
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
    "url": "assets/js/15.64972788.js",
    "revision": "fa68a5d6f5a1d4e5f9af809e085c3964"
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
    "url": "assets/js/24.dee33a57.js",
    "revision": "02dc64674abc56d8b147998cbb08cb03"
  },
  {
    "url": "assets/js/25.8ca856e1.js",
    "revision": "d8dd1173d4b274c29d59832e587cdd57"
  },
  {
    "url": "assets/js/26.f25499ea.js",
    "revision": "6412b0822be8ea461eecf2cb449beeda"
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
    "url": "assets/js/29.23685313.js",
    "revision": "03e1c7feb3c8b79fe01c4011ce6a2ce9"
  },
  {
    "url": "assets/js/30.56dca113.js",
    "revision": "e6a5754832ec381e486402160a667b7d"
  },
  {
    "url": "assets/js/31.19dc25f5.js",
    "revision": "9dd558eec0f2ac5e9e60d5092cc93907"
  },
  {
    "url": "assets/js/32.53e505ca.js",
    "revision": "832a020ca9a665eb61f5a8dcee839767"
  },
  {
    "url": "assets/js/33.7c8889c9.js",
    "revision": "f675bf73253d9e27c8db99339efd5abe"
  },
  {
    "url": "assets/js/34.1accf8bc.js",
    "revision": "2f58c21993401a25050f5a5bed964c9b"
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
    "url": "assets/js/37.edfabc83.js",
    "revision": "1cac7be3fd1f3e265eeddd46aceba6ca"
  },
  {
    "url": "assets/js/38.11603489.js",
    "revision": "5045e97e9fc452ea74f39b4feca730cb"
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
    "url": "assets/js/41.94c1e72f.js",
    "revision": "49ad135fb3663b75a228af574f95f8ff"
  },
  {
    "url": "assets/js/42.d7dec766.js",
    "revision": "dc507d358593b9dd4db17b7b1672adc9"
  },
  {
    "url": "assets/js/43.2e682f86.js",
    "revision": "ac0a3b002cb1f8acb876dd2615fcb0a7"
  },
  {
    "url": "assets/js/44.b5b8aad3.js",
    "revision": "89c0d7043898179ba4cbe9b3747bb6c1"
  },
  {
    "url": "assets/js/45.2b46e759.js",
    "revision": "ee329492ebe60a31ae6d6a3e1e98ef30"
  },
  {
    "url": "assets/js/46.384df833.js",
    "revision": "6ddaea50be82892677f0363a71ef6e11"
  },
  {
    "url": "assets/js/47.c9db6e6a.js",
    "revision": "fe915930bf38ca5ae3ec572a151aadc0"
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
    "url": "assets/js/72.0539db56.js",
    "revision": "5e853864311e99907626a10bbf0fd04a"
  },
  {
    "url": "assets/js/73.6f0c4e35.js",
    "revision": "4ab68e38316ebc08752bfdf64b08bcdc"
  },
  {
    "url": "assets/js/74.6be0ee3f.js",
    "revision": "1f96b95fbcab59be7230a46219296003"
  },
  {
    "url": "assets/js/75.695b0585.js",
    "revision": "46c4a6c6943c78d5f8a44213b4a15451"
  },
  {
    "url": "assets/js/76.85959a1d.js",
    "revision": "1a92f2257c8f9cc4a2cecf3b4dae95c9"
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
    "url": "assets/js/8.7c2802a7.js",
    "revision": "96d1f02f6d2e9179ebc2158a31edacb5"
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
    "url": "assets/js/app.cbed27be.js",
    "revision": "90e8b980c479b9dbcbdb7ae28444094d"
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
    "revision": "dbddbf8ec1859bdbd489f22fdfa17869"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "78645ec10c0c7339c7aaf0b49760533c"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "6852e51da27a1268c91699eb3fb0c11e"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "e03cf385c529e59ce165b3b276c04a76"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "cecbf2d7a335109a3ff38543045e71fa"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "ac485520ecd4b6947776577071fed04e"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "b245aa8f6a6691b1e7522cd73786ff53"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "75423d8cabc1b5fea85e13d07133833a"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "e6f875406d23286c89767da8c768d892"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "3e8eaa00e0cd9b3dbb2507964dd640d5"
  },
  {
    "url": "courses/index.html",
    "revision": "440853759d19c458751bf1011d44581a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f3b4db40e94c27ab97097382c1e2cba0"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "3d56efe3db024eed4ab78cb56d53b5d6"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "e4596d9e89dc6ebcbe9ee9ac1e219207"
  },
  {
    "url": "courses/template/index.html",
    "revision": "45cb8c678d1239742b899cce1a724572"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d9acc5b285ab71324ba5f3e68df2a3ea"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "db6fc5b73b4c28947e7a2eefe0b9965d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "ab50e47ad046100a4a0412c0c785cbe8"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "05ff7694a8eb26739db980d4a6da309e"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "79ccb667c076c45f7e6326ecc3f44968"
  },
  {
    "url": "index.html",
    "revision": "07d4ae29531ef8050864726ebd34d518"
  },
  {
    "url": "studyathome/about.html",
    "revision": "33c1eba428bbe85ea2b4e9e486932390"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "f62bd7dbb11a06b9742c50c23bd6dd7a"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "355bc3066ede8831b959365f156bca30"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "6a7c7c99fe4200a9d465abda315e25d7"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "c70f01a95909a95d08e4f9d2c5b382b5"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d2aeb95de98c2bc690b7d76505a91e33"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "b6546a11a985531d13ac481608cfee5a"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "13002355c9e17c3b67336a1cbe279612"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "1d1ccd0b66dda3d8d5dec0a0fa2c8e59"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "c70f01a95909a95d08e4f9d2c5b382b5"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "88b80f38a39a5083dd088e9ccc447c82"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "4c50a36633ab3fea7b58d841d5c9f676"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "4f3402a0079648d8218497ede5154713"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "ac33c2aa1af1a4e7cebb3fd6d64a30a5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "d25e7d4bfd1c02732a0660c554cd6237"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "d579dc98a53c21613e0563fed54698fd"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "a1f627b7f880ee0e680245dd6cadc5cb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "4fab493b9bafab9173ae83c7186abefa"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "7481c2190316bac0aad99466aeebff78"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "42b9ed5dd01fc4a56ef50f93a2dc74fc"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "064a0ee0ed4a6047822eca72884d475d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "65d5908c932443311b8d526078b17b65"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "6aa3db81baa45daffe17bd1dc785b242"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "bf8af006d8dfe3b3aab69f6983e61d89"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "f00853e352d8dfd26eecd1829217566f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "d50597b008f6ff62dbbdbf00cc6d54a5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "70f3463b5ad44b5c3b6ed735f8da73da"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "e99930964947f7d2c1c39b280694defe"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "3961b8fd9041519c965a81cd3e458748"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "42b9ed5dd01fc4a56ef50f93a2dc74fc"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "5082db147bcf2000782356982abceb02"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "0a153ff1f61ccc10d16a4d8c61c2f5e2"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "a84de76259cd5187bc45d080898445f2"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "87624e0470f295b8322531d885c23218"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "dc33f4c51c994adafaee69c0e1466df3"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "6d212f480ec79be2b143721f733bcc05"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "605e866ae5c9939d2ebef8e453eaa9c8"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "fe7ad58e756ab0b9c2f32cc8185b14bf"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "5e5ef304a11ec14498038abf3304bf6c"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "0737911cefbf9944cef256e80eeecc31"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "20d9d9c3971dbae820ada3af326700b3"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "4fa134bda937c1e05ea7141bb67764d5"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "3a5b73ec3c91615d67dfde1649c35dd5"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "a046ee6eaabbedc905794aa5b10bcdac"
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
