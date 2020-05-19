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
    "revision": "5fe2d2bf2977d060eb1d5a9a1ef70632"
  },
  {
    "url": "assets/css/0.styles.002664ef.css",
    "revision": "dc3c218a3f795000851c9c6cc4a50baf"
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
    "url": "assets/fonts/fa-brands-400.13685372.ttf",
    "revision": "13685372945d816a2b474fc082fd9aaa"
  },
  {
    "url": "assets/fonts/fa-brands-400.a06da7f0.woff2",
    "revision": "a06da7f0950f9dd366fc9db9d56d618a"
  },
  {
    "url": "assets/fonts/fa-brands-400.c1868c95.eot",
    "revision": "c1868c9545d2de1cf8488f1dadd8c9d0"
  },
  {
    "url": "assets/fonts/fa-brands-400.ec3cfdde.woff",
    "revision": "ec3cfddedb8bebd2d7a3fdf511f7c1cc"
  },
  {
    "url": "assets/fonts/fa-regular-400.261d666b.eot",
    "revision": "261d666b0147c6c5cda07265f98b8f8c"
  },
  {
    "url": "assets/fonts/fa-regular-400.c20b5b73.woff2",
    "revision": "c20b5b7362d8d7bb7eddf94344ace33e"
  },
  {
    "url": "assets/fonts/fa-regular-400.db78b935.ttf",
    "revision": "db78b9359171f24936b16d84f63af378"
  },
  {
    "url": "assets/fonts/fa-regular-400.f89ea91e.woff",
    "revision": "f89ea91ecd1ca2db7e09baa2c4b156d1"
  },
  {
    "url": "assets/fonts/fa-solid-900.1ab236ed.ttf",
    "revision": "1ab236ed440ee51810c56bd16628aef0"
  },
  {
    "url": "assets/fonts/fa-solid-900.a0369ea5.eot",
    "revision": "a0369ea57eb6d3843d6474c035111f29"
  },
  {
    "url": "assets/fonts/fa-solid-900.b15db15f.woff2",
    "revision": "b15db15f746f29ffa02638cb455b8ec0"
  },
  {
    "url": "assets/fonts/fa-solid-900.bea989e8.woff",
    "revision": "bea989e82b07e9687c26fc58a4805021"
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
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/courses/mux.svg",
    "revision": "52a569a585cecdd600daedd3669107db"
  },
  {
    "url": "assets/img/courses/vhdl-adder.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/img/courses/VHDL1Cover.png",
    "revision": "2f4f8ee1239795b664f4cb17a641db9d"
  },
  {
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
  },
  {
    "url": "assets/img/fa-brands-400.0cb5a5c0.svg",
    "revision": "0cb5a5c0d251c109458c85c6afeffbaa"
  },
  {
    "url": "assets/img/fa-regular-400.89ffa3ab.svg",
    "revision": "89ffa3aba80d30ee0a9371b25c968bbb"
  },
  {
    "url": "assets/img/fa-solid-900.ec763292.svg",
    "revision": "ec763292e583294612f124c0b0def500"
  },
  {
    "url": "assets/img/general/portrait-placeholder.png",
    "revision": "4788048f319dc48101678d9e69f5077e"
  },
  {
    "url": "assets/img/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
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
    "url": "assets/img/partner/ctu/lecturer/lenka-lhotska.png",
    "revision": "0b1695ff77feec156a97c40a007ef777"
  },
  {
    "url": "assets/img/partner/ctu/lecturer/martin-macas.png",
    "revision": "8c139d8888625a4ef9898b797f92d4b9"
  },
  {
    "url": "assets/img/partner/ctu/people.jpg",
    "revision": "a65a903feaf3bf886aed682ec3c43ef5"
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
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.jpg",
    "revision": "01662dfd145e8afdf12e0916a2778791"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/martin-deinhofer.jpg",
    "revision": "50e8b7c92cc864af957eb0fd6f4212d7"
  },
  {
    "url": "assets/img/partner/uastw/uastw-at-night.jpg",
    "revision": "bb98ed986758d05549ae03342857dd73"
  },
  {
    "url": "assets/img/partner/ukim/campus.jpg",
    "revision": "3518a28279ececacc090c10fc7d29aec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/andrea-kulakov.jpg",
    "revision": "2a5323f34cf5181ba6d5837bdb10947a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-chorbev.jpg",
    "revision": "b2f324317d75d740e0bb3772e9c623c5"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-kitanovski.jpg",
    "revision": "b519c89fb08e7c611b0dc89b9516dc5a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivica-dimitrovski.png",
    "revision": "3ae6ccfeadbcc4713537e332cd738cec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/nevena-ackovska.jpg",
    "revision": "92f3a6441f15910cacd0a88acdcd9317"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/petre-lameski.jpg",
    "revision": "a0f4909a7ca9b9b40811a66559b4fdc4"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/sonja-gievska.jpg",
    "revision": "ff8f5610c600379402d4f0e2291446a6"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/suzana-loshkovska.png",
    "revision": "431ecce02384434025a3c717143c5da6"
  },
  {
    "url": "assets/img/partner/ukim/people.png",
    "revision": "d0e8b198fb189c285b5376af4b52719b"
  },
  {
    "url": "assets/img/partner/wit/lecturer/brendan-jackman.png",
    "revision": "c0469cbd2ffe4e0fe85fb46c04d8d4d0"
  },
  {
    "url": "assets/img/partner/wit/lecturer/frank-walsh.png",
    "revision": "aaacba8bf03192e709beeb02a1ad6d6b"
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
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.8f36d912.js",
    "revision": "6967b8b2bba024c73e7085cd657d492b"
  },
  {
    "url": "assets/js/10.7a5a634c.js",
    "revision": "e63658a6d1e357f42eda2d3b9c869885"
  },
  {
    "url": "assets/js/11.427c8c4a.js",
    "revision": "beeddb0c38d38b7e2f982205a6ea1aed"
  },
  {
    "url": "assets/js/12.5c32a8e8.js",
    "revision": "2c41910d1785b7139c5c5b505e9e5124"
  },
  {
    "url": "assets/js/13.705be5cc.js",
    "revision": "8dcff317d0487c2a700ed8971745bb0a"
  },
  {
    "url": "assets/js/14.0becf6a1.js",
    "revision": "1bcef22533ce22d0d69224c05193e175"
  },
  {
    "url": "assets/js/15.39a7a561.js",
    "revision": "d22ec5b6e5f705bc667546de46b499d8"
  },
  {
    "url": "assets/js/16.94f7d84e.js",
    "revision": "234d93a35ec11326f4fa2708e01a9c95"
  },
  {
    "url": "assets/js/17.614b5608.js",
    "revision": "50afc36f27d895997ca6712ec614f094"
  },
  {
    "url": "assets/js/18.3b21e1be.js",
    "revision": "6dd2a6788c9330c8a49ceb06af09a931"
  },
  {
    "url": "assets/js/19.e18efd15.js",
    "revision": "e6bfd1579677f0ba9cd81697809b7e13"
  },
  {
    "url": "assets/js/2.e8bc087a.js",
    "revision": "1beeefa22aad9d910ad5a75134abf3b7"
  },
  {
    "url": "assets/js/20.650fdf06.js",
    "revision": "0c01836f6e4fdbd54368167b8e8ba12a"
  },
  {
    "url": "assets/js/21.d03635d5.js",
    "revision": "5216e36040f9cea3acef1da99b9435a1"
  },
  {
    "url": "assets/js/22.6164eb35.js",
    "revision": "83b71ecf8ee1fd9ae0eb98cd1dc8e622"
  },
  {
    "url": "assets/js/23.61ac218a.js",
    "revision": "37ff8b61dd8b80ec41c1fada13415edb"
  },
  {
    "url": "assets/js/24.9be312ed.js",
    "revision": "6fa55a21cd2fd66f5891ec62e20d37b7"
  },
  {
    "url": "assets/js/25.1e76f687.js",
    "revision": "47f5d7eec94cee5a4f84415797fb6d56"
  },
  {
    "url": "assets/js/26.b2526d14.js",
    "revision": "6e65014ad0093b1dce21884896be7d5a"
  },
  {
    "url": "assets/js/27.1814c92a.js",
    "revision": "9d538cbcbc2fb1f6df104835da573826"
  },
  {
    "url": "assets/js/28.5855ee3c.js",
    "revision": "794da8cb08eda722f5b68bdbaea3e166"
  },
  {
    "url": "assets/js/29.ed52b160.js",
    "revision": "79d26070af75f74c78b7d8bf1974bfe7"
  },
  {
    "url": "assets/js/30.4938ff40.js",
    "revision": "8cc04e7723a918f496667ce0a3b3566f"
  },
  {
    "url": "assets/js/31.1001883d.js",
    "revision": "52fe150a8b1d86fb74f4452ef587d430"
  },
  {
    "url": "assets/js/32.a51a0a73.js",
    "revision": "8f588465e643a497fa44e507fd037818"
  },
  {
    "url": "assets/js/33.e9c0fe74.js",
    "revision": "9043276edc54b5d7b81daecd5ade9fb6"
  },
  {
    "url": "assets/js/34.b027477b.js",
    "revision": "c6b4f5857bbc4303e6a436a415bbeabb"
  },
  {
    "url": "assets/js/35.ced9be46.js",
    "revision": "14afd53f7a0c2877461104ebab2e1356"
  },
  {
    "url": "assets/js/36.4fa09a4f.js",
    "revision": "5335452246a25b391cf75d089332d6ba"
  },
  {
    "url": "assets/js/37.9852084e.js",
    "revision": "b7588e3ce30a1dc66df6f2ff975d4158"
  },
  {
    "url": "assets/js/38.13b086fa.js",
    "revision": "3f93864158cf3e1ab4a347db40ea340d"
  },
  {
    "url": "assets/js/39.9d2410ec.js",
    "revision": "99bb80fd15aee109fd9206f0bff16692"
  },
  {
    "url": "assets/js/4.2ebaec1f.js",
    "revision": "b6783936eadb78f98a651ceadc63589d"
  },
  {
    "url": "assets/js/40.037b6407.js",
    "revision": "c812b207d25cda0e89c16941bc1c674d"
  },
  {
    "url": "assets/js/41.03a64d65.js",
    "revision": "2b44b572da6b928a3c2dcf06830dc282"
  },
  {
    "url": "assets/js/42.43946479.js",
    "revision": "8e4874c945caa8f9c212e5c39649f899"
  },
  {
    "url": "assets/js/43.de6c4264.js",
    "revision": "b91a26a66837582c2c0e6a7a61988a9b"
  },
  {
    "url": "assets/js/44.98c791a1.js",
    "revision": "96ad20b177603e1fdb56fcf274b13e57"
  },
  {
    "url": "assets/js/45.09971f0d.js",
    "revision": "1b13624c6efe4c1c7edd78818568efe1"
  },
  {
    "url": "assets/js/46.3775a6bd.js",
    "revision": "a4f23a6a4745d810123dae1fb20e30cf"
  },
  {
    "url": "assets/js/47.e86b59ad.js",
    "revision": "d3daa75a5a745039c4d0a7e512fc8b24"
  },
  {
    "url": "assets/js/48.452af8bf.js",
    "revision": "98b1be6269f894ef48ceffe2cb6ad620"
  },
  {
    "url": "assets/js/49.579e7180.js",
    "revision": "d1fd9df3ec52039539007390bea3bb2f"
  },
  {
    "url": "assets/js/5.e3ac08e0.js",
    "revision": "312d6fb4c571041f06092053d023bc72"
  },
  {
    "url": "assets/js/50.5728fef4.js",
    "revision": "ab73ebf08646882923af76e6e2c32bb6"
  },
  {
    "url": "assets/js/51.27a84182.js",
    "revision": "bda3e3c992ee3bb40f97436619e51b59"
  },
  {
    "url": "assets/js/52.1d8f2c63.js",
    "revision": "4266686cf30dd76357968e311d4b5179"
  },
  {
    "url": "assets/js/53.8711635f.js",
    "revision": "0a8d52119ef0b66f191b25d00d04f235"
  },
  {
    "url": "assets/js/54.bfbac1fe.js",
    "revision": "95de63a1da1b4288f5c1288effbfeb21"
  },
  {
    "url": "assets/js/55.bd55a639.js",
    "revision": "16bdb38b70b3b8a95fb2ab0fb1d2b436"
  },
  {
    "url": "assets/js/56.1b7bcc3a.js",
    "revision": "89532c63c7c455abe76e6cc883566a81"
  },
  {
    "url": "assets/js/57.db0a1c82.js",
    "revision": "b94c2376503e926910161fe08a536d62"
  },
  {
    "url": "assets/js/58.ea8c71e1.js",
    "revision": "df7f1354361ac8e76442a3f18a44822b"
  },
  {
    "url": "assets/js/59.af1a8e7f.js",
    "revision": "20cd8b3cbaf5ad064f2eece2ac1e7340"
  },
  {
    "url": "assets/js/6.07f28d86.js",
    "revision": "8da90c05c3f2fcf64173ea6a0498d83a"
  },
  {
    "url": "assets/js/60.2e88a157.js",
    "revision": "3716230f0302e54abb7dad58f262c547"
  },
  {
    "url": "assets/js/61.aea6741c.js",
    "revision": "1d98c2cbc44bf87d03a28d8b79a46349"
  },
  {
    "url": "assets/js/62.2db41278.js",
    "revision": "ad65a415a7d3dc5ecb47fa4f4d417d0f"
  },
  {
    "url": "assets/js/63.011dc964.js",
    "revision": "4c7d21345965d40c2b351f0e902d4c08"
  },
  {
    "url": "assets/js/64.4354a117.js",
    "revision": "0a34d1479624b640ad916852ff02393a"
  },
  {
    "url": "assets/js/65.ccf59195.js",
    "revision": "115e4a86db43badca1e1329b430190bf"
  },
  {
    "url": "assets/js/66.ebc8874d.js",
    "revision": "87bdadd6fa631704b1093ef212763118"
  },
  {
    "url": "assets/js/67.044c67c0.js",
    "revision": "1443b5280e84870d04284fb08fcd68b0"
  },
  {
    "url": "assets/js/68.76d19ff2.js",
    "revision": "4866665b7d60ae36ee1f864d4e6b06a0"
  },
  {
    "url": "assets/js/69.5778e42c.js",
    "revision": "dffaa16e7c23ebd45c2682037185734d"
  },
  {
    "url": "assets/js/7.67507997.js",
    "revision": "23acbe4cdb173dad75e74d6ffb49f917"
  },
  {
    "url": "assets/js/70.f2de872e.js",
    "revision": "fb850ff37e1a3cf46133301e6e22d6c1"
  },
  {
    "url": "assets/js/71.8bcf32a6.js",
    "revision": "1d468fdf1eba8b652573644a6eb75116"
  },
  {
    "url": "assets/js/72.c3cdae62.js",
    "revision": "646f38e65d93299c6f8bf5361addc3ea"
  },
  {
    "url": "assets/js/73.dafe5ad1.js",
    "revision": "caf667713cac17cc9cdaa2ded01d5c38"
  },
  {
    "url": "assets/js/74.8c673b51.js",
    "revision": "55a6618f4eab6e8afdbc74f4f30fb3c2"
  },
  {
    "url": "assets/js/75.e4599ec2.js",
    "revision": "7ad590fd955a04b886297a43156cc4b3"
  },
  {
    "url": "assets/js/76.1978d5b9.js",
    "revision": "7e38a79a6ee52eb7f6eb4c29a3646668"
  },
  {
    "url": "assets/js/77.e0f1e11b.js",
    "revision": "f757e96c6272619c1e8d9d5ff659061d"
  },
  {
    "url": "assets/js/78.69987440.js",
    "revision": "ff3a1411565bda5c7fb00042918a7410"
  },
  {
    "url": "assets/js/79.852ed099.js",
    "revision": "49ba530254f21afa4cbd7cc5543bdca9"
  },
  {
    "url": "assets/js/8.6d79bc96.js",
    "revision": "5294717116380bfdae01d364aa3b92f2"
  },
  {
    "url": "assets/js/9.bd246e99.js",
    "revision": "14d8e2b90e96456a64080198189d72fe"
  },
  {
    "url": "assets/js/app.8140dbd2.js",
    "revision": "568d7d5f6831f12b2f4192c12232e51f"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "6f40894fbcc264da02c76647e0f579d4"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "23bb64432c0c06382768885d217451c5"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "a0aaac19b279c79440f8dfbfaca0324d"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "d4e0454940cd4ffa1b19b3a11485bb5d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "874db8a510bf1d0ed087f82ba4a1f46a"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "05433479a4afa77d5d6dbdfc5cf66954"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "1d6a8ae8ed733f5de809c6499fa50dac"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "58cefbeb10aa1f2bf21f4529b0eb2ca8"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "01941c79a2f1ca350bdf1f235b3fdd3d"
  },
  {
    "url": "courses/index.html",
    "revision": "9dade43383fb17b8b76ac70abf4353dd"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "9556b1cf9500eb79b2de0b18ee14411b"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "191b521cf39147956df2a0a2072a9c40"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "42cb59d2108ad32267d6b908e5d74873"
  },
  {
    "url": "courses/template/index.html",
    "revision": "8bbe7c77870ee51ccbea0898f5f7a3fb"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d416f37ed95930a1440a43761c54bb1a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "4c615ecc6f0d660099631afc5583239e"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "07f8dee29997a824214f822743308958"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "48e1a125cb4607c8a3d824396d55821d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "570f31be9f36dae8c262caf7aee069b3"
  },
  {
    "url": "index.html",
    "revision": "34b71ca9117af321a1fb342073d7cd29"
  },
  {
    "url": "studyathome/about.html",
    "revision": "79d31e0fb491b3950c46d94129437dee"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "02420f472d550bcbee9a9f3a5193350d"
  },
  {
    "url": "studyathome/help.html",
    "revision": "94c430cec7320cfe57b160b1a92653c2"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "1d80f26738b3d1189b12b487b02433d2"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "5fe2d2bf2977d060eb1d5a9a1ef70632"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "8cd568e35f5cda74ee1bee03f608a434"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "fc688f81d8ce369a1655c1d7589f8d1e"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "b760e96a2e3902f20a4a6f89fb56ccbb"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "13244632d3d24183f50c0873616b5fb7"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "a9f72a285a4062f0ba1a3ba517e4ce39"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "4fa616ca6bbef08a54e94ec46ad58ec7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "c2965bf3027f64a345ee1370a5221bab"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "655f5cbac32038a39ed844a32b4ed831"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "4bb0b631f68a652810bc9c18ad885de9"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "a9f72a285a4062f0ba1a3ba517e4ce39"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "aa08a4c58a49136bc0188f4cee6fd83f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "295a93f8b4ec3efbe2c470dadbbc92f8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "c76f983db9e4e50b85c1ca990a4ab269"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "bad1bbfdb716f1dbbabef9a8d6398530"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "64593ac7d7ca77feab0d871bf0ba51d2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "8cc213679f5cc363c7461295bfa4a798"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "b01557f89c44679e8c8307c46803aafd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "7f996925b899f12f072b376e94f405e4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "7433d86dc0013ed0aa9910a9833aee65"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "a9f72a285a4062f0ba1a3ba517e4ce39"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "3a2d10ff464c5f70fce1c58e0f94fbe6"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "9846f3cb1700a4a62e1376775f601e2a"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "746c5c3b3c55eb2ecee8c45528902262"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "f5887bb5840d311358f0bf76eb7a2341"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "4c2cfe5004d8b5812eadabe888440e1a"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "8eeb02ce71b00f6098caeb70f1731471"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "ca10d7bab8ccc72743a4c584289789ce"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "9c50588c6a1e93c2b81333df74409a72"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "d1c300a5b4a8e7727ea0817679a14e17"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "2763e58f55f94f2ea5634758a034c179"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "a313b7e121d7c5a218d83c5c10af865d"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "d7ae459f382e59ae278b9d951d17af92"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "c009fd6ba9a90392a72938eac4a99f8c"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "0831c49ed591e7e46c987c6a02bf7c92"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "8ecb9280892908397d233bb8aa7b6d1c"
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
