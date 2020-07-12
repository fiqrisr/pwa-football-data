const CACHE_NAME = 'dev-v1';
const PRECACHE_RESOURCES = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/service-worker.js',
    '/assets/favicons/manifest.json',
    '/assets/favicons/browserconfig.xml',
    '/assets/favicons/site.webmanifest',
    '/assets/images/favicons/android-chrome-144x144.png',
    '/assets/images/favicons/android-chrome-192x192.png',
    '/assets/images/favicons/android-chrome-256x256.png',
    '/assets/images/favicons/android-chrome-36x36.png',
    '/assets/images/favicons/android-chrome-384x384.png',
    '/assets/images/favicons/android-chrome-48x48.png',
    '/assets/images/favicons/android-chrome-512x512.png',
    '/assets/images/favicons/android-chrome-72x72.png',
    '/assets/images/favicons/android-chrome-96x96.png',
    '/assets/images/favicons/apple-touch-icon.png',
    '/assets/images/favicons/favicon-16x16.png',
    '/assets/images/favicons/favicon-32x32.png',
    '/assets/images/favicons/favicon.ico',
    '/assets/images/favicons/mstile-150x150.png',
    '/assets/images/favicons/safari-pinned-tab.svg',
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

self.addEventListener('push', (event) => {
    let body;

    if (event.data) body = event.data.text();
    else body = 'Push message no payload';

    const options = {
        body: body,
        icon: 'assets/images/blank-badge.svg',
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
        },
    };

    event.waitUntil(self.registration.showNotification('Push Notification', options));
});
