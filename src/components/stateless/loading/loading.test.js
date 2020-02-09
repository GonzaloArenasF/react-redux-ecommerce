import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './loading';

describe('Loading', () => {
    test('Render Custom Text', () => {
        const data = {
            isLoading: true,
            message: 'Custom Text Loading'
        };
        const { getByText } = render(Loading(data));

        const loadingTextRendered = getByText(data.message);
        expect(loadingTextRendered).toBeInTheDocument();
    });
});
