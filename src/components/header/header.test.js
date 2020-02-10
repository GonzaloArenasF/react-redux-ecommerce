import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import checkPropTypes from 'prop-types';

import reducers from '../../reducers';

import HeaderSection from './header';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const componentSetUp = (props = {}) => shallow(
    <Provider store={store}>
        <HeaderSection {...props} />
    </Provider>
);

const props = {
    hasToken: true,
    isAccessing: false,
    openShooping: false,
    login: (true),
    clearToken: (true),
    store: (true),
};

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    }
    const next = jest.fn()
    const invoke = action => thunk(store)(next)(action)
    return { store, next, invoke }
}

describe('Header Section', () => {
    let component;

    test('Should render without errors', () => {
        component = componentSetUp(props);
        console.log(component.debug());
        let wrapper;

        wrapper = component.find('ContextProvider');
        expect(wrapper.length).toBe(1);
    });

    test('Should appear title', () => {

    });

    test('Should no render ShoppingCartSection if has not token', () => {

    });

    test('Should render IconUser if has not token', () => {

    });

    test('Should render IconShoopingCart if has token', () => {

    });

    test('Should render IconLogout if has token', () => {

    });

    test('Should render Loading if it is accesing', () => {

    });

    test('Should apply SHOW_PRODUCTS redux action', () => {
        const { next, invoke } = create()
        const action = { type: 'SHOW_PRODUCTS' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    });

});