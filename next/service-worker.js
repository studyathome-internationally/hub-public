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
    "revision": "7078fa67d9c81d963e98d127bdc7a3c1"
  },
  {
    "url": "assets/css/0.styles.6de1cc2b.css",
    "revision": "2ff26d0cd5e2c74345c5b6453e291edc"
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
    "url": "assets/js/23.0c37e0db.js",
    "revision": "60f8b0f7182911b15bb29a55f4a0f5ae"
  },
  {
    "url": "assets/js/24.10b3b24b.js",
    "revision": "fe11c300930aaebbafab4a0c6bc6a400"
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
    "url": "assets/js/32.a1da077a.js",
    "revision": "67c141247025952766cf57cb3b9c96e4"
  },
  {
    "url": "assets/js/33.37ea3000.js",
    "revision": "b944c0177f449ef7f53a9a9d3dae73fc"
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
    "url": "assets/js/36.32d32c02.js",
    "revision": "77ba805e38047f85fc9601c63b3db89d"
  },
  {
    "url": "assets/js/37.96e22d3d.js",
    "revision": "fa879d4f826a58d8380f7c25b659f580"
  },
  {
    "url": "assets/js/38.015e154c.js",
    "revision": "3b41fa7c4382f2bfbec74569e321d485"
  },
  {
    "url": "assets/js/39.5948564e.js",
    "revision": "8a383f7213dfb60bcf0633740756c92f"
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
    "url": "assets/js/42.0c9ad7c2.js",
    "revision": "1b5bdfba5c2f637133350a51b204bbcb"
  },
  {
    "url": "assets/js/43.20baedd4.js",
    "revision": "e3035067cc34d004c1a1504dd8527703"
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
    "url": "assets/js/46.409f51d4.js",
    "revision": "c86f298ba713b6c8de5812ce6a77972b"
  },
  {
    "url": "assets/js/47.634c5c46.js",
    "revision": "3e5f92c8bf601a1497464b5bd4fe7432"
  },
  {
    "url": "assets/js/48.101578b1.js",
    "revision": "eea1e574e26b67792d88d0ce0f6e6b20"
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
    "url": "assets/js/50.66836547.js",
    "revision": "67e6e787984143df8662e3eb96a7da83"
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
    "url": "assets/js/62.a323355b.js",
    "revision": "1ae5d9a71805184873a5ddfd75a8510c"
  },
  {
    "url": "assets/js/63.ae7afdb1.js",
    "revision": "6daef5d5ccf0f4c92afb23a6e48e25b0"
  },
  {
    "url": "assets/js/64.8b21df12.js",
    "revision": "0772e5e2f106405845efbe6f9a5a4942"
  },
  {
    "url": "assets/js/65.80cafbd3.js",
    "revision": "2375e26d3590dd03d61a760e0ad0c27a"
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
    "url": "assets/js/72.2b133fad.js",
    "revision": "38cd9c2724ecf8270bbdf70365bd1cfa"
  },
  {
    "url": "assets/js/73.7ee8edbe.js",
    "revision": "7ad48016787cc9ffb40bcf329b82acb2"
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
    "url": "assets/js/8.da06dc7f.js",
    "revision": "cddff8982861d8fccc937a743be30fee"
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
    "url": "assets/js/app.ad149fd4.js",
    "revision": "8ed73ae5d91312a5f9a89c764143bea5"
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
    "revision": "5dd3cbf495b0f8c35bfa3ed149ec8b2b"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "7fd35323f323bcb8357348ae4a16f78f"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "94a521d62b9ec1876d965c6fb424e877"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "5c1f6f529e5b7cad46f132395af3fb7a"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "d700ce356eecce6e387afa601a425c2c"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "e6781be1a8fe5b650f2c8ea7d0800218"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "b6e8f20a95506ff75964046add736ffd"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "76f7dc4b95c1c9a16df7f4586cb6520c"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "ea718424c1d4233865916c098d8cad6a"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "aa3e798bf17fa2ca061699d4a57fce5d"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "18004dbd6745cb1142ed49cd6774177d"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "24b6ddf600e42425fb71debeb06efe6b"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "44f18f12b51fe8b67c3fde540fdb67d5"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "4a7e316168a9a5823e2b4a6e058d1e1a"
  },
  {
    "url": "courses/index.html",
    "revision": "b18a99cd965cc321a5bfd8387f4c5165"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "132c72edb377691ef5aae7dd92f3ab1d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6602aff9f33df6de090f29b4902caf07"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "79e69ef53cf3508fe8ab29ae2278bdd2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "7f4554e2712869d39466f907d4c678c2"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f74c235533818c3e00af30228f9a8b10"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "63ff2ecb9d007e39ae8d603426540886"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1e14f2d732f5e5fa41d65ec5016c6ee9"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "7dcd8148d89ab1d6c0e0fffda94caddc"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "497cb968319ca9d05e4c41656b9d6cb5"
  },
  {
    "url": "index.html",
    "revision": "07715cf2fd93deb1853a1e5afc69b4cd"
  },
  {
    "url": "studyathome/about.html",
    "revision": "79e1bb3f848e31115fe822710bfac133"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "f6219102cd34c4c222c7b5e44485ed32"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "b09fe6db193cf1b86fb47baf5f2263bf"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2cb64773005547d6d89c3cd29a838bda"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "7078fa67d9c81d963e98d127bdc7a3c1"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "9ac15de398ce706e6a1a8afc19e30d5c"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "85d599c8ba476acd8980eacda05c6c2d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "86172c229260edbd3d8361f25c9f1fa6"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "13439778ac94dfcee7303222d6e85f74"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "7824f686df383e2e10e6ee15cf1a61e4"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "fd49a2ec9986fc929298b525d5a8bb88"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "cdf4d635ea90885c7e1fccfca5c040c6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "3e116c471d9d6fdb48528a303db8f4fc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "4eb603fbfd891b69c798bdfb50b646e5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "e2d7224b1062cc9ee7ab1d09809e007d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "72e52c96d021d512c003148b55b97a76"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "37ce1c399b5bea4390612f01b14b40c5"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "41235c7c87057652dae299acfac6ee93"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "dacfac6fc9d72accc1381d7fe9da9f3c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "fcdd19686848b3e296b0ab709033150e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "2916ea1f5b7fef9aca1c5b538fc3e114"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "3a8a99ad438060d09f041aeb881b3591"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "1a92cdb9b9258bf5fb6796bc053212de"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "5274bd74757c6d9598dcbf89f93cb3ab"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "00fd90fceabfed8f5fdb342e23c4a3a4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "03d5716478fb86e9ed4d297af2757a8a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "d0695b9c8c34fb8ef3507ee87676aaa2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "a41eed0b82ba8f7306a08ef28bfa3c22"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "acced9e06e624260bcb2f46bcef21b69"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "bc51034addbc838d566adf153cd2598a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "5512dce25d9dca09afc5a95e5096eaae"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "1deb822307d4bcc8883e3b07ea1d1511"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "8d650d6a116f59a0f365efdcd011c94c"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "5274bd74757c6d9598dcbf89f93cb3ab"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "dbc3de0fe8ebc36ef38ec1a716ef660e"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "9ba37f9303a89a2a54280d9882d2c646"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "2e4d2a9a50bd93f5b83711077705054d"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "2e136ce28dad1f169ae527cb5e8fbde2"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "dba23a84ec1dc8f9ae33326346a7367a"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "19197e8becae8801b1937f68dc63291f"
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
