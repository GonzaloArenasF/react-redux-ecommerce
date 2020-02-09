import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import * as products from '../../actions/products/products';
import * as loginService from '../../actions/user/login';

// Stateless
import { Book } from '../stateless/product/product';

// Hooks
import { CurrentDateTime } from '../hooks';

// styles
import './product-list.scss';

class ProductListSection extends Component {

    constructor() {
        super();

        this.state = {
            products: [],
            hasToken: false,
        }
    }

    componentDidMount() {
        this.props.getProducts();

        this.tokenServiceSubscription = loginService.hasToken.subscribe({
            next: (hasToken) => {
                this.setState({ hasToken });
            },
            error: err => console.error(err),
            complete: () => console.log('completed')
        });
    }

    render() {
        return (
            <section className="container product-list">
                <div className="row">
                    <div className="col-12">
                        <h1>Books / Best Sellers</h1>
                        <CurrentDateTime />
                    </div>
                    <div className="col-12">
                        <p>
                            The lists/names service returns a list of all the New York Time Best Sellers Lists. Some lists are published weekly and others monthly.
                            The response includes when each list was first published and last published. Rest Service:
                            <a href="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json" target="_blank" rel="noopener noreferrer">
                                &nbsp;NYT Api
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.products.map(data => {
                            data.hasToken = this.state.hasToken;
                            data.addProductToShoppingCart = this.props.addProductToShoppingCart;
                            return  <div className="col-12 col-md-3" key={"book-" + data.id}> {Book(data)}</div>
                        })
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, products)(ProductListSection);
