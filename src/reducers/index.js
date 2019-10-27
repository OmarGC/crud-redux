import { combineReducers } from 'redux';
import booksReducer from './bookReducer'

export default combineReducers({
  books: booksReducer
});