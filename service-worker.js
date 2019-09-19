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
    "revision": "69c295547cbddf76896bac4036ce7f82"
  },
  {
    "url": "about/index.html",
    "revision": "8335506f73fbf979b36b71f386efc96d"
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
    "url": "assets/js/56.a55f72ad.js",
    "revision": "7928a0fdc3696e89e70b391e868d2318"
  },
  {
    "url": "assets/js/57.a46b59e1.js",
    "revision": "8b857302e8ce6a8538e4ef381577242a"
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
    "url": "assets/js/63.4b5328b1.js",
    "revision": "471065314b7e8b932d960db9a0270099"
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
    "url": "assets/js/67.97634203.js",
    "revision": "561ecc1fa644df8a96a423522b3f38e9"
  },
  {
    "url": "assets/js/68.9dbb157f.js",
    "revision": "4c0d9ed0339ec79f9cf676fb3dd756c2"
  },
  {
    "url": "assets/js/69.1403fb39.js",
    "revision": "8ba4cfd0fd2b23cd7eddf3234f9ab159"
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
    "url": "assets/js/71.5010ca48.js",
    "revision": "ce5e795c3c652d5c4f66bdfac3aec8ae"
  },
  {
    "url": "assets/js/72.f155c262.js",
    "revision": "907973da2ba076f39a85027641465c28"
  },
  {
    "url": "assets/js/73.be6b59a1.js",
    "revision": "4e63c87d65982339b4185729642f3581"
  },
  {
    "url": "assets/js/74.796dce69.js",
    "revision": "79ffaa94636adf9d268916a9a031ac49"
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
    "url": "assets/js/app.7c8459a2.js",
    "revision": "4b251b667fd93db9e852112872edfe30"
  },
  {
    "url": "contact/index.html",
    "revision": "1889206a27367b4490b81c7562495764"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "424cc2861849a5500d0975032f37299c"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "613969080178cad820cfa720ec6f4cf8"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "6947573e8286e891052930fa2c682aa5"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "cd07adf55b62bb741aeedfc6e0eff810"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "e920a0338649b5738c603235f9dc7abc"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "b819cbf2d5265061626a2902d48f39fe"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "f20483b92429bc7541f61374a77540a4"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "ccc0fa59e8414c5e8b4f3572e8465cc9"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "26b81255af1083f8c7c2bafba02a9c9b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "7afbdf9706254148d1626097726867f6"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "d71b588dcdfa81ddfd2be723f21b18cb"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "60d25d47ee2eb608f7693493d15e0114"
  },
  {
    "url": "courses/index.html",
    "revision": "67088e8b38acb3f43c7fe07bca332609"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "4489052ee16fa72405dd95e5593d6578"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "1fb73a1c89841c0fb1d4e6157668892f"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "49af854ee420bfd4ebad13954ef04d0a"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "f59ff466f633e3f7e1e22435fe1bc0f7"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "c687fdd7199c271bf3bb9e45a85c2230"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "3da747cf215c995a61d67aac39ce3635"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "937b218437c41d62bf9e4ebbc810d233"
  },
  {
    "url": "courses/template/index.html",
    "revision": "62144f538476869cb5fb546f68622495"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "7b28c0c6459788ec4f1e56cdf6f9c245"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "74d19a1f9a57e23b7c2793ca5ec7a68b"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "019bd6a46d6fa1858616239734dabb25"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "2c365603fdd578ac08dfe9cc0e316055"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "b4b37e153a2736f3303ecc1e5816a2e0"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "b21a2d83887787eb8ddc7991f04a673d"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "74aca9e1444f3557576f784785f12763"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "84ab30385df50b348ef6ca8e3fee890b"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "2c2f19652403de1ecf94b132b701cc93"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "4c04f7139d9e7f14b263d0cb4435e820"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "84cbf7f0326369a54f9ef8636aaee7a1"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "4396d03a34f9c1276e4a59e81334ddca"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "3766a50633b4467dece53ef7cb325395"
  },
  {
    "url": "general/enroll.html",
    "revision": "5c33a10e73bb8ce964ee35476e59b731"
  },
  {
    "url": "index.html",
    "revision": "4a55359ec1effde273ac2ae562baf99a"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "ced42e8ed424af61c3161f6c71498863"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "5d800c158d8ec5336f5091e875cafa61"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "57d8e3ad3b07ced5309b961b7d4780bc"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "1a833cea2ecefaf5e61a326a75be38ec"
  },
  {
    "url": "projectteams/index.html",
    "revision": "2d638629f42419618ebbc813e5930a62"
  },
  {
    "url": "studyathome/about.html",
    "revision": "45461a6ce9f6b73764d05ba80cb7454d"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "958b65aa9785954f8e985e401aea7794"
  },
  {
    "url": "studyathome/help.html",
    "revision": "f83ca37b63d776eaf88aed3fb6316a10"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2c23b76501a1595df4c6a2e110e3f57b"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d7ee3d23a8f4d1db3a05edc190c3597f"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "3ba64c7e8bc4b6add5f65f075ac42b93"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "38de8f18b3804bd538df817dbc5a4c23"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b15b6e3bd828879167bf067f6caa8b39"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "6849b6a55d387c2ec98ace43a4513a75"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "57eac51ac795fc8aeaa10c9f84fa30a7"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "37d9d3de9a2ea42df1cbfe4408c3a997"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "3ca10e56e1335431ba2c47f8824fee16"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "f3f3cffdf48a7230b10a6e50c6032116"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "1286fde588511f97814500f41c3dde81"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "e806924cdfa67974eb75de7c65532b3b"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "5484eba6da0eaa30ff66cf90de875e86"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "6edcf48d02cae8140f1064eced7afb92"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "115a2ed76e9aec89291e6892eacc45aa"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "b0e4bbc6a43d5b51861679cf22e12d18"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "c54b53f394d6adb7d8ac85ed269d7bc8"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "b0811eec969e29c87053e8f3430b37c9"
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
