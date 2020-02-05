import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getBooks } from '../../actions';

// styles
import './product-list.scss';

// Icons
import { ReactComponent as ShoppingCartAddingIcon } from '../../assets/images/shopping-cart-adding.svg';

class ProductListSection extends Component {

    componentWillMount() {
        this.props.getBooks();
    }

    renderProduct() {
        return this.props.books.map((book) => {
            return (
                <div className="col-12 col-md-3">
                    <article className="product">
                        <figure>
                            <img src={ book.image } alt={ book.title }></img>
                            <figcaption>{ book.title } de { book.author }</figcaption>
                        </figure>
                        <h4>{ book.title }</h4>
                        <p>{ book.author }</p>
                        <ShoppingCartAddingIcon />
                    </article>
                </div>
            )
        });
    }

    render() {
        return (
            <section className="container product-list">
                <div className="row">
                    <div className="col-12">
                        <h1>Books / Best Sellers</h1>
                    </div>
                    <div className="col-12">
                        <p>The lists/names service returns a list of all the NYT Best Sellers Lists. Some lists are published weekly and others monthly. The response includes when each list was first published and last published.</p>
                    </div>
                </div>
                <div className="row">
                    { this.renderProduct() }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.list
    }
}

export default connect(mapStateToProps, { getBooks })(ProductListSection);
