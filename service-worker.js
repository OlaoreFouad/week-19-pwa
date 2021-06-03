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

// self.addEventListener('fetch', (e) => {
//     e.respondWith(
//         caches.match(e.request).then(function(r) {
//             console.log('Fetching resource');
//             return r;
//         })
//     )
// })

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(function(r) {
            return r ||  fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    cache.put(e.request, response.clone())
                    return response;
                })
            }
            )
        })
    )
})
