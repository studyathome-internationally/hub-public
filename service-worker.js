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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "428ba3f119d83591b08e75a09e7bce75"
  },
  {
    "url": "about/index.html",
    "revision": "2085d525724aae5083181de86d2ff431"
  },
  {
    "url": "assets/css/0.styles.dd08bd3b.css",
    "revision": "fc36fb1a503251ce9bf2d048f19a3a82"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a7aaa925.js",
    "revision": "e6b4a6ca3a7adb97e31c268179bc3c51"
  },
  {
    "url": "assets/js/10.a345da7c.js",
    "revision": "69c012e0288b8efc93fadc29095ee1d6"
  },
  {
    "url": "assets/js/11.0919c16b.js",
    "revision": "8607935b8af6d5d44444b84bbb6d5c7f"
  },
  {
    "url": "assets/js/12.6810b0ae.js",
    "revision": "0c3b224b70eee0cf995b74f709b94793"
  },
  {
    "url": "assets/js/13.a5263ded.js",
    "revision": "e7eea9f84dad998a35cdfae9803ec6d8"
  },
  {
    "url": "assets/js/14.e4dbc7e7.js",
    "revision": "61103c96ce119c4af0d2af66d24291ee"
  },
  {
    "url": "assets/js/15.bf322f40.js",
    "revision": "7abe4c3ef580f6297c5f89a142024217"
  },
  {
    "url": "assets/js/16.bde6e5fb.js",
    "revision": "b6342e4838844d71a8df3a27155b86d2"
  },
  {
    "url": "assets/js/17.5f149447.js",
    "revision": "36662708a7ab792a614208d5ab12e867"
  },
  {
    "url": "assets/js/18.27d1bde9.js",
    "revision": "b27a184dd36033a2005726e84b7e573c"
  },
  {
    "url": "assets/js/19.757ff8e7.js",
    "revision": "2785fb789abf2748a99ba6fdea422da7"
  },
  {
    "url": "assets/js/20.0cb299b8.js",
    "revision": "8a08fc2bcb0cc31e9a27d851254324c4"
  },
  {
    "url": "assets/js/21.6231bc15.js",
    "revision": "7c91eb8a9c741e9800b2433dff9a764e"
  },
  {
    "url": "assets/js/22.b03b2f20.js",
    "revision": "b1dea595905be279854366fcbfb87f87"
  },
  {
    "url": "assets/js/23.9301c6d5.js",
    "revision": "d68ce6f17a333ce7e21695f006931840"
  },
  {
    "url": "assets/js/24.4d4182fd.js",
    "revision": "d8b92c602ac4eac0b8158497ef9e7d11"
  },
  {
    "url": "assets/js/25.5e5bb02f.js",
    "revision": "94d3dc6def2ba05eeba0dc0568903773"
  },
  {
    "url": "assets/js/26.7c389939.js",
    "revision": "5641b1b65991420391bac231ea7915f0"
  },
  {
    "url": "assets/js/27.911de51b.js",
    "revision": "7d3e1a173462fd54ea23b582a9db3e1a"
  },
  {
    "url": "assets/js/28.d37c39e1.js",
    "revision": "b0f2e3113f1b2e81f32a6452f880af0c"
  },
  {
    "url": "assets/js/29.7166e59a.js",
    "revision": "99995926d93a4f4f0eca86abea008ebb"
  },
  {
    "url": "assets/js/3.9d5cc604.js",
    "revision": "edb574e6f5a9a8ee794512e53c6b9e11"
  },
  {
    "url": "assets/js/30.f71ef147.js",
    "revision": "c5253f971a7471a36f368e641c3e969a"
  },
  {
    "url": "assets/js/31.a0225b96.js",
    "revision": "0c5f93e8fc15a257ff6c8fe4d0f7e97e"
  },
  {
    "url": "assets/js/32.2ae303d8.js",
    "revision": "a065f4913905877950b7b2564f60074b"
  },
  {
    "url": "assets/js/33.5df6f083.js",
    "revision": "5a0b1be79d8528dc9c2622d2a0012335"
  },
  {
    "url": "assets/js/34.dc668401.js",
    "revision": "8b5ceb5c5f545847c3044e127962f5a2"
  },
  {
    "url": "assets/js/35.b7650864.js",
    "revision": "96d6e3f0fd279a03c96396a719c58956"
  },
  {
    "url": "assets/js/36.2acc76d7.js",
    "revision": "37d865e610e1c047ec99dd1d0dc3da91"
  },
  {
    "url": "assets/js/37.32e71c4e.js",
    "revision": "c92ace7ad92a458975dc62131e23b240"
  },
  {
    "url": "assets/js/38.16aa6e99.js",
    "revision": "e818572e52c24edba135caa3c2801c70"
  },
  {
    "url": "assets/js/39.fd4fc71a.js",
    "revision": "4de901378b66be264abb4f24fc60055a"
  },
  {
    "url": "assets/js/4.37cc9e41.js",
    "revision": "22e2c50d26186ec3eb3bfaa771af1e91"
  },
  {
    "url": "assets/js/40.9c366ac0.js",
    "revision": "488b46e21fe7c4a0e85c7e5c233b57fc"
  },
  {
    "url": "assets/js/41.b644a77a.js",
    "revision": "23a74b4b9d3c9eaa233062beca79bfc7"
  },
  {
    "url": "assets/js/42.7f3a4417.js",
    "revision": "fb5facf0b1e008604a172dbd1c6770fc"
  },
  {
    "url": "assets/js/43.67409767.js",
    "revision": "2569a97598bce71217c57abfa1968dab"
  },
  {
    "url": "assets/js/44.26cb3b9c.js",
    "revision": "99fb732aae3a66dc7dfd38d972b9387a"
  },
  {
    "url": "assets/js/45.cf185da6.js",
    "revision": "7ee18663a1c4a379899ddefd11e6efd9"
  },
  {
    "url": "assets/js/46.04201a0f.js",
    "revision": "4183c89c22d1fb66ca94e0cb6f628962"
  },
  {
    "url": "assets/js/47.1ca1acf7.js",
    "revision": "4769d1b038a697576a1c46634f9a2d88"
  },
  {
    "url": "assets/js/48.5f561d65.js",
    "revision": "d6a28c3026c773887dd4fa37be1f5829"
  },
  {
    "url": "assets/js/49.4af55c65.js",
    "revision": "50711569aed3be273d1a8a94d78d30b4"
  },
  {
    "url": "assets/js/5.9e086768.js",
    "revision": "a6328a847097b06b3bccaa29d2252bb4"
  },
  {
    "url": "assets/js/50.cdfe1a8a.js",
    "revision": "170da1e5dabee2e0cde8f934415b6fb8"
  },
  {
    "url": "assets/js/51.b50467bd.js",
    "revision": "db3629804bc239184951d934c920687e"
  },
  {
    "url": "assets/js/52.5cd806d2.js",
    "revision": "1b0a96a398e848b4081f481d821af70b"
  },
  {
    "url": "assets/js/53.7d9e4488.js",
    "revision": "316defcd2779bb928e0ec8f9f3424931"
  },
  {
    "url": "assets/js/54.5763b99d.js",
    "revision": "9c60bbf4a36084eb0ce15eaff2663982"
  },
  {
    "url": "assets/js/6.4b6876ee.js",
    "revision": "518717e1009c751de4e126c182b7982e"
  },
  {
    "url": "assets/js/7.50d2f81f.js",
    "revision": "8c427cf6b2bee25c45fa9d763ad4d3da"
  },
  {
    "url": "assets/js/8.66e79213.js",
    "revision": "ca257841645962567780ddca33aec72b"
  },
  {
    "url": "assets/js/9.522329f2.js",
    "revision": "c81ac6099571b62d056f6f8aff249853"
  },
  {
    "url": "assets/js/app.8ad064ea.js",
    "revision": "78482b86f9bcaf13b3e4c100c8fba914"
  },
  {
    "url": "contact/index.html",
    "revision": "cc59d0c0ef89348e20fdfc44d9df6b2a"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "89f7ec8959f88b7e01b95a79d542cac8"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "9ab1e68fe8bb78e0164d6287e81c37fc"
  },
  {
    "url": "courses/index.html",
    "revision": "98ef9bfc99bdf9dae3a793f5c34ef967"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "c67f87265f48f0fa7cd5a3a39a97286f"
  },
  {
    "url": "courses/template/index.html",
    "revision": "3bb74d32270b61ca52a6be15b6f1f7fe"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "d7c154cbb7e882e46636b55db77a7d7c"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e9f7bef61ae6af5faaab49e43bfc4880"
  },
  {
    "url": "general/enroll.html",
    "revision": "a76df40aa2e353d3cd9080b6e317a07b"
  },
  {
    "url": "index.html",
    "revision": "c878e521d518b264c302b81cd24b81a1"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "efe60ad19c2131c0b29b7bfe2b1fbb40"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "8977746d7fd50e85244906896a23e96b"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "2acf3edc936e804bd065599324454662"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "ea2cc96d9ec324d474f13cb7ef2da66b"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "66c10dff18c3a7dd429f25ceca978320"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "64767d778eda91522ec6e6900e190337"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "64a6121010dd8014e2cd947f3ab70731"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "750ebb922994805fb136f3ce6028e854"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "6d2a90275dab512a7284a911b53f5caa"
  },
  {
    "url": "more/general/about.html",
    "revision": "49f3ac2aaf6b557ce2a46653e1cbbdfd"
  },
  {
    "url": "more/general/help.html",
    "revision": "1b46ee34ccb6e6731e9fa90decc17423"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "ae11ce530e66168af2748ede78e04a1d"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "ceae14ed80ed782f7dc55c0261db9655"
  },
  {
    "url": "more/general/terms.html",
    "revision": "217933f42165f3ffdbdd56f72e5fec06"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "ffeeef795262d14c3648cfa4f2ec6b07"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "427a9d790efd9a5f07a278b8647d5d64"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "c7eff4ac15dae93bef877eb495f9e2f9"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "285b99f5a023278dc4f591c77e0a96a2"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "adea62437e2fd12af9bc81bcb6bb710c"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "cdf7e3b50b0f9365e00a6047fd3474e2"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "99c717b9760770c3e7c1ff083e7cd52e"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "c65813b2dac2a5aae0c3229658859709"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "151eb45003cac8eabbec17536ab0baa2"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "5d5361500528bac6daf0eb94ec186a29"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "49e48d14f8d4822c09c45c082e79441f"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "fdce3e56189fd65e7da152978d82c008"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "5f2cff5b0bd37e4c3ac8d155f20adf7d"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "9f99ec064901452f9a80229bc85dd862"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "2b04c4b5f9a52a84c9e5f953702d8ec3"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "f0bbd82dce5424a48eda883fb2f4b71e"
  },
  {
    "url": "partner/index.html",
    "revision": "e7e16f2febd5c0ee00ce2216030ea4f7"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "79726fca5c5e48e5e93ebd0410b66580"
  },
  {
    "url": "projectteams/index.html",
    "revision": "0cc1ec61f18b0bf4996afbfe17b8afc0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
