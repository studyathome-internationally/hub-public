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
    "revision": "b3e6f963d372b01965a0b8eee00e593f"
  },
  {
    "url": "about/index.html",
    "revision": "4e2c765069c8df6bd2616f26bb0dd27d"
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
    "url": "assets/js/app.fda2a9e7.js",
    "revision": "fd2b900de5bba59ea56f4d1a0c0e3559"
  },
  {
    "url": "contact/index.html",
    "revision": "9bda40b032856ba0088b61f9d3f8526e"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "b4365f47a542745cbd57eb78ffd2a414"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "1c6149d0fbab374f615db8789d39ef8b"
  },
  {
    "url": "courses/index.html",
    "revision": "e8afe6a60c042846778fcef0d8ae8574"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "30b6a8a89a8e9cabdd47065e25cdd175"
  },
  {
    "url": "courses/template/index.html",
    "revision": "07380b3767082e76bb833d7e5bfd4258"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "efca3d99aba1218e3dbb416a77942283"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "590d9c563c6bef1d79639ba7d14d2efd"
  },
  {
    "url": "general/enroll.html",
    "revision": "e952cee0f1e7aec607f6c594b5953494"
  },
  {
    "url": "index.html",
    "revision": "3b6968c8ec9a64bcf03dcac0740f35e8"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "0d7bbe9edfa03655f769b07bb039dad0"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "7785172e67df7fe864677cd3de667464"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "9e0fc927a0ee21766014ea8cc29b8995"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "54943150e336b0bb407b6710f7156d61"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "9f39f7daa8a3a754c5bf65171a649b2d"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "c5679b0a2e34bc67714f971c2ac67beb"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "71a2bc4f4a4bb7c9b4338c35f3348ede"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "5de828a7005a7933f920cd0e8ea1d56e"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "a9674f0e562a032ff003e61b9ae5ba7a"
  },
  {
    "url": "more/general/about.html",
    "revision": "c3fda5954919f1ade15b791cfe6725de"
  },
  {
    "url": "more/general/help.html",
    "revision": "764ed515db5bf3f4bb8223ed6d7db0b6"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "cbb863428724c760bbc9a30019f18026"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "bddd0e4662b2da68c36119d842e36797"
  },
  {
    "url": "more/general/terms.html",
    "revision": "8fcbd8c9673d4660d838ad3d63334d85"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "be092faf98c3fceff3468b902020c982"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "233a0fc7bda5bf63ca37ddb871287194"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "a30612c0d5559d3c1069437184479575"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "fabeb9bc308f975817f870dd32fc81cc"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "cf9d20c63abd1d3e813d0b8c76613372"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "ea061e696b6383ba21fcfd6b4abba206"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "cf68b317f61af1f0fe0d20146cb56dbc"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "84d370fb6a03ea0f795f33c94b81e612"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "dcddd7bc0349e34a6787394430f8c115"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "b7470d47aa94ee0ab12bcdc2e36ed800"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "880a763918803169e0aeb6e34d42a54b"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "f7006cc72959fec23ea506ead2a41aa6"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "0287719718f620e4d32c4851b293ea2a"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "58bf0d8bdc397ac4267c71a37fa4fd4e"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "86cc66bc7291d02e4afe2fb69b188a3a"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "35c75d3f02b56986588dfb01a3e660c6"
  },
  {
    "url": "partner/index.html",
    "revision": "021197f24a374dbe81ee67cec89aa65f"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "9f85949f5ed3be0e781235498520c80f"
  },
  {
    "url": "projectteams/index.html",
    "revision": "42bf7bd647ffd32141042bcac59db659"
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
