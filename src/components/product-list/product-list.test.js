import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import checkPropTypes from 'prop-types';

import reducers from '../../reducers';

import ProductListSection from './product-list';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const componentSetUp = (props = {}) => shallow(
    <Provider store={store}>
        <ProductListSection {...props} />
    </Provider>
);

const props = {
    products: [],
    addProductToShoppingCart: (true),
    getProducts: (true),
};

const product = { id: 1, title: 'titulo 1', author: 'author 1', price: 1, image: 'image 1', quantity: 1 };

const productsList = [
    { id: 1, title: 'titulo 1', author: 'author 1', price: 1, image: 'image 1', quantity: 1 },
    { id: 2, title: 'titulo 2', author: 'author 2', price: 2, image: 'image 2', quantity: 2 },
    { id: 3, title: 'titulo 3', author: 'author 3', price: 3, image: 'image 3', quantity: 3 }
];

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    }
    const next = jest.fn()
    const invoke = action => thunk(store)(next)(action)
    return { store, next, invoke }
}

describe('Product List Section', () => {
    let component;

    test('Should render without errors', () => {
        component = componentSetUp(props);
        let wrapper;

        wrapper = component.find('ContextProvider');
        expect(wrapper.length).toBe(1);
    });

    test('Should apply SHOW_PRODUCTS redux action', () => {
        const { next, invoke } = create()
        const action = { type: 'SHOW_PRODUCTS' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    });

});