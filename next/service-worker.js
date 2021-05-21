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
    "revision": "508b208e8527ade4d4dd0552955a5b72"
  },
  {
    "url": "assets/css/0.styles.3a516784.css",
    "revision": "b89a7a18582ad552ec8399077e5c82df"
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
    "url": "assets/js/1.94ef0287.js",
    "revision": "9e155b40f8b2e2cd1c8d149d3daf7f48"
  },
  {
    "url": "assets/js/10.5b22d391.js",
    "revision": "1471f4aec0c3042722b1f87a97fdaeb0"
  },
  {
    "url": "assets/js/11.aa8a9c3d.js",
    "revision": "17de49f0c636bba91d9bc80aaf44914d"
  },
  {
    "url": "assets/js/12.1ecf96b4.js",
    "revision": "45e997f81ff6a3891200588e8f8a07ea"
  },
  {
    "url": "assets/js/13.acfdee53.js",
    "revision": "d4da0768a35c78b265bf4da36fb0fc09"
  },
  {
    "url": "assets/js/14.6a461edd.js",
    "revision": "438700e308ef033e635576ca43e3c62c"
  },
  {
    "url": "assets/js/15.cd2655dc.js",
    "revision": "597f5979f83fc130505fbdea0b1ea5a9"
  },
  {
    "url": "assets/js/16.3eb37e8d.js",
    "revision": "ceb38f0a995d82a3ef2028ad0ddab7f3"
  },
  {
    "url": "assets/js/17.18912e1f.js",
    "revision": "f8ed71b347e31635b387d79d23224e2d"
  },
  {
    "url": "assets/js/18.eefea8f8.js",
    "revision": "e7be34c9530720254747902b51620294"
  },
  {
    "url": "assets/js/19.5500eaf5.js",
    "revision": "e54bcdff88622236872ec23658486e29"
  },
  {
    "url": "assets/js/2.78ab3607.js",
    "revision": "47fe1ea0fcebb6d43377aaf324528bfd"
  },
  {
    "url": "assets/js/20.3573a6a6.js",
    "revision": "8d04f94ee88f0293d89dd5138c2e4191"
  },
  {
    "url": "assets/js/21.98029c2e.js",
    "revision": "f6beb38002f329afefca336106555a1f"
  },
  {
    "url": "assets/js/22.fe911584.js",
    "revision": "4ece9b42858fa4279c48dea20e57ebd3"
  },
  {
    "url": "assets/js/23.94d09215.js",
    "revision": "0257800c7100007be797e21667d9c69e"
  },
  {
    "url": "assets/js/24.45d32632.js",
    "revision": "1db710e4d741925990d6fdbc70e820df"
  },
  {
    "url": "assets/js/25.f98b7616.js",
    "revision": "eeb0a6bea27fbec5b7c396bd7aeda76d"
  },
  {
    "url": "assets/js/26.e4ac1fd0.js",
    "revision": "c4678c8bb8d93decaf32502752e6dedc"
  },
  {
    "url": "assets/js/27.8a2b8169.js",
    "revision": "a8b8088967e0062864b61f9abbb206f0"
  },
  {
    "url": "assets/js/28.cbdf2b23.js",
    "revision": "7de863066c6be601926e5f543d492709"
  },
  {
    "url": "assets/js/29.373a66e2.js",
    "revision": "8df03e093bb7db17a01655c74013c585"
  },
  {
    "url": "assets/js/30.b22c1085.js",
    "revision": "1f90245e19b42d7ce1f9b308db51e50f"
  },
  {
    "url": "assets/js/31.db4cf588.js",
    "revision": "0007eaacb8173663b1bcb51ae2b355e7"
  },
  {
    "url": "assets/js/32.be64cb22.js",
    "revision": "0af48b3378de2fadf9075889d1169146"
  },
  {
    "url": "assets/js/33.c230acf7.js",
    "revision": "bd53ab61c3f80a71ef49093721d82c07"
  },
  {
    "url": "assets/js/34.fc93e647.js",
    "revision": "091d45fda36e7d5c9a5cddd3a2b17467"
  },
  {
    "url": "assets/js/35.a935238a.js",
    "revision": "5717f0cf9d70a9ec3ec7f489f0a4b113"
  },
  {
    "url": "assets/js/36.fb62bc39.js",
    "revision": "489ee1f7aba423bd34640c8b73fa876b"
  },
  {
    "url": "assets/js/37.53217ae0.js",
    "revision": "eea1e4e7bb92c484202cbaf86c1cdce0"
  },
  {
    "url": "assets/js/38.7542bbb8.js",
    "revision": "b234a78fe418a9082f110ee6bdc2036b"
  },
  {
    "url": "assets/js/39.96d2f376.js",
    "revision": "0a923897f4aeac5f8f7b4d3dcc87c0f3"
  },
  {
    "url": "assets/js/4.c05ef996.js",
    "revision": "a608ccc2b363dfb1e1331e54f9c38bd4"
  },
  {
    "url": "assets/js/40.92b32367.js",
    "revision": "972cd36c1d5a139ff6d8219739c29cba"
  },
  {
    "url": "assets/js/41.bc3492c1.js",
    "revision": "43757a4204778dd696aeb3ee3a2a8388"
  },
  {
    "url": "assets/js/42.670ae08d.js",
    "revision": "48bfc96209ee0cee956df01a2568773a"
  },
  {
    "url": "assets/js/43.95112ae7.js",
    "revision": "c3841b929a267935e3b01fefe41933d9"
  },
  {
    "url": "assets/js/44.d4e53034.js",
    "revision": "403c73b69664848a53365496c18d7361"
  },
  {
    "url": "assets/js/45.a2acb815.js",
    "revision": "7770deddbf895061fc25ff03a7ba38e3"
  },
  {
    "url": "assets/js/46.bee0564a.js",
    "revision": "735d8c41e25d40bb9d91424c5daa5008"
  },
  {
    "url": "assets/js/47.ce10e4dc.js",
    "revision": "a350e625e8f58f1975274c66541942ae"
  },
  {
    "url": "assets/js/48.3172b7ba.js",
    "revision": "09ce7c03a1545cb4f1ee77db68745294"
  },
  {
    "url": "assets/js/49.8a5f9eef.js",
    "revision": "b3a41baf905852260e7f929f4bfa0833"
  },
  {
    "url": "assets/js/5.1ec5ebb6.js",
    "revision": "87da9e2faf8d2a4221dea152c5b93340"
  },
  {
    "url": "assets/js/50.231fbc6d.js",
    "revision": "4a87ef998848eb4862cb05ac170f56b7"
  },
  {
    "url": "assets/js/51.73740dfd.js",
    "revision": "e76be2fda0ea6c8e1a514e9c99bf742a"
  },
  {
    "url": "assets/js/52.653dfc4d.js",
    "revision": "ff715f75712f8be4effb04fe4d548c7f"
  },
  {
    "url": "assets/js/53.68af83e2.js",
    "revision": "5b1307da41ba8a2105f602b1ee66a452"
  },
  {
    "url": "assets/js/54.f6c4e31d.js",
    "revision": "dd5f8104af7657290fb4d8d645cb1ef5"
  },
  {
    "url": "assets/js/55.2def607b.js",
    "revision": "5203649eb5702944e1ae03eaea32650c"
  },
  {
    "url": "assets/js/56.43030c58.js",
    "revision": "10cd524e38cb91d608c070dd2d607b39"
  },
  {
    "url": "assets/js/57.3ce9b130.js",
    "revision": "bcf2cbbe771c236f7f8af8946ffaaec9"
  },
  {
    "url": "assets/js/58.0563860e.js",
    "revision": "54df51bda4d4202a04c7421e54271413"
  },
  {
    "url": "assets/js/59.2f2097a6.js",
    "revision": "1cb72d0b2f57f2d2502c7ce476f9b31b"
  },
  {
    "url": "assets/js/6.b5530252.js",
    "revision": "768b55f26d2fd34fabe596bdf6bcb7dd"
  },
  {
    "url": "assets/js/60.175facfc.js",
    "revision": "a8bc16605418000fbadbeb442eaa216d"
  },
  {
    "url": "assets/js/61.ea6fc9d7.js",
    "revision": "66077a636679219771ffc3387616a0a9"
  },
  {
    "url": "assets/js/62.5cd4cc46.js",
    "revision": "1e50889eabc995bab8c871b55e1575b2"
  },
  {
    "url": "assets/js/63.ce06d303.js",
    "revision": "66109a216f92738c31e470670904e570"
  },
  {
    "url": "assets/js/64.89382dce.js",
    "revision": "e52f0e9c9f329c39feb35201846f45f0"
  },
  {
    "url": "assets/js/65.8e85d68b.js",
    "revision": "7162c33a7d06e748d6c85a44305b519e"
  },
  {
    "url": "assets/js/66.deb352c8.js",
    "revision": "9cbf283190135095e7c57e5e8e7b473f"
  },
  {
    "url": "assets/js/67.3c4356f0.js",
    "revision": "7bb913610c1c073da607648b52bc0b36"
  },
  {
    "url": "assets/js/68.19b45524.js",
    "revision": "0cf054ea3dc1ae70240e422bd78ab6fe"
  },
  {
    "url": "assets/js/69.9f176df2.js",
    "revision": "0d595440a67bf96724a1958ba1643a76"
  },
  {
    "url": "assets/js/7.fe2e4bd3.js",
    "revision": "513707b9c53333f5c9a982112fc92c4f"
  },
  {
    "url": "assets/js/70.65830e40.js",
    "revision": "0e0e95dc67df5ed95106326390d6583b"
  },
  {
    "url": "assets/js/71.ac84acd8.js",
    "revision": "781588812c083f1b92572eba59f3603b"
  },
  {
    "url": "assets/js/72.6c98b667.js",
    "revision": "5d0755afaa7b992d5465daa56d3ccd5d"
  },
  {
    "url": "assets/js/73.5d8e6653.js",
    "revision": "e4ff4348cfaf142f8de58b00daf7e109"
  },
  {
    "url": "assets/js/74.afe498f2.js",
    "revision": "64f0a00ecee9665909d734686bacc967"
  },
  {
    "url": "assets/js/75.df4f06ac.js",
    "revision": "8e33a8f79b1e6558ed89aa163db0ef47"
  },
  {
    "url": "assets/js/76.4db4552f.js",
    "revision": "8ab3cb429e7a9b70dbd360b90d741861"
  },
  {
    "url": "assets/js/77.d224a1a9.js",
    "revision": "e271d74fc248c6276195615041d6c6fc"
  },
  {
    "url": "assets/js/78.c88ae8c9.js",
    "revision": "45a2496f1ee6772a4d043e0dd938a24f"
  },
  {
    "url": "assets/js/79.616c56ef.js",
    "revision": "c95d3272ea06d85bc69f7d8dcbcf5cf3"
  },
  {
    "url": "assets/js/8.b6509278.js",
    "revision": "98cfcbf8e2489b494e8e4c418a619395"
  },
  {
    "url": "assets/js/80.af6b627b.js",
    "revision": "9747a83042e6b2246f09870edd867dca"
  },
  {
    "url": "assets/js/81.3f66a487.js",
    "revision": "afedd56a90795cc842e389f3963f8e8a"
  },
  {
    "url": "assets/js/82.0c48f9cb.js",
    "revision": "3446f21cf98f98c90d6d0d890b883525"
  },
  {
    "url": "assets/js/83.654c725b.js",
    "revision": "07aeec60c416ed7ad6c2dc1252418a14"
  },
  {
    "url": "assets/js/84.ecaf11bf.js",
    "revision": "4bfe1abe466e425dfa55c693b8f8dc77"
  },
  {
    "url": "assets/js/85.4f2a542b.js",
    "revision": "d8d5169be75742614ca6184eaf7e0d0f"
  },
  {
    "url": "assets/js/86.4d8362a8.js",
    "revision": "d56d6c8c573da459b0d693cbdf94f0e2"
  },
  {
    "url": "assets/js/87.b8adba36.js",
    "revision": "a3b62430f6e381e1c75f1482ef71a607"
  },
  {
    "url": "assets/js/88.9c3fcdcc.js",
    "revision": "fa394ddc229bde7d8af331b4db03391c"
  },
  {
    "url": "assets/js/89.e4e01052.js",
    "revision": "d4b86728e31b5ea7b21b232099c3c0e9"
  },
  {
    "url": "assets/js/9.dc3e732d.js",
    "revision": "8ad4111feb8610895c57c9a7674c88c0"
  },
  {
    "url": "assets/js/app.43a7485e.js",
    "revision": "002b89b6ea6210761335106b5a96f07f"
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
    "revision": "c3a3e6c40e799124131f8cbb382ed977"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "c8dd8f72c6e8d5e7b959f34051d4f4f2"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "76d9d8b669a8a0c986228253a89a679e"
  },
  {
    "url": "courses/building-and-solar-engergy/index.html",
    "revision": "cb12ad13ade91db9ef1377484fd0a86a"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "c4ba437ad112005467270f3a9e5ad4c5"
  },
  {
    "url": "courses/data-ethics-and-open-data-winter/index.html",
    "revision": "40500d30cb6efd0c981014b5f39365ee"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "82c984ce09ace9229b7ea7eb85867812"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "44e3ff08a95ca6c1be43f54f4040e580"
  },
  {
    "url": "courses/electronic-design/index.html",
    "revision": "f487b9cbdc028a852b695b2dc991cc29"
  },
  {
    "url": "courses/embedded-systems/index.html",
    "revision": "aea69d51e395a66e4c2bb176da9b6a69"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "926c4c3cd0ad6308ee54e7b7f4117189"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "5c9534026d7225ad9905d62f659f2ce5"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "c1c3e2e58fcf3218fda2abaee751bc5a"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "90b67894a3c81f6c10a6fef52fefb65e"
  },
  {
    "url": "courses/index.html",
    "revision": "be50641b4d322e2a7791cfc5b552457a"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "8b75ee5b197c8a920039c07b74f02ac5"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "a62ac85fb5f6e7cef9a888884ba21fca"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "44d7a1a9b61592dbe7088be11718c626"
  },
  {
    "url": "courses/template/index.html",
    "revision": "96f222fd5964ad9570ef10850c72649c"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "0382ce9324d00cd252e5c36ac143a418"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "bc13e538642738d9a0207ab5ab6bf14c"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "f6da6de20928c122c9811befecbd7544"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "20be6bc700f4dbec20c980b758011bb6"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "0bb45f4d0384501e19eeb94a094671ad"
  },
  {
    "url": "index.html",
    "revision": "1f84eb36e9b62009c3bcb0ea93096912"
  },
  {
    "url": "studyathome/about.html",
    "revision": "51ed5caf0e15a5880c7e7ce854a200dd"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "588f59f7d8cc76daf4f2360b67021d68"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "288fb9bd11c471a8a224df988d31513b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "957c2e70879a004c5305c0b4355dc7ac"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "33268cc0a75b4b896652e426b00cf66b"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "be388fbb6730afd6c60eece3c7f0b0de"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "3beab7acf101de5208b27d54e87debee"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "15986ae6275292e1946d02692cac8260"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d63e290234759cab941dfdd5b2939ed4"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "508b208e8527ade4d4dd0552955a5b72"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "543e9dace09e19ce0f259ea33ec22c4c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "2de426f44969391633968b722597c05d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "25b3230bff8ba9adb7862d1abb1f753c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christian-kollmitzer.html",
    "revision": "77f586906e8f5ff73786473948d011ff"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "b3ddf0925e9e0307b1933bfb89a4e118"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "3e868e9a98d2a37f13f223def366352d"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "cb4378a8c8d9641374263d5898159ee7"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "a2d0a18ff182131ddbe279d4891de8bb"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "239ab8a839ca41beb44e54873aa40aef"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "861354a71fede1160afc36486e16c459"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/momir-tabakovic.html",
    "revision": "dffbcc4f693c38d45aa11dd717973e16"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/patrick-schmitt.html",
    "revision": "736a74be6d35ed073a78d5e16df12dc9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/roman-beneder.html",
    "revision": "53407ac09630ae6a934fd2b91a62ae31"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "5dcf7618f9790023920b96f875029f46"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "ae89cd6f29494f2e2f46d1ebe43aa34d"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "49b87f41741ce15e81d24d00c56d08e4"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "77371fd2d68aa864fce4b175e4828cc9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "d249c2a5b796dc358f6ae6c36ed51407"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "314953c20ac08d05d10e611d9b5803ef"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "b4eebbd373a82277947a6eba0696b4a9"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "6ae8a7407ebb7e21ed0824d3c68bc5b7"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "8d99f447ecd39349822685f09986293e"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "586afd74108c840588639347891f56aa"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "508b208e8527ade4d4dd0552955a5b72"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "3266b0af68788dafeea82c788ef019d0"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "a113d820f744b75d3162f030b0c0fbba"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "037d43dc777b3d1479f30549381f84bf"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "257f6e7d7362c30c539ad21c29d6a944"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "0b0227cf9be1ff0eb6d03e806de86c47"
  },
  {
    "url": "virtual-student-interaction/index.html",
    "revision": "97e441e110907b550a0451330fddeda7"
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
