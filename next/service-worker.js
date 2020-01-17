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
    "revision": "aa2c8550a282b312fa6fbfa2eb097982"
  },
  {
    "url": "assets/css/0.styles.89b75d24.css",
    "revision": "0a21ac67df1e0baea17530091e75e9c7"
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
    "url": "assets/img/partner/uastw/academics-1.png",
    "revision": "2d5b8f793fa53671715c024b1e58c04b"
  },
  {
    "url": "assets/img/partner/uastw/academics-2.png",
    "revision": "02d8be1779ad053bb84f63643e3062e4"
  },
  {
    "url": "assets/img/partner/uastw/academics-3.png",
    "revision": "6317aa16d627c41dac834912be23abd0"
  },
  {
    "url": "assets/img/partner/uastw/drawing.svg",
    "revision": "f914f4bc9c9db74d5d36fb00ec96891f"
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
    "url": "assets/js/11.82be1f0e.js",
    "revision": "079c06f3eecb094f1da027e306724c88"
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
    "url": "assets/js/17.e995e85a.js",
    "revision": "b37fc1b691612c219661d4f59d6faaf6"
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
    "url": "assets/js/20.6052ece2.js",
    "revision": "89b06237ab9e26de751877eb996c2c62"
  },
  {
    "url": "assets/js/21.d9cf708f.js",
    "revision": "a8afa0c13b865801167c13b162fcd639"
  },
  {
    "url": "assets/js/22.68a7775e.js",
    "revision": "e7989e3931ce6773d4a7c27ee64dedda"
  },
  {
    "url": "assets/js/23.2fa8591e.js",
    "revision": "05a0471436c5016c9db99ac848a85dbe"
  },
  {
    "url": "assets/js/24.d165623f.js",
    "revision": "35fbdc4cf803937a05876d87ddfe00d8"
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
    "url": "assets/js/31.1932975e.js",
    "revision": "c42768302cca14c259667be08af136f0"
  },
  {
    "url": "assets/js/32.a88fa5a6.js",
    "revision": "edbd3b0fec20f507d3e22f9f95e47a07"
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
    "url": "assets/js/75.86f712b1.js",
    "revision": "27885c252a2b6d2d0f75edf146b0b927"
  },
  {
    "url": "assets/js/76.a0707463.js",
    "revision": "5718b6298bc4d8e4d3d587ca0018aba4"
  },
  {
    "url": "assets/js/77.e5cce867.js",
    "revision": "03b14a7193d5d2fd9b6c13a87bdf10d3"
  },
  {
    "url": "assets/js/78.af7e7f0c.js",
    "revision": "110b33ad227e0d567a8f22bd9cde4244"
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
    "url": "assets/js/83.80eee645.js",
    "revision": "63d1dcb8128df1cbf05802f1128124a4"
  },
  {
    "url": "assets/js/84.77db2f40.js",
    "revision": "84679a549c9162d50e75237fa91022a2"
  },
  {
    "url": "assets/js/85.f87da056.js",
    "revision": "71ab4341e7ead75ef0fcf91862da134f"
  },
  {
    "url": "assets/js/86.d9319787.js",
    "revision": "de0e0c19794245f4542eb273a01751aa"
  },
  {
    "url": "assets/js/87.bead56e4.js",
    "revision": "fe9208669bd0e9386614f6eae097c6e3"
  },
  {
    "url": "assets/js/88.2e706cd3.js",
    "revision": "016298717e8ceb807725abb581986fdf"
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
    "url": "assets/js/92.4b786ece.js",
    "revision": "0bc3de7f14079bb4d15d6593597c9818"
  },
  {
    "url": "assets/js/93.12a0d397.js",
    "revision": "7a5d5460ab9911fb0af65113a1ee312b"
  },
  {
    "url": "assets/js/94.765da147.js",
    "revision": "443bc40a0d6f767d83369f3f955d9643"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.4e814b08.js",
    "revision": "f0936ed3ae4d311ccacd1adc4de08e9a"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "2c2c42dfeb99e78e44b1d37a485dad33"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "e25878a143a49bfcfac92c659143e0f8"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "ae5cfd9abdee659517d1e5ca3d20c040"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "d8b4d09ec93bdd67a5ac468842d4f1ec"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "b512a5e405cc3fc1dc7dbf7eec433a26"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "a31105bfa6f69ae23aa11322368f5083"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "bf23bb984f9caf85abac8f298624c149"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "30dd3330b786fe0f9b9ad9403c6d4ffc"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "cfa77b41763c47fe0c5ab1cff392e499"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "fe857a18bf9a93148762c4de8c7baa44"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "73b0b13fd47b1bbd6325aeb307827eb3"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "b88e452ad849278ecf952a6288992360"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "15331f314ef80eac6b20705de2e122d9"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "97150709ebc241cc6b97d66921f27f8a"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "b44c99fd8087ee040adc6e5428ed74a8"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "384dca6d563d14d69ac8881f0235f68c"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "a6547d369d588c5f7325327b5106ef10"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "734ac488e21c0426c680306f6cc6522c"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "4022a38cb9ec7c752e6b9d1e3e126db4"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "09866c4cb0f76901c0fc0d2012c9ce00"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "7d13926e9262ff938ce8d1e86d75e87f"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5963aa074ee3c4e787f44219c68288d0"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "be8604952646cf53f3c0a47266221905"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "539dbb622d87f9fd5facb94a3edff5dd"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "f2e924645bc1e3f54805f7c4adf1ec6c"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "566ca3d9097e8a913572d8fbcf4dcf3d"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "9c386d2df6ac17d82eaab7d857ad6184"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "7d5f8293974c4d3a070d5a1bf0a5a856"
  },
  {
    "url": "courses/index.html",
    "revision": "d150d9cfdafd4d695c4fd45781d405e2"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "fd43a84f6c3a607755255cf6ca05113a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "43ed44805cc546f64a03c590d0147b28"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "7ac0ed4223b9980e5c34f8deeac382a5"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "69e27b1d7f4443019a803fa396dbcf39"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "1e93b10197328373d94beb1766b572f2"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "c34eaf2595f97ccdc9e0a16977d165d7"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "88d36df1c68e4d70289bc5bd0bc459c2"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "9ff3040850aff4f9b74823a842fe6872"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "6d66d245371c84afda4ee606d1c5fb85"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b8553f156af889fda5b19f0f359a19bf"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "4d4aef7462a65f16dc365819880e4c76"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "68188f4d674e79a755af441227480f1e"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "b0e019674e1cac4721a49010fb92863e"
  },
  {
    "url": "courses/template/index.html",
    "revision": "9b2f04fb6d1994d54ef2f725efaa487d"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "5f7c667b263517ac3dddcf1871dd6d64"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "6a85bfcf2464f8eb3d08585df901a1a1"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "1d8de447c11e797b2f104acee3318598"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "108319287f7f364f8739cb7e9ec7f5c3"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "0aae5d01eb4d559a0946e76bb3631d2c"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "9a58ce26b7515cdc4942b7e447c8fc67"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "49de4ee48f34c1d064c9b525360847cc"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "877cf463377815e893063844629936a4"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "58477a65d69d43f83c0566c24c1caa5e"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "73cb02fef0512b695c911694ea0b8253"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "86ada6bc503e8acf5d4061c2d0e0ad44"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "b2f5f3f976ac58307acf11f71d21f8f1"
  },
  {
    "url": "general/enroll.html",
    "revision": "510c287ea31282e96074ad847ec33157"
  },
  {
    "url": "index.html",
    "revision": "5a9d225351017dc36e83900404ad04bd"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "019f3f2a2251f881f99ae25b27392b98"
  },
  {
    "url": "studyathome/about.html",
    "revision": "deffe419846291c0cb0c4f4804f4046c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "532b28f2683e0f6903a5e66f78f7df7d"
  },
  {
    "url": "studyathome/help.html",
    "revision": "4155e1d38be04d75acc773d4c031f900"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "a8d9756185a3fa3c936548769852f678"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "92c7b721f55a300b6434229682bf9fb1"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "5d4ace6c3fca071e4a2c963657e7dd8c"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "ee513308e837672ce6d442fc47ddb419"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "c82c4d0ad59b0fbf6efaa7c79b03a3b8"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "337b24d6036e188190cb93af5a15048f"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "f10ba84a2c21b6bdee9b32989a1555c3"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "0f3fef3bdc17a653bf37b224d7600560"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "bb8b3d5a1035f91cfc9846c74530f22e"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "bcb3cc4d7a907f5eecc64f758f3f55b8"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "8dd9b0661ef1779b8c6069b9d204de4b"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "fac98a5b78ce55c6f184d9e16bf2fe12"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "0a95b6eb2cd45a2a2b086c6d20f0ba65"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "a248dab4e27927a90e070c057d6f59c6"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "b2689b349486b94759c592d1c9eae53c"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "2dbde63f6e51c2ef9460007a2cf2d4e6"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "c1360bff756f23e06e631aa57e241aa0"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "2e07704be9eecfc0dbb40f27a3ddf90c"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "4e2241def5012ca4fec1a03e53c4992c"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "e29a7c2a8f492acb05b26ae4ac438849"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "4ef9bed2e9d964b1f846d8548208ccf5"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "7cd798c0cb03560536dfffda34ed090f"
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
