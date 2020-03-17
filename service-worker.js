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
    "revision": "ade9014904cc5adf940eb7d5b0691305"
  },
  {
    "url": "assets/css/0.styles.097e3777.css",
    "revision": "614ecf1abdc728f943fd9a1f3aa0100e"
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
    "url": "assets/js/1.0d827ae6.js",
    "revision": "292228c05a4aa50420e87cf4ebe4a1c3"
  },
  {
    "url": "assets/js/10.ba741f64.js",
    "revision": "253630f7b8876fe99dbd831e115d667d"
  },
  {
    "url": "assets/js/100.da33ce78.js",
    "revision": "89062b65be62cf40c5c9965e1ee0d893"
  },
  {
    "url": "assets/js/101.b4c3ed0f.js",
    "revision": "18d38a7ccb561c2e1a6645af613119e1"
  },
  {
    "url": "assets/js/11.1dc75fd0.js",
    "revision": "79f28d31c5213d107fa21f1e5048912a"
  },
  {
    "url": "assets/js/12.b1f57fd6.js",
    "revision": "9b1903d8703f4287bc7dfa1e0689982b"
  },
  {
    "url": "assets/js/13.c03608ff.js",
    "revision": "4181f01412369f00f6db9f8bf11e17a8"
  },
  {
    "url": "assets/js/14.7d156c09.js",
    "revision": "e6cc82dc79b719fc98983cd83da12d01"
  },
  {
    "url": "assets/js/15.2cfd2c0e.js",
    "revision": "ec4d5668648c201275142872dd92baf1"
  },
  {
    "url": "assets/js/16.30740248.js",
    "revision": "3b947c30298b786756910387336af45c"
  },
  {
    "url": "assets/js/17.34a70b71.js",
    "revision": "6ccefd8dcd36897f484f0c630e289973"
  },
  {
    "url": "assets/js/18.dc578c4f.js",
    "revision": "af6ce544eefeafd67bbf5dfb585cea61"
  },
  {
    "url": "assets/js/19.6b4c96fd.js",
    "revision": "8748b65925c0237138504794f6732325"
  },
  {
    "url": "assets/js/20.4f582f59.js",
    "revision": "6d3700819ea300f49189159519ba6a98"
  },
  {
    "url": "assets/js/21.4b81f3d3.js",
    "revision": "67f27a5788ef4d33020ba9ed3d43ffc7"
  },
  {
    "url": "assets/js/22.4119bf07.js",
    "revision": "724584e9f6128c427ce4a33ea524ada9"
  },
  {
    "url": "assets/js/23.d78a5871.js",
    "revision": "dee0c3e1c6371421148160ca2feba674"
  },
  {
    "url": "assets/js/24.418f9181.js",
    "revision": "538a9acf9f93a53cf73628e2411b196f"
  },
  {
    "url": "assets/js/25.66987c42.js",
    "revision": "47223d08d6d153a7de9c31168337f386"
  },
  {
    "url": "assets/js/26.a0213dee.js",
    "revision": "1e0af229acc0d9d6f51fd278b160a269"
  },
  {
    "url": "assets/js/27.66e30563.js",
    "revision": "1da68519f3fe632e17b434436e17794b"
  },
  {
    "url": "assets/js/28.b08473ea.js",
    "revision": "32de3dcf8acb14570206d17e1966b466"
  },
  {
    "url": "assets/js/29.aae1f0c3.js",
    "revision": "af7c41a8806d45c1d96b2054b3850a0f"
  },
  {
    "url": "assets/js/3.ff90e9f7.js",
    "revision": "9a03e9200bb2ab80c76926fdf8c5ef76"
  },
  {
    "url": "assets/js/30.94c469d0.js",
    "revision": "02971f43907a5abf05c2bc1790cff2fc"
  },
  {
    "url": "assets/js/31.cb30334a.js",
    "revision": "e592610b183a2ef8257f93d7179f32d9"
  },
  {
    "url": "assets/js/32.53beb6db.js",
    "revision": "e5870ae601c9e6b0b84ea4d73376c36f"
  },
  {
    "url": "assets/js/33.6b3e49a1.js",
    "revision": "aa93a9f6e02212b451211b90795a2ab0"
  },
  {
    "url": "assets/js/34.ed26a794.js",
    "revision": "8a75d5e793d6d7c2eb378baa47f8ae36"
  },
  {
    "url": "assets/js/35.b4a5ce81.js",
    "revision": "6b2d19c2fbb1e0b3e2da3e1b8f6e98c4"
  },
  {
    "url": "assets/js/36.0dc4fc06.js",
    "revision": "dc27a61208e3329e066caa74bce8d68c"
  },
  {
    "url": "assets/js/37.2a19edcc.js",
    "revision": "f576a2659df9ae7fef77544d06d1ffbb"
  },
  {
    "url": "assets/js/38.bdbef647.js",
    "revision": "aedd3fe5f6c6b657d3253f8ddfe1c2e5"
  },
  {
    "url": "assets/js/39.8a44bdf1.js",
    "revision": "ddd6f65bced9223e0f653bcac72023d3"
  },
  {
    "url": "assets/js/4.76cb1118.js",
    "revision": "436f054bec7e3b588d4c9cfceddc2dcd"
  },
  {
    "url": "assets/js/40.5122d2ab.js",
    "revision": "60f947368362a82ba0c10eb772fc7dfa"
  },
  {
    "url": "assets/js/41.4cd839e9.js",
    "revision": "db47ceb8d565bc57642f0c310df7ea3f"
  },
  {
    "url": "assets/js/42.0c95a853.js",
    "revision": "77bf13d0f80f3cae2338b5602858f0fa"
  },
  {
    "url": "assets/js/43.dbf8d7fe.js",
    "revision": "3860778e9c3a40c35509b7c161d0e437"
  },
  {
    "url": "assets/js/44.a63bdd68.js",
    "revision": "9b028233ab88726bd70e52944edc7133"
  },
  {
    "url": "assets/js/45.b1de8c49.js",
    "revision": "6104ff5d5a80d3c1ee33a6a4086e91c1"
  },
  {
    "url": "assets/js/46.8e457e28.js",
    "revision": "5364ac7363c43ac737b77569d55b163a"
  },
  {
    "url": "assets/js/47.91e11d27.js",
    "revision": "2c611b9a8be5a1db69505e9d0fbf5662"
  },
  {
    "url": "assets/js/48.136d08a1.js",
    "revision": "eed33ceb3ccae65c7408cc8d61f43fa9"
  },
  {
    "url": "assets/js/49.e52492ed.js",
    "revision": "4236c6a09c94aeef1de6ae644fdc280c"
  },
  {
    "url": "assets/js/5.f83e5ccd.js",
    "revision": "924bb0bbf744d7adb1888a33dda59740"
  },
  {
    "url": "assets/js/50.2d1376da.js",
    "revision": "552b18bfc73b68c375c84ddb2b0059f6"
  },
  {
    "url": "assets/js/51.4cc2bced.js",
    "revision": "be6197d643eff251ecac39522c316a64"
  },
  {
    "url": "assets/js/52.7ceaef4f.js",
    "revision": "ff94d8aca69417f1215414395c142aa7"
  },
  {
    "url": "assets/js/53.3d0f4970.js",
    "revision": "4dce106c6d078522db005c479472c87b"
  },
  {
    "url": "assets/js/54.2e3f8d6b.js",
    "revision": "d8822e0e54384a556bcf5396e722337a"
  },
  {
    "url": "assets/js/55.ea2250f1.js",
    "revision": "5d4674b1cde4b85431ee99aa3cd44c9e"
  },
  {
    "url": "assets/js/56.94f3149c.js",
    "revision": "6d8ddc9ef84b0a664ce4b17940d60ab1"
  },
  {
    "url": "assets/js/57.b728d780.js",
    "revision": "25bb57e8d6fbe765a4065a1d56557319"
  },
  {
    "url": "assets/js/58.f24a4e17.js",
    "revision": "4705002e1558d5adc3b898345fee9f1f"
  },
  {
    "url": "assets/js/59.d5766b9e.js",
    "revision": "aa724b0da0f0b6754e02620d900e0e89"
  },
  {
    "url": "assets/js/6.4efb94c5.js",
    "revision": "1a3e8b1b337c566ad78e42d7acdee47c"
  },
  {
    "url": "assets/js/60.0ca039fa.js",
    "revision": "c6b6a488a0b6bdb1b43ca94340cd1085"
  },
  {
    "url": "assets/js/61.9c589dbb.js",
    "revision": "7338e41f17ebbf5293d8355d828cd0c0"
  },
  {
    "url": "assets/js/62.ad4f19b5.js",
    "revision": "1a89980df791118e65e09b6870b94082"
  },
  {
    "url": "assets/js/63.f10bbe2b.js",
    "revision": "230347c3ce9b004c99bdf0a4a979da54"
  },
  {
    "url": "assets/js/64.5f626f3d.js",
    "revision": "9debc8f34700e49faab64dc057b463ef"
  },
  {
    "url": "assets/js/65.9db8e46d.js",
    "revision": "dc99355cb187666746db11d8e935a747"
  },
  {
    "url": "assets/js/66.0328b242.js",
    "revision": "f075418b675aa357fc589b50b7bb97e4"
  },
  {
    "url": "assets/js/67.30033e23.js",
    "revision": "166d77b1701838bbbe005984fde67431"
  },
  {
    "url": "assets/js/68.0d727378.js",
    "revision": "e80ebac9208542f1819a3a1a7f58961d"
  },
  {
    "url": "assets/js/69.bedccb10.js",
    "revision": "b8cd67aa938afdd192ffad5ddc90055b"
  },
  {
    "url": "assets/js/7.eec7b586.js",
    "revision": "0fbf4bcb4139de44b0dc206cdb789913"
  },
  {
    "url": "assets/js/70.bf16cc51.js",
    "revision": "4cdc7dfbc91911211cce44c8ec601508"
  },
  {
    "url": "assets/js/71.45cb1691.js",
    "revision": "c85500b9050a52b1b15b680e98350a1f"
  },
  {
    "url": "assets/js/72.9551a9ad.js",
    "revision": "92a5f4466cab468a364c8637837d7355"
  },
  {
    "url": "assets/js/73.06a0899d.js",
    "revision": "2b992a3b715595b0e0da523554155ab1"
  },
  {
    "url": "assets/js/74.fe3f4610.js",
    "revision": "4bb38a5c09d4bdfc54cc5413fd9dea26"
  },
  {
    "url": "assets/js/75.e8e13878.js",
    "revision": "1e64892e446d2ae8fbcb2ee5655e2b70"
  },
  {
    "url": "assets/js/76.f666e582.js",
    "revision": "bebeeda9a8f763edb7dd675f97874603"
  },
  {
    "url": "assets/js/77.572b352e.js",
    "revision": "e30ab73154fb4ba3787dc0226bc6b665"
  },
  {
    "url": "assets/js/78.df762433.js",
    "revision": "792bd33469d27d8f9cc66dc64ee3654d"
  },
  {
    "url": "assets/js/79.afe512bf.js",
    "revision": "64b333f3e809681ba75863e1e7934553"
  },
  {
    "url": "assets/js/8.65997bba.js",
    "revision": "c02a4075b6f99debed10e4a0f3847c9d"
  },
  {
    "url": "assets/js/80.aa8bd2f7.js",
    "revision": "b71633447e06adb8038f55d81cfa9055"
  },
  {
    "url": "assets/js/81.86e1255b.js",
    "revision": "0c2c7e96802c3b543475a2e1e9b5e917"
  },
  {
    "url": "assets/js/82.0cad6661.js",
    "revision": "2bde6c0df79b2844ade70569c8616918"
  },
  {
    "url": "assets/js/83.89f18ee7.js",
    "revision": "031eae51ba2a38a9c7ab2892552ebb72"
  },
  {
    "url": "assets/js/84.f0dac74d.js",
    "revision": "0a329fce8cd8e69cb3d18b3c9e589bf4"
  },
  {
    "url": "assets/js/85.d5cdb0cd.js",
    "revision": "524a48ad7562d8c84b776d3098618573"
  },
  {
    "url": "assets/js/86.1e8f797d.js",
    "revision": "92436fea246843adf8802b4dcbb3aff9"
  },
  {
    "url": "assets/js/87.09182f45.js",
    "revision": "39d16447a89076b8e0a3a92c3bd44b3c"
  },
  {
    "url": "assets/js/88.cd15c21f.js",
    "revision": "b7c983f13ab1cbf65fc24154a967d136"
  },
  {
    "url": "assets/js/89.0492bc45.js",
    "revision": "e80d838c4d37632f2d70ef9ba5354060"
  },
  {
    "url": "assets/js/9.6ef8f66a.js",
    "revision": "e6f987319d85e97f6b19e03c76bb4d2c"
  },
  {
    "url": "assets/js/90.29a57330.js",
    "revision": "2f2d6c616ccaff40287798e723245fdd"
  },
  {
    "url": "assets/js/91.3a4af558.js",
    "revision": "ee52a9e5ec3b0c01221cdbe31a53ec64"
  },
  {
    "url": "assets/js/92.85f91302.js",
    "revision": "0c43d2b9d6683add9ca711bbd9d6e390"
  },
  {
    "url": "assets/js/93.9faa028e.js",
    "revision": "1f59a64c060a25aa02438b39ff91f99e"
  },
  {
    "url": "assets/js/94.24d42f40.js",
    "revision": "8a13e3a09d8b0905dc9a7ead0ac648dc"
  },
  {
    "url": "assets/js/95.73314f24.js",
    "revision": "adb42252dd46c3714c9c90388fb1dff3"
  },
  {
    "url": "assets/js/96.79a2e105.js",
    "revision": "83e13f2f7517824936a9106e60bc1624"
  },
  {
    "url": "assets/js/97.100969da.js",
    "revision": "405a003a055aded695f552e153093137"
  },
  {
    "url": "assets/js/98.418960dc.js",
    "revision": "ecb215ebccc644e75ca254f23787805f"
  },
  {
    "url": "assets/js/99.ba0e458c.js",
    "revision": "a3a14ee6f6a533bb665b8bbe17044fb1"
  },
  {
    "url": "assets/js/app.c27309f1.js",
    "revision": "5648b129cd99873de3803309cb76a255"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "d1d382e23d9af09987da6c54b8503c03"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "9048c510039337adbea736b5b91c4544"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "b4a583a252a670ce8930a148b0bf40be"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "049bce60e0a82b9f5e0c7d3fc02a9931"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "2b56dee600f307d0615a5c4940f3a5fa"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "a3d940a4c77caebd25115eface4acd7d"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "b0662bfe5357149a9063725b6874356c"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "7cbe43ae273bf35199bee78c54bc9eff"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "71426d3eb6d60f73150d7bd81045d4f1"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "de50a2d39ead782c9d2d3f821cdab873"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "bb58c5e6e98bc4d990971e13a5fbe678"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "a67bb2900c6e77e6ce1c58fba8bfaec4"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "9d9a9c58dbb4cb3b69c6f3ff1e271a89"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "ce9c8cd6864b5e01f291f844fdd0c587"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "5d90573cd47d88dc7a105b9b6fa55024"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "5c1c23f5edd6bd50394d95506ba235a8"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "244de11c5193257587ce2ea563e4510e"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "22f4a6a22a811aff71a301df6073c43d"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "34b30463b065f516123b19c37744d110"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "4c90b94f8e07b671d39dbffbe75d740b"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "23ec2d5c7ecdb2529d829754b5ea64f9"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "c1f07b495485e364340d5aaf83553371"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "9d015e7e7d92b217ea597105357ab87b"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "f4c7bd1fd8c614b706ec1b11d80f085a"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "371ac2c46956227d4864ed820b5cc5fa"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "50b27c0bad7d2d7d422203a3e6c4286b"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "680350e974465b76da578e2b2c111c69"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "5adc89f3b7f9db9aa501cfc3b7f4ce4d"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "3526bbf70409c19915fb5066e02ebaf4"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "861978a920fe9d41da1d948ee306230b"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "72694bdba2f40d09e4a028f613c92ea6"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "ebb26b0f0e1749c6ae907216cf7743c0"
  },
  {
    "url": "courses/index.html",
    "revision": "e05f16925d9ef45056b7df8b189c6a11"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "f4d07cc4b88ea7443d11c26251c7989e"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "391e50ee559ce544031c73f45bd4e080"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "bd860c001f2c5ba88e787ab7a6544106"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "d98be3c907d26249b4036457899b2de5"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "f46ba27fd865a100b90a9f67ab11c8c2"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "198bde50235eb6eff13871d1b230926d"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "cadcaefc8897c98137977adbcea7f416"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "e1521655b53a01d039df84ca2e3e97a9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "f1874c267e1e8cce4f64484827f2b548"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "d4041cc7da533c4d877f765c115abfd7"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "57b6cb037e677b4fbe8b50d9bb3c70ed"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "7d94509f70030fde27692899396bde7a"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "23d61677739450fedb1d7fefed02b2a0"
  },
  {
    "url": "courses/template/index.html",
    "revision": "564765f314fbfb251ee295d0ccd56f9e"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "8068b25f500b93b020edd11019ec21af"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "17daf5ffb859d1e0c288de7236a9cf25"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "48f5c6306551e7bb8eeac4260feed7b1"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "b7a802ae7ded7ca8050359ccf9cfe14b"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "54353db88f5f467c8628be4c40df536f"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "a2a7a54423dc0336c9cdb116106348e3"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "da0bd17987f698293cfb032c4a035970"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "ef8a7c0146614dd93f1006f331b8a0fd"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "edc195692f84781b1e15801e6cadda03"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "dae1de87324a8685cd5d976d68c152cf"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "8027570d3e9302b707482fb29090e22a"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "e4d1cb531c761671bbe1c87cfd641657"
  },
  {
    "url": "general/enroll.html",
    "revision": "9cdb001231849d24b834c55294d8a0ff"
  },
  {
    "url": "index.html",
    "revision": "a67b58f07ded78b862bcd5d49d3925ed"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "929dc9550dd470cf0227d67dde39a7c8"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "3af3882ee942f78f0fc79a75308b0e7d"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "e2d7c878158e96d8feec56d59fff7123"
  },
  {
    "url": "studyathome/about.html",
    "revision": "cf3b39696b86d68300da0de5d6f078f5"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "2c6506567f51b67bb99901152ebe4fdb"
  },
  {
    "url": "studyathome/help.html",
    "revision": "b6406194aeb2ffe14d6fa5e29cb7262e"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "4882a0ff415e100840c7072e900dd56a"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "75b2816c62feb60cdbd47622b60c9ee4"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "08358da2c205cc9bbe94229118d054fa"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "7e2819b1ddb33176e7e489ce0e737529"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "02ef4bc5cf5693258d1cfb1862414fb9"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "cc3d7f31583b87f49aaef7b55f91d531"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "74d9e6f541fbde0e4cc5d3752fc10307"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "435a05a7e346cd04cbe6aef988654f66"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "0ddae013c38abf647b12e42f1cccbfb4"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "a021fb50d1bd26830c147800e6073b6f"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "23c37bb6feaf4800ecccbf268824f56e"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "def68c8213f242bc15e91e9172a5a4de"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "099e41cc13e4526deaec7c2ac6ca4400"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "0ab880c92a6b7998fdd9c2c13d48a7b2"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "bad1fc5203907de8ca4055090e2d47e5"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "8bcccdde14c81a1ecae820cdef5b2634"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "6aa12b1ec51f579b7a09bff2b5a674ff"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "a045b8b2199ea288a78b00b17d1d5063"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "4dad196709e77fbdd5ccb84f124a4a77"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "204074e3fde2b05279d8e04110f8065b"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "866df0f244e14fb68b5f386eb35fcb6f"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "011d4195cbcf615889b02c0f1c2275e3"
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
