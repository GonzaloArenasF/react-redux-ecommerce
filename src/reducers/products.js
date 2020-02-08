import * as productsAction from "../actions/products/products";

const initialState = {
    list: [],
    inShoppingCart: []
}

const setProductData = (products) => {
    return products.map(product => {
        return {
            id: product.rank,
            title: product.title.toLowerCase(),
            author: product.author,
            image: product.book_image,
            price: parseInt(Math.random() * (100000 - 1) + 1),
            quantity: 0,
            inShoppingCart: false
        }
    })
}

const setShoppingCartProducts = (state, productAdded) => {
    const productFromList = state.list.find(product => product.id === productAdded.id);
    productFromList.quantity++;
    productFromList.inShoppingCart = true;
}

const getShoppingCartProducts = (state) => {
    return state.list.filter(product => (product.inShoppingCart === true));
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsAction.types.SHOW_PRODUCTS:
            return Object.assign({}, state, { list: setProductData(action.payload) });

        case productsAction.types.ADD_SHOPPING_CART: {
            console.log('ADD_SHOPPING_CART');
            setShoppingCartProducts(state, action.payload);
            return state;
        }

        case productsAction.types.GET_SHOPPING_CART_PRODUCTS:
            console.log('GET_SHOPPING_CART_PRODUCTS');
            return Object.assign({}, state, { inShoppingCart: getShoppingCartProducts(state) });

        default:
            return state;
    }
}