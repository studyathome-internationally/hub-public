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
    "revision": "b2f9300b3e02dd712ee8623adc579368"
  },
  {
    "url": "assets/css/0.styles.5bad923b.css",
    "revision": "debbdbf6bea4a6e64559eafaa6bf3b94"
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
    "url": "assets/img/800x600.png",
    "revision": "eb2a1976be398fafb5427d5ca17b5bc8"
  },
  {
    "url": "assets/img/courses/asterics-grid.jpg",
    "revision": "7f95fcce808d500d117e5f25bd1d7345"
  },
  {
    "url": "assets/img/elearning_course_sharing.6c9d66b1.svg",
    "revision": "6c9d66b14535dd4a114b3e532acc3c7e"
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
    "url": "assets/js/1.0a9050eb.js",
    "revision": "00705941da3a8f9d853aab822685ecfc"
  },
  {
    "url": "assets/js/10.dbf0d6f0.js",
    "revision": "33c9c67656b909bd9fc0ed4859035b08"
  },
  {
    "url": "assets/js/11.26bbfbdd.js",
    "revision": "557588412ea326c68dfe2260b2ed683e"
  },
  {
    "url": "assets/js/12.124983c9.js",
    "revision": "bf373240f950c7b38c3d60bc57c91703"
  },
  {
    "url": "assets/js/13.9fada8b7.js",
    "revision": "d5e5a632c16e40db78815d53be468223"
  },
  {
    "url": "assets/js/14.bf4fae6d.js",
    "revision": "198e7a80c4a8f549b6de48652a644a16"
  },
  {
    "url": "assets/js/15.84418550.js",
    "revision": "91da90baa2e40875166a7b7387f1c84a"
  },
  {
    "url": "assets/js/16.de5b5513.js",
    "revision": "3c35f1f3974245caa43a5ed54647b8bc"
  },
  {
    "url": "assets/js/17.4e6ad63b.js",
    "revision": "71593c393c1ad0a99a6b6d8a15c653c5"
  },
  {
    "url": "assets/js/18.8d3cbb61.js",
    "revision": "1be1d8bbdf50444f0d512dab1b302c30"
  },
  {
    "url": "assets/js/19.af23db1c.js",
    "revision": "c085e1036bea08e3bf51dd6e81dccaea"
  },
  {
    "url": "assets/js/2.256f4ace.js",
    "revision": "f1ceb6335f652fb677e685e04e31867b"
  },
  {
    "url": "assets/js/20.6f846bac.js",
    "revision": "032f52b8cb476ec318dc22a31b7b6363"
  },
  {
    "url": "assets/js/21.8acfa5e3.js",
    "revision": "fcb51d266fb89ee7f8a80cf67d826b36"
  },
  {
    "url": "assets/js/22.c6a4f439.js",
    "revision": "ad6c93ce7652611d8fd23026c2141802"
  },
  {
    "url": "assets/js/23.0b7c7491.js",
    "revision": "516cd4c889c353888d311aca8100f4d8"
  },
  {
    "url": "assets/js/24.3155bbc1.js",
    "revision": "2038431fefec7a230c528753cc331821"
  },
  {
    "url": "assets/js/25.5df1c0ae.js",
    "revision": "e3e5a306f4fc83da881d0da8d42a95a2"
  },
  {
    "url": "assets/js/26.43dc0421.js",
    "revision": "57f1a16efd17dd7de7021145644a3f16"
  },
  {
    "url": "assets/js/27.7f9b1b97.js",
    "revision": "4e7ffd2613b553965333387b85d9d81d"
  },
  {
    "url": "assets/js/28.3763b37e.js",
    "revision": "aee31614b0ea8fb4cdb4a0fd089372b6"
  },
  {
    "url": "assets/js/29.b2b82d9b.js",
    "revision": "bcc5d3431db50bc15b1563260387b0e3"
  },
  {
    "url": "assets/js/30.ae66fd63.js",
    "revision": "a8ea9016fefb6c9801317c2b0d8b7c7a"
  },
  {
    "url": "assets/js/31.ca020aff.js",
    "revision": "6266397cd1ba1dad6c1189fb7d9aa1f5"
  },
  {
    "url": "assets/js/32.581b964e.js",
    "revision": "e076655c34f8fbaa264d3b66b5de947c"
  },
  {
    "url": "assets/js/33.8df846c5.js",
    "revision": "595d91288edede2337213b0399f30ad3"
  },
  {
    "url": "assets/js/34.211dc9a4.js",
    "revision": "d63102327c6f215b1325cfa14c500cc4"
  },
  {
    "url": "assets/js/35.af3bbc48.js",
    "revision": "0093081d85bba0f4a4ea359fc9236c10"
  },
  {
    "url": "assets/js/36.cefb4d8a.js",
    "revision": "1fc9050310fec09e2a1cfe44c495e304"
  },
  {
    "url": "assets/js/37.bd383fa7.js",
    "revision": "af90703749b677d3ecb609b2c1e8a151"
  },
  {
    "url": "assets/js/38.a36c82d5.js",
    "revision": "8116f3c81979ac11aa5e368bffba74e7"
  },
  {
    "url": "assets/js/39.5d6e8583.js",
    "revision": "81dee7c0a5e595b9cfa0af262f2883d8"
  },
  {
    "url": "assets/js/4.46e692a3.js",
    "revision": "1f0dbaf5fe5be725cad2735bc824d1ea"
  },
  {
    "url": "assets/js/40.637180bd.js",
    "revision": "584d51e3106530d06d8f818e42c3afe3"
  },
  {
    "url": "assets/js/41.410af72e.js",
    "revision": "396ba11a53a3d0317cc6e7574e16e2be"
  },
  {
    "url": "assets/js/42.1a09f63f.js",
    "revision": "5b055c401b918540f3d3b0f3ea66a2c1"
  },
  {
    "url": "assets/js/43.0cf0360d.js",
    "revision": "5eb484d7eb49336127b22c5029331f9b"
  },
  {
    "url": "assets/js/44.b9fe233d.js",
    "revision": "97345bd211ebc01dc0820e694e9fb88e"
  },
  {
    "url": "assets/js/45.dc5aa10c.js",
    "revision": "9d4fb55c2ceee737261ae026527ff568"
  },
  {
    "url": "assets/js/46.ef4aa11b.js",
    "revision": "878fac400803ef0ae20738042d7a40d5"
  },
  {
    "url": "assets/js/47.7cc3f4ed.js",
    "revision": "4b84e5ca8dbe58b53d1c25337ef85039"
  },
  {
    "url": "assets/js/48.1f0121b2.js",
    "revision": "3ea7d19a40e8f3825606f6be24cb78ee"
  },
  {
    "url": "assets/js/49.d701b969.js",
    "revision": "9acda8e1bf438d193b750b7a1aafb715"
  },
  {
    "url": "assets/js/5.aa7290e9.js",
    "revision": "9febe4fa2c67afa7c11323860e58fd55"
  },
  {
    "url": "assets/js/50.f4b7c593.js",
    "revision": "a83638c027066a43c2107059d608faf7"
  },
  {
    "url": "assets/js/51.3f0b0707.js",
    "revision": "b4976a8c6bb08767175db4145370d340"
  },
  {
    "url": "assets/js/52.cdaf8ae6.js",
    "revision": "3384352e7f4f12d57cc746349b427787"
  },
  {
    "url": "assets/js/53.bfbaa685.js",
    "revision": "cebe56093c489b879f55f1ca96c9a2a0"
  },
  {
    "url": "assets/js/54.97c7f769.js",
    "revision": "ad765a0fe0e1cedd533875bf04adc8a8"
  },
  {
    "url": "assets/js/55.9fd195ae.js",
    "revision": "edee1b441b7a25562b63f078a86ddc7d"
  },
  {
    "url": "assets/js/56.abed1641.js",
    "revision": "d6b3042e75419077642369302fa1a451"
  },
  {
    "url": "assets/js/57.ff35641d.js",
    "revision": "e97021c597e2c8233f824f6905c0fadf"
  },
  {
    "url": "assets/js/58.32860220.js",
    "revision": "c055dfaec2a14b8fe66b3631933b7b80"
  },
  {
    "url": "assets/js/59.b6aee800.js",
    "revision": "2fa256b2d89d38fe606a0d7764f74491"
  },
  {
    "url": "assets/js/6.e4249944.js",
    "revision": "a238e89a34f19e70709da2a93a9257ff"
  },
  {
    "url": "assets/js/60.44853a57.js",
    "revision": "9ef1ed9649c9774d0782a1a3692a1060"
  },
  {
    "url": "assets/js/61.8558a70d.js",
    "revision": "fe7696740762a007626203f8dce1dc8f"
  },
  {
    "url": "assets/js/62.04aa3cae.js",
    "revision": "d6b1c0d594d27ffb74ffc502e5643582"
  },
  {
    "url": "assets/js/63.e018fda2.js",
    "revision": "2077f17d9903e72d82ca223b99e955f2"
  },
  {
    "url": "assets/js/64.b1ce02eb.js",
    "revision": "62ae788255d509b2de432a03a3933876"
  },
  {
    "url": "assets/js/65.4dc9dff0.js",
    "revision": "6b68bf0fc096094b7e7b1b3720876eed"
  },
  {
    "url": "assets/js/66.5d6eb6fa.js",
    "revision": "b75876592413fc8732d62e19fdc28e12"
  },
  {
    "url": "assets/js/67.29b689a5.js",
    "revision": "594ab285cf886c7be171544a7fdea444"
  },
  {
    "url": "assets/js/68.f4ca531f.js",
    "revision": "b89f632947c8189769bde184921faa80"
  },
  {
    "url": "assets/js/69.6544cb2b.js",
    "revision": "96addfb4f21537432a0ac06217f21c33"
  },
  {
    "url": "assets/js/7.55230d72.js",
    "revision": "0ef9a4f7a907176b24af6adc9b6ad58d"
  },
  {
    "url": "assets/js/70.87903edd.js",
    "revision": "fd4b039ac34adae87b8c49ba805d0e0f"
  },
  {
    "url": "assets/js/71.14f3f821.js",
    "revision": "04b32d4f6feb2fc84184e49f14f823fe"
  },
  {
    "url": "assets/js/72.0480bb55.js",
    "revision": "c615c16ab5090774f3eb99a193b0bbbd"
  },
  {
    "url": "assets/js/73.ceb06047.js",
    "revision": "60c183ed2eae2d899fd0b55978b5692e"
  },
  {
    "url": "assets/js/74.22815172.js",
    "revision": "2aeac5eb4ed96d2392a2dab4f112703f"
  },
  {
    "url": "assets/js/75.61cd53f9.js",
    "revision": "00197762202563d3d5e360beaff99098"
  },
  {
    "url": "assets/js/76.e553f949.js",
    "revision": "6a5465b11f5c3206545ed03000f73173"
  },
  {
    "url": "assets/js/77.b58238f7.js",
    "revision": "d2e031b674655cb43dac3d7f288caf60"
  },
  {
    "url": "assets/js/78.4f2bca36.js",
    "revision": "38b74af0f8fcbf2af3091cd2bf836867"
  },
  {
    "url": "assets/js/79.70378c27.js",
    "revision": "f14ae512ff95c8cda2d05d0bc4160495"
  },
  {
    "url": "assets/js/8.30169342.js",
    "revision": "ae01bd92bd55f636d7de31b6078ee18e"
  },
  {
    "url": "assets/js/80.ac459e55.js",
    "revision": "8ed0c742788c0da91a45eb1976b631ca"
  },
  {
    "url": "assets/js/81.8103d332.js",
    "revision": "ceee082d8c6ded5d48590b67f832542f"
  },
  {
    "url": "assets/js/82.50617806.js",
    "revision": "9325e272aa259042490ca9bed1844c23"
  },
  {
    "url": "assets/js/83.b7c03ef7.js",
    "revision": "cc025e626f5ac2830fd7f26036b9fae0"
  },
  {
    "url": "assets/js/84.99eb840e.js",
    "revision": "74d0548a5b33e901fd4ba78b29a03f15"
  },
  {
    "url": "assets/js/85.d2e8bff6.js",
    "revision": "25ddc0df9d01cfb56d375e8cbbacf975"
  },
  {
    "url": "assets/js/86.388523be.js",
    "revision": "ac40d144fa29db8c942242f9f7658a89"
  },
  {
    "url": "assets/js/87.22010c81.js",
    "revision": "18540d8c839039f62e6787911d69c84e"
  },
  {
    "url": "assets/js/88.eac95ada.js",
    "revision": "7e1864c7c31fb37e33125afb00fac04f"
  },
  {
    "url": "assets/js/89.8ad99165.js",
    "revision": "cc47d714949ac8295ef50fd2ab50555f"
  },
  {
    "url": "assets/js/9.14ffc941.js",
    "revision": "917cc1a28cea8f3780e1a8772d8187a9"
  },
  {
    "url": "assets/js/90.38dd216a.js",
    "revision": "d567087765fd4abf91ee896704fa4445"
  },
  {
    "url": "assets/js/91.90b9edba.js",
    "revision": "999ff0ea43e82c3f9f659a6a246fb7fa"
  },
  {
    "url": "assets/js/92.57e0a9dd.js",
    "revision": "e30ae7ad8da1890f3ab808cfa8b5aeef"
  },
  {
    "url": "assets/js/93.6dcfef49.js",
    "revision": "8c8aaabbf48ae8fd184fed07f877de42"
  },
  {
    "url": "assets/js/94.a1c5c4b2.js",
    "revision": "100f4401f5defb40744d814112490103"
  },
  {
    "url": "assets/js/95.1c6fd340.js",
    "revision": "e84ca06d1756c59d113e683bc1aa45aa"
  },
  {
    "url": "assets/js/app.d0422099.js",
    "revision": "f3e14bf87d49035899653dc7575fc12d"
  },
  {
    "url": "courses/artificial-intelligence/assessment.html",
    "revision": "5aaaf35cbef7d5df1ea3ba505619de90"
  },
  {
    "url": "courses/artificial-intelligence/index.html",
    "revision": "eee0bbe50805b77181e874bda2430bca"
  },
  {
    "url": "courses/artificial-intelligence/overview.html",
    "revision": "e95518644802da32268d4578187549a4"
  },
  {
    "url": "courses/artificial-intelligence/requirements.html",
    "revision": "f48cec9080f9359d405d4b41e599fac6"
  },
  {
    "url": "courses/asterics-assistive-technologies/assessment.html",
    "revision": "3bd9706de942b45201410c8b2c7d926f"
  },
  {
    "url": "courses/asterics-assistive-technologies/index.html",
    "revision": "06fb3c800620962e66dc916ef7038ba1"
  },
  {
    "url": "courses/asterics-assistive-technologies/overview.html",
    "revision": "592dc30662b0c9af0cb0932ce35d417e"
  },
  {
    "url": "courses/asterics-assistive-technologies/requirements.html",
    "revision": "e0f5641b3625634fc29fbe8a2a323666"
  },
  {
    "url": "courses/computer-animation/assessment.html",
    "revision": "746db531986ee4a2b7ac2fb37dab4490"
  },
  {
    "url": "courses/computer-animation/index.html",
    "revision": "6e96ab33c7bfdc2877aaeee69e924481"
  },
  {
    "url": "courses/computer-animation/overview.html",
    "revision": "05a32cbba054ccccf48e8cb269d4aa4b"
  },
  {
    "url": "courses/computer-animation/requirements.html",
    "revision": "0d37ae647bb0738ed7804024fd0810c7"
  },
  {
    "url": "courses/digitial-image-processing/assessment.html",
    "revision": "92fbc0f80b4f50a32e4b85975a397708"
  },
  {
    "url": "courses/digitial-image-processing/index.html",
    "revision": "46deb188820ffafb475d36177cea0e74"
  },
  {
    "url": "courses/digitial-image-processing/overview.html",
    "revision": "9f4d935443407623f3232133a79d7e1e"
  },
  {
    "url": "courses/digitial-image-processing/requirements.html",
    "revision": "2288e375aa0542705b5f5ebce8a17118"
  },
  {
    "url": "courses/embsys-vhdl-1/assessment.html",
    "revision": "4b69d8b8f89898d49e2bcefa21f86f3b"
  },
  {
    "url": "courses/embsys-vhdl-1/index.html",
    "revision": "5567ecc38e5ad31277ee265dd24563fa"
  },
  {
    "url": "courses/embsys-vhdl-1/overview.html",
    "revision": "bc40a7ab7be7f32bcce85cdd428e3108"
  },
  {
    "url": "courses/embsys-vhdl-1/requirements.html",
    "revision": "18d76cadad7a849bf164272d719de407"
  },
  {
    "url": "courses/embsys-vhdl-2/assessment.html",
    "revision": "edb664e1c0167aed06b83889b32a93a5"
  },
  {
    "url": "courses/embsys-vhdl-2/index.html",
    "revision": "307ed301e7199d6c4f693b57f1d9d0f5"
  },
  {
    "url": "courses/embsys-vhdl-2/overview.html",
    "revision": "f21c6fe48426f28100ddde1c6afc6f1d"
  },
  {
    "url": "courses/embsys-vhdl-2/requirements.html",
    "revision": "9fe4635a2119c20166e8c0ccb7bfb156"
  },
  {
    "url": "courses/human-computer-interaction-design/assessment.html",
    "revision": "431e0b3670f188687c6bc56fcc596884"
  },
  {
    "url": "courses/human-computer-interaction-design/index.html",
    "revision": "78cf157c8a06e28ecd99f3b32ec5d49a"
  },
  {
    "url": "courses/human-computer-interaction-design/overview.html",
    "revision": "9deedd28e60e5622e681119e09d48384"
  },
  {
    "url": "courses/human-computer-interaction-design/requirements.html",
    "revision": "61a8bfe1f19db67414c9ed66534ecc9a"
  },
  {
    "url": "courses/index.html",
    "revision": "a38691c13ef4ed4be29d7fa209d075ea"
  },
  {
    "url": "courses/iot-standards-procotols/assessment.html",
    "revision": "e9b2c0fc871686ecd3c119e0732e4a84"
  },
  {
    "url": "courses/iot-standards-procotols/index.html",
    "revision": "45e757d2b3cbcd1abd645eded2a1abcf"
  },
  {
    "url": "courses/iot-standards-procotols/overview.html",
    "revision": "b9402f325c20555396fff5ec01625a41"
  },
  {
    "url": "courses/iot-standards-procotols/requirements.html",
    "revision": "dfb3a2c377115da682656c2a9a7d67fc"
  },
  {
    "url": "courses/machine-vision/assessment.html",
    "revision": "dbd622ac232dfcdbb9312c071623793c"
  },
  {
    "url": "courses/machine-vision/index.html",
    "revision": "408c59824e2e61848a98052b8ddbeb8d"
  },
  {
    "url": "courses/machine-vision/overview.html",
    "revision": "d2e3182ec2844acc3de013c7fcea9ea5"
  },
  {
    "url": "courses/machine-vision/requirements.html",
    "revision": "b7fcc6f3b7087601b90dba3eb5832823"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/assessment.html",
    "revision": "dc2afb6a2c9fe8a7ab7cd0f353040a46"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/index.html",
    "revision": "0a32979a39478b581e7579d86609f872"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/overview.html",
    "revision": "fe2c86784fcb90992a748eae759a854f"
  },
  {
    "url": "courses/multi-dimensional-data-analysis/requirements.html",
    "revision": "feb63dc8b62e183f4895e4069855872b"
  },
  {
    "url": "courses/template/assessment.html",
    "revision": "d38ed1e33e1064b3c7e85a07743e1551"
  },
  {
    "url": "courses/template/index.html",
    "revision": "76041c96e78300e68bf1de4f6a5196dc"
  },
  {
    "url": "courses/template/overview.html",
    "revision": "26f4ff5ae7bc7dfe0d790a571c909eeb"
  },
  {
    "url": "courses/template/requirements.html",
    "revision": "8d91f825d4c4e0244d168cfc36e03026"
  },
  {
    "url": "courses/the-connected-car/assessment.html",
    "revision": "bcb4ee092f62cef9388463ba09b52cb5"
  },
  {
    "url": "courses/the-connected-car/index.html",
    "revision": "d998288a0e2ec6b1e70a550a97535b12"
  },
  {
    "url": "courses/the-connected-car/overview.html",
    "revision": "f346aaeb38a43e495157f1c3fe8f27bd"
  },
  {
    "url": "courses/the-connected-car/requirements.html",
    "revision": "82249ee0408c68078796cb0a0e8d5d5b"
  },
  {
    "url": "courses/user-interface-design-patterns/assessment.html",
    "revision": "9802e4833c03f30f2c51d96d75104a9e"
  },
  {
    "url": "courses/user-interface-design-patterns/index.html",
    "revision": "13520116cac637c66d3493705539b4f5"
  },
  {
    "url": "courses/user-interface-design-patterns/overview.html",
    "revision": "0a02d8b0b144d9f76e9f0d3b4573a1f3"
  },
  {
    "url": "courses/user-interface-design-patterns/requirements.html",
    "revision": "de3d5242222148321e8d85a287c82615"
  },
  {
    "url": "e-learning-sharing/faq.html",
    "revision": "5a5455445aaa3d7243e467ff58510ab8"
  },
  {
    "url": "e-learning-sharing/index.html",
    "revision": "8e920576e618247c5e59f3cc751e6cf9"
  },
  {
    "url": "general/enroll.html",
    "revision": "9cfd7a10186180e251ce8cc410f93e93"
  },
  {
    "url": "index.html",
    "revision": "42cf325b38043ea334e65e0feed6e319"
  },
  {
    "url": "lecturer/uastw/martin-deinhofer.html",
    "revision": "980d2567f481f418122848ff48c0d436"
  },
  {
    "url": "studyathome/about.html",
    "revision": "2911cbdb52f2c86423a8674826c0468f"
  },
  {
    "url": "studyathome/contact.html",
    "revision": "696f17f5a07802adae3a6f6fa6419644"
  },
  {
    "url": "studyathome/help.html",
    "revision": "f875cfeba140b4926ac390142e0597fa"
  },
  {
    "url": "studyathome/markdown.html",
    "revision": "8c1808a927b264551f44d3b7778cebc1"
  },
  {
    "url": "studyathome/partner/ctu/enroll.html",
    "revision": "e092de7e86d4f1c0ba58d6e5c2e2877c"
  },
  {
    "url": "studyathome/partner/ctu/index.html",
    "revision": "b27e091d4db62c4996083fb8ba246f27"
  },
  {
    "url": "studyathome/partner/index.html",
    "revision": "d8bf16069c134f08992c959bf67f3e85"
  },
  {
    "url": "studyathome/partner/uastw/enroll.html",
    "revision": "c08a46c0689a3b71c7a2352b2164ec0e"
  },
  {
    "url": "studyathome/partner/uastw/index.html",
    "revision": "53cdbd376a747e39a485dc86ba14e098"
  },
  {
    "url": "studyathome/partner/ukim/enroll.html",
    "revision": "5b840b96ad2d5641ed4d3d3dc5836100"
  },
  {
    "url": "studyathome/partner/ukim/index.html",
    "revision": "ac3a7b1d90914d148ee1a9a1732eefd4"
  },
  {
    "url": "studyathome/partner/wit/enroll.html",
    "revision": "fd944bfe8d7b39710f1fb70b28652e1d"
  },
  {
    "url": "studyathome/partner/wit/index.html",
    "revision": "b2a998a8c5e9a9a370a718eff093f2a7"
  },
  {
    "url": "studyathome/privacy.html",
    "revision": "0b5513774dff7e853d066774344b40b3"
  },
  {
    "url": "studyathome/sitemap.html",
    "revision": "41c94eaf5ae5ff4c753c3a7b653b71f1"
  },
  {
    "url": "studyathome/terms.html",
    "revision": "92bed59e851069d2f855381c65d2a61f"
  },
  {
    "url": "virtual-project-teams/concepts/concept1.html",
    "revision": "a8d568284db9424ceb3de33eaf375785"
  },
  {
    "url": "virtual-project-teams/concepts/concept2.html",
    "revision": "dec14efc63711eee95d86ed2fcfaa3e2"
  },
  {
    "url": "virtual-project-teams/concepts/concept3.html",
    "revision": "fb1e4793d1a9dd4633c941a1e1d4908d"
  },
  {
    "url": "virtual-project-teams/concepts/index.html",
    "revision": "6bcc64cb72e00a65f34209d2e63f3115"
  },
  {
    "url": "virtual-project-teams/faq.html",
    "revision": "10f142a2d99a82936975b3b35d096a3c"
  },
  {
    "url": "virtual-project-teams/guides/guide1.html",
    "revision": "8273d148372e0b633b923bccb25396a3"
  },
  {
    "url": "virtual-project-teams/guides/guide2.html",
    "revision": "670835e240606ddafa7668500c1b4bd5"
  },
  {
    "url": "virtual-project-teams/guides/guide3.html",
    "revision": "78439098689c03aaefc39cf02c2171b1"
  },
  {
    "url": "virtual-project-teams/guides/index.html",
    "revision": "83ff82aaf01cd54f3e7b9122af230de2"
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
