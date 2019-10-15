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
    "revision": "a5e5fcb3e139f5e138d65a77bccb00d5"
  },
  {
    "url": "assets/css/0.styles.0989c49b.css",
    "revision": "5c1176bdb1d90ceba6614389bf6a9ae8"
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
    "url": "assets/img/logos/studyathome-noir-circular.svg",
    "revision": "6892f6e0f75fecfd78404879bfdc639c"
  },
  {
    "url": "assets/img/logos/studyathome-noir.svg",
    "revision": "0747fffa96b77aca8bbd318ee6957060"
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
    "url": "assets/js/1.e50c251b.js",
    "revision": "6d756b2ba3171c6b25acc949b68bc31a"
  },
  {
    "url": "assets/js/10.87150aaa.js",
    "revision": "5bf47716fe55a8ead3f16e0fe8738fa8"
  },
  {
    "url": "assets/js/11.7fea2828.js",
    "revision": "66ef37f707104689830ec278b63c30fb"
  },
  {
    "url": "assets/js/12.59d73836.js",
    "revision": "3cd11579608d1c90d30b8a2c5690accc"
  },
  {
    "url": "assets/js/13.e719a595.js",
    "revision": "4f2c4aad88c993642f6c311a3bb467d7"
  },
  {
    "url": "assets/js/14.b4e212de.js",
    "revision": "55284d9c37dacb5879a3551551d981c0"
  },
  {
    "url": "assets/js/15.e98a5916.js",
    "revision": "172d43e53fff2e85780aad9108655b51"
  },
  {
    "url": "assets/js/16.c268b581.js",
    "revision": "f092424aec6840993495b222ca87a7e7"
  },
  {
    "url": "assets/js/17.f8cf00c2.js",
    "revision": "b02d5fa465a787811fd75b93e102d6d2"
  },
  {
    "url": "assets/js/18.af3101da.js",
    "revision": "3d02471db1896698899f83b1fd725630"
  },
  {
    "url": "assets/js/19.f359d2c6.js",
    "revision": "1312cf3ebcd7c3caf2247bc7e5c2d6f9"
  },
  {
    "url": "assets/js/20.79bc3732.js",
    "revision": "d5e67b77361529892a0b2f4a77fcada3"
  },
  {
    "url": "assets/js/21.7d6ac3bf.js",
    "revision": "5dafffd37f6f44496002146899149be5"
  },
  {
    "url": "assets/js/22.87f3b537.js",
    "revision": "052ace747229f08f275f64d3c5a2b3b7"
  },
  {
    "url": "assets/js/23.cad17283.js",
    "revision": "03494dfd3c169ed171afe2c538fad32e"
  },
  {
    "url": "assets/js/24.e9ed275e.js",
    "revision": "535f6725f4ee743f443eed49de41864d"
  },
  {
    "url": "assets/js/25.afcc56fc.js",
    "revision": "b45e0da2c5f848687940ff56ab2d2430"
  },
  {
    "url": "assets/js/26.348a6708.js",
    "revision": "f02490edf6817bc3c08c607c4c2220a6"
  },
  {
    "url": "assets/js/27.c2d8a5be.js",
    "revision": "5d138d5003a016053902d0b1693b1e6a"
  },
  {
    "url": "assets/js/28.7e82ea13.js",
    "revision": "a4745ab30ad3f2041d3d9de7ea71fed4"
  },
  {
    "url": "assets/js/29.25fca8d0.js",
    "revision": "cada0987c7f41e502ee0f71d35b3adc5"
  },
  {
    "url": "assets/js/3.8bcf6b8f.js",
    "revision": "bf4d634d2093bbaf0ff6ab8186b60cda"
  },
  {
    "url": "assets/js/30.fab5ed8c.js",
    "revision": "3c8c88801c502191532cdede56d0c85c"
  },
  {
    "url": "assets/js/31.4dbf1abe.js",
    "revision": "33511b788ea3e6c15563fb3cb2ce0aa6"
  },
  {
    "url": "assets/js/32.1371e1b4.js",
    "revision": "06a7d1c287d80c53f48605733d650845"
  },
  {
    "url": "assets/js/33.320c184e.js",
    "revision": "d5d9836522f04b855b97df052ce5bb2b"
  },
  {
    "url": "assets/js/34.0d685075.js",
    "revision": "95276013d4bf5adc7dbae84aa048433c"
  },
  {
    "url": "assets/js/35.bae0c78a.js",
    "revision": "8c1c9862e31554ef367b178a21743d2a"
  },
  {
    "url": "assets/js/36.ef97bdef.js",
    "revision": "d8bb3cc63f9b3ce3c9f925fb37803c67"
  },
  {
    "url": "assets/js/37.fc509a60.js",
    "revision": "51c8183ab9698c442c4cbc8678d46cb2"
  },
  {
    "url": "assets/js/38.e1e3150a.js",
    "revision": "17c72c85ea8811a9753b82639d296acb"
  },
  {
    "url": "assets/js/39.96170aa6.js",
    "revision": "6983eccafdec959a3693eb76300ffb4e"
  },
  {
    "url": "assets/js/4.0448d0cf.js",
    "revision": "1366c74dd020964f96fe26ef193b36cd"
  },
  {
    "url": "assets/js/40.2d771d2e.js",
    "revision": "36793ad576a79c5b979bf2ee94e341dd"
  },
  {
    "url": "assets/js/41.828e02fd.js",
    "revision": "39c18f5ac540c868e5c6a0981ff98c26"
  },
  {
    "url": "assets/js/42.b97b0edf.js",
    "revision": "d2485ef1841a12c7b7f708cb91ed4aa6"
  },
  {
    "url": "assets/js/43.5921d9ab.js",
    "revision": "cad1149db0b396db6e459db95ab03cea"
  },
  {
    "url": "assets/js/44.9ad13046.js",
    "revision": "c2c726e83831af28a946d7d40c451dcc"
  },
  {
    "url": "assets/js/45.64967b04.js",
    "revision": "0417c99e0cd9da4796d5ae87e60f3100"
  },
  {
    "url": "assets/js/46.0a15f240.js",
    "revision": "cb8c0759623cbe0cdad1fb82dba24376"
  },
  {
    "url": "assets/js/47.8e0ddc43.js",
    "revision": "7452e5ae96fd1b6f88a7a82a48f8ad19"
  },
  {
    "url": "assets/js/48.7bf1f514.js",
    "revision": "819c42641e0f3063ebf76a277bc245ea"
  },
  {
    "url": "assets/js/49.4093a88e.js",
    "revision": "e7e045f3bd2f1fcec6c0c818a6c99e09"
  },
  {
    "url": "assets/js/5.727a80a8.js",
    "revision": "085ba51c7adc7218a1472416975912ba"
  },
  {
    "url": "assets/js/50.5559ddcd.js",
    "revision": "bf45de56b844d0d8ebe9933d88133a07"
  },
  {
    "url": "assets/js/6.f4c8ba29.js",
    "revision": "7768d5b2b81d16167ccbda554f831183"
  },
  {
    "url": "assets/js/7.84cd0a01.js",
    "revision": "49ec9f631f4244cbd64a1ab9cd2c8c47"
  },
  {
    "url": "assets/js/8.1b73ba97.js",
    "revision": "211e627321245556dc317f711e629181"
  },
  {
    "url": "assets/js/9.0c2febe9.js",
    "revision": "7c1a219f70d10a51ef5394b0e7d792fb"
  },
  {
    "url": "assets/js/app.ecc3e10d.js",
    "revision": "54c5771b2f7b2765da7903f4459661fc"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "745a13c38739f7df1f9a220cce0d8367"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "1300353906be6dfe1f0453b0d63ee171"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "df89db9f27bcb81b825058ad0a0e20be"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "b1763dca47c6e10e7e36c61e4f7f76dc"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "3c8aae00aafe820fef58f51812500064"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "ef4b070e85db3673deb9cef9ff9e4fcd"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "8c468a05c4aadac7887b0ace42fe42c6"
  },
  {
    "url": "courses/index.html",
    "revision": "81a969a876824fb98b9f88e4c7fa1858"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "0c794481a03c132b01b90ea7cedbf393"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "cb1e62540f01ad3d4d3662b8cbcfa558"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b584b8b7e39d3a46eccf4467f638d8df"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8864ee627f665a0e411a240ccc003999"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "dd008a31c1cb88360c2228a1cebb6390"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "36ffe5d1600bc67d9dd75c690d133264"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "a3b7d8cd47c8060abdd7c6a7c36f497b"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "5e7a66ac90be8b4e80f8d86cbd407f2c"
  },
  {
    "url": "general/enroll.html",
    "revision": "a7b1616c8c20062b5cc18b41195a2392"
  },
  {
    "url": "index.html",
    "revision": "8d4586144cb512697dd99b1e148fc98c"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f08a7d523696ca9c27cda3e0c0d95166"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "9902860105aa0e328f17bccbcc1c7325"
  },
  {
    "url": "studyathome/help.html",
    "revision": "e992531a8fef304b982be6e59cade914"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "86524b9114b8e75a9785eef4f3c51965"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "9622e5a640e7ca14b8c66423de3c39e5"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "bddf1651b4d7bc57de8f11faff524ed3"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2d6f15d8644755bfc0b3172db28f860e"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "f0e698ded7b533417b7743b06118297d"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "c6a3ac7d83ea88a5b03f0f2bfde0d4e4"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "183319dc47704462f95a75880b34bc95"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "5a5ac13e960698c49a988d39f40f3ff6"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "93033c58eba54e577a1b70534debe846"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "9181dfe2dde50bba5b60d59a4f83a6c1"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "6d48bf0867121e42ef2f635a6695bd81"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "a390d145ffe4c96e7fa3a09c969d936c"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "a894e4dec0e6c70f8f34a894fa01afa2"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "2ad8a2aa925b5ae35cc4119ceb3ab0ac"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "95e2fcba7b96230f679cf9d591a0288b"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "31aff291d32ccf8ccdb4fefd92441255"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "eac4528e67fae3d5f624192d7bfcca50"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "3cb7a845ef3c1134e0625cfde9dd8d66"
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
