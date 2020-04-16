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
    "revision": "b0731b1f998f3bb3ff72a004c2b32154"
  },
  {
    "url": "assets/css/0.styles.e323e3ba.css",
    "revision": "af71658cc9468b9edabdb0471f594581"
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
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
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
    "url": "assets/js/1.724b30a6.js",
    "revision": "ff1c5c9701e960fdcb303810b429a010"
  },
  {
    "url": "assets/js/10.5a1250da.js",
    "revision": "a9e841a1956419ee36e505b4882be683"
  },
  {
    "url": "assets/js/100.ad671edb.js",
    "revision": "a6c308cbf857d9d4eafa19c18e199b7c"
  },
  {
    "url": "assets/js/101.285d3480.js",
    "revision": "9034d28fe803749079fb94f3cac90b91"
  },
  {
    "url": "assets/js/102.4038fa76.js",
    "revision": "895dc29b3c1525a73c1427e1ae2e92fd"
  },
  {
    "url": "assets/js/103.5cabf53c.js",
    "revision": "4b62d6b304d040815b610ca8c1265d93"
  },
  {
    "url": "assets/js/104.9792dac9.js",
    "revision": "0dc7912c8c30219e08c4970d9c1d0ba8"
  },
  {
    "url": "assets/js/11.0afd0d9e.js",
    "revision": "0aef04807fbfd3b626a46d2227250624"
  },
  {
    "url": "assets/js/12.a0b3e8ef.js",
    "revision": "76a1d7b1bd9552fc3c62a17d6ab6547c"
  },
  {
    "url": "assets/js/13.0fcf9b47.js",
    "revision": "0a2900df71080dca12dbe11e9496a19a"
  },
  {
    "url": "assets/js/14.49ac0a75.js",
    "revision": "38f5f0ef314f110613d7677c805677de"
  },
  {
    "url": "assets/js/15.a30a4caa.js",
    "revision": "ad3cc4f0a31374be3e342feba35aaf93"
  },
  {
    "url": "assets/js/16.11a0fa47.js",
    "revision": "f90148e7943424201341b76ccc7d9054"
  },
  {
    "url": "assets/js/17.5d3cf4e6.js",
    "revision": "4181d61f9b2fa4c15728867885013ce7"
  },
  {
    "url": "assets/js/18.c597b7cc.js",
    "revision": "4bc5b5292e3583ff90348ac446b0c387"
  },
  {
    "url": "assets/js/19.8c09bbdc.js",
    "revision": "7e63fcba0341962efdea5b3ea2b25947"
  },
  {
    "url": "assets/js/2.53664247.js",
    "revision": "0e215a662d19d414da17b662a4b58d4f"
  },
  {
    "url": "assets/js/20.ade6e680.js",
    "revision": "f01b151daa2850978df6923f0c693553"
  },
  {
    "url": "assets/js/21.327b63d4.js",
    "revision": "f20889094dae3eb83cbf634585d5d8ee"
  },
  {
    "url": "assets/js/22.125cdddd.js",
    "revision": "2f720e5ce7b98be24620f1e920a2e7b1"
  },
  {
    "url": "assets/js/23.f638e373.js",
    "revision": "461f26af8b4d25e78160dbbc3d56425e"
  },
  {
    "url": "assets/js/24.4ae7d5ae.js",
    "revision": "137753c8068497a4c79e91fd7a7c254c"
  },
  {
    "url": "assets/js/25.5db89357.js",
    "revision": "c6c4e6e1691d5a3fd536c38be5c1434e"
  },
  {
    "url": "assets/js/26.da95f14b.js",
    "revision": "3db6e1a51b500a2aa9ea5eed1080b9ab"
  },
  {
    "url": "assets/js/27.06e5631a.js",
    "revision": "b4423fe817e9007dcb45ec0a50f08eb5"
  },
  {
    "url": "assets/js/28.bdfd5025.js",
    "revision": "ab63701364451dbd37cc510d4f9085be"
  },
  {
    "url": "assets/js/29.889ea3cb.js",
    "revision": "0f72f27bc12a429590b9cfea49d87f35"
  },
  {
    "url": "assets/js/30.cbcc1346.js",
    "revision": "becf38a3e3bb96cc081ffc3b7832de8d"
  },
  {
    "url": "assets/js/31.5fa7e965.js",
    "revision": "97a4cc15d43220dcc1310d7958019cc9"
  },
  {
    "url": "assets/js/32.91b5ce72.js",
    "revision": "0f0cdb4f61796f3aa9514ce0565b06e5"
  },
  {
    "url": "assets/js/33.a59cb8d3.js",
    "revision": "c9bfec7a8a8b2cc175d1a1f84ab157fa"
  },
  {
    "url": "assets/js/34.3b51c610.js",
    "revision": "72c453d3c94cf9bf8efbd294c04123b3"
  },
  {
    "url": "assets/js/35.063cf65a.js",
    "revision": "279b4749c620c7fb9b15e109baec0edb"
  },
  {
    "url": "assets/js/36.ab68fa5b.js",
    "revision": "71fb301c07c3a7fd7f6fb6bd3e263632"
  },
  {
    "url": "assets/js/37.602ebbf2.js",
    "revision": "41d7c8555007566470c7cc64e8918200"
  },
  {
    "url": "assets/js/38.d060e12d.js",
    "revision": "37735110d5320f5a8bffed2bbb7373de"
  },
  {
    "url": "assets/js/39.2dae7a56.js",
    "revision": "f90cdc98aacfa620e635fc0dc1142bcd"
  },
  {
    "url": "assets/js/4.4663412f.js",
    "revision": "437115544c4f5bf4caceb71c5dc1e7d8"
  },
  {
    "url": "assets/js/40.c4ce07d8.js",
    "revision": "5d912cdce0063f2b4ab9e9e2cfa1fc5c"
  },
  {
    "url": "assets/js/41.80ec6658.js",
    "revision": "cc78718057b5097fa20af6895b615c45"
  },
  {
    "url": "assets/js/42.8a751ce3.js",
    "revision": "3fe7d29d52d3105a3fed2f0585d4a7f1"
  },
  {
    "url": "assets/js/43.94cdd219.js",
    "revision": "88cf287a2a47cb367c3d57700643f844"
  },
  {
    "url": "assets/js/44.07596dd9.js",
    "revision": "a0d5626fb4d3e0a8c4e9fdd8a3e283fa"
  },
  {
    "url": "assets/js/45.5c0db210.js",
    "revision": "12c021e50c37a87005ae99799480c777"
  },
  {
    "url": "assets/js/46.8d21a55b.js",
    "revision": "34f29c1b24e16e75b6b7ad36a32fcecf"
  },
  {
    "url": "assets/js/47.4bd7573d.js",
    "revision": "02f5ad0585a0aae652bab5ad9cfe67e5"
  },
  {
    "url": "assets/js/48.282cf64f.js",
    "revision": "de33342db3729ea66a13309e65beb7b9"
  },
  {
    "url": "assets/js/49.28cafa7c.js",
    "revision": "1708bb801939c7092bad5e55712c62a6"
  },
  {
    "url": "assets/js/5.5bab70e4.js",
    "revision": "81d607f28cee185d8c94c0356fcb627b"
  },
  {
    "url": "assets/js/50.3292e9b7.js",
    "revision": "7bc87bb1fefb287769698571b8246350"
  },
  {
    "url": "assets/js/51.52eb827f.js",
    "revision": "9b3eb2be3aba6a8c3e0079afcc6e8984"
  },
  {
    "url": "assets/js/52.2f5cafe2.js",
    "revision": "fc52d5a6f5c93756ecce95ade70cfba2"
  },
  {
    "url": "assets/js/53.70767f9d.js",
    "revision": "979ed6edf35537db0634824499032896"
  },
  {
    "url": "assets/js/54.d5e6cbb9.js",
    "revision": "2b97ab2a294440f79496e56602484dea"
  },
  {
    "url": "assets/js/55.57ccd7dc.js",
    "revision": "56f12067a62dc19a0817fe3144ababbd"
  },
  {
    "url": "assets/js/56.fe952d1a.js",
    "revision": "58890db91e00b83d2efc800afdb1a564"
  },
  {
    "url": "assets/js/57.4bfe71a6.js",
    "revision": "ad684b962254e3b17c8b87362cf09b3a"
  },
  {
    "url": "assets/js/58.b336fc90.js",
    "revision": "921de17d9484de35d854411d8caf85d7"
  },
  {
    "url": "assets/js/59.307356f5.js",
    "revision": "3f05bb7e227ab015bd1178c7d66ca70f"
  },
  {
    "url": "assets/js/6.4110989c.js",
    "revision": "9f33777cdcc6e298e401f6970b089056"
  },
  {
    "url": "assets/js/60.ed83eed2.js",
    "revision": "14ebe4563bb677c438a7f9d4fc09516a"
  },
  {
    "url": "assets/js/61.e7ddadbe.js",
    "revision": "94d9ff66beba0d194204ce534f3db129"
  },
  {
    "url": "assets/js/62.e9836ec9.js",
    "revision": "8bb64b4b68dfc65a40218056b98a1630"
  },
  {
    "url": "assets/js/63.8526f8fc.js",
    "revision": "e62dce80f0ebf955996baa73d05ccad5"
  },
  {
    "url": "assets/js/64.61bb640d.js",
    "revision": "32ef100d724916f1fffee392461aff12"
  },
  {
    "url": "assets/js/65.6d143758.js",
    "revision": "95cf2b24de45367f1f2a84b580e698cb"
  },
  {
    "url": "assets/js/66.87d8bba7.js",
    "revision": "affe0eef9df698e75da67b898adadfd0"
  },
  {
    "url": "assets/js/67.6ab12e90.js",
    "revision": "685dc049845f3f4c65d1f4cd6aaf49b6"
  },
  {
    "url": "assets/js/68.6cf9620e.js",
    "revision": "b68c6df01c1b37388dd3392cb747c6d5"
  },
  {
    "url": "assets/js/69.0534ef0a.js",
    "revision": "9a88149e93e3109077d875f10edeb365"
  },
  {
    "url": "assets/js/7.4d2758f0.js",
    "revision": "b3313fdb85e9a027e5f5335f9d7bf118"
  },
  {
    "url": "assets/js/70.074cc11d.js",
    "revision": "1207fd4faf82e5f771fc4a508a9b68da"
  },
  {
    "url": "assets/js/71.099146c8.js",
    "revision": "0bcf24216ba855845089f851e2c8d55f"
  },
  {
    "url": "assets/js/72.bb62c77f.js",
    "revision": "9e73f5f55690599a4dacaca15e5ef0bf"
  },
  {
    "url": "assets/js/73.7da6ffd0.js",
    "revision": "34f37a5e9432893586ef2be8ce02296d"
  },
  {
    "url": "assets/js/74.ddaaad3f.js",
    "revision": "6de4e89971bd4336a11fb79fb9fe567c"
  },
  {
    "url": "assets/js/75.63ac57c2.js",
    "revision": "498b89d471a66383e9ebca2b8de7784c"
  },
  {
    "url": "assets/js/76.d98651b6.js",
    "revision": "a4d6298b3f4c548b83828f319c9e4e5e"
  },
  {
    "url": "assets/js/77.c0fc8e4e.js",
    "revision": "2c6febcdc760401220f291592e2d4b7d"
  },
  {
    "url": "assets/js/78.7aa07bee.js",
    "revision": "1aa2481cf9038a159356783b412f0001"
  },
  {
    "url": "assets/js/79.339d2cea.js",
    "revision": "8f5cc0dfd371621604b11bcf726b3569"
  },
  {
    "url": "assets/js/8.f46b5a98.js",
    "revision": "2f024d8b0fe118c52fd21bb974158017"
  },
  {
    "url": "assets/js/80.78ef9c0d.js",
    "revision": "72971015c14f5f814728af363db23912"
  },
  {
    "url": "assets/js/81.5d274966.js",
    "revision": "e41d9508c42a9d5dd1a22bb27dac4abe"
  },
  {
    "url": "assets/js/82.49e3407a.js",
    "revision": "8385eddd386357000073cfd3e4b824e4"
  },
  {
    "url": "assets/js/83.72527f6e.js",
    "revision": "01bdba5bcff493167bf4a7f93f9d992a"
  },
  {
    "url": "assets/js/84.9ef53b10.js",
    "revision": "74397c9ae19293253ba4eb14d698f81b"
  },
  {
    "url": "assets/js/85.220b5b78.js",
    "revision": "4d6973bf36747b3a8f317a0db9d8c766"
  },
  {
    "url": "assets/js/86.bb838bd3.js",
    "revision": "5cc7162e977d84cfaf314cc0b7c388eb"
  },
  {
    "url": "assets/js/87.b466be82.js",
    "revision": "1b948db0f75b6c8ab1693817ced65467"
  },
  {
    "url": "assets/js/88.24fcc9ea.js",
    "revision": "8f2c67e8a6fd39c35457ef27e726f042"
  },
  {
    "url": "assets/js/89.bd6f9e6a.js",
    "revision": "bab4f2faf4495e9c59d729cfaec12f90"
  },
  {
    "url": "assets/js/9.01575b48.js",
    "revision": "2de708ceb96e2460e763a92f69d993c6"
  },
  {
    "url": "assets/js/90.4644959d.js",
    "revision": "37f6dd7b63f9d4e7ce25a4d0b944c445"
  },
  {
    "url": "assets/js/91.7880bdd2.js",
    "revision": "ae3b281286211888b90ea722f680ebfe"
  },
  {
    "url": "assets/js/92.688220f1.js",
    "revision": "7e781a981577287b0fa73e4e041254d5"
  },
  {
    "url": "assets/js/93.b23cc06a.js",
    "revision": "95c33fc9977cc4dcece03e860abf16bc"
  },
  {
    "url": "assets/js/94.832d451b.js",
    "revision": "fd3835311c38889cc9c80cb2188a45fc"
  },
  {
    "url": "assets/js/95.2b0297a6.js",
    "revision": "97f1af7a4a53c828330407c9f032c6cc"
  },
  {
    "url": "assets/js/96.71c68341.js",
    "revision": "7679c2ba27f6a1661129d7659b01e4a2"
  },
  {
    "url": "assets/js/97.e5e97346.js",
    "revision": "ca090af3ccb1d2d451725c7e24fc95fc"
  },
  {
    "url": "assets/js/98.dcef2520.js",
    "revision": "98418c375ce63a8b3753a28251a8cd14"
  },
  {
    "url": "assets/js/99.89e996f1.js",
    "revision": "5758d5087cc23882ed0c1e762adb530f"
  },
  {
    "url": "assets/js/app.2a3fa6f5.js",
    "revision": "ae71b1caaea08824d86a228a7abd4465"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "f49b281cb7dce9f4a7bd8c89cd558bc5"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "ab63e4e90e9844633d28d998a12ab5dc"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "a25a33b24a6f4ad42c246bd2ed0de6f3"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "1b27f33a92554c172ee6ce86aa1046c2"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "c3fde00ee509b4df237b9165649fa244"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "970fb6ade2ed43404426dd639ec15a9f"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "4bcafa40c785507fee7a5e1b47288237"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "282e577dae0ca8dab643f2c8c2c56425"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "926cdddd52de8c6841c63be784f95754"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "6697d2f9e200a8ffbb0c584816a536be"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "18582d4b222045fc8dcb0ee2f0c38f61"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "0b230208174abee91aff1296c1cfa68f"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "50d7459a97e14e162a68ea7194ccd896"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "a4ddcfad98e527359ed840301546a5d1"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "181480d6da2dc5e1d80ecf4a826a8c68"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "157cd6d72c81cd467bd1e993e1519872"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "a374d0a3cae3595876861ddcbb32cb60"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "725f71b50af2497c5e621ef417c82b31"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "45012cc77923f5f1f3e553e23ef7b088"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "5520cbbfecdcb260db654823331b9dc8"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "5a6ec3097b3e6ad3416e362037116517"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "0eaa7b361c6810baa273713f97334c8d"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "00ff25354f2bf907e9218a8cb17b5144"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "63aecb61b1c9906533b78807ad20a96f"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "1c400f910835892fe70e0611d86cb1e2"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "3d37eafa66c427bbd4a06ef4f355403c"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "a424e17ca2862b8fc79dc5291b416993"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "ca8630e93c581b3cdff4768f654405ad"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "7c9fe25adc94c539392ccd665f5e2ebd"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "3912f0ca529291ab5744d0ba5a81a74b"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "3392d7403b9ec47f653e30a9dea2cc46"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "fcdf113b1f5aab9787291d050504bfa4"
  },
  {
    "url": "courses/index.html",
    "revision": "4b353d27d98c0d171e92d74c9dd8ecc3"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "8062def2a8ddf894ba28583bd3f3efe4"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "2a044ac7e3f63cc2452eda397492aca3"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "b4d4a36b840def27ac6497182ffcd9f7"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "d3170a0172e5b2e32b1b485037cefba2"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "c8be99db8a0d2de0f8277d9070f75fa0"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "45f834518b2aa966eb1e905cda14e138"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "f4c4bed6f99f8435fb40860e4cf77485"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "5dc3a65d233bb5ef1c71f68ba7444a7b"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "951accb1e3415141ba493b1ebb557d13"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ea294334b84a8e03e891d8b4475dd4d4"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "3997b9a69036b10d4c4ac8b229e89499"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "3a1f2e89f9f8beb66f89e5b2c9fc6726"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "58bb0234903500cde4c3b10b9d2c11da"
  },
  {
    "url": "courses/template/index.html",
    "revision": "90d6bb98b0888ae58b6ce55ab174da52"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "91087147ad56728f14d3a994d48ff0f7"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "643416182d3474f40f9c5cb2f5aa86d8"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "b44ae406053b69aec028dc3afb487791"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "876540e646c31ddd8812bb9bddce07e5"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "474be9addb4a58bbbf2e05f933647c8b"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "773d1cf7bd1731ed92da407aa579cd84"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "75b3e9491a8fa8c7b94ccd4abef6c3ac"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "85fd27aaea868c76dbe668899363b393"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "3852a9037c6c02c21a4884ac96304974"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "e31f461a573f0c4dc7b86a039da1fc39"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1e94e28323577197ed85ba88f0b60832"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "3a6119d7f998d3c4fa7d107e4c9d7146"
  },
  {
    "url": "general/enroll.html",
    "revision": "215c9798192bb74a12cdcb8063dea7f2"
  },
  {
    "url": "index.html",
    "revision": "3930e6658d4cfdc04c66f96ab7f87cfa"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "4b58e85b2a1b30721377c5e5f5d641e6"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "fcf0b618dcff7fc9c0da709a4c3df21c"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "f0bedf027f35eb175203c7ae2fbaaef0"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "1dece0f7204335a6fb9fea3f5f7e3a6b"
  },
  {
    "url": "studyathome/about.html",
    "revision": "570adac7da90163ba4fa282307faaf2e"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "c42bb7a912b87534052427f1f0c7839a"
  },
  {
    "url": "studyathome/help.html",
    "revision": "3fbb4cc6721f76db59e4eed5312f0a48"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "ffb37d76a764c7fbacfbc99aa374e1d1"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "d779ee903b11742f83197a3e0bc0a3ec"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "7efbe41b9f84896b31743f72438834ea"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "0092b6cee99870f6a014f24772bad73d"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "a2cc78ef2fa4e12cf077ebae77dac92a"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "640db56b57373e7a788d346d5558f0ac"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "e6ab363055ac6964853cea30e2afd763"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "41bd4727127aeaf4d3b08dbafeb2ffcf"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "57d26ff05ab314d2fafe95858902c38c"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "875ef4bac8f3e225819403c3fb3825e0"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "9d90fdc558472cea660fb147fffb459a"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "46a32b0355b4e7ee9a408932ce7a8974"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "d30b55dd0c63af6078c15a81cdc94fe6"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "2718b5fc28c21c350d75d1bd62ac32c6"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "4d340d1b06f05d539961e3266b02e613"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "d48153ba1f1ac0efdb67d94f3bec402d"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "e481a2b60144f2265d07e5fe47f695ac"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "a7fe9cb23bfc643427b5de043f40ce59"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "dff0e609815c8d5aa058d94ab16e53a2"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "759b988ac77c0d201415c2af752f56ad"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "d9efe2037178e029f357c7d79c82967e"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "0419f2d0780e17da7e25a6d9738b1bf5"
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
