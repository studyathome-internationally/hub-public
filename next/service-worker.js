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
    "revision": "79d078764e8e9429e99753f6a22f66de"
  },
  {
    "url": "assets/css/0.styles.0e3d823b.css",
    "revision": "29232992bf33726721e4f4e848dfe641"
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
    "url": "assets/js/1.99d402b1.js",
    "revision": "7539edd78bd0b3ce9ab25e93a2de41da"
  },
  {
    "url": "assets/js/10.4b11af65.js",
    "revision": "2947140896b2f65169004141b41df285"
  },
  {
    "url": "assets/js/11.0b5deef9.js",
    "revision": "478484854080d5437fc20887807e0e5b"
  },
  {
    "url": "assets/js/12.309649f9.js",
    "revision": "3734721fb120e0d8872be7179f0f6bdf"
  },
  {
    "url": "assets/js/13.d1e1538d.js",
    "revision": "3921ea607ff03bc11e54c570ec1f140c"
  },
  {
    "url": "assets/js/14.98c3e089.js",
    "revision": "8fb86c1f0adc11655a9d602a225a8595"
  },
  {
    "url": "assets/js/15.3ec40f8b.js",
    "revision": "398c23263299d75e971cae228fe473f4"
  },
  {
    "url": "assets/js/16.1b376216.js",
    "revision": "170933b123adf075ef67e66153eaac13"
  },
  {
    "url": "assets/js/17.57da167d.js",
    "revision": "6f5f835969f6e974c2b476e4eeb49120"
  },
  {
    "url": "assets/js/18.ea8d31eb.js",
    "revision": "057953df0b6146dca6bcc21d82d8fb8e"
  },
  {
    "url": "assets/js/19.72029681.js",
    "revision": "7b33bbfbc2b13530f3376dcc385a850b"
  },
  {
    "url": "assets/js/2.1892ee60.js",
    "revision": "cff1079ac6f98184173d8a402b64f9e9"
  },
  {
    "url": "assets/js/20.c3798290.js",
    "revision": "663bedad234ebad473328edd7bcd24aa"
  },
  {
    "url": "assets/js/21.760bc1cf.js",
    "revision": "aa9b99c91cab2d0e1adb3d9d54ec1339"
  },
  {
    "url": "assets/js/22.a1a0fbd5.js",
    "revision": "b99a8f58ec4eebfcc0b079acee968dd5"
  },
  {
    "url": "assets/js/23.4e60d3b5.js",
    "revision": "ae08432d6cf6b4d19a9b67dd82376e07"
  },
  {
    "url": "assets/js/24.fafc6c6f.js",
    "revision": "98215608c25c52ca559b3d1088fc016f"
  },
  {
    "url": "assets/js/25.efb8eba2.js",
    "revision": "ff986c8d99fdb4ba79a12a7cbc63b79d"
  },
  {
    "url": "assets/js/26.72e199b5.js",
    "revision": "e4ca0bc292d79584abadaaba69a8fb58"
  },
  {
    "url": "assets/js/27.86eea096.js",
    "revision": "e4a2a6d7c9f39442de639d7086b0dd04"
  },
  {
    "url": "assets/js/28.5475fa9d.js",
    "revision": "cb9c303cf91bc1f2099432785f2c2a8e"
  },
  {
    "url": "assets/js/29.7aceafae.js",
    "revision": "08f1ee39f5a18f5463c73495675834e3"
  },
  {
    "url": "assets/js/30.b283f924.js",
    "revision": "2e14caf535c78e0a6320a969b17a5fe5"
  },
  {
    "url": "assets/js/31.83ae399c.js",
    "revision": "9e85b36766fecb3ca5521143038c9d87"
  },
  {
    "url": "assets/js/32.b4fbc990.js",
    "revision": "3d6af956b04c97792dd07f2c864e3b0e"
  },
  {
    "url": "assets/js/33.18b39cfa.js",
    "revision": "8a342edd9d9101f662f2d2de97609a45"
  },
  {
    "url": "assets/js/34.f864d9d8.js",
    "revision": "d11cfa93347e3106a623ebcb39ef3ac5"
  },
  {
    "url": "assets/js/35.f29135e3.js",
    "revision": "a23eae2c2d9c9c127c4adf295b3d0a1e"
  },
  {
    "url": "assets/js/36.25150ec1.js",
    "revision": "df81ff7c1a898f5558b68133def87f7b"
  },
  {
    "url": "assets/js/37.cbe38551.js",
    "revision": "428fb8beed2357c9fed56e615375eb2d"
  },
  {
    "url": "assets/js/38.dbb4aa68.js",
    "revision": "b440e94cc03a8ee878dee0a7039b2007"
  },
  {
    "url": "assets/js/39.329c7754.js",
    "revision": "b4892d999ea6d4d74d3ed0ea2aae3b06"
  },
  {
    "url": "assets/js/4.10f06b74.js",
    "revision": "f2f2bbdaddd7bfd5b623b80fbd341229"
  },
  {
    "url": "assets/js/40.803be454.js",
    "revision": "e5f20184aaeeb2b24457439d8e238f40"
  },
  {
    "url": "assets/js/41.07572ade.js",
    "revision": "a360b2fe05968560b4f18d8b82a71773"
  },
  {
    "url": "assets/js/42.ad7fcfd8.js",
    "revision": "d165ee6d2a4cf01840fb308469417168"
  },
  {
    "url": "assets/js/43.d988da93.js",
    "revision": "025b5a3daf31ea73a1fa80189f24d154"
  },
  {
    "url": "assets/js/44.6d420b98.js",
    "revision": "004ec23db629093f093a9359d68e70aa"
  },
  {
    "url": "assets/js/45.120efa5f.js",
    "revision": "a303e085defca0cd189428b2f3300612"
  },
  {
    "url": "assets/js/46.254f0901.js",
    "revision": "ac484f2c7245113815a6fcba707cae27"
  },
  {
    "url": "assets/js/47.5117ddd0.js",
    "revision": "bbaa7e0800e0632f5f6d7189489aaf47"
  },
  {
    "url": "assets/js/48.0b88adb7.js",
    "revision": "e21d5f1d7cfcc016d47c23fa866263ea"
  },
  {
    "url": "assets/js/49.16f6289b.js",
    "revision": "9bb06766a0fc26394720419e8d3338ea"
  },
  {
    "url": "assets/js/5.f35142a3.js",
    "revision": "507c37ecf5f365d5001dce1712fff15b"
  },
  {
    "url": "assets/js/50.284c49eb.js",
    "revision": "741153e7f3dd34ad74c85b0acf1f6130"
  },
  {
    "url": "assets/js/51.dd0f7c82.js",
    "revision": "bd564fbb1e170fd863cc82b2b86de412"
  },
  {
    "url": "assets/js/52.c3a7a1f2.js",
    "revision": "be74f93a80d0b5d40e701d4ad47e0661"
  },
  {
    "url": "assets/js/53.e0089173.js",
    "revision": "01fead82e29994e7e096f3afed1bb032"
  },
  {
    "url": "assets/js/54.a4a81f9c.js",
    "revision": "3644d4c0824166cf797bcb10221ec673"
  },
  {
    "url": "assets/js/55.43c5e965.js",
    "revision": "b2c7994edb07cfb4ef9204cf805f4fa0"
  },
  {
    "url": "assets/js/56.3592d1c8.js",
    "revision": "3c7850d1ad426cd4589b891988ab0c61"
  },
  {
    "url": "assets/js/57.dbfeaf6f.js",
    "revision": "4e99b0da1aae7764487e9a60dd0f760c"
  },
  {
    "url": "assets/js/58.5ab0c059.js",
    "revision": "87d6c7bc9fd31eac8ce8be0d6a9c8197"
  },
  {
    "url": "assets/js/59.ffb47807.js",
    "revision": "d49d8b624bea9e029f71d139697f9032"
  },
  {
    "url": "assets/js/6.7bbd5ef6.js",
    "revision": "5503f71aa56a7646c41f88817ef0c3cd"
  },
  {
    "url": "assets/js/60.938c109d.js",
    "revision": "18e0f53dab74e57b03b641ce3710d631"
  },
  {
    "url": "assets/js/61.3abe12c4.js",
    "revision": "3b3a7ecde29758dfd217e99e689f94ff"
  },
  {
    "url": "assets/js/62.caeea64a.js",
    "revision": "1ca2dc391f7998c1083cae0712837ce1"
  },
  {
    "url": "assets/js/63.6b3adee0.js",
    "revision": "77256cc5c6fb4f9175a702920808050e"
  },
  {
    "url": "assets/js/64.4a711067.js",
    "revision": "96fc04128ea446d7c38ca3157a1f6397"
  },
  {
    "url": "assets/js/65.a6395c40.js",
    "revision": "f6e5dae6d4c925f70f24fdeae050cd45"
  },
  {
    "url": "assets/js/66.1871d6d2.js",
    "revision": "367873e986f71c259c68b2bada57b68b"
  },
  {
    "url": "assets/js/67.db53d726.js",
    "revision": "ab003ea23f1a8a9f80aa121fbb9b92cd"
  },
  {
    "url": "assets/js/68.890a0741.js",
    "revision": "dca58cec1db21b8de509585a4cf8335c"
  },
  {
    "url": "assets/js/69.0b5245e4.js",
    "revision": "c1dcc8de478182f56960900c3beacc59"
  },
  {
    "url": "assets/js/7.07cf6b05.js",
    "revision": "f92e86f9572d45868e4734b19f3ca153"
  },
  {
    "url": "assets/js/70.2d0363e4.js",
    "revision": "ee52dc28bb845bffa7e922ad2d6fde74"
  },
  {
    "url": "assets/js/71.b16fa750.js",
    "revision": "ce88fd1f9add2f017b3b1025351c0c58"
  },
  {
    "url": "assets/js/72.4b42a95e.js",
    "revision": "b3a99ea5ce95e00c8f7c32b7b949d68b"
  },
  {
    "url": "assets/js/73.8b08a5c0.js",
    "revision": "f294f912d8f5d4725a5a41bd0c60093b"
  },
  {
    "url": "assets/js/74.8048187f.js",
    "revision": "c1e433995404c8dd4419bf05bc0fb0f3"
  },
  {
    "url": "assets/js/75.a7445040.js",
    "revision": "f86f4afd5099c000535bd5f0f07bac21"
  },
  {
    "url": "assets/js/76.7242ee2f.js",
    "revision": "f17ccb090d1882fa975520bcd3e126be"
  },
  {
    "url": "assets/js/77.73ed410e.js",
    "revision": "3c9bebc9094aa520026d10f866598148"
  },
  {
    "url": "assets/js/78.d18d8610.js",
    "revision": "1985f4dc29e193c34e71bf0197d6f2a5"
  },
  {
    "url": "assets/js/79.ad34ba2a.js",
    "revision": "93548246c9055ee8cc5c344261eacb7c"
  },
  {
    "url": "assets/js/8.4acd734d.js",
    "revision": "7e3dcf05e1ae9daa0cc303928bace827"
  },
  {
    "url": "assets/js/80.8ef176f4.js",
    "revision": "e431f9a23f006fd779a3e398f780a637"
  },
  {
    "url": "assets/js/81.6abe38a8.js",
    "revision": "e79933bb77a7e1b1ff8f5a9d08f7de73"
  },
  {
    "url": "assets/js/82.65fb594a.js",
    "revision": "e57bc6890699bd0a6e789c55a5ae4776"
  },
  {
    "url": "assets/js/83.6c88eb4f.js",
    "revision": "c374b05058e308aae0b8c6ae1fcd8355"
  },
  {
    "url": "assets/js/84.a1e0ba0b.js",
    "revision": "2e93b465b78a1e083f5b31d833d7b91f"
  },
  {
    "url": "assets/js/85.f59c9d26.js",
    "revision": "7d84f0ba2f7a436ebbe15ef8b0c26d12"
  },
  {
    "url": "assets/js/86.5972939d.js",
    "revision": "a3a40388b74f254454710a7fb0f06382"
  },
  {
    "url": "assets/js/87.490131bb.js",
    "revision": "0fa0a969405b28268eb1de9bed04f326"
  },
  {
    "url": "assets/js/88.d77e0524.js",
    "revision": "3ee603b1f769b65b5e76325b8d005f65"
  },
  {
    "url": "assets/js/89.6a5e5dc3.js",
    "revision": "a9254dc1e8728d7980dfc68a7a51ece1"
  },
  {
    "url": "assets/js/9.9e2f6129.js",
    "revision": "82673472850de31507eea3d8b6223493"
  },
  {
    "url": "assets/js/90.23d33227.js",
    "revision": "ef78328ef8903093acb7e9fc9595a31a"
  },
  {
    "url": "assets/js/91.1f2197ed.js",
    "revision": "ea680b700ad6d634f6b91d1c941c94a0"
  },
  {
    "url": "assets/js/92.28b8f218.js",
    "revision": "92c6e4331002c03f3af9ac0259375a4a"
  },
  {
    "url": "assets/js/93.d8b17f7a.js",
    "revision": "1562a27cada55f92bb902948eb70ce4c"
  },
  {
    "url": "assets/js/94.b7a6dd0f.js",
    "revision": "69fdf099b173e5e2434be1e538ea8781"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.fc65bddc.js",
    "revision": "f046ddefe9ec3119b001106286c89e85"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "513e05062c14fe356c363470470b87b1"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "2582010c98a666832e8f703ecf2f0ad5"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "7c512c729eca4e3324d24d349c3260f0"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "e6eedc57b477453a0f29a3d53fbdf88a"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "4bb3297ecfd0357284a2e8bb4b581180"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "189ec2e4a050daf8c0da6e4d05bd0381"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "369157dd41ed9b60e5135421e308af24"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "911f26ccb034948eb95d06d4bb55e978"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "64a2c387ed03d18e81be9b4d6a2f6bc8"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c28e234f95c9afbf398f07b622de308b"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "e50a934d96759a4bafe6c7cd4182f385"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "020c9bfe1e75b70ccdf3b6b1ea89fc8f"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "9480448dd53d1963e74a5bec39acce2e"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8169ef6efb586db2ab99818c09cce160"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "92fba5714b1de1f640a12ccebb95fa91"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "80b6ee50aa31a2591316b8a861b1db7d"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "181f29a403ef7e4853257a6daf1235d1"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "b3be800898fd7f955bebc9acac95801d"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "36b825848dc41879d6995372d60d96bb"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "ad378635f201c3af91482b50e9a05fd3"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "13663d3d0cdaa6c436a1a8ef9bf0848d"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "fc339194fdeb3cbed1bd0f573683e2bf"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "19c8ec896735070974d3b3ea14ddf6c4"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "b6ab4ef3c2ba9040ab4483c5fb796a13"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "02a85af64d76467a5299e2dffe32da59"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "d4350eb1ce518624d400c802c2375943"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "5d5ae3f56b40ceebc8f20d7c3f57ec9a"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "0451cb0f347932ab6021a08c7f731d2b"
  },
  {
    "url": "courses/index.html",
    "revision": "bd408aa3e91dc3f31aa4d2cc3e20491c"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "8f69a393363ae38e3fd842f07cc26f9e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8f6e0c0723d3549c274458e208e40457"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "00a9e62bd21729659b75176842af9444"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "e2b17c815b7854ee4e574eb5ea2f4ede"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "289868c010412c1269751e957726e22e"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "9687a25d41541839477b25f40b71b3cb"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "e0fdffe64094feac4f97c72d8f92c1d4"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "89b1826a30f81c520480208386b668ee"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "cedcf9089fbf2189738a35cb89936b0e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "001318b5089f6048e866fedaaec9f77f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "df7f3ea73008855081cd2d648ba2b701"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "60d6c4bd541f2deeb5d0945c655e53c5"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "9e8665c7a9ec6093e4cfce207881bd6f"
  },
  {
    "url": "courses/template/index.html",
    "revision": "901dad5405066df465343a0dfc9dae5a"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "709d2bba41539f3da108fe0ba64f7d28"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "f08eaaadb2721b69b12afb2185c8b17a"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "1876f2434873f0d40aa1bcc8cfcc54e6"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e63b0eea6c4a03833439af989edc2cc9"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "8cc263f41ed950cf24241c77fdf6da55"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "16c68b91beab8be3285144ab5b8730f7"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "a62c448b0b60fae1e4a22ac3bf96aa5c"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "a7894d91e3a612a42116a40ec7540acd"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "c8735c37a401eaf12b41aeb30ba59204"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "955db6d93edd87fbfa26e7200e42fd56"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1068dc1877a8366445cf9905c56a471b"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "59eaf699334bfd3712fd5269427fb801"
  },
  {
    "url": "general/enroll.html",
    "revision": "82591f8b055dd390c5724f3b410c770e"
  },
  {
    "url": "index.html",
    "revision": "d5992aefa33125ad069fba7d4c0c9e9c"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "91db271074edf47b71afa2f49fdf2675"
  },
  {
    "url": "studyathome/about.html",
    "revision": "bcc2d98694b03986d9597d7acc3359aa"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "34e475fa6c6ba4313b849390c1ac1baf"
  },
  {
    "url": "studyathome/help.html",
    "revision": "e4c9154d686547d951b451daf9e81581"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "459ae6b3f9850f53c6596455ab5b1831"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "84ef5140b5776d13c5d7d4d467e8e252"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "99b83f62511fffcf8509f04653a17483"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "b72b88e212dba6ffcae948598f435fb8"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "d9e6099ec9efd7222bfb7a4d58056dd2"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "71efdba2d77d51c4b0217f6e39582c67"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "22510cbb4dc8b531b48151390df11195"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b9dd7773d21c1cb38cc4f6128cdd710e"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "7a9775d7970ea857b38cd8b3e6844821"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "f165cc1bc4ef19a1563adbaa2ff1de52"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "ad02e6ce83f757c88a683745e124eb12"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "288bf8ea7b0d6b684930beb61e0f56aa"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "e851f7759343d6bdbdb1cf10cf73e02b"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "20366af7c206dac495db511353efc28c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "252aa9d874087daac8ac8dedb818b657"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "812850ede69ffe0423a439c825c40c0e"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "cb3a986e6a308840563cc2c3ed6a864c"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "f8b4039d87212a8876c6fc89f9a6e741"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "2cd8583e0c7ff062e5cd68abca5ef015"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "327a018687b1d49197e6ab163203bc22"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "c35926c5fcac3db76735f952a9d80b61"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "79de4a0870ddc34fe68f5630d3c83f96"
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
