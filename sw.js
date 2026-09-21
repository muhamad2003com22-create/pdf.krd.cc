// PDF.KRD Service Worker for WebApp / PWA
const CACHE_NAME = 'pdf-krd-v6';
const ASSETS_TO_CACHE = [
  './',
  'css/style.css',
  'js/app.js',
  'manifest.json',
  'images/logo.png',
  'images/icon-192.png',
  'images/icon-512.png',
  'libs/pdf.min.js',
  'libs/jspdf.umd.min.js',
  'libs/jszip.min.js',
  'libs/mammoth.browser.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass through non-GET and API conversion requests to network
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }
  // Network-first with cache fallback for fresh updates on deploy
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
