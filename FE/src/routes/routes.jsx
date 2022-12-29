import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '~/pages/Authen/Login';
import Register from '~/pages/Authen/Register';
import ForgotPassword from '~/pages/Authen/ForgotPassword/ForgotPassword';

// Admin:
import Admin from '~/admin/pages/Admin';
import Employee from '~/admin/pages/Employee';
import Products from '~/admin/pages/Products';
import Bills from '~/admin/pages/Bills';
import Accounts from '~/admin/pages/Accounts';
import Exit from '~/admin/pages/Exit';
import EmployeeAddItem from '~/admin/pages/AddItemPages/EmployeeAddItem';
import ProductsAddItem from '~/admin/pages/AddItemPages/ProductsAddItem';
import AccountsAddItem from '~/admin/pages/AddItemPages/AccountsAddItem';
import EmployeeUpdateItem from '~/admin/pages/UpdateItemPages/EmployeeUpdateItem';
import ProductsUpdateItem from '~/admin/pages/UpdateItemPages/ProductsUpdateItem';
import AccountsUpdateItem from '~/admin/pages/UpdateItemPages/AccountsUpdateItem';

// User:
import Home from '~/pages/Home/Home';
import Top from '~/pages/Home/Top';
import Outwear from '~/pages/Home/Outwear';
import Bottom from '~/pages/Home/Bottoms';
import Accessories from '~/pages/Home/Accessories';

import Profile from '~/pages/Profile/Profile';
import Orders from '~/pages/Profile/Orders';
import MyMembership from '~/pages/Profile/MyMembership';
import Points from '~/pages/Profile/Points';
import Coupons from '~/pages/Profile/Coupons';
import Address from '~/pages/Profile/Address';
import Account from '~/pages/Profile/Account';
import Logout from '~/pages/Profile/Logout';

import Cart from '~/pages/Pay/Cart';
import Checkout from '~/pages/Pay/Checkout';
import CheckoutView from '~/pages/Pay/CheckoutView';

import ProductsAll from '~/pages/Products/productsAll';

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />

            <Route path="/admin" exact component={Admin} />
            <Route path="/admin/employee" exact component={Employee} />
            <Route path="/admin/products" exact component={Products} />
            <Route path="/admin/bills" component={Bills} />
            <Route path="/admin/accounts" exact component={Accounts} />
            <Route path="/admin/exit" component={Exit} />
            <Route path="/admin/employee/add" component={EmployeeAddItem} />
            <Route path="/admin/products/add" component={ProductsAddItem} />
            <Route path="/admin/accounts/add" component={AccountsAddItem} />
            <Route path="/admin/employee/update" component={EmployeeUpdateItem} />
            <Route path="/admin/products/update" component={ProductsUpdateItem} />
            <Route path="/admin/accounts/update" component={AccountsUpdateItem} />

            <Route path="/" exact component={Home} />
            <Route path="/top" component={Top} />
            <Route path="/outwear" component={Outwear} />
            <Route path="/bottoms" component={Bottom} />
            <Route path="/accessories" component={Accessories} />

            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/orders" component={Orders} />
            <Route path="/profile/membership" component={MyMembership} />
            <Route path="/profile/points" component={Points} />
            <Route path="/profile/coupons" component={Coupons} />
            <Route path="/profile/address" component={Address} />
            <Route path="/profile/account" component={Account} />
            <Route path="/profile/logout" component={Logout} />

            <Route path="/cart" component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/checkout/view" component={CheckoutView} />

            <Route path="/:slug" component={ProductsAll} />
        </Switch>
    );
};
export default Routes;
