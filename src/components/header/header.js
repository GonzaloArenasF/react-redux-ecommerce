import React, { Component } from 'react';
import './header.scss';

// Icons
import { ReactComponent as UserIcon } from '../../assets/images/icon-user.svg';

class HeaderSection extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <h2>Ecommerce</h2>
                        </div>
                        <div className="col-3">
                            <a href="{{ window.location.href }}" className="user-access">
                                <UserIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderSection;
