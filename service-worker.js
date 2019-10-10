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
    "revision": "a96ef9c78d36b6a88bbfe2f2ba865030"
  },
  {
    "url": "about/index.html",
    "revision": "1cf0bc01ba74d45bef250b5fb08d5cb4"
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
    "url": "assets/js/1.d8ffebd3.js",
    "revision": "3826824dfd2e594ac6665e3ca9938d2c"
  },
  {
    "url": "assets/js/10.dc4878ac.js",
    "revision": "3453a260a66f2f45db8961f4fc13d429"
  },
  {
    "url": "assets/js/11.d157d492.js",
    "revision": "285efbdb2cab02e4faa51c9e57edb42c"
  },
  {
    "url": "assets/js/12.62bc7d5c.js",
    "revision": "0967ccd04508d9dd5f7751bc5c4eb226"
  },
  {
    "url": "assets/js/13.3c7a672d.js",
    "revision": "b44919e626031dec7c26a755e99dc646"
  },
  {
    "url": "assets/js/14.d80248c6.js",
    "revision": "55284d9c37dacb5879a3551551d981c0"
  },
  {
    "url": "assets/js/15.982e67b5.js",
    "revision": "a12b0b9fdd1a897c50688f975a4f002f"
  },
  {
    "url": "assets/js/16.536ac446.js",
    "revision": "ec644611e8aea2e4ef7aaef1e2da4e29"
  },
  {
    "url": "assets/js/17.6146f32c.js",
    "revision": "b0badfce51bfa12d001a8ae1313654a6"
  },
  {
    "url": "assets/js/18.953c721c.js",
    "revision": "725c44b9c9354ca7d434f302ce3885c3"
  },
  {
    "url": "assets/js/19.bc331d1c.js",
    "revision": "70533aa1ede67c4f67407c015c531594"
  },
  {
    "url": "assets/js/20.b4c3cb81.js",
    "revision": "ef80f6d373d1a38dea57fa51823fc620"
  },
  {
    "url": "assets/js/21.3247eb13.js",
    "revision": "772daa04957493e963da75e68253b802"
  },
  {
    "url": "assets/js/22.a6088554.js",
    "revision": "8f5a78e40cd60081b12d659794c344c3"
  },
  {
    "url": "assets/js/23.fd9ad9da.js",
    "revision": "da7823994102277006028b44b848569e"
  },
  {
    "url": "assets/js/24.c234e7bb.js",
    "revision": "9c51a5827cd72c9065c999ec17a873ae"
  },
  {
    "url": "assets/js/25.b6ba3c25.js",
    "revision": "f9c10fb9bd24a9f83028897e70f30e6c"
  },
  {
    "url": "assets/js/26.f3f7eb59.js",
    "revision": "2c189d1e5316f2b6fb65e31bb639826e"
  },
  {
    "url": "assets/js/27.f6a80489.js",
    "revision": "ff4f0fe2fe210798e1f5ff10e4109dff"
  },
  {
    "url": "assets/js/28.03147ebd.js",
    "revision": "7e012353dc91a4304c75b5dbe4e7f398"
  },
  {
    "url": "assets/js/29.9c569b76.js",
    "revision": "c2ac43f25d49de745a9088c6f07d0dca"
  },
  {
    "url": "assets/js/3.7453f3c2.js",
    "revision": "5ed34cdf09aef214f6c7bcdffd462342"
  },
  {
    "url": "assets/js/30.412b0525.js",
    "revision": "6a200af32c4f86df542977223d4fbe55"
  },
  {
    "url": "assets/js/31.749c9727.js",
    "revision": "824e63872ac4ebece86dee871e867e4b"
  },
  {
    "url": "assets/js/32.128b8f7b.js",
    "revision": "802f3997ca0c013d421ba749d3df2f11"
  },
  {
    "url": "assets/js/33.4f424da4.js",
    "revision": "47ae02363590c37daeb7832e84e1ec14"
  },
  {
    "url": "assets/js/34.61d97960.js",
    "revision": "786c07c59a341e92adc82e26749f458d"
  },
  {
    "url": "assets/js/35.75476122.js",
    "revision": "2d75b12129d326bcdab5847bd14dce2a"
  },
  {
    "url": "assets/js/36.52cf3350.js",
    "revision": "7a190e8bd31f34221ea1bacd106b1722"
  },
  {
    "url": "assets/js/37.4560d647.js",
    "revision": "8b9599b62fe7ab645709e8430b60ca14"
  },
  {
    "url": "assets/js/38.b1656ed9.js",
    "revision": "755cab09a6a6c0c59e504fc3aede11aa"
  },
  {
    "url": "assets/js/39.fbd2043b.js",
    "revision": "6e78b70c5db06f04d4faeec27665e3d6"
  },
  {
    "url": "assets/js/4.3ff575e6.js",
    "revision": "82007e71e6f30c3017b23cd712395832"
  },
  {
    "url": "assets/js/40.8a3786a6.js",
    "revision": "f340dac5ea425f7a9fcd7072b03fdf3d"
  },
  {
    "url": "assets/js/41.624d0efd.js",
    "revision": "6c49c32a5b8fcfb919456c15a6340d3b"
  },
  {
    "url": "assets/js/42.757f27bf.js",
    "revision": "abe13c63f8d84264c37f73c7fa91563f"
  },
  {
    "url": "assets/js/43.fb97fde3.js",
    "revision": "d8574cb4e6583264e142c31caaa3907f"
  },
  {
    "url": "assets/js/44.a05fe305.js",
    "revision": "17fe4d175cfbe1034c0e304e30601d55"
  },
  {
    "url": "assets/js/45.91f9ada5.js",
    "revision": "c57127eaaa4e6026324d973c19def138"
  },
  {
    "url": "assets/js/46.8a6f8b83.js",
    "revision": "07d9f6c9e044297f842f704c2949faf3"
  },
  {
    "url": "assets/js/47.41260545.js",
    "revision": "0cfbc699459f7e99dad8eb144f3e720f"
  },
  {
    "url": "assets/js/48.3321ac64.js",
    "revision": "2471b75b79f89f870a33cce69a19f37c"
  },
  {
    "url": "assets/js/49.d4408326.js",
    "revision": "b14810e4a1e38844949e192c79b1758b"
  },
  {
    "url": "assets/js/5.72ff46a9.js",
    "revision": "cb1eed2bc850a35d5bbecf5bc0f4bbe6"
  },
  {
    "url": "assets/js/50.a3ae4865.js",
    "revision": "bc346dc848f0dc624db24771db1f11b0"
  },
  {
    "url": "assets/js/51.72ee294c.js",
    "revision": "c62f0973920514cee3c79d560804a030"
  },
  {
    "url": "assets/js/52.068224e9.js",
    "revision": "a5e21283ff40aad64d7c11eb203bf799"
  },
  {
    "url": "assets/js/53.dc7a5904.js",
    "revision": "54d104085a500b33bdd7f046d8bb92fd"
  },
  {
    "url": "assets/js/54.640bf899.js",
    "revision": "c399c164471f706c97fc4ab3181bcb36"
  },
  {
    "url": "assets/js/55.c16bf137.js",
    "revision": "b5be0d863042626415013238766c5444"
  },
  {
    "url": "assets/js/56.b4d66dad.js",
    "revision": "c5fb60b7970cfee0203644293be1dd73"
  },
  {
    "url": "assets/js/57.97b925d2.js",
    "revision": "a3e9fff00b5733b2088f09e35b67c51f"
  },
  {
    "url": "assets/js/6.dcbdb8c5.js",
    "revision": "f17335489ea2973d388c0acefc3af903"
  },
  {
    "url": "assets/js/7.cd4a0b3d.js",
    "revision": "5bec1eb95ab2ee8d1857c4260191c019"
  },
  {
    "url": "assets/js/8.c58c271e.js",
    "revision": "38ab7ac575ea122e25680970ac95adb9"
  },
  {
    "url": "assets/js/9.3d49caec.js",
    "revision": "729f0d595950e19d3a78c3e71891dff7"
  },
  {
    "url": "assets/js/app.30773d8b.js",
    "revision": "3e24ac060f0867431b2a3d7a34645b71"
  },
  {
    "url": "contact/index.html",
    "revision": "b32467b9f8c4b60e484d78aa3f509bb1"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "9d6400c232794811d803e403a78f4ed2"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "95a1f2e241c100ac12674ec34ab9c0c9"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "53f1f65952cee23506831d31fec78b7a"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "c8bece531b03534c33e9981ab0d4c9c3"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "53a3b27183b4f04815484f65ed5661b2"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "1b3b7b65b4e6ac58bd517ef035e232ec"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c9d93f9fcbf841bd18d82e65697a4033"
  },
  {
    "url": "courses/index.html",
    "revision": "b8fc36819e6d97ee704de4c360680871"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "e2eb52601a202c51d7166feb46931ddd"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d911862f1e1b372aab72de22a665dacb"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ce08cce69ae947faa6d9bf00bf660188"
  },
  {
    "url": "courses/template/index.html",
    "revision": "57ae7f476cb8f7dabfbafc0d5eaf17ff"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "1fd5a19dbc91d702f4603ec4e66b322e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "3f75d35eb643def1e52f90b9e5f6d354"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "758cc2dfcde9eee80327b749566911e3"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "e5bb12f315b75317cbe4a0031d8e0e0a"
  },
  {
    "url": "general/enroll.html",
    "revision": "809ee2b6d8b112d231fb6c09dae0df22"
  },
  {
    "url": "index.html",
    "revision": "2596a29537f3620227dd1077d11c85ab"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "71a39db33a3cf9397ab8c66cf910f0b9"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "5711e9f9b911ce1ca604f1e27b1991b8"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "8a50140f950e3e34d0b47cae31ccc638"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "ee804219891f9354fd9dfd3dc97abb9a"
  },
  {
    "url": "projectteams/index.html",
    "revision": "a89a070170532d373d522ad47a25e108"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d2406347553129aadcd701f4a554b136"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "b18c621b089df64d2bdf516c19bd070d"
  },
  {
    "url": "studyathome/help.html",
    "revision": "18615296af06b676cde67ba8d70eb3bc"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "1a907e3054bd0477b0b97beb27e443ba"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a30460b1709167064f01121a542c6d9d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "4f28dec0b250ef2931c4c7c131ddd182"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "cdf605598401805be276f0f0390e285d"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "d5da9fda70704a13277a6bf78855d994"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "4e0c1798001fdd0693596a62a1ccce5d"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "0d1cc820103577f7bbde9f1e89eaacce"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "f71e192235df0573351ee90110d2f584"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "7387827798a9284e2fa10dbc3af6bd98"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "e040f1dfaf1ca5e7850c3464c860b8ed"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "d08e3abc4a6312c8c1d20942f9336331"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "ca8e81d782831362d948ab7923dd3624"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "80814c79c7c04ef6f658f92be9f0a6ba"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "b71f36d9ad8189c3da9952e062a2ed09"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "a1fd17af6bfa0ea50eb66e9376f879c2"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "4a82ac0ea2367934c91cd15560712e5d"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "72dc7e104f352911f5434aaf583a35f4"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "188a43c07571b78edda2488bf4246110"
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
