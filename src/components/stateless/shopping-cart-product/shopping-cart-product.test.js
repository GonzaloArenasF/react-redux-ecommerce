import React from 'react';
import { render } from '@testing-library/react';
import { ShoppingCartProduct } from './shopping-cart-product';

describe('Testing Shopping Cart Product', () => {

    const noProducts = {
        list: [],
        increaseQuantity: () => {},
        decreaseQuantity: () => {},
        updateList: () => {},
    };

    test('No products', () => {
        const { getByText } = render(ShoppingCartProduct(noProducts));

        expect(
            getByText('There are no products selected')
        ).toBeInTheDocument();
    });
});
