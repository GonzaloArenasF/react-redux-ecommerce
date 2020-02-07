import React, { Component } from 'react';
import './header.scss';

// Actions
import {
    login,
    tokenService
} from '../../actions';


// Icons
import { ReactComponent as UserIcon } from '../../assets/images/icon-user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-cart.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/icon-logout.svg';

// Stateless
import { Loading } from '../stateless/loading/loading';

// Components
import ShoppingCartSection from '../shopping-cart/shopping-cart';

class HeaderSection extends Component {

    constructor() {
        super();

        this.state = {
            hasToken: false,
            isAccesing: false,
            openShooping: false,
        }
    }

    componentDidMount() {
        this.tokenServiceSubscription = tokenService.hasToken.subscribe({
            next: (hasToken) => {
                this.setState({ hasToken });
            },
            error: err => console.error(err),
            complete: () => console.log('completed')
        });
    }

    componentWillUnmount() {
        this.tokenServiceSubscription.unsubscribe();
    }

    login = () => {
        const email = 'eve.holt@reqres.in';
        const password = 'cityslicka';

        this.setState({ isAccesing: true });
        login(email, password)
            .then((response) => {
                tokenService.setToken(response.data.token)
                this.setState({ isAccesing: false });
            });
    }

    showShoppingCart = () => {
        this.setState({
            openShooping: (this.state.openShooping) ? false : true
        })
    }

    logout = () => {
        tokenService.removeToken();
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <h2>Ecommerce</h2>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="icons-controls">
                                {(!this.state.hasToken) ? (<UserIcon onClick={this.login} />) : ('')}
                                {(this.state.hasToken) ? (<ShoppingCartIcon onClick={this.showShoppingCart} />) : ('')}
                                {(this.state.hasToken) ? (<LogoutIcon onClick={this.logout} />) : ('')}
                            </div>
                        </div>
                    </div>
                </div>
                {Loading({
                    isLoading: this.state.isAccesing,
                    message: 'Accesing'
                })}
                { (this.state.openShooping) ? <ShoppingCartSection /> : '' }
            </header>
        )
    }
}

export default HeaderSection;
