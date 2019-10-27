import { ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR } from '../types';

// Cada reducer tiene su propio state
const initalState = {
  books: [],
  error: null,
  loading: false
}

export default (state = initalState, action) => {
  switch(action.type) {
      case ADD_BOOK:
        return {
            ...state,
            error: null,
        }
      case ADD_BOOK_SUCCESS:
        return {
            ...state,
            error: null,
            books: [...state.books, action.payload]
        }
      case ADD_BOOK_ERROR:
        return {
            ...state,
            error: true,
        }
      default:
        return state;

  }
}