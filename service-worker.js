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
    "revision": "5fd1040a68b918852fa34bbc0ec4a983"
  },
  {
    "url": "about/index.html",
    "revision": "b4c57bab7821c1a5ed5a8c1404a88c30"
  },
  {
    "url": "assets/css/0.styles.f6658db1.css",
    "revision": "b0367df9293d24b0eababb25bec55943"
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
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
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
    "url": "assets/img/partners.7aac2755.svg",
    "revision": "7aac27559dd4d67df795f33ced45b0df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-workflow-all.0b1d1019.svg",
    "revision": "0b1d10190ea84e1e60d9ac2d6ac7749f"
  },
  {
    "url": "assets/js/1.4417189b.js",
    "revision": "e58cde8ce40ba91087588215b51c05c0"
  },
  {
    "url": "assets/js/10.021e6b0f.js",
    "revision": "3b285f520812459950116a9856604064"
  },
  {
    "url": "assets/js/11.ccc555aa.js",
    "revision": "8a9b6ac16d924f7bb267bd279801a227"
  },
  {
    "url": "assets/js/12.31845877.js",
    "revision": "763491272ed231c3cb42e005a696c37a"
  },
  {
    "url": "assets/js/13.29555ba5.js",
    "revision": "5200924fc472d1e0242fff968318b1a8"
  },
  {
    "url": "assets/js/14.c0fbe63a.js",
    "revision": "aba281877dfebe53d17f6f199e0dea4a"
  },
  {
    "url": "assets/js/15.3ea93ef1.js",
    "revision": "395e872195c3595b49eafde02c6c0dd7"
  },
  {
    "url": "assets/js/16.a2b3c204.js",
    "revision": "af29d3fff568f7e6ea00a01bc098376d"
  },
  {
    "url": "assets/js/17.00467265.js",
    "revision": "b0badfce51bfa12d001a8ae1313654a6"
  },
  {
    "url": "assets/js/18.051491a9.js",
    "revision": "a39df1bc4f9a9741d03f25727c45402f"
  },
  {
    "url": "assets/js/19.3dcf794e.js",
    "revision": "4619b98cc2a21439698ab3c224c8cc7d"
  },
  {
    "url": "assets/js/20.a07fc234.js",
    "revision": "3e2226f77080b9d8e0f97271dee504e8"
  },
  {
    "url": "assets/js/21.dd45950e.js",
    "revision": "d1363fd7cf47199b0cc6cafaab2d8e78"
  },
  {
    "url": "assets/js/22.034d3a33.js",
    "revision": "a8e964273a84988a9acdcd2c4a3ee554"
  },
  {
    "url": "assets/js/23.93800aff.js",
    "revision": "c445f965f5d3591f666d3c2a0768b148"
  },
  {
    "url": "assets/js/24.1e11e6be.js",
    "revision": "cbef48ad177e9650cd41f83a03563ee8"
  },
  {
    "url": "assets/js/25.7690728a.js",
    "revision": "58b6f8215d468c862b46474c1054911f"
  },
  {
    "url": "assets/js/26.f422ce12.js",
    "revision": "54131200d741c71553d174ab9c1fcb33"
  },
  {
    "url": "assets/js/27.74daf6e4.js",
    "revision": "eb5afdedd426f14854ef0c7f3b56d3a0"
  },
  {
    "url": "assets/js/28.1e790674.js",
    "revision": "71ccc27a46b701091f717f891e8adb3d"
  },
  {
    "url": "assets/js/29.b73cd277.js",
    "revision": "cbdd327d41e0157c81b3217e98a246ef"
  },
  {
    "url": "assets/js/3.aa1252ef.js",
    "revision": "6e5b391924bfcabfaf97654f59f38f09"
  },
  {
    "url": "assets/js/30.27c1e0d9.js",
    "revision": "7ed8c625074ac640a37b4e7a1db3529a"
  },
  {
    "url": "assets/js/31.769b02e0.js",
    "revision": "23f4f76690d47b5169cb418de91af64d"
  },
  {
    "url": "assets/js/32.907cd9cd.js",
    "revision": "a07d780d572a39a8c195560e6c998ac1"
  },
  {
    "url": "assets/js/33.be555496.js",
    "revision": "2e643538cc9ee203a7f1bc36a79fc4c1"
  },
  {
    "url": "assets/js/34.010015d3.js",
    "revision": "aedd1be2385c4183309e720933d8ec45"
  },
  {
    "url": "assets/js/35.289603d6.js",
    "revision": "ecc496512a0361d30342e2c9cd499f36"
  },
  {
    "url": "assets/js/36.e9d21988.js",
    "revision": "1ad394801b711e5f1ad48495d7e52814"
  },
  {
    "url": "assets/js/37.ac5dc130.js",
    "revision": "c0d7aa136a449b8c3812bb18c059fa91"
  },
  {
    "url": "assets/js/38.90bafa6a.js",
    "revision": "73bf1ae822211c5117c126e2e81a1dc7"
  },
  {
    "url": "assets/js/39.5a6aa238.js",
    "revision": "6c7d08176139c24336bc7db43009e89c"
  },
  {
    "url": "assets/js/4.2ca1de50.js",
    "revision": "5c77a6ed13172946c63aa0c1c6c6aba0"
  },
  {
    "url": "assets/js/40.95917f21.js",
    "revision": "72cae829bcff18e8b543867632a346e0"
  },
  {
    "url": "assets/js/41.403d50e5.js",
    "revision": "c175dae0b890e39db5e48a3bebb5959d"
  },
  {
    "url": "assets/js/42.fe5a2806.js",
    "revision": "a3f46831d6440ee369a3ffcc1ba88c43"
  },
  {
    "url": "assets/js/43.5c975fc0.js",
    "revision": "4a952831380c2853c2bc28e3cf423f73"
  },
  {
    "url": "assets/js/44.9dd3e86e.js",
    "revision": "d91e3027f252a1f6fc327df0db95d774"
  },
  {
    "url": "assets/js/45.2b4d2181.js",
    "revision": "bb6d235e2e05f8a89c41cea1d8b5a402"
  },
  {
    "url": "assets/js/46.785f0921.js",
    "revision": "2e99f9ccbe68192643a23ead091c8792"
  },
  {
    "url": "assets/js/47.a3506007.js",
    "revision": "c77bcda768b7d5593bdfaec2c9b4fc5c"
  },
  {
    "url": "assets/js/48.fbfaa44c.js",
    "revision": "a4b632dfcb5196087c3d0d87a67a45cb"
  },
  {
    "url": "assets/js/49.a9fc738e.js",
    "revision": "7d1bcbe72b2eaacce63da37e4a022544"
  },
  {
    "url": "assets/js/5.da8dafe5.js",
    "revision": "db531cadf7d1c62aa35e03c263067db5"
  },
  {
    "url": "assets/js/50.2d282459.js",
    "revision": "02201a0113c8cb5f9f681843ac66b381"
  },
  {
    "url": "assets/js/51.cfc5b1e9.js",
    "revision": "e0c4489a7d4f9162250accbf38b92610"
  },
  {
    "url": "assets/js/52.ef045d31.js",
    "revision": "6c4fc471eeb5d9d874a6bff976408d4a"
  },
  {
    "url": "assets/js/53.00eafc78.js",
    "revision": "475be07b3299ce59235ef9a8ba4eb74a"
  },
  {
    "url": "assets/js/54.c4d7bfa5.js",
    "revision": "848b347f527054d4f09cbbb317469eb9"
  },
  {
    "url": "assets/js/55.a92a5270.js",
    "revision": "9f25b8315a4da494936ee4055ad58aeb"
  },
  {
    "url": "assets/js/56.c083579b.js",
    "revision": "954c090b50c4bc1f08ca250b926f0eaa"
  },
  {
    "url": "assets/js/57.3647c545.js",
    "revision": "5ca6bb5e32a30958d5ed8d68ddef71b9"
  },
  {
    "url": "assets/js/58.81e05ef7.js",
    "revision": "6912d8beb264f73b47177bdc2da18e88"
  },
  {
    "url": "assets/js/59.ef39cd33.js",
    "revision": "a9b0a85a497c416a209c2a984e9378d9"
  },
  {
    "url": "assets/js/6.70478493.js",
    "revision": "6952cd2e9f23cc581aa3588dc6a38c8c"
  },
  {
    "url": "assets/js/60.838c4586.js",
    "revision": "f60e0a893e86aff4eb4fd3901cf8da5b"
  },
  {
    "url": "assets/js/61.2c827da2.js",
    "revision": "9221dfcf4f94aa9850e4d6c111dc8e84"
  },
  {
    "url": "assets/js/7.128bcda7.js",
    "revision": "1758faf7f0cc6dd922f6e452b99001c9"
  },
  {
    "url": "assets/js/8.c57f2a01.js",
    "revision": "38ab7ac575ea122e25680970ac95adb9"
  },
  {
    "url": "assets/js/9.47d9391d.js",
    "revision": "2689b8f2c3c68e248a07eb8d7e4ecff5"
  },
  {
    "url": "assets/js/app.6e284c26.js",
    "revision": "6e4c113afc27075dcfe528db526dbe46"
  },
  {
    "url": "contact/index.html",
    "revision": "2e6c95c0823edd4d8311ba681e389e5f"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "28f549ab5e7bb93c9a259d5f5a41f265"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "105536cb7b5e3a8ac5c4d0eb112e91a6"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "8c8dc85d8ea80fb3643bda20b7c78150"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "2766efd8d730f1b6fe7386c0e6295d3f"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "e2bc133efa2f8c23033fc0bc277b747c"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "298bd9651b43e842dd65399ba6a9cf2d"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "b36bc10a00acbbb279a5143d1d165b93"
  },
  {
    "url": "courses/index.html",
    "revision": "bf1d25a8d33da7e0658dfd816c05f8c7"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "0daa5205b104d23f81457d0fa78d3c33"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "17f69b185c0569bf1cdf65b7c5aa3d2d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "763b824bffac9c46099069d117471cae"
  },
  {
    "url": "courses/template/index.html",
    "revision": "182cb58e893dc5b9bc4eb1a123a7f704"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "904b4cc420f3453275f60b028d63ccb2"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "c59d606dd6ef4bd26de96afd099b69b4"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "d5cc92a8c5c4912638b4afda95b6b4f2"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c19fe5f78b50b397b00dfccbb594d6ac"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "cbe10f8340baff0af78c56ed4284a2e5"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "369a9e9e75ead8c97ae2540d2373b8c4"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "72267dabe4fc160f512124b5360473dc"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "e0fc94ff611eb798aa2764abfdd742e7"
  },
  {
    "url": "general/enroll.html",
    "revision": "f710d31897c063b13e63b975d5bb7968"
  },
  {
    "url": "index.html",
    "revision": "f126a8360ed1e2c84fea15c55e6e0ca3"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "e5a591aa69aff6c93d84bf042975f707"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "40eadf53db6538e8c835233a34ab1480"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "ecfcb311715e3b08c8f90fbd541290dd"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "8b5af6f87afba709e3852f2e83776a6f"
  },
  {
    "url": "projectteams/index.html",
    "revision": "e9324d69c2cc4f60f7181f0f36cdb1b1"
  },
  {
    "url": "studyathome/about.html",
    "revision": "33b7100df5a2cf424f2c210084537fc3"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2d7e6e2982b458ea87c9ef2a6e304a85"
  },
  {
    "url": "studyathome/help.html",
    "revision": "876bfa8fe6815f89ab73765a8df7256b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "01b4ca0a6f0e4040c9ee47d3d0c27e26"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "e65d8d656d8d8775700c052f1ffb6f77"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "a372d0c065b22ed235b5dee1e051d465"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "00030796ea96f2ced4a8d73d63338efd"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "678b79aa82f7c3b3252f0a74b41a1180"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "0ae52715f085099c54715c78082319ea"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "9a7347f3e625519e8daf409325e9f73a"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "9dc9aa1b686d4bad4703b2e08b8e8b8f"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "5ab0d33cc742fef342b0d7cf0162cf99"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "96d6a914c317f9a2edd62760f20325dc"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "3f7254161286c2205b349a8b795b27bc"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "5031576cf60e8a4e07b7f4a8e8e73c7f"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "bd839b280eac987f5ae708592e479a3c"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "9d527d2c882902977dcc9399b279b475"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "5cb3de651de577d1e2f9fa229448a975"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "942785504e3e0a9146263e877aab5945"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "838dfe3685deaceecaae1533f1ca6802"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "d609f93b732f98115743c4c5d59d8483"
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
