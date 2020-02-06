import React, { Component } from 'react';
import './header.scss';

// Actions
import { hasToken } from '../../actions';


// Icons
import { ReactComponent as UserIcon } from '../../assets/images/icon-user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-cart.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/icon-logout.svg';

class HeaderSection extends Component {

    constructor() {
        super();

        this.state = {
            hasToken: false
        }
    }

    componentDidMount() {
        this.tokenSubscription = hasToken().subscribe(
            (hasToken) => this.setState({hasToken}),
        )
    }

    componentWillUnmount() {
        this.tokenSubscription.unsubscribe();
    }

    login() {
        console.log('Login')
    }

    showShoppingCart() {
        console.log('Shopping Access')
    }

    logout() {
        console.log('Logout')
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <h2>Ecommerce</h2>
                        </div>
                        <div className="col-3">
                            <div className="icons-controls">
                                {(!this.state.hasToken) ? (<UserIcon onClick={this.login} />) : ('')}
                                {(this.state.hasToken) ? (<ShoppingCartIcon onClick={this.showShoppingCart} />) : ('')}
                                {(this.state.hasToken) ? (<LogoutIcon onClick={this.logout} />) : ('')}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderSection;
