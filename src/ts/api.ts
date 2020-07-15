export class APIRequest {
    uri: string;
    headers: {};

    constructor(uri: string) {
        this.uri = uri;
    }

    getData(endpoint: string) {
        return new Promise((resolve, reject) => {
            if ('caches' in window) {
                caches.match(this.uri + endpoint).then((response) => {
                    if (response) resolve(response.json());
                });
            }

            fetch(this.uri + endpoint, {
                headers: this.headers,
            })
                .then((response) => resolve(response.json()))
                .catch((error) => reject(error));
        });
    }
}
