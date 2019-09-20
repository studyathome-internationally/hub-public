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
    "revision": "6b2bcdbc39ee518afc688f0ebc3cfc11"
  },
  {
    "url": "about/index.html",
    "revision": "e25cce8322464e160f33de40f7c905ae"
  },
  {
    "url": "assets/css/0.styles.e845a9a6.css",
    "revision": "995a14719ada87f7a3fc7621908c7e69"
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
    "url": "assets/js/15.083348c2.js",
    "revision": "0ed5beef56dd55f2339391e1e8e0722a"
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
    "url": "assets/js/app.3c9fc98e.js",
    "revision": "b72948b273bdbb6cfd63f7c816264bf8"
  },
  {
    "url": "contact/index.html",
    "revision": "ffcd0d33522bfe5f874ac21fc0a7af17"
  },
  {
    "url": "courses/artificial-intelligence/enroll.html",
    "revision": "979488a70e33eb41e4600038bc24f48c"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "d010959ce9662987c764ecc398e97585"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "6fdaf12304c55cf1c83198c8c2109289"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "24db643e905c2ce6e63b228c5fbdaa45"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "fbd0b8074587a1884071e511bee2be07"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "2dd0e5bba40924acb0f26d43f708383e"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "cedc24ef3843211ee6975d6f11165d5c"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "39a8504febc7389b02305fde9fa321bd"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "75cdffd180c6ab21ede6496b5b1145f5"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "cca63f8983f1e613890a48c02e26e50c"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "04f6c91aad512efc3ba13f1647a0df27"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "423ed06239c62ed4a6898d9578aca071"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "74c7fbe85403acfa11c6e03e74071ece"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "2c32d6638a85e2a592a8df79b0dfd80d"
  },
  {
    "url": "courses/index.html",
    "revision": "6aa31ccaa7b7f432249b22986d0ef1ea"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "db6d41a6b220a81a17ce68ed07ee84d6"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "21ff9ed61ff7c36820392a7ae6af669d"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "01720b6ccee50445719abc3316e178ef"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "7082d4f29447daa4d306ddb3224b399d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "9ac1cfa76adce1a4041b00b1f19284c9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "79572d2683b95b6b5746cc4142deb3f0"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "b4ebc25444ac7f3ad62f3b4906f9a38d"
  },
  {
    "url": "courses/template/index.html",
    "revision": "dad4099391d86bc26005fb3903e099ec"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "108a1994679332455885ddea183eb1f9"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "a44e65ecb0a8453594d2ee2d440ebdd0"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "bbf23c69f549d7fe6f197ab85e1ac04d"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "c8cd89f90257cd102ec994119dca4362"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "f2839b1d9ec0d729c37537558116241d"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "ff53343374f2870d972ad434a696ac9a"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "3db91103bae0aab85bd620fb504a487f"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "04713eff0d255041af1f9ff781e43dfc"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "a818aa013f5663d83b8fcea45be8ea29"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "67d14e14e9134e7922bbb6ef6ed8e454"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "ddd7369945ac2da96bcb2ca5d35108ee"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "e1479091a5dbb4e03e491206317e86a9"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "71f1b7047b133bda710b1c6ac49692ff"
  },
  {
    "url": "general/enroll.html",
    "revision": "6dd1b3b55781e755b0d92769d9320460"
  },
  {
    "url": "index.html",
    "revision": "840f3c540285057c3d11b9167be6e8c8"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "6c7269ee5b472726938051c7bee9a382"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "94d60497a755e37b56b7d2378831a7a0"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "8a99ad48ab0ca097a90e2ce69b1e79e5"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "43439d28f8ffb6e243aefeca7ffb695d"
  },
  {
    "url": "projectteams/index.html",
    "revision": "7c4ee0fb63bf7cf6f731287ea56ffac6"
  },
  {
    "url": "studyathome/about.html",
    "revision": "a940c89c6149d7065f6db7b2a77462c0"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "16a52b2d4f8372a0b1ab9e00ed152b67"
  },
  {
    "url": "studyathome/help.html",
    "revision": "40f7e1e1a7e90d1d389c558a238d68e1"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "22881bbc781d7bd2a85df60c3666e65a"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "b4cf1e781b9f961e6ebc322e6fa85eb3"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "01d9f26e5e8fd49c6b47718aa3576cb6"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "399884da6163c6ca90539c2342a0fddf"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "24fd669793bd5a5f943d48d90100421e"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "bb19303182f06d6abb75b18387b9a2ff"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "71f00d677778dcebb7c6e035b7e25921"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "f0d3ec442101f838684176f2db9de792"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "4efefbb37f09f2728425e8d9291579da"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "d5398c8b5a878fb2b8aca664fb400e90"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "7c215bf83663de15885b82721ead8180"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "537e57c37269b1c8bdc34c34ef2ee214"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "5781ea1a1dcd271c61eee5d2e80adf30"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "3f38420e4b8456714da15dc023baafc1"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "e1d6e44f0d96166fbe85edefe3cf30cc"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "28186f1d8d87bd36064437504b3ddef8"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "71c3cf64da86420a6812ea1a6e4b5679"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "3fc0553a7e0966f762ba9f92e73b3e96"
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
