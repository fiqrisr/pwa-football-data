import { APIRequest } from './api';

const URI: string = 'https://api.football-data.org/v2/';
const API_TOKEN: string = '321f62aebd5c4bce8a97f2c39a19a455';

export const elements = {
    contentBody: document.querySelector('#content-body'),
    pageTitle: document.querySelector('#page-title'),
};

export const apiRequest = new APIRequest(URI);
apiRequest.headers = { 'X-Auth-Token': API_TOKEN };

export const renderPreloader = (parent: Element) => {
    const loader = `
        <div class="preloader-container center col s12" id="preloader">
            <div class="preloader-wrapper active">
                <div class="spinner-layer spinner-red-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    parent.insertAdjacentHTML('beforeend', loader);
};

export const loadPageNotFound = () => {
    elements.pageTitle.textContent = '404 not found';
    elements.contentBody.innerHTML = '';
};

export const clearPreloader = () => {
    const loader = document.querySelector('#preloader');
    if (loader) loader.parentElement.removeChild(loader);
};

export const clearContentBody = () => {
    elements.contentBody.innerHTML = '';
};
