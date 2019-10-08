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
    "revision": "b9fb75b37764eb8f36e8ca9e56a839db"
  },
  {
    "url": "about/index.html",
    "revision": "f2fe5a5e5da420f383e49b1a22a4d238"
  },
  {
    "url": "assets/css/0.styles.8d281a54.css",
    "revision": "cd6c17a66b24aa3e80db5f329154bf4a"
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
    "url": "assets/js/35.a2c96a0d.js",
    "revision": "ea31c625ff7c1f45a0b1e6c1fe6b04cf"
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
    "url": "assets/js/4.ea8e7f85.js",
    "revision": "1623e74c97da26f1f4128647aac3fe38"
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
    "url": "assets/js/app.7829d443.js",
    "revision": "57d98e98da9732912455c4b924978daf"
  },
  {
    "url": "contact/index.html",
    "revision": "c6a37844c441ffdc9f60df33771a1865"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "c1e6d27ff437a2dd16087603d779d80e"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "1e966dce112fca93b9755a06e5657c6d"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "6ff6cf1993b7971eca7efe20859d6851"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "42b6c71d30dbf641c4234de690d3b4f5"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "b7e14dab4d7a595653feaea27277ab81"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "a8fd527c288db28c46f64095bf76e5ef"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c633d6bac15062b581706689d79e858f"
  },
  {
    "url": "courses/index.html",
    "revision": "dfffdaf799f8f52388fa78a04bae5474"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "de6edbe9a6fbcfe6b81d54a66b585ff2"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "f77a41de80ed61b9a7445d4feb6179c2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "23f6990ca7882c7786c2bc19ed7d1424"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2e7732c46c12b79f52cd69a81c989d05"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "489019c6726863e6137f45fb086afec5"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "7ac6c7331785cee477762ab88258cceb"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "07fc2dcd5ee08312ec13146e81cc2d48"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "8bffe4b36ab2a165fb1bad2257dc0f9d"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "a9ade6563b5c66e34b0dad0b24821536"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "45cb978bc01f7c848a56185daad6e493"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "06975587ed96252cf50eb108ee50e831"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "50e31fafdc5917450c416aec619ae8b9"
  },
  {
    "url": "general/enroll.html",
    "revision": "cea9c0d0bca28400694f1df7ebfbe264"
  },
  {
    "url": "index.html",
    "revision": "288d531d53c8630d170d1e9b1adc68d2"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "3393235004e01e6385c34b55dcb3a30b"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "99184dfae6ea209cd944d83a6479a602"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "486eed07be9602b591ae2bfb671c219e"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "01a1d1ebea77df96f40ded99b63cc2cf"
  },
  {
    "url": "projectteams/index.html",
    "revision": "5465992e0e9c4cc85c6ffad42f9e6230"
  },
  {
    "url": "studyathome/about.html",
    "revision": "29e2bcd6439f845fb5e824364df01a70"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "7d4cc5c5a7c71ff47690c5a5f50f35bd"
  },
  {
    "url": "studyathome/help.html",
    "revision": "93018890ea17f71586888e03496a6dcb"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "7da5f8a25e3280d76c2553c7d702f19a"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "5553a47ff355d3c7d80d02aef0a5c673"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "f34cb306dfa9bb962f7e3222bd6f9228"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "1e77ee00603fddf5561672b1970588a9"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "4830bd8fde34c5bd1fdaa40522e9c154"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "4412d50e1807851f70b31072e4d706ff"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "eb911428db48be580fb8697b648c51b0"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "30ebf650075b1281ea345fa7a080278b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "cf421299283e159580c88b7ceab4dc9b"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "a9c5223b5618488302d493abd752113d"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "82e3a58fff72a5f269c613b1263e294a"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "b1d9da0bcb3ba8874249df8b8c41da57"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "d64306defb45c475f668567fe5a0308f"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "08f8fa29a758b02821ca437d945c505d"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "094071755b3a739993fcb94811de7de4"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "d89cd23c4154b1524e8eaeb202c97846"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "a3f24c81189fe403220743d2cc68f784"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "21703902bff3b54d51d6265b8242b8b7"
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
