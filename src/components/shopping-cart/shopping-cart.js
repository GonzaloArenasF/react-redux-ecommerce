import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import * as loginService from '../../actions/user/login';

// Stateless
import { ShoppingCartProduct } from '../stateless/shopping-cart-product/shopping-cart-product';

// styles
import './shopping-cart.scss';

class ShoppingCartSection extends Component {

    constructor() {
        super();

        this.state = {
            products: [],
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
                            <p className="shopping-cart__descent">Here you an add or remove the products you picked</p>
                        </div>
                    </div>
                    <div className="row">
                        {ShoppingCartProduct({ hasToken: this.state.hasToken })}
                    </div>
                </div>
            </section>
        ) : '';
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.list
    }
}

export default connect(mapStateToProps, {  })(ShoppingCartSection);
