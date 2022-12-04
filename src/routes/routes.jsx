import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '~/pages/Authen/Login';
import Register from '~/pages/Authen/Register';

import Home from '~/pages/Home/Home';
import Top from '~/pages/Home/Top';
import Outwear from '~/pages/Home/Outwear';
import Bottom from '~/pages/Home/Bottoms';
import Accessories from '~/pages/Home/Accessories';

import Profile from '~/pages/Profile/Profile';

import Cart from '~/pages/Cart';

import ProductsAll from '~/pages/Products/productsAll';

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="/" exact component={Home} />
            <Route path="/top" component={Top} />
            <Route path="/outwear" component={Outwear} />
            <Route path="/bottoms" component={Bottom} />
            <Route path="/accessories" component={Accessories} />

            <Route path="/profile" component={Profile} />

            <Route path="/cart" component={Cart} />

            <Route path="/:slug" component={ProductsAll} />
        </Switch>
    );
};
export default Routes;
