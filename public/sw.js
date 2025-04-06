// Service Worker for Gradiendo PWA

const CACHE_NAME = "gradiendo-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/icons/16.png",
  "/icons/20.png",
  "/icons/29.png",
  "/icons/32.png",
  "/icons/40.png",
  "/icons/50.png",
  "/icons/57.png",
  "/icons/58.png",
  "/icons/60.png",
  "/icons/64.png",
  "/icons/72.png",
  "/icons/76.png",
  "/icons/80.png",
  "/icons/87.png",
  "/icons/100.png",
  "/icons/114.png",
  "/icons/120.png",
  "/icons/128.png",
  "/icons/144.png",
  "/icons/152.png",
  "/icons/167.png",
  "/icons/180.png",
  "/icons/192.png",
  "/icons/256.png",
  "/icons/512.png",
  "/icons/1024.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
