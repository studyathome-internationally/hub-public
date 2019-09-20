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
    "revision": "dea5ddab15997d7df1db2fc687b1e5d9"
  },
  {
    "url": "about/index.html",
    "revision": "5b3988359b1ce9d8e23e9a11d2eebb00"
  },
  {
    "url": "assets/css/0.styles.535e87e0.css",
    "revision": "34842a1e5bd35f0bb0f9a9ea78984246"
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
    "url": "assets/img/partner/partners.svg",
    "revision": "7aac27559dd4d67df795f33ced45b0df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e281c407.js",
    "revision": "6c44e1701504a2571d183497ddae5601"
  },
  {
    "url": "assets/js/10.50a194c5.js",
    "revision": "862a7c2b8bd9691b39bfcbc436ac2557"
  },
  {
    "url": "assets/js/11.143904f9.js",
    "revision": "1221fa334818e3f0647f93a4ab97a905"
  },
  {
    "url": "assets/js/12.1fb6dac8.js",
    "revision": "41e4966e83a99a41e8130a4e55820027"
  },
  {
    "url": "assets/js/13.fc1863d7.js",
    "revision": "d720bcd25e9faf39141761a9a66e3e3e"
  },
  {
    "url": "assets/js/14.f6504c5d.js",
    "revision": "98f7dcd309bb30dd6f5a005d86d74057"
  },
  {
    "url": "assets/js/15.43c1c13f.js",
    "revision": "91b16b54b0f9dcbeae23b881ea7df2a0"
  },
  {
    "url": "assets/js/16.493eb5e5.js",
    "revision": "84d7966703768d5b30a8260a66af1dee"
  },
  {
    "url": "assets/js/17.164c8e48.js",
    "revision": "8a6e6efe65638abb66222c68071684c7"
  },
  {
    "url": "assets/js/18.4b32f8a7.js",
    "revision": "46c5a967d7a96d1927daa431ae8a5fcb"
  },
  {
    "url": "assets/js/19.cb021685.js",
    "revision": "f6066b86ea5f2998331923b483472148"
  },
  {
    "url": "assets/js/20.4716bbc8.js",
    "revision": "4e22f51bf5195b8e6823158a407fb4da"
  },
  {
    "url": "assets/js/21.ce5d0e57.js",
    "revision": "81351cc21743a905c6356f4b08c94cea"
  },
  {
    "url": "assets/js/22.6c5a0b48.js",
    "revision": "532c88bb0b006c9398c99ae40c05bc04"
  },
  {
    "url": "assets/js/23.ece19edc.js",
    "revision": "849ee51452c80ac046995e01f3a6aa18"
  },
  {
    "url": "assets/js/24.57ef1eb1.js",
    "revision": "0c72fc352c5ca120100bd9353ee5e92a"
  },
  {
    "url": "assets/js/25.de1935f6.js",
    "revision": "5ee10088147084867ddecd6cdabdef31"
  },
  {
    "url": "assets/js/26.c8071534.js",
    "revision": "a6d25e6697348e17a164fb840ec16a32"
  },
  {
    "url": "assets/js/27.1f5d48f7.js",
    "revision": "77b96cc827d711ecd6b358e5ce2443ed"
  },
  {
    "url": "assets/js/28.5e0174bb.js",
    "revision": "0e033e8e5902d1d20394e0e0186ae480"
  },
  {
    "url": "assets/js/29.a58a8f3a.js",
    "revision": "6ad954dea23ae89dcbd89ef3fbba2a3a"
  },
  {
    "url": "assets/js/3.15e3549e.js",
    "revision": "e0b8fea4e08ac59524244b4120a12535"
  },
  {
    "url": "assets/js/30.d28bc7b4.js",
    "revision": "1cec76dcc636d0b69352a2c64ed43a3e"
  },
  {
    "url": "assets/js/31.d3b32afd.js",
    "revision": "7a88b62955ae03551f6e774e5b9810e6"
  },
  {
    "url": "assets/js/32.80dd9dd9.js",
    "revision": "351cd2579e7d69a8b7f4f1022b672d2b"
  },
  {
    "url": "assets/js/33.0706c806.js",
    "revision": "ab06b949af1af5afee0efd16934b7ab9"
  },
  {
    "url": "assets/js/34.155095b4.js",
    "revision": "1d586febc91c2657411c758beaf958d4"
  },
  {
    "url": "assets/js/35.113306b5.js",
    "revision": "736a73da60382013759e5e603243f8a8"
  },
  {
    "url": "assets/js/36.db4cdee3.js",
    "revision": "b3d128b07ed7737d0d640672e054b088"
  },
  {
    "url": "assets/js/37.aede9af9.js",
    "revision": "71b44eec1e8d6f513eb7f9dc5100c6b4"
  },
  {
    "url": "assets/js/38.671120ff.js",
    "revision": "7164d85c2c2b4f85b32facfbf5badc2e"
  },
  {
    "url": "assets/js/39.4c96f5a7.js",
    "revision": "a9a02030876ffdd5fb113eac06389420"
  },
  {
    "url": "assets/js/4.4b296609.js",
    "revision": "ec7a14be3c4ec7b521d181674af81394"
  },
  {
    "url": "assets/js/40.5cde2421.js",
    "revision": "a280ace4ddb321a890e088a63ae96c68"
  },
  {
    "url": "assets/js/41.ce1e2f7b.js",
    "revision": "c0b169efbdb8125c3e44e5ff57d7c324"
  },
  {
    "url": "assets/js/42.0533f34e.js",
    "revision": "9a275763ed51a8a9649236f8927ec285"
  },
  {
    "url": "assets/js/43.fbc09ced.js",
    "revision": "f3e1a0ec839635d563f3f7253d82d437"
  },
  {
    "url": "assets/js/44.3e938b53.js",
    "revision": "cbe0351eadf096a9045c2183b4d1d71e"
  },
  {
    "url": "assets/js/45.9bf23972.js",
    "revision": "cacab696182674f8ad36212d3445d509"
  },
  {
    "url": "assets/js/46.87e36bb9.js",
    "revision": "60bd291d314fcf75b58dad52b7e9b0de"
  },
  {
    "url": "assets/js/47.9fbd5630.js",
    "revision": "3110b68c2268cb49f09411c9e3280e1e"
  },
  {
    "url": "assets/js/48.517ad8e5.js",
    "revision": "495665008686f45c7b27ab1fdf6a6bcd"
  },
  {
    "url": "assets/js/49.14281372.js",
    "revision": "a6b80bc45947f18fb8f0cae8d6c0fb14"
  },
  {
    "url": "assets/js/5.b35583b0.js",
    "revision": "f451b24f86b8f901b3251022dbb75f72"
  },
  {
    "url": "assets/js/50.6e78409f.js",
    "revision": "a5f7d3be37c3ca78fe89b9d36c911a81"
  },
  {
    "url": "assets/js/51.56bba418.js",
    "revision": "aa477369cd3a674fec878ee1acc414b8"
  },
  {
    "url": "assets/js/52.26ec8c85.js",
    "revision": "534b2281c5cf746f34d30f51f91e6aa1"
  },
  {
    "url": "assets/js/53.a2557f1f.js",
    "revision": "5fbffcb9f4a5963c4a524dbbc7d36c2b"
  },
  {
    "url": "assets/js/54.da542e12.js",
    "revision": "120c27b994e2eb557655e4701ec65bba"
  },
  {
    "url": "assets/js/55.d2bbfb01.js",
    "revision": "fd1b5d573c141e53b57e603d255f5027"
  },
  {
    "url": "assets/js/56.5b8d0fa5.js",
    "revision": "3a980a971e3c83a814dff890c58a4261"
  },
  {
    "url": "assets/js/57.965e4004.js",
    "revision": "9c46d468238ba7ac259f508e03543738"
  },
  {
    "url": "assets/js/58.5e8a185b.js",
    "revision": "61871c51704220c94c617e896e744849"
  },
  {
    "url": "assets/js/59.5ab50f32.js",
    "revision": "8e4346edd26063a03444f573e75a7aba"
  },
  {
    "url": "assets/js/6.366a8f1f.js",
    "revision": "53cf2853f8f3724b5794e995d9f4c2e7"
  },
  {
    "url": "assets/js/60.66f634cd.js",
    "revision": "f2ecf609729be2f95f2ddbc0e00d59d1"
  },
  {
    "url": "assets/js/61.47e46e1a.js",
    "revision": "b496a7764131909f45e91e0a6fbefe50"
  },
  {
    "url": "assets/js/62.9696a9cf.js",
    "revision": "44cae7a38f2cde5fdc12b8a04d02a248"
  },
  {
    "url": "assets/js/63.ea427c2b.js",
    "revision": "049de6af1fe669128a0a259ba08f1cf6"
  },
  {
    "url": "assets/js/64.e2d34aeb.js",
    "revision": "a83abd63a44783570833fc3e355df01d"
  },
  {
    "url": "assets/js/65.3400ab49.js",
    "revision": "3da92d7128488657a06af1772031bfd5"
  },
  {
    "url": "assets/js/66.0af83c6e.js",
    "revision": "3db0cedf3c1131f0e4c7e7e8f3404287"
  },
  {
    "url": "assets/js/67.8f4724f4.js",
    "revision": "665278a2e3d1d1d677aa6dd2246d22b1"
  },
  {
    "url": "assets/js/68.ef10ef9b.js",
    "revision": "a8a8d328ca21c0d92caf66ff89282d4c"
  },
  {
    "url": "assets/js/69.c515dfb2.js",
    "revision": "ecdd5a76948ab824c75acdcd1e635e9f"
  },
  {
    "url": "assets/js/7.e4d22458.js",
    "revision": "51c9ca46fcf5da31a6664bb5d098730f"
  },
  {
    "url": "assets/js/70.96385b6e.js",
    "revision": "dbccf0db1e243021a9bd3ce2f3cf56a5"
  },
  {
    "url": "assets/js/71.c0174bee.js",
    "revision": "dc9991d400e1d3c7c6c946b4c852660e"
  },
  {
    "url": "assets/js/72.85651d4c.js",
    "revision": "56e018ef0b2f1a932abb0f3f1841c323"
  },
  {
    "url": "assets/js/73.673edcd9.js",
    "revision": "eed6085d610706090ec08d38e1f7f4c9"
  },
  {
    "url": "assets/js/74.6e2b165a.js",
    "revision": "3fbcedecc313ae2380090a068f751ead"
  },
  {
    "url": "assets/js/75.00402208.js",
    "revision": "51b72b11db698e197d6dc959d02cb81f"
  },
  {
    "url": "assets/js/76.2afafd57.js",
    "revision": "aaf161f5f6bb09fb3828e2d0fa6c548b"
  },
  {
    "url": "assets/js/77.30a6982e.js",
    "revision": "c9e04ac8e9c4546e66c1fb24085c60be"
  },
  {
    "url": "assets/js/8.9bb53cc5.js",
    "revision": "a1cf9797e3dee782eb377edbd189a30c"
  },
  {
    "url": "assets/js/9.dda53ca9.js",
    "revision": "a92f234f7792dacb6d14c1d368236c2e"
  },
  {
    "url": "assets/js/app.fe3f725f.js",
    "revision": "0c03e5ca417adb64b7916fbfd095d618"
  },
  {
    "url": "contact/index.html",
    "revision": "5182b1fca03ed4363e08462f5f8e4bbd"
  },
  {
    "url": "courses/artificial-intelligence/enroll.html",
    "revision": "66ace8ca2340ffecfa08a23ce40c8ea3"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "45028bf71773497a22ffc922b86c41e0"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "e810c1cf010fa32aacbde9a6c564b788"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "26ae3763a59cf0357e2cce1359f1e175"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "223cc148b8018c3609d9b5320ec705f7"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c09ab47a571645ee2953a9948e354f1d"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "fced7f5f30807b9fe189c3d7e35351e7"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "b277ce4aa57261d7ca8889e45d7c0edf"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "9e3ce05aa2288d9f426bfa789f72f953"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "8b70b7f6687670852d6b2c68e9bf9ea0"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "7ac3949effdb641827b27a4740c68ae0"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "50e51eb526e8eeb55b0537e6059c4f04"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "c8a2ac90a20ee58d13a76b958258a25b"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "4c906a24802fba28547b7c7deaf79f8b"
  },
  {
    "url": "courses/index.html",
    "revision": "51e53d7360167c95ac076be3160cf4fd"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "da48ba6bd7fd85284f35ce5ed5f0817e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "ed3e2ec254fcdef9c9fcfef0797185f3"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "403cfb2d7cf1eaecaf01ab6d7dec4042"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a1ee948bae4ff5dfa3bfc6c8cf100194"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "0c6c4b5a705c0657058621f4efb8e88d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "3f0e403e32413fa7ece3f54a9decd4e3"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "9497b475efe2cc22830024042b3ae122"
  },
  {
    "url": "courses/template/index.html",
    "revision": "228456e8677b7f05cf4a7b63d91b65ed"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "72728067948261697965541e14ec4c1b"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "dbc0e1cb7d5bcf4aa400075be1cb05cc"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "b9f9a201e20d7709afa97b6d76c5ad5e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "402babffe0315877827a889f14bf7775"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "b73526d8b121da1a8d423bad4a035fe8"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "1d08221e2b3fca69baa93a8b1d17f969"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "31bc1ef18cbc95220c6438dbb0ab88a5"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "4cffa7814059845905a2f37710f1508c"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "04c13be33ecd13c07245b104057ae0bd"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "baf63d5502fa896a488b9c57ed9a1e14"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "3447ae2a09e219f037294372c5288583"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "1ff81a1f60526ba63fcc3c0ccdec474b"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "83961e7c32ec633a8f228c0ee1e0f21e"
  },
  {
    "url": "general/enroll.html",
    "revision": "070c6469ed92e740cfa85496a39acd86"
  },
  {
    "url": "index.html",
    "revision": "9ba21ba8e714237d99b1e5b8ec7227b6"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "a37b1ffd9e7e3c58171429b4261f3b8e"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "2001197a4545776240846f10042135d1"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "97c07c3cb20398f7f8679c7dc90ef900"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "9b53da62bf4d3caa18e6c10f6a13e47c"
  },
  {
    "url": "projectteams/index.html",
    "revision": "dbd0db8c0073d9b428913727f01520bf"
  },
  {
    "url": "studyathome/about.html",
    "revision": "048b36fdc4c6221aa1ab018e0cd50a50"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "33c2ecffcc14d42a8083de88ed9e2383"
  },
  {
    "url": "studyathome/help.html",
    "revision": "3e9e0c946d18e568ab6727cbcdb242e5"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "664e05b467eefea4185809b08ce02a09"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "9114c0eefcc245f2997c3db09c7d4627"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "2a60a778ab85cf7e18f5129b3f639194"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "bd990e68c9faddac8e2090f931b99841"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "41ce9d2b7b1a6a5c7dd8a41dcf0e4f5d"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "d4c1dd6d77a7d690149c91a00cca4b1b"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "c960866e4d0092a326ebd110b6407e02"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "af02b3aa7a47a2a3c04dacec25c7958b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "5612768b435e33d4e260ad15ee03c8a5"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "c2c47b2b6f7a6dd75c106182110bdb4d"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "e1c24421cc72eaf34c7ef6bddf3a63f3"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "e6e2b3b061ec54afa92b1154f9107352"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "38dec650f880f79b40e9a8adcba93760"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "ba767fd3eaf9a50ccd508de40e3197e3"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "442f028376b8094e714154b34c8b75be"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "96eb2e02d56a39c0ff3f02a99412dacb"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "85f5479a49858e696e9d3871d0bd75a3"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "e11ae7c68de6251e93736210d6772e08"
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
