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
    "revision": "fe1b267d2d6be486f7f87cf0d664cde9"
  },
  {
    "url": "about/index.html",
    "revision": "8516f1804db9db9413dabc668aa0df36"
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
    "url": "assets/js/19.984e8f98.js",
    "revision": "fff0a7c5999c009f1f5f0b9413a18fb1"
  },
  {
    "url": "assets/js/20.b97c1fa2.js",
    "revision": "103fef220cb8d301feee18673cb07321"
  },
  {
    "url": "assets/js/21.acad0e8e.js",
    "revision": "9ef64c4e60d6576153ac7a63f30a1665"
  },
  {
    "url": "assets/js/22.04066102.js",
    "revision": "28ce4cfd0157e3fc003c57239635fc8f"
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
    "url": "assets/js/26.a9e75faf.js",
    "revision": "950529e5649eeb02d89b1482fa0386dc"
  },
  {
    "url": "assets/js/27.1419de3c.js",
    "revision": "cef22481f48ca442f3e5331a57139663"
  },
  {
    "url": "assets/js/28.5d84bf82.js",
    "revision": "b235b2f8cd0f5922c0aa0b0deef9f0a9"
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
    "url": "assets/js/68.83afe565.js",
    "revision": "0e83ea81c9657b7b6bb79975afcad304"
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
    "url": "assets/js/76.cc386463.js",
    "revision": "f85d87ae8a6a977f1fc76dbac21997d7"
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
    "url": "assets/js/app.ecd70295.js",
    "revision": "17826ab42a456ebe55a4d4700dc9fd68"
  },
  {
    "url": "contact/index.html",
    "revision": "18f9979a1e25c70871913f27eb5ba310"
  },
  {
    "url": "courses/artificial-intelligence/enroll.html",
    "revision": "f6525f08ca28845c981c088a14a6fa83"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "fda8beef71df80cc774126374a38c6dc"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "d3c39468bbd837f07b60726bfbedc431"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "bf76b9e0fa083679c7c737167d2e096a"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "71476bb6e2f41ea8c6a334714f8a3447"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "79ca84af9733a5127605c9db740499ef"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "52c1c42b7cedc781427d1a11dfa2e6d4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "4eae4e45ea928dd1fe7e7acf6aa18514"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "08ece4195c54754a76ebcba76efc9def"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "25e5b1209bdd707bc19eb5a188a84a39"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "cf2305135ac97979b7f76fcbc06a5621"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "281e199077eab13c3ec94b81fbac4a5c"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "eb235b9930dce7b597c3c8e8282c202d"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e8d8f6108096866622cfa461e1d615bf"
  },
  {
    "url": "courses/index.html",
    "revision": "228cbe77c99ff79521c39d1ab5c81346"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "50273d7729f279fe998d35e344e2a0dd"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "7b9cff4b4b3a2a4ba8276cb260e1f555"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "3578140f3f9f05957e44206fa00d2c0f"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "154bfe328747b702c7900fa968423f97"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "e0de807ed4f0b2b13c0cd0e530b3e71f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "24b1613f9390b61f1ef5b3ccd241e8a2"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "64d87dca229aee9441193deb268d3df1"
  },
  {
    "url": "courses/template/index.html",
    "revision": "f5dc7fd161754685477f94d8d2e0541c"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "453e5decb840cfe4a84aa44b6ae285df"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b5a5d198a8724dcbdec826297b3004fe"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "ed57c74fa7693fe107e5ddb6ea3840df"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "67337feec7228fc466406c9991281ea4"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "6054063f7cea5053497c02a7ed603fa5"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "87e6f8330a61e4d6bb7d7bfe91a3d204"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "bef4c69107edd4cf016757b1e6ddc108"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "43fbf4e85052fd8e257b161ad9b27ddf"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "bd08dddf2e09423610ad0fa3e5926ace"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "541c3fc852662057788a5c4f7b58e870"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "70997cbc7730fd9ac411a13c4a5cc800"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "cb3548565aad7fdaa7a3f773a76d0f91"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "14c3862c79178084ed55d9b9efd435ac"
  },
  {
    "url": "general/enroll.html",
    "revision": "0d2d2e1354c4d8c9df223aca2d0f2443"
  },
  {
    "url": "index.html",
    "revision": "db0ee3a7cbfc61e8f409dd76beb002cb"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "a609114f5f8826d8d117528746a61d36"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "b896d02d96e4d854a8303b0f6f769c97"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "a044df98673f94002e5db6c76df5f74a"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "bdc5437d2b11e2f46c485da4ce6321bc"
  },
  {
    "url": "projectteams/index.html",
    "revision": "ee92be3771f03064aefa030e92298a9d"
  },
  {
    "url": "studyathome/about.html",
    "revision": "5171a63ec473c8b9821c5a7cababa052"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "c71cc25720507b4197b777298adc61c1"
  },
  {
    "url": "studyathome/help.html",
    "revision": "653c9be46756194267d968ef571d7f90"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "49bc40ce7e420f30cf7b3e2dee118109"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "143b14c9abb92c161f376d35cf759cfe"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "995605fe28cb2c213b4f9ba36ab02173"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "65175b657b29c6a9de99aee7b788e759"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "3df0684486d38e32610d7b0e90721894"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "48485177955ec50d97a4d75e18af84f8"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "af8f74879f4d66c110760e42cf2f117a"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "34f7ec292585b388e383f5398bcedfa6"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "8bea59da48300377685b899e9a1d654d"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "2d2a2db4ce6108bae278f4b488f48e32"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "8a43a36659f07eefb9f84504f7d15611"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "50515d93ccb7714ecc99a41338de35ee"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "3bc263021ae4262d87ba70063fa22830"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "34e962806323da4cbd7baa332853d928"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "8cf1bf0c0eda048a88fa5133d79c3ec8"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "df864830f53b4181787312877020e1a1"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "7644f40c53e5b605db93bc53492f7e80"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "f8fbcf12dbb2279ad2a3fc14cd571732"
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
