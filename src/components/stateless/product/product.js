import React from 'react';

// Actions
import { hasToken } from '../../../actions';

// Style
import './product.scss';

// Icons
import { ReactComponent as ShoppingCartAddingIcon } from '../../../assets/images/shopping-cart-adding.svg';

let renderShoppingCartAddingIcon = '';

hasToken().subscribe(
    (hasToken) => {
       renderShoppingCartAddingIcon = (hasToken) ? <ShoppingCartAddingIcon /> : '';
    },
)

export const Book = (data) => {
    return (
        <article className="product">
            <figure>
                <img src={ data.image } alt={ data.title }></img>
                <figcaption>{ data.title } de { data.author }</figcaption>
            </figure>
            <h4>{ data.title }</h4>
            <p>{data.author}</p>
            { renderShoppingCartAddingIcon }
        </article>
    )
}