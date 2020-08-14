'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0b84240cf7b6a1efec594d4e346485dd",
".git/config": "52af4e3a6887a74ba1fa496ffeab13e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "514fe9248ce270727de0105bc3804b7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06fb796861f9bb8c3dbab72f5493d129",
".git/logs/refs/heads/master": "06fb796861f9bb8c3dbab72f5493d129",
".git/logs/refs/remotes/origin/master": "4d24f748187c9dd718fb58ec4b1aff47",
".git/objects/03/11da00dc248600c2fcfdaf2d64097250fa5c09": "90cac9762d09c7f7c360ab3b737d5eb7",
".git/objects/04/0c4f8d055dd82abeb78e7cabcdd3169df0000b": "4bdb2c2e4c59cd8cf9126ee85cca5da3",
".git/objects/09/94d09b843107cecc1391b4a79799da913e60d0": "c7095e964e8fca8602882409948a22f8",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/a938ffb6c5257f779c9bec15ad434bd9e5be6c": "066df518636aebca9910e285cf7e222f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/8fda1f4f3b2dbda4e8e55e5bd3f91a7b7b1e16": "6a1e8d35debcb430fb29c73ef7250dce",
".git/objects/1b/192b4e8d6ebf0dabfc036483b32992c3055a0c": "9a98d0cae609f62653caea29c165fd15",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/34/4b26fd30ebc1722140257c41888f60cae57c9b": "29d650a38318cb5a3070266b8cfe3cb1",
".git/objects/39/3a798c7670e8e8884e392751e1cfd8e68e8cef": "d68ab1f8453ac8fea0fc888f4b7cdd9d",
".git/objects/3a/6814f427472f626a0e7af5d930e02f05ab14fd": "9cec1d80cc5a34e66b9731751260b4f5",
".git/objects/3c/e6d46409c9ffca3b5a8c137e14371bdf550767": "f6afe3f36bb0f72cef4894d552ae904b",
".git/objects/3d/ea6801431180147175f3f6ebe220ac777945b4": "892d3745c704ef3d59a690c9e92d1c5d",
".git/objects/3f/8d7c28bae96e6f22b9969064e2897f02dcc0a8": "68cd73fb731ffcd972187f9433776dc9",
".git/objects/3f/a832fc0b125c736eb471b9c0fa1cbca2bd3c4d": "4b5cfbe1ca7b524c2993c1e93e1f81ff",
".git/objects/45/c04db481731ccf211080986110554bf4c3a266": "81bfb559ca3fd82f57f162167ad56257",
".git/objects/58/652b370e945a200d541757ac8f39b7997bedaf": "3b5d0d59dbd2e687c8e149d54775c518",
".git/objects/5a/477b77f255fcf8a42a57056be8fb241649d5de": "91ca9967a22ac22e4db6989d1426d56b",
".git/objects/67/32911ecb90a4633bd0c3dfae05e131fe7ff8ad": "f0e20e5d3bbe2099f48ee8f64c55d3a2",
".git/objects/67/c75b3fb89a1c825d7ed9c099ff1b511067979b": "eb5d3dac1167fafbc43db9c87cbeb1ff",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/68/d15e7d2096362f6650c2ccca2d4e42c21b2c09": "3128b22bcf22d2f656f0e82af636d2c8",
".git/objects/69/5d633ee2b5222bd032ece1f3d927ffcfe6d36c": "4f224d1f21c90f898924afa73c1404bb",
".git/objects/6e/00975d527f6ea210c948c85493630bf0660dd6": "43dd1110418ba92bd64100d6664c2135",
".git/objects/71/b01b021460b93cba48831c92ac9a8021c76a4d": "8e2ad6e1c4c6d8ed0a7b132a960fae07",
".git/objects/72/fd61e9ccab00714c7cb335ec2b1155f2acfe48": "ac8fb8fc8e69f94e2fbeae414a1d79cc",
".git/objects/73/1a24979cf25eb670f41951a600e57ab825c7d1": "2b1c231d47a5b96220154a62059479a2",
".git/objects/78/6fac1cfb829ce7353a28d2793bd95bb74f9ce5": "658e519b458b7a7fa607d21a89422d63",
".git/objects/7d/4ec7acf5bffc2e7aadb9a53c367a56744b265a": "d0ae0bb9818ccee889ad9df43ee8e541",
".git/objects/80/3bc8e3e93d660d2dbc2f239bf0f8431a3f0c3e": "f0bcbb9fa4f0e89241406c959181cc96",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/0005c66031773e03faf83b497082f2b1418c06": "8af5632db199b8f08e00b4fc312b99c4",
".git/objects/87/86181faf8e7890b945be3c51b5f2551936baa8": "04cddd369d9d5720f54359e49e232cd4",
".git/objects/88/034eb55c82529c35bc7c5b9ce254fd944c3b6d": "a7a30f3bb0f77765fd13aa3f88465a54",
".git/objects/88/aa3dc53bdfb538c9c3ce3afb117a13d5a0d967": "e3dc55d1628c42673daafd138385f164",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/108eaede44a0d8bc6891b63799c518d2da575c": "34e6c89519a0e8c8075d7a3b8b94cea6",
".git/objects/89/a3e0e53227ef08ac3c8b398a5439f64dc9e967": "17f21e9474e62d74db4003dd00a34d10",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/96/5e910f28ba0a5b9a09bd78b5f4b221862afd65": "5e780b01e898101204dc348d6b2074db",
".git/objects/a6/7b6df940a647e925ae57ac77b5b6bf23885334": "0b775fee6d43332b78e4f464da1b6a66",
".git/objects/a7/1f03718a95801941855659eb7617d4c8b64511": "aed4a8f168a0edd7ad34d989a34c7fd0",
".git/objects/ae/6881a7db3ddf14d635ad2f9b324f2e82f5343f": "c613fad8370ae926430382fcb5d72c9e",
".git/objects/af/1b89e654ab56ce9b030fb564c138983f2c6afc": "6cbe94169c0d9490fc5a8ddce07ff810",
".git/objects/af/89be9d3855556c630a5d7e7e34a204913c713d": "c1a8ea0da401c0412384c8b03ef056f2",
".git/objects/af/c2f72a26f27eea7a15e0f621a296efbb790fc0": "fa80b526a1c615e791aa9fabab201c03",
".git/objects/b3/6bc64cf170487e9d3ae86e0f1f25d98fa6ef5a": "b7087c8a178d0ab2e812699b0a407745",
".git/objects/b6/7a8f227188048faf6fbe39d87abcac8e1a93e2": "00f2d78aaeafc26a957f4df750493b69",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/d4e93293305f78ea192d58d48470dafa3698da": "c3df7758bff4221dd0d26558e49406e6",
".git/objects/c6/31d0a90b625d1aaa4a647df6b3227dc0e4f854": "afecd7c7ae1d2190bdae41aa563f56e6",
".git/objects/ca/a8d102b5a04e14ed26aef0ba6988600ebca74b": "352892d593678dd0d1e3e3ae3ee45031",
".git/objects/d3/626052b9a42bf8bffdffb4d030cd64b6dabe89": "8cded295ee678d20e89fed988c9055a4",
".git/objects/d8/10e7351c15b3ff98f5452e741954c10f9cc4e5": "9f05d4e0da93c5cdc71afaab0da27b0c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e2/233945482e697b16e39d34cdfb7e88cd7c1e69": "24f1df9b94ad40ff39f7e368ef137f09",
".git/objects/e2/b29a8922cd92589ea53c3e7a72a6f1c51ad817": "bcef05c5f7f4d48c08b58b0bb72e7226",
".git/objects/e4/89f975c0bab432d43aca30e5c656bc71b351de": "1986715eb9fe10dbc7c520e978f9a305",
".git/objects/ea/457dd0759963445a73796aa54fb6b881278619": "aaacc7772fabba9856a96695363db6a9",
".git/objects/ec/63b435ac1d25ba0802de28826a53be2cade059": "f972aa8bb64fd52582c0f59b94bf0e81",
".git/objects/f0/5406cd4c813b4096ee5e44759eff84fbea7df1": "6d3dbdc68b236f629b2a73dd53a5cea1",
".git/objects/f8/59e23721ff6a06d7de0641d6d4220b91a18c5b": "dc38e894a32b3a6a03d1fdb6724a86a7",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "96036b0852b7823269bd968ea72e56bc",
".git/refs/remotes/origin/master": "96036b0852b7823269bd968ea72e56bc",
"assets/AssetManifest.json": "9ec5f43f5f5ed6906bbd861f041e7b59",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/applogo.png": "5400f6142c4adc4abb0f28762dcdf253",
"assets/assets/images/applogofinal.png": "3b09fe4f9d746ce62d16906a05ab45df",
"assets/assets/images/Booklit-02.png": "7cbe62620132dd8ccab4ef7e1096cd07",
"assets/assets/images/booklitlogo.jpg": "115226ed428bd8279e878e99c798eae3",
"assets/assets/images/calculus.jpg": "ee0ebd40e541e2dcb82bffcbd142d410",
"assets/assets/images/campus.jpg": "27b4f5c5f37e99d55724029070140cc8",
"assets/assets/images/database.png": "039ca94b93496ab16c1026ea0ec8b51d",
"assets/assets/images/featuredGraphic.png": "58e80ff42acdd83d661264fd79a8d827",
"assets/assets/images/homework.jpg": "153049962203726f17a70f0dbf97a8c9",
"assets/assets/images/java.jpg": "04a610e54506e00b73952b1acd3ef1d6",
"assets/assets/images/java_10.png": "cabd448fd745a8b1fa5c85b3de0a31e3",
"assets/assets/images/linear_algebra.jpg": "e84dcf5377a1b47226fe557b27b4b86a",
"assets/assets/images/loginbackdrop.jpg": "85a6dd4d32b1402bd3e0b82e3c94466b",
"assets/assets/images/loginbackground.jpg": "6cc6deefa1d35ac84a1eaf54d138c43e",
"assets/assets/images/logo.png": "261685cc208c4981ea9e16d0f52f74ad",
"assets/assets/images/logoFinal.png": "234b48aeaeefe75aac55ad2b4ef21922",
"assets/assets/images/physics.png": "17ba6ed1ab0379d99ff7ed0faf1a66ac",
"assets/assets/images/search.png": "4ee6f1ec26eb2feafe0c6d699042068a",
"assets/assets/images/statics.png": "3168a96b7982152eef3821edc6ffecb6",
"assets/assets/introScreen/home.jpg": "7d445e1fdb5413a6d6666aeab0822489",
"assets/assets/introScreen/market.jpg": "4ef9a9bff4f648369885cfa24a065f89",
"assets/assets/introScreen/phone.jpg": "fff26001f9e5860fd91f63b61712e361",
"assets/assets/introScreen/phone.webp": "e54f117a84933eb24aa42801fc62d67c",
"assets/assets/introScreen/request.jpg": "a0de3ec446c395a29b66b885ac7847c1",
"assets/assets/introScreen/ss1.png": "6c4999ef63ae8aee1e9315977ce79405",
"assets/assets/introScreen/ss2.jpg": "00d5c65805a9e68803bb98b3deb16c0f",
"assets/assets/introScreen/ss3.jpg": "b9f7f4f0a5ccc55d2b69729ce94ac4fc",
"assets/assets/introScreen/storess1.jpg": "3851c5dc70bd212e0c41b77e14b9c177",
"assets/assets/introScreen/storess2.jpg": "fb16c0b57dbd16164c02973406d48569",
"assets/assets/introScreen/storess3.jpg": "63378215bbe79d2898ef25e5e30aa63a",
"assets/FontManifest.json": "b870b587eebbac3e4295707661ee0aea",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "8162154137d6ad5e48c749228679006e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"faviconLogo.png": "fde34e5772ed93dfc7ec5f40518b41b2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ic_launcher.png": "48d1f5e0c0c13fcf42edf8bc6f5247d7",
"icons/logo192.png": "fcc5bddbb34d454f9bd8d9502652c239",
"icons/logo512.png": "514d8ebed7b7b61157649a7b1819064f",
"icons/playstore.png": "2967bd45c9612345dcbb4104d65dd49b",
"index.html": "ab50935f65b8dc2353116c8f83720f00",
"/": "ab50935f65b8dc2353116c8f83720f00",
"main.dart.js": "1ce7940567c6336ff85b9ff12aabc8f4",
"manifest.json": "cf261115a915fe70ef2236f37a0b3c30",
"README.md": "49721b52ba69942a48473b1409e2035f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
