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
    "revision": "acdcfd29f75b1b8bb20bb44f3191cdb1"
  },
  {
    "url": "about/index.html",
    "revision": "d8b2345c8838547013f8eb56b54b6adb"
  },
  {
    "url": "assets/css/0.styles.b2bee8de.css",
    "revision": "8129a435cc0db1d0df340eab82f59916"
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
    "url": "assets/img/logos/studyathome-noir-circular.svg",
    "revision": "6892f6e0f75fecfd78404879bfdc639c"
  },
  {
    "url": "assets/img/logos/studyathome-noir.svg",
    "revision": "0747fffa96b77aca8bbd318ee6957060"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a541ffc4.js",
    "revision": "0e20f7f2cb170370423db0b991bc478e"
  },
  {
    "url": "assets/js/10.e29b9d22.js",
    "revision": "3d3dbcbd4f1d6224691359c096957955"
  },
  {
    "url": "assets/js/11.1862cb11.js",
    "revision": "228448f88cb16383372d99d02b531cd8"
  },
  {
    "url": "assets/js/12.3b7b5887.js",
    "revision": "045ab4cc3a1ee2eeba9601c964cc0a31"
  },
  {
    "url": "assets/js/13.fc4fa13f.js",
    "revision": "66580834aa511a191e79a60cd719050a"
  },
  {
    "url": "assets/js/14.368f5be3.js",
    "revision": "1bea76f3f7dbc727dcadf18bccde42d7"
  },
  {
    "url": "assets/js/15.0c5f320c.js",
    "revision": "cdd0c5de77b9e8237b2b2bc47076fe09"
  },
  {
    "url": "assets/js/16.13798f72.js",
    "revision": "90039c6ccda41fab6f36984d5969924e"
  },
  {
    "url": "assets/js/17.dca6f767.js",
    "revision": "a4da7519ebb833bb9ab8afc409249220"
  },
  {
    "url": "assets/js/18.a7d5f2e4.js",
    "revision": "c046bc32dd2944228725228061394376"
  },
  {
    "url": "assets/js/19.7176e5fb.js",
    "revision": "b57f0cd7f4e623766557867495f41357"
  },
  {
    "url": "assets/js/20.51a6723e.js",
    "revision": "7565b6b1faf57004b87b6b5aef038931"
  },
  {
    "url": "assets/js/21.cfef4898.js",
    "revision": "b575416b8a88f10ba73935bed73cedef"
  },
  {
    "url": "assets/js/22.34cdc6a4.js",
    "revision": "d1d744cecfbf0890171e5ede0a661421"
  },
  {
    "url": "assets/js/23.f0c7a98a.js",
    "revision": "430b8e076211983d198198638607e5c3"
  },
  {
    "url": "assets/js/24.7fe390e0.js",
    "revision": "2eb5cdf8a886cab635c0e0670ee28c8d"
  },
  {
    "url": "assets/js/25.2fa45e0b.js",
    "revision": "61bdac8ee1041bf656192ccaf85befa0"
  },
  {
    "url": "assets/js/26.7cb919a0.js",
    "revision": "39f25135d57b9b18aa8376fe497e1999"
  },
  {
    "url": "assets/js/27.d3ea76c3.js",
    "revision": "458ec9798dff1bbeab8eb9a80c0dc0ec"
  },
  {
    "url": "assets/js/28.7545f129.js",
    "revision": "6cf1c77f35c077fb62a4ce37a5816e4b"
  },
  {
    "url": "assets/js/29.f2fc011f.js",
    "revision": "d6a666af9f7476d737c98f5afb4c1517"
  },
  {
    "url": "assets/js/3.ed1cf0f8.js",
    "revision": "56be0422fce71f62b6c47be44be8f529"
  },
  {
    "url": "assets/js/30.d2261d75.js",
    "revision": "c076ea1d4007cab21d2e84f7086efa09"
  },
  {
    "url": "assets/js/31.7d533ee3.js",
    "revision": "0db99ac5a7a2d9679c208074cd5b4685"
  },
  {
    "url": "assets/js/32.b4506813.js",
    "revision": "758a9a4732f6504540dce0ddba943551"
  },
  {
    "url": "assets/js/33.21b2be81.js",
    "revision": "86d0633602985c78bf04cd1927de576f"
  },
  {
    "url": "assets/js/34.424f0e44.js",
    "revision": "1ab21e39a0f2d48baa7df6b173dfd148"
  },
  {
    "url": "assets/js/35.7e93bda0.js",
    "revision": "57fa6d83ef91c5456066490c2c03a116"
  },
  {
    "url": "assets/js/36.c9cc6f42.js",
    "revision": "c1f856cbd8e0645f2855e3febe09a9a9"
  },
  {
    "url": "assets/js/37.652c4457.js",
    "revision": "2fe642ed79e51abf6af2ec97a5efc336"
  },
  {
    "url": "assets/js/38.8a9641ac.js",
    "revision": "eee973ece56d02b61793d4d78e275989"
  },
  {
    "url": "assets/js/39.59b36d93.js",
    "revision": "a9932f45f289999c34f66ce280792cac"
  },
  {
    "url": "assets/js/4.66b9fcdb.js",
    "revision": "8704a5424ee27a25ab084e3fb1cdb147"
  },
  {
    "url": "assets/js/40.02b749da.js",
    "revision": "94b9937b872fadec1a74707e504a7077"
  },
  {
    "url": "assets/js/41.bd5cc174.js",
    "revision": "6574d2799cb2e887f7daa821fee61ec4"
  },
  {
    "url": "assets/js/42.4cbfe6a3.js",
    "revision": "dffd4e8cacf4262f7acbfa0832f01561"
  },
  {
    "url": "assets/js/43.0ac36777.js",
    "revision": "db5780204549786b46ced8bb0f889690"
  },
  {
    "url": "assets/js/44.d904d43e.js",
    "revision": "3430932e7f38dc39d65db498df12d845"
  },
  {
    "url": "assets/js/45.6066f585.js",
    "revision": "bc922f6aa4f04b8ced5a10fef4603859"
  },
  {
    "url": "assets/js/46.ccee1efc.js",
    "revision": "6b259fe1a9364d029c7187d07663dae7"
  },
  {
    "url": "assets/js/47.e2a1f7c9.js",
    "revision": "4ca7e97196ec93ec3436299c5ca40ccc"
  },
  {
    "url": "assets/js/48.b5b5110c.js",
    "revision": "4dc8c70a9b5b6fb89bf72d0de5200f88"
  },
  {
    "url": "assets/js/49.775eabb4.js",
    "revision": "1ea4c98cfe0c89d94b4429787589af45"
  },
  {
    "url": "assets/js/5.5c0c5d02.js",
    "revision": "360db9053eafa64a13377bdcba2304cc"
  },
  {
    "url": "assets/js/50.a65e80b1.js",
    "revision": "e3a39542ac5dd5846f5de5e08ac53f07"
  },
  {
    "url": "assets/js/51.f567f997.js",
    "revision": "3965f26e61149ac9e0592180ce837dee"
  },
  {
    "url": "assets/js/52.e17f5e8b.js",
    "revision": "c61bb07df6e2e9670edb3e2378c0cd2e"
  },
  {
    "url": "assets/js/53.caa94816.js",
    "revision": "8c67fa7d75b4c6f69fb85f31f2f8e823"
  },
  {
    "url": "assets/js/54.3943681e.js",
    "revision": "fde648316655c6e2952c0d353e0cbe93"
  },
  {
    "url": "assets/js/55.d0125605.js",
    "revision": "8235878903c8799c61cf9d8f42967a07"
  },
  {
    "url": "assets/js/56.9c01f547.js",
    "revision": "8699fa36da12d9997f43d23cb6ebeba3"
  },
  {
    "url": "assets/js/57.5b4c6010.js",
    "revision": "0a822057ba59099f10562cbd563762d4"
  },
  {
    "url": "assets/js/58.9e022889.js",
    "revision": "3a24ed69f26f51b06f133ecfc1ee2552"
  },
  {
    "url": "assets/js/59.c596a5ff.js",
    "revision": "172cba39050ac62e6d12c553eb067ef0"
  },
  {
    "url": "assets/js/6.9fcc9772.js",
    "revision": "08a1ff6882994bb9c5b97830f0652657"
  },
  {
    "url": "assets/js/60.23c20391.js",
    "revision": "402eae872e0f3af49f634bbe87c038dc"
  },
  {
    "url": "assets/js/61.b1899c0c.js",
    "revision": "44881da65349839a66c94541935a01ad"
  },
  {
    "url": "assets/js/62.013afc5d.js",
    "revision": "23db6788213a73c407e5e627a22806e7"
  },
  {
    "url": "assets/js/63.9b607c7e.js",
    "revision": "38685b802b5e2f902bfae78c68e72813"
  },
  {
    "url": "assets/js/64.9acb76bd.js",
    "revision": "e38912364c63a81997b3761519457027"
  },
  {
    "url": "assets/js/65.dc996f66.js",
    "revision": "22057df7fff9883dd475d72a27a67516"
  },
  {
    "url": "assets/js/66.bc6249ec.js",
    "revision": "1e3256c7c3d2c62b158196eb30001f80"
  },
  {
    "url": "assets/js/67.2576eef5.js",
    "revision": "81d9b6f69f6c47495bee5244a0a91fb9"
  },
  {
    "url": "assets/js/68.19cb824c.js",
    "revision": "220ab829ea2121a365a4c0996d0e6685"
  },
  {
    "url": "assets/js/69.8339f8fb.js",
    "revision": "2876848f11914b4eede4fc3a8c675651"
  },
  {
    "url": "assets/js/7.c3e45d82.js",
    "revision": "c540e63d924531e34b042063bf1e58b7"
  },
  {
    "url": "assets/js/70.45cba2fc.js",
    "revision": "d91cb8c111f1a0341ae04b0b3e39a481"
  },
  {
    "url": "assets/js/71.759fabed.js",
    "revision": "416bba032f463e22d6d4011f00662113"
  },
  {
    "url": "assets/js/72.b369421e.js",
    "revision": "570b1604410be12934a8d123062ae807"
  },
  {
    "url": "assets/js/73.b26f59a1.js",
    "revision": "68eb4cfad8afd60a4885fbeb0bb9d911"
  },
  {
    "url": "assets/js/8.a7cae30d.js",
    "revision": "a4aa35509f419b91bea151e6ee74810a"
  },
  {
    "url": "assets/js/9.4f554b54.js",
    "revision": "55b47bd938beda4ac9b9b554e5907122"
  },
  {
    "url": "assets/js/app.64203fd0.js",
    "revision": "6b92008bb4ef9ab4c2ce985794ee8927"
  },
  {
    "url": "contact/index.html",
    "revision": "6a76f67ce48e69f45849fd761f046d54"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "2f1f771bb3da9015527c5cfea91040c8"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "6683ad11a30e9db775b0f67904217e6d"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "0596899fe39b055ad47bdae9f80cd92e"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "14364084c8765eaae2dbb4c5ee3f0e14"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "fc332070a7bcf3ec7e91d950587abd07"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "2bda4e99814602592e6eed76b91ea3b9"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "233f0c3919877e0949a4b53bc14f16b1"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2f0b229634cfeb77d57722358ab392d9"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "7250dd59ce4b6b45af4556d0563c9c41"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "70cfb87c4f35aade116bb2c91fd2702d"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "87f8fae5d566fa2259bbd2416c90fa1d"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "048f4c07247245f2fcc321ac76cbe281"
  },
  {
    "url": "courses/index.html",
    "revision": "50c32feecd885340913d662641f6d093"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "c308a34d17da537fbd5ac9659666d7cc"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "228480bcc0acd26097a95c4bb9693a98"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "37ee5d247021ec83e97b5f97242d433d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "8ec537bf7c1d74f80f602f3c65548b0d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "1028b2d2e2bd65f3e7a275c1e3796d5b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b47f11f00883305684de2f4dfba2bdfd"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "f9136c226b44abeeeb27696490d9e709"
  },
  {
    "url": "courses/template/index.html",
    "revision": "30d7f51824605b0757bf7f882afefffc"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "06afcf462c2ff184a5de8a1cbc7d116f"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b061f2b5141a1bccc53180f6785d063e"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "e6be8c3388e89ea6eb9f03f8a38dab5a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "d1c4e246cf721ee37facb7733f0c6e73"
  },
  {
    "url": "general/enroll.html",
    "revision": "886510061b77be18f91c047f26041afb"
  },
  {
    "url": "index.html",
    "revision": "c4440f00bf3efd69454280a09852741f"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "5ac54263c22a2a91b7ba459bd8f47153"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "4a09a67ab21f0cc6e1c6666e5b4ec240"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "98ada15b0fe011913ebf9ddc86c695ec"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "170385de9c43b5436035cdf02f4b4247"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "bffce48f8030788bf754c4476213d9c1"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "3002b848ed073349a8d1588562c37b31"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "deb4d4329aecdc9e44147a93a984569f"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "2635422553a733032aa2607ece8eb819"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "c03a2ce90ac37e415d578fca19a70095"
  },
  {
    "url": "more/general/about.html",
    "revision": "cee8ff3392d0a77de807d68a3b8581d3"
  },
  {
    "url": "more/general/help.html",
    "revision": "bd9be9598ee2a673cd735c72a3b517ef"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "2d19b0c04de15e4c0c1a6960d0c49ae8"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "b0a0699000d43dbe5cf1641b5b233317"
  },
  {
    "url": "more/general/terms.html",
    "revision": "c6adcb1b691709a44963fbcba9dc53b2"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "3a3be4b932d8788c5b920905cfd500e9"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "5e2637f2f07b68b5a86542ffa254e178"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "7f8c47cf7f2ad290515e30716ffafc56"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "b9c9a42fa3ceda4971af7cb8d149bc18"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "d83eb54e346b349462aeee1a4b646235"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "8d4f48c90c393831fe77ace7b7f2dfa4"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "1470fa6e88fad75ecccd1d786555bd3d"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "47ddbf493a6f6788e9c60146f8b1da8c"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "f25b82e1c304ce5875160ed1cd197beb"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "aa604ae9958a59039764b46ea86b8299"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "38b15c93106d8d124433534375fc9f87"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "fecf0d1656a75087992b552d1b7217db"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "f5b5ae6625067af51a8f27bd81a8cffa"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "2923e65348bcb25a9958347aba217bc0"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "f90cb45806217bbcb3322eec18e9f8c5"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "f2f35bd651fa45cdb5fe0d46292deb83"
  },
  {
    "url": "partner/index.html",
    "revision": "e02755f97380305922c8cc74daa5b8b5"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "e9e378d73071f6e291d8eb2023e21090"
  },
  {
    "url": "projectteams/index.html",
    "revision": "1f304b0a0d3baeaa18407536fe2b9018"
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
