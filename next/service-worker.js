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
    "revision": "12e6688aed12d1e597b2a15b8094cf75"
  },
  {
    "url": "assets/css/0.styles.1161eaf7.css",
    "revision": "f48d34ee946b0057c5f2554e8af2818f"
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
    "url": "assets/js/19.b3084459.js",
    "revision": "6a948e6f08b6d18269cec1fd60844437"
  },
  {
    "url": "assets/js/2.64824004.js",
    "revision": "97cde72a6de5ebc07a2b04b11eac4d9c"
  },
  {
    "url": "assets/js/20.e486a8e9.js",
    "revision": "72d2e0b361392444393e920bde0881b9"
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
    "url": "assets/js/23.d57aecd7.js",
    "revision": "03514454ce50ae2452dd4ef694320120"
  },
  {
    "url": "assets/js/24.0598c352.js",
    "revision": "e4c5ac53c92a87dd2b1081cf65e039ee"
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
    "url": "assets/js/34.97069acd.js",
    "revision": "c812619e4694d9b1653b0a1251479773"
  },
  {
    "url": "assets/js/35.28e8fe0e.js",
    "revision": "b72d83dcfe05330b589375be6386c72c"
  },
  {
    "url": "assets/js/36.9aa74047.js",
    "revision": "4e601c367ed634baf2e994ffb7cbd9ad"
  },
  {
    "url": "assets/js/37.ea95918e.js",
    "revision": "6528fd21aef56bb7c0d3a4cde97751d7"
  },
  {
    "url": "assets/js/38.aba99a02.js",
    "revision": "e321c87e5da3c7e112d7ad81aa28a101"
  },
  {
    "url": "assets/js/39.77da2238.js",
    "revision": "182dfd8e957a55b88a6c769921645514"
  },
  {
    "url": "assets/js/4.15e47c9a.js",
    "revision": "7ceaaecdbbd772b8e6eb00999364fa00"
  },
  {
    "url": "assets/js/40.f0187bb8.js",
    "revision": "7fbdae442fd7f710e7da6a6d76b78210"
  },
  {
    "url": "assets/js/41.a4f15dc5.js",
    "revision": "d1d63e77387039ea758e2bd592c5a418"
  },
  {
    "url": "assets/js/42.2a8c2dca.js",
    "revision": "425c7312fb1fbd488b2b415daf52a45d"
  },
  {
    "url": "assets/js/43.2d521b63.js",
    "revision": "96c5693f348d92893e26b42464bc5f6f"
  },
  {
    "url": "assets/js/44.317e0aa1.js",
    "revision": "5c2f9a6b6a4e11023a5fcfc0370f723e"
  },
  {
    "url": "assets/js/45.c97fed94.js",
    "revision": "f64ce0473dc0cff7d91749ddde5a8281"
  },
  {
    "url": "assets/js/46.26c10c5b.js",
    "revision": "9af262a7db84d2e8ba6ef0a8ed503310"
  },
  {
    "url": "assets/js/47.634c5c46.js",
    "revision": "3e5f92c8bf601a1497464b5bd4fe7432"
  },
  {
    "url": "assets/js/48.2438ecde.js",
    "revision": "23b2ea26bff1f0cdc6278dd212da9098"
  },
  {
    "url": "assets/js/49.689e6bff.js",
    "revision": "8a0549bbab12fcfd4c859d28dfe0301f"
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
    "url": "assets/js/53.9d2a6466.js",
    "revision": "979422ada4c5208b2cf80afd7dbcdba3"
  },
  {
    "url": "assets/js/54.c4b10904.js",
    "revision": "db30d8867535999f25082d76db9f752b"
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
    "url": "assets/js/6.4e0584d5.js",
    "revision": "4a6384cf3b0132f7f0e62f0724b0aca2"
  },
  {
    "url": "assets/js/60.bcf721ce.js",
    "revision": "cd12e79b0427585fc7be2f108363f43a"
  },
  {
    "url": "assets/js/61.dea14d1e.js",
    "revision": "d9c3aa9fa22164a962d4789438b07f40"
  },
  {
    "url": "assets/js/62.268175f6.js",
    "revision": "a71ed46f3143e082d0e7a7a396963222"
  },
  {
    "url": "assets/js/63.ae7afdb1.js",
    "revision": "6daef5d5ccf0f4c92afb23a6e48e25b0"
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
    "url": "assets/js/69.5a658df4.js",
    "revision": "62e7c5a507fcc01e21c75f0adfaa5382"
  },
  {
    "url": "assets/js/7.eaefcbea.js",
    "revision": "a40cb5819c81cbfd89fcda175f6c29bb"
  },
  {
    "url": "assets/js/70.21ca11e9.js",
    "revision": "3e2da66b642498e4b02bc7da659a8e78"
  },
  {
    "url": "assets/js/71.e28ed3d3.js",
    "revision": "593a2ac78758ef041e93f2ad9fc8aaa2"
  },
  {
    "url": "assets/js/72.c5cbdee7.js",
    "revision": "bc2347022ffcb81dc42c4c000e0134b8"
  },
  {
    "url": "assets/js/73.1eb5e1bd.js",
    "revision": "c47440d8076b11679376b541762c0f1c"
  },
  {
    "url": "assets/js/74.cf39f059.js",
    "revision": "3ca05729bf975132df6b28a5a8371eca"
  },
  {
    "url": "assets/js/75.d92806e7.js",
    "revision": "e8ca58e442f108167bbde52f0fae90a6"
  },
  {
    "url": "assets/js/76.87924f9d.js",
    "revision": "c361002407bc5cd25472510ca89e611e"
  },
  {
    "url": "assets/js/77.2a2c07cb.js",
    "revision": "b0dee4e78f0a54f30281f4c4075421e7"
  },
  {
    "url": "assets/js/78.b806f806.js",
    "revision": "d50dfdb9e5a755fa99dca94f66bb3310"
  },
  {
    "url": "assets/js/79.4786ae22.js",
    "revision": "dfd1cc5a248778eced31a4a6a99d3ba7"
  },
  {
    "url": "assets/js/8.da06dc7f.js",
    "revision": "cddff8982861d8fccc937a743be30fee"
  },
  {
    "url": "assets/js/80.1ea143b3.js",
    "revision": "9ce652fdf13e9543fb9605d2a23f22ab"
  },
  {
    "url": "assets/js/81.00536501.js",
    "revision": "e4d54bbb420f2b6877cd55b4d43b7088"
  },
  {
    "url": "assets/js/82.3309cc81.js",
    "revision": "788b115ede20ff942036d57a894cd07e"
  },
  {
    "url": "assets/js/83.df7b5191.js",
    "revision": "36f2e096b840f46940d588917cb6d983"
  },
  {
    "url": "assets/js/84.9c62327e.js",
    "revision": "0be62fa716e0711705c6c491de38b5a9"
  },
  {
    "url": "assets/js/85.0450d010.js",
    "revision": "9ca7b47f501912d019fa883c8fc654c2"
  },
  {
    "url": "assets/js/86.053dd9f4.js",
    "revision": "dcf63e82cf227ffda07f97e48d03a4f3"
  },
  {
    "url": "assets/js/87.fa0dde0c.js",
    "revision": "4842fa2dae55842314452d071db68799"
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
    "url": "assets/js/app.59b41864.js",
    "revision": "64d9127a727c84fef406a675c13cf653"
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
    "revision": "88d708a33ebb3b78949db3013e8acad9"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "ce4d16ffa11794267b69ffcb620dee5c"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "20178186cc57110f26d53b2f292a94b5"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "db60f035f64e868ec8a29ae4086e5f06"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "dbe9022e36b9e9e2e2c5b7df27bee302"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "4b0fe96acdb1863a83fffd298fc397a9"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "2a59e3eef61ca9927ecf9dd70a97ef60"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "7d1ed9ea97ed77c232205ff3f7fe5aa0"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "6e2e95cbdc3eea6b1f993ccee6063fd0"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "4fd09940fbd30334b5de0fc2777ece76"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "87f0b7159b40d9b4940f19ae05227de9"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "d5b6184f9fa22cdaf7922da737be26f4"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "ffcdbe042d966cdfc2dd5e69ae09b782"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "9e1c5a921aaa9473535beb874a54d95c"
  },
  {
    "url": "courses/index.html",
    "revision": "465b5fde3004139a19534782f5a40203"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "075e8f5996d21bd82099a57ec435b63c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "e4f5eeb7ed0bed85056f0f75ea5b9b7c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "6a4443b1231f746ea9f07f961f4c3fd9"
  },
  {
    "url": "courses/template/index.html",
    "revision": "32a3a217e3b9f7138a62d7b1c46016f1"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e0b007ff64b372202069d604e033e84c"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "cfc0edab10a6225f450c079e115a9733"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "ca09124ea3e1b020db94fa86421a2a08"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "03f2f76f02bfeee08424dc03ec98eaae"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "6e8e10e806f7e6e2680993727a41657f"
  },
  {
    "url": "index.html",
    "revision": "ed0543f6a1307168f465c319c7645d97"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f7d8e3e2178ad939193202f3cbdb5220"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "abb3ffc8520a6df1b3afae878fb2a5ce"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "3df92235c03abcb6b23fb3b7141c246c"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "67a0e15a63b027f4e5f8a95b4a026c92"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "12e6688aed12d1e597b2a15b8094cf75"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "1b858143e63d8f9928c5c4ea0000185e"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "b66024ea5bec04e3c755139c3ddacf37"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "fb88ba9f75960dbed938043c4984bcd1"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "7f8c38ba95251931184499f0e9d0a7e6"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "d78a321c3d0a97df09379ac78b37bcd8"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "172e0061d48c535c224d1f18cc84a47e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "7b8885b3b5f64e57867478412e26b2fc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "5a7e2b39c7d5c264c352c3ba06c7ba64"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "adb7b7220e1c5d4771aa02683d07b492"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "6897fc3f22c0baeac91a652cd3a85d69"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "4d1028995019a0e2b11e44595cfde73a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "c073a3910b2788cbb46bebc657734a09"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "0c8ef54ea8998290efd4e3bffc6d3707"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "c37144f573c3c8d2bf1543585a98d33d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "a15eba73f0816702612c7fee763332f6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "df1e435a9cda033c31d8537de02be37a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "0d7ae3e79157142530398f949e94836d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "3118fc5883c09eb7ea62179a8c5a1f23"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "d78a321c3d0a97df09379ac78b37bcd8"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "6466d0ebfa6be8a398ed807d641dc33e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "556685661cb7dd65d0a8760d6a341c40"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "8ceee9cf3007a41de72ef19d3073a367"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "592cf4a67e0d67f5714afd1e141aaf7b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "06488c77064fe6389b3c68b6bb9ad65d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "0c4f152cd7f380d29204c5bfd556d5da"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "46bef35a6d8d19e380c4c5fb2c8ffee5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "b588ad4814cf49e4c774667fb5ce43c9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "932e67d3009365c020d7d5db9a17a243"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "d78a321c3d0a97df09379ac78b37bcd8"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "c0a0a32c1c003f1a3eb474a2c796db04"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "8c193628fa5fc377a749cbaac4370c86"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "8aa7cdea939251fd741309ddf217415a"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "14f10e1c0645aeabae0cde640c509015"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "d27341c7313f7915df30dcb805a591c3"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "016ed00c792d826509d4c8a688684f74"
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
