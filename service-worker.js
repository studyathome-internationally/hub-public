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
    "revision": "3ca3dafffcfd894157bf89d9780804a4"
  },
  {
    "url": "about/index.html",
    "revision": "70741783dfe08b6ca2a195cd19e6ea79"
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
    "url": "assets/js/12.b4a9e54a.js",
    "revision": "a7b06390c3704e7b0a3153ec7a910acb"
  },
  {
    "url": "assets/js/13.fec01ee1.js",
    "revision": "ab03735e740a2a2b1411878287d6413b"
  },
  {
    "url": "assets/js/14.c8ed157e.js",
    "revision": "0577fef3b5b1fa69a917d604d80b7eef"
  },
  {
    "url": "assets/js/15.0b16a7ce.js",
    "revision": "9fc3fb18e3c6938d37fbf0af4c02b152"
  },
  {
    "url": "assets/js/16.854ef84d.js",
    "revision": "27beddf2f7d6fc57600570abe230b742"
  },
  {
    "url": "assets/js/17.0999993b.js",
    "revision": "a24b6280279a42a74a5f9237bd8de385"
  },
  {
    "url": "assets/js/18.8b62b47b.js",
    "revision": "91edd8ac8103214520ea8d2a032ac515"
  },
  {
    "url": "assets/js/19.875dcfa4.js",
    "revision": "51347c59c7f520443eb4f3b9f6937e24"
  },
  {
    "url": "assets/js/20.e78913f7.js",
    "revision": "86d293da3c8a361fe49cc7ef68a36dc7"
  },
  {
    "url": "assets/js/21.ff14fabc.js",
    "revision": "38acf4481c2bebb8cb2a49b4cb463438"
  },
  {
    "url": "assets/js/22.c1e5517e.js",
    "revision": "421e1f692c30c323fb0f30d33f81c32e"
  },
  {
    "url": "assets/js/23.7a055eed.js",
    "revision": "8b1a062f0a2416c9d19e68d4b0dd7c78"
  },
  {
    "url": "assets/js/24.436a116f.js",
    "revision": "af8055319e0defa85e87bbf8f9561c6c"
  },
  {
    "url": "assets/js/25.e6845992.js",
    "revision": "de6dff9251306e42e210fe93efd3e0f2"
  },
  {
    "url": "assets/js/26.7139af56.js",
    "revision": "0d7854ee95e4ac6a6ff79f457112a8d8"
  },
  {
    "url": "assets/js/27.fbfa4a2c.js",
    "revision": "bde360bcd30447b43407094766870c1b"
  },
  {
    "url": "assets/js/28.afb891b3.js",
    "revision": "51d13afd9b11b994697452050256eff1"
  },
  {
    "url": "assets/js/29.78dafdc8.js",
    "revision": "96d4bfb65a0a2d2fcb7152e90860b829"
  },
  {
    "url": "assets/js/3.39bb1ea4.js",
    "revision": "28da81bc5cc6ed1f636da1d5e1b224e0"
  },
  {
    "url": "assets/js/30.de90fd9b.js",
    "revision": "5b1694cd159e5e029fe2d3a765e04478"
  },
  {
    "url": "assets/js/31.91a036e3.js",
    "revision": "b52b8bda7a857754d48006bd58d7330f"
  },
  {
    "url": "assets/js/32.fcb642f6.js",
    "revision": "fad2166ef22a0794f9b76f65b9ef0374"
  },
  {
    "url": "assets/js/33.28d5c373.js",
    "revision": "4f8a9bf5e773793b377ea7a0987eec3d"
  },
  {
    "url": "assets/js/34.d5dbf22c.js",
    "revision": "4fd2fc7c2fa20b3d8dea442c062e2c1e"
  },
  {
    "url": "assets/js/35.ba550c23.js",
    "revision": "89f7a9d7762a79a06d4c881c14990eb4"
  },
  {
    "url": "assets/js/36.e2e6c76f.js",
    "revision": "d91195a70fe0737ee5dfda017bed177c"
  },
  {
    "url": "assets/js/37.3eb9db87.js",
    "revision": "f005b7d738ff955f1b33d610f14bc40b"
  },
  {
    "url": "assets/js/38.b6d2fa89.js",
    "revision": "67f43de9b11f4b7fa9f14c4c857e381b"
  },
  {
    "url": "assets/js/39.f37d2f73.js",
    "revision": "d296177bc83d3b691c7abc56a094891d"
  },
  {
    "url": "assets/js/4.731e59dd.js",
    "revision": "855cc14ac635988736b0c2a0510052f1"
  },
  {
    "url": "assets/js/40.00411438.js",
    "revision": "f8b00a9755b61c8f3c8d6c022e06b2be"
  },
  {
    "url": "assets/js/41.0f291f8c.js",
    "revision": "ec6ce95888535d7bab0e61a9f5a923c9"
  },
  {
    "url": "assets/js/42.6d406e63.js",
    "revision": "bab68d02906ab7e1be3460191ac2b3e4"
  },
  {
    "url": "assets/js/43.6cb0602d.js",
    "revision": "360725bf1376dc6a4c3218d90e969e77"
  },
  {
    "url": "assets/js/44.80bded9e.js",
    "revision": "ad6dcda68908329b35d022dc7a8d63d5"
  },
  {
    "url": "assets/js/45.e32f3e13.js",
    "revision": "c66e6e8c315ad637b031124508ae007f"
  },
  {
    "url": "assets/js/46.55afc16f.js",
    "revision": "79c7d2eae3a88f58e39caf5bbfbd8b25"
  },
  {
    "url": "assets/js/47.ff68f9b3.js",
    "revision": "8f44e6c33f23c7d7ace53ddb96b1f47f"
  },
  {
    "url": "assets/js/48.f3286904.js",
    "revision": "c3a09e8cb467221e0d0283d62225bb47"
  },
  {
    "url": "assets/js/49.79996aac.js",
    "revision": "aa72e27a1a909b89a69d0b480f2ce87c"
  },
  {
    "url": "assets/js/5.1fd01b2c.js",
    "revision": "5dd18a6fa3384681263b977207f4ec58"
  },
  {
    "url": "assets/js/50.4ec20fa9.js",
    "revision": "15ae2d700ed26e678636b52a41f61ed4"
  },
  {
    "url": "assets/js/51.177324ad.js",
    "revision": "c168d9144de02ffbfb7a055fe8764dd3"
  },
  {
    "url": "assets/js/52.7dc8730d.js",
    "revision": "20f2e0099f3e694f6c05006cfb74a6dd"
  },
  {
    "url": "assets/js/53.c8df5aff.js",
    "revision": "c358ae3f41ecc4e279eda15580102d3d"
  },
  {
    "url": "assets/js/54.95a3177c.js",
    "revision": "2b9ec87d98caf920d4a6ecbba6253b54"
  },
  {
    "url": "assets/js/55.f0d08e2d.js",
    "revision": "b30bd28aa023472254a3f93ccf17ddcb"
  },
  {
    "url": "assets/js/56.a10bc8c0.js",
    "revision": "0806de1fb104691d2c2f78c7ffaea876"
  },
  {
    "url": "assets/js/57.c47baebe.js",
    "revision": "7540f93b04998e78aa7e7447e894de8c"
  },
  {
    "url": "assets/js/58.a974ad20.js",
    "revision": "5d6092ebb5bff82af560f8dd54914874"
  },
  {
    "url": "assets/js/59.5fb1dffe.js",
    "revision": "ebe371f0aba9641aa63c6116ba632ee4"
  },
  {
    "url": "assets/js/6.ca3f67ad.js",
    "revision": "af0efc7eb0e65944fb04df111e9170e8"
  },
  {
    "url": "assets/js/60.316a2656.js",
    "revision": "7e46a999e189535137bafa96a42920f7"
  },
  {
    "url": "assets/js/61.23ecc5d0.js",
    "revision": "c6752e95088dafa9730e428991bd30ea"
  },
  {
    "url": "assets/js/62.f7cd6f30.js",
    "revision": "6a377bbfe1a09160ef5101a23a4db8ae"
  },
  {
    "url": "assets/js/63.418820e7.js",
    "revision": "734dfff769fdd5f1f46c5d6e5bf69b97"
  },
  {
    "url": "assets/js/64.38029adc.js",
    "revision": "7344a0b6bbc43aaf1ae865929c36f8fb"
  },
  {
    "url": "assets/js/65.674a4971.js",
    "revision": "44b66059495b4140d4584cba9697310a"
  },
  {
    "url": "assets/js/66.cba08f3f.js",
    "revision": "53b655606c12921422cad6a47e48e065"
  },
  {
    "url": "assets/js/67.da6ecf1f.js",
    "revision": "07f76909e0765c18c313e1901afd8fc9"
  },
  {
    "url": "assets/js/68.ca25ff00.js",
    "revision": "7f6d209c0fc7ebc640fe1169d1022487"
  },
  {
    "url": "assets/js/69.3cd20a7c.js",
    "revision": "e5d6ace6ad0d3a32bbfbe8da6ab2f26e"
  },
  {
    "url": "assets/js/7.3d99f1e0.js",
    "revision": "1ed58d6d557209760142d9daf31edffc"
  },
  {
    "url": "assets/js/70.d43c1378.js",
    "revision": "b727b52f690574d45e7bddd4cd18f95c"
  },
  {
    "url": "assets/js/71.516b9ee0.js",
    "revision": "779217d1fe38a8a4606360f289a30205"
  },
  {
    "url": "assets/js/72.9fffd69b.js",
    "revision": "7778ad4580460f4c37d94ae3a52f5775"
  },
  {
    "url": "assets/js/73.1d977029.js",
    "revision": "7af732894f5b1a88ad93b824a210e5ed"
  },
  {
    "url": "assets/js/74.2a102c5f.js",
    "revision": "387c4f6823e85b47680ae24ea585c3cd"
  },
  {
    "url": "assets/js/75.60a546d8.js",
    "revision": "5b69bd84adaed820893ae1a43ef0f21e"
  },
  {
    "url": "assets/js/76.c17d55b6.js",
    "revision": "22869cb3b839ad883eeeb26644894afb"
  },
  {
    "url": "assets/js/77.8158d544.js",
    "revision": "3e6f8dd2d9d198250953ae40c1963171"
  },
  {
    "url": "assets/js/78.d96832fd.js",
    "revision": "93de34a88674d3d4aadd15ba458b9b32"
  },
  {
    "url": "assets/js/79.0b8f294d.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.877aeb78.js",
    "revision": "bf140f8bd867ba5f52a3dffe1cbb70fb"
  },
  {
    "url": "assets/js/9.6c3a03a6.js",
    "revision": "00a4f1d95131d21a69a21c9f2413165a"
  },
  {
    "url": "assets/js/app.4dd2a7fb.js",
    "revision": "a7d4f71179271ca22344569340610e10"
  },
  {
    "url": "contact/index.html",
    "revision": "10ce70739a52cee1abdbb0b1e28e1ab9"
  },
  {
    "url": "courses/artificial-intelligence/enroll.html",
    "revision": "d42799fec4bb978470017b6b59081f33"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "92ffb9f58143a502fd78f1ef65b5815e"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "603e3dca66c1cee9bea9cbb940959b9a"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "084788dd28d66446df531c34db1223cc"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "611360b1bb5693ab4778041c036e2be2"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "33f35c21c6c1917d30d66f427305067e"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "7c31c0c3039432504b0577665ec796b4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "30926bd6a99ff1ce6de53e539209d748"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "198bacf679a5d52433384159ae0983c3"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "3855a45a88ca3cfad1d17ea7a37a86a5"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "f625168ce5509c9d347227a577d737f8"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "04c02b246cdfa1ae58cf0d6cecc68f8d"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "423dc11be78708bb1c99c80ed71f4d43"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "b5ffd5b37824a981e99cc927cf6a5fd7"
  },
  {
    "url": "courses/index.html",
    "revision": "c04250296c4633543bec5d6aa24aaa70"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "17e6fd5271741675d93f82d6ac0d697d"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "b61306c4b2fc2f1a986d8e208ef19e29"
  },
  {
    "url": "courses/iot-standards-protocols/enroll.html",
    "revision": "ec2f36be9a584356edd84c6970590e57"
  },
  {
    "url": "courses/iot-standards-protocols/index.html",
    "revision": "e757f647e3de614b398b682eae61904b"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "be6990e1a771d2d0069a2a8f15961b6a"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a446877e668984be2e1afcaadd876c73"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "8b8974fabc39b897f1445d0aed582322"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "55f1bce027600c67bf7d465db51ed012"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "bb64e1a36eb233926e9f3ca584f9521e"
  },
  {
    "url": "courses/template/index.html",
    "revision": "fd816afc0b54c6d2f6a87789729e2d6c"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "2a25a175e9c9ef8c3153dcecb6a946e5"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "295730cc8bd3ff6b0b8ccd69ce369ab6"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "fc85af84a28d0f274a37d25f120245ec"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "2a8e55d04d259004e1506ca1ef6a075f"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "7845ad1ece4299a56ef325864a2d0245"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "f0de02eaaed439b1fcceafdaa52a2a85"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "262fe76bd58760d1e9d28ad216cd2cca"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "092fe1943eb542f1f6874710eec8b48e"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "cf4d7ff16aaa0a84cc0db68ea7c90d34"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "d566dc05d051cd88878d2e793c451b5d"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "94274bacb0fb52401e8ebb121bd5cd1e"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "88395ce3d79a05238fc64e0916bb77c7"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "a6d84a914e1dce9ed0d01d121b954866"
  },
  {
    "url": "general/enroll.html",
    "revision": "194f0b97725081d906463728b73a4fe2"
  },
  {
    "url": "index.html",
    "revision": "fe428cfbb3f23f176215a4cda691b579"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "3216c2a2650c82f4819c6fceac02ca63"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "7981f4ae38401923ec60c5cfa525c9ed"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "c3fce4cf7516fff07822a1d0eeb20032"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "fbc965b3aa6bfdc32fc7dc5a81d5a31f"
  },
  {
    "url": "projectteams/index.html",
    "revision": "91f6d13750a162c59a193559ce3ac048"
  },
  {
    "url": "studyathome/about.html",
    "revision": "325f0ec614fa2077678feb192095fe8a"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ea6e1e234a61302b76ebb101d846d265"
  },
  {
    "url": "studyathome/help.html",
    "revision": "598d93681d04d9af4ab3da56d20d89db"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2bf10e2cfcc3b98cba7c06fdec69d2b0"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "fcf6ec7fe4fbbb01d22795cfc9e74873"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "34d797bd8cd0ee93d377d671ff431df7"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "037a2389f0ee0749bc4895926b57d9d6"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "97a631db546eb3589efb4ad8b92dbe3c"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "864a9375f86fc3518fa997b1a5fc3f1d"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "c0442e09ee02c2895ad6a840890eb1bc"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "a194612730cb44c9bfb86c2c40c1f7a8"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "7fef946e6923f536fe71a87cfd62e022"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "71337fd50e85c3c4dfd9b6e31814d02e"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "ebfd3f85600c9c00efa500a65beb9bac"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "6bbf83d4ff5bdf6139fa3e8e14ae86ee"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "d223c657ddc7caba8de18787cf6b9e16"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "0ce93f48be138c1982505d10b273d28c"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "d3f87fd6044ab167ac7f6e9a68a8799f"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "08393f2dc8c6f3a9c013b4581a880836"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "65a18c9af85c9830868995edac78aff2"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "1b132ac2ae2ec8ce1e5dd9cf5b1a34d3"
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
