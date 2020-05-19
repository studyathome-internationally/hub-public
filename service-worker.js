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
    "revision": "3b9dbb73703a8a6b9ecff8bbf82fdecf"
  },
  {
    "url": "assets/css/0.styles.002664ef.css",
    "revision": "dc3c218a3f795000851c9c6cc4a50baf"
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
    "url": "assets/img/courses/VHDL1Cover.png",
    "revision": "2f4f8ee1239795b664f4cb17a641db9d"
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
    "url": "assets/js/1.e7e11648.js",
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
    "url": "assets/js/17.a5cc594b.js",
    "revision": "df6f9037db9eea65ee6cdd7f2d3b6bf4"
  },
  {
    "url": "assets/js/18.68b9521e.js",
    "revision": "40f6ac81b33c288cc748d445343ace55"
  },
  {
    "url": "assets/js/19.24defb90.js",
    "revision": "8873f0ba81e3719d192a58e038563bd8"
  },
  {
    "url": "assets/js/2.9cf477a6.js",
    "revision": "9e52f594071691b47e32e674e6be8f18"
  },
  {
    "url": "assets/js/20.09a8d691.js",
    "revision": "939ae63533dbc9171c368e50dbe4e117"
  },
  {
    "url": "assets/js/21.e6da8f61.js",
    "revision": "936522ec2fe0f7868d3a1898fdd7290d"
  },
  {
    "url": "assets/js/22.6164eb35.js",
    "revision": "83b71ecf8ee1fd9ae0eb98cd1dc8e622"
  },
  {
    "url": "assets/js/23.7ce0ae48.js",
    "revision": "5360b9ed240e30ecff3ee83be8f6359c"
  },
  {
    "url": "assets/js/24.77c63569.js",
    "revision": "a1cb1b7a37b2b07b7cfd03b884d4dfab"
  },
  {
    "url": "assets/js/25.09429eb6.js",
    "revision": "24d9d90649cbcfb5ea6e2bfcde77691b"
  },
  {
    "url": "assets/js/26.ceea6c22.js",
    "revision": "8ee1cd795853bf22b2f433107748aeda"
  },
  {
    "url": "assets/js/27.772e7408.js",
    "revision": "5d0dddb88b482c1aaa9220082e3e9937"
  },
  {
    "url": "assets/js/28.5855ee3c.js",
    "revision": "794da8cb08eda722f5b68bdbaea3e166"
  },
  {
    "url": "assets/js/29.5328ea9c.js",
    "revision": "a12744fa079a45f4d2a82aaa7e880094"
  },
  {
    "url": "assets/js/30.11ae7418.js",
    "revision": "94d310a343fc9a8eeb7e73ff85b3fb4c"
  },
  {
    "url": "assets/js/31.4e448037.js",
    "revision": "d326c5e85eeda688f56148ab4c70a587"
  },
  {
    "url": "assets/js/32.86c52d69.js",
    "revision": "fe58059a7318b7fabd83ebb95a8fa17f"
  },
  {
    "url": "assets/js/33.e4b1721e.js",
    "revision": "c42c37294129fc180dac95143fd97e74"
  },
  {
    "url": "assets/js/34.bd5bab98.js",
    "revision": "29c8f091d64ba21b5bd480104d16ca32"
  },
  {
    "url": "assets/js/35.539ea9c6.js",
    "revision": "95c037005cea2f6bd151eb6102abcb5a"
  },
  {
    "url": "assets/js/36.333ab9b1.js",
    "revision": "3b4c1d52cd55c05450e20eeffa10413b"
  },
  {
    "url": "assets/js/37.5efaa1af.js",
    "revision": "eb96fa8d9c3f754d4525883fcfacfadf"
  },
  {
    "url": "assets/js/38.46485091.js",
    "revision": "819435f79514c1e6d4ac2bc77e711604"
  },
  {
    "url": "assets/js/39.26858994.js",
    "revision": "90c82da866b96fdf3816773f907f8a42"
  },
  {
    "url": "assets/js/4.43f43365.js",
    "revision": "de3706132891e129d083dec9262ce9c7"
  },
  {
    "url": "assets/js/40.69c3a376.js",
    "revision": "f86c48d469b931e4874d2921ef899118"
  },
  {
    "url": "assets/js/41.c2f57710.js",
    "revision": "349dcc99ce4a627efc42575fcb0b7d6c"
  },
  {
    "url": "assets/js/42.43946479.js",
    "revision": "8e4874c945caa8f9c212e5c39649f899"
  },
  {
    "url": "assets/js/43.8c4fc29e.js",
    "revision": "daa828cb0352ca4ebc93662700ac6f13"
  },
  {
    "url": "assets/js/44.31ad551f.js",
    "revision": "e39e7585689912ca1f0ba6f2166507f6"
  },
  {
    "url": "assets/js/45.e4b2a3da.js",
    "revision": "1dbc63e9c595c138b2de1fabeca9aaca"
  },
  {
    "url": "assets/js/46.4ef6a8ad.js",
    "revision": "1f8d412c561ba7aa22ddfac29625830f"
  },
  {
    "url": "assets/js/47.fe1ac9f2.js",
    "revision": "3663c02c955d85cbf63c5ae376dd7fdf"
  },
  {
    "url": "assets/js/48.bd041bc4.js",
    "revision": "e05c4bc93a9c916afa8133e62121fe0b"
  },
  {
    "url": "assets/js/49.0c6d2520.js",
    "revision": "11650b5ab842deb5aa836ffc72296433"
  },
  {
    "url": "assets/js/5.02fa3947.js",
    "revision": "1168265fbfedab5c1f94a65cef905de2"
  },
  {
    "url": "assets/js/50.796c7c78.js",
    "revision": "29f701b5215c34043b8f09a047b98ee1"
  },
  {
    "url": "assets/js/51.1d9148a5.js",
    "revision": "707bb5416a8bb9a8768a79958820bfe7"
  },
  {
    "url": "assets/js/52.c5f88e6d.js",
    "revision": "11c0ffd2ee633a15bb70486fd6f79e5a"
  },
  {
    "url": "assets/js/53.8729eb73.js",
    "revision": "576243ff33eb47f86efe0648118763b7"
  },
  {
    "url": "assets/js/54.bfbac1fe.js",
    "revision": "95de63a1da1b4288f5c1288effbfeb21"
  },
  {
    "url": "assets/js/55.6874f1b7.js",
    "revision": "180a475470afc6209f28fbda8fb60bc4"
  },
  {
    "url": "assets/js/56.bb190834.js",
    "revision": "28e656d6ab306cb47f8940b80096ac09"
  },
  {
    "url": "assets/js/57.e5486ac8.js",
    "revision": "e5e27e5014a2162dc6b1825614c1504d"
  },
  {
    "url": "assets/js/58.26c54c56.js",
    "revision": "f8fe371421af1fa508c75489621a098a"
  },
  {
    "url": "assets/js/59.1f73642c.js",
    "revision": "57dc01176b3f6cb576dadd7ba4cf6f9e"
  },
  {
    "url": "assets/js/6.dd0a8348.js",
    "revision": "ae9fd1b867573a7c9aa225df91886ac8"
  },
  {
    "url": "assets/js/60.f2df4e83.js",
    "revision": "ef9e186a6b017a3fcefe07697e8e5a1a"
  },
  {
    "url": "assets/js/61.76d9eb92.js",
    "revision": "58787f7d59be7dd17f7da749c8d2381e"
  },
  {
    "url": "assets/js/62.0f8de8a4.js",
    "revision": "1e454c17689760bffe325253817e90d8"
  },
  {
    "url": "assets/js/63.98839866.js",
    "revision": "767868121978dfb26c19a349d1658fe7"
  },
  {
    "url": "assets/js/64.04830920.js",
    "revision": "5a2e153020268db2db1d9afcb0c037a7"
  },
  {
    "url": "assets/js/65.ccf59195.js",
    "revision": "115e4a86db43badca1e1329b430190bf"
  },
  {
    "url": "assets/js/66.47f6be60.js",
    "revision": "645349787a6909cca6a1b9121e0ddebd"
  },
  {
    "url": "assets/js/67.a595fe75.js",
    "revision": "3d7735a86dee7f5848b53229adb49ce1"
  },
  {
    "url": "assets/js/68.067d5103.js",
    "revision": "13f906a6abf00de84025d7ece63f4a87"
  },
  {
    "url": "assets/js/69.3aca3806.js",
    "revision": "7727062b8a104181338534cbd629a061"
  },
  {
    "url": "assets/js/7.67507997.js",
    "revision": "23acbe4cdb173dad75e74d6ffb49f917"
  },
  {
    "url": "assets/js/70.9fec8d57.js",
    "revision": "5513c03a144a92cc3ba447ca5651dd50"
  },
  {
    "url": "assets/js/71.6770ec04.js",
    "revision": "242ab0cee7e2c0ef939b928235a56ff7"
  },
  {
    "url": "assets/js/72.b7eec909.js",
    "revision": "188f4585385b0375ecd162fa869c6068"
  },
  {
    "url": "assets/js/73.beae6ac9.js",
    "revision": "5779f04cd8a623ed754006f648150dc8"
  },
  {
    "url": "assets/js/74.a099c5c7.js",
    "revision": "a2964b3a1dfa19272859fed7678d241f"
  },
  {
    "url": "assets/js/75.8a561d2f.js",
    "revision": "97a806e22a550f42ed7f3723d710f137"
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
    "url": "assets/js/8.6d79bc96.js",
    "revision": "5294717116380bfdae01d364aa3b92f2"
  },
  {
    "url": "assets/js/9.bd246e99.js",
    "revision": "14d8e2b90e96456a64080198189d72fe"
  },
  {
    "url": "assets/js/app.098e9897.js",
    "revision": "05a267f195f5c8fc41ad06a722032414"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "1650579c748ec81fe170ffde8c70b3cf"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "3f561255917a13f2222919e800042f93"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "96cab89ec43d4a62d64b334081a4aafc"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "28b6703929662b98d0f597417812512b"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "a5d7b267fab0667f6cb09405ae6dfd52"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "e03ff9698465321025a89d51be696f7c"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "ac3f2d12c52185a54b7f02dc029ac0df"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "42c5c7a2c0855532f1dee48280907b1f"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "4b3bb2392faabfb8cc0ba4f560251ca3"
  },
  {
    "url": "courses/index.html",
    "revision": "ea70d8216dcd58596cf3b074c9d239bd"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "bedb7ca594b0d512079349496c4908b6"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "71ae2283cf469adfd432596817329802"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "b8e7d3a0c5ae375be6f8ecc9c23290aa"
  },
  {
    "url": "courses/template/index.html",
    "revision": "44408b6235d76634222228664556cd17"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "9ef3d9beb1e14ec14038c33f7b38c2e0"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "c4268e99929da2bf6ab35fc2775d195d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "0dd26e734d33eb19a311d926bb0913fa"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "c44cef9280c23fcd0185ed9eca212bb7"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "3da2a0987023a93ca68a23ea76eb8ac3"
  },
  {
    "url": "index.html",
    "revision": "135d9c4f1d47a5d9f5ec7af5d115adb1"
  },
  {
    "url": "studyathome/about.html",
    "revision": "80e5008ff5a625a36b59747f665e5b6c"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "9a2ef14d22aa83e17ebb56488e183a04"
  },
  {
    "url": "studyathome/help.html",
    "revision": "147b6b471b18fd70ac8f6d86bb6df091"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "e013053af1d07eb254f78bf7ece675e6"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "48da68e1ddc7243d40b288c5703d0f7e"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "a98eb7d5f4c3860e50297b2c393924e8"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "f924e4e6ae61d23f1a035089575c3449"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "a7829916e77b4db18f676ed3eef9f6a0"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "c63f5e1ccdaebfeb4350b5f0bc1441d8"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "3b9dbb73703a8a6b9ecff8bbf82fdecf"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "b0a2dec65ccb396666d850c1fad5435e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "0b57f6ad37669baac04fc95d84ee712c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "f3da9be640e4d7ec6239f1fb1ed36a70"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "54d9492c50107861099320d1e50e3dae"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "2a46ccd17cd7ffa3dbd1ec375aa3e21f"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "80a8331cea969c8b3de99df0831af7ef"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "c3fd21194e1ff881cb2cff83fc627042"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "63c1128fbc1d5ab1d60018ce8ec57831"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "ce76a67ddd6caa3749be42a544c76df5"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "3c773f2e674becddd142d3ded80a6901"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "ffba05fca4a6d4a82a3ecd90ec50c2cf"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "cf4af836c5a32a0007c126733b18a024"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "be76fa347a72efb78320d3b96c955a17"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "9fb33bb5dbf0a231d469c74adacfc63e"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "3b9dbb73703a8a6b9ecff8bbf82fdecf"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "d777336639466e651c1c11cd9857d0eb"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "c85323a54c1e7015e666761355e21ad0"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "41f9e0945895b560f7a35b78a81f11c8"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "a34a93a0801cb16ae50bede0f35a440a"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "21264da04494c141a7b00fda26e1e2d3"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "49874f551378c39bfe35fa1fbe97cd37"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "0fdc443d63cb22daea99a41a2138c249"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "f8256bca9f3fa633a962914d6e5c57f9"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "12b27b001f5aaff04a159947aca7cb61"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "9a945b0612f6c68298b5c95495610656"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "156739a3dfe73e16fe2cee4957c13217"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "5379075cf7cc260eb31fab9cf20b5584"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "8ca8740e06f1f4cf98c390ced1d3674b"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "994b3f698535560c884d692fbcd18f6f"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "f416b218f3122c8414cbe27cf4feaca8"
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
