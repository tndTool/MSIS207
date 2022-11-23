import React from 'react';
import ReactDOM from 'react-dom';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

import Layout from './layouts/Layout';

ReactDOM.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>,
    document.getElementById('root'),
);
