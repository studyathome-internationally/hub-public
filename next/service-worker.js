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
    "revision": "ea171d114d1d8e66874032bdfc61dcf4"
  },
  {
    "url": "assets/css/0.styles.91736106.css",
    "revision": "d43be87850b7bebaccb5950389ad627b"
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
    "url": "assets/img/logos/CV_MA23-orbit1_pos_web.png",
    "revision": "7c4bada1929ac5d3868dc7f4dd2709dd"
  },
  {
    "url": "assets/img/logos/CV_MA23-orbit1_pos_web.svg",
    "revision": "9a3aa5fea8181a51c9a4480d76fb9b67"
  },
  {
    "url": "assets/img/logos/FH_Technikum_Wien_logo.png",
    "revision": "6b684983902d736130300e319398bb9e"
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
    "url": "assets/img/logos/studyathome-noir.png",
    "revision": "53251ffb2ce8d8db176b44451cabc9bf"
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
    "url": "assets/js/1.7f3c3d8d.js",
    "revision": "c0bcb3d1c6ad9c48d3dbfcf6234fc0ff"
  },
  {
    "url": "assets/js/10.93d965fc.js",
    "revision": "1971823c8adcfede0c501172203d99ce"
  },
  {
    "url": "assets/js/11.ed50edd4.js",
    "revision": "18d0ad03edce71147eaa9087024c8497"
  },
  {
    "url": "assets/js/12.590b63aa.js",
    "revision": "fb9cee1532e1a94523b60510597c6802"
  },
  {
    "url": "assets/js/13.b78a53c4.js",
    "revision": "d3c94b0cdfab2a00a0e0d698e0a9d11a"
  },
  {
    "url": "assets/js/14.efb23d7f.js",
    "revision": "5dd14f034a90134c4bc7b97127cc0c49"
  },
  {
    "url": "assets/js/15.f112b195.js",
    "revision": "d7bf1675e86451facadb0b7db8d73c7d"
  },
  {
    "url": "assets/js/16.1de7635b.js",
    "revision": "b2ec29ea2de66cd36ced3bf89577c34a"
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
    "url": "assets/js/2.16b6a17c.js",
    "revision": "b687b7110b1f0d4a7a9e8054170733b2"
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
    "url": "assets/js/24.9ef74900.js",
    "revision": "b5f4298f1096ca47ae5e190f85706d55"
  },
  {
    "url": "assets/js/25.0d897a5a.js",
    "revision": "3f2f3b4e5525130137d4df6dea5dbc52"
  },
  {
    "url": "assets/js/26.c245096f.js",
    "revision": "054c4429be280ad8fb13533336f31abc"
  },
  {
    "url": "assets/js/27.f0993c88.js",
    "revision": "883c928ed9d9b9797713bf878003a3de"
  },
  {
    "url": "assets/js/28.553f897b.js",
    "revision": "5dc2bfc78312d53ef691656213fe5b07"
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
    "url": "assets/js/34.4be1c84d.js",
    "revision": "21973fecdac068e4026f68239db07790"
  },
  {
    "url": "assets/js/35.0e99ce22.js",
    "revision": "e51f61ec9b37cfd2c0be803739ec7b11"
  },
  {
    "url": "assets/js/36.380aa343.js",
    "revision": "8ca3a6de8acf2de71ed9bcc9047de883"
  },
  {
    "url": "assets/js/37.0fb54ed9.js",
    "revision": "bd2e229d2a1056aa2ef2157ea0d42a89"
  },
  {
    "url": "assets/js/38.e1c9fb6e.js",
    "revision": "a801f022c7e5840958eb6f2daf3bb897"
  },
  {
    "url": "assets/js/39.986bc5e3.js",
    "revision": "34cf1d8bbe3df8372d5b2e82cb37bd64"
  },
  {
    "url": "assets/js/4.44112b96.js",
    "revision": "6ec694c83b018c8d9f634e8a85773754"
  },
  {
    "url": "assets/js/40.2a3bfe42.js",
    "revision": "075cc10c4f7361dc75acee163eae8b2a"
  },
  {
    "url": "assets/js/41.48001487.js",
    "revision": "cedb5d50cac4abfd900357a428ec9028"
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
    "url": "assets/js/44.c56d6ca5.js",
    "revision": "f71f5caf13a58b542a75c2c92776702b"
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
    "url": "assets/js/47.1693d996.js",
    "revision": "28afaed1caaff09207ea5e0054988e14"
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
    "url": "assets/js/5.f8d2ed41.js",
    "revision": "7fdc2516ed453e5abd1e55a786f5bd96"
  },
  {
    "url": "assets/js/50.ded955cc.js",
    "revision": "f10f6da0ccc6664eb2f76577cd28aa42"
  },
  {
    "url": "assets/js/51.9ed30c48.js",
    "revision": "964cf7949f273866e76685b730a89b71"
  },
  {
    "url": "assets/js/52.a11d3b33.js",
    "revision": "f18f0832ed063dcbf61b2fab34350a9c"
  },
  {
    "url": "assets/js/53.c8c0f0d3.js",
    "revision": "66f4df663a432faea53c86eda6a92215"
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
    "url": "assets/js/56.d5621983.js",
    "revision": "6902b02574e277e5ea9e7b9769bd4ee7"
  },
  {
    "url": "assets/js/57.8e15b338.js",
    "revision": "35c56bb15aa904d73a5721d9a11478a9"
  },
  {
    "url": "assets/js/58.eb012e46.js",
    "revision": "773130bf14d3bc62f4d9aff56172142a"
  },
  {
    "url": "assets/js/59.479dcaf4.js",
    "revision": "a1011c2f5217d604bdf3da529fc9372c"
  },
  {
    "url": "assets/js/6.3fced5ad.js",
    "revision": "21c79faaee14f8c36cb797eb62478e7b"
  },
  {
    "url": "assets/js/60.ccdce02e.js",
    "revision": "9184f5a759938822784e513d0dcbddfa"
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
    "url": "assets/js/64.8a26ac98.js",
    "revision": "908a4c31c28366119beb85643ed32a0a"
  },
  {
    "url": "assets/js/65.28b1b92a.js",
    "revision": "c3812974ce7bd3e84d0e4df192ed6e1b"
  },
  {
    "url": "assets/js/66.4ffb3669.js",
    "revision": "f78bad9f1edbb04e1ef68a54811599b3"
  },
  {
    "url": "assets/js/67.4e93f5b6.js",
    "revision": "82da70158d927f4a77af63d572ab852f"
  },
  {
    "url": "assets/js/68.5184550d.js",
    "revision": "05f9a023567cdd5353ffacfcc4cdcda4"
  },
  {
    "url": "assets/js/69.621fa259.js",
    "revision": "4b96a7ec989fe54d095b95b1a1fbc0d7"
  },
  {
    "url": "assets/js/7.85e763d4.js",
    "revision": "b4b3d51b3088621040d1ee343ef4292d"
  },
  {
    "url": "assets/js/70.1a203ed9.js",
    "revision": "e0f9de92287ad7301ddbaef370558f93"
  },
  {
    "url": "assets/js/71.fab2f2b8.js",
    "revision": "88f365ee3496aa30b985d1754cdad52c"
  },
  {
    "url": "assets/js/72.16b74bd8.js",
    "revision": "f3ac706b30eebd3398b627d3931a187e"
  },
  {
    "url": "assets/js/73.fcfa6ef3.js",
    "revision": "5d571efff83ec46d9fcd3d05e96e3449"
  },
  {
    "url": "assets/js/74.2d019b0f.js",
    "revision": "ac2e83680ed2721c4c78248500d48476"
  },
  {
    "url": "assets/js/75.2dd29483.js",
    "revision": "2306708dc8e5c9901ae5bb62efc8a271"
  },
  {
    "url": "assets/js/76.672daf0c.js",
    "revision": "54381f88ef6e654993df0bad07c34f33"
  },
  {
    "url": "assets/js/77.25947cae.js",
    "revision": "bf81527d22272411705b1d4f808ffa81"
  },
  {
    "url": "assets/js/78.fbe87afc.js",
    "revision": "981dd9a3a3bcfd391ef88798e523aa4c"
  },
  {
    "url": "assets/js/79.12d1c185.js",
    "revision": "b09df3cfda5d3a2aae48c8b7ab975d22"
  },
  {
    "url": "assets/js/8.8caa5ef9.js",
    "revision": "7a1da62b1b5ec88e796a3bca45e9f508"
  },
  {
    "url": "assets/js/80.688e6f53.js",
    "revision": "77c33f3b93deca6d31cbc16ec31d396a"
  },
  {
    "url": "assets/js/81.3774c42e.js",
    "revision": "71925e17a129b41ba8f00b811726524b"
  },
  {
    "url": "assets/js/82.e26f92b2.js",
    "revision": "f7da701292b4c7a3f4a1cd8bd9664cfd"
  },
  {
    "url": "assets/js/83.22e1643a.js",
    "revision": "dac516816d6f79fd65ca592ab913ed0f"
  },
  {
    "url": "assets/js/84.4b81837a.js",
    "revision": "95b3191c468f4383b84b6b9e46e6189c"
  },
  {
    "url": "assets/js/85.66c8691a.js",
    "revision": "2240781b6a618e84cd533e64e3a5c831"
  },
  {
    "url": "assets/js/86.394c59c1.js",
    "revision": "9c6153b63345de034ab252bc90ce3f97"
  },
  {
    "url": "assets/js/87.bdebab18.js",
    "revision": "e14f314ce3cc2ed47990282737e2904e"
  },
  {
    "url": "assets/js/88.2c28202e.js",
    "revision": "9c973bbfc5a366eef2a2edd00320b82b"
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
    "url": "assets/js/app.5e5081ec.js",
    "revision": "15621822494276d18933ae0f510c7b8a"
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
    "revision": "2e9a02e808ea5fb0b38df8a0ea433aaa"
  },
  {
    "url": "courses/assistive-technologies-basics/index.html",
    "revision": "8183ff18586c3c77deb7ad9c642cdac8"
  },
  {
    "url": "courses/assistive-technologies-hands-on/index.html",
    "revision": "99b6db07daf7e88aa0ca4575208bb590"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "79f7a61582b1d5950f2ddf845714e5dc"
  },
  {
    "url": "courses/data-ethics-and-open-data/index.html",
    "revision": "60d3f6f078566edcdc2cee9eef2ca699"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "dd333223a6a11de74f18372c4dbccb64"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "cc107542fd1dc9905d42145d2f880ff1"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "1ccb5ecb88c4b2dae6a747387227135c"
  },
  {
    "url": "courses/enroll/index.html",
    "revision": "635b39da1e11f7a0bf61fc4841adce36"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "6dba91f823bee33a1bebcb5949b14ace"
  },
  {
    "url": "courses/index.html",
    "revision": "f94149759d602dbc78f54160aa56c273"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "39823f15a3a9573a1a87d04c117a3a6e"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "6bde834736eaeb4fdec0612568e15ca1"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "bde07623ae56a928f7c231d095d711e2"
  },
  {
    "url": "courses/template/index.html",
    "revision": "5fe98ac6616e1a7d8ce293ffe59cac41"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "e5375dfb532dcec2185e9b608ded6c1e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "9de127a27b01070c5c9dcf56cd8fea95"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "84ae8ce8204f9fc3111239852509c440"
  },
  {
    "url": "e-learning-sharing/glossary.html",
    "revision": "6d297af2249f55cd4cf59f28015c3a72"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "5384bd71bc10d08289484dcbe6c0c894"
  },
  {
    "url": "index.html",
    "revision": "ad6ef75c2c8142abbb8fe7d5be7ec5b9"
  },
  {
    "url": "studyathome/about.html",
    "revision": "5f92efa6fbddc20380d7287e4581e747"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "5f798b564e662356aa5e4e739cbb64a4"
  },
  {
    "url": "studyathome/legal-notice.html",
    "revision": "9459fb375bc9d01e188eb63d32d737d5"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "d4ca3c932be88f2abf56cac0d9efa491"
  },
  {
    "url": "studyathome/partner/ctu/disclaimer.html",
    "revision": "692b715060404d27d7b5e38dd2c67530"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "d5bf078ed91c1cb2c51e3d654f95e94d"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/lenka-lhotska.html",
    "revision": "946812cac85dce9f9543a9dfe536befd"
  },
  {
    "url": "studyathome/partner/ctu/lecturer/martin-macas.html",
    "revision": "03cbab7e398179223245814c5b308d8b"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "ff81e7ed04e55484efa904dff6ca0b61"
  },
  {
    "url": "studyathome/partner/uastw/disclaimer.html",
    "revision": "45ff48759f891d4c6f870c1f2fdda494"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "7a6150e8c85276c2d97ff44f6c9f3255"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/alija-sabic.html",
    "revision": "9129c9a926d81604135d12d202090b54"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/andreas-puhm.html",
    "revision": "69c83f91f53bf12aad3829877a717b3c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christina-hochleitner.html",
    "revision": "9af2c1a83770372c76911289dbaa465e"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/christoph-veigl.html",
    "revision": "44bb7b766b0c538e32133004549c2da3"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/iris-nemec.html",
    "revision": "df1f6b53d12790bd0af372b450e0805b"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/lukas-rohatsch.html",
    "revision": "7ec46bb780b3d34c7cf5b3e304e82c2c"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/martin-deinhofer.html",
    "revision": "4a5a425119f185daa1d9cd57629646f2"
  },
  {
    "url": "studyathome/partner/uastw/lecturer/michael-graf.html",
    "revision": "79407e1b471e4458c2fcdd84b4af9045"
  },
  {
    "url": "studyathome/partner/ukim/disclaimer.html",
    "revision": "ea171d114d1d8e66874032bdfc61dcf4"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "eacf4fc037d017da4b623dab7bd86696"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/andrea-kulakov.html",
    "revision": "e17c9d1d10d1c05ef2693f1a764c8b5a"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-chorbev.html",
    "revision": "71ca71764ad103108504a1093e5ab4f1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivan-kitanovski.html",
    "revision": "7464d1cdb12c3c1b956b38ecf7c3912c"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/ivica-dimitrovski.html",
    "revision": "18d1b39c401a0de264b904ce8a6628ec"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/nevena-ackovska.html",
    "revision": "831bf59906869d96f741a5b610f630b1"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/petre-lameski.html",
    "revision": "8831e9ee344020077829893f3bff7b50"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/sonja-gievska.html",
    "revision": "fccc414bf08ab208bf1e686e424dc5b6"
  },
  {
    "url": "studyathome/partner/ukim/lecturer/suzana-loshkovska.html",
    "revision": "ea01e892386fec8c2c0fff7204d47cc5"
  },
  {
    "url": "studyathome/partner/wit/disclaimer.html",
    "revision": "45ff48759f891d4c6f870c1f2fdda494"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "e3d373dabb895bd74b4cb551f55b7064"
  },
  {
    "url": "studyathome/partner/wit/lecturer/brendan-jackman.html",
    "revision": "b982c7beab01e294c69a5b57cda6542b"
  },
  {
    "url": "studyathome/partner/wit/lecturer/frank-walsh.html",
    "revision": "8290710b05fda110e7ca81c5f6ab1b2f"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "01fdba8751af3bfd41304f612d2fe048"
  },
  {
    "url": "studyathome/summer-school/index.html",
    "revision": "b2bd0d4ce162a2e01c51a7e88af94495"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "f29574348e1a718188f014822f46c436"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "8fe977c91dc37a0884db4a24763d661d"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "91a75ef8122bdbcc2a8a0da718824285"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "dc798380aecc60c4f8a9a9e077efff84"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "c0f138586a1074c41423f1da63d602ef"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "3a6f7784c64041309f05cfc11ca2d487"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "704e0b91f930a432d42d47f3269c215a"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "55ed92b14ebb4b4e426464b00f8696a8"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "412d727500080a1f37123f99e37ef724"
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
