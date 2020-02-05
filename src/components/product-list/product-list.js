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
                <div className="col-12 col-md-2">
                    <article className="product">
                        <figure>
                            <img src={ book.image } alt={ book.title }></img>
                            <figcaption>
                                <h4>{ book.title }</h4>
                            </figcaption>
                        </figure>
                        <p>{book.author}</p>
                        <ShoppingCartAddingIcon />
                    </article>
                </div>
            )
        });
    }

    render() {
        return (
            <section className="container">
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
