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
    "revision": "05b5f8fa5b8bf866f000b54ee2e361e6"
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
    "url": "assets/js/13.5c6f753f.js",
    "revision": "b4669b9b556e7d9dc201b78de832ce76"
  },
  {
    "url": "assets/js/14.82e09f3a.js",
    "revision": "e3e376de07e09f1d8b00619033c90544"
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
    "url": "assets/js/24.92a37b39.js",
    "revision": "c0852d643ecb03c2b0d2f58be356521d"
  },
  {
    "url": "assets/js/25.e1e8f968.js",
    "revision": "23217a930382efc209519a7af8d35eec"
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
    "url": "assets/js/32.6687ac2c.js",
    "revision": "2e4a2cd2237e72321946b42c3621b0bf"
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
    "url": "assets/js/36.17c9111f.js",
    "revision": "361e5ebd2e8dbc99445dc3e976d4877c"
  },
  {
    "url": "assets/js/37.c03ff1fb.js",
    "revision": "6b0ad6e79a26766ced57bd126f77b889"
  },
  {
    "url": "assets/js/38.794a43ab.js",
    "revision": "9bbff3562f688f68ae6f4eb450156a9f"
  },
  {
    "url": "assets/js/39.6494fce7.js",
    "revision": "d1874a3cb5ebf018455ea137e3628f8a"
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
    "url": "assets/js/41.41d4e2d8.js",
    "revision": "8aad7e17bf57bbcc19770e687f8d4f7e"
  },
  {
    "url": "assets/js/42.62c65d98.js",
    "revision": "939c169cdd593c6e51b9b8ab92b17478"
  },
  {
    "url": "assets/js/43.74eee29c.js",
    "revision": "f20005888c88d78f2b74e029311e9a97"
  },
  {
    "url": "assets/js/44.1901b42a.js",
    "revision": "49df7b496f05a9006851021901d12144"
  },
  {
    "url": "assets/js/45.c2ae02a6.js",
    "revision": "b782e98ccd8660d6b2c3ee5a4a6ad375"
  },
  {
    "url": "assets/js/46.1c64d3da.js",
    "revision": "3437fd05f7da624715fd2789da050eba"
  },
  {
    "url": "assets/js/47.86d8443f.js",
    "revision": "f979240296e87bdb9f41a754ec2c53d2"
  },
  {
    "url": "assets/js/48.f50d004e.js",
    "revision": "93b9b52fef1d28d0d4f7267f9abc141c"
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
    "url": "assets/js/51.9b4e9522.js",
    "revision": "0e5284fd588f012d4c07e235005e4115"
  },
  {
    "url": "assets/js/52.1fdfeb17.js",
    "revision": "44e82d346b9fab1fa8d842f650f445a0"
  },
  {
    "url": "assets/js/53.7e20b2bb.js",
    "revision": "9014fa742754c938c2c998e67d42e983"
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
    "url": "assets/js/64.74b11e32.js",
    "revision": "be0e3ad062d14e5498a8a14e7df47b82"
  },
  {
    "url": "assets/js/65.39890cc6.js",
    "revision": "185c8477fae5973a4fc74fb9f1be7438"
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
    "url": "assets/js/70.e36901ec.js",
    "revision": "f1ffb9fbaaa2df38674cd2d5c27700ea"
  },
  {
    "url": "assets/js/71.f1a4c17f.js",
    "revision": "1b843c6c7ec0865ad762b7248144dec1"
  },
  {
    "url": "assets/js/72.6d1c0b80.js",
    "revision": "c00337279923dab365e9b96a510fc9f8"
  },
  {
    "url": "assets/js/73.7da6ffd0.js",
    "revision": "34f37a5e9432893586ef2be8ce02296d"
  },
  {
    "url": "assets/js/74.120ecf18.js",
    "revision": "67287b840d4d6d00ca6fca039190c91e"
  },
  {
    "url": "assets/js/75.b7a113f3.js",
    "revision": "1013db53d5b5e46a9e0a9686c93e72b1"
  },
  {
    "url": "assets/js/76.d98651b6.js",
    "revision": "a4d6298b3f4c548b83828f319c9e4e5e"
  },
  {
    "url": "assets/js/77.a53e4921.js",
    "revision": "80df20db3e949c0d54e35a0f405bb0c3"
  },
  {
    "url": "assets/js/78.6f7dc964.js",
    "revision": "1af681de7dfa6278eeef71c64f24e448"
  },
  {
    "url": "assets/js/79.96e6478f.js",
    "revision": "7cda703c40959a35e0aab6e7b3a20d31"
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
    "url": "assets/js/90.1c827c88.js",
    "revision": "8916d71679680de7aa00342e5e3711a1"
  },
  {
    "url": "assets/js/91.88cef656.js",
    "revision": "5ded8f31c39ee35f62587bbb4c02f8ee"
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
    "url": "assets/js/94.78080efc.js",
    "revision": "ca1cd23cac8d3da91d5ead2d378ab459"
  },
  {
    "url": "assets/js/95.d04ad183.js",
    "revision": "322b0f8d72d32a9da016dc0ae144c99b"
  },
  {
    "url": "assets/js/96.19ac76d8.js",
    "revision": "9a6c55fd41f7341967f0b25189016d1e"
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
    "url": "assets/js/app.5761cbbe.js",
    "revision": "21f1cfc7c883a6dff7ec5497a9012eb1"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "779286530861119371ca9a50b733767a"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "30fafe969b36e7c979495592512ed1f9"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "154468d32965e8c92da1f8bbaf00718e"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "1c3a2876af41ed0f1300ad6c9eacc19e"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "10d220e785f238f72b764ce8c9509c0d"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "de7a85cee17b47c6ad4f22403d0774a2"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "551681a4ea75ff39764fbe4fe511c38d"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "d85ea07530ee527bb471774d152ebd18"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "b5d86bf167a7b108c0dbf5f0e9dcb15d"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "9f4d2aa4c727b7c8e3d0d6cf4679fb79"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "9cddbbff4e9031734489d354953eaf04"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "f01a04e3225090f748db3aa3d3cf9bf5"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "cfc3a6246be561c33a4b8e7c3cfaf511"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "82e144c11762f2dae6b606a5b1e4c0f7"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "1173ec5a4ce02438e55d789aac143186"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "3bdcbdd73b8ba7995e0a05550ff3b94f"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "56622069c665778677830f5ccacbfca8"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "5ab81d194957c4221c7b23e558bb665d"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "20aa878768006b0ff53de914864db417"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "fc78efbb92c21df4999712ff19d4a02d"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "71e185570f5a058a00102afe4bb05d7b"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "295a42b170d5db2a8c1f6d5da10f2b65"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "d73dad620115951af9087666daee5251"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "757dc2b2e029ebbfd18255d2db28958b"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "7e897075c92e23c7e0a1741996552c97"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "b7b0b5abc40684d723accbb16ecbb8b6"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "f7ce9cf6361a79f65e79af5d1ba083d4"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "55054ce87d3ea3fb867dd6e309dc0076"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "4e142f1e4b622f067b3d54b4a18ec046"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "a78b06e604744888f8eee427b9449227"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "f376516615ad9f07c44d0783191ba1dc"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "e5a74c0396951b58889aa1c5be2b8f9b"
  },
  {
    "url": "courses/index.html",
    "revision": "f8736577b32f3f6a857151650e667793"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "f823f48a24487052bb6b6febe46fb323"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "ea46cff6be6ee4e97d577e0d270caa1c"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "22a68f31bf774939cf7316e58db5de34"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "88b983ba77fe9c8cdd79073941b89895"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "1280d73a263bad799ffdc0d4aa6d62ee"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "4155c54608da49d7f5776b03d972e567"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "afae0953a0fe762d8dc2c26ca40bcff6"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "4985d1253947eda832e3b7777ce75486"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "c90454333bd313f62fce7b38f7650431"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "be0302477d990ecef9e25a755dc0c1ab"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "3d8e231718cd127ddb923db352c8a065"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "498a370f7c063d09429b38d2e385a772"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "9b22d183eabeafeb187acb867205603a"
  },
  {
    "url": "courses/template/index.html",
    "revision": "9f53eaccec1fa9a60e231fa8a4f8fc8d"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "448f637863ce4c5f55e0241a7f2a300d"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "f455f3d6cd5af3df7601fa12e55944a6"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "ff6a55c3c1e4d7c0e164c75faea3e3bb"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b08838f9bb04797c966c5336f6b7ef21"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "b838cab4a34c6fa687f26839b49e8e0a"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "8446392e2ae4662f122464e19d7e2a96"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "84acd0b58409bdd49bb273ec4680d87c"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "31b323600282d9737462be69d39ec815"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "085e311079cd7e67f1fd8d850cc560b3"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "a21450520d31af28c403a20b632d01d0"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "53c3e0f97b66d187c95b7b6f83529dd4"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "0668cded9c5ed0a7065766dfb1b28463"
  },
  {
    "url": "general/enroll.html",
    "revision": "4383b4ebe7418236b7c0f2a757fb4eaa"
  },
  {
    "url": "index.html",
    "revision": "ca93b5ce9747c5b9a462793a97091834"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "c70aedf1de9a385a3a6ee8af9b7eb95f"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "30b1be52f4a74fe1fc51103a6c15d6cf"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "8474230998f0a096632de43a308983e8"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "f6f38a20133cd76083a03b73a1699120"
  },
  {
    "url": "studyathome/about.html",
    "revision": "f47a444efe3e05b1db270f16242b7475"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "82f3536b7f4052c336ce0e3798f63621"
  },
  {
    "url": "studyathome/help.html",
    "revision": "470959c7476dae9e73b6877a48326800"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "02f946029793f149216d0b55d354b0a3"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "0a2bd989400cb70b345ea7e275133eea"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a18b1f7245bd4f915237fea19f058146"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "993185a8987d2085c90cb7bcc5c1db7f"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "37f89fd9150f229e562b81f4e57ff535"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2155355a3a1803a4244d089e88f70fb2"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "82b18f59538954baa165578c1d149709"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "dfee4857c1542cb5877a9acf97fdd08d"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "d99c9911ce571004ca05cb8e6c1ad869"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "335023e803216953ffde1cdda905ab20"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "b9954665a402483fd5387b98200a8e40"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "1c237f7126c4f32199c542ceacdea1b2"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "6f9492191dbfe9e6ae9a0ae2c01f7bf1"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "a3ba0938bfcf95cd031dbac13959b7d3"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "33596d4f509ac826afa093c11376c5ad"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "9cdb42c228d7d60146e4d0b8eea0f529"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "c88a552800a86f51978ae20fd263be0a"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "0b00075b1c0225d5b469c96767d9f39c"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "c950542e7ece79eae06a707b2201a923"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "352ccd21b317e89386ddd4fd55b792ca"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "32791f39207aac8924eb0990f83ed4e0"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "68651eb124925b816c0b0eb11ad1b997"
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
