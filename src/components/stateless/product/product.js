import React from 'react';

// Style
import './product.scss';

// Icons
import { ReactComponent as ShoppingCartAddingIcon } from '../../../assets/images/shopping-cart-adding.svg';

export const Book = (data) => {

    return (
        <article className="product">
            <figure>
                <img src={data.image} alt={data.title}></img>
                <figcaption>{data.title} de {data.author}</figcaption>
            </figure>
            <h4>{data.title}</h4>
            <p>{data.author}</p>
            { (data.hasToken) ? <ShoppingCartAddingIcon /> : '' }
        </article>
    )
}