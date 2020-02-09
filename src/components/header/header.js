import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import * as loginService from '../../actions/user/login';

// Icons
import {
    IconUser,
    IconShoopingCart,
    IconLogout
} from '../stateless/icons';

// Stateless
import Loading from '../stateless/loading/loading';

// Components
import ShoppingCartSection from '../shopping-cart/shopping-cart';

// Style
import './header.scss';

class HeaderSection extends Component {

    constructor() {
        super();

        this.state = {
            isAccesing: false,
            openShooping: false,
        }
    }

    componentDidMount() {
        this.tokenServiceSubscription = loginService.hasToken.subscribe({
            next: (hasToken) => {
                this.setState({ hasToken });
                if (this.state.hasToken) this.setState({ isAccesing: false });
            },
            error: err => console.error(err),
            complete: () => console.log('completed')
        });
    }

    componentWillUnmount() {
        this.tokenServiceSubscription.unsubscribe();
    }

    login = () => {
        this.setState({ isAccesing: true });
        this.props.login();
    }

    toggleShoppingCart = (event) => {
        this.setState({
            openShooping: (this.state.openShooping) ? false : true
        })
    }

    logout = () => {
        this.props.clearToken();
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
                                {(!this.state.hasToken) ? (<div className="icon-btn" onClick={this.login}><IconUser /></div>) : ('')}
                                {(this.state.hasToken) ? (<div className="icon-btn" onClick={this.toggleShoppingCart}><IconShoopingCart /></div>) : ('')}
                                {(this.state.hasToken) ? (<div className="icon-btn" onClick={this.logout}><IconLogout  /></div>) : ('')}
                            </div>
                        </div>
                    </div>
                </div>
                <Loading isLoading={this.state.isAccesing} message="Accesing" />
                {(this.state.openShooping) ? <ShoppingCartSection closeShoppingCart={this.toggleShoppingCart}/> : '' }
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hasToken: state.login.hasToken
    }
}

export default connect(mapStateToProps, loginService)(HeaderSection);
