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
    "revision": "d9139c081c04c5275c55bb5bb1a2c097"
  },
  {
    "url": "assets/css/0.styles.b98a6803.css",
    "revision": "b1d381f742ce0b1fc3e27602d793fd45"
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
    "url": "assets/img/logos/ma23_funded.png",
    "revision": "d6f9117b5659107e66779f18a84cf1d3"
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
    "url": "assets/img/online-4091231_640.jpg",
    "revision": "dcf9ad1035f008eb5e885d6cbb09454c"
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
    "url": "assets/js/1.dfc0792c.js",
    "revision": "2da7d74500d43c0cabe63b5080649f9f"
  },
  {
    "url": "assets/js/10.46d289b1.js",
    "revision": "9344c3212c7b229394adefe974b9042e"
  },
  {
    "url": "assets/js/11.79cc9e4d.js",
    "revision": "e2699dd008b3c4cf3abb925594875fe9"
  },
  {
    "url": "assets/js/12.05763914.js",
    "revision": "384bd480d6d9cae44a4786a957d002dc"
  },
  {
    "url": "assets/js/13.3591e148.js",
    "revision": "d3005851666b3cf11a63b6569b3e6160"
  },
  {
    "url": "assets/js/14.6a0a1428.js",
    "revision": "bc27eb03359349ea40bac800c24a2f76"
  },
  {
    "url": "assets/js/15.357f0312.js",
    "revision": "5a997771a665ff424001e3b5518931de"
  },
  {
    "url": "assets/js/16.dce86b57.js",
    "revision": "1f15a2b410ce9f2f74f6b1e5c2c838a4"
  },
  {
    "url": "assets/js/17.3dbf0835.js",
    "revision": "d1d01a1e03d03fa4dec36d7792b41479"
  },
  {
    "url": "assets/js/18.ffd61423.js",
    "revision": "216047c18edaa059abc99c41383a3008"
  },
  {
    "url": "assets/js/19.61b1c95c.js",
    "revision": "07de8b86d0d4060993b45a82207e5aeb"
  },
  {
    "url": "assets/js/20.efb33f08.js",
    "revision": "4e22f51bf5195b8e6823158a407fb4da"
  },
  {
    "url": "assets/js/21.64f31f69.js",
    "revision": "56e82858ad356af662891cdefe960510"
  },
  {
    "url": "assets/js/22.4f3a13d7.js",
    "revision": "7bfdf1101a9ca87fd21677c5d0f1bdc8"
  },
  {
    "url": "assets/js/23.671c1088.js",
    "revision": "e595232133cf9525ae109e95df768a67"
  },
  {
    "url": "assets/js/24.2e5835fc.js",
    "revision": "3c3920a1f49567212f18f99360e17938"
  },
  {
    "url": "assets/js/25.1459e8c7.js",
    "revision": "b31c938d7bb0c58a19e878a5e3347760"
  },
  {
    "url": "assets/js/26.8f70251d.js",
    "revision": "a56663c5565a4aeef112f7b224779aa3"
  },
  {
    "url": "assets/js/27.a892fec9.js",
    "revision": "134da8bfe7c46abe134ff02f5533a373"
  },
  {
    "url": "assets/js/28.436a7b5a.js",
    "revision": "39cf6ae557f3b7effd249c9fd62d3eab"
  },
  {
    "url": "assets/js/29.b7675857.js",
    "revision": "70f08e0f94e58eb5342931ec0101657e"
  },
  {
    "url": "assets/js/3.c1ab8512.js",
    "revision": "6e5b391924bfcabfaf97654f59f38f09"
  },
  {
    "url": "assets/js/30.75a31795.js",
    "revision": "f3ced3eae2f8fd6645310131ebe5a96c"
  },
  {
    "url": "assets/js/31.d21ff396.js",
    "revision": "48869978afe4bc6e2582f4d916414fbf"
  },
  {
    "url": "assets/js/32.64da6007.js",
    "revision": "7ffe99d1548e066e22370dda9abcaeea"
  },
  {
    "url": "assets/js/33.c6093146.js",
    "revision": "7a208a25eea4e78d92e78c6d16d6af43"
  },
  {
    "url": "assets/js/34.b28d207c.js",
    "revision": "f500aaf9703d08ea6b2a3187d1e99d5a"
  },
  {
    "url": "assets/js/35.0c4c36e2.js",
    "revision": "5d7cafcf352c933e0e3137020390577f"
  },
  {
    "url": "assets/js/36.b7f066c6.js",
    "revision": "c2340fb2638af17f9cc6ae0a905d514f"
  },
  {
    "url": "assets/js/37.59e54615.js",
    "revision": "8e337f5e35a038c97962d1c09841a5d4"
  },
  {
    "url": "assets/js/38.28099f40.js",
    "revision": "fef3272d518f9ee6839a3e24688b73bf"
  },
  {
    "url": "assets/js/39.5558ffba.js",
    "revision": "7f1153cab0f06e220bababde8abf3e0a"
  },
  {
    "url": "assets/js/4.397c2a16.js",
    "revision": "67088010508a5544fccade2492f7100c"
  },
  {
    "url": "assets/js/40.930fec1d.js",
    "revision": "0a5a194655bc775979d33038c3d765d1"
  },
  {
    "url": "assets/js/41.956b0250.js",
    "revision": "1da8219a7eff374157f085214c998bf8"
  },
  {
    "url": "assets/js/42.dca3d683.js",
    "revision": "198c37af8fed8b4df3349e9b158a36dd"
  },
  {
    "url": "assets/js/43.905ec881.js",
    "revision": "fb21289077ec8e810e03b7d5d1d8f9d8"
  },
  {
    "url": "assets/js/44.07e7d90e.js",
    "revision": "1f7949cb7d5e01e79648c629ef58f9fa"
  },
  {
    "url": "assets/js/45.a2fd18d1.js",
    "revision": "c2c42f6a610fbf74b4a42b68e52b7c62"
  },
  {
    "url": "assets/js/46.114742a1.js",
    "revision": "54d297f5147218eb82c95419a335d3f3"
  },
  {
    "url": "assets/js/47.f38a065f.js",
    "revision": "b219f6a905f143076761394a7eb897b5"
  },
  {
    "url": "assets/js/48.e355c445.js",
    "revision": "e462addee174c863bcfa8d73893af0f0"
  },
  {
    "url": "assets/js/49.dd255c64.js",
    "revision": "e7e045f3bd2f1fcec6c0c818a6c99e09"
  },
  {
    "url": "assets/js/5.38312be0.js",
    "revision": "2c1a3b1ffddc2831ce1314032cde62c5"
  },
  {
    "url": "assets/js/50.ed2404b5.js",
    "revision": "d21bf2d36c29f5819947c1da1ed8e621"
  },
  {
    "url": "assets/js/6.7ed05a58.js",
    "revision": "d03991b8d3e43fe88baa24982a164686"
  },
  {
    "url": "assets/js/7.1fc78155.js",
    "revision": "91f9a1adc207877deaba15ec3ee12752"
  },
  {
    "url": "assets/js/8.451c929c.js",
    "revision": "38ab7ac575ea122e25680970ac95adb9"
  },
  {
    "url": "assets/js/9.125e3c25.js",
    "revision": "faf6943e0a6f0ea180ee5f0427dd8aa3"
  },
  {
    "url": "assets/js/app.a5361f4a.js",
    "revision": "9721a130c9ddcf8c0055590e09417dce"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "ab27edf1de5d7c5aeb99f75470963ad3"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "9ea79bb1ce0a07b7dae21715844141fe"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "5a5fc233596747cda82dce9657940478"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "10d2b165f6a736a4abdf8913ec615d94"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "61ca6d21427a56b29a6493a2d9da73d2"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "3202da990d5466984fa0e4e30daec07b"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "db8809124b15aa8022057ffb055d516f"
  },
  {
    "url": "courses/index.html",
    "revision": "566297462327991da2800a41a256acad"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "6ba9fca894b3c7d4d6f576bca18b073c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "89804d4226c6c5c16d8d1a926187f125"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "eefb2307a3df96899c4a95caac6a82d0"
  },
  {
    "url": "courses/template/index.html",
    "revision": "096f758ca9192d581fcf06b2e484cc91"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "a09235a4dc2d423de0b2eae0493731d8"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "f85554743c72870807a61e10e8493f6c"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "143cf4807620196519005117e6c6e623"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "183af0f242a79214fb9ffbd44ca46251"
  },
  {
    "url": "general/enroll.html",
    "revision": "65a12012503daf2f45247ef590d050ce"
  },
  {
    "url": "index.html",
    "revision": "dcd88d7f203610bbe98986f1f01ea390"
  },
  {
    "url": "studyathome/about.html",
    "revision": "b011ca9ecef03e077075e770293a91d4"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "09f33d7bdbfd43197742a10a0338fdad"
  },
  {
    "url": "studyathome/help.html",
    "revision": "f14e9c23bc751a37a2c8bac5063ff0a9"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "0ee750f877e51b91520bfdba415614eb"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a34c5e9e640d56f9834e3f56ac517de2"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "0d472290d721ece94e2cb399422285ba"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "923e1bfcf3cbc4c9426667615216ff2a"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "66a3a00a0b78c208171a1804cdfeaee4"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "5b61d4bf2f057feca66e9844bd9b8c34"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "53f1c352e64e90403259a8c82311ce27"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "659b9454e8749a1c4d369dd2e2ce8c77"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "1a8169067a3259ec6cf1eec223748d00"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "40352a7e29f3ad57f948edfb5e8ed063"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9fb8373a96b435410aef03d8d6766a71"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "54dcaf8ad3deed541064748598dbfa47"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "abd7bbdfb008a7f92467447bd3418c11"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "5bd1b8cde1d431dea7aefb889b6434b6"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "844d77ba64b26eb91dcb806a695bc99d"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "a8c4ad24653687934b63b5d5dca78b91"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "b6e37122ca4fc1c34d1d65f1c3e8b1a2"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "657d4cfd0953dde069d4e142ea26156b"
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
