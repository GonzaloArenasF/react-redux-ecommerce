import React from 'react';
import PropTypes from 'prop-types';

// Style
import './product.scss';

// Icons
import {
    IconShoppingCartAdding,
    IconCheck
} from '../icons';

const Book = (props) => {

    const addProductToShoppingCart = () => props.operations.addProductToShoppingCart(props.data);

    const renderShoppingCartAddingIcon = () => {
        return (props.data.quantity === 0) ? (
            <div className="icon-btn" onClick={addProductToShoppingCart}><IconShoppingCartAdding  /></div>
        ) : (
            <div className="icon-btn icon-check"><IconCheck /></div>
        )
    }

    return (
        <article className="product">
            <figure>
                <img src={props.data.image} alt={props.data.title}></img>
                <figcaption>{props.data.title} de {props.data.author}</figcaption>
            </figure>
            <h4>{props.data.title}</h4>
            <p>{props.data.author}</p>
            {(props.hasToken) ? renderShoppingCartAddingIcon() : '' }
        </article>
    )
}

Book.propTypes = {
    hasToken: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        inShoppingCart: PropTypes.bool.isRequired
    }),
    operations: PropTypes.shape({
        addProductToShoppingCart: PropTypes.func.isRequired
    })
}

export {
    Book
}