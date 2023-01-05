import React, { useEffect } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';

import Button from '~/components/Main/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, getEmployee } from '../../action/employeeAction';
import moment from 'moment/moment';



const Employee = () => {

    const {employee} = useSelector((state) => state.employeeList)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteEmployee({id}));
    }

    useEffect(() => {
        dispatch(getEmployee())
    },[dispatch])

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
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Birthday</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employee?.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Gender}</td>
                                        <td>{moment(item.Birthday).format('DD/MM/YYYY')}</td>
                                        <td>{item.Phone}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Address}</td>
                                        <td>
                                            <Link to="/admin/employee/update">
                                                <Button size="sm">
                                                    <i className="bx bxs-pencil"></i>
                                                </Button>
                                            </Link>
                                            <Button onClick = {() => handleDelete(item.id)}size="sm">
                                                <i className="bx bxs-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    ))};
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Employee;
