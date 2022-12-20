import React from 'react';

import Table from '../components/table/Table';
import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';

import employeeList from '../JSON/employee-list.json';
import Button from '~/components/Main/Button';
import { Link } from 'react-router-dom';

const customerTableHead = ['Id', 'Name', 'Gender', 'Birthday', 'Phone', 'Email', 'Address', 'Actions'];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.gender}</td>
        <td>{item.birthday}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td>
            <Link to="#">
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

const Employee = () => {
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">employee manager</div>
                        <div className="admin__right__actions">
                            <div className="admin__right__actions__search">
                                <span>
                                    <input type="text" name="search" placeholder="Search..." />
                                </span>
                                <Button>Search</Button>
                            </div>
                            <div className="admin__right__actions__insert">
                                <Link to="/admin/employee/add">
                                    <Button>+ Add a new employee</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={employeeList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Employee;
