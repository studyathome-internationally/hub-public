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
    "revision": "80f9105f0c7322761611578fb4697103"
  },
  {
    "url": "about/index.html",
    "revision": "1cca432fd835e284ccee970a1d895f69"
  },
  {
    "url": "assets/css/0.styles.0f74402f.css",
    "revision": "b5ef6f21a4d0494ac03ee1140dd4cce7"
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
    "url": "assets/js/1.f8ce6204.js",
    "revision": "7528954506efbfaf7730be304a20ee35"
  },
  {
    "url": "assets/js/10.0eea3dcc.js",
    "revision": "017589bf891e1e701ac1fc1c32990e22"
  },
  {
    "url": "assets/js/11.8c1451e2.js",
    "revision": "5f334330b3d626bae8ac4bd6efdc2172"
  },
  {
    "url": "assets/js/12.4e51625f.js",
    "revision": "6614803c2142a92164acba4007e76d2b"
  },
  {
    "url": "assets/js/13.b717e30a.js",
    "revision": "6f5ef19b58178dbf193bf69212fb1720"
  },
  {
    "url": "assets/js/14.d80248c6.js",
    "revision": "55284d9c37dacb5879a3551551d981c0"
  },
  {
    "url": "assets/js/15.ee23501f.js",
    "revision": "40fe8f99135bf422ee43235730c99a6c"
  },
  {
    "url": "assets/js/16.ae1fd5fc.js",
    "revision": "564b16f164026e40544b7543183d49c0"
  },
  {
    "url": "assets/js/17.a0c1e7b8.js",
    "revision": "df8bdffb83e3f0a08fec33444c1205ae"
  },
  {
    "url": "assets/js/18.cd7e1c83.js",
    "revision": "faac2a759aa596649433d9ebe06223b2"
  },
  {
    "url": "assets/js/19.b00dc150.js",
    "revision": "4619b98cc2a21439698ab3c224c8cc7d"
  },
  {
    "url": "assets/js/20.cb770c80.js",
    "revision": "2f0093313843fe89591e6f49c2a707ae"
  },
  {
    "url": "assets/js/21.c33bbf09.js",
    "revision": "c2054086ab632ce963ebdc7472778e06"
  },
  {
    "url": "assets/js/22.2f872aba.js",
    "revision": "fb418994e2888d2bdb9662dbe24a8299"
  },
  {
    "url": "assets/js/23.a80c1856.js",
    "revision": "74eddaae0f3868e7d83043d5449646c2"
  },
  {
    "url": "assets/js/24.d346a3b1.js",
    "revision": "df7a18ea6426fea691e64b44b77833d8"
  },
  {
    "url": "assets/js/25.f45d367d.js",
    "revision": "8a37e667d2b03ecf29738236d1529032"
  },
  {
    "url": "assets/js/26.c829a72c.js",
    "revision": "d2a60a4263acf4dd4dc7a9d4e9c59788"
  },
  {
    "url": "assets/js/27.7546a341.js",
    "revision": "2cdeacb05abce4042395d4cfd27e993f"
  },
  {
    "url": "assets/js/28.03147ebd.js",
    "revision": "7e012353dc91a4304c75b5dbe4e7f398"
  },
  {
    "url": "assets/js/29.72881817.js",
    "revision": "142c3ad99d5a71d72186321b63aecef8"
  },
  {
    "url": "assets/js/3.7453f3c2.js",
    "revision": "5ed34cdf09aef214f6c7bcdffd462342"
  },
  {
    "url": "assets/js/30.fbfb8b3e.js",
    "revision": "d45790620cd9ac6310af5d72a34a196e"
  },
  {
    "url": "assets/js/31.0d89cc5b.js",
    "revision": "270ffd250c54918d8cbac3295ee77986"
  },
  {
    "url": "assets/js/32.074126aa.js",
    "revision": "d027f41e0ec5d97d8ffdd9e8112b59f5"
  },
  {
    "url": "assets/js/33.206f3aa5.js",
    "revision": "43c5b63319f2738c713fa3d6e15d5644"
  },
  {
    "url": "assets/js/34.1b466ba2.js",
    "revision": "a87e6ff616418cc222be19b9ad60d91b"
  },
  {
    "url": "assets/js/35.d6877bbe.js",
    "revision": "00efd6cea3a8f4460fcf6ab492aab518"
  },
  {
    "url": "assets/js/36.699fa60c.js",
    "revision": "60978b67528298933a4b3bc0bdc3a0a1"
  },
  {
    "url": "assets/js/37.7782a9df.js",
    "revision": "b074d574fb27b903c04010c1b9bf31a3"
  },
  {
    "url": "assets/js/38.86da4a34.js",
    "revision": "9d65b16d53cd5097bec1d29781803b78"
  },
  {
    "url": "assets/js/39.184f01c6.js",
    "revision": "1b526a10c94a9791c79b0810572b54a8"
  },
  {
    "url": "assets/js/4.ab3fea4f.js",
    "revision": "6fd7ed8842a427cd16dd9201dc93fa26"
  },
  {
    "url": "assets/js/40.3d457033.js",
    "revision": "b7e56696e02b7231102b7963f315896d"
  },
  {
    "url": "assets/js/41.b80fcfe4.js",
    "revision": "89ccd1460bba0c41a49844eecec6f246"
  },
  {
    "url": "assets/js/42.d6d18983.js",
    "revision": "47e0623f40421a6be8af7c5892cc2caa"
  },
  {
    "url": "assets/js/43.9fa9eb60.js",
    "revision": "fe60f2d4930197892f7667fdc495f29b"
  },
  {
    "url": "assets/js/44.2f8a37a1.js",
    "revision": "b91c2e74df70be16c183fc2d7abd4ed1"
  },
  {
    "url": "assets/js/45.843ac98c.js",
    "revision": "b9b685156425540bcb95820b454c2d00"
  },
  {
    "url": "assets/js/46.8240b653.js",
    "revision": "57ec37b0b97177ba06279df601ce39b7"
  },
  {
    "url": "assets/js/47.b83210e8.js",
    "revision": "b39d74a71a1cfcb7efa18dcd934e6a85"
  },
  {
    "url": "assets/js/48.01b0fb58.js",
    "revision": "9ede55898d714db95e1aa24f8dd06cfb"
  },
  {
    "url": "assets/js/49.662f55c2.js",
    "revision": "8afcaa5cd429a37825791dec38d3fb1c"
  },
  {
    "url": "assets/js/5.c6bf290b.js",
    "revision": "071353746cbe2b403358734b43dc0348"
  },
  {
    "url": "assets/js/50.f41df9d7.js",
    "revision": "9f9c666dcf1719c85ff191ed86e4c638"
  },
  {
    "url": "assets/js/51.a1cab9ff.js",
    "revision": "c59fdb231f8c86ce73b742cdf90a3f8b"
  },
  {
    "url": "assets/js/52.294c9cc0.js",
    "revision": "6d4eb5a5b39c7b62284924ba92e6a122"
  },
  {
    "url": "assets/js/53.e5f5b1ff.js",
    "revision": "ef451ecf58b201cd0b72468bcfa0b9c4"
  },
  {
    "url": "assets/js/54.730a95f7.js",
    "revision": "0ed5c2dace37ad67035766db3468a3cb"
  },
  {
    "url": "assets/js/55.d992ebca.js",
    "revision": "a524a412075b766c92174eb544890213"
  },
  {
    "url": "assets/js/56.c1c3b638.js",
    "revision": "954c090b50c4bc1f08ca250b926f0eaa"
  },
  {
    "url": "assets/js/57.98639335.js",
    "revision": "c431003d739c6500f8df03c4dfa056e7"
  },
  {
    "url": "assets/js/58.248c255d.js",
    "revision": "b109cacf4682e9aa0d0d632f02a8a2a6"
  },
  {
    "url": "assets/js/59.ed82a708.js",
    "revision": "e75be9da7307e683bfa8533344a356c1"
  },
  {
    "url": "assets/js/6.ae124092.js",
    "revision": "504f963b532dd5a0313e2f55f51d1640"
  },
  {
    "url": "assets/js/60.a3c4a4d0.js",
    "revision": "036c283a9bfa6e22933798bccec77230"
  },
  {
    "url": "assets/js/61.ca2d9985.js",
    "revision": "9221dfcf4f94aa9850e4d6c111dc8e84"
  },
  {
    "url": "assets/js/7.3a54cc00.js",
    "revision": "021321163b26a80e75a1b440906013f7"
  },
  {
    "url": "assets/js/8.c58c271e.js",
    "revision": "38ab7ac575ea122e25680970ac95adb9"
  },
  {
    "url": "assets/js/9.ea123a57.js",
    "revision": "20fa39ef018e7d4bef95b78866c79109"
  },
  {
    "url": "assets/js/app.605987f1.js",
    "revision": "e308b72b9a109aae27c96a7685126067"
  },
  {
    "url": "contact/index.html",
    "revision": "378104f5d7dbc41d4830963ff1af0e1e"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "75874be73e1dd1b39132aa05d76d882f"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "85797f7a012f8c2ce38325151f4e70d0"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "279d2e68f0fe9718c524416208626418"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "6bce7c7cae83b02b23a74a6d14ff3a56"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "5527bd746f2d901bf6765ca5fe11b06a"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "adc6f1172c0424c550f6b22d42b7f135"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "362a598304d8a472850e1d79f7921da1"
  },
  {
    "url": "courses/index.html",
    "revision": "1173e508f87596c92036861a9224fce7"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f831a731ff38dc45f3c22656f143d94d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "886148320e50ea50c11ff4fd197341cc"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "039a5924941da0760861b04a9452bdbd"
  },
  {
    "url": "courses/template/index.html",
    "revision": "c37ecdb602e94d75cc3b29489cf7ad55"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "dd61991975f7ee08c27d1844b7349d73"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "eb2c785822cb03c812a114ddc9ba3a40"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "1152f72ae248f707f823bacf512bbbc9"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "ec1320db0e762afd939430d9fff46073"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "56e83af9c78537cb10ea2c1c6ad575e2"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "bf9748e5d765e7a26f64fab850ca4bc6"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "17916015ce3857a0898aeee7904a8988"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "97f3769013cfc9eaf66599734628248d"
  },
  {
    "url": "general/enroll.html",
    "revision": "e1959597255a7a0d6784113b2aa1c786"
  },
  {
    "url": "index.html",
    "revision": "f386a6050f43367d9aa64874be3f7080"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "b50f5f5dc7a824c74cf9c9d8ee0f9afb"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "5a8a8206d06a428b45de9c861e7b72a1"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "a4cb4f2506e65c42ee45472fc19421ab"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "c4144979c82a5dd74ed06f485529eff7"
  },
  {
    "url": "projectteams/index.html",
    "revision": "d48157545916f64489fd1782215843f2"
  },
  {
    "url": "studyathome/about.html",
    "revision": "a2f1a9952cd850910edc972801ecb163"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "0edb043b1883f2057b0e7e63ef689d0c"
  },
  {
    "url": "studyathome/help.html",
    "revision": "b16e9a3afb3b3a6c8717e915faa44625"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2144792efa7967e4f3e8f408bda026bc"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "20943517cf5a3d68cfa4cc0a92042719"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "f90e9c687ccce965e8b4b1fd9fdae518"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "da67b3ef23a4452038d5c95e36528e56"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "dfa12fff938f94558729370b268ee9f9"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ca9367d2f5d3e65f9e16afbd2d3c4f2f"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "46649e604e04cd8644834a16037bfafc"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "f1a6f6870314d36b26ac912855d0e395"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "567a4a43fc9729312be108bfac54a65d"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "2863112067d5a9c2a88f2bdb57a81363"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "ebd0a07069acf22910a62a722616d69e"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "81706f1500e605672d24de1b8120893d"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "0f82148dcea170580333d9898f49cc3e"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "860a7848865df2f8eef1bf7c5bbb61f1"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "9dfbd67b6edea754fa74bf082ed67e75"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "d580bec184d614256b7f11cdcdc26808"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "f35eee2606b44714d1c1b95a1fed68e5"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "9c74c7c2d8b12e36afd8c50c74948a23"
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
