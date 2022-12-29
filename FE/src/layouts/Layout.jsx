import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Routes from '../routes/routes';
import ProductViewModal from '~/components/Main/ProductViewModal';

const Layout = () => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div>
                        {props.location.pathname !== '/login' &&
                        props.location.pathname !== '/register' &&
                        props.location.pathname !== '/forgotpassword' &&
                        props.location.pathname !== '/admin' &&
                        props.location.pathname !== '/admin/employee' &&
                        props.location.pathname !== '/admin/products' &&
                        props.location.pathname !== '/admin/bills' &&
                        props.location.pathname !== '/admin/accounts' &&
                        props.location.pathname !== '/admin/exit' &&
                        props.location.pathname !== '/admin/employee/add' &&
                        props.location.pathname !== '/admin/products/add' &&
                        props.location.pathname !== '/admin/accounts/add' &&
                        props.location.pathname !== '/admin/employee/update' &&
                        props.location.pathname !== '/admin/products/update' &&
                        props.location.pathname !== '/admin/accounts/update' ? (
                            <Header />
                        ) : null}
                        <div className="container">
                            <div className="main">
                                <Routes />
                            </div>
                        </div>
                        {props.location.pathname !== '/login' &&
                        props.location.pathname !== '/register' &&
                        props.location.pathname !== '/forgotpassword' &&
                        props.location.pathname !== '/admin' &&
                        props.location.pathname !== '/admin/employee' &&
                        props.location.pathname !== '/admin/products' &&
                        props.location.pathname !== '/admin/bills' &&
                        props.location.pathname !== '/admin/accounts' &&
                        props.location.pathname !== '/admin/exit' &&
                        props.location.pathname !== '/admin/employee/add' &&
                        props.location.pathname !== '/admin/products/add' &&
                        props.location.pathname !== '/admin/accounts/add' &&
                        props.location.pathname !== '/admin/employee/update' &&
                        props.location.pathname !== '/admin/products/update' &&
                        props.location.pathname !== '/admin/accounts/update' ? (
                            <Footer />
                        ) : null}
                        <ProductViewModal />
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
