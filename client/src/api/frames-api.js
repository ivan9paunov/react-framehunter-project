import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/data/frames';

const getAll = () => request.get(BASE_URL);

const getOne = (frameId) => request.get(`${BASE_URL}/${frameId}`);

const framesAPI = {
    getAll,
    getOne
};

export default framesAPI;