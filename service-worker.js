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
    "revision": "7b4f3241e829df81c7f6996d4b7d7425"
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
    "url": "assets/img/10000000000002D000000139DF60B53EC6A7D86F.3518a282.jpg",
    "revision": "3518a28279ececacc090c10fc7d29aec"
  },
  {
    "url": "assets/img/1000020100000578000001F448F13BEAB4CB80F5.d0e8b198.png",
    "revision": "d0e8b198fb189c285b5376af4b52719b"
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
    "url": "assets/js/10.a0740675.js",
    "revision": "880176cb85c047556d0c2ebc18b74acd"
  },
  {
    "url": "assets/js/100.4be43a73.js",
    "revision": "94bfb3de1c0c774677561e96e4d41af1"
  },
  {
    "url": "assets/js/101.6cc3f9fb.js",
    "revision": "53f60837c6932def271e8030438a33d1"
  },
  {
    "url": "assets/js/102.7f568773.js",
    "revision": "877a0dee522d3061266bb9a94d8b419e"
  },
  {
    "url": "assets/js/103.b02c3b93.js",
    "revision": "2b89d1572e1b25ca634b2a1a4ac3684f"
  },
  {
    "url": "assets/js/104.58e4fd7e.js",
    "revision": "e372de935ea96cec3173b2e5c4743dd9"
  },
  {
    "url": "assets/js/105.4f69ed84.js",
    "revision": "b01b949dbaae932e6405f138e7bea518"
  },
  {
    "url": "assets/js/106.3f5d1c68.js",
    "revision": "9cf0c0f95e6613e47db9f64ba4252959"
  },
  {
    "url": "assets/js/11.5eb7ddfc.js",
    "revision": "51fd17e0e44629068e6fedbc7939f4f2"
  },
  {
    "url": "assets/js/12.19383956.js",
    "revision": "8678ff2ac8847a1cb7cb41d28395ce8e"
  },
  {
    "url": "assets/js/13.0fcf9b47.js",
    "revision": "0a2900df71080dca12dbe11e9496a19a"
  },
  {
    "url": "assets/js/14.1626ab69.js",
    "revision": "e5d26c2a128cba1b0ae7f2dd8e5c965e"
  },
  {
    "url": "assets/js/15.a77722ec.js",
    "revision": "f5c5a9acf215d4ad837ae42af0661763"
  },
  {
    "url": "assets/js/16.dbbdcdb4.js",
    "revision": "6867f4f6b14f083c61889dee3aa07869"
  },
  {
    "url": "assets/js/17.9a6c9e95.js",
    "revision": "7359f0a1aa2f08a751b27c24125b9a00"
  },
  {
    "url": "assets/js/18.6dc84503.js",
    "revision": "324a2e27dd27ec3425626c920b8423e4"
  },
  {
    "url": "assets/js/19.aa99ee76.js",
    "revision": "f724c6ee7e342a587bce36a70ae4ff7c"
  },
  {
    "url": "assets/js/2.7b6d83aa.js",
    "revision": "c9c65978ecf5569a387c37f594e76bd8"
  },
  {
    "url": "assets/js/20.f4207ebb.js",
    "revision": "24510ef12c822a328ddaadf97b5e5e83"
  },
  {
    "url": "assets/js/21.db7ac2d4.js",
    "revision": "96e4c3a6bfb1416e5d30134f70308f34"
  },
  {
    "url": "assets/js/22.8410391d.js",
    "revision": "e9e4d0468e86576d46acbf518d3c2295"
  },
  {
    "url": "assets/js/23.991a74d3.js",
    "revision": "8b5a9da25f14c10dda160b427faf00ab"
  },
  {
    "url": "assets/js/24.7ac2fe7f.js",
    "revision": "9cad64d43564765477489a0e58c72e5d"
  },
  {
    "url": "assets/js/25.1b9d4670.js",
    "revision": "2b079711a162677a4f7d054110cf4593"
  },
  {
    "url": "assets/js/26.74b3ddea.js",
    "revision": "27de6b95acd9dac6e57da9dc484cb7b8"
  },
  {
    "url": "assets/js/27.a7fb6dcc.js",
    "revision": "d73e56246c59de424a193bd808f2684a"
  },
  {
    "url": "assets/js/28.54ad60bb.js",
    "revision": "d645eed1c294cf5384e276530086c00f"
  },
  {
    "url": "assets/js/29.ae11a372.js",
    "revision": "231eaf536baaabf769329d1bb5561243"
  },
  {
    "url": "assets/js/30.3b930ed4.js",
    "revision": "41277d4a68e7c3031e31f7854377597d"
  },
  {
    "url": "assets/js/31.ea23e7ac.js",
    "revision": "ec178ab4259fc8c691c91ef54a0b895e"
  },
  {
    "url": "assets/js/32.f2485875.js",
    "revision": "696730ecb9fb35a1f1471aa72adad06f"
  },
  {
    "url": "assets/js/33.07c00c61.js",
    "revision": "7eba92f1607baece7db9b080c7486e92"
  },
  {
    "url": "assets/js/34.6c86d3c8.js",
    "revision": "9130059922f434f41b64e552bea98896"
  },
  {
    "url": "assets/js/35.cceb3bcf.js",
    "revision": "6ff033c4ab950ef75634de2b3d9e31c1"
  },
  {
    "url": "assets/js/36.9ded76d0.js",
    "revision": "c842dcd261c300246be66fcba1b7100c"
  },
  {
    "url": "assets/js/37.a523f083.js",
    "revision": "0588da001795c18f26aae3f99d414c07"
  },
  {
    "url": "assets/js/38.762c9130.js",
    "revision": "26d83570f84374cedeea05cc2c515f5a"
  },
  {
    "url": "assets/js/39.e378067d.js",
    "revision": "d9fb164f2566105a5d8183e3c05cdefa"
  },
  {
    "url": "assets/js/4.358167dc.js",
    "revision": "4a14f44154af405c8f785b700d412501"
  },
  {
    "url": "assets/js/40.06e27440.js",
    "revision": "7ee7e5123d8a3adc720a2c1091421ecf"
  },
  {
    "url": "assets/js/41.118839e7.js",
    "revision": "4fa99fb8fe01a9ad1589f68875c95932"
  },
  {
    "url": "assets/js/42.221be318.js",
    "revision": "86909d323a6d1105ccdb980434935962"
  },
  {
    "url": "assets/js/43.86981b9b.js",
    "revision": "37e52554e1e281927f7be0fabbfd62dd"
  },
  {
    "url": "assets/js/44.e02c9458.js",
    "revision": "21d6aaf23b7bdfa68568c7e9fff6e089"
  },
  {
    "url": "assets/js/45.1cfe80c1.js",
    "revision": "442ab9e1c11c7697dea57afaca094f77"
  },
  {
    "url": "assets/js/46.d9bd5d28.js",
    "revision": "f6743b167440578979423dd292ba6cb9"
  },
  {
    "url": "assets/js/47.3c026720.js",
    "revision": "15892d81b3483138115b12f80805a396"
  },
  {
    "url": "assets/js/48.04ddb96f.js",
    "revision": "fe6ce9a2439cc80c8fd3393cec6ed417"
  },
  {
    "url": "assets/js/49.29a4c86f.js",
    "revision": "ab1d89340bec5a394316915992da6275"
  },
  {
    "url": "assets/js/5.f9ee7fab.js",
    "revision": "1e02172e4badac2941718c9c9ddf351e"
  },
  {
    "url": "assets/js/50.fb46f1bd.js",
    "revision": "67e3d9a36676ba145809c0b5ed1494d9"
  },
  {
    "url": "assets/js/51.9bd1b27c.js",
    "revision": "fc13586441df9099dfed82306889395f"
  },
  {
    "url": "assets/js/52.002ebb05.js",
    "revision": "6d2fc277df34afdaf814bfdd54e0b98e"
  },
  {
    "url": "assets/js/53.e95ec39a.js",
    "revision": "a8ecb44753d959c317a571c70e762c77"
  },
  {
    "url": "assets/js/54.e4c2b19c.js",
    "revision": "714dc148f60b0e58ab069c29a51af5a1"
  },
  {
    "url": "assets/js/55.51267c2c.js",
    "revision": "7cd5c4534e0c64923be91ab15c4732ef"
  },
  {
    "url": "assets/js/56.4e1ecaa5.js",
    "revision": "fda03d5c3b3ef823beeb72f324799dcd"
  },
  {
    "url": "assets/js/57.ef04ac9b.js",
    "revision": "3211fdf42611e85029da8cf49486e3ba"
  },
  {
    "url": "assets/js/58.6443e183.js",
    "revision": "d79a09b5206a247b54f545cf5e0d56a7"
  },
  {
    "url": "assets/js/59.d5b6b205.js",
    "revision": "5ad013c59489360ac433a3777147dbe5"
  },
  {
    "url": "assets/js/6.e50f8585.js",
    "revision": "86767fc558a44566dedd387eb99e1709"
  },
  {
    "url": "assets/js/60.47156308.js",
    "revision": "53954d21c950e022c9fe07725dc39ac3"
  },
  {
    "url": "assets/js/61.66778eae.js",
    "revision": "c47056e6b4975adecb0e9e2fa8ede8d9"
  },
  {
    "url": "assets/js/62.08a23159.js",
    "revision": "676c4fbdb285f3d4b4d952e63d74f968"
  },
  {
    "url": "assets/js/63.05df0b58.js",
    "revision": "8b28e4fcb834b0e1e33f56228d71bb93"
  },
  {
    "url": "assets/js/64.19021949.js",
    "revision": "5e1bebcf4c1849a641e69ee982d1ed7c"
  },
  {
    "url": "assets/js/65.d8978359.js",
    "revision": "46773967c66be176f68bcc3cb74ad8c3"
  },
  {
    "url": "assets/js/66.15a548c4.js",
    "revision": "80db0fb076220b1ec6e5907d962fbae0"
  },
  {
    "url": "assets/js/67.eb161e37.js",
    "revision": "2ed136f4461125a417a1425615e5c5d7"
  },
  {
    "url": "assets/js/68.3d3331ec.js",
    "revision": "2ec311429de6087e80f84fac0f45355d"
  },
  {
    "url": "assets/js/69.5ab7bcf6.js",
    "revision": "4ca126e94aa2beb4832c20de4f956f38"
  },
  {
    "url": "assets/js/7.4d2758f0.js",
    "revision": "b3313fdb85e9a027e5f5335f9d7bf118"
  },
  {
    "url": "assets/js/70.cfca00ba.js",
    "revision": "beece5dc1564deff55b6e3f65a28f9cd"
  },
  {
    "url": "assets/js/71.45824d66.js",
    "revision": "fb3c6d1ad3438b947ec2a9006770e68f"
  },
  {
    "url": "assets/js/72.ade44583.js",
    "revision": "99bc36ba2a1237564aaf1e266b086700"
  },
  {
    "url": "assets/js/73.16a3331c.js",
    "revision": "3c0fd638645f9255fb5ebb93a4e155c4"
  },
  {
    "url": "assets/js/74.71f0227e.js",
    "revision": "c4fb3aea6130b3713dcaa217681cbdf8"
  },
  {
    "url": "assets/js/75.76646084.js",
    "revision": "1f1ac8ecbaef5e8ebe192723e7e7eddc"
  },
  {
    "url": "assets/js/76.e17a5635.js",
    "revision": "d5e54716afde1004b158c977e9b372e5"
  },
  {
    "url": "assets/js/77.881722d3.js",
    "revision": "c210c8dda6d3d3c72a2ec732a8cd54be"
  },
  {
    "url": "assets/js/78.40bcd96e.js",
    "revision": "c4810f2084c18926d62c170d4caa0549"
  },
  {
    "url": "assets/js/79.0f752a77.js",
    "revision": "e473421cdaa69b63ade5d21b797299e5"
  },
  {
    "url": "assets/js/8.867708e6.js",
    "revision": "67044406be25872527e87fd6355f5ff9"
  },
  {
    "url": "assets/js/80.b34b7fe5.js",
    "revision": "2bdb8b84b9879030054d2e87b88edb87"
  },
  {
    "url": "assets/js/81.ecdde54a.js",
    "revision": "d382e79dd30a510c1511c5f621b01188"
  },
  {
    "url": "assets/js/82.63046fe2.js",
    "revision": "38b18cee2b8e828ecc460afe540f029c"
  },
  {
    "url": "assets/js/83.d11344ae.js",
    "revision": "68dd5303f3737634975fcea64b145a9a"
  },
  {
    "url": "assets/js/84.a75b29ab.js",
    "revision": "f686a31e24771e9d91b89f4cdb62b1f2"
  },
  {
    "url": "assets/js/85.cd2ca6f0.js",
    "revision": "14a4066401386afe1f9d4b62623d04a8"
  },
  {
    "url": "assets/js/86.3e8aaf97.js",
    "revision": "3e8a1854bd95a3666124b33046b0c710"
  },
  {
    "url": "assets/js/87.b914f066.js",
    "revision": "58d22cd3420675f87ce55ce3615b9c3d"
  },
  {
    "url": "assets/js/88.aa42e753.js",
    "revision": "9482122ef568132f2941881899d7ba26"
  },
  {
    "url": "assets/js/89.7a5423cb.js",
    "revision": "ee318432a971854cc12a78ace3960fdb"
  },
  {
    "url": "assets/js/9.dea1341a.js",
    "revision": "0d1304d6d4ec20b194ebcdf683602de7"
  },
  {
    "url": "assets/js/90.23310192.js",
    "revision": "283581aafe6368eeccfa8f6c54cf52d5"
  },
  {
    "url": "assets/js/91.a3a67c26.js",
    "revision": "f9ba5692af9154d400773f2456b4503d"
  },
  {
    "url": "assets/js/92.51c4280a.js",
    "revision": "fbd55324482f4edc69dca81c7a100ff4"
  },
  {
    "url": "assets/js/93.191619aa.js",
    "revision": "646cf36394d3c194c575bc2381a59ee1"
  },
  {
    "url": "assets/js/94.e6612ddb.js",
    "revision": "16c70aa02d632b065b68f6338db65a4a"
  },
  {
    "url": "assets/js/95.0f18eadb.js",
    "revision": "e9db98cd45c497de73cb93c835188c04"
  },
  {
    "url": "assets/js/96.496ed428.js",
    "revision": "f2a02e322e3361117f9678214848defa"
  },
  {
    "url": "assets/js/97.78c22aab.js",
    "revision": "224821763b55ae264a28e978ae85443f"
  },
  {
    "url": "assets/js/98.fa69d30f.js",
    "revision": "84170f4e35239b83ed20ca5aca8b56e5"
  },
  {
    "url": "assets/js/99.542cd4c6.js",
    "revision": "2777e17d7f6746d479b05d722a068e0b"
  },
  {
    "url": "assets/js/app.b861d0a1.js",
    "revision": "16f5d39cc06865eac5b148ede86a558b"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "96ff6208523a936f048e317a070e377e"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "78d96f73c6fe592feaf0c15223e2e575"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "37fdb3c07fe565059f320e241cfb5a66"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "2bcb0990b3f9dd854e22ed7bd57b1c7f"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "a3a8fb156b06abe1fa1804f6a4321b47"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "5517ede757c515ad396a610460c68656"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "071f4080dc3bd9cafb165fc54fac8626"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "f7cb1608b97332d6a7794fba03eaf6e9"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "9786d2485e71bdd8f3691625c2eade8b"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "0fdfb20fbe01c2244c756c02c51c11f5"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "7e4478d8058532dcf56ef570d7076067"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "86eb5230d31de80d5a341923e9121b22"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "f840095edc9af51bc510d9133b7b8922"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "68f02f351acf86d70ecb61f575034fdc"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "c801209e06c889ee5f8d79758689614f"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "1e39ae4d15f3e33df24058b18e01c4f8"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "0a095db3567ddac3ad75d3bc7020fbfe"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "0f8cc4b178ae83089fd2037b6227b838"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "36bdae4da30e6d34e026c5f494a525c6"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "6a2b3da01642ceab82cc2e5c4204af39"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "84506dcd01fa28c3178da3bc713eda3a"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "75b72c81549698d4e5d65cdd43ee8727"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "b3afe7cd57b677962c4caf226b85386c"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "1a3b8235d964cc160e4e1035c54637ab"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "0c323262e84b729cb4025a3799c9a106"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "05759c4e936585f47251efe16c0c9d37"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "767deee3b2cf0addda8c0ebb6daa20ab"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "da6257ebe31898bc85fae3df97bb8860"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "68f4ab78e32bd02bc49d9673d08d2260"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "fb18fa21338b9ee19c75a1ba397a8442"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "d9cda9cc071cb307517410c964192829"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "852b4ecdf690a34dceac8577be5e14d6"
  },
  {
    "url": "courses/index.html",
    "revision": "9a682581c5833ea0218dbfe3b34f1812"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "0471129e1073c3c813440ffc41ba3ec2"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "5fa401a1814fd33fc670f9eca0f6ca26"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "50b5aee3daacd3dc0e43c6ef95424529"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "3b754b9d3a1dbf693e14a296bab41371"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "bdac924766d3857647355ca7a5a1b5ce"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "0b741b2f8a403b05a807d6b559ccd28a"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "2121b2cf0a92ef611a89cbee1acf6914"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "e1106f1c13b8e38f320b69ffcb186d52"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "11bf5ae181b1ba664efb93d39992f078"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "a255cd2552faf3b989ade826efa14b15"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "9e9037bb8c438d4e558731b170eddd41"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "e3595059453c8beba481ac65b9d79259"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "37df18511d2d2380e8c11089e34b27d1"
  },
  {
    "url": "courses/template/index.html",
    "revision": "6dce7a5f83573a0dc83e267f9554fff5"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "8068bd7c590d0a86c64182a1002875af"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "bafd33fe49cdfa67ebfa4b54bb688282"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "4b44db869a56aff48871ee6253de3c77"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "cecd4d5990146e94b0d3870f88b802be"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "4496f25ba97c14a3c5ba5a8a261eadae"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "20fea443f13b8a227e884d9037e111ba"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "67e51ebb721c9513b7a2a66ae7335288"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "747d3e208091449ef0d7759107333757"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "4d429ae2b3ec6d1f5c39be74734b7597"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "a3c3359f2e9cfbe5d77a412d91792ad1"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "080e4d5800b45f39329b4d3f7f6d82b9"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "3282b86b96c63106841842cbc8b44acc"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "81ca8119e6c71504148328d48d99b845"
  },
  {
    "url": "general/enroll.html",
    "revision": "a9a1d4ead548b42012c59bedd765d227"
  },
  {
    "url": "index.html",
    "revision": "c3f9ed7c451b02d313929ab1fb10a40f"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "d0f11f71d14e2d31a1955fbdee74d418"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "f807a44648eb5065b7dc49c67d7bbb1a"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "46d1926d95daf2025ee0e4481e99a20f"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "96af288e2762d82e95385062d9aecd1e"
  },
  {
    "url": "studyathome/about.html",
    "revision": "a45ea73287841512ec8650daca32c16b"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "fe4e839ab27d9ef087ea78acb4291ac5"
  },
  {
    "url": "studyathome/help.html",
    "revision": "7fd3a8fbbdabe35ca14cee2ac42a70a9"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "2265c2d293ad97ccc9f3f7f37eed4a48"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "569db6884762ce1bc00b0cd7742ebffe"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "1d09fcb52b7ebf09ab734445591cb1be"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "5d0e1cc6bdaa87cbfc15551939ad5583"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "3181fa7b792f0af6180236228938c809"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "950062ebafaac4ad6af6cece609f3833"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "a1df626d03e1626e9d7de3b7fdd2a02b"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "d674a0ea50a5090ce45f162838b94d94"
  },
  {
    "url": "studyathome/partner/ukim/ukim.html",
    "revision": "2986cbe17a8f31bc65b819cbd900d841"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "aa672f04bfaff54e87876f30be785119"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "e506e69fe6c87e4311f87d7d3d42f556"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "b75d841a2183f9aaffd7ec18d0810f71"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "0399d49555da2af525945d0107411305"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "4bb118b411105fa8489a7267d01d8afa"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "df648c3ec7f00341a37dd5e18fa2bf71"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "c5c1381c69a08d34892f092da1708162"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "07e1d25449a0d2e8a150d3d76a6e8b1f"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "4f7c41faa798cf218e92e88f368b08da"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "c2fc2501fa704a7d7242ba6ca3b5c6ad"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "cf48c2b6408366dc26e49e8d76adc460"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "3294161712c740fa8effbe05eda9dcef"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "c215795902e9642f35c5015aac9edfa9"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "bc971ad4c3b7a0e4df76e07ffe91029c"
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
