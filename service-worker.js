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
    "revision": "647b761fc8302765410061d947f2ea39"
  },
  {
    "url": "about/index.html",
    "revision": "2bbe1cbf7a37e489b71cf370cbafd2ff"
  },
  {
    "url": "assets/css/0.styles.2f715c78.css",
    "revision": "285836b5b2edbab50323d4283e3ab5d5"
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
    "url": "assets/js/1.623710e7.js",
    "revision": "8ff817ca7f89882637f6e1ee1231c1b6"
  },
  {
    "url": "assets/js/10.a51565ce.js",
    "revision": "d1aa4f9597fc2956caa857ab4f441ed4"
  },
  {
    "url": "assets/js/11.385b38f4.js",
    "revision": "302d86e9bd6106ab6711a2a5443acc25"
  },
  {
    "url": "assets/js/12.e36b2557.js",
    "revision": "f49e2857459b0d269b9c965e9d11d0b2"
  },
  {
    "url": "assets/js/13.8c1297cd.js",
    "revision": "adf8b94630fd03d87c6c479e608d455e"
  },
  {
    "url": "assets/js/14.c23892ce.js",
    "revision": "ed16a78b4e146b1f0441208f5b5793f4"
  },
  {
    "url": "assets/js/15.6c49aa04.js",
    "revision": "1c49a1fceeeec4359507cdce78966cb0"
  },
  {
    "url": "assets/js/16.5fdcd69a.js",
    "revision": "5e4d402ff963ec8eb5bac35c7cf879ef"
  },
  {
    "url": "assets/js/17.3015b4be.js",
    "revision": "12c670b7377af0d84a075af11fcffef2"
  },
  {
    "url": "assets/js/18.6283bb46.js",
    "revision": "e1e213a208d3ed5441c5ce4a5f89c6de"
  },
  {
    "url": "assets/js/19.13fd48bb.js",
    "revision": "67aadb18220696364b1d66d613a84bfc"
  },
  {
    "url": "assets/js/20.c22e85b3.js",
    "revision": "2b0cb2863823a1f5f9108937fdd7b725"
  },
  {
    "url": "assets/js/21.b9e6d5ae.js",
    "revision": "df3608fce485a4df238e1bdfe1726a1b"
  },
  {
    "url": "assets/js/22.dda7fbcd.js",
    "revision": "c7b1226c53a8b2586e8d6f05c0dafc88"
  },
  {
    "url": "assets/js/23.34adcd37.js",
    "revision": "265d8b295ff7e327028ee0ee51fd0954"
  },
  {
    "url": "assets/js/24.3270075a.js",
    "revision": "64b7beeceebc0d31ffd531d911e64ac3"
  },
  {
    "url": "assets/js/25.03b0e85f.js",
    "revision": "0466e10e08929ed472ce43a3a59b1af6"
  },
  {
    "url": "assets/js/26.88750c6c.js",
    "revision": "a456f11dc99b161a63f9594bd72ef14b"
  },
  {
    "url": "assets/js/27.70d5dc68.js",
    "revision": "fe6fea52cd198e5b2d0484314902c719"
  },
  {
    "url": "assets/js/28.bee3fc08.js",
    "revision": "5e09fca0413c6c5fde996d1f6931e0cf"
  },
  {
    "url": "assets/js/29.c8db7e49.js",
    "revision": "62438968e7c1d6e533319af1098034f3"
  },
  {
    "url": "assets/js/3.1f31dc9a.js",
    "revision": "930df79117fbb76df1fe8ca1537d491e"
  },
  {
    "url": "assets/js/30.a7fe3c69.js",
    "revision": "5f2c394c484f3a935ac516433f206373"
  },
  {
    "url": "assets/js/31.34020682.js",
    "revision": "79e669bd17e1295f338e44968a85372a"
  },
  {
    "url": "assets/js/32.fab02c40.js",
    "revision": "acf529deee698f77942ec853b4511541"
  },
  {
    "url": "assets/js/33.b29d2af9.js",
    "revision": "a0bedc87a18797f831ffaf75060ea74f"
  },
  {
    "url": "assets/js/34.315ff860.js",
    "revision": "0b50ee56b066f0e4d82c9d4821b1c4eb"
  },
  {
    "url": "assets/js/35.4942e5ed.js",
    "revision": "97cf6d2321939957a6ebdc08305d510e"
  },
  {
    "url": "assets/js/36.9ae0c27d.js",
    "revision": "a5fe94d7f2d7c11417e1ae992352e6b4"
  },
  {
    "url": "assets/js/37.aa302dd1.js",
    "revision": "4e860b1815ca536e819b6534b1bc33b1"
  },
  {
    "url": "assets/js/38.e5ab2ae0.js",
    "revision": "a093a54f3c449af66c4878a87f58c1d1"
  },
  {
    "url": "assets/js/39.e96015c5.js",
    "revision": "cb7d01031cc61d3ba19abf1ff925e114"
  },
  {
    "url": "assets/js/4.05e451a9.js",
    "revision": "18c5cf8102190de7eb777787d7610948"
  },
  {
    "url": "assets/js/40.cff198ed.js",
    "revision": "277c0e2fb5404916fe8a2c1e2a0d44a7"
  },
  {
    "url": "assets/js/41.6ed33b4b.js",
    "revision": "e582dba57647ac216047a261c9645373"
  },
  {
    "url": "assets/js/42.a700c7e1.js",
    "revision": "a1d9798c08b3b96f8e3e53b63ba3db73"
  },
  {
    "url": "assets/js/43.0d5949df.js",
    "revision": "0ccc1250627d5e8d5894c5cc0b0875b5"
  },
  {
    "url": "assets/js/44.24cc96ab.js",
    "revision": "4b06db497a6bfa494c4c40bb688e4d97"
  },
  {
    "url": "assets/js/45.476515d8.js",
    "revision": "02bff14562a525788a78f730123df439"
  },
  {
    "url": "assets/js/46.134eba54.js",
    "revision": "afe04c15359be00b29f4116865ce43cb"
  },
  {
    "url": "assets/js/47.be4197f1.js",
    "revision": "a54608468c775c5d4d3f152a824f44d0"
  },
  {
    "url": "assets/js/48.177de07e.js",
    "revision": "5650cdef9df38520b41e0c40de608253"
  },
  {
    "url": "assets/js/49.ad09035c.js",
    "revision": "1e86fff2c6a4d65e0de06c5c2a1d4c02"
  },
  {
    "url": "assets/js/5.79464cc4.js",
    "revision": "c365ea254013aa13581e54695fb96fe0"
  },
  {
    "url": "assets/js/50.f944a20c.js",
    "revision": "e0614ad8aad3fe79e8a49c1dab187742"
  },
  {
    "url": "assets/js/51.67e2d38a.js",
    "revision": "af228c8f5d0e4864ea82d5fab1dcc2bb"
  },
  {
    "url": "assets/js/52.df561289.js",
    "revision": "56d108ba7e8b897aa41359a69c7e80cf"
  },
  {
    "url": "assets/js/53.a661b56b.js",
    "revision": "bd8ac92a2dd5d6cd053eb24a3676279f"
  },
  {
    "url": "assets/js/54.e703d322.js",
    "revision": "411046231fad388a0a2a40350cfa914e"
  },
  {
    "url": "assets/js/55.9dc73b34.js",
    "revision": "fce1772df4f6f82dfcc22f9889e5580e"
  },
  {
    "url": "assets/js/56.1f7a0124.js",
    "revision": "82608283a7c0493224dbd60f2d2f6a88"
  },
  {
    "url": "assets/js/57.428f8fda.js",
    "revision": "4fbf3e0ef4c4e2c5286b20082fa68295"
  },
  {
    "url": "assets/js/58.b5cd385b.js",
    "revision": "98410f41a59d5b59ace53e30fc08f9f6"
  },
  {
    "url": "assets/js/59.2890388f.js",
    "revision": "644083018fad8976bf7ed3bc88b4db26"
  },
  {
    "url": "assets/js/6.71f8dc86.js",
    "revision": "4984cdb8dc863fdc5e12e8766c46473b"
  },
  {
    "url": "assets/js/60.6cf228d8.js",
    "revision": "63a8a36aa74a98b41f10868b4fd6cc4f"
  },
  {
    "url": "assets/js/61.d4856def.js",
    "revision": "9eeb123eca0e6ab784659660ef6e78c5"
  },
  {
    "url": "assets/js/62.3a98f3b9.js",
    "revision": "44f396be2992b9f1da1b88b48d7d4afe"
  },
  {
    "url": "assets/js/63.ca932c7f.js",
    "revision": "3e6ee6e89956ce52bff202fecf9e3d14"
  },
  {
    "url": "assets/js/64.53036c42.js",
    "revision": "0e0b0876a39b9dfa4585ad510c676fbe"
  },
  {
    "url": "assets/js/7.dd50b185.js",
    "revision": "ef7c9e0f3a6ccbd68240260670843267"
  },
  {
    "url": "assets/js/8.596230bb.js",
    "revision": "ca47697fc95aaf366f3e7d7f9fc2ea2b"
  },
  {
    "url": "assets/js/9.97dc4b57.js",
    "revision": "e2dadb7df38295dcbe3b99e7e1cc2e41"
  },
  {
    "url": "assets/js/app.ed6d0534.js",
    "revision": "15bec8a78ff5bf0cf897ed31d300b5b2"
  },
  {
    "url": "contact/index.html",
    "revision": "bb9e26b1ad889bd0836fb5632ab53cd2"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "c86f7f57c0a1d3c20cf8417b103318ad"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "406168cee27be83bbe7bfe3da2d092b9"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "b04531bf1cf5ea60c75423b000052ca4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "08a36434708582cf93d658f42f356ed5"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "63c444a980d9cb132b932b9da74e264c"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "22de71dc07a150e6056e1f603a29d63b"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "1d31f896c48c61ce02738730e0adacd4"
  },
  {
    "url": "courses/index.html",
    "revision": "9e384cf16975ec9a51fc4f875d618a52"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1572d511daaf75604971e804df6c724c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "cf95b6ec10b72a95524246b003905be1"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "bd1be7ec2ec3ffb4edfd9b29ff59e576"
  },
  {
    "url": "courses/template/index.html",
    "revision": "c8768752cb78ee63b41378496c860a2f"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "5353dff0150465ac6ea61ad84d34e460"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "ea9d41a860efc711209b2fe608aabe13"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "eab2fbc787aac8f50606d7bc4ba29655"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "d5e74ac3bd9ed0cb021c40183db16792"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "29e2464c281e725d6d08e28ed170dc4c"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "00a0b7ca3dbc4d072b87150046bb47a6"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "cfb0ef3bb9ad405917d5b8c0160cab98"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "b74ac281d0524d1a5789d438fe463c93"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "a886531e5dde1344d46a235357d8d6a2"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "85244823f748a482a89e0119fdd4c59c"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "df51dd1dc2b5466cb2641d2d79d4073e"
  },
  {
    "url": "general/enroll.html",
    "revision": "e83c46bf8e74d8ffaae318bb1e26ee10"
  },
  {
    "url": "index.html",
    "revision": "ef260d948e8c533c40278f077e9691da"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "9c7e437ea0036a2fe96836dc5254bded"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "0409bec4f33d66fd5e38090a0b0b65ad"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "98c85d37691c10986f9b16c1a8023e18"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "49c1e036e8ecdc5af499165c0dddef42"
  },
  {
    "url": "projectteams/index.html",
    "revision": "6b3bad6eb54e62ecdd69f02d3e0db5b4"
  },
  {
    "url": "studyathome/about.html",
    "revision": "cfd3ba9fde7048e3658c34d8b3b0857f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "059c7f380eb8e4d0d038b6a40918f039"
  },
  {
    "url": "studyathome/help.html",
    "revision": "e75e3fb2f8ac03ae8f44d5f93e351990"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2185828a8a7ea5dc1c7ebca2db57a481"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "ce969e4860ee8daf63074e9b9c306d4c"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "1dd355dfcb88924766a1601dbe2115cd"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "a794faf37072e841a8639ddb6c429302"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "8fc70b82e45788b937b4f996559938db"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "49d34720bafa29216167570b61d163f5"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a85c689f8bf0547099249192f5681543"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "ff10ece02ee868cfdc17792463f0ba01"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "eb0158748f9b5733fb52934a3d05d3c0"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "fec2ec7a1e3080d6652c8a532450d525"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "3612183e51fad5d56a75b95e22dafadb"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "441f0ee5bbe3961e498f55d367cd4643"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "cc0c3c6f49172102fbe3267bd195684a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "a3816355a31afc6f32cde021cff7d16d"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "c20051875332e85089eaaeb10412a229"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "a5be7c87caeacd9b4a56ce68c06338d3"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "5ec2190dc2d88af1d2b4a3e2fd4c78ba"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "c23f79539b2c9d09040067a885d1ed78"
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
