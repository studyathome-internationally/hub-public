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
    "revision": "c055c6305c29fc0693eb8c74288bcc7a"
  },
  {
    "url": "assets/css/0.styles.305a2a41.css",
    "revision": "141644fa6adf02ea2cae4ff9b2451d57"
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
    "url": "assets/fonts/fa-brands-400.0c9f225e.woff2",
    "revision": "0c9f225e8f69c622f681cf1ed973cc3d"
  },
  {
    "url": "assets/fonts/fa-brands-400.0ce1e868.woff",
    "revision": "0ce1e868452204695c8ac1c70f693c2d"
  },
  {
    "url": "assets/fonts/fa-brands-400.d28c96ca.eot",
    "revision": "d28c96cabe5302f1b2c90275cd3f4e69"
  },
  {
    "url": "assets/fonts/fa-brands-400.dfe5aa43.ttf",
    "revision": "dfe5aa4344a2d8a29aec8d83fb3fb14e"
  },
  {
    "url": "assets/fonts/fa-regular-400.0232fe8b.eot",
    "revision": "0232fe8b09de812c88e6cc27f57a3a88"
  },
  {
    "url": "assets/fonts/fa-regular-400.398be22b.ttf",
    "revision": "398be22b2308585b84da8e858e2d7b60"
  },
  {
    "url": "assets/fonts/fa-regular-400.3cace4a0.woff",
    "revision": "3cace4a04d941b5981ba32c6ce9afae1"
  },
  {
    "url": "assets/fonts/fa-regular-400.847712aa.woff2",
    "revision": "847712aaabbeba674afdda86d31cab17"
  },
  {
    "url": "assets/fonts/fa-solid-900.00bb62bc.eot",
    "revision": "00bb62bc33034479d5e82a0fd1c5efe3"
  },
  {
    "url": "assets/fonts/fa-solid-900.260d033f.ttf",
    "revision": "260d033f79f75d670fd09d8cf7c8bf8d"
  },
  {
    "url": "assets/fonts/fa-solid-900.4bfbf7eb.woff",
    "revision": "4bfbf7eb4b19d9ff9293eb177b6d0070"
  },
  {
    "url": "assets/fonts/fa-solid-900.9ae050d1.woff2",
    "revision": "9ae050d1876ac1763eb6afe4264e6d5a"
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
    "url": "assets/img/courses/digits.jpg",
    "revision": "6c19eec6f3f28e275ae69d4fd4c15a39"
  },
  {
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/courses/mux.svg",
    "revision": "52a569a585cecdd600daedd3669107db"
  },
  {
    "url": "assets/img/courses/opendata-d_icon.svg",
    "revision": "7b1de989b4edaf490b4ba0f219096b73"
  },
  {
    "url": "assets/img/courses/opendata.svg",
    "revision": "27e4cc35563f732278b806460e2ad9af"
  },
  {
    "url": "assets/img/courses/stock-photo-ai-artificial-intelligence-concept-691438969.jpg",
    "revision": "aa2746fcf7434dd93c0ec369b1521d11"
  },
  {
    "url": "assets/img/courses/stock-photo-website-development-layout-sketch-drawing-617330408.jpg",
    "revision": "2a32a29f43a6b186507a87bf05225d83"
  },
  {
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
  },
  {
    "url": "assets/img/fa-brands-400.5d10d009.svg",
    "revision": "5d10d00980077f67990f73b1961bc46e"
  },
  {
    "url": "assets/img/fa-regular-400.d0fdc7c2.svg",
    "revision": "d0fdc7c20b0b0b1aaf27327547735fa3"
  },
  {
    "url": "assets/img/fa-solid-900.2306f642.svg",
    "revision": "2306f642b31b774ba1d8b6b784539e19"
  },
  {
    "url": "assets/img/general/portrait-placeholder.png",
    "revision": "4788048f319dc48101678d9e69f5077e"
  },
  {
    "url": "assets/img/logos/CV_MA23-orbit1_pos_web.svg",
    "revision": "9a3aa5fea8181a51c9a4480d76fb9b67"
  },
  {
    "url": "assets/img/logos/FH_Technikum_Wien_logo.svg",
    "revision": "df12fe4e70e7e86bdd139d5ab6aeee6a"
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
    "url": "assets/img/partner/uastw/lecturer/alija-sabic.png",
    "revision": "eae203609d3c3919886fc040c87b3713"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/andreas-puhm.png",
    "revision": "c84cfe30b8e2fc78f98774686d3542bc"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/christina-hochleitner.jpg",
    "revision": "bdd76d2e3f185c02c7dc6a07236dca29"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/christoph-veigl.jpg",
    "revision": "856a73506f666454dca2b3019a41fb2a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/iris-nemec.jpg",
    "revision": "5e493f4f91d5f536a902907b0f28358d"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/iris-nemec.png",
    "revision": "9b30905af195481a35cdd175a804a4b9"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/lukas-rohatsch.jpg",
    "revision": "b6b879b4fe81d13d70ffdd2c4d4cf6a6"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/martin-deinhofer.jpg",
    "revision": "f02da1cdead835cf3dfff3b38c169a1a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/michael-graf.jpg",
    "revision": "98bd0d935e43b97e63548cfe8d0f5c21"
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
    "url": "assets/img/partners.b0704e24.svg",
    "revision": "b0704e24490626da489fe50b459e3851"
  },
  {
    "url": "assets/img/raspberry-pi-3.c0dce8df.png",
    "revision": "c0dce8dff58a8c8687fb7738504d4816"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sensehat.6c49ffb3.png",
    "revision": "6c49ffb3476d90f0870b26328de81f6d"
  },
  {
    "url": "assets/img/simple-workflow-all-line-arrows-studyat-mobile.6fdf9210.svg",
    "revision": "6fdf9210987b7d13f4f04895aec17eeb"
  },
  {
    "url": "assets/img/simple-workflow-all-line-arrows-studyat.a377037b.svg",
    "revision": "a377037bbd71a298049598d8c7db81d5"
  },
  {
    "url": "assets/img/talk-1.ddfd561b.jpg",
    "revision": "ddfd561bffad36492f7865c609b363eb"
  },
  {
    "url": "assets/img/topic-5.540dffee.png",
    "revision": "540dffee86c073d270740047dbc22706"
  },
  {
    "url": "assets/img/topic-7.6dd8105a.png",
    "revision": "6dd8105a2f5760d1c8eade3894ebac40"
  },
  {
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.858e9c8a.js",
    "revision": "b0d51d4293a1f211ed84e473b4793c7d"
  },
  {
    "url": "assets/js/10.fbd5e0da.js",
    "revision": "5b0fc8ff1a3339274c095b1fc0bcc62f"
  },
  {
    "url": "assets/js/11.993df8d1.js",
    "revision": "11a454a9e718c823d987cfcc11480201"
  },
  {
    "url": "assets/js/12.928fcc28.js",
    "revision": "57488c527bb0a867ce3852d275e736f9"
  },
  {
    "url": "assets/js/13.99f6c4f0.js",
    "revision": "4b0c5a20690df26d2ed2902c3f5e403c"
  },
  {
    "url": "assets/js/14.61c9e25b.js",
    "revision": "a2ad136e32fc2b2928a3cd06e2601464"
  },
  {
    "url": "assets/js/15.0482a291.js",
    "revision": "4d800d7e8b42bbae842d8167f276f112"
  },
  {
    "url": "assets/js/16.ae72b41b.js",
    "revision": "13177135aef260fa30affd4dc43497bd"
  },
  {
    "url": "assets/js/17.710ef8a0.js",
    "revision": "42b836cb91928fe4319a48894d16576a"
  },
  {
    "url": "assets/js/18.5f9648b0.js",
    "revision": "e61bd666ad00eadf5d6541bc715383e9"
  },
  {
    "url": "assets/js/19.229df0bc.js",
    "revision": "53b886b0bc80b9974bc0b6c3d0d1034b"
  },
  {
    "url": "assets/js/2.b69b3790.js",
    "revision": "07ed8024ba1d9e24ba8b07566053a629"
  },
  {
    "url": "assets/js/20.5a0ee99d.js",
    "revision": "50b5de73b3ea639e384e0ce4e0c03e4e"
  },
  {
    "url": "assets/js/21.f8945cbe.js",
    "revision": "c56b2acd3172d6c2f6cf718df58f8e3f"
  },
  {
    "url": "assets/js/22.85836017.js",
    "revision": "b106c797aa0ae78dfe7e7d1ccd453645"
  },
  {
    "url": "assets/js/23.1c65b00e.js",
    "revision": "e646d2125a141f4d0d57b74ea3e85547"
  },
  {
    "url": "assets/js/24.fcb50a27.js",
    "revision": "dc286d3670142efc3347a458f3812d04"
  },
  {
    "url": "assets/js/25.83320278.js",
    "revision": "126127f0323fece3ca48b6f53975176b"
  },
  {
    "url": "assets/js/26.49f9238c.js",
    "revision": "db02398d2a491454ceab489de07c6617"
  },
  {
    "url": "assets/js/27.8e472cec.js",
    "revision": "65324b273d653fdafe903a50933c373c"
  },
  {
    "url": "assets/js/28.994a6e37.js",
    "revision": "2d2696bffcc7f0f622d9c9d1bc49b6af"
  },
  {
    "url": "assets/js/29.4f9e5035.js",
    "revision": "f3b341b47433092c23df368311a03595"
  },
  {
    "url": "assets/js/30.825e31b3.js",
    "revision": "2d16385bd7ac5dad1fe2aecaba8ee48c"
  },
  {
    "url": "assets/js/31.cb7da769.js",
    "revision": "17196345b8a0da5ba4f46d06add182c3"
  },
  {
    "url": "assets/js/32.aae43679.js",
    "revision": "e948ced16856b54242aef9b975a4fbd9"
  },
  {
    "url": "assets/js/33.0c2a0f2a.js",
    "revision": "4a424cde0caa7d42f33de58086836b59"
  },
  {
    "url": "assets/js/34.0c0fdd77.js",
    "revision": "d8e913f9a3dfbe266ed555a7fc455fe0"
  },
  {
    "url": "assets/js/35.0e99ce22.js",
    "revision": "e51f61ec9b37cfd2c0be803739ec7b11"
  },
  {
    "url": "assets/js/36.14aa9b51.js",
    "revision": "b83d8b2c3bae2402396a1d07372aa154"
  },
  {
    "url": "assets/js/37.db482a0d.js",
    "revision": "60c2872b65519f8ebda50aab1fe5aea1"
  },
  {
    "url": "assets/js/38.e1c9fb6e.js",
    "revision": "a801f022c7e5840958eb6f2daf3bb897"
  },
  {
    "url": "assets/js/39.ca257317.js",
    "revision": "a1b3fa5f5878690c8ac5d2001a62b5ae"
  },
  {
    "url": "assets/js/4.0aca7207.js",
    "revision": "f8ca6b86e05ad3868ca60398fa3417a2"
  },
  {
    "url": "assets/js/40.2a3bfe42.js",
    "revision": "075cc10c4f7361dc75acee163eae8b2a"
  },
  {
    "url": "assets/js/41.84d51086.js",
    "revision": "354484f0ab0bcc6f1f8e1ca5a153986c"
  },
  {
    "url": "assets/js/42.3b707996.js",
    "revision": "57c17e5e7d2823170548563e7eca4d15"
  },
  {
    "url": "assets/js/43.eeb41996.js",
    "revision": "186d10f506aa32edaa4f67c1cbc5bdae"
  },
  {
    "url": "assets/js/44.a5dfc480.js",
    "revision": "38dcfae96b6d807111e6f4d8b2981d4f"
  },
  {
    "url": "assets/js/45.26603e45.js",
    "revision": "cd027254ce40862d1d9d78d625d7073f"
  },
  {
    "url": "assets/js/46.ccb03a9c.js",
    "revision": "ec84722e76819dcdd6882553fbafb2bd"
  },
  {
    "url": "assets/js/47.2784e249.js",
    "revision": "3e3f307921c5afe29612bf706c7e463b"
  },
  {
    "url": "assets/js/48.ec840f55.js",
    "revision": "e923affbdfb6a1cb28cdeba59a958169"
  },
  {
    "url": "assets/js/49.ce132a68.js",
    "revision": "4a64cf08556e344f2bc030efd6313077"
  },
  {
    "url": "assets/js/5.96effc71.js",
    "revision": "32965a7343adc94c6b8f4de412e0d631"
  },
  {
    "url": "assets/js/50.ded955cc.js",
    "revision": "f10f6da0ccc6664eb2f76577cd28aa42"
  },
  {
    "url": "assets/js/51.1478619b.js",
    "revision": "4fc72a5a3b4a895664e573013caf0116"
  },
  {
    "url": "assets/js/52.a11d3b33.js",
    "revision": "f18f0832ed063dcbf61b2fab34350a9c"
  },
  {
    "url": "assets/js/53.e528b301.js",
    "revision": "601a3a71bba14a4e0e72f6b785276898"
  },
  {
    "url": "assets/js/54.8e9803d7.js",
    "revision": "45d3fe5813d28ebd2e9a64698cd5d4cb"
  },
  {
    "url": "assets/js/55.1c016829.js",
    "revision": "cbf5f1307f5d0e63c207b278f97dae61"
  },
  {
    "url": "assets/js/56.b2b48e94.js",
    "revision": "af926b67d02642118ac579fdf1b3d9a6"
  },
  {
    "url": "assets/js/57.70a4ef53.js",
    "revision": "2af1eb444a02da557aa4883b9c49b04a"
  },
  {
    "url": "assets/js/58.eb012e46.js",
    "revision": "773130bf14d3bc62f4d9aff56172142a"
  },
  {
    "url": "assets/js/59.ecdb72d2.js",
    "revision": "c9abf5650f5ed8142c11dd74fd6fe3ea"
  },
  {
    "url": "assets/js/6.29f62297.js",
    "revision": "c0afb1f5afce55cab0b3ffbb2dacf86f"
  },
  {
    "url": "assets/js/60.e8f18503.js",
    "revision": "aab1796e6d97b7b41587d6f7c04aad86"
  },
  {
    "url": "assets/js/61.b0c559b8.js",
    "revision": "dc43ab02d119291927a6b15c0f5fa13a"
  },
  {
    "url": "assets/js/62.5bd2fa5a.js",
    "revision": "da3012c74de757d4063bcde393410d43"
  },
  {
    "url": "assets/js/63.4f7c6eba.js",
    "revision": "2402a8dbca4e87299108ba3a56d8453f"
  },
  {
    "url": "assets/js/64.70807bfa.js",
    "revision": "3951b9170764f22e1092192c21694d1e"
  },
  {
    "url": "assets/js/65.fc005f4e.js",
    "revision": "85fedb08e4e9f71663722abeeacb6d00"
  },
  {
    "url": "assets/js/66.4ffb3669.js",
    "revision": "f78bad9f1edbb04e1ef68a54811599b3"
  },
  {
    "url": "assets/js/67.f74d7c83.js",
    "revision": "d4bb04f8d1b590172c078cc6ba20679e"
  },
  {
    "url": "assets/js/68.f0d37759.js",
    "revision": "8c15a682a3dedd9d497b358169608ad9"
  },
  {
    "url": "assets/js/69.621fa259.js",
    "revision": "4b96a7ec989fe54d095b95b1a1fbc0d7"
  },
  {
    "url": "assets/js/7.277abd0c.js",
    "revision": "88624901ca87309040fb15c88c3fb90c"
  },
  {
    "url": "assets/js/70.af84a647.js",
    "revision": "b66029891cdfbf10142b7f71fde74cd9"
  },
  {
    "url": "assets/js/71.2d34c4c3.js",
    "revision": "643ac07233ead30f3e9753c7ba2f4674"
  },
  {
    "url": "assets/js/72.7655c415.js",
    "revision": "94390fe1b02899257fdf3a3768814456"
  },
  {
    "url": "assets/js/73.89bac3a6.js",
    "revision": "b6490517d03c9e81d45e785680b6dd3a"
  },
  {
    "url": "assets/js/74.8a217362.js",
    "revision": "eec3f539a2790b0bd36bcdbf058b2c76"
  },
  {
    "url": "assets/js/75.7d3a4218.js",
    "revision": "0745ffc99da01f127506c652daad1507"
  },
  {
    "url": "assets/js/76.87b11115.js",
    "revision": "20887c61bfa502781f931e52cc391153"
  },
  {
    "url": "assets/js/77.427377ad.js",
    "revision": "68c55b6f9e2fb22030cb0ac03e269f13"
  },
  {
    "url": "assets/js/78.21ebd7ee.js",
    "revision": "1ddf7315e2d682462511538e7a858149"
  },
  {
    "url": "assets/js/79.7816efa8.js",
    "revision": "4ec822340050e735cfa475bec71b089a"
  },
  {
    "url": "assets/js/8.a4810e02.js",
    "revision": "743e21223492251cef9f024d6f6a233c"
  },
  {
    "url": "assets/js/80.ea36e6f4.js",
    "revision": "2213d36b1748377141c0eb84947115b3"
  },
  {
    "url": "assets/js/81.eb8adc57.js",
    "revision": "5ba3f09d3a048dcc334e42c0d3c3d7c5"
  },
  {
    "url": "assets/js/82.9695eb1e.js",
    "revision": "abbd509b2578214f0e5e9f970ce51abb"
  },
  {
    "url": "assets/js/9.5cd5ccad.js",
    "revision": "d209894c797946d97a2e5ee5db41f7e3"
  },
  {
    "url": "assets/js/app.b2a36fc1.js",
    "revision": "df18cc9853a165e0b7fdbf28c43a9407"
  },
  {
    "url": "assets/pdf/summer-school/at-summer-school-2021.png",
    "revision": "35ba39ca13dbd21e3ca9210f43a720eb"
  },
  {
    "url": "assets/pdf/summer-school/summer-school-1.jpg",
    "revision": "a6e800089d9a4387eea6b65974b38c68"
  },
  {
    "url": "assets/pdf/summer-school/summer-school-2.jpg",
    "revision": "4a4d75801f8c1fe4855d6a72c47b3962"
  },
  {
    "url": "assets/pdf/summer-school/summer-school-3.jpg",
    "revision": "0dabfd051371975087997d69a872619d"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "4d5eeaebcaa402ebb9e7ddf6c4128f6f"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "32aa9e218b359c8ba246f03b27dac295"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "662b939ac5e2ec14eff0bb50f5a860ff"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "9f5349ab2daac34129066e35be33f400"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "d43cdd46ccf0555ab08e9a106dc62853"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e78851bb7ffccc332cd92d34d00e0c98"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "8ce6556e75ea9d55fed8b8e740979fd6"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "6b11c81c084531b2fced3f53727a1171"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "018a987feace0a109efa536a3e1366fd"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "d66293f95775c947952e65a5d482baab"
  },
  {
    "url": "courses/index.html",
    "revision": "8609ee8e5eebe6d496957c3e8dd13e17"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8b548c25f6081f83d4da0d0461abdaf7"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "e2195cec2953d26d1c7467d921027e7e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "ee0e476f70e2e049074cdf761bad9554"
  },
  {
    "url": "courses/template/index.html",
    "revision": "895db559a9ef614da6e052fe45adf730"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e15c149a0ffa290e973f8483de0b9333"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "8eb843e54cad5a244e570d2283589934"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "7fd005f806ff8cea8dafe54799960e0e"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "752799d54753e154dc4a23e3215ad1a6"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "566c39d83b10a9833cc1de194cb16639"
  },
  {
    "url": "index.html",
    "revision": "37a56d233bda3009aaa4cd39ce8f12ef"
  },
  {
    "url": "studyathome/about.html",
    "revision": "5eff8e2c955e33097a2433dd3a4bd3ad"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "e9e6af6793c9e7691c436253ad7d02cc"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "d373b56913906907af1d7629d1dab8f8"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "19552db0a0c2baa9739d93f8ed577787"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "4133de7becf057843c4aebf2efdab77b"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "5b8b4175b75a8fd37652c439b1f0704c"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "eaca7eda7c9a9667f72df58e98cfe3f2"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "3368441d277e00ddcf2ebd78127d4126"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "b6ce4f5ea9494510f2d4e303a7bda8b0"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "ee86bfcbd8ca96d6b1a74702f947581f"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "019378d70f92ffab0aae1cf77fcfde4c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "086f2f15c6cedbe8f71fbe901c1a6e1b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "81ddd217461674e73ec4b1e7ff50bd7b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "2c1195775d5af01758b01e5424b62d26"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "32e1aeaac5cba6c8db44fe97d067c6f2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "c8355b81d47bced7de98db675e57e716"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "f230c2a479bb87828042532c9d8c68b6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "8c1ef1fcd4f2c7dabc4ac1a5c6a7aced"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "013f19973d54512e3a5457c0a710f442"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "c055c6305c29fc0693eb8c74288bcc7a"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "c94b4e2d756b272e975d20b2da7b71cc"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "7ec0f1321355aef06aa987943b6da900"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "60eb4cfe1a2341bb6fed3af49b9ab87d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "c18fdf73872958916a9072d72aefaa95"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "d31659ce22a31e63e798b7900a372f47"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "8436a96a90e6a211b873f1d8bd5cad5b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "fd400f391d89c884d3fad42a6315a46a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "06e4a72bfb247565d349007064995eb7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "e38e54974551aa4c0e2ab2ef2a806772"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "c055c6305c29fc0693eb8c74288bcc7a"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "86711b3973f3236192051b2c204ede1e"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "f5c2dd30a09de64737992850e6034921"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "7f0b22099e686327f786debffea3f4aa"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "d74565c3b9d49c11e39116e1aad4b5cb"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "90d40ad9adb49039ae99cfe6beda4511"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "ccfb131e39d075bdc9745dc373a02dc4"
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
