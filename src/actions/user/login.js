import { Observable } from 'rxjs';
import axios from 'axios';

const tokenStoragedName = 'ecommerce-token';

export const DOING_LOGIN = 'DOING_LOGIN';
export function login() {
    const urlService = 'https://reqres.in/api/login';

    return (dispatch, getState) => {
        axios.get(urlService)
            .then((response) => {
                const token = (response.data.token) ? response.data.token : null;
                const hasToken = (token) ? true : false;
                if (hasToken) localStorage.setItem(tokenStoragedName, response.data.token)
                dispatch({ type: DOING_LOGIN, payload: hasToken })
            })
    }
}

export const hasToken = () => (
    new Observable(subscriber => {
        const ecommerceToken = localStorage.getItem(tokenStoragedName);
        subscriber.next((ecommerceToken && ecommerceToken !== '') ? true : false);
    })
);