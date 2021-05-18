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
    "revision": "7330bf0eedd67e66e3146d78e06b696c"
  },
  {
    "url": "assets/css/0.styles.10a3179f.css",
    "revision": "c07121368f3be46827dbedf1da33464f"
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
    "url": "assets/js/16.03639340.js",
    "revision": "6ec57f1d45acd079562d693fa9b117fb"
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
    "url": "assets/js/26.43649523.js",
    "revision": "78a0e1c720f352c891fc76b4c8127b34"
  },
  {
    "url": "assets/js/27.45639159.js",
    "revision": "f5dfb4a35bdf23eaeac7d1aefa649b74"
  },
  {
    "url": "assets/js/28.8498430f.js",
    "revision": "bc7f8613ad60ece5edaf62b74f9d3864"
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
    "url": "assets/js/34.667225f5.js",
    "revision": "98c2db42853f0f11842f31b13b8f23f3"
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
    "url": "assets/js/39.cd7fd6ed.js",
    "revision": "8ed58bb1897df5a121562cd4df292c2a"
  },
  {
    "url": "assets/js/4.15e47c9a.js",
    "revision": "7ceaaecdbbd772b8e6eb00999364fa00"
  },
  {
    "url": "assets/js/40.8d58213c.js",
    "revision": "0e47865e0f4f44b0b24406cd23e9549f"
  },
  {
    "url": "assets/js/41.ceca0f0d.js",
    "revision": "97b7e887f6a2c22ace107ea0a9e8391e"
  },
  {
    "url": "assets/js/42.2a8c2dca.js",
    "revision": "425c7312fb1fbd488b2b415daf52a45d"
  },
  {
    "url": "assets/js/43.bcd99efd.js",
    "revision": "e658a6d881158e5b558cf957fcfc0fd7"
  },
  {
    "url": "assets/js/44.317e0aa1.js",
    "revision": "5c2f9a6b6a4e11023a5fcfc0370f723e"
  },
  {
    "url": "assets/js/45.94e2d5ed.js",
    "revision": "8077013f7a492872271a694916b41714"
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
    "url": "assets/js/49.ba4c2fff.js",
    "revision": "45a164138022fecad219fd7a78328121"
  },
  {
    "url": "assets/js/5.b4c0b66e.js",
    "revision": "d78b1c5cae0f7afbaa4ee6079cdde84d"
  },
  {
    "url": "assets/js/50.9581c9fe.js",
    "revision": "ce77cd68ff34cbe9cc81d3ade1e660fc"
  },
  {
    "url": "assets/js/51.e89209ae.js",
    "revision": "373ecc9a56adc849d87e92a258bf59b2"
  },
  {
    "url": "assets/js/52.44353d21.js",
    "revision": "eedefff875e6ff04aa4b4e481a279384"
  },
  {
    "url": "assets/js/53.bff1c00a.js",
    "revision": "e95668ad2a9ea529c03c56b905148cc9"
  },
  {
    "url": "assets/js/54.70ef78f9.js",
    "revision": "ceb9933462631cdd5e026642a7295434"
  },
  {
    "url": "assets/js/55.7a16b8ee.js",
    "revision": "7ab65c0891d58d1fecc05779605c28da"
  },
  {
    "url": "assets/js/56.0dc438be.js",
    "revision": "b718e026caa2a387a1dd8947ef7fc221"
  },
  {
    "url": "assets/js/57.05b07dd9.js",
    "revision": "3090ebb6d36d2c35fe87aecc9a4d89ff"
  },
  {
    "url": "assets/js/58.b2811f3e.js",
    "revision": "95a2a0cafdf330160e0f3c8cc438e074"
  },
  {
    "url": "assets/js/59.feecc56d.js",
    "revision": "aa4a1882f1850b9568fa38513fe9357e"
  },
  {
    "url": "assets/js/6.97380231.js",
    "revision": "8926740bbbee35de95a0c763b13bc639"
  },
  {
    "url": "assets/js/60.4da039c3.js",
    "revision": "5fd5b31971a28f436a9b5f5b8819f642"
  },
  {
    "url": "assets/js/61.319fe867.js",
    "revision": "f56ae5e58b5f69b8f1376f5c7733121c"
  },
  {
    "url": "assets/js/62.eb65395d.js",
    "revision": "199b2490c4af5147b7e1bd070a8ccdbe"
  },
  {
    "url": "assets/js/63.6bf8a026.js",
    "revision": "e06066ea0e78c03c723fdbf7bd5c2caf"
  },
  {
    "url": "assets/js/64.87c337db.js",
    "revision": "fb9224a563738ec11e4e5557760d022c"
  },
  {
    "url": "assets/js/65.80cafbd3.js",
    "revision": "2375e26d3590dd03d61a760e0ad0c27a"
  },
  {
    "url": "assets/js/66.24ae0ef7.js",
    "revision": "9806865fe575a888bd1bc9108c9c1aee"
  },
  {
    "url": "assets/js/67.e2803996.js",
    "revision": "73288b548edcac044761daf75d991bf5"
  },
  {
    "url": "assets/js/68.b040e22b.js",
    "revision": "659bb5f83911b936dc3e4f71970913c0"
  },
  {
    "url": "assets/js/69.65b2a404.js",
    "revision": "70a5aa8370b2c75b289daabe5f305a91"
  },
  {
    "url": "assets/js/7.207864ba.js",
    "revision": "54e22b9aac0bdf26b397bd9e2085d60f"
  },
  {
    "url": "assets/js/70.21ca11e9.js",
    "revision": "3e2da66b642498e4b02bc7da659a8e78"
  },
  {
    "url": "assets/js/71.68b424c8.js",
    "revision": "cb9d78ab340143f7b6ec73da24f3a746"
  },
  {
    "url": "assets/js/72.5b050e39.js",
    "revision": "980046f9ae2c23fdb1e1180304e28d06"
  },
  {
    "url": "assets/js/73.24b48f2d.js",
    "revision": "09b115e2be0d12d27b14cef8143b0ea5"
  },
  {
    "url": "assets/js/74.56964a8b.js",
    "revision": "8c642cefca9e18339782a2a5e5c9d792"
  },
  {
    "url": "assets/js/75.f022cb20.js",
    "revision": "2e87c5e741d56d04a78279d12044889a"
  },
  {
    "url": "assets/js/76.d536dcf7.js",
    "revision": "b333d2b363677d9756883e38aed9c337"
  },
  {
    "url": "assets/js/77.2a2c07cb.js",
    "revision": "b0dee4e78f0a54f30281f4c4075421e7"
  },
  {
    "url": "assets/js/78.0dc916b0.js",
    "revision": "df7e5c9a3391d2e6b14c265aae838124"
  },
  {
    "url": "assets/js/79.d19988f1.js",
    "revision": "61688d08cfc152b5dae8ac188cee3c16"
  },
  {
    "url": "assets/js/8.da06dc7f.js",
    "revision": "cddff8982861d8fccc937a743be30fee"
  },
  {
    "url": "assets/js/80.686c3081.js",
    "revision": "0c5ccf60d667f0bd68228c56943a7a6b"
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
    "url": "assets/js/88.8ab19f1c.js",
    "revision": "2d86622b7d186b9bf0468d4b20428f43"
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
    "url": "assets/js/app.53f823fc.js",
    "revision": "b73155155ebadf5046b652a001cda57e"
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
    "revision": "d190fa0f1e2161d608406eebb14d9afb"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "874e791ff3586f41c63ad56ac5d2ebc6"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "402647824c1d5918b703d22012b4f243"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "a1a9898813f1053c3523e11462a41584"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "f96cd9273af617337445db4588f35c59"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "deb3d896f25e234935f756553c8b5179"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "e6812fd06bd99d04e12619677ead2f69"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "13280dc9f4776d62ee42d29e2652ebaf"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "35630fcbaa15237f84c9a2be6a0c48d7"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "0bb7e1c44328e36351c65943fd0a39f8"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "34673648964928ae1839f777bc41adf1"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "e5d3daf72d0360d3a77eb9a7309d9733"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "40b4850cfa3bc25d83bff142e1e39210"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "14491fc0825cfebf95e60572879f9f80"
  },
  {
    "url": "courses/index.html",
    "revision": "bcde1047d5314ca58578ce021981ef60"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8b4e79537e1e4facc6dd64a3a3531ac9"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d0fdd7a7bf4aa6da4c93f6e108133e4e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "995834776f525507af05f30d6b63871b"
  },
  {
    "url": "courses/template/index.html",
    "revision": "d33c2df9b2580c9e11c431bd1ad522fb"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d5744d010859bafbefc28931c206f3b3"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "127b44c40e0c7cbd7c5c07068f3efc52"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "7c8f36c311de8d9290fe6ab3715e7fb0"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "53827274574302d5179f9536758d1759"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "532176dd124fe7919a3af9431195eb03"
  },
  {
    "url": "index.html",
    "revision": "53841f68dd93586152a1d038546a6657"
  },
  {
    "url": "studyathome/about.html",
    "revision": "c87abeb00a4575661f85335f0402db72"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ee80fa43b124947b3845882311351ed2"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "5fb1211db0c849cdf0c08a9f2358526f"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "e470c1ad3783aa44ecac0325bb0faf8b"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "7330bf0eedd67e66e3146d78e06b696c"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "7561aa77275b5725037506cd53943bd2"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "d2ed8d4b6ef31d7407a875322b08306e"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "d521a83eece8b17187f6cb565f1810e3"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "321610b70648c61b38e124bf510a5e86"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "43d61b46e98491dab4444268e7874ee2"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "d042223227482f6b8ddcb9347ac2c865"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "83bb16566db967da30d700518ddd834d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "0f57e8b3ff04b64f8455d875e4015e0c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "9bffba62ac128f38e01995feeff9f363"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "07173ee93a1a11c2337fe96e5e68da47"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "9c6d15525b1fa75aa15406e1b511491b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "66265807d12b8da226fa149a32558bb3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "f42a5ab77987e319850601713e1f3dae"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "91810c05f9152f00452185201b0a30a1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "78807628f9c9aa5f117b45e426aa1653"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "ba2aa9acfe6850aeacf8f8f6e63d8dad"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "82d1257698cb25bb2ec8a906149321f1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "9f24355cc58f1b4cf1d8f6089297b2b9"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "b5aa8af6792e96bb488c63fe2a2c3841"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "365dcad014c4ec7492a4d789b378e239"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "8c3475a23bf5e3d5ca9b68749981596f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "f9878b01e6a9974887ee8894d68bc5c6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "208b262e07cc9e3833cfbe1503bf7e90"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "b756104a3fcade75826395a5e6158bf4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "2f664ff1f571c6b737c92cf276064402"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "6aa4772ca0dfdf66d09574bf9d4a7bf2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "9865502e88839f32f42d1fa293548f41"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "76c417e257bb6dcb0809b7e29dd7fa04"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "b5aa8af6792e96bb488c63fe2a2c3841"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "515791a5840d43117d71335ffff1b39a"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "45fce16a525781e877df4b1cc6c22196"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "ae4e76cf1c347e5cc07d2780fae50041"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "c00433a5efc1c21778e3f9f77fcfa8a7"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "dcbc71a41aa7f1f1b7ede27b205aec89"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "8962b512df6acc98965c763c01d8eadb"
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
