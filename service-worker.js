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
    "revision": "1b21932ef9aece0e8f9e6c7a578ff108"
  },
  {
    "url": "about/index.html",
    "revision": "4193cf3ce6698bbd5481d5528f23c9a3"
  },
  {
    "url": "assets/css/0.styles.5fd89c00.css",
    "revision": "f4cb3cea5f7b50cf511af27f3b267ede"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9be788a0.js",
    "revision": "263b15a513c53bb0d86a309ac9508592"
  },
  {
    "url": "assets/js/10.2a81a903.js",
    "revision": "316bc1b08046467269751035b64abe04"
  },
  {
    "url": "assets/js/11.e63eb274.js",
    "revision": "ff5bab0a2b6a49a35b1bda14ec141f61"
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
    "url": "assets/js/15.50ed051e.js",
    "revision": "54addc88bee6db465d6b2f1ed2cf9c0c"
  },
  {
    "url": "assets/js/16.553b54fa.js",
    "revision": "94e0d6e457d8ad7c9a6fe37c02fabab8"
  },
  {
    "url": "assets/js/17.c6d04a9c.js",
    "revision": "bbe5e1e0f1c36220a41371207327b633"
  },
  {
    "url": "assets/js/18.960c3875.js",
    "revision": "446cf89dee89ba0decdeee71297f6153"
  },
  {
    "url": "assets/js/19.6ddaf768.js",
    "revision": "7eca4961f50eb782c32ae854d446f253"
  },
  {
    "url": "assets/js/20.2d8b1242.js",
    "revision": "69c6b57ad5e22268fd71041fcb4cc240"
  },
  {
    "url": "assets/js/21.459dd352.js",
    "revision": "3e15c5b482a5b0c81757398286b364dc"
  },
  {
    "url": "assets/js/22.1bfebf2e.js",
    "revision": "1581b699010e5416a36f8792a207d9d3"
  },
  {
    "url": "assets/js/23.96c278b4.js",
    "revision": "ed1416f95c751b453644b7ac78bbcc15"
  },
  {
    "url": "assets/js/24.280e2a38.js",
    "revision": "5cc1f6577eaeb2b2355fd0e31841b8a4"
  },
  {
    "url": "assets/js/25.8788fac0.js",
    "revision": "5549e928e97841f2ccf21eafeaba658e"
  },
  {
    "url": "assets/js/26.d76bf206.js",
    "revision": "f36346d4a63773ac9ddf09f76f2f2286"
  },
  {
    "url": "assets/js/27.04038c21.js",
    "revision": "80808a427901e5150ba4fea43dce9210"
  },
  {
    "url": "assets/js/28.80fa57e3.js",
    "revision": "f9027bb4615562ceacda0231513871e9"
  },
  {
    "url": "assets/js/29.77a00505.js",
    "revision": "a6ac3c83f492fffb3a3cbec1ee9d7428"
  },
  {
    "url": "assets/js/3.25fbce6d.js",
    "revision": "26081a88dfaf5a5e874dd5d02fe19207"
  },
  {
    "url": "assets/js/30.48ee1703.js",
    "revision": "5b9aa29057c13007fb57883e2bc2d3c5"
  },
  {
    "url": "assets/js/31.6005197a.js",
    "revision": "eb38c189538efc5e389c59cfcecd1665"
  },
  {
    "url": "assets/js/32.454a3b9a.js",
    "revision": "350172c705ef84c04b7548cf1333c9ff"
  },
  {
    "url": "assets/js/33.ce145328.js",
    "revision": "2bfbf3f31d7d7235200c85a615a4f261"
  },
  {
    "url": "assets/js/34.906556e0.js",
    "revision": "5b9413c11a587c38cdc52e911ad51a21"
  },
  {
    "url": "assets/js/35.08c12bd7.js",
    "revision": "120431e52e9dcb7aff90466278efaf64"
  },
  {
    "url": "assets/js/36.5913bbed.js",
    "revision": "f40abd24eb3274011cd98f1d18849943"
  },
  {
    "url": "assets/js/37.96971eb4.js",
    "revision": "e92b2c76fac67827023d542954f6c425"
  },
  {
    "url": "assets/js/38.d4250d02.js",
    "revision": "ac3c1c99f726c9a6b06c5ab9d16ea0f6"
  },
  {
    "url": "assets/js/39.2a520981.js",
    "revision": "e288ee957d988b8f8bf871fd6e96d829"
  },
  {
    "url": "assets/js/4.731e59dd.js",
    "revision": "855cc14ac635988736b0c2a0510052f1"
  },
  {
    "url": "assets/js/40.b5915795.js",
    "revision": "1c62f8e12d26a55c2871ef6241df74ca"
  },
  {
    "url": "assets/js/41.abd96947.js",
    "revision": "0dae90edf1dac83a055ec680e1e5d489"
  },
  {
    "url": "assets/js/42.1f5a7107.js",
    "revision": "7dd94c8d277477cbc9cb78da1926de66"
  },
  {
    "url": "assets/js/43.79fd0dd8.js",
    "revision": "211dff749c7639200cdb8b54d94209ef"
  },
  {
    "url": "assets/js/44.27dadd09.js",
    "revision": "2cd877ec2a23d8468ac1bfcd2b4179f7"
  },
  {
    "url": "assets/js/45.2f017bba.js",
    "revision": "5944e0f3764369eef5d22ba92f6b1c65"
  },
  {
    "url": "assets/js/46.d9a3e0fe.js",
    "revision": "2691eee814445a37873bf72741cac2b6"
  },
  {
    "url": "assets/js/47.e479a676.js",
    "revision": "9b80d17e648c15f2faf71db0d9b3d13a"
  },
  {
    "url": "assets/js/48.08f7e5c5.js",
    "revision": "4e5fc3d4e83c163a971dcbe1253a45b7"
  },
  {
    "url": "assets/js/49.a5890514.js",
    "revision": "5587e03c2afe6d04c73f76e0bf5ffb9e"
  },
  {
    "url": "assets/js/5.1fd01b2c.js",
    "revision": "5dd18a6fa3384681263b977207f4ec58"
  },
  {
    "url": "assets/js/50.83dc2d85.js",
    "revision": "7e539e1bb84430341d3b8dc88f32fb21"
  },
  {
    "url": "assets/js/51.38800a43.js",
    "revision": "bbd415b7a5f38c13d5c43447d66115e5"
  },
  {
    "url": "assets/js/52.b4206ed3.js",
    "revision": "c13d985f50d3aa9f631d875498467a1f"
  },
  {
    "url": "assets/js/53.b7e73a5c.js",
    "revision": "09df0e3d8084f19119cad148b12587c8"
  },
  {
    "url": "assets/js/54.92082603.js",
    "revision": "6c9c6f580f216d3035279dccfbaffdb6"
  },
  {
    "url": "assets/js/55.7788d9d6.js",
    "revision": "f59aff0299566737283055b43fffb567"
  },
  {
    "url": "assets/js/56.957c75ff.js",
    "revision": "99378594cbb6c1787d8bfeb3a5d6a18e"
  },
  {
    "url": "assets/js/57.e5f51bb2.js",
    "revision": "b793967bcaead84f17ab473cb4818d75"
  },
  {
    "url": "assets/js/58.ca182232.js",
    "revision": "7f1c082e3fb8fb3c7fcff7adc30eceb1"
  },
  {
    "url": "assets/js/59.9cadcd52.js",
    "revision": "81758897dc4bd855f10f3d6a67833430"
  },
  {
    "url": "assets/js/6.ca3f67ad.js",
    "revision": "af0efc7eb0e65944fb04df111e9170e8"
  },
  {
    "url": "assets/js/60.565bf3fe.js",
    "revision": "62442ae2f7b2dbfd348d43bc9e5c3f0a"
  },
  {
    "url": "assets/js/61.b000e7cd.js",
    "revision": "b245e45f6f835cd6dfd039ef75414dc0"
  },
  {
    "url": "assets/js/62.d9dd572f.js",
    "revision": "204bfe40864343c020e3706f73d17606"
  },
  {
    "url": "assets/js/63.c7160117.js",
    "revision": "f8214fd0e7a6127950e7fe09e061df34"
  },
  {
    "url": "assets/js/64.9608f6f6.js",
    "revision": "f890b94d669eb15db55962177a23ffe4"
  },
  {
    "url": "assets/js/65.155aef71.js",
    "revision": "3a4dc350c3ba9100b43fee11cedb2f16"
  },
  {
    "url": "assets/js/66.41e13904.js",
    "revision": "839a6b1b8a1ef25f7cc19eb224d7e1e9"
  },
  {
    "url": "assets/js/67.5395d91f.js",
    "revision": "efbbd8282fb44d7cd05054fdb9cda906"
  },
  {
    "url": "assets/js/68.9dbb157f.js",
    "revision": "4c0d9ed0339ec79f9cf676fb3dd756c2"
  },
  {
    "url": "assets/js/69.9f541ab6.js",
    "revision": "dc7779e8bb1f91ca3864b4423d74466f"
  },
  {
    "url": "assets/js/7.acba0aeb.js",
    "revision": "ee36de4f0a839f3f5a8c4fb418d5df50"
  },
  {
    "url": "assets/js/70.df2f26e1.js",
    "revision": "910ad1c15252a9ef457f5de2bcc8f9b7"
  },
  {
    "url": "assets/js/71.74eaf8fd.js",
    "revision": "791170b04e31058a5a61ea177a33c8a8"
  },
  {
    "url": "assets/js/72.f155c262.js",
    "revision": "907973da2ba076f39a85027641465c28"
  },
  {
    "url": "assets/js/73.45ffc183.js",
    "revision": "fc10bb6337d3aca66560d2dfbe40606f"
  },
  {
    "url": "assets/js/74.475a4cd2.js",
    "revision": "04e9042f655682405d5420a4cb8a0e2e"
  },
  {
    "url": "assets/js/75.7b20cfdf.js",
    "revision": "b01d406c2b3494613f4c41007db779a3"
  },
  {
    "url": "assets/js/8.877aeb78.js",
    "revision": "bf140f8bd867ba5f52a3dffe1cbb70fb"
  },
  {
    "url": "assets/js/9.49febaa7.js",
    "revision": "d03c293ffc563551eefcc0f60d4bed7a"
  },
  {
    "url": "assets/js/app.c14d0c7c.js",
    "revision": "6b9658e5fd7dce8ca24c45bb06222718"
  },
  {
    "url": "contact/index.html",
    "revision": "4027500787e85abc2db81a73ca07197a"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "f625f102a8e002be9667359534c1330f"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "de9254f1e39a9a8fb7cf5d0f6812627d"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "0306173c477a0248477956adf572ee00"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "5580a272f8cb70dc37a104c2fb4d4998"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "ce22250cfdb9309b909b7cbbcbad3e3a"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "be16b949733c14f383c97b36a6e2d82e"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "e3e2afa17a45ad9654ac74e4e24b149e"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "4c5aa94ac6846a9c7a1f7450ccb51f34"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "4f4b150bae287fc18b8d4b73205f51b5"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "761e2031d2e20570845c64986b786280"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "bcb209fb969c4a6d58afcae8f41fe75e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "dc4a6b43675b805a32a2b6abaa3751f2"
  },
  {
    "url": "courses/index.html",
    "revision": "b4fbfe82b08b0897aef46bc7a74f0e11"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "ea75b591298dce2dde5a80639cc2cd59"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "b1162f6afefde4faad1e2c201e4edf70"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "51be6a59b79403721b9cab96d30b8dc8"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "c54000da1de246726d9fca09a2e43470"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "d9e25831ec605c3f19a2fa096282bfa1"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "5b5e9217928dbd9ad0b554443afc6228"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "949818b7ac2ef8e568a615eacafb98f7"
  },
  {
    "url": "courses/template/index.html",
    "revision": "b2d7f14b5dd5e52c764016e0ce0be0fc"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "6e226804169a8bc29223fcb05f2edb23"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c91001f44d9bb6a25fa4c4fb52152e8d"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "3700553f6b951f8073b07ee99557d867"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "8715205afc75e3f58a3f88525ea1c51a"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "d2545cf0b67bc980e109475816f55d36"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "1e0a82676c2d464eefb2df9cd720a0e0"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "1332f34dbda0c3534c760c84d50616dd"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "d7612e335ce0b561bc25e115c7a6177d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "b8633640f785662ab84253abea0b0857"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "dc19e45028399c0a89665d77b4ef2ed2"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "a4e78ecf6f09853394fbc736c97c840d"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "3d88c2199d4e10db21a62a5208b9d969"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "e70b05385f5351c0cdfee80518477b08"
  },
  {
    "url": "general/enroll.html",
    "revision": "9e44d91799ed4728c111b75c079f3d6f"
  },
  {
    "url": "index.html",
    "revision": "b0a22903e27a8f63f28b19c78d944a1f"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "65af3340cc443158a5e254a69ba0de19"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "c26709114ec27dd0ac3e8d3495375885"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "6c6b7fc41fe437cf33de1883747ef49a"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "bb7d37a64055d13e7b4a76957cfc179c"
  },
  {
    "url": "projectteams/index.html",
    "revision": "a727ba039f02ac137cb080b09a4f1f53"
  },
  {
    "url": "studyathome/about.html",
    "revision": "3501d2f5e37ceba69dfceca37a94fc3b"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "197f1d2553be42ae864ea0dd85842c12"
  },
  {
    "url": "studyathome/help.html",
    "revision": "16efa5aa6c912474b1f052559c20b8f2"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "65adc4f5c3f0de93598359715b6a65f6"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "af7b27a2753bd0353d28305086bef8d1"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "0181d4dd14d81263622a36500d9956e5"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "c03a0cbac2d7b85bcc3d1144219a2892"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "2d442aa2f0cad98f6c9a53993253eef7"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "5f30497916930df99ce1c5067ac788f9"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "49ba20f4760435e6bf9953e674e53c51"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "c5abe81d01ef74f42caca9ad465acf79"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "675e4ad1ef879e746010520de88a3850"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "a872af17341f95b6d398dc7b97f3e508"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "142e7571e1c6dbf5c72d3c6b3e005fef"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "ec14aeb18eb72f5314f8cd46cd7e411f"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "ccce3d2eda25b556543ccefb6a94536a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "d5fec058afa7f6c22f09731230470b9e"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "622bf59a57cf39883bb403fd9195ec09"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "84b88fa0d0731d53cee91a9a74537e93"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "8240a1973c435e11ef0409248297a725"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "69a75c5b3cb43e120b4de677b38bed8e"
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
