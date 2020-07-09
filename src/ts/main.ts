import * as M from 'materialize-css';
import { loadPageNotFound } from './base';
import { competitionListController } from './controllers/competitionListController';
import { competitionController } from './controllers/competitionController';
import { teamListController } from './controllers/teamListController';
import { bookmarkController } from './controllers/bookmarkController';

const competitionListID = ['2001', '2017', '2021', '2003', '2002', '2015', '2019', '2014', '2013'];

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(function () {
                console.log('Pendaftaran ServiceWorker berhasil');
            })
            .catch(function () {
                console.log('Pendaftaran ServiceWorker gagal');
            });
    });
} else {
    console.log('ServiceWorker belum didukung browser ini.');
}

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
        case 'teams':
            teamListController(competitionListID);
            break;
        case 'bookmarks':
            bookmarkController();
            break;
        default:
            loadPageNotFound();
    }
};

['hashchange', 'load'].forEach((event) => window.addEventListener(event, loadPage));

M.Sidenav.init(document.querySelectorAll('.sidenav'));
