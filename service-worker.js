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
    "revision": "c0f5b6aad92e180a97999ab747eeb39d"
  },
  {
    "url": "about/index.html",
    "revision": "3e2fc5d13085d896a165c246ae828681"
  },
  {
    "url": "assets/css/0.styles.8c7c7cbb.css",
    "revision": "2a8307eff9c77099140a9d02b428eb31"
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
    "url": "assets/js/1.e281c407.js",
    "revision": "6c44e1701504a2571d183497ddae5601"
  },
  {
    "url": "assets/js/10.cd5f16a8.js",
    "revision": "f2aeca8740a0a9fa3e9805181f179e3c"
  },
  {
    "url": "assets/js/11.c7a1ae07.js",
    "revision": "06070bc7498afbdb9bf83fec88676a9e"
  },
  {
    "url": "assets/js/12.4ad459b4.js",
    "revision": "31d8effde070e15f6d1701ee6fac2b1d"
  },
  {
    "url": "assets/js/13.e7deb136.js",
    "revision": "836310e521f5c82cf233fce54e007a2b"
  },
  {
    "url": "assets/js/14.0c221859.js",
    "revision": "ea86b49a87e63d1abe3379587f67b1d8"
  },
  {
    "url": "assets/js/15.d0876314.js",
    "revision": "b5488124e10a4a0e7612d1d439817aa6"
  },
  {
    "url": "assets/js/16.f178ec1f.js",
    "revision": "781cc6c65080f6b6ab3fff1d45433f61"
  },
  {
    "url": "assets/js/17.c37e1b05.js",
    "revision": "d13fbd7e66c47ee411e24289dfeb3142"
  },
  {
    "url": "assets/js/18.da969c1a.js",
    "revision": "8a97e7f96af98bda48a1df3a79119240"
  },
  {
    "url": "assets/js/19.bd046570.js",
    "revision": "98320b2afa5e045cf98405ace4418ce5"
  },
  {
    "url": "assets/js/20.1010e529.js",
    "revision": "cd7c91579a19b4b9e5ef933644a0ae5d"
  },
  {
    "url": "assets/js/21.8e59c74b.js",
    "revision": "dce21acc669221b131440fef8aeb065d"
  },
  {
    "url": "assets/js/22.503d937d.js",
    "revision": "637ece9f1fce03daa532a871338141a7"
  },
  {
    "url": "assets/js/23.159cafe1.js",
    "revision": "392c3c5c90476ab1524201ca011ef2c4"
  },
  {
    "url": "assets/js/24.dc964708.js",
    "revision": "2fa1787cbdf647f8a6dfaa69df95aa0d"
  },
  {
    "url": "assets/js/25.add5eb02.js",
    "revision": "871ebfd4f5518fe05a25e82097f3b668"
  },
  {
    "url": "assets/js/26.cf101011.js",
    "revision": "961b2748861511f6ebfd075f1cff332b"
  },
  {
    "url": "assets/js/27.c1f3ff6a.js",
    "revision": "1bc817757d792f44e8280508d86885c0"
  },
  {
    "url": "assets/js/28.5a5cdfda.js",
    "revision": "5b06b5582561a277717fa584483b0481"
  },
  {
    "url": "assets/js/29.268b7cba.js",
    "revision": "b0c650ec982234d4d2b4b525df31fb0f"
  },
  {
    "url": "assets/js/3.d3a3750d.js",
    "revision": "90e3d6312ddc3d495903db5219122f08"
  },
  {
    "url": "assets/js/30.de90fd9b.js",
    "revision": "5b1694cd159e5e029fe2d3a765e04478"
  },
  {
    "url": "assets/js/31.91a036e3.js",
    "revision": "b52b8bda7a857754d48006bd58d7330f"
  },
  {
    "url": "assets/js/32.fcb642f6.js",
    "revision": "fad2166ef22a0794f9b76f65b9ef0374"
  },
  {
    "url": "assets/js/33.a4982334.js",
    "revision": "3e11c15d34d2426d2522ad9fd93060b3"
  },
  {
    "url": "assets/js/34.d5dbf22c.js",
    "revision": "4fd2fc7c2fa20b3d8dea442c062e2c1e"
  },
  {
    "url": "assets/js/35.e20f8b89.js",
    "revision": "05b554a1994c838c47675d0b6f19d47f"
  },
  {
    "url": "assets/js/36.4bc27ab0.js",
    "revision": "72ff7ad93a24c6c5bf16c5071d33cc17"
  },
  {
    "url": "assets/js/37.18ed6daf.js",
    "revision": "523d09325fb5ec716d9bb1ebd88648e6"
  },
  {
    "url": "assets/js/38.31cd1189.js",
    "revision": "b6cb5c620144f6dd735d6602c7c9daa6"
  },
  {
    "url": "assets/js/39.beb274a5.js",
    "revision": "68de9d13f4c59e35f47f772ce405a807"
  },
  {
    "url": "assets/js/4.9e28cff8.js",
    "revision": "0087d1aef53a4114f54b344bf52a3579"
  },
  {
    "url": "assets/js/40.5525194b.js",
    "revision": "e7b8809e6e7439087c13c7083fa1a765"
  },
  {
    "url": "assets/js/41.e8783264.js",
    "revision": "7bd93003a038611e455ec8edb573a1c7"
  },
  {
    "url": "assets/js/42.b10ad6f7.js",
    "revision": "0fcdd1cdcbbc5f07c3576a3649f8bc1c"
  },
  {
    "url": "assets/js/43.ba45a7e1.js",
    "revision": "9117b5135a7b159905eaf0708743dd27"
  },
  {
    "url": "assets/js/44.f5786b10.js",
    "revision": "843141321b4b894935a7a27f33b7da00"
  },
  {
    "url": "assets/js/45.d45e4710.js",
    "revision": "63025124a14c6875b2d014b546f9d89c"
  },
  {
    "url": "assets/js/46.a8288ad2.js",
    "revision": "04cbcfb11d4c2f9a85bd90c86d304ceb"
  },
  {
    "url": "assets/js/47.227f8bd2.js",
    "revision": "093651a6e371e800917559fd53949f68"
  },
  {
    "url": "assets/js/48.495a66d3.js",
    "revision": "d5df2e18ac5c7a50cc2da06b78de8ab0"
  },
  {
    "url": "assets/js/49.2f88f897.js",
    "revision": "f490e4ad5f0d498ff3fe727fad809099"
  },
  {
    "url": "assets/js/5.ed8e3252.js",
    "revision": "eafe23fe4154a66c4e5785c7ea944c82"
  },
  {
    "url": "assets/js/50.2a475558.js",
    "revision": "6db0a6df9d4e72789602bae87f5e181f"
  },
  {
    "url": "assets/js/51.7b6303ff.js",
    "revision": "31df40c33035e65aebc857f42353e25c"
  },
  {
    "url": "assets/js/52.00b3c7fb.js",
    "revision": "614f74eff6d7c1b8ad3448462f842bc3"
  },
  {
    "url": "assets/js/53.6c8e8674.js",
    "revision": "517fc094336fb87415a3bdc8bcba24ea"
  },
  {
    "url": "assets/js/54.da542e12.js",
    "revision": "120c27b994e2eb557655e4701ec65bba"
  },
  {
    "url": "assets/js/55.d1bb6f98.js",
    "revision": "4faed09e78850737643398cf3659e2ad"
  },
  {
    "url": "assets/js/56.6f29acce.js",
    "revision": "ee7f230af7ae507c429531cb7b047d69"
  },
  {
    "url": "assets/js/57.07649a83.js",
    "revision": "9c6e337d1c5420c2d36bf8673b5587bb"
  },
  {
    "url": "assets/js/58.305b656e.js",
    "revision": "08e54fa33db841d07fe28a3c6ce30ba6"
  },
  {
    "url": "assets/js/59.d0cddcda.js",
    "revision": "2bca01c9c6f53a455f1cb9406858e689"
  },
  {
    "url": "assets/js/6.186530c7.js",
    "revision": "3b2bcdd03da693fcfd260f766996c336"
  },
  {
    "url": "assets/js/60.05820e8e.js",
    "revision": "619941b07cdfdec860eb8ec314151f53"
  },
  {
    "url": "assets/js/61.2f72eebe.js",
    "revision": "48fdf189bfa38f536bf15daa25ad1b85"
  },
  {
    "url": "assets/js/62.5c9a1366.js",
    "revision": "7baea9777550168c6b61b65e7d7aec93"
  },
  {
    "url": "assets/js/63.71a98ab2.js",
    "revision": "133e74261cb450c517a8cb381437c614"
  },
  {
    "url": "assets/js/64.eee60136.js",
    "revision": "53baad1961f92b667f934f22656bb5d6"
  },
  {
    "url": "assets/js/65.fa8e9d0f.js",
    "revision": "1629beba24e4cc0ba8d813b59a287012"
  },
  {
    "url": "assets/js/66.692b1754.js",
    "revision": "18991f9179eadbf8384b7914ca166b2f"
  },
  {
    "url": "assets/js/67.202807b1.js",
    "revision": "62aea68a347d70d605dbf366ccef8bdd"
  },
  {
    "url": "assets/js/68.83afe565.js",
    "revision": "0e83ea81c9657b7b6bb79975afcad304"
  },
  {
    "url": "assets/js/69.0f2fd1ed.js",
    "revision": "b3711d1a46672f7d3aabb672d8cdcefd"
  },
  {
    "url": "assets/js/7.e7814182.js",
    "revision": "314e881cde319b9881197d1e7395a8cf"
  },
  {
    "url": "assets/js/70.3e402d6d.js",
    "revision": "ce5874c4048679b0a57d6030e940aac5"
  },
  {
    "url": "assets/js/71.c0174bee.js",
    "revision": "dc9991d400e1d3c7c6c946b4c852660e"
  },
  {
    "url": "assets/js/72.b4e6d773.js",
    "revision": "bd37cd687c5e04ac33dd17de762c2e80"
  },
  {
    "url": "assets/js/73.e2ccd8c8.js",
    "revision": "8a268a2d16c8d71ff3e9218faf6340e8"
  },
  {
    "url": "assets/js/74.3c3db038.js",
    "revision": "fc4a25d3400d1897dfcb50277205986e"
  },
  {
    "url": "assets/js/75.5ed0e802.js",
    "revision": "aa9e8d1cff756b382898128103c300a6"
  },
  {
    "url": "assets/js/76.25524fd1.js",
    "revision": "f53450e0a55db66369fc46bd06e31f0e"
  },
  {
    "url": "assets/js/77.30a6982e.js",
    "revision": "c9e04ac8e9c4546e66c1fb24085c60be"
  },
  {
    "url": "assets/js/8.877aeb78.js",
    "revision": "bf140f8bd867ba5f52a3dffe1cbb70fb"
  },
  {
    "url": "assets/js/9.c2cde35a.js",
    "revision": "6c60353c833fbc8be632220fae6f2262"
  },
  {
    "url": "assets/js/app.e4409e2a.js",
    "revision": "7cbfb759b8e7d90fc1b4b4159ec721c0"
  },
  {
    "url": "contact/index.html",
    "revision": "69e685b5005ca0f2ec5329bf52e1c1d2"
  },
  {
    "url": "courses/artificial-intelligence/enroll.html",
    "revision": "650bd66998f638e736d482fb80542a92"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "f8bfe90ec700acdf18265f1945fd4523"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "373e0f72fc6e034c239b3813980f2ad3"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "0efce383da8c55b7c7b6cfdc60b13651"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "6a7a492215c14fe8a4333f7e107c8b83"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "9acec8f422ef3a86417837562f1d52f9"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "78669de43ab3670b90f9ad3555fde5a2"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "eb6a35475f192294a54c189810df7f99"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "f562c7f846a10e24dd011f71ae38ecde"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "07b6ffb39120f5478d51910defa327cc"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "a014b8f1212ce4807bc4b35918138b5a"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5205a7f2f2ed951aa8e91ff730f1b36a"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "15742d9784ef7c633664679fd1847233"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "530a85ee83859a5eca116f3b47613d15"
  },
  {
    "url": "courses/index.html",
    "revision": "889169d5108cf10659fcc4797ad0b4b4"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "2a1f52920d13a2c8e9f98f2d1e5b0a31"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "48b5b8e0bef273b6710b5ec3177e3f4f"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "350836b542d195879a175f43d31e70c6"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "1ebed5cde6d8206478f707bc567da163"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "578301afe63c65c38ef4cf815c95abd4"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "23b579f333069523d04efe197d5c8394"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "aeedddc8ee1221753c94ca74f6fdac53"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8456c976a712c788eba0962cca507c3c"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "942fefc2a37ecac48e072946ea45ceee"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "fe06961608980b39fe74631312f49f22"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "a2ba5f1224ea2f9b2079d41ac91a5ea8"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "bc34a2e4bfa800c40b93a057a3183f6b"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "1b90575cec8c03db243adb1f5ec087cf"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "7139af616c5768164972240c3d9c8855"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "5c617ca6f87e8d27bf078446b043125f"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "913f0bc67fba0acbf7e9357477e98c49"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "250d525f3b3b899b0d4b362f0f93b4ea"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "6ea7c474d9959396e142116ecb60e3d5"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "35b9ce24307bfdec4b725b1bc29deed1"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "100f83ff7dd08acb60e115aa211c4299"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "0924a866d88810cda3dc795de7032b40"
  },
  {
    "url": "general/enroll.html",
    "revision": "e2cef75b1bd7403d7d7c4a276cfdcdd5"
  },
  {
    "url": "index.html",
    "revision": "d9c84189e24e62b5c36bafba32549493"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "64e5087c16d78f17ee5519fe76759095"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "355dc6569c9f9f96f641911bebbc7dae"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "d9cc6efcf5bf84ee29627910c68756b2"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "dd408009ba217bceb34d7618466adbc5"
  },
  {
    "url": "projectteams/index.html",
    "revision": "b3b3fc8f041d124094268f20ba8dccb5"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f70b6630dbad39996fb699d7d2ad68bb"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "fc1f9faa060b58c0ba220cf38667267c"
  },
  {
    "url": "studyathome/help.html",
    "revision": "6dfd1b6d5fb382fbeaa750517677a188"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "81fbbe3cf4f91fb61c5828e9a2075c3d"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "e251b19f74c50572d4df5eb4e42a7eac"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "720e71adebfe43422260c379a66aaf81"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "3a1b481d7507382df791b6328afe263c"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "9e5de0f039982ceb38d14e91439f2514"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "9bbc61162faf5e8e75335b8781bc8dc3"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "7ec7b6f21313f6f97df82aaa8731d25f"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "d9e9069393ff079a8d15ebabec8a568d"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "0a140cd20e83055e84f544f862b5d9f2"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "cdfa859507de15d8799b5c1a6d5a352c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "996174e4926a0819370d4fde7bb6c61e"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "26353d4d24b3774924884829708ede74"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "e80c97ac253fc1b33de880354fa32c42"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "6782d1bb1998aaca9debe2d985d758b3"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "7ac283c56d41fd19299075047eef6c26"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "b7637ef5ebc8b651664433cf2a8e24fa"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "d049f892ef4e5f9781722a326f4b7188"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "7270aa463d9223f2fabcd21b4a151212"
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
