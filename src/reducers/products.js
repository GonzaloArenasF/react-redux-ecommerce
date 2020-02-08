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

const setShoppingCartProduct = (state, productAdded) => {
    const productFromList = state.list.find(product => product.id === productAdded.id);
    productFromList.quantity++;
    productFromList.inShoppingCart = true;
}

const unsetShoppingCartProduct = (state, productSubstracted) => {
    const productFromList = state.list.find(product => product.id === productSubstracted.id);
    productFromList.quantity--;
    if (productFromList.quantity === 0) productFromList.inShoppingCart = false;
}

const getShoppingCartProducts = (state) => {
    return state.list.filter(product => (product.inShoppingCart === true));
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsAction.types.SHOW_PRODUCTS:
            return Object.assign({}, state, { list: setProductData(action.payload) });

        case productsAction.types.ADD_SHOPPING_CART:
            setShoppingCartProduct(state, action.payload);
            return state;

        case productsAction.types.SUBSTRACT_SHOPPING_CART_PRODUCTS:
            unsetShoppingCartProduct(state, action.payload);
            return state;

        case productsAction.types.GET_SHOPPING_CART_PRODUCTS:
            return Object.assign({}, state, { inShoppingCart: getShoppingCartProducts(state) });

        default:
            return state;
    }
}