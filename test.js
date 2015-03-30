console.log("service worker?");

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('swtest').then(function(cache) {
      console.log('Open cache');
      return cache.addAll(['/', '/hello.js', '/index.html']);
    })
  );
});

self.addEventListener('message', function(event) {
  console.log('yaho?');
});
