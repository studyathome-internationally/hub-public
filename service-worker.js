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
    "revision": "fbf46e61e7e259a7edf8c8da90b40c2c"
  },
  {
    "url": "assets/css/0.styles.763f3b80.css",
    "revision": "2534826063580d23e52aeaceb2093035"
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
    "url": "assets/js/16.fc6b53e7.js",
    "revision": "18d28a86daff06f4846a61883df1fa99"
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
    "url": "assets/js/27.bd6f86da.js",
    "revision": "9cc0a3a7c8c5d9ce30308dc7df08ad4e"
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
    "url": "assets/js/31.1324a02b.js",
    "revision": "691e43adbfae00bd959f5687d6347599"
  },
  {
    "url": "assets/js/32.cca42fa1.js",
    "revision": "229246b4a10d7e489c3b29722e0c1dff"
  },
  {
    "url": "assets/js/33.37ea3000.js",
    "revision": "b944c0177f449ef7f53a9a9d3dae73fc"
  },
  {
    "url": "assets/js/34.97b24bba.js",
    "revision": "82792f912adeebcfc89e687582304143"
  },
  {
    "url": "assets/js/35.9928ce6a.js",
    "revision": "034c4bee41bfa9e06702501f08909144"
  },
  {
    "url": "assets/js/36.9aa74047.js",
    "revision": "4e601c367ed634baf2e994ffb7cbd9ad"
  },
  {
    "url": "assets/js/37.b3a379cb.js",
    "revision": "bff3dd12959c3ac712affb56ff135392"
  },
  {
    "url": "assets/js/38.015e154c.js",
    "revision": "3b41fa7c4382f2bfbec74569e321d485"
  },
  {
    "url": "assets/js/39.8c96cbd7.js",
    "revision": "202ff22623d1af269aa26b963ef99a8e"
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
    "url": "assets/js/42.53c5b2c2.js",
    "revision": "4ae5262a1ec10506e7ab368d7b27b77c"
  },
  {
    "url": "assets/js/43.b24e8a54.js",
    "revision": "4fc02a60d6daa9e8123c0746ac7b5e1b"
  },
  {
    "url": "assets/js/44.6b2f3aae.js",
    "revision": "bdde80c77665440dee153946631925c2"
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
    "url": "assets/js/47.4e9e115c.js",
    "revision": "fab3ba52416714998cc75ad43256358b"
  },
  {
    "url": "assets/js/48.2438ecde.js",
    "revision": "23b2ea26bff1f0cdc6278dd212da9098"
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
    "url": "assets/js/50.f2326502.js",
    "revision": "ab09524cb48f7a3f0eb6b634eb7515c5"
  },
  {
    "url": "assets/js/51.e89209ae.js",
    "revision": "373ecc9a56adc849d87e92a258bf59b2"
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
    "url": "assets/js/61.97e0c881.js",
    "revision": "23c710b636e06c6e70781d0abd27c4d0"
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
    "url": "assets/js/75.e52eb667.js",
    "revision": "ac419e2865ca6d42eb1903aa9ac6eb42"
  },
  {
    "url": "assets/js/76.ef6718ad.js",
    "revision": "3712dac0cf5fec2d0c6350fdf80f463a"
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
    "url": "assets/js/app.91b8d369.js",
    "revision": "4f477cb654dad07cdaaa6c7dfc49882a"
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
    "revision": "56ffa5fcb9dc4c6ff4d92b1771b42b10"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "00af8314b52f8d75f04d01306a3a1a08"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "4468b912bc0042fd472c5048f40e6e48"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "a2006d3208f37215745d53bdbd20a876"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "709cc682a7f3f823e82c7a9504d411a3"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "c8a7a4d64f438ab92088a03beeb2d33b"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "bfbc3cdd5d9aa8b3d32e29544065424b"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "289e0c310ede9f646d9cc6c734aa4f19"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "6837ea827dbdcc5facc4005d3227da54"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "a1cbf41169f92f8f2c18522a3e07842d"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "212f1bb1d3de2c104804296ef9a3d755"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "247f10ba4232d8f06c83580c815f1bf9"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "35984bdf7292f095ba5da9cc40e16138"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "d33aeafd6f4c5dcca6bca905025ad8d0"
  },
  {
    "url": "courses/index.html",
    "revision": "6d1a07a1b291be79b46539029f02812b"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "c04786ee92eae1bc90f2f21376a55b8d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "1b9a6f9c6ba8a3896c6571b905ca9875"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "be34196c6c6ecc72427d668db2ebe5b9"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ddc6b5d53689157920e7a844fb30c69c"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c20df6394fb4503d3fb20bb681f907dd"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "98c98faafc9a98a215ff5e0db2e6063a"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "9fa780fd2bfffb99908d54cab800b8a5"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "a5b3aa58fcd6ac56d40d142f7bb299e9"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "3102b045980321a399f82fdd18dc50ae"
  },
  {
    "url": "index.html",
    "revision": "19f696d65e685a8a4696a5143bdc4620"
  },
  {
    "url": "studyathome/about.html",
    "revision": "21c38411ce771a3760df6181af469fc7"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ab72925caea3fb1c07c7275ee394d661"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "5a0bb58f525451d35e4b0575c923bf39"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "14a67c07e741fada46a738f4db42cedf"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "9a35d254fc7fbc64e6d8d1a9b92eddf6"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "9148edaac231d623cff50bc60dcd3f9e"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "711027e8e5793263ef9ed4dd1aac0af7"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "3be560eaad4ec475ac9763ac8d470c09"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "b6a45f682c91a7858ce05ae661911eb2"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "9a35d254fc7fbc64e6d8d1a9b92eddf6"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2184d274a4f58c79e0673590ed618e85"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "20d138a0a33d1af669a7b444663f7916"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "a03a6e453947f096b6954f569b8384b7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "05060f98d9363a09e09796a254362c02"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "7fe1e50e02a44bea18e1d83b8d4b6456"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "430f5c05c6c998d2f901d78fc8dd4294"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "14a1a958f98b1443a417fc223bc68675"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "1b118d422056ca782572ca0a6f1444fb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "81820202ec7193286ca91123e2bc0b9f"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "16a001c059f94b7b769f262ee845f206"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "9d4416a9246fae9500615fee74ebac46"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "11159c2ce6bafab1d31767446727f765"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "b7b2216af05f308e1d89e8787cf85b12"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ae3190b0022bfc09a242575dbbd157bb"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b25a54e2f4b15ea85bfe4ca0a4c264c0"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "d18e7cfd600d1a6566c807195f103f31"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "8ec4a877b66846301a74cf5caae63b10"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "f99122d530ba95c2aba558a2f5ec3449"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "400a951bec146de8bf3f5a3fa997c10c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "b15ce4f51be2c2c54670ee1384a8bc38"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "9eebb2e8acb5aec7653792ace244f9ed"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "d5616948d1500a31820216ecce689ffd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "6a945f2e0e5f0809263273b7cac62ec8"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "eca68b36590015e8f2b7c23640d86796"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "13c0c331bb01c2165b4e26bf91e5ef14"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "21cfd437ca1533a6f0bbcb053e86cd2d"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "68ee7d7ea09188bd99e9e090abcd94fd"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "2728787d71aadb05e90a9da404dc09c4"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "15bb6b37c77321120624d1e886ffa7d6"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "7cb5ec1a5d4a57ea8fa40fdff5a22983"
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
