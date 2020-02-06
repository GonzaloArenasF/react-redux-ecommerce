import { DOING_LOGIN } from "../actions";

const initialState = {
    token: null
}

export function getToken(state = initialState, action) {
    switch (action.type) {
        case DOING_LOGIN:
            return Object.assign({}, state, { token: action.payload });
        default:
            return state;
    }
}