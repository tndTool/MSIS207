import React from 'react';

import Table from '../components/table/Table';
import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';

import productsList from '../JSON/products-list.json';
import Button from '~/components/Main/Button';
import { Link } from 'react-router-dom';

const customerTableHead = [
    'Title',
    'Price',
    'Image01',
    'Image02',
    'CategorySlug',
    'Colors',
    'Slug',
    'Size',
    'Description',
    'Category',
    'Actions',
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.image01}</td>
        <td>{item.image02}</td>
        <td>{item.categorySlug}</td>
        <td>{item.colors}</td>
        <td>{item.slug}</td>
        <td>{item.size}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>
            <Link to="/admin/products/update">
                <Button size="sm">
                    <i className="bx bxs-pencil"></i>
                </Button>
            </Link>
            <Button size="sm">
                <i className="bx bxs-trash"></i>
            </Button>
        </td>
    </tr>
);

const Products = () => {
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">products manager</div>
                        <div className="admin__right__actions">
                            <div className="admin__right__actions__search">
                                <span>
                                    <input type="text" name="search" placeholder="Search..." />
                                </span>
                                <Button>Search</Button>
                            </div>
                            <div className="admin__right__actions__insert">
                                <Link to="/admin/products/add">
                                    <Button>+ Add a new product</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={productsList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Products;
