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
    "revision": "f3667beffa19e6800ea3d95e1dc6a91e"
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
    "url": "assets/js/18.27b6a479.js",
    "revision": "f6855ac3864b78b2354c7e3e994b7af5"
  },
  {
    "url": "assets/js/19.7f2a37ed.js",
    "revision": "3ea726a41b49cd94cd98539aa1478cf6"
  },
  {
    "url": "assets/js/20.e6e66b3b.js",
    "revision": "e1eff6b4d9b1064b664b56f55c10de79"
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
    "url": "assets/js/58.cf1952f1.js",
    "revision": "c7910c8b0361e03d393d168a3df3dc7a"
  },
  {
    "url": "assets/js/59.477157c5.js",
    "revision": "0087f1855d932b18b02b4acee9d4fd59"
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
    "url": "assets/js/79.ed619931.js",
    "revision": "6c599dedea25235e319c43c33716e466"
  },
  {
    "url": "assets/js/8.8f4fd803.js",
    "revision": "22952dd2dd91674781a81878fbd75aea"
  },
  {
    "url": "assets/js/80.561aeaec.js",
    "revision": "bf98cff541d789161709edc63d7276e2"
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
    "url": "assets/js/83.fb4a4e5f.js",
    "revision": "98975b35f2b765e8082e623cd9611d71"
  },
  {
    "url": "assets/js/84.2632772f.js",
    "revision": "2640cc7381099696c920512ad6648bba"
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
    "url": "assets/js/app.02056052.js",
    "revision": "82bfbe7db5d393be83549db80787329b"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "b0a01361312303c2ae09f07cb2086f11"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "4183958d6fa844d7a01e0a6f80ca84b4"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "0a73ad9616e7496206af8e3154055790"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "42eee272088d4b067d4cd74a3419ac9a"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "d43280884eeb08887ab0e3135b3cffe8"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "269a6a27326eeb87c1c801d17c7a0e18"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "dc69ad2e06438cb928d6faf46c1c6436"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "d049eedf391d6e339c8c5a0c4d0dee75"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "2105cc9d9c6dbe06c6615dabefe0d126"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "98fd931c55ec00c1e45d15ec8c1a41da"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "dc1061ca658aed99e0d023412f5e869a"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "52ad531e3b1d866aa036c05b1788cc1d"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "55f9ace142a735fe6ba885562d619cb0"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "06dbc3b222c4dd2d1bf764206719b497"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "f00cedc5104096414959c90864394852"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "8a0a45f1b5fec7bdc40464923f035dd3"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "1da19bc4ae8a1e96804b1bd9b0c9fe51"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "99352f7431afb641161d4cb48f33b156"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "22497f08df918f6ed040c953939b3db1"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "6a1e3894ace7511e73be86368bf37d1b"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "89fe5b49912181b6fc6d30cadb4c02c5"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "a2aefaac8afcadf907c840a4e82c429b"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "f9bc3d1d4242aaa7c230a6f1f5a61254"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "4af699766b7e55083f86c8d3bfcd0d40"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "a5680cc40a229fb996b53f9e9367e41e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "cb24f0830a85804d0fdccaf739b6ed49"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "4c25de38097374f887da4ceef57bcbea"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "d1c613c4951db0b733a331625144128c"
  },
  {
    "url": "courses/index.html",
    "revision": "589b209b5c85139d39ae7010078dce57"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "b2d4d73e44c69b1f5202e2cd03bf3ab4"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "c1ad61d54897acb0f2649353ebf7bf2f"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "b199f449bcefdd99509fb2f3982a5a6b"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "78f4d1fb91f6f261b576a6fae085ca9d"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "66bd53b5dc043582942ac37c72e50283"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a41da81e1a5581a9d598aa99ef9a521f"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "8224e33f7b13521e009430858956a445"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "68154738d33725fe43a45ad1bd3314a2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "b16481f04f7dc24b19eca597c45789ac"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ef00007d0d6d6805ca6933ea0028da5b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "0ca8b3e46b86dcb11624c573882c79fa"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "8b946bc0687e1d20fe9d2764e6f71588"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "737eb29f70a9eddecd326c447059def7"
  },
  {
    "url": "courses/template/index.html",
    "revision": "d54d2d0737a833639d7fbf96329d1669"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "163488aea173a3bda8ba370f2f059774"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "cfef501d42e8ded8163ea1d1f993ccc2"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "839da6a552d5a577150e85b74c772839"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "278c9782b2119c4be9c79545d20fe929"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "e03c7e6dead7ed887cfb6c60b9b5740c"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "b3484f96d8fc1d00512a871e010a52f8"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "ea953f2af6f9d94a96fd991300488995"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "6cd4ee8b4932c000906b908e57515010"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "18553fd37c6660ee21be5bee2c5abfe2"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "7386d6c1784e607a7c7cda8cbf044be6"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "5ef7cb247db89b633507415760afad51"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "92596fe198a82c460134b5d0b3ce3100"
  },
  {
    "url": "general/enroll.html",
    "revision": "299b75359225aaf6c891ac0c37525dd5"
  },
  {
    "url": "index.html",
    "revision": "95c9da80e3f0afca8a8c2022b331a601"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "2ec3496cdbb5d14c16480e40b42a7127"
  },
  {
    "url": "studyathome/about.html",
    "revision": "ec5c08e7ac9eed4a9dd6108eb30df5d2"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "76b4fb3a3bbc246f0f64d1ed1bb43754"
  },
  {
    "url": "studyathome/help.html",
    "revision": "628a57203a182262b8b63d715072e5ef"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "5e0a362f01ffcf3096d74bf4e3ad2fbc"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "0408ca98b55fe9834e6ba65c74d2ae59"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "38b4e11a944ebad140214b4161d8c452"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "94c1816b2a80c49fcc2efb342976599a"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "0ce6fc10724d877d16e6bf73b07ebe3d"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "39b44cd3e29362875ce5903518e5eeb3"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "3ef2e1267391b8312da04f1895162357"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "09f64b8136dff53f9a8499b87cd14a42"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "8b309f5700449a249f17f0f501e003f8"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "07bedd922f4bf472fb3c91b3448bda35"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "23acf5b0769959a6121f7fb374586dab"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "cd89d26378a69a2d5dd057c08a9c881b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "d4e2b49d4e47c0a4c62b0024a75f9afa"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "ca595367026df46416edc593f22895d7"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "c01656255a9d92cd6ec210e88a1a0103"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "d63068bb022612f098a2735d3bd103ef"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "807f50df1fcb07c09185d23a9601246e"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "f207cad45086d6774f0ed3b32381f8e8"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "34d5ad3fce9d6f9f27317057214696aa"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "c3262b68edabc4b5fda0ed229e4e6ab6"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "7c59d43e9cbc31f205f36929f3a58578"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "f5ec657c21a304542136b1b45695abac"
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
