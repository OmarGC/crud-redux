import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
          <div className="container">
            <h1>
              <Link to={'/productos'} className="text-light">
                CRUD - React, Redux hooks, REST API y Axios
              </Link>
            </h1>

            <Link to={'/productos/nuevo'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                Agregar productos &#43;
            </Link>
          </div>
        </nav>
    )
}

export default Navbar
