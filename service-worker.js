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
    "revision": "4e3fa8a2942d8dc78fae2fc86ba4f136"
  },
  {
    "url": "about/index.html",
    "revision": "28bdf7fe34b9f72747dad92d95ee5d53"
  },
  {
    "url": "assets/css/0.styles.8af716dd.css",
    "revision": "0694fb08023f9cf3fb252696cb63ddf5"
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
    "url": "assets/js/1.d28f4aa3.js",
    "revision": "3d0dcc6d48534e958a6435856e9161a6"
  },
  {
    "url": "assets/js/10.40a457fd.js",
    "revision": "fd69536bcc6041f875da65799d5d4f32"
  },
  {
    "url": "assets/js/11.5316d395.js",
    "revision": "ca482f98412d1a146028c6bfed52f95f"
  },
  {
    "url": "assets/js/12.491f4b10.js",
    "revision": "3640d7bb66a42c0fb9dc6d6f0ffd354c"
  },
  {
    "url": "assets/js/13.bd9225cc.js",
    "revision": "7e70efd48932c00c5eeb77e5217f694f"
  },
  {
    "url": "assets/js/14.7f4c496f.js",
    "revision": "fc163bef006c5147c17a2e43f082e406"
  },
  {
    "url": "assets/js/15.00d59a26.js",
    "revision": "28123cc36149ad3017707fcc54dd72fa"
  },
  {
    "url": "assets/js/16.7a6f9ad7.js",
    "revision": "4f85c1419678e34a12064a72d254db75"
  },
  {
    "url": "assets/js/17.e842406e.js",
    "revision": "8af8b10b626ceb670597c42f0c7f2561"
  },
  {
    "url": "assets/js/18.a5db2739.js",
    "revision": "d30a0ac43b3234f204c7e05c6682abf7"
  },
  {
    "url": "assets/js/19.c8ce2558.js",
    "revision": "5a8b4d2bd32e4aaf881c008203efb75c"
  },
  {
    "url": "assets/js/20.9e2ea1bd.js",
    "revision": "5e2a1591ff0765a14e28c07903465541"
  },
  {
    "url": "assets/js/21.2c78766a.js",
    "revision": "c718ecb83b4ae44fed1cac998a7c5dd5"
  },
  {
    "url": "assets/js/22.cb281dbf.js",
    "revision": "e74c012ed2155cfc54ea6fbe06707481"
  },
  {
    "url": "assets/js/23.b6d85dc5.js",
    "revision": "ed8feef09f6e587b9c5308c30e7e26b4"
  },
  {
    "url": "assets/js/24.fb889dde.js",
    "revision": "1e40fec9425d98a3b781b102a88018f1"
  },
  {
    "url": "assets/js/25.6598700d.js",
    "revision": "4f2f7ac68f4ebffde99271dc3a3d7555"
  },
  {
    "url": "assets/js/26.e696096b.js",
    "revision": "3e12ebfd8fbdf070d30f50752f83fed7"
  },
  {
    "url": "assets/js/27.53f31125.js",
    "revision": "14eeea33d27f62e0c77eb70a4e195692"
  },
  {
    "url": "assets/js/28.4bd30f58.js",
    "revision": "cd3052fd316d04df4c5ff9371a2aefd4"
  },
  {
    "url": "assets/js/29.d38f957d.js",
    "revision": "74fd0408463215e1b6a9b1e90cc9610f"
  },
  {
    "url": "assets/js/3.ef21fd60.js",
    "revision": "bdee07e029a88860d37aba4f5287edf3"
  },
  {
    "url": "assets/js/30.006c37b5.js",
    "revision": "486f6253d7d7bf607535500ee313e1a4"
  },
  {
    "url": "assets/js/31.256c2b87.js",
    "revision": "0a7327d6cce6425931d7a771b4dae2ff"
  },
  {
    "url": "assets/js/32.9788a59d.js",
    "revision": "c4810298c4bbf3a6fb1ba8ebf42582fe"
  },
  {
    "url": "assets/js/33.0d170bc6.js",
    "revision": "60185f3af001d409cca645e821d796c5"
  },
  {
    "url": "assets/js/34.70b7207a.js",
    "revision": "bfd2fb19a8589ebfcc15f7cf27079550"
  },
  {
    "url": "assets/js/35.f6aa4514.js",
    "revision": "26d7cb52ceeb6bb911d868767305cea8"
  },
  {
    "url": "assets/js/36.3e167bdb.js",
    "revision": "48216df27d6f20496e875e793815d665"
  },
  {
    "url": "assets/js/37.2a12723f.js",
    "revision": "3f307af4d769a6e14b4f16c472e85082"
  },
  {
    "url": "assets/js/38.7f04178a.js",
    "revision": "a9d7c7012f82e0a7f0c73bb182bf806f"
  },
  {
    "url": "assets/js/39.12034df7.js",
    "revision": "6c93b97fe3c3e4bd31fccb5f1479d6da"
  },
  {
    "url": "assets/js/4.9d0526e2.js",
    "revision": "7e46331f95e24892cba352150b9c0d88"
  },
  {
    "url": "assets/js/40.73a644eb.js",
    "revision": "90f7f51f3706b900af2edec1ba9adceb"
  },
  {
    "url": "assets/js/41.9b2916fd.js",
    "revision": "022ee2bf20011a11293e6dfcadcdd0e6"
  },
  {
    "url": "assets/js/42.9d44510b.js",
    "revision": "54adcc42d407a3e5b6170ab4f17f48d9"
  },
  {
    "url": "assets/js/43.8cb798cd.js",
    "revision": "7ca2a065cf48e3499ba99706700bb9f4"
  },
  {
    "url": "assets/js/44.56fd29d0.js",
    "revision": "c7b4258871d9da7de8eb425e99b2b048"
  },
  {
    "url": "assets/js/45.04e507d4.js",
    "revision": "b48f5e038938facf09e008706e9d3527"
  },
  {
    "url": "assets/js/46.b83972c7.js",
    "revision": "4e241f529e500de93e938820d2a7643f"
  },
  {
    "url": "assets/js/47.8e72358a.js",
    "revision": "53d6ccb33d92b2222e1c75a3e4476704"
  },
  {
    "url": "assets/js/48.3b581e4e.js",
    "revision": "a6f2ab86d6d5b5bdd8a8ff2839b6f498"
  },
  {
    "url": "assets/js/49.68c2a59d.js",
    "revision": "7eec17625a2bd16f317fb65031a04748"
  },
  {
    "url": "assets/js/5.c1f0305f.js",
    "revision": "3ef7f22666aa524dd5786bb30a45f2b2"
  },
  {
    "url": "assets/js/50.4b9b658a.js",
    "revision": "0b1713fcebbcc3f4223fd52323581dff"
  },
  {
    "url": "assets/js/51.17034a0f.js",
    "revision": "f4e7f8c416ff9b2eb427d6a367ebee43"
  },
  {
    "url": "assets/js/52.7fbbb1a2.js",
    "revision": "ccacfb1dad3519ba5705e50ec3fa1f2c"
  },
  {
    "url": "assets/js/53.16cd0530.js",
    "revision": "5049658ece124bf30f13c103f76705a6"
  },
  {
    "url": "assets/js/54.70b2fcd9.js",
    "revision": "ced3641c6aa7568936e87034b5f8c764"
  },
  {
    "url": "assets/js/55.ef811d8e.js",
    "revision": "4e915e32c1f9312dc1d880eee884765b"
  },
  {
    "url": "assets/js/6.5eb026dc.js",
    "revision": "54acc41310156dd66fae4e914963fa98"
  },
  {
    "url": "assets/js/7.b60cfa2f.js",
    "revision": "f1a5c71867b2b86448a3248c05fbb1af"
  },
  {
    "url": "assets/js/8.dff72f03.js",
    "revision": "c64e2425c913fb4e8bec18783648f438"
  },
  {
    "url": "assets/js/9.cd9c3932.js",
    "revision": "eed61788931ac084ec3e8749852a3042"
  },
  {
    "url": "assets/js/app.a7d9f7e3.js",
    "revision": "d2e632f536e2ee3756cdee7ea574e387"
  },
  {
    "url": "contact/index.html",
    "revision": "b069b4a47c22d8af1a40aef5a7b3bd5d"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "54c52109956bf828b418abb9679f7b3c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "dfd2656e88bfcb25a1fbf3e67b88f4ed"
  },
  {
    "url": "courses/index.html",
    "revision": "c3758ef17624cfb3cd42c6b1aba0e293"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "58b2249a55cf3dcd67f02dd3de685bb8"
  },
  {
    "url": "courses/template/index.html",
    "revision": "6115cf3b01f5297c561e4e27ac059cd0"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "fffcf1a93b7e20dea21824d1094aa554"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "6f14a9b38f1ea599854a5b60fe7af717"
  },
  {
    "url": "general/enroll.html",
    "revision": "96aee7c817e5dc1a1a14025bf694be9b"
  },
  {
    "url": "index.html",
    "revision": "b7a4c46a3febf84f47e186882c17f22b"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "2f8b93113105df985ec1b0b18f38ccf5"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "43d2009716e35d963e0fd1432fed62e7"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "e132059d304cb2d1b29bb9398023c3e0"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "ed275cc24aa7dd9a5bd87f807d37767e"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "5b6c971f3d128f36bc2636b6695c7e85"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "d37ac538d2b3a48b3fce89a937c95e93"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "1e28a2e581e8a11486d298d2bed066f2"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "d6a4a101427371bdd5808b9b9a03bd18"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "26e5fac1210cccb2741b60d30dc2fdd7"
  },
  {
    "url": "more/general/about.html",
    "revision": "777e9e515c735ae9fb7ee96bd0bd472f"
  },
  {
    "url": "more/general/help.html",
    "revision": "5ad22c8c6fcc8ce12480640c2390a964"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "2a9a64182ad9b5f4633e501aa245a585"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "09b406fd4759281c4b7efa8f08f614d6"
  },
  {
    "url": "more/general/terms.html",
    "revision": "88ccd72868d2ff73bf36ac969652332e"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "ccb09e6dbceb0dee42890966eb7b6da6"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "ca5919af6675af791878f1396e828bc4"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "6c24e434fc459245c6dee9f5af2abaaa"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "fb0504c300c754572c7924f73b3f4282"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "c700fd7fc8e853bb285f66233ec619b9"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "849ef8dfab5f01c38380eb8a47dc0e8d"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "a6b0c0d37d73e1f125f1d66b3b8f3fcc"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "635823ecc8e0516fd0061a353f3fdf23"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "50871cb1493e6a49fd3223b886a4e9a4"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "c8ea60497fd609a13434668dc52b4753"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "d8608fd729b9fd2465a88b1c5c3824b0"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "8dd587faf72e64d64a02a8b15275dbe8"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "924335ab8d2b24bbb9a3184ceec12321"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "b6e87b58b3c832e24484c98fccb0465c"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "37ab299420015a47beb6dd8968197f70"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "c7edae32ff9aa27652a1a95e80210495"
  },
  {
    "url": "partner/index.html",
    "revision": "12445c25af69563b7252935f5aef0e64"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "8b84eddefdbed85215a878302d26f738"
  },
  {
    "url": "projectteams/index.html",
    "revision": "f76e52de556650b74b3136b5709272ca"
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
