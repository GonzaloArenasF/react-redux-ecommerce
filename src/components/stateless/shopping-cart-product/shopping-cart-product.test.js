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

const product = { id: 1, title: 'titulo 1', author: 'author 1', price: 1, image: 'image 1', quantity: 1 };

const productsList = [
    { id: 1, title: 'titulo 1', author: 'author 1', price: 1, image: 'image 1', quantity: 1 },
    { id: 2, title: 'titulo 2', author: 'author 2', price: 2, image: 'image 2', quantity: 2 },
    { id: 3, title: 'titulo 3', author: 'author 3', price: 3, image: 'image 3', quantity: 3 }
];

describe('Shopping Cart Product Component', () => {

    test('Should render without errors', () => {
        const component = componentSetUp(props);
        const wrapper = component.find('.shopping-cart-product');
        expect(wrapper.length).toBe(1);
    });

    // test('Should prop types be correct', () => {
    //     const component = componentSetUp(props);
    //     const propsErr = checkPropTypes(Book.propTypes, props, 'props', Book.name);
    //     expect(propsErr).toBeUndefined();
    // });

    test('Should render all items', () => {
        props.list = productsList;
        const component = componentSetUp(props);
        const wrapper = component.find('.shopping-cart-product');
        expect(wrapper.length).toBe(productsList.length);
    });

    test('Should render right structure', () => {
        props.list = [product];
        const component = componentSetUp(props);

        let wrapper;

        wrapper = component.find('.shopping-cart-product__image');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__title');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__decent');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__price');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__controls');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__controls__quantity');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__controls__buttons');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__controls__buttons__minus');
        expect(wrapper.length).toBe(1);

        wrapper = component.find('.shopping-cart-product__controls__buttons__plus');
        expect(wrapper.length).toBe(1);
    });

    test('Should render right content', () => {
        props.list = [product];
        const component = componentSetUp(props);

        let wrapper;

        wrapper = component.contains(product.title);
        expect(wrapper).toBeTruthy();

        wrapper = component.contains(product.author);
        expect(wrapper).toBeTruthy();

        wrapper = component.contains(product.price);
        expect(wrapper).toBeTruthy();

        wrapper = component.contains(product.quantity);
        expect(wrapper).toBeTruthy();
    });

    test('Should appear message no products', () => {
        props.list = [];

        const component = componentSetUp(props);

        let wrapper = component.contains('There are no products selected');
        expect(wrapper).toBeTruthy();
    });

});