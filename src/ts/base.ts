import { APIRequest } from './api';

const URI: string = 'https://api.football-data.org/v2/';
const API_TOKEN: string = '321f62aebd5c4bce8a97f2c39a19a455';

const elements = {
    contentBody: document.querySelector('#content-body'),
};

const apiRequest = new APIRequest(URI);
apiRequest.headers = { 'X-Auth-Token': API_TOKEN };

export { elements, apiRequest };
