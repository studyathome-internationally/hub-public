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
    "revision": "1850477cb5c8a46677d5d7980c4653df"
  },
  {
    "url": "assets/css/0.styles.9409fb59.css",
    "revision": "f9907a6a123478f04abe0e059ee7a505"
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
    "url": "assets/img/courses/mux.svg",
    "revision": "52a569a585cecdd600daedd3669107db"
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
    "url": "assets/img/partner/uastw/lecturer/martin-deinhofer.jpg",
    "revision": "f02da1cdead835cf3dfff3b38c169a1a"
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
    "url": "assets/js/1.869966bf.js",
    "revision": "08cf1cb0861a19db4ff709252b56df1a"
  },
  {
    "url": "assets/js/10.d3f46492.js",
    "revision": "41176ac3daa126e998c115a7ce63b523"
  },
  {
    "url": "assets/js/11.bd8e8477.js",
    "revision": "659050b9f2d9965540715fd30689b54d"
  },
  {
    "url": "assets/js/12.caa1b9a4.js",
    "revision": "69f37e8610f52e5f56a036b019b415f5"
  },
  {
    "url": "assets/js/13.1afb9118.js",
    "revision": "2fd4d749b961ea9fbd51dc9cb68602f1"
  },
  {
    "url": "assets/js/14.7503225a.js",
    "revision": "87215a0d9df70fbafd39db5ac20cf287"
  },
  {
    "url": "assets/js/15.84f15085.js",
    "revision": "92f6c2ec8c5425826756192f50449bf6"
  },
  {
    "url": "assets/js/16.2aedd70c.js",
    "revision": "f011d408750439f874cbc742b38e188a"
  },
  {
    "url": "assets/js/17.2256879a.js",
    "revision": "eef7f82e484749b8e179d75676a4652b"
  },
  {
    "url": "assets/js/18.8d13360f.js",
    "revision": "0a5bfee42d31af05b2254adfc4f59226"
  },
  {
    "url": "assets/js/19.e084226b.js",
    "revision": "85082b9eeb619f03a5794545af7f58fa"
  },
  {
    "url": "assets/js/2.8a4e4b29.js",
    "revision": "6ec10667e86540ebe062cdbb8b3b24f7"
  },
  {
    "url": "assets/js/20.74af38f4.js",
    "revision": "172a3fcfeb5de973a8e4cd034f49d27d"
  },
  {
    "url": "assets/js/21.822df120.js",
    "revision": "84b3e48b13a6a4756c1286ee42335880"
  },
  {
    "url": "assets/js/22.ba87bfa4.js",
    "revision": "cfda5f44ac5d1ff133255b95b8306193"
  },
  {
    "url": "assets/js/23.3842a974.js",
    "revision": "b5a3dac94c01d66a428d43a02a742197"
  },
  {
    "url": "assets/js/24.607e79f7.js",
    "revision": "1aea388c737265dcf6312f70d6013908"
  },
  {
    "url": "assets/js/25.aacdbad5.js",
    "revision": "61b7e8f2b464bbbe7595bc0db02a74fd"
  },
  {
    "url": "assets/js/26.901b310d.js",
    "revision": "a8dfe832e09f6c531e602859863d6dd2"
  },
  {
    "url": "assets/js/27.71956739.js",
    "revision": "271a30d88781bcb153db3822013c2cd1"
  },
  {
    "url": "assets/js/28.4cf2e6e3.js",
    "revision": "358c81253c8fe247985e5f407067e413"
  },
  {
    "url": "assets/js/29.41a06549.js",
    "revision": "c6ab06f4ac30c41ba4f0339c7126b69a"
  },
  {
    "url": "assets/js/30.7a113fdf.js",
    "revision": "64b5b7dd9868fc986b76017a2bbbe439"
  },
  {
    "url": "assets/js/31.cb34fd58.js",
    "revision": "a3f343fff8d8668eafa73f7c4d42eb7e"
  },
  {
    "url": "assets/js/32.e56fc7a2.js",
    "revision": "f01f41741fb0a024310918388ddaaeab"
  },
  {
    "url": "assets/js/33.fdaf70c0.js",
    "revision": "48e12a5b668e50738960aa084c0b41c2"
  },
  {
    "url": "assets/js/34.4b9a9b3e.js",
    "revision": "486e349e07a726c25a1f1d4f8e8f65e6"
  },
  {
    "url": "assets/js/35.e84510e0.js",
    "revision": "26b32639945fda51fcf8574557893bd6"
  },
  {
    "url": "assets/js/36.4ddb02ac.js",
    "revision": "2d1c36ad7d5259acb752592e67c5b2ce"
  },
  {
    "url": "assets/js/37.b355be46.js",
    "revision": "816574e6d708261910f881c6295c4c8e"
  },
  {
    "url": "assets/js/38.44bd7554.js",
    "revision": "c188bcad11180f658337fbb4ebd2d2a9"
  },
  {
    "url": "assets/js/39.fd626d07.js",
    "revision": "b836c24c7c0b92c3c44572c06bab986c"
  },
  {
    "url": "assets/js/4.2f8d15f0.js",
    "revision": "556811a3718934037993fac84d91b2b6"
  },
  {
    "url": "assets/js/40.393a30b2.js",
    "revision": "afb0037312f3f2d7b4d95463330fde4f"
  },
  {
    "url": "assets/js/41.4c469210.js",
    "revision": "814c5e6bb252317ddf8ab9e52411d468"
  },
  {
    "url": "assets/js/42.cf48e346.js",
    "revision": "b71b6e63cacad7c9df6a5dcb3adc919f"
  },
  {
    "url": "assets/js/43.513e9eaa.js",
    "revision": "ed32de60c4d77a9506601da6edab3d5c"
  },
  {
    "url": "assets/js/44.e0be16bd.js",
    "revision": "6b7e0ab79fd6f7a030daab1c3e04e4cb"
  },
  {
    "url": "assets/js/45.371b1ffe.js",
    "revision": "d7181ef4bcc20873fa9ac75c0c6e98f4"
  },
  {
    "url": "assets/js/46.c64cc6b7.js",
    "revision": "7e2100972b27d9ac7a97f3f44ca6f9b9"
  },
  {
    "url": "assets/js/47.817e9fb4.js",
    "revision": "ec60b4cd372cff36d0c300353183d5b5"
  },
  {
    "url": "assets/js/48.36ac3592.js",
    "revision": "81f01f733635bf5e671cbb8bc00596ff"
  },
  {
    "url": "assets/js/49.a7309b24.js",
    "revision": "81211e46df2dbb1a8cd01471b712856e"
  },
  {
    "url": "assets/js/5.68ebe411.js",
    "revision": "52818b80ec18a0ac0937d8eed70053df"
  },
  {
    "url": "assets/js/50.b8441c64.js",
    "revision": "5b46b79510797ea72a9e54bf00b6b447"
  },
  {
    "url": "assets/js/51.1b80c46b.js",
    "revision": "b3455c8f698e2186df7164b87fcd7e72"
  },
  {
    "url": "assets/js/52.63e099ff.js",
    "revision": "e8636968b741a41c78a6c098d11bc591"
  },
  {
    "url": "assets/js/53.7b2e583f.js",
    "revision": "a2463d8fe01f3ee2203875eef0267c87"
  },
  {
    "url": "assets/js/54.baec5657.js",
    "revision": "016487c128ddaced15756c67b2ecd849"
  },
  {
    "url": "assets/js/55.5bd5ef64.js",
    "revision": "7da0783652bbeaed9fa741c1868e275a"
  },
  {
    "url": "assets/js/56.d06d2796.js",
    "revision": "b1e0d0df19e062fb18f6e3e759cde0ef"
  },
  {
    "url": "assets/js/57.cbeaf30e.js",
    "revision": "7a42ab3071f55c369cff4f7fa78ee801"
  },
  {
    "url": "assets/js/58.f4528c9a.js",
    "revision": "2de32089427f372828c76de92bb67c37"
  },
  {
    "url": "assets/js/59.ec449f94.js",
    "revision": "bb5dcabf84064d36bf59d4d941d971e0"
  },
  {
    "url": "assets/js/6.d178ce47.js",
    "revision": "9c893574ded904eedc33880d61ff7320"
  },
  {
    "url": "assets/js/60.89330000.js",
    "revision": "8d61964d5356bd0a1ef287ce94874eff"
  },
  {
    "url": "assets/js/61.df68e53a.js",
    "revision": "653f06a87683b90fde563f0cc9a2254e"
  },
  {
    "url": "assets/js/62.207a6193.js",
    "revision": "f73118bc2ff2a13c1dc160c1c965ab94"
  },
  {
    "url": "assets/js/63.87c939c5.js",
    "revision": "e99b4d3e1d02a04e853e82b0c6fb0fab"
  },
  {
    "url": "assets/js/64.cc6c1216.js",
    "revision": "6e53d362747bd758a5a1021133e32a7e"
  },
  {
    "url": "assets/js/65.53c151bc.js",
    "revision": "13e54af6d464174babbaf1e267aedde6"
  },
  {
    "url": "assets/js/66.ae6c780e.js",
    "revision": "9ef6ac785b1ffc14e9f43e65ad2074f7"
  },
  {
    "url": "assets/js/67.d143ded7.js",
    "revision": "4cc692498c4e376acc0ed519dbab8244"
  },
  {
    "url": "assets/js/68.dda005b4.js",
    "revision": "4c6947403329bd008fcecefd4a724ffc"
  },
  {
    "url": "assets/js/69.aef74d4a.js",
    "revision": "1f4c9215585dc8009bfcc904334457b8"
  },
  {
    "url": "assets/js/7.8cdc0819.js",
    "revision": "902f8d7af5f1b54383c090ebb0d18700"
  },
  {
    "url": "assets/js/70.959bb44c.js",
    "revision": "8405aa71d0aae55649a19dab8fbeaf53"
  },
  {
    "url": "assets/js/71.3c1219cd.js",
    "revision": "35634af4111b6ea8955d5d45887b8cd1"
  },
  {
    "url": "assets/js/72.0abfa6b3.js",
    "revision": "5c708e19c5a26fb7eb85f61829c6e33f"
  },
  {
    "url": "assets/js/73.3673cfcb.js",
    "revision": "5589fcbbe0d70903c7f953b7893c5584"
  },
  {
    "url": "assets/js/74.306ee799.js",
    "revision": "2480727174f10972cd039c5b534566e9"
  },
  {
    "url": "assets/js/75.88737957.js",
    "revision": "889e07ecca3aa665b9c47ca53d71814d"
  },
  {
    "url": "assets/js/76.fa2e0a94.js",
    "revision": "e9555c297b11f9a1d13d9e850f22e491"
  },
  {
    "url": "assets/js/8.156b6cc7.js",
    "revision": "eecc22bba3adcdd088f1ad309a3c14c5"
  },
  {
    "url": "assets/js/9.befee04d.js",
    "revision": "e46fc4dfb24b27ba8f59c1d8ef8e85a5"
  },
  {
    "url": "assets/js/app.e6e20319.js",
    "revision": "987a7aee7e8927e7bc8717a2d6b561b7"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "c179945bddad0e3c6ac5a5df3ee43a49"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "55aca4a18e0fe46d12140b8ec3e091f4"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "dc00402caa77ff096e799d94489c8a50"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "bdce9f4d6d1c973b3a02550b95b639cd"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "bcc84328844ec56e782deeb723c92257"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "f65f8b05a81f1d681e63b7d98350f58c"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "f9c293bf1f567a10bda845fff95becdb"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "571a472a9fa0fb9a4468eb3f05b45a36"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "e6b033da3c69dd22d979f51017c87832"
  },
  {
    "url": "courses/index.html",
    "revision": "afc4747d59b321631590754e1b429263"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "a813bc6ed2c8e88e25c581fe69273d0e"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "1c90a2839470226173f6a9ca1713b6b4"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "6b5323f48452838b4d73dc5d18e551a2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "33c46bd0cae8227504fafce58c27a1f7"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "c36821572f5454504dd55397032332dc"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "eac3c6d06204f987aa9e5ffcd19265c6"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "a6d22b64e2ef9006c24622a500565ba6"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "20b14d81e497fda2eccaecfd80f5ce82"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "32cceb1f0ce9f5e8ae86a4fe52666072"
  },
  {
    "url": "index.html",
    "revision": "2b171d52a5e683788566a3a4102218ea"
  },
  {
    "url": "studyathome/about.html",
    "revision": "e541af55f3f9a137ff27c179dc93eae4"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "fb9d37151454497f419a61cfbeabca39"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "91693b4b196ddf954abf7b5c7e1d3e59"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "0a2bb13922f6dbc9e7727a6335c67d74"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "b3d1e62ae2ee225c712b8531783f1288"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "f2503ea8c9095250bbc1176ce2307d09"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "45c002b3ad8b286b651241208b6f84b9"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "9659402c2785fe208f309eb70b1b28b1"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "b5c5c7fe44879d6e9920f5c4218f1b8e"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "793dc3a818989e553e7989f258c3935a"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "fa4f438837afa0a0eb69ff0dda130b9b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "51e6995c17a8b2101c533c0460b9211b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "6ca4c6eefb961d66b31eb03f88d9253e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "47b361740ca963a326b42550020450de"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "9c5ad86b1a37f3b6b6cdd379873f5948"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "fbf417dcb23374a25385feea11ed1f69"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "8fa8f8331a5ac286e043616dc38f7f5a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "ea3922a175f54a9ef46ad2a5db63a389"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "c067911d7617738a3ce5eaf7f79e6599"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "1ab48de0acb5d8de5aee005bda26f21b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "9e302ff3fc97b61dc91f2045032e92b1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "fef35aee8da7215d105d5353303f9a39"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "8f1136e2f8839e862193a49400c3965c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "bc45de51048711bbfeca383ffc5097b9"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "9c5ad86b1a37f3b6b6cdd379873f5948"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "6e98772d00f0539ab4a71bd0fecfafc6"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "68c48f13b1141cf48ff5bbdd0c905376"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "4ac0f336673b3902df64cb8f044b9218"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "875fe7bdb34661df58113105d43dd2a3"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "a240fe2933e7042a165fa025392bb1a9"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "57c38a5adb4a39d9dde21cd32bb1378b"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "bb57257e2ce6964ccca6e527dcb510f2"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "e8c7053414ec7e2364e5d961343f4b09"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "51d51d8f2cb33493713d2d6f97f0986d"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "6e9fd7cba6ac176fa5f400f0990188c2"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "cc5e765f3fa632cd97953410d3d20d95"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "a092e10197dfbd6422377b6502cb2553"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "f7d7ccd505b0584e5df8f17c4c1364a2"
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
