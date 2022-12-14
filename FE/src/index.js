import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

import Layout from './layouts/Layout';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <Provider store={store}>
                <Layout />
            </Provider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
