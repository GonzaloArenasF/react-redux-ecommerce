import React from 'react';

// Style
import './shopping-cart.scss';

export const ShoopingCart = (data) => {

    return (data.hasToken) ? (
        <section className="shopping-cart"></section>
    ) : '';
}