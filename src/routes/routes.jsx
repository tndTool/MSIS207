import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from '~/pages/Authen/Login';
import Register from '~/pages/Authen/Register';

import Home from '~/pages/Home/Home';
import Top from '~/pages/Home/Top';
import Outwear from '~/pages/Home/Outwear';
import Bottom from '~/pages/Home/Bottom';
import Accessories from '~/pages/Home/Accessories';

import productTop from '~/pages/productTop';

import Cart from '~/pages/Cart';

import Profile from '~/pages/Profile/Profile';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/top" component={Top} />
            <Route path="/outwear" component={Outwear} />
            <Route path="/bottoms" component={Bottom} />
            <Route path="/accessories" component={Accessories} />

            <Route path="/:slug" component={productTop} />

            <Route path="/profile" component={Profile} />

            <Route path="/cart" component={Cart} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    );
};

export default Routes;
