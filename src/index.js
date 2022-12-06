import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

import Layout from './layouts/Layout';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
