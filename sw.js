self.addEventListener('install', (e) => {
  console.log('install==', e)
  // cache 
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      // '/pwa-examples/a2hs/',
      // '/pwa-examples/a2hs/index.html',
      // '/pwa-examples/a2hs/index.js',
      // '/pwa-examples/a2hs/style.css',
      // '/pwa-examples/a2hs/images/fox1.jpg',
      // '/pwa-examples/a2hs/images/fox2.jpg',
      // '/pwa-examples/a2hs/images/fox3.jpg',
      // '/pwa-examples/a2hs/images/fox4.jpg',
      '/index.html',
      '/index.js',
      '/style.css',
      '/images/fox1.jpg',
      '/images/fox2.jpg',
      '/images/fox3.jpg',
      '/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  // console.log(e.request.url, '==========', caches);
  e.respondWith(
    caches.match(e.request).then((response) => {
      // console.log('resp', response)
      return response || fetch(e.request)
    }),
  );
});
