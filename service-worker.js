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
    "revision": "0c3d2784e73b6dc1ad0fcccd3b69f43c"
  },
  {
    "url": "about/index.html",
    "revision": "169602e715b1a903c456e1725cb5240d"
  },
  {
    "url": "assets/css/0.styles.68416d91.css",
    "revision": "da9cfe3fc0bf5929e3fd6f713320eb4e"
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
    "url": "assets/js/13.5e04c30a.js",
    "revision": "14fc69b8b9152f9544349fb436335344"
  },
  {
    "url": "assets/js/14.76a21a25.js",
    "revision": "18a0b57278f95915296cc4aa32fd5f33"
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
    "url": "assets/js/20.417008ec.js",
    "revision": "08cd8ddae08a7bd0bceaa4cbe8d7b878"
  },
  {
    "url": "assets/js/21.1ec3dd47.js",
    "revision": "8482c6c588aec330f4f6e2a12878bdd7"
  },
  {
    "url": "assets/js/22.72782f6e.js",
    "revision": "fe5bd8ec69a1cf23a22c6307e2f63068"
  },
  {
    "url": "assets/js/23.2ebd7ae0.js",
    "revision": "52df53936b94d342991f9bc9ba4298d2"
  },
  {
    "url": "assets/js/24.e889d094.js",
    "revision": "ae688c8a0ff5021e1ac54c91b21cd7b7"
  },
  {
    "url": "assets/js/25.2fa45e0b.js",
    "revision": "61bdac8ee1041bf656192ccaf85befa0"
  },
  {
    "url": "assets/js/26.e93d5812.js",
    "revision": "bd09199ef675da7e1f8506cb5d075337"
  },
  {
    "url": "assets/js/27.c9d98bf5.js",
    "revision": "52cce88d7e5065e865e684d6235dda17"
  },
  {
    "url": "assets/js/28.a7f01366.js",
    "revision": "5bce7fa6c0ea5085b3ca7bab3e115291"
  },
  {
    "url": "assets/js/29.3fce9e20.js",
    "revision": "843c9aea18c3b5cd96c4aab531626ca6"
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
    "url": "assets/js/38.6179ff28.js",
    "revision": "aa444cba33cca047370de6c5c90509a9"
  },
  {
    "url": "assets/js/39.59b36d93.js",
    "revision": "a9932f45f289999c34f66ce280792cac"
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
    "url": "assets/js/46.fb0fa721.js",
    "revision": "fe8ee102270783be70262e81ac139890"
  },
  {
    "url": "assets/js/47.99e7a29f.js",
    "revision": "82182263ba679e8115d3ac48559f6b6e"
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
    "url": "assets/js/6.c437685c.js",
    "revision": "0f3881b3e365622354a0731b01a92983"
  },
  {
    "url": "assets/js/60.23c20391.js",
    "revision": "402eae872e0f3af49f634bbe87c038dc"
  },
  {
    "url": "assets/js/61.1c93a0e6.js",
    "revision": "cfc0e340309fe057d011513fe83e8daa"
  },
  {
    "url": "assets/js/62.2e51929d.js",
    "revision": "afd909a68e609e1817ffc61e091a9c3b"
  },
  {
    "url": "assets/js/63.a7b5ba99.js",
    "revision": "be2015981bd0692e82c3883d17fe8c6f"
  },
  {
    "url": "assets/js/64.0232ad04.js",
    "revision": "2cffde77da9ca8169174443cc8e98699"
  },
  {
    "url": "assets/js/65.9de10bd2.js",
    "revision": "577f1d2d1956ced4bf60db4a4bd3f536"
  },
  {
    "url": "assets/js/66.bc6249ec.js",
    "revision": "1e3256c7c3d2c62b158196eb30001f80"
  },
  {
    "url": "assets/js/67.2576eef5.js",
    "revision": "81d9b6f69f6c47495bee5244a0a91fb9"
  },
  {
    "url": "assets/js/68.19cb824c.js",
    "revision": "220ab829ea2121a365a4c0996d0e6685"
  },
  {
    "url": "assets/js/69.8339f8fb.js",
    "revision": "2876848f11914b4eede4fc3a8c675651"
  },
  {
    "url": "assets/js/7.67a5d99a.js",
    "revision": "7388a62fb9bf0c9c2e340202a5736411"
  },
  {
    "url": "assets/js/70.45cba2fc.js",
    "revision": "d91cb8c111f1a0341ae04b0b3e39a481"
  },
  {
    "url": "assets/js/71.759fabed.js",
    "revision": "416bba032f463e22d6d4011f00662113"
  },
  {
    "url": "assets/js/72.586c5f43.js",
    "revision": "a5b4888277b1b99946ddbfcce41c1e19"
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
    "url": "assets/js/app.91a3c026.js",
    "revision": "74f0969b7f4fd8a47ffd468dda292e24"
  },
  {
    "url": "contact/index.html",
    "revision": "d63468b83b60f52f809aae041a5aec0b"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "502f25539e4f148c468c139f847bec4c"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "0c96c183a1f38fee2c2adbbff3bed446"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "90cee34761520892eb287417572cbe0a"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "4ad2112001b67b57fe4d3e56204ce68c"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "c600af2af6375972d7990738f9dd825e"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "2271b5fb631581ed4dfd711fce64ddbd"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "3bf10e56db3c33720902ada6727ae6b8"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "20023c229d213ca7bc5f216e01870fd4"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "3e79b3f1b789a9781a51df2017199c34"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "baa8b846bd315da637a74f390f8f0858"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "8f034abb1960aaf8e9da7bf82d7694d0"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "af6cd3783e318e97914270c74faed049"
  },
  {
    "url": "courses/index.html",
    "revision": "0d823b15ac0460cee153d5131d8e4654"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "4586204fde61b2f7c781197b0628ccb7"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "03c6c2d4849e8da88da7bf821d3b1ec2"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "f9dda1695dcc4795d86d10865c7c6518"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "eef70e83bc7b0ffbf9a59a4e3b8b41aa"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "d645efe208e59964e6ec3a6ae23776d6"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "615db04f3d7b35b42bdd5986fa06152d"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "1f5cf3d1b9746bfca40fe08e9a13c90b"
  },
  {
    "url": "courses/template/index.html",
    "revision": "f64272a7c8d127af262f914d534584ea"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "b7164fc7eb3ceb36360565abf1cc5d6f"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "aaedfb83a9a15d587da12df763a50817"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "beee6d38674db1d11cc284a2525c0e45"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "50f27a9e218369d74127db8cb6ccb71b"
  },
  {
    "url": "general/enroll.html",
    "revision": "d56b1536094147f16aa2b32d979c4013"
  },
  {
    "url": "index.html",
    "revision": "f41c842e0f75324cf8bb5c4fc0783dbf"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "8c10c001ec5d219303d9512a008945a9"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "dcac894fca3e5801ad2da5a8221acfe0"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "e27a568f14e76579e1cf420d565f14ed"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "21eb908c62672cf069cae8b80d590583"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "ca4b7cf5b88d2e810a58e45f7a08d95d"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "492a3495781a9c1425d1f139a3249b0c"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "23e9b9da9c1e1597db47a730af7826bf"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "34ab35794021b13290bb4bf54eb7107f"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "fc5e3b36467440d2b5122a7e273ce0b9"
  },
  {
    "url": "more/general/about.html",
    "revision": "4acce4a3c0b0322c297166fad854eab3"
  },
  {
    "url": "more/general/help.html",
    "revision": "3eccc1626d26aaa22ab530a23b49f451"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "533f4a79dc0ca73b685e7f1df6f46301"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "2e9faa596ebf793877ab4182e7484bad"
  },
  {
    "url": "more/general/terms.html",
    "revision": "efc0799e3e0a832a67bfebf3844e8988"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "80e2f35cc13c405fba8d847172add734"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "65b8ca86297b16fbbab9f4824e94b6b4"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "75792b3328cd5ec12371e822ddbb0fbd"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "d6d808d86aae0862d0ecb1f5d030c8b7"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "4c086e4246d8d54d7a90e8aa7e89dc2f"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "ec6e61fd1e92fcd8eae617a0c3959e77"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "7cbad2f574e7ff2b36a7ede4148a9f7c"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "ca2176131049ad15ca60787cd0785d19"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "250dc98f7ba849896c6656897ebf9d3e"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "a67f9e4c8455b911cbbe1afee14c28a9"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "8fe4c542b53655c4b06588065bf8ab79"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "0ecf36f8df5574df131b343781cf452f"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "855051bef66c4bfa5aebf84b3699b7ae"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "5b8cd9e2f93228ac1d6317522ab67c09"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "6ce3549a66b45bdc8c8d630126c39a1f"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "3301461c7df167a70452a7ac3ccd50a5"
  },
  {
    "url": "partner/index.html",
    "revision": "80a99141f0d79c285458d2e22da23299"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "8f85d77a6546803320f44ffea96d7949"
  },
  {
    "url": "projectteams/index.html",
    "revision": "936b8a0652d80ebdeafb08585798b895"
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
