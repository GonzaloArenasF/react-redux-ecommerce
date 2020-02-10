import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'prop-types';

import { Book } from './product';

const componentSetUp = (props = {}) => shallow(<Book { ...props } />);
const props = {
    hasToken: false,
    data: {
        id: 1,
        title: 'titulo 1',
        author: 'author 1',
        price: 1,
        image: 'image 1',
        quantity: 1,
        inShoppingCart: true
    },
    operations: {
        addProductToShoppingCart: () => {}
    }
};

describe('Product Book', () => {
    let component;

    beforeEach(() => {
        component = componentSetUp(props);
    });

    test('Should render without errors', () => {
        const wrapper = component.find('.product');
        expect(wrapper.length).toBe(1);
    });

    // test('Should prop types be correct', () => {
    //     const propsErr = checkPropTypes(Book.propTypes, props, 'props', Book.name);
    //     expect(propsErr).toBeUndefined();
    // });

    test('Should no appear any button if there is no token', () => {
        props.hasToken = false;
        component = componentSetUp(props);

        let wrapper;

        wrapper = component.find('.icon-check');
        expect(wrapper.length).toBe(0);

        wrapper = component.find('.icon-shopping-cart-adding');
        expect(wrapper.length).toBe(0);
    });

    test('Should appear right content', () => {
        let wrapper;

        wrapper = component.contains(props.data.title);
        expect(wrapper).toBeTruthy();

        wrapper = component.contains(props.data.author);
        expect(wrapper).toBeTruthy();
    });
});