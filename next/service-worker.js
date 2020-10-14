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
    "revision": "524e88802def8a40516a89f1d9c15a35"
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
    "url": "assets/img/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
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
    "url": "assets/js/15.d394bb41.js",
    "revision": "30ffbf333e2c6df792b93a7e9bedff05"
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
    "url": "assets/js/23.a961a197.js",
    "revision": "9970c658933d34707a085151b0ee31b1"
  },
  {
    "url": "assets/js/24.aed68a85.js",
    "revision": "d6811e4474a42798d352c5681df373e6"
  },
  {
    "url": "assets/js/25.9960b488.js",
    "revision": "11567190a7e15cbada7e9d9cbc5baa17"
  },
  {
    "url": "assets/js/26.ff92af32.js",
    "revision": "72e9d7f695856371f0ecb19db08fed5d"
  },
  {
    "url": "assets/js/27.9e84ff30.js",
    "revision": "0455f9740ce905eade1492cd15fc1500"
  },
  {
    "url": "assets/js/28.550bf4f4.js",
    "revision": "4cf3f41a318f2893cfb9b470d5364ea4"
  },
  {
    "url": "assets/js/29.e66c8496.js",
    "revision": "0db2ec19b65139c37aa21a980487b4db"
  },
  {
    "url": "assets/js/30.64fd1d0c.js",
    "revision": "ba884c04cb1046b529220672205fcac6"
  },
  {
    "url": "assets/js/31.0fde8589.js",
    "revision": "dcd72d6595e57dfdbed6b410bfde0ceb"
  },
  {
    "url": "assets/js/32.56824c54.js",
    "revision": "6be5d824baa154a8f29a3fd5f1478a31"
  },
  {
    "url": "assets/js/33.24800341.js",
    "revision": "607c03fbe5fd61c2cd49487247f0f58d"
  },
  {
    "url": "assets/js/34.6ab064a6.js",
    "revision": "d0bdcc8d8679541be8068b4312a276b0"
  },
  {
    "url": "assets/js/35.49af3fac.js",
    "revision": "c4ea029b833c8630394d363ced774284"
  },
  {
    "url": "assets/js/36.28314eb6.js",
    "revision": "0478d0a082427b57724f57cdcf493b84"
  },
  {
    "url": "assets/js/37.72bd95f5.js",
    "revision": "5e6a20724edc5db5de8e973ccd73fb6c"
  },
  {
    "url": "assets/js/38.4b41b1f1.js",
    "revision": "9c55890a1675a1e89405d40633c44896"
  },
  {
    "url": "assets/js/39.0b94748f.js",
    "revision": "5445b6671241c33572bcc8697f2240aa"
  },
  {
    "url": "assets/js/4.4b392003.js",
    "revision": "c8c5157ffab2a3ddd7016556f36c1c1b"
  },
  {
    "url": "assets/js/40.8825131f.js",
    "revision": "df73d3a612a34761ccca8441903c74d3"
  },
  {
    "url": "assets/js/41.8be098b5.js",
    "revision": "ef959eb3d5e31f5805ec22c40f8fd0de"
  },
  {
    "url": "assets/js/42.7bed4981.js",
    "revision": "f04f819e6eb8793806768402a835e577"
  },
  {
    "url": "assets/js/43.2ab5ae46.js",
    "revision": "4b0912d7fdff5f32801af67727a89434"
  },
  {
    "url": "assets/js/44.ab3a0618.js",
    "revision": "9d0b03fc713d0b598ca5d0abf1e670b3"
  },
  {
    "url": "assets/js/45.2b46e759.js",
    "revision": "ee329492ebe60a31ae6d6a3e1e98ef30"
  },
  {
    "url": "assets/js/46.419f4da7.js",
    "revision": "b4ffe6629a68842cf4bb41c468914d08"
  },
  {
    "url": "assets/js/47.2cd29c05.js",
    "revision": "157d61376f1da8c246a7fd330c37a111"
  },
  {
    "url": "assets/js/48.781d4fad.js",
    "revision": "4c5c8002b03195366239165ec5f500a7"
  },
  {
    "url": "assets/js/49.d83b29ed.js",
    "revision": "7c8c18a0dfa160205f4301adf1fc55ea"
  },
  {
    "url": "assets/js/5.fb311ae4.js",
    "revision": "5d200298e07274638b40919dad9788fc"
  },
  {
    "url": "assets/js/50.fe9415f4.js",
    "revision": "1bd018beba9419abab6d94d684e12ef2"
  },
  {
    "url": "assets/js/51.420e3ffd.js",
    "revision": "2039cb137304abced109e325bd665f6e"
  },
  {
    "url": "assets/js/52.8d63b95f.js",
    "revision": "d76544817e980735743d038d3954c57d"
  },
  {
    "url": "assets/js/53.d80b03f8.js",
    "revision": "325a59eac23dd98fede6e9b88246eb85"
  },
  {
    "url": "assets/js/54.57926e7b.js",
    "revision": "ab346f14ebe9ff4a71438c29873b8356"
  },
  {
    "url": "assets/js/55.d14a3da9.js",
    "revision": "f2f4ea0d9c25e886dd444000eb3c85f3"
  },
  {
    "url": "assets/js/56.e7bb36cc.js",
    "revision": "57138e8654dbdf6100fdfd1934008af5"
  },
  {
    "url": "assets/js/57.7e56ebc7.js",
    "revision": "41ac6ddff3b121039b0c83327f52171a"
  },
  {
    "url": "assets/js/58.610455c8.js",
    "revision": "6f12f892d6dd2f8285837fbfa6dd8206"
  },
  {
    "url": "assets/js/59.240736d7.js",
    "revision": "8814d524ddd56125adb76287e411a83d"
  },
  {
    "url": "assets/js/6.d8c0a384.js",
    "revision": "ccfce8adb0eb4d0d32eaf7f082d34d13"
  },
  {
    "url": "assets/js/60.0246826c.js",
    "revision": "e01a429cff15796327222d77d9fc171e"
  },
  {
    "url": "assets/js/61.6752bf9e.js",
    "revision": "2a59cab1d9bde87f0d910c961143c076"
  },
  {
    "url": "assets/js/62.874396eb.js",
    "revision": "821ae05f851d97888b9d7896e4e93878"
  },
  {
    "url": "assets/js/63.0545a4d8.js",
    "revision": "be5a8a6a91270b09a3844a740e80f6ef"
  },
  {
    "url": "assets/js/64.b6bb7021.js",
    "revision": "f09a70e5bf48d3079cc599f38c90f579"
  },
  {
    "url": "assets/js/65.3ada5d12.js",
    "revision": "8e58ea6398185ebe6f4834cc9eeb51eb"
  },
  {
    "url": "assets/js/66.bc678419.js",
    "revision": "6200252287bd10e8eb83279ff6888ad0"
  },
  {
    "url": "assets/js/67.0a31085b.js",
    "revision": "9396d28b76584e98be0bfe5616978587"
  },
  {
    "url": "assets/js/68.728f58a8.js",
    "revision": "ccfaf8c1cecbe623de4a1ee2c7295c6f"
  },
  {
    "url": "assets/js/69.eef29515.js",
    "revision": "49274e75824f43fd3730e17c26b91fb4"
  },
  {
    "url": "assets/js/7.770e61f3.js",
    "revision": "8d48e135a00fee778d7d3c29fc08ea34"
  },
  {
    "url": "assets/js/70.c6d2d6eb.js",
    "revision": "b43870048db15beabc4342ed296d52dc"
  },
  {
    "url": "assets/js/71.8f82fbec.js",
    "revision": "da64f2da46f11b59cc6a5af5cb8015f1"
  },
  {
    "url": "assets/js/72.d6b5d203.js",
    "revision": "d63e545eb53d3b7b94334575f13c832e"
  },
  {
    "url": "assets/js/73.43aeea6d.js",
    "revision": "922a688614ac26fa2a554187e0443f61"
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
    "url": "assets/js/77.233575e3.js",
    "revision": "a739c380554d335a9201f1dc3bc7dd6e"
  },
  {
    "url": "assets/js/78.dc1bfe2a.js",
    "revision": "3113175df2b0c49d7dc0100bb83adb17"
  },
  {
    "url": "assets/js/79.0e2f63a6.js",
    "revision": "2ffdc6496b54328b79c839030d82a7ff"
  },
  {
    "url": "assets/js/8.1e34f4cf.js",
    "revision": "bf9fb29b3b9d4f36b6fcd32e90ad3e94"
  },
  {
    "url": "assets/js/80.2d20903b.js",
    "revision": "c6e3f83bcbcd2de311e6b9ebef0c29a2"
  },
  {
    "url": "assets/js/81.d6ef4de3.js",
    "revision": "447a5f6a692efc0abcee93b62a3207dc"
  },
  {
    "url": "assets/js/82.ca51b7c9.js",
    "revision": "60f435363d53cc29909db92ceec37d15"
  },
  {
    "url": "assets/js/83.416976ad.js",
    "revision": "ba0ebe9a433d821922e68370a40cb5c1"
  },
  {
    "url": "assets/js/84.3417122a.js",
    "revision": "58bcde22a32c5b6c3ddfda89daf52200"
  },
  {
    "url": "assets/js/85.b33ce802.js",
    "revision": "c9c31368792ecc530e058c44e1a27d06"
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
    "url": "assets/js/app.b613d77d.js",
    "revision": "a4b79ae206509fb1f104fd40dae8ee83"
  },
  {
    "url": "assets/pdf/summer-school/at-summer-school-2021.png",
    "revision": "c81a5e74ae1bdeb77db57e5c8c487f05"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "9d091a3e431ea843cd9ca480b125d729"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "271352f7c0594c7c0239d9ca0a4efecd"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "f894a124e2e4543d2486cad7583c3afa"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "1e82cdd8c9a5e0e3ffbff56fa6209727"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "e210989a63775a7e8a87f8c435f196ad"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "2854fb2338b95109153ad3e3f5f493e9"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "e132e9c5590ae82e1e031d3faef0b3af"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "50a93c0cdf194256dc163ab58c2f9edc"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "8e4858569111665d0e14aec329e80826"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "243a990b7a4dca78dcd6c87b04b4dd16"
  },
  {
    "url": "courses/index.html",
    "revision": "afec4ac67a0f85ef846375b49c59efd5"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f12ec4c89de5bad22555dd33c1a30787"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "fed95a858bf475e3dab55ff5fe924375"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "0c0c9b23e31e94c126048d983b73dbe3"
  },
  {
    "url": "courses/template/index.html",
    "revision": "6389e9f6e7a761666ce0095b35adfd89"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "6ee9ad27803ccebff5a33dae7b499267"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "54942095453910e741035670c22cc397"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "169ca574227dcab85378e0e67812dda7"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "d6e9ea37acb7d6d69f2d9b0240f083e8"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "d908909ab1cec3ceef8c1f47ac4be3d0"
  },
  {
    "url": "index.html",
    "revision": "c2d49a4d790b53ddbb653a33d0e671a8"
  },
  {
    "url": "studyathome/about.html",
    "revision": "9ca895a629a7d92f698192d15adfaf42"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "36937ff2f6029122ca68bdca0772018f"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "f220ad94c974b97eea4c529455eef5fe"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "96132c8458ce34637e785a539a3e98a3"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "7619c451a5a39205941fab9eba4652ec"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "14d148fcde5dbe94abad8e14e6ee8dad"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "5f96c9a3c74b850be7fb1cf606f44096"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "0f2627972eb5a67d31882e544b41368e"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "59d7a13605e38c16305f473a47a25053"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "7619c451a5a39205941fab9eba4652ec"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "5a1eb5c7cef61c84853893f1989fc4b6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "76dfeaec6fbb83ed3ad1a492b8447adb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "4d3e014fa6790497a9e1a8082840019b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "6356b88f2ec1acfc13d49a5bada1cadf"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "ab6827775fedaef8093f5f06da07524e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "7966ca5ef18fb0c1ffaaaf79db05da29"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "5c3d28e1a687c1625dbc6aba4f8dbeb7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "89746ebf9cbf954d54617bd224dfe3af"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "dcf066ef197aea0f830bfb8fe51eb54d"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "51d477671506b6396a486f204846a77f"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "c1bf39988cde12cfc675235d2ef068c9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "7102d00e10a2dedb0d9721aaafa0b4fb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "3846dbf2d66d6d764a777023cdfc5168"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "5fd2a243c8b576343be0e779e1936255"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "ed5852ab8160133622aea622b56115f2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "6d71c5a757d75d1668d08676c028f543"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "7df04afa0c6111910f132e290b6b2d4e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "8b9ed41e528eb348b909021918d5b932"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "a8e15c326f8f5ada25ad70b904edacf0"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "7619c451a5a39205941fab9eba4652ec"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "3f44c69b5f9a82b2673375bd086d914e"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "be24c14d50c2268252fcb9382e0a02ee"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "63885d84c281449107b94d818e1643a0"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "afe5231628d96e5a9c38518b281ef66b"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "32bee3fe83d59e54b3c298cc5839feb5"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "0b624d7b7e33f6f48002475a9fa890f2"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9a2bd568e746a799dccde97d42b7ee47"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "59ec1298af62362cf99c9126d6eea56e"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "3de847863a097076084939e303d3bd23"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "f92240f5f07f2f45ac6bdc16291b8e11"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "4a101654d4dcaf2db061f020b0e6dd9e"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "d9c07642e9690c825c83981664d5c4c0"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "19bffbfc2959561b5dc6c4d010878e26"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "7638afff2b92e9f4505e709c9a7d4edb"
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
