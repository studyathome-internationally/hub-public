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
    "revision": "97b09a836a1a51bf934704ca82461066"
  },
  {
    "url": "assets/css/0.styles.706b3cc9.css",
    "revision": "6738bd0a32d2beb1982e0c45768d7a76"
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
    "url": "assets/js/1.494fc921.js",
    "revision": "ea7e8cd01f6533f513c175193086a81d"
  },
  {
    "url": "assets/js/10.58e5b243.js",
    "revision": "ac26dc07a2bbab072a20cd589223af1d"
  },
  {
    "url": "assets/js/11.c14ff509.js",
    "revision": "5ce1dc5dc97e4ec462cae42d8ae20545"
  },
  {
    "url": "assets/js/12.0608f299.js",
    "revision": "2f8dba6a653134aa170820722801d182"
  },
  {
    "url": "assets/js/13.241d2996.js",
    "revision": "26a83049c5a8f18509439e81426ebf1c"
  },
  {
    "url": "assets/js/14.67145b8c.js",
    "revision": "1dbdac901b6a694972baa3febd046850"
  },
  {
    "url": "assets/js/15.7859edae.js",
    "revision": "044b161d485a797b30ddf3edff4ebd47"
  },
  {
    "url": "assets/js/16.5a3618b1.js",
    "revision": "dc84c3a52da55ab7dad859e522083e53"
  },
  {
    "url": "assets/js/17.d5ab9a32.js",
    "revision": "c98c7322f8dec3a31a3e92bedb443e22"
  },
  {
    "url": "assets/js/18.ce1f3ca5.js",
    "revision": "c8f57bf2441d22041e81428f64be9ddd"
  },
  {
    "url": "assets/js/19.636ce07b.js",
    "revision": "5b441341d7929e1da5f4b1333561124f"
  },
  {
    "url": "assets/js/2.64824004.js",
    "revision": "97cde72a6de5ebc07a2b04b11eac4d9c"
  },
  {
    "url": "assets/js/20.047ba12e.js",
    "revision": "847ed964d69beb3e53b5af11808844de"
  },
  {
    "url": "assets/js/21.4d7bb3b9.js",
    "revision": "792a9a156c41aec669c9fd33167385d9"
  },
  {
    "url": "assets/js/22.f83c4403.js",
    "revision": "edd4c0ab5e52771edfcbd7e548e0e4f1"
  },
  {
    "url": "assets/js/23.0c37e0db.js",
    "revision": "60f8b0f7182911b15bb29a55f4a0f5ae"
  },
  {
    "url": "assets/js/24.10b3b24b.js",
    "revision": "fe11c300930aaebbafab4a0c6bc6a400"
  },
  {
    "url": "assets/js/25.594d5b19.js",
    "revision": "f516128838a281b23cc20d7db96a407e"
  },
  {
    "url": "assets/js/26.3b6a083c.js",
    "revision": "5f00f95245130c5cc70397dc89e14aa9"
  },
  {
    "url": "assets/js/27.0568c087.js",
    "revision": "080229c3e804680bd555ca8ce71095e5"
  },
  {
    "url": "assets/js/28.6b6461c8.js",
    "revision": "f28accc9bd257704ab91610491446cc8"
  },
  {
    "url": "assets/js/29.b0ca6b41.js",
    "revision": "d7749fe4dc4c34f946e376fe597983b1"
  },
  {
    "url": "assets/js/30.58c506cb.js",
    "revision": "63d035991ae2108e87bee81b35a4c011"
  },
  {
    "url": "assets/js/31.86c66bcf.js",
    "revision": "8cd923f57ae1fc9886524638a92241ca"
  },
  {
    "url": "assets/js/32.da0a9771.js",
    "revision": "e8a179771851d245262cf637deb038d5"
  },
  {
    "url": "assets/js/33.5c2d7692.js",
    "revision": "7429cfa0ef67ace6b4177a8e1c3cdfa0"
  },
  {
    "url": "assets/js/34.c030b14d.js",
    "revision": "bf083d19280cf276d404b2ff48cb9c66"
  },
  {
    "url": "assets/js/35.799f5163.js",
    "revision": "15ae0db20e1b3282a5e678ba11522451"
  },
  {
    "url": "assets/js/36.9aa74047.js",
    "revision": "4e601c367ed634baf2e994ffb7cbd9ad"
  },
  {
    "url": "assets/js/37.1485f609.js",
    "revision": "aa33cd5d6c2d05448794aea1a21d99ba"
  },
  {
    "url": "assets/js/38.015e154c.js",
    "revision": "3b41fa7c4382f2bfbec74569e321d485"
  },
  {
    "url": "assets/js/39.95a9dc9f.js",
    "revision": "e42f70dbe833295a0d754c6bd0d504b0"
  },
  {
    "url": "assets/js/4.15e47c9a.js",
    "revision": "7ceaaecdbbd772b8e6eb00999364fa00"
  },
  {
    "url": "assets/js/40.cd5305ea.js",
    "revision": "e97228919832e61fc71adbb8af1fa42a"
  },
  {
    "url": "assets/js/41.4d8f89d4.js",
    "revision": "12579a5449e40ea4b1aed92ea147656d"
  },
  {
    "url": "assets/js/42.a7f13def.js",
    "revision": "f7952ac5c8c70d45cac1ffac4bc2f198"
  },
  {
    "url": "assets/js/43.2d521b63.js",
    "revision": "96c5693f348d92893e26b42464bc5f6f"
  },
  {
    "url": "assets/js/44.6b2f3aae.js",
    "revision": "bdde80c77665440dee153946631925c2"
  },
  {
    "url": "assets/js/45.6c6ef923.js",
    "revision": "7d7e5a6f5ac14edeac3cb95639918d0e"
  },
  {
    "url": "assets/js/46.ad5c551f.js",
    "revision": "3be5cf0eb3cf928ded0c7d865d339d6f"
  },
  {
    "url": "assets/js/47.9db85406.js",
    "revision": "2ff3b4d4291c639e89c1a594ac3403dc"
  },
  {
    "url": "assets/js/48.2438ecde.js",
    "revision": "23b2ea26bff1f0cdc6278dd212da9098"
  },
  {
    "url": "assets/js/49.57740fdd.js",
    "revision": "be97adc21c9a39df25ba5f11397e4664"
  },
  {
    "url": "assets/js/5.b4c0b66e.js",
    "revision": "d78b1c5cae0f7afbaa4ee6079cdde84d"
  },
  {
    "url": "assets/js/50.f2326502.js",
    "revision": "ab09524cb48f7a3f0eb6b634eb7515c5"
  },
  {
    "url": "assets/js/51.8026aacc.js",
    "revision": "b243c0a8f1ecb554419d99c8a802878a"
  },
  {
    "url": "assets/js/52.e9da36fa.js",
    "revision": "9d5c11271b15379491067e2c3c666f0d"
  },
  {
    "url": "assets/js/53.bff1c00a.js",
    "revision": "e95668ad2a9ea529c03c56b905148cc9"
  },
  {
    "url": "assets/js/54.1247209a.js",
    "revision": "fb86119beef8e56c2e1d4881218e6b00"
  },
  {
    "url": "assets/js/55.5bb74fa7.js",
    "revision": "6184832bbb38528dd9c208ac12d3ee16"
  },
  {
    "url": "assets/js/56.fa7ec471.js",
    "revision": "7b580f558ff492294b23cf7f07cabd54"
  },
  {
    "url": "assets/js/57.b53d2320.js",
    "revision": "689a3ec856bc0018a43629cbb6197e44"
  },
  {
    "url": "assets/js/58.b2811f3e.js",
    "revision": "95a2a0cafdf330160e0f3c8cc438e074"
  },
  {
    "url": "assets/js/59.a595e759.js",
    "revision": "b62a8f8f2cc3c0a9119e5fe138a253d8"
  },
  {
    "url": "assets/js/6.4e0584d5.js",
    "revision": "4a6384cf3b0132f7f0e62f0724b0aca2"
  },
  {
    "url": "assets/js/60.bcf721ce.js",
    "revision": "cd12e79b0427585fc7be2f108363f43a"
  },
  {
    "url": "assets/js/61.a7debf6e.js",
    "revision": "79cfe8d8ddf1ee73252fd6f2cc41a354"
  },
  {
    "url": "assets/js/62.32bdd0d5.js",
    "revision": "69ee0d70ba1d8a5e55034a7b141e5f68"
  },
  {
    "url": "assets/js/63.32490bb7.js",
    "revision": "f850f1ff5e50146e7fbe52ab474ce511"
  },
  {
    "url": "assets/js/64.dfd088a5.js",
    "revision": "8ea8e16224190be1bebee6389dbf1138"
  },
  {
    "url": "assets/js/65.80cafbd3.js",
    "revision": "2375e26d3590dd03d61a760e0ad0c27a"
  },
  {
    "url": "assets/js/66.6a4cd74b.js",
    "revision": "c60fb9d8f202caef022bd65c511f2ed6"
  },
  {
    "url": "assets/js/67.013c155f.js",
    "revision": "91a242a80749ca06f8e1ae68cf59f366"
  },
  {
    "url": "assets/js/68.619732be.js",
    "revision": "16b277c16d3fd6c6fa9ee7dd41f8735b"
  },
  {
    "url": "assets/js/69.49a30c16.js",
    "revision": "32ef042260804168972d63f3e8c4f012"
  },
  {
    "url": "assets/js/7.eaefcbea.js",
    "revision": "a40cb5819c81cbfd89fcda175f6c29bb"
  },
  {
    "url": "assets/js/70.0223eeb6.js",
    "revision": "4ed9ad79ae1e55e50f2bbb4f4333a753"
  },
  {
    "url": "assets/js/71.a8f5ace5.js",
    "revision": "7332542e3fcced5831b086b6dbc46fdd"
  },
  {
    "url": "assets/js/72.c5cbdee7.js",
    "revision": "bc2347022ffcb81dc42c4c000e0134b8"
  },
  {
    "url": "assets/js/73.e820acf4.js",
    "revision": "0974431d079652858582c84d4e8833f2"
  },
  {
    "url": "assets/js/74.0f53782b.js",
    "revision": "5998e364cd29fbc3be23fe64f4775f3d"
  },
  {
    "url": "assets/js/75.162270f7.js",
    "revision": "10b19bed6f19b6cd4fb6c10e1031dfa9"
  },
  {
    "url": "assets/js/76.6d016932.js",
    "revision": "613b63ab52a745ede2d71b71cfc4f5a2"
  },
  {
    "url": "assets/js/77.a398d21c.js",
    "revision": "f3478d27d4a22ded79371c2c2f1fba8c"
  },
  {
    "url": "assets/js/78.0dc916b0.js",
    "revision": "df7e5c9a3391d2e6b14c265aae838124"
  },
  {
    "url": "assets/js/79.51cc77b8.js",
    "revision": "6a06d9a05506f947f39ecc70125e6663"
  },
  {
    "url": "assets/js/8.abb08002.js",
    "revision": "93307c2045caafe81f388bd8fbd2d01f"
  },
  {
    "url": "assets/js/80.1ea143b3.js",
    "revision": "9ce652fdf13e9543fb9605d2a23f22ab"
  },
  {
    "url": "assets/js/81.dd0772f5.js",
    "revision": "3b84edea736c48fa643e4b4dac0ed7db"
  },
  {
    "url": "assets/js/82.6ef9a0d0.js",
    "revision": "c1985410ca7cdd9e68108e2d5c34bff9"
  },
  {
    "url": "assets/js/83.2f2aac03.js",
    "revision": "1f480ed6c08f5cd132c3699f135e1cb9"
  },
  {
    "url": "assets/js/84.ccbeb2f1.js",
    "revision": "0b8acb82209681a030cc704a58601210"
  },
  {
    "url": "assets/js/85.24a03a56.js",
    "revision": "b018dcb555991ed7231f7e1427b9e498"
  },
  {
    "url": "assets/js/86.053dd9f4.js",
    "revision": "dcf63e82cf227ffda07f97e48d03a4f3"
  },
  {
    "url": "assets/js/87.d954a8f0.js",
    "revision": "f46950274bb5a1fa7444b879d736885d"
  },
  {
    "url": "assets/js/88.ee1c2f60.js",
    "revision": "56448a6b796cc3dacab830634e703946"
  },
  {
    "url": "assets/js/89.a1f6932f.js",
    "revision": "f4b2ce6f9ec053dafeaa8205db6e8c99"
  },
  {
    "url": "assets/js/9.e24288e0.js",
    "revision": "b0ec65cff1c8573308dd531e6495724e"
  },
  {
    "url": "assets/js/app.721cb70f.js",
    "revision": "f625a9ae331d53eef2377e90bb45f67e"
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
    "revision": "16f91e13df2a81537fe4bbd52d90e9aa"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "9cccad3ab5c40a11568eda89949a93ef"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "5c6d3873cd62b8cae765bd9ce2340b6b"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "fe3225aec5cae1e5bbdb8a045ac6f9d5"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "50d0d028da255be57e1a69d9510d7337"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "88342f4d9b971dbc002c31e97929587c"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "85415bf6cb49268fef0fd3ded28c9b00"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "4e48b71c58fa68f43ee67a611718e78b"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "59bfb75fa7655362dde158c099d11747"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "a4086953091bd1700117740149db0298"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "08d497fa0a0bb44829495ef866946a98"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "1ba463f3ab153f5f96ab1f1b678d5477"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "b9961dad123fd8cb5132c5cf368ba898"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "1b4f5cc05121722ff6666411faf823fb"
  },
  {
    "url": "courses/index.html",
    "revision": "02d72159b7d87dddf61a84ff2ff04e25"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "2d815040ec3c0b33d4d593a668f11412"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "033394afd049d6395357f2662a785d77"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "7b55dacf13b4980e1d9766170c9f61c7"
  },
  {
    "url": "courses/template/index.html",
    "revision": "a4c34c40ee8030035df7ea532a99f9bb"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "a7c129bfd092d21b08b8a09b455db204"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "b797abf84f9c3becc25417fbe0e3fa37"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1dd6af13b0d9e4a013d771b2181a0e24"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "08056e554e849c21d700b57fdee822c1"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "6881b4e3476918402afc3f60f6173a64"
  },
  {
    "url": "index.html",
    "revision": "8e08b0500a5420859965299fb9919012"
  },
  {
    "url": "studyathome/about.html",
    "revision": "fb7f5be044f9c77bb70cdacfef0fa1c6"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ed43ead00eea56375382728422366f3b"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "2a74a2f492838a205cf02d47ba6cf9bc"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "d81755ba6774e427d1be0dc9b8f3b11f"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "7703e49f9cad3dbf82c8d4388bcb3d41"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "4a89832cb2b73aa7d7a493ef7a245af1"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "9b4cb3c9514d4f054da75d6ba896e7b6"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "46a8187f9da28fc146d447e120264602"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d0a295db1a566fcecd2e29626a7d8edb"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "1cd738625eca60e021f3241b07ff0595"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "518032a420f791a0e6606b202c626021"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "f5930c9d98e8a4118b63ec28d00e8ff5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "45e13014ffbb8707fd8ace0237b43a81"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "a4b733923ded8c219a219df6531698f2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "0088b0fe359c168c83131bf769b8ece1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "298220dca88bc355a8b9a6ec391b6698"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "6f76324a6095aa03c58eea67a4e5c4f5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "50dcd1ff17af55b07883708637dbcca8"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "be96c7457c1649cf59b81ed8784b2db3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "462f7ff1851e00dc24c71a01848d87f4"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "52f790609b2ff23555880c13a6fb18d7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "1987e3e5cf0467c7252402a5ee742b36"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "e045bc28fb5e98a04bced13206561c68"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "7703e49f9cad3dbf82c8d4388bcb3d41"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "1a22cfc4877c31e34edc57b1653a0b74"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "663e73dddcc840999200a25345fc152f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "bbb105fd2d82b3865c2fec85c169baf0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "a98ad06eadbb19fbf7cdfcc14af25bc3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "8248bb36ffcd58d731251df40e17cd6c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "0aae19b6ed05915d4d4bafc6651c7150"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "0da3a8e71feaeb088466ffcd4026b035"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "6c72759c3531dd1f3005035fa44995d1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "fefee74975d2f1d12b486b926d2462fd"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "029f0b37a913ea323500e3fd18053101"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "6b8caf45cb3ee14b67fc54285392566d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "bc5f581c6c7bf72f6dcc5a89b971fbf9"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "2d5d679e000cb58ffbba93980af98f69"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "81a4dda3a511b6a890b60d3f287f22a4"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "efe20d21a818fe95d8c36609e3ce013c"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "dbb66c94bbfb638fef42f2d73c33e92a"
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
