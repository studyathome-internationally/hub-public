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
    "revision": "f98fd10f27514dad81886e271b9a9862"
  },
  {
    "url": "assets/css/0.styles.d232cf62.css",
    "revision": "6575b956aac1f024a59644cc49c44899"
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
    "url": "assets/img/courses/building-and-solar-energy.jpg",
    "revision": "eefedfec25faebab4c8be9f9931f0be3"
  },
  {
    "url": "assets/img/courses/digits.jpg",
    "revision": "6c19eec6f3f28e275ae69d4fd4c15a39"
  },
  {
    "url": "assets/img/courses/electronic-design.jpg",
    "revision": "e4341e7c4c3fa3194a71fcb4310a28f3"
  },
  {
    "url": "assets/img/courses/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/courses/machine-vision.jpg",
    "revision": "006bcabe5195ee69968f79da231c970d"
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
    "url": "assets/img/partner/uastw/lecturer/christian-kollmitzer.jpg",
    "revision": "3f2213cb975128c136bfa4e25ed67d1b"
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
    "url": "assets/img/partner/uastw/lecturer/momir-tabakovic.jpg",
    "revision": "e42fd83e0beb6bb6f1d99fb5bd3ec0ef"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/momir-tabakovic.png",
    "revision": "c1649c11bc8f9ac8f7015c0b7cc2001a"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/patrick-schmitt.jpg",
    "revision": "10287187ea3a73b6e89c675daaafaf9b"
  },
  {
    "url": "assets/img/partner/uastw/lecturer/roman-beneder.jpg",
    "revision": "be3f59f8b15868e11f7222d55712c194"
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
    "url": "assets/js/1.9d2b6670.js",
    "revision": "157ce7743557a28a247956768a70f14a"
  },
  {
    "url": "assets/js/10.93d965fc.js",
    "revision": "1971823c8adcfede0c501172203d99ce"
  },
  {
    "url": "assets/js/11.48fac592.js",
    "revision": "6e1dbb77556f10ec621d902819257cf5"
  },
  {
    "url": "assets/js/12.590b63aa.js",
    "revision": "fb9cee1532e1a94523b60510597c6802"
  },
  {
    "url": "assets/js/13.c48c6ba4.js",
    "revision": "a7c81e99bcc04abde555a3f234bd484a"
  },
  {
    "url": "assets/js/14.f3c77d73.js",
    "revision": "6a469e1599bb1da860f8182371ba8b91"
  },
  {
    "url": "assets/js/15.7859edae.js",
    "revision": "044b161d485a797b30ddf3edff4ebd47"
  },
  {
    "url": "assets/js/16.7e6ae049.js",
    "revision": "fb5719bc14266cb8e85947dd1922af38"
  },
  {
    "url": "assets/js/17.d5ab9a32.js",
    "revision": "c98c7322f8dec3a31a3e92bedb443e22"
  },
  {
    "url": "assets/js/18.bc1b1dd6.js",
    "revision": "947756444634207c9f66afd78163abba"
  },
  {
    "url": "assets/js/19.3ff46df1.js",
    "revision": "a193ffdbf187ab837ed5dce92fac53bb"
  },
  {
    "url": "assets/js/2.64824004.js",
    "revision": "97cde72a6de5ebc07a2b04b11eac4d9c"
  },
  {
    "url": "assets/js/20.4452ad59.js",
    "revision": "b0b4b4cba181639fd7823b5bb7d1d44f"
  },
  {
    "url": "assets/js/21.4d7bb3b9.js",
    "revision": "792a9a156c41aec669c9fd33167385d9"
  },
  {
    "url": "assets/js/22.f83c4403.js",
    "revision": "edd4c0ab5e52771edfcbd7e548e0e4f1"
  },
  {
    "url": "assets/js/23.c5c15d87.js",
    "revision": "2526a32aa979c609a1fe26f1df310144"
  },
  {
    "url": "assets/js/24.780c6d0e.js",
    "revision": "27c28f20abcbee0001fb9a5250f726e2"
  },
  {
    "url": "assets/js/25.0d897a5a.js",
    "revision": "3f2f3b4e5525130137d4df6dea5dbc52"
  },
  {
    "url": "assets/js/26.56520ff5.js",
    "revision": "eaa9a9fc990cd60c02a1d856689a3355"
  },
  {
    "url": "assets/js/27.145ab869.js",
    "revision": "8d0e0cad629e4223ec7b4886011d7354"
  },
  {
    "url": "assets/js/28.462bd7b3.js",
    "revision": "33bdc503909907158c967abade0befe7"
  },
  {
    "url": "assets/js/29.e725500d.js",
    "revision": "b6c588cb4c7ab0ce88e72e90e69b99fd"
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
    "url": "assets/js/33.2cf96a99.js",
    "revision": "6903f58ad4fa8491c357277d6c027de7"
  },
  {
    "url": "assets/js/34.9e453a53.js",
    "revision": "f6103006714d7e2e0d51b5bbf3fe930d"
  },
  {
    "url": "assets/js/35.8bc39ce6.js",
    "revision": "4538cd3311ac19721b94de5867f16343"
  },
  {
    "url": "assets/js/36.8ba7dafb.js",
    "revision": "96fe99cbc79a1435a952aaa216176c3d"
  },
  {
    "url": "assets/js/37.dc04f1c9.js",
    "revision": "835a7a50d6a29ef88521cb2da33f1c90"
  },
  {
    "url": "assets/js/38.9d5f8aad.js",
    "revision": "73520e6d2d82a0dff28c5e4c4981d754"
  },
  {
    "url": "assets/js/39.c3339272.js",
    "revision": "8548d52e6d8a613600deb33ff0335389"
  },
  {
    "url": "assets/js/4.15e47c9a.js",
    "revision": "7ceaaecdbbd772b8e6eb00999364fa00"
  },
  {
    "url": "assets/js/40.137ad07a.js",
    "revision": "85c5e02f09024970ff90fee2e9934160"
  },
  {
    "url": "assets/js/41.ceca0f0d.js",
    "revision": "97b7e887f6a2c22ace107ea0a9e8391e"
  },
  {
    "url": "assets/js/42.3d8e7984.js",
    "revision": "ff1fc91a1b576512a44a0a2cb2fedad3"
  },
  {
    "url": "assets/js/43.51f38d3c.js",
    "revision": "fbb5cf613908ada653722119a31d9629"
  },
  {
    "url": "assets/js/44.56f8a804.js",
    "revision": "05f54c32912308484c17a6ea7d69e27b"
  },
  {
    "url": "assets/js/45.a22a398e.js",
    "revision": "6bfd72bceae30671a631653072f423ca"
  },
  {
    "url": "assets/js/46.2fe6793d.js",
    "revision": "ca6bd5553b9dc665dbba9d2bbbb8899e"
  },
  {
    "url": "assets/js/47.cd70320b.js",
    "revision": "7b18d9add4fc6411fa0f4275e8c28e99"
  },
  {
    "url": "assets/js/48.674d778b.js",
    "revision": "0bdc49428cdb2ea3bab75d818b394d9f"
  },
  {
    "url": "assets/js/49.96faf0bb.js",
    "revision": "fd559a7c88fddc1cd3e0f5103470204a"
  },
  {
    "url": "assets/js/5.72e50091.js",
    "revision": "d78b1c5cae0f7afbaa4ee6079cdde84d"
  },
  {
    "url": "assets/js/50.46e66784.js",
    "revision": "894a1071201cb7a65046680b8e054ca4"
  },
  {
    "url": "assets/js/51.c72d6adb.js",
    "revision": "b5ba0caecb8aec15d35bf04253d39b3d"
  },
  {
    "url": "assets/js/52.44353d21.js",
    "revision": "eedefff875e6ff04aa4b4e481a279384"
  },
  {
    "url": "assets/js/53.52b83203.js",
    "revision": "d2f2d1b1d9c9883088634fb80ee476d1"
  },
  {
    "url": "assets/js/54.bbc2e9aa.js",
    "revision": "30477e470f1dd3dfea6070bcac7c7410"
  },
  {
    "url": "assets/js/55.b0071dae.js",
    "revision": "15ea38f94ab4141e839b54623e688fff"
  },
  {
    "url": "assets/js/56.d2968f73.js",
    "revision": "aca2e8764055406f8f784062bf7496f0"
  },
  {
    "url": "assets/js/57.5fddd388.js",
    "revision": "6c549c681f3780e1d0cf8cd4ef4fe307"
  },
  {
    "url": "assets/js/58.09148c5a.js",
    "revision": "862d2d6f2dbf842aba1d0d753a37de70"
  },
  {
    "url": "assets/js/59.436ad422.js",
    "revision": "b5c2e7b8ca4c5f34c57152f7cb56e1ec"
  },
  {
    "url": "assets/js/6.d04b3cab.js",
    "revision": "51fb9d7303a05f1790f95b716a8202a8"
  },
  {
    "url": "assets/js/60.63dd14e4.js",
    "revision": "98feea650a13d37f063caedb67b48eb2"
  },
  {
    "url": "assets/js/61.2dd63ac6.js",
    "revision": "a8c9c742f8553ef02af7117bc7a1fa2c"
  },
  {
    "url": "assets/js/62.4f678575.js",
    "revision": "47d7941effd3ad599062967d41370502"
  },
  {
    "url": "assets/js/63.72774905.js",
    "revision": "4ba3abc826e917fe4c4c10cf8cc54cc8"
  },
  {
    "url": "assets/js/64.ff68f494.js",
    "revision": "bb149ae07776baf6367d7154a19b2c74"
  },
  {
    "url": "assets/js/65.65684e72.js",
    "revision": "7fa4628e62c9476577a6e344edf22d31"
  },
  {
    "url": "assets/js/66.646e32d6.js",
    "revision": "2161ab2b8cd8e63372381b3d6d051677"
  },
  {
    "url": "assets/js/67.74f105a9.js",
    "revision": "2af79351ef1064a48185f7ad7ffff36d"
  },
  {
    "url": "assets/js/68.f7db9496.js",
    "revision": "24ecf2f8658ee3315dbd52512c372aac"
  },
  {
    "url": "assets/js/69.35ec6b74.js",
    "revision": "8034843cefa97821e847b76f96209d19"
  },
  {
    "url": "assets/js/7.f143108e.js",
    "revision": "02c2bedf7f29da8837273682abdafe85"
  },
  {
    "url": "assets/js/70.cba4d669.js",
    "revision": "fd609c0cce729f5014004236541166f9"
  },
  {
    "url": "assets/js/71.63d7c4d8.js",
    "revision": "8d38fa3001923228063140890a06c601"
  },
  {
    "url": "assets/js/72.655ed153.js",
    "revision": "72667f32ac997f73ed5bacc4a8f7e859"
  },
  {
    "url": "assets/js/73.390b694a.js",
    "revision": "aaeadcf0658effa30f4682ebb37254c8"
  },
  {
    "url": "assets/js/74.0d75e152.js",
    "revision": "e4a6739d153e141ea090fc424ea6d5b6"
  },
  {
    "url": "assets/js/75.5efecb8e.js",
    "revision": "b446d5e5ba2e8ebe91159324a0e4f4e6"
  },
  {
    "url": "assets/js/76.f8cab042.js",
    "revision": "779aedc2b1a644135b978aba782ab5ac"
  },
  {
    "url": "assets/js/77.4acd014c.js",
    "revision": "2bd7602acdeaade74958774e4f9270c0"
  },
  {
    "url": "assets/js/78.c1ca024a.js",
    "revision": "2a9094f74400a9cf0ce662498bf84c02"
  },
  {
    "url": "assets/js/79.a09a449e.js",
    "revision": "d9d09f1024fcb9b8bc902e26811fb6e3"
  },
  {
    "url": "assets/js/8.a3a3ab84.js",
    "revision": "389b607a5a99a7481993dcd5a58678f0"
  },
  {
    "url": "assets/js/80.425899f6.js",
    "revision": "cbdf91490be173c2d5bb57120c3c056e"
  },
  {
    "url": "assets/js/81.cdb6d3c1.js",
    "revision": "5f5d00282634c14c3541075e1c5a3e13"
  },
  {
    "url": "assets/js/82.19f0b190.js",
    "revision": "0f16956d7e4140a67e3fc920e267781b"
  },
  {
    "url": "assets/js/83.bedbb181.js",
    "revision": "fe63eb8d0d3b18dc609b9415da0ce7d8"
  },
  {
    "url": "assets/js/84.cea30db0.js",
    "revision": "b90ee05ed6cf1f3258f2fa552ee31887"
  },
  {
    "url": "assets/js/85.0c3112b7.js",
    "revision": "90c9a1e597631c1ca49d66b108203c55"
  },
  {
    "url": "assets/js/86.7a8c926f.js",
    "revision": "d55a18402b9bff8cbc529a628ad8a9cc"
  },
  {
    "url": "assets/js/87.0a381d99.js",
    "revision": "92f97c9dc355d862e55fb9c2b160bbb6"
  },
  {
    "url": "assets/js/88.dfe98862.js",
    "revision": "306c5d04e7d0e848aafaccf31b2af7a2"
  },
  {
    "url": "assets/js/89.a1f6932f.js",
    "revision": "f4b2ce6f9ec053dafeaa8205db6e8c99"
  },
  {
    "url": "assets/js/9.b6322fb7.js",
    "revision": "3f645b551c734c06e6d2818ca9ea3a18"
  },
  {
    "url": "assets/js/app.38711ec2.js",
    "revision": "b4c2fdc53270afce01f129cc152a3c00"
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
    "revision": "856e7f1aad59607774c5d54f7277fbd1"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "1f13ac65b2a8cb66ce33d9e69cb1f8cd"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "0646239d887e83691d80c67801582f16"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "03abe447e7ff78b67a736485b73aa5ae"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "b8a184c030f979cf3673d39be436349b"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "6505d1eda66ebfb892c4da78f5955029"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "c147e298e7d21154e2d69156616c6505"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e08baf4778cd37314925b77ca4fe23a8"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "049d5a18687ca9e300e748f61e96f484"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "92a02a0123b61ecc33bfff89eea22b7b"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "040e2ddb7e48b2e58d40a53c0016a613"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2be5ef1ed025982b5391b025369d5304"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "f1d21cb5a2d2c1a0ca1ed4e114050a2b"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "a8a14a6bd8fd2ad4e0a3f2eff0fe4dea"
  },
  {
    "url": "courses/index.html",
    "revision": "f725bb197b5e8f7cf1cab7791cd4d39a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "801d1109e6934d1648e784de50b0199d"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "38ea8485656ab3d3b9fb6fef004b75ec"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "3b7a527fac7e3647201ec1da0019aa3b"
  },
  {
    "url": "courses/template/index.html",
    "revision": "0a3d48fa9c181b53e7aa84446c116d48"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "2fadb405ef6523ec05eb36c30dbe64d0"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "35d026e387c004a650b3d2baea9f78c4"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "f1fb8ec4782023532ce365bf2f8b9a20"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "a8f045ba138fc7fb4b4c8fa5fba2ff23"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "871bfa8d790e57a84806641b6abcf59c"
  },
  {
    "url": "index.html",
    "revision": "f241db2817fdcd71cfc793e45b6b6c57"
  },
  {
    "url": "studyathome/about.html",
    "revision": "e6447e6eb99e9d5bac381d59ef6a3552"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "dfb447747067042879bf2eaa74e5f19b"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "009390cef7e96772c67ec6072e32de1b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "a32fb79d04b4270b1b8f55c199e733e9"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "ecac192f1a96be9c5816d642c9eb314f"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d9d0800aa3d252c59680ef82bf918030"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "13efc57fbae7241a2e63cacb2cbb1ab8"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "b5279b27463a33fd5be4ab929f220555"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "ac0e616f9988fb7e71c63a762411deae"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "db5f6a99786f88c6e7c92cc81c9d68ac"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "52bd9aec283a71fc0dda51eb800938c2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "3a959c3e0d2bdfc52ba05444f66277f0"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "96d8da66b3970019939e9e475ec3b139"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "1f17b40f2e93c79b975f90ed8772279d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "33e3bdddfb23befc54a1dbeaee36c974"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "9d335d8c829a2e5f699f7cd9f35b7a4d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "0f9db90c423ec573b029046f3d7fe9b1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "5990b41b60da80e04d9ebffc7efca7cc"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "95b0a35997500f9b4b7e735e4cb11c3e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "200bfb243713001fed51ccc93bac90f1"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "1a3174f1f57538e9d4cf3bc70bb860de"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "4265a94ca403175b92a6d7fc28468bc3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "50b41da24c410866c6d477a8d9a81f29"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ecac192f1a96be9c5816d642c9eb314f"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "e2cd0897bf58cad7991019f12fe85b2a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "b2e656a91af787bfd51a626027414793"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "d0380fe61878ae7ccb3a1ea5d4dc7f76"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "04b34be38264f9c46faf5ab01dd280d1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "5ea9dd18ed6695973bf7e968ee237b87"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "ebcdd85a0d75b8d8c84d090ba70b9209"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "c0fc6c76fe5c3c000c564f1befe546bd"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "79d29eed9c166f8d22ca61009527a8d3"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "c2cf55a456efeef3b641d0aec46dc414"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "6d2d17563005831671fe65390c5d0954"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "a7d24e03cadf3e056dc35777830492ce"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "fb122e8bdb733f5a904e5b86800f94e6"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "d346a18b70bb4a6e4de44e477f59f669"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "b527ece0e0ec8d08157387857faf189d"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "34c99324582104a8753ff110e7374003"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "6ba7e1382ab74353645b0a98bf5eaa74"
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
