import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'

import Home from '../components/Home/Home'

export const getRoutes = () => {
    return (
        <Fragment>
          <Route exact path="/home" component={Home} />
        </Fragment>
    );
}