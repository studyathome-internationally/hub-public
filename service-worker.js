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
    "revision": "06d5a505c8041ab29c404fd101caba76"
  },
  {
    "url": "about/index.html",
    "revision": "820291e52be76f8313159d157c1f83f2"
  },
  {
    "url": "assets/css/0.styles.8c7c7cbb.css",
    "revision": "2a8307eff9c77099140a9d02b428eb31"
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
    "url": "assets/img/logos/studyathome-noir-circular.svg",
    "revision": "6892f6e0f75fecfd78404879bfdc639c"
  },
  {
    "url": "assets/img/logos/studyathome-noir.svg",
    "revision": "0747fffa96b77aca8bbd318ee6957060"
  },
  {
    "url": "assets/img/partners.7aac2755.svg",
    "revision": "7aac27559dd4d67df795f33ced45b0df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e281c407.js",
    "revision": "6c44e1701504a2571d183497ddae5601"
  },
  {
    "url": "assets/js/10.e0b64f95.js",
    "revision": "d04285bd7110f9bb61c8ecb4a414fcc0"
  },
  {
    "url": "assets/js/11.c7a1ae07.js",
    "revision": "06070bc7498afbdb9bf83fec88676a9e"
  },
  {
    "url": "assets/js/12.4ad459b4.js",
    "revision": "31d8effde070e15f6d1701ee6fac2b1d"
  },
  {
    "url": "assets/js/13.3a93d921.js",
    "revision": "a7a1bf3f0c29016de09b2af08bec615d"
  },
  {
    "url": "assets/js/14.eaf095f1.js",
    "revision": "4285da64b24a4ac514445a1efe64cf24"
  },
  {
    "url": "assets/js/15.d0876314.js",
    "revision": "b5488124e10a4a0e7612d1d439817aa6"
  },
  {
    "url": "assets/js/16.f178ec1f.js",
    "revision": "781cc6c65080f6b6ab3fff1d45433f61"
  },
  {
    "url": "assets/js/17.361efc2e.js",
    "revision": "60fd4cace6a3930f02c95899974d6159"
  },
  {
    "url": "assets/js/18.c11c3b64.js",
    "revision": "8086dd1d17d1b405d3dfdeb348e638e2"
  },
  {
    "url": "assets/js/19.7c9f05db.js",
    "revision": "1a7c7243a0d12697738c8c68b43ead8e"
  },
  {
    "url": "assets/js/20.1010e529.js",
    "revision": "cd7c91579a19b4b9e5ef933644a0ae5d"
  },
  {
    "url": "assets/js/21.2d8cf6f9.js",
    "revision": "11b1c3a900c7a311c81c97468ab9de43"
  },
  {
    "url": "assets/js/22.ccb352b5.js",
    "revision": "a5b249a5d3db284464570f458931371a"
  },
  {
    "url": "assets/js/23.a11116d2.js",
    "revision": "c1cd1e4b3c77c32856261c5cdff01492"
  },
  {
    "url": "assets/js/24.3a648bbb.js",
    "revision": "a1baa48c53a77e2481b6b36e127ef5e7"
  },
  {
    "url": "assets/js/25.f6d1e91c.js",
    "revision": "f28d770d201a87b533c4173cbdb7b51d"
  },
  {
    "url": "assets/js/26.639b09e7.js",
    "revision": "89caaf43948d119bd003a5c9a8d26ace"
  },
  {
    "url": "assets/js/27.da55510d.js",
    "revision": "dafe0174f4a82199541f02b4229a15d2"
  },
  {
    "url": "assets/js/28.50e62b96.js",
    "revision": "775e4b1d7e16eed11121bf0618de696f"
  },
  {
    "url": "assets/js/29.268b7cba.js",
    "revision": "b0c650ec982234d4d2b4b525df31fb0f"
  },
  {
    "url": "assets/js/3.d3a3750d.js",
    "revision": "90e3d6312ddc3d495903db5219122f08"
  },
  {
    "url": "assets/js/30.b5f47dcb.js",
    "revision": "2c8f4630f323eb2a652dca3886239346"
  },
  {
    "url": "assets/js/31.91a036e3.js",
    "revision": "b52b8bda7a857754d48006bd58d7330f"
  },
  {
    "url": "assets/js/32.2f0f2ffa.js",
    "revision": "65833bbc896b043c5675c175289492fc"
  },
  {
    "url": "assets/js/33.66b3f3cd.js",
    "revision": "630ae6bf9e4c188a3abf0d40562d9fca"
  },
  {
    "url": "assets/js/34.ab9a20b2.js",
    "revision": "3b3b77df4455503f6f2e6055a7bbd5af"
  },
  {
    "url": "assets/js/35.a96f775e.js",
    "revision": "cb1e84c8afd7d02bba570ba783d2dc1a"
  },
  {
    "url": "assets/js/36.76eecb2c.js",
    "revision": "4763d498e300b9ae2c7c46e7299bbaa6"
  },
  {
    "url": "assets/js/37.18ed6daf.js",
    "revision": "523d09325fb5ec716d9bb1ebd88648e6"
  },
  {
    "url": "assets/js/38.bb38d82b.js",
    "revision": "0a1cd872acf7061d563b70a34887ef61"
  },
  {
    "url": "assets/js/39.beb274a5.js",
    "revision": "68de9d13f4c59e35f47f772ce405a807"
  },
  {
    "url": "assets/js/4.9e28cff8.js",
    "revision": "0087d1aef53a4114f54b344bf52a3579"
  },
  {
    "url": "assets/js/40.5d84ff6f.js",
    "revision": "9f610b39f042453bd56f9d706c35caf5"
  },
  {
    "url": "assets/js/41.3b896ba9.js",
    "revision": "1b4e69547b9235abd00203442e5ec474"
  },
  {
    "url": "assets/js/42.dab20625.js",
    "revision": "261c1e041ca8394e75b031a66589810b"
  },
  {
    "url": "assets/js/43.1d506f15.js",
    "revision": "8483d18c9b7fe11e7b71594e5882a15e"
  },
  {
    "url": "assets/js/44.298b43cd.js",
    "revision": "b107b89a8c8296d9e7c390162dcfb5ac"
  },
  {
    "url": "assets/js/45.d45e4710.js",
    "revision": "63025124a14c6875b2d014b546f9d89c"
  },
  {
    "url": "assets/js/46.a7daf948.js",
    "revision": "f87cb565a3aca8973825ad889776c207"
  },
  {
    "url": "assets/js/47.89b0e933.js",
    "revision": "cf4e4aae23f09228202a0f1abd54320a"
  },
  {
    "url": "assets/js/48.6b430832.js",
    "revision": "5dcc162da33e44b25e1069f1f5f891ae"
  },
  {
    "url": "assets/js/49.2f88f897.js",
    "revision": "f490e4ad5f0d498ff3fe727fad809099"
  },
  {
    "url": "assets/js/5.ed8e3252.js",
    "revision": "eafe23fe4154a66c4e5785c7ea944c82"
  },
  {
    "url": "assets/js/50.2a475558.js",
    "revision": "6db0a6df9d4e72789602bae87f5e181f"
  },
  {
    "url": "assets/js/51.ce080333.js",
    "revision": "c61134a9d7d2d267ac5ff9df48d0749a"
  },
  {
    "url": "assets/js/52.00b3c7fb.js",
    "revision": "614f74eff6d7c1b8ad3448462f842bc3"
  },
  {
    "url": "assets/js/53.4127d196.js",
    "revision": "698b2e1ad8807471802f528a23c28283"
  },
  {
    "url": "assets/js/54.218b2f57.js",
    "revision": "01458da4877e7f9b72c2e807afdfb0a0"
  },
  {
    "url": "assets/js/55.4c6ef4e3.js",
    "revision": "812c84f929802758372b8e342e5b02cf"
  },
  {
    "url": "assets/js/56.c02f0d8b.js",
    "revision": "2edd28951df585c80014189cdebccb03"
  },
  {
    "url": "assets/js/57.7d043a1f.js",
    "revision": "f600e39e3364ca18453eef0985207b8b"
  },
  {
    "url": "assets/js/58.57824d43.js",
    "revision": "7fd2556d5376086a12c0c904055be3bd"
  },
  {
    "url": "assets/js/59.7d3c05b3.js",
    "revision": "f69dde111fc7b63a7249b28941f4190d"
  },
  {
    "url": "assets/js/6.186530c7.js",
    "revision": "3b2bcdd03da693fcfd260f766996c336"
  },
  {
    "url": "assets/js/60.66f634cd.js",
    "revision": "f2ecf609729be2f95f2ddbc0e00d59d1"
  },
  {
    "url": "assets/js/61.5e0bfe7e.js",
    "revision": "9420671551fd71d8854948dc7a1a6d8b"
  },
  {
    "url": "assets/js/62.274d1163.js",
    "revision": "8a556c8c2bc6b6dbdb13e65050e631d1"
  },
  {
    "url": "assets/js/63.71a98ab2.js",
    "revision": "133e74261cb450c517a8cb381437c614"
  },
  {
    "url": "assets/js/64.f65c643c.js",
    "revision": "d5ff61b86326673b4941e3f7d3681963"
  },
  {
    "url": "assets/js/65.d67cd4db.js",
    "revision": "e90795bc2fc518c3e10b14167ff16570"
  },
  {
    "url": "assets/js/66.73f247e4.js",
    "revision": "8a86a493668eb45927bc61972067efe1"
  },
  {
    "url": "assets/js/67.ab9bc72e.js",
    "revision": "e2825fe24cf3cc8005953238e846e6cb"
  },
  {
    "url": "assets/js/68.176fa52b.js",
    "revision": "e5ded95e780e72f771963ccba6cdcb14"
  },
  {
    "url": "assets/js/69.6da2a6f1.js",
    "revision": "25e6268629ecccc7846936a3113c6e1e"
  },
  {
    "url": "assets/js/7.e7814182.js",
    "revision": "314e881cde319b9881197d1e7395a8cf"
  },
  {
    "url": "assets/js/70.69dd096a.js",
    "revision": "e23bf13bfd5a327fc9707781d78eef70"
  },
  {
    "url": "assets/js/71.3a6907b6.js",
    "revision": "a6dbc3f9e3e7bb6a4a39b3479e8a6153"
  },
  {
    "url": "assets/js/72.893d9a36.js",
    "revision": "845e6cbd29f223410a8728f697219e59"
  },
  {
    "url": "assets/js/73.5a1e7636.js",
    "revision": "91b94a187debdfd819448bcb883181e2"
  },
  {
    "url": "assets/js/74.111f6196.js",
    "revision": "3ea4458bd732ca5822d8cba9f922ced2"
  },
  {
    "url": "assets/js/75.240747b3.js",
    "revision": "7a010cdefaa705c46420281b38ff773e"
  },
  {
    "url": "assets/js/76.5e186900.js",
    "revision": "32ad7a658b90390df813ef99f84dfb96"
  },
  {
    "url": "assets/js/77.30a6982e.js",
    "revision": "c9e04ac8e9c4546e66c1fb24085c60be"
  },
  {
    "url": "assets/js/8.877aeb78.js",
    "revision": "bf140f8bd867ba5f52a3dffe1cbb70fb"
  },
  {
    "url": "assets/js/9.c2cde35a.js",
    "revision": "6c60353c833fbc8be632220fae6f2262"
  },
  {
    "url": "assets/js/app.bcb78a89.js",
    "revision": "ecf35e9413c0121a9bb0aa740dac1301"
  },
  {
    "url": "contact/index.html",
    "revision": "7ff2dd60708cbc8f26fb170cf943a5c8"
  },
  {
    "url": "courses/artificial-intelligence/enroll.html",
    "revision": "f6c3db3ae74a3a78a59f6c8246e82c26"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "02dd8a338d855a0346893d3465a9ed50"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "57529e012def3254f30289c118179df9"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "1decb72ac8da4c8a3c8ef4dac5279751"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "7cd92f31e8200dc03c2e2574d9980776"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "a83c5c8a05847a6708c63ffbc1b55fa7"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "ca815da94139bbd4d335a7c5f464c6a1"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "e500cca79c5e9d37248f9100788423c7"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "7d5aeab67d4ba2ae53db409d75a88c34"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "ba3053e3329fe39c99567816f9ef4d10"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "d79480ee3d3c3fe4b8ad10b7776be362"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "2ffad90728d4f7b84f352992576d1662"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "cd64128e28dad4e1a11c40646252734b"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "ec6ab0b7d258149e2ef4af57a7249a05"
  },
  {
    "url": "courses/index.html",
    "revision": "9107359ce760cd4456af153d2c125373"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "1b6b9bc9180e1378f9bd6e547da0d2db"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "82cf807e3b17c1b73812ae5e53aa263b"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "e22341b849ca6eec78fce627953e8fac"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "4317e19b0591d8bfa1e16da8ff4ddf22"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "61ee8f9e024d4b816613fcf4d56a1e8e"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "39e35bcc2d03de39a5225ac7274e419b"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "716a3d662fb65988a1863ef3e75fb6aa"
  },
  {
    "url": "courses/template/index.html",
    "revision": "09bb837ad9b2a980dc2a8671ea3460ea"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "47cabf619dbde4842c297218c188b4f1"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "fd4ec80ff8e0899dac23f8e0e22663ed"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "04bc53e98bf098dcd57f11e369d04471"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "28542baec0cc1797c92ebfe18e74c38b"
  },
  {
    "url": "e-learning-sharing/concepts/concept1.html",
    "revision": "090fd8ca5e69719ea00e59e8f99fc14d"
  },
  {
    "url": "e-learning-sharing/concepts/concept2.html",
    "revision": "58d05f44c195cde4be95f665c5f314aa"
  },
  {
    "url": "e-learning-sharing/concepts/concept3.html",
    "revision": "00d902328e49d1e98af6a8556b34e9ae"
  },
  {
    "url": "e-learning-sharing/concepts/index.html",
    "revision": "45b2582ecec73bdf4739a5b579fef1d7"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "c55cabf9d6fb8b9df4cd3b17f04e0317"
  },
  {
    "url": "e-learning-sharing/guides/guide1.html",
    "revision": "c947f93c05e14c0c746167ab28767860"
  },
  {
    "url": "e-learning-sharing/guides/guide2.html",
    "revision": "10ec3afc2e07c586f0f57ef618847b97"
  },
  {
    "url": "e-learning-sharing/guides/guide3.html",
    "revision": "4bcac742bdb1f2cc602b05b11817f318"
  },
  {
    "url": "e-learning-sharing/guides/index.html",
    "revision": "a790db995312a75bd3dffd12007bfbe5"
  },
  {
    "url": "general/enroll.html",
    "revision": "5f85148df59f021824b4a284abb2f4dd"
  },
  {
    "url": "index.html",
    "revision": "f498154cc52088755d50de34a14777e7"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "e606e4adbb7274df6adaf1bded801956"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "1e259c3cf4148e12b1c51904526fc252"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "af1e39de5719b37da433b61ef225a2eb"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "f00adba385a1e71afd85c438b19f5322"
  },
  {
    "url": "projectteams/index.html",
    "revision": "1f0b0f1ff0f1cb7594d0da93af3490b2"
  },
  {
    "url": "studyathome/about.html",
    "revision": "67ae71044a62b86830b4694b1ebccad2"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "f562bcda35a869e6ccb01592ec727eda"
  },
  {
    "url": "studyathome/help.html",
    "revision": "ac837145fe0b6753afefbf94a49f743b"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "d0576f0e847323d26b6d195d381c22e3"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "393ba9a585218420859cbd251407f690"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "8353f955e0033efd50a570b6d8ce312f"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "18404823b0691aa09df6f6bc0cd786fc"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "6624ddf08658570d50872ac8120525c1"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "e296208cce3d2d81bf533cb72617fc3a"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "f52c3e92a09e66bc82a4e196f8a28aef"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "e1d6a42af01bc461ba6613262d19c5ef"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "fcd6134cbdd0d23064a104dc458242c5"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "61f5d20b8138ef66fa6facbb66675606"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "e48eac53bf77a072ab9381faee3e637a"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "37dc65c13f7679e0c06244a0c1821ecd"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "e0d426a9f73d1785f58449ea3de1af59"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "e7e31f388b4cecb481ff448eb92267a1"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "eea6753e02c25c08d89e99f98ad6a717"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "ea5199458e900ea8633a1c7ae4451315"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "18e2c15cf01c813e4391d5ef61da8beb"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "b904ebb2d3864b46f664dc998a9cb71d"
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
