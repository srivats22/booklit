'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
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
"main.dart.js": "05694eccfa4b659e7c79eb66e06f0960",
"manifest.json": "cf261115a915fe70ef2236f37a0b3c30"
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
