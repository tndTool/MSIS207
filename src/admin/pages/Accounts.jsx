import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../components/table/Table';
import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';

import accountsList from '../JSON/accounts-list.json';
import Button from '~/components/Main/Button';

const customerTableHead = ['Id', 'Username', 'Email', 'Password', 'Role', 'Actions'];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>
            <select>
                <option value="0">Admin</option>
                <option value="1">User</option>
            </select>
        </td>
        <td>
            <Link to="#">
                <Button size="sm">
                    <i class="bx bxs-pencil"></i>
                </Button>
            </Link>
            <Button size="sm">
                <i class="bx bxs-trash"></i>
            </Button>
        </td>
    </tr>
);

const Accounts = () => {
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">accounts manager</div>
                        <div className="admin__right__actions">
                            <div className="admin__right__actions__search">
                                <span>
                                    <input type="text" name="search" placeholder="Search..." />
                                </span>
                                <Button>Search</Button>
                            </div>
                            <div className="admin__right__actions__insert">
                                <Link to="/admin/accounts/add">
                                    <Button>+ Add a new account</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={accountsList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Accounts;
