import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import {
    getShoppingCartProducts,
    addProductToShoppingCart,
    subtractProductToShoppingCart
} from '../../actions/products/products';

// Stateless
import ShoppingCartProduct from '../stateless/shopping-cart-product/shopping-cart-product';

// Images
import { IconClose } from '../stateless/icons';

// styles
import './shopping-cart.scss';

class ShoppingCartSection extends Component {

    shoppingCartProductOperations = {
        increaseQuantity: this.props.addProductToShoppingCart,
        decreaseQuantity: this.props.subtractProductToShoppingCart,
        updateList: this.props.getShoppingCartProducts
    }

    componentDidMount() {
        this.props.getShoppingCartProducts();
    }

    render() {
        return (
            <section className="shopping-cart">
                <div className="container shopping-cart__products-box">
                    <div className="row">
                        <div className="col-12">
                            <div className="btn-close" onClick={this.props.closeShoppingCart}>
                                <IconClose />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="shopping-cart__products-box__title">Shooping Cart</h2>
                            <p className="shopping-cart__products-box__descent">Here you can add or remove the products you picked</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 shopping-cart__products-box__list">
                            {< ShoppingCartProduct list={this.props.products} operations={this.shoppingCartProductOperations} />}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.inShoppingCart
    }
}

export default connect(mapStateToProps, {
    getShoppingCartProducts,
    addProductToShoppingCart,
    subtractProductToShoppingCart
})(ShoppingCartSection);
