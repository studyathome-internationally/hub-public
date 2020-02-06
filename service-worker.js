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
    "revision": "cbdfc58877799d98ec195912fac59a2d"
  },
  {
    "url": "assets/css/0.styles.20043176.css",
    "revision": "b0ed3b91ca4583ed20c81989e3afbb97"
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
    "url": "assets/img/partner/uastw/digital-factory-1.jpg",
    "revision": "2009674f2ef164e6d70e65e7de9e8862"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-2.jpg",
    "revision": "1cacabc550cc227647f2e5b2d29faebb"
  },
  {
    "url": "assets/img/partner/uastw/digital-factory-3.jpg",
    "revision": "17713de74a732cbce1588ad714e0cf2a"
  },
  {
    "url": "assets/img/partner/uastw/uastw-at-night.jpg",
    "revision": "bb98ed986758d05549ae03342857dd73"
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
    "url": "assets/js/1.9415419d.js",
    "revision": "56a572b829bcef51feec89903c397218"
  },
  {
    "url": "assets/js/10.585aab42.js",
    "revision": "0c9d548d289525f382f28cf29141b052"
  },
  {
    "url": "assets/js/11.e10829e4.js",
    "revision": "91319b4ae190346f1580343de120a12d"
  },
  {
    "url": "assets/js/12.e0f2127b.js",
    "revision": "f9f5b0d6c860d3e05ad69d80bc7e8007"
  },
  {
    "url": "assets/js/13.a376061e.js",
    "revision": "4764e5d12536817541b043c68b5f5464"
  },
  {
    "url": "assets/js/14.cf173319.js",
    "revision": "d025519979685582553adfe4a0ac770d"
  },
  {
    "url": "assets/js/15.8f628a4b.js",
    "revision": "98550d6b424604262ac13d0791cc176b"
  },
  {
    "url": "assets/js/16.3a11e236.js",
    "revision": "1ed8718964abed8eafb619bb447c82b1"
  },
  {
    "url": "assets/js/17.f0e2bef3.js",
    "revision": "33d87c969d746efd04c0df41f2682ca9"
  },
  {
    "url": "assets/js/18.8a4cfcef.js",
    "revision": "46c9de19c89417bea56b694ce0944b38"
  },
  {
    "url": "assets/js/19.dd738210.js",
    "revision": "d55a744e47a4e0b1a47b4d707be56f25"
  },
  {
    "url": "assets/js/2.5b89b256.js",
    "revision": "64a56bdb6f00fe6da8c18c50ee51f1c2"
  },
  {
    "url": "assets/js/20.344a91b9.js",
    "revision": "7f0fb04de911160d3f0681c2896630ae"
  },
  {
    "url": "assets/js/21.6e481ec8.js",
    "revision": "4cb5348e39a941988d6ca0245b1be534"
  },
  {
    "url": "assets/js/22.41c9b572.js",
    "revision": "b89cdc670902569173894e2d532b5d31"
  },
  {
    "url": "assets/js/23.b441b29a.js",
    "revision": "e6b55e108fbf63230aab1a6e9c8b184b"
  },
  {
    "url": "assets/js/24.feeb890c.js",
    "revision": "4b0c4e5f65f0758155797969cf1fe034"
  },
  {
    "url": "assets/js/25.f24f02a2.js",
    "revision": "1d0dba1b0691306fd21966b57780a0b7"
  },
  {
    "url": "assets/js/26.37bd9360.js",
    "revision": "07d7d9c7a1f615e86b3fadb94d80bd2b"
  },
  {
    "url": "assets/js/27.a5d1d677.js",
    "revision": "7220b1bb95218fdb82607d3fe3c35101"
  },
  {
    "url": "assets/js/28.656c5fe3.js",
    "revision": "4bf9abc92e7a446d435492c929854872"
  },
  {
    "url": "assets/js/29.785267e8.js",
    "revision": "6cc37250ce8523493f01e8ebae2f0f1f"
  },
  {
    "url": "assets/js/30.09f83f56.js",
    "revision": "ee3a0645622ea8a9418084248c6136c1"
  },
  {
    "url": "assets/js/31.107e4fad.js",
    "revision": "7a32f6e5a172443d615a362090f7ce78"
  },
  {
    "url": "assets/js/32.d43c4461.js",
    "revision": "6034b5aa3d8df5c26b30d89172e02c4e"
  },
  {
    "url": "assets/js/33.3569c501.js",
    "revision": "b3c3b18d550c32b62cdf18b9673d7140"
  },
  {
    "url": "assets/js/34.a570c22b.js",
    "revision": "7e0d2c9785bcfe4f40a3c487c6afc052"
  },
  {
    "url": "assets/js/35.22b365f8.js",
    "revision": "f3358535d57b81feff8d3d79829c3f48"
  },
  {
    "url": "assets/js/36.9b4b52ae.js",
    "revision": "ab629e4e37650d965400801dddf463a1"
  },
  {
    "url": "assets/js/37.58bd7a1e.js",
    "revision": "96b33307f85587a25ba2729151ad7c2b"
  },
  {
    "url": "assets/js/38.de4b7c5e.js",
    "revision": "f7f74d017e41091876b68ed09d56d0f2"
  },
  {
    "url": "assets/js/39.1b7758c3.js",
    "revision": "13a23633440e2277dab409ba686c0783"
  },
  {
    "url": "assets/js/4.ad2707c5.js",
    "revision": "cd93bc6220e50114b233c34de111f012"
  },
  {
    "url": "assets/js/40.c2201a04.js",
    "revision": "88226fc814bf675b011db9c917b079ef"
  },
  {
    "url": "assets/js/41.6de875a6.js",
    "revision": "ccc0a4fe12b1677fe18b34c48c755964"
  },
  {
    "url": "assets/js/42.ec7563a5.js",
    "revision": "165ededf39a677e3c5728a4b9836a374"
  },
  {
    "url": "assets/js/43.832ed221.js",
    "revision": "6408953cbc808f28e9e3c11db6c79199"
  },
  {
    "url": "assets/js/44.77a91b67.js",
    "revision": "96158aba04546eeaccf269b8e301c406"
  },
  {
    "url": "assets/js/45.7c4e53db.js",
    "revision": "14c131722b0cb7b61d2b02851c44dd80"
  },
  {
    "url": "assets/js/46.423234e1.js",
    "revision": "c4dc91ce62afc0f1e535a72330968a2a"
  },
  {
    "url": "assets/js/47.86a6852d.js",
    "revision": "e95d1377e855a8cf7546f1a0d02fd4a2"
  },
  {
    "url": "assets/js/48.a41e8c32.js",
    "revision": "45c0175c5120d2a78fad5f110351c709"
  },
  {
    "url": "assets/js/49.ded94b7d.js",
    "revision": "2e5d4f96c51d9893c7a86d938e093df8"
  },
  {
    "url": "assets/js/5.8c3536ca.js",
    "revision": "5f6c72454f1e621879f5eefa9d5f138b"
  },
  {
    "url": "assets/js/50.f3ac9de0.js",
    "revision": "c76ffb7d8cce3affb121223ae90d3d25"
  },
  {
    "url": "assets/js/51.8a4b4783.js",
    "revision": "5287d266df78b6ab6aaf739f327bae26"
  },
  {
    "url": "assets/js/52.7df03774.js",
    "revision": "e34c7224032c12643202a88a9a753241"
  },
  {
    "url": "assets/js/53.605affa4.js",
    "revision": "375350265f5e340b9a0dd279dd2930cb"
  },
  {
    "url": "assets/js/54.86884793.js",
    "revision": "73d9873ef49218e01c2ab6d11e145f2d"
  },
  {
    "url": "assets/js/55.8f3255fb.js",
    "revision": "162f662eaf513ce44167c4ea02f81b67"
  },
  {
    "url": "assets/js/56.9da4f9c3.js",
    "revision": "56261796042185b1712fa7199d2282c5"
  },
  {
    "url": "assets/js/57.76e513c3.js",
    "revision": "cd982c5fb315d325e0316a171873bc2a"
  },
  {
    "url": "assets/js/58.585a0476.js",
    "revision": "782cc0f210e7547f4a6463193d946d9c"
  },
  {
    "url": "assets/js/59.f4acfd9a.js",
    "revision": "3ff013fed79b382d9218d5991400a85c"
  },
  {
    "url": "assets/js/6.61cc1f54.js",
    "revision": "9b12384d8206d6fbc01959078f81f044"
  },
  {
    "url": "assets/js/60.96dc9875.js",
    "revision": "b3e81639e2a0427b93cae4c8eda92864"
  },
  {
    "url": "assets/js/61.a3356aee.js",
    "revision": "da1de41261046e8537b6544decbc5d06"
  },
  {
    "url": "assets/js/62.49678ec8.js",
    "revision": "f957b0e80345fa7361a8c6ea7655f76d"
  },
  {
    "url": "assets/js/63.aa734b4e.js",
    "revision": "ac4bb08fa40cf1a0de8f9d234d2f1464"
  },
  {
    "url": "assets/js/64.d79e4ba4.js",
    "revision": "98503b2835458ff37c38ad37b3195d22"
  },
  {
    "url": "assets/js/65.9fed7eb0.js",
    "revision": "060aca02363c5f00ac0f09555d90f38e"
  },
  {
    "url": "assets/js/66.9fa6f783.js",
    "revision": "6782942ec0de56ad66623fdcd979145e"
  },
  {
    "url": "assets/js/67.39863d28.js",
    "revision": "f7960f93b8573edbdb6b3890cc12e199"
  },
  {
    "url": "assets/js/68.156fbdd4.js",
    "revision": "dc6e72e67bf9f831aefac76ad570e1b4"
  },
  {
    "url": "assets/js/69.f5162c72.js",
    "revision": "d14fae7e0a0129ed6c0e98009132726c"
  },
  {
    "url": "assets/js/7.bfa384c3.js",
    "revision": "e985446a0492427824ca1da5a27176ce"
  },
  {
    "url": "assets/js/70.e565ea7c.js",
    "revision": "0534793e3d45e3bae07e798ff96a3d21"
  },
  {
    "url": "assets/js/71.1001963f.js",
    "revision": "76be37536c7597343893ef6cfb1551c8"
  },
  {
    "url": "assets/js/72.292b6872.js",
    "revision": "add5232b86b3101bc83f97e03abefc88"
  },
  {
    "url": "assets/js/73.de16e765.js",
    "revision": "4ee2db230e6d7454d3624f8126145de3"
  },
  {
    "url": "assets/js/74.03dc097d.js",
    "revision": "8c01b3e8890a08047fef451ba1fe37f9"
  },
  {
    "url": "assets/js/75.9303adae.js",
    "revision": "bec9b4ccb0ee9d8ee0bd46b715f82d6f"
  },
  {
    "url": "assets/js/76.6e1474d6.js",
    "revision": "772bddd7ae2873b1913ba5c3ed32ade1"
  },
  {
    "url": "assets/js/77.e0450bdc.js",
    "revision": "a33a5f001f0d0de793f95d8f99ce0c07"
  },
  {
    "url": "assets/js/78.ca9b6374.js",
    "revision": "1289c8010aaa6f45895731318626983c"
  },
  {
    "url": "assets/js/79.51fac5a9.js",
    "revision": "b333d5a7d24d50691a59d26098cd1c01"
  },
  {
    "url": "assets/js/8.dc6d0d17.js",
    "revision": "c6fd9805ba6626c525368d93945287b5"
  },
  {
    "url": "assets/js/80.7dcac828.js",
    "revision": "0f9a955ad9834f87111c282b297696e3"
  },
  {
    "url": "assets/js/81.56c0d9be.js",
    "revision": "d19a376add3e3d1e638890f97bb17ddf"
  },
  {
    "url": "assets/js/82.d4d6ced4.js",
    "revision": "cb687c2fd637551fe5a3b47506a81289"
  },
  {
    "url": "assets/js/83.c90ce682.js",
    "revision": "46b63608ea56d676b4ede4b27c98c9d7"
  },
  {
    "url": "assets/js/84.34170fe3.js",
    "revision": "52cfda86eba5d09af3c680f8e3230d15"
  },
  {
    "url": "assets/js/85.c6f45159.js",
    "revision": "620c7bb9f9f20e38d5a35a627c593706"
  },
  {
    "url": "assets/js/86.2450c3e7.js",
    "revision": "1063e1124cd94e00525d191b2ada0a76"
  },
  {
    "url": "assets/js/87.47c0970e.js",
    "revision": "c94103db7492fc0c28e6484144a109eb"
  },
  {
    "url": "assets/js/88.a2bb3fac.js",
    "revision": "9dab6c9e8a951218152fdfb81ecab478"
  },
  {
    "url": "assets/js/89.2773161a.js",
    "revision": "26d01410516195ce47fa64c813a08250"
  },
  {
    "url": "assets/js/9.f5a61d34.js",
    "revision": "defe3dcdc4e220cbdfa37560a5d43ddf"
  },
  {
    "url": "assets/js/90.4e2b9124.js",
    "revision": "accacddced7916c37ea5a6f5a7c82fd2"
  },
  {
    "url": "assets/js/91.8e4df8a0.js",
    "revision": "59f14704146a0273083f7d44b5c6a58e"
  },
  {
    "url": "assets/js/92.79de09a2.js",
    "revision": "0f7dc3e5da8c0357fac7fa5ab4e72db7"
  },
  {
    "url": "assets/js/93.3500945c.js",
    "revision": "f157e18e1c2393f71fb11445afd2cb26"
  },
  {
    "url": "assets/js/94.0fe7c289.js",
    "revision": "a4d3fc3d42ae73973bf79c3a20303894"
  },
  {
    "url": "assets/js/95.8c118d26.js",
    "revision": "fb53eea5c862f40fb1a0f226f9bd9b87"
  },
  {
    "url": "assets/js/96.ae65bcf8.js",
    "revision": "d8de6f5a7e52295006bd783fdfac03d3"
  },
  {
    "url": "assets/js/app.16bbd626.js",
    "revision": "7e6c8889b861a298ba255264ffefa9c6"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "2ead7f7e1a878aa889d028c62d85d311"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "7787894b682d822bbe3213f3c783785f"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "740620e874a263fe7d530beb5b3eaf2a"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "6b27913a12c55a961fb909dda13bd86d"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "9aef59f0ffac462bc03399260431bbdf"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "2b293d98f6489f2ef8d943dff37716c2"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "a732efdc80b34c747239a95b796c542b"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "855060bb284923432ea142508a7f2781"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "17422b598e7395a8722e948ebad08d7c"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "6e56f3e1056b326b2d09a7afb733a9c9"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "89edf50c5024d7e6996c51bb8e05e95d"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "abb11988c8616e1c6df0a8a78168bf9c"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "827869246bab087c8f82e470765f51f5"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "1eba82c887020f8c54adbff423cc18fd"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "9594f11be1684ff944e5082ae457f362"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "275e9a061d173576999e4c18575e83f9"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "bef6916f27f8e6851f1910f80163c7d3"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "f786c1523a183feb0048b730399fec4b"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "4cd5f10a7462fb72e81765bdd29c8b67"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "ffaad841c4fb5bd7d11db07eae6510a0"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "ce3f5d86e49b02df499432b38bd06c3f"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "bd420ca9da1e989f57cccd302c02edbb"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "47349d67f8d670e49d3bb90f4e921b91"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "8a8bca7374d9a8766e72e8b18bfc17c9"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "cf7172a56a3b02a7aa642444c1c5a2f3"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "19e27049a7d1f4bbabc1f07214f082a7"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "5b3fa357a1ce841b54fd7d85e700c429"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "7f31a6d38f7a1174a1086b5c08bf754d"
  },
  {
    "url": "courses/index.html",
    "revision": "a7889b7cc239901fd686505b8cd96b70"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "08807f4cddb4261c72d6554754f72c8a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8ed4337af78287c3b4a48f20fe02ab84"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "098c6cae8fecd18b99abf9ff134e5a63"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "6920e2f6f52b09689a58551973114299"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "cf4ac280bed840480ef42d2a17391267"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "ec073b665e96d062d8228dd9ae650c7e"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "c9cc0a93a5a26b8627313a6c1f3bcf68"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "1b21a7177238176e2fb29d4d152dd574"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "0b5bf026b09bdab3899fb8496033fb5c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "50949b1e3cf497921b82a486a06e0d0c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "04efccfb916c880f3a9844c0d18af4c0"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "8f62bad77f7d56b4baa5260d0823df76"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "ea673b5c38d758cda1451d4b0324606f"
  },
  {
    "url": "courses/template/index.html",
    "revision": "5eec66fde9a15cb15789a79192bf431c"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "83333668cace8a9af67790597d2f429e"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "fa5e9ca6967780f0299dd70909cf85aa"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "518dbfc8247d71023fa2ce0750ddf5eb"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "afd28a47c9028efed83fff85a37f3114"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "9758da5607f19286ee3748a630f7d8c3"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "da77a686012f69ed950d864c94d6bf51"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "f3c1de7cee08eec5260f76a16a049fbc"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "014fe170d5a7b95e4835cf11a2199943"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "9acb882a5ec294ee4dd5c32e4ba13a05"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "22faba4b1938012eb961c66e4bb394d6"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "bf58bd8a6210511565f2073429ef4254"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "5452702de15b16e0605f02e2705593ea"
  },
  {
    "url": "general/enroll.html",
    "revision": "714ff7a7960c642481f443c56a725521"
  },
  {
    "url": "index.html",
    "revision": "37406c3f1bb1d8f19f6e4cfae4ed0a28"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "8c7fb360ba3444e26f2ac8f4a678af70"
  },
  {
    "url": "studyathome/about.html",
    "revision": "269750710fbd75cf3ea4faaf38b18c76"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ada6836a1ad3e033c5eea661d8ba6a83"
  },
  {
    "url": "studyathome/help.html",
    "revision": "f040754caa3f55e4526035378728b4e1"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "29e99fcb0fbf85c28e3961efbe829f07"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "c9aabed1b292bb8c40764c0be27c2dda"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "bede3b690989a6a41dd2206fc074ea04"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "8e94bed83c219c88ccdf7d459f2405f6"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "69abf69234ce8f48bf445defdbee645e"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "80a3c9960803e1da21856d2fb2795f42"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "5601c33c24c973eccfce5f252d96130d"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "4acd0ff140e18d73e22a2131044b721b"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "6ed154c37d0ab6b52b719928e0cd046a"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "06ddc96799ffcc5f504db50e16c8165f"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "6a5af7b2b11fd6c82c5bdc5bff3d7086"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "57cfa73d24d6fd1c78a43e8e9e068f8e"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "44b356b4d1787f92ec25e07d36863898"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "4b5c0c76225fba35aa47afd62e71d025"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "2414cbf641bd1937748813cbd9317c51"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "3c957ab3475aff026d69d75bad3d2dd8"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "cc26ad7885cae31f2692f2d2a3b2a6ca"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "0b6a2331e2db564fd57612ce1d97ff46"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "32a9d31223f802658085270b3effd6aa"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "a1fae0f1cdaf9e211caf4cc5f5b5de8d"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "571c2a9e6ce97b8a9b7061db46ecbfc6"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5011c4674b9c5daedb36aa12b991de00"
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
