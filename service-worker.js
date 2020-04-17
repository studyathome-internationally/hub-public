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
    "revision": "18d024e0aee596fba28b772ecf3cfcf8"
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
    "url": "assets/js/13.6f8c099d.js",
    "revision": "6d08b89417a922d32cc11ac5fe1cfacc"
  },
  {
    "url": "assets/js/14.fb69cfa4.js",
    "revision": "754d55ed4aa43287bf2af7e56edd2dc5"
  },
  {
    "url": "assets/js/15.e673b605.js",
    "revision": "c8dd3d6204b99e8acadc462d7fb5afe8"
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
    "url": "assets/js/24.92a37b39.js",
    "revision": "c0852d643ecb03c2b0d2f58be356521d"
  },
  {
    "url": "assets/js/25.e1e8f968.js",
    "revision": "23217a930382efc209519a7af8d35eec"
  },
  {
    "url": "assets/js/26.2700cccf.js",
    "revision": "73dff5a5840852431f607b2f95679592"
  },
  {
    "url": "assets/js/27.f5d6e1da.js",
    "revision": "54b82334edd2aa26d57b45a2cfefac1f"
  },
  {
    "url": "assets/js/28.fdb81a00.js",
    "revision": "abbb4508a9e6add453b1ae0eb921298f"
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
    "url": "assets/js/31.e7d8eed6.js",
    "revision": "f296b079237c02a01270cbbf6d1fe36a"
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
    "url": "assets/js/34.3b51c610.js",
    "revision": "72c453d3c94cf9bf8efbd294c04123b3"
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
    "url": "assets/js/37.c03ff1fb.js",
    "revision": "6b0ad6e79a26766ced57bd126f77b889"
  },
  {
    "url": "assets/js/38.ee326362.js",
    "revision": "0f5ea73dd9317a522c93a659e2b0809f"
  },
  {
    "url": "assets/js/39.5b31e108.js",
    "revision": "69971f062b2acf091befc1379237346b"
  },
  {
    "url": "assets/js/4.4663412f.js",
    "revision": "437115544c4f5bf4caceb71c5dc1e7d8"
  },
  {
    "url": "assets/js/40.f085eb6e.js",
    "revision": "2143200422919a4ab86169a346d3223a"
  },
  {
    "url": "assets/js/41.41d4e2d8.js",
    "revision": "8aad7e17bf57bbcc19770e687f8d4f7e"
  },
  {
    "url": "assets/js/42.62c65d98.js",
    "revision": "939c169cdd593c6e51b9b8ab92b17478"
  },
  {
    "url": "assets/js/43.9b958a52.js",
    "revision": "c9f9d45ea5ad019777c29f2339485bbd"
  },
  {
    "url": "assets/js/44.e653712d.js",
    "revision": "b1cf70ac78bc2275986226b1a4ab3932"
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
    "url": "assets/js/47.a11b1ec7.js",
    "revision": "aec548a8149dc4e9e1b1669b67871f7a"
  },
  {
    "url": "assets/js/48.d7d17daa.js",
    "revision": "7becc4184eddd45a60155e615c70767e"
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
    "url": "assets/js/50.eff5ee76.js",
    "revision": "d25be4b7a1e474f654862816bb515d23"
  },
  {
    "url": "assets/js/51.52eb827f.js",
    "revision": "9b3eb2be3aba6a8c3e0079afcc6e8984"
  },
  {
    "url": "assets/js/52.5ee99acb.js",
    "revision": "2f1710398eb421a26c051d6ce454f643"
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
    "url": "assets/js/56.922df1a1.js",
    "revision": "2bca8327b8a1fea6d5410a6c0c1525da"
  },
  {
    "url": "assets/js/57.656d3a29.js",
    "revision": "3b9c49056d561802b6678aafb5de0a58"
  },
  {
    "url": "assets/js/58.b336fc90.js",
    "revision": "921de17d9484de35d854411d8caf85d7"
  },
  {
    "url": "assets/js/59.53b0dc2a.js",
    "revision": "42b4241d5e202e35e4b44ab132ca8df2"
  },
  {
    "url": "assets/js/6.4110989c.js",
    "revision": "9f33777cdcc6e298e401f6970b089056"
  },
  {
    "url": "assets/js/60.a2cf05a4.js",
    "revision": "76a0d39fba12c7738422970585d0f794"
  },
  {
    "url": "assets/js/61.e7ddadbe.js",
    "revision": "94d9ff66beba0d194204ce534f3db129"
  },
  {
    "url": "assets/js/62.7e3e7aae.js",
    "revision": "fc0eabdf2fc2a1985fd5b34ec4f8e171"
  },
  {
    "url": "assets/js/63.fe1d5be2.js",
    "revision": "db797d6385b445f1b80d973abe33f852"
  },
  {
    "url": "assets/js/64.96c5fa22.js",
    "revision": "343e9ab842eb970963a1c54031b7f7bd"
  },
  {
    "url": "assets/js/65.1b43118d.js",
    "revision": "f4fa842263655e12b98f3e635010bfd6"
  },
  {
    "url": "assets/js/66.fe8bbbac.js",
    "revision": "c7846ec5db15d57b3ecabac7401b0296"
  },
  {
    "url": "assets/js/67.324c4fd7.js",
    "revision": "6fc9a5bdc9e8b673a83c69760cdc0ffb"
  },
  {
    "url": "assets/js/68.3b5edf60.js",
    "revision": "29c21075b4b74287f642348d7f559c36"
  },
  {
    "url": "assets/js/69.ae30501f.js",
    "revision": "4d6f95e8bafd41a158fec1dba59c34d4"
  },
  {
    "url": "assets/js/7.4d2758f0.js",
    "revision": "b3313fdb85e9a027e5f5335f9d7bf118"
  },
  {
    "url": "assets/js/70.05854d36.js",
    "revision": "afda2274de6d66a6e16396e75a691201"
  },
  {
    "url": "assets/js/71.fe6fa276.js",
    "revision": "cfeaa36a59566bfb9c3894a492259dda"
  },
  {
    "url": "assets/js/72.6d1c0b80.js",
    "revision": "c00337279923dab365e9b96a510fc9f8"
  },
  {
    "url": "assets/js/73.a51ce4ef.js",
    "revision": "befe40a3d43c2b9c6ab2bef3f4550cf2"
  },
  {
    "url": "assets/js/74.ddaaad3f.js",
    "revision": "6de4e89971bd4336a11fb79fb9fe567c"
  },
  {
    "url": "assets/js/75.4f70710c.js",
    "revision": "ee03395280812129608fa23690538ef1"
  },
  {
    "url": "assets/js/76.d98651b6.js",
    "revision": "a4d6298b3f4c548b83828f319c9e4e5e"
  },
  {
    "url": "assets/js/77.7954fbf7.js",
    "revision": "5d9277a4b97e5a7e474bf244e1e71ef4"
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
    "url": "assets/js/83.531c829d.js",
    "revision": "ca7a9fe498afbfbd1be1d9adca6c63cd"
  },
  {
    "url": "assets/js/84.bcd4bf26.js",
    "revision": "bb3233eade9df3c055690e5666510ee7"
  },
  {
    "url": "assets/js/85.a2cd5cc6.js",
    "revision": "badae720ce792f795eaa73fe359d116d"
  },
  {
    "url": "assets/js/86.883bf2de.js",
    "revision": "12953a6b06b07c634ed9f318d5fb89ba"
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
    "url": "assets/js/90.1c827c88.js",
    "revision": "8916d71679680de7aa00342e5e3711a1"
  },
  {
    "url": "assets/js/91.3227904d.js",
    "revision": "db48f486e479f5d1cb6eccd899784054"
  },
  {
    "url": "assets/js/92.eee180de.js",
    "revision": "12b2fb9af78d425dd3494bc0fb2ecaee"
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
    "url": "assets/js/app.5b319128.js",
    "revision": "6e9c8b27dc791126984f9c423800e7f4"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "e1df72ca2a2ab750293066337372a0ce"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "c362e6f5b39dd8afc26206f29481b7e4"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "556a73772f616d357b3eedf43d658733"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "d1129b615f782d90d8fa4b8a88b1f581"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "c91cad03b5485a5d03271718aa9bcde9"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "e21b8eb8ee98f4ba5edef0c73ec0a04b"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "d88d48fb9214fe6cf58416c10f08e442"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "2ea6e780318b081ffc7188b05e90fe2a"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "25dc76a7730cfa84a567dd20e9386483"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "239b16b93f76a0f130d427c670696de5"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "fa906989a1c6b390a449229bcfaee21f"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "ae75c4b5f4ac0cb5d668c72c2929fc92"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "ec9c6faf7ee8023d12ccb6122ccebf14"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "79f842f59edc4991a0b9d334a00c6be6"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "393a5119e3c3668f41b45e37cb263b0a"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "7ed3435a2ae4d142779d59eac5889fba"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "07aa33f192a7f402cbf020226fea0428"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "fef1d23789e155c4ecd33dc632b0b35c"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "f6a808c6bcc7bb98c53ed38c63328944"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "784184277a5a74f0f0a89126c99cb956"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "d5817e881a36dc7e5311b19312ea2f4b"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "a88aada055e0d92901f1266c939040fc"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "7c19a5823dfc23b33ef03787731daf09"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "953b9cb44639d3c1b9cac681af1d90cd"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "96ab9cf44f3f8005999bbec6096670dd"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "618218fa96925c90cffdb318b7e4257b"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "b7169d571e84f91cce4f8bf380df17be"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "62e6d6895d7a5618c298b41fdfe4c9b7"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "b5dd4e5150c49364651acecf7a2f30af"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "8833fba246948734cddfd60d9dff3270"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "4f89e21a4c67c340d54b01b8b1bce21c"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "994f890574c7e3b5cbadbd7b76956247"
  },
  {
    "url": "courses/index.html",
    "revision": "0a9658b43356bb26ff51fa68b04fd61f"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "7be37a75b9d411a4481d66da40e1ecda"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "efab9d57643e277714aacd3e7d90bb25"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "26316ed61e1931c695c06fea867d2615"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "e54795dcf3b05a58e80930d9fbb3f0d5"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "e89954296903c177e1a9d5e80f5e4e23"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "843dfe9f068140a05a6a4ddf764976fa"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "f783c1798531018229bae920670014de"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "13b12101f002aa1e726270a238186539"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "e00fcce03e69605f2329b760c1b6f378"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d7e6f2512a1850d074e165e88c94ba42"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "0e11b29198fde011aa1a34e28d07b5ac"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "162631bd53918290d8a2fba220563b97"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "f2f634a37f85283b72ed47eeda0021c4"
  },
  {
    "url": "courses/template/index.html",
    "revision": "6897bb8fe79227f48613ffbf12b7d07e"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "be1031157893b531edd498f99d727dfc"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "b3bf1cd2faafdafd9b18af7d00f9adc7"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "ff342350e51642a81515303e4d2db9c5"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c2c67b31fdf0fb8b6ce0aa2925165407"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "10eb70209b284f45a856191eaa8f9056"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "782ff206655ad0c19e62a173f7b01204"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "993d4e0a29ee09379d94d47caa25af2f"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "518aaec3ad9c172069b107daa5d23adb"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "dc9c051ff1efd67d5937154f1555c9a8"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "a168453ed78e8e5b297beb70511c623e"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "273a6f2344f1a3f6b7ea31482d1e5952"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "5f321ce67bd85731253c3a1ab080f5e5"
  },
  {
    "url": "general/enroll.html",
    "revision": "a6a21b2cd3809a99a4b134695b6d6f45"
  },
  {
    "url": "index.html",
    "revision": "e826b59b67b06f1b1ac5de481f74cd8e"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "b6dc14e9100194f64a680e2d4e8ffa6a"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "e7627c13bd13ee52232d12e05de9cc68"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "e91284d8ae77ad03540ca95f5ae08dfa"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "5fbca46a93fe3489ce43a2303f1788e2"
  },
  {
    "url": "studyathome/about.html",
    "revision": "70718d9397a8cf3912ce957aa734f584"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "d7b7d1b5dd5808693741950dcd821271"
  },
  {
    "url": "studyathome/help.html",
    "revision": "482b4ff7f2983b0d72993d6b2fb45d5e"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "e1c49da98c606ad5acd5c67125476e80"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "9027f883f602a17d6288a375b694d94a"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "90c6bc2598866ea1b12137b88e8f66ae"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "3dcf12b87535a3afc5b2cf607783d8fb"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "55f4de753d20b44b18b795e77e46664a"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "15979eed5e199392a7235ac8e386bfdf"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "c63863dc25fb4c01a7462805b18e2837"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "16b428be0a2ac73869fc5bd2d9c9c89d"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "17a742115eb0c68acad05130f2ce1e4b"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "c901f80dd2205eca163645270a946798"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "12fc72cc85309ad9e0deead3944d89cd"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "2a82de7d414b8309ea53a96b227e35d9"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "df30cc7cf5aa655de79e5ffacfaa8bb5"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "36a3468f459f5f364d055cbd9217789c"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "f76ae860625fc17ccabe6e5aba7aa4a8"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "f6f9ecb29c6d621a3c3a759a84062d97"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "396ea3113d99c5a5184d4ffa900e0607"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "fadd199ad22c764d641854a6f5e998c9"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "02eb8ea65612971a3e845c2a34f10bb0"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "b54cdb56ff433aba882aab722c39bcf0"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "f0716af3b41049a13802cacd8eba690a"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "0f993d38375cfd1df2364d6c7041141f"
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
