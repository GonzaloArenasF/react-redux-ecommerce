import { Observable } from 'rxjs';
import axios from 'axios';

export const tokenStoragedName = 'ecommerce-token';

export const types = {
    LOGIN: 'LOGIN',
    CLEAR_TOKEN: 'CLEAR_TOKEN',
};

export const hasToken = new Observable((subscriber) => {
    const intervalId = setInterval(() => {
        subscriber.next((localStorage.getItem(tokenStoragedName)) ? true : false);
    }, 1000);

    return function unsubscribe() {
        clearInterval(intervalId);
    };
});

/*
    Actions
*/
export function login() {
    const email = 'eve.holt@reqres.in';
    const password = 'cityslicka';
    const urlService = 'https://reqres.in/api/login';

    return (dispatch, getState) => {
        axios.post(urlService, { email, password })
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem(tokenStoragedName, token);
                dispatch({ type: types.LOGIN, payload: token });
            });
    }
}

export function clearToken() {
    return (dispatch, getState) => {
        dispatch({ type: types.CLEAR_TOKEN })
    }
}