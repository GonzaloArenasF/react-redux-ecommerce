import React from 'react';

// Icons
import { ReactComponent as IconCloseSvg } from '../../../assets/images/icon-close.svg';
import { ReactComponent as UserIconSvg } from '../../../assets/images/icon-user.svg';
import { ReactComponent as ShoppingCartIconSvg } from '../../../assets/images/shopping-cart.svg';
import { ReactComponent as LogoutIconSvg } from '../../../assets/images/icon-logout.svg';
import { ReactComponent as ShoppingCartAddingIconSvg } from '../../../assets/images/shopping-cart-adding.svg';
import { ReactComponent as IconCheckSvg } from '../../../assets/images/icon-check.svg';

// Styles
import './style.scss';

const IconClose = () => {
    return (<IconCloseSvg className="icon-close" />)
}

const IconUser = () => {
    return ( <UserIconSvg className="icon-user" />)
}

const IconShoopingCart = () => {
    return ( <ShoppingCartIconSvg className="icon-shopping-cart" />)
}

const IconLogout = () => {
    return ( <LogoutIconSvg className="icon-logout" />)
}

const IconShoppingCartAdding = () => {
    return ( <ShoppingCartAddingIconSvg className="icon-shopping-cart-adding" />)
}

const IconCheck = () => {
    return ( <IconCheckSvg className="icon-check" />)
}



export {
    IconClose,
    IconUser,
    IconShoopingCart,
    IconLogout,
    IconShoppingCartAdding,
    IconCheck
}