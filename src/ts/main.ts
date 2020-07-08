import { competitionListController } from './controllers/competitionListController';
import { competitionController } from './controllers/competitionController';
import { loadPageNotFound } from './base';

const competitionListID = ['2001', '2017', '2021', '2003', '2002', '2015', '2019', '2014', '2013'];

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
            loadPageNotFound();
    }
};

['hashchange', 'load'].forEach((event) => window.addEventListener(event, loadPage));
