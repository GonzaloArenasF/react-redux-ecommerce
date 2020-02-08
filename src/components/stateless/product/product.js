import React from 'react';

// Style
import './product.scss';

// Icons
import { ReactComponent as ShoppingCartAddingIcon } from '../../../assets/images/shopping-cart-adding.svg';
import { ReactComponent as IconCheck } from '../../../assets/images/icon-check.svg';

export const Book = (data) => {

    const addProductToShoppingCart = () => data.addProductToShoppingCart(data);

    const renderShoppingCartAddingIcon = () => {
        return (data.quantity === 0) ? (
            <ShoppingCartAddingIcon onClick={addProductToShoppingCart} />
        ) : (
            <IconCheck className="icon-check" />
        )
    }

    return (
        <article className="product contsiner-fluid">
            <figure>
                <img src={data.image} alt={data.title}></img>
                <figcaption>{data.title} de {data.author}</figcaption>
            </figure>
            <h4>{data.title}</h4>
            <p>{data.author}</p>
            {(data.hasToken) ? renderShoppingCartAddingIcon() : '' }
        </article>
    )
}