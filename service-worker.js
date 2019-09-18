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
    "revision": "fd6d92397010dd61d1ed5d780f70e742"
  },
  {
    "url": "about/index.html",
    "revision": "ce347d2cdb97e812ecdddbab76eed71e"
  },
  {
    "url": "assets/css/0.styles.c787eab0.css",
    "revision": "bc41022f35f2695046da895c9b321313"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4e947f15.js",
    "revision": "e203d1ce21b38db2347698cbe06675eb"
  },
  {
    "url": "assets/js/10.a63cee74.js",
    "revision": "74e0e70945416423e4c0a8606119fa56"
  },
  {
    "url": "assets/js/11.b6a4d7f5.js",
    "revision": "e4a35121d2ac576c547708eac3ecf892"
  },
  {
    "url": "assets/js/12.6876140a.js",
    "revision": "6dd94fba364f9794b766483ecec50783"
  },
  {
    "url": "assets/js/13.5e04c30a.js",
    "revision": "14fc69b8b9152f9544349fb436335344"
  },
  {
    "url": "assets/js/14.368f5be3.js",
    "revision": "1bea76f3f7dbc727dcadf18bccde42d7"
  },
  {
    "url": "assets/js/15.0c5f320c.js",
    "revision": "cdd0c5de77b9e8237b2b2bc47076fe09"
  },
  {
    "url": "assets/js/16.57c591ee.js",
    "revision": "1070d38ed575f4390d39a81b9a1bca28"
  },
  {
    "url": "assets/js/17.52e25d01.js",
    "revision": "d9adc1532aafc7d4acd55a50252282cd"
  },
  {
    "url": "assets/js/18.9c169cd3.js",
    "revision": "8135fdb4948f51bf5b230c271f4bbdb2"
  },
  {
    "url": "assets/js/19.49e5d3ec.js",
    "revision": "cb29e44c298450e03ef97cf06938cfc4"
  },
  {
    "url": "assets/js/20.589253bf.js",
    "revision": "79078123f089395fc6a6b1de4a6400e6"
  },
  {
    "url": "assets/js/21.cfef4898.js",
    "revision": "b575416b8a88f10ba73935bed73cedef"
  },
  {
    "url": "assets/js/22.72782f6e.js",
    "revision": "fe5bd8ec69a1cf23a22c6307e2f63068"
  },
  {
    "url": "assets/js/23.1b5a85b1.js",
    "revision": "404d217400b8872ab074825e3a960758"
  },
  {
    "url": "assets/js/24.7fe390e0.js",
    "revision": "2eb5cdf8a886cab635c0e0670ee28c8d"
  },
  {
    "url": "assets/js/25.2fa45e0b.js",
    "revision": "61bdac8ee1041bf656192ccaf85befa0"
  },
  {
    "url": "assets/js/26.7cb919a0.js",
    "revision": "39f25135d57b9b18aa8376fe497e1999"
  },
  {
    "url": "assets/js/27.d3ea76c3.js",
    "revision": "458ec9798dff1bbeab8eb9a80c0dc0ec"
  },
  {
    "url": "assets/js/28.7545f129.js",
    "revision": "6cf1c77f35c077fb62a4ce37a5816e4b"
  },
  {
    "url": "assets/js/29.091fba41.js",
    "revision": "fe11c83425d367a9a08cb51d42ea2160"
  },
  {
    "url": "assets/js/3.abb09c56.js",
    "revision": "3a4f32c557ca17ca29fb0ea30fdda214"
  },
  {
    "url": "assets/js/30.03a02c80.js",
    "revision": "7984343d4feca128a6b1ca374d104596"
  },
  {
    "url": "assets/js/31.b7b0eb67.js",
    "revision": "e26557612f644065e8f9cd84540d6326"
  },
  {
    "url": "assets/js/32.b2914523.js",
    "revision": "2a87cd3335a46f4f8679aac39ad994ad"
  },
  {
    "url": "assets/js/33.c4293417.js",
    "revision": "916c56a8d0624e7004cf77770177b46c"
  },
  {
    "url": "assets/js/34.cfe06fc9.js",
    "revision": "d76c73e6d28b7b97682a832d6eb68634"
  },
  {
    "url": "assets/js/35.7e93bda0.js",
    "revision": "57fa6d83ef91c5456066490c2c03a116"
  },
  {
    "url": "assets/js/36.5ee26cc5.js",
    "revision": "d883d7f2727273aec5bd880dbc3251b0"
  },
  {
    "url": "assets/js/37.fc39638c.js",
    "revision": "d3c27c3f0752305b6f01b23962272b17"
  },
  {
    "url": "assets/js/38.a8247851.js",
    "revision": "68b593da48f3e7d441082879ba5ba45c"
  },
  {
    "url": "assets/js/39.2a23723d.js",
    "revision": "9773446724093697933ae43d228a6560"
  },
  {
    "url": "assets/js/4.cd9bdceb.js",
    "revision": "580abf288c14dacf5d9934484250665d"
  },
  {
    "url": "assets/js/40.704420e1.js",
    "revision": "4cdd25647a1289160ae3ccd49e520a9e"
  },
  {
    "url": "assets/js/41.dc156c22.js",
    "revision": "11b8d8bf872fac11dd1c06f8f3dd375e"
  },
  {
    "url": "assets/js/42.60e4f383.js",
    "revision": "9f87713beed5a2c7f1a093bb31d22aca"
  },
  {
    "url": "assets/js/43.2ffc9d4e.js",
    "revision": "9426af8af4caacd1ac2b6610fb99b628"
  },
  {
    "url": "assets/js/44.d904d43e.js",
    "revision": "3430932e7f38dc39d65db498df12d845"
  },
  {
    "url": "assets/js/45.69bc69f3.js",
    "revision": "217aa9c2643269a5984caeb45cbb303a"
  },
  {
    "url": "assets/js/46.ccee1efc.js",
    "revision": "6b259fe1a9364d029c7187d07663dae7"
  },
  {
    "url": "assets/js/47.e2a1f7c9.js",
    "revision": "4ca7e97196ec93ec3436299c5ca40ccc"
  },
  {
    "url": "assets/js/48.a435d39d.js",
    "revision": "c348c0c2445074daee027b01f2325fb7"
  },
  {
    "url": "assets/js/49.775eabb4.js",
    "revision": "1ea4c98cfe0c89d94b4429787589af45"
  },
  {
    "url": "assets/js/5.126962f8.js",
    "revision": "ffd771c998c6c91901a52ef70155c3fe"
  },
  {
    "url": "assets/js/50.a65e80b1.js",
    "revision": "e3a39542ac5dd5846f5de5e08ac53f07"
  },
  {
    "url": "assets/js/51.242875ee.js",
    "revision": "42c210019fb2867f3c3ac7ac59f21b86"
  },
  {
    "url": "assets/js/52.28957acf.js",
    "revision": "21ebf761ffb30e862056bb67ce48570c"
  },
  {
    "url": "assets/js/53.b9afffb5.js",
    "revision": "bd1f431e66de948538cca1bdb0226144"
  },
  {
    "url": "assets/js/54.3f01e07a.js",
    "revision": "2392d03c4a23eea66d2d067e2e79b5cb"
  },
  {
    "url": "assets/js/55.88ee432e.js",
    "revision": "b5be0d863042626415013238766c5444"
  },
  {
    "url": "assets/js/56.2e7c4322.js",
    "revision": "60d51e754c50b4c546e724d91a72a39e"
  },
  {
    "url": "assets/js/57.15e4681f.js",
    "revision": "c897f6bf8981631e3e39b2adccb533a3"
  },
  {
    "url": "assets/js/58.9e022889.js",
    "revision": "3a24ed69f26f51b06f133ecfc1ee2552"
  },
  {
    "url": "assets/js/59.26665736.js",
    "revision": "c3eb89daf1bc4bcc95221e9159db7c50"
  },
  {
    "url": "assets/js/6.c3b164f5.js",
    "revision": "fa88b24505b0418fa1be7d9d3a8b8ce5"
  },
  {
    "url": "assets/js/60.19b20fd3.js",
    "revision": "f5f0dd3178df5fb0b6a2998034d6983e"
  },
  {
    "url": "assets/js/61.726ea26b.js",
    "revision": "0eb746b71f0d4c27bec8483649d7ccac"
  },
  {
    "url": "assets/js/62.9d18b724.js",
    "revision": "0cf527421c131a1767f5b211785bbb53"
  },
  {
    "url": "assets/js/63.da79e44e.js",
    "revision": "451728a6b7731f0495f06ea84467b428"
  },
  {
    "url": "assets/js/64.0232ad04.js",
    "revision": "2cffde77da9ca8169174443cc8e98699"
  },
  {
    "url": "assets/js/65.dc996f66.js",
    "revision": "22057df7fff9883dd475d72a27a67516"
  },
  {
    "url": "assets/js/66.bc6249ec.js",
    "revision": "1e3256c7c3d2c62b158196eb30001f80"
  },
  {
    "url": "assets/js/67.2576eef5.js",
    "revision": "81d9b6f69f6c47495bee5244a0a91fb9"
  },
  {
    "url": "assets/js/68.19cb824c.js",
    "revision": "220ab829ea2121a365a4c0996d0e6685"
  },
  {
    "url": "assets/js/69.8339f8fb.js",
    "revision": "2876848f11914b4eede4fc3a8c675651"
  },
  {
    "url": "assets/js/7.c21e36b7.js",
    "revision": "a0aa6682b438cb0848d86574233a0328"
  },
  {
    "url": "assets/js/70.45cba2fc.js",
    "revision": "d91cb8c111f1a0341ae04b0b3e39a481"
  },
  {
    "url": "assets/js/71.cce9037f.js",
    "revision": "4818924b4a2e1e7756de88c0e7350050"
  },
  {
    "url": "assets/js/72.b369421e.js",
    "revision": "570b1604410be12934a8d123062ae807"
  },
  {
    "url": "assets/js/73.b26f59a1.js",
    "revision": "68eb4cfad8afd60a4885fbeb0bb9d911"
  },
  {
    "url": "assets/js/8.e9ec39b5.js",
    "revision": "a8c73a29de2b901ea6a4523a478cc6e3"
  },
  {
    "url": "assets/js/9.1693447d.js",
    "revision": "c3e630d7de1442245abbeb691f421d91"
  },
  {
    "url": "assets/js/app.e34d714d.js",
    "revision": "f69e76dd8a13aa2b3b69fa25db1f1925"
  },
  {
    "url": "contact/index.html",
    "revision": "c1c41f56600ac9404400312dc3199905"
  },
  {
    "url": "courses/asterics-assistive-technologies/enroll.html",
    "revision": "a644c73413c829066a20b87528ad05b8"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "25c008ddbc762ad3dfef464423aaa358"
  },
  {
    "url": "courses/computer-animation/enroll.html",
    "revision": "948cfe69d4fc4cbbcadd47df08d0b1fb"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "7ec3dd83d7c7de9fbb31afaa10f55a65"
  },
  {
    "url": "courses/digitial-image-processing/enroll.html",
    "revision": "a155cf7dbe07576b1e17156300c5bb67"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "2b008c91ffe32c77e48eb251c0d3a3d5"
  },
  {
    "url": "courses/embsys-vhdl-1/enroll.html",
    "revision": "6f140d3d2500ed26655dc45e9bcf53c5"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "9b607d83bef674f19c9894cc51c6d5f3"
  },
  {
    "url": "courses/embsys-vhdl-2/enroll.html",
    "revision": "8c94c00fa5791355ed65c7a0f83f82ed"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "b478c6bd77e39eb62df56b4b3bfc0254"
  },
  {
    "url": "courses/human-computer-interaction-design/enroll.html",
    "revision": "b4c094520547951f66d82afc43544266"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "65dccd340d7b0feaf7581ecbefd0c378"
  },
  {
    "url": "courses/index.html",
    "revision": "c9c530ce08c97a8f061699366270777a"
  },
  {
    "url": "courses/iot-standards-procotols/enroll.html",
    "revision": "0db226a3d89dd3acd8d211ea476738e1"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "927cd2c3f5149b098999341eac85e910"
  },
  {
    "url": "courses/machine-vision/enroll.html",
    "revision": "9db64e74ddab169a22054a6a96e825d4"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "09d3c0f139927319fe0c3ad80473adec"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/enroll.html",
    "revision": "ea9c9b0eec924c3eb8cc38047da1d081"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "763deed8c15c4e4cc7aae6cc1551229c"
  },
  {
    "url": "courses/template/enroll.html",
    "revision": "8b0bfed9121d7c9df0f6e286a67abbe7"
  },
  {
    "url": "courses/template/index.html",
    "revision": "ff1f174355aca0c3225d57afc638fd22"
  },
  {
    "url": "courses/the-connected-car/enroll.html",
    "revision": "ccc930d6747e7bedfff1616191457c11"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "ed4d9808bb97c81497861acb0284c822"
  },
  {
    "url": "courses/user-interface-design-patterns/enroll.html",
    "revision": "3161e8dc336f48d3250c2733aa322202"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "b82150c4d050b4e23e884feb325d2ff1"
  },
  {
    "url": "general/enroll.html",
    "revision": "80ad400b6c2a6bdadd17c4ab5b7125da"
  },
  {
    "url": "index.html",
    "revision": "311583bd266451ff86f00a70058105d0"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept1.html",
    "revision": "0291e6dabc95000ed4ac250243980fe7"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept2.html",
    "revision": "e4c8dbdc16191f7a9b6f175bad9b93ea"
  },
  {
    "url": "more/e-learning-sharing/concepts/concept3.html",
    "revision": "3a61032cd39ab6d27c4eff61a673fc8d"
  },
  {
    "url": "more/e-learning-sharing/concepts/index.html",
    "revision": "2cf7e9294987623fb5d2ef7cac6853c8"
  },
  {
    "url": "more/e-learning-sharing/guides/guide1.html",
    "revision": "e7a47da80ae831ed1f9406ab499a4198"
  },
  {
    "url": "more/e-learning-sharing/guides/guide2.html",
    "revision": "3fee4d5c84536403bd37352e83e42fa7"
  },
  {
    "url": "more/e-learning-sharing/guides/guide3.html",
    "revision": "550d98c368a0e545b269e664a5aaa7e0"
  },
  {
    "url": "more/e-learning-sharing/guides/index.html",
    "revision": "aa4ccb7b4b68a10b9aa222858460c776"
  },
  {
    "url": "more/e-learning-sharing/join.html",
    "revision": "8e64dd5e4f8d9331af82142f1d5b4eca"
  },
  {
    "url": "more/general/about.html",
    "revision": "aac68fd655b1c3f8f4e8d0a644f26c87"
  },
  {
    "url": "more/general/help.html",
    "revision": "c0e0096bd9e2a9b8cfb59667e0b4fd08"
  },
  {
    "url": "more/general/privacy.html",
    "revision": "404dbf61bf211e384b5aa7a41e2d20bd"
  },
  {
    "url": "more/general/sitemap.html",
    "revision": "1034716fc1c5e340f4d663fafef9637f"
  },
  {
    "url": "more/general/terms.html",
    "revision": "301c2881cb12b47ad9036bfbd3884f0f"
  },
  {
    "url": "more/hub/guides/guide1.html",
    "revision": "14bfaa86c4e14f5d165b8cee85fe8727"
  },
  {
    "url": "more/hub/guides/guide2.html",
    "revision": "755b8938c50f28e91886fbcbc29b5333"
  },
  {
    "url": "more/hub/guides/guide3.html",
    "revision": "712b5b29e0ffe1e6d2ae37dad4cf6a77"
  },
  {
    "url": "more/hub/guides/index.html",
    "revision": "0ebdfee21abad718d4dc04a6de3439e9"
  },
  {
    "url": "more/hub/markdown.html",
    "revision": "169a1ba5d4653a2d7272cf6e80bbc5bc"
  },
  {
    "url": "more/studyathome/contact.html",
    "revision": "82378f62fa4162cc1eb7cd1702ecdf64"
  },
  {
    "url": "more/studyathome/partner.html",
    "revision": "d70f2e1023dd30cdedbfc0f74dbe67e1"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept1.html",
    "revision": "8b318ab2a3323f9d90884878f0c04844"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept2.html",
    "revision": "b12bca8b9c9018a86f21eff3c0d148f3"
  },
  {
    "url": "more/virtual-project-teams/concepts/concept3.html",
    "revision": "f6ce0e9b31608e3f267b1ed3711fdd1b"
  },
  {
    "url": "more/virtual-project-teams/concepts/index.html",
    "revision": "01ec00d4c0dde5d1ffb2764dd96aa7b6"
  },
  {
    "url": "more/virtual-project-teams/guides/guide1.html",
    "revision": "7ae04344bf04994636ab916203809387"
  },
  {
    "url": "more/virtual-project-teams/guides/guide2.html",
    "revision": "813511686bd25ca096188f8fa8e90f3c"
  },
  {
    "url": "more/virtual-project-teams/guides/guide3.html",
    "revision": "d78d8964beec617a80919c0a2d4d6b99"
  },
  {
    "url": "more/virtual-project-teams/guides/index.html",
    "revision": "9508262c72adc03e4cae45e43906e975"
  },
  {
    "url": "more/virtual-project-teams/join.html",
    "revision": "683afca751dc49fc1a2bda5d2f4e40f2"
  },
  {
    "url": "partner/index.html",
    "revision": "fdb331a83960b296f40793221525314f"
  },
  {
    "url": "partner/lecturer1.html",
    "revision": "b2513ab503002f3369c87a096a5d6200"
  },
  {
    "url": "projectteams/index.html",
    "revision": "565aea2ca966779cbec05488b67d8aaa"
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
