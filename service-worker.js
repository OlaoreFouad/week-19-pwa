var cacheName = 'cardepot-v1'
var cacheFiles = [
    'index.html',
    'products.js',
    'cardepot.webmanifest',
    'images/bentley.jpg',
    'images/camry.jpg',
    'images/dodge.jpg',
    'images/honda.jpg',
    'images/icon-512.png',
    'images/lambo.jpg',
    'images/pots.jpg'
];

self.addEventListener('install', (e) => {
    console.log('Service Worker [Install]')
    e.waitUntil(
        caches.open(cacheName).then( cache => {
            console.log('Caching all files!')
            return cache.addAll(cacheFiles);
        })
    )
})
