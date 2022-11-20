import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Top from '../pages/Top';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/top/:slug" component={Product} />
            <Route path="/top" component={Top} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
};

export default Routes;
