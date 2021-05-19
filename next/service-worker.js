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
    "revision": "ce9dd7efe6827db35e33b9bf3157f926"
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
    "url": "assets/js/16.70197335.js",
    "revision": "e76376650fa0dd2028a858240dbf165a"
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
    "url": "assets/js/27.145ab869.js",
    "revision": "8d0e0cad629e4223ec7b4886011d7354"
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
    "url": "assets/js/34.7f126dc9.js",
    "revision": "26cda349dba3390d98b3eaa657a79f63"
  },
  {
    "url": "assets/js/35.28e8fe0e.js",
    "revision": "b72d83dcfe05330b589375be6386c72c"
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
    "url": "assets/js/38.015e154c.js",
    "revision": "3b41fa7c4382f2bfbec74569e321d485"
  },
  {
    "url": "assets/js/39.c9968ef1.js",
    "revision": "90cd6c308a2f457e8d48ec15acaa0964"
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
    "url": "assets/js/46.26c10c5b.js",
    "revision": "9af262a7db84d2e8ba6ef0a8ed503310"
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
    "url": "assets/js/51.e89209ae.js",
    "revision": "373ecc9a56adc849d87e92a258bf59b2"
  },
  {
    "url": "assets/js/52.44353d21.js",
    "revision": "eedefff875e6ff04aa4b4e481a279384"
  },
  {
    "url": "assets/js/53.7cb07f7b.js",
    "revision": "88b47b0aaea541218f15783e5c57e360"
  },
  {
    "url": "assets/js/54.abe742bc.js",
    "revision": "4ff514536f22ce8a901ab7033b411062"
  },
  {
    "url": "assets/js/55.7a16b8ee.js",
    "revision": "7ab65c0891d58d1fecc05779605c28da"
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
    "url": "assets/js/58.641e407d.js",
    "revision": "3a792428fdeed4de52da3a96d6d3288d"
  },
  {
    "url": "assets/js/59.d381c826.js",
    "revision": "a40aa4b1a4a222c0890769817ae13b0e"
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
    "url": "assets/js/63.fe8a59a7.js",
    "revision": "62daed001b935d1efd3e09af95884557"
  },
  {
    "url": "assets/js/64.dfd088a5.js",
    "revision": "8ea8e16224190be1bebee6389dbf1138"
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
    "url": "assets/js/74.cf39f059.js",
    "revision": "3ca05729bf975132df6b28a5a8371eca"
  },
  {
    "url": "assets/js/75.d92806e7.js",
    "revision": "e8ca58e442f108167bbde52f0fae90a6"
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
    "url": "assets/js/79.d19988f1.js",
    "revision": "61688d08cfc152b5dae8ac188cee3c16"
  },
  {
    "url": "assets/js/8.abb08002.js",
    "revision": "93307c2045caafe81f388bd8fbd2d01f"
  },
  {
    "url": "assets/js/80.686c3081.js",
    "revision": "0c5ccf60d667f0bd68228c56943a7a6b"
  },
  {
    "url": "assets/js/81.e682c1a8.js",
    "revision": "d56e5c653eb1cce95430708ed230c99d"
  },
  {
    "url": "assets/js/82.0265b590.js",
    "revision": "0f3fd20b21a3ca3acf95bccb4ed355ac"
  },
  {
    "url": "assets/js/83.6e4da494.js",
    "revision": "f439953fb140f957d76ba5a3ccc003d4"
  },
  {
    "url": "assets/js/84.cea30db0.js",
    "revision": "b90ee05ed6cf1f3258f2fa552ee31887"
  },
  {
    "url": "assets/js/85.0450d010.js",
    "revision": "9ca7b47f501912d019fa883c8fc654c2"
  },
  {
    "url": "assets/js/86.03185957.js",
    "revision": "c2e0fc870f882c81bfa3c85023faa16e"
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
    "url": "assets/js/app.92c96a04.js",
    "revision": "b1b4604ebe4adfe8c524a75c2a5fa01e"
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
    "revision": "c30e72bc049a90b2532043b1c533bb9b"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "c45adc866c6ee9c6d3bb57d7d327e7bd"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "1a41f49f5263036b4360d25a64affb8c"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "9086ff8cdf6a4c9c59c673c02a6b3325"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "67348d853b837b85aeeaaa36bc7e41e5"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "70891d4ec65fab99f273f558a962b72b"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "fcfa03ba03d03c0cc36fe538e7e5f5d1"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "331f07571049aeea7613fb30789d996a"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "94e6486fa69f6e476695fbfc23d8ab96"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "659cabbdda82f1dac703f704ebf298cc"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "7a88223eafd491aa2dfa1ca6f53797d9"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "92b9d99723668cab0c4226fab783c31a"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "cc5e1fc76067df3375924bde72f47151"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "67a84f896a1cf5cd71d40cdb6a87d7c3"
  },
  {
    "url": "courses/index.html",
    "revision": "176bfcb616f145819612d664c59a746c"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f4acee4c1d6a17b48df21433f7b1afb5"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "68ac12181b03e070e40aa20a06aa5314"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "676097a3155f66a3d295090422587f1f"
  },
  {
    "url": "courses/template/index.html",
    "revision": "00200a5fa62e038ed50fdb28212dae5a"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "63a2e3a337c2ab8a7cd2d92bbac72f99"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "304e0cde41d83ead72007eec7f8e7b2d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "cccc0fb36391a6dccf118329742a590c"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "a54d3f205598116152e7dc0a3a4e8361"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "0e5dde138b3657d9515f1f8c679bf892"
  },
  {
    "url": "index.html",
    "revision": "bc87e8da0a5143b7b005d336163794cb"
  },
  {
    "url": "studyathome/about.html",
    "revision": "4ddfcea16bca9735447dbb33e3321940"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "1b34db9748f70e483ab40ac4989649e0"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "4e74e7b9451ecf616379ab8cec974754"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "9a1b3213df3e2c6121886c1f9859f1ec"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "25737af6562100966283cd832a33d6b3"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "c4e02a035ace49486e71c32b574094d7"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "a61512eb240e16b60343ed31138fa7f8"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "3acf0cead0a843e142e7b68e9b7703ab"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "bf4944e0fcf41828784ac43104c2e1eb"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "53053b4f944b7a8642fb24c7abbb6c7c"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "a1d336ff1c870348c16dc56c461cfa2c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "0375c7bd7e96cdb90affaf17e0a7d543"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "670b444fea109c3820580a380a7efc95"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "8d3d15cb2450bda2337404e51365e0be"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "d0a40f1d138f1e8c99700a087734c46a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "ece19229d0463ae51994538588192df9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "c4d0b3f38f60774db4ac6d13206d286a"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "053962514e20c520f2710efa5a3d2124"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "fcc887a45a0ecfbf79b5380858117c8d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "69a05b7aac822e3d740d644cfbea4335"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "50aafa33830a0f15b8531d0eb9785103"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "a33dceb32d074bb1f521cb228828f37f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "1e092342190f5cc447375a6435a388fa"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ce9dd7efe6827db35e33b9bf3157f926"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "640c618aa71a7b02cfa2fafadf6f22fb"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "9f12ad964586f4f521cb1bfe45c79073"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "9aa6a901939342f2301837c2d86008ab"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "23a9cf1cdd52e94d82bee6c382e78743"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "5f6e26842a6c342942d77e27738ac07d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "d2186fd308a1f587e6e29c63861535b1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "acb23e888854c937da78a43bdcef9e97"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "750405967259bc7f812e5682a762d8c7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "5f85ae599f824e254a8511f1b4d1d14a"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "ce9dd7efe6827db35e33b9bf3157f926"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "90ed976698ee867dc8353f6d423dd251"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "b8390826e2988caa42522a613fe14b9f"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "144c9630e7c46f18bfc4581d75ee99e9"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "56a3030a170a2f120d4da6da5dd22768"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "b2cefce2d50708d61a45062f4f6a4bcd"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "4bf3827ff83d395de762ada50f836fa9"
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
