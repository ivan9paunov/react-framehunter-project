import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/data/frames';

export const getAll = () => request.get(BASE_URL);