import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const helloworldService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/helloWorld`, requestOptions).then(handleResponse);
}