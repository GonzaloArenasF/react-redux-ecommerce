import React from 'react';

// Style
import './shopping-cart-product.scss';


export const ShoppingCartProduct = (data) => {

    return (data.hasToken) ? (
        <article className="shopping-cart-product container-fluid" key={'Book-' + data.id}>
            <div className="row">
                <div className="col-2">
                    <h3>{data.quantity}</h3>
                </div>
                <div className="col-3">
                    <figure>
                        <img src={data.image} alt={data.title}></img>
                    </figure>
                </div>
                <div className="col-5">
                    <h4>{data.title}</h4>
                    <p>{data.author}</p>
                    <h4>{data.price}</h4>
                </div>
                <div className="col-2">
                    <h2>+</h2>
                    <h2>-</h2>
                </div>
            </div>
        </article>
    ) : '';
}