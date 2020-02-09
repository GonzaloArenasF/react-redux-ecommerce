import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'prop-types';

import ShoppingCartProduct from './shopping-cart-product';

const componentSetUp = (props = {}) => shallow(<ShoppingCartProduct { ...props } />);
const props = {
    list: [{}],
    operations: {
        increaseQuantity: () => {},
        decreaseQuantity: () => {},
        updateList: () => {}
    }
};

describe('Shopping Cart Product Component', () => {

    test('Should render without errors', () => {
        const component = componentSetUp(props);
        const wrapper = component.find('.shopping-cart-product');
        expect(wrapper.length).toBe(1);
    });
});