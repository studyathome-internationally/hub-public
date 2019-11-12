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
    "revision": "8ed6a5acbb1d83f32467df14ba63fb92"
  },
  {
    "url": "assets/css/0.styles.527492b9.css",
    "revision": "a95382d535f14ad72cdd9ba8ed0abcec"
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
    "url": "assets/js/1.6369d38e.js",
    "revision": "489eba4dc56cc01741f1a585b9f259b8"
  },
  {
    "url": "assets/js/10.c71fdcb3.js",
    "revision": "a6c96725bd861cf6ebb5940b83010a77"
  },
  {
    "url": "assets/js/11.9e069523.js",
    "revision": "a0edac65ffec9db87ec5c139d41fa413"
  },
  {
    "url": "assets/js/12.203ae1da.js",
    "revision": "19831a093a1add517d5aa36f82f14058"
  },
  {
    "url": "assets/js/13.578b1db6.js",
    "revision": "446314e5b4a6212be9ddd7cae6ab151b"
  },
  {
    "url": "assets/js/14.afbe341e.js",
    "revision": "5855c432f8cfe111ac0e18347cc40a0d"
  },
  {
    "url": "assets/js/15.d682621f.js",
    "revision": "ee5ff3f12eb87b4d4969568807976200"
  },
  {
    "url": "assets/js/16.7d86c788.js",
    "revision": "7a50dfa47dd60d334e9c3441a5bb9032"
  },
  {
    "url": "assets/js/17.f4d9d624.js",
    "revision": "aa7f48b2bcc49dde15488b097b629635"
  },
  {
    "url": "assets/js/18.17267b4d.js",
    "revision": "5b9ab498ab93e288c396302f8326ca53"
  },
  {
    "url": "assets/js/19.793e6e60.js",
    "revision": "25c9bf2af2338a84086f33b1ffe7f748"
  },
  {
    "url": "assets/js/2.ef322d6b.js",
    "revision": "b0a41314afb62b3e4f7cd69488e853bf"
  },
  {
    "url": "assets/js/20.25036582.js",
    "revision": "d0daf3744f1df5844b97a8cc435c67f5"
  },
  {
    "url": "assets/js/21.d800d7ef.js",
    "revision": "5d128368b99d9c60ccc8c9ba2ded5b16"
  },
  {
    "url": "assets/js/22.a741e167.js",
    "revision": "13c10ceba9cf1dd83b8f85f440918f32"
  },
  {
    "url": "assets/js/23.bb896a8a.js",
    "revision": "66049cd3a3b44815d092088070f315f9"
  },
  {
    "url": "assets/js/24.fd60da90.js",
    "revision": "3fdd3699b83e0834b0b4f7cc043749c2"
  },
  {
    "url": "assets/js/25.7963e7e3.js",
    "revision": "472e6d1f21f0e1dd08be8b4fec57db82"
  },
  {
    "url": "assets/js/26.ce3818a3.js",
    "revision": "9d8c150f3236138752369155adf4e7ac"
  },
  {
    "url": "assets/js/27.7e7e80c2.js",
    "revision": "66ad5cf0a822c109efdf623fdce877b7"
  },
  {
    "url": "assets/js/28.3cb50fcd.js",
    "revision": "dcc12f82b2556220e8e6c7c8934048b4"
  },
  {
    "url": "assets/js/29.5c13b406.js",
    "revision": "64701d760093c6252d1c27423675ab81"
  },
  {
    "url": "assets/js/30.e7fe6a1d.js",
    "revision": "a2335e41271b12d41997e260db13cda2"
  },
  {
    "url": "assets/js/31.0673d635.js",
    "revision": "70d16881c63f3df7250852a045e32785"
  },
  {
    "url": "assets/js/32.7cef9ea6.js",
    "revision": "e5205a36a2e3a3b859c7db22759f4633"
  },
  {
    "url": "assets/js/33.e1513512.js",
    "revision": "aa93a9f6e02212b451211b90795a2ab0"
  },
  {
    "url": "assets/js/34.b15d42b4.js",
    "revision": "216ca1d91391afa56e7bb2b0b981d82e"
  },
  {
    "url": "assets/js/35.151aea1d.js",
    "revision": "31da5b28b60d6a614013dea5338d9e28"
  },
  {
    "url": "assets/js/36.6afd4324.js",
    "revision": "1efd2d8d9a6d3b54347967f02cddfd54"
  },
  {
    "url": "assets/js/37.bd8eeaf4.js",
    "revision": "f31809cfa68a28c7feed8f8bdf6b6d93"
  },
  {
    "url": "assets/js/38.45954c68.js",
    "revision": "a4d7d11efe2f9499015ba8c692c664ab"
  },
  {
    "url": "assets/js/39.a86d2584.js",
    "revision": "12b9dd49cff2dea842ee5dbcdeddc9df"
  },
  {
    "url": "assets/js/4.a0b4a012.js",
    "revision": "a7285ede3f967b80c5d30f9c8cc097f5"
  },
  {
    "url": "assets/js/40.474bfccd.js",
    "revision": "d7f2d651b5390e82fd5e8c2f1524581f"
  },
  {
    "url": "assets/js/41.6913ef06.js",
    "revision": "60bce3b9b7e8135209a8b16f42b5a9cd"
  },
  {
    "url": "assets/js/42.a25585ce.js",
    "revision": "7e565d7bfd0de01a65a33f84d4a1dde6"
  },
  {
    "url": "assets/js/43.07ae89a3.js",
    "revision": "c9f202c437ed8cbc3056e71ec6f068b3"
  },
  {
    "url": "assets/js/44.f8338eb1.js",
    "revision": "13d75a2c05fac0bf0bd7183208f91aac"
  },
  {
    "url": "assets/js/45.6768a1b2.js",
    "revision": "3cfdbb7b8cdc5fd4cc8d9f690ddeba76"
  },
  {
    "url": "assets/js/46.e1668389.js",
    "revision": "8cbc516eba236e75cec13ff2574a8699"
  },
  {
    "url": "assets/js/47.fdb45228.js",
    "revision": "41c02f6f472bb40476f2769c9c0eecce"
  },
  {
    "url": "assets/js/48.c68236da.js",
    "revision": "83406243324ff2a2d4880395b3f5cc21"
  },
  {
    "url": "assets/js/49.f58ae46a.js",
    "revision": "083818c40b56aa35da490fac2cb6941f"
  },
  {
    "url": "assets/js/5.207b3acd.js",
    "revision": "8145aa61b2813ff90d56249f9f9dbb3f"
  },
  {
    "url": "assets/js/50.f4b7c593.js",
    "revision": "a83638c027066a43c2107059d608faf7"
  },
  {
    "url": "assets/js/51.720934c5.js",
    "revision": "fa0bb0fc96f5f4a18133729fa61f6be4"
  },
  {
    "url": "assets/js/52.880efc86.js",
    "revision": "5eef43b27493fe702494d4aee47c7ce2"
  },
  {
    "url": "assets/js/53.a171c54a.js",
    "revision": "1b143fce0324a7d714b75e5042048bc1"
  },
  {
    "url": "assets/js/54.70e44215.js",
    "revision": "ac0ac07482ba2c65d03a66feb47e3334"
  },
  {
    "url": "assets/js/55.5c18b85f.js",
    "revision": "1d08d380b0c43b92504b7e145e7d7df1"
  },
  {
    "url": "assets/js/56.fef91d8a.js",
    "revision": "8e74c4bf89ff7f23e23e95b581f3fbaf"
  },
  {
    "url": "assets/js/57.44318d77.js",
    "revision": "8fbfa92a0b36234ea7be5b725c8c6b0f"
  },
  {
    "url": "assets/js/58.05e6fc20.js",
    "revision": "c9354c9b83a3ce7e7e3bf213f4135acf"
  },
  {
    "url": "assets/js/59.3240b289.js",
    "revision": "12e4af12750f4bba617db85aaab7ccbe"
  },
  {
    "url": "assets/js/6.5cd88de1.js",
    "revision": "d705cc07d9338ff40e4d6b93a6d7ee46"
  },
  {
    "url": "assets/js/60.4a081f64.js",
    "revision": "1102f1e87992c06219dbd6980436c494"
  },
  {
    "url": "assets/js/61.118d7370.js",
    "revision": "e745b433a461d960768184991f07c53a"
  },
  {
    "url": "assets/js/62.ee891429.js",
    "revision": "db6c66004c93b91dadab28fbff681b49"
  },
  {
    "url": "assets/js/63.1d16f8d9.js",
    "revision": "c6193468aa7d0f6a2621e5e142475ec7"
  },
  {
    "url": "assets/js/64.3eac2fde.js",
    "revision": "157bdcfa3e5f3d498dbd1530caa17eaf"
  },
  {
    "url": "assets/js/65.02bd44c7.js",
    "revision": "ba2d3cfb34dbf28e93948fa56c1df8aa"
  },
  {
    "url": "assets/js/66.27745905.js",
    "revision": "619964041b238d0c7ac5a9a3cc58032f"
  },
  {
    "url": "assets/js/67.56858ab9.js",
    "revision": "c3d5b8deddc0f7ed3afc9900bd5c3e4d"
  },
  {
    "url": "assets/js/68.24731eef.js",
    "revision": "7c82f60beb5ee198d5fe3e322074f5e7"
  },
  {
    "url": "assets/js/69.1f4e93e1.js",
    "revision": "95d884a67b3e9a65ee2ab5dc48c8d5e7"
  },
  {
    "url": "assets/js/7.e642370b.js",
    "revision": "36e9be18999aba1f4a5fecdecf21ed6b"
  },
  {
    "url": "assets/js/70.f92490e9.js",
    "revision": "7b9b548165088cf4bbfbe1d3c348a408"
  },
  {
    "url": "assets/js/71.7e232327.js",
    "revision": "8103818ab9c34b1444e027b47c52a181"
  },
  {
    "url": "assets/js/72.65f4cf44.js",
    "revision": "bc1752a6f348aa179fd2f88303593dc2"
  },
  {
    "url": "assets/js/73.c5611dfa.js",
    "revision": "19ca7af3156d3038c5b84429329b0a4f"
  },
  {
    "url": "assets/js/74.dae14a76.js",
    "revision": "71e9d9132f1b980a2f6ecac99062f5bc"
  },
  {
    "url": "assets/js/75.cafd951d.js",
    "revision": "2d102628ea68e0f2f369a0e418bc787f"
  },
  {
    "url": "assets/js/76.3f1d927a.js",
    "revision": "b4f28c11978e6acacfc4db7a9ffb588a"
  },
  {
    "url": "assets/js/77.61ea800a.js",
    "revision": "bb6119467d0341567495dfab8aa4db1d"
  },
  {
    "url": "assets/js/78.90306d7a.js",
    "revision": "9221b3aa3b0923cd295b30e2e47ed3b2"
  },
  {
    "url": "assets/js/79.f8293e0f.js",
    "revision": "773b5415b63517580bda6a7b7659c751"
  },
  {
    "url": "assets/js/8.4dab723c.js",
    "revision": "295a2d6e0dbc02395949838557f16d89"
  },
  {
    "url": "assets/js/80.002f4fb3.js",
    "revision": "64b9bf7b274e5883a13883bfd29c75db"
  },
  {
    "url": "assets/js/81.1b586f00.js",
    "revision": "11e12457fbafae7479e7fb800b71ba66"
  },
  {
    "url": "assets/js/82.885ad8de.js",
    "revision": "ce38fcd58fb8f1fe8e8f32c88c867b15"
  },
  {
    "url": "assets/js/83.c1937b12.js",
    "revision": "25e9a851ab83022629e76c618c8a4566"
  },
  {
    "url": "assets/js/84.342576d4.js",
    "revision": "9877f6195231ef5725c3c458cead4a45"
  },
  {
    "url": "assets/js/85.361248bb.js",
    "revision": "c0e4709e44cb105b4fdc88410a5235dd"
  },
  {
    "url": "assets/js/86.c7c508ed.js",
    "revision": "560ec79e2c1ea2f2c11bd11557d40897"
  },
  {
    "url": "assets/js/87.e3791649.js",
    "revision": "c0cd9045a81c7c2d66e76c2e23226ef3"
  },
  {
    "url": "assets/js/88.b1523416.js",
    "revision": "3669f99f71b613c87a8fe0c8e5dc3bb0"
  },
  {
    "url": "assets/js/89.b9448fd3.js",
    "revision": "0512a55174bd0840ae8158dadb232ee2"
  },
  {
    "url": "assets/js/9.4a253188.js",
    "revision": "5f8841ee978b36b30e1e495427b4fc5c"
  },
  {
    "url": "assets/js/90.5b6dc644.js",
    "revision": "782347bd75ff65d49b09752bce1ad716"
  },
  {
    "url": "assets/js/91.bf446462.js",
    "revision": "90ffbb44a7b6a47f7e44c91c9ff22d0f"
  },
  {
    "url": "assets/js/92.954bd026.js",
    "revision": "b24c472d41ba7187a384a24b41e98603"
  },
  {
    "url": "assets/js/93.12a0d397.js",
    "revision": "7a5d5460ab9911fb0af65113a1ee312b"
  },
  {
    "url": "assets/js/94.31ac3997.js",
    "revision": "6a09dabff8e61ac80864d0b0fe01a712"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.f59c8be9.js",
    "revision": "a3d35d23e3adc48158e1a87a04944301"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "d26ce7cd8240697f7f9645700935f4d1"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "ea54c752d4aa069f557d3e28a3b88cee"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "d964d3fdf2a248c8d852d0a1080dccbc"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "6c76968f13e37a018cc4860664d689ba"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "ed88d6fa033a365c52e625caf7807803"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "91bed05c0fa88cf19db81498fd127770"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "e8716a88ab05fb03ae3a75433cf4aef8"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "a617b096a68052c5c77dbfb1ec9d2034"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "003db55edb1f0f35c0b8f3aec50ffc67"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "89469cdf760e1d0adfe57b4e0939c495"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "d90394bd230f3c8d9d94b4fff007c249"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "d848071eda0ef7aa4ceccbb32ee416bf"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "46fbac38b45c788540c1250968173f92"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "4377ef91fdd921e0d304bf27529d3bed"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "b73d244f79400573f388cc5d5f927138"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "5a27c358111bc3d2bd57b92a3128293b"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "57f3bbf64cf33e676f45b50be61ff74b"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "ecc9f56282d96d9ff2542a2532f4b695"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "14490e2df6d1ffc75e0220223beb7605"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "a633c411ddc9ce64e48cc4091cbc6a74"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "634a991fd8cf400242f09f81ab0e28e3"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "f039fe54b395236c1f443d9b45404dfa"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "485f86e128c194f7d8cba37ca15c6550"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "196c9a46533c646c21298a25e19a9f85"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "ec3fb6f4d447975446164c8fb7eba892"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "de73fd8daa3dba094c9da534fc0f393c"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "c382b9f30a855067fa73a9d10e8713f7"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "d38a400685e312c385d7f3830c8b3eb3"
  },
  {
    "url": "courses/index.html",
    "revision": "fa84eb8ebd3fc5a2f1b32c2d542920e2"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "c35c1c2f95fed1bd59eeffb6ca88008a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "e64272e0d08655d66c91388551a152e5"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "543e23a9c1ecac3375e5656534373ae5"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "b66d21f44e3b11a45c3463dc8dcad9ca"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "9e44702371ae604f2485db6fb3e7f78a"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "20f1c916f4b6174c4fbdea288a90fff6"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "56506aeab47872eb0dc3a36652e42789"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "b7c0281f161f384bc8b05db4d45c4d3b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "f50ae4b4b886794eb46efb688be3c347"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ca4892a0430eb60e4eede80375b57f91"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "68ed37a597a6aec83cf5a30407ff2bdb"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "00fb8090585085a9ee166bdabbf15604"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "21c3e8d690024885836cf9df8095eabd"
  },
  {
    "url": "courses/template/index.html",
    "revision": "a95e8b77b01c68e3f70f2cfb2d4c4e08"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "0278174f7eaa18ff9cfce254d03a3a78"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "156538210b9cf617c9d47969fa1fa929"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "bcd786e3aed0784b32d41b65667700ab"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "fb3d2697c5fab60ea5f450a773a49f6d"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "fb67ce6c39facd702faa2bd47c500997"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "15914c2ab253478d0a0af5b5115aa566"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "1b7cee083f2356a826aeb958a629a5fa"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "9b4eca76e56d4e7957b4d9ae7c452006"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "c365ea6f8cdd382bb1e3cc432162233a"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "5ae87ccff6b0d3db1e9745e34ea6879a"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "91bf15056b19acf4a3078e414830cab5"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "626d5a3e3c9d92bdc5632c62a5ec06ff"
  },
  {
    "url": "general/enroll.html",
    "revision": "667a8663fea6dfe87ce4a1926a5b087f"
  },
  {
    "url": "index.html",
    "revision": "32531892445983e888cd5322ab66a709"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "c91aa7a52877702f1c37dce734dcc56b"
  },
  {
    "url": "studyathome/about.html",
    "revision": "b99106680df6b1c3f14f67c5e925d552"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "fbfc63775cc86e4086619700e3f094e8"
  },
  {
    "url": "studyathome/help.html",
    "revision": "bc2354c3d97beaa87001717c64cffb2b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "879277469f673edfcf1749c2c53ce911"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "37f4cf2f24c2fd085543544316e9ec66"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "6c5b06dcf96f140cec56fc35ad16ab7d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "4b1263964a8b4aba21fc2a72e6f56752"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "ef70ccc91ac91e0d84543ec727a03987"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "72e50930ccfb2a64d28e2d4dfb6dcbf6"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "d283aefdd8dc61302df257b365d24454"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "8281135c9d29233c0e954bb4a85e0f0f"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "62811a798ec62d476a1d2b0254e51232"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "faa568591a4b990c3ea36eb163b1410c"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "115ffb74a8f190940de231e5190379e8"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "3d9bb4c10eb4849f485777e4cedf8b6b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "292177ee94f66f7249a349eff4c21a29"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "63ba11539f47967f414745666ec54455"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9b01f8bfbbf374196dda5bf9e95432c5"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "e4e4bbab3b66a874b0d7a3294f8b026a"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "bf5c855604bf68aaaab7b8c5bb5e47a0"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "5940826d0839963cec331b01129f6f9b"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "aff954d9bf0147e387c7dd8ce750e88c"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "b6d4cd46bfa7340957e4b5552dd98a3b"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "89f6e08072662a6fe5417c7aa9022a8e"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "6623ca617230d97e8d1db988499b3f93"
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
