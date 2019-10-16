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
    "revision": "f17b3f359e87c7bd530a652696027bde"
  },
  {
    "url": "assets/css/0.styles.48127e1b.css",
    "revision": "df21bda678858e49f35f91079e1357fa"
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
    "url": "assets/js/1.c6c09940.js",
    "revision": "e78fb008bd481ecedee1ed094028179e"
  },
  {
    "url": "assets/js/10.7ed0793c.js",
    "revision": "f86a5b0808ae1ada9ab86437c271a27e"
  },
  {
    "url": "assets/js/11.a2f3b832.js",
    "revision": "bff38e64642cfa8f268488faee66de79"
  },
  {
    "url": "assets/js/12.730867fa.js",
    "revision": "4762c70094f630a8bbec16ec94523720"
  },
  {
    "url": "assets/js/13.61000f58.js",
    "revision": "950efa5c7375d5ced860b42f8612a127"
  },
  {
    "url": "assets/js/14.4794d4d7.js",
    "revision": "a5b62a5c301df3c64b06dda7c2e18b5e"
  },
  {
    "url": "assets/js/15.fdc75643.js",
    "revision": "01022a3326a8ef21ac739477e34a035e"
  },
  {
    "url": "assets/js/16.f8313325.js",
    "revision": "2670187b137f50b10873b0ac78b41ac8"
  },
  {
    "url": "assets/js/17.57f34250.js",
    "revision": "cf92e5c824757dc7d294e10decd42b6d"
  },
  {
    "url": "assets/js/18.64fbeeb5.js",
    "revision": "da69d4ebc8e5f0eaa278aafa556093a5"
  },
  {
    "url": "assets/js/19.b4783e67.js",
    "revision": "5344844611efae5d739179e583ac225e"
  },
  {
    "url": "assets/js/20.9626ca35.js",
    "revision": "afb819aff1779c174cfa35f73545be9b"
  },
  {
    "url": "assets/js/21.8ec0c143.js",
    "revision": "ec3c5a8f1d0bade4371157c9613ce73b"
  },
  {
    "url": "assets/js/22.ff6e289a.js",
    "revision": "f949f738e39169c3d713f0649d1829d7"
  },
  {
    "url": "assets/js/23.bbb8fe05.js",
    "revision": "9b38270613c9c2b2f783792b9acb91a7"
  },
  {
    "url": "assets/js/24.c569570e.js",
    "revision": "7e4fa501d0343660f7ab0c765988e1ce"
  },
  {
    "url": "assets/js/25.72c883c6.js",
    "revision": "dedf8363f246d7b1a29711bb4717fbfb"
  },
  {
    "url": "assets/js/26.6f938aa7.js",
    "revision": "a9aa0cdb97ab521a68f962834e9c858e"
  },
  {
    "url": "assets/js/27.da047a4b.js",
    "revision": "be40f9e10bd84d1be503a53ebc57479f"
  },
  {
    "url": "assets/js/28.3f78f084.js",
    "revision": "cda0058d0841bf4272b5b22b3e0a5253"
  },
  {
    "url": "assets/js/29.ef384594.js",
    "revision": "7712f3e53f9be6afdf11412c9c14f32c"
  },
  {
    "url": "assets/js/3.dc9cca54.js",
    "revision": "db2adfc9020382da33937b702bddf4f5"
  },
  {
    "url": "assets/js/30.fac607e3.js",
    "revision": "28017f7699c6bb1be6db5c494925e7ce"
  },
  {
    "url": "assets/js/31.e1d26c9c.js",
    "revision": "d74f8b93d5f604dda572a28f67b11cf3"
  },
  {
    "url": "assets/js/32.b6f30679.js",
    "revision": "a29413d62a0be12bbf32756db4a44838"
  },
  {
    "url": "assets/js/33.baa94d8b.js",
    "revision": "d1380d5d24ca91e1a5b2e0666c15a3ae"
  },
  {
    "url": "assets/js/34.7233d73f.js",
    "revision": "0541e59478c5790aa23dbae41f607b19"
  },
  {
    "url": "assets/js/35.7d376aad.js",
    "revision": "c6aec0ec3e9f40408923da597905e97f"
  },
  {
    "url": "assets/js/36.d820e0fb.js",
    "revision": "74765eefb06341fd8206b01c11de97d4"
  },
  {
    "url": "assets/js/37.a85270a8.js",
    "revision": "932888e23fdb7b75be53a5efd0c3e2b1"
  },
  {
    "url": "assets/js/38.69404261.js",
    "revision": "a3e02b1015dd18f36aeb6520750ff514"
  },
  {
    "url": "assets/js/39.a052f51d.js",
    "revision": "aaafc95a17a3b9dbe2677e8976c56aab"
  },
  {
    "url": "assets/js/4.07564225.js",
    "revision": "e8d5d21f4a0a6986edfd7c18403b343d"
  },
  {
    "url": "assets/js/40.b14da5d3.js",
    "revision": "016e187944dbe5c49b93f5711f8511bf"
  },
  {
    "url": "assets/js/41.b2b4ae3b.js",
    "revision": "fefbd2fcb71d5f5eec0c3d7bd62ff9a3"
  },
  {
    "url": "assets/js/42.36241e1d.js",
    "revision": "29094c750a1321fda84c0a020c3959f0"
  },
  {
    "url": "assets/js/43.71065e80.js",
    "revision": "73d3aa1e3b0d03796ddef60028f45644"
  },
  {
    "url": "assets/js/44.e7eba455.js",
    "revision": "0466e8eae8d81b209d0bf0531e0ada4d"
  },
  {
    "url": "assets/js/45.330f6975.js",
    "revision": "dfea3199fb1a7dee9ae966d8eb6d208e"
  },
  {
    "url": "assets/js/46.acd33850.js",
    "revision": "eed876bd1d0f0ee95614c9b0edab1a6b"
  },
  {
    "url": "assets/js/47.cbb19d5f.js",
    "revision": "71d034d9e51a5cdc374d4b62f1f6fba1"
  },
  {
    "url": "assets/js/48.17ef6962.js",
    "revision": "846346abc4469d185575f150c6025d88"
  },
  {
    "url": "assets/js/49.3c3d30a6.js",
    "revision": "fc4d598a08fd7329bf610190fbe510f7"
  },
  {
    "url": "assets/js/5.da971511.js",
    "revision": "267f3eb2dbc7bfb11cb9dd68b000a0ad"
  },
  {
    "url": "assets/js/50.5559ddcd.js",
    "revision": "bf45de56b844d0d8ebe9933d88133a07"
  },
  {
    "url": "assets/js/6.3a249e6c.js",
    "revision": "52cdced6fb2712442d8f6aece5ede591"
  },
  {
    "url": "assets/js/7.4de68920.js",
    "revision": "cdb54d7cb4ff6f835aedb1a976f6f2e5"
  },
  {
    "url": "assets/js/8.8ad660e9.js",
    "revision": "7f55d6991458728d8b3cc5382a32b942"
  },
  {
    "url": "assets/js/9.990d60f9.js",
    "revision": "ee5a8a7ffd71fc2cb54470379832ce26"
  },
  {
    "url": "assets/js/app.2ff6e610.js",
    "revision": "c51a35d3439872e2714b8c481e0299e4"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "ba779103667686c455a99f3320951a37"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "5b4cdebd09a7544945c55bfba00bbb0c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "cc6e9401a1467fe4a19ab54b263a9f02"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "17e6c95e09f06a6f435d2025fad77867"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2328949893af9779c6cfb7608ab8a2a7"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "712741ce86ca8611d9bbab88bc0c8734"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "39d7722ef3ca5d087a7f852244a9fcf0"
  },
  {
    "url": "courses/index.html",
    "revision": "fae15ec1464330bfb84872c727bbae11"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "ab0c34a5132a9c1b0714f375d38fa618"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6fdf179ada505c671b1c51fd5939abed"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d177bd117ded688006c069e0648916b0"
  },
  {
    "url": "courses/template/index.html",
    "revision": "7ed885d4187278acdab2dcf49a00f9cd"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "210de783a7bfbb5f602d601a5b28a3bb"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "02bc3b2663ae81831c81d4c7bab058a7"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "f21f0e111ad51aeae9c515877874db7b"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "36addfba181e52c3a0239fd2a138aa4a"
  },
  {
    "url": "general/enroll.html",
    "revision": "d7cbc8d341e8b542a24daeaf55474840"
  },
  {
    "url": "index.html",
    "revision": "4224b060e4864a3db42af18fcac71272"
  },
  {
    "url": "studyathome/about.html",
    "revision": "e83916eb0ed3fa1c7d746845e56ca362"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2dd57d6d0df5536b10d9646ce545e05f"
  },
  {
    "url": "studyathome/help.html",
    "revision": "2b0f06c7e2f08eed48d0bc88a1424e41"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "a861513671efa17c18023302a88919fa"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "39d2a4428ea359288d44732dfa83d345"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "56a9144c4e8e5370d6bcb1cafc60ebf3"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "86f15a0a6b4b2bda35cf7ed1197b7efa"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "2984185d44c11e6d9a1b56f569066c07"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "a78ef1a30bb74773a377b7d42dbfd962"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "bbfa740261829a518c8bb950e42f9617"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "569acdfc5eebdde37413224bf360c12d"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "05b3af16c6569271eb9230ef20c461bc"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "5890ba6d50763b8561cea7b330fb5ad8"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "681d43e85d41cfa0e472765302b2d9b9"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "a6b9718ff2f0de7b9d50e78422787eb7"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "635476ea18862afb1bd69400e15c6d5b"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "6c61fe5318e149fb8f2871b666ff8fdb"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "d1a30cc97bb2c1593a9ce77a06f3e98a"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "03f7c46f962bf2981bd800b30aabba38"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "193b082610986c7404f909e9c0398f5b"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "8da9de62203a0499593e4c2abefd975e"
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
