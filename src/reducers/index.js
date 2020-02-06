import { combineReducers } from 'redux';

// Reducers
import { getBooks } from './books';

const rootReducer = combineReducers({
  books: getBooks
});

export default rootReducer;
