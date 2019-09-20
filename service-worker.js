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
    "revision": "3c2b48e48f3172094cdef37fcedbc108"
  },
  {
    "url": "about/index.html",
    "revision": "6144d9886b019009ecaff0e30e57ddf8"
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
    "url": "assets/js/15.b90bcd82.js",
    "revision": "deae77f9c825316fd7c48b343778ceca"
  },
  {
    "url": "assets/js/16.4a9a4276.js",
    "revision": "48f1c3a8eada88b0a7531d0571799186"
  },
  {
    "url": "assets/js/17.f77715ab.js",
    "revision": "f898d7890341a56c7dc8ab93c300103a"
  },
  {
    "url": "assets/js/18.4b32f8a7.js",
    "revision": "46c5a967d7a96d1927daa431ae8a5fcb"
  },
  {
    "url": "assets/js/19.17706a42.js",
    "revision": "381d7562cada4f93e392381f82618f28"
  },
  {
    "url": "assets/js/20.8a4eb2d1.js",
    "revision": "f3d07373a4dae7da74b6b20a7523b676"
  },
  {
    "url": "assets/js/21.ce5d0e57.js",
    "revision": "81351cc21743a905c6356f4b08c94cea"
  },
  {
    "url": "assets/js/22.6ea5690d.js",
    "revision": "b3dce682624e0e325b5ac24c9cc99d85"
  },
  {
    "url": "assets/js/23.9d4f1c74.js",
    "revision": "42d59451873dfc992fdcf12b69641a66"
  },
  {
    "url": "assets/js/24.c38f3ec9.js",
    "revision": "df1386fdaac7c7b0d10a82ee4c7a5382"
  },
  {
    "url": "assets/js/25.5104dc35.js",
    "revision": "431d0d3c461b3efe6ab7f157e7c8bfb2"
  },
  {
    "url": "assets/js/26.c8071534.js",
    "revision": "a6d25e6697348e17a164fb840ec16a32"
  },
  {
    "url": "assets/js/27.94dfeffb.js",
    "revision": "1b508abd61020237b1e88f63de2737cc"
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
    "url": "assets/js/32.ac71f4b3.js",
    "revision": "3c36b7d864844fc0268d9a80e993a3cc"
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
    "url": "assets/js/42.e7c259ee.js",
    "revision": "4dd94b0dd8042c82f558ea16a33aa86d"
  },
  {
    "url": "assets/js/43.7c1e02e6.js",
    "revision": "296923f3f368a75d31231fcf9c96e67a"
  },
  {
    "url": "assets/js/44.a9726e05.js",
    "revision": "6a99a2c4ace674ff076ecb235e889e29"
  },
  {
    "url": "assets/js/45.64e756f7.js",
    "revision": "5f7241d5784e2e3c7c3017864a38d558"
  },
  {
    "url": "assets/js/46.54e2c142.js",
    "revision": "c956b50cec4b02f7f110b13de3a5c198"
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
    "url": "assets/js/52.99a6d33f.js",
    "revision": "3b04aecd51dbceb214b1e2323bce5670"
  },
  {
    "url": "assets/js/53.0671d2a9.js",
    "revision": "e89e571ce0b2edba5544df9c1ba19bee"
  },
  {
    "url": "assets/js/54.f14b1b8b.js",
    "revision": "42aecd37c760b8a71786acb45c912486"
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
    "url": "assets/js/59.75d7292f.js",
    "revision": "f503cf5593ed655092fc0d58d7f36079"
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
    "url": "assets/js/68.7af286ed.js",
    "revision": "1a307017ceb9cc1ccb00f2ae11730ad4"
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
    "url": "assets/js/72.a4a971a9.js",
    "revision": "826ed66a008244addc0d3f39b80ee37e"
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
    "url": "assets/js/app.238f52b4.js",
    "revision": "71542aa4a5d0a372a486186db35f3fa6"
  },
  {
    "url": "contact/index.html",
    "revision": "be7c490956ee601048c146bdfc4aef98"
  },
  {
    "url": "courses/artificial-intelligence/enroll.html",
    "revision": "60b4498781de1fb53c4dd5dd005813b6"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "d7f135360befddf310f7eba9c15e7e3b"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "51a83cb87fb83bb88bee675b11d2e418"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "ea31307e51d2a7cf9debbd6756f901b3"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "659f82cb99f9bf1445b299b99e6242f6"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "513e988dcbabc1dfae6ec08dfa37f9f1"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "996a5dc37db9b3d52c8f65a44a710663"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "c99c7a2df9608d345217596a3314ad4a"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "7c85ac3f75226c4418d441698f0e83a7"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "50fe786ea7747e37f311ddaa61d549d4"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "be100aa21af607b79ebf5821cf868fa1"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "019665f9784263954c03715af93bbbb0"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "d8d9725a5da75640a50c909a65dd29d0"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "560453cd5aaa970985bd270a07bd69aa"
  },
  {
    "url": "courses/index.html",
    "revision": "2ce8da805f58a781c001493dddaf81f8"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "24fedee30cd2f450bdb342c117606726"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "740f4c7737a59661cabe90e186fb1e84"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "0e39903e259f9a7087c314d5b636014d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "3023fab07bc145d77bd113ea077b012f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "e1323c3f6d35c5c803981880ed086bb9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "2a1421f6b47f9bf61a9f80d344b18653"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "ab88ef7bbe9a95c9a324989d6dce9107"
  },
  {
    "url": "courses/template/index.html",
    "revision": "0f5d244132b550b9f50e0b67e32af48b"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "bf6264a0ab7ef635391450a3bc0fcbe4"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "dee6a5d06d07c97c8f9339976f3a9e1b"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "5a39eee97fb850971a213c7db56d619f"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "2662d0f39bc753024a45bfc9377f9dce"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "fe55d1ac95a22b48c5b1a072eb212315"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "bff71ae58de96c1f065261d5eaefb22f"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "9fbe7dcb7948c3756c895c697f8484ac"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "59c6d45d98d43693757241f6b83b8074"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "63f91ff914c709a45925e75e536df6f5"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "ba82f327d70673ca42f76ef77ccd0637"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "69ffe4bd3a32510ccdaa082e6686316b"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "ff5eab8b6a0e16533ef953f9d01c978f"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "95051ef35b92e67cbaa3c9c93eab0a68"
  },
  {
    "url": "general/enroll.html",
    "revision": "6189cf0e42139b23eae0869efb7f1ebf"
  },
  {
    "url": "index.html",
    "revision": "cd642b5e875b9b7ee21b668453362d56"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "54fa160457b42e97774c87ce3d3ece09"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "faadaca7a853a896feab39b24f4814d7"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "37dc6544d727bb838958472814077cf3"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "48b7cde325aecbc29794903d630d49ae"
  },
  {
    "url": "projectteams/index.html",
    "revision": "80a3059c3a49d2b00b444eeaa97619aa"
  },
  {
    "url": "studyathome/about.html",
    "revision": "62f742ded12a174c0f7eda1539f7a12a"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "1b839353b3eb46ce73ce1ea7bb84d2a7"
  },
  {
    "url": "studyathome/help.html",
    "revision": "8d27f92192c375cac80253f1faf1f51c"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "bc32fd500a6b57b5a13bb745728be586"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "fc2a8908c34fe2b763868606ffd7b312"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "9a2baf780951a2404aad19238087d177"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "9f3f24311958d909e3a76aa8839899f2"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "3035a728c228f5c6f38f8a8ddc2f2059"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "d3a379e6a3c8dfaa3241488069ad7631"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "57a91f1724f2486bef7701c05ef1d259"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "bbee451f36835037c4e6a1dfecf4019d"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "ee48556038a28c8d14ccedf22cbba9ec"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "1fce7906ffa773df7faa30b01d64c42d"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "16125525c4faf55fb7bd2565933b003a"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "0496bc2e89071234984879ed4de0fe63"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "b0485488c2f41984644304edbb8c14d2"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "04575fa9d6f6b9929a8f6349c959e2be"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "3f34f3bb92f1963bb87d5b79d7a7bf65"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "105f74ae24705e34eb15c01cff643d38"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "bfba9d9881008d328ee7ac656ad4d108"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "4550426bea3093e65c0717b24de925e7"
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
