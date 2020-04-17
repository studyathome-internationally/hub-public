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
    "revision": "738a4749b802ea1cc37e0bd17fe63876"
  },
  {
    "url": "assets/css/0.styles.297f0d05.css",
    "revision": "de48db3e37897004da44b7cee332c368"
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
    "url": "assets/js/13.5c6f753f.js",
    "revision": "b4669b9b556e7d9dc201b78de832ce76"
  },
  {
    "url": "assets/js/14.82e09f3a.js",
    "revision": "e3e376de07e09f1d8b00619033c90544"
  },
  {
    "url": "assets/js/15.b45f14f0.js",
    "revision": "94e2a06481b8f5022aa45d04a1d833d0"
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
    "url": "assets/js/20.a114eacb.js",
    "revision": "bba8ad538718960a9e00725334edf8e4"
  },
  {
    "url": "assets/js/21.32181d9b.js",
    "revision": "9e161c3dd8cc79bd67d0f48cc67869c6"
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
    "url": "assets/js/28.f30b809b.js",
    "revision": "6b212777629c848bf27e626ac7ad5de7"
  },
  {
    "url": "assets/js/29.76a8ff6b.js",
    "revision": "f4751e85e644157aa69284e967634a6a"
  },
  {
    "url": "assets/js/30.ae028f76.js",
    "revision": "97e53c67108d63be6b53fbdfbd0d5c30"
  },
  {
    "url": "assets/js/31.6b3c8cbd.js",
    "revision": "cab62740b04aecf661266afb2049c075"
  },
  {
    "url": "assets/js/32.91b5ce72.js",
    "revision": "0f0cdb4f61796f3aa9514ce0565b06e5"
  },
  {
    "url": "assets/js/33.2f01f076.js",
    "revision": "2bc33866aa7a51d607e9c299104ba80d"
  },
  {
    "url": "assets/js/34.5f102b12.js",
    "revision": "6de798395d2eee1d0992fb7f0f00be13"
  },
  {
    "url": "assets/js/35.063cf65a.js",
    "revision": "279b4749c620c7fb9b15e109baec0edb"
  },
  {
    "url": "assets/js/36.17c9111f.js",
    "revision": "361e5ebd2e8dbc99445dc3e976d4877c"
  },
  {
    "url": "assets/js/37.6abfc7c8.js",
    "revision": "02bf24cebaf251a61890517a20b694a2"
  },
  {
    "url": "assets/js/38.e2985c93.js",
    "revision": "bafa5a343da49c7568692d813427c7b0"
  },
  {
    "url": "assets/js/39.42d51bff.js",
    "revision": "995a769cbb717e8322dcb3dbf5598f2a"
  },
  {
    "url": "assets/js/4.4663412f.js",
    "revision": "437115544c4f5bf4caceb71c5dc1e7d8"
  },
  {
    "url": "assets/js/40.30bcdfd4.js",
    "revision": "90b39c1db52eb248b30f1b144b1c11e6"
  },
  {
    "url": "assets/js/41.88c63bef.js",
    "revision": "28691ffb0a55e64952a3c34742404f17"
  },
  {
    "url": "assets/js/42.91e59cd1.js",
    "revision": "080ec47f7bc97cc4c6749e9893c8c313"
  },
  {
    "url": "assets/js/43.defc339d.js",
    "revision": "53da222c385c670b2f8cfda0a26b561d"
  },
  {
    "url": "assets/js/44.1901b42a.js",
    "revision": "49df7b496f05a9006851021901d12144"
  },
  {
    "url": "assets/js/45.00283702.js",
    "revision": "42ae5fa99f8998b89c28ad72baacd843"
  },
  {
    "url": "assets/js/46.7798aeec.js",
    "revision": "d901fdbbdcd78871ce71e19ffe817a43"
  },
  {
    "url": "assets/js/47.545cc3e7.js",
    "revision": "c8dc1b69b7df7a09243efb8ad7c9b76e"
  },
  {
    "url": "assets/js/48.d7d17daa.js",
    "revision": "7becc4184eddd45a60155e615c70767e"
  },
  {
    "url": "assets/js/49.4583eb2c.js",
    "revision": "cf5e8a62beaf8eb945614981683ebc40"
  },
  {
    "url": "assets/js/5.5bab70e4.js",
    "revision": "81d607f28cee185d8c94c0356fcb627b"
  },
  {
    "url": "assets/js/50.054a55a0.js",
    "revision": "9327a9a6c8a2154ee346835144a30b99"
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
    "url": "assets/js/54.4871e1c5.js",
    "revision": "2dd83345451515d99c00c9646f63e8cd"
  },
  {
    "url": "assets/js/55.3a44609c.js",
    "revision": "79f3e8a234da6f490098c3415ad8424d"
  },
  {
    "url": "assets/js/56.2e24208c.js",
    "revision": "394a5b620118c356b359d405f27f053f"
  },
  {
    "url": "assets/js/57.4bfe71a6.js",
    "revision": "ad684b962254e3b17c8b87362cf09b3a"
  },
  {
    "url": "assets/js/58.7ca303e9.js",
    "revision": "87ebe3ffdbbe2ca0c2c8e197cb07cc79"
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
    "url": "assets/js/60.6c241650.js",
    "revision": "74e3f259038a66735e71b15ce011db44"
  },
  {
    "url": "assets/js/61.a0421282.js",
    "revision": "d5844a0bbae903ee2aec164aba7b81c5"
  },
  {
    "url": "assets/js/62.66a3cf1b.js",
    "revision": "f5c0ce95d60990d6aacabb73a95ad5dc"
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
    "url": "assets/js/65.1b43118d.js",
    "revision": "f4fa842263655e12b98f3e635010bfd6"
  },
  {
    "url": "assets/js/66.0dbeac92.js",
    "revision": "aaeff38310463e674b44743ebdc744e0"
  },
  {
    "url": "assets/js/67.a534a7da.js",
    "revision": "fd29fae79aae0b5a0d2294f992b1d717"
  },
  {
    "url": "assets/js/68.3b5edf60.js",
    "revision": "29c21075b4b74287f642348d7f559c36"
  },
  {
    "url": "assets/js/69.8fdd5b19.js",
    "revision": "974e16bbea5d35940955e3568bbd639a"
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
    "url": "assets/js/71.f1a4c17f.js",
    "revision": "1b843c6c7ec0865ad762b7248144dec1"
  },
  {
    "url": "assets/js/72.ebfd8fc8.js",
    "revision": "e305552faf575aacddbd9dac6a86b31a"
  },
  {
    "url": "assets/js/73.a51ce4ef.js",
    "revision": "befe40a3d43c2b9c6ab2bef3f4550cf2"
  },
  {
    "url": "assets/js/74.b8d9983a.js",
    "revision": "1640fc689069c0436f68ec0c4f2fcaf0"
  },
  {
    "url": "assets/js/75.4f70710c.js",
    "revision": "ee03395280812129608fa23690538ef1"
  },
  {
    "url": "assets/js/76.9688ba7a.js",
    "revision": "5eee76ceb2a59e04422951ccade0f9b1"
  },
  {
    "url": "assets/js/77.a53e4921.js",
    "revision": "80df20db3e949c0d54e35a0f405bb0c3"
  },
  {
    "url": "assets/js/78.7aa07bee.js",
    "revision": "1aa2481cf9038a159356783b412f0001"
  },
  {
    "url": "assets/js/79.7d3fa919.js",
    "revision": "b2779cdcb31c12810b5425715cf4644d"
  },
  {
    "url": "assets/js/8.f46b5a98.js",
    "revision": "2f024d8b0fe118c52fd21bb974158017"
  },
  {
    "url": "assets/js/80.2f62bb29.js",
    "revision": "d39de5e1d64633c4b7972ecb4cd8484b"
  },
  {
    "url": "assets/js/81.a34a6890.js",
    "revision": "729d33c7aad00d9e581bd268a234b148"
  },
  {
    "url": "assets/js/82.b80ef475.js",
    "revision": "9de865192582b92b0f35c8c3277fe80f"
  },
  {
    "url": "assets/js/83.72527f6e.js",
    "revision": "01bdba5bcff493167bf4a7f93f9d992a"
  },
  {
    "url": "assets/js/84.ed9445dd.js",
    "revision": "aea117b12a783d7201380c49d57f337f"
  },
  {
    "url": "assets/js/85.a2cd5cc6.js",
    "revision": "badae720ce792f795eaa73fe359d116d"
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
    "url": "assets/js/91.d1319df5.js",
    "revision": "27981b514df315bc08f5fd8ac8bffe3b"
  },
  {
    "url": "assets/js/92.688220f1.js",
    "revision": "7e781a981577287b0fa73e4e041254d5"
  },
  {
    "url": "assets/js/93.46d3801e.js",
    "revision": "6deb781350fc3cdb2b8a8fe3763e3708"
  },
  {
    "url": "assets/js/94.b18b2340.js",
    "revision": "a6cac74fcf28dc9aa3a5a61c78841d4f"
  },
  {
    "url": "assets/js/95.2b0297a6.js",
    "revision": "97f1af7a4a53c828330407c9f032c6cc"
  },
  {
    "url": "assets/js/96.39de52b6.js",
    "revision": "e27965d4e9b89ac32f54be093bf76446"
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
    "url": "assets/js/app.30748d09.js",
    "revision": "91108c042c19afc2575948b74c8301db"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "1a73e452e42c06dad30d59d70c4ff2c3"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "eac8b61715b6a24a6d19ea08e6bd5a63"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "cf21fbc3fc5fbe850d18eb8e09ea5e8e"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "f891d8461a2a92714c2cdb8c3bc51070"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "b3f075520b551d5d7a0f5c10e947747c"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "4f7c33209e389c1f32ff2adc03762920"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "4681dddd4a07b06c3eec565a6efb668d"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "a56f96bc3fe3b4f4dcd0dd2195e3301a"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "26e7cc70c3f1b31241ddb8c00e0fa21d"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "56bfa9faacd2d3991b794adf62e699f8"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "90550bf78c32d25a143f31adcb6efcf5"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "749a23c335001f408bcdf0b093c6b3af"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "dfe464b485e683e3be8ea1b8f297fc63"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "08b7786f90508a8346fb2ba0a5825e1b"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "1e1b27dad269e1f436f63e95287716da"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "42b2b4a6ce397dd8a1f5787b7008bf12"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "66e1fa927640e9ef0ae3fc0d16c916c4"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "bde414c25eab466f70884628d2c40067"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "bb51b9fc404c720f4b5d54c18859b420"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "9247f6e3d4154d16a07a355ba499cb9e"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "2789698c0bc01503dd4cd00248c551e0"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "c276ab63e8c6caeec1c389402f5dfed1"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "7e69c459595d33b80c92ffdb36f446e0"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "025c86785458683c9cdcc837e3014749"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "60f9c37d8ef470704065967605362fda"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "674c31507a3c09fc7ac447ef4692ad15"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "c9581340f0739d0ab7d7495dc8a1fa00"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "2d5a624cae511399ba9e2c6a85d7e6f1"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "49cc01d6c2039e763085c50b1674b279"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "5b7f9c8c1557a151d8e42acdbead6826"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "a6b170fc9e815ec3fcfa6f53ff57477c"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "d563c24739c4540c5ebabe3f150fd6e5"
  },
  {
    "url": "courses/index.html",
    "revision": "866c9ee998559cb06373698f93be888d"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "f57fd9f0b4fd1c6e224b461954e236a5"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "d021d59fbdab5131f99a589c4017d947"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "bd89809acd639bf7cc56ac313e6c6b9d"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "3300842a9ec97de7d751a1b545901853"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "f2b260e4cb080755fc47ee028b11736a"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "b04db4ce7b71f794507618885537d5f8"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "27fb52e72d2df0120a23f57c08d5c533"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "1491d5c4d0e13279d734f4cf989aa183"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "d110e221fff2cdbdac861c23ea68be64"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "73c6807510fdb602a0f5632f2a5938a7"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "947ec969c1718030f7f31793ec4eec78"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "fbe8af84070705f4e03be467debc55f6"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "4268f6603ac0037f7df7a4531ff3e394"
  },
  {
    "url": "courses/template/index.html",
    "revision": "696c806c33c37967b0f1c16f26fb55c9"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "cf0eacef4e3da120fd4796b7287f0ca2"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "0f261b519053af2bf2e861886b217566"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "a2f6d8b7386ab5ce232f27bffd5bed2d"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "6c4c0336658c28979b7a37b1fce34651"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "60ac09c3c461a01828b5c5ad0e186939"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "32a8fe4401ec0420468cd16f26798c72"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "6f7ca716455ab1b226648146f2734013"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "b2272c34cecfb07fad0a97e5c2c26aa9"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "876f68b36ddfd44dfb8fbdf59c98ecc8"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "64a5faa8946898944cb5edf7d0eddb32"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c25862132833c13b5785e0f5fd5ead5b"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "eb5338a867f45c40cc98493f6d83dc56"
  },
  {
    "url": "general/enroll.html",
    "revision": "d9c914bbe40f17dabf4a83438d00928d"
  },
  {
    "url": "index.html",
    "revision": "b45311f845be98ca6e24444c502138cd"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "42e64da565e9a046fe8aae2c0c2b8e8d"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "c7d10fa4190048af6f53796ce2aa45c9"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "ff978c8cefd0148c73d7633252a8d8b5"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "0de8e383ae9ec2fa2401f865e3df6e31"
  },
  {
    "url": "studyathome/about.html",
    "revision": "770afef503db16532b370b266427ab2c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "9981d093dc582182ebb4c97844387412"
  },
  {
    "url": "studyathome/help.html",
    "revision": "7cdf45662eb11185c47d1706fd2e94b5"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "8c0bbf804836565f3790307c662c1105"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "e9a02343c92fd6a22b6458d4d1265207"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "2060b8a380b5edda0f8d2cb4bdd5e672"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "c4fbb89c24e2c5933838a6ae2b08fd71"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "5b40f7f6a5d06834b46adb667e1d5a1a"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "793f82c3d6d21fc2d4032a6ccaa7807e"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "81bea0a2860b1df77be3c2297322e926"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "170ae977f7434b1bdb16863e1b1b95da"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "6e302138ffea3f26d005f8d783e6fe23"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "f21629d1d7a0ce7c71e9949634ed15cd"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "54fb720b54a3707c3d7484ada77c78e3"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "a3a0b368bf599831abd97f0cb1ca150b"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "40b2249c0a7f3a6d3c30853ff5602c6b"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "63ee34b1a382cf53d64c8dbe8b6ab500"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "6e823cc4e0f2179d58578db78b39ea4f"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "59d1d2090de9218de35c0e19d596a4fe"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "b319fdd7a89a146b613f62902c12cdc7"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "96061218c204bebf437128e9e6c093cf"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "68b51c67ee8b0477a19b7c5910c07e08"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "e36b9dd15cd52bca0f95442225983ddf"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "c503cec6a6b66c4cbcd43e7c2d809381"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "b6716ba9cc2cd7ba52debce00c64118d"
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
