import { combineReducers } from 'redux';

// Reducers
import { getBooks } from './books';
import { getToken } from './login';

const rootReducer = combineReducers({
  books: getBooks,
  token: getToken
});

export default rootReducer;
