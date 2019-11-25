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
    "revision": "87b3bfe1de530ec351bf9ae4f556f5d3"
  },
  {
    "url": "assets/css/0.styles.fb7dd179.css",
    "revision": "4f3957de1cb488ca134efca0f4a63179"
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
    "url": "assets/img/courses/asterics-grid.jpg",
    "revision": "7f95fcce808d500d117e5f25bd1d7345"
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
    "url": "assets/js/1.bd9ea90d.js",
    "revision": "e10a601505d008adc85cc7cbeb1dda77"
  },
  {
    "url": "assets/js/10.70168f0b.js",
    "revision": "771a1673447f0f595cf924e3d0ce8809"
  },
  {
    "url": "assets/js/11.c9d215f5.js",
    "revision": "e833614552239a809aca7aa19a4908fb"
  },
  {
    "url": "assets/js/12.aa31bb49.js",
    "revision": "17a0b57f7d935e84cc24b0584a1c117e"
  },
  {
    "url": "assets/js/13.9f8c0197.js",
    "revision": "7d0efac99db7d8bba8ca7a3748bf2ebc"
  },
  {
    "url": "assets/js/14.bf7eaf48.js",
    "revision": "12159f770a2daea34d9aee53a550d5f9"
  },
  {
    "url": "assets/js/15.ae533d3c.js",
    "revision": "1a6bb598471340f26628dd03b6149905"
  },
  {
    "url": "assets/js/16.376d9838.js",
    "revision": "ec4caf9f9baaa20206f90eadae78733c"
  },
  {
    "url": "assets/js/17.2b1e58a5.js",
    "revision": "41ddf844526cd4fe5ff5dd716dc19cd4"
  },
  {
    "url": "assets/js/18.80fb84f4.js",
    "revision": "e01e6729658c1e7a7c53dc05191b7042"
  },
  {
    "url": "assets/js/19.4fa810e9.js",
    "revision": "2d98f2eb5a007df82a49a9c838638a3d"
  },
  {
    "url": "assets/js/2.6187dd24.js",
    "revision": "c3704459bef6894273d9112269a6d59b"
  },
  {
    "url": "assets/js/20.40ebf598.js",
    "revision": "b9ccdb1931635d00fc6cc5cafe1fee54"
  },
  {
    "url": "assets/js/21.667d828e.js",
    "revision": "3696394076e16095fb110f87291c7422"
  },
  {
    "url": "assets/js/22.f55a8637.js",
    "revision": "d3084f27a111154cb24abff8b46c3c96"
  },
  {
    "url": "assets/js/23.3aaa7e3c.js",
    "revision": "a170c4bce94666ac0011eebea599756a"
  },
  {
    "url": "assets/js/24.29f5e9ef.js",
    "revision": "1b03968468eefd68abfb1feaeeac9836"
  },
  {
    "url": "assets/js/25.3678019e.js",
    "revision": "92cf1412aae63d905a2c067814a1533d"
  },
  {
    "url": "assets/js/26.05be9d49.js",
    "revision": "84f6784c015c616641ee4f211c008fee"
  },
  {
    "url": "assets/js/27.210cedb2.js",
    "revision": "0ce97cf3c58572c31a2673f2581f6dd9"
  },
  {
    "url": "assets/js/28.0f17e5d6.js",
    "revision": "bf3985669d90e032249769ac0f771b6c"
  },
  {
    "url": "assets/js/29.c36ae762.js",
    "revision": "7dbf6f958340f1227a10f259255fd757"
  },
  {
    "url": "assets/js/30.39cfc4e3.js",
    "revision": "4ef8621ad27cc571302e0d9174fb1f6a"
  },
  {
    "url": "assets/js/31.4b3f2c84.js",
    "revision": "92dbd03bee1cf2a941d1044ce36b9464"
  },
  {
    "url": "assets/js/32.0f5f773a.js",
    "revision": "ca2b81a8f66fa3301ae4c9fa102b2615"
  },
  {
    "url": "assets/js/33.ef637b8f.js",
    "revision": "cab6dc44416d8f352ab4814d467d84e0"
  },
  {
    "url": "assets/js/34.67c67a2e.js",
    "revision": "1fa3ec1935e8711d7462caa96ef1830e"
  },
  {
    "url": "assets/js/35.34edffb5.js",
    "revision": "603b4c928a7a93a038e5f403c8b2c32e"
  },
  {
    "url": "assets/js/36.63cd26d5.js",
    "revision": "ef88b6187e3c520682f859615d0efc0b"
  },
  {
    "url": "assets/js/37.9f79f292.js",
    "revision": "4d0fbd857d11342020900ba483e583f4"
  },
  {
    "url": "assets/js/38.ce29057e.js",
    "revision": "ba817d039111b7f97d658e4cb0365b47"
  },
  {
    "url": "assets/js/39.c539cb21.js",
    "revision": "ad12ec99ff4525ae90e7c164c0da7775"
  },
  {
    "url": "assets/js/4.d458493a.js",
    "revision": "151f4d353ae1d896f7e26de8e8ad25fd"
  },
  {
    "url": "assets/js/40.c0673578.js",
    "revision": "d686d220abeef201d2b385a01b5dfe9f"
  },
  {
    "url": "assets/js/41.ecc5c66f.js",
    "revision": "c30edafec6f7fafa71c86c8822796cad"
  },
  {
    "url": "assets/js/42.0abb8f3b.js",
    "revision": "c5b8b2efa78af8f07840cb1e767cc2c2"
  },
  {
    "url": "assets/js/43.4abda5a3.js",
    "revision": "8b490e0de102588722e3fd35f90c577d"
  },
  {
    "url": "assets/js/44.94c54a97.js",
    "revision": "107efd565655f2dbc2283fa7070ef3bc"
  },
  {
    "url": "assets/js/45.f0ad87b7.js",
    "revision": "11dd9417b6ec698a2ee69ada3e3a20a7"
  },
  {
    "url": "assets/js/46.66266b35.js",
    "revision": "5136a0f9d92cf2163fc0dba8e8399a55"
  },
  {
    "url": "assets/js/47.b7571b81.js",
    "revision": "65c99b20742e249666ff5e9333ba7f6b"
  },
  {
    "url": "assets/js/48.afdaacd0.js",
    "revision": "ebe6422a55c538436e13b20be6136330"
  },
  {
    "url": "assets/js/49.2ec21ba5.js",
    "revision": "72b94bf90eaad6dc481581c8f139f7d1"
  },
  {
    "url": "assets/js/5.ab7c30b2.js",
    "revision": "d40401a4b9e88e4aca95fe77f385ca0b"
  },
  {
    "url": "assets/js/50.b9d7cd05.js",
    "revision": "8ba577521326052c7a613de42294cd75"
  },
  {
    "url": "assets/js/51.ad687b0b.js",
    "revision": "082b8e7b8f491b1ce8985b62d99952b7"
  },
  {
    "url": "assets/js/52.da478e8c.js",
    "revision": "b4b9aaf1c31c14377272ef1a2d916d27"
  },
  {
    "url": "assets/js/53.a26e5c5f.js",
    "revision": "608f3bc424108419eba6ba4e8489a950"
  },
  {
    "url": "assets/js/54.d8928e6e.js",
    "revision": "2bbb2a98dd0fbc72d856ea9d3bd2fb5d"
  },
  {
    "url": "assets/js/55.74c10851.js",
    "revision": "339ecbcbbdeebbdade02baca0a61c10a"
  },
  {
    "url": "assets/js/56.9fa56ad6.js",
    "revision": "adf3d909931956278b6de432cbee2f78"
  },
  {
    "url": "assets/js/57.8feb5309.js",
    "revision": "98df6b6a7c123c9866e5ad03ffa9c88d"
  },
  {
    "url": "assets/js/58.36bb14c0.js",
    "revision": "2b094e0639d431d8e3fb9e2cbde1e7a6"
  },
  {
    "url": "assets/js/59.216f7428.js",
    "revision": "2ab94eba9d06633fdbe4b2487ac9be8d"
  },
  {
    "url": "assets/js/6.e5fa0f1d.js",
    "revision": "0de3c5924470080198c04af22ed0246d"
  },
  {
    "url": "assets/js/60.e77ced1b.js",
    "revision": "f3c5d976a751ef8d08eb5020c0ca7588"
  },
  {
    "url": "assets/js/61.c107012c.js",
    "revision": "9d8315c3367d5660c16eb0b2d82de49e"
  },
  {
    "url": "assets/js/62.e6f023ba.js",
    "revision": "639dec250acf9338b210a9971f6ae40e"
  },
  {
    "url": "assets/js/63.39a6fdbf.js",
    "revision": "08a8f8a4af08ab856e9843d525e24f11"
  },
  {
    "url": "assets/js/64.f78af4e0.js",
    "revision": "575295e4ecb72fb270b79287be22e87f"
  },
  {
    "url": "assets/js/65.727f33ee.js",
    "revision": "67dec82d57bc73de565eaf4206ff050f"
  },
  {
    "url": "assets/js/66.e1088e1d.js",
    "revision": "d641da411f1f4f730398fb1116d7784c"
  },
  {
    "url": "assets/js/67.d11c6580.js",
    "revision": "3add1ea6c8730ddd4dbc75e600739359"
  },
  {
    "url": "assets/js/68.4ff67dab.js",
    "revision": "8f059c0d2916c815f45c22f8231bbfe2"
  },
  {
    "url": "assets/js/69.0f6c9759.js",
    "revision": "1c8d1491184c88105250812843055f53"
  },
  {
    "url": "assets/js/7.94d5acbd.js",
    "revision": "9380802c6611a5452bc8029cd28d2e8d"
  },
  {
    "url": "assets/js/70.b542c4b3.js",
    "revision": "f6cc9da74024cd5cace70274b9f1a8f8"
  },
  {
    "url": "assets/js/71.9432f6b2.js",
    "revision": "9403de85b753d651b3df5dbe94eff94a"
  },
  {
    "url": "assets/js/72.9df72044.js",
    "revision": "c6a453b4e1539633c29d6390901f2903"
  },
  {
    "url": "assets/js/73.aff3a02b.js",
    "revision": "c3035dac486019f9e7b7173df6d4d12d"
  },
  {
    "url": "assets/js/74.d21d0c20.js",
    "revision": "46592e3cf9a49cfc46ac02d34f55d21d"
  },
  {
    "url": "assets/js/75.a0f08c26.js",
    "revision": "93560ba54201d6afc19ec998a8936bdd"
  },
  {
    "url": "assets/js/76.7e9dfb53.js",
    "revision": "874608f88774c1f9249ad1a111f2bc1e"
  },
  {
    "url": "assets/js/77.e8abfc40.js",
    "revision": "66fe807d4799da791502a02dca403c6d"
  },
  {
    "url": "assets/js/78.e4b7ef24.js",
    "revision": "c05f7b4426261f478dcb1063565f58ba"
  },
  {
    "url": "assets/js/79.11409250.js",
    "revision": "3ef2386f9a09f4d5a0000ec534ed729c"
  },
  {
    "url": "assets/js/8.0a9ad07c.js",
    "revision": "8de1f0be66a4c9c787b7f578daa8f4ca"
  },
  {
    "url": "assets/js/80.3f73254e.js",
    "revision": "a800b6cf68ad8fc3ba6dde2ebd12a31c"
  },
  {
    "url": "assets/js/81.30a37d00.js",
    "revision": "4656d3718d0a7f1d5b5eb53533f786a8"
  },
  {
    "url": "assets/js/82.e2e2c3d8.js",
    "revision": "3dfba4e7e450ec43987010ef99c6c1c3"
  },
  {
    "url": "assets/js/83.e3f47362.js",
    "revision": "42e1a820f63314a0dd8849dad3547f79"
  },
  {
    "url": "assets/js/84.249156b5.js",
    "revision": "5424a8c71fd1c8668537c4e20dee6a9d"
  },
  {
    "url": "assets/js/85.5f4875fb.js",
    "revision": "ace81a4a4880b99a4723272ad25cfabc"
  },
  {
    "url": "assets/js/86.9d1b0776.js",
    "revision": "29113989f3ca4b9996061c03013b4d51"
  },
  {
    "url": "assets/js/87.320455ca.js",
    "revision": "42074d4fcab33a0b4aefe60a66bd81c3"
  },
  {
    "url": "assets/js/88.8ad02d4d.js",
    "revision": "e7f224b857667f8dd08816b946b13f53"
  },
  {
    "url": "assets/js/89.bbc22893.js",
    "revision": "b984318973608216d2741dd90c70c1a0"
  },
  {
    "url": "assets/js/9.8260b99a.js",
    "revision": "68d74f6df5bb7fd2d7a19a1422ef5e02"
  },
  {
    "url": "assets/js/90.ff0d3992.js",
    "revision": "ac1dfd3f4180ad8460ace5872d7428c8"
  },
  {
    "url": "assets/js/91.e34e2bc5.js",
    "revision": "8a54e97a392ff960ad980a5ea15c7986"
  },
  {
    "url": "assets/js/92.83c12a17.js",
    "revision": "a869ef34ded3ef265e42018f6720060d"
  },
  {
    "url": "assets/js/93.6dcfef49.js",
    "revision": "8c8aaabbf48ae8fd184fed07f877de42"
  },
  {
    "url": "assets/js/94.4f8bc9cb.js",
    "revision": "262b5c90c0ccc74ac6e6e2f029b4bef6"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.773fca95.js",
    "revision": "3809d07ca673825526525eb4d42a7685"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "6dc077574751d792645e6ea5cd9a0047"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "e3694d8a925160e3717778ba603e0192"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "bb981f324dac32ee36fe2e4bc413df02"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "426a2de98ec3239e92cf5f41de8e106a"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "f746e84fc1591dd4a7fdfa071a7fa4bd"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "4a8d3ba76b5dd64db4a614cfb6a59e06"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "b25a79bf0f1e33af0a11b3b1cf60b3ae"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "269f3e9635db8ac192ff10d607f95543"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "b9a303c1f04a31595c77cd61a8e11dc1"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "4b6fa26b1d4b3e942b94513cddb02548"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "7571bfc35b3103f51381393e73e8c548"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "9e7236d8d1c5a9182441691494964ef3"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "2938d4c4a4ae7c20ccf1af5791e3cae4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "a4c8e58b1692ef4eb52a0389ef581656"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "0eb04512395fdf9e9c3286a492e684e0"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "6ce4b23e90b10478408b6cda9af6138e"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "ba527170e34e5383b63cfd5be25fe7ea"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "6294aa47d3908d4f2406223441e34dac"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "d76017e5e4997a5b79ad0b2b18013e47"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "0ce9ed3c64d238056f34ef408c5ad757"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "0181b506e3326e65369ec9018b81bb00"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "135d56c3a1e690041e18fd9f9c2fe58f"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "a9b96afc8c5fbccf5794e1332e98fde9"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "9a01ac64a64884b0cb3196261bf54b23"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "01acefcdfd7d7993aa7d732395efa1bb"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "bad19e55cf758bd1f3fac654b52912ce"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "6eb35fc56e8c32cc72e871f9e881d98d"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "2aa33b11eaa91dddc0135e63dfc72bf1"
  },
  {
    "url": "courses/index.html",
    "revision": "1cda23d0233adec2befe41a1eac27057"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "9f23f4d4ed7825eda885b5fda31bb807"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "0adddfa181017ffc57832e3bbde0f0a3"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "cc92b9570707c02a2093f68fdec6d8f0"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "318b40fb1e410ceeea256a945ec1b5fb"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "f00c238d64dd6c1b026b387e603e3ada"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6a4210f4b8e35466d8d61c3cf9381ba4"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "4aea58c6ac71a7312972d9837546c9d1"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "88ad59f878ec41f585eaedd2564368ef"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "993b08d2f79a0941f402d43290f4915c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b9da92acbcdf090526f5109db11e7937"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "d65f001587e941979cee8e5186a44f99"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "ff20a7185a91a9ce29a159657fa96bdf"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "6622661693c594b2260531dc719834ee"
  },
  {
    "url": "courses/template/index.html",
    "revision": "dfd61e235e34e6a46662dbe1f66432c1"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "d561eed485fe40d8ea4c91485772dfd1"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "e3d5820a2e550ae77dbfc158a82f164a"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "f924bd3cf607b66b5e9fc13045aff80b"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "dc8cfba5206565e2cd772c330a6db899"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "b397d6d2f3a4bd2bea81991206b265c0"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "56feb99dfeedd317de1996a615024a5a"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "16cadc892a72de059069000377c6db9e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "c6effbfe8c21c640a789bbaa032dc2b0"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "0feef93a074bd744e9e3ec3f0d4651b6"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "8f56963aef7e67dbd6c9d0fec6f62327"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "823af8c4bd31c978da19861f250e137d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "33dc40494b5eb302cf84fc8c2924ba91"
  },
  {
    "url": "general/enroll.html",
    "revision": "b2806e5e86a4bba17703d86de7e4d66e"
  },
  {
    "url": "index.html",
    "revision": "4540c02c651519f817293684630517fc"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "6aeb87732e626b3bbe7cb3b20ce54a02"
  },
  {
    "url": "studyathome/about.html",
    "revision": "d3e04bb435440b76196b59558144be5e"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "7e42717a14091f00cfff44e832e17147"
  },
  {
    "url": "studyathome/help.html",
    "revision": "a30d806623899126823763c6d17e5a80"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "de23744176cd67f1ae38f25508ad811a"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "6128d4a19de4ff165b5360b3ecedb8f9"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "4e8542036d020cc39911da00398a76e1"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "6f55b2813526bacf8299829b65f76fe0"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "eed18f5fc5574d8baaed0aba954192ee"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "fc0636ac4560af431cc2cbffb56be6c7"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "373082c62e7edb310530707bb3b05325"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "cc52f7639ba98b21f3543ea2aa548e37"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "71995d98630f1054439fb14a01d4f7e4"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "8367767cd7a84552dba73f76e7b03c93"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "3e388cfbb24db5c21aeeb608ae1e913f"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "9188325a909e047787baf08bca8155df"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "68c0fe07ef5967b2e559e1dd0c1f7cd3"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "bd40e3db52379b89a32b56f7d2ee2cd7"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "b5c78c184950321f211d849f7e41296a"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "4b3a1f8795aea3924112bb9d4f7e6c5f"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "c1900dd6a5b47d67c8318628d03470df"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "2fa976f367c7e42b707e2b672daebdc0"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "eb534a5a033522259d4ded32757a3ccb"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "e4a3c5c13ab36aca9015af4f1972494a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "3fefbf36ce49bdf4e56e87b6291c6fbe"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "de9ef73e736a9758ca2404094a143cdb"
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
