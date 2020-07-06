import { Competition } from './models/Competition';

const getData = (url: string) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            headers: {
                'X-Auth-Token': '321f62aebd5c4bce8a97f2c39a19a455',
            },
        })
            .then((response) => resolve(response.json()))
            .catch(() => console.error('Failed to load data'));
    });
};

async function printToConsole() {
    const data = await getData('https://api.football-data.org/v2/competitions/2000');

    let compData = new Competition(data);
    compData.print();
}

document.getElementById('send').addEventListener('click', printToConsole);
