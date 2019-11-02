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
    "revision": "31c74cbbb7993c46405849011d5b3e49"
  },
  {
    "url": "assets/css/0.styles.2d0e180a.css",
    "revision": "ac6e48dae83a91acbce2002d471a492f"
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
    "url": "assets/js/1.0a9050eb.js",
    "revision": "00705941da3a8f9d853aab822685ecfc"
  },
  {
    "url": "assets/js/10.dbf0d6f0.js",
    "revision": "33c9c67656b909bd9fc0ed4859035b08"
  },
  {
    "url": "assets/js/11.cc841bee.js",
    "revision": "a8504e0eeef3d177a151d70a488991e9"
  },
  {
    "url": "assets/js/12.124983c9.js",
    "revision": "bf373240f950c7b38c3d60bc57c91703"
  },
  {
    "url": "assets/js/13.9fada8b7.js",
    "revision": "d5e5a632c16e40db78815d53be468223"
  },
  {
    "url": "assets/js/14.bf4fae6d.js",
    "revision": "198e7a80c4a8f549b6de48652a644a16"
  },
  {
    "url": "assets/js/15.84418550.js",
    "revision": "91da90baa2e40875166a7b7387f1c84a"
  },
  {
    "url": "assets/js/16.de5b5513.js",
    "revision": "3c35f1f3974245caa43a5ed54647b8bc"
  },
  {
    "url": "assets/js/17.cbed27d1.js",
    "revision": "c602abf7de827e0e5a6ce9f703bcd2ff"
  },
  {
    "url": "assets/js/18.8d3cbb61.js",
    "revision": "1be1d8bbdf50444f0d512dab1b302c30"
  },
  {
    "url": "assets/js/19.af23db1c.js",
    "revision": "c085e1036bea08e3bf51dd6e81dccaea"
  },
  {
    "url": "assets/js/2.256f4ace.js",
    "revision": "f1ceb6335f652fb677e685e04e31867b"
  },
  {
    "url": "assets/js/20.6f846bac.js",
    "revision": "032f52b8cb476ec318dc22a31b7b6363"
  },
  {
    "url": "assets/js/21.8acfa5e3.js",
    "revision": "fcb51d266fb89ee7f8a80cf67d826b36"
  },
  {
    "url": "assets/js/22.c6a4f439.js",
    "revision": "ad6c93ce7652611d8fd23026c2141802"
  },
  {
    "url": "assets/js/23.0b7c7491.js",
    "revision": "516cd4c889c353888d311aca8100f4d8"
  },
  {
    "url": "assets/js/24.e08ec623.js",
    "revision": "8206d54123d2174eeb6e0fc111163385"
  },
  {
    "url": "assets/js/25.3a825e36.js",
    "revision": "2cdee8c1d2787f8d0c1b052846e6ea73"
  },
  {
    "url": "assets/js/26.7dc2b4cf.js",
    "revision": "c9a3af0704828d0d6eb68ff6bec7e9e3"
  },
  {
    "url": "assets/js/27.8d821099.js",
    "revision": "5fe9dfd2973e868875f3260071081962"
  },
  {
    "url": "assets/js/28.3763b37e.js",
    "revision": "aee31614b0ea8fb4cdb4a0fd089372b6"
  },
  {
    "url": "assets/js/29.d11aaaaf.js",
    "revision": "2b3ffbbff2207701e8f4c67768a86117"
  },
  {
    "url": "assets/js/30.57573bf5.js",
    "revision": "58ce1d3bb09060631b38f5ff33c73a29"
  },
  {
    "url": "assets/js/31.1932975e.js",
    "revision": "c42768302cca14c259667be08af136f0"
  },
  {
    "url": "assets/js/32.581b964e.js",
    "revision": "e076655c34f8fbaa264d3b66b5de947c"
  },
  {
    "url": "assets/js/33.8df846c5.js",
    "revision": "595d91288edede2337213b0399f30ad3"
  },
  {
    "url": "assets/js/34.2fbf6e3f.js",
    "revision": "f2acc6b12be7f3fc039ecc3944a3430b"
  },
  {
    "url": "assets/js/35.8f6060e7.js",
    "revision": "6406a566d8ab7e7d649800ba944d339c"
  },
  {
    "url": "assets/js/36.fd6118a7.js",
    "revision": "6cb8e28462843b8e3bfa34272952500d"
  },
  {
    "url": "assets/js/37.d3abf32f.js",
    "revision": "dcc1f7599ea7062f4f275882d31be324"
  },
  {
    "url": "assets/js/38.a36c82d5.js",
    "revision": "8116f3c81979ac11aa5e368bffba74e7"
  },
  {
    "url": "assets/js/39.5d6e8583.js",
    "revision": "81dee7c0a5e595b9cfa0af262f2883d8"
  },
  {
    "url": "assets/js/4.46e692a3.js",
    "revision": "1f0dbaf5fe5be725cad2735bc824d1ea"
  },
  {
    "url": "assets/js/40.637180bd.js",
    "revision": "584d51e3106530d06d8f818e42c3afe3"
  },
  {
    "url": "assets/js/41.410af72e.js",
    "revision": "396ba11a53a3d0317cc6e7574e16e2be"
  },
  {
    "url": "assets/js/42.1a09f63f.js",
    "revision": "5b055c401b918540f3d3b0f3ea66a2c1"
  },
  {
    "url": "assets/js/43.0cf0360d.js",
    "revision": "5eb484d7eb49336127b22c5029331f9b"
  },
  {
    "url": "assets/js/44.b9fe233d.js",
    "revision": "97345bd211ebc01dc0820e694e9fb88e"
  },
  {
    "url": "assets/js/45.dc5aa10c.js",
    "revision": "9d4fb55c2ceee737261ae026527ff568"
  },
  {
    "url": "assets/js/46.ef4aa11b.js",
    "revision": "878fac400803ef0ae20738042d7a40d5"
  },
  {
    "url": "assets/js/47.7cc3f4ed.js",
    "revision": "4b84e5ca8dbe58b53d1c25337ef85039"
  },
  {
    "url": "assets/js/48.1f0121b2.js",
    "revision": "3ea7d19a40e8f3825606f6be24cb78ee"
  },
  {
    "url": "assets/js/49.d701b969.js",
    "revision": "9acda8e1bf438d193b750b7a1aafb715"
  },
  {
    "url": "assets/js/5.aa7290e9.js",
    "revision": "9febe4fa2c67afa7c11323860e58fd55"
  },
  {
    "url": "assets/js/50.9cbbdca1.js",
    "revision": "4950f2f5f545a75dac5b886c3fe01d96"
  },
  {
    "url": "assets/js/51.867357d5.js",
    "revision": "2cfb673e2198ee6ae9e646e07c6072a0"
  },
  {
    "url": "assets/js/52.6424aee5.js",
    "revision": "968498a73b7ff78822d9ac5b4afa2509"
  },
  {
    "url": "assets/js/53.bfbaa685.js",
    "revision": "cebe56093c489b879f55f1ca96c9a2a0"
  },
  {
    "url": "assets/js/54.97c7f769.js",
    "revision": "ad765a0fe0e1cedd533875bf04adc8a8"
  },
  {
    "url": "assets/js/55.9fd195ae.js",
    "revision": "edee1b441b7a25562b63f078a86ddc7d"
  },
  {
    "url": "assets/js/56.abed1641.js",
    "revision": "d6b3042e75419077642369302fa1a451"
  },
  {
    "url": "assets/js/57.ff35641d.js",
    "revision": "e97021c597e2c8233f824f6905c0fadf"
  },
  {
    "url": "assets/js/58.32860220.js",
    "revision": "c055dfaec2a14b8fe66b3631933b7b80"
  },
  {
    "url": "assets/js/59.b6aee800.js",
    "revision": "2fa256b2d89d38fe606a0d7764f74491"
  },
  {
    "url": "assets/js/6.e4249944.js",
    "revision": "a238e89a34f19e70709da2a93a9257ff"
  },
  {
    "url": "assets/js/60.44853a57.js",
    "revision": "9ef1ed9649c9774d0782a1a3692a1060"
  },
  {
    "url": "assets/js/61.8558a70d.js",
    "revision": "fe7696740762a007626203f8dce1dc8f"
  },
  {
    "url": "assets/js/62.04aa3cae.js",
    "revision": "d6b1c0d594d27ffb74ffc502e5643582"
  },
  {
    "url": "assets/js/63.1a671d37.js",
    "revision": "d88909279d246b163a945c6f543a6a0f"
  },
  {
    "url": "assets/js/64.0aa6e40b.js",
    "revision": "07c18c8adf6d1d47dcb61de33bd44d1a"
  },
  {
    "url": "assets/js/65.4dc9dff0.js",
    "revision": "6b68bf0fc096094b7e7b1b3720876eed"
  },
  {
    "url": "assets/js/66.5d6eb6fa.js",
    "revision": "b75876592413fc8732d62e19fdc28e12"
  },
  {
    "url": "assets/js/67.29b689a5.js",
    "revision": "594ab285cf886c7be171544a7fdea444"
  },
  {
    "url": "assets/js/68.f4ca531f.js",
    "revision": "b89f632947c8189769bde184921faa80"
  },
  {
    "url": "assets/js/69.6544cb2b.js",
    "revision": "96addfb4f21537432a0ac06217f21c33"
  },
  {
    "url": "assets/js/7.1e6d8f96.js",
    "revision": "f3c7ac6da85384b52fa6699c746e200d"
  },
  {
    "url": "assets/js/70.87903edd.js",
    "revision": "fd4b039ac34adae87b8c49ba805d0e0f"
  },
  {
    "url": "assets/js/71.14f3f821.js",
    "revision": "04b32d4f6feb2fc84184e49f14f823fe"
  },
  {
    "url": "assets/js/72.0480bb55.js",
    "revision": "c615c16ab5090774f3eb99a193b0bbbd"
  },
  {
    "url": "assets/js/73.ceb06047.js",
    "revision": "60c183ed2eae2d899fd0b55978b5692e"
  },
  {
    "url": "assets/js/74.22815172.js",
    "revision": "2aeac5eb4ed96d2392a2dab4f112703f"
  },
  {
    "url": "assets/js/75.61cd53f9.js",
    "revision": "00197762202563d3d5e360beaff99098"
  },
  {
    "url": "assets/js/76.e553f949.js",
    "revision": "6a5465b11f5c3206545ed03000f73173"
  },
  {
    "url": "assets/js/77.b58238f7.js",
    "revision": "d2e031b674655cb43dac3d7f288caf60"
  },
  {
    "url": "assets/js/78.4f2bca36.js",
    "revision": "38b74af0f8fcbf2af3091cd2bf836867"
  },
  {
    "url": "assets/js/79.70378c27.js",
    "revision": "f14ae512ff95c8cda2d05d0bc4160495"
  },
  {
    "url": "assets/js/8.30169342.js",
    "revision": "ae01bd92bd55f636d7de31b6078ee18e"
  },
  {
    "url": "assets/js/80.ac459e55.js",
    "revision": "8ed0c742788c0da91a45eb1976b631ca"
  },
  {
    "url": "assets/js/81.56a17983.js",
    "revision": "b66a60f1c1620950b92b27223b0a3b36"
  },
  {
    "url": "assets/js/82.13901504.js",
    "revision": "4ed2edaee81cdae0e218ed232d96c3f0"
  },
  {
    "url": "assets/js/83.2a347384.js",
    "revision": "59e988075d649b636b0e4611a0d331f3"
  },
  {
    "url": "assets/js/84.99eb840e.js",
    "revision": "74d0548a5b33e901fd4ba78b29a03f15"
  },
  {
    "url": "assets/js/85.d2e8bff6.js",
    "revision": "25ddc0df9d01cfb56d375e8cbbacf975"
  },
  {
    "url": "assets/js/86.388523be.js",
    "revision": "ac40d144fa29db8c942242f9f7658a89"
  },
  {
    "url": "assets/js/87.22010c81.js",
    "revision": "18540d8c839039f62e6787911d69c84e"
  },
  {
    "url": "assets/js/88.eac95ada.js",
    "revision": "7e1864c7c31fb37e33125afb00fac04f"
  },
  {
    "url": "assets/js/89.8ad99165.js",
    "revision": "cc47d714949ac8295ef50fd2ab50555f"
  },
  {
    "url": "assets/js/9.14ffc941.js",
    "revision": "917cc1a28cea8f3780e1a8772d8187a9"
  },
  {
    "url": "assets/js/90.38dd216a.js",
    "revision": "d567087765fd4abf91ee896704fa4445"
  },
  {
    "url": "assets/js/91.90b9edba.js",
    "revision": "999ff0ea43e82c3f9f659a6a246fb7fa"
  },
  {
    "url": "assets/js/92.57e0a9dd.js",
    "revision": "e30ae7ad8da1890f3ab808cfa8b5aeef"
  },
  {
    "url": "assets/js/93.7336c079.js",
    "revision": "e6e5f57c6a0bc0597a46cde194eb6f93"
  },
  {
    "url": "assets/js/94.6c13d7db.js",
    "revision": "3ae7e4871c63db8c64724fa41c781460"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.1db26769.js",
    "revision": "c01b93c06ce95bb18bb4ab3ac6152d02"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "8a369ce329e95bcc9c674827cd86949f"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "a8b9654f49fac5f11fe18918c459945b"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "1c8bfdafc4534844d07b7159a022adb3"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "8a9a1ade13d48b665618442d962fdea9"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "5eda6116555da6a99defd60ee8f98ebc"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "6bd86be4d1d6775420f49363edf7632f"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "48e10f29951bfd7f19f281f0d8d38379"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "c25d36f7a860e431aff256da42fb8d9a"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "cb262681ceee1d847c240d5f319df78d"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "d6e5f915100503e52e371f1f64dde6f7"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "50bab576082434583444510588ac2b65"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "ac2b4896fe2f97d5b4ad2837dae363e0"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "da83548cc99fe139acc3b3f9df7b0029"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "53434d9dd5fd36bd383200b9a9971645"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "3ae3da5cc9ece4d3b44ed6be0b6cb560"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "52d9dc9941a5f30509e7c28800b0e39b"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "c81468285c954651e2cb53d31fb68df0"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "941800e36201ee7ac51d40f3300dcebd"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "35dbfdc39fc93506e1a1520024976510"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "f600b710a768ddc55ee5a29feb1be197"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "4262f883597905db476767372149f0da"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "7b02ff2f15d18f9014c3b70ca8908d69"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "4f320fca858ed72fa025af1f76972fdb"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "f1e4a7c7916ec16e7297c526a5e262c1"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "dd21285728cb52097f1bdb482483bf51"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "a6ce5e3b780cb49ab9111f1c8a556f89"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "3aebe55ae2b35bae50ed0845d29f5687"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "02a9e3923281a0e0e6236c2e5d8b68dc"
  },
  {
    "url": "courses/index.html",
    "revision": "3deb0c6515f1519bb687ac55cf77df2a"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "39b89191dd102fe6bae9a48a8b3a231c"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "be51e6d713f6462f1808e14b2e46a5cf"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "d691c8307960bec47d68b0daa7777887"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "9e65ec5d372f456722b39737a222e864"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "5bfb082efac1c86f81dfba9e8a8d05d3"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "722b46f1959f7550aa93feaf5c570595"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "292852904f52058ba6c704c8aac65ecd"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "14f67acb016276e06e016c81617fcbd3"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "1535cc8aa80c4a2321047ce5482413d4"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "94f792661c4bbf22b41ca7f4d1a47a4b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "7a4bff4d465b64dd82a46064a5c2526b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "eeb0ccada6e9cfd3a22e92ff69c8c3ac"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "4abcbca5226ca47127afe5b6c1e356dd"
  },
  {
    "url": "courses/template/index.html",
    "revision": "7aef45a5a192d29b260c721eae517782"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "a68b43468b9c50af7b112ffd47a41268"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "ef2f9e776fbf2207c3e22eaefb8388b8"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "006a671ebcdc24a1d0fe3386cd06541a"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f5884de619b54f175391c79186cc505c"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "39e1d45b3fa3d1d40c85c7c7c4c9405d"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "f8d5b5d909f75abfbe6bb6f7f111703e"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "fbcbe76043340d4b6b2b5556ab68bf9f"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "5bf44c6cec4b0b4bedf2aa3c4b18a241"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "a2f3279880cd234c94c4afda282404c9"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "7ecdc1d553a2fe0972d64333b4ee9482"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "52718c3ae96e76ac40948929ad0848d0"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "0d3eddcc65a21702c4b053b4307bac49"
  },
  {
    "url": "general/enroll.html",
    "revision": "eaee1520888d5d783163361e56628d70"
  },
  {
    "url": "index.html",
    "revision": "5631abded0abac49a1ad24eaf2c08a04"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "f29ad9c4629eefca5076f39e65c0edad"
  },
  {
    "url": "studyathome/about.html",
    "revision": "811ecf425cdc9a5b5c0df533180a6dc4"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "3c63d28fbb4221a85ef8471a0d706d8e"
  },
  {
    "url": "studyathome/help.html",
    "revision": "5b279c7ef751e41cbb8b15b90bbc6297"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "48050342984041667b4355c9d0e51eaf"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "0c8c590ad8f1f4faff406dee7bae742e"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "6a98a65f2149ad6a7b0b3375ec8271d8"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "1d059f9a2860f1ae5fa8d64b111020e5"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "db539468e8db31f8b6d8c22471776c98"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "45eeac8e762db7ce85d3e6a688fae1e3"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "6725734fe080072656c23233f87c444b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "7a88be793116359ceb3c89a790062c7a"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "29450b1e45fa52bc89ea8379f6ce4579"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "748c30842830258c8ab32489777266f2"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "e3c97744a3651215107554b4cb6a4900"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "3576b84a9db541348f6ca32b1899017f"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "21fb217f94b313a311111d369e76cfb8"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "8aa48401d6fd8a2d93dd3444adf97087"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "92e91a5dd75b3eb19dd0301d0bbbd9ba"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "b29daaada2017b7ff72773ac8931083e"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "fe0bde56fd2d4410d20c2d63c8e43918"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "f34d503b4fceb489e6b551fcfeed4406"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "356294b3bbb694621cee3ea8775da99b"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "9ddc39e0eff4fc6b5c0aeb1ee2ec5048"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "abd3331f0015088d3088b308c10f16ba"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "6694015c8fe9afc0b238ed13582208fb"
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
