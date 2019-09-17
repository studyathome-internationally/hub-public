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
    "revision": "355decf65d81c393260f3520b551b74b"
  },
  {
    "url": "about/index.html",
    "revision": "95030a73b3aa0fbd14421240c76dff25"
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
    "url": "assets/js/app.81cc1d62.js",
    "revision": "3cd98b6e46e7a6c36d3460b426fc1689"
  },
  {
    "url": "contact/index.html",
    "revision": "9ef8625235951dfc5424b3a7d6e9a7f2"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "1fe374198ee8eba95a0ea327f72e9679"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "36dfb4e984f544e3daba95e4ffb255fd"
  },
  {
    "url": "courses/index.html",
    "revision": "d4e6b7df2ace2ddc552c03d31a55b8e9"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "fe7488e048aeb203976dfb6dcae3c578"
  },
  {
    "url": "courses/template/index.html",
    "revision": "08cbfdae4df52ce6d1cf32a675329471"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "722d4d2d4fc9a03c716f09134ec64886"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f97874dd10c5e6475bff7b1e9f69d0d0"
  },
  {
    "url": "general/enroll.html",
    "revision": "104ac31a429de986d8a8aa15018fd5b0"
  },
  {
    "url": "index.html",
    "revision": "1878700f71636d58c69828a3044b00c3"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "96e29b8e1ec5864f22795e3775d987c3"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "ecf0b0a53b081354606c2c7aa0dc606c"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "e3ba917df6a2d2a65e8a9ea5fc6cc348"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "277fc25edad2a50e4b0675b97d8d01f4"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "ba798cb01b260e3b038476c6e34691f1"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "c0b65c238308a539c68fdc9da103eccc"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "b9e7c9ac92bea73a98c6078ee2d14195"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "8fa70a9bf03177829108c0f9ebbb54d3"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "9c116128e49d6c14e4036cf578dae107"
  },
  {
    "url": "more/general/about.html",
    "revision": "dcc6b2ca805d9f6c380211207bf873f0"
  },
  {
    "url": "more/general/help.html",
    "revision": "36a1f946b7e476b786a71b35a79701e4"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "aef32fa544f7693364a8e445ac709abf"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "f1799722790d21c90d69cac5fd8a1dab"
  },
  {
    "url": "more/general/terms.html",
    "revision": "f6fd870408c7e455f0c6b9af8713aec4"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "696f480fd93bad1ddb115113a01ee9ca"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "5e35377719ec5321e4865a7e2ee3135f"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "ec3b8e76f6c4dc562163507a415e6a23"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "0972b74a32376ee282da34278e416b84"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "2842e80f76cfb692bcbc3fe4a8cca8bf"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "aaef88c1f5182c73e3df28d97b01c46e"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "612748033f8ace35b5ee6c8211e7468b"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "7eb2e66d4a71ac7569fed282162c4280"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "3b95e0beb16e5efb7d7974124d736362"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "34275d5f058f07dd639a62b1cace65a5"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "0441545cacfe1c6d8dd148808dd65929"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "d9e55f23ad4fab8dca6bfe3353f99fa1"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "233c7847c52c41e97cbd6b03109684e6"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "72fddbaa22dda4c4c0d4a44235659bbb"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "67377c0d062ad847850f836454f4f5fa"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "762b122f87de4962e0aaf6ab62da2902"
  },
  {
    "url": "partner/index.html",
    "revision": "fb892cf12098d1ec65642c9ea5c11434"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "72222ab44d6f4d5825ca898e6a80f472"
  },
  {
    "url": "projectteams/index.html",
    "revision": "1faaeb20f5b2e9b80c08ce73b1baac32"
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
