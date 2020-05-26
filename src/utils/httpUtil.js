import axios from 'axios';
import {getToken} from './storage'
import store from './store';

export function fetch(url, endpoint) {
    store.dispatch({
        type: 'API_PROCESS'
    });
    return axios
        .get(url + endpoint, {
            headers: {
                "Content-Type": "application/json",
                token: getToken,
            }
        })
}

export function post(url, data) {
    store.dispatch({
        type: 'API_PROCESS'
    });
    return axios
        .post(url, data, {
            headers: {
                "Content-Type": "application/json",
                token: getToken,
            }
        });
}

export function update(url, data) {
    store.dispatch({
        type: 'API_PROCESS'
    });
    return axios
        .put(url, data, {
            headers: {
                "Content-Type": "application/json",
                token: getToken,
            }
        });
}

export function destroy(url, endpoint) {
    store.dispatch({
        type: 'API_PROCESS'
    });
    return axios
        .delete(url + endpoint, {
            headers: {
                "Content-Type": "application/json",
                token: getToken,
            }
        });
}
