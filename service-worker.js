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
    "revision": "8f0e5454bfafa30f845d9f279e77782b"
  },
  {
    "url": "about/index.html",
    "revision": "5de300db22b0c52301433d81b23f9076"
  },
  {
    "url": "assets/css/0.styles.63eb1216.css",
    "revision": "06951ba5eda6f3946ec2b9fad4c55d0a"
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
    "url": "assets/js/13.b5ef05f6.js",
    "revision": "9a287ac7ea68c53907a03534d46d7991"
  },
  {
    "url": "assets/js/14.b0d7f9b1.js",
    "revision": "2382eb79f5ab8a6c8ac29249350c9f1c"
  },
  {
    "url": "assets/js/15.7a771159.js",
    "revision": "ae70b9b939479e69d72a58309b0d20cc"
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
    "url": "assets/js/20.8fbeb788.js",
    "revision": "6824f4cc064fc1f10ea45899b3ed5a7a"
  },
  {
    "url": "assets/js/21.393a64ad.js",
    "revision": "b8d51f6b8eaf1de38584b7fb130e6936"
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
    "url": "assets/js/48.95dbcfd8.js",
    "revision": "35dab4c02b5c424f822898e291e51c40"
  },
  {
    "url": "assets/js/49.b95db6dd.js",
    "revision": "092230d8ba12dd9e5f4901ca53453ec5"
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
    "url": "assets/js/app.c3beec2e.js",
    "revision": "940d59026e8641b864833fb763df33eb"
  },
  {
    "url": "contact/index.html",
    "revision": "d477658732ca0ae297a396248f0dd78d"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "6b9f1c111a70b256fed431e1000a6acd"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "9163564a0c3f387ff76054dae6a09c3c"
  },
  {
    "url": "courses/index.html",
    "revision": "d4a0aff2facbfe44f8ff2fa5a8cc66ae"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "4b5c8aaf37d5cb208856e39d733fa569"
  },
  {
    "url": "courses/template/index.html",
    "revision": "c21575a00e07106781ca69c4bbd7ee4d"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "6972c2ebe9489971bb54fd82da6ef635"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "97281b465d58a5bfe78b40c4f340dcef"
  },
  {
    "url": "general/enroll.html",
    "revision": "bf8cc224ac9ca13f0b6c714edd63e7bf"
  },
  {
    "url": "index.html",
    "revision": "04a7a826e7d4939fbbf8d95201de823f"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "1b4214bf1a8e2749d88e4116f214b1f8"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "e604c35e529eb4e672cea9dfd0b6659a"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "39e9ce09d67d6271c15a56035257ee6d"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "96c1097aea5330681026fc5fdcd40191"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "efaf7fd1df3df03e5fb8fe5e39eb7273"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "ee3b18fca09c7b57d0ff8b1d42bfc0f3"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "864dd14c5ea8744fd5aad002544937e8"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "abc8cab6ed1067ffa109749ac3d034cd"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "1bbc4e571ead32bba2e440b7387eaceb"
  },
  {
    "url": "more/general/about.html",
    "revision": "63b6a48a8a0243706e440fd7bb3aba54"
  },
  {
    "url": "more/general/help.html",
    "revision": "4bd830deff654014ed4c0fc569af19d9"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "f43bb77a106c99ffdbee659489f93ba7"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "e11ee4b82152697fd7f0bf0abc8a3d30"
  },
  {
    "url": "more/general/terms.html",
    "revision": "95c946d833932912ee735f0b665bfdcb"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "ce75f25bf73cfe8147379ffef25d2df5"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "0450f11efb17ed0a669a5079d79ad848"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "f2add3c4a6af4bf505c052faa0c69f13"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "4c3c298173fe9e9d197d73d86154e247"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "874b557f7c1058c2b23f1f8d059db276"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "b670b56ad920f8febcb978a56fdcc5e6"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "cff53d83ebd17a6f656b27090fea7d63"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "384fb7fc5f0a8588ed2c1b9b5eb9e928"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "88d547f3502bf181ba55082198960fb2"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "a4753ca51c863815389597100cfd6780"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "9a5b702cadce205083b47e6b1b284afa"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "f4aac36148620bcf147c7885c6bca09d"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "1c61023687f0a10142e40b66fe847714"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "903759be611df11fa716860e1b8cc002"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "1d1e9cffa7fbf956002696341ae23f79"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "4ee8a3dec3c7d07c0c3eeb2b890e312a"
  },
  {
    "url": "partner/index.html",
    "revision": "2bdcc99bcf0583c2a96549b4c348500d"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "1bd89e48941b271556d71d4afbd4026b"
  },
  {
    "url": "projectteams/index.html",
    "revision": "5f2853226d205b9e23d4a6f47747c372"
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
