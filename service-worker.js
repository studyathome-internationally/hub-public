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
    "revision": "2eeca97a1e31ffb210aac88fd29614de"
  },
  {
    "url": "about/index.html",
    "revision": "6ac74b5604f4455fe1a3b03fb6e7a231"
  },
  {
    "url": "assets/css/0.styles.81ae8b10.css",
    "revision": "b1d381f742ce0b1fc3e27602d793fd45"
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
    "url": "assets/js/30.ea2a99bc.js",
    "revision": "c9e999d06582e3e0e5afd1f3fd6e884a"
  },
  {
    "url": "assets/js/31.35237450.js",
    "revision": "a1d40c36aee18843a0c40233e793f0b6"
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
    "url": "assets/js/35.ca924031.js",
    "revision": "d626306a88022d8be2c4798e54c262da"
  },
  {
    "url": "assets/js/36.1a401c12.js",
    "revision": "3bb4013c92b9569905b24d594fef3bb3"
  },
  {
    "url": "assets/js/37.d0abbaa5.js",
    "revision": "4e2328a4ba46e21438201716ac05cd4d"
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
    "url": "assets/js/58.ef04cabc.js",
    "revision": "b109cacf4682e9aa0d0d632f02a8a2a6"
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
    "url": "assets/js/60.e56964c2.js",
    "revision": "37fb75fc741ef47177753bf924160e84"
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
    "url": "assets/js/app.8059740e.js",
    "revision": "4eb7a36338237c7b3be5cc67c160d039"
  },
  {
    "url": "contact/index.html",
    "revision": "1f7d95cb5f8845673e8b29fa62529159"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "b49192d5d87a6a538eea8e6f9f85c85e"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "c6f141c297eef552e32d1e436d533b0b"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "fbf5edba1aa5ca1d0491e4505fb65ded"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "0442951dfc9a48916416125d32e95531"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "302687bb24c8f972cf33423b568cab12"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "b69b965a98c177d6c2cfe49f4d354ed3"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "a988d3b34181ad808142788a13985335"
  },
  {
    "url": "courses/index.html",
    "revision": "a89edc762b90baa89026c21fc702e986"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "c0c323155cd37ec8f146fdc8e3b51b3c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "178a4b791d2f952eccf877d4844d081e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "22bb37a2a806573d4a01137fd3ea1e0c"
  },
  {
    "url": "courses/template/index.html",
    "revision": "4e786484c2ddb847329ded7e230ec518"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "896d8027b8351eabc39d84070e07c255"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "6955a245c0e49f9c993b0000010bb7c3"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "ffcbebdeee275232f7a8ca142067eb3b"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "99a8ec4eb7496c95e901a5095367fb4c"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "77977b0c2ce89bcffa627d13cde557b8"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "3e597db764a1bea97b83297742e6a043"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "821529a3a27e3c85a29826782702349f"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "132b4aaa074b12f2017151783cdbe089"
  },
  {
    "url": "general/enroll.html",
    "revision": "fd31089f836c821a36d9e6292124abc3"
  },
  {
    "url": "index.html",
    "revision": "4617973e7f27527abda59a87a9ac4cf1"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "914a464e61548cf35443cce1bf964f52"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "5535e5981f1fe046a7e42910e34c10d3"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "cb994073d4b9ae57b76ed3ab8ff809d1"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "620f87366b24a444e8d60e59feb63fce"
  },
  {
    "url": "projectteams/index.html",
    "revision": "3d981d088eb6fb28a9e2ce3d766dac12"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d1bc277519133d28da7adb2f38d8256f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "85e7fdd088938849993b5ede80fe2187"
  },
  {
    "url": "studyathome/help.html",
    "revision": "d9ec2710dedb1899df198ec04210e696"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "b6e6150e20b9af7c2296ccffd6f98da8"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "080e77c72975c500d306cb7c855babe5"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d93fe76d38117cfd9145d279d3765d49"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "58b0883041a559f1ea0acf70057b35b0"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "a7f8216193fcfdd278be57f259c1bdb8"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "30a10c01049c073d267c6accea093c1a"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "fc5639b56679bef9c96af01401ef330f"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "5226df59086f5cd3877c8c5eecc4ca2b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "a7d4292f520f3565e874dad1399c1ba1"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "370f38d1c726a9784396ef3250a98799"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "c25e2cbcc707b2d5e5b7c251fbca0787"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "7dada32b657968e06ce9251aad693da2"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "79c787775b3548411214b1ea31ced471"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "c8390f87f8acef6a50f54f71c8529821"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "6e7e8e8e065465846a9c95696ce3f8fa"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "1a54412ceb5c85bc6beb9bad602292c7"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "ed790a8965888fed501cea3caa8cd80a"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "1f68b181031dc1a8c9bcb17d5a1ebf89"
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
