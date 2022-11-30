import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home/Home';
import Top from '~/pages/Home/Top';
import Outwear from '~/pages/Home/Outwear';
import Bottom from '~/pages/Home/Bottom';
import Accessories from '~/pages/Home/Accessories';
import Cart from '~/pages/Cart';
import Product from '~/pages/Product';
import Profile from '~/pages/Profile/Profile';
import Login from '~/pages/Authen/Login';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/top" component={Top} />
            <Route path="/outwear" component={Outwear} />
            <Route path="/bottoms" component={Bottom} />
            <Route path="/accessories" component={Accessories} />

            <Route path="/top/:slug" component={Product} />
            <Route path="/outwear/:slug" component={Product} />
            <Route path="/bottom/:slug" component={Product} />
            <Route path="/accessories/:slug" component={Product} />

            <Route path="/profile" component={Profile} />

            <Route path="/cart" component={Cart} />

            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Routes;
