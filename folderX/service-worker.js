// give your cache a name
const cacheName = 'my-cache';

// put the static assets and routes you want to cache here
const filesToCache = [
  '/',
  '/about',
  '/index.html',
  '/manifest.json',
  '/package-lock.json',
  '/package.json',
  '/server.js',
  '/server-worker.js',
  '/Untitled.mp4',
  '/Untitled.ogg',
  '/IMG.JPG',
  '/ImgIcon.png',
  '/logo.PNG',
];

// the event handler for the activate event
self.addEventListener('activate', e => self.clients.claim());

// the event handler for the install event 
// typically used to cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});

// the fetch event handler, to intercept requests and serve all 
// static assets from the cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});

if('serviceWorker' in navigator) {
  let registration;

  const registerServiceWorker = async () => {
    registration = await          navigator.serviceWorker.register('./service-worker.js');
  };

  registerServiceWorker();
}