import React from 'react';
import PropTypes from 'prop-types';

// Style
import './shopping-cart-product.scss';

const renderProduct = (product, operations) => {

    const increaseProductQuantity = () => {
        operations.increaseQuantity(product);
        operations.updateProductsList();
    }

    const decreaseProductQuantity = () => {
        operations.decreaseQuantity(product);
        operations.updateProductsList();
    }

    return (
        <article className="shopping-cart-product container-fluid" key={'shopping-cart-book-' + product.id}>
            <div className="row">
                <div className="col-4 col-md-3">
                    <figure className="shopping-cart-product__image">
                        <img src={product.image} alt={product.title}></img>
                    </figure>
                </div>
                <div className="col-8 col-md-6">
                    <h4 className="shopping-cart-product__title">{product.title}</h4>
                    <p className="shopping-cart-product__decent">{product.author}</p>
                    <h4 className="shopping-cart-product__price">{product.price}</h4>
                </div>
                <div className="col-12 col-md-3 shopping-cart-product__controls">
                    <h3 className="shopping-cart-product__controls__quantity">{product.quantity}</h3>
                    <div className="shopping-cart-product__controls__buttons">
                        <h2 className="shopping-cart-product__controls__buttons__minus" onClick={decreaseProductQuantity}>-</h2>
                        <h2 className="shopping-cart-product__controls__buttons__plus" onClick={increaseProductQuantity}>+</h2>
                    </div>
                </div>
            </div>
            <hr />
        </article>
    )
}

const ShoppingCartProduct = (props) => {
    return (props && props.list.length > 0)
        ? props.list.map(product => renderProduct(product, {
            increaseQuantity: props.operations.increaseQuantity,
            decreaseQuantity: props.operations.decreaseQuantity,
            updateProductsList: props.operations.updateList
        }))
        : <center>There are no products selected</center>;
}

ShoppingCartProduct.propTypes = {
    list: PropTypes.array.isRequired,
    operations: PropTypes.shape({
        increaseQuantity: PropTypes.func.isRequired,
        decreaseQuantity: PropTypes.func.isRequired,
        updateList: PropTypes.func.isRequired
    })
};

export default ShoppingCartProduct;