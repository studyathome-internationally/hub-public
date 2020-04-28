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
    "revision": "9358c9b181428a544e9e64efcced73b9"
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
    "url": "assets/js/100.dc3a84ac.js",
    "revision": "7994d103171f202c82b5b5b814137ce9"
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
    "url": "assets/js/13.b7490359.js",
    "revision": "d1ac42761de0b8eae080675b843b6b5e"
  },
  {
    "url": "assets/js/14.97569fb5.js",
    "revision": "56810be08007f0d7f2ad3ec4d6be0c1b"
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
    "url": "assets/js/18.344808c5.js",
    "revision": "3145a41e391b446612dd78094e918b8b"
  },
  {
    "url": "assets/js/19.960bb81a.js",
    "revision": "298bf0dfec0c10ba95832ca3e740a0d5"
  },
  {
    "url": "assets/js/2.5a523eda.js",
    "revision": "4019b198fa0461c760a8e0b2829ac02d"
  },
  {
    "url": "assets/js/20.2b345a3f.js",
    "revision": "c05cee292cb3f35705d2555b000b3f29"
  },
  {
    "url": "assets/js/21.47926d63.js",
    "revision": "b81e2b87f051d87e4bd5bf79280fe460"
  },
  {
    "url": "assets/js/22.5c68dc0c.js",
    "revision": "624d36f5b7bac94d3a9c7ea471270742"
  },
  {
    "url": "assets/js/23.f638e373.js",
    "revision": "461f26af8b4d25e78160dbbc3d56425e"
  },
  {
    "url": "assets/js/24.89f9d3d7.js",
    "revision": "a47f17c644f0585439467a1f9663ae54"
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
    "url": "assets/js/27.f5d6e1da.js",
    "revision": "54b82334edd2aa26d57b45a2cfefac1f"
  },
  {
    "url": "assets/js/28.fdb81a00.js",
    "revision": "abbb4508a9e6add453b1ae0eb921298f"
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
    "url": "assets/js/35.30e74580.js",
    "revision": "10d282659166ba5ff25d08a4fdafcd5c"
  },
  {
    "url": "assets/js/36.2e8ab337.js",
    "revision": "c9588fbd843fa1350ae7c66356586b5d"
  },
  {
    "url": "assets/js/37.b6e58535.js",
    "revision": "36a418c52d114aacbdb4f8674a50c233"
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
    "url": "assets/js/4.ab5b1d30.js",
    "revision": "ff236dde7f3212944d52e272de7ab6f1"
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
    "url": "assets/js/42.91e59cd1.js",
    "revision": "080ec47f7bc97cc4c6749e9893c8c313"
  },
  {
    "url": "assets/js/43.76a466f4.js",
    "revision": "37e48a0d04327044c31cfa710176d807"
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
    "url": "assets/js/48.e4c24d90.js",
    "revision": "020568fa8ea8719cea4516e568961215"
  },
  {
    "url": "assets/js/49.4b1b554f.js",
    "revision": "24f717c234950b5d1366c45a5d55048d"
  },
  {
    "url": "assets/js/5.5df5b523.js",
    "revision": "fb129f6676832ff0fb049917ffc46ff0"
  },
  {
    "url": "assets/js/50.d7c8e46e.js",
    "revision": "99e30ea345148c9ae9697b20278e68a0"
  },
  {
    "url": "assets/js/51.666bea75.js",
    "revision": "875297ebd8160b72895b59eb9721bcbd"
  },
  {
    "url": "assets/js/52.2f5cafe2.js",
    "revision": "fc52d5a6f5c93756ecce95ade70cfba2"
  },
  {
    "url": "assets/js/53.a24ab4e3.js",
    "revision": "db15e69ba965e0501ca9598957d7bf2d"
  },
  {
    "url": "assets/js/54.020fada9.js",
    "revision": "8ab65a5c86d2061cfb9abbffc92fd8d7"
  },
  {
    "url": "assets/js/55.0a6fff08.js",
    "revision": "8ba2c8735d5f1f5cf49fb580281f194f"
  },
  {
    "url": "assets/js/56.c07299a5.js",
    "revision": "301b04724ba64390fb272fbf19439f7e"
  },
  {
    "url": "assets/js/57.5ce2eb51.js",
    "revision": "5ea2a32ecb41039b5f32a07f54d2d622"
  },
  {
    "url": "assets/js/58.b336fc90.js",
    "revision": "921de17d9484de35d854411d8caf85d7"
  },
  {
    "url": "assets/js/59.32a1c0b5.js",
    "revision": "c04ed641e799d4732ebdfe7032dc7111"
  },
  {
    "url": "assets/js/6.1baef38f.js",
    "revision": "1c17a0ed599cfc4c913f4bdc81d13cbb"
  },
  {
    "url": "assets/js/60.a1ea96b7.js",
    "revision": "34673755c2f437778a473cea0dcfed46"
  },
  {
    "url": "assets/js/61.0c301019.js",
    "revision": "b2e0610bc1ac0f1a8cf69bb5ed61559a"
  },
  {
    "url": "assets/js/62.843f0006.js",
    "revision": "ab6554c302ed294af2f5d5f95989be0a"
  },
  {
    "url": "assets/js/63.ced35f96.js",
    "revision": "69250b1322d389c695a01960c3110d86"
  },
  {
    "url": "assets/js/64.30cc51b8.js",
    "revision": "8c2384865440cc3d32afde5f62ff6a54"
  },
  {
    "url": "assets/js/65.6bc8a56d.js",
    "revision": "92328699d7a72a17a0a1c6383440be83"
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
    "url": "assets/js/70.99603ebf.js",
    "revision": "aa766cb1d28dd4cbfd5fd4f850fd6176"
  },
  {
    "url": "assets/js/71.ede1ab47.js",
    "revision": "431cc2ef3d189597e1afd9a16283e595"
  },
  {
    "url": "assets/js/72.bb62c77f.js",
    "revision": "9e73f5f55690599a4dacaca15e5ef0bf"
  },
  {
    "url": "assets/js/73.74006def.js",
    "revision": "f01faca8305e1c36fb32333755bf8a8b"
  },
  {
    "url": "assets/js/74.120ecf18.js",
    "revision": "67287b840d4d6d00ca6fca039190c91e"
  },
  {
    "url": "assets/js/75.49be0367.js",
    "revision": "0230aa82a86498bac2106efd056e4047"
  },
  {
    "url": "assets/js/76.620e8508.js",
    "revision": "a70ff58eb9cc7ee71f3709e66a971666"
  },
  {
    "url": "assets/js/77.b12379f8.js",
    "revision": "f41cec23cef6da19a5ae33d6d14d888b"
  },
  {
    "url": "assets/js/78.32de2b66.js",
    "revision": "8bf2e4b384f74db78bf5dcd751bf2156"
  },
  {
    "url": "assets/js/79.2420e27d.js",
    "revision": "ed37d9f540e72c41dcf2fdae46a023b8"
  },
  {
    "url": "assets/js/8.6d5e6ed7.js",
    "revision": "0b8884007b010449e2baf4c331072516"
  },
  {
    "url": "assets/js/80.0aab490c.js",
    "revision": "752830715f7715438eed531ec475f22b"
  },
  {
    "url": "assets/js/81.a00acad1.js",
    "revision": "5fb3707dd21b1b67c684e81f22e8f9a5"
  },
  {
    "url": "assets/js/82.a0235e7a.js",
    "revision": "924f52d2be43302ec99d938ea9baac6c"
  },
  {
    "url": "assets/js/83.7b145c5c.js",
    "revision": "ae01e85a332965d4e51d38ee272e21e8"
  },
  {
    "url": "assets/js/84.a95a3086.js",
    "revision": "687f2a76c02c3744fb37f17f70379f56"
  },
  {
    "url": "assets/js/85.3aecbc98.js",
    "revision": "fdbc4cc6b09d2062417751462162b2af"
  },
  {
    "url": "assets/js/86.86bbecec.js",
    "revision": "ce33313757c0b9c03a3551b6c9d69c1c"
  },
  {
    "url": "assets/js/87.131e8971.js",
    "revision": "8283f56a6fc0304ffabab5e06da713ba"
  },
  {
    "url": "assets/js/88.3dfd56fe.js",
    "revision": "00cdb99de7c36aa3a3c8971ec46ddfbb"
  },
  {
    "url": "assets/js/89.f3dadf78.js",
    "revision": "a7704c04f7aa3ebf254a8b3514b0b083"
  },
  {
    "url": "assets/js/9.0fe75565.js",
    "revision": "67de1df71508c4beca5d94f8c63a8d82"
  },
  {
    "url": "assets/js/90.c121c237.js",
    "revision": "1fb79adb22bc4957f0be65acb6eb3b92"
  },
  {
    "url": "assets/js/91.a75d381c.js",
    "revision": "cba1e289ccd323ec75320eef2942f40b"
  },
  {
    "url": "assets/js/92.6a85c1f3.js",
    "revision": "9ff0ce27c0b8cd1b5a46a3c961112d5a"
  },
  {
    "url": "assets/js/93.da211b2f.js",
    "revision": "b330eb153e836c852aff2c7b9605f2ed"
  },
  {
    "url": "assets/js/94.d34f895e.js",
    "revision": "3ba18bba2de533a3d61b1cc99598c231"
  },
  {
    "url": "assets/js/95.e27b3069.js",
    "revision": "4274cc68dc81e7e77b6226114bce6d20"
  },
  {
    "url": "assets/js/96.dfbfc371.js",
    "revision": "2acc987aa43c3076a728e36ea267dc6d"
  },
  {
    "url": "assets/js/97.2d22674c.js",
    "revision": "7cf1192d814c632e837ff432ea939c9d"
  },
  {
    "url": "assets/js/98.35b47c3c.js",
    "revision": "74ff9dbfa83e1dcabcf250548e6cb8ca"
  },
  {
    "url": "assets/js/99.097fd3fd.js",
    "revision": "6366be97bd131876c4def716c1e5e06f"
  },
  {
    "url": "assets/js/app.abcc8664.js",
    "revision": "e246fc7a18a878f7754faddcda420717"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "6fe0bba1aa3cf2f1bc7cb74431730bb7"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "812515f619a4e6fb430c4f5615625cf3"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "a7c227531144c716f545778bc2219829"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "a1eab9638e420d1c9dfb2a099c781dbd"
  },
  {
    "url": "courses/assistive-technologies-basics/assessment.html",
    "revision": "fe7a706948a85db3814bf5719c900a16"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "754027025762aee639fb1d84daead533"
  },
  {
    "url": "courses/assistive-technologies-basics/overview.html",
    "revision": "cab0ea4c8111af487ed4c9177ed64d77"
  },
  {
    "url": "courses/assistive-technologies-basics/requirements.html",
    "revision": "a4eec151fc2b379e758dbec9285b1d9c"
  },
  {
    "url": "courses/assistive-technologies-hands-on/assessment.html",
    "revision": "f1cb5e69e57edc0400dd8ae2822b493d"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "5dd1b40af5b7cda3b8d775db6f911d43"
  },
  {
    "url": "courses/assistive-technologies-hands-on/overview.html",
    "revision": "b1ced64eca1ceeff221e3084195f4027"
  },
  {
    "url": "courses/assistive-technologies-hands-on/requirements.html",
    "revision": "68c09bb986f2a9254bc8c4ee67316290"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "acf04040a3e4ec5476bf4289235a1128"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "3f11af0993078105d2a0531828247699"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "f4448c9356e1e6d3e05c3042be5a5ce9"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "2d04e8a5b31b53e30a004b72bd0d2b76"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "13ad8885a0b6894eacecdca6f7d0aff9"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "8e97a2c27e59019bc6d67b2ea310b960"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "6ee83e7e4bc7a2ed775d73f57be29895"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "14a9180fae6905362d0b87208ef2022f"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "3ce46b1e84212d7981812ddc93dc7825"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "8399f29b395236c00d4b77605ddac862"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "e1b289054b837452ee703e1a79ef75f4"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "ff39e7e5e8b07055cf99d6ed26915b46"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "76b896773e0d64915dbab20b3ae2c3a9"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5bc681801c413852f8df3555bed2e460"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "99459967c810e22c8bc321b3d30713f5"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "a6773baee48ac4cdc0a99060bf958531"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "7742f6904a3106bc75a221910b0d241e"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "5256d274e1cc707fd644e699577202cf"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "41d42473ba91ca1070d3d17da7cfa4f0"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "4cc17818e05fc78b57ac46585477e662"
  },
  {
    "url": "courses/index.html",
    "revision": "2927197faa57d067731084b792b1c7b4"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "418e7bb664d4fa26da2fbebcaedb4a5a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "62607857cb4013e67929a2e6b0c55432"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "0b413c599a05fcfd40af0c10bb094413"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "1f12420982963b998ab3d834634411e5"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "e927bd4b17bd6f65db9deb7a3d5cc55d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "5618cf8780db63943f41abebe5d7ae15"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "3ebc227346021209788e275df9af8336"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "14a400a6861cdb15223a968ab2295a96"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "7c464ba2c2f8c34d520ae55dadedee95"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "5448204666c4c463a65e96a0c46d49e9"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "8a8cca2bd7ecdbf307a3a7faa311f793"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "369756ed6cba4f62e63abb4e8cbb8163"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "6837447634f19529ecf59f40cf9edd0c"
  },
  {
    "url": "courses/template/index.html",
    "revision": "86c6838dd71d14f1b78b0967a27cba8b"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "31678da0e9c617b61c9d2aebf380cf0f"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "5cee13063d04d0f31e458a0f8370f768"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "d30d46f780bfe66eee5db9700c57a66b"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d0426ec6952bb8c38ed202d56d26a7ad"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "bac3999ba2c8c451718a3889f4fdad9d"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "7bc4c48a91c65f5c8e6e445556f10eae"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "5de7312565cff5842d1a47f4a994862b"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "9c03f724619081837633582c06e01497"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "79f37dfb70ac920ed8239c0cee4f2a75"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "da14eccdcd53183ca4d237ba62aba500"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "b7c8cf7139121f0214b2284303e90bac"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "366d1a09d0986c5077039cda45d15dda"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "9adf7f69d128754fa20bf3958307740d"
  },
  {
    "url": "general/enroll.html",
    "revision": "f2d10b59c2d643476bca980f94b42737"
  },
  {
    "url": "index.html",
    "revision": "b1c4c07530bb5b501791e580196b4df7"
  },
  {
    "url": "lecturer/uastw/alija-sabic.html",
    "revision": "0b06213e1fb7734fe26c082b9846e4cc"
  },
  {
    "url": "lecturer/uastw/andreas-puhm.html",
    "revision": "f395f4cc408989a5a0f008c38ad277b6"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "c76f2543b23bc06ddc4d454afdd03c49"
  },
  {
    "url": "lecturer/wit/brendan-jackman.html",
    "revision": "80bf4b464de08ec2418c359452935d57"
  },
  {
    "url": "studyathome/about.html",
    "revision": "c4ec6945d1fa135bbf4dc4c14da26d7c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "779c5f11ba9c82255ec18ee92bc78b9e"
  },
  {
    "url": "studyathome/help.html",
    "revision": "cce1d1e57bc6255ed18aa8276541270f"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "e52191155d92ccc73716a4906d13b1f6"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "8f764bc480398d30437aac1c9849d7d0"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "9e16d318b42469f7b5afa1add8df6b64"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "b8b4b6e9102ef9c0392ff7a73430418a"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "67be392f8e4d6cd8a4060cfe4efffb89"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "2ba36ee62158ca0a26e4f5c72b592206"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "4f0b7693aaa4f2345780a2fba2901158"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "99b0dfba797324c733a533c4a7d82a7c"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "b43129dd0c017401955e7af01679cb8e"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "ad9df8969f1811b9bf778c1ad069a14a"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "0e0cf480e13fdc06a8ca36f3bb99e3d9"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "6f3d818a001d2f9342aa4fcf7aebd59c"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "990c10e4ba5500145a8b6bcf566bb89c"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "8a2eb92351a22d3ecc0380b3372c220b"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "10ea0bc0284ded04382ad6e6fe5510a5"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "147f48cb20b536d5b691f86f086cd3cc"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "634558964549b1e0175de47aa1093c2d"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "144cd7a6bd5a385429970f52b7115620"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "c3a7c1cd86ffa8e258f264f9e430d832"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "4977e0904a265ad26c775443c970e068"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "354c89b0ac4cccbb86ea975f1b378872"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "cf0f97243d9dd9a14f7da44a4e2fe9f5"
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
