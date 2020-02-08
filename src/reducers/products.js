import * as productsAction from "../actions/products/products";

const initialState = {
    list: [],
    inShoopingCart: []
}

const shoppingCartProductStorageName = 'shopping-cart-product'

const setProductData = (payload) => {
    return payload.map(product => {
        return {
            id: product.rank,
            title: product.title.toLowerCase(),
            author: product.author,
            image: product.book_image,
            price: 10000,
            quantity: 0
        }
    })
}

const setShoppingCartProducts = (state, product) => {
    const inShoopingCart = state.inShoopingCart;
    inShoopingCart.push(product);
    localStorage.setItem(shoppingCartProductStorageName, JSON.stringify(inShoopingCart));

    return inShoopingCart;
}

const getShoppingCartProducts = (state) => {
    if (state.inShoopingCart.length === 0) {
        const shoppingCartProductStorage = localStorage.getItem(shoppingCartProductStorageName);
        state.inShoopingCart = JSON.parse(shoppingCartProductStorage);
        return state
    }

    return state;
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsAction.types.SHOW_PRODUCTS:
            return Object.assign({}, state, { list: setProductData(action.payload) });

        case productsAction.types.ADD_SHOPPING_CART: {
            return Object.assign({}, state, { inShoopingCart: setShoppingCartProducts(state, action.payload) });
        }

        case productsAction.types.GET_SHOPPING_CART_PRODUCTS:
            return getShoppingCartProducts(state);

        default:
            return state;
    }
}