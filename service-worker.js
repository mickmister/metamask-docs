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
    "revision": "aa4a8aeeedf655a307b213da8d6f5132"
  },
  {
    "url": "assets/css/0.styles.61a9f1de.css",
    "revision": "127d866d457004deb543e4e646fd1648"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.47314843.js",
    "revision": "2a1248147bca21b1d318e660f29f50af"
  },
  {
    "url": "assets/js/11.d1137ec7.js",
    "revision": "8995bb9edc31860391bc3727c487d13e"
  },
  {
    "url": "assets/js/12.ae2008df.js",
    "revision": "9704f1a2fd0ee0b3be1d297a3b95410a"
  },
  {
    "url": "assets/js/13.71c35727.js",
    "revision": "d44cf15daef5807e8b685591b0f3963f"
  },
  {
    "url": "assets/js/14.e441fa82.js",
    "revision": "a58a728ae781f801227e08eb78a01bd0"
  },
  {
    "url": "assets/js/15.4ae77fcd.js",
    "revision": "d5dbb18c34ec339dc1389f4c01bd2d6a"
  },
  {
    "url": "assets/js/16.1e7d0c52.js",
    "revision": "da951b7d3ef91b0c76ee8352c315717a"
  },
  {
    "url": "assets/js/17.1ace2421.js",
    "revision": "5bfd26982fe39482bebabe1a742e1c88"
  },
  {
    "url": "assets/js/18.244b4c80.js",
    "revision": "f70df645aa24bbf455830e179004abb2"
  },
  {
    "url": "assets/js/19.e5d2abd6.js",
    "revision": "c866ec875f3018db180f815c50a665eb"
  },
  {
    "url": "assets/js/20.888b4f39.js",
    "revision": "d723f48201841b5b45c4e535d3b6e79c"
  },
  {
    "url": "assets/js/21.294e88ff.js",
    "revision": "5c956f5d4a33f6c3f8fafbb1b4005799"
  },
  {
    "url": "assets/js/22.da74d1a2.js",
    "revision": "17f97f7e952e86c6122ea4cd1b87de56"
  },
  {
    "url": "assets/js/23.e7283c3f.js",
    "revision": "8ddda06a4cd4c035732938538890e693"
  },
  {
    "url": "assets/js/24.80cb6b6e.js",
    "revision": "e71a5c0612f0fbbcda1f29ad7614ffe7"
  },
  {
    "url": "assets/js/25.7e42be2d.js",
    "revision": "efec0b1425e5355d3223fe05e4ec9216"
  },
  {
    "url": "assets/js/26.4613242e.js",
    "revision": "45872b1664ec0749067792802ef0d547"
  },
  {
    "url": "assets/js/27.098be540.js",
    "revision": "766ac3094a4cb9147ed84d0882bb0ea7"
  },
  {
    "url": "assets/js/28.52bf9d23.js",
    "revision": "8dcc5fe675746ed351426bee6d9f06ad"
  },
  {
    "url": "assets/js/29.163f2a43.js",
    "revision": "036dfc9aca3de84a81168ef6c6b7aaa9"
  },
  {
    "url": "assets/js/3.ef2fe70b.js",
    "revision": "37a6a8572560895a6f877e28657b904e"
  },
  {
    "url": "assets/js/30.0beab1ee.js",
    "revision": "778e743c7c4026632af2f71865fda42c"
  },
  {
    "url": "assets/js/4.44550793.js",
    "revision": "cb8c4f63993d6076772228144eaa065e"
  },
  {
    "url": "assets/js/5.ac0c2f9d.js",
    "revision": "eda380b795f8db916115629a99c81bd4"
  },
  {
    "url": "assets/js/6.9e784e7c.js",
    "revision": "2fbcb27b8df5ad8ea687bfacb34cfea7"
  },
  {
    "url": "assets/js/7.06e425f1.js",
    "revision": "4e344b6a9daa6f1fe17de7c9ad6bc07d"
  },
  {
    "url": "assets/js/8.bd9d2aed.js",
    "revision": "93e7c34f90cac35064dbf1ed358f1666"
  },
  {
    "url": "assets/js/9.6d9148b9.js",
    "revision": "a91b8462b5c4969c92ac28e30c2e9ca6"
  },
  {
    "url": "assets/js/app.95c07364.js",
    "revision": "bfe8004c92d632a59ad44a8847fcb302"
  },
  {
    "url": "assets/js/vendors~notification.98447839.js",
    "revision": "a05efde42d5f02fe13dfada85a780b47"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "ceaef5f6d45091bb27ccd50e27939665"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8f64bf9045e82b90bda528d9dccc517c"
  },
  {
    "url": "guide/assets.html",
    "revision": "a6060676981557de40278704e2a03f3b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "999bdced31bdbaa5e60ea0af646408fc"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ad0f08c52456dc8a0b36142b8bee80d8"
  },
  {
    "url": "guide/deploy.html",
    "revision": "bb84ae310cf74ee81e7c94c94c774b87"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "43545bc59ba2d489bf34058ac566d595"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "71a067fee0f40455330301adc76823b6"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "3be48e4a3d870f4834a4e235b899d7dd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "af6f28015a79479d0bfc3ef471a75373"
  },
  {
    "url": "guide/index.html",
    "revision": "fc09f271cb98d65c81085c559fe2b071"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3d1ed3612f715a8f38420a546acbeac0"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "7eb125b086ec113c8f8ba24dcaba4d0e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "06838928f31d93321d97f2261c10cecc"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "798accde499b913fb732bf2307dcfefc"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "0c11f2c8a3148ad79d85e27351cb7007"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2df969a2fedeafef80e2b4c26cc140ca"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "87b88a3282d5cacf34f05b76746f89a5"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
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