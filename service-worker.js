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
    "revision": "3132a1540677c378352b65cbdc92626a"
  },
  {
    "url": "about/index.html",
    "revision": "32863b7e8269889de331d32fb4c2358f"
  },
  {
    "url": "assets/css/0.styles.6e667af6.css",
    "revision": "28b63888e32e2ccc41bd940644552b61"
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
    "url": "assets/js/1.f4aebebc.js",
    "revision": "b7082dc9521e60d6f6ba852c920fc457"
  },
  {
    "url": "assets/js/10.2c4bff97.js",
    "revision": "5a137c27dee42168ae40a722e0978128"
  },
  {
    "url": "assets/js/11.b6a4d7f5.js",
    "revision": "e4a35121d2ac576c547708eac3ecf892"
  },
  {
    "url": "assets/js/12.6876140a.js",
    "revision": "6dd94fba364f9794b766483ecec50783"
  },
  {
    "url": "assets/js/13.37d0a516.js",
    "revision": "52c9bb057e6f46284b10e67f91ef6d69"
  },
  {
    "url": "assets/js/14.0f8fccfd.js",
    "revision": "29c878b6c92db3f1aeaf1f6ab2fab833"
  },
  {
    "url": "assets/js/15.e495eced.js",
    "revision": "d8d37017022eda1507c7c84c128d7e3c"
  },
  {
    "url": "assets/js/16.57c591ee.js",
    "revision": "1070d38ed575f4390d39a81b9a1bca28"
  },
  {
    "url": "assets/js/17.52e25d01.js",
    "revision": "d9adc1532aafc7d4acd55a50252282cd"
  },
  {
    "url": "assets/js/18.9c169cd3.js",
    "revision": "8135fdb4948f51bf5b230c271f4bbdb2"
  },
  {
    "url": "assets/js/19.49e5d3ec.js",
    "revision": "cb29e44c298450e03ef97cf06938cfc4"
  },
  {
    "url": "assets/js/20.589253bf.js",
    "revision": "79078123f089395fc6a6b1de4a6400e6"
  },
  {
    "url": "assets/js/21.cfef4898.js",
    "revision": "b575416b8a88f10ba73935bed73cedef"
  },
  {
    "url": "assets/js/22.72782f6e.js",
    "revision": "fe5bd8ec69a1cf23a22c6307e2f63068"
  },
  {
    "url": "assets/js/23.1b5a85b1.js",
    "revision": "404d217400b8872ab074825e3a960758"
  },
  {
    "url": "assets/js/24.7fe390e0.js",
    "revision": "2eb5cdf8a886cab635c0e0670ee28c8d"
  },
  {
    "url": "assets/js/25.2fa45e0b.js",
    "revision": "61bdac8ee1041bf656192ccaf85befa0"
  },
  {
    "url": "assets/js/26.7cb919a0.js",
    "revision": "39f25135d57b9b18aa8376fe497e1999"
  },
  {
    "url": "assets/js/27.d3ea76c3.js",
    "revision": "458ec9798dff1bbeab8eb9a80c0dc0ec"
  },
  {
    "url": "assets/js/28.7545f129.js",
    "revision": "6cf1c77f35c077fb62a4ce37a5816e4b"
  },
  {
    "url": "assets/js/29.091fba41.js",
    "revision": "fe11c83425d367a9a08cb51d42ea2160"
  },
  {
    "url": "assets/js/3.9dc28b5f.js",
    "revision": "d07d6bc5c26ecb5c91fccc28d2f6a233"
  },
  {
    "url": "assets/js/30.03a02c80.js",
    "revision": "7984343d4feca128a6b1ca374d104596"
  },
  {
    "url": "assets/js/31.b7b0eb67.js",
    "revision": "e26557612f644065e8f9cd84540d6326"
  },
  {
    "url": "assets/js/32.b2914523.js",
    "revision": "2a87cd3335a46f4f8679aac39ad994ad"
  },
  {
    "url": "assets/js/33.c4293417.js",
    "revision": "916c56a8d0624e7004cf77770177b46c"
  },
  {
    "url": "assets/js/34.cfe06fc9.js",
    "revision": "d76c73e6d28b7b97682a832d6eb68634"
  },
  {
    "url": "assets/js/35.7e93bda0.js",
    "revision": "57fa6d83ef91c5456066490c2c03a116"
  },
  {
    "url": "assets/js/36.5ee26cc5.js",
    "revision": "d883d7f2727273aec5bd880dbc3251b0"
  },
  {
    "url": "assets/js/37.fc39638c.js",
    "revision": "d3c27c3f0752305b6f01b23962272b17"
  },
  {
    "url": "assets/js/38.a8247851.js",
    "revision": "68b593da48f3e7d441082879ba5ba45c"
  },
  {
    "url": "assets/js/39.2a23723d.js",
    "revision": "9773446724093697933ae43d228a6560"
  },
  {
    "url": "assets/js/4.8dc79a4f.js",
    "revision": "ceb9b49b66bcc95b4277ed73fd1b430d"
  },
  {
    "url": "assets/js/40.704420e1.js",
    "revision": "4cdd25647a1289160ae3ccd49e520a9e"
  },
  {
    "url": "assets/js/41.dc156c22.js",
    "revision": "11b8d8bf872fac11dd1c06f8f3dd375e"
  },
  {
    "url": "assets/js/42.60e4f383.js",
    "revision": "9f87713beed5a2c7f1a093bb31d22aca"
  },
  {
    "url": "assets/js/43.2ffc9d4e.js",
    "revision": "9426af8af4caacd1ac2b6610fb99b628"
  },
  {
    "url": "assets/js/44.d904d43e.js",
    "revision": "3430932e7f38dc39d65db498df12d845"
  },
  {
    "url": "assets/js/45.69bc69f3.js",
    "revision": "217aa9c2643269a5984caeb45cbb303a"
  },
  {
    "url": "assets/js/46.ccee1efc.js",
    "revision": "6b259fe1a9364d029c7187d07663dae7"
  },
  {
    "url": "assets/js/47.e2a1f7c9.js",
    "revision": "4ca7e97196ec93ec3436299c5ca40ccc"
  },
  {
    "url": "assets/js/48.a435d39d.js",
    "revision": "c348c0c2445074daee027b01f2325fb7"
  },
  {
    "url": "assets/js/49.775eabb4.js",
    "revision": "1ea4c98cfe0c89d94b4429787589af45"
  },
  {
    "url": "assets/js/5.2ab71972.js",
    "revision": "aa02beb70bcdf85586a231c3c2bcdd6d"
  },
  {
    "url": "assets/js/50.a65e80b1.js",
    "revision": "e3a39542ac5dd5846f5de5e08ac53f07"
  },
  {
    "url": "assets/js/51.f567f997.js",
    "revision": "3965f26e61149ac9e0592180ce837dee"
  },
  {
    "url": "assets/js/52.e17f5e8b.js",
    "revision": "c61bb07df6e2e9670edb3e2378c0cd2e"
  },
  {
    "url": "assets/js/53.caa94816.js",
    "revision": "8c67fa7d75b4c6f69fb85f31f2f8e823"
  },
  {
    "url": "assets/js/54.3943681e.js",
    "revision": "fde648316655c6e2952c0d353e0cbe93"
  },
  {
    "url": "assets/js/55.d0125605.js",
    "revision": "8235878903c8799c61cf9d8f42967a07"
  },
  {
    "url": "assets/js/56.f495cbc8.js",
    "revision": "2cb50bf669a14ef221158a9df8a00077"
  },
  {
    "url": "assets/js/57.eb63d5a6.js",
    "revision": "055c47dbddbc596923747c0f3725ee34"
  },
  {
    "url": "assets/js/58.8af224b2.js",
    "revision": "45d7d826a49250802254a91f066dff12"
  },
  {
    "url": "assets/js/59.c596a5ff.js",
    "revision": "172cba39050ac62e6d12c553eb067ef0"
  },
  {
    "url": "assets/js/6.e22d08e3.js",
    "revision": "f8a663e25df60b254b5a6ae64e2995a0"
  },
  {
    "url": "assets/js/60.23c20391.js",
    "revision": "402eae872e0f3af49f634bbe87c038dc"
  },
  {
    "url": "assets/js/61.726ea26b.js",
    "revision": "0eb746b71f0d4c27bec8483649d7ccac"
  },
  {
    "url": "assets/js/62.9d18b724.js",
    "revision": "0cf527421c131a1767f5b211785bbb53"
  },
  {
    "url": "assets/js/63.da79e44e.js",
    "revision": "451728a6b7731f0495f06ea84467b428"
  },
  {
    "url": "assets/js/64.0232ad04.js",
    "revision": "2cffde77da9ca8169174443cc8e98699"
  },
  {
    "url": "assets/js/65.dc996f66.js",
    "revision": "22057df7fff9883dd475d72a27a67516"
  },
  {
    "url": "assets/js/66.bc6249ec.js",
    "revision": "1e3256c7c3d2c62b158196eb30001f80"
  },
  {
    "url": "assets/js/67.4d2696e8.js",
    "revision": "6214fea6d9e20c608b7a4100391290eb"
  },
  {
    "url": "assets/js/68.f035c0fa.js",
    "revision": "36ea422800b95340758e168842ecc17b"
  },
  {
    "url": "assets/js/69.f1f4cf46.js",
    "revision": "8a103026cb2913f9ca08b740a719a574"
  },
  {
    "url": "assets/js/7.15cb8116.js",
    "revision": "064504a28509ad56274767e215058277"
  },
  {
    "url": "assets/js/70.28af8dd6.js",
    "revision": "7b59a168da3d2631a07c31f67a2cf4a2"
  },
  {
    "url": "assets/js/71.cce9037f.js",
    "revision": "4818924b4a2e1e7756de88c0e7350050"
  },
  {
    "url": "assets/js/72.b369421e.js",
    "revision": "570b1604410be12934a8d123062ae807"
  },
  {
    "url": "assets/js/73.b26f59a1.js",
    "revision": "68eb4cfad8afd60a4885fbeb0bb9d911"
  },
  {
    "url": "assets/js/8.e9ec39b5.js",
    "revision": "a8c73a29de2b901ea6a4523a478cc6e3"
  },
  {
    "url": "assets/js/9.1693447d.js",
    "revision": "c3e630d7de1442245abbeb691f421d91"
  },
  {
    "url": "assets/js/app.df0d7a67.js",
    "revision": "966a840c8cdff33af7b7de1026a1dd16"
  },
  {
    "url": "contact/index.html",
    "revision": "58010f9413a26451336df718a7ddd038"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "0924755ae762803b4343e3acafa25ecb"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "c0c5a16e56f3c56ad4d7d32b59c659da"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "bfbd2e1edeaf93e0a8a024db51559348"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "5c562fdee4ae622347cce64c9d575e2d"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "94b6c164e5ea8fea8c80768d8bf8b6b6"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "cb3ee2e943fc1e0eb1bfb348a9f3c09a"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "bee76914bd5741658ec661da5b504803"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "3d128d13af2f14cc54258e3115cd1b08"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "fb6c04b87574c37d067b5f68aec4bd24"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "74301c27a9751dfabd9c7793b9ef68ca"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "c9dc360b446f8f63faacc82222b2e392"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "c30260e9735181cac9b4cd9d29f2aab4"
  },
  {
    "url": "courses/index.html",
    "revision": "02c91c7243fcb6a013dba31d4beae0c6"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "91155ea509faa12c6348394707a93737"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "cfc946b29e2eac24ed8a8a54665c5bd3"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "44e00dd6d7d5a4c9eefbcebf4511e2cb"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "50edd1314228385c691e81527638df72"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "96551922226690ddd47dff98a538c2df"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b645036e162efab50a034d6b520af14b"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "a250c3816d984d34a479118e195c0164"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ddc12108847837c93619ff00d86ad7c4"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "0d3ccc2921a224280a7864fd6506f2a0"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "8dd936936c454c1080379d1363f4eac0"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "af5cad21a3a635781848bb4713df35d4"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "3a1dae776476acb8dfece2789c627e3d"
  },
  {
    "url": "general/enroll.html",
    "revision": "daa90a0cd3c1f38c830210b4eb044366"
  },
  {
    "url": "index.html",
    "revision": "03d3b2124fac1e46a8377ef32eda8bf5"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "f0ac0ce5e3a71dc9cbacb31413c4ff93"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "0ff3569e4620f93b7d59462d7cc09866"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "707bea41bc9f4475817bcc18fa8aa56c"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "629634fbba5097698beb1dac864f19c9"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "20c456f03256ac0bd84621b26266634b"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "3391ea4535d5ab64b3561a6f913d69ef"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "dc2e22cabe95d5c1d85b47659f2dd91d"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "267ca8a34d87c5d5459beb93f4e45270"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "9c9a7bc1b5b5c3623492b81c64d95cbb"
  },
  {
    "url": "more/general/about.html",
    "revision": "240ee588ba2a9932dd31c2dae1ddb285"
  },
  {
    "url": "more/general/help.html",
    "revision": "78c284dd8f285d969f364dda31abcbb7"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "491aa089cb69d6150cf9e15d802ebf96"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "686bd33568390031d75ad132ecf30105"
  },
  {
    "url": "more/general/terms.html",
    "revision": "0a8c597f1c431b33001f786b5784dbb8"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "ddd55b71ddaf97de47f8ffc451331534"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "fd116c17c6e9c4577b8ba15492863c18"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "d4b29dfd2034e958e87a8c7f360fefb8"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "7360f634ae6ea30a714f794b53bb7111"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "62fcf488af5f8d749b6bfc64216ea73e"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "40ee1749aca252172d1d2010428b5062"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "c4e6b54639a7c6e58ee92ae86d49aa6a"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "89188dba6af01c61f0b4e6ac092d0037"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "d3ab349bbfc92671b14d083a8227a2f7"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "91922ba9ca42208b3a2c765ff33ae4be"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "b96e2dd368fbb5e63b565d81f88776c4"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "750d38f0096f8e68be565040ead65b7b"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "e3bae6dd7075d4ca70a81fda3eec42d0"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "cb94b1c691cc21085a94fcc9b8994ff7"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "1ea39ef973d84abca82b4d583b555c2e"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "9b704c80774a068a0c9f2a6850cf05f6"
  },
  {
    "url": "partner/index.html",
    "revision": "4a0365e64c301a638086199d986608a7"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "1e0fa5569f614933da079685b8d41ce3"
  },
  {
    "url": "projectteams/index.html",
    "revision": "2ec6757c46fae7c0bb12429e55928244"
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
