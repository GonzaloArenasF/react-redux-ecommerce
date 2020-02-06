import { Observable } from 'rxjs';
import axios from 'axios';

const tokenStoragedName = 'ecommerce-token';

const setToken = (token) => (
    localStorage.setItem(tokenStoragedName, token)
);

const removeToken = () => {
    localStorage.removeItem(tokenStoragedName);
}

const hasToken = new Observable((subscriber) => {
    const intervalId = setInterval(() => {
        subscriber.next((localStorage.getItem(tokenStoragedName)) ? true : false);
    }, 1000);

    return function unsubscribe() {
        clearInterval(intervalId);
    };
});

export const tokenService = {
    hasToken,
    removeToken,
    setToken
};

export function login(email, password) {
    const urlService = 'https://reqres.in/api/login';
    return axios.post(urlService, { email, password });
}