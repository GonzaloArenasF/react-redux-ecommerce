import React from 'react';

// Style
import './shopping-cart-product.scss';

const renderProduct = (product) => {
    const randomID = parseInt(Math.random() * (1000000 - 1) + 1);

    return (
        <article className="shopping-cart-product container-fluid" key={'shopping-cart-book-' + product.id + '-' + randomID}>
            <div className="row">
                <div className="col-3">
                    <figure className="shopping-cart-product__image">
                        <img src={product.image} alt={product.title}></img>
                    </figure>
                </div>
                <div className="col-6">
                    <h4 className="shopping-cart-product__title">{product.title}</h4>
                    <p className="shopping-cart-product__decent">{product.author}</p>
                    <h4 className="shopping-cart-product__price">{product.price}</h4>
                </div>
                <div className="col-3 shopping-cart-product__controls">
                    <h3 className="shopping-cart-product__controls__quantity">{product.quantity}</h3>
                    <h2 className="shopping-cart-product__controls__minus">-</h2>
                    <h2 className="shopping-cart-product__controls__plus">+</h2>
                </div>
            </div>
        </article>
    )
}


export const ShoppingCartProduct = (data) => {
    if (data.hasToken) {
        return data.products.map(product => renderProduct(product));
    }

    return '';
}