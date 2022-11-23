import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Top from '../pages/Top';
import Outwear from '../pages/Outwear';
import Bottom from '../pages/Bottom';
import Accessories from '../pages/Accessories';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Profile from '../pages/Profile';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/top" component={Top} />
            <Route path="/outwear" component={Outwear} />
            <Route path="/bottom" component={Bottom} />
            <Route path="/accessories" component={Accessories} />

            <Route path="/top/:slug" component={Product} />
            <Route path="/outwear/:slug" component={Product} />
            <Route path="/bottom/:slug" component={Product} />
            <Route path="/accessories/:slug" component={Product} />

            <Route path="/profile" component={Profile} />

            <Route path="/cart" component={Cart} />
        </Switch>
    );
};

export default Routes;
