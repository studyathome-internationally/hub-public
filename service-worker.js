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
    "revision": "6d84a7ec4ad0ef32cd2a3fc25d8fd367"
  },
  {
    "url": "assets/css/0.styles.4fe934b3.css",
    "revision": "732441355e1557ebda0022ca6b5caa01"
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
    "url": "assets/img/partners.82f515d1.svg",
    "revision": "82f515d1d6b00ca0bb96184a77e560d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple-workflow-all-line-arrows-studyat.a377037b.svg",
    "revision": "a377037bbd71a298049598d8c7db81d5"
  },
  {
    "url": "assets/img/vhdl-adder.2e859462.png",
    "revision": "2e859462e93b48ec10e13aad7cf73864"
  },
  {
    "url": "assets/js/1.03f4c065.js",
    "revision": "3d03660eb48181d23026cfabae982a8e"
  },
  {
    "url": "assets/js/10.a2a24b7c.js",
    "revision": "cbfd4d30ef2f30462aa8a97391c2a045"
  },
  {
    "url": "assets/js/11.d0880da8.js",
    "revision": "670498a32f99645b61aaa70c84500eef"
  },
  {
    "url": "assets/js/12.d85ddc32.js",
    "revision": "aace98bb1a2a29207cd4a44569415c50"
  },
  {
    "url": "assets/js/13.5491f728.js",
    "revision": "a907f82457ee742307411c720986acc4"
  },
  {
    "url": "assets/js/14.85be5f02.js",
    "revision": "6bb346cd6ec8c0a327a1fcf3c3161ec2"
  },
  {
    "url": "assets/js/15.8397ff33.js",
    "revision": "5dc632a326ef835a9dd11850d03f70a1"
  },
  {
    "url": "assets/js/16.95ecacd2.js",
    "revision": "6917844868818e3c0695ef28553a3d0b"
  },
  {
    "url": "assets/js/17.ba3be645.js",
    "revision": "f8eed7eed85a51a2f97ce30c247f6221"
  },
  {
    "url": "assets/js/18.4e83ae6a.js",
    "revision": "5cc958999f748cc58b64240b65498286"
  },
  {
    "url": "assets/js/19.289fc1cc.js",
    "revision": "4082b39a644a0b7d48df1a11fd68de15"
  },
  {
    "url": "assets/js/2.8fe4254e.js",
    "revision": "70800b2eb2aa3092040833b5a3d62692"
  },
  {
    "url": "assets/js/20.6316a727.js",
    "revision": "cf58675561dedf300ef3e2ecad4ff37e"
  },
  {
    "url": "assets/js/21.fc21f2fa.js",
    "revision": "c79ef9c53ed9ce160279a686d66ea7c6"
  },
  {
    "url": "assets/js/22.9f2aa440.js",
    "revision": "54fd81f89efe26bdc512c70c7ab673aa"
  },
  {
    "url": "assets/js/23.fc1d6122.js",
    "revision": "0a257196a5071c247026deee77e90c67"
  },
  {
    "url": "assets/js/24.f2546108.js",
    "revision": "1d26d6aa2b88e7ed43097486a57840e8"
  },
  {
    "url": "assets/js/25.917a085a.js",
    "revision": "368739f8c61eefd19940e33b6265e544"
  },
  {
    "url": "assets/js/26.8f588d76.js",
    "revision": "de217f9738c26992ad8423d451f6f443"
  },
  {
    "url": "assets/js/27.329cbea0.js",
    "revision": "97189d1f7bc4c5a4bec8f06090624c7f"
  },
  {
    "url": "assets/js/28.6ac64ad0.js",
    "revision": "665ef491e28193aca545b6233955c9ca"
  },
  {
    "url": "assets/js/29.9b9ea09e.js",
    "revision": "1653799c8929f2b22e8beca5672d06cf"
  },
  {
    "url": "assets/js/30.38d6429e.js",
    "revision": "e981deb0d9b558abfba16956b8d2b0c4"
  },
  {
    "url": "assets/js/31.537a2936.js",
    "revision": "41a57f183383cb2521aaca2d23357c58"
  },
  {
    "url": "assets/js/32.3d71bdd8.js",
    "revision": "c1d6c5c0a6c4f4cc427c77e67f54b38b"
  },
  {
    "url": "assets/js/33.be18f728.js",
    "revision": "7694865ff9fa7e2eb72f7004729e25b6"
  },
  {
    "url": "assets/js/34.35e8677b.js",
    "revision": "82af0734b4fa774abd589f24182df5f9"
  },
  {
    "url": "assets/js/35.d0d5a530.js",
    "revision": "b42be18177f82e888a994580aeb74914"
  },
  {
    "url": "assets/js/36.c4d4396c.js",
    "revision": "bf01aac9df01a57f85d0727c7bdf2026"
  },
  {
    "url": "assets/js/37.479e10fb.js",
    "revision": "033682c2b502e63aa668a4a180ab56c8"
  },
  {
    "url": "assets/js/38.a1c1ff7a.js",
    "revision": "16f1323d5ddc089fadbe63e35e9bbf9a"
  },
  {
    "url": "assets/js/39.b16e5173.js",
    "revision": "96397ea3ef97d3978583d7f61da7cc63"
  },
  {
    "url": "assets/js/4.49d38d09.js",
    "revision": "704029859be55cf90ce8934f7a30290c"
  },
  {
    "url": "assets/js/40.738695dd.js",
    "revision": "e21279021fabb43dffad168cd22f66ce"
  },
  {
    "url": "assets/js/41.1960f92b.js",
    "revision": "c72ffe3bd6f548c638a4dcbf0bee6b14"
  },
  {
    "url": "assets/js/42.d2027515.js",
    "revision": "d3bdf5c97369e8d5bcc6a7a57364add2"
  },
  {
    "url": "assets/js/43.1db1681c.js",
    "revision": "43d36bbd34cfbf3d6c03b7f245af7ccc"
  },
  {
    "url": "assets/js/44.64fdefd0.js",
    "revision": "8d9f0c628c070c7d1550a729eb58bf91"
  },
  {
    "url": "assets/js/45.b795bd4c.js",
    "revision": "3d54de0a0b7d4ac318e3645d0ae46107"
  },
  {
    "url": "assets/js/46.027265da.js",
    "revision": "64074ababbe80cb85652eaf017a78fec"
  },
  {
    "url": "assets/js/47.e648b137.js",
    "revision": "23c66fd33692b625bc8fff9a994833ae"
  },
  {
    "url": "assets/js/48.2e3d288f.js",
    "revision": "98b1be6269f894ef48ceffe2cb6ad620"
  },
  {
    "url": "assets/js/49.370011ef.js",
    "revision": "2ffcef2c84e5311bbf9a04fb88243bb0"
  },
  {
    "url": "assets/js/5.2d902ddd.js",
    "revision": "42cc03f9a2113e36d6e0788a288e529c"
  },
  {
    "url": "assets/js/50.34cfc431.js",
    "revision": "5e1c63939a88e6300b29dbdec56f4c33"
  },
  {
    "url": "assets/js/51.0858c3ca.js",
    "revision": "66585cae6662926fab7e5de5117cdf5c"
  },
  {
    "url": "assets/js/52.90bac46c.js",
    "revision": "860a97c612440a6e438f43232baf8e50"
  },
  {
    "url": "assets/js/53.51b81ec0.js",
    "revision": "374d3397ace1de2e182ebc2e49fce1da"
  },
  {
    "url": "assets/js/54.6eff0ad1.js",
    "revision": "a55ec1d052542665c8fc3db0b99fd0c3"
  },
  {
    "url": "assets/js/55.32dafaf3.js",
    "revision": "b87f53ded0ea32b5d8003a70216c133e"
  },
  {
    "url": "assets/js/56.f384b3d2.js",
    "revision": "9ebcae527c59f4709c58482ff858bccd"
  },
  {
    "url": "assets/js/57.6ea14d9a.js",
    "revision": "cc4ca6c62215f8abfdf565ba170706a3"
  },
  {
    "url": "assets/js/58.926779bf.js",
    "revision": "e81d9006cbe11807c3924908e7f59de5"
  },
  {
    "url": "assets/js/59.d6ab0f54.js",
    "revision": "6cefb6bfc34c76aed2b62aa00b6bc2b0"
  },
  {
    "url": "assets/js/6.2a12adea.js",
    "revision": "83644d12f2bc603b8f47f84cf3829194"
  },
  {
    "url": "assets/js/60.3ed306eb.js",
    "revision": "0a44d057e9b3f146a27dcd6050e508ff"
  },
  {
    "url": "assets/js/61.7ede9816.js",
    "revision": "d29202c7e2dae559d2890804ad8dacd9"
  },
  {
    "url": "assets/js/62.fcac76cb.js",
    "revision": "3aa68edba873547bafdda7766b3023ad"
  },
  {
    "url": "assets/js/63.36a241dd.js",
    "revision": "7167c7ce6a8793e8272fa8992eb5a021"
  },
  {
    "url": "assets/js/64.a02b5b88.js",
    "revision": "f992a33d02c30b1122096a04bc1d3f77"
  },
  {
    "url": "assets/js/65.6ee38f9e.js",
    "revision": "adf9f46eb21aed7d961bce84766be36d"
  },
  {
    "url": "assets/js/66.e9f03f87.js",
    "revision": "aea91e4ee7e958c41fe42834a543faee"
  },
  {
    "url": "assets/js/67.b694f53c.js",
    "revision": "1b74eff6c28acdb70a7f04ff71277afa"
  },
  {
    "url": "assets/js/68.4edab4c3.js",
    "revision": "65ac42ec75e1ebcaa512f572733e9c8d"
  },
  {
    "url": "assets/js/69.6b7cd390.js",
    "revision": "79cff9762d845898361140e546709142"
  },
  {
    "url": "assets/js/7.7b45b233.js",
    "revision": "fb254870392efd1868bad6a723337506"
  },
  {
    "url": "assets/js/70.50cd6ac9.js",
    "revision": "d34c14b5d5b7227d18d129a24cda7fb3"
  },
  {
    "url": "assets/js/71.c052b08d.js",
    "revision": "f4abc552b07dee2b429e11956857c033"
  },
  {
    "url": "assets/js/72.5a097134.js",
    "revision": "79db74023a8d684b3f15b245a4ac1474"
  },
  {
    "url": "assets/js/73.697acd99.js",
    "revision": "57786fb016b824d4eebf34da67711054"
  },
  {
    "url": "assets/js/74.41c78721.js",
    "revision": "f79ae77aaae12e3c696da9b2105880ac"
  },
  {
    "url": "assets/js/75.b5b2559d.js",
    "revision": "27a9656015833a22c725293e76f35533"
  },
  {
    "url": "assets/js/76.5a4d080f.js",
    "revision": "1a70e49d5b6aefe2833ed49e56310536"
  },
  {
    "url": "assets/js/77.84ea244c.js",
    "revision": "a966d21fc1a980702518993e24d52139"
  },
  {
    "url": "assets/js/78.3f534918.js",
    "revision": "ff3a1411565bda5c7fb00042918a7410"
  },
  {
    "url": "assets/js/79.45605366.js",
    "revision": "120f4282fe942567de52779fc5f22a0d"
  },
  {
    "url": "assets/js/8.3e042d85.js",
    "revision": "727da92991733e2c606da561dde92e51"
  },
  {
    "url": "assets/js/9.e088e972.js",
    "revision": "ffe8cc25becd6fa7a7117bdf57556955"
  },
  {
    "url": "assets/js/app.890fc267.js",
    "revision": "d52d376099ba353b97454a153f77de66"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "87f7b4ce6cf08c5e14e8c7c385e8de27"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "5c89ea1c38d985103440abadd35ea30e"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "50f9e6f2bed5aa4c3af3a35a8a799fb4"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "8c37df745beaa45c2f2e1aa859f3352d"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "941ffef8a2a156fe8060904bae435384"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "585311cf58d3be872bed9ff362fbbb05"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "efd843856cb30e791a1f5fc6c2035225"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "800929d9845c7c891d7dd187a6adfc16"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "07f739e098de222a5df8e012ac52ea8a"
  },
  {
    "url": "courses/index.html",
    "revision": "d2c2277cea9378ba28f04c07ea97e1d9"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "01b4c05a92c11e2049bfb93434b9bda6"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "d42af16580a529275e00c8f7a6ba801f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "0d741edb9c0565a737368d44cf3bd75d"
  },
  {
    "url": "courses/template/index.html",
    "revision": "715ba4c3132cc0ac99984a394e5c9976"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "73a3b12295bb2e53e758b7b04aa43f0d"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "23f6b4c884a08750b03405ada9d4f17d"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "6807deb43ddb1933283f980f58361af0"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "f75543624c4c036671dff68a600a4ba0"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "841e6699040453d83a442d6e4c59561d"
  },
  {
    "url": "index.html",
    "revision": "804972b5b7857bb832d11650c128421a"
  },
  {
    "url": "studyathome/about.html",
    "revision": "2b4858b7f5de398ce8c0ddccd3d8e05f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "541c2a10556dcefc74581010ba9d1d76"
  },
  {
    "url": "studyathome/help.html",
    "revision": "df9eb3c33cff2ff64321f952e0cab8cb"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "df41e6ce000e6f09657785b87dd8781f"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "5e685ffc799b1fadf1fe8d73b640e147"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "f66d93e56af10d92fce7b478e0587e13"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "182d2e11be75b5b58fefddaa251c9aab"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "852918c26b9b3ff942cb8ae877cfd90f"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "9f33f6ba9e2b2eed9c8c78249e0f7c20"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "5e685ffc799b1fadf1fe8d73b640e147"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "9d63e3e2d8237b92d65ba97130123830"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "10a3d1d992ccb072e099447168e2b0a9"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "69e0caf1d73ea1bb5b14f4cf3246a6d6"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "05e6c41807faabe058ad064edb123fdf"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "6d84a7ec4ad0ef32cd2a3fc25d8fd367"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "b039d3805d6457a0d6c2e18dbf722334"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "5a94d50126af577b26f8811ce24e022b"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "717a7f29a043998b87f6c0307d99e132"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "2eb163a534f78327c789761b2c8fb099"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "5dfb1a3a3c51b3ea2c9ec76673c78da8"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "79c6af8a071bdb0284e1ec0a4225da27"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "5e25c56d421ccd0189c1cb9402afea58"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "67186983b3be4e2674eb35d13fcfda85"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "c881af8ff2e6e637c5484f68302a648b"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "5e685ffc799b1fadf1fe8d73b640e147"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "cc345a73b329d796b847d8d12a024675"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "daffcfcd8b3e562cff28ff71045642b3"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "5611c2a42e999f357c6de3224741a1f7"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "83d9eb851ed891f7c556ef522de00047"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "b84e43d48be43ab275642d53b2764837"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "c57da1066a87719ba52a299a1b892c8b"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "3188c55b9a1756eecc704dd61e149d05"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "37f917d9fb48a3530d22f8467edb7982"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "c4461551a59a9fdef03a88475de8c168"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "f995b24b5f2ec473af0c0c3664bb2f85"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "f3edceac4915aa39a45ed112d10b1b90"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "543ecf6ce5f0c42cef47ce0e58bacffc"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "58e85e42c8bab92de7a152b5637f3a02"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "9b9619268484088c7e7021efe212006e"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "7d415c9babb82eff8c56c649534a4426"
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
