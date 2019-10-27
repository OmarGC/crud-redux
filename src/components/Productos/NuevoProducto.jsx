import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux'
import { createNewBookAction } from '../../actions/booksActions';

const NuevoProducto = () => {

    // State
    // name = this.state
    // setName = this.setState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    // Crear nuevo libro
    const dispatch = useDispatch();
    const addBook = book => dispatch( createNewBookAction(book) );

    // Agregar nuevo libro
    const submitNewBook = e => {
        e.preventDefault();

        addBook({
          name,
          price
        })

        // Validar el formulario
        if( name.trim() === '' || price.trim() === '' ) {
          console.log('Error validacion!')
          return;
        }

        // Si pasa la validacion

        // Crear nuevo producto

        // redireccionar
        
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={ submitNewBook }>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    name="name"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Nombre Libro"
                                    value={name}
                                    onChange={ e => setName(e.target.value) }
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input
                                    name="price"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro"
                                    value={price}
                                    onChange={ e => setPrice(e.target.value) }
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
