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
    "revision": "8d911ffe9f3f5e40d0e60be357a56e57"
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
    "url": "assets/js/100.b5a7a201.js",
    "revision": "1d105bf75de1ee9a24a600b52f57dcec"
  },
  {
    "url": "assets/js/101.77b0a8f1.js",
    "revision": "1c2fad95ee149e80ef6c349477a5ce22"
  },
  {
    "url": "assets/js/102.11acdbc8.js",
    "revision": "a35736c6ca53bdb628ce2186cecaaeea"
  },
  {
    "url": "assets/js/103.55fca942.js",
    "revision": "b2ae173fd5adf72321b961f9f3a170ad"
  },
  {
    "url": "assets/js/104.e0ec9193.js",
    "revision": "febad4c8869a31f239132b2b38cc021a"
  },
  {
    "url": "assets/js/105.da84424e.js",
    "revision": "1a03c6fd42a517e1e47cf484a36cb038"
  },
  {
    "url": "assets/js/11.10f6008b.js",
    "revision": "669fe57c91ca1e7fb2387892ba0df4d7"
  },
  {
    "url": "assets/js/12.3283567c.js",
    "revision": "069f4a075762616ff4c20a626effbfa6"
  },
  {
    "url": "assets/js/13.80b851c7.js",
    "revision": "29a4e89ac7e0fcc423ae31b70b121e70"
  },
  {
    "url": "assets/js/14.82e09f3a.js",
    "revision": "e3e376de07e09f1d8b00619033c90544"
  },
  {
    "url": "assets/js/15.f52e4ddb.js",
    "revision": "25b920691817041dbf734f224535e94f"
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
    "url": "assets/js/18.de947d15.js",
    "revision": "f77622ce804e474e3925570cb9ed348b"
  },
  {
    "url": "assets/js/19.58b12461.js",
    "revision": "e582e1dee9b8b4305050ac05b360f8c1"
  },
  {
    "url": "assets/js/2.5a523eda.js",
    "revision": "4019b198fa0461c760a8e0b2829ac02d"
  },
  {
    "url": "assets/js/20.d87f690c.js",
    "revision": "bad554b208d4d9d048c4b7a8fe451288"
  },
  {
    "url": "assets/js/21.32181d9b.js",
    "revision": "9e161c3dd8cc79bd67d0f48cc67869c6"
  },
  {
    "url": "assets/js/22.e7dd1252.js",
    "revision": "193699ac671133a00ad46a3db9a502d7"
  },
  {
    "url": "assets/js/23.3094cfe2.js",
    "revision": "1619ffbb217ccd85cef102a6eb85a8e1"
  },
  {
    "url": "assets/js/24.cead9343.js",
    "revision": "0dde09d718c58aef7d356d5a56960b78"
  },
  {
    "url": "assets/js/25.e1e8f968.js",
    "revision": "23217a930382efc209519a7af8d35eec"
  },
  {
    "url": "assets/js/26.f32824cc.js",
    "revision": "5f925912d3094427d8d67f67b7453049"
  },
  {
    "url": "assets/js/27.06e5631a.js",
    "revision": "b4423fe817e9007dcb45ec0a50f08eb5"
  },
  {
    "url": "assets/js/28.f6cf9ab7.js",
    "revision": "e778c4aa46879813e45e0985bbe20c02"
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
    "url": "assets/js/34.3b51c610.js",
    "revision": "72c453d3c94cf9bf8efbd294c04123b3"
  },
  {
    "url": "assets/js/35.6280563e.js",
    "revision": "038330f2f407cf7fff6629d21ecf422c"
  },
  {
    "url": "assets/js/36.ffde3d23.js",
    "revision": "a93aaac63ced882bcddc9ea02ca697a5"
  },
  {
    "url": "assets/js/37.602ebbf2.js",
    "revision": "41d7c8555007566470c7cc64e8918200"
  },
  {
    "url": "assets/js/38.ee326362.js",
    "revision": "0f5ea73dd9317a522c93a659e2b0809f"
  },
  {
    "url": "assets/js/39.d7a9d5a4.js",
    "revision": "c9a0cf86bd8b028b62447699908d948c"
  },
  {
    "url": "assets/js/4.ab5b1d30.js",
    "revision": "ff236dde7f3212944d52e272de7ab6f1"
  },
  {
    "url": "assets/js/40.2faade9e.js",
    "revision": "6b6aaa0629eaef6d48d1edcbbeb4580f"
  },
  {
    "url": "assets/js/41.8ab8f815.js",
    "revision": "84d6871cc7345b05453e0bcd42b266f0"
  },
  {
    "url": "assets/js/42.6db68626.js",
    "revision": "60bdf3092e83d6fc2170143545a08dc7"
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
    "url": "assets/js/5.5df5b523.js",
    "revision": "fb129f6676832ff0fb049917ffc46ff0"
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
    "url": "assets/js/53.7e20b2bb.js",
    "revision": "9014fa742754c938c2c998e67d42e983"
  },
  {
    "url": "assets/js/54.020fada9.js",
    "revision": "8ab65a5c86d2061cfb9abbffc92fd8d7"
  },
  {
    "url": "assets/js/55.3a44609c.js",
    "revision": "79f3e8a234da6f490098c3415ad8424d"
  },
  {
    "url": "assets/js/56.0e1ae8a9.js",
    "revision": "d671965f8009127ac1e702a96be74b21"
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
    "url": "assets/js/59.8e7ae196.js",
    "revision": "4cda87159c9d4186ee117dddd0369df3"
  },
  {
    "url": "assets/js/6.1baef38f.js",
    "revision": "1c17a0ed599cfc4c913f4bdc81d13cbb"
  },
  {
    "url": "assets/js/60.33e4aeab.js",
    "revision": "fdeb5237644600800cf3186274efb36a"
  },
  {
    "url": "assets/js/61.0c301019.js",
    "revision": "b2e0610bc1ac0f1a8cf69bb5ed61559a"
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
    "url": "assets/js/64.74b11e32.js",
    "revision": "be0e3ad062d14e5498a8a14e7df47b82"
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
    "url": "assets/js/70.4495c242.js",
    "revision": "b9923967679ec8db4841c49763d38414"
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
    "url": "assets/js/74.ddaaad3f.js",
    "revision": "6de4e89971bd4336a11fb79fb9fe567c"
  },
  {
    "url": "assets/js/75.253680fb.js",
    "revision": "c8dc7901c89fb3ef97be9fc2b6e31cc9"
  },
  {
    "url": "assets/js/76.6b65106f.js",
    "revision": "e3ba0798c21a07c117ab292d90d30e04"
  },
  {
    "url": "assets/js/77.4975c7af.js",
    "revision": "9314ac243ffcf6327423bf06835373ce"
  },
  {
    "url": "assets/js/78.0f138e92.js",
    "revision": "8cd5d792ff3b87b88c44ae3411c8e936"
  },
  {
    "url": "assets/js/79.60e0a3f2.js",
    "revision": "7a3fe8cdfcf74f3c2c7903d8966ed5c3"
  },
  {
    "url": "assets/js/8.6d5e6ed7.js",
    "revision": "0b8884007b010449e2baf4c331072516"
  },
  {
    "url": "assets/js/80.dd76d7c8.js",
    "revision": "9b23a83edb7da395c495ff3a07542b19"
  },
  {
    "url": "assets/js/81.0eb4abb4.js",
    "revision": "e83c6bc1b1243ba886ed61cee4eb4e26"
  },
  {
    "url": "assets/js/82.250832cf.js",
    "revision": "366bfcded922baecf8582277852e52c3"
  },
  {
    "url": "assets/js/83.ad867cbe.js",
    "revision": "d954c271a6a9f717629a62e5552e7118"
  },
  {
    "url": "assets/js/84.67e5d5f1.js",
    "revision": "1ad76cbb5d760bef1ff42b18c9691436"
  },
  {
    "url": "assets/js/85.9dde923e.js",
    "revision": "8f1119c6c86b9257cd13b05ecee7e424"
  },
  {
    "url": "assets/js/86.80e5b392.js",
    "revision": "d0134b2591aa356531f482b858af25fd"
  },
  {
    "url": "assets/js/87.131e8971.js",
    "revision": "8283f56a6fc0304ffabab5e06da713ba"
  },
  {
    "url": "assets/js/88.29a4f297.js",
    "revision": "9ce5ddc607714b52de8016f05d2d5a61"
  },
  {
    "url": "assets/js/89.097b308c.js",
    "revision": "dab388be111d256ffe064463d1217c45"
  },
  {
    "url": "assets/js/9.0fe75565.js",
    "revision": "67de1df71508c4beca5d94f8c63a8d82"
  },
  {
    "url": "assets/js/90.4a1406b6.js",
    "revision": "776f4fe8b43f666f12a0229bf1f3703e"
  },
  {
    "url": "assets/js/91.dd00408d.js",
    "revision": "ad1544f5acad1467636587e8e5c19747"
  },
  {
    "url": "assets/js/92.c029c24e.js",
    "revision": "201366ff4cdfcb56ae85229b912ac31b"
  },
  {
    "url": "assets/js/93.da211b2f.js",
    "revision": "b330eb153e836c852aff2c7b9605f2ed"
  },
  {
    "url": "assets/js/94.843b6d29.js",
    "revision": "815107915d4aaacf402219c8fdd08115"
  },
  {
    "url": "assets/js/95.687e347a.js",
    "revision": "da742b7fca3bd809018c302387879684"
  },
  {
    "url": "assets/js/96.c8aec778.js",
    "revision": "d730d191aec72b9eb6a23ce624fb5c65"
  },
  {
    "url": "assets/js/97.b2fdf3b5.js",
    "revision": "e2663a71dfdf9c2cc19b433d67fd25c8"
  },
  {
    "url": "assets/js/98.51aee7d9.js",
    "revision": "e7c3dcf88824662e8a311cd8558fbda2"
  },
  {
    "url": "assets/js/99.3090dd29.js",
    "revision": "bb06780c3fd55ae7403d0cac6638dc7d"
  },
  {
    "url": "assets/js/app.faa00889.js",
    "revision": "e475e5e0e0799c6c79de851705a1b47a"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "f5d0d2a08ea802210bcce3874c980418"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "2633f20281b8cfc87f28855827ea7432"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "ea26279c7dd08479e14ac9e6db5cfcd5"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "29f1f6a710847ea22b7bd9df3309ae8a"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "308b7181be62916bdbf227cf6f18964a"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "e3831e54550d1ced54475f29b423d606"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "ffdef39ff9d6b42b168fd94963f6f4f3"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "2a38968a1734b68fd78fd991f739e647"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "d38e10ee730089436fe9a8a99bb01955"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "327787de0d3a8782be01a87fc2dc8d75"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "610e88ceab7f70b0d6023936393fc062"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "431547e5ef614c7acdb03426e57504b2"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "812263202a7f80458e7d1ac69c83a0fe"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "a7e0385282e11d4e0647577a0e41f930"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "f472b95b40cae1edc9c3421ad4b730b9"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "9d925f5da89ea268f0ebf83670027b02"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "97c94a7f15474d8c8b6ab7c87f4b1c8e"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "6e87919191e7a270f902b4f8db9bdb48"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "32b689a58482ead9d90c22af7b5767c3"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "9656c4fad35ee1c70cf1f72c0d611ed0"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "70fd0a8892f76b36dd4d54a87349907d"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "2f48288accf598be60c1e71c79d6c513"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "b867fdf814b74d3aa2160819f7a42f3d"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "0a26f47e6e6ffa73d4086f1e68a32917"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "981eb0d2096f31f2bf89ab59e2b78c3b"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "d484058a412dbe7b09c07f5adb67b0a4"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "3062d957b296e09f00a8013a96ed51f0"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "4ea9d79c30bb0bbed644765ce7bca980"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "beac1b3ed34387319a0368673b5c0c48"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "db6ae2b4fd85b3f9f33f0d320fbaa484"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "93c46f9fac8b48af63e27a81200b15b7"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "01f137b3ddc1c1a5a88bbb0f38f1ba5a"
  },
  {
    "url": "courses/index.html",
    "revision": "2c29316597a376958732917cd9273319"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "9c99b99a5bba2057ac5ac0bef20fc6e4"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "e0890220336aab6d292fe3ec999c18e2"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "78a51a0bf1ae1bb5744708d7aedf1a25"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "9640738619d17e685571e230c723649e"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "f74f2bf1297e49aae0601d493d0e0f3f"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6e4bf6f32a45fb44d475d54034604a3b"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "45132922001d36a82bb55fc7ccdf4ff6"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "5fd54bb70bc0eca636913ad83b33e2f5"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "80c3cc37e9c93f62d806b98dad04f801"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "db518a201d9c17ceeeced7d9b0658e26"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "7b8d6f0db476c0f4a9790e4d51059ac1"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "86e8386464d0d0d1f29d29db03e45139"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "200bbbd0fb632ee55e5fdbe3df51cb91"
  },
  {
    "url": "courses/template/index.html",
    "revision": "794dff8d5525acd0d5acb3aa35270bcb"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "57bad25539e1d96d328cac2c0587e567"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "dfe9cb729e6c7602944bb8282114c1aa"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "8cb5c35c66e1517af367ebf768abc7c8"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "38635dbd0659841f3b3dc3f9e081225c"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "44c100f057ed549a58731d24b25f5b37"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "82343e0e8603641ea4aee5f9859924b3"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "f9770e0706bd414b221df2f0f25eff7b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "cfab41fe3702d26ed2004583ebca9883"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "5f7b1e57b638c153827854c4f1b175ef"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "5ee529698d94d753457fc6a2424ffbe7"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "91eae40b2b9f6b38fbfc6fca0e737912"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "0b64d6c093b8bc28382a2a6160096532"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "dd0bb255f2e2ba1456e412e17f7abab1"
  },
  {
    "url": "general/enroll.html",
    "revision": "fe89801670586efceb6384227f1bcee9"
  },
  {
    "url": "index.html",
    "revision": "75beea1bb3aa95df5b4ef9b3de916ad2"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "50417aed9d2aff05c2760c07e3e88589"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "8006d29bbfd3efb4e6864c9a2392a242"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "1db77ac95adf773ff64a6c15a1379cec"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "ffaa98a6ba8349dde7e94f85656c2d74"
  },
  {
    "url": "studyathome/about.html",
    "revision": "7f3ea5fc34a1610c67ba660c6782a6b1"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "0f542c4089d680bf02458061e5c21309"
  },
  {
    "url": "studyathome/help.html",
    "revision": "93d1439a5cffd7493b6cf332ab8a09a5"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "bebfd7262fa9c350ec1cfc2375794371"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "702f52887c055971f85a8f11187aa6f6"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "3988cdba8040fc8b0e00bec6f9a45347"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "71eed42d14121e74bd948c4f8e10e835"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "c4d7f2e6e074aedca7bb1d43d72f9206"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "e7f0178eac5bd587cd82a23b1c8ecb03"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "b4af5936891a00bcf3dad43228888db3"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "2ac73cdcab447d0629f70d7fab4a4035"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "4fa57baef82782f3c444bfadb4684ead"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "1bb1c948f64766408057e2f0cff77458"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "374d243ccda7c51ac443dc9cea2dbf00"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "f6231fcda1410fe472b79b5dd1750975"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "7da2d3d08ee8a2cefd016c77b95a1310"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "77af691d280c3d95c193036422b4d182"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "0721292def12e3c1400179f479ff297d"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "4da4ba5e7671f732076f6ceb89e2ba7a"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "37d7ad14c8da5b19ce8701651a42da84"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "579c46786e3f7aeb773175a1998afb01"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "61fcfcaa38510a4ae242d8c305541bfc"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "38cfe67756c84174e4bec1652032c35a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "113ed774a9c9cf8ab495577c66919bf3"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "54e2bbdeff2698e6885ec5a618731bfb"
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
