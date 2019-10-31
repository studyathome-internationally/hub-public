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
    "revision": "5331ceff5ef66678932a67f2143235a2"
  },
  {
    "url": "assets/css/0.styles.b27dcf2f.css",
    "revision": "ee1918c9e309f9c54595ea0ccad44f19"
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
    "url": "assets/js/1.e58f496b.js",
    "revision": "939cbe1c54d4b76bb89245b95d369f6f"
  },
  {
    "url": "assets/js/10.adbc7232.js",
    "revision": "ca62b9c6ef9eb595cb62241330513121"
  },
  {
    "url": "assets/js/11.b8f9be4b.js",
    "revision": "2292b56401cbeaac4892dffa706df667"
  },
  {
    "url": "assets/js/12.ebd8e417.js",
    "revision": "0719dab4b3fe0f2dc3f447507b097cd3"
  },
  {
    "url": "assets/js/13.c11ea05f.js",
    "revision": "1e7294226d70ae46072e304ca69a2273"
  },
  {
    "url": "assets/js/14.45b9c873.js",
    "revision": "4074fa9de563984a2982793aafcddd5d"
  },
  {
    "url": "assets/js/15.0f1c97cb.js",
    "revision": "1ab0ce871e952f895eb95ec6f353f7dd"
  },
  {
    "url": "assets/js/16.647136b0.js",
    "revision": "90ea2a2222eaabeb38365809e5533123"
  },
  {
    "url": "assets/js/17.1ff2f73d.js",
    "revision": "9aafd4295355bab65ad42260b83c605d"
  },
  {
    "url": "assets/js/18.36519489.js",
    "revision": "4cb5a1c849cb6985bb0b9070145b6fbd"
  },
  {
    "url": "assets/js/19.9b5cece1.js",
    "revision": "cab090f138ced87d893cb974d7376657"
  },
  {
    "url": "assets/js/20.d33b6af6.js",
    "revision": "4ab7d14d8db28cd30cfc11c73645e442"
  },
  {
    "url": "assets/js/21.db3c7693.js",
    "revision": "c67f3bbbc5bf83ea1359aca97a67a5e4"
  },
  {
    "url": "assets/js/22.3f14b760.js",
    "revision": "dd1c2dd1377f857602acb9173904eddf"
  },
  {
    "url": "assets/js/23.e2a708f1.js",
    "revision": "b9764f93140d345d2ed9f04f52a465b8"
  },
  {
    "url": "assets/js/24.fc9bf20f.js",
    "revision": "e3bc31792ec50a585c19e6564a73110d"
  },
  {
    "url": "assets/js/25.6fc44019.js",
    "revision": "697e17bcbba639d541c5878685b6bb54"
  },
  {
    "url": "assets/js/26.9f38bd9e.js",
    "revision": "013055c0a397c8c7a5a4a12b24549abc"
  },
  {
    "url": "assets/js/27.99c47fb5.js",
    "revision": "0a815ba1c5d35812f4ff2aa2939a898f"
  },
  {
    "url": "assets/js/28.28ad4260.js",
    "revision": "e54c2500ac11f3ced429deff420fc3c6"
  },
  {
    "url": "assets/js/29.cd16ae0d.js",
    "revision": "98f7b5420486b04d621abdb957bb0336"
  },
  {
    "url": "assets/js/3.38555860.js",
    "revision": "bfa71e01595094683e17232ab041a42a"
  },
  {
    "url": "assets/js/30.0ee706bd.js",
    "revision": "301a2a5925953b5868f5c18816c722ec"
  },
  {
    "url": "assets/js/31.61014698.js",
    "revision": "c60d11229ff7cfe0c8712220fe8401c8"
  },
  {
    "url": "assets/js/32.6e119f11.js",
    "revision": "f8c0f3230ff42a0bb43ada5d601b3148"
  },
  {
    "url": "assets/js/33.a2377aa8.js",
    "revision": "f41f3f518477196a2d56e4af5e53321e"
  },
  {
    "url": "assets/js/34.f45e2314.js",
    "revision": "41038070d0aa5e34888093571f3df3f0"
  },
  {
    "url": "assets/js/35.22363e2e.js",
    "revision": "77eb77367c2065b1037051bd45a55fd3"
  },
  {
    "url": "assets/js/36.92fd74ce.js",
    "revision": "6906b29d5f368d5737db7b4323ef62aa"
  },
  {
    "url": "assets/js/37.2e2ac007.js",
    "revision": "776765ce10268a5b65823d4a37f66e1b"
  },
  {
    "url": "assets/js/38.dd195da5.js",
    "revision": "7b829c7591a9827c7db2bc2623de4c2e"
  },
  {
    "url": "assets/js/39.2d8538d8.js",
    "revision": "3f38bb827048a5c6aa235ad9e02958b7"
  },
  {
    "url": "assets/js/4.49c7e61f.js",
    "revision": "59ccb72159ac6c89ab91a4dfe32c7720"
  },
  {
    "url": "assets/js/40.cf081bd4.js",
    "revision": "768aeb518dd99b2e484fac1543818458"
  },
  {
    "url": "assets/js/41.9cd9aff4.js",
    "revision": "f15cfa8d658072b07421695cc5f3ed2b"
  },
  {
    "url": "assets/js/42.37aa8dd9.js",
    "revision": "ae48bd02842ce34eab8941b33b675ebc"
  },
  {
    "url": "assets/js/43.5779f6e4.js",
    "revision": "29d953139e5450d41b2338e71f49f6a5"
  },
  {
    "url": "assets/js/44.299f3bf6.js",
    "revision": "7a94fedec745dcd198b7855b980c0ef6"
  },
  {
    "url": "assets/js/45.1fc7a55a.js",
    "revision": "0ab44f0ff89d5b7d232218f16d9147a8"
  },
  {
    "url": "assets/js/46.9eada98e.js",
    "revision": "4e214669cb6f2f3fcf7f03faea37950e"
  },
  {
    "url": "assets/js/47.4854fd51.js",
    "revision": "82ba2c3c66d660e1a40777d60b45e986"
  },
  {
    "url": "assets/js/48.e7ad5d0d.js",
    "revision": "c4fc09a21ebb337e78fb6e9d599c1f26"
  },
  {
    "url": "assets/js/49.afc31e85.js",
    "revision": "d792bc756e6f9ed4c6dd5309bd729cc1"
  },
  {
    "url": "assets/js/5.07a9d987.js",
    "revision": "008ef3edc87eee298500b5e04eb08183"
  },
  {
    "url": "assets/js/50.5559ddcd.js",
    "revision": "bf45de56b844d0d8ebe9933d88133a07"
  },
  {
    "url": "assets/js/6.bcc78b46.js",
    "revision": "2df50b7de14a52e1882f4b5d6acd4014"
  },
  {
    "url": "assets/js/7.d7dafce3.js",
    "revision": "6e0425da416095a1d8f21af09aacfc9d"
  },
  {
    "url": "assets/js/8.5923660d.js",
    "revision": "36cd28ac1aafde0f2e3187a4a9796eab"
  },
  {
    "url": "assets/js/9.4e4570c1.js",
    "revision": "3537e4a579d5e488fdddccf30407e5ff"
  },
  {
    "url": "assets/js/app.35ba73f8.js",
    "revision": "4a7b8be56421493c6275632889cff5a0"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "fb5a8e6715244816548a732358c4db1d"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "5fe941f9300470b5044ba21d7405aa25"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "cd64247ba8c415040980aa487333dde3"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "34c129beceeacf3f959efe74dacd53d3"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "5e5e4a11c98f7f74d63c7f09390a4d85"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "6c4e4269f6eddd2df0dab045941d609e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "8ecc0ef04dfa7d25bea457b25ea17e7b"
  },
  {
    "url": "courses/index.html",
    "revision": "4e274bdcd5991e0dcef52e1a09b9f294"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f7ad7709d56fc8e641de3d574a1ce53d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a389741d2e2fcb7bb0a3a25df6f9a8d9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "e8ffe474ae814be1c59c524a4397e0f3"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2cdcc200d241cf2c4b64ef4695a3a698"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "0caa2504cc026ce6d8e6e3ab5bdd064c"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "90db4bed5b9341bc766f72f9c5f88f4f"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "f4d8df67aa1d08db82d67ed4f5cb96ec"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "fce839aecf1a1f8583381f3e04d4472c"
  },
  {
    "url": "general/enroll.html",
    "revision": "4b0bbd4e142e220e81cd056585a5fcb5"
  },
  {
    "url": "index.html",
    "revision": "5aeab591abda45ade27bb93e51ba7c35"
  },
  {
    "url": "studyathome/about.html",
    "revision": "32282e38071c1b2c6c8e9468031efc45"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "61c7ca0b185e4bd2820b43c0a1256a3e"
  },
  {
    "url": "studyathome/help.html",
    "revision": "e35fb231a31bbe08cc29cdf9b69be95d"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "0fd0399e40cade9af8ae6294d8927713"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "e3db093d96b87e4bf56294ef8ff2eb10"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "aa791c89630eef368f15f3ef61debf71"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "f81dd9a161cca6c6723fab40353402ff"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "249745dcef131896726ec47e39f0ffb6"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "1bdcaf9e925f4f491e41dfc28d5f90e1"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "d1e76d166914750470a903d3c358504f"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "6db3bfbd64e2f9c752a1c1250b13bf64"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "94fe1faf47e85bd4c69197b130f5ded1"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "172768000289553962ecef57acc1b224"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "75a9989d165b4377249a6bdf65361d6d"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "8362196bedace7e4289d77cdb96dd8c7"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "1e501ac9f62464cd2b7b9c280dc6ae9f"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "5d5262591199ee18e2b5a668f49e3087"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "17e30857ad212599c000e72540cec837"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "549c63accd8ea71d7d7bbb2220ce2401"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "067c5a9ffad398482c8191710985e15a"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "c7372f9e4293d290484822048d67a099"
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
