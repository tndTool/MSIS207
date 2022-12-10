import React from 'react';

import Table from '../components/table/Table';
import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';

import billsList from '../JSON/bills-list.json';
import Button from '~/components/Main/Button';

const customerTableHead = ['Id', 'Name', 'Phone', 'Email', 'Address', 'Product name', 'Quantity', 'Total'];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td>{item.product_name}</td>
        <td>{item.quantity}</td>
        <td>{item.total}</td>
    </tr>
);

const Bills = () => {
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">bills manager</div>
                        <div className="admin__right__actions">
                            <div className="admin__right__actions__search">
                                <span>
                                    <input type="text" name="search" placeholder="Search..." />
                                </span>
                                <Button>Search</Button>
                            </div>
                        </div>
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={billsList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Bills;
