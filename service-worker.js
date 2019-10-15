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
    "revision": "c5ff51b1a892e53677a90cd07c30a6bb"
  },
  {
    "url": "assets/css/0.styles.97bd34fc.css",
    "revision": "847a167a595d0dac7dc85f28c92e2697"
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
    "url": "assets/img/online-4091231_640.jpg",
    "revision": "dcf9ad1035f008eb5e885d6cbb09454c"
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
    "url": "assets/img/simple-workflow-all.5786ecd5.svg",
    "revision": "5786ecd54b04e678068bdd72d72c5967"
  },
  {
    "url": "assets/js/1.9a287cb1.js",
    "revision": "30fcca0f60ba2aeb61f78f6bdaa6cc7a"
  },
  {
    "url": "assets/js/10.353bb3e0.js",
    "revision": "79947edf072e0cf4f7b9b784c840e29a"
  },
  {
    "url": "assets/js/11.80de16f3.js",
    "revision": "a7f233eea942761c369461e3f5190f04"
  },
  {
    "url": "assets/js/12.d1a0fc70.js",
    "revision": "6614803c2142a92164acba4007e76d2b"
  },
  {
    "url": "assets/js/13.dbffcefa.js",
    "revision": "834e81468b989198bf0879be44bfcaa4"
  },
  {
    "url": "assets/js/14.d9be667b.js",
    "revision": "55284d9c37dacb5879a3551551d981c0"
  },
  {
    "url": "assets/js/15.e05ddcf9.js",
    "revision": "889438581d49fc9c77724afbfc296824"
  },
  {
    "url": "assets/js/16.2f230b01.js",
    "revision": "40a08cbf5c8b0c869e48e8b88320e7aa"
  },
  {
    "url": "assets/js/17.cf0b02d3.js",
    "revision": "d36f198a5f1941b12228daa99375c8d0"
  },
  {
    "url": "assets/js/18.5459fd08.js",
    "revision": "a643f8c51766ba764ec341e51aff6c91"
  },
  {
    "url": "assets/js/19.c3eb83f1.js",
    "revision": "64dbcbdb13297512b960aace888199b2"
  },
  {
    "url": "assets/js/20.f30a33f3.js",
    "revision": "a5cf83d50e514810432ea2c0c21b0473"
  },
  {
    "url": "assets/js/21.d33b5916.js",
    "revision": "5dafffd37f6f44496002146899149be5"
  },
  {
    "url": "assets/js/22.e50a3bba.js",
    "revision": "052ace747229f08f275f64d3c5a2b3b7"
  },
  {
    "url": "assets/js/23.11f3a25b.js",
    "revision": "03494dfd3c169ed171afe2c538fad32e"
  },
  {
    "url": "assets/js/24.57e78cbb.js",
    "revision": "535f6725f4ee743f443eed49de41864d"
  },
  {
    "url": "assets/js/25.524c5c6e.js",
    "revision": "b45e0da2c5f848687940ff56ab2d2430"
  },
  {
    "url": "assets/js/26.0f48665b.js",
    "revision": "9f4fb861d2baf62e3ca189ed99482d27"
  },
  {
    "url": "assets/js/27.dc1bdbe7.js",
    "revision": "49e3429bfa2c179e2786eec7a29e4890"
  },
  {
    "url": "assets/js/28.206e8a71.js",
    "revision": "53459d5273004195335fb0e1a2eb4986"
  },
  {
    "url": "assets/js/29.30e592f4.js",
    "revision": "ff5914b961fe70bc51ffb7d37a5ed182"
  },
  {
    "url": "assets/js/3.04b20181.js",
    "revision": "ae7a6fce80113738c3dd388fba588b93"
  },
  {
    "url": "assets/js/30.0bd12592.js",
    "revision": "0750c19ddc22fe1d004b6b395d88b3a8"
  },
  {
    "url": "assets/js/31.a0a54c9a.js",
    "revision": "fa23b600f6626ff0218f928b7920d29a"
  },
  {
    "url": "assets/js/32.66fe8c27.js",
    "revision": "ac9afb871e89748ee6d3a06c59142e6d"
  },
  {
    "url": "assets/js/33.38eafee8.js",
    "revision": "fd1fa9a42aa6d768dff0c5495eb87c85"
  },
  {
    "url": "assets/js/34.0afdde80.js",
    "revision": "bdb07aa66c4b57abdc47c19bc0c29491"
  },
  {
    "url": "assets/js/35.517ce65f.js",
    "revision": "0de2a20659240a8fc2fe2deb5c1c29f7"
  },
  {
    "url": "assets/js/36.a8f597c4.js",
    "revision": "41030afb2e2bb003175de1c44cf8bbd4"
  },
  {
    "url": "assets/js/37.7602f8f4.js",
    "revision": "726f612125079bd293a6f6b371af1b8a"
  },
  {
    "url": "assets/js/38.8aed27a1.js",
    "revision": "55d92772c9ce4109b1921218351dee28"
  },
  {
    "url": "assets/js/39.df90319a.js",
    "revision": "09b458779e83af7c7cc143a420f2a16b"
  },
  {
    "url": "assets/js/4.1cce5995.js",
    "revision": "6a16f16aadea0de5d01b63bd002a0812"
  },
  {
    "url": "assets/js/40.24dead1e.js",
    "revision": "2c30c5f3df7f656d37f4a939f5e58f19"
  },
  {
    "url": "assets/js/41.4e473d33.js",
    "revision": "b48eb55ff9af79de262021bd81ee2d25"
  },
  {
    "url": "assets/js/42.3a1fc4b3.js",
    "revision": "17edc89a7eef059f6f834c0d0253045a"
  },
  {
    "url": "assets/js/43.d0b95cd7.js",
    "revision": "863b65e2e93166616aeb754461bdc14b"
  },
  {
    "url": "assets/js/44.b4a0f8c2.js",
    "revision": "760f4f601629f804c8e65136bfd00cbb"
  },
  {
    "url": "assets/js/45.ad5a35d8.js",
    "revision": "4b43c1328bf3623e0f24cddc36d12eaf"
  },
  {
    "url": "assets/js/46.5c8cb9dc.js",
    "revision": "f1903f22e735587e071187615c8a3415"
  },
  {
    "url": "assets/js/47.0b0d3d05.js",
    "revision": "bd30f618bb0c5d65a5937bc8aa2119a1"
  },
  {
    "url": "assets/js/48.1ad77a24.js",
    "revision": "e462addee174c863bcfa8d73893af0f0"
  },
  {
    "url": "assets/js/49.622c617f.js",
    "revision": "e7e045f3bd2f1fcec6c0c818a6c99e09"
  },
  {
    "url": "assets/js/5.56ac02db.js",
    "revision": "30b1e74e88956514747b8544576fed03"
  },
  {
    "url": "assets/js/50.2a4da46c.js",
    "revision": "bf45de56b844d0d8ebe9933d88133a07"
  },
  {
    "url": "assets/js/6.ccc1a522.js",
    "revision": "d27d169a7773b28b846195c75d4c24bf"
  },
  {
    "url": "assets/js/7.2866669b.js",
    "revision": "52aed80963448d2095b74076c69962f1"
  },
  {
    "url": "assets/js/8.3058b9f7.js",
    "revision": "0cf5d240eb617812d2f65f80cbe6915b"
  },
  {
    "url": "assets/js/9.e6283d0d.js",
    "revision": "28cd140ad99be682d34bc3b3b7ec9a76"
  },
  {
    "url": "assets/js/app.55cdbf80.js",
    "revision": "49a8daecf763078a4dbbf7def8873bef"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "47ed54a3bf935d3783409cc9457888a0"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "769cf8df7197af688dad16ee98fdfab7"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "8394d7b4dff7ec8761b7f6fea55345fe"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8b33cd18eb0837d747b19f1eb27c7c4c"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "557e2d687b5ca18c51a5284d7a0817f3"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "ec18873b89a16c0d690d0a9dd1f7fb3e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "6a66ce5d1f1f93fff9658fe9275d10a5"
  },
  {
    "url": "courses/index.html",
    "revision": "1408cf810bf4a4073b60f4497dabc4a6"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "92e449c92a62ccd15fbd10234cd293f2"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "ad438be03be3627cb834d51560362a36"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "208bb06ef7321378b3127c662a3d2e8e"
  },
  {
    "url": "courses/template/index.html",
    "revision": "c338774f6b7c5d33c41714c9b4b30be0"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d02f1b4ec47f77dd00977db00e4a20ce"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "c283aca3b7a8fca70bd72bda3159ba4d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "2781ae97680349ed9a64f10d73d6361d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "cb8bfde45c46a72c3d2b6b62467f5ea3"
  },
  {
    "url": "general/enroll.html",
    "revision": "d992b179034106ce9ef952d547d63014"
  },
  {
    "url": "index.html",
    "revision": "b5c4cc372444d3cf532fbae7f45a5044"
  },
  {
    "url": "studyathome/about.html",
    "revision": "1880b4fe16c1199e38fd64feab9e186a"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "4f0ead9ef21b14f5dc86af99a45d7831"
  },
  {
    "url": "studyathome/help.html",
    "revision": "d5bb3951370f8e04ceed477299406fcc"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "38e410580f029d2db552d0cb714128ec"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "29f72ac55ca054df7465c34e2be2a24c"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "742109d8230e5a7248d0479526aa6dbe"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "1e17568a43d73696ff06957255e2c8b3"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "ba1825be542b2b91389cd17c3527f239"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "aa0e9fbbb39cea61f90be69df2c47590"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "adce9de477868c92bf7075e3bd7623e2"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "965d48164418cf3ff2cab931ba73ee10"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "37d4f0c0d8192cad4764296caf01330f"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "df35022d80cb5b6cc1245ce22442b5cb"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "e138a74cd14344997dfdb774c43ac631"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "1a9e4322ec8cc97b92dbf7e873e68812"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "49336912d4c974c1c76f6a95ee393f53"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "7939ddf3fc5f17b8bdceb491285fa1dc"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "202bcaacdcbd646395b603dd301084db"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "665df85b684f2d6fedaacedb5cabeedf"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "b5525192e320a44c059800f447a7848d"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "6be6a32b6e267d5a46e199fa5351b2af"
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
