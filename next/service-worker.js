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
    "revision": "943f7048523a15fbcadfc16e10bf761e"
  },
  {
    "url": "assets/css/0.styles.aec528bd.css",
    "revision": "b7964275bdf3217f671f6c392b4c5bbb"
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
    "url": "assets/fonts/fa-brands-400.13685372.ttf",
    "revision": "13685372945d816a2b474fc082fd9aaa"
  },
  {
    "url": "assets/fonts/fa-brands-400.a06da7f0.woff2",
    "revision": "a06da7f0950f9dd366fc9db9d56d618a"
  },
  {
    "url": "assets/fonts/fa-brands-400.c1868c95.eot",
    "revision": "c1868c9545d2de1cf8488f1dadd8c9d0"
  },
  {
    "url": "assets/fonts/fa-brands-400.ec3cfdde.woff",
    "revision": "ec3cfddedb8bebd2d7a3fdf511f7c1cc"
  },
  {
    "url": "assets/fonts/fa-regular-400.261d666b.eot",
    "revision": "261d666b0147c6c5cda07265f98b8f8c"
  },
  {
    "url": "assets/fonts/fa-regular-400.c20b5b73.woff2",
    "revision": "c20b5b7362d8d7bb7eddf94344ace33e"
  },
  {
    "url": "assets/fonts/fa-regular-400.db78b935.ttf",
    "revision": "db78b9359171f24936b16d84f63af378"
  },
  {
    "url": "assets/fonts/fa-regular-400.f89ea91e.woff",
    "revision": "f89ea91ecd1ca2db7e09baa2c4b156d1"
  },
  {
    "url": "assets/fonts/fa-solid-900.1ab236ed.ttf",
    "revision": "1ab236ed440ee51810c56bd16628aef0"
  },
  {
    "url": "assets/fonts/fa-solid-900.a0369ea5.eot",
    "revision": "a0369ea57eb6d3843d6474c035111f29"
  },
  {
    "url": "assets/fonts/fa-solid-900.b15db15f.woff2",
    "revision": "b15db15f746f29ffa02638cb455b8ec0"
  },
  {
    "url": "assets/fonts/fa-solid-900.bea989e8.woff",
    "revision": "bea989e82b07e9687c26fc58a4805021"
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
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/courses/vhdl-adder.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
  },
  {
    "url": "assets/img/fa-brands-400.0cb5a5c0.svg",
    "revision": "0cb5a5c0d251c109458c85c6afeffbaa"
  },
  {
    "url": "assets/img/fa-regular-400.89ffa3ab.svg",
    "revision": "89ffa3aba80d30ee0a9371b25c968bbb"
  },
  {
    "url": "assets/img/fa-solid-900.ec763292.svg",
    "revision": "ec763292e583294612f124c0b0def500"
  },
  {
    "url": "assets/img/general/portrait-placeholder.png",
    "revision": "4788048f319dc48101678d9e69f5077e"
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
    "url": "assets/img/partner/ctu/lecturer/lenka-lhotska.png",
    "revision": "0b1695ff77feec156a97c40a007ef777"
  },
  {
    "url": "assets/img/partner/ctu/lecturer/martin-macas.png",
    "revision": "8c139d8888625a4ef9898b797f92d4b9"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-1.jpg",
    "revision": "2009674f2ef164e6d70e65e7de9e8862"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-2.jpg",
    "revision": "1cacabc550cc227647f2e5b2d29faebb"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-3.jpg",
    "revision": "17713de74a732cbce1588ad714e0cf2a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.jpg",
    "revision": "01662dfd145e8afdf12e0916a2778791"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/martin-deinhofer.jpg",
    "revision": "50e8b7c92cc864af957eb0fd6f4212d7"
  },
  {
    "url": "assets/img/partner/uastw/uastw-at-night.jpg",
    "revision": "bb98ed986758d05549ae03342857dd73"
  },
  {
    "url": "assets/img/partner/ukim/campus.jpg",
    "revision": "3518a28279ececacc090c10fc7d29aec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/andrea-kulakov.jpg",
    "revision": "2a5323f34cf5181ba6d5837bdb10947a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-chorbev.jpg",
    "revision": "b2f324317d75d740e0bb3772e9c623c5"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-kitanovski.jpg",
    "revision": "b519c89fb08e7c611b0dc89b9516dc5a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivica-dimitrovski.png",
    "revision": "3ae6ccfeadbcc4713537e332cd738cec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/nevena-ackovska.jpg",
    "revision": "92f3a6441f15910cacd0a88acdcd9317"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/petre-lameski.jpg",
    "revision": "a0f4909a7ca9b9b40811a66559b4fdc4"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/sonja-gievska.jpg",
    "revision": "ff8f5610c600379402d4f0e2291446a6"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/suzana-loshkovka.png",
    "revision": "431ecce02384434025a3c717143c5da6"
  },
  {
    "url": "assets/img/partner/ukim/people.png",
    "revision": "d0e8b198fb189c285b5376af4b52719b"
  },
  {
    "url": "assets/img/partner/wit/lecturer/brendan-jackman.png",
    "revision": "c0469cbd2ffe4e0fe85fb46c04d8d4d0"
  },
  {
    "url": "assets/img/partner/wit/lecturer/frank-walsh.png",
    "revision": "aaacba8bf03192e709beeb02a1ad6d6b"
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
    "url": "assets/js/1.67c993ee.js",
    "revision": "3ace680cb404a106a0cac039bde8ad48"
  },
  {
    "url": "assets/js/10.011c3dc0.js",
    "revision": "71e1e5bf2407fcef2080bcaf3d3b85ed"
  },
  {
    "url": "assets/js/11.d82cf4d0.js",
    "revision": "472db4b9fd7288080eb8e10e1f5f7f35"
  },
  {
    "url": "assets/js/12.0982158d.js",
    "revision": "b24d9f21121b2bcba5b75a42fdc55ff9"
  },
  {
    "url": "assets/js/13.3e37611e.js",
    "revision": "7c9a74bf7d60eb65956fddabecd2908b"
  },
  {
    "url": "assets/js/14.7a9cb57d.js",
    "revision": "3b5e26fe8779895aaa5a89f9f1a7c7be"
  },
  {
    "url": "assets/js/15.bd2b9fab.js",
    "revision": "7642bbe6d3ae23b6b1f28b6469ee1f8a"
  },
  {
    "url": "assets/js/16.4f0d3bf8.js",
    "revision": "c516adedaf1d04d335456337fa48a8b6"
  },
  {
    "url": "assets/js/17.8379dc65.js",
    "revision": "5b89080e9ef0a2c21ec8c9735f3d6dcd"
  },
  {
    "url": "assets/js/18.1be86fda.js",
    "revision": "134a84610c73d4a39fa09df165188ab3"
  },
  {
    "url": "assets/js/19.6574ac7b.js",
    "revision": "164015f11f17de862e3c19e3a2f10d9a"
  },
  {
    "url": "assets/js/2.1c1876ba.js",
    "revision": "0c834a9cc3634f34f91fe9550c151cf8"
  },
  {
    "url": "assets/js/20.9a258f81.js",
    "revision": "7a77f6c6bc83c05e291e584f1858608c"
  },
  {
    "url": "assets/js/21.f1548b21.js",
    "revision": "7bed4bf8f12920e1e1df929b78d061d9"
  },
  {
    "url": "assets/js/22.2630075b.js",
    "revision": "0ec7d871bf1ff890bde0d51241b098bd"
  },
  {
    "url": "assets/js/23.0a9255d3.js",
    "revision": "61613a7bcbd8fd52cfc424f1967e6477"
  },
  {
    "url": "assets/js/24.d90623bf.js",
    "revision": "44b1cf3fb220ea8024c689efba787210"
  },
  {
    "url": "assets/js/25.edf63e42.js",
    "revision": "6c7929f77480e25a6257205c1c4d6d5b"
  },
  {
    "url": "assets/js/26.328bab86.js",
    "revision": "7bd9ae6d58f8939686d60e1fc13e8d0e"
  },
  {
    "url": "assets/js/27.9c7962a9.js",
    "revision": "96378e2b1a6c39dad9793429812243fb"
  },
  {
    "url": "assets/js/28.74f3301e.js",
    "revision": "442037acd085a6a46166f7f77f734c54"
  },
  {
    "url": "assets/js/29.e63853aa.js",
    "revision": "c8f6f985fa2f885f73c9f90e81d182f3"
  },
  {
    "url": "assets/js/30.e18553e2.js",
    "revision": "fd3ef6c4416ab68699efda628a5c07ab"
  },
  {
    "url": "assets/js/31.0bb62b72.js",
    "revision": "8fede7f8a6148691118cea86392e421c"
  },
  {
    "url": "assets/js/32.5c4889c9.js",
    "revision": "03e67594665e553559e14864f5e18694"
  },
  {
    "url": "assets/js/33.bfa10bed.js",
    "revision": "c259020d11efaa78aa78d7dbf179eb91"
  },
  {
    "url": "assets/js/34.723977c2.js",
    "revision": "9420838882d1b8e43e137471252e1f87"
  },
  {
    "url": "assets/js/35.35cdc32e.js",
    "revision": "bc06eae63c0193d35ff533576801c2c2"
  },
  {
    "url": "assets/js/36.fdf1b9eb.js",
    "revision": "fd49a3a89d6745282fbee2fbdd1c11a6"
  },
  {
    "url": "assets/js/37.ddd907cd.js",
    "revision": "f6867891cadb335296e0f76230785059"
  },
  {
    "url": "assets/js/38.d8432ba6.js",
    "revision": "aad37c901483842e6c3d0f30ba3077ac"
  },
  {
    "url": "assets/js/39.cbfc5c49.js",
    "revision": "36b58d80f5411386a747469bffc8e406"
  },
  {
    "url": "assets/js/4.182bd845.js",
    "revision": "2298c1727333d125278abd5d2ac3c045"
  },
  {
    "url": "assets/js/40.27a6c5bf.js",
    "revision": "cb1668d3898cc51c51cf30a92e7fde0b"
  },
  {
    "url": "assets/js/41.f59833c9.js",
    "revision": "df619cd3ba08d5574ec25a7192a1fb3f"
  },
  {
    "url": "assets/js/42.f80e83eb.js",
    "revision": "c727ef6016e7c034df3073a99ac45993"
  },
  {
    "url": "assets/js/43.53f66e8b.js",
    "revision": "d199745d585edbc4addd246754da0a20"
  },
  {
    "url": "assets/js/44.263c02b1.js",
    "revision": "ce049a22bb101f09c5480ff1073a5952"
  },
  {
    "url": "assets/js/45.5ebd8cc4.js",
    "revision": "98f9a0c2d408d0a0e7537993ee196f52"
  },
  {
    "url": "assets/js/46.119f2ceb.js",
    "revision": "d5a62a3e94e1f88d363ddc4ad2f4c2ec"
  },
  {
    "url": "assets/js/47.1f5a5bdb.js",
    "revision": "10fdc387f6a15fe670a559e966b12829"
  },
  {
    "url": "assets/js/48.cd95c0fa.js",
    "revision": "019113951482f0036a68aea6a64dd5d3"
  },
  {
    "url": "assets/js/49.7a873c9f.js",
    "revision": "51955c7429f9c824e6951b788fcd7695"
  },
  {
    "url": "assets/js/5.f86645e4.js",
    "revision": "e2133689fea6ffe669cf1f45402c5cb2"
  },
  {
    "url": "assets/js/50.8eb67305.js",
    "revision": "45f24a249a1e4cb1294ba780f5467bb8"
  },
  {
    "url": "assets/js/51.46fcbbd8.js",
    "revision": "a447ffee2bc78926d62b34cd0a87bfea"
  },
  {
    "url": "assets/js/52.c75ebb6b.js",
    "revision": "c114e6ce8c26b420377724e138c20398"
  },
  {
    "url": "assets/js/53.7cdad83e.js",
    "revision": "6d2a24ba18c3ea0f8c68767a9dd34792"
  },
  {
    "url": "assets/js/54.7ea6fe58.js",
    "revision": "b341017fc9ca685d0411904a88300e9d"
  },
  {
    "url": "assets/js/55.682b64c8.js",
    "revision": "a1e8a880fe191a8b524b701be32414f0"
  },
  {
    "url": "assets/js/56.b6bdc5bd.js",
    "revision": "7c026c00d2376067662b7d14873c6397"
  },
  {
    "url": "assets/js/57.936b894c.js",
    "revision": "a8dff9f1d2797400fae9546ea18518d1"
  },
  {
    "url": "assets/js/58.20fbbb24.js",
    "revision": "9d37fbf7a91e284af51e2b452938af80"
  },
  {
    "url": "assets/js/59.4ef3cb88.js",
    "revision": "d0ba0d1ad62d0f5e3ab4f87ff36a935d"
  },
  {
    "url": "assets/js/6.57f3cc43.js",
    "revision": "f6fc10b7e7b95c1385e204e467aaaec9"
  },
  {
    "url": "assets/js/60.22c3d13e.js",
    "revision": "ad5a02225066377982c241974af50912"
  },
  {
    "url": "assets/js/61.1cc8370d.js",
    "revision": "ea4163671fb348e278f0d0b481fc47a1"
  },
  {
    "url": "assets/js/62.d3d569dc.js",
    "revision": "241cec34f664c1eeb0138fa08639bb4e"
  },
  {
    "url": "assets/js/63.6c2314dd.js",
    "revision": "fe49e8869975834f1c7ee226ff828531"
  },
  {
    "url": "assets/js/64.3ba324b2.js",
    "revision": "08ef284fd9648dcd0d56904e0413344c"
  },
  {
    "url": "assets/js/65.0a77d2cc.js",
    "revision": "4890d61edc57cc7e56595a624960ba1a"
  },
  {
    "url": "assets/js/66.f5ba77dc.js",
    "revision": "2898f3445c8b0cd7f3ac8293112945d4"
  },
  {
    "url": "assets/js/67.5500290f.js",
    "revision": "272235c2982a87b614a3cf52926ca6a7"
  },
  {
    "url": "assets/js/68.d277ed87.js",
    "revision": "8464d0fe72b30b2394598fda9828fb0b"
  },
  {
    "url": "assets/js/69.4e503a89.js",
    "revision": "dfbaacec92cb38f48ae48e44b9938330"
  },
  {
    "url": "assets/js/7.df2e38af.js",
    "revision": "4aa99ea0fc5c3842dc7519c91795d69c"
  },
  {
    "url": "assets/js/70.6ffc4ccd.js",
    "revision": "c2e45cd5d25cf4fd9e0a920f02221470"
  },
  {
    "url": "assets/js/71.8ff86034.js",
    "revision": "3b0922fe95266257d6c1cf2056b689d2"
  },
  {
    "url": "assets/js/72.d3f21644.js",
    "revision": "69846e697e0e95b1326b22576bccfdd2"
  },
  {
    "url": "assets/js/73.99f58f5d.js",
    "revision": "45eac3aa97b78a0f5e5706d5b28806b1"
  },
  {
    "url": "assets/js/74.075aabae.js",
    "revision": "6570b821b772c1f6ae56fda8e7c32fb2"
  },
  {
    "url": "assets/js/75.0d882a1f.js",
    "revision": "2308ca3ba27204a6e683899baa69d21c"
  },
  {
    "url": "assets/js/76.c370af22.js",
    "revision": "95025b490d3b981a820aad3e220d51ff"
  },
  {
    "url": "assets/js/77.27fab723.js",
    "revision": "1e5eb116aa82e83e5ab8092a3465ac05"
  },
  {
    "url": "assets/js/78.1d8d5e67.js",
    "revision": "ef1d290c119e02795058e8d5ca76ceaf"
  },
  {
    "url": "assets/js/8.f577eb32.js",
    "revision": "6e94aeb7f7601d43d580fac9ed4b410b"
  },
  {
    "url": "assets/js/9.c5ccc133.js",
    "revision": "0b16ee531b346fd7cf1c7e4568e862d6"
  },
  {
    "url": "assets/js/app.ffb6469b.js",
    "revision": "54e5ee17a308b3b5ae101e71715f197a"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "78e4f45fc23a3ef064538ebc2f147bbc"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "9fccb0bde84f0a2a47997cd53a63ddc9"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "217a133d91c93609d064351194c3b48e"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "be9a6b1501b7e973ffb650e1aa319613"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "415908424719b04a35edde317203e035"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "d8f8f3d3e09cc677126b929b5d01377b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "29e3fd9d6f8c1d0547e5b4978b42afee"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "a737f3b78544bf9d480e85972527180e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "87379830c3cbdded3687f19c8bf18371"
  },
  {
    "url": "courses/index.html",
    "revision": "22f28c6835f507a07a9f051124fe6958"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "b98632d9ca7443548556cc0c508cd946"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "e68a703ea7ec46b04d7e83e5c81d02a8"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "80b73adb969bea553897ff4bdddc1e24"
  },
  {
    "url": "courses/template/index.html",
    "revision": "4d68c0ed524c9ebae79582bd7b61b132"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "7f992d38da90d15c585449e09f1c52ce"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "4e1c0e9179d85e942b1e930ec09a1b66"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "f754ea6655467910be53ab6397b67fa6"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "44978c3286527ab1668c0cc0ff6c7680"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "4e36692e23f4cb3a9a4680745d0f988c"
  },
  {
    "url": "index.html",
    "revision": "495e41529d76f36c5d13080c658f3904"
  },
  {
    "url": "studyathome/about.html",
    "revision": "186a8b974a92c721af7ed9f0d93e072e"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "85154250a818a3a9bae3496ce352568e"
  },
  {
    "url": "studyathome/help.html",
    "revision": "110615df2701e4764dd1bc740ae9999e"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "3226cceac66af266b71df9910119f1e8"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "6ea02527d3957db5a0e4de27039c3a4b"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "46b42fe81f7132798e3941c4fe11bd5d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "3f0685b6b79e4be01815000cbbcacfdb"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "b40f73d99297ccf09abfc3c5aea6f0d9"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "6cc5cf480198dceec3b73c3387c0eef8"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "496c85b7b4432b3cdd2bc996da5b8fa9"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "ff6509261dc68db0146d412f581acb21"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "63948a6fba2c21d6c625952992feb08c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "0f60d7e6a5a31cc5d772e35aa04cddff"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "19e4dfac2de20b8ba4f9419846fd6ec4"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "943f7048523a15fbcadfc16e10bf761e"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "e499460141ca291d6c60217857f7ec7e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "9e377d171db1c2a047a1fb00615319b3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "1279383ff0803d05697b10dc9089a895"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "19da0c96f33ec5ac50f025b38162dde7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "ecbf4a3160eae149962ce5a6afbab78e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "aa9aaf2e8940a2751631f624199177fa"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "2e80fe5cc55b413ec16b292f2e6754fa"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "658d5e0ca8077fc3f95b46cdaa7ef82e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovka.html",
    "revision": "a30231c7ee7da479fc5b8892822a53ce"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "943f7048523a15fbcadfc16e10bf761e"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "047b3ec379fdddc26dffd9b6863cab88"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "e2c33f844b58615cc80eed718da962cc"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "2c9ea9aad3046ff2db47f1f00200b346"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "2159a19856729524666304c0fed9c0ce"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "fa0bc7016185fcdf0de6b5fa1c7b5481"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "fa03fff35ac01708b530f4e014f148ae"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "a3cd0713ab5c581725bc971fa190076f"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "a295d7ec982b0001d4d1471995ab27f4"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "5f9e40f9791d1045648f667c7cf723ec"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "7f6e50135286711b5086ef0dbeae1fb5"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "dd96ca634db111bab71a88898d944b57"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "96816e4af4f1d1163d586368427c2001"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "f99361dd166e9fb6547e18f11fcae09a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "aeeee4083c444763871f8233ece1be91"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "2099d5667840eb9eacad48407badca92"
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
