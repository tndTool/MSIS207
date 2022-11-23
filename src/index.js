import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layouts/Layout';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>,
);
