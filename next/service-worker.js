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
    "revision": "1158f1b96a6eef0aacd169184394740d"
  },
  {
    "url": "assets/css/0.styles.2de4e58a.css",
    "revision": "0f13158acaf0261e837cedcc910a268d"
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
    "url": "assets/js/1.3c6789b6.js",
    "revision": "4512e362641697a1762831878e7cdc37"
  },
  {
    "url": "assets/js/10.cc7b27b9.js",
    "revision": "55345c28117d277e9ac660b2302e2060"
  },
  {
    "url": "assets/js/11.773f63eb.js",
    "revision": "771e0d8987e99f22aa0dcd42ea33a93f"
  },
  {
    "url": "assets/js/12.ac99cea7.js",
    "revision": "52053ee3a9b77d359690b2e86a34ce6b"
  },
  {
    "url": "assets/js/13.0e8b1f86.js",
    "revision": "01430d697f50147205010900f641af63"
  },
  {
    "url": "assets/js/14.1615a14b.js",
    "revision": "4dc0a94382db9105527264bb836c355a"
  },
  {
    "url": "assets/js/15.8bab8284.js",
    "revision": "41edf906d5b306349a77f962b54d9f30"
  },
  {
    "url": "assets/js/16.754fc1af.js",
    "revision": "ff8fc0e0f20edc4d9d80e7c806ba2ae7"
  },
  {
    "url": "assets/js/17.b82649cb.js",
    "revision": "0fa40bd0e197de4f80028eec56f6345a"
  },
  {
    "url": "assets/js/18.b19da352.js",
    "revision": "ea1db2ec97103b3e048b5bfc8173ce47"
  },
  {
    "url": "assets/js/19.1a5374fe.js",
    "revision": "b236f86d92813f70a300f17726bcfb05"
  },
  {
    "url": "assets/js/2.a7afc26b.js",
    "revision": "779fbf7ab1b595f291ab557c441803e6"
  },
  {
    "url": "assets/js/20.702a6c53.js",
    "revision": "508807e1f576476a7f054e1fcae3ef9c"
  },
  {
    "url": "assets/js/21.ce900210.js",
    "revision": "0833f7719d51e7f8ea4f511e27679e4c"
  },
  {
    "url": "assets/js/22.5b39d56a.js",
    "revision": "47cdc41e69584d822753cf32d33a2951"
  },
  {
    "url": "assets/js/23.47f9f7ab.js",
    "revision": "4d01c1ebffa0142d6cc014370a367de7"
  },
  {
    "url": "assets/js/24.e817f6cb.js",
    "revision": "28d5bd2e948238324dae635696e596d4"
  },
  {
    "url": "assets/js/25.c4ee5320.js",
    "revision": "c8f3f287fa1330c4cdf6bb60b4d265e6"
  },
  {
    "url": "assets/js/26.5e293ac2.js",
    "revision": "b07e4ea5dafe4b8c2b06e7ee8ecaf997"
  },
  {
    "url": "assets/js/27.3ca03270.js",
    "revision": "a7dc6435e1599b3743ec548450809700"
  },
  {
    "url": "assets/js/28.c1d28cc8.js",
    "revision": "f52d7ab093b4f52eeb0bfe5b88c00462"
  },
  {
    "url": "assets/js/29.f99607a0.js",
    "revision": "ea4d701e538ae1ed7a719682cd9d4ca7"
  },
  {
    "url": "assets/js/30.aa6606ef.js",
    "revision": "a66a32709215a4616850e8b83a3cde9d"
  },
  {
    "url": "assets/js/31.a31c4a79.js",
    "revision": "d2ef92294b6c4af1ce9f81976bff8c65"
  },
  {
    "url": "assets/js/32.8617758a.js",
    "revision": "4046cf6d708dccc921c00926db16b2ff"
  },
  {
    "url": "assets/js/33.27c2cd27.js",
    "revision": "09790a99962b99058a6a43a7da1878cd"
  },
  {
    "url": "assets/js/34.6e566106.js",
    "revision": "848b19af7328a83a28ef9e51e6386c0b"
  },
  {
    "url": "assets/js/35.d0951916.js",
    "revision": "2e0207e286a8250c7f656a74046bae12"
  },
  {
    "url": "assets/js/36.bbdca6eb.js",
    "revision": "c19cf7b0eb15a3f940852b383ca59821"
  },
  {
    "url": "assets/js/37.791d194c.js",
    "revision": "ae407c4b07f43e45f915ffcd47051438"
  },
  {
    "url": "assets/js/38.31c07a47.js",
    "revision": "7da958ee5f2c843549733006af5ecbbb"
  },
  {
    "url": "assets/js/39.7cfff38c.js",
    "revision": "8d02367b6fc6b1c2f4217ba7bd5322b9"
  },
  {
    "url": "assets/js/4.ed11b113.js",
    "revision": "7d4b66678bbcd0f0c4d21c1fec034930"
  },
  {
    "url": "assets/js/40.dba34b8b.js",
    "revision": "e6c1317bba8cf07f566423d70ef67950"
  },
  {
    "url": "assets/js/41.b0bcd0ba.js",
    "revision": "28a223166224028a4f17d72da7d1aa76"
  },
  {
    "url": "assets/js/42.da6103a7.js",
    "revision": "3a99373956c6b992fc28a31a9f34da0d"
  },
  {
    "url": "assets/js/43.1066e1b7.js",
    "revision": "6759bf34db7576e5f2c4e3ac17c77495"
  },
  {
    "url": "assets/js/44.e779026e.js",
    "revision": "379e44ad348ef81d115ed0a7b762e46b"
  },
  {
    "url": "assets/js/45.3b9016e8.js",
    "revision": "4a6e4131d74deb8431b973c525ca8480"
  },
  {
    "url": "assets/js/46.af3e8f9d.js",
    "revision": "2cacfb100247eaebe4ba72933fb05042"
  },
  {
    "url": "assets/js/47.14945926.js",
    "revision": "45c6966bf571982744f7b2063f6c2110"
  },
  {
    "url": "assets/js/48.a6036171.js",
    "revision": "6f3cc93c0e8cbb05f14640a52c46085e"
  },
  {
    "url": "assets/js/49.6402f96f.js",
    "revision": "718f35c3bc028d9b120b42e63910425b"
  },
  {
    "url": "assets/js/5.d2ca810b.js",
    "revision": "c883528cafe9dec556d08b015cacd5bb"
  },
  {
    "url": "assets/js/50.ed8f3d1a.js",
    "revision": "b1910ecc708677b21bd3abec1f28a6ea"
  },
  {
    "url": "assets/js/51.ec3344aa.js",
    "revision": "c2f6a004338a9227ef918c900c3788dd"
  },
  {
    "url": "assets/js/52.0e3f07d1.js",
    "revision": "0dfd7a49335fd47b4da5c8052ae6ad41"
  },
  {
    "url": "assets/js/53.d4540c24.js",
    "revision": "e42de5e821a001df0e80f082589e2866"
  },
  {
    "url": "assets/js/54.4122bcf5.js",
    "revision": "a87e21aa3d44fad9db8a7d94f6834e9b"
  },
  {
    "url": "assets/js/55.bf91e01c.js",
    "revision": "28e66f98ff999c1a55b7c74300423c89"
  },
  {
    "url": "assets/js/56.573085a5.js",
    "revision": "dd31ea9c8ac424f03af7a0e30da1c4f0"
  },
  {
    "url": "assets/js/57.9ed91fb0.js",
    "revision": "7a0b7f5a98783e8cc7118385ede51fe0"
  },
  {
    "url": "assets/js/58.61b541ad.js",
    "revision": "1dc97ef3f8a35a737944f47c8045bca5"
  },
  {
    "url": "assets/js/59.7379b01b.js",
    "revision": "85db7b9e5aeebc222a144994791ed998"
  },
  {
    "url": "assets/js/6.1abb6013.js",
    "revision": "0c16ddbd75d8c972eb3f57e11f9bd0ff"
  },
  {
    "url": "assets/js/60.2328e925.js",
    "revision": "21dcafab265b03aa1e8e674b9becad00"
  },
  {
    "url": "assets/js/61.505e7ff0.js",
    "revision": "a4ec95737c13c5b98c45b82629bc790f"
  },
  {
    "url": "assets/js/62.a183f9c2.js",
    "revision": "74a5b6cd2975a70bc34dd63b7ccd7ed7"
  },
  {
    "url": "assets/js/63.98544a15.js",
    "revision": "97a24a7c1174405ccf9a204eaa1ca6cc"
  },
  {
    "url": "assets/js/64.8b3abc19.js",
    "revision": "9822a59b21ea251f92baf30eac021456"
  },
  {
    "url": "assets/js/65.68e93704.js",
    "revision": "3937d01924a0fdca6287e053a2857c21"
  },
  {
    "url": "assets/js/66.7d890e57.js",
    "revision": "4f55ea4793216d2714532f20c3c114db"
  },
  {
    "url": "assets/js/67.43d54da6.js",
    "revision": "7f74e669cd59c205d37d0436dd3693b0"
  },
  {
    "url": "assets/js/68.8359e4b8.js",
    "revision": "285037f3e718a3de67e3d9f3800c68e9"
  },
  {
    "url": "assets/js/69.be52f6f3.js",
    "revision": "bca0e55e945060d38850ecc6c22fc144"
  },
  {
    "url": "assets/js/7.6d49a167.js",
    "revision": "57ac6cc6f313b9e40dfaf90df3b163d7"
  },
  {
    "url": "assets/js/70.25267069.js",
    "revision": "5a35a388e0a5a10dfc533d057631be05"
  },
  {
    "url": "assets/js/71.33dbe866.js",
    "revision": "7c36407b2d8c21a951046f71216248c0"
  },
  {
    "url": "assets/js/72.7f42edfe.js",
    "revision": "4b548155445fd787da7599d19c6025c7"
  },
  {
    "url": "assets/js/73.32989e34.js",
    "revision": "8e45794416472cfa8f5e6d33992dca82"
  },
  {
    "url": "assets/js/74.aa5f87f9.js",
    "revision": "d0589a700336a3cacad9c0948d96d2e6"
  },
  {
    "url": "assets/js/75.a3a362f9.js",
    "revision": "9f77c4e11ce7ce2424f23267900342ed"
  },
  {
    "url": "assets/js/76.6918b61b.js",
    "revision": "eff63c9852e59131100da56c4ac4a867"
  },
  {
    "url": "assets/js/77.161a7cf8.js",
    "revision": "7634f09a154f937671e332504b7136f8"
  },
  {
    "url": "assets/js/78.917f446d.js",
    "revision": "77e323195e756427c5a611ac4642b26e"
  },
  {
    "url": "assets/js/79.bd991857.js",
    "revision": "95747b58c66fd013feea24d1a02f42cd"
  },
  {
    "url": "assets/js/8.b5b38166.js",
    "revision": "b316112f8d51d458ddcf409d8af9984b"
  },
  {
    "url": "assets/js/80.1e8e44d6.js",
    "revision": "29fcd3a21d1263036ccb116777cc87a5"
  },
  {
    "url": "assets/js/81.ba67b9f1.js",
    "revision": "85e21fe3c14667f23cd69940e608ce92"
  },
  {
    "url": "assets/js/82.f574afad.js",
    "revision": "5c2aeb4bcd0241e14abdce3b130ff609"
  },
  {
    "url": "assets/js/83.aa52347a.js",
    "revision": "209797aced1292d71a725ecf966ee7ae"
  },
  {
    "url": "assets/js/84.b7d7c645.js",
    "revision": "5f098111218c8b738cc38499a30ad34c"
  },
  {
    "url": "assets/js/85.45ac4d39.js",
    "revision": "59b274c8445281d1934ab644a6470243"
  },
  {
    "url": "assets/js/86.5972939d.js",
    "revision": "a3a40388b74f254454710a7fb0f06382"
  },
  {
    "url": "assets/js/87.3c2cbd00.js",
    "revision": "d53409b6981f2b1dce299d5babf70a33"
  },
  {
    "url": "assets/js/88.704da307.js",
    "revision": "3be3fdfe04938f3e237d92b9fad0d090"
  },
  {
    "url": "assets/js/89.353c2bc5.js",
    "revision": "71f7253b35debc6fb1d702bb6e74a5e8"
  },
  {
    "url": "assets/js/9.2a02e089.js",
    "revision": "7ff1780c234ca5949100fa84b60566a1"
  },
  {
    "url": "assets/js/90.47ee6325.js",
    "revision": "5555994e6e1608f3392f2d9fc41ef24e"
  },
  {
    "url": "assets/js/91.f0cee550.js",
    "revision": "50a328f7dfa85b58165f785c1b1fa7c7"
  },
  {
    "url": "assets/js/92.84cbbb08.js",
    "revision": "7fcf9bf32eb31b0acdd0ed39268108a4"
  },
  {
    "url": "assets/js/93.3e58c94e.js",
    "revision": "d08119277deef68716758a2105eb9d95"
  },
  {
    "url": "assets/js/94.9657bbf2.js",
    "revision": "ea0da115705ecde5b0812f06353d1793"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.5cfdc09a.js",
    "revision": "cd69c3ec2f87cb992fbacaf2768d0c95"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "8f2d26a34d589606b8bcad80044ef44c"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "5307ec2dd0e3acdbf9065f1e51b2f866"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "b28fe365ccc8f2033f3ff56689f25e62"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "813022ced5a529f88b4171225fa24207"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "44467784b7d7c19ac2f875589dd14fb1"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "c3be3b31bcdf362582e72d1faa0ea366"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "b957c4264a6f5b01a7345bd27b5f7310"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "c00194c00d036310853f3df1bb92d067"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "2fcea5301f03bfa3072705717f9e8da0"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "98106db7241877a0ddbfae42c160bfc5"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "a9f2db16316212732bd891362c97e4fa"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "59ce9a231f2ccf104d87fd3dba20db52"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "cc203a29bdda2b97b64d5c88b2382900"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "77b30fd51cc6a49040ff49426aee1fe1"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "8000c3996a8ef30289f7e990ed183b7a"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "c11d8dbce72549955144418aa3e323cb"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "3f55af25ebf0d7d6356c9c0e4287ebcf"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "9cc8ed9038ea49dc2c9b049faa254bdb"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "e8535b804ffd5703800696f9f124b01d"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "7ad68817a6e7db18633fbe20ef7e6925"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "96659c3ddb499ea2b46316472bd45c3e"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "024edfd26a94c402d9464b25f2345d43"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "b5d63d1972920b13bf2d56c471612623"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "642666040c3b502959333f42a2e60049"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "574254f567c9be6fd02be7bac452e192"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "a01826a407e5f404c5076ef6bb0e16de"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "28ce9a7b0c4ec54098f54793806ba36a"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "8afaab192edf71ed9aef0fc1dc30198a"
  },
  {
    "url": "courses/index.html",
    "revision": "d2835d2f702463a678f87ce3503018f3"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "c4e8d9a3978faa763a17bb1275036bec"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "dc440c7546abc4ac0b6f09af0b881efb"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "a7e9541177561947b6e60974ab4a489a"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "7b8a2885ba5a5d42870d167422127b82"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "254b1a0d7b43d1584b0917862482028c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a7f316dda7708234bcae5beeb43c1b83"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "8729c85a71b3ea63316992523f757040"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "39326591db9d67be93aeddd4a9acd420"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "88bb262747664d864c76cf2e735d26c4"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ec513166d150385e1e371f15d1bd8d56"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "a9c7e6cfcd819670cae08e1e6803dde5"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "b89bfb901c1c033c42e7dfbc14b6e1f9"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "5de57f0b74d7361ed3c783e27c5bb08d"
  },
  {
    "url": "courses/template/index.html",
    "revision": "78ea7f88bce1029450c883449df86b80"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "9fdb8d738fd3070aad433a5fccf222bd"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "c4abc30e2f5112a8d2c214036887efea"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "43910f03355288d96957a789497f38f9"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "9654ef068ad8e9877461bc00f935f6f7"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "f91fab5198077018ef57962a083b9700"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "dcf63f9dd383faeec8af50379bfd69c7"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "5f69dccc493cdce113021cf82f864db4"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "e0d91ba392e3637702fe36732020aac0"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "7a00a097d3a6328b2d84cd7bbf264e85"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "fb7da3ad25ae340c9382d1287a120ce5"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "4058f93b1f1495fafe2484f044ef9c3f"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "a3a5528515070b3d8fc385be34b78c70"
  },
  {
    "url": "general/enroll.html",
    "revision": "20e8564789db9c09a74861f6f2e58a79"
  },
  {
    "url": "index.html",
    "revision": "fa4b91dc1659a984db64d7ad3844fc4d"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "25cecaa09c3f75412a108089ed4557e8"
  },
  {
    "url": "studyathome/about.html",
    "revision": "01973e55fbf8674c4614f6d7698725b9"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "064cb50b16509753aefb4fcc29bb1010"
  },
  {
    "url": "studyathome/help.html",
    "revision": "e4632380bef77ebd2a9617cf27b1addc"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b59e9f7b38398382c524eab504e9a772"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "cc1b0c1670ada24121cf10cc82aa80a7"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d1617804fc9748e128dfac3bc20cae9b"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "2d9a4da1a2ccc20ee64d29e2b9b2fc4d"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "e7be3219c9502177d5c10b9e41bca420"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "f0d041d667e99f4c9a4e1bbe039d402e"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "eb1cd407f3ae96517d579d9459463073"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "4545ff720edbd8b0daf4169c1b14896c"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "20ed2c43c1ea32e1a82f764e1e21c7d3"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "3e2f2bd043440530d37ddc0a541fd748"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "219de14161a16b38ac27e695a86bd839"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "d78b127041df0db860f1017ca342f78f"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "5a278044d52867fbf75b2fd617b62336"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "14fadbda52d8a48b4dd7646a2a94fb0a"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "3ebcc2c78f3546a7fb9bbeaa558d5951"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "f50e528e381ad7df9d3a8c614e865116"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "be08a7271097c5425cbf868ec2c31cd1"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "d4143d6f609b781a4fe40c9c73e64e83"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "e04512212d400b8fd223f29d8ac0ddfe"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "7aee943ce42871c62afd7da08ddd1b9e"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "88eb12516bb15c3746c16d8cffee7f12"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "682d72b9332f4141bbcda667c68bcc2a"
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
