import { APIRequest } from './api';

const URI: string = 'https://api.football-data.org/v2/';
const API_TOKEN: string = '321f62aebd5c4bce8a97f2c39a19a455';

const elements = {
    contentBody: document.querySelector('#content-body'),
    pageTitle: document.querySelector('#page-title'),
};

const apiRequest = new APIRequest(URI);
apiRequest.headers = { 'X-Auth-Token': API_TOKEN };

const renderPreloader = (parent: Element) => {
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

const clearPreloader = () => {
    const loader = document.querySelector('#preloader');
    if (loader) loader.parentElement.removeChild(loader);
};

export { elements, apiRequest, renderPreloader, clearPreloader };
