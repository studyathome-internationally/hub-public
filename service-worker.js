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
    "revision": "8da04903f540ed8d3c86abb6d764bccb"
  },
  {
    "url": "about/index.html",
    "revision": "f13e38bcf7a2b124f6ab7f826dcdb234"
  },
  {
    "url": "assets/css/0.styles.45d8be37.css",
    "revision": "aa001123d6f1194204a9ad1b1a8212cc"
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
    "url": "assets/js/1.bee11baa.js",
    "revision": "3da81dea1d9791ffb4e6eb3a937ffa7e"
  },
  {
    "url": "assets/js/10.672e73e9.js",
    "revision": "dfcd6068d042739682c5a096df622502"
  },
  {
    "url": "assets/js/11.e63eb274.js",
    "revision": "ff5bab0a2b6a49a35b1bda14ec141f61"
  },
  {
    "url": "assets/js/12.ce4a70c1.js",
    "revision": "aec1c8dd9dd1433b634ae962aa337a03"
  },
  {
    "url": "assets/js/13.78c9aa23.js",
    "revision": "12cdb5bc8959b6910747ee09a6bcedfb"
  },
  {
    "url": "assets/js/14.cb0138e3.js",
    "revision": "dd4c249a869c582cce00edf5d6fa2c6c"
  },
  {
    "url": "assets/js/15.218c3f95.js",
    "revision": "9649d511a7996430396eb18bb2dc7328"
  },
  {
    "url": "assets/js/16.af427023.js",
    "revision": "d69375a5e42346ab28fa8f11df331788"
  },
  {
    "url": "assets/js/17.601f0c85.js",
    "revision": "e48fd4b19cda842e96e39395d2b71f19"
  },
  {
    "url": "assets/js/18.94a39623.js",
    "revision": "950a895c7b56bd6a5796d0c476a64c02"
  },
  {
    "url": "assets/js/19.b38ed081.js",
    "revision": "12ceb428d9eb80a1dbcfca6afa4ba2b4"
  },
  {
    "url": "assets/js/20.09f5585c.js",
    "revision": "73923926995bb70381b622bec353b241"
  },
  {
    "url": "assets/js/21.3007c1e1.js",
    "revision": "f43a76ffad7293c35364360d74685a10"
  },
  {
    "url": "assets/js/22.e1c69486.js",
    "revision": "2ae14e2cf28b1313b32a73fbb6d50fe9"
  },
  {
    "url": "assets/js/23.3728a5a8.js",
    "revision": "895c6fd120c658b99e107f08a269c4eb"
  },
  {
    "url": "assets/js/24.51431de1.js",
    "revision": "a8e299bf0e76e21f5f40d40ef27dd6dc"
  },
  {
    "url": "assets/js/25.8788fac0.js",
    "revision": "5549e928e97841f2ccf21eafeaba658e"
  },
  {
    "url": "assets/js/26.d76bf206.js",
    "revision": "f36346d4a63773ac9ddf09f76f2f2286"
  },
  {
    "url": "assets/js/27.7ba2512d.js",
    "revision": "f49ba09361949f068906e03b124096e5"
  },
  {
    "url": "assets/js/28.8d036232.js",
    "revision": "9592be2ab23e9251737fce0ca8758dd6"
  },
  {
    "url": "assets/js/29.8f395947.js",
    "revision": "fbbc5bdd4e5f11dafe5209d7259d8d0f"
  },
  {
    "url": "assets/js/3.95cb67d4.js",
    "revision": "67a806da56408430ffd9ddcb63063405"
  },
  {
    "url": "assets/js/30.9da876d0.js",
    "revision": "e0cae95466507f19529f6fa7bbcb08b3"
  },
  {
    "url": "assets/js/31.ce4e75e4.js",
    "revision": "c61f4b2d1121b38896e7daeb1b2adf3c"
  },
  {
    "url": "assets/js/32.06afb906.js",
    "revision": "f98561244f22815e001695d1f2732f2b"
  },
  {
    "url": "assets/js/33.09200a3c.js",
    "revision": "f28936692728185ee5095259ebe7916f"
  },
  {
    "url": "assets/js/34.2e38342b.js",
    "revision": "bbec5e9da63c5a9a351618d1d8d98144"
  },
  {
    "url": "assets/js/35.f7356cb5.js",
    "revision": "4ddb67854661aa54bf4570f8e6f0581f"
  },
  {
    "url": "assets/js/36.1aaeb407.js",
    "revision": "193f30db79ec1f2ecddebb89e6b23d3d"
  },
  {
    "url": "assets/js/37.7f22e7fc.js",
    "revision": "65036d43316870cf34187092f57c3ca0"
  },
  {
    "url": "assets/js/38.4ee18aba.js",
    "revision": "6dcce28cf269c5a2741e8693788711c5"
  },
  {
    "url": "assets/js/39.c6c8092f.js",
    "revision": "f39f11af1c802ba2b0757a4d39dec1b9"
  },
  {
    "url": "assets/js/4.91cfbed3.js",
    "revision": "effc1422f1a2e5a43780b733dff5ae06"
  },
  {
    "url": "assets/js/40.99772209.js",
    "revision": "fa96ee5748f1bbfb99a07b633b82800b"
  },
  {
    "url": "assets/js/41.bd5cc174.js",
    "revision": "6574d2799cb2e887f7daa821fee61ec4"
  },
  {
    "url": "assets/js/42.4e07269f.js",
    "revision": "22ca91aa01d5444096101b764b928f85"
  },
  {
    "url": "assets/js/43.7d9dba05.js",
    "revision": "2f5670022e633a59bed050df716b95eb"
  },
  {
    "url": "assets/js/44.17917019.js",
    "revision": "1a4402035deb7af2c66b256b6e17ae16"
  },
  {
    "url": "assets/js/45.6c0b55fd.js",
    "revision": "4a682c8edf68cc0e4e20f52795863f3a"
  },
  {
    "url": "assets/js/46.fbf1c327.js",
    "revision": "2e1f75612e59ebfd513d05e63830a585"
  },
  {
    "url": "assets/js/47.57febfaf.js",
    "revision": "760fe8f59e05c514b1e29763cfcb318f"
  },
  {
    "url": "assets/js/48.79e1fb48.js",
    "revision": "7c544e0218892bcbc9e75989403ed1fd"
  },
  {
    "url": "assets/js/49.d941604e.js",
    "revision": "bc777bae7ec82910c6af4d3e58da10c7"
  },
  {
    "url": "assets/js/5.7279c80e.js",
    "revision": "5a636761b6932412faa5031c06bf8470"
  },
  {
    "url": "assets/js/50.acd56d0d.js",
    "revision": "7630e78fbe054094433be577f434945d"
  },
  {
    "url": "assets/js/51.bbf36247.js",
    "revision": "6f1da997660bd0914854d48d1fddd519"
  },
  {
    "url": "assets/js/52.1d9f75f6.js",
    "revision": "ca7f41ac49a2ece3e93eda78b47b571c"
  },
  {
    "url": "assets/js/53.90bd036b.js",
    "revision": "9cad00d32472d440f0b245ee126ad610"
  },
  {
    "url": "assets/js/54.84120087.js",
    "revision": "4f6c66d70785432a7b006f49b184e0d7"
  },
  {
    "url": "assets/js/55.78d3ff65.js",
    "revision": "1ae18029ae52154731f161cddb35450f"
  },
  {
    "url": "assets/js/56.98d063eb.js",
    "revision": "788755f9deb654713cec9069c92cc4cb"
  },
  {
    "url": "assets/js/57.673ed19e.js",
    "revision": "2cf6cf51e199a663db365057e807a798"
  },
  {
    "url": "assets/js/58.e86e8239.js",
    "revision": "f592cb9d582d780793719b0fe23d7a6d"
  },
  {
    "url": "assets/js/59.1f66c969.js",
    "revision": "b3f20ac3ba7dd497b4d881eea98b6052"
  },
  {
    "url": "assets/js/6.595d5f0d.js",
    "revision": "1bcb9a36d6f15a7ed4a831516fa39e15"
  },
  {
    "url": "assets/js/60.bb4a0dab.js",
    "revision": "736a70b7254776fd9aa0e0017924a323"
  },
  {
    "url": "assets/js/61.025d70ed.js",
    "revision": "57aff6ca715a625ac807b43cf7119c7a"
  },
  {
    "url": "assets/js/62.df23d0c2.js",
    "revision": "5e0c9b2e9a2aa9724c4538bff25da6ac"
  },
  {
    "url": "assets/js/63.1f2c2780.js",
    "revision": "7a6acc7eecd35973bb864b9ed43e4aed"
  },
  {
    "url": "assets/js/64.213045f8.js",
    "revision": "9999f3ceb595ebdaaa6a1154f7248878"
  },
  {
    "url": "assets/js/65.19a5884c.js",
    "revision": "212861f977d4ec500e2b15cef8ae670a"
  },
  {
    "url": "assets/js/66.1355a11a.js",
    "revision": "2b9b083595d4ad674a860d8118479b39"
  },
  {
    "url": "assets/js/67.22981963.js",
    "revision": "c21703a8ceebadac08f8af6426823a8e"
  },
  {
    "url": "assets/js/68.dc322e66.js",
    "revision": "12e583d817f335681f1735cb11723254"
  },
  {
    "url": "assets/js/69.f06e0da7.js",
    "revision": "f6d207685464a9e500968be741634af3"
  },
  {
    "url": "assets/js/7.7b564f21.js",
    "revision": "024847b0edc0e3eb2191917e09a8678b"
  },
  {
    "url": "assets/js/70.ff4471d9.js",
    "revision": "057a43651fa1dfc3419f817299f1af0e"
  },
  {
    "url": "assets/js/71.4ab6083c.js",
    "revision": "53eac6246df0de4f0b28c96d32f91203"
  },
  {
    "url": "assets/js/72.74c4b585.js",
    "revision": "05ef371825da6c45c343ce2446f83c0b"
  },
  {
    "url": "assets/js/73.b26f59a1.js",
    "revision": "68eb4cfad8afd60a4885fbeb0bb9d911"
  },
  {
    "url": "assets/js/8.877aeb78.js",
    "revision": "bf140f8bd867ba5f52a3dffe1cbb70fb"
  },
  {
    "url": "assets/js/9.63f8fce6.js",
    "revision": "6521ddf2bfd69a5920410796a9f6218c"
  },
  {
    "url": "assets/js/app.ca39363e.js",
    "revision": "1e1f1911882a7cebf59fe8c727286b2e"
  },
  {
    "url": "contact/index.html",
    "revision": "659b37bffdcae7abc5f3414b37404026"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "63d34e6a7808b6860669c1f930fff900"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "d499d82f7e83870a8d3da0eaa3f18d2d"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "fa173be8061b690d57a8477739cff7a6"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "4ef81384d1260f98df24e935ba254d3e"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "716a3ee0e020050ff5bffc9969c07eb7"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "ab0da2916cd4d19f188620ff49dd6403"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "27de86fa0eb64dd07ead2682cdc88499"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "9b920349e32b94384bb4d08b5c501a63"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "3b17397e8ddbf1e576bd4dfb95af7f8e"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "706b28432dd813d546747a73193d790e"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "10f0bde2e1b7198fc3b7869f63b0dbb3"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "54bfd5b4ae298f1ba56191a93e5a741d"
  },
  {
    "url": "courses/index.html",
    "revision": "5134506a4d7e6391b9547daa03236012"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "be58cfb363040db45040f08e6c656218"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "a144e150f5104b1325885b1acd2e78b9"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "66c7577ae2727a22a4881d144a8e3324"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "b436c28b93781be4ad1876892f85ead2"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "ef9a3b0c4b3bcad789dfb8cfdae2bd23"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "9393d7bb2702d33b96486fbbe6b35995"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "a66fa72cc3654b95beb4935d0a12c54c"
  },
  {
    "url": "courses/template/index.html",
    "revision": "3553884db6e0fa91e9de0406b8cc640c"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "731c7f43d2abdbbaaebab5306a72d06c"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "0c33f941b3bfe00f4f125c01ea4178c8"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "e997f4cd8afc18da9f77fea9b78b5783"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "3fe54d9ad2af84701c2f218093679d18"
  },
  {
    "url": "general/enroll.html",
    "revision": "e7f9a600f990ccededef82cf9d4550ce"
  },
  {
    "url": "index.html",
    "revision": "0de3a3411629d18cc242b315775b9d5d"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "e4d0d36b9e86ca97aef16c7747d63322"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "47533c3eeef1334f7a017b957c87a0ae"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "5f6fa424b654e32c530248cb63742162"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "9999073f44b3dd326272e97a4524dd7e"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "146c4b8ea6aa38b980d5f39ae6c13565"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "ade999e44a525fac6f4cb40279168c0c"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "a111588ad947e1e5015d603c0d6e4e82"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "28c935e045d66496820041a417ec84b9"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "fa70241853ae861a757c13309c3ceb8d"
  },
  {
    "url": "more/general/about.html",
    "revision": "bd545531602c145aaa2c3c0f6abeb41a"
  },
  {
    "url": "more/general/help.html",
    "revision": "846ef3b4489cb5df7df91d5b1ed47002"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "572598ac59d06c4d148fde064da108e2"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "eb6d954dcda95af4876f5f1b4b026f1c"
  },
  {
    "url": "more/general/terms.html",
    "revision": "3a5ded64008e3ad58c6a892dd34531f3"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "797a46b1205f8c2d1d89e4ab3711481e"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "7fb4dced2a5e9073395a4713e09fb06c"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "2bee5ddde0b6392e346c5d4978e29be2"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "98a762643cc9797a975e3c85b998adce"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "4454870de78f8608303d5a4609efdc46"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "9c7d5d36e7f0bb25012915b9c7cfdd93"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "e7a4dfb3501cf14c4a537e3e48bdac0d"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "923f34eac9a5c7e8b5be84ee013c0dbc"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "9593cc06d2330d3055e734d0be850f62"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "b28fa3bd5b25b3a114c3503742e3f9b5"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "8df98cd6c5460b4579c49effc2c3a485"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "869da36236c8e514181facfdbcb342eb"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "96403b3a0fc0ca4eff12567e3b9f58e2"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "614c978cdbcd7b7f85ae98622f87bc05"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "46a5b7bb63d9bf3ff84b4754247b0da1"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "512a4bf7eb681040179ff2f890334fed"
  },
  {
    "url": "partner/index.html",
    "revision": "9bb6248327b0cc156d34a9bb59d1b8b0"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "a3c3188ff43b6e9761e28dbbfa7eab10"
  },
  {
    "url": "projectteams/index.html",
    "revision": "0457f26fd1aaa6331937b66476d5cd7e"
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
