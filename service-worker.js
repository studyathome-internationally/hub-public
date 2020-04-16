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
    "revision": "7fffd1cf0f1d86021c2bf890c4a21dd7"
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
    "url": "assets/js/14.7b75c49e.js",
    "revision": "098044fbe7c53820eae93f049e992d4f"
  },
  {
    "url": "assets/js/15.a8dd8699.js",
    "revision": "2d3bcecb9d5056eddf320005a2c52204"
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
    "url": "assets/js/30.f0f459ba.js",
    "revision": "1741835c5ebc416cda15bfdb1500bdbf"
  },
  {
    "url": "assets/js/31.6b3c8cbd.js",
    "revision": "cab62740b04aecf661266afb2049c075"
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
    "url": "assets/js/38.ee326362.js",
    "revision": "0f5ea73dd9317a522c93a659e2b0809f"
  },
  {
    "url": "assets/js/39.3faa0189.js",
    "revision": "dcbb80bf244cd558eeec216907805e3e"
  },
  {
    "url": "assets/js/4.4663412f.js",
    "revision": "437115544c4f5bf4caceb71c5dc1e7d8"
  },
  {
    "url": "assets/js/40.2faade9e.js",
    "revision": "6b6aaa0629eaef6d48d1edcbbeb4580f"
  },
  {
    "url": "assets/js/41.41d4e2d8.js",
    "revision": "8aad7e17bf57bbcc19770e687f8d4f7e"
  },
  {
    "url": "assets/js/42.201c0638.js",
    "revision": "a07b484d8963a46bfcaa10ee87bdb8ef"
  },
  {
    "url": "assets/js/43.9b958a52.js",
    "revision": "c9f9d45ea5ad019777c29f2339485bbd"
  },
  {
    "url": "assets/js/44.07596dd9.js",
    "revision": "a0d5626fb4d3e0a8c4e9fdd8a3e283fa"
  },
  {
    "url": "assets/js/45.00283702.js",
    "revision": "42ae5fa99f8998b89c28ad72baacd843"
  },
  {
    "url": "assets/js/46.95e9a667.js",
    "revision": "1d5f1adb3a2dad45d364943987354749"
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
    "url": "assets/js/55.3a44609c.js",
    "revision": "79f3e8a234da6f490098c3415ad8424d"
  },
  {
    "url": "assets/js/56.d4d4fb1b.js",
    "revision": "e81b47af198ba443e4f8774fea36301d"
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
    "url": "assets/js/59.53b0dc2a.js",
    "revision": "42b4241d5e202e35e4b44ab132ca8df2"
  },
  {
    "url": "assets/js/6.4110989c.js",
    "revision": "9f33777cdcc6e298e401f6970b089056"
  },
  {
    "url": "assets/js/60.d6492f22.js",
    "revision": "c3527e9a2d9377c80c3c1f580d319a67"
  },
  {
    "url": "assets/js/61.b93b439c.js",
    "revision": "a4070bd9c17ad51b1176a7d21357960a"
  },
  {
    "url": "assets/js/62.bacb9ebf.js",
    "revision": "b3ba89822c3e55425ec45d36247420f5"
  },
  {
    "url": "assets/js/63.1f7ca2e1.js",
    "revision": "beb9e3f488a1c64f8e84f5fae6790aa2"
  },
  {
    "url": "assets/js/64.7d09478b.js",
    "revision": "07befba6a530e596f3109123c70a3d26"
  },
  {
    "url": "assets/js/65.cd779b49.js",
    "revision": "66145d01d3d698ef57478b13d151560c"
  },
  {
    "url": "assets/js/66.0dbeac92.js",
    "revision": "aaeff38310463e674b44743ebdc744e0"
  },
  {
    "url": "assets/js/67.181a1032.js",
    "revision": "4dd7b72178ed46a3c1ea648fe90343e6"
  },
  {
    "url": "assets/js/68.b14139ae.js",
    "revision": "6b59485b211d03b467de94e7c9e8f010"
  },
  {
    "url": "assets/js/69.36b56862.js",
    "revision": "9b07a5e755608042ec2e108a4b062dad"
  },
  {
    "url": "assets/js/7.4d2758f0.js",
    "revision": "b3313fdb85e9a027e5f5335f9d7bf118"
  },
  {
    "url": "assets/js/70.62532923.js",
    "revision": "048583e78b85a914bb93da13dac5b3f7"
  },
  {
    "url": "assets/js/71.73f86aa5.js",
    "revision": "3bd44fd121e2d7c91cab7eeb4a9814f7"
  },
  {
    "url": "assets/js/72.6d1c0b80.js",
    "revision": "c00337279923dab365e9b96a510fc9f8"
  },
  {
    "url": "assets/js/73.14a33b38.js",
    "revision": "cc744d34192b55f9c36d356f59b0fc52"
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
    "url": "assets/js/80.8ddbb2eb.js",
    "revision": "27ecc34cc6f0eaa8f8e7300ac2549ebb"
  },
  {
    "url": "assets/js/81.7ef8539b.js",
    "revision": "592718e83d6beda0084f8b4f6ab10ae2"
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
    "url": "assets/js/84.ed9445dd.js",
    "revision": "aea117b12a783d7201380c49d57f337f"
  },
  {
    "url": "assets/js/85.a2cd5cc6.js",
    "revision": "badae720ce792f795eaa73fe359d116d"
  },
  {
    "url": "assets/js/86.87f62616.js",
    "revision": "0b8653e15697c641966a6d912981f5d0"
  },
  {
    "url": "assets/js/87.5115255a.js",
    "revision": "b7cd57b29d54c4c8c45f600c697cc98c"
  },
  {
    "url": "assets/js/88.dee6d1b0.js",
    "revision": "fbf260521da9ee3230dceb654ef20bb0"
  },
  {
    "url": "assets/js/89.da713176.js",
    "revision": "5cec2937381ddb98974de3b305646dc3"
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
    "url": "assets/js/91.affab8cb.js",
    "revision": "82f5c44d53adcce979fe3eb77491ceff"
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
    "url": "assets/js/94.832d451b.js",
    "revision": "fd3835311c38889cc9c80cb2188a45fc"
  },
  {
    "url": "assets/js/95.2b0297a6.js",
    "revision": "97f1af7a4a53c828330407c9f032c6cc"
  },
  {
    "url": "assets/js/96.4c7d73c6.js",
    "revision": "cd1ee4a0e2d2f500c1f5285e754f4af5"
  },
  {
    "url": "assets/js/97.68987592.js",
    "revision": "e09bee335ff1d8177024a703187f55c2"
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
    "url": "assets/js/app.1fe3498f.js",
    "revision": "ce55e32412b2b00e2602a6c9da51c8dd"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "4da1cc4f15dd21e23b6df597a6e724da"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "03efff45bfe9bda34ac077bfd40e20ff"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "50cfec8713d85239d3e32168512c3a1c"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "e5075e0caa571088664d728aec3c83cb"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "c71e8d5fe7aa4cc263f39150b700900d"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "d4d1a65276935c7a3f8186d7f1f0371d"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "437a6de088069aa553644b1ee3aabbe7"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "305f6a8fd2a826c87acc7225ecc52918"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "eb138b51f8471ac393f68847646d73ee"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "a3866e6150eca71f230edfb3c81ddf53"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "323a9860872bcf3f33bef7083b3b826e"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "2f9d4cdf46bbc22536ce29e7af5a03c1"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "f6991ea6095561076f4d24b20a41fd0f"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "5d2b555e63ff7916ca87130073f46b97"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "ec535f178cfa82380f33b8a2f3409b44"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "32da89be37489419b09fe24d2dc75603"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "563f0ee02660fe108015a1f9ff7cd29a"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "c3105e6173d1d9cc6730bae8f57e4464"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "a5a2c56ad6050a97fe1a739115f71a5e"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "7b6af9c9f33b762afe4cc369d5aff1bf"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "15039fdd8d3544d3bc3b83356d78b12e"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "80bc2fc37e86566b4337fa05969bedc8"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "70ca9833ae2d9db52e593084c5bc9776"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "2925b34d9d7cdd544195952ab7d71098"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "0936c8b2f69afee5048775ab943490b5"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "b51c87d5db199b304d76f60fbe1e40fe"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "c8df5bd285a58764d6225948bfa13809"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "573c7afbb44c99288b9210e784e22144"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "aa09ea03cbd4ffc61eb9d8675d68a5e4"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "9c98725dd2bf45454ee825a4741aec97"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "01893b133b4e4ac4c3c5b01e2fa23b4a"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "af91ad76717522ca62a66308524fd173"
  },
  {
    "url": "courses/index.html",
    "revision": "6e878dbb78ff726a67879a1fb18336cb"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "0b215a5a18798b6d9eb507a3e355c88d"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "c5e023bf04e4d8ff49e98ea57502d11a"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "35449a4662f2c8fc22da7169637c9936"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "46c6f852c2c0179c60d17da5a0b9e097"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "d19d62475978636af29bc834b108b102"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a591160b02759ff580fffa562e7881ed"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "24a767c536ea8d8613bf777b6d8c8807"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "27dd72a014c32d592bb4348797dcc0da"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "c8020734fe472e64ba88594fe12612eb"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ee016e4598ec7945e86faec49e6ce309"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "a7e4c776892aee3d326f2156ee714804"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "18048be0760dee99319f7c19e0b3aba2"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "221957062d23ab9e41a037ff7b4ed254"
  },
  {
    "url": "courses/template/index.html",
    "revision": "78b4a242c465011266bc650362a1dc45"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "9a3deae208f52586f69f6dabe832b754"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "16cd41f07b74c5a0fac03c39c5d87721"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "b9b1dd75a1cbaeafe9ca754e96386b7f"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "f32c1967353d441b4d4c29c34424069f"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "db1d215ceb0820e407d5799eb6f4fbeb"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "b5e5083c8ae2d75ed1fe15264194885c"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "e2f76f3d2dbd05310e8f3168b94b16e4"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "70c943e4ce358f9dd6e860f59c1709d1"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "32c0edea59adb85f33ff7c63f77011d6"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "a3d5f4676f601afd70ffb0f68bdb5e6d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "15e9694059d09c122ebbee3afbd0da6d"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "86dd0466e8489507ef0e9cf1ade5c2d5"
  },
  {
    "url": "general/enroll.html",
    "revision": "e08f6fc248c25a29dd4aacd2a92a4a03"
  },
  {
    "url": "index.html",
    "revision": "c1deb927e746b9f04bd3aa3a53c0d73b"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "50b8f2c6b4addc85fd8980c26915c6c9"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "09c3a120428a0a517b4af5a6d228a343"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "4cee56615c344146992ec892873161fa"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "3473907008b62277137f7dfce0cc0f53"
  },
  {
    "url": "studyathome/about.html",
    "revision": "039c0b5fa65cd8ae9ef3fe718188f26c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "a5c81bbd8229e16d5a97c26bb5106644"
  },
  {
    "url": "studyathome/help.html",
    "revision": "e56651fdd80348770d4ea9371e0e0994"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "db256e3277bcffdd87e10d8478cf6ad6"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "81d725df9393a16f75826a4e5acb5025"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "0b9b7496ad3e8f6d0561e0593030c2aa"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "4f6b3e9f31e0a789b7b0c96000907ee7"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "ad577dd318aef2df8a983ec687c1ba58"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "3bcad8453bc3ba23a35278bf27753ab7"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "e2cdb9be3e42aae48f4353e0c336f06a"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "a4405e3ec3c9d686173a3c4ae62f822b"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "ffd03fa90301a778bf9ae145935355f5"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "fe4f5eff39a8c0eb7d41cd28555f386e"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "bf57e2ddc316bc7724a12b618c333953"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "c24d05f2e37a1cf8ea5754848d2f9660"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "07fcdc4e3417ee59b55cb1457d060ffe"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "0423047b32cb6f2a3886a7f77bc41a85"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "4a08269fb11e2c783a46cf89050bf4e5"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "d874bdffbab94bdd21016769a997d369"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "37e49ce1a1129b4c4839f6b19d3c7310"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "c380ed51a25100079a67ab516c5b719e"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "1aee4ea91cd19a3fe09ee5fbb06de563"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "fdf693e6536fbf08b9c7ade9412531f3"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "146a8afa1caf5c1c658bf8708a1ce6bd"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "d8d6654d5eeedbc6aa7a6060fb6eec8e"
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
