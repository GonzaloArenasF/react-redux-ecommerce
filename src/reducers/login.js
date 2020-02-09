import * as loginService from "../actions/user/login";

const tokenStoragedName = 'ecommerce-token';

const initialState = {
    hasToken: ''
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginService.types.LOGIN:
            return Object.assign({}, state, { hasToken: (action.payload) ? true : false  });

        case loginService.types.CLEAR_TOKEN:
            localStorage.removeItem(tokenStoragedName);
            return Object.assign({}, state, { hasToken: false });

        default:
            return state;
    }
}