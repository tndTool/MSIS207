import React, { useEffect, useState } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Pagination from '../components/table/Pagination';

import Button from '~/components/Main/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, getEmployee } from '../../action/employeeAction';
import moment from 'moment/moment';




const Employee = () => {

    const {employee} = useSelector((state) => state.employeeList)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteEmployee({id}));
    }

    useEffect(() => {
        dispatch(getEmployee())
    },[dispatch])

    // GET current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    
    // CHANGE PAGE
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                        <div className="table-wrapper">
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
                                    {employee?.slice(indexOfFirstPost, indexOfLastPost).map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Gender}</td>
                                        <td>{moment(item.Birthday).format('DD/MM/YYYY')}</td>
                                        <td>{item.Phone}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Address}</td>
                                        <td>
                                            <Button size="sm">
                                                <i className="bx bxs-pencil"></i>
                                            </Button>
                                            <Button onClick = {() => handleDelete(item.id)}size="sm">
                                                <i className="bx bxs-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination 
                            postPerPage={postPerPage}
                            totalPost={employee?.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Employee;
