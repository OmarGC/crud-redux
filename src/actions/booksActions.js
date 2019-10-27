import { ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR } from '../types';

// Crear un nuevo libro - Funcion principal
export const createNewBookAction = book => {
  return async (dispatch) => {
    dispatch( newBook() );

    // Insertar en la API
    let res = await fetch('http://localhost:9000/libros', {
      method: 'POST',
      body:JSON.stringify(book),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    });

    dispatch( addBookSuccess(book) );
  }
}

export const newBook = () => ({
  type: ADD_BOOK
})

// El payload = datos que vienen desde la interfaz y se tienen que comunicar con los reducers y actions

export const addBookSuccess = book => ({
  type: ADD_BOOK_SUCCESS,
  payload: book
})