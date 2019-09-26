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
    "revision": "ca3247d834f59ae7fb9794992a1417c1"
  },
  {
    "url": "about/index.html",
    "revision": "426ef7905e307d79e65366a606ad549d"
  },
  {
    "url": "assets/css/0.styles.b98a6803.css",
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
    "url": "assets/js/1.af6de6ab.js",
    "revision": "d7bba167a25c00fa5f95164dcfe5e0b4"
  },
  {
    "url": "assets/js/10.9fdb89d9.js",
    "revision": "d1aa4f9597fc2956caa857ab4f441ed4"
  },
  {
    "url": "assets/js/11.a3fefbd7.js",
    "revision": "302d86e9bd6106ab6711a2a5443acc25"
  },
  {
    "url": "assets/js/12.dd987038.js",
    "revision": "f49e2857459b0d269b9c965e9d11d0b2"
  },
  {
    "url": "assets/js/13.531391e7.js",
    "revision": "adf8b94630fd03d87c6c479e608d455e"
  },
  {
    "url": "assets/js/14.e86ccb35.js",
    "revision": "ed16a78b4e146b1f0441208f5b5793f4"
  },
  {
    "url": "assets/js/15.80d035cb.js",
    "revision": "1c49a1fceeeec4359507cdce78966cb0"
  },
  {
    "url": "assets/js/16.74ef8664.js",
    "revision": "5e4d402ff963ec8eb5bac35c7cf879ef"
  },
  {
    "url": "assets/js/17.d7fdd08a.js",
    "revision": "12c670b7377af0d84a075af11fcffef2"
  },
  {
    "url": "assets/js/18.57df7eae.js",
    "revision": "e1e213a208d3ed5441c5ce4a5f89c6de"
  },
  {
    "url": "assets/js/19.37d59e20.js",
    "revision": "67aadb18220696364b1d66d613a84bfc"
  },
  {
    "url": "assets/js/20.2de1f8ea.js",
    "revision": "2b0cb2863823a1f5f9108937fdd7b725"
  },
  {
    "url": "assets/js/21.c5aabd35.js",
    "revision": "df3608fce485a4df238e1bdfe1726a1b"
  },
  {
    "url": "assets/js/22.913f2598.js",
    "revision": "c7b1226c53a8b2586e8d6f05c0dafc88"
  },
  {
    "url": "assets/js/23.cf5db0a7.js",
    "revision": "265d8b295ff7e327028ee0ee51fd0954"
  },
  {
    "url": "assets/js/24.3293eaca.js",
    "revision": "64b7beeceebc0d31ffd531d911e64ac3"
  },
  {
    "url": "assets/js/25.7f1f61bb.js",
    "revision": "0466e10e08929ed472ce43a3a59b1af6"
  },
  {
    "url": "assets/js/26.3d9de05c.js",
    "revision": "a456f11dc99b161a63f9594bd72ef14b"
  },
  {
    "url": "assets/js/27.bd78a514.js",
    "revision": "fe6fea52cd198e5b2d0484314902c719"
  },
  {
    "url": "assets/js/28.ea67c03d.js",
    "revision": "5e09fca0413c6c5fde996d1f6931e0cf"
  },
  {
    "url": "assets/js/29.c226dc69.js",
    "revision": "62438968e7c1d6e533319af1098034f3"
  },
  {
    "url": "assets/js/3.c7d75876.js",
    "revision": "2e1f8d73f748ad5b6fb4f5ff6a1e9899"
  },
  {
    "url": "assets/js/30.abd5ea92.js",
    "revision": "5f2c394c484f3a935ac516433f206373"
  },
  {
    "url": "assets/js/31.39855b78.js",
    "revision": "79e669bd17e1295f338e44968a85372a"
  },
  {
    "url": "assets/js/32.18db94d1.js",
    "revision": "acf529deee698f77942ec853b4511541"
  },
  {
    "url": "assets/js/33.26b40beb.js",
    "revision": "a0bedc87a18797f831ffaf75060ea74f"
  },
  {
    "url": "assets/js/34.fdd6caea.js",
    "revision": "0b50ee56b066f0e4d82c9d4821b1c4eb"
  },
  {
    "url": "assets/js/35.3da49167.js",
    "revision": "97cf6d2321939957a6ebdc08305d510e"
  },
  {
    "url": "assets/js/36.35f646e7.js",
    "revision": "a5fe94d7f2d7c11417e1ae992352e6b4"
  },
  {
    "url": "assets/js/37.0fceaeb3.js",
    "revision": "4e860b1815ca536e819b6534b1bc33b1"
  },
  {
    "url": "assets/js/38.4d93a322.js",
    "revision": "a093a54f3c449af66c4878a87f58c1d1"
  },
  {
    "url": "assets/js/39.e7742d40.js",
    "revision": "cb7d01031cc61d3ba19abf1ff925e114"
  },
  {
    "url": "assets/js/4.16dfff99.js",
    "revision": "e6cb46621873d71c1ef122ab8fcafbbb"
  },
  {
    "url": "assets/js/40.e805560f.js",
    "revision": "277c0e2fb5404916fe8a2c1e2a0d44a7"
  },
  {
    "url": "assets/js/41.ae10b156.js",
    "revision": "e582dba57647ac216047a261c9645373"
  },
  {
    "url": "assets/js/42.1dbf30d7.js",
    "revision": "a1d9798c08b3b96f8e3e53b63ba3db73"
  },
  {
    "url": "assets/js/43.adcd4ebb.js",
    "revision": "0ccc1250627d5e8d5894c5cc0b0875b5"
  },
  {
    "url": "assets/js/44.e67843af.js",
    "revision": "4b06db497a6bfa494c4c40bb688e4d97"
  },
  {
    "url": "assets/js/45.c2907394.js",
    "revision": "02bff14562a525788a78f730123df439"
  },
  {
    "url": "assets/js/46.bd5c2930.js",
    "revision": "afe04c15359be00b29f4116865ce43cb"
  },
  {
    "url": "assets/js/47.1e428544.js",
    "revision": "a54608468c775c5d4d3f152a824f44d0"
  },
  {
    "url": "assets/js/48.66c6c86e.js",
    "revision": "5650cdef9df38520b41e0c40de608253"
  },
  {
    "url": "assets/js/49.d4e7e5cd.js",
    "revision": "1e86fff2c6a4d65e0de06c5c2a1d4c02"
  },
  {
    "url": "assets/js/5.bbeccd87.js",
    "revision": "c365ea254013aa13581e54695fb96fe0"
  },
  {
    "url": "assets/js/50.68b7d7b3.js",
    "revision": "dd1cd339652f1aaf37d03b9a1308d5a9"
  },
  {
    "url": "assets/js/51.9b2ffcd2.js",
    "revision": "1db4a9c2dc54d392a14d36d423900ed7"
  },
  {
    "url": "assets/js/52.add9a0ba.js",
    "revision": "56d108ba7e8b897aa41359a69c7e80cf"
  },
  {
    "url": "assets/js/53.8c76f59a.js",
    "revision": "bd8ac92a2dd5d6cd053eb24a3676279f"
  },
  {
    "url": "assets/js/54.41d86488.js",
    "revision": "411046231fad388a0a2a40350cfa914e"
  },
  {
    "url": "assets/js/55.769f8fd4.js",
    "revision": "fce1772df4f6f82dfcc22f9889e5580e"
  },
  {
    "url": "assets/js/56.a95d55ba.js",
    "revision": "82608283a7c0493224dbd60f2d2f6a88"
  },
  {
    "url": "assets/js/57.11382375.js",
    "revision": "4fbf3e0ef4c4e2c5286b20082fa68295"
  },
  {
    "url": "assets/js/58.47716770.js",
    "revision": "98410f41a59d5b59ace53e30fc08f9f6"
  },
  {
    "url": "assets/js/59.0e3744dd.js",
    "revision": "644083018fad8976bf7ed3bc88b4db26"
  },
  {
    "url": "assets/js/6.ad4f9720.js",
    "revision": "4984cdb8dc863fdc5e12e8766c46473b"
  },
  {
    "url": "assets/js/60.8a0bca3d.js",
    "revision": "63a8a36aa74a98b41f10868b4fd6cc4f"
  },
  {
    "url": "assets/js/61.ffa3aca0.js",
    "revision": "9eeb123eca0e6ab784659660ef6e78c5"
  },
  {
    "url": "assets/js/62.84d3277f.js",
    "revision": "44f396be2992b9f1da1b88b48d7d4afe"
  },
  {
    "url": "assets/js/63.8d522b67.js",
    "revision": "3e6ee6e89956ce52bff202fecf9e3d14"
  },
  {
    "url": "assets/js/64.9ce7fef7.js",
    "revision": "0e0b0876a39b9dfa4585ad510c676fbe"
  },
  {
    "url": "assets/js/7.f2e7b998.js",
    "revision": "ed5839e1f3e8b3de0c069feebbc450a4"
  },
  {
    "url": "assets/js/8.f38c2b6b.js",
    "revision": "ca47697fc95aaf366f3e7d7f9fc2ea2b"
  },
  {
    "url": "assets/js/9.b5f01ff1.js",
    "revision": "e2dadb7df38295dcbe3b99e7e1cc2e41"
  },
  {
    "url": "assets/js/app.4105290b.js",
    "revision": "e578c1a2687b2359eb65af5b516ae7b8"
  },
  {
    "url": "contact/index.html",
    "revision": "5839e630369b015221584587cc5eb5e7"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "d978b5229546633e51c57e8d647b5d6c"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "b6667ccd117d0d6fb6dfba5efd3414db"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "40c570b1ceb42207118856f92da68975"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "c5f7fa3a859b13cc76df1be247781222"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "07eccdddd9dbcb5e9fc66ac8a3680ad3"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "a134a061f7dc569607aff683e67f6066"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "7aad3ea960e0af20c909257164a1c33d"
  },
  {
    "url": "courses/index.html",
    "revision": "6e759bd03250d6a731b44ce0522f02bc"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "4a2e7f66b99921e44c1d121ba13df6f7"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "e3e312d679bc010ed879b0133c51e19e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b89531a16fec4b3005eebeefb162cb24"
  },
  {
    "url": "courses/template/index.html",
    "revision": "736daf747a1d1ba6753ceacd0b9eccc5"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "15c1c0df0128a0b4a68df76b75757b68"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "f589489162d14bad399c7805dc598a31"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "7fba6c140ce0fb69822ad4929f1fa609"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "462d9819c587a9a00593a5cce6522dc8"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "79b44f19697fb3b94febd9746771446c"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "ff555b04eb9cf8b2b4584d6ae31821cb"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "64fd7a871e37f4aac411c79582636425"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "150469046a3050b8d2b66085a5fc1d40"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "d1441ed15c9f8dd8dd5f1054cc3190d3"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "772eb8ecd56b2aafb3db56a52290c8d5"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "f4a1c5c4d08772eb22be82eed991c5a2"
  },
  {
    "url": "general/enroll.html",
    "revision": "d83872a3e5aa5b7a4b1552ba603e388b"
  },
  {
    "url": "index.html",
    "revision": "7f57e5765cbd4529a7177aea166c1a7e"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "2d2510460e450febb4dbe58c3b80f05f"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "ad5fe2c70579f8ee0211abce36eef444"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "206b7fc721665354d979931f0f3f0a45"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "8a1b69f7e88a7c09e4f464bf594b251d"
  },
  {
    "url": "projectteams/index.html",
    "revision": "9e1b80ddc3d49574dd5d8bab57db283a"
  },
  {
    "url": "studyathome/about.html",
    "revision": "e7a8fa2a144d119f5907ecd4b5c524fd"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "28003aaf062f536096d9ab7cb83f6e29"
  },
  {
    "url": "studyathome/help.html",
    "revision": "c9abf0f17d83c3aa49b0130cd308ae76"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "46a573edf426c7a10f3df075c4c2f613"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "cecdc32f13d42a5631a32ff8247a5bb7"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "1f8ee250aa4a25f4d5cb636a9aac8876"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "fd94a51a52c19336a8c070ba366d025e"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "fd52c4b2e71abced38af709587cbfc6e"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "3b0829348b9c930eab1253c02e35d93d"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a3b75dae38102bdb890063185bea5ad5"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "17a4f3469a2e653fa1c1904fd050fd16"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "c9870d6a85e61d6d43f1d5d0f344e774"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "eb8bf5848f3c903b981121ef25bb63e4"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "00ccc227adec426aa2686b82ad4fecca"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c81cdac5563e3095917a27f2593e8585"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "06520565458c19bb0d9a4474127eff9c"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "75247f6397f0a4e7cb5c57cb9a7b4fd0"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7c4cc8afe700bb9a8552a5130aefb3c7"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "606f47fe0eaa6e13a8b718376c9e4b92"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "96a866e352bc05fabbd39c546e10e73f"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "368ef887163e8c1e6492f95634536ac6"
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
