import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getShoppingCartProducts } from '../../actions/products/products';

// Stateless
import { ShoppingCartProduct } from '../stateless/shopping-cart-product/shopping-cart-product';

// Images
import { ReactComponent as IconClose} from '../../assets/images/icon-close.svg';

// styles
import './shopping-cart.scss';

class ShoppingCartSection extends Component {

    componentDidMount() {
        this.props.getShoppingCartProducts();
    }

    render() {
        return (
            <section className="shopping-cart">
                <div className="container shopping-cart__products-box">
                    <div className="row">
                        <div className="col-12">
                            <IconClose className="shopping-cart__icon-close" onClick={this.props.closeShoppingCart} />
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
                            {ShoppingCartProduct({ products: this.props.products })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.inShoopingCart
    }
}

export default connect(mapStateToProps, { getShoppingCartProducts })(ShoppingCartSection);
