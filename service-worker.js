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
    "revision": "85f5dfa9e727e8692ee1877cff9205aa"
  },
  {
    "url": "about/index.html",
    "revision": "467b6023cbe1a9d2b848418fa6b70408"
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
    "url": "assets/js/25.f9d2f5f4.js",
    "revision": "b547e9b4a569466ca7dacc8e9340025c"
  },
  {
    "url": "assets/js/26.d6215384.js",
    "revision": "4b6268b38cb06fc8582fa01404df86d9"
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
    "url": "assets/js/36.636258d7.js",
    "revision": "1a50eb301022adc847b830812784872d"
  },
  {
    "url": "assets/js/37.8407ff4b.js",
    "revision": "e01d8e252afc75652dd4f2612e567caf"
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
    "url": "assets/js/48.2f4b8346.js",
    "revision": "29e5c7d2f2970683a63ee6f9d9b74987"
  },
  {
    "url": "assets/js/49.bfe4fdcd.js",
    "revision": "8645e52fb991d997859adfbb1a63f068"
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
    "url": "assets/js/app.e57d800d.js",
    "revision": "5ffed5e64c6084eca5e63dc1c660c45e"
  },
  {
    "url": "contact/index.html",
    "revision": "35b8f20f524f03ce3b03e6dfeb471e64"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "7507d676903c31b30495203595ef51f1"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "276a291c4a6dbe5d8fb1fd21502bf9f5"
  },
  {
    "url": "courses/index.html",
    "revision": "c5e1dcae9ffe486ea1bae25599388f6a"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "2237fc7008b883b74a645e1fe58635d1"
  },
  {
    "url": "courses/template/index.html",
    "revision": "d387c72eef6cd89d84d30cf8a75d4a7e"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "f6f2635d252bb2113ce458bef4abbf3e"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "4e4adc8bde435b405a407b49e35200bb"
  },
  {
    "url": "general/enroll.html",
    "revision": "1633b69e705c052fb04f269711d8338d"
  },
  {
    "url": "index.html",
    "revision": "d8044b63cdca0e4802da53420cfb7b54"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "f2906da5667ff9488eb9c85592776900"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "050058eee825ab12670300ea71457c1a"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "13866d1e2fae027e28b8546f2cae08cd"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "a9567721698e71ca039ef13f7e93413d"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "cd211950e63a8e943dd2bae35c61cf95"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "d19677e825774522cbb6edcfb737c2c2"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "5445cb002990a3eb92b668ee08504203"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "dfeb7ae2060ade37fe5c9fb286126b0d"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "f0f7c67027d881fc0e6f66dc4b3ddc41"
  },
  {
    "url": "more/general/about.html",
    "revision": "3c5e79cc9b77fee0a698ef278c982953"
  },
  {
    "url": "more/general/help.html",
    "revision": "d3bf8ba60b22b97e955a80321415e427"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "1483b4b6cf191d3ddb292944a9fbc6ca"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "ca476739a67daeb982fae5f8b5a5db6b"
  },
  {
    "url": "more/general/terms.html",
    "revision": "849b3ad6d3119f7541f884fcc761a4be"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "b9d0b11612624b3f64447475ec3169de"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "6a5e4d86df2b981f546ce67924f21df4"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "bb4b6cccc56fa6081350819b4749b2d4"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "64cc71998a476b7c5ded19c64c37f515"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "427c22ccd9ead123c9043c473958e57c"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "c2a49f062d25a0546d89cfd5a234224e"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "c4636f39e49006566f749745ef0d8df1"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "a621be15589f83ad0557d789077284a0"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "657b4d8b1409a6c4b54482b1ad445e14"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "da4f9d51e28516b58e38d7e02a3ddb3c"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "1dc43ef1e45719fd3764ec0b5ee7b353"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "0105acc1417a2a3565c4bdd3477f7690"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "31865a772d6d618094ba57e53eb66dec"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "c6681a6b2452d13c7f412b33173dbc6e"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "2e73feb6ce1ff96a019781fc346dc232"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "4bbf6327e941f9f7e100fe71f9e3f893"
  },
  {
    "url": "partner/index.html",
    "revision": "9e6d40a28344183cb7fd4f5a7516e177"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "4b943e3538691da23b34d5781fd961a1"
  },
  {
    "url": "projectteams/index.html",
    "revision": "8dddbfd4f38d94b48658d9eb6e3a488d"
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
