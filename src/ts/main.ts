import { competitionListController } from './controllers/competitionList';

const competitionListID = [
    '2001',
    '2017',
    '2021',
    '2003',
    // '2004',
    // '2015',
    // '2019',
    // '2016',
    // '2000',
    // '2018',
];

// async function printToConsole() {
//     const api = new APIRequest(URI);
//     api.headers = { 'X-Auth-Token': API_TOKEN };

//     const data = await api.getData('competitions/2000');

//     const comp = new Competition(data);
//     comp.print();
// }

// document.getElementById('send').addEventListener('click', printToConsole);

competitionListController(competitionListID);
