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
    "revision": "299333dacbd26961233f3f008e9bf42f"
  },
  {
    "url": "assets/css/0.styles.48127e1b.css",
    "revision": "df21bda678858e49f35f91079e1357fa"
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
    "url": "assets/js/29.a176b083.js",
    "revision": "f40f56e74c87c3abdf36d92038b3be2b"
  },
  {
    "url": "assets/js/3.2da447f2.js",
    "revision": "e726cc8547369aceec5301a6b5e42902"
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
    "url": "assets/js/4.75881ab0.js",
    "revision": "6b6093ba06fa91c0987cb0904689045a"
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
    "url": "assets/js/app.7b0a35db.js",
    "revision": "748f7a9a2d1c30d9aa8027c4b99a0aa0"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "d943773b1edd97929651961d7fd0a54a"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "20b86e887a1b591d773b731cb12311ce"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "e9d46e25ab5fc7aa50256fbf61b5ab20"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "b283efda8e7179f61df063f9e2b0e044"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2b74602121863d51679a3ae2d53ee9ed"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "41158035d54f2d1c1964381a80fc1f6d"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "30cc1212b9290ad6ca3db9d9ec5f2629"
  },
  {
    "url": "courses/index.html",
    "revision": "0bf6c25b7957d5e896cbeba3ec37865d"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "3512a35eb9bef5116b701e165968f8fe"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "5921bca7a6feebda623ac9aa40b1c923"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "96eddeb27ffa30403041410983da6d49"
  },
  {
    "url": "courses/template/index.html",
    "revision": "2ff641fb576e3b05dd81d847447c6b4b"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "deceefc51efee5a9a1bbe445eef8e528"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "08acc23cf5a14d040e82a86a64db77b1"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "cfed24064721f41fdfa2ec56a295b4d0"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "70204af9147249772ba1a43e601cc8d0"
  },
  {
    "url": "general/enroll.html",
    "revision": "e1e9f9d47962f285f79c4c9305e42679"
  },
  {
    "url": "index.html",
    "revision": "3a93f60df18bbc104aecf44eac93c41f"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f677b085af42dc487689b1975502f5ce"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "bb6132454a353a58f1aa8169664df863"
  },
  {
    "url": "studyathome/help.html",
    "revision": "df0725eb64ccbd2d76ba358f280369af"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "a16237c21cd809543941fcf9eb44f50f"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "134420736843602f24b334ff8d5e9ca2"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "097dc4ee391b45fa608588f0fdf610da"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "18cdb4dea22c1f3ba8bdf1bc9abfb6a9"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "ac93187e9a0106950366c3a1cf62d992"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "0ec457f096773e46f46e1460c36f8658"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "caef1ae8dea32bf4b0c0fa6b911b5b16"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "46467750de79c1b0ebf239190a4a3a22"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "666c6af97506d91f2746a213964bd13e"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "f5f82fd321ec2292e2f9ed5358a6bf67"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9377002030090c64336c55c901f7fe33"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "1a020413abce1c17f998ad468f674525"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "a2f85cf8c936054dd9896d8f4a13e338"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "e143f5e1846b21e948b4f1f70e56b785"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "1964ad21bfb3e6da3be2a0adc8f871bb"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "159475257a4dd13bc272b3c170115c84"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "10514e3933f29a342bfe86e07dc90118"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "b2c345178c907825856accd82b59159e"
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
