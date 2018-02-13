importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
//  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/admin.html',
        '/login.html',
        '/manifest.json',
        '/css/admin.css',
        '/css/login.css',
        '/js/bulma.js',
        '/media/background.jpg',
        '/media/logo.png',
        '/media/source.gif',
        '/media/logo1.png',
        '/media/favicon.ico',
        '/media/logo/36x36.png',
        '/media/logo/60x60.png',
        '/media/logo/96x96.png',
        '/media/logo/72x72.png',
        '/media/logo/360x360.png',
        '/media/logo/144x144.png',
        '/media/logo/576x576.png',
        '/media/logo/216x216.png',
        '/media/logo/432x432.png',
        '/media/logo/432x432.png',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://fonts.googleapis.com/css?family=Open+Sans',
        'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css',
        '/media/kirtan.mp3'
      ]);
    })
 // );
});
self.addEventListener('fetch', function(event){
});
