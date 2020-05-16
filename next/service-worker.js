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
    "revision": "888b70b53d092358a66efe4ea69acc08"
  },
  {
    "url": "assets/css/0.styles.222bde73.css",
    "revision": "4ed279c4690d822bcb8b20e03079354b"
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
    "url": "assets/fonts/fa-brands-400.13685372.ttf",
    "revision": "13685372945d816a2b474fc082fd9aaa"
  },
  {
    "url": "assets/fonts/fa-brands-400.a06da7f0.woff2",
    "revision": "a06da7f0950f9dd366fc9db9d56d618a"
  },
  {
    "url": "assets/fonts/fa-brands-400.c1868c95.eot",
    "revision": "c1868c9545d2de1cf8488f1dadd8c9d0"
  },
  {
    "url": "assets/fonts/fa-brands-400.ec3cfdde.woff",
    "revision": "ec3cfddedb8bebd2d7a3fdf511f7c1cc"
  },
  {
    "url": "assets/fonts/fa-regular-400.261d666b.eot",
    "revision": "261d666b0147c6c5cda07265f98b8f8c"
  },
  {
    "url": "assets/fonts/fa-regular-400.c20b5b73.woff2",
    "revision": "c20b5b7362d8d7bb7eddf94344ace33e"
  },
  {
    "url": "assets/fonts/fa-regular-400.db78b935.ttf",
    "revision": "db78b9359171f24936b16d84f63af378"
  },
  {
    "url": "assets/fonts/fa-regular-400.f89ea91e.woff",
    "revision": "f89ea91ecd1ca2db7e09baa2c4b156d1"
  },
  {
    "url": "assets/fonts/fa-solid-900.1ab236ed.ttf",
    "revision": "1ab236ed440ee51810c56bd16628aef0"
  },
  {
    "url": "assets/fonts/fa-solid-900.a0369ea5.eot",
    "revision": "a0369ea57eb6d3843d6474c035111f29"
  },
  {
    "url": "assets/fonts/fa-solid-900.b15db15f.woff2",
    "revision": "b15db15f746f29ffa02638cb455b8ec0"
  },
  {
    "url": "assets/fonts/fa-solid-900.bea989e8.woff",
    "revision": "bea989e82b07e9687c26fc58a4805021"
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
    "url": "assets/img/fa-brands-400.0cb5a5c0.svg",
    "revision": "0cb5a5c0d251c109458c85c6afeffbaa"
  },
  {
    "url": "assets/img/fa-regular-400.89ffa3ab.svg",
    "revision": "89ffa3aba80d30ee0a9371b25c968bbb"
  },
  {
    "url": "assets/img/fa-solid-900.ec763292.svg",
    "revision": "ec763292e583294612f124c0b0def500"
  },
  {
    "url": "assets/img/general/portrait-placeholder.png",
    "revision": "4788048f319dc48101678d9e69f5077e"
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
    "url": "assets/img/partner/ctu/lecturer/lenka-lhotska.png",
    "revision": "0b1695ff77feec156a97c40a007ef777"
  },
  {
    "url": "assets/img/partner/ctu/lecturer/martin-macas.png",
    "revision": "8c139d8888625a4ef9898b797f92d4b9"
  },
  {
    "url": "assets/img/partner/ctu/people.jpg",
    "revision": "a65a903feaf3bf886aed682ec3c43ef5"
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
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.jpg",
    "revision": "01662dfd145e8afdf12e0916a2778791"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/martin-deinhofer.jpg",
    "revision": "50e8b7c92cc864af957eb0fd6f4212d7"
  },
  {
    "url": "assets/img/partner/uastw/uastw-at-night.jpg",
    "revision": "bb98ed986758d05549ae03342857dd73"
  },
  {
    "url": "assets/img/partner/ukim/campus.jpg",
    "revision": "3518a28279ececacc090c10fc7d29aec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/andrea-kulakov.jpg",
    "revision": "2a5323f34cf5181ba6d5837bdb10947a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-chorbev.jpg",
    "revision": "b2f324317d75d740e0bb3772e9c623c5"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivan-kitanovski.jpg",
    "revision": "b519c89fb08e7c611b0dc89b9516dc5a"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/ivica-dimitrovski.png",
    "revision": "3ae6ccfeadbcc4713537e332cd738cec"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/nevena-ackovska.jpg",
    "revision": "92f3a6441f15910cacd0a88acdcd9317"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/petre-lameski.jpg",
    "revision": "a0f4909a7ca9b9b40811a66559b4fdc4"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/sonja-gievska.jpg",
    "revision": "ff8f5610c600379402d4f0e2291446a6"
  },
  {
    "url": "assets/img/partner/ukim/lecturer/suzana-loshkovska.png",
    "revision": "431ecce02384434025a3c717143c5da6"
  },
  {
    "url": "assets/img/partner/ukim/people.png",
    "revision": "d0e8b198fb189c285b5376af4b52719b"
  },
  {
    "url": "assets/img/partner/wit/lecturer/brendan-jackman.png",
    "revision": "c0469cbd2ffe4e0fe85fb46c04d8d4d0"
  },
  {
    "url": "assets/img/partner/wit/lecturer/frank-walsh.png",
    "revision": "aaacba8bf03192e709beeb02a1ad6d6b"
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
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.cf646ffc.js",
    "revision": "c5ae57d1bd3019eeb258038d1f4a9a42"
  },
  {
    "url": "assets/js/10.7a5a634c.js",
    "revision": "e63658a6d1e357f42eda2d3b9c869885"
  },
  {
    "url": "assets/js/11.427c8c4a.js",
    "revision": "beeddb0c38d38b7e2f982205a6ea1aed"
  },
  {
    "url": "assets/js/12.5c32a8e8.js",
    "revision": "2c41910d1785b7139c5c5b505e9e5124"
  },
  {
    "url": "assets/js/13.705be5cc.js",
    "revision": "8dcff317d0487c2a700ed8971745bb0a"
  },
  {
    "url": "assets/js/14.0becf6a1.js",
    "revision": "1bcef22533ce22d0d69224c05193e175"
  },
  {
    "url": "assets/js/15.39a7a561.js",
    "revision": "d22ec5b6e5f705bc667546de46b499d8"
  },
  {
    "url": "assets/js/16.50bb10c4.js",
    "revision": "c4904d331dc62f8e3c65bd84ecf67147"
  },
  {
    "url": "assets/js/17.0084176d.js",
    "revision": "87fdb4a60924f301a51e0733d975ca91"
  },
  {
    "url": "assets/js/18.3b21e1be.js",
    "revision": "6dd2a6788c9330c8a49ceb06af09a931"
  },
  {
    "url": "assets/js/19.13644812.js",
    "revision": "bc3c4731e0dd785104342dca2e030914"
  },
  {
    "url": "assets/js/2.9cf477a6.js",
    "revision": "9e52f594071691b47e32e674e6be8f18"
  },
  {
    "url": "assets/js/20.650fdf06.js",
    "revision": "0c01836f6e4fdbd54368167b8e8ba12a"
  },
  {
    "url": "assets/js/21.340ace30.js",
    "revision": "fe9cfef81d342657349473b6744ecc85"
  },
  {
    "url": "assets/js/22.6164eb35.js",
    "revision": "83b71ecf8ee1fd9ae0eb98cd1dc8e622"
  },
  {
    "url": "assets/js/23.61ac218a.js",
    "revision": "37ff8b61dd8b80ec41c1fada13415edb"
  },
  {
    "url": "assets/js/24.7cea0fa8.js",
    "revision": "09525e9c625f684a46859471049a8704"
  },
  {
    "url": "assets/js/25.67eb257f.js",
    "revision": "83890774991fe62ba0f2e9177f93a0c5"
  },
  {
    "url": "assets/js/26.ceea6c22.js",
    "revision": "8ee1cd795853bf22b2f433107748aeda"
  },
  {
    "url": "assets/js/27.127c67af.js",
    "revision": "a60b74efb8596847a55cd696ef322d9f"
  },
  {
    "url": "assets/js/28.279dccd1.js",
    "revision": "8b9204b083a9d467f2aa9d3fed4d974f"
  },
  {
    "url": "assets/js/29.b654969e.js",
    "revision": "f520f13cc71261b5a20b660d6506c953"
  },
  {
    "url": "assets/js/30.b2912e9c.js",
    "revision": "ce958919888e4c3b98346a721f1739aa"
  },
  {
    "url": "assets/js/31.28689b83.js",
    "revision": "9f0a9f3415c9fe0859120c7dd8e1fcc9"
  },
  {
    "url": "assets/js/32.e3d6e86d.js",
    "revision": "8d478bf7cdf36d1a867661aa0cc65bac"
  },
  {
    "url": "assets/js/33.e4b1721e.js",
    "revision": "c42c37294129fc180dac95143fd97e74"
  },
  {
    "url": "assets/js/34.9a312f58.js",
    "revision": "d63d70a234c98abf03369be2fe741f21"
  },
  {
    "url": "assets/js/35.cbfa9ae0.js",
    "revision": "06fc473eb8893628cc3997de9845293c"
  },
  {
    "url": "assets/js/36.bd4e297a.js",
    "revision": "00556e515a2c72a7e35ccda9bd9e0119"
  },
  {
    "url": "assets/js/37.35780e87.js",
    "revision": "d353962cd0022d1cff0f30472d3a04d8"
  },
  {
    "url": "assets/js/38.13b086fa.js",
    "revision": "3f93864158cf3e1ab4a347db40ea340d"
  },
  {
    "url": "assets/js/39.06d6111a.js",
    "revision": "b5fdd36c8c77559fca1337038edbe621"
  },
  {
    "url": "assets/js/4.f0738556.js",
    "revision": "de3706132891e129d083dec9262ce9c7"
  },
  {
    "url": "assets/js/40.037b6407.js",
    "revision": "c812b207d25cda0e89c16941bc1c674d"
  },
  {
    "url": "assets/js/41.03a64d65.js",
    "revision": "2b44b572da6b928a3c2dcf06830dc282"
  },
  {
    "url": "assets/js/42.1e038b6e.js",
    "revision": "89aabcce5370fef9f310e8c2897c0cdf"
  },
  {
    "url": "assets/js/43.f8b64b11.js",
    "revision": "0db5a8d1b6071c043e19067f46aba0f5"
  },
  {
    "url": "assets/js/44.5980cea7.js",
    "revision": "0132046e90c85717d3ba6cb0295784b3"
  },
  {
    "url": "assets/js/45.09971f0d.js",
    "revision": "1b13624c6efe4c1c7edd78818568efe1"
  },
  {
    "url": "assets/js/46.28ae138e.js",
    "revision": "6ba52e422cafa42a268e5aa2d62641ed"
  },
  {
    "url": "assets/js/47.e86b59ad.js",
    "revision": "d3daa75a5a745039c4d0a7e512fc8b24"
  },
  {
    "url": "assets/js/48.1cdffb8b.js",
    "revision": "07adca31877c816c4848437bcee121d2"
  },
  {
    "url": "assets/js/49.c34c5fd8.js",
    "revision": "0f0166ada575a8d60a1ca9965a12b1c3"
  },
  {
    "url": "assets/js/5.02fa3947.js",
    "revision": "1168265fbfedab5c1f94a65cef905de2"
  },
  {
    "url": "assets/js/50.99b229f2.js",
    "revision": "ed9576ce8bff167a7919a1362a31767f"
  },
  {
    "url": "assets/js/51.8f0d6231.js",
    "revision": "1bb02d303464bd5a2b75e849f48f9164"
  },
  {
    "url": "assets/js/52.b6475714.js",
    "revision": "77f808ca47fdde2995197f0a33d21fd5"
  },
  {
    "url": "assets/js/53.f94b009d.js",
    "revision": "93852afd6d0016279806a71a40f57be0"
  },
  {
    "url": "assets/js/54.09a7a7b1.js",
    "revision": "e08350b28c2255ad08e366c2133e95b1"
  },
  {
    "url": "assets/js/55.bd55a639.js",
    "revision": "16bdb38b70b3b8a95fb2ab0fb1d2b436"
  },
  {
    "url": "assets/js/56.b00562f7.js",
    "revision": "05ed137b82e81f5e435d7623fecac730"
  },
  {
    "url": "assets/js/57.626a7225.js",
    "revision": "469af51b503ffc9943cafcdc83a1a520"
  },
  {
    "url": "assets/js/58.7551acbc.js",
    "revision": "b0184fbfd6726fc10a2a28d3478393e1"
  },
  {
    "url": "assets/js/59.e9721cbe.js",
    "revision": "c99e3a3129b5171be3244efffb79c246"
  },
  {
    "url": "assets/js/6.dd0a8348.js",
    "revision": "ae9fd1b867573a7c9aa225df91886ac8"
  },
  {
    "url": "assets/js/60.2554be47.js",
    "revision": "dcac52e772bb86b68708435ed916ee53"
  },
  {
    "url": "assets/js/61.389add36.js",
    "revision": "b348e53992fdb9f5ae989eb533985f4f"
  },
  {
    "url": "assets/js/62.0f8de8a4.js",
    "revision": "1e454c17689760bffe325253817e90d8"
  },
  {
    "url": "assets/js/63.04c6b521.js",
    "revision": "90bf73e614280d92ef6f4570869535e0"
  },
  {
    "url": "assets/js/64.1cf43316.js",
    "revision": "88222ac9788222bc10534a7086ed1c62"
  },
  {
    "url": "assets/js/65.000589ae.js",
    "revision": "a25ef1a3c9a686579172c73ed97e2bef"
  },
  {
    "url": "assets/js/66.66b9beda.js",
    "revision": "1c626e7cd3f3d6fe05606bab92aa81c2"
  },
  {
    "url": "assets/js/67.68f5aa3f.js",
    "revision": "36bfe688962be5ccb2bdafe53bc42e0b"
  },
  {
    "url": "assets/js/68.41c8c0be.js",
    "revision": "8df28981e9969c448e0fd304d2893ef1"
  },
  {
    "url": "assets/js/69.1d563cb8.js",
    "revision": "ce861e89b2bf34a27c3b013f81bbe5b0"
  },
  {
    "url": "assets/js/7.8b3d1684.js",
    "revision": "23acbe4cdb173dad75e74d6ffb49f917"
  },
  {
    "url": "assets/js/70.401d1e73.js",
    "revision": "ec42dbb41748b19a9c581437fddcb111"
  },
  {
    "url": "assets/js/71.c0013601.js",
    "revision": "072e421e74025de8f342d928a4779735"
  },
  {
    "url": "assets/js/72.2b4b5914.js",
    "revision": "82ddf42102fef7ae8daccb38ceb6e6cd"
  },
  {
    "url": "assets/js/73.c91804c9.js",
    "revision": "9fa58478f632b263d50d3866b1b679ab"
  },
  {
    "url": "assets/js/74.8c673b51.js",
    "revision": "55a6618f4eab6e8afdbc74f4f30fb3c2"
  },
  {
    "url": "assets/js/75.e4599ec2.js",
    "revision": "7ad590fd955a04b886297a43156cc4b3"
  },
  {
    "url": "assets/js/76.1978d5b9.js",
    "revision": "7e38a79a6ee52eb7f6eb4c29a3646668"
  },
  {
    "url": "assets/js/77.e0f1e11b.js",
    "revision": "f757e96c6272619c1e8d9d5ff659061d"
  },
  {
    "url": "assets/js/78.69987440.js",
    "revision": "ff3a1411565bda5c7fb00042918a7410"
  },
  {
    "url": "assets/js/79.852ed099.js",
    "revision": "49ba530254f21afa4cbd7cc5543bdca9"
  },
  {
    "url": "assets/js/8.d5e86f51.js",
    "revision": "5294717116380bfdae01d364aa3b92f2"
  },
  {
    "url": "assets/js/9.bd246e99.js",
    "revision": "14d8e2b90e96456a64080198189d72fe"
  },
  {
    "url": "assets/js/app.f933f893.js",
    "revision": "d87b5fe5511922ba3183c9ff3659d11a"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "68fb8c8a4c144973941e2cbf68b6065e"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "902289c064ced1ab96007b0649c0c58e"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "0222f7115423b007013af20e78fef863"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "8fb37b360055b158972d6e72277c9670"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "ab1a97279129a5808fc35b1808ebb973"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "dddc2def7a2592ff45255fdf62df8f45"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "af9060a94c8056274ed429207f13b178"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "15ba8581fe25643a8a974e91640bb307"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "ed04ca44ef3ebe55f0038b91a478687c"
  },
  {
    "url": "courses/index.html",
    "revision": "c775fb8e17983a2a10c3a0df8252e791"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "46aa2900305b18990b999594ffc8ce45"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "b970f5131c0ec2abd60639df588f8205"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "81cecb4b09df7597e2b93abd248c4607"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ffac472d58dfa7961e05796ddc2c62dc"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "05ea06cc0bf6aa9b3ac82c22e5dbb758"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "13d3f89a089c8c3f1df70709b651a937"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "1572f10a4d109b7f6265ad7b96c888ab"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "3f6b371f812328b2fce0922a80bf18d4"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "2b03273bf6e9b0fafe3ed7f4d79d5c45"
  },
  {
    "url": "index.html",
    "revision": "9ade1f5f57b78a528d12cccc8d224f10"
  },
  {
    "url": "studyathome/about.html",
    "revision": "57aa6fc41c2dc21cba64e43c942dc67c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "ea698a1aaa28d155fcb1ce0c5e671985"
  },
  {
    "url": "studyathome/help.html",
    "revision": "c681a268a65d23871367a228254c3fc6"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "293d82ce4fd502508b487a05030b7326"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "888b70b53d092358a66efe4ea69acc08"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d41101519f624228ac7d221b1d6af4c7"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "e3c650ee57cd882ef3ff2ac574d14616"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "98e148959f49c98df9f77eca95ce5a2b"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "6dcac042c5f1b65ebae1e18c37e544cc"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "9a85929faa74960316763237b9f0c7c1"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "96cd49f36efa20035043ff6edcffeda6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "998187c63a5f58dd1e2659eabe73084b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "074a58df21aae46e540c727af4b43c59"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "ebf884464c6e771ce1c41d1b2e979896"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "888b70b53d092358a66efe4ea69acc08"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "c8dda3b39617c2f12f3e6c01f7ae5972"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "03902dda4c708efcc620920d6b028d0a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "418c4e537e106867fcfc47cb9e8b90df"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "367eee30460df18338e7ea5fb8319e2b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "50e9b35e3de4d37dbb903802d89ffa5f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "c0d78bcf7288682c81bc70fe15f837c2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "449e80fa2b137d93c64bc72f7bfcfdc2"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "eb5b14f92e2a73773ce9bf59b422e14f"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "7871ee2a0b140ec3b83ebe89fa1aeb4a"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "9a85929faa74960316763237b9f0c7c1"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "f32aa175d1724667a94aabc24a307dad"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "5763e9413867d8c24b1ad659cbb294db"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "acaf9c2ef6ee2c387a5e14e450ca97db"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "0b0419e7f18661b0e52b422668a0b09f"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "9aad7361abada2402b5a3e392c861062"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "cf886db053807302b755d1432b365e15"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "82cb96be5c6f3f0a50ae8073da51dfd8"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "8de33471f454a4b7e67a3cab7e88542e"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c0ef1fcad23dffc5e83805c460b83575"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "cb7bd15e4fb27af2b4aaff87278af724"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "7f9818b43584c46ca794a27257cee506"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "a4a031abecba364bd1b05861f3ed4291"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "fb10a494a2536948ff9951da6c09eb98"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "48801263eb306e380b9c091273831eb0"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "5b890459899664bd0cbd6097b28b1fb0"
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
