import { combineReducers } from 'redux';
import { getBooks } from './books';

const rootReducer = combineReducers({
  books: getBooks
});

export default rootReducer;
