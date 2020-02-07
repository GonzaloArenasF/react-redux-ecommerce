import * as productsAction from "../actions/products/products";

const initialState = {
    list: [],
    inShoopingCart: []
}

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

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsAction.types.SHOW_PRODUCTS:
            return Object.assign({}, state, { list: setProductData(action.payload) });

        case productsAction.types.ADD_SHOPPING_CART: {
            const inShoopingCart = state.inShoopingCart;
            inShoopingCart.push(action.payload);
            return Object.assign({}, state, { inShoopingCart });
        }

        case productsAction.types.GET_SHOPPING_CART_PRODUCTS:
            return state;

        default:
            return state;
    }
}