const CACHE_NAME = "projects-cache-v3";
 
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icons/ic_launcher.png",
  "./icons/playstore.png"
];
 
// instalar
self.addEventListener("install", event => {
  self.skipWaiting();
 
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
 
// ativar
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
 
  self.clients.claim();
});
 
// fetch (corrigido)
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => response)
      .catch(() => {
        return caches.match(event.request)
          .then(response => {
            return response || new Response("Offline", {
              status: 503,
              statusText: "Offline"
            });
          });
      })
  );
});