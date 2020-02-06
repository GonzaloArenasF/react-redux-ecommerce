import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getBooks } from '../../actions';

// Stateless
import { Book } from '../stateless/product/product';

// styles
import './product-list.scss';

class ProductListSection extends Component {

    constructor() {
        super();

        this.state = {
            books: [],
            dataReady: false,
        }
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <section className="container product-list">
                <div className="row">
                    <div className="col-12">
                        <h1>Books / Best Sellers</h1>
                    </div>
                    <div className="col-12">
                        <p>
                            The lists/names service returns a list of all the New York Time Best Sellers Lists. Some lists are published weekly and others monthly.
                            The response includes when each list was first published and last published. Rest Service:
                            <a href="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json" target="_blank" rel="noopener noreferrer">
                                &nbsp;https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.books.map(data => (
                            <div className="col-12 col-md-3" key={"book-" + data.id}> {Book(data)}</div>
                        ))
                    }
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
