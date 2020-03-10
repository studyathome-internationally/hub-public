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
    "revision": "d235e70c691505c93587317ac1ae56be"
  },
  {
    "url": "assets/css/0.styles.097e3777.css",
    "revision": "614ecf1abdc728f943fd9a1f3aa0100e"
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
    "url": "assets/img/800x600.png",
    "revision": "eb2a1976be398fafb5427d5ca17b5bc8"
  },
  {
    "url": "assets/img/courses/asterics-grid.jpg",
    "revision": "7f95fcce808d500d117e5f25bd1d7345"
  },
  {
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
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
    "url": "assets/img/partner/uastw/uastw-at-night.jpg",
    "revision": "bb98ed986758d05549ae03342857dd73"
  },
  {
    "url": "assets/img/partners.82f515d1.svg",
    "revision": "82f515d1d6b00ca0bb96184a77e560d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-workflow-all.bd2f8ab6.svg",
    "revision": "bd2f8ab64c179ae8b7c45f1fb73e7550"
  },
  {
    "url": "assets/js/1.2c53aaf9.js",
    "revision": "88234267c8d55f6221afbc7aa0831144"
  },
  {
    "url": "assets/js/10.b630c9c6.js",
    "revision": "61fa25c3ca6bbcf10caab3ee4f397fef"
  },
  {
    "url": "assets/js/11.03a197ec.js",
    "revision": "3d9c3a25816efeb86ad1c7a93fa8915e"
  },
  {
    "url": "assets/js/12.ce7090ef.js",
    "revision": "88d1a01cb77ab3305b46dbeaf1ede972"
  },
  {
    "url": "assets/js/13.a07fcf79.js",
    "revision": "1d36fd9bd827d303ea19b012e2aa84d6"
  },
  {
    "url": "assets/js/14.6314a10f.js",
    "revision": "2bad16fbc4297dc43bd8e50c427a11d9"
  },
  {
    "url": "assets/js/15.db7aa402.js",
    "revision": "b2a8fb5c3dc9cb7d1d0103888a75e796"
  },
  {
    "url": "assets/js/16.30740248.js",
    "revision": "3b947c30298b786756910387336af45c"
  },
  {
    "url": "assets/js/17.53c5a90d.js",
    "revision": "f25cea46ed63e9037a129d2e86e3e207"
  },
  {
    "url": "assets/js/18.c61f8da7.js",
    "revision": "45e703223a2a97d20012ffc7c302d2d1"
  },
  {
    "url": "assets/js/19.be7614f5.js",
    "revision": "3da582973309fbd6a1cce87fcb55d1ce"
  },
  {
    "url": "assets/js/20.a3233458.js",
    "revision": "be558d4a53235cb453189433a1633217"
  },
  {
    "url": "assets/js/21.b599ec13.js",
    "revision": "b93b7e59ff5e56d7b0e9f8f4614dd392"
  },
  {
    "url": "assets/js/22.4119bf07.js",
    "revision": "724584e9f6128c427ce4a33ea524ada9"
  },
  {
    "url": "assets/js/23.4769968f.js",
    "revision": "3a48157e4500f627a500a24b044885fb"
  },
  {
    "url": "assets/js/24.51e51b5a.js",
    "revision": "62a38cf29c9ef30fb2843479ff511fca"
  },
  {
    "url": "assets/js/25.66987c42.js",
    "revision": "47223d08d6d153a7de9c31168337f386"
  },
  {
    "url": "assets/js/26.a0213dee.js",
    "revision": "1e0af229acc0d9d6f51fd278b160a269"
  },
  {
    "url": "assets/js/27.66e30563.js",
    "revision": "1da68519f3fe632e17b434436e17794b"
  },
  {
    "url": "assets/js/28.b08473ea.js",
    "revision": "32de3dcf8acb14570206d17e1966b466"
  },
  {
    "url": "assets/js/29.aae1f0c3.js",
    "revision": "af7c41a8806d45c1d96b2054b3850a0f"
  },
  {
    "url": "assets/js/3.d1659d95.js",
    "revision": "627fc699ed4d28f39b7706220965b438"
  },
  {
    "url": "assets/js/30.94c469d0.js",
    "revision": "02971f43907a5abf05c2bc1790cff2fc"
  },
  {
    "url": "assets/js/31.66c44140.js",
    "revision": "dcaf042611762355341efd5e409243ce"
  },
  {
    "url": "assets/js/32.553b3a51.js",
    "revision": "580a45d73a2c02aa431c17b617ffc35b"
  },
  {
    "url": "assets/js/33.42c6768c.js",
    "revision": "5626ae62b0aecb268e4c6417f0c54e27"
  },
  {
    "url": "assets/js/34.49df5993.js",
    "revision": "813257fc8869eacc3653d5fc050bb88f"
  },
  {
    "url": "assets/js/35.642cfd8d.js",
    "revision": "06944bfe1360d4fcd56c43a703b68296"
  },
  {
    "url": "assets/js/36.545475ac.js",
    "revision": "42889b92effcb15060abf3b8e91af94f"
  },
  {
    "url": "assets/js/37.b4e31a9f.js",
    "revision": "4abbd087c17f06730a9d6b10b468fcc9"
  },
  {
    "url": "assets/js/38.4254a868.js",
    "revision": "b09960fabc7f6e77074d943f0fb33701"
  },
  {
    "url": "assets/js/39.8a44bdf1.js",
    "revision": "ddd6f65bced9223e0f653bcac72023d3"
  },
  {
    "url": "assets/js/4.76cb1118.js",
    "revision": "436f054bec7e3b588d4c9cfceddc2dcd"
  },
  {
    "url": "assets/js/40.e43e51a9.js",
    "revision": "ebbb5885029c953450bb2b1553029282"
  },
  {
    "url": "assets/js/41.70d41f9f.js",
    "revision": "706824e4d89c86f11e650dcc7629132d"
  },
  {
    "url": "assets/js/42.f876ad7c.js",
    "revision": "a5cddc7f60f6d0cca937f71869e6363e"
  },
  {
    "url": "assets/js/43.d278d76b.js",
    "revision": "be6c22491aa6b5cdb3fb8d9b7e48e44b"
  },
  {
    "url": "assets/js/44.603564c3.js",
    "revision": "cbc9d2fdff382a24bb1a7d28ef3838ae"
  },
  {
    "url": "assets/js/45.9f1db7a1.js",
    "revision": "fc691ee1f17b450293414017215b8087"
  },
  {
    "url": "assets/js/46.8e457e28.js",
    "revision": "5364ac7363c43ac737b77569d55b163a"
  },
  {
    "url": "assets/js/47.91e11d27.js",
    "revision": "2c611b9a8be5a1db69505e9d0fbf5662"
  },
  {
    "url": "assets/js/48.8f731d19.js",
    "revision": "26ee22a6a3e9c6ca055e29246445fed6"
  },
  {
    "url": "assets/js/49.5a7ea739.js",
    "revision": "6bf894965b92ceffebf45c1a88967c9e"
  },
  {
    "url": "assets/js/5.e1a61d3a.js",
    "revision": "c0e73ed899e892b25ed09e44e859876a"
  },
  {
    "url": "assets/js/50.887b4443.js",
    "revision": "3de80cd5dc23f6851fa980b8fbb69d96"
  },
  {
    "url": "assets/js/51.63b5d66d.js",
    "revision": "21d3bbd86581954d285605655d70c4ab"
  },
  {
    "url": "assets/js/52.5f2c1548.js",
    "revision": "4261eeff4ab4a4129e7aa81574b07459"
  },
  {
    "url": "assets/js/53.3d0f4970.js",
    "revision": "4dce106c6d078522db005c479472c87b"
  },
  {
    "url": "assets/js/54.6ad8116d.js",
    "revision": "de35c825d7f47413fe84812b8cfdd8f7"
  },
  {
    "url": "assets/js/55.ea2250f1.js",
    "revision": "5d4674b1cde4b85431ee99aa3cd44c9e"
  },
  {
    "url": "assets/js/56.94f3149c.js",
    "revision": "6d8ddc9ef84b0a664ce4b17940d60ab1"
  },
  {
    "url": "assets/js/57.e102dff6.js",
    "revision": "905432cf92f835a464f5859aa3c7a561"
  },
  {
    "url": "assets/js/58.a5b5d7de.js",
    "revision": "f5210c482bfde0e41f9f8126b1720f00"
  },
  {
    "url": "assets/js/59.d5766b9e.js",
    "revision": "aa724b0da0f0b6754e02620d900e0e89"
  },
  {
    "url": "assets/js/6.dbd028d4.js",
    "revision": "1a43d769e6e81047cf102c2cd4139eb0"
  },
  {
    "url": "assets/js/60.0ca039fa.js",
    "revision": "c6b6a488a0b6bdb1b43ca94340cd1085"
  },
  {
    "url": "assets/js/61.9c589dbb.js",
    "revision": "7338e41f17ebbf5293d8355d828cd0c0"
  },
  {
    "url": "assets/js/62.ad4f19b5.js",
    "revision": "1a89980df791118e65e09b6870b94082"
  },
  {
    "url": "assets/js/63.2520e534.js",
    "revision": "6a70760a47536e92171e62987a341fe7"
  },
  {
    "url": "assets/js/64.ddc44293.js",
    "revision": "3665801ef64b950b815222ac1e245256"
  },
  {
    "url": "assets/js/65.9db8e46d.js",
    "revision": "dc99355cb187666746db11d8e935a747"
  },
  {
    "url": "assets/js/66.19a26eeb.js",
    "revision": "58e9b855d10e6b87f166322a7027a9e3"
  },
  {
    "url": "assets/js/67.b1d56af7.js",
    "revision": "8be168501a0cfd52b77d3e0b78741fed"
  },
  {
    "url": "assets/js/68.cf0eec8d.js",
    "revision": "c804e1167f7976b66d467c185c6ddb56"
  },
  {
    "url": "assets/js/69.5deaf44e.js",
    "revision": "b90779f91096992414d5428dd9b064a5"
  },
  {
    "url": "assets/js/7.2014ffc9.js",
    "revision": "638b3e64252d6a69140ddc6a840357d4"
  },
  {
    "url": "assets/js/70.00a6ed4b.js",
    "revision": "5f4e3698d7b9766128f77047b812c319"
  },
  {
    "url": "assets/js/71.44feb02a.js",
    "revision": "49acb1671632582e1d2a476fc15afaad"
  },
  {
    "url": "assets/js/72.68edc30b.js",
    "revision": "9597878f48c0b7bf6731b7293767d1b5"
  },
  {
    "url": "assets/js/73.ba6af323.js",
    "revision": "74e72ac6cadef9c298fdacb5aef2e580"
  },
  {
    "url": "assets/js/74.9caa7fcf.js",
    "revision": "14e7b4c5d05437f82c1ee18afaa8165b"
  },
  {
    "url": "assets/js/75.b61ed556.js",
    "revision": "5770b449d954bcf8be0996702c21eac0"
  },
  {
    "url": "assets/js/76.3d2ad119.js",
    "revision": "85e2a950bd2d3e3f913e23d6ef7aa283"
  },
  {
    "url": "assets/js/77.24a79dd4.js",
    "revision": "148132fc501a80ed08234e7941427cf2"
  },
  {
    "url": "assets/js/78.635f4900.js",
    "revision": "6f647a2d001fc879f378d69651fdab4d"
  },
  {
    "url": "assets/js/79.4d38401b.js",
    "revision": "00d7e9f69893cedc0b718275e06dea85"
  },
  {
    "url": "assets/js/8.65997bba.js",
    "revision": "c02a4075b6f99debed10e4a0f3847c9d"
  },
  {
    "url": "assets/js/80.709b6482.js",
    "revision": "f59f2a620e2e9fc671ac1e1b0d3d1cc3"
  },
  {
    "url": "assets/js/81.4db3140d.js",
    "revision": "472a7258d1b4b63cbe3bc71d2e5f2b58"
  },
  {
    "url": "assets/js/82.913dc62e.js",
    "revision": "ead09631753985444c488c468866c7d1"
  },
  {
    "url": "assets/js/83.6e4250ea.js",
    "revision": "d73c2367b84212e4612c33d3fb261b9b"
  },
  {
    "url": "assets/js/84.105ed478.js",
    "revision": "fc8a35f6ba509f574b2d217497cf0b89"
  },
  {
    "url": "assets/js/85.e33a1355.js",
    "revision": "9b9d08dcda25c26426d27880ec88c2a3"
  },
  {
    "url": "assets/js/86.5136d458.js",
    "revision": "2b5a3d3432193967482abdc4edd80f2d"
  },
  {
    "url": "assets/js/87.f531e3d5.js",
    "revision": "debe3f1969c05026ccf6df8b87279f45"
  },
  {
    "url": "assets/js/88.da1251c1.js",
    "revision": "4064a1809e94b6c07e52a4b5662bf28f"
  },
  {
    "url": "assets/js/89.1941f48e.js",
    "revision": "cf893989c6db0b7ee82b3b9ff744209e"
  },
  {
    "url": "assets/js/9.6ef8f66a.js",
    "revision": "e6f987319d85e97f6b19e03c76bb4d2c"
  },
  {
    "url": "assets/js/90.2bea90e1.js",
    "revision": "6a26c164d2e13897ea60805c265867f9"
  },
  {
    "url": "assets/js/91.9d57596a.js",
    "revision": "3e5ad74a7cd6e9de375ef25ec0377d17"
  },
  {
    "url": "assets/js/92.412c4104.js",
    "revision": "dbcaae838aee85267e39eb107bff4c92"
  },
  {
    "url": "assets/js/93.491b5ecd.js",
    "revision": "2060e700cd6c911195372f4552aa7e4d"
  },
  {
    "url": "assets/js/94.0a04428e.js",
    "revision": "b4348c6c59f041afae0076b8828db3f5"
  },
  {
    "url": "assets/js/95.699f04d1.js",
    "revision": "4c8a0fa847d1fa141c58b126e07429bb"
  },
  {
    "url": "assets/js/96.598c3acc.js",
    "revision": "f6c3564362f0dca7bdaa234378023833"
  },
  {
    "url": "assets/js/97.5dd381ff.js",
    "revision": "9101cd6159a6a75ba5c34f6951a7cb4b"
  },
  {
    "url": "assets/js/98.fb29c581.js",
    "revision": "46394232fcb8721e640e25d3e23eaf9e"
  },
  {
    "url": "assets/js/99.22bbb16f.js",
    "revision": "915d4f2659c7d2fbe0f777da65b83af2"
  },
  {
    "url": "assets/js/app.11e32163.js",
    "revision": "1824aa50d4b53d8f159d0c781fb314d7"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "f7474fcdcf2caa68d002360c9587c97b"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "ddd064b93223e0c2ec723bcd07715dea"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "de744ce1d869efdd851a900e001275aa"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "79d913a958ece2ddfdabbc0ad78be3c6"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "28f7f12cc434bd4e66d0d005c1964487"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "fcb0e84ba80affaa94941aae34a16974"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "b1713a2fbcc7363c671fbaa6e904ef79"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "b7c59795e461365aea804c44ce1bf3ff"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "77a0208dadf6aa52176e262c9a9b3f59"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "7f48af4c84bb4678459b9426603016b3"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "c0fd5eb5c30a9081859aed69cf217f64"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "aed32efab880d0e7c2d773b317dd6697"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "a7328076d54a142fb1aacf27d38d6a18"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "e94e7f73f01503dc9cecb54f456de3a7"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "0dc75417d21dc1b81dddab2b2498ae91"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "bd8567e7b619dcb1138bfc839a6d298d"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "93da890542ba67dbeffdc35467c06c67"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "1d6ad313572de2ae9b51ab31ba90b77f"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "535ba1ff8b2eb84bd64cab567352cb69"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "8dac4f3b66ddcd326af85652068d39e7"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "be15dfdb4d2f21d3603d75e2ae7c1d69"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "bd969ae70a4c383e1ad1d52f1ad5b945"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "4db0cad3b81c6bde688ba2aa3c0855b8"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "4e91a6ba70c9f14b8a6041f2ac6c91f4"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "91cc5a697ca151156c270e951ba53a7d"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "08b543db93c730d9aaa9ba4e02ae8770"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "f21b682e483b0212f7b6bd7187982e2f"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "0f3e0f4d5aba2a4b4f2af74db83450f5"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "13b94f59baabc88f59d9ca21e36a6343"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "0a54d36eda6616b21df8b0dc6d2aecdb"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "1c818ef32770338365e4fff42ad71bc4"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "84db90d8483cdbe7360ff5e00a7c0c8b"
  },
  {
    "url": "courses/index.html",
    "revision": "ef0377a41abfd1ac11500162faa11c37"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "c9aa96c033559106a292fc75e918395e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1d3a31c995caafb98f2c26d2abdf3662"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "b0fc68035ab4f951bd4849838abf3ab1"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "0abdcf1c47c18b33421950756cd0ed01"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "effd434b3f3a6790147bf8bb6b21ceea"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a5ac21b0d756186579a59810f563a07d"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "5b2498d0c02801a34e810b03fb182462"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "50a01c3d4b0ae72c1e4bf4a535cadc9c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "07591313421503a5b9f1c237716266ea"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "bbea44a7a47811ed4d3b2347d0035e8f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "0d3a35edccc9f2794fcf838c16eec272"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "9af7e1ac0b9518d342097381282344d4"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "39631e34df77937dde1471da101d2032"
  },
  {
    "url": "courses/template/index.html",
    "revision": "1cf1dcc6e3209aae19e64f2bb525a7ec"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "dc096f6e2c8d6a79aba0d598b412ddf2"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "5c72e4f9047d1d58bf5663004d7b1b1b"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "0d8b36533f212c77bc94e2938373fda3"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "5891dfbe297f4c843c51b36d9c5b4bab"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "571616de9f609f295d5352e8f1ceef78"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "1895bd277300eb5d1a6e45ef68dcaefd"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "ee96573b4d1574304301b25cb41dfa6b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "46552bb46293124806f085998dd86a97"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "23c0f5793154599daea7492c75d65bbe"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "c45dd0ccc1a2f61c905ac3c8a55c42e0"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "61cfd84da3fa609850c7aea079f46c79"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "c05b6d3b4609e57f83c0c137fd756291"
  },
  {
    "url": "general/enroll.html",
    "revision": "c235ed500df0967db58a093aa9564491"
  },
  {
    "url": "index.html",
    "revision": "ed79c30669e1ab3500ed220dc5d9eed1"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "2945d9db65c6f0af7ee30b42b464bba7"
  },
  {
    "url": "studyathome/about.html",
    "revision": "165a6b5541e1be2a385d2ebc5dec75dd"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "a70c6bdef822466c08f593dc0662f82d"
  },
  {
    "url": "studyathome/help.html",
    "revision": "a39404ebb65f9317273e360f2218d5d5"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "698b69c193caf18d250493023c0a3a46"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "e8a3d64575f1674beda44f025197f7e1"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "b29cc15b020e2d9ccd201858035e1371"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "28f5304e90a49514b1eb030c07469730"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "3545de7800ed0b616d109a1873055df0"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "59fc5731c0ad16cc5146f8ccc5410dd8"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "ad1679424972471fffc4088cca88f26b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "f3c54721d68f07c30581a49afa5b4dc6"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "9c17a3deb9c327ca74267c1c143e3e3d"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "354f1a53626d58fe394e83dd0cbac783"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a6d7ddb5db2214ff254e48ae5a799d0c"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "2e6a11e8cbd40b45884a4e06bb6232fa"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "5e80cdbeeb765644c89c850514be4ab0"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "f4ab47d2e420e12be73df6f5d9905a92"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "e3a99f4b175a597250b7fab427efc443"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "7e9df8b157ae2e8e188e79ddfc3f01b9"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "52b5af736e850e0cffe0103b0d7329f1"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "c3baf62a5fd2c5ed514e1990fab383bd"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "6b1b6f8b917eb0869a9898ca7c14763b"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "2f4c549f0b630e62706f135e118fd2b8"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "571c55576f569476c7b9d791223a51b0"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5887eb96a922ee67d32a0fc6f1d427a3"
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
