import React from 'react';
import { render } from '@testing-library/react';
import FooterSection from './footer';

describe('Footer Section', () => {
  test('Inner Texts', () => {
    const { getByText } = render(<FooterSection />);

    const topText = getByText(/Ecommerce developed over ReacJS and Redux/i);
    expect(topText).toBeInTheDocument();

    const bottomText = getByText(/Copyright 2020/i);
    expect(bottomText).toBeInTheDocument();
  });
});
