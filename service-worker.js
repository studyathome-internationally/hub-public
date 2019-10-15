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
    "revision": "34795c25eef4b21122f79944c0da212c"
  },
  {
    "url": "assets/css/0.styles.916d0d70.css",
    "revision": "8abf0753b8eb2231ff6bc447a276fd3a"
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
    "url": "assets/img/logos/studyathome-noir-circular.svg",
    "revision": "6892f6e0f75fecfd78404879bfdc639c"
  },
  {
    "url": "assets/img/logos/studyathome-noir.svg",
    "revision": "0747fffa96b77aca8bbd318ee6957060"
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
    "url": "assets/js/1.14e3a583.js",
    "revision": "1f9b673e15633a4d22d6c4108dea4f20"
  },
  {
    "url": "assets/js/10.8b8d6363.js",
    "revision": "b70e85b730a4071a895cdabb43f97a53"
  },
  {
    "url": "assets/js/11.c2badba4.js",
    "revision": "46e9860a7652437e5f0f715bd88fe6e7"
  },
  {
    "url": "assets/js/12.b578d2e2.js",
    "revision": "845680f749aa43e63ddc8d17dfecbe48"
  },
  {
    "url": "assets/js/13.36f81505.js",
    "revision": "0d336258612bab45bc0ef0230ae9d129"
  },
  {
    "url": "assets/js/14.d12b9712.js",
    "revision": "f327187513e263f586a9747fd96db67b"
  },
  {
    "url": "assets/js/15.65a1695e.js",
    "revision": "889438581d49fc9c77724afbfc296824"
  },
  {
    "url": "assets/js/16.cc64f6e0.js",
    "revision": "40a08cbf5c8b0c869e48e8b88320e7aa"
  },
  {
    "url": "assets/js/17.00eeeb71.js",
    "revision": "15c9b15a9f7a367b5f7749b4954cb7ef"
  },
  {
    "url": "assets/js/18.ebac4387.js",
    "revision": "a643f8c51766ba764ec341e51aff6c91"
  },
  {
    "url": "assets/js/19.5f590c08.js",
    "revision": "64dbcbdb13297512b960aace888199b2"
  },
  {
    "url": "assets/js/20.39cffe74.js",
    "revision": "04e54f823980873b7cb5d201405b13c6"
  },
  {
    "url": "assets/js/21.598fb722.js",
    "revision": "56e82858ad356af662891cdefe960510"
  },
  {
    "url": "assets/js/22.c48af08a.js",
    "revision": "7bfdf1101a9ca87fd21677c5d0f1bdc8"
  },
  {
    "url": "assets/js/23.8ab14c6c.js",
    "revision": "e595232133cf9525ae109e95df768a67"
  },
  {
    "url": "assets/js/24.671450db.js",
    "revision": "3c3920a1f49567212f18f99360e17938"
  },
  {
    "url": "assets/js/25.abffd322.js",
    "revision": "782aed13984a8b9d2822ea4a21e48190"
  },
  {
    "url": "assets/js/26.f7f1aa8d.js",
    "revision": "9f4fb861d2baf62e3ca189ed99482d27"
  },
  {
    "url": "assets/js/27.0aed1cc9.js",
    "revision": "49e3429bfa2c179e2786eec7a29e4890"
  },
  {
    "url": "assets/js/28.97d3ff37.js",
    "revision": "53459d5273004195335fb0e1a2eb4986"
  },
  {
    "url": "assets/js/29.8e491eec.js",
    "revision": "ff5914b961fe70bc51ffb7d37a5ed182"
  },
  {
    "url": "assets/js/3.fefc0d79.js",
    "revision": "e369920fc70d9d07e8c2b251389e8909"
  },
  {
    "url": "assets/js/30.79b21e92.js",
    "revision": "21dfb3c5281833f49a3026309b7dcb27"
  },
  {
    "url": "assets/js/31.e7306062.js",
    "revision": "fa23b600f6626ff0218f928b7920d29a"
  },
  {
    "url": "assets/js/32.f9b23ac7.js",
    "revision": "ac9afb871e89748ee6d3a06c59142e6d"
  },
  {
    "url": "assets/js/33.ad56ecc4.js",
    "revision": "fd1fa9a42aa6d768dff0c5495eb87c85"
  },
  {
    "url": "assets/js/34.71309d6c.js",
    "revision": "bdb07aa66c4b57abdc47c19bc0c29491"
  },
  {
    "url": "assets/js/35.336ee8a2.js",
    "revision": "0de2a20659240a8fc2fe2deb5c1c29f7"
  },
  {
    "url": "assets/js/36.3d53f99c.js",
    "revision": "41030afb2e2bb003175de1c44cf8bbd4"
  },
  {
    "url": "assets/js/37.a6e13300.js",
    "revision": "726f612125079bd293a6f6b371af1b8a"
  },
  {
    "url": "assets/js/38.30a08e6f.js",
    "revision": "55d92772c9ce4109b1921218351dee28"
  },
  {
    "url": "assets/js/39.a12d9681.js",
    "revision": "fee4299383d6fe21c737d3295ddbb640"
  },
  {
    "url": "assets/js/4.5a483f6a.js",
    "revision": "909d45980348ea138bb43e21129d0767"
  },
  {
    "url": "assets/js/40.c7647751.js",
    "revision": "2c30c5f3df7f656d37f4a939f5e58f19"
  },
  {
    "url": "assets/js/41.b030274e.js",
    "revision": "b48eb55ff9af79de262021bd81ee2d25"
  },
  {
    "url": "assets/js/42.0110b589.js",
    "revision": "17edc89a7eef059f6f834c0d0253045a"
  },
  {
    "url": "assets/js/43.3d3405ac.js",
    "revision": "863b65e2e93166616aeb754461bdc14b"
  },
  {
    "url": "assets/js/44.17091655.js",
    "revision": "760f4f601629f804c8e65136bfd00cbb"
  },
  {
    "url": "assets/js/45.2c62825e.js",
    "revision": "4b43c1328bf3623e0f24cddc36d12eaf"
  },
  {
    "url": "assets/js/46.1a4cbf95.js",
    "revision": "a78da7f49692b51805cbdd7d7c48744f"
  },
  {
    "url": "assets/js/47.2fa32360.js",
    "revision": "8f8a9db480fa3bb44431462f39c2c3b3"
  },
  {
    "url": "assets/js/48.07797ef1.js",
    "revision": "eed50d15a761282fc3c27e72f161275f"
  },
  {
    "url": "assets/js/49.6c605bfa.js",
    "revision": "c62193c5a5a1c2cefa6f77645282fa7c"
  },
  {
    "url": "assets/js/5.4ccb2a46.js",
    "revision": "e1558788e4e9124d1d6cc5cbf3bce681"
  },
  {
    "url": "assets/js/50.5559ddcd.js",
    "revision": "bf45de56b844d0d8ebe9933d88133a07"
  },
  {
    "url": "assets/js/6.3e2f1126.js",
    "revision": "47eb7ab227273d4ab39f0fd2193a14c6"
  },
  {
    "url": "assets/js/7.c56637a3.js",
    "revision": "24df98c6a9d82e488a3fc52867d4d7da"
  },
  {
    "url": "assets/js/8.2b3dcb92.js",
    "revision": "0cf5d240eb617812d2f65f80cbe6915b"
  },
  {
    "url": "assets/js/9.1b4608a7.js",
    "revision": "de9e9b0e393973e7d3a76824b4f17c0f"
  },
  {
    "url": "assets/js/app.931b12fb.js",
    "revision": "6ef06f7f44409ef6ca44eec6111a7aee"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6dc0a802c103a39dc48dd1e67b27eddc"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "bbfb763081725a8c9dd75da7cfd3d207"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "f84cd33ac3d4deab806d53e2e24fb5fe"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e0dbe65bb9653db587a4a6a16c79a801"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "0c90535cfb7ac8b86a11f489c98d2367"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2e5818b2c2d7e708350991ad59d2a568"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e602b72ae44150295d4cd7163cb852d0"
  },
  {
    "url": "courses/index.html",
    "revision": "e1467a6570b1090f0d2b797d69443b19"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1d07178e105d0539b6e99af944bff28b"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "51c56ab926a253caba77b5a5ed3d3157"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d9c917561a0a7acc206e42243c8517f8"
  },
  {
    "url": "courses/template/index.html",
    "revision": "172bbbeaa2207d22490a0b8aeb5b3185"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "94e380a84081f7697d5465bdedba22e7"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "c1ee013ad356c2fe4beb590b6220a42c"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "361b49787b919ff5c88ae0584f062648"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "3a07733f4a35ff1bb7df0b547274dc6b"
  },
  {
    "url": "general/enroll.html",
    "revision": "cf426503ba9657370c57d95b23622050"
  },
  {
    "url": "index.html",
    "revision": "06b6d65b1ea216a11054ecb0b1a1fad4"
  },
  {
    "url": "studyathome/about.html",
    "revision": "3003adb5572d9d2fc2aab75438a81584"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "39b7566bb7ba14b682b1abbd2d5af28b"
  },
  {
    "url": "studyathome/help.html",
    "revision": "f7e566082eb2d8f3a9f9cde16b00e2ee"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "a63a16ab435d49e7c722f15e8f686acb"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "ba20c21e286637a202d4673416926262"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "cb043f5e667dfd655a5fd4a368897476"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "c0efc837b9e5ed8807f1adb72c16f942"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "9796991bb98d86e2bbe8c188184cb2f5"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "baa35ec7a7a9359acb1cb8e4f58aebf6"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "4d1330166ded4fab6f1f472e6ade7366"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "bc64f6b52202e611f00c2d25fbf8768b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "794899a1ad9502a2e92fa8c30e9dc4ef"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d5b698fa39391190cc6c53938abc284b"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "6158b767b039c6b9707350893d6a80dc"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "cb4ef88a0b0cf1ebe61c80e7946df0f3"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "01f074ee7a66154eec1bcba19f0078f2"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "6f74d4546e484baf16a39ca2fa00434f"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "2cdc9238505de3070f0888a55b914f54"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "63830925ae5f4103ebd6a55b077876f6"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "a6eadcba60c243e07268b6033925bad8"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "2fc528ce205c93963de43bbc21e97a3f"
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
