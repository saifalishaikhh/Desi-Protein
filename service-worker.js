const CACHE_NAME = "desi-protein-v1";

const ASSETS = [
  "/Desi-Protein/",
  "/Desi-Protein/index.html",
  "/Desi-Protein/category.html",
  "/Desi-Protein/product.html",
  "/Desi-Protein/cart.html",
  "/Desi-Protein/css/base.css",
  "/Desi-Protein/css/layout.css",
  "/Desi-Protein/css/product.css",
  "/Desi-Protein/js/data.js",
  "/Desi-Protein/js/cart.service.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
