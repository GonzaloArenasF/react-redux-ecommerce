import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import * as loginService from '../../actions/user/login';
import { getShoppingCartProducts } from '../../actions/products/products';

// Stateless
import { ShoppingCartProduct } from '../stateless/shopping-cart-product/shopping-cart-product';

// styles
import './shopping-cart.scss';

class ShoppingCartSection extends Component {

    constructor() {
        super();

        this.state = {
            hasToken: false,
        }
    }

    componentDidMount() {
        this.tokenServiceSubscription = loginService.hasToken.subscribe({
            next: (hasToken) => {
                this.setState({ hasToken });
            },
            error: err => console.error(err),
            complete: () => console.log('completed')
        });

        this.props.getShoppingCartProducts();
    }

    componentWillUnmount() {
        this.tokenServiceSubscription.unsubscribe();
    }

    render() {
        return (this.state.hasToken) ? (
            <section className="shopping-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="shopping-cart__title">Shooping Cart</h2>
                        </div>
                        <div className="col-12">
                            <p className="shopping-cart__descent">Here you can add or remove the products you picked</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.props.products.map(data => {
                                return ShoppingCartProduct({ hasToken: this.state.hasToken, ...data });
                            })
                        }
                    </div>
                </div>
            </section>
        ) : '';
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.inShoopingCart
    }
}

export default connect(mapStateToProps, { getShoppingCartProducts })(ShoppingCartSection);
