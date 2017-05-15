import * as types from './actionTypes';
import * as urls from './api';
import axios from 'axios';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return dispatch => {
        return axios.get(`${urls.AUTHORS}`)
            .then(authors => { dispatch(loadAuthorsSuccess(authors.data)); })
            .catch(error => { throw (error); });
    };
}