const CACHE_NAME = "WebCodeEditor_Cache_V_2.1.5";
const CACHE_FILES = [
  "./index.html",
  "./index.css",
  "./index.js",
  "./Help.html",
  "./fonts.js",
  "./CSSFiles/Help.css",
  "./fonts/Cairo-Regular.ttf",
  "./fonts/ComicNeue-Light.ttf",
  "./fonts/CourierPrime-Regular.ttf",
  "./fonts/Flamenco-Light.ttf",
  "./fonts/GloriaHallelujah-Regular.ttf",
  "./fonts/LexendPeta-Regular.ttf",
  "./fonts/Nunito-Regular.ttf",
  "./fonts/PatrickHand-Regular.ttf",
  "./fonts/PermanentMarker-Regular.ttf",
  "./fonts/Roboto-Thin.ttf",
  "./icons/Color_palette.svg",
  "./icons/Download.svg",
  "./icons/Encrypted.svg",
  "./icons/menu.svg",
  "./icons/Run.svg",
  "./icons/Save.svg",
  "./icons/Unencrypted.svg",
  "./icons/WebCodeEditor1000x1000.png",
  "./icons/WebCodeEditor1200x1200.png",
  "./icons/WebCodeEditor1500x1500.png",
  "./icons/WebCodeEditor330x330.png",
  "./icons/WebCodeEditor800x800.png",
  "./JSFiles/ControlVariables.js",
  "./JSFiles/ControlVariablesConfiguration.js",
  "./JSFiles/data.js",
  "./JSFiles/functions.js",
  "./JSFiles/Help.js",
  "./JSFiles/InitProcessing.js",
  "./JSFiles/Listeners.js",
  "./JSFiles/SliderBar.js",

  "./Libraries/codemirror/addon/hint/css-hint.js",
  "./Libraries/codemirror/addon/hint/html-hint.js",
  "./Libraries/codemirror/addon/hint/javascript-hint.js",
  "./Libraries/codemirror/addon/hint/show-hint.css",
  "./Libraries/codemirror/addon/hint/show-hint.js",

  "./Libraries/codemirror/addon/edit/closebrackets.js",
  "./Libraries/codemirror/addon/edit/closetag.js",

  "./Libraries/codemirror/addon/scroll/simplescrollbars.css",
  "./Libraries/codemirror/addon/scroll/simplescrollbars.js",

  "./Libraries/codemirror/lib/codemirror.css",
  "./Libraries/codemirror/lib/codemirror.js",

  "./Libraries/CodeMirrorColorPicker/CMColorPicker.js",

  "./Libraries/codemirror/theme/3024-day.css",
  "./Libraries/codemirror/theme/3024-night.css",
  "./Libraries/codemirror/theme/abcdef.css",
  "./Libraries/codemirror/theme/ambiance-mobile.css",
  "./Libraries/codemirror/theme/ambiance.css",
  "./Libraries/codemirror/theme/ayu-dark.css",
  "./Libraries/codemirror/theme/ayu-mirage.css",
  "./Libraries/codemirror/theme/base16-dark.css",
  "./Libraries/codemirror/theme/base16-light.css",
  "./Libraries/codemirror/theme/bespin.css",
  "./Libraries/codemirror/theme/blackboard.css",
  "./Libraries/codemirror/theme/cobalt.css",
  "./Libraries/codemirror/theme/colorforth.css",
  "./Libraries/codemirror/theme/darcula.css",
  "./Libraries/codemirror/theme/dracula.css",
  "./Libraries/codemirror/theme/duotone-dark.css",
  "./Libraries/codemirror/theme/duotone-light.css",
  "./Libraries/codemirror/theme/eclipse.css",
  "./Libraries/codemirror/theme/elegant.css",
  "./Libraries/codemirror/theme/erlang-dark.css",
  "./Libraries/codemirror/theme/gruvbox-dark.css",
  "./Libraries/codemirror/theme/hopscotch.css",
  "./Libraries/codemirror/theme/icecoder.css",
  "./Libraries/codemirror/theme/idea.css",
  "./Libraries/codemirror/theme/isotope.css",
  "./Libraries/codemirror/theme/lesser-dark.css",
  "./Libraries/codemirror/theme/liquibyte.css",
  "./Libraries/codemirror/theme/lucario.css",
  "./Libraries/codemirror/theme/material-darker.css",
  "./Libraries/codemirror/theme/material-ocean.css",
  "./Libraries/codemirror/theme/material-palenight.css",
  "./Libraries/codemirror/theme/material.css",
  "./Libraries/codemirror/theme/mbo.css",
  "./Libraries/codemirror/theme/mdn-like.css",
  "./Libraries/codemirror/theme/midnight.css",
  "./Libraries/codemirror/theme/monokai.css",
  "./Libraries/codemirror/theme/moxer.css",
  "./Libraries/codemirror/theme/neat.css",
  "./Libraries/codemirror/theme/neo.css",
  "./Libraries/codemirror/theme/night.css",
  "./Libraries/codemirror/theme/nord.css",
  "./Libraries/codemirror/theme/oceanic-next.css",
  "./Libraries/codemirror/theme/panda-syntax.css",
  "./Libraries/codemirror/theme/paraiso-dark.css",
  "./Libraries/codemirror/theme/paraiso-light.css",
  "./Libraries/codemirror/theme/pastel-on-dark.css",
  "./Libraries/codemirror/theme/railscasts.css",
  "./Libraries/codemirror/theme/rubyblue.css",
  "./Libraries/codemirror/theme/seti.css",
  "./Libraries/codemirror/theme/shadowfox.css",
  "./Libraries/codemirror/theme/solarized.css",
  "./Libraries/codemirror/theme/ssms.css",
  "./Libraries/codemirror/theme/the-matrix.css",
  "./Libraries/codemirror/theme/tomorrow-night-bright.css",
  "./Libraries/codemirror/theme/tomorrow-night-eighties.css",
  "./Libraries/codemirror/theme/ttcn.css",
  "./Libraries/codemirror/theme/twilight.css",
  "./Libraries/codemirror/theme/vibrant-ink.css",
  "./Libraries/codemirror/theme/xq-dark.css",
  "./Libraries/codemirror/theme/xq-light.css",
  "./Libraries/codemirror/theme/yeti.css",
  "./Libraries/codemirror/theme/yonce.css",
  "./Libraries/codemirror/theme/zenburn.css",
];
//Cache the static resources
self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page");
      console.log("[ServiceWorker] Downloading and installing the files");
      return cache.addAll(CACHE_FILES);
    })
  );
});
self.skipWaiting();
//Flush the previous cache
self.addEventListener("activate", (evt) => {
  console.log("[ServiceWorker] Activate");

  const staticWhitelistCache = [CACHE_NAME];

  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (staticWhitelistCache.indexOf(key) === -1) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

//While fetching the service worker should decide whether to send the request on the network or to get from cache
self.addEventListener("fetch", (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);

  evt.respondWith(
    caches.match(evt.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(evt.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(evt.request.url, response.clone());
          return response;
        });
      });
    })
  );
});
