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
    "revision": "acc9a19b654ffee0ae9e8aa50ee7a8bb"
  },
  {
    "url": "about/index.html",
    "revision": "e87bd82a26d7b93a160694716928d7bc"
  },
  {
    "url": "assets/css/0.styles.4d7f1683.css",
    "revision": "6a6c8e83d98ad0a979ea0516650065bd"
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
    "url": "assets/js/23.e6b3ae86.js",
    "revision": "b6cc73acf8ff83cfcff5c48512b643ed"
  },
  {
    "url": "assets/js/24.280e2a38.js",
    "revision": "5cc1f6577eaeb2b2355fd0e31841b8a4"
  },
  {
    "url": "assets/js/25.08386715.js",
    "revision": "800c79fb7c251d92f24b0deba39db26d"
  },
  {
    "url": "assets/js/26.322673b1.js",
    "revision": "c74f176034108d69623e717116e25044"
  },
  {
    "url": "assets/js/27.04038c21.js",
    "revision": "80808a427901e5150ba4fea43dce9210"
  },
  {
    "url": "assets/js/28.4e168f11.js",
    "revision": "ef898fcff82848b6c0f265843a45b9d2"
  },
  {
    "url": "assets/js/29.cb9be08e.js",
    "revision": "69977b8b95041f65e917abcdf23bc60e"
  },
  {
    "url": "assets/js/3.95cb67d4.js",
    "revision": "67a806da56408430ffd9ddcb63063405"
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
    "url": "assets/js/54.81580bf5.js",
    "revision": "cb8cd880116b1b3e64df241bae677f46"
  },
  {
    "url": "assets/js/55.6b437e3c.js",
    "revision": "1cf6e403e69d7cef1414fdcbb6036cc4"
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
    "url": "assets/js/6.2f4f1e16.js",
    "revision": "6c08c421a08e35ad2e09c1d1ef938eb9"
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
    "url": "assets/js/68.4a81869b.js",
    "revision": "8b863b05a9608f7f085a6dd1de8d877c"
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
    "url": "assets/js/70.21703fda.js",
    "revision": "5a77e68b4409f347d9df87f49cb4e150"
  },
  {
    "url": "assets/js/71.60e2e05e.js",
    "revision": "24495f508f05d1f2dfaa51f79dc69a9a"
  },
  {
    "url": "assets/js/72.ba06f7d3.js",
    "revision": "eb1847487ac69ac9e641b659d6b7bf37"
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
    "url": "assets/js/app.fc04f890.js",
    "revision": "53657fafd8ff10134534d127b6cd3100"
  },
  {
    "url": "contact/index.html",
    "revision": "202763280fa9567dd1b7fafa8271c3b1"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "2cc5cf046400cdbcfeff67925f01cb82"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "d78e94dff6a3744303d7de7f7c0b36b0"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "189d1476dbaf13dad991975ac1f65bb1"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "aeb588743d79ea55f1c731231a1e549b"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "1126c22c012b2ee4c90470921b20dd85"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "062ec9f4757439305ccd7ec896938fee"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "ac066ded0b62151d024cab66389fb31d"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "3050bc3e8820df407cd1eca0c47d6eed"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "1cdad8381e590bee7bec2e703d023e34"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "94dc9b91e5106caa8e17988037fcba41"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "6abf1825d85000448ea5cb1faaec2469"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "434d1e2245f7854f29d4edfa99a74b57"
  },
  {
    "url": "courses/index.html",
    "revision": "85de2105546f6f589ad76e83bbaa2ce8"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "ca66bfab5ed2e89bd3f2fce06a5da6d7"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f880ce71cc0dbaaf5348ff92b1ce7cd3"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "d115f2e200558242e2cbcd0dec42bc6a"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a589ba4b241b9c68cec3fc9cf8a77a55"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "b330d673d78050304d0165a5c8ea574d"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "33e8aa6840e692731ac1556f191e3883"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "4b6d82272e8c3eaa152e627654694509"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2bbbf6e92105434782dc174d8346cf58"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "3c3b94f75c468903a9984947330cd039"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "cf1c0c289a6253ce9a178cd533737cb2"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "8ab9f380d222b576854f4cb4ae16bc34"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "291c1f1f3b21221af701acd45b25586d"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "0dc3014b7b28bf6778d998862e2a5b1c"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "c43a20a634262ce4b83fea951e21c462"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "2c14230952ab71842d3bff996c45f8f7"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "be5af6a4fb9ff36efcef324558579138"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "3034f64e753cb55f053eee8d3d5ea6f4"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "f9f8aa50060756b4e52bcd766117161a"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "d779dc59f45b0dfe973062277b8b0e29"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "b8c206a71a879879ccdad086e4e5b4a0"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "db91662ce232c1b0c2a0aa343aa80e41"
  },
  {
    "url": "general/enroll.html",
    "revision": "c1c7ccd0fe052d9d5fdec787de23e4f5"
  },
  {
    "url": "index.html",
    "revision": "a8297817d0b1e79f8a6b86e4b81f616e"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "94db7292c1be169f77e6d283e053ba2d"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "6c1433074ee27112eb6d1f668083be60"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "c62c247c78321a2945d91ed340c5765c"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "962264d97f93c9f1c8a0b2a3c74e12dd"
  },
  {
    "url": "projectteams/index.html",
    "revision": "dbcda3c54d973054d64713b234b7e882"
  },
  {
    "url": "studyathome/about.html",
    "revision": "6251fa7ba9ca74bb092b7fc54024027e"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ca6f6c5c77df810d67e0d5dae7d67ef4"
  },
  {
    "url": "studyathome/help.html",
    "revision": "a552a964841ef28dd8856e02338bb1d8"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "af10c2466cafb0b15491d8cdd38ffed6"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d74cc80cd2d65cdf919cd7deaf980e1d"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "8965ce6cc433387374f5551521dafcf4"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "68c29bc53f46ea3b14f28386bc0d68cd"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "bf347a45c82e70cb5d207cd0f3b7e4b2"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "005083bed0a062d2b452161f73cb0545"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "0693f5cfa41736a331b252fe709cb2ed"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "cf18d211366ab99a04ba2cde81d1a11b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "ebcdb10a346b67911761a4509db9157f"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "e45fd1c759e4082b99b0622a7c6c1597"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "3f9fb608f346cd7cc899a321467a5b1c"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "1fc9f165b4257b63557e030a7f975f75"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "93ebf8d5464c3666705474108a38ebe9"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "5be1971e6fe9523d4a4d9d7305958173"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "f3909683960f97473fa4cecb2f513714"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "2f27deacd311383d3c56bbff04e50f0f"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "953c86acc032dbfca4a874152af538ac"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "c1053db0c155ed59fdcd15a34498931a"
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
