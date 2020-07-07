import { competitionListController } from './controllers/competitionListController';
import { competitionController } from './controllers/competitionController';

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

const loadPage = () => {
    const location = window.location.hash.substr(1);
    const id = location.replace('competitions/', '');

    switch (location) {
        case '':
        case 'competitions':
            competitionListController(competitionListID);
            break;
        case `competitions/${id}`:
            competitionController(id);
            break;
        default:
            console.log('404 not found');
    }
};

['hashchange', 'load'].forEach((event) => window.addEventListener(event, loadPage));
