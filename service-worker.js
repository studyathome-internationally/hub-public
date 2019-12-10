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
    "revision": "26ae8622d2fe8df0e96b4283737e7a74"
  },
  {
    "url": "assets/css/0.styles.4cb4479b.css",
    "revision": "4bb604598cee31d100260191150f382b"
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
    "url": "assets/js/11.e61e62c6.js",
    "revision": "f8199037c9671e05105536f8d1fad9d8"
  },
  {
    "url": "assets/js/12.bf0a435b.js",
    "revision": "09515707ca3f980d7d8e447ed01f320b"
  },
  {
    "url": "assets/js/13.5476c24b.js",
    "revision": "977bc9971f3cb0a64d329119f40c4722"
  },
  {
    "url": "assets/js/14.52cd357c.js",
    "revision": "0d96eedc5975db928c8bc6c9f8e2575a"
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
    "url": "assets/js/17.e995e85a.js",
    "revision": "b37fc1b691612c219661d4f59d6faaf6"
  },
  {
    "url": "assets/js/18.aa525a07.js",
    "revision": "7e858d72ed074e2ed33a636bbc1f01c4"
  },
  {
    "url": "assets/js/19.0ea9f239.js",
    "revision": "dbfc79c60eb63ed15881ef1be715370a"
  },
  {
    "url": "assets/js/2.6187dd24.js",
    "revision": "c3704459bef6894273d9112269a6d59b"
  },
  {
    "url": "assets/js/20.04a8ac7f.js",
    "revision": "f489ba50c55c919441ca4ebde3b0a001"
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
    "url": "assets/js/25.efb8eba2.js",
    "revision": "ff986c8d99fdb4ba79a12a7cbc63b79d"
  },
  {
    "url": "assets/js/26.fefd6de9.js",
    "revision": "3364290c2070334d469556b54c127d61"
  },
  {
    "url": "assets/js/27.ddae179d.js",
    "revision": "fb936333dd343fe1d22edfd01a33d85d"
  },
  {
    "url": "assets/js/28.52dca4e5.js",
    "revision": "6bf574aa49f0213fe80de50e97edec07"
  },
  {
    "url": "assets/js/29.5c13b406.js",
    "revision": "64701d760093c6252d1c27423675ab81"
  },
  {
    "url": "assets/js/30.27c9c79e.js",
    "revision": "0e9fd0aa1687c4be4b5f59569c5e2e0c"
  },
  {
    "url": "assets/js/31.ca020aff.js",
    "revision": "6266397cd1ba1dad6c1189fb7d9aa1f5"
  },
  {
    "url": "assets/js/32.8b327bf1.js",
    "revision": "e740b38ab04e23f5e645f86068ca70e6"
  },
  {
    "url": "assets/js/33.b41aa5e1.js",
    "revision": "a031c8563213fa1d4e53d1365a75314e"
  },
  {
    "url": "assets/js/34.06b6b205.js",
    "revision": "be674b8c4eb7589989709419a149cff0"
  },
  {
    "url": "assets/js/35.1579eb29.js",
    "revision": "9d513dc2e58fc74c299eaf6e0a2f6536"
  },
  {
    "url": "assets/js/36.8eec19d7.js",
    "revision": "2236003717e9559bbc09f53b1cddab75"
  },
  {
    "url": "assets/js/37.ab1798c6.js",
    "revision": "46997b7524e71321e65ff260b5500003"
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
    "url": "assets/js/4.6bdb0678.js",
    "revision": "30e2a82765732e64e2f8b0f2c4436e77"
  },
  {
    "url": "assets/js/40.c0673578.js",
    "revision": "d686d220abeef201d2b385a01b5dfe9f"
  },
  {
    "url": "assets/js/41.1cb71fa9.js",
    "revision": "a6bbfad5cee673ae2db3b1d85171655c"
  },
  {
    "url": "assets/js/42.0abb8f3b.js",
    "revision": "c5b8b2efa78af8f07840cb1e767cc2c2"
  },
  {
    "url": "assets/js/43.d1f6bc5b.js",
    "revision": "566a5fd42ecc57251994a5097ef0a367"
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
    "url": "assets/js/46.1bf0e7e2.js",
    "revision": "2a6fb2065737351c7b2dab27d8a04773"
  },
  {
    "url": "assets/js/47.c98da5b9.js",
    "revision": "dd71fa6734f5e99f0c281fc19cadb401"
  },
  {
    "url": "assets/js/48.afdaacd0.js",
    "revision": "ebe6422a55c538436e13b20be6136330"
  },
  {
    "url": "assets/js/49.47ffb83d.js",
    "revision": "999794889ec7ea84980f5201829ccb6d"
  },
  {
    "url": "assets/js/5.f1044e62.js",
    "revision": "225b152aa243b0c5811fe4ac4c946399"
  },
  {
    "url": "assets/js/50.47aa5ae5.js",
    "revision": "9f1b55ce5ebef294c5780e717e498764"
  },
  {
    "url": "assets/js/51.a5d0f521.js",
    "revision": "c7fdf66fba4ab93da7d2f5ad347770f3"
  },
  {
    "url": "assets/js/52.da478e8c.js",
    "revision": "b4b9aaf1c31c14377272ef1a2d916d27"
  },
  {
    "url": "assets/js/53.c87055e4.js",
    "revision": "296aa09af653ab5dac6bef04d388bfe9"
  },
  {
    "url": "assets/js/54.674488cf.js",
    "revision": "731b8fa9888579793605fcafda437bae"
  },
  {
    "url": "assets/js/55.d5f1d114.js",
    "revision": "f6f6cfa307407e612a1d22e90be10ad1"
  },
  {
    "url": "assets/js/56.12279dea.js",
    "revision": "0136f8ca7b4a56a0b3422d81b269ce79"
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
    "url": "assets/js/62.f71aabb6.js",
    "revision": "b12ec22d84e1bf0dfc08e26fc303f3f6"
  },
  {
    "url": "assets/js/63.dfaf323d.js",
    "revision": "47b3d4221eaf85b158ba24e4a34efba1"
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
    "url": "assets/js/66.2284fcaa.js",
    "revision": "828d0f064c9e038c3c37b94f7a1c9c23"
  },
  {
    "url": "assets/js/67.891f07d4.js",
    "revision": "fda5daada151009f498b5959f43c9f73"
  },
  {
    "url": "assets/js/68.4ff67dab.js",
    "revision": "8f059c0d2916c815f45c22f8231bbfe2"
  },
  {
    "url": "assets/js/69.02c6e4a8.js",
    "revision": "7f3ae02dbeba1f23366fe142ad6fd236"
  },
  {
    "url": "assets/js/7.94d5acbd.js",
    "revision": "9380802c6611a5452bc8029cd28d2e8d"
  },
  {
    "url": "assets/js/70.208a4bb0.js",
    "revision": "3239b8fd5b061fa610e670a68a2f679b"
  },
  {
    "url": "assets/js/71.72e3daa1.js",
    "revision": "b152ba6b6fd605b4ee3dcfa131115d50"
  },
  {
    "url": "assets/js/72.4837f2d5.js",
    "revision": "a065c7c63ec5c4edf1f34ebdf8fc7a02"
  },
  {
    "url": "assets/js/73.3ab39e55.js",
    "revision": "7dc2566e49031f82e190b9ac56372fac"
  },
  {
    "url": "assets/js/74.54273024.js",
    "revision": "1768978b3094b7093d84ac04ef67fe34"
  },
  {
    "url": "assets/js/75.2817bc5e.js",
    "revision": "0e51c210b25cf9084c4cc9b433d2d2a2"
  },
  {
    "url": "assets/js/76.5c5978f4.js",
    "revision": "28a1b7f1e5a4acf20615764b83e8ed9e"
  },
  {
    "url": "assets/js/77.73ed410e.js",
    "revision": "3c9bebc9094aa520026d10f866598148"
  },
  {
    "url": "assets/js/78.3e22c6cc.js",
    "revision": "4f72f837c64ea7352da5bc36e2e070b0"
  },
  {
    "url": "assets/js/79.bb4d4022.js",
    "revision": "36420ddc67c6bbd6403acc249d3bf2ff"
  },
  {
    "url": "assets/js/8.0a9ad07c.js",
    "revision": "8de1f0be66a4c9c787b7f578daa8f4ca"
  },
  {
    "url": "assets/js/80.8406182b.js",
    "revision": "904821df14895662fa49f4798b89b2bf"
  },
  {
    "url": "assets/js/81.d6c996c4.js",
    "revision": "1afa738fc86628b9131275e41fd8217a"
  },
  {
    "url": "assets/js/82.a42ca3bb.js",
    "revision": "4d71473530de8ef1ef29851132e6466c"
  },
  {
    "url": "assets/js/83.e3f47362.js",
    "revision": "42e1a820f63314a0dd8849dad3547f79"
  },
  {
    "url": "assets/js/84.4c929991.js",
    "revision": "fcf17a29289e29d20dbe3a63f8899b5f"
  },
  {
    "url": "assets/js/85.f87da056.js",
    "revision": "71ab4341e7ead75ef0fcf91862da134f"
  },
  {
    "url": "assets/js/86.ca56fbbf.js",
    "revision": "b30a08e7f4dc99466da2524750ac2476"
  },
  {
    "url": "assets/js/87.5a48d454.js",
    "revision": "95f7154d71d379372c89eb719359f6a6"
  },
  {
    "url": "assets/js/88.69cf2ef5.js",
    "revision": "4c902e73a15fed78e02b6fba93fff5fa"
  },
  {
    "url": "assets/js/89.3c955e52.js",
    "revision": "9465807630fb2518721aef342201f7bf"
  },
  {
    "url": "assets/js/9.8260b99a.js",
    "revision": "68d74f6df5bb7fd2d7a19a1422ef5e02"
  },
  {
    "url": "assets/js/90.42a5140f.js",
    "revision": "d792eb8ad71b2273d81117988b77cfe6"
  },
  {
    "url": "assets/js/91.d884b84c.js",
    "revision": "1779a21e2a4acd3a61912ef5b5a7e065"
  },
  {
    "url": "assets/js/92.0927b188.js",
    "revision": "36b79325e19ee92ef99e7308b415e9c8"
  },
  {
    "url": "assets/js/93.22d5c8a0.js",
    "revision": "25b3dd602d950e1e20cc0e2d1fe4f60a"
  },
  {
    "url": "assets/js/94.8ff9a291.js",
    "revision": "f99dc4cd9b8859af3773d619076c9d23"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.fb5e6854.js",
    "revision": "94c508327bbb2d7465deb21cfc709bca"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "326bfc64c064483e075bee7e050166df"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "2a11167967a34f2dfe6352cbdba1e68a"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "e60a43399255ee3b17ec3e0631932191"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "ad718be7fa76dbdbf2942a4c6e89e5ca"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "97a7a5e0cc05bd0d57d3408e5b648fff"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "b8f8ad2bfe1ba66858b24bea5a0720e1"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "b7697cf577d4dd9ce64ec64e6a3fb8c1"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "2516b1ba968ef79a24d2556d1a3e4989"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "5d4750e6d468754544f0734d0e5b53b5"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "7aa14086b580d864d9a064e616964083"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "4be81d7d6faeeb89090517b506f8217f"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "dbf5e23da96cb97cfbb54feae4a11d13"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "eea2d2c480090fde83a555f96b0a0b88"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e338eadbf8e14eb3891e34dbaa6d2cde"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "ab446b7fc2a37b5ed19cbf3e0bd680be"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "9083f929894297df9f23abb2dc4d2a70"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "fab9ad1f439d09aff0894fc6b071dc0a"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "a229f97517940b267418f521711d6b8f"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "b9c797b4cd51d7af7c5b18925f057f54"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "6e53712b3b806fa3c4a64396be7e0b0d"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "4daff74a945dcdbecbce7709bf19390e"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "016f44f5ceaf2b92bfd8ec37c01a8850"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "f7b84c291f376af8b8438fc00c834e01"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "832483abe413685a8a5bfa09cca830a5"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "d3a90a5aeb13c828574affdaa60be322"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "205f388d3545bde2eccd00cd01b9f660"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "0cacc88529d110cec56f2e780d7239d7"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "56f751e79fca859baaea995bd6ed3b27"
  },
  {
    "url": "courses/index.html",
    "revision": "96313c3c85a3bc5b4d63347387b97e31"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "719c70917ed1c58d6b0753d20b2a361e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "7bcdce885727f92456a1177232c2b2cc"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "9201127df2f7ccaa6e0dd13d837c1ee9"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "d3b5d651973f1b356755ba9de5904946"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "62537059e791d245cbf9ee04c3a6f4e1"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "0e661e3fb294a00e815124e43bf1faf0"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "b7931780fdb4489a2025fe83d8da9cc7"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "00458791e12c979df9be9f26a7d3ac49"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "52a789be01732ce2eb0d9238bc147cc3"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ab806b35a6918f612acc2922f79d4e22"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "c92f29ee7a4c50ad6672d7ca80d7cb32"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "4f1b22e17b7536ca117244d0a9646600"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "73908f5ee93294caeeb8f6ef7ccfc683"
  },
  {
    "url": "courses/template/index.html",
    "revision": "0824fcf00b6ad946d00846921573a9df"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "000100f20d6e6ec7f904965136f8a1dd"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "f30a6b74fa03e4ab84f364b736c1b731"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "fe78ea8b0cfb8f2a4798d13255c5eceb"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "51be1e25f9b833f87091f4d215c29d54"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "15f62b48824d7b93b40231e728c5b7cb"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "03be2cd7da354371b32b771d3b640306"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "d48a9de601c3a1236493ad3ac7c8dbde"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "a89bd725a91e1abff02283dd7b6c0bb3"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "5ef0fb5bac30bd4973d9f3eb89931bb7"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "68b98686a8db4ee4abf3e166307cbac5"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "7534242164e5897cd0cef0bf48f596af"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "106d546cf12ec571a60b1e6dc2dfe752"
  },
  {
    "url": "general/enroll.html",
    "revision": "73a506ee128145a41185d5c66018958f"
  },
  {
    "url": "index.html",
    "revision": "6eacdcc965bc5c7a8dc80c2680e742eb"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "7388101536dc27dc7f843788852bccae"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f6f46fe1573b927a03d5679e5cd6a01e"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "e4caf3fd0c3200dfd3f5cc88d83dd128"
  },
  {
    "url": "studyathome/help.html",
    "revision": "5d03e248bac7602d8a48c2c3436e2717"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2d767c39b5ae9e5da04a005ab4f184b8"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "400cdd93ae8dc8a09db08b5f75d0ec87"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "382ad5c8fc12bf549b478cc01e4bced7"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "a6537d59c4b714c0a7251858cb9d25d2"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "2025f4c8da627508a1c62976629955b9"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "39adceb74d728a6c828af1ba949239bc"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "a3c081f7228cb7ea650971751380aed8"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "4d3b725eb8aeeaddae6482b8c1bf80af"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "e8d186e0238372aa5bfb94135cbbee4c"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "4452d5b1b8100d069770e3ea6c3ca7b7"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "1a53d493aa4b0ae0cd060cf308cddc13"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "938821d31554d07e238299f96a728ecb"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "de60bfdfffc4260b8b101c92d5456a61"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "554b459d7d6a596e6420021dd5c12ad1"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "ed3964eab301493c19500799e2db0c9e"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "977ac68df6d6f21342e468c53ea2e228"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "d4ec335ea35aaf6e7798fe92aac61ef9"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "db2c7f89df757ef0c8a8ad4516dfcef5"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "e7a0529ed905031b4604975c3f4039ff"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "e6dfda7b96df1c87294c7c5c9aa85bf8"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "958cbcf2d1d1cc8171bef570766b8ddc"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "aa712962944aa8718b726e6bad46b054"
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
