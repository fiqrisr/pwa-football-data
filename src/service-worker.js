importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const PRECACHE_RESOURCES = [
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/style.css', revision: '1' },
    { url: '/main.js', revision: '1' },
    { url: '/service-worker.js', revision: '1' },
    { url: '/assets/images/favicons/manifest.json', revision: '1' },
    { url: '/assets/images/favicons/browserconfig.xml', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-144x144.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-192x192.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-256x256.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-36x36.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-384x384.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-48x48.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-512x512.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-72x72.png', revision: '1' },
    { url: '/assets/images/favicons/android-chrome-96x96.png', revision: '1' },
    { url: '/assets/images/favicons/apple-touch-icon.png', revision: '1' },
    { url: '/assets/images/favicons/favicon-16x16.png', revision: '1' },
    { url: '/assets/images/favicons/favicon-32x32.png', revision: '1' },
    { url: '/assets/images/favicons/favicon.ico', revision: '1' },
    { url: '/assets/images/favicons/mstile-150x150.png', revision: '1' },
    { url: '/assets/images/favicons/safari-pinned-tab.svg', revision: '1' },
    { url: '/assets/fonts/3570bfe74a87405d74f3065d07cf3aea.ttf', revision: '1' },
    { url: '/assets/fonts/4a03f967ab2acff6658734833726789f.woff2', revision: '1' },
    { url: '/assets/images/blank-badge.svg', revision: '1' },
    { url: '/assets/images/competitions/2001.webp', revision: '1' },
    { url: '/assets/images/competitions/2002.webp', revision: '1' },
    { url: '/assets/images/competitions/2003.webp', revision: '1' },
    { url: '/assets/images/competitions/2013.webp', revision: '1' },
    { url: '/assets/images/competitions/2014.webp', revision: '1' },
    { url: '/assets/images/competitions/2015.webp', revision: '1' },
    { url: '/assets/images/competitions/2017.webp', revision: '1' },
    { url: '/assets/images/competitions/2019.webp', revision: '1' },
    { url: '/assets/images/competitions/2021.webp', revision: '1' },
];

workbox.precaching.precacheAndRoute(PRECACHE_RESOURCES);

workbox.routing.registerRoute(
    new RegExp(/\.(?:png|gif|jpg|jpeg|svg|webp)$/),
    new workbox.strategies.CacheFirst({
        cacheName: 'cache-images',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 100,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cache-api',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://upload.wikimedia.org'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cache-crest',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 60,
            }),
        ],
    })
);

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
