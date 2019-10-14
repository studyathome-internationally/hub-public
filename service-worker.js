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
    "revision": "e82621df780a1dd1175645ab2fd614da"
  },
  {
    "url": "about/index.html",
    "revision": "45d11914f6b2bedc2883ff8cda72d62a"
  },
  {
    "url": "assets/css/0.styles.97bd34fc.css",
    "revision": "847a167a595d0dac7dc85f28c92e2697"
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
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
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
    "url": "assets/img/partners.7aac2755.svg",
    "revision": "7aac27559dd4d67df795f33ced45b0df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-workflow-all.5786ecd5.svg",
    "revision": "5786ecd54b04e678068bdd72d72c5967"
  },
  {
    "url": "assets/js/1.1ac3d67a.js",
    "revision": "4011fa691c7473879bd9c8d4e67697e8"
  },
  {
    "url": "assets/js/10.7b864d07.js",
    "revision": "a29de1aabde59b0c3efadb54b65d7aef"
  },
  {
    "url": "assets/js/11.8fe373b6.js",
    "revision": "3d8bb183f55e21a5b15b1ab048918357"
  },
  {
    "url": "assets/js/12.5717c31a.js",
    "revision": "62740ed2d507f0e6815abc0f7813d18c"
  },
  {
    "url": "assets/js/13.b2d066db.js",
    "revision": "ff1be89b295702f19f02398edc3c64a3"
  },
  {
    "url": "assets/js/14.d9be667b.js",
    "revision": "55284d9c37dacb5879a3551551d981c0"
  },
  {
    "url": "assets/js/15.0f7b1095.js",
    "revision": "a12b0b9fdd1a897c50688f975a4f002f"
  },
  {
    "url": "assets/js/16.a81d119a.js",
    "revision": "ec644611e8aea2e4ef7aaef1e2da4e29"
  },
  {
    "url": "assets/js/17.c3916ef7.js",
    "revision": "b0badfce51bfa12d001a8ae1313654a6"
  },
  {
    "url": "assets/js/18.40d910b8.js",
    "revision": "1967b036c2679abb90fbc6e07d8d8a52"
  },
  {
    "url": "assets/js/19.03a939d5.js",
    "revision": "8901d4548551c5b20fc83e7b7416defd"
  },
  {
    "url": "assets/js/20.dcba1b3a.js",
    "revision": "2412937f4d58e7c9f77aae29642421fb"
  },
  {
    "url": "assets/js/21.1b764bc9.js",
    "revision": "4b82aef81bc91430688b787389be551d"
  },
  {
    "url": "assets/js/22.bd81998a.js",
    "revision": "eb092d5ae3ca36d75ad04020dd45a5e2"
  },
  {
    "url": "assets/js/23.c87e1b3e.js",
    "revision": "da7823994102277006028b44b848569e"
  },
  {
    "url": "assets/js/24.9600bc5d.js",
    "revision": "98ab399ed3dce27b177bc4e66faf6970"
  },
  {
    "url": "assets/js/25.118433d3.js",
    "revision": "d21c9ac049470f1898ee810a98ad7f5c"
  },
  {
    "url": "assets/js/26.2dc240dd.js",
    "revision": "20ea49a8d40aed570d4917095ef00908"
  },
  {
    "url": "assets/js/27.232f5d02.js",
    "revision": "2cdeacb05abce4042395d4cfd27e993f"
  },
  {
    "url": "assets/js/28.4a452d1d.js",
    "revision": "6d4bf942dc87b23f1fd60b84e9fdb36e"
  },
  {
    "url": "assets/js/29.e197e886.js",
    "revision": "9e1c882f2d54484e97a8f296788f646c"
  },
  {
    "url": "assets/js/3.04b20181.js",
    "revision": "ae7a6fce80113738c3dd388fba588b93"
  },
  {
    "url": "assets/js/30.9dfeaee2.js",
    "revision": "e5484ddef30a837369e87eb1bc503b95"
  },
  {
    "url": "assets/js/31.1d8f3358.js",
    "revision": "bfd02744afbcb25c0159833c64feeeb5"
  },
  {
    "url": "assets/js/32.bfd86dac.js",
    "revision": "394cb11bd1797663b9fca2efcc91bff1"
  },
  {
    "url": "assets/js/33.ef237ce1.js",
    "revision": "062390810d79c726e51fc9ada95cb35e"
  },
  {
    "url": "assets/js/34.27ed6c6f.js",
    "revision": "8b5ceb5c5f545847c3044e127962f5a2"
  },
  {
    "url": "assets/js/35.bb66504d.js",
    "revision": "2b4aefee8dac98ed4aba1dcaedbb3e66"
  },
  {
    "url": "assets/js/36.18b7f492.js",
    "revision": "783b5b6086336cdf220e685285d49960"
  },
  {
    "url": "assets/js/37.3a6ab445.js",
    "revision": "990ccd4cd67ac0c997f476c472e62c70"
  },
  {
    "url": "assets/js/38.ceb13c71.js",
    "revision": "6e26d31f838225748103bf5c7c583b0f"
  },
  {
    "url": "assets/js/39.b5982b8f.js",
    "revision": "aa9f4ba07f80fd3bf4be0d0245030aa7"
  },
  {
    "url": "assets/js/4.b54bea4e.js",
    "revision": "b3cd0f3c0d148e260e05a7321d4838d8"
  },
  {
    "url": "assets/js/40.59f81782.js",
    "revision": "845049515fcf6a94b7b78f05ca3030dc"
  },
  {
    "url": "assets/js/41.5087fa38.js",
    "revision": "05aa3404e200df1439a0e556ae1b1c17"
  },
  {
    "url": "assets/js/42.11123777.js",
    "revision": "c51cf303aff16828d6be74e25b9ede6e"
  },
  {
    "url": "assets/js/43.a9f3ffa1.js",
    "revision": "221a49fa9418121d64aeeae9c61efe6b"
  },
  {
    "url": "assets/js/44.5d3731ab.js",
    "revision": "4e561abe89610390d6fc86533a64764f"
  },
  {
    "url": "assets/js/45.38bd9765.js",
    "revision": "1255aa4f4434f17ff76c2bf48650d8fa"
  },
  {
    "url": "assets/js/46.56407784.js",
    "revision": "39d06a09b94ccde5c2ad6b27c8bb25eb"
  },
  {
    "url": "assets/js/47.4b01095c.js",
    "revision": "3ccfcf0be5bce20a2a84ae9545e637c6"
  },
  {
    "url": "assets/js/48.4d24b223.js",
    "revision": "3a1d297d102e4939793f6e8b7856cadd"
  },
  {
    "url": "assets/js/49.9e2a0a53.js",
    "revision": "a0afb499d8d3b5b455dfdf5459ef9284"
  },
  {
    "url": "assets/js/5.9571622e.js",
    "revision": "48073ad337403e316822aa1c6aa6eb28"
  },
  {
    "url": "assets/js/50.5d3d6372.js",
    "revision": "8fbff2f15464acc302866f6587c77aec"
  },
  {
    "url": "assets/js/51.3c6aa586.js",
    "revision": "14ba011879809e3392c9af17b6c77da3"
  },
  {
    "url": "assets/js/52.3c705cc4.js",
    "revision": "f40bd7c761e2d5d8c7ad77601fc68e07"
  },
  {
    "url": "assets/js/53.8cf31ae8.js",
    "revision": "d4b5641814fe31bedd6d31b36e3f22d6"
  },
  {
    "url": "assets/js/54.d2b73df6.js",
    "revision": "c399c164471f706c97fc4ab3181bcb36"
  },
  {
    "url": "assets/js/55.9b308ae5.js",
    "revision": "b5be0d863042626415013238766c5444"
  },
  {
    "url": "assets/js/56.ab0de14e.js",
    "revision": "c5fb60b7970cfee0203644293be1dd73"
  },
  {
    "url": "assets/js/57.cf47ce6b.js",
    "revision": "5303761ce5c4e5f670253f76a6b1b002"
  },
  {
    "url": "assets/js/6.84c526c5.js",
    "revision": "f138c1e117c64d0ecc4c9867372cbf06"
  },
  {
    "url": "assets/js/7.98a63c95.js",
    "revision": "6149026684d8ac96ad8a6500089b8043"
  },
  {
    "url": "assets/js/8.3058b9f7.js",
    "revision": "0cf5d240eb617812d2f65f80cbe6915b"
  },
  {
    "url": "assets/js/9.7e29a338.js",
    "revision": "00c18808183588904d35dbb4aa6d0c18"
  },
  {
    "url": "assets/js/app.65a2e9de.js",
    "revision": "cf9b3f161bb4cc2b3e5d9537661c67cd"
  },
  {
    "url": "contact/index.html",
    "revision": "841b8004971b313adc2b1c1f2361fec9"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "ffa2e9953002e2195ccb9c16f2a048fa"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "57fab8b93e4890447519212719de7063"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "ae843527e4c9f35762598fe0af1bc3a8"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "404230e1e0bacd6420c11218c5e25ddb"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "9a8a601bff74fa104958e5ef4c99331a"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "a204b1e071f6af8a12f3792d7eaa8935"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e19cf4506ed1884271a452789b77194e"
  },
  {
    "url": "courses/index.html",
    "revision": "ca064a3ba43bcd6d1d0216cdbcf5844e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "c706385fe964baef047e62ddc257784c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "5c8148e48d986a23196d1d74a9bef60d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b5e98b9df1e52825771959440654a951"
  },
  {
    "url": "courses/template/index.html",
    "revision": "99bf1c93877a3c9c0a8b72002bc67d5f"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e6fed257eeb50e2726498d2daf6ea14f"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "6833a52a656cb80cd1e9d91eec23893a"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "d7e440d612dab186c92518b4665512f5"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c661a5bc2b57652cb84ee6236f45afaf"
  },
  {
    "url": "general/enroll.html",
    "revision": "400091e57240452d89df65e9779a249a"
  },
  {
    "url": "index.html",
    "revision": "c645071f267b7d400bf5c7d9d4b2edf7"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "1333ce86ff8201040c965373e2b2cf62"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "4feaab8218361d1eab09015de053b4f2"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "173a80db120c8c27b55c857a7c69d328"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "5f560ca8cc3d8ddbf2ccd0f5b14be8fa"
  },
  {
    "url": "projectteams/index.html",
    "revision": "31d399f0502397d9e87e1d34d1480f86"
  },
  {
    "url": "studyathome/about.html",
    "revision": "85de3c2d42ec3f051f0a5f947105d7cb"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "eb551fbef51038706c3ecef299bf6392"
  },
  {
    "url": "studyathome/help.html",
    "revision": "2572f36777e45b923bc98022458c2295"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "a04b31970a577e56693b92da55624319"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a74a177baf893e349cf8c55551693a80"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "f43565fa4793bf6b8419f271e997f920"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "8989792aafe8c43794ba063ca9fa045a"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "4ae3625955abeaae0b18dee791e1381c"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "bb7e3eb748647c31b6a19fa2db21ff83"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "cba3c3d4a6b57306a7902bd3651b44a7"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "c7bce84ad516f7a7117b09e74b10b115"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "7ab7bb6e2fc6ba22505640b4fa382778"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "e5b4cf980954a96a6993a56a001c68ea"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "10e377eee3745d1826a8814493dc7431"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "109ad02e5c5db1e40b65654ff1de4d01"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "87fe9d94c2c9c565e2197135996e773a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "d5d60e9c70bd9ffc4d9c42a0a350c32a"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "63372929bc4de0ba79b7f25600cda3d5"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "485183befe21378e37bd1a2ddf831545"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "8af153f9e8f059343c6868afd83502e0"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "7a5749cf9d8b91052add3266b56fdb28"
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
