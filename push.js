const webPush = require('web-push');

const vapidKeys = {
    publicKey:
        'BChBY1UqzdJ1Jq1bMXOsLHwp91h-YhGmZyMbt245dA9tSQf6OG_-zYiNTJVzE6nVANadncWwDXNax936pSxcNyE',
    privateKey: 'tj-Ca9UFSLWh-pSeORAPGQvPR9Z5CRNBGuaUB2pypQ8',
};

webPush.setVapidDetails('mailto:example@yourdomain.org', vapidKeys.publicKey, vapidKeys.privateKey);
var pushSubscription = {
    endpoint:
        'https://fcm.googleapis.com/fcm/send/eJehv3r-dz4:APA91bG_FMrziggXnyA61QX_Oy53HKLsK06z1Ijo5XH5XmdMAjoe8aVXvdjz7UrXOqj45YHKbWXWK_6012QVdv1S5lUMGYDPlAEGbbf-KUT6eAeC8Dw-DdxD-Q3Cv8whaeKfMkLwtNf2',
    keys: {
        p256dh:
            'BEi3/ZeaLyezTWqt00upM4eGE/u65UQGnJx2YpqpK9H9GR5Cyp89yF/BUE+kdg0v5BJqpa2qFRskmaphBYOsmzg=',
        auth: 'CZj6rwpntpluMo+1ocR1dA==',
    },
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '271540061078',
    TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
