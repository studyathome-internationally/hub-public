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
    "revision": "c74378efae31c2848be3fc469041971f"
  },
  {
    "url": "assets/css/0.styles.286109b4.css",
    "revision": "d1d128c150238a53c9f9c13117770e64"
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
    "url": "assets/js/46.a1a9744e.js",
    "revision": "0704d067f142d0bb0a9290ca458b1d59"
  },
  {
    "url": "assets/js/47.3ffa6670.js",
    "revision": "9f052725582ad88a45a061a0a10937f7"
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
    "url": "assets/js/66.88e02afd.js",
    "revision": "73715eb481d275e35ad193c7f6988763"
  },
  {
    "url": "assets/js/67.5c54ff17.js",
    "revision": "93c2537ee7ce0da6e497d3e806927cf4"
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
    "url": "assets/js/7.7078ca90.js",
    "revision": "9ddb5f11a830a22cc8f3bb17cfc4c9d7"
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
    "url": "assets/js/87.148c94ad.js",
    "revision": "58b6fa5ed8d5f92c8f9bef08af41e92f"
  },
  {
    "url": "assets/js/88.22390a80.js",
    "revision": "f69f9608ed58b7b0d8b5ae552e4a155f"
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
    "url": "assets/js/app.c53451a0.js",
    "revision": "78625ca31ced9e119eda331140c9558b"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "68bd591e930caec87f5eace287990b76"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "00cd157aec16f759de90491e429efd96"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "8105c02d6950ebf8d89728669147f33d"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "3e64fd3fe52097b388d164a40d05800c"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "64fa70532ab53285c28ead268b92973e"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "eef0327764e1a75f06521559e571c055"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "6cc5d99397893c4bb25039274bb84011"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "068b46d9181903d986f5440708d11d4a"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "2b27177aadb81007ab9c390b19989ce7"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c6ddcef0f0bf048351b53fa34bf53e82"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "2c6cc72109b1b1999105a79b15a674a7"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "f2268e441e98dd9962ad3e67d73168f7"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "ac85341386959a15e2bb993714251343"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "a9c4042a4f2682ba4c01acf779a682a4"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "336d264d244008188a513b3feccfc229"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "95993ddc1df6d54c23bb9d06e833984c"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "e350523e49e510e129b47d8c0668519d"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "3d68fe8ac71a5787e8cf1dc0fd0b266a"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "8c9ab1035a442d57221c9e9f7228bb04"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "f6fcc191a2a3ac1c5bf15e52c3d03a7b"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "ebc84f09070c97a38418aab2f8a677a5"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "4169a502e0aa31f4c7c0a34833bbc24d"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "6663ee57fdab3e1038dd68e4b271e3cb"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "0fbad605e337057827533fd7c29c7b7a"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "dc7c1100191d5251f30c420e9b061f57"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "ec58a1de6c92c5cb4a0fea76ee0c1cf1"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "72dec6aafde7bda772c690d863ed7ffc"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "975f59c6e161c774507e40cde83d38c4"
  },
  {
    "url": "courses/index.html",
    "revision": "2c9018df31b9136cf1005e5e58c7b14c"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "b05348034e4e672da93a6e514787d5e4"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "c1515a585c18021660b7cef612119ccd"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "0431faabc692be3278c817cad26d9a22"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "8545765f6f8529a0514a37360a2eae1c"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "46f992ab27a4029fcc3601197a64da82"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "ada06943e784714fc04bce2857ea865a"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "4ca28f3d4e12e9dbb7e7eb3cc73b771a"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "76659e99d96763cdddbeb2177d0aab1a"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "7d5a56e64d8d34916eeeea2b0b4bb434"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "3c631d92175f25bdc9ce03d237f0e35f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "4ae156b6d5a8a3e0e02d97cad402d67e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "934b5fa5d0331ae3a9b82c303a22c200"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "baded9f81c609acb28360fdcc2b5994b"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8251de444e7dcd1ff83fdc292bb5a293"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "60340ad8a2a491fff6a1201f414e8394"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "d6346145e251f845563437aa768e5386"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "3355d307530b90125e9a71e0843c914b"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "3db9309cbbf58d7914d61455bab16736"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "f38a79a50c53e2caf558deb667cfa6ff"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "820baed437abcc0cfdb02b7aade05fe3"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "c79f04514defe1458f2f24100865d783"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "bf603e3d321ed63e87fa6b66c2ebd99a"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "59f32eeb69ba3f56448bd672b2d66c18"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "1fc10dbc09506691b9e933ca1a02170e"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "273f1ac16e2f45403e1449fc661b228b"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "9038dc095d7bf09d195e2d36df67d6bf"
  },
  {
    "url": "general/enroll.html",
    "revision": "8678010fe588ce9c42efc19b9cee35eb"
  },
  {
    "url": "index.html",
    "revision": "dc5c16490e7968cf397a4aa84b3b8536"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "60adf3673d14d4df4b9e53954939313a"
  },
  {
    "url": "studyathome/about.html",
    "revision": "fa8a82b5b18f2e01c87e3c1e5876a864"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "409adb860e70d3b09cf56e4eb412af3f"
  },
  {
    "url": "studyathome/help.html",
    "revision": "c9d0acab7aacdbdd9aa7b172e9439e40"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "6306150ada3f6413e9ffc83225087b0a"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "a80dbad70e33b6946f510d9c6f5b0591"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "1e15d193f79c5ee91f3f7c1d4dd6a412"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "71d3bb905912ab212f73db32244607da"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "5efdb1c738594b73aa088d2188809a21"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "09d8453f6ff34c6961cdcb637efb8375"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "02b42f35fb4cee9c350f9eab7bbf11fb"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "0b813d121265242b2e6b8fe72f21e1de"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "09e4c088be3d8d2c5a367e4f95391f32"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ea38879209bc1f7d37bf5ce5f33619ed"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "9b587112653db898e3b79bea4890d18b"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "768e145436573c77e19bbc1825107700"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "ccc1c4657d499c9e9e7cbb294ab49f09"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "7ed0885adef09b88ac44b3ac379a031c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "91cc0aa3f79747394b63ab00c4a1c4c4"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "5057aaf50d200bd4d45faeaa7ab0390c"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "a096c9f330bc060a9450067287bd6741"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "62dc90c0f975321b8e2f49947e752fae"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "c407cd54428c0e10d25dfc027f76f6d3"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "1468ef9a606b86dc8c475ac7d31ef218"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "d7774dc2afb9658ad8f2f9aca6303f22"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "e7ca56339e25e1ea1dc7f5107d07707d"
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
