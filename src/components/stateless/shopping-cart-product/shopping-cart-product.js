import React from 'react';

// Style
import './shopping-cart-product.scss';


export const ShoppingCartProduct = (data) => {

    return (data.hasToken) ? (
        <article className="shopping-cart-product container-fluid">
            <div className="row">
                <div className="col-2">
                    <h3>1</h3>
                </div>
                <div className="col-3">
                    <figure>
                        <img src="" alt=""></img>
                    </figure>
                </div>
                <div className="col-5">
                    <h4></h4>
                    <p></p>
                    <h4></h4>
                </div>
                <div className="col-2">
                    <h2>+</h2>
                    <h2>-</h2>
                </div>
            </div>
        </article>
    ) : '';
}