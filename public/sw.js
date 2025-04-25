// Service Worker for BrandPulse AI
const CACHE_NAME = "brandpulse-cache-v1";
const urlsToCache = [
  "/",
  "/dashboard",
  "/dashboard/ads",
  "/dashboard/business",
  "/styles/globals.css",
  "/logo.png",
  "/manifest.json",
  "/favicon.ico",
];

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request).catch(() => {
        // Return a fallback response for navigation requests
        if (event.request.mode === "navigate") {
          return new Response(
            "<html><body><h1>Offline</h1><p>Please check your internet connection.</p></body></html>",
            {
              headers: { "Content-Type": "text/html" },
              status: 503,
            }
          );
        }
      });
    })
  );
});

// Message event - handle communication from the client
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Handle connection errors
self.addEventListener("error", (event) => {
  // Only log in development
  if (process.env.NODE_ENV === "development") {
    console.error("Service Worker error:", event.error);
  }
});
