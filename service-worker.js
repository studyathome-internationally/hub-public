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
    "revision": "4572169254e850b0e5e80f4eb62d9d71"
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
    "url": "assets/js/13.80b851c7.js",
    "revision": "29a4e89ac7e0fcc423ae31b70b121e70"
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
    "url": "assets/js/24.ecf91815.js",
    "revision": "7dbbdd5827f1b22eb43787670dd585bf"
  },
  {
    "url": "assets/js/25.5db89357.js",
    "revision": "c6c4e6e1691d5a3fd536c38be5c1434e"
  },
  {
    "url": "assets/js/26.933f1e1c.js",
    "revision": "090768d2a180fe3ce7a23c1ff233300a"
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
    "url": "assets/js/31.64a442dc.js",
    "revision": "77b6e26190df6bfd21df79a5b685cfb0"
  },
  {
    "url": "assets/js/32.f4240b29.js",
    "revision": "28d50f62fa47f0063a6e38115fad225e"
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
    "url": "assets/js/35.0c73b41c.js",
    "revision": "9d30e0a91b42c6b3e22db52610a4436b"
  },
  {
    "url": "assets/js/36.ffde3d23.js",
    "revision": "a93aaac63ced882bcddc9ea02ca697a5"
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
    "url": "assets/js/41.d3984a84.js",
    "revision": "0c696642afd780e221c3da16f73ee4ce"
  },
  {
    "url": "assets/js/42.ca5db520.js",
    "revision": "656fc26820aa9a648bd024963801c1b9"
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
    "url": "assets/js/49.ba0caa92.js",
    "revision": "d26aec5eba5dd8537c8a117737c04dcb"
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
    "url": "assets/js/51.9b4e9522.js",
    "revision": "0e5284fd588f012d4c07e235005e4115"
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
    "url": "assets/js/55.05cc2086.js",
    "revision": "4c2a72ac9354b585c6e9118be438489b"
  },
  {
    "url": "assets/js/56.2b34f916.js",
    "revision": "a12a6e8906408c3661880a51c336c5c3"
  },
  {
    "url": "assets/js/57.7ac0db9c.js",
    "revision": "ae40b5c2dbee2229ee2c088196b5182b"
  },
  {
    "url": "assets/js/58.8f51303e.js",
    "revision": "5e75f8083477921a07abaa96a441730f"
  },
  {
    "url": "assets/js/59.32a1c0b5.js",
    "revision": "c04ed641e799d4732ebdfe7032dc7111"
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
    "url": "assets/js/62.b98dc3f1.js",
    "revision": "da55da4d6890ecd2b9a185e8cf8a9a31"
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
    "url": "assets/js/65.2568f8b7.js",
    "revision": "686902b10a9fedb6ae8555ffb08a65ae"
  },
  {
    "url": "assets/js/66.fe8bbbac.js",
    "revision": "c7846ec5db15d57b3ecabac7401b0296"
  },
  {
    "url": "assets/js/67.13847e52.js",
    "revision": "1298f3981e7c2c7f26e25da25c328366"
  },
  {
    "url": "assets/js/68.6cf9620e.js",
    "revision": "b68c6df01c1b37388dd3392cb747c6d5"
  },
  {
    "url": "assets/js/69.990e6978.js",
    "revision": "3fcb2ca4aa002d16bd3b08e0fe31c618"
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
    "url": "assets/js/73.dc792bf5.js",
    "revision": "af770e70a8b5a76410cfad6eb9bee753"
  },
  {
    "url": "assets/js/74.2f2a7c28.js",
    "revision": "300a1284c822f890ea76e3732c6d9d43"
  },
  {
    "url": "assets/js/75.e12646bb.js",
    "revision": "d3d5c61b2cf1a01ff1b746a8352b0935"
  },
  {
    "url": "assets/js/76.ad085aa6.js",
    "revision": "8bd54a21cd0b2f485de1fdc8be007a76"
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
    "url": "assets/js/79.339d2cea.js",
    "revision": "8f5cc0dfd371621604b11bcf726b3569"
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
    "url": "assets/js/82.8cc3968f.js",
    "revision": "e993d4469dd6eab8d8992f435df76fd1"
  },
  {
    "url": "assets/js/83.531c829d.js",
    "revision": "ca7a9fe498afbfbd1be1d9adca6c63cd"
  },
  {
    "url": "assets/js/84.ed9445dd.js",
    "revision": "aea117b12a783d7201380c49d57f337f"
  },
  {
    "url": "assets/js/85.4d742722.js",
    "revision": "b171cf9f02a4dd9cefd346e6677188a2"
  },
  {
    "url": "assets/js/86.d1e586ed.js",
    "revision": "0f439d566ef6b9f09bf75dd68998f052"
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
    "url": "assets/js/89.dfa16667.js",
    "revision": "097b9470510eff1007e13f21bfd6ce63"
  },
  {
    "url": "assets/js/9.01575b48.js",
    "revision": "2de708ceb96e2460e763a92f69d993c6"
  },
  {
    "url": "assets/js/90.a1b2f432.js",
    "revision": "0c3400aba067f18a39700d8a4f10647c"
  },
  {
    "url": "assets/js/91.ef4f0105.js",
    "revision": "56a01dceb1785807d9534cbe854b7414"
  },
  {
    "url": "assets/js/92.eee180de.js",
    "revision": "12b2fb9af78d425dd3494bc0fb2ecaee"
  },
  {
    "url": "assets/js/93.b23cc06a.js",
    "revision": "95c33fc9977cc4dcece03e860abf16bc"
  },
  {
    "url": "assets/js/94.7b690ea1.js",
    "revision": "fd80aa367b1301f73f0c578933f87bd5"
  },
  {
    "url": "assets/js/95.d04ad183.js",
    "revision": "322b0f8d72d32a9da016dc0ae144c99b"
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
    "url": "assets/js/app.d683a551.js",
    "revision": "cb00fe2dd1a8e9f7467da01937554678"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "7151346a3c4b4d33c08bf93c98fc9d7e"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "641bbbb2d33dba5e22f53201a67736b2"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "77ba7cb63d7898d2962d111612f6d3e0"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "4a2703c73a5743ba83dc50f914839813"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "05f1667369d12ddc0bedeb64fc1e6d0a"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "2535a0f0abc0c1f0bae4384d0887e359"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "2749a5ffe8b736bef999cd78bbd25152"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "c312f01184f381a2578f67de71a4c14f"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "2a1bd17f5bd4e92753999f07d320c637"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "f787dc2eb40c3f6fba94a0259a268c87"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "8a112ae636977e5d0293ccd8ad345565"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "fddb19a9d7df5f66abb7c9a83e720309"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "bf70a92a2b9bf90ff3b1d50c2adb3c92"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "879ed0166224fd06b78333bb0a022ecb"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "f039ced5b7ad05322d04efa0f35ae625"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "66ecbfd78a30ce75848d3306949d25ec"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "7bb5879e9bfdf546f35efb4b5420a247"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e0a5f6b3463f5c761ffd69d777b4dbc3"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "54d98a6e27b8cf698b023cae9f239d28"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "965d7170974f64aba8c344ffc8d36285"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "cac9ec55bb19a1c6054496d5da91a096"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "fc8f1b2ea6033e1239b3c7e7f76cc6b8"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "04afff2c33e9860615dac7ae401277dc"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "87184d7548aaf74157cfc947ce341888"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "e9dc6ee069cc5d8a9fba5e5237509a92"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5155201bfb59c5cf0b0329f116c5255f"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "80298d789e0f128e48c2b42cd660bb6b"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "126ef3058a7338cd67965713a4c22ae0"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "bb82914385ff406d61cedc4184c3449c"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e1df55d121204b5aed2be5fef2d1bad6"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "61f5c577fe95cbd47858b295e145b457"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "d4bcbf1295eeb39dda8c69dfb5d4ad69"
  },
  {
    "url": "courses/index.html",
    "revision": "0a96c65360f95edab94e60c3b1b9c404"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "aee899df341eca957c638a8bb91f6a2e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "f39ea2e492eb6c4c79d0f5b7dc0809a6"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "594d3365e4a95ace238f9939d2a1f9b0"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "2e9a54d1360c50c6b2eafa12b20d13cf"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "4265cc374337ab874f3c35729004b38d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "5334e9849d22bb9a5ebe8233c6d6daf2"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "935e6dec16b2f81c985b3d07febf3257"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "49abc6a892dbf2093e02caa36a780bf5"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "c46eeb5a426cdfc5aaaa74da3f1dddfc"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "03d9aa0d88b337bbc5d72664d1a91f07"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "905f2e6627060633a3e1e21167f7d18c"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "fc1c63360a35de86d3b7332ddd6b8b3e"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "875f661c0b437f45dc5b1e013085c9f8"
  },
  {
    "url": "courses/template/index.html",
    "revision": "97da5fffa1d5a12c892f73a422646ba0"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "cb2ea6f8995f46f84a89635e34b2b5e3"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "be044cf7054b30db4cb027d0b2e484f3"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "88e258a5098f5bf0d2464d67bd963bb3"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "4cb51cfe69ed4c5769cd8f0cd69f26bd"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "51cf6b854308a3cf0073a589e6b23977"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "c5e88b67109b85fa9c4faccd60984dd6"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "e8c46631744e7f7054fecaf53f67258a"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "1e44e722ab283a3e92aba0aea44ea4d5"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "178a5e891760f30156121fbe24a9a2f3"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "cc04fbbfbb1604d2b1b5287c04aea5c3"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "454ddb1bda90d8cdb6315c64e340bf74"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "1d41832b96d9e3dee9eee524bf348a77"
  },
  {
    "url": "general/enroll.html",
    "revision": "c456f175b0b178f66512be3676e864e9"
  },
  {
    "url": "index.html",
    "revision": "3546dceab2b1c7411024a2de82c6ba43"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "a6fdc5a19d08ed31806c953f594b2133"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "ea7c940c690c26419869a752fa5c0e3d"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "f41aadb5477594cf6f7f28f4fbf7c85d"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "b99e01fef51a828b27fb3b5860131312"
  },
  {
    "url": "studyathome/about.html",
    "revision": "deaf0f129b82fe8208fdde6977912247"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "68b39c52eeee4862f40e83999ebf40b7"
  },
  {
    "url": "studyathome/help.html",
    "revision": "dc62a3db1e7d24eb948acd37d7bdb385"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "e1b3cdf6f0805b8e60d4aabbc2c0e5d7"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "cf9b620eefc0c0bf944c09adf08bc869"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "6fd43a4d3d1befcd9048da297d1ecf0a"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "f03dafb332543dd62b90cf642a2b08c3"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "70c997a6e64c9119ff1535b7d4ed0855"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "6c7e802c19eeaafda79d76c463b329ea"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "3aa352f88f2df2f90c36b45c6a1dd27d"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "98a0ef04b9bbeb76dae34db57a0812d0"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "ecf919da7ddca07ead8eede4a32c01d2"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "0a1f2c81f1e20f5b2e8122c7c2d09994"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "28b8f3510e78bb43f5d514ae2b76ba14"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "64a4e77c675f077f912243f241818159"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "05eb126be8950764578ed8391a420629"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "7161b09e87d990ff6282e18051c6e8b9"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "a375fbd18a978c632a169d23bbd754f9"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "75ad3b175023efdb13432f06dc790d69"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "59d304fba92792106886840a9888ec7a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "01fb5de5439b3037b1df3622c2333357"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "95872297b139b30d397dd4e86d4bf692"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "9cf0c357d6d66c22f485fea2df75a2a0"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "d4b8c5691ed9d6ce86ec5c8a5d754cd7"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "9315f2b8886e72e4590c1a224a2f2174"
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
