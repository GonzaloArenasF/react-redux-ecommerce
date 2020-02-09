
import React from 'react';
import { render } from '@testing-library/react';
import { Book } from './product';

describe('Testing products components', () => {
    const dataBookNoSelected = {
        id: 1,
        title: 'El Libro',
        author: 'El Gran Autor',
        image: 'url-imagen',
        price: 10000,
        quantity: 0,
        inShoppingCart: false,
        hasToken: true
    }

    test('Book no selected', () => {
        const { getByText } = render(Book(dataBookNoSelected));

        expect(
            getByText(dataBookNoSelected.title)
        ).toBeInTheDocument();

        expect(
            getByText(dataBookNoSelected.author)
        ).toBeInTheDocument();

        expect(
            getByText(dataBookNoSelected.title + ' de ' + dataBookNoSelected.author)
        ).toBeInTheDocument();

        expect(
            getByText('shopping-cart-adding.svg')
        ).toBeInTheDocument();
    });

    const dataBookSelected = {
        id: 1,
        title: 'El Libro',
        author: 'El Gran Autor',
        image: 'url-imagen',
        price: 10000,
        quantity: 1,
        inShoppingCart: true,
        hasToken: true
    }

    test('Book selected', () => {
        const { getByText } = render(Book(dataBookSelected));

        expect(
            getByText(dataBookSelected.title)
        ).toBeInTheDocument();

        expect(
            getByText(dataBookSelected.author)
        ).toBeInTheDocument();

        expect(
            getByText(dataBookSelected.title + ' de ' + dataBookSelected.author)
        ).toBeInTheDocument();

        expect(
            getByText('icon-check.svg')
        ).toBeInTheDocument();
    });

    const dataBookNoLogin = {
        id: 1,
        title: 'El Libro',
        author: 'El Gran Autor',
        image: 'url-imagen',
        price: 10000,
        quantity: 0,
        inShoppingCart: false,
        hasToken: false
    }

    test('Book No Login', () => {
        const { getByText } = render(Book(dataBookNoLogin));

        expect(
            getByText(dataBookNoLogin.title)
        ).toBeInTheDocument();

        expect(
            getByText(dataBookNoLogin.author)
        ).toBeInTheDocument();

        expect(
            getByText(dataBookNoLogin.title + ' de ' + dataBookNoLogin.author)
        ).toBeInTheDocument();
    });
});
