const VERSION = 'v1::20251109';
const BASE_URL = Encode-Decode-PWA;
const OFFLINE_URL = BASE_URL;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        BASE_URL,
        BASE_URL + 'index.html',
        BASE_URL + 'manifest.json',
        BASE_URL + 'sw.js',
        BASE_URL + 'icons/icon-192.png',
        BASE_URL + 'icons/icon-512.png',
      ]);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const resClone = response.clone();
      caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, resClone).catch(() => {});
      });
      return response;
    }).catch(() => caches.match(event.request).then(r => r || caches.match(OFFLINE_URL)))
  );
});
