import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '~/pages/Authen/Login';
import Register from '~/pages/Authen/Register';

import Home from '~/pages/Home/Home';
import Top from '~/pages/Home/Top';
import Outwear from '~/pages/Home/Outwear';
import Bottoms from '~/pages/Home/Bottom';
import Accessories from '~/pages/Home/Accessories';

import Profile from '~/pages/Profile/Profile';
import Orders from '~/pages/Profile/Orders';
import MyMembership from '~/pages/Profile/MyMembership';
import Points from '~/pages/Profile/Points';
import Coupons from '~/pages/Profile/Coupons';
import Address from '~/pages/Profile/Address';
import Account from '~/pages/Profile/Account';
import Logout from '~/pages/Profile/Logout';

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
            <Route path="/bottoms" component={Bottoms} />
            <Route path="/accessories" component={Accessories} />

            <Route path="/profile/logout" component={Logout} />
            <Route path="/profile/account" component={Account} />
            <Route path="/profile/address" component={Address} />
            <Route path="/profile/coupons" component={Coupons} />
            <Route path="/profile/points" component={Points} />
            <Route path="/profile/membership" component={MyMembership} />
            <Route path="/profile/orders" component={Orders} />
            <Route path="/profile" component={Profile} />

            <Route path="/cart" component={Cart} />

            <Route path="/:slug" component={ProductsAll} />
        </Switch>
    );
};
export default Routes;
