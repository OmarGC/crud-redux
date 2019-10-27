import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Home from "../components/Home/Home";
import Productos from "../components/Productos/Productos";
import NuevoProducto from "../components/Productos/NuevoProducto";
import EditarProducto from "../components/Productos/EditarProducto";

export const getRoutes = () => {
  return (
    <Fragment>
      <Route exact path="/home" component={Home} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/productos/nuevo" component={NuevoProducto} />
      <Route exact path="/productos/editar/:id" component={EditarProducto} />
    </Fragment>
  );
};
