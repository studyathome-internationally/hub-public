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
    "revision": "6313720a090f29967c65e52076f3c40c"
  },
  {
    "url": "assets/css/0.styles.39308d11.css",
    "revision": "e989c4b515b98e35d40e66a0c0d092b2"
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
    "url": "assets/js/13.4484bac4.js",
    "revision": "9cb87d82e13cba0b0f134ffef4ce90af"
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
    "url": "assets/js/20.1bc0ab0c.js",
    "revision": "8d49a4f1f2cf81b1ae72bd4d1e507d44"
  },
  {
    "url": "assets/js/21.d9cf708f.js",
    "revision": "a8afa0c13b865801167c13b162fcd639"
  },
  {
    "url": "assets/js/22.dddbaac2.js",
    "revision": "aada27d5c040464c330226c18ff2ce11"
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
    "url": "assets/js/28.3cb50fcd.js",
    "revision": "dcc12f82b2556220e8e6c7c8934048b4"
  },
  {
    "url": "assets/js/29.af3239bf.js",
    "revision": "cadf97fec046f7e9946a8fc88e37af79"
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
    "url": "assets/js/34.621c5530.js",
    "revision": "f5cd5af8ee472c6959d444912b5ed0fd"
  },
  {
    "url": "assets/js/35.151aea1d.js",
    "revision": "31da5b28b60d6a614013dea5338d9e28"
  },
  {
    "url": "assets/js/36.8eec19d7.js",
    "revision": "2236003717e9559bbc09f53b1cddab75"
  },
  {
    "url": "assets/js/37.8289d23a.js",
    "revision": "c5abba78cb6afa17923305dadd5131bc"
  },
  {
    "url": "assets/js/38.7a3b6786.js",
    "revision": "1a4ae1fda6b89c21871861592073377f"
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
    "url": "assets/js/44.c26bf5dc.js",
    "revision": "3019a5d18f5d8282ff4db94d44d2305c"
  },
  {
    "url": "assets/js/45.891aad4f.js",
    "revision": "42c698a5e476784fd269d45668a3022f"
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
    "url": "assets/js/49.2ec21ba5.js",
    "revision": "72b94bf90eaad6dc481581c8f139f7d1"
  },
  {
    "url": "assets/js/5.f1044e62.js",
    "revision": "225b152aa243b0c5811fe4ac4c946399"
  },
  {
    "url": "assets/js/50.43feafef.js",
    "revision": "b0c5b67659ca6c8729c25f570b4e127f"
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
    "url": "assets/js/55.a973b878.js",
    "revision": "10532a58c46d917d44db91b0218928d1"
  },
  {
    "url": "assets/js/56.9fa56ad6.js",
    "revision": "adf3d909931956278b6de432cbee2f78"
  },
  {
    "url": "assets/js/57.578fd171.js",
    "revision": "c14d32a4bf33bc7d774500bed21d6f89"
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
    "url": "assets/js/62.94d0213f.js",
    "revision": "74f43e88631ff72a19aff6478c0a7f72"
  },
  {
    "url": "assets/js/63.39a6fdbf.js",
    "revision": "08a8f8a4af08ab856e9843d525e24f11"
  },
  {
    "url": "assets/js/64.dee8b8df.js",
    "revision": "d4105195a3571a53c07793780af7b4cb"
  },
  {
    "url": "assets/js/65.aba23de5.js",
    "revision": "f19d3f510f36cef82f0aac4f91d6d5ae"
  },
  {
    "url": "assets/js/66.abbb6601.js",
    "revision": "f1d9f4662259257a08ede387ceed9039"
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
    "url": "assets/js/69.080bb131.js",
    "revision": "0ec53c3a4e23815b3352f7abf6b3a30a"
  },
  {
    "url": "assets/js/7.94d5acbd.js",
    "revision": "9380802c6611a5452bc8029cd28d2e8d"
  },
  {
    "url": "assets/js/70.2dce8808.js",
    "revision": "5ba3bfa08ade33fc783065c7f20e558a"
  },
  {
    "url": "assets/js/71.308ce01c.js",
    "revision": "7f2df1ebf66a86dcdf4969529fb2d1fc"
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
    "url": "assets/js/77.6dec88fc.js",
    "revision": "037a8a37d2d5ecd7c69e0b3754bb4588"
  },
  {
    "url": "assets/js/78.f88714aa.js",
    "revision": "8d78948b7eda2ee6fd9ec0338d5c5851"
  },
  {
    "url": "assets/js/79.08217344.js",
    "revision": "948a9df3c57d9fed73245e5f1cab463d"
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
    "url": "assets/js/84.f3a26dbd.js",
    "revision": "ab452ffece341004e62fab720e0efe55"
  },
  {
    "url": "assets/js/85.edf34019.js",
    "revision": "2c4470aaf2facdc9cf88a8e5d72b8d0f"
  },
  {
    "url": "assets/js/86.9d1b0776.js",
    "revision": "29113989f3ca4b9996061c03013b4d51"
  },
  {
    "url": "assets/js/87.ffe4d758.js",
    "revision": "52572c217346e5a0cdda5082fc34ab22"
  },
  {
    "url": "assets/js/88.8ad02d4d.js",
    "revision": "e7f224b857667f8dd08816b946b13f53"
  },
  {
    "url": "assets/js/89.19d45055.js",
    "revision": "6c960a7dccf9bd746b2deffed847407e"
  },
  {
    "url": "assets/js/9.8260b99a.js",
    "revision": "68d74f6df5bb7fd2d7a19a1422ef5e02"
  },
  {
    "url": "assets/js/90.8f40da08.js",
    "revision": "360436759efef2ba2b7d033578bbc5f8"
  },
  {
    "url": "assets/js/91.d2fe436c.js",
    "revision": "94a09a3d827dd10cd492471d68cce71b"
  },
  {
    "url": "assets/js/92.dbf101bf.js",
    "revision": "86ab44bf536dd2e5f89fb14bb4d631b2"
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
    "url": "assets/js/app.73e62385.js",
    "revision": "6d77439b85a55cc135d212cd2c070a1f"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "21ad1f092b57e6885bca692e5e7084c1"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "39812874cb0837418d106f0375f1a28c"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "93b4f58b2fe0449d4a1dc0fa5422d829"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "05a8a7e3421fa278596bd843fd751f1b"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "71c766a8428193d9f537f4d66aaecfe3"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "a496a181eb07bb1ef55621f21c37f457"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "fc04c39a474a024d5fa5f898ac2352b3"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "735f3f4d575650b7905153cc554bb151"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "0fa72471b81d490524860290b76bcc18"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "eb99e37abb51e668264085b9d311a511"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "610dce902163c062783d457e6a6e9b5e"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "6e9de86eabe2fe83a37e7514cd66268b"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "16b68ccae9ee955ce9350f97686a2d9d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "963327702d2e36d9ba10ef1690747896"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "4925beb3b91a97928dcaeef5bf55cab6"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "edee8cdb97975afbc93558bf920673d1"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "0f87e6a981c7663719984a05d272895c"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "55895968b73c4861358f6384941c750a"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "2a4a6d996af159d9e5e516adf4cfb889"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "a73dfb87e247f7a9bde3e7adb6d01dc2"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "ba8c8eaa3a8cb3841b0d6def29a7661e"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "bd1836b0d2371c068da8530c1b8faaaa"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "5e66a59a055f5df5b528b489b211aa40"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "6d608bfc3ae8910bd2dfb66776038a45"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "d2b3a2216839237968f780d37bf1c44f"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c82841812ff42ab056ce99db4e595c3e"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "6f2de551db9b4cfd0fddeaa81088eac4"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "2ba89ac97a0f19c654ea2203ed043a74"
  },
  {
    "url": "courses/index.html",
    "revision": "0ce9d0f35712051f17c571984f640cc3"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "cc59aba2f74b3bd1d19473a3c89b7858"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "de2dcc1c2bb8360c421291eb24024b81"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "fd5f7d61ae830b45679c7cb4e49a1a13"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "bf187c5ab03d8d09a24cf2290fae8399"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "7c04bcf70ceebc4d0a26a6402f42fbb0"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "18550246e383f848fe6106cf99720a6f"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "7765a3bef0d961520ea511d36f9a2737"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "179e760da33bedcb88c37caca5452ec5"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "60f6a3828b3c897b231b18e5c23d7f47"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "86e98a61e38ec2c5909fefdba275d376"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "ec68ac605ca6247272f0bc126ad6dcad"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "70662ab23c08df093bc2db52c2154461"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "e954132ce09f1b14413ea644acac5a14"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8a27f0bed182a4020bbd310ae22c8773"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "fe9a466dfd310fa24c82a0c9bfeccd01"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "f9995c8072b2a32a6484995e48731b60"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "9cf123f3d3c9291bab301de5a30dc741"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d9dbbcb32be07c2a0c6ae49dac7a49ba"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "9a624e9b0f755005b2223dcc987da550"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "ec95efbd8b4f2dcde88626c87c89dd27"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "313adfc675108e7be27f235f2a5c4c6a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "ee31b52aa3cb872a0daf519ab8f64430"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "3feabc44e5c94da53feef09cc64b7de1"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "badbfc06be3aaae5b5db8b7a4d9cb860"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "9a47b798fc692bbeff06c90448ff8452"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "276510974e131771ed919f156fb76aec"
  },
  {
    "url": "general/enroll.html",
    "revision": "2418af97164bb1df85ab980ada9ea4a2"
  },
  {
    "url": "index.html",
    "revision": "04364ad6e3150b518c8725348ae5000b"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "6fba7d9eaf91c6ad3c5f0f385d66fd00"
  },
  {
    "url": "studyathome/about.html",
    "revision": "dc10b9ea20f198d6fcb2d16335a1b579"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ab4df837fb2f74df326dcb5c2dcfcfd5"
  },
  {
    "url": "studyathome/help.html",
    "revision": "51c6222d1c8a6d425ab01fe16826614e"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "69c89734a80e6019c633fd09b7ce882f"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "49b2789041f9d2e25e5f5762f7a313c3"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "e7f9fe8c8d67871e541491676637066d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "6c2be2c29315372ff34a44ca49dbfc47"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "da182a8ac47c156239a2c18be7ef8e09"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "30e8b1a188a404eed2d6e304b2d77a3d"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "7fc2affacb110454bed7f93e23aac782"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "6da008fddc1539e91f4392b85cf59077"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "ffdd58a6918b5c6980cf10936190988c"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "d965b8580f447dfbb77a9e1bd77a1728"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "aed4ab978640d872de23cafa43e732cd"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "e5bec81efe1881e3ab72e1e18f5b4fd1"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "cf66138fa64ff191e5d6f6790049d596"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "964f79a9a38574ff44393e570ed0a87c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "7453e93bdcc9f61c67ad2835dc9ae659"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "7bb9cd85eb9ac628dcfd633ce0c1d2d6"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "2c0809d334fb8d3ca751ef95d981e7b8"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "6986bceafde7938dd35930eb4b3a6708"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "071fa77e59e1d3ff975c0c9111fda04d"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "64e9c9560fbd6c20e37d68138849f6ab"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "27c36924e5d217d68938c3731251decb"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "ebce55f2e48c211e16323152fbbfe10b"
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
