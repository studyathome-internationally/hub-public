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
    "revision": "a41034bb280337dd969d3ab4ea6c588d"
  },
  {
    "url": "about/index.html",
    "revision": "15c637097073e8d774899e21474dc1a1"
  },
  {
    "url": "assets/css/0.styles.b2bee8de.css",
    "revision": "1ddb8216ea10e1925fe5172bcfd8887d"
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
    "url": "assets/js/6.a06fdf5c.js",
    "revision": "49b87dfc4eb31900a71e7fe8851a5e4a"
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
    "url": "assets/js/7.1afdbc7c.js",
    "revision": "53ff4a91244df7453f42ac27a1b820f9"
  },
  {
    "url": "assets/js/70.45cba2fc.js",
    "revision": "d91cb8c111f1a0341ae04b0b3e39a481"
  },
  {
    "url": "assets/js/71.16922ac2.js",
    "revision": "fa0c1052ebc3f8317ec5f386306cf90a"
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
    "url": "assets/js/app.631f2abc.js",
    "revision": "ed56f28670b489070aace57e2c8d34a9"
  },
  {
    "url": "contact/index.html",
    "revision": "3ee3314437378478ca87c787c5bdddf8"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "35b98f9e8063aee765c27bcd37812e60"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "eb6f565beb264a8b7ce1f0691f8a8ff5"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "6a7e0e223d5d243d1c8553645c343133"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "4de3db746da2bf0911bef0391a36aa6a"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "17d54686785e321abb9dec2c11ccb3be"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "865a1dbb432782ae4fb219e08ed23df6"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "2b0ff04ed0519716c44a64ea7af52413"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "57b92391ca84840ed88f5ebb23f7a22f"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "0889e5acd6096ad52170728763e835d8"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "516c437afd9c95c8b1f4fe082c11244b"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "e13ab798b97009248fe03be75786c9ab"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "35e64ca92d26175117cc3e1808f187bc"
  },
  {
    "url": "courses/index.html",
    "revision": "a88a48935ea7427c536e22a7843bf571"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "7c51f222fd76c3b54534707c57c7965e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "5e3809484c3446782e1e1dc45f4f5da1"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "faa1cfa8d192e5620565c1c18ee6caff"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "093df47e10469b0ec945c4c9130361af"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "b3a2cb8a1096ec48c8424796bb729a5e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "e438b24e3ac3ba000e28193b9e162794"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "4c32c316b79bd6d2091cf78c1181b193"
  },
  {
    "url": "courses/template/index.html",
    "revision": "429d2cdd765d310a6acb0558a493da35"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "c5ba3a72998db55e2ebf2e0b4f4fd48a"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "847d1459fd69f740b9ee7146cd057016"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "3339407a09cdb019a3bd0b5018509ca7"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "ce9f451734c77b94323442e6520cab97"
  },
  {
    "url": "general/enroll.html",
    "revision": "e9ac95e5f32d3c7a94628d73000563ff"
  },
  {
    "url": "index.html",
    "revision": "50bf7e93ded3546ec853d3b4e06d1fa5"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "cc0cfb3928db2ba682965fb0f17ff486"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "da73c6daf24b12b7f69138fa0f6443f5"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "81f780c49b9bbc908c9f8b74cfbb44b4"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "da42a207c1b02962ff1c167255d6e793"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "0db57d071d7ed1b96374492ae1fa8e45"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "c3d6a47084724f22155d21945f5c92e8"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "ace5b5949c27669dbcdb2f19669b4dfe"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "c6566e3c47c1a80d2bd33e5b92fc57db"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "137ec46b7ec880944fab95ceface214d"
  },
  {
    "url": "more/general/about.html",
    "revision": "64aeba27e247b4889af09ef5e74c11c5"
  },
  {
    "url": "more/general/help.html",
    "revision": "3a980f02dbd08e95c7dbf9a2d4777745"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "f33cec7f61d9e44998be45919a0f985b"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "00f5eb6c2515eacc755d0b4bc5128836"
  },
  {
    "url": "more/general/terms.html",
    "revision": "1742722f21c8350c0f36b99de15bc2e7"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "d7d47f2da2385265fefbb3ca86fff939"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "e233d20c7e5ccb98b2e1ef05c7514d08"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "cc135e82483ae57168fe2156f579f526"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "4497977efed49cb747be2bef305b535b"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "8644663a0d00b5bea77297e44feae10a"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "6f84d1ea17dd208d179efe9a96add8c9"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "ad8d372e0bf615687bd7bf0058bf15bb"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "dfa7749399bf74286258267dd3659a0b"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "805a8ae77d33d4dd05ff4dbca7e76ea4"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "e96956e100b4f9efe132ef6fa15c261a"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "063cec57b6b80377cfa45483e569ff0b"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "75afae143e7f2d4a3def709a4afaf6fc"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "2bd803c049d2d086cb07037f7458d5fb"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "936f0b58ef23072ed09c15e5d87e59e4"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "b012adc8c0d0b0cc24dfc7b86e7fa869"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "ceebb90ce268bbf24bfa24344e4acc1d"
  },
  {
    "url": "partner/index.html",
    "revision": "f122272b0d6d89e6b0d06f238757d451"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "99dac3711f9a547d7e2246afe98faf88"
  },
  {
    "url": "projectteams/index.html",
    "revision": "19a826b4421d2e070aa8e8d7dc3f0f92"
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
