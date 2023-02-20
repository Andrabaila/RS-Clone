import { RegularExpressions } from './types';

export const ERROR_MESSAGE = 'Error with fetch request!';

export const REGULAR_EXPRESSIONS: RegularExpressions = {
    name: /[a-zA-Z]{3,}\s[a-zA-Z]{3,}/,
};

export const API = {
    baseUrl: 'https://back-for-rs-clone-production.up.railway.app/',
    groups: 'groups',
    users: 'users',
    expenses: 'expenses',
};

export const API_NBRB = {
    baseUrl: 'https://www.nbrb.by/api/exrates/',
    currencies: 'currencies',
    rates: 'rates',
};

export const MAX_MOBILE_WIDTH = 768;
