import { urlBase64ToUint8Array } from './base';

const requestPermission = () => {
    Notification.requestPermission().then((result) => {
        if (result === 'denied') {
            console.log('Fitur notifikasi tidak diizinkan.');
            return;
        } else if (result === 'default') {
            console.error('Pengguna menutup kotak dialog permintaan izin.');
            return;
        }

        console.log('Fitur notifikasi diizinkan.');
    });
};

if ('Notification' in window) requestPermission();
else console.log('Browser tidak mendukung notifikasi.');

if ('PushManager' in window) {
    navigator.serviceWorker.getRegistration().then((registration) => {
        registration.pushManager
            .subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                    'BChBY1UqzdJ1Jq1bMXOsLHwp91h-YhGmZyMbt245dA9tSQf6OG_-zYiNTJVzE6nVANadncWwDXNax936pSxcNyE'
                ),
            })
            .then(function (subscribe) {
                console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                console.log(
                    'Berhasil melakukan subscribe dengan p256dh key: ',
                    btoa(
                        String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('p256dh')))
                    )
                );
                console.log(
                    'Berhasil melakukan subscribe dengan auth key: ',
                    btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('auth'))))
                );
            })
            .catch(function (e) {
                console.error('Tidak dapat melakukan subscribe ', e.message);
            });
    });
}
