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
    "revision": "47dd30c65aaec0b434292e99cfc3e1f5"
  },
  {
    "url": "assets/css/0.styles.bf5a250c.css",
    "revision": "4e418d6c0de6dc5fd7eedc26f175d831"
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
    "url": "assets/js/1.a111ee6b.js",
    "revision": "7dd3306a600c640e9602e31baaf624a1"
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
    "url": "assets/js/12.653e8842.js",
    "revision": "d746eb7cf77c5488067a452c4ac3a40f"
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
    "url": "assets/js/22.34d6a0d2.js",
    "revision": "199a1d6d4b1b2031a11380bc5721186e"
  },
  {
    "url": "assets/js/23.50bc2fdc.js",
    "revision": "1dd48795dfb039c72a3c4b858256959b"
  },
  {
    "url": "assets/js/24.1de6ccce.js",
    "revision": "3e5721d61558db123f236465040c6f30"
  },
  {
    "url": "assets/js/25.8918d4ad.js",
    "revision": "dd756279f992533bd78873f62696fe81"
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
    "url": "assets/js/28.553f897b.js",
    "revision": "5dc2bfc78312d53ef691656213fe5b07"
  },
  {
    "url": "assets/js/29.b0ca6b41.js",
    "revision": "d7749fe4dc4c34f946e376fe597983b1"
  },
  {
    "url": "assets/js/30.7bba43dd.js",
    "revision": "ca90eabe87a2f75f29e24505acf48fa7"
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
    "url": "assets/js/33.0d480f35.js",
    "revision": "48ad5041b04f41b1e23f8fcdff0d2c29"
  },
  {
    "url": "assets/js/34.ec16e9d2.js",
    "revision": "ae2613808fe2f39c8a761ac97afbb4cc"
  },
  {
    "url": "assets/js/35.9b07f9ad.js",
    "revision": "ea65997dda6d0f56753adccc0f2da369"
  },
  {
    "url": "assets/js/36.870eb1bc.js",
    "revision": "44158b647ab84fda2ec3ead386fd8ec2"
  },
  {
    "url": "assets/js/37.1485f609.js",
    "revision": "aa33cd5d6c2d05448794aea1a21d99ba"
  },
  {
    "url": "assets/js/38.b263e049.js",
    "revision": "3e13b8553a4ce6d52a420f9a21bffa40"
  },
  {
    "url": "assets/js/39.439c35ab.js",
    "revision": "9c882d28d45c66b39121cf09f0b8bcd3"
  },
  {
    "url": "assets/js/4.15e47c9a.js",
    "revision": "7ceaaecdbbd772b8e6eb00999364fa00"
  },
  {
    "url": "assets/js/40.23ac4928.js",
    "revision": "d4a5cd0830c57abde23c7661799e2849"
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
    "url": "assets/js/43.b0870779.js",
    "revision": "a089be996d1f79332cc379166551583b"
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
    "url": "assets/js/48.b3a50df4.js",
    "revision": "4b34a43fc895000aa067c3255937b93a"
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
    "url": "assets/js/53.9d2a6466.js",
    "revision": "979422ada4c5208b2cf80afd7dbcdba3"
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
    "url": "assets/js/6.97380231.js",
    "revision": "8926740bbbee35de95a0c763b13bc639"
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
    "url": "assets/js/63.12dcdc4e.js",
    "revision": "4008ccd16271959d009670401d25c608"
  },
  {
    "url": "assets/js/64.47551d6b.js",
    "revision": "08a792ea3e4ea82c09ae118176602ef4"
  },
  {
    "url": "assets/js/65.da14d1e9.js",
    "revision": "1314e082869d7f20858dd139507677c9"
  },
  {
    "url": "assets/js/66.0aca1e3a.js",
    "revision": "ae04de8c8245185bc8a202b096fd261f"
  },
  {
    "url": "assets/js/67.928bde07.js",
    "revision": "9607bb3fcaf00f72ed606f9382874b9d"
  },
  {
    "url": "assets/js/68.e536b419.js",
    "revision": "f9034e7ec9c24f4397aa55cd085511cb"
  },
  {
    "url": "assets/js/69.5a658df4.js",
    "revision": "62e7c5a507fcc01e21c75f0adfaa5382"
  },
  {
    "url": "assets/js/7.207864ba.js",
    "revision": "54e22b9aac0bdf26b397bd9e2085d60f"
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
    "url": "assets/js/86.ee2c3bc3.js",
    "revision": "b764861ed004940117def59827ef1be9"
  },
  {
    "url": "assets/js/87.c733497f.js",
    "revision": "4053aed878b661fa8afb6309e68431d2"
  },
  {
    "url": "assets/js/88.336764be.js",
    "revision": "e2cb62d39092411b45f077bf46e5dc5d"
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
    "url": "assets/js/app.0265f75f.js",
    "revision": "ff47aab26f40b3d49af200811d8dd9e5"
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
    "revision": "ad93d50e69e2b8792d2e860d42da8934"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "7524899b6651658d3e3007095fdf1aea"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "6a8685340daac5203072e05e820ca21b"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "e92f181e1ece832728f0087ccb57d9dc"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "a9e2edca9d049df7f48a64de7fb149e7"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "09a29517f58bb67fc2de932a2117f1f2"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "c4357bbb167348e7750006a7e3faad0d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "921b3d79f23d8b59816ef6582e70776f"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "faf4c8c8cba7a0bc01de75b9c3842b24"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "02a5c3b70d6fa36c2c08808865be1c74"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "e24a71ca554606b86c9c7438dcab40cc"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "bd1f1b0eaab08fbe25357653c6304c86"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "ae29f225f463559c84de460cd4389273"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "11de6762483ab593ae27b8ac0b1a5e84"
  },
  {
    "url": "courses/index.html",
    "revision": "6182eee9f0e4980b14648ef620f96ed9"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "b4f3fa3cc01b78a1b87e0a4970ae18ef"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "c75dae727060a479d3424da1a2a4c789"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ebf1e89ca552107e503125de420fc907"
  },
  {
    "url": "courses/template/index.html",
    "revision": "1375513c469bc1421db2b9bd44d0e557"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "606a25cc57c111806bb09979ef38ea84"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "67ead5d34a8c16a6c6e782e574d57eca"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "cb04a3952f559da14a5699d860f15c61"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "32fec49183802f6473e4ac78011c8ad4"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "311aca7b79cb6b1f1268852fabd85a34"
  },
  {
    "url": "index.html",
    "revision": "14feba17d422f552604e8cdf34c0c9bf"
  },
  {
    "url": "studyathome/about.html",
    "revision": "81731bf837cdd0a0d6cb9b247036d06f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "715b7bc3de54d8c10106a916ddc3a11b"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "db5a50b2ccbbb176b350698b9738c4cf"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "7252b3e48c58c4a265964eb36112aac7"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "e9b4d5a8d67641a5bf252fb2912d92b9"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "f9cfd42fcb3202316b4925b769d12429"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "e306d190324d31abeda6e7068ed944a5"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "f6d7eaf51928b8fb50047d1653f8ef32"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "a791b01389018494dc914b1a8022bd5d"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "49fdbbf3216df595a3c8fc274da1e28c"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "b682698d480ccaa22513caca3bea5dcb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "18d1feeb65cdcda4212ad020c2a54dcf"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "9e2c3b456c26dfbb9eb1956f81e13261"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "fdaf2566d2f7e67d9879e2b0d477b04f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "5c950757e795b76d6eea94a2dc9169d2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "48266d11a159c75e6faeb5d602d7f055"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "70104ca16b8dc4ad9fa1d9df752849a6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "00bdaffb077b6c9a86dc0008c7eadcca"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "87729467fc0f468efb79e04360ae9f89"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "fe23081a0f726545c3655fa6c02fcc2b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "96505fc1a257813caff36cf60d8cafeb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "628b5a9c2d5174ce32912997511b0182"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "84c7e4c3af7be7a72ea8a3b2824822e0"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "6847ad6da7c558801bd7a3ea94112e65"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "cbaee3d8f4af17d70a3ef3e85f766d80"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "4f4aed5fc14b10c2905106bb1f291e05"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "2af7c6b299820f6c662f38bb21dd090b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "b36b50c7113ce8f90d9b86163d7050be"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "444993033902ebdd85c8332da2ca8cd0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "176e9a815427beb63616fb4f4a118c11"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "d6f953fa856bbad14a86a7760ac7c839"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "58e8ed569ea8ddceb29e68076222b1e4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "ebb091bcd854684f5a6b693f9db26b5b"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "47dd30c65aaec0b434292e99cfc3e1f5"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "80e34bb254eac8ce7fdd25f748f1defa"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "9419e0512b321f7af17e462203ed64c4"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "78a2a7262790357c1265abdaf70a1ad0"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "92de02f3e75b7c4086415ea8802e9ac7"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "5c7ba1b3e27c9ad2deb510f07ed9788c"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "ebf70c8379276194a774230c8dfb8e10"
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
