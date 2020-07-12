const CACHE_NAME = 'dev-v1';
const PRECACHE_RESOURCES = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/service-worker.js',
    '/assets/favicons/manifest.json',
    '/assets/favicons/manifest.webapp',
    '/assets/favicons/browserconfig.xml',
    '/assets/fonts/3570bfe74a87405d74f3065d07cf3aea.ttf',
    '/assets/fonts/4a03f967ab2acff6658734833726789f.woff2',
    '/assets/images/blank-badge.svg',
    '/assets/images/competitions/2001.webp',
    '/assets/images/competitions/2002.webp',
    '/assets/images/competitions/2003.webp',
    '/assets/images/competitions/2013.webp',
    '/assets/images/competitions/2014.webp',
    '/assets/images/competitions/2015.webp',
    '/assets/images/competitions/2017.webp',
    '/assets/images/competitions/2019.webp',
    '/assets/images/competitions/2021.webp',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(PRECACHE_RESOURCES);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((res) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request.url, res.clone());
                    return res;
                });
            })
            .catch((err) => {
                return caches.match(event.request);
            })
    );
});
