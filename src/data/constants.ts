import { RegularExpressions } from './types';

export const ERROR_MESSAGE = 'Error with fetch request!';

export const REGULAR_EXPRESSIONS: RegularExpressions = {
    name: /[a-zA-Z]{3,}\s[a-zA-Z]{3,}/,
};

export const API = {
    baseUrl: 'http://127.0.0.1:3000/',
    endpoint: 'endpoint',
};

