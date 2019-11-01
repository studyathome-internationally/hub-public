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
    "revision": "acf0a363dc2c191a0cdfed9e9f75ca4e"
  },
  {
    "url": "assets/css/0.styles.05bd7e96.css",
    "revision": "e088a4cb4b8b7d60ff0b00b4dcc0d170"
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
    "url": "assets/js/1.b7dc1497.js",
    "revision": "3b765c0c3cc72db0b8d1d2373f2461ab"
  },
  {
    "url": "assets/js/10.86c086de.js",
    "revision": "a67971e19bcd23b205e2f505adca8708"
  },
  {
    "url": "assets/js/11.6ac03da6.js",
    "revision": "199a50852a6dcdaa955c36a21fc57bb7"
  },
  {
    "url": "assets/js/12.29fc57d3.js",
    "revision": "45303880a526ba34fefff90362208c94"
  },
  {
    "url": "assets/js/13.2548fbb3.js",
    "revision": "d2209fc51e5a465ff9f249c25e7c4aa0"
  },
  {
    "url": "assets/js/14.627667c6.js",
    "revision": "1dada0b88b803a2e4730f43ff890a5f6"
  },
  {
    "url": "assets/js/15.ebc174ff.js",
    "revision": "483fccdc303b83d21a4048482decdb5b"
  },
  {
    "url": "assets/js/16.beb365ef.js",
    "revision": "9594fed6aa37042cae2039c240eb62f7"
  },
  {
    "url": "assets/js/17.762ee841.js",
    "revision": "962188cf53387a461d123f7125b1cf52"
  },
  {
    "url": "assets/js/18.f9d9c752.js",
    "revision": "2e5ceb85bb2fb1c77c47d12472caf5ff"
  },
  {
    "url": "assets/js/19.773d790a.js",
    "revision": "394aef7ca26cb3ab1083617797717daa"
  },
  {
    "url": "assets/js/20.280206b6.js",
    "revision": "1e572432bd267acbca3f65614ece3dd2"
  },
  {
    "url": "assets/js/21.d4d7700d.js",
    "revision": "eebf0105dcdc66d96dcc655560d554cc"
  },
  {
    "url": "assets/js/22.7273ac2e.js",
    "revision": "0326f65cffe4ce7da33a6568d88cc76b"
  },
  {
    "url": "assets/js/23.5ee6e97b.js",
    "revision": "8cf3dfa44b3e6c336ec746b743c683ad"
  },
  {
    "url": "assets/js/24.b9618019.js",
    "revision": "f9f2bb87fe46609fa8e0ac2ccaa9afdd"
  },
  {
    "url": "assets/js/25.1b322299.js",
    "revision": "9374b2134a9d75825896f2e09e3a22e6"
  },
  {
    "url": "assets/js/26.e338c0b8.js",
    "revision": "bfdd74b315f10f56a3cb382da1cb99a6"
  },
  {
    "url": "assets/js/27.cd7ca1fc.js",
    "revision": "7a8b2920ea810effde869ef58b63dbd8"
  },
  {
    "url": "assets/js/28.dc497a34.js",
    "revision": "f3d5b2b00a99f156a735e99e36428f12"
  },
  {
    "url": "assets/js/29.7aeb5ef0.js",
    "revision": "2c39de8e3196bacd13bfba7b3025e556"
  },
  {
    "url": "assets/js/3.c0864946.js",
    "revision": "af68ebb8588546be5106deb04450a169"
  },
  {
    "url": "assets/js/30.4f59301c.js",
    "revision": "f6fb4f7a319e0c67f5bfb0bfa3c84c56"
  },
  {
    "url": "assets/js/31.ff537080.js",
    "revision": "bfe39b6cdadb16468fe5034b33cdc348"
  },
  {
    "url": "assets/js/32.631d5aee.js",
    "revision": "3efa3bf139509e6a9acf0912507725f5"
  },
  {
    "url": "assets/js/33.6d9dde05.js",
    "revision": "716d9817796c242cde23d9c88d27c9f8"
  },
  {
    "url": "assets/js/34.68030c84.js",
    "revision": "6adfc106a9ce37cb41d1d5fe43240139"
  },
  {
    "url": "assets/js/35.a7bb3f0f.js",
    "revision": "7ba45d89d86a08285da673c2f8308634"
  },
  {
    "url": "assets/js/36.eb1eadc9.js",
    "revision": "614913d3024d9bb1537aae5b4d027e80"
  },
  {
    "url": "assets/js/37.43093fe0.js",
    "revision": "0ca598d43acbaf813f997ad18ef06c8b"
  },
  {
    "url": "assets/js/38.6154da4e.js",
    "revision": "13e1736f8c79957fb3af4675b03d514c"
  },
  {
    "url": "assets/js/39.f9c3744a.js",
    "revision": "a385d0b2823677d93ae6acef02e77765"
  },
  {
    "url": "assets/js/4.777d911d.js",
    "revision": "10dd94e121c063ccb60a76b649898533"
  },
  {
    "url": "assets/js/40.ba86616b.js",
    "revision": "69b716a02b936c684ccb1f4fa739e4b4"
  },
  {
    "url": "assets/js/41.4ffd8e1a.js",
    "revision": "a4e03d876d000eb5b8d30dbb3e095356"
  },
  {
    "url": "assets/js/42.6d6e00b9.js",
    "revision": "09eac7d7fdd3146a960ca5769166e469"
  },
  {
    "url": "assets/js/43.27ba07c3.js",
    "revision": "393c6220fd7169c2342d31ba7b81a46b"
  },
  {
    "url": "assets/js/44.b8467964.js",
    "revision": "d8ada7ec76efd38e40d0a19b8dc00d2e"
  },
  {
    "url": "assets/js/45.2d01a872.js",
    "revision": "5afcd667e41c854e9a72b5de200f5204"
  },
  {
    "url": "assets/js/46.8b1bdb5f.js",
    "revision": "4d4ddb7665150f86565efcaa0ffaa90b"
  },
  {
    "url": "assets/js/47.eba7fe4a.js",
    "revision": "0a0bfbedde2d8d0db4f103d462868bb8"
  },
  {
    "url": "assets/js/48.72418659.js",
    "revision": "e09f5eb420a966458d07dbe0662c53ac"
  },
  {
    "url": "assets/js/49.93ac59ae.js",
    "revision": "ede790b3fb0c95f46163c934125d87f1"
  },
  {
    "url": "assets/js/5.0c7b2867.js",
    "revision": "232f80cdf46b8c8648ff52b97c8d18d0"
  },
  {
    "url": "assets/js/50.3658065a.js",
    "revision": "4f3323294f2d5f06e4d00138d06e8fc4"
  },
  {
    "url": "assets/js/51.851da6f8.js",
    "revision": "c9200e77f9f114990384d3f76a5406ca"
  },
  {
    "url": "assets/js/52.3b0a9788.js",
    "revision": "46e8c06c42d3d0d8c86951757b5d954b"
  },
  {
    "url": "assets/js/53.b22a065d.js",
    "revision": "d15ba062cb86cefd5b87a72b892d1acd"
  },
  {
    "url": "assets/js/54.3da28b36.js",
    "revision": "d485d16ac0f0f72cbf61a8e0101170f9"
  },
  {
    "url": "assets/js/55.24589ef7.js",
    "revision": "d5311c89ecb6de41560b8e68bee220d3"
  },
  {
    "url": "assets/js/56.4b219205.js",
    "revision": "e037caa9e261dcbd529698922ae810b9"
  },
  {
    "url": "assets/js/57.37c471dd.js",
    "revision": "76628e4a5a24fb52b08502d12577ad0b"
  },
  {
    "url": "assets/js/58.8ad38f4a.js",
    "revision": "ba237fb0629169425638d4e273c48579"
  },
  {
    "url": "assets/js/59.cd5176b3.js",
    "revision": "a6d888738302c73ac2e43de731f606ed"
  },
  {
    "url": "assets/js/6.b3ebebc2.js",
    "revision": "3b22f787691f100728ea2aecd1484d23"
  },
  {
    "url": "assets/js/60.4af44cae.js",
    "revision": "9fa37e8f6a77b5ee013cef3cb72b695e"
  },
  {
    "url": "assets/js/61.5b0be25f.js",
    "revision": "f2fefd7d5c166417151c07a24b157725"
  },
  {
    "url": "assets/js/62.3b52eb7f.js",
    "revision": "e2293d5c53dfd9a453d88e1f4c792f6c"
  },
  {
    "url": "assets/js/63.997b1f0f.js",
    "revision": "86dc48b194c9f91597b6f65ac22efb78"
  },
  {
    "url": "assets/js/64.5aea7498.js",
    "revision": "fabb18ac10811149199b8032cc71c334"
  },
  {
    "url": "assets/js/65.ccd0ee45.js",
    "revision": "ba5cdbcc03372eca3e2ca98c106515d5"
  },
  {
    "url": "assets/js/66.8ee5c8d6.js",
    "revision": "3931f29c64b346c419c0c9bf27b42a9c"
  },
  {
    "url": "assets/js/67.11738c60.js",
    "revision": "2adc4b7ee85bd29d7e06385f74dbff2f"
  },
  {
    "url": "assets/js/68.0a550ed3.js",
    "revision": "b448e38c7d3cb27a14403ba306da2367"
  },
  {
    "url": "assets/js/69.b7172685.js",
    "revision": "2cad497d3ed8186e89aa232a8d293a2b"
  },
  {
    "url": "assets/js/7.4c285da3.js",
    "revision": "241c4d212ef1e0c1788c1bd7b0bc4dfd"
  },
  {
    "url": "assets/js/70.376079b1.js",
    "revision": "fb829f5f303151858fdf269f140162f8"
  },
  {
    "url": "assets/js/71.5d88d890.js",
    "revision": "7170b2a5251cfc782294799488caf3e9"
  },
  {
    "url": "assets/js/72.a813e3f8.js",
    "revision": "0fe22e7f15e433834f41d139a6713d30"
  },
  {
    "url": "assets/js/73.9d4ad864.js",
    "revision": "ba3a92055789aa27677b6ed59c97f01c"
  },
  {
    "url": "assets/js/74.d1fb4dd9.js",
    "revision": "a9d7229c47e9082dfee64b193b231058"
  },
  {
    "url": "assets/js/75.acd12dfc.js",
    "revision": "a074c71f0271a47c382d901cc927e532"
  },
  {
    "url": "assets/js/76.ad4e5466.js",
    "revision": "ed650014a8c48edc88e2db9c1d882f61"
  },
  {
    "url": "assets/js/77.cbe6c57d.js",
    "revision": "6470ab5f75de00a8fe872bf4fcc150fd"
  },
  {
    "url": "assets/js/78.cc3c1216.js",
    "revision": "8d3cdcaa4fc014913c22be9952d955b7"
  },
  {
    "url": "assets/js/79.45b54f1d.js",
    "revision": "e8f574432f69b9d69e11a740b4502994"
  },
  {
    "url": "assets/js/8.8f4fd803.js",
    "revision": "22952dd2dd91674781a81878fbd75aea"
  },
  {
    "url": "assets/js/80.44bf322f.js",
    "revision": "864892041f5678d793ec4d4c25b22a94"
  },
  {
    "url": "assets/js/81.38f0f7e4.js",
    "revision": "b19f6c3c4d7f2f36d6669f9265b2d11a"
  },
  {
    "url": "assets/js/82.13f96b9b.js",
    "revision": "0134e04011d3740f03a4f5736de14245"
  },
  {
    "url": "assets/js/83.09e4fa8c.js",
    "revision": "f5f47c9b8f42df732e0c89c1fc0bf41a"
  },
  {
    "url": "assets/js/84.f9c523e9.js",
    "revision": "a878d60f0cd9f21038f1c0768d16b35b"
  },
  {
    "url": "assets/js/85.f47cfc89.js",
    "revision": "9881592b37934f38260cea83ac38955c"
  },
  {
    "url": "assets/js/86.de53affa.js",
    "revision": "22dab85461eb64650094387065d7cef5"
  },
  {
    "url": "assets/js/87.316397ce.js",
    "revision": "2ab0a7bdab95d42c12a70c071c52714c"
  },
  {
    "url": "assets/js/88.26ff363d.js",
    "revision": "a0e8927de945ed97d11bfe79bbc774b7"
  },
  {
    "url": "assets/js/89.34fbe559.js",
    "revision": "ab97db8fb1c77e46e094a11561843a28"
  },
  {
    "url": "assets/js/9.1dd4ab3a.js",
    "revision": "f501affa1b475984ce6dbfbd8654b604"
  },
  {
    "url": "assets/js/90.0f1f5acb.js",
    "revision": "6ce4a2084642b350a538aa64c82e966b"
  },
  {
    "url": "assets/js/91.2dd81533.js",
    "revision": "67d7d8a3ba53bad941fc28a26d22c60a"
  },
  {
    "url": "assets/js/92.1857d928.js",
    "revision": "daeaeb355c7860c9d95008c7c309beac"
  },
  {
    "url": "assets/js/93.85bbac13.js",
    "revision": "4c744c0bad205b5afefc038de6331d9b"
  },
  {
    "url": "assets/js/94.6d7918ba.js",
    "revision": "689d1e43e6485624dba2712cf294920e"
  },
  {
    "url": "assets/js/app.a6d7790e.js",
    "revision": "de316fd40fbf94ca237df0f8658dc960"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "b303dfca08aa8b093e727fb6d5a04c88"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "26a121760da5bf95fd0ea2bfda61704e"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "c1cf63007aeda18dd6d1455438a93963"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "e77ccdf30787f21c29b6b687fd8cb3f1"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "86b8af6b436092fbeeb16f04bab3ba21"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "0d49beb7afae93d617ad2cc89d0fecee"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "49b84af0b3989cece6d3775243f785d5"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "cc9579280c73ad7d6bb0062399d50947"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "b3a3343568be30bfa62b795673b826ce"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "d5d8bdb4f863b514b54629f47e001fae"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "c706b33053fc5b1ece6fbd0c2a696f8f"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "313a9f1be2b336f5ea2602ac50aa06f9"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "1527b5a4346d85e96e69c4088ad966d3"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "1458fe49e39fcd2aa66ad95f5c0c3fe6"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "99549af42daa2bc91cb6be661bc36dc0"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "468c9757e9a892526ca829f5d4f02a46"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "9bca8e2a5caa159007c220f7263cde87"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "a13df02b0d03a5d3eb72ccf5e6d95c00"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "23447f4e4f9ac79b87fb6844896a56cb"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "91783e29cd2e21c06e65c0e0288d7230"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "735d2c092e2dc7ad52ba638df55c7266"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "63c33fd75a82610dae9f91f8e860087b"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "335048ed244e3318935ff743799cd2f4"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "0decd13e9cd6268b9ac6ef6cb310cea7"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "1cbb49d99d6e417dc96acbc58ea4ac44"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "14ea0ec2509efafc0841c68f688e3a10"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "5bc43030b393f95e88e7c19916618739"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "08f2fd058a1ec7150ea97c224a250199"
  },
  {
    "url": "courses/index.html",
    "revision": "73d61fcd40b62c069d01038097c7174a"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "de2d7d58145413d204050d191f2bfc79"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "d22e482ba40163cb06fb4eb9da5d434a"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "9cd333d63f6f91bec3db92d97465a3c5"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "3e73a3f2201e4af8f254634477663d19"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "42e84917b90ffae6c99fc36675ff634a"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d3e586356ac72850429ae6ff027913c8"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "4e5eb41b22fccd9180694d40abca47e8"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "d9060fc1e93d2ab9522cb97ea265df25"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "fd58f90deceddbb9ea72db36c86a52a1"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "f2f414f970bc117366a5da75e04dfa2e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "5dffd889de858d259825088ee1739b04"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "5a627b5e5c492e389cbfdbaf3ea564bc"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "05353b86eefe4043bb3bf54856dd9b7c"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ac1698721010284a5a9c85977c59ab1f"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "caec4c83e1999d9b9a6bdbf9c9be5bdf"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "288975ad70ff535a9e67050bcb3e830b"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "e3ba1dfedf0753c0ccf70b540e2e0454"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "2a139cd146c493bb6ef4267c2a963564"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "4400b86b62ee8e0fa92c14d4bebf4356"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "5f95549eecacebe26b8cc23d6acd9e1d"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "3c4df08608b75e6fa18369e4b85bd4f3"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "65028807089d25b965776d1f2e333d0f"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "5d23c888581f4a3fe3e92df959515b67"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "4e93e44f0c7b8b76383a9d31491ce2fa"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "93e6aed5e05d0a34d5a02849729638d7"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "e236028e5bef1ce86b26b0d2db0b2661"
  },
  {
    "url": "general/enroll.html",
    "revision": "559292c73152622e9be6f32c5e65b29f"
  },
  {
    "url": "index.html",
    "revision": "21d037e36616da0d4a72cdd2bbe03fcc"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "0fcad59418c846f7a90e99268c8a8175"
  },
  {
    "url": "studyathome/about.html",
    "revision": "780e9418eed9ef0701878f55bd4bcc43"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "65b926cc5e17aa68021ae6de09cf7855"
  },
  {
    "url": "studyathome/help.html",
    "revision": "379699dc71b6c50eafaf05331360ee94"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "85145789c740a7299a94609f56d0513a"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "00e1182975a73eb48cf75bb76a415724"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "482bfec6ae1405b1f08d4502fac9a3e7"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d589de768d090cc71b549a0f801f0dd2"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "5c5bedd17639c1b4580cbf9e7d8b726c"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "d9eea9ee9ba1e0e147efabb9b4886e7b"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "d8d378f8f51b188c07d136c90a0289eb"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "f3cd602403e077afd6306b13d4319a9e"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "af6bf44568536b6ee7ea4016e050a285"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ca84a992d58f27487d23803d1324c55e"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "d6fad7e8ce3952190144ca48cbfbad54"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "7aa53e6cc90ba642f84d3724d4e1ea99"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "61e57610c2465b7dd1fac752666ae87f"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "da7927a139c86238d12c281f7e8441f7"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "2381602072dae8ac09984f9bb11ebb13"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "8d9014e15ac859f30b733679bfa63559"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "89206c384e7131137d9f67057ec60183"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "5cb2ab85c9d43317ab30ed02688d1db3"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "f90d10bed4a6d2c579add5951e55cf85"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "bc33bfd4a618749ae2d87771c68d1c80"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "1052f96314c55bcfef80b3a2213b8dbb"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "cf0b9b4f22eebde5c113d38655c81ec0"
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
