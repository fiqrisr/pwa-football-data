export class APIRequest {
    uri: string;
    token: string;
    headers: {};

    constructor(uri: string) {
        this.uri = uri;
    }

    setHeader(headers: {}) {
        this.headers = headers;
    }

    getData(endpoint: string) {
        return new Promise((resolve, reject) => {
            fetch(this.uri + endpoint, {
                headers: this.headers,
            })
                .then((response) => resolve(response.json()))
                .catch((error) => reject(error));
        });
    }
}
