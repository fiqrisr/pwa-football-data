const webPush = require('web-push');

const vapidKeys = {
    publicKey:
        'BChBY1UqzdJ1Jq1bMXOsLHwp91h-YhGmZyMbt245dA9tSQf6OG_-zYiNTJVzE6nVANadncWwDXNax936pSxcNyE',
    privateKey: 'tj-Ca9UFSLWh-pSeORAPGQvPR9Z5CRNBGuaUB2pypQ8',
};

webPush.setVapidDetails('mailto:example@yourdomain.org', vapidKeys.publicKey, vapidKeys.privateKey);
var pushSubscription = {
    endpoint:
        'https://fcm.googleapis.com/fcm/send/dhFahXcVgiQ:APA91bGw5vz-3sId4W4yDtzNaA87EXUWsVEwJ8LYOhExX35S6PNNfrqxVEPZF_Vo_2Rb9mLw7Inhgjt314R7D2P65T0Z3TgyVBNj9RZi736jTF9OMYmzS1X_73txAlzp76jw-ePhyaBR',
    keys: {
        p256dh:
            'BPcLofVtNP/mdsrWm9eSx9OxjzQbD9oF62SArOw8srAw3CXiv2ditYARd60w/KxVgJlwVsOKj0Fpq3LYg0OdrPw=',
        auth: '28VRfBETsiq8CPbexJOqkA==',
    },
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '271540061078',
    TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
