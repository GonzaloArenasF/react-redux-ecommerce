import axios from 'axios';

export const types = {
    SHOW_PRODUCTS: 'SHOW_PRODUCTS',
    ADD_SHOPPING_CART: 'ADD_SHOPPING_CART',
    SUBSTRACT_SHOPPING_CART_PRODUCTS: 'SUBSTRACT_SHOPPING_CART_PRODUCTS',
    GET_SHOPPING_CART_PRODUCTS: 'GET_SHOPPING_CART_PRODUCTS'
}

export function getProducts() {
    const apiKey = 'rkSH9nXm4vAlU43CP1IVBNwMSns9GsgS';
    const urlService = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + apiKey;

    return (dispatch, getState) => {
        axios.get(urlService)
            .then((response) => {
                const products = response.data.results.books;
                dispatch({ type: types.SHOW_PRODUCTS, payload: products })
            })
    }
}

export function addProductToShoppingCart(product) {
    return (dispatch, getState) => {
        dispatch({ type: types.ADD_SHOPPING_CART, payload: product })
    }
}

export function subtractProductToShoppingCart(product) {
    return (dispatch, getState) => {
        dispatch({ type: types.SUBSTRACT_SHOPPING_CART_PRODUCTS, payload: product })
    }
}

export function getShoppingCartProducts() {
    return (dispatch, getState) => {
        dispatch({ type: types.GET_SHOPPING_CART_PRODUCTS });
    }
}