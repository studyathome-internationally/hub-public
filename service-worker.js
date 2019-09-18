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
    "revision": "376a0572609dd4d51cd15ae3e012d915"
  },
  {
    "url": "about/index.html",
    "revision": "8a8a90a6c7c2cd583e342380f1691e96"
  },
  {
    "url": "assets/css/0.styles.c325987c.css",
    "revision": "6c9a6266e4f37b99c6c32296b923d41f"
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
    "url": "assets/js/1.4e947f15.js",
    "revision": "e203d1ce21b38db2347698cbe06675eb"
  },
  {
    "url": "assets/js/10.a63cee74.js",
    "revision": "74e0e70945416423e4c0a8606119fa56"
  },
  {
    "url": "assets/js/11.b6a4d7f5.js",
    "revision": "e4a35121d2ac576c547708eac3ecf892"
  },
  {
    "url": "assets/js/12.e6699673.js",
    "revision": "f9f9703bafd4be174f9990f6d1179581"
  },
  {
    "url": "assets/js/13.fc4fa13f.js",
    "revision": "66580834aa511a191e79a60cd719050a"
  },
  {
    "url": "assets/js/14.a88fe391.js",
    "revision": "c2f72b64bf3d1fc47659a129ce49af06"
  },
  {
    "url": "assets/js/15.0c5f320c.js",
    "revision": "cdd0c5de77b9e8237b2b2bc47076fe09"
  },
  {
    "url": "assets/js/16.57c591ee.js",
    "revision": "1070d38ed575f4390d39a81b9a1bca28"
  },
  {
    "url": "assets/js/17.43835a66.js",
    "revision": "0868c21f02666b0d689d545a1bc1903b"
  },
  {
    "url": "assets/js/18.5b66114a.js",
    "revision": "5f4c7308822b0e37ebb604266b43ea98"
  },
  {
    "url": "assets/js/19.49e5d3ec.js",
    "revision": "cb29e44c298450e03ef97cf06938cfc4"
  },
  {
    "url": "assets/js/20.589253bf.js",
    "revision": "79078123f089395fc6a6b1de4a6400e6"
  },
  {
    "url": "assets/js/21.cfef4898.js",
    "revision": "b575416b8a88f10ba73935bed73cedef"
  },
  {
    "url": "assets/js/22.34cdc6a4.js",
    "revision": "d1d744cecfbf0890171e5ede0a661421"
  },
  {
    "url": "assets/js/23.fb68c475.js",
    "revision": "3640c1f98fbb656bf595903c3093784d"
  },
  {
    "url": "assets/js/24.7fe390e0.js",
    "revision": "2eb5cdf8a886cab635c0e0670ee28c8d"
  },
  {
    "url": "assets/js/25.87fa17fd.js",
    "revision": "3d86720eadbefb0f6a996f582a411e8c"
  },
  {
    "url": "assets/js/26.05b43441.js",
    "revision": "954588db92176c981681cb77d6af0be3"
  },
  {
    "url": "assets/js/27.c9d98bf5.js",
    "revision": "52cce88d7e5065e865e684d6235dda17"
  },
  {
    "url": "assets/js/28.7545f129.js",
    "revision": "6cf1c77f35c077fb62a4ce37a5816e4b"
  },
  {
    "url": "assets/js/29.f2fc011f.js",
    "revision": "d6a666af9f7476d737c98f5afb4c1517"
  },
  {
    "url": "assets/js/3.1e1ede8b.js",
    "revision": "b764fb85a7bb5026c33d461a27ac8a5f"
  },
  {
    "url": "assets/js/30.d2261d75.js",
    "revision": "c076ea1d4007cab21d2e84f7086efa09"
  },
  {
    "url": "assets/js/31.b7b0eb67.js",
    "revision": "e26557612f644065e8f9cd84540d6326"
  },
  {
    "url": "assets/js/32.22472da7.js",
    "revision": "57fb3662e99b5231b409460339c9089c"
  },
  {
    "url": "assets/js/33.21b2be81.js",
    "revision": "86d0633602985c78bf04cd1927de576f"
  },
  {
    "url": "assets/js/34.ac75189e.js",
    "revision": "315368a7ccefaee1cb8cc995042fba31"
  },
  {
    "url": "assets/js/35.f0e5753f.js",
    "revision": "a6c311740da9f2bbbc53d68432273a41"
  },
  {
    "url": "assets/js/36.09cfb134.js",
    "revision": "9c7d47cdb6c5c6b6277a6b86b120c229"
  },
  {
    "url": "assets/js/37.fc39638c.js",
    "revision": "d3c27c3f0752305b6f01b23962272b17"
  },
  {
    "url": "assets/js/38.a8247851.js",
    "revision": "68b593da48f3e7d441082879ba5ba45c"
  },
  {
    "url": "assets/js/39.2081d7f5.js",
    "revision": "85f4d5fdb2e6afb287d85b1d317b3735"
  },
  {
    "url": "assets/js/4.cd9bdceb.js",
    "revision": "580abf288c14dacf5d9934484250665d"
  },
  {
    "url": "assets/js/40.02b749da.js",
    "revision": "94b9937b872fadec1a74707e504a7077"
  },
  {
    "url": "assets/js/41.bd5cc174.js",
    "revision": "6574d2799cb2e887f7daa821fee61ec4"
  },
  {
    "url": "assets/js/42.60e4f383.js",
    "revision": "9f87713beed5a2c7f1a093bb31d22aca"
  },
  {
    "url": "assets/js/43.2ffc9d4e.js",
    "revision": "9426af8af4caacd1ac2b6610fb99b628"
  },
  {
    "url": "assets/js/44.ad2027bf.js",
    "revision": "505236be9c8b53b1fe257d930673f035"
  },
  {
    "url": "assets/js/45.fc0e9bf9.js",
    "revision": "93323f463be4024994efcae864ce7e27"
  },
  {
    "url": "assets/js/46.fb0fa721.js",
    "revision": "fe8ee102270783be70262e81ac139890"
  },
  {
    "url": "assets/js/47.99e7a29f.js",
    "revision": "82182263ba679e8115d3ac48559f6b6e"
  },
  {
    "url": "assets/js/48.4a9eab94.js",
    "revision": "304689d5d5c18b667d9bf0d8eb2334ea"
  },
  {
    "url": "assets/js/49.9011788c.js",
    "revision": "aec0e9ddb48e24247ce693a1ef6715f5"
  },
  {
    "url": "assets/js/5.126962f8.js",
    "revision": "ffd771c998c6c91901a52ef70155c3fe"
  },
  {
    "url": "assets/js/50.b3d15e6a.js",
    "revision": "3b828dbdacf053fe9d6be9e59a7fabf3"
  },
  {
    "url": "assets/js/51.f567f997.js",
    "revision": "3965f26e61149ac9e0592180ce837dee"
  },
  {
    "url": "assets/js/52.930b6992.js",
    "revision": "f76352e1f757640037067c61b0b20e09"
  },
  {
    "url": "assets/js/53.66870ea4.js",
    "revision": "d9c8bee3226dd5ca04e69c8ed613b801"
  },
  {
    "url": "assets/js/54.5dacfb58.js",
    "revision": "d3183631761fe7f821b1929587eb8fa4"
  },
  {
    "url": "assets/js/55.88ee432e.js",
    "revision": "b5be0d863042626415013238766c5444"
  },
  {
    "url": "assets/js/56.69d47464.js",
    "revision": "1c31286c17e2374f901dc0c02c97034a"
  },
  {
    "url": "assets/js/57.15e4681f.js",
    "revision": "c897f6bf8981631e3e39b2adccb533a3"
  },
  {
    "url": "assets/js/58.fe8ca7a4.js",
    "revision": "4192f463a17ed99a26f8c49477ebd6ef"
  },
  {
    "url": "assets/js/59.26665736.js",
    "revision": "c3eb89daf1bc4bcc95221e9159db7c50"
  },
  {
    "url": "assets/js/6.c3b164f5.js",
    "revision": "fa88b24505b0418fa1be7d9d3a8b8ce5"
  },
  {
    "url": "assets/js/60.23c20391.js",
    "revision": "402eae872e0f3af49f634bbe87c038dc"
  },
  {
    "url": "assets/js/61.726ea26b.js",
    "revision": "0eb746b71f0d4c27bec8483649d7ccac"
  },
  {
    "url": "assets/js/62.9d18b724.js",
    "revision": "0cf527421c131a1767f5b211785bbb53"
  },
  {
    "url": "assets/js/63.da79e44e.js",
    "revision": "451728a6b7731f0495f06ea84467b428"
  },
  {
    "url": "assets/js/64.0232ad04.js",
    "revision": "2cffde77da9ca8169174443cc8e98699"
  },
  {
    "url": "assets/js/65.dc996f66.js",
    "revision": "22057df7fff9883dd475d72a27a67516"
  },
  {
    "url": "assets/js/66.6d702c46.js",
    "revision": "5b2abd12b74813b4cb050e8ee98c681b"
  },
  {
    "url": "assets/js/67.2576eef5.js",
    "revision": "81d9b6f69f6c47495bee5244a0a91fb9"
  },
  {
    "url": "assets/js/68.f035c0fa.js",
    "revision": "36ea422800b95340758e168842ecc17b"
  },
  {
    "url": "assets/js/69.f1f4cf46.js",
    "revision": "8a103026cb2913f9ca08b740a719a574"
  },
  {
    "url": "assets/js/7.c21e36b7.js",
    "revision": "a0aa6682b438cb0848d86574233a0328"
  },
  {
    "url": "assets/js/70.d36d7d84.js",
    "revision": "f67f897e29fc21c027b155d7f8c10ea4"
  },
  {
    "url": "assets/js/71.cce9037f.js",
    "revision": "4818924b4a2e1e7756de88c0e7350050"
  },
  {
    "url": "assets/js/72.b369421e.js",
    "revision": "570b1604410be12934a8d123062ae807"
  },
  {
    "url": "assets/js/73.b26f59a1.js",
    "revision": "68eb4cfad8afd60a4885fbeb0bb9d911"
  },
  {
    "url": "assets/js/8.e9ec39b5.js",
    "revision": "a8c73a29de2b901ea6a4523a478cc6e3"
  },
  {
    "url": "assets/js/9.1693447d.js",
    "revision": "c3e630d7de1442245abbeb691f421d91"
  },
  {
    "url": "assets/js/app.64271cfa.js",
    "revision": "b9d5f467634b39ca1d1c566f5a937702"
  },
  {
    "url": "contact/index.html",
    "revision": "ff7f0efa9c9e8e8676e3e060a462c95c"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "4ce8a185154a9d7bb6087e1ff79e407c"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "7fed272ffc71ec5df776463ac31db1c4"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "03896d2366600f5308072899df579728"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "916579d6ad5cf10e4a2ab8caf2e60d63"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "be152f0dda52ca57a9b7b9a088f985b2"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "53127d761c256554d63b8c2d9ef0bb46"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "8938b3175d9e60a396a6c316f40ce2be"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "f6b97f02026abbb7fb04dfe2bd101048"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "9ef3e5bc6923401b9960180bacd0fe57"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "f110b27c7320f77f1260a6a67cd8ecc6"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "38582884982ff2a94815eae6d7ebc85a"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "f5821f2b7b10916898d849843b1c5a27"
  },
  {
    "url": "courses/index.html",
    "revision": "108ac37e4b158a5b078d257e210a5c30"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "73335d8b0a2228a6965c9c890cd473e8"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "9447a2736c4d80b722a7afeab81dfa8b"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "0a7b05c22296fc17f6b7333442eb5474"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "bbf8d270a373258472fe616cfd5bdddd"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "4b500a2aec22a07149a43ca3bbc5d0d0"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d60b4ca00d1350edf8852c368148e824"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "10f744baa1bd5cce25c648a42efbd348"
  },
  {
    "url": "courses/template/index.html",
    "revision": "589054ae75c60acdcd63215198ba7147"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "ac1dca015c19c126fb7cd348176249a9"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "09c73cd110f9aae1de307475bc0bf2c2"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "d963680392c1b9735c9818669d4a4843"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "f6874d162e9f85fbc8abc4fe18877735"
  },
  {
    "url": "general/enroll.html",
    "revision": "a2d74a91987190e515da1b5e244aa5b4"
  },
  {
    "url": "index.html",
    "revision": "662ff1e68932cc1457d363985a35f0b5"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "d1e37132d7fd4ccb358f02293c045409"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "bd4b8ca3837ae72f82d5f7a5cc1c6eae"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "3cf3dcb2fb9186717ddbd5f09f6df834"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "0edec6f66606d3fa74fc0401a67125b0"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "73d74b86d1fd5744fa16747a81d5d799"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "89cf1f733cb321d4ee0c218098938661"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "5adabf444106edf2a728ff86a355fa7d"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "4e879ca4196cec8f3c5332cf78b404a1"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "0b44e6b451ed745df666769a398c26aa"
  },
  {
    "url": "more/general/about.html",
    "revision": "a3f956436fc536c59a0bcc6586a98897"
  },
  {
    "url": "more/general/help.html",
    "revision": "5b91837a1b66edd0341ccf4730e5714c"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "b4484e6baef1f638e62754b509056bbc"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "745d74bb5747b1b28deb64743d5dd599"
  },
  {
    "url": "more/general/terms.html",
    "revision": "6996a07bbd5966e4968a7381e2008093"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "0bde17964bfa789eb81b96ef5e54891e"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "81381cc00d11d5049e8eadffba5b82d0"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "8f61a21d86add984857ca03d796b60ea"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "397ca27e1561d88a8d977fda75d16f22"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "40c0625844e577629e20d4125a4eeb1c"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "2b3e6084c838f6af25b463ea0750fd05"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "e5e98c7097b7ac56b873c1ad5b9d9ba7"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "3964c1044a7b7dddafdf8db89253ce77"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "9a4d06df936efd9caa63aa1b56e6ce4c"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "48c8ac0a7ef2619ef596037f2e1150da"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "a19f8817836e535e555ca904c4c74d5a"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "dc2a48bc390f7533ab9d82b1dac074a1"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "639348d125e4da17565c30538d330caa"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "d9df4897a112463841d4ef779e06dc58"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "e50edc51900a4318d857a489bc62730d"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "38bb4fbf5d4af5143be51a83120861a0"
  },
  {
    "url": "partner/index.html",
    "revision": "66d4f1ff57092c05b75070b5deb9127b"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "c4d81cadf2a1353405e060732c1ed092"
  },
  {
    "url": "projectteams/index.html",
    "revision": "a65898873eab488981412a6c13f700f6"
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
