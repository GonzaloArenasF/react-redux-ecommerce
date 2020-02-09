import { combineReducers } from 'redux';

// Reducers
import { productsReducer } from './products';
import { loginReducer } from './login';

const rootReducer = combineReducers({
  products: productsReducer,
  login: loginReducer
});

export default rootReducer;
