import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import Top from '~/pages/Top';
import Outwear from '~/pages/Outwear';
import Bottom from '~/pages/Bottom';
import Accessories from '~/pages/Accessories';
import Cart from '~/pages/Cart';
import Product from '~/pages/Product';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/top" exact component={Top} />
            <Route path="/outwear" exact component={Outwear} />
            <Route path="/bottom" exact component={Bottom} />
            <Route path="/accessories" exact component={Accessories} />
            <Route path="/cart" exact component={Cart} />

            <Route path="/top/:slug" exact component={Product} />
            <Route path="/outwear/:slug" exact component={Product} />
            <Route path="/bottom/:slug" exact component={Product} />
            <Route path="/cart/:slug" exact component={Product} />
        </Switch>
    );
};

export default Routes;
