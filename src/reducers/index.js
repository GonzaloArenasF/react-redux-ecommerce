import { combineReducers } from 'redux';

// Reducers
import { bookReducer } from './books';
import { loginReducer } from './login';

const rootReducer = combineReducers({
  books: bookReducer,
  login: loginReducer
});

export default rootReducer;
